/*
  @license
	Rollup.js v4.60.2
	Sat, 18 Apr 2026 13:58:01 GMT - commit a6be82b8abd747458afdc7484319f7b5deb92535

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
import { getAugmentedNamespace, fseventsImporter, getDefaultExportFromCjs, createFilter, rollupInternal } from './node-entry.js';
import path from 'node:path';
import process$1 from 'node:process';
import require$$0$1 from 'path';
import require$$0$2 from 'fs';
import require$$2 from 'util';
import require$$1 from 'stream';
import require$$2$1 from 'os';
import require$$0$3 from 'events';
import { platform } from 'node:os';
import './parseAst.js';
import '../../native.js';
import 'node:perf_hooks';
import 'node:fs/promises';

var chokidar$1 = {};

var utils$2 = {};

var constants$3;
var hasRequiredConstants$3;

function requireConstants$3 () {
	if (hasRequiredConstants$3) return constants$3;
	hasRequiredConstants$3 = 1;

	const path = require$$0$1;
	const WIN_SLASH = '\\\\/';
	const WIN_NO_SLASH = `[^${WIN_SLASH}]`;

	const DEFAULT_MAX_EXTGLOB_RECURSION = 0;

	/**
	 * Posix glob regex
	 */

	const DOT_LITERAL = '\\.';
	const PLUS_LITERAL = '\\+';
	const QMARK_LITERAL = '\\?';
	const SLASH_LITERAL = '\\/';
	const ONE_CHAR = '(?=.)';
	const QMARK = '[^/]';
	const END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
	const START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
	const DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
	const NO_DOT = `(?!${DOT_LITERAL})`;
	const NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
	const NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
	const NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
	const QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
	const STAR = `${QMARK}*?`;

	const POSIX_CHARS = {
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

	/**
	 * Windows glob regex
	 */

	const WINDOWS_CHARS = {
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

	/**
	 * POSIX Bracket Regex
	 */

	const POSIX_REGEX_SOURCE = {
	  __proto__: null,
	  alnum: 'a-zA-Z0-9',
	  alpha: 'a-zA-Z',
	  ascii: '\\x00-\\x7F',
	  blank: ' \\t',
	  cntrl: '\\x00-\\x1F\\x7F',
	  digit: '0-9',
	  graph: '\\x21-\\x7E',
	  lower: 'a-z',
	  print: '\\x20-\\x7E ',
	  punct: '\\-!"#$%&\'()\\*+,./:;<=>?@[\\]^_`{|}~',
	  space: ' \\t\\r\\n\\v\\f',
	  upper: 'A-Z',
	  word: 'A-Za-z0-9_',
	  xdigit: 'A-Fa-f0-9'
	};

	constants$3 = {
	  DEFAULT_MAX_EXTGLOB_RECURSION,
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
	    __proto__: null,
	    '***': '*',
	    '**/**': '**',
	    '**/**/**': '**'
	  },

	  // Digits
	  CHAR_0: 48, /* 0 */
	  CHAR_9: 57, /* 9 */

	  // Alphabet chars.
	  CHAR_UPPERCASE_A: 65, /* A */
	  CHAR_LOWERCASE_A: 97, /* a */
	  CHAR_UPPERCASE_Z: 90, /* Z */
	  CHAR_LOWERCASE_Z: 122, /* z */

	  CHAR_LEFT_PARENTHESES: 40, /* ( */
	  CHAR_RIGHT_PARENTHESES: 41, /* ) */

	  CHAR_ASTERISK: 42, /* * */

	  // Non-alphabetic chars.
	  CHAR_AMPERSAND: 38, /* & */
	  CHAR_AT: 64, /* @ */
	  CHAR_BACKWARD_SLASH: 92, /* \ */
	  CHAR_CARRIAGE_RETURN: 13, /* \r */
	  CHAR_CIRCUMFLEX_ACCENT: 94, /* ^ */
	  CHAR_COLON: 58, /* : */
	  CHAR_COMMA: 44, /* , */
	  CHAR_DOT: 46, /* . */
	  CHAR_DOUBLE_QUOTE: 34, /* " */
	  CHAR_EQUAL: 61, /* = */
	  CHAR_EXCLAMATION_MARK: 33, /* ! */
	  CHAR_FORM_FEED: 12, /* \f */
	  CHAR_FORWARD_SLASH: 47, /* / */
	  CHAR_GRAVE_ACCENT: 96, /* ` */
	  CHAR_HASH: 35, /* # */
	  CHAR_HYPHEN_MINUS: 45, /* - */
	  CHAR_LEFT_ANGLE_BRACKET: 60, /* < */
	  CHAR_LEFT_CURLY_BRACE: 123, /* { */
	  CHAR_LEFT_SQUARE_BRACKET: 91, /* [ */
	  CHAR_LINE_FEED: 10, /* \n */
	  CHAR_NO_BREAK_SPACE: 160, /* \u00A0 */
	  CHAR_PERCENT: 37, /* % */
	  CHAR_PLUS: 43, /* + */
	  CHAR_QUESTION_MARK: 63, /* ? */
	  CHAR_RIGHT_ANGLE_BRACKET: 62, /* > */
	  CHAR_RIGHT_CURLY_BRACE: 125, /* } */
	  CHAR_RIGHT_SQUARE_BRACKET: 93, /* ] */
	  CHAR_SEMICOLON: 59, /* ; */
	  CHAR_SINGLE_QUOTE: 39, /* ' */
	  CHAR_SPACE: 32, /*   */
	  CHAR_TAB: 9, /* \t */
	  CHAR_UNDERSCORE: 95, /* _ */
	  CHAR_VERTICAL_LINE: 124, /* | */
	  CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279, /* \uFEFF */

	  SEP: path.sep,

	  /**
	   * Create EXTGLOB_CHARS
	   */

	  extglobChars(chars) {
	    return {
	      '!': { type: 'negate', open: '(?:(?!(?:', close: `))${chars.STAR})` },
	      '?': { type: 'qmark', open: '(?:', close: ')?' },
	      '+': { type: 'plus', open: '(?:', close: ')+' },
	      '*': { type: 'star', open: '(?:', close: ')*' },
	      '@': { type: 'at', open: '(?:', close: ')' }
	    };
	  },

	  /**
	   * Create GLOB_CHARS
	   */

	  globChars(win32) {
	    return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
	  }
	};
	return constants$3;
}

var hasRequiredUtils$2;

function requireUtils$2 () {
	if (hasRequiredUtils$2) return utils$2;
	hasRequiredUtils$2 = 1;
	(function (exports$1) {

		const path = require$$0$1;
		const win32 = process.platform === 'win32';
		const {
		  REGEX_BACKSLASH,
		  REGEX_REMOVE_BACKSLASH,
		  REGEX_SPECIAL_CHARS,
		  REGEX_SPECIAL_CHARS_GLOBAL
		} = /*@__PURE__*/ requireConstants$3();

		exports$1.isObject = val => val !== null && typeof val === 'object' && !Array.isArray(val);
		exports$1.hasRegexChars = str => REGEX_SPECIAL_CHARS.test(str);
		exports$1.isRegexChar = str => str.length === 1 && exports$1.hasRegexChars(str);
		exports$1.escapeRegex = str => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, '\\$1');
		exports$1.toPosixSlashes = str => str.replace(REGEX_BACKSLASH, '/');

		exports$1.removeBackslashes = str => {
		  return str.replace(REGEX_REMOVE_BACKSLASH, match => {
		    return match === '\\' ? '' : match;
		  });
		};

		exports$1.supportsLookbehinds = () => {
		  const segs = process.version.slice(1).split('.').map(Number);
		  if (segs.length === 3 && segs[0] >= 9 || (segs[0] === 8 && segs[1] >= 10)) {
		    return true;
		  }
		  return false;
		};

		exports$1.isWindows = options => {
		  if (options && typeof options.windows === 'boolean') {
		    return options.windows;
		  }
		  return win32 === true || path.sep === '\\';
		};

		exports$1.escapeLast = (input, char, lastIdx) => {
		  const idx = input.lastIndexOf(char, lastIdx);
		  if (idx === -1) return input;
		  if (input[idx - 1] === '\\') return exports$1.escapeLast(input, char, idx - 1);
		  return `${input.slice(0, idx)}\\${input.slice(idx)}`;
		};

		exports$1.removePrefix = (input, state = {}) => {
		  let output = input;
		  if (output.startsWith('./')) {
		    output = output.slice(2);
		    state.prefix = './';
		  }
		  return output;
		};

		exports$1.wrapOutput = (input, state = {}, options = {}) => {
		  const prepend = options.contains ? '' : '^';
		  const append = options.contains ? '' : '$';

		  let output = `${prepend}(?:${input})${append}`;
		  if (state.negated === true) {
		    output = `(?:^(?!${output}).*$)`;
		  }
		  return output;
		}; 
	} (utils$2));
	return utils$2;
}

var scan_1$1;
var hasRequiredScan$1;

