import type {CodeKeywordDefinition, KeywordErrorDefinition} from "../../types"
import type {KeywordCxt} from "../../compile/validate"
import {_, nil, or, Code} from "../../compile/codegen"
import validTimestamp from "../../runtime/timestamp"
import {useFunc} from "../../compile/util"
import {checkMetadata} from "./metadata"
import {typeErrorMessage, typeErrorParams, _JTDTypeError} from "./error"

export type JTDTypeError = _JTDTypeError<"type", JTDType, JTDType>

export type IntType = "int8" | "uint8" | "int16" | "uint16" | "int32" | "uint32"

export const intRange: {[T in IntType]: [number, number, number]} = {
  int8: [-128, 127, 3],
  uint8: [0, 255, 3],
  int16: [-32768, 32767, 5],
  uint16: [0, 65535, 5],
  int32: [-2147483648, 2147483647, 10],
  uint32: [0, 4294967295, 10],
}

export type JTDType = "boolean" | "string" | "timestamp" | "float32" | "float64" | IntType

const error: KeywordErrorDefinition = {
  message: (cxt) => typeErrorMessage(cxt, cxt.schema),
  params: (cxt) => typeErrorParams(cxt, cxt.schema),
}

function timestampCode(cxt: KeywordCxt): Code {
  const {gen, data, it} = cxt
  const {timestamp, allowDate} = it.opts
  if (timestamp === "date") return _`${data} instanceof Date `
  const vts = useFunc(gen, validTimestamp)
  const allowDateArg = allowDate ? _`, true` : nil
  const validString = _`typeof ${data} == "string" && ${vts}(${data}${allowDateArg})`
  return timestamp === "string" ? validString : or(_`${data} instanceof Date`, validString)
}

const def: CodeKeywordDefinition = {
  keyword: "type",
  schemaType: "string",
  error,
  code(cxt: KeywordCxt) {
    checkMetadata(cxt)
    const {data, schema, parentSchema, it} = cxt
    let cond: Code
    switch (schema) {
      case "boolean":
      case "string":
        cond = _`typeof ${data} == ${schema}`
        break
      case "timestamp": {
        cond = timestampCode(cxt)
        break
      }
      case "float32":
      case "float64":
        cond = _`typeof ${data} == "number"`
        break
      default: {
        const sch = schema as IntType
        cond = _`typeof ${data} == "number" && isFinite(${data}) && !(${data} % 1)`
        if (!it.opts.int32range && (sch === "int32" || sch === "uint32")) {
          if (sch === "uint32") cond = _`${cond} && ${data} >= 0`
        } else {
          const [min, max] = intRange[sch]
          cond = _`${cond} && ${data} >= ${min} && ${data} <= ${max}`
        }
      }
    }
    cxt.pass(parentSchema.nullable ? or(_`${data} === null`, cond) : cond)
  },
}

export default def
