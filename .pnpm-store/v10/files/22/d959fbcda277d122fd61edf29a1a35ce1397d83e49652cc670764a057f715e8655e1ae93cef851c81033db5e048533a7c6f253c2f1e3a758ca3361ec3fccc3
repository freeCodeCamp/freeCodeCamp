import type {
  KeywordErrorDefinition,
  KeywordErrorCxt,
  ErrorObject,
  AnySchemaObject,
} from "../../types"
import type {SchemaObjCxt} from ".."
import {isJSONType, JSONType} from "../rules"
import {schemaHasRulesForType} from "./applicability"
import {reportError} from "../errors"
import {_, nil, and, not, operators, Code, Name} from "../codegen"
import {toHash, schemaRefOrVal} from "../util"

export enum DataType {
  Correct,
  Wrong,
}

export function getSchemaTypes(schema: AnySchemaObject): JSONType[] {
  const types = getJSONTypes(schema.type)
  const hasNull = types.includes("null")
  if (hasNull) {
    if (schema.nullable === false) throw new Error("type: null contradicts nullable: false")
  } else {
    if (!types.length && schema.nullable !== undefined) {
      throw new Error('"nullable" cannot be used without "type"')
    }
    if (schema.nullable === true) types.push("null")
  }
  return types
}

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export function getJSONTypes(ts: unknown | unknown[]): JSONType[] {
  const types: unknown[] = Array.isArray(ts) ? ts : ts ? [ts] : []
  if (types.every(isJSONType)) return types
  throw new Error("type must be JSONType or JSONType[]: " + types.join(","))
}

export function coerceAndCheckDataType(it: SchemaObjCxt, types: JSONType[]): boolean {
  const {gen, data, opts} = it
  const coerceTo = coerceToTypes(types, opts.coerceTypes)
  const checkTypes =
    types.length > 0 &&
    !(coerceTo.length === 0 && types.length === 1 && schemaHasRulesForType(it, types[0]))
  if (checkTypes) {
    const wrongType = checkDataTypes(types, data, opts.strictNumbers, DataType.Wrong)
    gen.if(wrongType, () => {
      if (coerceTo.length) coerceData(it, types, coerceTo)
      else reportTypeError(it)
    })
  }
  return checkTypes
}

const COERCIBLE: Set<JSONType> = new Set(["string", "number", "integer", "boolean", "null"])
function coerceToTypes(types: JSONType[], coerceTypes?: boolean | "array"): JSONType[] {
  return coerceTypes
    ? types.filter((t) => COERCIBLE.has(t) || (coerceTypes === "array" && t === "array"))
    : []
}

function coerceData(it: SchemaObjCxt, types: JSONType[], coerceTo: JSONType[]): void {
  const {gen, data, opts} = it
  const dataType = gen.let("dataType", _`typeof ${data}`)
  const coerced = gen.let("coerced", _`undefined`)
  if (opts.coerceTypes === "array") {
    gen.if(_`${dataType} == 'object' && Array.isArray(${data}) && ${data}.length == 1`, () =>
      gen
        .assign(data, _`${data}[0]`)
        .assign(dataType, _`typeof ${data}`)
        .if(checkDataTypes(types, data, opts.strictNumbers), () => gen.assign(coerced, data))
    )
  }
  gen.if(_`${coerced} !== undefined`)
  for (const t of coerceTo) {
    if (COERCIBLE.has(t) || (t === "array" && opts.coerceTypes === "array")) {
      coerceSpecificType(t)
    }
  }
  gen.else()
  reportTypeError(it)
  gen.endIf()

  gen.if(_`${coerced} !== undefined`, () => {
    gen.assign(data, coerced)
    assignParentData(it, coerced)
  })

  function coerceSpecificType(t: string): void {
    switch (t) {
      case "string":
        gen
          .elseIf(_`${dataType} == "number" || ${dataType} == "boolean"`)
          .assign(coerced, _`"" + ${data}`)
          .elseIf(_`${data} === null`)
          .assign(coerced, _`""`)
        return
      case "number":
        gen
          .elseIf(
            _`${dataType} == "boolean" || ${data} === null
              || (${dataType} == "string" && ${data} && ${data} == +${data})`
          )
          .assign(coerced, _`+${data}`)
        return
      case "integer":
        gen
          .elseIf(
            _`${dataType} === "boolean" || ${data} === null
              || (${dataType} === "string" && ${data} && ${data} == +${data} && !(${data} % 1))`
          )
          .assign(coerced, _`+${data}`)
        return
      case "boolean":
        gen
          .elseIf(_`${data} === "false" || ${data} === 0 || ${data} === null`)
          .assign(coerced, false)
          .elseIf(_`${data} === "true" || ${data} === 1`)
          .assign(coerced, true)
        return
      case "null":
        gen.elseIf(_`${data} === "" || ${data} === 0 || ${data} === false`)
        gen.assign(coerced, null)
        return

      case "array":
        gen
          .elseIf(
            _`${dataType} === "string" || ${dataType} === "number"
              || ${dataType} === "boolean" || ${data} === null`
          )
          .assign(coerced, _`[${data}]`)
    }
  }
}

