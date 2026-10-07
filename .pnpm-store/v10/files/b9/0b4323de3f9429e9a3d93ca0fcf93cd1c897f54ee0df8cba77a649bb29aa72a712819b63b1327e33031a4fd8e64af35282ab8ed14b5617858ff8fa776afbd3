'use strict'

const Ajv = require('ajv')
const fastUri = require('fast-uri')
const ajvFormats = require('ajv-formats')
const clone = require('rfdc')({ proto: true })

class Validator {
  constructor (ajvOptions) {
    this.ajv = new Ajv({
      ...ajvOptions,
      strictSchema: false,
      validateSchema: false,
      allowUnionTypes: true,
      uriResolver: fastUri
    })

    ajvFormats(this.ajv)

    this.ajv.addKeyword({
      keyword: 'fjs_type',
      type: 'object',
      errors: false,
      validate: (_type, date) => {
        return date instanceof Date
      }
    })

    this._ajvSchemas = {}
    this._ajvOptions = ajvOptions || {}
  }

  addSchema (schema, schemaName) {
    let schemaKey = schema.$id || schemaName
    if (schema.$id !== undefined && schema.$id[0] === '#') {
      schemaKey = schemaName + schema.$id // relative URI
    }

    if (
      this.ajv.refs[schemaKey] === undefined &&
      this.ajv.schemas[schemaKey] === undefined
    ) {
      const ajvSchema = clone(schema)
      this.convertSchemaToAjvFormat(ajvSchema)
      this.ajv.addSchema(ajvSchema, schemaKey)
      this._ajvSchemas[schemaKey] = schema
    }
  }

  validate (schemaRef, data) {
    return this.ajv.validate(schemaRef, data)
  }

  // Ajv does not support js date format. In order to properly validate objects containing a date,
  // it needs to replace all occurrences of the string date format with a custom keyword fjs_type.
  // (see https://github.com/fastify/fast-json-stringify/pull/441)
  convertSchemaToAjvFormat (schema) {
    if (schema === null) return

    if (schema.type === 'string') {
      schema.fjs_type = 'string'
      schema.type = ['string', 'object']
    } else if (
      Array.isArray(schema.type) &&
      schema.type.includes('string') &&
      !schema.type.includes('object')
    ) {
      schema.fjs_type = 'string'
      schema.type.push('object')
    }
    for (const property in schema) {
      if (typeof schema[property] === 'object') {
        this.convertSchemaToAjvFormat(schema[property])
      }
    }
  }

  getState () {
    return {
      ajvOptions: this._ajvOptions,
      ajvSchemas: this._ajvSchemas
    }
  }

  static restoreFromState (state) {
    const validator = new Validator(state.ajvOptions)
    for (const [id, ajvSchema] of Object.entries(state.ajvSchemas)) {
      validator.ajv.addSchema(ajvSchema, id)
    }
    return validator
  }
}

module.exports = Validator
