import type {MacroKeywordDefinition} from "ajv"
import type {GetDefinition} from "./_types"

type RequiredKwd = "anyRequired" | "oneRequired"

export default function getRequiredDef(
  keyword: RequiredKwd
): GetDefinition<MacroKeywordDefinition> {
  return () => ({
    keyword,
    type: "object",
    schemaType: "array",
    macro(schema: string[]) {
      if (schema.length === 0) return true
      if (schema.length === 1) return {required: schema}
      const comb = keyword === "anyRequired" ? "anyOf" : "oneOf"
      return {[comb]: schema.map((p) => ({required: [p]}))}
    },
    metaSchema: {
      type: "array",
      items: {type: "string"},
    },
  })
}
