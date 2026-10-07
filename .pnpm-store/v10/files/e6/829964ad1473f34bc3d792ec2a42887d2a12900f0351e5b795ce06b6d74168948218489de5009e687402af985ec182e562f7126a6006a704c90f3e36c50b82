import type {SchemaObjCxt} from ".."
import {_, getProperty, stringify} from "../codegen"
import {checkStrictMode} from "../util"

export function assignDefaults(it: SchemaObjCxt, ty?: string): void {
  const {properties, items} = it.schema
  if (ty === "object" && properties) {
    for (const key in properties) {
      assignDefault(it, key, properties[key].default)
    }
  } else if (ty === "array" && Array.isArray(items)) {
    items.forEach((sch, i: number) => assignDefault(it, i, sch.default))
  }
}

function assignDefault(it: SchemaObjCxt, prop: string | number, defaultValue: unknown): void {
  const {gen, compositeRule, data, opts} = it
  if (defaultValue === undefined) return
  const childData = _`${data}${getProperty(prop)}`
  if (compositeRule) {
    checkStrictMode(it, `default is ignored for: ${childData}`)
    return
  }

  let condition = _`${childData} === undefined`
  if (opts.useDefaults === "empty") {
    condition = _`${condition} || ${childData} === null || ${childData} === ""`
  }
  // `${childData} === undefined` +
  // (opts.useDefaults === "empty" ? ` || ${childData} === null || ${childData} === ""` : "")
  gen.if(condition, _`${childData} = ${stringify(defaultValue)}`)
}
