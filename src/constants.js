const PREFIXES = {
	ALL: 'all',
	TI: 'ti', // Title
	AU: 'au', // Author
	ABS: 'abs', // Abstract
	CO: 'co', // Comment
	JR: 'jr', // Journal Reference
	CAT: 'cat', // Subject Category
	RN: 'rn', // Report Number
};

const SEPARATORS = {
	AND: '+AND+',
	OR: '+OR+',
	ANDNOT: '+ANDNOT+',
};

const SORT_BY = {
	RELEVANCE: 'relevance',
	LAST_UPDATED_DATE: 'lastUpdatedDate',
	SUBMITTED_DATE: 'submittedDate',
};

const SORT_ORDER = {
	ASCENDING: 'ascending',
	DESCENDING: 'descending',
};

module.exports = {
	PREFIXES,
	SEPARATORS,
	SORT_BY,
	SORT_ORDER,
};
