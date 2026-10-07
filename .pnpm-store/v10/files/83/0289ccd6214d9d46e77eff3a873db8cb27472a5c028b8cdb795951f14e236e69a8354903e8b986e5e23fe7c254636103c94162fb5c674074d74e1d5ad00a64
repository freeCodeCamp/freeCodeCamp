'use strict'

const {
  kSchemaHeaders: headersSchema,
  kSchemaParams: paramsSchema,
  kSchemaQuerystring: querystringSchema,
  kSchemaBody: bodySchema,
  kSchemaResponse: responseSchema
} = require('./symbols')
const scChecker = /^[1-5](?:\d{2}|xx)$|^default$/

const {
  FST_ERR_SCH_RESPONSE_SCHEMA_NOT_NESTED_2XX
} = require('./errors')

const { FSTWRN001 } = require('./warnings')

function compileSchemasForSerialization (context, compile) {
  if (!context.schema || !context.schema.response) {
    return
  }
  const { method, url } = context.config || {}
  context[responseSchema] = Object.keys(context.schema.response)
    .reduce(function (acc, statusCode) {
      const schema = context.schema.response[statusCode]
      statusCode = statusCode.toLowerCase()
      if (!scChecker.test(statusCode)) {
        throw new FST_ERR_SCH_RESPONSE_SCHEMA_NOT_NESTED_2XX()
      }

      if (schema.content) {
        const contentTypesSchemas = {}
        for (const mediaName of Object.keys(schema.content)) {
          const contentSchema = schema.content[mediaName].schema
          contentTypesSchemas[mediaName] = compile({
            schema: contentSchema,
            url,
            method,
            httpStatus: statusCode,
            contentType: mediaName
          })
        }
        acc[statusCode] = contentTypesSchemas
      } else {
        acc[statusCode] = compile({
          schema,
          url,
          method,
          httpStatus: statusCode
        })
      }

      return acc
    }, {})
}

function compileSchemasForValidation (context, compile, isCustom) {
  const { schema } = context
  if (!schema) {
    return
  }

  const { method, url } = context.config || {}

  const headers = schema.headers
  // the or part is used for backward compatibility
  if (headers && (isCustom || Object.getPrototypeOf(headers) !== Object.prototype)) {
    // do not mess with schema when custom validator applied, e.g. Joi, Typebox
    context[headersSchema] = compile({ schema: headers, method, url, httpPart: 'headers' })
  } else if (headers) {
    // The header keys are case insensitive
    //  https://datatracker.ietf.org/doc/html/rfc2616#section-4.2
    const headersSchemaLowerCase = {}
    Object.keys(headers).forEach(k => { headersSchemaLowerCase[k] = headers[k] })
    if (headersSchemaLowerCase.required instanceof Array) {
      headersSchemaLowerCase.required = headersSchemaLowerCase.required.map(h => h.toLowerCase())
    }
    if (headers.properties) {
      headersSchemaLowerCase.properties = {}
      Object.keys(headers.properties).forEach(k => {
        headersSchemaLowerCase.properties[k.toLowerCase()] = headers.properties[k]
      })
    }
    context[headersSchema] = compile({ schema: headersSchemaLowerCase, method, url, httpPart: 'headers' })
  } else if (Object.hasOwn(schema, 'headers')) {
    FSTWRN001('headers', method, url)
  }

  if (schema.body) {
    const contentProperty = schema.body.content
    if (contentProperty) {
      const contentTypeSchemas = {}
      for (const contentType of Object.keys(contentProperty)) {
        const contentSchema = contentProperty[contentType].schema
        contentTypeSchemas[contentType] = compile({ schema: contentSchema, method, url, httpPart: 'body', contentType })
      }
      context[bodySchema] = contentTypeSchemas
    } else {
      context[bodySchema] = compile({ schema: schema.body, method, url, httpPart: 'body' })
    }
  } else if (Object.hasOwn(schema, 'body')) {
    FSTWRN001('body', method, url)
  }

  if (schema.querystring) {
    context[querystringSchema] = compile({ schema: schema.querystring, method, url, httpPart: 'querystring' })
  } else if (Object.hasOwn(schema, 'querystring')) {
    FSTWRN001('querystring', method, url)
  }

  if (schema.params) {
    context[paramsSchema] = compile({ schema: schema.params, method, url, httpPart: 'params' })
  } else if (Object.hasOwn(schema, 'params')) {
    FSTWRN001('params', method, url)
  }
}

