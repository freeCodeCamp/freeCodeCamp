'use strict';

const {format} = require('util');

/**
 * Contains error codes, factory functions to create throwable error objects,
 * and warning/deprecation functions.
 * @module
 */

/**
 * process.emitWarning or a polyfill
 * @see https://nodejs.org/api/process.html#process_process_emitwarning_warning_options
 * @ignore
 */
const emitWarning = (msg, type) => {
  if (process.emitWarning) {
    process.emitWarning(msg, type);
  } else {
    /* istanbul ignore next */
    process.nextTick(function () {
      console.warn(type + ': ' + msg);
    });
  }
};

/**
 * Show a deprecation warning. Each distinct message is only displayed once.
 * Ignores empty messages.
 *
 * @param {string} [msg] - Warning to print
 * @private
 */
const deprecate = msg => {
  msg = String(msg);
  if (msg && !deprecate.cache[msg]) {
    deprecate.cache[msg] = true;
    emitWarning(msg, 'DeprecationWarning');
  }
};
deprecate.cache = {};

/**
 * Show a generic warning.
 * Ignores empty messages.
 *
 * @param {string} [msg] - Warning to print
 * @private
 */
const warn = msg => {
  if (msg) {
    emitWarning(msg);
  }
};

/**
 * When Mocha throws exceptions (or rejects `Promise`s), it attempts to assign a `code` property to the `Error` object, for easier handling. These are the potential values of `code`.
 * @public
 * @namespace
 * @memberof module:lib/errors
 */
var constants = {
  /**
   * An unrecoverable error.
   * @constant
   * @default
   */
  FATAL: 'ERR_MOCHA_FATAL',

  /**
   * The type of an argument to a function call is invalid
   * @constant
   * @default
   */
  INVALID_ARG_TYPE: 'ERR_MOCHA_INVALID_ARG_TYPE',

  /**
   * The value of an argument to a function call is invalid
   * @constant
   * @default
   */
  INVALID_ARG_VALUE: 'ERR_MOCHA_INVALID_ARG_VALUE',

  /**
   * Something was thrown, but it wasn't an `Error`
   * @constant
   * @default
   */
  INVALID_EXCEPTION: 'ERR_MOCHA_INVALID_EXCEPTION',

  /**
   * An interface (e.g., `Mocha.interfaces`) is unknown or invalid
   * @constant
   * @default
   */
  INVALID_INTERFACE: 'ERR_MOCHA_INVALID_INTERFACE',

  /**
   * A reporter (.e.g, `Mocha.reporters`) is unknown or invalid
   * @constant
   * @default
   */
  INVALID_REPORTER: 'ERR_MOCHA_INVALID_REPORTER',

  /**
   * `done()` was called twice in a `Test` or `Hook` callback
   * @constant
   * @default
   */
  MULTIPLE_DONE: 'ERR_MOCHA_MULTIPLE_DONE',

  /**
   * No files matched the pattern provided by the user
   * @constant
   * @default
   */
  NO_FILES_MATCH_PATTERN: 'ERR_MOCHA_NO_FILES_MATCH_PATTERN',

  /**
   * Known, but unsupported behavior of some kind
   * @constant
   * @default
   */
  UNSUPPORTED: 'ERR_MOCHA_UNSUPPORTED',

  /**
   * Invalid state transition occurring in `Mocha` instance
   * @constant
   * @default
   */
  INSTANCE_ALREADY_RUNNING: 'ERR_MOCHA_INSTANCE_ALREADY_RUNNING',

  /**
   * Invalid state transition occurring in `Mocha` instance
   * @constant
   * @default
   */
  INSTANCE_ALREADY_DISPOSED: 'ERR_MOCHA_INSTANCE_ALREADY_DISPOSED',

  /**
   * Use of `only()` w/ `--forbid-only` results in this error.
   * @constant
   * @default
   */
  FORBIDDEN_EXCLUSIVITY: 'ERR_MOCHA_FORBIDDEN_EXCLUSIVITY',

  /**
   * To be thrown when a user-defined plugin implementation (e.g., `mochaHooks`) is invalid
   * @constant
   * @default
   */
  INVALID_PLUGIN_IMPLEMENTATION: 'ERR_MOCHA_INVALID_PLUGIN_IMPLEMENTATION',

  /**
   * To be thrown when a builtin or third-party plugin definition (the _definition_ of `mochaHooks`) is invalid
   * @constant
   * @default
   */
  INVALID_PLUGIN_DEFINITION: 'ERR_MOCHA_INVALID_PLUGIN_DEFINITION',

  /**
   * When a runnable exceeds its allowed run time.
   * @constant
   * @default
   */
  TIMEOUT: 'ERR_MOCHA_TIMEOUT',

  /**
   * Input file is not able to be parsed
   * @constant
   * @default
   */
  UNPARSABLE_FILE: 'ERR_MOCHA_UNPARSABLE_FILE'
};

