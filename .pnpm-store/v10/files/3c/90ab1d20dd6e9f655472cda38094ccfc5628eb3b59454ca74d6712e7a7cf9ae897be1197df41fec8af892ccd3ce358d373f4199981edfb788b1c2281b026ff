import type {
  CodeKeywordDefinition,
  AddedKeywordDefinition,
  ErrorObject,
  KeywordErrorDefinition,
  AnySchema,
} from "../../types"
import {allSchemaProperties, usePattern, isOwnProperty} from "../code"
import {_, nil, or, not, Code, Name} from "../../compile/codegen"
import N from "../../compile/names"
import type {SubschemaArgs} from "../../compile/validate/subschema"
import {alwaysValidSchema, schemaRefOrVal, Type} from "../../compile/util"

export type AdditionalPropertiesError = ErrorObject<
  "additionalProperties",
  {additionalProperty: string},
  AnySchema
>

const error: KeywordErrorDefinition = {
  message: "must NOT have additional properties",
  params: ({params}) => _`{additionalProperty: ${params.additionalProperty}}`,
}

const def: CodeKeywordDefinition & AddedKeywordDefinition = {
  keyword: "additionalProperties",
  type: ["object"],
  schemaType: ["boolean", "object"],
  allowUndefined: true,
  trackErrors: true,
  error,
  code(cxt) {
    const {gen, schema, parentSchema, data, errsCount, it} = cxt
    /* istanbul ignore if */
    if (!errsCount) throw new Error("ajv implementation error")
    const {allErrors, opts} = it
    it.props = true
    if (opts.removeAdditional !== "all" && alwaysValidSchema(it, schema)) return
    const props = allSchemaProperties(parentSchema.properties)
    const patProps = allSchemaProperties(parentSchema.patternProperties)
    checkAdditionalProperties()
    cxt.ok(_`${errsCount} === ${N.errors}`)

    function checkAdditionalProperties(): void {
      gen.forIn("key", data, (key: Name) => {
        if (!props.length && !patProps.length) additionalPropertyCode(key)
        else gen.if(isAdditional(key), () => additionalPropertyCode(key))
      })
    }

    function isAdditional(key: Name): Code {
      let definedProp: Code
      if (props.length > 8) {
        // TODO maybe an option instead of hard-coded 8?
        const propsSchema = schemaRefOrVal(it, parentSchema.properties, "properties")
        definedProp = isOwnProperty(gen, propsSchema as Code, key)
      } else if (props.length) {
        definedProp = or(...props.map((p) => _`${key} === ${p}`))
      } else {
        definedProp = nil
      }
      if (patProps.length) {
        definedProp = or(definedProp, ...patProps.map((p) => _`${usePattern(cxt, p)}.test(${key})`))
      }
      return not(definedProp)
    }

    function deleteAdditional(key: Name): void {
      gen.code(_`delete ${data}[${key}]`)
    }

    function additionalPropertyCode(key: Name): void {
      if (opts.removeAdditional === "all" || (opts.removeAdditional && schema === false)) {
        deleteAdditional(key)
        return
      }

      if (schema === false) {
        cxt.setParams({additionalProperty: key})
        cxt.error()
        if (!allErrors) gen.break()
        return
      }

      if (typeof schema == "object" && !alwaysValidSchema(it, schema)) {
        const valid = gen.name("valid")
        if (opts.removeAdditional === "failing") {
          applyAdditionalSchema(key, valid, false)
          gen.if(not(valid), () => {
            cxt.reset()
            deleteAdditional(key)
          })
        } else {
          applyAdditionalSchema(key, valid)
          if (!allErrors) gen.if(not(valid), () => gen.break())
        }
      }
    }

    function applyAdditionalSchema(key: Name, valid: Name, errors?: false): void {
      const subschema: SubschemaArgs = {
        keyword: "additionalProperties",
        dataProp: key,
        dataPropType: Type.Str,
      }
      if (errors === false) {
        Object.assign(subschema, {
          compositeRule: true,
          createErrors: false,
          allErrors: false,
        })
      }
      cxt.subschema(subschema, valid)
    }
  },
}

export default def
