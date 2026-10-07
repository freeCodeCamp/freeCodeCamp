import type {ErrorObject, Vocabulary} from "../../types"
import limitNumber, {LimitNumberError} from "./limitNumber"
import multipleOf, {MultipleOfError} from "./multipleOf"
import limitLength from "./limitLength"
import pattern, {PatternError} from "./pattern"
import limitProperties from "./limitProperties"
import required, {RequiredError} from "./required"
import limitItems from "./limitItems"
import uniqueItems, {UniqueItemsError} from "./uniqueItems"
import constKeyword, {ConstError} from "./const"
import enumKeyword, {EnumError} from "./enum"

const validation: Vocabulary = [
  // number
  limitNumber,
  multipleOf,
  // string
  limitLength,
  pattern,
  // object
  limitProperties,
  required,
  // array
  limitItems,
  uniqueItems,
  // any
  {keyword: "type", schemaType: ["string", "array"]},
  {keyword: "nullable", schemaType: "boolean"},
  constKeyword,
  enumKeyword,
]

export default validation

type LimitError = ErrorObject<
  "maxItems" | "minItems" | "minProperties" | "maxProperties" | "minLength" | "maxLength",
  {limit: number},
  number | {$data: string}
>

export type ValidationKeywordError =
  | LimitError
  | LimitNumberError
  | MultipleOfError
  | PatternError
  | RequiredError
  | UniqueItemsError
  | ConstError
  | EnumError
