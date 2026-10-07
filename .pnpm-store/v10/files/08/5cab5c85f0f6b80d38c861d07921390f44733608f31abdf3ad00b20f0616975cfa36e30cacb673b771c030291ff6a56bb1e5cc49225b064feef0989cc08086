'use strict'

const { readPackageJson } = require('../../util/read-package-json')
const { formatParamUrl } = require('../../util/format-param-url')
const { resolveLocalRef } = require('../../util/resolve-local-ref')
const { resolveSchemaReference } = require('../../util/resolve-schema-reference')
const { xResponseDescription, xConsume, xExamples } = require('../../constants')
const { rawRequired } = require('../../symbols')
const { generateParamsSchema } = require('../../util/generate-params-schema')
const { hasParams } = require('../../util/match-params')
const { CUSTOM_HEADER } = require('../constants')

function prepareDefaultOptions (opts) {
  const openapi = opts.openapi
  const info = openapi.info || null
  const servers = openapi.servers || null
  const components = openapi.components || null
  const security = openapi.security || null
  const tags = openapi.tags || null
  const externalDocs = openapi.externalDocs || null
  const stripBasePath = opts.stripBasePath
  const transform = opts.transform
  const transformObject = opts.transformObject
  const hiddenTag = opts.hiddenTag
  const hideUntagged = opts.hideUntagged
  const extensions = []
  const convertConstToEnum = opts.convertConstToEnum

  for (const [key, value] of Object.entries(opts.openapi)) {
    if (key.startsWith(CUSTOM_HEADER)) {
      extensions.push([key, value])
    }
  }

  return {
    ...openapi,
    info,
    servers,
    components,
    security,
    tags,
    externalDocs,
    stripBasePath,
    transform,
    transformObject,
    hiddenTag,
    extensions,
    hideUntagged,
    convertConstToEnum
  }
}

function prepareOpenapiObject (opts) {
  const pkg = readPackageJson()
  const openapiObject = {
    openapi: '3.0.3',
    info: {
      version: pkg.version || '1.0.0',
      title: pkg.name || ''
    },
    components: { schemas: {} },
    paths: {}
  }

  if (opts.openapi) openapiObject.openapi = opts.openapi
  if (opts.info) openapiObject.info = opts.info
  if (opts.servers) openapiObject.servers = opts.servers
  if (opts.components) openapiObject.components = Object.assign({}, opts.components, { schemas: Object.assign({}, opts.components.schemas) })
  if (opts.paths) openapiObject.paths = opts.paths
  if (opts.webhooks) openapiObject.webhooks = opts.webhooks
  if (opts.security) openapiObject.security = opts.security
  if (opts.tags) openapiObject.tags = opts.tags
  if (opts.externalDocs) openapiObject.externalDocs = opts.externalDocs

  for (const [key, value] of opts.extensions) {
    // "x-" extension can not be typed
    openapiObject[key] = value
  }

  return openapiObject
}

function normalizeUrl (url, serverUrls, stripBasePath) {
  if (!stripBasePath) return formatParamUrl(url)
  serverUrls.forEach(function (serverUrl) {
    const basePath = serverUrl[0] === '/' ? serverUrl : new URL(serverUrl).pathname
    if (url.startsWith(basePath) && basePath !== '/') {
      url = url.replace(basePath, '')
    }
  })
  return formatParamUrl(url)
}

function resolveServerUrls (servers) {
  const resolvedUrls = []
  const findVariablesRegex = /\{([^{}]+)\}/gu // As for OpenAPI v3 spec url variables are named in brackets, e.g. {foo}

  servers = Array.isArray(servers) ? servers : []
  for (const server of servers) {
    const originalUrl = server.url
    const variables = server.variables

    let url = originalUrl
    const matches = url.matchAll(findVariablesRegex)

    for (const [nameInBrackets, name] of matches) {
      const value = variables?.[name]?.default

      if (value === undefined) {
        throw new Error(`Server URL ${originalUrl} could not be resolved. Make sure to provide a default value for each URL variable.`)
      }

      url = url.replace(nameInBrackets, value)
    }

    resolvedUrls.push(url)
  }

  return resolvedUrls
}

