import type {
  CodeKeywordDefinition,
  KeywordErrorDefinition,
  ErrorObject,
  AnySchema,
} from "../../types"
import {_, not, and, Name, Code} from "../../compile/codegen"
import {alwaysValidSchema, Type} from "../../compile/util"
import N from "../../compile/names"

export type UnevaluatedPropertiesError = ErrorObject<
  "unevaluatedProperties",
  {unevaluatedProperty: string},
  AnySchema
>

const error: KeywordErrorDefinition = {
  message: "must NOT have unevaluated properties",
  params: ({params}) => _`{unevaluatedProperty: ${params.unevaluatedProperty}}`,
}

const def: CodeKeywordDefinition = {
  keyword: "unevaluatedProperties",
  type: "object",
  schemaType: ["boolean", "object"],
  trackErrors: true,
  error,
  code(cxt) {
    const {gen, schema, data, errsCount, it} = cxt
    /* istanbul ignore if */
    if (!errsCount) throw new Error("ajv implementation error")
    const {allErrors, props} = it
    if (props instanceof Name) {
      gen.if(_`${props} !== true`, () =>
        gen.forIn("key", data, (key: Name) =>
          gen.if(unevaluatedDynamic(props, key), () => unevaluatedPropCode(key))
        )
      )
    } else if (props !== true) {
      gen.forIn("key", data, (key: Name) =>
        props === undefined
          ? unevaluatedPropCode(key)
          : gen.if(unevaluatedStatic(props, key), () => unevaluatedPropCode(key))
      )
    }
    it.props = true
    cxt.ok(_`${errsCount} === ${N.errors}`)

    function unevaluatedPropCode(key: Name): void {
      if (schema === false) {
        cxt.setParams({unevaluatedProperty: key})
        cxt.error()
        if (!allErrors) gen.break()
        return
      }

      if (!alwaysValidSchema(it, schema)) {
        const valid = gen.name("valid")
        cxt.subschema(
          {
            keyword: "unevaluatedProperties",
            dataProp: key,
            dataPropType: Type.Str,
          },
          valid
        )
        if (!allErrors) gen.if(not(valid), () => gen.break())
      }
    }

    function unevaluatedDynamic(evaluatedProps: Name, key: Name): Code {
      return _`!${evaluatedProps} || !${evaluatedProps}[${key}]`
    }

    function unevaluatedStatic(evaluatedProps: {[K in string]?: true}, key: Name): Code {
      const ps: Code[] = []
      for (const p in evaluatedProps) {
        if (evaluatedProps[p] === true) ps.push(_`${key} !== ${p}`)
      }
      return and(...ps)
    }
  },
}

export default def
