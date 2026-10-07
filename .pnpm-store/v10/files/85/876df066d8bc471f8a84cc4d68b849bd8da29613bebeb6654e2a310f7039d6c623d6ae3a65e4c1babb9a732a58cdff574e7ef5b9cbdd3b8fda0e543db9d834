import type {
  AnySchema,
  AnySchemaObject,
  AnyValidateFunction,
  AsyncValidateFunction,
  EvaluatedProperties,
  EvaluatedItems,
} from "../types"
import type Ajv from "../core"
import type {InstanceOptions} from "../core"
import {CodeGen, _, nil, stringify, Name, Code, ValueScopeName} from "./codegen"
import ValidationError from "../runtime/validation_error"
import N from "./names"
import {LocalRefs, getFullPath, _getFullPath, inlineRef, normalizeId, resolveUrl} from "./resolve"
import {schemaHasRulesButRef, unescapeFragment} from "./util"
import {validateFunctionCode} from "./validate"
import {URIComponent} from "fast-uri"
import {JSONType} from "./rules"

export type SchemaRefs = {
  [Ref in string]?: SchemaEnv | AnySchema
}

export interface SchemaCxt {
  readonly gen: CodeGen
  readonly allErrors?: boolean // validation mode - whether to collect all errors or break on error
  readonly data: Name // Name with reference to the current part of data instance
  readonly parentData: Name // should be used in keywords modifying data
  readonly parentDataProperty: Code | number // should be used in keywords modifying data
  readonly dataNames: Name[]
  readonly dataPathArr: (Code | number)[]
  readonly dataLevel: number // the level of the currently validated data,
  // it can be used to access both the property names and the data on all levels from the top.
  dataTypes: JSONType[] // data types applied to the current part of data instance
  definedProperties: Set<string> // set of properties to keep track of for required checks
  readonly topSchemaRef: Code
  readonly validateName: Name
  evaluated?: Name
  readonly ValidationError?: Name
  readonly schema: AnySchema // current schema object - equal to parentSchema passed via KeywordCxt
  readonly schemaEnv: SchemaEnv
  readonly rootId: string
  baseId: string // the current schema base URI that should be used as the base for resolving URIs in references (\$ref)
  readonly schemaPath: Code // the run-time expression that evaluates to the property name of the current schema
  readonly errSchemaPath: string // this is actual string, should not be changed to Code
  readonly errorPath: Code
  readonly propertyName?: Name
  readonly compositeRule?: boolean // true indicates that the current schema is inside the compound keyword,
  // where failing some rule doesn't mean validation failure (`anyOf`, `oneOf`, `not`, `if`).
  // This flag is used to determine whether you can return validation result immediately after any error in case the option `allErrors` is not `true.
  // You only need to use it if you have many steps in your keywords and potentially can define multiple errors.
  props?: EvaluatedProperties | Name // properties evaluated by this schema - used by parent schema or assigned to validation function
  items?: EvaluatedItems | Name // last item evaluated by this schema - used by parent schema or assigned to validation function
  jtdDiscriminator?: string
  jtdMetadata?: boolean
  readonly createErrors?: boolean
  readonly opts: InstanceOptions // Ajv instance option.
  readonly self: Ajv // current Ajv instance
}

export interface SchemaObjCxt extends SchemaCxt {
  readonly schema: AnySchemaObject
}
interface SchemaEnvArgs {
  readonly schema: AnySchema
  readonly schemaId?: "$id" | "id"
  readonly root?: SchemaEnv
  readonly baseId?: string
  readonly schemaPath?: string
  readonly localRefs?: LocalRefs
  readonly meta?: boolean
}

export class SchemaEnv implements SchemaEnvArgs {
  readonly schema: AnySchema
  readonly schemaId?: "$id" | "id"
  readonly root: SchemaEnv
  baseId: string // TODO possibly, it should be readonly
  schemaPath?: string
  localRefs?: LocalRefs
  readonly meta?: boolean
  readonly $async?: boolean // true if the current schema is asynchronous.
  readonly refs: SchemaRefs = {}
  readonly dynamicAnchors: {[Ref in string]?: true} = {}
  validate?: AnyValidateFunction
  validateName?: ValueScopeName
  serialize?: (data: unknown) => string
  serializeName?: ValueScopeName
  parse?: (data: string) => unknown
  parseName?: ValueScopeName

