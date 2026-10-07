import type {
  CodeKeywordDefinition,
  ErrorObject,
  KeywordErrorDefinition,
  AnySchema,
} from "../../types"
import type {KeywordCxt} from "../../compile/validate"
import {_, Name} from "../../compile/codegen"
import {alwaysValidSchema} from "../../compile/util"
import {SchemaCxt} from "../../compile"

export type OneOfError = ErrorObject<
  "oneOf",
  {passingSchemas: [number, number] | null},
  AnySchema[]
>

const error: KeywordErrorDefinition = {
  message: "must match exactly one schema in oneOf",
  params: ({params}) => _`{passingSchemas: ${params.passing}}`,
}

const def: CodeKeywordDefinition = {
  keyword: "oneOf",
  schemaType: "array",
  trackErrors: true,
  error,
  code(cxt: KeywordCxt) {
    const {gen, schema, parentSchema, it} = cxt
    /* istanbul ignore if */
    if (!Array.isArray(schema)) throw new Error("ajv implementation error")
    if (it.opts.discriminator && parentSchema.discriminator) return
    const schArr: AnySchema[] = schema
    const valid = gen.let("valid", false)
    const passing = gen.let("passing", null)
    const schValid = gen.name("_valid")
    cxt.setParams({passing})
    // TODO possibly fail straight away (with warning or exception) if there are two empty always valid schemas

    gen.block(validateOneOf)

    cxt.result(
      valid,
      () => cxt.reset(),
      () => cxt.error(true)
    )

    function validateOneOf(): void {
      schArr.forEach((sch: AnySchema, i: number) => {
        let schCxt: SchemaCxt | undefined
        if (alwaysValidSchema(it, sch)) {
          gen.var(schValid, true)
        } else {
          schCxt = cxt.subschema(
            {
              keyword: "oneOf",
              schemaProp: i,
              compositeRule: true,
            },
            schValid
          )
        }

        if (i > 0) {
          gen
            .if(_`${schValid} && ${valid}`)
            .assign(valid, false)
            .assign(passing, _`[${passing}, ${i}]`)
            .else()
        }

        gen.if(schValid, () => {
          gen.assign(valid, true)
          gen.assign(passing, i)
          if (schCxt) cxt.mergeEvaluated(schCxt, Name)
        })
      })
    }
  },
}

export default def
