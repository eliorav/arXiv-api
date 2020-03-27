<p align="center">
  <h3 align="center">arXiv-api</h3>

  <p align="center">
    A Javascript wrapper of arxiv api.
  </p>
</p>

## Getting Started
### Installation

```sh
npm i arxiv-api
```

### Usage example

#### Using async/await
```js
const arxiv = require('arxiv-api');

const papers = await arxiv.search({
	searchQueryParams: [
		{
			include: [{name: 'RNN'}, {name: 'Deep learning'}],
			exclude: [{name: 'LSTM'}],
		},
		{
			include: [{name: 'GAN'}],
		},
	],
	start: 0,
	maxResults: 10,
});

console.log(papers);
```

#### Using Promise
```js
const arxiv = require('arxiv-api');

const papers = arxiv
	.search({
		searchQueryParams: [
			{
				include: [{name: 'RNN'}, {name: 'Deep learning'}],
				exclude: [{name: 'LSTM'}],
			},
			{
				include: [{name: 'GAN'}],
			},
		],
		start: 0,
		maxResults: 10,
	})
	.then((papers) => console.log(papers))
	.catch((error) => console.log(error));
```
## Documentation
### search - ARXIV-API.search({searchQueryParams, sortBy, sortOrder, start = 0, maxResults = 10})
* searchQueryParams [{include, exclude}] - An array of search temp. Every object in the array represent different search, and the result will be a logical OR between the objects.
	* include [{name, prefix}] - Which tags to include in the search. The result will be a logical AND between the objects.
		* name - The name of the tag.
		* prefix - one of the [arXiv supporting prefixes](https://arxiv.org/help/api/user-manual#51-details-of-query-construction)
	* exclude [{name, prefix}] - Which tags to exclude from the search. The result will be a logical AND NOT between the objects. the name and the prefix are the same as in the include fiels.
* start - The index of the first returned result.
* maxResults - The number of results returned by the query.
* sortBy - Can be "relevance", "lastUpdatedDate", "submittedDate".
* sortOrder - Can be either "ascending" or "descending".

## Contact
Elior Avraham – elior.av@gmail.com

