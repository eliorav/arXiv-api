import { convertableToString } from 'xml2js'

export type SearchResult = {
  link: string // query {search_query,start,max_results,sortBy,sortOrder}
  updated: string // iso timestamp
  totalResults: number
  startIndex: number
  itemsPerPage: number
  entries: Entry[]
}
export type Entry = {
  id: string // url
  title: string
  summary: string
  authors: string[][]
  links: Link[]
  published: string // iso timestamp
  updated: string // iso timestamp
  categories: Category[]
}
export type Link = {
  title?: 'pdf'
  href: string
  ref: 'alternate' | 'related'
  type: 'text/html' | 'application/pdf'
}
export type Category = {
  term: string
  scheme: string
}

export type Options = {
  searchQueryParams: SearchQueryParam[]
  sortBy?: 'relevance' | 'lastUpdatedDate' | 'submittedDate'
  sortOrder?: 'ascending' | 'descending'
  start?: number // default 0
  maxResults?: number // default 10
}
export type SearchQueryParam = {
  include: SearchTerm[] // non-empty
  exclude?: SearchTerm[]
}
export type SearchTerm = {
  name: string
  prefix?: Prefix // default 'all'
}
export type Prefix =
  | 'all'
  | 'ti' // Title
  | 'au' // Author
  | 'abs' // Abstract
  | 'co' // Comment
  | 'jr' // Journal Reference
  | 'cat' // Subject Category
  | 'rn' // Report Number

export function search(options: Options): Promise<Entry[]>

export function searchWithMeta(options: Options): Promise<SearchResult>

export function parseResponseData(
  convertableToString: convertableToString,
): Promise<SearchResult>