function assignParentData({gen, parentData, parentDataProperty}: SchemaObjCxt, expr: Name): void {
  // TODO use gen.property
  gen.if(_`${parentData} !== undefined`, () =>
    gen.assign(_`${parentData}[${parentDataProperty}]`, expr)
  )
}

export function checkDataType(
  dataType: JSONType,
  data: Name,
  strictNums?: boolean | "log",
  correct = DataType.Correct
): Code {
  const EQ = correct === DataType.Correct ? operators.EQ : operators.NEQ
  let cond: Code
  switch (dataType) {
    case "null":
      return _`${data} ${EQ} null`
    case "array":
      cond = _`Array.isArray(${data})`
      break
    case "object":
      cond = _`${data} && typeof ${data} == "object" && !Array.isArray(${data})`
      break
    case "integer":
      cond = numCond(_`!(${data} % 1) && !isNaN(${data})`)
      break
    case "number":
      cond = numCond()
      break
    default:
      return _`typeof ${data} ${EQ} ${dataType}`
  }
  return correct === DataType.Correct ? cond : not(cond)

  function numCond(_cond: Code = nil): Code {
    return and(_`typeof ${data} == "number"`, _cond, strictNums ? _`isFinite(${data})` : nil)
  }
}

export function checkDataTypes(
  dataTypes: JSONType[],
  data: Name,
  strictNums?: boolean | "log",
  correct?: DataType
): Code {
  if (dataTypes.length === 1) {
    return checkDataType(dataTypes[0], data, strictNums, correct)
  }
  let cond: Code
  const types = toHash(dataTypes)
  if (types.array && types.object) {
    const notObj = _`typeof ${data} != "object"`
    cond = types.null ? notObj : _`!${data} || ${notObj}`
    delete types.null
    delete types.array
    delete types.object
  } else {
    cond = nil
  }
  if (types.number) delete types.integer
  for (const t in types) cond = and(cond, checkDataType(t as JSONType, data, strictNums, correct))
  return cond
}

export type TypeError = ErrorObject<"type", {type: string}>

const typeError: KeywordErrorDefinition = {
  message: ({schema}) => `must be ${schema}`,
  params: ({schema, schemaValue}) =>
    typeof schema == "string" ? _`{type: ${schema}}` : _`{type: ${schemaValue}}`,
}

export function reportTypeError(it: SchemaObjCxt): void {
  const cxt = getTypeErrorContext(it)
  reportError(cxt, typeError)
}

function getTypeErrorContext(it: SchemaObjCxt): KeywordErrorCxt {
  const {gen, data, schema} = it
  const schemaCode = schemaRefOrVal(it, schema, "type")
  return {
    gen,
    keyword: "type",
    data,
    schema: schema.type,
    schemaCode,
    schemaValue: schemaCode,
    parentSchema: schema,
    params: {},
    it,
  }
}
