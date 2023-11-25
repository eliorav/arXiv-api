"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const index_1 = require("./index");
const globals_1 = require("@jest/globals");
const mockResponse = {
    feed: {
        entry: [
            {
                id: ['PAPER_ID'],
                updated: ['UPDATED'],
                published: ['PUBLISHED'],
                title: ['TITLE'],
                summary: ['SUMMARY'],
                author: [{ name: ['AUTHOR1'] }, { name: ['AUTHOR2'] }],
                link: [{ $: { title: 'TITLE', href: 'URL', rel: 'REL', type: 'TYPE' } }],
                category: [{ $: 'CATEGORY' }],
            },
        ],
    },
};
const mockAxiosGet = globals_1.jest.fn(() => Promise.resolve({ data: 'XML' }));
const mockXmlPromisify = globals_1.jest.fn(() => Promise.resolve(mockResponse));
globals_1.jest.mock('axios', () => ({
    get: mockAxiosGet,
}));
globals_1.jest.mock('xml2js');
globals_1.jest.mock('util', () => ({
    promisify: globals_1.jest.fn(() => mockXmlPromisify),
}));
(0, globals_1.describe)('arXiv search tests', () => {
    (0, globals_1.beforeEach)(() => {
        mockAxiosGet.mockClear();
    });
    (0, globals_1.it)('should return results as expected - default values', async () => {
        const results = await (0, index_1.search)({
            searchQueryParams: [
                {
                    include: [{ name: 'RNN' }, { name: 'Deep learning' }],
                    exclude: [{ name: 'LSTM' }],
                },
                {
                    include: [{ name: 'GAN' }],
                },
            ],
        });
        (0, globals_1.expect)(mockAxiosGet).toHaveBeenCalledWith('http://export.arxiv.org/api/query?search_query=all:RNN+AND+all:Deep learning+ANDNOT+all:LSTM+OR+all:GAN&start=0&max_results=10');
        (0, globals_1.expect)(results).toMatchSnapshot();
    });
    (0, globals_1.it)('should return results as expected', async () => {
        const results = await (0, index_1.search)({
            searchQueryParams: [
                {
                    include: [{ name: 'RNN' }, { name: 'Deep learning' }],
                    exclude: [{ name: 'LSTM' }],
                },
                {
                    include: [{ name: 'GAN', prefix: constants_1.PREFIXES.CAT }],
                },
            ],
            start: 10,
            maxResults: 50,
        });
        (0, globals_1.expect)(mockAxiosGet).toHaveBeenCalledWith('http://export.arxiv.org/api/query?search_query=all:RNN+AND+all:Deep learning+ANDNOT+all:LSTM+OR+cat:GAN&start=10&max_results=50');
        (0, globals_1.expect)(results).toMatchSnapshot();
    });
    (0, globals_1.it)('should return results as expected - with sortBy and sortOrder', async () => {
        const results = await (0, index_1.search)({
            searchQueryParams: [
                {
                    include: [{ name: 'RNN' }, { name: 'Deep learning' }],
                    exclude: [{ name: 'LSTM' }],
                },
                {
                    include: [{ name: 'GAN' }],
                },
            ],
            start: 10,
            maxResults: 50,
            sortBy: constants_1.SORT_BY.RELEVANCE,
            sortOrder: constants_1.SORT_ORDER.ASCENDING,
        });
        (0, globals_1.expect)(mockAxiosGet).toHaveBeenCalledWith('http://export.arxiv.org/api/query?search_query=all:RNN+AND+all:Deep learning+ANDNOT+all:LSTM+OR+all:GAN&start=10&max_results=50&sortBy=relevance&sortOrder=ascending');
        (0, globals_1.expect)(results).toMatchSnapshot();
    });
    (0, globals_1.it)('should throw error - unsupported sortBy', async () => {
        await (0, globals_1.expect)((0, index_1.search)({
            searchQueryParams: [
                {
                    include: [{ name: 'GAN' }],
                },
            ],
            sortBy: 'SORT_BY',
        })).rejects.toMatchSnapshot();
    });
    (0, globals_1.it)('should throw error - unsupported sortOrder', async () => {
        await (0, globals_1.expect)((0, index_1.search)({
            searchQueryParams: [
                {
                    include: [{ name: 'GAN' }],
                },
            ],
            sortOrder: 'SORT_ORDER',
        })).rejects.toMatchSnapshot();
    });
    (0, globals_1.it)('should throw error - searchQueryParams is not an array', async () => {
        await (0, globals_1.expect)((0, index_1.search)({
            searchQueryParams: 'PARAMS',
        })).rejects.toMatchSnapshot();
    });
    (0, globals_1.it)('should throw error - include tags is not an array', async () => {
        await (0, globals_1.expect)((0, index_1.search)({
            searchQueryParams: [
                {
                    include: 'SOME_VALUE',
                },
            ],
        })).rejects.toMatchSnapshot();
    });
    (0, globals_1.it)('should throw error - exclude tags is not an array', async () => {
        await (0, globals_1.expect)((0, index_1.search)({
            searchQueryParams: [
                {
                    include: [{ name: 'GAN' }],
                    exclude: 'SOME_VALUE',
                },
            ],
        })).rejects.toMatchSnapshot();
    });
    (0, globals_1.it)('should throw error - include tags empty', async () => {
        await (0, globals_1.expect)((0, index_1.search)({
            searchQueryParams: [
                {
                    include: [],
                },
            ],
        })).rejects.toMatchSnapshot();
    });
    (0, globals_1.it)('should throw error - tag name is empty', async () => {
        await (0, globals_1.expect)((0, index_1.search)({
            searchQueryParams: [
                {
                    include: [{ name: '' }],
                },
            ],
        })).rejects.toMatchSnapshot();
    });
    (0, globals_1.it)('should throw error - tag name is not string', async () => {
        await (0, globals_1.expect)((0, index_1.search)({
            searchQueryParams: [
                {
                    include: [{ name: 123 }],
                },
            ],
        })).rejects.toMatchSnapshot();
    });
    (0, globals_1.it)('should throw error - unsupported tag prefix', async () => {
        await (0, globals_1.expect)((0, index_1.search)({
            searchQueryParams: [
                {
                    include: [{ name: 'GAN', prefix: 'pre' }],
                },
            ],
        })).rejects.toMatchSnapshot();
    });
});
