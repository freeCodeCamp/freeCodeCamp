"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// A simple implementation of make-array
function makeArray(subject) {
  return Array.isArray(subject) ? subject : [subject];
}
var EMPTY = '';
var SPACE = ' ';
var ESCAPE = '\\';
var REGEX_TEST_BLANK_LINE = /^\s+$/;
var REGEX_INVALID_TRAILING_BACKSLASH = /(?:[^\\]|^)\\$/;
var REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION = /^\\!/;
var REGEX_REPLACE_LEADING_EXCAPED_HASH = /^\\#/;
var REGEX_SPLITALL_CRLF = /\r?\n/g;
// /foo,
// ./foo,
// ../foo,
// .
// ..
var REGEX_TEST_INVALID_PATH = /^\.*\/|^\.+$/;
var SLASH = '/';

// Do not use ternary expression here, since "istanbul ignore next" is buggy
var TMP_KEY_IGNORE = 'node-ignore';
/* istanbul ignore else */
if (typeof Symbol !== 'undefined') {
  TMP_KEY_IGNORE = Symbol["for"]('node-ignore');
}
var KEY_IGNORE = TMP_KEY_IGNORE;
var define = function define(object, key, value) {
  return Object.defineProperty(object, key, {
    value: value
  });
};
var REGEX_REGEXP_RANGE = /([0-z])-([0-z])/g;
var RETURN_FALSE = function RETURN_FALSE() {
  return false;
};

// Sanitize the range of a regular expression
// The cases are complicated, see test cases for details
var sanitizeRange = function sanitizeRange(range) {
  return range.replace(REGEX_REGEXP_RANGE, function (match, from, to) {
    return from.charCodeAt(0) <= to.charCodeAt(0) ? match
    // Invalid range (out of order) which is ok for gitignore rules but
    //   fatal for JavaScript regular expression, so eliminate it.
    : EMPTY;
  });
};

// See fixtures #59
var cleanRangeBackSlash = function cleanRangeBackSlash(slashes) {
  var length = slashes.length;
  return slashes.slice(0, length - length % 2);
};

// > If the pattern ends with a slash,
// > it is removed for the purpose of the following description,
// > but it would only find a match with a directory.
// > In other words, foo/ will match a directory foo and paths underneath it,
// > but will not match a regular file or a symbolic link foo
// >  (this is consistent with the way how pathspec works in general in Git).
// '`foo/`' will not match regular file '`foo`' or symbolic link '`foo`'
// -> ignore-rules will not deal with it, because it costs extra `fs.stat` call
//      you could use option `mark: true` with `glob`

