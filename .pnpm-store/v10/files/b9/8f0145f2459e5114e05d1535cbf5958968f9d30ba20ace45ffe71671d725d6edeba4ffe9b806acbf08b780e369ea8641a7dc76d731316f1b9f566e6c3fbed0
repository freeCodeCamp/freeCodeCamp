"use strict";

var _TRAILING_WILD_CARD_R;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// A simple implementation of make-array
function makeArray(subject) {
  return Array.isArray(subject) ? subject : [subject];
}
var UNDEFINED = undefined;
var EMPTY = '';
var SPACE = ' ';
var ESCAPE = '\\';

// The characters that carry a meaning of their own inside a regular
//   expression, so a literal one has to be escaped before it is emitted.
var REGEX_LITERAL_SPECIAL = /[.*+?()[\]{}^$|\\/]/;
// A line of only spaces is blank -- the trailing-space trimming empties it --
//   but a line holding a tab is a pattern for a tab-named path, since git
//   never trims a tab.
// A leading BOM is removed during compilation, so reject a line that would
//   become empty after removing it and trimming spaces.
var REGEX_TEST_BLANK_LINE = /^\uFEFF? *$/;
var REGEX_INVALID_TRAILING_BACKSLASH = /(?:[^\\]|^)\\$/;
var REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION = /^\\!/;
var REGEX_REPLACE_LEADING_EXCAPED_HASH = /^\\#/;
var REGEX_SPLITALL_CRLF = /\r?\n/g;

// Invalid:
// - /foo,
// - ./foo,
// - ../foo,
// - .
// - ..
// Valid:
// - .foo
var DOUBLE_SLASH = '//';
var SLASH_CODE = 47;
var DOT_CODE = 46;
var SLASH = '/';

// Do not use ternary expression here, since "istanbul ignore next" is buggy
var TMP_KEY_IGNORE = 'node-ignore';
/* istanbul ignore else */
if (typeof Symbol !== 'undefined') {
  TMP_KEY_IGNORE = Symbol["for"]('node-ignore');
}
var KEY_IGNORE = TMP_KEY_IGNORE;
var define = function define(object, key, value) {
  Object.defineProperty(object, key, {
    value: value
  });
  return value;
};
var RETURN_FALSE = function RETURN_FALSE() {
  return false;
};

// See fixtures #59
var cleanRangeBackSlash = function cleanRangeBackSlash(slashes) {
  var length = slashes.length;
  return slashes.slice(0, length - length % 2);
};

// > The range notation, e.g. [a-zA-Z],
// > can be used to match one of the characters in a range.
//
// gitignore(5) defers to fnmatch(3) for this, and git implements it in
//   `wildmatch.c`.  A bracket expression has a sub-grammar of its own, which
//   is neither the surrounding pattern grammar nor the JavaScript one:
//
//   - a `]` right after `[` or `[!` is a literal member, not the terminator
//   - `[:alpha:]` names one of twelve POSIX classes
//   - `\` escapes the next member, `]` included
//   - `*`, `?` and `.` are plain literal members
//   - an unterminated expression makes the whole pattern match nothing
//
// which means the expression can not be located -- let alone translated -- by
//   a regular expression.  It is scanned out of the pattern before the
//   replacers below run, and put back once they are done, so that neither the
//   metacharacter escaper nor the `?` / `*` replacers ever see its body.

// git classifies with its own ASCII-only ctype macros (`wildmatch.c`), never
//   with the C library ones, so these must not be mapped onto `\d` / `\w` /
//   `\s`, which are wider.  `/` is left out of every expansion, because a
//   bracket expression never matches a path separator.
var POSIX_CLASSES = {
  alnum: '0-9A-Za-z',
  alpha: 'A-Za-z',
  blank: ' \\t',
  cntrl: '\\x00-\\x1f\\x7f',
  digit: '0-9',
  graph: '!-.0-~',
  lower: 'a-z',
  print: ' -.0-~',
  punct: '!-.:-@\\[-`{-~',
  // git's `sane-ctype.h` classifies \v and \f as control, not space,
  //   unlike C's `isspace`
  space: ' \\t\\n\\r',
  upper: 'A-Z',
  xdigit: '0-9A-Fa-f'
};
var CLASS_MEMBERS_TO_ESCAPE = '\\]^-[';
var escapeMember = function escapeMember(_char) {
  return CLASS_MEMBERS_TO_ESCAPE.indexOf(_char) < 0 ? _char : ESCAPE + _char;
};

// > if (matched == negated || ((flags & WM_PATHNAME) && text_ch == '/'))
// >   return WM_ABORT_TO_STARSTAR;                     (git, `wildmatch.c`)
// A bracket expression never matches a path separator, whatever its members
//   say, so a negated class gets `/` as one more excluded character, while a
//   plain one -- where a literal member or a range could still let `/` in --
//   is guarded with a lookahead, `/` being impossible to subtract from a
//   JavaScript character class.
var NON_SLASH = '(?!\\/)';
var classSource = function classSource(negated, body) {
  if (negated) {
    return "[^\\/".concat(body, "]");
  }
  var source = "[".concat(body, "]");
  return new RegExp(source).test('/') ? NON_SLASH + source : source;
};

