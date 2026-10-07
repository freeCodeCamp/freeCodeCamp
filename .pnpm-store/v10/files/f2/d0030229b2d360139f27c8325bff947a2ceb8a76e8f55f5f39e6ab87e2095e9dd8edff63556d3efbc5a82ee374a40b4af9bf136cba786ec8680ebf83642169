'use strict'

const createError = require('@fastify/error')

const codes = {
  /**
   * Basic
   */
  FST_ERR_NOT_FOUND: createError(
    'FST_ERR_NOT_FOUND',
    'Not Found',
    404
  ),
  FST_ERR_OPTIONS_NOT_OBJ: createError(
    'FST_ERR_OPTIONS_NOT_OBJ',
    'Options must be an object',
    500,
    TypeError
  ),
  FST_ERR_QSP_NOT_FN: createError(
    'FST_ERR_QSP_NOT_FN',
    "querystringParser option should be a function, instead got '%s'",
    500,
    TypeError
  ),
  FST_ERR_SCHEMA_CONTROLLER_BUCKET_OPT_NOT_FN: createError(
    'FST_ERR_SCHEMA_CONTROLLER_BUCKET_OPT_NOT_FN',
    "schemaController.bucket option should be a function, instead got '%s'",
    500,
    TypeError
  ),
  FST_ERR_SCHEMA_ERROR_FORMATTER_NOT_FN: createError(
    'FST_ERR_SCHEMA_ERROR_FORMATTER_NOT_FN',
    "schemaErrorFormatter option should be a non async function. Instead got '%s'.",
    500,
    TypeError
  ),
  FST_ERR_AJV_CUSTOM_OPTIONS_OPT_NOT_OBJ: createError(
    'FST_ERR_AJV_CUSTOM_OPTIONS_OPT_NOT_OBJ',
    "ajv.customOptions option should be an object, instead got '%s'",
    500,
    TypeError
  ),
  FST_ERR_AJV_CUSTOM_OPTIONS_OPT_NOT_ARR: createError(
    'FST_ERR_AJV_CUSTOM_OPTIONS_OPT_NOT_ARR',
    "ajv.plugins option should be an array, instead got '%s'",
    500,
    TypeError
  ),
  FST_ERR_VALIDATION: createError(
    'FST_ERR_VALIDATION',
    '%s',
    400
  ),
  FST_ERR_LISTEN_OPTIONS_INVALID: createError(
    'FST_ERR_LISTEN_OPTIONS_INVALID',
    "Invalid listen options: '%s'",
    500,
    TypeError
  ),
  FST_ERR_ERROR_HANDLER_NOT_FN: createError(
    'FST_ERR_ERROR_HANDLER_NOT_FN',
    'Error Handler must be a function',
    500,
    TypeError
  ),
  FST_ERR_ERROR_HANDLER_ALREADY_SET: createError(
    'FST_ERR_ERROR_HANDLER_ALREADY_SET',
    "Error Handler already set in this scope. Set 'allowErrorHandlerOverride: true' to allow overriding.",
    500,
    TypeError
  ),

  /**
   * ContentTypeParser
  */
  FST_ERR_CTP_ALREADY_PRESENT: createError(
    'FST_ERR_CTP_ALREADY_PRESENT',
    "Content type parser '%s' already present."
  ),
  FST_ERR_CTP_INVALID_TYPE: createError(
    'FST_ERR_CTP_INVALID_TYPE',
    'The content type should be a string or a RegExp',
    500,
    TypeError
  ),
  FST_ERR_CTP_EMPTY_TYPE: createError(
    'FST_ERR_CTP_EMPTY_TYPE',
    'The content type cannot be an empty string',
    500,
    TypeError
  ),
  FST_ERR_CTP_INVALID_HANDLER: createError(
    'FST_ERR_CTP_INVALID_HANDLER',
    'The content type handler should be a function',
    500,
    TypeError
  ),
  FST_ERR_CTP_INVALID_PARSE_TYPE: createError(
    'FST_ERR_CTP_INVALID_PARSE_TYPE',
    "The body parser can only parse your data as 'string' or 'buffer', you asked '%s' which is not supported.",
    500,
    TypeError
  ),
  FST_ERR_CTP_BODY_TOO_LARGE: createError(
    'FST_ERR_CTP_BODY_TOO_LARGE',
    'Request body is too large',
    413,
    RangeError
  ),
  FST_ERR_CTP_INVALID_MEDIA_TYPE: createError(
    'FST_ERR_CTP_INVALID_MEDIA_TYPE',
    'Unsupported Media Type',
    415
  ),
  FST_ERR_CTP_INVALID_CONTENT_LENGTH: createError(
    'FST_ERR_CTP_INVALID_CONTENT_LENGTH',
    'Request body size did not match Content-Length',
    400,
    RangeError
  ),
  FST_ERR_CTP_EMPTY_JSON_BODY: createError(
    'FST_ERR_CTP_EMPTY_JSON_BODY',
    "Body cannot be empty when content-type is set to 'application/json'",
    400
  ),
  FST_ERR_CTP_INVALID_JSON_BODY: createError(
    'FST_ERR_CTP_INVALID_JSON_BODY',
    "Body is not valid JSON but content-type is set to 'application/json'",
    400
  ),
  FST_ERR_CTP_INSTANCE_ALREADY_STARTED: createError(
    'FST_ERR_CTP_INSTANCE_ALREADY_STARTED',
    'Cannot call "%s" when fastify instance is already started!',
    400
  ),

  /**
   * decorate
  */
  FST_ERR_DEC_ALREADY_PRESENT: createError(
    'FST_ERR_DEC_ALREADY_PRESENT',
    "The decorator '%s' has already been added!"
  ),
  FST_ERR_DEC_DEPENDENCY_INVALID_TYPE: createError(
    'FST_ERR_DEC_DEPENDENCY_INVALID_TYPE',
    "The dependencies of decorator '%s' must be of type Array.",
    500,
    TypeError
  ),
  FST_ERR_DEC_MISSING_DEPENDENCY: createError(
    'FST_ERR_DEC_MISSING_DEPENDENCY',
    "The decorator is missing dependency '%s'."
  ),
  FST_ERR_DEC_AFTER_START: createError(
    'FST_ERR_DEC_AFTER_START',
    "The decorator '%s' has been added after start!"
  ),
  FST_ERR_DEC_REFERENCE_TYPE: createError(
    'FST_ERR_DEC_REFERENCE_TYPE',
    "The decorator '%s' of type '%s' is a reference type. Use the { getter, setter } interface instead."
  ),
  FST_ERR_DEC_UNDECLARED: createError(
    'FST_ERR_DEC_UNDECLARED',
    "No decorator '%s' has been declared on %s."
  ),

  /**
   * hooks
  */
  FST_ERR_HOOK_INVALID_TYPE: createError(
    'FST_ERR_HOOK_INVALID_TYPE',
    'The hook name must be a string',
    500,
    TypeError
  ),
  FST_ERR_HOOK_INVALID_HANDLER: createError(
    'FST_ERR_HOOK_INVALID_HANDLER',
    '%s hook should be a function, instead got %s',
    500,
    TypeError
  ),
  FST_ERR_HOOK_INVALID_ASYNC_HANDLER: createError(
    'FST_ERR_HOOK_INVALID_ASYNC_HANDLER',
    'Async function has too many arguments. Async hooks should not use the \'done\' argument.',
    500,
    TypeError
  ),
  FST_ERR_HOOK_NOT_SUPPORTED: createError(
    'FST_ERR_HOOK_NOT_SUPPORTED',
    '%s hook not supported!',
    500,
    TypeError
  ),

  /**
   * Middlewares
   */
  FST_ERR_MISSING_MIDDLEWARE: createError(
    'FST_ERR_MISSING_MIDDLEWARE',
    'You must register a plugin for handling middlewares, visit fastify.dev/docs/latest/Reference/Middleware/ for more info.',
    500
  ),

  FST_ERR_HOOK_TIMEOUT: createError(
    'FST_ERR_HOOK_TIMEOUT',
    "A callback for '%s' hook%s timed out. You may have forgotten to call 'done' function or to resolve a Promise"
  ),

  /**
   * logger
  */
  FST_ERR_LOG_INVALID_DESTINATION: createError(
    'FST_ERR_LOG_INVALID_DESTINATION',
    'Cannot specify both logger.stream and logger.file options'
  ),

  FST_ERR_LOG_INVALID_LOGGER: createError(
    'FST_ERR_LOG_INVALID_LOGGER',
    "Invalid logger object provided. The logger instance should have these functions(s): '%s'.",
    500,
    TypeError
  ),

  FST_ERR_LOG_INVALID_LOGGER_INSTANCE: createError(
    'FST_ERR_LOG_INVALID_LOGGER_INSTANCE',
    'loggerInstance only accepts a logger instance.',
    500,
    TypeError
  ),

  FST_ERR_LOG_INVALID_LOGGER_CONFIG: createError(
    'FST_ERR_LOG_INVALID_LOGGER_CONFIG',
    'logger options only accepts a configuration object.',
    500,
    TypeError
  ),

  FST_ERR_LOG_LOGGER_AND_LOGGER_INSTANCE_PROVIDED: createError(
    'FST_ERR_LOG_LOGGER_AND_LOGGER_INSTANCE_PROVIDED',
    'You cannot provide both logger and loggerInstance. Please provide only one.',
    500,
    TypeError
  ),

  /**
   * reply
  */
  FST_ERR_REP_INVALID_PAYLOAD_TYPE: createError(
    'FST_ERR_REP_INVALID_PAYLOAD_TYPE',
    "Attempted to send payload of invalid type '%s'. Expected a string or Buffer.",
    500,
    TypeError
  ),
  FST_ERR_REP_RESPONSE_BODY_CONSUMED: createError(
    'FST_ERR_REP_RESPONSE_BODY_CONSUMED',
    'Response.body is already consumed.'
  ),
  FST_ERR_REP_READABLE_STREAM_LOCKED: createError(
    'FST_ERR_REP_READABLE_STREAM_LOCKED',
    'ReadableStream was locked. You should call releaseLock() method on reader before sending.'
  ),
  FST_ERR_REP_ALREADY_SENT: createError(
    'FST_ERR_REP_ALREADY_SENT',
    'Reply was already sent, did you forget to "return reply" in "%s" (%s)?'
  ),
  FST_ERR_REP_SENT_VALUE: createError(
    'FST_ERR_REP_SENT_VALUE',
    'The only possible value for reply.sent is true.',
    500,
    TypeError
  ),
  FST_ERR_SEND_INSIDE_ONERR: createError(
    'FST_ERR_SEND_INSIDE_ONERR',
    'You cannot use `send` inside the `onError` hook'
  ),
  FST_ERR_SEND_UNDEFINED_ERR: createError(
    'FST_ERR_SEND_UNDEFINED_ERR',
    'Undefined error has occurred'
  ),
  FST_ERR_BAD_STATUS_CODE: createError(
    'FST_ERR_BAD_STATUS_CODE',
    'Called reply with an invalid status code: %s'
  ),
  FST_ERR_BAD_TRAILER_NAME: createError(
    'FST_ERR_BAD_TRAILER_NAME',
    'Called reply.trailer with an invalid header name: %s'
  ),
  FST_ERR_BAD_TRAILER_VALUE: createError(
    'FST_ERR_BAD_TRAILER_VALUE',
    "Called reply.trailer('%s', fn) with an invalid type: %s. Expected a function."
  ),
  FST_ERR_FAILED_ERROR_SERIALIZATION: createError(
    'FST_ERR_FAILED_ERROR_SERIALIZATION',
    'Failed to serialize an error. Error: %s. Original error: %s'
  ),
  FST_ERR_MISSING_SERIALIZATION_FN: createError(
    'FST_ERR_MISSING_SERIALIZATION_FN',
    'Missing serialization function. Key "%s"'
  ),
  FST_ERR_MISSING_CONTENTTYPE_SERIALIZATION_FN: createError(
    'FST_ERR_MISSING_CONTENTTYPE_SERIALIZATION_FN',
    'Missing serialization function. Key "%s:%s"'
  ),
  FST_ERR_REQ_INVALID_VALIDATION_INVOCATION: createError(
    'FST_ERR_REQ_INVALID_VALIDATION_INVOCATION',
    'Invalid validation invocation. Missing validation function for HTTP part "%s" nor schema provided.'
  ),

  /**
   * schemas
  */
  FST_ERR_SCH_MISSING_ID: createError(
    'FST_ERR_SCH_MISSING_ID',
    'Missing schema $id property'
  ),
  FST_ERR_SCH_ALREADY_PRESENT: createError(
    'FST_ERR_SCH_ALREADY_PRESENT',
    "Schema with id '%s' already declared!"
  ),
  FST_ERR_SCH_CONTENT_MISSING_SCHEMA: createError(
    'FST_ERR_SCH_CONTENT_MISSING_SCHEMA',
    "Schema is missing for the content type '%s'"
  ),
  FST_ERR_SCH_DUPLICATE: createError(
    'FST_ERR_SCH_DUPLICATE',
    "Schema with '%s' already present!"
  ),
  FST_ERR_SCH_VALIDATION_BUILD: createError(
    'FST_ERR_SCH_VALIDATION_BUILD',
    'Failed building the validation schema for %s: %s, due to error %s'
  ),
  FST_ERR_SCH_SERIALIZATION_BUILD: createError(
    'FST_ERR_SCH_SERIALIZATION_BUILD',
    'Failed building the serialization schema for %s: %s, due to error %s'
  ),
  FST_ERR_SCH_RESPONSE_SCHEMA_NOT_NESTED_2XX: createError(
    'FST_ERR_SCH_RESPONSE_SCHEMA_NOT_NESTED_2XX',
    'response schemas should be nested under a valid status code, e.g { 2xx: { type: "object" } }'
  ),

  /**
   * initialConfig
   */
  FST_ERR_INIT_OPTS_INVALID: createError(
    'FST_ERR_INIT_OPTS_INVALID',
    "Invalid initialization options: '%s'"
  ),
  FST_ERR_FORCE_CLOSE_CONNECTIONS_IDLE_NOT_AVAILABLE: createError(
    'FST_ERR_FORCE_CLOSE_CONNECTIONS_IDLE_NOT_AVAILABLE',
    "Cannot set forceCloseConnections to 'idle' as your HTTP server does not support closeIdleConnections method"
  ),

  /**
   * router
   */
  FST_ERR_DUPLICATED_ROUTE: createError(
    'FST_ERR_DUPLICATED_ROUTE',
    "Method '%s' already declared for route '%s'"
  ),
  FST_ERR_BAD_URL: createError(
    'FST_ERR_BAD_URL',
    "'%s' is not a valid url component",
    400,
    URIError
  ),
  FST_ERR_ASYNC_CONSTRAINT: createError(
    'FST_ERR_ASYNC_CONSTRAINT',
    'Unexpected error from async constraint',
    500
  ),
  FST_ERR_INVALID_URL: createError(
    'FST_ERR_INVALID_URL',
    "URL must be a string. Received '%s'",
    400,
    TypeError
  ),
  FST_ERR_ROUTE_OPTIONS_NOT_OBJ: createError(
    'FST_ERR_ROUTE_OPTIONS_NOT_OBJ',
    'Options for "%s:%s" route must be an object',
    500,
    TypeError
  ),
  FST_ERR_ROUTE_DUPLICATED_HANDLER: createError(
    'FST_ERR_ROUTE_DUPLICATED_HANDLER',
    'Duplicate handler for "%s:%s" route is not allowed!',
    500
  ),
  FST_ERR_ROUTE_HANDLER_NOT_FN: createError(
    'FST_ERR_ROUTE_HANDLER_NOT_FN',
    'Error Handler for %s:%s route, if defined, must be a function',
    500,
    TypeError
  ),
  FST_ERR_ROUTE_MISSING_HANDLER: createError(
    'FST_ERR_ROUTE_MISSING_HANDLER',
    'Missing handler function for "%s:%s" route.',
    500
  ),
  FST_ERR_ROUTE_METHOD_INVALID: createError(
    'FST_ERR_ROUTE_METHOD_INVALID',
    'Provided method is invalid!',
    500,
    TypeError
  ),
  FST_ERR_ROUTE_METHOD_NOT_SUPPORTED: createError(
    'FST_ERR_ROUTE_METHOD_NOT_SUPPORTED',
    '%s method is not supported.',
    500
  ),
  FST_ERR_ROUTE_BODY_VALIDATION_SCHEMA_NOT_SUPPORTED: createError(
    'FST_ERR_ROUTE_BODY_VALIDATION_SCHEMA_NOT_SUPPORTED',
    'Body validation schema for %s:%s route is not supported!',
    500
  ),
  FST_ERR_ROUTE_BODY_LIMIT_OPTION_NOT_INT: createError(
    'FST_ERR_ROUTE_BODY_LIMIT_OPTION_NOT_INT',
    "'bodyLimit' option must be an integer > 0. Got '%s'",
    500,
    TypeError
  ),
  FST_ERR_HANDLER_TIMEOUT: createError(
    'FST_ERR_HANDLER_TIMEOUT',
    "Request timed out after %s ms on route '%s'",
    503
  ),
  FST_ERR_ROUTE_HANDLER_TIMEOUT_OPTION_NOT_INT: createError(
    'FST_ERR_ROUTE_HANDLER_TIMEOUT_OPTION_NOT_INT',
    "'handlerTimeout' option must be an integer > 0. Got '%s'",
    500,
    TypeError
  ),
  FST_ERR_ROUTE_REWRITE_NOT_STR: createError(
    'FST_ERR_ROUTE_REWRITE_NOT_STR',
    'Rewrite url for "%s" needs to be of type "string" but received "%s"',
    500,
    TypeError
  ),

  /**
   *  again listen when close server
   */
  FST_ERR_REOPENED_CLOSE_SERVER: createError(
    'FST_ERR_REOPENED_CLOSE_SERVER',
    'Fastify has already been closed and cannot be reopened'
  ),
  FST_ERR_REOPENED_SERVER: createError(
    'FST_ERR_REOPENED_SERVER',
    'Fastify is already listening'
  ),
  FST_ERR_INSTANCE_ALREADY_LISTENING: createError(
    'FST_ERR_INSTANCE_ALREADY_LISTENING',
    'Fastify instance is already listening. %s'
  ),

  /**
   * plugin
   */
  FST_ERR_PLUGIN_VERSION_MISMATCH: createError(
    'FST_ERR_PLUGIN_VERSION_MISMATCH',
    "fastify-plugin: %s - expected '%s' fastify version, '%s' is installed"
  ),
  FST_ERR_PLUGIN_NOT_PRESENT_IN_INSTANCE: createError(
    'FST_ERR_PLUGIN_NOT_PRESENT_IN_INSTANCE',
    "The decorator '%s'%s is not present in %s"
  ),
  FST_ERR_PLUGIN_INVALID_ASYNC_HANDLER: createError(
    'FST_ERR_PLUGIN_INVALID_ASYNC_HANDLER',
    'The %s plugin being registered mixes async and callback styles. Async plugin should not mix async and callback style.',
    500,
    TypeError
  ),

  /**
   *  Avvio Errors
   */
  FST_ERR_PLUGIN_CALLBACK_NOT_FN: createError(
    'FST_ERR_PLUGIN_CALLBACK_NOT_FN',
    'fastify-plugin: %s',
    500,
    TypeError
  ),
  FST_ERR_PLUGIN_NOT_VALID: createError(
    'FST_ERR_PLUGIN_NOT_VALID',
    'fastify-plugin: %s'
  ),
  FST_ERR_ROOT_PLG_BOOTED: createError(
    'FST_ERR_ROOT_PLG_BOOTED',
    'fastify-plugin: %s'
  ),
  FST_ERR_PARENT_PLUGIN_BOOTED: createError(
    'FST_ERR_PARENT_PLUGIN_BOOTED',
    'fastify-plugin: %s'
  ),
  FST_ERR_PLUGIN_TIMEOUT: createError(
    'FST_ERR_PLUGIN_TIMEOUT',
    'fastify-plugin: %s'
  )
}

function appendStackTrace (oldErr, newErr) {
  newErr.cause = oldErr

  return newErr
}

module.exports = codes
module.exports.appendStackTrace = appendStackTrace
module.exports.AVVIO_ERRORS_MAP = {
  AVV_ERR_CALLBACK_NOT_FN: codes.FST_ERR_PLUGIN_CALLBACK_NOT_FN,
  AVV_ERR_PLUGIN_NOT_VALID: codes.FST_ERR_PLUGIN_NOT_VALID,
  AVV_ERR_ROOT_PLG_BOOTED: codes.FST_ERR_ROOT_PLG_BOOTED,
  AVV_ERR_PARENT_PLG_LOADED: codes.FST_ERR_PARENT_PLUGIN_BOOTED,
  AVV_ERR_READY_TIMEOUT: codes.FST_ERR_PLUGIN_TIMEOUT,
  AVV_ERR_PLUGIN_EXEC_TIMEOUT: codes.FST_ERR_PLUGIN_TIMEOUT
}
