'use strict'

const { test } = require('node:test')
const errors = require('../../lib/errors')
const { readFileSync } = require('node:fs')
const { resolve } = require('node:path')

const expectedErrors = 88

test(`should expose ${expectedErrors} errors`, t => {
  t.plan(1)
  const exportedKeys = Object.keys(errors)
  let counter = 0
  for (const key of exportedKeys) {
    if (errors[key].name === 'FastifyError') {
      counter++
    }
  }
  t.assert.strictEqual(counter, expectedErrors)
})

test('ensure name and codes of Errors are identical', t => {
  t.plan(expectedErrors)

  const exportedKeys = Object.keys(errors)
  for (const key of exportedKeys) {
    if (errors[key].name === 'FastifyError') {
      t.assert.strictEqual(key, new errors[key]().code, key)
    }
  }
})

test('FST_ERR_NOT_FOUND', t => {
  t.plan(5)
  const error = new errors.FST_ERR_NOT_FOUND()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_NOT_FOUND')
  t.assert.strictEqual(error.message, 'Not Found')
  t.assert.strictEqual(error.statusCode, 404)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_OPTIONS_NOT_OBJ', t => {
  t.plan(5)
  const error = new errors.FST_ERR_OPTIONS_NOT_OBJ()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_OPTIONS_NOT_OBJ')
  t.assert.strictEqual(error.message, 'Options must be an object')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_QSP_NOT_FN', t => {
  t.plan(5)
  const error = new errors.FST_ERR_QSP_NOT_FN()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_QSP_NOT_FN')
  t.assert.strictEqual(error.message, "querystringParser option should be a function, instead got '%s'")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_SCHEMA_CONTROLLER_BUCKET_OPT_NOT_FN', t => {
  t.plan(5)
  const error = new errors.FST_ERR_SCHEMA_CONTROLLER_BUCKET_OPT_NOT_FN()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_SCHEMA_CONTROLLER_BUCKET_OPT_NOT_FN')
  t.assert.strictEqual(error.message, "schemaController.bucket option should be a function, instead got '%s'")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_SCHEMA_ERROR_FORMATTER_NOT_FN', t => {
  t.plan(5)
  const error = new errors.FST_ERR_SCHEMA_ERROR_FORMATTER_NOT_FN()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_SCHEMA_ERROR_FORMATTER_NOT_FN')
  t.assert.strictEqual(error.message, "schemaErrorFormatter option should be a non async function. Instead got '%s'.")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_AJV_CUSTOM_OPTIONS_OPT_NOT_OBJ', t => {
  t.plan(5)
  const error = new errors.FST_ERR_AJV_CUSTOM_OPTIONS_OPT_NOT_OBJ()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_AJV_CUSTOM_OPTIONS_OPT_NOT_OBJ')
  t.assert.strictEqual(error.message, "ajv.customOptions option should be an object, instead got '%s'")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_AJV_CUSTOM_OPTIONS_OPT_NOT_ARR', t => {
  t.plan(5)
  const error = new errors.FST_ERR_AJV_CUSTOM_OPTIONS_OPT_NOT_ARR()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_AJV_CUSTOM_OPTIONS_OPT_NOT_ARR')
  t.assert.strictEqual(error.message, "ajv.plugins option should be an array, instead got '%s'")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_CTP_ALREADY_PRESENT', t => {
  t.plan(5)
  const error = new errors.FST_ERR_CTP_ALREADY_PRESENT()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_CTP_ALREADY_PRESENT')
  t.assert.strictEqual(error.message, "Content type parser '%s' already present.")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_CTP_INVALID_TYPE', t => {
  t.plan(5)
  const error = new errors.FST_ERR_CTP_INVALID_TYPE()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_CTP_INVALID_TYPE')
  t.assert.strictEqual(error.message, 'The content type should be a string or a RegExp')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_CTP_EMPTY_TYPE', t => {
  t.plan(5)
  const error = new errors.FST_ERR_CTP_EMPTY_TYPE()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_CTP_EMPTY_TYPE')
  t.assert.strictEqual(error.message, 'The content type cannot be an empty string')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_CTP_INVALID_HANDLER', t => {
  t.plan(5)
  const error = new errors.FST_ERR_CTP_INVALID_HANDLER()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_CTP_INVALID_HANDLER')
  t.assert.strictEqual(error.message, 'The content type handler should be a function')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_CTP_INVALID_PARSE_TYPE', t => {
  t.plan(5)
  const error = new errors.FST_ERR_CTP_INVALID_PARSE_TYPE()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_CTP_INVALID_PARSE_TYPE')
  t.assert.strictEqual(error.message, "The body parser can only parse your data as 'string' or 'buffer', you asked '%s' which is not supported.")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_CTP_BODY_TOO_LARGE', t => {
  t.plan(5)
  const error = new errors.FST_ERR_CTP_BODY_TOO_LARGE()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_CTP_BODY_TOO_LARGE')
  t.assert.strictEqual(error.message, 'Request body is too large')
  t.assert.strictEqual(error.statusCode, 413)
  t.assert.ok(error instanceof RangeError)
})

