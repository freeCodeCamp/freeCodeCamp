import type {CodeKeywordDefinition, KeywordErrorDefinition, ErrorObject} from "../../types"
import type {KeywordCxt} from "../../compile/validate"
import {_, or, and, Code} from "../../compile/codegen"
import {checkMetadata} from "./metadata"
import {checkNullable} from "./nullable"

export type JTDEnumError = ErrorObject<"enum", {allowedValues: string[]}, string[]>

const error: KeywordErrorDefinition = {
  message: "must be equal to one of the allowed values",
  params: ({schemaCode}) => _`{allowedValues: ${schemaCode}}`,
}

const def: CodeKeywordDefinition = {
  keyword: "enum",
  schemaType: "array",
  error,
  code(cxt: KeywordCxt) {
    checkMetadata(cxt)
    const {gen, data, schema, schemaValue, parentSchema, it} = cxt
    if (schema.length === 0) throw new Error("enum must have non-empty array")
    if (schema.length !== new Set(schema).size) throw new Error("enum items must be unique")
    let valid: Code
    const isString = _`typeof ${data} == "string"`
    if (schema.length >= it.opts.loopEnum) {
      let cond: Code
      ;[valid, cond] = checkNullable(cxt, isString)
      gen.if(cond, loopEnum)
    } else {
      /* istanbul ignore if */
      if (!Array.isArray(schema)) throw new Error("ajv implementation error")
      valid = and(isString, or(...schema.map((value: string) => _`${data} === ${value}`)))
      if (parentSchema.nullable) valid = or(_`${data} === null`, valid)
    }
    cxt.pass(valid)

    function loopEnum(): void {
      gen.forOf("v", schemaValue as Code, (v) =>
        gen.if(_`${valid} = ${data} === ${v}`, () => gen.break())
      )
    }
  },
}

export default def
