'use strict'

const { readPackageJson } = require('../../util/read-package-json')
const { formatParamUrl } = require('../../util/format-param-url')
const { resolveLocalRef } = require('../../util/resolve-local-ref')
const { resolveSchemaReference } = require('../../util/resolve-schema-reference')
const { xResponseDescription, xConsume } = require('../../constants')
const { generateParamsSchema } = require('../../util/generate-params-schema')
const { hasParams } = require('../../util/match-params')
const { CUSTOM_HEADER } = require('../constants')

function prepareDefaultOptions (opts) {
  const swagger = opts.swagger
  const info = swagger.info || null
  const host = swagger.host || null
  const schemes = swagger.schemes || null
  const consumes = swagger.consumes || null
  const produces = swagger.produces || null
  const definitions = swagger.definitions || null
  const paths = swagger.paths || null
  const basePath = swagger.basePath || null
  const securityDefinitions = swagger.securityDefinitions || null
  const security = swagger.security || null
  const tags = swagger.tags || null
  const externalDocs = swagger.externalDocs || null
  const stripBasePath = opts.stripBasePath
  const transform = opts.transform
  const transformObject = opts.transformObject
  const hiddenTag = opts.hiddenTag
  const hideUntagged = opts.hideUntagged
  const extensions = []

  for (const [key, value] of Object.entries(opts.swagger)) {
    if (key.startsWith(CUSTOM_HEADER)) {
      extensions.push([key, value])
    }
  }

  return {
    info,
    host,
    schemes,
    consumes,
    produces,
    definitions,
    paths,
    basePath,
    securityDefinitions,
    security,
    tags,
    externalDocs,
    stripBasePath,
    transform,
    transformObject,
    hiddenTag,
    extensions,
    hideUntagged
  }
}

function prepareSwaggerObject (opts) {
  const pkg = readPackageJson()
  const swaggerObject = {
    swagger: '2.0',
    info: {
      version: pkg.version || '1.0.0',
      title: pkg.name || ''
    },
    definitions: {},
    paths: {}
  }

  if (opts.info) swaggerObject.info = opts.info
  if (opts.host) swaggerObject.host = opts.host
  if (opts.schemes) swaggerObject.schemes = opts.schemes
  if (opts.basePath) swaggerObject.basePath = opts.basePath
  if (opts.consumes) swaggerObject.consumes = opts.consumes
  if (opts.produces) swaggerObject.produces = opts.produces
  if (opts.definitions) swaggerObject.definitions = opts.definitions
  if (opts.paths) swaggerObject.paths = opts.paths
  if (opts.securityDefinitions) swaggerObject.securityDefinitions = opts.securityDefinitions
  if (opts.security) swaggerObject.security = opts.security
  if (opts.tags) swaggerObject.tags = opts.tags
  if (opts.externalDocs) swaggerObject.externalDocs = opts.externalDocs

  for (const [key, value] of opts.extensions) {
    // "x-" extension can not be typed
    swaggerObject[key] = value
  }

  return swaggerObject
}

function normalizeUrl (url, basePath, stripBasePath) {
  let path
  if (stripBasePath && url.startsWith(basePath)) {
    path = url.replace(basePath, '')
  } else {
    path = url
  }
  if (path[0] !== '/') {
    path = '/' + String(path)
  }
  return formatParamUrl(path)
}