function requireScan$1 () {
	if (hasRequiredScan$1) return scan_1$1;
	hasRequiredScan$1 = 1;

	const utils = /*@__PURE__*/ requireUtils$2();
	const {
	  CHAR_ASTERISK,             /* * */
	  CHAR_AT,                   /* @ */
	  CHAR_BACKWARD_SLASH,       /* \ */
	  CHAR_COMMA,                /* , */
	  CHAR_DOT,                  /* . */
	  CHAR_EXCLAMATION_MARK,     /* ! */
	  CHAR_FORWARD_SLASH,        /* / */
	  CHAR_LEFT_CURLY_BRACE,     /* { */
	  CHAR_LEFT_PARENTHESES,     /* ( */
	  CHAR_LEFT_SQUARE_BRACKET,  /* [ */
	  CHAR_PLUS,                 /* + */
	  CHAR_QUESTION_MARK,        /* ? */
	  CHAR_RIGHT_CURLY_BRACE,    /* } */
	  CHAR_RIGHT_PARENTHESES,    /* ) */
	  CHAR_RIGHT_SQUARE_BRACKET  /* ] */
	} = /*@__PURE__*/ requireConstants$3();

	const isPathSeparator = code => {
	  return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
	};

	const depth = token => {
	  if (token.isPrefix !== true) {
	    token.depth = token.isGlobstar ? Infinity : 1;
	  }
	};

	/**
	 * Quickly scans a glob pattern and returns an object with a handful of
	 * useful properties, like `isGlob`, `path` (the leading non-glob, if it exists),
	 * `glob` (the actual pattern), `negated` (true if the path starts with `!` but not
	 * with `!(`) and `negatedExtglob` (true if the path starts with `!(`).
	 *
	 * ```js
	 * const pm = require('picomatch');
	 * console.log(pm.scan('foo/bar/*.js'));
	 * { isGlob: true, input: 'foo/bar/*.js', base: 'foo/bar', glob: '*.js' }
	 * ```
	 * @param {String} `str`
	 * @param {Object} `options`
	 * @return {Object} Returns an object with tokens and regex source string.
	 * @api public
	 */

	const scan = (input, options) => {
	  const opts = options || {};

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
	  let token = { value: '', depth: 0, isGlob: false };

	  const eos = () => index >= length;
	  const peek = () => str.charCodeAt(index + 1);
	  const advance = () => {
	    prev = code;
	    return str.charCodeAt(++index);
	  };

	  while (index < length) {
	    code = advance();
	    let next;

	    if (code === CHAR_BACKWARD_SLASH) {
	      backslashes = token.backslashes = true;
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
	          backslashes = token.backslashes = true;
	          advance();
	          continue;
	        }

	        if (code === CHAR_LEFT_CURLY_BRACE) {
	          braces++;
	          continue;
	        }

	        if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
	          isBrace = token.isBrace = true;
	          isGlob = token.isGlob = true;
	          finished = true;

	          if (scanToEnd === true) {
	            continue;
	          }

	          break;
	        }

	        if (braceEscaped !== true && code === CHAR_COMMA) {
	          isBrace = token.isBrace = true;
	          isGlob = token.isGlob = true;
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
	            isBrace = token.isBrace = true;
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
	      tokens.push(token);
	      token = { value: '', depth: 0, isGlob: false };

	      if (finished === true) continue;
	      if (prev === CHAR_DOT && index === (start + 1)) {
	        start += 2;
	        continue;
	      }

	      lastIndex = index + 1;
	      continue;
	    }

	    if (opts.noext !== true) {
	      const isExtglobChar = code === CHAR_PLUS
	        || code === CHAR_AT
	        || code === CHAR_ASTERISK
	        || code === CHAR_QUESTION_MARK
	        || code === CHAR_EXCLAMATION_MARK;

	      if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
	        isGlob = token.isGlob = true;
	        isExtglob = token.isExtglob = true;
	        finished = true;
	        if (code === CHAR_EXCLAMATION_MARK && index === start) {
	          negatedExtglob = true;
	        }

	        if (scanToEnd === true) {
	          while (eos() !== true && (code = advance())) {
	            if (code === CHAR_BACKWARD_SLASH) {
	              backslashes = token.backslashes = true;
	              code = advance();
	              continue;
	            }

	            if (code === CHAR_RIGHT_PARENTHESES) {
	              isGlob = token.isGlob = true;
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
	      if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
	      isGlob = token.isGlob = true;
	      finished = true;

	      if (scanToEnd === true) {
	        continue;
	      }
	      break;
	    }

	    if (code === CHAR_QUESTION_MARK) {
	      isGlob = token.isGlob = true;
	      finished = true;

	      if (scanToEnd === true) {
	        continue;
	      }
	      break;
	    }

	    if (code === CHAR_LEFT_SQUARE_BRACKET) {
	      while (eos() !== true && (next = advance())) {
	        if (next === CHAR_BACKWARD_SLASH) {
	          backslashes = token.backslashes = true;
	          advance();
	          continue;
	        }

	        if (next === CHAR_RIGHT_SQUARE_BRACKET) {
	          isBracket = token.isBracket = true;
	          isGlob = token.isGlob = true;
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
	      negated = token.negated = true;
	      start++;
	      continue;
	    }

	    if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
	      isGlob = token.isGlob = true;

	      if (scanToEnd === true) {
	        while (eos() !== true && (code = advance())) {
	          if (code === CHAR_LEFT_PARENTHESES) {
	            backslashes = token.backslashes = true;
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
	  let prefix = '';
	  let glob = '';

	  if (start > 0) {
	    prefix = str.slice(0, start);
	    str = str.slice(start);
	    lastIndex -= start;
	  }

	  if (base && isGlob === true && lastIndex > 0) {
	    base = str.slice(0, lastIndex);
	    glob = str.slice(lastIndex);
	  } else if (isGlob === true) {
	    base = '';
	    glob = str;
	  } else {
	    base = str;
	  }

	  if (base && base !== '' && base !== '/' && base !== str) {
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
	      tokens.push(token);
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
	      if (idx !== 0 || value !== '') {
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

	scan_1$1 = scan;
	return scan_1$1;
}

var parse_1$2;
var hasRequiredParse$2;

function requireParse$2 () {
	if (hasRequiredParse$2) return parse_1$2;
	hasRequiredParse$2 = 1;

	const constants = /*@__PURE__*/ requireConstants$3();
	const utils = /*@__PURE__*/ requireUtils$2();

	/**
	 * Constants
	 */

	const {
	  MAX_LENGTH,
	  POSIX_REGEX_SOURCE,
	  REGEX_NON_SPECIAL_CHARS,
	  REGEX_SPECIAL_CHARS_BACKREF,
	  REPLACEMENTS
	} = constants;

	/**
	 * Helpers
	 */

	const expandRange = (args, options) => {
	  if (typeof options.expandRange === 'function') {
	    return options.expandRange(...args, options);
	  }

	  args.sort();
	  const value = `[${args.join('-')}]`;

	  return value;
	};

	/**
	 * Create the message for a syntax error
	 */

	const syntaxError = (type, char) => {
	  return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
	};

	const splitTopLevel = input => {
	  const parts = [];
	  let bracket = 0;
	  let paren = 0;
	  let quote = 0;
	  let value = '';
	  let escaped = false;

	  for (const ch of input) {
	    if (escaped === true) {
	      value += ch;
	      escaped = false;
	      continue;
	    }

	    if (ch === '\\') {
	      value += ch;
	      escaped = true;
	      continue;
	    }

	    if (ch === '"') {
	      quote = quote === 1 ? 0 : 1;
	      value += ch;
	      continue;
	    }

	    if (quote === 0) {
	      if (ch === '[') {
	        bracket++;
	      } else if (ch === ']' && bracket > 0) {
	        bracket--;
	      } else if (bracket === 0) {
	        if (ch === '(') {
	          paren++;
	        } else if (ch === ')' && paren > 0) {
	          paren--;
	        } else if (ch === '|' && paren === 0) {
	          parts.push(value);
	          value = '';
	          continue;
	        }
	      }
	    }

	    value += ch;
	  }

	  parts.push(value);
	  return parts;
	};

	const isPlainBranch = branch => {
	  let escaped = false;

	  for (const ch of branch) {
	    if (escaped === true) {
	      escaped = false;
	      continue;
	    }

	    if (ch === '\\') {
	      escaped = true;
	      continue;
	    }

	    if (/[?*+@!()[\]{}]/.test(ch)) {
	      return false;
	    }
	  }

	  return true;
	};

	const normalizeSimpleBranch = branch => {
	  let value = branch.trim();
	  let changed = true;

	  while (changed === true) {
	    changed = false;

	    if (/^@\([^\\()[\]{}|]+\)$/.test(value)) {
	      value = value.slice(2, -1);
	      changed = true;
	    }
	  }

	  if (!isPlainBranch(value)) {
	    return;
	  }

	  return value.replace(/\\(.)/g, '$1');
	};

	const hasRepeatedCharPrefixOverlap = branches => {
	  const values = branches.map(normalizeSimpleBranch).filter(Boolean);

	  for (let i = 0; i < values.length; i++) {
	    for (let j = i + 1; j < values.length; j++) {
	      const a = values[i];
	      const b = values[j];
	      const char = a[0];

	      if (!char || a !== char.repeat(a.length) || b !== char.repeat(b.length)) {
	        continue;
	      }

	      if (a === b || a.startsWith(b) || b.startsWith(a)) {
	        return true;
	      }
	    }
	  }

	  return false;
	};

	const parseRepeatedExtglob = (pattern, requireEnd = true) => {
	  if ((pattern[0] !== '+' && pattern[0] !== '*') || pattern[1] !== '(') {
	    return;
	  }

	  let bracket = 0;
	  let paren = 0;
	  let quote = 0;
	  let escaped = false;

	  for (let i = 1; i < pattern.length; i++) {
	    const ch = pattern[i];

	    if (escaped === true) {
	      escaped = false;
	      continue;
	    }

	    if (ch === '\\') {
	      escaped = true;
	      continue;
	    }

	    if (ch === '"') {
	      quote = quote === 1 ? 0 : 1;
	      continue;
	    }

	    if (quote === 1) {
	      continue;
	    }

	    if (ch === '[') {
	      bracket++;
	      continue;
	    }

	    if (ch === ']' && bracket > 0) {
	      bracket--;
	      continue;
	    }

	    if (bracket > 0) {
	      continue;
	    }

	    if (ch === '(') {
	      paren++;
	      continue;
	    }

	    if (ch === ')') {
	      paren--;

	      if (paren === 0) {
	        if (requireEnd === true && i !== pattern.length - 1) {
	          return;
	        }

	        return {
	          type: pattern[0],
	          body: pattern.slice(2, i),
	          end: i
	        };
	      }
	    }
	  }
	};

	const getStarExtglobSequenceOutput = pattern => {
	  let index = 0;
	  const chars = [];

	  while (index < pattern.length) {
	    const match = parseRepeatedExtglob(pattern.slice(index), false);

	    if (!match || match.type !== '*') {
	      return;
	    }

	    const branches = splitTopLevel(match.body).map(branch => branch.trim());
	    if (branches.length !== 1) {
	      return;
	    }

	    const branch = normalizeSimpleBranch(branches[0]);
	    if (!branch || branch.length !== 1) {
	      return;
	    }

	    chars.push(branch);
	    index += match.end + 1;
	  }

	  if (chars.length < 1) {
	    return;
	  }

	  const source = chars.length === 1
	    ? utils.escapeRegex(chars[0])
	    : `[${chars.map(ch => utils.escapeRegex(ch)).join('')}]`;

	  return `${source}*`;
	};

	const repeatedExtglobRecursion = pattern => {
	  let depth = 0;
	  let value = pattern.trim();
	  let match = parseRepeatedExtglob(value);

	  while (match) {
	    depth++;
	    value = match.body.trim();
	    match = parseRepeatedExtglob(value);
	  }

	  return depth;
	};

	const analyzeRepeatedExtglob = (body, options) => {
	  if (options.maxExtglobRecursion === false) {
	    return { risky: false };
	  }

	  const max =
	    typeof options.maxExtglobRecursion === 'number'
	      ? options.maxExtglobRecursion
	      : constants.DEFAULT_MAX_EXTGLOB_RECURSION;

	  const branches = splitTopLevel(body).map(branch => branch.trim());

	  if (branches.length > 1) {
	    if (
	      branches.some(branch => branch === '') ||
	      branches.some(branch => /^[*?]+$/.test(branch)) ||
	      hasRepeatedCharPrefixOverlap(branches)
	    ) {
	      return { risky: true };
	    }
	  }

	  for (const branch of branches) {
	    const safeOutput = getStarExtglobSequenceOutput(branch);
	    if (safeOutput) {
	      return { risky: true, safeOutput };
	    }

	    if (repeatedExtglobRecursion(branch) > max) {
	      return { risky: true };
	    }
	  }

	  return { risky: false };
	};

	/**
	 * Parse the given input string.
	 * @param {String} input
	 * @param {Object} options
	 * @return {Object}
	 */

	const parse = (input, options) => {
	  if (typeof input !== 'string') {
	    throw new TypeError('Expected a string');
	  }

	  input = REPLACEMENTS[input] || input;

	  const opts = { ...options };
	  const max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;

	  let len = input.length;
	  if (len > max) {
	    throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
	  }

	  const bos = { type: 'bos', value: '', output: opts.prepend || '' };
	  const tokens = [bos];

	  const capture = opts.capture ? '' : '?:';
	  const win32 = utils.isWindows(options);

	  // create constants based on platform, for windows or posix
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

	  const globstar = opts => {
	    return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
	  };

	  const nodot = opts.dot ? '' : NO_DOT;
	  const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
	  let star = opts.bash === true ? globstar(opts) : STAR;

	  if (opts.capture) {
	    star = `(${star})`;
	  }

	  // minimatch options support
	  if (typeof opts.noext === 'boolean') {
	    opts.noextglob = opts.noext;
	  }

	  const state = {
	    input,
	    index: -1,
	    start: 0,
	    dot: opts.dot === true,
	    consumed: '',
	    output: '',
	    prefix: '',
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
	  const stack = [];
	  let prev = bos;
	  let value;

	  /**
	   * Tokenizing helpers
	   */

	  const eos = () => state.index === len - 1;
	  const peek = state.peek = (n = 1) => input[state.index + n];
	  const advance = state.advance = () => input[++state.index] || '';
	  const remaining = () => input.slice(state.index + 1);
	  const consume = (value = '', num = 0) => {
	    state.consumed += value;
	    state.index += num;
	  };

	  const append = token => {
	    state.output += token.output != null ? token.output : token.value;
	    consume(token.value);
	  };

	  const negate = () => {
	    let count = 1;

	    while (peek() === '!' && (peek(2) !== '(' || peek(3) === '?')) {
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

	  const increment = type => {
	    state[type]++;
	    stack.push(type);
	  };

	  const decrement = type => {
	    state[type]--;
	    stack.pop();
	  };

	  /**
	   * Push tokens onto the tokens array. This helper speeds up
	   * tokenizing by 1) helping us avoid backtracking as much as possible,
	   * and 2) helping us avoid creating extra tokens when consecutive
	   * characters are plain text. This improves performance and simplifies
	   * lookbehinds.
	   */

	  const push = tok => {
	    if (prev.type === 'globstar') {
	      const isBrace = state.braces > 0 && (tok.type === 'comma' || tok.type === 'brace');
	      const isExtglob = tok.extglob === true || (extglobs.length && (tok.type === 'pipe' || tok.type === 'paren'));

	      if (tok.type !== 'slash' && tok.type !== 'paren' && !isBrace && !isExtglob) {
	        state.output = state.output.slice(0, -prev.output.length);
	        prev.type = 'star';
	        prev.value = '*';
	        prev.output = star;
	        state.output += prev.output;
	      }
	    }

	    if (extglobs.length && tok.type !== 'paren') {
	      extglobs[extglobs.length - 1].inner += tok.value;
	    }

	    if (tok.value || tok.output) append(tok);
	    if (prev && prev.type === 'text' && tok.type === 'text') {
	      prev.value += tok.value;
	      prev.output = (prev.output || '') + tok.value;
	      return;
	    }

	    tok.prev = prev;
	    tokens.push(tok);
	    prev = tok;
	  };

	  const extglobOpen = (type, value) => {
	    const token = { ...EXTGLOB_CHARS[value], conditions: 1, inner: '' };

	    token.prev = prev;
	    token.parens = state.parens;
	    token.output = state.output;
	    token.startIndex = state.index;
	    token.tokensIndex = tokens.length;
	    const output = (opts.capture ? '(' : '') + token.open;

	    increment('parens');
	    push({ type, value, output: state.output ? '' : ONE_CHAR });
	    push({ type: 'paren', extglob: true, value: advance(), output });
	    extglobs.push(token);
	  };

	  const extglobClose = token => {
	    const literal = input.slice(token.startIndex, state.index + 1);
	    const body = input.slice(token.startIndex + 2, state.index);
	    const analysis = analyzeRepeatedExtglob(body, opts);

	    if ((token.type === 'plus' || token.type === 'star') && analysis.risky) {
	      const safeOutput = analysis.safeOutput
	        ? (token.output ? '' : ONE_CHAR) + (opts.capture ? `(${analysis.safeOutput})` : analysis.safeOutput)
	        : undefined;
	      const open = tokens[token.tokensIndex];

	      open.type = 'text';
	      open.value = literal;
	      open.output = safeOutput || utils.escapeRegex(literal);

	      for (let i = token.tokensIndex + 1; i < tokens.length; i++) {
	        tokens[i].value = '';
	        tokens[i].output = '';
	        delete tokens[i].suffix;
	      }

	      state.output = token.output + open.output;
	      state.backtrack = true;

	      push({ type: 'paren', extglob: true, value, output: '' });
	      decrement('parens');
	      return;
	    }

	    let output = token.close + (opts.capture ? ')' : '');
	    let rest;

	    if (token.type === 'negate') {
	      let extglobStar = star;

	      if (token.inner && token.inner.length > 1 && token.inner.includes('/')) {
	        extglobStar = globstar(opts);
	      }

	      if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
	        output = token.close = `)$))${extglobStar}`;
	      }

	      if (token.inner.includes('*') && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
	        // Any non-magical string (`.ts`) or even nested expression (`.{ts,tsx}`) can follow after the closing parenthesis.
	        // In this case, we need to parse the string and use it in the output of the original pattern.
	        // Suitable patterns: `/!(*.d).ts`, `/!(*.d).{ts,tsx}`, `**/!(*-dbg).@(js)`.
	        //
	        // Disabling the `fastpaths` option due to a problem with parsing strings as `.ts` in the pattern like `**/!(*.d).ts`.
	        const expression = parse(rest, { ...options, fastpaths: false }).output;

	        output = token.close = `)${expression})${extglobStar})`;
	      }

	      if (token.prev.type === 'bos') {
	        state.negatedExtglob = true;
	      }
	    }

	    push({ type: 'paren', extglob: true, value, output });
	    decrement('parens');
	  };

	  /**
	   * Fast paths
	   */

	  if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
	    let backslashes = false;

	    let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
	      if (first === '\\') {
	        backslashes = true;
	        return m;
	      }

	      if (first === '?') {
	        if (esc) {
	          return esc + first + (rest ? QMARK.repeat(rest.length) : '');
	        }
	        if (index === 0) {
	          return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : '');
	        }
	        return QMARK.repeat(chars.length);
	      }

	      if (first === '.') {
	        return DOT_LITERAL.repeat(chars.length);
	      }

	      if (first === '*') {
	        if (esc) {
	          return esc + first + (rest ? star : '');
	        }
	        return star;
	      }
	      return esc ? m : `\\${m}`;
	    });

	    if (backslashes === true) {
	      if (opts.unescape === true) {
	        output = output.replace(/\\/g, '');
	      } else {
	        output = output.replace(/\\+/g, m => {
	          return m.length % 2 === 0 ? '\\\\' : (m ? '\\' : '');
	        });
	      }
	    }

	    if (output === input && opts.contains === true) {
	      state.output = input;
	      return state;
	    }

	    state.output = utils.wrapOutput(output, state, options);
	    return state;
	  }

	  /**
	   * Tokenize input until we reach end-of-string
	   */

	  while (!eos()) {
	    value = advance();

	    if (value === '\u0000') {
	      continue;
	    }

	    /**
	     * Escaped characters
	     */

	    if (value === '\\') {
	      const next = peek();

	      if (next === '/' && opts.bash !== true) {
	        continue;
	      }

	      if (next === '.' || next === ';') {
	        continue;
	      }

	      if (!next) {
	        value += '\\';
	        push({ type: 'text', value });
	        continue;
	      }

	      // collapse slashes to reduce potential for exploits
	      const match = /^\\+/.exec(remaining());
	      let slashes = 0;

	      if (match && match[0].length > 2) {
	        slashes = match[0].length;
	        state.index += slashes;
	        if (slashes % 2 !== 0) {
	          value += '\\';
	        }
	      }

	      if (opts.unescape === true) {
	        value = advance();
	      } else {
	        value += advance();
	      }

	      if (state.brackets === 0) {
	        push({ type: 'text', value });
	        continue;
	      }
	    }

	    /**
	     * If we're inside a regex character class, continue
	     * until we reach the closing bracket.
	     */

	    if (state.brackets > 0 && (value !== ']' || prev.value === '[' || prev.value === '[^')) {
	      if (opts.posix !== false && value === ':') {
	        const inner = prev.value.slice(1);
	        if (inner.includes('[')) {
	          prev.posix = true;

	          if (inner.includes(':')) {
	            const idx = prev.value.lastIndexOf('[');
	            const pre = prev.value.slice(0, idx);
	            const rest = prev.value.slice(idx + 2);
	            const posix = POSIX_REGEX_SOURCE[rest];
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

	      if ((value === '[' && peek() !== ':') || (value === '-' && peek() === ']')) {
	        value = `\\${value}`;
	      }

	      if (value === ']' && (prev.value === '[' || prev.value === '[^')) {
	        value = `\\${value}`;
	      }

	      if (opts.posix === true && value === '!' && prev.value === '[') {
	        value = '^';
	      }

	      prev.value += value;
	      append({ value });
	      continue;
	    }

	    /**
	     * If we're inside a quoted string, continue
	     * until we reach the closing double quote.
	     */

	    if (state.quotes === 1 && value !== '"') {
	      value = utils.escapeRegex(value);
	      prev.value += value;
	      append({ value });
	      continue;
	    }

	    /**
	     * Double quotes
	     */

	    if (value === '"') {
	      state.quotes = state.quotes === 1 ? 0 : 1;
	      if (opts.keepQuotes === true) {
	        push({ type: 'text', value });
	      }
	      continue;
	    }

	    /**
	     * Parentheses
	     */

	    if (value === '(') {
	      increment('parens');
	      push({ type: 'paren', value });
	      continue;
	    }

	    if (value === ')') {
	      if (state.parens === 0 && opts.strictBrackets === true) {
	        throw new SyntaxError(syntaxError('opening', '('));
	      }

	      const extglob = extglobs[extglobs.length - 1];
	      if (extglob && state.parens === extglob.parens + 1) {
	        extglobClose(extglobs.pop());
	        continue;
	      }

	      push({ type: 'paren', value, output: state.parens ? ')' : '\\)' });
	      decrement('parens');
	      continue;
	    }

	    /**
	     * Square brackets
	     */

	    if (value === '[') {
	      if (opts.nobracket === true || !remaining().includes(']')) {
	        if (opts.nobracket !== true && opts.strictBrackets === true) {
	          throw new SyntaxError(syntaxError('closing', ']'));
	        }

	        value = `\\${value}`;
	      } else {
	        increment('brackets');
	      }

	      push({ type: 'bracket', value });
	      continue;
	    }

	    if (value === ']') {
	      if (opts.nobracket === true || (prev && prev.type === 'bracket' && prev.value.length === 1)) {
	        push({ type: 'text', value, output: `\\${value}` });
	        continue;
	      }

	      if (state.brackets === 0) {
	        if (opts.strictBrackets === true) {
	          throw new SyntaxError(syntaxError('opening', '['));
	        }

	        push({ type: 'text', value, output: `\\${value}` });
	        continue;
	      }

	      decrement('brackets');

	      const prevValue = prev.value.slice(1);
	      if (prev.posix !== true && prevValue[0] === '^' && !prevValue.includes('/')) {
	        value = `/${value}`;
	      }

	      prev.value += value;
	      append({ value });

	      // when literal brackets are explicitly disabled
	      // assume we should match with a regex character class
	      if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
	        continue;
	      }

	      const escaped = utils.escapeRegex(prev.value);
	      state.output = state.output.slice(0, -prev.value.length);

	      // when literal brackets are explicitly enabled
	      // assume we should escape the brackets to match literal characters
	      if (opts.literalBrackets === true) {
	        state.output += escaped;
	        prev.value = escaped;
	        continue;
	      }

	      // when the user specifies nothing, try to match both
	      prev.value = `(${capture}${escaped}|${prev.value})`;
	      state.output += prev.value;
	      continue;
	    }

	    /**
	     * Braces
	     */

	    if (value === '{' && opts.nobrace !== true) {
	      increment('braces');

	      const open = {
	        type: 'brace',
	        value,
	        output: '(',
	        outputIndex: state.output.length,
	        tokensIndex: state.tokens.length
	      };

	      braces.push(open);
	      push(open);
	      continue;
	    }

	    if (value === '}') {
	      const brace = braces[braces.length - 1];

	      if (opts.nobrace === true || !brace) {
	        push({ type: 'text', value, output: value });
	        continue;
	      }

	      let output = ')';

	      if (brace.dots === true) {
	        const arr = tokens.slice();
	        const range = [];

	        for (let i = arr.length - 1; i >= 0; i--) {
	          tokens.pop();
	          if (arr[i].type === 'brace') {
	            break;
	          }
	          if (arr[i].type !== 'dots') {
	            range.unshift(arr[i].value);
	          }
	        }

	        output = expandRange(range, opts);
	        state.backtrack = true;
	      }

	      if (brace.comma !== true && brace.dots !== true) {
	        const out = state.output.slice(0, brace.outputIndex);
	        const toks = state.tokens.slice(brace.tokensIndex);
	        brace.value = brace.output = '\\{';
	        value = output = '\\}';
	        state.output = out;
	        for (const t of toks) {
	          state.output += (t.output || t.value);
	        }
	      }

	      push({ type: 'brace', value, output });
	      decrement('braces');
	      braces.pop();
	      continue;
	    }

	    /**
	     * Pipes
	     */

	    if (value === '|') {
	      if (extglobs.length > 0) {
	        extglobs[extglobs.length - 1].conditions++;
	      }
	      push({ type: 'text', value });
	      continue;
	    }

	    /**
	     * Commas
	     */

	    if (value === ',') {
	      let output = value;

	      const brace = braces[braces.length - 1];
	      if (brace && stack[stack.length - 1] === 'braces') {
	        brace.comma = true;
	        output = '|';
	      }

	      push({ type: 'comma', value, output });
	      continue;
	    }

	    /**
	     * Slashes
	     */

	    if (value === '/') {
	      // if the beginning of the glob is "./", advance the start
	      // to the current index, and don't add the "./" characters
	      // to the state. This greatly simplifies lookbehinds when
	      // checking for BOS characters like "!" and "." (not "./")
	      if (prev.type === 'dot' && state.index === state.start + 1) {
	        state.start = state.index + 1;
	        state.consumed = '';
	        state.output = '';
	        tokens.pop();
	        prev = bos; // reset "prev" to the first token
	        continue;
	      }

	      push({ type: 'slash', value, output: SLASH_LITERAL });
	      continue;
	    }

	    /**
	     * Dots
	     */

	    if (value === '.') {
	      if (state.braces > 0 && prev.type === 'dot') {
	        if (prev.value === '.') prev.output = DOT_LITERAL;
	        const brace = braces[braces.length - 1];
	        prev.type = 'dots';
	        prev.output += value;
	        prev.value += value;
	        brace.dots = true;
	        continue;
	      }

	      if ((state.braces + state.parens) === 0 && prev.type !== 'bos' && prev.type !== 'slash') {
	        push({ type: 'text', value, output: DOT_LITERAL });
	        continue;
	      }

	      push({ type: 'dot', value, output: DOT_LITERAL });
	      continue;
	    }

	    /**
	     * Question marks
	     */

	    if (value === '?') {
	      const isGroup = prev && prev.value === '(';
	      if (!isGroup && opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
	        extglobOpen('qmark', value);
	        continue;
	      }

	      if (prev && prev.type === 'paren') {
	        const next = peek();
	        let output = value;

	        if (next === '<' && !utils.supportsLookbehinds()) {
	          throw new Error('Node.js v10 or higher is required for regex lookbehinds');
	        }

	        if ((prev.value === '(' && !/[!=<:]/.test(next)) || (next === '<' && !/<([!=]|\w+>)/.test(remaining()))) {
	          output = `\\${value}`;
	        }

	        push({ type: 'text', value, output });
	        continue;
	      }

	      if (opts.dot !== true && (prev.type === 'slash' || prev.type === 'bos')) {
	        push({ type: 'qmark', value, output: QMARK_NO_DOT });
	        continue;
	      }

	      push({ type: 'qmark', value, output: QMARK });
	      continue;
	    }

	    /**
	     * Exclamation
	     */

	    if (value === '!') {
	      if (opts.noextglob !== true && peek() === '(') {
	        if (peek(2) !== '?' || !/[!=<:]/.test(peek(3))) {
	          extglobOpen('negate', value);
	          continue;
	        }
	      }

	      if (opts.nonegate !== true && state.index === 0) {
	        negate();
	        continue;
	      }
	    }

	    /**
	     * Plus
	     */

	    if (value === '+') {
	      if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
	        extglobOpen('plus', value);
	        continue;
	      }

	      if ((prev && prev.value === '(') || opts.regex === false) {
	        push({ type: 'plus', value, output: PLUS_LITERAL });
	        continue;
	      }

	      if ((prev && (prev.type === 'bracket' || prev.type === 'paren' || prev.type === 'brace')) || state.parens > 0) {
	        push({ type: 'plus', value });
	        continue;
	      }

	      push({ type: 'plus', value: PLUS_LITERAL });
	      continue;
	    }

	    /**
	     * Plain text
	     */

	    if (value === '@') {
	      if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
	        push({ type: 'at', extglob: true, value, output: '' });
	        continue;
	      }

	      push({ type: 'text', value });
	      continue;
	    }

	    /**
	     * Plain text
	     */

	    if (value !== '*') {
	      if (value === '$' || value === '^') {
	        value = `\\${value}`;
	      }

	      const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
	      if (match) {
	        value += match[0];
	        state.index += match[0].length;
	      }

	      push({ type: 'text', value });
	      continue;
	    }

	    /**
	     * Stars
	     */

	    if (prev && (prev.type === 'globstar' || prev.star === true)) {
	      prev.type = 'star';
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
	      extglobOpen('star', value);
	      continue;
	    }

	    if (prev.type === 'star') {
	      if (opts.noglobstar === true) {
	        consume(value);
	        continue;
	      }

	      const prior = prev.prev;
	      const before = prior.prev;
	      const isStart = prior.type === 'slash' || prior.type === 'bos';
	      const afterStar = before && (before.type === 'star' || before.type === 'globstar');

	      if (opts.bash === true && (!isStart || (rest[0] && rest[0] !== '/'))) {
	        push({ type: 'star', value, output: '' });
	        continue;
	      }

	      const isBrace = state.braces > 0 && (prior.type === 'comma' || prior.type === 'brace');
	      const isExtglob = extglobs.length && (prior.type === 'pipe' || prior.type === 'paren');
	      if (!isStart && prior.type !== 'paren' && !isBrace && !isExtglob) {
	        push({ type: 'star', value, output: '' });
	        continue;
	      }

	      // strip consecutive `/**/`
	      while (rest.slice(0, 3) === '/**') {
	        const after = input[state.index + 4];
	        if (after && after !== '/') {
	          break;
	        }
	        rest = rest.slice(3);
	        consume('/**', 3);
	      }

	      if (prior.type === 'bos' && eos()) {
	        prev.type = 'globstar';
	        prev.value += value;
	        prev.output = globstar(opts);
	        state.output = prev.output;
	        state.globstar = true;
	        consume(value);
	        continue;
	      }

	      if (prior.type === 'slash' && prior.prev.type !== 'bos' && !afterStar && eos()) {
	        state.output = state.output.slice(0, -(prior.output + prev.output).length);
	        prior.output = `(?:${prior.output}`;

	        prev.type = 'globstar';
	        prev.output = globstar(opts) + (opts.strictSlashes ? ')' : '|$)');
	        prev.value += value;
	        state.globstar = true;
	        state.output += prior.output + prev.output;
	        consume(value);
	        continue;
	      }

	      if (prior.type === 'slash' && prior.prev.type !== 'bos' && rest[0] === '/') {
	        const end = rest[1] !== void 0 ? '|$' : '';

	        state.output = state.output.slice(0, -(prior.output + prev.output).length);
	        prior.output = `(?:${prior.output}`;

	        prev.type = 'globstar';
	        prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
	        prev.value += value;

	        state.output += prior.output + prev.output;
	        state.globstar = true;

	        consume(value + advance());

	        push({ type: 'slash', value: '/', output: '' });
	        continue;
	      }

	      if (prior.type === 'bos' && rest[0] === '/') {
	        prev.type = 'globstar';
	        prev.value += value;
	        prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
	        state.output = prev.output;
	        state.globstar = true;
	        consume(value + advance());
	        push({ type: 'slash', value: '/', output: '' });
	        continue;
	      }

	      // remove single star from output
	      state.output = state.output.slice(0, -prev.output.length);

	      // reset previous token to globstar
	      prev.type = 'globstar';
	      prev.output = globstar(opts);
	      prev.value += value;

	      // reset output with globstar
	      state.output += prev.output;
	      state.globstar = true;
	      consume(value);
	      continue;
	    }

	    const token = { type: 'star', value, output: star };

	    if (opts.bash === true) {
	      token.output = '.*?';
	      if (prev.type === 'bos' || prev.type === 'slash') {
	        token.output = nodot + token.output;
	      }
	      push(token);
	      continue;
	    }

	    if (prev && (prev.type === 'bracket' || prev.type === 'paren') && opts.regex === true) {
	      token.output = value;
	      push(token);
	      continue;
	    }

	    if (state.index === state.start || prev.type === 'slash' || prev.type === 'dot') {
	      if (prev.type === 'dot') {
	        state.output += NO_DOT_SLASH;
	        prev.output += NO_DOT_SLASH;

	      } else if (opts.dot === true) {
	        state.output += NO_DOTS_SLASH;
	        prev.output += NO_DOTS_SLASH;

	      } else {
	        state.output += nodot;
	        prev.output += nodot;
	      }

	      if (peek() !== '*') {
	        state.output += ONE_CHAR;
	        prev.output += ONE_CHAR;
	      }
	    }

	    push(token);
	  }

	  while (state.brackets > 0) {
	    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', ']'));
	    state.output = utils.escapeLast(state.output, '[');
	    decrement('brackets');
	  }

	  while (state.parens > 0) {
	    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', ')'));
	    state.output = utils.escapeLast(state.output, '(');
	    decrement('parens');
	  }

	  while (state.braces > 0) {
	    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', '}'));
	    state.output = utils.escapeLast(state.output, '{');
	    decrement('braces');
	  }

	  if (opts.strictSlashes !== true && (prev.type === 'star' || prev.type === 'bracket')) {
	    push({ type: 'maybe_slash', value: '', output: `${SLASH_LITERAL}?` });
	  }

	  // rebuild the output if we had to backtrack at any point
	  if (state.backtrack === true) {
	    state.output = '';

	    for (const token of state.tokens) {
	      state.output += token.output != null ? token.output : token.value;

	      if (token.suffix) {
	        state.output += token.suffix;
	      }
	    }
	  }

	  return state;
	};

	/**
	 * Fast paths for creating regular expressions for common glob patterns.
	 * This can significantly speed up processing and has very little downside
	 * impact when none of the fast paths match.
	 */

	parse.fastpaths = (input, options) => {
	  const opts = { ...options };
	  const max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
	  const len = input.length;
	  if (len > max) {
	    throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
	  }

	  input = REPLACEMENTS[input] || input;
	  const win32 = utils.isWindows(options);

	  // create constants based on platform, for windows or posix
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
	  const capture = opts.capture ? '' : '?:';
	  const state = { negated: false, prefix: '' };
	  let star = opts.bash === true ? '.*?' : STAR;

	  if (opts.capture) {
	    star = `(${star})`;
	  }

	  const globstar = opts => {
	    if (opts.noglobstar === true) return star;
	    return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
	  };

	  const create = str => {
	    switch (str) {
	      case '*':
	        return `${nodot}${ONE_CHAR}${star}`;

	      case '.*':
	        return `${DOT_LITERAL}${ONE_CHAR}${star}`;

	      case '*.*':
	        return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;

	      case '*/*':
	        return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;

	      case '**':
	        return nodot + globstar(opts);

	      case '**/*':
	        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;

	      case '**/*.*':
	        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;

	      case '**/.*':
	        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;

	      default: {
	        const match = /^(.*?)\.(\w+)$/.exec(str);
	        if (!match) return;

	        const source = create(match[1]);
	        if (!source) return;

	        return source + DOT_LITERAL + match[2];
	      }
	    }
	  };

	  const output = utils.removePrefix(input, state);
	  let source = create(output);

	  if (source && opts.strictSlashes !== true) {
	    source += `${SLASH_LITERAL}?`;
	  }

	  return source;
	};

	parse_1$2 = parse;
	return parse_1$2;
}

var picomatch_1$1;
var hasRequiredPicomatch$3;

function requirePicomatch$3 () {
	if (hasRequiredPicomatch$3) return picomatch_1$1;
	hasRequiredPicomatch$3 = 1;

	const path = require$$0$1;
	const scan = /*@__PURE__*/ requireScan$1();
	const parse = /*@__PURE__*/ requireParse$2();
	const utils = /*@__PURE__*/ requireUtils$2();
	const constants = /*@__PURE__*/ requireConstants$3();
	const isObject = val => val && typeof val === 'object' && !Array.isArray(val);

	/**
	 * Creates a matcher function from one or more glob patterns. The
	 * returned function takes a string to match as its first argument,
	 * and returns true if the string is a match. The returned matcher
	 * function also takes a boolean as the second argument that, when true,
	 * returns an object with additional information.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch(glob[, options]);
	 *
	 * const isMatch = picomatch('*.!(*a)');
	 * console.log(isMatch('a.a')); //=> false
	 * console.log(isMatch('a.b')); //=> true
	 * ```
	 * @name picomatch
	 * @param {String|Array} `globs` One or more glob patterns.
	 * @param {Object=} `options`
	 * @return {Function=} Returns a matcher function.
	 * @api public
	 */

	const picomatch = (glob, options, returnState = false) => {
	  if (Array.isArray(glob)) {
	    const fns = glob.map(input => picomatch(input, options, returnState));
	    const arrayMatcher = str => {
	      for (const isMatch of fns) {
	        const state = isMatch(str);
	        if (state) return state;
	      }
	      return false;
	    };
	    return arrayMatcher;
	  }

	  const isState = isObject(glob) && glob.tokens && glob.input;

	  if (glob === '' || (typeof glob !== 'string' && !isState)) {
	    throw new TypeError('Expected pattern to be a non-empty string');
	  }

	  const opts = options || {};
	  const posix = utils.isWindows(options);
	  const regex = isState
	    ? picomatch.compileRe(glob, options)
	    : picomatch.makeRe(glob, options, false, true);

	  const state = regex.state;
	  delete regex.state;

	  let isIgnored = () => false;
	  if (opts.ignore) {
	    const ignoreOpts = { ...options, ignore: null, onMatch: null, onResult: null };
	    isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
	  }

	  const matcher = (input, returnObject = false) => {
	    const { isMatch, match, output } = picomatch.test(input, regex, options, { glob, posix });
	    const result = { glob, state, regex, posix, input, output, match, isMatch };

	    if (typeof opts.onResult === 'function') {
	      opts.onResult(result);
	    }

	    if (isMatch === false) {
	      result.isMatch = false;
	      return returnObject ? result : false;
	    }

	    if (isIgnored(input)) {
	      if (typeof opts.onIgnore === 'function') {
	        opts.onIgnore(result);
	      }
	      result.isMatch = false;
	      return returnObject ? result : false;
	    }

	    if (typeof opts.onMatch === 'function') {
	      opts.onMatch(result);
	    }
	    return returnObject ? result : true;
	  };

	  if (returnState) {
	    matcher.state = state;
	  }

	  return matcher;
	};

	/**
	 * Test `input` with the given `regex`. This is used by the main
	 * `picomatch()` function to test the input string.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch.test(input, regex[, options]);
	 *
	 * console.log(picomatch.test('foo/bar', /^(?:([^/]*?)\/([^/]*?))$/));
	 * // { isMatch: true, match: [ 'foo/', 'foo', 'bar' ], output: 'foo/bar' }
	 * ```
	 * @param {String} `input` String to test.
	 * @param {RegExp} `regex`
	 * @return {Object} Returns an object with matching info.
	 * @api public
	 */

	picomatch.test = (input, regex, options, { glob, posix } = {}) => {
	  if (typeof input !== 'string') {
	    throw new TypeError('Expected input to be a string');
	  }

	  if (input === '') {
	    return { isMatch: false, output: '' };
	  }

	  const opts = options || {};
	  const format = opts.format || (posix ? utils.toPosixSlashes : null);
	  let match = input === glob;
	  let output = (match && format) ? format(input) : input;

	  if (match === false) {
	    output = format ? format(input) : input;
	    match = output === glob;
	  }

	  if (match === false || opts.capture === true) {
	    if (opts.matchBase === true || opts.basename === true) {
	      match = picomatch.matchBase(input, regex, options, posix);
	    } else {
	      match = regex.exec(output);
	    }
	  }

	  return { isMatch: Boolean(match), match, output };
	};

	/**
	 * Match the basename of a filepath.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch.matchBase(input, glob[, options]);
	 * console.log(picomatch.matchBase('foo/bar.js', '*.js'); // true
	 * ```
	 * @param {String} `input` String to test.
	 * @param {RegExp|String} `glob` Glob pattern or regex created by [.makeRe](#makeRe).
	 * @return {Boolean}
	 * @api public
	 */

	picomatch.matchBase = (input, glob, options, posix = utils.isWindows(options)) => {
	  const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
	  return regex.test(path.basename(input));
	};

	/**
	 * Returns true if **any** of the given glob `patterns` match the specified `string`.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch.isMatch(string, patterns[, options]);
	 *
	 * console.log(picomatch.isMatch('a.a', ['b.*', '*.a'])); //=> true
	 * console.log(picomatch.isMatch('a.a', 'b.*')); //=> false
	 * ```
	 * @param {String|Array} str The string to test.
	 * @param {String|Array} patterns One or more glob patterns to use for matching.
	 * @param {Object} [options] See available [options](#options).
	 * @return {Boolean} Returns true if any patterns match `str`
	 * @api public
	 */

	picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);

	/**
	 * Parse a glob pattern to create the source string for a regular
	 * expression.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * const result = picomatch.parse(pattern[, options]);
	 * ```
	 * @param {String} `pattern`
	 * @param {Object} `options`
	 * @return {Object} Returns an object with useful properties and output to be used as a regex source string.
	 * @api public
	 */

	picomatch.parse = (pattern, options) => {
	  if (Array.isArray(pattern)) return pattern.map(p => picomatch.parse(p, options));
	  return parse(pattern, { ...options, fastpaths: false });
	};

	/**
	 * Scan a glob pattern to separate the pattern into segments.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch.scan(input[, options]);
	 *
	 * const result = picomatch.scan('!./foo/*.js');
	 * console.log(result);
	 * { prefix: '!./',
	 *   input: '!./foo/*.js',
	 *   start: 3,
	 *   base: 'foo',
	 *   glob: '*.js',
	 *   isBrace: false,
	 *   isBracket: false,
	 *   isGlob: true,
	 *   isExtglob: false,
	 *   isGlobstar: false,
	 *   negated: true }
	 * ```
	 * @param {String} `input` Glob pattern to scan.
	 * @param {Object} `options`
	 * @return {Object} Returns an object with
	 * @api public
	 */

	picomatch.scan = (input, options) => scan(input, options);

	/**
	 * Compile a regular expression from the `state` object returned by the
	 * [parse()](#parse) method.
	 *
	 * @param {Object} `state`
	 * @param {Object} `options`
	 * @param {Boolean} `returnOutput` Intended for implementors, this argument allows you to return the raw output from the parser.
	 * @param {Boolean} `returnState` Adds the state to a `state` property on the returned regex. Useful for implementors and debugging.
	 * @return {RegExp}
	 * @api public
	 */

	picomatch.compileRe = (state, options, returnOutput = false, returnState = false) => {
	  if (returnOutput === true) {
	    return state.output;
	  }

	  const opts = options || {};
	  const prepend = opts.contains ? '' : '^';
	  const append = opts.contains ? '' : '$';

	  let source = `${prepend}(?:${state.output})${append}`;
	  if (state && state.negated === true) {
	    source = `^(?!${source}).*$`;
	  }

	  const regex = picomatch.toRegex(source, options);
	  if (returnState === true) {
	    regex.state = state;
	  }

	  return regex;
	};

	/**
	 * Create a regular expression from a parsed glob pattern.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * const state = picomatch.parse('*.js');
	 * // picomatch.compileRe(state[, options]);
	 *
	 * console.log(picomatch.compileRe(state));
	 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
	 * ```
	 * @param {String} `state` The object returned from the `.parse` method.
	 * @param {Object} `options`
	 * @param {Boolean} `returnOutput` Implementors may use this argument to return the compiled output, instead of a regular expression. This is not exposed on the options to prevent end-users from mutating the result.
	 * @param {Boolean} `returnState` Implementors may use this argument to return the state from the parsed glob with the returned regular expression.
	 * @return {RegExp} Returns a regex created from the given pattern.
	 * @api public
	 */

	picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
	  if (!input || typeof input !== 'string') {
	    throw new TypeError('Expected a non-empty string');
	  }

	  let parsed = { negated: false, fastpaths: true };

	  if (options.fastpaths !== false && (input[0] === '.' || input[0] === '*')) {
	    parsed.output = parse.fastpaths(input, options);
	  }

	  if (!parsed.output) {
	    parsed = parse(input, options);
	  }

	  return picomatch.compileRe(parsed, options, returnOutput, returnState);
	};

	/**
	 * Create a regular expression from the given regex source string.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch.toRegex(source[, options]);
	 *
	 * const { output } = picomatch.parse('*.js');
	 * console.log(picomatch.toRegex(output));
	 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
	 * ```
	 * @param {String} `source` Regular expression source string.
	 * @param {Object} `options`
	 * @return {RegExp}
	 * @api public
	 */

	picomatch.toRegex = (source, options) => {
	  try {
	    const opts = options || {};
	    return new RegExp(source, opts.flags || (opts.nocase ? 'i' : ''));
	  } catch (err) {
	    if (options && options.debug === true) throw err;
	    return /$^/;
	  }
	};

	/**
	 * Picomatch constants.
	 * @return {Object}
	 */

	picomatch.constants = constants;

	/**
	 * Expose "picomatch"
	 */

	picomatch_1$1 = picomatch;
	return picomatch_1$1;
}

var picomatch$1;
var hasRequiredPicomatch$2;

function requirePicomatch$2 () {
	if (hasRequiredPicomatch$2) return picomatch$1;
	hasRequiredPicomatch$2 = 1;

	picomatch$1 = /*@__PURE__*/ requirePicomatch$3();
	return picomatch$1;
}

var readdirp_1;
var hasRequiredReaddirp;

function requireReaddirp () {
	if (hasRequiredReaddirp) return readdirp_1;
	hasRequiredReaddirp = 1;

	const fs = require$$0$2;
	const { Readable } = require$$1;
	const sysPath = require$$0$1;
	const { promisify } = require$$2;
	const picomatch = /*@__PURE__*/ requirePicomatch$2();

	const readdir = promisify(fs.readdir);
	const stat = promisify(fs.stat);
	const lstat = promisify(fs.lstat);
	const realpath = promisify(fs.realpath);

	/**
	 * @typedef {Object} EntryInfo
	 * @property {String} path
	 * @property {String} fullPath
	 * @property {fs.Stats=} stats
	 * @property {fs.Dirent=} dirent
	 * @property {String} basename
	 */

	const BANG = '!';
	const RECURSIVE_ERROR_CODE = 'READDIRP_RECURSIVE_ERROR';
	const NORMAL_FLOW_ERRORS = new Set(['ENOENT', 'EPERM', 'EACCES', 'ELOOP', RECURSIVE_ERROR_CODE]);
	const FILE_TYPE = 'files';
	const DIR_TYPE = 'directories';
	const FILE_DIR_TYPE = 'files_directories';
	const EVERYTHING_TYPE = 'all';
	const ALL_TYPES = [FILE_TYPE, DIR_TYPE, FILE_DIR_TYPE, EVERYTHING_TYPE];

	const isNormalFlowError = error => NORMAL_FLOW_ERRORS.has(error.code);
	const [maj, min] = process.versions.node.split('.').slice(0, 2).map(n => Number.parseInt(n, 10));
	const wantBigintFsStats = process.platform === 'win32' && (maj > 10 || (maj === 10 && min >= 5));

	const normalizeFilter = filter => {
	  if (filter === undefined) return;
	  if (typeof filter === 'function') return filter;

	  if (typeof filter === 'string') {
	    const glob = picomatch(filter.trim());
	    return entry => glob(entry.basename);
	  }

	  if (Array.isArray(filter)) {
	    const positive = [];
	    const negative = [];
	    for (const item of filter) {
	      const trimmed = item.trim();
	      if (trimmed.charAt(0) === BANG) {
	        negative.push(picomatch(trimmed.slice(1)));
	      } else {
	        positive.push(picomatch(trimmed));
	      }
	    }

	    if (negative.length > 0) {
	      if (positive.length > 0) {
	        return entry =>
	          positive.some(f => f(entry.basename)) && !negative.some(f => f(entry.basename));
	      }
	      return entry => !negative.some(f => f(entry.basename));
	    }
	    return entry => positive.some(f => f(entry.basename));
	  }
	};

	class ReaddirpStream extends Readable {
	  static get defaultOptions() {
	    return {
	      root: '.',
	      /* eslint-disable no-unused-vars */
	      fileFilter: (path) => true,
	      directoryFilter: (path) => true,
	      /* eslint-enable no-unused-vars */
	      type: FILE_TYPE,
	      lstat: false,
	      depth: 2147483648,
	      alwaysStat: false
	    };
	  }

	  constructor(options = {}) {
	    super({
	      objectMode: true,
	      autoDestroy: true,
	      highWaterMark: options.highWaterMark || 4096
	    });
	    const opts = { ...ReaddirpStream.defaultOptions, ...options };
	    const { root, type } = opts;

	    this._fileFilter = normalizeFilter(opts.fileFilter);
	    this._directoryFilter = normalizeFilter(opts.directoryFilter);

	    const statMethod = opts.lstat ? lstat : stat;
	    // Use bigint stats if it's windows and stat() supports options (node 10+).
	    if (wantBigintFsStats) {
	      this._stat = path => statMethod(path, { bigint: true });
	    } else {
	      this._stat = statMethod;
	    }

	    this._maxDepth = opts.depth;
	    this._wantsDir = [DIR_TYPE, FILE_DIR_TYPE, EVERYTHING_TYPE].includes(type);
	    this._wantsFile = [FILE_TYPE, FILE_DIR_TYPE, EVERYTHING_TYPE].includes(type);
	    this._wantsEverything = type === EVERYTHING_TYPE;
	    this._root = sysPath.resolve(root);
	    this._isDirent = ('Dirent' in fs) && !opts.alwaysStat;
	    this._statsProp = this._isDirent ? 'dirent' : 'stats';
	    this._rdOptions = { encoding: 'utf8', withFileTypes: this._isDirent };

	    // Launch stream with one parent, the root dir.
	    this.parents = [this._exploreDir(root, 1)];
	    this.reading = false;
	    this.parent = undefined;
	  }

	  async _read(batch) {
	    if (this.reading) return;
	    this.reading = true;

	    try {
	      while (!this.destroyed && batch > 0) {
	        const { path, depth, files = [] } = this.parent || {};

	        if (files.length > 0) {
	          const slice = files.splice(0, batch).map(dirent => this._formatEntry(dirent, path));
	          for (const entry of await Promise.all(slice)) {
	            if (this.destroyed) return;

	            const entryType = await this._getEntryType(entry);
	            if (entryType === 'directory' && this._directoryFilter(entry)) {
	              if (depth <= this._maxDepth) {
	                this.parents.push(this._exploreDir(entry.fullPath, depth + 1));
	              }

	              if (this._wantsDir) {
	                this.push(entry);
	                batch--;
	              }
	            } else if ((entryType === 'file' || this._includeAsFile(entry)) && this._fileFilter(entry)) {
	              if (this._wantsFile) {
	                this.push(entry);
	                batch--;
	              }
	            }
	          }
	        } else {
	          const parent = this.parents.pop();
	          if (!parent) {
	            this.push(null);
	            break;
	          }
	          this.parent = await parent;
	          if (this.destroyed) return;
	        }
	      }
	    } catch (error) {
	      this.destroy(error);
	    } finally {
	      this.reading = false;
	    }
	  }

	  async _exploreDir(path, depth) {
	    let files;
	    try {
	      files = await readdir(path, this._rdOptions);
	    } catch (error) {
	      this._onError(error);
	    }
	    return { files, depth, path };
	  }

	  async _formatEntry(dirent, path) {
	    let entry;
	    try {
	      const basename = this._isDirent ? dirent.name : dirent;
	      const fullPath = sysPath.resolve(sysPath.join(path, basename));
	      entry = { path: sysPath.relative(this._root, fullPath), fullPath, basename };
	      entry[this._statsProp] = this._isDirent ? dirent : await this._stat(fullPath);
	    } catch (err) {
	      this._onError(err);
	    }
	    return entry;
	  }

	  _onError(err) {
	    if (isNormalFlowError(err) && !this.destroyed) {
	      this.emit('warn', err);
	    } else {
	      this.destroy(err);
	    }
	  }

	  async _getEntryType(entry) {
	    // entry may be undefined, because a warning or an error were emitted
	    // and the statsProp is undefined
	    const stats = entry && entry[this._statsProp];
	    if (!stats) {
	      return;
	    }
	    if (stats.isFile()) {
	      return 'file';
	    }
	    if (stats.isDirectory()) {
	      return 'directory';
	    }
	    if (stats && stats.isSymbolicLink()) {
	      const full = entry.fullPath;
	      try {
	        const entryRealPath = await realpath(full);
	        const entryRealPathStats = await lstat(entryRealPath);
	        if (entryRealPathStats.isFile()) {
	          return 'file';
	        }
	        if (entryRealPathStats.isDirectory()) {
	          const len = entryRealPath.length;
	          if (full.startsWith(entryRealPath) && full.substr(len, 1) === sysPath.sep) {
	            const recursiveError = new Error(
	              `Circular symlink detected: "${full}" points to "${entryRealPath}"`
	            );
	            recursiveError.code = RECURSIVE_ERROR_CODE;
	            return this._onError(recursiveError);
	          }
	          return 'directory';
	        }
	      } catch (error) {
	        this._onError(error);
	      }
	    }
	  }

	  _includeAsFile(entry) {
	    const stats = entry && entry[this._statsProp];

	    return stats && this._wantsEverything && !stats.isDirectory();
	  }
	}

	/**
	 * @typedef {Object} ReaddirpArguments
	 * @property {Function=} fileFilter
	 * @property {Function=} directoryFilter
	 * @property {String=} type
	 * @property {Number=} depth
	 * @property {String=} root
	 * @property {Boolean=} lstat
	 * @property {Boolean=} bigint
	 */

	/**
	 * Main function which ends up calling readdirRec and reads all files and directories in given root recursively.
	 * @param {String} root Root directory
	 * @param {ReaddirpArguments=} options Options to specify root (start directory), filters and recursion depth
	 */
	const readdirp = (root, options = {}) => {
	  let type = options.entryType || options.type;
	  if (type === 'both') type = FILE_DIR_TYPE; // backwards-compatibility
	  if (type) options.type = type;
	  if (!root) {
	    throw new Error('readdirp: root argument is required. Usage: readdirp(root, options)');
	  } else if (typeof root !== 'string') {
	    throw new TypeError('readdirp: root argument must be a string. Usage: readdirp(root, options)');
	  } else if (type && !ALL_TYPES.includes(type)) {
	    throw new Error(`readdirp: Invalid type passed. Use one of ${ALL_TYPES.join(', ')}`);
	  }

	  options.root = root;
	  return new ReaddirpStream(options);
	};

	const readdirpPromise = (root, options = {}) => {
	  return new Promise((resolve, reject) => {
	    const files = [];
	    readdirp(root, options)
	      .on('data', entry => files.push(entry))
	      .on('end', () => resolve(files))
	      .on('error', error => reject(error));
	  });
	};

	readdirp.promise = readdirpPromise;
	readdirp.ReaddirpStream = ReaddirpStream;
	readdirp.default = readdirp;

	readdirp_1 = readdirp;
	return readdirp_1;
}

var anymatch = {exports: {}};

var utils$1 = {};

var constants$2;
var hasRequiredConstants$2;

function requireConstants$2 () {
	if (hasRequiredConstants$2) return constants$2;
	hasRequiredConstants$2 = 1;

	const path = require$$0$1;
	const WIN_SLASH = '\\\\/';
	const WIN_NO_SLASH = `[^${WIN_SLASH}]`;

	const DEFAULT_MAX_EXTGLOB_RECURSION = 0;

	/**
	 * Posix glob regex
	 */

	const DOT_LITERAL = '\\.';
	const PLUS_LITERAL = '\\+';
	const QMARK_LITERAL = '\\?';
	const SLASH_LITERAL = '\\/';
	const ONE_CHAR = '(?=.)';
	const QMARK = '[^/]';
	const END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
	const START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
	const DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
	const NO_DOT = `(?!${DOT_LITERAL})`;
	const NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
	const NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
	const NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
	const QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
	const STAR = `${QMARK}*?`;

	const POSIX_CHARS = {
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

	/**
	 * Windows glob regex
	 */

	const WINDOWS_CHARS = {
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

	/**
	 * POSIX Bracket Regex
	 */

	const POSIX_REGEX_SOURCE = {
	  __proto__: null,
	  alnum: 'a-zA-Z0-9',
	  alpha: 'a-zA-Z',
	  ascii: '\\x00-\\x7F',
	  blank: ' \\t',
	  cntrl: '\\x00-\\x1F\\x7F',
	  digit: '0-9',
	  graph: '\\x21-\\x7E',
	  lower: 'a-z',
	  print: '\\x20-\\x7E ',
	  punct: '\\-!"#$%&\'()\\*+,./:;<=>?@[\\]^_`{|}~',
	  space: ' \\t\\r\\n\\v\\f',
	  upper: 'A-Z',
	  word: 'A-Za-z0-9_',
	  xdigit: 'A-Fa-f0-9'
	};

	constants$2 = {
	  DEFAULT_MAX_EXTGLOB_RECURSION,
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
	    __proto__: null,
	    '***': '*',
	    '**/**': '**',
	    '**/**/**': '**'
	  },

	  // Digits
	  CHAR_0: 48, /* 0 */
	  CHAR_9: 57, /* 9 */

	  // Alphabet chars.
	  CHAR_UPPERCASE_A: 65, /* A */
	  CHAR_LOWERCASE_A: 97, /* a */
	  CHAR_UPPERCASE_Z: 90, /* Z */
	  CHAR_LOWERCASE_Z: 122, /* z */

	  CHAR_LEFT_PARENTHESES: 40, /* ( */
	  CHAR_RIGHT_PARENTHESES: 41, /* ) */

	  CHAR_ASTERISK: 42, /* * */

	  // Non-alphabetic chars.
	  CHAR_AMPERSAND: 38, /* & */
	  CHAR_AT: 64, /* @ */
	  CHAR_BACKWARD_SLASH: 92, /* \ */
	  CHAR_CARRIAGE_RETURN: 13, /* \r */
	  CHAR_CIRCUMFLEX_ACCENT: 94, /* ^ */
	  CHAR_COLON: 58, /* : */
	  CHAR_COMMA: 44, /* , */
	  CHAR_DOT: 46, /* . */
	  CHAR_DOUBLE_QUOTE: 34, /* " */
	  CHAR_EQUAL: 61, /* = */
	  CHAR_EXCLAMATION_MARK: 33, /* ! */
	  CHAR_FORM_FEED: 12, /* \f */
	  CHAR_FORWARD_SLASH: 47, /* / */
	  CHAR_GRAVE_ACCENT: 96, /* ` */
	  CHAR_HASH: 35, /* # */
	  CHAR_HYPHEN_MINUS: 45, /* - */
	  CHAR_LEFT_ANGLE_BRACKET: 60, /* < */
	  CHAR_LEFT_CURLY_BRACE: 123, /* { */
	  CHAR_LEFT_SQUARE_BRACKET: 91, /* [ */
	  CHAR_LINE_FEED: 10, /* \n */
	  CHAR_NO_BREAK_SPACE: 160, /* \u00A0 */
	  CHAR_PERCENT: 37, /* % */
	  CHAR_PLUS: 43, /* + */
	  CHAR_QUESTION_MARK: 63, /* ? */
	  CHAR_RIGHT_ANGLE_BRACKET: 62, /* > */
	  CHAR_RIGHT_CURLY_BRACE: 125, /* } */
	  CHAR_RIGHT_SQUARE_BRACKET: 93, /* ] */
	  CHAR_SEMICOLON: 59, /* ; */
	  CHAR_SINGLE_QUOTE: 39, /* ' */
	  CHAR_SPACE: 32, /*   */
	  CHAR_TAB: 9, /* \t */
	  CHAR_UNDERSCORE: 95, /* _ */
	  CHAR_VERTICAL_LINE: 124, /* | */
	  CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279, /* \uFEFF */

	  SEP: path.sep,

	  /**
	   * Create EXTGLOB_CHARS
	   */

	  extglobChars(chars) {
	    return {
	      '!': { type: 'negate', open: '(?:(?!(?:', close: `))${chars.STAR})` },
	      '?': { type: 'qmark', open: '(?:', close: ')?' },
	      '+': { type: 'plus', open: '(?:', close: ')+' },
	      '*': { type: 'star', open: '(?:', close: ')*' },
	      '@': { type: 'at', open: '(?:', close: ')' }
	    };
	  },

	  /**
	   * Create GLOB_CHARS
	   */

	  globChars(win32) {
	    return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
	  }
	};
	return constants$2;
}

var hasRequiredUtils$1;

function requireUtils$1 () {
	if (hasRequiredUtils$1) return utils$1;
	hasRequiredUtils$1 = 1;
	(function (exports$1) {

		const path = require$$0$1;
		const win32 = process.platform === 'win32';
		const {
		  REGEX_BACKSLASH,
		  REGEX_REMOVE_BACKSLASH,
		  REGEX_SPECIAL_CHARS,
		  REGEX_SPECIAL_CHARS_GLOBAL
		} = /*@__PURE__*/ requireConstants$2();

		exports$1.isObject = val => val !== null && typeof val === 'object' && !Array.isArray(val);
		exports$1.hasRegexChars = str => REGEX_SPECIAL_CHARS.test(str);
		exports$1.isRegexChar = str => str.length === 1 && exports$1.hasRegexChars(str);
		exports$1.escapeRegex = str => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, '\\$1');
		exports$1.toPosixSlashes = str => str.replace(REGEX_BACKSLASH, '/');

		exports$1.removeBackslashes = str => {
		  return str.replace(REGEX_REMOVE_BACKSLASH, match => {
		    return match === '\\' ? '' : match;
		  });
		};

		exports$1.supportsLookbehinds = () => {
		  const segs = process.version.slice(1).split('.').map(Number);
		  if (segs.length === 3 && segs[0] >= 9 || (segs[0] === 8 && segs[1] >= 10)) {
		    return true;
		  }
		  return false;
		};

		exports$1.isWindows = options => {
		  if (options && typeof options.windows === 'boolean') {
		    return options.windows;
		  }
		  return win32 === true || path.sep === '\\';
		};

		exports$1.escapeLast = (input, char, lastIdx) => {
		  const idx = input.lastIndexOf(char, lastIdx);
		  if (idx === -1) return input;
		  if (input[idx - 1] === '\\') return exports$1.escapeLast(input, char, idx - 1);
		  return `${input.slice(0, idx)}\\${input.slice(idx)}`;
		};

		exports$1.removePrefix = (input, state = {}) => {
		  let output = input;
		  if (output.startsWith('./')) {
		    output = output.slice(2);
		    state.prefix = './';
		  }
		  return output;
		};

		exports$1.wrapOutput = (input, state = {}, options = {}) => {
		  const prepend = options.contains ? '' : '^';
		  const append = options.contains ? '' : '$';

		  let output = `${prepend}(?:${input})${append}`;
		  if (state.negated === true) {
		    output = `(?:^(?!${output}).*$)`;
		  }
		  return output;
		}; 
	} (utils$1));
	return utils$1;
}

var scan_1;
var hasRequiredScan;

function requireScan () {
	if (hasRequiredScan) return scan_1;
	hasRequiredScan = 1;

	const utils = /*@__PURE__*/ requireUtils$1();
	const {
	  CHAR_ASTERISK,             /* * */
	  CHAR_AT,                   /* @ */
	  CHAR_BACKWARD_SLASH,       /* \ */
	  CHAR_COMMA,                /* , */
	  CHAR_DOT,                  /* . */
	  CHAR_EXCLAMATION_MARK,     /* ! */
	  CHAR_FORWARD_SLASH,        /* / */
	  CHAR_LEFT_CURLY_BRACE,     /* { */
	  CHAR_LEFT_PARENTHESES,     /* ( */
	  CHAR_LEFT_SQUARE_BRACKET,  /* [ */
	  CHAR_PLUS,                 /* + */
	  CHAR_QUESTION_MARK,        /* ? */
	  CHAR_RIGHT_CURLY_BRACE,    /* } */
	  CHAR_RIGHT_PARENTHESES,    /* ) */
	  CHAR_RIGHT_SQUARE_BRACKET  /* ] */
	} = /*@__PURE__*/ requireConstants$2();

	const isPathSeparator = code => {
	  return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
	};

	const depth = token => {
	  if (token.isPrefix !== true) {
	    token.depth = token.isGlobstar ? Infinity : 1;
	  }
	};

	/**
	 * Quickly scans a glob pattern and returns an object with a handful of
	 * useful properties, like `isGlob`, `path` (the leading non-glob, if it exists),
	 * `glob` (the actual pattern), `negated` (true if the path starts with `!` but not
	 * with `!(`) and `negatedExtglob` (true if the path starts with `!(`).
	 *
	 * ```js
	 * const pm = require('picomatch');
	 * console.log(pm.scan('foo/bar/*.js'));
	 * { isGlob: true, input: 'foo/bar/*.js', base: 'foo/bar', glob: '*.js' }
	 * ```
	 * @param {String} `str`
	 * @param {Object} `options`
	 * @return {Object} Returns an object with tokens and regex source string.
	 * @api public
	 */

	const scan = (input, options) => {
	  const opts = options || {};

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
	  let token = { value: '', depth: 0, isGlob: false };

	  const eos = () => index >= length;
	  const peek = () => str.charCodeAt(index + 1);
	  const advance = () => {
	    prev = code;
	    return str.charCodeAt(++index);
	  };

	  while (index < length) {
	    code = advance();
	    let next;

	    if (code === CHAR_BACKWARD_SLASH) {
	      backslashes = token.backslashes = true;
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
	          backslashes = token.backslashes = true;
	          advance();
	          continue;
	        }

	        if (code === CHAR_LEFT_CURLY_BRACE) {
	          braces++;
	          continue;
	        }

	        if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
	          isBrace = token.isBrace = true;
	          isGlob = token.isGlob = true;
	          finished = true;

	          if (scanToEnd === true) {
	            continue;
	          }

	          break;
	        }

	        if (braceEscaped !== true && code === CHAR_COMMA) {
	          isBrace = token.isBrace = true;
	          isGlob = token.isGlob = true;
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
	            isBrace = token.isBrace = true;
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
	      tokens.push(token);
	      token = { value: '', depth: 0, isGlob: false };

	      if (finished === true) continue;
	      if (prev === CHAR_DOT && index === (start + 1)) {
	        start += 2;
	        continue;
	      }

	      lastIndex = index + 1;
	      continue;
	    }

	    if (opts.noext !== true) {
	      const isExtglobChar = code === CHAR_PLUS
	        || code === CHAR_AT
	        || code === CHAR_ASTERISK
	        || code === CHAR_QUESTION_MARK
	        || code === CHAR_EXCLAMATION_MARK;

	      if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
	        isGlob = token.isGlob = true;
	        isExtglob = token.isExtglob = true;
	        finished = true;
	        if (code === CHAR_EXCLAMATION_MARK && index === start) {
	          negatedExtglob = true;
	        }

	        if (scanToEnd === true) {
	          while (eos() !== true && (code = advance())) {
	            if (code === CHAR_BACKWARD_SLASH) {
	              backslashes = token.backslashes = true;
	              code = advance();
	              continue;
	            }

	            if (code === CHAR_RIGHT_PARENTHESES) {
	              isGlob = token.isGlob = true;
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
	      if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
	      isGlob = token.isGlob = true;
	      finished = true;

	      if (scanToEnd === true) {
	        continue;
	      }
	      break;
	    }

	    if (code === CHAR_QUESTION_MARK) {
	      isGlob = token.isGlob = true;
	      finished = true;

	      if (scanToEnd === true) {
	        continue;
	      }
	      break;
	    }

	    if (code === CHAR_LEFT_SQUARE_BRACKET) {
	      while (eos() !== true && (next = advance())) {
	        if (next === CHAR_BACKWARD_SLASH) {
	          backslashes = token.backslashes = true;
	          advance();
	          continue;
	        }

	        if (next === CHAR_RIGHT_SQUARE_BRACKET) {
	          isBracket = token.isBracket = true;
	          isGlob = token.isGlob = true;
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
	      negated = token.negated = true;
	      start++;
	      continue;
	    }

	    if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
	      isGlob = token.isGlob = true;

	      if (scanToEnd === true) {
	        while (eos() !== true && (code = advance())) {
	          if (code === CHAR_LEFT_PARENTHESES) {
	            backslashes = token.backslashes = true;
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
	  let prefix = '';
	  let glob = '';

	  if (start > 0) {
	    prefix = str.slice(0, start);
	    str = str.slice(start);
	    lastIndex -= start;
	  }

	  if (base && isGlob === true && lastIndex > 0) {
	    base = str.slice(0, lastIndex);
	    glob = str.slice(lastIndex);
	  } else if (isGlob === true) {
	    base = '';
	    glob = str;
	  } else {
	    base = str;
	  }

	  if (base && base !== '' && base !== '/' && base !== str) {
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
	      tokens.push(token);
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
	      if (idx !== 0 || value !== '') {
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

	scan_1 = scan;
	return scan_1;
}

var parse_1$1;
var hasRequiredParse$1;

function requireParse$1 () {
	if (hasRequiredParse$1) return parse_1$1;
	hasRequiredParse$1 = 1;

	const constants = /*@__PURE__*/ requireConstants$2();
	const utils = /*@__PURE__*/ requireUtils$1();

	/**
	 * Constants
	 */

	const {
	  MAX_LENGTH,
	  POSIX_REGEX_SOURCE,
	  REGEX_NON_SPECIAL_CHARS,
	  REGEX_SPECIAL_CHARS_BACKREF,
	  REPLACEMENTS
	} = constants;

	/**
	 * Helpers
	 */

	const expandRange = (args, options) => {
	  if (typeof options.expandRange === 'function') {
	    return options.expandRange(...args, options);
	  }

	  args.sort();
	  const value = `[${args.join('-')}]`;

	  return value;
	};

	/**
	 * Create the message for a syntax error
	 */

	const syntaxError = (type, char) => {
	  return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
	};

	const splitTopLevel = input => {
	  const parts = [];
	  let bracket = 0;
	  let paren = 0;
	  let quote = 0;
	  let value = '';
	  let escaped = false;

	  for (const ch of input) {
	    if (escaped === true) {
	      value += ch;
	      escaped = false;
	      continue;
	    }

	    if (ch === '\\') {
	      value += ch;
	      escaped = true;
	      continue;
	    }

	    if (ch === '"') {
	      quote = quote === 1 ? 0 : 1;
	      value += ch;
	      continue;
	    }

	    if (quote === 0) {
	      if (ch === '[') {
	        bracket++;
	      } else if (ch === ']' && bracket > 0) {
	        bracket--;
	      } else if (bracket === 0) {
	        if (ch === '(') {
	          paren++;
	        } else if (ch === ')' && paren > 0) {
	          paren--;
	        } else if (ch === '|' && paren === 0) {
	          parts.push(value);
	          value = '';
	          continue;
	        }
	      }
	    }

	    value += ch;
	  }

	  parts.push(value);
	  return parts;
	};

	const isPlainBranch = branch => {
	  let escaped = false;

	  for (const ch of branch) {
	    if (escaped === true) {
	      escaped = false;
	      continue;
	    }

	    if (ch === '\\') {
	      escaped = true;
	      continue;
	    }

	    if (/[?*+@!()[\]{}]/.test(ch)) {
	      return false;
	    }
	  }

	  return true;
	};

	const normalizeSimpleBranch = branch => {
	  let value = branch.trim();
	  let changed = true;

	  while (changed === true) {
	    changed = false;

	    if (/^@\([^\\()[\]{}|]+\)$/.test(value)) {
	      value = value.slice(2, -1);
	      changed = true;
	    }
	  }

	  if (!isPlainBranch(value)) {
	    return;
	  }

	  return value.replace(/\\(.)/g, '$1');
	};

	const hasRepeatedCharPrefixOverlap = branches => {
	  const values = branches.map(normalizeSimpleBranch).filter(Boolean);

	  for (let i = 0; i < values.length; i++) {
	    for (let j = i + 1; j < values.length; j++) {
	      const a = values[i];
	      const b = values[j];
	      const char = a[0];

	      if (!char || a !== char.repeat(a.length) || b !== char.repeat(b.length)) {
	        continue;
	      }

	      if (a === b || a.startsWith(b) || b.startsWith(a)) {
	        return true;
	      }
	    }
	  }

	  return false;
	};

	const parseRepeatedExtglob = (pattern, requireEnd = true) => {
	  if ((pattern[0] !== '+' && pattern[0] !== '*') || pattern[1] !== '(') {
	    return;
	  }

	  let bracket = 0;
	  let paren = 0;
	  let quote = 0;
	  let escaped = false;

	  for (let i = 1; i < pattern.length; i++) {
	    const ch = pattern[i];

	    if (escaped === true) {
	      escaped = false;
	      continue;
	    }

	    if (ch === '\\') {
	      escaped = true;
	      continue;
	    }

	    if (ch === '"') {
	      quote = quote === 1 ? 0 : 1;
	      continue;
	    }

	    if (quote === 1) {
	      continue;
	    }

	    if (ch === '[') {
	      bracket++;
	      continue;
	    }

	    if (ch === ']' && bracket > 0) {
	      bracket--;
	      continue;
	    }

	    if (bracket > 0) {
	      continue;
	    }

	    if (ch === '(') {
	      paren++;
	      continue;
	    }

	    if (ch === ')') {
	      paren--;

	      if (paren === 0) {
	        if (requireEnd === true && i !== pattern.length - 1) {
	          return;
	        }

	        return {
	          type: pattern[0],
	          body: pattern.slice(2, i),
	          end: i
	        };
	      }
	    }
	  }
	};

	const getStarExtglobSequenceOutput = pattern => {
	  let index = 0;
	  const chars = [];

	  while (index < pattern.length) {
	    const match = parseRepeatedExtglob(pattern.slice(index), false);

	    if (!match || match.type !== '*') {
	      return;
	    }

	    const branches = splitTopLevel(match.body).map(branch => branch.trim());
	    if (branches.length !== 1) {
	      return;
	    }

	    const branch = normalizeSimpleBranch(branches[0]);
	    if (!branch || branch.length !== 1) {
	      return;
	    }

	    chars.push(branch);
	    index += match.end + 1;
	  }

	  if (chars.length < 1) {
	    return;
	  }

	  const source = chars.length === 1
	    ? utils.escapeRegex(chars[0])
	    : `[${chars.map(ch => utils.escapeRegex(ch)).join('')}]`;

	  return `${source}*`;
	};

	const repeatedExtglobRecursion = pattern => {
	  let depth = 0;
	  let value = pattern.trim();
	  let match = parseRepeatedExtglob(value);

	  while (match) {
	    depth++;
	    value = match.body.trim();
	    match = parseRepeatedExtglob(value);
	  }

	  return depth;
	};

	const analyzeRepeatedExtglob = (body, options) => {
	  if (options.maxExtglobRecursion === false) {
	    return { risky: false };
	  }

	  const max =
	    typeof options.maxExtglobRecursion === 'number'
	      ? options.maxExtglobRecursion
	      : constants.DEFAULT_MAX_EXTGLOB_RECURSION;

	  const branches = splitTopLevel(body).map(branch => branch.trim());

	  if (branches.length > 1) {
	    if (
	      branches.some(branch => branch === '') ||
	      branches.some(branch => /^[*?]+$/.test(branch)) ||
	      hasRepeatedCharPrefixOverlap(branches)
	    ) {
	      return { risky: true };
	    }
	  }

	  for (const branch of branches) {
	    const safeOutput = getStarExtglobSequenceOutput(branch);
	    if (safeOutput) {
	      return { risky: true, safeOutput };
	    }

	    if (repeatedExtglobRecursion(branch) > max) {
	      return { risky: true };
	    }
	  }

	  return { risky: false };
	};

	/**
	 * Parse the given input string.
	 * @param {String} input
	 * @param {Object} options
	 * @return {Object}
	 */

	const parse = (input, options) => {
	  if (typeof input !== 'string') {
	    throw new TypeError('Expected a string');
	  }

	  input = REPLACEMENTS[input] || input;

	  const opts = { ...options };
	  const max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;

	  let len = input.length;
	  if (len > max) {
	    throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
	  }

	  const bos = { type: 'bos', value: '', output: opts.prepend || '' };
	  const tokens = [bos];

	  const capture = opts.capture ? '' : '?:';
	  const win32 = utils.isWindows(options);

	  // create constants based on platform, for windows or posix
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

	  const globstar = opts => {
	    return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
	  };

	  const nodot = opts.dot ? '' : NO_DOT;
	  const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
	  let star = opts.bash === true ? globstar(opts) : STAR;

	  if (opts.capture) {
	    star = `(${star})`;
	  }

	  // minimatch options support
	  if (typeof opts.noext === 'boolean') {
	    opts.noextglob = opts.noext;
	  }

	  const state = {
	    input,
	    index: -1,
	    start: 0,
	    dot: opts.dot === true,
	    consumed: '',
	    output: '',
	    prefix: '',
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
	  const stack = [];
	  let prev = bos;
	  let value;

	  /**
	   * Tokenizing helpers
	   */

	  const eos = () => state.index === len - 1;
	  const peek = state.peek = (n = 1) => input[state.index + n];
	  const advance = state.advance = () => input[++state.index] || '';
	  const remaining = () => input.slice(state.index + 1);
	  const consume = (value = '', num = 0) => {
	    state.consumed += value;
	    state.index += num;
	  };

	  const append = token => {
	    state.output += token.output != null ? token.output : token.value;
	    consume(token.value);
	  };

	  const negate = () => {
	    let count = 1;

	    while (peek() === '!' && (peek(2) !== '(' || peek(3) === '?')) {
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

	  const increment = type => {
	    state[type]++;
	    stack.push(type);
	  };

	  const decrement = type => {
	    state[type]--;
	    stack.pop();
	  };

	  /**
	   * Push tokens onto the tokens array. This helper speeds up
	   * tokenizing by 1) helping us avoid backtracking as much as possible,
	   * and 2) helping us avoid creating extra tokens when consecutive
	   * characters are plain text. This improves performance and simplifies
	   * lookbehinds.
	   */

	  const push = tok => {
	    if (prev.type === 'globstar') {
	      const isBrace = state.braces > 0 && (tok.type === 'comma' || tok.type === 'brace');
	      const isExtglob = tok.extglob === true || (extglobs.length && (tok.type === 'pipe' || tok.type === 'paren'));

	      if (tok.type !== 'slash' && tok.type !== 'paren' && !isBrace && !isExtglob) {
	        state.output = state.output.slice(0, -prev.output.length);
	        prev.type = 'star';
	        prev.value = '*';
	        prev.output = star;
	        state.output += prev.output;
	      }
	    }

	    if (extglobs.length && tok.type !== 'paren') {
	      extglobs[extglobs.length - 1].inner += tok.value;
	    }

	    if (tok.value || tok.output) append(tok);
	    if (prev && prev.type === 'text' && tok.type === 'text') {
	      prev.value += tok.value;
	      prev.output = (prev.output || '') + tok.value;
	      return;
	    }

	    tok.prev = prev;
	    tokens.push(tok);
	    prev = tok;
	  };

	  const extglobOpen = (type, value) => {
	    const token = { ...EXTGLOB_CHARS[value], conditions: 1, inner: '' };

	    token.prev = prev;
	    token.parens = state.parens;
	    token.output = state.output;
	    token.startIndex = state.index;
	    token.tokensIndex = tokens.length;
	    const output = (opts.capture ? '(' : '') + token.open;

	    increment('parens');
	    push({ type, value, output: state.output ? '' : ONE_CHAR });
	    push({ type: 'paren', extglob: true, value: advance(), output });
	    extglobs.push(token);
	  };

	  const extglobClose = token => {
	    const literal = input.slice(token.startIndex, state.index + 1);
	    const body = input.slice(token.startIndex + 2, state.index);
	    const analysis = analyzeRepeatedExtglob(body, opts);

	    if ((token.type === 'plus' || token.type === 'star') && analysis.risky) {
	      const safeOutput = analysis.safeOutput
	        ? (token.output ? '' : ONE_CHAR) + (opts.capture ? `(${analysis.safeOutput})` : analysis.safeOutput)
	        : undefined;
	      const open = tokens[token.tokensIndex];

	      open.type = 'text';
	      open.value = literal;
	      open.output = safeOutput || utils.escapeRegex(literal);

	      for (let i = token.tokensIndex + 1; i < tokens.length; i++) {
	        tokens[i].value = '';
	        tokens[i].output = '';
	        delete tokens[i].suffix;
	      }

	      state.output = token.output + open.output;
	      state.backtrack = true;

	      push({ type: 'paren', extglob: true, value, output: '' });
	      decrement('parens');
	      return;
	    }

	    let output = token.close + (opts.capture ? ')' : '');
	    let rest;

	    if (token.type === 'negate') {
	      let extglobStar = star;

	      if (token.inner && token.inner.length > 1 && token.inner.includes('/')) {
	        extglobStar = globstar(opts);
	      }

	      if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
	        output = token.close = `)$))${extglobStar}`;
	      }

	      if (token.inner.includes('*') && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
	        // Any non-magical string (`.ts`) or even nested expression (`.{ts,tsx}`) can follow after the closing parenthesis.
	        // In this case, we need to parse the string and use it in the output of the original pattern.
	        // Suitable patterns: `/!(*.d).ts`, `/!(*.d).{ts,tsx}`, `**/!(*-dbg).@(js)`.
	        //
	        // Disabling the `fastpaths` option due to a problem with parsing strings as `.ts` in the pattern like `**/!(*.d).ts`.
	        const expression = parse(rest, { ...options, fastpaths: false }).output;

	        output = token.close = `)${expression})${extglobStar})`;
	      }

	      if (token.prev.type === 'bos') {
	        state.negatedExtglob = true;
	      }
	    }

	    push({ type: 'paren', extglob: true, value, output });
	    decrement('parens');
	  };

	  /**
	   * Fast paths
	   */

	  if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
	    let backslashes = false;

	    let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
	      if (first === '\\') {
	        backslashes = true;
	        return m;
	      }

	      if (first === '?') {
	        if (esc) {
	          return esc + first + (rest ? QMARK.repeat(rest.length) : '');
	        }
	        if (index === 0) {
	          return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : '');
	        }
	        return QMARK.repeat(chars.length);
	      }

	      if (first === '.') {
	        return DOT_LITERAL.repeat(chars.length);
	      }

	      if (first === '*') {
	        if (esc) {
	          return esc + first + (rest ? star : '');
	        }
	        return star;
	      }
	      return esc ? m : `\\${m}`;
	    });

	    if (backslashes === true) {
	      if (opts.unescape === true) {
	        output = output.replace(/\\/g, '');
	      } else {
	        output = output.replace(/\\+/g, m => {
	          return m.length % 2 === 0 ? '\\\\' : (m ? '\\' : '');
	        });
	      }
	    }

	    if (output === input && opts.contains === true) {
	      state.output = input;
	      return state;
	    }

	    state.output = utils.wrapOutput(output, state, options);
	    return state;
	  }

	  /**
	   * Tokenize input until we reach end-of-string
	   */

	  while (!eos()) {
	    value = advance();

	    if (value === '\u0000') {
	      continue;
	    }

	    /**
	     * Escaped characters
	     */

	    if (value === '\\') {
	      const next = peek();

	      if (next === '/' && opts.bash !== true) {
	        continue;
	      }

	      if (next === '.' || next === ';') {
	        continue;
	      }

	      if (!next) {
	        value += '\\';
	        push({ type: 'text', value });
	        continue;
	      }

	      // collapse slashes to reduce potential for exploits
	      const match = /^\\+/.exec(remaining());
	      let slashes = 0;

	      if (match && match[0].length > 2) {
	        slashes = match[0].length;
	        state.index += slashes;
	        if (slashes % 2 !== 0) {
	          value += '\\';
	        }
	      }

	      if (opts.unescape === true) {
	        value = advance();
	      } else {
	        value += advance();
	      }

	      if (state.brackets === 0) {
	        push({ type: 'text', value });
	        continue;
	      }
	    }

	    /**
	     * If we're inside a regex character class, continue
	     * until we reach the closing bracket.
	     */

	    if (state.brackets > 0 && (value !== ']' || prev.value === '[' || prev.value === '[^')) {
	      if (opts.posix !== false && value === ':') {
	        const inner = prev.value.slice(1);
	        if (inner.includes('[')) {
	          prev.posix = true;

	          if (inner.includes(':')) {
	            const idx = prev.value.lastIndexOf('[');
	            const pre = prev.value.slice(0, idx);
	            const rest = prev.value.slice(idx + 2);
	            const posix = POSIX_REGEX_SOURCE[rest];
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

	      if ((value === '[' && peek() !== ':') || (value === '-' && peek() === ']')) {
	        value = `\\${value}`;
	      }

	      if (value === ']' && (prev.value === '[' || prev.value === '[^')) {
	        value = `\\${value}`;
	      }

	      if (opts.posix === true && value === '!' && prev.value === '[') {
	        value = '^';
	      }

	      prev.value += value;
	      append({ value });
	      continue;
	    }

	    /**
	     * If we're inside a quoted string, continue
	     * until we reach the closing double quote.
	     */

	    if (state.quotes === 1 && value !== '"') {
	      value = utils.escapeRegex(value);
	      prev.value += value;
	      append({ value });
	      continue;
	    }

	    /**
	     * Double quotes
	     */

	    if (value === '"') {
	      state.quotes = state.quotes === 1 ? 0 : 1;
	      if (opts.keepQuotes === true) {
	        push({ type: 'text', value });
	      }
	      continue;
	    }

	    /**
	     * Parentheses
	     */

	    if (value === '(') {
	      increment('parens');
	      push({ type: 'paren', value });
	      continue;
	    }

	    if (value === ')') {
	      if (state.parens === 0 && opts.strictBrackets === true) {
	        throw new SyntaxError(syntaxError('opening', '('));
	      }

	      const extglob = extglobs[extglobs.length - 1];
	      if (extglob && state.parens === extglob.parens + 1) {
	        extglobClose(extglobs.pop());
	        continue;
	      }

	      push({ type: 'paren', value, output: state.parens ? ')' : '\\)' });
	      decrement('parens');
	      continue;
	    }

	    /**
	     * Square brackets
	     */

	    if (value === '[') {
	      if (opts.nobracket === true || !remaining().includes(']')) {
	        if (opts.nobracket !== true && opts.strictBrackets === true) {
	          throw new SyntaxError(syntaxError('closing', ']'));
	        }

	        value = `\\${value}`;
	      } else {
	        increment('brackets');
	      }

	      push({ type: 'bracket', value });
	      continue;
	    }

	    if (value === ']') {
	      if (opts.nobracket === true || (prev && prev.type === 'bracket' && prev.value.length === 1)) {
	        push({ type: 'text', value, output: `\\${value}` });
	        continue;
	      }

	      if (state.brackets === 0) {
	        if (opts.strictBrackets === true) {
	          throw new SyntaxError(syntaxError('opening', '['));
	        }

	        push({ type: 'text', value, output: `\\${value}` });
	        continue;
	      }

	      decrement('brackets');

	      const prevValue = prev.value.slice(1);
	      if (prev.posix !== true && prevValue[0] === '^' && !prevValue.includes('/')) {
	        value = `/${value}`;
	      }

	      prev.value += value;
	      append({ value });

	      // when literal brackets are explicitly disabled
	      // assume we should match with a regex character class
	      if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
	        continue;
	      }

	      const escaped = utils.escapeRegex(prev.value);
	      state.output = state.output.slice(0, -prev.value.length);

	      // when literal brackets are explicitly enabled
	      // assume we should escape the brackets to match literal characters
	      if (opts.literalBrackets === true) {
	        state.output += escaped;
	        prev.value = escaped;
	        continue;
	      }

	      // when the user specifies nothing, try to match both
	      prev.value = `(${capture}${escaped}|${prev.value})`;
	      state.output += prev.value;
	      continue;
	    }

	    /**
	     * Braces
	     */

	    if (value === '{' && opts.nobrace !== true) {
	      increment('braces');

	      const open = {
	        type: 'brace',
	        value,
	        output: '(',
	        outputIndex: state.output.length,
	        tokensIndex: state.tokens.length
	      };

	      braces.push(open);
	      push(open);
	      continue;
	    }

	    if (value === '}') {
	      const brace = braces[braces.length - 1];

	      if (opts.nobrace === true || !brace) {
	        push({ type: 'text', value, output: value });
	        continue;
	      }

	      let output = ')';

	      if (brace.dots === true) {
	        const arr = tokens.slice();
	        const range = [];

	        for (let i = arr.length - 1; i >= 0; i--) {
	          tokens.pop();
	          if (arr[i].type === 'brace') {
	            break;
	          }
	          if (arr[i].type !== 'dots') {
	            range.unshift(arr[i].value);
	          }
	        }

	        output = expandRange(range, opts);
	        state.backtrack = true;
	      }

	      if (brace.comma !== true && brace.dots !== true) {
	        const out = state.output.slice(0, brace.outputIndex);
	        const toks = state.tokens.slice(brace.tokensIndex);
	        brace.value = brace.output = '\\{';
	        value = output = '\\}';
	        state.output = out;
	        for (const t of toks) {
	          state.output += (t.output || t.value);
	        }
	      }

	      push({ type: 'brace', value, output });
	      decrement('braces');
	      braces.pop();
	      continue;
	    }

	    /**
	     * Pipes
	     */

	    if (value === '|') {
	      if (extglobs.length > 0) {
	        extglobs[extglobs.length - 1].conditions++;
	      }
	      push({ type: 'text', value });
	      continue;
	    }

	    /**
	     * Commas
	     */

	    if (value === ',') {
	      let output = value;

	      const brace = braces[braces.length - 1];
	      if (brace && stack[stack.length - 1] === 'braces') {
	        brace.comma = true;
	        output = '|';
	      }

	      push({ type: 'comma', value, output });
	      continue;
	    }

	    /**
	     * Slashes
	     */

	    if (value === '/') {
	      // if the beginning of the glob is "./", advance the start
	      // to the current index, and don't add the "./" characters
	      // to the state. This greatly simplifies lookbehinds when
	      // checking for BOS characters like "!" and "." (not "./")
	      if (prev.type === 'dot' && state.index === state.start + 1) {
	        state.start = state.index + 1;
	        state.consumed = '';
	        state.output = '';
	        tokens.pop();
	        prev = bos; // reset "prev" to the first token
	        continue;
	      }

	      push({ type: 'slash', value, output: SLASH_LITERAL });
	      continue;
	    }

	    /**
	     * Dots
	     */

	    if (value === '.') {
	      if (state.braces > 0 && prev.type === 'dot') {
	        if (prev.value === '.') prev.output = DOT_LITERAL;
	        const brace = braces[braces.length - 1];
	        prev.type = 'dots';
	        prev.output += value;
	        prev.value += value;
	        brace.dots = true;
	        continue;
	      }

	      if ((state.braces + state.parens) === 0 && prev.type !== 'bos' && prev.type !== 'slash') {
	        push({ type: 'text', value, output: DOT_LITERAL });
	        continue;
	      }

	      push({ type: 'dot', value, output: DOT_LITERAL });
	      continue;
	    }

	    /**
	     * Question marks
	     */

	    if (value === '?') {
	      const isGroup = prev && prev.value === '(';
	      if (!isGroup && opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
	        extglobOpen('qmark', value);
	        continue;
	      }

	      if (prev && prev.type === 'paren') {
	        const next = peek();
	        let output = value;

	        if (next === '<' && !utils.supportsLookbehinds()) {
	          throw new Error('Node.js v10 or higher is required for regex lookbehinds');
	        }

	        if ((prev.value === '(' && !/[!=<:]/.test(next)) || (next === '<' && !/<([!=]|\w+>)/.test(remaining()))) {
	          output = `\\${value}`;
	        }

	        push({ type: 'text', value, output });
	        continue;
	      }

	      if (opts.dot !== true && (prev.type === 'slash' || prev.type === 'bos')) {
	        push({ type: 'qmark', value, output: QMARK_NO_DOT });
	        continue;
	      }

	      push({ type: 'qmark', value, output: QMARK });
	      continue;
	    }

	    /**
	     * Exclamation
	     */

	    if (value === '!') {
	      if (opts.noextglob !== true && peek() === '(') {
	        if (peek(2) !== '?' || !/[!=<:]/.test(peek(3))) {
	          extglobOpen('negate', value);
	          continue;
	        }
	      }

	      if (opts.nonegate !== true && state.index === 0) {
	        negate();
	        continue;
	      }
	    }

	    /**
	     * Plus
	     */

	    if (value === '+') {
	      if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
	        extglobOpen('plus', value);
	        continue;
	      }

	      if ((prev && prev.value === '(') || opts.regex === false) {
	        push({ type: 'plus', value, output: PLUS_LITERAL });
	        continue;
	      }

	      if ((prev && (prev.type === 'bracket' || prev.type === 'paren' || prev.type === 'brace')) || state.parens > 0) {
	        push({ type: 'plus', value });
	        continue;
	      }

	      push({ type: 'plus', value: PLUS_LITERAL });
	      continue;
	    }

	    /**
	     * Plain text
	     */

	    if (value === '@') {
	      if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
	        push({ type: 'at', extglob: true, value, output: '' });
	        continue;
	      }

	      push({ type: 'text', value });
	      continue;
	    }

	    /**
	     * Plain text
	     */

	    if (value !== '*') {
	      if (value === '$' || value === '^') {
	        value = `\\${value}`;
	      }

	      const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
	      if (match) {
	        value += match[0];
	        state.index += match[0].length;
	      }

	      push({ type: 'text', value });
	      continue;
	    }

	    /**
	     * Stars
	     */

	    if (prev && (prev.type === 'globstar' || prev.star === true)) {
	      prev.type = 'star';
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
	      extglobOpen('star', value);
	      continue;
	    }

	    if (prev.type === 'star') {
	      if (opts.noglobstar === true) {
	        consume(value);
	        continue;
	      }

	      const prior = prev.prev;
	      const before = prior.prev;
	      const isStart = prior.type === 'slash' || prior.type === 'bos';
	      const afterStar = before && (before.type === 'star' || before.type === 'globstar');

	      if (opts.bash === true && (!isStart || (rest[0] && rest[0] !== '/'))) {
	        push({ type: 'star', value, output: '' });
	        continue;
	      }

	      const isBrace = state.braces > 0 && (prior.type === 'comma' || prior.type === 'brace');
	      const isExtglob = extglobs.length && (prior.type === 'pipe' || prior.type === 'paren');
	      if (!isStart && prior.type !== 'paren' && !isBrace && !isExtglob) {
	        push({ type: 'star', value, output: '' });
	        continue;
	      }

	      // strip consecutive `/**/`
	      while (rest.slice(0, 3) === '/**') {
	        const after = input[state.index + 4];
	        if (after && after !== '/') {
	          break;
	        }
	        rest = rest.slice(3);
	        consume('/**', 3);
	      }

	      if (prior.type === 'bos' && eos()) {
	        prev.type = 'globstar';
	        prev.value += value;
	        prev.output = globstar(opts);
	        state.output = prev.output;
	        state.globstar = true;
	        consume(value);
	        continue;
	      }

	      if (prior.type === 'slash' && prior.prev.type !== 'bos' && !afterStar && eos()) {
	        state.output = state.output.slice(0, -(prior.output + prev.output).length);
	        prior.output = `(?:${prior.output}`;

	        prev.type = 'globstar';
	        prev.output = globstar(opts) + (opts.strictSlashes ? ')' : '|$)');
	        prev.value += value;
	        state.globstar = true;
	        state.output += prior.output + prev.output;
	        consume(value);
	        continue;
	      }

	      if (prior.type === 'slash' && prior.prev.type !== 'bos' && rest[0] === '/') {
	        const end = rest[1] !== void 0 ? '|$' : '';

	        state.output = state.output.slice(0, -(prior.output + prev.output).length);
	        prior.output = `(?:${prior.output}`;

	        prev.type = 'globstar';
	        prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
	        prev.value += value;

	        state.output += prior.output + prev.output;
	        state.globstar = true;

	        consume(value + advance());

	        push({ type: 'slash', value: '/', output: '' });
	        continue;
	      }

	      if (prior.type === 'bos' && rest[0] === '/') {
	        prev.type = 'globstar';
	        prev.value += value;
	        prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
	        state.output = prev.output;
	        state.globstar = true;
	        consume(value + advance());
	        push({ type: 'slash', value: '/', output: '' });
	        continue;
	      }

	      // remove single star from output
	      state.output = state.output.slice(0, -prev.output.length);

	      // reset previous token to globstar
	      prev.type = 'globstar';
	      prev.output = globstar(opts);
	      prev.value += value;

	      // reset output with globstar
	      state.output += prev.output;
	      state.globstar = true;
	      consume(value);
	      continue;
	    }

	    const token = { type: 'star', value, output: star };

	    if (opts.bash === true) {
	      token.output = '.*?';
	      if (prev.type === 'bos' || prev.type === 'slash') {
	        token.output = nodot + token.output;
	      }
	      push(token);
	      continue;
	    }

	    if (prev && (prev.type === 'bracket' || prev.type === 'paren') && opts.regex === true) {
	      token.output = value;
	      push(token);
	      continue;
	    }

	    if (state.index === state.start || prev.type === 'slash' || prev.type === 'dot') {
	      if (prev.type === 'dot') {
	        state.output += NO_DOT_SLASH;
	        prev.output += NO_DOT_SLASH;

	      } else if (opts.dot === true) {
	        state.output += NO_DOTS_SLASH;
	        prev.output += NO_DOTS_SLASH;

	      } else {
	        state.output += nodot;
	        prev.output += nodot;
	      }

	      if (peek() !== '*') {
	        state.output += ONE_CHAR;
	        prev.output += ONE_CHAR;
	      }
	    }

	    push(token);
	  }

	  while (state.brackets > 0) {
	    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', ']'));
	    state.output = utils.escapeLast(state.output, '[');
	    decrement('brackets');
	  }

	  while (state.parens > 0) {
	    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', ')'));
	    state.output = utils.escapeLast(state.output, '(');
	    decrement('parens');
	  }

	  while (state.braces > 0) {
	    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', '}'));
	    state.output = utils.escapeLast(state.output, '{');
	    decrement('braces');
	  }

	  if (opts.strictSlashes !== true && (prev.type === 'star' || prev.type === 'bracket')) {
	    push({ type: 'maybe_slash', value: '', output: `${SLASH_LITERAL}?` });
	  }

	  // rebuild the output if we had to backtrack at any point
	  if (state.backtrack === true) {
	    state.output = '';

	    for (const token of state.tokens) {
	      state.output += token.output != null ? token.output : token.value;

	      if (token.suffix) {
	        state.output += token.suffix;
	      }
	    }
	  }

	  return state;
	};

	/**
	 * Fast paths for creating regular expressions for common glob patterns.
	 * This can significantly speed up processing and has very little downside
	 * impact when none of the fast paths match.
	 */

	parse.fastpaths = (input, options) => {
	  const opts = { ...options };
	  const max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
	  const len = input.length;
	  if (len > max) {
	    throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
	  }

	  input = REPLACEMENTS[input] || input;
	  const win32 = utils.isWindows(options);

	  // create constants based on platform, for windows or posix
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
	  const capture = opts.capture ? '' : '?:';
	  const state = { negated: false, prefix: '' };
	  let star = opts.bash === true ? '.*?' : STAR;

	  if (opts.capture) {
	    star = `(${star})`;
	  }

	  const globstar = opts => {
	    if (opts.noglobstar === true) return star;
	    return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
	  };

	  const create = str => {
	    switch (str) {
	      case '*':
	        return `${nodot}${ONE_CHAR}${star}`;

	      case '.*':
	        return `${DOT_LITERAL}${ONE_CHAR}${star}`;

	      case '*.*':
	        return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;

	      case '*/*':
	        return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;

	      case '**':
	        return nodot + globstar(opts);

	      case '**/*':
	        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;

	      case '**/*.*':
	        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;

	      case '**/.*':
	        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;

	      default: {
	        const match = /^(.*?)\.(\w+)$/.exec(str);
	        if (!match) return;

	        const source = create(match[1]);
	        if (!source) return;

	        return source + DOT_LITERAL + match[2];
	      }
	    }
	  };

	  const output = utils.removePrefix(input, state);
	  let source = create(output);

	  if (source && opts.strictSlashes !== true) {
	    source += `${SLASH_LITERAL}?`;
	  }

	  return source;
	};

	parse_1$1 = parse;
	return parse_1$1;
}

var picomatch_1;
var hasRequiredPicomatch$1;

function requirePicomatch$1 () {
	if (hasRequiredPicomatch$1) return picomatch_1;
	hasRequiredPicomatch$1 = 1;

	const path = require$$0$1;
	const scan = /*@__PURE__*/ requireScan();
	const parse = /*@__PURE__*/ requireParse$1();
	const utils = /*@__PURE__*/ requireUtils$1();
	const constants = /*@__PURE__*/ requireConstants$2();
	const isObject = val => val && typeof val === 'object' && !Array.isArray(val);

	/**
	 * Creates a matcher function from one or more glob patterns. The
	 * returned function takes a string to match as its first argument,
	 * and returns true if the string is a match. The returned matcher
	 * function also takes a boolean as the second argument that, when true,
	 * returns an object with additional information.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch(glob[, options]);
	 *
	 * const isMatch = picomatch('*.!(*a)');
	 * console.log(isMatch('a.a')); //=> false
	 * console.log(isMatch('a.b')); //=> true
	 * ```
	 * @name picomatch
	 * @param {String|Array} `globs` One or more glob patterns.
	 * @param {Object=} `options`
	 * @return {Function=} Returns a matcher function.
	 * @api public
	 */

	const picomatch = (glob, options, returnState = false) => {
	  if (Array.isArray(glob)) {
	    const fns = glob.map(input => picomatch(input, options, returnState));
	    const arrayMatcher = str => {
	      for (const isMatch of fns) {
	        const state = isMatch(str);
	        if (state) return state;
	      }
	      return false;
	    };
	    return arrayMatcher;
	  }

	  const isState = isObject(glob) && glob.tokens && glob.input;

	  if (glob === '' || (typeof glob !== 'string' && !isState)) {
	    throw new TypeError('Expected pattern to be a non-empty string');
	  }

	  const opts = options || {};
	  const posix = utils.isWindows(options);
	  const regex = isState
	    ? picomatch.compileRe(glob, options)
	    : picomatch.makeRe(glob, options, false, true);

	  const state = regex.state;
	  delete regex.state;

	  let isIgnored = () => false;
	  if (opts.ignore) {
	    const ignoreOpts = { ...options, ignore: null, onMatch: null, onResult: null };
	    isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
	  }

	  const matcher = (input, returnObject = false) => {
	    const { isMatch, match, output } = picomatch.test(input, regex, options, { glob, posix });
	    const result = { glob, state, regex, posix, input, output, match, isMatch };

	    if (typeof opts.onResult === 'function') {
	      opts.onResult(result);
	    }

	    if (isMatch === false) {
	      result.isMatch = false;
	      return returnObject ? result : false;
	    }

	    if (isIgnored(input)) {
	      if (typeof opts.onIgnore === 'function') {
	        opts.onIgnore(result);
	      }
	      result.isMatch = false;
	      return returnObject ? result : false;
	    }

	    if (typeof opts.onMatch === 'function') {
	      opts.onMatch(result);
	    }
	    return returnObject ? result : true;
	  };

	  if (returnState) {
	    matcher.state = state;
	  }

	  return matcher;
	};

	/**
	 * Test `input` with the given `regex`. This is used by the main
	 * `picomatch()` function to test the input string.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch.test(input, regex[, options]);
	 *
	 * console.log(picomatch.test('foo/bar', /^(?:([^/]*?)\/([^/]*?))$/));
	 * // { isMatch: true, match: [ 'foo/', 'foo', 'bar' ], output: 'foo/bar' }
	 * ```
	 * @param {String} `input` String to test.
	 * @param {RegExp} `regex`
	 * @return {Object} Returns an object with matching info.
	 * @api public
	 */

	picomatch.test = (input, regex, options, { glob, posix } = {}) => {
	  if (typeof input !== 'string') {
	    throw new TypeError('Expected input to be a string');
	  }

	  if (input === '') {
	    return { isMatch: false, output: '' };
	  }

	  const opts = options || {};
	  const format = opts.format || (posix ? utils.toPosixSlashes : null);
	  let match = input === glob;
	  let output = (match && format) ? format(input) : input;

	  if (match === false) {
	    output = format ? format(input) : input;
	    match = output === glob;
	  }

	  if (match === false || opts.capture === true) {
	    if (opts.matchBase === true || opts.basename === true) {
	      match = picomatch.matchBase(input, regex, options, posix);
	    } else {
	      match = regex.exec(output);
	    }
	  }

	  return { isMatch: Boolean(match), match, output };
	};

	/**
	 * Match the basename of a filepath.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch.matchBase(input, glob[, options]);
	 * console.log(picomatch.matchBase('foo/bar.js', '*.js'); // true
	 * ```
	 * @param {String} `input` String to test.
	 * @param {RegExp|String} `glob` Glob pattern or regex created by [.makeRe](#makeRe).
	 * @return {Boolean}
	 * @api public
	 */

	picomatch.matchBase = (input, glob, options, posix = utils.isWindows(options)) => {
	  const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
	  return regex.test(path.basename(input));
	};

	/**
	 * Returns true if **any** of the given glob `patterns` match the specified `string`.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch.isMatch(string, patterns[, options]);
	 *
	 * console.log(picomatch.isMatch('a.a', ['b.*', '*.a'])); //=> true
	 * console.log(picomatch.isMatch('a.a', 'b.*')); //=> false
	 * ```
	 * @param {String|Array} str The string to test.
	 * @param {String|Array} patterns One or more glob patterns to use for matching.
	 * @param {Object} [options] See available [options](#options).
	 * @return {Boolean} Returns true if any patterns match `str`
	 * @api public
	 */

	picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);

	/**
	 * Parse a glob pattern to create the source string for a regular
	 * expression.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * const result = picomatch.parse(pattern[, options]);
	 * ```
	 * @param {String} `pattern`
	 * @param {Object} `options`
	 * @return {Object} Returns an object with useful properties and output to be used as a regex source string.
	 * @api public
	 */

	picomatch.parse = (pattern, options) => {
	  if (Array.isArray(pattern)) return pattern.map(p => picomatch.parse(p, options));
	  return parse(pattern, { ...options, fastpaths: false });
	};

	/**
	 * Scan a glob pattern to separate the pattern into segments.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch.scan(input[, options]);
	 *
	 * const result = picomatch.scan('!./foo/*.js');
	 * console.log(result);
	 * { prefix: '!./',
	 *   input: '!./foo/*.js',
	 *   start: 3,
	 *   base: 'foo',
	 *   glob: '*.js',
	 *   isBrace: false,
	 *   isBracket: false,
	 *   isGlob: true,
	 *   isExtglob: false,
	 *   isGlobstar: false,
	 *   negated: true }
	 * ```
	 * @param {String} `input` Glob pattern to scan.
	 * @param {Object} `options`
	 * @return {Object} Returns an object with
	 * @api public
	 */

	picomatch.scan = (input, options) => scan(input, options);

	/**
	 * Compile a regular expression from the `state` object returned by the
	 * [parse()](#parse) method.
	 *
	 * @param {Object} `state`
	 * @param {Object} `options`
	 * @param {Boolean} `returnOutput` Intended for implementors, this argument allows you to return the raw output from the parser.
	 * @param {Boolean} `returnState` Adds the state to a `state` property on the returned regex. Useful for implementors and debugging.
	 * @return {RegExp}
	 * @api public
	 */

	picomatch.compileRe = (state, options, returnOutput = false, returnState = false) => {
	  if (returnOutput === true) {
	    return state.output;
	  }

	  const opts = options || {};
	  const prepend = opts.contains ? '' : '^';
	  const append = opts.contains ? '' : '$';

	  let source = `${prepend}(?:${state.output})${append}`;
	  if (state && state.negated === true) {
	    source = `^(?!${source}).*$`;
	  }

	  const regex = picomatch.toRegex(source, options);
	  if (returnState === true) {
	    regex.state = state;
	  }

	  return regex;
	};

	/**
	 * Create a regular expression from a parsed glob pattern.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * const state = picomatch.parse('*.js');
	 * // picomatch.compileRe(state[, options]);
	 *
	 * console.log(picomatch.compileRe(state));
	 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
	 * ```
	 * @param {String} `state` The object returned from the `.parse` method.
	 * @param {Object} `options`
	 * @param {Boolean} `returnOutput` Implementors may use this argument to return the compiled output, instead of a regular expression. This is not exposed on the options to prevent end-users from mutating the result.
	 * @param {Boolean} `returnState` Implementors may use this argument to return the state from the parsed glob with the returned regular expression.
	 * @return {RegExp} Returns a regex created from the given pattern.
	 * @api public
	 */

	picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
	  if (!input || typeof input !== 'string') {
	    throw new TypeError('Expected a non-empty string');
	  }

	  let parsed = { negated: false, fastpaths: true };

	  if (options.fastpaths !== false && (input[0] === '.' || input[0] === '*')) {
	    parsed.output = parse.fastpaths(input, options);
	  }

	  if (!parsed.output) {
	    parsed = parse(input, options);
	  }

	  return picomatch.compileRe(parsed, options, returnOutput, returnState);
	};

	/**
	 * Create a regular expression from the given regex source string.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch.toRegex(source[, options]);
	 *
	 * const { output } = picomatch.parse('*.js');
	 * console.log(picomatch.toRegex(output));
	 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
	 * ```
	 * @param {String} `source` Regular expression source string.
	 * @param {Object} `options`
	 * @return {RegExp}
	 * @api public
	 */

	picomatch.toRegex = (source, options) => {
	  try {
	    const opts = options || {};
	    return new RegExp(source, opts.flags || (opts.nocase ? 'i' : ''));
	  } catch (err) {
	    if (options && options.debug === true) throw err;
	    return /$^/;
	  }
	};

	/**
	 * Picomatch constants.
	 * @return {Object}
	 */

	picomatch.constants = constants;

	/**
	 * Expose "picomatch"
	 */

	picomatch_1 = picomatch;
	return picomatch_1;
}

var picomatch;
var hasRequiredPicomatch;

function requirePicomatch () {
	if (hasRequiredPicomatch) return picomatch;
	hasRequiredPicomatch = 1;

	picomatch = /*@__PURE__*/ requirePicomatch$1();
	return picomatch;
}

/*!
 * normalize-path <https://github.com/jonschlinkert/normalize-path>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
 */

var normalizePath;
var hasRequiredNormalizePath;

function requireNormalizePath () {
	if (hasRequiredNormalizePath) return normalizePath;
	hasRequiredNormalizePath = 1;
	normalizePath = function(path, stripTrailing) {
	  if (typeof path !== 'string') {
	    throw new TypeError('expected path to be a string');
	  }

	  if (path === '\\' || path === '/') return '/';

	  var len = path.length;
	  if (len <= 1) return path;

	  // ensure that win32 namespaces has two leading slashes, so that the path is
	  // handled properly by the win32 version of path.parse() after being normalized
	  // https://msdn.microsoft.com/library/windows/desktop/aa365247(v=vs.85).aspx#namespaces
	  var prefix = '';
	  if (len > 4 && path[3] === '\\') {
	    var ch = path[2];
	    if ((ch === '?' || ch === '.') && path.slice(0, 2) === '\\\\') {
	      path = path.slice(2);
	      prefix = '//';
	    }
	  }

	  var segs = path.split(/[/\\]+/);
	  if (stripTrailing !== false && segs[segs.length - 1] === '') {
	    segs.pop();
	  }
	  return prefix + segs.join('/');
	};
	return normalizePath;
}

var anymatch_1 = anymatch.exports;

var hasRequiredAnymatch;

function requireAnymatch () {
	if (hasRequiredAnymatch) return anymatch.exports;
	hasRequiredAnymatch = 1;

	Object.defineProperty(anymatch_1, "__esModule", { value: true });

	const picomatch = /*@__PURE__*/ requirePicomatch();
	const normalizePath = /*@__PURE__*/ requireNormalizePath();

	/**
	 * @typedef {(testString: string) => boolean} AnymatchFn
	 * @typedef {string|RegExp|AnymatchFn} AnymatchPattern
	 * @typedef {AnymatchPattern|AnymatchPattern[]} AnymatchMatcher
	 */
	const BANG = '!';
	const DEFAULT_OPTIONS = {returnIndex: false};
	const arrify = (item) => Array.isArray(item) ? item : [item];

	/**
	 * @param {AnymatchPattern} matcher
	 * @param {object} options
	 * @returns {AnymatchFn}
	 */
	const createPattern = (matcher, options) => {
	  if (typeof matcher === 'function') {
	    return matcher;
	  }
	  if (typeof matcher === 'string') {
	    const glob = picomatch(matcher, options);
	    return (string) => matcher === string || glob(string);
	  }
	  if (matcher instanceof RegExp) {
	    return (string) => matcher.test(string);
	  }
	  return (string) => false;
	};

	/**
	 * @param {Array<Function>} patterns
	 * @param {Array<Function>} negPatterns
	 * @param {String|Array} args
	 * @param {Boolean} returnIndex
	 * @returns {boolean|number}
	 */
	const matchPatterns = (patterns, negPatterns, args, returnIndex) => {
	  const isList = Array.isArray(args);
	  const _path = isList ? args[0] : args;
	  if (!isList && typeof _path !== 'string') {
	    throw new TypeError('anymatch: second argument must be a string: got ' +
	      Object.prototype.toString.call(_path))
	  }
	  const path = normalizePath(_path, false);

	  for (let index = 0; index < negPatterns.length; index++) {
	    const nglob = negPatterns[index];
	    if (nglob(path)) {
	      return returnIndex ? -1 : false;
	    }
	  }

	  const applied = isList && [path].concat(args.slice(1));
	  for (let index = 0; index < patterns.length; index++) {
	    const pattern = patterns[index];
	    if (isList ? pattern(...applied) : pattern(path)) {
	      return returnIndex ? index : true;
	    }
	  }

	  return returnIndex ? -1 : false;
	};

	/**
	 * @param {AnymatchMatcher} matchers
	 * @param {Array|string} testString
	 * @param {object} options
	 * @returns {boolean|number|Function}
	 */
	const anymatch$1 = (matchers, testString, options = DEFAULT_OPTIONS) => {
	  if (matchers == null) {
	    throw new TypeError('anymatch: specify first argument');
	  }
	  const opts = typeof options === 'boolean' ? {returnIndex: options} : options;
	  const returnIndex = opts.returnIndex || false;

	  // Early cache for matchers.
	  const mtchers = arrify(matchers);
	  const negatedGlobs = mtchers
	    .filter(item => typeof item === 'string' && item.charAt(0) === BANG)
	    .map(item => item.slice(1))
	    .map(item => picomatch(item, opts));
	  const patterns = mtchers
	    .filter(item => typeof item !== 'string' || (typeof item === 'string' && item.charAt(0) !== BANG))
	    .map(matcher => createPattern(matcher, opts));

	  if (testString == null) {
	    return (testString, ri = false) => {
	      const returnIndex = typeof ri === 'boolean' ? ri : false;
	      return matchPatterns(patterns, negatedGlobs, testString, returnIndex);
	    }
	  }

	  return matchPatterns(patterns, negatedGlobs, testString, returnIndex);
	};

	anymatch$1.default = anymatch$1;
	anymatch.exports = anymatch$1;
	return anymatch.exports;
}

/*!
 * is-extglob <https://github.com/jonschlinkert/is-extglob>
 *
 * Copyright (c) 2014-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

var isExtglob;
var hasRequiredIsExtglob;

function requireIsExtglob () {
	if (hasRequiredIsExtglob) return isExtglob;
	hasRequiredIsExtglob = 1;
	isExtglob = function isExtglob(str) {
	  if (typeof str !== 'string' || str === '') {
	    return false;
	  }

	  var match;
	  while ((match = /(\\).|([@?!+*]\(.*\))/g.exec(str))) {
	    if (match[2]) return true;
	    str = str.slice(match.index + match[0].length);
	  }

	  return false;
	};
	return isExtglob;
}

/*!
 * is-glob <https://github.com/jonschlinkert/is-glob>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

var isGlob;
var hasRequiredIsGlob;

function requireIsGlob () {
	if (hasRequiredIsGlob) return isGlob;
	hasRequiredIsGlob = 1;
	var isExtglob = /*@__PURE__*/ requireIsExtglob();
	var chars = { '{': '}', '(': ')', '[': ']'};
	var strictCheck = function(str) {
	  if (str[0] === '!') {
	    return true;
	  }
	  var index = 0;
	  var pipeIndex = -2;
	  var closeSquareIndex = -2;
	  var closeCurlyIndex = -2;
	  var closeParenIndex = -2;
	  var backSlashIndex = -2;
	  while (index < str.length) {
	    if (str[index] === '*') {
	      return true;
	    }

	    if (str[index + 1] === '?' && /[\].+)]/.test(str[index])) {
	      return true;
	    }

	    if (closeSquareIndex !== -1 && str[index] === '[' && str[index + 1] !== ']') {
	      if (closeSquareIndex < index) {
	        closeSquareIndex = str.indexOf(']', index);
	      }
	      if (closeSquareIndex > index) {
	        if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
	          return true;
	        }
	        backSlashIndex = str.indexOf('\\', index);
	        if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
	          return true;
	        }
	      }
	    }

	    if (closeCurlyIndex !== -1 && str[index] === '{' && str[index + 1] !== '}') {
	      closeCurlyIndex = str.indexOf('}', index);
	      if (closeCurlyIndex > index) {
	        backSlashIndex = str.indexOf('\\', index);
	        if (backSlashIndex === -1 || backSlashIndex > closeCurlyIndex) {
	          return true;
	        }
	      }
	    }

	    if (closeParenIndex !== -1 && str[index] === '(' && str[index + 1] === '?' && /[:!=]/.test(str[index + 2]) && str[index + 3] !== ')') {
	      closeParenIndex = str.indexOf(')', index);
	      if (closeParenIndex > index) {
	        backSlashIndex = str.indexOf('\\', index);
	        if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
	          return true;
	        }
	      }
	    }

	    if (pipeIndex !== -1 && str[index] === '(' && str[index + 1] !== '|') {
	      if (pipeIndex < index) {
	        pipeIndex = str.indexOf('|', index);
	      }
	      if (pipeIndex !== -1 && str[pipeIndex + 1] !== ')') {
	        closeParenIndex = str.indexOf(')', pipeIndex);
	        if (closeParenIndex > pipeIndex) {
	          backSlashIndex = str.indexOf('\\', pipeIndex);
	          if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
	            return true;
	          }
	        }
	      }
	    }

	    if (str[index] === '\\') {
	      var open = str[index + 1];
	      index += 2;
	      var close = chars[open];

	      if (close) {
	        var n = str.indexOf(close, index);
	        if (n !== -1) {
	          index = n + 1;
	        }
	      }

	      if (str[index] === '!') {
	        return true;
	      }
	    } else {
	      index++;
	    }
	  }
	  return false;
	};

	var relaxedCheck = function(str) {
	  if (str[0] === '!') {
	    return true;
	  }
	  var index = 0;
	  while (index < str.length) {
	    if (/[*?{}()[\]]/.test(str[index])) {
	      return true;
	    }

	    if (str[index] === '\\') {
	      var open = str[index + 1];
	      index += 2;
	      var close = chars[open];

	      if (close) {
	        var n = str.indexOf(close, index);
	        if (n !== -1) {
	          index = n + 1;
	        }
	      }

	      if (str[index] === '!') {
	        return true;
	      }
	    } else {
	      index++;
	    }
	  }
	  return false;
	};

	isGlob = function isGlob(str, options) {
	  if (typeof str !== 'string' || str === '') {
	    return false;
	  }

	  if (isExtglob(str)) {
	    return true;
	  }

	  var check = strictCheck;

	  // optionally relax check
	  if (options && options.strict === false) {
	    check = relaxedCheck;
	  }

	  return check(str);
	};
	return isGlob;
}

var globParent;
var hasRequiredGlobParent;

function requireGlobParent () {
	if (hasRequiredGlobParent) return globParent;
	hasRequiredGlobParent = 1;

	var isGlob = /*@__PURE__*/ requireIsGlob();
	var pathPosixDirname = require$$0$1.posix.dirname;
	var isWin32 = require$$2$1.platform() === 'win32';

	var slash = '/';
	var backslash = /\\/g;
	var enclosure = /[\{\[].*[\}\]]$/;
	var globby = /(^|[^\\])([\{\[]|\([^\)]+$)/;
	var escaped = /\\([\!\*\?\|\[\]\(\)\{\}])/g;

	/**
	 * @param {string} str
	 * @param {Object} opts
	 * @param {boolean} [opts.flipBackslashes=true]
	 * @returns {string}
	 */
	globParent = function globParent(str, opts) {
	  var options = Object.assign({ flipBackslashes: true }, opts);

	  // flip windows path separators
	  if (options.flipBackslashes && isWin32 && str.indexOf(slash) < 0) {
	    str = str.replace(backslash, slash);
	  }

	  // special case for strings ending in enclosure containing path separator
	  if (enclosure.test(str)) {
	    str += slash;
	  }

	  // preserves full path in case of trailing path separator
	  str += 'a';

	  // remove path parts that are globby
	  do {
	    str = pathPosixDirname(str);
	  } while (isGlob(str) || globby.test(str));

	  // remove escape chars and return result
	  return str.replace(escaped, '$1');
	};
	return globParent;
}

var utils = {};

var hasRequiredUtils;

function requireUtils () {
	if (hasRequiredUtils) return utils;
	hasRequiredUtils = 1;
	(function (exports$1) {

		exports$1.isInteger = num => {
		  if (typeof num === 'number') {
		    return Number.isInteger(num);
		  }
		  if (typeof num === 'string' && num.trim() !== '') {
		    return Number.isInteger(Number(num));
		  }
		  return false;
		};

		/**
		 * Find a node of the given type
		 */

		exports$1.find = (node, type) => node.nodes.find(node => node.type === type);

		/**
		 * Find a node of the given type
		 */

		exports$1.exceedsLimit = (min, max, step = 1, limit) => {
		  if (limit === false) return false;
		  if (!exports$1.isInteger(min) || !exports$1.isInteger(max)) return false;
		  return ((Number(max) - Number(min)) / Number(step)) >= limit;
		};

		/**
		 * Escape the given node with '\\' before node.value
		 */

		exports$1.escapeNode = (block, n = 0, type) => {
		  const node = block.nodes[n];
		  if (!node) return;

		  if ((type && node.type === type) || node.type === 'open' || node.type === 'close') {
		    if (node.escaped !== true) {
		      node.value = '\\' + node.value;
		      node.escaped = true;
		    }
		  }
		};

		/**
		 * Returns true if the given brace node should be enclosed in literal braces
		 */

		exports$1.encloseBrace = node => {
		  if (node.type !== 'brace') return false;
		  if ((node.commas >> 0 + node.ranges >> 0) === 0) {
		    node.invalid = true;
		    return true;
		  }
		  return false;
		};

		/**
		 * Returns true if a brace node is invalid.
		 */

		exports$1.isInvalidBrace = block => {
		  if (block.type !== 'brace') return false;
		  if (block.invalid === true || block.dollar) return true;
		  if ((block.commas >> 0 + block.ranges >> 0) === 0) {
		    block.invalid = true;
		    return true;
		  }
		  if (block.open !== true || block.close !== true) {
		    block.invalid = true;
		    return true;
		  }
		  return false;
		};

		/**
		 * Returns true if a node is an open or close node
		 */

		exports$1.isOpenOrClose = node => {
		  if (node.type === 'open' || node.type === 'close') {
		    return true;
		  }
		  return node.open === true || node.close === true;
		};

		/**
		 * Reduce an array of text nodes.
		 */

		exports$1.reduce = nodes => nodes.reduce((acc, node) => {
		  if (node.type === 'text') acc.push(node.value);
		  if (node.type === 'range') node.type = 'text';
		  return acc;
		}, []);

		/**
		 * Flatten an array
		 */

		exports$1.flatten = (...args) => {
		  const result = [];

		  const flat = arr => {
		    for (let i = 0; i < arr.length; i++) {
		      const ele = arr[i];

		      if (Array.isArray(ele)) {
		        flat(ele);
		        continue;
		      }

		      if (ele !== undefined) {
		        result.push(ele);
		      }
		    }
		    return result;
		  };

		  flat(args);
		  return result;
		}; 
	} (utils));
	return utils;
}

var stringify;
var hasRequiredStringify;

function requireStringify () {
	if (hasRequiredStringify) return stringify;
	hasRequiredStringify = 1;

	const utils = /*@__PURE__*/ requireUtils();

	stringify = (ast, options = {}) => {
	  const stringify = (node, parent = {}) => {
	    const invalidBlock = options.escapeInvalid && utils.isInvalidBrace(parent);
	    const invalidNode = node.invalid === true && options.escapeInvalid === true;
	    let output = '';

	    if (node.value) {
	      if ((invalidBlock || invalidNode) && utils.isOpenOrClose(node)) {
	        return '\\' + node.value;
	      }
	      return node.value;
	    }

	    if (node.value) {
	      return node.value;
	    }

	    if (node.nodes) {
	      for (const child of node.nodes) {
	        output += stringify(child);
	      }
	    }
	    return output;
	  };

	  return stringify(ast);
	};
	return stringify;
}

/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */

var isNumber;
var hasRequiredIsNumber;

function requireIsNumber () {
	if (hasRequiredIsNumber) return isNumber;
	hasRequiredIsNumber = 1;

	isNumber = function(num) {
	  if (typeof num === 'number') {
	    return num - num === 0;
	  }
	  if (typeof num === 'string' && num.trim() !== '') {
	    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
	  }
	  return false;
	};
	return isNumber;
}

/*!
 * to-regex-range <https://github.com/micromatch/to-regex-range>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */

var toRegexRange_1;
var hasRequiredToRegexRange;

function requireToRegexRange () {
	if (hasRequiredToRegexRange) return toRegexRange_1;
	hasRequiredToRegexRange = 1;

	const isNumber = /*@__PURE__*/ requireIsNumber();

	const toRegexRange = (min, max, options) => {
	  if (isNumber(min) === false) {
	    throw new TypeError('toRegexRange: expected the first argument to be a number');
	  }

	  if (max === void 0 || min === max) {
	    return String(min);
	  }

	  if (isNumber(max) === false) {
	    throw new TypeError('toRegexRange: expected the second argument to be a number.');
	  }

	  let opts = { relaxZeros: true, ...options };
	  if (typeof opts.strictZeros === 'boolean') {
	    opts.relaxZeros = opts.strictZeros === false;
	  }

	  let relax = String(opts.relaxZeros);
	  let shorthand = String(opts.shorthand);
	  let capture = String(opts.capture);
	  let wrap = String(opts.wrap);
	  let cacheKey = min + ':' + max + '=' + relax + shorthand + capture + wrap;

	  if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
	    return toRegexRange.cache[cacheKey].result;
	  }

	  let a = Math.min(min, max);
	  let b = Math.max(min, max);

	  if (Math.abs(a - b) === 1) {
	    let result = min + '|' + max;
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
	  state.result = collatePatterns(negatives, positives);

	  if (opts.capture === true) {
	    state.result = `(${state.result})`;
	  } else if (opts.wrap !== false && (positives.length + negatives.length) > 1) {
	    state.result = `(?:${state.result})`;
	  }

	  toRegexRange.cache[cacheKey] = state;
	  return state.result;
	};

	function collatePatterns(neg, pos, options) {
	  let onlyNegative = filterPatterns(neg, pos, '-', false) || [];
	  let onlyPositive = filterPatterns(pos, neg, '', false) || [];
	  let intersected = filterPatterns(neg, pos, '-?', true) || [];
	  let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
	  return subpatterns.join('|');
	}

	function splitToRanges(min, max) {
	  let nines = 1;
	  let zeros = 1;

	  let stop = countNines(min, nines);
	  let stops = new Set([max]);

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

	/**
	 * Convert a range to a regex pattern
	 * @param {Number} `start`
	 * @param {Number} `stop`
	 * @return {String}
	 */

	function rangeToPattern(start, stop, options) {
	  if (start === stop) {
	    return { pattern: start, count: [], digits: 0 };
	  }

	  let zipped = zip(start, stop);
	  let digits = zipped.length;
	  let pattern = '';
	  let count = 0;

	  for (let i = 0; i < digits; i++) {
	    let [startDigit, stopDigit] = zipped[i];

	    if (startDigit === stopDigit) {
	      pattern += startDigit;

	    } else if (startDigit !== '0' || stopDigit !== '9') {
	      pattern += toCharacterClass(startDigit, stopDigit);

	    } else {
	      count++;
	    }
	  }

	  if (count) {
	    pattern += options.shorthand === true ? '\\d' : '[0-9]';
	  }

	  return { pattern, count: [count], digits };
	}

	function splitToPatterns(min, max, tok, options) {
	  let ranges = splitToRanges(min, max);
	  let tokens = [];
	  let start = min;
	  let prev;

	  for (let i = 0; i < ranges.length; i++) {
	    let max = ranges[i];
	    let obj = rangeToPattern(String(start), String(max), options);
	    let zeros = '';

	    if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
	      if (prev.count.length > 1) {
	        prev.count.pop();
	      }

	      prev.count.push(obj.count[0]);
	      prev.string = prev.pattern + toQuantifier(prev.count);
	      start = max + 1;
	      continue;
	    }

	    if (tok.isPadded) {
	      zeros = padZeros(max, tok, options);
	    }

	    obj.string = zeros + obj.pattern + toQuantifier(obj.count);
	    tokens.push(obj);
	    start = max + 1;
	    prev = obj;
	  }

	  return tokens;
	}

	function filterPatterns(arr, comparison, prefix, intersection, options) {
	  let result = [];

	  for (let ele of arr) {
	    let { string } = ele;

	    // only push if _both_ are negative...
	    if (!intersection && !contains(comparison, 'string', string)) {
	      result.push(prefix + string);
	    }

	    // or _both_ are positive
	    if (intersection && contains(comparison, 'string', string)) {
	      result.push(prefix + string);
	    }
	  }
	  return result;
	}

	/**
	 * Zip strings
	 */

	function zip(a, b) {
	  let arr = [];
	  for (let i = 0; i < a.length; i++) arr.push([a[i], b[i]]);
	  return arr;
	}

	function compare(a, b) {
	  return a > b ? 1 : b > a ? -1 : 0;
	}

	function contains(arr, key, val) {
	  return arr.some(ele => ele[key] === val);
	}

	function countNines(min, len) {
	  return Number(String(min).slice(0, -len) + '9'.repeat(len));
	}

	function countZeros(integer, zeros) {
	  return integer - (integer % Math.pow(10, zeros));
	}

	function toQuantifier(digits) {
	  let [start = 0, stop = ''] = digits;
	  if (stop || start > 1) {
	    return `{${start + (stop ? ',' + stop : '')}}`;
	  }
	  return '';
	}

	function toCharacterClass(a, b, options) {
	  return `[${a}${(b - a === 1) ? '' : '-'}${b}]`;
	}

	function hasPadding(str) {
	  return /^-?(0+)\d/.test(str);
	}

	function padZeros(value, tok, options) {
	  if (!tok.isPadded) {
	    return value;
	  }

	  let diff = Math.abs(tok.maxLen - String(value).length);
	  let relax = options.relaxZeros !== false;

	  switch (diff) {
	    case 0:
	      return '';
	    case 1:
	      return relax ? '0?' : '0';
	    case 2:
	      return relax ? '0{0,2}' : '00';
	    default: {
	      return relax ? `0{0,${diff}}` : `0{${diff}}`;
	    }
	  }
	}

	/**
	 * Cache
	 */

	toRegexRange.cache = {};
	toRegexRange.clearCache = () => (toRegexRange.cache = {});

	/**
	 * Expose `toRegexRange`
	 */

	toRegexRange_1 = toRegexRange;
	return toRegexRange_1;
}

/*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */

var fillRange;
var hasRequiredFillRange;

function requireFillRange () {
	if (hasRequiredFillRange) return fillRange;
	hasRequiredFillRange = 1;

	const util = require$$2;
	const toRegexRange = /*@__PURE__*/ requireToRegexRange();

	const isObject = val => val !== null && typeof val === 'object' && !Array.isArray(val);

	const transform = toNumber => {
	  return value => toNumber === true ? Number(value) : String(value);
	};

	const isValidValue = value => {
	  return typeof value === 'number' || (typeof value === 'string' && value !== '');
	};

	const isNumber = num => Number.isInteger(+num);

	const zeros = input => {
	  let value = `${input}`;
	  let index = -1;
	  if (value[0] === '-') value = value.slice(1);
	  if (value === '0') return false;
	  while (value[++index] === '0');
	  return index > 0;
	};

	const stringify = (start, end, options) => {
	  if (typeof start === 'string' || typeof end === 'string') {
	    return true;
	  }
	  return options.stringify === true;
	};

	const pad = (input, maxLength, toNumber) => {
	  if (maxLength > 0) {
	    let dash = input[0] === '-' ? '-' : '';
	    if (dash) input = input.slice(1);
	    input = (dash + input.padStart(dash ? maxLength - 1 : maxLength, '0'));
	  }
	  if (toNumber === false) {
	    return String(input);
	  }
	  return input;
	};

	const toMaxLen = (input, maxLength) => {
	  let negative = input[0] === '-' ? '-' : '';
	  if (negative) {
	    input = input.slice(1);
	    maxLength--;
	  }
	  while (input.length < maxLength) input = '0' + input;
	  return negative ? ('-' + input) : input;
	};

	const toSequence = (parts, options, maxLen) => {
	  parts.negatives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
	  parts.positives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);

	  let prefix = options.capture ? '' : '?:';
	  let positives = '';
	  let negatives = '';
	  let result;

	  if (parts.positives.length) {
	    positives = parts.positives.map(v => toMaxLen(String(v), maxLen)).join('|');
	  }

	  if (parts.negatives.length) {
	    negatives = `-(${prefix}${parts.negatives.map(v => toMaxLen(String(v), maxLen)).join('|')})`;
	  }

	  if (positives && negatives) {
	    result = `${positives}|${negatives}`;
	  } else {
	    result = positives || negatives;
	  }

	  if (options.wrap) {
	    return `(${prefix}${result})`;
	  }

	  return result;
	};

	const toRange = (a, b, isNumbers, options) => {
	  if (isNumbers) {
	    return toRegexRange(a, b, { wrap: false, ...options });
	  }

	  let start = String.fromCharCode(a);
	  if (a === b) return start;

	  let stop = String.fromCharCode(b);
	  return `[${start}-${stop}]`;
	};

	const toRegex = (start, end, options) => {
	  if (Array.isArray(start)) {
	    let wrap = options.wrap === true;
	    let prefix = options.capture ? '' : '?:';
	    return wrap ? `(${prefix}${start.join('|')})` : start.join('|');
	  }
	  return toRegexRange(start, end, options);
	};

	const rangeError = (...args) => {
	  return new RangeError('Invalid range arguments: ' + util.inspect(...args));
	};

	const invalidRange = (start, end, options) => {
	  if (options.strictRanges === true) throw rangeError([start, end]);
	  return [];
	};

	const invalidStep = (step, options) => {
	  if (options.strictRanges === true) {
	    throw new TypeError(`Expected step "${step}" to be a number`);
	  }
	  return [];
	};

	const fillNumbers = (start, end, step = 1, options = {}) => {
	  let a = Number(start);
	  let b = Number(end);

	  if (!Number.isInteger(a) || !Number.isInteger(b)) {
	    if (options.strictRanges === true) throw rangeError([start, end]);
	    return [];
	  }

	  // fix negative zero
	  if (a === 0) a = 0;
	  if (b === 0) b = 0;

	  let descending = a > b;
	  let startString = String(start);
	  let endString = String(end);
	  let stepString = String(step);
	  step = Math.max(Math.abs(step), 1);

	  let padded = zeros(startString) || zeros(endString) || zeros(stepString);
	  let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
	  let toNumber = padded === false && stringify(start, end, options) === false;
	  let format = options.transform || transform(toNumber);

	  if (options.toRegex && step === 1) {
	    return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
	  }

	  let parts = { negatives: [], positives: [] };
	  let push = num => parts[num < 0 ? 'negatives' : 'positives'].push(Math.abs(num));
	  let range = [];
	  let index = 0;

	  while (descending ? a >= b : a <= b) {
	    if (options.toRegex === true && step > 1) {
	      push(a);
	    } else {
	      range.push(pad(format(a, index), maxLen, toNumber));
	    }
	    a = descending ? a - step : a + step;
	    index++;
	  }

	  if (options.toRegex === true) {
	    return step > 1
	      ? toSequence(parts, options, maxLen)
	      : toRegex(range, null, { wrap: false, ...options });
	  }

	  return range;
	};

	const fillLetters = (start, end, step = 1, options = {}) => {
	  if ((!isNumber(start) && start.length > 1) || (!isNumber(end) && end.length > 1)) {
	    return invalidRange(start, end, options);
	  }

	  let format = options.transform || (val => String.fromCharCode(val));
	  let a = `${start}`.charCodeAt(0);
	  let b = `${end}`.charCodeAt(0);

	  let descending = a > b;
	  let min = Math.min(a, b);
	  let max = Math.max(a, b);

	  if (options.toRegex && step === 1) {
	    return toRange(min, max, false, options);
	  }

	  let range = [];
	  let index = 0;

	  while (descending ? a >= b : a <= b) {
	    range.push(format(a, index));
	    a = descending ? a - step : a + step;
	    index++;
	  }

	  if (options.toRegex === true) {
	    return toRegex(range, null, { wrap: false, options });
	  }

	  return range;
	};

	const fill = (start, end, step, options = {}) => {
	  if (end == null && isValidValue(start)) {
	    return [start];
	  }

	  if (!isValidValue(start) || !isValidValue(end)) {
	    return invalidRange(start, end, options);
	  }

	  if (typeof step === 'function') {
	    return fill(start, end, 1, { transform: step });
	  }

	  if (isObject(step)) {
	    return fill(start, end, 0, step);
	  }

	  let opts = { ...options };
	  if (opts.capture === true) opts.wrap = true;
	  step = step || opts.step || 1;

	  if (!isNumber(step)) {
	    if (step != null && !isObject(step)) return invalidStep(step, opts);
	    return fill(start, end, 1, step);
	  }

	  if (isNumber(start) && isNumber(end)) {
	    return fillNumbers(start, end, step, opts);
	  }

	  return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
	};

	fillRange = fill;
	return fillRange;
}

var compile_1;
var hasRequiredCompile;

function requireCompile () {
	if (hasRequiredCompile) return compile_1;
	hasRequiredCompile = 1;

	const fill = /*@__PURE__*/ requireFillRange();
	const utils = /*@__PURE__*/ requireUtils();

	const compile = (ast, options = {}) => {
	  const walk = (node, parent = {}) => {
	    const invalidBlock = utils.isInvalidBrace(parent);
	    const invalidNode = node.invalid === true && options.escapeInvalid === true;
	    const invalid = invalidBlock === true || invalidNode === true;
	    const prefix = options.escapeInvalid === true ? '\\' : '';
	    let output = '';

	    if (node.isOpen === true) {
	      return prefix + node.value;
	    }

	    if (node.isClose === true) {
	      console.log('node.isClose', prefix, node.value);
	      return prefix + node.value;
	    }

	    if (node.type === 'open') {
	      return invalid ? prefix + node.value : '(';
	    }

	    if (node.type === 'close') {
	      return invalid ? prefix + node.value : ')';
	    }

	    if (node.type === 'comma') {
	      return node.prev.type === 'comma' ? '' : invalid ? node.value : '|';
	    }

	    if (node.value) {
	      return node.value;
	    }

	    if (node.nodes && node.ranges > 0) {
	      const args = utils.reduce(node.nodes);
	      const range = fill(...args, { ...options, wrap: false, toRegex: true, strictZeros: true });

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

	compile_1 = compile;
	return compile_1;
}

var expand_1;
var hasRequiredExpand;

function requireExpand () {
	if (hasRequiredExpand) return expand_1;
	hasRequiredExpand = 1;

	const fill = /*@__PURE__*/ requireFillRange();
	const stringify = /*@__PURE__*/ requireStringify();
	const utils = /*@__PURE__*/ requireUtils();

	const append = (queue = '', stash = '', enclose = false) => {
	  const result = [];

	  queue = [].concat(queue);
	  stash = [].concat(stash);

	  if (!stash.length) return queue;
	  if (!queue.length) {
	    return enclose ? utils.flatten(stash).map(ele => `{${ele}}`) : stash;
	  }

	  for (const item of queue) {
	    if (Array.isArray(item)) {
	      for (const value of item) {
	        result.push(append(value, stash, enclose));
	      }
	    } else {
	      for (let ele of stash) {
	        if (enclose === true && typeof ele === 'string') ele = `{${ele}}`;
	        result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
	      }
	    }
	  }
	  return utils.flatten(result);
	};

	const expand = (ast, options = {}) => {
	  const rangeLimit = options.rangeLimit === undefined ? 1000 : options.rangeLimit;

	  const walk = (node, parent = {}) => {
	    node.queue = [];

	    let p = parent;
	    let q = parent.queue;

	    while (p.type !== 'brace' && p.type !== 'root' && p.parent) {
	      p = p.parent;
	      q = p.queue;
	    }

	    if (node.invalid || node.dollar) {
	      q.push(append(q.pop(), stringify(node, options)));
	      return;
	    }

	    if (node.type === 'brace' && node.invalid !== true && node.nodes.length === 2) {
	      q.push(append(q.pop(), ['{}']));
	      return;
	    }

	    if (node.nodes && node.ranges > 0) {
	      const args = utils.reduce(node.nodes);

	      if (utils.exceedsLimit(...args, options.step, rangeLimit)) {
	        throw new RangeError('expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.');
	      }

	      let range = fill(...args, options);
	      if (range.length === 0) {
	        range = stringify(node, options);
	      }

	      q.push(append(q.pop(), range));
	      node.nodes = [];
	      return;
	    }

	    const enclose = utils.encloseBrace(node);
	    let queue = node.queue;
	    let block = node;

	    while (block.type !== 'brace' && block.type !== 'root' && block.parent) {
	      block = block.parent;
	      queue = block.queue;
	    }

	    for (let i = 0; i < node.nodes.length; i++) {
	      const child = node.nodes[i];

	      if (child.type === 'comma' && node.type === 'brace') {
	        if (i === 1) queue.push('');
	        queue.push('');
	        continue;
	      }

	      if (child.type === 'close') {
	        q.push(append(q.pop(), queue, enclose));
	        continue;
	      }

	      if (child.value && child.type !== 'open') {
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

	expand_1 = expand;
	return expand_1;
}

var constants$1;
var hasRequiredConstants$1;

function requireConstants$1 () {
	if (hasRequiredConstants$1) return constants$1;
	hasRequiredConstants$1 = 1;

	constants$1 = {
	  MAX_LENGTH: 10000,

	  // Digits
	  CHAR_0: '0', /* 0 */
	  CHAR_9: '9', /* 9 */

	  // Alphabet chars.
	  CHAR_UPPERCASE_A: 'A', /* A */
	  CHAR_LOWERCASE_A: 'a', /* a */
	  CHAR_UPPERCASE_Z: 'Z', /* Z */
	  CHAR_LOWERCASE_Z: 'z', /* z */

	  CHAR_LEFT_PARENTHESES: '(', /* ( */
	  CHAR_RIGHT_PARENTHESES: ')', /* ) */

	  CHAR_ASTERISK: '*', /* * */

	  // Non-alphabetic chars.
	  CHAR_AMPERSAND: '&', /* & */
	  CHAR_AT: '@', /* @ */
	  CHAR_BACKSLASH: '\\', /* \ */
	  CHAR_BACKTICK: '`', /* ` */
	  CHAR_CARRIAGE_RETURN: '\r', /* \r */
	  CHAR_CIRCUMFLEX_ACCENT: '^', /* ^ */
	  CHAR_COLON: ':', /* : */
	  CHAR_COMMA: ',', /* , */
	  CHAR_DOLLAR: '$', /* . */
	  CHAR_DOT: '.', /* . */
	  CHAR_DOUBLE_QUOTE: '"', /* " */
	  CHAR_EQUAL: '=', /* = */
	  CHAR_EXCLAMATION_MARK: '!', /* ! */
	  CHAR_FORM_FEED: '\f', /* \f */
	  CHAR_FORWARD_SLASH: '/', /* / */
	  CHAR_HASH: '#', /* # */
	  CHAR_HYPHEN_MINUS: '-', /* - */
	  CHAR_LEFT_ANGLE_BRACKET: '<', /* < */
	  CHAR_LEFT_CURLY_BRACE: '{', /* { */
	  CHAR_LEFT_SQUARE_BRACKET: '[', /* [ */
	  CHAR_LINE_FEED: '\n', /* \n */
	  CHAR_NO_BREAK_SPACE: '\u00A0', /* \u00A0 */
	  CHAR_PERCENT: '%', /* % */
	  CHAR_PLUS: '+', /* + */
	  CHAR_QUESTION_MARK: '?', /* ? */
	  CHAR_RIGHT_ANGLE_BRACKET: '>', /* > */
	  CHAR_RIGHT_CURLY_BRACE: '}', /* } */
	  CHAR_RIGHT_SQUARE_BRACKET: ']', /* ] */
	  CHAR_SEMICOLON: ';', /* ; */
	  CHAR_SINGLE_QUOTE: '\'', /* ' */
	  CHAR_SPACE: ' ', /*   */
	  CHAR_TAB: '\t', /* \t */
	  CHAR_UNDERSCORE: '_', /* _ */
	  CHAR_VERTICAL_LINE: '|', /* | */
	  CHAR_ZERO_WIDTH_NOBREAK_SPACE: '\uFEFF' /* \uFEFF */
	};
	return constants$1;
}

var parse_1;
var hasRequiredParse;

function requireParse () {
	if (hasRequiredParse) return parse_1;
	hasRequiredParse = 1;

	const stringify = /*@__PURE__*/ requireStringify();

	/**
	 * Constants
	 */

	const {
	  MAX_LENGTH,
	  CHAR_BACKSLASH, /* \ */
	  CHAR_BACKTICK, /* ` */
	  CHAR_COMMA, /* , */
	  CHAR_DOT, /* . */
	  CHAR_LEFT_PARENTHESES, /* ( */
	  CHAR_RIGHT_PARENTHESES, /* ) */
	  CHAR_LEFT_CURLY_BRACE, /* { */
	  CHAR_RIGHT_CURLY_BRACE, /* } */
	  CHAR_LEFT_SQUARE_BRACKET, /* [ */
	  CHAR_RIGHT_SQUARE_BRACKET, /* ] */
	  CHAR_DOUBLE_QUOTE, /* " */
	  CHAR_SINGLE_QUOTE, /* ' */
	  CHAR_NO_BREAK_SPACE,
	  CHAR_ZERO_WIDTH_NOBREAK_SPACE
	} = /*@__PURE__*/ requireConstants$1();

	/**
	 * parse
	 */

	const parse = (input, options = {}) => {
	  if (typeof input !== 'string') {
	    throw new TypeError('Expected a string');
	  }

	  const opts = options || {};
	  const max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
	  if (input.length > max) {
	    throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
	  }

	  const ast = { type: 'root', input, nodes: [] };
	  const stack = [ast];
	  let block = ast;
	  let prev = ast;
	  let brackets = 0;
	  const length = input.length;
	  let index = 0;
	  let depth = 0;
	  let value;

	  /**
	   * Helpers
	   */

	  const advance = () => input[index++];
	  const push = node => {
	    if (node.type === 'text' && prev.type === 'dot') {
	      prev.type = 'text';
	    }

	    if (prev && prev.type === 'text' && node.type === 'text') {
	      prev.value += node.value;
	      return;
	    }

	    block.nodes.push(node);
	    node.parent = block;
	    node.prev = prev;
	    prev = node;
	    return node;
	  };

	  push({ type: 'bos' });

	  while (index < length) {
	    block = stack[stack.length - 1];
	    value = advance();

	    /**
	     * Invalid chars
	     */

	    if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
	      continue;
	    }

	    /**
	     * Escaped chars
	     */

	    if (value === CHAR_BACKSLASH) {
	      push({ type: 'text', value: (options.keepEscaping ? value : '') + advance() });
	      continue;
	    }

	    /**
	     * Right square bracket (literal): ']'
	     */

	    if (value === CHAR_RIGHT_SQUARE_BRACKET) {
	      push({ type: 'text', value: '\\' + value });
	      continue;
	    }

	    /**
	     * Left square bracket: '['
	     */

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

	      push({ type: 'text', value });
	      continue;
	    }

	    /**
	     * Parentheses
	     */

	    if (value === CHAR_LEFT_PARENTHESES) {
	      block = push({ type: 'paren', nodes: [] });
	      stack.push(block);
	      push({ type: 'text', value });
	      continue;
	    }

	    if (value === CHAR_RIGHT_PARENTHESES) {
	      if (block.type !== 'paren') {
	        push({ type: 'text', value });
	        continue;
	      }
	      block = stack.pop();
	      push({ type: 'text', value });
	      block = stack[stack.length - 1];
	      continue;
	    }

	    /**
	     * Quotes: '|"|`
	     */

	    if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
	      const open = value;
	      let next;

	      if (options.keepQuotes !== true) {
	        value = '';
	      }

	      while (index < length && (next = advance())) {
	        if (next === CHAR_BACKSLASH) {
	          value += next + advance();
	          continue;
	        }

	        if (next === open) {
	          if (options.keepQuotes === true) value += next;
	          break;
	        }

	        value += next;
	      }

	      push({ type: 'text', value });
	      continue;
	    }

	    /**
	     * Left curly brace: '{'
	     */

	    if (value === CHAR_LEFT_CURLY_BRACE) {
	      depth++;

	      const dollar = prev.value && prev.value.slice(-1) === '$' || block.dollar === true;
	      const brace = {
	        type: 'brace',
	        open: true,
	        close: false,
	        dollar,
	        depth,
	        commas: 0,
	        ranges: 0,
	        nodes: []
	      };

	      block = push(brace);
	      stack.push(block);
	      push({ type: 'open', value });
	      continue;
	    }

	    /**
	     * Right curly brace: '}'
	     */

	    if (value === CHAR_RIGHT_CURLY_BRACE) {
	      if (block.type !== 'brace') {
	        push({ type: 'text', value });
	        continue;
	      }

	      const type = 'close';
	      block = stack.pop();
	      block.close = true;

	      push({ type, value });
	      depth--;

	      block = stack[stack.length - 1];
	      continue;
	    }

	    /**
	     * Comma: ','
	     */

	    if (value === CHAR_COMMA && depth > 0) {
	      if (block.ranges > 0) {
	        block.ranges = 0;
	        const open = block.nodes.shift();
	        block.nodes = [open, { type: 'text', value: stringify(block) }];
	      }

	      push({ type: 'comma', value });
	      block.commas++;
	      continue;
	    }

	    /**
	     * Dot: '.'
	     */

	    if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
	      const siblings = block.nodes;

	      if (depth === 0 || siblings.length === 0) {
	        push({ type: 'text', value });
	        continue;
	      }

	      if (prev.type === 'dot') {
	        block.range = [];
	        prev.value += value;
	        prev.type = 'range';

	        if (block.nodes.length !== 3 && block.nodes.length !== 5) {
	          block.invalid = true;
	          block.ranges = 0;
	          prev.type = 'text';
	          continue;
	        }

	        block.ranges++;
	        block.args = [];
	        continue;
	      }

	      if (prev.type === 'range') {
	        siblings.pop();

	        const before = siblings[siblings.length - 1];
	        before.value += prev.value + value;
	        prev = before;
	        block.ranges--;
	        continue;
	      }

	      push({ type: 'dot', value });
	      continue;
	    }

	    /**
	     * Text
	     */

	    push({ type: 'text', value });
	  }

	  // Mark imbalanced braces and brackets as invalid
	  do {
	    block = stack.pop();

	    if (block.type !== 'root') {
	      block.nodes.forEach(node => {
	        if (!node.nodes) {
	          if (node.type === 'open') node.isOpen = true;
	          if (node.type === 'close') node.isClose = true;
	          if (!node.nodes) node.type = 'text';
	          node.invalid = true;
	        }
	      });

	      // get the location of the block on parent.nodes (block's siblings)
	      const parent = stack[stack.length - 1];
	      const index = parent.nodes.indexOf(block);
	      // replace the (invalid) block with it's nodes
	      parent.nodes.splice(index, 1, ...block.nodes);
	    }
	  } while (stack.length > 0);

	  push({ type: 'eos' });
	  return ast;
	};

	parse_1 = parse;
	return parse_1;
}

var braces_1;
var hasRequiredBraces;

function requireBraces () {
	if (hasRequiredBraces) return braces_1;
	hasRequiredBraces = 1;

	const stringify = /*@__PURE__*/ requireStringify();
	const compile = /*@__PURE__*/ requireCompile();
	const expand = /*@__PURE__*/ requireExpand();
	const parse = /*@__PURE__*/ requireParse();

	/**
	 * Expand the given pattern or create a regex-compatible string.
	 *
	 * ```js
	 * const braces = require('braces');
	 * console.log(braces('{a,b,c}', { compile: true })); //=> ['(a|b|c)']
	 * console.log(braces('{a,b,c}')); //=> ['a', 'b', 'c']
	 * ```
	 * @param {String} `str`
	 * @param {Object} `options`
	 * @return {String}
	 * @api public
	 */

	const braces = (input, options = {}) => {
	  let output = [];

	  if (Array.isArray(input)) {
	    for (const pattern of input) {
	      const result = braces.create(pattern, options);
	      if (Array.isArray(result)) {
	        output.push(...result);
	      } else {
	        output.push(result);
	      }
	    }
	  } else {
	    output = [].concat(braces.create(input, options));
	  }

	  if (options && options.expand === true && options.nodupes === true) {
	    output = [...new Set(output)];
	  }
	  return output;
	};

	/**
	 * Parse the given `str` with the given `options`.
	 *
	 * ```js
	 * // braces.parse(pattern, [, options]);
	 * const ast = braces.parse('a/{b,c}/d');
	 * console.log(ast);
	 * ```
	 * @param {String} pattern Brace pattern to parse
	 * @param {Object} options
	 * @return {Object} Returns an AST
	 * @api public
	 */

	braces.parse = (input, options = {}) => parse(input, options);

	/**
	 * Creates a braces string from an AST, or an AST node.
	 *
	 * ```js
	 * const braces = require('braces');
	 * let ast = braces.parse('foo/{a,b}/bar');
	 * console.log(stringify(ast.nodes[2])); //=> '{a,b}'
	 * ```
	 * @param {String} `input` Brace pattern or AST.
	 * @param {Object} `options`
	 * @return {Array} Returns an array of expanded values.
	 * @api public
	 */

	braces.stringify = (input, options = {}) => {
	  if (typeof input === 'string') {
	    return stringify(braces.parse(input, options), options);
	  }
	  return stringify(input, options);
	};

	/**
	 * Compiles a brace pattern into a regex-compatible, optimized string.
	 * This method is called by the main [braces](#braces) function by default.
	 *
	 * ```js
	 * const braces = require('braces');
	 * console.log(braces.compile('a/{b,c}/d'));
	 * //=> ['a/(b|c)/d']
	 * ```
	 * @param {String} `input` Brace pattern or AST.
	 * @param {Object} `options`
	 * @return {Array} Returns an array of expanded values.
	 * @api public
	 */

	braces.compile = (input, options = {}) => {
	  if (typeof input === 'string') {
	    input = braces.parse(input, options);
	  }
	  return compile(input, options);
	};

	/**
	 * Expands a brace pattern into an array. This method is called by the
	 * main [braces](#braces) function when `options.expand` is true. Before
	 * using this method it's recommended that you read the [performance notes](#performance))
	 * and advantages of using [.compile](#compile) instead.
	 *
	 * ```js
	 * const braces = require('braces');
	 * console.log(braces.expand('a/{b,c}/d'));
	 * //=> ['a/b/d', 'a/c/d'];
	 * ```
	 * @param {String} `pattern` Brace pattern
	 * @param {Object} `options`
	 * @return {Array} Returns an array of expanded values.
	 * @api public
	 */

	braces.expand = (input, options = {}) => {
	  if (typeof input === 'string') {
	    input = braces.parse(input, options);
	  }

	  let result = expand(input, options);

	  // filter out empty strings if specified
	  if (options.noempty === true) {
	    result = result.filter(Boolean);
	  }

	  // filter out duplicates if specified
	  if (options.nodupes === true) {
	    result = [...new Set(result)];
	  }

	  return result;
	};

	/**
	 * Processes a brace pattern and returns either an expanded array
	 * (if `options.expand` is true), a highly optimized regex-compatible string.
	 * This method is called by the main [braces](#braces) function.
	 *
	 * ```js
	 * const braces = require('braces');
	 * console.log(braces.create('user-{200..300}/project-{a,b,c}-{1..10}'))
	 * //=> 'user-(20[0-9]|2[1-9][0-9]|300)/project-(a|b|c)-([1-9]|10)'
	 * ```
	 * @param {String} `pattern` Brace pattern
	 * @param {Object} `options`
	 * @return {Array} Returns an array of expanded values.
	 * @api public
	 */

	braces.create = (input, options = {}) => {
	  if (input === '' || input.length < 3) {
	    return [input];
	  }

	  return options.expand !== true
	    ? braces.compile(input, options)
	    : braces.expand(input, options);
	};

	/**
	 * Expose "braces"
	 */

	braces_1 = braces;
	return braces_1;
}

const require$$0 = [
	"3dm",
	"3ds",
	"3g2",
	"3gp",
	"7z",
	"a",
	"aac",
	"adp",
	"afdesign",
	"afphoto",
	"afpub",
	"ai",
	"aif",
	"aiff",
	"alz",
	"ape",
	"apk",
	"appimage",
	"ar",
	"arj",
	"asf",
	"au",
	"avi",
	"bak",
	"baml",
	"bh",
	"bin",
	"bk",
	"bmp",
	"btif",
	"bz2",
	"bzip2",
	"cab",
	"caf",
	"cgm",
	"class",
	"cmx",
	"cpio",
	"cr2",
	"cur",
	"dat",
	"dcm",
	"deb",
	"dex",
	"djvu",
	"dll",
	"dmg",
	"dng",
	"doc",
	"docm",
	"docx",
	"dot",
	"dotm",
	"dra",
	"DS_Store",
	"dsk",
	"dts",
	"dtshd",
	"dvb",
	"dwg",
	"dxf",
	"ecelp4800",
	"ecelp7470",
	"ecelp9600",
	"egg",
	"eol",
	"eot",
	"epub",
	"exe",
	"f4v",
	"fbs",
	"fh",
	"fla",
	"flac",
	"flatpak",
	"fli",
	"flv",
	"fpx",
	"fst",
	"fvt",
	"g3",
	"gh",
	"gif",
	"graffle",
	"gz",
	"gzip",
	"h261",
	"h263",
	"h264",
	"icns",
	"ico",
	"ief",
	"img",
	"ipa",
	"iso",
	"jar",
	"jpeg",
	"jpg",
	"jpgv",
	"jpm",
	"jxr",
	"key",
	"ktx",
	"lha",
	"lib",
	"lvp",
	"lz",
	"lzh",
	"lzma",
	"lzo",
	"m3u",
	"m4a",
	"m4v",
	"mar",
	"mdi",
	"mht",
	"mid",
	"midi",
	"mj2",
	"mka",
	"mkv",
	"mmr",
	"mng",
	"mobi",
	"mov",
	"movie",
	"mp3",
	"mp4",
	"mp4a",
	"mpeg",
	"mpg",
	"mpga",
	"mxu",
	"nef",
	"npx",
	"numbers",
	"nupkg",
	"o",
	"odp",
	"ods",
	"odt",
	"oga",
	"ogg",
	"ogv",
	"otf",
	"ott",
	"pages",
	"pbm",
	"pcx",
	"pdb",
	"pdf",
	"pea",
	"pgm",
	"pic",
	"png",
	"pnm",
	"pot",
	"potm",
	"potx",
	"ppa",
	"ppam",
	"ppm",
	"pps",
	"ppsm",
	"ppsx",
	"ppt",
	"pptm",
	"pptx",
	"psd",
	"pya",
	"pyc",
	"pyo",
	"pyv",
	"qt",
	"rar",
	"ras",
	"raw",
	"resources",
	"rgb",
	"rip",
	"rlc",
	"rmf",
	"rmvb",
	"rpm",
	"rtf",
	"rz",
	"s3m",
	"s7z",
	"scpt",
	"sgi",
	"shar",
	"snap",
	"sil",
	"sketch",
	"slk",
	"smv",
	"snk",
	"so",
	"stl",
	"suo",
	"sub",
	"swf",
	"tar",
	"tbz",
	"tbz2",
	"tga",
	"tgz",
	"thmx",
	"tif",
	"tiff",
	"tlz",
	"ttc",
	"ttf",
	"txz",
	"udf",
	"uvh",
	"uvi",
	"uvm",
	"uvp",
	"uvs",
	"uvu",
	"viv",
	"vob",
	"war",
	"wav",
	"wax",
	"wbmp",
	"wdp",
	"weba",
	"webm",
	"webp",
	"whl",
	"wim",
	"wm",
	"wma",
	"wmv",
	"wmx",
	"woff",
	"woff2",
	"wrm",
	"wvx",
	"xbm",
	"xif",
	"xla",
	"xlam",
	"xls",
	"xlsb",
	"xlsm",
	"xlsx",
	"xlt",
	"xltm",
	"xltx",
	"xm",
	"xmind",
	"xpi",
	"xpm",
	"xwd",
	"xz",
	"z",
	"zip",
	"zipx"
];

var binaryExtensions;
var hasRequiredBinaryExtensions;

function requireBinaryExtensions () {
	if (hasRequiredBinaryExtensions) return binaryExtensions;
	hasRequiredBinaryExtensions = 1;
	binaryExtensions = require$$0;
	return binaryExtensions;
}

var isBinaryPath;
var hasRequiredIsBinaryPath;

function requireIsBinaryPath () {
	if (hasRequiredIsBinaryPath) return isBinaryPath;
	hasRequiredIsBinaryPath = 1;
	const path = require$$0$1;
	const binaryExtensions = /*@__PURE__*/ requireBinaryExtensions();

	const extensions = new Set(binaryExtensions);

	isBinaryPath = filePath => extensions.has(path.extname(filePath).slice(1).toLowerCase());
	return isBinaryPath;
}

var constants = {};

var hasRequiredConstants;

function requireConstants () {
	if (hasRequiredConstants) return constants;
	hasRequiredConstants = 1;
	(function (exports$1) {

		const {sep} = require$$0$1;
		const {platform} = process;
		const os = require$$2$1;

		exports$1.EV_ALL = 'all';
		exports$1.EV_READY = 'ready';
		exports$1.EV_ADD = 'add';
		exports$1.EV_CHANGE = 'change';
		exports$1.EV_ADD_DIR = 'addDir';
		exports$1.EV_UNLINK = 'unlink';
		exports$1.EV_UNLINK_DIR = 'unlinkDir';
		exports$1.EV_RAW = 'raw';
		exports$1.EV_ERROR = 'error';

		exports$1.STR_DATA = 'data';
		exports$1.STR_END = 'end';
		exports$1.STR_CLOSE = 'close';

		exports$1.FSEVENT_CREATED = 'created';
		exports$1.FSEVENT_MODIFIED = 'modified';
		exports$1.FSEVENT_DELETED = 'deleted';
		exports$1.FSEVENT_MOVED = 'moved';
		exports$1.FSEVENT_CLONED = 'cloned';
		exports$1.FSEVENT_UNKNOWN = 'unknown';
		exports$1.FSEVENT_FLAG_MUST_SCAN_SUBDIRS = 1;
		exports$1.FSEVENT_TYPE_FILE = 'file';
		exports$1.FSEVENT_TYPE_DIRECTORY = 'directory';
		exports$1.FSEVENT_TYPE_SYMLINK = 'symlink';

		exports$1.KEY_LISTENERS = 'listeners';
		exports$1.KEY_ERR = 'errHandlers';
		exports$1.KEY_RAW = 'rawEmitters';
		exports$1.HANDLER_KEYS = [exports$1.KEY_LISTENERS, exports$1.KEY_ERR, exports$1.KEY_RAW];

		exports$1.DOT_SLASH = `.${sep}`;

		exports$1.BACK_SLASH_RE = /\\/g;
		exports$1.DOUBLE_SLASH_RE = /\/\//;
		exports$1.SLASH_OR_BACK_SLASH_RE = /[/\\]/;
		exports$1.DOT_RE = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/;
		exports$1.REPLACER_RE = /^\.[/\\]/;

		exports$1.SLASH = '/';
		exports$1.SLASH_SLASH = '//';
		exports$1.BRACE_START = '{';
		exports$1.BANG = '!';
		exports$1.ONE_DOT = '.';
		exports$1.TWO_DOTS = '..';
		exports$1.STAR = '*';
		exports$1.GLOBSTAR = '**';
		exports$1.ROOT_GLOBSTAR = '/**/*';
		exports$1.SLASH_GLOBSTAR = '/**';
		exports$1.DIR_SUFFIX = 'Dir';
		exports$1.ANYMATCH_OPTS = {dot: true};
		exports$1.STRING_TYPE = 'string';
		exports$1.FUNCTION_TYPE = 'function';
		exports$1.EMPTY_STR = '';
		exports$1.EMPTY_FN = () => {};
		exports$1.IDENTITY_FN = val => val;

		exports$1.isWindows = platform === 'win32';
		exports$1.isMacos = platform === 'darwin';
		exports$1.isLinux = platform === 'linux';
		exports$1.isIBMi = os.type() === 'OS400'; 
	} (constants));
	return constants;
}

var nodefsHandler;
var hasRequiredNodefsHandler;

function requireNodefsHandler () {
	if (hasRequiredNodefsHandler) return nodefsHandler;
	hasRequiredNodefsHandler = 1;

	const fs = require$$0$2;
	const sysPath = require$$0$1;
	const { promisify } = require$$2;
	const isBinaryPath = /*@__PURE__*/ requireIsBinaryPath();
	const {
	  isWindows,
	  isLinux,
	  EMPTY_FN,
	  EMPTY_STR,
	  KEY_LISTENERS,
	  KEY_ERR,
	  KEY_RAW,
	  HANDLER_KEYS,
	  EV_CHANGE,
	  EV_ADD,
	  EV_ADD_DIR,
	  EV_ERROR,
	  STR_DATA,
	  STR_END,
	  BRACE_START,
	  STAR
	} = /*@__PURE__*/ requireConstants();

	const THROTTLE_MODE_WATCH = 'watch';

	const open = promisify(fs.open);
	const stat = promisify(fs.stat);
	const lstat = promisify(fs.lstat);
	const close = promisify(fs.close);
	const fsrealpath = promisify(fs.realpath);

	const statMethods = { lstat, stat };

	// TODO: emit errors properly. Example: EMFILE on Macos.
	const foreach = (val, fn) => {
	  if (val instanceof Set) {
	    val.forEach(fn);
	  } else {
	    fn(val);
	  }
	};

	const addAndConvert = (main, prop, item) => {
	  let container = main[prop];
	  if (!(container instanceof Set)) {
	    main[prop] = container = new Set([container]);
	  }
	  container.add(item);
	};

	const clearItem = cont => key => {
	  const set = cont[key];
	  if (set instanceof Set) {
	    set.clear();
	  } else {
	    delete cont[key];
	  }
	};

	const delFromSet = (main, prop, item) => {
	  const container = main[prop];
	  if (container instanceof Set) {
	    container.delete(item);
	  } else if (container === item) {
	    delete main[prop];
	  }
	};

	const isEmptySet = (val) => val instanceof Set ? val.size === 0 : !val;

	/**
	 * @typedef {String} Path
	 */

	// fs_watch helpers

	// object to hold per-process fs_watch instances
	// (may be shared across chokidar FSWatcher instances)

	/**
	 * @typedef {Object} FsWatchContainer
	 * @property {Set} listeners
	 * @property {Set} errHandlers
	 * @property {Set} rawEmitters
	 * @property {fs.FSWatcher=} watcher
	 * @property {Boolean=} watcherUnusable
	 */

	/**
	 * @type {Map<String,FsWatchContainer>}
	 */
	const FsWatchInstances = new Map();

	/**
	 * Instantiates the fs_watch interface
	 * @param {String} path to be watched
	 * @param {Object} options to be passed to fs_watch
	 * @param {Function} listener main event handler
	 * @param {Function} errHandler emits info about errors
	 * @param {Function} emitRaw emits raw event data
	 * @returns {fs.FSWatcher} new fsevents instance
	 */
	function createFsWatchInstance(path, options, listener, errHandler, emitRaw) {
	  const handleEvent = (rawEvent, evPath) => {
	    listener(path);
	    emitRaw(rawEvent, evPath, {watchedPath: path});

	    // emit based on events occurring for files from a directory's watcher in
	    // case the file's watcher misses it (and rely on throttling to de-dupe)
	    if (evPath && path !== evPath) {
	      fsWatchBroadcast(
	        sysPath.resolve(path, evPath), KEY_LISTENERS, sysPath.join(path, evPath)
	      );
	    }
	  };
	  try {
	    return fs.watch(path, options, handleEvent);
	  } catch (error) {
	    errHandler(error);
	  }
	}

	/**
	 * Helper for passing fs_watch event data to a collection of listeners
	 * @param {Path} fullPath absolute path bound to fs_watch instance
	 * @param {String} type listener type
	 * @param {*=} val1 arguments to be passed to listeners
	 * @param {*=} val2
	 * @param {*=} val3
	 */
	const fsWatchBroadcast = (fullPath, type, val1, val2, val3) => {
	  const cont = FsWatchInstances.get(fullPath);
	  if (!cont) return;
	  foreach(cont[type], (listener) => {
	    listener(val1, val2, val3);
	  });
	};

	/**
	 * Instantiates the fs_watch interface or binds listeners
	 * to an existing one covering the same file system entry
	 * @param {String} path
	 * @param {String} fullPath absolute path
	 * @param {Object} options to be passed to fs_watch
	 * @param {Object} handlers container for event listener functions
	 */
	const setFsWatchListener = (path, fullPath, options, handlers) => {
	  const {listener, errHandler, rawEmitter} = handlers;
	  let cont = FsWatchInstances.get(fullPath);

	  /** @type {fs.FSWatcher=} */
	  let watcher;
	  if (!options.persistent) {
	    watcher = createFsWatchInstance(
	      path, options, listener, errHandler, rawEmitter
	    );
	    return watcher.close.bind(watcher);
	  }
	  if (cont) {
	    addAndConvert(cont, KEY_LISTENERS, listener);
	    addAndConvert(cont, KEY_ERR, errHandler);
	    addAndConvert(cont, KEY_RAW, rawEmitter);
	  } else {
	    watcher = createFsWatchInstance(
	      path,
	      options,
	      fsWatchBroadcast.bind(null, fullPath, KEY_LISTENERS),
	      errHandler, // no need to use broadcast here
	      fsWatchBroadcast.bind(null, fullPath, KEY_RAW)
	    );
	    if (!watcher) return;
	    watcher.on(EV_ERROR, async (error) => {
	      const broadcastErr = fsWatchBroadcast.bind(null, fullPath, KEY_ERR);
	      cont.watcherUnusable = true; // documented since Node 10.4.1
	      // Workaround for https://github.com/joyent/node/issues/4337
	      if (isWindows && error.code === 'EPERM') {
	        try {
	          const fd = await open(path, 'r');
	          await close(fd);
	          broadcastErr(error);
	        } catch (err) {}
	      } else {
	        broadcastErr(error);
	      }
	    });
	    cont = {
	      listeners: listener,
	      errHandlers: errHandler,
	      rawEmitters: rawEmitter,
	      watcher
	    };
	    FsWatchInstances.set(fullPath, cont);
	  }
	  // const index = cont.listeners.indexOf(listener);

	  // removes this instance's listeners and closes the underlying fs_watch
	  // instance if there are no more listeners left
	  return () => {
	    delFromSet(cont, KEY_LISTENERS, listener);
	    delFromSet(cont, KEY_ERR, errHandler);
	    delFromSet(cont, KEY_RAW, rawEmitter);
	    if (isEmptySet(cont.listeners)) {
	      // Check to protect against issue gh-730.
	      // if (cont.watcherUnusable) {
	      cont.watcher.close();
	      // }
	      FsWatchInstances.delete(fullPath);
	      HANDLER_KEYS.forEach(clearItem(cont));
	      cont.watcher = undefined;
	      Object.freeze(cont);
	    }
	  };
	};

	// fs_watchFile helpers

	// object to hold per-process fs_watchFile instances
	// (may be shared across chokidar FSWatcher instances)
	const FsWatchFileInstances = new Map();

	/**
	 * Instantiates the fs_watchFile interface or binds listeners
	 * to an existing one covering the same file system entry
	 * @param {String} path to be watched
	 * @param {String} fullPath absolute path
	 * @param {Object} options options to be passed to fs_watchFile
	 * @param {Object} handlers container for event listener functions
	 * @returns {Function} closer
	 */
	const setFsWatchFileListener = (path, fullPath, options, handlers) => {
	  const {listener, rawEmitter} = handlers;
	  let cont = FsWatchFileInstances.get(fullPath);

	  const copts = cont && cont.options;
	  if (copts && (copts.persistent < options.persistent || copts.interval > options.interval)) {
	    fs.unwatchFile(fullPath);
	    cont = undefined;
	  }

	  /* eslint-enable no-unused-vars, prefer-destructuring */

	  if (cont) {
	    addAndConvert(cont, KEY_LISTENERS, listener);
	    addAndConvert(cont, KEY_RAW, rawEmitter);
	  } else {
	    // TODO
	    // listeners.add(listener);
	    // rawEmitters.add(rawEmitter);
	    cont = {
	      listeners: listener,
	      rawEmitters: rawEmitter,
	      options,
	      watcher: fs.watchFile(fullPath, options, (curr, prev) => {
	        foreach(cont.rawEmitters, (rawEmitter) => {
	          rawEmitter(EV_CHANGE, fullPath, {curr, prev});
	        });
	        const currmtime = curr.mtimeMs;
	        if (curr.size !== prev.size || currmtime > prev.mtimeMs || currmtime === 0) {
	          foreach(cont.listeners, (listener) => listener(path, curr));
	        }
	      })
	    };
	    FsWatchFileInstances.set(fullPath, cont);
	  }
	  // const index = cont.listeners.indexOf(listener);

	  // Removes this instance's listeners and closes the underlying fs_watchFile
	  // instance if there are no more listeners left.
	  return () => {
	    delFromSet(cont, KEY_LISTENERS, listener);
	    delFromSet(cont, KEY_RAW, rawEmitter);
	    if (isEmptySet(cont.listeners)) {
	      FsWatchFileInstances.delete(fullPath);
	      fs.unwatchFile(fullPath);
	      cont.options = cont.watcher = undefined;
	      Object.freeze(cont);
	    }
	  };
	};

	/**
	 * @mixin
	 */
	class NodeFsHandler {

	/**
	 * @param {import("../index").FSWatcher} fsW
	 */
	constructor(fsW) {
	  this.fsw = fsW;
	  this._boundHandleError = (error) => fsW._handleError(error);
	}

	/**
	 * Watch file for changes with fs_watchFile or fs_watch.
	 * @param {String} path to file or dir
	 * @param {Function} listener on fs change
	 * @returns {Function} closer for the watcher instance
	 */
	_watchWithNodeFs(path, listener) {
	  const opts = this.fsw.options;
	  const directory = sysPath.dirname(path);
	  const basename = sysPath.basename(path);
	  const parent = this.fsw._getWatchedDir(directory);
	  parent.add(basename);
	  const absolutePath = sysPath.resolve(path);
	  const options = {persistent: opts.persistent};
	  if (!listener) listener = EMPTY_FN;

	  let closer;
	  if (opts.usePolling) {
	    options.interval = opts.enableBinaryInterval && isBinaryPath(basename) ?
	      opts.binaryInterval : opts.interval;
	    closer = setFsWatchFileListener(path, absolutePath, options, {
	      listener,
	      rawEmitter: this.fsw._emitRaw
	    });
	  } else {
	    closer = setFsWatchListener(path, absolutePath, options, {
	      listener,
	      errHandler: this._boundHandleError,
	      rawEmitter: this.fsw._emitRaw
	    });
	  }
	  return closer;
	}

	/**
	 * Watch a file and emit add event if warranted.
	 * @param {Path} file Path
	 * @param {fs.Stats} stats result of fs_stat
	 * @param {Boolean} initialAdd was the file added at watch instantiation?
	 * @returns {Function} closer for the watcher instance
	 */
	_handleFile(file, stats, initialAdd) {
	  if (this.fsw.closed) {
	    return;
	  }
	  const dirname = sysPath.dirname(file);
	  const basename = sysPath.basename(file);
	  const parent = this.fsw._getWatchedDir(dirname);
	  // stats is always present
	  let prevStats = stats;

	  // if the file is already being watched, do nothing
	  if (parent.has(basename)) return;

	  const listener = async (path, newStats) => {
	    if (!this.fsw._throttle(THROTTLE_MODE_WATCH, file, 5)) return;
	    if (!newStats || newStats.mtimeMs === 0) {
	      try {
	        const newStats = await stat(file);
	        if (this.fsw.closed) return;
	        // Check that change event was not fired because of changed only accessTime.
	        const at = newStats.atimeMs;
	        const mt = newStats.mtimeMs;
	        if (!at || at <= mt || mt !== prevStats.mtimeMs) {
	          this.fsw._emit(EV_CHANGE, file, newStats);
	        }
	        if (isLinux && prevStats.ino !== newStats.ino) {
	          this.fsw._closeFile(path);
	          prevStats = newStats;
	          this.fsw._addPathCloser(path, this._watchWithNodeFs(file, listener));
	        } else {
	          prevStats = newStats;
	        }
	      } catch (error) {
	        // Fix issues where mtime is null but file is still present
	        this.fsw._remove(dirname, basename);
	      }
	      // add is about to be emitted if file not already tracked in parent
	    } else if (parent.has(basename)) {
	      // Check that change event was not fired because of changed only accessTime.
	      const at = newStats.atimeMs;
	      const mt = newStats.mtimeMs;
	      if (!at || at <= mt || mt !== prevStats.mtimeMs) {
	        this.fsw._emit(EV_CHANGE, file, newStats);
	      }
	      prevStats = newStats;
	    }
	  };
	  // kick off the watcher
	  const closer = this._watchWithNodeFs(file, listener);

	  // emit an add event if we're supposed to
	  if (!(initialAdd && this.fsw.options.ignoreInitial) && this.fsw._isntIgnored(file)) {
	    if (!this.fsw._throttle(EV_ADD, file, 0)) return;
	    this.fsw._emit(EV_ADD, file, stats);
	  }

	  return closer;
	}

	/**
	 * Handle symlinks encountered while reading a dir.
	 * @param {Object} entry returned by readdirp
	 * @param {String} directory path of dir being read
	 * @param {String} path of this item
	 * @param {String} item basename of this item
	 * @returns {Promise<Boolean>} true if no more processing is needed for this entry.
	 */
	async _handleSymlink(entry, directory, path, item) {
	  if (this.fsw.closed) {
	    return;
	  }
	  const full = entry.fullPath;
	  const dir = this.fsw._getWatchedDir(directory);

	  if (!this.fsw.options.followSymlinks) {
	    // watch symlink directly (don't follow) and detect changes
	    this.fsw._incrReadyCount();

	    let linkPath;
	    try {
	      linkPath = await fsrealpath(path);
	    } catch (e) {
	      this.fsw._emitReady();
	      return true;
	    }

	    if (this.fsw.closed) return;
	    if (dir.has(item)) {
	      if (this.fsw._symlinkPaths.get(full) !== linkPath) {
	        this.fsw._symlinkPaths.set(full, linkPath);
	        this.fsw._emit(EV_CHANGE, path, entry.stats);
	      }
	    } else {
	      dir.add(item);
	      this.fsw._symlinkPaths.set(full, linkPath);
	      this.fsw._emit(EV_ADD, path, entry.stats);
	    }
	    this.fsw._emitReady();
	    return true;
	  }

	  // don't follow the same symlink more than once
	  if (this.fsw._symlinkPaths.has(full)) {
	    return true;
	  }

	  this.fsw._symlinkPaths.set(full, true);
	}

	_handleRead(directory, initialAdd, wh, target, dir, depth, throttler) {
	  // Normalize the directory name on Windows
	  directory = sysPath.join(directory, EMPTY_STR);

	  if (!wh.hasGlob) {
	    throttler = this.fsw._throttle('readdir', directory, 1000);
	    if (!throttler) return;
	  }

	  const previous = this.fsw._getWatchedDir(wh.path);
	  const current = new Set();

	  let stream = this.fsw._readdirp(directory, {
	    fileFilter: entry => wh.filterPath(entry),
	    directoryFilter: entry => wh.filterDir(entry),
	    depth: 0
	  }).on(STR_DATA, async (entry) => {
	    if (this.fsw.closed) {
	      stream = undefined;
	      return;
	    }
	    const item = entry.path;
	    let path = sysPath.join(directory, item);
	    current.add(item);

	    if (entry.stats.isSymbolicLink() && await this._handleSymlink(entry, directory, path, item)) {
	      return;
	    }

	    if (this.fsw.closed) {
	      stream = undefined;
	      return;
	    }
	    // Files that present in current directory snapshot
	    // but absent in previous are added to watch list and
	    // emit `add` event.
	    if (item === target || !target && !previous.has(item)) {
	      this.fsw._incrReadyCount();

	      // ensure relativeness of path is preserved in case of watcher reuse
	      path = sysPath.join(dir, sysPath.relative(dir, path));

	      this._addToNodeFs(path, initialAdd, wh, depth + 1);
	    }
	  }).on(EV_ERROR, this._boundHandleError);

	  return new Promise(resolve =>
	    stream.once(STR_END, () => {
	      if (this.fsw.closed) {
	        stream = undefined;
	        return;
	      }
	      const wasThrottled = throttler ? throttler.clear() : false;

	      resolve();

	      // Files that absent in current directory snapshot
	      // but present in previous emit `remove` event
	      // and are removed from @watched[directory].
	      previous.getChildren().filter((item) => {
	        return item !== directory &&
	          !current.has(item) &&
	          // in case of intersecting globs;
	          // a path may have been filtered out of this readdir, but
	          // shouldn't be removed because it matches a different glob
	          (!wh.hasGlob || wh.filterPath({
	            fullPath: sysPath.resolve(directory, item)
	          }));
	      }).forEach((item) => {
	        this.fsw._remove(directory, item);
	      });

	      stream = undefined;

	      // one more time for any missed in case changes came in extremely quickly
	      if (wasThrottled) this._handleRead(directory, false, wh, target, dir, depth, throttler);
	    })
	  );
	}

	/**
	 * Read directory to add / remove files from `@watched` list and re-read it on change.
	 * @param {String} dir fs path
	 * @param {fs.Stats} stats
	 * @param {Boolean} initialAdd
	 * @param {Number} depth relative to user-supplied path
	 * @param {String} target child path targeted for watch
	 * @param {Object} wh Common watch helpers for this path
	 * @param {String} realpath
	 * @returns {Promise<Function>} closer for the watcher instance.
	 */
	async _handleDir(dir, stats, initialAdd, depth, target, wh, realpath) {
	  const parentDir = this.fsw._getWatchedDir(sysPath.dirname(dir));
	  const tracked = parentDir.has(sysPath.basename(dir));
	  if (!(initialAdd && this.fsw.options.ignoreInitial) && !target && !tracked) {
	    if (!wh.hasGlob || wh.globFilter(dir)) this.fsw._emit(EV_ADD_DIR, dir, stats);
	  }

	  // ensure dir is tracked (harmless if redundant)
	  parentDir.add(sysPath.basename(dir));
	  this.fsw._getWatchedDir(dir);
	  let throttler;
	  let closer;

	  const oDepth = this.fsw.options.depth;
	  if ((oDepth == null || depth <= oDepth) && !this.fsw._symlinkPaths.has(realpath)) {
	    if (!target) {
	      await this._handleRead(dir, initialAdd, wh, target, dir, depth, throttler);
	      if (this.fsw.closed) return;
	    }

	    closer = this._watchWithNodeFs(dir, (dirPath, stats) => {
	      // if current directory is removed, do nothing
	      if (stats && stats.mtimeMs === 0) return;

	      this._handleRead(dirPath, false, wh, target, dir, depth, throttler);
	    });
	  }
	  return closer;
	}

	/**
	 * Handle added file, directory, or glob pattern.
	 * Delegates call to _handleFile / _handleDir after checks.
	 * @param {String} path to file or ir
	 * @param {Boolean} initialAdd was the file added at watch instantiation?
	 * @param {Object} priorWh depth relative to user-supplied path
	 * @param {Number} depth Child path actually targeted for watch
	 * @param {String=} target Child path actually targeted for watch
	 * @returns {Promise}
	 */
	async _addToNodeFs(path, initialAdd, priorWh, depth, target) {
	  const ready = this.fsw._emitReady;
	  if (this.fsw._isIgnored(path) || this.fsw.closed) {
	    ready();
	    return false;
	  }

	  const wh = this.fsw._getWatchHelpers(path, depth);
	  if (!wh.hasGlob && priorWh) {
	    wh.hasGlob = priorWh.hasGlob;
	    wh.globFilter = priorWh.globFilter;
	    wh.filterPath = entry => priorWh.filterPath(entry);
	    wh.filterDir = entry => priorWh.filterDir(entry);
	  }

	  // evaluate what is at the path we're being asked to watch
	  try {
	    const stats = await statMethods[wh.statMethod](wh.watchPath);
	    if (this.fsw.closed) return;
	    if (this.fsw._isIgnored(wh.watchPath, stats)) {
	      ready();
	      return false;
	    }

	    const follow = this.fsw.options.followSymlinks && !path.includes(STAR) && !path.includes(BRACE_START);
	    let closer;
	    if (stats.isDirectory()) {
	      const absPath = sysPath.resolve(path);
	      const targetPath = follow ? await fsrealpath(path) : path;
	      if (this.fsw.closed) return;
	      closer = await this._handleDir(wh.watchPath, stats, initialAdd, depth, target, wh, targetPath);
	      if (this.fsw.closed) return;
	      // preserve this symlink's target path
	      if (absPath !== targetPath && targetPath !== undefined) {
	        this.fsw._symlinkPaths.set(absPath, targetPath);
	      }
	    } else if (stats.isSymbolicLink()) {
	      const targetPath = follow ? await fsrealpath(path) : path;
	      if (this.fsw.closed) return;
	      const parent = sysPath.dirname(wh.watchPath);
	      this.fsw._getWatchedDir(parent).add(wh.watchPath);
	      this.fsw._emit(EV_ADD, wh.watchPath, stats);
	      closer = await this._handleDir(parent, stats, initialAdd, depth, path, wh, targetPath);
	      if (this.fsw.closed) return;

	      // preserve this symlink's target path
	      if (targetPath !== undefined) {
	        this.fsw._symlinkPaths.set(sysPath.resolve(path), targetPath);
	      }
	    } else {
	      closer = this._handleFile(wh.watchPath, stats, initialAdd);
	    }
	    ready();

	    this.fsw._addPathCloser(path, closer);
	    return false;

	  } catch (error) {
	    if (this.fsw._handleError(error)) {
	      ready();
	      return path;
	    }
	  }
	}

	}

	nodefsHandler = NodeFsHandler;
	return nodefsHandler;
}

var fseventsHandler = {exports: {}};

const require$$3 = /*@__PURE__*/getAugmentedNamespace(fseventsImporter);

var hasRequiredFseventsHandler;

function requireFseventsHandler () {
	if (hasRequiredFseventsHandler) return fseventsHandler.exports;
	hasRequiredFseventsHandler = 1;

	const fs = require$$0$2;
	const sysPath = require$$0$1;
	const { promisify } = require$$2;

	let fsevents;
	try {
	  fsevents = require$$3.getFsEvents();
	} catch (error) {
	  if (process.env.CHOKIDAR_PRINT_FSEVENTS_REQUIRE_ERROR) console.error(error);
	}

	if (fsevents) {
	  // TODO: real check
	  const mtch = process.version.match(/v(\d+)\.(\d+)/);
	  if (mtch && mtch[1] && mtch[2]) {
	    const maj = Number.parseInt(mtch[1], 10);
	    const min = Number.parseInt(mtch[2], 10);
	    if (maj === 8 && min < 16) {
	      fsevents = undefined;
	    }
	  }
	}

	const {
	  EV_ADD,
	  EV_CHANGE,
	  EV_ADD_DIR,
	  EV_UNLINK,
	  EV_ERROR,
	  STR_DATA,
	  STR_END,
	  FSEVENT_CREATED,
	  FSEVENT_MODIFIED,
	  FSEVENT_DELETED,
	  FSEVENT_MOVED,
	  // FSEVENT_CLONED,
	  FSEVENT_UNKNOWN,
	  FSEVENT_FLAG_MUST_SCAN_SUBDIRS,
	  FSEVENT_TYPE_FILE,
	  FSEVENT_TYPE_DIRECTORY,
	  FSEVENT_TYPE_SYMLINK,

	  ROOT_GLOBSTAR,
	  DIR_SUFFIX,
	  DOT_SLASH,
	  FUNCTION_TYPE,
	  EMPTY_FN,
	  IDENTITY_FN
	} = /*@__PURE__*/ requireConstants();

	const Depth = (value) => isNaN(value) ? {} : {depth: value};

	const stat = promisify(fs.stat);
	const lstat = promisify(fs.lstat);
	const realpath = promisify(fs.realpath);

	const statMethods = { stat, lstat };

	/**
	 * @typedef {String} Path
	 */

	/**
	 * @typedef {Object} FsEventsWatchContainer
	 * @property {Set<Function>} listeners
	 * @property {Function} rawEmitter
	 * @property {{stop: Function}} watcher
	 */

	// fsevents instance helper functions
	/**
	 * Object to hold per-process fsevents instances (may be shared across chokidar FSWatcher instances)
	 * @type {Map<Path,FsEventsWatchContainer>}
	 */
	const FSEventsWatchers = new Map();

	// Threshold of duplicate path prefixes at which to start
	// consolidating going forward
	const consolidateThreshhold = 10;

	const wrongEventFlags = new Set([
	  69888, 70400, 71424, 72704, 73472, 131328, 131840, 262912
	]);

	/**
	 * Instantiates the fsevents interface
	 * @param {Path} path path to be watched
	 * @param {Function} callback called when fsevents is bound and ready
	 * @returns {{stop: Function}} new fsevents instance
	 */
	const createFSEventsInstance = (path, callback) => {
	  const stop = fsevents.watch(path, callback);
	  return {stop};
	};

	/**
	 * Instantiates the fsevents interface or binds listeners to an existing one covering
	 * the same file tree.
	 * @param {Path} path           - to be watched
	 * @param {Path} realPath       - real path for symlinks
	 * @param {Function} listener   - called when fsevents emits events
	 * @param {Function} rawEmitter - passes data to listeners of the 'raw' event
	 * @returns {Function} closer
	 */
	function setFSEventsListener(path, realPath, listener, rawEmitter) {
	  let watchPath = sysPath.extname(realPath) ? sysPath.dirname(realPath) : realPath;

	  const parentPath = sysPath.dirname(watchPath);
	  let cont = FSEventsWatchers.get(watchPath);

	  // If we've accumulated a substantial number of paths that
	  // could have been consolidated by watching one directory
	  // above the current one, create a watcher on the parent
	  // path instead, so that we do consolidate going forward.
	  if (couldConsolidate(parentPath)) {
	    watchPath = parentPath;
	  }

	  const resolvedPath = sysPath.resolve(path);
	  const hasSymlink = resolvedPath !== realPath;

	  const filteredListener = (fullPath, flags, info) => {
	    if (hasSymlink) fullPath = fullPath.replace(realPath, resolvedPath);
	    if (
	      fullPath === resolvedPath ||
	      !fullPath.indexOf(resolvedPath + sysPath.sep)
	    ) listener(fullPath, flags, info);
	  };

	  // check if there is already a watcher on a parent path
	  // modifies `watchPath` to the parent path when it finds a match
	  let watchedParent = false;
	  for (const watchedPath of FSEventsWatchers.keys()) {
	    if (realPath.indexOf(sysPath.resolve(watchedPath) + sysPath.sep) === 0) {
	      watchPath = watchedPath;
	      cont = FSEventsWatchers.get(watchPath);
	      watchedParent = true;
	      break;
	    }
	  }

	  if (cont || watchedParent) {
	    cont.listeners.add(filteredListener);
	  } else {
	    cont = {
	      listeners: new Set([filteredListener]),
	      rawEmitter,
	      watcher: createFSEventsInstance(watchPath, (fullPath, flags) => {
	        if (!cont.listeners.size) return;
	        if (flags & FSEVENT_FLAG_MUST_SCAN_SUBDIRS) return;
	        const info = fsevents.getInfo(fullPath, flags);
	        cont.listeners.forEach(list => {
	          list(fullPath, flags, info);
	        });

	        cont.rawEmitter(info.event, fullPath, info);
	      })
	    };
	    FSEventsWatchers.set(watchPath, cont);
	  }

	  // removes this instance's listeners and closes the underlying fsevents
	  // instance if there are no more listeners left
	  return () => {
	    const lst = cont.listeners;

	    lst.delete(filteredListener);
	    if (!lst.size) {
	      FSEventsWatchers.delete(watchPath);
	      if (cont.watcher) return cont.watcher.stop().then(() => {
	        cont.rawEmitter = cont.watcher = undefined;
	        Object.freeze(cont);
	      });
	    }
	  };
	}

	// Decide whether or not we should start a new higher-level
	// parent watcher
	const couldConsolidate = (path) => {
	  let count = 0;
	  for (const watchPath of FSEventsWatchers.keys()) {
	    if (watchPath.indexOf(path) === 0) {
	      count++;
	      if (count >= consolidateThreshhold) {
	        return true;
	      }
	    }
	  }

	  return false;
	};

	// returns boolean indicating whether fsevents can be used
	const canUse = () => fsevents && FSEventsWatchers.size < 128;

	// determines subdirectory traversal levels from root to path
	const calcDepth = (path, root) => {
	  let i = 0;
	  while (!path.indexOf(root) && (path = sysPath.dirname(path)) !== root) i++;
	  return i;
	};

	// returns boolean indicating whether the fsevents' event info has the same type
	// as the one returned by fs.stat
	const sameTypes = (info, stats) => (
	  info.type === FSEVENT_TYPE_DIRECTORY && stats.isDirectory() ||
	  info.type === FSEVENT_TYPE_SYMLINK && stats.isSymbolicLink() ||
	  info.type === FSEVENT_TYPE_FILE && stats.isFile()
	);

	/**
	 * @mixin
	 */
	class FsEventsHandler {

	/**
	 * @param {import('../index').FSWatcher} fsw
	 */
	constructor(fsw) {
	  this.fsw = fsw;
	}
	checkIgnored(path, stats) {
	  const ipaths = this.fsw._ignoredPaths;
	  if (this.fsw._isIgnored(path, stats)) {
	    ipaths.add(path);
	    if (stats && stats.isDirectory()) {
	      ipaths.add(path + ROOT_GLOBSTAR);
	    }
	    return true;
	  }

	  ipaths.delete(path);
	  ipaths.delete(path + ROOT_GLOBSTAR);
	}

	addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts) {
	  const event = watchedDir.has(item) ? EV_CHANGE : EV_ADD;
	  this.handleEvent(event, path, fullPath, realPath, parent, watchedDir, item, info, opts);
	}

	async checkExists(path, fullPath, realPath, parent, watchedDir, item, info, opts) {
	  try {
	    const stats = await stat(path);
	    if (this.fsw.closed) return;
	    if (sameTypes(info, stats)) {
	      this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts);
	    } else {
	      this.handleEvent(EV_UNLINK, path, fullPath, realPath, parent, watchedDir, item, info, opts);
	    }
	  } catch (error) {
	    if (error.code === 'EACCES') {
	      this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts);
	    } else {
	      this.handleEvent(EV_UNLINK, path, fullPath, realPath, parent, watchedDir, item, info, opts);
	    }
	  }
	}

	handleEvent(event, path, fullPath, realPath, parent, watchedDir, item, info, opts) {
	  if (this.fsw.closed || this.checkIgnored(path)) return;

	  if (event === EV_UNLINK) {
	    const isDirectory = info.type === FSEVENT_TYPE_DIRECTORY;
	    // suppress unlink events on never before seen files
	    if (isDirectory || watchedDir.has(item)) {
	      this.fsw._remove(parent, item, isDirectory);
	    }
	  } else {
	    if (event === EV_ADD) {
	      // track new directories
	      if (info.type === FSEVENT_TYPE_DIRECTORY) this.fsw._getWatchedDir(path);

	      if (info.type === FSEVENT_TYPE_SYMLINK && opts.followSymlinks) {
	        // push symlinks back to the top of the stack to get handled
	        const curDepth = opts.depth === undefined ?
	          undefined : calcDepth(fullPath, realPath) + 1;
	        return this._addToFsEvents(path, false, true, curDepth);
	      }

	      // track new paths
	      // (other than symlinks being followed, which will be tracked soon)
	      this.fsw._getWatchedDir(parent).add(item);
	    }
	    /**
	     * @type {'add'|'addDir'|'unlink'|'unlinkDir'}
	     */
	    const eventName = info.type === FSEVENT_TYPE_DIRECTORY ? event + DIR_SUFFIX : event;
	    this.fsw._emit(eventName, path);
	    if (eventName === EV_ADD_DIR) this._addToFsEvents(path, false, true);
	  }
	}

	/**
	 * Handle symlinks encountered during directory scan
	 * @param {String} watchPath  - file/dir path to be watched with fsevents
	 * @param {String} realPath   - real path (in case of symlinks)
	 * @param {Function} transform  - path transformer
	 * @param {Function} globFilter - path filter in case a glob pattern was provided
	 * @returns {Function} closer for the watcher instance
	*/
	_watchWithFsEvents(watchPath, realPath, transform, globFilter) {
	  if (this.fsw.closed || this.fsw._isIgnored(watchPath)) return;
	  const opts = this.fsw.options;
	  const watchCallback = async (fullPath, flags, info) => {
	    if (this.fsw.closed) return;
	    if (
	      opts.depth !== undefined &&
	      calcDepth(fullPath, realPath) > opts.depth
	    ) return;
	    const path = transform(sysPath.join(
	      watchPath, sysPath.relative(watchPath, fullPath)
	    ));
	    if (globFilter && !globFilter(path)) return;
	    // ensure directories are tracked
	    const parent = sysPath.dirname(path);
	    const item = sysPath.basename(path);
	    const watchedDir = this.fsw._getWatchedDir(
	      info.type === FSEVENT_TYPE_DIRECTORY ? path : parent
	    );

	    // correct for wrong events emitted
	    if (wrongEventFlags.has(flags) || info.event === FSEVENT_UNKNOWN) {
	      if (typeof opts.ignored === FUNCTION_TYPE) {
	        let stats;
	        try {
	          stats = await stat(path);
	        } catch (error) {}
	        if (this.fsw.closed) return;
	        if (this.checkIgnored(path, stats)) return;
	        if (sameTypes(info, stats)) {
	          this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts);
	        } else {
	          this.handleEvent(EV_UNLINK, path, fullPath, realPath, parent, watchedDir, item, info, opts);
	        }
	      } else {
	        this.checkExists(path, fullPath, realPath, parent, watchedDir, item, info, opts);
	      }
	    } else {
	      switch (info.event) {
	      case FSEVENT_CREATED:
	      case FSEVENT_MODIFIED:
	        return this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts);
	      case FSEVENT_DELETED:
	      case FSEVENT_MOVED:
	        return this.checkExists(path, fullPath, realPath, parent, watchedDir, item, info, opts);
	      }
	    }
	  };

	  const closer = setFSEventsListener(
	    watchPath,
	    realPath,
	    watchCallback,
	    this.fsw._emitRaw
	  );

	  this.fsw._emitReady();
	  return closer;
	}

	/**
	 * Handle symlinks encountered during directory scan
	 * @param {String} linkPath path to symlink
	 * @param {String} fullPath absolute path to the symlink
	 * @param {Function} transform pre-existing path transformer
	 * @param {Number} curDepth level of subdirectories traversed to where symlink is
	 * @returns {Promise<void>}
	 */
	async _handleFsEventsSymlink(linkPath, fullPath, transform, curDepth) {
	  // don't follow the same symlink more than once
	  if (this.fsw.closed || this.fsw._symlinkPaths.has(fullPath)) return;

	  this.fsw._symlinkPaths.set(fullPath, true);
	  this.fsw._incrReadyCount();

	  try {
	    const linkTarget = await realpath(linkPath);
	    if (this.fsw.closed) return;
	    if (this.fsw._isIgnored(linkTarget)) {
	      return this.fsw._emitReady();
	    }

	    this.fsw._incrReadyCount();

	    // add the linkTarget for watching with a wrapper for transform
	    // that causes emitted paths to incorporate the link's path
	    this._addToFsEvents(linkTarget || linkPath, (path) => {
	      let aliasedPath = linkPath;
	      if (linkTarget && linkTarget !== DOT_SLASH) {
	        aliasedPath = path.replace(linkTarget, linkPath);
	      } else if (path !== DOT_SLASH) {
	        aliasedPath = sysPath.join(linkPath, path);
	      }
	      return transform(aliasedPath);
	    }, false, curDepth);
	  } catch(error) {
	    if (this.fsw._handleError(error)) {
	      return this.fsw._emitReady();
	    }
	  }
	}

	/**
	 *
	 * @param {Path} newPath
	 * @param {fs.Stats} stats
	 */
	emitAdd(newPath, stats, processPath, opts, forceAdd) {
	  const pp = processPath(newPath);
	  const isDir = stats.isDirectory();
	  const dirObj = this.fsw._getWatchedDir(sysPath.dirname(pp));
	  const base = sysPath.basename(pp);

	  // ensure empty dirs get tracked
	  if (isDir) this.fsw._getWatchedDir(pp);
	  if (dirObj.has(base)) return;
	  dirObj.add(base);

	  if (!opts.ignoreInitial || forceAdd === true) {
	    this.fsw._emit(isDir ? EV_ADD_DIR : EV_ADD, pp, stats);
	  }
	}

	initWatch(realPath, path, wh, processPath) {
	  if (this.fsw.closed) return;
	  const closer = this._watchWithFsEvents(
	    wh.watchPath,
	    sysPath.resolve(realPath || wh.watchPath),
	    processPath,
	    wh.globFilter
	  );
	  this.fsw._addPathCloser(path, closer);
	}

	/**
	 * Handle added path with fsevents
	 * @param {String} path file/dir path or glob pattern
	 * @param {Function|Boolean=} transform converts working path to what the user expects
	 * @param {Boolean=} forceAdd ensure add is emitted
	 * @param {Number=} priorDepth Level of subdirectories already traversed.
	 * @returns {Promise<void>}
	 */
	async _addToFsEvents(path, transform, forceAdd, priorDepth) {
	  if (this.fsw.closed) {
	    return;
	  }
	  const opts = this.fsw.options;
	  const processPath = typeof transform === FUNCTION_TYPE ? transform : IDENTITY_FN;

	  const wh = this.fsw._getWatchHelpers(path);

	  // evaluate what is at the path we're being asked to watch
	  try {
	    const stats = await statMethods[wh.statMethod](wh.watchPath);
	    if (this.fsw.closed) return;
	    if (this.fsw._isIgnored(wh.watchPath, stats)) {
	      throw null;
	    }
	    if (stats.isDirectory()) {
	      // emit addDir unless this is a glob parent
	      if (!wh.globFilter) this.emitAdd(processPath(path), stats, processPath, opts, forceAdd);

	      // don't recurse further if it would exceed depth setting
	      if (priorDepth && priorDepth > opts.depth) return;

	      // scan the contents of the dir
	      this.fsw._readdirp(wh.watchPath, {
	        fileFilter: entry => wh.filterPath(entry),
	        directoryFilter: entry => wh.filterDir(entry),
	        ...Depth(opts.depth - (priorDepth || 0))
	      }).on(STR_DATA, (entry) => {
	        // need to check filterPath on dirs b/c filterDir is less restrictive
	        if (this.fsw.closed) {
	          return;
	        }
	        if (entry.stats.isDirectory() && !wh.filterPath(entry)) return;

	        const joinedPath = sysPath.join(wh.watchPath, entry.path);
	        const {fullPath} = entry;

	        if (wh.followSymlinks && entry.stats.isSymbolicLink()) {
	          // preserve the current depth here since it can't be derived from
	          // real paths past the symlink
	          const curDepth = opts.depth === undefined ?
	            undefined : calcDepth(joinedPath, sysPath.resolve(wh.watchPath)) + 1;

	          this._handleFsEventsSymlink(joinedPath, fullPath, processPath, curDepth);
	        } else {
	          this.emitAdd(joinedPath, entry.stats, processPath, opts, forceAdd);
	        }
	      }).on(EV_ERROR, EMPTY_FN).on(STR_END, () => {
	        this.fsw._emitReady();
	      });
	    } else {
	      this.emitAdd(wh.watchPath, stats, processPath, opts, forceAdd);
	      this.fsw._emitReady();
	    }
	  } catch (error) {
	    if (!error || this.fsw._handleError(error)) {
	      // TODO: Strange thing: "should not choke on an ignored watch path" will be failed without 2 ready calls -__-
	      this.fsw._emitReady();
	      this.fsw._emitReady();
	    }
	  }

	  if (opts.persistent && forceAdd !== true) {
	    if (typeof transform === FUNCTION_TYPE) {
	      // realpath has already been resolved
	      this.initWatch(undefined, path, wh, processPath);
	    } else {
	      let realPath;
	      try {
	        realPath = await realpath(wh.watchPath);
	      } catch (e) {}
	      this.initWatch(realPath, path, wh, processPath);
	    }
	  }
	}

	}

	fseventsHandler.exports = FsEventsHandler;
	fseventsHandler.exports.canUse = canUse;
	return fseventsHandler.exports;
}

