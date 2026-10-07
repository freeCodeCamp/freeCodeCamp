'use strict';

var _consoleReporter;

function _load_consoleReporter() {
  return _consoleReporter = _interopRequireDefault(require('./reporters/console/console-reporter'));
}

var _conversion;

function _load_conversion() {
  return _conversion = require('./util/conversion.js');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultOptions = {
  emoji: true,
  peekMemoryCounter: false
};

/**
 * This code is based on yarn src/cli/index.js
 */
function createReporter(options = {}) {
  const reporter = new (_consoleReporter || _load_consoleReporter()).default({
    // $FlowFixMe
    emoji: options.emoji && process.stdout.isTTY,
    verbose: options.verbose,
    noProgress: options.noProgress,
    isSilent: (0, (_conversion || _load_conversion()).boolifyWithDefault)(process.env.YURNALIST_SILENT, false) || options.silent,
    nonInteractive: options.nonInteractive
  });

  if (options.peekMemoryCounter) {
    reporter.initPeakMemoryCounter();
  }

  return reporter;
}

const reporter = createReporter(defaultOptions);

function bindMethods(methods, instance) {
  return methods.reduce((result, name) => {
    try {
      /* $FlowFixMe: Indexible signature not found */
      result[name] = instance[name].bind(instance);
      return result;
    } catch (e) {
      throw new ReferenceError(`Unable to bind method: ${name}`);
    }
  }, {});
}

const boundMethods = bindMethods(['table', 'step', 'inspect', 'list', 'header', 'footer', 'log', 'success', 'error', 'info', 'command', 'warn', 'question', 'tree', 'activitySet', 'activity', 'select', 'progress', 'close', 'lang'], reporter);

module.exports = Object.assign({}, boundMethods, { createReporter });