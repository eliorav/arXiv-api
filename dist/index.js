"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const _ = __importStar(require("lodash"));
const constants_1 = require("./constants");
const util_1 = __importDefault(require("util"));
const xml2js_1 = require("xml2js");
const parseStringPromisified = util_1.default.promisify(xml2js_1.parseString);
const get_arxiv_url = ({ searchQuery, sortBy, sortOrder, start, maxResults }) => {
    return `http://export.arxiv.org/api/query?search_query=${searchQuery}&start=${start}&max_results=${maxResults}${sortBy ? `&sortBy=${sortBy}` : ''}${sortOrder ? `&sortOrder=${sortOrder}` : ''}`;
};
/**
 * Parse arXiv entry object.
 * @param {Object} entry.
 * @returns {Object} formatted arXiv entry object.
 */
function parseArxivObject(entry) {
    return {
        id: _.get(entry, 'id[0]', ''),
        title: _.get(entry, 'title[0]', ''),
        summary: _.get(entry, 'summary[0]', '').trim(),
        authors: _.get(entry, 'author', []).map((author) => author.name),
        links: _.get(entry, 'link', []).map((link) => link.$),
        published: _.get(entry, 'published[0]', ''),
        updated: _.get(entry, 'updated[0]', ''),
        categories: _.get(entry, 'category', []).map((category) => category.$),
    };
}
/**
 * Parse a tag to a query string.
 * @param {{name: string, prefix: string}} tag
 * @param {string} name - the name of the tag - mandatory.
 * @param {string} prefix - one of PREFIXES - default to ALL.
 * @returns {string} query string of a tag.
 */
function parseTag({ name, prefix = constants_1.PREFIXES.ALL }) {
    if (!_.isString(name) || _.isEmpty(name)) {
        throw new Error('you must specify tag name');
    }
    if (!Object.values(constants_1.PREFIXES).includes(prefix)) {
        throw new Error(`unsupported prefix: ${prefix}`);
    }
    return `${prefix}:${name}`;
}
/**
 * Parse include tags and exclude tags to a query string.
 * @param {Array.<{include: Array, exclude: Array}>} tags
 * @returns {string} query string between tags.
 */
function parseTags({ include, exclude = [] }) {
    if (!Array.isArray(include) || !Array.isArray(exclude)) {
        throw new Error('include and exclude must be arrays');
    }
    if (include.length === 0) {
        throw new Error('include is a mandatory field');
    }
    return `${include.map(parseTag).join(constants_1.SEPARATORS.AND)}${exclude.length > 0 ? constants_1.SEPARATORS.ANDNOT : ''}${exclude
        .map(parseTag)
        .join(constants_1.SEPARATORS.ANDNOT)}`;
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
async function search({ searchQueryParams, sortBy, sortOrder, start = 0, maxResults = 10 }) {
    if (!Array.isArray(searchQueryParams)) {
        throw new Error('query param must be an array');
    }
    if (sortBy && !Object.values(constants_1.SORT_BY).includes(sortBy)) {
        throw new Error(`unsupported sort by option. should be one of: ${Object.values(constants_1.SORT_BY).join(' ')}`);
    }
    if (sortOrder && !Object.values(constants_1.SORT_ORDER).includes(sortOrder)) {
        throw new Error(`unsupported sort order option. should be one of: ${Object.values(constants_1.SORT_ORDER).join(' ')}`);
    }
    const searchQuery = searchQueryParams.map(parseTags).join(constants_1.SEPARATORS.OR);
    const response = await axios_1.default.get(get_arxiv_url({ searchQuery, sortBy, sortOrder, start, maxResults }));
    const parsedData = await parseStringPromisified(response.data);
    return _.get(parsedData, 'feed.entry', []).map(parseArxivObject);
}
exports.default = search;
