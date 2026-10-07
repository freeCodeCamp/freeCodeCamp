import type {CodeKeywordDefinition, AnySchemaObject} from "../../types"
import type {KeywordCxt} from "../../compile/validate"
import {compileSchema, SchemaEnv} from "../../compile"
import {_, not, nil, stringify} from "../../compile/codegen"
import MissingRefError from "../../compile/ref_error"
import N from "../../compile/names"
import {getValidate, callRef} from "../core/ref"
import {checkMetadata} from "./metadata"

const def: CodeKeywordDefinition = {
  keyword: "ref",
  schemaType: "string",
  code(cxt: KeywordCxt) {
    checkMetadata(cxt)
    const {gen, data, schema: ref, parentSchema, it} = cxt
    const {
      schemaEnv: {root},
    } = it
    const valid = gen.name("valid")
    if (parentSchema.nullable) {
      gen.var(valid, _`${data} === null`)
      gen.if(not(valid), validateJtdRef)
    } else {
      gen.var(valid, false)
      validateJtdRef()
    }
    cxt.ok(valid)

    function validateJtdRef(): void {
      const refSchema = (root.schema as AnySchemaObject).definitions?.[ref]
      if (!refSchema) {
        throw new MissingRefError(it.opts.uriResolver, "", ref, `No definition ${ref}`)
      }
      if (hasRef(refSchema) || !it.opts.inlineRefs) callValidate(refSchema)
      else inlineRefSchema(refSchema)
    }

    function callValidate(schema: AnySchemaObject): void {
      const sch = compileSchema.call(
        it.self,
        new SchemaEnv({schema, root, schemaPath: `/definitions/${ref}`})
      )
      const v = getValidate(cxt, sch)
      const errsCount = gen.const("_errs", N.errors)
      callRef(cxt, v, sch, sch.$async)
      gen.assign(valid, _`${errsCount} === ${N.errors}`)
    }

    function inlineRefSchema(schema: AnySchemaObject): void {
      const schName = gen.scopeValue(
        "schema",
        it.opts.code.source === true ? {ref: schema, code: stringify(schema)} : {ref: schema}
      )
      cxt.subschema(
        {
          schema,
          dataTypes: [],
          schemaPath: nil,
          topSchemaRef: schName,
          errSchemaPath: `/definitions/${ref}`,
        },
        valid
      )
    }
  },
}

export function hasRef(schema: AnySchemaObject): boolean {
  for (const key in schema) {
    let sch: AnySchemaObject
    if (key === "ref" || (typeof (sch = schema[key]) == "object" && hasRef(sch))) return true
  }
  return false
}

export default def
