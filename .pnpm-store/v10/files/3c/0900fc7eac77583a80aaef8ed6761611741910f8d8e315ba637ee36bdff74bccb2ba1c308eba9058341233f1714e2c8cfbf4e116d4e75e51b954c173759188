import type {
  AddedKeywordDefinition,
  AnySchema,
  AnySchemaObject,
  KeywordErrorCxt,
  KeywordCxtParams,
} from "../../types"
import type {SchemaCxt, SchemaObjCxt} from ".."
import type {InstanceOptions} from "../../core"
import {boolOrEmptySchema, topBoolOrEmptySchema} from "./boolSchema"
import {coerceAndCheckDataType, getSchemaTypes} from "./dataType"
import {shouldUseGroup, shouldUseRule} from "./applicability"
import {checkDataType, checkDataTypes, reportTypeError, DataType} from "./dataType"
import {assignDefaults} from "./defaults"
import {funcKeywordCode, macroKeywordCode, validateKeywordUsage, validSchemaType} from "./keyword"
import {getSubschema, extendSubschemaData, SubschemaArgs, extendSubschemaMode} from "./subschema"
import {_, nil, str, or, not, getProperty, Block, Code, Name, CodeGen} from "../codegen"
import N from "../names"
import {resolveUrl} from "../resolve"
import {
  schemaRefOrVal,
  schemaHasRulesButRef,
  checkUnknownRules,
  checkStrictMode,
  unescapeJsonPointer,
  mergeEvaluated,
} from "../util"
import type {JSONType, Rule, RuleGroup} from "../rules"
import {
  ErrorPaths,
  reportError,
  reportExtraError,
  resetErrorsCount,
  keyword$DataError,
} from "../errors"

// schema compilation - generates validation function, subschemaCode (below) is used for subschemas
export function validateFunctionCode(it: SchemaCxt): void {
  if (isSchemaObj(it)) {
    checkKeywords(it)
    if (schemaCxtHasRules(it)) {
      topSchemaObjCode(it)
      return
    }
  }
  validateFunction(it, () => topBoolOrEmptySchema(it))
}

function validateFunction(
  {gen, validateName, schema, schemaEnv, opts}: SchemaCxt,
  body: Block
): void {
  if (opts.code.es5) {
    gen.func(validateName, _`${N.data}, ${N.valCxt}`, schemaEnv.$async, () => {
      gen.code(_`"use strict"; ${funcSourceUrl(schema, opts)}`)
      destructureValCxtES5(gen, opts)
      gen.code(body)
    })
  } else {
    gen.func(validateName, _`${N.data}, ${destructureValCxt(opts)}`, schemaEnv.$async, () =>
      gen.code(funcSourceUrl(schema, opts)).code(body)
    )
  }
}

function destructureValCxt(opts: InstanceOptions): Code {
  return _`{${N.instancePath}="", ${N.parentData}, ${N.parentDataProperty}, ${N.rootData}=${
    N.data
  }${opts.dynamicRef ? _`, ${N.dynamicAnchors}={}` : nil}}={}`
}

function destructureValCxtES5(gen: CodeGen, opts: InstanceOptions): void {
  gen.if(
    N.valCxt,
    () => {
      gen.var(N.instancePath, _`${N.valCxt}.${N.instancePath}`)
      gen.var(N.parentData, _`${N.valCxt}.${N.parentData}`)
      gen.var(N.parentDataProperty, _`${N.valCxt}.${N.parentDataProperty}`)
      gen.var(N.rootData, _`${N.valCxt}.${N.rootData}`)
      if (opts.dynamicRef) gen.var(N.dynamicAnchors, _`${N.valCxt}.${N.dynamicAnchors}`)
    },
    () => {
      gen.var(N.instancePath, _`""`)
      gen.var(N.parentData, _`undefined`)
      gen.var(N.parentDataProperty, _`undefined`)
      gen.var(N.rootData, N.data)
      if (opts.dynamicRef) gen.var(N.dynamicAnchors, _`{}`)
    }
  )
}

function topSchemaObjCode(it: SchemaObjCxt): void {
  const {schema, opts, gen} = it
  validateFunction(it, () => {
    if (opts.$comment && schema.$comment) commentKeyword(it)
    checkNoDefault(it)
    gen.let(N.vErrors, null)
    gen.let(N.errors, 0)
    if (opts.unevaluated) resetEvaluated(it)
    typeAndKeywords(it)
    returnResults(it)
  })
  return
}