  constructor(env: SchemaEnvArgs) {
    let schema: AnySchemaObject | undefined
    if (typeof env.schema == "object") schema = env.schema
    this.schema = env.schema
    this.schemaId = env.schemaId
    this.root = env.root || this
    this.baseId = env.baseId ?? normalizeId(schema?.[env.schemaId || "$id"])
    this.schemaPath = env.schemaPath
    this.localRefs = env.localRefs
    this.meta = env.meta
    this.$async = schema?.$async
    this.refs = {}
  }
}

// let codeSize = 0
// let nodeCount = 0

// Compiles schema in SchemaEnv
export function compileSchema(this: Ajv, sch: SchemaEnv): SchemaEnv {
  // TODO refactor - remove compilations
  const _sch = getCompilingSchema.call(this, sch)
  if (_sch) return _sch
  const rootId = getFullPath(this.opts.uriResolver, sch.root.baseId) // TODO if getFullPath removed 1 tests fails
  const {es5, lines} = this.opts.code
  const {ownProperties} = this.opts
  const gen = new CodeGen(this.scope, {es5, lines, ownProperties})
  let _ValidationError
  if (sch.$async) {
    _ValidationError = gen.scopeValue("Error", {
      ref: ValidationError,
      code: _`require("ajv/dist/runtime/validation_error").default`,
    })
  }

  const validateName = gen.scopeName("validate")
  sch.validateName = validateName

  const schemaCxt: SchemaCxt = {
    gen,
    allErrors: this.opts.allErrors,
    data: N.data,
    parentData: N.parentData,
    parentDataProperty: N.parentDataProperty,
    dataNames: [N.data],
    dataPathArr: [nil], // TODO can its length be used as dataLevel if nil is removed?
    dataLevel: 0,
    dataTypes: [],
    definedProperties: new Set<string>(),
    topSchemaRef: gen.scopeValue(
      "schema",
      this.opts.code.source === true
        ? {ref: sch.schema, code: stringify(sch.schema)}
        : {ref: sch.schema}
    ),
    validateName,
    ValidationError: _ValidationError,
    schema: sch.schema,
    schemaEnv: sch,
    rootId,
    baseId: sch.baseId || rootId,
    schemaPath: nil,
    errSchemaPath: sch.schemaPath || (this.opts.jtd ? "" : "#"),
    errorPath: _`""`,
    opts: this.opts,
    self: this,
  }

  let sourceCode: string | undefined
  try {
    this._compilations.add(sch)
    validateFunctionCode(schemaCxt)
    gen.optimize(this.opts.code.optimize)
    // gen.optimize(1)
    const validateCode = gen.toString()
    sourceCode = `${gen.scopeRefs(N.scope)}return ${validateCode}`
    // console.log((codeSize += sourceCode.length), (nodeCount += gen.nodeCount))
    if (this.opts.code.process) sourceCode = this.opts.code.process(sourceCode, sch)
    // console.log("\n\n\n *** \n", sourceCode)
    const makeValidate = new Function(`${N.self}`, `${N.scope}`, sourceCode)
    const validate: AnyValidateFunction = makeValidate(this, this.scope.get())
    this.scope.value(validateName, {ref: validate})

    validate.errors = null
    validate.schema = sch.schema
    validate.schemaEnv = sch
    if (sch.$async) (validate as AsyncValidateFunction).$async = true
    if (this.opts.code.source === true) {
      validate.source = {validateName, validateCode, scopeValues: gen._values}
    }
    if (this.opts.unevaluated) {
      const {props, items} = schemaCxt
      validate.evaluated = {
        props: props instanceof Name ? undefined : props,
        items: items instanceof Name ? undefined : items,
        dynamicProps: props instanceof Name,
        dynamicItems: items instanceof Name,
      }
      if (validate.source) validate.source.evaluated = stringify(validate.evaluated)
    }
    sch.validate = validate
    return sch
  } catch (e) {
    delete sch.validate
    delete sch.validateName
    if (sourceCode) this.logger.error("Error compiling schema, function code:", sourceCode)
    // console.log("\n\n\n *** \n", sourceCode, this.opts)
    throw e
  } finally {
    this._compilations.delete(sch)
  }
}

export function resolveRef(
  this: Ajv,
  root: SchemaEnv,
  baseId: string,
  ref: string
): AnySchema | SchemaEnv | undefined {
  ref = resolveUrl(this.opts.uriResolver, baseId, ref)
  const schOrFunc = root.refs[ref]
  if (schOrFunc) return schOrFunc

  let _sch = resolve.call(this, root, ref)
  if (_sch === undefined) {
    const schema = root.localRefs?.[ref] // TODO maybe localRefs should hold SchemaEnv
    const {schemaId} = this.opts
    if (schema) _sch = new SchemaEnv({schema, schemaId, root, baseId})
  }

  if (_sch === undefined) return
  return (root.refs[ref] = inlineOrCompile.call(this, _sch))
}