// Scan the bracket expression that starts at `pattern[start] === '['`,
//   mirroring the member loop of git's `wildmatch.c`.
// @returns {{end: number, source: string} | null} `null` if the expression is
//   never terminated, which makes the whole pattern match nothing.
var scanBracket = function scanBracket(pattern, start) {
  var length = pattern.length;
  var index = start + 1;
  var negated = EMPTY;
  var lead = pattern[index];
  if (lead === '!' || lead === '^') {
    negated = '^';
    index++;
  }
  var body = EMPTY;

  // The member a `-` could start a range from, or EMPTY when the previous
  //   member can not open one (start of the body, or a range / POSIX class
  //   that has just closed)
  var prev = EMPTY;

  // git scans the members with a do-while, so the first one is consumed
  //   unconditionally.  That is the whole reason a leading `]` is a member
  //   and not the terminator.
  for (;;) {
    var _char2 = pattern[index];
    if (_char2 === UNDEFINED) {
      return null;
    }
    if (_char2 === ESCAPE) {
      var escaped = pattern[index + 1];
      if (escaped === UNDEFINED) {
        return null;
      }
      body += escapeMember(escaped);
      prev = escaped;
      index++;
    } else if (_char2 === '-' && prev && index + 1 < length && pattern[index + 1] !== ']') {
      index++;
      var to = pattern[index];
      if (to === ESCAPE) {
        // A pattern can not end on a lone backslash -- `checkPattern` has
        //   already thrown it away -- so there is an upper bound to read.
        to = pattern[index += 1];
      }
      // An out-of-order range matches nothing in git but is a syntax error in
      //   JavaScript, so it is dropped.  Its lower bound stays: git tests it
      //   as a plain member before it ever looks at the `-`, so `[c-a]` does
      //   match `c`.
      if (prev <= to) {
        body += "-".concat(escapeMember(to));
      }
      prev = EMPTY;
    } else if (_char2 === '[' && pattern[index + 1] === ':') {
      var nameStart = index + 2;
      var end = nameStart;
      while (end < length && pattern[end] !== ']') {
        end++;
      }
      if (end === length) {
        return null;
      }
      if (end > nameStart && pattern[end - 1] === ':') {
        var expanded = POSIX_CLASSES[pattern.slice(nameStart, end - 1)];

        // An unknown class name makes the whole pattern match nothing
        if (expanded === UNDEFINED) {
          return null;
        }
        body += expanded;
        prev = EMPTY;
        index = end;
      } else {
        // No `:]` to close it, so the `[` is a plain member and scanning
        //   resumes right after it.
        body += escapeMember('[');
        prev = '[';
        index = nameStart - 2;
      }
    } else {
      body += escapeMember(_char2);
      prev = _char2;
    }
    index++;
    if (pattern[index] === ']') {
      return {
        end: index,
        source: classSource(negated, body)
      };
    }
  }
};

// An empty JavaScript class can never match, which is how a pattern that git
//   gives up on (`WM_ABORT_ALL`) is expressed here.
var NEVER_MATCH = '[]';

// A NUL can appear in neither a `.gitignore` line nor a path, which makes it
//   the one safe placeholder character.  A literal one in the pattern is
//   held aside all the same, so a collision is impossible by construction.
var PLACEHOLDER = "\0";
var REGEX_RESTORE_PLACEHOLDER = new RegExp("".concat(PLACEHOLDER, "(\\d+)").concat(PLACEHOLDER), 'g');

// The one wildcard the chain does not expand for itself is a trailing `*`. How
//   it expands depends on the mode (`regex` vs `checkRegex`), so `_make` is
//   left to do it, and until then the pending wildcard travels as this marker.
//   That is what keeps it apart from a user-escaped literal `\*`: the unescape
//   steps collapse the escaped one to the exact `\*` a wildcard would leave
//   behind, so by the time `_make` runs the two are otherwise the same string
//   and a literal star gets wrongly rewritten into a wildcard. This marker is a
//   private-use character no compiled pattern carries, and it never survives
//   into a `RegExp` -- `_make` always turns it back into a real wildcard first.
var TRAILING_WILDCARD = "\uE000";

