import type {DefinitionOptions} from "./_types"
import type {SchemaObject, KeywordCxt, Name} from "ajv"
import {_} from "ajv/dist/compile/codegen"

const META_SCHEMA_ID = "http://json-schema.org/schema"

export function metaSchemaRef({defaultMeta}: DefinitionOptions = {}): SchemaObject {
  return defaultMeta === false ? {} : {$ref: defaultMeta || META_SCHEMA_ID}
}

export function usePattern(
  {gen, it: {opts}}: KeywordCxt,
  pattern: string,
  flags = opts.unicodeRegExp ? "u" : ""
): Name {
  const rx = new RegExp(pattern, flags)
  return gen.scopeValue("pattern", {
    key: rx.toString(),
    ref: rx,
    code: _`new RegExp(${pattern}, ${flags})`,
  })
}