function validateParam (validatorFunction, request, paramName) {
  const isUndefined = request[paramName] === undefined
  let ret

  try {
    ret = validatorFunction?.(isUndefined ? null : request[paramName])
  } catch (err) {
    // If validator throws synchronously, ensure it propagates as an internal error
    err.statusCode = 500
    return err
  }

  if (ret && typeof ret.then === 'function') {
    return ret
      .then((res) => { return answer(res) })
      .catch(err => { return err }) // return as simple error (not throw)
  }

  return answer(ret)

  function answer (ret) {
    if (ret === false) return validatorFunction.errors
    if (ret && ret.error) return ret.error
    if (ret && ret.value) request[paramName] = ret.value
    return false
  }
}

function validate (context, request, execution) {
  const runExecution = execution === undefined

  if (runExecution || !execution.skipParams) {
    const params = validateParam(context[paramsSchema], request, 'params')
    if (params) {
      if (typeof params.then !== 'function') {
        return wrapValidationError(params, 'params', context.schemaErrorFormatter)
      } else {
        return validateAsyncParams(params, context, request)
      }
    }
  }

  if (runExecution || !execution.skipBody) {
    let validatorFunction = null
    if (typeof context[bodySchema] === 'function') {
      validatorFunction = context[bodySchema]
    } else if (context[bodySchema]) {
      // TODO: add request.contentType and reuse it here
      const contentType = getEssenceMediaType(request.headers['content-type'])
      const contentSchema = context[bodySchema][contentType]
      if (contentSchema) {
        validatorFunction = contentSchema
      }
    }
    const body = validateParam(validatorFunction, request, 'body')
    if (body) {
      if (typeof body.then !== 'function') {
        return wrapValidationError(body, 'body', context.schemaErrorFormatter)
      } else {
        return validateAsyncBody(body, context, request)
      }
    }
  }

  if (runExecution || !execution.skipQuery) {
    const query = validateParam(context[querystringSchema], request, 'query')
    if (query) {
      if (typeof query.then !== 'function') {
        return wrapValidationError(query, 'querystring', context.schemaErrorFormatter)
      } else {
        return validateAsyncQuery(query, context, request)
      }
    }
  }

  const headers = validateParam(context[headersSchema], request, 'headers')
  if (headers) {
    if (typeof headers.then !== 'function') {
      return wrapValidationError(headers, 'headers', context.schemaErrorFormatter)
    } else {
      return validateAsyncHeaders(headers, context, request)
    }
  }

  return false
}

function validateAsyncParams (validatePromise, context, request) {
  return validatePromise
    .then((paramsResult) => {
      if (paramsResult) {
        return wrapValidationError(paramsResult, 'params', context.schemaErrorFormatter)
      }

      return validate(context, request, { skipParams: true })
    })
}

function validateAsyncBody (validatePromise, context, request) {
  return validatePromise
    .then((bodyResult) => {
      if (bodyResult) {
        return wrapValidationError(bodyResult, 'body', context.schemaErrorFormatter)
      }

      return validate(context, request, { skipParams: true, skipBody: true })
    })
}

function validateAsyncQuery (validatePromise, context, request) {
  return validatePromise
    .then((queryResult) => {
      if (queryResult) {
        return wrapValidationError(queryResult, 'querystring', context.schemaErrorFormatter)
      }

      return validate(context, request, { skipParams: true, skipBody: true, skipQuery: true })
    })
}

function validateAsyncHeaders (validatePromise, context, request) {
  return validatePromise
    .then((headersResult) => {
      if (headersResult) {
        return wrapValidationError(headersResult, 'headers', context.schemaErrorFormatter)
      }

      return false
    })
}

function wrapValidationError (result, dataVar, schemaErrorFormatter) {
  if (result instanceof Error) {
    result.statusCode = result.statusCode || 400
    result.code = result.code || 'FST_ERR_VALIDATION'
    result.validationContext = result.validationContext || dataVar
    return result
  }

  const error = schemaErrorFormatter(result, dataVar)
  error.statusCode = error.statusCode || 400
  error.code = error.code || 'FST_ERR_VALIDATION'
  error.validation = result
  error.validationContext = dataVar
  return error
}

/**
 * simple function to retrieve the essence media type
 * @param {string} header
 * @returns {string} Mimetype string.
 */
function getEssenceMediaType (header) {
  if (!header) return ''
  return header.trimStart().split(/[ ;]/, 1)[0].trim().toLowerCase()
}

module.exports = {
  symbols: { bodySchema, querystringSchema, responseSchema, paramsSchema, headersSchema },
  compileSchemasForValidation,
  compileSchemasForSerialization,
  validate
}
