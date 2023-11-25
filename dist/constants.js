"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SORT_ORDER = exports.SORT_BY = exports.SEPARATORS = exports.PREFIXES = void 0;
exports.PREFIXES = {
    ALL: 'all',
    TI: 'ti', // Title
    AU: 'au', // Author
    ABS: 'abs', // Abstract
    CO: 'co', // Comment
    JR: 'jr', // Journal Reference
    CAT: 'cat', // Subject Category
    RN: 'rn', // Report Number
};
exports.SEPARATORS = {
    AND: '+AND+',
    OR: '+OR+',
    ANDNOT: '+ANDNOT+',
};
exports.SORT_BY = {
    RELEVANCE: 'relevance',
    LAST_UPDATED_DATE: 'lastUpdatedDate',
    SUBMITTED_DATE: 'submittedDate',
};
exports.SORT_ORDER = {
    ASCENDING: 'ascending',
    DESCENDING: 'descending',
};