var hasRequiredChokidar;

function requireChokidar () {
	if (hasRequiredChokidar) return chokidar$1;
	hasRequiredChokidar = 1;

	const { EventEmitter } = require$$0$3;
	const fs = require$$0$2;
	const sysPath = require$$0$1;
	const { promisify } = require$$2;
	const readdirp = /*@__PURE__*/ requireReaddirp();
	const anymatch = /*@__PURE__*/ requireAnymatch().default;
	const globParent = /*@__PURE__*/ requireGlobParent();
	const isGlob = /*@__PURE__*/ requireIsGlob();
	const braces = /*@__PURE__*/ requireBraces();
	const normalizePath = /*@__PURE__*/ requireNormalizePath();

	const NodeFsHandler = /*@__PURE__*/ requireNodefsHandler();
	const FsEventsHandler = /*@__PURE__*/ requireFseventsHandler();
	const {
	  EV_ALL,
	  EV_READY,
	  EV_ADD,
	  EV_CHANGE,
	  EV_UNLINK,
	  EV_ADD_DIR,
	  EV_UNLINK_DIR,
	  EV_RAW,
	  EV_ERROR,

	  STR_CLOSE,
	  STR_END,

	  BACK_SLASH_RE,
	  DOUBLE_SLASH_RE,
	  SLASH_OR_BACK_SLASH_RE,
	  DOT_RE,
	  REPLACER_RE,

	  SLASH,
	  SLASH_SLASH,
	  BRACE_START,
	  BANG,
	  ONE_DOT,
	  TWO_DOTS,
	  GLOBSTAR,
	  SLASH_GLOBSTAR,
	  ANYMATCH_OPTS,
	  STRING_TYPE,
	  FUNCTION_TYPE,
	  EMPTY_STR,
	  EMPTY_FN,

	  isWindows,
	  isMacos,
	  isIBMi
	} = /*@__PURE__*/ requireConstants();

	const stat = promisify(fs.stat);
	const readdir = promisify(fs.readdir);

	/**
	 * @typedef {String} Path
	 * @typedef {'all'|'add'|'addDir'|'change'|'unlink'|'unlinkDir'|'raw'|'error'|'ready'} EventName
	 * @typedef {'readdir'|'watch'|'add'|'remove'|'change'} ThrottleType
	 */

	/**
	 *
	 * @typedef {Object} WatchHelpers
	 * @property {Boolean} followSymlinks
	 * @property {'stat'|'lstat'} statMethod
	 * @property {Path} path
	 * @property {Path} watchPath
	 * @property {Function} entryPath
	 * @property {Boolean} hasGlob
	 * @property {Object} globFilter
	 * @property {Function} filterPath
	 * @property {Function} filterDir
	 */

	const arrify = (value = []) => Array.isArray(value) ? value : [value];
	const flatten = (list, result = []) => {
	  list.forEach(item => {
	    if (Array.isArray(item)) {
	      flatten(item, result);
	    } else {
	      result.push(item);
	    }
	  });
	  return result;
	};

	const unifyPaths = (paths_) => {
	  /**
	   * @type {Array<String>}
	   */
	  const paths = flatten(arrify(paths_));
	  if (!paths.every(p => typeof p === STRING_TYPE)) {
	    throw new TypeError(`Non-string provided as watch path: ${paths}`);
	  }
	  return paths.map(normalizePathToUnix);
	};

	// If SLASH_SLASH occurs at the beginning of path, it is not replaced
	//     because "//StoragePC/DrivePool/Movies" is a valid network path
	const toUnix = (string) => {
	  let str = string.replace(BACK_SLASH_RE, SLASH);
	  let prepend = false;
	  if (str.startsWith(SLASH_SLASH)) {
	    prepend = true;
	  }
	  while (str.match(DOUBLE_SLASH_RE)) {
	    str = str.replace(DOUBLE_SLASH_RE, SLASH);
	  }
	  if (prepend) {
	    str = SLASH + str;
	  }
	  return str;
	};

	// Our version of upath.normalize
	// TODO: this is not equal to path-normalize module - investigate why
	const normalizePathToUnix = (path) => toUnix(sysPath.normalize(toUnix(path)));

	const normalizeIgnored = (cwd = EMPTY_STR) => (path) => {
	  if (typeof path !== STRING_TYPE) return path;
	  return normalizePathToUnix(sysPath.isAbsolute(path) ? path : sysPath.join(cwd, path));
	};

	const getAbsolutePath = (path, cwd) => {
	  if (sysPath.isAbsolute(path)) {
	    return path;
	  }
	  if (path.startsWith(BANG)) {
	    return BANG + sysPath.join(cwd, path.slice(1));
	  }
	  return sysPath.join(cwd, path);
	};

	const undef = (opts, key) => opts[key] === undefined;

	/**
	 * Directory entry.
	 * @property {Path} path
	 * @property {Set<Path>} items
	 */
	class DirEntry {
	  /**
	   * @param {Path} dir
	   * @param {Function} removeWatcher
	   */
	  constructor(dir, removeWatcher) {
	    this.path = dir;
	    this._removeWatcher = removeWatcher;
	    /** @type {Set<Path>} */
	    this.items = new Set();
	  }

	  add(item) {
	    const {items} = this;
	    if (!items) return;
	    if (item !== ONE_DOT && item !== TWO_DOTS) items.add(item);
	  }

	  async remove(item) {
	    const {items} = this;
	    if (!items) return;
	    items.delete(item);
	    if (items.size > 0) return;

	    const dir = this.path;
	    try {
	      await readdir(dir);
	    } catch (err) {
	      if (this._removeWatcher) {
	        this._removeWatcher(sysPath.dirname(dir), sysPath.basename(dir));
	      }
	    }
	  }

	  has(item) {
	    const {items} = this;
	    if (!items) return;
	    return items.has(item);
	  }

	  /**
	   * @returns {Array<String>}
	   */
	  getChildren() {
	    const {items} = this;
	    if (!items) return;
	    return [...items.values()];
	  }

	  dispose() {
	    this.items.clear();
	    delete this.path;
	    delete this._removeWatcher;
	    delete this.items;
	    Object.freeze(this);
	  }
	}

	const STAT_METHOD_F = 'stat';
	const STAT_METHOD_L = 'lstat';
	class WatchHelper {
	  constructor(path, watchPath, follow, fsw) {
	    this.fsw = fsw;
	    this.path = path = path.replace(REPLACER_RE, EMPTY_STR);
	    this.watchPath = watchPath;
	    this.fullWatchPath = sysPath.resolve(watchPath);
	    this.hasGlob = watchPath !== path;
	    /** @type {object|boolean} */
	    if (path === EMPTY_STR) this.hasGlob = false;
	    this.globSymlink = this.hasGlob && follow ? undefined : false;
	    this.globFilter = this.hasGlob ? anymatch(path, undefined, ANYMATCH_OPTS) : false;
	    this.dirParts = this.getDirParts(path);
	    this.dirParts.forEach((parts) => {
	      if (parts.length > 1) parts.pop();
	    });
	    this.followSymlinks = follow;
	    this.statMethod = follow ? STAT_METHOD_F : STAT_METHOD_L;
	  }

	  checkGlobSymlink(entry) {
	    // only need to resolve once
	    // first entry should always have entry.parentDir === EMPTY_STR
	    if (this.globSymlink === undefined) {
	      this.globSymlink = entry.fullParentDir === this.fullWatchPath ?
	        false : {realPath: entry.fullParentDir, linkPath: this.fullWatchPath};
	    }

	    if (this.globSymlink) {
	      return entry.fullPath.replace(this.globSymlink.realPath, this.globSymlink.linkPath);
	    }

	    return entry.fullPath;
	  }

	  entryPath(entry) {
	    return sysPath.join(this.watchPath,
	      sysPath.relative(this.watchPath, this.checkGlobSymlink(entry))
	    );
	  }

	  filterPath(entry) {
	    const {stats} = entry;
	    if (stats && stats.isSymbolicLink()) return this.filterDir(entry);
	    const resolvedPath = this.entryPath(entry);
	    const matchesGlob = this.hasGlob && typeof this.globFilter === FUNCTION_TYPE ?
	      this.globFilter(resolvedPath) : true;
	    return matchesGlob &&
	      this.fsw._isntIgnored(resolvedPath, stats) &&
	      this.fsw._hasReadPermissions(stats);
	  }

	  getDirParts(path) {
	    if (!this.hasGlob) return [];
	    const parts = [];
	    const expandedPath = path.includes(BRACE_START) ? braces.expand(path) : [path];
	    expandedPath.forEach((path) => {
	      parts.push(sysPath.relative(this.watchPath, path).split(SLASH_OR_BACK_SLASH_RE));
	    });
	    return parts;
	  }

	  filterDir(entry) {
	    if (this.hasGlob) {
	      const entryParts = this.getDirParts(this.checkGlobSymlink(entry));
	      let globstar = false;
	      this.unmatchedGlob = !this.dirParts.some((parts) => {
	        return parts.every((part, i) => {
	          if (part === GLOBSTAR) globstar = true;
	          return globstar || !entryParts[0][i] || anymatch(part, entryParts[0][i], ANYMATCH_OPTS);
	        });
	      });
	    }
	    return !this.unmatchedGlob && this.fsw._isntIgnored(this.entryPath(entry), entry.stats);
	  }
	}

	/**
	 * Watches files & directories for changes. Emitted events:
	 * `add`, `addDir`, `change`, `unlink`, `unlinkDir`, `all`, `error`
	 *
	 *     new FSWatcher()
	 *       .add(directories)
	 *       .on('add', path => log('File', path, 'was added'))
	 */
	class FSWatcher extends EventEmitter {
	// Not indenting methods for history sake; for now.
	constructor(_opts) {
	  super();

	  const opts = {};
	  if (_opts) Object.assign(opts, _opts); // for frozen objects

	  /** @type {Map<String, DirEntry>} */
	  this._watched = new Map();
	  /** @type {Map<String, Array>} */
	  this._closers = new Map();
	  /** @type {Set<String>} */
	  this._ignoredPaths = new Set();

	  /** @type {Map<ThrottleType, Map>} */
	  this._throttled = new Map();

	  /** @type {Map<Path, String|Boolean>} */
	  this._symlinkPaths = new Map();

	  this._streams = new Set();
	  this.closed = false;

	  // Set up default options.
	  if (undef(opts, 'persistent')) opts.persistent = true;
	  if (undef(opts, 'ignoreInitial')) opts.ignoreInitial = false;
	  if (undef(opts, 'ignorePermissionErrors')) opts.ignorePermissionErrors = false;
	  if (undef(opts, 'interval')) opts.interval = 100;
	  if (undef(opts, 'binaryInterval')) opts.binaryInterval = 300;
	  if (undef(opts, 'disableGlobbing')) opts.disableGlobbing = false;
	  opts.enableBinaryInterval = opts.binaryInterval !== opts.interval;

	  // Enable fsevents on OS X when polling isn't explicitly enabled.
	  if (undef(opts, 'useFsEvents')) opts.useFsEvents = !opts.usePolling;

	  // If we can't use fsevents, ensure the options reflect it's disabled.
	  const canUseFsEvents = FsEventsHandler.canUse();
	  if (!canUseFsEvents) opts.useFsEvents = false;

	  // Use polling on Mac if not using fsevents.
	  // Other platforms use non-polling fs_watch.
	  if (undef(opts, 'usePolling') && !opts.useFsEvents) {
	    opts.usePolling = isMacos;
	  }

	  // Always default to polling on IBM i because fs.watch() is not available on IBM i.
	  if(isIBMi) {
	    opts.usePolling = true;
	  }

	  // Global override (useful for end-developers that need to force polling for all
	  // instances of chokidar, regardless of usage/dependency depth)
	  const envPoll = process.env.CHOKIDAR_USEPOLLING;
	  if (envPoll !== undefined) {
	    const envLower = envPoll.toLowerCase();

	    if (envLower === 'false' || envLower === '0') {
	      opts.usePolling = false;
	    } else if (envLower === 'true' || envLower === '1') {
	      opts.usePolling = true;
	    } else {
	      opts.usePolling = !!envLower;
	    }
	  }
	  const envInterval = process.env.CHOKIDAR_INTERVAL;
	  if (envInterval) {
	    opts.interval = Number.parseInt(envInterval, 10);
	  }

	  // Editor atomic write normalization enabled by default with fs.watch
	  if (undef(opts, 'atomic')) opts.atomic = !opts.usePolling && !opts.useFsEvents;
	  if (opts.atomic) this._pendingUnlinks = new Map();

	  if (undef(opts, 'followSymlinks')) opts.followSymlinks = true;

	  if (undef(opts, 'awaitWriteFinish')) opts.awaitWriteFinish = false;
	  if (opts.awaitWriteFinish === true) opts.awaitWriteFinish = {};
	  const awf = opts.awaitWriteFinish;
	  if (awf) {
	    if (!awf.stabilityThreshold) awf.stabilityThreshold = 2000;
	    if (!awf.pollInterval) awf.pollInterval = 100;
	    this._pendingWrites = new Map();
	  }
	  if (opts.ignored) opts.ignored = arrify(opts.ignored);

	  let readyCalls = 0;
	  this._emitReady = () => {
	    readyCalls++;
	    if (readyCalls >= this._readyCount) {
	      this._emitReady = EMPTY_FN;
	      this._readyEmitted = true;
	      // use process.nextTick to allow time for listener to be bound
	      process.nextTick(() => this.emit(EV_READY));
	    }
	  };
	  this._emitRaw = (...args) => this.emit(EV_RAW, ...args);
	  this._readyEmitted = false;
	  this.options = opts;

	  // Initialize with proper watcher.
	  if (opts.useFsEvents) {
	    this._fsEventsHandler = new FsEventsHandler(this);
	  } else {
	    this._nodeFsHandler = new NodeFsHandler(this);
	  }

	  // You’re frozen when your heart’s not open.
	  Object.freeze(opts);
	}

	// Public methods

	/**
	 * Adds paths to be watched on an existing FSWatcher instance
	 * @param {Path|Array<Path>} paths_
	 * @param {String=} _origAdd private; for handling non-existent paths to be watched
	 * @param {Boolean=} _internal private; indicates a non-user add
	 * @returns {FSWatcher} for chaining
	 */
	add(paths_, _origAdd, _internal) {
	  const {cwd, disableGlobbing} = this.options;
	  this.closed = false;
	  let paths = unifyPaths(paths_);
	  if (cwd) {
	    paths = paths.map((path) => {
	      const absPath = getAbsolutePath(path, cwd);

	      // Check `path` instead of `absPath` because the cwd portion can't be a glob
	      if (disableGlobbing || !isGlob(path)) {
	        return absPath;
	      }
	      return normalizePath(absPath);
	    });
	  }

	  // set aside negated glob strings
	  paths = paths.filter((path) => {
	    if (path.startsWith(BANG)) {
	      this._ignoredPaths.add(path.slice(1));
	      return false;
	    }

	    // if a path is being added that was previously ignored, stop ignoring it
	    this._ignoredPaths.delete(path);
	    this._ignoredPaths.delete(path + SLASH_GLOBSTAR);

	    // reset the cached userIgnored anymatch fn
	    // to make ignoredPaths changes effective
	    this._userIgnored = undefined;

	    return true;
	  });

	  if (this.options.useFsEvents && this._fsEventsHandler) {
	    if (!this._readyCount) this._readyCount = paths.length;
	    if (this.options.persistent) this._readyCount += paths.length;
	    paths.forEach((path) => this._fsEventsHandler._addToFsEvents(path));
	  } else {
	    if (!this._readyCount) this._readyCount = 0;
	    this._readyCount += paths.length;
	    Promise.all(
	      paths.map(async path => {
	        const res = await this._nodeFsHandler._addToNodeFs(path, !_internal, 0, 0, _origAdd);
	        if (res) this._emitReady();
	        return res;
	      })
	    ).then(results => {
	      if (this.closed) return;
	      results.filter(item => item).forEach(item => {
	        this.add(sysPath.dirname(item), sysPath.basename(_origAdd || item));
	      });
	    });
	  }

	  return this;
	}

	/**
	 * Close watchers or start ignoring events from specified paths.
	 * @param {Path|Array<Path>} paths_ - string or array of strings, file/directory paths and/or globs
	 * @returns {FSWatcher} for chaining
	*/
	unwatch(paths_) {
	  if (this.closed) return this;
	  const paths = unifyPaths(paths_);
	  const {cwd} = this.options;

	  paths.forEach((path) => {
	    // convert to absolute path unless relative path already matches
	    if (!sysPath.isAbsolute(path) && !this._closers.has(path)) {
	      if (cwd) path = sysPath.join(cwd, path);
	      path = sysPath.resolve(path);
	    }

	    this._closePath(path);

	    this._ignoredPaths.add(path);
	    if (this._watched.has(path)) {
	      this._ignoredPaths.add(path + SLASH_GLOBSTAR);
	    }

	    // reset the cached userIgnored anymatch fn
	    // to make ignoredPaths changes effective
	    this._userIgnored = undefined;
	  });

	  return this;
	}

	/**
	 * Close watchers and remove all listeners from watched paths.
	 * @returns {Promise<void>}.
	*/
	close() {
	  if (this.closed) return this._closePromise;
	  this.closed = true;

	  // Memory management.
	  this.removeAllListeners();
	  const closers = [];
	  this._closers.forEach(closerList => closerList.forEach(closer => {
	    const promise = closer();
	    if (promise instanceof Promise) closers.push(promise);
	  }));
	  this._streams.forEach(stream => stream.destroy());
	  this._userIgnored = undefined;
	  this._readyCount = 0;
	  this._readyEmitted = false;
	  this._watched.forEach(dirent => dirent.dispose());
	  ['closers', 'watched', 'streams', 'symlinkPaths', 'throttled'].forEach(key => {
	    this[`_${key}`].clear();
	  });

	  this._closePromise = closers.length ? Promise.all(closers).then(() => undefined) : Promise.resolve();
	  return this._closePromise;
	}

	/**
	 * Expose list of watched paths
	 * @returns {Object} for chaining
	*/
	getWatched() {
	  const watchList = {};
	  this._watched.forEach((entry, dir) => {
	    const key = this.options.cwd ? sysPath.relative(this.options.cwd, dir) : dir;
	    watchList[key || ONE_DOT] = entry.getChildren().sort();
	  });
	  return watchList;
	}

	emitWithAll(event, args) {
	  this.emit(...args);
	  if (event !== EV_ERROR) this.emit(EV_ALL, ...args);
	}

	// Common helpers
	// --------------

	/**
	 * Normalize and emit events.
	 * Calling _emit DOES NOT MEAN emit() would be called!
	 * @param {EventName} event Type of event
	 * @param {Path} path File or directory path
	 * @param {*=} val1 arguments to be passed with event
	 * @param {*=} val2
	 * @param {*=} val3
	 * @returns the error if defined, otherwise the value of the FSWatcher instance's `closed` flag
	 */
	async _emit(event, path, val1, val2, val3) {
	  if (this.closed) return;

	  const opts = this.options;
	  if (isWindows) path = sysPath.normalize(path);
	  if (opts.cwd) path = sysPath.relative(opts.cwd, path);
	  /** @type Array<any> */
	  const args = [event, path];
	  if (val3 !== undefined) args.push(val1, val2, val3);
	  else if (val2 !== undefined) args.push(val1, val2);
	  else if (val1 !== undefined) args.push(val1);

	  const awf = opts.awaitWriteFinish;
	  let pw;
	  if (awf && (pw = this._pendingWrites.get(path))) {
	    pw.lastChange = new Date();
	    return this;
	  }

	  if (opts.atomic) {
	    if (event === EV_UNLINK) {
	      this._pendingUnlinks.set(path, args);
	      setTimeout(() => {
	        this._pendingUnlinks.forEach((entry, path) => {
	          this.emit(...entry);
	          this.emit(EV_ALL, ...entry);
	          this._pendingUnlinks.delete(path);
	        });
	      }, typeof opts.atomic === 'number' ? opts.atomic : 100);
	      return this;
	    }
	    if (event === EV_ADD && this._pendingUnlinks.has(path)) {
	      event = args[0] = EV_CHANGE;
	      this._pendingUnlinks.delete(path);
	    }
	  }

	  if (awf && (event === EV_ADD || event === EV_CHANGE) && this._readyEmitted) {
	    const awfEmit = (err, stats) => {
	      if (err) {
	        event = args[0] = EV_ERROR;
	        args[1] = err;
	        this.emitWithAll(event, args);
	      } else if (stats) {
	        // if stats doesn't exist the file must have been deleted
	        if (args.length > 2) {
	          args[2] = stats;
	        } else {
	          args.push(stats);
	        }
	        this.emitWithAll(event, args);
	      }
	    };

	    this._awaitWriteFinish(path, awf.stabilityThreshold, event, awfEmit);
	    return this;
	  }

	  if (event === EV_CHANGE) {
	    const isThrottled = !this._throttle(EV_CHANGE, path, 50);
	    if (isThrottled) return this;
	  }

	  if (opts.alwaysStat && val1 === undefined &&
	    (event === EV_ADD || event === EV_ADD_DIR || event === EV_CHANGE)
	  ) {
	    const fullPath = opts.cwd ? sysPath.join(opts.cwd, path) : path;
	    let stats;
	    try {
	      stats = await stat(fullPath);
	    } catch (err) {}
	    // Suppress event when fs_stat fails, to avoid sending undefined 'stat'
	    if (!stats || this.closed) return;
	    args.push(stats);
	  }
	  this.emitWithAll(event, args);

	  return this;
	}

	/**
	 * Common handler for errors
	 * @param {Error} error
	 * @returns {Error|Boolean} The error if defined, otherwise the value of the FSWatcher instance's `closed` flag
	 */
	_handleError(error) {
	  const code = error && error.code;
	  if (error && code !== 'ENOENT' && code !== 'ENOTDIR' &&
	    (!this.options.ignorePermissionErrors || (code !== 'EPERM' && code !== 'EACCES'))
	  ) {
	    this.emit(EV_ERROR, error);
	  }
	  return error || this.closed;
	}

	/**
	 * Helper utility for throttling
	 * @param {ThrottleType} actionType type being throttled
	 * @param {Path} path being acted upon
	 * @param {Number} timeout duration of time to suppress duplicate actions
	 * @returns {Object|false} tracking object or false if action should be suppressed
	 */
	_throttle(actionType, path, timeout) {
	  if (!this._throttled.has(actionType)) {
	    this._throttled.set(actionType, new Map());
	  }

	  /** @type {Map<Path, Object>} */
	  const action = this._throttled.get(actionType);
	  /** @type {Object} */
	  const actionPath = action.get(path);

	  if (actionPath) {
	    actionPath.count++;
	    return false;
	  }

	  let timeoutObject;
	  const clear = () => {
	    const item = action.get(path);
	    const count = item ? item.count : 0;
	    action.delete(path);
	    clearTimeout(timeoutObject);
	    if (item) clearTimeout(item.timeoutObject);
	    return count;
	  };
	  timeoutObject = setTimeout(clear, timeout);
	  const thr = {timeoutObject, clear, count: 0};
	  action.set(path, thr);
	  return thr;
	}

	_incrReadyCount() {
	  return this._readyCount++;
	}

	/**
	 * Awaits write operation to finish.
	 * Polls a newly created file for size variations. When files size does not change for 'threshold' milliseconds calls callback.
	 * @param {Path} path being acted upon
	 * @param {Number} threshold Time in milliseconds a file size must be fixed before acknowledging write OP is finished
	 * @param {EventName} event
	 * @param {Function} awfEmit Callback to be called when ready for event to be emitted.
	 */
	_awaitWriteFinish(path, threshold, event, awfEmit) {
	  let timeoutHandler;

	  let fullPath = path;
	  if (this.options.cwd && !sysPath.isAbsolute(path)) {
	    fullPath = sysPath.join(this.options.cwd, path);
	  }

	  const now = new Date();

	  const awaitWriteFinish = (prevStat) => {
	    fs.stat(fullPath, (err, curStat) => {
	      if (err || !this._pendingWrites.has(path)) {
	        if (err && err.code !== 'ENOENT') awfEmit(err);
	        return;
	      }

	      const now = Number(new Date());

	      if (prevStat && curStat.size !== prevStat.size) {
	        this._pendingWrites.get(path).lastChange = now;
	      }
	      const pw = this._pendingWrites.get(path);
	      const df = now - pw.lastChange;

	      if (df >= threshold) {
	        this._pendingWrites.delete(path);
	        awfEmit(undefined, curStat);
	      } else {
	        timeoutHandler = setTimeout(
	          awaitWriteFinish,
	          this.options.awaitWriteFinish.pollInterval,
	          curStat
	        );
	      }
	    });
	  };

	  if (!this._pendingWrites.has(path)) {
	    this._pendingWrites.set(path, {
	      lastChange: now,
	      cancelWait: () => {
	        this._pendingWrites.delete(path);
	        clearTimeout(timeoutHandler);
	        return event;
	      }
	    });
	    timeoutHandler = setTimeout(
	      awaitWriteFinish,
	      this.options.awaitWriteFinish.pollInterval
	    );
	  }
	}

	_getGlobIgnored() {
	  return [...this._ignoredPaths.values()];
	}

	/**
	 * Determines whether user has asked to ignore this path.
	 * @param {Path} path filepath or dir
	 * @param {fs.Stats=} stats result of fs.stat
	 * @returns {Boolean}
	 */
	_isIgnored(path, stats) {
	  if (this.options.atomic && DOT_RE.test(path)) return true;
	  if (!this._userIgnored) {
	    const {cwd} = this.options;
	    const ign = this.options.ignored;

	    const ignored = ign && ign.map(normalizeIgnored(cwd));
	    const paths = arrify(ignored)
	      .filter((path) => typeof path === STRING_TYPE && !isGlob(path))
	      .map((path) => path + SLASH_GLOBSTAR);
	    const list = this._getGlobIgnored().map(normalizeIgnored(cwd)).concat(ignored, paths);
	    this._userIgnored = anymatch(list, undefined, ANYMATCH_OPTS);
	  }

	  return this._userIgnored([path, stats]);
	}

	_isntIgnored(path, stat) {
	  return !this._isIgnored(path, stat);
	}

	/**
	 * Provides a set of common helpers and properties relating to symlink and glob handling.
	 * @param {Path} path file, directory, or glob pattern being watched
	 * @param {Number=} depth at any depth > 0, this isn't a glob
	 * @returns {WatchHelper} object containing helpers for this path
	 */
	_getWatchHelpers(path, depth) {
	  const watchPath = depth || this.options.disableGlobbing || !isGlob(path) ? path : globParent(path);
	  const follow = this.options.followSymlinks;

	  return new WatchHelper(path, watchPath, follow, this);
	}

	// Directory helpers
	// -----------------

	/**
	 * Provides directory tracking objects
	 * @param {String} directory path of the directory
	 * @returns {DirEntry} the directory's tracking object
	 */
	_getWatchedDir(directory) {
	  if (!this._boundRemove) this._boundRemove = this._remove.bind(this);
	  const dir = sysPath.resolve(directory);
	  if (!this._watched.has(dir)) this._watched.set(dir, new DirEntry(dir, this._boundRemove));
	  return this._watched.get(dir);
	}

	// File helpers
	// ------------

	/**
	 * Check for read permissions.
	 * Based on this answer on SO: https://stackoverflow.com/a/11781404/1358405
	 * @param {fs.Stats} stats - object, result of fs_stat
	 * @returns {Boolean} indicates whether the file can be read
	*/
	_hasReadPermissions(stats) {
	  if (this.options.ignorePermissionErrors) return true;

	  // stats.mode may be bigint
	  const md = stats && Number.parseInt(stats.mode, 10);
	  const st = md & 0o777;
	  const it = Number.parseInt(st.toString(8)[0], 10);
	  return Boolean(4 & it);
	}

	/**
	 * Handles emitting unlink events for
	 * files and directories, and via recursion, for
	 * files and directories within directories that are unlinked
	 * @param {String} directory within which the following item is located
	 * @param {String} item      base path of item/directory
	 * @returns {void}
	*/
	_remove(directory, item, isDirectory) {
	  // if what is being deleted is a directory, get that directory's paths
	  // for recursive deleting and cleaning of watched object
	  // if it is not a directory, nestedDirectoryChildren will be empty array
	  const path = sysPath.join(directory, item);
	  const fullPath = sysPath.resolve(path);
	  isDirectory = isDirectory != null
	    ? isDirectory
	    : this._watched.has(path) || this._watched.has(fullPath);

	  // prevent duplicate handling in case of arriving here nearly simultaneously
	  // via multiple paths (such as _handleFile and _handleDir)
	  if (!this._throttle('remove', path, 100)) return;

	  // if the only watched file is removed, watch for its return
	  if (!isDirectory && !this.options.useFsEvents && this._watched.size === 1) {
	    this.add(directory, item, true);
	  }

	  // This will create a new entry in the watched object in either case
	  // so we got to do the directory check beforehand
	  const wp = this._getWatchedDir(path);
	  const nestedDirectoryChildren = wp.getChildren();

	  // Recursively remove children directories / files.
	  nestedDirectoryChildren.forEach(nested => this._remove(path, nested));

	  // Check if item was on the watched list and remove it
	  const parent = this._getWatchedDir(directory);
	  const wasTracked = parent.has(item);
	  parent.remove(item);

	  // Fixes issue #1042 -> Relative paths were detected and added as symlinks
	  // (https://github.com/paulmillr/chokidar/blob/e1753ddbc9571bdc33b4a4af172d52cb6e611c10/lib/nodefs-handler.js#L612),
	  // but never removed from the map in case the path was deleted.
	  // This leads to an incorrect state if the path was recreated:
	  // https://github.com/paulmillr/chokidar/blob/e1753ddbc9571bdc33b4a4af172d52cb6e611c10/lib/nodefs-handler.js#L553
	  if (this._symlinkPaths.has(fullPath)) {
	    this._symlinkPaths.delete(fullPath);
	  }

	  // If we wait for this file to be fully written, cancel the wait.
	  let relPath = path;
	  if (this.options.cwd) relPath = sysPath.relative(this.options.cwd, path);
	  if (this.options.awaitWriteFinish && this._pendingWrites.has(relPath)) {
	    const event = this._pendingWrites.get(relPath).cancelWait();
	    if (event === EV_ADD) return;
	  }

	  // The Entry will either be a directory that just got removed
	  // or a bogus entry to a file, in either case we have to remove it
	  this._watched.delete(path);
	  this._watched.delete(fullPath);
	  const eventName = isDirectory ? EV_UNLINK_DIR : EV_UNLINK;
	  if (wasTracked && !this._isIgnored(path)) this._emit(eventName, path);

	  // Avoid conflicts if we later create another file with the same name
	  if (!this.options.useFsEvents) {
	    this._closePath(path);
	  }
	}

	/**
	 * Closes all watchers for a path
	 * @param {Path} path
	 */
	_closePath(path) {
	  this._closeFile(path);
	  const dir = sysPath.dirname(path);
	  this._getWatchedDir(dir).remove(sysPath.basename(path));
	}

	/**
	 * Closes only file-specific watchers
	 * @param {Path} path
	 */
	_closeFile(path) {
	  const closers = this._closers.get(path);
	  if (!closers) return;
	  closers.forEach(closer => closer());
	  this._closers.delete(path);
	}

	/**
	 *
	 * @param {Path} path
	 * @param {Function} closer
	 */
	_addPathCloser(path, closer) {
	  if (!closer) return;
	  let list = this._closers.get(path);
	  if (!list) {
	    list = [];
	    this._closers.set(path, list);
	  }
	  list.push(closer);
	}

	_readdirp(root, opts) {
	  if (this.closed) return;
	  const options = {type: EV_ALL, alwaysStat: true, lstat: true, ...opts};
	  let stream = readdirp(root, options);
	  this._streams.add(stream);
	  stream.once(STR_CLOSE, () => {
	    stream = undefined;
	  });
	  stream.once(STR_END, () => {
	    if (stream) {
	      this._streams.delete(stream);
	      stream = undefined;
	    }
	  });
	  return stream;
	}

	}

	// Export FSWatcher class
	chokidar$1.FSWatcher = FSWatcher;

	/**
	 * Instantiates watcher with paths to be tracked.
	 * @param {String|Array<String>} paths file/directory paths and/or globs
	 * @param {Object=} options chokidar opts
	 * @returns an instance of FSWatcher for chaining.
	 */
	const watch = (paths, options) => {
	  const watcher = new FSWatcher(options);
	  watcher.add(paths);
	  return watcher;
	};

	chokidar$1.watch = watch;
	return chokidar$1;
}

