import type {CodeKeywordDefinition, AnySchema, AnySchemaObject} from "../../types"
import type {KeywordCxt} from "../../compile/validate"
import {_} from "../../compile/codegen"
import {alwaysValidSchema, mergeEvaluated, checkStrictMode} from "../../compile/util"
import {validateArray} from "../code"

const def: CodeKeywordDefinition = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "array", "boolean"],
  before: "uniqueItems",
  code(cxt: KeywordCxt) {
    const {schema, it} = cxt
    if (Array.isArray(schema)) return validateTuple(cxt, "additionalItems", schema)
    it.items = true
    if (alwaysValidSchema(it, schema)) return
    cxt.ok(validateArray(cxt))
  },
}

export function validateTuple(
  cxt: KeywordCxt,
  extraItems: string,
  schArr: AnySchema[] = cxt.schema
): void {
  const {gen, parentSchema, data, keyword, it} = cxt
  checkStrictTuple(parentSchema)
  if (it.opts.unevaluated && schArr.length && it.items !== true) {
    it.items = mergeEvaluated.items(gen, schArr.length, it.items)
  }
  const valid = gen.name("valid")
  const len = gen.const("len", _`${data}.length`)
  schArr.forEach((sch: AnySchema, i: number) => {
    if (alwaysValidSchema(it, sch)) return
    gen.if(_`${len} > ${i}`, () =>
      cxt.subschema(
        {
          keyword,
          schemaProp: i,
          dataProp: i,
        },
        valid
      )
    )
    cxt.ok(valid)
  })

  function checkStrictTuple(sch: AnySchemaObject): void {
    const {opts, errSchemaPath} = it
    const l = schArr.length
    const fullTuple = l === sch.minItems && (l === sch.maxItems || sch[extraItems] === false)
    if (opts.strictTuples && !fullTuple) {
      const msg = `"${keyword}" is ${l}-tuple, but minItems or maxItems/${extraItems} are not specified or different at path "${errSchemaPath}"`
      checkStrictMode(it, msg, opts.strictTuples)
    }
  }
}

export default def
