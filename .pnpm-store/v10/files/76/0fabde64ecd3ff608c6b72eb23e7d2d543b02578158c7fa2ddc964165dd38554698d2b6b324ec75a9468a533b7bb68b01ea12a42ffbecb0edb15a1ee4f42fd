import type {KeywordCxt} from "."
import type {
  AnySchema,
  SchemaValidateFunction,
  AnyValidateFunction,
  AddedKeywordDefinition,
  MacroKeywordDefinition,
  FuncKeywordDefinition,
} from "../../types"
import type {SchemaObjCxt} from ".."
import {_, nil, not, stringify, Code, Name, CodeGen} from "../codegen"
import N from "../names"
import type {JSONType} from "../rules"
import {callValidateCode} from "../../vocabularies/code"
import {extendErrors} from "../errors"

type KeywordCompilationResult = AnySchema | SchemaValidateFunction | AnyValidateFunction

export function macroKeywordCode(cxt: KeywordCxt, def: MacroKeywordDefinition): void {
  const {gen, keyword, schema, parentSchema, it} = cxt
  const macroSchema = def.macro.call(it.self, schema, parentSchema, it)
  const schemaRef = useKeyword(gen, keyword, macroSchema)
  if (it.opts.validateSchema !== false) it.self.validateSchema(macroSchema, true)

  const valid = gen.name("valid")
  cxt.subschema(
    {
      schema: macroSchema,
      schemaPath: nil,
      errSchemaPath: `${it.errSchemaPath}/${keyword}`,
      topSchemaRef: schemaRef,
      compositeRule: true,
    },
    valid
  )
  cxt.pass(valid, () => cxt.error(true))
}

export function funcKeywordCode(cxt: KeywordCxt, def: FuncKeywordDefinition): void {
  const {gen, keyword, schema, parentSchema, $data, it} = cxt
  checkAsyncKeyword(it, def)
  const validate =
    !$data && def.compile ? def.compile.call(it.self, schema, parentSchema, it) : def.validate
  const validateRef = useKeyword(gen, keyword, validate)
  const valid = gen.let("valid")
  cxt.block$data(valid, validateKeyword)
  cxt.ok(def.valid ?? valid)

  function validateKeyword(): void {
    if (def.errors === false) {
      assignValid()
      if (def.modifying) modifyData(cxt)
      reportErrs(() => cxt.error())
    } else {
      const ruleErrs = def.async ? validateAsync() : validateSync()
      if (def.modifying) modifyData(cxt)
      reportErrs(() => addErrs(cxt, ruleErrs))
    }
  }

  function validateAsync(): Name {
    const ruleErrs = gen.let("ruleErrs", null)
    gen.try(
      () => assignValid(_`await `),
      (e) =>
        gen.assign(valid, false).if(
          _`${e} instanceof ${it.ValidationError as Name}`,
          () => gen.assign(ruleErrs, _`${e}.errors`),
          () => gen.throw(e)
        )
    )
    return ruleErrs
  }

  function validateSync(): Code {
    const validateErrs = _`${validateRef}.errors`
    gen.assign(validateErrs, null)
    assignValid(nil)
    return validateErrs
  }

  function assignValid(_await: Code = def.async ? _`await ` : nil): void {
    const passCxt = it.opts.passContext ? N.this : N.self
    const passSchema = !(("compile" in def && !$data) || def.schema === false)
    gen.assign(
      valid,
      _`${_await}${callValidateCode(cxt, validateRef, passCxt, passSchema)}`,
      def.modifying
    )
  }

  function reportErrs(errors: () => void): void {
    gen.if(not(def.valid ?? valid), errors)
  }
}

function modifyData(cxt: KeywordCxt): void {
  const {gen, data, it} = cxt
  gen.if(it.parentData, () => gen.assign(data, _`${it.parentData}[${it.parentDataProperty}]`))
}

function addErrs(cxt: KeywordCxt, errs: Code): void {
  const {gen} = cxt
  gen.if(
    _`Array.isArray(${errs})`,
    () => {
      gen
        .assign(N.vErrors, _`${N.vErrors} === null ? ${errs} : ${N.vErrors}.concat(${errs})`)
        .assign(N.errors, _`${N.vErrors}.length`)
      extendErrors(cxt)
    },
    () => cxt.error()
  )
}

function checkAsyncKeyword({schemaEnv}: SchemaObjCxt, def: FuncKeywordDefinition): void {
  if (def.async && !schemaEnv.$async) throw new Error("async keyword in sync schema")
}

function useKeyword(gen: CodeGen, keyword: string, result?: KeywordCompilationResult): Name {
  if (result === undefined) throw new Error(`keyword "${keyword}" failed to compile`)
  return gen.scopeValue(
    "keyword",
    typeof result == "function" ? {ref: result} : {ref: result, code: stringify(result)}
  )
}

export function validSchemaType(
  schema: unknown,
  schemaType: JSONType[],
  allowUndefined = false
): boolean {
  // TODO add tests
  return (
    !schemaType.length ||
    schemaType.some((st) =>
      st === "array"
        ? Array.isArray(schema)
        : st === "object"
        ? schema && typeof schema == "object" && !Array.isArray(schema)
        : typeof schema == st || (allowUndefined && typeof schema == "undefined")
    )
  )
}

export function validateKeywordUsage(
  {schema, opts, self, errSchemaPath}: SchemaObjCxt,
  def: AddedKeywordDefinition,
  keyword: string
): void {
  /* istanbul ignore if */
  if (Array.isArray(def.keyword) ? !def.keyword.includes(keyword) : def.keyword !== keyword) {
    throw new Error("ajv implementation error")
  }

  const deps = def.dependencies
  if (deps?.some((kwd) => !Object.prototype.hasOwnProperty.call(schema, kwd))) {
    throw new Error(`parent schema must have dependencies of ${keyword}: ${deps.join(",")}`)
  }

  if (def.validateSchema) {
    const valid = def.validateSchema(schema[keyword])
    if (!valid) {
      const msg =
        `keyword "${keyword}" value is invalid at path "${errSchemaPath}": ` +
        self.errorsText(def.validateSchema.errors)
      if (opts.validateSchema === "log") self.logger.error(msg)
      else throw new Error(msg)
    }
  }
}