var chokidarExports = /*@__PURE__*/ requireChokidar();
const chokidar = /*@__PURE__*/getDefaultExportFromCjs(chokidarExports);

class FileWatcher {
    constructor(task, chokidarOptions) {
        this.transformWatchers = new Map();
        this.chokidarOptions = chokidarOptions;
        this.task = task;
        this.watcher = this.createWatcher(null);
    }
    close() {
        this.watcher.close();
        for (const watcher of this.transformWatchers.values()) {
            watcher.close();
        }
    }
    unwatch(id) {
        this.watcher.unwatch(id);
        const transformWatcher = this.transformWatchers.get(id);
        if (transformWatcher) {
            this.transformWatchers.delete(id);
            transformWatcher.close();
        }
    }
    watch(id, isTransformDependency) {
        if (isTransformDependency) {
            const watcher = this.transformWatchers.get(id) ?? this.createWatcher(id);
            watcher.add(id);
            this.transformWatchers.set(id, watcher);
        }
        else {
            this.watcher.add(id);
        }
    }
    createWatcher(transformWatcherId) {
        const task = this.task;
        const isLinux = platform() === 'linux';
        const isFreeBSD = platform() === 'freebsd';
        const isTransformDependency = transformWatcherId !== null;
        const handleChange = (id, event) => {
            const changedId = transformWatcherId || id;
            if (isLinux || isFreeBSD) {
                // unwatching and watching fixes an issue with chokidar where on certain systems,
                // a file that was unlinked and immediately recreated would create a change event
                // but then no longer any further events
                watcher.unwatch(changedId);
                watcher.add(changedId);
            }
            task.invalidate(changedId, { event, isTransformDependency });
        };
        const watcher = chokidar
            .watch([], this.chokidarOptions)
            .on('add', id => handleChange(id, 'create'))
            .on('change', id => handleChange(id, 'update'))
            .on('unlink', id => handleChange(id, 'delete'));
        return watcher;
    }
}

