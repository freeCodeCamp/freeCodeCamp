import type {
  CodeKeywordDefinition,
  ErrorObject,
  KeywordErrorDefinition,
  SchemaMap,
  AnySchema,
} from "../../types"
import type {KeywordCxt} from "../../compile/validate"
import {_, str} from "../../compile/codegen"
import {alwaysValidSchema} from "../../compile/util"
import {checkReportMissingProp, checkMissingProp, reportMissingProp, propertyInData} from "../code"

export type PropertyDependencies = {[K in string]?: string[]}

export interface DependenciesErrorParams {
  property: string
  missingProperty: string
  depsCount: number
  deps: string // TODO change to string[]
}

type SchemaDependencies = SchemaMap

export type DependenciesError = ErrorObject<
  "dependencies",
  DependenciesErrorParams,
  {[K in string]?: string[] | AnySchema}
>

export const error: KeywordErrorDefinition = {
  message: ({params: {property, depsCount, deps}}) => {
    const property_ies = depsCount === 1 ? "property" : "properties"
    return str`must have ${property_ies} ${deps} when property ${property} is present`
  },
  params: ({params: {property, depsCount, deps, missingProperty}}) =>
    _`{property: ${property},
    missingProperty: ${missingProperty},
    depsCount: ${depsCount},
    deps: ${deps}}`, // TODO change to reference
}

const def: CodeKeywordDefinition = {
  keyword: "dependencies",
  type: "object",
  schemaType: "object",
  error,
  code(cxt: KeywordCxt) {
    const [propDeps, schDeps] = splitDependencies(cxt)
    validatePropertyDeps(cxt, propDeps)
    validateSchemaDeps(cxt, schDeps)
  },
}

function splitDependencies({schema}: KeywordCxt): [PropertyDependencies, SchemaDependencies] {
  const propertyDeps: PropertyDependencies = {}
  const schemaDeps: SchemaDependencies = {}
  for (const key in schema) {
    if (key === "__proto__") continue
    const deps = Array.isArray(schema[key]) ? propertyDeps : schemaDeps
    deps[key] = schema[key]
  }
  return [propertyDeps, schemaDeps]
}

export function validatePropertyDeps(
  cxt: KeywordCxt,
  propertyDeps: {[K in string]?: string[]} = cxt.schema
): void {
  const {gen, data, it} = cxt
  if (Object.keys(propertyDeps).length === 0) return
  const missing = gen.let("missing")
  for (const prop in propertyDeps) {
    const deps = propertyDeps[prop] as string[]
    if (deps.length === 0) continue
    const hasProperty = propertyInData(gen, data, prop, it.opts.ownProperties)
    cxt.setParams({
      property: prop,
      depsCount: deps.length,
      deps: deps.join(", "),
    })
    if (it.allErrors) {
      gen.if(hasProperty, () => {
        for (const depProp of deps) {
          checkReportMissingProp(cxt, depProp)
        }
      })
    } else {
      gen.if(_`${hasProperty} && (${checkMissingProp(cxt, deps, missing)})`)
      reportMissingProp(cxt, missing)
      gen.else()
    }
  }
}

export function validateSchemaDeps(cxt: KeywordCxt, schemaDeps: SchemaMap = cxt.schema): void {
  const {gen, data, keyword, it} = cxt
  const valid = gen.name("valid")
  for (const prop in schemaDeps) {
    if (alwaysValidSchema(it, schemaDeps[prop] as AnySchema)) continue
    gen.if(
      propertyInData(gen, data, prop, it.opts.ownProperties),
      () => {
        const schCxt = cxt.subschema({keyword, schemaProp: prop}, valid)
        cxt.mergeValidEvaluated(schCxt, valid)
      },
      () => gen.var(valid, true) // TODO var
    )
    cxt.ok(valid)
  }
}

export default def