function resetEvaluated(it: SchemaObjCxt): void {
  // TODO maybe some hook to execute it in the end to check whether props/items are Name, as in assignEvaluated
  const {gen, validateName} = it
  it.evaluated = gen.const("evaluated", _`${validateName}.evaluated`)
  gen.if(_`${it.evaluated}.dynamicProps`, () => gen.assign(_`${it.evaluated}.props`, _`undefined`))
  gen.if(_`${it.evaluated}.dynamicItems`, () => gen.assign(_`${it.evaluated}.items`, _`undefined`))
}

function funcSourceUrl(schema: AnySchema, opts: InstanceOptions): Code {
  const schId = typeof schema == "object" && schema[opts.schemaId]
  return schId && (opts.code.source || opts.code.process) ? _`/*# sourceURL=${schId} */` : nil
}

// schema compilation - this function is used recursively to generate code for sub-schemas
function subschemaCode(it: SchemaCxt, valid: Name): void {
  if (isSchemaObj(it)) {
    checkKeywords(it)
    if (schemaCxtHasRules(it)) {
      subSchemaObjCode(it, valid)
      return
    }
  }
  boolOrEmptySchema(it, valid)
}

function schemaCxtHasRules({schema, self}: SchemaCxt): boolean {
  if (typeof schema == "boolean") return !schema
  for (const key in schema) if (self.RULES.all[key]) return true
  return false
}

function isSchemaObj(it: SchemaCxt): it is SchemaObjCxt {
  return typeof it.schema != "boolean"
}

function subSchemaObjCode(it: SchemaObjCxt, valid: Name): void {
  const {schema, gen, opts} = it
  if (opts.$comment && schema.$comment) commentKeyword(it)
  updateContext(it)
  checkAsyncSchema(it)
  const errsCount = gen.const("_errs", N.errors)
  typeAndKeywords(it, errsCount)
  // TODO var
  gen.var(valid, _`${errsCount} === ${N.errors}`)
}

function checkKeywords(it: SchemaObjCxt): void {
  checkUnknownRules(it)
  checkRefsAndKeywords(it)
}

function typeAndKeywords(it: SchemaObjCxt, errsCount?: Name): void {
  if (it.opts.jtd) return schemaKeywords(it, [], false, errsCount)
  const types = getSchemaTypes(it.schema)
  const checkedTypes = coerceAndCheckDataType(it, types)
  schemaKeywords(it, types, !checkedTypes, errsCount)
}

function checkRefsAndKeywords(it: SchemaObjCxt): void {
  const {schema, errSchemaPath, opts, self} = it
  if (schema.$ref && opts.ignoreKeywordsWithRef && schemaHasRulesButRef(schema, self.RULES)) {
    self.logger.warn(`$ref: keywords ignored in schema at path "${errSchemaPath}"`)
  }
}

function checkNoDefault(it: SchemaObjCxt): void {
  const {schema, opts} = it
  if (schema.default !== undefined && opts.useDefaults && opts.strictSchema) {
    checkStrictMode(it, "default is ignored in the schema root")
  }
}

function updateContext(it: SchemaObjCxt): void {
  const schId = it.schema[it.opts.schemaId]
  if (schId) it.baseId = resolveUrl(it.opts.uriResolver, it.baseId, schId)
}

function checkAsyncSchema(it: SchemaObjCxt): void {
  if (it.schema.$async && !it.schemaEnv.$async) throw new Error("async schema in sync schema")
}

function commentKeyword({gen, schemaEnv, schema, errSchemaPath, opts}: SchemaObjCxt): void {
  const msg = schema.$comment
  if (opts.$comment === true) {
    gen.code(_`${N.self}.logger.log(${msg})`)
  } else if (typeof opts.$comment == "function") {
    const schemaPath = str`${errSchemaPath}/$comment`
    const rootName = gen.scopeValue("root", {ref: schemaEnv.root})
    gen.code(_`${N.self}.opts.$comment(${msg}, ${schemaPath}, ${rootName}.schema)`)
  }
}

function returnResults(it: SchemaCxt): void {
  const {gen, schemaEnv, validateName, ValidationError, opts} = it
  if (schemaEnv.$async) {
    // TODO assign unevaluated
    gen.if(
      _`${N.errors} === 0`,
      () => gen.return(N.data),
      () => gen.throw(_`new ${ValidationError as Name}(${N.vErrors})`)
    )
  } else {
    gen.assign(_`${validateName}.errors`, N.vErrors)
    if (opts.unevaluated) assignEvaluated(it)
    gen.return(_`${N.errors} === 0`)
  }
}