/**
 * A set containing all string values of all Mocha error constants, for use by {@link isMochaError}.
 * @private
 */
const MOCHA_ERRORS = new Set(Object.values(constants));

/**
 * Creates an error object to be thrown when no files to be tested could be found using specified pattern.
 *
 * @public
 * @static
 * @param {string} message - Error message to be displayed.
 * @param {string} pattern - User-specified argument value.
 * @returns {Error} instance detailing the error condition
 */
function createNoFilesMatchPatternError(message, pattern) {
  var err = new Error(message);
  err.code = constants.NO_FILES_MATCH_PATTERN;
  err.pattern = pattern;
  return err;
}

/**
 * Creates an error object to be thrown when the reporter specified in the options was not found.
 *
 * @public
 * @param {string} message - Error message to be displayed.
 * @param {string} reporter - User-specified reporter value.
 * @returns {Error} instance detailing the error condition
 */
function createInvalidReporterError(message, reporter) {
  var err = new TypeError(message);
  err.code = constants.INVALID_REPORTER;
  err.reporter = reporter;
  return err;
}

/**
 * Creates an error object to be thrown when the interface specified in the options was not found.
 *
 * @public
 * @static
 * @param {string} message - Error message to be displayed.
 * @param {string} ui - User-specified interface value.
 * @returns {Error} instance detailing the error condition
 */
function createInvalidInterfaceError(message, ui) {
  var err = new Error(message);
  err.code = constants.INVALID_INTERFACE;
  err.interface = ui;
  return err;
}

/**
 * Creates an error object to be thrown when a behavior, option, or parameter is unsupported.
 *
 * @public
 * @static
 * @param {string} message - Error message to be displayed.
 * @returns {Error} instance detailing the error condition
 */
function createUnsupportedError(message) {
  var err = new Error(message);
  err.code = constants.UNSUPPORTED;
  return err;
}

/**
 * Creates an error object to be thrown when an argument is missing.
 *
 * @public
 * @static
 * @param {string} message - Error message to be displayed.
 * @param {string} argument - Argument name.
 * @param {string} expected - Expected argument datatype.
 * @returns {Error} instance detailing the error condition
 */
function createMissingArgumentError(message, argument, expected) {
  return createInvalidArgumentTypeError(message, argument, expected);
}

/**
 * Creates an error object to be thrown when an argument did not use the supported type
 *
 * @public
 * @static
 * @param {string} message - Error message to be displayed.
 * @param {string} argument - Argument name.
 * @param {string} expected - Expected argument datatype.
 * @returns {Error} instance detailing the error condition
 */
function createInvalidArgumentTypeError(message, argument, expected) {
  var err = new TypeError(message);
  err.code = constants.INVALID_ARG_TYPE;
  err.argument = argument;
  err.expected = expected;
  err.actual = typeof argument;
  return err;
}

/**
 * Creates an error object to be thrown when an argument did not use the supported value
 *
 * @public
 * @static
 * @param {string} message - Error message to be displayed.
 * @param {string} argument - Argument name.
 * @param {string} value - Argument value.
 * @param {string} [reason] - Why value is invalid.
 * @returns {Error} instance detailing the error condition
 */
function createInvalidArgumentValueError(message, argument, value, reason) {
  var err = new TypeError(message);
  err.code = constants.INVALID_ARG_VALUE;
  err.argument = argument;
  err.value = value;
  err.reason = typeof reason !== 'undefined' ? reason : 'is invalid';
  return err;
}

