import type {MacroKeywordDefinition, SchemaObject, Schema} from "ajv"
import type {DefinitionOptions} from "./_types"
import {metaSchemaRef} from "./_util"

export default function getDef(opts?: DefinitionOptions): MacroKeywordDefinition {
  return {
    keyword: "deepProperties",
    type: "object",
    schemaType: "object",
    macro: function (schema: Record<string, SchemaObject>) {
      const allOf = []
      for (const pointer in schema) allOf.push(getSchema(pointer, schema[pointer]))
      return {allOf}
    },
    metaSchema: {
      type: "object",
      propertyNames: {type: "string", format: "json-pointer"},
      additionalProperties: metaSchemaRef(opts),
    },
  }
}

function getSchema(jsonPointer: string, schema: SchemaObject): SchemaObject {
  const segments = jsonPointer.split("/")
  const rootSchema: SchemaObject = {}
  let pointerSchema: SchemaObject = rootSchema
  for (let i = 1; i < segments.length; i++) {
    let segment: string = segments[i]
    const isLast = i === segments.length - 1
    segment = unescapeJsonPointer(segment)
    const properties: Record<string, Schema> = (pointerSchema.properties = {})
    let items: SchemaObject[] | undefined
    if (/[0-9]+/.test(segment)) {
      let count = +segment
      items = pointerSchema.items = []
      pointerSchema.type = ["object", "array"]
      while (count--) items.push({})
    } else {
      pointerSchema.type = "object"
    }
    pointerSchema = isLast ? schema : {}
    properties[segment] = pointerSchema
    if (items) items.push(pointerSchema)
  }
  return rootSchema
}

function unescapeJsonPointer(str: string): string {
  return str.replace(/~1/g, "/").replace(/~0/g, "~")
}

module.exports = getDef