function assignEvaluated({gen, evaluated, props, items}: SchemaCxt): void {
  if (props instanceof Name) gen.assign(_`${evaluated}.props`, props)
  if (items instanceof Name) gen.assign(_`${evaluated}.items`, items)
}

function schemaKeywords(
  it: SchemaObjCxt,
  types: JSONType[],
  typeErrors: boolean,
  errsCount?: Name
): void {
  const {gen, schema, data, allErrors, opts, self} = it
  const {RULES} = self
  if (schema.$ref && (opts.ignoreKeywordsWithRef || !schemaHasRulesButRef(schema, RULES))) {
    gen.block(() => keywordCode(it, "$ref", (RULES.all.$ref as Rule).definition)) // TODO typecast
    return
  }
  if (!opts.jtd) checkStrictTypes(it, types)
  gen.block(() => {
    for (const group of RULES.rules) groupKeywords(group)
    groupKeywords(RULES.post)
  })

  function groupKeywords(group: RuleGroup): void {
    if (!shouldUseGroup(schema, group)) return
    if (group.type) {
      gen.if(checkDataType(group.type, data, opts.strictNumbers))
      iterateKeywords(it, group)
      if (types.length === 1 && types[0] === group.type && typeErrors) {
        gen.else()
        reportTypeError(it)
      }
      gen.endIf()
    } else {
      iterateKeywords(it, group)
    }
    // TODO make it "ok" call?
    if (!allErrors) gen.if(_`${N.errors} === ${errsCount || 0}`)
  }
}

function iterateKeywords(it: SchemaObjCxt, group: RuleGroup): void {
  const {
    gen,
    schema,
    opts: {useDefaults},
  } = it
  if (useDefaults) assignDefaults(it, group.type)
  gen.block(() => {
    for (const rule of group.rules) {
      if (shouldUseRule(schema, rule)) {
        keywordCode(it, rule.keyword, rule.definition, group.type)
      }
    }
  })
}

function checkStrictTypes(it: SchemaObjCxt, types: JSONType[]): void {
  if (it.schemaEnv.meta || !it.opts.strictTypes) return
  checkContextTypes(it, types)
  if (!it.opts.allowUnionTypes) checkMultipleTypes(it, types)
  checkKeywordTypes(it, it.dataTypes)
}

function checkContextTypes(it: SchemaObjCxt, types: JSONType[]): void {
  if (!types.length) return
  if (!it.dataTypes.length) {
    it.dataTypes = types
    return
  }
  types.forEach((t) => {
    if (!includesType(it.dataTypes, t)) {
      strictTypesError(it, `type "${t}" not allowed by context "${it.dataTypes.join(",")}"`)
    }
  })
  narrowSchemaTypes(it, types)
}

function checkMultipleTypes(it: SchemaObjCxt, ts: JSONType[]): void {
  if (ts.length > 1 && !(ts.length === 2 && ts.includes("null"))) {
    strictTypesError(it, "use allowUnionTypes to allow union type keyword")
  }
}

function checkKeywordTypes(it: SchemaObjCxt, ts: JSONType[]): void {
  const rules = it.self.RULES.all
  for (const keyword in rules) {
    const rule = rules[keyword]
    if (typeof rule == "object" && shouldUseRule(it.schema, rule)) {
      const {type} = rule.definition
      if (type.length && !type.some((t) => hasApplicableType(ts, t))) {
        strictTypesError(it, `missing type "${type.join(",")}" for keyword "${keyword}"`)
      }
    }
  }
}

function hasApplicableType(schTs: JSONType[], kwdT: JSONType): boolean {
  return schTs.includes(kwdT) || (kwdT === "number" && schTs.includes("integer"))
}

function includesType(ts: JSONType[], t: JSONType): boolean {
  return ts.includes(t) || (t === "integer" && ts.includes("number"))
}

function narrowSchemaTypes(it: SchemaObjCxt, withTypes: JSONType[]): void {
  const ts: JSONType[] = []
  for (const t of it.dataTypes) {
    if (includesType(withTypes, t)) ts.push(t)
    else if (withTypes.includes("integer") && t === "number") ts.push("integer")
  }
  it.dataTypes = ts
}

function strictTypesError(it: SchemaObjCxt, msg: string): void {
  const schemaPath = it.schemaEnv.baseId + it.errSchemaPath
  msg += ` at "${schemaPath}" (strictTypes)`
  checkStrictMode(it, msg, it.opts.strictTypes)
}