// Replace every bracket expression with a placeholder the replacers below
//   leave alone, and translate it separately.
var extractBrackets = function extractBrackets(pattern) {
  var sources = [];
  var hold = function hold(source) {
    return "".concat(PLACEHOLDER).concat(sources.push(source) - 1).concat(PLACEHOLDER);
  };
  var length = pattern.length;
  var out = EMPTY;
  var index = 0;
  while (index < length) {
    var _char3 = pattern[index];
    if (_char3 === ESCAPE) {
      // > Put a backslash ("\") in front of ... a character to make it literal.
      //                                            (gitignore(5) -> fnmatch(3))
      // A backslash quotes the next character, whatever it is, so `\d` is a
      //   literal `d`, not the regex digit class, and `\?` is a literal `?`,
      //   not a wildcard. Held aside as its literal here, the escape never
      //   reaches the replacers below, which would otherwise let `\d`, `\b`,
      //   `\1`, `\/` keep their regular-expression meaning, and would turn a
      //   `\?` into `[^\/]`.
      //
      // Four escapes are left for the chain, each with dedicated handling it
      //   would be wrong to bypass: `\*` (a literal star, told apart from a
      //   wildcard by `TRAILING_WILDCARD` and the wildcard replacers), `\[`
      //   (a literal bracket, the one `[` the bracket replacer still expects),
      //   `\ ` (a quoted trailing space), and `\\` (a literal backslash). A
      //   lone trailing backslash never reaches here -- `checkPattern` throws
      //   it out first.
      var escaped = pattern[index + 1];
      if (escaped === '*' || escaped === '[' || escaped === SPACE || escaped === ESCAPE) {
        out += pattern.slice(index, index + 2);
      } else {
        out += hold(REGEX_LITERAL_SPECIAL.test(escaped) ? ESCAPE + escaped : escaped);
      }
      index += 2;
    } else if (_char3 === PLACEHOLDER) {
      // Hold a literal placeholder character aside as well, so that pattern
      //   text can never be mistaken for a placeholder we emitted.
      out += hold("[".concat(PLACEHOLDER, "]"));
      index++;
    } else if (_char3 === '[') {
      var scanned = scanBracket(pattern, index);
      if (scanned === null) {
        // git gives up on the whole pattern (`WM_ABORT_ALL`), so whatever
        //   follows can not make it match either.
        out += hold(NEVER_MATCH);
        index = length;
      } else {
        out += hold(scanned.source);
        index = scanned.end + 1;
      }
    } else {
      out += _char3;
      index++;
    }
  }
  return {
    source: out,
    sources: sources
  };
};

// A step of the chain below is normally a `[matcher, replacer]` pair handed
//   to `String.replace`. `DIRECT` marks the ones that are plain string work
//   instead, and take `(source, pattern)`.
//
// Anchoring the two ends is exactly that -- a test of one character and a
//   concatenation -- and putting it through the regular expression engine
//   cost a third of this chain for nothing: 167ns where 10ns does the same
//   job. The two are still steps in the same list, in the same places,
//   because their position in the order is part of what they mean.
var DIRECT = null;

