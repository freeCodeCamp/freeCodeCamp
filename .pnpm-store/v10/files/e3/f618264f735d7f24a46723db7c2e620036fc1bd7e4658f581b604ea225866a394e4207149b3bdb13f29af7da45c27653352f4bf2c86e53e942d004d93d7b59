import { createRequire as __prettierCreateRequire } from "module";
import { fileURLToPath as __prettierFileUrlToPath } from "url";
import { dirname as __prettierDirname } from "path";
const require = __prettierCreateRequire(import.meta.url);
const __filename = __prettierFileUrlToPath(import.meta.url);
const __dirname = __prettierDirname(__filename);

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/fast-glob/out/utils/array.js
var require_array = __commonJS({
  "node_modules/fast-glob/out/utils/array.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.splitWhen = exports.flatten = void 0;
    function flatten(items) {
      return items.reduce((collection, item) => [].concat(collection, item), []);
    }
    exports.flatten = flatten;
    function splitWhen(items, predicate) {
      const result = [[]];
      let groupIndex = 0;
      for (const item of items) {
        if (predicate(item)) {
          groupIndex++;
          result[groupIndex] = [];
        } else {
          result[groupIndex].push(item);
        }
      }
      return result;
    }
    exports.splitWhen = splitWhen;
  }
});

// node_modules/fast-glob/out/utils/errno.js
var require_errno = __commonJS({
  "node_modules/fast-glob/out/utils/errno.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEnoentCodeError = void 0;
    function isEnoentCodeError(error) {
      return error.code === "ENOENT";
    }
    exports.isEnoentCodeError = isEnoentCodeError;
  }
});

// node_modules/fast-glob/out/utils/fs.js
var require_fs = __commonJS({
  "node_modules/fast-glob/out/utils/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDirentFromStats = void 0;
    var DirentFromStats = class {
      constructor(name, stats) {
        this.name = name;
        this.isBlockDevice = stats.isBlockDevice.bind(stats);
        this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
        this.isDirectory = stats.isDirectory.bind(stats);
        this.isFIFO = stats.isFIFO.bind(stats);
        this.isFile = stats.isFile.bind(stats);
        this.isSocket = stats.isSocket.bind(stats);
        this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
      }
    };
    function createDirentFromStats(name, stats) {
      return new DirentFromStats(name, stats);
    }
    exports.createDirentFromStats = createDirentFromStats;
  }
});

// node_modules/fast-glob/out/utils/path.js
var require_path = __commonJS({
  "node_modules/fast-glob/out/utils/path.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertPosixPathToPattern = exports.convertWindowsPathToPattern = exports.convertPathToPattern = exports.escapePosixPath = exports.escapeWindowsPath = exports.escape = exports.removeLeadingDotSegment = exports.makeAbsolute = exports.unixify = void 0;
    var os = __require("os");
    var path15 = __require("path");
    var IS_WINDOWS_PLATFORM = os.platform() === "win32";
    var LEADING_DOT_SEGMENT_CHARACTERS_COUNT = 2;
    var POSIX_UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\()|\\(?![!()*+?@[\]{|}]))/g;
    var WINDOWS_UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()[\]{}]|^!|[!+@](?=\())/g;
    var DOS_DEVICE_PATH_RE = /^\\\\([.?])/;
    var WINDOWS_BACKSLASHES_RE = /\\(?![!()+@[\]{}])/g;
    function unixify(filepath) {
      return filepath.replace(/\\/g, "/");
    }
    exports.unixify = unixify;
    function makeAbsolute(cwd, filepath) {
      return path15.resolve(cwd, filepath);
    }
    exports.makeAbsolute = makeAbsolute;
    function removeLeadingDotSegment(entry) {
      if (entry.charAt(0) === ".") {
        const secondCharactery = entry.charAt(1);
        if (secondCharactery === "/" || secondCharactery === "\\") {
          return entry.slice(LEADING_DOT_SEGMENT_CHARACTERS_COUNT);
        }
      }
      return entry;
    }
    exports.removeLeadingDotSegment = removeLeadingDotSegment;
    exports.escape = IS_WINDOWS_PLATFORM ? escapeWindowsPath : escapePosixPath;
    function escapeWindowsPath(pattern) {
      return pattern.replace(WINDOWS_UNESCAPED_GLOB_SYMBOLS_RE, "\\$2");
    }
    exports.escapeWindowsPath = escapeWindowsPath;
    function escapePosixPath(pattern) {
      return pattern.replace(POSIX_UNESCAPED_GLOB_SYMBOLS_RE, "\\$2");
    }
    exports.escapePosixPath = escapePosixPath;
    exports.convertPathToPattern = IS_WINDOWS_PLATFORM ? convertWindowsPathToPattern : convertPosixPathToPattern;
    function convertWindowsPathToPattern(filepath) {
      return escapeWindowsPath(filepath).replace(DOS_DEVICE_PATH_RE, "//$1").replace(WINDOWS_BACKSLASHES_RE, "/");
    }
    exports.convertWindowsPathToPattern = convertWindowsPathToPattern;
    function convertPosixPathToPattern(filepath) {
      return escapePosixPath(filepath);
    }
    exports.convertPosixPathToPattern = convertPosixPathToPattern;
  }
});

// node_modules/is-extglob/index.js
var require_is_extglob = __commonJS({
  "node_modules/is-extglob/index.js"(exports, module) {
    module.exports = function isExtglob(str) {
      if (typeof str !== "string" || str === "") {
        return false;
      }
      var match;
      while (match = /(\\).|([@?!+*]\(.*\))/g.exec(str)) {
        if (match[2]) return true;
        str = str.slice(match.index + match[0].length);
      }
      return false;
    };
  }
});

// node_modules/is-glob/index.js
var require_is_glob = __commonJS({
  "node_modules/is-glob/index.js"(exports, module) {
    var isExtglob = require_is_extglob();
    var chars = { "{": "}", "(": ")", "[": "]" };
    var strictCheck = function(str) {
      if (str[0] === "!") {
        return true;
      }
      var index = 0;
      var pipeIndex = -2;
      var closeSquareIndex = -2;
      var closeCurlyIndex = -2;
      var closeParenIndex = -2;
      var backSlashIndex = -2;
      while (index < str.length) {
        if (str[index] === "*") {
          return true;
        }
        if (str[index + 1] === "?" && /[\].+)]/.test(str[index])) {
          return true;
        }
        if (closeSquareIndex !== -1 && str[index] === "[" && str[index + 1] !== "]") {
          if (closeSquareIndex < index) {
            closeSquareIndex = str.indexOf("]", index);
          }
          if (closeSquareIndex > index) {
            if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
              return true;
            }
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
              return true;
            }
          }
        }
        if (closeCurlyIndex !== -1 && str[index] === "{" && str[index + 1] !== "}") {
          closeCurlyIndex = str.indexOf("}", index);
          if (closeCurlyIndex > index) {
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeCurlyIndex) {
              return true;
            }
          }
        }
        if (closeParenIndex !== -1 && str[index] === "(" && str[index + 1] === "?" && /[:!=]/.test(str[index + 2]) && str[index + 3] !== ")") {
          closeParenIndex = str.indexOf(")", index);
          if (closeParenIndex > index) {
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
              return true;
            }
          }
        }
        if (pipeIndex !== -1 && str[index] === "(" && str[index + 1] !== "|") {
          if (pipeIndex < index) {
            pipeIndex = str.indexOf("|", index);
          }
          if (pipeIndex !== -1 && str[pipeIndex + 1] !== ")") {
            closeParenIndex = str.indexOf(")", pipeIndex);
            if (closeParenIndex > pipeIndex) {
              backSlashIndex = str.indexOf("\\", pipeIndex);
              if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
                return true;
              }
            }
          }
        }
        if (str[index] === "\\") {
          var open = str[index + 1];
          index += 2;
          var close = chars[open];
          if (close) {
            var n = str.indexOf(close, index);
            if (n !== -1) {
              index = n + 1;
            }
          }
          if (str[index] === "!") {
            return true;
          }
        } else {
          index++;
        }
      }
      return false;
    };
    var relaxedCheck = function(str) {
      if (str[0] === "!") {
        return true;
      }
      var index = 0;
      while (index < str.length) {
        if (/[*?{}()[\]]/.test(str[index])) {
          return true;
        }
        if (str[index] === "\\") {
          var open = str[index + 1];
          index += 2;
          var close = chars[open];
          if (close) {
            var n = str.indexOf(close, index);
            if (n !== -1) {
              index = n + 1;
            }
          }
          if (str[index] === "!") {
            return true;
          }
        } else {
          index++;
        }
      }
      return false;
    };
    module.exports = function isGlob(str, options8) {
      if (typeof str !== "string" || str === "") {
        return false;
      }
      if (isExtglob(str)) {
        return true;
      }
      var check2 = strictCheck;
      if (options8 && options8.strict === false) {
        check2 = relaxedCheck;
      }
      return check2(str);
    };
  }
});

// node_modules/fast-glob/node_modules/glob-parent/index.js
var require_glob_parent = __commonJS({
  "node_modules/fast-glob/node_modules/glob-parent/index.js"(exports, module) {
    "use strict";
    var isGlob = require_is_glob();
    var pathPosixDirname = __require("path").posix.dirname;
    var isWin32 = __require("os").platform() === "win32";
    var slash2 = "/";
    var backslash = /\\/g;
    var enclosure = /[\{\[].*[\}\]]$/;
    var globby = /(^|[^\\])([\{\[]|\([^\)]+$)/;
    var escaped = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
    module.exports = function globParent(str, opts) {
      var options8 = Object.assign({ flipBackslashes: true }, opts);
      if (options8.flipBackslashes && isWin32 && str.indexOf(slash2) < 0) {
        str = str.replace(backslash, slash2);
      }
      if (enclosure.test(str)) {
        str += slash2;
      }
      str += "a";
      do {
        str = pathPosixDirname(str);
      } while (isGlob(str) || globby.test(str));
      return str.replace(escaped, "$1");
    };
  }
});

// node_modules/braces/lib/utils.js
var require_utils = __commonJS({
  "node_modules/braces/lib/utils.js"(exports) {
    "use strict";
    exports.isInteger = (num) => {
      if (typeof num === "number") {
        return Number.isInteger(num);
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isInteger(Number(num));
      }
      return false;
    };
    exports.find = (node, type) => node.nodes.find((node2) => node2.type === type);
    exports.exceedsLimit = (min, max, step = 1, limit) => {
      if (limit === false) return false;
      if (!exports.isInteger(min) || !exports.isInteger(max)) return false;
      return (Number(max) - Number(min)) / Number(step) >= limit;
    };
    exports.escapeNode = (block, n = 0, type) => {
      const node = block.nodes[n];
      if (!node) return;
      if (type && node.type === type || node.type === "open" || node.type === "close") {
        if (node.escaped !== true) {
          node.value = "\\" + node.value;
          node.escaped = true;
        }
      }
    };
    exports.encloseBrace = (node) => {
      if (node.type !== "brace") return false;
      if (node.commas >> 0 + node.ranges >> 0 === 0) {
        node.invalid = true;
        return true;
      }
      return false;
    };
    exports.isInvalidBrace = (block) => {
      if (block.type !== "brace") return false;
      if (block.invalid === true || block.dollar) return true;
      if (block.commas >> 0 + block.ranges >> 0 === 0) {
        block.invalid = true;
        return true;
      }
      if (block.open !== true || block.close !== true) {
        block.invalid = true;
        return true;
      }
      return false;
    };
    exports.isOpenOrClose = (node) => {
      if (node.type === "open" || node.type === "close") {
        return true;
      }
      return node.open === true || node.close === true;
    };
    exports.reduce = (nodes) => nodes.reduce((acc, node) => {
      if (node.type === "text") acc.push(node.value);
      if (node.type === "range") node.type = "text";
      return acc;
    }, []);
    exports.flatten = (...args) => {
      const result = [];
      const flat = (arr) => {
        for (let i = 0; i < arr.length; i++) {
          const ele = arr[i];
          if (Array.isArray(ele)) {
            flat(ele);
            continue;
          }
          if (ele !== void 0) {
            result.push(ele);
          }
        }
        return result;
      };
      flat(args);
      return result;
    };
  }
});

// node_modules/braces/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/braces/lib/stringify.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    module.exports = (ast, options8 = {}) => {
      const stringify2 = (node, parent = {}) => {
        const invalidBlock = options8.escapeInvalid && utils.isInvalidBrace(parent);
        const invalidNode = node.invalid === true && options8.escapeInvalid === true;
        let output = "";
        if (node.value) {
          if ((invalidBlock || invalidNode) && utils.isOpenOrClose(node)) {
            return "\\" + node.value;
          }
          return node.value;
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes) {
          for (const child of node.nodes) {
            output += stringify2(child);
          }
        }
        return output;
      };
      return stringify2(ast);
    };
  }
});

// node_modules/is-number/index.js
var require_is_number = __commonJS({
  "node_modules/is-number/index.js"(exports, module) {
    "use strict";
    module.exports = function(num) {
      if (typeof num === "number") {
        return num - num === 0;
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
      }
      return false;
    };
  }
});

// node_modules/to-regex-range/index.js
var require_to_regex_range = __commonJS({
  "node_modules/to-regex-range/index.js"(exports, module) {
    "use strict";
    var isNumber = require_is_number();
    var toRegexRange = (min, max, options8) => {
      if (isNumber(min) === false) {
        throw new TypeError("toRegexRange: expected the first argument to be a number");
      }
      if (max === void 0 || min === max) {
        return String(min);
      }
      if (isNumber(max) === false) {
        throw new TypeError("toRegexRange: expected the second argument to be a number.");
      }
      let opts = { relaxZeros: true, ...options8 };
      if (typeof opts.strictZeros === "boolean") {
        opts.relaxZeros = opts.strictZeros === false;
      }
      let relax = String(opts.relaxZeros);
      let shorthand = String(opts.shorthand);
      let capture = String(opts.capture);
      let wrap = String(opts.wrap);
      let cacheKey = min + ":" + max + "=" + relax + shorthand + capture + wrap;
      if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
        return toRegexRange.cache[cacheKey].result;
      }
      let a = Math.min(min, max);
      let b = Math.max(min, max);
      if (Math.abs(a - b) === 1) {
        let result = min + "|" + max;
        if (opts.capture) {
          return `(${result})`;
        }
        if (opts.wrap === false) {
          return result;
        }
        return `(?:${result})`;
      }
      let isPadded = hasPadding(min) || hasPadding(max);
      let state = { min, max, a, b };
      let positives = [];
      let negatives = [];
      if (isPadded) {
        state.isPadded = isPadded;
        state.maxLen = String(state.max).length;
      }
      if (a < 0) {
        let newMin = b < 0 ? Math.abs(b) : 1;
        negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
        a = state.a = 0;
      }
      if (b >= 0) {
        positives = splitToPatterns(a, b, state, opts);
      }
      state.negatives = negatives;
      state.positives = positives;
      state.result = collatePatterns(negatives, positives, opts);
      if (opts.capture === true) {
        state.result = `(${state.result})`;
      } else if (opts.wrap !== false && positives.length + negatives.length > 1) {
        state.result = `(?:${state.result})`;
      }
      toRegexRange.cache[cacheKey] = state;
      return state.result;
    };
    function collatePatterns(neg, pos2, options8) {
      let onlyNegative = filterPatterns(neg, pos2, "-", false, options8) || [];
      let onlyPositive = filterPatterns(pos2, neg, "", false, options8) || [];
      let intersected = filterPatterns(neg, pos2, "-?", true, options8) || [];
      let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
      return subpatterns.join("|");
    }
    function splitToRanges(min, max) {
      let nines = 1;
      let zeros = 1;
      let stop = countNines(min, nines);
      let stops = /* @__PURE__ */ new Set([max]);
      while (min <= stop && stop <= max) {
        stops.add(stop);
        nines += 1;
        stop = countNines(min, nines);
      }
      stop = countZeros(max + 1, zeros) - 1;
      while (min < stop && stop <= max) {
        stops.add(stop);
        zeros += 1;
        stop = countZeros(max + 1, zeros) - 1;
      }
      stops = [...stops];
      stops.sort(compare);
      return stops;
    }
    function rangeToPattern(start, stop, options8) {
      if (start === stop) {
        return { pattern: start, count: [], digits: 0 };
      }
      let zipped = zip(start, stop);
      let digits = zipped.length;
      let pattern = "";
      let count = 0;
      for (let i = 0; i < digits; i++) {
        let [startDigit, stopDigit] = zipped[i];
        if (startDigit === stopDigit) {
          pattern += startDigit;
        } else if (startDigit !== "0" || stopDigit !== "9") {
          pattern += toCharacterClass(startDigit, stopDigit, options8);
        } else {
          count++;
        }
      }
      if (count) {
        pattern += options8.shorthand === true ? "\\d" : "[0-9]";
      }
      return { pattern, count: [count], digits };
    }
    function splitToPatterns(min, max, tok, options8) {
      let ranges = splitToRanges(min, max);
      let tokens = [];
      let start = min;
      let prev;
      for (let i = 0; i < ranges.length; i++) {
        let max2 = ranges[i];
        let obj = rangeToPattern(String(start), String(max2), options8);
        let zeros = "";
        if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
          if (prev.count.length > 1) {
            prev.count.pop();
          }
          prev.count.push(obj.count[0]);
          prev.string = prev.pattern + toQuantifier(prev.count);
          start = max2 + 1;
          continue;
        }
        if (tok.isPadded) {
          zeros = padZeros(max2, tok, options8);
        }
        obj.string = zeros + obj.pattern + toQuantifier(obj.count);
        tokens.push(obj);
        start = max2 + 1;
        prev = obj;
      }
      return tokens;
    }
    function filterPatterns(arr, comparison, prefix, intersection, options8) {
      let result = [];
      for (let ele of arr) {
        let { string } = ele;
        if (!intersection && !contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
        if (intersection && contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
      }
      return result;
    }
    function zip(a, b) {
      let arr = [];
      for (let i = 0; i < a.length; i++) arr.push([a[i], b[i]]);
      return arr;
    }
    function compare(a, b) {
      return a > b ? 1 : b > a ? -1 : 0;
    }
    function contains(arr, key2, val) {
      return arr.some((ele) => ele[key2] === val);
    }
    function countNines(min, len) {
      return Number(String(min).slice(0, -len) + "9".repeat(len));
    }
    function countZeros(integer, zeros) {
      return integer - integer % Math.pow(10, zeros);
    }
    function toQuantifier(digits) {
      let [start = 0, stop = ""] = digits;
      if (stop || start > 1) {
        return `{${start + (stop ? "," + stop : "")}}`;
      }
      return "";
    }
    function toCharacterClass(a, b, options8) {
      return `[${a}${b - a === 1 ? "" : "-"}${b}]`;
    }
    function hasPadding(str) {
      return /^-?(0+)\d/.test(str);
    }
    function padZeros(value, tok, options8) {
      if (!tok.isPadded) {
        return value;
      }
      let diff = Math.abs(tok.maxLen - String(value).length);
      let relax = options8.relaxZeros !== false;
      switch (diff) {
        case 0:
          return "";
        case 1:
          return relax ? "0?" : "0";
        case 2:
          return relax ? "0{0,2}" : "00";
        default: {
          return relax ? `0{0,${diff}}` : `0{${diff}}`;
        }
      }
    }
    toRegexRange.cache = {};
    toRegexRange.clearCache = () => toRegexRange.cache = {};
    module.exports = toRegexRange;
  }
});

// node_modules/fill-range/index.js
var require_fill_range = __commonJS({
  "node_modules/fill-range/index.js"(exports, module) {
    "use strict";
    var util2 = __require("util");
    var toRegexRange = require_to_regex_range();
    var isObject2 = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    var transform = (toNumber) => {
      return (value) => toNumber === true ? Number(value) : String(value);
    };
    var isValidValue = (value) => {
      return typeof value === "number" || typeof value === "string" && value !== "";
    };
    var isNumber = (num) => Number.isInteger(+num);
    var zeros = (input) => {
      let value = `${input}`;
      let index = -1;
      if (value[0] === "-") value = value.slice(1);
      if (value === "0") return false;
      while (value[++index] === "0") ;
      return index > 0;
    };
    var stringify2 = (start, end, options8) => {
      if (typeof start === "string" || typeof end === "string") {
        return true;
      }
      return options8.stringify === true;
    };
    var pad = (input, maxLength, toNumber) => {
      if (maxLength > 0) {
        let dash = input[0] === "-" ? "-" : "";
        if (dash) input = input.slice(1);
        input = dash + input.padStart(dash ? maxLength - 1 : maxLength, "0");
      }
      if (toNumber === false) {
        return String(input);
      }
      return input;
    };
    var toMaxLen = (input, maxLength) => {
      let negative = input[0] === "-" ? "-" : "";
      if (negative) {
        input = input.slice(1);
        maxLength--;
      }
      while (input.length < maxLength) input = "0" + input;
      return negative ? "-" + input : input;
    };
    var toSequence = (parts, options8, maxLen) => {
      parts.negatives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      parts.positives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      let prefix = options8.capture ? "" : "?:";
      let positives = "";
      let negatives = "";
      let result;
      if (parts.positives.length) {
        positives = parts.positives.map((v) => toMaxLen(String(v), maxLen)).join("|");
      }
      if (parts.negatives.length) {
        negatives = `-(${prefix}${parts.negatives.map((v) => toMaxLen(String(v), maxLen)).join("|")})`;
      }
      if (positives && negatives) {
        result = `${positives}|${negatives}`;
      } else {
        result = positives || negatives;
      }
      if (options8.wrap) {
        return `(${prefix}${result})`;
      }
      return result;
    };
    var toRange = (a, b, isNumbers, options8) => {
      if (isNumbers) {
        return toRegexRange(a, b, { wrap: false, ...options8 });
      }
      let start = String.fromCharCode(a);
      if (a === b) return start;
      let stop = String.fromCharCode(b);
      return `[${start}-${stop}]`;
    };
    var toRegex = (start, end, options8) => {
      if (Array.isArray(start)) {
        let wrap = options8.wrap === true;
        let prefix = options8.capture ? "" : "?:";
        return wrap ? `(${prefix}${start.join("|")})` : start.join("|");
      }
      return toRegexRange(start, end, options8);
    };
    var rangeError = (...args) => {
      return new RangeError("Invalid range arguments: " + util2.inspect(...args));
    };
    var invalidRange = (start, end, options8) => {
      if (options8.strictRanges === true) throw rangeError([start, end]);
      return [];
    };
    var invalidStep = (step, options8) => {
      if (options8.strictRanges === true) {
        throw new TypeError(`Expected step "${step}" to be a number`);
      }
      return [];
    };
    var fillNumbers = (start, end, step = 1, options8 = {}) => {
      let a = Number(start);
      let b = Number(end);
      if (!Number.isInteger(a) || !Number.isInteger(b)) {
        if (options8.strictRanges === true) throw rangeError([start, end]);
        return [];
      }
      if (a === 0) a = 0;
      if (b === 0) b = 0;
      let descending = a > b;
      let startString = String(start);
      let endString = String(end);
      let stepString = String(step);
      step = Math.max(Math.abs(step), 1);
      let padded = zeros(startString) || zeros(endString) || zeros(stepString);
      let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
      let toNumber = padded === false && stringify2(start, end, options8) === false;
      let format3 = options8.transform || transform(toNumber);
      if (options8.toRegex && step === 1) {
        return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options8);
      }
      let parts = { negatives: [], positives: [] };
      let push2 = (num) => parts[num < 0 ? "negatives" : "positives"].push(Math.abs(num));
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        if (options8.toRegex === true && step > 1) {
          push2(a);
        } else {
          range.push(pad(format3(a, index), maxLen, toNumber));
        }
        a = descending ? a - step : a + step;
        index++;
      }
      if (options8.toRegex === true) {
        return step > 1 ? toSequence(parts, options8, maxLen) : toRegex(range, null, { wrap: false, ...options8 });
      }
      return range;
    };
    var fillLetters = (start, end, step = 1, options8 = {}) => {
      if (!isNumber(start) && start.length > 1 || !isNumber(end) && end.length > 1) {
        return invalidRange(start, end, options8);
      }
      let format3 = options8.transform || ((val) => String.fromCharCode(val));
      let a = `${start}`.charCodeAt(0);
      let b = `${end}`.charCodeAt(0);
      let descending = a > b;
      let min = Math.min(a, b);
      let max = Math.max(a, b);
      if (options8.toRegex && step === 1) {
        return toRange(min, max, false, options8);
      }
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        range.push(format3(a, index));
        a = descending ? a - step : a + step;
        index++;
      }
      if (options8.toRegex === true) {
        return toRegex(range, null, { wrap: false, options: options8 });
      }
      return range;
    };
    var fill = (start, end, step, options8 = {}) => {
      if (end == null && isValidValue(start)) {
        return [start];
      }
      if (!isValidValue(start) || !isValidValue(end)) {
        return invalidRange(start, end, options8);
      }
      if (typeof step === "function") {
        return fill(start, end, 1, { transform: step });
      }
      if (isObject2(step)) {
        return fill(start, end, 0, step);
      }
      let opts = { ...options8 };
      if (opts.capture === true) opts.wrap = true;
      step = step || opts.step || 1;
      if (!isNumber(step)) {
        if (step != null && !isObject2(step)) return invalidStep(step, opts);
        return fill(start, end, 1, step);
      }
      if (isNumber(start) && isNumber(end)) {
        return fillNumbers(start, end, step, opts);
      }
      return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
    };
    module.exports = fill;
  }
});

// node_modules/braces/lib/compile.js
var require_compile = __commonJS({
  "node_modules/braces/lib/compile.js"(exports, module) {
    "use strict";
    var fill = require_fill_range();
    var utils = require_utils();
    var compile = (ast, options8 = {}) => {
      const walk = (node, parent = {}) => {
        const invalidBlock = utils.isInvalidBrace(parent);
        const invalidNode = node.invalid === true && options8.escapeInvalid === true;
        const invalid = invalidBlock === true || invalidNode === true;
        const prefix = options8.escapeInvalid === true ? "\\" : "";
        let output = "";
        if (node.isOpen === true) {
          return prefix + node.value;
        }
        if (node.isClose === true) {
          console.log("node.isClose", prefix, node.value);
          return prefix + node.value;
        }
        if (node.type === "open") {
          return invalid ? prefix + node.value : "(";
        }
        if (node.type === "close") {
          return invalid ? prefix + node.value : ")";
        }
        if (node.type === "comma") {
          return node.prev.type === "comma" ? "" : invalid ? node.value : "|";
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes && node.ranges > 0) {
          const args = utils.reduce(node.nodes);
          const range = fill(...args, { ...options8, wrap: false, toRegex: true, strictZeros: true });
          if (range.length !== 0) {
            return args.length > 1 && range.length > 1 ? `(${range})` : range;
          }
        }
        if (node.nodes) {
          for (const child of node.nodes) {
            output += walk(child, node);
          }
        }
        return output;
      };
      return walk(ast);
    };
    module.exports = compile;
  }
});

// node_modules/braces/lib/expand.js
var require_expand = __commonJS({
  "node_modules/braces/lib/expand.js"(exports, module) {
    "use strict";
    var fill = require_fill_range();
    var stringify2 = require_stringify();
    var utils = require_utils();
    var append = (queue = "", stash = "", enclose = false) => {
      const result = [];
      queue = [].concat(queue);
      stash = [].concat(stash);
      if (!stash.length) return queue;
      if (!queue.length) {
        return enclose ? utils.flatten(stash).map((ele) => `{${ele}}`) : stash;
      }
      for (const item of queue) {
        if (Array.isArray(item)) {
          for (const value of item) {
            result.push(append(value, stash, enclose));
          }
        } else {
          for (let ele of stash) {
            if (enclose === true && typeof ele === "string") ele = `{${ele}}`;
            result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
          }
        }
      }
      return utils.flatten(result);
    };
    var expand = (ast, options8 = {}) => {
      const rangeLimit = options8.rangeLimit === void 0 ? 1e3 : options8.rangeLimit;
      const walk = (node, parent = {}) => {
        node.queue = [];
        let p = parent;
        let q = parent.queue;
        while (p.type !== "brace" && p.type !== "root" && p.parent) {
          p = p.parent;
          q = p.queue;
        }
        if (node.invalid || node.dollar) {
          q.push(append(q.pop(), stringify2(node, options8)));
          return;
        }
        if (node.type === "brace" && node.invalid !== true && node.nodes.length === 2) {
          q.push(append(q.pop(), ["{}"]));
          return;
        }
        if (node.nodes && node.ranges > 0) {
          const args = utils.reduce(node.nodes);
          if (utils.exceedsLimit(...args, options8.step, rangeLimit)) {
            throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
          }
          let range = fill(...args, options8);
          if (range.length === 0) {
            range = stringify2(node, options8);
          }
          q.push(append(q.pop(), range));
          node.nodes = [];
          return;
        }
        const enclose = utils.encloseBrace(node);
        let queue = node.queue;
        let block = node;
        while (block.type !== "brace" && block.type !== "root" && block.parent) {
          block = block.parent;
          queue = block.queue;
        }
        for (let i = 0; i < node.nodes.length; i++) {
          const child = node.nodes[i];
          if (child.type === "comma" && node.type === "brace") {
            if (i === 1) queue.push("");
            queue.push("");
            continue;
          }
          if (child.type === "close") {
            q.push(append(q.pop(), queue, enclose));
            continue;
          }
          if (child.value && child.type !== "open") {
            queue.push(append(queue.pop(), child.value));
            continue;
          }
          if (child.nodes) {
            walk(child, node);
          }
        }
        return queue;
      };
      return utils.flatten(walk(ast));
    };
    module.exports = expand;
  }
});

// node_modules/braces/lib/constants.js
var require_constants = __commonJS({
  "node_modules/braces/lib/constants.js"(exports, module) {
    "use strict";
    module.exports = {
      MAX_LENGTH: 1e4,
      // Digits
      CHAR_0: "0",
      /* 0 */
      CHAR_9: "9",
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: "A",
      /* A */
      CHAR_LOWERCASE_A: "a",
      /* a */
      CHAR_UPPERCASE_Z: "Z",
      /* Z */
      CHAR_LOWERCASE_Z: "z",
      /* z */
      CHAR_LEFT_PARENTHESES: "(",
      /* ( */
      CHAR_RIGHT_PARENTHESES: ")",
      /* ) */
      CHAR_ASTERISK: "*",
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: "&",
      /* & */
      CHAR_AT: "@",
      /* @ */
      CHAR_BACKSLASH: "\\",
      /* \ */
      CHAR_BACKTICK: "`",
      /* ` */
      CHAR_CARRIAGE_RETURN: "\r",
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: "^",
      /* ^ */
      CHAR_COLON: ":",
      /* : */
      CHAR_COMMA: ",",
      /* , */
      CHAR_DOLLAR: "$",
      /* . */
      CHAR_DOT: ".",
      /* . */
      CHAR_DOUBLE_QUOTE: '"',
      /* " */
      CHAR_EQUAL: "=",
      /* = */
      CHAR_EXCLAMATION_MARK: "!",
      /* ! */
      CHAR_FORM_FEED: "\f",
      /* \f */
      CHAR_FORWARD_SLASH: "/",
      /* / */
      CHAR_HASH: "#",
      /* # */
      CHAR_HYPHEN_MINUS: "-",
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: "<",
      /* < */
      CHAR_LEFT_CURLY_BRACE: "{",
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: "[",
      /* [ */
      CHAR_LINE_FEED: "\n",
      /* \n */
      CHAR_NO_BREAK_SPACE: "\xA0",
      /* \u00A0 */
      CHAR_PERCENT: "%",
      /* % */
      CHAR_PLUS: "+",
      /* + */
      CHAR_QUESTION_MARK: "?",
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: ">",
      /* > */
      CHAR_RIGHT_CURLY_BRACE: "}",
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: "]",
      /* ] */
      CHAR_SEMICOLON: ";",
      /* ; */
      CHAR_SINGLE_QUOTE: "'",
      /* ' */
      CHAR_SPACE: " ",
      /*   */
      CHAR_TAB: "	",
      /* \t */
      CHAR_UNDERSCORE: "_",
      /* _ */
      CHAR_VERTICAL_LINE: "|",
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF"
      /* \uFEFF */
    };
  }
});

// node_modules/braces/lib/parse.js
var require_parse = __commonJS({
  "node_modules/braces/lib/parse.js"(exports, module) {
    "use strict";
    var stringify2 = require_stringify();
    var {
      MAX_LENGTH,
      CHAR_BACKSLASH,
      /* \ */
      CHAR_BACKTICK,
      /* ` */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_RIGHT_SQUARE_BRACKET,
      /* ] */
      CHAR_DOUBLE_QUOTE,
      /* " */
      CHAR_SINGLE_QUOTE,
      /* ' */
      CHAR_NO_BREAK_SPACE,
      CHAR_ZERO_WIDTH_NOBREAK_SPACE
    } = require_constants();
    var parse7 = (input, options8 = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      const opts = options8 || {};
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      if (input.length > max) {
        throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
      }
      const ast = { type: "root", input, nodes: [] };
      const stack2 = [ast];
      let block = ast;
      let prev = ast;
      let brackets = 0;
      const length = input.length;
      let index = 0;
      let depth = 0;
      let value;
      const advance = () => input[index++];
      const push2 = (node) => {
        if (node.type === "text" && prev.type === "dot") {
          prev.type = "text";
        }
        if (prev && prev.type === "text" && node.type === "text") {
          prev.value += node.value;
          return;
        }
        block.nodes.push(node);
        node.parent = block;
        node.prev = prev;
        prev = node;
        return node;
      };
      push2({ type: "bos" });
      while (index < length) {
        block = stack2[stack2.length - 1];
        value = advance();
        if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
          continue;
        }
        if (value === CHAR_BACKSLASH) {
          push2({ type: "text", value: (options8.keepEscaping ? value : "") + advance() });
          continue;
        }
        if (value === CHAR_RIGHT_SQUARE_BRACKET) {
          push2({ type: "text", value: "\\" + value });
          continue;
        }
        if (value === CHAR_LEFT_SQUARE_BRACKET) {
          brackets++;
          let next;
          while (index < length && (next = advance())) {
            value += next;
            if (next === CHAR_LEFT_SQUARE_BRACKET) {
              brackets++;
              continue;
            }
            if (next === CHAR_BACKSLASH) {
              value += advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              brackets--;
              if (brackets === 0) {
                break;
              }
            }
          }
          push2({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_PARENTHESES) {
          block = push2({ type: "paren", nodes: [] });
          stack2.push(block);
          push2({ type: "text", value });
          continue;
        }
        if (value === CHAR_RIGHT_PARENTHESES) {
          if (block.type !== "paren") {
            push2({ type: "text", value });
            continue;
          }
          block = stack2.pop();
          push2({ type: "text", value });
          block = stack2[stack2.length - 1];
          continue;
        }
        if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
          const open = value;
          let next;
          if (options8.keepQuotes !== true) {
            value = "";
          }
          while (index < length && (next = advance())) {
            if (next === CHAR_BACKSLASH) {
              value += next + advance();
              continue;
            }
            if (next === open) {
              if (options8.keepQuotes === true) value += next;
              break;
            }
            value += next;
          }
          push2({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_CURLY_BRACE) {
          depth++;
          const dollar = prev.value && prev.value.slice(-1) === "$" || block.dollar === true;
          const brace = {
            type: "brace",
            open: true,
            close: false,
            dollar,
            depth,
            commas: 0,
            ranges: 0,
            nodes: []
          };
          block = push2(brace);
          stack2.push(block);
          push2({ type: "open", value });
          continue;
        }
        if (value === CHAR_RIGHT_CURLY_BRACE) {
          if (block.type !== "brace") {
            push2({ type: "text", value });
            continue;
          }
          const type = "close";
          block = stack2.pop();
          block.close = true;
          push2({ type, value });
          depth--;
          block = stack2[stack2.length - 1];
          continue;
        }
        if (value === CHAR_COMMA && depth > 0) {
          if (block.ranges > 0) {
            block.ranges = 0;
            const open = block.nodes.shift();
            block.nodes = [open, { type: "text", value: stringify2(block) }];
          }
          push2({ type: "comma", value });
          block.commas++;
          continue;
        }
        if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
          const siblings = block.nodes;
          if (depth === 0 || siblings.length === 0) {
            push2({ type: "text", value });
            continue;
          }
          if (prev.type === "dot") {
            block.range = [];
            prev.value += value;
            prev.type = "range";
            if (block.nodes.length !== 3 && block.nodes.length !== 5) {
              block.invalid = true;
              block.ranges = 0;
              prev.type = "text";
              continue;
            }
            block.ranges++;
            block.args = [];
            continue;
          }
          if (prev.type === "range") {
            siblings.pop();
            const before = siblings[siblings.length - 1];
            before.value += prev.value + value;
            prev = before;
            block.ranges--;
            continue;
          }
          push2({ type: "dot", value });
          continue;
        }
        push2({ type: "text", value });
      }
      do {
        block = stack2.pop();
        if (block.type !== "root") {
          block.nodes.forEach((node) => {
            if (!node.nodes) {
              if (node.type === "open") node.isOpen = true;
              if (node.type === "close") node.isClose = true;
              if (!node.nodes) node.type = "text";
              node.invalid = true;
            }
          });
          const parent = stack2[stack2.length - 1];
          const index2 = parent.nodes.indexOf(block);
          parent.nodes.splice(index2, 1, ...block.nodes);
        }
      } while (stack2.length > 0);
      push2({ type: "eos" });
      return ast;
    };
    module.exports = parse7;
  }
});

// node_modules/braces/index.js
var require_braces = __commonJS({
  "node_modules/braces/index.js"(exports, module) {
    "use strict";
    var stringify2 = require_stringify();
    var compile = require_compile();
    var expand = require_expand();
    var parse7 = require_parse();
    var braces = (input, options8 = {}) => {
      let output = [];
      if (Array.isArray(input)) {
        for (const pattern of input) {
          const result = braces.create(pattern, options8);
          if (Array.isArray(result)) {
            output.push(...result);
          } else {
            output.push(result);
          }
        }
      } else {
        output = [].concat(braces.create(input, options8));
      }
      if (options8 && options8.expand === true && options8.nodupes === true) {
        output = [...new Set(output)];
      }
      return output;
    };
    braces.parse = (input, options8 = {}) => parse7(input, options8);
    braces.stringify = (input, options8 = {}) => {
      if (typeof input === "string") {
        return stringify2(braces.parse(input, options8), options8);
      }
      return stringify2(input, options8);
    };
    braces.compile = (input, options8 = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options8);
      }
      return compile(input, options8);
    };
    braces.expand = (input, options8 = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options8);
      }
      let result = expand(input, options8);
      if (options8.noempty === true) {
        result = result.filter(Boolean);
      }
      if (options8.nodupes === true) {
        result = [...new Set(result)];
      }
      return result;
    };
    braces.create = (input, options8 = {}) => {
      if (input === "" || input.length < 3) {
        return [input];
      }
      return options8.expand !== true ? braces.compile(input, options8) : braces.expand(input, options8);
    };
    module.exports = braces;
  }
});

// node_modules/micromatch/node_modules/picomatch/lib/constants.js
var require_constants2 = __commonJS({
  "node_modules/micromatch/node_modules/picomatch/lib/constants.js"(exports, module) {
    "use strict";
    var path15 = __require("path");
    var WIN_SLASH = "\\\\/";
    var WIN_NO_SLASH = `[^${WIN_SLASH}]`;
    var DOT_LITERAL = "\\.";
    var PLUS_LITERAL = "\\+";
    var QMARK_LITERAL = "\\?";
    var SLASH_LITERAL = "\\/";
    var ONE_CHAR = "(?=.)";
    var QMARK = "[^/]";
    var END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
    var START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
    var DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
    var NO_DOT = `(?!${DOT_LITERAL})`;
    var NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
    var NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
    var NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
    var QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
    var STAR = `${QMARK}*?`;
    var POSIX_CHARS = {
      DOT_LITERAL,
      PLUS_LITERAL,
      QMARK_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      QMARK,
      END_ANCHOR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOTS,
      NO_DOT_SLASH,
      NO_DOTS_SLASH,
      QMARK_NO_DOT,
      STAR,
      START_ANCHOR
    };
    var WINDOWS_CHARS = {
      ...POSIX_CHARS,
      SLASH_LITERAL: `[${WIN_SLASH}]`,
      QMARK: WIN_NO_SLASH,
      STAR: `${WIN_NO_SLASH}*?`,
      DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
      NO_DOT: `(?!${DOT_LITERAL})`,
      NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
      NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
      START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
      END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
    };
    var POSIX_REGEX_SOURCE = {
      alnum: "a-zA-Z0-9",
      alpha: "a-zA-Z",
      ascii: "\\x00-\\x7F",
      blank: " \\t",
      cntrl: "\\x00-\\x1F\\x7F",
      digit: "0-9",
      graph: "\\x21-\\x7E",
      lower: "a-z",
      print: "\\x20-\\x7E ",
      punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
      space: " \\t\\r\\n\\v\\f",
      upper: "A-Z",
      word: "A-Za-z0-9_",
      xdigit: "A-Fa-f0-9"
    };
    module.exports = {
      MAX_LENGTH: 1024 * 64,
      POSIX_REGEX_SOURCE,
      // regular expressions
      REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
      REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
      REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
      REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
      REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
      REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
      // Replace globs with equivalent patterns to reduce parsing time.
      REPLACEMENTS: {
        "***": "*",
        "**/**": "**",
        "**/**/**": "**"
      },
      // Digits
      CHAR_0: 48,
      /* 0 */
      CHAR_9: 57,
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: 65,
      /* A */
      CHAR_LOWERCASE_A: 97,
      /* a */
      CHAR_UPPERCASE_Z: 90,
      /* Z */
      CHAR_LOWERCASE_Z: 122,
      /* z */
      CHAR_LEFT_PARENTHESES: 40,
      /* ( */
      CHAR_RIGHT_PARENTHESES: 41,
      /* ) */
      CHAR_ASTERISK: 42,
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: 38,
      /* & */
      CHAR_AT: 64,
      /* @ */
      CHAR_BACKWARD_SLASH: 92,
      /* \ */
      CHAR_CARRIAGE_RETURN: 13,
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: 94,
      /* ^ */
      CHAR_COLON: 58,
      /* : */
      CHAR_COMMA: 44,
      /* , */
      CHAR_DOT: 46,
      /* . */
      CHAR_DOUBLE_QUOTE: 34,
      /* " */
      CHAR_EQUAL: 61,
      /* = */
      CHAR_EXCLAMATION_MARK: 33,
      /* ! */
      CHAR_FORM_FEED: 12,
      /* \f */
      CHAR_FORWARD_SLASH: 47,
      /* / */
      CHAR_GRAVE_ACCENT: 96,
      /* ` */
      CHAR_HASH: 35,
      /* # */
      CHAR_HYPHEN_MINUS: 45,
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: 60,
      /* < */
      CHAR_LEFT_CURLY_BRACE: 123,
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: 91,
      /* [ */
      CHAR_LINE_FEED: 10,
      /* \n */
      CHAR_NO_BREAK_SPACE: 160,
      /* \u00A0 */
      CHAR_PERCENT: 37,
      /* % */
      CHAR_PLUS: 43,
      /* + */
      CHAR_QUESTION_MARK: 63,
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: 62,
      /* > */
      CHAR_RIGHT_CURLY_BRACE: 125,
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: 93,
      /* ] */
      CHAR_SEMICOLON: 59,
      /* ; */
      CHAR_SINGLE_QUOTE: 39,
      /* ' */
      CHAR_SPACE: 32,
      /*   */
      CHAR_TAB: 9,
      /* \t */
      CHAR_UNDERSCORE: 95,
      /* _ */
      CHAR_VERTICAL_LINE: 124,
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
      /* \uFEFF */
      SEP: path15.sep,
      /**
       * Create EXTGLOB_CHARS
       */
      extglobChars(chars) {
        return {
          "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars.STAR})` },
          "?": { type: "qmark", open: "(?:", close: ")?" },
          "+": { type: "plus", open: "(?:", close: ")+" },
          "*": { type: "star", open: "(?:", close: ")*" },
          "@": { type: "at", open: "(?:", close: ")" }
        };
      },
      /**
       * Create GLOB_CHARS
       */
      globChars(win32) {
        return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
      }
    };
  }
});

// node_modules/micromatch/node_modules/picomatch/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/micromatch/node_modules/picomatch/lib/utils.js"(exports) {
    "use strict";
    var path15 = __require("path");
    var win32 = process.platform === "win32";
    var {
      REGEX_BACKSLASH,
      REGEX_REMOVE_BACKSLASH,
      REGEX_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_GLOBAL
    } = require_constants2();
    exports.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    exports.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
    exports.isRegexChar = (str) => str.length === 1 && exports.hasRegexChars(str);
    exports.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
    exports.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
    exports.removeBackslashes = (str) => {
      return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
        return match === "\\" ? "" : match;
      });
    };
    exports.supportsLookbehinds = () => {
      const segs = process.version.slice(1).split(".").map(Number);
      if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
        return true;
      }
      return false;
    };
    exports.isWindows = (options8) => {
      if (options8 && typeof options8.windows === "boolean") {
        return options8.windows;
      }
      return win32 === true || path15.sep === "\\";
    };
    exports.escapeLast = (input, char, lastIdx) => {
      const idx = input.lastIndexOf(char, lastIdx);
      if (idx === -1) return input;
      if (input[idx - 1] === "\\") return exports.escapeLast(input, char, idx - 1);
      return `${input.slice(0, idx)}\\${input.slice(idx)}`;
    };
    exports.removePrefix = (input, state = {}) => {
      let output = input;
      if (output.startsWith("./")) {
        output = output.slice(2);
        state.prefix = "./";
      }
      return output;
    };
    exports.wrapOutput = (input, state = {}, options8 = {}) => {
      const prepend = options8.contains ? "" : "^";
      const append = options8.contains ? "" : "$";
      let output = `${prepend}(?:${input})${append}`;
      if (state.negated === true) {
        output = `(?:^(?!${output}).*$)`;
      }
      return output;
    };
  }
});

// node_modules/micromatch/node_modules/picomatch/lib/scan.js
var require_scan = __commonJS({
  "node_modules/micromatch/node_modules/picomatch/lib/scan.js"(exports, module) {
    "use strict";
    var utils = require_utils2();
    var {
      CHAR_ASTERISK,
      /* * */
      CHAR_AT,
      /* @ */
      CHAR_BACKWARD_SLASH,
      /* \ */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_EXCLAMATION_MARK,
      /* ! */
      CHAR_FORWARD_SLASH,
      /* / */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_PLUS,
      /* + */
      CHAR_QUESTION_MARK,
      /* ? */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_RIGHT_SQUARE_BRACKET
      /* ] */
    } = require_constants2();
    var isPathSeparator = (code) => {
      return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
    };
    var depth = (token2) => {
      if (token2.isPrefix !== true) {
        token2.depth = token2.isGlobstar ? Infinity : 1;
      }
    };
    var scan = (input, options8) => {
      const opts = options8 || {};
      const length = input.length - 1;
      const scanToEnd = opts.parts === true || opts.scanToEnd === true;
      const slashes = [];
      const tokens = [];
      const parts = [];
      let str = input;
      let index = -1;
      let start = 0;
      let lastIndex = 0;
      let isBrace = false;
      let isBracket = false;
      let isGlob = false;
      let isExtglob = false;
      let isGlobstar = false;
      let braceEscaped = false;
      let backslashes = false;
      let negated = false;
      let negatedExtglob = false;
      let finished = false;
      let braces = 0;
      let prev;
      let code;
      let token2 = { value: "", depth: 0, isGlob: false };
      const eos = () => index >= length;
      const peek2 = () => str.charCodeAt(index + 1);
      const advance = () => {
        prev = code;
        return str.charCodeAt(++index);
      };
      while (index < length) {
        code = advance();
        let next;
        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token2.backslashes = true;
          code = advance();
          if (code === CHAR_LEFT_CURLY_BRACE) {
            braceEscaped = true;
          }
          continue;
        }
        if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
          braces++;
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token2.backslashes = true;
              advance();
              continue;
            }
            if (code === CHAR_LEFT_CURLY_BRACE) {
              braces++;
              continue;
            }
            if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
              isBrace = token2.isBrace = true;
              isGlob = token2.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (braceEscaped !== true && code === CHAR_COMMA) {
              isBrace = token2.isBrace = true;
              isGlob = token2.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (code === CHAR_RIGHT_CURLY_BRACE) {
              braces--;
              if (braces === 0) {
                braceEscaped = false;
                isBrace = token2.isBrace = true;
                finished = true;
                break;
              }
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_FORWARD_SLASH) {
          slashes.push(index);
          tokens.push(token2);
          token2 = { value: "", depth: 0, isGlob: false };
          if (finished === true) continue;
          if (prev === CHAR_DOT && index === start + 1) {
            start += 2;
            continue;
          }
          lastIndex = index + 1;
          continue;
        }
        if (opts.noext !== true) {
          const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
          if (isExtglobChar === true && peek2() === CHAR_LEFT_PARENTHESES) {
            isGlob = token2.isGlob = true;
            isExtglob = token2.isExtglob = true;
            finished = true;
            if (code === CHAR_EXCLAMATION_MARK && index === start) {
              negatedExtglob = true;
            }
            if (scanToEnd === true) {
              while (eos() !== true && (code = advance())) {
                if (code === CHAR_BACKWARD_SLASH) {
                  backslashes = token2.backslashes = true;
                  code = advance();
                  continue;
                }
                if (code === CHAR_RIGHT_PARENTHESES) {
                  isGlob = token2.isGlob = true;
                  finished = true;
                  break;
                }
              }
              continue;
            }
            break;
          }
        }
        if (code === CHAR_ASTERISK) {
          if (prev === CHAR_ASTERISK) isGlobstar = token2.isGlobstar = true;
          isGlob = token2.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_QUESTION_MARK) {
          isGlob = token2.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_LEFT_SQUARE_BRACKET) {
          while (eos() !== true && (next = advance())) {
            if (next === CHAR_BACKWARD_SLASH) {
              backslashes = token2.backslashes = true;
              advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              isBracket = token2.isBracket = true;
              isGlob = token2.isGlob = true;
              finished = true;
              break;
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
          negated = token2.negated = true;
          start++;
          continue;
        }
        if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
          isGlob = token2.isGlob = true;
          if (scanToEnd === true) {
            while (eos() !== true && (code = advance())) {
              if (code === CHAR_LEFT_PARENTHESES) {
                backslashes = token2.backslashes = true;
                code = advance();
                continue;
              }
              if (code === CHAR_RIGHT_PARENTHESES) {
                finished = true;
                break;
              }
            }
            continue;
          }
          break;
        }
        if (isGlob === true) {
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
      }
      if (opts.noext === true) {
        isExtglob = false;
        isGlob = false;
      }
      let base = str;
      let prefix = "";
      let glob = "";
      if (start > 0) {
        prefix = str.slice(0, start);
        str = str.slice(start);
        lastIndex -= start;
      }
      if (base && isGlob === true && lastIndex > 0) {
        base = str.slice(0, lastIndex);
        glob = str.slice(lastIndex);
      } else if (isGlob === true) {
        base = "";
        glob = str;
      } else {
        base = str;
      }
      if (base && base !== "" && base !== "/" && base !== str) {
        if (isPathSeparator(base.charCodeAt(base.length - 1))) {
          base = base.slice(0, -1);
        }
      }
      if (opts.unescape === true) {
        if (glob) glob = utils.removeBackslashes(glob);
        if (base && backslashes === true) {
          base = utils.removeBackslashes(base);
        }
      }
      const state = {
        prefix,
        input,
        start,
        base,
        glob,
        isBrace,
        isBracket,
        isGlob,
        isExtglob,
        isGlobstar,
        negated,
        negatedExtglob
      };
      if (opts.tokens === true) {
        state.maxDepth = 0;
        if (!isPathSeparator(code)) {
          tokens.push(token2);
        }
        state.tokens = tokens;
      }
      if (opts.parts === true || opts.tokens === true) {
        let prevIndex;
        for (let idx = 0; idx < slashes.length; idx++) {
          const n = prevIndex ? prevIndex + 1 : start;
          const i = slashes[idx];
          const value = input.slice(n, i);
          if (opts.tokens) {
            if (idx === 0 && start !== 0) {
              tokens[idx].isPrefix = true;
              tokens[idx].value = prefix;
            } else {
              tokens[idx].value = value;
            }
            depth(tokens[idx]);
            state.maxDepth += tokens[idx].depth;
          }
          if (idx !== 0 || value !== "") {
            parts.push(value);
          }
          prevIndex = i;
        }
        if (prevIndex && prevIndex + 1 < input.length) {
          const value = input.slice(prevIndex + 1);
          parts.push(value);
          if (opts.tokens) {
            tokens[tokens.length - 1].value = value;
            depth(tokens[tokens.length - 1]);
            state.maxDepth += tokens[tokens.length - 1].depth;
          }
        }
        state.slashes = slashes;
        state.parts = parts;
      }
      return state;
    };
    module.exports = scan;
  }
});

// node_modules/micromatch/node_modules/picomatch/lib/parse.js
var require_parse2 = __commonJS({
  "node_modules/micromatch/node_modules/picomatch/lib/parse.js"(exports, module) {
    "use strict";
    var constants = require_constants2();
    var utils = require_utils2();
    var {
      MAX_LENGTH,
      POSIX_REGEX_SOURCE,
      REGEX_NON_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_BACKREF,
      REPLACEMENTS
    } = constants;
    var expandRange = (args, options8) => {
      if (typeof options8.expandRange === "function") {
        return options8.expandRange(...args, options8);
      }
      args.sort();
      const value = `[${args.join("-")}]`;
      try {
        new RegExp(value);
      } catch (ex) {
        return args.map((v) => utils.escapeRegex(v)).join("..");
      }
      return value;
    };
    var syntaxError2 = (type, char) => {
      return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
    };
    var parse7 = (input, options8) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      input = REPLACEMENTS[input] || input;
      const opts = { ...options8 };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      let len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      const bos = { type: "bos", value: "", output: opts.prepend || "" };
      const tokens = [bos];
      const capture = opts.capture ? "" : "?:";
      const win32 = utils.isWindows(options8);
      const PLATFORM_CHARS = constants.globChars(win32);
      const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
      const {
        DOT_LITERAL,
        PLUS_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOT_SLASH,
        NO_DOTS_SLASH,
        QMARK,
        QMARK_NO_DOT,
        STAR,
        START_ANCHOR
      } = PLATFORM_CHARS;
      const globstar = (opts2) => {
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const nodot = opts.dot ? "" : NO_DOT;
      const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
      let star = opts.bash === true ? globstar(opts) : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      if (typeof opts.noext === "boolean") {
        opts.noextglob = opts.noext;
      }
      const state = {
        input,
        index: -1,
        start: 0,
        dot: opts.dot === true,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: false,
        negated: false,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: false,
        tokens
      };
      input = utils.removePrefix(input, state);
      len = input.length;
      const extglobs = [];
      const braces = [];
      const stack2 = [];
      let prev = bos;
      let value;
      const eos = () => state.index === len - 1;
      const peek2 = state.peek = (n = 1) => input[state.index + n];
      const advance = state.advance = () => input[++state.index] || "";
      const remaining = () => input.slice(state.index + 1);
      const consume = (value2 = "", num = 0) => {
        state.consumed += value2;
        state.index += num;
      };
      const append = (token2) => {
        state.output += token2.output != null ? token2.output : token2.value;
        consume(token2.value);
      };
      const negate = () => {
        let count = 1;
        while (peek2() === "!" && (peek2(2) !== "(" || peek2(3) === "?")) {
          advance();
          state.start++;
          count++;
        }
        if (count % 2 === 0) {
          return false;
        }
        state.negated = true;
        state.start++;
        return true;
      };
      const increment = (type) => {
        state[type]++;
        stack2.push(type);
      };
      const decrement = (type) => {
        state[type]--;
        stack2.pop();
      };
      const push2 = (tok) => {
        if (prev.type === "globstar") {
          const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
          const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
          if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
            state.output = state.output.slice(0, -prev.output.length);
            prev.type = "star";
            prev.value = "*";
            prev.output = star;
            state.output += prev.output;
          }
        }
        if (extglobs.length && tok.type !== "paren") {
          extglobs[extglobs.length - 1].inner += tok.value;
        }
        if (tok.value || tok.output) append(tok);
        if (prev && prev.type === "text" && tok.type === "text") {
          prev.value += tok.value;
          prev.output = (prev.output || "") + tok.value;
          return;
        }
        tok.prev = prev;
        tokens.push(tok);
        prev = tok;
      };
      const extglobOpen = (type, value2) => {
        const token2 = { ...EXTGLOB_CHARS[value2], conditions: 1, inner: "" };
        token2.prev = prev;
        token2.parens = state.parens;
        token2.output = state.output;
        const output = (opts.capture ? "(" : "") + token2.open;
        increment("parens");
        push2({ type, value: value2, output: state.output ? "" : ONE_CHAR });
        push2({ type: "paren", extglob: true, value: advance(), output });
        extglobs.push(token2);
      };
      const extglobClose = (token2) => {
        let output = token2.close + (opts.capture ? ")" : "");
        let rest;
        if (token2.type === "negate") {
          let extglobStar = star;
          if (token2.inner && token2.inner.length > 1 && token2.inner.includes("/")) {
            extglobStar = globstar(opts);
          }
          if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
            output = token2.close = `)$))${extglobStar}`;
          }
          if (token2.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
            const expression = parse7(rest, { ...options8, fastpaths: false }).output;
            output = token2.close = `)${expression})${extglobStar})`;
          }
          if (token2.prev.type === "bos") {
            state.negatedExtglob = true;
          }
        }
        push2({ type: "paren", extglob: true, value, output });
        decrement("parens");
      };
      if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
        let backslashes = false;
        let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
          if (first === "\\") {
            backslashes = true;
            return m;
          }
          if (first === "?") {
            if (esc) {
              return esc + first + (rest ? QMARK.repeat(rest.length) : "");
            }
            if (index === 0) {
              return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
            }
            return QMARK.repeat(chars.length);
          }
          if (first === ".") {
            return DOT_LITERAL.repeat(chars.length);
          }
          if (first === "*") {
            if (esc) {
              return esc + first + (rest ? star : "");
            }
            return star;
          }
          return esc ? m : `\\${m}`;
        });
        if (backslashes === true) {
          if (opts.unescape === true) {
            output = output.replace(/\\/g, "");
          } else {
            output = output.replace(/\\+/g, (m) => {
              return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
            });
          }
        }
        if (output === input && opts.contains === true) {
          state.output = input;
          return state;
        }
        state.output = utils.wrapOutput(output, state, options8);
        return state;
      }
      while (!eos()) {
        value = advance();
        if (value === "\0") {
          continue;
        }
        if (value === "\\") {
          const next = peek2();
          if (next === "/" && opts.bash !== true) {
            continue;
          }
          if (next === "." || next === ";") {
            continue;
          }
          if (!next) {
            value += "\\";
            push2({ type: "text", value });
            continue;
          }
          const match = /^\\+/.exec(remaining());
          let slashes = 0;
          if (match && match[0].length > 2) {
            slashes = match[0].length;
            state.index += slashes;
            if (slashes % 2 !== 0) {
              value += "\\";
            }
          }
          if (opts.unescape === true) {
            value = advance();
          } else {
            value += advance();
          }
          if (state.brackets === 0) {
            push2({ type: "text", value });
            continue;
          }
        }
        if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
          if (opts.posix !== false && value === ":") {
            const inner = prev.value.slice(1);
            if (inner.includes("[")) {
              prev.posix = true;
              if (inner.includes(":")) {
                const idx = prev.value.lastIndexOf("[");
                const pre = prev.value.slice(0, idx);
                const rest2 = prev.value.slice(idx + 2);
                const posix = POSIX_REGEX_SOURCE[rest2];
                if (posix) {
                  prev.value = pre + posix;
                  state.backtrack = true;
                  advance();
                  if (!bos.output && tokens.indexOf(prev) === 1) {
                    bos.output = ONE_CHAR;
                  }
                  continue;
                }
              }
            }
          }
          if (value === "[" && peek2() !== ":" || value === "-" && peek2() === "]") {
            value = `\\${value}`;
          }
          if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
            value = `\\${value}`;
          }
          if (opts.posix === true && value === "!" && prev.value === "[") {
            value = "^";
          }
          prev.value += value;
          append({ value });
          continue;
        }
        if (state.quotes === 1 && value !== '"') {
          value = utils.escapeRegex(value);
          prev.value += value;
          append({ value });
          continue;
        }
        if (value === '"') {
          state.quotes = state.quotes === 1 ? 0 : 1;
          if (opts.keepQuotes === true) {
            push2({ type: "text", value });
          }
          continue;
        }
        if (value === "(") {
          increment("parens");
          push2({ type: "paren", value });
          continue;
        }
        if (value === ")") {
          if (state.parens === 0 && opts.strictBrackets === true) {
            throw new SyntaxError(syntaxError2("opening", "("));
          }
          const extglob = extglobs[extglobs.length - 1];
          if (extglob && state.parens === extglob.parens + 1) {
            extglobClose(extglobs.pop());
            continue;
          }
          push2({ type: "paren", value, output: state.parens ? ")" : "\\)" });
          decrement("parens");
          continue;
        }
        if (value === "[") {
          if (opts.nobracket === true || !remaining().includes("]")) {
            if (opts.nobracket !== true && opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError2("closing", "]"));
            }
            value = `\\${value}`;
          } else {
            increment("brackets");
          }
          push2({ type: "bracket", value });
          continue;
        }
        if (value === "]") {
          if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
            push2({ type: "text", value, output: `\\${value}` });
            continue;
          }
          if (state.brackets === 0) {
            if (opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError2("opening", "["));
            }
            push2({ type: "text", value, output: `\\${value}` });
            continue;
          }
          decrement("brackets");
          const prevValue = prev.value.slice(1);
          if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
            value = `/${value}`;
          }
          prev.value += value;
          append({ value });
          if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
            continue;
          }
          const escaped = utils.escapeRegex(prev.value);
          state.output = state.output.slice(0, -prev.value.length);
          if (opts.literalBrackets === true) {
            state.output += escaped;
            prev.value = escaped;
            continue;
          }
          prev.value = `(${capture}${escaped}|${prev.value})`;
          state.output += prev.value;
          continue;
        }
        if (value === "{" && opts.nobrace !== true) {
          increment("braces");
          const open = {
            type: "brace",
            value,
            output: "(",
            outputIndex: state.output.length,
            tokensIndex: state.tokens.length
          };
          braces.push(open);
          push2(open);
          continue;
        }
        if (value === "}") {
          const brace = braces[braces.length - 1];
          if (opts.nobrace === true || !brace) {
            push2({ type: "text", value, output: value });
            continue;
          }
          let output = ")";
          if (brace.dots === true) {
            const arr = tokens.slice();
            const range = [];
            for (let i = arr.length - 1; i >= 0; i--) {
              tokens.pop();
              if (arr[i].type === "brace") {
                break;
              }
              if (arr[i].type !== "dots") {
                range.unshift(arr[i].value);
              }
            }
            output = expandRange(range, opts);
            state.backtrack = true;
          }
          if (brace.comma !== true && brace.dots !== true) {
            const out = state.output.slice(0, brace.outputIndex);
            const toks = state.tokens.slice(brace.tokensIndex);
            brace.value = brace.output = "\\{";
            value = output = "\\}";
            state.output = out;
            for (const t of toks) {
              state.output += t.output || t.value;
            }
          }
          push2({ type: "brace", value, output });
          decrement("braces");
          braces.pop();
          continue;
        }
        if (value === "|") {
          if (extglobs.length > 0) {
            extglobs[extglobs.length - 1].conditions++;
          }
          push2({ type: "text", value });
          continue;
        }
        if (value === ",") {
          let output = value;
          const brace = braces[braces.length - 1];
          if (brace && stack2[stack2.length - 1] === "braces") {
            brace.comma = true;
            output = "|";
          }
          push2({ type: "comma", value, output });
          continue;
        }
        if (value === "/") {
          if (prev.type === "dot" && state.index === state.start + 1) {
            state.start = state.index + 1;
            state.consumed = "";
            state.output = "";
            tokens.pop();
            prev = bos;
            continue;
          }
          push2({ type: "slash", value, output: SLASH_LITERAL });
          continue;
        }
        if (value === ".") {
          if (state.braces > 0 && prev.type === "dot") {
            if (prev.value === ".") prev.output = DOT_LITERAL;
            const brace = braces[braces.length - 1];
            prev.type = "dots";
            prev.output += value;
            prev.value += value;
            brace.dots = true;
            continue;
          }
          if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
            push2({ type: "text", value, output: DOT_LITERAL });
            continue;
          }
          push2({ type: "dot", value, output: DOT_LITERAL });
          continue;
        }
        if (value === "?") {
          const isGroup = prev && prev.value === "(";
          if (!isGroup && opts.noextglob !== true && peek2() === "(" && peek2(2) !== "?") {
            extglobOpen("qmark", value);
            continue;
          }
          if (prev && prev.type === "paren") {
            const next = peek2();
            let output = value;
            if (next === "<" && !utils.supportsLookbehinds()) {
              throw new Error("Node.js v10 or higher is required for regex lookbehinds");
            }
            if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
              output = `\\${value}`;
            }
            push2({ type: "text", value, output });
            continue;
          }
          if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
            push2({ type: "qmark", value, output: QMARK_NO_DOT });
            continue;
          }
          push2({ type: "qmark", value, output: QMARK });
          continue;
        }
        if (value === "!") {
          if (opts.noextglob !== true && peek2() === "(") {
            if (peek2(2) !== "?" || !/[!=<:]/.test(peek2(3))) {
              extglobOpen("negate", value);
              continue;
            }
          }
          if (opts.nonegate !== true && state.index === 0) {
            negate();
            continue;
          }
        }
        if (value === "+") {
          if (opts.noextglob !== true && peek2() === "(" && peek2(2) !== "?") {
            extglobOpen("plus", value);
            continue;
          }
          if (prev && prev.value === "(" || opts.regex === false) {
            push2({ type: "plus", value, output: PLUS_LITERAL });
            continue;
          }
          if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
            push2({ type: "plus", value });
            continue;
          }
          push2({ type: "plus", value: PLUS_LITERAL });
          continue;
        }
        if (value === "@") {
          if (opts.noextglob !== true && peek2() === "(" && peek2(2) !== "?") {
            push2({ type: "at", extglob: true, value, output: "" });
            continue;
          }
          push2({ type: "text", value });
          continue;
        }
        if (value !== "*") {
          if (value === "$" || value === "^") {
            value = `\\${value}`;
          }
          const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
          if (match) {
            value += match[0];
            state.index += match[0].length;
          }
          push2({ type: "text", value });
          continue;
        }
        if (prev && (prev.type === "globstar" || prev.star === true)) {
          prev.type = "star";
          prev.star = true;
          prev.value += value;
          prev.output = star;
          state.backtrack = true;
          state.globstar = true;
          consume(value);
          continue;
        }
        let rest = remaining();
        if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
          extglobOpen("star", value);
          continue;
        }
        if (prev.type === "star") {
          if (opts.noglobstar === true) {
            consume(value);
            continue;
          }
          const prior = prev.prev;
          const before = prior.prev;
          const isStart = prior.type === "slash" || prior.type === "bos";
          const afterStar = before && (before.type === "star" || before.type === "globstar");
          if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
            push2({ type: "star", value, output: "" });
            continue;
          }
          const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
          const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
          if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
            push2({ type: "star", value, output: "" });
            continue;
          }
          while (rest.slice(0, 3) === "/**") {
            const after = input[state.index + 4];
            if (after && after !== "/") {
              break;
            }
            rest = rest.slice(3);
            consume("/**", 3);
          }
          if (prior.type === "bos" && eos()) {
            prev.type = "globstar";
            prev.value += value;
            prev.output = globstar(opts);
            state.output = prev.output;
            state.globstar = true;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
            prev.value += value;
            state.globstar = true;
            state.output += prior.output + prev.output;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
            const end = rest[1] !== void 0 ? "|$" : "";
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
            prev.value += value;
            state.output += prior.output + prev.output;
            state.globstar = true;
            consume(value + advance());
            push2({ type: "slash", value: "/", output: "" });
            continue;
          }
          if (prior.type === "bos" && rest[0] === "/") {
            prev.type = "globstar";
            prev.value += value;
            prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
            state.output = prev.output;
            state.globstar = true;
            consume(value + advance());
            push2({ type: "slash", value: "/", output: "" });
            continue;
          }
          state.output = state.output.slice(0, -prev.output.length);
          prev.type = "globstar";
          prev.output = globstar(opts);
          prev.value += value;
          state.output += prev.output;
          state.globstar = true;
          consume(value);
          continue;
        }
        const token2 = { type: "star", value, output: star };
        if (opts.bash === true) {
          token2.output = ".*?";
          if (prev.type === "bos" || prev.type === "slash") {
            token2.output = nodot + token2.output;
          }
          push2(token2);
          continue;
        }
        if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
          token2.output = value;
          push2(token2);
          continue;
        }
        if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
          if (prev.type === "dot") {
            state.output += NO_DOT_SLASH;
            prev.output += NO_DOT_SLASH;
          } else if (opts.dot === true) {
            state.output += NO_DOTS_SLASH;
            prev.output += NO_DOTS_SLASH;
          } else {
            state.output += nodot;
            prev.output += nodot;
          }
          if (peek2() !== "*") {
            state.output += ONE_CHAR;
            prev.output += ONE_CHAR;
          }
        }
        push2(token2);
      }
      while (state.brackets > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError2("closing", "]"));
        state.output = utils.escapeLast(state.output, "[");
        decrement("brackets");
      }
      while (state.parens > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError2("closing", ")"));
        state.output = utils.escapeLast(state.output, "(");
        decrement("parens");
      }
      while (state.braces > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError2("closing", "}"));
        state.output = utils.escapeLast(state.output, "{");
        decrement("braces");
      }
      if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
        push2({ type: "maybe_slash", value: "", output: `${SLASH_LITERAL}?` });
      }
      if (state.backtrack === true) {
        state.output = "";
        for (const token2 of state.tokens) {
          state.output += token2.output != null ? token2.output : token2.value;
          if (token2.suffix) {
            state.output += token2.suffix;
          }
        }
      }
      return state;
    };
    parse7.fastpaths = (input, options8) => {
      const opts = { ...options8 };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      const len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      input = REPLACEMENTS[input] || input;
      const win32 = utils.isWindows(options8);
      const {
        DOT_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOTS,
        NO_DOTS_SLASH,
        STAR,
        START_ANCHOR
      } = constants.globChars(win32);
      const nodot = opts.dot ? NO_DOTS : NO_DOT;
      const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
      const capture = opts.capture ? "" : "?:";
      const state = { negated: false, prefix: "" };
      let star = opts.bash === true ? ".*?" : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      const globstar = (opts2) => {
        if (opts2.noglobstar === true) return star;
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const create = (str) => {
        switch (str) {
          case "*":
            return `${nodot}${ONE_CHAR}${star}`;
          case ".*":
            return `${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*.*":
            return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*/*":
            return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
          case "**":
            return nodot + globstar(opts);
          case "**/*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
          case "**/*.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "**/.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
          default: {
            const match = /^(.*?)\.(\w+)$/.exec(str);
            if (!match) return;
            const source3 = create(match[1]);
            if (!source3) return;
            return source3 + DOT_LITERAL + match[2];
          }
        }
      };
      const output = utils.removePrefix(input, state);
      let source2 = create(output);
      if (source2 && opts.strictSlashes !== true) {
        source2 += `${SLASH_LITERAL}?`;
      }
      return source2;
    };
    module.exports = parse7;
  }
});

// node_modules/micromatch/node_modules/picomatch/lib/picomatch.js
var require_picomatch = __commonJS({
  "node_modules/micromatch/node_modules/picomatch/lib/picomatch.js"(exports, module) {
    "use strict";
    var path15 = __require("path");
    var scan = require_scan();
    var parse7 = require_parse2();
    var utils = require_utils2();
    var constants = require_constants2();
    var isObject2 = (val) => val && typeof val === "object" && !Array.isArray(val);
    var picomatch = (glob, options8, returnState = false) => {
      if (Array.isArray(glob)) {
        const fns = glob.map((input) => picomatch(input, options8, returnState));
        const arrayMatcher = (str) => {
          for (const isMatch of fns) {
            const state2 = isMatch(str);
            if (state2) return state2;
          }
          return false;
        };
        return arrayMatcher;
      }
      const isState = isObject2(glob) && glob.tokens && glob.input;
      if (glob === "" || typeof glob !== "string" && !isState) {
        throw new TypeError("Expected pattern to be a non-empty string");
      }
      const opts = options8 || {};
      const posix = utils.isWindows(options8);
      const regex = isState ? picomatch.compileRe(glob, options8) : picomatch.makeRe(glob, options8, false, true);
      const state = regex.state;
      delete regex.state;
      let isIgnored2 = () => false;
      if (opts.ignore) {
        const ignoreOpts = { ...options8, ignore: null, onMatch: null, onResult: null };
        isIgnored2 = picomatch(opts.ignore, ignoreOpts, returnState);
      }
      const matcher = (input, returnObject = false) => {
        const { isMatch, match, output } = picomatch.test(input, regex, options8, { glob, posix });
        const result = { glob, state, regex, posix, input, output, match, isMatch };
        if (typeof opts.onResult === "function") {
          opts.onResult(result);
        }
        if (isMatch === false) {
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (isIgnored2(input)) {
          if (typeof opts.onIgnore === "function") {
            opts.onIgnore(result);
          }
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (typeof opts.onMatch === "function") {
          opts.onMatch(result);
        }
        return returnObject ? result : true;
      };
      if (returnState) {
        matcher.state = state;
      }
      return matcher;
    };
    picomatch.test = (input, regex, options8, { glob, posix } = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected input to be a string");
      }
      if (input === "") {
        return { isMatch: false, output: "" };
      }
      const opts = options8 || {};
      const format3 = opts.format || (posix ? utils.toPosixSlashes : null);
      let match = input === glob;
      let output = match && format3 ? format3(input) : input;
      if (match === false) {
        output = format3 ? format3(input) : input;
        match = output === glob;
      }
      if (match === false || opts.capture === true) {
        if (opts.matchBase === true || opts.basename === true) {
          match = picomatch.matchBase(input, regex, options8, posix);
        } else {
          match = regex.exec(output);
        }
      }
      return { isMatch: Boolean(match), match, output };
    };
    picomatch.matchBase = (input, glob, options8, posix = utils.isWindows(options8)) => {
      const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options8);
      return regex.test(path15.basename(input));
    };
    picomatch.isMatch = (str, patterns, options8) => picomatch(patterns, options8)(str);
    picomatch.parse = (pattern, options8) => {
      if (Array.isArray(pattern)) return pattern.map((p) => picomatch.parse(p, options8));
      return parse7(pattern, { ...options8, fastpaths: false });
    };
    picomatch.scan = (input, options8) => scan(input, options8);
    picomatch.compileRe = (state, options8, returnOutput = false, returnState = false) => {
      if (returnOutput === true) {
        return state.output;
      }
      const opts = options8 || {};
      const prepend = opts.contains ? "" : "^";
      const append = opts.contains ? "" : "$";
      let source2 = `${prepend}(?:${state.output})${append}`;
      if (state && state.negated === true) {
        source2 = `^(?!${source2}).*$`;
      }
      const regex = picomatch.toRegex(source2, options8);
      if (returnState === true) {
        regex.state = state;
      }
      return regex;
    };
    picomatch.makeRe = (input, options8 = {}, returnOutput = false, returnState = false) => {
      if (!input || typeof input !== "string") {
        throw new TypeError("Expected a non-empty string");
      }
      let parsed = { negated: false, fastpaths: true };
      if (options8.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
        parsed.output = parse7.fastpaths(input, options8);
      }
      if (!parsed.output) {
        parsed = parse7(input, options8);
      }
      return picomatch.compileRe(parsed, options8, returnOutput, returnState);
    };
    picomatch.toRegex = (source2, options8) => {
      try {
        const opts = options8 || {};
        return new RegExp(source2, opts.flags || (opts.nocase ? "i" : ""));
      } catch (err) {
        if (options8 && options8.debug === true) throw err;
        return /$^/;
      }
    };
    picomatch.constants = constants;
    module.exports = picomatch;
  }
});

// node_modules/micromatch/node_modules/picomatch/index.js
var require_picomatch2 = __commonJS({
  "node_modules/micromatch/node_modules/picomatch/index.js"(exports, module) {
    "use strict";
    module.exports = require_picomatch();
  }
});

// node_modules/micromatch/index.js
var require_micromatch = __commonJS({
  "node_modules/micromatch/index.js"(exports, module) {
    "use strict";
    var util2 = __require("util");
    var braces = require_braces();
    var picomatch = require_picomatch2();
    var utils = require_utils2();
    var isEmptyString = (v) => v === "" || v === "./";
    var hasBraces = (v) => {
      const index = v.indexOf("{");
      return index > -1 && v.indexOf("}", index) > -1;
    };
    var micromatch2 = (list, patterns, options8) => {
      patterns = [].concat(patterns);
      list = [].concat(list);
      let omit2 = /* @__PURE__ */ new Set();
      let keep = /* @__PURE__ */ new Set();
      let items = /* @__PURE__ */ new Set();
      let negatives = 0;
      let onResult = (state) => {
        items.add(state.output);
        if (options8 && options8.onResult) {
          options8.onResult(state);
        }
      };
      for (let i = 0; i < patterns.length; i++) {
        let isMatch = picomatch(String(patterns[i]), { ...options8, onResult }, true);
        let negated = isMatch.state.negated || isMatch.state.negatedExtglob;
        if (negated) negatives++;
        for (let item of list) {
          let matched = isMatch(item, true);
          let match = negated ? !matched.isMatch : matched.isMatch;
          if (!match) continue;
          if (negated) {
            omit2.add(matched.output);
          } else {
            omit2.delete(matched.output);
            keep.add(matched.output);
          }
        }
      }
      let result = negatives === patterns.length ? [...items] : [...keep];
      let matches = result.filter((item) => !omit2.has(item));
      if (options8 && matches.length === 0) {
        if (options8.failglob === true) {
          throw new Error(`No matches found for "${patterns.join(", ")}"`);
        }
        if (options8.nonull === true || options8.nullglob === true) {
          return options8.unescape ? patterns.map((p) => p.replace(/\\/g, "")) : patterns;
        }
      }
      return matches;
    };
    micromatch2.match = micromatch2;
    micromatch2.matcher = (pattern, options8) => picomatch(pattern, options8);
    micromatch2.isMatch = (str, patterns, options8) => picomatch(patterns, options8)(str);
    micromatch2.any = micromatch2.isMatch;
    micromatch2.not = (list, patterns, options8 = {}) => {
      patterns = [].concat(patterns).map(String);
      let result = /* @__PURE__ */ new Set();
      let items = [];
      let onResult = (state) => {
        if (options8.onResult) options8.onResult(state);
        items.push(state.output);
      };
      let matches = new Set(micromatch2(list, patterns, { ...options8, onResult }));
      for (let item of items) {
        if (!matches.has(item)) {
          result.add(item);
        }
      }
      return [...result];
    };
    micromatch2.contains = (str, pattern, options8) => {
      if (typeof str !== "string") {
        throw new TypeError(`Expected a string: "${util2.inspect(str)}"`);
      }
      if (Array.isArray(pattern)) {
        return pattern.some((p) => micromatch2.contains(str, p, options8));
      }
      if (typeof pattern === "string") {
        if (isEmptyString(str) || isEmptyString(pattern)) {
          return false;
        }
        if (str.includes(pattern) || str.startsWith("./") && str.slice(2).includes(pattern)) {
          return true;
        }
      }
      return micromatch2.isMatch(str, pattern, { ...options8, contains: true });
    };
    micromatch2.matchKeys = (obj, patterns, options8) => {
      if (!utils.isObject(obj)) {
        throw new TypeError("Expected the first argument to be an object");
      }
      let keys = micromatch2(Object.keys(obj), patterns, options8);
      let res = {};
      for (let key2 of keys) res[key2] = obj[key2];
      return res;
    };
    micromatch2.some = (list, patterns, options8) => {
      let items = [].concat(list);
      for (let pattern of [].concat(patterns)) {
        let isMatch = picomatch(String(pattern), options8);
        if (items.some((item) => isMatch(item))) {
          return true;
        }
      }
      return false;
    };
    micromatch2.every = (list, patterns, options8) => {
      let items = [].concat(list);
      for (let pattern of [].concat(patterns)) {
        let isMatch = picomatch(String(pattern), options8);
        if (!items.every((item) => isMatch(item))) {
          return false;
        }
      }
      return true;
    };
    micromatch2.all = (str, patterns, options8) => {
      if (typeof str !== "string") {
        throw new TypeError(`Expected a string: "${util2.inspect(str)}"`);
      }
      return [].concat(patterns).every((p) => picomatch(p, options8)(str));
    };
    micromatch2.capture = (glob, input, options8) => {
      let posix = utils.isWindows(options8);
      let regex = picomatch.makeRe(String(glob), { ...options8, capture: true });
      let match = regex.exec(posix ? utils.toPosixSlashes(input) : input);
      if (match) {
        return match.slice(1).map((v) => v === void 0 ? "" : v);
      }
    };
    micromatch2.makeRe = (...args) => picomatch.makeRe(...args);
    micromatch2.scan = (...args) => picomatch.scan(...args);
    micromatch2.parse = (patterns, options8) => {
      let res = [];
      for (let pattern of [].concat(patterns || [])) {
        for (let str of braces(String(pattern), options8)) {
          res.push(picomatch.parse(str, options8));
        }
      }
      return res;
    };
    micromatch2.braces = (pattern, options8) => {
      if (typeof pattern !== "string") throw new TypeError("Expected a string");
      if (options8 && options8.nobrace === true || !hasBraces(pattern)) {
        return [pattern];
      }
      return braces(pattern, options8);
    };
    micromatch2.braceExpand = (pattern, options8) => {
      if (typeof pattern !== "string") throw new TypeError("Expected a string");
      return micromatch2.braces(pattern, { ...options8, expand: true });
    };
    micromatch2.hasBraces = hasBraces;
    module.exports = micromatch2;
  }
});

// node_modules/fast-glob/out/utils/pattern.js
var require_pattern = __commonJS({
  "node_modules/fast-glob/out/utils/pattern.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isAbsolute = exports.partitionAbsoluteAndRelative = exports.removeDuplicateSlashes = exports.matchAny = exports.convertPatternsToRe = exports.makeRe = exports.getPatternParts = exports.expandBraceExpansion = exports.expandPatternsWithBraceExpansion = exports.isAffectDepthOfReadingPattern = exports.endsWithSlashGlobStar = exports.hasGlobStar = exports.getBaseDirectory = exports.isPatternRelatedToParentDirectory = exports.getPatternsOutsideCurrentDirectory = exports.getPatternsInsideCurrentDirectory = exports.getPositivePatterns = exports.getNegativePatterns = exports.isPositivePattern = exports.isNegativePattern = exports.convertToNegativePattern = exports.convertToPositivePattern = exports.isDynamicPattern = exports.isStaticPattern = void 0;
    var path15 = __require("path");
    var globParent = require_glob_parent();
    var micromatch2 = require_micromatch();
    var GLOBSTAR = "**";
    var ESCAPE_SYMBOL = "\\";
    var COMMON_GLOB_SYMBOLS_RE = /[*?]|^!/;
    var REGEX_CHARACTER_CLASS_SYMBOLS_RE = /\[[^[]*]/;
    var REGEX_GROUP_SYMBOLS_RE = /(?:^|[^!*+?@])\([^(]*\|[^|]*\)/;
    var GLOB_EXTENSION_SYMBOLS_RE = /[!*+?@]\([^(]*\)/;
    var BRACE_EXPANSION_SEPARATORS_RE = /,|\.\./;
    var DOUBLE_SLASH_RE = /(?!^)\/{2,}/g;
    function isStaticPattern(pattern, options8 = {}) {
      return !isDynamicPattern(pattern, options8);
    }
    exports.isStaticPattern = isStaticPattern;
    function isDynamicPattern(pattern, options8 = {}) {
      if (pattern === "") {
        return false;
      }
      if (options8.caseSensitiveMatch === false || pattern.includes(ESCAPE_SYMBOL)) {
        return true;
      }
      if (COMMON_GLOB_SYMBOLS_RE.test(pattern) || REGEX_CHARACTER_CLASS_SYMBOLS_RE.test(pattern) || REGEX_GROUP_SYMBOLS_RE.test(pattern)) {
        return true;
      }
      if (options8.extglob !== false && GLOB_EXTENSION_SYMBOLS_RE.test(pattern)) {
        return true;
      }
      if (options8.braceExpansion !== false && hasBraceExpansion(pattern)) {
        return true;
      }
      return false;
    }
    exports.isDynamicPattern = isDynamicPattern;
    function hasBraceExpansion(pattern) {
      const openingBraceIndex = pattern.indexOf("{");
      if (openingBraceIndex === -1) {
        return false;
      }
      const closingBraceIndex = pattern.indexOf("}", openingBraceIndex + 1);
      if (closingBraceIndex === -1) {
        return false;
      }
      const braceContent = pattern.slice(openingBraceIndex, closingBraceIndex);
      return BRACE_EXPANSION_SEPARATORS_RE.test(braceContent);
    }
    function convertToPositivePattern(pattern) {
      return isNegativePattern(pattern) ? pattern.slice(1) : pattern;
    }
    exports.convertToPositivePattern = convertToPositivePattern;
    function convertToNegativePattern(pattern) {
      return "!" + pattern;
    }
    exports.convertToNegativePattern = convertToNegativePattern;
    function isNegativePattern(pattern) {
      return pattern.startsWith("!") && pattern[1] !== "(";
    }
    exports.isNegativePattern = isNegativePattern;
    function isPositivePattern(pattern) {
      return !isNegativePattern(pattern);
    }
    exports.isPositivePattern = isPositivePattern;
    function getNegativePatterns(patterns) {
      return patterns.filter(isNegativePattern);
    }
    exports.getNegativePatterns = getNegativePatterns;
    function getPositivePatterns(patterns) {
      return patterns.filter(isPositivePattern);
    }
    exports.getPositivePatterns = getPositivePatterns;
    function getPatternsInsideCurrentDirectory(patterns) {
      return patterns.filter((pattern) => !isPatternRelatedToParentDirectory(pattern));
    }
    exports.getPatternsInsideCurrentDirectory = getPatternsInsideCurrentDirectory;
    function getPatternsOutsideCurrentDirectory(patterns) {
      return patterns.filter(isPatternRelatedToParentDirectory);
    }
    exports.getPatternsOutsideCurrentDirectory = getPatternsOutsideCurrentDirectory;
    function isPatternRelatedToParentDirectory(pattern) {
      return pattern.startsWith("..") || pattern.startsWith("./..");
    }
    exports.isPatternRelatedToParentDirectory = isPatternRelatedToParentDirectory;
    function getBaseDirectory(pattern) {
      return globParent(pattern, { flipBackslashes: false });
    }
    exports.getBaseDirectory = getBaseDirectory;
    function hasGlobStar(pattern) {
      return pattern.includes(GLOBSTAR);
    }
    exports.hasGlobStar = hasGlobStar;
    function endsWithSlashGlobStar(pattern) {
      return pattern.endsWith("/" + GLOBSTAR);
    }
    exports.endsWithSlashGlobStar = endsWithSlashGlobStar;
    function isAffectDepthOfReadingPattern(pattern) {
      const basename = path15.basename(pattern);
      return endsWithSlashGlobStar(pattern) || isStaticPattern(basename);
    }
    exports.isAffectDepthOfReadingPattern = isAffectDepthOfReadingPattern;
    function expandPatternsWithBraceExpansion(patterns) {
      return patterns.reduce((collection, pattern) => {
        return collection.concat(expandBraceExpansion(pattern));
      }, []);
    }
    exports.expandPatternsWithBraceExpansion = expandPatternsWithBraceExpansion;
    function expandBraceExpansion(pattern) {
      const patterns = micromatch2.braces(pattern, { expand: true, nodupes: true, keepEscaping: true });
      patterns.sort((a, b) => a.length - b.length);
      return patterns.filter((pattern2) => pattern2 !== "");
    }
    exports.expandBraceExpansion = expandBraceExpansion;
    function getPatternParts(pattern, options8) {
      let { parts } = micromatch2.scan(pattern, Object.assign(Object.assign({}, options8), { parts: true }));
      if (parts.length === 0) {
        parts = [pattern];
      }
      if (parts[0].startsWith("/")) {
        parts[0] = parts[0].slice(1);
        parts.unshift("");
      }
      return parts;
    }
    exports.getPatternParts = getPatternParts;
    function makeRe(pattern, options8) {
      return micromatch2.makeRe(pattern, options8);
    }
    exports.makeRe = makeRe;
    function convertPatternsToRe(patterns, options8) {
      return patterns.map((pattern) => makeRe(pattern, options8));
    }
    exports.convertPatternsToRe = convertPatternsToRe;
    function matchAny(entry, patternsRe) {
      return patternsRe.some((patternRe) => patternRe.test(entry));
    }
    exports.matchAny = matchAny;
    function removeDuplicateSlashes(pattern) {
      return pattern.replace(DOUBLE_SLASH_RE, "/");
    }
    exports.removeDuplicateSlashes = removeDuplicateSlashes;
    function partitionAbsoluteAndRelative(patterns) {
      const absolute = [];
      const relative2 = [];
      for (const pattern of patterns) {
        if (isAbsolute(pattern)) {
          absolute.push(pattern);
        } else {
          relative2.push(pattern);
        }
      }
      return [absolute, relative2];
    }
    exports.partitionAbsoluteAndRelative = partitionAbsoluteAndRelative;
    function isAbsolute(pattern) {
      return path15.isAbsolute(pattern);
    }
    exports.isAbsolute = isAbsolute;
  }
});

// node_modules/merge2/index.js
var require_merge2 = __commonJS({
  "node_modules/merge2/index.js"(exports, module) {
    "use strict";
    var Stream = __require("stream");
    var PassThrough = Stream.PassThrough;
    var slice = Array.prototype.slice;
    module.exports = merge2;
    function merge2() {
      const streamsQueue = [];
      const args = slice.call(arguments);
      let merging = false;
      let options8 = args[args.length - 1];
      if (options8 && !Array.isArray(options8) && options8.pipe == null) {
        args.pop();
      } else {
        options8 = {};
      }
      const doEnd = options8.end !== false;
      const doPipeError = options8.pipeError === true;
      if (options8.objectMode == null) {
        options8.objectMode = true;
      }
      if (options8.highWaterMark == null) {
        options8.highWaterMark = 64 * 1024;
      }
      const mergedStream = PassThrough(options8);
      function addStream() {
        for (let i = 0, len = arguments.length; i < len; i++) {
          streamsQueue.push(pauseStreams(arguments[i], options8));
        }
        mergeStream();
        return this;
      }
      function mergeStream() {
        if (merging) {
          return;
        }
        merging = true;
        let streams = streamsQueue.shift();
        if (!streams) {
          process.nextTick(endStream);
          return;
        }
        if (!Array.isArray(streams)) {
          streams = [streams];
        }
        let pipesCount = streams.length + 1;
        function next() {
          if (--pipesCount > 0) {
            return;
          }
          merging = false;
          mergeStream();
        }
        function pipe(stream) {
          function onend() {
            stream.removeListener("merge2UnpipeEnd", onend);
            stream.removeListener("end", onend);
            if (doPipeError) {
              stream.removeListener("error", onerror);
            }
            next();
          }
          function onerror(err) {
            mergedStream.emit("error", err);
          }
          if (stream._readableState.endEmitted) {
            return next();
          }
          stream.on("merge2UnpipeEnd", onend);
          stream.on("end", onend);
          if (doPipeError) {
            stream.on("error", onerror);
          }
          stream.pipe(mergedStream, { end: false });
          stream.resume();
        }
        for (let i = 0; i < streams.length; i++) {
          pipe(streams[i]);
        }
        next();
      }
      function endStream() {
        merging = false;
        mergedStream.emit("queueDrain");
        if (doEnd) {
          mergedStream.end();
        }
      }
      mergedStream.setMaxListeners(0);
      mergedStream.add = addStream;
      mergedStream.on("unpipe", function(stream) {
        stream.emit("merge2UnpipeEnd");
      });
      if (args.length) {
        addStream.apply(null, args);
      }
      return mergedStream;
    }
    function pauseStreams(streams, options8) {
      if (!Array.isArray(streams)) {
        if (!streams._readableState && streams.pipe) {
          streams = streams.pipe(PassThrough(options8));
        }
        if (!streams._readableState || !streams.pause || !streams.pipe) {
          throw new Error("Only readable stream can be merged.");
        }
        streams.pause();
      } else {
        for (let i = 0, len = streams.length; i < len; i++) {
          streams[i] = pauseStreams(streams[i], options8);
        }
      }
      return streams;
    }
  }
});

// node_modules/fast-glob/out/utils/stream.js
var require_stream = __commonJS({
  "node_modules/fast-glob/out/utils/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.merge = void 0;
    var merge2 = require_merge2();
    function merge(streams) {
      const mergedStream = merge2(streams);
      streams.forEach((stream) => {
        stream.once("error", (error) => mergedStream.emit("error", error));
      });
      mergedStream.once("close", () => propagateCloseEventToSources(streams));
      mergedStream.once("end", () => propagateCloseEventToSources(streams));
      return mergedStream;
    }
    exports.merge = merge;
    function propagateCloseEventToSources(streams) {
      streams.forEach((stream) => stream.emit("close"));
    }
  }
});

// node_modules/fast-glob/out/utils/string.js
var require_string = __commonJS({
  "node_modules/fast-glob/out/utils/string.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEmpty = exports.isString = void 0;
    function isString(input) {
      return typeof input === "string";
    }
    exports.isString = isString;
    function isEmpty(input) {
      return input === "";
    }
    exports.isEmpty = isEmpty;
  }
});

// node_modules/fast-glob/out/utils/index.js
var require_utils3 = __commonJS({
  "node_modules/fast-glob/out/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.string = exports.stream = exports.pattern = exports.path = exports.fs = exports.errno = exports.array = void 0;
    var array2 = require_array();
    exports.array = array2;
    var errno = require_errno();
    exports.errno = errno;
    var fs4 = require_fs();
    exports.fs = fs4;
    var path15 = require_path();
    exports.path = path15;
    var pattern = require_pattern();
    exports.pattern = pattern;
    var stream = require_stream();
    exports.stream = stream;
    var string = require_string();
    exports.string = string;
  }
});

// node_modules/fast-glob/out/managers/tasks.js
var require_tasks = __commonJS({
  "node_modules/fast-glob/out/managers/tasks.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertPatternGroupToTask = exports.convertPatternGroupsToTasks = exports.groupPatternsByBaseDirectory = exports.getNegativePatternsAsPositive = exports.getPositivePatterns = exports.convertPatternsToTasks = exports.generate = void 0;
    var utils = require_utils3();
    function generate(input, settings) {
      const patterns = processPatterns(input, settings);
      const ignore = processPatterns(settings.ignore, settings);
      const positivePatterns = getPositivePatterns(patterns);
      const negativePatterns = getNegativePatternsAsPositive(patterns, ignore);
      const staticPatterns = positivePatterns.filter((pattern) => utils.pattern.isStaticPattern(pattern, settings));
      const dynamicPatterns = positivePatterns.filter((pattern) => utils.pattern.isDynamicPattern(pattern, settings));
      const staticTasks = convertPatternsToTasks(
        staticPatterns,
        negativePatterns,
        /* dynamic */
        false
      );
      const dynamicTasks = convertPatternsToTasks(
        dynamicPatterns,
        negativePatterns,
        /* dynamic */
        true
      );
      return staticTasks.concat(dynamicTasks);
    }
    exports.generate = generate;
    function processPatterns(input, settings) {
      let patterns = input;
      if (settings.braceExpansion) {
        patterns = utils.pattern.expandPatternsWithBraceExpansion(patterns);
      }
      if (settings.baseNameMatch) {
        patterns = patterns.map((pattern) => pattern.includes("/") ? pattern : `**/${pattern}`);
      }
      return patterns.map((pattern) => utils.pattern.removeDuplicateSlashes(pattern));
    }
    function convertPatternsToTasks(positive, negative, dynamic) {
      const tasks = [];
      const patternsOutsideCurrentDirectory = utils.pattern.getPatternsOutsideCurrentDirectory(positive);
      const patternsInsideCurrentDirectory = utils.pattern.getPatternsInsideCurrentDirectory(positive);
      const outsideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsOutsideCurrentDirectory);
      const insideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsInsideCurrentDirectory);
      tasks.push(...convertPatternGroupsToTasks(outsideCurrentDirectoryGroup, negative, dynamic));
      if ("." in insideCurrentDirectoryGroup) {
        tasks.push(convertPatternGroupToTask(".", patternsInsideCurrentDirectory, negative, dynamic));
      } else {
        tasks.push(...convertPatternGroupsToTasks(insideCurrentDirectoryGroup, negative, dynamic));
      }
      return tasks;
    }
    exports.convertPatternsToTasks = convertPatternsToTasks;
    function getPositivePatterns(patterns) {
      return utils.pattern.getPositivePatterns(patterns);
    }
    exports.getPositivePatterns = getPositivePatterns;
    function getNegativePatternsAsPositive(patterns, ignore) {
      const negative = utils.pattern.getNegativePatterns(patterns).concat(ignore);
      const positive = negative.map(utils.pattern.convertToPositivePattern);
      return positive;
    }
    exports.getNegativePatternsAsPositive = getNegativePatternsAsPositive;
    function groupPatternsByBaseDirectory(patterns) {
      const group = {};
      return patterns.reduce((collection, pattern) => {
        const base = utils.pattern.getBaseDirectory(pattern);
        if (base in collection) {
          collection[base].push(pattern);
        } else {
          collection[base] = [pattern];
        }
        return collection;
      }, group);
    }
    exports.groupPatternsByBaseDirectory = groupPatternsByBaseDirectory;
    function convertPatternGroupsToTasks(positive, negative, dynamic) {
      return Object.keys(positive).map((base) => {
        return convertPatternGroupToTask(base, positive[base], negative, dynamic);
      });
    }
    exports.convertPatternGroupsToTasks = convertPatternGroupsToTasks;
    function convertPatternGroupToTask(base, positive, negative, dynamic) {
      return {
        dynamic,
        positive,
        negative,
        base,
        patterns: [].concat(positive, negative.map(utils.pattern.convertToNegativePattern))
      };
    }
    exports.convertPatternGroupToTask = convertPatternGroupToTask;
  }
});

// node_modules/@nodelib/fs.stat/out/providers/async.js
var require_async = __commonJS({
  "node_modules/@nodelib/fs.stat/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.read = void 0;
    function read3(path15, settings, callback) {
      settings.fs.lstat(path15, (lstatError, lstat2) => {
        if (lstatError !== null) {
          callFailureCallback(callback, lstatError);
          return;
        }
        if (!lstat2.isSymbolicLink() || !settings.followSymbolicLink) {
          callSuccessCallback(callback, lstat2);
          return;
        }
        settings.fs.stat(path15, (statError, stat2) => {
          if (statError !== null) {
            if (settings.throwErrorOnBrokenSymbolicLink) {
              callFailureCallback(callback, statError);
              return;
            }
            callSuccessCallback(callback, lstat2);
            return;
          }
          if (settings.markSymbolicLink) {
            stat2.isSymbolicLink = () => true;
          }
          callSuccessCallback(callback, stat2);
        });
      });
    }
    exports.read = read3;
    function callFailureCallback(callback, error) {
      callback(error);
    }
    function callSuccessCallback(callback, result) {
      callback(null, result);
    }
  }
});

// node_modules/@nodelib/fs.stat/out/providers/sync.js
var require_sync = __commonJS({
  "node_modules/@nodelib/fs.stat/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.read = void 0;
    function read3(path15, settings) {
      const lstat2 = settings.fs.lstatSync(path15);
      if (!lstat2.isSymbolicLink() || !settings.followSymbolicLink) {
        return lstat2;
      }
      try {
        const stat2 = settings.fs.statSync(path15);
        if (settings.markSymbolicLink) {
          stat2.isSymbolicLink = () => true;
        }
        return stat2;
      } catch (error) {
        if (!settings.throwErrorOnBrokenSymbolicLink) {
          return lstat2;
        }
        throw error;
      }
    }
    exports.read = read3;
  }
});

// node_modules/@nodelib/fs.stat/out/adapters/fs.js
var require_fs2 = __commonJS({
  "node_modules/@nodelib/fs.stat/out/adapters/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;
    var fs4 = __require("fs");
    exports.FILE_SYSTEM_ADAPTER = {
      lstat: fs4.lstat,
      stat: fs4.stat,
      lstatSync: fs4.lstatSync,
      statSync: fs4.statSync
    };
    function createFileSystemAdapter(fsMethods) {
      if (fsMethods === void 0) {
        return exports.FILE_SYSTEM_ADAPTER;
      }
      return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
    }
    exports.createFileSystemAdapter = createFileSystemAdapter;
  }
});

// node_modules/@nodelib/fs.stat/out/settings.js
var require_settings = __commonJS({
  "node_modules/@nodelib/fs.stat/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fs4 = require_fs2();
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.followSymbolicLink = this._getValue(this._options.followSymbolicLink, true);
        this.fs = fs4.createFileSystemAdapter(this._options.fs);
        this.markSymbolicLink = this._getValue(this._options.markSymbolicLink, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
      }
      _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
      }
    };
    exports.default = Settings;
  }
});

// node_modules/@nodelib/fs.stat/out/index.js
var require_out = __commonJS({
  "node_modules/@nodelib/fs.stat/out/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.statSync = exports.stat = exports.Settings = void 0;
    var async = require_async();
    var sync = require_sync();
    var settings_1 = require_settings();
    exports.Settings = settings_1.default;
    function stat2(path15, optionsOrSettingsOrCallback, callback) {
      if (typeof optionsOrSettingsOrCallback === "function") {
        async.read(path15, getSettings(), optionsOrSettingsOrCallback);
        return;
      }
      async.read(path15, getSettings(optionsOrSettingsOrCallback), callback);
    }
    exports.stat = stat2;
    function statSync2(path15, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      return sync.read(path15, settings);
    }
    exports.statSync = statSync2;
    function getSettings(settingsOrOptions = {}) {
      if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
      }
      return new settings_1.default(settingsOrOptions);
    }
  }
});

// node_modules/queue-microtask/index.js
var require_queue_microtask = __commonJS({
  "node_modules/queue-microtask/index.js"(exports, module) {
    var promise;
    module.exports = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : global) : (cb) => (promise || (promise = Promise.resolve())).then(cb).catch((err) => setTimeout(() => {
      throw err;
    }, 0));
  }
});

// node_modules/run-parallel/index.js
var require_run_parallel = __commonJS({
  "node_modules/run-parallel/index.js"(exports, module) {
    module.exports = runParallel;
    var queueMicrotask2 = require_queue_microtask();
    function runParallel(tasks, cb) {
      let results, pending, keys;
      let isSync = true;
      if (Array.isArray(tasks)) {
        results = [];
        pending = tasks.length;
      } else {
        keys = Object.keys(tasks);
        results = {};
        pending = keys.length;
      }
      function done(err) {
        function end() {
          if (cb) cb(err, results);
          cb = null;
        }
        if (isSync) queueMicrotask2(end);
        else end();
      }
      function each(i, err, result) {
        results[i] = result;
        if (--pending === 0 || err) {
          done(err);
        }
      }
      if (!pending) {
        done(null);
      } else if (keys) {
        keys.forEach(function(key2) {
          tasks[key2](function(err, result) {
            each(key2, err, result);
          });
        });
      } else {
        tasks.forEach(function(task, i) {
          task(function(err, result) {
            each(i, err, result);
          });
        });
      }
      isSync = false;
    }
  }
});

// node_modules/@nodelib/fs.scandir/out/constants.js
var require_constants3 = __commonJS({
  "node_modules/@nodelib/fs.scandir/out/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IS_SUPPORT_READDIR_WITH_FILE_TYPES = void 0;
    var NODE_PROCESS_VERSION_PARTS = process.versions.node.split(".");
    if (NODE_PROCESS_VERSION_PARTS[0] === void 0 || NODE_PROCESS_VERSION_PARTS[1] === void 0) {
      throw new Error(`Unexpected behavior. The 'process.versions.node' variable has invalid value: ${process.versions.node}`);
    }
    var MAJOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[0], 10);
    var MINOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[1], 10);
    var SUPPORTED_MAJOR_VERSION = 10;
    var SUPPORTED_MINOR_VERSION = 10;
    var IS_MATCHED_BY_MAJOR = MAJOR_VERSION > SUPPORTED_MAJOR_VERSION;
    var IS_MATCHED_BY_MAJOR_AND_MINOR = MAJOR_VERSION === SUPPORTED_MAJOR_VERSION && MINOR_VERSION >= SUPPORTED_MINOR_VERSION;
    exports.IS_SUPPORT_READDIR_WITH_FILE_TYPES = IS_MATCHED_BY_MAJOR || IS_MATCHED_BY_MAJOR_AND_MINOR;
  }
});

// node_modules/@nodelib/fs.scandir/out/utils/fs.js
var require_fs3 = __commonJS({
  "node_modules/@nodelib/fs.scandir/out/utils/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDirentFromStats = void 0;
    var DirentFromStats = class {
      constructor(name, stats) {
        this.name = name;
        this.isBlockDevice = stats.isBlockDevice.bind(stats);
        this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
        this.isDirectory = stats.isDirectory.bind(stats);
        this.isFIFO = stats.isFIFO.bind(stats);
        this.isFile = stats.isFile.bind(stats);
        this.isSocket = stats.isSocket.bind(stats);
        this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
      }
    };
    function createDirentFromStats(name, stats) {
      return new DirentFromStats(name, stats);
    }
    exports.createDirentFromStats = createDirentFromStats;
  }
});

// node_modules/@nodelib/fs.scandir/out/utils/index.js
var require_utils4 = __commonJS({
  "node_modules/@nodelib/fs.scandir/out/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fs = void 0;
    var fs4 = require_fs3();
    exports.fs = fs4;
  }
});

// node_modules/@nodelib/fs.scandir/out/providers/common.js
var require_common = __commonJS({
  "node_modules/@nodelib/fs.scandir/out/providers/common.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.joinPathSegments = void 0;
    function joinPathSegments(a, b, separator) {
      if (a.endsWith(separator)) {
        return a + b;
      }
      return a + separator + b;
    }
    exports.joinPathSegments = joinPathSegments;
  }
});

// node_modules/@nodelib/fs.scandir/out/providers/async.js
var require_async2 = __commonJS({
  "node_modules/@nodelib/fs.scandir/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readdir = exports.readdirWithFileTypes = exports.read = void 0;
    var fsStat = require_out();
    var rpl = require_run_parallel();
    var constants_1 = require_constants3();
    var utils = require_utils4();
    var common = require_common();
    function read3(directory, settings, callback) {
      if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
        readdirWithFileTypes(directory, settings, callback);
        return;
      }
      readdir(directory, settings, callback);
    }
    exports.read = read3;
    function readdirWithFileTypes(directory, settings, callback) {
      settings.fs.readdir(directory, { withFileTypes: true }, (readdirError, dirents) => {
        if (readdirError !== null) {
          callFailureCallback(callback, readdirError);
          return;
        }
        const entries = dirents.map((dirent) => ({
          dirent,
          name: dirent.name,
          path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
        }));
        if (!settings.followSymbolicLinks) {
          callSuccessCallback(callback, entries);
          return;
        }
        const tasks = entries.map((entry) => makeRplTaskEntry(entry, settings));
        rpl(tasks, (rplError, rplEntries) => {
          if (rplError !== null) {
            callFailureCallback(callback, rplError);
            return;
          }
          callSuccessCallback(callback, rplEntries);
        });
      });
    }
    exports.readdirWithFileTypes = readdirWithFileTypes;
    function makeRplTaskEntry(entry, settings) {
      return (done) => {
        if (!entry.dirent.isSymbolicLink()) {
          done(null, entry);
          return;
        }
        settings.fs.stat(entry.path, (statError, stats) => {
          if (statError !== null) {
            if (settings.throwErrorOnBrokenSymbolicLink) {
              done(statError);
              return;
            }
            done(null, entry);
            return;
          }
          entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
          done(null, entry);
        });
      };
    }
    function readdir(directory, settings, callback) {
      settings.fs.readdir(directory, (readdirError, names) => {
        if (readdirError !== null) {
          callFailureCallback(callback, readdirError);
          return;
        }
        const tasks = names.map((name) => {
          const path15 = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
          return (done) => {
            fsStat.stat(path15, settings.fsStatSettings, (error, stats) => {
              if (error !== null) {
                done(error);
                return;
              }
              const entry = {
                name,
                path: path15,
                dirent: utils.fs.createDirentFromStats(name, stats)
              };
              if (settings.stats) {
                entry.stats = stats;
              }
              done(null, entry);
            });
          };
        });
        rpl(tasks, (rplError, entries) => {
          if (rplError !== null) {
            callFailureCallback(callback, rplError);
            return;
          }
          callSuccessCallback(callback, entries);
        });
      });
    }
    exports.readdir = readdir;
    function callFailureCallback(callback, error) {
      callback(error);
    }
    function callSuccessCallback(callback, result) {
      callback(null, result);
    }
  }
});

// node_modules/@nodelib/fs.scandir/out/providers/sync.js
var require_sync2 = __commonJS({
  "node_modules/@nodelib/fs.scandir/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readdir = exports.readdirWithFileTypes = exports.read = void 0;
    var fsStat = require_out();
    var constants_1 = require_constants3();
    var utils = require_utils4();
    var common = require_common();
    function read3(directory, settings) {
      if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
        return readdirWithFileTypes(directory, settings);
      }
      return readdir(directory, settings);
    }
    exports.read = read3;
    function readdirWithFileTypes(directory, settings) {
      const dirents = settings.fs.readdirSync(directory, { withFileTypes: true });
      return dirents.map((dirent) => {
        const entry = {
          dirent,
          name: dirent.name,
          path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
        };
        if (entry.dirent.isSymbolicLink() && settings.followSymbolicLinks) {
          try {
            const stats = settings.fs.statSync(entry.path);
            entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
          } catch (error) {
            if (settings.throwErrorOnBrokenSymbolicLink) {
              throw error;
            }
          }
        }
        return entry;
      });
    }
    exports.readdirWithFileTypes = readdirWithFileTypes;
    function readdir(directory, settings) {
      const names = settings.fs.readdirSync(directory);
      return names.map((name) => {
        const entryPath = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
        const stats = fsStat.statSync(entryPath, settings.fsStatSettings);
        const entry = {
          name,
          path: entryPath,
          dirent: utils.fs.createDirentFromStats(name, stats)
        };
        if (settings.stats) {
          entry.stats = stats;
        }
        return entry;
      });
    }
    exports.readdir = readdir;
  }
});

// node_modules/@nodelib/fs.scandir/out/adapters/fs.js
var require_fs4 = __commonJS({
  "node_modules/@nodelib/fs.scandir/out/adapters/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;
    var fs4 = __require("fs");
    exports.FILE_SYSTEM_ADAPTER = {
      lstat: fs4.lstat,
      stat: fs4.stat,
      lstatSync: fs4.lstatSync,
      statSync: fs4.statSync,
      readdir: fs4.readdir,
      readdirSync: fs4.readdirSync
    };
    function createFileSystemAdapter(fsMethods) {
      if (fsMethods === void 0) {
        return exports.FILE_SYSTEM_ADAPTER;
      }
      return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
    }
    exports.createFileSystemAdapter = createFileSystemAdapter;
  }
});

// node_modules/@nodelib/fs.scandir/out/settings.js
var require_settings2 = __commonJS({
  "node_modules/@nodelib/fs.scandir/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path15 = __require("path");
    var fsStat = require_out();
    var fs4 = require_fs4();
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, false);
        this.fs = fs4.createFileSystemAdapter(this._options.fs);
        this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path15.sep);
        this.stats = this._getValue(this._options.stats, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
        this.fsStatSettings = new fsStat.Settings({
          followSymbolicLink: this.followSymbolicLinks,
          fs: this.fs,
          throwErrorOnBrokenSymbolicLink: this.throwErrorOnBrokenSymbolicLink
        });
      }
      _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
      }
    };
    exports.default = Settings;
  }
});

// node_modules/@nodelib/fs.scandir/out/index.js
var require_out2 = __commonJS({
  "node_modules/@nodelib/fs.scandir/out/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Settings = exports.scandirSync = exports.scandir = void 0;
    var async = require_async2();
    var sync = require_sync2();
    var settings_1 = require_settings2();
    exports.Settings = settings_1.default;
    function scandir(path15, optionsOrSettingsOrCallback, callback) {
      if (typeof optionsOrSettingsOrCallback === "function") {
        async.read(path15, getSettings(), optionsOrSettingsOrCallback);
        return;
      }
      async.read(path15, getSettings(optionsOrSettingsOrCallback), callback);
    }
    exports.scandir = scandir;
    function scandirSync(path15, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      return sync.read(path15, settings);
    }
    exports.scandirSync = scandirSync;
    function getSettings(settingsOrOptions = {}) {
      if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
      }
      return new settings_1.default(settingsOrOptions);
    }
  }
});

// node_modules/reusify/reusify.js
var require_reusify = __commonJS({
  "node_modules/reusify/reusify.js"(exports, module) {
    "use strict";
    function reusify(Constructor) {
      var head = new Constructor();
      var tail = head;
      function get() {
        var current = head;
        if (current.next) {
          head = current.next;
        } else {
          head = new Constructor();
          tail = head;
        }
        current.next = null;
        return current;
      }
      function release(obj) {
        tail.next = obj;
        tail = obj;
      }
      return {
        get,
        release
      };
    }
    module.exports = reusify;
  }
});

// node_modules/fastq/queue.js
var require_queue = __commonJS({
  "node_modules/fastq/queue.js"(exports, module) {
    "use strict";
    var reusify = require_reusify();
    function fastqueue(context, worker, _concurrency) {
      if (typeof context === "function") {
        _concurrency = worker;
        worker = context;
        context = null;
      }
      if (!(_concurrency >= 1)) {
        throw new Error("fastqueue concurrency must be equal to or greater than 1");
      }
      var cache3 = reusify(Task);
      var queueHead = null;
      var queueTail = null;
      var _running = 0;
      var errorHandler = null;
      var self = {
        push: push2,
        drain: noop2,
        saturated: noop2,
        pause,
        paused: false,
        get concurrency() {
          return _concurrency;
        },
        set concurrency(value) {
          if (!(value >= 1)) {
            throw new Error("fastqueue concurrency must be equal to or greater than 1");
          }
          _concurrency = value;
          if (self.paused) return;
          for (; queueHead && _running < _concurrency; ) {
            _running++;
            release();
          }
        },
        running,
        resume,
        idle,
        length,
        getQueue,
        unshift,
        empty: noop2,
        kill,
        killAndDrain,
        error
      };
      return self;
      function running() {
        return _running;
      }
      function pause() {
        self.paused = true;
      }
      function length() {
        var current = queueHead;
        var counter = 0;
        while (current) {
          current = current.next;
          counter++;
        }
        return counter;
      }
      function getQueue() {
        var current = queueHead;
        var tasks = [];
        while (current) {
          tasks.push(current.value);
          current = current.next;
        }
        return tasks;
      }
      function resume() {
        if (!self.paused) return;
        self.paused = false;
        if (queueHead === null) {
          _running++;
          release();
          return;
        }
        for (; queueHead && _running < _concurrency; ) {
          _running++;
          release();
        }
      }
      function idle() {
        return _running === 0 && self.length() === 0;
      }
      function push2(value, done) {
        var current = cache3.get();
        current.context = context;
        current.release = release;
        current.value = value;
        current.callback = done || noop2;
        current.errorHandler = errorHandler;
        if (_running >= _concurrency || self.paused) {
          if (queueTail) {
            queueTail.next = current;
            queueTail = current;
          } else {
            queueHead = current;
            queueTail = current;
            self.saturated();
          }
        } else {
          _running++;
          worker.call(context, current.value, current.worked);
        }
      }
      function unshift(value, done) {
        var current = cache3.get();
        current.context = context;
        current.release = release;
        current.value = value;
        current.callback = done || noop2;
        current.errorHandler = errorHandler;
        if (_running >= _concurrency || self.paused) {
          if (queueHead) {
            current.next = queueHead;
            queueHead = current;
          } else {
            queueHead = current;
            queueTail = current;
            self.saturated();
          }
        } else {
          _running++;
          worker.call(context, current.value, current.worked);
        }
      }
      function release(holder) {
        if (holder) {
          cache3.release(holder);
        }
        var next = queueHead;
        if (next && _running <= _concurrency) {
          if (!self.paused) {
            if (queueTail === queueHead) {
              queueTail = null;
            }
            queueHead = next.next;
            next.next = null;
            worker.call(context, next.value, next.worked);
            if (queueTail === null) {
              self.empty();
            }
          } else {
            _running--;
          }
        } else if (--_running === 0) {
          self.drain();
        }
      }
      function kill() {
        queueHead = null;
        queueTail = null;
        self.drain = noop2;
      }
      function killAndDrain() {
        queueHead = null;
        queueTail = null;
        self.drain();
        self.drain = noop2;
      }
      function error(handler) {
        errorHandler = handler;
      }
    }
    function noop2() {
    }
    function Task() {
      this.value = null;
      this.callback = noop2;
      this.next = null;
      this.release = noop2;
      this.context = null;
      this.errorHandler = null;
      var self = this;
      this.worked = function worked(err, result) {
        var callback = self.callback;
        var errorHandler = self.errorHandler;
        var val = self.value;
        self.value = null;
        self.callback = noop2;
        if (self.errorHandler) {
          errorHandler(err, val);
        }
        callback.call(self.context, err, result);
        self.release(self);
      };
    }
    function queueAsPromised(context, worker, _concurrency) {
      if (typeof context === "function") {
        _concurrency = worker;
        worker = context;
        context = null;
      }
      function asyncWrapper(arg, cb) {
        worker.call(this, arg).then(function(res) {
          cb(null, res);
        }, cb);
      }
      var queue = fastqueue(context, asyncWrapper, _concurrency);
      var pushCb = queue.push;
      var unshiftCb = queue.unshift;
      queue.push = push2;
      queue.unshift = unshift;
      queue.drained = drained;
      return queue;
      function push2(value) {
        var p = new Promise(function(resolve3, reject) {
          pushCb(value, function(err, result) {
            if (err) {
              reject(err);
              return;
            }
            resolve3(result);
          });
        });
        p.catch(noop2);
        return p;
      }
      function unshift(value) {
        var p = new Promise(function(resolve3, reject) {
          unshiftCb(value, function(err, result) {
            if (err) {
              reject(err);
              return;
            }
            resolve3(result);
          });
        });
        p.catch(noop2);
        return p;
      }
      function drained() {
        var p = new Promise(function(resolve3) {
          process.nextTick(function() {
            if (queue.idle()) {
              resolve3();
            } else {
              var previousDrain = queue.drain;
              queue.drain = function() {
                if (typeof previousDrain === "function") previousDrain();
                resolve3();
                queue.drain = previousDrain;
              };
            }
          });
        });
        return p;
      }
    }
    module.exports = fastqueue;
    module.exports.promise = queueAsPromised;
  }
});

// node_modules/@nodelib/fs.walk/out/readers/common.js
var require_common2 = __commonJS({
  "node_modules/@nodelib/fs.walk/out/readers/common.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.joinPathSegments = exports.replacePathSegmentSeparator = exports.isAppliedFilter = exports.isFatalError = void 0;
    function isFatalError(settings, error) {
      if (settings.errorFilter === null) {
        return true;
      }
      return !settings.errorFilter(error);
    }
    exports.isFatalError = isFatalError;
    function isAppliedFilter(filter2, value) {
      return filter2 === null || filter2(value);
    }
    exports.isAppliedFilter = isAppliedFilter;
    function replacePathSegmentSeparator(filepath, separator) {
      return filepath.split(/[/\\]/).join(separator);
    }
    exports.replacePathSegmentSeparator = replacePathSegmentSeparator;
    function joinPathSegments(a, b, separator) {
      if (a === "") {
        return b;
      }
      if (a.endsWith(separator)) {
        return a + b;
      }
      return a + separator + b;
    }
    exports.joinPathSegments = joinPathSegments;
  }
});

// node_modules/@nodelib/fs.walk/out/readers/reader.js
var require_reader = __commonJS({
  "node_modules/@nodelib/fs.walk/out/readers/reader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var common = require_common2();
    var Reader = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._root = common.replacePathSegmentSeparator(_root, _settings.pathSegmentSeparator);
      }
    };
    exports.default = Reader;
  }
});

// node_modules/@nodelib/fs.walk/out/readers/async.js
var require_async3 = __commonJS({
  "node_modules/@nodelib/fs.walk/out/readers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var events_1 = __require("events");
    var fsScandir = require_out2();
    var fastq = require_queue();
    var common = require_common2();
    var reader_1 = require_reader();
    var AsyncReader = class extends reader_1.default {
      constructor(_root, _settings) {
        super(_root, _settings);
        this._settings = _settings;
        this._scandir = fsScandir.scandir;
        this._emitter = new events_1.EventEmitter();
        this._queue = fastq(this._worker.bind(this), this._settings.concurrency);
        this._isFatalError = false;
        this._isDestroyed = false;
        this._queue.drain = () => {
          if (!this._isFatalError) {
            this._emitter.emit("end");
          }
        };
      }
      read() {
        this._isFatalError = false;
        this._isDestroyed = false;
        setImmediate(() => {
          this._pushToQueue(this._root, this._settings.basePath);
        });
        return this._emitter;
      }
      get isDestroyed() {
        return this._isDestroyed;
      }
      destroy() {
        if (this._isDestroyed) {
          throw new Error("The reader is already destroyed");
        }
        this._isDestroyed = true;
        this._queue.killAndDrain();
      }
      onEntry(callback) {
        this._emitter.on("entry", callback);
      }
      onError(callback) {
        this._emitter.once("error", callback);
      }
      onEnd(callback) {
        this._emitter.once("end", callback);
      }
      _pushToQueue(directory, base) {
        const queueItem = { directory, base };
        this._queue.push(queueItem, (error) => {
          if (error !== null) {
            this._handleError(error);
          }
        });
      }
      _worker(item, done) {
        this._scandir(item.directory, this._settings.fsScandirSettings, (error, entries) => {
          if (error !== null) {
            done(error, void 0);
            return;
          }
          for (const entry of entries) {
            this._handleEntry(entry, item.base);
          }
          done(null, void 0);
        });
      }
      _handleError(error) {
        if (this._isDestroyed || !common.isFatalError(this._settings, error)) {
          return;
        }
        this._isFatalError = true;
        this._isDestroyed = true;
        this._emitter.emit("error", error);
      }
      _handleEntry(entry, base) {
        if (this._isDestroyed || this._isFatalError) {
          return;
        }
        const fullpath = entry.path;
        if (base !== void 0) {
          entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
        }
        if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
          this._emitEntry(entry);
        }
        if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
          this._pushToQueue(fullpath, base === void 0 ? void 0 : entry.path);
        }
      }
      _emitEntry(entry) {
        this._emitter.emit("entry", entry);
      }
    };
    exports.default = AsyncReader;
  }
});

// node_modules/@nodelib/fs.walk/out/providers/async.js
var require_async4 = __commonJS({
  "node_modules/@nodelib/fs.walk/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var async_1 = require_async3();
    var AsyncProvider = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._reader = new async_1.default(this._root, this._settings);
        this._storage = [];
      }
      read(callback) {
        this._reader.onError((error) => {
          callFailureCallback(callback, error);
        });
        this._reader.onEntry((entry) => {
          this._storage.push(entry);
        });
        this._reader.onEnd(() => {
          callSuccessCallback(callback, this._storage);
        });
        this._reader.read();
      }
    };
    exports.default = AsyncProvider;
    function callFailureCallback(callback, error) {
      callback(error);
    }
    function callSuccessCallback(callback, entries) {
      callback(null, entries);
    }
  }
});

// node_modules/@nodelib/fs.walk/out/providers/stream.js
var require_stream2 = __commonJS({
  "node_modules/@nodelib/fs.walk/out/providers/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stream_1 = __require("stream");
    var async_1 = require_async3();
    var StreamProvider = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._reader = new async_1.default(this._root, this._settings);
        this._stream = new stream_1.Readable({
          objectMode: true,
          read: () => {
          },
          destroy: () => {
            if (!this._reader.isDestroyed) {
              this._reader.destroy();
            }
          }
        });
      }
      read() {
        this._reader.onError((error) => {
          this._stream.emit("error", error);
        });
        this._reader.onEntry((entry) => {
          this._stream.push(entry);
        });
        this._reader.onEnd(() => {
          this._stream.push(null);
        });
        this._reader.read();
        return this._stream;
      }
    };
    exports.default = StreamProvider;
  }
});

// node_modules/@nodelib/fs.walk/out/readers/sync.js
var require_sync3 = __commonJS({
  "node_modules/@nodelib/fs.walk/out/readers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fsScandir = require_out2();
    var common = require_common2();
    var reader_1 = require_reader();
    var SyncReader = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._scandir = fsScandir.scandirSync;
        this._storage = [];
        this._queue = /* @__PURE__ */ new Set();
      }
      read() {
        this._pushToQueue(this._root, this._settings.basePath);
        this._handleQueue();
        return this._storage;
      }
      _pushToQueue(directory, base) {
        this._queue.add({ directory, base });
      }
      _handleQueue() {
        for (const item of this._queue.values()) {
          this._handleDirectory(item.directory, item.base);
        }
      }
      _handleDirectory(directory, base) {
        try {
          const entries = this._scandir(directory, this._settings.fsScandirSettings);
          for (const entry of entries) {
            this._handleEntry(entry, base);
          }
        } catch (error) {
          this._handleError(error);
        }
      }
      _handleError(error) {
        if (!common.isFatalError(this._settings, error)) {
          return;
        }
        throw error;
      }
      _handleEntry(entry, base) {
        const fullpath = entry.path;
        if (base !== void 0) {
          entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
        }
        if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
          this._pushToStorage(entry);
        }
        if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
          this._pushToQueue(fullpath, base === void 0 ? void 0 : entry.path);
        }
      }
      _pushToStorage(entry) {
        this._storage.push(entry);
      }
    };
    exports.default = SyncReader;
  }
});

// node_modules/@nodelib/fs.walk/out/providers/sync.js
var require_sync4 = __commonJS({
  "node_modules/@nodelib/fs.walk/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var sync_1 = require_sync3();
    var SyncProvider = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._reader = new sync_1.default(this._root, this._settings);
      }
      read() {
        return this._reader.read();
      }
    };
    exports.default = SyncProvider;
  }
});

// node_modules/@nodelib/fs.walk/out/settings.js
var require_settings3 = __commonJS({
  "node_modules/@nodelib/fs.walk/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path15 = __require("path");
    var fsScandir = require_out2();
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.basePath = this._getValue(this._options.basePath, void 0);
        this.concurrency = this._getValue(this._options.concurrency, Number.POSITIVE_INFINITY);
        this.deepFilter = this._getValue(this._options.deepFilter, null);
        this.entryFilter = this._getValue(this._options.entryFilter, null);
        this.errorFilter = this._getValue(this._options.errorFilter, null);
        this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path15.sep);
        this.fsScandirSettings = new fsScandir.Settings({
          followSymbolicLinks: this._options.followSymbolicLinks,
          fs: this._options.fs,
          pathSegmentSeparator: this._options.pathSegmentSeparator,
          stats: this._options.stats,
          throwErrorOnBrokenSymbolicLink: this._options.throwErrorOnBrokenSymbolicLink
        });
      }
      _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
      }
    };
    exports.default = Settings;
  }
});

// node_modules/@nodelib/fs.walk/out/index.js
var require_out3 = __commonJS({
  "node_modules/@nodelib/fs.walk/out/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Settings = exports.walkStream = exports.walkSync = exports.walk = void 0;
    var async_1 = require_async4();
    var stream_1 = require_stream2();
    var sync_1 = require_sync4();
    var settings_1 = require_settings3();
    exports.Settings = settings_1.default;
    function walk(directory, optionsOrSettingsOrCallback, callback) {
      if (typeof optionsOrSettingsOrCallback === "function") {
        new async_1.default(directory, getSettings()).read(optionsOrSettingsOrCallback);
        return;
      }
      new async_1.default(directory, getSettings(optionsOrSettingsOrCallback)).read(callback);
    }
    exports.walk = walk;
    function walkSync(directory, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      const provider = new sync_1.default(directory, settings);
      return provider.read();
    }
    exports.walkSync = walkSync;
    function walkStream(directory, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      const provider = new stream_1.default(directory, settings);
      return provider.read();
    }
    exports.walkStream = walkStream;
    function getSettings(settingsOrOptions = {}) {
      if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
      }
      return new settings_1.default(settingsOrOptions);
    }
  }
});

// node_modules/fast-glob/out/readers/reader.js
var require_reader2 = __commonJS({
  "node_modules/fast-glob/out/readers/reader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path15 = __require("path");
    var fsStat = require_out();
    var utils = require_utils3();
    var Reader = class {
      constructor(_settings) {
        this._settings = _settings;
        this._fsStatSettings = new fsStat.Settings({
          followSymbolicLink: this._settings.followSymbolicLinks,
          fs: this._settings.fs,
          throwErrorOnBrokenSymbolicLink: this._settings.followSymbolicLinks
        });
      }
      _getFullEntryPath(filepath) {
        return path15.resolve(this._settings.cwd, filepath);
      }
      _makeEntry(stats, pattern) {
        const entry = {
          name: pattern,
          path: pattern,
          dirent: utils.fs.createDirentFromStats(pattern, stats)
        };
        if (this._settings.stats) {
          entry.stats = stats;
        }
        return entry;
      }
      _isFatalError(error) {
        return !utils.errno.isEnoentCodeError(error) && !this._settings.suppressErrors;
      }
    };
    exports.default = Reader;
  }
});

// node_modules/fast-glob/out/readers/stream.js
var require_stream3 = __commonJS({
  "node_modules/fast-glob/out/readers/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stream_1 = __require("stream");
    var fsStat = require_out();
    var fsWalk = require_out3();
    var reader_1 = require_reader2();
    var ReaderStream = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._walkStream = fsWalk.walkStream;
        this._stat = fsStat.stat;
      }
      dynamic(root2, options8) {
        return this._walkStream(root2, options8);
      }
      static(patterns, options8) {
        const filepaths = patterns.map(this._getFullEntryPath, this);
        const stream = new stream_1.PassThrough({ objectMode: true });
        stream._write = (index, _enc, done) => {
          return this._getEntry(filepaths[index], patterns[index], options8).then((entry) => {
            if (entry !== null && options8.entryFilter(entry)) {
              stream.push(entry);
            }
            if (index === filepaths.length - 1) {
              stream.end();
            }
            done();
          }).catch(done);
        };
        for (let i = 0; i < filepaths.length; i++) {
          stream.write(i);
        }
        return stream;
      }
      _getEntry(filepath, pattern, options8) {
        return this._getStat(filepath).then((stats) => this._makeEntry(stats, pattern)).catch((error) => {
          if (options8.errorFilter(error)) {
            return null;
          }
          throw error;
        });
      }
      _getStat(filepath) {
        return new Promise((resolve3, reject) => {
          this._stat(filepath, this._fsStatSettings, (error, stats) => {
            return error === null ? resolve3(stats) : reject(error);
          });
        });
      }
    };
    exports.default = ReaderStream;
  }
});

// node_modules/fast-glob/out/readers/async.js
var require_async5 = __commonJS({
  "node_modules/fast-glob/out/readers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fsWalk = require_out3();
    var reader_1 = require_reader2();
    var stream_1 = require_stream3();
    var ReaderAsync = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._walkAsync = fsWalk.walk;
        this._readerStream = new stream_1.default(this._settings);
      }
      dynamic(root2, options8) {
        return new Promise((resolve3, reject) => {
          this._walkAsync(root2, options8, (error, entries) => {
            if (error === null) {
              resolve3(entries);
            } else {
              reject(error);
            }
          });
        });
      }
      async static(patterns, options8) {
        const entries = [];
        const stream = this._readerStream.static(patterns, options8);
        return new Promise((resolve3, reject) => {
          stream.once("error", reject);
          stream.on("data", (entry) => entries.push(entry));
          stream.once("end", () => resolve3(entries));
        });
      }
    };
    exports.default = ReaderAsync;
  }
});

// node_modules/fast-glob/out/providers/matchers/matcher.js
var require_matcher = __commonJS({
  "node_modules/fast-glob/out/providers/matchers/matcher.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var Matcher = class {
      constructor(_patterns, _settings, _micromatchOptions) {
        this._patterns = _patterns;
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
        this._storage = [];
        this._fillStorage();
      }
      _fillStorage() {
        for (const pattern of this._patterns) {
          const segments = this._getPatternSegments(pattern);
          const sections = this._splitSegmentsIntoSections(segments);
          this._storage.push({
            complete: sections.length <= 1,
            pattern,
            segments,
            sections
          });
        }
      }
      _getPatternSegments(pattern) {
        const parts = utils.pattern.getPatternParts(pattern, this._micromatchOptions);
        return parts.map((part) => {
          const dynamic = utils.pattern.isDynamicPattern(part, this._settings);
          if (!dynamic) {
            return {
              dynamic: false,
              pattern: part
            };
          }
          return {
            dynamic: true,
            pattern: part,
            patternRe: utils.pattern.makeRe(part, this._micromatchOptions)
          };
        });
      }
      _splitSegmentsIntoSections(segments) {
        return utils.array.splitWhen(segments, (segment) => segment.dynamic && utils.pattern.hasGlobStar(segment.pattern));
      }
    };
    exports.default = Matcher;
  }
});

// node_modules/fast-glob/out/providers/matchers/partial.js
var require_partial = __commonJS({
  "node_modules/fast-glob/out/providers/matchers/partial.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var matcher_1 = require_matcher();
    var PartialMatcher = class extends matcher_1.default {
      match(filepath) {
        const parts = filepath.split("/");
        const levels = parts.length;
        const patterns = this._storage.filter((info) => !info.complete || info.segments.length > levels);
        for (const pattern of patterns) {
          const section = pattern.sections[0];
          if (!pattern.complete && levels > section.length) {
            return true;
          }
          const match = parts.every((part, index) => {
            const segment = pattern.segments[index];
            if (segment.dynamic && segment.patternRe.test(part)) {
              return true;
            }
            if (!segment.dynamic && segment.pattern === part) {
              return true;
            }
            return false;
          });
          if (match) {
            return true;
          }
        }
        return false;
      }
    };
    exports.default = PartialMatcher;
  }
});

// node_modules/fast-glob/out/providers/filters/deep.js
var require_deep = __commonJS({
  "node_modules/fast-glob/out/providers/filters/deep.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var partial_1 = require_partial();
    var DeepFilter = class {
      constructor(_settings, _micromatchOptions) {
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
      }
      getFilter(basePath, positive, negative) {
        const matcher = this._getMatcher(positive);
        const negativeRe = this._getNegativePatternsRe(negative);
        return (entry) => this._filter(basePath, entry, matcher, negativeRe);
      }
      _getMatcher(patterns) {
        return new partial_1.default(patterns, this._settings, this._micromatchOptions);
      }
      _getNegativePatternsRe(patterns) {
        const affectDepthOfReadingPatterns = patterns.filter(utils.pattern.isAffectDepthOfReadingPattern);
        return utils.pattern.convertPatternsToRe(affectDepthOfReadingPatterns, this._micromatchOptions);
      }
      _filter(basePath, entry, matcher, negativeRe) {
        if (this._isSkippedByDeep(basePath, entry.path)) {
          return false;
        }
        if (this._isSkippedSymbolicLink(entry)) {
          return false;
        }
        const filepath = utils.path.removeLeadingDotSegment(entry.path);
        if (this._isSkippedByPositivePatterns(filepath, matcher)) {
          return false;
        }
        return this._isSkippedByNegativePatterns(filepath, negativeRe);
      }
      _isSkippedByDeep(basePath, entryPath) {
        if (this._settings.deep === Infinity) {
          return false;
        }
        return this._getEntryLevel(basePath, entryPath) >= this._settings.deep;
      }
      _getEntryLevel(basePath, entryPath) {
        const entryPathDepth = entryPath.split("/").length;
        if (basePath === "") {
          return entryPathDepth;
        }
        const basePathDepth = basePath.split("/").length;
        return entryPathDepth - basePathDepth;
      }
      _isSkippedSymbolicLink(entry) {
        return !this._settings.followSymbolicLinks && entry.dirent.isSymbolicLink();
      }
      _isSkippedByPositivePatterns(entryPath, matcher) {
        return !this._settings.baseNameMatch && !matcher.match(entryPath);
      }
      _isSkippedByNegativePatterns(entryPath, patternsRe) {
        return !utils.pattern.matchAny(entryPath, patternsRe);
      }
    };
    exports.default = DeepFilter;
  }
});

// node_modules/fast-glob/out/providers/filters/entry.js
var require_entry = __commonJS({
  "node_modules/fast-glob/out/providers/filters/entry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var EntryFilter = class {
      constructor(_settings, _micromatchOptions) {
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
        this.index = /* @__PURE__ */ new Map();
      }
      getFilter(positive, negative) {
        const [absoluteNegative, relativeNegative] = utils.pattern.partitionAbsoluteAndRelative(negative);
        const patterns = {
          positive: {
            all: utils.pattern.convertPatternsToRe(positive, this._micromatchOptions)
          },
          negative: {
            absolute: utils.pattern.convertPatternsToRe(absoluteNegative, Object.assign(Object.assign({}, this._micromatchOptions), { dot: true })),
            relative: utils.pattern.convertPatternsToRe(relativeNegative, Object.assign(Object.assign({}, this._micromatchOptions), { dot: true }))
          }
        };
        return (entry) => this._filter(entry, patterns);
      }
      _filter(entry, patterns) {
        const filepath = utils.path.removeLeadingDotSegment(entry.path);
        if (this._settings.unique && this._isDuplicateEntry(filepath)) {
          return false;
        }
        if (this._onlyFileFilter(entry) || this._onlyDirectoryFilter(entry)) {
          return false;
        }
        const isMatched = this._isMatchToPatternsSet(filepath, patterns, entry.dirent.isDirectory());
        if (this._settings.unique && isMatched) {
          this._createIndexRecord(filepath);
        }
        return isMatched;
      }
      _isDuplicateEntry(filepath) {
        return this.index.has(filepath);
      }
      _createIndexRecord(filepath) {
        this.index.set(filepath, void 0);
      }
      _onlyFileFilter(entry) {
        return this._settings.onlyFiles && !entry.dirent.isFile();
      }
      _onlyDirectoryFilter(entry) {
        return this._settings.onlyDirectories && !entry.dirent.isDirectory();
      }
      _isMatchToPatternsSet(filepath, patterns, isDirectory2) {
        const isMatched = this._isMatchToPatterns(filepath, patterns.positive.all, isDirectory2);
        if (!isMatched) {
          return false;
        }
        const isMatchedByRelativeNegative = this._isMatchToPatterns(filepath, patterns.negative.relative, isDirectory2);
        if (isMatchedByRelativeNegative) {
          return false;
        }
        const isMatchedByAbsoluteNegative = this._isMatchToAbsoluteNegative(filepath, patterns.negative.absolute, isDirectory2);
        if (isMatchedByAbsoluteNegative) {
          return false;
        }
        return true;
      }
      _isMatchToAbsoluteNegative(filepath, patternsRe, isDirectory2) {
        if (patternsRe.length === 0) {
          return false;
        }
        const fullpath = utils.path.makeAbsolute(this._settings.cwd, filepath);
        return this._isMatchToPatterns(fullpath, patternsRe, isDirectory2);
      }
      _isMatchToPatterns(filepath, patternsRe, isDirectory2) {
        if (patternsRe.length === 0) {
          return false;
        }
        const isMatched = utils.pattern.matchAny(filepath, patternsRe);
        if (!isMatched && isDirectory2) {
          return utils.pattern.matchAny(filepath + "/", patternsRe);
        }
        return isMatched;
      }
    };
    exports.default = EntryFilter;
  }
});

// node_modules/fast-glob/out/providers/filters/error.js
var require_error = __commonJS({
  "node_modules/fast-glob/out/providers/filters/error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var ErrorFilter = class {
      constructor(_settings) {
        this._settings = _settings;
      }
      getFilter() {
        return (error) => this._isNonFatalError(error);
      }
      _isNonFatalError(error) {
        return utils.errno.isEnoentCodeError(error) || this._settings.suppressErrors;
      }
    };
    exports.default = ErrorFilter;
  }
});

// node_modules/fast-glob/out/providers/transformers/entry.js
var require_entry2 = __commonJS({
  "node_modules/fast-glob/out/providers/transformers/entry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var EntryTransformer = class {
      constructor(_settings) {
        this._settings = _settings;
      }
      getTransformer() {
        return (entry) => this._transform(entry);
      }
      _transform(entry) {
        let filepath = entry.path;
        if (this._settings.absolute) {
          filepath = utils.path.makeAbsolute(this._settings.cwd, filepath);
          filepath = utils.path.unixify(filepath);
        }
        if (this._settings.markDirectories && entry.dirent.isDirectory()) {
          filepath += "/";
        }
        if (!this._settings.objectMode) {
          return filepath;
        }
        return Object.assign(Object.assign({}, entry), { path: filepath });
      }
    };
    exports.default = EntryTransformer;
  }
});

// node_modules/fast-glob/out/providers/provider.js
var require_provider = __commonJS({
  "node_modules/fast-glob/out/providers/provider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path15 = __require("path");
    var deep_1 = require_deep();
    var entry_1 = require_entry();
    var error_1 = require_error();
    var entry_2 = require_entry2();
    var Provider = class {
      constructor(_settings) {
        this._settings = _settings;
        this.errorFilter = new error_1.default(this._settings);
        this.entryFilter = new entry_1.default(this._settings, this._getMicromatchOptions());
        this.deepFilter = new deep_1.default(this._settings, this._getMicromatchOptions());
        this.entryTransformer = new entry_2.default(this._settings);
      }
      _getRootDirectory(task) {
        return path15.resolve(this._settings.cwd, task.base);
      }
      _getReaderOptions(task) {
        const basePath = task.base === "." ? "" : task.base;
        return {
          basePath,
          pathSegmentSeparator: "/",
          concurrency: this._settings.concurrency,
          deepFilter: this.deepFilter.getFilter(basePath, task.positive, task.negative),
          entryFilter: this.entryFilter.getFilter(task.positive, task.negative),
          errorFilter: this.errorFilter.getFilter(),
          followSymbolicLinks: this._settings.followSymbolicLinks,
          fs: this._settings.fs,
          stats: this._settings.stats,
          throwErrorOnBrokenSymbolicLink: this._settings.throwErrorOnBrokenSymbolicLink,
          transform: this.entryTransformer.getTransformer()
        };
      }
      _getMicromatchOptions() {
        return {
          dot: this._settings.dot,
          matchBase: this._settings.baseNameMatch,
          nobrace: !this._settings.braceExpansion,
          nocase: !this._settings.caseSensitiveMatch,
          noext: !this._settings.extglob,
          noglobstar: !this._settings.globstar,
          posix: true,
          strictSlashes: false
        };
      }
    };
    exports.default = Provider;
  }
});

// node_modules/fast-glob/out/providers/async.js
var require_async6 = __commonJS({
  "node_modules/fast-glob/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var async_1 = require_async5();
    var provider_1 = require_provider();
    var ProviderAsync = class extends provider_1.default {
      constructor() {
        super(...arguments);
        this._reader = new async_1.default(this._settings);
      }
      async read(task) {
        const root2 = this._getRootDirectory(task);
        const options8 = this._getReaderOptions(task);
        const entries = await this.api(root2, task, options8);
        return entries.map((entry) => options8.transform(entry));
      }
      api(root2, task, options8) {
        if (task.dynamic) {
          return this._reader.dynamic(root2, options8);
        }
        return this._reader.static(task.patterns, options8);
      }
    };
    exports.default = ProviderAsync;
  }
});

// node_modules/fast-glob/out/providers/stream.js
var require_stream4 = __commonJS({
  "node_modules/fast-glob/out/providers/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stream_1 = __require("stream");
    var stream_2 = require_stream3();
    var provider_1 = require_provider();
    var ProviderStream = class extends provider_1.default {
      constructor() {
        super(...arguments);
        this._reader = new stream_2.default(this._settings);
      }
      read(task) {
        const root2 = this._getRootDirectory(task);
        const options8 = this._getReaderOptions(task);
        const source2 = this.api(root2, task, options8);
        const destination = new stream_1.Readable({ objectMode: true, read: () => {
        } });
        source2.once("error", (error) => destination.emit("error", error)).on("data", (entry) => destination.emit("data", options8.transform(entry))).once("end", () => destination.emit("end"));
        destination.once("close", () => source2.destroy());
        return destination;
      }
      api(root2, task, options8) {
        if (task.dynamic) {
          return this._reader.dynamic(root2, options8);
        }
        return this._reader.static(task.patterns, options8);
      }
    };
    exports.default = ProviderStream;
  }
});

// node_modules/fast-glob/out/readers/sync.js
var require_sync5 = __commonJS({
  "node_modules/fast-glob/out/readers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fsStat = require_out();
    var fsWalk = require_out3();
    var reader_1 = require_reader2();
    var ReaderSync = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._walkSync = fsWalk.walkSync;
        this._statSync = fsStat.statSync;
      }
      dynamic(root2, options8) {
        return this._walkSync(root2, options8);
      }
      static(patterns, options8) {
        const entries = [];
        for (const pattern of patterns) {
          const filepath = this._getFullEntryPath(pattern);
          const entry = this._getEntry(filepath, pattern, options8);
          if (entry === null || !options8.entryFilter(entry)) {
            continue;
          }
          entries.push(entry);
        }
        return entries;
      }
      _getEntry(filepath, pattern, options8) {
        try {
          const stats = this._getStat(filepath);
          return this._makeEntry(stats, pattern);
        } catch (error) {
          if (options8.errorFilter(error)) {
            return null;
          }
          throw error;
        }
      }
      _getStat(filepath) {
        return this._statSync(filepath, this._fsStatSettings);
      }
    };
    exports.default = ReaderSync;
  }
});

// node_modules/fast-glob/out/providers/sync.js
var require_sync6 = __commonJS({
  "node_modules/fast-glob/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var sync_1 = require_sync5();
    var provider_1 = require_provider();
    var ProviderSync = class extends provider_1.default {
      constructor() {
        super(...arguments);
        this._reader = new sync_1.default(this._settings);
      }
      read(task) {
        const root2 = this._getRootDirectory(task);
        const options8 = this._getReaderOptions(task);
        const entries = this.api(root2, task, options8);
        return entries.map(options8.transform);
      }
      api(root2, task, options8) {
        if (task.dynamic) {
          return this._reader.dynamic(root2, options8);
        }
        return this._reader.static(task.patterns, options8);
      }
    };
    exports.default = ProviderSync;
  }
});

// node_modules/fast-glob/out/settings.js
var require_settings4 = __commonJS({
  "node_modules/fast-glob/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_FILE_SYSTEM_ADAPTER = void 0;
    var fs4 = __require("fs");
    var os = __require("os");
    var CPU_COUNT = Math.max(os.cpus().length, 1);
    exports.DEFAULT_FILE_SYSTEM_ADAPTER = {
      lstat: fs4.lstat,
      lstatSync: fs4.lstatSync,
      stat: fs4.stat,
      statSync: fs4.statSync,
      readdir: fs4.readdir,
      readdirSync: fs4.readdirSync
    };
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.absolute = this._getValue(this._options.absolute, false);
        this.baseNameMatch = this._getValue(this._options.baseNameMatch, false);
        this.braceExpansion = this._getValue(this._options.braceExpansion, true);
        this.caseSensitiveMatch = this._getValue(this._options.caseSensitiveMatch, true);
        this.concurrency = this._getValue(this._options.concurrency, CPU_COUNT);
        this.cwd = this._getValue(this._options.cwd, process.cwd());
        this.deep = this._getValue(this._options.deep, Infinity);
        this.dot = this._getValue(this._options.dot, false);
        this.extglob = this._getValue(this._options.extglob, true);
        this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, true);
        this.fs = this._getFileSystemMethods(this._options.fs);
        this.globstar = this._getValue(this._options.globstar, true);
        this.ignore = this._getValue(this._options.ignore, []);
        this.markDirectories = this._getValue(this._options.markDirectories, false);
        this.objectMode = this._getValue(this._options.objectMode, false);
        this.onlyDirectories = this._getValue(this._options.onlyDirectories, false);
        this.onlyFiles = this._getValue(this._options.onlyFiles, true);
        this.stats = this._getValue(this._options.stats, false);
        this.suppressErrors = this._getValue(this._options.suppressErrors, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, false);
        this.unique = this._getValue(this._options.unique, true);
        if (this.onlyDirectories) {
          this.onlyFiles = false;
        }
        if (this.stats) {
          this.objectMode = true;
        }
        this.ignore = [].concat(this.ignore);
      }
      _getValue(option, value) {
        return option === void 0 ? value : option;
      }
      _getFileSystemMethods(methods = {}) {
        return Object.assign(Object.assign({}, exports.DEFAULT_FILE_SYSTEM_ADAPTER), methods);
      }
    };
    exports.default = Settings;
  }
});

// node_modules/fast-glob/out/index.js
var require_out4 = __commonJS({
  "node_modules/fast-glob/out/index.js"(exports, module) {
    "use strict";
    var taskManager = require_tasks();
    var async_1 = require_async6();
    var stream_1 = require_stream4();
    var sync_1 = require_sync6();
    var settings_1 = require_settings4();
    var utils = require_utils3();
    async function FastGlob(source2, options8) {
      assertPatternsInput(source2);
      const works = getWorks(source2, async_1.default, options8);
      const result = await Promise.all(works);
      return utils.array.flatten(result);
    }
    (function(FastGlob2) {
      FastGlob2.glob = FastGlob2;
      FastGlob2.globSync = sync;
      FastGlob2.globStream = stream;
      FastGlob2.async = FastGlob2;
      function sync(source2, options8) {
        assertPatternsInput(source2);
        const works = getWorks(source2, sync_1.default, options8);
        return utils.array.flatten(works);
      }
      FastGlob2.sync = sync;
      function stream(source2, options8) {
        assertPatternsInput(source2);
        const works = getWorks(source2, stream_1.default, options8);
        return utils.stream.merge(works);
      }
      FastGlob2.stream = stream;
      function generateTasks(source2, options8) {
        assertPatternsInput(source2);
        const patterns = [].concat(source2);
        const settings = new settings_1.default(options8);
        return taskManager.generate(patterns, settings);
      }
      FastGlob2.generateTasks = generateTasks;
      function isDynamicPattern(source2, options8) {
        assertPatternsInput(source2);
        const settings = new settings_1.default(options8);
        return utils.pattern.isDynamicPattern(source2, settings);
      }
      FastGlob2.isDynamicPattern = isDynamicPattern;
      function escapePath(source2) {
        assertPatternsInput(source2);
        return utils.path.escape(source2);
      }
      FastGlob2.escapePath = escapePath;
      function convertPathToPattern(source2) {
        assertPatternsInput(source2);
        return utils.path.convertPathToPattern(source2);
      }
      FastGlob2.convertPathToPattern = convertPathToPattern;
      let posix;
      (function(posix2) {
        function escapePath2(source2) {
          assertPatternsInput(source2);
          return utils.path.escapePosixPath(source2);
        }
        posix2.escapePath = escapePath2;
        function convertPathToPattern2(source2) {
          assertPatternsInput(source2);
          return utils.path.convertPosixPathToPattern(source2);
        }
        posix2.convertPathToPattern = convertPathToPattern2;
      })(posix = FastGlob2.posix || (FastGlob2.posix = {}));
      let win32;
      (function(win322) {
        function escapePath2(source2) {
          assertPatternsInput(source2);
          return utils.path.escapeWindowsPath(source2);
        }
        win322.escapePath = escapePath2;
        function convertPathToPattern2(source2) {
          assertPatternsInput(source2);
          return utils.path.convertWindowsPathToPattern(source2);
        }
        win322.convertPathToPattern = convertPathToPattern2;
      })(win32 = FastGlob2.win32 || (FastGlob2.win32 = {}));
    })(FastGlob || (FastGlob = {}));
    function getWorks(source2, _Provider, options8) {
      const patterns = [].concat(source2);
      const settings = new settings_1.default(options8);
      const tasks = taskManager.generate(patterns, settings);
      const provider = new _Provider(settings);
      return tasks.map(provider.read, provider);
    }
    function assertPatternsInput(input) {
      const source2 = [].concat(input);
      const isValidSource = source2.every((item) => utils.string.isString(item) && !utils.string.isEmpty(item));
      if (!isValidSource) {
        throw new TypeError("Patterns must be a string (non empty) or an array of strings");
      }
    }
    module.exports = FastGlob;
  }
});

// node_modules/picocolors/picocolors.js
var require_picocolors = __commonJS({
  "node_modules/picocolors/picocolors.js"(exports, module) {
    var p = process || {};
    var argv = p.argv || [];
    var env = p.env || {};
    var isColorSupported2 = !(!!env.NO_COLOR || argv.includes("--no-color")) && (!!env.FORCE_COLOR || argv.includes("--color") || p.platform === "win32" || (p.stdout || {}).isTTY && env.TERM !== "dumb" || !!env.CI);
    var formatter = (open, close, replace = open) => (input) => {
      let string = "" + input, index = string.indexOf(close, open.length);
      return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
    var replaceClose = (string, close, replace, index) => {
      let result = "", cursor2 = 0;
      do {
        result += string.substring(cursor2, index) + replace;
        cursor2 = index + close.length;
        index = string.indexOf(close, cursor2);
      } while (~index);
      return result + string.substring(cursor2);
    };
    var createColors2 = (enabled = isColorSupported2) => {
      let f = enabled ? formatter : () => String;
      return {
        isColorSupported: enabled,
        reset: f("\x1B[0m", "\x1B[0m"),
        bold: f("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
        dim: f("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
        italic: f("\x1B[3m", "\x1B[23m"),
        underline: f("\x1B[4m", "\x1B[24m"),
        inverse: f("\x1B[7m", "\x1B[27m"),
        hidden: f("\x1B[8m", "\x1B[28m"),
        strikethrough: f("\x1B[9m", "\x1B[29m"),
        black: f("\x1B[30m", "\x1B[39m"),
        red: f("\x1B[31m", "\x1B[39m"),
        green: f("\x1B[32m", "\x1B[39m"),
        yellow: f("\x1B[33m", "\x1B[39m"),
        blue: f("\x1B[34m", "\x1B[39m"),
        magenta: f("\x1B[35m", "\x1B[39m"),
        cyan: f("\x1B[36m", "\x1B[39m"),
        white: f("\x1B[37m", "\x1B[39m"),
        gray: f("\x1B[90m", "\x1B[39m"),
        bgBlack: f("\x1B[40m", "\x1B[49m"),
        bgRed: f("\x1B[41m", "\x1B[49m"),
        bgGreen: f("\x1B[42m", "\x1B[49m"),
        bgYellow: f("\x1B[43m", "\x1B[49m"),
        bgBlue: f("\x1B[44m", "\x1B[49m"),
        bgMagenta: f("\x1B[45m", "\x1B[49m"),
        bgCyan: f("\x1B[46m", "\x1B[49m"),
        bgWhite: f("\x1B[47m", "\x1B[49m"),
        blackBright: f("\x1B[90m", "\x1B[39m"),
        redBright: f("\x1B[91m", "\x1B[39m"),
        greenBright: f("\x1B[92m", "\x1B[39m"),
        yellowBright: f("\x1B[93m", "\x1B[39m"),
        blueBright: f("\x1B[94m", "\x1B[39m"),
        magentaBright: f("\x1B[95m", "\x1B[39m"),
        cyanBright: f("\x1B[96m", "\x1B[39m"),
        whiteBright: f("\x1B[97m", "\x1B[39m"),
        bgBlackBright: f("\x1B[100m", "\x1B[49m"),
        bgRedBright: f("\x1B[101m", "\x1B[49m"),
        bgGreenBright: f("\x1B[102m", "\x1B[49m"),
        bgYellowBright: f("\x1B[103m", "\x1B[49m"),
        bgBlueBright: f("\x1B[104m", "\x1B[49m"),
        bgMagentaBright: f("\x1B[105m", "\x1B[49m"),
        bgCyanBright: f("\x1B[106m", "\x1B[49m"),
        bgWhiteBright: f("\x1B[107m", "\x1B[49m")
      };
    };
    module.exports = createColors2();
    module.exports.createColors = createColors2;
  }
});

// node_modules/semver/internal/debug.js
var require_debug = __commonJS({
  "node_modules/semver/internal/debug.js"(exports, module) {
    "use strict";
    var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module.exports = debug;
  }
});

// node_modules/semver/internal/constants.js
var require_constants4 = __commonJS({
  "node_modules/semver/internal/constants.js"(exports, module) {
    "use strict";
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    module.exports = {
      MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
  }
});

// node_modules/semver/internal/re.js
var require_re = __commonJS({
  "node_modules/semver/internal/re.js"(exports, module) {
    "use strict";
    var {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = require_constants4();
    var debug = require_debug();
    exports = module.exports = {};
    var re = exports.re = [];
    var safeRe = exports.safeRe = [];
    var src = exports.src = [];
    var safeSrc = exports.safeSrc = [];
    var t = exports.t = {};
    var R = 0;
    var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    var safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    var makeSafeRegex = (value) => {
      for (const [token2, max] of safeRegexReplacements) {
        value = value.split(`${token2}*`).join(`${token2}{0,${max}}`).split(`${token2}+`).join(`${token2}{1,${max}}`);
      }
      return value;
    };
    var createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug(name, index, value);
      t[name] = index;
      src[index] = value;
      safeSrc[index] = safe;
      re[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
    createToken("FULL", `^${src[t.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
    createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken("COERCE", `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?(?:${src[t.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t.COERCE], true);
    createToken("COERCERTLFULL", src[t.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
    exports.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "node_modules/semver/internal/parse-options.js"(exports, module) {
    "use strict";
    var looseOption = Object.freeze({ loose: true });
    var emptyOpts = Object.freeze({});
    var parseOptions = (options8) => {
      if (!options8) {
        return emptyOpts;
      }
      if (typeof options8 !== "object") {
        return looseOption;
      }
      return options8;
    };
    module.exports = parseOptions;
  }
});

// node_modules/semver/internal/identifiers.js
var require_identifiers = __commonJS({
  "node_modules/semver/internal/identifiers.js"(exports, module) {
    "use strict";
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = (a, b) => {
      if (typeof a === "number" && typeof b === "number") {
        return a === b ? 0 : a < b ? -1 : 1;
      }
      const anum = numeric.test(a);
      const bnum = numeric.test(b);
      if (anum && bnum) {
        a = +a;
        b = +b;
      }
      return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
    };
    var rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
    module.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "node_modules/semver/classes/semver.js"(exports, module) {
    "use strict";
    var debug = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants4();
    var { safeRe: re, t } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var SemVer = class _SemVer {
      constructor(version, options8) {
        options8 = parseOptions(options8);
        if (version instanceof _SemVer) {
          if (version.loose === !!options8.loose && version.includePrerelease === !!options8.includePrerelease) {
            return version;
          } else {
            version = version.version;
          }
        } else if (typeof version !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug("SemVer", version, options8);
        this.options = options8;
        this.loose = !!options8.loose;
        this.includePrerelease = !!options8.includePrerelease;
        const m = version.trim().match(options8.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
          throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m[5] ? m[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof _SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new _SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.major < other.major) {
          return -1;
        }
        if (this.major > other.major) {
          return 1;
        }
        if (this.minor < other.minor) {
          return -1;
        }
        if (this.minor > other.minor) {
          return 1;
        }
        if (this.patch < other.patch) {
          return -1;
        }
        if (this.patch > other.patch) {
          return 1;
        }
        return 0;
      }
      comparePre(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i = 0;
        do {
          const a = this.prerelease[i];
          const b = other.prerelease[i];
          debug("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      compareBuild(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        let i = 0;
        do {
          const a = this.build[i];
          const b = other.build[i];
          debug("build compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release, identifier, identifierBase) {
        if (release.startsWith("pre")) {
          if (!identifier && identifierBase === false) {
            throw new Error("invalid increment argument: identifier is empty");
          }
          if (identifier) {
            const match = `-${identifier}`.match(this.options.loose ? re[t.PRERELEASELOOSE] : re[t.PRERELEASE]);
            if (!match || match[1] !== identifier) {
              throw new Error(`invalid identifier: ${identifier}`);
            }
          }
        }
        switch (release) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier, identifierBase);
            this.inc("pre", identifier, identifierBase);
            break;
          // If the input is a non-prerelease version, this acts the same as
          // prepatch.
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier, identifierBase);
            }
            this.inc("pre", identifier, identifierBase);
            break;
          case "release":
            if (this.prerelease.length === 0) {
              throw new Error(`version ${this.raw} is not a prerelease`);
            }
            this.prerelease.length = 0;
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          // This probably shouldn't be used publicly.
          // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i = this.prerelease.length;
              while (--i >= 0) {
                if (typeof this.prerelease[i] === "number") {
                  this.prerelease[i]++;
                  i = -2;
                }
              }
              if (i === -1) {
                if (identifier === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier) {
              let prerelease = [identifier, base];
              if (identifierBase === false) {
                prerelease = [identifier];
              }
              if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += `+${this.build.join(".")}`;
        }
        return this;
      }
    };
    module.exports = SemVer;
  }
});

// node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "node_modules/semver/functions/compare.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
    module.exports = compare;
  }
});

// node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "node_modules/semver/functions/gte.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var gte = (a, b, loose) => compare(a, b, loose) >= 0;
    module.exports = gte;
  }
});

// node_modules/pseudomap/pseudomap.js
var require_pseudomap = __commonJS({
  "node_modules/pseudomap/pseudomap.js"(exports, module) {
    var hasOwnProperty3 = Object.prototype.hasOwnProperty;
    module.exports = PseudoMap;
    function PseudoMap(set2) {
      if (!(this instanceof PseudoMap))
        throw new TypeError("Constructor PseudoMap requires 'new'");
      this.clear();
      if (set2) {
        if (set2 instanceof PseudoMap || typeof Map === "function" && set2 instanceof Map)
          set2.forEach(function(value, key2) {
            this.set(key2, value);
          }, this);
        else if (Array.isArray(set2))
          set2.forEach(function(kv) {
            this.set(kv[0], kv[1]);
          }, this);
        else
          throw new TypeError("invalid argument");
      }
    }
    PseudoMap.prototype.forEach = function(fn, thisp) {
      thisp = thisp || this;
      Object.keys(this._data).forEach(function(k) {
        if (k !== "size")
          fn.call(thisp, this._data[k].value, this._data[k].key);
      }, this);
    };
    PseudoMap.prototype.has = function(k) {
      return !!find(this._data, k);
    };
    PseudoMap.prototype.get = function(k) {
      var res = find(this._data, k);
      return res && res.value;
    };
    PseudoMap.prototype.set = function(k, v) {
      set(this._data, k, v);
    };
    PseudoMap.prototype.delete = function(k) {
      var res = find(this._data, k);
      if (res) {
        delete this._data[res._index];
        this._data.size--;
      }
    };
    PseudoMap.prototype.clear = function() {
      var data = /* @__PURE__ */ Object.create(null);
      data.size = 0;
      Object.defineProperty(this, "_data", {
        value: data,
        enumerable: false,
        configurable: true,
        writable: false
      });
    };
    Object.defineProperty(PseudoMap.prototype, "size", {
      get: function() {
        return this._data.size;
      },
      set: function(n) {
      },
      enumerable: true,
      configurable: true
    });
    PseudoMap.prototype.values = PseudoMap.prototype.keys = PseudoMap.prototype.entries = function() {
      throw new Error("iterators are not implemented in this version");
    };
    function same(a, b) {
      return a === b || a !== a && b !== b;
    }
    function Entry(k, v, i) {
      this.key = k;
      this.value = v;
      this._index = i;
    }
    function find(data, k) {
      for (var i = 0, s = "_" + k, key2 = s; hasOwnProperty3.call(data, key2); key2 = s + i++) {
        if (same(data[key2].key, k))
          return data[key2];
      }
    }
    function set(data, k, v) {
      for (var i = 0, s = "_" + k, key2 = s; hasOwnProperty3.call(data, key2); key2 = s + i++) {
        if (same(data[key2].key, k)) {
          data[key2].value = v;
          return;
        }
      }
      data.size++;
      data[key2] = new Entry(k, v, key2);
    }
  }
});

// node_modules/pseudomap/map.js
var require_map = __commonJS({
  "node_modules/pseudomap/map.js"(exports, module) {
    if (process.env.npm_package_name === "pseudomap" && process.env.npm_lifecycle_script === "test")
      process.env.TEST_PSEUDOMAP = "true";
    if (typeof Map === "function" && !process.env.TEST_PSEUDOMAP) {
      module.exports = Map;
    } else {
      module.exports = require_pseudomap();
    }
  }
});

// node_modules/yallist/yallist.js
var require_yallist = __commonJS({
  "node_modules/yallist/yallist.js"(exports, module) {
    module.exports = Yallist;
    Yallist.Node = Node;
    Yallist.create = Yallist;
    function Yallist(list) {
      var self = this;
      if (!(self instanceof Yallist)) {
        self = new Yallist();
      }
      self.tail = null;
      self.head = null;
      self.length = 0;
      if (list && typeof list.forEach === "function") {
        list.forEach(function(item) {
          self.push(item);
        });
      } else if (arguments.length > 0) {
        for (var i = 0, l = arguments.length; i < l; i++) {
          self.push(arguments[i]);
        }
      }
      return self;
    }
    Yallist.prototype.removeNode = function(node) {
      if (node.list !== this) {
        throw new Error("removing node which does not belong to this list");
      }
      var next = node.next;
      var prev = node.prev;
      if (next) {
        next.prev = prev;
      }
      if (prev) {
        prev.next = next;
      }
      if (node === this.head) {
        this.head = next;
      }
      if (node === this.tail) {
        this.tail = prev;
      }
      node.list.length--;
      node.next = null;
      node.prev = null;
      node.list = null;
    };
    Yallist.prototype.unshiftNode = function(node) {
      if (node === this.head) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var head = this.head;
      node.list = this;
      node.next = head;
      if (head) {
        head.prev = node;
      }
      this.head = node;
      if (!this.tail) {
        this.tail = node;
      }
      this.length++;
    };
    Yallist.prototype.pushNode = function(node) {
      if (node === this.tail) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var tail = this.tail;
      node.list = this;
      node.prev = tail;
      if (tail) {
        tail.next = node;
      }
      this.tail = node;
      if (!this.head) {
        this.head = node;
      }
      this.length++;
    };
    Yallist.prototype.push = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        push2(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.unshift = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        unshift(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.pop = function() {
      if (!this.tail) {
        return void 0;
      }
      var res = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.shift = function() {
      if (!this.head) {
        return void 0;
      }
      var res = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.forEach = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.head, i = 0; walker !== null; i++) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.next;
      }
    };
    Yallist.prototype.forEachReverse = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.prev;
      }
    };
    Yallist.prototype.get = function(n) {
      for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
        walker = walker.next;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.getReverse = function(n) {
      for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
        walker = walker.prev;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.map = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.head; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.next;
      }
      return res;
    };
    Yallist.prototype.mapReverse = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.tail; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.prev;
      }
      return res;
    };
    Yallist.prototype.reduce = function(fn, initial) {
      var acc;
      var walker = this.head;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.head) {
        walker = this.head.next;
        acc = this.head.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = 0; walker !== null; i++) {
        acc = fn(acc, walker.value, i);
        walker = walker.next;
      }
      return acc;
    };
    Yallist.prototype.reduceReverse = function(fn, initial) {
      var acc;
      var walker = this.tail;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.tail) {
        walker = this.tail.prev;
        acc = this.tail.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = this.length - 1; walker !== null; i--) {
        acc = fn(acc, walker.value, i);
        walker = walker.prev;
      }
      return acc;
    };
    Yallist.prototype.toArray = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.head; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.next;
      }
      return arr;
    };
    Yallist.prototype.toArrayReverse = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.tail; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.prev;
      }
      return arr;
    };
    Yallist.prototype.slice = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
        walker = walker.next;
      }
      for (; walker !== null && i < to; i++, walker = walker.next) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.sliceReverse = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
        walker = walker.prev;
      }
      for (; walker !== null && i > from; i--, walker = walker.prev) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.reverse = function() {
      var head = this.head;
      var tail = this.tail;
      for (var walker = head; walker !== null; walker = walker.prev) {
        var p = walker.prev;
        walker.prev = walker.next;
        walker.next = p;
      }
      this.head = tail;
      this.tail = head;
      return this;
    };
    function push2(self, item) {
      self.tail = new Node(item, self.tail, null, self);
      if (!self.head) {
        self.head = self.tail;
      }
      self.length++;
    }
    function unshift(self, item) {
      self.head = new Node(item, null, self.head, self);
      if (!self.tail) {
        self.tail = self.head;
      }
      self.length++;
    }
    function Node(value, prev, next, list) {
      if (!(this instanceof Node)) {
        return new Node(value, prev, next, list);
      }
      this.list = list;
      this.value = value;
      if (prev) {
        prev.next = this;
        this.prev = prev;
      } else {
        this.prev = null;
      }
      if (next) {
        next.prev = this;
        this.next = next;
      } else {
        this.next = null;
      }
    }
  }
});

// node_modules/editorconfig/node_modules/lru-cache/index.js
var require_lru_cache = __commonJS({
  "node_modules/editorconfig/node_modules/lru-cache/index.js"(exports, module) {
    "use strict";
    module.exports = LRUCache;
    var Map2 = require_map();
    var util2 = __require("util");
    var Yallist = require_yallist();
    var hasSymbol = typeof Symbol === "function" && process.env._nodeLRUCacheForceNoSymbol !== "1";
    var makeSymbol;
    if (hasSymbol) {
      makeSymbol = function(key2) {
        return Symbol(key2);
      };
    } else {
      makeSymbol = function(key2) {
        return "_" + key2;
      };
    }
    var MAX = makeSymbol("max");
    var LENGTH = makeSymbol("length");
    var LENGTH_CALCULATOR = makeSymbol("lengthCalculator");
    var ALLOW_STALE = makeSymbol("allowStale");
    var MAX_AGE = makeSymbol("maxAge");
    var DISPOSE = makeSymbol("dispose");
    var NO_DISPOSE_ON_SET = makeSymbol("noDisposeOnSet");
    var LRU_LIST = makeSymbol("lruList");
    var CACHE = makeSymbol("cache");
    function naiveLength() {
      return 1;
    }
    function LRUCache(options8) {
      if (!(this instanceof LRUCache)) {
        return new LRUCache(options8);
      }
      if (typeof options8 === "number") {
        options8 = { max: options8 };
      }
      if (!options8) {
        options8 = {};
      }
      var max = this[MAX] = options8.max;
      if (!max || !(typeof max === "number") || max <= 0) {
        this[MAX] = Infinity;
      }
      var lc = options8.length || naiveLength;
      if (typeof lc !== "function") {
        lc = naiveLength;
      }
      this[LENGTH_CALCULATOR] = lc;
      this[ALLOW_STALE] = options8.stale || false;
      this[MAX_AGE] = options8.maxAge || 0;
      this[DISPOSE] = options8.dispose;
      this[NO_DISPOSE_ON_SET] = options8.noDisposeOnSet || false;
      this.reset();
    }
    Object.defineProperty(LRUCache.prototype, "max", {
      set: function(mL) {
        if (!mL || !(typeof mL === "number") || mL <= 0) {
          mL = Infinity;
        }
        this[MAX] = mL;
        trim(this);
      },
      get: function() {
        return this[MAX];
      },
      enumerable: true
    });
    Object.defineProperty(LRUCache.prototype, "allowStale", {
      set: function(allowStale) {
        this[ALLOW_STALE] = !!allowStale;
      },
      get: function() {
        return this[ALLOW_STALE];
      },
      enumerable: true
    });
    Object.defineProperty(LRUCache.prototype, "maxAge", {
      set: function(mA) {
        if (!mA || !(typeof mA === "number") || mA < 0) {
          mA = 0;
        }
        this[MAX_AGE] = mA;
        trim(this);
      },
      get: function() {
        return this[MAX_AGE];
      },
      enumerable: true
    });
    Object.defineProperty(LRUCache.prototype, "lengthCalculator", {
      set: function(lC) {
        if (typeof lC !== "function") {
          lC = naiveLength;
        }
        if (lC !== this[LENGTH_CALCULATOR]) {
          this[LENGTH_CALCULATOR] = lC;
          this[LENGTH] = 0;
          this[LRU_LIST].forEach(function(hit) {
            hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
            this[LENGTH] += hit.length;
          }, this);
        }
        trim(this);
      },
      get: function() {
        return this[LENGTH_CALCULATOR];
      },
      enumerable: true
    });
    Object.defineProperty(LRUCache.prototype, "length", {
      get: function() {
        return this[LENGTH];
      },
      enumerable: true
    });
    Object.defineProperty(LRUCache.prototype, "itemCount", {
      get: function() {
        return this[LRU_LIST].length;
      },
      enumerable: true
    });
    LRUCache.prototype.rforEach = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this[LRU_LIST].tail; walker !== null; ) {
        var prev = walker.prev;
        forEachStep(this, fn, walker, thisp);
        walker = prev;
      }
    };
    function forEachStep(self, fn, node, thisp) {
      var hit = node.value;
      if (isStale(self, hit)) {
        del(self, node);
        if (!self[ALLOW_STALE]) {
          hit = void 0;
        }
      }
      if (hit) {
        fn.call(thisp, hit.value, hit.key, self);
      }
    }
    LRUCache.prototype.forEach = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this[LRU_LIST].head; walker !== null; ) {
        var next = walker.next;
        forEachStep(this, fn, walker, thisp);
        walker = next;
      }
    };
    LRUCache.prototype.keys = function() {
      return this[LRU_LIST].toArray().map(function(k) {
        return k.key;
      }, this);
    };
    LRUCache.prototype.values = function() {
      return this[LRU_LIST].toArray().map(function(k) {
        return k.value;
      }, this);
    };
    LRUCache.prototype.reset = function() {
      if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
        this[LRU_LIST].forEach(function(hit) {
          this[DISPOSE](hit.key, hit.value);
        }, this);
      }
      this[CACHE] = new Map2();
      this[LRU_LIST] = new Yallist();
      this[LENGTH] = 0;
    };
    LRUCache.prototype.dump = function() {
      return this[LRU_LIST].map(function(hit) {
        if (!isStale(this, hit)) {
          return {
            k: hit.key,
            v: hit.value,
            e: hit.now + (hit.maxAge || 0)
          };
        }
      }, this).toArray().filter(function(h) {
        return h;
      });
    };
    LRUCache.prototype.dumpLru = function() {
      return this[LRU_LIST];
    };
    LRUCache.prototype.inspect = function(n, opts) {
      var str = "LRUCache {";
      var extras = false;
      var as = this[ALLOW_STALE];
      if (as) {
        str += "\n  allowStale: true";
        extras = true;
      }
      var max = this[MAX];
      if (max && max !== Infinity) {
        if (extras) {
          str += ",";
        }
        str += "\n  max: " + util2.inspect(max, opts);
        extras = true;
      }
      var maxAge = this[MAX_AGE];
      if (maxAge) {
        if (extras) {
          str += ",";
        }
        str += "\n  maxAge: " + util2.inspect(maxAge, opts);
        extras = true;
      }
      var lc = this[LENGTH_CALCULATOR];
      if (lc && lc !== naiveLength) {
        if (extras) {
          str += ",";
        }
        str += "\n  length: " + util2.inspect(this[LENGTH], opts);
        extras = true;
      }
      var didFirst = false;
      this[LRU_LIST].forEach(function(item) {
        if (didFirst) {
          str += ",\n  ";
        } else {
          if (extras) {
            str += ",\n";
          }
          didFirst = true;
          str += "\n  ";
        }
        var key2 = util2.inspect(item.key).split("\n").join("\n  ");
        var val = { value: item.value };
        if (item.maxAge !== maxAge) {
          val.maxAge = item.maxAge;
        }
        if (lc !== naiveLength) {
          val.length = item.length;
        }
        if (isStale(this, item)) {
          val.stale = true;
        }
        val = util2.inspect(val, opts).split("\n").join("\n  ");
        str += key2 + " => " + val;
      });
      if (didFirst || extras) {
        str += "\n";
      }
      str += "}";
      return str;
    };
    LRUCache.prototype.set = function(key2, value, maxAge) {
      maxAge = maxAge || this[MAX_AGE];
      var now = maxAge ? Date.now() : 0;
      var len = this[LENGTH_CALCULATOR](value, key2);
      if (this[CACHE].has(key2)) {
        if (len > this[MAX]) {
          del(this, this[CACHE].get(key2));
          return false;
        }
        var node = this[CACHE].get(key2);
        var item = node.value;
        if (this[DISPOSE]) {
          if (!this[NO_DISPOSE_ON_SET]) {
            this[DISPOSE](key2, item.value);
          }
        }
        item.now = now;
        item.maxAge = maxAge;
        item.value = value;
        this[LENGTH] += len - item.length;
        item.length = len;
        this.get(key2);
        trim(this);
        return true;
      }
      var hit = new Entry(key2, value, len, now, maxAge);
      if (hit.length > this[MAX]) {
        if (this[DISPOSE]) {
          this[DISPOSE](key2, value);
        }
        return false;
      }
      this[LENGTH] += hit.length;
      this[LRU_LIST].unshift(hit);
      this[CACHE].set(key2, this[LRU_LIST].head);
      trim(this);
      return true;
    };
    LRUCache.prototype.has = function(key2) {
      if (!this[CACHE].has(key2)) return false;
      var hit = this[CACHE].get(key2).value;
      if (isStale(this, hit)) {
        return false;
      }
      return true;
    };
    LRUCache.prototype.get = function(key2) {
      return get(this, key2, true);
    };
    LRUCache.prototype.peek = function(key2) {
      return get(this, key2, false);
    };
    LRUCache.prototype.pop = function() {
      var node = this[LRU_LIST].tail;
      if (!node) return null;
      del(this, node);
      return node.value;
    };
    LRUCache.prototype.del = function(key2) {
      del(this, this[CACHE].get(key2));
    };
    LRUCache.prototype.load = function(arr) {
      this.reset();
      var now = Date.now();
      for (var l = arr.length - 1; l >= 0; l--) {
        var hit = arr[l];
        var expiresAt = hit.e || 0;
        if (expiresAt === 0) {
          this.set(hit.k, hit.v);
        } else {
          var maxAge = expiresAt - now;
          if (maxAge > 0) {
            this.set(hit.k, hit.v, maxAge);
          }
        }
      }
    };
    LRUCache.prototype.prune = function() {
      var self = this;
      this[CACHE].forEach(function(value, key2) {
        get(self, key2, false);
      });
    };
    function get(self, key2, doUse) {
      var node = self[CACHE].get(key2);
      if (node) {
        var hit = node.value;
        if (isStale(self, hit)) {
          del(self, node);
          if (!self[ALLOW_STALE]) hit = void 0;
        } else {
          if (doUse) {
            self[LRU_LIST].unshiftNode(node);
          }
        }
        if (hit) hit = hit.value;
      }
      return hit;
    }
    function isStale(self, hit) {
      if (!hit || !hit.maxAge && !self[MAX_AGE]) {
        return false;
      }
      var stale = false;
      var diff = Date.now() - hit.now;
      if (hit.maxAge) {
        stale = diff > hit.maxAge;
      } else {
        stale = self[MAX_AGE] && diff > self[MAX_AGE];
      }
      return stale;
    }
    function trim(self) {
      if (self[LENGTH] > self[MAX]) {
        for (var walker = self[LRU_LIST].tail; self[LENGTH] > self[MAX] && walker !== null; ) {
          var prev = walker.prev;
          del(self, walker);
          walker = prev;
        }
      }
    }
    function del(self, node) {
      if (node) {
        var hit = node.value;
        if (self[DISPOSE]) {
          self[DISPOSE](hit.key, hit.value);
        }
        self[LENGTH] -= hit.length;
        self[CACHE].delete(hit.key);
        self[LRU_LIST].removeNode(node);
      }
    }
    function Entry(key2, value, length, now, maxAge) {
      this.key = key2;
      this.value = value;
      this.length = length;
      this.now = now;
      this.maxAge = maxAge || 0;
    }
  }
});

// node_modules/sigmund/sigmund.js
var require_sigmund = __commonJS({
  "node_modules/sigmund/sigmund.js"(exports, module) {
    module.exports = sigmund;
    function sigmund(subject, maxSessions) {
      maxSessions = maxSessions || 10;
      var notes = [];
      var analysis = "";
      var RE = RegExp;
      function psychoAnalyze(subject2, session) {
        if (session > maxSessions) return;
        if (typeof subject2 === "function" || typeof subject2 === "undefined") {
          return;
        }
        if (typeof subject2 !== "object" || !subject2 || subject2 instanceof RE) {
          analysis += subject2;
          return;
        }
        if (notes.indexOf(subject2) !== -1 || session === maxSessions) return;
        notes.push(subject2);
        analysis += "{";
        Object.keys(subject2).forEach(function(issue, _, __) {
          if (issue.charAt(0) === "_") return;
          var to = typeof subject2[issue];
          if (to === "function" || to === "undefined") return;
          analysis += issue;
          psychoAnalyze(subject2[issue], session + 1);
        });
      }
      psychoAnalyze(subject, 0);
      return analysis;
    }
  }
});

// node_modules/editorconfig/src/lib/fnmatch.js
var require_fnmatch = __commonJS({
  "node_modules/editorconfig/src/lib/fnmatch.js"(exports, module) {
    var platform = typeof process === "object" ? process.platform : "win32";
    if (module) module.exports = minimatch;
    else exports.minimatch = minimatch;
    minimatch.Minimatch = Minimatch;
    var LRU = require_lru_cache();
    var cache3 = minimatch.cache = new LRU({ max: 100 });
    var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {};
    var sigmund = require_sigmund();
    var path15 = __require("path");
    var qmark = "[^/]";
    var star = qmark + "*?";
    var twoStarDot = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?";
    var twoStarNoDot = "(?:(?!(?:\\/|^)\\.).)*?";
    var reSpecials = charSet("().*{}+?[]^$\\!");
    function charSet(s) {
      return s.split("").reduce(function(set, c2) {
        set[c2] = true;
        return set;
      }, {});
    }
    var slashSplit = /\/+/;
    minimatch.monkeyPatch = monkeyPatch;
    function monkeyPatch() {
      var desc = Object.getOwnPropertyDescriptor(String.prototype, "match");
      var orig = desc.value;
      desc.value = function(p) {
        if (p instanceof Minimatch) return p.match(this);
        return orig.call(this, p);
      };
      Object.defineProperty(String.prototype, desc);
    }
    minimatch.filter = filter2;
    function filter2(pattern, options8) {
      options8 = options8 || {};
      return function(p, i, list) {
        return minimatch(p, pattern, options8);
      };
    }
    function ext(a, b) {
      a = a || {};
      b = b || {};
      var t = {};
      Object.keys(b).forEach(function(k) {
        t[k] = b[k];
      });
      Object.keys(a).forEach(function(k) {
        t[k] = a[k];
      });
      return t;
    }
    minimatch.defaults = function(def) {
      if (!def || !Object.keys(def).length) return minimatch;
      var orig = minimatch;
      var m = function minimatch2(p, pattern, options8) {
        return orig.minimatch(p, pattern, ext(def, options8));
      };
      m.Minimatch = function Minimatch2(pattern, options8) {
        return new orig.Minimatch(pattern, ext(def, options8));
      };
      return m;
    };
    Minimatch.defaults = function(def) {
      if (!def || !Object.keys(def).length) return Minimatch;
      return minimatch.defaults(def).Minimatch;
    };
    function minimatch(p, pattern, options8) {
      if (typeof pattern !== "string") {
        throw new TypeError("glob pattern string required");
      }
      if (!options8) options8 = {};
      if (!options8.nocomment && pattern.charAt(0) === "#") {
        return false;
      }
      if (pattern.trim() === "") return p === "";
      return new Minimatch(pattern, options8).match(p);
    }
    function Minimatch(pattern, options8) {
      if (!(this instanceof Minimatch)) {
        return new Minimatch(pattern, options8, cache3);
      }
      if (typeof pattern !== "string") {
        throw new TypeError("glob pattern string required");
      }
      if (!options8) options8 = {};
      if (platform === "win32") {
        pattern = pattern.split("\\").join("/");
      }
      var cacheKey = pattern + "\n" + sigmund(options8);
      var cached = minimatch.cache.get(cacheKey);
      if (cached) return cached;
      minimatch.cache.set(cacheKey, this);
      this.options = options8;
      this.set = [];
      this.pattern = pattern;
      this.regexp = null;
      this.negate = false;
      this.comment = false;
      this.empty = false;
      this.make();
    }
    Minimatch.prototype.make = make;
    function make() {
      if (this._made) return;
      var pattern = this.pattern;
      var options8 = this.options;
      if (!options8.nocomment && pattern.charAt(0) === "#") {
        this.comment = true;
        return;
      }
      if (!pattern) {
        this.empty = true;
        return;
      }
      this.parseNegate();
      var set = this.globSet = this.braceExpand();
      if (options8.debug) console.error(this.pattern, set);
      set = this.globParts = set.map(function(s) {
        return s.split(slashSplit);
      });
      if (options8.debug) console.error(this.pattern, set);
      set = set.map(function(s, si, set2) {
        return s.map(this.parse, this);
      }, this);
      if (options8.debug) console.error(this.pattern, set);
      set = set.filter(function(s) {
        return -1 === s.indexOf(false);
      });
      if (options8.debug) console.error(this.pattern, set);
      this.set = set;
    }
    Minimatch.prototype.parseNegate = parseNegate;
    function parseNegate() {
      var pattern = this.pattern, negate = false, options8 = this.options, negateOffset = 0;
      if (options8.nonegate) return;
      for (var i = 0, l = pattern.length; i < l && pattern.charAt(i) === "!"; i++) {
        negate = !negate;
        negateOffset++;
      }
      if (negateOffset) this.pattern = pattern.substr(negateOffset);
      this.negate = negate;
    }
    minimatch.braceExpand = function(pattern, options8) {
      return new Minimatch(pattern, options8).braceExpand();
    };
    Minimatch.prototype.braceExpand = braceExpand;
    function braceExpand(pattern, options8) {
      options8 = options8 || this.options;
      pattern = typeof pattern === "undefined" ? this.pattern : pattern;
      if (typeof pattern === "undefined") {
        throw new Error("undefined pattern");
      }
      if (options8.nobrace || !pattern.match(/\{.*\}/)) {
        return [pattern];
      }
      var escaping = false;
      if (pattern.charAt(0) !== "{") {
        var prefix = null;
        for (var i = 0, l = pattern.length; i < l; i++) {
          var c2 = pattern.charAt(i);
          if (c2 === "\\") {
            escaping = !escaping;
          } else if (c2 === "{" && !escaping) {
            prefix = pattern.substr(0, i);
            break;
          }
        }
        if (prefix === null) {
          return [pattern];
        }
        var tail = braceExpand(pattern.substr(i), options8);
        return tail.map(function(t) {
          return prefix + t;
        });
      }
      var numset = pattern.match(/^\{(-?[0-9]+)\.\.(-?[0-9]+)\}/);
      if (numset) {
        var suf = braceExpand(pattern.substr(numset[0].length), options8), start = +numset[1], end = +numset[2], inc = start > end ? -1 : 1, set = [];
        for (var i = start; i != end + inc; i += inc) {
          for (var ii = 0, ll = suf.length; ii < ll; ii++) {
            set.push(i + suf[ii]);
          }
        }
        return set;
      }
      var i = 1, depth = 1, set = [], member = "", sawEnd = false, escaping = false;
      function addMember() {
        set.push(member);
        member = "";
      }
      FOR: for (i = 1, l = pattern.length; i < l; i++) {
        var c2 = pattern.charAt(i);
        if (escaping) {
          escaping = false;
          member += "\\" + c2;
        } else {
          switch (c2) {
            case "\\":
              escaping = true;
              continue;
            case "{":
              depth++;
              member += "{";
              continue;
            case "}":
              depth--;
              if (depth === 0) {
                addMember();
                i++;
                break FOR;
              } else {
                member += c2;
                continue;
              }
            case ",":
              if (depth === 1) {
                addMember();
              } else {
                member += c2;
              }
              continue;
            default:
              member += c2;
              continue;
          }
        }
      }
      if (depth !== 0) {
        return braceExpand("\\" + pattern, options8);
      }
      var suf = braceExpand(pattern.substr(i), options8);
      var addBraces = set.length === 1;
      set = set.map(function(p) {
        return braceExpand(p, options8);
      });
      set = set.reduce(function(l2, r) {
        return l2.concat(r);
      });
      if (addBraces) {
        set = set.map(function(s) {
          return "{" + s + "}";
        });
      }
      var ret = [];
      for (var i = 0, l = set.length; i < l; i++) {
        for (var ii = 0, ll = suf.length; ii < ll; ii++) {
          ret.push(set[i] + suf[ii]);
        }
      }
      return ret;
    }
    Minimatch.prototype.parse = parse7;
    var SUBPARSE = {};
    function parse7(pattern, isSub) {
      var options8 = this.options;
      if (!options8.noglobstar && pattern === "**") return GLOBSTAR;
      if (pattern === "") return "";
      var re = "", hasMagic = !!options8.nocase, escaping = false, patternListStack = [], plType, stateChar, inClass = false, reClassStart = -1, classStart = -1, patternStart = pattern.charAt(0) === "." ? "" : options8.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)";
      function clearStateChar() {
        if (stateChar) {
          switch (stateChar) {
            case "*":
              re += star;
              hasMagic = true;
              break;
            case "?":
              re += qmark;
              hasMagic = true;
              break;
            default:
              re += "\\" + stateChar;
              break;
          }
          stateChar = false;
        }
      }
      for (var i = 0, len = pattern.length, c2; i < len && (c2 = pattern.charAt(i)); i++) {
        if (options8.debug) {
          console.error("%s	%s %s %j", pattern, i, re, c2);
        }
        if (escaping && reSpecials[c2]) {
          re += "\\" + c2;
          escaping = false;
          continue;
        }
        SWITCH: switch (c2) {
          case "/":
            return false;
          case "\\":
            clearStateChar();
            escaping = true;
            continue;
          // the various stateChar values
          // for the "extglob" stuff.
          case "?":
          case "*":
          case "+":
          case "@":
          case "!":
            if (options8.debug) {
              console.error("%s	%s %s %j <-- stateChar", pattern, i, re, c2);
            }
            if (inClass) {
              if (c2 === "!" && i === classStart + 1) c2 = "^";
              re += c2;
              continue;
            }
            clearStateChar();
            stateChar = c2;
            if (options8.noext) clearStateChar();
            continue;
          case "(":
            if (inClass) {
              re += "(";
              continue;
            }
            if (!stateChar) {
              re += "\\(";
              continue;
            }
            plType = stateChar;
            patternListStack.push({
              type: plType,
              start: i - 1,
              reStart: re.length
            });
            re += stateChar === "!" ? "(?:(?!" : "(?:";
            stateChar = false;
            continue;
          case ")":
            if (inClass || !patternListStack.length) {
              re += "\\)";
              continue;
            }
            hasMagic = true;
            re += ")";
            plType = patternListStack.pop().type;
            switch (plType) {
              case "!":
                re += "[^/]*?)";
                break;
              case "?":
              case "+":
              case "*":
                re += plType;
              case "@":
                break;
            }
            continue;
          case "|":
            if (inClass || !patternListStack.length || escaping) {
              re += "\\|";
              escaping = false;
              continue;
            }
            re += "|";
            continue;
          // these are mostly the same in regexp and glob
          case "[":
            clearStateChar();
            if (inClass) {
              re += "\\" + c2;
              continue;
            }
            inClass = true;
            classStart = i;
            reClassStart = re.length;
            re += c2;
            continue;
          case "]":
            if (i === classStart + 1 || !inClass) {
              re += "\\" + c2;
              escaping = false;
              continue;
            }
            hasMagic = true;
            inClass = false;
            re += c2;
            continue;
          default:
            clearStateChar();
            if (escaping) {
              escaping = false;
            } else if (reSpecials[c2] && !(c2 === "^" && inClass)) {
              re += "\\";
            }
            re += c2;
        }
      }
      if (inClass) {
        var cs = pattern.substr(classStart + 1), sp = this.parse(cs, SUBPARSE);
        re = re.substr(0, reClassStart) + "\\[" + sp[0];
        hasMagic = hasMagic || sp[1];
      }
      var pl;
      while (pl = patternListStack.pop()) {
        var tail = re.slice(pl.reStart + 3);
        tail = tail.replace(/((?:\\{2})*)(\\?)\|/g, function(_, $1, $2) {
          if (!$2) {
            $2 = "\\";
          }
          return $1 + $1 + $2 + "|";
        });
        var t = pl.type === "*" ? star : pl.type === "?" ? qmark : "\\" + pl.type;
        hasMagic = true;
        re = re.slice(0, pl.reStart) + t + "\\(" + tail;
      }
      clearStateChar();
      if (escaping) {
        re += "\\\\";
      }
      var addPatternStart = false;
      switch (re.charAt(0)) {
        case ".":
        case "[":
        case "(":
          addPatternStart = true;
      }
      if (re !== "" && hasMagic) re = "(?=.)" + re;
      if (addPatternStart) re = patternStart + re;
      if (isSub === SUBPARSE) {
        return [re, hasMagic];
      }
      if (!hasMagic) {
        return globUnescape(pattern);
      }
      var flags = options8.nocase ? "i" : "", regExp = new RegExp("^" + re + "$", flags);
      regExp._glob = pattern;
      regExp._src = re;
      return regExp;
    }
    minimatch.makeRe = function(pattern, options8) {
      return new Minimatch(pattern, options8 || {}).makeRe();
    };
    Minimatch.prototype.makeRe = makeRe;
    function makeRe() {
      if (this.regexp || this.regexp === false) return this.regexp;
      var set = this.set;
      if (!set.length) return this.regexp = false;
      var options8 = this.options;
      var twoStar = options8.noglobstar ? star : options8.dot ? twoStarDot : twoStarNoDot, flags = options8.nocase ? "i" : "";
      var re = set.map(function(pattern) {
        return pattern.map(function(p) {
          return p === GLOBSTAR ? twoStar : typeof p === "string" ? regExpEscape(p) : p._src;
        }).join("\\/");
      }).join("|");
      re = "^(?:" + re + ")$";
      if (this.negate) re = "^(?!" + re + ").*$";
      try {
        return this.regexp = new RegExp(re, flags);
      } catch (ex) {
        return this.regexp = false;
      }
    }
    minimatch.match = function(list, pattern, options8) {
      var mm = new Minimatch(pattern, options8);
      list = list.filter(function(f) {
        return mm.match(f);
      });
      if (options8.nonull && !list.length) {
        list.push(pattern);
      }
      return list;
    };
    Minimatch.prototype.match = match;
    function match(f, partial) {
      if (this.comment) return false;
      if (this.empty) return f === "";
      if (f === "/" && partial) return true;
      var options8 = this.options;
      if (platform === "win32") {
        f = f.split("\\").join("/");
      }
      f = f.split(slashSplit);
      if (options8.debug) {
        console.error(this.pattern, "split", f);
      }
      var set = this.set;
      for (var i = 0, l = set.length; i < l; i++) {
        var pattern = set[i];
        var hit = this.matchOne(f, pattern, partial);
        if (hit) {
          if (options8.flipNegate) return true;
          return !this.negate;
        }
      }
      if (options8.flipNegate) return false;
      return this.negate;
    }
    Minimatch.prototype.matchOne = function(file, pattern, partial) {
      var options8 = this.options;
      if (options8.debug) {
        console.error(
          "matchOne",
          {
            "this": this,
            file,
            pattern
          }
        );
      }
      if (options8.matchBase && pattern.length === 1) {
        file = path15.basename(file.join("/")).split("/");
      }
      if (options8.debug) {
        console.error("matchOne", file.length, pattern.length);
      }
      for (var fi = 0, pi = 0, fl = file.length, pl = pattern.length; fi < fl && pi < pl; fi++, pi++) {
        if (options8.debug) {
          console.error("matchOne loop");
        }
        var p = pattern[pi], f = file[fi];
        if (options8.debug) {
          console.error(pattern, p, f);
        }
        if (p === false) return false;
        if (p === GLOBSTAR) {
          if (options8.debug)
            console.error("GLOBSTAR", [pattern, p, f]);
          var fr = fi, pr = pi + 1;
          if (pr === pl) {
            if (options8.debug)
              console.error("** at the end");
            for (; fi < fl; fi++) {
              if (file[fi] === "." || file[fi] === ".." || !options8.dot && file[fi].charAt(0) === ".") return false;
            }
            return true;
          }
          WHILE: while (fr < fl) {
            var swallowee = file[fr];
            if (options8.debug) {
              console.error(
                "\nglobstar while",
                file,
                fr,
                pattern,
                pr,
                swallowee
              );
            }
            if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
              if (options8.debug)
                console.error("globstar found match!", fr, fl, swallowee);
              return true;
            } else {
              if (swallowee === "." || swallowee === ".." || !options8.dot && swallowee.charAt(0) === ".") {
                if (options8.debug)
                  console.error("dot detected!", file, fr, pattern, pr);
                break WHILE;
              }
              if (options8.debug)
                console.error("globstar swallow a segment, and continue");
              fr++;
            }
          }
          if (partial) {
            if (fr === fl) return true;
          }
          return false;
        }
        var hit;
        if (typeof p === "string") {
          if (options8.nocase) {
            hit = f.toLowerCase() === p.toLowerCase();
          } else {
            hit = f === p;
          }
          if (options8.debug) {
            console.error("string match", p, f, hit);
          }
        } else {
          hit = f.match(p);
          if (options8.debug) {
            console.error("pattern match", p, f, hit);
          }
        }
        if (!hit) return false;
      }
      if (fi === fl && pi === pl) {
        return true;
      } else if (fi === fl) {
        return partial;
      } else if (pi === pl) {
        var emptyFileEnd = fi === fl - 1 && file[fi] === "";
        return emptyFileEnd;
      }
      throw new Error("wtf?");
    };
    function globUnescape(s) {
      return s.replace(/\\(.)/g, "$1");
    }
    function regExpEscape(s) {
      return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    }
  }
});

// node_modules/editorconfig/src/lib/ini.js
var require_ini = __commonJS({
  "node_modules/editorconfig/src/lib/ini.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve3, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve3(result.value) : new P(function(resolve4) {
            resolve4(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1) throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var fs4 = __importStar(__require("fs"));
    var regex = {
      section: /^\s*\[(([^#;]|\\#|\\;)+)\]\s*([#;].*)?$/,
      param: /^\s*([\w\.\-\_]+)\s*[=:]\s*(.*?)\s*([#;].*)?$/,
      comment: /^\s*[#;].*$/
    };
    function parse7(file) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, new Promise(function(resolve3, reject) {
            fs4.readFile(file, "utf8", function(err, data) {
              if (err) {
                reject(err);
                return;
              }
              resolve3(parseString2(data));
            });
          })];
        });
      });
    }
    exports.parse = parse7;
    function parseSync(file) {
      return parseString2(fs4.readFileSync(file, "utf8"));
    }
    exports.parseSync = parseSync;
    function parseString2(data) {
      var sectionBody = {};
      var sectionName = null;
      var value = [[sectionName, sectionBody]];
      var lines = data.split(/\r\n|\r|\n/);
      lines.forEach(function(line3) {
        var match;
        if (regex.comment.test(line3)) {
          return;
        }
        if (regex.param.test(line3)) {
          match = line3.match(regex.param);
          sectionBody[match[1]] = match[2];
        } else if (regex.section.test(line3)) {
          match = line3.match(regex.section);
          sectionName = match[1];
          sectionBody = {};
          value.push([sectionName, sectionBody]);
        }
      });
      return value;
    }
    exports.parseString = parseString2;
  }
});

// node_modules/editorconfig/package.json
var require_package = __commonJS({
  "node_modules/editorconfig/package.json"(exports, module) {
    module.exports = {
      name: "editorconfig",
      version: "0.15.3",
      description: "EditorConfig File Locator and Interpreter for Node.js",
      keywords: [
        "editorconfig",
        "core"
      ],
      main: "src/index.js",
      contributors: [
        "Hong Xu (topbug.net)",
        "Jed Mao (https://github.com/jedmao/)",
        "Trey Hunner (http://treyhunner.com)"
      ],
      directories: {
        bin: "./bin",
        lib: "./lib"
      },
      scripts: {
        clean: "rimraf dist",
        prebuild: "npm run clean",
        build: "tsc",
        pretest: "npm run lint && npm run build && npm run copy && cmake .",
        test: "ctest .",
        "pretest:ci": "npm run pretest",
        "test:ci": "ctest -VV --output-on-failure .",
        lint: "npm run eclint && npm run tslint",
        eclint: 'eclint check --indent_size ignore "src/**"',
        tslint: "tslint --project tsconfig.json --exclude package.json",
        copy: "cpy .npmignore LICENSE README.md CHANGELOG.md dist && cpy bin/* dist/bin && cpy src/lib/fnmatch*.* dist/src/lib",
        prepub: "npm run lint && npm run build && npm run copy",
        pub: "npm publish ./dist"
      },
      repository: {
        type: "git",
        url: "git://github.com/editorconfig/editorconfig-core-js.git"
      },
      bugs: "https://github.com/editorconfig/editorconfig-core-js/issues",
      author: "EditorConfig Team",
      license: "MIT",
      dependencies: {
        commander: "^2.19.0",
        "lru-cache": "^4.1.5",
        semver: "^5.6.0",
        sigmund: "^1.0.1"
      },
      devDependencies: {
        "@types/mocha": "^5.2.6",
        "@types/node": "^10.12.29",
        "@types/semver": "^5.5.0",
        "cpy-cli": "^2.0.0",
        eclint: "^2.8.1",
        mocha: "^5.2.0",
        rimraf: "^2.6.3",
        should: "^13.2.3",
        tslint: "^5.13.1",
        typescript: "^3.3.3333"
      }
    };
  }
});

// node_modules/editorconfig/src/index.js
var require_src = __commonJS({
  "node_modules/editorconfig/src/index.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve3, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve3(result.value) : new P(function(resolve4) {
            resolve4(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1) throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var fs4 = __importStar(__require("fs"));
    var path15 = __importStar(__require("path"));
    var semver = {
      gte: require_gte()
    };
    var fnmatch_1 = __importDefault(require_fnmatch());
    var ini_1 = require_ini();
    exports.parseString = ini_1.parseString;
    var package_json_1 = __importDefault(require_package());
    var knownProps = {
      end_of_line: true,
      indent_style: true,
      indent_size: true,
      insert_final_newline: true,
      trim_trailing_whitespace: true,
      charset: true
    };
    function fnmatch(filepath, glob) {
      var matchOptions = { matchBase: true, dot: true, noext: true };
      glob = glob.replace(/\*\*/g, "{*,**/**/**}");
      return fnmatch_1.default(filepath, glob, matchOptions);
    }
    function getConfigFileNames(filepath, options8) {
      var paths = [];
      do {
        filepath = path15.dirname(filepath);
        paths.push(path15.join(filepath, options8.config));
      } while (filepath !== options8.root);
      return paths;
    }
    function processMatches(matches, version) {
      if ("indent_style" in matches && matches.indent_style === "tab" && !("indent_size" in matches) && semver.gte(version, "0.10.0")) {
        matches.indent_size = "tab";
      }
      if ("indent_size" in matches && !("tab_width" in matches) && matches.indent_size !== "tab") {
        matches.tab_width = matches.indent_size;
      }
      if ("indent_size" in matches && "tab_width" in matches && matches.indent_size === "tab") {
        matches.indent_size = matches.tab_width;
      }
      return matches;
    }
    function processOptions(options8, filepath) {
      if (options8 === void 0) {
        options8 = {};
      }
      return {
        config: options8.config || ".editorconfig",
        version: options8.version || package_json_1.default.version,
        root: path15.resolve(options8.root || path15.parse(filepath).root)
      };
    }
    function buildFullGlob(pathPrefix, glob) {
      switch (glob.indexOf("/")) {
        case -1:
          glob = "**/" + glob;
          break;
        case 0:
          glob = glob.substring(1);
          break;
        default:
          break;
      }
      return path15.join(pathPrefix, glob);
    }
    function extendProps(props, options8) {
      if (props === void 0) {
        props = {};
      }
      if (options8 === void 0) {
        options8 = {};
      }
      for (var key2 in options8) {
        if (options8.hasOwnProperty(key2)) {
          var value = options8[key2];
          var key22 = key2.toLowerCase();
          var value2 = value;
          if (knownProps[key22]) {
            value2 = value.toLowerCase();
          }
          try {
            value2 = JSON.parse(value);
          } catch (e) {
          }
          if (typeof value === "undefined" || value === null) {
            value2 = String(value);
          }
          props[key22] = value2;
        }
      }
      return props;
    }
    function parseFromConfigs(configs, filepath, options8) {
      return processMatches(configs.reverse().reduce(function(matches, file) {
        var pathPrefix = path15.dirname(file.name);
        file.contents.forEach(function(section) {
          var glob = section[0];
          var options22 = section[1];
          if (!glob) {
            return;
          }
          var fullGlob = buildFullGlob(pathPrefix, glob);
          if (!fnmatch(filepath, fullGlob)) {
            return;
          }
          matches = extendProps(matches, options22);
        });
        return matches;
      }, {}), options8.version);
    }
    function getConfigsForFiles(files) {
      var configs = [];
      for (var i in files) {
        if (files.hasOwnProperty(i)) {
          var file = files[i];
          var contents = ini_1.parseString(file.contents);
          configs.push({
            name: file.name,
            contents
          });
          if ((contents[0][1].root || "").toLowerCase() === "true") {
            break;
          }
        }
      }
      return configs;
    }
    function readConfigFiles(filepaths) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, Promise.all(filepaths.map(function(name) {
            return new Promise(function(resolve3) {
              fs4.readFile(name, "utf8", function(err, data) {
                resolve3({
                  name,
                  contents: err ? "" : data
                });
              });
            });
          }))];
        });
      });
    }
    function readConfigFilesSync(filepaths) {
      var files = [];
      var file;
      filepaths.forEach(function(filepath) {
        try {
          file = fs4.readFileSync(filepath, "utf8");
        } catch (e) {
          file = "";
        }
        files.push({
          name: filepath,
          contents: file
        });
      });
      return files;
    }
    function opts(filepath, options8) {
      if (options8 === void 0) {
        options8 = {};
      }
      var resolvedFilePath = path15.resolve(filepath);
      return [
        resolvedFilePath,
        processOptions(options8, resolvedFilePath)
      ];
    }
    function parseFromFiles(filepath, files, options8) {
      if (options8 === void 0) {
        options8 = {};
      }
      return __awaiter(this, void 0, void 0, function() {
        var _a, resolvedFilePath, processedOptions;
        return __generator(this, function(_b) {
          _a = opts(filepath, options8), resolvedFilePath = _a[0], processedOptions = _a[1];
          return [2, files.then(getConfigsForFiles).then(function(configs) {
            return parseFromConfigs(configs, resolvedFilePath, processedOptions);
          })];
        });
      });
    }
    exports.parseFromFiles = parseFromFiles;
    function parseFromFilesSync(filepath, files, options8) {
      if (options8 === void 0) {
        options8 = {};
      }
      var _a = opts(filepath, options8), resolvedFilePath = _a[0], processedOptions = _a[1];
      return parseFromConfigs(getConfigsForFiles(files), resolvedFilePath, processedOptions);
    }
    exports.parseFromFilesSync = parseFromFilesSync;
    function parse7(_filepath, _options) {
      if (_options === void 0) {
        _options = {};
      }
      return __awaiter(this, void 0, void 0, function() {
        var _a, resolvedFilePath, processedOptions, filepaths;
        return __generator(this, function(_b) {
          _a = opts(_filepath, _options), resolvedFilePath = _a[0], processedOptions = _a[1];
          filepaths = getConfigFileNames(resolvedFilePath, processedOptions);
          return [2, readConfigFiles(filepaths).then(getConfigsForFiles).then(function(configs) {
            return parseFromConfigs(configs, resolvedFilePath, processedOptions);
          })];
        });
      });
    }
    exports.parse = parse7;
    function parseSync(_filepath, _options) {
      if (_options === void 0) {
        _options = {};
      }
      var _a = opts(_filepath, _options), resolvedFilePath = _a[0], processedOptions = _a[1];
      var filepaths = getConfigFileNames(resolvedFilePath, processedOptions);
      var files = readConfigFilesSync(filepaths);
      return parseFromConfigs(getConfigsForFiles(files), resolvedFilePath, processedOptions);
    }
    exports.parseSync = parseSync;
  }
});

// node_modules/@babel/code-frame/node_modules/js-tokens/index.js
var require_js_tokens = __commonJS({
  "node_modules/@babel/code-frame/node_modules/js-tokens/index.js"(exports, module) {
    var Identifier;
    var JSXIdentifier;
    var JSXPunctuator;
    var JSXString;
    var JSXText;
    var KeywordsWithExpressionAfter;
    var KeywordsWithNoLineTerminatorAfter;
    var LineTerminatorSequence;
    var MultiLineComment;
    var Newline;
    var NumericLiteral;
    var Punctuator;
    var RegularExpressionLiteral;
    var SingleLineComment;
    var StringLiteral;
    var Template;
    var TokensNotPrecedingObjectLiteral;
    var TokensPrecedingExpression;
    var WhiteSpace;
    var jsTokens2;
    RegularExpressionLiteral = /\/(?![*\/])(?:\[(?:[^\]\\\n\r\u2028\u2029]+|\\.)*\]|[^\/\\\n\r\u2028\u2029]+|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/yu;
    Punctuator = /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y;
    Identifier = /(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]+|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/yu;
    StringLiteral = /(['"])(?:[^'"\\\n\r]+|(?!\1)['"]|\\(?:\r\n|[^]))*(\1)?/y;
    NumericLiteral = /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y;
    Template = /[`}](?:[^`\\$]+|\\[^]|\$(?!\{))*(`|\$\{)?/y;
    WhiteSpace = /[\t\v\f\ufeff\p{Zs}]+/yu;
    LineTerminatorSequence = /\r?\n|[\r\u2028\u2029]/y;
    MultiLineComment = /\/\*(?:[^*]+|\*(?!\/))*(\*\/)?/y;
    SingleLineComment = /\/\/.*/y;
    JSXPunctuator = /[<>.:={}]|\/(?![\/*])/y;
    JSXIdentifier = /[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/yu;
    JSXString = /(['"])(?:[^'"]+|(?!\1)['"])*(\1)?/y;
    JSXText = /[^<>{}]+/y;
    TokensPrecedingExpression = /^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/;
    TokensNotPrecedingObjectLiteral = /^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/;
    KeywordsWithExpressionAfter = /^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/;
    KeywordsWithNoLineTerminatorAfter = /^(?:return|throw|yield)$/;
    Newline = RegExp(LineTerminatorSequence.source);
    module.exports = jsTokens2 = function* (input, { jsx = false } = {}) {
      var braces, firstCodePoint, isExpression, lastIndex, lastSignificantToken, length, match, mode, nextLastIndex, nextLastSignificantToken, parenNesting, postfixIncDec, punctuator, stack2;
      ({ length } = input);
      lastIndex = 0;
      lastSignificantToken = "";
      stack2 = [
        { tag: "JS" }
      ];
      braces = [];
      parenNesting = 0;
      postfixIncDec = false;
      while (lastIndex < length) {
        mode = stack2[stack2.length - 1];
        switch (mode.tag) {
          case "JS":
          case "JSNonExpressionParen":
          case "InterpolationInTemplate":
          case "InterpolationInJSX":
            if (input[lastIndex] === "/" && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
              RegularExpressionLiteral.lastIndex = lastIndex;
              if (match = RegularExpressionLiteral.exec(input)) {
                lastIndex = RegularExpressionLiteral.lastIndex;
                lastSignificantToken = match[0];
                postfixIncDec = true;
                yield {
                  type: "RegularExpressionLiteral",
                  value: match[0],
                  closed: match[1] !== void 0 && match[1] !== "\\"
                };
                continue;
              }
            }
            Punctuator.lastIndex = lastIndex;
            if (match = Punctuator.exec(input)) {
              punctuator = match[0];
              nextLastIndex = Punctuator.lastIndex;
              nextLastSignificantToken = punctuator;
              switch (punctuator) {
                case "(":
                  if (lastSignificantToken === "?NonExpressionParenKeyword") {
                    stack2.push({
                      tag: "JSNonExpressionParen",
                      nesting: parenNesting
                    });
                  }
                  parenNesting++;
                  postfixIncDec = false;
                  break;
                case ")":
                  parenNesting--;
                  postfixIncDec = true;
                  if (mode.tag === "JSNonExpressionParen" && parenNesting === mode.nesting) {
                    stack2.pop();
                    nextLastSignificantToken = "?NonExpressionParenEnd";
                    postfixIncDec = false;
                  }
                  break;
                case "{":
                  Punctuator.lastIndex = 0;
                  isExpression = !TokensNotPrecedingObjectLiteral.test(lastSignificantToken) && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken));
                  braces.push(isExpression);
                  postfixIncDec = false;
                  break;
                case "}":
                  switch (mode.tag) {
                    case "InterpolationInTemplate":
                      if (braces.length === mode.nesting) {
                        Template.lastIndex = lastIndex;
                        match = Template.exec(input);
                        lastIndex = Template.lastIndex;
                        lastSignificantToken = match[0];
                        if (match[1] === "${") {
                          lastSignificantToken = "?InterpolationInTemplate";
                          postfixIncDec = false;
                          yield {
                            type: "TemplateMiddle",
                            value: match[0]
                          };
                        } else {
                          stack2.pop();
                          postfixIncDec = true;
                          yield {
                            type: "TemplateTail",
                            value: match[0],
                            closed: match[1] === "`"
                          };
                        }
                        continue;
                      }
                      break;
                    case "InterpolationInJSX":
                      if (braces.length === mode.nesting) {
                        stack2.pop();
                        lastIndex += 1;
                        lastSignificantToken = "}";
                        yield {
                          type: "JSXPunctuator",
                          value: "}"
                        };
                        continue;
                      }
                  }
                  postfixIncDec = braces.pop();
                  nextLastSignificantToken = postfixIncDec ? "?ExpressionBraceEnd" : "}";
                  break;
                case "]":
                  postfixIncDec = true;
                  break;
                case "++":
                case "--":
                  nextLastSignificantToken = postfixIncDec ? "?PostfixIncDec" : "?UnaryIncDec";
                  break;
                case "<":
                  if (jsx && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
                    stack2.push({ tag: "JSXTag" });
                    lastIndex += 1;
                    lastSignificantToken = "<";
                    yield {
                      type: "JSXPunctuator",
                      value: punctuator
                    };
                    continue;
                  }
                  postfixIncDec = false;
                  break;
                default:
                  postfixIncDec = false;
              }
              lastIndex = nextLastIndex;
              lastSignificantToken = nextLastSignificantToken;
              yield {
                type: "Punctuator",
                value: punctuator
              };
              continue;
            }
            Identifier.lastIndex = lastIndex;
            if (match = Identifier.exec(input)) {
              lastIndex = Identifier.lastIndex;
              nextLastSignificantToken = match[0];
              switch (match[0]) {
                case "for":
                case "if":
                case "while":
                case "with":
                  if (lastSignificantToken !== "." && lastSignificantToken !== "?.") {
                    nextLastSignificantToken = "?NonExpressionParenKeyword";
                  }
              }
              lastSignificantToken = nextLastSignificantToken;
              postfixIncDec = !KeywordsWithExpressionAfter.test(match[0]);
              yield {
                type: match[1] === "#" ? "PrivateIdentifier" : "IdentifierName",
                value: match[0]
              };
              continue;
            }
            StringLiteral.lastIndex = lastIndex;
            if (match = StringLiteral.exec(input)) {
              lastIndex = StringLiteral.lastIndex;
              lastSignificantToken = match[0];
              postfixIncDec = true;
              yield {
                type: "StringLiteral",
                value: match[0],
                closed: match[2] !== void 0
              };
              continue;
            }
            NumericLiteral.lastIndex = lastIndex;
            if (match = NumericLiteral.exec(input)) {
              lastIndex = NumericLiteral.lastIndex;
              lastSignificantToken = match[0];
              postfixIncDec = true;
              yield {
                type: "NumericLiteral",
                value: match[0]
              };
              continue;
            }
            Template.lastIndex = lastIndex;
            if (match = Template.exec(input)) {
              lastIndex = Template.lastIndex;
              lastSignificantToken = match[0];
              if (match[1] === "${") {
                lastSignificantToken = "?InterpolationInTemplate";
                stack2.push({
                  tag: "InterpolationInTemplate",
                  nesting: braces.length
                });
                postfixIncDec = false;
                yield {
                  type: "TemplateHead",
                  value: match[0]
                };
              } else {
                postfixIncDec = true;
                yield {
                  type: "NoSubstitutionTemplate",
                  value: match[0],
                  closed: match[1] === "`"
                };
              }
              continue;
            }
            break;
          case "JSXTag":
          case "JSXTagEnd":
            JSXPunctuator.lastIndex = lastIndex;
            if (match = JSXPunctuator.exec(input)) {
              lastIndex = JSXPunctuator.lastIndex;
              nextLastSignificantToken = match[0];
              switch (match[0]) {
                case "<":
                  stack2.push({ tag: "JSXTag" });
                  break;
                case ">":
                  stack2.pop();
                  if (lastSignificantToken === "/" || mode.tag === "JSXTagEnd") {
                    nextLastSignificantToken = "?JSX";
                    postfixIncDec = true;
                  } else {
                    stack2.push({ tag: "JSXChildren" });
                  }
                  break;
                case "{":
                  stack2.push({
                    tag: "InterpolationInJSX",
                    nesting: braces.length
                  });
                  nextLastSignificantToken = "?InterpolationInJSX";
                  postfixIncDec = false;
                  break;
                case "/":
                  if (lastSignificantToken === "<") {
                    stack2.pop();
                    if (stack2[stack2.length - 1].tag === "JSXChildren") {
                      stack2.pop();
                    }
                    stack2.push({ tag: "JSXTagEnd" });
                  }
              }
              lastSignificantToken = nextLastSignificantToken;
              yield {
                type: "JSXPunctuator",
                value: match[0]
              };
              continue;
            }
            JSXIdentifier.lastIndex = lastIndex;
            if (match = JSXIdentifier.exec(input)) {
              lastIndex = JSXIdentifier.lastIndex;
              lastSignificantToken = match[0];
              yield {
                type: "JSXIdentifier",
                value: match[0]
              };
              continue;
            }
            JSXString.lastIndex = lastIndex;
            if (match = JSXString.exec(input)) {
              lastIndex = JSXString.lastIndex;
              lastSignificantToken = match[0];
              yield {
                type: "JSXString",
                value: match[0],
                closed: match[2] !== void 0
              };
              continue;
            }
            break;
          case "JSXChildren":
            JSXText.lastIndex = lastIndex;
            if (match = JSXText.exec(input)) {
              lastIndex = JSXText.lastIndex;
              lastSignificantToken = match[0];
              yield {
                type: "JSXText",
                value: match[0]
              };
              continue;
            }
            switch (input[lastIndex]) {
              case "<":
                stack2.push({ tag: "JSXTag" });
                lastIndex++;
                lastSignificantToken = "<";
                yield {
                  type: "JSXPunctuator",
                  value: "<"
                };
                continue;
              case "{":
                stack2.push({
                  tag: "InterpolationInJSX",
                  nesting: braces.length
                });
                lastIndex++;
                lastSignificantToken = "?InterpolationInJSX";
                postfixIncDec = false;
                yield {
                  type: "JSXPunctuator",
                  value: "{"
                };
                continue;
            }
        }
        WhiteSpace.lastIndex = lastIndex;
        if (match = WhiteSpace.exec(input)) {
          lastIndex = WhiteSpace.lastIndex;
          yield {
            type: "WhiteSpace",
            value: match[0]
          };
          continue;
        }
        LineTerminatorSequence.lastIndex = lastIndex;
        if (match = LineTerminatorSequence.exec(input)) {
          lastIndex = LineTerminatorSequence.lastIndex;
          postfixIncDec = false;
          if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
            lastSignificantToken = "?NoLineTerminatorHere";
          }
          yield {
            type: "LineTerminatorSequence",
            value: match[0]
          };
          continue;
        }
        MultiLineComment.lastIndex = lastIndex;
        if (match = MultiLineComment.exec(input)) {
          lastIndex = MultiLineComment.lastIndex;
          if (Newline.test(match[0])) {
            postfixIncDec = false;
            if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
              lastSignificantToken = "?NoLineTerminatorHere";
            }
          }
          yield {
            type: "MultiLineComment",
            value: match[0],
            closed: match[1] !== void 0
          };
          continue;
        }
        SingleLineComment.lastIndex = lastIndex;
        if (match = SingleLineComment.exec(input)) {
          lastIndex = SingleLineComment.lastIndex;
          postfixIncDec = false;
          yield {
            type: "SingleLineComment",
            value: match[0]
          };
          continue;
        }
        firstCodePoint = String.fromCodePoint(input.codePointAt(lastIndex));
        lastIndex += firstCodePoint.length;
        lastSignificantToken = firstCodePoint;
        postfixIncDec = false;
        yield {
          type: mode.tag.startsWith("JSX") ? "JSXInvalid" : "Invalid",
          value: firstCodePoint
        };
      }
      return void 0;
    };
  }
});

// node_modules/n-readlines/readlines.js
var require_readlines = __commonJS({
  "node_modules/n-readlines/readlines.js"(exports, module) {
    "use strict";
    var fs4 = __require("fs");
    var LineByLine = class {
      constructor(file, options8) {
        options8 = options8 || {};
        if (!options8.readChunk) options8.readChunk = 1024;
        if (!options8.newLineCharacter) {
          options8.newLineCharacter = 10;
        } else {
          options8.newLineCharacter = options8.newLineCharacter.charCodeAt(0);
        }
        if (typeof file === "number") {
          this.fd = file;
        } else {
          this.fd = fs4.openSync(file, "r");
        }
        this.options = options8;
        this.newLineCharacter = options8.newLineCharacter;
        this.reset();
      }
      _searchInBuffer(buffer2, hexNeedle) {
        let found = -1;
        for (let i = 0; i <= buffer2.length; i++) {
          let b_byte = buffer2[i];
          if (b_byte === hexNeedle) {
            found = i;
            break;
          }
        }
        return found;
      }
      reset() {
        this.eofReached = false;
        this.linesCache = [];
        this.fdPosition = 0;
      }
      close() {
        fs4.closeSync(this.fd);
        this.fd = null;
      }
      _extractLines(buffer2) {
        let line3;
        const lines = [];
        let bufferPosition = 0;
        let lastNewLineBufferPosition = 0;
        while (true) {
          let bufferPositionValue = buffer2[bufferPosition++];
          if (bufferPositionValue === this.newLineCharacter) {
            line3 = buffer2.slice(lastNewLineBufferPosition, bufferPosition);
            lines.push(line3);
            lastNewLineBufferPosition = bufferPosition;
          } else if (bufferPositionValue === void 0) {
            break;
          }
        }
        let leftovers = buffer2.slice(lastNewLineBufferPosition, bufferPosition);
        if (leftovers.length) {
          lines.push(leftovers);
        }
        return lines;
      }
      _readChunk(lineLeftovers) {
        let totalBytesRead = 0;
        let bytesRead;
        const buffers = [];
        do {
          const readBuffer = Buffer.alloc(this.options.readChunk);
          bytesRead = fs4.readSync(this.fd, readBuffer, 0, this.options.readChunk, this.fdPosition);
          totalBytesRead = totalBytesRead + bytesRead;
          this.fdPosition = this.fdPosition + bytesRead;
          buffers.push(readBuffer);
        } while (bytesRead && this._searchInBuffer(buffers[buffers.length - 1], this.options.newLineCharacter) === -1);
        let bufferData = Buffer.concat(buffers);
        if (bytesRead < this.options.readChunk) {
          this.eofReached = true;
          bufferData = bufferData.slice(0, totalBytesRead);
        }
        if (totalBytesRead) {
          this.linesCache = this._extractLines(bufferData);
          if (lineLeftovers) {
            this.linesCache[0] = Buffer.concat([lineLeftovers, this.linesCache[0]]);
          }
        }
        return totalBytesRead;
      }
      next() {
        if (!this.fd) return false;
        let line3 = false;
        if (this.eofReached && this.linesCache.length === 0) {
          return line3;
        }
        let bytesRead;
        if (!this.linesCache.length) {
          bytesRead = this._readChunk();
        }
        if (this.linesCache.length) {
          line3 = this.linesCache.shift();
          const lastLineCharacter = line3[line3.length - 1];
          if (lastLineCharacter !== this.newLineCharacter) {
            bytesRead = this._readChunk(line3);
            if (bytesRead) {
              line3 = this.linesCache.shift();
            }
          }
        }
        if (this.eofReached && this.linesCache.length === 0) {
          this.close();
        }
        if (line3 && line3[line3.length - 1] === this.newLineCharacter) {
          line3 = line3.slice(0, line3.length - 1);
        }
        return line3;
      }
    };
    module.exports = LineByLine;
  }
});

// node_modules/ignore/index.js
var require_ignore = __commonJS({
  "node_modules/ignore/index.js"(exports, module) {
    function makeArray(subject) {
      return Array.isArray(subject) ? subject : [subject];
    }
    var UNDEFINED = void 0;
    var EMPTY = "";
    var SPACE = " ";
    var ESCAPE = "\\";
    var REGEX_TEST_BLANK_LINE = /^\s+$/;
    var REGEX_INVALID_TRAILING_BACKSLASH = /(?:[^\\]|^)\\$/;
    var REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION = /^\\!/;
    var REGEX_REPLACE_LEADING_EXCAPED_HASH = /^\\#/;
    var REGEX_SPLITALL_CRLF = /\r?\n/g;
    var REGEX_TEST_INVALID_PATH = /^\.{0,2}\/|^\.{1,2}$/;
    var REGEX_TEST_TRAILING_SLASH = /\/$/;
    var SLASH = "/";
    var TMP_KEY_IGNORE = "node-ignore";
    if (typeof Symbol !== "undefined") {
      TMP_KEY_IGNORE = Symbol.for("node-ignore");
    }
    var KEY_IGNORE = TMP_KEY_IGNORE;
    var define = (object, key2, value) => {
      Object.defineProperty(object, key2, { value });
      return value;
    };
    var REGEX_REGEXP_RANGE = /([0-z])-([0-z])/g;
    var RETURN_FALSE = () => false;
    var sanitizeRange = (range) => range.replace(
      REGEX_REGEXP_RANGE,
      (match, from, to) => from.charCodeAt(0) <= to.charCodeAt(0) ? match : EMPTY
    );
    var cleanRangeBackSlash = (slashes) => {
      const { length } = slashes;
      return slashes.slice(0, length - length % 2);
    };
    var REPLACERS = [
      [
        // Remove BOM
        // TODO:
        // Other similar zero-width characters?
        /^\uFEFF/,
        () => EMPTY
      ],
      // > Trailing spaces are ignored unless they are quoted with backslash ("\")
      [
        // (a\ ) -> (a )
        // (a  ) -> (a)
        // (a ) -> (a)
        // (a \ ) -> (a  )
        /((?:\\\\)*?)(\\?\s+)$/,
        (_, m1, m2) => m1 + (m2.indexOf("\\") === 0 ? SPACE : EMPTY)
      ],
      // Replace (\ ) with ' '
      // (\ ) -> ' '
      // (\\ ) -> '\\ '
      // (\\\ ) -> '\\ '
      [
        /(\\+?)\s/g,
        (_, m1) => {
          const { length } = m1;
          return m1.slice(0, length - length % 2) + SPACE;
        }
      ],
      // Escape metacharacters
      // which is written down by users but means special for regular expressions.
      // > There are 12 characters with special meanings:
      // > - the backslash \,
      // > - the caret ^,
      // > - the dollar sign $,
      // > - the period or dot .,
      // > - the vertical bar or pipe symbol |,
      // > - the question mark ?,
      // > - the asterisk or star *,
      // > - the plus sign +,
      // > - the opening parenthesis (,
      // > - the closing parenthesis ),
      // > - and the opening square bracket [,
      // > - the opening curly brace {,
      // > These special characters are often called "metacharacters".
      [
        /[\\$.|*+(){^]/g,
        (match) => `\\${match}`
      ],
      [
        // > a question mark (?) matches a single character
        /(?!\\)\?/g,
        () => "[^/]"
      ],
      // leading slash
      [
        // > A leading slash matches the beginning of the pathname.
        // > For example, "/*.c" matches "cat-file.c" but not "mozilla-sha1/sha1.c".
        // A leading slash matches the beginning of the pathname
        /^\//,
        () => "^"
      ],
      // replace special metacharacter slash after the leading slash
      [
        /\//g,
        () => "\\/"
      ],
      [
        // > A leading "**" followed by a slash means match in all directories.
        // > For example, "**/foo" matches file or directory "foo" anywhere,
        // > the same as pattern "foo".
        // > "**/foo/bar" matches file or directory "bar" anywhere that is directly
        // >   under directory "foo".
        // Notice that the '*'s have been replaced as '\\*'
        /^\^*\\\*\\\*\\\//,
        // '**/foo' <-> 'foo'
        () => "^(?:.*\\/)?"
      ],
      // starting
      [
        // there will be no leading '/'
        //   (which has been replaced by section "leading slash")
        // If starts with '**', adding a '^' to the regular expression also works
        /^(?=[^^])/,
        function startingReplacer() {
          return !/\/(?!$)/.test(this) ? "(?:^|\\/)" : "^";
        }
      ],
      // two globstars
      [
        // Use lookahead assertions so that we could match more than one `'/**'`
        /\\\/\\\*\\\*(?=\\\/|$)/g,
        // Zero, one or several directories
        // should not use '*', or it will be replaced by the next replacer
        // Check if it is not the last `'/**'`
        (_, index, str) => index + 6 < str.length ? "(?:\\/[^\\/]+)*" : "\\/.+"
      ],
      // normal intermediate wildcards
      [
        // Never replace escaped '*'
        // ignore rule '\*' will match the path '*'
        // 'abc.*/' -> go
        // 'abc.*'  -> skip this rule,
        //    coz trailing single wildcard will be handed by [trailing wildcard]
        /(^|[^\\]+)(\\\*)+(?=.+)/g,
        // '*.js' matches '.js'
        // '*.js' doesn't match 'abc'
        (_, p1, p2) => {
          const unescaped = p2.replace(/\\\*/g, "[^\\/]*");
          return p1 + unescaped;
        }
      ],
      [
        // unescape, revert step 3 except for back slash
        // For example, if a user escape a '\\*',
        // after step 3, the result will be '\\\\\\*'
        /\\\\\\(?=[$.|*+(){^])/g,
        () => ESCAPE
      ],
      [
        // '\\\\' -> '\\'
        /\\\\/g,
        () => ESCAPE
      ],
      [
        // > The range notation, e.g. [a-zA-Z],
        // > can be used to match one of the characters in a range.
        // `\` is escaped by step 3
        /(\\)?\[([^\]/]*?)(\\*)($|\])/g,
        (match, leadEscape, range, endEscape, close) => leadEscape === ESCAPE ? `\\[${range}${cleanRangeBackSlash(endEscape)}${close}` : close === "]" ? endEscape.length % 2 === 0 ? `[${sanitizeRange(range)}${endEscape}]` : "[]" : "[]"
      ],
      // ending
      [
        // 'js' will not match 'js.'
        // 'ab' will not match 'abc'
        /(?:[^*])$/,
        // WTF!
        // https://git-scm.com/docs/gitignore
        // changes in [2.22.1](https://git-scm.com/docs/gitignore/2.22.1)
        // which re-fixes #24, #38
        // > If there is a separator at the end of the pattern then the pattern
        // > will only match directories, otherwise the pattern can match both
        // > files and directories.
        // 'js*' will not match 'a.js'
        // 'js/' will not match 'a.js'
        // 'js' will match 'a.js' and 'a.js/'
        (match) => /\/$/.test(match) ? `${match}$` : `${match}(?=$|\\/$)`
      ]
    ];
    var REGEX_REPLACE_TRAILING_WILDCARD = /(^|\\\/)?\\\*$/;
    var MODE_IGNORE = "regex";
    var MODE_CHECK_IGNORE = "checkRegex";
    var UNDERSCORE = "_";
    var TRAILING_WILD_CARD_REPLACERS = {
      [MODE_IGNORE](_, p1) {
        const prefix = p1 ? `${p1}[^/]+` : "[^/]*";
        return `${prefix}(?=$|\\/$)`;
      },
      [MODE_CHECK_IGNORE](_, p1) {
        const prefix = p1 ? `${p1}[^/]*` : "[^/]*";
        return `${prefix}(?=$|\\/$)`;
      }
    };
    var makeRegexPrefix = (pattern) => REPLACERS.reduce(
      (prev, [matcher, replacer]) => prev.replace(matcher, replacer.bind(pattern)),
      pattern
    );
    var isString = (subject) => typeof subject === "string";
    var checkPattern = (pattern) => pattern && isString(pattern) && !REGEX_TEST_BLANK_LINE.test(pattern) && !REGEX_INVALID_TRAILING_BACKSLASH.test(pattern) && pattern.indexOf("#") !== 0;
    var splitPattern = (pattern) => pattern.split(REGEX_SPLITALL_CRLF).filter(Boolean);
    var IgnoreRule = class {
      constructor(pattern, mark, body, ignoreCase, negative, prefix) {
        this.pattern = pattern;
        this.mark = mark;
        this.negative = negative;
        define(this, "body", body);
        define(this, "ignoreCase", ignoreCase);
        define(this, "regexPrefix", prefix);
      }
      get regex() {
        const key2 = UNDERSCORE + MODE_IGNORE;
        if (this[key2]) {
          return this[key2];
        }
        return this._make(MODE_IGNORE, key2);
      }
      get checkRegex() {
        const key2 = UNDERSCORE + MODE_CHECK_IGNORE;
        if (this[key2]) {
          return this[key2];
        }
        return this._make(MODE_CHECK_IGNORE, key2);
      }
      _make(mode, key2) {
        const str = this.regexPrefix.replace(
          REGEX_REPLACE_TRAILING_WILDCARD,
          // It does not need to bind pattern
          TRAILING_WILD_CARD_REPLACERS[mode]
        );
        const regex = this.ignoreCase ? new RegExp(str, "i") : new RegExp(str);
        return define(this, key2, regex);
      }
    };
    var createRule = ({
      pattern,
      mark
    }, ignoreCase) => {
      let negative = false;
      let body = pattern;
      if (body.indexOf("!") === 0) {
        negative = true;
        body = body.substr(1);
      }
      body = body.replace(REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION, "!").replace(REGEX_REPLACE_LEADING_EXCAPED_HASH, "#");
      const regexPrefix = makeRegexPrefix(body);
      return new IgnoreRule(
        pattern,
        mark,
        body,
        ignoreCase,
        negative,
        regexPrefix
      );
    };
    var RuleManager = class {
      constructor(ignoreCase) {
        this._ignoreCase = ignoreCase;
        this._rules = [];
      }
      _add(pattern) {
        if (pattern && pattern[KEY_IGNORE]) {
          this._rules = this._rules.concat(pattern._rules._rules);
          this._added = true;
          return;
        }
        if (isString(pattern)) {
          pattern = {
            pattern
          };
        }
        if (checkPattern(pattern.pattern)) {
          const rule = createRule(pattern, this._ignoreCase);
          this._added = true;
          this._rules.push(rule);
        }
      }
      // @param {Array<string> | string | Ignore} pattern
      add(pattern) {
        this._added = false;
        makeArray(
          isString(pattern) ? splitPattern(pattern) : pattern
        ).forEach(this._add, this);
        return this._added;
      }
      // Test one single path without recursively checking parent directories
      //
      // - checkUnignored `boolean` whether should check if the path is unignored,
      //   setting `checkUnignored` to `false` could reduce additional
      //   path matching.
      // - check `string` either `MODE_IGNORE` or `MODE_CHECK_IGNORE`
      // @returns {TestResult} true if a file is ignored
      test(path15, checkUnignored, mode) {
        let ignored = false;
        let unignored = false;
        let matchedRule;
        this._rules.forEach((rule) => {
          const { negative } = rule;
          if (unignored === negative && ignored !== unignored || negative && !ignored && !unignored && !checkUnignored) {
            return;
          }
          const matched = rule[mode].test(path15);
          if (!matched) {
            return;
          }
          ignored = !negative;
          unignored = negative;
          matchedRule = negative ? UNDEFINED : rule;
        });
        const ret = {
          ignored,
          unignored
        };
        if (matchedRule) {
          ret.rule = matchedRule;
        }
        return ret;
      }
    };
    var throwError = (message, Ctor) => {
      throw new Ctor(message);
    };
    var checkPath = (path15, originalPath, doThrow) => {
      if (!isString(path15)) {
        return doThrow(
          `path must be a string, but got \`${originalPath}\``,
          TypeError
        );
      }
      if (!path15) {
        return doThrow(`path must not be empty`, TypeError);
      }
      if (checkPath.isNotRelative(path15)) {
        const r = "`path.relative()`d";
        return doThrow(
          `path should be a ${r} string, but got "${originalPath}"`,
          RangeError
        );
      }
      return true;
    };
    var isNotRelative = (path15) => REGEX_TEST_INVALID_PATH.test(path15);
    checkPath.isNotRelative = isNotRelative;
    checkPath.convert = (p) => p;
    var Ignore = class {
      constructor({
        ignorecase = true,
        ignoreCase = ignorecase,
        allowRelativePaths = false
      } = {}) {
        define(this, KEY_IGNORE, true);
        this._rules = new RuleManager(ignoreCase);
        this._strictPathCheck = !allowRelativePaths;
        this._initCache();
      }
      _initCache() {
        this._ignoreCache = /* @__PURE__ */ Object.create(null);
        this._testCache = /* @__PURE__ */ Object.create(null);
      }
      add(pattern) {
        if (this._rules.add(pattern)) {
          this._initCache();
        }
        return this;
      }
      // legacy
      addPattern(pattern) {
        return this.add(pattern);
      }
      // @returns {TestResult}
      _test(originalPath, cache3, checkUnignored, slices) {
        const path15 = originalPath && checkPath.convert(originalPath);
        checkPath(
          path15,
          originalPath,
          this._strictPathCheck ? throwError : RETURN_FALSE
        );
        return this._t(path15, cache3, checkUnignored, slices);
      }
      checkIgnore(path15) {
        if (!REGEX_TEST_TRAILING_SLASH.test(path15)) {
          return this.test(path15);
        }
        const slices = path15.split(SLASH).filter(Boolean);
        slices.pop();
        if (slices.length) {
          const parent = this._t(
            slices.join(SLASH) + SLASH,
            this._testCache,
            true,
            slices
          );
          if (parent.ignored) {
            return parent;
          }
        }
        return this._rules.test(path15, false, MODE_CHECK_IGNORE);
      }
      _t(path15, cache3, checkUnignored, slices) {
        if (path15 in cache3) {
          return cache3[path15];
        }
        if (!slices) {
          slices = path15.split(SLASH).filter(Boolean);
        }
        slices.pop();
        if (!slices.length) {
          return cache3[path15] = this._rules.test(path15, checkUnignored, MODE_IGNORE);
        }
        const parent = this._t(
          slices.join(SLASH) + SLASH,
          cache3,
          checkUnignored,
          slices
        );
        return cache3[path15] = parent.ignored ? parent : this._rules.test(path15, checkUnignored, MODE_IGNORE);
      }
      ignores(path15) {
        return this._test(path15, this._ignoreCache, false).ignored;
      }
      createFilter() {
        return (path15) => !this.ignores(path15);
      }
      filter(paths) {
        return makeArray(paths).filter(this.createFilter());
      }
      // @returns {TestResult}
      test(path15) {
        return this._test(path15, this._testCache, true);
      }
    };
    var factory = (options8) => new Ignore(options8);
    var isPathValid = (path15) => checkPath(path15 && checkPath.convert(path15), path15, RETURN_FALSE);
    var setupWindows = () => {
      const makePosix = (str) => /^\\\\\?\\/.test(str) || /["<>|\u0000-\u001F]+/u.test(str) ? str : str.replace(/\\/g, "/");
      checkPath.convert = makePosix;
      const REGEX_TEST_WINDOWS_PATH_ABSOLUTE = /^[a-z]:\//i;
      checkPath.isNotRelative = (path15) => REGEX_TEST_WINDOWS_PATH_ABSOLUTE.test(path15) || isNotRelative(path15);
    };
    if (
      // Detect `process` so that it can run in browsers.
      typeof process !== "undefined" && process.platform === "win32"
    ) {
      setupWindows();
    }
    module.exports = factory;
    factory.default = factory;
    module.exports.isPathValid = isPathValid;
    define(module.exports, Symbol.for("setupWindows"), setupWindows);
  }
});

// src/index.js
var index_exports = {};
__export(index_exports, {
  __debug: () => debugApis,
  __internal: () => sharedWithCli,
  check: () => check,
  clearConfigCache: () => clearCache3,
  doc: () => doc,
  format: () => format2,
  formatWithCursor: () => formatWithCursor2,
  getFileInfo: () => get_file_info_default,
  getSupportInfo: () => getSupportInfo2,
  resolveConfig: () => resolveConfig,
  resolveConfigFile: () => resolveConfigFile,
  util: () => public_exports,
  version: () => version_evaluate_default
});

// node_modules/diff/libesm/diff/base.js
var Diff = class {
  diff(oldStr, newStr, options8 = {}) {
    let callback;
    if (typeof options8 === "function") {
      callback = options8;
      options8 = {};
    } else if ("callback" in options8) {
      callback = options8.callback;
    }
    const oldString = this.castInput(oldStr, options8);
    const newString = this.castInput(newStr, options8);
    const oldTokens = this.removeEmpty(this.tokenize(oldString, options8));
    const newTokens = this.removeEmpty(this.tokenize(newString, options8));
    return this.diffWithOptionsObj(oldTokens, newTokens, options8, callback);
  }
  diffWithOptionsObj(oldTokens, newTokens, options8, callback) {
    var _a;
    const done = (value) => {
      value = this.postProcess(value, options8);
      if (callback) {
        setTimeout(function() {
          callback(value);
        }, 0);
        return void 0;
      } else {
        return value;
      }
    };
    const newLen = newTokens.length, oldLen = oldTokens.length;
    let editLength = 1;
    let maxEditLength = newLen + oldLen;
    if (options8.maxEditLength != null) {
      maxEditLength = Math.min(maxEditLength, options8.maxEditLength);
    }
    const maxExecutionTime = (_a = options8.timeout) !== null && _a !== void 0 ? _a : Infinity;
    const abortAfterTimestamp = Date.now() + maxExecutionTime;
    const bestPath = [{ oldPos: -1, lastComponent: void 0 }];
    let newPos = this.extractCommon(bestPath[0], newTokens, oldTokens, 0, options8);
    if (bestPath[0].oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
      return done(this.buildValues(bestPath[0].lastComponent, newTokens, oldTokens));
    }
    let minDiagonalToConsider = -Infinity, maxDiagonalToConsider = Infinity;
    const execEditLength = () => {
      for (let diagonalPath = Math.max(minDiagonalToConsider, -editLength); diagonalPath <= Math.min(maxDiagonalToConsider, editLength); diagonalPath += 2) {
        let basePath;
        const removePath = bestPath[diagonalPath - 1], addPath = bestPath[diagonalPath + 1];
        if (removePath) {
          bestPath[diagonalPath - 1] = void 0;
        }
        let canAdd = false;
        if (addPath) {
          const addPathNewPos = addPath.oldPos - diagonalPath;
          canAdd = addPath && 0 <= addPathNewPos && addPathNewPos < newLen;
        }
        const canRemove = removePath && removePath.oldPos + 1 < oldLen;
        if (!canAdd && !canRemove) {
          bestPath[diagonalPath] = void 0;
          continue;
        }
        if (!canRemove || canAdd && removePath.oldPos < addPath.oldPos) {
          basePath = this.addToPath(addPath, true, false, 0, options8);
        } else {
          basePath = this.addToPath(removePath, false, true, 1, options8);
        }
        newPos = this.extractCommon(basePath, newTokens, oldTokens, diagonalPath, options8);
        if (basePath.oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
          return done(this.buildValues(basePath.lastComponent, newTokens, oldTokens)) || true;
        } else {
          bestPath[diagonalPath] = basePath;
          if (basePath.oldPos + 1 >= oldLen) {
            maxDiagonalToConsider = Math.min(maxDiagonalToConsider, diagonalPath - 1);
          }
          if (newPos + 1 >= newLen) {
            minDiagonalToConsider = Math.max(minDiagonalToConsider, diagonalPath + 1);
          }
        }
      }
      editLength++;
    };
    if (callback) {
      (function exec() {
        setTimeout(function() {
          if (editLength > maxEditLength || Date.now() > abortAfterTimestamp) {
            return callback(void 0);
          }
          if (!execEditLength()) {
            exec();
          }
        }, 0);
      })();
    } else {
      while (editLength <= maxEditLength && Date.now() <= abortAfterTimestamp) {
        const ret = execEditLength();
        if (ret) {
          return ret;
        }
      }
    }
  }
  addToPath(path15, added, removed, oldPosInc, options8) {
    const last = path15.lastComponent;
    if (last && !options8.oneChangePerToken && last.added === added && last.removed === removed) {
      return {
        oldPos: path15.oldPos + oldPosInc,
        lastComponent: { count: last.count + 1, added, removed, previousComponent: last.previousComponent }
      };
    } else {
      return {
        oldPos: path15.oldPos + oldPosInc,
        lastComponent: { count: 1, added, removed, previousComponent: last }
      };
    }
  }
  extractCommon(basePath, newTokens, oldTokens, diagonalPath, options8) {
    const newLen = newTokens.length, oldLen = oldTokens.length;
    let oldPos = basePath.oldPos, newPos = oldPos - diagonalPath, commonCount = 0;
    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(oldTokens[oldPos + 1], newTokens[newPos + 1], options8)) {
      newPos++;
      oldPos++;
      commonCount++;
      if (options8.oneChangePerToken) {
        basePath.lastComponent = { count: 1, previousComponent: basePath.lastComponent, added: false, removed: false };
      }
    }
    if (commonCount && !options8.oneChangePerToken) {
      basePath.lastComponent = { count: commonCount, previousComponent: basePath.lastComponent, added: false, removed: false };
    }
    basePath.oldPos = oldPos;
    return newPos;
  }
  equals(left, right, options8) {
    if (options8.comparator) {
      return options8.comparator(left, right);
    } else {
      return left === right || !!options8.ignoreCase && left.toLowerCase() === right.toLowerCase();
    }
  }
  removeEmpty(array2) {
    const ret = [];
    for (let i = 0; i < array2.length; i++) {
      if (array2[i]) {
        ret.push(array2[i]);
      }
    }
    return ret;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  castInput(value, options8) {
    return value;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  tokenize(value, options8) {
    return Array.from(value);
  }
  join(chars) {
    return chars.join("");
  }
  postProcess(changeObjects, options8) {
    return changeObjects;
  }
  get useLongestToken() {
    return false;
  }
  buildValues(lastComponent, newTokens, oldTokens) {
    const components = [];
    let nextComponent;
    while (lastComponent) {
      components.push(lastComponent);
      nextComponent = lastComponent.previousComponent;
      delete lastComponent.previousComponent;
      lastComponent = nextComponent;
    }
    components.reverse();
    const componentLen = components.length;
    let componentPos = 0, newPos = 0, oldPos = 0;
    for (; componentPos < componentLen; componentPos++) {
      const component = components[componentPos];
      if (!component.removed) {
        if (!component.added && this.useLongestToken) {
          let value = newTokens.slice(newPos, newPos + component.count);
          value = value.map(function(value2, i) {
            const oldValue = oldTokens[oldPos + i];
            return oldValue.length > value2.length ? oldValue : value2;
          });
          component.value = this.join(value);
        } else {
          component.value = this.join(newTokens.slice(newPos, newPos + component.count));
        }
        newPos += component.count;
        if (!component.added) {
          oldPos += component.count;
        }
      } else {
        component.value = this.join(oldTokens.slice(oldPos, oldPos + component.count));
        oldPos += component.count;
      }
    }
    return components;
  }
};

// node_modules/diff/libesm/diff/line.js
var LineDiff = class extends Diff {
  constructor() {
    super(...arguments);
    this.tokenize = tokenize;
  }
  equals(left, right, options8) {
    if (options8.ignoreWhitespace) {
      if (!options8.newlineIsToken || !left.includes("\n")) {
        left = left.trim();
      }
      if (!options8.newlineIsToken || !right.includes("\n")) {
        right = right.trim();
      }
    } else if (options8.ignoreNewlineAtEof && !options8.newlineIsToken) {
      if (left.endsWith("\n")) {
        left = left.slice(0, -1);
      }
      if (right.endsWith("\n")) {
        right = right.slice(0, -1);
      }
    }
    return super.equals(left, right, options8);
  }
};
var lineDiff = new LineDiff();
function diffLines(oldStr, newStr, options8) {
  return lineDiff.diff(oldStr, newStr, options8);
}
function tokenize(value, options8) {
  if (options8.stripTrailingCr) {
    value = value.replace(/\r\n/g, "\n");
  }
  const retLines = [], linesAndNewlines = value.split(/(\n|\r\n)/);
  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
    linesAndNewlines.pop();
  }
  for (let i = 0; i < linesAndNewlines.length; i++) {
    const line3 = linesAndNewlines[i];
    if (i % 2 && !options8.newlineIsToken) {
      retLines[retLines.length - 1] += line3;
    } else {
      retLines.push(line3);
    }
  }
  return retLines;
}

// node_modules/diff/libesm/diff/array.js
var ArrayDiff = class extends Diff {
  tokenize(value) {
    return value.slice();
  }
  join(value) {
    return value;
  }
  removeEmpty(value) {
    return value;
  }
};
var arrayDiff = new ArrayDiff();
function diffArrays(oldArr, newArr, options8) {
  return arrayDiff.diff(oldArr, newArr, options8);
}

// node_modules/diff/libesm/patch/create.js
function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options8) {
  let optionsObj;
  if (!options8) {
    optionsObj = {};
  } else if (typeof options8 === "function") {
    optionsObj = { callback: options8 };
  } else {
    optionsObj = options8;
  }
  if (typeof optionsObj.context === "undefined") {
    optionsObj.context = 4;
  }
  const context = optionsObj.context;
  if (optionsObj.newlineIsToken) {
    throw new Error("newlineIsToken may not be used with patch-generation functions, only with diffing functions");
  }
  if (!optionsObj.callback) {
    return diffLinesResultToPatch(diffLines(oldStr, newStr, optionsObj));
  } else {
    const { callback } = optionsObj;
    diffLines(oldStr, newStr, Object.assign(Object.assign({}, optionsObj), { callback: (diff) => {
      const patch = diffLinesResultToPatch(diff);
      callback(patch);
    } }));
  }
  function diffLinesResultToPatch(diff) {
    if (!diff) {
      return;
    }
    diff.push({ value: "", lines: [] });
    function contextLines(lines) {
      return lines.map(function(entry) {
        return " " + entry;
      });
    }
    const hunks = [];
    let oldRangeStart = 0, newRangeStart = 0, curRange = [], oldLine = 1, newLine = 1;
    for (let i = 0; i < diff.length; i++) {
      const current = diff[i], lines = current.lines || splitLines(current.value);
      current.lines = lines;
      if (current.added || current.removed) {
        if (!oldRangeStart) {
          const prev = diff[i - 1];
          oldRangeStart = oldLine;
          newRangeStart = newLine;
          if (prev) {
            curRange = context > 0 ? contextLines(prev.lines.slice(-context)) : [];
            oldRangeStart -= curRange.length;
            newRangeStart -= curRange.length;
          }
        }
        for (const line3 of lines) {
          curRange.push((current.added ? "+" : "-") + line3);
        }
        if (current.added) {
          newLine += lines.length;
        } else {
          oldLine += lines.length;
        }
      } else {
        if (oldRangeStart) {
          if (lines.length <= context * 2 && i < diff.length - 2) {
            for (const line3 of contextLines(lines)) {
              curRange.push(line3);
            }
          } else {
            const contextSize = Math.min(lines.length, context);
            for (const line3 of contextLines(lines.slice(0, contextSize))) {
              curRange.push(line3);
            }
            const hunk = {
              oldStart: oldRangeStart,
              oldLines: oldLine - oldRangeStart + contextSize,
              newStart: newRangeStart,
              newLines: newLine - newRangeStart + contextSize,
              lines: curRange
            };
            hunks.push(hunk);
            oldRangeStart = 0;
            newRangeStart = 0;
            curRange = [];
          }
        }
        oldLine += lines.length;
        newLine += lines.length;
      }
    }
    for (const hunk of hunks) {
      for (let i = 0; i < hunk.lines.length; i++) {
        if (hunk.lines[i].endsWith("\n")) {
          hunk.lines[i] = hunk.lines[i].slice(0, -1);
        } else {
          hunk.lines.splice(i + 1, 0, "\\ No newline at end of file");
          i++;
        }
      }
    }
    return {
      oldFileName,
      newFileName,
      oldHeader,
      newHeader,
      hunks
    };
  }
}
function formatPatch(patch) {
  if (Array.isArray(patch)) {
    return patch.map(formatPatch).join("\n");
  }
  const ret = [];
  if (patch.oldFileName == patch.newFileName) {
    ret.push("Index: " + patch.oldFileName);
  }
  ret.push("===================================================================");
  ret.push("--- " + patch.oldFileName + (typeof patch.oldHeader === "undefined" ? "" : "	" + patch.oldHeader));
  ret.push("+++ " + patch.newFileName + (typeof patch.newHeader === "undefined" ? "" : "	" + patch.newHeader));
  for (let i = 0; i < patch.hunks.length; i++) {
    const hunk = patch.hunks[i];
    if (hunk.oldLines === 0) {
      hunk.oldStart -= 1;
    }
    if (hunk.newLines === 0) {
      hunk.newStart -= 1;
    }
    ret.push("@@ -" + hunk.oldStart + "," + hunk.oldLines + " +" + hunk.newStart + "," + hunk.newLines + " @@");
    for (const line3 of hunk.lines) {
      ret.push(line3);
    }
  }
  return ret.join("\n") + "\n";
}
function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options8) {
  if (typeof options8 === "function") {
    options8 = { callback: options8 };
  }
  if (!(options8 === null || options8 === void 0 ? void 0 : options8.callback)) {
    const patchObj = structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options8);
    if (!patchObj) {
      return;
    }
    return formatPatch(patchObj);
  } else {
    const { callback } = options8;
    structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, Object.assign(Object.assign({}, options8), { callback: (patchObj) => {
      if (!patchObj) {
        callback(void 0);
      } else {
        callback(formatPatch(patchObj));
      }
    } }));
  }
}
function splitLines(text) {
  const hasTrailingNl = text.endsWith("\n");
  const result = text.split("\n").map((line3) => line3 + "\n");
  if (hasTrailingNl) {
    result.pop();
  } else {
    result.push(result.pop().slice(0, -1));
  }
  return result;
}

// src/index.js
var import_fast_glob = __toESM(require_out4(), 1);

// node_modules/leven/index.js
var array = [];
var characterCodeCache = [];
function leven(first, second, options8) {
  if (first === second) {
    return 0;
  }
  const maxDistance = options8?.maxDistance;
  const swap = first;
  if (first.length > second.length) {
    first = second;
    second = swap;
  }
  let firstLength = first.length;
  let secondLength = second.length;
  while (firstLength > 0 && first.charCodeAt(~-firstLength) === second.charCodeAt(~-secondLength)) {
    firstLength--;
    secondLength--;
  }
  let start = 0;
  while (start < firstLength && first.charCodeAt(start) === second.charCodeAt(start)) {
    start++;
  }
  firstLength -= start;
  secondLength -= start;
  if (maxDistance !== void 0 && secondLength - firstLength > maxDistance) {
    return maxDistance;
  }
  if (firstLength === 0) {
    return maxDistance !== void 0 && secondLength > maxDistance ? maxDistance : secondLength;
  }
  let bCharacterCode;
  let result;
  let temporary;
  let temporary2;
  let index = 0;
  let index2 = 0;
  while (index < firstLength) {
    characterCodeCache[index] = first.charCodeAt(start + index);
    array[index] = ++index;
  }
  while (index2 < secondLength) {
    bCharacterCode = second.charCodeAt(start + index2);
    temporary = index2++;
    result = index2;
    for (index = 0; index < firstLength; index++) {
      temporary2 = bCharacterCode === characterCodeCache[index] ? temporary : temporary + 1;
      temporary = array[index];
      result = array[index] = temporary > result ? temporary2 > result ? result + 1 : temporary2 : temporary2 > temporary ? temporary + 1 : temporary2;
    }
    if (maxDistance !== void 0) {
      let rowMinimum = result;
      for (index = 0; index < firstLength; index++) {
        if (array[index] < rowMinimum) {
          rowMinimum = array[index];
        }
      }
      if (rowMinimum > maxDistance) {
        return maxDistance;
      }
    }
  }
  array.length = firstLength;
  characterCodeCache.length = firstLength;
  return maxDistance !== void 0 && result > maxDistance ? maxDistance : result;
}
function closestMatch(target, candidates, options8) {
  if (!Array.isArray(candidates) || candidates.length === 0) {
    return void 0;
  }
  const userMax = options8?.maxDistance;
  const targetLength = target.length;
  for (const candidate of candidates) {
    if (candidate === target) {
      return candidate;
    }
  }
  if (userMax === 0) {
    return void 0;
  }
  let best;
  let bestDist = Number.POSITIVE_INFINITY;
  const seen = /* @__PURE__ */ new Set();
  for (const candidate of candidates) {
    if (seen.has(candidate)) {
      continue;
    }
    seen.add(candidate);
    const lengthDiff = Math.abs(candidate.length - targetLength);
    if (lengthDiff >= bestDist) {
      continue;
    }
    if (userMax !== void 0 && lengthDiff > userMax) {
      continue;
    }
    const cap = Number.isFinite(bestDist) ? userMax === void 0 ? bestDist : Math.min(bestDist, userMax) : userMax;
    const distance = cap === void 0 ? leven(target, candidate) : leven(target, candidate, { maxDistance: cap });
    if (userMax !== void 0 && distance > userMax) {
      continue;
    }
    let actualD = distance;
    if (cap !== void 0 && distance === cap && cap === userMax) {
      actualD = leven(target, candidate);
    }
    if (actualD < bestDist) {
      bestDist = actualD;
      best = candidate;
      if (bestDist === 0) {
        break;
      }
    }
  }
  if (userMax !== void 0 && bestDist > userMax) {
    return void 0;
  }
  return best;
}

// src/index.js
var import_picocolors5 = __toESM(require_picocolors(), 1);

// node_modules/vnopts/lib/descriptors/api.js
var apiDescriptor = {
  key: (key2) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(key2) ? key2 : JSON.stringify(key2),
  value(value) {
    if (value === null || typeof value !== "object") {
      return JSON.stringify(value);
    }
    if (Array.isArray(value)) {
      return `[${value.map((subValue) => apiDescriptor.value(subValue)).join(", ")}]`;
    }
    const keys = Object.keys(value);
    return keys.length === 0 ? "{}" : `{ ${keys.map((key2) => `${apiDescriptor.key(key2)}: ${apiDescriptor.value(value[key2])}`).join(", ")} }`;
  },
  pair: ({ key: key2, value }) => apiDescriptor.value({ [key2]: value })
};

// node_modules/vnopts/lib/handlers/deprecated/common.js
var import_picocolors = __toESM(require_picocolors(), 1);
var commonDeprecatedHandler = (keyOrPair, redirectTo, { descriptor }) => {
  const messages2 = [
    `${import_picocolors.default.yellow(typeof keyOrPair === "string" ? descriptor.key(keyOrPair) : descriptor.pair(keyOrPair))} is deprecated`
  ];
  if (redirectTo) {
    messages2.push(`we now treat it as ${import_picocolors.default.blue(typeof redirectTo === "string" ? descriptor.key(redirectTo) : descriptor.pair(redirectTo))}`);
  }
  return messages2.join("; ") + ".";
};

// node_modules/vnopts/lib/handlers/invalid/common.js
var import_picocolors2 = __toESM(require_picocolors(), 1);

// node_modules/vnopts/lib/constants.js
var VALUE_NOT_EXIST = Symbol.for("vnopts.VALUE_NOT_EXIST");
var VALUE_UNCHANGED = Symbol.for("vnopts.VALUE_UNCHANGED");

// node_modules/vnopts/lib/handlers/invalid/common.js
var INDENTATION = " ".repeat(2);
var commonInvalidHandler = (key2, value, utils) => {
  const { text, list } = utils.normalizeExpectedResult(utils.schemas[key2].expected(utils));
  const descriptions = [];
  if (text) {
    descriptions.push(getDescription(key2, value, text, utils.descriptor));
  }
  if (list) {
    descriptions.push([getDescription(key2, value, list.title, utils.descriptor)].concat(list.values.map((valueDescription) => getListDescription(valueDescription, utils.loggerPrintWidth))).join("\n"));
  }
  return chooseDescription(descriptions, utils.loggerPrintWidth);
};
function getDescription(key2, value, expected, descriptor) {
  return [
    `Invalid ${import_picocolors2.default.red(descriptor.key(key2))} value.`,
    `Expected ${import_picocolors2.default.blue(expected)},`,
    `but received ${value === VALUE_NOT_EXIST ? import_picocolors2.default.gray("nothing") : import_picocolors2.default.red(descriptor.value(value))}.`
  ].join(" ");
}
function getListDescription({ text, list }, printWidth) {
  const descriptions = [];
  if (text) {
    descriptions.push(`- ${import_picocolors2.default.blue(text)}`);
  }
  if (list) {
    descriptions.push([`- ${import_picocolors2.default.blue(list.title)}:`].concat(list.values.map((valueDescription) => getListDescription(valueDescription, printWidth - INDENTATION.length).replace(/^|\n/g, `$&${INDENTATION}`))).join("\n"));
  }
  return chooseDescription(descriptions, printWidth);
}
function chooseDescription(descriptions, printWidth) {
  if (descriptions.length === 1) {
    return descriptions[0];
  }
  const [firstDescription, secondDescription] = descriptions;
  const [firstWidth, secondWidth] = descriptions.map((description) => description.split("\n", 1)[0].length);
  return firstWidth > printWidth && firstWidth > secondWidth ? secondDescription : firstDescription;
}

// node_modules/vnopts/lib/handlers/unknown/leven.js
var import_picocolors3 = __toESM(require_picocolors(), 1);
var levenUnknownHandler = (key2, value, { descriptor, logger, schemas }) => {
  const messages2 = [
    `Ignored unknown option ${import_picocolors3.default.yellow(descriptor.pair({ key: key2, value }))}.`
  ];
  const suggestion = closestMatch(key2, Object.keys(schemas), { maxDistance: 3 });
  if (suggestion) {
    messages2.push(`Did you mean ${import_picocolors3.default.blue(descriptor.key(suggestion))}?`);
  }
  logger.warn(messages2.join(" "));
};

// node_modules/vnopts/lib/schema.js
var HANDLER_KEYS = [
  "default",
  "expected",
  "validate",
  "deprecated",
  "forward",
  "redirect",
  "overlap",
  "preprocess",
  "postprocess"
];
function createSchema(SchemaConstructor, parameters) {
  const schema = new SchemaConstructor(parameters);
  const subSchema = Object.create(schema);
  for (const handlerKey of HANDLER_KEYS) {
    if (handlerKey in parameters) {
      subSchema[handlerKey] = normalizeHandler(parameters[handlerKey], schema, Schema.prototype[handlerKey].length);
    }
  }
  return subSchema;
}
var Schema = class {
  static create(parameters) {
    return createSchema(this, parameters);
  }
  constructor(parameters) {
    this.name = parameters.name;
  }
  default(_utils) {
    return void 0;
  }
  // this is actually an abstract method but we need a placeholder to get `function.length`
  /* c8 ignore start */
  expected(_utils) {
    return "nothing";
  }
  /* c8 ignore stop */
  // this is actually an abstract method but we need a placeholder to get `function.length`
  /* c8 ignore start */
  validate(_value, _utils) {
    return false;
  }
  /* c8 ignore stop */
  deprecated(_value, _utils) {
    return false;
  }
  forward(_value, _utils) {
    return void 0;
  }
  redirect(_value, _utils) {
    return void 0;
  }
  overlap(currentValue, _newValue, _utils) {
    return currentValue;
  }
  preprocess(value, _utils) {
    return value;
  }
  postprocess(_value, _utils) {
    return VALUE_UNCHANGED;
  }
};
function normalizeHandler(handler, superSchema, handlerArgumentsLength) {
  return typeof handler === "function" ? (...args) => handler(...args.slice(0, handlerArgumentsLength - 1), superSchema, ...args.slice(handlerArgumentsLength - 1)) : () => handler;
}

// node_modules/vnopts/lib/schemas/alias.js
var AliasSchema = class extends Schema {
  constructor(parameters) {
    super(parameters);
    this._sourceName = parameters.sourceName;
  }
  expected(utils) {
    return utils.schemas[this._sourceName].expected(utils);
  }
  validate(value, utils) {
    return utils.schemas[this._sourceName].validate(value, utils);
  }
  redirect(_value, _utils) {
    return this._sourceName;
  }
};

// node_modules/vnopts/lib/schemas/any.js
var AnySchema = class extends Schema {
  expected() {
    return "anything";
  }
  validate() {
    return true;
  }
};

// node_modules/vnopts/lib/schemas/array.js
var ArraySchema = class extends Schema {
  constructor({ valueSchema, name = valueSchema.name, ...handlers }) {
    super({ ...handlers, name });
    this._valueSchema = valueSchema;
  }
  expected(utils) {
    const { text, list } = utils.normalizeExpectedResult(this._valueSchema.expected(utils));
    return {
      text: text && `an array of ${text}`,
      list: list && {
        title: `an array of the following values`,
        values: [{ list }]
      }
    };
  }
  validate(value, utils) {
    if (!Array.isArray(value)) {
      return false;
    }
    const invalidValues = [];
    for (const subValue of value) {
      const subValidateResult = utils.normalizeValidateResult(this._valueSchema.validate(subValue, utils), subValue);
      if (subValidateResult !== true) {
        invalidValues.push(subValidateResult.value);
      }
    }
    return invalidValues.length === 0 ? true : { value: invalidValues };
  }
  deprecated(value, utils) {
    const deprecatedResult = [];
    for (const subValue of value) {
      const subDeprecatedResult = utils.normalizeDeprecatedResult(this._valueSchema.deprecated(subValue, utils), subValue);
      if (subDeprecatedResult !== false) {
        deprecatedResult.push(...subDeprecatedResult.map(({ value: deprecatedValue }) => ({
          value: [deprecatedValue]
        })));
      }
    }
    return deprecatedResult;
  }
  forward(value, utils) {
    const forwardResult = [];
    for (const subValue of value) {
      const subForwardResult = utils.normalizeForwardResult(this._valueSchema.forward(subValue, utils), subValue);
      forwardResult.push(...subForwardResult.map(wrapTransferResult));
    }
    return forwardResult;
  }
  redirect(value, utils) {
    const remain = [];
    const redirect = [];
    for (const subValue of value) {
      const subRedirectResult = utils.normalizeRedirectResult(this._valueSchema.redirect(subValue, utils), subValue);
      if ("remain" in subRedirectResult) {
        remain.push(subRedirectResult.remain);
      }
      redirect.push(...subRedirectResult.redirect.map(wrapTransferResult));
    }
    return remain.length === 0 ? { redirect } : { redirect, remain };
  }
  overlap(currentValue, newValue) {
    return currentValue.concat(newValue);
  }
};
function wrapTransferResult({ from, to }) {
  return { from: [from], to };
}

// node_modules/vnopts/lib/schemas/boolean.js
var BooleanSchema = class extends Schema {
  expected() {
    return "true or false";
  }
  validate(value) {
    return typeof value === "boolean";
  }
};

// node_modules/vnopts/lib/utils.js
function recordFromArray(array2, mainKey) {
  const record = /* @__PURE__ */ Object.create(null);
  for (const value of array2) {
    const key2 = value[mainKey];
    if (record[key2]) {
      throw new Error(`Duplicate ${mainKey} ${JSON.stringify(key2)}`);
    }
    record[key2] = value;
  }
  return record;
}
function mapFromArray(array2, mainKey) {
  const map = /* @__PURE__ */ new Map();
  for (const value of array2) {
    const key2 = value[mainKey];
    if (map.has(key2)) {
      throw new Error(`Duplicate ${mainKey} ${JSON.stringify(key2)}`);
    }
    map.set(key2, value);
  }
  return map;
}
function createAutoChecklist() {
  const map = /* @__PURE__ */ Object.create(null);
  return (id) => {
    const idString = JSON.stringify(id);
    if (map[idString]) {
      return true;
    }
    map[idString] = true;
    return false;
  };
}
function partition(array2, predicate) {
  const trueArray = [];
  const falseArray = [];
  for (const value of array2) {
    if (predicate(value)) {
      trueArray.push(value);
    } else {
      falseArray.push(value);
    }
  }
  return [trueArray, falseArray];
}
function isInt(value) {
  return value === Math.floor(value);
}
function comparePrimitive(a, b) {
  if (a === b) {
    return 0;
  }
  const typeofA = typeof a;
  const typeofB = typeof b;
  const orders = [
    "undefined",
    "object",
    // null
    "boolean",
    "number",
    "string"
  ];
  if (typeofA !== typeofB) {
    return orders.indexOf(typeofA) - orders.indexOf(typeofB);
  }
  if (typeofA !== "string") {
    return Number(a) - Number(b);
  }
  return a.localeCompare(b);
}
function normalizeInvalidHandler(invalidHandler) {
  return (...args) => {
    const errorMessageOrError = invalidHandler(...args);
    return typeof errorMessageOrError === "string" ? new Error(errorMessageOrError) : errorMessageOrError;
  };
}
function normalizeDefaultResult(result) {
  return result === void 0 ? {} : result;
}
function normalizeExpectedResult(result) {
  if (typeof result === "string") {
    return { text: result };
  }
  const { text, list } = result;
  assert((text || list) !== void 0, "Unexpected `expected` result, there should be at least one field.");
  if (!list) {
    return { text };
  }
  return {
    text,
    list: {
      title: list.title,
      values: list.values.map(normalizeExpectedResult)
    }
  };
}
function normalizeValidateResult(result, value) {
  return result === true ? true : result === false ? { value } : result;
}
function normalizeDeprecatedResult(result, value, doNotNormalizeTrue = false) {
  return result === false ? false : result === true ? doNotNormalizeTrue ? true : [{ value }] : "value" in result ? [result] : result.length === 0 ? false : result;
}
function normalizeTransferResult(result, value) {
  return typeof result === "string" || "key" in result ? { from: value, to: result } : "from" in result ? { from: result.from, to: result.to } : { from: value, to: result.to };
}
function normalizeForwardResult(result, value) {
  return result === void 0 ? [] : Array.isArray(result) ? result.map((transferResult) => normalizeTransferResult(transferResult, value)) : [normalizeTransferResult(result, value)];
}
function normalizeRedirectResult(result, value) {
  const redirect = normalizeForwardResult(typeof result === "object" && "redirect" in result ? result.redirect : result, value);
  return redirect.length === 0 ? { remain: value, redirect } : typeof result === "object" && "remain" in result ? { remain: result.remain, redirect } : { redirect };
}
function assert(isValid, message) {
  if (!isValid) {
    throw new Error(message);
  }
}

// node_modules/vnopts/lib/schemas/choice.js
var ChoiceSchema = class extends Schema {
  constructor(parameters) {
    super(parameters);
    this._choices = mapFromArray(parameters.choices.map((choice) => choice && typeof choice === "object" ? choice : { value: choice }), "value");
  }
  expected({ descriptor }) {
    const choiceDescriptions = Array.from(this._choices.keys()).map((value) => this._choices.get(value)).filter(({ hidden }) => !hidden).map((choiceInfo) => choiceInfo.value).sort(comparePrimitive).map(descriptor.value);
    const head = choiceDescriptions.slice(0, -2);
    const tail = choiceDescriptions.slice(-2);
    const message = head.concat(tail.join(" or ")).join(", ");
    return {
      text: message,
      list: {
        title: "one of the following values",
        values: choiceDescriptions
      }
    };
  }
  validate(value) {
    return this._choices.has(value);
  }
  deprecated(value) {
    const choiceInfo = this._choices.get(value);
    return choiceInfo && choiceInfo.deprecated ? { value } : false;
  }
  forward(value) {
    const choiceInfo = this._choices.get(value);
    return choiceInfo ? choiceInfo.forward : void 0;
  }
  redirect(value) {
    const choiceInfo = this._choices.get(value);
    return choiceInfo ? choiceInfo.redirect : void 0;
  }
};

// node_modules/vnopts/lib/schemas/number.js
var NumberSchema = class extends Schema {
  expected() {
    return "a number";
  }
  validate(value, _utils) {
    return typeof value === "number";
  }
};

// node_modules/vnopts/lib/schemas/integer.js
var IntegerSchema = class extends NumberSchema {
  expected() {
    return "an integer";
  }
  validate(value, utils) {
    return utils.normalizeValidateResult(super.validate(value, utils), value) === true && isInt(value);
  }
};

// node_modules/vnopts/lib/schemas/string.js
var StringSchema = class extends Schema {
  expected() {
    return "a string";
  }
  validate(value) {
    return typeof value === "string";
  }
};

// node_modules/vnopts/lib/defaults.js
var defaultDescriptor = apiDescriptor;
var defaultUnknownHandler = levenUnknownHandler;
var defaultInvalidHandler = commonInvalidHandler;
var defaultDeprecatedHandler = commonDeprecatedHandler;

// node_modules/vnopts/lib/normalize.js
var Normalizer = class {
  constructor(schemas, opts) {
    const { logger = console, loggerPrintWidth = 80, descriptor = defaultDescriptor, unknown = defaultUnknownHandler, invalid = defaultInvalidHandler, deprecated = defaultDeprecatedHandler, missing = () => false, required = () => false, preprocess = (x) => x, postprocess = () => VALUE_UNCHANGED } = opts || {};
    this._utils = {
      descriptor,
      logger: (
        /* c8 ignore next */
        logger || { warn: () => {
        } }
      ),
      loggerPrintWidth,
      schemas: recordFromArray(schemas, "name"),
      normalizeDefaultResult,
      normalizeExpectedResult,
      normalizeDeprecatedResult,
      normalizeForwardResult,
      normalizeRedirectResult,
      normalizeValidateResult
    };
    this._unknownHandler = unknown;
    this._invalidHandler = normalizeInvalidHandler(invalid);
    this._deprecatedHandler = deprecated;
    this._identifyMissing = (k, o) => !(k in o) || missing(k, o);
    this._identifyRequired = required;
    this._preprocess = preprocess;
    this._postprocess = postprocess;
    this.cleanHistory();
  }
  cleanHistory() {
    this._hasDeprecationWarned = createAutoChecklist();
  }
  normalize(options8) {
    const newOptions = {};
    const preprocessed = this._preprocess(options8, this._utils);
    const restOptionsArray = [preprocessed];
    const applyNormalization = () => {
      while (restOptionsArray.length !== 0) {
        const currentOptions = restOptionsArray.shift();
        const transferredOptionsArray = this._applyNormalization(currentOptions, newOptions);
        restOptionsArray.push(...transferredOptionsArray);
      }
    };
    applyNormalization();
    for (const key2 of Object.keys(this._utils.schemas)) {
      const schema = this._utils.schemas[key2];
      if (!(key2 in newOptions)) {
        const defaultResult = normalizeDefaultResult(schema.default(this._utils));
        if ("value" in defaultResult) {
          restOptionsArray.push({ [key2]: defaultResult.value });
        }
      }
    }
    applyNormalization();
    for (const key2 of Object.keys(this._utils.schemas)) {
      if (!(key2 in newOptions)) {
        continue;
      }
      const schema = this._utils.schemas[key2];
      const value = newOptions[key2];
      const newValue = schema.postprocess(value, this._utils);
      if (newValue === VALUE_UNCHANGED) {
        continue;
      }
      this._applyValidation(newValue, key2, schema);
      newOptions[key2] = newValue;
    }
    this._applyPostprocess(newOptions);
    this._applyRequiredCheck(newOptions);
    return newOptions;
  }
  _applyNormalization(options8, newOptions) {
    const transferredOptionsArray = [];
    const { knownKeys, unknownKeys } = this._partitionOptionKeys(options8);
    for (const key2 of knownKeys) {
      const schema = this._utils.schemas[key2];
      const value = schema.preprocess(options8[key2], this._utils);
      this._applyValidation(value, key2, schema);
      const appendTransferredOptions = ({ from, to }) => {
        transferredOptionsArray.push(typeof to === "string" ? { [to]: from } : { [to.key]: to.value });
      };
      const warnDeprecated = ({ value: currentValue, redirectTo }) => {
        const deprecatedResult = normalizeDeprecatedResult(
          schema.deprecated(currentValue, this._utils),
          value,
          /* doNotNormalizeTrue */
          true
        );
        if (deprecatedResult === false) {
          return;
        }
        if (deprecatedResult === true) {
          if (!this._hasDeprecationWarned(key2)) {
            this._utils.logger.warn(this._deprecatedHandler(key2, redirectTo, this._utils));
          }
        } else {
          for (const { value: deprecatedValue } of deprecatedResult) {
            const pair = { key: key2, value: deprecatedValue };
            if (!this._hasDeprecationWarned(pair)) {
              const redirectToPair = typeof redirectTo === "string" ? { key: redirectTo, value: deprecatedValue } : redirectTo;
              this._utils.logger.warn(this._deprecatedHandler(pair, redirectToPair, this._utils));
            }
          }
        }
      };
      const forwardResult = normalizeForwardResult(schema.forward(value, this._utils), value);
      forwardResult.forEach(appendTransferredOptions);
      const redirectResult = normalizeRedirectResult(schema.redirect(value, this._utils), value);
      redirectResult.redirect.forEach(appendTransferredOptions);
      if ("remain" in redirectResult) {
        const remainingValue = redirectResult.remain;
        newOptions[key2] = key2 in newOptions ? schema.overlap(newOptions[key2], remainingValue, this._utils) : remainingValue;
        warnDeprecated({ value: remainingValue });
      }
      for (const { from, to } of redirectResult.redirect) {
        warnDeprecated({ value: from, redirectTo: to });
      }
    }
    for (const key2 of unknownKeys) {
      const value = options8[key2];
      this._applyUnknownHandler(key2, value, newOptions, (knownResultKey, knownResultValue) => {
        transferredOptionsArray.push({ [knownResultKey]: knownResultValue });
      });
    }
    return transferredOptionsArray;
  }
  _applyRequiredCheck(options8) {
    for (const key2 of Object.keys(this._utils.schemas)) {
      if (this._identifyMissing(key2, options8)) {
        if (this._identifyRequired(key2)) {
          throw this._invalidHandler(key2, VALUE_NOT_EXIST, this._utils);
        }
      }
    }
  }
  _partitionOptionKeys(options8) {
    const [knownKeys, unknownKeys] = partition(Object.keys(options8).filter((key2) => !this._identifyMissing(key2, options8)), (key2) => key2 in this._utils.schemas);
    return { knownKeys, unknownKeys };
  }
  _applyValidation(value, key2, schema) {
    const validateResult = normalizeValidateResult(schema.validate(value, this._utils), value);
    if (validateResult !== true) {
      throw this._invalidHandler(key2, validateResult.value, this._utils);
    }
  }
  _applyUnknownHandler(key2, value, newOptions, knownResultHandler) {
    const unknownResult = this._unknownHandler(key2, value, this._utils);
    if (!unknownResult) {
      return;
    }
    for (const resultKey of Object.keys(unknownResult)) {
      if (this._identifyMissing(resultKey, unknownResult)) {
        continue;
      }
      const resultValue = unknownResult[resultKey];
      if (resultKey in this._utils.schemas) {
        knownResultHandler(resultKey, resultValue);
      } else {
        newOptions[resultKey] = resultValue;
      }
    }
  }
  _applyPostprocess(options8) {
    const postprocessed = this._postprocess(options8, this._utils);
    if (postprocessed === VALUE_UNCHANGED) {
      return;
    }
    if (postprocessed.delete) {
      for (const deleteKey of postprocessed.delete) {
        delete options8[deleteKey];
      }
    }
    if (postprocessed.override) {
      const { knownKeys, unknownKeys } = this._partitionOptionKeys(postprocessed.override);
      for (const key2 of knownKeys) {
        const value = postprocessed.override[key2];
        this._applyValidation(value, key2, this._utils.schemas[key2]);
        options8[key2] = value;
      }
      for (const key2 of unknownKeys) {
        const value = postprocessed.override[key2];
        this._applyUnknownHandler(key2, value, options8, (knownResultKey, knownResultValue) => {
          const schema = this._utils.schemas[knownResultKey];
          this._applyValidation(knownResultValue, knownResultKey, schema);
          options8[knownResultKey] = knownResultValue;
        });
      }
    }
  }
};

// src/common/errors.js
var errors_exports = {};
__export(errors_exports, {
  ArgExpansionBailout: () => ArgExpansionBailout,
  ConfigError: () => ConfigError,
  UndefinedParserError: () => UndefinedParserError
});
var ConfigError = class extends Error {
  name = "ConfigError";
};
var UndefinedParserError = class extends Error {
  name = "UndefinedParserError";
};
var ArgExpansionBailout = class extends Error {
  name = "ArgExpansionBailout";
};

// src/utilities/create-mockable.js
function createMockable(implementations) {
  const mocked = {
    ...implementations
  };
  const mockImplementation = (functionality, implementation) => {
    if (!Object.prototype.hasOwnProperty.call(implementations, functionality)) {
      throw new Error(`Unexpected mock '${functionality}'.`);
    }
    mocked[functionality] = implementation;
  };
  const mockImplementations = (overrideImplementations) => {
    for (const [functionality, implementation] of Object.entries(overrideImplementations)) {
      mockImplementation(functionality, implementation);
    }
  };
  const mockRestore = () => {
    Object.assign(mocked, implementations);
  };
  return {
    mocked,
    implementations,
    mockImplementation,
    mockImplementations,
    mockRestore
  };
}
var create_mockable_default = createMockable;

// src/common/mockable.js
var mockable = create_mockable_default({
  getPrettierConfigSearchStopDirectory: () => void 0
});
var mockable_default = mockable.mocked;

// src/config/resolve-config.js
var import_micromatch = __toESM(require_micromatch(), 1);
import path10 from "path";

// node_modules/url-or-path/index.js
import * as path from "path";
import * as url from "url";
var URL_STRING_PREFIX = "file:";
var isUrlInstance = (value) => value instanceof URL;
var isUrlString = (value) => typeof value === "string" && value.startsWith(URL_STRING_PREFIX);
var isUrl = (urlOrPath) => isUrlInstance(urlOrPath) || isUrlString(urlOrPath);
var toPath = (urlOrPath) => isUrl(urlOrPath) ? url.fileURLToPath(urlOrPath) : urlOrPath;
var toAbsolutePath = (urlOrPath) => urlOrPath ? path.resolve(isUrl(urlOrPath) ? url.fileURLToPath(urlOrPath) : urlOrPath) : urlOrPath;

// src/utilities/partition.js
function partition2(array2, predicate) {
  const result = [[], []];
  for (const value of array2) {
    result[predicate(value) ? 0 : 1].push(value);
  }
  return result;
}
var partition_default = partition2;

// src/config/editorconfig/index.js
var import_editorconfig = __toESM(require_src(), 1);
import path5 from "path";

// src/config/find-project-root.js
import * as path4 from "path";

// node_modules/find-in-directory/index.js
import * as fs from "fs/promises";
import * as path2 from "path";
import process2 from "process";
var isFile = (stats) => stats?.isFile();
var isDirectory = (stats) => stats?.isDirectory();
async function findInDirectory(nameOrNames, { typeCheck, cwd, allowSymlinks = true, filter: filter2 }) {
  const directory = toAbsolutePath(cwd) ?? process2.cwd();
  const names = Array.isArray(nameOrNames) ? nameOrNames : [nameOrNames];
  for (const name of names) {
    const fileOrDirectory = path2.join(directory, name);
    const stats = await safeStat(fileOrDirectory, allowSymlinks);
    if (await typeCheck(stats) && (!filter2 || await filter2({ name, path: fileOrDirectory, stats }))) {
      return fileOrDirectory;
    }
  }
}
async function safeStat(path15, allowSymlinks = true) {
  try {
    return await (allowSymlinks ? fs.stat : fs.lstat)(path15);
  } catch {
  }
}
function findFile(nameOrNames, options8) {
  return findInDirectory(nameOrNames, { ...options8, typeCheck: isFile });
}
function findDirectory(nameOrNames, options8) {
  return findInDirectory(nameOrNames, { ...options8, typeCheck: isDirectory });
}

// node_modules/iterate-directory-up/index.js
import * as path3 from "path";
import process3 from "process";
function* iterateDirectoryUp(from, to) {
  let directory = toAbsolutePath(from) ?? process3.cwd();
  let stopDirectory = toAbsolutePath(to);
  if (stopDirectory) {
    const relation = path3.relative(stopDirectory, directory);
    if (relation[0] === "." || relation === directory) {
      return;
    }
  }
  stopDirectory = stopDirectory ? directory.slice(0, stopDirectory.length) : path3.parse(directory).root;
  while (directory !== stopDirectory) {
    yield directory;
    directory = path3.dirname(directory);
  }
  yield stopDirectory;
}
var iterate_directory_up_default = iterateDirectoryUp;

// node_modules/search-closest/index.js
var Searcher = class {
  #stopDirectory;
  #cache;
  #resultCache = /* @__PURE__ */ new Map();
  #searchWithoutCache;
  /**
  @protected
  @type {typeof findFile | typeof findDirectory}
  */
  findInDirectory;
  /**
  @param {NameOrNames} nameOrNames
  @param {SearcherOptions} [options]
  */
  constructor(nameOrNames, { allowSymlinks, filter: filter2, stopDirectory, cache: cache3 } = {}) {
    this.#stopDirectory = stopDirectory;
    this.#cache = cache3 ?? true;
    this.#searchWithoutCache = (directory) => this.findInDirectory(nameOrNames, { cwd: directory, filter: filter2, allowSymlinks });
  }
  #search(directory, cache3 = true) {
    const resultCache = this.#resultCache;
    if (!cache3 || !resultCache.has(directory)) {
      resultCache.set(directory, this.#searchWithoutCache(directory));
    }
    return resultCache.get(directory);
  }
  /**
    Find closest file or directory matches name or names.
  
    @param {OptionalUrlOrPath} [startDirectory]
    @param {SearchOptions} [options]
    @returns {SearchResult}
    */
  async search(startDirectory, options8) {
    for (const directory of iterate_directory_up_default(
      startDirectory,
      this.#stopDirectory
    )) {
      const result = await this.#search(
        directory,
        options8?.cache ?? this.#cache
      );
      if (result) {
        return result;
      }
    }
  }
  /**
    Clear caches.
  
    @returns {void}
    */
  clearCache() {
    this.#resultCache.clear();
  }
};
var FileSearcher = class extends Searcher {
  /** @protected */
  findInDirectory = findFile;
};
var DirectorySearcher = class extends Searcher {
  /** @protected */
  findInDirectory = findDirectory;
};

// src/config/find-project-root.js
var DIRECTORIES = [".git", ".hg"];
var searcher;
async function findProjectRoot(startDirectory, options8) {
  searcher ?? (searcher = new DirectorySearcher(DIRECTORIES, { allowSymlinks: false }));
  const directory = await searcher.search(startDirectory, {
    cache: options8.shouldCache
  });
  return directory ? path4.dirname(directory) : void 0;
}
function clearFindProjectRootCache() {
  searcher?.clearCache();
}

// src/config/editorconfig/editorconfig-to-prettier.js
var isPositiveInteger = (value) => Number.isSafeInteger(value) && value > 0;
function editorConfigToPrettier(editorConfig) {
  if (!editorConfig) {
    return;
  }
  const result = {};
  const {
    indent_style,
    indent_size,
    tab_width,
    max_line_length,
    quote_type,
    end_of_line
  } = editorConfig;
  if (indent_style === "space") {
    result.useTabs = false;
  } else if (indent_style === "tab" || indent_size === "tab") {
    result.useTabs = true;
  }
  if (result.useTabs === false && isPositiveInteger(indent_size)) {
    result.tabWidth = indent_size;
  } else if (isPositiveInteger(tab_width)) {
    result.tabWidth = tab_width;
  }
  if (max_line_length === "off") {
    result.printWidth = Number.POSITIVE_INFINITY;
  } else if (isPositiveInteger(max_line_length)) {
    result.printWidth = max_line_length;
  }
  if (quote_type === "single") {
    result.singleQuote = true;
  } else if (quote_type === "double") {
    result.singleQuote = false;
  }
  if (end_of_line === "lf" || end_of_line === "crlf" || end_of_line === "cr") {
    result.endOfLine = end_of_line;
  }
  if (Object.keys(result).length === 0) {
    return;
  }
  return result;
}
var editorconfig_to_prettier_default = editorConfigToPrettier;

// src/config/editorconfig/index.js
var editorconfigCache = /* @__PURE__ */ new Map();
function clearEditorconfigCache() {
  clearFindProjectRootCache();
  editorconfigCache.clear();
}
async function loadEditorconfigInternal(file, { shouldCache }) {
  const directory = path5.dirname(file);
  const root2 = await findProjectRoot(directory, { shouldCache });
  const editorConfig = await import_editorconfig.default.parse(file, { root: root2 });
  const config = editorconfig_to_prettier_default(editorConfig);
  return config;
}
function loadEditorconfig(file, { shouldCache }) {
  file = path5.resolve(file);
  if (!shouldCache || !editorconfigCache.has(file)) {
    editorconfigCache.set(
      file,
      loadEditorconfigInternal(file, { shouldCache })
    );
  }
  return editorconfigCache.get(file);
}

// src/config/prettier-config/index.js
import path9 from "path";

// src/config/prettier-config/loaders.js
import { pathToFileURL as pathToFileURL2 } from "url";

// node_modules/json5/dist/index.mjs
var Space_Separator = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var ID_Start = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/;
var ID_Continue = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;
var unicode = {
  Space_Separator,
  ID_Start,
  ID_Continue
};
var util = {
  isSpaceSeparator(c2) {
    return typeof c2 === "string" && unicode.Space_Separator.test(c2);
  },
  isIdStartChar(c2) {
    return typeof c2 === "string" && (c2 >= "a" && c2 <= "z" || c2 >= "A" && c2 <= "Z" || c2 === "$" || c2 === "_" || unicode.ID_Start.test(c2));
  },
  isIdContinueChar(c2) {
    return typeof c2 === "string" && (c2 >= "a" && c2 <= "z" || c2 >= "A" && c2 <= "Z" || c2 >= "0" && c2 <= "9" || c2 === "$" || c2 === "_" || c2 === "\u200C" || c2 === "\u200D" || unicode.ID_Continue.test(c2));
  },
  isDigit(c2) {
    return typeof c2 === "string" && /[0-9]/.test(c2);
  },
  isHexDigit(c2) {
    return typeof c2 === "string" && /[0-9A-Fa-f]/.test(c2);
  }
};
var source;
var parseState;
var stack;
var pos;
var line;
var column;
var token;
var key;
var root;
var parse2 = function parse3(text, reviver) {
  source = String(text);
  parseState = "start";
  stack = [];
  pos = 0;
  line = 1;
  column = 0;
  token = void 0;
  key = void 0;
  root = void 0;
  do {
    token = lex();
    parseStates[parseState]();
  } while (token.type !== "eof");
  if (typeof reviver === "function") {
    return internalize({ "": root }, "", reviver);
  }
  return root;
};
function internalize(holder, name, reviver) {
  const value = holder[name];
  if (value != null && typeof value === "object") {
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const key2 = String(i);
        const replacement = internalize(value, key2, reviver);
        if (replacement === void 0) {
          delete value[key2];
        } else {
          Object.defineProperty(value, key2, {
            value: replacement,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      }
    } else {
      for (const key2 in value) {
        const replacement = internalize(value, key2, reviver);
        if (replacement === void 0) {
          delete value[key2];
        } else {
          Object.defineProperty(value, key2, {
            value: replacement,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      }
    }
  }
  return reviver.call(holder, name, value);
}
var lexState;
var buffer;
var doubleQuote;
var sign;
var c;
function lex() {
  lexState = "default";
  buffer = "";
  doubleQuote = false;
  sign = 1;
  for (; ; ) {
    c = peek();
    const token2 = lexStates[lexState]();
    if (token2) {
      return token2;
    }
  }
}
function peek() {
  if (source[pos]) {
    return String.fromCodePoint(source.codePointAt(pos));
  }
}
function read() {
  const c2 = peek();
  if (c2 === "\n") {
    line++;
    column = 0;
  } else if (c2) {
    column += c2.length;
  } else {
    column++;
  }
  if (c2) {
    pos += c2.length;
  }
  return c2;
}
var lexStates = {
  default() {
    switch (c) {
      case "	":
      case "\v":
      case "\f":
      case " ":
      case "\xA0":
      case "\uFEFF":
      case "\n":
      case "\r":
      case "\u2028":
      case "\u2029":
        read();
        return;
      case "/":
        read();
        lexState = "comment";
        return;
      case void 0:
        read();
        return newToken("eof");
    }
    if (util.isSpaceSeparator(c)) {
      read();
      return;
    }
    return lexStates[parseState]();
  },
  comment() {
    switch (c) {
      case "*":
        read();
        lexState = "multiLineComment";
        return;
      case "/":
        read();
        lexState = "singleLineComment";
        return;
    }
    throw invalidChar(read());
  },
  multiLineComment() {
    switch (c) {
      case "*":
        read();
        lexState = "multiLineCommentAsterisk";
        return;
      case void 0:
        throw invalidChar(read());
    }
    read();
  },
  multiLineCommentAsterisk() {
    switch (c) {
      case "*":
        read();
        return;
      case "/":
        read();
        lexState = "default";
        return;
      case void 0:
        throw invalidChar(read());
    }
    read();
    lexState = "multiLineComment";
  },
  singleLineComment() {
    switch (c) {
      case "\n":
      case "\r":
      case "\u2028":
      case "\u2029":
        read();
        lexState = "default";
        return;
      case void 0:
        read();
        return newToken("eof");
    }
    read();
  },
  value() {
    switch (c) {
      case "{":
      case "[":
        return newToken("punctuator", read());
      case "n":
        read();
        literal("ull");
        return newToken("null", null);
      case "t":
        read();
        literal("rue");
        return newToken("boolean", true);
      case "f":
        read();
        literal("alse");
        return newToken("boolean", false);
      case "-":
      case "+":
        if (read() === "-") {
          sign = -1;
        }
        lexState = "sign";
        return;
      case ".":
        buffer = read();
        lexState = "decimalPointLeading";
        return;
      case "0":
        buffer = read();
        lexState = "zero";
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        buffer = read();
        lexState = "decimalInteger";
        return;
      case "I":
        read();
        literal("nfinity");
        return newToken("numeric", Infinity);
      case "N":
        read();
        literal("aN");
        return newToken("numeric", NaN);
      case '"':
      case "'":
        doubleQuote = read() === '"';
        buffer = "";
        lexState = "string";
        return;
    }
    throw invalidChar(read());
  },
  identifierNameStartEscape() {
    if (c !== "u") {
      throw invalidChar(read());
    }
    read();
    const u = unicodeEscape();
    switch (u) {
      case "$":
      case "_":
        break;
      default:
        if (!util.isIdStartChar(u)) {
          throw invalidIdentifier();
        }
        break;
    }
    buffer += u;
    lexState = "identifierName";
  },
  identifierName() {
    switch (c) {
      case "$":
      case "_":
      case "\u200C":
      case "\u200D":
        buffer += read();
        return;
      case "\\":
        read();
        lexState = "identifierNameEscape";
        return;
    }
    if (util.isIdContinueChar(c)) {
      buffer += read();
      return;
    }
    return newToken("identifier", buffer);
  },
  identifierNameEscape() {
    if (c !== "u") {
      throw invalidChar(read());
    }
    read();
    const u = unicodeEscape();
    switch (u) {
      case "$":
      case "_":
      case "\u200C":
      case "\u200D":
        break;
      default:
        if (!util.isIdContinueChar(u)) {
          throw invalidIdentifier();
        }
        break;
    }
    buffer += u;
    lexState = "identifierName";
  },
  sign() {
    switch (c) {
      case ".":
        buffer = read();
        lexState = "decimalPointLeading";
        return;
      case "0":
        buffer = read();
        lexState = "zero";
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        buffer = read();
        lexState = "decimalInteger";
        return;
      case "I":
        read();
        literal("nfinity");
        return newToken("numeric", sign * Infinity);
      case "N":
        read();
        literal("aN");
        return newToken("numeric", NaN);
    }
    throw invalidChar(read());
  },
  zero() {
    switch (c) {
      case ".":
        buffer += read();
        lexState = "decimalPoint";
        return;
      case "e":
      case "E":
        buffer += read();
        lexState = "decimalExponent";
        return;
      case "x":
      case "X":
        buffer += read();
        lexState = "hexadecimal";
        return;
    }
    return newToken("numeric", sign * 0);
  },
  decimalInteger() {
    switch (c) {
      case ".":
        buffer += read();
        lexState = "decimalPoint";
        return;
      case "e":
      case "E":
        buffer += read();
        lexState = "decimalExponent";
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  decimalPointLeading() {
    if (util.isDigit(c)) {
      buffer += read();
      lexState = "decimalFraction";
      return;
    }
    throw invalidChar(read());
  },
  decimalPoint() {
    switch (c) {
      case "e":
      case "E":
        buffer += read();
        lexState = "decimalExponent";
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      lexState = "decimalFraction";
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  decimalFraction() {
    switch (c) {
      case "e":
      case "E":
        buffer += read();
        lexState = "decimalExponent";
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  decimalExponent() {
    switch (c) {
      case "+":
      case "-":
        buffer += read();
        lexState = "decimalExponentSign";
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      lexState = "decimalExponentInteger";
      return;
    }
    throw invalidChar(read());
  },
  decimalExponentSign() {
    if (util.isDigit(c)) {
      buffer += read();
      lexState = "decimalExponentInteger";
      return;
    }
    throw invalidChar(read());
  },
  decimalExponentInteger() {
    if (util.isDigit(c)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  hexadecimal() {
    if (util.isHexDigit(c)) {
      buffer += read();
      lexState = "hexadecimalInteger";
      return;
    }
    throw invalidChar(read());
  },
  hexadecimalInteger() {
    if (util.isHexDigit(c)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  string() {
    switch (c) {
      case "\\":
        read();
        buffer += escape();
        return;
      case '"':
        if (doubleQuote) {
          read();
          return newToken("string", buffer);
        }
        buffer += read();
        return;
      case "'":
        if (!doubleQuote) {
          read();
          return newToken("string", buffer);
        }
        buffer += read();
        return;
      case "\n":
      case "\r":
        throw invalidChar(read());
      case "\u2028":
      case "\u2029":
        separatorChar(c);
        break;
      case void 0:
        throw invalidChar(read());
    }
    buffer += read();
  },
  start() {
    switch (c) {
      case "{":
      case "[":
        return newToken("punctuator", read());
    }
    lexState = "value";
  },
  beforePropertyName() {
    switch (c) {
      case "$":
      case "_":
        buffer = read();
        lexState = "identifierName";
        return;
      case "\\":
        read();
        lexState = "identifierNameStartEscape";
        return;
      case "}":
        return newToken("punctuator", read());
      case '"':
      case "'":
        doubleQuote = read() === '"';
        lexState = "string";
        return;
    }
    if (util.isIdStartChar(c)) {
      buffer += read();
      lexState = "identifierName";
      return;
    }
    throw invalidChar(read());
  },
  afterPropertyName() {
    if (c === ":") {
      return newToken("punctuator", read());
    }
    throw invalidChar(read());
  },
  beforePropertyValue() {
    lexState = "value";
  },
  afterPropertyValue() {
    switch (c) {
      case ",":
      case "}":
        return newToken("punctuator", read());
    }
    throw invalidChar(read());
  },
  beforeArrayValue() {
    if (c === "]") {
      return newToken("punctuator", read());
    }
    lexState = "value";
  },
  afterArrayValue() {
    switch (c) {
      case ",":
      case "]":
        return newToken("punctuator", read());
    }
    throw invalidChar(read());
  },
  end() {
    throw invalidChar(read());
  }
};
function newToken(type, value) {
  return {
    type,
    value,
    line,
    column
  };
}
function literal(s) {
  for (const c2 of s) {
    const p = peek();
    if (p !== c2) {
      throw invalidChar(read());
    }
    read();
  }
}
function escape() {
  const c2 = peek();
  switch (c2) {
    case "b":
      read();
      return "\b";
    case "f":
      read();
      return "\f";
    case "n":
      read();
      return "\n";
    case "r":
      read();
      return "\r";
    case "t":
      read();
      return "	";
    case "v":
      read();
      return "\v";
    case "0":
      read();
      if (util.isDigit(peek())) {
        throw invalidChar(read());
      }
      return "\0";
    case "x":
      read();
      return hexEscape();
    case "u":
      read();
      return unicodeEscape();
    case "\n":
    case "\u2028":
    case "\u2029":
      read();
      return "";
    case "\r":
      read();
      if (peek() === "\n") {
        read();
      }
      return "";
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      throw invalidChar(read());
    case void 0:
      throw invalidChar(read());
  }
  return read();
}
function hexEscape() {
  let buffer2 = "";
  let c2 = peek();
  if (!util.isHexDigit(c2)) {
    throw invalidChar(read());
  }
  buffer2 += read();
  c2 = peek();
  if (!util.isHexDigit(c2)) {
    throw invalidChar(read());
  }
  buffer2 += read();
  return String.fromCodePoint(parseInt(buffer2, 16));
}
function unicodeEscape() {
  let buffer2 = "";
  let count = 4;
  while (count-- > 0) {
    const c2 = peek();
    if (!util.isHexDigit(c2)) {
      throw invalidChar(read());
    }
    buffer2 += read();
  }
  return String.fromCodePoint(parseInt(buffer2, 16));
}
var parseStates = {
  start() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    push();
  },
  beforePropertyName() {
    switch (token.type) {
      case "identifier":
      case "string":
        key = token.value;
        parseState = "afterPropertyName";
        return;
      case "punctuator":
        pop();
        return;
      case "eof":
        throw invalidEOF();
    }
  },
  afterPropertyName() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    parseState = "beforePropertyValue";
  },
  beforePropertyValue() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    push();
  },
  beforeArrayValue() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    if (token.type === "punctuator" && token.value === "]") {
      pop();
      return;
    }
    push();
  },
  afterPropertyValue() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    switch (token.value) {
      case ",":
        parseState = "beforePropertyName";
        return;
      case "}":
        pop();
    }
  },
  afterArrayValue() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    switch (token.value) {
      case ",":
        parseState = "beforeArrayValue";
        return;
      case "]":
        pop();
    }
  },
  end() {
  }
};
function push() {
  let value;
  switch (token.type) {
    case "punctuator":
      switch (token.value) {
        case "{":
          value = {};
          break;
        case "[":
          value = [];
          break;
      }
      break;
    case "null":
    case "boolean":
    case "numeric":
    case "string":
      value = token.value;
      break;
  }
  if (root === void 0) {
    root = value;
  } else {
    const parent = stack[stack.length - 1];
    if (Array.isArray(parent)) {
      parent.push(value);
    } else {
      Object.defineProperty(parent, key, {
        value,
        writable: true,
        enumerable: true,
        configurable: true
      });
    }
  }
  if (value !== null && typeof value === "object") {
    stack.push(value);
    if (Array.isArray(value)) {
      parseState = "beforeArrayValue";
    } else {
      parseState = "beforePropertyName";
    }
  } else {
    const current = stack[stack.length - 1];
    if (current == null) {
      parseState = "end";
    } else if (Array.isArray(current)) {
      parseState = "afterArrayValue";
    } else {
      parseState = "afterPropertyValue";
    }
  }
}
function pop() {
  stack.pop();
  const current = stack[stack.length - 1];
  if (current == null) {
    parseState = "end";
  } else if (Array.isArray(current)) {
    parseState = "afterArrayValue";
  } else {
    parseState = "afterPropertyValue";
  }
}
function invalidChar(c2) {
  if (c2 === void 0) {
    return syntaxError(`JSON5: invalid end of input at ${line}:${column}`);
  }
  return syntaxError(`JSON5: invalid character '${formatChar(c2)}' at ${line}:${column}`);
}
function invalidEOF() {
  return syntaxError(`JSON5: invalid end of input at ${line}:${column}`);
}
function invalidIdentifier() {
  column -= 5;
  return syntaxError(`JSON5: invalid identifier character at ${line}:${column}`);
}
function separatorChar(c2) {
  console.warn(`JSON5: '${formatChar(c2)}' in strings is not valid ECMAScript; consider escaping`);
}
function formatChar(c2) {
  const replacements = {
    "'": "\\'",
    '"': '\\"',
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "\v": "\\v",
    "\0": "\\0",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  if (replacements[c2]) {
    return replacements[c2];
  }
  if (c2 < " ") {
    const hexString = c2.charCodeAt(0).toString(16);
    return "\\x" + ("00" + hexString).substring(hexString.length);
  }
  return c2;
}
function syntaxError(message) {
  const err = new SyntaxError(message);
  err.lineNumber = line;
  err.columnNumber = column;
  return err;
}
var dist_default = { parse: parse2 };

// node_modules/@babel/code-frame/lib/index.js
var import_picocolors4 = __toESM(require_picocolors(), 1);
var import_js_tokens = __toESM(require_js_tokens(), 1);

// node_modules/@babel/code-frame/node_modules/@babel/helper-validator-identifier/lib/index.js
var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
var nonASCIIidentifierChars = "\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ADD\u1AE0-\u1AEB\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\u30FB\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F\uFF65";
var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
var reservedWords = {
  keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
  strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
  strictBind: ["eval", "arguments"]
};
var keywords = new Set(reservedWords.keyword);
var reservedWordsStrictSet = new Set(reservedWords.strict);
var reservedWordsStrictBindSet = new Set(reservedWords.strictBind);
function isReservedWord(word, inModule) {
  return inModule && word === "await" || word === "enum";
}
function isStrictReservedWord(word, inModule) {
  return isReservedWord(word, inModule) || reservedWordsStrictSet.has(word);
}
function isKeyword(word) {
  return keywords.has(word);
}

// node_modules/@babel/code-frame/lib/index.js
function isColorSupported() {
  return typeof process === "object" && (process.env.FORCE_COLOR === "0" || process.env.FORCE_COLOR === "false") ? false : import_picocolors4.default.isColorSupported;
}
var compose = (f, g) => (v) => f(g(v));
function buildDefs(colors) {
  return {
    keyword: colors.cyan,
    capitalized: colors.yellow,
    jsxIdentifier: colors.yellow,
    punctuator: colors.yellow,
    number: colors.magenta,
    string: colors.green,
    regex: colors.magenta,
    comment: colors.gray,
    invalid: compose(compose(colors.white, colors.bgRed), colors.bold),
    gutter: colors.gray,
    marker: compose(colors.red, colors.bold),
    message: compose(colors.red, colors.bold),
    reset: colors.reset
  };
}
var defsOn = buildDefs((0, import_picocolors4.createColors)(true));
var defsOff = buildDefs((0, import_picocolors4.createColors)(false));
function getDefs(enabled) {
  return enabled ? defsOn : defsOff;
}
var sometimesKeywords = /* @__PURE__ */ new Set(["as", "async", "from", "get", "of", "set"]);
var NEWLINE$1 = /\r\n|[\n\r\u2028\u2029]/;
var BRACKET = /^[()[\]{}]$/;
var tokenize2;
{
  const getTokenType = function(token2) {
    if (token2.type === "IdentifierName") {
      if (isKeyword(token2.value) || isStrictReservedWord(token2.value, true) || sometimesKeywords.has(token2.value)) {
        return "keyword";
      }
      if (token2.value[0] !== token2.value[0].toLowerCase()) {
        return "capitalized";
      }
    }
    if (token2.type === "Punctuator" && BRACKET.test(token2.value)) {
      return "uncolored";
    }
    if (token2.type === "Invalid" && token2.value === "@") {
      return "punctuator";
    }
    switch (token2.type) {
      case "NumericLiteral":
        return "number";
      case "StringLiteral":
      case "JSXString":
      case "NoSubstitutionTemplate":
        return "string";
      case "RegularExpressionLiteral":
        return "regex";
      case "Punctuator":
      case "JSXPunctuator":
        return "punctuator";
      case "MultiLineComment":
      case "SingleLineComment":
        return "comment";
      case "Invalid":
      case "JSXInvalid":
        return "invalid";
      case "JSXIdentifier":
        return "jsxIdentifier";
      default:
        return "uncolored";
    }
  };
  tokenize2 = function* (text) {
    for (const token2 of (0, import_js_tokens.default)(text, {
      jsx: true
    })) {
      switch (token2.type) {
        case "TemplateHead":
          yield {
            type: "string",
            value: token2.value.slice(0, -2)
          };
          yield {
            type: "punctuator",
            value: "${"
          };
          break;
        case "TemplateMiddle":
          yield {
            type: "punctuator",
            value: "}"
          };
          yield {
            type: "string",
            value: token2.value.slice(1, -2)
          };
          yield {
            type: "punctuator",
            value: "${"
          };
          break;
        case "TemplateTail":
          yield {
            type: "punctuator",
            value: "}"
          };
          yield {
            type: "string",
            value: token2.value.slice(1)
          };
          break;
        default:
          yield {
            type: getTokenType(token2),
            value: token2.value
          };
      }
    }
  };
}
function highlight(text) {
  if (text === "") return "";
  const defs = getDefs(true);
  let highlighted = "";
  for (const {
    type,
    value
  } of tokenize2(text)) {
    if (type in defs) {
      highlighted += value.split(NEWLINE$1).map((str) => defs[type](str)).join("\n");
    } else {
      highlighted += value;
    }
  }
  return highlighted;
}
var NEWLINE = /\r\n|[\n\r\u2028\u2029]/;
function getMarkerLines(loc, source2, opts) {
  const startLoc = Object.assign({
    column: 0,
    line: -1
  }, loc.start);
  const endLoc = Object.assign({}, startLoc, loc.end);
  const {
    linesAbove = 2,
    linesBelow = 3
  } = opts || {};
  const startLine = startLoc.line;
  const startColumn = startLoc.column;
  const endLine = endLoc.line;
  const endColumn = endLoc.column;
  let start = Math.max(startLine - (linesAbove + 1), 0);
  let end = Math.min(source2.length, endLine + linesBelow);
  if (startLine === -1) {
    start = 0;
  }
  if (endLine === -1) {
    end = source2.length;
  }
  const lineDiff2 = endLine - startLine;
  const markerLines = {};
  if (lineDiff2) {
    for (let i = 0; i <= lineDiff2; i++) {
      const lineNumber = i + startLine;
      if (!startColumn) {
        markerLines[lineNumber] = true;
      } else if (i === 0) {
        const sourceLength = source2[lineNumber - 1].length;
        markerLines[lineNumber] = [startColumn, sourceLength - startColumn + 1];
      } else if (i === lineDiff2) {
        markerLines[lineNumber] = [0, endColumn];
      } else {
        const sourceLength = source2[lineNumber - i].length;
        markerLines[lineNumber] = [0, sourceLength];
      }
    }
  } else {
    if (startColumn === endColumn) {
      if (startColumn) {
        markerLines[startLine] = [startColumn, 0];
      } else {
        markerLines[startLine] = true;
      }
    } else {
      markerLines[startLine] = [startColumn, endColumn - startColumn];
    }
  }
  return {
    start,
    end,
    markerLines
  };
}
function codeFrameColumns(rawLines, loc, opts = {}) {
  const shouldHighlight = opts.forceColor || isColorSupported() && opts.highlightCode;
  const defs = getDefs(shouldHighlight);
  const lines = rawLines.split(NEWLINE);
  const {
    start,
    end,
    markerLines
  } = getMarkerLines(loc, lines, opts);
  const hasColumns = loc.start && typeof loc.start.column === "number";
  const numberMaxWidth = String(end).length;
  const highlightedLines = shouldHighlight ? highlight(rawLines) : rawLines;
  let frame = highlightedLines.split(NEWLINE, end).slice(start, end).map((line3, index) => {
    const number = start + 1 + index;
    const paddedNumber = ` ${number}`.slice(-numberMaxWidth);
    const gutter = ` ${paddedNumber} |`;
    const hasMarker = markerLines[number];
    const lastMarkerLine = !markerLines[number + 1];
    if (hasMarker) {
      let markerLine = "";
      if (Array.isArray(hasMarker)) {
        const markerSpacing = line3.slice(0, Math.max(hasMarker[0] - 1, 0)).replace(/[^\t]/g, " ");
        const numberOfMarkers = hasMarker[1] || 1;
        markerLine = ["\n ", defs.gutter(gutter.replace(/\d/g, " ")), " ", markerSpacing, defs.marker("^").repeat(numberOfMarkers)].join("");
        if (lastMarkerLine && opts.message) {
          markerLine += " " + defs.message(opts.message);
        }
      }
      return [defs.marker(">"), defs.gutter(gutter), line3.length > 0 ? ` ${line3}` : "", markerLine].join("");
    } else {
      return ` ${defs.gutter(gutter)}${line3.length > 0 ? ` ${line3}` : ""}`;
    }
  }).join("\n");
  if (opts.message && !hasColumns) {
    frame = `${" ".repeat(numberMaxWidth + 1)}${opts.message}
${frame}`;
  }
  if (shouldHighlight) {
    return defs.reset(frame);
  } else {
    return frame;
  }
}

// node_modules/index-to-position/index.js
var getOffsets = ({
  oneBased,
  oneBasedLine = oneBased,
  oneBasedColumn = oneBased
} = {}) => [oneBasedLine ? 1 : 0, oneBasedColumn ? 1 : 0];
function getPosition(text, textIndex, options8) {
  const lineBreakBefore = textIndex === 0 ? -1 : text.lastIndexOf("\n", textIndex - 1);
  const [lineOffset, columnOffset] = getOffsets(options8);
  return {
    line: lineBreakBefore === -1 ? lineOffset : text.slice(0, lineBreakBefore + 1).match(/\n/g).length + lineOffset,
    column: textIndex - lineBreakBefore - 1 + columnOffset
  };
}
function indexToPosition(text, textIndex, options8) {
  if (typeof text !== "string") {
    throw new TypeError("Text parameter should be a string");
  }
  if (!Number.isInteger(textIndex)) {
    throw new TypeError("Index parameter should be an integer");
  }
  if (textIndex < 0 || textIndex > text.length) {
    throw new RangeError("Index out of bounds");
  }
  return getPosition(text, textIndex, options8);
}

// node_modules/parse-json/index.js
var getCodePoint = (character) => `\\u{${character.codePointAt(0).toString(16)}}`;
var JSONError = class _JSONError extends Error {
  name = "JSONError";
  fileName;
  #input;
  #jsonParseError;
  #message;
  #codeFrame;
  #rawCodeFrame;
  constructor(messageOrOptions) {
    if (typeof messageOrOptions === "string") {
      super();
      this.#message = messageOrOptions;
    } else {
      const { jsonParseError, fileName, input } = messageOrOptions;
      super(void 0, { cause: jsonParseError });
      this.#input = input;
      this.#jsonParseError = jsonParseError;
      this.fileName = fileName;
    }
    Error.captureStackTrace?.(this, _JSONError);
  }
  get message() {
    this.#message ?? (this.#message = `${addCodePointToUnexpectedToken(this.#jsonParseError.message)}${this.#input === "" ? " while parsing empty string" : ""}`);
    const { codeFrame } = this;
    return `${this.#message}${this.fileName ? ` in ${this.fileName}` : ""}${codeFrame ? `

${codeFrame}
` : ""}`;
  }
  set message(message) {
    this.#message = message;
  }
  #getCodeFrame(highlightCode) {
    if (!this.#jsonParseError) {
      return;
    }
    const input = this.#input;
    const location = getErrorLocation(input, this.#jsonParseError.message);
    if (!location) {
      return;
    }
    return codeFrameColumns(input, { start: location }, { highlightCode });
  }
  get codeFrame() {
    this.#codeFrame ?? (this.#codeFrame = this.#getCodeFrame(
      /* highlightCode */
      true
    ));
    return this.#codeFrame;
  }
  get rawCodeFrame() {
    this.#rawCodeFrame ?? (this.#rawCodeFrame = this.#getCodeFrame(
      /* highlightCode */
      false
    ));
    return this.#rawCodeFrame;
  }
};
var getErrorLocation = (string, message) => {
  const match = message.match(/in JSON at position (?<index>\d+)(?: \(line (?<line>\d+) column (?<column>\d+)\))?$/);
  if (!match) {
    return;
  }
  const { index, line: line3, column: column2 } = match.groups;
  if (line3 && column2) {
    return { line: Number(line3), column: Number(column2) };
  }
  return indexToPosition(string, Number(index), { oneBased: true });
};
var addCodePointToUnexpectedToken = (message) => message.replace(
  // TODO[engine:node@>=20]: The token always quoted after Node.js 20
  /(?<=^Unexpected token )(?<quote>')?(.)\k<quote>/,
  (_, _quote, token2) => `"${token2}"(${getCodePoint(token2)})`
);
function parseJson(string, reviver, fileName) {
  if (typeof reviver === "string") {
    fileName = reviver;
    reviver = void 0;
  }
  try {
    return JSON.parse(string, reviver);
  } catch (error) {
    throw new JSONError({
      jsonParseError: error,
      fileName,
      input: string
    });
  }
}

// node_modules/smol-toml/dist/error.js
function getLineColFromPtr(string, ptr) {
  let lines = string.slice(0, ptr).split(/\r\n|\n|\r/g);
  return [lines.length, lines.pop().length + 1];
}
function makeCodeBlock(string, line3, column2) {
  let lines = string.split(/\r\n|\n|\r/g);
  let codeblock = "";
  let numberLen = (Math.log10(line3 + 1) | 0) + 1;
  for (let i = line3 - 1; i <= line3 + 1; i++) {
    let l = lines[i - 1];
    if (!l)
      continue;
    codeblock += i.toString().padEnd(numberLen, " ");
    codeblock += ":  ";
    codeblock += l;
    codeblock += "\n";
    if (i === line3) {
      codeblock += " ".repeat(numberLen + column2 + 2);
      codeblock += "^\n";
    }
  }
  return codeblock;
}
var TomlError = class extends Error {
  line;
  column;
  codeblock;
  constructor(message, options8) {
    const [line3, column2] = getLineColFromPtr(options8.toml, options8.ptr);
    const codeblock = makeCodeBlock(options8.toml, line3, column2);
    super(`Invalid TOML document: ${message}

${codeblock}`, options8);
    this.line = line3;
    this.column = column2;
    this.codeblock = codeblock;
  }
};

// node_modules/smol-toml/dist/util.js
function isEscaped(str, ptr) {
  let i = 0;
  while (str[ptr - ++i] === "\\")
    ;
  return --i && i % 2;
}
function indexOfNewline(str, start = 0, end = str.length) {
  let idx = str.indexOf("\n", start);
  if (str[idx - 1] === "\r")
    idx--;
  return idx <= end ? idx : -1;
}
function skipComment(str, ptr) {
  for (let i = ptr; i < str.length; i++) {
    let c2 = str[i];
    if (c2 === "\n")
      return i;
    if (c2 === "\r" && str[i + 1] === "\n")
      return i + 1;
    if (c2 < " " && c2 !== "	" || c2 === "\x7F") {
      throw new TomlError("control characters are not allowed in comments", {
        toml: str,
        ptr
      });
    }
  }
  return str.length;
}
function skipVoid(str, ptr, banNewLines, banComments) {
  let c2;
  while ((c2 = str[ptr]) === " " || c2 === "	" || !banNewLines && (c2 === "\n" || c2 === "\r" && str[ptr + 1] === "\n"))
    ptr++;
  return banComments || c2 !== "#" ? ptr : skipVoid(str, skipComment(str, ptr), banNewLines);
}
function skipUntil(str, ptr, sep, end, banNewLines = false) {
  if (!end) {
    ptr = indexOfNewline(str, ptr);
    return ptr < 0 ? str.length : ptr;
  }
  for (let i = ptr; i < str.length; i++) {
    let c2 = str[i];
    if (c2 === "#") {
      i = indexOfNewline(str, i);
    } else if (c2 === sep) {
      return i + 1;
    } else if (c2 === end || banNewLines && (c2 === "\n" || c2 === "\r" && str[i + 1] === "\n")) {
      return i;
    }
  }
  throw new TomlError("cannot find end of structure", {
    toml: str,
    ptr
  });
}
function getStringEnd(str, seek) {
  let first = str[seek];
  let target = first === str[seek + 1] && str[seek + 1] === str[seek + 2] ? str.slice(seek, seek + 3) : first;
  seek += target.length - 1;
  do
    seek = str.indexOf(target, ++seek);
  while (seek > -1 && first !== "'" && isEscaped(str, seek));
  if (seek > -1) {
    seek += target.length;
    if (target.length > 1) {
      if (str[seek] === first)
        seek++;
      if (str[seek] === first)
        seek++;
    }
  }
  return seek;
}

// node_modules/smol-toml/dist/date.js
var DATE_TIME_RE = /^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}:\d{2}(?:\.\d+)?)?(Z|[-+]\d{2}:\d{2})?$/i;
var TomlDate = class _TomlDate extends Date {
  #hasDate = false;
  #hasTime = false;
  #offset = null;
  constructor(date) {
    let hasDate = true;
    let hasTime = true;
    let offset = "Z";
    if (typeof date === "string") {
      let match = date.match(DATE_TIME_RE);
      if (match) {
        if (!match[1]) {
          hasDate = false;
          date = `0000-01-01T${date}`;
        }
        hasTime = !!match[2];
        hasTime && date[10] === " " && (date = date.replace(" ", "T"));
        if (match[2] && +match[2] > 23) {
          date = "";
        } else {
          offset = match[3] || null;
          date = date.toUpperCase();
          if (!offset && hasTime)
            date += "Z";
        }
      } else {
        date = "";
      }
    }
    super(date);
    if (!isNaN(this.getTime())) {
      this.#hasDate = hasDate;
      this.#hasTime = hasTime;
      this.#offset = offset;
    }
  }
  isDateTime() {
    return this.#hasDate && this.#hasTime;
  }
  isLocal() {
    return !this.#hasDate || !this.#hasTime || !this.#offset;
  }
  isDate() {
    return this.#hasDate && !this.#hasTime;
  }
  isTime() {
    return this.#hasTime && !this.#hasDate;
  }
  isValid() {
    return this.#hasDate || this.#hasTime;
  }
  toISOString() {
    let iso = super.toISOString();
    if (this.isDate())
      return iso.slice(0, 10);
    if (this.isTime())
      return iso.slice(11, 23);
    if (this.#offset === null)
      return iso.slice(0, -1);
    if (this.#offset === "Z")
      return iso;
    let offset = +this.#offset.slice(1, 3) * 60 + +this.#offset.slice(4, 6);
    offset = this.#offset[0] === "-" ? offset : -offset;
    let offsetDate = new Date(this.getTime() - offset * 6e4);
    return offsetDate.toISOString().slice(0, -1) + this.#offset;
  }
  static wrapAsOffsetDateTime(jsDate, offset = "Z") {
    let date = new _TomlDate(jsDate);
    date.#offset = offset;
    return date;
  }
  static wrapAsLocalDateTime(jsDate) {
    let date = new _TomlDate(jsDate);
    date.#offset = null;
    return date;
  }
  static wrapAsLocalDate(jsDate) {
    let date = new _TomlDate(jsDate);
    date.#hasTime = false;
    date.#offset = null;
    return date;
  }
  static wrapAsLocalTime(jsDate) {
    let date = new _TomlDate(jsDate);
    date.#hasDate = false;
    date.#offset = null;
    return date;
  }
};

// node_modules/smol-toml/dist/primitive.js
var INT_REGEX = /^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/;
var FLOAT_REGEX = /^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/;
var LEADING_ZERO = /^[+-]?0[0-9_]/;
var ESCAPE_REGEX = /^[0-9a-f]{4,8}$/i;
var ESC_MAP = {
  b: "\b",
  t: "	",
  n: "\n",
  f: "\f",
  r: "\r",
  '"': '"',
  "\\": "\\"
};
function parseString(str, ptr = 0, endPtr = str.length) {
  let isLiteral = str[ptr] === "'";
  let isMultiline = str[ptr++] === str[ptr] && str[ptr] === str[ptr + 1];
  if (isMultiline) {
    endPtr -= 2;
    if (str[ptr += 2] === "\r")
      ptr++;
    if (str[ptr] === "\n")
      ptr++;
  }
  let tmp = 0;
  let isEscape;
  let parsed = "";
  let sliceStart = ptr;
  while (ptr < endPtr - 1) {
    let c2 = str[ptr++];
    if (c2 === "\n" || c2 === "\r" && str[ptr] === "\n") {
      if (!isMultiline) {
        throw new TomlError("newlines are not allowed in strings", {
          toml: str,
          ptr: ptr - 1
        });
      }
    } else if (c2 < " " && c2 !== "	" || c2 === "\x7F") {
      throw new TomlError("control characters are not allowed in strings", {
        toml: str,
        ptr: ptr - 1
      });
    }
    if (isEscape) {
      isEscape = false;
      if (c2 === "u" || c2 === "U") {
        let code = str.slice(ptr, ptr += c2 === "u" ? 4 : 8);
        if (!ESCAPE_REGEX.test(code)) {
          throw new TomlError("invalid unicode escape", {
            toml: str,
            ptr: tmp
          });
        }
        try {
          parsed += String.fromCodePoint(parseInt(code, 16));
        } catch {
          throw new TomlError("invalid unicode escape", {
            toml: str,
            ptr: tmp
          });
        }
      } else if (isMultiline && (c2 === "\n" || c2 === " " || c2 === "	" || c2 === "\r")) {
        ptr = skipVoid(str, ptr - 1, true);
        if (str[ptr] !== "\n" && str[ptr] !== "\r") {
          throw new TomlError("invalid escape: only line-ending whitespace may be escaped", {
            toml: str,
            ptr: tmp
          });
        }
        ptr = skipVoid(str, ptr);
      } else if (c2 in ESC_MAP) {
        parsed += ESC_MAP[c2];
      } else {
        throw new TomlError("unrecognized escape sequence", {
          toml: str,
          ptr: tmp
        });
      }
      sliceStart = ptr;
    } else if (!isLiteral && c2 === "\\") {
      tmp = ptr - 1;
      isEscape = true;
      parsed += str.slice(sliceStart, tmp);
    }
  }
  return parsed + str.slice(sliceStart, endPtr - 1);
}
function parseValue(value, toml, ptr, integersAsBigInt) {
  if (value === "true")
    return true;
  if (value === "false")
    return false;
  if (value === "-inf")
    return -Infinity;
  if (value === "inf" || value === "+inf")
    return Infinity;
  if (value === "nan" || value === "+nan" || value === "-nan")
    return NaN;
  if (value === "-0")
    return integersAsBigInt ? 0n : 0;
  let isInt2 = INT_REGEX.test(value);
  if (isInt2 || FLOAT_REGEX.test(value)) {
    if (LEADING_ZERO.test(value)) {
      throw new TomlError("leading zeroes are not allowed", {
        toml,
        ptr
      });
    }
    value = value.replace(/_/g, "");
    let numeric = +value;
    if (isNaN(numeric)) {
      throw new TomlError("invalid number", {
        toml,
        ptr
      });
    }
    if (isInt2) {
      if ((isInt2 = !Number.isSafeInteger(numeric)) && !integersAsBigInt) {
        throw new TomlError("integer value cannot be represented losslessly", {
          toml,
          ptr
        });
      }
      if (isInt2 || integersAsBigInt === true)
        numeric = BigInt(value);
    }
    return numeric;
  }
  const date = new TomlDate(value);
  if (!date.isValid()) {
    throw new TomlError("invalid value", {
      toml,
      ptr
    });
  }
  return date;
}

// node_modules/smol-toml/dist/extract.js
function sliceAndTrimEndOf(str, startPtr, endPtr, allowNewLines) {
  let value = str.slice(startPtr, endPtr);
  let commentIdx = value.indexOf("#");
  if (commentIdx > -1) {
    skipComment(str, commentIdx);
    value = value.slice(0, commentIdx);
  }
  let trimmed = value.trimEnd();
  if (!allowNewLines) {
    let newlineIdx = value.indexOf("\n", trimmed.length);
    if (newlineIdx > -1) {
      throw new TomlError("newlines are not allowed in inline tables", {
        toml: str,
        ptr: startPtr + newlineIdx
      });
    }
  }
  return [trimmed, commentIdx];
}
function extractValue(str, ptr, end, depth, integersAsBigInt) {
  if (depth === 0) {
    throw new TomlError("document contains excessively nested structures. aborting.", {
      toml: str,
      ptr
    });
  }
  let c2 = str[ptr];
  if (c2 === "[" || c2 === "{") {
    let [value, endPtr2] = c2 === "[" ? parseArray(str, ptr, depth, integersAsBigInt) : parseInlineTable(str, ptr, depth, integersAsBigInt);
    let newPtr = end ? skipUntil(str, endPtr2, ",", end) : endPtr2;
    if (endPtr2 - newPtr && end === "}") {
      let nextNewLine = indexOfNewline(str, endPtr2, newPtr);
      if (nextNewLine > -1) {
        throw new TomlError("newlines are not allowed in inline tables", {
          toml: str,
          ptr: nextNewLine
        });
      }
    }
    return [value, newPtr];
  }
  let endPtr;
  if (c2 === '"' || c2 === "'") {
    endPtr = getStringEnd(str, ptr);
    let parsed = parseString(str, ptr, endPtr);
    if (end) {
      endPtr = skipVoid(str, endPtr, end !== "]");
      if (str[endPtr] && str[endPtr] !== "," && str[endPtr] !== end && str[endPtr] !== "\n" && str[endPtr] !== "\r") {
        throw new TomlError("unexpected character encountered", {
          toml: str,
          ptr: endPtr
        });
      }
      endPtr += +(str[endPtr] === ",");
    }
    return [parsed, endPtr];
  }
  endPtr = skipUntil(str, ptr, ",", end);
  let slice = sliceAndTrimEndOf(str, ptr, endPtr - +(str[endPtr - 1] === ","), end === "]");
  if (!slice[0]) {
    throw new TomlError("incomplete key-value declaration: no value specified", {
      toml: str,
      ptr
    });
  }
  if (end && slice[1] > -1) {
    endPtr = skipVoid(str, ptr + slice[1]);
    endPtr += +(str[endPtr] === ",");
  }
  return [
    parseValue(slice[0], str, ptr, integersAsBigInt),
    endPtr
  ];
}

// node_modules/smol-toml/dist/struct.js
var KEY_PART_RE = /^[a-zA-Z0-9-_]+[ \t]*$/;
function parseKey(str, ptr, end = "=") {
  let dot = ptr - 1;
  let parsed = [];
  let endPtr = str.indexOf(end, ptr);
  if (endPtr < 0) {
    throw new TomlError("incomplete key-value: cannot find end of key", {
      toml: str,
      ptr
    });
  }
  do {
    let c2 = str[ptr = ++dot];
    if (c2 !== " " && c2 !== "	") {
      if (c2 === '"' || c2 === "'") {
        if (c2 === str[ptr + 1] && c2 === str[ptr + 2]) {
          throw new TomlError("multiline strings are not allowed in keys", {
            toml: str,
            ptr
          });
        }
        let eos = getStringEnd(str, ptr);
        if (eos < 0) {
          throw new TomlError("unfinished string encountered", {
            toml: str,
            ptr
          });
        }
        dot = str.indexOf(".", eos);
        let strEnd = str.slice(eos, dot < 0 || dot > endPtr ? endPtr : dot);
        let newLine = indexOfNewline(strEnd);
        if (newLine > -1) {
          throw new TomlError("newlines are not allowed in keys", {
            toml: str,
            ptr: ptr + dot + newLine
          });
        }
        if (strEnd.trimStart()) {
          throw new TomlError("found extra tokens after the string part", {
            toml: str,
            ptr: eos
          });
        }
        if (endPtr < eos) {
          endPtr = str.indexOf(end, eos);
          if (endPtr < 0) {
            throw new TomlError("incomplete key-value: cannot find end of key", {
              toml: str,
              ptr
            });
          }
        }
        parsed.push(parseString(str, ptr, eos));
      } else {
        dot = str.indexOf(".", ptr);
        let part = str.slice(ptr, dot < 0 || dot > endPtr ? endPtr : dot);
        if (!KEY_PART_RE.test(part)) {
          throw new TomlError("only letter, numbers, dashes and underscores are allowed in keys", {
            toml: str,
            ptr
          });
        }
        parsed.push(part.trimEnd());
      }
    }
  } while (dot + 1 && dot < endPtr);
  return [parsed, skipVoid(str, endPtr + 1, true, true)];
}
function parseInlineTable(str, ptr, depth, integersAsBigInt) {
  let res = {};
  let seen = /* @__PURE__ */ new Set();
  let c2;
  let comma = 0;
  ptr++;
  while ((c2 = str[ptr++]) !== "}" && c2) {
    let err = { toml: str, ptr: ptr - 1 };
    if (c2 === "\n") {
      throw new TomlError("newlines are not allowed in inline tables", err);
    } else if (c2 === "#") {
      throw new TomlError("inline tables cannot contain comments", err);
    } else if (c2 === ",") {
      throw new TomlError("expected key-value, found comma", err);
    } else if (c2 !== " " && c2 !== "	") {
      let k;
      let t = res;
      let hasOwn = false;
      let [key2, keyEndPtr] = parseKey(str, ptr - 1);
      for (let i = 0; i < key2.length; i++) {
        if (i)
          t = hasOwn ? t[k] : t[k] = {};
        k = key2[i];
        if ((hasOwn = Object.hasOwn(t, k)) && (typeof t[k] !== "object" || seen.has(t[k]))) {
          throw new TomlError("trying to redefine an already defined value", {
            toml: str,
            ptr
          });
        }
        if (!hasOwn && k === "__proto__") {
          Object.defineProperty(t, k, { enumerable: true, configurable: true, writable: true });
        }
      }
      if (hasOwn) {
        throw new TomlError("trying to redefine an already defined value", {
          toml: str,
          ptr
        });
      }
      let [value, valueEndPtr] = extractValue(str, keyEndPtr, "}", depth - 1, integersAsBigInt);
      seen.add(value);
      t[k] = value;
      ptr = valueEndPtr;
      comma = str[ptr - 1] === "," ? ptr - 1 : 0;
    }
  }
  if (comma) {
    throw new TomlError("trailing commas are not allowed in inline tables", {
      toml: str,
      ptr: comma
    });
  }
  if (!c2) {
    throw new TomlError("unfinished table encountered", {
      toml: str,
      ptr
    });
  }
  return [res, ptr];
}
function parseArray(str, ptr, depth, integersAsBigInt) {
  let res = [];
  let c2;
  ptr++;
  while ((c2 = str[ptr++]) !== "]" && c2) {
    if (c2 === ",") {
      throw new TomlError("expected value, found comma", {
        toml: str,
        ptr: ptr - 1
      });
    } else if (c2 === "#")
      ptr = skipComment(str, ptr);
    else if (c2 !== " " && c2 !== "	" && c2 !== "\n" && c2 !== "\r") {
      let e = extractValue(str, ptr - 1, "]", depth - 1, integersAsBigInt);
      res.push(e[0]);
      ptr = e[1];
    }
  }
  if (!c2) {
    throw new TomlError("unfinished array encountered", {
      toml: str,
      ptr
    });
  }
  return [res, ptr];
}

// node_modules/smol-toml/dist/parse.js
function peekTable(key2, table, meta, type) {
  let t = table;
  let m = meta;
  let k;
  let hasOwn = false;
  let state;
  for (let i = 0; i < key2.length; i++) {
    if (i) {
      t = hasOwn ? t[k] : t[k] = {};
      m = (state = m[k]).c;
      if (type === 0 && (state.t === 1 || state.t === 2)) {
        return null;
      }
      if (state.t === 2) {
        let l = t.length - 1;
        t = t[l];
        m = m[l].c;
      }
    }
    k = key2[i];
    if ((hasOwn = Object.hasOwn(t, k)) && m[k]?.t === 0 && m[k]?.d) {
      return null;
    }
    if (!hasOwn) {
      if (k === "__proto__") {
        Object.defineProperty(t, k, { enumerable: true, configurable: true, writable: true });
        Object.defineProperty(m, k, { enumerable: true, configurable: true, writable: true });
      }
      m[k] = {
        t: i < key2.length - 1 && type === 2 ? 3 : type,
        d: false,
        i: 0,
        c: {}
      };
    }
  }
  state = m[k];
  if (state.t !== type && !(type === 1 && state.t === 3)) {
    return null;
  }
  if (type === 2) {
    if (!state.d) {
      state.d = true;
      t[k] = [];
    }
    t[k].push(t = {});
    state.c[state.i++] = state = { t: 1, d: false, i: 0, c: {} };
  }
  if (state.d) {
    return null;
  }
  state.d = true;
  if (type === 1) {
    t = hasOwn ? t[k] : t[k] = {};
  } else if (type === 0 && hasOwn) {
    return null;
  }
  return [k, t, state.c];
}
function parse4(toml, { maxDepth = 1e3, integersAsBigInt } = {}) {
  let res = {};
  let meta = {};
  let tbl = res;
  let m = meta;
  for (let ptr = skipVoid(toml, 0); ptr < toml.length; ) {
    if (toml[ptr] === "[") {
      let isTableArray = toml[++ptr] === "[";
      let k = parseKey(toml, ptr += +isTableArray, "]");
      if (isTableArray) {
        if (toml[k[1] - 1] !== "]") {
          throw new TomlError("expected end of table declaration", {
            toml,
            ptr: k[1] - 1
          });
        }
        k[1]++;
      }
      let p = peekTable(
        k[0],
        res,
        meta,
        isTableArray ? 2 : 1
        /* Type.EXPLICIT */
      );
      if (!p) {
        throw new TomlError("trying to redefine an already defined table or value", {
          toml,
          ptr
        });
      }
      m = p[2];
      tbl = p[1];
      ptr = k[1];
    } else {
      let k = parseKey(toml, ptr);
      let p = peekTable(
        k[0],
        tbl,
        m,
        0
        /* Type.DOTTED */
      );
      if (!p) {
        throw new TomlError("trying to redefine an already defined table or value", {
          toml,
          ptr
        });
      }
      let v = extractValue(toml, k[1], void 0, maxDepth, integersAsBigInt);
      p[1][p[0]] = v[0];
      ptr = v[1];
    }
    ptr = skipVoid(toml, ptr, true);
    if (toml[ptr] && toml[ptr] !== "\n" && toml[ptr] !== "\r") {
      throw new TomlError("each key-value declaration must be followed by an end-of-line", {
        toml,
        ptr
      });
    }
    ptr = skipVoid(toml, ptr);
  }
  return res;
}

// src/utilities/read-file.js
import fs2 from "fs/promises";
async function readFile(file) {
  if (isUrlString(file)) {
    file = new URL(file);
  }
  try {
    return await fs2.readFile(file, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") {
      return;
    }
    throw new Error(`Unable to read '${file}': ${error.message}`);
  }
}
var read_file_default = readFile;

// src/config/prettier-config/loaders.js
async function readJson(file) {
  const content = await read_file_default(file);
  try {
    return parseJson(content);
  } catch (error) {
    error.message = `JSON Error in ${file}:
${error.message}`;
    throw error;
  }
}
async function importModuleDefault(file) {
  const module = await import(pathToFileURL2(file).href);
  return module.default;
}
async function readBunPackageJson(file) {
  try {
    return await readJson(file);
  } catch (error) {
    try {
      return await importModuleDefault(file);
    } catch {
    }
    throw error;
  }
}
var loadConfigFromPackageJson = process.versions.bun ? async function loadConfigFromBunPackageJson(file) {
  const { prettier } = await readBunPackageJson(file);
  return prettier;
} : async function loadConfigFromPackageJson2(file) {
  const { prettier } = await readJson(file);
  return prettier;
};
async function loadConfigFromPackageYaml(file) {
  const { prettier } = await loadYaml(file);
  return prettier;
}
var parseYaml;
async function loadYaml(file) {
  const content = await read_file_default(file);
  if (!parseYaml) {
    ({ __parsePrettierYamlConfig: parseYaml } = await import("./plugins/yaml.mjs"));
  }
  try {
    return parseYaml(content);
  } catch (error) {
    error.message = `YAML Error in ${file}:
${error.message}`;
    throw error;
  }
}
async function loadToml(file) {
  const content = await read_file_default(file);
  try {
    return parse4(content);
  } catch (error) {
    error.message = `TOML Error in ${file}:
${error.message}`;
    throw error;
  }
}
async function loadJson5(file) {
  const content = await read_file_default(file);
  try {
    return dist_default.parse(content);
  } catch (error) {
    error.message = `JSON5 Error in ${file}:
${error.message}`;
    throw error;
  }
}
var loaders = {
  ".toml": loadToml,
  ".json5": loadJson5,
  ".json": readJson,
  ".js": importModuleDefault,
  ".mjs": importModuleDefault,
  ".cjs": importModuleDefault,
  ".ts": importModuleDefault,
  ".mts": importModuleDefault,
  ".cts": importModuleDefault,
  ".yaml": loadYaml,
  ".yml": loadYaml,
  // No extension
  "": loadYaml
};
var loaders_default = loaders;

// src/config/prettier-config/config-searcher.js
var CONFIG_FILE_NAMES = [
  "package.json",
  "package.yaml",
  ".prettierrc",
  ".prettierrc.json",
  ".prettierrc.yml",
  ".prettierrc.yaml",
  ".prettierrc.json5",
  ".prettierrc.js",
  "prettier.config.js",
  ".prettierrc.ts",
  "prettier.config.ts",
  ".prettierrc.mjs",
  "prettier.config.mjs",
  ".prettierrc.mts",
  "prettier.config.mts",
  ".prettierrc.cjs",
  "prettier.config.cjs",
  ".prettierrc.cts",
  "prettier.config.cts",
  ".prettierrc.toml"
];
async function filter({ name, path: file }) {
  if (name === "package.json") {
    try {
      return Boolean(await loadConfigFromPackageJson(file));
    } catch {
      return false;
    }
  }
  if (name === "package.yaml") {
    try {
      return Boolean(await loadConfigFromPackageYaml(file));
    } catch {
      return false;
    }
  }
  return true;
}
function getSearcher(stopDirectory) {
  return new FileSearcher(CONFIG_FILE_NAMES, { filter, stopDirectory });
}
var config_searcher_default = getSearcher;

// src/config/prettier-config/load-config.js
import path8 from "path";

// src/utilities/import-from-file.js
import { pathToFileURL as pathToFileURL4 } from "url";

// node_modules/import-meta-resolve/lib/resolve.js
import assert3 from "assert";
import { statSync, realpathSync } from "fs";
import process4 from "process";
import { fileURLToPath as fileURLToPath4, pathToFileURL as pathToFileURL3 } from "url";
import path7 from "path";
import { builtinModules } from "module";

// node_modules/import-meta-resolve/lib/get-format.js
import { fileURLToPath as fileURLToPath3 } from "url";

// node_modules/import-meta-resolve/lib/package-json-reader.js
import fs3 from "fs";
import path6 from "path";
import { fileURLToPath as fileURLToPath2 } from "url";

// node_modules/import-meta-resolve/lib/errors.js
import v8 from "v8";
import assert2 from "assert";
import { format, inspect } from "util";
var own = {}.hasOwnProperty;
var classRegExp = /^([A-Z][a-z\d]*)+$/;
var kTypes = /* @__PURE__ */ new Set([
  "string",
  "function",
  "number",
  "object",
  // Accept 'Function' and 'Object' as alternative to the lower cased version.
  "Function",
  "Object",
  "boolean",
  "bigint",
  "symbol"
]);
var codes = {};
function formatList(array2, type = "and") {
  return array2.length < 3 ? array2.join(` ${type} `) : `${array2.slice(0, -1).join(", ")}, ${type} ${array2[array2.length - 1]}`;
}
var messages = /* @__PURE__ */ new Map();
var nodeInternalPrefix = "__node_internal_";
var userStackTraceLimit;
codes.ERR_INVALID_ARG_TYPE = createError(
  "ERR_INVALID_ARG_TYPE",
  /**
   * @param {string} name
   * @param {Array<string> | string} expected
   * @param {unknown} actual
   */
  (name, expected, actual) => {
    assert2.ok(typeof name === "string", "'name' must be a string");
    if (!Array.isArray(expected)) {
      expected = [expected];
    }
    let message = "The ";
    if (name.endsWith(" argument")) {
      message += `${name} `;
    } else {
      const type = name.includes(".") ? "property" : "argument";
      message += `"${name}" ${type} `;
    }
    message += "must be ";
    const types = [];
    const instances = [];
    const other = [];
    for (const value of expected) {
      assert2.ok(
        typeof value === "string",
        "All expected entries have to be of type string"
      );
      if (kTypes.has(value)) {
        types.push(value.toLowerCase());
      } else if (classRegExp.exec(value) === null) {
        assert2.ok(
          value !== "object",
          'The value "object" should be written as "Object"'
        );
        other.push(value);
      } else {
        instances.push(value);
      }
    }
    if (instances.length > 0) {
      const pos2 = types.indexOf("object");
      if (pos2 !== -1) {
        types.slice(pos2, 1);
        instances.push("Object");
      }
    }
    if (types.length > 0) {
      message += `${types.length > 1 ? "one of type" : "of type"} ${formatList(
        types,
        "or"
      )}`;
      if (instances.length > 0 || other.length > 0) message += " or ";
    }
    if (instances.length > 0) {
      message += `an instance of ${formatList(instances, "or")}`;
      if (other.length > 0) message += " or ";
    }
    if (other.length > 0) {
      if (other.length > 1) {
        message += `one of ${formatList(other, "or")}`;
      } else {
        if (other[0].toLowerCase() !== other[0]) message += "an ";
        message += `${other[0]}`;
      }
    }
    message += `. Received ${determineSpecificType(actual)}`;
    return message;
  },
  TypeError
);
codes.ERR_INVALID_MODULE_SPECIFIER = createError(
  "ERR_INVALID_MODULE_SPECIFIER",
  /**
   * @param {string} request
   * @param {string} reason
   * @param {string} [base]
   */
  (request, reason, base = void 0) => {
    return `Invalid module "${request}" ${reason}${base ? ` imported from ${base}` : ""}`;
  },
  TypeError
);
codes.ERR_INVALID_PACKAGE_CONFIG = createError(
  "ERR_INVALID_PACKAGE_CONFIG",
  /**
   * @param {string} path
   * @param {string} [base]
   * @param {string} [message]
   */
  (path15, base, message) => {
    return `Invalid package config ${path15}${base ? ` while importing ${base}` : ""}${message ? `. ${message}` : ""}`;
  },
  Error
);
codes.ERR_INVALID_PACKAGE_TARGET = createError(
  "ERR_INVALID_PACKAGE_TARGET",
  /**
   * @param {string} packagePath
   * @param {string} key
   * @param {unknown} target
   * @param {boolean} [isImport=false]
   * @param {string} [base]
   */
  (packagePath, key2, target, isImport = false, base = void 0) => {
    const relatedError = typeof target === "string" && !isImport && target.length > 0 && !target.startsWith("./");
    if (key2 === ".") {
      assert2.ok(isImport === false);
      return `Invalid "exports" main target ${JSON.stringify(target)} defined in the package config ${packagePath}package.json${base ? ` imported from ${base}` : ""}${relatedError ? '; targets must start with "./"' : ""}`;
    }
    return `Invalid "${isImport ? "imports" : "exports"}" target ${JSON.stringify(
      target
    )} defined for '${key2}' in the package config ${packagePath}package.json${base ? ` imported from ${base}` : ""}${relatedError ? '; targets must start with "./"' : ""}`;
  },
  Error
);
codes.ERR_MODULE_NOT_FOUND = createError(
  "ERR_MODULE_NOT_FOUND",
  /**
   * @param {string} path
   * @param {string} base
   * @param {boolean} [exactUrl]
   */
  (path15, base, exactUrl = false) => {
    return `Cannot find ${exactUrl ? "module" : "package"} '${path15}' imported from ${base}`;
  },
  Error
);
codes.ERR_NETWORK_IMPORT_DISALLOWED = createError(
  "ERR_NETWORK_IMPORT_DISALLOWED",
  "import of '%s' by %s is not supported: %s",
  Error
);
codes.ERR_PACKAGE_IMPORT_NOT_DEFINED = createError(
  "ERR_PACKAGE_IMPORT_NOT_DEFINED",
  /**
   * @param {string} specifier
   * @param {string} packagePath
   * @param {string} base
   */
  (specifier, packagePath, base) => {
    return `Package import specifier "${specifier}" is not defined${packagePath ? ` in package ${packagePath}package.json` : ""} imported from ${base}`;
  },
  TypeError
);
codes.ERR_PACKAGE_PATH_NOT_EXPORTED = createError(
  "ERR_PACKAGE_PATH_NOT_EXPORTED",
  /**
   * @param {string} packagePath
   * @param {string} subpath
   * @param {string} [base]
   */
  (packagePath, subpath, base = void 0) => {
    if (subpath === ".")
      return `No "exports" main defined in ${packagePath}package.json${base ? ` imported from ${base}` : ""}`;
    return `Package subpath '${subpath}' is not defined by "exports" in ${packagePath}package.json${base ? ` imported from ${base}` : ""}`;
  },
  Error
);
codes.ERR_UNSUPPORTED_DIR_IMPORT = createError(
  "ERR_UNSUPPORTED_DIR_IMPORT",
  "Directory import '%s' is not supported resolving ES modules imported from %s",
  Error
);
codes.ERR_UNSUPPORTED_RESOLVE_REQUEST = createError(
  "ERR_UNSUPPORTED_RESOLVE_REQUEST",
  'Failed to resolve module specifier "%s" from "%s": Invalid relative URL or base scheme is not hierarchical.',
  TypeError
);
codes.ERR_UNKNOWN_FILE_EXTENSION = createError(
  "ERR_UNKNOWN_FILE_EXTENSION",
  /**
   * @param {string} extension
   * @param {string} path
   */
  (extension, path15) => {
    return `Unknown file extension "${extension}" for ${path15}`;
  },
  TypeError
);
codes.ERR_INVALID_ARG_VALUE = createError(
  "ERR_INVALID_ARG_VALUE",
  /**
   * @param {string} name
   * @param {unknown} value
   * @param {string} [reason='is invalid']
   */
  (name, value, reason = "is invalid") => {
    let inspected = inspect(value);
    if (inspected.length > 128) {
      inspected = `${inspected.slice(0, 128)}...`;
    }
    const type = name.includes(".") ? "property" : "argument";
    return `The ${type} '${name}' ${reason}. Received ${inspected}`;
  },
  TypeError
  // Note: extra classes have been shaken out.
  // , RangeError
);
function createError(sym, value, constructor) {
  messages.set(sym, value);
  return makeNodeErrorWithCode(constructor, sym);
}
function makeNodeErrorWithCode(Base, key2) {
  return NodeError;
  function NodeError(...parameters) {
    const limit = Error.stackTraceLimit;
    if (isErrorStackTraceLimitWritable()) Error.stackTraceLimit = 0;
    const error = new Base();
    if (isErrorStackTraceLimitWritable()) Error.stackTraceLimit = limit;
    const message = getMessage(key2, parameters, error);
    Object.defineProperties(error, {
      // Note: no need to implement `kIsNodeError` symbol, would be hard,
      // probably.
      message: {
        value: message,
        enumerable: false,
        writable: true,
        configurable: true
      },
      toString: {
        /** @this {Error} */
        value() {
          return `${this.name} [${key2}]: ${this.message}`;
        },
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    captureLargerStackTrace(error);
    error.code = key2;
    return error;
  }
}
function isErrorStackTraceLimitWritable() {
  try {
    if (v8.startupSnapshot.isBuildingSnapshot()) {
      return false;
    }
  } catch {
  }
  const desc = Object.getOwnPropertyDescriptor(Error, "stackTraceLimit");
  if (desc === void 0) {
    return Object.isExtensible(Error);
  }
  return own.call(desc, "writable") && desc.writable !== void 0 ? desc.writable : desc.set !== void 0;
}
function hideStackFrames(wrappedFunction) {
  const hidden = nodeInternalPrefix + wrappedFunction.name;
  Object.defineProperty(wrappedFunction, "name", { value: hidden });
  return wrappedFunction;
}
var captureLargerStackTrace = hideStackFrames(
  /**
   * @param {Error} error
   * @returns {Error}
   */
  // @ts-expect-error: fine
  function(error) {
    const stackTraceLimitIsWritable = isErrorStackTraceLimitWritable();
    if (stackTraceLimitIsWritable) {
      userStackTraceLimit = Error.stackTraceLimit;
      Error.stackTraceLimit = Number.POSITIVE_INFINITY;
    }
    Error.captureStackTrace(error);
    if (stackTraceLimitIsWritable) Error.stackTraceLimit = userStackTraceLimit;
    return error;
  }
);
function getMessage(key2, parameters, self) {
  const message = messages.get(key2);
  assert2.ok(message !== void 0, "expected `message` to be found");
  if (typeof message === "function") {
    assert2.ok(
      message.length <= parameters.length,
      // Default options do not count.
      `Code: ${key2}; The provided arguments length (${parameters.length}) does not match the required ones (${message.length}).`
    );
    return Reflect.apply(message, self, parameters);
  }
  const regex = /%[dfijoOs]/g;
  let expectedLength = 0;
  while (regex.exec(message) !== null) expectedLength++;
  assert2.ok(
    expectedLength === parameters.length,
    `Code: ${key2}; The provided arguments length (${parameters.length}) does not match the required ones (${expectedLength}).`
  );
  if (parameters.length === 0) return message;
  parameters.unshift(message);
  return Reflect.apply(format, null, parameters);
}
function determineSpecificType(value) {
  if (value === null || value === void 0) {
    return String(value);
  }
  if (typeof value === "function" && value.name) {
    return `function ${value.name}`;
  }
  if (typeof value === "object") {
    if (value.constructor && value.constructor.name) {
      return `an instance of ${value.constructor.name}`;
    }
    return `${inspect(value, { depth: -1 })}`;
  }
  let inspected = inspect(value, { colors: false });
  if (inspected.length > 28) {
    inspected = `${inspected.slice(0, 25)}...`;
  }
  return `type ${typeof value} (${inspected})`;
}

// node_modules/import-meta-resolve/lib/package-json-reader.js
var hasOwnProperty = {}.hasOwnProperty;
var { ERR_INVALID_PACKAGE_CONFIG } = codes;
var cache = /* @__PURE__ */ new Map();
function read2(jsonPath, { base, specifier }) {
  const existing = cache.get(jsonPath);
  if (existing) {
    return existing;
  }
  let string;
  try {
    string = fs3.readFileSync(path6.toNamespacedPath(jsonPath), "utf8");
  } catch (error) {
    const exception = (
      /** @type {ErrnoException} */
      error
    );
    if (exception.code !== "ENOENT") {
      throw exception;
    }
  }
  const result = {
    exists: false,
    pjsonPath: jsonPath,
    main: void 0,
    name: void 0,
    type: "none",
    // Ignore unknown types for forwards compatibility
    exports: void 0,
    imports: void 0
  };
  if (string !== void 0) {
    let parsed;
    try {
      parsed = JSON.parse(string);
    } catch (error_) {
      const cause = (
        /** @type {ErrnoException} */
        error_
      );
      const error = new ERR_INVALID_PACKAGE_CONFIG(
        jsonPath,
        (base ? `"${specifier}" from ` : "") + fileURLToPath2(base || specifier),
        cause.message
      );
      error.cause = cause;
      throw error;
    }
    result.exists = true;
    if (hasOwnProperty.call(parsed, "name") && typeof parsed.name === "string") {
      result.name = parsed.name;
    }
    if (hasOwnProperty.call(parsed, "main") && typeof parsed.main === "string") {
      result.main = parsed.main;
    }
    if (hasOwnProperty.call(parsed, "exports")) {
      result.exports = parsed.exports;
    }
    if (hasOwnProperty.call(parsed, "imports")) {
      result.imports = parsed.imports;
    }
    if (hasOwnProperty.call(parsed, "type") && (parsed.type === "commonjs" || parsed.type === "module")) {
      result.type = parsed.type;
    }
  }
  cache.set(jsonPath, result);
  return result;
}
function getPackageScopeConfig(resolved) {
  let packageJSONUrl = new URL("package.json", resolved);
  while (true) {
    const packageJSONPath2 = packageJSONUrl.pathname;
    if (packageJSONPath2.endsWith("node_modules/package.json")) {
      break;
    }
    const packageConfig = read2(fileURLToPath2(packageJSONUrl), {
      specifier: resolved
    });
    if (packageConfig.exists) {
      return packageConfig;
    }
    const lastPackageJSONUrl = packageJSONUrl;
    packageJSONUrl = new URL("../package.json", packageJSONUrl);
    if (packageJSONUrl.pathname === lastPackageJSONUrl.pathname) {
      break;
    }
  }
  const packageJSONPath = fileURLToPath2(packageJSONUrl);
  return {
    pjsonPath: packageJSONPath,
    exists: false,
    type: "none"
  };
}
function getPackageType(url3) {
  return getPackageScopeConfig(url3).type;
}

// node_modules/import-meta-resolve/lib/get-format.js
var { ERR_UNKNOWN_FILE_EXTENSION } = codes;
var hasOwnProperty2 = {}.hasOwnProperty;
var extensionFormatMap = {
  // @ts-expect-error: hush.
  __proto__: null,
  ".cjs": "commonjs",
  ".js": "module",
  ".json": "json",
  ".mjs": "module"
};
function mimeToFormat(mime) {
  if (mime && /\s*(text|application)\/javascript\s*(;\s*charset=utf-?8\s*)?/i.test(mime))
    return "module";
  if (mime === "application/json") return "json";
  return null;
}
var protocolHandlers = {
  // @ts-expect-error: hush.
  __proto__: null,
  "data:": getDataProtocolModuleFormat,
  "file:": getFileProtocolModuleFormat,
  "http:": getHttpProtocolModuleFormat,
  "https:": getHttpProtocolModuleFormat,
  "node:"() {
    return "builtin";
  }
};
function getDataProtocolModuleFormat(parsed) {
  const { 1: mime } = /^([^/]+\/[^;,]+)[^,]*?(;base64)?,/.exec(
    parsed.pathname
  ) || [null, null, null];
  return mimeToFormat(mime);
}
function extname(url3) {
  const pathname = url3.pathname;
  let index = pathname.length;
  while (index--) {
    const code = pathname.codePointAt(index);
    if (code === 47) {
      return "";
    }
    if (code === 46) {
      return pathname.codePointAt(index - 1) === 47 ? "" : pathname.slice(index);
    }
  }
  return "";
}
function getFileProtocolModuleFormat(url3, _context, ignoreErrors) {
  const value = extname(url3);
  if (value === ".js") {
    const packageType = getPackageType(url3);
    if (packageType !== "none") {
      return packageType;
    }
    return "commonjs";
  }
  if (value === "") {
    const packageType = getPackageType(url3);
    if (packageType === "none" || packageType === "commonjs") {
      return "commonjs";
    }
    return "module";
  }
  const format3 = extensionFormatMap[value];
  if (format3) return format3;
  if (ignoreErrors) {
    return void 0;
  }
  const filepath = fileURLToPath3(url3);
  throw new ERR_UNKNOWN_FILE_EXTENSION(value, filepath);
}
function getHttpProtocolModuleFormat() {
}
function defaultGetFormatWithoutErrors(url3, context) {
  const protocol = url3.protocol;
  if (!hasOwnProperty2.call(protocolHandlers, protocol)) {
    return null;
  }
  return protocolHandlers[protocol](url3, context, true) || null;
}

// node_modules/import-meta-resolve/lib/utils.js
var { ERR_INVALID_ARG_VALUE } = codes;
var DEFAULT_CONDITIONS = Object.freeze(["node", "import"]);
var DEFAULT_CONDITIONS_SET = new Set(DEFAULT_CONDITIONS);
function getDefaultConditions() {
  return DEFAULT_CONDITIONS;
}
function getDefaultConditionsSet() {
  return DEFAULT_CONDITIONS_SET;
}
function getConditionsSet(conditions) {
  if (conditions !== void 0 && conditions !== getDefaultConditions()) {
    if (!Array.isArray(conditions)) {
      throw new ERR_INVALID_ARG_VALUE(
        "conditions",
        conditions,
        "expected an array"
      );
    }
    return new Set(conditions);
  }
  return getDefaultConditionsSet();
}

// node_modules/import-meta-resolve/lib/resolve.js
var RegExpPrototypeSymbolReplace = RegExp.prototype[Symbol.replace];
var {
  ERR_NETWORK_IMPORT_DISALLOWED,
  ERR_INVALID_MODULE_SPECIFIER,
  ERR_INVALID_PACKAGE_CONFIG: ERR_INVALID_PACKAGE_CONFIG2,
  ERR_INVALID_PACKAGE_TARGET,
  ERR_MODULE_NOT_FOUND,
  ERR_PACKAGE_IMPORT_NOT_DEFINED,
  ERR_PACKAGE_PATH_NOT_EXPORTED,
  ERR_UNSUPPORTED_DIR_IMPORT,
  ERR_UNSUPPORTED_RESOLVE_REQUEST
} = codes;
var own2 = {}.hasOwnProperty;
var invalidSegmentRegEx = /(^|\\|\/)((\.|%2e)(\.|%2e)?|(n|%6e|%4e)(o|%6f|%4f)(d|%64|%44)(e|%65|%45)(_|%5f)(m|%6d|%4d)(o|%6f|%4f)(d|%64|%44)(u|%75|%55)(l|%6c|%4c)(e|%65|%45)(s|%73|%53))?(\\|\/|$)/i;
var deprecatedInvalidSegmentRegEx = /(^|\\|\/)((\.|%2e)(\.|%2e)?|(n|%6e|%4e)(o|%6f|%4f)(d|%64|%44)(e|%65|%45)(_|%5f)(m|%6d|%4d)(o|%6f|%4f)(d|%64|%44)(u|%75|%55)(l|%6c|%4c)(e|%65|%45)(s|%73|%53))(\\|\/|$)/i;
var invalidPackageNameRegEx = /^\.|%|\\/;
var patternRegEx = /\*/g;
var encodedSeparatorRegEx = /%2f|%5c/i;
var emittedPackageWarnings = /* @__PURE__ */ new Set();
var doubleSlashRegEx = /[/\\]{2}/;
function emitInvalidSegmentDeprecation(target, request, match, packageJsonUrl, internal, base, isTarget) {
  if (process4.noDeprecation) {
    return;
  }
  const pjsonPath = fileURLToPath4(packageJsonUrl);
  const double = doubleSlashRegEx.exec(isTarget ? target : request) !== null;
  process4.emitWarning(
    `Use of deprecated ${double ? "double slash" : "leading or trailing slash matching"} resolving "${target}" for module request "${request}" ${request === match ? "" : `matched to "${match}" `}in the "${internal ? "imports" : "exports"}" field module resolution of the package at ${pjsonPath}${base ? ` imported from ${fileURLToPath4(base)}` : ""}.`,
    "DeprecationWarning",
    "DEP0166"
  );
}
function emitLegacyIndexDeprecation(url3, packageJsonUrl, base, main) {
  if (process4.noDeprecation) {
    return;
  }
  const format3 = defaultGetFormatWithoutErrors(url3, { parentURL: base.href });
  if (format3 !== "module") return;
  const urlPath = fileURLToPath4(url3.href);
  const packagePath = fileURLToPath4(new URL(".", packageJsonUrl));
  const basePath = fileURLToPath4(base);
  if (!main) {
    process4.emitWarning(
      `No "main" or "exports" field defined in the package.json for ${packagePath} resolving the main entry point "${urlPath.slice(
        packagePath.length
      )}", imported from ${basePath}.
Default "index" lookups for the main are deprecated for ES modules.`,
      "DeprecationWarning",
      "DEP0151"
    );
  } else if (path7.resolve(packagePath, main) !== urlPath) {
    process4.emitWarning(
      `Package ${packagePath} has a "main" field set to "${main}", excluding the full filename and extension to the resolved file at "${urlPath.slice(
        packagePath.length
      )}", imported from ${basePath}.
 Automatic extension resolution of the "main" field is deprecated for ES modules.`,
      "DeprecationWarning",
      "DEP0151"
    );
  }
}
function tryStatSync(path15) {
  try {
    return statSync(path15);
  } catch {
  }
}
function fileExists(url3) {
  const stats = statSync(url3, { throwIfNoEntry: false });
  const isFile2 = stats ? stats.isFile() : void 0;
  return isFile2 === null || isFile2 === void 0 ? false : isFile2;
}
function legacyMainResolve(packageJsonUrl, packageConfig, base) {
  let guess;
  if (packageConfig.main !== void 0) {
    guess = new URL(packageConfig.main, packageJsonUrl);
    if (fileExists(guess)) return guess;
    const tries2 = [
      `./${packageConfig.main}.js`,
      `./${packageConfig.main}.json`,
      `./${packageConfig.main}.node`,
      `./${packageConfig.main}/index.js`,
      `./${packageConfig.main}/index.json`,
      `./${packageConfig.main}/index.node`
    ];
    let i2 = -1;
    while (++i2 < tries2.length) {
      guess = new URL(tries2[i2], packageJsonUrl);
      if (fileExists(guess)) break;
      guess = void 0;
    }
    if (guess) {
      emitLegacyIndexDeprecation(
        guess,
        packageJsonUrl,
        base,
        packageConfig.main
      );
      return guess;
    }
  }
  const tries = ["./index.js", "./index.json", "./index.node"];
  let i = -1;
  while (++i < tries.length) {
    guess = new URL(tries[i], packageJsonUrl);
    if (fileExists(guess)) break;
    guess = void 0;
  }
  if (guess) {
    emitLegacyIndexDeprecation(guess, packageJsonUrl, base, packageConfig.main);
    return guess;
  }
  throw new ERR_MODULE_NOT_FOUND(
    fileURLToPath4(new URL(".", packageJsonUrl)),
    fileURLToPath4(base)
  );
}
function finalizeResolution(resolved, base, preserveSymlinks) {
  if (encodedSeparatorRegEx.exec(resolved.pathname) !== null) {
    throw new ERR_INVALID_MODULE_SPECIFIER(
      resolved.pathname,
      'must not include encoded "/" or "\\" characters',
      fileURLToPath4(base)
    );
  }
  let filePath;
  try {
    filePath = fileURLToPath4(resolved);
  } catch (error) {
    const cause = (
      /** @type {ErrnoException} */
      error
    );
    Object.defineProperty(cause, "input", { value: String(resolved) });
    Object.defineProperty(cause, "module", { value: String(base) });
    throw cause;
  }
  const stats = tryStatSync(
    filePath.endsWith("/") ? filePath.slice(-1) : filePath
  );
  if (stats && stats.isDirectory()) {
    const error = new ERR_UNSUPPORTED_DIR_IMPORT(filePath, fileURLToPath4(base));
    error.url = String(resolved);
    throw error;
  }
  if (!stats || !stats.isFile()) {
    const error = new ERR_MODULE_NOT_FOUND(
      filePath || resolved.pathname,
      base && fileURLToPath4(base),
      true
    );
    error.url = String(resolved);
    throw error;
  }
  if (!preserveSymlinks) {
    const real = realpathSync(filePath);
    const { search, hash } = resolved;
    resolved = pathToFileURL3(real + (filePath.endsWith(path7.sep) ? "/" : ""));
    resolved.search = search;
    resolved.hash = hash;
  }
  return resolved;
}
function importNotDefined(specifier, packageJsonUrl, base) {
  return new ERR_PACKAGE_IMPORT_NOT_DEFINED(
    specifier,
    packageJsonUrl && fileURLToPath4(new URL(".", packageJsonUrl)),
    fileURLToPath4(base)
  );
}
function exportsNotFound(subpath, packageJsonUrl, base) {
  return new ERR_PACKAGE_PATH_NOT_EXPORTED(
    fileURLToPath4(new URL(".", packageJsonUrl)),
    subpath,
    base && fileURLToPath4(base)
  );
}
function throwInvalidSubpath(request, match, packageJsonUrl, internal, base) {
  const reason = `request is not a valid match in pattern "${match}" for the "${internal ? "imports" : "exports"}" resolution of ${fileURLToPath4(packageJsonUrl)}`;
  throw new ERR_INVALID_MODULE_SPECIFIER(
    request,
    reason,
    base && fileURLToPath4(base)
  );
}
function invalidPackageTarget(subpath, target, packageJsonUrl, internal, base) {
  target = typeof target === "object" && target !== null ? JSON.stringify(target, null, "") : `${target}`;
  return new ERR_INVALID_PACKAGE_TARGET(
    fileURLToPath4(new URL(".", packageJsonUrl)),
    subpath,
    target,
    internal,
    base && fileURLToPath4(base)
  );
}
function resolvePackageTargetString(target, subpath, match, packageJsonUrl, base, pattern, internal, isPathMap, conditions) {
  if (subpath !== "" && !pattern && target[target.length - 1] !== "/")
    throw invalidPackageTarget(match, target, packageJsonUrl, internal, base);
  if (!target.startsWith("./")) {
    if (internal && !target.startsWith("../") && !target.startsWith("/")) {
      let isURL2 = false;
      try {
        new URL(target);
        isURL2 = true;
      } catch {
      }
      if (!isURL2) {
        const exportTarget = pattern ? RegExpPrototypeSymbolReplace.call(
          patternRegEx,
          target,
          () => subpath
        ) : target + subpath;
        return packageResolve(exportTarget, packageJsonUrl, conditions);
      }
    }
    throw invalidPackageTarget(match, target, packageJsonUrl, internal, base);
  }
  if (invalidSegmentRegEx.exec(target.slice(2)) !== null) {
    if (deprecatedInvalidSegmentRegEx.exec(target.slice(2)) === null) {
      if (!isPathMap) {
        const request = pattern ? match.replace("*", () => subpath) : match + subpath;
        const resolvedTarget = pattern ? RegExpPrototypeSymbolReplace.call(
          patternRegEx,
          target,
          () => subpath
        ) : target;
        emitInvalidSegmentDeprecation(
          resolvedTarget,
          request,
          match,
          packageJsonUrl,
          internal,
          base,
          true
        );
      }
    } else {
      throw invalidPackageTarget(match, target, packageJsonUrl, internal, base);
    }
  }
  const resolved = new URL(target, packageJsonUrl);
  const resolvedPath = resolved.pathname;
  const packagePath = new URL(".", packageJsonUrl).pathname;
  if (!resolvedPath.startsWith(packagePath))
    throw invalidPackageTarget(match, target, packageJsonUrl, internal, base);
  if (subpath === "") return resolved;
  if (invalidSegmentRegEx.exec(subpath) !== null) {
    const request = pattern ? match.replace("*", () => subpath) : match + subpath;
    if (deprecatedInvalidSegmentRegEx.exec(subpath) === null) {
      if (!isPathMap) {
        const resolvedTarget = pattern ? RegExpPrototypeSymbolReplace.call(
          patternRegEx,
          target,
          () => subpath
        ) : target;
        emitInvalidSegmentDeprecation(
          resolvedTarget,
          request,
          match,
          packageJsonUrl,
          internal,
          base,
          false
        );
      }
    } else {
      throwInvalidSubpath(request, match, packageJsonUrl, internal, base);
    }
  }
  if (pattern) {
    return new URL(
      RegExpPrototypeSymbolReplace.call(
        patternRegEx,
        resolved.href,
        () => subpath
      )
    );
  }
  return new URL(subpath, resolved);
}
function isArrayIndex(key2) {
  const keyNumber = Number(key2);
  if (`${keyNumber}` !== key2) return false;
  return keyNumber >= 0 && keyNumber < 4294967295;
}
function resolvePackageTarget(packageJsonUrl, target, subpath, packageSubpath, base, pattern, internal, isPathMap, conditions) {
  if (typeof target === "string") {
    return resolvePackageTargetString(
      target,
      subpath,
      packageSubpath,
      packageJsonUrl,
      base,
      pattern,
      internal,
      isPathMap,
      conditions
    );
  }
  if (Array.isArray(target)) {
    const targetList = target;
    if (targetList.length === 0) return null;
    let lastException;
    let i = -1;
    while (++i < targetList.length) {
      const targetItem = targetList[i];
      let resolveResult;
      try {
        resolveResult = resolvePackageTarget(
          packageJsonUrl,
          targetItem,
          subpath,
          packageSubpath,
          base,
          pattern,
          internal,
          isPathMap,
          conditions
        );
      } catch (error) {
        const exception = (
          /** @type {ErrnoException} */
          error
        );
        lastException = exception;
        if (exception.code === "ERR_INVALID_PACKAGE_TARGET") continue;
        throw error;
      }
      if (resolveResult === void 0) continue;
      if (resolveResult === null) {
        lastException = null;
        continue;
      }
      return resolveResult;
    }
    if (lastException === void 0 || lastException === null) {
      return null;
    }
    throw lastException;
  }
  if (typeof target === "object" && target !== null) {
    const keys = Object.getOwnPropertyNames(target);
    let i = -1;
    while (++i < keys.length) {
      const key2 = keys[i];
      if (isArrayIndex(key2)) {
        throw new ERR_INVALID_PACKAGE_CONFIG2(
          fileURLToPath4(packageJsonUrl),
          base,
          '"exports" cannot contain numeric property keys.'
        );
      }
    }
    i = -1;
    while (++i < keys.length) {
      const key2 = keys[i];
      if (key2 === "default" || conditions && conditions.has(key2)) {
        const conditionalTarget = (
          /** @type {unknown} */
          target[key2]
        );
        const resolveResult = resolvePackageTarget(
          packageJsonUrl,
          conditionalTarget,
          subpath,
          packageSubpath,
          base,
          pattern,
          internal,
          isPathMap,
          conditions
        );
        if (resolveResult === void 0) continue;
        return resolveResult;
      }
    }
    return null;
  }
  if (target === null) {
    return null;
  }
  throw invalidPackageTarget(
    packageSubpath,
    target,
    packageJsonUrl,
    internal,
    base
  );
}
function isConditionalExportsMainSugar(exports, packageJsonUrl, base) {
  if (typeof exports === "string" || Array.isArray(exports)) return true;
  if (typeof exports !== "object" || exports === null) return false;
  const keys = Object.getOwnPropertyNames(exports);
  let isConditionalSugar = false;
  let i = 0;
  let keyIndex = -1;
  while (++keyIndex < keys.length) {
    const key2 = keys[keyIndex];
    const currentIsConditionalSugar = key2 === "" || key2[0] !== ".";
    if (i++ === 0) {
      isConditionalSugar = currentIsConditionalSugar;
    } else if (isConditionalSugar !== currentIsConditionalSugar) {
      throw new ERR_INVALID_PACKAGE_CONFIG2(
        fileURLToPath4(packageJsonUrl),
        base,
        `"exports" cannot contain some keys starting with '.' and some not. The exports object must either be an object of package subpath keys or an object of main entry condition name keys only.`
      );
    }
  }
  return isConditionalSugar;
}
function emitTrailingSlashPatternDeprecation(match, pjsonUrl, base) {
  if (process4.noDeprecation) {
    return;
  }
  const pjsonPath = fileURLToPath4(pjsonUrl);
  if (emittedPackageWarnings.has(pjsonPath + "|" + match)) return;
  emittedPackageWarnings.add(pjsonPath + "|" + match);
  process4.emitWarning(
    `Use of deprecated trailing slash pattern mapping "${match}" in the "exports" field module resolution of the package at ${pjsonPath}${base ? ` imported from ${fileURLToPath4(base)}` : ""}. Mapping specifiers ending in "/" is no longer supported.`,
    "DeprecationWarning",
    "DEP0155"
  );
}
function packageExportsResolve(packageJsonUrl, packageSubpath, packageConfig, base, conditions) {
  let exports = packageConfig.exports;
  if (isConditionalExportsMainSugar(exports, packageJsonUrl, base)) {
    exports = { ".": exports };
  }
  if (own2.call(exports, packageSubpath) && !packageSubpath.includes("*") && !packageSubpath.endsWith("/")) {
    const target = exports[packageSubpath];
    const resolveResult = resolvePackageTarget(
      packageJsonUrl,
      target,
      "",
      packageSubpath,
      base,
      false,
      false,
      false,
      conditions
    );
    if (resolveResult === null || resolveResult === void 0) {
      throw exportsNotFound(packageSubpath, packageJsonUrl, base);
    }
    return resolveResult;
  }
  let bestMatch = "";
  let bestMatchSubpath = "";
  const keys = Object.getOwnPropertyNames(exports);
  let i = -1;
  while (++i < keys.length) {
    const key2 = keys[i];
    const patternIndex = key2.indexOf("*");
    if (patternIndex !== -1 && packageSubpath.startsWith(key2.slice(0, patternIndex))) {
      if (packageSubpath.endsWith("/")) {
        emitTrailingSlashPatternDeprecation(
          packageSubpath,
          packageJsonUrl,
          base
        );
      }
      const patternTrailer = key2.slice(patternIndex + 1);
      if (packageSubpath.length >= key2.length && packageSubpath.endsWith(patternTrailer) && patternKeyCompare(bestMatch, key2) === 1 && key2.lastIndexOf("*") === patternIndex) {
        bestMatch = key2;
        bestMatchSubpath = packageSubpath.slice(
          patternIndex,
          packageSubpath.length - patternTrailer.length
        );
      }
    }
  }
  if (bestMatch) {
    const target = (
      /** @type {unknown} */
      exports[bestMatch]
    );
    const resolveResult = resolvePackageTarget(
      packageJsonUrl,
      target,
      bestMatchSubpath,
      bestMatch,
      base,
      true,
      false,
      packageSubpath.endsWith("/"),
      conditions
    );
    if (resolveResult === null || resolveResult === void 0) {
      throw exportsNotFound(packageSubpath, packageJsonUrl, base);
    }
    return resolveResult;
  }
  throw exportsNotFound(packageSubpath, packageJsonUrl, base);
}
function patternKeyCompare(a, b) {
  const aPatternIndex = a.indexOf("*");
  const bPatternIndex = b.indexOf("*");
  const baseLengthA = aPatternIndex === -1 ? a.length : aPatternIndex + 1;
  const baseLengthB = bPatternIndex === -1 ? b.length : bPatternIndex + 1;
  if (baseLengthA > baseLengthB) return -1;
  if (baseLengthB > baseLengthA) return 1;
  if (aPatternIndex === -1) return 1;
  if (bPatternIndex === -1) return -1;
  if (a.length > b.length) return -1;
  if (b.length > a.length) return 1;
  return 0;
}
function packageImportsResolve(name, base, conditions) {
  if (name === "#" || name.startsWith("#/") || name.endsWith("/")) {
    const reason = "is not a valid internal imports specifier name";
    throw new ERR_INVALID_MODULE_SPECIFIER(name, reason, fileURLToPath4(base));
  }
  let packageJsonUrl;
  const packageConfig = getPackageScopeConfig(base);
  if (packageConfig.exists) {
    packageJsonUrl = pathToFileURL3(packageConfig.pjsonPath);
    const imports = packageConfig.imports;
    if (imports) {
      if (own2.call(imports, name) && !name.includes("*")) {
        const resolveResult = resolvePackageTarget(
          packageJsonUrl,
          imports[name],
          "",
          name,
          base,
          false,
          true,
          false,
          conditions
        );
        if (resolveResult !== null && resolveResult !== void 0) {
          return resolveResult;
        }
      } else {
        let bestMatch = "";
        let bestMatchSubpath = "";
        const keys = Object.getOwnPropertyNames(imports);
        let i = -1;
        while (++i < keys.length) {
          const key2 = keys[i];
          const patternIndex = key2.indexOf("*");
          if (patternIndex !== -1 && name.startsWith(key2.slice(0, -1))) {
            const patternTrailer = key2.slice(patternIndex + 1);
            if (name.length >= key2.length && name.endsWith(patternTrailer) && patternKeyCompare(bestMatch, key2) === 1 && key2.lastIndexOf("*") === patternIndex) {
              bestMatch = key2;
              bestMatchSubpath = name.slice(
                patternIndex,
                name.length - patternTrailer.length
              );
            }
          }
        }
        if (bestMatch) {
          const target = imports[bestMatch];
          const resolveResult = resolvePackageTarget(
            packageJsonUrl,
            target,
            bestMatchSubpath,
            bestMatch,
            base,
            true,
            true,
            false,
            conditions
          );
          if (resolveResult !== null && resolveResult !== void 0) {
            return resolveResult;
          }
        }
      }
    }
  }
  throw importNotDefined(name, packageJsonUrl, base);
}
function parsePackageName(specifier, base) {
  let separatorIndex = specifier.indexOf("/");
  let validPackageName = true;
  let isScoped = false;
  if (specifier[0] === "@") {
    isScoped = true;
    if (separatorIndex === -1 || specifier.length === 0) {
      validPackageName = false;
    } else {
      separatorIndex = specifier.indexOf("/", separatorIndex + 1);
    }
  }
  const packageName = separatorIndex === -1 ? specifier : specifier.slice(0, separatorIndex);
  if (invalidPackageNameRegEx.exec(packageName) !== null) {
    validPackageName = false;
  }
  if (!validPackageName) {
    throw new ERR_INVALID_MODULE_SPECIFIER(
      specifier,
      "is not a valid package name",
      fileURLToPath4(base)
    );
  }
  const packageSubpath = "." + (separatorIndex === -1 ? "" : specifier.slice(separatorIndex));
  return { packageName, packageSubpath, isScoped };
}
function packageResolve(specifier, base, conditions) {
  if (builtinModules.includes(specifier)) {
    return new URL("node:" + specifier);
  }
  const { packageName, packageSubpath, isScoped } = parsePackageName(
    specifier,
    base
  );
  const packageConfig = getPackageScopeConfig(base);
  if (packageConfig.exists) {
    const packageJsonUrl2 = pathToFileURL3(packageConfig.pjsonPath);
    if (packageConfig.name === packageName && packageConfig.exports !== void 0 && packageConfig.exports !== null) {
      return packageExportsResolve(
        packageJsonUrl2,
        packageSubpath,
        packageConfig,
        base,
        conditions
      );
    }
  }
  let packageJsonUrl = new URL(
    "./node_modules/" + packageName + "/package.json",
    base
  );
  let packageJsonPath = fileURLToPath4(packageJsonUrl);
  let lastPath;
  do {
    const stat2 = tryStatSync(packageJsonPath.slice(0, -13));
    if (!stat2 || !stat2.isDirectory()) {
      lastPath = packageJsonPath;
      packageJsonUrl = new URL(
        (isScoped ? "../../../../node_modules/" : "../../../node_modules/") + packageName + "/package.json",
        packageJsonUrl
      );
      packageJsonPath = fileURLToPath4(packageJsonUrl);
      continue;
    }
    const packageConfig2 = read2(packageJsonPath, { base, specifier });
    if (packageConfig2.exports !== void 0 && packageConfig2.exports !== null) {
      return packageExportsResolve(
        packageJsonUrl,
        packageSubpath,
        packageConfig2,
        base,
        conditions
      );
    }
    if (packageSubpath === ".") {
      return legacyMainResolve(packageJsonUrl, packageConfig2, base);
    }
    return new URL(packageSubpath, packageJsonUrl);
  } while (packageJsonPath.length !== lastPath.length);
  throw new ERR_MODULE_NOT_FOUND(packageName, fileURLToPath4(base), false);
}
function isRelativeSpecifier(specifier) {
  if (specifier[0] === ".") {
    if (specifier.length === 1 || specifier[1] === "/") return true;
    if (specifier[1] === "." && (specifier.length === 2 || specifier[2] === "/")) {
      return true;
    }
  }
  return false;
}
function shouldBeTreatedAsRelativeOrAbsolutePath(specifier) {
  if (specifier === "") return false;
  if (specifier[0] === "/") return true;
  return isRelativeSpecifier(specifier);
}
function moduleResolve(specifier, base, conditions, preserveSymlinks) {
  if (conditions === void 0) {
    conditions = getConditionsSet();
  }
  const protocol = base.protocol;
  const isData = protocol === "data:";
  const isRemote = isData || protocol === "http:" || protocol === "https:";
  let resolved;
  if (shouldBeTreatedAsRelativeOrAbsolutePath(specifier)) {
    try {
      resolved = new URL(specifier, base);
    } catch (error_) {
      const error = new ERR_UNSUPPORTED_RESOLVE_REQUEST(specifier, base);
      error.cause = error_;
      throw error;
    }
  } else if (protocol === "file:" && specifier[0] === "#") {
    resolved = packageImportsResolve(specifier, base, conditions);
  } else {
    try {
      resolved = new URL(specifier);
    } catch (error_) {
      if (isRemote && !builtinModules.includes(specifier)) {
        const error = new ERR_UNSUPPORTED_RESOLVE_REQUEST(specifier, base);
        error.cause = error_;
        throw error;
      }
      resolved = packageResolve(specifier, base, conditions);
    }
  }
  assert3.ok(resolved !== void 0, "expected to be defined");
  if (resolved.protocol !== "file:") {
    return resolved;
  }
  return finalizeResolution(resolved, base, preserveSymlinks);
}
function checkIfDisallowedImport(specifier, parsed, parsedParentURL) {
  if (parsedParentURL) {
    const parentProtocol = parsedParentURL.protocol;
    if (parentProtocol === "http:" || parentProtocol === "https:") {
      if (shouldBeTreatedAsRelativeOrAbsolutePath(specifier)) {
        const parsedProtocol = parsed?.protocol;
        if (parsedProtocol && parsedProtocol !== "https:" && parsedProtocol !== "http:") {
          throw new ERR_NETWORK_IMPORT_DISALLOWED(
            specifier,
            parsedParentURL,
            "remote imports cannot import from a local location."
          );
        }
        return { url: parsed?.href || "" };
      }
      if (builtinModules.includes(specifier)) {
        throw new ERR_NETWORK_IMPORT_DISALLOWED(
          specifier,
          parsedParentURL,
          "remote imports cannot import from a local location."
        );
      }
      throw new ERR_NETWORK_IMPORT_DISALLOWED(
        specifier,
        parsedParentURL,
        "only relative and absolute specifiers are supported."
      );
    }
  }
}
function isURL(self) {
  return Boolean(
    self && typeof self === "object" && "href" in self && typeof self.href === "string" && "protocol" in self && typeof self.protocol === "string" && self.href && self.protocol
  );
}
function throwIfInvalidParentURL(parentURL) {
  if (parentURL === void 0) {
    return;
  }
  if (typeof parentURL !== "string" && !isURL(parentURL)) {
    throw new codes.ERR_INVALID_ARG_TYPE(
      "parentURL",
      ["string", "URL"],
      parentURL
    );
  }
}
function defaultResolve(specifier, context = {}) {
  const { parentURL } = context;
  assert3.ok(parentURL !== void 0, "expected `parentURL` to be defined");
  throwIfInvalidParentURL(parentURL);
  let parsedParentURL;
  if (parentURL) {
    try {
      parsedParentURL = new URL(parentURL);
    } catch {
    }
  }
  let parsed;
  let protocol;
  try {
    parsed = shouldBeTreatedAsRelativeOrAbsolutePath(specifier) ? new URL(specifier, parsedParentURL) : new URL(specifier);
    protocol = parsed.protocol;
    if (protocol === "data:") {
      return { url: parsed.href, format: null };
    }
  } catch {
  }
  const maybeReturn = checkIfDisallowedImport(
    specifier,
    parsed,
    parsedParentURL
  );
  if (maybeReturn) return maybeReturn;
  if (protocol === void 0 && parsed) {
    protocol = parsed.protocol;
  }
  if (protocol === "node:") {
    return { url: specifier };
  }
  if (parsed && parsed.protocol === "node:") return { url: specifier };
  const conditions = getConditionsSet(context.conditions);
  const url3 = moduleResolve(specifier, new URL(parentURL), conditions, false);
  return {
    // Do NOT cast `url` to a string: that will work even when there are real
    // problems, silencing them
    url: url3.href,
    format: defaultGetFormatWithoutErrors(url3, { parentURL })
  };
}

// node_modules/import-meta-resolve/index.js
function resolve2(specifier, parent) {
  if (!parent) {
    throw new Error(
      "Please pass `parent`: `import-meta-resolve` cannot ponyfill that"
    );
  }
  try {
    return defaultResolve(specifier, { parentURL: parent }).url;
  } catch (error) {
    const exception = (
      /** @type {ErrnoException} */
      error
    );
    if ((exception.code === "ERR_UNSUPPORTED_DIR_IMPORT" || exception.code === "ERR_MODULE_NOT_FOUND") && typeof exception.url === "string") {
      return exception.url;
    }
    throw error;
  }
}

// src/utilities/import-from-file.js
function importFromFile(specifier, parent) {
  const url3 = resolve2(specifier, pathToFileURL4(parent).href);
  return import(url3);
}
var import_from_file_default = importFromFile;

// src/utilities/require-from-file.js
import { createRequire } from "module";
function requireFromFile(id, parent) {
  const require2 = createRequire(parent);
  return require2(id);
}
var require_from_file_default = requireFromFile;

// src/config/prettier-config/load-external-config.js
var requireErrorCodesShouldBeIgnored = /* @__PURE__ */ new Set([
  "MODULE_NOT_FOUND",
  "ERR_REQUIRE_ESM",
  "ERR_PACKAGE_PATH_NOT_EXPORTED",
  "ERR_REQUIRE_ASYNC_MODULE"
]);
async function loadExternalConfig(externalConfig, configFile) {
  try {
    const required = require_from_file_default(externalConfig, configFile);
    if (process.features.require_module && required.__esModule) {
      return required.default;
    }
    return required;
  } catch (error) {
    if (!requireErrorCodesShouldBeIgnored.has(error?.code)) {
      throw error;
    }
  }
  const module = await import_from_file_default(externalConfig, configFile);
  return module.default;
}
var load_external_config_default = loadExternalConfig;

// src/config/prettier-config/load-config.js
async function loadConfig(configFile) {
  const { base: fileName, ext: extension } = path8.parse(configFile);
  const load = fileName === "package.json" ? loadConfigFromPackageJson : fileName === "package.yaml" ? loadConfigFromPackageYaml : loaders_default[extension];
  if (!load) {
    throw new Error(
      `No loader specified for extension "${extension || "noExt"}"`
    );
  }
  let config = await load(configFile);
  if (!config) {
    return;
  }
  if (typeof config === "string") {
    config = await load_external_config_default(config, configFile);
  }
  if (typeof config !== "object") {
    throw new TypeError(
      `Config is only allowed to be an object, but received ${typeof config} in "${configFile}"`
    );
  }
  delete config.$schema;
  return config;
}
var load_config_default = loadConfig;

// src/config/prettier-config/index.js
var loadCache = /* @__PURE__ */ new Map();
var searchCache = /* @__PURE__ */ new Map();
function clearPrettierConfigCache() {
  loadCache.clear();
  searchCache.clear();
}
function loadPrettierConfig(configFile, { shouldCache }) {
  configFile = path9.resolve(configFile);
  if (!shouldCache || !loadCache.has(configFile)) {
    loadCache.set(configFile, load_config_default(configFile));
  }
  return loadCache.get(configFile);
}
function getSearchFunction(stopDirectory) {
  stopDirectory = stopDirectory ? path9.resolve(stopDirectory) : void 0;
  if (!searchCache.has(stopDirectory)) {
    const searcher2 = config_searcher_default(stopDirectory);
    const searchFunction = searcher2.search.bind(searcher2);
    searchCache.set(stopDirectory, searchFunction);
  }
  return searchCache.get(stopDirectory);
}
function searchPrettierConfig(startDirectory, options8 = {}) {
  startDirectory = startDirectory ? path9.resolve(startDirectory) : process.cwd();
  const stopDirectory = mockable_default.getPrettierConfigSearchStopDirectory();
  const search = getSearchFunction(stopDirectory);
  return search(startDirectory, { cache: options8.shouldCache });
}

// src/config/resolve-config.js
function clearCache() {
  clearPrettierConfigCache();
  clearEditorconfigCache();
}
function loadEditorconfig2(file, options8) {
  if (!file || !options8.editorconfig) {
    return;
  }
  const shouldCache = options8.useCache;
  return loadEditorconfig(file, { shouldCache });
}
async function loadPrettierConfig2(file, options8) {
  const shouldCache = options8.useCache;
  let configFile = options8.config;
  if (!configFile) {
    const directory = file ? path10.dirname(path10.resolve(file)) : void 0;
    configFile = await searchPrettierConfig(directory, { shouldCache });
  }
  if (!configFile) {
    return;
  }
  configFile = toPath(configFile);
  const config = await loadPrettierConfig(configFile, { shouldCache });
  return { config, configFile };
}
async function resolveConfig(fileUrlOrPath, options8) {
  options8 = { useCache: true, ...options8 };
  const filePath = toPath(fileUrlOrPath);
  const [result, editorConfigured] = await Promise.all([
    loadPrettierConfig2(filePath, options8),
    loadEditorconfig2(filePath, options8)
  ]);
  if (!result && !editorConfigured) {
    return null;
  }
  const merged = {
    ...editorConfigured,
    ...mergeOverrides(result, filePath)
  };
  if (Array.isArray(merged.plugins)) {
    merged.plugins = merged.plugins.map(
      (value) => typeof value === "string" && value.startsWith(".") ? path10.resolve(path10.dirname(result.configFile), value) : value
    );
  }
  return merged;
}
async function resolveConfigFile(fileUrlOrPath) {
  const directory = fileUrlOrPath ? path10.dirname(path10.resolve(toPath(fileUrlOrPath))) : void 0;
  const result = await searchPrettierConfig(directory, { shouldCache: false });
  return result ?? null;
}
function mergeOverrides(configResult, filePath) {
  const { config, configFile } = configResult || {};
  const { overrides, ...options8 } = config || {};
  if (filePath && overrides) {
    const relativeFilePath = path10.relative(path10.dirname(configFile), filePath);
    for (const override of overrides) {
      if (pathMatchesGlobs(
        relativeFilePath,
        override.files,
        override.excludeFiles
      )) {
        Object.assign(options8, override.options);
      }
    }
  }
  return options8;
}
function pathMatchesGlobs(filePath, patterns, excludedPatterns) {
  const patternList = Array.isArray(patterns) ? patterns : [patterns];
  const [withSlashes, withoutSlashes] = partition_default(
    patternList,
    (pattern) => pattern.includes("/")
  );
  return import_micromatch.default.isMatch(filePath, withoutSlashes, {
    ignore: excludedPatterns,
    basename: true,
    dot: true
  }) || import_micromatch.default.isMatch(filePath, withSlashes, {
    ignore: excludedPatterns,
    basename: false,
    dot: true
  });
}

// scripts/build/shims/shared.js
var OPTIONAL_OBJECT = 1;
var createMethodShim = (methodName, getImplementation) => (flags, object, ...arguments_) => {
  if (flags | OPTIONAL_OBJECT && (object === void 0 || object === null)) {
    return;
  }
  const implementation = getImplementation.call(object) ?? object[methodName];
  return implementation.apply(object, arguments_);
};

// scripts/build/shims/method-replace-all.js
var stringReplaceAll = String.prototype.replaceAll ?? function(pattern, replacement) {
  if (pattern.global) {
    return this.replace(pattern, replacement);
  }
  return this.split(pattern).join(replacement);
};
var replaceAll = createMethodShim("replaceAll", function() {
  if (typeof this === "string") {
    return stringReplaceAll;
  }
});
var method_replace_all_default = replaceAll;

// src/main/core.js
import { builders as __doc_builders4, printer as __doc_printer } from "./doc.mjs";

// src/universal/assert.js
import { equal, ok, strictEqual } from "assert";

// src/common/end-of-line.js
var OPTION_CR = "cr";
var OPTION_CRLF = "crlf";
var OPTION_LF = "lf";
var DEFAULT_OPTION = OPTION_LF;
var CHARACTER_CR = "\r";
var CHARACTER_CRLF = "\r\n";
var CHARACTER_LF = "\n";
var DEFAULT_EOL = CHARACTER_LF;
function guessEndOfLine(text) {
  const index = text.indexOf(CHARACTER_CR);
  if (index !== -1) {
    return text.charAt(index + 1) === CHARACTER_LF ? OPTION_CRLF : OPTION_CR;
  }
  return DEFAULT_OPTION;
}
function convertEndOfLineOptionToCharacter(endOfLineOption) {
  return endOfLineOption === OPTION_CR ? CHARACTER_CR : endOfLineOption === OPTION_CRLF ? CHARACTER_CRLF : DEFAULT_EOL;
}
var regexps = /* @__PURE__ */ new Map([[CHARACTER_LF, /\n/gu], [CHARACTER_CR, /\r/gu], [CHARACTER_CRLF, /\r\n/gu]]);
function countEndOfLineCharacters(text, endOfLineCharacter) {
  const regex = regexps.get(endOfLineCharacter);
  if (false) {
    ok(regex, `Unexpected 'endOfLineCharacter': ${JSON.stringify(endOfLineCharacter)}.`);
  }
  return text.match(regex)?.length ?? 0;
}
var END_OF_LINE_REGEXP = /\r\n?/gu;
function normalizeEndOfLine(text) {
  return method_replace_all_default(
    /* OPTIONAL_OBJECT: false */
    0,
    text,
    END_OF_LINE_REGEXP,
    CHARACTER_LF
  );
}

// scripts/build/shims/method-at.js
function stringOrArrayAt(index) {
  return this[index < 0 ? this.length + index : index];
}
var at = createMethodShim("at", function() {
  if (Array.isArray(this) || typeof this === "string") {
    return stringOrArrayAt;
  }
});
var method_at_default = at;

// src/utilities/noop.js
var noop = () => {
};
var noop_default = noop;

// src/document/builders/types.js
var DOC_TYPE_CURSOR = (
  /** @type {const} */
  "cursor"
);
var DOC_TYPE_INDENT = (
  /** @type {const} */
  "indent"
);
var DOC_TYPE_ALIGN = (
  /** @type {const} */
  "align"
);
var DOC_TYPE_TRIM = (
  /** @type {const} */
  "trim"
);
var DOC_TYPE_GROUP = (
  /** @type {const} */
  "group"
);
var DOC_TYPE_FILL = (
  /** @type {const} */
  "fill"
);
var DOC_TYPE_IF_BREAK = (
  /** @type {const} */
  "if-break"
);
var DOC_TYPE_INDENT_IF_BREAK = (
  /** @type {const} */
  "indent-if-break"
);
var DOC_TYPE_LINE_SUFFIX = (
  /** @type {const} */
  "line-suffix"
);
var DOC_TYPE_LINE_SUFFIX_BOUNDARY = (
  /** @type {const} */
  "line-suffix-boundary"
);
var DOC_TYPE_LINE = (
  /** @type {const} */
  "line"
);
var DOC_TYPE_LABEL = (
  /** @type {const} */
  "label"
);
var DOC_TYPE_BREAK_PARENT = (
  /** @type {const} */
  "break-parent"
);

// src/document/utilities/index.js
function inheritLabel(doc2, fn) {
  return doc2.type === DOC_TYPE_LABEL ? {
    ...doc2,
    contents: fn(doc2.contents)
  } : fn(doc2);
}

// src/document/debug.js
function flattenDoc(doc2) {
  if (!doc2) {
    return "";
  }
  if (Array.isArray(doc2)) {
    const res = [];
    for (const part of doc2) {
      if (Array.isArray(part)) {
        res.push(...flattenDoc(part));
      } else {
        const flattened = flattenDoc(part);
        if (flattened !== "") {
          res.push(flattened);
        }
      }
    }
    return res;
  }
  if (doc2.type === DOC_TYPE_IF_BREAK) {
    return {
      ...doc2,
      breakContents: flattenDoc(doc2.breakContents),
      flatContents: flattenDoc(doc2.flatContents)
    };
  }
  if (doc2.type === DOC_TYPE_GROUP) {
    return {
      ...doc2,
      contents: flattenDoc(doc2.contents),
      expandedStates: doc2.expandedStates?.map(flattenDoc)
    };
  }
  if (doc2.type === DOC_TYPE_FILL) {
    return { type: "fill", parts: doc2.parts.map(flattenDoc) };
  }
  if (doc2.contents) {
    return { ...doc2, contents: flattenDoc(doc2.contents) };
  }
  return doc2;
}
function printDocToDebug(doc2) {
  const printedSymbols = /* @__PURE__ */ Object.create(null);
  const usedKeysForSymbols = /* @__PURE__ */ new Set();
  return printDoc(flattenDoc(doc2));
  function printDoc(doc3, index, parentParts) {
    if (typeof doc3 === "string") {
      return JSON.stringify(doc3);
    }
    if (Array.isArray(doc3)) {
      const printed = doc3.map(printDoc).filter(Boolean);
      return printed.length === 1 ? printed[0] : `[${printed.join(", ")}]`;
    }
    if (doc3.type === DOC_TYPE_LINE) {
      const withBreakParent = parentParts?.[index + 1]?.type === DOC_TYPE_BREAK_PARENT;
      if (doc3.literal) {
        return withBreakParent ? "literalline" : "literallineWithoutBreakParent";
      }
      if (doc3.hard) {
        return withBreakParent ? "hardline" : "hardlineWithoutBreakParent";
      }
      if (doc3.soft) {
        return "softline";
      }
      return "line";
    }
    if (doc3.type === DOC_TYPE_BREAK_PARENT) {
      const afterHardline = parentParts?.[index - 1]?.type === DOC_TYPE_LINE && parentParts[index - 1].hard;
      return afterHardline ? void 0 : "breakParent";
    }
    if (doc3.type === DOC_TYPE_TRIM) {
      return "trim";
    }
    if (doc3.type === DOC_TYPE_INDENT) {
      return "indent(" + printDoc(doc3.contents) + ")";
    }
    if (doc3.type === DOC_TYPE_ALIGN) {
      return doc3.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + printDoc(doc3.contents) + ")" : doc3.n < 0 ? "dedent(" + printDoc(doc3.contents) + ")" : doc3.n.type === "root" ? "markAsRoot(" + printDoc(doc3.contents) + ")" : "align(" + JSON.stringify(doc3.n) + ", " + printDoc(doc3.contents) + ")";
    }
    if (doc3.type === DOC_TYPE_IF_BREAK) {
      return "ifBreak(" + printDoc(doc3.breakContents) + (doc3.flatContents ? ", " + printDoc(doc3.flatContents) : "") + (doc3.groupId ? (!doc3.flatContents ? ', ""' : "") + `, { groupId: ${printGroupId(doc3.groupId)} }` : "") + ")";
    }
    if (doc3.type === DOC_TYPE_INDENT_IF_BREAK) {
      const optionsParts = [];
      if (doc3.negate) {
        optionsParts.push("negate: true");
      }
      if (doc3.groupId) {
        optionsParts.push(`groupId: ${printGroupId(doc3.groupId)}`);
      }
      const options8 = optionsParts.length > 0 ? `, { ${optionsParts.join(", ")} }` : "";
      return `indentIfBreak(${printDoc(doc3.contents)}${options8})`;
    }
    if (doc3.type === DOC_TYPE_GROUP) {
      const optionsParts = [];
      if (doc3.break && doc3.break !== "propagated") {
        optionsParts.push("shouldBreak: true");
      }
      if (doc3.id) {
        optionsParts.push(`id: ${printGroupId(doc3.id)}`);
      }
      const options8 = optionsParts.length > 0 ? `, { ${optionsParts.join(", ")} }` : "";
      if (doc3.expandedStates) {
        return `conditionalGroup([${doc3.expandedStates.map((part) => printDoc(part)).join(",")}]${options8})`;
      }
      return `group(${printDoc(doc3.contents)}${options8})`;
    }
    if (doc3.type === DOC_TYPE_FILL) {
      return `fill([${doc3.parts.map((part) => printDoc(part)).join(", ")}])`;
    }
    if (doc3.type === DOC_TYPE_LINE_SUFFIX) {
      return "lineSuffix(" + printDoc(doc3.contents) + ")";
    }
    if (doc3.type === DOC_TYPE_LINE_SUFFIX_BOUNDARY) {
      return "lineSuffixBoundary";
    }
    if (doc3.type === DOC_TYPE_LABEL) {
      return `label(${JSON.stringify(doc3.label)}, ${printDoc(doc3.contents)})`;
    }
    if (doc3.type === DOC_TYPE_CURSOR) {
      return "cursor";
    }
    throw new Error("Unknown doc type " + doc3.type);
  }
  function printGroupId(id) {
    if (typeof id !== "symbol") {
      return JSON.stringify(String(id));
    }
    if (id in printedSymbols) {
      return printedSymbols[id];
    }
    const prefix = id.description || "symbol";
    for (let counter = 0; ; counter++) {
      const key2 = prefix + (counter > 0 ? ` #${counter}` : "");
      if (!usedKeysForSymbols.has(key2)) {
        usedKeysForSymbols.add(key2);
        return printedSymbols[id] = `Symbol.for(${JSON.stringify(key2)})`;
      }
    }
  }
}

// node_modules/emoji-regex/index.mjs
var emoji_regex_default = () => {
  return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
};

// node_modules/get-east-asian-width/lookup.js
function isFullWidth(x) {
  return x === 12288 || x >= 65281 && x <= 65376 || x >= 65504 && x <= 65510;
}
function isWide(x) {
  return x >= 4352 && x <= 4447 || x === 8986 || x === 8987 || x === 9001 || x === 9002 || x >= 9193 && x <= 9196 || x === 9200 || x === 9203 || x === 9725 || x === 9726 || x === 9748 || x === 9749 || x >= 9776 && x <= 9783 || x >= 9800 && x <= 9811 || x === 9855 || x >= 9866 && x <= 9871 || x === 9875 || x === 9889 || x === 9898 || x === 9899 || x === 9917 || x === 9918 || x === 9924 || x === 9925 || x === 9934 || x === 9940 || x === 9962 || x === 9970 || x === 9971 || x === 9973 || x === 9978 || x === 9981 || x === 9989 || x === 9994 || x === 9995 || x === 10024 || x === 10060 || x === 10062 || x >= 10067 && x <= 10069 || x === 10071 || x >= 10133 && x <= 10135 || x === 10160 || x === 10175 || x === 11035 || x === 11036 || x === 11088 || x === 11093 || x >= 11904 && x <= 11929 || x >= 11931 && x <= 12019 || x >= 12032 && x <= 12245 || x >= 12272 && x <= 12287 || x >= 12289 && x <= 12350 || x >= 12353 && x <= 12438 || x >= 12441 && x <= 12543 || x >= 12549 && x <= 12591 || x >= 12593 && x <= 12686 || x >= 12688 && x <= 12773 || x >= 12783 && x <= 12830 || x >= 12832 && x <= 12871 || x >= 12880 && x <= 42124 || x >= 42128 && x <= 42182 || x >= 43360 && x <= 43388 || x >= 44032 && x <= 55203 || x >= 63744 && x <= 64255 || x >= 65040 && x <= 65049 || x >= 65072 && x <= 65106 || x >= 65108 && x <= 65126 || x >= 65128 && x <= 65131 || x >= 94176 && x <= 94180 || x >= 94192 && x <= 94198 || x >= 94208 && x <= 101589 || x >= 101631 && x <= 101662 || x >= 101760 && x <= 101874 || x >= 110576 && x <= 110579 || x >= 110581 && x <= 110587 || x === 110589 || x === 110590 || x >= 110592 && x <= 110882 || x === 110898 || x >= 110928 && x <= 110930 || x === 110933 || x >= 110948 && x <= 110951 || x >= 110960 && x <= 111355 || x >= 119552 && x <= 119638 || x >= 119648 && x <= 119670 || x === 126980 || x === 127183 || x === 127374 || x >= 127377 && x <= 127386 || x >= 127488 && x <= 127490 || x >= 127504 && x <= 127547 || x >= 127552 && x <= 127560 || x === 127568 || x === 127569 || x >= 127584 && x <= 127589 || x >= 127744 && x <= 127776 || x >= 127789 && x <= 127797 || x >= 127799 && x <= 127868 || x >= 127870 && x <= 127891 || x >= 127904 && x <= 127946 || x >= 127951 && x <= 127955 || x >= 127968 && x <= 127984 || x === 127988 || x >= 127992 && x <= 128062 || x === 128064 || x >= 128066 && x <= 128252 || x >= 128255 && x <= 128317 || x >= 128331 && x <= 128334 || x >= 128336 && x <= 128359 || x === 128378 || x === 128405 || x === 128406 || x === 128420 || x >= 128507 && x <= 128591 || x >= 128640 && x <= 128709 || x === 128716 || x >= 128720 && x <= 128722 || x >= 128725 && x <= 128728 || x >= 128732 && x <= 128735 || x === 128747 || x === 128748 || x >= 128756 && x <= 128764 || x >= 128992 && x <= 129003 || x === 129008 || x >= 129292 && x <= 129338 || x >= 129340 && x <= 129349 || x >= 129351 && x <= 129535 || x >= 129648 && x <= 129660 || x >= 129664 && x <= 129674 || x >= 129678 && x <= 129734 || x === 129736 || x >= 129741 && x <= 129756 || x >= 129759 && x <= 129770 || x >= 129775 && x <= 129784 || x >= 131072 && x <= 196605 || x >= 196608 && x <= 262141;
}

// src/utilities/narrow-emojis.evaluate.js
var narrow_emojis_evaluate_default = "\xA9\xAE\u203C\u2049\u2122\u2139\u2194\u2195\u2196\u2197\u2198\u2199\u21A9\u21AA\u2328\u23CF\u23F1\u23F2\u23F8\u23F9\u23FA\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600\u2601\u2602\u2603\u2604\u260E\u2611\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638\u2639\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694\u2695\u2696\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F1\u26F7\u26F8\u26F9\u2702\u2708\u2709\u270C\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u2764\u27A1\u2934\u2935\u2B05\u2B06\u2B07";

// src/utilities/get-string-width.js
var notAsciiRegex = /[^\x20-\x7F]/u;
var narrowEmojisSet = new Set(narrow_emojis_evaluate_default);
function getStringWidth(text) {
  if (!text) {
    return 0;
  }
  if (!notAsciiRegex.test(text)) {
    return text.length;
  }
  text = text.replace(
    emoji_regex_default(),
    (match) => narrowEmojisSet.has(match) ? " " : "  "
  );
  let width = 0;
  for (const character of text) {
    const codePoint = character.codePointAt(0);
    if (codePoint <= 31 || codePoint >= 127 && codePoint <= 159) {
      continue;
    }
    if (codePoint >= 768 && codePoint <= 879) {
      continue;
    }
    if (codePoint >= 65024 && codePoint <= 65039) {
      continue;
    }
    width += isFullWidth(codePoint) || isWide(codePoint) ? 2 : 1;
  }
  return width;
}
var get_string_width_default = getStringWidth;

// src/utilities/get-alignment-size.js
function getAlignmentSize(text, tabWidth, startIndex = 0) {
  let size = 0;
  for (let i = startIndex; i < text.length; ++i) {
    if (text[i] === "	") {
      size = size + tabWidth - size % tabWidth;
    } else {
      size++;
    }
  }
  return size;
}
var get_alignment_size_default = getAlignmentSize;

// src/main/ast-to-doc.js
import { builders as __doc_builders3 } from "./doc.mjs";

// src/common/ast-path.js
var AstPath = class {
  constructor(value) {
    this.stack = [value];
  }
  /** @type {string | null} */
  get key() {
    const {
      stack: stack2,
      siblings
    } = this;
    return method_at_default(
      /* OPTIONAL_OBJECT: false */
      0,
      stack2,
      siblings === null ? -2 : -4
    ) ?? null;
  }
  /** @type {number | null} */
  get index() {
    return this.siblings === null ? null : method_at_default(
      /* OPTIONAL_OBJECT: false */
      0,
      this.stack,
      -2
    );
  }
  /** @type {object} */
  get node() {
    return method_at_default(
      /* OPTIONAL_OBJECT: false */
      0,
      this.stack,
      -1
    );
  }
  /** @type {object | null} */
  get parent() {
    return this.getNode(1);
  }
  /** @type {object | null} */
  get grandparent() {
    return this.getNode(2);
  }
  /** @type {boolean} */
  get isInArray() {
    return this.siblings !== null;
  }
  /** @type {object[] | null} */
  get siblings() {
    const {
      stack: stack2
    } = this;
    const maybeArray = method_at_default(
      /* OPTIONAL_OBJECT: false */
      0,
      stack2,
      -3
    );
    return Array.isArray(maybeArray) ? maybeArray : null;
  }
  /** @type {object | null} */
  get next() {
    const {
      siblings
    } = this;
    return siblings === null ? null : siblings[this.index + 1];
  }
  /** @type {object | null} */
  get previous() {
    const {
      siblings
    } = this;
    return siblings === null ? null : siblings[this.index - 1];
  }
  /** @type {boolean} */
  get isFirst() {
    return this.index === 0;
  }
  /** @type {boolean} */
  get isLast() {
    const {
      siblings,
      index
    } = this;
    return siblings !== null && index === siblings.length - 1;
  }
  /** @type {boolean} */
  get isRoot() {
    return this.stack.length === 1;
  }
  /** @type {object} */
  get root() {
    return this.stack[0];
  }
  /** @type {object[]} */
  get ancestors() {
    return [...this.#getAncestors()];
  }
  // The name of the current property is always the penultimate element of
  // this.stack, and always a string/number/symbol.
  getName() {
    const {
      stack: stack2
    } = this;
    const {
      length
    } = stack2;
    if (length > 1) {
      return method_at_default(
        /* OPTIONAL_OBJECT: false */
        0,
        stack2,
        -2
      );
    }
    return null;
  }
  // The value of the current property is always the final element of
  // this.stack.
  getValue() {
    return method_at_default(
      /* OPTIONAL_OBJECT: false */
      0,
      this.stack,
      -1
    );
  }
  getNode(count = 0) {
    const stackIndex = this.#getNodeStackIndex(count);
    return stackIndex === -1 ? null : this.stack[stackIndex];
  }
  getParentNode(count = 0) {
    return this.getNode(count + 1);
  }
  #getNodeStackIndex(count) {
    const {
      stack: stack2
    } = this;
    for (let i = stack2.length - 1; i >= 0; i -= 2) {
      if (!Array.isArray(stack2[i]) && --count < 0) {
        return i;
      }
    }
    return -1;
  }
  // Temporarily push properties named by string arguments given after the
  // callback function onto this.stack, then call the callback with a
  // reference to this (modified) AstPath object. Note that the stack will
  // be restored to its original state after the callback is finished, so it
  // is probably a mistake to retain a reference to the path.
  call(callback, ...names) {
    const {
      stack: stack2
    } = this;
    const {
      length
    } = stack2;
    let value = method_at_default(
      /* OPTIONAL_OBJECT: false */
      0,
      stack2,
      -1
    );
    for (const name of names) {
      value = value?.[name];
      stack2.push(name, value);
    }
    try {
      return callback(this);
    } finally {
      stack2.length = length;
    }
  }
  /**
   * @template {(path: AstPath) => any} T
   * @param {T} callback
   * @param {number} [count=0]
   * @returns {ReturnType<T>}
   */
  callParent(callback, count = 0) {
    const stackIndex = this.#getNodeStackIndex(count + 1);
    const parentValues = this.stack.splice(stackIndex + 1);
    try {
      return callback(this);
    } finally {
      this.stack.push(...parentValues);
    }
  }
  // Similar to AstPath.prototype.call, except that the value obtained by
  // accessing this.getValue()[name1][name2]... should be array. The
  // callback will be called with a reference to this path object for each
  // element of the array.
  each(callback, ...names) {
    const {
      stack: stack2
    } = this;
    const {
      length
    } = stack2;
    let value = method_at_default(
      /* OPTIONAL_OBJECT: false */
      0,
      stack2,
      -1
    );
    for (const name of names) {
      value = value[name];
      stack2.push(name, value);
    }
    try {
      for (let i = 0; i < value.length; ++i) {
        stack2.push(i, value[i]);
        callback(this, i, value);
        stack2.length -= 2;
      }
    } finally {
      stack2.length = length;
    }
  }
  // Similar to AstPath.prototype.each, except that the results of the
  // callback function invocations are stored in an array and returned at
  // the end of the iteration.
  map(callback, ...names) {
    const result = [];
    this.each((path15, index, value) => {
      result[index] = callback(path15, index, value);
    }, ...names);
    return result;
  }
  /**
   * @param {...(
   *   | ((node: any, name: string | null, number: number | null) => boolean)
   *   | undefined
   * )} predicates
   */
  match(...predicates) {
    let stackPointer = this.stack.length - 1;
    let name = null;
    let node = this.stack[stackPointer--];
    for (const predicate of predicates) {
      if (node === void 0) {
        return false;
      }
      let number = null;
      if (typeof name === "number") {
        number = name;
        name = this.stack[stackPointer--];
        node = this.stack[stackPointer--];
      }
      if (predicate && !predicate(node, name, number)) {
        return false;
      }
      name = this.stack[stackPointer--];
      node = this.stack[stackPointer--];
    }
    return true;
  }
  /**
   * Traverses the ancestors of the current node heading toward the tree root
   * until it finds a node that matches the provided predicate function. Will
   * return the first matching ancestor. If no such node exists, returns undefined.
   * @param {(node: any) => boolean} predicate
   * @internal Unstable API. Don't use in plugins for now.
   */
  findAncestor(predicate) {
    for (const node of this.#getAncestors()) {
      if (predicate(node)) {
        return node;
      }
    }
  }
  /**
   * Traverses the ancestors of the current node heading toward the tree root
   * until it finds a node that matches the provided predicate function.
   * returns true if matched node found.
   * @param {(node: any) => boolean} predicate
   * @returns {boolean}
   * @internal Unstable API. Don't use in plugins for now.
   */
  hasAncestor(predicate) {
    for (const node of this.#getAncestors()) {
      if (predicate(node)) {
        return true;
      }
    }
    return false;
  }
  *#getAncestors() {
    const {
      stack: stack2
    } = this;
    for (let index = stack2.length - 3; index >= 0; index -= 2) {
      const value = stack2[index];
      if (!Array.isArray(value)) {
        yield value;
      }
    }
  }
};
var ast_path_default = AstPath;

// src/utilities/is-object.js
function isObject(object) {
  return object !== null && typeof object === "object";
}
var is_object_default = isObject;

// src/utilities/skip.js
function skip(characters) {
  return (text, startIndex, options8) => {
    const backwards = Boolean(options8?.backwards);
    if (startIndex === false) {
      return false;
    }
    const { length } = text;
    let cursor2 = startIndex;
    while (cursor2 >= 0 && cursor2 < length) {
      const character = text.charAt(cursor2);
      if (characters instanceof RegExp) {
        if (!characters.test(character)) {
          return cursor2;
        }
      } else if (!characters.includes(character)) {
        return cursor2;
      }
      backwards ? cursor2-- : cursor2++;
    }
    if (cursor2 === -1 || cursor2 === length) {
      return cursor2;
    }
    return false;
  };
}
var skipWhitespace = skip(/\s/u);
var skipSpaces = skip(" 	");
var skipToLineEnd = skip(",; 	");
var skipEverythingButNewLine = skip(/[^\n\r]/u);

// src/utilities/skip-newline.js
var isNewlineCharacter = (character) => character === "\n" || character === "\r" || character === "\u2028" || character === "\u2029";
function skipNewline(text, startIndex, options8) {
  const backwards = Boolean(options8?.backwards);
  if (startIndex === false) {
    return false;
  }
  const character = text.charAt(startIndex);
  if (backwards) {
    if (text.charAt(startIndex - 1) === "\r" && character === "\n") {
      return startIndex - 2;
    }
    if (isNewlineCharacter(character)) {
      return startIndex - 1;
    }
  } else {
    if (character === "\r" && text.charAt(startIndex + 1) === "\n") {
      return startIndex + 2;
    }
    if (isNewlineCharacter(character)) {
      return startIndex + 1;
    }
  }
  return startIndex;
}
var skip_newline_default = skipNewline;

// src/utilities/has-newline.js
function hasNewline(text, startIndex, options8 = {}) {
  const idx = skipSpaces(
    text,
    options8.backwards ? startIndex - 1 : startIndex,
    options8
  );
  const idx2 = skip_newline_default(text, idx, options8);
  return idx !== idx2;
}
var has_newline_default = hasNewline;

// src/utilities/is-non-empty-array.js
function isNonEmptyArray(object) {
  return Array.isArray(object) && object.length > 0;
}
var is_non_empty_array_default = isNonEmptyArray;

// src/utilities/ast.js
function* getChildren(node, options8) {
  const { getVisitorKeys, filter: filter2 = () => true } = options8;
  const isMatchedNode = (node2) => is_object_default(node2) && filter2(node2);
  for (const key2 of getVisitorKeys(node)) {
    const value = node[key2];
    if (Array.isArray(value)) {
      for (const child of value) {
        if (isMatchedNode(child)) {
          yield child;
        }
      }
    } else if (isMatchedNode(value)) {
      yield value;
    }
  }
}
function* getDescendants(node, options8) {
  const queue = [node];
  for (let index = 0; index < queue.length; index++) {
    const node2 = queue[index];
    for (const child of getChildren(node2, options8)) {
      yield child;
      queue.push(child);
    }
  }
}
function isLeaf(node, options8) {
  return getChildren(node, options8).next().done;
}

// src/main/utilities/get-sorted-child-nodes.js
function getSortedChildNodes(node, ancestors, options8) {
  const { cache: childNodesCache2 } = options8;
  if (childNodesCache2.has(node)) {
    return childNodesCache2.get(node);
  }
  const { filter: filter2 } = options8;
  if (!filter2) {
    return [];
  }
  let childAncestors;
  const childNodes = (options8.getChildren?.(node, options8) ?? [
    ...getChildren(node, { getVisitorKeys: options8.getVisitorKeys })
  ]).flatMap((child) => {
    childAncestors ?? (childAncestors = [node, ...ancestors]);
    return filter2(child, childAncestors) ? [child] : getSortedChildNodes(child, childAncestors, options8);
  });
  const { locStart, locEnd } = options8;
  childNodes.sort(
    (nodeA, nodeB) => locStart(nodeA) - locStart(nodeB) || locEnd(nodeA) - locEnd(nodeB)
  );
  childNodesCache2.set(node, childNodes);
  return childNodes;
}
var get_sorted_child_nodes_default = getSortedChildNodes;

// src/main/comments/utilities.js
function describeNodeForDebugging(node) {
  const nodeType = node.type || node.kind || "(unknown type)";
  let nodeName = String(
    node.name || node.id && (typeof node.id === "object" ? node.id.name : node.id) || node.key && (typeof node.key === "object" ? node.key.name : node.key) || node.value && (typeof node.value === "object" ? "" : String(node.value)) || node.operator || ""
  );
  if (nodeName.length > 20) {
    nodeName = nodeName.slice(0, 19) + "\u2026";
  }
  return nodeType + (nodeName ? " " + nodeName : "");
}
function addCommentHelper(node, comment) {
  const comments = node.comments ?? (node.comments = []);
  comments.push(comment);
  comment.printed = false;
  comment.nodeDescription = describeNodeForDebugging(node);
}
function addLeadingComment(node, comment) {
  comment.leading = true;
  comment.trailing = false;
  addCommentHelper(node, comment);
}
function addDanglingComment(node, comment, marker) {
  comment.leading = false;
  comment.trailing = false;
  if (marker) {
    comment.marker = marker;
  }
  addCommentHelper(node, comment);
}
function addTrailingComment(node, comment) {
  comment.leading = false;
  comment.trailing = true;
  addCommentHelper(node, comment);
}

// src/main/comments/attach.js
var childNodesCache = /* @__PURE__ */ new WeakMap();
function decorateComment(node, comment, options8, enclosingNode, ancestors = []) {
  const { locStart, locEnd } = options8;
  const commentStart = locStart(comment);
  const commentEnd = locEnd(comment);
  const childNodes = get_sorted_child_nodes_default(node, ancestors, {
    cache: childNodesCache,
    locStart,
    locEnd,
    getVisitorKeys: options8.getVisitorKeys,
    filter: options8.printer.canAttachComment,
    getChildren: options8.printer.getCommentChildNodes
  });
  let precedingNode;
  let followingNode;
  let left = 0;
  let right = childNodes.length;
  while (left < right) {
    const middle = left + right >> 1;
    const child = childNodes[middle];
    const start = locStart(child);
    const end = locEnd(child);
    if (start <= commentStart && commentEnd <= end) {
      return decorateComment(child, comment, options8, child, [
        child,
        ...ancestors
      ]);
    }
    if (end <= commentStart) {
      precedingNode = child;
      left = middle + 1;
      continue;
    }
    if (commentEnd <= start) {
      followingNode = child;
      right = middle;
      continue;
    }
    throw new Error("Comment location overlaps with node location");
  }
  if (enclosingNode?.type === "TemplateLiteral") {
    const { quasis } = enclosingNode;
    const commentIndex = findExpressionIndexForComment(
      quasis,
      comment,
      options8
    );
    if (precedingNode && findExpressionIndexForComment(quasis, precedingNode, options8) !== commentIndex) {
      precedingNode = null;
    }
    if (followingNode && findExpressionIndexForComment(quasis, followingNode, options8) !== commentIndex) {
      followingNode = null;
    }
  }
  return { enclosingNode, precedingNode, followingNode };
}
var returnFalse = () => false;
function attachComments(ast, options8) {
  const { comments } = ast;
  delete ast.comments;
  if (!is_non_empty_array_default(comments) || !options8.printer.canAttachComment) {
    return;
  }
  const tiesToBreak = [];
  const {
    printer: {
      features: { experimental_avoidAstMutation: avoidAstMutation },
      handleComments = {}
    },
    originalText: text
  } = options8;
  const {
    ownLine: handleOwnLineComment = returnFalse,
    endOfLine: handleEndOfLineComment = returnFalse,
    remaining: handleRemainingComment = returnFalse
  } = handleComments;
  const decoratedComments = comments.map((comment, index) => ({
    ...decorateComment(ast, comment, options8),
    comment,
    text,
    options: options8,
    ast,
    isLastComment: comments.length - 1 === index
  }));
  for (const [index, context] of decoratedComments.entries()) {
    const {
      comment,
      precedingNode,
      enclosingNode,
      followingNode,
      text: text2,
      options: options9,
      ast: ast2,
      isLastComment
    } = context;
    let args;
    if (avoidAstMutation) {
      args = [context];
    } else {
      comment.enclosingNode = enclosingNode;
      comment.precedingNode = precedingNode;
      comment.followingNode = followingNode;
      args = [comment, text2, options9, ast2, isLastComment];
    }
    if (isOwnLineComment(text2, options9, decoratedComments, index)) {
      comment.placement = "ownLine";
      if (handleOwnLineComment(...args)) {
      } else if (followingNode) {
        addLeadingComment(followingNode, comment);
      } else if (precedingNode) {
        addTrailingComment(precedingNode, comment);
      } else if (enclosingNode) {
        addDanglingComment(enclosingNode, comment);
      } else {
        addDanglingComment(ast2, comment);
      }
    } else if (isEndOfLineComment(text2, options9, decoratedComments, index)) {
      comment.placement = "endOfLine";
      if (handleEndOfLineComment(...args)) {
      } else if (precedingNode) {
        addTrailingComment(precedingNode, comment);
      } else if (followingNode) {
        addLeadingComment(followingNode, comment);
      } else if (enclosingNode) {
        addDanglingComment(enclosingNode, comment);
      } else {
        addDanglingComment(ast2, comment);
      }
    } else {
      comment.placement = "remaining";
      if (handleRemainingComment(...args)) {
      } else if (precedingNode && followingNode) {
        const tieCount = tiesToBreak.length;
        if (tieCount > 0) {
          const lastTie = tiesToBreak[tieCount - 1];
          if (lastTie.followingNode !== followingNode) {
            breakTies(tiesToBreak, options9);
          }
        }
        tiesToBreak.push(context);
      } else if (precedingNode) {
        addTrailingComment(precedingNode, comment);
      } else if (followingNode) {
        addLeadingComment(followingNode, comment);
      } else if (enclosingNode) {
        addDanglingComment(enclosingNode, comment);
      } else {
        addDanglingComment(ast2, comment);
      }
    }
  }
  breakTies(tiesToBreak, options8);
  if (!avoidAstMutation) {
    for (const comment of comments) {
      delete comment.precedingNode;
      delete comment.enclosingNode;
      delete comment.followingNode;
    }
  }
}
var isAllEmptyAndNoLineBreak = (text) => !/[\S\n\u2028\u2029]/u.test(text);
function isOwnLineComment(text, options8, decoratedComments, commentIndex) {
  const { comment, precedingNode } = decoratedComments[commentIndex];
  const { locStart, locEnd } = options8;
  let start = locStart(comment);
  if (precedingNode) {
    for (let index = commentIndex - 1; index >= 0; index--) {
      const { comment: comment2, precedingNode: currentCommentPrecedingNode } = decoratedComments[index];
      if (currentCommentPrecedingNode !== precedingNode || !isAllEmptyAndNoLineBreak(text.slice(locEnd(comment2), start))) {
        break;
      }
      start = locStart(comment2);
    }
  }
  return has_newline_default(text, start, { backwards: true });
}
function isEndOfLineComment(text, options8, decoratedComments, commentIndex) {
  const { comment, followingNode } = decoratedComments[commentIndex];
  const { locStart, locEnd } = options8;
  let end = locEnd(comment);
  if (followingNode) {
    for (let index = commentIndex + 1; index < decoratedComments.length; index++) {
      const { comment: comment2, followingNode: currentCommentFollowingNode } = decoratedComments[index];
      if (currentCommentFollowingNode !== followingNode || !isAllEmptyAndNoLineBreak(text.slice(end, locStart(comment2)))) {
        break;
      }
      end = locEnd(comment2);
    }
  }
  return has_newline_default(text, end);
}
function breakTies(tiesToBreak, options8) {
  const tieCount = tiesToBreak.length;
  if (tieCount === 0) {
    return;
  }
  const { precedingNode, followingNode } = tiesToBreak[0];
  let gapEndPos = options8.locStart(followingNode);
  let indexOfFirstLeadingComment;
  for (indexOfFirstLeadingComment = tieCount; indexOfFirstLeadingComment > 0; --indexOfFirstLeadingComment) {
    const {
      comment,
      precedingNode: currentCommentPrecedingNode,
      followingNode: currentCommentFollowingNode
    } = tiesToBreak[indexOfFirstLeadingComment - 1];
    strictEqual(currentCommentPrecedingNode, precedingNode);
    strictEqual(currentCommentFollowingNode, followingNode);
    const gap = options8.originalText.slice(options8.locEnd(comment), gapEndPos);
    if (options8.printer.isGap?.(gap, options8) ?? /^[\s(]*$/u.test(gap)) {
      gapEndPos = options8.locStart(comment);
    } else {
      break;
    }
  }
  for (const [i, { comment }] of tiesToBreak.entries()) {
    if (i < indexOfFirstLeadingComment) {
      addTrailingComment(precedingNode, comment);
    } else {
      addLeadingComment(followingNode, comment);
    }
  }
  for (const node of [precedingNode, followingNode]) {
    if (node.comments && node.comments.length > 1) {
      node.comments.sort((a, b) => options8.locStart(a) - options8.locStart(b));
    }
  }
  tiesToBreak.length = 0;
}
function findExpressionIndexForComment(quasis, comment, options8) {
  const startPos = options8.locStart(comment) - 1;
  for (let i = 1; i < quasis.length; ++i) {
    if (startPos < options8.locStart(quasis[i])) {
      return i - 1;
    }
  }
  return 0;
}

// src/main/comments/print.js
import { builders as __doc_builders } from "./doc.mjs";

// src/utilities/is-previous-line-empty.js
function isPreviousLineEmpty(text, startIndex) {
  let idx = startIndex - 1;
  idx = skipSpaces(text, idx, { backwards: true });
  idx = skip_newline_default(text, idx, { backwards: true });
  idx = skipSpaces(text, idx, { backwards: true });
  const idx2 = skip_newline_default(text, idx, { backwards: true });
  return idx !== idx2;
}
var is_previous_line_empty_default = isPreviousLineEmpty;

// src/main/comments/print.js
var {
  breakParent,
  hardline,
  indent,
  join: join3,
  line: line2,
  lineSuffix
} = __doc_builders;
function printComment(path15, options8) {
  const comment = path15.node;
  comment.printed = true;
  return options8.printer.printComment(path15, options8);
}
function printLeadingComment(path15, options8) {
  const comment = path15.node;
  const parts = [printComment(path15, options8)];
  const {
    printer,
    originalText,
    locStart,
    locEnd
  } = options8;
  const isBlock = printer.isBlockComment?.(comment);
  if (isBlock) {
    const lineBreak = has_newline_default(originalText, locEnd(comment)) ? has_newline_default(originalText, locStart(comment), {
      backwards: true
    }) ? hardline : line2 : " ";
    parts.push(lineBreak);
  } else {
    parts.push(hardline);
  }
  const index = skip_newline_default(originalText, skipSpaces(originalText, locEnd(comment)));
  if (index !== false && has_newline_default(originalText, index)) {
    parts.push(hardline);
  }
  return parts;
}
function printTrailingComment(path15, options8, previousComment) {
  const comment = path15.node;
  const printed = printComment(path15, options8);
  const {
    printer,
    originalText,
    locStart
  } = options8;
  const isBlock = printer.isBlockComment?.(comment);
  if (previousComment?.hasLineSuffix && !previousComment?.isBlock || has_newline_default(originalText, locStart(comment), {
    backwards: true
  })) {
    const isLineBeforeEmpty = is_previous_line_empty_default(originalText, locStart(comment));
    return {
      doc: lineSuffix([hardline, isLineBeforeEmpty ? hardline : "", printed]),
      isBlock,
      hasLineSuffix: true
    };
  }
  if (!isBlock || previousComment?.hasLineSuffix) {
    return {
      doc: [lineSuffix([" ", printed]), breakParent],
      isBlock,
      hasLineSuffix: true
    };
  }
  return {
    doc: [" ", printed],
    isBlock,
    hasLineSuffix: false
  };
}
function printCommentsSeparately(path15, options8) {
  const value = path15.node;
  if (!value) {
    return {};
  }
  const ignored = options8[Symbol.for("printedComments")];
  const comments = (value.comments || []).filter((comment) => !ignored.has(comment));
  if (comments.length === 0) {
    return {
      leading: "",
      trailing: ""
    };
  }
  const leadingParts = [];
  const trailingParts = [];
  let printedTrailingComment;
  path15.each(() => {
    const comment = path15.node;
    if (ignored?.has(comment)) {
      return;
    }
    const {
      leading,
      trailing
    } = comment;
    if (leading) {
      leadingParts.push(printLeadingComment(path15, options8));
    } else if (trailing) {
      printedTrailingComment = printTrailingComment(path15, options8, printedTrailingComment);
      trailingParts.push(printedTrailingComment.doc);
    }
  }, "comments");
  return {
    leading: leadingParts,
    trailing: trailingParts
  };
}
function printComments(path15, doc2, options8) {
  const {
    leading,
    trailing
  } = printCommentsSeparately(path15, options8);
  if (!leading && !trailing) {
    return doc2;
  }
  return inheritLabel(doc2, (doc3) => [leading, doc3, trailing]);
}
function ensureAllCommentsPrinted(options8) {
  const {
    [Symbol.for("comments")]: comments,
    [Symbol.for("printedComments")]: printedComments
  } = options8;
  for (const comment of comments) {
    if (!comment.printed && !printedComments.has(comment)) {
      throw new Error('Comment "' + comment.value.trim() + '" was not printed. Please report this error!');
    }
    delete comment.printed;
  }
}

// src/main/create-print-pre-check-function.js
var create_print_pre_check_function_default = true ? () => noop_default : createPrintPreCheckFunction;

// src/main/multiparser.js
import { utils as __doc_utils } from "./doc.mjs";

// src/main/core-options.evaluate.js
var core_options_evaluate_default = {
  "checkIgnorePragma": {
    "category": "Special",
    "type": "boolean",
    "default": false,
    "description": "Check whether the file's first docblock comment contains '@noprettier' or '@noformat' to determine if it should be formatted.",
    "cliCategory": "Other"
  },
  "cursorOffset": {
    "category": "Special",
    "type": "int",
    "default": -1,
    "range": {
      "start": -1,
      "end": Infinity,
      "step": 1
    },
    "description": "Print (to stderr) where a cursor at the given position would move to after formatting.",
    "cliCategory": "Editor"
  },
  "endOfLine": {
    "category": "Global",
    "type": "choice",
    "default": "lf",
    "description": "Which end of line characters to apply.",
    "choices": [
      {
        "value": "lf",
        "description": "Line Feed only (\\n), common on Linux and macOS as well as inside git repos"
      },
      {
        "value": "crlf",
        "description": "Carriage Return + Line Feed characters (\\r\\n), common on Windows"
      },
      {
        "value": "cr",
        "description": "Carriage Return character only (\\r), used very rarely"
      },
      {
        "value": "auto",
        "description": "Maintain existing\n(mixed values within one file are normalised by looking at what's used after the first line)"
      }
    ]
  },
  "filepath": {
    "category": "Special",
    "type": "path",
    "description": "Specify the input filepath. This will be used to do parser inference.",
    "cliName": "stdin-filepath",
    "cliCategory": "Other",
    "cliDescription": "Path to the file to pretend that stdin comes from."
  },
  "insertPragma": {
    "category": "Special",
    "type": "boolean",
    "default": false,
    "description": "Insert @format pragma into file's first docblock comment.",
    "cliCategory": "Other"
  },
  "parser": {
    "category": "Global",
    "type": "choice",
    "default": void 0,
    "description": "Which parser to use.",
    "exception": (value) => typeof value === "string" || typeof value === "function",
    "choices": [
      {
        "value": "flow",
        "description": "Flow"
      },
      {
        "value": "babel",
        "description": "JavaScript"
      },
      {
        "value": "babel-flow",
        "description": "Flow"
      },
      {
        "value": "babel-ts",
        "description": "TypeScript"
      },
      {
        "value": "typescript",
        "description": "TypeScript"
      },
      {
        "value": "acorn",
        "description": "JavaScript"
      },
      {
        "value": "espree",
        "description": "JavaScript"
      },
      {
        "value": "meriyah",
        "description": "JavaScript"
      },
      {
        "value": "css",
        "description": "CSS"
      },
      {
        "value": "less",
        "description": "Less"
      },
      {
        "value": "scss",
        "description": "SCSS"
      },
      {
        "value": "json",
        "description": "JSON"
      },
      {
        "value": "json5",
        "description": "JSON5"
      },
      {
        "value": "jsonc",
        "description": "JSON with Comments"
      },
      {
        "value": "json-stringify",
        "description": "JSON.stringify"
      },
      {
        "value": "graphql",
        "description": "GraphQL"
      },
      {
        "value": "markdown",
        "description": "Markdown"
      },
      {
        "value": "mdx",
        "description": "MDX"
      },
      {
        "value": "vue",
        "description": "Vue"
      },
      {
        "value": "yaml",
        "description": "YAML"
      },
      {
        "value": "glimmer",
        "description": "Ember / Handlebars"
      },
      {
        "value": "html",
        "description": "HTML"
      },
      {
        "value": "angular",
        "description": "Angular"
      },
      {
        "value": "lwc",
        "description": "Lightning Web Components"
      },
      {
        "value": "mjml",
        "description": "MJML"
      }
    ]
  },
  "plugins": {
    "type": "path",
    "array": true,
    "default": [
      {
        "value": []
      }
    ],
    "category": "Global",
    "description": "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",
    "exception": (value) => typeof value === "string" || typeof value === "object",
    "cliName": "plugin",
    "cliCategory": "Config"
  },
  "printWidth": {
    "category": "Global",
    "type": "int",
    "default": 80,
    "description": "The line length where Prettier will try wrap.",
    "range": {
      "start": 0,
      "end": Infinity,
      "step": 1
    }
  },
  "rangeEnd": {
    "category": "Special",
    "type": "int",
    "default": Infinity,
    "range": {
      "start": 0,
      "end": Infinity,
      "step": 1
    },
    "description": "Format code ending at a given character offset (exclusive).\nThe range will extend forwards to the end of the selected statement.",
    "cliCategory": "Editor"
  },
  "rangeStart": {
    "category": "Special",
    "type": "int",
    "default": 0,
    "range": {
      "start": 0,
      "end": Infinity,
      "step": 1
    },
    "description": "Format code starting at a given character offset.\nThe range will extend backwards to the start of the first line containing the selected statement.",
    "cliCategory": "Editor"
  },
  "requirePragma": {
    "category": "Special",
    "type": "boolean",
    "default": false,
    "description": "Require either '@prettier' or '@format' to be present in the file's first docblock comment in order for it to be formatted.",
    "cliCategory": "Other"
  },
  "tabWidth": {
    "type": "int",
    "category": "Global",
    "default": 2,
    "description": "Number of spaces per indentation level.",
    "range": {
      "start": 0,
      "end": Infinity,
      "step": 1
    }
  },
  "useTabs": {
    "category": "Global",
    "type": "boolean",
    "default": false,
    "description": "Indent with tabs instead of spaces."
  },
  "embeddedLanguageFormatting": {
    "category": "Global",
    "type": "choice",
    "default": "auto",
    "description": "Control how Prettier formats quoted code embedded in the file.",
    "choices": [
      {
        "value": "auto",
        "description": "Format embedded code if Prettier can automatically identify it."
      },
      {
        "value": "off",
        "description": "Never automatically format embedded code."
      }
    ]
  }
};

// src/main/support.js
function getSupportInfo({
  plugins = [],
  showDeprecated = false
} = {}) {
  const languages2 = plugins.flatMap((plugin) => plugin.languages ?? []);
  const options8 = [];
  for (const option of normalizeOptionSettings(Object.assign({}, ...plugins.map(({
    options: options9
  }) => options9), core_options_evaluate_default))) {
    if (!showDeprecated && option.deprecated) {
      continue;
    }
    if (Array.isArray(option.choices)) {
      if (!showDeprecated) {
        option.choices = option.choices.filter((choice) => !choice.deprecated);
      }
      if (option.name === "parser") {
        option.choices = [...option.choices, ...collectParsersFromLanguages(option.choices, languages2, plugins)];
      }
    }
    option.pluginDefaults = Object.fromEntries(plugins.filter((plugin) => plugin.defaultOptions?.[option.name] !== void 0).map((plugin) => [plugin.name, plugin.defaultOptions[option.name]]));
    options8.push(option);
  }
  return {
    languages: languages2,
    options: options8
  };
}
function* collectParsersFromLanguages(parserChoices, languages2, plugins) {
  const existingParsers = new Set(parserChoices.map((choice) => choice.value));
  for (const language of languages2) {
    if (language.parsers) {
      for (const parserName of language.parsers) {
        if (!existingParsers.has(parserName)) {
          existingParsers.add(parserName);
          const plugin = plugins.find((plugin2) => plugin2.parsers && Object.prototype.hasOwnProperty.call(plugin2.parsers, parserName));
          let description = language.name;
          if (plugin?.name) {
            description += ` (plugin: ${plugin.name})`;
          }
          yield {
            value: parserName,
            description
          };
        }
      }
    }
  }
}
function normalizeOptionSettings(settings) {
  const options8 = [];
  for (const [name, originalOption] of Object.entries(settings)) {
    const option = {
      name,
      ...originalOption
    };
    if (Array.isArray(option.default)) {
      option.default = method_at_default(
        /* OPTIONAL_OBJECT: false */
        0,
        option.default,
        -1
      ).value;
    }
    options8.push(option);
  }
  return options8;
}

// scripts/build/shims/method-to-reversed.js
var arrayToReversed = Array.prototype.toReversed ?? function() {
  return [...this].reverse();
};
var toReversed = createMethodShim("toReversed", function() {
  if (Array.isArray(this)) {
    return arrayToReversed;
  }
});
var method_to_reversed_default = toReversed;

// src/universal/index.js
import path11 from "path";

// src/utilities/get-interpreter.js
var import_n_readlines = __toESM(require_readlines(), 1);
function getInterpreter(file) {
  try {
    const liner = new import_n_readlines.default(file);
    const firstLineBuffer = liner.next();
    if (firstLineBuffer === false) {
      return;
    }
    liner.close();
    const firstLine = firstLineBuffer.toString("utf8");
    const m1 = firstLine.match(/^#!\/(?:usr\/)?bin\/env\s+(\S+)/u);
    if (m1) {
      return m1[1];
    }
    const m2 = firstLine.match(/^#!\/(?:usr\/(?:local\/)?)?bin\/(\S+)/u);
    if (m2) {
      return m2[1];
    }
  } catch {
  }
}
var get_interpreter_default = getInterpreter;

// src/universal/index.js
import { fileURLToPath as fileURLToPath5 } from "url";
var getFileBasename = (file) => {
  try {
    return path11.basename(toPath(file));
  } catch {
    return "";
  }
};

// src/utilities/infer-parser.js
function getLanguageByFileName(languages2, file) {
  if (!file) {
    return;
  }
  const basename = getFileBasename(file).toLowerCase();
  return languages2.find(({
    filenames
  }) => filenames?.some((name) => name.toLowerCase() === basename)) ?? languages2.find(({
    extensions
  }) => extensions?.some((extension) => basename.endsWith(extension)));
}
function getLanguageByLanguageName(languages2, languageName) {
  if (!languageName) {
    return;
  }
  return languages2.find(({
    name
  }) => name.toLowerCase() === languageName) ?? languages2.find(({
    aliases
  }) => aliases?.includes(languageName)) ?? languages2.find(({
    extensions
  }) => extensions?.includes(`.${languageName}`));
}
function getLanguageByInterpreterNodejs(languages2, file) {
  if (!file || getFileBasename(file).includes(".")) {
    return;
  }
  const languagesWithInterpreters = languages2.filter(({
    interpreters
  }) => is_non_empty_array_default(interpreters));
  if (languagesWithInterpreters.length === 0) {
    return;
  }
  const interpreter = get_interpreter_default(file);
  if (!interpreter) {
    return;
  }
  return languagesWithInterpreters.find(({
    interpreters
  }) => interpreters.includes(interpreter));
}
var getLanguageByInterpreter = false ? void 0 : getLanguageByInterpreterNodejs;
function getLanguageByIsSupported(languages2, file) {
  if (!file) {
    return;
  }
  if (isUrl(file)) {
    try {
      file = fileURLToPath5(file);
    } catch {
      return;
    }
  }
  if (typeof file !== "string") {
    return;
  }
  return languages2.find(({
    isSupported
  }) => isSupported?.({
    filepath: file
  }));
}
function inferParser(options8, fileInfo) {
  const languages2 = method_to_reversed_default(
    /* OPTIONAL_OBJECT: false */
    0,
    options8.plugins
  ).flatMap((plugin) => (
    // @ts-expect-error -- Safe
    plugin.languages ?? []
  ));
  const language = getLanguageByLanguageName(languages2, fileInfo.language) ?? getLanguageByFileName(languages2, fileInfo.physicalFile) ?? getLanguageByFileName(languages2, fileInfo.file) ?? getLanguageByIsSupported(languages2, fileInfo.physicalFile) ?? getLanguageByIsSupported(languages2, fileInfo.file) ?? getLanguageByInterpreter?.(languages2, fileInfo.physicalFile);
  return language?.parsers[0];
}
var infer_parser_default = inferParser;

// src/main/normalize-options.js
var hasDeprecationWarned;
function normalizeOptions(options8, optionInfos, {
  logger = false,
  isCLI = false,
  passThrough = false,
  FlagSchema,
  descriptor
} = {}) {
  if (isCLI) {
    if (!FlagSchema) {
      throw new Error("'FlagSchema' option is required.");
    }
    if (!descriptor) {
      throw new Error("'descriptor' option is required.");
    }
  } else {
    descriptor = apiDescriptor;
  }
  const unknown = !passThrough ? (key2, value, options9) => {
    const {
      _,
      ...schemas2
    } = options9.schemas;
    return levenUnknownHandler(key2, value, {
      ...options9,
      schemas: schemas2
    });
  } : Array.isArray(passThrough) ? (key2, value) => !passThrough.includes(key2) ? void 0 : {
    [key2]: value
  } : (key2, value) => ({
    [key2]: value
  });
  const schemas = optionInfosToSchemas(optionInfos, {
    isCLI,
    FlagSchema
  });
  const normalizer = new Normalizer(schemas, {
    logger,
    unknown,
    descriptor
  });
  const shouldSuppressDuplicateDeprecationWarnings = logger !== false;
  if (shouldSuppressDuplicateDeprecationWarnings && hasDeprecationWarned) {
    normalizer._hasDeprecationWarned = hasDeprecationWarned;
  }
  const normalized = normalizer.normalize(options8);
  if (shouldSuppressDuplicateDeprecationWarnings) {
    hasDeprecationWarned = normalizer._hasDeprecationWarned;
  }
  return normalized;
}
function optionInfosToSchemas(optionInfos, {
  isCLI,
  FlagSchema
}) {
  const schemas = [];
  if (isCLI) {
    schemas.push(AnySchema.create({
      name: "_"
    }));
  }
  for (const optionInfo of optionInfos) {
    schemas.push(optionInfoToSchema(optionInfo, {
      isCLI,
      optionInfos,
      FlagSchema
    }));
    if (optionInfo.alias && isCLI) {
      schemas.push(AliasSchema.create({
        // @ts-expect-error
        name: optionInfo.alias,
        sourceName: optionInfo.name
      }));
    }
  }
  return schemas;
}
function optionInfoToSchema(optionInfo, {
  isCLI,
  optionInfos,
  FlagSchema
}) {
  const {
    name
  } = optionInfo;
  const parameters = {
    name
  };
  let SchemaConstructor;
  const handlers = {};
  switch (optionInfo.type) {
    case "int":
      SchemaConstructor = IntegerSchema;
      if (isCLI) {
        parameters.preprocess = Number;
      }
      break;
    case "string":
      SchemaConstructor = StringSchema;
      break;
    case "choice":
      SchemaConstructor = ChoiceSchema;
      parameters.choices = optionInfo.choices.map((choiceInfo) => choiceInfo?.redirect ? {
        ...choiceInfo,
        redirect: {
          to: {
            key: optionInfo.name,
            value: choiceInfo.redirect
          }
        }
      } : choiceInfo);
      break;
    case "boolean":
      SchemaConstructor = BooleanSchema;
      break;
    case "flag":
      SchemaConstructor = FlagSchema;
      parameters.flags = optionInfos.flatMap((optionInfo2) => [optionInfo2.alias, optionInfo2.description && optionInfo2.name, optionInfo2.oppositeDescription && `no-${optionInfo2.name}`].filter(Boolean));
      break;
    case "path":
      SchemaConstructor = StringSchema;
      break;
    default:
      throw new Error(`Unexpected type ${optionInfo.type}`);
  }
  if (optionInfo.exception) {
    parameters.validate = (value, schema, utils) => optionInfo.exception(value) || schema.validate(value, utils);
  } else {
    parameters.validate = (value, schema, utils) => value === void 0 || schema.validate(value, utils);
  }
  if (optionInfo.redirect) {
    handlers.redirect = (value) => !value ? void 0 : {
      to: typeof optionInfo.redirect === "string" ? optionInfo.redirect : {
        key: optionInfo.redirect.option,
        value: optionInfo.redirect.value
      }
    };
  }
  if (optionInfo.deprecated) {
    handlers.deprecated = true;
  }
  if (isCLI && !optionInfo.array) {
    const originalPreprocess = parameters.preprocess || ((x) => x);
    parameters.preprocess = (value, schema, utils) => schema.preprocess(originalPreprocess(Array.isArray(value) ? method_at_default(
      /* OPTIONAL_OBJECT: false */
      0,
      value,
      -1
    ) : value), utils);
  }
  return optionInfo.array ? ArraySchema.create({
    ...isCLI ? {
      preprocess: (v) => Array.isArray(v) ? v : [v]
    } : {},
    ...handlers,
    // @ts-expect-error
    valueSchema: SchemaConstructor.create(parameters)
  }) : SchemaConstructor.create({
    ...parameters,
    ...handlers
  });
}
var normalize_options_default = normalizeOptions;

// scripts/build/shims/method-find-last.js
var arrayFindLast = Array.prototype.findLast ?? function(callback) {
  for (let index = this.length - 1; index >= 0; index--) {
    const element = this[index];
    if (callback(element, index, this)) {
      return element;
    }
  }
};
var findLast = createMethodShim("findLast", function() {
  if (Array.isArray(this)) {
    return arrayFindLast;
  }
});
var method_find_last_default = findLast;

// src/main/front-matter/embed.js
import { builders as __doc_builders2 } from "./doc.mjs";

// src/main/front-matter/constants.js
var FRONT_MATTER_MARK = Symbol.for("PRETTIER_IS_FRONT_MATTER");
var FRONT_MATTER_VISITOR_KEYS = [];

// src/main/front-matter/is-front-matter.js
function isFrontMatter(node) {
  return Boolean(node?.[FRONT_MATTER_MARK]);
}
var is_front_matter_default = isFrontMatter;

// src/main/front-matter/embed.js
var {
  hardline: hardline2,
  markAsRoot
} = __doc_builders2;
var SUPPORTED_EMBED_LANGUAGES = /* @__PURE__ */ new Set(["yaml", "toml"]);
var isEmbedFrontMatter = ({
  node
}) => is_front_matter_default(node) && SUPPORTED_EMBED_LANGUAGES.has(node.language);
async function printEmbedFrontMatter(textToDoc2, print, path15, options8) {
  const {
    node
  } = path15;
  const {
    language
  } = node;
  if (!SUPPORTED_EMBED_LANGUAGES.has(language)) {
    return;
  }
  const value = node.value.trim();
  let doc2;
  if (value) {
    const parser = language === "yaml" ? language : infer_parser_default(options8, {
      language
    });
    if (!parser) {
      return;
    }
    doc2 = value ? await textToDoc2(value, {
      parser
    }) : "";
  } else {
    doc2 = value;
  }
  return markAsRoot([node.startDelimiter, node.explicitLanguage ?? "", hardline2, doc2, doc2 ? hardline2 : "", node.endDelimiter]);
}

// src/main/front-matter/clean.js
function clean(original, cloned) {
  if (isEmbedFrontMatter({ node: original })) {
    delete cloned.end;
    delete cloned.raw;
    delete cloned.value;
  }
  return cloned;
}
var clean_default = clean;

// src/main/front-matter/print.js
function printFrontMatter({ node }) {
  return node.raw;
}
var print_default = printFrontMatter;

// src/main/create-get-visitor-keys-function.js
var nonTraversableKeys = /* @__PURE__ */ new Set([
  "tokens",
  "comments",
  "parent",
  "enclosingNode",
  "precedingNode",
  "followingNode"
]);
var defaultGetVisitorKeys = (node) => Object.keys(node).filter((key2) => !nonTraversableKeys.has(key2));
function createGetVisitorKeysFunction(printerGetVisitorKeys, supportFrontMatter) {
  const getVisitorKeys = printerGetVisitorKeys ? (node) => printerGetVisitorKeys(node, nonTraversableKeys) : defaultGetVisitorKeys;
  if (!supportFrontMatter) {
    return getVisitorKeys;
  }
  return new Proxy(getVisitorKeys, {
    apply: (target, thisArgument, argumentsList) => is_front_matter_default(argumentsList[0]) ? FRONT_MATTER_VISITOR_KEYS : Reflect.apply(target, thisArgument, argumentsList)
  });
}
var create_get_visitor_keys_function_default = createGetVisitorKeysFunction;

// src/main/parser-and-printer.js
function getParserPluginByParserName(plugins, parserName) {
  if (!parserName) {
    throw new Error("parserName is required.");
  }
  const plugin = method_find_last_default(
    /* OPTIONAL_OBJECT: false */
    0,
    plugins,
    (plugin2) => plugin2.parsers && Object.prototype.hasOwnProperty.call(plugin2.parsers, parserName)
  );
  if (plugin) {
    return plugin;
  }
  let message = `Couldn't resolve parser "${parserName}".`;
  if (false) {
    message += " Plugins must be explicitly added to the standalone bundle.";
  }
  throw new ConfigError(message);
}
function getPrinterPluginByAstFormat(plugins, astFormat) {
  if (!astFormat) {
    throw new Error("astFormat is required.");
  }
  const plugin = method_find_last_default(
    /* OPTIONAL_OBJECT: false */
    0,
    plugins,
    (plugin2) => plugin2.printers && Object.prototype.hasOwnProperty.call(plugin2.printers, astFormat)
  );
  if (plugin) {
    return plugin;
  }
  let message = `Couldn't find plugin for AST format "${astFormat}".`;
  if (false) {
    message += " Plugins must be explicitly added to the standalone bundle.";
  }
  throw new ConfigError(message);
}
function resolveParser({
  plugins,
  parser
}) {
  const plugin = getParserPluginByParserName(plugins, parser);
  return initParser(plugin, parser);
}
function initParser(plugin, parserName) {
  const parserOrParserInitFunction = plugin.parsers[parserName];
  return typeof parserOrParserInitFunction === "function" ? parserOrParserInitFunction() : parserOrParserInitFunction;
}
async function initPrinter(plugin, astFormat) {
  const printerOrPrinterInitFunction = plugin.printers[astFormat];
  const printer = typeof printerOrPrinterInitFunction === "function" ? await printerOrPrinterInitFunction() : printerOrPrinterInitFunction;
  return normalizePrinter(printer);
}
var normalizedPrinters = /* @__PURE__ */ new WeakMap();
var PRINTER_NORMALIZED_MARK = Symbol("PRINTER_NORMALIZED_MARK");
function normalizePrinter(printer) {
  if (normalizedPrinters.has(printer)) {
    return normalizedPrinters.get(printer);
  }
  if (false) {
    ok(!printer[PRINTER_NORMALIZED_MARK], "Unexpected printer normalization");
  }
  let {
    features,
    getVisitorKeys,
    embed: originalEmbed,
    massageAstNode: originalCleanFunction,
    print: originalPrint,
    ...printerRestProperties
  } = printer;
  features = normalizePrinterFeatures(features);
  const frontMatterSupport = features.experimental_frontMatterSupport;
  getVisitorKeys = create_get_visitor_keys_function_default(
    getVisitorKeys,
    /** frontMatterVisitorKeys */
    frontMatterSupport.massageAstNode || frontMatterSupport.embed || frontMatterSupport.print
  );
  let massageAstNode = originalCleanFunction;
  if (originalCleanFunction && frontMatterSupport.massageAstNode) {
    massageAstNode = new Proxy(originalCleanFunction, {
      apply(target, thisArgument, argumentsList) {
        clean_default(...argumentsList);
        return Reflect.apply(target, thisArgument, argumentsList);
      }
    });
  }
  let embed = originalEmbed;
  if (originalEmbed) {
    let embedGetVisitorKeys;
    embed = new Proxy(originalEmbed, {
      get(target, property, receiver) {
        if (property === "getVisitorKeys") {
          embedGetVisitorKeys ?? (embedGetVisitorKeys = originalEmbed.getVisitorKeys ? create_get_visitor_keys_function_default(
            originalEmbed.getVisitorKeys,
            /** frontMatterVisitorKeys */
            frontMatterSupport.massageAstNode || frontMatterSupport.embed
          ) : getVisitorKeys);
          return embedGetVisitorKeys;
        }
        return Reflect.get(target, property, receiver);
      },
      apply: (target, thisArgument, argumentsList) => frontMatterSupport.embed && isEmbedFrontMatter(...argumentsList) ? printEmbedFrontMatter : Reflect.apply(target, thisArgument, argumentsList)
    });
  }
  let print = originalPrint;
  if (frontMatterSupport.print) {
    print = new Proxy(originalPrint, {
      apply(target, thisArgument, argumentsList) {
        const [path15] = argumentsList;
        if (is_front_matter_default(path15.node)) {
          return print_default(path15);
        }
        return Reflect.apply(target, thisArgument, argumentsList);
      }
    });
  }
  const normalizedPrinter = {
    features,
    getVisitorKeys,
    embed,
    massageAstNode,
    print,
    ...printerRestProperties
  };
  if (false) {
    normalizedPrinter[PRINTER_NORMALIZED_MARK] = true;
  }
  normalizedPrinters.set(printer, normalizedPrinter);
  return normalizedPrinter;
}
var PRINTER_FRONT_MATTER_SUPPORT_FEATURES = ["clean", "embed", "print"];
var PRINTER_FRONT_MATTER_SUPPORT_OFF = Object.fromEntries(PRINTER_FRONT_MATTER_SUPPORT_FEATURES.map((feature) => [feature, false]));
function normalizePrinterFrontMatterSupport(frontMatterSupport) {
  return {
    ...PRINTER_FRONT_MATTER_SUPPORT_OFF,
    ...frontMatterSupport
  };
}
function normalizePrinterFeatures(features) {
  return {
    experimental_avoidAstMutation: false,
    ...features,
    experimental_frontMatterSupport: normalizePrinterFrontMatterSupport(features?.experimental_frontMatterSupport)
  };
}

// src/main/normalize-format-options.js
var formatOptionsHiddenDefaults = {
  astFormat: "estree",
  printer: {},
  originalText: void 0,
  locStart: null,
  locEnd: null,
  getVisitorKeys: null
};
async function normalizeFormatOptions(options8, opts = {}) {
  const rawOptions = { ...options8 };
  if (!rawOptions.parser) {
    if (!rawOptions.filepath) {
      throw new UndefinedParserError(
        "No parser and no file path given, couldn't infer a parser."
      );
    } else {
      rawOptions.parser = infer_parser_default(rawOptions, {
        physicalFile: rawOptions.filepath
      });
      if (!rawOptions.parser) {
        throw new UndefinedParserError(
          `No parser could be inferred for file "${rawOptions.filepath}".`
        );
      }
    }
  }
  const supportOptions = getSupportInfo({
    plugins: options8.plugins,
    showDeprecated: true
  }).options;
  const defaults = {
    ...formatOptionsHiddenDefaults,
    ...Object.fromEntries(
      supportOptions.filter((optionInfo) => optionInfo.default !== void 0).map((option) => [option.name, option.default])
    )
  };
  const parserPlugin = getParserPluginByParserName(
    rawOptions.plugins,
    rawOptions.parser
  );
  const parser = await initParser(parserPlugin, rawOptions.parser);
  rawOptions.astFormat = parser.astFormat;
  rawOptions.locEnd = parser.locEnd;
  rawOptions.locStart = parser.locStart;
  const printerPlugin = parserPlugin.printers?.[parser.astFormat] ? parserPlugin : getPrinterPluginByAstFormat(rawOptions.plugins, parser.astFormat);
  const printer = await initPrinter(printerPlugin, parser.astFormat);
  rawOptions.printer = printer;
  rawOptions.getVisitorKeys = printer.getVisitorKeys;
  const pluginDefaults = printerPlugin.defaultOptions ? Object.fromEntries(
    Object.entries(printerPlugin.defaultOptions).filter(
      ([, value]) => value !== void 0
    )
  ) : {};
  const mixedDefaults = { ...defaults, ...pluginDefaults };
  for (const [k, value] of Object.entries(mixedDefaults)) {
    if (rawOptions[k] === null || rawOptions[k] === void 0) {
      rawOptions[k] = value;
    }
  }
  if (rawOptions.parser === "json") {
    rawOptions.trailingComma = "none";
  }
  return normalize_options_default(rawOptions, supportOptions, {
    passThrough: Object.keys(formatOptionsHiddenDefaults),
    ...opts
  });
}
var normalize_format_options_default = normalizeFormatOptions;

// src/main/parse.js
async function parse5(originalText, options8) {
  const parser = await resolveParser(options8);
  const text = parser.preprocess ? await parser.preprocess(originalText, options8) : originalText;
  options8.originalText = text;
  let ast;
  try {
    ast = await parser.parse(
      text,
      options8,
      // TODO: remove the third argument in v4
      // The duplicated argument is passed as intended, see #10156
      options8
    );
  } catch (error) {
    handleParseError(error, originalText);
  }
  return { text, ast };
}
function handleParseError(error, text) {
  const { loc } = error;
  if (loc) {
    const codeFrame = codeFrameColumns(text, loc, { highlightCode: true });
    error.message += "\n" + codeFrame;
    error.codeFrame = codeFrame;
    throw error;
  }
  throw error;
}
var parse_default = parse5;

// src/main/multiparser.js
var {
  stripTrailingHardline
} = __doc_utils;
async function printEmbeddedLanguages(path15, genericPrint, options8, printAstToDoc2, embeds) {
  if (options8.embeddedLanguageFormatting !== "auto") {
    return;
  }
  const {
    printer
  } = options8;
  const {
    embed
  } = printer;
  if (!embed) {
    return;
  }
  if (embed.length > 2) {
    throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/plugins#optional-embed");
  }
  const {
    hasPrettierIgnore
  } = printer;
  const {
    getVisitorKeys
  } = embed;
  const embedCallResults = [];
  recurse();
  const originalPathStack = path15.stack;
  for (const {
    print,
    node,
    pathStack
  } of embedCallResults) {
    try {
      path15.stack = pathStack;
      const doc2 = await print(textToDocForEmbed, genericPrint, path15, options8);
      if (doc2) {
        embeds.set(node, doc2);
      }
    } catch (error) {
      if (process.env.PRETTIER_DEBUG) {
        throw error;
      }
    }
  }
  path15.stack = originalPathStack;
  function textToDocForEmbed(text, partialNextOptions) {
    return textToDoc(text, partialNextOptions, options8, printAstToDoc2);
  }
  function recurse() {
    const {
      node
    } = path15;
    if (node === null || typeof node !== "object" || hasPrettierIgnore?.(path15)) {
      return;
    }
    for (const key2 of getVisitorKeys(node)) {
      if (Array.isArray(node[key2])) {
        path15.each(recurse, key2);
      } else {
        path15.call(recurse, key2);
      }
    }
    const result = embed(path15, options8);
    if (!result) {
      return;
    }
    if (typeof result === "function") {
      embedCallResults.push({
        print: result,
        node,
        pathStack: [...path15.stack]
      });
      return;
    }
    if (false) {
      throw new Error("`embed` should return an async function instead of Promise.");
    }
    embeds.set(node, result);
  }
}
async function textToDoc(text, partialNextOptions, parentOptions, printAstToDoc2) {
  const options8 = await normalize_format_options_default({
    ...parentOptions,
    ...partialNextOptions,
    parentParser: parentOptions.parser,
    originalText: text,
    // Improve this if we calculate the relative index
    cursorOffset: void 0,
    rangeStart: void 0,
    rangeEnd: void 0
  }, {
    passThrough: true
  });
  const {
    ast
  } = await parse_default(text, options8);
  const doc2 = await printAstToDoc2(ast, options8);
  return stripTrailingHardline(doc2);
}

// src/main/print-ignored.js
function printIgnored(path15, options8, printPath, args) {
  const {
    originalText,
    [Symbol.for("comments")]: comments,
    locStart,
    locEnd,
    [Symbol.for("printedComments")]: printedComments
  } = options8;
  const { node } = path15;
  const start = locStart(node);
  const end = locEnd(node);
  for (const comment of comments) {
    if (locStart(comment) >= start && locEnd(comment) <= end) {
      printedComments.add(comment);
    }
  }
  const { printPrettierIgnored } = options8.printer;
  return printPrettierIgnored ? printPrettierIgnored(path15, options8, printPath, args) : originalText.slice(start, end);
}
var print_ignored_default = printIgnored;

// src/main/ast-to-doc.js
var {
  cursor
} = __doc_builders3;
async function printAstToDoc(ast, options8) {
  ({
    ast
  } = await prepareToPrint(ast, options8));
  const cache3 = /* @__PURE__ */ new Map();
  const path15 = new ast_path_default(ast);
  const ensurePrintingNode = create_print_pre_check_function_default(options8);
  const embeds = /* @__PURE__ */ new Map();
  await printEmbeddedLanguages(path15, mainPrint, options8, printAstToDoc, embeds);
  const doc2 = await callPluginPrintFunction(path15, options8, mainPrint, void 0, embeds);
  ensureAllCommentsPrinted(options8);
  if (options8.cursorOffset >= 0) {
    if (options8.nodeAfterCursor && !options8.nodeBeforeCursor) {
      return [cursor, doc2];
    }
    if (options8.nodeBeforeCursor && !options8.nodeAfterCursor) {
      return [doc2, cursor];
    }
  }
  return doc2;
  function mainPrint(selector, args) {
    if (selector === void 0 || selector === path15) {
      return mainPrintInternal(args);
    }
    if (Array.isArray(selector)) {
      return path15.call(() => mainPrintInternal(args), ...selector);
    }
    return path15.call(() => mainPrintInternal(args), selector);
  }
  function mainPrintInternal(args) {
    ensurePrintingNode(path15);
    const value = path15.node;
    if (value === void 0 || value === null) {
      return "";
    }
    const shouldCache = is_object_default(value) && args === void 0;
    if (shouldCache && cache3.has(value)) {
      return cache3.get(value);
    }
    const doc3 = callPluginPrintFunction(path15, options8, mainPrint, args, embeds);
    if (shouldCache) {
      cache3.set(value, doc3);
    }
    return doc3;
  }
}
function callPluginPrintFunction(path15, options8, printPath, args, embeds) {
  const {
    node
  } = path15;
  const {
    printer
  } = options8;
  let doc2;
  if (printer.hasPrettierIgnore?.(path15)) {
    doc2 = print_ignored_default(path15, options8, printPath, args);
  } else if (embeds.has(node)) {
    doc2 = embeds.get(node);
  } else {
    doc2 = printer.print(path15, options8, printPath, args);
  }
  switch (node) {
    case options8.cursorNode:
      doc2 = inheritLabel(doc2, (doc3) => [cursor, doc3, cursor]);
      break;
    case options8.nodeBeforeCursor:
      doc2 = inheritLabel(doc2, (doc3) => [doc3, cursor]);
      break;
    case options8.nodeAfterCursor:
      doc2 = inheritLabel(doc2, (doc3) => [cursor, doc3]);
      break;
  }
  if (printer.printComment && !printer.willPrintOwnComments?.(path15, options8)) {
    doc2 = printComments(path15, doc2, options8);
  }
  return doc2;
}
async function prepareToPrint(ast, options8) {
  const comments = ast.comments ?? [];
  options8[Symbol.for("comments")] = comments;
  options8[Symbol.for("printedComments")] = /* @__PURE__ */ new Set();
  attachComments(ast, options8);
  const {
    printer: {
      preprocess
    }
  } = options8;
  ast = preprocess ? await preprocess(ast, options8) : ast;
  return {
    ast,
    comments
  };
}

// src/main/get-cursor-node.js
function getCursorLocation(ast, options8) {
  const { cursorOffset, locStart, locEnd, getVisitorKeys } = options8;
  const nodeContainsCursor = (node) => locStart(node) <= cursorOffset && locEnd(node) >= cursorOffset;
  let cursorNode = ast;
  const nodesContainingCursor = [ast];
  for (const node of getDescendants(ast, {
    getVisitorKeys,
    filter: nodeContainsCursor
  })) {
    nodesContainingCursor.push(node);
    cursorNode = node;
  }
  if (isLeaf(cursorNode, { getVisitorKeys })) {
    return { cursorNode };
  }
  let nodeBeforeCursor;
  let nodeAfterCursor;
  let nodeBeforeCursorEndIndex = -1;
  let nodeAfterCursorStartIndex = Number.POSITIVE_INFINITY;
  while (nodesContainingCursor.length > 0 && (nodeBeforeCursor === void 0 || nodeAfterCursor === void 0)) {
    cursorNode = nodesContainingCursor.pop();
    const foundBeforeNode = nodeBeforeCursor !== void 0;
    const foundAfterNode = nodeAfterCursor !== void 0;
    for (const node of getChildren(cursorNode, { getVisitorKeys })) {
      if (!foundBeforeNode) {
        const nodeEnd = locEnd(node);
        if (nodeEnd <= cursorOffset && nodeEnd > nodeBeforeCursorEndIndex) {
          nodeBeforeCursor = node;
          nodeBeforeCursorEndIndex = nodeEnd;
        }
      }
      if (!foundAfterNode) {
        const nodeStart = locStart(node);
        if (nodeStart >= cursorOffset && nodeStart < nodeAfterCursorStartIndex) {
          nodeAfterCursor = node;
          nodeAfterCursorStartIndex = nodeStart;
        }
      }
    }
  }
  return {
    nodeBeforeCursor,
    nodeAfterCursor
  };
}
var get_cursor_node_default = getCursorLocation;

// src/main/massage-ast.js
function massageAst(ast, options8) {
  const {
    printer
  } = options8;
  const clean2 = printer.massageAstNode;
  if (!clean2) {
    return ast;
  }
  const {
    getVisitorKeys
  } = printer;
  const {
    ignoredProperties
  } = clean2;
  return recurse(ast);
  function recurse(original, parent) {
    if (!is_object_default(original)) {
      return original;
    }
    if (Array.isArray(original)) {
      return original.map((child) => recurse(child, parent)).filter(Boolean);
    }
    const cloned = {};
    const childrenKeys = new Set(getVisitorKeys(original));
    for (const key2 in original) {
      if (!Object.prototype.hasOwnProperty.call(original, key2) || ignoredProperties?.has(key2)) {
        continue;
      }
      if (childrenKeys.has(key2)) {
        cloned[key2] = recurse(original[key2], original);
      } else {
        cloned[key2] = original[key2];
      }
    }
    const result = clean2(original, cloned, parent);
    if (result === null) {
      return;
    }
    return result ?? cloned;
  }
}
var massage_ast_default = massageAst;

// scripts/build/shims/method-find-last-index.js
var arrayFindLastIndex = Array.prototype.findLastIndex ?? function(callback) {
  for (let index = this.length - 1; index >= 0; index--) {
    const element = this[index];
    if (callback(element, index, this)) {
      return index;
    }
  }
  return -1;
};
var findLastIndex = createMethodShim("findLastIndex", function() {
  if (Array.isArray(this)) {
    return arrayFindLastIndex;
  }
});
var method_find_last_index_default = findLastIndex;

// src/main/range.js
var isJsonParser = ({
  parser
}) => parser === "json" || parser === "json5" || parser === "jsonc" || parser === "json-stringify";
function findCommonAncestor(startNodeAndAncestors, endNodeAndAncestors) {
  endNodeAndAncestors = new Set(endNodeAndAncestors);
  return startNodeAndAncestors.find((node) => jsonSourceElements.has(node.type) && endNodeAndAncestors.has(node));
}
function dropRootParents(parents) {
  const index = method_find_last_index_default(
    /* OPTIONAL_OBJECT: false */
    0,
    parents,
    (node) => node.type !== "Program" && node.type !== "File"
  );
  if (index === -1) {
    return parents;
  }
  return parents.slice(0, index + 1);
}
function findSiblingAncestors(startNodeAndAncestors, endNodeAndAncestors, {
  locStart,
  locEnd
}) {
  let [resultStartNode, ...startNodeAncestors] = startNodeAndAncestors;
  let [resultEndNode, ...endNodeAncestors] = endNodeAndAncestors;
  if (resultStartNode === resultEndNode) {
    return [resultStartNode, resultEndNode];
  }
  const startNodeStart = locStart(resultStartNode);
  for (const endAncestor of dropRootParents(endNodeAncestors)) {
    if (locStart(endAncestor) >= startNodeStart) {
      resultEndNode = endAncestor;
    } else {
      break;
    }
  }
  const endNodeEnd = locEnd(resultEndNode);
  for (const startAncestor of dropRootParents(startNodeAncestors)) {
    if (locEnd(startAncestor) <= endNodeEnd) {
      resultStartNode = startAncestor;
    } else {
      break;
    }
    if (resultStartNode === resultEndNode) {
      break;
    }
  }
  return [resultStartNode, resultEndNode];
}
function findNodeAtOffset(node, offset, options8, predicate, ancestors = [], type) {
  const {
    locStart,
    locEnd
  } = options8;
  const start = locStart(node);
  const end = locEnd(node);
  if (offset > end || offset < start || type === "rangeEnd" && offset === start || type === "rangeStart" && offset === end) {
    return;
  }
  const nodeAndAncestors = [node, ...ancestors];
  const childNodes = get_sorted_child_nodes_default(node, nodeAndAncestors, {
    cache: childNodesCache,
    locStart,
    locEnd,
    getVisitorKeys: options8.getVisitorKeys,
    // These two property should be removed, since we don't care if it can attach comment
    filter: options8.printer.canAttachComment,
    getChildren: options8.printer.getCommentChildNodes
  });
  for (const child of childNodes) {
    const childAndAncestors = findNodeAtOffset(child, offset, options8, predicate, nodeAndAncestors, type);
    if (childAndAncestors) {
      return childAndAncestors;
    }
  }
  if (predicate(node, ancestors[0])) {
    return nodeAndAncestors;
  }
}
function isJsSourceElement(type, parentType) {
  return parentType !== "DeclareExportDeclaration" && type !== "TypeParameterDeclaration" && (type === "Directive" || type === "TypeAlias" || type === "TSExportAssignment" || type.startsWith("Declare") || type.startsWith("TSDeclare") || type.endsWith("Statement") || type.endsWith("Declaration"));
}
var jsonSourceElements = /* @__PURE__ */ new Set(["JsonRoot", "ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]);
var graphqlSourceElements = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
function isSourceElement(opts, node, parentNode) {
  if (!node) {
    return false;
  }
  switch (opts.parser) {
    case "flow":
    case "hermes":
    case "babel":
    case "babel-flow":
    case "babel-ts":
    case "typescript":
    case "acorn":
    case "espree":
    case "meriyah":
    case "oxc":
    case "oxc-ts":
    case "__babel_estree":
      return isJsSourceElement(node.type, parentNode?.type);
    case "json":
    case "json5":
    case "jsonc":
    case "json-stringify":
      return jsonSourceElements.has(node.type);
    case "graphql":
      return graphqlSourceElements.has(node.kind);
    case "vue":
      return node.tag !== "root";
  }
  return false;
}
function calculateRange(text, opts, ast) {
  let {
    rangeStart: start,
    rangeEnd: end,
    locStart,
    locEnd
  } = opts;
  ok(end > start);
  const firstNonWhitespaceCharacterIndex = text.slice(start, end).search(/\S/u);
  const isAllWhitespace = firstNonWhitespaceCharacterIndex === -1;
  if (!isAllWhitespace) {
    start += firstNonWhitespaceCharacterIndex;
    for (; end > start; --end) {
      if (/\S/u.test(text[end - 1])) {
        break;
      }
    }
  }
  const startNodeAndAncestors = findNodeAtOffset(ast, start, opts, (node, parentNode) => isSourceElement(opts, node, parentNode), [], "rangeStart");
  if (!startNodeAndAncestors) {
    return;
  }
  const endNodeAndAncestors = (
    // No need find Node at `end`, it will be the same as `startNodeAndAncestors`
    isAllWhitespace ? startNodeAndAncestors : findNodeAtOffset(ast, end, opts, (node) => isSourceElement(opts, node), [], "rangeEnd")
  );
  if (!endNodeAndAncestors) {
    return;
  }
  let startNode;
  let endNode;
  if (isJsonParser(opts)) {
    const commonAncestor = findCommonAncestor(startNodeAndAncestors, endNodeAndAncestors);
    startNode = commonAncestor;
    endNode = commonAncestor;
  } else {
    [startNode, endNode] = findSiblingAncestors(startNodeAndAncestors, endNodeAndAncestors, opts);
  }
  return [Math.min(locStart(startNode), locStart(endNode)), Math.max(locEnd(startNode), locEnd(endNode))];
}

// src/main/core.js
var {
  addAlignmentToDoc,
  hardline: hardline3
} = __doc_builders4;
var {
  printDocToString: printDocToStringWithoutNormalizeOptions
} = __doc_printer;
var BOM = "\uFEFF";
var CURSOR = Symbol("cursor");
async function coreFormat(originalText, opts, addAlignmentSize = 0) {
  if (!originalText || originalText.trim().length === 0) {
    return {
      formatted: "",
      cursorOffset: -1,
      comments: []
    };
  }
  const {
    ast,
    text
  } = await parse_default(originalText, opts);
  if (opts.cursorOffset >= 0) {
    opts = {
      ...opts,
      ...get_cursor_node_default(ast, opts)
    };
  }
  let doc2 = await printAstToDoc(ast, opts, addAlignmentSize);
  if (addAlignmentSize > 0) {
    doc2 = addAlignmentToDoc([hardline3, doc2], addAlignmentSize, opts.tabWidth);
  }
  const result = printDocToStringWithoutNormalizeOptions(doc2, opts);
  if (addAlignmentSize > 0) {
    const trimmed = result.formatted.trim();
    if (result.cursorNodeStart !== void 0) {
      result.cursorNodeStart -= result.formatted.indexOf(trimmed);
      if (result.cursorNodeStart < 0) {
        result.cursorNodeStart = 0;
        result.cursorNodeText = result.cursorNodeText.trimStart();
      }
      if (result.cursorNodeStart + result.cursorNodeText.length > trimmed.length) {
        result.cursorNodeText = result.cursorNodeText.trimEnd();
      }
    }
    result.formatted = trimmed + convertEndOfLineOptionToCharacter(opts.endOfLine);
  }
  const comments = opts[Symbol.for("comments")];
  if (opts.cursorOffset >= 0) {
    let oldCursorRegionStart;
    let oldCursorRegionText;
    let newCursorRegionStart;
    let newCursorRegionText;
    if ((opts.cursorNode || opts.nodeBeforeCursor || opts.nodeAfterCursor) && result.cursorNodeText) {
      newCursorRegionStart = result.cursorNodeStart;
      newCursorRegionText = result.cursorNodeText;
      if (opts.cursorNode) {
        oldCursorRegionStart = opts.locStart(opts.cursorNode);
        oldCursorRegionText = text.slice(oldCursorRegionStart, opts.locEnd(opts.cursorNode));
      } else {
        if (!opts.nodeBeforeCursor && !opts.nodeAfterCursor) {
          throw new Error("Cursor location must contain at least one of cursorNode, nodeBeforeCursor, nodeAfterCursor");
        }
        oldCursorRegionStart = opts.nodeBeforeCursor ? opts.locEnd(opts.nodeBeforeCursor) : 0;
        const oldCursorRegionEnd = opts.nodeAfterCursor ? opts.locStart(opts.nodeAfterCursor) : text.length;
        oldCursorRegionText = text.slice(oldCursorRegionStart, oldCursorRegionEnd);
      }
    } else {
      oldCursorRegionStart = 0;
      oldCursorRegionText = text;
      newCursorRegionStart = 0;
      newCursorRegionText = result.formatted;
    }
    const cursorOffsetRelativeToOldCursorRegionStart = opts.cursorOffset - oldCursorRegionStart;
    if (oldCursorRegionText === newCursorRegionText) {
      return {
        formatted: result.formatted,
        cursorOffset: newCursorRegionStart + cursorOffsetRelativeToOldCursorRegionStart,
        comments
      };
    }
    const oldCursorNodeCharArray = oldCursorRegionText.split("");
    oldCursorNodeCharArray.splice(cursorOffsetRelativeToOldCursorRegionStart, 0, CURSOR);
    const newCursorNodeCharArray = newCursorRegionText.split("");
    const cursorNodeDiff = diffArrays(oldCursorNodeCharArray, newCursorNodeCharArray);
    let cursorOffset = newCursorRegionStart;
    for (const entry of cursorNodeDiff) {
      if (entry.removed) {
        if (entry.value.includes(CURSOR)) {
          break;
        }
      } else {
        cursorOffset += entry.count;
      }
    }
    return {
      formatted: result.formatted,
      cursorOffset,
      comments
    };
  }
  return {
    formatted: result.formatted,
    cursorOffset: -1,
    comments
  };
}
async function formatRange(originalText, opts) {
  const {
    ast,
    text
  } = await parse_default(originalText, opts);
  const [rangeStart, rangeEnd] = calculateRange(text, opts, ast) ?? [0, 0];
  const rangeString = text.slice(rangeStart, rangeEnd);
  const rangeStart2 = Math.min(rangeStart, text.lastIndexOf("\n", rangeStart) + 1);
  const indentString = text.slice(rangeStart2, rangeStart).match(/^\s*/u)[0];
  const alignmentSize = get_alignment_size_default(indentString, opts.tabWidth);
  const rangeResult = await coreFormat(rangeString, {
    ...opts,
    rangeStart: 0,
    rangeEnd: Number.POSITIVE_INFINITY,
    // Track the cursor offset only if it's within our range
    cursorOffset: opts.cursorOffset > rangeStart && opts.cursorOffset <= rangeEnd ? opts.cursorOffset - rangeStart : -1,
    // Always use `lf` to format, we'll replace it later
    endOfLine: "lf"
  }, alignmentSize);
  const rangeTrimmed = rangeResult.formatted.trimEnd();
  let {
    cursorOffset
  } = opts;
  if (cursorOffset > rangeEnd) {
    cursorOffset += rangeTrimmed.length - rangeString.length;
  } else if (rangeResult.cursorOffset >= 0) {
    cursorOffset = rangeResult.cursorOffset + rangeStart;
  }
  let formatted = text.slice(0, rangeStart) + rangeTrimmed + text.slice(rangeEnd);
  if (opts.endOfLine !== "lf") {
    const eol = convertEndOfLineOptionToCharacter(opts.endOfLine);
    if (cursorOffset >= 0 && eol === "\r\n") {
      cursorOffset += countEndOfLineCharacters(formatted.slice(0, cursorOffset), "\n");
    }
    formatted = method_replace_all_default(
      /* OPTIONAL_OBJECT: false */
      0,
      formatted,
      "\n",
      eol
    );
  }
  return {
    formatted,
    cursorOffset,
    comments: rangeResult.comments
  };
}
function ensureIndexInText(text, index, defaultValue) {
  if (typeof index !== "number" || Number.isNaN(index) || index < 0 || index > text.length) {
    return defaultValue;
  }
  return index;
}
function normalizeIndexes(text, options8) {
  let {
    cursorOffset,
    rangeStart,
    rangeEnd
  } = options8;
  cursorOffset = ensureIndexInText(text, cursorOffset, -1);
  rangeStart = ensureIndexInText(text, rangeStart, 0);
  rangeEnd = ensureIndexInText(text, rangeEnd, text.length);
  return {
    ...options8,
    cursorOffset,
    rangeStart,
    rangeEnd
  };
}
function normalizeInputAndOptions(text, options8) {
  let {
    cursorOffset,
    rangeStart,
    rangeEnd,
    endOfLine
  } = normalizeIndexes(text, options8);
  const hasBOM = text.charAt(0) === BOM;
  if (hasBOM) {
    text = text.slice(1);
    cursorOffset--;
    rangeStart--;
    rangeEnd--;
  }
  if (endOfLine === "auto") {
    endOfLine = guessEndOfLine(text);
  }
  if (text.includes("\r")) {
    const countCrlfBefore = (index) => countEndOfLineCharacters(text.slice(0, Math.max(index, 0)), "\r\n");
    cursorOffset -= countCrlfBefore(cursorOffset);
    rangeStart -= countCrlfBefore(rangeStart);
    rangeEnd -= countCrlfBefore(rangeEnd);
    text = normalizeEndOfLine(text);
  }
  return {
    hasBOM,
    text,
    options: normalizeIndexes(text, {
      ...options8,
      cursorOffset,
      rangeStart,
      rangeEnd,
      endOfLine
    })
  };
}
async function hasPragma(text, options8) {
  const selectedParser = await resolveParser(options8);
  return !selectedParser.hasPragma || selectedParser.hasPragma(text);
}
async function hasIgnorePragma(text, options8) {
  const selectedParser = await resolveParser(options8);
  return selectedParser.hasIgnorePragma?.(text);
}
async function formatWithCursor(originalText, originalOptions) {
  let {
    hasBOM,
    text,
    options: options8
  } = normalizeInputAndOptions(originalText, await normalize_format_options_default(originalOptions));
  if (options8.rangeStart >= options8.rangeEnd && text !== "" || options8.requirePragma && !await hasPragma(text, options8) || options8.checkIgnorePragma && await hasIgnorePragma(text, options8)) {
    return {
      formatted: originalText,
      cursorOffset: originalOptions.cursorOffset,
      comments: []
    };
  }
  let result;
  if (options8.rangeStart > 0 || options8.rangeEnd < text.length) {
    result = await formatRange(text, options8);
  } else {
    if (!options8.requirePragma && options8.insertPragma && options8.printer.insertPragma && !await hasPragma(text, options8)) {
      text = options8.printer.insertPragma(text);
    }
    result = await coreFormat(text, options8);
  }
  if (hasBOM) {
    result.formatted = BOM + result.formatted;
    if (result.cursorOffset >= 0) {
      result.cursorOffset++;
    }
  }
  return result;
}
async function parse6(originalText, originalOptions, devOptions) {
  const {
    text,
    options: options8
  } = normalizeInputAndOptions(originalText, await normalize_format_options_default(originalOptions));
  const parsed = await parse_default(text, options8);
  if (devOptions) {
    if (devOptions.preprocessForPrint) {
      parsed.ast = await prepareToPrint(parsed.ast, options8);
    }
    if (devOptions.massage) {
      parsed.ast = massage_ast_default(parsed.ast, options8);
    }
  }
  return parsed;
}
async function formatAst(ast, options8) {
  options8 = await normalize_format_options_default(options8);
  const doc2 = await printAstToDoc(ast, options8);
  return printDocToStringWithoutNormalizeOptions(doc2, options8);
}
async function formatDoc(doc2, options8) {
  const text = printDocToDebug(doc2);
  const {
    formatted
  } = await formatWithCursor(text, {
    ...options8,
    parser: "__js_expression"
  });
  return formatted;
}
async function printToDoc(originalText, options8) {
  options8 = await normalize_format_options_default(options8);
  const {
    ast
  } = await parse_default(originalText, options8);
  if (options8.cursorOffset >= 0) {
    options8 = {
      ...options8,
      ...get_cursor_node_default(ast, options8)
    };
  }
  return printAstToDoc(ast, options8);
}
async function printDocToString(doc2, options8) {
  return printDocToStringWithoutNormalizeOptions(doc2, await normalize_format_options_default(options8));
}

// src/main/option-categories.js
var option_categories_exports = {};
__export(option_categories_exports, {
  CATEGORY_CONFIG: () => CATEGORY_CONFIG,
  CATEGORY_EDITOR: () => CATEGORY_EDITOR,
  CATEGORY_FORMAT: () => CATEGORY_FORMAT,
  CATEGORY_GLOBAL: () => CATEGORY_GLOBAL,
  CATEGORY_OTHER: () => CATEGORY_OTHER,
  CATEGORY_OUTPUT: () => CATEGORY_OUTPUT,
  CATEGORY_SPECIAL: () => CATEGORY_SPECIAL
});
var CATEGORY_CONFIG = "Config";
var CATEGORY_EDITOR = "Editor";
var CATEGORY_FORMAT = "Format";
var CATEGORY_OTHER = "Other";
var CATEGORY_OUTPUT = "Output";
var CATEGORY_GLOBAL = "Global";
var CATEGORY_SPECIAL = "Special";

// src/language-css/languages.evaluate.js
var languages_evaluate_default = [
  {
    "name": "CSS",
    "type": "markup",
    "aceMode": "css",
    "extensions": [
      ".css",
      ".wxss"
    ],
    "tmScope": "source.css",
    "codemirrorMode": "css",
    "codemirrorMimeType": "text/css",
    "parsers": [
      "css"
    ],
    "vscodeLanguageIds": [
      "css"
    ],
    "linguistLanguageId": 50
  },
  {
    "name": "PostCSS",
    "type": "markup",
    "aceMode": "text",
    "extensions": [
      ".pcss",
      ".postcss"
    ],
    "tmScope": "source.postcss",
    "group": "CSS",
    "parsers": [
      "css"
    ],
    "vscodeLanguageIds": [
      "postcss"
    ],
    "linguistLanguageId": 262764437
  },
  {
    "name": "Less",
    "type": "markup",
    "aceMode": "less",
    "extensions": [
      ".less"
    ],
    "tmScope": "source.css.less",
    "aliases": [
      "less-css"
    ],
    "codemirrorMode": "css",
    "codemirrorMimeType": "text/x-less",
    "parsers": [
      "less"
    ],
    "vscodeLanguageIds": [
      "less"
    ],
    "linguistLanguageId": 198
  },
  {
    "name": "SCSS",
    "type": "markup",
    "aceMode": "scss",
    "extensions": [
      ".scss"
    ],
    "tmScope": "source.css.scss",
    "codemirrorMode": "css",
    "codemirrorMimeType": "text/x-scss",
    "parsers": [
      "scss"
    ],
    "vscodeLanguageIds": [
      "scss"
    ],
    "linguistLanguageId": 329
  }
];

// src/common/common-options.evaluate.js
var common_options_evaluate_default = {
  "bracketSpacing": {
    "category": "Common",
    "type": "boolean",
    "default": true,
    "description": "Print spaces between brackets.",
    "oppositeDescription": "Do not print spaces between brackets."
  },
  "objectWrap": {
    "category": "Common",
    "type": "choice",
    "default": "preserve",
    "description": "How to wrap object literals.",
    "choices": [
      {
        "value": "preserve",
        "description": "Keep as multi-line, if there is a newline between the opening brace and first property."
      },
      {
        "value": "collapse",
        "description": "Fit to a single line when possible."
      }
    ]
  },
  "singleQuote": {
    "category": "Common",
    "type": "boolean",
    "default": false,
    "description": "Use single quotes instead of double quotes."
  },
  "proseWrap": {
    "category": "Common",
    "type": "choice",
    "default": "preserve",
    "description": "How to wrap prose.",
    "choices": [
      {
        "value": "always",
        "description": "Wrap prose if it exceeds the print width."
      },
      {
        "value": "never",
        "description": "Do not wrap prose."
      },
      {
        "value": "preserve",
        "description": "Wrap prose as-is."
      }
    ]
  },
  "bracketSameLine": {
    "category": "Common",
    "type": "boolean",
    "default": false,
    "description": "Put > of opening tags on the last line instead of on a new line."
  },
  "singleAttributePerLine": {
    "category": "Common",
    "type": "boolean",
    "default": false,
    "description": "Enforce single attribute per line in HTML, Vue and JSX."
  }
};

// src/language-css/options.js
var options = {
  singleQuote: common_options_evaluate_default.singleQuote
};
var options_default = options;

// src/language-graphql/languages.evaluate.js
var languages_evaluate_default2 = [
  {
    "name": "GraphQL",
    "type": "data",
    "aceMode": "graphqlschema",
    "extensions": [
      ".graphql",
      ".gql",
      ".graphqls"
    ],
    "tmScope": "source.graphql",
    "parsers": [
      "graphql"
    ],
    "vscodeLanguageIds": [
      "graphql"
    ],
    "linguistLanguageId": 139
  }
];

// src/language-graphql/options.js
var options2 = {
  bracketSpacing: common_options_evaluate_default.bracketSpacing
};
var options_default2 = options2;

// src/language-handlebars/languages.evaluate.js
var languages_evaluate_default3 = [
  {
    "name": "Handlebars",
    "type": "markup",
    "aceMode": "handlebars",
    "extensions": [
      ".handlebars",
      ".hbs"
    ],
    "tmScope": "text.html.handlebars",
    "aliases": [
      "hbs",
      "htmlbars"
    ],
    "parsers": [
      "glimmer"
    ],
    "vscodeLanguageIds": [
      "handlebars"
    ],
    "linguistLanguageId": 155
  }
];

// src/language-html/languages.evaluate.js
var languages_evaluate_default4 = [
  {
    "name": "Angular",
    "type": "markup",
    "aceMode": "html",
    "extensions": [
      ".component.html"
    ],
    "tmScope": "text.html.basic",
    "aliases": [
      "xhtml"
    ],
    "codemirrorMode": "htmlmixed",
    "codemirrorMimeType": "text/html",
    "parsers": [
      "angular"
    ],
    "vscodeLanguageIds": [
      "html"
    ],
    "filenames": [],
    "linguistLanguageId": 146
  },
  {
    "name": "HTML",
    "type": "markup",
    "aceMode": "html",
    "extensions": [
      ".html",
      ".hta",
      ".htm",
      ".html.hl",
      ".inc",
      ".xht",
      ".xhtml"
    ],
    "tmScope": "text.html.basic",
    "aliases": [
      "xhtml"
    ],
    "codemirrorMode": "htmlmixed",
    "codemirrorMimeType": "text/html",
    "parsers": [
      "html"
    ],
    "vscodeLanguageIds": [
      "html"
    ],
    "linguistLanguageId": 146
  },
  {
    "name": "Lightning Web Components",
    "type": "markup",
    "aceMode": "html",
    "extensions": [],
    "tmScope": "text.html.basic",
    "aliases": [
      "xhtml"
    ],
    "codemirrorMode": "htmlmixed",
    "codemirrorMimeType": "text/html",
    "parsers": [
      "lwc"
    ],
    "vscodeLanguageIds": [
      "html"
    ],
    "filenames": [],
    "linguistLanguageId": 146
  },
  {
    "name": "MJML",
    "type": "markup",
    "aceMode": "html",
    "extensions": [
      ".mjml"
    ],
    "tmScope": "text.mjml.basic",
    "aliases": [
      "MJML",
      "mjml"
    ],
    "codemirrorMode": "htmlmixed",
    "codemirrorMimeType": "text/html",
    "parsers": [
      "mjml"
    ],
    "filenames": [],
    "vscodeLanguageIds": [
      "mjml"
    ],
    "linguistLanguageId": 146
  },
  {
    "name": "Vue",
    "type": "markup",
    "aceMode": "vue",
    "extensions": [
      ".vue"
    ],
    "tmScope": "source.vue",
    "codemirrorMode": "vue",
    "codemirrorMimeType": "text/x-vue",
    "parsers": [
      "vue"
    ],
    "vscodeLanguageIds": [
      "vue"
    ],
    "linguistLanguageId": 391
  }
];

// src/language-html/options.js
var CATEGORY_HTML = "HTML";
var options3 = {
  bracketSameLine: common_options_evaluate_default.bracketSameLine,
  htmlWhitespaceSensitivity: {
    category: CATEGORY_HTML,
    type: "choice",
    default: "css",
    description: "How to handle whitespaces in HTML.",
    choices: [
      {
        value: "css",
        description: "Respect the default value of CSS display property."
      },
      {
        value: "strict",
        description: "Whitespaces are considered sensitive."
      },
      {
        value: "ignore",
        description: "Whitespaces are considered insensitive."
      }
    ]
  },
  singleAttributePerLine: common_options_evaluate_default.singleAttributePerLine,
  vueIndentScriptAndStyle: {
    category: CATEGORY_HTML,
    type: "boolean",
    default: false,
    description: "Indent script and style tags in Vue files."
  }
};
var options_default3 = options3;

// src/language-js/languages.evaluate.js
var languages_evaluate_default5 = [
  {
    "name": "JavaScript",
    "type": "programming",
    "aceMode": "javascript",
    "extensions": [
      ".js",
      "._js",
      ".bones",
      ".cjs",
      ".es",
      ".es6",
      ".gs",
      ".jake",
      ".javascript",
      ".jsb",
      ".jscad",
      ".jsfl",
      ".jslib",
      ".jsm",
      ".jspre",
      ".jss",
      ".mjs",
      ".njs",
      ".pac",
      ".sjs",
      ".ssjs",
      ".xsjs",
      ".xsjslib",
      ".start.frag",
      ".end.frag",
      ".wxs"
    ],
    "filenames": [
      "Jakefile",
      "start.frag",
      "end.frag"
    ],
    "tmScope": "source.js",
    "aliases": [
      "js",
      "node"
    ],
    "codemirrorMode": "javascript",
    "codemirrorMimeType": "text/javascript",
    "interpreters": [
      "chakra",
      "d8",
      "gjs",
      "js",
      "node",
      "nodejs",
      "qjs",
      "rhino",
      "v8",
      "v8-shell",
      "zx"
    ],
    "parsers": [
      "babel",
      "acorn",
      "espree",
      "meriyah",
      "babel-flow",
      "babel-ts",
      "flow",
      "typescript"
    ],
    "vscodeLanguageIds": [
      "javascript",
      "mongo"
    ],
    "linguistLanguageId": 183
  },
  {
    "name": "Flow",
    "type": "programming",
    "aceMode": "javascript",
    "extensions": [
      ".js.flow"
    ],
    "filenames": [],
    "tmScope": "source.js",
    "aliases": [],
    "codemirrorMode": "javascript",
    "codemirrorMimeType": "text/javascript",
    "interpreters": [
      "chakra",
      "d8",
      "gjs",
      "js",
      "node",
      "nodejs",
      "qjs",
      "rhino",
      "v8",
      "v8-shell"
    ],
    "parsers": [
      "flow",
      "babel-flow"
    ],
    "vscodeLanguageIds": [
      "javascript"
    ],
    "linguistLanguageId": 183
  },
  {
    "name": "JSX",
    "type": "programming",
    "aceMode": "javascript",
    "extensions": [
      ".jsx"
    ],
    "filenames": void 0,
    "tmScope": "source.js.jsx",
    "aliases": void 0,
    "codemirrorMode": "jsx",
    "codemirrorMimeType": "text/jsx",
    "interpreters": void 0,
    "parsers": [
      "babel",
      "babel-flow",
      "babel-ts",
      "flow",
      "typescript",
      "espree",
      "meriyah"
    ],
    "vscodeLanguageIds": [
      "javascriptreact"
    ],
    "group": "JavaScript",
    "linguistLanguageId": 183
  },
  {
    "name": "TypeScript",
    "type": "programming",
    "aceMode": "typescript",
    "extensions": [
      ".ts",
      ".cts",
      ".mts"
    ],
    "tmScope": "source.ts",
    "aliases": [
      "ts"
    ],
    "codemirrorMode": "javascript",
    "codemirrorMimeType": "application/typescript",
    "interpreters": [
      "bun",
      "deno",
      "ts-node",
      "tsx"
    ],
    "parsers": [
      "typescript",
      "babel-ts"
    ],
    "vscodeLanguageIds": [
      "typescript"
    ],
    "linguistLanguageId": 378
  },
  {
    "name": "TSX",
    "type": "programming",
    "aceMode": "tsx",
    "extensions": [
      ".tsx"
    ],
    "tmScope": "source.tsx",
    "codemirrorMode": "jsx",
    "codemirrorMimeType": "text/typescript-jsx",
    "group": "TypeScript",
    "parsers": [
      "typescript",
      "babel-ts"
    ],
    "vscodeLanguageIds": [
      "typescriptreact"
    ],
    "linguistLanguageId": 94901924
  }
];

// src/language-js/options.js
var CATEGORY_JAVASCRIPT = "JavaScript";
var options4 = {
  arrowParens: {
    category: CATEGORY_JAVASCRIPT,
    type: "choice",
    default: "always",
    description: "Include parentheses around a sole arrow function parameter.",
    choices: [
      {
        value: "always",
        description: "Always include parens. Example: `(x) => x`"
      },
      {
        value: "avoid",
        description: "Omit parens when possible. Example: `x => x`"
      }
    ]
  },
  bracketSameLine: common_options_evaluate_default.bracketSameLine,
  objectWrap: common_options_evaluate_default.objectWrap,
  bracketSpacing: common_options_evaluate_default.bracketSpacing,
  jsxBracketSameLine: {
    category: CATEGORY_JAVASCRIPT,
    type: "boolean",
    description: "Put > on the last line instead of at a new line.",
    deprecated: "2.4.0"
  },
  semi: {
    category: CATEGORY_JAVASCRIPT,
    type: "boolean",
    default: true,
    description: "Print semicolons.",
    oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them."
  },
  experimentalOperatorPosition: {
    category: CATEGORY_JAVASCRIPT,
    type: "choice",
    default: "end",
    description: "Where to print operators when binary expressions wrap lines.",
    choices: [
      {
        value: "start",
        description: "Print operators at the start of new lines."
      },
      {
        value: "end",
        description: "Print operators at the end of previous lines."
      }
    ]
  },
  experimentalTernaries: {
    category: CATEGORY_JAVASCRIPT,
    type: "boolean",
    default: false,
    description: "Use curious ternaries, with the question mark after the condition.",
    oppositeDescription: "Default behavior of ternaries; keep question marks on the same line as the consequent."
  },
  singleQuote: common_options_evaluate_default.singleQuote,
  jsxSingleQuote: {
    category: CATEGORY_JAVASCRIPT,
    type: "boolean",
    default: false,
    description: "Use single quotes in JSX."
  },
  quoteProps: {
    category: CATEGORY_JAVASCRIPT,
    type: "choice",
    default: "as-needed",
    description: "Change when properties in objects are quoted.",
    choices: [
      {
        value: "as-needed",
        description: "Only add quotes around object properties where required."
      },
      {
        value: "consistent",
        description: "If at least one property in an object requires quotes, quote all properties."
      },
      {
        value: "preserve",
        description: "Respect the input use of quotes in object properties."
      }
    ]
  },
  trailingComma: {
    category: CATEGORY_JAVASCRIPT,
    type: "choice",
    default: "all",
    description: "Print trailing commas wherever possible when multi-line.",
    choices: [
      {
        value: "all",
        description: "Trailing commas wherever possible (including function arguments)."
      },
      {
        value: "es5",
        description: "Trailing commas where valid in ES5 (objects, arrays, etc.)"
      },
      { value: "none", description: "No trailing commas." }
    ]
  },
  singleAttributePerLine: common_options_evaluate_default.singleAttributePerLine
};
var options_default4 = options4;

// src/language-json/languages.evaluate.js
var languages_evaluate_default6 = [
  {
    "name": "JSON.stringify",
    "type": "data",
    "aceMode": "json",
    "extensions": [
      ".importmap"
    ],
    "filenames": [
      "package.json",
      "package-lock.json",
      "composer.json"
    ],
    "tmScope": "source.json",
    "aliases": [
      "geojson",
      "jsonl",
      "sarif",
      "topojson"
    ],
    "codemirrorMode": "javascript",
    "codemirrorMimeType": "application/json",
    "parsers": [
      "json-stringify"
    ],
    "vscodeLanguageIds": [
      "json"
    ],
    "linguistLanguageId": 174
  },
  {
    "name": "JSON",
    "type": "data",
    "aceMode": "json",
    "extensions": [
      ".json",
      ".4DForm",
      ".4DProject",
      ".avsc",
      ".geojson",
      ".gltf",
      ".har",
      ".ice",
      ".JSON-tmLanguage",
      ".json.example",
      ".mcmeta",
      ".sarif",
      ".tact",
      ".tfstate",
      ".tfstate.backup",
      ".topojson",
      ".webapp",
      ".webmanifest",
      ".yy",
      ".yyp"
    ],
    "filenames": [
      ".all-contributorsrc",
      ".arcconfig",
      ".auto-changelog",
      ".c8rc",
      ".htmlhintrc",
      ".imgbotconfig",
      ".nycrc",
      ".tern-config",
      ".tern-project",
      ".watchmanconfig",
      ".babelrc",
      ".jscsrc",
      ".jshintrc",
      ".jslintrc",
      ".swcrc"
    ],
    "tmScope": "source.json",
    "aliases": [
      "geojson",
      "jsonl",
      "sarif",
      "topojson"
    ],
    "codemirrorMode": "javascript",
    "codemirrorMimeType": "application/json",
    "parsers": [
      "json"
    ],
    "vscodeLanguageIds": [
      "json"
    ],
    "linguistLanguageId": 174
  },
  {
    "name": "JSON with Comments",
    "type": "data",
    "aceMode": "javascript",
    "extensions": [
      ".jsonc",
      ".code-snippets",
      ".code-workspace",
      ".sublime-build",
      ".sublime-color-scheme",
      ".sublime-commands",
      ".sublime-completions",
      ".sublime-keymap",
      ".sublime-macro",
      ".sublime-menu",
      ".sublime-mousemap",
      ".sublime-project",
      ".sublime-settings",
      ".sublime-theme",
      ".sublime-workspace",
      ".sublime_metrics",
      ".sublime_session"
    ],
    "filenames": [],
    "tmScope": "source.json.comments",
    "aliases": [
      "jsonc"
    ],
    "codemirrorMode": "javascript",
    "codemirrorMimeType": "text/javascript",
    "group": "JSON",
    "parsers": [
      "jsonc"
    ],
    "vscodeLanguageIds": [
      "jsonc"
    ],
    "linguistLanguageId": 423
  },
  {
    "name": "JSON5",
    "type": "data",
    "aceMode": "json5",
    "extensions": [
      ".json5"
    ],
    "tmScope": "source.js",
    "codemirrorMode": "javascript",
    "codemirrorMimeType": "application/json",
    "parsers": [
      "json5"
    ],
    "vscodeLanguageIds": [
      "json5"
    ],
    "linguistLanguageId": 175
  }
];

// src/language-markdown/languages.evaluate.js
var languages_evaluate_default7 = [
  {
    "name": "Markdown",
    "type": "prose",
    "aceMode": "markdown",
    "extensions": [
      ".md",
      ".livemd",
      ".markdown",
      ".mdown",
      ".mdwn",
      ".mkd",
      ".mkdn",
      ".mkdown",
      ".ronn",
      ".scd",
      ".workbook"
    ],
    "filenames": [
      "contents.lr",
      "README"
    ],
    "tmScope": "text.md",
    "aliases": [
      "md",
      "pandoc"
    ],
    "codemirrorMode": "gfm",
    "codemirrorMimeType": "text/x-gfm",
    "wrap": true,
    "parsers": [
      "markdown"
    ],
    "vscodeLanguageIds": [
      "markdown"
    ],
    "linguistLanguageId": 222
  },
  {
    "name": "MDX",
    "type": "prose",
    "aceMode": "markdown",
    "extensions": [
      ".mdx"
    ],
    "filenames": [],
    "tmScope": "text.md",
    "aliases": [
      "md",
      "pandoc"
    ],
    "codemirrorMode": "gfm",
    "codemirrorMimeType": "text/x-gfm",
    "wrap": true,
    "parsers": [
      "mdx"
    ],
    "vscodeLanguageIds": [
      "mdx"
    ],
    "linguistLanguageId": 222
  }
];

// src/language-markdown/options.js
var options5 = {
  proseWrap: common_options_evaluate_default.proseWrap,
  singleQuote: common_options_evaluate_default.singleQuote
};
var options_default5 = options5;

// src/language-yaml/languages.evaluate.js
var languages_evaluate_default8 = [
  {
    "name": "YAML",
    "type": "data",
    "aceMode": "yaml",
    "extensions": [
      ".yml",
      ".mir",
      ".reek",
      ".rviz",
      ".sublime-syntax",
      ".syntax",
      ".yaml",
      ".yaml-tmlanguage",
      ".yaml.sed",
      ".yml.mysql"
    ],
    "filenames": [
      ".clang-format",
      ".clang-tidy",
      ".clangd",
      ".gemrc",
      "CITATION.cff",
      "glide.lock",
      "pixi.lock",
      ".prettierrc",
      ".stylelintrc",
      ".lintstagedrc"
    ],
    "tmScope": "source.yaml",
    "aliases": [
      "yml"
    ],
    "codemirrorMode": "yaml",
    "codemirrorMimeType": "text/x-yaml",
    "parsers": [
      "yaml"
    ],
    "vscodeLanguageIds": [
      "yaml",
      "ansible",
      "dockercompose",
      "github-actions-workflow",
      "home-assistant"
    ],
    "linguistLanguageId": 407
  }
];

// src/language-yaml/options.js
var options6 = {
  bracketSpacing: common_options_evaluate_default.bracketSpacing,
  singleQuote: common_options_evaluate_default.singleQuote,
  proseWrap: common_options_evaluate_default.proseWrap
};
var options_default6 = options6;

// src/plugins/builtin-plugins-proxy.js
function createParsersAndPrinters(modules) {
  const parsers2 = /* @__PURE__ */ Object.create(null);
  const printers2 = /* @__PURE__ */ Object.create(null);
  for (const {
    importPlugin: importPlugin2,
    parsers: parserNames = [],
    printers: printerNames = []
  } of modules) {
    const loadPlugin2 = async () => {
      const plugin = await importPlugin2();
      Object.assign(parsers2, plugin.parsers);
      Object.assign(printers2, plugin.printers);
      return plugin;
    };
    for (const parserName of parserNames) {
      parsers2[parserName] = async () => (await loadPlugin2()).parsers[parserName];
    }
    for (const printerName of printerNames) {
      printers2[printerName] = async () => (await loadPlugin2()).printers[printerName];
    }
  }
  return { parsers: parsers2, printers: printers2 };
}
var estreePlugin = createParsersAndPrinters([
  {
    importPlugin: () => import("./plugins/estree.mjs"),
    printers: ["estree", "estree-json"]
  }
]);
var options7 = {
  ...options_default,
  ...options_default2,
  ...options_default3,
  ...options_default4,
  ...options_default5,
  ...options_default6
};
var languages = [
  ...languages_evaluate_default,
  ...languages_evaluate_default2,
  ...languages_evaluate_default3,
  ...languages_evaluate_default4,
  ...languages_evaluate_default5,
  ...languages_evaluate_default6,
  ...languages_evaluate_default7,
  ...languages_evaluate_default8
];
var { parsers, printers } = createParsersAndPrinters([
  {
    importPlugin: () => import("./plugins/acorn.mjs"),
    parsers: ["acorn", "espree"]
  },
  {
    importPlugin: () => import("./plugins/angular.mjs"),
    parsers: [
      "__ng_action",
      "__ng_binding",
      "__ng_interpolation",
      "__ng_directive"
    ]
  },
  {
    importPlugin: () => import("./plugins/babel.mjs"),
    parsers: [
      "babel",
      "babel-flow",
      "babel-ts",
      "__js_expression",
      "__ts_expression",
      "__vue_expression",
      "__vue_ts_expression",
      "__vue_event_binding",
      "__vue_ts_event_binding",
      "__babel_estree",
      "json",
      "json5",
      "jsonc",
      "json-stringify"
    ]
  },
  {
    importPlugin: () => import("./plugins/flow.mjs"),
    parsers: ["flow"]
  },
  {
    importPlugin: () => import("./plugins/glimmer.mjs"),
    parsers: ["glimmer"],
    printers: ["glimmer"]
  },
  {
    importPlugin: () => import("./plugins/graphql.mjs"),
    parsers: ["graphql"],
    printers: ["graphql"]
  },
  {
    importPlugin: () => import("./plugins/html.mjs"),
    parsers: ["html", "angular", "vue", "lwc", "mjml"],
    printers: ["html"]
  },
  {
    importPlugin: () => import("./plugins/markdown.mjs"),
    parsers: ["markdown", "mdx", "remark"],
    printers: ["mdast"]
  },
  {
    importPlugin: () => import("./plugins/meriyah.mjs"),
    parsers: ["meriyah"]
  },
  {
    importPlugin: () => import("./plugins/postcss.mjs"),
    parsers: ["css", "less", "scss"],
    printers: ["postcss"]
  },
  {
    importPlugin: () => import("./plugins/typescript.mjs"),
    parsers: ["typescript"]
  },
  {
    importPlugin: () => import("./plugins/yaml.mjs"),
    parsers: ["yaml"],
    printers: ["yaml"]
  }
]);
var builtin_plugins_proxy_default = [estreePlugin, { options: options7, languages, parsers, printers }];

// src/main/plugins/load-builtin-plugins.js
function loadBuiltinPlugins() {
  return builtin_plugins_proxy_default;
}
var load_builtin_plugins_default = loadBuiltinPlugins;

// src/main/plugins/load-plugin.js
import path13 from "path";
import { pathToFileURL as pathToFileURL5 } from "url";

// src/utilities/import-from-directory.js
import path12 from "path";
function importFromDirectory(specifier, directory) {
  return import_from_file_default(specifier, path12.join(directory, "noop.js"));
}
var import_from_directory_default = importFromDirectory;

// src/main/plugins/load-plugin.js
async function importPlugin(name, cwd) {
  if (isUrl(name)) {
    return import(name);
  }
  if (path13.isAbsolute(name)) {
    return import(pathToFileURL5(name).href);
  }
  try {
    return await import(pathToFileURL5(path13.resolve(name)).href);
  } catch {
    return import_from_directory_default(name, cwd);
  }
}
async function loadPluginWithoutCache(plugin, cwd) {
  const module = await importPlugin(plugin, cwd);
  const implementation = module.default ?? module;
  const name = isUrl(plugin) ? toPath(plugin) : plugin;
  return { name, ...implementation };
}
var cache2 = /* @__PURE__ */ new Map();
function loadPlugin(plugin) {
  if (typeof plugin !== "string" && !(plugin instanceof URL)) {
    return plugin;
  }
  const cwd = process.cwd();
  const cacheKey = JSON.stringify({ name: plugin, cwd });
  if (!cache2.has(cacheKey)) {
    cache2.set(cacheKey, loadPluginWithoutCache(plugin, cwd));
  }
  return cache2.get(cacheKey);
}
function clearCache2() {
  cache2.clear();
}

// src/main/plugins/load-plugins.js
function loadPlugins(plugins = []) {
  return Promise.all(plugins.map((plugin) => loadPlugin(plugin)));
}
var load_plugins_default = loadPlugins;

// src/utilities/ignore.js
var import_ignore = __toESM(require_ignore(), 1);
import path14 from "path";
import url2 from "url";
var slash = path14.sep === "\\" ? (filePath) => method_replace_all_default(
  /* OPTIONAL_OBJECT: false */
  0,
  filePath,
  "\\",
  "/"
) : (filePath) => filePath;
function getRelativePath(file, ignoreFile) {
  const ignoreFilePath = toPath(ignoreFile);
  const filePath = isUrl(file) ? url2.fileURLToPath(file) : path14.resolve(file);
  return path14.relative(
    // If there's an ignore-path set, the filename must be relative to the
    // ignore path, not the current working directory.
    ignoreFilePath ? path14.dirname(ignoreFilePath) : process.cwd(),
    filePath
  );
}
async function createSingleIsIgnoredFunction(ignoreFile, withNodeModules) {
  let content = "";
  if (ignoreFile) {
    content += await read_file_default(ignoreFile) ?? "";
  }
  if (!withNodeModules) {
    content += "\nnode_modules";
  }
  if (!content) {
    return;
  }
  const ignore = (0, import_ignore.default)({
    allowRelativePaths: true
  }).add(content);
  return (file) => ignore.checkIgnore(slash(getRelativePath(file, ignoreFile))).ignored;
}
async function createIsIgnoredFunction(ignoreFiles, withNodeModules) {
  if (ignoreFiles.length === 0 && !withNodeModules) {
    ignoreFiles = [void 0];
  }
  const isIgnoredFunctions = (await Promise.all(ignoreFiles.map((ignoreFile) => createSingleIsIgnoredFunction(ignoreFile, withNodeModules)))).filter(Boolean);
  return (file) => isIgnoredFunctions.some((isIgnored2) => isIgnored2(file));
}
async function isIgnored(file, options8) {
  const {
    ignorePath: ignoreFiles,
    withNodeModules
  } = options8;
  const isIgnored2 = await createIsIgnoredFunction(ignoreFiles, withNodeModules);
  return isIgnored2(file);
}

// src/utilities/object-omit.js
function omit(object, keys) {
  keys = new Set(keys);
  return Object.fromEntries(
    Object.entries(object).filter(([key2]) => !keys.has(key2))
  );
}
var object_omit_default = omit;

// src/common/get-file-info.js
async function getFileInfo(file, options8 = {}) {
  if (typeof file !== "string" && !(file instanceof URL)) {
    throw new TypeError(
      `expect \`file\` to be a string or URL, got \`${typeof file}\``
    );
  }
  let { ignorePath, withNodeModules } = options8;
  if (!Array.isArray(ignorePath)) {
    ignorePath = [ignorePath];
  }
  const ignored = await isIgnored(file, { ignorePath, withNodeModules });
  let inferredParser;
  if (!ignored) {
    inferredParser = options8.parser ?? await getParser(file, options8);
  }
  return {
    ignored,
    inferredParser: inferredParser ?? null
  };
}
async function getParser(file, options8) {
  let config;
  if (options8.resolveConfig !== false) {
    config = await resolveConfig(file, {
      // No need read `.editorconfig`
      editorconfig: false
    });
  }
  if (config?.parser) {
    return config.parser;
  }
  let plugins = options8.plugins ?? config?.plugins ?? [];
  plugins = (await Promise.all([load_builtin_plugins_default(), load_plugins_default(plugins)])).flat();
  return infer_parser_default({ plugins }, { physicalFile: file });
}
var get_file_info_default = getFileInfo;

// src/index.js
import * as doc from "./doc.mjs";

// src/main/version.evaluate.js
var version_evaluate_default = "3.8.2";

// src/utilities/public.js
var public_exports = {};
__export(public_exports, {
  addDanglingComment: () => addDanglingComment,
  addLeadingComment: () => addLeadingComment,
  addTrailingComment: () => addTrailingComment,
  getAlignmentSize: () => get_alignment_size_default,
  getIndentSize: () => get_indent_size_default,
  getMaxContinuousCount: () => get_max_continuous_count_default,
  getNextNonSpaceNonCommentCharacter: () => get_next_non_space_non_comment_character_default,
  getNextNonSpaceNonCommentCharacterIndex: () => getNextNonSpaceNonCommentCharacterIndex2,
  getPreferredQuote: () => get_preferred_quote_default,
  getStringWidth: () => get_string_width_default,
  hasNewline: () => has_newline_default,
  hasNewlineInRange: () => has_newline_in_range_default,
  hasSpaces: () => has_spaces_default,
  isNextLineEmpty: () => isNextLineEmpty2,
  isNextLineEmptyAfterIndex: () => is_next_line_empty_default,
  isPreviousLineEmpty: () => isPreviousLineEmpty2,
  makeString: () => makeString,
  skip: () => skip,
  skipEverythingButNewLine: () => skipEverythingButNewLine,
  skipInlineComment: () => skip_inline_comment_default,
  skipNewline: () => skip_newline_default,
  skipSpaces: () => skipSpaces,
  skipToLineEnd: () => skipToLineEnd,
  skipTrailingComment: () => skip_trailing_comment_default,
  skipWhitespace: () => skipWhitespace
});

// src/utilities/skip-inline-comment.js
function skipInlineComment(text, startIndex) {
  if (startIndex === false) {
    return false;
  }
  if (text.charAt(startIndex) === "/" && text.charAt(startIndex + 1) === "*") {
    for (let i = startIndex + 2; i < text.length; ++i) {
      if (text.charAt(i) === "*" && text.charAt(i + 1) === "/") {
        return i + 2;
      }
    }
  }
  return startIndex;
}
var skip_inline_comment_default = skipInlineComment;

// src/utilities/skip-trailing-comment.js
function skipTrailingComment(text, startIndex) {
  if (startIndex === false) {
    return false;
  }
  if (text.charAt(startIndex) === "/" && text.charAt(startIndex + 1) === "/") {
    return skipEverythingButNewLine(text, startIndex);
  }
  return startIndex;
}
var skip_trailing_comment_default = skipTrailingComment;

// src/utilities/get-next-non-space-non-comment-character-index.js
function getNextNonSpaceNonCommentCharacterIndex(text, startIndex) {
  let oldIdx = null;
  let nextIdx = startIndex;
  while (nextIdx !== oldIdx) {
    oldIdx = nextIdx;
    nextIdx = skipSpaces(text, nextIdx);
    nextIdx = skip_inline_comment_default(text, nextIdx);
    nextIdx = skip_trailing_comment_default(text, nextIdx);
    nextIdx = skip_newline_default(text, nextIdx);
  }
  return nextIdx;
}
var get_next_non_space_non_comment_character_index_default = getNextNonSpaceNonCommentCharacterIndex;

// src/utilities/is-next-line-empty.js
function isNextLineEmpty(text, startIndex) {
  let oldIdx = null;
  let idx = startIndex;
  while (idx !== oldIdx) {
    oldIdx = idx;
    idx = skipToLineEnd(text, idx);
    idx = skip_inline_comment_default(text, idx);
    idx = skipSpaces(text, idx);
  }
  idx = skip_trailing_comment_default(text, idx);
  idx = skip_newline_default(text, idx);
  return idx !== false && has_newline_default(text, idx);
}
var is_next_line_empty_default = isNextLineEmpty;

// src/utilities/get-indent-size.js
function getIndentSize(value, tabWidth) {
  const lastNewlineIndex = value.lastIndexOf("\n");
  if (lastNewlineIndex === -1) {
    return 0;
  }
  return get_alignment_size_default(
    // All the leading whitespaces
    value.slice(lastNewlineIndex + 1).match(/^[\t ]*/u)[0],
    tabWidth
  );
}
var get_indent_size_default = getIndentSize;

// node_modules/escape-string-regexp/index.js
function escapeStringRegexp(string) {
  if (typeof string !== "string") {
    throw new TypeError("Expected a string");
  }
  return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}

// src/utilities/get-max-continuous-count.js
function getMaxContinuousCount(text, searchString) {
  let results = text.matchAll(
    new RegExp(`(?:${escapeStringRegexp(searchString)})+`, "gu")
  );
  if (!results.reduce) {
    results = [...results];
  }
  return results.reduce(
    (maxCount, [result]) => Math.max(maxCount, result.length),
    0
  ) / searchString.length;
}
var get_max_continuous_count_default = getMaxContinuousCount;

// src/utilities/get-next-non-space-non-comment-character.js
function getNextNonSpaceNonCommentCharacter(text, startIndex) {
  const index = get_next_non_space_non_comment_character_index_default(text, startIndex);
  return index === false ? "" : text.charAt(index);
}
var get_next_non_space_non_comment_character_default = getNextNonSpaceNonCommentCharacter;

// src/utilities/get-preferred-quote.js
var SINGLE_QUOTE = "'";
var DOUBLE_QUOTE = '"';
var SINGLE_QUOTE_DATA = Object.freeze({
  character: SINGLE_QUOTE,
  codePoint: 39
});
var DOUBLE_QUOTE_DATA = Object.freeze({
  character: DOUBLE_QUOTE,
  codePoint: 34
});
var SINGLE_QUOTE_SETTINGS = Object.freeze({
  preferred: SINGLE_QUOTE_DATA,
  alternate: DOUBLE_QUOTE_DATA
});
var DOUBLE_QUOTE_SETTINGS = Object.freeze({
  preferred: DOUBLE_QUOTE_DATA,
  alternate: SINGLE_QUOTE_DATA
});
function getPreferredQuote(text, preferredQuoteOrPreferSingleQuote) {
  const { preferred, alternate } = preferredQuoteOrPreferSingleQuote === true || preferredQuoteOrPreferSingleQuote === SINGLE_QUOTE ? SINGLE_QUOTE_SETTINGS : DOUBLE_QUOTE_SETTINGS;
  const { length } = text;
  let preferredQuoteCount = 0;
  let alternateQuoteCount = 0;
  for (let index = 0; index < length; index++) {
    const codePoint = text.charCodeAt(index);
    if (codePoint === preferred.codePoint) {
      preferredQuoteCount++;
    } else if (codePoint === alternate.codePoint) {
      alternateQuoteCount++;
    }
  }
  return (preferredQuoteCount > alternateQuoteCount ? alternate : preferred).character;
}
var get_preferred_quote_default = getPreferredQuote;

// src/utilities/has-newline-in-range.js
function hasNewlineInRange(text, startIndex, endIndex) {
  for (let i = startIndex; i < endIndex; ++i) {
    if (text.charAt(i) === "\n") {
      return true;
    }
  }
  return false;
}
var has_newline_in_range_default = hasNewlineInRange;

// src/utilities/has-spaces.js
function hasSpaces(text, startIndex, options8 = {}) {
  const idx = skipSpaces(
    text,
    options8.backwards ? startIndex - 1 : startIndex,
    options8
  );
  return idx !== startIndex;
}
var has_spaces_default = hasSpaces;

// src/utilities/public.js
function legacyGetNextNonSpaceNonCommentCharacterIndex(text, node, locEnd) {
  return get_next_non_space_non_comment_character_index_default(text, locEnd(node));
}
function getNextNonSpaceNonCommentCharacterIndex2(text, startIndex) {
  return arguments.length === 2 || typeof startIndex === "number" ? get_next_non_space_non_comment_character_index_default(text, startIndex) : (
    // @ts-expect-error -- expected
    // eslint-disable-next-line prefer-rest-params
    legacyGetNextNonSpaceNonCommentCharacterIndex(...arguments)
  );
}
function legacyIsPreviousLineEmpty(text, node, locStart) {
  return is_previous_line_empty_default(text, locStart(node));
}
function isPreviousLineEmpty2(text, startIndex) {
  return arguments.length === 2 || typeof startIndex === "number" ? is_previous_line_empty_default(text, startIndex) : (
    // @ts-expect-error -- expected
    // eslint-disable-next-line prefer-rest-params
    legacyIsPreviousLineEmpty(...arguments)
  );
}
function legacyIsNextLineEmpty(text, node, locEnd) {
  return is_next_line_empty_default(text, locEnd(node));
}
function makeString(rawText, enclosingQuote, unescapeUnnecessaryEscapes) {
  const otherQuote = enclosingQuote === '"' ? "'" : '"';
  const regex = /\\(.)|(["'])/gsu;
  const raw = method_replace_all_default(
    /* OPTIONAL_OBJECT: false */
    0,
    rawText,
    regex,
    (match, escaped, quote) => {
      if (escaped === otherQuote) {
        return escaped;
      }
      if (quote === enclosingQuote) {
        return "\\" + quote;
      }
      if (quote) {
        return quote;
      }
      return unescapeUnnecessaryEscapes && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(escaped) ? escaped : "\\" + escaped;
    }
  );
  return enclosingQuote + raw + enclosingQuote;
}
function isNextLineEmpty2(text, startIndex) {
  return arguments.length === 2 || typeof startIndex === "number" ? is_next_line_empty_default(text, startIndex) : (
    // @ts-expect-error -- expected
    // eslint-disable-next-line prefer-rest-params
    legacyIsNextLineEmpty(...arguments)
  );
}

// src/index.js
function withPlugins(fn, optionsArgumentIndex = 1) {
  return async (...args) => {
    const options8 = args[optionsArgumentIndex] ?? {};
    const { plugins = [] } = options8;
    args[optionsArgumentIndex] = {
      ...options8,
      plugins: (await Promise.all([
        load_builtin_plugins_default(),
        // TODO: standalone version allow `plugins` to be `prettierPlugins` which is an object, should allow that too
        load_plugins_default(plugins)
      ])).flat()
    };
    return fn(...args);
  };
}
var formatWithCursor2 = withPlugins(formatWithCursor);
async function format2(text, options8) {
  const { formatted } = await formatWithCursor2(text, {
    ...options8,
    cursorOffset: -1
  });
  return formatted;
}
async function check(text, options8) {
  return await format2(text, options8) === text;
}
async function clearCache3() {
  clearCache();
  clearCache2();
}
var getSupportInfo2 = withPlugins(getSupportInfo, 0);
var inferParser2 = withPlugins(
  (file, options8) => infer_parser_default(options8, { physicalFile: file })
);
var sharedWithCli = {
  errors: errors_exports,
  optionCategories: option_categories_exports,
  createIsIgnoredFunction,
  formatOptionsHiddenDefaults,
  normalizeOptions: normalize_options_default,
  getSupportInfoWithoutPlugins: getSupportInfo,
  normalizeOptionSettings,
  inferParser: (file, options8) => Promise.resolve(options8?.parser ?? inferParser2(file, options8)),
  vnopts: {
    ChoiceSchema,
    apiDescriptor
  },
  fastGlob: import_fast_glob.default,
  createTwoFilesPatch,
  picocolors: import_picocolors5.default,
  closetLevenshteinMatch: closestMatch,
  utilities: {
    omit: object_omit_default,
    createMockable: create_mockable_default
  }
};
var debugApis = {
  parse: withPlugins(parse6),
  formatAST: withPlugins(formatAst),
  formatDoc: withPlugins(formatDoc),
  printToDoc: withPlugins(printToDoc),
  printDocToString: withPlugins(printDocToString),
  // Exposed for tests
  mockable
};
export {
  debugApis as __debug,
  sharedWithCli as __internal,
  check,
  clearCache3 as clearConfigCache,
  index_exports as default,
  doc,
  format2 as format,
  formatWithCursor2 as formatWithCursor,
  get_file_info_default as getFileInfo,
  getSupportInfo2 as getSupportInfo,
  resolveConfig,
  resolveConfigFile,
  public_exports as util,
  version_evaluate_default as version
};
