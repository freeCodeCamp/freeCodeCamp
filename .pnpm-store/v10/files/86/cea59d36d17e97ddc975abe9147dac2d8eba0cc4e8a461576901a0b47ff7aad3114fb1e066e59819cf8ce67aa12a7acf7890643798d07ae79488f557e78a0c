import {
  DefinedFormats,
  FormatMode,
  FormatName,
  formatNames,
  fastFormats,
  fullFormats,
} from "./formats"
import formatLimit from "./limit"
import type Ajv from "ajv"
import type {Plugin, Format} from "ajv"
import {_, Name} from "ajv/dist/compile/codegen"

export {FormatMode, FormatName} from "./formats"
export {LimitFormatError} from "./limit"
export interface FormatOptions {
  mode?: FormatMode
  formats?: FormatName[]
  keywords?: boolean
}

export type FormatsPluginOptions = FormatName[] | FormatOptions

export interface FormatsPlugin extends Plugin<FormatsPluginOptions> {
  get: (format: FormatName, mode?: FormatMode) => Format
}

const fullName = new Name("fullFormats")
const fastName = new Name("fastFormats")

const formatsPlugin: FormatsPlugin = (
  ajv: Ajv,
  opts: FormatsPluginOptions = {keywords: true}
): Ajv => {
  if (Array.isArray(opts)) {
    addFormats(ajv, opts, fullFormats, fullName)
    return ajv
  }
  const [formats, exportName] =
    opts.mode === "fast" ? [fastFormats, fastName] : [fullFormats, fullName]
  const list = opts.formats || formatNames
  addFormats(ajv, list, formats, exportName)
  if (opts.keywords) formatLimit(ajv)
  return ajv
}

formatsPlugin.get = (name: FormatName, mode: FormatMode = "full"): Format => {
  const formats = mode === "fast" ? fastFormats : fullFormats
  const f = formats[name]
  if (!f) throw new Error(`Unknown format "${name}"`)
  return f
}

function addFormats(ajv: Ajv, list: FormatName[], fs: DefinedFormats, exportName: Name): void {
  ajv.opts.code.formats ??= _`require("ajv-formats/dist/formats").${exportName}`
  for (const f of list) ajv.addFormat(f, fs[f])
}

module.exports = exports = formatsPlugin
Object.defineProperty(exports, "__esModule", {value: true})

export default formatsPlugin
