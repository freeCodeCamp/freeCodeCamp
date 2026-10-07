import type {CodeKeywordDefinition, ErrorObject, KeywordErrorDefinition} from "../../types"
import type {KeywordCxt} from "../../compile/validate"
import {_, str, operators, Code} from "../../compile/codegen"

const ops = operators

type Kwd = "maximum" | "minimum" | "exclusiveMaximum" | "exclusiveMinimum"

type Comparison = "<=" | ">=" | "<" | ">"

const KWDs: {[K in Kwd]: {okStr: Comparison; ok: Code; fail: Code}} = {
  maximum: {okStr: "<=", ok: ops.LTE, fail: ops.GT},
  minimum: {okStr: ">=", ok: ops.GTE, fail: ops.LT},
  exclusiveMaximum: {okStr: "<", ok: ops.LT, fail: ops.GTE},
  exclusiveMinimum: {okStr: ">", ok: ops.GT, fail: ops.LTE},
}

export type LimitNumberError = ErrorObject<
  Kwd,
  {limit: number; comparison: Comparison},
  number | {$data: string}
>

const error: KeywordErrorDefinition = {
  message: ({keyword, schemaCode}) => str`must be ${KWDs[keyword as Kwd].okStr} ${schemaCode}`,
  params: ({keyword, schemaCode}) =>
    _`{comparison: ${KWDs[keyword as Kwd].okStr}, limit: ${schemaCode}}`,
}

const def: CodeKeywordDefinition = {
  keyword: Object.keys(KWDs),
  type: "number",
  schemaType: "number",
  $data: true,
  error,
  code(cxt: KeywordCxt) {
    const {keyword, data, schemaCode} = cxt
    cxt.fail$data(_`${data} ${KWDs[keyword as Kwd].fail} ${schemaCode} || isNaN(${data})`)
  },
}

export default def