// '`foo/`' should not continue with the '`..`'
var REPLACERS = [[
// remove BOM
// TODO:
// Other similar zero-width characters?
/^\uFEFF/, function () {
  return EMPTY;
}],
// > Trailing spaces are ignored unless they are quoted with backslash ("\")
[
// (a\ ) -> (a )
// (a  ) -> (a)
// (a ) -> (a)
// (a \ ) -> (a  )
/((?:\\\\)*?)(\\?\s+)$/, function (_, m1, m2) {
  return m1 + (m2.indexOf('\\') === 0 ? SPACE : EMPTY);
}],
// replace (\ ) with ' '
// (\ ) -> ' '
// (\\ ) -> '\\ '
// (\\\ ) -> '\\ '
[/(\\+?)\s/g, function (_, m1) {
  var length = m1.length;
  return m1.slice(0, length - length % 2) + SPACE;
}],
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
[/[\\$.|*+(){^]/g, function (match) {
  return "\\".concat(match);
}], [
// > a question mark (?) matches a single character
/(?!\\)\?/g, function () {
  return '[^/]';
}],
// leading slash
[
// > A leading slash matches the beginning of the pathname.
// > For example, "/*.c" matches "cat-file.c" but not "mozilla-sha1/sha1.c".
// A leading slash matches the beginning of the pathname
/^\//, function () {
  return '^';
}],
// replace special metacharacter slash after the leading slash
[/\//g, function () {
  return '\\/';
}], [
// > A leading "**" followed by a slash means match in all directories.
// > For example, "**/foo" matches file or directory "foo" anywhere,
// > the same as pattern "foo".
// > "**/foo/bar" matches file or directory "bar" anywhere that is directly
// >   under directory "foo".
// Notice that the '*'s have been replaced as '\\*'
/^\^*\\\*\\\*\\\//,
// '**/foo' <-> 'foo'
function () {
  return '^(?:.*\\/)?';
}],
// starting
[
// there will be no leading '/'
//   (which has been replaced by section "leading slash")
// If starts with '**', adding a '^' to the regular expression also works
/^(?=[^^])/, function startingReplacer() {
  // If has a slash `/` at the beginning or middle
  return !/\/(?!$)/.test(this)
  // > Prior to 2.22.1
  // > If the pattern does not contain a slash /,
  // >   Git treats it as a shell glob pattern
  // Actually, if there is only a trailing slash,
  //   git also treats it as a shell glob pattern

  // After 2.22.1 (compatible but clearer)
  // > If there is a separator at the beginning or middle (or both)
  // > of the pattern, then the pattern is relative to the directory
  // > level of the particular .gitignore file itself.
  // > Otherwise the pattern may also match at any level below
  // > the .gitignore level.
  ? '(?:^|\\/)'

  // > Otherwise, Git treats the pattern as a shell glob suitable for
  // >   consumption by fnmatch(3)
  : '^';
}],
// two globstars
[
// Use lookahead assertions so that we could match more than one `'/**'`
/\\\/\\\*\\\*(?=\\\/|$)/g,
// Zero, one or several directories
// should not use '*', or it will be replaced by the next replacer

// Check if it is not the last `'/**'`
function (_, index, str) {
  return index + 6 < str.length

  // case: /**/
  // > A slash followed by two consecutive asterisks then a slash matches
  // >   zero or more directories.
  // > For example, "a/**/b" matches "a/b", "a/x/b", "a/x/y/b" and so on.
  // '/**/'
  ? '(?:\\/[^\\/]+)*'

  // case: /**
  // > A trailing `"/**"` matches everything inside.

  // #21: everything inside but it should not include the current folder
  : '\\/.+';
}],
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
function (_, p1, p2) {
  // 1.
  // > An asterisk "*" matches anything except a slash.
  // 2.
  // > Other consecutive asterisks are considered regular asterisks
  // > and will match according to the previous rules.
  var unescaped = p2.replace(/\\\*/g, '[^\\/]*');
  return p1 + unescaped;
}], [
// unescape, revert step 3 except for back slash
// For example, if a user escape a '\\*',
// after step 3, the result will be '\\\\\\*'
/\\\\\\(?=[$.|*+(){^])/g, function () {
  return ESCAPE;
}], [
// '\\\\' -> '\\'
/\\\\/g, function () {
  return ESCAPE;
}], [
// > The range notation, e.g. [a-zA-Z],
// > can be used to match one of the characters in a range.

// `\` is escaped by step 3
/(\\)?\[([^\]/]*?)(\\*)($|\])/g, function (match, leadEscape, range, endEscape, close) {
  return leadEscape === ESCAPE
  // '\\[bar]' -> '\\\\[bar\\]'
  ? "\\[".concat(range).concat(cleanRangeBackSlash(endEscape)).concat(close) : close === ']' ? endEscape.length % 2 === 0
  // A normal case, and it is a range notation
  // '[bar]'
  // '[bar\\\\]'
  ? "[".concat(sanitizeRange(range)).concat(endEscape, "]") // Invalid range notaton
  // '[bar\\]' -> '[bar\\\\]'
  : '[]' : '[]';
}],
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
function (match) {
  return /\/$/.test(match)
  // foo/ will not match 'foo'
  ? "".concat(match, "$") // foo matches 'foo' and 'foo/'
  : "".concat(match, "(?=$|\\/$)");
}],
// trailing wildcard
[/(\^|\\\/)?\\\*$/, function (_, p1) {
  var prefix = p1
  // '\^':
  // '/*' does not match EMPTY
  // '/*' does not match everything

  // '\\\/':
  // 'abc/*' does not match 'abc/'
  ? "".concat(p1, "[^/]+") // 'a*' matches 'a'
  // 'a*' matches 'aa'
  : '[^/]*';
  return "".concat(prefix, "(?=$|\\/$)");
}]];

// A simple cache, because an ignore rule only has only one certain meaning
var regexCache = Object.create(null);

