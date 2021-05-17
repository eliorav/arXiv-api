const {readFileSync} = require('fs');
const {join} = require('path');
const {parseResponseData} = require('../src/index');

describe('test response data parser with sample xml file', () => {
	it('should not throw errors', async () => {
		const text = readFileSync(join(__dirname, 'sample.xml'));
		const result = await parseResponseData(text);
		await expect(result).toMatchSnapshot();
	});
});