function convertExamplesArrayToObject (examples) {
  return examples.reduce((examplesObject, example, index) => {
    if (typeof example === 'object') {
      examplesObject['example' + (index + 1)] = { value: example }
    } else {
      examplesObject[example] = { value: example }
    }

    return examplesObject
  }, {})
}

// For supported keys read:
// https://swagger.io/docs/specification/describing-parameters/
function plainJsonObjectToOpenapi3 (opts, container, jsonSchema, externalSchemas, securityIgnores = []) {
  const localJsonSchema = resolveLocalRef(jsonSchema, externalSchemas)
  const obj = convertJsonSchemaToOpenapi3(opts, localJsonSchema)
  let toOpenapiProp
  switch (container) {
    case 'cookie':
    case 'header':
    case 'query':
      toOpenapiProp = function (propertyName, jsonSchemaElement, required) {
        let result = {
          in: container,
          name: propertyName,
          required
        }

        const media = schemaToMedia(jsonSchemaElement)

        // complex serialization in query or cookie, eg. JSON
        // https://swagger.io/docs/specification/describing-parameters/#schema-vs-content
        if (jsonSchemaElement[xConsume]) {
          media.schema.required = jsonSchemaElement[rawRequired]

          result.content = {
            [jsonSchemaElement[xConsume]]: media
          }

          delete result.content[jsonSchemaElement[xConsume]].schema[xConsume]
        } else {
          result = { ...media, ...result }
        }
        // description should be optional
        if (jsonSchemaElement.description) result.description = jsonSchemaElement.description
        // optionally add serialization format style
        if (jsonSchema.style) result.style = jsonSchema.style
        if (jsonSchema.explode != null) result.explode = jsonSchema.explode
        if (jsonSchema.allowReserved === true && container === 'query') {
          result.allowReserved = jsonSchema.allowReserved
        }
        return result
      }
      break
    case 'path':
      toOpenapiProp = function (propertyName, jsonSchemaElement) {
        const media = schemaToMedia(jsonSchemaElement)

        const result = {
          ...media,
          in: container,
          name: propertyName,
          required: true
        }

        // description should be optional
        if (jsonSchemaElement.description) result.description = jsonSchemaElement.description
        return result
      }
      break
  }

  return Object.keys(obj)
    .filter((propKey) => (!securityIgnores.includes(propKey)))
    .map((propKey) => {
      const jsonSchema = toOpenapiProp(propKey, obj[propKey], localJsonSchema[propKey]?.required)
      if (jsonSchema.schema) {
        // it is needed as required in schema is invalid prop - delete only if needed
        if (jsonSchema.schema.required !== undefined) delete jsonSchema.schema.required
        // it is needed as description in schema is invalid prop - delete only if needed
        if (jsonSchema.schema.description !== undefined) delete jsonSchema.schema.description
      }
      return jsonSchema
    })
}

const schemaTypeToNestedSchemas = {
  object: (schema) => {
    return [
      ...Object.values(schema.properties || {}),
      ...Object.values(schema.patternProperties || {}),
      ...Object.values(schema.additionalProperties || {})
    ]
  },
  array: (schema) => {
    return [
      ...(schema.items ? [schema.items] : []),
      ...(schema.contains ? [schema.contains] : [])
    ]
  }
}

function resolveSchemaExamples (schema) {
  const example = schema[xExamples] ?? schema.examples?.[0]
  if (typeof example !== 'undefined') {
    schema.example = example
  }
  delete schema[xExamples]
  delete schema.examples
}

function resolveSchemaExamplesRecursive (schema) {
  resolveSchemaExamples(schema)
  const getNestedSchemas = schemaTypeToNestedSchemas[schema.type]
  const nestedSchemas = getNestedSchemas?.(schema) ?? []
  for (const nestedSchema of nestedSchemas) {
    resolveSchemaExamplesRecursive(nestedSchema)
  }
}

