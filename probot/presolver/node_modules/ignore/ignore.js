'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  return new IgnoreBase();
};

// A simple implementation of make-array
function make_array(subject) {
  return Array.isArray(subject) ? subject : [subject];
}

var REGEX_BLANK_LINE = /^\s+$/;
var REGEX_LEADING_EXCAPED_EXCLAMATION = /^\\\!/;
var REGEX_LEADING_EXCAPED_HASH = /^\\#/;
var SLASH = '/';
var KEY_IGNORE = typeof Symbol !== 'undefined' ? Symbol.for('node-ignore')
/* istanbul ignore next */
: 'node-ignore';

var IgnoreBase = function () {
  function IgnoreBase() {
    _classCallCheck(this, IgnoreBase);

    this._rules = [];
    this[KEY_IGNORE] = true;
    this._initCache();
  }

  _createClass(IgnoreBase, [{
    key: '_initCache',
    value: function _initCache() {
      this._cache = {};
    }

    // @param {Array.<string>|string|Ignore} pattern

  }, {
    key: 'add',
    value: function add(pattern) {
      this._added = false;

      if (typeof pattern === 'string') {
        pattern = pattern.split(/\r?\n/g);
      }

      make_array(pattern).forEach(this._addPattern, this);

      // Some rules have just added to the ignore,
      // making the behavior changed.
      if (this._added) {
        this._initCache();
      }

      return this;
    }

    // legacy

  }, {
    key: 'addPattern',
    value: function addPattern(pattern) {
      return this.add(pattern);
    }
  }, {
    key: '_addPattern',
    value: function _addPattern(pattern) {
      // #32
      if (pattern && pattern[KEY_IGNORE]) {
        this._rules = this._rules.concat(pattern._rules);
        this._added = true;
        return;
      }

      if (this._checkPattern(pattern)) {
        var rule = this._createRule(pattern);
        this._added = true;
        this._rules.push(rule);
      }
    }
  }, {
    key: '_checkPattern',
    value: function _checkPattern(pattern) {
      // > A blank line matches no files, so it can serve as a separator for readability.
      return pattern && typeof pattern === 'string' && !REGEX_BLANK_LINE.test(pattern)

      // > A line starting with # serves as a comment.
      && pattern.indexOf('#') !== 0;
    }
  }, {
    key: 'filter',
    value: function filter(paths) {
      var _this = this;

      return make_array(paths).filter(function (path) {
        return _this._filter(path);
      });
    }
  }, {
    key: 'createFilter',
    value: function createFilter() {
      var _this2 = this;

      return function (path) {
        return _this2._filter(path);
      };
    }
  }, {
    key: 'ignores',
    value: function ignores(path) {
      return !this._filter(path);
    }
  }, {
    key: '_createRule',
    value: function _createRule(pattern) {
      var origin = pattern;
      var negative = false;

      // > An optional prefix "!" which negates the pattern;
      if (pattern.indexOf('!') === 0) {
        negative = true;
        pattern = pattern.substr(1);
      }

      pattern = pattern
      // > Put a backslash ("\") in front of the first "!" for patterns that begin with a literal "!", for example, `"\!important!.txt"`.
      .replace(REGEX_LEADING_EXCAPED_EXCLAMATION, '!')
      // > Put a backslash ("\") in front of the first hash for patterns that begin with a hash.
      .replace(REGEX_LEADING_EXCAPED_HASH, '#');

      var regex = make_regex(pattern, negative);

      return {
        origin: origin,
        pattern: pattern,
        negative: negative,
        regex: regex
      };
    }

    // @returns `Boolean` true if the `path` is NOT ignored

  }, {
    key: '_filter',
    value: function _filter(path, slices) {
      if (!path) {
        return false;
      }

      if (path in this._cache) {
        return this._cache[path];
      }

      if (!slices) {
        // path/to/a.js
        // ['path', 'to', 'a.js']
        slices = path.split(SLASH);
      }

      slices.pop();

      return this._cache[path] = slices.length
      // > It is not possible to re-include a file if a parent directory of that file is excluded.
      // If the path contains a parent directory, check the parent first
      ? this._filter(slices.join(SLASH) + SLASH, slices) && this._test(path)

      // Or only test the path
      : this._test(path);
    }

    // @returns {Boolean} true if a file is NOT ignored

  }, {
    key: '_test',
    value: function _test(path) {
      // Explicitly define variable type by setting matched to `0`
      var matched = 0;

      this._rules.forEach(function (rule) {
        // if matched = true, then we only test negative rules
        // if matched = false, then we test non-negative rules
        if (!(matched ^ rule.negative)) {
          matched = rule.negative ^ rule.regex.test(path);
        }
      });

      return !matched;
    }
  }]);

  return IgnoreBase;
}();

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


