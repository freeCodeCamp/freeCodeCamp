import type {Vocabulary, KeywordDefinition, ErrorNoParams} from "ajv"
import type {DefinitionOptions, GetDefinition} from "./_types"
import typeofDef from "./typeof"
import instanceofDef from "./instanceof"
import range from "./range"
import exclusiveRange from "./exclusiveRange"
import regexp from "./regexp"
import transform from "./transform"
import uniqueItemProperties from "./uniqueItemProperties"
import allRequired from "./allRequired"
import anyRequired from "./anyRequired"
import oneRequired from "./oneRequired"
import patternRequired, {PatternRequiredError} from "./patternRequired"
import prohibited from "./prohibited"
import deepProperties from "./deepProperties"
import deepRequired from "./deepRequired"
import dynamicDefaults from "./dynamicDefaults"
import selectDef, {SelectError} from "./select"

const definitions: GetDefinition<KeywordDefinition>[] = [
  typeofDef,
  instanceofDef,
  range,
  exclusiveRange,
  regexp,
  transform,
  uniqueItemProperties,
  allRequired,
  anyRequired,
  oneRequired,
  patternRequired,
  prohibited,
  deepProperties,
  deepRequired,
  dynamicDefaults,
]

export default function ajvKeywords(opts?: DefinitionOptions): Vocabulary {
  return definitions.map((d) => d(opts)).concat(selectDef(opts))
}

export type AjvKeywordsError =
  | PatternRequiredError
  | SelectError
  | ErrorNoParams<
      | "range"
      | "exclusiveRange"
      | "anyRequired"
      | "oneRequired"
      | "allRequired"
      | "deepProperties"
      | "deepRequired"
      | "dynamicDefaults"
      | "instanceof"
      | "prohibited"
      | "regexp"
      | "transform"
      | "uniqueItemProperties"
    >

module.exports = ajvKeywords