// For supported keys read:
// https://swagger.io/docs/specification/2-0/describing-parameters/
function plainJsonObjectToSwagger2 (container, jsonSchema, externalSchemas, securityIgnores = []) {
  const obj = resolveLocalRef(jsonSchema, externalSchemas)
  let toSwaggerProp
  switch (container) {
    case 'header':
    case 'query':
      toSwaggerProp = function (propertyName, jsonSchemaElement) {
        // complex serialization is not supported by swagger
        if (jsonSchemaElement[xConsume]) {
          throw new Error('Complex serialization is not supported by Swagger. ' +
            'Remove "' + xConsume + '" for "' + propertyName + '" querystring/header schema or ' +
            'change specification to OpenAPI')
        }
        jsonSchemaElement.in = container
        jsonSchemaElement.name = propertyName
        return jsonSchemaElement
      }
      break
    case 'formData':
      toSwaggerProp = function (propertyName, jsonSchemaElement) {
        delete jsonSchemaElement.$id
        jsonSchemaElement.in = container
        jsonSchemaElement.name = propertyName

        // https://json-schema.org/understanding-json-schema/reference/non_json_data.html#contentencoding
        if (jsonSchemaElement.contentEncoding === 'binary') {
          delete jsonSchemaElement.contentEncoding // Must be removed
          jsonSchemaElement.type = 'file'
        }

        return jsonSchemaElement
      }
      break
    case 'path':
      toSwaggerProp = function (propertyName, jsonSchemaElement) {
        jsonSchemaElement.in = container
        jsonSchemaElement.name = propertyName
        jsonSchemaElement.required = true
        return jsonSchemaElement
      }
      break
  }

  return Object.keys(obj)
    .filter((propKey) => (!securityIgnores.includes(propKey)))
    .map((propKey) => {
      return toSwaggerProp(propKey, obj[propKey])
    })
}

/*
* Map  unsupported JSON schema definitions to Swagger definitions
*/
function replaceUnsupported (jsonSchema) {
  if (typeof jsonSchema === 'object' && jsonSchema !== null) {
    // Handle patternProperties, that is not part of OpenAPI definitions
    if (jsonSchema.patternProperties) {
      jsonSchema.additionalProperties = { type: 'string' }
      delete jsonSchema.patternProperties
    } else if (jsonSchema.const !== undefined) {
      // Handle const, that is not part of OpenAPI definitions
      jsonSchema.enum = [jsonSchema.const]
      delete jsonSchema.const
    }

    Object.keys(jsonSchema).forEach(function (key) {
      jsonSchema[key] = replaceUnsupported(jsonSchema[key])
    })
  }

  return jsonSchema
}

function isConsumesFormOnly (schema) {
  const consumes = schema.consumes
  return (
    consumes &&
      consumes.length === 1 &&
      (consumes[0] === 'application/x-www-form-urlencoded' ||
        consumes[0] === 'multipart/form-data')
  )
}

function resolveBodyParams (parameters, schema, ref) {
  const resolved = ref.resolve(schema)
  replaceUnsupported(resolved)

  parameters.push({
    name: 'body',
    in: 'body',
    description: resolved?.description,
    schema: resolved
  })
}

function resolveCommonParams (container, parameters, schema, ref, sharedSchemas, securityIgnores) {
  const resolved = ref.resolve(schema)
  const arr = plainJsonObjectToSwagger2(container, resolved, sharedSchemas, securityIgnores)
  arr.forEach(swaggerSchema => parameters.push(swaggerSchema))
}

function findReferenceDescription (rawSchema, ref) {
  const resolved = resolveSchemaReference(rawSchema, ref)
  return resolved?.description
}

// https://swagger.io/docs/specification/2-0/describing-responses/
function resolveResponse (fastifyResponseJson, ref) {
  // if the user does not provided an out schema
  if (!fastifyResponseJson) {
    return { 200: { description: 'Default Response' } }
  }

  const responsesContainer = {}

  const statusCodes = Object.keys(fastifyResponseJson)

  statusCodes.forEach(statusCode => {
    const rawJsonSchema = fastifyResponseJson[statusCode]
    const resolved = ref.resolve(rawJsonSchema)

    delete resolved.$schema

    // 2xx is not supported by swagger
    const deXXStatusCode = statusCode.toUpperCase().replace('XX', '00')
    // conflict when we have both 2xx and 200
    if (statusCode.toUpperCase().includes('XX') && statusCodes.includes(deXXStatusCode)) {
      return
    }

    // converts statusCode to upper case only when it is not "default"
    if (statusCode !== 'default') {
      statusCode = deXXStatusCode
    }

    const response = {
      description: rawJsonSchema[xResponseDescription] ||
        rawJsonSchema.description ||
        findReferenceDescription(rawJsonSchema, ref) ||
        'Default Response'
    }

    // add headers when there are any.
    if (rawJsonSchema.headers) {
      response.headers = rawJsonSchema.headers
      // remove invalid field
      delete resolved.headers
    }

    // add schema when type is not 'null'
    if (rawJsonSchema.type !== 'null') {
      const schema = { ...resolved }
      replaceUnsupported(schema)
      delete schema[xResponseDescription]
      response.schema = schema
    }

    responsesContainer[statusCode] = response
  })

  return responsesContainer
}