const eventsRewrites = {
    create: {
        create: 'buggy',
        delete: null, //delete file from map
        update: 'create'
    },
    delete: {
        create: 'update',
        delete: 'buggy',
        update: 'buggy'
    },
    update: {
        create: 'buggy',
        delete: 'delete',
        update: 'update'
    }
};
class Watcher {
    constructor(optionsList, emitter) {
        this.buildDelay = 0;
        this.buildTimeout = null;
        this.closed = false;
        this.invalidatedIds = new Map();
        this.rerun = false;
        this.running = true;
        this.emitter = emitter;
        emitter.close = this.close.bind(this);
        this.tasks = optionsList.map(options => new Task(this, options));
        for (const { watch } of optionsList) {
            if (watch && typeof watch.buildDelay === 'number') {
                this.buildDelay = Math.max(this.buildDelay, watch.buildDelay);
            }
        }
        process$1.nextTick(() => this.run());
    }
    async close() {
        if (this.closed)
            return;
        this.closed = true;
        if (this.buildTimeout)
            clearTimeout(this.buildTimeout);
        for (const task of this.tasks) {
            task.close();
        }
        await this.emitter.emit('close');
        this.emitter.removeAllListeners();
    }
    invalidate(file) {
        if (file) {
            const previousEvent = this.invalidatedIds.get(file.id);
            const event = previousEvent ? eventsRewrites[previousEvent][file.event] : file.event;
            if (event === 'buggy') {
                //TODO: throws or warn? Currently just ignore, uses new event
                this.invalidatedIds.set(file.id, file.event);
            }
            else if (event === null) {
                this.invalidatedIds.delete(file.id);
            }
            else {
                this.invalidatedIds.set(file.id, event);
            }
        }
        if (this.running) {
            this.rerun = true;
            return;
        }
        if (this.buildTimeout)
            clearTimeout(this.buildTimeout);
        this.buildTimeout = setTimeout(async () => {
            this.buildTimeout = null;
            try {
                await Promise.all([...this.invalidatedIds].map(([id, event]) => this.emitter.emit('change', id, { event })));
                this.invalidatedIds.clear();
                await this.emitter.emit('restart');
                this.emitter.removeListenersForCurrentRun();
                this.run();
            }
            catch (error) {
                this.invalidatedIds.clear();
                await this.emitter.emit('event', {
                    code: 'ERROR',
                    error,
                    result: null
                });
                await this.emitter.emit('event', {
                    code: 'END'
                });
            }
        }, this.buildDelay);
    }
    async run() {
        this.running = true;
        await this.emitter.emit('event', {
            code: 'START'
        });
        for (const task of this.tasks) {
            await task.run();
        }
        this.running = false;
        await this.emitter.emit('event', {
            code: 'END'
        });
        if (this.rerun) {
            this.rerun = false;
            this.invalidate();
        }
    }
}
class Task {
    constructor(watcher, options) {
        this.cache = { modules: [] };
        this.watchFiles = [];
        this.closed = false;
        this.invalidated = true;
        this.watched = new Set();
        this.watcher = watcher;
        this.options = options;
        this.skipWrite = Boolean(options.watch && options.watch.skipWrite);
        this.outputs = this.options.output;
        this.outputFiles = this.outputs.map(output => {
            if (output.file || output.dir)
                return path.resolve(output.file || output.dir);
            return undefined;
        });
        this.watchOptions = this.options.watch || {};
        this.filter = createFilter(this.watchOptions.include, this.watchOptions.exclude);
        this.fileWatcher = new FileWatcher(this, {
            ...this.watchOptions.chokidar,
            disableGlobbing: true,
            ignoreInitial: true
        });
    }
    close() {
        this.closed = true;
        this.fileWatcher.close();
    }
    invalidate(id, details) {
        this.invalidated = true;
        if (details.isTransformDependency) {
            for (const module of this.cache.modules) {
                if (!module.transformDependencies.includes(id))
                    continue;
                // effective invalidation
                module.originalCode = null;
            }
        }
        this.watcher.invalidate({ event: details.event, id });
        this.watchOptions.onInvalidate?.(id);
    }
    async run() {
        if (!this.invalidated)
            return;
        this.invalidated = false;
        const options = {
            ...this.options,
            cache: this.cache
        };
        const start = Date.now();
        await this.watcher.emitter.emit('event', {
            code: 'BUNDLE_START',
            input: this.options.input,
            output: this.outputFiles
        });
        let result = null;
        try {
            result = await rollupInternal(options, this.watcher.emitter);
            if (this.closed) {
                return;
            }
            this.updateWatchedFiles(result);
            if (!this.skipWrite) {
                await Promise.all(this.outputs.map(output => result.write(output)));
                if (this.closed) {
                    return;
                }
                this.updateWatchedFiles(result);
            }
            await this.watcher.emitter.emit('event', {
                code: 'BUNDLE_END',
                duration: Date.now() - start,
                input: this.options.input,
                output: this.outputFiles,
                result
            });
        }
        catch (error) {
            if (!this.closed) {
                if (Array.isArray(error.watchFiles)) {
                    for (const id of error.watchFiles) {
                        this.watchFile(id);
                    }
                }
                if (error.id) {
                    this.cache.modules = this.cache.modules.filter(module => module.id !== error.id);
                }
            }
            await this.watcher.emitter.emit('event', {
                code: 'ERROR',
                error,
                result
            });
        }
    }
    updateWatchedFiles(result) {
        const previouslyWatched = this.watched;
        this.watched = new Set();
        this.watchFiles = result.watchFiles;
        this.cache = result.cache;
        for (const id of this.watchFiles) {
            this.watchFile(id);
        }
        for (const module of this.cache.modules) {
            for (const depId of module.transformDependencies) {
                this.watchFile(depId, true);
            }
        }
        for (const id of previouslyWatched) {
            if (!this.watched.has(id)) {
                this.fileWatcher.unwatch(id);
            }
        }
    }
    watchFile(id, isTransformDependency = false) {
        if (!this.filter(id))
            return;
        this.watched.add(id);
        if (this.outputFiles.includes(id)) {
            throw new Error('Cannot import the generated bundle');
        }
        // this is necessary to ensure that any 'renamed' files
        // continue to be watched following an error
        this.fileWatcher.watch(id, isTransformDependency);
    }
}

export { Task, Watcher };