function inlineOrCompile(this: Ajv, sch: SchemaEnv): AnySchema | SchemaEnv {
  if (inlineRef(sch.schema, this.opts.inlineRefs)) return sch.schema
  return sch.validate ? sch : compileSchema.call(this, sch)
}

// Index of schema compilation in the currently compiled list
export function getCompilingSchema(this: Ajv, schEnv: SchemaEnv): SchemaEnv | void {
  for (const sch of this._compilations) {
    if (sameSchemaEnv(sch, schEnv)) return sch
  }
}

function sameSchemaEnv(s1: SchemaEnv, s2: SchemaEnv): boolean {
  return s1.schema === s2.schema && s1.root === s2.root && s1.baseId === s2.baseId
}

// resolve and compile the references ($ref)
// TODO returns AnySchemaObject (if the schema can be inlined) or validation function
function resolve(
  this: Ajv,
  root: SchemaEnv, // information about the root schema for the current schema
  ref: string // reference to resolve
): SchemaEnv | undefined {
  let sch
  while (typeof (sch = this.refs[ref]) == "string") ref = sch
  return sch || this.schemas[ref] || resolveSchema.call(this, root, ref)
}

// Resolve schema, its root and baseId
export function resolveSchema(
  this: Ajv,
  root: SchemaEnv, // root object with properties schema, refs TODO below SchemaEnv is assigned to it
  ref: string // reference to resolve
): SchemaEnv | undefined {
  const p = this.opts.uriResolver.parse(ref)
  const refPath = _getFullPath(this.opts.uriResolver, p)
  let baseId = getFullPath(this.opts.uriResolver, root.baseId, undefined)
  // TODO `Object.keys(root.schema).length > 0` should not be needed - but removing breaks 2 tests
  if (Object.keys(root.schema).length > 0 && refPath === baseId) {
    return getJsonPointer.call(this, p, root)
  }

  const id = normalizeId(refPath)
  const schOrRef = this.refs[id] || this.schemas[id]
  if (typeof schOrRef == "string") {
    const sch = resolveSchema.call(this, root, schOrRef)
    if (typeof sch?.schema !== "object") return
    return getJsonPointer.call(this, p, sch)
  }

  if (typeof schOrRef?.schema !== "object") return
  if (!schOrRef.validate) compileSchema.call(this, schOrRef)
  if (id === normalizeId(ref)) {
    const {schema} = schOrRef
    const {schemaId} = this.opts
    const schId = schema[schemaId]
    if (schId) baseId = resolveUrl(this.opts.uriResolver, baseId, schId)
    return new SchemaEnv({schema, schemaId, root, baseId})
  }
  return getJsonPointer.call(this, p, schOrRef)
}

const PREVENT_SCOPE_CHANGE = new Set([
  "properties",
  "patternProperties",
  "enum",
  "dependencies",
  "definitions",
])

function getJsonPointer(
  this: Ajv,
  parsedRef: URIComponent,
  {baseId, schema, root}: SchemaEnv
): SchemaEnv | undefined {
  if (parsedRef.fragment?.[0] !== "/") return
  for (const part of parsedRef.fragment.slice(1).split("/")) {
    if (typeof schema === "boolean") return
    const partSchema = schema[unescapeFragment(part)]
    if (partSchema === undefined) return
    schema = partSchema
    // TODO PREVENT_SCOPE_CHANGE could be defined in keyword def?
    const schId = typeof schema === "object" && schema[this.opts.schemaId]
    if (!PREVENT_SCOPE_CHANGE.has(part) && schId) {
      baseId = resolveUrl(this.opts.uriResolver, baseId, schId)
    }
  }
  let env: SchemaEnv | undefined
  if (typeof schema != "boolean" && schema.$ref && !schemaHasRulesButRef(schema, this.RULES)) {
    const $ref = resolveUrl(this.opts.uriResolver, baseId, schema.$ref)
    env = resolveSchema.call(this, root, $ref)
  }
  // even though resolution failed we need to return SchemaEnv to throw exception
  // so that compileAsync loads missing schema.
  const {schemaId} = this.opts
  env = env || new SchemaEnv({schema, schemaId, root, baseId})
  if (env.schema !== env.root.schema) return env
  return undefined
}