function schemaToMedia (schema) {
  const media = { schema }

  if (schema.examples?.length === 1) {
    media.example = schema.examples[0]
    delete schema.examples
  } else if (schema.examples?.length > 1) {
    media.examples = convertExamplesArrayToObject(schema.examples)
    // examples is invalid property of media object schema
    delete schema.examples
  }

  if (schema[xExamples]) {
    media.examples = schema[xExamples]
    delete schema[xExamples]
  }

  return media
}

function schemaToMediaRecursive (schema) {
  const media = schemaToMedia(schema)
  resolveSchemaExamplesRecursive(schema)
  return media
}

function resolveBodyParams (opts, body, schema, consumes, ref) {
  const resolved = convertJsonSchemaToOpenapi3(opts, ref.resolve(schema))

  if (resolved.content?.[Object.keys(resolved.content)[0]].schema) {
    for (const contentType in schema.content) {
      body.content[contentType] = schemaToMediaRecursive(resolved.content[contentType].schema)
    }
  } else {
    if ((Array.isArray(consumes) && consumes.length === 0) || consumes === undefined) {
      consumes = ['application/json']
    }

    const media = schemaToMediaRecursive(resolved)
    consumes.forEach((consume) => {
      body.content[consume] = media
    })

    if (resolved?.description) {
      body.description = resolved.description
    }
  }
}

function resolveCommonParams (opts, container, parameters, schema, ref, sharedSchemas, securityIgnores) {
  const schemasPath = '#/components/schemas/'
  let resolved = convertJsonSchemaToOpenapi3(opts, ref.resolve(schema))

  // if the resolved definition is in global schema
  if (resolved.$ref?.startsWith(schemasPath)) {
    const parts = resolved.$ref.split(schemasPath)
    const pathParts = parts[1].split('/')
    resolved = pathParts.reduce((resolved, pathPart) => resolved[pathPart], ref.definitions().definitions)
  }

  const arr = plainJsonObjectToOpenapi3(opts, container, resolved, { ...sharedSchemas, ...ref.definitions().definitions }, securityIgnores)
  arr.forEach(swaggerSchema => parameters.push(swaggerSchema))
}

function findReferenceDescription (rawSchema, ref) {
  const resolved = resolveSchemaReference(rawSchema, ref)
  return resolved?.description
}

// https://swagger.io/docs/specification/describing-responses/
function resolveResponse (opts, fastifyResponseJson, produces, ref) {
  // if the user does not provided an out schema
  if (!fastifyResponseJson) {
    return { 200: { description: 'Default Response' } }
  }

  const responsesContainer = {}

  const statusCodes = Object.keys(fastifyResponseJson)

  statusCodes.forEach(statusCode => {
    const rawJsonSchema = fastifyResponseJson[statusCode]
    const resolved = convertJsonSchemaToOpenapi3(opts, ref.resolve(rawJsonSchema))

    /**
     * 2xx require to be all upper-case
     * converts statusCode to upper case only when it is not "default"
     */
    if (statusCode !== 'default') {
      statusCode = statusCode.toUpperCase()
    }

    const response = {
      description: resolved[xResponseDescription] ||
        rawJsonSchema.description ||
        findReferenceDescription(rawJsonSchema, ref) ||
        'Default Response'
    }

    // add headers when there are any.
    if (rawJsonSchema.headers) {
      response.headers = {}
      Object.keys(rawJsonSchema.headers).forEach(function (key) {
        const header = {
          schema: { ...rawJsonSchema.headers[key] }
        }

        if (rawJsonSchema.headers[key].description) {
          header.description = rawJsonSchema.headers[key].description
          // remove invalid field
          delete header.schema.description
        }

        response.headers[key] = header
      })
      // remove invalid field
      delete resolved.headers
    }

    // add schema when type is not 'null'
    if (rawJsonSchema.type !== 'null') {
      if (resolved.content?.[Object.keys(resolved.content)[0]].schema) {
        response.content = resolved.content
      } else {
        const content = {}

        if ((Array.isArray(produces) && produces.length === 0) || produces === undefined) {
          produces = ['application/json']
        }

        delete resolved[xResponseDescription]

        const media = schemaToMediaRecursive(resolved)

        for (const produce of produces) {
          content[produce] = media
        }

        response.content = content
      }
    }

    responsesContainer[statusCode] = response
  })

  return responsesContainer
}

