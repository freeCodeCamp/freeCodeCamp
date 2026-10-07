import type {MacroKeywordDefinition} from "ajv"

export default function getDef(): MacroKeywordDefinition {
  return {
    keyword: "prohibited",
    type: "object",
    schemaType: "array",
    macro: function (schema: string[]) {
      if (schema.length === 0) return true
      if (schema.length === 1) return {not: {required: schema}}
      return {not: {anyOf: schema.map((p) => ({required: [p]}))}}
    },
    metaSchema: {
      type: "array",
      items: {type: "string"},
    },
  }
}

module.exports = getDef
