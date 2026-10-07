'use strict'

const AjvJTD = require('ajv/dist/jtd')

const defaultAjvOptions = require('./default-ajv-options')

class SerializerCompiler {
  constructor (_externalSchemas, options) {
    this.ajv = new AjvJTD(Object.assign({}, defaultAjvOptions, options))

    /**
     * https://ajv.js.org/json-type-definition.html#ref-form
     * Unlike JSON Schema, JTD does not allow to reference:
     * - any schema fragment other than root level definitions member
     * - root of the schema - there is another way to define a self-recursive schema (see Example 2)
     * - another schema file (but you can still combine schemas from multiple files using JavaScript).
     *
     * So we ignore the externalSchemas parameter.
     */
  }

  buildSerializerFunction ({ schema/*, method, url, httpStatus */ }) {
    return this.ajv.compileSerializer(schema)
  }
}

module.exports = SerializerCompiler
