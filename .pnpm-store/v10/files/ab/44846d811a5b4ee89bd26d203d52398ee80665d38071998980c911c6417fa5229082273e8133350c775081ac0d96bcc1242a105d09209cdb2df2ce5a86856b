import type {
  AddedFormat,
  FormatValidator,
  AsyncFormatValidator,
  CodeKeywordDefinition,
  KeywordErrorDefinition,
  ErrorObject,
} from "../../types"
import type {KeywordCxt} from "../../compile/validate"
import {_, str, nil, or, Code, getProperty, regexpCode} from "../../compile/codegen"

type FormatValidate =
  | FormatValidator<string>
  | FormatValidator<number>
  | AsyncFormatValidator<string>
  | AsyncFormatValidator<number>
  | RegExp
  | string
  | true

export type FormatError = ErrorObject<"format", {format: string}, string | {$data: string}>

const error: KeywordErrorDefinition = {
  message: ({schemaCode}) => str`must match format "${schemaCode}"`,
  params: ({schemaCode}) => _`{format: ${schemaCode}}`,
}

const def: CodeKeywordDefinition = {
  keyword: "format",
  type: ["number", "string"],
  schemaType: "string",
  $data: true,
  error,
  code(cxt: KeywordCxt, ruleType?: string) {
    const {gen, data, $data, schema, schemaCode, it} = cxt
    const {opts, errSchemaPath, schemaEnv, self} = it
    if (!opts.validateFormats) return

    if ($data) validate$DataFormat()
    else validateFormat()

    function validate$DataFormat(): void {
      const fmts = gen.scopeValue("formats", {
        ref: self.formats,
        code: opts.code.formats,
      })
      const fDef = gen.const("fDef", _`${fmts}[${schemaCode}]`)
      const fType = gen.let("fType")
      const format = gen.let("format")
      // TODO simplify
      gen.if(
        _`typeof ${fDef} == "object" && !(${fDef} instanceof RegExp)`,
        () => gen.assign(fType, _`${fDef}.type || "string"`).assign(format, _`${fDef}.validate`),
        () => gen.assign(fType, _`"string"`).assign(format, fDef)
      )
      cxt.fail$data(or(unknownFmt(), invalidFmt()))

      function unknownFmt(): Code {
        if (opts.strictSchema === false) return nil
        return _`${schemaCode} && !${format}`
      }

      function invalidFmt(): Code {
        const callFormat = schemaEnv.$async
          ? _`(${fDef}.async ? await ${format}(${data}) : ${format}(${data}))`
          : _`${format}(${data})`
        const validData = _`(typeof ${format} == "function" ? ${callFormat} : ${format}.test(${data}))`
        return _`${format} && ${format} !== true && ${fType} === ${ruleType} && !${validData}`
      }
    }

    function validateFormat(): void {
      const formatDef: AddedFormat | undefined = self.formats[schema]
      if (!formatDef) {
        unknownFormat()
        return
      }
      if (formatDef === true) return
      const [fmtType, format, fmtRef] = getFormat(formatDef)
      if (fmtType === ruleType) cxt.pass(validCondition())

      function unknownFormat(): void {
        if (opts.strictSchema === false) {
          self.logger.warn(unknownMsg())
          return
        }
        throw new Error(unknownMsg())

        function unknownMsg(): string {
          return `unknown format "${schema as string}" ignored in schema at path "${errSchemaPath}"`
        }
      }

      function getFormat(fmtDef: AddedFormat): [string, FormatValidate, Code] {
        const code =
          fmtDef instanceof RegExp
            ? regexpCode(fmtDef)
            : opts.code.formats
            ? _`${opts.code.formats}${getProperty(schema)}`
            : undefined
        const fmt = gen.scopeValue("formats", {key: schema, ref: fmtDef, code})
        if (typeof fmtDef == "object" && !(fmtDef instanceof RegExp)) {
          return [fmtDef.type || "string", fmtDef.validate, _`${fmt}.validate`]
        }

        return ["string", fmtDef, fmt]
      }

      function validCondition(): Code {
        if (typeof formatDef == "object" && !(formatDef instanceof RegExp) && formatDef.async) {
          if (!schemaEnv.$async) throw new Error("async format in sync schema")
          return _`await ${fmtRef}(${data})`
        }
        return typeof format == "function" ? _`${fmtRef}(${data})` : _`${fmtRef}.test(${data})`
      }
    }
  },
}

export default def
