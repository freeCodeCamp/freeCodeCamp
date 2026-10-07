export type KeywordResolver = (
  keyword: string,
  keywordValues: any[],
  mergedSchema: any,
  parentSchemas: any[],
  options: MergeOptions
) => any

export type KeywordResolvers = {
  $id: KeywordResolver,
  type: KeywordResolver,
  enum: KeywordResolver,
  minLength: KeywordResolver,
  maxLength: KeywordResolver,
  minimum: KeywordResolver,
  maximum: KeywordResolver,
  multipleOf: KeywordResolver,
  exclusiveMinimum: KeywordResolver,
  exclusiveMaximum: KeywordResolver,
  minItems: KeywordResolver,
  maxItems: KeywordResolver,
  maxProperties: KeywordResolver,
  minProperties: KeywordResolver,
  const: KeywordResolver,
  default: KeywordResolver,
  format: KeywordResolver,
  required: KeywordResolver,
  properties: KeywordResolver,
  patternProperties: KeywordResolver,
  additionalProperties: KeywordResolver,
  items: KeywordResolver,
  additionalItems: KeywordResolver,
  definitions: KeywordResolver,
  $defs: KeywordResolver,
  nullable: KeywordResolver,
  oneOf: KeywordResolver,
  anyOf: KeywordResolver,
  allOf: KeywordResolver,
  not: KeywordResolver,
  if: KeywordResolver,
  then: KeywordResolver,
  else: KeywordResolver,
  dependencies: KeywordResolver,
  dependentRequired: KeywordResolver,
  dependentSchemas: KeywordResolver,
  propertyNames: KeywordResolver,
  uniqueItems: KeywordResolver,
  contains: KeywordResolver
}

export type MergeOptions = {
  defaultResolver?: KeywordResolver,
  resolvers?: Partial<KeywordResolvers>,
  // enum of ["throw", "skip", "first"]
  onConflict?: 'throw' | 'skip' | 'first'
}

export function mergeSchemas (schemas: any[], options?: MergeOptions): any

export const keywordsResolvers: KeywordResolvers
export const defaultResolver: KeywordResolver
