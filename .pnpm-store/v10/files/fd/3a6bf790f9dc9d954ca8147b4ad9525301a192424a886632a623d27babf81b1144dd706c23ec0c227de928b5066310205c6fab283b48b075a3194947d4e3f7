'use strict'

module.exports = {
  buildSafeSonicBoom: require('./build-safe-sonic-boom.js'),
  createDate: require('./create-date.js'),
  deleteLogProperty: require('./delete-log-property.js'),
  filterLog: require('./filter-log.js'),
  formatTime: require('./format-time.js'),
  getPropertyValue: require('./get-property-value.js'),
  handleCustomLevelsNamesOpts: require('./handle-custom-levels-names-opts.js'),
  handleCustomLevelsOpts: require('./handle-custom-levels-opts.js'),
  interpretConditionals: require('./interpret-conditionals.js'),
  isObject: require('./is-object.js'),
  isValidDate: require('./is-valid-date.js'),
  joinLinesWithIndentation: require('./join-lines-with-indentation.js'),
  noop: require('./noop.js'),
  parseFactoryOptions: require('./parse-factory-options.js'),
  prettifyErrorLog: require('./prettify-error-log.js'),
  prettifyError: require('./prettify-error.js'),
  prettifyLevel: require('./prettify-level.js'),
  prettifyMessage: require('./prettify-message.js'),
  prettifyMetadata: require('./prettify-metadata.js'),
  prettifyObject: require('./prettify-object.js'),
  prettifyTime: require('./prettify-time.js'),
  splitPropertyKey: require('./split-property-key.js')
}

// The remainder of this file consists of jsdoc blocks that are difficult to
// determine a more appropriate "home" for. As an example, the blocks associated
// with custom prettifiers could live in either the `prettify-level`,
// `prettify-metadata`, or `prettify-time` files since they are the primary
// files where such code is used. But we want a central place to define common
// doc blocks, so we are picking this file as the answer.

/**
 * A hash of log property names mapped to prettifier functions. When the
 * incoming log data is being processed for prettification, any key on the log
 * that matches a key in a custom prettifiers hash will be prettified using
 * that matching custom prettifier. The value passed to the custom prettifier
 * will the value associated with the corresponding log key.
 *
 * The hash may contain any arbitrary keys for arbitrary log properties, but it
 * may also contain a set of predefined key names that map to well-known log
 * properties. These keys are:
 *
 * + `time` (for the timestamp field)
 * + `level` (for the level label field; value may be a level number instead
 * of a level label)
 * + `hostname`
 * + `pid`
 * + `name`
 * + `caller`
 *
 * @typedef {Object.<string, CustomPrettifierFunc>} CustomPrettifiers
 */

/**
 * A synchronous function to be used for prettifying a log property. It must
 * return a string.
 *
 * @typedef {function} CustomPrettifierFunc
 * @param {any} value The value to be prettified for the key associated with
 * the prettifier.
 * @returns {string}
 */

/**
 * A tokenized string that indicates how the prettified log line should be
 * formatted. Tokens are either log properties enclosed in curly braces, e.g.
 * `{levelLabel}`, `{pid}`, or `{req.url}`, or conditional directives in curly
 * braces. The only conditional directives supported are `if` and `end`, e.g.
 * `{if pid}{pid}{end}`; every `if` must have a matching `end`. Nested
 * conditions are not supported.
 *
 * @typedef {string} MessageFormatString
 *
 * @example
 * `{levelLabel} - {if pid}{pid} - {end}url:{req.url}`
 */

/**
 * A function that accepts a log object, name of the message key, and name of
 * the level label key and returns a formatted log line.
 *
 * Note: this function must be synchronous.
 *
 * @typedef {function} MessageFormatFunction
 * @param {object} log The log object to be processed.
 * @param {string} messageKey The name of the key in the `log` object that
 * contains the log message.
 * @param {string} levelLabel The name of the key in the `log` object that
 * contains the log level name.
 * @returns {string}
 *
 * @example
 * function (log, messageKey, levelLabel) {
 *   return `${log[levelLabel]} - ${log[messageKey]}`
 * }
 */
