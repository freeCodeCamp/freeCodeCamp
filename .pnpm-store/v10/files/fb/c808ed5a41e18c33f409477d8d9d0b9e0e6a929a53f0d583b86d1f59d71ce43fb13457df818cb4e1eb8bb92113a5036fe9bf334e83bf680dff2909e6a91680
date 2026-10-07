import type {MacroKeywordDefinition} from "ajv"
import type {GetDefinition} from "./_types"

type RangeKwd = "range" | "exclusiveRange"

export default function getRangeDef(keyword: RangeKwd): GetDefinition<MacroKeywordDefinition> {
  return () => ({
    keyword,
    type: "number",
    schemaType: "array",
    macro: function ([min, max]: [number, number]) {
      validateRangeSchema(min, max)
      return keyword === "range"
        ? {minimum: min, maximum: max}
        : {exclusiveMinimum: min, exclusiveMaximum: max}
    },
    metaSchema: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: {type: "number"},
    },
  })

  function validateRangeSchema(min: number, max: number): void {
    if (min > max || (keyword === "exclusiveRange" && min === max)) {
      throw new Error("There are no numbers in range")
    }
  }
}