// @param {pattern}
var makeRegex = function makeRegex(pattern, ignoreCase) {
  var source = regexCache[pattern];
  if (!source) {
    source = REPLACERS.reduce(function (prev, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        matcher = _ref2[0],
        replacer = _ref2[1];
      return prev.replace(matcher, replacer.bind(pattern));
    }, pattern);
    regexCache[pattern] = source;
  }
  return ignoreCase ? new RegExp(source, 'i') : new RegExp(source);
};
var isString = function isString(subject) {
  return typeof subject === 'string';
};

// > A blank line matches no files, so it can serve as a separator for readability.
var checkPattern = function checkPattern(pattern) {
  return pattern && isString(pattern) && !REGEX_TEST_BLANK_LINE.test(pattern) && !REGEX_INVALID_TRAILING_BACKSLASH.test(pattern)

  // > A line starting with # serves as a comment.
  && pattern.indexOf('#') !== 0;
};
var splitPattern = function splitPattern(pattern) {
  return pattern.split(REGEX_SPLITALL_CRLF);
};
var IgnoreRule = /*#__PURE__*/_createClass(function IgnoreRule(origin, pattern, negative, regex) {
  _classCallCheck(this, IgnoreRule);
  this.origin = origin;
  this.pattern = pattern;
  this.negative = negative;
  this.regex = regex;
});
var createRule = function createRule(pattern, ignoreCase) {
  var origin = pattern;
  var negative = false;

  // > An optional prefix "!" which negates the pattern;
  if (pattern.indexOf('!') === 0) {
    negative = true;
    pattern = pattern.substr(1);
  }
  pattern = pattern
  // > Put a backslash ("\") in front of the first "!" for patterns that
  // >   begin with a literal "!", for example, `"\!important!.txt"`.
  .replace(REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION, '!')
  // > Put a backslash ("\") in front of the first hash for patterns that
  // >   begin with a hash.
  .replace(REGEX_REPLACE_LEADING_EXCAPED_HASH, '#');
  var regex = makeRegex(pattern, ignoreCase);
  return new IgnoreRule(origin, pattern, negative, regex);
};
var throwError = function throwError(message, Ctor) {
  throw new Ctor(message);
};
var checkPath = function checkPath(path, originalPath, doThrow) {
  if (!isString(path)) {
    return doThrow("path must be a string, but got `".concat(originalPath, "`"), TypeError);
  }

  // We don't know if we should ignore EMPTY, so throw
  if (!path) {
    return doThrow("path must not be empty", TypeError);
  }

  // Check if it is a relative path
  if (checkPath.isNotRelative(path)) {
    var r = '`path.relative()`d';
    return doThrow("path should be a ".concat(r, " string, but got \"").concat(originalPath, "\""), RangeError);
  }
  return true;
};
var isNotRelative = function isNotRelative(path) {
  return REGEX_TEST_INVALID_PATH.test(path);
};
checkPath.isNotRelative = isNotRelative;
checkPath.convert = function (p) {
  return p;
};
var Ignore = /*#__PURE__*/function () {
  function Ignore() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref3$ignorecase = _ref3.ignorecase,
      ignorecase = _ref3$ignorecase === void 0 ? true : _ref3$ignorecase,
      _ref3$ignoreCase = _ref3.ignoreCase,
      ignoreCase = _ref3$ignoreCase === void 0 ? ignorecase : _ref3$ignoreCase,
      _ref3$allowRelativePa = _ref3.allowRelativePaths,
      allowRelativePaths = _ref3$allowRelativePa === void 0 ? false : _ref3$allowRelativePa;
    _classCallCheck(this, Ignore);
    define(this, KEY_IGNORE, true);
    this._rules = [];
    this._ignoreCase = ignoreCase;
    this._allowRelativePaths = allowRelativePaths;
    this._initCache();
  }
  _createClass(Ignore, [{
    key: "_initCache",
    value: function _initCache() {
      this._ignoreCache = Object.create(null);
      this._testCache = Object.create(null);
    }
  }, {
    key: "_addPattern",
    value: function _addPattern(pattern) {
      // #32
      if (pattern && pattern[KEY_IGNORE]) {
        this._rules = this._rules.concat(pattern._rules);
        this._added = true;
        return;
      }
      if (checkPattern(pattern)) {
        var rule = createRule(pattern, this._ignoreCase);
        this._added = true;
        this._rules.push(rule);
      }
    }

    // @param {Array<string> | string | Ignore} pattern
  }, {
    key: "add",
    value: function add(pattern) {
      this._added = false;
      makeArray(isString(pattern) ? splitPattern(pattern) : pattern).forEach(this._addPattern, this);

      // Some rules have just added to the ignore,
      // making the behavior changed.
      if (this._added) {
        this._initCache();
      }
      return this;
    }

    // legacy
  }, {
    key: "addPattern",
    value: function addPattern(pattern) {
      return this.add(pattern);
    }

    //          |           ignored : unignored
    // negative |   0:0   |   0:1   |   1:0   |   1:1
    // -------- | ------- | ------- | ------- | --------
    //     0    |  TEST   |  TEST   |  SKIP   |    X
    //     1    |  TESTIF |  SKIP   |  TEST   |    X

    // - SKIP: always skip
    // - TEST: always test
    // - TESTIF: only test if checkUnignored
    // - X: that never happen

    // @param {boolean} whether should check if the path is unignored,
    //   setting `checkUnignored` to `false` could reduce additional
    //   path matching.

    // @returns {TestResult} true if a file is ignored
  }, {
    key: "_testOne",
    value: function _testOne(path, checkUnignored) {
      var ignored = false;
      var unignored = false;
      this._rules.forEach(function (rule) {
        var negative = rule.negative;
        if (unignored === negative && ignored !== unignored || negative && !ignored && !unignored && !checkUnignored) {
          return;
        }
        var matched = rule.regex.test(path);
        if (matched) {
          ignored = !negative;
          unignored = negative;
        }
      });
      return {
        ignored: ignored,
        unignored: unignored
      };
    }

    // @returns {TestResult}
  }, {
    key: "_test",
    value: function _test(originalPath, cache, checkUnignored, slices) {
      var path = originalPath
      // Supports nullable path
      && checkPath.convert(originalPath);
      checkPath(path, originalPath, this._allowRelativePaths ? RETURN_FALSE : throwError);
      return this._t(path, cache, checkUnignored, slices);
    }
  }, {
    key: "_t",
    value: function _t(path, cache, checkUnignored, slices) {
      if (path in cache) {
        return cache[path];
      }
      if (!slices) {
        // path/to/a.js
        // ['path', 'to', 'a.js']
        slices = path.split(SLASH);
      }
      slices.pop();

      // If the path has no parent directory, just test it
      if (!slices.length) {
        return cache[path] = this._testOne(path, checkUnignored);
      }
      var parent = this._t(slices.join(SLASH) + SLASH, cache, checkUnignored, slices);

      // If the path contains a parent directory, check the parent first
      return cache[path] = parent.ignored
      // > It is not possible to re-include a file if a parent directory of
      // >   that file is excluded.
      ? parent : this._testOne(path, checkUnignored);
    }
  }, {
    key: "ignores",
    value: function ignores(path) {
      return this._test(path, this._ignoreCache, false).ignored;
    }
  }, {
    key: "createFilter",
    value: function createFilter() {
      var _this = this;
      return function (path) {
        return !_this.ignores(path);
      };
    }
  }, {
    key: "filter",
    value: function filter(paths) {
      return makeArray(paths).filter(this.createFilter());
    }

    // @returns {TestResult}
  }, {
    key: "test",
    value: function test(path) {
      return this._test(path, this._testCache, true);
    }
  }]);
  return Ignore;
}();
var factory = function factory(options) {
  return new Ignore(options);
};
var isPathValid = function isPathValid(path) {
  return checkPath(path && checkPath.convert(path), path, RETURN_FALSE);
};
factory.isPathValid = isPathValid;

// Fixes typescript
factory["default"] = factory;
module.exports = factory;

// Windows
// --------------------------------------------------------------
/* istanbul ignore if */
if (
// Detect `process` so that it can run in browsers.
typeof process !== 'undefined' && (process.env && process.env.IGNORE_TEST_WIN32 || process.platform === 'win32')) {
  /* eslint no-control-regex: "off" */
  var makePosix = function makePosix(str) {
    return /^\\\\\?\\/.test(str) || /[\0-\x1F"<>\|]+/.test(str) ? str : str.replace(/\\/g, '/');
  };
  checkPath.convert = makePosix;

  // 'C:\\foo'     <- 'C:\\foo' has been converted to 'C:/'
  // 'd:\\foo'
  var REGIX_IS_WINDOWS_PATH_ABSOLUTE = /^[a-z]:\//i;
  checkPath.isNotRelative = function (path) {
    return REGIX_IS_WINDOWS_PATH_ABSOLUTE.test(path) || isNotRelative(path);
  };
}