test('FST_ERR_CTP_INVALID_MEDIA_TYPE', t => {
  t.plan(5)
  const error = new errors.FST_ERR_CTP_INVALID_MEDIA_TYPE()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_CTP_INVALID_MEDIA_TYPE')
  t.assert.strictEqual(error.message, 'Unsupported Media Type')
  t.assert.strictEqual(error.statusCode, 415)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_CTP_INVALID_CONTENT_LENGTH', t => {
  t.plan(5)
  const error = new errors.FST_ERR_CTP_INVALID_CONTENT_LENGTH()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_CTP_INVALID_CONTENT_LENGTH')
  t.assert.strictEqual(error.message, 'Request body size did not match Content-Length')
  t.assert.strictEqual(error.statusCode, 400)
  t.assert.ok(error instanceof RangeError)
})

test('FST_ERR_CTP_EMPTY_JSON_BODY', t => {
  t.plan(5)
  const error = new errors.FST_ERR_CTP_EMPTY_JSON_BODY()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_CTP_EMPTY_JSON_BODY')
  t.assert.strictEqual(error.message, "Body cannot be empty when content-type is set to 'application/json'")
  t.assert.strictEqual(error.statusCode, 400)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_CTP_INVALID_JSON_BODY', t => {
  t.plan(5)
  const error = new errors.FST_ERR_CTP_INVALID_JSON_BODY()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_CTP_INVALID_JSON_BODY')
  t.assert.strictEqual(error.message, "Body is not valid JSON but content-type is set to 'application/json'")
  t.assert.strictEqual(error.statusCode, 400)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_CTP_INSTANCE_ALREADY_STARTED', t => {
  t.plan(5)
  const error = new errors.FST_ERR_CTP_INSTANCE_ALREADY_STARTED()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_CTP_INSTANCE_ALREADY_STARTED')
  t.assert.strictEqual(error.message, 'Cannot call "%s" when fastify instance is already started!')
  t.assert.strictEqual(error.statusCode, 400)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_DEC_ALREADY_PRESENT', t => {
  t.plan(5)
  const error = new errors.FST_ERR_DEC_ALREADY_PRESENT()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_DEC_ALREADY_PRESENT')
  t.assert.strictEqual(error.message, "The decorator '%s' has already been added!")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_DEC_DEPENDENCY_INVALID_TYPE', t => {
  t.plan(5)
  const error = new errors.FST_ERR_DEC_DEPENDENCY_INVALID_TYPE()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_DEC_DEPENDENCY_INVALID_TYPE')
  t.assert.strictEqual(error.message, "The dependencies of decorator '%s' must be of type Array.")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_DEC_MISSING_DEPENDENCY', t => {
  t.plan(5)
  const error = new errors.FST_ERR_DEC_MISSING_DEPENDENCY()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_DEC_MISSING_DEPENDENCY')
  t.assert.strictEqual(error.message, "The decorator is missing dependency '%s'.")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_DEC_AFTER_START', t => {
  t.plan(5)
  const error = new errors.FST_ERR_DEC_AFTER_START()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_DEC_AFTER_START')
  t.assert.strictEqual(error.message, "The decorator '%s' has been added after start!")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_DEC_REFERENCE_TYPE', t => {
  t.plan(5)
  const error = new errors.FST_ERR_DEC_REFERENCE_TYPE()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_DEC_REFERENCE_TYPE')
  t.assert.strictEqual(error.message, "The decorator '%s' of type '%s' is a reference type. Use the { getter, setter } interface instead.")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_DEC_UNDECLARED', t => {
  t.plan(5)
  const error = new errors.FST_ERR_DEC_UNDECLARED('myDecorator', 'request')
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_DEC_UNDECLARED')
  t.assert.strictEqual(error.message, "No decorator 'myDecorator' has been declared on request.")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_HOOK_INVALID_TYPE', t => {
  t.plan(5)
  const error = new errors.FST_ERR_HOOK_INVALID_TYPE()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_HOOK_INVALID_TYPE')
  t.assert.strictEqual(error.message, 'The hook name must be a string')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_HOOK_INVALID_HANDLER', t => {
  t.plan(5)
  const error = new errors.FST_ERR_HOOK_INVALID_HANDLER()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_HOOK_INVALID_HANDLER')
  t.assert.strictEqual(error.message, '%s hook should be a function, instead got %s')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_HOOK_INVALID_ASYNC_HANDLER', t => {
  t.plan(5)
  const error = new errors.FST_ERR_HOOK_INVALID_ASYNC_HANDLER()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_HOOK_INVALID_ASYNC_HANDLER')
  t.assert.strictEqual(error.message, "Async function has too many arguments. Async hooks should not use the 'done' argument.")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_HOOK_NOT_SUPPORTED', t => {
  t.plan(5)
  const error = new errors.FST_ERR_HOOK_NOT_SUPPORTED()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_HOOK_NOT_SUPPORTED')
  t.assert.strictEqual(error.message, '%s hook not supported!')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_MISSING_MIDDLEWARE', t => {
  t.plan(5)
  const error = new errors.FST_ERR_MISSING_MIDDLEWARE()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_MISSING_MIDDLEWARE')
  t.assert.strictEqual(error.message, 'You must register a plugin for handling middlewares, visit fastify.dev/docs/latest/Reference/Middleware/ for more info.')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_HOOK_TIMEOUT', t => {
  t.plan(5)
  const error = new errors.FST_ERR_HOOK_TIMEOUT()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_HOOK_TIMEOUT')
  t.assert.strictEqual(error.message, "A callback for '%s' hook%s timed out. You may have forgotten to call 'done' function or to resolve a Promise")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_LOG_INVALID_DESTINATION', t => {
  t.plan(5)
  const error = new errors.FST_ERR_LOG_INVALID_DESTINATION()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_LOG_INVALID_DESTINATION')
  t.assert.strictEqual(error.message, 'Cannot specify both logger.stream and logger.file options')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_LOG_INVALID_LOGGER', t => {
  t.plan(5)
  const error = new errors.FST_ERR_LOG_INVALID_LOGGER()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_LOG_INVALID_LOGGER')
  t.assert.strictEqual(error.message, "Invalid logger object provided. The logger instance should have these functions(s): '%s'.")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_LOG_INVALID_LOGGER_INSTANCE', t => {
  t.plan(5)
  const error = new errors.FST_ERR_LOG_INVALID_LOGGER_INSTANCE()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_LOG_INVALID_LOGGER_INSTANCE')
  t.assert.strictEqual(error.message, 'loggerInstance only accepts a logger instance.')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_LOG_INVALID_LOGGER_CONFIG', t => {
  t.plan(5)
  const error = new errors.FST_ERR_LOG_INVALID_LOGGER_CONFIG()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_LOG_INVALID_LOGGER_CONFIG')
  t.assert.strictEqual(error.message, 'logger options only accepts a configuration object.')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_LOG_LOGGER_AND_LOGGER_INSTANCE_PROVIDED', t => {
  t.plan(5)
  const error = new errors.FST_ERR_LOG_LOGGER_AND_LOGGER_INSTANCE_PROVIDED()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_LOG_LOGGER_AND_LOGGER_INSTANCE_PROVIDED')
  t.assert.strictEqual(error.message, 'You cannot provide both logger and loggerInstance. Please provide only one.')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_REP_INVALID_PAYLOAD_TYPE', t => {
  t.plan(5)
  const error = new errors.FST_ERR_REP_INVALID_PAYLOAD_TYPE()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_REP_INVALID_PAYLOAD_TYPE')
  t.assert.strictEqual(error.message, "Attempted to send payload of invalid type '%s'. Expected a string or Buffer.")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_REP_RESPONSE_BODY_CONSUMED', t => {
  t.plan(5)
  const error = new errors.FST_ERR_REP_RESPONSE_BODY_CONSUMED()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_REP_RESPONSE_BODY_CONSUMED')
  t.assert.strictEqual(error.message, 'Response.body is already consumed.')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_REP_READABLE_STREAM_LOCKED', t => {
  t.plan(5)
  const error = new errors.FST_ERR_REP_READABLE_STREAM_LOCKED()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_REP_READABLE_STREAM_LOCKED')
  t.assert.strictEqual(error.message, 'ReadableStream was locked. You should call releaseLock() method on reader before sending.')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_REP_ALREADY_SENT', t => {
  t.plan(5)
  const error = new errors.FST_ERR_REP_ALREADY_SENT('/hello', 'GET')
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_REP_ALREADY_SENT')
  t.assert.strictEqual(error.message, 'Reply was already sent, did you forget to "return reply" in "/hello" (GET)?')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_REP_SENT_VALUE', t => {
  t.plan(5)
  const error = new errors.FST_ERR_REP_SENT_VALUE()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_REP_SENT_VALUE')
  t.assert.strictEqual(error.message, 'The only possible value for reply.sent is true.')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_SEND_INSIDE_ONERR', t => {
  t.plan(5)
  const error = new errors.FST_ERR_SEND_INSIDE_ONERR()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_SEND_INSIDE_ONERR')
  t.assert.strictEqual(error.message, 'You cannot use `send` inside the `onError` hook')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_SEND_UNDEFINED_ERR', t => {
  t.plan(5)
  const error = new errors.FST_ERR_SEND_UNDEFINED_ERR()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_SEND_UNDEFINED_ERR')
  t.assert.strictEqual(error.message, 'Undefined error has occurred')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_BAD_STATUS_CODE', t => {
  t.plan(5)
  const error = new errors.FST_ERR_BAD_STATUS_CODE()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_BAD_STATUS_CODE')
  t.assert.strictEqual(error.message, 'Called reply with an invalid status code: %s')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_BAD_TRAILER_NAME', t => {
  t.plan(5)
  const error = new errors.FST_ERR_BAD_TRAILER_NAME()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_BAD_TRAILER_NAME')
  t.assert.strictEqual(error.message, 'Called reply.trailer with an invalid header name: %s')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_BAD_TRAILER_VALUE', t => {
  t.plan(5)
  const error = new errors.FST_ERR_BAD_TRAILER_VALUE()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_BAD_TRAILER_VALUE')
  t.assert.strictEqual(error.message, "Called reply.trailer('%s', fn) with an invalid type: %s. Expected a function.")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_FAILED_ERROR_SERIALIZATION', t => {
  t.plan(5)
  const error = new errors.FST_ERR_FAILED_ERROR_SERIALIZATION()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_FAILED_ERROR_SERIALIZATION')
  t.assert.strictEqual(error.message, 'Failed to serialize an error. Error: %s. Original error: %s')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_MISSING_SERIALIZATION_FN', t => {
  t.plan(5)
  const error = new errors.FST_ERR_MISSING_SERIALIZATION_FN()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_MISSING_SERIALIZATION_FN')
  t.assert.strictEqual(error.message, 'Missing serialization function. Key "%s"')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_MISSING_CONTENTTYPE_SERIALIZATION_FN', t => {
  t.plan(5)
  const error = new errors.FST_ERR_MISSING_CONTENTTYPE_SERIALIZATION_FN()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_MISSING_CONTENTTYPE_SERIALIZATION_FN')
  t.assert.strictEqual(error.message, 'Missing serialization function. Key "%s:%s"')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_REQ_INVALID_VALIDATION_INVOCATION', t => {
  t.plan(5)
  const error = new errors.FST_ERR_REQ_INVALID_VALIDATION_INVOCATION()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_REQ_INVALID_VALIDATION_INVOCATION')
  t.assert.strictEqual(error.message, 'Invalid validation invocation. Missing validation function for HTTP part "%s" nor schema provided.')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_SCH_MISSING_ID', t => {
  t.plan(5)
  const error = new errors.FST_ERR_SCH_MISSING_ID()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_SCH_MISSING_ID')
  t.assert.strictEqual(error.message, 'Missing schema $id property')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_SCH_ALREADY_PRESENT', t => {
  t.plan(5)
  const error = new errors.FST_ERR_SCH_ALREADY_PRESENT()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_SCH_ALREADY_PRESENT')
  t.assert.strictEqual(error.message, "Schema with id '%s' already declared!")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_SCH_CONTENT_MISSING_SCHEMA', t => {
  t.plan(5)
  const error = new errors.FST_ERR_SCH_CONTENT_MISSING_SCHEMA()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_SCH_CONTENT_MISSING_SCHEMA')
  t.assert.strictEqual(error.message, "Schema is missing for the content type '%s'")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_SCH_DUPLICATE', t => {
  t.plan(5)
  const error = new errors.FST_ERR_SCH_DUPLICATE()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_SCH_DUPLICATE')
  t.assert.strictEqual(error.message, "Schema with '%s' already present!")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_SCH_VALIDATION_BUILD', t => {
  t.plan(5)
  const error = new errors.FST_ERR_SCH_VALIDATION_BUILD()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_SCH_VALIDATION_BUILD')
  t.assert.strictEqual(error.message, 'Failed building the validation schema for %s: %s, due to error %s')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_SCH_SERIALIZATION_BUILD', t => {
  t.plan(5)
  const error = new errors.FST_ERR_SCH_SERIALIZATION_BUILD()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_SCH_SERIALIZATION_BUILD')
  t.assert.strictEqual(error.message, 'Failed building the serialization schema for %s: %s, due to error %s')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_SCH_RESPONSE_SCHEMA_NOT_NESTED_2XX', t => {
  t.plan(5)
  const error = new errors.FST_ERR_SCH_RESPONSE_SCHEMA_NOT_NESTED_2XX()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_SCH_RESPONSE_SCHEMA_NOT_NESTED_2XX')
  t.assert.strictEqual(error.message, 'response schemas should be nested under a valid status code, e.g { 2xx: { type: "object" } }')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_INIT_OPTS_INVALID', t => {
  t.plan(5)
  const error = new errors.FST_ERR_INIT_OPTS_INVALID()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_INIT_OPTS_INVALID')
  t.assert.strictEqual(error.message, "Invalid initialization options: '%s'")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_FORCE_CLOSE_CONNECTIONS_IDLE_NOT_AVAILABLE', t => {
  t.plan(5)
  const error = new errors.FST_ERR_FORCE_CLOSE_CONNECTIONS_IDLE_NOT_AVAILABLE()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_FORCE_CLOSE_CONNECTIONS_IDLE_NOT_AVAILABLE')
  t.assert.strictEqual(error.message, "Cannot set forceCloseConnections to 'idle' as your HTTP server does not support closeIdleConnections method")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_DUPLICATED_ROUTE', t => {
  t.plan(5)
  const error = new errors.FST_ERR_DUPLICATED_ROUTE()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_DUPLICATED_ROUTE')
  t.assert.strictEqual(error.message, "Method '%s' already declared for route '%s'")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_BAD_URL', t => {
  t.plan(5)
  const error = new errors.FST_ERR_BAD_URL()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_BAD_URL')
  t.assert.strictEqual(error.message, "'%s' is not a valid url component")
  t.assert.strictEqual(error.statusCode, 400)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_ASYNC_CONSTRAINT', t => {
  t.plan(5)
  const error = new errors.FST_ERR_ASYNC_CONSTRAINT()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_ASYNC_CONSTRAINT')
  t.assert.strictEqual(error.message, 'Unexpected error from async constraint')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_INVALID_URL', t => {
  t.plan(5)
  const error = new errors.FST_ERR_INVALID_URL()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_INVALID_URL')
  t.assert.strictEqual(error.message, "URL must be a string. Received '%s'")
  t.assert.strictEqual(error.statusCode, 400)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_ROUTE_OPTIONS_NOT_OBJ', t => {
  t.plan(5)
  const error = new errors.FST_ERR_ROUTE_OPTIONS_NOT_OBJ()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_ROUTE_OPTIONS_NOT_OBJ')
  t.assert.strictEqual(error.message, 'Options for "%s:%s" route must be an object')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_ROUTE_DUPLICATED_HANDLER', t => {
  t.plan(5)
  const error = new errors.FST_ERR_ROUTE_DUPLICATED_HANDLER()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_ROUTE_DUPLICATED_HANDLER')
  t.assert.strictEqual(error.message, 'Duplicate handler for "%s:%s" route is not allowed!')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_ROUTE_HANDLER_NOT_FN', t => {
  t.plan(5)
  const error = new errors.FST_ERR_ROUTE_HANDLER_NOT_FN()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_ROUTE_HANDLER_NOT_FN')
  t.assert.strictEqual(error.message, 'Error Handler for %s:%s route, if defined, must be a function')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_ROUTE_MISSING_HANDLER', t => {
  t.plan(5)
  const error = new errors.FST_ERR_ROUTE_MISSING_HANDLER()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_ROUTE_MISSING_HANDLER')
  t.assert.strictEqual(error.message, 'Missing handler function for "%s:%s" route.')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_ROUTE_METHOD_INVALID', t => {
  t.plan(5)
  const error = new errors.FST_ERR_ROUTE_METHOD_INVALID()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_ROUTE_METHOD_INVALID')
  t.assert.strictEqual(error.message, 'Provided method is invalid!')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_ROUTE_METHOD_NOT_SUPPORTED', t => {
  t.plan(5)
  const error = new errors.FST_ERR_ROUTE_METHOD_NOT_SUPPORTED()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_ROUTE_METHOD_NOT_SUPPORTED')
  t.assert.strictEqual(error.message, '%s method is not supported.')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_ROUTE_BODY_VALIDATION_SCHEMA_NOT_SUPPORTED', t => {
  t.plan(5)
  const error = new errors.FST_ERR_ROUTE_BODY_VALIDATION_SCHEMA_NOT_SUPPORTED()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_ROUTE_BODY_VALIDATION_SCHEMA_NOT_SUPPORTED')
  t.assert.strictEqual(error.message, 'Body validation schema for %s:%s route is not supported!')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_ROUTE_BODY_LIMIT_OPTION_NOT_INT', t => {
  t.plan(5)
  const error = new errors.FST_ERR_ROUTE_BODY_LIMIT_OPTION_NOT_INT()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_ROUTE_BODY_LIMIT_OPTION_NOT_INT')
  t.assert.strictEqual(error.message, "'bodyLimit' option must be an integer > 0. Got '%s'")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_ROUTE_BODY_LIMIT_OPTION_NOT_INT', t => {
  t.plan(5)
  const error = new errors.FST_ERR_ROUTE_BODY_LIMIT_OPTION_NOT_INT()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_ROUTE_BODY_LIMIT_OPTION_NOT_INT')
  t.assert.strictEqual(error.message, "'bodyLimit' option must be an integer > 0. Got '%s'")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_ROUTE_REWRITE_NOT_STR', t => {
  t.plan(5)
  const error = new errors.FST_ERR_ROUTE_REWRITE_NOT_STR()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_ROUTE_REWRITE_NOT_STR')
  t.assert.strictEqual(error.message, 'Rewrite url for "%s" needs to be of type "string" but received "%s"')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_REOPENED_CLOSE_SERVER', t => {
  t.plan(5)
  const error = new errors.FST_ERR_REOPENED_CLOSE_SERVER()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_REOPENED_CLOSE_SERVER')
  t.assert.strictEqual(error.message, 'Fastify has already been closed and cannot be reopened')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_REOPENED_SERVER', t => {
  t.plan(5)
  const error = new errors.FST_ERR_REOPENED_SERVER()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_REOPENED_SERVER')
  t.assert.strictEqual(error.message, 'Fastify is already listening')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_INSTANCE_ALREADY_LISTENING', t => {
  t.plan(5)
  const error = new errors.FST_ERR_INSTANCE_ALREADY_LISTENING()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_INSTANCE_ALREADY_LISTENING')
  t.assert.strictEqual(error.message, 'Fastify instance is already listening. %s')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_PLUGIN_VERSION_MISMATCH', t => {
  t.plan(5)
  const error = new errors.FST_ERR_PLUGIN_VERSION_MISMATCH()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_PLUGIN_VERSION_MISMATCH')
  t.assert.strictEqual(error.message, "fastify-plugin: %s - expected '%s' fastify version, '%s' is installed")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_PLUGIN_NOT_PRESENT_IN_INSTANCE', t => {
  t.plan(5)
  const error = new errors.FST_ERR_PLUGIN_NOT_PRESENT_IN_INSTANCE()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_PLUGIN_NOT_PRESENT_IN_INSTANCE')
  t.assert.strictEqual(error.message, "The decorator '%s'%s is not present in %s")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_PLUGIN_INVALID_ASYNC_HANDLER', t => {
  t.plan(5)
  const error = new errors.FST_ERR_PLUGIN_INVALID_ASYNC_HANDLER('easter-egg')
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_PLUGIN_INVALID_ASYNC_HANDLER')
  t.assert.strictEqual(error.message, 'The easter-egg plugin being registered mixes async and callback styles. Async plugin should not mix async and callback style.')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_PLUGIN_CALLBACK_NOT_FN', t => {
  t.plan(5)
  const error = new errors.FST_ERR_PLUGIN_CALLBACK_NOT_FN()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_PLUGIN_CALLBACK_NOT_FN')
  t.assert.strictEqual(error.message, 'fastify-plugin: %s')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_PLUGIN_NOT_VALID', t => {
  t.plan(5)
  const error = new errors.FST_ERR_PLUGIN_NOT_VALID()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_PLUGIN_NOT_VALID')
  t.assert.strictEqual(error.message, 'fastify-plugin: %s')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_ROOT_PLG_BOOTED', t => {
  t.plan(5)
  const error = new errors.FST_ERR_ROOT_PLG_BOOTED()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_ROOT_PLG_BOOTED')
  t.assert.strictEqual(error.message, 'fastify-plugin: %s')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_PARENT_PLUGIN_BOOTED', t => {
  t.plan(5)
  const error = new errors.FST_ERR_PARENT_PLUGIN_BOOTED()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_PARENT_PLUGIN_BOOTED')
  t.assert.strictEqual(error.message, 'fastify-plugin: %s')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_PLUGIN_TIMEOUT', t => {
  t.plan(5)
  const error = new errors.FST_ERR_PLUGIN_TIMEOUT()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_PLUGIN_TIMEOUT')
  t.assert.strictEqual(error.message, 'fastify-plugin: %s')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_VALIDATION', t => {
  t.plan(5)
  const error = new errors.FST_ERR_VALIDATION()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_VALIDATION')
  t.assert.strictEqual(error.message, '%s')
  t.assert.strictEqual(error.statusCode, 400)
  t.assert.ok(error instanceof Error)
})