// A separator at the beginning or in the middle of a pattern, as opposed to
//   one at the very end.
var REGEX_INNER_SLASH = /\/(?!$)/;

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
// The chain that turns one gitignore pattern into a regular expression
//   source, in order. A step is either
//
//   [matcher, replacer]            handed to `String.replace`
//   [matcher, replacer, required]  the same, but skipped outright unless
//                                    `required` appears in the string, which
//                                    the matcher cannot match without
//   [DIRECT, transform]            plain string work, taking (source, pattern)
//
// The `required` character is only ever a shortcut: finding it does not mean
//   the matcher will match, and not finding it means it cannot. It is there
//   because scanning for one character costs a fraction of running a matcher
//   that then finds nothing -- for the wildcard step, whose `[^\\]+`
//   backtracks its way through the whole string before giving up, 11ns
//   against 400ns.
var REPLACERS = [[
// Remove BOM
// TODO:
// Other similar zero-width characters?
/^\uFEFF/, function () {
  return EMPTY;
}, "\uFEFF"], [
// A trailing line terminator, left on when a whole file's contents are
//   added as one pattern rather than split into lines. git never sees one
//   -- it reads a `.gitignore` line by line -- so it is not part of the
//   pattern and is dropped here, apart from the trailing-space trimming,
//   which follows git in touching spaces and nothing else.
/[\r\n]+$/, function () {
  return EMPTY;
}],
// > Trailing spaces are ignored unless they are quoted with backslash ("\")
[
// Only spaces, never tabs or other whitespace: git trims a trailing run
//   of `' '` and nothing else (dir.c, `trim_trailing_spaces`, a single
//   `case ' '`), so a pattern ending in a tab keeps it as a literal.
// (a\ ) -> (a )
// (a  ) -> (a)
// (a ) -> (a)
// (a \ ) -> (a  )
/((?:\\\\)*?)(\\? +)$/, function (_, m1, m2) {
  return m1 + (m2.indexOf('\\') === 0 ? SPACE : EMPTY);
}],
// Replace (\ ) with ' '
// Only a space: an escaped tab or other whitespace is already a literal by
//   the time it reaches here, and a bare tab must be left as one, not turned
//   into a space.
// (\ ) -> ' '
// (\\ ) -> '\\ '
// (\\\ ) -> '\\ '
[/(\\+?) /g, function (_, m1) {
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
}, '?'],
// leading slash
[
// > A leading slash matches the beginning of the pathname.
// > For example, "/*.c" matches "cat-file.c" but not "mozilla-sha1/sha1.c".
// A leading slash matches the beginning of the pathname
/^\//, function () {
  return '^';
}, SLASH],
// replace special metacharacter slash after the leading slash
[/\//g, function () {
  return '\\/';
}, SLASH], [
// > A leading "**" followed by a slash means match in all directories.
// > For example, "**/foo" matches file or directory "foo" anywhere,
// > the same as pattern "foo".
// > "**/foo/bar" matches file or directory "bar" anywhere that is directly
// >   under directory "foo".
// Notice that the '*'s have been replaced as '\\*'
/^\^*(?:\\\*\\\*\\\/)+/,
// '**/foo' <-> 'foo'
function () {
  return '^(?:.*\\/)?';
}, '*'],
// starting
[
// there will be no leading '/'
//   (which has been replaced by section "leading slash")
// If starts with '**', adding a '^' to the regular expression also works
DIRECT, function (source, pattern) {
  // Nothing to anchor to, or already anchored
  if (!source || source[0] === '^') {
    return source;
  }

  // If has a slash `/` at the beginning or middle
  var anchor = !REGEX_INNER_SLASH.test(pattern)
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
  return anchor + source;
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

  // case: /**/ at the end of the pattern, i.e. a trailing `'/**/'`
  // > A trailing `"/**/"` (a trailing `"/**"` restricted to directories)
  // >   matches everything inside, but it should not match the current
  // >   folder itself, so it requires at least one directory segment.
  // 'a/**/' matches 'a/b/', 'a/x/y/' but not 'a/'
  ? str.slice(index + 6) === '\\/' ? '(?:\\/[^\\/]+)+'

  // case: /**/
  // > A slash followed by two consecutive asterisks then a slash matches
  // >   zero or more directories.
  // > For example, "a/**/b" matches "a/b", "a/x/b", "a/x/y/b" and so on.
  // '/**/'
  : '(?:\\/[^\\/]+)*'

  // case: /**
  // > A trailing `"/**"` matches everything inside.

  // #21: everything inside but it should not include the current folder
  : '\\/.+';
}, '*'],
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
}, '*'],
// trailing wildcard, held apart from a literal star
[
// The step above leaves a trailing `*` alone, so a single `\*` is all that
//   can be left at the end here. Whether it is a wildcard or a literal
//   turns on the backslashes the user put in front of it: the escaper has
//   since doubled every one, so what stands here is those `2N` doubled
//   backslashes and then the star's own escape. An even number of the
//   original `N` leaves the star unescaped -- a wildcard -- and an odd
//   number escapes it -- a literal. This runs while the two are still
//   distinct, before the unescape steps below collapse the literal onto
//   the very `\*` a wildcard leaves behind.
/(^|[^\\])((?:\\\\)*)\\\*$/, function (match, p1, p2) {
  return (
    // `p2` holds the doubled user backslashes; half of them is `N`.
    p2.length / 2 % 2 === 0
    // A real wildcard: carry it to `_make` as the marker, so the unescape
    //   steps and the trailing-wildcard rewrite can never mistake it for a
    //   literal `\*` (nor the reverse).
    ? p1 + p2 + TRAILING_WILDCARD
    // A literal star: leave it exactly as it stands for the unescape steps.
    : match
  );
}, '*'], [
// unescape, revert step 3 except for back slash
// For example, if a user escape a '\\*',
// after step 3, the result will be '\\\\\\*'
/\\\\\\(?=[$.|*+(){^])/g, function () {
  return ESCAPE;
}, ESCAPE + ESCAPE], [
// '\\\\' -> '\\'
/\\\\/g, function () {
  return ESCAPE;
}, ESCAPE + ESCAPE], [
// Every real bracket expression -- POSIX classes included -- has already
//   been held aside by `extractBrackets`, so the only `[` left in the
//   pattern is an escaped, literal one.

// `\` is escaped by step 3
/\\\[([^\]/]*?)(\\*)($|\])/g,
// '\\[bar]' -> '\\\\[bar\\]'
function (match, range, endEscape, close) {
  return "\\[".concat(range).concat(cleanRangeBackSlash(endEscape)).concat(close);
}, '['],
// ending
[
// 'js' will not match 'js.'
// 'ab' will not match 'abc'
DIRECT,
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
function (source) {
  var last = source[source.length - 1];

  // The pattern is empty, or ends in the pending trailing wildcard the next
  //   step owns. A trailing `*` that is not the marker is a literal star,
  //   which anchors like any other final character.
  if (!last || last === TRAILING_WILDCARD) {
    return source;
  }
  return last === SLASH
  // foo/ will not match 'foo'
  ? "".concat(source, "$") // foo matches 'foo' and 'foo/'
  : "".concat(source, "(?=$|\\/$)");
}]];
var REGEX_REPLACE_TRAILING_WILDCARD = /(^|\\\/)?\uE000$/;
var MODE_IGNORE = 'regex';
var MODE_CHECK_IGNORE = 'checkRegex';
var UNDERSCORE = '_';
var TRAILING_WILD_CARD_REPLACERS = (_TRAILING_WILD_CARD_R = {}, _defineProperty(_TRAILING_WILD_CARD_R, MODE_IGNORE, function (_, p1) {
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
}), _defineProperty(_TRAILING_WILD_CARD_R, MODE_CHECK_IGNORE, function (_, p1) {
  // When doing `git check-ignore`
  var prefix = p1
  // '\\\/':
  // 'abc/*' DOES match 'abc/' !
  ? "".concat(p1, "[^/]*") // 'a*' matches 'a'
  // 'a*' matches 'aa'
  : '[^/]*';
  return "".concat(prefix, "(?=$|\\/$)");
}), _TRAILING_WILD_CARD_R);
var WILDCARD = '[^\\/]*';

