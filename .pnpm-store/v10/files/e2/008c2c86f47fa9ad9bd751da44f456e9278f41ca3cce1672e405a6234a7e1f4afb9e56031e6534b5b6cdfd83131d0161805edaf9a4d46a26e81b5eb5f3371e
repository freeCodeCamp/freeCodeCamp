import type {FuncKeywordDefinition, AnySchemaObject} from "ajv"
import equal = require("fast-deep-equal")

const SCALAR_TYPES = ["number", "integer", "string", "boolean", "null"]

export default function getDef(): FuncKeywordDefinition {
  return {
    keyword: "uniqueItemProperties",
    type: "array",
    schemaType: "array",
    compile(keys: string[], parentSchema: AnySchemaObject) {
      const scalar = getScalarKeys(keys, parentSchema)

      return (data) => {
        if (data.length <= 1) return true
        for (let k = 0; k < keys.length; k++) {
          const key = keys[k]
          if (scalar[k]) {
            const hash: Record<string, any> = {}
            for (const x of data) {
              if (!x || typeof x != "object") continue
              let p = x[key]
              if (p && typeof p == "object") continue
              if (typeof p == "string") p = '"' + p
              if (hash[p]) return false
              hash[p] = true
            }
          } else {
            for (let i = data.length; i--; ) {
              const x = data[i]
              if (!x || typeof x != "object") continue
              for (let j = i; j--; ) {
                const y = data[j]
                if (y && typeof y == "object" && equal(x[key], y[key])) return false
              }
            }
          }
        }
        return true
      }
    },
    metaSchema: {
      type: "array",
      items: {type: "string"},
    },
  }
}

function getScalarKeys(keys: string[], schema: AnySchemaObject): boolean[] {
  return keys.map((key) => {
    const t = schema.items?.properties?.[key]?.type
    return Array.isArray(t)
      ? !t.includes("object") && !t.includes("array")
      : SCALAR_TYPES.includes(t)
  })
}

module.exports = getDef
