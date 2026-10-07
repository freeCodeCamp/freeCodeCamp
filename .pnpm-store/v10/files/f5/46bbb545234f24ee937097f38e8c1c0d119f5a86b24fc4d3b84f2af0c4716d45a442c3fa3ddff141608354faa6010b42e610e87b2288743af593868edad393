import type {FuncKeywordDefinition, SchemaCxt} from "ajv"

const sequences: Record<string, number | undefined> = {}

export type DynamicDefaultFunc = (args?: Record<string, any>) => () => any

const DEFAULTS: Record<string, DynamicDefaultFunc | undefined> = {
  timestamp: () => () => Date.now(),
  datetime: () => () => new Date().toISOString(),
  date: () => () => new Date().toISOString().slice(0, 10),
  time: () => () => new Date().toISOString().slice(11),
  random: () => () => Math.random(),
  randomint: (args?: {max?: number}) => {
    const max = args?.max ?? 2
    return () => Math.floor(Math.random() * max)
  },
  seq: (args?: {name?: string}) => {
    const name = args?.name ?? ""
    sequences[name] ||= 0
    return () => (sequences[name] as number)++
  },
}

interface PropertyDefaultSchema {
  func: string
  args: Record<string, any>
}

type DefaultSchema = Record<string, string | PropertyDefaultSchema | undefined>

const getDef: (() => FuncKeywordDefinition) & {
  DEFAULTS: typeof DEFAULTS
} = Object.assign(_getDef, {DEFAULTS})

function _getDef(): FuncKeywordDefinition {
  return {
    keyword: "dynamicDefaults",
    type: "object",
    schemaType: ["string", "object"],
    modifying: true,
    valid: true,
    compile(schema: DefaultSchema, _parentSchema, it: SchemaCxt) {
      if (!it.opts.useDefaults || it.compositeRule) return () => true
      const fs: Record<string, () => any> = {}
      for (const key in schema) fs[key] = getDefault(schema[key])
      const empty = it.opts.useDefaults === "empty"

      return (data: Record<string, any>) => {
        for (const prop in schema) {
          if (data[prop] === undefined || (empty && (data[prop] === null || data[prop] === ""))) {
            data[prop] = fs[prop]()
          }
        }
        return true
      }
    },
    metaSchema: {
      type: "object",
      additionalProperties: {
        anyOf: [
          {type: "string"},
          {
            type: "object",
            additionalProperties: false,
            required: ["func", "args"],
            properties: {
              func: {type: "string"},
              args: {type: "object"},
            },
          },
        ],
      },
    },
  }
}

function getDefault(d: string | PropertyDefaultSchema | undefined): () => any {
  return typeof d == "object" ? getObjDefault(d) : getStrDefault(d)
}

function getObjDefault({func, args}: PropertyDefaultSchema): () => any {
  const def = DEFAULTS[func]
  assertDefined(func, def)
  return def(args)
}

function getStrDefault(d = ""): () => any {
  const def = DEFAULTS[d]
  assertDefined(d, def)
  return def()
}

function assertDefined(name: string, def?: DynamicDefaultFunc): asserts def is DynamicDefaultFunc {
  if (!def) throw new Error(`invalid "dynamicDefaults" keyword property value: ${name}`)
}

export default getDef
module.exports = getDef
