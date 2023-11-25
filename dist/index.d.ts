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
/**
 * Fetch data from arXiv API
 * @async
 * @param {{searchQueryParams: Array.<{include: Array, exclude: Array}>, start: number, maxResults: number}} args
 * @param {Array} searchQueryParams - array of search query.
 * @param {string} sortBy - can be "relevance", "lastUpdatedDate", "submittedDate".
 * @param {string} sortOrder - can be either "ascending" or "descending".
 * @param {number} start - the index of the first returned result.
 * @param {number} maxResults - the number of results returned by the query.
 * @returns {Promise}
 */
declare function search({ searchQueryParams, sortBy, sortOrder, start, maxResults }: SearchApiType): Promise<{
    id: string;
    title: string;
    summary: string;
    authors: any[];
    links: any[];
    published: string;
    updated: string;
    categories: any[];
}[]>;
export default search;
