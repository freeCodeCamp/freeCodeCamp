import type Ajv from "../../core"
import type {SchemaObject} from "../../types"
import {jtdForms, JTDForm, SchemaObjectMap} from "./types"
import {SchemaEnv, getCompilingSchema} from ".."
import {_, str, and, getProperty, CodeGen, Code, Name} from "../codegen"
import MissingRefError from "../ref_error"
import N from "../names"
import {isOwnProperty} from "../../vocabularies/code"
import {hasRef} from "../../vocabularies/jtd/ref"
import {useFunc} from "../util"
import quote from "../../runtime/quote"

const genSerialize: {[F in JTDForm]: (cxt: SerializeCxt) => void} = {
  elements: serializeElements,
  values: serializeValues,
  discriminator: serializeDiscriminator,
  properties: serializeProperties,
  optionalProperties: serializeProperties,
  enum: serializeString,
  type: serializeType,
  ref: serializeRef,
}

interface SerializeCxt {
  readonly gen: CodeGen
  readonly self: Ajv // current Ajv instance
  readonly schemaEnv: SchemaEnv
  readonly definitions: SchemaObjectMap
  schema: SchemaObject
  data: Code
}

export default function compileSerializer(
  this: Ajv,
  sch: SchemaEnv,
  definitions: SchemaObjectMap
): SchemaEnv {
  const _sch = getCompilingSchema.call(this, sch)
  if (_sch) return _sch
  const {es5, lines} = this.opts.code
  const {ownProperties} = this.opts
  const gen = new CodeGen(this.scope, {es5, lines, ownProperties})
  const serializeName = gen.scopeName("serialize")
  const cxt: SerializeCxt = {
    self: this,
    gen,
    schema: sch.schema as SchemaObject,
    schemaEnv: sch,
    definitions,
    data: N.data,
  }

  let sourceCode: string | undefined
  try {
    this._compilations.add(sch)
    sch.serializeName = serializeName
    gen.func(serializeName, N.data, false, () => {
      gen.let(N.json, str``)
      serializeCode(cxt)
      gen.return(N.json)
    })
    gen.optimize(this.opts.code.optimize)
    const serializeFuncCode = gen.toString()
    sourceCode = `${gen.scopeRefs(N.scope)}return ${serializeFuncCode}`
    const makeSerialize = new Function(`${N.scope}`, sourceCode)
    const serialize: (data: unknown) => string = makeSerialize(this.scope.get())
    this.scope.value(serializeName, {ref: serialize})
    sch.serialize = serialize
  } catch (e) {
    if (sourceCode) this.logger.error("Error compiling serializer, function code:", sourceCode)
    delete sch.serialize
    delete sch.serializeName
    throw e
  } finally {
    this._compilations.delete(sch)
  }
  return sch
}

function serializeCode(cxt: SerializeCxt): void {
  let form: JTDForm | undefined
  for (const key of jtdForms) {
    if (key in cxt.schema) {
      form = key
      break
    }
  }
  serializeNullable(cxt, form ? genSerialize[form] : serializeEmpty)
}

function serializeNullable(cxt: SerializeCxt, serializeForm: (_cxt: SerializeCxt) => void): void {
  const {gen, schema, data} = cxt
  if (!schema.nullable) return serializeForm(cxt)
  gen.if(
    _`${data} === undefined || ${data} === null`,
    () => gen.add(N.json, _`"null"`),
    () => serializeForm(cxt)
  )
}

function serializeElements(cxt: SerializeCxt): void {
  const {gen, schema, data} = cxt
  gen.add(N.json, str`[`)
  const first = gen.let("first", true)
  gen.forOf("el", data, (el) => {
    addComma(cxt, first)
    serializeCode({...cxt, schema: schema.elements, data: el})
  })
  gen.add(N.json, str`]`)
}

function serializeValues(cxt: SerializeCxt): void {
  const {gen, schema, data} = cxt
  gen.add(N.json, str`{`)
  const first = gen.let("first", true)
  gen.forIn("key", data, (key) => serializeKeyValue(cxt, key, schema.values, first))
  gen.add(N.json, str`}`)
}

function serializeKeyValue(cxt: SerializeCxt, key: Name, schema: SchemaObject, first?: Name): void {
  const {gen, data} = cxt
  addComma(cxt, first)
  serializeString({...cxt, data: key})
  gen.add(N.json, str`:`)
  const value = gen.const("value", _`${data}${getProperty(key)}`)
  serializeCode({...cxt, schema, data: value})
}

function serializeDiscriminator(cxt: SerializeCxt): void {
  const {gen, schema, data} = cxt
  const {discriminator} = schema
  gen.add(N.json, str`{${JSON.stringify(discriminator)}:`)
  const tag = gen.const("tag", _`${data}${getProperty(discriminator)}`)
  serializeString({...cxt, data: tag})
  gen.if(false)
  for (const tagValue in schema.mapping) {
    gen.elseIf(_`${tag} === ${tagValue}`)
    const sch = schema.mapping[tagValue]
    serializeSchemaProperties({...cxt, schema: sch}, discriminator)
  }
  gen.endIf()
  gen.add(N.json, str`}`)
}

