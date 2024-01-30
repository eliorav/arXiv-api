import {PREFIXES, SEPARATORS, SORT_BY, SORT_ORDER} from "./constants";
import {XMLParser} from 'fast-xml-parser';

type ArxivQueryType = {
    searchQuery: string;
    sortBy?: string;
    sortOrder?: string;
    start?: number;
    maxResults?: number;
};
type TagData = {
    name: string;
    prefix?: string;
};
type SearchQueryParams = {
    include: TagData[];
    exclude?: TagData[];
};
type SearchApiType = {
    searchQueryParams: SearchQueryParams[];
    sortBy?: string;
    sortOrder?: string;
    start?: number;
    maxResults?: number;
};

const get_arxiv_url = ({
                           searchQuery,
                           sortBy,
                           sortOrder,
                           start,
                           maxResults,
                       }: ArxivQueryType) => {
    return `http://export.arxiv.org/api/query?search_query=${searchQuery}&start=${start}&max_results=${maxResults}${
    sortBy ? `&sortBy=${sortBy}` : ""
}${sortOrder ? `&sortOrder=${sortOrder}` : ""}`;
};

function parseArxivObject(entry: any) {
    return {
        id: entry.id,
        title: entry.title,
        summary: entry.summary,
        published: entry.published,
        updated: entry.updated,
        authors: entry.author,
        doi: entry["arxiv:doi"],
        comment: entry["arxiv:comment"],
        journalReference: entry["arxiv:journal_ref"],
        primaryCategory: entry["arxiv:primary_category"],
        categories: entry["arxiv:primary_category"],
        links: entry.link,
    };
}

function parseTag({name, prefix = PREFIXES.ALL}: TagData) {
    if (!name || name.trim() === '') {
        throw new Error("you must specify tag name");
    }
    if (!Object.values(PREFIXES).includes(prefix)) {
        throw new Error(`unsupported prefix: ${prefix}`);
    }
    return `${prefix}:${name}`;
}

function parseTags({include, exclude = []}: SearchQueryParams) {
    if (!Array.isArray(include) || !Array.isArray(exclude)) {
        throw new Error("include and exclude must be arrays");
    }
    if (include.length === 0) {
        throw new Error("include is a mandatory field");
    }
    return `${include.map(parseTag).join(SEPARATORS.AND)}${
        exclude.length > 0 ? SEPARATORS.ANDNOT : ""
    }${exclude.map(parseTag).join(SEPARATORS.ANDNOT)}`;
}

async function search({
                          searchQueryParams,
                          sortBy,
                          sortOrder,
                          start = 0,
                          maxResults = 10,
                      }: SearchApiType) {
    if (!Array.isArray(searchQueryParams)) {
        throw new Error("searchQueryParams must be an array");
    }
    for (const params of searchQueryParams) {
        if (!Array.isArray(params.include)) {
            throw new Error("include tags must be an array");
        }
    }
    if (sortBy && !Object.values(SORT_BY).includes(sortBy)) {
        throw new Error(
            `unsupported sort by option. should be one of: ${Object.values(
                SORT_BY,
            ).join(" ")}`,
        );
    }
    if (sortOrder && !Object.values(SORT_ORDER).includes(sortOrder)) {
        throw new Error(
            `unsupported sort order option. should be one of: ${Object.values(
                SORT_ORDER,
            ).join(" ")}`,
        );
    }
    const searchQuery = searchQueryParams.map(parseTags).join(SEPARATORS.OR);
    const options: object = {
        allowBooleanAttributes: true,
        alwaysCreateTextNode: false,
        attributeNamePrefix: "@_",
        attributesGroupName: false,
        cdataTagName: "#cdata",
        ignoreAttributes: true,
        numberParseOptions: {hex: false, leadingZeros: true},
        parseAttributeValue: false,
        parseNodeValue: true,
        preserveOrder: false,
        removeNSPrefix: true,
        textNodeName: "#text",
        trimValues: true,
    };

    const parser = new XMLParser(options);

    const response = await fetch(
        get_arxiv_url({
            searchQuery,
            sortBy,
            sortOrder,
            start,
            maxResults,
        }),
    );

    const data = await response.text();
    const parsedData = parser.parse(data);
    const entries = parsedData.feed && parsedData.feed.entry ? parsedData.feed.entry : [];

    return {
        totalResults: parsedData.feed && parsedData.feed["opensearch:totalResults"] ? parsedData.feed["opensearch:totalResults"] : 0,
        startIndex: parsedData.feed && parsedData.feed["opensearch:startIndex"] ? parsedData.feed["opensearch:startIndex"] : 0,
        itemsPerPage: parsedData.feed && parsedData.feed["opensearch:itemsPerPage"] ? parsedData.feed["opensearch:itemsPerPage"] : 0,
        entries: entries.map(parseArxivObject),
    }
}

export default search;