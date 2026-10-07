import type {KeywordErrorDefinition, KeywordErrorCxt} from "../../types"
import type {SchemaCxt} from ".."
import {reportError} from "../errors"
import {_, Name} from "../codegen"
import N from "../names"

const boolError: KeywordErrorDefinition = {
  message: "boolean schema is false",
}

export function topBoolOrEmptySchema(it: SchemaCxt): void {
  const {gen, schema, validateName} = it
  if (schema === false) {
    falseSchemaError(it, false)
  } else if (typeof schema == "object" && schema.$async === true) {
    gen.return(N.data)
  } else {
    gen.assign(_`${validateName}.errors`, null)
    gen.return(true)
  }
}

export function boolOrEmptySchema(it: SchemaCxt, valid: Name): void {
  const {gen, schema} = it
  if (schema === false) {
    gen.var(valid, false) // TODO var
    falseSchemaError(it)
  } else {
    gen.var(valid, true) // TODO var
  }
}

function falseSchemaError(it: SchemaCxt, overrideAllErrors?: boolean): void {
  const {gen, data} = it
  // TODO maybe some other interface should be used for non-keyword validation errors...
  const cxt: KeywordErrorCxt = {
    gen,
    keyword: "false schema",
    data,
    schema: false,
    schemaCode: false,
    schemaValue: false,
    params: {},
    it,
  }
  reportError(cxt, boolError, undefined, overrideAllErrors)
}