export class KeywordCxt implements KeywordErrorCxt {
  readonly gen: CodeGen
  readonly allErrors?: boolean
  readonly keyword: string
  readonly data: Name // Name referencing the current level of the data instance
  readonly $data?: string | false
  schema: any // keyword value in the schema
  readonly schemaValue: Code | number | boolean // Code reference to keyword schema value or primitive value
  readonly schemaCode: Code | number | boolean // Code reference to resolved schema value (different if schema is $data)
  readonly schemaType: JSONType[] // allowed type(s) of keyword value in the schema
  readonly parentSchema: AnySchemaObject
  readonly errsCount?: Name // Name reference to the number of validation errors collected before this keyword,
  // requires option trackErrors in keyword definition
  params: KeywordCxtParams // object to pass parameters to error messages from keyword code
  readonly it: SchemaObjCxt // schema compilation context (schema is guaranteed to be an object, not boolean)
  readonly def: AddedKeywordDefinition

  constructor(it: SchemaObjCxt, def: AddedKeywordDefinition, keyword: string) {
    validateKeywordUsage(it, def, keyword)
    this.gen = it.gen
    this.allErrors = it.allErrors
    this.keyword = keyword
    this.data = it.data
    this.schema = it.schema[keyword]
    this.$data = def.$data && it.opts.$data && this.schema && this.schema.$data
    this.schemaValue = schemaRefOrVal(it, this.schema, keyword, this.$data)
    this.schemaType = def.schemaType
    this.parentSchema = it.schema
    this.params = {}
    this.it = it
    this.def = def

    if (this.$data) {
      this.schemaCode = it.gen.const("vSchema", getData(this.$data, it))
    } else {
      this.schemaCode = this.schemaValue
      if (!validSchemaType(this.schema, def.schemaType, def.allowUndefined)) {
        throw new Error(`${keyword} value must be ${JSON.stringify(def.schemaType)}`)
      }
    }

    if ("code" in def ? def.trackErrors : def.errors !== false) {
      this.errsCount = it.gen.const("_errs", N.errors)
    }
  }

  result(condition: Code, successAction?: () => void, failAction?: () => void): void {
    this.failResult(not(condition), successAction, failAction)
  }

  failResult(condition: Code, successAction?: () => void, failAction?: () => void): void {
    this.gen.if(condition)
    if (failAction) failAction()
    else this.error()
    if (successAction) {
      this.gen.else()
      successAction()
      if (this.allErrors) this.gen.endIf()
    } else {
      if (this.allErrors) this.gen.endIf()
      else this.gen.else()
    }
  }

  pass(condition: Code, failAction?: () => void): void {
    this.failResult(not(condition), undefined, failAction)
  }

  fail(condition?: Code): void {
    if (condition === undefined) {
      this.error()
      if (!this.allErrors) this.gen.if(false) // this branch will be removed by gen.optimize
      return
    }
    this.gen.if(condition)
    this.error()
    if (this.allErrors) this.gen.endIf()
    else this.gen.else()
  }

  fail$data(condition: Code): void {
    if (!this.$data) return this.fail(condition)
    const {schemaCode} = this
    this.fail(_`${schemaCode} !== undefined && (${or(this.invalid$data(), condition)})`)
  }

  error(append?: boolean, errorParams?: KeywordCxtParams, errorPaths?: ErrorPaths): void {
    if (errorParams) {
      this.setParams(errorParams)
      this._error(append, errorPaths)
      this.setParams({})
      return
    }
    this._error(append, errorPaths)
  }

  private _error(append?: boolean, errorPaths?: ErrorPaths): void {
    ;(append ? reportExtraError : reportError)(this, this.def.error, errorPaths)
  }

  $dataError(): void {
    reportError(this, this.def.$dataError || keyword$DataError)
  }

  reset(): void {
    if (this.errsCount === undefined) throw new Error('add "trackErrors" to keyword definition')
    resetErrorsCount(this.gen, this.errsCount)
  }

  ok(cond: Code | boolean): void {
    if (!this.allErrors) this.gen.if(cond)
  }

  setParams(obj: KeywordCxtParams, assign?: true): void {
    if (assign) Object.assign(this.params, obj)
    else this.params = obj
  }

  block$data(valid: Name, codeBlock: () => void, $dataValid: Code = nil): void {
    this.gen.block(() => {
      this.check$data(valid, $dataValid)
      codeBlock()
    })
  }

