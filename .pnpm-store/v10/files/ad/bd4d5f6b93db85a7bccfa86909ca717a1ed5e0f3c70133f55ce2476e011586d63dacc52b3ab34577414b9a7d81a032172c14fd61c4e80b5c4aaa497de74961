import type {CodeKeywordDefinition} from "../../types"
import type {KeywordCxt} from "../../compile/validate"
import {allSchemaProperties, usePattern} from "../code"
import {_, not, Name} from "../../compile/codegen"
import {alwaysValidSchema, checkStrictMode} from "../../compile/util"
import {evaluatedPropsToName, Type} from "../../compile/util"
import {AnySchema} from "../../types"

const def: CodeKeywordDefinition = {
  keyword: "patternProperties",
  type: "object",
  schemaType: "object",
  code(cxt: KeywordCxt) {
    const {gen, schema, data, parentSchema, it} = cxt
    const {opts} = it
    const patterns = allSchemaProperties(schema)
    const alwaysValidPatterns = patterns.filter((p) =>
      alwaysValidSchema(it, schema[p] as AnySchema)
    )

    if (
      patterns.length === 0 ||
      (alwaysValidPatterns.length === patterns.length &&
        (!it.opts.unevaluated || it.props === true))
    ) {
      return
    }

    const checkProperties =
      opts.strictSchema && !opts.allowMatchingProperties && parentSchema.properties
    const valid = gen.name("valid")
    if (it.props !== true && !(it.props instanceof Name)) {
      it.props = evaluatedPropsToName(gen, it.props)
    }
    const {props} = it
    validatePatternProperties()

    function validatePatternProperties(): void {
      for (const pat of patterns) {
        if (checkProperties) checkMatchingProperties(pat)
        if (it.allErrors) {
          validateProperties(pat)
        } else {
          gen.var(valid, true) // TODO var
          validateProperties(pat)
          gen.if(valid)
        }
      }
    }

    function checkMatchingProperties(pat: string): void {
      for (const prop in checkProperties) {
        if (new RegExp(pat).test(prop)) {
          checkStrictMode(
            it,
            `property ${prop} matches pattern ${pat} (use allowMatchingProperties)`
          )
        }
      }
    }

    function validateProperties(pat: string): void {
      gen.forIn("key", data, (key) => {
        gen.if(_`${usePattern(cxt, pat)}.test(${key})`, () => {
          const alwaysValid = alwaysValidPatterns.includes(pat)
          if (!alwaysValid) {
            cxt.subschema(
              {
                keyword: "patternProperties",
                schemaProp: pat,
                dataProp: key,
                dataPropType: Type.Str,
              },
              valid
            )
          }

          if (it.opts.unevaluated && props !== true) {
            gen.assign(_`${props}[${key}]`, true)
          } else if (!alwaysValid && !it.allErrors) {
            // can short-circuit if `unevaluatedProperties` is not supported (opts.next === false)
            // or if all properties were evaluated (props === true)
            gen.if(not(valid), () => gen.break())
          }
        })
      })
    }
  },
}

export default def