var DEFAULT_REPLACER_PREFIX = [

// > Trailing spaces are ignored unless they are quoted with backslash ("\")
[
// (a\ ) -> (a )
// (a  ) -> (a)
// (a \ ) -> (a  )
/\\?\s+$/, function (match) {
  return match.indexOf('\\') === 0 ? ' ' : '';
}],

// replace (\ ) with ' '
[/\\\s/g, function () {
  return ' ';
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
[/[\\\^$.|?*+()\[{]/g, function (match) {
  return '\\' + match;
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
// > "**/foo/bar" matches file or directory "bar" anywhere that is directly under directory "foo".
// Notice that the '*'s have been replaced as '\\*'
/^\^*\\\*\\\*\\\//,

// '**/foo' <-> 'foo'
function () {
  return '^(?:.*\\/)?';
}]];

var DEFAULT_REPLACER_SUFFIX = [
// starting
[
// there will be no leading '/' (which has been replaced by section "leading slash")
// If starts with '**', adding a '^' to the regular expression also works
/^(?=[^\^])/, function () {
  return !/\/(?!$)/.test(this)
  // > If the pattern does not contain a slash /, Git treats it as a shell glob pattern
  // Actually, if there is only a trailing slash, git also treats it as a shell glob pattern
  ? '(?:^|\\/)'

  // > Otherwise, Git treats the pattern as a shell glob suitable for consumption by fnmatch(3)
  : '^';
}],

// two globstars
[
// Use lookahead assertions so that we could match more than one `'/**'`
/\\\/\\\*\\\*(?=\\\/|$)/g,

// Zero, one or several directories
// should not use '*', or it will be replaced by the next replacer

// Check if it is not the last `'/**'`
function (match, index, str) {
  return index + 6 < str.length

  // case: /**/
  // > A slash followed by two consecutive asterisks then a slash matches zero or more directories.
  // > For example, "a/**/b" matches "a/b", "a/x/b", "a/x/y/b" and so on.
  // '/**/'
  ? '(?:\\/[^\\/]+)*'

  // case: /**
  // > A trailing `"/**"` matches everything inside.

  // #21: everything inside but it should not include the current folder
  : '\\/.+';
}],

// intermediate wildcards
[
// Never replace escaped '*'
// ignore rule '\*' will match the path '*'

// 'abc.*/' -> go
// 'abc.*'  -> skip this rule
/(^|[^\\]+)\\\*(?=.+)/g,

// '*.js' matches '.js'
// '*.js' doesn't match 'abc'
function (match, p1) {
  return p1 + '[^\\/]*';
}],

// trailing wildcard
[/(\^|\\\/)?\\\*$/, function (match, p1) {
  return (p1
  // '\^':
  // '/*' does not match ''
  // '/*' does not match everything

  // '\\\/':
  // 'abc/*' does not match 'abc/'
  ? p1 + '[^/]+'

  // 'a*' matches 'a'
  // 'a*' matches 'aa'
  : '[^/]*') + '(?=$|\\/$)';
}], [
// unescape
/\\\\\\/g, function () {
  return '\\';
}]];

var POSITIVE_REPLACERS = [].concat(DEFAULT_REPLACER_PREFIX, [

// 'f'
// matches
// - /f(end)
// - /f/
// - (start)f(end)
// - (start)f/
// doesn't match
// - oof
// - foo
// pseudo:
// -> (^|/)f(/|$)

// ending
[
// 'js' will not match 'js.'
// 'ab' will not match 'abc'
/(?:[^*\/])$/,

// 'js*' will not match 'a.js'
// 'js/' will not match 'a.js'
// 'js' will match 'a.js' and 'a.js/'
function (match) {
  return match + '(?=$|\\/)';
}]], DEFAULT_REPLACER_SUFFIX);

var NEGATIVE_REPLACERS = [].concat(DEFAULT_REPLACER_PREFIX, [

// #24, #38
// The MISSING rule of [gitignore docs](https://git-scm.com/docs/gitignore)
// A negative pattern without a trailing wildcard should not
// re-include the things inside that directory.

// eg:
// ['node_modules/*', '!node_modules']
// should ignore `node_modules/a.js`
[/(?:[^*])$/, function (match) {
  return match + '(?=$|\\/$)';
}]], DEFAULT_REPLACER_SUFFIX);

// A simple cache, because an ignore rule only has only one certain meaning
var cache = {};

// @param {pattern}
function make_regex(pattern, negative) {
  var r = cache[pattern];
  if (r) {
    return r;
  }

  var replacers = negative ? NEGATIVE_REPLACERS : POSITIVE_REPLACERS;

  var source = replacers.reduce(function (prev, current) {
    return prev.replace(current[0], current[1].bind(pattern));
  }, pattern);

  return cache[pattern] = new RegExp(source, 'i');
}

// Windows
// --------------------------------------------------------------
/* istanbul ignore if  */
if (
// Detect `process` so that it can run in browsers.
typeof process !== 'undefined' && (process.env && process.env.IGNORE_TEST_WIN32 || process.platform === 'win32')) {

  var filter = IgnoreBase.prototype._filter;
  var make_posix = function make_posix(str) {
    return (/^\\\\\?\\/.test(str) || /[^\x00-\x80]+/.test(str) ? str : str.replace(/\\/g, '/')
    );
  };

  IgnoreBase.prototype._filter = function (path, slices) {
    path = make_posix(path);
    return filter.call(this, path, slices);
  };
}
