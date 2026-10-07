import type {AnySchema} from "../../types"
import type {SchemaObjCxt} from ".."
import {_, str, getProperty, Code, Name} from "../codegen"
import {escapeFragment, getErrorPath, Type} from "../util"
import type {JSONType} from "../rules"

export interface SubschemaContext {
  // TODO use Optional? align with SchemCxt property types
  schema: AnySchema
  schemaPath: Code
  errSchemaPath: string
  topSchemaRef?: Code
  errorPath?: Code
  dataLevel?: number
  dataTypes?: JSONType[]
  data?: Name
  parentData?: Name
  parentDataProperty?: Code | number
  dataNames?: Name[]
  dataPathArr?: (Code | number)[]
  propertyName?: Name
  jtdDiscriminator?: string
  jtdMetadata?: boolean
  compositeRule?: true
  createErrors?: boolean
  allErrors?: boolean
}

export type SubschemaArgs = Partial<{
  keyword: string
  schemaProp: string | number
  schema: AnySchema
  schemaPath: Code
  errSchemaPath: string
  topSchemaRef: Code
  data: Name | Code
  dataProp: Code | string | number
  dataTypes: JSONType[]
  definedProperties: Set<string>
  propertyName: Name
  dataPropType: Type
  jtdDiscriminator: string
  jtdMetadata: boolean
  compositeRule: true
  createErrors: boolean
  allErrors: boolean
}>

export function getSubschema(
  it: SchemaObjCxt,
  {keyword, schemaProp, schema, schemaPath, errSchemaPath, topSchemaRef}: SubschemaArgs
): SubschemaContext {
  if (keyword !== undefined && schema !== undefined) {
    throw new Error('both "keyword" and "schema" passed, only one allowed')
  }

  if (keyword !== undefined) {
    const sch = it.schema[keyword]
    return schemaProp === undefined
      ? {
          schema: sch,
          schemaPath: _`${it.schemaPath}${getProperty(keyword)}`,
          errSchemaPath: `${it.errSchemaPath}/${keyword}`,
        }
      : {
          schema: sch[schemaProp],
          schemaPath: _`${it.schemaPath}${getProperty(keyword)}${getProperty(schemaProp)}`,
          errSchemaPath: `${it.errSchemaPath}/${keyword}/${escapeFragment(schemaProp)}`,
        }
  }

  if (schema !== undefined) {
    if (schemaPath === undefined || errSchemaPath === undefined || topSchemaRef === undefined) {
      throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"')
    }
    return {
      schema,
      schemaPath,
      topSchemaRef,
      errSchemaPath,
    }
  }

  throw new Error('either "keyword" or "schema" must be passed')
}

export function extendSubschemaData(
  subschema: SubschemaContext,
  it: SchemaObjCxt,
  {dataProp, dataPropType: dpType, data, dataTypes, propertyName}: SubschemaArgs
): void {
  if (data !== undefined && dataProp !== undefined) {
    throw new Error('both "data" and "dataProp" passed, only one allowed')
  }

  const {gen} = it

  if (dataProp !== undefined) {
    const {errorPath, dataPathArr, opts} = it
    const nextData = gen.let("data", _`${it.data}${getProperty(dataProp)}`, true)
    dataContextProps(nextData)
    subschema.errorPath = str`${errorPath}${getErrorPath(dataProp, dpType, opts.jsPropertySyntax)}`
    subschema.parentDataProperty = _`${dataProp}`
    subschema.dataPathArr = [...dataPathArr, subschema.parentDataProperty]
  }

  if (data !== undefined) {
    const nextData = data instanceof Name ? data : gen.let("data", data, true) // replaceable if used once?
    dataContextProps(nextData)
    if (propertyName !== undefined) subschema.propertyName = propertyName
    // TODO something is possibly wrong here with not changing parentDataProperty and not appending dataPathArr
  }

  if (dataTypes) subschema.dataTypes = dataTypes

  function dataContextProps(_nextData: Name): void {
    subschema.data = _nextData
    subschema.dataLevel = it.dataLevel + 1
    subschema.dataTypes = []
    it.definedProperties = new Set<string>()
    subschema.parentData = it.data
    subschema.dataNames = [...it.dataNames, _nextData]
  }
}

export function extendSubschemaMode(
  subschema: SubschemaContext,
  {jtdDiscriminator, jtdMetadata, compositeRule, createErrors, allErrors}: SubschemaArgs
): void {
  if (compositeRule !== undefined) subschema.compositeRule = compositeRule
  if (createErrors !== undefined) subschema.createErrors = createErrors
  if (allErrors !== undefined) subschema.allErrors = allErrors
  subschema.jtdDiscriminator = jtdDiscriminator // not inherited
  subschema.jtdMetadata = jtdMetadata // not inherited
}