/**
 * Creates an error object to be thrown when an exception was caught, but the `Error` is falsy or undefined.
 *
 * @public
 * @static
 * @param {string} message - Error message to be displayed.
 * @returns {Error} instance detailing the error condition
 */
function createInvalidExceptionError(message, value) {
  var err = new Error(message);
  err.code = constants.INVALID_EXCEPTION;
  err.valueType = typeof value;
  err.value = value;
  return err;
}

/**
 * Creates an error object to be thrown when an unrecoverable error occurs.
 *
 * @public
 * @static
 * @param {string} message - Error message to be displayed.
 * @returns {Error} instance detailing the error condition
 */
function createFatalError(message, value) {
  var err = new Error(message);
  err.code = constants.FATAL;
  err.valueType = typeof value;
  err.value = value;
  return err;
}

/**
 * Dynamically creates a plugin-type-specific error based on plugin type
 * @param {string} message - Error message
 * @param {"reporter"|"ui"} pluginType - Plugin type. Future: expand as needed
 * @param {string} [pluginId] - Name/path of plugin, if any
 * @throws When `pluginType` is not known
 * @public
 * @static
 * @returns {Error}
 */
function createInvalidLegacyPluginError(message, pluginType, pluginId) {
  switch (pluginType) {
    case 'reporter':
      return createInvalidReporterError(message, pluginId);
    case 'ui':
      return createInvalidInterfaceError(message, pluginId);
    default:
      throw new Error('unknown pluginType "' + pluginType + '"');
  }
}

/**
 * **DEPRECATED**.  Use {@link createInvalidLegacyPluginError} instead  Dynamically creates a plugin-type-specific error based on plugin type
 * @deprecated
 * @param {string} message - Error message
 * @param {"reporter"|"interface"} pluginType - Plugin type. Future: expand as needed
 * @param {string} [pluginId] - Name/path of plugin, if any
 * @throws When `pluginType` is not known
 * @public
 * @static
 * @returns {Error}
 */
function createInvalidPluginError(...args) {
  deprecate('Use createInvalidLegacyPluginError() instead');
  return createInvalidLegacyPluginError(...args);
}

/**
 * Creates an error object to be thrown when a mocha object's `run` method is executed while it is already disposed.
 * @param {string} message The error message to be displayed.
 * @param {boolean} cleanReferencesAfterRun the value of `cleanReferencesAfterRun`
 * @param {Mocha} instance the mocha instance that throw this error
 * @static
 */
function createMochaInstanceAlreadyDisposedError(
  message,
  cleanReferencesAfterRun,
  instance
) {
  var err = new Error(message);
  err.code = constants.INSTANCE_ALREADY_DISPOSED;
  err.cleanReferencesAfterRun = cleanReferencesAfterRun;
  err.instance = instance;
  return err;
}

/**
 * Creates an error object to be thrown when a mocha object's `run` method is called while a test run is in progress.
 * @param {string} message The error message to be displayed.
 * @static
 * @public
 */
function createMochaInstanceAlreadyRunningError(message, instance) {
  var err = new Error(message);
  err.code = constants.INSTANCE_ALREADY_RUNNING;
  err.instance = instance;
  return err;
}

/**
 * Creates an error object to be thrown when done() is called multiple times in a test
 *
 * @public
 * @param {Runnable} runnable - Original runnable
 * @param {Error} [originalErr] - Original error, if any
 * @returns {Error} instance detailing the error condition
 * @static
 */
function createMultipleDoneError(runnable, originalErr) {
  var title;
  try {
    title = format('<%s>', runnable.fullTitle());
    if (runnable.parent.root) {
      title += ' (of root suite)';
    }
  } catch (ignored) {
    title = format('<%s> (of unknown suite)', runnable.title);
  }
  var message = format(
    'done() called multiple times in %s %s',
    runnable.type ? runnable.type : 'unknown runnable',
    title
  );
  if (runnable.file) {
    message += format(' of file %s', runnable.file);
  }
  if (originalErr) {
    message += format('; in addition, done() received error: %s', originalErr);
  }

  var err = new Error(message);
  err.code = constants.MULTIPLE_DONE;
  err.valueType = typeof originalErr;
  err.value = originalErr;
  return err;
}

