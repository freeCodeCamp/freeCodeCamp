'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asyncToGenerator2;

function _load_asyncToGenerator() {
  return _asyncToGenerator2 = _interopRequireDefault(require('babel-runtime/helpers/asyncToGenerator'));
}

exports.stringifyLangArgs = stringifyLangArgs;

var _format;

function _load_format() {
  return _format = require('./format.js');
}

var _index;

function _load_index() {
  return _index = _interopRequireWildcard(require('./lang/index.js'));
}

var _isCi;

function _load_isCi() {
  return _isCi = _interopRequireDefault(require('is-ci'));
}

var _os;

function _load_os() {
  return _os = _interopRequireDefault(require('os'));
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import type {AuditMetadata, AuditActionRecommendation, AuditAdvisory, AuditResolution} from '../cli/commands/audit';

const util = require('util');
/* eslint no-unused-vars: 0 */

const EventEmitter = require('events').EventEmitter;

function stringifyLangArgs(args) {
  return args.map(function (val) {
    if (val != null && val.inspect) {
      return val.inspect();
    } else {
      try {
        const str = JSON.stringify(val) || val + '';
        // should match all literal line breaks and
        // "u001b" that follow an odd number of backslashes and convert them to ESC
        // we do this because the JSON.stringify process has escaped these characters
        return str.replace(/((?:^|[^\\])(?:\\{2})*)\\u001[bB]/g, '$1\u001b').replace(/[\\]r[\\]n|([\\])?[\\]n/g, (match, precededBacklash) => {
          // precededBacklash not null when "\n" is preceded by a backlash ("\\n")
          // match will be "\\n" and we don't replace it with os.EOL
          return precededBacklash ? match : (_os || _load_os()).default.EOL;
        });
      } catch (e) {
        return util.inspect(val);
      }
    }
  });
}

class BaseReporter {
  constructor(opts = {}) {
    const lang = 'en';
    this.language = lang;

    this.stdout = opts.stdout || process.stdout;
    this.stderr = opts.stderr || process.stderr;
    this.stdin = opts.stdin || this._getStandardInput();
    this.emoji = !!opts.emoji;
    this.nonInteractive = !!opts.nonInteractive;
    this.noProgress = !!opts.noProgress || (_isCi || _load_isCi()).default;
    this.isVerbose = !!opts.verbose;

    // $FlowFixMe: this is valid!
    this.isTTY = this.stdout.isTTY;

    this.peakMemory = 0;
    this.startTime = Date.now();
    this.format = (_format || _load_format()).defaultFormatter;
  }

  lang(key, ...args) {
    const msg = (_index || _load_index())[this.language][key] || (_index || _load_index()).en[key];
    if (!msg) {
      throw new ReferenceError(`No message defined for language key ${key}`);
    }

    // stringify args
    const stringifiedArgs = stringifyLangArgs(args);

    // replace $0 placeholders with args
    return msg.replace(/\$(\d+)/g, (str, i) => {
      return stringifiedArgs[i];
    });
  }

  /**
   * `stringifyLangArgs` run `JSON.stringify` on strings too causing
   * them to appear quoted. This marks them as "raw" and prevents
   * the quoting and escaping
   */
  rawText(str) {
    return {
      inspect() {
        return str;
      }
    };
  }

  verbose(msg) {
    if (this.isVerbose) {
      this._verbose(msg);
    }
  }

  verboseInspect(val) {
    if (this.isVerbose) {
      this._verboseInspect(val);
    }
  }

  _verbose(msg) {}
  _verboseInspect(val) {}

  _getStandardInput() {
    let standardInput;

    // Accessing stdin in a win32 headless process (e.g., Visual Studio) may throw an exception.
    try {
      standardInput = process.stdin;
    } catch (e) {
      console.warn(e.message);
      delete process.stdin;
      // $FlowFixMe: this is valid!
      process.stdin = new EventEmitter();
      standardInput = process.stdin;
    }

    return standardInput;
  }

  initPeakMemoryCounter() {
    this.checkPeakMemory();
    this.peakMemoryInterval = setInterval(() => {
      this.checkPeakMemory();
    }, 1000);
    // $FlowFixMe: Node's setInterval returns a Timeout, not a Number
    this.peakMemoryInterval.unref();
  }

  checkPeakMemory() {
    var _process$memoryUsage = process.memoryUsage();

    const heapTotal = _process$memoryUsage.heapTotal;

    if (heapTotal > this.peakMemory) {
      this.peakMemory = heapTotal;
    }
  }

  close() {
    if (this.peakMemoryInterval) {
      clearInterval(this.peakMemoryInterval);
      this.peakMemoryInterval = null;
    }
  }

  getTotalTime() {
    return Date.now() - this.startTime;
  }

  // TODO
  list(key, items, hints) {}

  // Outputs basic tree structure to console
  tree(key, obj, { force = false } = {}) {}

  // called whenever we begin a step in the CLI.
  step(current, total, message, emoji) {}

  // a error message has been triggered. this however does not always meant an abrupt
  // program end.
  error(message) {}

  // an info message has been triggered. this provides things like stats and diagnostics.
  info(message) {}

  // a warning message has been triggered.
  warn(message) {}

  // a success message has been triggered.
  success(message) {}

  // a simple log message
  // TODO: rethink the {force} parameter. In the meantime, please don't use it (cf comments in #4143).
  log(message, { force = false } = {}) {}

  // a shell command has been executed
  command(command) {}

  // inspect and pretty-print any value
  inspect(value) {}

  // the screen shown at the very start of the CLI
  header(command, pkg) {}

  // the screen shown at the very end of the CLI
  footer(showPeakMemory) {}

  // a table structure
  table(head, body) {}

  // render an activity spinner and return a function that will trigger an update
  activity() {
    return {
      tick(name) {},
      end() {}
    };
  }

  //
  activitySet(total, workers) {
    return {
      spinners: Array(workers).fill({
        clear() {},
        setPrefix() {},
        tick() {},
        end() {}
      }),
      end() {}
    };
  }

  //
  question(question, options = {}) {
    return Promise.reject(new Error('Not implemented'));
  }

  //
  questionAffirm(question) {
    var _this = this;

    return (0, (_asyncToGenerator2 || _load_asyncToGenerator()).default)(function* () {
      const condition = true; // trick eslint
      if (_this.nonInteractive) {
        return true;
      }

      while (condition) {
        let answer = yield _this.question(question);
        answer = answer.toLowerCase();

        if (answer === 'y' || answer === 'yes') {
          return true;
        }
        if (answer === 'n' || answer === 'no') {
          return false;
        }

        _this.error('Invalid answer for question');
      }

      return false;
    })();
  }

  // prompt the user to select an option from an array
  select(header, question, options) {
    return Promise.reject(new Error('Not implemented'));
  }

  // render a progress bar and return a function which when called will trigger an update
  progress(total) {
    return function () {};
  }

  // utility function to disable progress bar
  disableProgress() {
    this.noProgress = true;
  }

  //
  prompt(message, choices, options = {}) {
    return Promise.reject(new Error('Not implemented'));
  }
}
exports.default = BaseReporter;