function prepareSwaggerMethod (schema, ref, swaggerObject, url) {
  const swaggerMethod = {}
  const parameters = []

  // Parse out the security prop keys to ignore
  const securityIgnores = [
    ...(swaggerObject?.security || []),
    ...(schema?.security || [])
  ]
    .reduce((acc, securitySchemeGroup) => {
      Object.keys(securitySchemeGroup).forEach((securitySchemeLabel) => {
        const { name, in: category } = swaggerObject.securityDefinitions[securitySchemeLabel]
        if (!acc[category]) {
          acc[category] = []
        }
        acc[category].push(name)
      })
      return acc
    }, {})

  // All the data the user can give us, is via the schema object
  if (schema) {
    if (schema.operationId) swaggerMethod.operationId = schema.operationId
    if (schema.summary) swaggerMethod.summary = schema.summary
    if (schema.description) swaggerMethod.description = schema.description
    if (schema.externalDocs) swaggerMethod.externalDocs = schema.externalDocs
    if (schema.tags) swaggerMethod.tags = schema.tags
    if (schema.produces) swaggerMethod.produces = schema.produces
    if (schema.consumes) swaggerMethod.consumes = schema.consumes
    if (schema.querystring) resolveCommonParams('query', parameters, schema.querystring, ref, swaggerObject.definitions, securityIgnores.query)
    if (schema.body) {
      const isConsumesAllFormOnly = isConsumesFormOnly(schema) || isConsumesFormOnly(swaggerObject)
      isConsumesAllFormOnly
        ? resolveCommonParams('formData', parameters, schema.body, ref, swaggerObject.definitions)
        : resolveBodyParams(parameters, schema.body, ref)
    }
    if (schema.params) resolveCommonParams('path', parameters, schema.params, ref, swaggerObject.definitions)
    if (schema.headers) resolveCommonParams('header', parameters, schema.headers, ref, swaggerObject.definitions, securityIgnores.header)
    if (parameters.length > 0) swaggerMethod.parameters = parameters
    if (schema.deprecated) swaggerMethod.deprecated = schema.deprecated
    if (schema.security) swaggerMethod.security = schema.security
    for (const key of Object.keys(schema)) {
      if (key.startsWith(CUSTOM_HEADER)) {
        swaggerMethod[key] = schema[key]
      }
    }
  }

  // If there is no schema or schema.params, we need to generate them
  if ((!schema || !schema.params) && hasParams(url)) {
    const schemaGenerated = generateParamsSchema(url)
    resolveCommonParams('path', parameters, schemaGenerated.params, ref, swaggerObject.definitions)
    swaggerMethod.parameters = parameters
  }

  swaggerMethod.responses = resolveResponse(schema ? schema.response : null, ref)

  return swaggerMethod
}

function prepareSwaggerDefinitions (definitions, ref) {
  return Object.entries(definitions)
    .reduce((res, [name, definition]) => {
      const _ = { ...definition }
      const resolved = ref.resolve(_, { externalSchemas: [definitions] })

      // Swagger doesn't accept $id on /definitions schemas.
      // The $ids are needed by Ref() to check the URI so we need
      // to remove them at the end of the process
      delete resolved.$id
      delete resolved.definitions

      res[name] = resolved
      return res
    }, {})
}

module.exports = {
  prepareDefaultOptions,
  prepareSwaggerObject,
  prepareSwaggerMethod,
  normalizeUrl,
  prepareSwaggerDefinitions
}