function serializeProperties(cxt: SerializeCxt): void {
  const {gen} = cxt
  gen.add(N.json, str`{`)
  serializeSchemaProperties(cxt)
  gen.add(N.json, str`}`)
}

function serializeSchemaProperties(cxt: SerializeCxt, discriminator?: string): void {
  const {gen, schema, data} = cxt
  const {properties, optionalProperties} = schema
  const props = keys(properties)
  const optProps = keys(optionalProperties)
  const allProps = allProperties(props.concat(optProps))
  let first = !discriminator
  let firstProp: Name | undefined

  for (const key of props) {
    if (first) first = false
    else gen.add(N.json, str`,`)
    serializeProperty(key, properties[key], keyValue(key))
  }
  if (first) firstProp = gen.let("first", true)
  for (const key of optProps) {
    const value = keyValue(key)
    gen.if(and(_`${value} !== undefined`, isOwnProperty(gen, data, key)), () => {
      addComma(cxt, firstProp)
      serializeProperty(key, optionalProperties[key], value)
    })
  }
  if (schema.additionalProperties) {
    gen.forIn("key", data, (key) =>
      gen.if(isAdditional(key, allProps), () => serializeKeyValue(cxt, key, {}, firstProp))
    )
  }

  function keys(ps?: SchemaObjectMap): string[] {
    return ps ? Object.keys(ps) : []
  }

  function allProperties(ps: string[]): string[] {
    if (discriminator) ps.push(discriminator)
    if (new Set(ps).size !== ps.length) {
      throw new Error("JTD: properties/optionalProperties/disciminator overlap")
    }
    return ps
  }

  function keyValue(key: string): Name {
    return gen.const("value", _`${data}${getProperty(key)}`)
  }

  function serializeProperty(key: string, propSchema: SchemaObject, value: Name): void {
    gen.add(N.json, str`${JSON.stringify(key)}:`)
    serializeCode({...cxt, schema: propSchema, data: value})
  }

  function isAdditional(key: Name, ps: string[]): Code | true {
    return ps.length ? and(...ps.map((p) => _`${key} !== ${p}`)) : true
  }
}

function serializeType(cxt: SerializeCxt): void {
  const {gen, schema, data} = cxt
  switch (schema.type) {
    case "boolean":
      gen.add(N.json, _`${data} ? "true" : "false"`)
      break
    case "string":
      serializeString(cxt)
      break
    case "timestamp":
      gen.if(
        _`${data} instanceof Date`,
        () => gen.add(N.json, _`'"' + ${data}.toISOString() + '"'`),
        () => serializeString(cxt)
      )
      break
    default:
      serializeNumber(cxt)
  }
}

function serializeString({gen, data}: SerializeCxt): void {
  gen.add(N.json, _`${useFunc(gen, quote)}(${data})`)
}

function serializeNumber({gen, data, self}: SerializeCxt): void {
  const condition = _`${data} === Infinity || ${data} === -Infinity || ${data} !== ${data}`

  if (self.opts.specialNumbers === undefined || self.opts.specialNumbers === "fast") {
    gen.add(N.json, _`"" + ${data}`)
  } else {
    // specialNumbers === "null"
    gen.if(
      condition,
      () => gen.add(N.json, _`null`),
      () => gen.add(N.json, _`"" + ${data}`)
    )
  }
}

function serializeRef(cxt: SerializeCxt): void {
  const {gen, self, data, definitions, schema, schemaEnv} = cxt
  const {ref} = schema
  const refSchema = definitions[ref]
  if (!refSchema) throw new MissingRefError(self.opts.uriResolver, "", ref, `No definition ${ref}`)
  if (!hasRef(refSchema)) return serializeCode({...cxt, schema: refSchema})
  const {root} = schemaEnv
  const sch = compileSerializer.call(self, new SchemaEnv({schema: refSchema, root}), definitions)
  gen.add(N.json, _`${getSerialize(gen, sch)}(${data})`)
}

function getSerialize(gen: CodeGen, sch: SchemaEnv): Code {
  return sch.serialize
    ? gen.scopeValue("serialize", {ref: sch.serialize})
    : _`${gen.scopeValue("wrapper", {ref: sch})}.serialize`
}

function serializeEmpty({gen, data}: SerializeCxt): void {
  gen.add(N.json, _`JSON.stringify(${data})`)
}

function addComma({gen}: SerializeCxt, first?: Name): void {
  if (first) {
    gen.if(
      first,
      () => gen.assign(first, false),
      () => gen.add(N.json, str`,`)
    )
  } else {
    gen.add(N.json, str`,`)
  }
}
