const {PREFIXES, SORT_BY, SORT_ORDER} = require('./constants');

const mockResponse = {
	feed: {
		entry: [
			{
				id: ['PAPER_ID'],
				updated: ['UPDATED'],
				published: ['PUBLISHED'],
				title: ['TITLE'],
				summary: ['SUMMARY'],
				author: [{name: ['AUTHOR1']}, {name: ['AUTHOR2']}],
				link: [{$: {title: 'TITLE', href: 'URL', rel: 'REL', type: 'TYPE'}}],
				category: [{$: 'CATEGORY'}],
			},
		],
	},
};

const mockAxiosGet = jest.fn(() => Promise.resolve({data: 'XML'}));
const mockXmlPromisify = jest.fn(() => Promise.resolve(mockResponse));

jest.mock('axios', () => ({
	get: mockAxiosGet,
}));
jest.mock('xml2js');
jest.mock('util', () => ({
	promisify: jest.fn(() => mockXmlPromisify),
}));

const {search} = require('./index.js');

describe('arXiv search tests', () => {
	beforeEach(() => {
		mockAxiosGet.mockClear();
	});
	it('should return results as expected - default values', async () => {
		const results = await search({
			searchQueryParams: [
				{
					include: [{name: 'RNN'}, {name: 'Deep learning'}],
					exclude: [{name: 'LSTM'}],
				},
				{
					include: [{name: 'GAN'}],
				},
			],
		});
		expect(mockAxiosGet).toHaveBeenCalledWith(
			'http://export.arxiv.org/api/query?search_query=all:RNN+AND+all:Deep learning+ANDNOT+all:LSTM+OR+all:GAN&start=0&max_results=10'
		);
		expect(results).toMatchSnapshot();
	});
	it('should return results as expected', async () => {
		const results = await search({
			searchQueryParams: [
				{
					include: [{name: 'RNN'}, {name: 'Deep learning'}],
					exclude: [{name: 'LSTM'}],
				},
				{
					include: [{name: 'GAN', prefix: PREFIXES.CAT}],
				},
			],
			start: 10,
			maxResults: 50,
		});
		expect(mockAxiosGet).toHaveBeenCalledWith(
			'http://export.arxiv.org/api/query?search_query=all:RNN+AND+all:Deep learning+ANDNOT+all:LSTM+OR+cat:GAN&start=10&max_results=50'
		);
		expect(results).toMatchSnapshot();
	});
	it('should return results as expected - with sortBy and sortOrder', async () => {
		const results = await search({
			searchQueryParams: [
				{
					include: [{name: 'RNN'}, {name: 'Deep learning'}],
					exclude: [{name: 'LSTM'}],
				},
				{
					include: [{name: 'GAN'}],
				},
			],
			start: 10,
			maxResults: 50,
			sortBy: SORT_BY.RELEVANCE,
			sortOrder: SORT_ORDER.ASCENDING,
		});
		expect(mockAxiosGet).toHaveBeenCalledWith(
			'http://export.arxiv.org/api/query?search_query=all:RNN+AND+all:Deep learning+ANDNOT+all:LSTM+OR+all:GAN&start=10&max_results=50&sortBy=relevance&sortOrder=ascending'
		);
		expect(results).toMatchSnapshot();
	});
	it('should throw error - unsupported sortBy', async () => {
		await expect(
			search({
				searchQueryParams: [
					{
						include: [{name: 'GAN'}],
					},
				],
				sortBy: 'SORT_BY',
			})
		).rejects.toMatchSnapshot();
	});
	it('should throw error - unsupported sortOrder', async () => {
		await expect(
			search({
				searchQueryParams: [
					{
						include: [{name: 'GAN'}],
					},
				],
				sortOrder: 'SORT_ORDER',
			})
		).rejects.toMatchSnapshot();
	});
	it('should throw error - searchQueryParams is not an array', async () => {
		await expect(
			search({
				searchQueryParams: 'PARAMS',
			})
		).rejects.toMatchSnapshot();
	});
	it('should throw error - include tags is not an array', async () => {
		await expect(
			search({
				searchQueryParams: [
					{
						include: 'SOME_VALUE',
					},
				],
			})
		).rejects.toMatchSnapshot();
	});
	it('should throw error - exclude tags is not an array', async () => {
		await expect(
			search({
				searchQueryParams: [
					{
						include: [{name: 'GAN'}],
						exclude: 'SOME_VALUE',
					},
				],
			})
		).rejects.toMatchSnapshot();
	});
	it('should throw error - include tags empty', async () => {
		await expect(
			search({
				searchQueryParams: [
					{
						include: [],
					},
				],
			})
		).rejects.toMatchSnapshot();
	});
	it('should throw error - tag name is empty', async () => {
		await expect(
			search({
				searchQueryParams: [
					{
						include: [{name: ''}],
					},
				],
			})
		).rejects.toMatchSnapshot();
	});
	it('should throw error - tag name is not string', async () => {
		await expect(
			search({
				searchQueryParams: [
					{
						include: [{name: 123}],
					},
				],
			})
		).rejects.toMatchSnapshot();
	});
	it('should throw error - unsupported tag prefix', async () => {
		await expect(
			search({
				searchQueryParams: [
					{
						include: [{name: 'GAN', prefix: 'pre'}],
					},
				],
			})
		).rejects.toMatchSnapshot();
	});
});
