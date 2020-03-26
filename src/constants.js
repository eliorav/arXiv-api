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

module.exports = {
	PREFIXES,
	SEPARATORS,
};
