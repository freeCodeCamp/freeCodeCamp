import type {KeywordErrorDefinition, KeywordErrorCxt, ErrorObject} from "../../types"
import {_, Code} from "../../compile/codegen"

export type _JTDTypeError<K extends string, T extends string, S> = ErrorObject<
  K,
  {type: T; nullable: boolean},
  S
>

export function typeError(t: string): KeywordErrorDefinition {
  return {
    message: (cxt) => typeErrorMessage(cxt, t),
    params: (cxt) => typeErrorParams(cxt, t),
  }
}

export function typeErrorMessage({parentSchema}: KeywordErrorCxt, t: string): string {
  return parentSchema?.nullable ? `must be ${t} or null` : `must be ${t}`
}

export function typeErrorParams({parentSchema}: KeywordErrorCxt, t: string): Code {
  return _`{type: ${t}, nullable: ${!!parentSchema?.nullable}}`
}
