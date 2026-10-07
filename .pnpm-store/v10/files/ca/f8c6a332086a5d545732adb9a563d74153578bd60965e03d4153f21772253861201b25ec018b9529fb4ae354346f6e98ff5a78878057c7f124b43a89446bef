import type {KeywordErrorCxt, KeywordErrorDefinition} from "../types"
import type {SchemaCxt} from "./index"
import {CodeGen, _, str, strConcat, Code, Name} from "./codegen"
import {SafeExpr} from "./codegen/code"
import {getErrorPath, Type} from "./util"
import N from "./names"

export const keywordError: KeywordErrorDefinition = {
  message: ({keyword}) => str`must pass "${keyword}" keyword validation`,
}

export const keyword$DataError: KeywordErrorDefinition = {
  message: ({keyword, schemaType}) =>
    schemaType
      ? str`"${keyword}" keyword must be ${schemaType} ($data)`
      : str`"${keyword}" keyword is invalid ($data)`,
}

export interface ErrorPaths {
  instancePath?: Code
  schemaPath?: string
  parentSchema?: boolean
}

export function reportError(
  cxt: KeywordErrorCxt,
  error: KeywordErrorDefinition = keywordError,
  errorPaths?: ErrorPaths,
  overrideAllErrors?: boolean
): void {
  const {it} = cxt
  const {gen, compositeRule, allErrors} = it
  const errObj = errorObjectCode(cxt, error, errorPaths)
  if (overrideAllErrors ?? (compositeRule || allErrors)) {
    addError(gen, errObj)
  } else {
    returnErrors(it, _`[${errObj}]`)
  }
}

export function reportExtraError(
  cxt: KeywordErrorCxt,
  error: KeywordErrorDefinition = keywordError,
  errorPaths?: ErrorPaths
): void {
  const {it} = cxt
  const {gen, compositeRule, allErrors} = it
  const errObj = errorObjectCode(cxt, error, errorPaths)
  addError(gen, errObj)
  if (!(compositeRule || allErrors)) {
    returnErrors(it, N.vErrors)
  }
}

export function resetErrorsCount(gen: CodeGen, errsCount: Name): void {
  gen.assign(N.errors, errsCount)
  gen.if(_`${N.vErrors} !== null`, () =>
    gen.if(
      errsCount,
      () => gen.assign(_`${N.vErrors}.length`, errsCount),
      () => gen.assign(N.vErrors, null)
    )
  )
}

export function extendErrors({
  gen,
  keyword,
  schemaValue,
  data,
  errsCount,
  it,
}: KeywordErrorCxt): void {
  /* istanbul ignore if */
  if (errsCount === undefined) throw new Error("ajv implementation error")
  const err = gen.name("err")
  gen.forRange("i", errsCount, N.errors, (i) => {
    gen.const(err, _`${N.vErrors}[${i}]`)
    gen.if(_`${err}.instancePath === undefined`, () =>
      gen.assign(_`${err}.instancePath`, strConcat(N.instancePath, it.errorPath))
    )
    gen.assign(_`${err}.schemaPath`, str`${it.errSchemaPath}/${keyword}`)
    if (it.opts.verbose) {
      gen.assign(_`${err}.schema`, schemaValue)
      gen.assign(_`${err}.data`, data)
    }
  })
}

function addError(gen: CodeGen, errObj: Code): void {
  const err = gen.const("err", errObj)
  gen.if(
    _`${N.vErrors} === null`,
    () => gen.assign(N.vErrors, _`[${err}]`),
    _`${N.vErrors}.push(${err})`
  )
  gen.code(_`${N.errors}++`)
}

function returnErrors(it: SchemaCxt, errs: Code): void {
  const {gen, validateName, schemaEnv} = it
  if (schemaEnv.$async) {
    gen.throw(_`new ${it.ValidationError as Name}(${errs})`)
  } else {
    gen.assign(_`${validateName}.errors`, errs)
    gen.return(false)
  }
}

const E = {
  keyword: new Name("keyword"),
  schemaPath: new Name("schemaPath"), // also used in JTD errors
  params: new Name("params"),
  propertyName: new Name("propertyName"),
  message: new Name("message"),
  schema: new Name("schema"),
  parentSchema: new Name("parentSchema"),
}

function errorObjectCode(
  cxt: KeywordErrorCxt,
  error: KeywordErrorDefinition,
  errorPaths?: ErrorPaths
): Code {
  const {createErrors} = cxt.it
  if (createErrors === false) return _`{}`
  return errorObject(cxt, error, errorPaths)
}

function errorObject(
  cxt: KeywordErrorCxt,
  error: KeywordErrorDefinition,
  errorPaths: ErrorPaths = {}
): Code {
  const {gen, it} = cxt
  const keyValues: [Name, SafeExpr | string][] = [
    errorInstancePath(it, errorPaths),
    errorSchemaPath(cxt, errorPaths),
  ]
  extraErrorProps(cxt, error, keyValues)
  return gen.object(...keyValues)
}

function errorInstancePath({errorPath}: SchemaCxt, {instancePath}: ErrorPaths): [Name, Code] {
  const instPath = instancePath
    ? str`${errorPath}${getErrorPath(instancePath, Type.Str)}`
    : errorPath
  return [N.instancePath, strConcat(N.instancePath, instPath)]
}

function errorSchemaPath(
  {keyword, it: {errSchemaPath}}: KeywordErrorCxt,
  {schemaPath, parentSchema}: ErrorPaths
): [Name, string | Code] {
  let schPath = parentSchema ? errSchemaPath : str`${errSchemaPath}/${keyword}`
  if (schemaPath) {
    schPath = str`${schPath}${getErrorPath(schemaPath, Type.Str)}`
  }
  return [E.schemaPath, schPath]
}

function extraErrorProps(
  cxt: KeywordErrorCxt,
  {params, message}: KeywordErrorDefinition,
  keyValues: [Name, SafeExpr | string][]
): void {
  const {keyword, data, schemaValue, it} = cxt
  const {opts, propertyName, topSchemaRef, schemaPath} = it
  keyValues.push(
    [E.keyword, keyword],
    [E.params, typeof params == "function" ? params(cxt) : params || _`{}`]
  )
  if (opts.messages) {
    keyValues.push([E.message, typeof message == "function" ? message(cxt) : message])
  }
  if (opts.verbose) {
    keyValues.push(
      [E.schema, schemaValue],
      [E.parentSchema, _`${topSchemaRef}${schemaPath}`],
      [N.data, data]
    )
  }
  if (propertyName) keyValues.push([E.propertyName, propertyName])
}
