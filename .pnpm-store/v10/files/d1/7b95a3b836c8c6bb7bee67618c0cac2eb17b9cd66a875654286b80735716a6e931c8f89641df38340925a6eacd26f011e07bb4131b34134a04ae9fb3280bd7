import type {CodeKeywordDefinition, ErrorObject, KeywordErrorDefinition} from "../../types"
import type {KeywordCxt} from "../../compile/validate"
import {usePattern} from "../code"
import {useFunc} from "../../compile/util"
import {_, str} from "../../compile/codegen"

export type PatternError = ErrorObject<"pattern", {pattern: string}, string | {$data: string}>

const error: KeywordErrorDefinition = {
  message: ({schemaCode}) => str`must match pattern "${schemaCode}"`,
  params: ({schemaCode}) => _`{pattern: ${schemaCode}}`,
}

const def: CodeKeywordDefinition = {
  keyword: "pattern",
  type: "string",
  schemaType: "string",
  $data: true,
  error,
  code(cxt: KeywordCxt) {
    const {gen, data, $data, schema, schemaCode, it} = cxt
    const u = it.opts.unicodeRegExp ? "u" : ""
    if ($data) {
      const {regExp} = it.opts.code
      const regExpCode = regExp.code === "new RegExp" ? _`new RegExp` : useFunc(gen, regExp)
      const valid = gen.let("valid")
      gen.try(
        () => gen.assign(valid, _`${regExpCode}(${schemaCode}, ${u}).test(${data})`),
        () => gen.assign(valid, false)
      )
      cxt.fail$data(_`!${valid}`)
    } else {
      const regExp = usePattern(cxt, schema)
      cxt.fail$data(_`!${regExp}.test(${data})`)
    }
  },
}

export default def
