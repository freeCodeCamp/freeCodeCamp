import type {SchemaObject} from "../../types"

export type SchemaObjectMap = {[Ref in string]?: SchemaObject}

export const jtdForms = [
  "elements",
  "values",
  "discriminator",
  "properties",
  "optionalProperties",
  "enum",
  "type",
  "ref",
] as const

export type JTDForm = (typeof jtdForms)[number]