/**
 * Creates an error object to be thrown when `.only()` is used with
 * `--forbid-only`.
 * @static
 * @public
 * @param {Mocha} mocha - Mocha instance
 * @returns {Error} Error with code {@link constants.FORBIDDEN_EXCLUSIVITY}
 */
function createForbiddenExclusivityError(mocha) {
  var err = new Error(
    mocha.isWorker
      ? '`.only` is not supported in parallel mode'
      : '`.only` forbidden by --forbid-only'
  );
  err.code = constants.FORBIDDEN_EXCLUSIVITY;
  return err;
}

/**
 * Creates an error object to be thrown when a plugin definition is invalid
 * @static
 * @param {string} msg - Error message
 * @param {PluginDefinition} [pluginDef] - Problematic plugin definition
 * @public
 * @returns {Error} Error with code {@link constants.INVALID_PLUGIN_DEFINITION}
 */
function createInvalidPluginDefinitionError(msg, pluginDef) {
  const err = new Error(msg);
  err.code = constants.INVALID_PLUGIN_DEFINITION;
  err.pluginDef = pluginDef;
  return err;
}

/**
 * Creates an error object to be thrown when a plugin implementation (user code) is invalid
 * @static
 * @param {string} msg - Error message
 * @param {Object} [opts] - Plugin definition and user-supplied implementation
 * @param {PluginDefinition} [opts.pluginDef] - Plugin Definition
 * @param {*} [opts.pluginImpl] - Plugin Implementation (user-supplied)
 * @public
 * @returns {Error} Error with code {@link constants.INVALID_PLUGIN_DEFINITION}
 */
function createInvalidPluginImplementationError(
  msg,
  {pluginDef, pluginImpl} = {}
) {
  const err = new Error(msg);
  err.code = constants.INVALID_PLUGIN_IMPLEMENTATION;
  err.pluginDef = pluginDef;
  err.pluginImpl = pluginImpl;
  return err;
}

/**
 * Creates an error object to be thrown when a runnable exceeds its allowed run time.
 * @static
 * @param {string} msg - Error message
 * @param {number} [timeout] - Timeout in ms
 * @param {string} [file] - File, if given
 * @returns {MochaTimeoutError}
 */
function createTimeoutError(msg, timeout, file) {
  const err = new Error(msg);
  err.code = constants.TIMEOUT;
  err.timeout = timeout;
  err.file = file;
  return err;
}

/**
 * Creates an error object to be thrown when file is unparsable
 * @public
 * @static
 * @param {string} message - Error message to be displayed.
 * @param {string} filename - File name
 * @returns {Error} Error with code {@link constants.UNPARSABLE_FILE}
 */
function createUnparsableFileError(message, filename) {
  var err = new Error(message);
  err.code = constants.UNPARSABLE_FILE;
  return err;
}

/**
 * Returns `true` if an error came out of Mocha.
 * _Can suffer from false negatives, but not false positives._
 * @static
 * @public
 * @param {*} err - Error, or anything
 * @returns {boolean}
 */
const isMochaError = err =>
  Boolean(err && typeof err === 'object' && MOCHA_ERRORS.has(err.code));

module.exports = {
  constants,
  createFatalError,
  createForbiddenExclusivityError,
  createInvalidArgumentTypeError,
  createInvalidArgumentValueError,
  createInvalidExceptionError,
  createInvalidInterfaceError,
  createInvalidLegacyPluginError,
  createInvalidPluginDefinitionError,
  createInvalidPluginError,
  createInvalidPluginImplementationError,
  createInvalidReporterError,
  createMissingArgumentError,
  createMochaInstanceAlreadyDisposedError,
  createMochaInstanceAlreadyRunningError,
  createMultipleDoneError,
  createNoFilesMatchPatternError,
  createTimeoutError,
  createUnparsableFileError,
  createUnsupportedError,
  deprecate,
  isMochaError,
  warn
};

/**
 * The error thrown when a Runnable times out
 * @memberof module:lib/errors
 * @typedef {Error} MochaTimeoutError
 * @property {constants.TIMEOUT} code - Error code
 * @property {number?} timeout Timeout in ms
 * @property {string?} file Filepath, if given
 */