function resolveCallbacks (opts, schema, ref) {
  const callbacksContainer = {}

  // Iterate over each callback event
  for (const eventName in schema) {
    if (!schema[eventName]) {
      continue
    }

    // Create an empty object to house the future iterations
    callbacksContainer[eventName] = {}
    const eventSchema = schema[eventName]

    // Iterate over each callbackUrl for the event
    for (const callbackUrl in eventSchema) {
      if (!callbackUrl || !eventSchema[callbackUrl]) {
        continue
      }

      // Create an empty object to house the future iterations
      callbacksContainer[eventName][callbackUrl] = {}
      const callbackSchema = eventSchema[callbackUrl]

      // Iterate over each httpMethod for the callbackUrl
      for (const httpMethodName in callbackSchema) {
        if (!httpMethodName || !callbackSchema[httpMethodName]) {
          continue
        }

        const httpMethodSchema = callbackSchema[httpMethodName]
        const httpMethodContainer = {}

        if (httpMethodSchema.requestBody) {
          httpMethodContainer.requestBody = convertJsonSchemaToOpenapi3(
            opts,
            ref.resolve(httpMethodSchema.requestBody)
          )
        }

        // If a response is not provided, set a 2XX default response
        httpMethodContainer.responses = httpMethodSchema.responses
          ? convertJsonSchemaToOpenapi3(opts, ref.resolve(httpMethodSchema.responses))
          : { '2XX': { description: 'Default Response' } }

        // Set the schema at the appropriate location in the response object
        callbacksContainer[eventName][callbackUrl][httpMethodName] = httpMethodContainer
      }
    }
  }

  return callbacksContainer
}

function prepareOpenapiMethod (opts, schema, ref, openapiObject, url) {
  const openapiMethod = {}
  const parameters = []

  // Parse out the security prop keys to ignore
  const securityIgnores = [
    ...(openapiObject?.security || []),
    ...(schema?.security || [])
  ]
    .reduce((acc, securitySchemeGroup) => {
      Object.keys(securitySchemeGroup).forEach((securitySchemeLabel) => {
        const scheme = openapiObject.components.securitySchemes[securitySchemeLabel]
        const isBearer = scheme.type === 'http' && scheme.scheme === 'bearer'
        const category = isBearer ? 'header' : scheme.in
        const name = isBearer ? 'authorization' : scheme.name
        if (!acc[category]) {
          acc[category] = []
        }
        acc[category].push(name)
      })
      return acc
    }, {})

  // All the data the user can give us, is via the schema object
  if (schema) {
    if (schema.operationId) openapiMethod.operationId = schema.operationId
    if (schema.summary) openapiMethod.summary = schema.summary
    if (schema.tags) openapiMethod.tags = schema.tags
    if (schema.description) openapiMethod.description = schema.description
    if (schema.externalDocs) openapiMethod.externalDocs = schema.externalDocs
    if (schema.querystring) resolveCommonParams(opts, 'query', parameters, schema.querystring, ref, openapiObject.definitions, securityIgnores.query)
    if (schema.body) {
      // Fastify requires a body (at least {}) when schema.body is defined,
      // so requestBody.required should always be true
      openapiMethod.requestBody = { required: true, content: {} }
      resolveBodyParams(opts, openapiMethod.requestBody, schema.body, schema.consumes, ref)
    }
    if (schema.params) resolveCommonParams(opts, 'path', parameters, schema.params, ref, openapiObject.definitions)
    if (schema.headers) resolveCommonParams(opts, 'header', parameters, schema.headers, ref, openapiObject.definitions, securityIgnores.header)
    // TODO: need to documentation, we treat it same as the querystring
    // fastify do not support cookies schema in first place
    if (schema.cookies) resolveCommonParams(opts, 'cookie', parameters, schema.cookies, ref, openapiObject.definitions, securityIgnores.cookie)
    if (parameters.length > 0) openapiMethod.parameters = parameters
    if (schema.deprecated) openapiMethod.deprecated = schema.deprecated
    if (schema.security) openapiMethod.security = schema.security
    if (schema.servers) openapiMethod.servers = schema.servers
    if (schema.callbacks) openapiMethod.callbacks = resolveCallbacks(opts, schema.callbacks, ref)
    for (const key of Object.keys(schema)) {
      if (key.startsWith(CUSTOM_HEADER)) {
        openapiMethod[key] = schema[key]
      }
    }
  }

  // If there is no schema or schema.params, we need to generate them
  if ((!schema || !schema.params) && hasParams(url)) {
    const schemaGenerated = generateParamsSchema(url)
    resolveCommonParams(opts, 'path', parameters, schemaGenerated.params, ref, openapiObject.definitions)
    openapiMethod.parameters = parameters
  }

  openapiMethod.responses = resolveResponse(opts, schema ? schema.response : null, schema ? schema.produces : null, ref)

  return openapiMethod
}

