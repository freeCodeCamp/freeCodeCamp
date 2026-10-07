export interface QueryOptions {
  [key: string]: RegExp | boolean
}

export type QueryArgs = [string, QueryOptions?]

export interface Suggestion {
  queryName: string
  queryMethod: string
  queryArgs: QueryArgs
  variant: string
  warning?: string
  toString(): string
}

export type Variant =
  | 'find'
  | 'findAll'
  | 'get'
  | 'getAll'
  | 'query'
  | 'queryAll'

export type Method =
  | 'AltText'
  | 'alttext'
  | 'DisplayValue'
  | 'displayvalue'
  | 'LabelText'
  | 'labeltext'
  | 'PlaceholderText'
  | 'placeholdertext'
  | 'Role'
  | 'role'
  | 'TestId'
  | 'testid'
  | 'Text'
  | 'text'
  | 'Title'
  | 'title'

export function getSuggestedQuery(
  element: HTMLElement,
  variant?: Variant,
  method?: Method,
): Suggestion | undefined
