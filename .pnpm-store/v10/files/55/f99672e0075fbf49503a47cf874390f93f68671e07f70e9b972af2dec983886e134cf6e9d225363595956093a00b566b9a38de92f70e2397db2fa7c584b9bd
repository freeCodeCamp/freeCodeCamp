<h1 align="center">Fastify</h1>

## Errors
<a id="errors"></a>

**Table of contents**
- [Errors](#errors)
  - [Error Handling In Node.js](#error-handling-in-nodejs)
    - [Uncaught Errors](#uncaught-errors)
    - [Catching Errors In Promises](#catching-errors-in-promises)
  - [Errors In Fastify](#errors-in-fastify)
    - [Errors In Input Data](#errors-in-input-data)
    - [Catching Uncaught Errors In Fastify](#catching-uncaught-errors-in-fastify)
  - [Errors In Fastify Lifecycle Hooks And A Custom Error Handler](#errors-in-fastify-lifecycle-hooks-and-a-custom-error-handler)
  - [Fastify Error Codes](#fastify-error-codes)
    - [FST_ERR_NOT_FOUND](#fst_err_not_found)
    - [FST_ERR_OPTIONS_NOT_OBJ](#fst_err_options_not_obj)
    - [FST_ERR_QSP_NOT_FN](#fst_err_qsp_not_fn)
    - [FST_ERR_SCHEMA_CONTROLLER_BUCKET_OPT_NOT_FN](#fst_err_schema_controller_bucket_opt_not_fn)
    - [FST_ERR_SCHEMA_ERROR_FORMATTER_NOT_FN](#fst_err_schema_error_formatter_not_fn)
    - [FST_ERR_AJV_CUSTOM_OPTIONS_OPT_NOT_OBJ](#fst_err_ajv_custom_options_opt_not_obj)
    - [FST_ERR_AJV_CUSTOM_OPTIONS_OPT_NOT_ARR](#fst_err_ajv_custom_options_opt_not_arr)
    - [FST_ERR_CTP_ALREADY_PRESENT](#fst_err_ctp_already_present)
    - [FST_ERR_CTP_INVALID_TYPE](#fst_err_ctp_invalid_type)
    - [FST_ERR_CTP_EMPTY_TYPE](#fst_err_ctp_empty_type)
    - [FST_ERR_CTP_INVALID_HANDLER](#fst_err_ctp_invalid_handler)
    - [FST_ERR_CTP_INVALID_PARSE_TYPE](#fst_err_ctp_invalid_parse_type)
    - [FST_ERR_CTP_BODY_TOO_LARGE](#fst_err_ctp_body_too_large)
    - [FST_ERR_CTP_INVALID_MEDIA_TYPE](#fst_err_ctp_invalid_media_type)
    - [FST_ERR_CTP_INVALID_CONTENT_LENGTH](#fst_err_ctp_invalid_content_length)
    - [FST_ERR_CTP_EMPTY_JSON_BODY](#fst_err_ctp_empty_json_body)
    - [FST_ERR_CTP_INVALID_JSON_BODY](#fst_err_ctp_invalid_json_body)
    - [FST_ERR_CTP_INSTANCE_ALREADY_STARTED](#fst_err_ctp_instance_already_started)
    - [FST_ERR_INSTANCE_ALREADY_LISTENING](#fst_err_instance_already_listening)
    - [FST_ERR_DEC_ALREADY_PRESENT](#fst_err_dec_already_present)
    - [FST_ERR_DEC_DEPENDENCY_INVALID_TYPE](#fst_err_dec_dependency_invalid_type)
    - [FST_ERR_DEC_MISSING_DEPENDENCY](#fst_err_dec_missing_dependency)
    - [FST_ERR_DEC_AFTER_START](#fst_err_dec_after_start)
    - [FST_ERR_DEC_REFERENCE_TYPE](#fst_err_dec_reference_type)
    - [FST_ERR_DEC_UNDECLARED](#fst_err_dec_undeclared)
    - [FST_ERR_HOOK_INVALID_TYPE](#fst_err_hook_invalid_type)
    - [FST_ERR_HOOK_INVALID_HANDLER](#fst_err_hook_invalid_handler)
    - [FST_ERR_HOOK_INVALID_ASYNC_HANDLER](#fst_err_hook_invalid_async_handler)
    - [FST_ERR_HOOK_NOT_SUPPORTED](#fst_err_hook_not_supported)
    - [FST_ERR_MISSING_MIDDLEWARE](#fst_err_missing_middleware)
    - [FST_ERR_HOOK_TIMEOUT](#fst_err_hook_timeout)
    - [FST_ERR_LOG_INVALID_DESTINATION](#fst_err_log_invalid_destination)
    - [FST_ERR_LOG_INVALID_LOGGER](#fst_err_log_invalid_logger)
    - [FST_ERR_LOG_INVALID_LOGGER_INSTANCE](#fst_err_log_invalid_logger_instance)
    - [FST_ERR_LOG_INVALID_LOGGER_CONFIG](#fst_err_log_invalid_logger_config)
    - [FST_ERR_LOG_LOGGER_AND_LOGGER_INSTANCE_PROVIDED](#fst_err_log_logger_and_logger_instance_provided)
    - [FST_ERR_REP_INVALID_PAYLOAD_TYPE](#fst_err_rep_invalid_payload_type)
    - [FST_ERR_REP_RESPONSE_BODY_CONSUMED](#fst_err_rep_response_body_consumed)
    - [FST_ERR_REP_READABLE_STREAM_LOCKED](#fst_err_rep_readable_stream_locked)
    - [FST_ERR_REP_ALREADY_SENT](#fst_err_rep_already_sent)
    - [FST_ERR_REP_SENT_VALUE](#fst_err_rep_sent_value)
    - [FST_ERR_SEND_INSIDE_ONERR](#fst_err_send_inside_onerr)
    - [FST_ERR_SEND_UNDEFINED_ERR](#fst_err_send_undefined_err)
    - [FST_ERR_BAD_STATUS_CODE](#fst_err_bad_status_code)
    - [FST_ERR_BAD_TRAILER_NAME](#fst_err_bad_trailer_name)
    - [FST_ERR_BAD_TRAILER_VALUE](#fst_err_bad_trailer_value)
    - [FST_ERR_FAILED_ERROR_SERIALIZATION](#fst_err_failed_error_serialization)
    - [FST_ERR_MISSING_SERIALIZATION_FN](#fst_err_missing_serialization_fn)
    - [FST_ERR_MISSING_CONTENTTYPE_SERIALIZATION_FN](#fst_err_missing_contenttype_serialization_fn)
    - [FST_ERR_REQ_INVALID_VALIDATION_INVOCATION](#fst_err_req_invalid_validation_invocation)
    - [FST_ERR_SCH_MISSING_ID](#fst_err_sch_missing_id)
    - [FST_ERR_SCH_ALREADY_PRESENT](#fst_err_sch_already_present)
    - [FST_ERR_SCH_CONTENT_MISSING_SCHEMA](#fst_err_sch_content_missing_schema)
    - [FST_ERR_SCH_DUPLICATE](#fst_err_sch_duplicate)
    - [FST_ERR_SCH_VALIDATION_BUILD](#fst_err_sch_validation_build)
    - [FST_ERR_SCH_SERIALIZATION_BUILD](#fst_err_sch_serialization_build)
    - [FST_ERR_SCH_RESPONSE_SCHEMA_NOT_NESTED_2XX](#fst_err_sch_response_schema_not_nested_2xx)
    - [FST_ERR_INIT_OPTS_INVALID](#fst_err_init_opts_invalid)
    - [FST_ERR_FORCE_CLOSE_CONNECTIONS_IDLE_NOT_AVAILABLE](#fst_err_force_close_connections_idle_not_available)
    - [FST_ERR_DUPLICATED_ROUTE](#fst_err_duplicated_route)
    - [FST_ERR_BAD_URL](#fst_err_bad_url)
    - [FST_ERR_ASYNC_CONSTRAINT](#fst_err_async_constraint)
    - [FST_ERR_INVALID_URL](#fst_err_invalid_url)
    - [FST_ERR_ROUTE_OPTIONS_NOT_OBJ](#fst_err_route_options_not_obj)
    - [FST_ERR_ROUTE_DUPLICATED_HANDLER](#fst_err_route_duplicated_handler)
    - [FST_ERR_ROUTE_HANDLER_NOT_FN](#fst_err_route_handler_not_fn)
    - [FST_ERR_ROUTE_MISSING_HANDLER](#fst_err_route_missing_handler)
    - [FST_ERR_ROUTE_METHOD_INVALID](#fst_err_route_method_invalid)
    - [FST_ERR_ROUTE_METHOD_NOT_SUPPORTED](#fst_err_route_method_not_supported)
    - [FST_ERR_ROUTE_BODY_VALIDATION_SCHEMA_NOT_SUPPORTED](#fst_err_route_body_validation_schema_not_supported)
    - [FST_ERR_ROUTE_BODY_LIMIT_OPTION_NOT_INT](#fst_err_route_body_limit_option_not_int)
    - [FST_ERR_HANDLER_TIMEOUT](#fst_err_handler_timeout)

    - [FST_ERR_ROUTE_HANDLER_TIMEOUT_OPTION_NOT_INT](#fst_err_route_handler_timeout_option_not_int)
    - [FST_ERR_ROUTE_REWRITE_NOT_STR](#fst_err_route_rewrite_not_str)
    - [FST_ERR_REOPENED_CLOSE_SERVER](#fst_err_reopened_close_server)
    - [FST_ERR_REOPENED_SERVER](#fst_err_reopened_server)
    - [FST_ERR_PLUGIN_VERSION_MISMATCH](#fst_err_plugin_version_mismatch)
    - [FST_ERR_PLUGIN_CALLBACK_NOT_FN](#fst_err_plugin_callback_not_fn)
    - [FST_ERR_PLUGIN_NOT_VALID](#fst_err_plugin_not_valid)
    - [FST_ERR_ROOT_PLG_BOOTED](#fst_err_root_plg_booted)
    - [FST_ERR_PARENT_PLUGIN_BOOTED](#fst_err_parent_plugin_booted)
    - [FST_ERR_PLUGIN_TIMEOUT](#fst_err_plugin_timeout)
    - [FST_ERR_PLUGIN_NOT_PRESENT_IN_INSTANCE](#fst_err_plugin_not_present_in_instance)
    - [FST_ERR_PLUGIN_INVALID_ASYNC_HANDLER](#fst_err_plugin_invalid_async_handler)
    - [FST_ERR_VALIDATION](#fst_err_validation)
    - [FST_ERR_LISTEN_OPTIONS_INVALID](#fst_err_listen_options_invalid)
    - [FST_ERR_ERROR_HANDLER_NOT_FN](#fst_err_error_handler_not_fn)
    - [FST_ERR_ERROR_HANDLER_ALREADY_SET](#fst_err_error_handler_already_set)

### Error Handling In Node.js
<a id="error-handling"></a>

#### Uncaught Errors
In Node.js, uncaught errors can cause memory leaks, file descriptor leaks, and
other major production issues.
[Domains](https://nodejs.org/en/blog/community/domain-postmortem) were a failed
attempt to fix this.

Given that it is not possible to process all uncaught errors sensibly, the best
way to deal with them is to
[crash](https://nodejs.org/api/process.html#warning-using-uncaughtexception-correctly).

#### Catching Errors In Promises
When using promises, attach a `.catch()` handler synchronously.

### Errors In Fastify
Fastify follows an all-or-nothing approach and aims to be lean and optimal. The
developer is responsible for ensuring errors are handled properly.

#### Errors In Input Data
Most errors result from unexpected input data, so it is recommended to
[validate input data against a JSON schema](./Validation-and-Serialization.md).

#### Catching Uncaught Errors In Fastify
Fastify tries to catch as many uncaught errors as possible without hindering
performance. This includes:

1. synchronous routes, e.g. `app.get('/', () => { throw new Error('kaboom') })`
2. `async` routes, e.g. `app.get('/', async () => { throw new Error('kaboom')
   })`

In both cases, the error will be caught safely and routed to Fastify's default
error handler, resulting in a generic `500 Internal Server Error` response.

To customize this behavior, use
[`setErrorHandler`](./Server.md#seterrorhandler).

### Errors In Fastify Lifecycle Hooks And A Custom Error Handler

From the [Hooks documentation](./Hooks.md#manage-errors-from-a-hook):
> If you get an error during the execution of your hook, just pass it to
> `done()` and Fastify will automatically close the request and send the
> appropriate error code to the user.

When a custom error handler is defined through
[`setErrorHandler`](./Server.md#seterrorhandler), it will receive the error
passed to the `done()` callback or through other supported automatic error
handling mechanisms. If `setErrorHandler` is used multiple times, the error will
be routed to the most precedent handler within the error
[encapsulation context](./Encapsulation.md). Error handlers are fully
encapsulated, so a `setErrorHandler` call within a plugin will limit the error
handler to that plugin's context.

The root error handler is Fastify's generic error handler. This error handler
will use the headers and status code in the `Error` object, if they exist. The
headers and status code will not be automatically set if a custom error handler
is provided.

The following should be considered when using a custom error handler:

- `reply.send(data)` behaves as in [regular route handlers](./Reply.md#senddata)
  - objects are serialized, triggering the `preSerialization` lifecycle hook if
    defined
  - strings, buffers, and streams are sent to the client with appropriate headers
    (no serialization)

- Throwing a new error in a custom error handler will call the parent
  `errorHandler`.
  - The `onError` hook will be triggered once for the first error thrown
  - An error will not be triggered twice from a lifecycle hook. Fastify
    internally monitors error invocation to avoid infinite loops for errors
    thrown in the reply phases of the lifecycle (those after the route handler)

When using Fastify's custom error handling through
[`setErrorHandler`](./Server.md#seterrorhandler), be aware of how errors are
propagated between custom and default error handlers.

If a plugin's error handler re-throws an error that is not an instance of
[Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error),
it will not propagate to the parent context error handler. Instead, it will be
caught by the default error handler. This can be seen in the `/bad` route of the
example below.

To ensure consistent error handling, throw instances of `Error`. For example,
replace `throw 'foo'` with `throw new Error('foo')` in the `/bad` route to
ensure errors propagate through the custom error handling chain as intended.
This practice helps avoid potential pitfalls when working with custom error
handling in Fastify.

For example:
```js
const Fastify = require('fastify')

// Instantiate the framework
const fastify = Fastify({
  logger: true
})

// Register parent error handler
fastify.setErrorHandler((error, request, reply) => {
  reply.status(500).send({ ok: false })
})

fastify.register((app, options, next) => {
  // Register child error handler
  fastify.setErrorHandler((error, request, reply) => {
    throw error
  })

  fastify.get('/bad', async () => {
    // Throws a non-Error type, 'bar'
    throw 'foo'
  })

  fastify.get('/good', async () => {
    // Throws an Error instance, 'bar'
    throw new Error('bar')
  })

  next()
})

// Run the server
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is listening at ${address}
})
```

### Fastify Error Codes
<a id="fastify-error-codes"></a>

You can access `errorCodes` for mapping:
```js
// ESM
import { errorCodes } from 'fastify'

// CommonJS
const errorCodes = require('fastify').errorCodes
```

For example:
```js
const Fastify = require('fastify')

// Instantiate the framework
const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.get('/', function (request, reply) {
  reply.code('bad status code').send({ hello: 'world' })
})

fastify.setErrorHandler(function (error, request, reply) {
  if (error instanceof Fastify.errorCodes.FST_ERR_BAD_STATUS_CODE) {
    // Log error
    this.log.error(error)
    // Send error response
    reply.status(500).send({ ok: false })
  } else {
    // Fastify will use parent error handler to handle this
    reply.send(error)
  }
})

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})
```

Below is a table with all the error codes used by Fastify.

| Code | Description | How to solve | Discussion |
|------|-------------|--------------|------------|
| <a id="fst_err_not_found">FST_ERR_NOT_FOUND</a> | 404 Not Found | - | [#1168](https://github.com/fastify/fastify/pull/1168) |
| <a id="fst_err_options_not_obj">FST_ERR_OPTIONS_NOT_OBJ</a> | Fastify options wrongly specified. | Fastify options should be an object. | [#4554](https://github.com/fastify/fastify/pull/4554) |
| <a id="fst_err_qsp_not_fn">FST_ERR_QSP_NOT_FN</a> | QueryStringParser wrongly specified. | QueryStringParser option should be a function. | [#4554](https://github.com/fastify/fastify/pull/4554) |
| <a id="fst_err_schema_controller_bucket_opt_not_fn">FST_ERR_SCHEMA_CONTROLLER_BUCKET_OPT_NOT_FN</a> | SchemaController.bucket wrongly specified. | SchemaController.bucket option should be a function. | [#4554](https://github.com/fastify/fastify/pull/4554) |
| <a id="fst_err_schema_error_formatter_not_fn">FST_ERR_SCHEMA_ERROR_FORMATTER_NOT_FN</a> | SchemaErrorFormatter option wrongly specified. | SchemaErrorFormatter option should be a non async function. | [#4554](https://github.com/fastify/fastify/pull/4554) |
| <a id="fst_err_ajv_custom_options_opt_not_obj">FST_ERR_AJV_CUSTOM_OPTIONS_OPT_NOT_OBJ</a> | ajv.customOptions wrongly specified. | ajv.customOptions option should be an object. | [#4554](https://github.com/fastify/fastify/pull/4554) |
| <a id="fst_err_ajv_custom_options_opt_not_arr">FST_ERR_AJV_CUSTOM_OPTIONS_OPT_NOT_ARR</a> | ajv.plugins option wrongly specified. | ajv.plugins option should be an array. | [#4554](https://github.com/fastify/fastify/pull/4554) |
| <a id="fst_err_ctp_already_present">FST_ERR_CTP_ALREADY_PRESENT</a> | The parser for this content type was already registered. | Use a different content type or delete the already registered parser. | [#1168](https://github.com/fastify/fastify/pull/1168) |
| <a id="fst_err_ctp_invalid_type">FST_ERR_CTP_INVALID_TYPE</a> | `Content-Type` wrongly specified | The `Content-Type` should be a string. | [#1168](https://github.com/fastify/fastify/pull/1168) |
| <a id="fst_err_ctp_empty_type">FST_ERR_CTP_EMPTY_TYPE</a> | `Content-Type` is an empty string. | `Content-Type` cannot be an empty string. | [#1168](https://github.com/fastify/fastify/pull/1168) |
| <a id="fst_err_ctp_invalid_handler">FST_ERR_CTP_INVALID_HANDLER</a> | Invalid handler for the content type. | Use a different handler. | [#1168](https://github.com/fastify/fastify/pull/1168) |
| <a id="fst_err_ctp_invalid_parse_type">FST_ERR_CTP_INVALID_PARSE_TYPE</a> | The provided parse type is not supported. | Accepted values are <code>string</code> or <code>buffer</code>. | [#1168](https://github.com/fastify/fastify/pull/1168) |
| <a id="fst_err_ctp_body_too_large">FST_ERR_CTP_BODY_TOO_LARGE</a> | The request body is larger than the provided limit. | Increase the limit in the Fastify server instance setting: [bodyLimit](./Server.md#bodylimit) | [#1168](https://github.com/fastify/fastify/pull/1168) |
| <a id="fst_err_ctp_invalid_media_type">FST_ERR_CTP_INVALID_MEDIA_TYPE</a> | The received media type is not supported (i.e. there is no suitable `Content-Type` parser for it). | Use a different content type. | [#1168](https://github.com/fastify/fastify/pull/1168) |
| <a id="fst_err_ctp_invalid_content_length">FST_ERR_CTP_INVALID_CONTENT_LENGTH</a> | Request body size did not match <code>Content-Length</code>. | Check the request body size and the <code>Content-Length</code> header. | [#1168](https://github.com/fastify/fastify/pull/1168) |
| <a id="fst_err_ctp_empty_json_body">FST_ERR_CTP_EMPTY_JSON_BODY</a> | Body is not valid JSON but content-type is set to <code>application/json</code>. | Check if the request body is valid JSON. | [#5925](https://github.com/fastify/fastify/pull/5925) |
| <a id="fst_err_ctp_invalid_json_body">FST_ERR_CTP_INVALID_JSON_BODY</a> | Body cannot be empty when content-type is set to <code>application/json</code>. | Check the request body. | [#1253](https://github.com/fastify/fastify/pull/1253) |
| <a id="fst_err_ctp_instance_already_started">FST_ERR_CTP_INSTANCE_ALREADY_STARTED</a> | Fastify is already started. | - | [#4554](https://github.com/fastify/fastify/pull/4554) |
| <a id="fst_err_instance_already_listening">FST_ERR_INSTANCE_ALREADY_LISTENING</a> | Fastify instance is already listening. | - | [#4554](https://github.com/fastify/fastify/pull/4554) |
| <a id="fst_err_dec_already_present">FST_ERR_DEC_ALREADY_PRESENT</a> | A decorator with the same name is already registered. | Use a different decorator name. | [#1168](https://github.com/fastify/fastify/pull/1168) |
| <a id="fst_err_dec_dependency_invalid_type">FST_ERR_DEC_DEPENDENCY_INVALID_TYPE</a> | The dependencies of decorator must be of type `Array`. | Use an array for the dependencies. | [#3090](https://github.com/fastify/fastify/pull/3090) |
| <a id="fst_err_dec_missing_dependency">FST_ERR_DEC_MISSING_DEPENDENCY</a> | The decorator cannot be registered due to a missing dependency. | Register the missing dependency. | [#1168](https://github.com/fastify/fastify/pull/1168) |
| <a id="fst_err_dec_after_start">FST_ERR_DEC_AFTER_START</a> | The decorator cannot be added after start. | Add the decorator before starting the server. | [#2128](https://github.com/fastify/fastify/pull/2128) |
| <a id="fst_err_dec_reference_type">FST_ERR_DEC_REFERENCE_TYPE</a> | The decorator cannot be a reference type. | Define the decorator with a getter/setter interface or an empty decorator with a hook. | [#5462](https://github.com/fastify/fastify/pull/5462) |
| <a id="fst_err_dec_undeclared">FST_ERR_DEC_UNDECLARED</a> | An attempt was made to access a decorator that has not been declared. | Declare the decorator before using it. | [#5768](https://github.com/fastify/fastify/pull/5768)
| <a id="fst_err_hook_invalid_type">FST_ERR_HOOK_INVALID_TYPE</a> | The hook name must be a string. | Use a string for the hook name. | [#1168](https://github.com/fastify/fastify/pull/1168) |
| <a id="fst_err_hook_invalid_handler">FST_ERR_HOOK_INVALID_HANDLER</a> | The hook callback must be a function. | Use a function for the hook callback. | [#1168](https://github.com/fastify/fastify/pull/1168) |
| <a id="fst_err_hook_invalid_async_handler">FST_ERR_HOOK_INVALID_ASYNC_HANDLER</a> | Async function has too many arguments. Async hooks should not use the `done` argument. | Remove the `done` argument from the async hook. | [#4367](https://github.com/fastify/fastify/pull/4367) |
| <a id="fst_err_hook_not_supported">FST_ERR_HOOK_NOT_SUPPORTED</a> | The hook is not supported. | Use a supported hook. | [#4554](https://github.com/fastify/fastify/pull/4554) |
| <a id="fst_err_missing_middleware">FST_ERR_MISSING_MIDDLEWARE</a> | You must register a plugin for handling middlewares, visit [`Middleware`](./Middleware.md) for more info. | Register a plugin for handling middlewares. | [#2014](https://github.com/fastify/fastify/pull/2014) |
| <a id="fst_err_hook_timeout">FST_ERR_HOOK_TIMEOUT</a> | A callback for a hook timed out. | Increase the timeout for the hook. | [#3106](https://github.com/fastify/fastify/pull/3106) |
| <a id="fst_err_log_invalid_destination">FST_ERR_LOG_INVALID_DESTINATION</a> | The logger does not accept the specified destination. | Use a `'stream'` or a `'file'` as the destination. | [#1168](https://github.com/fastify/fastify/pull/1168) |
| <a id="fst_err_log_invalid_logger">FST_ERR_LOG_INVALID_LOGGER</a> | The logger should have all these methods: `'info'`, `'error'`, `'debug'`, `'fatal'`, `'warn'`, `'trace'`, `'child'`. | Use a logger with all the required methods. | [#4520](https://github.com/fastify/fastify/pull/4520) |
| <a id="fst_err_log_invalid_logger_instance">FST_ERR_LOG_INVALID_LOGGER_INSTANCE</a> | The `loggerInstance` only accepts a logger instance, not a configuration object. | To pass a configuration object, use `'logger'` instead. | [#5020](https://github.com/fastify/fastify/pull/5020) |
| <a id="fst_err_log_invalid_logger_config">FST_ERR_LOG_INVALID_LOGGER_CONFIG</a> | The logger option only accepts a configuration object, not a logger instance. | To pass an instance, use `'loggerInstance'` instead.  | [#5020](https://github.com/fastify/fastify/pull/5020) |
| <a id="fst_err_log_logger_and_logger_instance_provided">FST_ERR_LOG_LOGGER_AND_LOGGER_INSTANCE_PROVIDED</a> | You cannot provide both `'logger'` and `'loggerInstance'`. | Please provide only one option.  | [#5020](https://github.com/fastify/fastify/pull/5020) |
| <a id="fst_err_rep_invalid_payload_type">FST_ERR_REP_INVALID_PAYLOAD_TYPE</a> | Reply payload can be either a `string` or a `Buffer`. | Use a `string` or a `Buffer` for the payload. | [#1168](https://github.com/fastify/fastify/pull/1168) |
| <a id="fst_err_rep_response_body_consumed">FST_ERR_REP_RESPONSE_BODY_CONSUMED</a> | Using `Response` as reply payload, but the body is being consumed. | Make sure you don't consume the `Response.body` | [#5286](https://github.com/fastify/fastify/pull/5286) |
| <a id="fst_err_rep_readable_stream_locked">FST_ERR_REP_READABLE_STREAM_LOCKED</a> | Using `ReadableStream` as reply payload, but locked with another reader. | Make sure you don't call the `Readable.getReader` before sending or release lock with `reader.releaseLock()` before sending. | [#5920](https://github.com/fastify/fastify/pull/5920) |
| <a id="fst_err_rep_already_sent">FST_ERR_REP_ALREADY_SENT</a> | A response was already sent. | - | [#1336](https://github.com/fastify/fastify/pull/1336) |
| <a id="fst_err_rep_sent_value">FST_ERR_REP_SENT_VALUE</a> | The only possible value for `reply.sent` is `true`. | - | [#1336](https://github.com/fastify/fastify/pull/1336) |
| <a id="fst_err_send_inside_onerr">FST_ERR_SEND_INSIDE_ONERR</a> | You cannot use `send` inside the `onError` hook. | - | [#1348](https://github.com/fastify/fastify/pull/1348) |
| <a id="fst_err_send_undefined_err">FST_ERR_SEND_UNDEFINED_ERR</a> | Undefined error has occurred. | - | [#2074](https://github.com/fastify/fastify/pull/2074) |
| <a id="fst_err_bad_status_code">FST_ERR_BAD_STATUS_CODE</a> | The status code is not valid. | Use a valid status code. | [#2082](https://github.com/fastify/fastify/pull/2082) |
| <a id="fst_err_bad_trailer_name">FST_ERR_BAD_TRAILER_NAME</a> | Called `reply.trailer` with an invalid header name. | Use a valid header name. | [#3794](https://github.com/fastify/fastify/pull/3794) |
| <a id="fst_err_bad_trailer_value">FST_ERR_BAD_TRAILER_VALUE</a> | Called `reply.trailer` with an invalid type. Expected a function. | Use a function. | [#3794](https://github.com/fastify/fastify/pull/3794) |
| <a id="fst_err_failed_error_serialization">FST_ERR_FAILED_ERROR_SERIALIZATION</a> | Failed to serialize an error. | - | [#4601](https://github.com/fastify/fastify/pull/4601) |
| <a id="fst_err_missing_serialization_fn">FST_ERR_MISSING_SERIALIZATION_FN</a> | Missing serialization function. | Add a serialization function. | [#3970](https://github.com/fastify/fastify/pull/3970) |
| <a id="fst_err_missing_contenttype_serialization_fn">FST_ERR_MISSING_CONTENTTYPE_SERIALIZATION_FN</a> | Missing `Content-Type` serialization function. | Add a serialization function. | [#4264](https://github.com/fastify/fastify/pull/4264) |
| <a id="fst_err_req_invalid_validation_invocation">FST_ERR_REQ_INVALID_VALIDATION_INVOCATION</a> | Invalid validation invocation. Missing validation function for HTTP part nor schema provided. | Add a validation function. | [#3970](https://github.com/fastify/fastify/pull/3970) |
| <a id="fst_err_sch_missing_id">FST_ERR_SCH_MISSING_ID</a> | The schema provided does not have `$id` property. | Add a `$id` property. | [#1168](https://github.com/fastify/fastify/pull/1168) |
| <a id="fst_err_sch_already_present">FST_ERR_SCH_ALREADY_PRESENT</a> | A schema with the same `$id` already exists. | Use a different `$id`. | [#1168](https://github.com/fastify/fastify/pull/1168) |
| <a id="fst_err_sch_content_missing_schema">FST_ERR_SCH_CONTENT_MISSING_SCHEMA</a> | A schema is missing for the corresponding content type. | Add a schema. | [#4264](https://github.com/fastify/fastify/pull/4264) |
| <a id="fst_err_sch_duplicate">FST_ERR_SCH_DUPLICATE</a> | Schema with the same attribute already present! | Use a different attribute. | [#1954](https://github.com/fastify/fastify/pull/1954) |
| <a id="fst_err_sch_validation_build">FST_ERR_SCH_VALIDATION_BUILD</a> | The JSON schema provided for validation to a route is not valid. | Fix the JSON schema. | [#2023](https://github.com/fastify/fastify/pull/2023) |
| <a id="fst_err_sch_serialization_build">FST_ERR_SCH_SERIALIZATION_BUILD</a> | The JSON schema provided for serialization of a route response is not valid. | Fix the JSON schema. | [#2023](https://github.com/fastify/fastify/pull/2023) |
| <a id="fst_err_sch_response_schema_not_nested_2xx">FST_ERR_SCH_RESPONSE_SCHEMA_NOT_NESTED_2XX</a> | Response schemas should be nested under a valid status code (2XX). | Use a valid status code. | [#4554](https://github.com/fastify/fastify/pull/4554) |
| <a id="fst_err_init_opts_invalid">FST_ERR_INIT_OPTS_INVALID</a> | Invalid initialization options. | Use valid initialization options. | [#1471](https://github.com/fastify/fastify/pull/1471) |
| <a id="fst_err_force_close_connections_idle_not_available">FST_ERR_FORCE_CLOSE_CONNECTIONS_IDLE_NOT_AVAILABLE</a> | Cannot set forceCloseConnections to `idle` as your HTTP server does not support `closeIdleConnections` method. | Use a different value for `forceCloseConnections`. | [#3925](https://github.com/fastify/fastify/pull/3925) |
| <a id="fst_err_duplicated_route">FST_ERR_DUPLICATED_ROUTE</a> | The HTTP method already has a registered controller for that URL. | Use a different URL or register the controller for another HTTP method. | [#2954](https://github.com/fastify/fastify/pull/2954) |
| <a id="fst_err_bad_url">FST_ERR_BAD_URL</a> | The router received an invalid URL. | Use a valid URL. | [#2106](https://github.com/fastify/fastify/pull/2106) |
| <a id="fst_err_async_constraint">FST_ERR_ASYNC_CONSTRAINT</a> | The router received an error when using asynchronous constraints. | - | [#4323](https://github.com/fastify/fastify/pull/4323) |
| <a id="fst_err_invalid_url">FST_ERR_INVALID_URL</a> | URL must be a string. | Use a string for the URL. | [#3653](https://github.com/fastify/fastify/pull/3653) |
| <a id="fst_err_route_options_not_obj">FST_ERR_ROUTE_OPTIONS_NOT_OBJ</a> | Options for the route must be an object. | Use an object for the route options. | [#4554](https://github.com/fastify/fastify/pull/4554) |
| <a id="fst_err_route_duplicated_handler">FST_ERR_ROUTE_DUPLICATED_HANDLER</a> | Duplicate handler for the route is not allowed. | Use a different handler. | [#4554](https://github.com/fastify/fastify/pull/4554) |
| <a id="fst_err_route_handler_not_fn">FST_ERR_ROUTE_HANDLER_NOT_FN</a> | Handler for the route must be a function. | Use a function for the handler. | [#4554](https://github.com/fastify/fastify/pull/4554) |
| <a id="fst_err_route_missing_handler">FST_ERR_ROUTE_MISSING_HANDLER</a> | Missing handler function for the route. | Add a handler function. | [#4554](https://github.com/fastify/fastify/pull/4554) |
| <a id="fst_err_route_method_invalid">FST_ERR_ROUTE_METHOD_INVALID</a> | Method is not a valid value. | Use a valid value for the method. | [#4750](https://github.com/fastify/fastify/pull/4750) |
| <a id="fst_err_route_method_not_supported">FST_ERR_ROUTE_METHOD_NOT_SUPPORTED</a> | Method is not supported for the route. | Use a supported method. | [#4554](https://github.com/fastify/fastify/pull/4554) |
| <a id="fst_err_route_body_validation_schema_not_supported">FST_ERR_ROUTE_BODY_VALIDATION_SCHEMA_NOT_SUPPORTED</a> | Body validation schema route is not supported. | Use a different different method for the route. | [#4554](https://github.com/fastify/fastify/pull/4554) |
| <a id="fst_err_route_body_limit_option_not_int">FST_ERR_ROUTE_BODY_LIMIT_OPTION_NOT_INT</a> | `bodyLimit` option must be an integer. | Use an integer for the `bodyLimit` option. | [#4554](https://github.com/fastify/fastify/pull/4554) |
| <a id="fst_err_handler_timeout">FST_ERR_HANDLER_TIMEOUT</a> | Request timed out. | Increase the `handlerTimeout` option or optimize the handler. | - |
| <a id="fst_err_route_handler_timeout_option_not_int">FST_ERR_ROUTE_HANDLER_TIMEOUT_OPTION_NOT_INT</a> | `handlerTimeout` option must be a positive integer. | Use a positive integer for the `handlerTimeout` option. | - |
| <a id="fst_err_route_rewrite_not_str">FST_ERR_ROUTE_REWRITE_NOT_STR</a> | `rewriteUrl` needs to be of type `string`. | Use a string for the `rewriteUrl`. | [#4554](https://github.com/fastify/fastify/pull/4554) |
| <a id="fst_err_reopened_close_server">FST_ERR_REOPENED_CLOSE_SERVER</a> | Fastify has already been closed and cannot be reopened. | - | [#2415](https://github.com/fastify/fastify/pull/2415) |
| <a id="fst_err_reopened_server">FST_ERR_REOPENED_SERVER</a> | Fastify is already listening. | - | [#2415](https://github.com/fastify/fastify/pull/2415) |
| <a id="fst_err_plugin_version_mismatch">FST_ERR_PLUGIN_VERSION_MISMATCH</a> | Installed Fastify plugin mismatched expected version. | Use a compatible version of the plugin. | [#2549](https://github.com/fastify/fastify/pull/2549) |
| <a id="fst_err_plugin_callback_not_fn">FST_ERR_PLUGIN_CALLBACK_NOT_FN</a> | Callback for a hook is not a function. | Use a function for the callback. | [#3106](https://github.com/fastify/fastify/pull/3106) |
| <a id="fst_err_plugin_not_valid">FST_ERR_PLUGIN_NOT_VALID</a> | Plugin must be a function or a promise. | Use a function or a promise for the plugin. | [#3106](https://github.com/fastify/fastify/pull/3106) |
| <a id="fst_err_root_plg_booted">FST_ERR_ROOT_PLG_BOOTED</a> | Root plugin has already booted. | - | [#3106](https://github.com/fastify/fastify/pull/3106) |
| <a id="fst_err_parent_plugin_booted">FST_ERR_PARENT_PLUGIN_BOOTED</a> | Impossible to load plugin because the parent (mapped directly from `avvio`) | - | [#3106](https://github.com/fastify/fastify/pull/3106) |
| <a id="fst_err_plugin_timeout">FST_ERR_PLUGIN_TIMEOUT</a> | Plugin did not start in time. | Increase the timeout for the plugin. | [#3106](https://github.com/fastify/fastify/pull/3106) |
| <a id="fst_err_plugin_not_present_in_instance">FST_ERR_PLUGIN_NOT_PRESENT_IN_INSTANCE</a> | The decorator is not present in the instance. | - | [#4554](https://github.com/fastify/fastify/pull/4554) |
| <a id="fst_err_plugin_invalid_async_handler">FST_ERR_PLUGIN_INVALID_ASYNC_HANDLER</a> | The plugin being registered mixes async and callback styles. | - | [#5141](https://github.com/fastify/fastify/pull/5141) |
| <a id="fst_err_validation">FST_ERR_VALIDATION</a> | The Request failed the payload validation. | Check the request payload. | [#4824](https://github.com/fastify/fastify/pull/4824) |
| <a id="fst_err_listen_options_invalid">FST_ERR_LISTEN_OPTIONS_INVALID</a> | Invalid listen options. | Check the listen options. | [#4886](https://github.com/fastify/fastify/pull/4886) |
| <a id="fst_err_error_handler_not_fn">FST_ERR_ERROR_HANDLER_NOT_FN</a> | Error Handler must be a function | Provide a function to `setErrorHandler`. | [#5317](https://github.com/fastify/fastify/pull/5317) | <a id="fst_err_error_handler_already_set">FST_ERR_ERROR_HANDLER_ALREADY_SET</a> | Error Handler already set in this scope. Set `allowErrorHandlerOverride: true` to allow overriding. | By default, `setErrorHandler` can only be called once per encapsulation context. | [#6097](https://github.com/fastify/fastify/pull/6098) |