function convertJsonSchemaToOpenapi3 (opts, jsonSchema) {
  if (typeof jsonSchema !== 'object' || jsonSchema === null) {
    return jsonSchema
  }

  if (Array.isArray(jsonSchema)) {
    return jsonSchema.map((s) => convertJsonSchemaToOpenapi3(opts, s))
  }

  const openapiSchema = { ...jsonSchema }

  if (Object.hasOwn(openapiSchema, '$ref') && Object.keys(openapiSchema).length !== 1) {
    for (const key of Object.keys(openapiSchema).filter(k => k !== '$ref')) {
      delete openapiSchema[key]
      continue
    }
  }

  for (const key of Object.keys(openapiSchema)) {
    const value = openapiSchema[key]

    if (key === '$id' || key === '$schema' || key === 'definitions') {
      // TODO: this breaks references to the definition properties
      delete openapiSchema[key]
      continue
    }

    if (key === '$ref') {
      openapiSchema.$ref = value.replace('definitions', 'components/schemas')
      continue
    }

    if (opts.convertConstToEnum && key === 'const') {
      // OAS 3.1 supports `const` but it is not supported by `swagger-ui`
      // https://swagger.io/docs/specification/data-models/keywords/
      // TODO: check if enum property already exists
      // TODO: this breaks references to the const property
      openapiSchema.enum = [openapiSchema.const]
      delete openapiSchema.const
      continue
    }

    if (key === 'patternProperties') {
      // TODO: check if additionalProperties property already exists
      // TODO: this breaks references to the additionalProperties properties
      // TODO: patternProperties actually allowed in the openapi schema, but should
      // always start with "x-" prefix
      const propertyJsonSchema = Object.values(openapiSchema.patternProperties)[0]
      const propertyOpenapiSchema = convertJsonSchemaToOpenapi3(opts, propertyJsonSchema)
      openapiSchema.additionalProperties = propertyOpenapiSchema
      delete openapiSchema.patternProperties
      continue
    }

    if (key === 'properties') {
      openapiSchema[key] = {}
      for (const propertyName of Object.keys(value)) {
        const propertyJsonSchema = value[propertyName]
        const propertyOpenapiSchema = convertJsonSchemaToOpenapi3(opts, propertyJsonSchema)
        openapiSchema[key][propertyName] = propertyOpenapiSchema
      }
      continue
    }

    openapiSchema[key] = convertJsonSchemaToOpenapi3(opts, value)
  }

  return openapiSchema
}

function prepareOpenapiSchemas (opts, jsonSchemas, ref) {
  const openapiSchemas = {}

  for (const schemaName of Object.keys(jsonSchemas)) {
    const jsonSchema = { ...jsonSchemas[schemaName] }

    const resolvedJsonSchema = ref.resolve(jsonSchema, { externalSchemas: [jsonSchemas] })
    const openapiSchema = convertJsonSchemaToOpenapi3(opts, resolvedJsonSchema)
    resolveSchemaExamplesRecursive(openapiSchema)

    openapiSchemas[schemaName] = openapiSchema
  }
  return openapiSchemas
}

module.exports = {
  prepareDefaultOptions,
  prepareOpenapiObject,
  prepareOpenapiMethod,
  prepareOpenapiSchemas,
  resolveServerUrls,
  normalizeUrl
}
