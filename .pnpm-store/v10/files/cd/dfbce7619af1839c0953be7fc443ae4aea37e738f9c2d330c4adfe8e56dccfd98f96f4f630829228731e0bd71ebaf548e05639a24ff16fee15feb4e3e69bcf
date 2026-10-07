"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PluginLogger = exports.INTERNAL_ORIGINAL_CONSOLE = void 0;
exports.patchConsole = patchConsole;
exports.unpatchConsole = unpatchConsole;

function _events() {
  const data = require("@parcel/events");

  _events = function () {
    return data;
  };

  return data;
}

function _util() {
  const data = require("util");

  _util = function () {
    return data;
  };

  return data;
}

function _diagnostic() {
  const data = require("@parcel/diagnostic");

  _diagnostic = function () {
    return data;
  };

  return data;
}

class Logger {
  #logEmitter
  /*: ValueEmitter<LogEvent> */
  = new (_events().ValueEmitter)();

  onLog(cb) {
    return this.#logEmitter.addListener(cb);
  }

  verbose(diagnostic) {
    this.#logEmitter.emit({
      type: 'log',
      level: 'verbose',
      diagnostics: Array.isArray(diagnostic) ? diagnostic : [diagnostic]
    });
  }

  info(diagnostic) {
    this.log(diagnostic);
  }

  log(diagnostic) {
    this.#logEmitter.emit({
      type: 'log',
      level: 'info',
      diagnostics: Array.isArray(diagnostic) ? diagnostic : [diagnostic]
    });
  }

  warn(diagnostic) {
    this.#logEmitter.emit({
      type: 'log',
      level: 'warn',
      diagnostics: Array.isArray(diagnostic) ? diagnostic : [diagnostic]
    });
  }

  error(input, realOrigin) {
    let diagnostic = (0, _diagnostic().anyToDiagnostic)(input);

    if (typeof realOrigin === 'string') {
      diagnostic = Array.isArray(diagnostic) ? diagnostic.map(d => {
        return { ...d,
          origin: realOrigin
        };
      }) : { ...diagnostic,
        origin: realOrigin
      };
    }

    this.#logEmitter.emit({
      type: 'log',
      level: 'error',
      diagnostics: Array.isArray(diagnostic) ? diagnostic : [diagnostic]
    });
  }

  progress(message) {
    this.#logEmitter.emit({
      type: 'log',
      level: 'progress',
      message
    });
  }

}

const logger = new Logger();
var _default = logger;
/** @private */

exports.default = _default;

class PluginLogger {
  /** @private */

  /** @private */
  constructor(opts) {
    this.origin = opts.origin;
  }
  /** @private */


  updateOrigin(diagnostic) {
    return Array.isArray(diagnostic) ? diagnostic.map(d => {
      return { ...d,
        origin: this.origin
      };
    }) : { ...diagnostic,
      origin: this.origin
    };
  }

  verbose(diagnostic) {
    logger.verbose(this.updateOrigin(diagnostic));
  }

  info(diagnostic) {
    logger.info(this.updateOrigin(diagnostic));
  }

  log(diagnostic) {
    logger.log(this.updateOrigin(diagnostic));
  }

  warn(diagnostic) {
    logger.warn(this.updateOrigin(diagnostic));
  }

  error(input) {
    logger.error(input, this.origin);
  }
  /** @private */


  progress(message) {
    logger.progress(message);
  }

}
/** @private */


exports.PluginLogger = PluginLogger;
const INTERNAL_ORIGINAL_CONSOLE = { ...console
};
exports.INTERNAL_ORIGINAL_CONSOLE = INTERNAL_ORIGINAL_CONSOLE;
let consolePatched = false;
/**
 * Patch `console` APIs within workers to forward their messages to the Logger
 * at the appropriate levels.
 * @private
 */

function patchConsole() {
  // Skip if console is already patched...
  if (consolePatched) return;
  /* eslint-disable no-console */
  // $FlowFixMe

  console.log = console.info = (...messages) => {
    logger.info(messagesToDiagnostic(messages));
  }; // $FlowFixMe


  console.debug = (...messages) => {
    // TODO: dedicated debug level?
    logger.verbose(messagesToDiagnostic(messages));
  }; // $FlowFixMe


  console.warn = (...messages) => {
    logger.warn(messagesToDiagnostic(messages));
  }; // $FlowFixMe


  console.error = (...messages) => {
    logger.error(messagesToDiagnostic(messages));
  };
  /* eslint-enable no-console */


  consolePatched = true;
}
/** @private */


function unpatchConsole() {
  // Skip if console isn't patched...
  if (!consolePatched) return;
  /* eslint-disable no-console */
  // $FlowFixMe

  console.log = INTERNAL_ORIGINAL_CONSOLE.log; // $FlowFixMe

  console.info = INTERNAL_ORIGINAL_CONSOLE.info; // $FlowFixMe

  console.debug = INTERNAL_ORIGINAL_CONSOLE.debug; // $FlowFixMe

  console.warn = INTERNAL_ORIGINAL_CONSOLE.warn; // $FlowFixMe

  console.error = INTERNAL_ORIGINAL_CONSOLE.error;
  /* eslint-enable no-console */

  consolePatched = false;
}

function messagesToDiagnostic(messages) {
  if (messages.length === 1 && messages[0] instanceof Error) {
    let error = messages[0];
    let diagnostic = (0, _diagnostic().errorToDiagnostic)(error);

    if (Array.isArray(diagnostic)) {
      return diagnostic.map(d => {
        return { ...d,
          skipFormatting: true
        };
      });
    } else {
      return { ...diagnostic,
        skipFormatting: true
      };
    }
  } else {
    return {
      message: joinLogMessages(messages),
      origin: 'console',
      skipFormatting: true
    };
  }
}

function joinLogMessages(messages) {
  return messages.map(m => typeof m === 'string' ? m : (0, _util().inspect)(m)).join(' ');
}