  check$data(valid: Name = nil, $dataValid: Code = nil): void {
    if (!this.$data) return
    const {gen, schemaCode, schemaType, def} = this
    gen.if(or(_`${schemaCode} === undefined`, $dataValid))
    if (valid !== nil) gen.assign(valid, true)
    if (schemaType.length || def.validateSchema) {
      gen.elseIf(this.invalid$data())
      this.$dataError()
      if (valid !== nil) gen.assign(valid, false)
    }
    gen.else()
  }

  invalid$data(): Code {
    const {gen, schemaCode, schemaType, def, it} = this
    return or(wrong$DataType(), invalid$DataSchema())

    function wrong$DataType(): Code {
      if (schemaType.length) {
        /* istanbul ignore if */
        if (!(schemaCode instanceof Name)) throw new Error("ajv implementation error")
        const st = Array.isArray(schemaType) ? schemaType : [schemaType]
        return _`${checkDataTypes(st, schemaCode, it.opts.strictNumbers, DataType.Wrong)}`
      }
      return nil
    }

    function invalid$DataSchema(): Code {
      if (def.validateSchema) {
        const validateSchemaRef = gen.scopeValue("validate$data", {ref: def.validateSchema}) // TODO value.code for standalone
        return _`!${validateSchemaRef}(${schemaCode})`
      }
      return nil
    }
  }

  subschema(appl: SubschemaArgs, valid: Name): SchemaCxt {
    const subschema = getSubschema(this.it, appl)
    extendSubschemaData(subschema, this.it, appl)
    extendSubschemaMode(subschema, appl)
    const nextContext = {...this.it, ...subschema, items: undefined, props: undefined}
    subschemaCode(nextContext, valid)
    return nextContext
  }

  mergeEvaluated(schemaCxt: SchemaCxt, toName?: typeof Name): void {
    const {it, gen} = this
    if (!it.opts.unevaluated) return
    if (it.props !== true && schemaCxt.props !== undefined) {
      it.props = mergeEvaluated.props(gen, schemaCxt.props, it.props, toName)
    }
    if (it.items !== true && schemaCxt.items !== undefined) {
      it.items = mergeEvaluated.items(gen, schemaCxt.items, it.items, toName)
    }
  }

  mergeValidEvaluated(schemaCxt: SchemaCxt, valid: Name): boolean | void {
    const {it, gen} = this
    if (it.opts.unevaluated && (it.props !== true || it.items !== true)) {
      gen.if(valid, () => this.mergeEvaluated(schemaCxt, Name))
      return true
    }
  }
}

function keywordCode(
  it: SchemaObjCxt,
  keyword: string,
  def: AddedKeywordDefinition,
  ruleType?: JSONType
): void {
  const cxt = new KeywordCxt(it, def, keyword)
  if ("code" in def) {
    def.code(cxt, ruleType)
  } else if (cxt.$data && def.validate) {
    funcKeywordCode(cxt, def)
  } else if ("macro" in def) {
    macroKeywordCode(cxt, def)
  } else if (def.compile || def.validate) {
    funcKeywordCode(cxt, def)
  }
}

const JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/
const RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/
export function getData(
  $data: string,
  {dataLevel, dataNames, dataPathArr}: SchemaCxt
): Code | number {
  let jsonPointer
  let data: Code
  if ($data === "") return N.rootData
  if ($data[0] === "/") {
    if (!JSON_POINTER.test($data)) throw new Error(`Invalid JSON-pointer: ${$data}`)
    jsonPointer = $data
    data = N.rootData
  } else {
    const matches = RELATIVE_JSON_POINTER.exec($data)
    if (!matches) throw new Error(`Invalid JSON-pointer: ${$data}`)
    const up: number = +matches[1]
    jsonPointer = matches[2]
    if (jsonPointer === "#") {
      if (up >= dataLevel) throw new Error(errorMsg("property/index", up))
      return dataPathArr[dataLevel - up]
    }
    if (up > dataLevel) throw new Error(errorMsg("data", up))
    data = dataNames[dataLevel - up]
    if (!jsonPointer) return data
  }

  let expr = data
  const segments = jsonPointer.split("/")
  for (const segment of segments) {
    if (segment) {
      data = _`${data}${getProperty(unescapeJsonPointer(segment))}`
      expr = _`${expr} && ${data}`
    }
  }
  return expr

  function errorMsg(pointerType: string, up: number): string {
    return `Cannot access ${pointerType} ${up} levels up, current level is ${dataLevel}`
  }
}
