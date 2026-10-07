import type {MacroKeywordDefinition} from "ajv"

export default function getDef(): MacroKeywordDefinition {
  return {
    keyword: "allRequired",
    type: "object",
    schemaType: "boolean",
    macro(schema: boolean, parentSchema) {
      if (!schema) return true
      const required = Object.keys(parentSchema.properties)
      if (required.length === 0) return true
      return {required}
    },
    dependencies: ["properties"],
  }
}

module.exports = getDef