test('FST_ERR_LISTEN_OPTIONS_INVALID', t => {
  t.plan(5)
  const error = new errors.FST_ERR_LISTEN_OPTIONS_INVALID()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_LISTEN_OPTIONS_INVALID')
  t.assert.strictEqual(error.message, "Invalid listen options: '%s'")
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('FST_ERR_ERROR_HANDLER_NOT_FN', t => {
  t.plan(5)
  const error = new errors.FST_ERR_ERROR_HANDLER_NOT_FN()
  t.assert.strictEqual(error.name, 'FastifyError')
  t.assert.strictEqual(error.code, 'FST_ERR_ERROR_HANDLER_NOT_FN')
  t.assert.strictEqual(error.message, 'Error Handler must be a function')
  t.assert.strictEqual(error.statusCode, 500)
  t.assert.ok(error instanceof TypeError)
})

test('Ensure that all errors are in Errors.md TOC', t => {
  t.plan(expectedErrors)

  const errorsMd = readFileSync(resolve(__dirname, '../../docs/Reference/Errors.md'), 'utf8')

  const exportedKeys = Object.keys(errors)
  for (const key of exportedKeys) {
    if (errors[key].name === 'FastifyError') {
      t.assert.ok(errorsMd.includes(`  - [${key.toUpperCase()}](#${key.toLowerCase()})`), key)
    }
  }
})

test('Ensure that non-existing errors are not in Errors.md TOC', t => {
  t.plan(expectedErrors)
  const errorsMd = readFileSync(resolve(__dirname, '../../docs/Reference/Errors.md'), 'utf8')

  const matchRE = / {4}- \[([A-Z0-9_]+)\]\(#[a-z0-9_]+\)/g
  const matches = errorsMd.matchAll(matchRE)
  const exportedKeys = Object.keys(errors)

  for (const match of matches) {
    t.assert.ok(exportedKeys.indexOf(match[1]) !== -1, match[1])
  }
})

test('Ensure that all errors are in Errors.md documented', t => {
  t.plan(expectedErrors)
  const errorsMd = readFileSync(resolve(__dirname, '../../docs/Reference/Errors.md'), 'utf8')

  const exportedKeys = Object.keys(errors)
  for (const key of exportedKeys) {
    if (errors[key].name === 'FastifyError') {
      t.assert.ok(errorsMd.includes(`<a id="${key.toLowerCase()}">${key.toUpperCase()}</a>`), key)
    }
  }
})

test('Ensure that non-existing errors are not in Errors.md documented', t => {
  t.plan(expectedErrors)

  const errorsMd = readFileSync(resolve(__dirname, '../../docs/Reference/Errors.md'), 'utf8')

  const matchRE = /<a id="[0-9a-zA-Z_]+">([0-9a-zA-Z_]+)<\/a>/g
  const matches = errorsMd.matchAll(matchRE)
  const exportedKeys = Object.keys(errors)

  for (const match of matches) {
    t.assert.ok(exportedKeys.indexOf(match[1]) !== -1, match[1])
  }
})

test('Ensure that all errors are in errors.d.ts', t => {
  t.plan(expectedErrors)

  const errorsDts = readFileSync(resolve(__dirname, '../../types/errors.d.ts'), 'utf8')

  const FastifyErrorCodesRE = /export type FastifyErrorCodes = Record<([^>]+),\s*FastifyErrorConstructor>/m

  const [, errorCodeType] = errorsDts.match(FastifyErrorCodesRE)

  const errorCodeRE = /'([A-Z0-9_]+)'/g
  const matches = errorCodeType.matchAll(errorCodeRE)
  const errorTypes = [...matches].map(match => match[1])
  const exportedKeys = Object.keys(errors)

  for (const key of exportedKeys) {
    if (errors[key].name === 'FastifyError') {
      t.assert.ok(errorTypes.includes(key), key)
    }
  }
})

test('Ensure that non-existing errors are not in errors.d.ts', t => {
  t.plan(expectedErrors)

  const errorsDts = readFileSync(resolve(__dirname, '../../types/errors.d.ts'), 'utf8')

  const FastifyErrorCodesRE = /export type FastifyErrorCodes = Record<([^>]+),\s*FastifyErrorConstructor>/m

  const [, errorCodeType] = errorsDts.match(FastifyErrorCodesRE)

  const errorCodeRE = /'([A-Z0-9_]+)'/g
  const matches = errorCodeType.matchAll(errorCodeRE)
  const exportedKeys = Object.keys(errors)

  for (const match of matches) {
    t.assert.ok(exportedKeys.indexOf(match[1]) !== -1, match[1])
  }
})