// Where a run of non-slash wildcards is split by single fixed characters --
//   `[^/]*x[^/]*y...` -- the engine has many equivalent ways to lay the
//   input across the wildcards, and on input that does not match it works
//   through all of them, so the time grows with the number of wildcards
//   rather than the length of the path. Every wildcard but the last in such a
//   run can be pinned to stop at the character that follows it, which leaves
//   one way to lay out the input and no rewinding, without changing which
//   paths match: the fixed characters still bound the count, and the last
//   wildcard still absorbs the rest.
//
// The source is read one token at a time -- a wildcard, a single-character
//   piece (a literal, an escape, a class), or a parenthesised group or anchor
//   that ends the run -- so only a genuine wildcard is touched.

// The fixed pieces between the wildcard at `at` and the next wildcard of the
//   run, joined as they appear in the source. A run never holds two wildcards
//   in a row, so there is always at least one piece.
var separatorAfter = function separatorAfter(run, at) {
  var separator = EMPTY;
  for (var index = at + 1; index < run.length && !run[index].wildcard; index++) {
    separator += run[index].single;
  }
  return separator;
};
var pinWildcards = function pinWildcards(source) {
  if (source.indexOf(WILDCARD) < 0) {
    return source;
  }
  var tokens = [];
  var length = source.length;
  var index = 0;
  while (index < length) {
    var _char4 = source[index];
    if (source.startsWith(WILDCARD, index)) {
      tokens.push({
        wildcard: true
      });
      index += WILDCARD.length;
    } else if (_char4 === '[') {
      var end = index + 1;
      if (source[end] === '^') {
        end++;
      }
      if (source[end] === ']') {
        end++;
      }
      while (end < length && source[end] !== ']') {
        end += source[end] === ESCAPE ? 2 : 1;
      }
      end++;
      tokens.push({
        single: source.slice(index, end)
      });
      index = end;
    } else if (_char4 === ESCAPE) {
      tokens.push({
        single: source.slice(index, index + 2)
      });
      index += 2;
    } else if (_char4 === '(') {
      var depth = 0;
      var _end = index;
      do {
        if (source[_end] === ESCAPE) {
          _end++;
        } else if (source[_end] === '(') {
          depth++;
        } else if (source[_end] === ')') {
          depth--;
        }
        _end++;
      } while (_end < length && depth > 0);
      if ('*+?'.indexOf(source[_end]) >= 0) {
        _end++;
      }
      tokens.push({
        boundary: source.slice(index, _end)
      });
      index = _end;
    } else if (_char4 === '^' || _char4 === '$') {
      tokens.push({
        boundary: _char4
      });
      index++;
    } else {
      tokens.push({
        single: _char4
      });
      index++;
    }
  }
  var out = EMPTY;
  var run = [];
  var flush = function flush() {
    var lastWildcard;
    run.forEach(function (token, at) {
      if (token.wildcard) {
        lastWildcard = at;
      }
    });
    run.forEach(function (token, at) {
      if (!token.wildcard) {
        out += token.single;
        return;
      }

      // A wildcard that is not the last in the run is pinned to the whole
      //   fixed piece that separates it from the next wildcard, not just to
      //   that piece's first character: stopping at the first character alone
      //   would let the wildcard hand over at a place where the rest of the
      //   separator cannot follow, and the pin leaves no way back, so
      //   `f*o/*/*` would miss `foo/b/c` -- the first `o` of `foo` is not the
      //   one the `o/` after it needs. Every piece matches exactly one
      //   character, so pinning to the first place the whole separator fits
      //   is the leftmost place it can sit, and the wildcards that follow
      //   take up whatever is left.
      out += at === lastWildcard ? WILDCARD : "(?:(?!".concat(separatorAfter(run, at), ")[^\\/])*");
    });
    run = [];
  };
  tokens.forEach(function (token) {
    if (token.boundary === undefined) {
      run.push(token);
      return;
    }
    flush();
    out += token.boundary;
  });
  flush();
  return out;
};

// @param {pattern}
var makeRegexPrefix = function makeRegexPrefix(pattern) {
  var _extractBrackets = extractBrackets(pattern),
    source = _extractBrackets.source,
    sources = _extractBrackets.sources;
  var replaced = REPLACERS.reduce(
  // A pass whose matcher finds nothing hands back the very string it was
  //   given, so asking first costs a search and saves a rewrite. Ten of the
  //   fifteen passes never fire for a typical .gitignore line, and between
  //   them they were 45% of this chain.
  function (prev, _ref) {
    var _ref2 = _slicedToArray(_ref, 3),
      matcher = _ref2[0],
      replacer = _ref2[1],
      required = _ref2[2];
    if (matcher === DIRECT) {
      return replacer(prev, pattern);
    }
    if (required !== UNDEFINED && prev.indexOf(required) < 0) {
      return prev;
    }

    // A pass whose matcher finds nothing hands back the very string it was
    //   given, so asking first costs a search and saves a rewrite.
    return matcher.test(prev) ? prev.replace(matcher, replacer.bind(pattern)) : prev;
  }, source);

  // Most patterns hold no bracket expression at all, and then there is
  //   nothing to put back.
  return sources.length ? replaced.replace(REGEX_RESTORE_PLACEHOLDER, function (match, index) {
    return sources[index];
  }) : replaced;
};

