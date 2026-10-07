'use strict'

const { rawRequired } = require('../symbols')
const { xConsume } = require('../constants')

function resolveLocalRef (jsonSchema, externalSchemas) {
  if (jsonSchema.type !== undefined && jsonSchema.properties !== undefined) {
    // for the shorthand querystring/params/headers declaration
    const propertiesMap = Object.keys(jsonSchema.properties).reduce((acc, headers) => {
      const rewriteProps = {}
      rewriteProps.required = (Array.isArray(jsonSchema.required) && jsonSchema.required.indexOf(headers) >= 0) || false
      // save raw required for next restore in the content/<media-type>
      if (jsonSchema.properties[headers][xConsume]) {
        rewriteProps[rawRequired] = jsonSchema.properties[headers].required
      }
      const newProps = Object.assign({}, jsonSchema.properties[headers], rewriteProps)

      return Object.assign({}, acc, { [headers]: newProps })
    }, {})

    return propertiesMap
  }

  // for oneOf, anyOf, allOf support in querystring/params/headers
  if (jsonSchema.oneOf || jsonSchema.anyOf || jsonSchema.allOf) {
    const schemas = jsonSchema.oneOf || jsonSchema.anyOf || jsonSchema.allOf
    return schemas.reduce((acc, schema) => Object.assign(acc, resolveLocalRef(schema, externalSchemas)), {})
  }

  // $ref is in the format: #/definitions/<resolved definition>/<optional fragment>
  if (jsonSchema.$ref) {
    const localRef = jsonSchema.$ref.split('/', 3)[2]
    if (externalSchemas[localRef]) return resolveLocalRef(externalSchemas[localRef], externalSchemas)
    // $ref is in the format: #/components/schemas/<resolved definition>
    return resolveLocalRef(externalSchemas[jsonSchema.$ref.split('/', 4)[3]], externalSchemas)
  }
  return jsonSchema
}

module.exports = {
  resolveLocalRef
}
