import axios from 'axios';
import * as _ from 'lodash';
import { PREFIXES, SEPARATORS, SORT_BY, SORT_ORDER } from './constants';
import util from 'util';
import { parseString } from 'xml2js';

const parseStringPromisified = util.promisify(parseString);
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
}
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
}
  


const get_arxiv_url = ({ searchQuery, sortBy, sortOrder, start, maxResults}: ArxivQueryType) => {
  return `http://export.arxiv.org/api/query?search_query=${searchQuery}&start=${start}&max_results=${maxResults}${sortBy ? `&sortBy=${sortBy}` : ''}${sortOrder ? `&sortOrder=${sortOrder}` : ''}`;
}

/**
 * Parse arXiv entry object.
 * @param {Object} entry.
 * @returns {Object} formatted arXiv entry object.
 */
function parseArxivObject(entry: object) {
    return {
      id: _.get(entry, 'id[0]', ''),
      title: _.get(entry, 'title[0]', ''),
      summary: _.get(entry, 'summary[0]', '').trim(),
      authors: _.get(entry, 'author', []).map((author: any) => author.name),
      links: _.get(entry, 'link', []).map((link: any) => link.$),
      published: _.get(entry, 'published[0]', ''),
      updated: _.get(entry, 'updated[0]', ''),
      categories: _.get(entry, 'category', []).map((category: any) => category.$),
    };
}
/**
 * Parse a tag to a query string.
 * @param {{name: string, prefix: string}} tag
 * @param {string} name - the name of the tag - mandatory.
 * @param {string} prefix - one of PREFIXES - default to ALL.
 * @returns {string} query string of a tag.
 */
function parseTag({ name, prefix = PREFIXES.ALL }: TagData) {
    if (!_.isString(name) || _.isEmpty(name)) {
        throw new Error('you must specify tag name');
    }
    if (!Object.values(PREFIXES).includes(prefix)) {
        throw new Error(`unsupported prefix: ${prefix}`);
    }
    return `${prefix}:${name}`;
}
/**
 * Parse include tags and exclude tags to a query string.
 * @param {Array.<{include: Array, exclude: Array}>} tags
 * @returns {string} query string between tags.
 */
function parseTags({ include, exclude = [] }: SearchQueryParams) {
    if (!Array.isArray(include) || !Array.isArray(exclude)) {
        throw new Error('include and exclude must be arrays');
    }
    if (include.length === 0) {
        throw new Error('include is a mandatory field');
    }
    return `${include.map(parseTag).join(SEPARATORS.AND)}${exclude.length > 0 ? SEPARATORS.ANDNOT : ''}${exclude
        .map(parseTag)
        .join(SEPARATORS.ANDNOT)}`;
}


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
export async function search({ searchQueryParams, sortBy, sortOrder, start = 0, maxResults = 10 }: SearchApiType) {
    if (!Array.isArray(searchQueryParams)) {
        throw new Error('query param must be an array');
    }
    if (sortBy && !Object.values(SORT_BY).includes(sortBy)) {
        throw new Error(`unsupported sort by option. should be one of: ${Object.values(SORT_BY).join(' ')}`);
    }
    if (sortOrder && !Object.values(SORT_ORDER).includes(sortOrder)) {
        throw new Error(`unsupported sort order option. should be one of: ${Object.values(SORT_ORDER).join(' ')}`);
    }
    const searchQuery = searchQueryParams.map(parseTags).join(SEPARATORS.OR);
    const response = await axios.get(get_arxiv_url({ searchQuery, sortBy, sortOrder, start, maxResults }));
    const parsedData = await parseStringPromisified(response.data);
    return _.get(parsedData, 'feed.entry', []).map(parseArxivObject);
}