// A trailing slash does not stop a pattern being basename-only: it restricts
//   the match to a directory, it does not let the pattern reach across one.
//   Everything else a pattern can hold -- a wildcard, a character class, an
//   escape -- stays inside a single path segment too, so a pattern with no
//   separator in it can only ever describe the last one.
var matchesBasename = function matchesBasename(body) {
  var index = body.indexOf(SLASH);
  return index < 0 || index === body.length - 1;
};

// The last segment of a path, keeping a trailing slash, because a pattern that
//   ends in one matches only a directory.
// 'a/b/c.js' -> 'c.js';  'a/b/' -> 'b/';  'c.js' -> 'c.js' (no copy made)
var basenameOf = function basenameOf(path) {
  var end = path.length - 1;
  var index = path.lastIndexOf(SLASH, path[end] === SLASH ? end - 1 : end);
  return index < 0 ? path : path.slice(index + 1);
};

// The parent directory of a path, with its trailing separator, or EMPTY when
//   the path has none.
// 'a/b/c' -> 'a/b/';  'a/b/' -> 'a/';  'a' -> EMPTY;  'a/' -> EMPTY
//
// A path holding an empty segment has to be taken apart, because its
//   ancestors are not prefixes of it: the parent of 'a//b' is 'a/', not
//   'a//', and the parent of '/a/' is nothing at all. Both shapes reach here
//   -- 'a//b' is accepted outright, and `checkIgnore` does not put the path
//   it is given through the relative-path check.
//
// Every other path is a prefix of itself, and cutting one costs a fraction of
//   splitting it into an array and joining that back at every level: 73ns
//   against 207ns.
var parentOf = function parentOf(path) {
  if (path.charCodeAt(0) === SLASH_CODE || path.indexOf(DOUBLE_SLASH) >= 0) {
    var slices = path.split(SLASH).filter(Boolean);
    slices.pop();
    return slices.length ? slices.join(SLASH) + SLASH : EMPTY;
  }
  var end = path.length - 1;

  // Look back from before a trailing separator, since that one belongs to the
  //   path itself.
  //
  // A negative place to start would be a trap here: `lastIndexOf` clamps one
  //   to 0 and searches there rather than reporting no match, so '/' would
  //   come back as its own parent and the walk would never end. It cannot
  //   happen -- that is the only path short enough to produce one, and the
  //   test above has already sent it the other way.
  var cut = path.lastIndexOf(SLASH, path.charCodeAt(end) === SLASH_CODE ? end - 1 : end);
  return cut < 0 ? EMPTY : path.slice(0, cut + 1);
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
  return pattern.split(REGEX_SPLITALL_CRLF).filter(Boolean);
};
var IgnoreRule = /*#__PURE__*/function () {
  function IgnoreRule(pattern, mark, body, ignoreCase, negative, prefix) {
    _classCallCheck(this, IgnoreRule);
    this.pattern = pattern;
    this.mark = mark;
    this.negative = negative;
    define(this, 'body', body);
    define(this, 'ignoreCase', ignoreCase);
    define(this, 'regexPrefix', prefix);
  }

  // Worked out on first use and kept behind an own property, the way `regex`
  //   caches itself in `_regex`. Deciding it in the constructor instead would
  //   add a fourth `defineProperty` to every rule ever built, which cost 4% of
  //   every compile -- including the compiles of rules that are never matched
  //   against anything.
  _createClass(IgnoreRule, [{
    key: "_basenameOnly",
    get: function get() {
      return define(this, '_basenameOnly', matchesBasename(this.body));
    }
  }, {
    key: "regex",
    get: function get() {
      var key = UNDERSCORE + MODE_IGNORE;
      if (this[key]) {
        return this[key];
      }
      return this._make(MODE_IGNORE, key);
    }
  }, {
    key: "checkRegex",
    get: function get() {
      var key = UNDERSCORE + MODE_CHECK_IGNORE;
      if (this[key]) {
        return this[key];
      }
      return this._make(MODE_CHECK_IGNORE, key);
    }
  }, {
    key: "_make",
    value: function _make(mode, key) {
      var str = pinWildcards(this.regexPrefix.replace(REGEX_REPLACE_TRAILING_WILDCARD,
      // It does not need to bind pattern
      TRAILING_WILD_CARD_REPLACERS[mode]));
      var regex = this.ignoreCase ? new RegExp(str, 'i') : new RegExp(str);
      return define(this, key, regex);
    }
  }]);
  return IgnoreRule;
}();
var createRule = function createRule(_ref3, ignoreCase) {
  var pattern = _ref3.pattern,
    mark = _ref3.mark;
  var negative = false;
  var body = pattern;

  // > An optional prefix "!" which negates the pattern;
  if (body.indexOf('!') === 0) {
    negative = true;
    body = body.substr(1);
  }
  body = body
  // > Put a backslash ("\") in front of the first "!" for patterns that
  // >   begin with a literal "!", for example, `"\!important!.txt"`.
  .replace(REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION, '!')
  // > Put a backslash ("\") in front of the first hash for patterns that
  // >   begin with a hash.
  .replace(REGEX_REPLACE_LEADING_EXCAPED_HASH, '#');
  var regexPrefix = makeRegexPrefix(body);
  return new IgnoreRule(pattern, mark, body, ignoreCase, negative, regexPrefix);
};
var RuleManager = /*#__PURE__*/function () {
  function RuleManager(ignoreCase) {
    _classCallCheck(this, RuleManager);
    this._ignoreCase = ignoreCase;
    this._rules = [];

    // How many of the rules git would tag `EXC_FLAG_NODIR`.
    //
    // The scan uses it to decide, once for the whole set, whether handing
    //   those rules the basename is worth what it costs the others. The
    //   shortcut saves a full-path scan on every rule it applies to and costs
    //   a check on every rule it does not, so a set where almost nothing is
    //   basename-only comes out behind -- a 955 pattern set with 44 of them
    //   measured 19% slower with the shortcut always on.
    //
    // Deciding this by measurement rather than by meaning is safe: a
    //   basename-only pattern gives the very same answer against the whole
    //   path, it just takes longer to say so. The choice can only change how
    //   fast the scan runs, never what it returns.
    this._basenameCount = 0;
  }
  _createClass(RuleManager, [{
    key: "_add",
    value: function _add(pattern) {
      // #32
      if (pattern && pattern[KEY_IGNORE]) {
        this._rules = this._rules.concat(pattern._rules._rules);
        this._basenameCount += pattern._rules._basenameCount;
        this._added = true;
        return;
      }
      if (isString(pattern)) {
        pattern = {
          pattern: pattern
        };
      }
      if (checkPattern(pattern.pattern)) {
        var rule = createRule(pattern, this._ignoreCase);
        this._added = true;
        this._rules.push(rule);

        // Deliberately not `rule._basenameOnly`: reading that would materialise
        //   the rule's own copy, and the whole point of leaving it lazy is that
        //   a rule which is compiled and never matched never pays for it.
        if (matchesBasename(rule.body)) {
          this._basenameCount++;
        }
      }
    }

    // @param {Array<string> | string | Ignore} pattern
  }, {
    key: "add",
    value: function add(pattern) {
      this._added = false;
      makeArray(isString(pattern) ? splitPattern(pattern) : pattern).forEach(this._add, this);
      return this._added;
    }

    // Test one single path without recursively checking parent directories
    //
    // - checkUnignored `boolean` whether should check if the path is unignored,
    //   setting `checkUnignored` to `false` could reduce additional
    //   path matching.
    // - check `string` either `MODE_IGNORE` or `MODE_CHECK_IGNORE`

    // @returns {TestResult} true if a file is ignored
  }, {
    key: "test",
    value: function test(path, checkUnignored, mode) {
      var ignored = false;
      var unignored = false;
      var matchedRule;

      // Most of a .gitignore is patterns with no slash in them, and running
      //   those against the whole path makes the regular expression engine walk
      //   every directory name on the way to the only segment that could match.
      //   Handing them the basename instead is what git does, and it is where
      //   the time in a directory walk goes: the rule scan was two thirds of it.
      var rules = this._rules;
      var length = rules.length;
      var shortcut = this._basenameCount * 2 >= length;
      var basename = shortcut ? basenameOf(path) : path;

      // A plain loop rather than `forEach`, so that `path`, `basename` and
      //   `shortcut` are locals. As a callback they became closure variables,
      //   and reaching for one of those once per rule cost 10% of a scan over a
      //   large rule set -- more than the shortcut they were there to serve.
      for (var index = 0; index < length; index++) {
        var rule = rules[index];
        var negative = rule.negative;

        //          |           ignored : unignored
        // -------- | ---------------------------------------
        // negative |   0:0   |   0:1   |   1:0   |   1:1
        // -------- | ------- | ------- | ------- | --------
        //     0    |  TEST   |  TEST   |  SKIP   |    X
        //     1    |  TESTIF |  SKIP   |  TEST   |    X

        // - SKIP: always skip
        // - TEST: always test
        // - TESTIF: only test if checkUnignored
        // - X: that never happen
        var skip = unignored === negative && ignored !== unignored || negative && !ignored && !unignored && !checkUnignored;
        if (!skip && rule[mode].test(shortcut && rule._basenameOnly ? basename : path)) {
          ignored = !negative;
          unignored = negative;
          matchedRule = negative ? UNDEFINED : rule;
        }
      }
      var ret = {
        ignored: ignored,
        unignored: unignored
      };
      if (matchedRule) {
        ret.rule = matchedRule;
      }
      return ret;
    }
  }]);
  return RuleManager;
}();
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

// > pathname should be a `path.relative()`d one
//
// The same thing `REGEX_TEST_INVALID_PATH` says, spelled out: a path is not
//   relative if it begins with a separator, or with `./` or `../`, or is
//   nothing but `.` or `..`. Every match is decided by the first three
//   characters, and this runs on every path handed to the library -- where it
//   was 55% of a cached lookup, more than the cache lookup itself.
var isNotRelative = function isNotRelative(path) {
  var first = path.charCodeAt(0);
  if (first === SLASH_CODE) {
    return true;
  }
  if (first !== DOT_CODE) {
    return false;
  }

  // '.'
  if (path.length === 1) {
    return true;
  }
  var second = path.charCodeAt(1);

  // './'
  if (second === SLASH_CODE) {
    return true;
  }
  if (second !== DOT_CODE) {
    return false;
  }

  // '..' or '../'
  return path.length === 2 || path.charCodeAt(2) === SLASH_CODE;
};
checkPath.isNotRelative = isNotRelative;

// On windows, the following function will be replaced
/* istanbul ignore next */
checkPath.convert = function (p) {
  return p;
};
var Ignore = /*#__PURE__*/function () {
  function Ignore() {
    var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref4$ignorecase = _ref4.ignorecase,
      ignorecase = _ref4$ignorecase === void 0 ? true : _ref4$ignorecase,
      _ref4$ignoreCase = _ref4.ignoreCase,
      ignoreCase = _ref4$ignoreCase === void 0 ? ignorecase : _ref4$ignoreCase,
      _ref4$allowRelativePa = _ref4.allowRelativePaths,
      allowRelativePaths = _ref4$allowRelativePa === void 0 ? false : _ref4$allowRelativePa;
    _classCallCheck(this, Ignore);
    define(this, KEY_IGNORE, true);
    this._rules = new RuleManager(ignoreCase);
    this._strictPathCheck = !allowRelativePaths;
    this._initCache();
  }
  _createClass(Ignore, [{
    key: "_initCache",
    value: function _initCache() {
      // A cache for the result of `.ignores()`
      this._ignoreCache = Object.create(null);

      // A cache for the result of `.test()`
      this._testCache = Object.create(null);
    }
  }, {
    key: "add",
    value: function add(pattern) {
      if (this._rules.add(pattern)) {
        // Some rules have just added to the ignore,
        //   making the behavior changed,
        //   so we need to re-initialize the result cache
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

    // @returns {TestResult}
  }, {
    key: "_test",
    value: function _test(originalPath, cache, checkUnignored) {
      var path = originalPath
      // Supports nullable path
      && checkPath.convert(originalPath);
      checkPath(path, originalPath, this._strictPathCheck ? throwError : RETURN_FALSE);
      return this._t(path, cache, checkUnignored);
    }
  }, {
    key: "checkIgnore",
    value: function checkIgnore(path) {
      // If the path doest not end with a slash, `.ignores()` is much equivalent
      //   to `git check-ignore`
      if (path.charCodeAt(path.length - 1) !== SLASH_CODE) {
        return this.test(path);
      }
      var parentPath = parentOf(path);
      if (parentPath) {
        var parent = this._t(parentPath, this._testCache, true);
        if (parent.ignored) {
          return parent;
        }
      }
      return this._rules.test(path, false, MODE_CHECK_IGNORE);
    }
  }, {
    key: "_t",
    value: function _t(
    // The path to be tested
    path,
    // The cache for the result of a certain checking
    cache,
    // Whether should check if the path is unignored
    checkUnignored) {
      if (path in cache) {
        return cache[path];
      }
      var parentPath = parentOf(path);

      // If the path contains a parent directory, check the parent first
      var parent = parentPath ? this._t(parentPath, cache, checkUnignored) : UNDEFINED;
      return cache[path] = parent && parent.ignored
      // > It is not possible to re-include a file if a parent directory of
      // >   that file is excluded.
      ? parent : this._rules.test(path, checkUnignored, MODE_IGNORE);
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

/* istanbul ignore next */
var setupWindows = function setupWindows() {
  /* eslint no-control-regex: "off" */
  var makePosix = function makePosix(str) {
    return /^\\\\\?\\/.test(str) || /[\0-\x1F"<>\|]+/.test(str) ? str : str.replace(/\\/g, '/');
  };
  checkPath.convert = makePosix;

  // 'C:\\foo'     <- 'C:\\foo' has been converted to 'C:/'
  // 'd:\\foo'
  var REGEX_TEST_WINDOWS_PATH_ABSOLUTE = /^[a-z]:\//i;
  checkPath.isNotRelative = function (path) {
    return REGEX_TEST_WINDOWS_PATH_ABSOLUTE.test(path) || isNotRelative(path);
  };
};

// Windows
// --------------------------------------------------------------
/* istanbul ignore next */
if (
// Detect `process` so that it can run in browsers.
typeof process !== 'undefined' && process.platform === 'win32') {
  setupWindows();
}

// COMMONJS_EXPORTS ////////////////////////////////////////////////////////////

module.exports = factory;

// Although it is an anti-pattern,
//   it is still widely misused by a lot of libraries in github
// Ref: https://github.com/search?q=ignore.default%28%29&type=code
factory["default"] = factory;
module.exports.isPathValid = isPathValid;

// For testing purposes
define(module.exports, Symbol["for"]('setupWindows'), setupWindows);
