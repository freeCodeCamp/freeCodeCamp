(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["katex"] = factory();
	else
		root["katex"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ katex_webpack; }
});

;// ./src/ParseError.ts
/**
 * This is the ParseError class, which is the main error thrown by KaTeX
 * functions when something has gone wrong. This is used to distinguish internal
 * errors from errors in the expression that the user provided.
 *
 * If possible, a caller should provide a Token or ParseNode with information
 * about where in the source string the problem occurred.
 */
class ParseError extends Error {
  // Error start position based on passed-in Token or ParseNode.

  // Length of affected text based on passed-in Token or ParseNode.

  // The underlying error message without any context added.

  constructor(message,
  // The error message
  token) {
    let error = "KaTeX parse error: " + message;
    let start;
    let end;
    const loc = token && token.loc;
    if (loc && loc.start <= loc.end) {
      // If we have the input and a position, make the error a bit fancier

      // Get the input
      const input = loc.lexer.input;

      // Prepend some information
      start = loc.start;
      end = loc.end;
      if (start === input.length) {
        error += " at end of input: ";
      } else {
        error += " at position " + (start + 1) + ": ";
      }

      // Underline token in question using combining underscores
      const underlined = input.slice(start, end).replace(/[^]/g, "$&\u0332");

      // Extract some context from the input and add it to the error
      let left;
      if (start > 15) {
        left = "…" + input.slice(start - 15, start);
      } else {
        left = input.slice(0, start);
      }
      let right;
      if (end + 15 < input.length) {
        right = input.slice(end, end + 15) + "…";
      } else {
        right = input.slice(end);
      }
      error += left + underlined + right;
    }
    super(error);
    this.name = "ParseError";
    Object.setPrototypeOf(this, ParseError.prototype);
    this.position = start;
    if (start != null && end != null) {
      this.length = end - start;
    }
    this.rawMessage = message;
  }
}
/* harmony default export */ var src_ParseError = (ParseError);
;// ./src/utils.ts
/**
 * This file contains a list of utility functions which are useful in other
 * files.
 */

// hyphenate and escape adapted from Facebook's React under Apache 2 license
const uppercase = /([A-Z])/g;
const hyphenate = str => str.replace(uppercase, "-$1").toLowerCase();
const ESCAPE_LOOKUP = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  "\"": "&quot;",
  "'": "&#x27;"
};
const ESCAPE_REGEX = /[&><"']/g;

/**
 * Escapes text to prevent scripting attacks.
 */
const utils_escape = text => String(text).replace(ESCAPE_REGEX, match => ESCAPE_LOOKUP[match]);

/**
 * Sometimes we want to pull out the innermost element of a group. In most
 * cases, this will just be the group itself, but when ordgroups and colors have
 * a single element, we want to pull that out.
 */
const getBaseElem = group => {
  if (group.type === "ordgroup") {
    if (group.body.length === 1) {
      return getBaseElem(group.body[0]);
    } else {
      return group;
    }
  } else if (group.type === "color") {
    if (group.body.length === 1) {
      return getBaseElem(group.body[0]);
    } else {
      return group;
    }
  } else if (group.type === "font") {
    return getBaseElem(group.body);
  } else {
    return group;
  }
};
const characterNodesTypes = new Set(["mathord", "textord", "atom"]);

/**
 * TeXbook algorithms often reference "character boxes", which are simply groups
 * with a single character in them. To decide if something is a character box,
 * we find its innermost group, and see if it is a single character.
 */
const isCharacterBox = group => characterNodesTypes.has(getBaseElem(group).type);

/**
 * Return the protocol of a URL, or "_relative" if the URL does not specify a
 * protocol (and thus is relative), or `null` if URL has invalid protocol
 * (so should be outright rejected).
 */
const protocolFromUrl = url => {
  // Check for possible leading protocol.
  // https://url.spec.whatwg.org/#url-parsing strips leading whitespace
  // (U+20) or C0 control (U+00-U+1F) characters.
  // eslint-disable-next-line no-control-regex
  const protocol = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(url);
  if (!protocol) {
    return "_relative";
  }
  // Reject weird colons
  if (protocol[2] !== ":") {
    return null;
  }
  // Reject invalid characters in scheme according to
  // https://datatracker.ietf.org/doc/html/rfc3986#section-3.1
  if (!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(protocol[1])) {
    return null;
  }
  // Lowercase the protocol
  return protocol[1].toLowerCase();
};
;// ./src/Settings.ts
/* eslint no-console:0 */
/**
 * This is a module for storing settings passed into KaTeX. It correctly handles
 * default settings.
 */



// TODO: automatically generate documentation
// TODO: check all properties on Settings exist
// TODO: check the type of a property on Settings matches
const SETTINGS_SCHEMA = {
  displayMode: {
    type: "boolean",
    description: "Render math in display mode, which puts the math in " + "display style (so \\int and \\sum are large, for example), and " + "centers the math on the page on its own line.",
    cli: "-d, --display-mode"
  },
  output: {
    type: {
      enum: ["htmlAndMathml", "html", "mathml"]
    },
    description: "Determines the markup language of the output.",
    cli: "-F, --format <type>"
  },
  leqno: {
    type: "boolean",
    description: "Render display math in leqno style (left-justified tags)."
  },
  fleqn: {
    type: "boolean",
    description: "Render display math flush left."
  },
  throwOnError: {
    type: "boolean",
    default: true,
    cli: "-t, --no-throw-on-error",
    cliDescription: "Render errors (in the color given by --error-color) ins" + "tead of throwing a ParseError exception when encountering an error."
  },
  errorColor: {
    type: "string",
    default: "#cc0000",
    cli: "-c, --error-color <color>",
    cliDescription: "A color string given in the format 'rgb' or 'rrggbb' " + "(no #). This option determines the color of errors rendered by the " + "-t option.",
    cliProcessor: color => "#" + color
  },
  macros: {
    type: "object",
    cli: "-m, --macro <def>",
    cliDescription: "Define custom macro of the form '\\foo:expansion' (use " + "multiple -m arguments for multiple macros).",
    cliDefault: [],
    cliProcessor: (def, defs) => {
      defs.push(def);
      return defs;
    }
  },
  minRuleThickness: {
    type: "number",
    description: "Specifies a minimum thickness, in ems, for fraction lines," + " `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, " + "`\\hdashline`, `\\underline`, `\\overline`, and the borders of " + "`\\fbox`, `\\boxed`, and `\\fcolorbox`.",
    processor: t => Math.max(0, t),
    cli: "--min-rule-thickness <size>",
    cliProcessor: parseFloat
  },
  colorIsTextColor: {
    type: "boolean",
    description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, " + "instead of LaTeX's one-argument \\color mode change.",
    cli: "-b, --color-is-text-color"
  },
  strict: {
    type: [{
      enum: ["warn", "ignore", "error"]
    }, "boolean", "function"],
    description: "Turn on strict / LaTeX faithfulness mode, which throws an " + "error if the input uses features that are not supported by LaTeX.",
    cli: "-S, --strict",
    cliDefault: false
  },
  trust: {
    type: ["boolean", "function"],
    description: "Trust the input, enabling all HTML features such as \\url.",
    cli: "-T, --trust"
  },
  maxSize: {
    type: "number",
    default: Infinity,
    description: "If non-zero, all user-specified sizes, e.g. in " + "\\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, " + "elements and spaces can be arbitrarily large",
    processor: s => Math.max(0, s),
    cli: "-s, --max-size <n>",
    cliProcessor: parseInt
  },
  maxExpand: {
    type: "number",
    default: 1000,
    description: "Limit the number of macro expansions to the specified " + "number, to prevent e.g. infinite macro loops. If set to Infinity, " + "the macro expander will try to fully expand as in LaTeX.",
    processor: n => Math.max(0, n),
    cli: "-e, --max-expand <n>",
    cliProcessor: n => n === "Infinity" ? Infinity : parseInt(n)
  },
  globalGroup: {
    type: "boolean",
    cli: false
  }
};
function getDefaultValue(schema) {
  if ("default" in schema) {
    return schema.default;
  }
  const type = schema.type;
  const defaultType = Array.isArray(type) ? type[0] : type;
  if (typeof defaultType !== 'string') {
    return defaultType.enum[0];
  }
  switch (defaultType) {
    case 'boolean':
      return false;
    case 'string':
      return '';
    case 'number':
      return 0;
    case 'object':
      return {};
  }
}

/**
 * The main Settings object
 *
 * The current options stored are:
 *  - displayMode: Whether the expression should be typeset as inline math
 *                 (false, the default), meaning that the math starts in
 *                 \textstyle and is placed in an inline-block); or as display
 *                 math (true), meaning that the math starts in \displaystyle
 *                 and is placed in a block with vertical margin.
 */
class Settings {
  constructor(options) {
    if (options === void 0) {
      options = {};
    }
    // allow null options
    options = options || {};
    for (const prop of Object.keys(SETTINGS_SCHEMA)) {
      const schema = SETTINGS_SCHEMA[prop];
      const optionValue = options[prop];
      // TODO: validate options
      this[prop] = optionValue !== undefined ? schema.processor ? schema.processor(optionValue) : optionValue : getDefaultValue(schema);
    }
  }

  /**
   * Report nonstrict (non-LaTeX-compatible) input.
   * Can safely not be called if `this.strict` is false in JavaScript.
   */
  reportNonstrict(errorCode, errorMsg, token) {
    let strict = this.strict;
    if (typeof strict === "function") {
      // Allow return value of strict function to be boolean or string
      // (or null/undefined, meaning no further processing).
      strict = strict(errorCode, errorMsg, token);
    }
    if (!strict || strict === "ignore") {
      return;
    } else if (strict === true || strict === "error") {
      throw new src_ParseError("LaTeX-incompatible input and strict mode is set to 'error': " + (errorMsg + " [" + errorCode + "]"), token);
    } else if (strict === "warn") {
      typeof console !== "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (errorMsg + " [" + errorCode + "]"));
    } else {
      // won't happen in type-safe code
      typeof console !== "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + strict + "': " + errorMsg + " [" + errorCode + "]"));
    }
  }

  /**
   * Check whether to apply strict (LaTeX-adhering) behavior for unusual
   * input (like `\\`).  Unlike `nonstrict`, will not throw an error;
   * instead, "error" translates to a return value of `true`, while "ignore"
   * translates to a return value of `false`.  May still print a warning:
   * "warn" prints a warning and returns `false`.
   * This is for the second category of `errorCode`s listed in the README.
   */
  useStrictBehavior(errorCode, errorMsg, token) {
    let strict = this.strict;
    if (typeof strict === "function") {
      // Allow return value of strict function to be boolean or string
      // (or null/undefined, meaning no further processing).
      // But catch any exceptions thrown by function, treating them
      // like "error".
      try {
        strict = strict(errorCode, errorMsg, token);
      } catch (error) {
        strict = "error";
      }
    }
    if (!strict || strict === "ignore") {
      return false;
    } else if (strict === true || strict === "error") {
      return true;
    } else if (strict === "warn") {
      typeof console !== "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (errorMsg + " [" + errorCode + "]"));
      return false;
    } else {
      // won't happen in type-safe code
      typeof console !== "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + strict + "': " + errorMsg + " [" + errorCode + "]"));
      return false;
    }
  }

  /**
   * Check whether to test potentially dangerous input, and return
   * `true` (trusted) or `false` (untrusted).  The sole argument `context`
   * should be an object with `command` field specifying the relevant LaTeX
   * command (as a string starting with `\`), and any other arguments, etc.
   * If `context` has a `url` field, a `protocol` field will automatically
   * get added by this function (changing the specified object).
   */
  isTrusted(context) {
    if ("url" in context && context.url && !context.protocol) {
      const protocol = protocolFromUrl(context.url);
      if (protocol == null) {
        return false;
      }
      context.protocol = protocol;
    }
    const trust = typeof this.trust === "function" ? this.trust(context) : this.trust;
    return Boolean(trust);
  }
}
;// ./src/Style.ts
/**
 * This file contains information and classes for the various kinds of styles
 * used in TeX. It provides a generic `Style` class, which holds information
 * about a specific style. It then provides instances of all the different kinds
 * of styles possible, and provides functions to move between them and get
 * information about them.
 */

/**
 * The main style class. Contains a unique id for the style, a size (which is
 * the same for cramped and uncramped version of a style), and a cramped flag.
 */
class Style {
  constructor(id, size, cramped) {
    this.id = id;
    this.size = size;
    this.cramped = cramped;
  }

  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return styles[sup[this.id]];
  }

  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return styles[sub[this.id]];
  }

  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return styles[fracNum[this.id]];
  }

  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return styles[fracDen[this.id]];
  }

  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return styles[cramp[this.id]];
  }

  /**
   * Get a text or display version of this style.
   */
  text() {
    return styles[Style_text[this.id]];
  }

  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}

// Export an interface for type checking, but don't expose the implementation.
// This way, no more styles can be generated.

// IDs of the different styles
const D = 0;
const Dc = 1;
const T = 2;
const Tc = 3;
const S = 4;
const Sc = 5;
const SS = 6;
const SSc = 7;

// Instances of the different styles
const styles = [new Style(D, 0, false), new Style(Dc, 0, true), new Style(T, 1, false), new Style(Tc, 1, true), new Style(S, 2, false), new Style(Sc, 2, true), new Style(SS, 3, false), new Style(SSc, 3, true)];

// Lookup tables for switching from one style to another
const sup = [S, Sc, S, Sc, SS, SSc, SS, SSc];
const sub = [Sc, Sc, Sc, Sc, SSc, SSc, SSc, SSc];
const fracNum = [T, Tc, S, Sc, SS, SSc, SS, SSc];
const fracDen = [Tc, Tc, Sc, Sc, SSc, SSc, SSc, SSc];
const cramp = [Dc, Dc, Tc, Tc, Sc, Sc, SSc, SSc];
const Style_text = [D, Dc, T, Tc, T, Tc, T, Tc];

// We only export some of the styles.
/* harmony default export */ var src_Style = ({
  DISPLAY: styles[D],
  TEXT: styles[T],
  SCRIPT: styles[S],
  SCRIPTSCRIPT: styles[SS]
});
;// ./src/unicodeScripts.ts
/*
 * This file defines the Unicode scripts and script families that we
 * support. To add new scripts or families, just add a new entry to the
 * scriptData array below. Adding scripts to the scriptData array allows
 * characters from that script to appear in \text{} environments.
 */

/**
 * Each script or script family has a name and an array of blocks.
 * Each block is an array of two numbers which specify the start and
 * end points (inclusive) of a block of Unicode codepoints.
 */

/**
 * Unicode block data for the families of scripts we support in \text{}.
 * Scripts only need to appear here if they do not have font metrics.
 */
const scriptData = [{
  // Latin characters beyond the Latin-1 characters we have metrics for.
  // Needed for Czech, Hungarian and Turkish text, for example.
  name: 'latin',
  blocks: [[0x0100, 0x024f],
  // Latin Extended-A and Latin Extended-B
  [0x0300, 0x036f] // Combining Diacritical marks
  ]
}, {
  // The Cyrillic script used by Russian and related languages.
  // A Cyrillic subset used to be supported as explicitly defined
  // symbols in symbols.js
  name: 'cyrillic',
  blocks: [[0x0400, 0x04ff]]
}, {
  // Armenian
  name: 'armenian',
  blocks: [[0x0530, 0x058F]]
}, {
  // The Brahmic scripts of South and Southeast Asia
  // Devanagari (0900–097F)
  // Bengali (0980–09FF)
  // Gurmukhi (0A00–0A7F)
  // Gujarati (0A80–0AFF)
  // Oriya (0B00–0B7F)
  // Tamil (0B80–0BFF)
  // Telugu (0C00–0C7F)
  // Kannada (0C80–0CFF)
  // Malayalam (0D00–0D7F)
  // Sinhala (0D80–0DFF)
  // Thai (0E00–0E7F)
  // Lao (0E80–0EFF)
  // Tibetan (0F00–0FFF)
  // Myanmar (1000–109F)
  name: 'brahmic',
  blocks: [[0x0900, 0x109F]]
}, {
  name: 'georgian',
  blocks: [[0x10A0, 0x10ff]]
}, {
  // Chinese and Japanese.
  // The "k" in cjk is for Korean, but we've separated Korean out
  name: "cjk",
  blocks: [[0x3000, 0x30FF],
  // CJK symbols and punctuation, Hiragana, Katakana
  [0x4E00, 0x9FAF],
  // CJK ideograms
  [0xFF00, 0xFF60] // Fullwidth punctuation
  // TODO: add halfwidth Katakana and Romanji glyphs
  ]
}, {
  // Korean
  name: 'hangul',
  blocks: [[0xAC00, 0xD7AF]]
}];

/**
 * Given a codepoint, return the name of the script or script family
 * it is from, or null if it is not part of a known block
 */
function scriptFromCodepoint(codepoint) {
  for (let i = 0; i < scriptData.length; i++) {
    const script = scriptData[i];
    for (let i = 0; i < script.blocks.length; i++) {
      const block = script.blocks[i];
      if (codepoint >= block[0] && codepoint <= block[1]) {
        return script.name;
      }
    }
  }
  return null;
}

/**
 * A flattened version of all the supported blocks in a single array.
 * This is an optimization to make supportedCodepoint() fast.
 */
const allBlocks = [];
scriptData.forEach(s => s.blocks.forEach(b => allBlocks.push(...b)));

/**
 * Given a codepoint, return true if it falls within one of the
 * scripts or script families defined above and false otherwise.
 *
 * Micro benchmarks shows that this is faster than
 * /[\u3000-\u30FF\u4E00-\u9FAF\uFF00-\uFF60\uAC00-\uD7AF\u0900-\u109F]/.test()
 * in Firefox, Chrome and Node.
 */
function supportedCodepoint(codepoint) {
  for (let i = 0; i < allBlocks.length; i += 2) {
    if (codepoint >= allBlocks[i] && codepoint <= allBlocks[i + 1]) {
      return true;
    }
  }
  return false;
}
;// ./src/svgGeometry.ts
/**
 * This file provides support to domTree.js and delimiter.js.
 * It's a storehouse of path geometry for SVG images.
 */

// In all paths below, the viewBox-to-em scale is 1000:1.

// Second Brush Stroke
//    Low resolution monitors struggle to display images in fine detail.
//    So browsers apply anti-aliasing. A long straight arrow shaft therefore
//    will sometimes appear as if it has a blurred edge.

//    To mitigate this, these SVG files contain a second "brush-stroke" on the
//    arrow shafts. That is, a second long thin rectangular SVG path has been
//    written directly on top of each arrow shaft. This reinforcement causes
//    some of the screen pixels to display as black instead of the anti-aliased
//    gray pixel that a  single path would generate. So we get arrow shafts
//    whose edges appear to be sharper.
const doubleBrushStroke = svgPath => svgPath + " " + svgPath;
const hLinePad = 80; // padding above a sqrt vinculum. Prevents image cropping.

// The vinculum of a \sqrt can be made thicker by a KaTeX rendering option.
// Think of variable extraVinculum as two detours in the SVG path.
// The detour begins at the lower left of the area labeled extraVinculum below.
// The detour proceeds one extraVinculum distance up and slightly to the right,
// displacing the radiused corner between surd and vinculum. The radius is
// traversed as usual, then the detour resumes. It goes right, to the end of
// the very long vinculum, then down one extraVinculum distance,
// after which it resumes regular path geometry for the radical.
/*                                                  vinculum
                                                   /
         /▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒←extraVinculum
        / █████████████████████←0.04em (40 unit) std vinculum thickness
       / /
      / /
     / /\
    / / surd
*/

const sqrtMain = function (extraVinculum, hLinePad) {
  // sqrtMain path geometry is from glyph U221A in the font KaTeX Main
  return "M95," + (622 + extraVinculum + hLinePad) + "\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl" + extraVinculum / 2.075 + " -" + extraVinculum + "\nc5.3,-9.3,12,-14,20,-14\nH400000v" + (40 + extraVinculum) + "H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM" + (834 + extraVinculum) + " " + hLinePad + "h400000v" + (40 + extraVinculum) + "h-400000z";
};
const sqrtSize1 = function (extraVinculum, hLinePad) {
  // size1 is from glyph U221A in the font KaTeX_Size1-Regular
  return "M263," + (601 + extraVinculum + hLinePad) + "c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl" + extraVinculum / 2.084 + " -" + extraVinculum + "\nc4.7,-7.3,11,-11,19,-11\nH40000v" + (40 + extraVinculum) + "H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM" + (1001 + extraVinculum) + " " + hLinePad + "h400000v" + (40 + extraVinculum) + "h-400000z";
};
const sqrtSize2 = function (extraVinculum, hLinePad) {
  // size2 is from glyph U221A in the font KaTeX_Size2-Regular
  return "M983 " + (10 + extraVinculum + hLinePad) + "\nl" + extraVinculum / 3.13 + " -" + extraVinculum + "\nc4,-6.7,10,-10,18,-10 H400000v" + (40 + extraVinculum) + "\nH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7\ns-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744\nc-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30\nc26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722\nc56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5\nc53.7,-170.3,84.5,-266.8,92.5,-289.5z\nM" + (1001 + extraVinculum) + " " + hLinePad + "h400000v" + (40 + extraVinculum) + "h-400000z";
};
const sqrtSize3 = function (extraVinculum, hLinePad) {
  // size3 is from glyph U221A in the font KaTeX_Size3-Regular
  return "M424," + (2398 + extraVinculum + hLinePad) + "\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl" + extraVinculum / 4.223 + " -" + extraVinculum + "c4,-6.7,10,-10,18,-10 H400000\nv" + (40 + extraVinculum) + "H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M" + (1001 + extraVinculum) + " " + hLinePad + "\nh400000v" + (40 + extraVinculum) + "h-400000z";
};
const sqrtSize4 = function (extraVinculum, hLinePad) {
  // size4 is from glyph U221A in the font KaTeX_Size4-Regular
  return "M473," + (2713 + extraVinculum + hLinePad) + "\nc339.3,-1799.3,509.3,-2700,510,-2702 l" + extraVinculum / 5.298 + " -" + extraVinculum + "\nc3.3,-7.3,9.3,-11,18,-11 H400000v" + (40 + extraVinculum) + "H1017.7\ns-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200\nc0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26\ns76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,\n606zM" + (1001 + extraVinculum) + " " + hLinePad + "h400000v" + (40 + extraVinculum) + "H1017.7z";
};
const phasePath = function (y) {
  const x = y / 2; // x coordinate at top of angle
  return "M400000 " + y + " H0 L" + x + " 0 l65 45 L145 " + (y - 80) + " H400000z";
};
const sqrtTall = function (extraVinculum, hLinePad, viewBoxHeight) {
  // sqrtTall is from glyph U23B7 in the font KaTeX_Size4-Regular
  // One path edge has a variable length. It runs vertically from the vinculum
  // to a point near (14 units) the bottom of the surd. The vinculum
  // is normally 40 units thick. So the length of the line in question is:
  const vertSegment = viewBoxHeight - 54 - hLinePad - extraVinculum;
  return "M702 " + (extraVinculum + hLinePad) + "H400000" + (40 + extraVinculum) + "\nH742v" + vertSegment + "l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1\nh-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170\nc-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667\n219 661 l218 661zM702 " + hLinePad + "H400000v" + (40 + extraVinculum) + "H742z";
};
const sqrtPath = function (size, extraVinculum, viewBoxHeight) {
  extraVinculum = 1000 * extraVinculum; // Convert from document ems to viewBox.
  let path = "";
  switch (size) {
    case "sqrtMain":
      path = sqrtMain(extraVinculum, hLinePad);
      break;
    case "sqrtSize1":
      path = sqrtSize1(extraVinculum, hLinePad);
      break;
    case "sqrtSize2":
      path = sqrtSize2(extraVinculum, hLinePad);
      break;
    case "sqrtSize3":
      path = sqrtSize3(extraVinculum, hLinePad);
      break;
    case "sqrtSize4":
      path = sqrtSize4(extraVinculum, hLinePad);
      break;
    case "sqrtTall":
      path = sqrtTall(extraVinculum, hLinePad, viewBoxHeight);
  }
  return path;
};
const innerPath = function (name, height) {
  // The inner part of stretchy tall delimiters
  switch (name) {
    case "\u239c":
      return doubleBrushStroke("M291 0 H417 V" + height + " H291z");
    case "\u2223":
      return doubleBrushStroke("M145 0 H188 V" + height + " H145z");
    case "\u2225":
      return doubleBrushStroke("M145 0 H188 V" + height + " H145z") + doubleBrushStroke("M367 0 H410 V" + height + " H367z");
    case "\u239f":
      return doubleBrushStroke("M457 0 H583 V" + height + " H457z");
    case "\u23a2":
      return doubleBrushStroke("M319 0 H403 V" + height + " H319z");
    case "\u23a5":
      return doubleBrushStroke("M263 0 H347 V" + height + " H263z");
    case "\u23aa":
      return doubleBrushStroke("M384 0 H504 V" + height + " H384z");
    case "\u23d0":
      return doubleBrushStroke("M312 0 H355 V" + height + " H312z");
    case "\u2016":
      return doubleBrushStroke("M257 0 H300 V" + height + " H257z") + doubleBrushStroke("M478 0 H521 V" + height + " H478z");
    default:
      return "";
  }
};
const path = {
  // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
  doubleleftarrow: "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",
  // doublerightarrow is from glyph U+21D2 in font KaTeX Main
  doublerightarrow: "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",
  // leftarrow is from glyph U+2190 in font KaTeX Main
  leftarrow: "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",
  // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
  leftbrace: "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",
  leftbraceunder: "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",
  // overgroup is from the MnSymbol package (public domain)
  leftgroup: "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",
  leftgroupunder: "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",
  // Harpoons are from glyph U+21BD in font KaTeX Main
  leftharpoon: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",
  leftharpoonplus: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",
  leftharpoondown: "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",
  leftharpoondownplus: "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",
  // hook is from glyph U+21A9 in font KaTeX Main
  lefthook: "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",
  leftlinesegment: doubleBrushStroke("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),
  leftbracketunder: doubleBrushStroke("M0 0 h120 V290 H399995 v120 H0z"),
  leftbracketover: doubleBrushStroke("M0 440 h120 V150 H399995 v-120 H0z"),
  leftmapsto: doubleBrushStroke("M40 281 V448H0V74H40V241H400000v40z"),
  // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
  leftToFrom: "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",
  longequal: doubleBrushStroke("M0 50 h400000 v40H0z m0 194h40000v40H0z"),
  midbrace: "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",
  midbraceunder: "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",
  oiintSize1: "M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z",
  oiintSize2: "M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z",
  oiiintSize1: "M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z",
  oiiintSize2: "M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z",
  rightarrow: "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",
  rightbrace: "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",
  rightbraceunder: "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",
  rightgroup: "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",
  rightgroupunder: "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",
  rightharpoon: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",
  rightharpoonplus: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",
  rightharpoondown: "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",
  rightharpoondownplus: "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",
  righthook: "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",
  rightlinesegment: doubleBrushStroke("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),
  rightbracketunder: doubleBrushStroke("M399995 0 h-120 V290 H0 v120 H400000z"),
  rightbracketover: doubleBrushStroke("M399995 440 h-120 V150 H0 v-120 H399995z"),
  rightToFrom: "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",
  // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
  twoheadleftarrow: "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",
  twoheadrightarrow: "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",
  // tilde1 is a modified version of a glyph from the MnSymbol package
  tilde1: "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",
  // ditto tilde2, tilde3, & tilde4
  tilde2: "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",
  tilde3: "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",
  tilde4: "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",
  // vec is from glyph U+20D7 in font KaTeX Main
  vec: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",
  // widehat1 is a modified version of a glyph from the MnSymbol package
  widehat1: "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",
  // ditto widehat2, widehat3, & widehat4
  widehat2: "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
  widehat3: "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
  widehat4: "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
  // widecheck paths are all inverted versions of widehat
  widecheck1: "M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z",
  widecheck2: "M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
  widecheck3: "M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
  widecheck4: "M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
  // The next ten paths support reaction arrows from the mhchem package.

  // Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
  // baraboveleftarrow is mostly from glyph U+2190 in font KaTeX Main
  baraboveleftarrow: "M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z",
  // rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
  rightarrowabovebar: "M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z",
  // The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
  // Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
  baraboveshortleftharpoon: "M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",
  rightharpoonaboveshortbar: "M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",
  shortbaraboveleftharpoon: "M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",
  shortrightharpoonabovebar: "M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z"
};
const tallDelim = function (label, midHeight) {
  switch (label) {
    case "lbrack":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + midHeight + " v1759 h347 v-84\nH403z M403 1759 V0 H319 V1759 v" + midHeight + " v1759 h84z";
    case "rbrack":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + midHeight + " v1759 H0 v84 H347z\nM347 1759 V0 H263 V1759 v" + midHeight + " v1759 h84z";
    case "vert":
      return "M145 15 v585 v" + midHeight + " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" + -midHeight + " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v" + midHeight + " v585 h43z";
    case "doublevert":
      return "M145 15 v585 v" + midHeight + " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" + -midHeight + " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v" + midHeight + " v585 h43z\nM367 15 v585 v" + midHeight + " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" + -midHeight + " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M410 15 H367 v585 v" + midHeight + " v585 h43z";
    case "lfloor":
      return "M319 602 V0 H403 V602 v" + midHeight + " v1715 h263 v84 H319z\nMM319 602 V0 H403 V602 v" + midHeight + " v1715 H319z";
    case "rfloor":
      return "M319 602 V0 H403 V602 v" + midHeight + " v1799 H0 v-84 H319z\nMM319 602 V0 H403 V602 v" + midHeight + " v1715 H319z";
    case "lceil":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + midHeight + " v602 h84z\nM403 1759 V0 H319 V1759 v" + midHeight + " v602 h84z";
    case "rceil":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + midHeight + " v602 h84z\nM347 1759 V0 h-84 V1759 v" + midHeight + " v602 h84z";
    case "lparen":
      return "M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0," + (midHeight + 84) + "c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-" + (midHeight + 92) + "c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z";
    case "rparen":
      return "M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0," + (midHeight + 9) + "\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-" + (midHeight + 144) + "c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z";
    default:
      // We should not ever get here.
      throw new Error("Unknown stretchy delimiter.");
  }
};
;// ./src/tree.ts
// To ensure that all nodes have compatible signatures for these methods.

/**
 * This node represents a document fragment, which contains elements, but when
 * placed into the DOM doesn't have any representation itself. It only contains
 * children and doesn't have any DOM node properties.
 */
class DocumentFragment {
  // Never used; needed for satisfying interface.

  constructor(children) {
    this.children = children;
    this.classes = [];
    this.height = 0;
    this.depth = 0;
    this.maxFontSize = 0;
    this.style = {};
  }
  hasClass(className) {
    return this.classes.includes(className);
  }

  /** Convert the fragment into a node. */
  toNode() {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < this.children.length; i++) {
      frag.appendChild(this.children[i].toNode());
    }
    return frag;
  }

  /** Convert the fragment into HTML markup. */
  toMarkup() {
    let markup = "";

    // Simply concatenate the markup for the children together.
    for (let i = 0; i < this.children.length; i++) {
      markup += this.children[i].toMarkup();
    }
    return markup;
  }

  /**
   * Converts the math node into a string, similar to innerText. Applies to
   * MathDomNode's only.
   */
  toText() {
    // To avoid this, we would subclass documentFragment separately for
    // MathML, but polyfills for subclassing is expensive per PR 1469.
    // TODO(ts): Only works for ChildType = MathDomNode.
    const toText = child => child.toText();
    return this.children.map(toText).join("");
  }
}
;// ./src/units.ts
/**
 * This file does conversion between units.  In particular, it provides
 * calculateSize to convert other units into ems.
 */


// This table gives the number of TeX pts in one of each *absolute* TeX unit.
// Thus, multiplying a length by this number converts the length from units
// into pts.  Dividing the result by ptPerEm gives the number of ems
// *assuming* a font size of ptPerEm (normal size, normal style).
const ptPerUnit = {
  // https://en.wikibooks.org/wiki/LaTeX/Lengths and
  // https://tex.stackexchange.com/a/8263
  "pt": 1,
  // TeX point
  "mm": 7227 / 2540,
  // millimeter
  "cm": 7227 / 254,
  // centimeter
  "in": 72.27,
  // inch
  "bp": 803 / 800,
  // big (PostScript) points
  "pc": 12,
  // pica
  "dd": 1238 / 1157,
  // didot
  "cc": 14856 / 1157,
  // cicero (12 didot)
  "nd": 685 / 642,
  // new didot
  "nc": 1370 / 107,
  // new cicero (12 new didot)
  "sp": 1 / 65536,
  // scaled point (TeX's internal smallest unit)
  // https://tex.stackexchange.com/a/41371
  "px": 803 / 800 // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
};

// Dictionary of relative units, for fast validity testing.
const relativeUnit = {
  "ex": true,
  "em": true,
  "mu": true
};
/**
 * Determine whether the specified unit (either a string defining the unit
 * or a "size" parse node containing a unit field) is valid.
 */
const validUnit = function (unit) {
  if (typeof unit !== "string") {
    unit = unit.unit;
  }
  return unit in ptPerUnit || unit in relativeUnit || unit === "ex";
};

/*
 * Convert a "size" parse node (with numeric "number" and string "unit" fields,
 * as parsed by functions.js argType "size") into a CSS em value for the
 * current style/scale.  `options` gives the current options.
 */
const calculateSize = function (sizeValue, options) {
  let scale;
  if (sizeValue.unit in ptPerUnit) {
    // Absolute units
    scale = ptPerUnit[sizeValue.unit] // Convert unit to pt
    / options.fontMetrics().ptPerEm // Convert pt to CSS em
    / options.sizeMultiplier; // Unscale to make absolute units
  } else if (sizeValue.unit === "mu") {
    // `mu` units scale with scriptstyle/scriptscriptstyle.
    scale = options.fontMetrics().cssEmPerMu;
  } else {
    // Other relative units always refer to the *textstyle* font
    // in the current size.
    let unitOptions;
    if (options.style.isTight()) {
      // isTight() means current style is script/scriptscript.
      unitOptions = options.havingStyle(options.style.text());
    } else {
      unitOptions = options;
    }
    // TODO: In TeX these units are relative to the quad of the current
    // *text* font, e.g. cmr10. KaTeX instead uses values from the
    // comparably-sized *Computer Modern symbol* font. At 10pt, these
    // match. At 7pt and 5pt, they differ: cmr7=1.138894, cmsy7=1.170641;
    // cmr5=1.361133, cmsy5=1.472241. Consider $\scriptsize a\kern1emb$.
    // TeX \showlists shows a kern of 1.13889 * fontsize;
    // KaTeX shows a kern of 1.171 * fontsize.
    if (sizeValue.unit === "ex") {
      scale = unitOptions.fontMetrics().xHeight;
    } else if (sizeValue.unit === "em") {
      scale = unitOptions.fontMetrics().quad;
    } else {
      throw new src_ParseError("Invalid unit: '" + sizeValue.unit + "'");
    }
    if (unitOptions !== options) {
      scale *= unitOptions.sizeMultiplier / options.sizeMultiplier;
    }
  }
  return Math.min(sizeValue.number * scale, options.maxSize);
};

/**
 * Round `n` to 4 decimal places, or to the nearest 1/10,000th em. See
 * https://github.com/KaTeX/KaTeX/pull/2460.
 */
const makeEm = function (n) {
  return +n.toFixed(4) + "em";
};
;// ./src/domTree.ts
/**
 * These objects store the data about the DOM nodes we create, as well as some
 * extra data. They can then be transformed into real DOM nodes with the
 * `toNode` function or HTML markup using `toMarkup`. They are useful for both
 * storing extra properties on the nodes, as well as providing a way to easily
 * work with the DOM.
 *
 * Similar functions for working with MathML nodes exist in mathMLTree.js.
 *
 * TODO: refactor `span` and `anchor` into common superclass when
 * target environments support class inheritance
 */






/**
 * Create an HTML className based on a list of classes. In addition to joining
 * with spaces, we also remove empty classes.
 */
const createClass = function (classes) {
  return classes.filter(cls => cls).join(" ");
};
const initNode = function (classes, options, style) {
  this.classes = classes || [];
  this.attributes = {};
  this.height = 0;
  this.depth = 0;
  this.maxFontSize = 0;
  this.style = style || {};
  if (options) {
    if (options.style.isTight()) {
      this.classes.push("mtight");
    }
    const color = options.getColor();
    if (color) {
      this.style.color = color;
    }
  }
};

/**
 * Convert into an HTML node
 */
const toNode = function (tagName) {
  const node = document.createElement(tagName);

  // Apply the class
  node.className = createClass(this.classes);

  // Apply inline styles
  for (const key of Object.keys(this.style)) {
    node.style[key] = this.style[key];
  }

  // Apply attributes
  for (const attr of Object.keys(this.attributes)) {
    node.setAttribute(attr, this.attributes[attr]);
  }

  // Append the children, also as HTML nodes
  for (let i = 0; i < this.children.length; i++) {
    node.appendChild(this.children[i].toNode());
  }
  return node;
};

/**
 * https://w3c.github.io/html-reference/syntax.html#syntax-attributes
 *
 * > Attribute Names must consist of one or more characters
 * other than the space characters, U+0000 NULL,
 * '"', "'", ">", "/", "=", the control characters,
 * and any characters that are not defined by Unicode.
 */
const invalidAttributeNameRegex = /[\s"'>/=\x00-\x1f]/;

/**
 * Convert into an HTML markup string
 */
const toMarkup = function (tagName) {
  let markup = "<" + tagName;

  // Add the class
  if (this.classes.length) {
    markup += " class=\"" + utils_escape(createClass(this.classes)) + "\"";
  }
  let styles = "";

  // Add the styles, after hyphenation
  for (const key of Object.keys(this.style)) {
    styles += hyphenate(key) + ":" + this.style[key] + ";";
  }
  if (styles) {
    markup += " style=\"" + utils_escape(styles) + "\"";
  }

  // Add the attributes
  for (const attr of Object.keys(this.attributes)) {
    if (invalidAttributeNameRegex.test(attr)) {
      throw new src_ParseError("Invalid attribute name '" + attr + "'");
    }
    markup += " " + attr + "=\"" + utils_escape(this.attributes[attr]) + "\"";
  }
  markup += ">";

  // Add the markup of the children, also as markup
  for (let i = 0; i < this.children.length; i++) {
    markup += this.children[i].toMarkup();
  }
  markup += "</" + tagName + ">";
  return markup;
};

// Making the type below exact with all optional fields doesn't work due to
// - https://github.com/facebook/flow/issues/4582
// - https://github.com/facebook/flow/issues/5688
// However, since *all* fields are optional, $Shape<> works as suggested in 5688
// above.
// This type does not include all CSS properties. Additional properties should
// be added as needed.

// Span wrapping other DOM nodes.

// Span wrapping an SVG node.

/**
 * This node represents a span node, with a className, a list of children, and
 * an inline style. It also contains information about its height, depth, and
 * maxFontSize.
 *
 * Represents two types with different uses: SvgSpan to wrap an SVG and DomSpan
 * otherwise. This typesafety is important when HTML builders access a span's
 * children.
 */
class Span {
  constructor(classes, children, options, style) {
    initNode.call(this, classes, options, style);
    this.children = children || [];
  }

  /**
   * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
   * all browsers support attributes the same, and having too many custom
   * attributes is probably bad.
   */
  setAttribute(attribute, value) {
    this.attributes[attribute] = value;
  }
  hasClass(className) {
    return this.classes.includes(className);
  }
  toNode() {
    return toNode.call(this, "span");
  }
  toMarkup() {
    return toMarkup.call(this, "span");
  }
}

/**
 * This node represents an anchor (<a>) element with a hyperlink.  See `span`
 * for further details.
 */
class Anchor {
  constructor(href, classes, children, options) {
    initNode.call(this, classes, options);
    this.children = children || [];
    this.setAttribute('href', href);
  }
  setAttribute(attribute, value) {
    this.attributes[attribute] = value;
  }
  hasClass(className) {
    return this.classes.includes(className);
  }
  toNode() {
    return toNode.call(this, "a");
  }
  toMarkup() {
    return toMarkup.call(this, "a");
  }
}

/**
 * This node represents an image embed (<img>) element.
 */
class Img {
  constructor(src, alt, style) {
    this.alt = alt;
    this.src = src;
    this.classes = ["mord"];
    this.height = 0;
    this.depth = 0;
    this.maxFontSize = 0;
    this.style = style;
  }
  hasClass(className) {
    return this.classes.includes(className);
  }
  toNode() {
    const node = document.createElement("img");
    node.src = this.src;
    node.alt = this.alt;
    node.className = "mord";

    // Apply inline styles
    for (const key of Object.keys(this.style)) {
      node.style[key] = this.style[key];
    }
    return node;
  }
  toMarkup() {
    let markup = "<img src=\"" + utils_escape(this.src) + "\"" + (" alt=\"" + utils_escape(this.alt) + "\"");

    // Add the styles, after hyphenation
    let styles = "";
    for (const key of Object.keys(this.style)) {
      styles += hyphenate(key) + ":" + this.style[key] + ";";
    }
    if (styles) {
      markup += " style=\"" + utils_escape(styles) + "\"";
    }
    markup += "'/>";
    return markup;
  }
}
const iCombinations = {
  'î': '\u0131\u0302',
  'ï': '\u0131\u0308',
  'í': '\u0131\u0301',
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  'ì': '\u0131\u0300'
};

/**
 * A symbol node contains information about a single symbol. It either renders
 * to a single text node, or a span with a single text node in it, depending on
 * whether it has CSS classes, styles, or needs italic correction.
 */
class SymbolNode {
  constructor(text, height, depth, italic, skew, width, classes, style) {
    this.text = text;
    this.height = height || 0;
    this.depth = depth || 0;
    this.italic = italic || 0;
    this.skew = skew || 0;
    this.width = width || 0;
    this.classes = classes || [];
    this.style = style || {};
    this.maxFontSize = 0;

    // Mark text from non-Latin scripts with specific classes so that we
    // can specify which fonts to use.  This allows us to render these
    // characters with a serif font in situations where the browser would
    // either default to a sans serif or render a placeholder character.
    // We use CSS class names like cjk_fallback, hangul_fallback and
    // brahmic_fallback. See ./unicodeScripts.js for the set of possible
    // script names
    const script = scriptFromCodepoint(this.text.charCodeAt(0));
    if (script) {
      this.classes.push(script + "_fallback");
    }
    if (/[îïíì]/.test(this.text)) {
      // add ī when we add Extended Latin
      this.text = iCombinations[this.text];
    }
  }
  hasClass(className) {
    return this.classes.includes(className);
  }

  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    const node = document.createTextNode(this.text);
    let span = null;
    if (this.italic > 0) {
      span = document.createElement("span");
      span.style.marginRight = makeEm(this.italic);
    }
    if (this.classes.length > 0) {
      span = span || document.createElement("span");
      span.className = createClass(this.classes);
    }
    for (const key of Object.keys(this.style)) {
      span = span || document.createElement("span");
      span.style[key] = this.style[key];
    }
    if (span) {
      span.appendChild(node);
      return span;
    } else {
      return node;
    }
  }

  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    // TODO(alpert): More duplication than I'd like from
    // span.prototype.toMarkup and symbolNode.prototype.toNode...
    let needsSpan = false;
    let markup = "<span";
    if (this.classes.length) {
      needsSpan = true;
      markup += " class=\"";
      markup += utils_escape(createClass(this.classes));
      markup += "\"";
    }
    let styles = "";
    if (this.italic > 0) {
      styles += "margin-right:" + makeEm(this.italic) + ";";
    }
    for (const key of Object.keys(this.style)) {
      styles += hyphenate(key) + ":" + this.style[key] + ";";
    }
    if (styles) {
      needsSpan = true;
      markup += " style=\"" + utils_escape(styles) + "\"";
    }
    const escaped = utils_escape(this.text);
    if (needsSpan) {
      markup += ">";
      markup += escaped;
      markup += "</span>";
      return markup;
    } else {
      return escaped;
    }
  }
}

/**
 * SVG nodes are used to render stretchy wide elements.
 */
class SvgNode {
  constructor(children, attributes) {
    this.children = children || [];
    this.attributes = attributes || {};
  }
  toNode() {
    const svgNS = "http://www.w3.org/2000/svg";
    const node = document.createElementNS(svgNS, "svg");

    // Apply attributes
    for (const attr of Object.keys(this.attributes)) {
      node.setAttribute(attr, this.attributes[attr]);
    }
    for (let i = 0; i < this.children.length; i++) {
      node.appendChild(this.children[i].toNode());
    }
    return node;
  }
  toMarkup() {
    let markup = "<svg xmlns=\"http://www.w3.org/2000/svg\"";

    // Apply attributes
    for (const attr of Object.keys(this.attributes)) {
      markup += " " + attr + "=\"" + utils_escape(this.attributes[attr]) + "\"";
    }
    markup += ">";
    for (let i = 0; i < this.children.length; i++) {
      markup += this.children[i].toMarkup();
    }
    markup += "</svg>";
    return markup;
  }
}
class PathNode {
  constructor(pathName, alternate) {
    this.pathName = pathName;
    this.alternate = alternate; // Used only for \sqrt, \phase, & tall delims
  }
  toNode() {
    const svgNS = "http://www.w3.org/2000/svg";
    const node = document.createElementNS(svgNS, "path");
    if (this.alternate) {
      node.setAttribute("d", this.alternate);
    } else {
      node.setAttribute("d", path[this.pathName]);
    }
    return node;
  }
  toMarkup() {
    if (this.alternate) {
      return "<path d=\"" + utils_escape(this.alternate) + "\"/>";
    } else {
      return "<path d=\"" + utils_escape(path[this.pathName]) + "\"/>";
    }
  }
}
class LineNode {
  constructor(attributes) {
    this.attributes = attributes || {};
  }
  toNode() {
    const svgNS = "http://www.w3.org/2000/svg";
    const node = document.createElementNS(svgNS, "line");

    // Apply attributes
    for (const attr of Object.keys(this.attributes)) {
      node.setAttribute(attr, this.attributes[attr]);
    }
    return node;
  }
  toMarkup() {
    let markup = "<line";
    for (const attr of Object.keys(this.attributes)) {
      markup += " " + attr + "=\"" + utils_escape(this.attributes[attr]) + "\"";
    }
    markup += "/>";
    return markup;
  }
}
function assertSymbolDomNode(group) {
  if (group instanceof SymbolNode) {
    return group;
  } else {
    throw new Error("Expected symbolNode but got " + String(group) + ".");
  }
}
function assertSpan(group) {
  if (group instanceof Span) {
    return group;
  } else {
    throw new Error("Expected span<HtmlDomNode> but got " + String(group) + ".");
  }
}

/**
 * Whether an HtmlDomNode has HtmlDomNode children.
 * HtmlDomNode is a base type representing a union of
 * SymbolNode, SvgSpan, DomSpan, Anchor, and documentFragment.
 * In the last three cases, the children are HtmlDomNode[].
 */
const hasHtmlDomChildren = node => node instanceof Span || node instanceof Anchor || node instanceof DocumentFragment;
;// ./src/fontMetricsData.js
// This file is GENERATED by buildMetrics.sh. DO NOT MODIFY.
/* harmony default export */ var fontMetricsData = ({
  "AMS-Regular": {
    "32": [0, 0, 0, 0, 0.25],
    "65": [0, 0.68889, 0, 0, 0.72222],
    "66": [0, 0.68889, 0, 0, 0.66667],
    "67": [0, 0.68889, 0, 0, 0.72222],
    "68": [0, 0.68889, 0, 0, 0.72222],
    "69": [0, 0.68889, 0, 0, 0.66667],
    "70": [0, 0.68889, 0, 0, 0.61111],
    "71": [0, 0.68889, 0, 0, 0.77778],
    "72": [0, 0.68889, 0, 0, 0.77778],
    "73": [0, 0.68889, 0, 0, 0.38889],
    "74": [0.16667, 0.68889, 0, 0, 0.5],
    "75": [0, 0.68889, 0, 0, 0.77778],
    "76": [0, 0.68889, 0, 0, 0.66667],
    "77": [0, 0.68889, 0, 0, 0.94445],
    "78": [0, 0.68889, 0, 0, 0.72222],
    "79": [0.16667, 0.68889, 0, 0, 0.77778],
    "80": [0, 0.68889, 0, 0, 0.61111],
    "81": [0.16667, 0.68889, 0, 0, 0.77778],
    "82": [0, 0.68889, 0, 0, 0.72222],
    "83": [0, 0.68889, 0, 0, 0.55556],
    "84": [0, 0.68889, 0, 0, 0.66667],
    "85": [0, 0.68889, 0, 0, 0.72222],
    "86": [0, 0.68889, 0, 0, 0.72222],
    "87": [0, 0.68889, 0, 0, 1.0],
    "88": [0, 0.68889, 0, 0, 0.72222],
    "89": [0, 0.68889, 0, 0, 0.72222],
    "90": [0, 0.68889, 0, 0, 0.66667],
    "107": [0, 0.68889, 0, 0, 0.55556],
    "160": [0, 0, 0, 0, 0.25],
    "165": [0, 0.675, 0.025, 0, 0.75],
    "174": [0.15559, 0.69224, 0, 0, 0.94666],
    "240": [0, 0.68889, 0, 0, 0.55556],
    "295": [0, 0.68889, 0, 0, 0.54028],
    "710": [0, 0.825, 0, 0, 2.33334],
    "732": [0, 0.9, 0, 0, 2.33334],
    "770": [0, 0.825, 0, 0, 2.33334],
    "771": [0, 0.9, 0, 0, 2.33334],
    "989": [0.08167, 0.58167, 0, 0, 0.77778],
    "1008": [0, 0.43056, 0.04028, 0, 0.66667],
    "8245": [0, 0.54986, 0, 0, 0.275],
    "8463": [0, 0.68889, 0, 0, 0.54028],
    "8487": [0, 0.68889, 0, 0, 0.72222],
    "8498": [0, 0.68889, 0, 0, 0.55556],
    "8502": [0, 0.68889, 0, 0, 0.66667],
    "8503": [0, 0.68889, 0, 0, 0.44445],
    "8504": [0, 0.68889, 0, 0, 0.66667],
    "8513": [0, 0.68889, 0, 0, 0.63889],
    "8592": [-0.03598, 0.46402, 0, 0, 0.5],
    "8594": [-0.03598, 0.46402, 0, 0, 0.5],
    "8602": [-0.13313, 0.36687, 0, 0, 1.0],
    "8603": [-0.13313, 0.36687, 0, 0, 1.0],
    "8606": [0.01354, 0.52239, 0, 0, 1.0],
    "8608": [0.01354, 0.52239, 0, 0, 1.0],
    "8610": [0.01354, 0.52239, 0, 0, 1.11111],
    "8611": [0.01354, 0.52239, 0, 0, 1.11111],
    "8619": [0, 0.54986, 0, 0, 1.0],
    "8620": [0, 0.54986, 0, 0, 1.0],
    "8621": [-0.13313, 0.37788, 0, 0, 1.38889],
    "8622": [-0.13313, 0.36687, 0, 0, 1.0],
    "8624": [0, 0.69224, 0, 0, 0.5],
    "8625": [0, 0.69224, 0, 0, 0.5],
    "8630": [0, 0.43056, 0, 0, 1.0],
    "8631": [0, 0.43056, 0, 0, 1.0],
    "8634": [0.08198, 0.58198, 0, 0, 0.77778],
    "8635": [0.08198, 0.58198, 0, 0, 0.77778],
    "8638": [0.19444, 0.69224, 0, 0, 0.41667],
    "8639": [0.19444, 0.69224, 0, 0, 0.41667],
    "8642": [0.19444, 0.69224, 0, 0, 0.41667],
    "8643": [0.19444, 0.69224, 0, 0, 0.41667],
    "8644": [0.1808, 0.675, 0, 0, 1.0],
    "8646": [0.1808, 0.675, 0, 0, 1.0],
    "8647": [0.1808, 0.675, 0, 0, 1.0],
    "8648": [0.19444, 0.69224, 0, 0, 0.83334],
    "8649": [0.1808, 0.675, 0, 0, 1.0],
    "8650": [0.19444, 0.69224, 0, 0, 0.83334],
    "8651": [0.01354, 0.52239, 0, 0, 1.0],
    "8652": [0.01354, 0.52239, 0, 0, 1.0],
    "8653": [-0.13313, 0.36687, 0, 0, 1.0],
    "8654": [-0.13313, 0.36687, 0, 0, 1.0],
    "8655": [-0.13313, 0.36687, 0, 0, 1.0],
    "8666": [0.13667, 0.63667, 0, 0, 1.0],
    "8667": [0.13667, 0.63667, 0, 0, 1.0],
    "8669": [-0.13313, 0.37788, 0, 0, 1.0],
    "8672": [-0.064, 0.437, 0, 0, 1.334],
    "8674": [-0.064, 0.437, 0, 0, 1.334],
    "8705": [0, 0.825, 0, 0, 0.5],
    "8708": [0, 0.68889, 0, 0, 0.55556],
    "8709": [0.08167, 0.58167, 0, 0, 0.77778],
    "8717": [0, 0.43056, 0, 0, 0.42917],
    "8722": [-0.03598, 0.46402, 0, 0, 0.5],
    "8724": [0.08198, 0.69224, 0, 0, 0.77778],
    "8726": [0.08167, 0.58167, 0, 0, 0.77778],
    "8733": [0, 0.69224, 0, 0, 0.77778],
    "8736": [0, 0.69224, 0, 0, 0.72222],
    "8737": [0, 0.69224, 0, 0, 0.72222],
    "8738": [0.03517, 0.52239, 0, 0, 0.72222],
    "8739": [0.08167, 0.58167, 0, 0, 0.22222],
    "8740": [0.25142, 0.74111, 0, 0, 0.27778],
    "8741": [0.08167, 0.58167, 0, 0, 0.38889],
    "8742": [0.25142, 0.74111, 0, 0, 0.5],
    "8756": [0, 0.69224, 0, 0, 0.66667],
    "8757": [0, 0.69224, 0, 0, 0.66667],
    "8764": [-0.13313, 0.36687, 0, 0, 0.77778],
    "8765": [-0.13313, 0.37788, 0, 0, 0.77778],
    "8769": [-0.13313, 0.36687, 0, 0, 0.77778],
    "8770": [-0.03625, 0.46375, 0, 0, 0.77778],
    "8774": [0.30274, 0.79383, 0, 0, 0.77778],
    "8776": [-0.01688, 0.48312, 0, 0, 0.77778],
    "8778": [0.08167, 0.58167, 0, 0, 0.77778],
    "8782": [0.06062, 0.54986, 0, 0, 0.77778],
    "8783": [0.06062, 0.54986, 0, 0, 0.77778],
    "8785": [0.08198, 0.58198, 0, 0, 0.77778],
    "8786": [0.08198, 0.58198, 0, 0, 0.77778],
    "8787": [0.08198, 0.58198, 0, 0, 0.77778],
    "8790": [0, 0.69224, 0, 0, 0.77778],
    "8791": [0.22958, 0.72958, 0, 0, 0.77778],
    "8796": [0.08198, 0.91667, 0, 0, 0.77778],
    "8806": [0.25583, 0.75583, 0, 0, 0.77778],
    "8807": [0.25583, 0.75583, 0, 0, 0.77778],
    "8808": [0.25142, 0.75726, 0, 0, 0.77778],
    "8809": [0.25142, 0.75726, 0, 0, 0.77778],
    "8812": [0.25583, 0.75583, 0, 0, 0.5],
    "8814": [0.20576, 0.70576, 0, 0, 0.77778],
    "8815": [0.20576, 0.70576, 0, 0, 0.77778],
    "8816": [0.30274, 0.79383, 0, 0, 0.77778],
    "8817": [0.30274, 0.79383, 0, 0, 0.77778],
    "8818": [0.22958, 0.72958, 0, 0, 0.77778],
    "8819": [0.22958, 0.72958, 0, 0, 0.77778],
    "8822": [0.1808, 0.675, 0, 0, 0.77778],
    "8823": [0.1808, 0.675, 0, 0, 0.77778],
    "8828": [0.13667, 0.63667, 0, 0, 0.77778],
    "8829": [0.13667, 0.63667, 0, 0, 0.77778],
    "8830": [0.22958, 0.72958, 0, 0, 0.77778],
    "8831": [0.22958, 0.72958, 0, 0, 0.77778],
    "8832": [0.20576, 0.70576, 0, 0, 0.77778],
    "8833": [0.20576, 0.70576, 0, 0, 0.77778],
    "8840": [0.30274, 0.79383, 0, 0, 0.77778],
    "8841": [0.30274, 0.79383, 0, 0, 0.77778],
    "8842": [0.13597, 0.63597, 0, 0, 0.77778],
    "8843": [0.13597, 0.63597, 0, 0, 0.77778],
    "8847": [0.03517, 0.54986, 0, 0, 0.77778],
    "8848": [0.03517, 0.54986, 0, 0, 0.77778],
    "8858": [0.08198, 0.58198, 0, 0, 0.77778],
    "8859": [0.08198, 0.58198, 0, 0, 0.77778],
    "8861": [0.08198, 0.58198, 0, 0, 0.77778],
    "8862": [0, 0.675, 0, 0, 0.77778],
    "8863": [0, 0.675, 0, 0, 0.77778],
    "8864": [0, 0.675, 0, 0, 0.77778],
    "8865": [0, 0.675, 0, 0, 0.77778],
    "8872": [0, 0.69224, 0, 0, 0.61111],
    "8873": [0, 0.69224, 0, 0, 0.72222],
    "8874": [0, 0.69224, 0, 0, 0.88889],
    "8876": [0, 0.68889, 0, 0, 0.61111],
    "8877": [0, 0.68889, 0, 0, 0.61111],
    "8878": [0, 0.68889, 0, 0, 0.72222],
    "8879": [0, 0.68889, 0, 0, 0.72222],
    "8882": [0.03517, 0.54986, 0, 0, 0.77778],
    "8883": [0.03517, 0.54986, 0, 0, 0.77778],
    "8884": [0.13667, 0.63667, 0, 0, 0.77778],
    "8885": [0.13667, 0.63667, 0, 0, 0.77778],
    "8888": [0, 0.54986, 0, 0, 1.11111],
    "8890": [0.19444, 0.43056, 0, 0, 0.55556],
    "8891": [0.19444, 0.69224, 0, 0, 0.61111],
    "8892": [0.19444, 0.69224, 0, 0, 0.61111],
    "8901": [0, 0.54986, 0, 0, 0.27778],
    "8903": [0.08167, 0.58167, 0, 0, 0.77778],
    "8905": [0.08167, 0.58167, 0, 0, 0.77778],
    "8906": [0.08167, 0.58167, 0, 0, 0.77778],
    "8907": [0, 0.69224, 0, 0, 0.77778],
    "8908": [0, 0.69224, 0, 0, 0.77778],
    "8909": [-0.03598, 0.46402, 0, 0, 0.77778],
    "8910": [0, 0.54986, 0, 0, 0.76042],
    "8911": [0, 0.54986, 0, 0, 0.76042],
    "8912": [0.03517, 0.54986, 0, 0, 0.77778],
    "8913": [0.03517, 0.54986, 0, 0, 0.77778],
    "8914": [0, 0.54986, 0, 0, 0.66667],
    "8915": [0, 0.54986, 0, 0, 0.66667],
    "8916": [0, 0.69224, 0, 0, 0.66667],
    "8918": [0.0391, 0.5391, 0, 0, 0.77778],
    "8919": [0.0391, 0.5391, 0, 0, 0.77778],
    "8920": [0.03517, 0.54986, 0, 0, 1.33334],
    "8921": [0.03517, 0.54986, 0, 0, 1.33334],
    "8922": [0.38569, 0.88569, 0, 0, 0.77778],
    "8923": [0.38569, 0.88569, 0, 0, 0.77778],
    "8926": [0.13667, 0.63667, 0, 0, 0.77778],
    "8927": [0.13667, 0.63667, 0, 0, 0.77778],
    "8928": [0.30274, 0.79383, 0, 0, 0.77778],
    "8929": [0.30274, 0.79383, 0, 0, 0.77778],
    "8934": [0.23222, 0.74111, 0, 0, 0.77778],
    "8935": [0.23222, 0.74111, 0, 0, 0.77778],
    "8936": [0.23222, 0.74111, 0, 0, 0.77778],
    "8937": [0.23222, 0.74111, 0, 0, 0.77778],
    "8938": [0.20576, 0.70576, 0, 0, 0.77778],
    "8939": [0.20576, 0.70576, 0, 0, 0.77778],
    "8940": [0.30274, 0.79383, 0, 0, 0.77778],
    "8941": [0.30274, 0.79383, 0, 0, 0.77778],
    "8994": [0.19444, 0.69224, 0, 0, 0.77778],
    "8995": [0.19444, 0.69224, 0, 0, 0.77778],
    "9416": [0.15559, 0.69224, 0, 0, 0.90222],
    "9484": [0, 0.69224, 0, 0, 0.5],
    "9488": [0, 0.69224, 0, 0, 0.5],
    "9492": [0, 0.37788, 0, 0, 0.5],
    "9496": [0, 0.37788, 0, 0, 0.5],
    "9585": [0.19444, 0.68889, 0, 0, 0.88889],
    "9586": [0.19444, 0.74111, 0, 0, 0.88889],
    "9632": [0, 0.675, 0, 0, 0.77778],
    "9633": [0, 0.675, 0, 0, 0.77778],
    "9650": [0, 0.54986, 0, 0, 0.72222],
    "9651": [0, 0.54986, 0, 0, 0.72222],
    "9654": [0.03517, 0.54986, 0, 0, 0.77778],
    "9660": [0, 0.54986, 0, 0, 0.72222],
    "9661": [0, 0.54986, 0, 0, 0.72222],
    "9664": [0.03517, 0.54986, 0, 0, 0.77778],
    "9674": [0.11111, 0.69224, 0, 0, 0.66667],
    "9733": [0.19444, 0.69224, 0, 0, 0.94445],
    "10003": [0, 0.69224, 0, 0, 0.83334],
    "10016": [0, 0.69224, 0, 0, 0.83334],
    "10731": [0.11111, 0.69224, 0, 0, 0.66667],
    "10846": [0.19444, 0.75583, 0, 0, 0.61111],
    "10877": [0.13667, 0.63667, 0, 0, 0.77778],
    "10878": [0.13667, 0.63667, 0, 0, 0.77778],
    "10885": [0.25583, 0.75583, 0, 0, 0.77778],
    "10886": [0.25583, 0.75583, 0, 0, 0.77778],
    "10887": [0.13597, 0.63597, 0, 0, 0.77778],
    "10888": [0.13597, 0.63597, 0, 0, 0.77778],
    "10889": [0.26167, 0.75726, 0, 0, 0.77778],
    "10890": [0.26167, 0.75726, 0, 0, 0.77778],
    "10891": [0.48256, 0.98256, 0, 0, 0.77778],
    "10892": [0.48256, 0.98256, 0, 0, 0.77778],
    "10901": [0.13667, 0.63667, 0, 0, 0.77778],
    "10902": [0.13667, 0.63667, 0, 0, 0.77778],
    "10933": [0.25142, 0.75726, 0, 0, 0.77778],
    "10934": [0.25142, 0.75726, 0, 0, 0.77778],
    "10935": [0.26167, 0.75726, 0, 0, 0.77778],
    "10936": [0.26167, 0.75726, 0, 0, 0.77778],
    "10937": [0.26167, 0.75726, 0, 0, 0.77778],
    "10938": [0.26167, 0.75726, 0, 0, 0.77778],
    "10949": [0.25583, 0.75583, 0, 0, 0.77778],
    "10950": [0.25583, 0.75583, 0, 0, 0.77778],
    "10955": [0.28481, 0.79383, 0, 0, 0.77778],
    "10956": [0.28481, 0.79383, 0, 0, 0.77778],
    "57350": [0.08167, 0.58167, 0, 0, 0.22222],
    "57351": [0.08167, 0.58167, 0, 0, 0.38889],
    "57352": [0.08167, 0.58167, 0, 0, 0.77778],
    "57353": [0, 0.43056, 0.04028, 0, 0.66667],
    "57356": [0.25142, 0.75726, 0, 0, 0.77778],
    "57357": [0.25142, 0.75726, 0, 0, 0.77778],
    "57358": [0.41951, 0.91951, 0, 0, 0.77778],
    "57359": [0.30274, 0.79383, 0, 0, 0.77778],
    "57360": [0.30274, 0.79383, 0, 0, 0.77778],
    "57361": [0.41951, 0.91951, 0, 0, 0.77778],
    "57366": [0.25142, 0.75726, 0, 0, 0.77778],
    "57367": [0.25142, 0.75726, 0, 0, 0.77778],
    "57368": [0.25142, 0.75726, 0, 0, 0.77778],
    "57369": [0.25142, 0.75726, 0, 0, 0.77778],
    "57370": [0.13597, 0.63597, 0, 0, 0.77778],
    "57371": [0.13597, 0.63597, 0, 0, 0.77778]
  },
  "Caligraphic-Regular": {
    "32": [0, 0, 0, 0, 0.25],
    "65": [0, 0.68333, 0, 0.19445, 0.79847],
    "66": [0, 0.68333, 0.03041, 0.13889, 0.65681],
    "67": [0, 0.68333, 0.05834, 0.13889, 0.52653],
    "68": [0, 0.68333, 0.02778, 0.08334, 0.77139],
    "69": [0, 0.68333, 0.08944, 0.11111, 0.52778],
    "70": [0, 0.68333, 0.09931, 0.11111, 0.71875],
    "71": [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
    "72": [0, 0.68333, 0.00965, 0.11111, 0.84452],
    "73": [0, 0.68333, 0.07382, 0, 0.54452],
    "74": [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
    "75": [0, 0.68333, 0.01445, 0.05556, 0.76195],
    "76": [0, 0.68333, 0, 0.13889, 0.68972],
    "77": [0, 0.68333, 0, 0.13889, 1.2009],
    "78": [0, 0.68333, 0.14736, 0.08334, 0.82049],
    "79": [0, 0.68333, 0.02778, 0.11111, 0.79611],
    "80": [0, 0.68333, 0.08222, 0.08334, 0.69556],
    "81": [0.09722, 0.68333, 0, 0.11111, 0.81667],
    "82": [0, 0.68333, 0, 0.08334, 0.8475],
    "83": [0, 0.68333, 0.075, 0.13889, 0.60556],
    "84": [0, 0.68333, 0.25417, 0, 0.54464],
    "85": [0, 0.68333, 0.09931, 0.08334, 0.62583],
    "86": [0, 0.68333, 0.08222, 0, 0.61278],
    "87": [0, 0.68333, 0.08222, 0.08334, 0.98778],
    "88": [0, 0.68333, 0.14643, 0.13889, 0.7133],
    "89": [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
    "90": [0, 0.68333, 0.07944, 0.13889, 0.72473],
    "160": [0, 0, 0, 0, 0.25]
  },
  "Fraktur-Regular": {
    "32": [0, 0, 0, 0, 0.25],
    "33": [0, 0.69141, 0, 0, 0.29574],
    "34": [0, 0.69141, 0, 0, 0.21471],
    "38": [0, 0.69141, 0, 0, 0.73786],
    "39": [0, 0.69141, 0, 0, 0.21201],
    "40": [0.24982, 0.74947, 0, 0, 0.38865],
    "41": [0.24982, 0.74947, 0, 0, 0.38865],
    "42": [0, 0.62119, 0, 0, 0.27764],
    "43": [0.08319, 0.58283, 0, 0, 0.75623],
    "44": [0, 0.10803, 0, 0, 0.27764],
    "45": [0.08319, 0.58283, 0, 0, 0.75623],
    "46": [0, 0.10803, 0, 0, 0.27764],
    "47": [0.24982, 0.74947, 0, 0, 0.50181],
    "48": [0, 0.47534, 0, 0, 0.50181],
    "49": [0, 0.47534, 0, 0, 0.50181],
    "50": [0, 0.47534, 0, 0, 0.50181],
    "51": [0.18906, 0.47534, 0, 0, 0.50181],
    "52": [0.18906, 0.47534, 0, 0, 0.50181],
    "53": [0.18906, 0.47534, 0, 0, 0.50181],
    "54": [0, 0.69141, 0, 0, 0.50181],
    "55": [0.18906, 0.47534, 0, 0, 0.50181],
    "56": [0, 0.69141, 0, 0, 0.50181],
    "57": [0.18906, 0.47534, 0, 0, 0.50181],
    "58": [0, 0.47534, 0, 0, 0.21606],
    "59": [0.12604, 0.47534, 0, 0, 0.21606],
    "61": [-0.13099, 0.36866, 0, 0, 0.75623],
    "63": [0, 0.69141, 0, 0, 0.36245],
    "65": [0, 0.69141, 0, 0, 0.7176],
    "66": [0, 0.69141, 0, 0, 0.88397],
    "67": [0, 0.69141, 0, 0, 0.61254],
    "68": [0, 0.69141, 0, 0, 0.83158],
    "69": [0, 0.69141, 0, 0, 0.66278],
    "70": [0.12604, 0.69141, 0, 0, 0.61119],
    "71": [0, 0.69141, 0, 0, 0.78539],
    "72": [0.06302, 0.69141, 0, 0, 0.7203],
    "73": [0, 0.69141, 0, 0, 0.55448],
    "74": [0.12604, 0.69141, 0, 0, 0.55231],
    "75": [0, 0.69141, 0, 0, 0.66845],
    "76": [0, 0.69141, 0, 0, 0.66602],
    "77": [0, 0.69141, 0, 0, 1.04953],
    "78": [0, 0.69141, 0, 0, 0.83212],
    "79": [0, 0.69141, 0, 0, 0.82699],
    "80": [0.18906, 0.69141, 0, 0, 0.82753],
    "81": [0.03781, 0.69141, 0, 0, 0.82699],
    "82": [0, 0.69141, 0, 0, 0.82807],
    "83": [0, 0.69141, 0, 0, 0.82861],
    "84": [0, 0.69141, 0, 0, 0.66899],
    "85": [0, 0.69141, 0, 0, 0.64576],
    "86": [0, 0.69141, 0, 0, 0.83131],
    "87": [0, 0.69141, 0, 0, 1.04602],
    "88": [0, 0.69141, 0, 0, 0.71922],
    "89": [0.18906, 0.69141, 0, 0, 0.83293],
    "90": [0.12604, 0.69141, 0, 0, 0.60201],
    "91": [0.24982, 0.74947, 0, 0, 0.27764],
    "93": [0.24982, 0.74947, 0, 0, 0.27764],
    "94": [0, 0.69141, 0, 0, 0.49965],
    "97": [0, 0.47534, 0, 0, 0.50046],
    "98": [0, 0.69141, 0, 0, 0.51315],
    "99": [0, 0.47534, 0, 0, 0.38946],
    "100": [0, 0.62119, 0, 0, 0.49857],
    "101": [0, 0.47534, 0, 0, 0.40053],
    "102": [0.18906, 0.69141, 0, 0, 0.32626],
    "103": [0.18906, 0.47534, 0, 0, 0.5037],
    "104": [0.18906, 0.69141, 0, 0, 0.52126],
    "105": [0, 0.69141, 0, 0, 0.27899],
    "106": [0, 0.69141, 0, 0, 0.28088],
    "107": [0, 0.69141, 0, 0, 0.38946],
    "108": [0, 0.69141, 0, 0, 0.27953],
    "109": [0, 0.47534, 0, 0, 0.76676],
    "110": [0, 0.47534, 0, 0, 0.52666],
    "111": [0, 0.47534, 0, 0, 0.48885],
    "112": [0.18906, 0.52396, 0, 0, 0.50046],
    "113": [0.18906, 0.47534, 0, 0, 0.48912],
    "114": [0, 0.47534, 0, 0, 0.38919],
    "115": [0, 0.47534, 0, 0, 0.44266],
    "116": [0, 0.62119, 0, 0, 0.33301],
    "117": [0, 0.47534, 0, 0, 0.5172],
    "118": [0, 0.52396, 0, 0, 0.5118],
    "119": [0, 0.52396, 0, 0, 0.77351],
    "120": [0.18906, 0.47534, 0, 0, 0.38865],
    "121": [0.18906, 0.47534, 0, 0, 0.49884],
    "122": [0.18906, 0.47534, 0, 0, 0.39054],
    "160": [0, 0, 0, 0, 0.25],
    "8216": [0, 0.69141, 0, 0, 0.21471],
    "8217": [0, 0.69141, 0, 0, 0.21471],
    "58112": [0, 0.62119, 0, 0, 0.49749],
    "58113": [0, 0.62119, 0, 0, 0.4983],
    "58114": [0.18906, 0.69141, 0, 0, 0.33328],
    "58115": [0.18906, 0.69141, 0, 0, 0.32923],
    "58116": [0.18906, 0.47534, 0, 0, 0.50343],
    "58117": [0, 0.69141, 0, 0, 0.33301],
    "58118": [0, 0.62119, 0, 0, 0.33409],
    "58119": [0, 0.47534, 0, 0, 0.50073]
  },
  "Main-Bold": {
    "32": [0, 0, 0, 0, 0.25],
    "33": [0, 0.69444, 0, 0, 0.35],
    "34": [0, 0.69444, 0, 0, 0.60278],
    "35": [0.19444, 0.69444, 0, 0, 0.95833],
    "36": [0.05556, 0.75, 0, 0, 0.575],
    "37": [0.05556, 0.75, 0, 0, 0.95833],
    "38": [0, 0.69444, 0, 0, 0.89444],
    "39": [0, 0.69444, 0, 0, 0.31944],
    "40": [0.25, 0.75, 0, 0, 0.44722],
    "41": [0.25, 0.75, 0, 0, 0.44722],
    "42": [0, 0.75, 0, 0, 0.575],
    "43": [0.13333, 0.63333, 0, 0, 0.89444],
    "44": [0.19444, 0.15556, 0, 0, 0.31944],
    "45": [0, 0.44444, 0, 0, 0.38333],
    "46": [0, 0.15556, 0, 0, 0.31944],
    "47": [0.25, 0.75, 0, 0, 0.575],
    "48": [0, 0.64444, 0, 0, 0.575],
    "49": [0, 0.64444, 0, 0, 0.575],
    "50": [0, 0.64444, 0, 0, 0.575],
    "51": [0, 0.64444, 0, 0, 0.575],
    "52": [0, 0.64444, 0, 0, 0.575],
    "53": [0, 0.64444, 0, 0, 0.575],
    "54": [0, 0.64444, 0, 0, 0.575],
    "55": [0, 0.64444, 0, 0, 0.575],
    "56": [0, 0.64444, 0, 0, 0.575],
    "57": [0, 0.64444, 0, 0, 0.575],
    "58": [0, 0.44444, 0, 0, 0.31944],
    "59": [0.19444, 0.44444, 0, 0, 0.31944],
    "60": [0.08556, 0.58556, 0, 0, 0.89444],
    "61": [-0.10889, 0.39111, 0, 0, 0.89444],
    "62": [0.08556, 0.58556, 0, 0, 0.89444],
    "63": [0, 0.69444, 0, 0, 0.54305],
    "64": [0, 0.69444, 0, 0, 0.89444],
    "65": [0, 0.68611, 0, 0, 0.86944],
    "66": [0, 0.68611, 0, 0, 0.81805],
    "67": [0, 0.68611, 0, 0, 0.83055],
    "68": [0, 0.68611, 0, 0, 0.88194],
    "69": [0, 0.68611, 0, 0, 0.75555],
    "70": [0, 0.68611, 0, 0, 0.72361],
    "71": [0, 0.68611, 0, 0, 0.90416],
    "72": [0, 0.68611, 0, 0, 0.9],
    "73": [0, 0.68611, 0, 0, 0.43611],
    "74": [0, 0.68611, 0, 0, 0.59444],
    "75": [0, 0.68611, 0, 0, 0.90138],
    "76": [0, 0.68611, 0, 0, 0.69166],
    "77": [0, 0.68611, 0, 0, 1.09166],
    "78": [0, 0.68611, 0, 0, 0.9],
    "79": [0, 0.68611, 0, 0, 0.86388],
    "80": [0, 0.68611, 0, 0, 0.78611],
    "81": [0.19444, 0.68611, 0, 0, 0.86388],
    "82": [0, 0.68611, 0, 0, 0.8625],
    "83": [0, 0.68611, 0, 0, 0.63889],
    "84": [0, 0.68611, 0, 0, 0.8],
    "85": [0, 0.68611, 0, 0, 0.88472],
    "86": [0, 0.68611, 0.01597, 0, 0.86944],
    "87": [0, 0.68611, 0.01597, 0, 1.18888],
    "88": [0, 0.68611, 0, 0, 0.86944],
    "89": [0, 0.68611, 0.02875, 0, 0.86944],
    "90": [0, 0.68611, 0, 0, 0.70277],
    "91": [0.25, 0.75, 0, 0, 0.31944],
    "92": [0.25, 0.75, 0, 0, 0.575],
    "93": [0.25, 0.75, 0, 0, 0.31944],
    "94": [0, 0.69444, 0, 0, 0.575],
    "95": [0.31, 0.13444, 0.03194, 0, 0.575],
    "97": [0, 0.44444, 0, 0, 0.55902],
    "98": [0, 0.69444, 0, 0, 0.63889],
    "99": [0, 0.44444, 0, 0, 0.51111],
    "100": [0, 0.69444, 0, 0, 0.63889],
    "101": [0, 0.44444, 0, 0, 0.52708],
    "102": [0, 0.69444, 0.10903, 0, 0.35139],
    "103": [0.19444, 0.44444, 0.01597, 0, 0.575],
    "104": [0, 0.69444, 0, 0, 0.63889],
    "105": [0, 0.69444, 0, 0, 0.31944],
    "106": [0.19444, 0.69444, 0, 0, 0.35139],
    "107": [0, 0.69444, 0, 0, 0.60694],
    "108": [0, 0.69444, 0, 0, 0.31944],
    "109": [0, 0.44444, 0, 0, 0.95833],
    "110": [0, 0.44444, 0, 0, 0.63889],
    "111": [0, 0.44444, 0, 0, 0.575],
    "112": [0.19444, 0.44444, 0, 0, 0.63889],
    "113": [0.19444, 0.44444, 0, 0, 0.60694],
    "114": [0, 0.44444, 0, 0, 0.47361],
    "115": [0, 0.44444, 0, 0, 0.45361],
    "116": [0, 0.63492, 0, 0, 0.44722],
    "117": [0, 0.44444, 0, 0, 0.63889],
    "118": [0, 0.44444, 0.01597, 0, 0.60694],
    "119": [0, 0.44444, 0.01597, 0, 0.83055],
    "120": [0, 0.44444, 0, 0, 0.60694],
    "121": [0.19444, 0.44444, 0.01597, 0, 0.60694],
    "122": [0, 0.44444, 0, 0, 0.51111],
    "123": [0.25, 0.75, 0, 0, 0.575],
    "124": [0.25, 0.75, 0, 0, 0.31944],
    "125": [0.25, 0.75, 0, 0, 0.575],
    "126": [0.35, 0.34444, 0, 0, 0.575],
    "160": [0, 0, 0, 0, 0.25],
    "163": [0, 0.69444, 0, 0, 0.86853],
    "168": [0, 0.69444, 0, 0, 0.575],
    "172": [0, 0.44444, 0, 0, 0.76666],
    "176": [0, 0.69444, 0, 0, 0.86944],
    "177": [0.13333, 0.63333, 0, 0, 0.89444],
    "184": [0.17014, 0, 0, 0, 0.51111],
    "198": [0, 0.68611, 0, 0, 1.04166],
    "215": [0.13333, 0.63333, 0, 0, 0.89444],
    "216": [0.04861, 0.73472, 0, 0, 0.89444],
    "223": [0, 0.69444, 0, 0, 0.59722],
    "230": [0, 0.44444, 0, 0, 0.83055],
    "247": [0.13333, 0.63333, 0, 0, 0.89444],
    "248": [0.09722, 0.54167, 0, 0, 0.575],
    "305": [0, 0.44444, 0, 0, 0.31944],
    "338": [0, 0.68611, 0, 0, 1.16944],
    "339": [0, 0.44444, 0, 0, 0.89444],
    "567": [0.19444, 0.44444, 0, 0, 0.35139],
    "710": [0, 0.69444, 0, 0, 0.575],
    "711": [0, 0.63194, 0, 0, 0.575],
    "713": [0, 0.59611, 0, 0, 0.575],
    "714": [0, 0.69444, 0, 0, 0.575],
    "715": [0, 0.69444, 0, 0, 0.575],
    "728": [0, 0.69444, 0, 0, 0.575],
    "729": [0, 0.69444, 0, 0, 0.31944],
    "730": [0, 0.69444, 0, 0, 0.86944],
    "732": [0, 0.69444, 0, 0, 0.575],
    "733": [0, 0.69444, 0, 0, 0.575],
    "915": [0, 0.68611, 0, 0, 0.69166],
    "916": [0, 0.68611, 0, 0, 0.95833],
    "920": [0, 0.68611, 0, 0, 0.89444],
    "923": [0, 0.68611, 0, 0, 0.80555],
    "926": [0, 0.68611, 0, 0, 0.76666],
    "928": [0, 0.68611, 0, 0, 0.9],
    "931": [0, 0.68611, 0, 0, 0.83055],
    "933": [0, 0.68611, 0, 0, 0.89444],
    "934": [0, 0.68611, 0, 0, 0.83055],
    "936": [0, 0.68611, 0, 0, 0.89444],
    "937": [0, 0.68611, 0, 0, 0.83055],
    "8211": [0, 0.44444, 0.03194, 0, 0.575],
    "8212": [0, 0.44444, 0.03194, 0, 1.14999],
    "8216": [0, 0.69444, 0, 0, 0.31944],
    "8217": [0, 0.69444, 0, 0, 0.31944],
    "8220": [0, 0.69444, 0, 0, 0.60278],
    "8221": [0, 0.69444, 0, 0, 0.60278],
    "8224": [0.19444, 0.69444, 0, 0, 0.51111],
    "8225": [0.19444, 0.69444, 0, 0, 0.51111],
    "8242": [0, 0.55556, 0, 0, 0.34444],
    "8407": [0, 0.72444, 0.15486, 0, 0.575],
    "8463": [0, 0.69444, 0, 0, 0.66759],
    "8465": [0, 0.69444, 0, 0, 0.83055],
    "8467": [0, 0.69444, 0, 0, 0.47361],
    "8472": [0.19444, 0.44444, 0, 0, 0.74027],
    "8476": [0, 0.69444, 0, 0, 0.83055],
    "8501": [0, 0.69444, 0, 0, 0.70277],
    "8592": [-0.10889, 0.39111, 0, 0, 1.14999],
    "8593": [0.19444, 0.69444, 0, 0, 0.575],
    "8594": [-0.10889, 0.39111, 0, 0, 1.14999],
    "8595": [0.19444, 0.69444, 0, 0, 0.575],
    "8596": [-0.10889, 0.39111, 0, 0, 1.14999],
    "8597": [0.25, 0.75, 0, 0, 0.575],
    "8598": [0.19444, 0.69444, 0, 0, 1.14999],
    "8599": [0.19444, 0.69444, 0, 0, 1.14999],
    "8600": [0.19444, 0.69444, 0, 0, 1.14999],
    "8601": [0.19444, 0.69444, 0, 0, 1.14999],
    "8636": [-0.10889, 0.39111, 0, 0, 1.14999],
    "8637": [-0.10889, 0.39111, 0, 0, 1.14999],
    "8640": [-0.10889, 0.39111, 0, 0, 1.14999],
    "8641": [-0.10889, 0.39111, 0, 0, 1.14999],
    "8656": [-0.10889, 0.39111, 0, 0, 1.14999],
    "8657": [0.19444, 0.69444, 0, 0, 0.70277],
    "8658": [-0.10889, 0.39111, 0, 0, 1.14999],
    "8659": [0.19444, 0.69444, 0, 0, 0.70277],
    "8660": [-0.10889, 0.39111, 0, 0, 1.14999],
    "8661": [0.25, 0.75, 0, 0, 0.70277],
    "8704": [0, 0.69444, 0, 0, 0.63889],
    "8706": [0, 0.69444, 0.06389, 0, 0.62847],
    "8707": [0, 0.69444, 0, 0, 0.63889],
    "8709": [0.05556, 0.75, 0, 0, 0.575],
    "8711": [0, 0.68611, 0, 0, 0.95833],
    "8712": [0.08556, 0.58556, 0, 0, 0.76666],
    "8715": [0.08556, 0.58556, 0, 0, 0.76666],
    "8722": [0.13333, 0.63333, 0, 0, 0.89444],
    "8723": [0.13333, 0.63333, 0, 0, 0.89444],
    "8725": [0.25, 0.75, 0, 0, 0.575],
    "8726": [0.25, 0.75, 0, 0, 0.575],
    "8727": [-0.02778, 0.47222, 0, 0, 0.575],
    "8728": [-0.02639, 0.47361, 0, 0, 0.575],
    "8729": [-0.02639, 0.47361, 0, 0, 0.575],
    "8730": [0.18, 0.82, 0, 0, 0.95833],
    "8733": [0, 0.44444, 0, 0, 0.89444],
    "8734": [0, 0.44444, 0, 0, 1.14999],
    "8736": [0, 0.69224, 0, 0, 0.72222],
    "8739": [0.25, 0.75, 0, 0, 0.31944],
    "8741": [0.25, 0.75, 0, 0, 0.575],
    "8743": [0, 0.55556, 0, 0, 0.76666],
    "8744": [0, 0.55556, 0, 0, 0.76666],
    "8745": [0, 0.55556, 0, 0, 0.76666],
    "8746": [0, 0.55556, 0, 0, 0.76666],
    "8747": [0.19444, 0.69444, 0.12778, 0, 0.56875],
    "8764": [-0.10889, 0.39111, 0, 0, 0.89444],
    "8768": [0.19444, 0.69444, 0, 0, 0.31944],
    "8771": [0.00222, 0.50222, 0, 0, 0.89444],
    "8773": [0.027, 0.638, 0, 0, 0.894],
    "8776": [0.02444, 0.52444, 0, 0, 0.89444],
    "8781": [0.00222, 0.50222, 0, 0, 0.89444],
    "8801": [0.00222, 0.50222, 0, 0, 0.89444],
    "8804": [0.19667, 0.69667, 0, 0, 0.89444],
    "8805": [0.19667, 0.69667, 0, 0, 0.89444],
    "8810": [0.08556, 0.58556, 0, 0, 1.14999],
    "8811": [0.08556, 0.58556, 0, 0, 1.14999],
    "8826": [0.08556, 0.58556, 0, 0, 0.89444],
    "8827": [0.08556, 0.58556, 0, 0, 0.89444],
    "8834": [0.08556, 0.58556, 0, 0, 0.89444],
    "8835": [0.08556, 0.58556, 0, 0, 0.89444],
    "8838": [0.19667, 0.69667, 0, 0, 0.89444],
    "8839": [0.19667, 0.69667, 0, 0, 0.89444],
    "8846": [0, 0.55556, 0, 0, 0.76666],
    "8849": [0.19667, 0.69667, 0, 0, 0.89444],
    "8850": [0.19667, 0.69667, 0, 0, 0.89444],
    "8851": [0, 0.55556, 0, 0, 0.76666],
    "8852": [0, 0.55556, 0, 0, 0.76666],
    "8853": [0.13333, 0.63333, 0, 0, 0.89444],
    "8854": [0.13333, 0.63333, 0, 0, 0.89444],
    "8855": [0.13333, 0.63333, 0, 0, 0.89444],
    "8856": [0.13333, 0.63333, 0, 0, 0.89444],
    "8857": [0.13333, 0.63333, 0, 0, 0.89444],
    "8866": [0, 0.69444, 0, 0, 0.70277],
    "8867": [0, 0.69444, 0, 0, 0.70277],
    "8868": [0, 0.69444, 0, 0, 0.89444],
    "8869": [0, 0.69444, 0, 0, 0.89444],
    "8900": [-0.02639, 0.47361, 0, 0, 0.575],
    "8901": [-0.02639, 0.47361, 0, 0, 0.31944],
    "8902": [-0.02778, 0.47222, 0, 0, 0.575],
    "8968": [0.25, 0.75, 0, 0, 0.51111],
    "8969": [0.25, 0.75, 0, 0, 0.51111],
    "8970": [0.25, 0.75, 0, 0, 0.51111],
    "8971": [0.25, 0.75, 0, 0, 0.51111],
    "8994": [-0.13889, 0.36111, 0, 0, 1.14999],
    "8995": [-0.13889, 0.36111, 0, 0, 1.14999],
    "9651": [0.19444, 0.69444, 0, 0, 1.02222],
    "9657": [-0.02778, 0.47222, 0, 0, 0.575],
    "9661": [0.19444, 0.69444, 0, 0, 1.02222],
    "9667": [-0.02778, 0.47222, 0, 0, 0.575],
    "9711": [0.19444, 0.69444, 0, 0, 1.14999],
    "9824": [0.12963, 0.69444, 0, 0, 0.89444],
    "9825": [0.12963, 0.69444, 0, 0, 0.89444],
    "9826": [0.12963, 0.69444, 0, 0, 0.89444],
    "9827": [0.12963, 0.69444, 0, 0, 0.89444],
    "9837": [0, 0.75, 0, 0, 0.44722],
    "9838": [0.19444, 0.69444, 0, 0, 0.44722],
    "9839": [0.19444, 0.69444, 0, 0, 0.44722],
    "10216": [0.25, 0.75, 0, 0, 0.44722],
    "10217": [0.25, 0.75, 0, 0, 0.44722],
    "10815": [0, 0.68611, 0, 0, 0.9],
    "10927": [0.19667, 0.69667, 0, 0, 0.89444],
    "10928": [0.19667, 0.69667, 0, 0, 0.89444],
    "57376": [0.19444, 0.69444, 0, 0, 0]
  },
  "Main-BoldItalic": {
    "32": [0, 0, 0, 0, 0.25],
    "33": [0, 0.69444, 0.11417, 0, 0.38611],
    "34": [0, 0.69444, 0.07939, 0, 0.62055],
    "35": [0.19444, 0.69444, 0.06833, 0, 0.94444],
    "37": [0.05556, 0.75, 0.12861, 0, 0.94444],
    "38": [0, 0.69444, 0.08528, 0, 0.88555],
    "39": [0, 0.69444, 0.12945, 0, 0.35555],
    "40": [0.25, 0.75, 0.15806, 0, 0.47333],
    "41": [0.25, 0.75, 0.03306, 0, 0.47333],
    "42": [0, 0.75, 0.14333, 0, 0.59111],
    "43": [0.10333, 0.60333, 0.03306, 0, 0.88555],
    "44": [0.19444, 0.14722, 0, 0, 0.35555],
    "45": [0, 0.44444, 0.02611, 0, 0.41444],
    "46": [0, 0.14722, 0, 0, 0.35555],
    "47": [0.25, 0.75, 0.15806, 0, 0.59111],
    "48": [0, 0.64444, 0.13167, 0, 0.59111],
    "49": [0, 0.64444, 0.13167, 0, 0.59111],
    "50": [0, 0.64444, 0.13167, 0, 0.59111],
    "51": [0, 0.64444, 0.13167, 0, 0.59111],
    "52": [0.19444, 0.64444, 0.13167, 0, 0.59111],
    "53": [0, 0.64444, 0.13167, 0, 0.59111],
    "54": [0, 0.64444, 0.13167, 0, 0.59111],
    "55": [0.19444, 0.64444, 0.13167, 0, 0.59111],
    "56": [0, 0.64444, 0.13167, 0, 0.59111],
    "57": [0, 0.64444, 0.13167, 0, 0.59111],
    "58": [0, 0.44444, 0.06695, 0, 0.35555],
    "59": [0.19444, 0.44444, 0.06695, 0, 0.35555],
    "61": [-0.10889, 0.39111, 0.06833, 0, 0.88555],
    "63": [0, 0.69444, 0.11472, 0, 0.59111],
    "64": [0, 0.69444, 0.09208, 0, 0.88555],
    "65": [0, 0.68611, 0, 0, 0.86555],
    "66": [0, 0.68611, 0.0992, 0, 0.81666],
    "67": [0, 0.68611, 0.14208, 0, 0.82666],
    "68": [0, 0.68611, 0.09062, 0, 0.87555],
    "69": [0, 0.68611, 0.11431, 0, 0.75666],
    "70": [0, 0.68611, 0.12903, 0, 0.72722],
    "71": [0, 0.68611, 0.07347, 0, 0.89527],
    "72": [0, 0.68611, 0.17208, 0, 0.8961],
    "73": [0, 0.68611, 0.15681, 0, 0.47166],
    "74": [0, 0.68611, 0.145, 0, 0.61055],
    "75": [0, 0.68611, 0.14208, 0, 0.89499],
    "76": [0, 0.68611, 0, 0, 0.69777],
    "77": [0, 0.68611, 0.17208, 0, 1.07277],
    "78": [0, 0.68611, 0.17208, 0, 0.8961],
    "79": [0, 0.68611, 0.09062, 0, 0.85499],
    "80": [0, 0.68611, 0.0992, 0, 0.78721],
    "81": [0.19444, 0.68611, 0.09062, 0, 0.85499],
    "82": [0, 0.68611, 0.02559, 0, 0.85944],
    "83": [0, 0.68611, 0.11264, 0, 0.64999],
    "84": [0, 0.68611, 0.12903, 0, 0.7961],
    "85": [0, 0.68611, 0.17208, 0, 0.88083],
    "86": [0, 0.68611, 0.18625, 0, 0.86555],
    "87": [0, 0.68611, 0.18625, 0, 1.15999],
    "88": [0, 0.68611, 0.15681, 0, 0.86555],
    "89": [0, 0.68611, 0.19803, 0, 0.86555],
    "90": [0, 0.68611, 0.14208, 0, 0.70888],
    "91": [0.25, 0.75, 0.1875, 0, 0.35611],
    "93": [0.25, 0.75, 0.09972, 0, 0.35611],
    "94": [0, 0.69444, 0.06709, 0, 0.59111],
    "95": [0.31, 0.13444, 0.09811, 0, 0.59111],
    "97": [0, 0.44444, 0.09426, 0, 0.59111],
    "98": [0, 0.69444, 0.07861, 0, 0.53222],
    "99": [0, 0.44444, 0.05222, 0, 0.53222],
    "100": [0, 0.69444, 0.10861, 0, 0.59111],
    "101": [0, 0.44444, 0.085, 0, 0.53222],
    "102": [0.19444, 0.69444, 0.21778, 0, 0.4],
    "103": [0.19444, 0.44444, 0.105, 0, 0.53222],
    "104": [0, 0.69444, 0.09426, 0, 0.59111],
    "105": [0, 0.69326, 0.11387, 0, 0.35555],
    "106": [0.19444, 0.69326, 0.1672, 0, 0.35555],
    "107": [0, 0.69444, 0.11111, 0, 0.53222],
    "108": [0, 0.69444, 0.10861, 0, 0.29666],
    "109": [0, 0.44444, 0.09426, 0, 0.94444],
    "110": [0, 0.44444, 0.09426, 0, 0.64999],
    "111": [0, 0.44444, 0.07861, 0, 0.59111],
    "112": [0.19444, 0.44444, 0.07861, 0, 0.59111],
    "113": [0.19444, 0.44444, 0.105, 0, 0.53222],
    "114": [0, 0.44444, 0.11111, 0, 0.50167],
    "115": [0, 0.44444, 0.08167, 0, 0.48694],
    "116": [0, 0.63492, 0.09639, 0, 0.385],
    "117": [0, 0.44444, 0.09426, 0, 0.62055],
    "118": [0, 0.44444, 0.11111, 0, 0.53222],
    "119": [0, 0.44444, 0.11111, 0, 0.76777],
    "120": [0, 0.44444, 0.12583, 0, 0.56055],
    "121": [0.19444, 0.44444, 0.105, 0, 0.56166],
    "122": [0, 0.44444, 0.13889, 0, 0.49055],
    "126": [0.35, 0.34444, 0.11472, 0, 0.59111],
    "160": [0, 0, 0, 0, 0.25],
    "168": [0, 0.69444, 0.11473, 0, 0.59111],
    "176": [0, 0.69444, 0, 0, 0.94888],
    "184": [0.17014, 0, 0, 0, 0.53222],
    "198": [0, 0.68611, 0.11431, 0, 1.02277],
    "216": [0.04861, 0.73472, 0.09062, 0, 0.88555],
    "223": [0.19444, 0.69444, 0.09736, 0, 0.665],
    "230": [0, 0.44444, 0.085, 0, 0.82666],
    "248": [0.09722, 0.54167, 0.09458, 0, 0.59111],
    "305": [0, 0.44444, 0.09426, 0, 0.35555],
    "338": [0, 0.68611, 0.11431, 0, 1.14054],
    "339": [0, 0.44444, 0.085, 0, 0.82666],
    "567": [0.19444, 0.44444, 0.04611, 0, 0.385],
    "710": [0, 0.69444, 0.06709, 0, 0.59111],
    "711": [0, 0.63194, 0.08271, 0, 0.59111],
    "713": [0, 0.59444, 0.10444, 0, 0.59111],
    "714": [0, 0.69444, 0.08528, 0, 0.59111],
    "715": [0, 0.69444, 0, 0, 0.59111],
    "728": [0, 0.69444, 0.10333, 0, 0.59111],
    "729": [0, 0.69444, 0.12945, 0, 0.35555],
    "730": [0, 0.69444, 0, 0, 0.94888],
    "732": [0, 0.69444, 0.11472, 0, 0.59111],
    "733": [0, 0.69444, 0.11472, 0, 0.59111],
    "915": [0, 0.68611, 0.12903, 0, 0.69777],
    "916": [0, 0.68611, 0, 0, 0.94444],
    "920": [0, 0.68611, 0.09062, 0, 0.88555],
    "923": [0, 0.68611, 0, 0, 0.80666],
    "926": [0, 0.68611, 0.15092, 0, 0.76777],
    "928": [0, 0.68611, 0.17208, 0, 0.8961],
    "931": [0, 0.68611, 0.11431, 0, 0.82666],
    "933": [0, 0.68611, 0.10778, 0, 0.88555],
    "934": [0, 0.68611, 0.05632, 0, 0.82666],
    "936": [0, 0.68611, 0.10778, 0, 0.88555],
    "937": [0, 0.68611, 0.0992, 0, 0.82666],
    "8211": [0, 0.44444, 0.09811, 0, 0.59111],
    "8212": [0, 0.44444, 0.09811, 0, 1.18221],
    "8216": [0, 0.69444, 0.12945, 0, 0.35555],
    "8217": [0, 0.69444, 0.12945, 0, 0.35555],
    "8220": [0, 0.69444, 0.16772, 0, 0.62055],
    "8221": [0, 0.69444, 0.07939, 0, 0.62055]
  },
  "Main-Italic": {
    "32": [0, 0, 0, 0, 0.25],
    "33": [0, 0.69444, 0.12417, 0, 0.30667],
    "34": [0, 0.69444, 0.06961, 0, 0.51444],
    "35": [0.19444, 0.69444, 0.06616, 0, 0.81777],
    "37": [0.05556, 0.75, 0.13639, 0, 0.81777],
    "38": [0, 0.69444, 0.09694, 0, 0.76666],
    "39": [0, 0.69444, 0.12417, 0, 0.30667],
    "40": [0.25, 0.75, 0.16194, 0, 0.40889],
    "41": [0.25, 0.75, 0.03694, 0, 0.40889],
    "42": [0, 0.75, 0.14917, 0, 0.51111],
    "43": [0.05667, 0.56167, 0.03694, 0, 0.76666],
    "44": [0.19444, 0.10556, 0, 0, 0.30667],
    "45": [0, 0.43056, 0.02826, 0, 0.35778],
    "46": [0, 0.10556, 0, 0, 0.30667],
    "47": [0.25, 0.75, 0.16194, 0, 0.51111],
    "48": [0, 0.64444, 0.13556, 0, 0.51111],
    "49": [0, 0.64444, 0.13556, 0, 0.51111],
    "50": [0, 0.64444, 0.13556, 0, 0.51111],
    "51": [0, 0.64444, 0.13556, 0, 0.51111],
    "52": [0.19444, 0.64444, 0.13556, 0, 0.51111],
    "53": [0, 0.64444, 0.13556, 0, 0.51111],
    "54": [0, 0.64444, 0.13556, 0, 0.51111],
    "55": [0.19444, 0.64444, 0.13556, 0, 0.51111],
    "56": [0, 0.64444, 0.13556, 0, 0.51111],
    "57": [0, 0.64444, 0.13556, 0, 0.51111],
    "58": [0, 0.43056, 0.0582, 0, 0.30667],
    "59": [0.19444, 0.43056, 0.0582, 0, 0.30667],
    "61": [-0.13313, 0.36687, 0.06616, 0, 0.76666],
    "63": [0, 0.69444, 0.1225, 0, 0.51111],
    "64": [0, 0.69444, 0.09597, 0, 0.76666],
    "65": [0, 0.68333, 0, 0, 0.74333],
    "66": [0, 0.68333, 0.10257, 0, 0.70389],
    "67": [0, 0.68333, 0.14528, 0, 0.71555],
    "68": [0, 0.68333, 0.09403, 0, 0.755],
    "69": [0, 0.68333, 0.12028, 0, 0.67833],
    "70": [0, 0.68333, 0.13305, 0, 0.65277],
    "71": [0, 0.68333, 0.08722, 0, 0.77361],
    "72": [0, 0.68333, 0.16389, 0, 0.74333],
    "73": [0, 0.68333, 0.15806, 0, 0.38555],
    "74": [0, 0.68333, 0.14028, 0, 0.525],
    "75": [0, 0.68333, 0.14528, 0, 0.76888],
    "76": [0, 0.68333, 0, 0, 0.62722],
    "77": [0, 0.68333, 0.16389, 0, 0.89666],
    "78": [0, 0.68333, 0.16389, 0, 0.74333],
    "79": [0, 0.68333, 0.09403, 0, 0.76666],
    "80": [0, 0.68333, 0.10257, 0, 0.67833],
    "81": [0.19444, 0.68333, 0.09403, 0, 0.76666],
    "82": [0, 0.68333, 0.03868, 0, 0.72944],
    "83": [0, 0.68333, 0.11972, 0, 0.56222],
    "84": [0, 0.68333, 0.13305, 0, 0.71555],
    "85": [0, 0.68333, 0.16389, 0, 0.74333],
    "86": [0, 0.68333, 0.18361, 0, 0.74333],
    "87": [0, 0.68333, 0.18361, 0, 0.99888],
    "88": [0, 0.68333, 0.15806, 0, 0.74333],
    "89": [0, 0.68333, 0.19383, 0, 0.74333],
    "90": [0, 0.68333, 0.14528, 0, 0.61333],
    "91": [0.25, 0.75, 0.1875, 0, 0.30667],
    "93": [0.25, 0.75, 0.10528, 0, 0.30667],
    "94": [0, 0.69444, 0.06646, 0, 0.51111],
    "95": [0.31, 0.12056, 0.09208, 0, 0.51111],
    "97": [0, 0.43056, 0.07671, 0, 0.51111],
    "98": [0, 0.69444, 0.06312, 0, 0.46],
    "99": [0, 0.43056, 0.05653, 0, 0.46],
    "100": [0, 0.69444, 0.10333, 0, 0.51111],
    "101": [0, 0.43056, 0.07514, 0, 0.46],
    "102": [0.19444, 0.69444, 0.21194, 0, 0.30667],
    "103": [0.19444, 0.43056, 0.08847, 0, 0.46],
    "104": [0, 0.69444, 0.07671, 0, 0.51111],
    "105": [0, 0.65536, 0.1019, 0, 0.30667],
    "106": [0.19444, 0.65536, 0.14467, 0, 0.30667],
    "107": [0, 0.69444, 0.10764, 0, 0.46],
    "108": [0, 0.69444, 0.10333, 0, 0.25555],
    "109": [0, 0.43056, 0.07671, 0, 0.81777],
    "110": [0, 0.43056, 0.07671, 0, 0.56222],
    "111": [0, 0.43056, 0.06312, 0, 0.51111],
    "112": [0.19444, 0.43056, 0.06312, 0, 0.51111],
    "113": [0.19444, 0.43056, 0.08847, 0, 0.46],
    "114": [0, 0.43056, 0.10764, 0, 0.42166],
    "115": [0, 0.43056, 0.08208, 0, 0.40889],
    "116": [0, 0.61508, 0.09486, 0, 0.33222],
    "117": [0, 0.43056, 0.07671, 0, 0.53666],
    "118": [0, 0.43056, 0.10764, 0, 0.46],
    "119": [0, 0.43056, 0.10764, 0, 0.66444],
    "120": [0, 0.43056, 0.12042, 0, 0.46389],
    "121": [0.19444, 0.43056, 0.08847, 0, 0.48555],
    "122": [0, 0.43056, 0.12292, 0, 0.40889],
    "126": [0.35, 0.31786, 0.11585, 0, 0.51111],
    "160": [0, 0, 0, 0, 0.25],
    "168": [0, 0.66786, 0.10474, 0, 0.51111],
    "176": [0, 0.69444, 0, 0, 0.83129],
    "184": [0.17014, 0, 0, 0, 0.46],
    "198": [0, 0.68333, 0.12028, 0, 0.88277],
    "216": [0.04861, 0.73194, 0.09403, 0, 0.76666],
    "223": [0.19444, 0.69444, 0.10514, 0, 0.53666],
    "230": [0, 0.43056, 0.07514, 0, 0.71555],
    "248": [0.09722, 0.52778, 0.09194, 0, 0.51111],
    "338": [0, 0.68333, 0.12028, 0, 0.98499],
    "339": [0, 0.43056, 0.07514, 0, 0.71555],
    "710": [0, 0.69444, 0.06646, 0, 0.51111],
    "711": [0, 0.62847, 0.08295, 0, 0.51111],
    "713": [0, 0.56167, 0.10333, 0, 0.51111],
    "714": [0, 0.69444, 0.09694, 0, 0.51111],
    "715": [0, 0.69444, 0, 0, 0.51111],
    "728": [0, 0.69444, 0.10806, 0, 0.51111],
    "729": [0, 0.66786, 0.11752, 0, 0.30667],
    "730": [0, 0.69444, 0, 0, 0.83129],
    "732": [0, 0.66786, 0.11585, 0, 0.51111],
    "733": [0, 0.69444, 0.1225, 0, 0.51111],
    "915": [0, 0.68333, 0.13305, 0, 0.62722],
    "916": [0, 0.68333, 0, 0, 0.81777],
    "920": [0, 0.68333, 0.09403, 0, 0.76666],
    "923": [0, 0.68333, 0, 0, 0.69222],
    "926": [0, 0.68333, 0.15294, 0, 0.66444],
    "928": [0, 0.68333, 0.16389, 0, 0.74333],
    "931": [0, 0.68333, 0.12028, 0, 0.71555],
    "933": [0, 0.68333, 0.11111, 0, 0.76666],
    "934": [0, 0.68333, 0.05986, 0, 0.71555],
    "936": [0, 0.68333, 0.11111, 0, 0.76666],
    "937": [0, 0.68333, 0.10257, 0, 0.71555],
    "8211": [0, 0.43056, 0.09208, 0, 0.51111],
    "8212": [0, 0.43056, 0.09208, 0, 1.02222],
    "8216": [0, 0.69444, 0.12417, 0, 0.30667],
    "8217": [0, 0.69444, 0.12417, 0, 0.30667],
    "8220": [0, 0.69444, 0.1685, 0, 0.51444],
    "8221": [0, 0.69444, 0.06961, 0, 0.51444],
    "8463": [0, 0.68889, 0, 0, 0.54028]
  },
  "Main-Regular": {
    "32": [0, 0, 0, 0, 0.25],
    "33": [0, 0.69444, 0, 0, 0.27778],
    "34": [0, 0.69444, 0, 0, 0.5],
    "35": [0.19444, 0.69444, 0, 0, 0.83334],
    "36": [0.05556, 0.75, 0, 0, 0.5],
    "37": [0.05556, 0.75, 0, 0, 0.83334],
    "38": [0, 0.69444, 0, 0, 0.77778],
    "39": [0, 0.69444, 0, 0, 0.27778],
    "40": [0.25, 0.75, 0, 0, 0.38889],
    "41": [0.25, 0.75, 0, 0, 0.38889],
    "42": [0, 0.75, 0, 0, 0.5],
    "43": [0.08333, 0.58333, 0, 0, 0.77778],
    "44": [0.19444, 0.10556, 0, 0, 0.27778],
    "45": [0, 0.43056, 0, 0, 0.33333],
    "46": [0, 0.10556, 0, 0, 0.27778],
    "47": [0.25, 0.75, 0, 0, 0.5],
    "48": [0, 0.64444, 0, 0, 0.5],
    "49": [0, 0.64444, 0, 0, 0.5],
    "50": [0, 0.64444, 0, 0, 0.5],
    "51": [0, 0.64444, 0, 0, 0.5],
    "52": [0, 0.64444, 0, 0, 0.5],
    "53": [0, 0.64444, 0, 0, 0.5],
    "54": [0, 0.64444, 0, 0, 0.5],
    "55": [0, 0.64444, 0, 0, 0.5],
    "56": [0, 0.64444, 0, 0, 0.5],
    "57": [0, 0.64444, 0, 0, 0.5],
    "58": [0, 0.43056, 0, 0, 0.27778],
    "59": [0.19444, 0.43056, 0, 0, 0.27778],
    "60": [0.0391, 0.5391, 0, 0, 0.77778],
    "61": [-0.13313, 0.36687, 0, 0, 0.77778],
    "62": [0.0391, 0.5391, 0, 0, 0.77778],
    "63": [0, 0.69444, 0, 0, 0.47222],
    "64": [0, 0.69444, 0, 0, 0.77778],
    "65": [0, 0.68333, 0, 0, 0.75],
    "66": [0, 0.68333, 0, 0, 0.70834],
    "67": [0, 0.68333, 0, 0, 0.72222],
    "68": [0, 0.68333, 0, 0, 0.76389],
    "69": [0, 0.68333, 0, 0, 0.68056],
    "70": [0, 0.68333, 0, 0, 0.65278],
    "71": [0, 0.68333, 0, 0, 0.78472],
    "72": [0, 0.68333, 0, 0, 0.75],
    "73": [0, 0.68333, 0, 0, 0.36111],
    "74": [0, 0.68333, 0, 0, 0.51389],
    "75": [0, 0.68333, 0, 0, 0.77778],
    "76": [0, 0.68333, 0, 0, 0.625],
    "77": [0, 0.68333, 0, 0, 0.91667],
    "78": [0, 0.68333, 0, 0, 0.75],
    "79": [0, 0.68333, 0, 0, 0.77778],
    "80": [0, 0.68333, 0, 0, 0.68056],
    "81": [0.19444, 0.68333, 0, 0, 0.77778],
    "82": [0, 0.68333, 0, 0, 0.73611],
    "83": [0, 0.68333, 0, 0, 0.55556],
    "84": [0, 0.68333, 0, 0, 0.72222],
    "85": [0, 0.68333, 0, 0, 0.75],
    "86": [0, 0.68333, 0.01389, 0, 0.75],
    "87": [0, 0.68333, 0.01389, 0, 1.02778],
    "88": [0, 0.68333, 0, 0, 0.75],
    "89": [0, 0.68333, 0.025, 0, 0.75],
    "90": [0, 0.68333, 0, 0, 0.61111],
    "91": [0.25, 0.75, 0, 0, 0.27778],
    "92": [0.25, 0.75, 0, 0, 0.5],
    "93": [0.25, 0.75, 0, 0, 0.27778],
    "94": [0, 0.69444, 0, 0, 0.5],
    "95": [0.31, 0.12056, 0.02778, 0, 0.5],
    "97": [0, 0.43056, 0, 0, 0.5],
    "98": [0, 0.69444, 0, 0, 0.55556],
    "99": [0, 0.43056, 0, 0, 0.44445],
    "100": [0, 0.69444, 0, 0, 0.55556],
    "101": [0, 0.43056, 0, 0, 0.44445],
    "102": [0, 0.69444, 0.07778, 0, 0.30556],
    "103": [0.19444, 0.43056, 0.01389, 0, 0.5],
    "104": [0, 0.69444, 0, 0, 0.55556],
    "105": [0, 0.66786, 0, 0, 0.27778],
    "106": [0.19444, 0.66786, 0, 0, 0.30556],
    "107": [0, 0.69444, 0, 0, 0.52778],
    "108": [0, 0.69444, 0, 0, 0.27778],
    "109": [0, 0.43056, 0, 0, 0.83334],
    "110": [0, 0.43056, 0, 0, 0.55556],
    "111": [0, 0.43056, 0, 0, 0.5],
    "112": [0.19444, 0.43056, 0, 0, 0.55556],
    "113": [0.19444, 0.43056, 0, 0, 0.52778],
    "114": [0, 0.43056, 0, 0, 0.39167],
    "115": [0, 0.43056, 0, 0, 0.39445],
    "116": [0, 0.61508, 0, 0, 0.38889],
    "117": [0, 0.43056, 0, 0, 0.55556],
    "118": [0, 0.43056, 0.01389, 0, 0.52778],
    "119": [0, 0.43056, 0.01389, 0, 0.72222],
    "120": [0, 0.43056, 0, 0, 0.52778],
    "121": [0.19444, 0.43056, 0.01389, 0, 0.52778],
    "122": [0, 0.43056, 0, 0, 0.44445],
    "123": [0.25, 0.75, 0, 0, 0.5],
    "124": [0.25, 0.75, 0, 0, 0.27778],
    "125": [0.25, 0.75, 0, 0, 0.5],
    "126": [0.35, 0.31786, 0, 0, 0.5],
    "160": [0, 0, 0, 0, 0.25],
    "163": [0, 0.69444, 0, 0, 0.76909],
    "167": [0.19444, 0.69444, 0, 0, 0.44445],
    "168": [0, 0.66786, 0, 0, 0.5],
    "172": [0, 0.43056, 0, 0, 0.66667],
    "176": [0, 0.69444, 0, 0, 0.75],
    "177": [0.08333, 0.58333, 0, 0, 0.77778],
    "182": [0.19444, 0.69444, 0, 0, 0.61111],
    "184": [0.17014, 0, 0, 0, 0.44445],
    "198": [0, 0.68333, 0, 0, 0.90278],
    "215": [0.08333, 0.58333, 0, 0, 0.77778],
    "216": [0.04861, 0.73194, 0, 0, 0.77778],
    "223": [0, 0.69444, 0, 0, 0.5],
    "230": [0, 0.43056, 0, 0, 0.72222],
    "247": [0.08333, 0.58333, 0, 0, 0.77778],
    "248": [0.09722, 0.52778, 0, 0, 0.5],
    "305": [0, 0.43056, 0, 0, 0.27778],
    "338": [0, 0.68333, 0, 0, 1.01389],
    "339": [0, 0.43056, 0, 0, 0.77778],
    "567": [0.19444, 0.43056, 0, 0, 0.30556],
    "710": [0, 0.69444, 0, 0, 0.5],
    "711": [0, 0.62847, 0, 0, 0.5],
    "713": [0, 0.56778, 0, 0, 0.5],
    "714": [0, 0.69444, 0, 0, 0.5],
    "715": [0, 0.69444, 0, 0, 0.5],
    "728": [0, 0.69444, 0, 0, 0.5],
    "729": [0, 0.66786, 0, 0, 0.27778],
    "730": [0, 0.69444, 0, 0, 0.75],
    "732": [0, 0.66786, 0, 0, 0.5],
    "733": [0, 0.69444, 0, 0, 0.5],
    "915": [0, 0.68333, 0, 0, 0.625],
    "916": [0, 0.68333, 0, 0, 0.83334],
    "920": [0, 0.68333, 0, 0, 0.77778],
    "923": [0, 0.68333, 0, 0, 0.69445],
    "926": [0, 0.68333, 0, 0, 0.66667],
    "928": [0, 0.68333, 0, 0, 0.75],
    "931": [0, 0.68333, 0, 0, 0.72222],
    "933": [0, 0.68333, 0, 0, 0.77778],
    "934": [0, 0.68333, 0, 0, 0.72222],
    "936": [0, 0.68333, 0, 0, 0.77778],
    "937": [0, 0.68333, 0, 0, 0.72222],
    "8211": [0, 0.43056, 0.02778, 0, 0.5],
    "8212": [0, 0.43056, 0.02778, 0, 1.0],
    "8216": [0, 0.69444, 0, 0, 0.27778],
    "8217": [0, 0.69444, 0, 0, 0.27778],
    "8220": [0, 0.69444, 0, 0, 0.5],
    "8221": [0, 0.69444, 0, 0, 0.5],
    "8224": [0.19444, 0.69444, 0, 0, 0.44445],
    "8225": [0.19444, 0.69444, 0, 0, 0.44445],
    "8230": [0, 0.123, 0, 0, 1.172],
    "8242": [0, 0.55556, 0, 0, 0.275],
    "8407": [0, 0.71444, 0.15382, 0, 0.5],
    "8463": [0, 0.68889, 0, 0, 0.54028],
    "8465": [0, 0.69444, 0, 0, 0.72222],
    "8467": [0, 0.69444, 0, 0.11111, 0.41667],
    "8472": [0.19444, 0.43056, 0, 0.11111, 0.63646],
    "8476": [0, 0.69444, 0, 0, 0.72222],
    "8501": [0, 0.69444, 0, 0, 0.61111],
    "8592": [-0.13313, 0.36687, 0, 0, 1.0],
    "8593": [0.19444, 0.69444, 0, 0, 0.5],
    "8594": [-0.13313, 0.36687, 0, 0, 1.0],
    "8595": [0.19444, 0.69444, 0, 0, 0.5],
    "8596": [-0.13313, 0.36687, 0, 0, 1.0],
    "8597": [0.25, 0.75, 0, 0, 0.5],
    "8598": [0.19444, 0.69444, 0, 0, 1.0],
    "8599": [0.19444, 0.69444, 0, 0, 1.0],
    "8600": [0.19444, 0.69444, 0, 0, 1.0],
    "8601": [0.19444, 0.69444, 0, 0, 1.0],
    "8614": [0.011, 0.511, 0, 0, 1.0],
    "8617": [0.011, 0.511, 0, 0, 1.126],
    "8618": [0.011, 0.511, 0, 0, 1.126],
    "8636": [-0.13313, 0.36687, 0, 0, 1.0],
    "8637": [-0.13313, 0.36687, 0, 0, 1.0],
    "8640": [-0.13313, 0.36687, 0, 0, 1.0],
    "8641": [-0.13313, 0.36687, 0, 0, 1.0],
    "8652": [0.011, 0.671, 0, 0, 1.0],
    "8656": [-0.13313, 0.36687, 0, 0, 1.0],
    "8657": [0.19444, 0.69444, 0, 0, 0.61111],
    "8658": [-0.13313, 0.36687, 0, 0, 1.0],
    "8659": [0.19444, 0.69444, 0, 0, 0.61111],
    "8660": [-0.13313, 0.36687, 0, 0, 1.0],
    "8661": [0.25, 0.75, 0, 0, 0.61111],
    "8704": [0, 0.69444, 0, 0, 0.55556],
    "8706": [0, 0.69444, 0.05556, 0.08334, 0.5309],
    "8707": [0, 0.69444, 0, 0, 0.55556],
    "8709": [0.05556, 0.75, 0, 0, 0.5],
    "8711": [0, 0.68333, 0, 0, 0.83334],
    "8712": [0.0391, 0.5391, 0, 0, 0.66667],
    "8715": [0.0391, 0.5391, 0, 0, 0.66667],
    "8722": [0.08333, 0.58333, 0, 0, 0.77778],
    "8723": [0.08333, 0.58333, 0, 0, 0.77778],
    "8725": [0.25, 0.75, 0, 0, 0.5],
    "8726": [0.25, 0.75, 0, 0, 0.5],
    "8727": [-0.03472, 0.46528, 0, 0, 0.5],
    "8728": [-0.05555, 0.44445, 0, 0, 0.5],
    "8729": [-0.05555, 0.44445, 0, 0, 0.5],
    "8730": [0.2, 0.8, 0, 0, 0.83334],
    "8733": [0, 0.43056, 0, 0, 0.77778],
    "8734": [0, 0.43056, 0, 0, 1.0],
    "8736": [0, 0.69224, 0, 0, 0.72222],
    "8739": [0.25, 0.75, 0, 0, 0.27778],
    "8741": [0.25, 0.75, 0, 0, 0.5],
    "8743": [0, 0.55556, 0, 0, 0.66667],
    "8744": [0, 0.55556, 0, 0, 0.66667],
    "8745": [0, 0.55556, 0, 0, 0.66667],
    "8746": [0, 0.55556, 0, 0, 0.66667],
    "8747": [0.19444, 0.69444, 0.11111, 0, 0.41667],
    "8764": [-0.13313, 0.36687, 0, 0, 0.77778],
    "8768": [0.19444, 0.69444, 0, 0, 0.27778],
    "8771": [-0.03625, 0.46375, 0, 0, 0.77778],
    "8773": [-0.022, 0.589, 0, 0, 0.778],
    "8776": [-0.01688, 0.48312, 0, 0, 0.77778],
    "8781": [-0.03625, 0.46375, 0, 0, 0.77778],
    "8784": [-0.133, 0.673, 0, 0, 0.778],
    "8801": [-0.03625, 0.46375, 0, 0, 0.77778],
    "8804": [0.13597, 0.63597, 0, 0, 0.77778],
    "8805": [0.13597, 0.63597, 0, 0, 0.77778],
    "8810": [0.0391, 0.5391, 0, 0, 1.0],
    "8811": [0.0391, 0.5391, 0, 0, 1.0],
    "8826": [0.0391, 0.5391, 0, 0, 0.77778],
    "8827": [0.0391, 0.5391, 0, 0, 0.77778],
    "8834": [0.0391, 0.5391, 0, 0, 0.77778],
    "8835": [0.0391, 0.5391, 0, 0, 0.77778],
    "8838": [0.13597, 0.63597, 0, 0, 0.77778],
    "8839": [0.13597, 0.63597, 0, 0, 0.77778],
    "8846": [0, 0.55556, 0, 0, 0.66667],
    "8849": [0.13597, 0.63597, 0, 0, 0.77778],
    "8850": [0.13597, 0.63597, 0, 0, 0.77778],
    "8851": [0, 0.55556, 0, 0, 0.66667],
    "8852": [0, 0.55556, 0, 0, 0.66667],
    "8853": [0.08333, 0.58333, 0, 0, 0.77778],
    "8854": [0.08333, 0.58333, 0, 0, 0.77778],
    "8855": [0.08333, 0.58333, 0, 0, 0.77778],
    "8856": [0.08333, 0.58333, 0, 0, 0.77778],
    "8857": [0.08333, 0.58333, 0, 0, 0.77778],
    "8866": [0, 0.69444, 0, 0, 0.61111],
    "8867": [0, 0.69444, 0, 0, 0.61111],
    "8868": [0, 0.69444, 0, 0, 0.77778],
    "8869": [0, 0.69444, 0, 0, 0.77778],
    "8872": [0.249, 0.75, 0, 0, 0.867],
    "8900": [-0.05555, 0.44445, 0, 0, 0.5],
    "8901": [-0.05555, 0.44445, 0, 0, 0.27778],
    "8902": [-0.03472, 0.46528, 0, 0, 0.5],
    "8904": [0.005, 0.505, 0, 0, 0.9],
    "8942": [0.03, 0.903, 0, 0, 0.278],
    "8943": [-0.19, 0.313, 0, 0, 1.172],
    "8945": [-0.1, 0.823, 0, 0, 1.282],
    "8968": [0.25, 0.75, 0, 0, 0.44445],
    "8969": [0.25, 0.75, 0, 0, 0.44445],
    "8970": [0.25, 0.75, 0, 0, 0.44445],
    "8971": [0.25, 0.75, 0, 0, 0.44445],
    "8994": [-0.14236, 0.35764, 0, 0, 1.0],
    "8995": [-0.14236, 0.35764, 0, 0, 1.0],
    "9136": [0.244, 0.744, 0, 0, 0.412],
    "9137": [0.244, 0.745, 0, 0, 0.412],
    "9651": [0.19444, 0.69444, 0, 0, 0.88889],
    "9657": [-0.03472, 0.46528, 0, 0, 0.5],
    "9661": [0.19444, 0.69444, 0, 0, 0.88889],
    "9667": [-0.03472, 0.46528, 0, 0, 0.5],
    "9711": [0.19444, 0.69444, 0, 0, 1.0],
    "9824": [0.12963, 0.69444, 0, 0, 0.77778],
    "9825": [0.12963, 0.69444, 0, 0, 0.77778],
    "9826": [0.12963, 0.69444, 0, 0, 0.77778],
    "9827": [0.12963, 0.69444, 0, 0, 0.77778],
    "9837": [0, 0.75, 0, 0, 0.38889],
    "9838": [0.19444, 0.69444, 0, 0, 0.38889],
    "9839": [0.19444, 0.69444, 0, 0, 0.38889],
    "10216": [0.25, 0.75, 0, 0, 0.38889],
    "10217": [0.25, 0.75, 0, 0, 0.38889],
    "10222": [0.244, 0.744, 0, 0, 0.412],
    "10223": [0.244, 0.745, 0, 0, 0.412],
    "10229": [0.011, 0.511, 0, 0, 1.609],
    "10230": [0.011, 0.511, 0, 0, 1.638],
    "10231": [0.011, 0.511, 0, 0, 1.859],
    "10232": [0.024, 0.525, 0, 0, 1.609],
    "10233": [0.024, 0.525, 0, 0, 1.638],
    "10234": [0.024, 0.525, 0, 0, 1.858],
    "10236": [0.011, 0.511, 0, 0, 1.638],
    "10815": [0, 0.68333, 0, 0, 0.75],
    "10927": [0.13597, 0.63597, 0, 0, 0.77778],
    "10928": [0.13597, 0.63597, 0, 0, 0.77778],
    "57376": [0.19444, 0.69444, 0, 0, 0]
  },
  "Math-BoldItalic": {
    "32": [0, 0, 0, 0, 0.25],
    "48": [0, 0.44444, 0, 0, 0.575],
    "49": [0, 0.44444, 0, 0, 0.575],
    "50": [0, 0.44444, 0, 0, 0.575],
    "51": [0.19444, 0.44444, 0, 0, 0.575],
    "52": [0.19444, 0.44444, 0, 0, 0.575],
    "53": [0.19444, 0.44444, 0, 0, 0.575],
    "54": [0, 0.64444, 0, 0, 0.575],
    "55": [0.19444, 0.44444, 0, 0, 0.575],
    "56": [0, 0.64444, 0, 0, 0.575],
    "57": [0.19444, 0.44444, 0, 0, 0.575],
    "65": [0, 0.68611, 0, 0, 0.86944],
    "66": [0, 0.68611, 0.04835, 0, 0.8664],
    "67": [0, 0.68611, 0.06979, 0, 0.81694],
    "68": [0, 0.68611, 0.03194, 0, 0.93812],
    "69": [0, 0.68611, 0.05451, 0, 0.81007],
    "70": [0, 0.68611, 0.15972, 0, 0.68889],
    "71": [0, 0.68611, 0, 0, 0.88673],
    "72": [0, 0.68611, 0.08229, 0, 0.98229],
    "73": [0, 0.68611, 0.07778, 0, 0.51111],
    "74": [0, 0.68611, 0.10069, 0, 0.63125],
    "75": [0, 0.68611, 0.06979, 0, 0.97118],
    "76": [0, 0.68611, 0, 0, 0.75555],
    "77": [0, 0.68611, 0.11424, 0, 1.14201],
    "78": [0, 0.68611, 0.11424, 0, 0.95034],
    "79": [0, 0.68611, 0.03194, 0, 0.83666],
    "80": [0, 0.68611, 0.15972, 0, 0.72309],
    "81": [0.19444, 0.68611, 0, 0, 0.86861],
    "82": [0, 0.68611, 0.00421, 0, 0.87235],
    "83": [0, 0.68611, 0.05382, 0, 0.69271],
    "84": [0, 0.68611, 0.15972, 0, 0.63663],
    "85": [0, 0.68611, 0.11424, 0, 0.80027],
    "86": [0, 0.68611, 0.25555, 0, 0.67778],
    "87": [0, 0.68611, 0.15972, 0, 1.09305],
    "88": [0, 0.68611, 0.07778, 0, 0.94722],
    "89": [0, 0.68611, 0.25555, 0, 0.67458],
    "90": [0, 0.68611, 0.06979, 0, 0.77257],
    "97": [0, 0.44444, 0, 0, 0.63287],
    "98": [0, 0.69444, 0, 0, 0.52083],
    "99": [0, 0.44444, 0, 0, 0.51342],
    "100": [0, 0.69444, 0, 0, 0.60972],
    "101": [0, 0.44444, 0, 0, 0.55361],
    "102": [0.19444, 0.69444, 0.11042, 0, 0.56806],
    "103": [0.19444, 0.44444, 0.03704, 0, 0.5449],
    "104": [0, 0.69444, 0, 0, 0.66759],
    "105": [0, 0.69326, 0, 0, 0.4048],
    "106": [0.19444, 0.69326, 0.0622, 0, 0.47083],
    "107": [0, 0.69444, 0.01852, 0, 0.6037],
    "108": [0, 0.69444, 0.0088, 0, 0.34815],
    "109": [0, 0.44444, 0, 0, 1.0324],
    "110": [0, 0.44444, 0, 0, 0.71296],
    "111": [0, 0.44444, 0, 0, 0.58472],
    "112": [0.19444, 0.44444, 0, 0, 0.60092],
    "113": [0.19444, 0.44444, 0.03704, 0, 0.54213],
    "114": [0, 0.44444, 0.03194, 0, 0.5287],
    "115": [0, 0.44444, 0, 0, 0.53125],
    "116": [0, 0.63492, 0, 0, 0.41528],
    "117": [0, 0.44444, 0, 0, 0.68102],
    "118": [0, 0.44444, 0.03704, 0, 0.56666],
    "119": [0, 0.44444, 0.02778, 0, 0.83148],
    "120": [0, 0.44444, 0, 0, 0.65903],
    "121": [0.19444, 0.44444, 0.03704, 0, 0.59028],
    "122": [0, 0.44444, 0.04213, 0, 0.55509],
    "160": [0, 0, 0, 0, 0.25],
    "915": [0, 0.68611, 0.15972, 0, 0.65694],
    "916": [0, 0.68611, 0, 0, 0.95833],
    "920": [0, 0.68611, 0.03194, 0, 0.86722],
    "923": [0, 0.68611, 0, 0, 0.80555],
    "926": [0, 0.68611, 0.07458, 0, 0.84125],
    "928": [0, 0.68611, 0.08229, 0, 0.98229],
    "931": [0, 0.68611, 0.05451, 0, 0.88507],
    "933": [0, 0.68611, 0.15972, 0, 0.67083],
    "934": [0, 0.68611, 0, 0, 0.76666],
    "936": [0, 0.68611, 0.11653, 0, 0.71402],
    "937": [0, 0.68611, 0.04835, 0, 0.8789],
    "945": [0, 0.44444, 0, 0, 0.76064],
    "946": [0.19444, 0.69444, 0.03403, 0, 0.65972],
    "947": [0.19444, 0.44444, 0.06389, 0, 0.59003],
    "948": [0, 0.69444, 0.03819, 0, 0.52222],
    "949": [0, 0.44444, 0, 0, 0.52882],
    "950": [0.19444, 0.69444, 0.06215, 0, 0.50833],
    "951": [0.19444, 0.44444, 0.03704, 0, 0.6],
    "952": [0, 0.69444, 0.03194, 0, 0.5618],
    "953": [0, 0.44444, 0, 0, 0.41204],
    "954": [0, 0.44444, 0, 0, 0.66759],
    "955": [0, 0.69444, 0, 0, 0.67083],
    "956": [0.19444, 0.44444, 0, 0, 0.70787],
    "957": [0, 0.44444, 0.06898, 0, 0.57685],
    "958": [0.19444, 0.69444, 0.03021, 0, 0.50833],
    "959": [0, 0.44444, 0, 0, 0.58472],
    "960": [0, 0.44444, 0.03704, 0, 0.68241],
    "961": [0.19444, 0.44444, 0, 0, 0.6118],
    "962": [0.09722, 0.44444, 0.07917, 0, 0.42361],
    "963": [0, 0.44444, 0.03704, 0, 0.68588],
    "964": [0, 0.44444, 0.13472, 0, 0.52083],
    "965": [0, 0.44444, 0.03704, 0, 0.63055],
    "966": [0.19444, 0.44444, 0, 0, 0.74722],
    "967": [0.19444, 0.44444, 0, 0, 0.71805],
    "968": [0.19444, 0.69444, 0.03704, 0, 0.75833],
    "969": [0, 0.44444, 0.03704, 0, 0.71782],
    "977": [0, 0.69444, 0, 0, 0.69155],
    "981": [0.19444, 0.69444, 0, 0, 0.7125],
    "982": [0, 0.44444, 0.03194, 0, 0.975],
    "1009": [0.19444, 0.44444, 0, 0, 0.6118],
    "1013": [0, 0.44444, 0, 0, 0.48333],
    "57649": [0, 0.44444, 0, 0, 0.39352],
    "57911": [0.19444, 0.44444, 0, 0, 0.43889]
  },
  "Math-Italic": {
    "32": [0, 0, 0, 0, 0.25],
    "48": [0, 0.43056, 0, 0, 0.5],
    "49": [0, 0.43056, 0, 0, 0.5],
    "50": [0, 0.43056, 0, 0, 0.5],
    "51": [0.19444, 0.43056, 0, 0, 0.5],
    "52": [0.19444, 0.43056, 0, 0, 0.5],
    "53": [0.19444, 0.43056, 0, 0, 0.5],
    "54": [0, 0.64444, 0, 0, 0.5],
    "55": [0.19444, 0.43056, 0, 0, 0.5],
    "56": [0, 0.64444, 0, 0, 0.5],
    "57": [0.19444, 0.43056, 0, 0, 0.5],
    "65": [0, 0.68333, 0, 0.13889, 0.75],
    "66": [0, 0.68333, 0.05017, 0.08334, 0.75851],
    "67": [0, 0.68333, 0.07153, 0.08334, 0.71472],
    "68": [0, 0.68333, 0.02778, 0.05556, 0.82792],
    "69": [0, 0.68333, 0.05764, 0.08334, 0.7382],
    "70": [0, 0.68333, 0.13889, 0.08334, 0.64306],
    "71": [0, 0.68333, 0, 0.08334, 0.78625],
    "72": [0, 0.68333, 0.08125, 0.05556, 0.83125],
    "73": [0, 0.68333, 0.07847, 0.11111, 0.43958],
    "74": [0, 0.68333, 0.09618, 0.16667, 0.55451],
    "75": [0, 0.68333, 0.07153, 0.05556, 0.84931],
    "76": [0, 0.68333, 0, 0.02778, 0.68056],
    "77": [0, 0.68333, 0.10903, 0.08334, 0.97014],
    "78": [0, 0.68333, 0.10903, 0.08334, 0.80347],
    "79": [0, 0.68333, 0.02778, 0.08334, 0.76278],
    "80": [0, 0.68333, 0.13889, 0.08334, 0.64201],
    "81": [0.19444, 0.68333, 0, 0.08334, 0.79056],
    "82": [0, 0.68333, 0.00773, 0.08334, 0.75929],
    "83": [0, 0.68333, 0.05764, 0.08334, 0.6132],
    "84": [0, 0.68333, 0.13889, 0.08334, 0.58438],
    "85": [0, 0.68333, 0.10903, 0.02778, 0.68278],
    "86": [0, 0.68333, 0.22222, 0, 0.58333],
    "87": [0, 0.68333, 0.13889, 0, 0.94445],
    "88": [0, 0.68333, 0.07847, 0.08334, 0.82847],
    "89": [0, 0.68333, 0.22222, 0, 0.58056],
    "90": [0, 0.68333, 0.07153, 0.08334, 0.68264],
    "97": [0, 0.43056, 0, 0, 0.52859],
    "98": [0, 0.69444, 0, 0, 0.42917],
    "99": [0, 0.43056, 0, 0.05556, 0.43276],
    "100": [0, 0.69444, 0, 0.16667, 0.52049],
    "101": [0, 0.43056, 0, 0.05556, 0.46563],
    "102": [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
    "103": [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
    "104": [0, 0.69444, 0, 0, 0.57616],
    "105": [0, 0.65952, 0, 0, 0.34451],
    "106": [0.19444, 0.65952, 0.05724, 0, 0.41181],
    "107": [0, 0.69444, 0.03148, 0, 0.5206],
    "108": [0, 0.69444, 0.01968, 0.08334, 0.29838],
    "109": [0, 0.43056, 0, 0, 0.87801],
    "110": [0, 0.43056, 0, 0, 0.60023],
    "111": [0, 0.43056, 0, 0.05556, 0.48472],
    "112": [0.19444, 0.43056, 0, 0.08334, 0.50313],
    "113": [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
    "114": [0, 0.43056, 0.02778, 0.05556, 0.45116],
    "115": [0, 0.43056, 0, 0.05556, 0.46875],
    "116": [0, 0.61508, 0, 0.08334, 0.36111],
    "117": [0, 0.43056, 0, 0.02778, 0.57246],
    "118": [0, 0.43056, 0.03588, 0.02778, 0.48472],
    "119": [0, 0.43056, 0.02691, 0.08334, 0.71592],
    "120": [0, 0.43056, 0, 0.02778, 0.57153],
    "121": [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
    "122": [0, 0.43056, 0.04398, 0.05556, 0.46505],
    "160": [0, 0, 0, 0, 0.25],
    "915": [0, 0.68333, 0.13889, 0.08334, 0.61528],
    "916": [0, 0.68333, 0, 0.16667, 0.83334],
    "920": [0, 0.68333, 0.02778, 0.08334, 0.76278],
    "923": [0, 0.68333, 0, 0.16667, 0.69445],
    "926": [0, 0.68333, 0.07569, 0.08334, 0.74236],
    "928": [0, 0.68333, 0.08125, 0.05556, 0.83125],
    "931": [0, 0.68333, 0.05764, 0.08334, 0.77986],
    "933": [0, 0.68333, 0.13889, 0.05556, 0.58333],
    "934": [0, 0.68333, 0, 0.08334, 0.66667],
    "936": [0, 0.68333, 0.11, 0.05556, 0.61222],
    "937": [0, 0.68333, 0.05017, 0.08334, 0.7724],
    "945": [0, 0.43056, 0.0037, 0.02778, 0.6397],
    "946": [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
    "947": [0.19444, 0.43056, 0.05556, 0, 0.51773],
    "948": [0, 0.69444, 0.03785, 0.05556, 0.44444],
    "949": [0, 0.43056, 0, 0.08334, 0.46632],
    "950": [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
    "951": [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
    "952": [0, 0.69444, 0.02778, 0.08334, 0.46944],
    "953": [0, 0.43056, 0, 0.05556, 0.35394],
    "954": [0, 0.43056, 0, 0, 0.57616],
    "955": [0, 0.69444, 0, 0, 0.58334],
    "956": [0.19444, 0.43056, 0, 0.02778, 0.60255],
    "957": [0, 0.43056, 0.06366, 0.02778, 0.49398],
    "958": [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
    "959": [0, 0.43056, 0, 0.05556, 0.48472],
    "960": [0, 0.43056, 0.03588, 0, 0.57003],
    "961": [0.19444, 0.43056, 0, 0.08334, 0.51702],
    "962": [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
    "963": [0, 0.43056, 0.03588, 0, 0.57141],
    "964": [0, 0.43056, 0.1132, 0.02778, 0.43715],
    "965": [0, 0.43056, 0.03588, 0.02778, 0.54028],
    "966": [0.19444, 0.43056, 0, 0.08334, 0.65417],
    "967": [0.19444, 0.43056, 0, 0.05556, 0.62569],
    "968": [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
    "969": [0, 0.43056, 0.03588, 0, 0.62245],
    "977": [0, 0.69444, 0, 0.08334, 0.59144],
    "981": [0.19444, 0.69444, 0, 0.08334, 0.59583],
    "982": [0, 0.43056, 0.02778, 0, 0.82813],
    "1009": [0.19444, 0.43056, 0, 0.08334, 0.51702],
    "1013": [0, 0.43056, 0, 0.05556, 0.4059],
    "57649": [0, 0.43056, 0, 0.02778, 0.32246],
    "57911": [0.19444, 0.43056, 0, 0.08334, 0.38403]
  },
  "SansSerif-Bold": {
    "32": [0, 0, 0, 0, 0.25],
    "33": [0, 0.69444, 0, 0, 0.36667],
    "34": [0, 0.69444, 0, 0, 0.55834],
    "35": [0.19444, 0.69444, 0, 0, 0.91667],
    "36": [0.05556, 0.75, 0, 0, 0.55],
    "37": [0.05556, 0.75, 0, 0, 1.02912],
    "38": [0, 0.69444, 0, 0, 0.83056],
    "39": [0, 0.69444, 0, 0, 0.30556],
    "40": [0.25, 0.75, 0, 0, 0.42778],
    "41": [0.25, 0.75, 0, 0, 0.42778],
    "42": [0, 0.75, 0, 0, 0.55],
    "43": [0.11667, 0.61667, 0, 0, 0.85556],
    "44": [0.10556, 0.13056, 0, 0, 0.30556],
    "45": [0, 0.45833, 0, 0, 0.36667],
    "46": [0, 0.13056, 0, 0, 0.30556],
    "47": [0.25, 0.75, 0, 0, 0.55],
    "48": [0, 0.69444, 0, 0, 0.55],
    "49": [0, 0.69444, 0, 0, 0.55],
    "50": [0, 0.69444, 0, 0, 0.55],
    "51": [0, 0.69444, 0, 0, 0.55],
    "52": [0, 0.69444, 0, 0, 0.55],
    "53": [0, 0.69444, 0, 0, 0.55],
    "54": [0, 0.69444, 0, 0, 0.55],
    "55": [0, 0.69444, 0, 0, 0.55],
    "56": [0, 0.69444, 0, 0, 0.55],
    "57": [0, 0.69444, 0, 0, 0.55],
    "58": [0, 0.45833, 0, 0, 0.30556],
    "59": [0.10556, 0.45833, 0, 0, 0.30556],
    "61": [-0.09375, 0.40625, 0, 0, 0.85556],
    "63": [0, 0.69444, 0, 0, 0.51945],
    "64": [0, 0.69444, 0, 0, 0.73334],
    "65": [0, 0.69444, 0, 0, 0.73334],
    "66": [0, 0.69444, 0, 0, 0.73334],
    "67": [0, 0.69444, 0, 0, 0.70278],
    "68": [0, 0.69444, 0, 0, 0.79445],
    "69": [0, 0.69444, 0, 0, 0.64167],
    "70": [0, 0.69444, 0, 0, 0.61111],
    "71": [0, 0.69444, 0, 0, 0.73334],
    "72": [0, 0.69444, 0, 0, 0.79445],
    "73": [0, 0.69444, 0, 0, 0.33056],
    "74": [0, 0.69444, 0, 0, 0.51945],
    "75": [0, 0.69444, 0, 0, 0.76389],
    "76": [0, 0.69444, 0, 0, 0.58056],
    "77": [0, 0.69444, 0, 0, 0.97778],
    "78": [0, 0.69444, 0, 0, 0.79445],
    "79": [0, 0.69444, 0, 0, 0.79445],
    "80": [0, 0.69444, 0, 0, 0.70278],
    "81": [0.10556, 0.69444, 0, 0, 0.79445],
    "82": [0, 0.69444, 0, 0, 0.70278],
    "83": [0, 0.69444, 0, 0, 0.61111],
    "84": [0, 0.69444, 0, 0, 0.73334],
    "85": [0, 0.69444, 0, 0, 0.76389],
    "86": [0, 0.69444, 0.01528, 0, 0.73334],
    "87": [0, 0.69444, 0.01528, 0, 1.03889],
    "88": [0, 0.69444, 0, 0, 0.73334],
    "89": [0, 0.69444, 0.0275, 0, 0.73334],
    "90": [0, 0.69444, 0, 0, 0.67223],
    "91": [0.25, 0.75, 0, 0, 0.34306],
    "93": [0.25, 0.75, 0, 0, 0.34306],
    "94": [0, 0.69444, 0, 0, 0.55],
    "95": [0.35, 0.10833, 0.03056, 0, 0.55],
    "97": [0, 0.45833, 0, 0, 0.525],
    "98": [0, 0.69444, 0, 0, 0.56111],
    "99": [0, 0.45833, 0, 0, 0.48889],
    "100": [0, 0.69444, 0, 0, 0.56111],
    "101": [0, 0.45833, 0, 0, 0.51111],
    "102": [0, 0.69444, 0.07639, 0, 0.33611],
    "103": [0.19444, 0.45833, 0.01528, 0, 0.55],
    "104": [0, 0.69444, 0, 0, 0.56111],
    "105": [0, 0.69444, 0, 0, 0.25556],
    "106": [0.19444, 0.69444, 0, 0, 0.28611],
    "107": [0, 0.69444, 0, 0, 0.53056],
    "108": [0, 0.69444, 0, 0, 0.25556],
    "109": [0, 0.45833, 0, 0, 0.86667],
    "110": [0, 0.45833, 0, 0, 0.56111],
    "111": [0, 0.45833, 0, 0, 0.55],
    "112": [0.19444, 0.45833, 0, 0, 0.56111],
    "113": [0.19444, 0.45833, 0, 0, 0.56111],
    "114": [0, 0.45833, 0.01528, 0, 0.37222],
    "115": [0, 0.45833, 0, 0, 0.42167],
    "116": [0, 0.58929, 0, 0, 0.40417],
    "117": [0, 0.45833, 0, 0, 0.56111],
    "118": [0, 0.45833, 0.01528, 0, 0.5],
    "119": [0, 0.45833, 0.01528, 0, 0.74445],
    "120": [0, 0.45833, 0, 0, 0.5],
    "121": [0.19444, 0.45833, 0.01528, 0, 0.5],
    "122": [0, 0.45833, 0, 0, 0.47639],
    "126": [0.35, 0.34444, 0, 0, 0.55],
    "160": [0, 0, 0, 0, 0.25],
    "168": [0, 0.69444, 0, 0, 0.55],
    "176": [0, 0.69444, 0, 0, 0.73334],
    "180": [0, 0.69444, 0, 0, 0.55],
    "184": [0.17014, 0, 0, 0, 0.48889],
    "305": [0, 0.45833, 0, 0, 0.25556],
    "567": [0.19444, 0.45833, 0, 0, 0.28611],
    "710": [0, 0.69444, 0, 0, 0.55],
    "711": [0, 0.63542, 0, 0, 0.55],
    "713": [0, 0.63778, 0, 0, 0.55],
    "728": [0, 0.69444, 0, 0, 0.55],
    "729": [0, 0.69444, 0, 0, 0.30556],
    "730": [0, 0.69444, 0, 0, 0.73334],
    "732": [0, 0.69444, 0, 0, 0.55],
    "733": [0, 0.69444, 0, 0, 0.55],
    "915": [0, 0.69444, 0, 0, 0.58056],
    "916": [0, 0.69444, 0, 0, 0.91667],
    "920": [0, 0.69444, 0, 0, 0.85556],
    "923": [0, 0.69444, 0, 0, 0.67223],
    "926": [0, 0.69444, 0, 0, 0.73334],
    "928": [0, 0.69444, 0, 0, 0.79445],
    "931": [0, 0.69444, 0, 0, 0.79445],
    "933": [0, 0.69444, 0, 0, 0.85556],
    "934": [0, 0.69444, 0, 0, 0.79445],
    "936": [0, 0.69444, 0, 0, 0.85556],
    "937": [0, 0.69444, 0, 0, 0.79445],
    "8211": [0, 0.45833, 0.03056, 0, 0.55],
    "8212": [0, 0.45833, 0.03056, 0, 1.10001],
    "8216": [0, 0.69444, 0, 0, 0.30556],
    "8217": [0, 0.69444, 0, 0, 0.30556],
    "8220": [0, 0.69444, 0, 0, 0.55834],
    "8221": [0, 0.69444, 0, 0, 0.55834]
  },
  "SansSerif-Italic": {
    "32": [0, 0, 0, 0, 0.25],
    "33": [0, 0.69444, 0.05733, 0, 0.31945],
    "34": [0, 0.69444, 0.00316, 0, 0.5],
    "35": [0.19444, 0.69444, 0.05087, 0, 0.83334],
    "36": [0.05556, 0.75, 0.11156, 0, 0.5],
    "37": [0.05556, 0.75, 0.03126, 0, 0.83334],
    "38": [0, 0.69444, 0.03058, 0, 0.75834],
    "39": [0, 0.69444, 0.07816, 0, 0.27778],
    "40": [0.25, 0.75, 0.13164, 0, 0.38889],
    "41": [0.25, 0.75, 0.02536, 0, 0.38889],
    "42": [0, 0.75, 0.11775, 0, 0.5],
    "43": [0.08333, 0.58333, 0.02536, 0, 0.77778],
    "44": [0.125, 0.08333, 0, 0, 0.27778],
    "45": [0, 0.44444, 0.01946, 0, 0.33333],
    "46": [0, 0.08333, 0, 0, 0.27778],
    "47": [0.25, 0.75, 0.13164, 0, 0.5],
    "48": [0, 0.65556, 0.11156, 0, 0.5],
    "49": [0, 0.65556, 0.11156, 0, 0.5],
    "50": [0, 0.65556, 0.11156, 0, 0.5],
    "51": [0, 0.65556, 0.11156, 0, 0.5],
    "52": [0, 0.65556, 0.11156, 0, 0.5],
    "53": [0, 0.65556, 0.11156, 0, 0.5],
    "54": [0, 0.65556, 0.11156, 0, 0.5],
    "55": [0, 0.65556, 0.11156, 0, 0.5],
    "56": [0, 0.65556, 0.11156, 0, 0.5],
    "57": [0, 0.65556, 0.11156, 0, 0.5],
    "58": [0, 0.44444, 0.02502, 0, 0.27778],
    "59": [0.125, 0.44444, 0.02502, 0, 0.27778],
    "61": [-0.13, 0.37, 0.05087, 0, 0.77778],
    "63": [0, 0.69444, 0.11809, 0, 0.47222],
    "64": [0, 0.69444, 0.07555, 0, 0.66667],
    "65": [0, 0.69444, 0, 0, 0.66667],
    "66": [0, 0.69444, 0.08293, 0, 0.66667],
    "67": [0, 0.69444, 0.11983, 0, 0.63889],
    "68": [0, 0.69444, 0.07555, 0, 0.72223],
    "69": [0, 0.69444, 0.11983, 0, 0.59722],
    "70": [0, 0.69444, 0.13372, 0, 0.56945],
    "71": [0, 0.69444, 0.11983, 0, 0.66667],
    "72": [0, 0.69444, 0.08094, 0, 0.70834],
    "73": [0, 0.69444, 0.13372, 0, 0.27778],
    "74": [0, 0.69444, 0.08094, 0, 0.47222],
    "75": [0, 0.69444, 0.11983, 0, 0.69445],
    "76": [0, 0.69444, 0, 0, 0.54167],
    "77": [0, 0.69444, 0.08094, 0, 0.875],
    "78": [0, 0.69444, 0.08094, 0, 0.70834],
    "79": [0, 0.69444, 0.07555, 0, 0.73611],
    "80": [0, 0.69444, 0.08293, 0, 0.63889],
    "81": [0.125, 0.69444, 0.07555, 0, 0.73611],
    "82": [0, 0.69444, 0.08293, 0, 0.64584],
    "83": [0, 0.69444, 0.09205, 0, 0.55556],
    "84": [0, 0.69444, 0.13372, 0, 0.68056],
    "85": [0, 0.69444, 0.08094, 0, 0.6875],
    "86": [0, 0.69444, 0.1615, 0, 0.66667],
    "87": [0, 0.69444, 0.1615, 0, 0.94445],
    "88": [0, 0.69444, 0.13372, 0, 0.66667],
    "89": [0, 0.69444, 0.17261, 0, 0.66667],
    "90": [0, 0.69444, 0.11983, 0, 0.61111],
    "91": [0.25, 0.75, 0.15942, 0, 0.28889],
    "93": [0.25, 0.75, 0.08719, 0, 0.28889],
    "94": [0, 0.69444, 0.0799, 0, 0.5],
    "95": [0.35, 0.09444, 0.08616, 0, 0.5],
    "97": [0, 0.44444, 0.00981, 0, 0.48056],
    "98": [0, 0.69444, 0.03057, 0, 0.51667],
    "99": [0, 0.44444, 0.08336, 0, 0.44445],
    "100": [0, 0.69444, 0.09483, 0, 0.51667],
    "101": [0, 0.44444, 0.06778, 0, 0.44445],
    "102": [0, 0.69444, 0.21705, 0, 0.30556],
    "103": [0.19444, 0.44444, 0.10836, 0, 0.5],
    "104": [0, 0.69444, 0.01778, 0, 0.51667],
    "105": [0, 0.67937, 0.09718, 0, 0.23889],
    "106": [0.19444, 0.67937, 0.09162, 0, 0.26667],
    "107": [0, 0.69444, 0.08336, 0, 0.48889],
    "108": [0, 0.69444, 0.09483, 0, 0.23889],
    "109": [0, 0.44444, 0.01778, 0, 0.79445],
    "110": [0, 0.44444, 0.01778, 0, 0.51667],
    "111": [0, 0.44444, 0.06613, 0, 0.5],
    "112": [0.19444, 0.44444, 0.0389, 0, 0.51667],
    "113": [0.19444, 0.44444, 0.04169, 0, 0.51667],
    "114": [0, 0.44444, 0.10836, 0, 0.34167],
    "115": [0, 0.44444, 0.0778, 0, 0.38333],
    "116": [0, 0.57143, 0.07225, 0, 0.36111],
    "117": [0, 0.44444, 0.04169, 0, 0.51667],
    "118": [0, 0.44444, 0.10836, 0, 0.46111],
    "119": [0, 0.44444, 0.10836, 0, 0.68334],
    "120": [0, 0.44444, 0.09169, 0, 0.46111],
    "121": [0.19444, 0.44444, 0.10836, 0, 0.46111],
    "122": [0, 0.44444, 0.08752, 0, 0.43472],
    "126": [0.35, 0.32659, 0.08826, 0, 0.5],
    "160": [0, 0, 0, 0, 0.25],
    "168": [0, 0.67937, 0.06385, 0, 0.5],
    "176": [0, 0.69444, 0, 0, 0.73752],
    "184": [0.17014, 0, 0, 0, 0.44445],
    "305": [0, 0.44444, 0.04169, 0, 0.23889],
    "567": [0.19444, 0.44444, 0.04169, 0, 0.26667],
    "710": [0, 0.69444, 0.0799, 0, 0.5],
    "711": [0, 0.63194, 0.08432, 0, 0.5],
    "713": [0, 0.60889, 0.08776, 0, 0.5],
    "714": [0, 0.69444, 0.09205, 0, 0.5],
    "715": [0, 0.69444, 0, 0, 0.5],
    "728": [0, 0.69444, 0.09483, 0, 0.5],
    "729": [0, 0.67937, 0.07774, 0, 0.27778],
    "730": [0, 0.69444, 0, 0, 0.73752],
    "732": [0, 0.67659, 0.08826, 0, 0.5],
    "733": [0, 0.69444, 0.09205, 0, 0.5],
    "915": [0, 0.69444, 0.13372, 0, 0.54167],
    "916": [0, 0.69444, 0, 0, 0.83334],
    "920": [0, 0.69444, 0.07555, 0, 0.77778],
    "923": [0, 0.69444, 0, 0, 0.61111],
    "926": [0, 0.69444, 0.12816, 0, 0.66667],
    "928": [0, 0.69444, 0.08094, 0, 0.70834],
    "931": [0, 0.69444, 0.11983, 0, 0.72222],
    "933": [0, 0.69444, 0.09031, 0, 0.77778],
    "934": [0, 0.69444, 0.04603, 0, 0.72222],
    "936": [0, 0.69444, 0.09031, 0, 0.77778],
    "937": [0, 0.69444, 0.08293, 0, 0.72222],
    "8211": [0, 0.44444, 0.08616, 0, 0.5],
    "8212": [0, 0.44444, 0.08616, 0, 1.0],
    "8216": [0, 0.69444, 0.07816, 0, 0.27778],
    "8217": [0, 0.69444, 0.07816, 0, 0.27778],
    "8220": [0, 0.69444, 0.14205, 0, 0.5],
    "8221": [0, 0.69444, 0.00316, 0, 0.5]
  },
  "SansSerif-Regular": {
    "32": [0, 0, 0, 0, 0.25],
    "33": [0, 0.69444, 0, 0, 0.31945],
    "34": [0, 0.69444, 0, 0, 0.5],
    "35": [0.19444, 0.69444, 0, 0, 0.83334],
    "36": [0.05556, 0.75, 0, 0, 0.5],
    "37": [0.05556, 0.75, 0, 0, 0.83334],
    "38": [0, 0.69444, 0, 0, 0.75834],
    "39": [0, 0.69444, 0, 0, 0.27778],
    "40": [0.25, 0.75, 0, 0, 0.38889],
    "41": [0.25, 0.75, 0, 0, 0.38889],
    "42": [0, 0.75, 0, 0, 0.5],
    "43": [0.08333, 0.58333, 0, 0, 0.77778],
    "44": [0.125, 0.08333, 0, 0, 0.27778],
    "45": [0, 0.44444, 0, 0, 0.33333],
    "46": [0, 0.08333, 0, 0, 0.27778],
    "47": [0.25, 0.75, 0, 0, 0.5],
    "48": [0, 0.65556, 0, 0, 0.5],
    "49": [0, 0.65556, 0, 0, 0.5],
    "50": [0, 0.65556, 0, 0, 0.5],
    "51": [0, 0.65556, 0, 0, 0.5],
    "52": [0, 0.65556, 0, 0, 0.5],
    "53": [0, 0.65556, 0, 0, 0.5],
    "54": [0, 0.65556, 0, 0, 0.5],
    "55": [0, 0.65556, 0, 0, 0.5],
    "56": [0, 0.65556, 0, 0, 0.5],
    "57": [0, 0.65556, 0, 0, 0.5],
    "58": [0, 0.44444, 0, 0, 0.27778],
    "59": [0.125, 0.44444, 0, 0, 0.27778],
    "61": [-0.13, 0.37, 0, 0, 0.77778],
    "63": [0, 0.69444, 0, 0, 0.47222],
    "64": [0, 0.69444, 0, 0, 0.66667],
    "65": [0, 0.69444, 0, 0, 0.66667],
    "66": [0, 0.69444, 0, 0, 0.66667],
    "67": [0, 0.69444, 0, 0, 0.63889],
    "68": [0, 0.69444, 0, 0, 0.72223],
    "69": [0, 0.69444, 0, 0, 0.59722],
    "70": [0, 0.69444, 0, 0, 0.56945],
    "71": [0, 0.69444, 0, 0, 0.66667],
    "72": [0, 0.69444, 0, 0, 0.70834],
    "73": [0, 0.69444, 0, 0, 0.27778],
    "74": [0, 0.69444, 0, 0, 0.47222],
    "75": [0, 0.69444, 0, 0, 0.69445],
    "76": [0, 0.69444, 0, 0, 0.54167],
    "77": [0, 0.69444, 0, 0, 0.875],
    "78": [0, 0.69444, 0, 0, 0.70834],
    "79": [0, 0.69444, 0, 0, 0.73611],
    "80": [0, 0.69444, 0, 0, 0.63889],
    "81": [0.125, 0.69444, 0, 0, 0.73611],
    "82": [0, 0.69444, 0, 0, 0.64584],
    "83": [0, 0.69444, 0, 0, 0.55556],
    "84": [0, 0.69444, 0, 0, 0.68056],
    "85": [0, 0.69444, 0, 0, 0.6875],
    "86": [0, 0.69444, 0.01389, 0, 0.66667],
    "87": [0, 0.69444, 0.01389, 0, 0.94445],
    "88": [0, 0.69444, 0, 0, 0.66667],
    "89": [0, 0.69444, 0.025, 0, 0.66667],
    "90": [0, 0.69444, 0, 0, 0.61111],
    "91": [0.25, 0.75, 0, 0, 0.28889],
    "93": [0.25, 0.75, 0, 0, 0.28889],
    "94": [0, 0.69444, 0, 0, 0.5],
    "95": [0.35, 0.09444, 0.02778, 0, 0.5],
    "97": [0, 0.44444, 0, 0, 0.48056],
    "98": [0, 0.69444, 0, 0, 0.51667],
    "99": [0, 0.44444, 0, 0, 0.44445],
    "100": [0, 0.69444, 0, 0, 0.51667],
    "101": [0, 0.44444, 0, 0, 0.44445],
    "102": [0, 0.69444, 0.06944, 0, 0.30556],
    "103": [0.19444, 0.44444, 0.01389, 0, 0.5],
    "104": [0, 0.69444, 0, 0, 0.51667],
    "105": [0, 0.67937, 0, 0, 0.23889],
    "106": [0.19444, 0.67937, 0, 0, 0.26667],
    "107": [0, 0.69444, 0, 0, 0.48889],
    "108": [0, 0.69444, 0, 0, 0.23889],
    "109": [0, 0.44444, 0, 0, 0.79445],
    "110": [0, 0.44444, 0, 0, 0.51667],
    "111": [0, 0.44444, 0, 0, 0.5],
    "112": [0.19444, 0.44444, 0, 0, 0.51667],
    "113": [0.19444, 0.44444, 0, 0, 0.51667],
    "114": [0, 0.44444, 0.01389, 0, 0.34167],
    "115": [0, 0.44444, 0, 0, 0.38333],
    "116": [0, 0.57143, 0, 0, 0.36111],
    "117": [0, 0.44444, 0, 0, 0.51667],
    "118": [0, 0.44444, 0.01389, 0, 0.46111],
    "119": [0, 0.44444, 0.01389, 0, 0.68334],
    "120": [0, 0.44444, 0, 0, 0.46111],
    "121": [0.19444, 0.44444, 0.01389, 0, 0.46111],
    "122": [0, 0.44444, 0, 0, 0.43472],
    "126": [0.35, 0.32659, 0, 0, 0.5],
    "160": [0, 0, 0, 0, 0.25],
    "168": [0, 0.67937, 0, 0, 0.5],
    "176": [0, 0.69444, 0, 0, 0.66667],
    "184": [0.17014, 0, 0, 0, 0.44445],
    "305": [0, 0.44444, 0, 0, 0.23889],
    "567": [0.19444, 0.44444, 0, 0, 0.26667],
    "710": [0, 0.69444, 0, 0, 0.5],
    "711": [0, 0.63194, 0, 0, 0.5],
    "713": [0, 0.60889, 0, 0, 0.5],
    "714": [0, 0.69444, 0, 0, 0.5],
    "715": [0, 0.69444, 0, 0, 0.5],
    "728": [0, 0.69444, 0, 0, 0.5],
    "729": [0, 0.67937, 0, 0, 0.27778],
    "730": [0, 0.69444, 0, 0, 0.66667],
    "732": [0, 0.67659, 0, 0, 0.5],
    "733": [0, 0.69444, 0, 0, 0.5],
    "915": [0, 0.69444, 0, 0, 0.54167],
    "916": [0, 0.69444, 0, 0, 0.83334],
    "920": [0, 0.69444, 0, 0, 0.77778],
    "923": [0, 0.69444, 0, 0, 0.61111],
    "926": [0, 0.69444, 0, 0, 0.66667],
    "928": [0, 0.69444, 0, 0, 0.70834],
    "931": [0, 0.69444, 0, 0, 0.72222],
    "933": [0, 0.69444, 0, 0, 0.77778],
    "934": [0, 0.69444, 0, 0, 0.72222],
    "936": [0, 0.69444, 0, 0, 0.77778],
    "937": [0, 0.69444, 0, 0, 0.72222],
    "8211": [0, 0.44444, 0.02778, 0, 0.5],
    "8212": [0, 0.44444, 0.02778, 0, 1.0],
    "8216": [0, 0.69444, 0, 0, 0.27778],
    "8217": [0, 0.69444, 0, 0, 0.27778],
    "8220": [0, 0.69444, 0, 0, 0.5],
    "8221": [0, 0.69444, 0, 0, 0.5]
  },
  "Script-Regular": {
    "32": [0, 0, 0, 0, 0.25],
    "65": [0, 0.7, 0.22925, 0, 0.80253],
    "66": [0, 0.7, 0.04087, 0, 0.90757],
    "67": [0, 0.7, 0.1689, 0, 0.66619],
    "68": [0, 0.7, 0.09371, 0, 0.77443],
    "69": [0, 0.7, 0.18583, 0, 0.56162],
    "70": [0, 0.7, 0.13634, 0, 0.89544],
    "71": [0, 0.7, 0.17322, 0, 0.60961],
    "72": [0, 0.7, 0.29694, 0, 0.96919],
    "73": [0, 0.7, 0.19189, 0, 0.80907],
    "74": [0.27778, 0.7, 0.19189, 0, 1.05159],
    "75": [0, 0.7, 0.31259, 0, 0.91364],
    "76": [0, 0.7, 0.19189, 0, 0.87373],
    "77": [0, 0.7, 0.15981, 0, 1.08031],
    "78": [0, 0.7, 0.3525, 0, 0.9015],
    "79": [0, 0.7, 0.08078, 0, 0.73787],
    "80": [0, 0.7, 0.08078, 0, 1.01262],
    "81": [0, 0.7, 0.03305, 0, 0.88282],
    "82": [0, 0.7, 0.06259, 0, 0.85],
    "83": [0, 0.7, 0.19189, 0, 0.86767],
    "84": [0, 0.7, 0.29087, 0, 0.74697],
    "85": [0, 0.7, 0.25815, 0, 0.79996],
    "86": [0, 0.7, 0.27523, 0, 0.62204],
    "87": [0, 0.7, 0.27523, 0, 0.80532],
    "88": [0, 0.7, 0.26006, 0, 0.94445],
    "89": [0, 0.7, 0.2939, 0, 0.70961],
    "90": [0, 0.7, 0.24037, 0, 0.8212],
    "160": [0, 0, 0, 0, 0.25]
  },
  "Size1-Regular": {
    "32": [0, 0, 0, 0, 0.25],
    "40": [0.35001, 0.85, 0, 0, 0.45834],
    "41": [0.35001, 0.85, 0, 0, 0.45834],
    "47": [0.35001, 0.85, 0, 0, 0.57778],
    "91": [0.35001, 0.85, 0, 0, 0.41667],
    "92": [0.35001, 0.85, 0, 0, 0.57778],
    "93": [0.35001, 0.85, 0, 0, 0.41667],
    "123": [0.35001, 0.85, 0, 0, 0.58334],
    "125": [0.35001, 0.85, 0, 0, 0.58334],
    "160": [0, 0, 0, 0, 0.25],
    "710": [0, 0.72222, 0, 0, 0.55556],
    "732": [0, 0.72222, 0, 0, 0.55556],
    "770": [0, 0.72222, 0, 0, 0.55556],
    "771": [0, 0.72222, 0, 0, 0.55556],
    "8214": [-0.00099, 0.601, 0, 0, 0.77778],
    "8593": [1e-05, 0.6, 0, 0, 0.66667],
    "8595": [1e-05, 0.6, 0, 0, 0.66667],
    "8657": [1e-05, 0.6, 0, 0, 0.77778],
    "8659": [1e-05, 0.6, 0, 0, 0.77778],
    "8719": [0.25001, 0.75, 0, 0, 0.94445],
    "8720": [0.25001, 0.75, 0, 0, 0.94445],
    "8721": [0.25001, 0.75, 0, 0, 1.05556],
    "8730": [0.35001, 0.85, 0, 0, 1.0],
    "8739": [-0.00599, 0.606, 0, 0, 0.33333],
    "8741": [-0.00599, 0.606, 0, 0, 0.55556],
    "8747": [0.30612, 0.805, 0.19445, 0, 0.47222],
    "8748": [0.306, 0.805, 0.19445, 0, 0.47222],
    "8749": [0.306, 0.805, 0.19445, 0, 0.47222],
    "8750": [0.30612, 0.805, 0.19445, 0, 0.47222],
    "8896": [0.25001, 0.75, 0, 0, 0.83334],
    "8897": [0.25001, 0.75, 0, 0, 0.83334],
    "8898": [0.25001, 0.75, 0, 0, 0.83334],
    "8899": [0.25001, 0.75, 0, 0, 0.83334],
    "8968": [0.35001, 0.85, 0, 0, 0.47222],
    "8969": [0.35001, 0.85, 0, 0, 0.47222],
    "8970": [0.35001, 0.85, 0, 0, 0.47222],
    "8971": [0.35001, 0.85, 0, 0, 0.47222],
    "9168": [-0.00099, 0.601, 0, 0, 0.66667],
    "10216": [0.35001, 0.85, 0, 0, 0.47222],
    "10217": [0.35001, 0.85, 0, 0, 0.47222],
    "10752": [0.25001, 0.75, 0, 0, 1.11111],
    "10753": [0.25001, 0.75, 0, 0, 1.11111],
    "10754": [0.25001, 0.75, 0, 0, 1.11111],
    "10756": [0.25001, 0.75, 0, 0, 0.83334],
    "10758": [0.25001, 0.75, 0, 0, 0.83334]
  },
  "Size2-Regular": {
    "32": [0, 0, 0, 0, 0.25],
    "40": [0.65002, 1.15, 0, 0, 0.59722],
    "41": [0.65002, 1.15, 0, 0, 0.59722],
    "47": [0.65002, 1.15, 0, 0, 0.81111],
    "91": [0.65002, 1.15, 0, 0, 0.47222],
    "92": [0.65002, 1.15, 0, 0, 0.81111],
    "93": [0.65002, 1.15, 0, 0, 0.47222],
    "123": [0.65002, 1.15, 0, 0, 0.66667],
    "125": [0.65002, 1.15, 0, 0, 0.66667],
    "160": [0, 0, 0, 0, 0.25],
    "710": [0, 0.75, 0, 0, 1.0],
    "732": [0, 0.75, 0, 0, 1.0],
    "770": [0, 0.75, 0, 0, 1.0],
    "771": [0, 0.75, 0, 0, 1.0],
    "8719": [0.55001, 1.05, 0, 0, 1.27778],
    "8720": [0.55001, 1.05, 0, 0, 1.27778],
    "8721": [0.55001, 1.05, 0, 0, 1.44445],
    "8730": [0.65002, 1.15, 0, 0, 1.0],
    "8747": [0.86225, 1.36, 0.44445, 0, 0.55556],
    "8748": [0.862, 1.36, 0.44445, 0, 0.55556],
    "8749": [0.862, 1.36, 0.44445, 0, 0.55556],
    "8750": [0.86225, 1.36, 0.44445, 0, 0.55556],
    "8896": [0.55001, 1.05, 0, 0, 1.11111],
    "8897": [0.55001, 1.05, 0, 0, 1.11111],
    "8898": [0.55001, 1.05, 0, 0, 1.11111],
    "8899": [0.55001, 1.05, 0, 0, 1.11111],
    "8968": [0.65002, 1.15, 0, 0, 0.52778],
    "8969": [0.65002, 1.15, 0, 0, 0.52778],
    "8970": [0.65002, 1.15, 0, 0, 0.52778],
    "8971": [0.65002, 1.15, 0, 0, 0.52778],
    "10216": [0.65002, 1.15, 0, 0, 0.61111],
    "10217": [0.65002, 1.15, 0, 0, 0.61111],
    "10752": [0.55001, 1.05, 0, 0, 1.51112],
    "10753": [0.55001, 1.05, 0, 0, 1.51112],
    "10754": [0.55001, 1.05, 0, 0, 1.51112],
    "10756": [0.55001, 1.05, 0, 0, 1.11111],
    "10758": [0.55001, 1.05, 0, 0, 1.11111]
  },
  "Size3-Regular": {
    "32": [0, 0, 0, 0, 0.25],
    "40": [0.95003, 1.45, 0, 0, 0.73611],
    "41": [0.95003, 1.45, 0, 0, 0.73611],
    "47": [0.95003, 1.45, 0, 0, 1.04445],
    "91": [0.95003, 1.45, 0, 0, 0.52778],
    "92": [0.95003, 1.45, 0, 0, 1.04445],
    "93": [0.95003, 1.45, 0, 0, 0.52778],
    "123": [0.95003, 1.45, 0, 0, 0.75],
    "125": [0.95003, 1.45, 0, 0, 0.75],
    "160": [0, 0, 0, 0, 0.25],
    "710": [0, 0.75, 0, 0, 1.44445],
    "732": [0, 0.75, 0, 0, 1.44445],
    "770": [0, 0.75, 0, 0, 1.44445],
    "771": [0, 0.75, 0, 0, 1.44445],
    "8730": [0.95003, 1.45, 0, 0, 1.0],
    "8968": [0.95003, 1.45, 0, 0, 0.58334],
    "8969": [0.95003, 1.45, 0, 0, 0.58334],
    "8970": [0.95003, 1.45, 0, 0, 0.58334],
    "8971": [0.95003, 1.45, 0, 0, 0.58334],
    "10216": [0.95003, 1.45, 0, 0, 0.75],
    "10217": [0.95003, 1.45, 0, 0, 0.75]
  },
  "Size4-Regular": {
    "32": [0, 0, 0, 0, 0.25],
    "40": [1.25003, 1.75, 0, 0, 0.79167],
    "41": [1.25003, 1.75, 0, 0, 0.79167],
    "47": [1.25003, 1.75, 0, 0, 1.27778],
    "91": [1.25003, 1.75, 0, 0, 0.58334],
    "92": [1.25003, 1.75, 0, 0, 1.27778],
    "93": [1.25003, 1.75, 0, 0, 0.58334],
    "123": [1.25003, 1.75, 0, 0, 0.80556],
    "125": [1.25003, 1.75, 0, 0, 0.80556],
    "160": [0, 0, 0, 0, 0.25],
    "710": [0, 0.825, 0, 0, 1.8889],
    "732": [0, 0.825, 0, 0, 1.8889],
    "770": [0, 0.825, 0, 0, 1.8889],
    "771": [0, 0.825, 0, 0, 1.8889],
    "8730": [1.25003, 1.75, 0, 0, 1.0],
    "8968": [1.25003, 1.75, 0, 0, 0.63889],
    "8969": [1.25003, 1.75, 0, 0, 0.63889],
    "8970": [1.25003, 1.75, 0, 0, 0.63889],
    "8971": [1.25003, 1.75, 0, 0, 0.63889],
    "9115": [0.64502, 1.155, 0, 0, 0.875],
    "9116": [1e-05, 0.6, 0, 0, 0.875],
    "9117": [0.64502, 1.155, 0, 0, 0.875],
    "9118": [0.64502, 1.155, 0, 0, 0.875],
    "9119": [1e-05, 0.6, 0, 0, 0.875],
    "9120": [0.64502, 1.155, 0, 0, 0.875],
    "9121": [0.64502, 1.155, 0, 0, 0.66667],
    "9122": [-0.00099, 0.601, 0, 0, 0.66667],
    "9123": [0.64502, 1.155, 0, 0, 0.66667],
    "9124": [0.64502, 1.155, 0, 0, 0.66667],
    "9125": [-0.00099, 0.601, 0, 0, 0.66667],
    "9126": [0.64502, 1.155, 0, 0, 0.66667],
    "9127": [1e-05, 0.9, 0, 0, 0.88889],
    "9128": [0.65002, 1.15, 0, 0, 0.88889],
    "9129": [0.90001, 0, 0, 0, 0.88889],
    "9130": [0, 0.3, 0, 0, 0.88889],
    "9131": [1e-05, 0.9, 0, 0, 0.88889],
    "9132": [0.65002, 1.15, 0, 0, 0.88889],
    "9133": [0.90001, 0, 0, 0, 0.88889],
    "9143": [0.88502, 0.915, 0, 0, 1.05556],
    "10216": [1.25003, 1.75, 0, 0, 0.80556],
    "10217": [1.25003, 1.75, 0, 0, 0.80556],
    "57344": [-0.00499, 0.605, 0, 0, 1.05556],
    "57345": [-0.00499, 0.605, 0, 0, 1.05556],
    "57680": [0, 0.12, 0, 0, 0.45],
    "57681": [0, 0.12, 0, 0, 0.45],
    "57682": [0, 0.12, 0, 0, 0.45],
    "57683": [0, 0.12, 0, 0, 0.45]
  },
  "Typewriter-Regular": {
    "32": [0, 0, 0, 0, 0.525],
    "33": [0, 0.61111, 0, 0, 0.525],
    "34": [0, 0.61111, 0, 0, 0.525],
    "35": [0, 0.61111, 0, 0, 0.525],
    "36": [0.08333, 0.69444, 0, 0, 0.525],
    "37": [0.08333, 0.69444, 0, 0, 0.525],
    "38": [0, 0.61111, 0, 0, 0.525],
    "39": [0, 0.61111, 0, 0, 0.525],
    "40": [0.08333, 0.69444, 0, 0, 0.525],
    "41": [0.08333, 0.69444, 0, 0, 0.525],
    "42": [0, 0.52083, 0, 0, 0.525],
    "43": [-0.08056, 0.53055, 0, 0, 0.525],
    "44": [0.13889, 0.125, 0, 0, 0.525],
    "45": [-0.08056, 0.53055, 0, 0, 0.525],
    "46": [0, 0.125, 0, 0, 0.525],
    "47": [0.08333, 0.69444, 0, 0, 0.525],
    "48": [0, 0.61111, 0, 0, 0.525],
    "49": [0, 0.61111, 0, 0, 0.525],
    "50": [0, 0.61111, 0, 0, 0.525],
    "51": [0, 0.61111, 0, 0, 0.525],
    "52": [0, 0.61111, 0, 0, 0.525],
    "53": [0, 0.61111, 0, 0, 0.525],
    "54": [0, 0.61111, 0, 0, 0.525],
    "55": [0, 0.61111, 0, 0, 0.525],
    "56": [0, 0.61111, 0, 0, 0.525],
    "57": [0, 0.61111, 0, 0, 0.525],
    "58": [0, 0.43056, 0, 0, 0.525],
    "59": [0.13889, 0.43056, 0, 0, 0.525],
    "60": [-0.05556, 0.55556, 0, 0, 0.525],
    "61": [-0.19549, 0.41562, 0, 0, 0.525],
    "62": [-0.05556, 0.55556, 0, 0, 0.525],
    "63": [0, 0.61111, 0, 0, 0.525],
    "64": [0, 0.61111, 0, 0, 0.525],
    "65": [0, 0.61111, 0, 0, 0.525],
    "66": [0, 0.61111, 0, 0, 0.525],
    "67": [0, 0.61111, 0, 0, 0.525],
    "68": [0, 0.61111, 0, 0, 0.525],
    "69": [0, 0.61111, 0, 0, 0.525],
    "70": [0, 0.61111, 0, 0, 0.525],
    "71": [0, 0.61111, 0, 0, 0.525],
    "72": [0, 0.61111, 0, 0, 0.525],
    "73": [0, 0.61111, 0, 0, 0.525],
    "74": [0, 0.61111, 0, 0, 0.525],
    "75": [0, 0.61111, 0, 0, 0.525],
    "76": [0, 0.61111, 0, 0, 0.525],
    "77": [0, 0.61111, 0, 0, 0.525],
    "78": [0, 0.61111, 0, 0, 0.525],
    "79": [0, 0.61111, 0, 0, 0.525],
    "80": [0, 0.61111, 0, 0, 0.525],
    "81": [0.13889, 0.61111, 0, 0, 0.525],
    "82": [0, 0.61111, 0, 0, 0.525],
    "83": [0, 0.61111, 0, 0, 0.525],
    "84": [0, 0.61111, 0, 0, 0.525],
    "85": [0, 0.61111, 0, 0, 0.525],
    "86": [0, 0.61111, 0, 0, 0.525],
    "87": [0, 0.61111, 0, 0, 0.525],
    "88": [0, 0.61111, 0, 0, 0.525],
    "89": [0, 0.61111, 0, 0, 0.525],
    "90": [0, 0.61111, 0, 0, 0.525],
    "91": [0.08333, 0.69444, 0, 0, 0.525],
    "92": [0.08333, 0.69444, 0, 0, 0.525],
    "93": [0.08333, 0.69444, 0, 0, 0.525],
    "94": [0, 0.61111, 0, 0, 0.525],
    "95": [0.09514, 0, 0, 0, 0.525],
    "96": [0, 0.61111, 0, 0, 0.525],
    "97": [0, 0.43056, 0, 0, 0.525],
    "98": [0, 0.61111, 0, 0, 0.525],
    "99": [0, 0.43056, 0, 0, 0.525],
    "100": [0, 0.61111, 0, 0, 0.525],
    "101": [0, 0.43056, 0, 0, 0.525],
    "102": [0, 0.61111, 0, 0, 0.525],
    "103": [0.22222, 0.43056, 0, 0, 0.525],
    "104": [0, 0.61111, 0, 0, 0.525],
    "105": [0, 0.61111, 0, 0, 0.525],
    "106": [0.22222, 0.61111, 0, 0, 0.525],
    "107": [0, 0.61111, 0, 0, 0.525],
    "108": [0, 0.61111, 0, 0, 0.525],
    "109": [0, 0.43056, 0, 0, 0.525],
    "110": [0, 0.43056, 0, 0, 0.525],
    "111": [0, 0.43056, 0, 0, 0.525],
    "112": [0.22222, 0.43056, 0, 0, 0.525],
    "113": [0.22222, 0.43056, 0, 0, 0.525],
    "114": [0, 0.43056, 0, 0, 0.525],
    "115": [0, 0.43056, 0, 0, 0.525],
    "116": [0, 0.55358, 0, 0, 0.525],
    "117": [0, 0.43056, 0, 0, 0.525],
    "118": [0, 0.43056, 0, 0, 0.525],
    "119": [0, 0.43056, 0, 0, 0.525],
    "120": [0, 0.43056, 0, 0, 0.525],
    "121": [0.22222, 0.43056, 0, 0, 0.525],
    "122": [0, 0.43056, 0, 0, 0.525],
    "123": [0.08333, 0.69444, 0, 0, 0.525],
    "124": [0.08333, 0.69444, 0, 0, 0.525],
    "125": [0.08333, 0.69444, 0, 0, 0.525],
    "126": [0, 0.61111, 0, 0, 0.525],
    "127": [0, 0.61111, 0, 0, 0.525],
    "160": [0, 0, 0, 0, 0.525],
    "176": [0, 0.61111, 0, 0, 0.525],
    "184": [0.19445, 0, 0, 0, 0.525],
    "305": [0, 0.43056, 0, 0, 0.525],
    "567": [0.22222, 0.43056, 0, 0, 0.525],
    "711": [0, 0.56597, 0, 0, 0.525],
    "713": [0, 0.56555, 0, 0, 0.525],
    "714": [0, 0.61111, 0, 0, 0.525],
    "715": [0, 0.61111, 0, 0, 0.525],
    "728": [0, 0.61111, 0, 0, 0.525],
    "730": [0, 0.61111, 0, 0, 0.525],
    "770": [0, 0.61111, 0, 0, 0.525],
    "771": [0, 0.61111, 0, 0, 0.525],
    "776": [0, 0.61111, 0, 0, 0.525],
    "915": [0, 0.61111, 0, 0, 0.525],
    "916": [0, 0.61111, 0, 0, 0.525],
    "920": [0, 0.61111, 0, 0, 0.525],
    "923": [0, 0.61111, 0, 0, 0.525],
    "926": [0, 0.61111, 0, 0, 0.525],
    "928": [0, 0.61111, 0, 0, 0.525],
    "931": [0, 0.61111, 0, 0, 0.525],
    "933": [0, 0.61111, 0, 0, 0.525],
    "934": [0, 0.61111, 0, 0, 0.525],
    "936": [0, 0.61111, 0, 0, 0.525],
    "937": [0, 0.61111, 0, 0, 0.525],
    "8216": [0, 0.61111, 0, 0, 0.525],
    "8217": [0, 0.61111, 0, 0, 0.525],
    "8242": [0, 0.61111, 0, 0, 0.525],
    "9251": [0.11111, 0.21944, 0, 0, 0.525]
  }
});
;// ./src/fontMetrics.ts

/**
 * This file contains metrics regarding fonts and individual symbols. The sigma
 * and xi variables, as well as the metricMap map contain data extracted from
 * TeX, TeX font metrics, and the TTF files. These data are then exposed via the
 * `metrics` variable and the getCharacterMetrics function.
 */

// In TeX, there are actually three sets of dimensions, one for each of
// textstyle (size index 5 and higher: >=9pt), scriptstyle (size index 3 and 4:
// 7-8pt), and scriptscriptstyle (size index 1 and 2: 5-6pt).  These are
// provided in the arrays below, in that order.
//
// The font metrics are stored in fonts cmsy10, cmsy7, and cmsy5 respectively.
// This was determined by running the following script:
//
//     latex -interaction=nonstopmode \
//     '\documentclass{article}\usepackage{amsmath}\begin{document}' \
//     '$a$ \expandafter\show\the\textfont2' \
//     '\expandafter\show\the\scriptfont2' \
//     '\expandafter\show\the\scriptscriptfont2' \
//     '\stop'
//
// The metrics themselves were retrieved using the following commands:
//
//     tftopl cmsy10
//     tftopl cmsy7
//     tftopl cmsy5
//
// The output of each of these commands is quite lengthy.  The only part we
// care about is the FONTDIMEN section. Each value is measured in EMs.
const sigmasAndXis = {
  slant: [0.250, 0.250, 0.250],
  // sigma1
  space: [0.000, 0.000, 0.000],
  // sigma2
  stretch: [0.000, 0.000, 0.000],
  // sigma3
  shrink: [0.000, 0.000, 0.000],
  // sigma4
  xHeight: [0.431, 0.431, 0.431],
  // sigma5
  quad: [1.000, 1.171, 1.472],
  // sigma6
  extraSpace: [0.000, 0.000, 0.000],
  // sigma7
  num1: [0.677, 0.732, 0.925],
  // sigma8
  num2: [0.394, 0.384, 0.387],
  // sigma9
  num3: [0.444, 0.471, 0.504],
  // sigma10
  denom1: [0.686, 0.752, 1.025],
  // sigma11
  denom2: [0.345, 0.344, 0.532],
  // sigma12
  sup1: [0.413, 0.503, 0.504],
  // sigma13
  sup2: [0.363, 0.431, 0.404],
  // sigma14
  sup3: [0.289, 0.286, 0.294],
  // sigma15
  sub1: [0.150, 0.143, 0.200],
  // sigma16
  sub2: [0.247, 0.286, 0.400],
  // sigma17
  supDrop: [0.386, 0.353, 0.494],
  // sigma18
  subDrop: [0.050, 0.071, 0.100],
  // sigma19
  delim1: [2.390, 1.700, 1.980],
  // sigma20
  delim2: [1.010, 1.157, 1.420],
  // sigma21
  axisHeight: [0.250, 0.250, 0.250],
  // sigma22

  // These font metrics are extracted from TeX by using tftopl on cmex10.tfm;
  // they correspond to the font parameters of the extension fonts (family 3).
  // See the TeXbook, page 441. In AMSTeX, the extension fonts scale; to
  // match cmex7, we'd use cmex7.tfm values for script and scriptscript
  // values.
  defaultRuleThickness: [0.04, 0.049, 0.049],
  // xi8; cmex7: 0.049
  bigOpSpacing1: [0.111, 0.111, 0.111],
  // xi9
  bigOpSpacing2: [0.166, 0.166, 0.166],
  // xi10
  bigOpSpacing3: [0.2, 0.2, 0.2],
  // xi11
  bigOpSpacing4: [0.6, 0.611, 0.611],
  // xi12; cmex7: 0.611
  bigOpSpacing5: [0.1, 0.143, 0.143],
  // xi13; cmex7: 0.143

  // The \sqrt rule width is taken from the height of the surd character.
  // Since we use the same font at all sizes, this thickness doesn't scale.
  sqrtRuleThickness: [0.04, 0.04, 0.04],
  // This value determines how large a pt is, for metrics which are defined
  // in terms of pts.
  // This value is also used in katex.scss; if you change it make sure the
  // values match.
  ptPerEm: [10.0, 10.0, 10.0],
  // The space between adjacent `|` columns in an array definition. From
  // `\showthe\doublerulesep` in LaTeX. Equals 2.0 / ptPerEm.
  doubleRuleSep: [0.2, 0.2, 0.2],
  // The width of separator lines in {array} environments. From
  // `\showthe\arrayrulewidth` in LaTeX. Equals 0.4 / ptPerEm.
  arrayRuleWidth: [0.04, 0.04, 0.04],
  // Two values from LaTeX source2e:
  fboxsep: [0.3, 0.3, 0.3],
  //        3 pt / ptPerEm
  fboxrule: [0.04, 0.04, 0.04] // 0.4 pt / ptPerEm
};

// This map contains a mapping from font name and character code to character
// metrics, including height, depth, italic correction, and skew (kern from the
// character to the corresponding \skewchar)
// This map is generated via `make metrics`. It should not be changed manually.


// These are very rough approximations.  We default to Times New Roman which
// should have Latin-1 and Cyrillic characters, but may not depending on the
// operating system.  The metrics do not account for extra height from the
// accents.  In the case of Cyrillic characters which have both ascenders and
// descenders we prefer approximations with ascenders, primarily to prevent
// the fraction bar or root line from intersecting the glyph.
// TODO(kevinb) allow union of multiple glyph metrics for better accuracy.
const extraCharacterMap = {
  // Latin-1
  'Å': 'A',
  'Ð': 'D',
  'Þ': 'o',
  'å': 'a',
  'ð': 'd',
  'þ': 'o',
  // Cyrillic
  'А': 'A',
  'Б': 'B',
  'В': 'B',
  'Г': 'F',
  'Д': 'A',
  'Е': 'E',
  'Ж': 'K',
  'З': '3',
  'И': 'N',
  'Й': 'N',
  'К': 'K',
  'Л': 'N',
  'М': 'M',
  'Н': 'H',
  'О': 'O',
  'П': 'N',
  'Р': 'P',
  'С': 'C',
  'Т': 'T',
  'У': 'y',
  'Ф': 'O',
  'Х': 'X',
  'Ц': 'U',
  'Ч': 'h',
  'Ш': 'W',
  'Щ': 'W',
  'Ъ': 'B',
  'Ы': 'X',
  'Ь': 'B',
  'Э': '3',
  'Ю': 'X',
  'Я': 'R',
  'а': 'a',
  'б': 'b',
  'в': 'a',
  'г': 'r',
  'д': 'y',
  'е': 'e',
  'ж': 'm',
  'з': 'e',
  'и': 'n',
  'й': 'n',
  'к': 'n',
  'л': 'n',
  'м': 'm',
  'н': 'n',
  'о': 'o',
  'п': 'n',
  'р': 'p',
  'с': 'c',
  'т': 'o',
  'у': 'y',
  'ф': 'b',
  'х': 'x',
  'ц': 'n',
  'ч': 'n',
  'ш': 'w',
  'щ': 'w',
  'ъ': 'a',
  'ы': 'm',
  'ь': 'a',
  'э': 'e',
  'ю': 'm',
  'я': 'r'
};
/**
 * This function adds new font metrics to default metricMap
 * It can also override existing metrics
 */
function setFontMetrics(fontName, metrics) {
  fontMetricsData[fontName] = metrics;
}

/**
 * This function is a convenience function for looking up information in the
 * metricMap table. It takes a character as a string, and a font.
 *
 * Note: the `width` property may be undefined if fontMetricsData.js wasn't
 * built using `Make extended_metrics`.
 */
function getCharacterMetrics(character, font, mode) {
  if (!fontMetricsData[font]) {
    throw new Error("Font metrics not found for font: " + font + ".");
  }
  let ch = character.charCodeAt(0);
  let metrics = fontMetricsData[font][ch];
  if (!metrics && character[0] in extraCharacterMap) {
    ch = extraCharacterMap[character[0]].charCodeAt(0);
    metrics = fontMetricsData[font][ch];
  }
  if (!metrics && mode === 'text') {
    // We don't typically have font metrics for Asian scripts.
    // But since we support them in text mode, we need to return
    // some sort of metrics.
    // So if the character is in a script we support but we
    // don't have metrics for it, just use the metrics for
    // the Latin capital letter M. This is close enough because
    // we (currently) only care about the height of the glyph
    // not its width.
    if (supportedCodepoint(ch)) {
      metrics = fontMetricsData[font][77]; // 77 is the charcode for 'M'
    }
  }
  if (metrics) {
    return {
      depth: metrics[0],
      height: metrics[1],
      italic: metrics[2],
      skew: metrics[3],
      width: metrics[4]
    };
  }
}
const fontMetricsBySizeIndex = {};

/**
 * Get the font metrics for a given size.
 */
function getGlobalMetrics(size) {
  let sizeIndex;
  if (size >= 5) {
    sizeIndex = 0;
  } else if (size >= 3) {
    sizeIndex = 1;
  } else {
    sizeIndex = 2;
  }
  if (!fontMetricsBySizeIndex[sizeIndex]) {
    const metrics = fontMetricsBySizeIndex[sizeIndex] = {
      cssEmPerMu: sigmasAndXis.quad[sizeIndex] / 18
    };
    for (const key in sigmasAndXis) {
      if (sigmasAndXis.hasOwnProperty(key)) {
        metrics[key] = sigmasAndXis[key][sizeIndex];
      }
    }
  }
  return fontMetricsBySizeIndex[sizeIndex];
}
;// ./src/symbols.ts
/**
 * This file holds a list of all no-argument functions and single-character
 * symbols (like 'a' or ';').
 *
 * For each of the symbols, there are three properties they can have:
 * - font (required): the font to be used for this symbol. Either "main" (the
     normal font), or "ams" (the ams fonts).
 * - group (required): the ParseNode group type the symbol should have (i.e.
     "textord", "mathord", etc).
     See https://github.com/KaTeX/KaTeX/wiki/Examining-TeX#group-types
 * - replace: the character that this symbol or function should be
 *   replaced with (i.e. "\phi" has a replace value of "\u03d5", the phi
 *   character in the main font).
 *
 * The outermost map in the table indicates what mode the symbols should be
 * accepted in (e.g. "math" or "text").
 */

// Some of these have a "-token" suffix since these are also used as `ParseNode`
// types for raw text tokens, and we want to avoid conflicts with higher-level
// `ParseNode` types. These `ParseNode`s are constructed within `Parser` by
// looking up the `symbols` map.
const ATOMS = {
  "bin": 1,
  "close": 1,
  "inner": 1,
  "open": 1,
  "punct": 1,
  "rel": 1
};
const NON_ATOMS = {
  "accent-token": 1,
  "mathord": 1,
  "op-token": 1,
  "spacing": 1,
  "textord": 1
};
const symbols = {
  "math": {},
  "text": {}
};
/* harmony default export */ var src_symbols = (symbols);

/** `acceptUnicodeChar = true` is only applicable if `replace` is set. */
function defineSymbol(mode, font, group, replace, name, acceptUnicodeChar) {
  symbols[mode][name] = {
    font,
    group,
    replace
  };
  if (acceptUnicodeChar && replace) {
    symbols[mode][replace] = symbols[mode][name];
  }
}

// Some abbreviations for commonly used strings.
// This helps minify the code, and also spotting typos using jshint.

// modes:
const math = "math";
const symbols_text = "text";

// fonts:
const main = "main";
const ams = "ams";

// groups:
const accent = "accent-token";
const bin = "bin";
const symbols_close = "close";
const inner = "inner";
const mathord = "mathord";
const op = "op-token";
const symbols_open = "open";
const punct = "punct";
const rel = "rel";
const spacing = "spacing";
const textord = "textord";

// Now comes the symbol table

// Relation Symbols
defineSymbol(math, main, rel, "\u2261", "\\equiv", true);
defineSymbol(math, main, rel, "\u227a", "\\prec", true);
defineSymbol(math, main, rel, "\u227b", "\\succ", true);
defineSymbol(math, main, rel, "\u223c", "\\sim", true);
defineSymbol(math, main, rel, "\u22a5", "\\perp");
defineSymbol(math, main, rel, "\u2aaf", "\\preceq", true);
defineSymbol(math, main, rel, "\u2ab0", "\\succeq", true);
defineSymbol(math, main, rel, "\u2243", "\\simeq", true);
defineSymbol(math, main, rel, "\u2223", "\\mid", true);
defineSymbol(math, main, rel, "\u226a", "\\ll", true);
defineSymbol(math, main, rel, "\u226b", "\\gg", true);
defineSymbol(math, main, rel, "\u224d", "\\asymp", true);
defineSymbol(math, main, rel, "\u2225", "\\parallel");
defineSymbol(math, main, rel, "\u22c8", "\\bowtie", true);
defineSymbol(math, main, rel, "\u2323", "\\smile", true);
defineSymbol(math, main, rel, "\u2291", "\\sqsubseteq", true);
defineSymbol(math, main, rel, "\u2292", "\\sqsupseteq", true);
defineSymbol(math, main, rel, "\u2250", "\\doteq", true);
defineSymbol(math, main, rel, "\u2322", "\\frown", true);
defineSymbol(math, main, rel, "\u220b", "\\ni", true);
defineSymbol(math, main, rel, "\u221d", "\\propto", true);
defineSymbol(math, main, rel, "\u22a2", "\\vdash", true);
defineSymbol(math, main, rel, "\u22a3", "\\dashv", true);
defineSymbol(math, main, rel, "\u220b", "\\owns");

// Punctuation
defineSymbol(math, main, punct, "\u002e", "\\ldotp");
defineSymbol(math, main, punct, "\u22c5", "\\cdotp");
// The KaTeX fonts do not contain U+00B7. Use the centered dot glyph at U+22C5
// in both modes, but keep math-mode punctuation spacing only in math mode.
defineSymbol(math, main, punct, "\u22c5", "\u00b7");
defineSymbol(symbols_text, main, textord, "\u22c5", "\u00b7");

// Misc Symbols
defineSymbol(math, main, textord, "\u0023", "\\#");
defineSymbol(symbols_text, main, textord, "\u0023", "\\#");
defineSymbol(math, main, textord, "\u0026", "\\&");
defineSymbol(symbols_text, main, textord, "\u0026", "\\&");
defineSymbol(math, main, textord, "\u2135", "\\aleph", true);
defineSymbol(math, main, textord, "\u2200", "\\forall", true);
defineSymbol(math, main, textord, "\u210f", "\\hbar", true);
defineSymbol(math, main, textord, "\u2203", "\\exists", true);
defineSymbol(math, main, textord, "\u2207", "\\nabla", true);
defineSymbol(math, main, textord, "\u266d", "\\flat", true);
defineSymbol(math, main, textord, "\u2113", "\\ell", true);
defineSymbol(math, main, textord, "\u266e", "\\natural", true);
defineSymbol(math, main, textord, "\u2663", "\\clubsuit", true);
defineSymbol(math, main, textord, "\u2118", "\\wp", true);
defineSymbol(math, main, textord, "\u266f", "\\sharp", true);
defineSymbol(math, main, textord, "\u2662", "\\diamondsuit", true);
defineSymbol(math, main, textord, "\u211c", "\\Re", true);
defineSymbol(math, main, textord, "\u2661", "\\heartsuit", true);
defineSymbol(math, main, textord, "\u2111", "\\Im", true);
defineSymbol(math, main, textord, "\u2660", "\\spadesuit", true);
defineSymbol(math, main, textord, "\u00a7", "\\S", true);
defineSymbol(symbols_text, main, textord, "\u00a7", "\\S");
defineSymbol(math, main, textord, "\u00b6", "\\P", true);
defineSymbol(symbols_text, main, textord, "\u00b6", "\\P");

// Math and Text
defineSymbol(math, main, textord, "\u2020", "\\dag");
defineSymbol(symbols_text, main, textord, "\u2020", "\\dag");
defineSymbol(symbols_text, main, textord, "\u2020", "\\textdagger");
defineSymbol(math, main, textord, "\u2021", "\\ddag");
defineSymbol(symbols_text, main, textord, "\u2021", "\\ddag");
defineSymbol(symbols_text, main, textord, "\u2021", "\\textdaggerdbl");

// Large Delimiters
defineSymbol(math, main, symbols_close, "\u23b1", "\\rmoustache", true);
defineSymbol(math, main, symbols_open, "\u23b0", "\\lmoustache", true);
defineSymbol(math, main, symbols_close, "\u27ef", "\\rgroup", true);
defineSymbol(math, main, symbols_open, "\u27ee", "\\lgroup", true);

// Binary Operators
defineSymbol(math, main, bin, "\u2213", "\\mp", true);
defineSymbol(math, main, bin, "\u2296", "\\ominus", true);
defineSymbol(math, main, bin, "\u228e", "\\uplus", true);
defineSymbol(math, main, bin, "\u2293", "\\sqcap", true);
defineSymbol(math, main, bin, "\u2217", "\\ast");
defineSymbol(math, main, bin, "\u2294", "\\sqcup", true);
defineSymbol(math, main, bin, "\u25ef", "\\bigcirc", true);
defineSymbol(math, main, bin, "\u2219", "\\bullet", true);
defineSymbol(math, main, bin, "\u2021", "\\ddagger");
defineSymbol(math, main, bin, "\u2240", "\\wr", true);
defineSymbol(math, main, bin, "\u2a3f", "\\amalg");
defineSymbol(math, main, bin, "\u0026", "\\And"); // from amsmath

// Arrow Symbols
defineSymbol(math, main, rel, "\u27f5", "\\longleftarrow", true);
defineSymbol(math, main, rel, "\u21d0", "\\Leftarrow", true);
defineSymbol(math, main, rel, "\u27f8", "\\Longleftarrow", true);
defineSymbol(math, main, rel, "\u27f6", "\\longrightarrow", true);
defineSymbol(math, main, rel, "\u21d2", "\\Rightarrow", true);
defineSymbol(math, main, rel, "\u27f9", "\\Longrightarrow", true);
defineSymbol(math, main, rel, "\u2194", "\\leftrightarrow", true);
defineSymbol(math, main, rel, "\u27f7", "\\longleftrightarrow", true);
defineSymbol(math, main, rel, "\u21d4", "\\Leftrightarrow", true);
defineSymbol(math, main, rel, "\u27fa", "\\Longleftrightarrow", true);
defineSymbol(math, main, rel, "\u21a6", "\\mapsto", true);
defineSymbol(math, main, rel, "\u27fc", "\\longmapsto", true);
defineSymbol(math, main, rel, "\u2197", "\\nearrow", true);
defineSymbol(math, main, rel, "\u21a9", "\\hookleftarrow", true);
defineSymbol(math, main, rel, "\u21aa", "\\hookrightarrow", true);
defineSymbol(math, main, rel, "\u2198", "\\searrow", true);
defineSymbol(math, main, rel, "\u21bc", "\\leftharpoonup", true);
defineSymbol(math, main, rel, "\u21c0", "\\rightharpoonup", true);
defineSymbol(math, main, rel, "\u2199", "\\swarrow", true);
defineSymbol(math, main, rel, "\u21bd", "\\leftharpoondown", true);
defineSymbol(math, main, rel, "\u21c1", "\\rightharpoondown", true);
defineSymbol(math, main, rel, "\u2196", "\\nwarrow", true);
defineSymbol(math, main, rel, "\u21cc", "\\rightleftharpoons", true);

// AMS Negated Binary Relations
defineSymbol(math, ams, rel, "\u226e", "\\nless", true);
// Symbol names preceded by "@" each have a corresponding macro.
defineSymbol(math, ams, rel, "\ue010", "\\@nleqslant");
defineSymbol(math, ams, rel, "\ue011", "\\@nleqq");
defineSymbol(math, ams, rel, "\u2a87", "\\lneq", true);
defineSymbol(math, ams, rel, "\u2268", "\\lneqq", true);
defineSymbol(math, ams, rel, "\ue00c", "\\@lvertneqq");
defineSymbol(math, ams, rel, "\u22e6", "\\lnsim", true);
defineSymbol(math, ams, rel, "\u2a89", "\\lnapprox", true);
defineSymbol(math, ams, rel, "\u2280", "\\nprec", true);
// unicode-math maps \u22e0 to \npreccurlyeq. We'll use the AMS synonym.
defineSymbol(math, ams, rel, "\u22e0", "\\npreceq", true);
defineSymbol(math, ams, rel, "\u22e8", "\\precnsim", true);
defineSymbol(math, ams, rel, "\u2ab9", "\\precnapprox", true);
defineSymbol(math, ams, rel, "\u2241", "\\nsim", true);
defineSymbol(math, ams, rel, "\ue006", "\\@nshortmid");
defineSymbol(math, ams, rel, "\u2224", "\\nmid", true);
defineSymbol(math, ams, rel, "\u22ac", "\\nvdash", true);
defineSymbol(math, ams, rel, "\u22ad", "\\nvDash", true);
defineSymbol(math, ams, rel, "\u22ea", "\\ntriangleleft");
defineSymbol(math, ams, rel, "\u22ec", "\\ntrianglelefteq", true);
defineSymbol(math, ams, rel, "\u228a", "\\subsetneq", true);
defineSymbol(math, ams, rel, "\ue01a", "\\@varsubsetneq");
defineSymbol(math, ams, rel, "\u2acb", "\\subsetneqq", true);
defineSymbol(math, ams, rel, "\ue017", "\\@varsubsetneqq");
defineSymbol(math, ams, rel, "\u226f", "\\ngtr", true);
defineSymbol(math, ams, rel, "\ue00f", "\\@ngeqslant");
defineSymbol(math, ams, rel, "\ue00e", "\\@ngeqq");
defineSymbol(math, ams, rel, "\u2a88", "\\gneq", true);
defineSymbol(math, ams, rel, "\u2269", "\\gneqq", true);
defineSymbol(math, ams, rel, "\ue00d", "\\@gvertneqq");
defineSymbol(math, ams, rel, "\u22e7", "\\gnsim", true);
defineSymbol(math, ams, rel, "\u2a8a", "\\gnapprox", true);
defineSymbol(math, ams, rel, "\u2281", "\\nsucc", true);
// unicode-math maps \u22e1 to \nsucccurlyeq. We'll use the AMS synonym.
defineSymbol(math, ams, rel, "\u22e1", "\\nsucceq", true);
defineSymbol(math, ams, rel, "\u22e9", "\\succnsim", true);
defineSymbol(math, ams, rel, "\u2aba", "\\succnapprox", true);
// unicode-math maps \u2246 to \simneqq. We'll use the AMS synonym.
defineSymbol(math, ams, rel, "\u2246", "\\ncong", true);
defineSymbol(math, ams, rel, "\ue007", "\\@nshortparallel");
defineSymbol(math, ams, rel, "\u2226", "\\nparallel", true);
defineSymbol(math, ams, rel, "\u22af", "\\nVDash", true);
defineSymbol(math, ams, rel, "\u22eb", "\\ntriangleright");
defineSymbol(math, ams, rel, "\u22ed", "\\ntrianglerighteq", true);
defineSymbol(math, ams, rel, "\ue018", "\\@nsupseteqq");
defineSymbol(math, ams, rel, "\u228b", "\\supsetneq", true);
defineSymbol(math, ams, rel, "\ue01b", "\\@varsupsetneq");
defineSymbol(math, ams, rel, "\u2acc", "\\supsetneqq", true);
defineSymbol(math, ams, rel, "\ue019", "\\@varsupsetneqq");
defineSymbol(math, ams, rel, "\u22ae", "\\nVdash", true);
defineSymbol(math, ams, rel, "\u2ab5", "\\precneqq", true);
defineSymbol(math, ams, rel, "\u2ab6", "\\succneqq", true);
defineSymbol(math, ams, rel, "\ue016", "\\@nsubseteqq");
defineSymbol(math, ams, bin, "\u22b4", "\\unlhd");
defineSymbol(math, ams, bin, "\u22b5", "\\unrhd");

// AMS Negated Arrows
defineSymbol(math, ams, rel, "\u219a", "\\nleftarrow", true);
defineSymbol(math, ams, rel, "\u219b", "\\nrightarrow", true);
defineSymbol(math, ams, rel, "\u21cd", "\\nLeftarrow", true);
defineSymbol(math, ams, rel, "\u21cf", "\\nRightarrow", true);
defineSymbol(math, ams, rel, "\u21ae", "\\nleftrightarrow", true);
defineSymbol(math, ams, rel, "\u21ce", "\\nLeftrightarrow", true);

// AMS Misc
defineSymbol(math, ams, rel, "\u25b3", "\\vartriangle");
defineSymbol(math, ams, textord, "\u210f", "\\hslash");
defineSymbol(math, ams, textord, "\u25bd", "\\triangledown");
defineSymbol(math, ams, textord, "\u25ca", "\\lozenge");
defineSymbol(math, ams, textord, "\u24c8", "\\circledS");
defineSymbol(math, ams, textord, "\u00ae", "\\circledR");
defineSymbol(symbols_text, ams, textord, "\u00ae", "\\circledR");
defineSymbol(math, ams, textord, "\u2221", "\\measuredangle", true);
defineSymbol(math, ams, textord, "\u2204", "\\nexists");
defineSymbol(math, ams, textord, "\u2127", "\\mho");
defineSymbol(math, ams, textord, "\u2132", "\\Finv", true);
defineSymbol(math, ams, textord, "\u2141", "\\Game", true);
defineSymbol(math, ams, textord, "\u2035", "\\backprime");
defineSymbol(math, ams, textord, "\u25b2", "\\blacktriangle");
defineSymbol(math, ams, textord, "\u25bc", "\\blacktriangledown");
defineSymbol(math, ams, textord, "\u25a0", "\\blacksquare");
defineSymbol(math, ams, textord, "\u29eb", "\\blacklozenge");
defineSymbol(math, ams, textord, "\u2605", "\\bigstar");
defineSymbol(math, ams, textord, "\u2222", "\\sphericalangle", true);
defineSymbol(math, ams, textord, "\u2201", "\\complement", true);
// unicode-math maps U+F0 to \matheth. We map to AMS function \eth
defineSymbol(math, ams, textord, "\u00f0", "\\eth", true);
defineSymbol(symbols_text, main, textord, "\u00f0", "\u00f0");
defineSymbol(math, ams, textord, "\u2571", "\\diagup");
defineSymbol(math, ams, textord, "\u2572", "\\diagdown");
defineSymbol(math, ams, textord, "\u25a1", "\\square");
defineSymbol(math, ams, textord, "\u25a1", "\\Box");
defineSymbol(math, ams, textord, "\u25ca", "\\Diamond");
// unicode-math maps U+A5 to \mathyen. We map to AMS function \yen
defineSymbol(math, ams, textord, "\u00a5", "\\yen", true);
defineSymbol(symbols_text, ams, textord, "\u00a5", "\\yen", true);
defineSymbol(math, ams, textord, "\u2713", "\\checkmark", true);
defineSymbol(symbols_text, ams, textord, "\u2713", "\\checkmark");

// AMS Hebrew
defineSymbol(math, ams, textord, "\u2136", "\\beth", true);
defineSymbol(math, ams, textord, "\u2138", "\\daleth", true);
defineSymbol(math, ams, textord, "\u2137", "\\gimel", true);

// AMS Greek
defineSymbol(math, ams, textord, "\u03dd", "\\digamma", true);
defineSymbol(math, ams, textord, "\u03f0", "\\varkappa");

// AMS Delimiters
defineSymbol(math, ams, symbols_open, "\u250c", "\\@ulcorner", true);
defineSymbol(math, ams, symbols_close, "\u2510", "\\@urcorner", true);
defineSymbol(math, ams, symbols_open, "\u2514", "\\@llcorner", true);
defineSymbol(math, ams, symbols_close, "\u2518", "\\@lrcorner", true);

// AMS Binary Relations
defineSymbol(math, ams, rel, "\u2266", "\\leqq", true);
defineSymbol(math, ams, rel, "\u2a7d", "\\leqslant", true);
defineSymbol(math, ams, rel, "\u2a95", "\\eqslantless", true);
defineSymbol(math, ams, rel, "\u2272", "\\lesssim", true);
defineSymbol(math, ams, rel, "\u2a85", "\\lessapprox", true);
defineSymbol(math, ams, rel, "\u224a", "\\approxeq", true);
defineSymbol(math, ams, bin, "\u22d6", "\\lessdot");
defineSymbol(math, ams, rel, "\u22d8", "\\lll", true);
defineSymbol(math, ams, rel, "\u2276", "\\lessgtr", true);
defineSymbol(math, ams, rel, "\u22da", "\\lesseqgtr", true);
defineSymbol(math, ams, rel, "\u2a8b", "\\lesseqqgtr", true);
defineSymbol(math, ams, rel, "\u2251", "\\doteqdot");
defineSymbol(math, ams, rel, "\u2253", "\\risingdotseq", true);
defineSymbol(math, ams, rel, "\u2252", "\\fallingdotseq", true);
defineSymbol(math, ams, rel, "\u223d", "\\backsim", true);
defineSymbol(math, ams, rel, "\u22cd", "\\backsimeq", true);
defineSymbol(math, ams, rel, "\u2ac5", "\\subseteqq", true);
defineSymbol(math, ams, rel, "\u22d0", "\\Subset", true);
defineSymbol(math, ams, rel, "\u228f", "\\sqsubset", true);
defineSymbol(math, ams, rel, "\u227c", "\\preccurlyeq", true);
defineSymbol(math, ams, rel, "\u22de", "\\curlyeqprec", true);
defineSymbol(math, ams, rel, "\u227e", "\\precsim", true);
defineSymbol(math, ams, rel, "\u2ab7", "\\precapprox", true);
defineSymbol(math, ams, rel, "\u22b2", "\\vartriangleleft");
defineSymbol(math, ams, rel, "\u22b4", "\\trianglelefteq");
defineSymbol(math, ams, rel, "\u22a8", "\\vDash", true);
defineSymbol(math, ams, rel, "\u22aa", "\\Vvdash", true);
defineSymbol(math, ams, rel, "\u2323", "\\smallsmile");
defineSymbol(math, ams, rel, "\u2322", "\\smallfrown");
defineSymbol(math, ams, rel, "\u224f", "\\bumpeq", true);
defineSymbol(math, ams, rel, "\u224e", "\\Bumpeq", true);
defineSymbol(math, ams, rel, "\u2267", "\\geqq", true);
defineSymbol(math, ams, rel, "\u2a7e", "\\geqslant", true);
defineSymbol(math, ams, rel, "\u2a96", "\\eqslantgtr", true);
defineSymbol(math, ams, rel, "\u2273", "\\gtrsim", true);
defineSymbol(math, ams, rel, "\u2a86", "\\gtrapprox", true);
defineSymbol(math, ams, bin, "\u22d7", "\\gtrdot");
defineSymbol(math, ams, rel, "\u22d9", "\\ggg", true);
defineSymbol(math, ams, rel, "\u2277", "\\gtrless", true);
defineSymbol(math, ams, rel, "\u22db", "\\gtreqless", true);
defineSymbol(math, ams, rel, "\u2a8c", "\\gtreqqless", true);
defineSymbol(math, ams, rel, "\u2256", "\\eqcirc", true);
defineSymbol(math, ams, rel, "\u2257", "\\circeq", true);
defineSymbol(math, ams, rel, "\u225c", "\\triangleq", true);
defineSymbol(math, ams, rel, "\u223c", "\\thicksim");
defineSymbol(math, ams, rel, "\u2248", "\\thickapprox");
defineSymbol(math, ams, rel, "\u2ac6", "\\supseteqq", true);
defineSymbol(math, ams, rel, "\u22d1", "\\Supset", true);
defineSymbol(math, ams, rel, "\u2290", "\\sqsupset", true);
defineSymbol(math, ams, rel, "\u227d", "\\succcurlyeq", true);
defineSymbol(math, ams, rel, "\u22df", "\\curlyeqsucc", true);
defineSymbol(math, ams, rel, "\u227f", "\\succsim", true);
defineSymbol(math, ams, rel, "\u2ab8", "\\succapprox", true);
defineSymbol(math, ams, rel, "\u22b3", "\\vartriangleright");
defineSymbol(math, ams, rel, "\u22b5", "\\trianglerighteq");
defineSymbol(math, ams, rel, "\u22a9", "\\Vdash", true);
defineSymbol(math, ams, rel, "\u2223", "\\shortmid");
defineSymbol(math, ams, rel, "\u2225", "\\shortparallel");
defineSymbol(math, ams, rel, "\u226c", "\\between", true);
defineSymbol(math, ams, rel, "\u22d4", "\\pitchfork", true);
defineSymbol(math, ams, rel, "\u221d", "\\varpropto");
defineSymbol(math, ams, rel, "\u25c0", "\\blacktriangleleft");
// unicode-math says that \therefore is a mathord atom.
// We kept the amssymb atom type, which is rel.
defineSymbol(math, ams, rel, "\u2234", "\\therefore", true);
defineSymbol(math, ams, rel, "\u220d", "\\backepsilon");
defineSymbol(math, ams, rel, "\u25b6", "\\blacktriangleright");
// unicode-math says that \because is a mathord atom.
// We kept the amssymb atom type, which is rel.
defineSymbol(math, ams, rel, "\u2235", "\\because", true);
defineSymbol(math, ams, rel, "\u22d8", "\\llless");
defineSymbol(math, ams, rel, "\u22d9", "\\gggtr");
defineSymbol(math, ams, bin, "\u22b2", "\\lhd");
defineSymbol(math, ams, bin, "\u22b3", "\\rhd");
defineSymbol(math, ams, rel, "\u2242", "\\eqsim", true);
defineSymbol(math, main, rel, "\u22c8", "\\Join");
defineSymbol(math, ams, rel, "\u2251", "\\Doteq", true);

// AMS Binary Operators
defineSymbol(math, ams, bin, "\u2214", "\\dotplus", true);
defineSymbol(math, ams, bin, "\u2216", "\\smallsetminus");
defineSymbol(math, ams, bin, "\u22d2", "\\Cap", true);
defineSymbol(math, ams, bin, "\u22d3", "\\Cup", true);
defineSymbol(math, ams, bin, "\u2a5e", "\\doublebarwedge", true);
defineSymbol(math, ams, bin, "\u229f", "\\boxminus", true);
defineSymbol(math, ams, bin, "\u229e", "\\boxplus", true);
defineSymbol(math, ams, bin, "\u22c7", "\\divideontimes", true);
defineSymbol(math, ams, bin, "\u22c9", "\\ltimes", true);
defineSymbol(math, ams, bin, "\u22ca", "\\rtimes", true);
defineSymbol(math, ams, bin, "\u22cb", "\\leftthreetimes", true);
defineSymbol(math, ams, bin, "\u22cc", "\\rightthreetimes", true);
defineSymbol(math, ams, bin, "\u22cf", "\\curlywedge", true);
defineSymbol(math, ams, bin, "\u22ce", "\\curlyvee", true);
defineSymbol(math, ams, bin, "\u229d", "\\circleddash", true);
defineSymbol(math, ams, bin, "\u229b", "\\circledast", true);
defineSymbol(math, ams, bin, "\u22c5", "\\centerdot");
defineSymbol(math, ams, bin, "\u22ba", "\\intercal", true);
defineSymbol(math, ams, bin, "\u22d2", "\\doublecap");
defineSymbol(math, ams, bin, "\u22d3", "\\doublecup");
defineSymbol(math, ams, bin, "\u22a0", "\\boxtimes", true);

// AMS Arrows
// Note: unicode-math maps \u21e2 to their own function \rightdasharrow.
// We'll map it to AMS function \dashrightarrow. It produces the same atom.
defineSymbol(math, ams, rel, "\u21e2", "\\dashrightarrow", true);
// unicode-math maps \u21e0 to \leftdasharrow. We'll use the AMS synonym.
defineSymbol(math, ams, rel, "\u21e0", "\\dashleftarrow", true);
defineSymbol(math, ams, rel, "\u21c7", "\\leftleftarrows", true);
defineSymbol(math, ams, rel, "\u21c6", "\\leftrightarrows", true);
defineSymbol(math, ams, rel, "\u21da", "\\Lleftarrow", true);
defineSymbol(math, ams, rel, "\u219e", "\\twoheadleftarrow", true);
defineSymbol(math, ams, rel, "\u21a2", "\\leftarrowtail", true);
defineSymbol(math, ams, rel, "\u21ab", "\\looparrowleft", true);
defineSymbol(math, ams, rel, "\u21cb", "\\leftrightharpoons", true);
defineSymbol(math, ams, rel, "\u21b6", "\\curvearrowleft", true);
// unicode-math maps \u21ba to \acwopencirclearrow. We'll use the AMS synonym.
defineSymbol(math, ams, rel, "\u21ba", "\\circlearrowleft", true);
defineSymbol(math, ams, rel, "\u21b0", "\\Lsh", true);
defineSymbol(math, ams, rel, "\u21c8", "\\upuparrows", true);
defineSymbol(math, ams, rel, "\u21bf", "\\upharpoonleft", true);
defineSymbol(math, ams, rel, "\u21c3", "\\downharpoonleft", true);
defineSymbol(math, main, rel, "\u22b6", "\\origof", true); // not in font
defineSymbol(math, main, rel, "\u22b7", "\\imageof", true); // not in font
defineSymbol(math, ams, rel, "\u22b8", "\\multimap", true);
defineSymbol(math, ams, rel, "\u21ad", "\\leftrightsquigarrow", true);
defineSymbol(math, ams, rel, "\u21c9", "\\rightrightarrows", true);
defineSymbol(math, ams, rel, "\u21c4", "\\rightleftarrows", true);
defineSymbol(math, ams, rel, "\u21a0", "\\twoheadrightarrow", true);
defineSymbol(math, ams, rel, "\u21a3", "\\rightarrowtail", true);
defineSymbol(math, ams, rel, "\u21ac", "\\looparrowright", true);
defineSymbol(math, ams, rel, "\u21b7", "\\curvearrowright", true);
// unicode-math maps \u21bb to \cwopencirclearrow. We'll use the AMS synonym.
defineSymbol(math, ams, rel, "\u21bb", "\\circlearrowright", true);
defineSymbol(math, ams, rel, "\u21b1", "\\Rsh", true);
defineSymbol(math, ams, rel, "\u21ca", "\\downdownarrows", true);
defineSymbol(math, ams, rel, "\u21be", "\\upharpoonright", true);
defineSymbol(math, ams, rel, "\u21c2", "\\downharpoonright", true);
defineSymbol(math, ams, rel, "\u21dd", "\\rightsquigarrow", true);
defineSymbol(math, ams, rel, "\u21dd", "\\leadsto");
defineSymbol(math, ams, rel, "\u21db", "\\Rrightarrow", true);
defineSymbol(math, ams, rel, "\u21be", "\\restriction");
defineSymbol(math, main, textord, "\u2018", "`");
defineSymbol(math, main, textord, "$", "\\$");
defineSymbol(symbols_text, main, textord, "$", "\\$");
defineSymbol(symbols_text, main, textord, "$", "\\textdollar");
defineSymbol(math, main, textord, "%", "\\%");
defineSymbol(symbols_text, main, textord, "%", "\\%");
defineSymbol(math, main, textord, "_", "\\_");
defineSymbol(symbols_text, main, textord, "_", "\\_");
defineSymbol(symbols_text, main, textord, "_", "\\textunderscore");
defineSymbol(math, main, textord, "\u2220", "\\angle", true);
defineSymbol(math, main, textord, "\u221e", "\\infty", true);
defineSymbol(math, main, textord, "\u2032", "\\prime");
defineSymbol(math, main, textord, "\u25b3", "\\triangle");
defineSymbol(math, main, textord, "\u0393", "\\Gamma", true);
defineSymbol(math, main, textord, "\u0394", "\\Delta", true);
defineSymbol(math, main, textord, "\u0398", "\\Theta", true);
defineSymbol(math, main, textord, "\u039b", "\\Lambda", true);
defineSymbol(math, main, textord, "\u039e", "\\Xi", true);
defineSymbol(math, main, textord, "\u03a0", "\\Pi", true);
defineSymbol(math, main, textord, "\u03a3", "\\Sigma", true);
defineSymbol(math, main, textord, "\u03a5", "\\Upsilon", true);
defineSymbol(math, main, textord, "\u03a6", "\\Phi", true);
defineSymbol(math, main, textord, "\u03a8", "\\Psi", true);
defineSymbol(math, main, textord, "\u03a9", "\\Omega", true);
defineSymbol(math, main, textord, "A", "\u0391");
defineSymbol(math, main, textord, "B", "\u0392");
defineSymbol(math, main, textord, "E", "\u0395");
defineSymbol(math, main, textord, "Z", "\u0396");
defineSymbol(math, main, textord, "H", "\u0397");
defineSymbol(math, main, textord, "I", "\u0399");
defineSymbol(math, main, textord, "K", "\u039A");
defineSymbol(math, main, textord, "M", "\u039C");
defineSymbol(math, main, textord, "N", "\u039D");
defineSymbol(math, main, textord, "O", "\u039F");
defineSymbol(math, main, textord, "P", "\u03A1");
defineSymbol(math, main, textord, "T", "\u03A4");
defineSymbol(math, main, textord, "X", "\u03A7");
defineSymbol(math, main, textord, "\u00ac", "\\neg", true);
defineSymbol(math, main, textord, "\u00ac", "\\lnot");
defineSymbol(math, main, textord, "\u22a4", "\\top");
defineSymbol(math, main, textord, "\u22a5", "\\bot");
defineSymbol(math, main, textord, "\u2205", "\\emptyset");
defineSymbol(math, ams, textord, "\u2205", "\\varnothing");
defineSymbol(math, main, mathord, "\u03b1", "\\alpha", true);
defineSymbol(math, main, mathord, "\u03b2", "\\beta", true);
defineSymbol(math, main, mathord, "\u03b3", "\\gamma", true);
defineSymbol(math, main, mathord, "\u03b4", "\\delta", true);
defineSymbol(math, main, mathord, "\u03f5", "\\epsilon", true);
defineSymbol(math, main, mathord, "\u03b6", "\\zeta", true);
defineSymbol(math, main, mathord, "\u03b7", "\\eta", true);
defineSymbol(math, main, mathord, "\u03b8", "\\theta", true);
defineSymbol(math, main, mathord, "\u03b9", "\\iota", true);
defineSymbol(math, main, mathord, "\u03ba", "\\kappa", true);
defineSymbol(math, main, mathord, "\u03bb", "\\lambda", true);
defineSymbol(math, main, mathord, "\u03bc", "\\mu", true);
defineSymbol(math, main, mathord, "\u03bd", "\\nu", true);
defineSymbol(math, main, mathord, "\u03be", "\\xi", true);
defineSymbol(math, main, mathord, "\u03bf", "\\omicron", true);
defineSymbol(math, main, mathord, "\u03c0", "\\pi", true);
defineSymbol(math, main, mathord, "\u03c1", "\\rho", true);
defineSymbol(math, main, mathord, "\u03c3", "\\sigma", true);
defineSymbol(math, main, mathord, "\u03c4", "\\tau", true);
defineSymbol(math, main, mathord, "\u03c5", "\\upsilon", true);
defineSymbol(math, main, mathord, "\u03d5", "\\phi", true);
defineSymbol(math, main, mathord, "\u03c7", "\\chi", true);
defineSymbol(math, main, mathord, "\u03c8", "\\psi", true);
defineSymbol(math, main, mathord, "\u03c9", "\\omega", true);
defineSymbol(math, main, mathord, "\u03b5", "\\varepsilon", true);
defineSymbol(math, main, mathord, "\u03d1", "\\vartheta", true);
defineSymbol(math, main, mathord, "\u03d6", "\\varpi", true);
defineSymbol(math, main, mathord, "\u03f1", "\\varrho", true);
defineSymbol(math, main, mathord, "\u03c2", "\\varsigma", true);
defineSymbol(math, main, mathord, "\u03c6", "\\varphi", true);
defineSymbol(math, main, bin, "\u2217", "*", true);
defineSymbol(math, main, bin, "+", "+");
defineSymbol(math, main, bin, "\u2212", "-", true);
defineSymbol(math, main, bin, "\u22c5", "\\cdot", true);
defineSymbol(math, main, bin, "\u2218", "\\circ", true);
defineSymbol(math, main, bin, "\u00f7", "\\div", true);
defineSymbol(math, main, bin, "\u00b1", "\\pm", true);
defineSymbol(math, main, bin, "\u00d7", "\\times", true);
defineSymbol(math, main, bin, "\u2229", "\\cap", true);
defineSymbol(math, main, bin, "\u222a", "\\cup", true);
defineSymbol(math, main, bin, "\u2216", "\\setminus", true);
defineSymbol(math, main, bin, "\u2227", "\\land");
defineSymbol(math, main, bin, "\u2228", "\\lor");
defineSymbol(math, main, bin, "\u2227", "\\wedge", true);
defineSymbol(math, main, bin, "\u2228", "\\vee", true);
defineSymbol(math, main, textord, "\u221a", "\\surd");
defineSymbol(math, main, symbols_open, "\u27e8", "\\langle", true);
defineSymbol(math, main, symbols_open, "\u2223", "\\lvert");
defineSymbol(math, main, symbols_open, "\u2225", "\\lVert");
defineSymbol(math, main, symbols_close, "?", "?");
defineSymbol(math, main, symbols_close, "!", "!");
defineSymbol(math, main, symbols_close, "\u27e9", "\\rangle", true);
defineSymbol(math, main, symbols_close, "\u2223", "\\rvert");
defineSymbol(math, main, symbols_close, "\u2225", "\\rVert");
defineSymbol(math, main, rel, "=", "=");
defineSymbol(math, main, rel, ":", ":");
defineSymbol(math, main, rel, "\u2248", "\\approx", true);
defineSymbol(math, main, rel, "\u2245", "\\cong", true);
defineSymbol(math, main, rel, "\u2265", "\\ge");
defineSymbol(math, main, rel, "\u2265", "\\geq", true);
defineSymbol(math, main, rel, "\u2190", "\\gets");
defineSymbol(math, main, rel, ">", "\\gt", true);
defineSymbol(math, main, rel, "\u2208", "\\in", true);
defineSymbol(math, main, rel, "\ue020", "\\@not");
defineSymbol(math, main, rel, "\u2282", "\\subset", true);
defineSymbol(math, main, rel, "\u2283", "\\supset", true);
defineSymbol(math, main, rel, "\u2286", "\\subseteq", true);
defineSymbol(math, main, rel, "\u2287", "\\supseteq", true);
defineSymbol(math, ams, rel, "\u2288", "\\nsubseteq", true);
defineSymbol(math, ams, rel, "\u2289", "\\nsupseteq", true);
defineSymbol(math, main, rel, "\u22a8", "\\models");
defineSymbol(math, main, rel, "\u2190", "\\leftarrow", true);
defineSymbol(math, main, rel, "\u2264", "\\le");
defineSymbol(math, main, rel, "\u2264", "\\leq", true);
defineSymbol(math, main, rel, "<", "\\lt", true);
defineSymbol(math, main, rel, "\u2192", "\\rightarrow", true);
defineSymbol(math, main, rel, "\u2192", "\\to");
defineSymbol(math, ams, rel, "\u2271", "\\ngeq", true);
defineSymbol(math, ams, rel, "\u2270", "\\nleq", true);
defineSymbol(math, main, spacing, "\u00a0", "\\ ");
defineSymbol(math, main, spacing, "\u00a0", "\\space");
// Ref: LaTeX Source 2e: \DeclareRobustCommand{\nobreakspace}{%
defineSymbol(math, main, spacing, "\u00a0", "\\nobreakspace");
defineSymbol(symbols_text, main, spacing, "\u00a0", "\\ ");
defineSymbol(symbols_text, main, spacing, "\u00a0", " ");
defineSymbol(symbols_text, main, spacing, "\u00a0", "\\space");
defineSymbol(symbols_text, main, spacing, "\u00a0", "\\nobreakspace");
defineSymbol(math, main, spacing, null, "\\nobreak");
defineSymbol(math, main, spacing, null, "\\allowbreak");
defineSymbol(math, main, punct, ",", ",");
defineSymbol(math, main, punct, ";", ";");
defineSymbol(math, ams, bin, "\u22bc", "\\barwedge", true);
defineSymbol(math, ams, bin, "\u22bb", "\\veebar", true);
defineSymbol(math, main, bin, "\u2299", "\\odot", true);
defineSymbol(math, main, bin, "\u2295", "\\oplus", true);
defineSymbol(math, main, bin, "\u2297", "\\otimes", true);
defineSymbol(math, main, textord, "\u2202", "\\partial", true);
defineSymbol(math, main, bin, "\u2298", "\\oslash", true);
defineSymbol(math, ams, bin, "\u229a", "\\circledcirc", true);
defineSymbol(math, ams, bin, "\u22a1", "\\boxdot", true);
defineSymbol(math, main, bin, "\u25b3", "\\bigtriangleup");
defineSymbol(math, main, bin, "\u25bd", "\\bigtriangledown");
defineSymbol(math, main, bin, "\u2020", "\\dagger");
defineSymbol(math, main, bin, "\u22c4", "\\diamond");
defineSymbol(math, main, bin, "\u22c6", "\\star");
defineSymbol(math, main, bin, "\u25c3", "\\triangleleft");
defineSymbol(math, main, bin, "\u25b9", "\\triangleright");
defineSymbol(math, main, symbols_open, "{", "\\{");
defineSymbol(symbols_text, main, textord, "{", "\\{");
defineSymbol(symbols_text, main, textord, "{", "\\textbraceleft");
defineSymbol(math, main, symbols_close, "}", "\\}");
defineSymbol(symbols_text, main, textord, "}", "\\}");
defineSymbol(symbols_text, main, textord, "}", "\\textbraceright");
defineSymbol(math, main, symbols_open, "{", "\\lbrace");
defineSymbol(math, main, symbols_close, "}", "\\rbrace");
defineSymbol(math, main, symbols_open, "[", "\\lbrack", true);
defineSymbol(symbols_text, main, textord, "[", "\\lbrack", true);
defineSymbol(math, main, symbols_close, "]", "\\rbrack", true);
defineSymbol(symbols_text, main, textord, "]", "\\rbrack", true);
defineSymbol(math, main, symbols_open, "(", "\\lparen", true);
defineSymbol(math, main, symbols_close, ")", "\\rparen", true);
defineSymbol(symbols_text, main, textord, "<", "\\textless", true); // in T1 fontenc
defineSymbol(symbols_text, main, textord, ">", "\\textgreater", true); // in T1 fontenc
defineSymbol(math, main, symbols_open, "\u230a", "\\lfloor", true);
defineSymbol(math, main, symbols_close, "\u230b", "\\rfloor", true);
defineSymbol(math, main, symbols_open, "\u2308", "\\lceil", true);
defineSymbol(math, main, symbols_close, "\u2309", "\\rceil", true);
defineSymbol(math, main, textord, "\\", "\\backslash");
defineSymbol(math, main, textord, "\u2223", "|");
defineSymbol(math, main, textord, "\u2223", "\\vert");
defineSymbol(symbols_text, main, textord, "|", "\\textbar", true); // in T1 fontenc
defineSymbol(math, main, textord, "\u2225", "\\|");
defineSymbol(math, main, textord, "\u2225", "\\Vert");
defineSymbol(symbols_text, main, textord, "\u2225", "\\textbardbl");
defineSymbol(symbols_text, main, textord, "~", "\\textasciitilde");
defineSymbol(symbols_text, main, textord, "\\", "\\textbackslash");
defineSymbol(symbols_text, main, textord, "^", "\\textasciicircum");
defineSymbol(math, main, rel, "\u2191", "\\uparrow", true);
defineSymbol(math, main, rel, "\u21d1", "\\Uparrow", true);
defineSymbol(math, main, rel, "\u2193", "\\downarrow", true);
defineSymbol(math, main, rel, "\u21d3", "\\Downarrow", true);
defineSymbol(math, main, rel, "\u2195", "\\updownarrow", true);
defineSymbol(math, main, rel, "\u21d5", "\\Updownarrow", true);
defineSymbol(math, main, op, "\u2210", "\\coprod");
defineSymbol(math, main, op, "\u22c1", "\\bigvee");
defineSymbol(math, main, op, "\u22c0", "\\bigwedge");
defineSymbol(math, main, op, "\u2a04", "\\biguplus");
defineSymbol(math, main, op, "\u22c2", "\\bigcap");
defineSymbol(math, main, op, "\u22c3", "\\bigcup");
defineSymbol(math, main, op, "\u222b", "\\int");
defineSymbol(math, main, op, "\u222b", "\\intop");
defineSymbol(math, main, op, "\u222c", "\\iint");
defineSymbol(math, main, op, "\u222d", "\\iiint");
defineSymbol(math, main, op, "\u220f", "\\prod");
defineSymbol(math, main, op, "\u2211", "\\sum");
defineSymbol(math, main, op, "\u2a02", "\\bigotimes");
defineSymbol(math, main, op, "\u2a01", "\\bigoplus");
defineSymbol(math, main, op, "\u2a00", "\\bigodot");
defineSymbol(math, main, op, "\u222e", "\\oint");
defineSymbol(math, main, op, "\u222f", "\\oiint");
defineSymbol(math, main, op, "\u2230", "\\oiiint");
defineSymbol(math, main, op, "\u2a06", "\\bigsqcup");
defineSymbol(math, main, op, "\u222b", "\\smallint");
defineSymbol(symbols_text, main, inner, "\u2026", "\\textellipsis");
defineSymbol(math, main, inner, "\u2026", "\\mathellipsis");
defineSymbol(symbols_text, main, inner, "\u2026", "\\ldots", true);
defineSymbol(math, main, inner, "\u2026", "\\ldots", true);
defineSymbol(math, main, inner, "\u22ef", "\\@cdots", true);
defineSymbol(math, main, inner, "\u22f1", "\\ddots", true);
// \vdots is a macro that uses one of these two symbols (with made-up names):
defineSymbol(math, main, textord, "\u22ee", "\\varvdots");
defineSymbol(symbols_text, main, textord, "\u22ee", "\\varvdots");
defineSymbol(math, main, accent, "\u02ca", "\\acute");
defineSymbol(math, main, accent, "\u02cb", "\\grave");
defineSymbol(math, main, accent, "\u00a8", "\\ddot");
defineSymbol(math, main, accent, "\u007e", "\\tilde");
defineSymbol(math, main, accent, "\u02c9", "\\bar");
defineSymbol(math, main, accent, "\u02d8", "\\breve");
defineSymbol(math, main, accent, "\u02c7", "\\check");
defineSymbol(math, main, accent, "\u005e", "\\hat");
defineSymbol(math, main, accent, "\u20d7", "\\vec");
defineSymbol(math, main, accent, "\u02d9", "\\dot");
defineSymbol(math, main, accent, "\u02da", "\\mathring");
// \imath and \jmath should be invariant to \mathrm, \mathbf, etc., so use PUA
defineSymbol(math, main, mathord, "\ue131", "\\@imath");
defineSymbol(math, main, mathord, "\ue237", "\\@jmath");
defineSymbol(math, main, textord, "\u0131", "\u0131");
defineSymbol(math, main, textord, "\u0237", "\u0237");
defineSymbol(symbols_text, main, textord, "\u0131", "\\i", true);
defineSymbol(symbols_text, main, textord, "\u0237", "\\j", true);
defineSymbol(symbols_text, main, textord, "\u00df", "\\ss", true);
defineSymbol(symbols_text, main, textord, "\u00e6", "\\ae", true);
defineSymbol(symbols_text, main, textord, "\u0153", "\\oe", true);
defineSymbol(symbols_text, main, textord, "\u00f8", "\\o", true);
defineSymbol(symbols_text, main, textord, "\u00c6", "\\AE", true);
defineSymbol(symbols_text, main, textord, "\u0152", "\\OE", true);
defineSymbol(symbols_text, main, textord, "\u00d8", "\\O", true);
defineSymbol(symbols_text, main, accent, "\u02ca", "\\'"); // acute
defineSymbol(symbols_text, main, accent, "\u02cb", "\\`"); // grave
defineSymbol(symbols_text, main, accent, "\u02c6", "\\^"); // circumflex
defineSymbol(symbols_text, main, accent, "\u02dc", "\\~"); // tilde
defineSymbol(symbols_text, main, accent, "\u02c9", "\\="); // macron
defineSymbol(symbols_text, main, accent, "\u02d8", "\\u"); // breve
defineSymbol(symbols_text, main, accent, "\u02d9", "\\."); // dot above
defineSymbol(symbols_text, main, accent, "\u00b8", "\\c"); // cedilla
defineSymbol(symbols_text, main, accent, "\u02da", "\\r"); // ring above
defineSymbol(symbols_text, main, accent, "\u02c7", "\\v"); // caron
defineSymbol(symbols_text, main, accent, "\u00a8", '\\"'); // diaeresis
defineSymbol(symbols_text, main, accent, "\u02dd", "\\H"); // double acute
defineSymbol(symbols_text, main, accent, "\u25ef", "\\textcircled"); // \bigcirc glyph

// These ligatures are detected and created in Parser.js's `formLigatures`.
const ligatures = {
  "--": true,
  "---": true,
  "``": true,
  "''": true
};
defineSymbol(symbols_text, main, textord, "\u2013", "--", true);
defineSymbol(symbols_text, main, textord, "\u2013", "\\textendash");
defineSymbol(symbols_text, main, textord, "\u2014", "---", true);
defineSymbol(symbols_text, main, textord, "\u2014", "\\textemdash");
defineSymbol(symbols_text, main, textord, "\u2018", "`", true);
defineSymbol(symbols_text, main, textord, "\u2018", "\\textquoteleft");
defineSymbol(symbols_text, main, textord, "\u2019", "'", true);
defineSymbol(symbols_text, main, textord, "\u2019", "\\textquoteright");
defineSymbol(symbols_text, main, textord, "\u201c", "``", true);
defineSymbol(symbols_text, main, textord, "\u201c", "\\textquotedblleft");
defineSymbol(symbols_text, main, textord, "\u201d", "''", true);
defineSymbol(symbols_text, main, textord, "\u201d", "\\textquotedblright");
//  \degree from gensymb package
defineSymbol(math, main, textord, "\u00b0", "\\degree", true);
defineSymbol(symbols_text, main, textord, "\u00b0", "\\degree");
// \textdegree from inputenc package
defineSymbol(symbols_text, main, textord, "\u00b0", "\\textdegree", true);
// TODO: In LaTeX, \pounds can generate a different character in text and math
// mode, but among our fonts, only Main-Regular defines this character "163".
defineSymbol(math, main, textord, "\u00a3", "\\pounds");
defineSymbol(math, main, textord, "\u00a3", "\\mathsterling", true);
defineSymbol(symbols_text, main, textord, "\u00a3", "\\pounds");
defineSymbol(symbols_text, main, textord, "\u00a3", "\\textsterling", true);
defineSymbol(math, ams, textord, "\u2720", "\\maltese");
defineSymbol(symbols_text, ams, textord, "\u2720", "\\maltese");

// There are lots of symbols which are the same, so we add them in afterwards.
// All of these are textords in math mode
const mathTextSymbols = "0123456789/@.\"";
for (let i = 0; i < mathTextSymbols.length; i++) {
  const ch = mathTextSymbols.charAt(i);
  defineSymbol(math, main, textord, ch, ch);
}

// All of these are textords in text mode
const textSymbols = "0123456789!@*()-=+\";:?/.,";
for (let i = 0; i < textSymbols.length; i++) {
  const ch = textSymbols.charAt(i);
  defineSymbol(symbols_text, main, textord, ch, ch);
}

// All of these are textords in text mode, and mathords in math mode
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < letters.length; i++) {
  const ch = letters.charAt(i);
  defineSymbol(math, main, mathord, ch, ch);
  defineSymbol(symbols_text, main, textord, ch, ch);
}

// Blackboard bold and script letters in Unicode range
defineSymbol(math, ams, textord, "C", "\u2102"); // blackboard bold
defineSymbol(symbols_text, ams, textord, "C", "\u2102");
defineSymbol(math, ams, textord, "H", "\u210D");
defineSymbol(symbols_text, ams, textord, "H", "\u210D");
defineSymbol(math, ams, textord, "N", "\u2115");
defineSymbol(symbols_text, ams, textord, "N", "\u2115");
defineSymbol(math, ams, textord, "P", "\u2119");
defineSymbol(symbols_text, ams, textord, "P", "\u2119");
defineSymbol(math, ams, textord, "Q", "\u211A");
defineSymbol(symbols_text, ams, textord, "Q", "\u211A");
defineSymbol(math, ams, textord, "R", "\u211D");
defineSymbol(symbols_text, ams, textord, "R", "\u211D");
defineSymbol(math, ams, textord, "Z", "\u2124");
defineSymbol(symbols_text, ams, textord, "Z", "\u2124");
defineSymbol(math, main, mathord, "h", "\u210E"); // italic h, Planck constant
defineSymbol(symbols_text, main, mathord, "h", "\u210E");

// The next loop loads wide (surrogate pair) characters.
// We support some letters in the Unicode range U+1D400 to U+1D7FF,
// Mathematical Alphanumeric Symbols.
// Some editors do not deal well with wide characters. So don't write the
// string into this file. Instead, create the string from the surrogate pair.
let wideChar = "";
for (let i = 0; i < letters.length; i++) {
  const ch = letters.charAt(i);

  // The hex numbers in the next line are a surrogate pair.
  // 0xD835 is the high surrogate for all letters in the range we support.
  // 0xDC00 is the low surrogate for bold A.
  wideChar = String.fromCharCode(0xD835, 0xDC00 + i); // A-Z a-z bold
  defineSymbol(math, main, mathord, ch, wideChar);
  defineSymbol(symbols_text, main, textord, ch, wideChar);
  wideChar = String.fromCharCode(0xD835, 0xDC34 + i); // A-Z a-z italic
  defineSymbol(math, main, mathord, ch, wideChar);
  defineSymbol(symbols_text, main, textord, ch, wideChar);
  wideChar = String.fromCharCode(0xD835, 0xDC68 + i); // A-Z a-z bold italic
  defineSymbol(math, main, mathord, ch, wideChar);
  defineSymbol(symbols_text, main, textord, ch, wideChar);
  wideChar = String.fromCharCode(0xD835, 0xDD04 + i); // A-Z a-z Fraktur
  defineSymbol(math, main, mathord, ch, wideChar);
  defineSymbol(symbols_text, main, textord, ch, wideChar);
  wideChar = String.fromCharCode(0xD835, 0xDD6C + i); // A-Z a-z bold Fraktur
  defineSymbol(math, main, mathord, ch, wideChar);
  defineSymbol(symbols_text, main, textord, ch, wideChar);
  wideChar = String.fromCharCode(0xD835, 0xDDA0 + i); // A-Z a-z sans-serif
  defineSymbol(math, main, mathord, ch, wideChar);
  defineSymbol(symbols_text, main, textord, ch, wideChar);
  wideChar = String.fromCharCode(0xD835, 0xDDD4 + i); // A-Z a-z sans bold
  defineSymbol(math, main, mathord, ch, wideChar);
  defineSymbol(symbols_text, main, textord, ch, wideChar);
  wideChar = String.fromCharCode(0xD835, 0xDE08 + i); // A-Z a-z sans italic
  defineSymbol(math, main, mathord, ch, wideChar);
  defineSymbol(symbols_text, main, textord, ch, wideChar);
  wideChar = String.fromCharCode(0xD835, 0xDE70 + i); // A-Z a-z monospace
  defineSymbol(math, main, mathord, ch, wideChar);
  defineSymbol(symbols_text, main, textord, ch, wideChar);
  if (i < 26) {
    // KaTeX fonts have only capital letters for blackboard bold and script.
    // See exception for k below.
    wideChar = String.fromCharCode(0xD835, 0xDD38 + i); // A-Z double struck
    defineSymbol(math, main, mathord, ch, wideChar);
    defineSymbol(symbols_text, main, textord, ch, wideChar);
    wideChar = String.fromCharCode(0xD835, 0xDC9C + i); // A-Z script
    defineSymbol(math, main, mathord, ch, wideChar);
    defineSymbol(symbols_text, main, textord, ch, wideChar);
  }

  // TODO: Add bold script when it is supported by a KaTeX font.
}
// "k" is the only double struck lower case letter in the KaTeX fonts.
wideChar = String.fromCharCode(0xD835, 0xDD5C); // k double struck
defineSymbol(math, main, mathord, "k", wideChar);
defineSymbol(symbols_text, main, textord, "k", wideChar);

// Next, some wide character numerals
for (let i = 0; i < 10; i++) {
  const ch = i.toString();
  wideChar = String.fromCharCode(0xD835, 0xDFCE + i); // 0-9 bold
  defineSymbol(math, main, mathord, ch, wideChar);
  defineSymbol(symbols_text, main, textord, ch, wideChar);
  wideChar = String.fromCharCode(0xD835, 0xDFE2 + i); // 0-9 sans serif
  defineSymbol(math, main, mathord, ch, wideChar);
  defineSymbol(symbols_text, main, textord, ch, wideChar);
  wideChar = String.fromCharCode(0xD835, 0xDFEC + i); // 0-9 bold sans
  defineSymbol(math, main, mathord, ch, wideChar);
  defineSymbol(symbols_text, main, textord, ch, wideChar);
  wideChar = String.fromCharCode(0xD835, 0xDFF6 + i); // 0-9 monospace
  defineSymbol(math, main, mathord, ch, wideChar);
  defineSymbol(symbols_text, main, textord, ch, wideChar);
}

// We add these Latin-1 letters as symbols for backwards-compatibility,
// but they are not actually in the font, nor are they supported by the
// Unicode accent mechanism, so they fall back to Times font and look ugly.
// TODO(edemaine): Fix this.
const extraLatin = "\u00d0\u00de\u00fe";
for (let i = 0; i < extraLatin.length; i++) {
  const ch = extraLatin.charAt(i);
  defineSymbol(math, main, mathord, ch, ch);
  defineSymbol(symbols_text, main, textord, ch, ch);
}
;// ./src/wide-character.ts
/**
 * This file provides support for Unicode range U+1D400 to U+1D7FF,
 * Mathematical Alphanumeric Symbols.
 *
 * Function wideCharacterFont takes a wide character as input and returns
 * the font information necessary to render it properly.
 */



/**
 * Data below is from https://www.unicode.org/charts/PDF/U1D400.pdf
 * That document sorts characters into groups by font type, say bold or italic.
 *
 * In the arrays below, each subarray consists three elements:
 *      * The CSS class of that group when in math mode.
 *      * The CSS class of that group when in text mode.
 *      * The font name, so that KaTeX can get font metrics.
 */

const wideLatinLetterData = [["mathbf", "textbf", "Main-Bold"],
// A-Z bold upright
["mathbf", "textbf", "Main-Bold"],
// a-z bold upright

["mathnormal", "textit", "Math-Italic"],
// A-Z italic
["mathnormal", "textit", "Math-Italic"],
// a-z italic

["boldsymbol", "boldsymbol", "Main-BoldItalic"],
// A-Z bold italic
["boldsymbol", "boldsymbol", "Main-BoldItalic"],
// a-z bold italic

// Map fancy A-Z letters to script, not calligraphic.
// This aligns with unicode-math and math fonts (except Cambria Math).
["mathscr", "textscr", "Script-Regular"],
// A-Z script
["", "", ""],
// a-z script.  No font

["", "", ""],
// A-Z bold script. No font
["", "", ""],
// a-z bold script. No font

["mathfrak", "textfrak", "Fraktur-Regular"],
// A-Z Fraktur
["mathfrak", "textfrak", "Fraktur-Regular"],
// a-z Fraktur

["mathbb", "textbb", "AMS-Regular"],
// A-Z double-struck
["mathbb", "textbb", "AMS-Regular"],
// k double-struck

// Note that we are using a bold font, but font metrics for regular Fraktur.
["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
// A-Z bold Fraktur
["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
// a-z bold Fraktur

["mathsf", "textsf", "SansSerif-Regular"],
// A-Z sans-serif
["mathsf", "textsf", "SansSerif-Regular"],
// a-z sans-serif

["mathboldsf", "textboldsf", "SansSerif-Bold"],
// A-Z bold sans-serif
["mathboldsf", "textboldsf", "SansSerif-Bold"],
// a-z bold sans-serif

["mathitsf", "textitsf", "SansSerif-Italic"],
// A-Z italic sans-serif
["mathitsf", "textitsf", "SansSerif-Italic"],
// a-z italic sans-serif

["", "", ""],
// A-Z bold italic sans. No font
["", "", ""],
// a-z bold italic sans. No font

["mathtt", "texttt", "Typewriter-Regular"],
// A-Z monospace
["mathtt", "texttt", "Typewriter-Regular"] // a-z monospace
];
const wideNumeralData = [["mathbf", "textbf", "Main-Bold"],
// 0-9 bold
["", "", ""],
// 0-9 double-struck. No KaTeX font.
["mathsf", "textsf", "SansSerif-Regular"],
// 0-9 sans-serif
["mathboldsf", "textboldsf", "SansSerif-Bold"],
// 0-9 bold sans-serif
["mathtt", "texttt", "Typewriter-Regular"] // 0-9 monospace
];
const wideCharacterFont = (wideChar, mode) => {
  // IE doesn't support codePointAt(). So work with the surrogate pair.
  const H = wideChar.charCodeAt(0); // high surrogate
  const L = wideChar.charCodeAt(1); // low surrogate
  const codePoint = (H - 0xD800) * 0x400 + (L - 0xDC00) + 0x10000;
  const j = mode === "math" ? 0 : 1; // column index for CSS class.

  if (0x1D400 <= codePoint && codePoint < 0x1D6A4) {
    // wideLatinLetterData contains exactly 26 chars on each row.
    // So we can calculate the relevant row. No traverse necessary.
    const i = Math.floor((codePoint - 0x1D400) / 26);
    return [wideLatinLetterData[i][2], wideLatinLetterData[i][j]];
  } else if (0x1D7CE <= codePoint && codePoint <= 0x1D7FF) {
    // Numerals, ten per row.
    const i = Math.floor((codePoint - 0x1D7CE) / 10);
    return [wideNumeralData[i][2], wideNumeralData[i][j]];
  } else if (codePoint === 0x1D6A5 || codePoint === 0x1D6A6) {
    // dotless i or j
    return [wideLatinLetterData[0][2], wideLatinLetterData[0][j]];
  } else if (0x1D6A6 < codePoint && codePoint < 0x1D7CE) {
    // Greek letters. Not supported, yet.
    return ["", ""];
  } else {
    // We don't support any wide characters outside 1D400–1D7FF.
    throw new src_ParseError("Unsupported character: " + wideChar);
  }
};
;// ./src/buildCommon.ts
/* eslint no-console:0 */
/**
 * This module contains general functions that can be used for building
 * different kinds of domTree nodes in a consistent manner.
 */







/**
 * Looks up the given symbol in fontMetrics, after applying any symbol
 * replacements defined in symbol.js
 */
const lookupSymbol = function (value,
// TODO(#963): Use a union type for this.
fontName, mode) {
  // Replace the value with its replaced value from symbol.js
  if (src_symbols[mode][value]) {
    const replacement = src_symbols[mode][value].replace;
    if (replacement) {
      value = replacement;
    }
  }
  return {
    value,
    metrics: getCharacterMetrics(value, fontName, mode)
  };
};

/**
 * Makes a symbolNode after translation via the list of symbols in symbols.js.
 * Correctly pulls out metrics for the character, and optionally takes a list of
 * classes to be attached to the node.
 *
 * TODO: make argument order closer to makeSpan
 * TODO: add a separate argument for math class (e.g. `mop`, `mbin`), which
 * should if present come first in `classes`.
 * TODO(#953): Make `options` mandatory and always pass it in.
 */
const makeSymbol = function (value, fontName, mode, options, classes) {
  const lookup = lookupSymbol(value, fontName, mode);
  const metrics = lookup.metrics;
  value = lookup.value;
  let symbolNode;
  if (metrics) {
    let italic = metrics.italic;
    if (mode === "text" || options && options.font === "mathit") {
      italic = 0;
    }
    symbolNode = new SymbolNode(value, metrics.height, metrics.depth, italic, metrics.skew, metrics.width, classes);
  } else {
    // TODO(emily): Figure out a good way to only print this in development
    typeof console !== "undefined" && console.warn("No character metrics " + ("for '" + value + "' in style '" + fontName + "' and mode '" + mode + "'"));
    symbolNode = new SymbolNode(value, 0, 0, 0, 0, 0, classes);
  }
  if (options) {
    symbolNode.maxFontSize = options.sizeMultiplier;
    if (options.style.isTight()) {
      symbolNode.classes.push("mtight");
    }
    const color = options.getColor();
    if (color) {
      symbolNode.style.color = color;
    }
  }
  return symbolNode;
};

/**
 * Makes a symbol in Main-Regular or AMS-Regular.
 * Used for rel, bin, open, close, inner, and punct.
 */
const mathsym = function (value, mode, options, classes) {
  if (classes === void 0) {
    classes = [];
  }
  // Decide what font to render the symbol in by its entry in the symbols
  // table.
  // Have a special case for when the value = \ because the \ is used as a
  // textord in unsupported command errors but cannot be parsed as a regular
  // text ordinal and is therefore not present as a symbol in the symbols
  // table for text, as well as a special case for boldsymbol because it
  // can be used for bold + and -
  if (options.font === "boldsymbol" && lookupSymbol(value, "Main-Bold", mode).metrics) {
    return makeSymbol(value, "Main-Bold", mode, options, classes.concat(["mathbf"]));
  } else if (value === "\\" || src_symbols[mode][value].font === "main") {
    return makeSymbol(value, "Main-Regular", mode, options, classes);
  } else {
    return makeSymbol(value, "AMS-Regular", mode, options, classes.concat(["amsrm"]));
  }
};

/**
 * Determines which of the two font names (Main-Bold and Math-BoldItalic) and
 * corresponding style tags (mathbf or boldsymbol) to use for font "boldsymbol",
 * depending on the symbol.  Use this function instead of fontMap for font
 * "boldsymbol".
 */
const boldsymbol = function (value, mode, options, classes, type) {
  if (type !== "textord" && lookupSymbol(value, "Math-BoldItalic", mode).metrics) {
    return {
      fontName: "Math-BoldItalic",
      fontClass: "boldsymbol"
    };
  } else {
    // Some glyphs do not exist in Math-BoldItalic so we need to use
    // Main-Bold instead.
    return {
      fontName: "Main-Bold",
      fontClass: "mathbf"
    };
  }
};

/**
 * Makes either a mathord or textord in the correct font and color.
 */
const makeOrd = function (group, options, type) {
  const mode = group.mode;
  const text = group.text;
  const classes = ["mord"];

  // Math mode or Old font (i.e. \rm)
  const isFont = mode === "math" || mode === "text" && options.font;
  const fontOrFamily = isFont ? options.font : options.fontFamily;
  let wideFontName = "";
  let wideFontClass = "";
  if (text.charCodeAt(0) === 0xD835) {
    [wideFontName, wideFontClass] = wideCharacterFont(text, mode);
  }
  if (wideFontName.length > 0) {
    // surrogate pairs get special treatment
    return makeSymbol(text, wideFontName, mode, options, classes.concat(wideFontClass));
  } else if (fontOrFamily) {
    let fontName;
    let fontClasses;
    if (fontOrFamily === "boldsymbol") {
      const fontData = boldsymbol(text, mode, options, classes, type);
      fontName = fontData.fontName;
      fontClasses = [fontData.fontClass];
    } else if (isFont) {
      fontName = fontMap[fontOrFamily].fontName;
      fontClasses = [fontOrFamily];
    } else {
      fontName = retrieveTextFontName(fontOrFamily, options.fontWeight, options.fontShape);
      fontClasses = [fontOrFamily, options.fontWeight, options.fontShape];
    }
    if (lookupSymbol(text, fontName, mode).metrics) {
      return makeSymbol(text, fontName, mode, options, classes.concat(fontClasses));
    } else if (ligatures.hasOwnProperty(text) && fontName.slice(0, 10) === "Typewriter") {
      // Deconstruct ligatures in monospace fonts (\texttt, \tt).
      const parts = [];
      for (let i = 0; i < text.length; i++) {
        parts.push(makeSymbol(text[i], fontName, mode, options, classes.concat(fontClasses)));
      }
      return makeFragment(parts);
    }
  }

  // Makes a symbol in the default font for mathords and textords.
  if (type === "mathord") {
    return makeSymbol(text, "Math-Italic", mode, options, classes.concat(["mathnormal"]));
  } else if (type === "textord") {
    const font = src_symbols[mode][text] && src_symbols[mode][text].font;
    if (font === "ams") {
      const fontName = retrieveTextFontName("amsrm", options.fontWeight, options.fontShape);
      return makeSymbol(text, fontName, mode, options, classes.concat("amsrm", options.fontWeight, options.fontShape));
    } else if (font === "main" || !font) {
      const fontName = retrieveTextFontName("textrm", options.fontWeight, options.fontShape);
      return makeSymbol(text, fontName, mode, options, classes.concat(options.fontWeight, options.fontShape));
    } else {
      // fonts added by plugins
      const fontName = retrieveTextFontName(font, options.fontWeight, options.fontShape);
      // We add font name as a css class
      return makeSymbol(text, fontName, mode, options, classes.concat(fontName, options.fontWeight, options.fontShape));
    }
  } else {
    throw new Error("unexpected type: " + type + " in makeOrd");
  }
};

/**
 * Returns true if subsequent symbolNodes have the same classes, skew, maxFont,
 * and styles. For mathnormal text, the left node must also have zero italic
 * correction so we don't lose spacing between combined glyphs.
 */
const canCombine = (prev, next) => {
  if (createClass(prev.classes) !== createClass(next.classes) || prev.skew !== next.skew || prev.maxFontSize !== next.maxFontSize || prev.italic !== 0 && prev.hasClass("mathnormal")) {
    return false;
  }

  // If prev and next both are just "mbin"s or "mord"s we don't combine them
  // so that the proper spacing can be preserved.
  if (prev.classes.length === 1) {
    const cls = prev.classes[0];
    if (cls === "mbin" || cls === "mord") {
      return false;
    }
  }
  for (const key of Object.keys(prev.style)) {
    if (prev.style[key] !== next.style[key]) {
      return false;
    }
  }
  for (const key of Object.keys(next.style)) {
    if (prev.style[key] !== next.style[key]) {
      return false;
    }
  }
  return true;
};

/**
 * Combine consecutive domTree.symbolNodes into a single symbolNode.
 * Note: this function mutates the argument.
 */
const tryCombineChars = chars => {
  for (let i = 0; i < chars.length - 1; i++) {
    const prev = chars[i];
    const next = chars[i + 1];
    if (prev instanceof SymbolNode && next instanceof SymbolNode && canCombine(prev, next)) {
      prev.text += next.text;
      prev.height = Math.max(prev.height, next.height);
      prev.depth = Math.max(prev.depth, next.depth);
      // Use the last character's italic correction since we use
      // it to add padding to the right of the span created from
      // the combined characters.
      prev.italic = next.italic;
      chars.splice(i + 1, 1);
      i--;
    }
  }
  return chars;
};

/**
 * Calculate the height, depth, and maxFontSize of an element based on its
 * children.
 */
const sizeElementFromChildren = function (elem) {
  let height = 0;
  let depth = 0;
  let maxFontSize = 0;
  for (let i = 0; i < elem.children.length; i++) {
    const child = elem.children[i];
    if (child.height > height) {
      height = child.height;
    }
    if (child.depth > depth) {
      depth = child.depth;
    }
    if (child.maxFontSize > maxFontSize) {
      maxFontSize = child.maxFontSize;
    }
  }
  elem.height = height;
  elem.depth = depth;
  elem.maxFontSize = maxFontSize;
};

/**
 * Makes a span with the given list of classes, list of children, and options.
 *
 * TODO(#953): Ensure that `options` is always provided (currently some call
 * sites don't pass it) and make the type below mandatory.
 * TODO: add a separate argument for math class (e.g. `mop`, `mbin`), which
 * should if present come first in `classes`.
 */
const makeSpan = function (classes, children, options, style) {
  const span = new Span(classes, children, options, style);
  sizeElementFromChildren(span);
  return span;
};

// SVG one is simpler -- doesn't require height, depth, max-font setting.
// This is also a separate method for typesafety.
const makeSvgSpan = (classes, children, options, style) => new Span(classes, children, options, style);
const makeLineSpan = function (className, options, thickness) {
  const line = makeSpan([className], [], options);
  line.height = Math.max(thickness || options.fontMetrics().defaultRuleThickness, options.minRuleThickness);
  line.style.borderBottomWidth = makeEm(line.height);
  line.maxFontSize = 1.0;
  return line;
};

/**
 * Makes an anchor with the given href, list of classes, list of children,
 * and options.
 */
const makeAnchor = function (href, classes, children, options) {
  const anchor = new Anchor(href, classes, children, options);
  sizeElementFromChildren(anchor);
  return anchor;
};

/**
 * Makes a document fragment with the given list of children.
 */
const makeFragment = function (children) {
  const fragment = new DocumentFragment(children);
  sizeElementFromChildren(fragment);
  return fragment;
};

/**
 * Wraps group in a span if it's a document fragment, allowing to apply classes
 * and styles
 */
const wrapFragment = function (group, options) {
  if (group instanceof DocumentFragment) {
    return makeSpan([], [group], options);
  }
  return group;
};

// A list of child or kern nodes to be stacked on top of each other (i.e. the
// first element will be at the bottom, and the last at the top).

// Computes the updated `children` list and the overall depth.
//
// This helper function for makeVList makes it easier to enforce type safety by
// allowing early exits (returns) in the logic.
const getVListChildrenAndDepth = function (params) {
  if (params.positionType === "individualShift") {
    const oldChildren = params.children;
    const children = [oldChildren[0]];

    // Add in kerns to the list of params.children to get each element to be
    // shifted to the correct specified shift
    const depth = -oldChildren[0].shift - oldChildren[0].elem.depth;
    let currPos = depth;
    for (let i = 1; i < oldChildren.length; i++) {
      const diff = -oldChildren[i].shift - currPos - oldChildren[i].elem.depth;
      const size = diff - (oldChildren[i - 1].elem.height + oldChildren[i - 1].elem.depth);
      currPos = currPos + diff;
      children.push({
        type: "kern",
        size
      });
      children.push(oldChildren[i]);
    }
    return {
      children,
      depth
    };
  }
  let depth;
  if (params.positionType === "top") {
    // We always start at the bottom, so calculate the bottom by adding up
    // all the sizes
    let bottom = params.positionData;
    for (let i = 0; i < params.children.length; i++) {
      const child = params.children[i];
      bottom -= child.type === "kern" ? child.size : child.elem.height + child.elem.depth;
    }
    depth = bottom;
  } else if (params.positionType === "bottom") {
    depth = -params.positionData;
  } else {
    const firstChild = params.children[0];
    if (firstChild.type !== "elem") {
      throw new Error('First child must have type "elem".');
    }
    if (params.positionType === "shift") {
      depth = -firstChild.elem.depth - params.positionData;
    } else if (params.positionType === "firstBaseline") {
      depth = -firstChild.elem.depth;
    } else {
      throw new Error("Invalid positionType " + params.positionType + ".");
    }
  }
  return {
    children: params.children,
    depth
  };
};

/**
 * Makes a vertical list by stacking elements and kerns on top of each other.
 * Allows for many different ways of specifying the positioning method.
 *
 * See VListParam documentation above.
 */
const makeVList = function (params, options) {
  const {
    children,
    depth
  } = getVListChildrenAndDepth(params);

  // Create a strut that is taller than any list item. The strut is added to
  // each item, where it will determine the item's baseline. Since it has
  // `overflow:hidden`, the strut's top edge will sit on the item's line box's
  // top edge and the strut's bottom edge will sit on the item's baseline,
  // with no additional line-height spacing. This allows the item baseline to
  // be positioned precisely without worrying about font ascent and
  // line-height.
  let pstrutSize = 0;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.type === "elem") {
      const elem = child.elem;
      pstrutSize = Math.max(pstrutSize, elem.maxFontSize, elem.height);
    }
  }
  pstrutSize += 2;
  const pstrut = makeSpan(["pstrut"], []);
  pstrut.style.height = makeEm(pstrutSize);

  // Create a new list of actual children at the correct offsets
  const realChildren = [];
  let minPos = depth;
  let maxPos = depth;
  let currPos = depth;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.type === "kern") {
      currPos += child.size;
    } else {
      const elem = child.elem;
      const classes = child.wrapperClasses || [];
      const style = child.wrapperStyle || {};
      const childWrap = makeSpan(classes, [pstrut, elem], undefined, style);
      childWrap.style.top = makeEm(-pstrutSize - currPos - elem.depth);
      if (child.marginLeft) {
        childWrap.style.marginLeft = child.marginLeft;
      }
      if (child.marginRight) {
        childWrap.style.marginRight = child.marginRight;
      }
      realChildren.push(childWrap);
      currPos += elem.height + elem.depth;
    }
    minPos = Math.min(minPos, currPos);
    maxPos = Math.max(maxPos, currPos);
  }

  // The vlist contents go in a table-cell with `vertical-align:bottom`.
  // This cell's bottom edge will determine the containing table's baseline
  // without overly expanding the containing line-box.
  const vlist = makeSpan(["vlist"], realChildren);
  vlist.style.height = makeEm(maxPos);

  // A second row is used if necessary to represent the vlist's depth.
  let rows;
  if (minPos < 0) {
    // We will define depth in an empty span with display: table-cell.
    // It should render with the height that we define. But Chrome, in
    // contenteditable mode only, treats that span as if it contains some
    // text content. And that min-height over-rides our desired height.
    // So we put another empty span inside the depth strut span.
    const emptySpan = makeSpan([], []);
    const depthStrut = makeSpan(["vlist"], [emptySpan]);
    depthStrut.style.height = makeEm(-minPos);

    // Safari wants the first row to have inline content; otherwise it
    // puts the bottom of the *second* row on the baseline.
    const topStrut = makeSpan(["vlist-s"], [new SymbolNode("\u200b")]);
    rows = [makeSpan(["vlist-r"], [vlist, topStrut]), makeSpan(["vlist-r"], [depthStrut])];
  } else {
    rows = [makeSpan(["vlist-r"], [vlist])];
  }
  const vtable = makeSpan(["vlist-t"], rows);
  if (rows.length === 2) {
    vtable.classes.push("vlist-t2");
  }
  vtable.height = maxPos;
  vtable.depth = -minPos;
  return vtable;
};

// Glue is a concept from TeX which is a flexible space between elements in
// either a vertical or horizontal list. In KaTeX, at least for now, it's
// static space between elements in a horizontal layout.
const makeGlue = (measurement, options) => {
  // Make an empty span for the space
  const rule = makeSpan(["mspace"], [], options);
  const size = calculateSize(measurement, options);
  rule.style.marginRight = makeEm(size);
  return rule;
};

// Takes font options, and returns the appropriate fontLookup name
const retrieveTextFontName = function (fontFamily, fontWeight, fontShape) {
  let baseFontName = "";
  switch (fontFamily) {
    case "amsrm":
      baseFontName = "AMS";
      break;
    case "textrm":
      baseFontName = "Main";
      break;
    case "textsf":
      baseFontName = "SansSerif";
      break;
    case "texttt":
      baseFontName = "Typewriter";
      break;
    default:
      baseFontName = fontFamily;
    // use fonts added by a plugin
  }
  let fontStylesName;
  if (fontWeight === "textbf" && fontShape === "textit") {
    fontStylesName = "BoldItalic";
  } else if (fontWeight === "textbf") {
    fontStylesName = "Bold";
  } else if (fontWeight === "textit") {
    fontStylesName = "Italic";
  } else {
    fontStylesName = "Regular";
  }
  return baseFontName + "-" + fontStylesName;
};

/**
 * Maps TeX font commands to objects containing:
 * - variant: string used for "mathvariant" attribute in buildMathML.js
 * - fontName: the "style" parameter to fontMetrics.getCharacterMetrics
 */
// A map between tex font commands an MathML mathvariant attribute values
const fontMap = {
  // styles
  "mathbf": {
    variant: "bold",
    fontName: "Main-Bold"
  },
  "mathrm": {
    variant: "normal",
    fontName: "Main-Regular"
  },
  "textit": {
    variant: "italic",
    fontName: "Main-Italic"
  },
  "mathit": {
    variant: "italic",
    fontName: "Main-Italic"
  },
  "mathnormal": {
    variant: "italic",
    fontName: "Math-Italic"
  },
  "mathsfit": {
    variant: "sans-serif-italic",
    fontName: "SansSerif-Italic"
  },
  // "boldsymbol" is missing because they require the use of multiple fonts:
  // Math-BoldItalic and Main-Bold.  This is handled by a special case in
  // makeOrd which ends up calling boldsymbol.

  // families
  "mathbb": {
    variant: "double-struck",
    fontName: "AMS-Regular"
  },
  "mathcal": {
    variant: "script",
    fontName: "Caligraphic-Regular"
  },
  "mathfrak": {
    variant: "fraktur",
    fontName: "Fraktur-Regular"
  },
  "mathscr": {
    variant: "script",
    fontName: "Script-Regular"
  },
  "mathsf": {
    variant: "sans-serif",
    fontName: "SansSerif-Regular"
  },
  "mathtt": {
    variant: "monospace",
    fontName: "Typewriter-Regular"
  }
};
const svgData = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
};
const staticSvg = function (value, options) {
  // Create a span with inline SVG for the element.
  const [pathName, width, height] = svgData[value];
  const path = new PathNode(pathName);
  const svgNode = new SvgNode([path], {
    "width": makeEm(width),
    "height": makeEm(height),
    // Override CSS rule `.katex svg { width: 100% }`
    "style": "width:" + makeEm(width),
    "viewBox": "0 0 " + 1000 * width + " " + 1000 * height,
    "preserveAspectRatio": "xMinYMin"
  });
  const span = makeSvgSpan(["overlay"], [svgNode], options);
  span.height = height;
  span.style.height = makeEm(height);
  span.style.width = makeEm(width);
  return span;
};
;// ./src/spacingData.ts
/**
 * Describes spaces between different classes of atoms.
 */

const thinspace = {
  number: 3,
  unit: "mu"
};
const mediumspace = {
  number: 4,
  unit: "mu"
};
const thickspace = {
  number: 5,
  unit: "mu"
};

// Making the type below exact with all optional fields doesn't work due to
// - https://github.com/facebook/flow/issues/4582
// - https://github.com/facebook/flow/issues/5688
// However, since *all* fields are optional, $Shape<> works as suggested in 5688
// above.

// Spacing relationships for display and text styles
const spacings = {
  mord: {
    mop: thinspace,
    mbin: mediumspace,
    mrel: thickspace,
    minner: thinspace
  },
  mop: {
    mord: thinspace,
    mop: thinspace,
    mrel: thickspace,
    minner: thinspace
  },
  mbin: {
    mord: mediumspace,
    mop: mediumspace,
    mopen: mediumspace,
    minner: mediumspace
  },
  mrel: {
    mord: thickspace,
    mop: thickspace,
    mopen: thickspace,
    minner: thickspace
  },
  mopen: {},
  mclose: {
    mop: thinspace,
    mbin: mediumspace,
    mrel: thickspace,
    minner: thinspace
  },
  mpunct: {
    mord: thinspace,
    mop: thinspace,
    mrel: thickspace,
    mopen: thinspace,
    mclose: thinspace,
    mpunct: thinspace,
    minner: thinspace
  },
  minner: {
    mord: thinspace,
    mop: thinspace,
    mbin: mediumspace,
    mrel: thickspace,
    mopen: thinspace,
    mpunct: thinspace,
    minner: thinspace
  }
};

// Spacing relationships for script and scriptscript styles
const tightSpacings = {
  mord: {
    mop: thinspace
  },
  mop: {
    mord: thinspace,
    mop: thinspace
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: thinspace
  },
  mpunct: {},
  minner: {
    mop: thinspace
  }
};
;// ./src/defineFunction.ts
/** Context provided to function handlers for error messages. */

// Note: reverse the order of the return type union will cause a flow error.
// See https://github.com/facebook/flow/issues/3663.

// More general version of `HtmlBuilder` for nodes (e.g. \sum, accent types)
// whose presence impacts super/subscripting. In this case, ParseNode<"supsub">
// delegates its HTML building to the HtmlBuilder corresponding to these nodes.

/**
 * Final function spec for use at parse time.
 * This is almost identical to `FunctionPropSpec`, except it
 * 1. includes the function handler, and
 * 2. requires all arguments except argTypes.
 * It is generated by `defineFunction()` below.
 */

/**
 * All registered functions.
 * `functions.js` just exports this same dictionary again and makes it public.
 * `Parser.js` requires this dictionary.
 */
const _functions = {};

/**
 * All HTML builders. Should be only used in the `define*` and the `build*ML`
 * functions.
 */
const _htmlGroupBuilders = {};

/**
 * All MathML builders. Should be only used in the `define*` and the `build*ML`
 * functions.
 */
const _mathmlGroupBuilders = {};
function defineFunction(_ref) {
  let {
    type,
    names,
    props,
    handler,
    htmlBuilder,
    mathmlBuilder
  } = _ref;
  // Set default values of functions
  const data = {
    type,
    numArgs: props.numArgs,
    argTypes: props.argTypes,
    allowedInArgument: !!props.allowedInArgument,
    allowedInText: !!props.allowedInText,
    allowedInMath: props.allowedInMath === undefined ? true : props.allowedInMath,
    numOptionalArgs: props.numOptionalArgs || 0,
    infix: !!props.infix,
    primitive: !!props.primitive,
    handler
  };
  for (let i = 0; i < names.length; ++i) {
    _functions[names[i]] = data;
  }
  if (type) {
    if (htmlBuilder) {
      _htmlGroupBuilders[type] = htmlBuilder;
    }
    if (mathmlBuilder) {
      _mathmlGroupBuilders[type] = mathmlBuilder;
    }
  }
}

/**
 * Use this to register only the HTML and MathML builders for a function (e.g.
 * if the function's ParseNode is generated in Parser.js rather than via a
 * stand-alone handler provided to `defineFunction`).
 */
function defineFunctionBuilders(_ref2) {
  let {
    type,
    htmlBuilder,
    mathmlBuilder
  } = _ref2;
  defineFunction({
    type,
    names: [],
    props: {
      numArgs: 0
    },
    handler() {
      throw new Error('Should never be called.');
    },
    htmlBuilder,
    mathmlBuilder
  });
}
const normalizeArgument = function (arg) {
  return arg.type === "ordgroup" && arg.body.length === 1 ? arg.body[0] : arg;
};

// Since the corresponding buildHTML/buildMathML function expects a
// list of elements, we normalize for different kinds of arguments
const ordargument = function (arg) {
  return arg.type === "ordgroup" ? arg.body : [arg];
};
;// ./src/buildHTML.ts
/**
 * This file does the main work of building a domTree structure from a parse
 * tree. The entry point is the `buildHTML` function, which takes a parse tree.
 * Then, the buildExpression, buildGroup, and various groupBuilders functions
 * are called, to produce a final HTML tree.
 */









// Binary atoms (first class `mbin`) change into ordinary atoms (`mord`)
// depending on their surroundings. See TeXbook pg. 442-446, Rules 5 and 6,
// and the text before Rule 19.
const binLeftCanceller = new Set(["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"]);
const binRightCanceller = new Set(["rightmost", "mrel", "mclose", "mpunct"]);
const styleMap = {
  "display": src_Style.DISPLAY,
  "text": src_Style.TEXT,
  "script": src_Style.SCRIPT,
  "scriptscript": src_Style.SCRIPTSCRIPT
};
const DomEnum = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
};
/**
 * Take a list of nodes, build them in order, and return a list of the built
 * nodes. documentFragments are flattened into their contents, so the
 * returned list contains no fragments. `isRealGroup` is true if `expression`
 * is a real group (no atoms will be added on either side), as opposed to
 * a partial group (e.g. one created by \color). `surrounding` is an array
 * consisting type of nodes that will be added to the left and right.
 */
const buildExpression = function (expression, options, isRealGroup, surrounding) {
  if (surrounding === void 0) {
    surrounding = [null, null];
  }
  // Parse expressions into `groups`.
  const groups = [];
  for (let i = 0; i < expression.length; i++) {
    const output = buildGroup(expression[i], options);
    if (output instanceof DocumentFragment) {
      const children = output.children;
      groups.push(...children);
    } else {
      groups.push(output);
    }
  }

  // Combine consecutive domTree.symbolNodes into a single symbolNode.
  tryCombineChars(groups);

  // If `expression` is a partial group, let the parent handle spacings
  // to avoid processing groups multiple times.
  if (!isRealGroup) {
    return groups;
  }
  let glueOptions = options;
  if (expression.length === 1) {
    const node = expression[0];
    if (node.type === "sizing") {
      glueOptions = options.havingSize(node.size);
    } else if (node.type === "styling") {
      glueOptions = options.havingStyle(styleMap[node.style]);
    }
  }

  // Dummy spans for determining spacings between surrounding atoms.
  // If `expression` has no atoms on the left or right, class "leftmost"
  // or "rightmost", respectively, is used to indicate it.
  const dummyPrev = makeSpan([surrounding[0] || "leftmost"], [], options);
  const dummyNext = makeSpan([surrounding[1] || "rightmost"], [], options);

  // TODO: These code assumes that a node's math class is the first element
  // of its `classes` array. A later cleanup should ensure this, for
  // instance by changing the signature of `makeSpan`.

  // Before determining what spaces to insert, perform bin cancellation.
  // Binary operators change to ordinary symbols in some contexts.
  const isRoot = isRealGroup === "root";
  traverseNonSpaceNodes(groups, (node, prev) => {
    const prevType = prev.classes[0];
    const type = node.classes[0];
    if (prevType === "mbin" && binRightCanceller.has(type)) {
      prev.classes[0] = "mord";
    } else if (type === "mbin" && binLeftCanceller.has(prevType)) {
      node.classes[0] = "mord";
    }
  }, {
    node: dummyPrev
  }, dummyNext, isRoot);
  traverseNonSpaceNodes(groups, (node, prev) => {
    var _tightSpacings$prevTy, _spacings$prevType;
    const prevType = getTypeOfDomTree(prev);
    const type = getTypeOfDomTree(node);

    // 'mtight' indicates that the node is script or scriptscript style.
    const space = prevType && type ? node.hasClass("mtight") ? (_tightSpacings$prevTy = tightSpacings[prevType]) == null ? void 0 : _tightSpacings$prevTy[type] : (_spacings$prevType = spacings[prevType]) == null ? void 0 : _spacings$prevType[type] : null;
    if (space) {
      // Insert glue (spacing) after the `prev`.
      return makeGlue(space, glueOptions);
    }
  }, {
    node: dummyPrev
  }, dummyNext, isRoot);
  return groups;
};

// Depth-first traverse non-space `nodes`, calling `callback` with the current and
// previous node as arguments, optionally returning a node to insert after the
// previous node. `prev` is an object with the previous node and `insertAfter`
// function to insert after it. `next` is a node that will be added to the right.
// Used for bin cancellation and inserting spacings.
const traverseNonSpaceNodes = function (nodes, callback, prev, next, isRoot) {
  if (next) {
    // temporarily append the right node, if exists
    nodes.push(next);
  }
  let i = 0;
  for (; i < nodes.length; i++) {
    const node = nodes[i];
    const partialGroup = checkPartialGroup(node);
    if (partialGroup) {
      // Recursive DFS
      // TODO(ts): make nodes a $ReadOnlyArray by returning a new array
      traverseNonSpaceNodes(partialGroup.children, callback, prev, null, isRoot);
      continue;
    }

    // Ignore explicit spaces (e.g., \;, \,) when determining what implicit
    // spacing should go between atoms of different classes
    const nonspace = !node.hasClass("mspace");
    if (nonspace) {
      const result = callback(node, prev.node);
      if (result) {
        if (prev.insertAfter) {
          prev.insertAfter(result);
        } else {
          // insert at front
          nodes.unshift(result);
          i++;
        }
      }
    }
    if (nonspace) {
      prev.node = node;
    } else if (isRoot && node.hasClass("newline")) {
      prev.node = makeSpan(["leftmost"]); // treat like beginning of line
    }
    prev.insertAfter = (index => n => {
      nodes.splice(index + 1, 0, n);
      i++;
    })(i);
  }
  if (next) {
    nodes.pop();
  }
};

// Check if given node is a partial group, i.e., does not affect spacing around.
const checkPartialGroup = function (node) {
  if (node instanceof DocumentFragment || node instanceof Anchor || node instanceof Span && node.hasClass("enclosing")) {
    return node;
  }
  return null;
};

// Return the outermost node of a domTree.
const getOutermostNode = function (node, side) {
  const partialGroup = checkPartialGroup(node);
  if (partialGroup) {
    const children = partialGroup.children;
    if (children.length) {
      if (side === "right") {
        return getOutermostNode(children[children.length - 1], "right");
      } else if (side === "left") {
        return getOutermostNode(children[0], "left");
      }
    }
  }
  return node;
};

// Return math atom class (mclass) of a domTree.
// If `side` is given, it will get the type of the outermost node at given side.
const getTypeOfDomTree = function (node, side) {
  if (!node) {
    return null;
  }
  if (side) {
    node = getOutermostNode(node, side);
  }
  // This makes a lot of assumptions as to where the type of atom
  // appears.  We should do a better job of enforcing this.
  const className = node.classes[0];
  return DomEnum[className] || null;
};
const makeNullDelimiter = function (options, classes) {
  const moreClasses = ["nulldelimiter"].concat(options.baseSizingClasses());
  return makeSpan(classes.concat(moreClasses));
};

/**
 * buildGroup is the function that takes a group and calls the correct groupType
 * function for it. It also handles the interaction of size and style changes
 * between parents and children.
 */
const buildGroup = function (group, options, baseOptions) {
  if (!group) {
    return makeSpan();
  }
  if (_htmlGroupBuilders[group.type]) {
    // Call the groupBuilders function
    // TODO(ts)
    let groupNode = _htmlGroupBuilders[group.type](group, options);

    // If the size changed between the parent and the current group, account
    // for that size difference.
    if (baseOptions && options.size !== baseOptions.size) {
      groupNode = makeSpan(options.sizingClasses(baseOptions), [groupNode], options);
      const multiplier = options.sizeMultiplier / baseOptions.sizeMultiplier;
      groupNode.height *= multiplier;
      groupNode.depth *= multiplier;
    }
    return groupNode;
  } else {
    throw new src_ParseError("Got group of unknown type: '" + group.type + "'");
  }
};

/**
 * Combine an array of HTML DOM nodes (e.g., the output of `buildExpression`)
 * into an unbreakable HTML node of class .base, with proper struts to
 * guarantee correct vertical extent.  `buildHTML` calls this repeatedly to
 * make up the entire expression as a sequence of unbreakable units.
 */
function buildHTMLUnbreakable(children, options) {
  // Compute height and depth of this chunk.
  const body = makeSpan(["base"], children, options);

  // Add strut, which ensures that the top of the HTML element falls at
  // the height of the expression, and the bottom of the HTML element
  // falls at the depth of the expression.
  const strut = makeSpan(["strut"]);
  strut.style.height = makeEm(body.height + body.depth);
  if (body.depth) {
    strut.style.verticalAlign = makeEm(-body.depth);
  }
  body.children.unshift(strut);
  return body;
}

/**
 * Take an entire parse tree, and build it into an appropriate set of HTML
 * nodes.
 */
function buildHTML(tree, options) {
  // Strip off outer tag wrapper for processing below.
  let tag = null;
  if (tree.length === 1 && tree[0].type === "tag") {
    tag = tree[0].tag;
    tree = tree[0].body;
  }

  // Build the expression contained in the tree
  const expression = buildExpression(tree, options, "root");
  let eqnNum;
  if (expression.length === 2 && expression[1].hasClass("tag")) {
    // An environment with automatic equation numbers, e.g. {gather}.
    eqnNum = expression.pop();
  }
  const children = [];

  // Create one base node for each chunk between potential line breaks.
  // The TeXBook [p.173] says "A formula will be broken only after a
  // relation symbol like $=$ or $<$ or $\rightarrow$, or after a binary
  // operation symbol like $+$ or $-$ or $\times$, where the relation or
  // binary operation is on the ``outer level'' of the formula (i.e., not
  // enclosed in {...} and not part of an \over construction)."

  let parts = [];
  for (let i = 0; i < expression.length; i++) {
    parts.push(expression[i]);
    if (expression[i].hasClass("mbin") || expression[i].hasClass("mrel") || expression[i].hasClass("allowbreak")) {
      // Put any post-operator glue on same line as operator.
      // Watch for \nobreak along the way, and stop at \newline.
      let nobreak = false;
      while (i < expression.length - 1 && expression[i + 1].hasClass("mspace") && !expression[i + 1].hasClass("newline")) {
        i++;
        parts.push(expression[i]);
        if (expression[i].hasClass("nobreak")) {
          nobreak = true;
        }
      }
      // Don't allow break if \nobreak among the post-operator glue.
      if (!nobreak) {
        children.push(buildHTMLUnbreakable(parts, options));
        parts = [];
      }
    } else if (expression[i].hasClass("newline")) {
      // Write the line except the newline
      parts.pop();
      if (parts.length > 0) {
        children.push(buildHTMLUnbreakable(parts, options));
        parts = [];
      }
      // Put the newline at the top level
      children.push(expression[i]);
    }
  }
  if (parts.length > 0) {
    children.push(buildHTMLUnbreakable(parts, options));
  }

  // Now, if there was a tag, build it too and append it as a final child.
  let tagChild;
  if (tag) {
    tagChild = buildHTMLUnbreakable(buildExpression(tag, options, true), options);
    tagChild.classes = ["tag"];
    children.push(tagChild);
  } else if (eqnNum) {
    children.push(eqnNum);
  }
  const htmlNode = makeSpan(["katex-html"], children);
  htmlNode.setAttribute("aria-hidden", "true");

  // Adjust the strut of the tag to be the maximum height of all children
  // (the height of the enclosing htmlNode) for proper vertical alignment.
  if (tagChild) {
    const strut = tagChild.children[0];
    strut.style.height = makeEm(htmlNode.height + htmlNode.depth);
    if (htmlNode.depth) {
      strut.style.verticalAlign = makeEm(-htmlNode.depth);
    }
  }
  return htmlNode;
}
;// ./src/mathMLTree.ts
/**
 * These objects store data about MathML nodes. This is the MathML equivalent
 * of the types in domTree.js. Since MathML handles its own rendering, and
 * since we're mainly using MathML to improve accessibility, we don't manage
 * any of the styling state that the plain DOM nodes do.
 *
 * The `toNode` and `toMarkup` functions work similarly to how they do in
 * domTree.js, creating namespaced DOM nodes and HTML text markup respectively.
 */






/**
 * MathML node types used in KaTeX. For a complete list of MathML nodes, see
 * https://developer.mozilla.org/en-US/docs/Web/MathML/Element.
 */

function newDocumentFragment(children) {
  return new DocumentFragment(children);
}

/**
 * This node represents a general purpose MathML node of any type. The
 * constructor requires the type of node to create (for example, `"mo"` or
 * `"mspace"`, corresponding to `<mo>` and `<mspace>` tags).
 */
class MathNode {
  constructor(type, children, classes) {
    this.type = type;
    this.attributes = {};
    this.children = children || [];
    this.classes = classes || [];
  }

  /**
   * Sets an attribute on a MathML node. MathML depends on attributes to convey a
   * semantic content, so this is used heavily.
   */
  setAttribute(name, value) {
    this.attributes[name] = value;
  }

  /**
   * Gets an attribute on a MathML node.
   */
  getAttribute(name) {
    return this.attributes[name];
  }

  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    const node = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
    for (const attr in this.attributes) {
      if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
        node.setAttribute(attr, this.attributes[attr]);
      }
    }
    if (this.classes.length > 0) {
      node.className = createClass(this.classes);
    }
    for (let i = 0; i < this.children.length; i++) {
      // Combine multiple TextNodes into one TextNode, to prevent
      // screen readers from reading each as a separate word [#3995]
      if (this.children[i] instanceof TextNode && this.children[i + 1] instanceof TextNode) {
        let text = this.children[i].toText() + this.children[++i].toText();
        while (this.children[i + 1] instanceof TextNode) {
          text += this.children[++i].toText();
        }
        node.appendChild(new TextNode(text).toNode());
      } else {
        node.appendChild(this.children[i].toNode());
      }
    }
    return node;
  }

  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    let markup = "<" + this.type;

    // Add the attributes
    for (const attr in this.attributes) {
      if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
        markup += " " + attr + "=\"";
        markup += utils_escape(this.attributes[attr]);
        markup += "\"";
      }
    }
    if (this.classes.length > 0) {
      markup += " class =\"" + utils_escape(createClass(this.classes)) + "\"";
    }
    markup += ">";
    for (let i = 0; i < this.children.length; i++) {
      markup += this.children[i].toMarkup();
    }
    markup += "</" + this.type + ">";
    return markup;
  }

  /**
   * Converts the math node into a string, similar to innerText, but escaped.
   */
  toText() {
    return this.children.map(child => child.toText()).join("");
  }
}

/**
 * This node represents a piece of text.
 */
class TextNode {
  constructor(text) {
    this.text = text;
  }

  /**
   * Converts the text node into a DOM text node.
   */
  toNode() {
    return document.createTextNode(this.text);
  }

  /**
   * Converts the text node into escaped HTML markup
   * (representing the text itself).
   */
  toMarkup() {
    return utils_escape(this.toText());
  }

  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}

/**
 * This node represents a space, but may render as <mspace.../> or as text,
 * depending on the width.
 */
class SpaceNode {
  /**
   * Create a Space node with width given in CSS ems.
   */
  constructor(width) {
    this.width = width;
    // See https://www.w3.org/TR/2000/WD-MathML2-20000328/chapter6.html
    // for a table of space-like characters.  We use Unicode
    // representations instead of &LongNames; as it's not clear how to
    // make the latter via document.createTextNode.
    if (width >= 0.05555 && width <= 0.05556) {
      this.character = "\u200a"; // &VeryThinSpace;
    } else if (width >= 0.1666 && width <= 0.1667) {
      this.character = "\u2009"; // &ThinSpace;
    } else if (width >= 0.2222 && width <= 0.2223) {
      this.character = "\u2005"; // &MediumSpace;
    } else if (width >= 0.2777 && width <= 0.2778) {
      this.character = "\u2005\u200a"; // &ThickSpace;
    } else if (width >= -0.05556 && width <= -0.05555) {
      this.character = "\u200a\u2063"; // &NegativeVeryThinSpace;
    } else if (width >= -0.1667 && width <= -0.1666) {
      this.character = "\u2009\u2063"; // &NegativeThinSpace;
    } else if (width >= -0.2223 && width <= -0.2222) {
      this.character = "\u205f\u2063"; // &NegativeMediumSpace;
    } else if (width >= -0.2778 && width <= -0.2777) {
      this.character = "\u2005\u2063"; // &NegativeThickSpace;
    } else {
      this.character = null;
    }
  }

  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    if (this.character) {
      return document.createTextNode(this.character);
    } else {
      const node = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
      node.setAttribute("width", makeEm(this.width));
      return node;
    }
  }

  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    if (this.character) {
      return "<mtext>" + this.character + "</mtext>";
    } else {
      return "<mspace width=\"" + makeEm(this.width) + "\"/>";
    }
  }

  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    if (this.character) {
      return this.character;
    } else {
      return " ";
    }
  }
}
;// ./src/buildMathML.ts
/**
 * This file converts a parse tree into a corresponding MathML tree. The main
 * entry point is the `buildMathML` function, which takes a parse tree from the
 * parser.
 */







const noVariantSymbols = new Set(["\\imath", "\\jmath"]);
const rowLikeTypes = new Set(["mrow", "mtable"]);

/**
 * Takes a symbol and converts it into a MathML text node after performing
 * optional replacement from symbols.js.
 */
const makeText = function (text, mode, options) {
  if (src_symbols[mode][text] && src_symbols[mode][text].replace && text.charCodeAt(0) !== 0xD835 && !(ligatures.hasOwnProperty(text) && options && (options.fontFamily && options.fontFamily.slice(4, 6) === "tt" || options.font && options.font.slice(4, 6) === "tt"))) {
    text = src_symbols[mode][text].replace;
  }
  return new TextNode(text);
};

/**
 * Wrap the given array of nodes in an <mrow> node if needed, i.e.,
 * unless the array has length 1.  Always returns a single node.
 */
const makeRow = function (body) {
  if (body.length === 1) {
    return body[0];
  } else {
    return new MathNode("mrow", body);
  }
};

/**
 * Returns the math variant as a string or null if none is required.
 */
const getVariant = function (group, options) {
  // Handle \text... font specifiers as best we can.
  // MathML has a limited list of allowable mathvariant specifiers; see
  // https://www.w3.org/TR/MathML3/chapter3.html#presm.commatt
  if (options.fontFamily === "texttt") {
    return "monospace";
  } else if (options.fontFamily === "textsf") {
    if (options.fontShape === "textit" && options.fontWeight === "textbf") {
      return "sans-serif-bold-italic";
    } else if (options.fontShape === "textit") {
      return "sans-serif-italic";
    } else if (options.fontWeight === "textbf") {
      return "bold-sans-serif";
    } else {
      return "sans-serif";
    }
  } else if (options.fontShape === "textit" && options.fontWeight === "textbf") {
    return "bold-italic";
  } else if (options.fontShape === "textit") {
    return "italic";
  } else if (options.fontWeight === "textbf") {
    return "bold";
  }
  const font = options.font;
  if (!font || font === "mathnormal") {
    return null;
  }
  const mode = group.mode;
  if (font === "mathit") {
    return "italic";
  } else if (font === "boldsymbol") {
    return group.type === "textord" ? "bold" : "bold-italic";
  } else if (font === "mathbf") {
    return "bold";
  } else if (font === "mathbb") {
    return "double-struck";
  } else if (font === "mathsfit") {
    return "sans-serif-italic";
  } else if (font === "mathfrak") {
    return "fraktur";
  } else if (font === "mathscr" || font === "mathcal") {
    // MathML makes no distinction between script and calligraphic
    return "script";
  } else if (font === "mathsf") {
    return "sans-serif";
  } else if (font === "mathtt") {
    return "monospace";
  }
  let text = group.text;
  if (noVariantSymbols.has(text)) {
    return null;
  }
  if (src_symbols[mode][text]) {
    const replacement = src_symbols[mode][text].replace;
    if (replacement) {
      text = replacement;
    }
  }
  const fontName = fontMap[font].fontName;
  if (getCharacterMetrics(text, fontName, mode)) {
    return fontMap[font].variant;
  }
  return null;
};

/**
 * Check for <mi>.</mi> which is how a dot renders in MathML,
 * or <mo separator="true" lspace="0em" rspace="0em">,</mo>
 * which is how a braced comma {,} renders in MathML
 */
function isNumberPunctuation(group) {
  if (!group) {
    return false;
  }
  if (group.type === 'mi' && group.children.length === 1) {
    const child = group.children[0];
    return child instanceof TextNode && child.text === '.';
  } else if (group.type === 'mo' && group.children.length === 1 && group.getAttribute('separator') === 'true' && group.getAttribute('lspace') === '0em' && group.getAttribute('rspace') === '0em') {
    const child = group.children[0];
    return child instanceof TextNode && child.text === ',';
  } else {
    return false;
  }
}

/**
 * Takes a list of nodes, builds them, and returns a list of the generated
 * MathML nodes.  Also combine consecutive <mtext> outputs into a single
 * <mtext> tag.
 */
const buildMathML_buildExpression = function (expression, options, isOrdgroup) {
  if (expression.length === 1) {
    const group = buildMathML_buildGroup(expression[0], options);
    if (isOrdgroup && group instanceof MathNode && group.type === "mo") {
      // When TeX writers want to suppress spacing on an operator,
      // they often put the operator by itself inside braces.
      group.setAttribute("lspace", "0em");
      group.setAttribute("rspace", "0em");
    }
    return [group];
  }
  const groups = [];
  let lastGroup;
  for (let i = 0; i < expression.length; i++) {
    const group = buildMathML_buildGroup(expression[i], options);
    if (group instanceof MathNode && lastGroup instanceof MathNode) {
      // Concatenate adjacent <mtext>s
      if (group.type === 'mtext' && lastGroup.type === 'mtext' && group.getAttribute('mathvariant') === lastGroup.getAttribute('mathvariant')) {
        lastGroup.children.push(...group.children);
        continue;
        // Concatenate adjacent <mn>s
      } else if (group.type === 'mn' && lastGroup.type === 'mn') {
        lastGroup.children.push(...group.children);
        continue;
        // Concatenate <mn>...</mn> followed by <mi>.</mi>
      } else if (isNumberPunctuation(group) && lastGroup.type === 'mn') {
        lastGroup.children.push(...group.children);
        continue;
        // Concatenate <mi>.</mi> followed by <mn>...</mn>
      } else if (group.type === 'mn' && isNumberPunctuation(lastGroup)) {
        group.children = [...lastGroup.children, ...group.children];
        groups.pop();
        // Put preceding <mn>...</mn> or <mi>.</mi> inside base of
        // <msup><mn>...base...</mn>...exponent...</msup> (or <msub>)
      } else if ((group.type === 'msup' || group.type === 'msub') && group.children.length >= 1 && (lastGroup.type === 'mn' || isNumberPunctuation(lastGroup))) {
        const base = group.children[0];
        if (base instanceof MathNode && base.type === 'mn') {
          base.children = [...lastGroup.children, ...base.children];
          groups.pop();
        }
        // \not
      } else if (lastGroup.type === 'mi' && lastGroup.children.length === 1) {
        const lastChild = lastGroup.children[0];
        if (lastChild instanceof TextNode && lastChild.text === '\u0338' && (group.type === 'mo' || group.type === 'mi' || group.type === 'mn')) {
          const child = group.children[0];
          if (child instanceof TextNode && child.text.length > 0) {
            // Overlay with combining character long solidus
            child.text = child.text.slice(0, 1) + "\u0338" + child.text.slice(1);
            groups.pop();
          }
        }
      }
    }
    groups.push(group);
    lastGroup = group;
  }
  return groups;
};

/**
 * Equivalent to buildExpression, but wraps the elements in an <mrow>
 * if there's more than one.  Returns a single node instead of an array.
 */
const buildExpressionRow = function (expression, options, isOrdgroup) {
  return makeRow(buildMathML_buildExpression(expression, options, isOrdgroup));
};

/**
 * Takes a group from the parser and calls the appropriate groupBuilders function
 * on it to produce a MathML node.
 */
const buildMathML_buildGroup = function (group, options) {
  if (!group) {
    return new MathNode("mrow");
  }
  if (_mathmlGroupBuilders[group.type]) {
    // Call the groupBuilders function
    // TODO(ts)
    const result = _mathmlGroupBuilders[group.type](group, options);
    // TODO(ts)
    return result;
  } else {
    throw new src_ParseError("Got group of unknown type: '" + group.type + "'");
  }
};

/**
 * Takes a full parse tree and settings and builds a MathML representation of
 * it. In particular, we put the elements from building the parse tree into a
 * <semantics> tag so we can also include that TeX source as an annotation.
 *
 * Note that we actually return a domTree element with a `<math>` inside it so
 * we can do appropriate styling.
 */
function buildMathML(tree, texExpression, options, isDisplayMode, forMathmlOnly) {
  const expression = buildMathML_buildExpression(tree, options);

  // TODO: Make a pass thru the MathML similar to buildHTML.traverseNonSpaceNodes
  // and add spacing nodes. This is necessary only adjacent to math operators
  // like \sin or \lim or to subsup elements that contain math operators.
  // MathML takes care of the other spacing issues.

  // Wrap up the expression in an mrow so it is presented in the semantics
  // tag correctly, unless it's a single <mrow> or <mtable>.
  let wrapper;
  if (expression.length === 1 && expression[0] instanceof MathNode && rowLikeTypes.has(expression[0].type)) {
    wrapper = expression[0];
  } else {
    wrapper = new MathNode("mrow", expression);
  }

  // Build a TeX annotation of the source
  const annotation = new MathNode("annotation", [new TextNode(texExpression)]);
  annotation.setAttribute("encoding", "application/x-tex");
  const semantics = new MathNode("semantics", [wrapper, annotation]);
  const math = new MathNode("math", [semantics]);
  math.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML");
  if (isDisplayMode) {
    math.setAttribute("display", "block");
  }

  // You can't style <math> nodes, so we wrap the node in a span.
  // NOTE: The span class is not typed to have <math> nodes as children, and
  // we don't want to make the children type more generic since the children
  // of span are expected to have more fields in `buildHtml` contexts.
  const wrapperClass = forMathmlOnly ? "katex" : "katex-mathml";
  // TODO(ts)
  return makeSpan([wrapperClass], [math]);
}
;// ./src/Options.ts
/**
 * This file contains information about the options that the Parser carries
 * around with it while parsing. Data is held in an `Options` object, and when
 * recursing, a new `Options` object can be created with the `.with*` and
 * `.reset` functions.
 */


const sizeStyleMap = [
// Each element contains [textsize, scriptsize, scriptscriptsize].
// The size mappings are taken from TeX with \normalsize=10pt.
[1, 1, 1],
// size1: [5, 5, 5]              \tiny
[2, 1, 1],
// size2: [6, 5, 5]
[3, 1, 1],
// size3: [7, 5, 5]              \scriptsize
[4, 2, 1],
// size4: [8, 6, 5]              \footnotesize
[5, 2, 1],
// size5: [9, 6, 5]              \small
[6, 3, 1],
// size6: [10, 7, 5]             \normalsize
[7, 4, 2],
// size7: [12, 8, 6]             \large
[8, 6, 3],
// size8: [14.4, 10, 7]          \Large
[9, 7, 6],
// size9: [17.28, 12, 10]        \LARGE
[10, 8, 7],
// size10: [20.74, 14.4, 12]     \huge
[11, 10, 9] // size11: [24.88, 20.74, 17.28] \HUGE
];
const sizeMultipliers = [
// fontMetrics.js:getGlobalMetrics also uses size indexes, so if
// you change size indexes, change that function.
0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.2, 1.44, 1.728, 2.074, 2.488];
const sizeAtStyle = function (size, style) {
  return style.size < 2 ? size : sizeStyleMap[size - 1][style.size - 1];
};

// In these types, "" (empty string) means "no change".

/**
 * This is the main options class. It contains the current style, size, color,
 * and font.
 *
 * Options objects should not be modified. To create a new Options with
 * different properties, call a `.having*` method.
 */
class Options {
  constructor(data) {
    this.style = data.style;
    this.color = data.color;
    this.size = data.size || Options.BASESIZE;
    this.textSize = data.textSize || this.size;
    this.phantom = !!data.phantom;
    this.font = data.font || "";
    this.fontFamily = data.fontFamily || "";
    this.fontWeight = data.fontWeight || '';
    this.fontShape = data.fontShape || '';
    this.sizeMultiplier = sizeMultipliers[this.size - 1];
    this.maxSize = data.maxSize;
    this.minRuleThickness = data.minRuleThickness;
    this._fontMetrics = undefined;
  }

  /**
   * Returns a new options object with the same properties as "this".  Properties
   * from "extension" will be copied to the new options object.
   */
  extend(extension) {
    const data = {
      style: this.style,
      size: this.size,
      textSize: this.textSize,
      color: this.color,
      phantom: this.phantom,
      font: this.font,
      fontFamily: this.fontFamily,
      fontWeight: this.fontWeight,
      fontShape: this.fontShape,
      maxSize: this.maxSize,
      minRuleThickness: this.minRuleThickness
    };
    Object.assign(data, extension);
    return new Options(data);
  }

  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(style) {
    if (this.style === style) {
      return this;
    } else {
      return this.extend({
        style: style,
        size: sizeAtStyle(this.textSize, style)
      });
    }
  }

  /**
   * Return an options object with a cramped version of the current style. If
   * the current style is cramped, returns `this`.
   */
  havingCrampedStyle() {
    return this.havingStyle(this.style.cramp());
  }

  /**
   * Return an options object with the given size and in at least `\textstyle`.
   * Returns `this` if appropriate.
   */
  havingSize(size) {
    if (this.size === size && this.textSize === size) {
      return this;
    } else {
      return this.extend({
        style: this.style.text(),
        size: size,
        textSize: size,
        sizeMultiplier: sizeMultipliers[size - 1]
      });
    }
  }

  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(style) {
    style = style || this.style.text();
    const wantSize = sizeAtStyle(Options.BASESIZE, style);
    if (this.size === wantSize && this.textSize === Options.BASESIZE && this.style === style) {
      return this;
    } else {
      return this.extend({
        style: style,
        size: wantSize
      });
    }
  }

  /**
   * Remove the effect of sizing changes such as \Huge.
   * Keep the effect of the current style, such as \scriptstyle.
   */
  havingBaseSizing() {
    let size;
    switch (this.style.id) {
      case 4:
      case 5:
        size = 3; // normalsize in scriptstyle
        break;
      case 6:
      case 7:
        size = 1; // normalsize in scriptscriptstyle
        break;
      default:
        size = 6;
      // normalsize in textstyle or displaystyle
    }
    return this.extend({
      style: this.style.text(),
      size: size
    });
  }

  /**
   * Create a new options object with the given color.
   */
  withColor(color) {
    return this.extend({
      color: color
    });
  }

  /**
   * Create a new options object with "phantom" set to true.
   */
  withPhantom() {
    return this.extend({
      phantom: true
    });
  }

  /**
   * Creates a new options object with the given math font or old text font.
   * @type {[type]}
   */
  withFont(font) {
    return this.extend({
      font
    });
  }

  /**
   * Create a new options objects with the given fontFamily.
   */
  withTextFontFamily(fontFamily) {
    return this.extend({
      fontFamily,
      font: ""
    });
  }

  /**
   * Creates a new options object with the given font weight
   */
  withTextFontWeight(fontWeight) {
    return this.extend({
      fontWeight,
      font: ""
    });
  }

  /**
   * Creates a new options object with the given font weight
   */
  withTextFontShape(fontShape) {
    return this.extend({
      fontShape,
      font: ""
    });
  }

  /**
   * Return the CSS sizing classes required to switch from enclosing options
   * `oldOptions` to `this`. Returns an array of classes.
   */
  sizingClasses(oldOptions) {
    if (oldOptions.size !== this.size) {
      return ["sizing", "reset-size" + oldOptions.size, "size" + this.size];
    } else {
      return [];
    }
  }

  /**
   * Return the CSS sizing classes required to switch to the base size. Like
   * `this.havingSize(BASESIZE).sizingClasses(this)`.
   */
  baseSizingClasses() {
    if (this.size !== Options.BASESIZE) {
      return ["sizing", "reset-size" + this.size, "size" + Options.BASESIZE];
    } else {
      return [];
    }
  }

  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    if (!this._fontMetrics) {
      this._fontMetrics = getGlobalMetrics(this.size);
    }
    return this._fontMetrics;
  }

  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    if (this.phantom) {
      return "transparent";
    } else {
      return this.color;
    }
  }
}
// A font family applies to a group of fonts (i.e. SansSerif), while a font
// represents a specific font (i.e. SansSerif Bold).
// See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
/**
 * The base size index.
 */
Options.BASESIZE = 6;
/* harmony default export */ var src_Options = (Options);
;// ./src/buildTree.ts





const optionsFromSettings = function (settings) {
  return new src_Options({
    style: settings.displayMode ? src_Style.DISPLAY : src_Style.TEXT,
    maxSize: settings.maxSize,
    minRuleThickness: settings.minRuleThickness
  });
};
const displayWrap = function (node, settings) {
  if (settings.displayMode) {
    const classes = ["katex-display"];
    if (settings.leqno) {
      classes.push("leqno");
    }
    if (settings.fleqn) {
      classes.push("fleqn");
    }
    node = makeSpan(classes, [node]);
  }
  return node;
};
const buildTree = function (tree, expression, settings) {
  const options = optionsFromSettings(settings);
  let katexNode;
  if (settings.output === "mathml") {
    return buildMathML(tree, expression, options, settings.displayMode, true);
  } else if (settings.output === "html") {
    const htmlNode = buildHTML(tree, options);
    katexNode = makeSpan(["katex"], [htmlNode]);
  } else {
    const mathMLNode = buildMathML(tree, expression, options, settings.displayMode, false);
    const htmlNode = buildHTML(tree, options);
    katexNode = makeSpan(["katex"], [mathMLNode, htmlNode]);
  }
  return displayWrap(katexNode, settings);
};
const buildHTMLTree = function (tree, expression, settings) {
  const options = optionsFromSettings(settings);
  const htmlNode = buildHTML(tree, options);
  const katexNode = makeSpan(["katex"], [htmlNode]);
  return displayWrap(katexNode, settings);
};
/* harmony default export */ var src_buildTree = ((/* unused pure expression or super */ null && (buildTree)));
;// ./src/stretchy.ts
/**
 * This file provides support to buildMathML.js and buildHTML.js
 * for stretchy wide elements rendered from SVG files
 * and other CSS trickery.
 */





const stretchyCodePoint = {
  widehat: "^",
  widecheck: "ˇ",
  widetilde: "~",
  utilde: "~",
  overleftarrow: "\u2190",
  underleftarrow: "\u2190",
  xleftarrow: "\u2190",
  overrightarrow: "\u2192",
  underrightarrow: "\u2192",
  xrightarrow: "\u2192",
  underbrace: "\u23df",
  overbrace: "\u23de",
  underbracket: "\u23b5",
  overbracket: "\u23b4",
  overgroup: "\u23e0",
  undergroup: "\u23e1",
  overleftrightarrow: "\u2194",
  underleftrightarrow: "\u2194",
  xleftrightarrow: "\u2194",
  Overrightarrow: "\u21d2",
  xRightarrow: "\u21d2",
  overleftharpoon: "\u21bc",
  xleftharpoonup: "\u21bc",
  overrightharpoon: "\u21c0",
  xrightharpoonup: "\u21c0",
  xLeftarrow: "\u21d0",
  xLeftrightarrow: "\u21d4",
  xhookleftarrow: "\u21a9",
  xhookrightarrow: "\u21aa",
  xmapsto: "\u21a6",
  xrightharpoondown: "\u21c1",
  xleftharpoondown: "\u21bd",
  xrightleftharpoons: "\u21cc",
  xleftrightharpoons: "\u21cb",
  xtwoheadleftarrow: "\u219e",
  xtwoheadrightarrow: "\u21a0",
  xlongequal: "=",
  xtofrom: "\u21c4",
  xrightleftarrows: "\u21c4",
  xrightequilibrium: "\u21cc",
  // Not a perfect match.
  xleftequilibrium: "\u21cb",
  // None better available.
  "\\cdrightarrow": "\u2192",
  "\\cdleftarrow": "\u2190",
  "\\cdlongequal": "="
};
const stretchyMathML = function (label) {
  const node = new MathNode("mo", [new TextNode(stretchyCodePoint[label.replace(/^\\/, '')])]);
  node.setAttribute("stretchy", "true");
  return node;
};

// Many of the KaTeX SVG images have been adapted from glyphs in KaTeX fonts.
// Copyright (c) 2009-2010, Design Science, Inc. (<www.mathjax.org>)
// Copyright (c) 2014-2017 Khan Academy (<www.khanacademy.org>)
// Licensed under the SIL Open Font License, Version 1.1.
// See \nhttp://scripts.sil.org/OFL

// Very Long SVGs
//    Many of the KaTeX stretchy wide elements use a long SVG image and an
//    overflow: hidden tactic to achieve a stretchy image while avoiding
//    distortion of arrowheads or brace corners.

//    The SVG typically contains a very long (400 em) arrow.

//    The SVG is in a container span that has overflow: hidden, so the span
//    acts like a window that exposes only part of the  SVG.

//    The SVG always has a longer, thinner aspect ratio than the container span.
//    After the SVG fills 100% of the height of the container span,
//    there is a long arrow shaft left over. That left-over shaft is not shown.
//    Instead, it is sliced off because the span's CSS has overflow: hidden.

//    Thus, the reader sees an arrow that matches the subject matter width
//    without distortion.

//    Some functions, such as \cancel, need to vary their aspect ratio. These
//    functions do not get the overflow SVG treatment.

// In the katexImagesData object just below, the dimensions all
// correspond to path geometry inside the relevant SVG.
// For example, \overrightarrow uses the same arrowhead as glyph U+2192
// from the KaTeX Main font. The scaling factor is 1000.
// That is, inside the font, that arrowhead is 522 units tall, which
// corresponds to 0.522 em inside the document.

const katexImagesData = {
  //   path(s), minWidth, height, align
  overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
  "\\cdrightarrow": [["rightarrow"], 3.0, 522, "xMaxYMin"],
  // CD minwwidth2.5pc
  xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
  "\\cdleftarrow": [["leftarrow"], 3.0, 522, "xMinYMin"],
  Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
  xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
  xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
  overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
  overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
  xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
  "\\cdlongequal": [["longequal"], 3.0, 334, "xMinYMin"],
  xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
  xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
  overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
  underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
  underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
  xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
  xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
  xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
  xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
  xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
  overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  overbracket: [["leftbracketover", "rightbracketover"], 1.6, 440],
  underbracket: [["leftbracketunder", "rightbracketunder"], 1.6, 410],
  overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
  undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
  xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
  xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
  // The next three arrows are from the mhchem package.
  // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
  // document as \xrightarrow or \xrightleftharpoons. Those have
  // min-length = 1.75em, so we set min-length on these next three to match.
  xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
  xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
  xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
};
const wideAccentLabels = new Set(["widehat", "widecheck", "widetilde", "utilde"]);
const stretchySvg = function (group, options) {
  // Create a span with inline SVG for the element.
  function buildSvgSpan_() {
    let viewBoxWidth = 400000; // default
    const label = group.label.slice(1);
    if (wideAccentLabels.has(label)) {
      // Each type in the `if` statement corresponds to one of the ParseNode
      // types below. This narrowing is required to access `grp.base`.
      // TODO(ts)
      const grp = group;
      // There are four SVG images available for each function.
      // Choose a taller image when there are more characters.
      const numChars = grp.base.type === "ordgroup" ? grp.base.body.length : 1;
      let viewBoxHeight;
      let pathName;
      let height;
      if (numChars > 5) {
        if (label === "widehat" || label === "widecheck") {
          viewBoxHeight = 420;
          viewBoxWidth = 2364;
          height = 0.42;
          pathName = label + "4";
        } else {
          viewBoxHeight = 312;
          viewBoxWidth = 2340;
          height = 0.34;
          pathName = "tilde4";
        }
      } else {
        const imgIndex = [1, 1, 2, 2, 3, 3][numChars];
        if (label === "widehat" || label === "widecheck") {
          viewBoxWidth = [0, 1062, 2364, 2364, 2364][imgIndex];
          viewBoxHeight = [0, 239, 300, 360, 420][imgIndex];
          height = [0, 0.24, 0.3, 0.3, 0.36, 0.42][imgIndex];
          pathName = label + imgIndex;
        } else {
          viewBoxWidth = [0, 600, 1033, 2339, 2340][imgIndex];
          viewBoxHeight = [0, 260, 286, 306, 312][imgIndex];
          height = [0, 0.26, 0.286, 0.3, 0.306, 0.34][imgIndex];
          pathName = "tilde" + imgIndex;
        }
      }
      const path = new PathNode(pathName);
      const svgNode = new SvgNode([path], {
        "width": "100%",
        "height": makeEm(height),
        "viewBox": "0 0 " + viewBoxWidth + " " + viewBoxHeight,
        "preserveAspectRatio": "none"
      });
      return {
        span: makeSvgSpan([], [svgNode], options),
        minWidth: 0,
        height
      };
    } else {
      const spans = [];
      const data = katexImagesData[label];
      const [paths, minWidth, viewBoxHeight] = data;
      const height = viewBoxHeight / 1000;
      const numSvgChildren = paths.length;
      let widthClasses;
      let aligns;
      if (numSvgChildren === 1) {
        // TODO(ts): All these cases must be of the 4-tuple type.
        const align1 = data[3];
        widthClasses = ["hide-tail"];
        aligns = [align1];
      } else if (numSvgChildren === 2) {
        widthClasses = ["halfarrow-left", "halfarrow-right"];
        aligns = ["xMinYMin", "xMaxYMin"];
      } else if (numSvgChildren === 3) {
        widthClasses = ["brace-left", "brace-center", "brace-right"];
        aligns = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      } else {
        throw new Error("Correct katexImagesData or update code here to support\n                    " + numSvgChildren + " children.");
      }
      for (let i = 0; i < numSvgChildren; i++) {
        const path = new PathNode(paths[i]);
        const svgNode = new SvgNode([path], {
          "width": "400em",
          "height": makeEm(height),
          "viewBox": "0 0 " + viewBoxWidth + " " + viewBoxHeight,
          "preserveAspectRatio": aligns[i] + " slice"
        });
        const span = makeSvgSpan([widthClasses[i]], [svgNode], options);
        if (numSvgChildren === 1) {
          return {
            span,
            minWidth,
            height
          };
        } else {
          span.style.height = makeEm(height);
          spans.push(span);
        }
      }
      return {
        span: makeSpan(["stretchy"], spans, options),
        minWidth,
        height
      };
    }
  } // buildSvgSpan_()
  const {
    span,
    minWidth,
    height
  } = buildSvgSpan_();

  // Note that we are returning span.depth = 0.
  // Any adjustments relative to the baseline must be done in buildHTML.
  span.height = height;
  span.style.height = makeEm(height);
  if (minWidth > 0) {
    span.style.minWidth = makeEm(minWidth);
  }
  return span;
};
const stretchyEnclose = function (inner, label, topPad, bottomPad, options) {
  // Return an image span for \cancel, \bcancel, \xcancel, \fbox, or \angl
  let img;
  const totalHeight = inner.height + inner.depth + topPad + bottomPad;
  if (/fbox|color|angl/.test(label)) {
    img = makeSpan(["stretchy", label], [], options);
    if (label === "fbox") {
      const color = options.color && options.getColor();
      if (color) {
        img.style.borderColor = color;
      }
    }
  } else {
    // \cancel, \bcancel, or \xcancel
    // Since \cancel's SVG is inline and it omits the viewBox attribute,
    // its stroke-width will not vary with span area.

    const lines = [];
    if (/^[bx]cancel$/.test(label)) {
      lines.push(new LineNode({
        "x1": "0",
        "y1": "0",
        "x2": "100%",
        "y2": "100%",
        "stroke-width": "0.046em"
      }));
    }
    if (/^x?cancel$/.test(label)) {
      lines.push(new LineNode({
        "x1": "0",
        "y1": "100%",
        "x2": "100%",
        "y2": "0",
        "stroke-width": "0.046em"
      }));
    }
    const svgNode = new SvgNode(lines, {
      "width": "100%",
      "height": makeEm(totalHeight)
    });
    img = makeSvgSpan([], [svgNode], options);
  }
  img.height = totalHeight;
  img.style.height = makeEm(totalHeight);
  return img;
};
;// ./src/parseNode.ts


// ParseNode's corresponding to Symbol `Group`s in symbols.js.

// ParseNode from `Parser.formatUnsupportedCmd`

// Union of all possible `ParseNode<>` types.

// Map from `NodeType` to the corresponding `ParseNode`.

/**
 * Asserts that the node is of the given type and returns it with stricter
 * typing. Throws if the node's type does not match.
 */
function assertNodeType(node, type) {
  if (!node || node.type !== type) {
    throw new Error("Expected node of type " + type + ", but got " + (node ? "node of type " + node.type : String(node)));
  }
  return node;
}

/**
 * Returns the node more strictly typed iff it is of the given type. Otherwise,
 * returns null.
 */
function assertSymbolNodeType(node) {
  const typedNode = checkSymbolNodeType(node);
  if (!typedNode) {
    throw new Error("Expected node of symbol group type, but got " + (node ? "node of type " + node.type : String(node)));
  }
  return typedNode;
}

/**
 * Returns the node more strictly typed iff it is of the given type. Otherwise,
 * returns null.
 */
function checkSymbolNodeType(node) {
  if (node && (node.type === "atom" || NON_ATOMS.hasOwnProperty(node.type))) {
    return node;
  }
  return null;
}
;// ./src/functions/accent.ts










const getBaseSymbol = group => {
  if (group instanceof SymbolNode) {
    return group;
  }
  if (hasHtmlDomChildren(group) && group.children.length === 1) {
    return getBaseSymbol(group.children[0]);
  }
};

// NOTE: Unlike most `htmlBuilder`s, this one handles not only "accent", but
// also "supsub" since an accent can affect super/subscripting.
const htmlBuilder = (grp, options) => {
  // Accents are handled in the TeXbook pg. 443, rule 12.
  let base;
  let group;
  let supSubGroup;
  if (grp && grp.type === "supsub") {
    // If our base is a character box, and we have superscripts and
    // subscripts, the supsub will defer to us. In particular, we want
    // to attach the superscripts and subscripts to the inner body (so
    // that the position of the superscripts and subscripts won't be
    // affected by the height of the accent). We accomplish this by
    // sticking the base of the accent into the base of the supsub, and
    // rendering that, while keeping track of where the accent is.

    // The real accent group is the base of the supsub group
    group = assertNodeType(grp.base, "accent");
    // The character box is the base of the accent group
    base = group.base;
    // Stick the character box into the base of the supsub group
    grp.base = base;

    // Rerender the supsub group with its new base, and store that
    // result.
    supSubGroup = assertSpan(buildGroup(grp, options));

    // reset original base
    grp.base = group;
  } else {
    group = assertNodeType(grp, "accent");
    base = group.base;
  }

  // Build the base group
  const body = buildGroup(base, options.havingCrampedStyle());

  // Does the accent need to shift for the skew of a character?
  const mustShift = group.isShifty && isCharacterBox(base);

  // Calculate the skew of the accent. This is based on the line "If the
  // nucleus is not a single character, let s = 0; otherwise set s to the
  // kern amount for the nucleus followed by the \skewchar of its font."
  // Note that our skew metrics are just the kern between each character
  // and the skewchar.
  let skew = 0;
  if (mustShift) {
    var _getBaseSymbol$skew, _getBaseSymbol;
    // Read the skew from the rendered base symbol.
    // This preserves font metrics from font wrappers like \mathbb.
    skew = (_getBaseSymbol$skew = (_getBaseSymbol = getBaseSymbol(body)) == null ? void 0 : _getBaseSymbol.skew) != null ? _getBaseSymbol$skew : 0;
  }
  const accentBelow = group.label === "\\c";

  // calculate the amount of space between the body and the accent
  let clearance = accentBelow ? body.height + body.depth : Math.min(body.height, options.fontMetrics().xHeight);

  // Build the accent
  let accentBody;
  if (!group.isStretchy) {
    let accent;
    let width;
    if (group.label === "\\vec") {
      // Before version 0.9, \vec used the combining font glyph U+20D7.
      // But browsers, especially Safari, are not consistent in how they
      // render combining characters when not preceded by a character.
      // So now we use an SVG.
      // If Safari reforms, we should consider reverting to the glyph.
      accent = staticSvg("vec", options);
      width = svgData.vec[1];
    } else {
      accent = makeOrd({
        type: "textord",
        mode: group.mode,
        text: group.label
      }, options, "textord");
      accent = assertSymbolDomNode(accent);
      // Remove the italic correction of the accent, because it only serves to
      // shift the accent over to a place we don't want.
      accent.italic = 0;
      width = accent.width;
      if (accentBelow) {
        clearance += accent.depth;
      }
    }
    accentBody = makeSpan(["accent-body"], [accent]);

    // "Full" accents expand the width of the resulting symbol to be
    // at least the width of the accent, and overlap directly onto the
    // character without any vertical offset.
    const accentFull = group.label === "\\textcircled";
    if (accentFull) {
      accentBody.classes.push('accent-full');
      clearance = body.height;
    }

    // Shift the accent over by the skew.
    let left = skew;

    // CSS defines `.katex .accent .accent-body:not(.accent-full) { width: 0 }`
    // so that the accent doesn't contribute to the bounding box.
    // We need to shift the character by its width (effectively half
    // its width) to compensate.
    if (!accentFull) {
      left -= width / 2;
    }
    accentBody.style.left = makeEm(left);

    // \textcircled uses the \bigcirc glyph, so it needs some
    // vertical adjustment to match LaTeX.
    if (group.label === "\\textcircled") {
      accentBody.style.top = ".2em";
    }
    accentBody = makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: body
      }, {
        type: "kern",
        size: -clearance
      }, {
        type: "elem",
        elem: accentBody
      }]
    }, options);
  } else {
    accentBody = stretchySvg(group, options);
    accentBody = makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: body
      }, {
        type: "elem",
        elem: accentBody,
        wrapperClasses: ["svg-align"],
        wrapperStyle: skew > 0 ? {
          width: "calc(100% - " + makeEm(2 * skew) + ")",
          marginLeft: makeEm(2 * skew)
        } : undefined
      }]
    }, options);
  }
  const accentWrap = makeSpan(["mord", "accent"], [accentBody], options);
  if (supSubGroup) {
    // Here, we replace the "base" child of the supsub with our newly
    // generated accent.
    supSubGroup.children[0] = accentWrap;

    // Since we don't rerun the height calculation after replacing the
    // accent, we manually recalculate height.
    supSubGroup.height = Math.max(accentWrap.height, supSubGroup.height);

    // Accents should always be ords, even when their innards are not.
    supSubGroup.classes[0] = "mord";
    return supSubGroup;
  } else {
    return accentWrap;
  }
};
const mathmlBuilder = (group, options) => {
  const accentNode = group.isStretchy ? stretchyMathML(group.label) : new MathNode("mo", [makeText(group.label, group.mode)]);
  const node = new MathNode("mover", [buildMathML_buildGroup(group.base, options), accentNode]);
  node.setAttribute("accent", "true");
  return node;
};
const NON_STRETCHY_ACCENT_REGEX = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map(accent => "\\" + accent).join("|"));

// Accents
defineFunction({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (context, args) => {
    const base = normalizeArgument(args[0]);
    const isStretchy = !NON_STRETCHY_ACCENT_REGEX.test(context.funcName);
    const isShifty = !isStretchy || context.funcName === "\\widehat" || context.funcName === "\\widetilde" || context.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: context.parser.mode,
      label: context.funcName,
      isStretchy: isStretchy,
      isShifty: isShifty,
      base: base
    };
  },
  htmlBuilder,
  mathmlBuilder
});

// Text-mode accents
defineFunction({
  type: "accent",
  names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
  props: {
    numArgs: 1,
    allowedInText: true,
    allowedInMath: true,
    // unless in strict mode
    argTypes: ["primitive"]
  },
  handler: (context, args) => {
    const base = args[0];
    let mode = context.parser.mode;
    if (mode === "math") {
      context.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + context.funcName + " works only in text mode");
      mode = "text";
    }
    return {
      type: "accent",
      mode: mode,
      label: context.funcName,
      isStretchy: false,
      isShifty: true,
      base: base
    };
  },
  htmlBuilder,
  mathmlBuilder
});
;// ./src/functions/accentunder.ts
// Horizontal overlap functions






defineFunction({
  type: "accentUnder",
  names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
  props: {
    numArgs: 1
  },
  handler: (_ref, args) => {
    let {
      parser,
      funcName
    } = _ref;
    const base = args[0];
    return {
      type: "accentUnder",
      mode: parser.mode,
      label: funcName,
      base: base
    };
  },
  htmlBuilder: (group, options) => {
    // Treat under accents much like underlines.
    const innerGroup = buildGroup(group.base, options);
    const accentBody = stretchySvg(group, options);
    const kern = group.label === "\\utilde" ? 0.12 : 0;

    // Generate the vlist, with the appropriate kerns
    const vlist = makeVList({
      positionType: "top",
      positionData: innerGroup.height,
      children: [{
        type: "elem",
        elem: accentBody,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: kern
      }, {
        type: "elem",
        elem: innerGroup
      }]
    }, options);
    return makeSpan(["mord", "accentunder"], [vlist], options);
  },
  mathmlBuilder: (group, options) => {
    const accentNode = stretchyMathML(group.label);
    const node = new MathNode("munder", [buildMathML_buildGroup(group.base, options), accentNode]);
    node.setAttribute("accentunder", "true");
    return node;
  }
});
;// ./src/functions/arrow.ts






// Helper function
const paddedNode = group => {
  const node = new MathNode("mpadded", group ? [group] : []);
  node.setAttribute("width", "+0.6em");
  node.setAttribute("lspace", "0.3em");
  return node;
};

// Stretchy arrows with an optional argument
defineFunction({
  type: "xArrow",
  names: ["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xlongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xtofrom",
  // The next 3 functions are here to support the mhchem extension.
  // Direct use of these functions is discouraged and may break someday.
  "\\xrightleftarrows", "\\xrightequilibrium", "\\xleftequilibrium",
  // The next 3 functions are here only to support the {CD} environment.
  "\\\\cdrightarrow", "\\\\cdleftarrow", "\\\\cdlongequal"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(_ref, args, optArgs) {
    let {
      parser,
      funcName
    } = _ref;
    return {
      type: "xArrow",
      mode: parser.mode,
      label: funcName,
      body: args[0],
      below: optArgs[0]
    };
  },
  htmlBuilder(group, options) {
    const style = options.style;

    // Build the argument groups in the appropriate style.
    // Ref: amsmath.dtx:   \hbox{$\scriptstyle\mkern#3mu{#6}\mkern#4mu$}%

    // Some groups can return document fragments.  Handle those by wrapping
    // them in a span.
    let newOptions = options.havingStyle(style.sup());
    const upperGroup = wrapFragment(buildGroup(group.body, newOptions, options), options);
    const arrowPrefix = group.label.slice(0, 2) === "\\x" ? "x" : "cd";
    upperGroup.classes.push(arrowPrefix + "-arrow-pad");
    let lowerGroup;
    if (group.below) {
      // Build the lower group
      newOptions = options.havingStyle(style.sub());
      lowerGroup = wrapFragment(buildGroup(group.below, newOptions, options), options);
      lowerGroup.classes.push(arrowPrefix + "-arrow-pad");
    }
    const arrowBody = stretchySvg(group, options);

    // Re shift: Note that stretchySvg returned arrowBody.depth = 0.
    // The point we want on the math axis is at 0.5 * arrowBody.height.
    const arrowShift = -options.fontMetrics().axisHeight + 0.5 * arrowBody.height;
    // 2 mu kern. Ref: amsmath.dtx: #7\if0#2\else\mkern#2mu\fi
    let upperShift = -options.fontMetrics().axisHeight - 0.5 * arrowBody.height - 0.111; // 0.111 em = 2 mu
    if (upperGroup.depth > 0.25 || group.label === "\\xleftequilibrium") {
      upperShift -= upperGroup.depth; // shift up if depth encroaches
    }

    // Generate the vlist
    let vlist;
    if (lowerGroup) {
      const lowerShift = -options.fontMetrics().axisHeight + lowerGroup.height + 0.5 * arrowBody.height + 0.111;
      vlist = makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: upperGroup,
          shift: upperShift
        }, {
          type: "elem",
          elem: arrowBody,
          shift: arrowShift
        }, {
          type: "elem",
          elem: lowerGroup,
          shift: lowerShift
        }]
      }, options);
    } else {
      vlist = makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: upperGroup,
          shift: upperShift
        }, {
          type: "elem",
          elem: arrowBody,
          shift: arrowShift
        }]
      }, options);
    }

    // TODO(ts): Replace this with passing "svg-align" into makeVList.
    vlist.children[0].children[0].children[1].classes.push("svg-align");
    return makeSpan(["mrel", "x-arrow"], [vlist], options);
  },
  mathmlBuilder(group, options) {
    const arrowNode = stretchyMathML(group.label);
    arrowNode.setAttribute("minsize", group.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    let node;
    if (group.body) {
      const upperNode = paddedNode(buildMathML_buildGroup(group.body, options));
      if (group.below) {
        const lowerNode = paddedNode(buildMathML_buildGroup(group.below, options));
        node = new MathNode("munderover", [arrowNode, lowerNode, upperNode]);
      } else {
        node = new MathNode("mover", [arrowNode, upperNode]);
      }
    } else if (group.below) {
      const lowerNode = paddedNode(buildMathML_buildGroup(group.below, options));
      node = new MathNode("munder", [arrowNode, lowerNode]);
    } else {
      // This should never happen.
      // Parser.js throws an error if there is no argument.
      node = paddedNode();
      node = new MathNode("mover", [arrowNode, node]);
    }
    return node;
  }
});
;// ./src/functions/mclass.ts






function mclass_htmlBuilder(group, options) {
  const elements = buildExpression(group.body, options, true);
  return makeSpan([group.mclass], elements, options);
}
function mclass_mathmlBuilder(group, options) {
  let node;
  const inner = buildMathML_buildExpression(group.body, options);
  if (group.mclass === "minner") {
    node = new MathNode("mpadded", inner);
  } else if (group.mclass === "mord") {
    if (group.isCharacterBox) {
      node = inner[0];
      node.type = "mi";
    } else {
      node = new MathNode("mi", inner);
    }
  } else {
    if (group.isCharacterBox) {
      node = inner[0];
      node.type = "mo";
    } else {
      node = new MathNode("mo", inner);
    }

    // Set spacing based on what is the most likely adjacent atom type.
    // See TeXbook p170.
    if (group.mclass === "mbin") {
      node.attributes.lspace = "0.22em"; // medium space
      node.attributes.rspace = "0.22em";
    } else if (group.mclass === "mpunct") {
      node.attributes.lspace = "0em";
      node.attributes.rspace = "0.17em"; // thinspace
    } else if (group.mclass === "mopen" || group.mclass === "mclose") {
      node.attributes.lspace = "0em";
      node.attributes.rspace = "0em";
    } else if (group.mclass === "minner") {
      node.attributes.lspace = "0.0556em"; // 1 mu is the most likely option
      node.attributes.width = "+0.1111em";
    }
    // MathML <mo> default space is 5/18 em, so <mrel> needs no action.
    // Ref: https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mo
  }
  return node;
}

// Math class commands except \mathop
defineFunction({
  type: "mclass",
  names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
  props: {
    numArgs: 1,
    primitive: true
  },
  handler(_ref, args) {
    let {
      parser,
      funcName
    } = _ref;
    const body = args[0];
    return {
      type: "mclass",
      mode: parser.mode,
      mclass: "m" + funcName.slice(5),
      // TODO(kevinb): don't prefix with 'm'
      body: ordargument(body),
      isCharacterBox: isCharacterBox(body)
    };
  },
  htmlBuilder: mclass_htmlBuilder,
  mathmlBuilder: mclass_mathmlBuilder
});
const binrelClass = arg => {
  // \binrel@ spacing varies with (bin|rel|ord) of the atom in the argument.
  // (by rendering separately and with {}s before and after, and measuring
  // the change in spacing).  We'll do roughly the same by detecting the
  // atom type directly.
  const atom = arg.type === "ordgroup" && arg.body.length ? arg.body[0] : arg;
  if (atom.type === "atom" && (atom.family === "bin" || atom.family === "rel")) {
    return "m" + atom.family;
  } else {
    return "mord";
  }
};

// \@binrel{x}{y} renders like y but as mbin/mrel/mord if x is mbin/mrel/mord.
// This is equivalent to \binrel@{x}\binrel@@{y} in AMSTeX.
defineFunction({
  type: "mclass",
  names: ["\\@binrel"],
  props: {
    numArgs: 2
  },
  handler(_ref2, args) {
    let {
      parser
    } = _ref2;
    return {
      type: "mclass",
      mode: parser.mode,
      mclass: binrelClass(args[0]),
      body: ordargument(args[1]),
      isCharacterBox: isCharacterBox(args[1])
    };
  }
});

// Build a relation or stacked op by placing one symbol on top of another
defineFunction({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  props: {
    numArgs: 2
  },
  handler(_ref3, args) {
    let {
      parser,
      funcName
    } = _ref3;
    const baseArg = args[1];
    const shiftedArg = args[0];
    let mclass;
    if (funcName !== "\\stackrel") {
      // LaTeX applies \binrel spacing to \overset and \underset.
      mclass = binrelClass(baseArg);
    } else {
      mclass = "mrel"; // for \stackrel
    }
    const baseOp = {
      type: "op",
      mode: baseArg.mode,
      limits: true,
      alwaysHandleSupSub: true,
      parentIsSupSub: false,
      symbol: false,
      suppressBaseShift: funcName !== "\\stackrel",
      body: ordargument(baseArg)
    };
    const supsub = {
      type: "supsub",
      mode: shiftedArg.mode,
      base: baseOp,
      sup: funcName === "\\underset" ? null : shiftedArg,
      sub: funcName === "\\underset" ? shiftedArg : null
    };
    return {
      type: "mclass",
      mode: parser.mode,
      mclass,
      body: [supsub],
      isCharacterBox: isCharacterBox(supsub)
    };
  },
  htmlBuilder: mclass_htmlBuilder,
  mathmlBuilder: mclass_mathmlBuilder
});
;// ./src/functions/pmb.ts






// \pmb is a simulation of bold font.
// The version of \pmb in ambsy.sty works by typesetting three copies
// with small offsets. We use CSS text-shadow.
// It's a hack. Not as good as a real bold font. Better than nothing.

defineFunction({
  type: "pmb",
  names: ["\\pmb"],
  props: {
    numArgs: 1,
    allowedInText: true
  },
  handler(_ref, args) {
    let {
      parser
    } = _ref;
    return {
      type: "pmb",
      mode: parser.mode,
      mclass: binrelClass(args[0]),
      body: ordargument(args[0])
    };
  },
  htmlBuilder(group, options) {
    const elements = buildExpression(group.body, options, true);
    const node = makeSpan([group.mclass], elements, options);
    node.style.textShadow = "0.02em 0.01em 0.04px";
    return node;
  },
  mathmlBuilder(group, style) {
    const inner = buildMathML_buildExpression(group.body, style);
    // Wrap with an <mstyle> element.
    const node = new MathNode("mstyle", inner);
    node.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px");
    return node;
  }
});
;// ./src/environments/cd.ts








const cdArrowFunctionName = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  "A": "\\uparrow",
  "V": "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
};
const newCell = () => {
  // Create an empty cell, to be filled below with parse nodes.
  // The parseTree from this module must be constructed like the
  // one created by parseArray(), so an empty CD cell must
  // be a ParseNode<"styling">. And CD is always displaystyle.
  return {
    type: "styling",
    body: [],
    mode: "math",
    style: "display"
  };
};
const isStartOfArrow = node => {
  return node.type === "textord" && node.text === "@";
};
const isLabelEnd = (node, endChar) => {
  return (node.type === "mathord" || node.type === "atom") && node.text === endChar;
};
function cdArrow(arrowChar, labels, parser) {
  // Return a parse tree of an arrow and its labels.
  // This acts in a way similar to a macro expansion.
  const funcName = cdArrowFunctionName[arrowChar];
  switch (funcName) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return parser.callFunction(funcName, [labels[0]], [labels[1]]);
    case "\\uparrow":
    case "\\downarrow":
      {
        const leftLabel = parser.callFunction("\\\\cdleft", [labels[0]], []);
        const bareArrow = {
          type: "atom",
          text: funcName,
          mode: "math",
          family: "rel"
        };
        const sizedArrow = parser.callFunction("\\Big", [bareArrow], []);
        const rightLabel = parser.callFunction("\\\\cdright", [labels[1]], []);
        const arrowGroup = {
          type: "ordgroup",
          mode: "math",
          body: [leftLabel, sizedArrow, rightLabel]
        };
        return parser.callFunction("\\\\cdparent", [arrowGroup], []);
      }
    case "\\\\cdlongequal":
      return parser.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert":
      {
        const arrow = {
          type: "textord",
          text: "\\Vert",
          mode: "math"
        };
        return parser.callFunction("\\Big", [arrow], []);
      }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function parseCD(parser) {
  // Get the array's parse nodes with \\ temporarily mapped to \cr.
  const parsedRows = [];
  parser.gullet.beginGroup();
  parser.gullet.macros.set("\\cr", "\\\\\\relax");
  parser.gullet.beginGroup();
  while (true) {
    // eslint-disable-line no-constant-condition
    // Get the parse nodes for the next row.
    parsedRows.push(parser.parseExpression(false, "\\\\"));
    parser.gullet.endGroup();
    parser.gullet.beginGroup();
    const next = parser.fetch().text;
    if (next === "&" || next === "\\\\") {
      parser.consume();
    } else if (next === "\\end") {
      if (parsedRows[parsedRows.length - 1].length === 0) {
        parsedRows.pop(); // final row ended in \\
      }
      break;
    } else {
      throw new src_ParseError("Expected \\\\ or \\cr or \\end", parser.nextToken);
    }
  }
  let row = [];
  const body = [row];

  // Loop thru the parse nodes. Collect them into cells and arrows.
  for (let i = 0; i < parsedRows.length; i++) {
    // Start a new row.
    const rowNodes = parsedRows[i];
    // Create the first cell.
    let cell = newCell();
    for (let j = 0; j < rowNodes.length; j++) {
      if (!isStartOfArrow(rowNodes[j])) {
        // If a parseNode is not an arrow, it goes into a cell.
        cell.body.push(rowNodes[j]);
      } else {
        // Parse node j is an "@", the start of an arrow.
        // Before starting on the arrow, push the cell into `row`.
        row.push(cell);

        // Now collect parseNodes into an arrow.
        // The character after "@" defines the arrow type.
        j += 1;
        const arrowChar = assertSymbolNodeType(rowNodes[j]).text;

        // Create two empty label nodes. We may or may not use them.
        const labels = new Array(2);
        labels[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        };
        labels[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        };

        // Process the arrow.
        if ("=|.".includes(arrowChar)) {
          // Three "arrows", ``@=`, `@|`, and `@.`, do not take labels.
          // Do nothing here.
        } else if ("<>AV".includes(arrowChar)) {
          // Four arrows, `@>>>`, `@<<<`, `@AAA`, and `@VVV`, each take
          // two optional labels. E.g. the right-point arrow syntax is
          // really:  @>{optional label}>{optional label}>
          // Collect parseNodes into labels.
          for (let labelNum = 0; labelNum < 2; labelNum++) {
            let inLabel = true;
            for (let k = j + 1; k < rowNodes.length; k++) {
              if (isLabelEnd(rowNodes[k], arrowChar)) {
                inLabel = false;
                j = k;
                break;
              }
              if (isStartOfArrow(rowNodes[k])) {
                throw new src_ParseError("Missing a " + arrowChar + " character to complete a CD arrow.", rowNodes[k]);
              }
              labels[labelNum].body.push(rowNodes[k]);
            }
            if (inLabel) {
              // isLabelEnd never returned a true.
              throw new src_ParseError("Missing a " + arrowChar + " character to complete a CD arrow.", rowNodes[j]);
            }
          }
        } else {
          throw new src_ParseError("Expected one of \"<>AV=|.\" after @", rowNodes[j]);
        }

        // Now join the arrow to its labels.
        const arrow = cdArrow(arrowChar, labels, parser);

        // Wrap the arrow in  ParseNode<"styling">.
        // This is done to match parseArray() behavior.
        const wrappedArrow = {
          type: "styling",
          body: [arrow],
          mode: "math",
          style: "display" // CD is always displaystyle.
        };
        row.push(wrappedArrow);
        // In CD's syntax, cells are implicit. That is, everything that
        // is not an arrow gets collected into a cell. So create an empty
        // cell now. It will collect upcoming parseNodes.
        cell = newCell();
      }
    }
    if (i % 2 === 0) {
      // Even-numbered rows consist of: cell, arrow, cell, arrow, ... cell
      // The last cell is not yet pushed into `row`, so:
      row.push(cell);
    } else {
      // Odd-numbered rows consist of: vert arrow, empty cell, ... vert arrow
      // Remove the empty cell that was placed at the beginning of `row`.
      row.shift();
    }
    row = [];
    body.push(row);
  }

  // End row group
  parser.gullet.endGroup();
  // End array group defining \\
  parser.gullet.endGroup();

  // define column separation.
  const cols = new Array(body[0].length).fill({
    type: "align",
    align: "c",
    pregap: 0.25,
    // CD package sets \enskip between columns.
    postgap: 0.25 // So pre and post each get half an \enskip, i.e. 0.25em.
  });
  return {
    type: "array",
    mode: "math",
    body,
    arraystretch: 1,
    addJot: true,
    rowGaps: [null],
    cols,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(body.length + 1).fill([])
  };
}

// The functions below are not available for general use.
// They are here only for internal use by the {CD} environment in placing labels
// next to vertical arrows.

// We don't need any such functions for horizontal arrows because we can reuse
// the functionality that already exists for extensible arrows.

defineFunction({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  props: {
    numArgs: 1
  },
  handler(_ref, args) {
    let {
      parser,
      funcName
    } = _ref;
    return {
      type: "cdlabel",
      mode: parser.mode,
      side: funcName.slice(4),
      label: args[0]
    };
  },
  htmlBuilder(group, options) {
    const newOptions = options.havingStyle(options.style.sup());
    const label = wrapFragment(buildGroup(group.label, newOptions, options), options);
    label.classes.push("cd-label-" + group.side);
    label.style.bottom = makeEm(0.8 - label.depth);
    // Zero out label height & depth, so vertical align of arrow is set
    // by the arrow height, not by the label.
    label.height = 0;
    label.depth = 0;
    return label;
  },
  mathmlBuilder(group, options) {
    let label = new MathNode("mrow", [buildMathML_buildGroup(group.label, options)]);
    label = new MathNode("mpadded", [label]);
    label.setAttribute("width", "0");
    if (group.side === "left") {
      label.setAttribute("lspace", "-1width");
    }
    // We have to guess at vertical alignment. We know the arrow is 1.8em tall,
    // But we don't know the height or depth of the label.
    label.setAttribute("voffset", "0.7em");
    label = new MathNode("mstyle", [label]);
    label.setAttribute("displaystyle", "false");
    label.setAttribute("scriptlevel", "1");
    return label;
  }
});
defineFunction({
  type: "cdlabelparent",
  names: ["\\\\cdparent"],
  props: {
    numArgs: 1
  },
  handler(_ref2, args) {
    let {
      parser
    } = _ref2;
    return {
      type: "cdlabelparent",
      mode: parser.mode,
      fragment: args[0]
    };
  },
  htmlBuilder(group, options) {
    // Wrap the vertical arrow and its labels.
    // The parent gets position: relative. The child gets position: absolute.
    // So CSS can locate the label correctly.
    const parent = wrapFragment(buildGroup(group.fragment, options), options);
    parent.classes.push("cd-vert-arrow");
    return parent;
  },
  mathmlBuilder(group, options) {
    return new MathNode("mrow", [buildMathML_buildGroup(group.fragment, options)]);
  }
});
;// ./src/functions/char.ts




// \@char is an internal function that takes a grouped decimal argument like
// {123} and converts into symbol with code 123.  It is used by the *macro*
// \char defined in macros.js.
defineFunction({
  type: "textord",
  names: ["\\@char"],
  props: {
    numArgs: 1,
    allowedInText: true
  },
  handler(_ref, args) {
    let {
      parser
    } = _ref;
    const arg = assertNodeType(args[0], "ordgroup");
    const group = arg.body;
    let number = "";
    for (let i = 0; i < group.length; i++) {
      const node = assertNodeType(group[i], "textord");
      number += node.text;
    }
    let code = parseInt(number);
    let text;
    if (isNaN(code)) {
      throw new src_ParseError("\\@char has non-numeric argument " + number);
      // If we drop IE support, the following code could be replaced with
      // text = String.fromCodePoint(code)
    } else if (code < 0 || code >= 0x10ffff) {
      throw new src_ParseError("\\@char with invalid code point " + number);
    } else if (code <= 0xffff) {
      text = String.fromCharCode(code);
    } else {
      // Astral code point; split into surrogate halves
      code -= 0x10000;
      text = String.fromCharCode((code >> 10) + 0xd800, (code & 0x3ff) + 0xdc00);
    }
    return {
      type: "textord",
      mode: parser.mode,
      text: text
    };
  }
});
;// ./src/functions/color.ts






const color_htmlBuilder = (group, options) => {
  const elements = buildExpression(group.body, options.withColor(group.color), false);

  // \color isn't supposed to affect the type of the elements it contains.
  // To accomplish this, we wrap the results in a fragment, so the inner
  // elements will be able to directly interact with their neighbors. For
  // example, `\color{red}{2 +} 3` has the same spacing as `2 + 3`
  return makeFragment(elements);
};
const color_mathmlBuilder = (group, options) => {
  const inner = buildMathML_buildExpression(group.body, options.withColor(group.color));
  const node = new MathNode("mstyle", inner);
  node.setAttribute("mathcolor", group.color);
  return node;
};
defineFunction({
  type: "color",
  names: ["\\textcolor"],
  props: {
    numArgs: 2,
    allowedInText: true,
    argTypes: ["color", "original"]
  },
  handler(_ref, args) {
    let {
      parser
    } = _ref;
    const color = assertNodeType(args[0], "color-token").color;
    const body = args[1];
    return {
      type: "color",
      mode: parser.mode,
      color,
      body: ordargument(body)
    };
  },
  htmlBuilder: color_htmlBuilder,
  mathmlBuilder: color_mathmlBuilder
});
defineFunction({
  type: "color",
  names: ["\\color"],
  props: {
    numArgs: 1,
    allowedInText: true,
    argTypes: ["color"]
  },
  handler(_ref2, args) {
    let {
      parser,
      breakOnTokenText
    } = _ref2;
    const color = assertNodeType(args[0], "color-token").color;

    // Set macro \current@color in current namespace to store the current
    // color, mimicking the behavior of color.sty.
    // This is currently used just to correctly color a \right
    // that follows a \color command.
    parser.gullet.macros.set("\\current@color", color);

    // Parse out the implicit body that should be colored.
    const body = parser.parseExpression(true, breakOnTokenText);
    return {
      type: "color",
      mode: parser.mode,
      color,
      body
    };
  },
  htmlBuilder: color_htmlBuilder,
  mathmlBuilder: color_mathmlBuilder
});
;// ./src/functions/cr.ts
// Row breaks within tabular environments, and line breaks at top level







// \DeclareRobustCommand\\{...\@xnewline}
defineFunction({
  type: "cr",
  names: ["\\\\"],
  props: {
    numArgs: 0,
    numOptionalArgs: 0,
    allowedInText: true
  },
  handler(_ref, args, optArgs) {
    let {
      parser
    } = _ref;
    const size = parser.gullet.future().text === "[" ? parser.parseSizeGroup(true) : null;
    const newLine = !parser.settings.displayMode || !parser.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline " + "does nothing in display mode");
    return {
      type: "cr",
      mode: parser.mode,
      newLine,
      size: size && assertNodeType(size, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.

  htmlBuilder(group, options) {
    const span = makeSpan(["mspace"], [], options);
    if (group.newLine) {
      span.classes.push("newline");
      if (group.size) {
        span.style.marginTop = makeEm(calculateSize(group.size, options));
      }
    }
    return span;
  },
  mathmlBuilder(group, options) {
    const node = new MathNode("mspace");
    if (group.newLine) {
      node.setAttribute("linebreak", "newline");
      if (group.size) {
        node.setAttribute("height", makeEm(calculateSize(group.size, options)));
      }
    }
    return node;
  }
});
;// ./src/functions/def.ts



const globalMap = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
};
const checkControlSequence = tok => {
  const name = tok.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(name)) {
    throw new src_ParseError("Expected a control sequence", tok);
  }
  return name;
};
const getRHS = parser => {
  let tok = parser.gullet.popToken();
  if (tok.text === "=") {
    // consume optional equals
    tok = parser.gullet.popToken();
    if (tok.text === " ") {
      // consume one optional space
      tok = parser.gullet.popToken();
    }
  }
  return tok;
};
const letCommand = (parser, name, tok, global) => {
  let macro = parser.gullet.macros.get(tok.text);
  if (macro == null) {
    // don't expand it later even if a macro with the same name is defined
    // e.g., \let\foo=\frac \def\frac{\relax} \frac12
    tok.noexpand = true;
    macro = {
      tokens: [tok],
      numArgs: 0,
      // reproduce the same behavior in expansion
      unexpandable: !parser.gullet.isExpandable(tok.text)
    };
  }
  parser.gullet.macros.set(name, macro, global);
};

// <assignment> -> <non-macro assignment>|<macro assignment>
// <non-macro assignment> -> <simple assignment>|\global<non-macro assignment>
// <macro assignment> -> <definition>|<prefix><macro assignment>
// <prefix> -> \global|\long|\outer
defineFunction({
  type: "internal",
  names: ["\\global", "\\long", "\\\\globallong" // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: true
  },
  handler(_ref) {
    let {
      parser,
      funcName
    } = _ref;
    parser.consumeSpaces();
    const token = parser.fetch();
    if (globalMap[token.text]) {
      // KaTeX doesn't have \par, so ignore \long
      if (funcName === "\\global" || funcName === "\\\\globallong") {
        token.text = globalMap[token.text];
      }
      return assertNodeType(parser.parseFunction(), "internal");
    }
    throw new src_ParseError("Invalid token after macro prefix", token);
  }
});

// Basic support for macro definitions: \def, \gdef, \edef, \xdef
// <definition> -> <def><control sequence><definition text>
// <def> -> \def|\gdef|\edef|\xdef
// <definition text> -> <parameter text><left brace><balanced text><right brace>
defineFunction({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  props: {
    numArgs: 0,
    allowedInText: true,
    primitive: true
  },
  handler(_ref2) {
    let {
      parser,
      funcName
    } = _ref2;
    let tok = parser.gullet.popToken();
    const name = tok.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(name)) {
      throw new src_ParseError("Expected a control sequence", tok);
    }
    let numArgs = 0;
    let insert;
    const delimiters = [[]];
    // <parameter text> contains no braces
    while (parser.gullet.future().text !== "{") {
      tok = parser.gullet.popToken();
      if (tok.text === "#") {
        // If the very last character of the <parameter text> is #, so that
        // this # is immediately followed by {, TeX will behave as if the {
        // had been inserted at the right end of both the parameter text
        // and the replacement text.
        if (parser.gullet.future().text === "{") {
          insert = parser.gullet.future();
          delimiters[numArgs].push("{");
          break;
        }

        // A parameter, the first appearance of # must be followed by 1,
        // the next by 2, and so on; up to nine #’s are allowed
        tok = parser.gullet.popToken();
        if (!/^[1-9]$/.test(tok.text)) {
          throw new src_ParseError("Invalid argument number \"" + tok.text + "\"");
        }
        if (parseInt(tok.text) !== numArgs + 1) {
          throw new src_ParseError("Argument number \"" + tok.text + "\" out of order");
        }
        numArgs++;
        delimiters.push([]);
      } else if (tok.text === "EOF") {
        throw new src_ParseError("Expected a macro definition");
      } else {
        delimiters[numArgs].push(tok.text);
      }
    }
    // replacement text, enclosed in '{' and '}' and properly nested
    let {
      tokens
    } = parser.gullet.consumeArg();
    if (insert) {
      tokens.unshift(insert);
    }
    if (funcName === "\\edef" || funcName === "\\xdef") {
      tokens = parser.gullet.expandTokens(tokens);
      tokens.reverse(); // to fit in with stack order
    }
    // Final arg is the expansion of the macro
    parser.gullet.macros.set(name, {
      tokens,
      numArgs,
      delimiters
    }, funcName === globalMap[funcName]);
    return {
      type: "internal",
      mode: parser.mode
    };
  }
});

// <simple assignment> -> <let assignment>
// <let assignment> -> \futurelet<control sequence><token><token>
//     | \let<control sequence><equals><one optional space><token>
// <equals> -> <optional spaces>|<optional spaces>=
defineFunction({
  type: "internal",
  names: ["\\let", "\\\\globallet" // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: true,
    primitive: true
  },
  handler(_ref3) {
    let {
      parser,
      funcName
    } = _ref3;
    const name = checkControlSequence(parser.gullet.popToken());
    parser.gullet.consumeSpaces();
    const tok = getRHS(parser);
    letCommand(parser, name, tok, funcName === "\\\\globallet");
    return {
      type: "internal",
      mode: parser.mode
    };
  }
});

// ref: https://www.tug.org/TUGboat/tb09-3/tb22bechtolsheim.pdf
defineFunction({
  type: "internal",
  names: ["\\futurelet", "\\\\globalfuture" // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: true,
    primitive: true
  },
  handler(_ref4) {
    let {
      parser,
      funcName
    } = _ref4;
    const name = checkControlSequence(parser.gullet.popToken());
    const middle = parser.gullet.popToken();
    const tok = parser.gullet.popToken();
    letCommand(parser, name, tok, funcName === "\\\\globalfuture");
    parser.gullet.pushToken(tok);
    parser.gullet.pushToken(middle);
    return {
      type: "internal",
      mode: parser.mode
    };
  }
});
;// ./src/delimiter.ts
/**
 * This file deals with creating delimiters of various sizes. The TeXbook
 * discusses these routines on page 441-442, in the "Another subroutine sets box
 * x to a specified variable delimiter" paragraph.
 *
 * There are three main routines here. `makeSmallDelim` makes a delimiter in the
 * normal font, but in either text, script, or scriptscript style.
 * `makeLargeDelim` makes a delimiter in textstyle, but in one of the Size1,
 * Size2, Size3, or Size4 fonts. `makeStackedDelim` makes a delimiter out of
 * smaller pieces that are stacked on top of one another.
 *
 * The functions take a parameter `center`, which determines if the delimiter
 * should be centered around the axis.
 *
 * Then, there are three exposed functions. `sizedDelim` makes a delimiter in
 * one of the given sizes. This is used for things like `\bigl`.
 * `customSizedDelim` makes a delimiter with a given total height+depth. It is
 * called in places like `\sqrt`. `leftRightDelim` makes an appropriate
 * delimiter which surrounds an expression of a given height an depth. It is
 * used in `\left` and `\right`.
 */










/**
 * Get the metrics for a given symbol and font, after transformation (i.e.
 * after following replacement from symbols.js)
 */
const getMetrics = function (symbol, font, mode) {
  const replace = src_symbols.math[symbol] && src_symbols.math[symbol].replace;
  const metrics = getCharacterMetrics(replace || symbol, font, mode);
  if (!metrics) {
    throw new Error("Unsupported symbol " + symbol + " and font size " + font + ".");
  }
  return metrics;
};

/**
 * Puts a delimiter span in a given style, and adds appropriate height, depth,
 * and maxFontSizes.
 */
const styleWrap = function (delim, toStyle, options, classes) {
  const newOptions = options.havingBaseStyle(toStyle);
  const span = makeSpan(classes.concat(newOptions.sizingClasses(options)), [delim], options);
  const delimSizeMultiplier = newOptions.sizeMultiplier / options.sizeMultiplier;
  span.height *= delimSizeMultiplier;
  span.depth *= delimSizeMultiplier;
  span.maxFontSize = newOptions.sizeMultiplier;
  return span;
};
const centerSpan = function (span, options, style) {
  const newOptions = options.havingBaseStyle(style);
  const shift = (1 - options.sizeMultiplier / newOptions.sizeMultiplier) * options.fontMetrics().axisHeight;
  span.classes.push("delimcenter");
  span.style.top = makeEm(shift);
  span.height -= shift;
  span.depth += shift;
};

/**
 * Makes a small delimiter. This is a delimiter that comes in the Main-Regular
 * font, but is restyled to either be in textstyle, scriptstyle, or
 * scriptscriptstyle.
 */
const makeSmallDelim = function (delim, style, center, options, mode, classes) {
  const text = makeSymbol(delim, "Main-Regular", mode, options);
  const span = styleWrap(text, style, options, classes);
  if (center) {
    centerSpan(span, options, style);
  }
  return span;
};

/**
 * Builds a symbol in the given font size (note size is an integer)
 */
const mathrmSize = function (value, size, mode, options) {
  return makeSymbol(value, "Size" + size + "-Regular", mode, options);
};

/**
 * Makes a large delimiter. This is a delimiter that comes in the Size1, Size2,
 * Size3, or Size4 fonts. It is always rendered in textstyle.
 */
const makeLargeDelim = function (delim, size, center, options, mode, classes) {
  const inner = mathrmSize(delim, size, mode, options);
  const span = styleWrap(makeSpan(["delimsizing", "size" + size], [inner], options), src_Style.TEXT, options, classes);
  if (center) {
    centerSpan(span, options, src_Style.TEXT);
  }
  return span;
};

/**
 * Make a span from a font glyph with the given offset and in the given font.
 * This is used in makeStackedDelim to make the stacking pieces for the delimiter.
 */
const makeGlyphSpan = function (symbol, font, mode) {
  let sizeClass;
  // Apply the correct CSS class to choose the right font.
  if (font === "Size1-Regular") {
    sizeClass = "delim-size1";
  } else /* if (font === "Size4-Regular") */{
      sizeClass = "delim-size4";
    }
  const corner = makeSpan(["delimsizinginner", sizeClass], [makeSpan([], [makeSymbol(symbol, font, mode)])]);

  // Since this will be passed into `makeVList` in the end, wrap the element
  // in the appropriate tag that VList uses.
  return {
    type: "elem",
    elem: corner
  };
};
const makeInner = function (ch, height, options) {
  // Create a span with inline SVG for the inner part of a tall stacked delimiter.
  const width = fontMetricsData['Size4-Regular'][ch.charCodeAt(0)] ? fontMetricsData['Size4-Regular'][ch.charCodeAt(0)][4] : fontMetricsData['Size1-Regular'][ch.charCodeAt(0)][4];
  const path = new PathNode("inner", innerPath(ch, Math.round(1000 * height)));
  const svgNode = new SvgNode([path], {
    "width": makeEm(width),
    "height": makeEm(height),
    // Override CSS rule `.katex svg { width: 100% }`
    "style": "width:" + makeEm(width),
    "viewBox": "0 0 " + 1000 * width + " " + Math.round(1000 * height),
    "preserveAspectRatio": "xMinYMin"
  });
  const span = makeSvgSpan([], [svgNode], options);
  span.height = height;
  span.style.height = makeEm(height);
  span.style.width = makeEm(width);
  return {
    type: "elem",
    elem: span
  };
};

// Helpers for makeStackedDelim
const lapInEms = 0.008;
const lap = {
  type: "kern",
  size: -1 * lapInEms
};
const verts = new Set(["|", "\\lvert", "\\rvert", "\\vert"]);
const doubleVerts = new Set(["\\|", "\\lVert", "\\rVert", "\\Vert"]);

/**
 * Make a stacked delimiter out of a given delimiter, with the total height at
 * least `heightTotal`. This routine is mentioned on page 442 of the TeXbook.
 */
const makeStackedDelim = function (delim, heightTotal, center, options, mode, classes) {
  // There are four parts, the top, an optional middle, a repeated part, and a
  // bottom.
  let top;
  let middle;
  let repeat;
  let bottom;
  let svgLabel = "";
  let viewBoxWidth = 0;
  top = repeat = bottom = delim;
  middle = null;
  // Also keep track of what font the delimiters are in
  let font = "Size1-Regular";

  // We set the parts and font based on the symbol. Note that we use
  // '\u23d0' instead of '|' and '\u2016' instead of '\\|' for the
  // repeats of the arrows
  if (delim === "\\uparrow") {
    repeat = bottom = "\u23d0";
  } else if (delim === "\\Uparrow") {
    repeat = bottom = "\u2016";
  } else if (delim === "\\downarrow") {
    top = repeat = "\u23d0";
  } else if (delim === "\\Downarrow") {
    top = repeat = "\u2016";
  } else if (delim === "\\updownarrow") {
    top = "\\uparrow";
    repeat = "\u23d0";
    bottom = "\\downarrow";
  } else if (delim === "\\Updownarrow") {
    top = "\\Uparrow";
    repeat = "\u2016";
    bottom = "\\Downarrow";
  } else if (verts.has(delim)) {
    repeat = "\u2223";
    svgLabel = "vert";
    viewBoxWidth = 333;
  } else if (doubleVerts.has(delim)) {
    repeat = "\u2225";
    svgLabel = "doublevert";
    viewBoxWidth = 556;
  } else if (delim === "[" || delim === "\\lbrack") {
    top = "\u23a1";
    repeat = "\u23a2";
    bottom = "\u23a3";
    font = "Size4-Regular";
    svgLabel = "lbrack";
    viewBoxWidth = 667;
  } else if (delim === "]" || delim === "\\rbrack") {
    top = "\u23a4";
    repeat = "\u23a5";
    bottom = "\u23a6";
    font = "Size4-Regular";
    svgLabel = "rbrack";
    viewBoxWidth = 667;
  } else if (delim === "\\lfloor" || delim === "\u230a") {
    repeat = top = "\u23a2";
    bottom = "\u23a3";
    font = "Size4-Regular";
    svgLabel = "lfloor";
    viewBoxWidth = 667;
  } else if (delim === "\\lceil" || delim === "\u2308") {
    top = "\u23a1";
    repeat = bottom = "\u23a2";
    font = "Size4-Regular";
    svgLabel = "lceil";
    viewBoxWidth = 667;
  } else if (delim === "\\rfloor" || delim === "\u230b") {
    repeat = top = "\u23a5";
    bottom = "\u23a6";
    font = "Size4-Regular";
    svgLabel = "rfloor";
    viewBoxWidth = 667;
  } else if (delim === "\\rceil" || delim === "\u2309") {
    top = "\u23a4";
    repeat = bottom = "\u23a5";
    font = "Size4-Regular";
    svgLabel = "rceil";
    viewBoxWidth = 667;
  } else if (delim === "(" || delim === "\\lparen") {
    top = "\u239b";
    repeat = "\u239c";
    bottom = "\u239d";
    font = "Size4-Regular";
    svgLabel = "lparen";
    viewBoxWidth = 875;
  } else if (delim === ")" || delim === "\\rparen") {
    top = "\u239e";
    repeat = "\u239f";
    bottom = "\u23a0";
    font = "Size4-Regular";
    svgLabel = "rparen";
    viewBoxWidth = 875;
  } else if (delim === "\\{" || delim === "\\lbrace") {
    top = "\u23a7";
    middle = "\u23a8";
    bottom = "\u23a9";
    repeat = "\u23aa";
    font = "Size4-Regular";
  } else if (delim === "\\}" || delim === "\\rbrace") {
    top = "\u23ab";
    middle = "\u23ac";
    bottom = "\u23ad";
    repeat = "\u23aa";
    font = "Size4-Regular";
  } else if (delim === "\\lgroup" || delim === "\u27ee") {
    top = "\u23a7";
    bottom = "\u23a9";
    repeat = "\u23aa";
    font = "Size4-Regular";
  } else if (delim === "\\rgroup" || delim === "\u27ef") {
    top = "\u23ab";
    bottom = "\u23ad";
    repeat = "\u23aa";
    font = "Size4-Regular";
  } else if (delim === "\\lmoustache" || delim === "\u23b0") {
    top = "\u23a7";
    bottom = "\u23ad";
    repeat = "\u23aa";
    font = "Size4-Regular";
  } else if (delim === "\\rmoustache" || delim === "\u23b1") {
    top = "\u23ab";
    bottom = "\u23a9";
    repeat = "\u23aa";
    font = "Size4-Regular";
  }

  // Get the metrics of the four sections
  const topMetrics = getMetrics(top, font, mode);
  const topHeightTotal = topMetrics.height + topMetrics.depth;
  const repeatMetrics = getMetrics(repeat, font, mode);
  const repeatHeightTotal = repeatMetrics.height + repeatMetrics.depth;
  const bottomMetrics = getMetrics(bottom, font, mode);
  const bottomHeightTotal = bottomMetrics.height + bottomMetrics.depth;
  let middleHeightTotal = 0;
  let middleFactor = 1;
  if (middle !== null) {
    const middleMetrics = getMetrics(middle, font, mode);
    middleHeightTotal = middleMetrics.height + middleMetrics.depth;
    middleFactor = 2; // repeat symmetrically above and below middle
  }

  // Calculate the minimal height that the delimiter can have.
  // It is at least the size of the top, bottom, and optional middle combined.
  const minHeight = topHeightTotal + bottomHeightTotal + middleHeightTotal;

  // Compute the number of copies of the repeat symbol we will need
  const repeatCount = Math.max(0, Math.ceil((heightTotal - minHeight) / (middleFactor * repeatHeightTotal)));

  // Compute the total height of the delimiter including all the symbols
  const realHeightTotal = minHeight + repeatCount * middleFactor * repeatHeightTotal;

  // The center of the delimiter is placed at the center of the axis. Note
  // that in this context, "center" means that the delimiter should be
  // centered around the axis in the current style, while normally it is
  // centered around the axis in textstyle.
  let axisHeight = options.fontMetrics().axisHeight;
  if (center) {
    axisHeight *= options.sizeMultiplier;
  }
  // Calculate the depth
  const depth = realHeightTotal / 2 - axisHeight;

  // Now, we start building the pieces that will go into the vlist
  // Keep a list of the pieces of the stacked delimiter
  const stack = [];
  if (svgLabel.length > 0) {
    // Instead of stacking glyphs, create a single SVG.
    // This evades browser problems with imprecise positioning of spans.
    const midHeight = realHeightTotal - topHeightTotal - bottomHeightTotal;
    const viewBoxHeight = Math.round(realHeightTotal * 1000);
    const pathStr = tallDelim(svgLabel, Math.round(midHeight * 1000));
    const path = new PathNode(svgLabel, pathStr);
    const width = makeEm(viewBoxWidth / 1000);
    const height = makeEm(viewBoxHeight / 1000);
    const svg = new SvgNode([path], {
      "width": width,
      "height": height,
      "viewBox": "0 0 " + viewBoxWidth + " " + viewBoxHeight
    });
    const wrapper = makeSvgSpan([], [svg], options);
    wrapper.height = viewBoxHeight / 1000;
    wrapper.style.width = width;
    wrapper.style.height = height;
    stack.push({
      type: "elem",
      elem: wrapper
    });
  } else {
    // Stack glyphs
    // Start by adding the bottom symbol
    stack.push(makeGlyphSpan(bottom, font, mode));
    stack.push(lap); // overlap

    if (middle === null) {
      // The middle section will be an SVG. Make it an extra 0.016em tall.
      // We'll overlap by 0.008em at top and bottom.
      const innerHeight = realHeightTotal - topHeightTotal - bottomHeightTotal + 2 * lapInEms;
      stack.push(makeInner(repeat, innerHeight, options));
    } else {
      // When there is a middle bit, we need the middle part and two repeated
      // sections
      const innerHeight = (realHeightTotal - topHeightTotal - bottomHeightTotal - middleHeightTotal) / 2 + 2 * lapInEms;
      stack.push(makeInner(repeat, innerHeight, options));
      // Now insert the middle of the brace.
      stack.push(lap);
      stack.push(makeGlyphSpan(middle, font, mode));
      stack.push(lap);
      stack.push(makeInner(repeat, innerHeight, options));
    }

    // Add the top symbol
    stack.push(lap);
    stack.push(makeGlyphSpan(top, font, mode));
  }

  // Finally, build the vlist
  const newOptions = options.havingBaseStyle(src_Style.TEXT);
  const inner = makeVList({
    positionType: "bottom",
    positionData: depth,
    children: stack
  }, newOptions);
  return styleWrap(makeSpan(["delimsizing", "mult"], [inner], newOptions), src_Style.TEXT, options, classes);
};

// All surds have 0.08em padding above the vinculum inside the SVG.
// That keeps browser span height rounding error from pinching the line.
const vbPad = 80; // padding above the surd, measured inside the viewBox.
const emPad = 0.08; // padding, in ems, measured in the document.

const sqrtSvg = function (sqrtName, height, viewBoxHeight, extraVinculum, options) {
  const path = sqrtPath(sqrtName, extraVinculum, viewBoxHeight);
  const pathNode = new PathNode(sqrtName, path);
  const svg = new SvgNode([pathNode], {
    // Note: 1000:1 ratio of viewBox to document em width.
    "width": "400em",
    "height": makeEm(height),
    "viewBox": "0 0 400000 " + viewBoxHeight,
    "preserveAspectRatio": "xMinYMin slice"
  });
  return makeSvgSpan(["hide-tail"], [svg], options);
};

/**
 * Make a sqrt image of the given height,
 */
const makeSqrtImage = function (height, options) {
  // Define a newOptions that removes the effect of size changes such as \Huge.
  // We don't pick different a height surd for \Huge. For it, we scale up.
  const newOptions = options.havingBaseSizing();

  // Pick the desired surd glyph from a sequence of surds.
  const delim = traverseSequence("\\surd", height * newOptions.sizeMultiplier, stackLargeDelimiterSequence, newOptions);
  let sizeMultiplier = newOptions.sizeMultiplier; // default

  // The standard sqrt SVGs each have a 0.04em thick vinculum.
  // If Settings.minRuleThickness is larger than that, we add extraVinculum.
  const extraVinculum = Math.max(0, options.minRuleThickness - options.fontMetrics().sqrtRuleThickness);

  // Create a span containing an SVG image of a sqrt symbol.
  let span;
  let spanHeight = 0;
  let texHeight = 0;
  let viewBoxHeight = 0;
  let advanceWidth;

  // We create viewBoxes with 80 units of "padding" above each surd.
  // Then browser rounding error on the parent span height will not
  // encroach on the ink of the vinculum. But that padding is not
  // included in the TeX-like `height` used for calculation of
  // vertical alignment. So texHeight = span.height < span.style.height.

  if (delim.type === "small") {
    // Get an SVG that is derived from glyph U+221A in font KaTeX-Main.
    // 1000 unit normal glyph height.
    viewBoxHeight = 1000 + 1000 * extraVinculum + vbPad;
    if (height < 1.0) {
      sizeMultiplier = 1.0; // mimic a \textfont radical
    } else if (height < 1.4) {
      sizeMultiplier = 0.7; // mimic a \scriptfont radical
    }
    spanHeight = (1.0 + extraVinculum + emPad) / sizeMultiplier;
    texHeight = (1.00 + extraVinculum) / sizeMultiplier;
    span = sqrtSvg("sqrtMain", spanHeight, viewBoxHeight, extraVinculum, options);
    span.style.minWidth = "0.853em";
    advanceWidth = 0.833 / sizeMultiplier; // from the font.
  } else if (delim.type === "large") {
    // These SVGs come from fonts: KaTeX_Size1, _Size2, etc.
    viewBoxHeight = (1000 + vbPad) * sizeToMaxHeight[delim.size];
    texHeight = (sizeToMaxHeight[delim.size] + extraVinculum) / sizeMultiplier;
    spanHeight = (sizeToMaxHeight[delim.size] + extraVinculum + emPad) / sizeMultiplier;
    span = sqrtSvg("sqrtSize" + delim.size, spanHeight, viewBoxHeight, extraVinculum, options);
    span.style.minWidth = "1.02em";
    advanceWidth = 1.0 / sizeMultiplier; // 1.0 from the font.
  } else {
    // Tall sqrt. In TeX, this would be stacked using multiple glyphs.
    // We'll use a single SVG to accomplish the same thing.
    spanHeight = height + extraVinculum + emPad;
    texHeight = height + extraVinculum;
    viewBoxHeight = Math.floor(1000 * height + extraVinculum) + vbPad;
    span = sqrtSvg("sqrtTall", spanHeight, viewBoxHeight, extraVinculum, options);
    span.style.minWidth = "0.742em";
    advanceWidth = 1.056;
  }
  span.height = texHeight;
  span.style.height = makeEm(spanHeight);
  return {
    span,
    advanceWidth,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (options.fontMetrics().sqrtRuleThickness + extraVinculum) * sizeMultiplier
  };
};

// There are three kinds of delimiters, delimiters that stack when they become
// too large
const stackLargeDelimiters = new Set(["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230a", "\u230b", "\\lceil", "\\rceil", "\u2308", "\u2309", "\\surd"]);

// delimiters that always stack
const stackAlwaysDelimiters = new Set(["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27ee", "\u27ef", "\\lmoustache", "\\rmoustache", "\u23b0", "\u23b1"]);

// and delimiters that never stack
const stackNeverDelimiters = new Set(["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"]);

// Metrics of the different sizes. Found by looking at TeX's output of
// $\bigl| // \Bigl| \biggl| \Biggl| \showlists$
// Used to create stacked delimiters of appropriate sizes in makeSizedDelim.
const sizeToMaxHeight = [0, 1.2, 1.8, 2.4, 3.0];

/**
 * Used to create a delimiter of a specific size, where `size` is 1, 2, 3, or 4.
 */
const makeSizedDelim = function (delim, size, options, mode, classes) {
  // < and > turn into \langle and \rangle in delimiters
  if (delim === "<" || delim === "\\lt" || delim === "\u27e8") {
    delim = "\\langle";
  } else if (delim === ">" || delim === "\\gt" || delim === "\u27e9") {
    delim = "\\rangle";
  }

  // Sized delimiters are never centered.
  if (stackLargeDelimiters.has(delim) || stackNeverDelimiters.has(delim)) {
    return makeLargeDelim(delim, size, false, options, mode, classes);
  } else if (stackAlwaysDelimiters.has(delim)) {
    return makeStackedDelim(delim, sizeToMaxHeight[size], false, options, mode, classes);
  } else {
    throw new src_ParseError("Illegal delimiter: '" + delim + "'");
  }
};

/**
 * There are three different sequences of delimiter sizes that the delimiters
 * follow depending on the kind of delimiter. This is used when creating custom
 * sized delimiters to decide whether to create a small, large, or stacked
 * delimiter.
 *
 * In real TeX, these sequences aren't explicitly defined, but are instead
 * defined inside the font metrics. Since there are only three sequences that
 * are possible for the delimiters that TeX defines, it is easier to just encode
 * them explicitly here.
 */

// Delimiters that never stack try small delimiters and large delimiters only
const stackNeverDelimiterSequence = [{
  type: "small",
  style: src_Style.SCRIPTSCRIPT
}, {
  type: "small",
  style: src_Style.SCRIPT
}, {
  type: "small",
  style: src_Style.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}];

// Delimiters that always stack try the small delimiters first, then stack
const stackAlwaysDelimiterSequence = [{
  type: "small",
  style: src_Style.SCRIPTSCRIPT
}, {
  type: "small",
  style: src_Style.SCRIPT
}, {
  type: "small",
  style: src_Style.TEXT
}, {
  type: "stack"
}];

// Delimiters that stack when large try the small and then large delimiters, and
// stack afterwards
const stackLargeDelimiterSequence = [{
  type: "small",
  style: src_Style.SCRIPTSCRIPT
}, {
  type: "small",
  style: src_Style.SCRIPT
}, {
  type: "small",
  style: src_Style.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}, {
  type: "stack"
}];

/**
 * Get the font used in a delimiter based on what kind of delimiter it is.
 * TODO(#963) Use more specific font family return type once that is introduced.
 */
const delimTypeToFont = function (type) {
  if (type.type === "small") {
    return "Main-Regular";
  } else if (type.type === "large") {
    return "Size" + type.size + "-Regular";
  } else if (type.type === "stack") {
    return "Size4-Regular";
  } else {
    const delimKind = type.type;
    throw new Error("Add support for delim type '" + delimKind + "' here.");
  }
};

/**
 * Traverse a sequence of types of delimiters to decide what kind of delimiter
 * should be used to create a delimiter of the given height+depth.
 */
const traverseSequence = function (delim, height, sequence, options) {
  // Here, we choose the index we should start at in the sequences. In smaller
  // sizes (which correspond to larger numbers in style.size) we start earlier
  // in the sequence. Thus, scriptscript starts at index 3-3=0, script starts
  // at index 3-2=1, text starts at 3-1=2, and display starts at min(2,3-0)=2
  const start = Math.min(2, 3 - options.style.size);
  for (let i = start; i < sequence.length; i++) {
    const delimType = sequence[i];
    if (delimType.type === "stack") {
      // This is always the last delimiter, so we just break the loop now.
      break;
    }
    const metrics = getMetrics(delim, delimTypeToFont(delimType), "math");
    let heightDepth = metrics.height + metrics.depth;

    // Small delimiters are scaled down versions of the same font, so we
    // account for the style change size.
    if (delimType.type === "small") {
      const newOptions = options.havingBaseStyle(delimType.style);
      heightDepth *= newOptions.sizeMultiplier;
    }

    // Check if the delimiter at this size works for the given height.
    if (heightDepth > height) {
      return delimType;
    }
  }

  // If we reached the end of the sequence, return the last sequence element.
  return sequence[sequence.length - 1];
};

/**
 * Make a delimiter of a given height+depth, with optional centering. Here, we
 * traverse the sequences, and create a delimiter that the sequence tells us to.
 */
const makeCustomSizedDelim = function (delim, height, center, options, mode, classes) {
  if (delim === "<" || delim === "\\lt" || delim === "\u27e8") {
    delim = "\\langle";
  } else if (delim === ">" || delim === "\\gt" || delim === "\u27e9") {
    delim = "\\rangle";
  }

  // Decide what sequence to use
  let sequence;
  if (stackNeverDelimiters.has(delim)) {
    sequence = stackNeverDelimiterSequence;
  } else if (stackLargeDelimiters.has(delim)) {
    sequence = stackLargeDelimiterSequence;
  } else {
    sequence = stackAlwaysDelimiterSequence;
  }

  // Look through the sequence
  const delimType = traverseSequence(delim, height, sequence, options);

  // Get the delimiter from font glyphs.
  // Depending on the sequence element we decided on, call the
  // appropriate function.
  if (delimType.type === "small") {
    return makeSmallDelim(delim, delimType.style, center, options, mode, classes);
  } else if (delimType.type === "large") {
    return makeLargeDelim(delim, delimType.size, center, options, mode, classes);
  } else /* if (delimType.type === "stack") */{
      return makeStackedDelim(delim, height, center, options, mode, classes);
    }
};

/**
 * Make a delimiter for use with `\left` and `\right`, given a height and depth
 * of an expression that the delimiters surround.
 */
const makeLeftRightDelim = function (delim, height, depth, options, mode, classes) {
  // We always center \left/\right delimiters, so the axis is always shifted
  const axisHeight = options.fontMetrics().axisHeight * options.sizeMultiplier;

  // Taken from TeX source, tex.web, function make_left_right
  const delimiterFactor = 901;
  const delimiterExtend = 5.0 / options.fontMetrics().ptPerEm;
  const maxDistFromAxis = Math.max(height - axisHeight, depth + axisHeight);
  const totalHeight = Math.max(
  // In real TeX, calculations are done using integral values which are
  // 65536 per pt, or 655360 per em. So, the division here truncates in
  // TeX but doesn't here, producing different results. If we wanted to
  // exactly match TeX's calculation, we could do
  //   Math.floor(655360 * maxDistFromAxis / 500) *
  //    delimiterFactor / 655360
  // (To see the difference, compare
  //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
  // in TeX and KaTeX)
  maxDistFromAxis / 500 * delimiterFactor, 2 * maxDistFromAxis - delimiterExtend);

  // Finally, we defer to `makeCustomSizedDelim` with our calculated total
  // height
  return makeCustomSizedDelim(delim, totalHeight, true, options, mode, classes);
};
;// ./src/functions/delimsizing.ts









// Extra data needed for the delimiter handler down below
const delimiterSizes = {
  "\\bigl": {
    mclass: "mopen",
    size: 1
  },
  "\\Bigl": {
    mclass: "mopen",
    size: 2
  },
  "\\biggl": {
    mclass: "mopen",
    size: 3
  },
  "\\Biggl": {
    mclass: "mopen",
    size: 4
  },
  "\\bigr": {
    mclass: "mclose",
    size: 1
  },
  "\\Bigr": {
    mclass: "mclose",
    size: 2
  },
  "\\biggr": {
    mclass: "mclose",
    size: 3
  },
  "\\Biggr": {
    mclass: "mclose",
    size: 4
  },
  "\\bigm": {
    mclass: "mrel",
    size: 1
  },
  "\\Bigm": {
    mclass: "mrel",
    size: 2
  },
  "\\biggm": {
    mclass: "mrel",
    size: 3
  },
  "\\Biggm": {
    mclass: "mrel",
    size: 4
  },
  "\\big": {
    mclass: "mord",
    size: 1
  },
  "\\Big": {
    mclass: "mord",
    size: 2
  },
  "\\bigg": {
    mclass: "mord",
    size: 3
  },
  "\\Bigg": {
    mclass: "mord",
    size: 4
  }
};
const delimiters = new Set(["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230a", "\u230b", "\\lceil", "\\rceil", "\u2308", "\u2309", "<", ">", "\\langle", "\u27e8", "\\rangle", "\u27e9", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27ee", "\u27ef", "\\lmoustache", "\\rmoustache", "\u23b0", "\u23b1", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."]);
// Delimiter functions
function checkDelimiter(delim, context) {
  const symDelim = checkSymbolNodeType(delim);
  if (symDelim && delimiters.has(symDelim.text)) {
    return symDelim;
  } else if (symDelim) {
    throw new src_ParseError("Invalid delimiter '" + symDelim.text + "' after '" + context.funcName + "'", delim);
  } else {
    throw new src_ParseError("Invalid delimiter type '" + delim.type + "'", delim);
  }
}
defineFunction({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (context, args) => {
    const delim = checkDelimiter(args[0], context);
    return {
      type: "delimsizing",
      mode: context.parser.mode,
      size: delimiterSizes[context.funcName].size,
      mclass: delimiterSizes[context.funcName].mclass,
      delim: delim.text
    };
  },
  htmlBuilder: (group, options) => {
    if (group.delim === ".") {
      // Empty delimiters still count as elements, even though they don't
      // show anything.
      return makeSpan([group.mclass]);
    }
    return makeSizedDelim(group.delim, group.size, options, group.mode, [group.mclass]);
  },
  mathmlBuilder: group => {
    const children = [];
    if (group.delim !== ".") {
      children.push(makeText(group.delim, group.mode));
    }
    const node = new MathNode("mo", children);
    if (group.mclass === "mopen" || group.mclass === "mclose") {
      // Only some of the delimsizing functions act as fences, and they
      // return "mopen" or "mclose" mclass.
      node.setAttribute("fence", "true");
    } else {
      // Explicitly disable fencing if it's not a fence, to override the
      // defaults.
      node.setAttribute("fence", "false");
    }
    node.setAttribute("stretchy", "true");
    const size = makeEm(sizeToMaxHeight[group.size]);
    node.setAttribute("minsize", size);
    node.setAttribute("maxsize", size);
    return node;
  }
});
function assertParsed(group) {
  if (!group.body) {
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
  }
}
defineFunction({
  type: "leftright-right",
  names: ["\\right"],
  props: {
    numArgs: 1,
    primitive: true
  },
  handler: (context, args) => {
    // \left case below triggers parsing of \right in
    //   `const right = parser.parseFunction();`
    // uses this return value.
    const color = context.parser.gullet.macros.get("\\current@color");
    if (color && typeof color !== "string") {
      throw new src_ParseError("\\current@color set to non-string in \\right");
    }
    return {
      type: "leftright-right",
      mode: context.parser.mode,
      delim: checkDelimiter(args[0], context).text,
      color: color // undefined if not set via \color
    };
  }
});
defineFunction({
  type: "leftright",
  names: ["\\left"],
  props: {
    numArgs: 1,
    primitive: true
  },
  handler: (context, args) => {
    const delim = checkDelimiter(args[0], context);
    const parser = context.parser;
    // Parse out the implicit body
    ++parser.leftrightDepth;
    // parseExpression stops before '\\right'
    const body = parser.parseExpression(false);
    --parser.leftrightDepth;
    // Check the next token
    parser.expect("\\right", false);
    const right = assertNodeType(parser.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: parser.mode,
      body,
      left: delim.text,
      right: right.delim,
      rightColor: right.color
    };
  },
  htmlBuilder: (group, options) => {
    assertParsed(group);
    // Build the inner expression
    const inner = buildExpression(group.body, options, true, ["mopen", "mclose"]);
    let innerHeight = 0;
    let innerDepth = 0;
    let hadMiddle = false;

    // Calculate its height and depth
    for (let i = 0; i < inner.length; i++) {
      // Property `isMiddle` not defined on `span`. See comment in
      // "middle"'s htmlBuilder.
      // TODO(ts)
      if (inner[i].isMiddle) {
        hadMiddle = true;
      } else {
        innerHeight = Math.max(inner[i].height, innerHeight);
        innerDepth = Math.max(inner[i].depth, innerDepth);
      }
    }

    // The size of delimiters is the same, regardless of what style we are
    // in. Thus, to correctly calculate the size of delimiter we need around
    // a group, we scale down the inner size based on the size.
    innerHeight *= options.sizeMultiplier;
    innerDepth *= options.sizeMultiplier;
    let leftDelim;
    if (group.left === ".") {
      // Empty delimiters in \left and \right make null delimiter spaces.
      leftDelim = makeNullDelimiter(options, ["mopen"]);
    } else {
      // Otherwise, use leftRightDelim to generate the correct sized
      // delimiter.
      leftDelim = makeLeftRightDelim(group.left, innerHeight, innerDepth, options, group.mode, ["mopen"]);
    }
    // Add it to the beginning of the expression
    inner.unshift(leftDelim);

    // Handle middle delimiters
    if (hadMiddle) {
      for (let i = 1; i < inner.length; i++) {
        const middleDelim = inner[i];
        // Property `isMiddle` not defined on `span`. See comment in
        // "middle"'s htmlBuilder.
        // TODO(ts)
        const isMiddle = middleDelim.isMiddle;
        if (isMiddle) {
          // Apply the options that were active when \middle was called
          inner[i] = makeLeftRightDelim(isMiddle.delim, innerHeight, innerDepth, isMiddle.options, group.mode, []);
        }
      }
    }
    let rightDelim;
    // Same for the right delimiter, but using color specified by \color
    if (group.right === ".") {
      rightDelim = makeNullDelimiter(options, ["mclose"]);
    } else {
      const colorOptions = group.rightColor ? options.withColor(group.rightColor) : options;
      rightDelim = makeLeftRightDelim(group.right, innerHeight, innerDepth, colorOptions, group.mode, ["mclose"]);
    }
    // Add it to the end of the expression.
    inner.push(rightDelim);
    return makeSpan(["minner"], inner, options);
  },
  mathmlBuilder: (group, options) => {
    assertParsed(group);
    const inner = buildMathML_buildExpression(group.body, options);
    if (group.left !== ".") {
      const leftNode = new MathNode("mo", [makeText(group.left, group.mode)]);
      leftNode.setAttribute("fence", "true");
      inner.unshift(leftNode);
    }
    if (group.right !== ".") {
      const rightNode = new MathNode("mo", [makeText(group.right, group.mode)]);
      rightNode.setAttribute("fence", "true");
      if (group.rightColor) {
        rightNode.setAttribute("mathcolor", group.rightColor);
      }
      inner.push(rightNode);
    }
    return makeRow(inner);
  }
});
defineFunction({
  type: "middle",
  names: ["\\middle"],
  props: {
    numArgs: 1,
    primitive: true
  },
  handler: (context, args) => {
    const delim = checkDelimiter(args[0], context);
    if (!context.parser.leftrightDepth) {
      throw new src_ParseError("\\middle without preceding \\left", delim);
    }
    return {
      type: "middle",
      mode: context.parser.mode,
      delim: delim.text
    };
  },
  htmlBuilder: (group, options) => {
    let middleDelim;
    if (group.delim === ".") {
      middleDelim = makeNullDelimiter(options, []);
    } else {
      middleDelim = makeSizedDelim(group.delim, 1, options, group.mode, []);
      const isMiddle = {
        delim: group.delim,
        options
      };
      // Property `isMiddle` not defined on `span`. It is only used in
      // this file above.
      // TODO: Fix this violation of the `span` type and possibly rename
      // things since `isMiddle` sounds like a boolean, but is a struct.
      // TODO(ts)
      middleDelim.isMiddle = isMiddle;
    }
    return middleDelim;
  },
  mathmlBuilder: (group, options) => {
    // A Firefox \middle will stretch a character vertically only if it
    // is in the fence part of the operator dictionary at:
    // https://www.w3.org/TR/MathML3/appendixc.html.
    // So we need to avoid U+2223 and use plain "|" instead.
    const textNode = group.delim === "\\vert" || group.delim === "|" ? makeText("|", "text") : makeText(group.delim, group.mode);
    const middleNode = new MathNode("mo", [textNode]);
    middleNode.setAttribute("fence", "true");
    // MathML gives 5/18em spacing to each <mo> element.
    // \middle should get delimiter spacing instead.
    middleNode.setAttribute("lspace", "0.05em");
    middleNode.setAttribute("rspace", "0.05em");
    return middleNode;
  }
});
;// ./src/functions/enclose.ts











const enclose_htmlBuilder = (group, options) => {
  // \cancel, \bcancel, \xcancel, \sout, \fbox, \colorbox, \fcolorbox, \phase
  // Some groups can return document fragments.  Handle those by wrapping
  // them in a span.
  const inner = wrapFragment(buildGroup(group.body, options), options);
  const label = group.label.slice(1);
  let scale = options.sizeMultiplier;
  let img;
  let imgShift = 0;

  // In the LaTeX cancel package, line geometry is slightly different
  // depending on whether the subject is wider than it is tall, or vice versa.
  // We don't know the width of a group, so as a proxy, we test if
  // the subject is a single character. This captures most of the
  // subjects that should get the "tall" treatment.
  const isSingleChar = isCharacterBox(group.body);
  if (label === "sout") {
    img = makeSpan(["stretchy", "sout"]);
    img.height = options.fontMetrics().defaultRuleThickness / scale;
    imgShift = -0.5 * options.fontMetrics().xHeight;
  } else if (label === "phase") {
    // Set a couple of dimensions from the steinmetz package.
    const lineWeight = calculateSize({
      number: 0.6,
      unit: "pt"
    }, options);
    const clearance = calculateSize({
      number: 0.35,
      unit: "ex"
    }, options);

    // Prevent size changes like \Huge from affecting line thickness
    const newOptions = options.havingBaseSizing();
    scale = scale / newOptions.sizeMultiplier;
    const angleHeight = inner.height + inner.depth + lineWeight + clearance;
    // Reserve a left pad for the angle.
    inner.style.paddingLeft = makeEm(angleHeight / 2 + lineWeight);

    // Create an SVG
    const viewBoxHeight = Math.floor(1000 * angleHeight * scale);
    const path = phasePath(viewBoxHeight);
    const svgNode = new SvgNode([new PathNode("phase", path)], {
      "width": "400em",
      "height": makeEm(viewBoxHeight / 1000),
      "viewBox": "0 0 400000 " + viewBoxHeight,
      "preserveAspectRatio": "xMinYMin slice"
    });
    // Wrap it in a span with overflow: hidden.
    img = makeSvgSpan(["hide-tail"], [svgNode], options);
    img.style.height = makeEm(angleHeight);
    imgShift = inner.depth + lineWeight + clearance;
  } else {
    // Add horizontal padding
    if (/cancel/.test(label)) {
      if (!isSingleChar) {
        inner.classes.push("cancel-pad");
      }
    } else if (label === "angl") {
      inner.classes.push("anglpad");
    } else {
      inner.classes.push("boxpad");
    }

    // Add vertical padding
    let topPad = 0;
    let bottomPad = 0;
    let ruleThickness = 0;
    // ref: cancel package: \advance\totalheight2\p@ % "+2"
    if (/box/.test(label)) {
      ruleThickness = Math.max(options.fontMetrics().fboxrule,
      // default
      options.minRuleThickness // User override.
      );
      topPad = options.fontMetrics().fboxsep + (label === "colorbox" ? 0 : ruleThickness);
      bottomPad = topPad;
    } else if (label === "angl") {
      ruleThickness = Math.max(options.fontMetrics().defaultRuleThickness, options.minRuleThickness);
      topPad = 4 * ruleThickness; // gap = 3 × line, plus the line itself.
      bottomPad = Math.max(0, 0.25 - inner.depth);
    } else {
      topPad = isSingleChar ? 0.2 : 0;
      bottomPad = topPad;
    }
    img = stretchyEnclose(inner, label, topPad, bottomPad, options);
    if (/fbox|boxed|fcolorbox/.test(label)) {
      img.style.borderStyle = "solid";
      img.style.borderWidth = makeEm(ruleThickness);
    } else if (label === "angl" && ruleThickness !== 0.049) {
      img.style.borderTopWidth = makeEm(ruleThickness);
      img.style.borderRightWidth = makeEm(ruleThickness);
    }
    imgShift = inner.depth + bottomPad;
    if (group.backgroundColor) {
      img.style.backgroundColor = group.backgroundColor;
      if (group.borderColor) {
        img.style.borderColor = group.borderColor;
      }
    }
  }
  let vlist;
  if (group.backgroundColor) {
    vlist = makeVList({
      positionType: "individualShift",
      children: [
      // Put the color background behind inner;
      {
        type: "elem",
        elem: img,
        shift: imgShift
      }, {
        type: "elem",
        elem: inner,
        shift: 0
      }]
    }, options);
  } else {
    const classes = /cancel|phase/.test(label) ? ["svg-align"] : [];
    vlist = makeVList({
      positionType: "individualShift",
      children: [
      // Write the \cancel stroke on top of inner.
      {
        type: "elem",
        elem: inner,
        shift: 0
      }, {
        type: "elem",
        elem: img,
        shift: imgShift,
        wrapperClasses: classes
      }]
    }, options);
  }
  if (/cancel/.test(label)) {
    // The cancel package documentation says that cancel lines add their height
    // to the expression, but tests show that isn't how it actually works.
    vlist.height = inner.height;
    vlist.depth = inner.depth;
  }
  if (/cancel/.test(label) && !isSingleChar) {
    // cancel does not create horiz space for its line extension.
    return makeSpan(["mord", "cancel-lap"], [vlist], options);
  } else {
    return makeSpan(["mord"], [vlist], options);
  }
};
const enclose_mathmlBuilder = (group, options) => {
  let fboxsep = 0;
  const node = new MathNode(group.label.includes("colorbox") ? "mpadded" : "menclose", [buildMathML_buildGroup(group.body, options)]);
  switch (group.label) {
    case "\\cancel":
      node.setAttribute("notation", "updiagonalstrike");
      break;
    case "\\bcancel":
      node.setAttribute("notation", "downdiagonalstrike");
      break;
    case "\\phase":
      node.setAttribute("notation", "phasorangle");
      break;
    case "\\sout":
      node.setAttribute("notation", "horizontalstrike");
      break;
    case "\\fbox":
      node.setAttribute("notation", "box");
      break;
    case "\\angl":
      node.setAttribute("notation", "actuarial");
      break;
    case "\\fcolorbox":
    case "\\colorbox":
      // <menclose> doesn't have a good notation option. So use <mpadded>
      // instead. Set some attributes that come included with <menclose>.
      fboxsep = options.fontMetrics().fboxsep * options.fontMetrics().ptPerEm;
      node.setAttribute("width", "+" + 2 * fboxsep + "pt");
      node.setAttribute("height", "+" + 2 * fboxsep + "pt");
      node.setAttribute("lspace", fboxsep + "pt"); //
      node.setAttribute("voffset", fboxsep + "pt");
      if (group.label === "\\fcolorbox") {
        const thk = Math.max(options.fontMetrics().fboxrule,
        // default
        options.minRuleThickness // user override
        );
        node.setAttribute("style", "border: " + makeEm(thk) + " solid " + group.borderColor);
      }
      break;
    case "\\xcancel":
      node.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  if (group.backgroundColor) {
    node.setAttribute("mathbackground", group.backgroundColor);
  }
  return node;
};
defineFunction({
  type: "enclose",
  names: ["\\colorbox"],
  props: {
    numArgs: 2,
    allowedInText: true,
    argTypes: ["color", "text"]
  },
  handler(_ref, args, optArgs) {
    let {
      parser,
      funcName
    } = _ref;
    const color = assertNodeType(args[0], "color-token").color;
    const body = args[1];
    return {
      type: "enclose",
      mode: parser.mode,
      label: funcName,
      backgroundColor: color,
      body
    };
  },
  htmlBuilder: enclose_htmlBuilder,
  mathmlBuilder: enclose_mathmlBuilder
});
defineFunction({
  type: "enclose",
  names: ["\\fcolorbox"],
  props: {
    numArgs: 3,
    allowedInText: true,
    argTypes: ["color", "color", "text"]
  },
  handler(_ref2, args, optArgs) {
    let {
      parser,
      funcName
    } = _ref2;
    const borderColor = assertNodeType(args[0], "color-token").color;
    const backgroundColor = assertNodeType(args[1], "color-token").color;
    const body = args[2];
    return {
      type: "enclose",
      mode: parser.mode,
      label: funcName,
      backgroundColor,
      borderColor,
      body
    };
  },
  htmlBuilder: enclose_htmlBuilder,
  mathmlBuilder: enclose_mathmlBuilder
});
defineFunction({
  type: "enclose",
  names: ["\\fbox"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: true
  },
  handler(_ref3, args) {
    let {
      parser
    } = _ref3;
    return {
      type: "enclose",
      mode: parser.mode,
      label: "\\fbox",
      body: args[0]
    };
  }
});
defineFunction({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\phase"],
  props: {
    numArgs: 1
  },
  handler(_ref4, args) {
    let {
      parser,
      funcName
    } = _ref4;
    const body = args[0];
    return {
      type: "enclose",
      mode: parser.mode,
      label: funcName,
      body
    };
  },
  htmlBuilder: enclose_htmlBuilder,
  mathmlBuilder: enclose_mathmlBuilder
});
defineFunction({
  type: "enclose",
  names: ["\\sout"],
  props: {
    numArgs: 1,
    allowedInText: true
  },
  handler(_ref5, args) {
    let {
      parser,
      funcName
    } = _ref5;
    if (parser.mode === "math") {
      parser.settings.reportNonstrict("mathVsSout", "LaTeX's \\sout works only in text mode");
    }
    const body = args[0];
    return {
      type: "enclose",
      mode: parser.mode,
      label: funcName,
      body
    };
  },
  htmlBuilder: enclose_htmlBuilder,
  mathmlBuilder: enclose_mathmlBuilder
});
defineFunction({
  type: "enclose",
  names: ["\\angl"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: false
  },
  handler(_ref6, args) {
    let {
      parser
    } = _ref6;
    return {
      type: "enclose",
      mode: parser.mode,
      label: "\\angl",
      body: args[0]
    };
  }
});
;// ./src/defineEnvironment.ts


/**
 * The context contains the following properties:
 *  - mode: current parsing mode.
 *  - envName: the name of the environment, one of the listed names.
 *  - parser: the parser object.
 */

/**
 *  - context: information and references provided by the parser
 *  - args: an array of arguments passed to \begin{name}
 *  - optArgs: an array of optional arguments passed to \begin{name}
 */

/**
 *  - numArgs: (default 0) The number of arguments after the \begin{name} function.
 *  - argTypes: (optional) Just like for a function
 *  - allowedInText: (default false) Whether or not the environment is allowed
 *                   inside text mode (not enforced yet).
 *  - numOptionalArgs: (default 0) Just like for a function
 */

/**
 * Final environment spec for use at parse time.
 * This is almost identical to `EnvDefSpec`, except it
 * 1. includes the function handler
 * 2. requires all arguments except argType
 * It is generated by `defineEnvironment()` below.
 */

/**
 * All registered environments.
 * `environments.js` exports this same dictionary again and makes it public.
 * `Parser.js` requires this dictionary via `environments.js`.
 */
const _environments = {};
function defineEnvironment(_ref) {
  let {
    type,
    names,
    props,
    handler,
    htmlBuilder,
    mathmlBuilder
  } = _ref;
  // Set default values of environments.
  const data = {
    type,
    numArgs: props.numArgs || 0,
    allowedInText: false,
    numOptionalArgs: 0,
    handler
  };
  for (let i = 0; i < names.length; ++i) {
    // TODO: The value type of _environments should be a type union of all
    // possible `EnvSpec<>` possibilities instead of `EnvSpec<*>`, which is
    // an existential type.
    _environments[names[i]] = data;
  }
  if (htmlBuilder) {
    _htmlGroupBuilders[type] = htmlBuilder;
  }
  if (mathmlBuilder) {
    _mathmlGroupBuilders[type] = mathmlBuilder;
  }
}
;// ./src/defineMacro.ts
/**
 * Provides context to macros defined by functions. Implemented by
 * MacroExpander.
 */

/** Macro tokens (in reverse order). */

/**
 * All registered global/built-in macros.
 * `macros.js` exports this same dictionary again and makes it public.
 * `Parser.js` requires this dictionary via `macros.js`.
 */
const _macros = {};

// This function might one day accept an additional argument and do more things.
function defineMacro(name, body) {
  _macros[name] = body;
}
;// ./src/SourceLocation.ts
/**
 * Lexing or parsing positional information for error reporting.
 * This object is immutable.
 */
class SourceLocation {
  // The + prefix indicates that these fields aren't writeable
  // Lexer holding the input string.
  // Start offset, zero-based inclusive.
  // End offset, zero-based exclusive.

  constructor(lexer, start, end) {
    this.lexer = lexer;
    this.start = start;
    this.end = end;
  }

  /**
   * Merges two `SourceLocation`s from location providers, given they are
   * provided in order of appearance.
   * - Returns the first one's location if only the first is provided.
   * - Returns a merged range of the first and the last if both are provided
   *   and their lexers match.
   * - Otherwise, returns null.
   */
  static range(first, second) {
    if (!second) {
      return first && first.loc;
    } else if (!first || !first.loc || !second.loc || first.loc.lexer !== second.loc.lexer) {
      return null;
    } else {
      return new SourceLocation(first.loc.lexer, first.loc.start, second.loc.end);
    }
  }
}
;// ./src/Token.ts


/**
 * Interface required to break circular dependency between Token, Lexer, and
 * ParseError.
 */

/**
 * The resulting token returned from `lex`.
 *
 * It consists of the token text plus some position information.
 * The position information is essentially a range in an input string,
 * but instead of referencing the bare input string, we refer to the lexer.
 * That way it is possible to attach extra metadata to the input string,
 * like for example a file name or similar.
 *
 * The position information is optional, so it is OK to construct synthetic
 * tokens if appropriate. Not providing available position information may
 * lead to degraded error reporting, though.
 */
class Token {
  // don't expand the token
  // used in \noexpand

  constructor(text,
  // the text of this token
  loc) {
    this.text = text;
    this.loc = loc;
  }

  /**
   * Given a pair of tokens (this and endToken), compute a `Token` encompassing
   * the whole input range enclosed by these two.
   */
  range(endToken,
  // last token of the range, inclusive
  text // the text of the newly constructed token
  ) {
    return new Token(text, SourceLocation.range(this, endToken));
  }
}
;// ./src/environments/array.ts















// Data stored in the ParseNode associated with the environment.

// Type to indicate column separation in MathML

// Helper functions
function getHLines(parser) {
  // Return an array. The array length = number of hlines.
  // Each element in the array tells if the line is dashed.
  const hlineInfo = [];
  parser.consumeSpaces();
  let nxt = parser.fetch().text;
  if (nxt === "\\relax") {
    // \relax is an artifact of the \cr macro below
    parser.consume();
    parser.consumeSpaces();
    nxt = parser.fetch().text;
  }
  while (nxt === "\\hline" || nxt === "\\hdashline") {
    parser.consume();
    hlineInfo.push(nxt === "\\hdashline");
    parser.consumeSpaces();
    nxt = parser.fetch().text;
  }
  return hlineInfo;
}
const validateAmsEnvironmentContext = context => {
  const settings = context.parser.settings;
  if (!settings.displayMode) {
    throw new src_ParseError("{" + context.envName + "} can be used only in" + " display mode.");
  }
};
const gatherEnvironments = new Set(["gather", "gather*"]);

// autoTag (an argument to parseArray) can be one of three values:
// * undefined: Regular (not-top-level) array; no tags on each row
// * true: Automatic equation numbering, overridable by \tag
// * false: Tags allowed on each row, but no automatic numbering
// This function *doesn't* work with the "split" environment name.
function getAutoTag(name) {
  if (!name.includes("ed")) {
    return !name.includes("*");
  }
  // return undefined;
}

/**
 * Parse the body of the environment, with rows delimited by \\ and
 * columns delimited by &, and create a nested list in row-major order
 * with one group per cell.  If given an optional argument style
 * ("text", "display", etc.), then each cell is cast into that style.
 */
function parseArray(parser, _ref, style) {
  let {
    hskipBeforeAndAfter,
    addJot,
    cols,
    arraystretch,
    colSeparationType,
    autoTag,
    singleRow,
    emptySingleRow,
    maxNumCols,
    leqno
  } = _ref;
  parser.gullet.beginGroup();
  if (!singleRow) {
    // \cr is equivalent to \\ without the optional size argument (see below)
    // TODO: provide helpful error when \cr is used outside array environment
    parser.gullet.macros.set("\\cr", "\\\\\\relax");
  }

  // Get current arraystretch if it's not set by the environment
  if (!arraystretch) {
    const stretch = parser.gullet.expandMacroAsText("\\arraystretch");
    if (stretch == null) {
      // Default \arraystretch from lttab.dtx
      arraystretch = 1;
    } else {
      arraystretch = parseFloat(stretch);
      if (!arraystretch || arraystretch < 0) {
        throw new src_ParseError("Invalid \\arraystretch: " + stretch);
      }
    }
  }

  // Start group for first cell
  parser.gullet.beginGroup();
  let row = [];
  const body = [row];
  const rowGaps = [];
  const hLinesBeforeRow = [];
  const tags = autoTag != null ? [] : undefined;

  // amsmath uses \global\@eqnswtrue and \global\@eqnswfalse to represent
  // whether this row should have an equation number.  Simulate this with
  // a \@eqnsw macro set to 1 or 0.
  function beginRow() {
    if (autoTag) {
      parser.gullet.macros.set("\\@eqnsw", "1", true);
    }
  }
  function endRow() {
    if (tags) {
      if (parser.gullet.macros.get("\\df@tag")) {
        tags.push(parser.subparse([new Token("\\df@tag")]));
        parser.gullet.macros.set("\\df@tag", undefined, true);
      } else {
        tags.push(Boolean(autoTag) && parser.gullet.macros.get("\\@eqnsw") === "1");
      }
    }
  }
  beginRow();

  // Test for \hline at the top of the array.
  hLinesBeforeRow.push(getHLines(parser));
  while (true) {
    // eslint-disable-line no-constant-condition
    // Parse each cell in its own group (namespace)
    const cellBody = parser.parseExpression(false, singleRow ? "\\end" : "\\\\");
    parser.gullet.endGroup();
    parser.gullet.beginGroup();
    let cell = {
      type: "ordgroup",
      mode: parser.mode,
      body: cellBody
    };
    if (style) {
      cell = {
        type: "styling",
        mode: parser.mode,
        style,
        body: [cell]
      };
    }
    row.push(cell);
    const next = parser.fetch().text;
    if (next === "&") {
      if (maxNumCols && row.length === maxNumCols) {
        if (singleRow || colSeparationType) {
          // {equation} or {split}
          throw new src_ParseError("Too many tab characters: &", parser.nextToken);
        } else {
          // {array} environment
          parser.settings.reportNonstrict("textEnv", "Too few columns " + "specified in the {array} column argument.");
        }
      }
      parser.consume();
    } else if (next === "\\end") {
      endRow();
      // Arrays terminate newlines with `\crcr` which consumes a `\cr` if
      // the last line is empty.  However, AMS environments keep the
      // empty row if it's the only one.
      // NOTE: Currently, `cell` is the last item added into `row`.
      if (row.length === 1 && cell.type === "styling" && cell.body.length === 1 && cell.body[0].type === "ordgroup" && cell.body[0].body.length === 0 && (body.length > 1 || !emptySingleRow)) {
        body.pop();
      }
      if (hLinesBeforeRow.length < body.length + 1) {
        hLinesBeforeRow.push([]);
      }
      break;
    } else if (next === "\\\\") {
      parser.consume();
      let size;
      // \def\Let@{\let\\\math@cr}
      // \def\math@cr{...\math@cr@}
      // \def\math@cr@{\new@ifnextchar[\math@cr@@{\math@cr@@[\z@]}}
      // \def\math@cr@@[#1]{...\math@cr@@@...}
      // \def\math@cr@@@{\cr}
      if (parser.gullet.future().text !== " ") {
        size = parser.parseSizeGroup(true);
      }
      rowGaps.push(size ? size.value : null);
      endRow();

      // check for \hline(s) following the row separator
      hLinesBeforeRow.push(getHLines(parser));
      row = [];
      body.push(row);
      beginRow();
    } else {
      throw new src_ParseError("Expected & or \\\\ or \\cr or \\end", parser.nextToken);
    }
  }

  // End cell group
  parser.gullet.endGroup();
  // End array group defining \cr
  parser.gullet.endGroup();
  return {
    type: "array",
    mode: parser.mode,
    addJot,
    arraystretch,
    body,
    cols,
    rowGaps,
    hskipBeforeAndAfter,
    hLinesBeforeRow,
    colSeparationType,
    tags,
    leqno
  };
}

// Decides on a style for cells in an array according to whether the given
// environment name starts with the letter 'd'.
function dCellStyle(envName) {
  if (envName.slice(0, 1) === "d") {
    return "display";
  } else {
    return "text";
  }
}
const array_htmlBuilder = function (group, options) {
  let r;
  let c;
  const nr = group.body.length;
  const hLinesBeforeRow = group.hLinesBeforeRow;
  let nc = 0;
  const body = new Array(nr);
  const hlines = [];
  const ruleThickness = Math.max(
  // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
  options.fontMetrics().arrayRuleWidth, options.minRuleThickness // User override.
  );

  // Horizontal spacing
  const pt = 1 / options.fontMetrics().ptPerEm;
  let arraycolsep = 5 * pt; // default value, i.e. \arraycolsep in article.cls
  if (group.colSeparationType && group.colSeparationType === "small") {
    // We're in a {smallmatrix}. Default column space is \thickspace,
    // i.e. 5/18em = 0.2778em, per amsmath.dtx for {smallmatrix}.
    // But that needs adjustment because LaTeX applies \scriptstyle to the
    // entire array, including the colspace, but this function applies
    // \scriptstyle only inside each element.
    const localMultiplier = options.havingStyle(src_Style.SCRIPT).sizeMultiplier;
    arraycolsep = 0.2778 * (localMultiplier / options.sizeMultiplier);
  }

  // Vertical spacing
  const baselineskip = group.colSeparationType === "CD" ? calculateSize({
    number: 3,
    unit: "ex"
  }, options) : 12 * pt; // see size10.clo
  // Default \jot from ltmath.dtx
  // TODO(edemaine): allow overriding \jot via \setlength (#687)
  const jot = 3 * pt;
  const arrayskip = group.arraystretch * baselineskip;
  const arstrutHeight = 0.7 * arrayskip; // \strutbox in ltfsstrc.dtx and
  const arstrutDepth = 0.3 * arrayskip; // \@arstrutbox in lttab.dtx

  let totalHeight = 0;

  // Set a position for \hline(s) at the top of the array, if any.
  function setHLinePos(hlinesInGap) {
    for (let i = 0; i < hlinesInGap.length; ++i) {
      if (i > 0) {
        totalHeight += 0.25;
      }
      hlines.push({
        pos: totalHeight,
        isDashed: hlinesInGap[i]
      });
    }
  }
  setHLinePos(hLinesBeforeRow[0]);
  for (r = 0; r < group.body.length; ++r) {
    const inrow = group.body[r];
    let height = arstrutHeight; // \@array adds an \@arstrut
    let depth = arstrutDepth; // to each tow (via the template)

    if (nc < inrow.length) {
      nc = inrow.length;
    }
    const outrow = new Array(inrow.length);
    for (c = 0; c < inrow.length; ++c) {
      const elt = buildGroup(inrow[c], options);
      if (depth < elt.depth) {
        depth = elt.depth;
      }
      if (height < elt.height) {
        height = elt.height;
      }
      outrow[c] = elt;
    }
    const rowGap = group.rowGaps[r];
    let gap = 0;
    if (rowGap) {
      gap = calculateSize(rowGap, options);
      if (gap > 0) {
        // \@argarraycr
        gap += arstrutDepth;
        if (depth < gap) {
          depth = gap; // \@xargarraycr
        }
        gap = 0;
      }
    }
    // In AMS multiline environments such as aligned and gathered, rows
    // correspond to lines that have additional \jot added between lines
    // via \openup.
    // We simulate this by adding \jot depth to each row except the last.
    if (group.addJot && r < group.body.length - 1) {
      depth += jot;
    }
    outrow.height = height;
    outrow.depth = depth;
    totalHeight += height;
    outrow.pos = totalHeight;
    totalHeight += depth + gap; // \@yargarraycr
    body[r] = outrow;

    // Set a position for \hline(s), if any.
    setHLinePos(hLinesBeforeRow[r + 1]);
  }
  const offset = totalHeight / 2 + options.fontMetrics().axisHeight;
  const colDescriptions = group.cols || [];
  const cols = [];
  let colSep;
  let colDescrNum;
  const tagSpans = [];
  if (group.tags && group.tags.some(tag => tag)) {
    // An environment with manual tags and/or automatic equation numbers.
    // Create node(s), the latter of which trigger CSS counter increment.
    for (r = 0; r < nr; ++r) {
      const rw = body[r];
      const shift = rw.pos - offset;
      const tag = group.tags[r];
      let tagSpan;
      if (tag === true) {
        // automatic numbering
        tagSpan = makeSpan(["eqn-num"], [], options);
      } else if (tag === false) {
        // \nonumber/\notag or starred environment
        tagSpan = makeSpan([], [], options);
      } else {
        // manual \tag
        tagSpan = makeSpan([], buildExpression(tag, options, true), options);
      }
      tagSpan.depth = rw.depth;
      tagSpan.height = rw.height;
      tagSpans.push({
        type: "elem",
        elem: tagSpan,
        shift
      });
    }
  }
  for (c = 0, colDescrNum = 0;
  // Continue while either there are more columns or more column
  // descriptions, so trailing separators don't get lost.
  c < nc || colDescrNum < colDescriptions.length; ++c, ++colDescrNum) {
    var _colDescr3;
    let colDescr = colDescriptions[colDescrNum];
    let firstSeparator = true;
    while (((_colDescr = colDescr) == null ? void 0 : _colDescr.type) === "separator") {
      var _colDescr;
      // If there is more than one separator in a row, add a space
      // between them.
      if (!firstSeparator) {
        colSep = makeSpan(["arraycolsep"], []);
        colSep.style.width = makeEm(options.fontMetrics().doubleRuleSep);
        cols.push(colSep);
      }
      if (colDescr.separator === "|" || colDescr.separator === ":") {
        const lineType = colDescr.separator === "|" ? "solid" : "dashed";
        const separator = makeSpan(["vertical-separator"], [], options);
        separator.style.height = makeEm(totalHeight);
        separator.style.borderRightWidth = makeEm(ruleThickness);
        separator.style.borderRightStyle = lineType;
        separator.style.margin = "0 " + makeEm(-ruleThickness / 2);
        const shift = totalHeight - offset;
        if (shift) {
          separator.style.verticalAlign = makeEm(-shift);
        }
        cols.push(separator);
      } else {
        throw new src_ParseError("Invalid separator type: " + colDescr.separator);
      }
      colDescrNum++;
      colDescr = colDescriptions[colDescrNum];
      firstSeparator = false;
    }
    if (c >= nc) {
      continue;
    }
    let sepwidth;
    if (c > 0 || group.hskipBeforeAndAfter) {
      var _colDescr$pregap, _colDescr2;
      sepwidth = (_colDescr$pregap = (_colDescr2 = colDescr) == null ? void 0 : _colDescr2.pregap) != null ? _colDescr$pregap : arraycolsep;
      if (sepwidth !== 0) {
        colSep = makeSpan(["arraycolsep"], []);
        colSep.style.width = makeEm(sepwidth);
        cols.push(colSep);
      }
    }
    const colElems = [];
    for (r = 0; r < nr; ++r) {
      const row = body[r];
      const elem = row[c];
      if (!elem) {
        continue;
      }
      const shift = row.pos - offset;
      elem.depth = row.depth;
      elem.height = row.height;
      colElems.push({
        type: "elem",
        elem: elem,
        shift: shift
      });
    }
    const colVList = makeVList({
      positionType: "individualShift",
      children: colElems
    }, options);
    const colSpan = makeSpan(["col-align-" + (((_colDescr3 = colDescr) == null ? void 0 : _colDescr3.align) || "c")], [colVList]);
    cols.push(colSpan);
    if (c < nc - 1 || group.hskipBeforeAndAfter) {
      var _colDescr$postgap, _colDescr4;
      sepwidth = (_colDescr$postgap = (_colDescr4 = colDescr) == null ? void 0 : _colDescr4.postgap) != null ? _colDescr$postgap : arraycolsep;
      if (sepwidth !== 0) {
        colSep = makeSpan(["arraycolsep"], []);
        colSep.style.width = makeEm(sepwidth);
        cols.push(colSep);
      }
    }
  }
  let tableBody = makeSpan(["mtable"], cols);

  // Add \hline(s), if any.
  if (hlines.length > 0) {
    const line = makeLineSpan("hline", options, ruleThickness);
    const dashes = makeLineSpan("hdashline", options, ruleThickness);
    const vListElems = [{
      type: "elem",
      elem: tableBody,
      shift: 0
    }];
    while (hlines.length > 0) {
      const hline = hlines.pop();
      const lineShift = hline.pos - offset;
      if (hline.isDashed) {
        vListElems.push({
          type: "elem",
          elem: dashes,
          shift: lineShift
        });
      } else {
        vListElems.push({
          type: "elem",
          elem: line,
          shift: lineShift
        });
      }
    }
    tableBody = makeVList({
      positionType: "individualShift",
      children: vListElems
    }, options);
  }
  if (tagSpans.length === 0) {
    return makeSpan(["mord"], [tableBody], options);
  } else {
    const eqnNumCol = makeVList({
      positionType: "individualShift",
      children: tagSpans
    }, options);
    const tagCol = makeSpan(["tag"], [eqnNumCol], options);
    return makeFragment([tableBody, tagCol]);
  }
};
const alignMap = {
  c: "center ",
  l: "left ",
  r: "right "
};
const array_mathmlBuilder = function (group, options) {
  const tbl = [];
  const glue = new MathNode("mtd", [], ["mtr-glue"]);
  const tag = new MathNode("mtd", [], ["mml-eqn-num"]);
  for (let i = 0; i < group.body.length; i++) {
    const rw = group.body[i];
    const row = [];
    for (let j = 0; j < rw.length; j++) {
      row.push(new MathNode("mtd", [buildMathML_buildGroup(rw[j], options)]));
    }
    if (group.tags && group.tags[i]) {
      row.unshift(glue);
      row.push(glue);
      if (group.leqno) {
        row.unshift(tag);
      } else {
        row.push(tag);
      }
    }
    tbl.push(new MathNode("mtr", row));
  }
  let table = new MathNode("mtable", tbl);

  // Set column alignment, row spacing, column spacing, and
  // array lines by setting attributes on the table element.

  // Set the row spacing. In MathML, we specify a gap distance.
  // We do not use rowGap[] because MathML automatically increases
  // cell height with the height/depth of the element content.

  // LaTeX \arraystretch multiplies the row baseline-to-baseline distance.
  // We simulate this by adding (arraystretch - 1)em to the gap. This
  // does a reasonable job of adjusting arrays containing 1 em tall content.

  // The 0.16 and 0.09 values are found empirically. They produce an array
  // similar to LaTeX and in which content does not interfere with \hlines.
  const gap = group.arraystretch === 0.5 ? 0.1 // {smallmatrix}, {subarray}
  : 0.16 + group.arraystretch - 1 + (group.addJot ? 0.09 : 0);
  table.setAttribute("rowspacing", makeEm(gap));

  // MathML table lines go only between cells.
  // To place a line on an edge we'll use <menclose>, if necessary.
  let menclose = "";
  let align = "";
  if (group.cols && group.cols.length > 0) {
    // Find column alignment, column spacing, and  vertical lines.
    const cols = group.cols;
    let columnLines = "";
    let prevTypeWasAlign = false;
    let iStart = 0;
    let iEnd = cols.length;
    if (cols[0].type === "separator") {
      menclose += "top ";
      iStart = 1;
    }
    if (cols[cols.length - 1].type === "separator") {
      menclose += "bottom ";
      iEnd -= 1;
    }
    for (let i = iStart; i < iEnd; i++) {
      const col = cols[i];
      if (col.type === "align") {
        align += alignMap[col.align];
        if (prevTypeWasAlign) {
          columnLines += "none ";
        }
        prevTypeWasAlign = true;
      } else if (col.type === "separator") {
        // MathML accepts only single lines between cells.
        // So we read only the first of consecutive separators.
        if (prevTypeWasAlign) {
          columnLines += col.separator === "|" ? "solid " : "dashed ";
          prevTypeWasAlign = false;
        }
      }
    }
    table.setAttribute("columnalign", align.trim());
    if (/[sd]/.test(columnLines)) {
      table.setAttribute("columnlines", columnLines.trim());
    }
  }

  // Set column spacing.
  if (group.colSeparationType === "align") {
    const cols = group.cols || [];
    let spacing = "";
    for (let i = 1; i < cols.length; i++) {
      spacing += i % 2 ? "0em " : "1em ";
    }
    table.setAttribute("columnspacing", spacing.trim());
  } else if (group.colSeparationType === "alignat" || group.colSeparationType === "gather") {
    table.setAttribute("columnspacing", "0em");
  } else if (group.colSeparationType === "small") {
    table.setAttribute("columnspacing", "0.2778em");
  } else if (group.colSeparationType === "CD") {
    table.setAttribute("columnspacing", "0.5em");
  } else {
    table.setAttribute("columnspacing", "1em");
  }

  // Address \hline and \hdashline
  let rowLines = "";
  const hlines = group.hLinesBeforeRow;
  menclose += hlines[0].length > 0 ? "left " : "";
  menclose += hlines[hlines.length - 1].length > 0 ? "right " : "";
  for (let i = 1; i < hlines.length - 1; i++) {
    rowLines += hlines[i].length === 0 ? "none "
    // MathML accepts only a single line between rows. Read one element.
    : hlines[i][0] ? "dashed " : "solid ";
  }
  if (/[sd]/.test(rowLines)) {
    table.setAttribute("rowlines", rowLines.trim());
  }
  if (menclose !== "") {
    table = new MathNode("menclose", [table]);
    table.setAttribute("notation", menclose.trim());
  }
  if (group.arraystretch && group.arraystretch < 1) {
    // A small array. Wrap in scriptstyle so row gap is not too large.
    table = new MathNode("mstyle", [table]);
    table.setAttribute("scriptlevel", "1");
  }
  return table;
};

// Convenience function for align, align*, aligned, alignat, alignat*, alignedat.
const alignedHandler = function (context, args) {
  if (!context.envName.includes("ed")) {
    validateAmsEnvironmentContext(context);
  }
  const cols = [];
  const separationType = context.envName.includes("at") ? "alignat" : "align";
  const isSplit = context.envName === "split";
  const res = parseArray(context.parser, {
    cols,
    addJot: true,
    autoTag: isSplit ? undefined : getAutoTag(context.envName),
    emptySingleRow: true,
    colSeparationType: separationType,
    maxNumCols: isSplit ? 2 : undefined,
    leqno: context.parser.settings.leqno
  }, "display");

  // Determining number of columns.
  // 1. If the first argument is given, we use it as a number of columns,
  //    and makes sure that each row doesn't exceed that number.
  // 2. Otherwise, just count number of columns = maximum number
  //    of cells in each row ("aligned" mode -- isAligned will be true).
  //
  // At the same time, prepend empty group {} at beginning of every second
  // cell in each row (starting with second cell) so that operators become
  // binary.  This behavior is implemented in amsmath's \start@aligned.
  let numMaths = 0;
  let numCols = 0;
  const emptyGroup = {
    type: "ordgroup",
    mode: context.mode,
    body: []
  };
  if (args[0] && args[0].type === "ordgroup") {
    let arg0 = "";
    for (let i = 0; i < args[0].body.length; i++) {
      const textord = assertNodeType(args[0].body[i], "textord");
      arg0 += textord.text;
    }
    numMaths = Number(arg0);
    numCols = numMaths * 2;
  }
  const isAligned = !numCols;
  res.body.forEach(function (row) {
    for (let i = 1; i < row.length; i += 2) {
      // Modify ordgroup node within styling node
      const styling = assertNodeType(row[i], "styling");
      const ordgroup = assertNodeType(styling.body[0], "ordgroup");
      ordgroup.body.unshift(emptyGroup);
    }
    if (!isAligned) {
      // Case 1
      const curMaths = row.length / 2;
      if (numMaths < curMaths) {
        throw new src_ParseError("Too many math in a row: " + ("expected " + numMaths + ", but got " + curMaths), row[0]);
      }
    } else if (numCols < row.length) {
      // Case 2
      numCols = row.length;
    }
  });

  // Adjusting alignment.
  // In aligned mode, we add one \qquad between columns;
  // otherwise we add nothing.
  for (let i = 0; i < numCols; ++i) {
    let align = "r";
    let pregap = 0;
    if (i % 2 === 1) {
      align = "l";
    } else if (i > 0 && isAligned) {
      // "aligned" mode.
      pregap = 1; // add one \quad
    }
    cols[i] = {
      type: "align",
      align: align,
      pregap: pregap,
      postgap: 0
    };
  }
  res.colSeparationType = isAligned ? "align" : "alignat";
  return res;
};

// Arrays are part of LaTeX, defined in lttab.dtx so its documentation
// is part of the source2e.pdf file of LaTeX2e source documentation.
// {darray} is an {array} environment where cells are set in \displaystyle,
// as defined in nccmath.sty.
defineEnvironment({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(context, args) {
    // Since no types are specified above, the two possibilities are
    // - The argument is wrapped in {} or [], in which case Parser's
    //   parseGroup() returns an "ordgroup" wrapping some symbol node.
    // - The argument is a bare symbol node.
    const symNode = checkSymbolNodeType(args[0]);
    const colalign = symNode ? [args[0]] : assertNodeType(args[0], "ordgroup").body;
    const cols = colalign.map(function (nde) {
      const node = assertSymbolNodeType(nde);
      const ca = node.text;
      if ("lcr".includes(ca)) {
        return {
          type: "align",
          align: ca
        };
      } else if (ca === "|") {
        return {
          type: "separator",
          separator: "|"
        };
      } else if (ca === ":") {
        return {
          type: "separator",
          separator: ":"
        };
      }
      throw new src_ParseError("Unknown column alignment: " + ca, nde);
    });
    const res = {
      cols,
      hskipBeforeAndAfter: true,
      // \@preamble in lttab.dtx
      maxNumCols: cols.length
    };
    return parseArray(context.parser, res, dCellStyle(context.envName));
  },
  htmlBuilder: array_htmlBuilder,
  mathmlBuilder: array_mathmlBuilder
});

// The matrix environments of amsmath builds on the array environment
// of LaTeX, which is discussed above.
// The mathtools package adds starred versions of the same environments.
// These have an optional argument to choose left|center|right justification.
defineEnvironment({
  type: "array",
  names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
  props: {
    numArgs: 0
  },
  handler(context) {
    const delimiters = {
      "matrix": null,
      "pmatrix": ["(", ")"],
      "bmatrix": ["[", "]"],
      "Bmatrix": ["\\{", "\\}"],
      "vmatrix": ["|", "|"],
      "Vmatrix": ["\\Vert", "\\Vert"]
    }[context.envName.replace("*", "")];
    // \hskip -\arraycolsep in amsmath
    let colAlign = "c";
    const payload = {
      hskipBeforeAndAfter: false,
      cols: [{
        type: "align",
        align: colAlign
      }]
    };
    if (context.envName.charAt(context.envName.length - 1) === "*") {
      // It's one of the mathtools starred functions.
      // Parse the optional alignment argument.
      const parser = context.parser;
      parser.consumeSpaces();
      if (parser.fetch().text === "[") {
        parser.consume();
        parser.consumeSpaces();
        colAlign = parser.fetch().text;
        if (!"lcr".includes(colAlign)) {
          throw new src_ParseError("Expected l or c or r", parser.nextToken);
        }
        parser.consume();
        parser.consumeSpaces();
        parser.expect("]");
        parser.consume();
        payload.cols = [{
          type: "align",
          align: colAlign
        }];
      }
    }
    const res = parseArray(context.parser, payload, dCellStyle(context.envName));
    // Populate cols with the correct number of column alignment specs.
    const numCols = Math.max(0, ...res.body.map(row => row.length));
    res.cols = new Array(numCols).fill({
      type: "align",
      align: colAlign
    });
    return delimiters ? {
      type: "leftright",
      mode: context.mode,
      body: [res],
      left: delimiters[0],
      right: delimiters[1],
      rightColor: undefined // \right uninfluenced by \color in array
    } : res;
  },
  htmlBuilder: array_htmlBuilder,
  mathmlBuilder: array_mathmlBuilder
});
defineEnvironment({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(context) {
    const payload = {
      arraystretch: 0.5
    };
    const res = parseArray(context.parser, payload, "script");
    res.colSeparationType = "small";
    return res;
  },
  htmlBuilder: array_htmlBuilder,
  mathmlBuilder: array_mathmlBuilder
});
defineEnvironment({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(context, args) {
    // Parsing of {subarray} is similar to {array}
    const symNode = checkSymbolNodeType(args[0]);
    const colalign = symNode ? [args[0]] : assertNodeType(args[0], "ordgroup").body;
    const cols = colalign.map(function (nde) {
      const node = assertSymbolNodeType(nde);
      const ca = node.text;
      // {subarray} only recognizes "l" & "c"
      if ("lc".includes(ca)) {
        return {
          type: "align",
          align: ca
        };
      }
      throw new src_ParseError("Unknown column alignment: " + ca, nde);
    });
    if (cols.length > 1) {
      throw new src_ParseError("{subarray} can contain only one column");
    }
    const payload = {
      cols,
      hskipBeforeAndAfter: false,
      arraystretch: 0.5
    };
    const res = parseArray(context.parser, payload, "script");
    if (res.body.length > 0 && res.body[0].length > 1) {
      throw new src_ParseError("{subarray} can contain only one column");
    }
    return res;
  },
  htmlBuilder: array_htmlBuilder,
  mathmlBuilder: array_mathmlBuilder
});

// A cases environment (in amsmath.sty) is almost equivalent to
// \def\arraystretch{1.2}%
// \left\{\begin{array}{@{}l@{\quad}l@{}} … \end{array}\right.
// {dcases} is a {cases} environment where cells are set in \displaystyle,
// as defined in mathtools.sty.
// {rcases} is another mathtools environment. It's brace is on the right side.
defineEnvironment({
  type: "array",
  names: ["cases", "dcases", "rcases", "drcases"],
  props: {
    numArgs: 0
  },
  handler(context) {
    const payload = {
      arraystretch: 1.2,
      cols: [{
        type: "align",
        align: "l",
        pregap: 0,
        // TODO(kevinb) get the current style.
        // For now we use the metrics for TEXT style which is what we were
        // doing before.  Before attempting to get the current style we
        // should look at TeX's behavior especially for \over and matrices.
        postgap: 1.0 /* 1em quad */
      }, {
        type: "align",
        align: "l",
        pregap: 0,
        postgap: 0
      }]
    };
    const res = parseArray(context.parser, payload, dCellStyle(context.envName));
    return {
      type: "leftright",
      mode: context.mode,
      body: [res],
      left: context.envName.includes("r") ? "." : "\\{",
      right: context.envName.includes("r") ? "\\}" : ".",
      rightColor: undefined
    };
  },
  htmlBuilder: array_htmlBuilder,
  mathmlBuilder: array_mathmlBuilder
});

// In the align environment, one uses ampersands, &, to specify number of
// columns in each row, and to locate spacing between each column.
// align gets automatic numbering. align* and aligned do not.
// The alignedat environment can be used in math mode.
// Note that we assume \nomallineskiplimit to be zero,
// so that \strut@ is the same as \strut.
defineEnvironment({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: alignedHandler,
  htmlBuilder: array_htmlBuilder,
  mathmlBuilder: array_mathmlBuilder
});

// A gathered environment is like an array environment with one centered
// column, but where rows are considered lines so get \jot line spacing
// and contents are set in \displaystyle.
defineEnvironment({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(context) {
    if (gatherEnvironments.has(context.envName)) {
      validateAmsEnvironmentContext(context);
    }
    const res = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: true,
      colSeparationType: "gather",
      autoTag: getAutoTag(context.envName),
      emptySingleRow: true,
      leqno: context.parser.settings.leqno
    };
    return parseArray(context.parser, res, "display");
  },
  htmlBuilder: array_htmlBuilder,
  mathmlBuilder: array_mathmlBuilder
});

// alignat environment is like an align environment, but one must explicitly
// specify maximum number of columns in each row, and can adjust spacing between
// each columns.
defineEnvironment({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: alignedHandler,
  htmlBuilder: array_htmlBuilder,
  mathmlBuilder: array_mathmlBuilder
});
defineEnvironment({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(context) {
    validateAmsEnvironmentContext(context);
    const res = {
      autoTag: getAutoTag(context.envName),
      emptySingleRow: true,
      singleRow: true,
      maxNumCols: 1,
      leqno: context.parser.settings.leqno
    };
    return parseArray(context.parser, res, "display");
  },
  htmlBuilder: array_htmlBuilder,
  mathmlBuilder: array_mathmlBuilder
});
defineEnvironment({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(context) {
    validateAmsEnvironmentContext(context);
    return parseCD(context.parser);
  },
  htmlBuilder: array_htmlBuilder,
  mathmlBuilder: array_mathmlBuilder
});
defineMacro("\\nonumber", "\\gdef\\@eqnsw{0}");
defineMacro("\\notag", "\\nonumber");

// Catch \hline outside array environment
defineFunction({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  props: {
    numArgs: 0,
    allowedInText: true,
    allowedInMath: true
  },
  handler(context, args) {
    throw new src_ParseError(context.funcName + " valid only within array environment");
  }
});
;// ./src/environments.ts

const environments = _environments;
/* harmony default export */ var src_environments = (environments);

// All environment definitions should be imported below

;// ./src/functions/environment.ts





// Environment delimiters. HTML/MathML rendering is defined in the corresponding
// defineEnvironment definitions.
defineFunction({
  type: "environment",
  names: ["\\begin", "\\end"],
  props: {
    numArgs: 1,
    argTypes: ["text"]
  },
  handler(_ref, args) {
    let {
      parser,
      funcName
    } = _ref;
    const nameGroup = args[0];
    if (nameGroup.type !== "ordgroup") {
      throw new src_ParseError("Invalid environment name", nameGroup);
    }
    let envName = "";
    for (let i = 0; i < nameGroup.body.length; ++i) {
      envName += assertNodeType(nameGroup.body[i], "textord").text;
    }
    if (funcName === "\\begin") {
      // begin...end is similar to left...right
      if (!src_environments.hasOwnProperty(envName)) {
        throw new src_ParseError("No such environment: " + envName, nameGroup);
      }
      // Build the environment object. Arguments and other information will
      // be made available to the begin and end methods using properties.
      const env = src_environments[envName];
      const {
        args,
        optArgs
      } = parser.parseArguments("\\begin{" + envName + "}", env);
      const context = {
        mode: parser.mode,
        envName,
        parser
      };
      const result = env.handler(context, args, optArgs);
      parser.expect("\\end", false);
      const endNameToken = parser.nextToken;
      const end = assertNodeType(parser.parseFunction(), "environment");
      if (end.name !== envName) {
        throw new src_ParseError("Mismatch: \\begin{" + envName + "} matched by \\end{" + end.name + "}", endNameToken);
      }
      // TODO(ts), "environment" handler returns an environment ParseNode
      return result;
    }
    return {
      type: "environment",
      mode: parser.mode,
      name: envName,
      nameGroup
    };
  }
});
;// ./src/functions/font.ts
// TODO(kevinb): implement \\sl and \\sc






const font_htmlBuilder = (group, options) => {
  const font = group.font;
  const newOptions = options.withFont(font);
  return buildGroup(group.body, newOptions);
};
const font_mathmlBuilder = (group, options) => {
  const font = group.font;
  const newOptions = options.withFont(font);
  return buildMathML_buildGroup(group.body, newOptions);
};
const fontAliases = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak",
  "\\bm": "\\boldsymbol"
};
defineFunction({
  type: "font",
  names: [
  // styles, except \boldsymbol defined below
  "\\mathrm", "\\mathit", "\\mathbf", "\\mathnormal", "\\mathsfit",
  // families
  "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt",
  // aliases, except \bm defined below
  "\\Bbb", "\\bold", "\\frak"],
  props: {
    numArgs: 1,
    allowedInArgument: true
  },
  handler: (_ref, args) => {
    let {
      parser,
      funcName
    } = _ref;
    const body = normalizeArgument(args[0]);
    let func = funcName;
    if (func in fontAliases) {
      func = fontAliases[func];
    }
    return {
      type: "font",
      mode: parser.mode,
      font: func.slice(1),
      body
    };
  },
  htmlBuilder: font_htmlBuilder,
  mathmlBuilder: font_mathmlBuilder
});
defineFunction({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: {
    numArgs: 1
  },
  handler: (_ref2, args) => {
    let {
      parser
    } = _ref2;
    const body = args[0];
    // amsbsy.sty's \boldsymbol uses \binrel spacing to inherit the
    // argument's bin|rel|ord status
    return {
      type: "mclass",
      mode: parser.mode,
      mclass: binrelClass(body),
      body: [{
        type: "font",
        mode: parser.mode,
        font: "boldsymbol",
        body
      }],
      isCharacterBox: isCharacterBox(body)
    };
  }
});

// Old font changing functions
defineFunction({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  props: {
    numArgs: 0,
    allowedInText: true
  },
  handler: (_ref3, args) => {
    let {
      parser,
      funcName,
      breakOnTokenText
    } = _ref3;
    const {
      mode
    } = parser;
    const body = parser.parseExpression(true, breakOnTokenText);
    const style = "math" + funcName.slice(1);
    return {
      type: "font",
      mode: mode,
      font: style,
      body: {
        type: "ordgroup",
        mode: parser.mode,
        body
      }
    };
  },
  htmlBuilder: font_htmlBuilder,
  mathmlBuilder: font_mathmlBuilder
});
;// ./src/functions/genfrac.ts









const genfrac_htmlBuilder = (group, options) => {
  // Fractions are handled in the TeXbook on pages 444-445, rules 15(a-e).
  const style = options.style;
  const nstyle = style.fracNum();
  const dstyle = style.fracDen();
  let newOptions;
  newOptions = options.havingStyle(nstyle);
  const numerm = buildGroup(group.numer, newOptions, options);
  if (group.continued) {
    // \cfrac inserts a \strut into the numerator.
    // Get \strut dimensions from TeXbook page 353.
    const hStrut = 8.5 / options.fontMetrics().ptPerEm;
    const dStrut = 3.5 / options.fontMetrics().ptPerEm;
    numerm.height = numerm.height < hStrut ? hStrut : numerm.height;
    numerm.depth = numerm.depth < dStrut ? dStrut : numerm.depth;
  }
  newOptions = options.havingStyle(dstyle);
  const denomm = buildGroup(group.denom, newOptions, options);
  let rule;
  let ruleWidth;
  let ruleSpacing;
  if (group.hasBarLine) {
    if (group.barSize) {
      ruleWidth = calculateSize(group.barSize, options);
      rule = makeLineSpan("frac-line", options, ruleWidth);
    } else {
      rule = makeLineSpan("frac-line", options);
    }
    ruleWidth = rule.height;
    ruleSpacing = rule.height;
  } else {
    rule = null;
    ruleWidth = 0;
    ruleSpacing = options.fontMetrics().defaultRuleThickness;
  }

  // Rule 15b
  let numShift;
  let clearance;
  let denomShift;
  if (style.size === src_Style.DISPLAY.size) {
    numShift = options.fontMetrics().num1;
    if (ruleWidth > 0) {
      clearance = 3 * ruleSpacing;
    } else {
      clearance = 7 * ruleSpacing;
    }
    denomShift = options.fontMetrics().denom1;
  } else {
    if (ruleWidth > 0) {
      numShift = options.fontMetrics().num2;
      clearance = ruleSpacing;
    } else {
      numShift = options.fontMetrics().num3;
      clearance = 3 * ruleSpacing;
    }
    denomShift = options.fontMetrics().denom2;
  }
  let frac;
  if (!rule) {
    // Rule 15c
    const candidateClearance = numShift - numerm.depth - (denomm.height - denomShift);
    if (candidateClearance < clearance) {
      numShift += 0.5 * (clearance - candidateClearance);
      denomShift += 0.5 * (clearance - candidateClearance);
    }
    frac = makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: denomm,
        shift: denomShift
      }, {
        type: "elem",
        elem: numerm,
        shift: -numShift
      }]
    }, options);
  } else {
    // Rule 15d
    const axisHeight = options.fontMetrics().axisHeight;
    if (numShift - numerm.depth - (axisHeight + 0.5 * ruleWidth) < clearance) {
      numShift += clearance - (numShift - numerm.depth - (axisHeight + 0.5 * ruleWidth));
    }
    if (axisHeight - 0.5 * ruleWidth - (denomm.height - denomShift) < clearance) {
      denomShift += clearance - (axisHeight - 0.5 * ruleWidth - (denomm.height - denomShift));
    }
    const midShift = -(axisHeight - 0.5 * ruleWidth);
    frac = makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: denomm,
        shift: denomShift
      }, {
        type: "elem",
        elem: rule,
        shift: midShift
      }, {
        type: "elem",
        elem: numerm,
        shift: -numShift
      }]
    }, options);
  }

  // Since we manually change the style sometimes (with \dfrac or \tfrac),
  // account for the possible size change here.
  newOptions = options.havingStyle(style);
  frac.height *= newOptions.sizeMultiplier / options.sizeMultiplier;
  frac.depth *= newOptions.sizeMultiplier / options.sizeMultiplier;

  // Rule 15e
  let delimSize;
  if (style.size === src_Style.DISPLAY.size) {
    delimSize = options.fontMetrics().delim1;
  } else if (style.size === src_Style.SCRIPTSCRIPT.size) {
    delimSize = options.havingStyle(src_Style.SCRIPT).fontMetrics().delim2;
  } else {
    delimSize = options.fontMetrics().delim2;
  }
  let leftDelim;
  let rightDelim;
  if (group.leftDelim == null) {
    leftDelim = makeNullDelimiter(options, ["mopen"]);
  } else {
    leftDelim = makeCustomSizedDelim(group.leftDelim, delimSize, true, options.havingStyle(style), group.mode, ["mopen"]);
  }
  if (group.continued) {
    rightDelim = makeSpan([]); // zero width for \cfrac
  } else if (group.rightDelim == null) {
    rightDelim = makeNullDelimiter(options, ["mclose"]);
  } else {
    rightDelim = makeCustomSizedDelim(group.rightDelim, delimSize, true, options.havingStyle(style), group.mode, ["mclose"]);
  }
  return makeSpan(["mord"].concat(newOptions.sizingClasses(options)), [leftDelim, makeSpan(["mfrac"], [frac]), rightDelim], options);
};
const genfrac_mathmlBuilder = (group, options) => {
  const node = new MathNode("mfrac", [buildMathML_buildGroup(group.numer, options), buildMathML_buildGroup(group.denom, options)]);
  if (!group.hasBarLine) {
    node.setAttribute("linethickness", "0px");
  } else if (group.barSize) {
    const ruleWidth = calculateSize(group.barSize, options);
    node.setAttribute("linethickness", makeEm(ruleWidth));
  }
  if (group.leftDelim != null || group.rightDelim != null) {
    const withDelims = [];
    if (group.leftDelim != null) {
      const leftOp = new MathNode("mo", [new TextNode(group.leftDelim.replace("\\", ""))]);
      leftOp.setAttribute("fence", "true");
      withDelims.push(leftOp);
    }
    withDelims.push(node);
    if (group.rightDelim != null) {
      const rightOp = new MathNode("mo", [new TextNode(group.rightDelim.replace("\\", ""))]);
      rightOp.setAttribute("fence", "true");
      withDelims.push(rightOp);
    }
    return makeRow(withDelims);
  }
  return node;
};
const wrapWithStyle = (frac, style) => {
  if (!style) {
    return frac;
  }
  const wrapper = {
    type: "styling",
    mode: frac.mode,
    style,
    body: [frac]
  };

  // @ts-ignore defineFunction handler needs to return ParseNode<"genfrac">
  return wrapper;
};
defineFunction({
  type: "genfrac",
  names: ["\\cfrac", "\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac",
  // can’t be entered directly
  "\\\\bracefrac", "\\\\brackfrac" // ditto
  ],
  props: {
    numArgs: 2,
    allowedInArgument: true
  },
  handler: (_ref, args) => {
    let {
      parser,
      funcName
    } = _ref;
    const numer = args[0];
    const denom = args[1];
    let hasBarLine;
    let leftDelim = null;
    let rightDelim = null;
    switch (funcName) {
      case "\\cfrac":
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        hasBarLine = true;
        break;
      case "\\\\atopfrac":
        hasBarLine = false;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        hasBarLine = false;
        leftDelim = "(";
        rightDelim = ")";
        break;
      case "\\\\bracefrac":
        hasBarLine = false;
        leftDelim = "\\{";
        rightDelim = "\\}";
        break;
      case "\\\\brackfrac":
        hasBarLine = false;
        leftDelim = "[";
        rightDelim = "]";
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    const continued = funcName === "\\cfrac";
    let style = null;
    if (continued || funcName.startsWith("\\d")) {
      style = "display";
    } else if (funcName.startsWith("\\t")) {
      style = "text";
    }
    return wrapWithStyle({
      type: "genfrac",
      mode: parser.mode,
      numer,
      denom,
      continued,
      hasBarLine,
      leftDelim,
      rightDelim,
      barSize: null
    }, style);
  },
  htmlBuilder: genfrac_htmlBuilder,
  mathmlBuilder: genfrac_mathmlBuilder
});

// Infix generalized fractions -- these are not rendered directly, but replaced
// immediately by one of the variants above.
defineFunction({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  props: {
    numArgs: 0,
    infix: true
  },
  handler(_ref2) {
    let {
      parser,
      funcName,
      token
    } = _ref2;
    let replaceWith;
    switch (funcName) {
      case "\\over":
        replaceWith = "\\frac";
        break;
      case "\\choose":
        replaceWith = "\\binom";
        break;
      case "\\atop":
        replaceWith = "\\\\atopfrac";
        break;
      case "\\brace":
        replaceWith = "\\\\bracefrac";
        break;
      case "\\brack":
        replaceWith = "\\\\brackfrac";
        break;
      default:
        throw new Error("Unrecognized infix genfrac command");
    }
    return {
      type: "infix",
      mode: parser.mode,
      replaceWith,
      token
    };
  }
});
const stylArray = ["display", "text", "script", "scriptscript"];
const delimFromValue = function (delimString) {
  let delim = null;
  if (delimString.length > 0) {
    delim = delimString;
    delim = delim === "." ? null : delim;
  }
  return delim;
};
defineFunction({
  type: "genfrac",
  names: ["\\genfrac"],
  props: {
    numArgs: 6,
    allowedInArgument: true,
    argTypes: ["math", "math", "size", "text", "math", "math"]
  },
  handler(_ref3, args) {
    let {
      parser
    } = _ref3;
    const numer = args[4];
    const denom = args[5];

    // Look into the parse nodes to get the desired delimiters.
    const leftNode = normalizeArgument(args[0]);
    const leftDelim = leftNode.type === "atom" && leftNode.family === "open" ? delimFromValue(leftNode.text) : null;
    const rightNode = normalizeArgument(args[1]);
    const rightDelim = rightNode.type === "atom" && rightNode.family === "close" ? delimFromValue(rightNode.text) : null;
    const barNode = assertNodeType(args[2], "size");
    let hasBarLine;
    let barSize = null;
    if (barNode.isBlank) {
      // \genfrac acts differently than \above.
      // \genfrac treats an empty size group as a signal to use a
      // standard bar size. \above would see size = 0 and omit the bar.
      hasBarLine = true;
    } else {
      barSize = barNode.value;
      hasBarLine = barSize.number > 0;
    }

    // Find out if we want displaystyle, textstyle, etc.
    let size = null;
    let styl = args[3];
    if (styl.type === "ordgroup") {
      if (styl.body.length > 0) {
        const textOrd = assertNodeType(styl.body[0], "textord");
        size = stylArray[Number(textOrd.text)];
      }
    } else {
      styl = assertNodeType(styl, "textord");
      size = stylArray[Number(styl.text)];
    }
    return wrapWithStyle({
      type: "genfrac",
      mode: parser.mode,
      numer,
      denom,
      continued: false,
      hasBarLine,
      barSize,
      leftDelim,
      rightDelim
    }, size);
  }
});

// \above is an infix fraction that also defines a fraction bar size.
defineFunction({
  type: "infix",
  names: ["\\above"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    infix: true
  },
  handler(_ref4, args) {
    let {
      parser,
      funcName,
      token
    } = _ref4;
    return {
      type: "infix",
      mode: parser.mode,
      replaceWith: "\\\\abovefrac",
      size: assertNodeType(args[0], "size").value,
      token
    };
  }
});
defineFunction({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  props: {
    numArgs: 3,
    argTypes: ["math", "size", "math"]
  },
  handler: (_ref5, args) => {
    let {
      parser,
      funcName
    } = _ref5;
    const numer = args[0];
    const barSize = assertNodeType(args[1], "infix").size;
    if (!barSize) {
      throw new Error("\\\\abovefrac expected size, but got " + String(barSize));
    }
    const denom = args[2];
    const hasBarLine = barSize.number > 0;
    return {
      type: "genfrac",
      mode: parser.mode,
      numer,
      denom,
      continued: false,
      hasBarLine,
      barSize,
      leftDelim: null,
      rightDelim: null
    };
  }
});
;// ./src/functions/horizBrace.ts








// NOTE: Unlike most `htmlBuilder`s, this one handles not only "horizBrace", but
// also "supsub" since an over/underbrace can affect super/subscripting.
const horizBrace_htmlBuilder = (grp, options) => {
  const style = options.style;

  // Pull out the `ParseNode<"horizBrace">` if `grp` is a "supsub" node.
  let supSubGroup;
  let group;
  if (grp.type === "supsub") {
    // Ref: LaTeX source2e: }}}}\limits}
    // i.e. LaTeX treats the brace similar to an op and passes it
    // with \limits, so we need to assign supsub style.
    supSubGroup = grp.sup ? buildGroup(grp.sup, options.havingStyle(style.sup()), options) : buildGroup(grp.sub, options.havingStyle(style.sub()), options);
    group = assertNodeType(grp.base, "horizBrace");
  } else {
    group = assertNodeType(grp, "horizBrace");
  }

  // Build the base group
  const body = buildGroup(group.base, options.havingBaseStyle(src_Style.DISPLAY));

  // Create the stretchy element
  const braceBody = stretchySvg(group, options);

  // Generate the vlist, with the appropriate kerns        ┏━━━━━━━━┓
  // This first vlist contains the content and the brace:   equation
  let vlist;
  if (group.isOver) {
    vlist = makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: body
      }, {
        type: "kern",
        size: 0.1
      }, {
        type: "elem",
        elem: braceBody
      }]
    }, options);
    // TODO(ts): Replace this with passing "svg-align" into makeVList.
    vlist.children[0].children[0].children[1].classes.push("svg-align");
  } else {
    vlist = makeVList({
      positionType: "bottom",
      positionData: body.depth + 0.1 + braceBody.height,
      children: [{
        type: "elem",
        elem: braceBody
      }, {
        type: "kern",
        size: 0.1
      }, {
        type: "elem",
        elem: body
      }]
    }, options);
    // TODO(ts): Replace this with passing "svg-align" into makeVList.
    vlist.children[0].children[0].children[0].classes.push("svg-align");
  }
  if (supSubGroup) {
    // To write the supsub, wrap the first vlist in another vlist:
    // They can't all go in the same vlist, because the note might be
    // wider than the equation. We want the equation to control the
    // brace width.

    //      note          long note           long note
    //   ┏━━━━━━━━┓   or    ┏━━━┓     not    ┏━━━━━━━━━┓
    //    equation           eqn                 eqn

    const vSpan = makeSpan(["minner", group.isOver ? "mover" : "munder"], [vlist], options);
    if (group.isOver) {
      vlist = makeVList({
        positionType: "firstBaseline",
        children: [{
          type: "elem",
          elem: vSpan
        }, {
          type: "kern",
          size: 0.2
        }, {
          type: "elem",
          elem: supSubGroup
        }]
      }, options);
    } else {
      vlist = makeVList({
        positionType: "bottom",
        positionData: vSpan.depth + 0.2 + supSubGroup.height + supSubGroup.depth,
        children: [{
          type: "elem",
          elem: supSubGroup
        }, {
          type: "kern",
          size: 0.2
        }, {
          type: "elem",
          elem: vSpan
        }]
      }, options);
    }
  }
  return makeSpan(["minner", group.isOver ? "mover" : "munder"], [vlist], options);
};
const horizBrace_mathmlBuilder = (group, options) => {
  const accentNode = stretchyMathML(group.label);
  return new MathNode(group.isOver ? "mover" : "munder", [buildMathML_buildGroup(group.base, options), accentNode]);
};

// Horizontal stretchy braces
defineFunction({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace", "\\overbracket", "\\underbracket"],
  props: {
    numArgs: 1
  },
  handler(_ref, args) {
    let {
      parser,
      funcName
    } = _ref;
    return {
      type: "horizBrace",
      mode: parser.mode,
      label: funcName,
      isOver: funcName.includes("\\over"),
      base: args[0]
    };
  },
  htmlBuilder: horizBrace_htmlBuilder,
  mathmlBuilder: horizBrace_mathmlBuilder
});
;// ./src/functions/href.ts






defineFunction({
  type: "href",
  names: ["\\href"],
  props: {
    numArgs: 2,
    argTypes: ["url", "original"],
    allowedInText: true
  },
  handler: (_ref, args) => {
    let {
      parser
    } = _ref;
    const body = args[1];
    const href = assertNodeType(args[0], "url").url;
    if (!parser.settings.isTrusted({
      command: "\\href",
      url: href
    })) {
      return parser.formatUnsupportedCmd("\\href");
    }
    return {
      type: "href",
      mode: parser.mode,
      href,
      body: ordargument(body)
    };
  },
  htmlBuilder: (group, options) => {
    const elements = buildExpression(group.body, options, false);
    return makeAnchor(group.href, [], elements, options);
  },
  mathmlBuilder: (group, options) => {
    let math = buildExpressionRow(group.body, options);
    if (!(math instanceof MathNode)) {
      math = new MathNode("mrow", [math]);
    }
    math.setAttribute("href", group.href);
    return math;
  }
});
defineFunction({
  type: "href",
  names: ["\\url"],
  props: {
    numArgs: 1,
    argTypes: ["url"],
    allowedInText: true
  },
  handler: (_ref2, args) => {
    let {
      parser
    } = _ref2;
    const href = assertNodeType(args[0], "url").url;
    if (!parser.settings.isTrusted({
      command: "\\url",
      url: href
    })) {
      return parser.formatUnsupportedCmd("\\url");
    }
    const chars = [];
    for (let i = 0; i < href.length; i++) {
      let c = href[i];
      if (c === "~") {
        c = "\\textasciitilde";
      }
      chars.push({
        type: "textord",
        mode: "text",
        text: c
      });
    }
    const body = {
      type: "text",
      mode: parser.mode,
      font: "\\texttt",
      body: chars
    };
    return {
      type: "href",
      mode: parser.mode,
      href,
      body: ordargument(body)
    };
  }
});
;// ./src/functions/hbox.ts






// \hbox is provided for compatibility with LaTeX \vcenter.
// In LaTeX, \vcenter can act only on a box, as in
// \vcenter{\hbox{$\frac{a+b}{\dfrac{c}{d}}$}}
// This function by itself doesn't do anything but prevent a soft line break.

defineFunction({
  type: "hbox",
  names: ["\\hbox"],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInText: true,
    primitive: true
  },
  handler(_ref, args) {
    let {
      parser
    } = _ref;
    return {
      type: "hbox",
      mode: parser.mode,
      body: ordargument(args[0])
    };
  },
  htmlBuilder(group, options) {
    const elements = buildExpression(group.body, options, false);
    return makeFragment(elements);
  },
  mathmlBuilder(group, options) {
    return new MathNode("mrow", buildMathML_buildExpression(group.body, options));
  }
});
;// ./src/functions/html.ts






defineFunction({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  props: {
    numArgs: 2,
    argTypes: ["raw", "original"],
    allowedInText: true
  },
  handler: (_ref, args) => {
    let {
      parser,
      funcName,
      token
    } = _ref;
    const value = assertNodeType(args[0], "raw").string;
    const body = args[1];
    if (parser.settings.strict) {
      parser.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
    }
    let trustContext;
    const attributes = {};
    switch (funcName) {
      case "\\htmlClass":
        attributes.class = value;
        trustContext = {
          command: "\\htmlClass",
          class: value
        };
        break;
      case "\\htmlId":
        attributes.id = value;
        trustContext = {
          command: "\\htmlId",
          id: value
        };
        break;
      case "\\htmlStyle":
        attributes.style = value;
        trustContext = {
          command: "\\htmlStyle",
          style: value
        };
        break;
      case "\\htmlData":
        {
          const data = value.split(",");
          for (let i = 0; i < data.length; i++) {
            const item = data[i];
            const firstEquals = item.indexOf("=");
            if (firstEquals < 0) {
              throw new src_ParseError("\\htmlData key/value '" + item + "'" + " missing equals sign");
            }
            const key = item.slice(0, firstEquals);
            const value = item.slice(firstEquals + 1);
            attributes["data-" + key.trim()] = value;
          }
          trustContext = {
            command: "\\htmlData",
            attributes
          };
          break;
        }
      default:
        throw new Error("Unrecognized html command");
    }
    if (!parser.settings.isTrusted(trustContext)) {
      return parser.formatUnsupportedCmd(funcName);
    }
    return {
      type: "html",
      mode: parser.mode,
      attributes,
      body: ordargument(body)
    };
  },
  htmlBuilder: (group, options) => {
    const elements = buildExpression(group.body, options, false);
    const classes = ["enclosing"];
    if (group.attributes.class) {
      classes.push(...group.attributes.class.trim().split(/\s+/));
    }
    const span = makeSpan(classes, elements, options);
    for (const attr in group.attributes) {
      if (attr !== "class" && group.attributes.hasOwnProperty(attr)) {
        span.setAttribute(attr, group.attributes[attr]);
      }
    }
    return span;
  },
  mathmlBuilder: (group, options) => {
    return buildExpressionRow(group.body, options);
  }
});
;// ./src/functions/htmlmathml.ts




defineFunction({
  type: "htmlmathml",
  names: ["\\html@mathml"],
  props: {
    numArgs: 2,
    allowedInArgument: true,
    allowedInText: true
  },
  handler: (_ref, args) => {
    let {
      parser
    } = _ref;
    return {
      type: "htmlmathml",
      mode: parser.mode,
      html: ordargument(args[0]),
      mathml: ordargument(args[1])
    };
  },
  htmlBuilder: (group, options) => {
    const elements = buildExpression(group.html, options, false);
    return makeFragment(elements);
  },
  mathmlBuilder: (group, options) => {
    return buildExpressionRow(group.mathml, options);
  }
});
;// ./src/functions/includegraphics.ts






const sizeData = function (str) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(str)) {
    // str is a number with no unit specified.
    // default unit is bp, per graphix package.
    return {
      number: +str,
      unit: "bp"
    };
  } else {
    const match = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(str);
    if (!match) {
      throw new src_ParseError("Invalid size: '" + str + "' in \\includegraphics");
    }
    const data = {
      number: +(match[1] + match[2]),
      // sign + magnitude, cast to number
      unit: match[3]
    };
    if (!validUnit(data)) {
      throw new src_ParseError("Invalid unit: '" + data.unit + "' in \\includegraphics.");
    }
    return data;
  }
};
defineFunction({
  type: "includegraphics",
  names: ["\\includegraphics"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    argTypes: ["raw", "url"],
    allowedInText: false
  },
  handler: (_ref, args, optArgs) => {
    let {
      parser
    } = _ref;
    let width = {
      number: 0,
      unit: "em"
    };
    let height = {
      number: 0.9,
      unit: "em"
    }; // sorta character sized.
    let totalheight = {
      number: 0,
      unit: "em"
    };
    let alt = "";
    if (optArgs[0]) {
      const attributeStr = assertNodeType(optArgs[0], "raw").string;

      // Parser.js does not parse key/value pairs. We get a string.
      const attributes = attributeStr.split(",");
      for (let i = 0; i < attributes.length; i++) {
        const keyVal = attributes[i].split("=");
        if (keyVal.length === 2) {
          const str = keyVal[1].trim();
          switch (keyVal[0].trim()) {
            case "alt":
              alt = str;
              break;
            case "width":
              width = sizeData(str);
              break;
            case "height":
              height = sizeData(str);
              break;
            case "totalheight":
              totalheight = sizeData(str);
              break;
            default:
              throw new src_ParseError("Invalid key: '" + keyVal[0] + "' in \\includegraphics.");
          }
        }
      }
    }
    const src = assertNodeType(args[0], "url").url;
    if (alt === "") {
      // No alt given. Use the file name. Strip away the path.
      alt = src;
      alt = alt.replace(/^.*[\\/]/, '');
      alt = alt.substring(0, alt.lastIndexOf('.'));
    }
    if (!parser.settings.isTrusted({
      command: "\\includegraphics",
      url: src
    })) {
      return parser.formatUnsupportedCmd("\\includegraphics");
    }
    return {
      type: "includegraphics",
      mode: parser.mode,
      alt: alt,
      width: width,
      height: height,
      totalheight: totalheight,
      src: src
    };
  },
  htmlBuilder: (group, options) => {
    const height = calculateSize(group.height, options);
    let depth = 0;
    if (group.totalheight.number > 0) {
      depth = calculateSize(group.totalheight, options) - height;
    }
    let width = 0;
    if (group.width.number > 0) {
      width = calculateSize(group.width, options);
    }
    const style = {
      height: makeEm(height + depth)
    };
    if (width > 0) {
      style.width = makeEm(width);
    }
    if (depth > 0) {
      style.verticalAlign = makeEm(-depth);
    }
    const node = new Img(group.src, group.alt, style);
    node.height = height;
    node.depth = depth;
    return node;
  },
  mathmlBuilder: (group, options) => {
    const node = new MathNode("mglyph", []);
    node.setAttribute("alt", group.alt);
    const height = calculateSize(group.height, options);
    let depth = 0;
    if (group.totalheight.number > 0) {
      depth = calculateSize(group.totalheight, options) - height;
      node.setAttribute("valign", makeEm(-depth));
    }
    node.setAttribute("height", makeEm(height + depth));
    if (group.width.number > 0) {
      const width = calculateSize(group.width, options);
      node.setAttribute("width", makeEm(width));
    }
    node.setAttribute("src", group.src);
    return node;
  }
});
;// ./src/functions/kern.ts
// Horizontal spacing commands







// TODO: \hskip and \mskip should support plus and minus in lengths

defineFunction({
  type: "kern",
  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    primitive: true,
    allowedInText: true
  },
  handler(_ref, args) {
    let {
      parser,
      funcName
    } = _ref;
    const size = assertNodeType(args[0], "size");
    if (parser.settings.strict) {
      const mathFunction = funcName[1] === 'm'; // \mkern, \mskip
      const muUnit = size.value.unit === 'mu';
      if (mathFunction) {
        if (!muUnit) {
          parser.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + funcName + " supports only mu units, " + ("not " + size.value.unit + " units"));
        }
        if (parser.mode !== "math") {
          parser.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + funcName + " works only in math mode");
        }
      } else {
        // !mathFunction
        if (muUnit) {
          parser.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + funcName + " doesn't support mu units");
        }
      }
    }
    return {
      type: "kern",
      mode: parser.mode,
      dimension: size.value
    };
  },
  htmlBuilder(group, options) {
    return makeGlue(group.dimension, options);
  },
  mathmlBuilder(group, options) {
    const dimension = calculateSize(group.dimension, options);
    return new SpaceNode(dimension);
  }
});
;// ./src/functions/lap.ts
// Horizontal overlap functions






defineFunction({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  props: {
    numArgs: 1,
    allowedInText: true
  },
  handler: (_ref, args) => {
    let {
      parser,
      funcName
    } = _ref;
    const body = args[0];
    return {
      type: "lap",
      mode: parser.mode,
      alignment: funcName.slice(5),
      body
    };
  },
  htmlBuilder: (group, options) => {
    // mathllap, mathrlap, mathclap
    let inner;
    if (group.alignment === "clap") {
      // ref: https://www.math.lsu.edu/~aperlis/publications/mathclap/
      inner = makeSpan([], [buildGroup(group.body, options)]);
      // wrap, since CSS will center a .clap > .inner > span
      inner = makeSpan(["inner"], [inner], options);
    } else {
      inner = makeSpan(["inner"], [buildGroup(group.body, options)]);
    }
    const fix = makeSpan(["fix"], []);
    let node = makeSpan([group.alignment], [inner, fix], options);

    // At this point, we have correctly set horizontal alignment of the
    // two items involved in the lap.
    // Next, use a strut to set the height of the HTML bounding box.
    // Otherwise, a tall argument may be misplaced.
    // This code resolved issue #1153
    const strut = makeSpan(["strut"]);
    strut.style.height = makeEm(node.height + node.depth);
    if (node.depth) {
      strut.style.verticalAlign = makeEm(-node.depth);
    }
    node.children.unshift(strut);

    // Next, prevent vertical misplacement when next to something tall.
    // This code resolves issue #1234
    node = makeSpan(["thinbox"], [node], options);
    return makeSpan(["mord", "vbox"], [node], options);
  },
  mathmlBuilder: (group, options) => {
    // mathllap, mathrlap, mathclap
    const node = new MathNode("mpadded", [buildMathML_buildGroup(group.body, options)]);
    if (group.alignment !== "rlap") {
      const offset = group.alignment === "llap" ? "-1" : "-0.5";
      node.setAttribute("lspace", offset + "width");
    }
    node.setAttribute("width", "0px");
    return node;
  }
});
;// ./src/functions/math.ts



// Switching from text mode back to math mode
defineFunction({
  type: "styling",
  names: ["\\(", "$"],
  props: {
    numArgs: 0,
    allowedInText: true,
    allowedInMath: false
  },
  handler(_ref, args) {
    let {
      funcName,
      parser
    } = _ref;
    const outerMode = parser.mode;
    parser.switchMode("math");
    const close = funcName === "\\(" ? "\\)" : "$";
    const body = parser.parseExpression(false, close);
    parser.expect(close);
    parser.switchMode(outerMode);
    return {
      type: "styling",
      mode: parser.mode,
      style: "text",
      body
    };
  }
});

// Check for extra closing math delimiters
defineFunction({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  props: {
    numArgs: 0,
    allowedInText: true,
    allowedInMath: false
  },
  handler(context, args) {
    throw new src_ParseError("Mismatched " + context.funcName);
  }
});
;// ./src/functions/mathchoice.ts





const chooseMathStyle = (group, options) => {
  switch (options.style.size) {
    case src_Style.DISPLAY.size:
      return group.display;
    case src_Style.TEXT.size:
      return group.text;
    case src_Style.SCRIPT.size:
      return group.script;
    case src_Style.SCRIPTSCRIPT.size:
      return group.scriptscript;
    default:
      return group.text;
  }
};
defineFunction({
  type: "mathchoice",
  names: ["\\mathchoice"],
  props: {
    numArgs: 4,
    primitive: true
  },
  handler: (_ref, args) => {
    let {
      parser
    } = _ref;
    return {
      type: "mathchoice",
      mode: parser.mode,
      display: ordargument(args[0]),
      text: ordargument(args[1]),
      script: ordargument(args[2]),
      scriptscript: ordargument(args[3])
    };
  },
  htmlBuilder: (group, options) => {
    const body = chooseMathStyle(group, options);
    const elements = buildExpression(body, options, false);
    return makeFragment(elements);
  },
  mathmlBuilder: (group, options) => {
    const body = chooseMathStyle(group, options);
    return buildExpressionRow(body, options);
  }
});
;// ./src/functions/utils/assembleSupSub.ts





// For an operator with limits, assemble the base, sup, and sub into a span.

const assembleSupSub = (base, supGroup, subGroup, options, style, slant, baseShift) => {
  base = makeSpan([], [base]);
  const subIsSingleCharacter = subGroup && isCharacterBox(subGroup);
  let sub;
  let sup;
  // We manually have to handle the superscripts and subscripts. This,
  // aside from the kern calculations, is copied from supsub.
  if (supGroup) {
    const elem = buildGroup(supGroup, options.havingStyle(style.sup()), options);
    sup = {
      elem,
      kern: Math.max(options.fontMetrics().bigOpSpacing1, options.fontMetrics().bigOpSpacing3 - elem.depth)
    };
  }
  if (subGroup) {
    const elem = buildGroup(subGroup, options.havingStyle(style.sub()), options);
    sub = {
      elem,
      kern: Math.max(options.fontMetrics().bigOpSpacing2, options.fontMetrics().bigOpSpacing4 - elem.height)
    };
  }

  // Build the final group as a vlist of the possible subscript, base,
  // and possible superscript.
  let finalGroup;
  if (sup && sub) {
    const bottom = options.fontMetrics().bigOpSpacing5 + sub.elem.height + sub.elem.depth + sub.kern + base.depth + baseShift;
    finalGroup = makeVList({
      positionType: "bottom",
      positionData: bottom,
      children: [{
        type: "kern",
        size: options.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: sub.elem,
        marginLeft: makeEm(-slant)
      }, {
        type: "kern",
        size: sub.kern
      }, {
        type: "elem",
        elem: base
      }, {
        type: "kern",
        size: sup.kern
      }, {
        type: "elem",
        elem: sup.elem,
        marginLeft: makeEm(slant)
      }, {
        type: "kern",
        size: options.fontMetrics().bigOpSpacing5
      }]
    }, options);
  } else if (sub) {
    const top = base.height - baseShift;

    // Shift the limits by the slant of the symbol. Note
    // that we are supposed to shift the limits by 1/2 of the slant,
    // but since we are centering the limits adding a full slant of
    // margin will shift by 1/2 that.
    finalGroup = makeVList({
      positionType: "top",
      positionData: top,
      children: [{
        type: "kern",
        size: options.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: sub.elem,
        marginLeft: makeEm(-slant)
      }, {
        type: "kern",
        size: sub.kern
      }, {
        type: "elem",
        elem: base
      }]
    }, options);
  } else if (sup) {
    const bottom = base.depth + baseShift;
    finalGroup = makeVList({
      positionType: "bottom",
      positionData: bottom,
      children: [{
        type: "elem",
        elem: base
      }, {
        type: "kern",
        size: sup.kern
      }, {
        type: "elem",
        elem: sup.elem,
        marginLeft: makeEm(slant)
      }, {
        type: "kern",
        size: options.fontMetrics().bigOpSpacing5
      }]
    }, options);
  } else {
    // This case probably shouldn't occur (this would mean the
    // supsub was sending us a group with no superscript or
    // subscript) but be safe.
    return base;
  }
  const parts = [finalGroup];
  if (sub && slant !== 0 && !subIsSingleCharacter) {
    // A negative margin-left was applied to the lower limit.
    // Avoid an overlap by placing a spacer on the left on the group.
    const spacer = makeSpan(["mspace"], [], options);
    spacer.style.marginRight = makeEm(slant);
    parts.unshift(spacer);
  }
  return makeSpan(["mop", "op-limits"], parts, options);
};
;// ./src/functions/op.ts
// Limits, symbols










// Most operators have a large successor symbol, but these don't.
const noSuccessor = new Set(["\\smallint"]);

// NOTE: Unlike most `htmlBuilder`s, this one handles not only "op", but also
// "supsub" since some of them (like \int) can affect super/subscripting.
const op_htmlBuilder = (grp, options) => {
  // Operators are handled in the TeXbook pg. 443-444, rule 13(a).
  let supGroup;
  let subGroup;
  let hasLimits = false;
  let group;
  if (grp.type === "supsub") {
    // If we have limits, supsub will pass us its group to handle. Pull
    // out the superscript and subscript and set the group to the op in
    // its base.
    supGroup = grp.sup;
    subGroup = grp.sub;
    group = assertNodeType(grp.base, "op");
    hasLimits = true;
  } else {
    group = assertNodeType(grp, "op");
  }
  const style = options.style;
  let large = false;
  if (style.size === src_Style.DISPLAY.size && group.symbol && !noSuccessor.has(group.name)) {
    // Most symbol operators get larger in displaystyle (rule 13)
    large = true;
  }
  let base;
  if (group.symbol) {
    // If this is a symbol, create the symbol.
    const fontName = large ? "Size2-Regular" : "Size1-Regular";
    let stash = "";
    if (group.name === "\\oiint" || group.name === "\\oiiint") {
      // No font glyphs yet, so use a glyph w/o the oval.
      // TODO: When font glyphs are available, delete this code.
      stash = group.name.slice(1);
      group.name = stash === "oiint" ? "\\iint" : "\\iiint";
    }
    base = makeSymbol(group.name, fontName, "math", options, ["mop", "op-symbol", large ? "large-op" : "small-op"]);
    if (stash.length > 0) {
      // We're in \oiint or \oiiint. Overlay the oval.
      // TODO: When font glyphs are available, delete this code.
      const italic = base.italic;
      const oval = staticSvg(stash + "Size" + (large ? "2" : "1"), options);
      base = makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: base,
          shift: 0
        }, {
          type: "elem",
          elem: oval,
          shift: large ? 0.08 : 0
        }]
      }, options);
      group.name = "\\" + stash;
      base.classes.unshift("mop");
      // TODO(ts)
      base.italic = italic;
    }
  } else if (group.body) {
    // If this is a list, compose that list.
    const inner = buildExpression(group.body, options, true);
    if (inner.length === 1 && inner[0] instanceof SymbolNode) {
      base = inner[0];
      base.classes[0] = "mop"; // replace old mclass
    } else {
      base = makeSpan(["mop"], inner, options);
    }
  } else {
    // Otherwise, this is a text operator. Build the text from the
    // operator's name.
    const output = [];
    for (let i = 1; i < group.name.length; i++) {
      output.push(mathsym(group.name[i], group.mode, options));
    }
    base = makeSpan(["mop"], output, options);
  }

  // If content of op is a single symbol, shift it vertically.
  let baseShift = 0;
  let slant = 0;
  if ((base instanceof SymbolNode || group.name === "\\oiint" || group.name === "\\oiiint") && !group.suppressBaseShift) {
    // We suppress the shift of the base of \overset and \underset. Otherwise,
    // shift the symbol so its center lies on the axis (rule 13). It
    // appears that our fonts have the centers of the symbols already
    // almost on the axis, so these numbers are very small. Note we
    // don't actually apply this here, but instead it is used either in
    // the vlist creation or separately when there are no limits.
    baseShift = (base.height - base.depth) / 2 - options.fontMetrics().axisHeight;

    // The slant of the symbol is just its italic correction.
    // TODO(ts)
    slant = base.italic || 0;
  }
  if (hasLimits) {
    return assembleSupSub(base, supGroup, subGroup, options, style, slant, baseShift);
  } else {
    if (baseShift) {
      base.style.position = "relative";
      base.style.top = makeEm(baseShift);
    }
    return base;
  }
};
const op_mathmlBuilder = (group, options) => {
  let node;
  if (group.symbol) {
    // This is a symbol. Just add the symbol.
    node = new MathNode("mo", [makeText(group.name, group.mode)]);
    if (noSuccessor.has(group.name)) {
      node.setAttribute("largeop", "false");
    }
  } else if (group.body) {
    // This is an operator with children. Add them.
    node = new MathNode("mo", buildMathML_buildExpression(group.body, options));
  } else {
    // This is a text operator. Add all the characters from the
    // operator's name.
    node = new MathNode("mi", [new TextNode(group.name.slice(1))]);
    // Append an <mo>&ApplyFunction;</mo>.
    // ref: https://www.w3.org/TR/REC-MathML/chap3_2.html#sec3.2.4
    const operator = new MathNode("mo", [makeText("\u2061", "text")]);
    if (group.parentIsSupSub) {
      node = new MathNode("mrow", [node, operator]);
    } else {
      node = newDocumentFragment([node, operator]);
    }
  }
  return node;
};
const singleCharBigOps = {
  "\u220F": "\\prod",
  "\u2210": "\\coprod",
  "\u2211": "\\sum",
  "\u22c0": "\\bigwedge",
  "\u22c1": "\\bigvee",
  "\u22c2": "\\bigcap",
  "\u22c3": "\\bigcup",
  "\u2a00": "\\bigodot",
  "\u2a01": "\\bigoplus",
  "\u2a02": "\\bigotimes",
  "\u2a04": "\\biguplus",
  "\u2a06": "\\bigsqcup"
};
defineFunction({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "\u220F", "\u2210", "\u2211", "\u22c0", "\u22c1", "\u22c2", "\u22c3", "\u2a00", "\u2a01", "\u2a02", "\u2a04", "\u2a06"],
  props: {
    numArgs: 0
  },
  handler: (_ref, args) => {
    let {
      parser,
      funcName
    } = _ref;
    let fName = funcName;
    if (fName.length === 1) {
      fName = singleCharBigOps[fName];
    }
    return {
      type: "op",
      mode: parser.mode,
      limits: true,
      parentIsSupSub: false,
      symbol: true,
      name: fName
    };
  },
  htmlBuilder: op_htmlBuilder,
  mathmlBuilder: op_mathmlBuilder
});

// Note: calling defineFunction with a type that's already been defined only
// works because the same htmlBuilder and mathmlBuilder are being used.
defineFunction({
  type: "op",
  names: ["\\mathop"],
  props: {
    numArgs: 1,
    primitive: true
  },
  handler: (_ref2, args) => {
    let {
      parser
    } = _ref2;
    const body = args[0];
    return {
      type: "op",
      mode: parser.mode,
      limits: false,
      parentIsSupSub: false,
      symbol: false,
      body: ordargument(body)
    };
  },
  htmlBuilder: op_htmlBuilder,
  mathmlBuilder: op_mathmlBuilder
});

// There are 2 flags for operators; whether they produce limits in
// displaystyle, and whether they are symbols and should grow in
// displaystyle. These four groups cover the four possible choices.
const singleCharIntegrals = {
  "\u222b": "\\int",
  "\u222c": "\\iint",
  "\u222d": "\\iiint",
  "\u222e": "\\oint",
  "\u222f": "\\oiint",
  "\u2230": "\\oiiint"
};

// No limits, not symbols
defineFunction({
  type: "op",
  names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
  props: {
    numArgs: 0
  },
  handler(_ref3) {
    let {
      parser,
      funcName
    } = _ref3;
    return {
      type: "op",
      mode: parser.mode,
      limits: false,
      parentIsSupSub: false,
      symbol: false,
      name: funcName
    };
  },
  htmlBuilder: op_htmlBuilder,
  mathmlBuilder: op_mathmlBuilder
});

// Limits, not symbols
defineFunction({
  type: "op",
  names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
  props: {
    numArgs: 0
  },
  handler(_ref4) {
    let {
      parser,
      funcName
    } = _ref4;
    return {
      type: "op",
      mode: parser.mode,
      limits: true,
      parentIsSupSub: false,
      symbol: false,
      name: funcName
    };
  },
  htmlBuilder: op_htmlBuilder,
  mathmlBuilder: op_mathmlBuilder
});

// No limits, symbols
defineFunction({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "\u222b", "\u222c", "\u222d", "\u222e", "\u222f", "\u2230"],
  props: {
    numArgs: 0,
    allowedInArgument: true
  },
  handler(_ref5) {
    let {
      parser,
      funcName
    } = _ref5;
    let fName = funcName;
    if (fName.length === 1) {
      fName = singleCharIntegrals[fName];
    }
    return {
      type: "op",
      mode: parser.mode,
      limits: false,
      parentIsSupSub: false,
      symbol: true,
      name: fName
    };
  },
  htmlBuilder: op_htmlBuilder,
  mathmlBuilder: op_mathmlBuilder
});
;// ./src/functions/operatorname.ts









// NOTE: Unlike most `htmlBuilder`s, this one handles not only
// "operatorname", but also  "supsub" since \operatorname* can
// affect super/subscripting.
const operatorname_htmlBuilder = (grp, options) => {
  // Operators are handled in the TeXbook pg. 443-444, rule 13(a).
  let supGroup;
  let subGroup;
  let hasLimits = false;
  let group;
  if (grp.type === "supsub") {
    // If we have limits, supsub will pass us its group to handle. Pull
    // out the superscript and subscript and set the group to the op in
    // its base.
    supGroup = grp.sup;
    subGroup = grp.sub;
    group = assertNodeType(grp.base, "operatorname");
    hasLimits = true;
  } else {
    group = assertNodeType(grp, "operatorname");
  }
  let base;
  if (group.body.length > 0) {
    const body = group.body.map(child => {
      const childText = "text" in child ? child.text : undefined;
      if (typeof childText === "string") {
        return {
          type: "textord",
          mode: child.mode,
          text: childText
        };
      } else {
        return child;
      }
    });

    // Consolidate function names into symbol characters.
    const expression = buildExpression(body, options.withFont("mathrm"), true);
    for (let i = 0; i < expression.length; i++) {
      const child = expression[i];
      if (child instanceof SymbolNode) {
        // Per amsopn package,
        // change minus to hyphen and \ast to asterisk
        child.text = child.text.replace(/\u2212/, "-").replace(/\u2217/, "*");
      }
    }
    base = makeSpan(["mop"], expression, options);
  } else {
    base = makeSpan(["mop"], [], options);
  }
  if (hasLimits) {
    return assembleSupSub(base, supGroup, subGroup, options, options.style, 0, 0);
  } else {
    return base;
  }
};
const operatorname_mathmlBuilder = (group, options) => {
  // The steps taken here are similar to the html version.
  let expression = buildMathML_buildExpression(group.body, options.withFont("mathrm"));

  // Is expression a string or has it something like a fraction?
  let isAllString = true; // default
  for (let i = 0; i < expression.length; i++) {
    const node = expression[i];
    if (node instanceof SpaceNode) {
      // Do nothing
    } else if (node instanceof MathNode) {
      switch (node.type) {
        case "mi":
        case "mn":
        case "mspace":
        case "mtext":
          break;
        // Do nothing yet.
        case "mo":
          {
            const child = node.children[0];
            if (node.children.length === 1 && child instanceof TextNode) {
              child.text = child.text.replace(/\u2212/, "-").replace(/\u2217/, "*");
            } else {
              isAllString = false;
            }
            break;
          }
        default:
          isAllString = false;
      }
    } else {
      isAllString = false;
    }
  }
  if (isAllString) {
    // Write a single TextNode instead of multiple nested tags.
    const word = expression.map(node => node.toText()).join("");
    expression = [new TextNode(word)];
  }
  const identifier = new MathNode("mi", expression);
  identifier.setAttribute("mathvariant", "normal");

  // \u2061 is the same as &ApplyFunction;
  // ref: https://www.w3schools.com/charsets/ref_html_entities_a.asp
  const operator = new MathNode("mo", [makeText("\u2061", "text")]);
  if (group.parentIsSupSub) {
    return new MathNode("mrow", [identifier, operator]);
  } else {
    return newDocumentFragment([identifier, operator]);
  }
};

// \operatorname
// amsopn.dtx: \mathop{#1\kern\z@\operator@font#3}\newmcodes@
defineFunction({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  props: {
    numArgs: 1
  },
  handler: (_ref, args) => {
    let {
      parser,
      funcName
    } = _ref;
    const body = args[0];
    return {
      type: "operatorname",
      mode: parser.mode,
      body: ordargument(body),
      alwaysHandleSupSub: funcName === "\\operatornamewithlimits",
      limits: false,
      parentIsSupSub: false
    };
  },
  htmlBuilder: operatorname_htmlBuilder,
  mathmlBuilder: operatorname_mathmlBuilder
});
defineMacro("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
;// ./src/functions/ordgroup.ts




defineFunctionBuilders({
  type: "ordgroup",
  htmlBuilder(group, options) {
    if (group.semisimple) {
      return makeFragment(buildExpression(group.body, options, false));
    }
    return makeSpan(["mord"], buildExpression(group.body, options, true), options);
  },
  mathmlBuilder(group, options) {
    return buildExpressionRow(group.body, options, true);
  }
});
;// ./src/functions/overline.ts





defineFunction({
  type: "overline",
  names: ["\\overline"],
  props: {
    numArgs: 1
  },
  handler(_ref, args) {
    let {
      parser
    } = _ref;
    const body = args[0];
    return {
      type: "overline",
      mode: parser.mode,
      body
    };
  },
  htmlBuilder(group, options) {
    // Overlines are handled in the TeXbook pg 443, Rule 9.

    // Build the inner group in the cramped style.
    const innerGroup = buildGroup(group.body, options.havingCrampedStyle());

    // Create the line above the body
    const line = makeLineSpan("overline-line", options);

    // Generate the vlist, with the appropriate kerns
    const defaultRuleThickness = options.fontMetrics().defaultRuleThickness;
    const vlist = makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: innerGroup
      }, {
        type: "kern",
        size: 3 * defaultRuleThickness
      }, {
        type: "elem",
        elem: line
      }, {
        type: "kern",
        size: defaultRuleThickness
      }]
    }, options);
    return makeSpan(["mord", "overline"], [vlist], options);
  },
  mathmlBuilder(group, options) {
    const operator = new MathNode("mo", [new TextNode("\u203e")]);
    operator.setAttribute("stretchy", "true");
    const node = new MathNode("mover", [buildMathML_buildGroup(group.body, options), operator]);
    node.setAttribute("accent", "true");
    return node;
  }
});
;// ./src/functions/phantom.ts






defineFunction({
  type: "phantom",
  names: ["\\phantom"],
  props: {
    numArgs: 1,
    allowedInText: true
  },
  handler: (_ref, args) => {
    let {
      parser
    } = _ref;
    const body = args[0];
    return {
      type: "phantom",
      mode: parser.mode,
      body: ordargument(body)
    };
  },
  htmlBuilder: (group, options) => {
    const elements = buildExpression(group.body, options.withPhantom(), false);

    // \phantom isn't supposed to affect the elements it contains.
    // See "color" for more details.
    return makeFragment(elements);
  },
  mathmlBuilder: (group, options) => {
    const inner = buildMathML_buildExpression(group.body, options);
    return new MathNode("mphantom", inner);
  }
});
defineMacro("\\hphantom", "\\smash{\\phantom{#1}}");
defineFunction({
  type: "vphantom",
  names: ["\\vphantom"],
  props: {
    numArgs: 1,
    allowedInText: true
  },
  handler: (_ref2, args) => {
    let {
      parser
    } = _ref2;
    const body = args[0];
    return {
      type: "vphantom",
      mode: parser.mode,
      body
    };
  },
  htmlBuilder: (group, options) => {
    const inner = makeSpan(["inner"], [buildGroup(group.body, options.withPhantom())]);
    const fix = makeSpan(["fix"], []);
    return makeSpan(["mord", "rlap"], [inner, fix], options);
  },
  mathmlBuilder: (group, options) => {
    const inner = buildMathML_buildExpression(ordargument(group.body), options);
    const phantom = new MathNode("mphantom", inner);
    const node = new MathNode("mpadded", [phantom]);
    node.setAttribute("width", "0px");
    return node;
  }
});
;// ./src/functions/raisebox.ts








// Box manipulation
defineFunction({
  type: "raisebox",
  names: ["\\raisebox"],
  props: {
    numArgs: 2,
    argTypes: ["size", "hbox"],
    allowedInText: true
  },
  handler(_ref, args) {
    let {
      parser
    } = _ref;
    const amount = assertNodeType(args[0], "size").value;
    const body = args[1];
    return {
      type: "raisebox",
      mode: parser.mode,
      dy: amount,
      body
    };
  },
  htmlBuilder(group, options) {
    const body = buildGroup(group.body, options);
    const dy = calculateSize(group.dy, options);
    return makeVList({
      positionType: "shift",
      positionData: -dy,
      children: [{
        type: "elem",
        elem: body
      }]
    }, options);
  },
  mathmlBuilder(group, options) {
    const node = new MathNode("mpadded", [buildMathML_buildGroup(group.body, options)]);
    const dy = group.dy.number + group.dy.unit;
    node.setAttribute("voffset", dy);
    return node;
  }
});
;// ./src/functions/relax.ts

defineFunction({
  type: "internal",
  names: ["\\relax"],
  props: {
    numArgs: 0,
    allowedInText: true,
    allowedInArgument: true
  },
  handler(_ref) {
    let {
      parser
    } = _ref;
    return {
      type: "internal",
      mode: parser.mode
    };
  }
});
;// ./src/functions/rule.ts





defineFunction({
  type: "rule",
  names: ["\\rule"],
  props: {
    numArgs: 2,
    numOptionalArgs: 1,
    allowedInText: true,
    allowedInMath: true,
    argTypes: ["size", "size", "size"]
  },
  handler(_ref, args, optArgs) {
    let {
      parser
    } = _ref;
    const shift = optArgs[0];
    const width = assertNodeType(args[0], "size");
    const height = assertNodeType(args[1], "size");
    return {
      type: "rule",
      mode: parser.mode,
      shift: shift && assertNodeType(shift, "size").value,
      width: width.value,
      height: height.value
    };
  },
  htmlBuilder(group, options) {
    // Make an empty span for the rule
    const rule = makeSpan(["mord", "rule"], [], options);

    // Calculate the shift, width, and height of the rule, and account for units
    const width = calculateSize(group.width, options);
    const height = calculateSize(group.height, options);
    const shift = group.shift ? calculateSize(group.shift, options) : 0;

    // Style the rule to the right size
    rule.style.borderRightWidth = makeEm(width);
    rule.style.borderTopWidth = makeEm(height);
    rule.style.bottom = makeEm(shift);

    // Record the height and width
    rule.width = width;
    rule.height = height + shift;
    rule.depth = -shift;
    // Font size is the number large enough that the browser will
    // reserve at least `absHeight` space above the baseline.
    // The 1.125 factor was empirically determined
    rule.maxFontSize = height * 1.125 * options.sizeMultiplier;
    return rule;
  },
  mathmlBuilder(group, options) {
    const width = calculateSize(group.width, options);
    const height = calculateSize(group.height, options);
    const shift = group.shift ? calculateSize(group.shift, options) : 0;
    const color = options.color && options.getColor() || "black";
    const rule = new MathNode("mspace");
    rule.setAttribute("mathbackground", color);
    rule.setAttribute("width", makeEm(width));
    rule.setAttribute("height", makeEm(height));
    const wrapper = new MathNode("mpadded", [rule]);
    if (shift >= 0) {
      wrapper.setAttribute("height", makeEm(shift));
    } else {
      wrapper.setAttribute("height", makeEm(shift));
      wrapper.setAttribute("depth", makeEm(-shift));
    }
    wrapper.setAttribute("voffset", makeEm(shift));
    return wrapper;
  }
});
;// ./src/functions/sizing.ts






function sizingGroup(value, options, baseOptions) {
  const inner = buildExpression(value, options, false);
  const multiplier = options.sizeMultiplier / baseOptions.sizeMultiplier;

  // Add size-resetting classes to the inner list and set maxFontSize
  // manually. Handle nested size changes.
  for (let i = 0; i < inner.length; i++) {
    const pos = inner[i].classes.indexOf("sizing");
    if (pos < 0) {
      Array.prototype.push.apply(inner[i].classes, options.sizingClasses(baseOptions));
    } else if (inner[i].classes[pos + 1] === "reset-size" + options.size) {
      // This is a nested size change: e.g., inner[i] is the "b" in
      // `\Huge a \small b`. Override the old size (the `reset-` class)
      // but not the new size.
      inner[i].classes[pos + 1] = "reset-size" + baseOptions.size;
    }
    inner[i].height *= multiplier;
    inner[i].depth *= multiplier;
  }
  return makeFragment(inner);
}
const sizeFuncs = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];
const sizing_htmlBuilder = (group, options) => {
  // Handle sizing operators like \Huge. Real TeX doesn't actually allow
  // these functions inside of math expressions, so we do some special
  // handling.
  const newOptions = options.havingSize(group.size);
  return sizingGroup(group.body, newOptions, options);
};
defineFunction({
  type: "sizing",
  names: sizeFuncs,
  props: {
    numArgs: 0,
    allowedInText: true
  },
  handler: (_ref, args) => {
    let {
      breakOnTokenText,
      funcName,
      parser
    } = _ref;
    const body = parser.parseExpression(false, breakOnTokenText);
    return {
      type: "sizing",
      mode: parser.mode,
      // Figure out what size to use based on the list of functions above
      size: sizeFuncs.indexOf(funcName) + 1,
      body
    };
  },
  htmlBuilder: sizing_htmlBuilder,
  mathmlBuilder: (group, options) => {
    const newOptions = options.havingSize(group.size);
    const inner = buildMathML_buildExpression(group.body, newOptions);
    const node = new MathNode("mstyle", inner);

    // TODO(emily): This doesn't produce the correct size for nested size
    // changes, because we don't keep state of what style we're currently
    // in, so we can't reset the size to normal before changing it.  Now
    // that we're passing an options parameter we should be able to fix
    // this.
    node.setAttribute("mathsize", makeEm(newOptions.sizeMultiplier));
    return node;
  }
});
;// ./src/functions/smash.ts
// smash, with optional [tb], as in AMS






defineFunction({
  type: "smash",
  names: ["\\smash"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    allowedInText: true
  },
  handler: (_ref, args, optArgs) => {
    let {
      parser
    } = _ref;
    let smashHeight = false;
    let smashDepth = false;
    const tbArg = optArgs[0] && assertNodeType(optArgs[0], "ordgroup");
    if (tbArg) {
      // Optional [tb] argument is engaged.
      // ref: amsmath: \renewcommand{\smash}[1][tb]{%
      //               def\mb@t{\ht}\def\mb@b{\dp}\def\mb@tb{\ht\z@\z@\dp}%
      let letter = "";
      for (let i = 0; i < tbArg.body.length; ++i) {
        const node = tbArg.body[i];
        letter = assertSymbolNodeType(node).text;
        if (letter === "t") {
          smashHeight = true;
        } else if (letter === "b") {
          smashDepth = true;
        } else {
          smashHeight = false;
          smashDepth = false;
          break;
        }
      }
    } else {
      smashHeight = true;
      smashDepth = true;
    }
    const body = args[0];
    return {
      type: "smash",
      mode: parser.mode,
      body,
      smashHeight,
      smashDepth
    };
  },
  htmlBuilder: (group, options) => {
    const node = makeSpan([], [buildGroup(group.body, options)]);
    if (!group.smashHeight && !group.smashDepth) {
      return node;
    }
    if (group.smashHeight) {
      node.height = 0;
    }
    if (group.smashDepth) {
      node.depth = 0;
    }
    if (group.smashHeight && group.smashDepth) {
      // Symmetric \smash can stay in inline layout.
      return makeSpan(["mord", "smash"], [node], options);
    }

    // In order to influence makeVList for asymmetric smashing, we have to
    // reset the children.
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        if (group.smashHeight) {
          node.children[i].height = 0;
        }
        if (group.smashDepth) {
          node.children[i].depth = 0;
        }
      }
    }

    // At this point, we've reset the TeX-like height and depth values.
    // But the span still has an HTML line height.
    // makeVList applies "display: table-cell", which prevents the browser
    // from acting on that line height. So we'll call makeVList now.

    const smashedNode = makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: node
      }]
    }, options);

    // For spacing, TeX treats \smash as a math group (same spacing as ord).
    return makeSpan(["mord"], [smashedNode], options);
  },
  mathmlBuilder: (group, options) => {
    const node = new MathNode("mpadded", [buildMathML_buildGroup(group.body, options)]);
    if (group.smashHeight) {
      node.setAttribute("height", "0px");
    }
    if (group.smashDepth) {
      node.setAttribute("depth", "0px");
    }
    return node;
  }
});
;// ./src/functions/sqrt.ts








defineFunction({
  type: "sqrt",
  names: ["\\sqrt"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(_ref, args, optArgs) {
    let {
      parser
    } = _ref;
    const index = optArgs[0];
    const body = args[0];
    return {
      type: "sqrt",
      mode: parser.mode,
      body,
      index
    };
  },
  htmlBuilder(group, options) {
    // Square roots are handled in the TeXbook pg. 443, Rule 11.

    // First, we do the same steps as in overline to build the inner group
    // and line
    let inner = buildGroup(group.body, options.havingCrampedStyle());
    if (inner.height === 0) {
      // Render a small surd.
      inner.height = options.fontMetrics().xHeight;
    }

    // Some groups can return document fragments.  Handle those by wrapping
    // them in a span.
    inner = wrapFragment(inner, options);

    // Calculate the minimum size for the \surd delimiter
    const metrics = options.fontMetrics();
    const theta = metrics.defaultRuleThickness;
    let phi = theta;
    if (options.style.id < src_Style.TEXT.id) {
      phi = options.fontMetrics().xHeight;
    }

    // Calculate the clearance between the body and line
    let lineClearance = theta + phi / 4;
    const minDelimiterHeight = inner.height + inner.depth + lineClearance + theta;

    // Create a sqrt SVG of the required minimum size
    const {
      span: img,
      ruleWidth,
      advanceWidth
    } = makeSqrtImage(minDelimiterHeight, options);
    const delimDepth = img.height - ruleWidth;

    // Adjust the clearance based on the delimiter size
    if (delimDepth > inner.height + inner.depth + lineClearance) {
      lineClearance = (lineClearance + delimDepth - inner.height - inner.depth) / 2;
    }

    // Shift the sqrt image
    const imgShift = img.height - inner.height - lineClearance - ruleWidth;
    inner.style.paddingLeft = makeEm(advanceWidth);

    // Overlay the image and the argument.
    const body = makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: inner,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: -(inner.height + imgShift)
      }, {
        type: "elem",
        elem: img
      }, {
        type: "kern",
        size: ruleWidth
      }]
    }, options);
    if (!group.index) {
      return makeSpan(["mord", "sqrt"], [body], options);
    } else {
      // Handle the optional root index

      // The index is always in scriptscript style
      const newOptions = options.havingStyle(src_Style.SCRIPTSCRIPT);
      const rootm = buildGroup(group.index, newOptions, options);

      // The amount the index is shifted by. This is taken from the TeX
      // source, in the definition of `\r@@t`.
      const toShift = 0.6 * (body.height - body.depth);

      // Build a VList with the superscript shifted up correctly
      const rootVList = makeVList({
        positionType: "shift",
        positionData: -toShift,
        children: [{
          type: "elem",
          elem: rootm
        }]
      }, options);
      // Add a class surrounding it so we can add on the appropriate
      // kerning
      const rootVListWrap = makeSpan(["root"], [rootVList]);
      return makeSpan(["mord", "sqrt"], [rootVListWrap, body], options);
    }
  },
  mathmlBuilder(group, options) {
    const {
      body,
      index
    } = group;
    return index ? new MathNode("mroot", [buildMathML_buildGroup(body, options), buildMathML_buildGroup(index, options)]) : new MathNode("msqrt", [buildMathML_buildGroup(body, options)]);
  }
});
;// ./src/functions/styling.ts





const styling_styleMap = {
  "display": src_Style.DISPLAY,
  "text": src_Style.TEXT,
  "script": src_Style.SCRIPT,
  "scriptscript": src_Style.SCRIPTSCRIPT
};
defineFunction({
  type: "styling",
  names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
  props: {
    numArgs: 0,
    allowedInText: true,
    primitive: true
  },
  handler(_ref, args) {
    let {
      breakOnTokenText,
      funcName,
      parser
    } = _ref;
    // parse out the implicit body
    const body = parser.parseExpression(true, breakOnTokenText);

    // TODO: Refactor to avoid duplicating styleMap in multiple places (e.g.
    // here and in buildHTML and de-dupe the enumeration of all the styles).
    // TODO(ts): The names above exactly match the styles.
    const style = funcName.slice(1, funcName.length - 5);
    return {
      type: "styling",
      mode: parser.mode,
      // Figure out what style to use by pulling out the style from
      // the function name
      style,
      body
    };
  },
  htmlBuilder(group, options) {
    // Style changes are handled in the TeXbook on pg. 442, Rule 3.
    const newStyle = styling_styleMap[group.style];
    const newOptions = options.havingStyle(newStyle).withFont('');
    return sizingGroup(group.body, newOptions, options);
  },
  mathmlBuilder(group, options) {
    // Figure out what style we're changing to.
    const newStyle = styling_styleMap[group.style];
    const newOptions = options.havingStyle(newStyle);
    const inner = buildMathML_buildExpression(group.body, newOptions);
    const node = new MathNode("mstyle", inner);
    const styleAttributes = {
      "display": ["0", "true"],
      "text": ["0", "false"],
      "script": ["1", "false"],
      "scriptscript": ["2", "false"]
    };
    const attr = styleAttributes[group.style];
    node.setAttribute("scriptlevel", attr[0]);
    node.setAttribute("displaystyle", attr[1]);
    return node;
  }
});
;// ./src/functions/supsub.ts













/**
 * Sometimes, groups perform special rules when they have superscripts or
 * subscripts attached to them. This function lets the `supsub` group know that
 * Sometimes, groups perform special rules when they have superscripts or
 * its inner element should handle the superscripts and subscripts instead of
 * handling them itself.
 */
const htmlBuilderDelegate = function (group, options) {
  const base = group.base;
  if (!base) {
    return null;
  } else if (base.type === "op") {
    // Operators handle supsubs differently when they have limits
    // (e.g. `\displaystyle\sum_2^3`)
    const delegate = base.limits && (options.style.size === src_Style.DISPLAY.size || base.alwaysHandleSupSub);
    return delegate ? op_htmlBuilder : null;
  } else if (base.type === "operatorname") {
    const delegate = base.alwaysHandleSupSub && (options.style.size === src_Style.DISPLAY.size || base.limits);
    return delegate ? operatorname_htmlBuilder : null;
  } else if (base.type === "accent") {
    return isCharacterBox(base.base) ? htmlBuilder : null;
  } else if (base.type === "horizBrace") {
    const isSup = !group.sub;
    return isSup === base.isOver ? horizBrace_htmlBuilder : null;
  } else {
    return null;
  }
};

// Super scripts and subscripts, whose precise placement can depend on other
// functions that precede them.
defineFunctionBuilders({
  type: "supsub",
  htmlBuilder(group, options) {
    // Superscript and subscripts are handled in the TeXbook on page
    // 445-446, rules 18(a-f).

    // Here is where we defer to the inner group if it should handle
    // superscripts and subscripts itself.
    const builderDelegate = htmlBuilderDelegate(group, options);
    if (builderDelegate) {
      return builderDelegate(group, options);
    }
    const {
      base: valueBase,
      sup: valueSup,
      sub: valueSub
    } = group;
    const base = buildGroup(valueBase, options);
    let supm;
    let subm;
    const metrics = options.fontMetrics();

    // Rule 18a
    let supShift = 0;
    let subShift = 0;
    const isCharBox = valueBase && isCharacterBox(valueBase);
    if (valueSup) {
      const newOptions = options.havingStyle(options.style.sup());
      supm = buildGroup(valueSup, newOptions, options);
      if (!isCharBox) {
        supShift = base.height - newOptions.fontMetrics().supDrop * newOptions.sizeMultiplier / options.sizeMultiplier;
      }
    }
    if (valueSub) {
      const newOptions = options.havingStyle(options.style.sub());
      subm = buildGroup(valueSub, newOptions, options);
      if (!isCharBox) {
        subShift = base.depth + newOptions.fontMetrics().subDrop * newOptions.sizeMultiplier / options.sizeMultiplier;
      }
    }

    // Rule 18c
    let minSupShift;
    if (options.style === src_Style.DISPLAY) {
      minSupShift = metrics.sup1;
    } else if (options.style.cramped) {
      minSupShift = metrics.sup3;
    } else {
      minSupShift = metrics.sup2;
    }

    // scriptspace is a font-size-independent size, so scale it
    // appropriately for use as the marginRight.
    const multiplier = options.sizeMultiplier;
    const marginRight = makeEm(0.5 / metrics.ptPerEm / multiplier);
    let marginLeft = null;
    if (subm) {
      // Subscripts shouldn't be shifted by the base's italic correction.
      // Account for that by shifting the subscript back the appropriate
      // amount. Note we only do this when the base is a single symbol.
      const isOiint = group.base && group.base.type === "op" && group.base.name && (group.base.name === "\\oiint" || group.base.name === "\\oiiint");
      if (base instanceof SymbolNode || isOiint) {
        // @ts-ignore
        marginLeft = makeEm(-base.italic);
      }
    }
    let supsub;
    if (supm && subm) {
      supShift = Math.max(supShift, minSupShift, supm.depth + 0.25 * metrics.xHeight);
      subShift = Math.max(subShift, metrics.sub2);
      const ruleWidth = metrics.defaultRuleThickness;

      // Rule 18e
      const maxWidth = 4 * ruleWidth;
      if (supShift - supm.depth - (subm.height - subShift) < maxWidth) {
        subShift = maxWidth - (supShift - supm.depth) + subm.height;
        const psi = 0.8 * metrics.xHeight - (supShift - supm.depth);
        if (psi > 0) {
          supShift += psi;
          subShift -= psi;
        }
      }
      const vlistElem = [{
        type: "elem",
        elem: subm,
        shift: subShift,
        marginRight,
        marginLeft
      }, {
        type: "elem",
        elem: supm,
        shift: -supShift,
        marginRight
      }];
      supsub = makeVList({
        positionType: "individualShift",
        children: vlistElem
      }, options);
    } else if (subm) {
      // Rule 18b
      subShift = Math.max(subShift, metrics.sub1, subm.height - 0.8 * metrics.xHeight);
      const vlistElem = [{
        type: "elem",
        elem: subm,
        marginLeft,
        marginRight
      }];
      supsub = makeVList({
        positionType: "shift",
        positionData: subShift,
        children: vlistElem
      }, options);
    } else if (supm) {
      // Rule 18c, d
      supShift = Math.max(supShift, minSupShift, supm.depth + 0.25 * metrics.xHeight);
      supsub = makeVList({
        positionType: "shift",
        positionData: -supShift,
        children: [{
          type: "elem",
          elem: supm,
          marginRight
        }]
      }, options);
    } else {
      throw new Error("supsub must have either sup or sub.");
    }

    // Wrap the supsub vlist in a span.msupsub to reset text-align.
    const mclass = getTypeOfDomTree(base, "right") || "mord";
    return makeSpan([mclass], [base, makeSpan(["msupsub"], [supsub])], options);
  },
  mathmlBuilder(group, options) {
    // Is the inner group a relevant horizontal brace?
    let isBrace = false;
    let isOver;
    let isSup;
    if (group.base && group.base.type === "horizBrace") {
      isSup = !!group.sup;
      if (isSup === group.base.isOver) {
        isBrace = true;
        isOver = group.base.isOver;
      }
    }
    if (group.base && (group.base.type === "op" || group.base.type === "operatorname")) {
      group.base.parentIsSupSub = true;
    }
    const children = [buildMathML_buildGroup(group.base, options)];
    if (group.sub) {
      children.push(buildMathML_buildGroup(group.sub, options));
    }
    if (group.sup) {
      children.push(buildMathML_buildGroup(group.sup, options));
    }
    let nodeType;
    if (isBrace) {
      nodeType = isOver ? "mover" : "munder";
    } else if (!group.sub) {
      const base = group.base;
      if (base && base.type === "op" && base.limits && (options.style === src_Style.DISPLAY || base.alwaysHandleSupSub)) {
        nodeType = "mover";
      } else if (base && base.type === "operatorname" && base.alwaysHandleSupSub && (base.limits || options.style === src_Style.DISPLAY)) {
        nodeType = "mover";
      } else {
        nodeType = "msup";
      }
    } else if (!group.sup) {
      const base = group.base;
      if (base && base.type === "op" && base.limits && (options.style === src_Style.DISPLAY || base.alwaysHandleSupSub)) {
        nodeType = "munder";
      } else if (base && base.type === "operatorname" && base.alwaysHandleSupSub && (base.limits || options.style === src_Style.DISPLAY)) {
        nodeType = "munder";
      } else {
        nodeType = "msub";
      }
    } else {
      const base = group.base;
      if (base && base.type === "op" && base.limits && options.style === src_Style.DISPLAY) {
        nodeType = "munderover";
      } else if (base && base.type === "operatorname" && base.alwaysHandleSupSub && (options.style === src_Style.DISPLAY || base.limits)) {
        nodeType = "munderover";
      } else {
        nodeType = "msubsup";
      }
    }
    return new MathNode(nodeType, children);
  }
});
;// ./src/functions/symbolsOp.ts





// Operator ParseNodes created in Parser.js from symbol Groups in src/symbols.js.

defineFunctionBuilders({
  type: "atom",
  htmlBuilder(group, options) {
    return mathsym(group.text, group.mode, options, ["m" + group.family]);
  },
  mathmlBuilder(group, options) {
    const node = new MathNode("mo", [makeText(group.text, group.mode)]);
    if (group.family === "bin") {
      const variant = getVariant(group, options);
      if (variant === "bold-italic") {
        node.setAttribute("mathvariant", variant);
      }
    } else if (group.family === "punct") {
      node.setAttribute("separator", "true");
    } else if (group.family === "open" || group.family === "close") {
      // Delims built here should not stretch vertically.
      // See delimsizing.js for stretchy delims.
      node.setAttribute("stretchy", "false");
    }
    return node;
  }
});
;// ./src/functions/symbolsOrd.ts




// "mathord" and "textord" ParseNodes created in Parser.js from symbol Groups in
// src/symbols.js.

const defaultVariant = {
  "mi": "italic",
  "mn": "normal",
  "mtext": "normal"
};
defineFunctionBuilders({
  type: "mathord",
  htmlBuilder(group, options) {
    return makeOrd(group, options, "mathord");
  },
  mathmlBuilder(group, options) {
    const node = new MathNode("mi", [makeText(group.text, group.mode, options)]);
    const variant = getVariant(group, options) || "italic";
    if (variant !== defaultVariant[node.type]) {
      node.setAttribute("mathvariant", variant);
    }
    return node;
  }
});
defineFunctionBuilders({
  type: "textord",
  htmlBuilder(group, options) {
    return makeOrd(group, options, "textord");
  },
  mathmlBuilder(group, options) {
    const text = makeText(group.text, group.mode, options);
    const variant = getVariant(group, options) || "normal";
    let node;
    if (group.mode === 'text') {
      node = new MathNode("mtext", [text]);
    } else if (/[0-9]/.test(group.text)) {
      node = new MathNode("mn", [text]);
    } else if (group.text === "\\prime") {
      node = new MathNode("mo", [text]);
    } else {
      node = new MathNode("mi", [text]);
    }
    if (variant !== defaultVariant[node.type]) {
      node.setAttribute("mathvariant", variant);
    }
    return node;
  }
});
;// ./src/functions/symbolsSpacing.ts





// A map of CSS-based spacing functions to their CSS class.
const cssSpace = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
};

// A lookup table to determine whether a spacing function/symbol should be
// treated like a regular space character.  If a symbol or command is a key
// in this table, then it should be a regular space character.  Furthermore,
// the associated value may have a `className` specifying an extra CSS class
// to add to the created `span`.
const regularSpace = {
  " ": {},
  "\\ ": {},
  "~": {
    className: "nobreak"
  },
  "\\space": {},
  "\\nobreakspace": {
    className: "nobreak"
  }
};

// ParseNode<"spacing"> created in Parser.js from the "spacing" symbol Groups in
// src/symbols.js.
defineFunctionBuilders({
  type: "spacing",
  htmlBuilder(group, options) {
    if (regularSpace.hasOwnProperty(group.text)) {
      const className = regularSpace[group.text].className || "";
      // Spaces are generated by adding an actual space. Each of these
      // things has an entry in the symbols table, so these will be turned
      // into appropriate outputs.
      if (group.mode === "text") {
        const ord = makeOrd(group, options, "textord");
        ord.classes.push(className);
        return ord;
      } else {
        return makeSpan(["mspace", className], [mathsym(group.text, group.mode, options)], options);
      }
    } else if (cssSpace.hasOwnProperty(group.text)) {
      // Spaces based on just a CSS class.
      return makeSpan(["mspace", cssSpace[group.text]], [], options);
    } else {
      throw new src_ParseError("Unknown type of space \"" + group.text + "\"");
    }
  },
  mathmlBuilder(group, options) {
    let node;
    if (regularSpace.hasOwnProperty(group.text)) {
      node = new MathNode("mtext", [new TextNode("\u00a0")]);
    } else if (cssSpace.hasOwnProperty(group.text)) {
      // CSS-based MathML spaces (\nobreak, \allowbreak) are ignored
      return new MathNode("mspace");
    } else {
      throw new src_ParseError("Unknown type of space \"" + group.text + "\"");
    }
    return node;
  }
});
;// ./src/functions/tag.ts



const pad = () => {
  const padNode = new MathNode("mtd", []);
  padNode.setAttribute("width", "50%");
  return padNode;
};
defineFunctionBuilders({
  type: "tag",
  mathmlBuilder(group, options) {
    const table = new MathNode("mtable", [new MathNode("mtr", [pad(), new MathNode("mtd", [buildExpressionRow(group.body, options)]), pad(), new MathNode("mtd", [buildExpressionRow(group.tag, options)])])]);
    table.setAttribute("width", "100%");
    return table;

    // TODO: Left-aligned tags.
    // Currently, the group and options passed here do not contain
    // enough info to set tag alignment. `leqno` is in Settings but it is
    // not passed to Options. On the HTML side, leqno is
    // set by a CSS class applied in buildTree.js. That would have worked
    // in MathML if browsers supported <mlabeledtr>. Since they don't, we
    // need to rewrite the way this function is called.
  }
});
;// ./src/functions/text.ts




// Non-mathy text, possibly in a font
const textFontFamilies = {
  "\\text": undefined,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
};
const textFontWeights = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
};
const textFontShapes = {
  "\\textit": "textit",
  "\\textup": "textup"
};
const optionsWithFont = (group, options) => {
  const font = group.font;
  // Checks if the argument is a font family or a font style.
  if (!font) {
    return options;
  } else if (textFontFamilies[font]) {
    return options.withTextFontFamily(textFontFamilies[font]);
  } else if (textFontWeights[font]) {
    return options.withTextFontWeight(textFontWeights[font]);
  } else if (font === "\\emph") {
    return options.fontShape === "textit" ? options.withTextFontShape("textup") : options.withTextFontShape("textit");
  }
  return options.withTextFontShape(textFontShapes[font]);
};
defineFunction({
  type: "text",
  names: [
  // Font families
  "\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal",
  // Font weights
  "\\textbf", "\\textmd",
  // Font Shapes
  "\\textit", "\\textup", "\\emph"],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInArgument: true,
    allowedInText: true
  },
  handler(_ref, args) {
    let {
      parser,
      funcName
    } = _ref;
    const body = args[0];
    return {
      type: "text",
      mode: parser.mode,
      body: ordargument(body),
      font: funcName
    };
  },
  htmlBuilder(group, options) {
    const newOptions = optionsWithFont(group, options);
    const inner = buildExpression(group.body, newOptions, true);
    return makeSpan(["mord", "text"], inner, newOptions);
  },
  mathmlBuilder(group, options) {
    const newOptions = optionsWithFont(group, options);
    return buildExpressionRow(group.body, newOptions);
  }
});
;// ./src/functions/underline.ts





defineFunction({
  type: "underline",
  names: ["\\underline"],
  props: {
    numArgs: 1,
    allowedInText: true
  },
  handler(_ref, args) {
    let {
      parser
    } = _ref;
    return {
      type: "underline",
      mode: parser.mode,
      body: args[0]
    };
  },
  htmlBuilder(group, options) {
    // Underlines are handled in the TeXbook pg 443, Rule 10.
    // Build the inner group.
    const innerGroup = buildGroup(group.body, options);

    // Create the line to go below the body
    const line = makeLineSpan("underline-line", options);

    // Generate the vlist, with the appropriate kerns
    const defaultRuleThickness = options.fontMetrics().defaultRuleThickness;
    const vlist = makeVList({
      positionType: "top",
      positionData: innerGroup.height,
      children: [{
        type: "kern",
        size: defaultRuleThickness
      }, {
        type: "elem",
        elem: line
      }, {
        type: "kern",
        size: 3 * defaultRuleThickness
      }, {
        type: "elem",
        elem: innerGroup
      }]
    }, options);
    return makeSpan(["mord", "underline"], [vlist], options);
  },
  mathmlBuilder(group, options) {
    const operator = new MathNode("mo", [new TextNode("\u203e")]);
    operator.setAttribute("stretchy", "true");
    const node = new MathNode("munder", [buildMathML_buildGroup(group.body, options), operator]);
    node.setAttribute("accentunder", "true");
    return node;
  }
});
;// ./src/functions/vcenter.ts






// \vcenter:  Vertically center the argument group on the math axis.

defineFunction({
  type: "vcenter",
  names: ["\\vcenter"],
  props: {
    numArgs: 1,
    argTypes: ["original"],
    // In LaTeX, \vcenter can act only on a box.
    allowedInText: false
  },
  handler(_ref, args) {
    let {
      parser
    } = _ref;
    return {
      type: "vcenter",
      mode: parser.mode,
      body: args[0]
    };
  },
  htmlBuilder(group, options) {
    const body = buildGroup(group.body, options);
    const axisHeight = options.fontMetrics().axisHeight;
    const dy = 0.5 * (body.height - axisHeight - (body.depth + axisHeight));
    return makeVList({
      positionType: "shift",
      positionData: dy,
      children: [{
        type: "elem",
        elem: body
      }]
    }, options);
  },
  mathmlBuilder(group, options) {
    // There is no way to do this in MathML.
    // Write a class as a breadcrumb in case some post-processor wants
    // to perform a vcenter adjustment.
    // Wrap in mrow to ensure valid MathML when placed inside mo (e.g., \mathrel)
    const mpadded = new MathNode("mpadded", [buildMathML_buildGroup(group.body, options)], ["vcenter"]);
    return new MathNode("mrow", [mpadded]);
  }
});
;// ./src/functions/verb.ts




defineFunction({
  type: "verb",
  names: ["\\verb"],
  props: {
    numArgs: 0,
    allowedInText: true
  },
  handler(context, args, optArgs) {
    // \verb and \verb* are dealt with directly in Parser.js.
    // If we end up here, it's because of a failure to match the two delimiters
    // in the regex in Lexer.js.  LaTeX raises the following error when \verb is
    // terminated by end of line (or file).
    throw new src_ParseError("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(group, options) {
    const text = makeVerb(group);
    const body = [];
    // \verb enters text mode and therefore is sized like \textstyle
    const newOptions = options.havingStyle(options.style.text());
    for (let i = 0; i < text.length; i++) {
      let c = text[i];
      if (c === '~') {
        c = '\\textasciitilde';
      }
      body.push(makeSymbol(c, "Typewriter-Regular", group.mode, newOptions, ["mord", "texttt"]));
    }
    return makeSpan(["mord", "text"].concat(newOptions.sizingClasses(options)), tryCombineChars(body), newOptions);
  },
  mathmlBuilder(group, options) {
    const text = new TextNode(makeVerb(group));
    const node = new MathNode("mtext", [text]);
    node.setAttribute("mathvariant", "monospace");
    return node;
  }
});

/**
 * Converts verb group into body string.
 *
 * \verb* replaces each space with an open box \u2423
 * \verb replaces each space with a no-break space \xA0
 */
const makeVerb = group => group.body.replace(/ /g, group.star ? '\u2423' : '\xA0');
;// ./src/functions.ts
/** Include this to ensure that all functions are defined. */

const functions = _functions;
/* harmony default export */ var src_functions = (functions);

// TODO(kevinb): have functions return an object and call defineFunction with
// that object in this file instead of relying on side-effects.














































;// ./src/Lexer.ts
/**
 * The Lexer class handles tokenizing the input in various ways. Since our
 * parser expects us to be able to backtrack, the lexer allows lexing from any
 * given starting point.
 *
 * Its main exposed function is the `lex` function, which takes a position to
 * lex from and a type of token to lex. It defers to the appropriate `_innerLex`
 * function.
 *
 * The various `_innerLex` functions perform the actual lexing of different
 * kinds.
 */




/* The following tokenRegex
 * - matches typical whitespace (but not NBSP etc.) using its first group
 * - does not match any control character \x00-\x1f except whitespace
 * - does not match a bare backslash
 * - matches any ASCII character except those just mentioned
 * - does not match the BMP private use area \uE000-\uF8FF
 * - does not match bare surrogate code units
 * - matches any BMP character except for those just described
 * - matches any valid Unicode surrogate pair
 * - matches a backslash followed by one or more whitespace characters
 * - matches a backslash followed by one or more letters then whitespace
 * - matches a backslash followed by any BMP character
 * Capturing groups:
 *   [1] regular whitespace
 *   [2] backslash followed by whitespace
 *   [3] anything else, which may include:
 *     [4] left character of \verb*
 *     [5] left character of \verb
 *     [6] backslash followed by word, excluding any trailing whitespace
 * Just because the Lexer matches something doesn't mean it's valid input:
 * If there is no matching function or symbol definition, the Parser will
 * still reject the input.
 */
const spaceRegexString = "[ \r\n\t]";
const controlWordRegexString = "\\\\[a-zA-Z@]+";
const controlSymbolRegexString = "\\\\[^\uD800-\uDFFF]";
const controlWordWhitespaceRegexString = "(" + controlWordRegexString + ")" + spaceRegexString + "*";
const controlSpaceRegexString = "\\\\(\n|[ \r\t]+\n?)[ \r\t]*";
const combiningDiacriticalMarkString = "[\u0300-\u036f]";
const combiningDiacriticalMarksEndRegex = new RegExp(combiningDiacriticalMarkString + "+$");
const tokenRegexString = "(" + spaceRegexString + "+)|" + (// whitespace
controlSpaceRegexString + "|") +
// \whitespace
"([!-\\[\\]-\u2027\u202A-\uD7FF\uF900-\uFFFF]" + (// single codepoint
combiningDiacriticalMarkString + "*") +
// ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + (// surrogate pair
combiningDiacriticalMarkString + "*") +
// ...plus accents
"|\\\\verb\\*([^]).*?\\4" +
// \verb*
"|\\\\verb([^*a-zA-Z]).*?\\5" + (// \verb unstarred
"|" + controlWordWhitespaceRegexString) + (// \macroName + spaces
"|" + controlSymbolRegexString + ")"); // \\, \', etc.

/** Main Lexer class */
class Lexer {
  // Category codes. The lexer only supports comment characters (14) for now.
  // MacroExpander additionally distinguishes active (13).

  constructor(input, settings) {
    // Separate accents from characters
    this.input = input;
    this.settings = settings;
    this.tokenRegex = new RegExp(tokenRegexString, 'g');
    this.catcodes = {
      "%": 14,
      // comment character
      "~": 13 // active character
    };
  }
  setCatcode(char, code) {
    this.catcodes[char] = code;
  }

  /**
   * This function lexes a single token.
   */
  lex() {
    const input = this.input;
    const pos = this.tokenRegex.lastIndex;
    if (pos === input.length) {
      return new Token("EOF", new SourceLocation(this, pos, pos));
    }
    const match = this.tokenRegex.exec(input);
    if (match === null || match.index !== pos) {
      throw new src_ParseError("Unexpected character: '" + input[pos] + "'", new Token(input[pos], new SourceLocation(this, pos, pos + 1)));
    }
    const text = match[6] || match[3] || (match[2] ? "\\ " : " ");
    if (this.catcodes[text] === 14) {
      // comment character
      const nlIndex = input.indexOf('\n', this.tokenRegex.lastIndex);
      if (nlIndex === -1) {
        this.tokenRegex.lastIndex = input.length; // EOF
        this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would " + "fail because of commenting the end of math mode (e.g. $)");
      } else {
        this.tokenRegex.lastIndex = nlIndex + 1;
      }
      return this.lex();
    }
    return new Token(text, new SourceLocation(this, pos, this.tokenRegex.lastIndex));
  }
}
;// ./src/Namespace.ts
/**
 * A `Namespace` refers to a space of nameable things like macros or lengths,
 * which can be `set` either globally or local to a nested group, using an
 * undo stack similar to how TeX implements this functionality.
 * Performance-wise, `get` and local `set` take constant time, while global
 * `set` takes time proportional to the depth of group nesting.
 */


class Namespace {
  /**
   * Both arguments are optional.  The first argument is an object of
   * built-in mappings which never change.  The second argument is an object
   * of initial (global-level) mappings, which will constantly change
   * according to any global/top-level `set`s done.
   */
  constructor(builtins, globalMacros) {
    if (builtins === void 0) {
      builtins = {};
    }
    if (globalMacros === void 0) {
      globalMacros = {};
    }
    this.current = globalMacros;
    this.builtins = builtins;
    this.undefStack = [];
  }

  /**
   * Start a new nested group, affecting future local `set`s.
   */
  beginGroup() {
    this.undefStack.push({});
  }

  /**
   * End current nested group, restoring values before the group began.
   */
  endGroup() {
    if (this.undefStack.length === 0) {
      throw new src_ParseError("Unbalanced namespace destruction: attempt " + "to pop global namespace; please report this as a bug");
    }
    const undefs = this.undefStack.pop();
    for (const undef in undefs) {
      if (undefs.hasOwnProperty(undef)) {
        if (undefs[undef] == null) {
          delete this.current[undef];
        } else {
          this.current[undef] = undefs[undef];
        }
      }
    }
  }

  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    while (this.undefStack.length > 0) {
      this.endGroup();
    }
  }

  /**
   * Detect whether `name` has a definition.  Equivalent to
   * `get(name) != null`.
   */
  has(name) {
    return this.current.hasOwnProperty(name) || this.builtins.hasOwnProperty(name);
  }

  /**
   * Get the current value of a name, or `undefined` if there is no value.
   *
   * Note: Do not use `if (namespace.get(...))` to detect whether a macro
   * is defined, as the definition may be the empty string which evaluates
   * to `false` in JavaScript.  Use `if (namespace.get(...) != null)` or
   * `if (namespace.has(...))`.
   */
  get(name) {
    if (this.current.hasOwnProperty(name)) {
      return this.current[name];
    } else {
      return this.builtins[name];
    }
  }

  /**
   * Set the current value of a name, and optionally set it globally too.
   * Local set() sets the current value and (when appropriate) adds an undo
   * operation to the undo stack.  Global set() may change the undo
   * operation at every level, so takes time linear in their number.
   * A value of undefined means to delete existing definitions.
   */
  set(name, value, global) {
    if (global === void 0) {
      global = false;
    }
    if (global) {
      // Global set is equivalent to setting in all groups.  Simulate this
      // by destroying any undos currently scheduled for this name,
      // and adding an undo with the *new* value (in case it later gets
      // locally reset within this environment).
      for (let i = 0; i < this.undefStack.length; i++) {
        delete this.undefStack[i][name];
      }
      if (this.undefStack.length > 0) {
        this.undefStack[this.undefStack.length - 1][name] = value;
      }
    } else {
      // Undo this set at end of this group (possibly to `undefined`),
      // unless an undo is already in place, in which case that older
      // value is the correct one.
      const top = this.undefStack[this.undefStack.length - 1];
      if (top && !top.hasOwnProperty(name)) {
        top[name] = this.current[name];
      }
    }
    if (value == null) {
      delete this.current[name];
    } else {
      this.current[name] = value;
    }
  }
}
;// ./src/macros.ts
/**
 * Predefined macros for KaTeX.
 * This can be used to define some commands in terms of others.
 */

// Export global macros object from defineMacro

const macros = _macros;
/* harmony default export */ var src_macros = (macros);





//////////////////////////////////////////////////////////////////////
// macro tools

defineMacro("\\noexpand", function (context) {
  // The expansion is the token itself; but that token is interpreted
  // as if its meaning were ‘\relax’ if it is a control sequence that
  // would ordinarily be expanded by TeX’s expansion rules.
  const t = context.popToken();
  if (context.isExpandable(t.text)) {
    t.noexpand = true;
    t.treatAsRelax = true;
  }
  return {
    tokens: [t],
    numArgs: 0
  };
});
defineMacro("\\expandafter", function (context) {
  // TeX first reads the token that comes immediately after \expandafter,
  // without expanding it; let’s call this token t. Then TeX reads the
  // token that comes after t (and possibly more tokens, if that token
  // has an argument), replacing it by its expansion. Finally TeX puts
  // t back in front of that expansion.
  const t = context.popToken();
  context.expandOnce(true); // expand only an expandable token
  return {
    tokens: [t],
    numArgs: 0
  };
});

// LaTeX's \@firstoftwo{#1}{#2} expands to #1, skipping #2
// TeX source: \long\def\@firstoftwo#1#2{#1}
defineMacro("\\@firstoftwo", function (context) {
  const args = context.consumeArgs(2);
  return {
    tokens: args[0],
    numArgs: 0
  };
});

// LaTeX's \@secondoftwo{#1}{#2} expands to #2, skipping #1
// TeX source: \long\def\@secondoftwo#1#2{#2}
defineMacro("\\@secondoftwo", function (context) {
  const args = context.consumeArgs(2);
  return {
    tokens: args[1],
    numArgs: 0
  };
});

// LaTeX's \@ifnextchar{#1}{#2}{#3} looks ahead to the next (unexpanded)
// symbol that isn't a space, consuming any spaces but not consuming the
// first nonspace character.  If that nonspace character matches #1, then
// the macro expands to #2; otherwise, it expands to #3.
defineMacro("\\@ifnextchar", function (context) {
  const args = context.consumeArgs(3); // symbol, if, else
  context.consumeSpaces();
  const nextToken = context.future();
  if (args[0].length === 1 && args[0][0].text === nextToken.text) {
    return {
      tokens: args[1],
      numArgs: 0
    };
  } else {
    return {
      tokens: args[2],
      numArgs: 0
    };
  }
});

// LaTeX's \@ifstar{#1}{#2} looks ahead to the next (unexpanded) symbol.
// If it is `*`, then it consumes the symbol, and the macro expands to #1;
// otherwise, the macro expands to #2 (without consuming the symbol).
// TeX source: \def\@ifstar#1{\@ifnextchar *{\@firstoftwo{#1}}}
defineMacro("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");

// LaTeX's \TextOrMath{#1}{#2} expands to #1 in text mode, #2 in math mode
defineMacro("\\TextOrMath", function (context) {
  const args = context.consumeArgs(2);
  if (context.mode === 'text') {
    return {
      tokens: args[0],
      numArgs: 0
    };
  } else {
    return {
      tokens: args[1],
      numArgs: 0
    };
  }
});

// Lookup table for parsing numbers in base 8 through 16
const digitToNumber = {
  "0": 0,
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "a": 10,
  "A": 10,
  "b": 11,
  "B": 11,
  "c": 12,
  "C": 12,
  "d": 13,
  "D": 13,
  "e": 14,
  "E": 14,
  "f": 15,
  "F": 15
};

// TeX \char makes a literal character (catcode 12) using the following forms:
// (see The TeXBook, p. 43)
//   \char123  -- decimal
//   \char'123 -- octal
//   \char"123 -- hex
//   \char`x   -- character that can be written (i.e. isn't active)
//   \char`\x  -- character that cannot be written (e.g. %)
// These all refer to characters from the font, so we turn them into special
// calls to a function \@char dealt with in the Parser.
defineMacro("\\char", function (context) {
  let token = context.popToken();
  let base;
  let number = 0;
  if (token.text === "'") {
    base = 8;
    token = context.popToken();
  } else if (token.text === '"') {
    base = 16;
    token = context.popToken();
  } else if (token.text === "`") {
    token = context.popToken();
    if (token.text[0] === "\\") {
      number = token.text.charCodeAt(1);
    } else if (token.text === "EOF") {
      throw new src_ParseError("\\char` missing argument");
    } else {
      number = token.text.charCodeAt(0);
    }
  } else {
    base = 10;
  }
  if (base) {
    // Parse a number in the given base, starting with first `token`.
    number = digitToNumber[token.text];
    if (number == null || number >= base) {
      throw new src_ParseError("Invalid base-" + base + " digit " + token.text);
    }
    let digit;
    while ((digit = digitToNumber[context.future().text]) != null && digit < base) {
      number *= base;
      number += digit;
      context.popToken();
    }
  }
  return "\\@char{" + number + "}";
});

// \newcommand{\macro}[args]{definition}
// \renewcommand{\macro}[args]{definition}
// TODO: Optional arguments: \newcommand{\macro}[args][default]{definition}
const newcommand = (context, existsOK, nonexistsOK, skipIfExists) => {
  let arg = context.consumeArg().tokens;
  if (arg.length !== 1) {
    throw new src_ParseError("\\newcommand's first argument must be a macro name");
  }
  const name = arg[0].text;
  const exists = context.isDefined(name);
  if (exists && !existsOK) {
    throw new src_ParseError("\\newcommand{" + name + "} attempting to redefine " + (name + "; use \\renewcommand"));
  }
  if (!exists && !nonexistsOK) {
    throw new src_ParseError("\\renewcommand{" + name + "} when command " + name + " " + "does not yet exist; use \\newcommand");
  }
  let numArgs = 0;
  arg = context.consumeArg().tokens;
  if (arg.length === 1 && arg[0].text === "[") {
    let argText = '';
    let token = context.expandNextToken();
    while (token.text !== "]" && token.text !== "EOF") {
      // TODO: Should properly expand arg, e.g., ignore {}s
      argText += token.text;
      token = context.expandNextToken();
    }
    if (!argText.match(/^\s*[0-9]+\s*$/)) {
      throw new src_ParseError("Invalid number of arguments: " + argText);
    }
    numArgs = parseInt(argText);
    arg = context.consumeArg().tokens;
  }
  if (!(exists && skipIfExists)) {
    // Final arg is the expansion of the macro
    context.macros.set(name, {
      tokens: arg,
      numArgs
    });
  }
  return '';
};
defineMacro("\\newcommand", context => newcommand(context, false, true, false));
defineMacro("\\renewcommand", context => newcommand(context, true, false, false));
defineMacro("\\providecommand", context => newcommand(context, true, true, true));

// terminal (console) tools
defineMacro("\\message", context => {
  const arg = context.consumeArgs(1)[0];
  // eslint-disable-next-line no-console
  console.log(arg.reverse().map(token => token.text).join(""));
  return '';
});
defineMacro("\\errmessage", context => {
  const arg = context.consumeArgs(1)[0];
  // eslint-disable-next-line no-console
  console.error(arg.reverse().map(token => token.text).join(""));
  return '';
});
defineMacro("\\show", context => {
  const tok = context.popToken();
  const name = tok.text;
  // eslint-disable-next-line no-console
  console.log(tok, context.macros.get(name), src_functions[name], src_symbols.math[name], src_symbols.text[name]);
  return '';
});

//////////////////////////////////////////////////////////////////////
// Grouping
// \let\bgroup={ \let\egroup=}
defineMacro("\\bgroup", "{");
defineMacro("\\egroup", "}");

// Symbols from latex.ltx:
// \def~{\nobreakspace{}}
// \def\lq{`}
// \def\rq{'}
// \def \aa {\r a}
// \def \AA {\r A}
defineMacro("~", "\\nobreakspace");
defineMacro("\\lq", "`");
defineMacro("\\rq", "'");
defineMacro("\\aa", "\\r a");
defineMacro("\\AA", "\\r A");

// Copyright (C) and registered (R) symbols. Use raw symbol in MathML.
// \DeclareTextCommandDefault{\textcopyright}{\textcircled{c}}
// \DeclareTextCommandDefault{\textregistered}{\textcircled{%
//      \check@mathfonts\fontsize\sf@size\z@\math@fontsfalse\selectfont R}}
// \DeclareRobustCommand{\copyright}{%
//    \ifmmode{\nfss@text{\textcopyright}}\else\textcopyright\fi}
defineMacro("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
defineMacro("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
defineMacro("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");

// Characters omitted from Unicode range 1D400–1D7FF
defineMacro("\u212C", "\\mathscr{B}"); // script
defineMacro("\u2130", "\\mathscr{E}");
defineMacro("\u2131", "\\mathscr{F}");
defineMacro("\u210B", "\\mathscr{H}");
defineMacro("\u2110", "\\mathscr{I}");
defineMacro("\u2112", "\\mathscr{L}");
defineMacro("\u2133", "\\mathscr{M}");
defineMacro("\u211B", "\\mathscr{R}");
defineMacro("\u212D", "\\mathfrak{C}"); // Fraktur
defineMacro("\u210C", "\\mathfrak{H}");
defineMacro("\u2128", "\\mathfrak{Z}");

// Define \Bbbk with a macro that works in both HTML and MathML.
defineMacro("\\Bbbk", "\\Bbb{k}");

// \llap and \rlap render their contents in text mode
defineMacro("\\llap", "\\mathllap{\\textrm{#1}}");
defineMacro("\\rlap", "\\mathrlap{\\textrm{#1}}");
defineMacro("\\clap", "\\mathclap{\\textrm{#1}}");

// \mathstrut from the TeXbook, p 360
defineMacro("\\mathstrut", "\\vphantom{(}");

// \underbar from TeXbook p 353
defineMacro("\\underbar", "\\underline{\\text{#1}}");

// \not is defined by base/fontmath.ltx via
// \DeclareMathSymbol{\not}{\mathrel}{symbols}{"36}
// It's thus treated like a \mathrel, but defined by a symbol that has zero
// width but extends to the right.  We use \rlap to get that spacing.
// For MathML we write U+0338 here. buildMathML.js will then do the overlay.
defineMacro("\\not", "\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}" + "{\\char\"338}");

// Negated symbols from base/fontmath.ltx:
// \def\neq{\not=} \let\ne=\neq
// \DeclareRobustCommand
//   \notin{\mathrel{\m@th\mathpalette\c@ncel\in}}
// \def\c@ncel#1#2{\m@th\ooalign{$\hfil#1\mkern1mu/\hfil$\crcr$#1#2$}}
defineMacro("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
defineMacro("\\ne", "\\neq");
defineMacro("\u2260", "\\neq");
defineMacro("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}" + "{\\mathrel{\\char`∉}}");
defineMacro("\u2209", "\\notin");

// Unicode stacked relations
defineMacro("\u2258", "\\html@mathml{" + "\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}" + "}{\\mathrel{\\char`\u2258}}");
defineMacro("\u2259", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`\u2258}}");
defineMacro("\u225A", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`\u225A}}");
defineMacro("\u225B", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}" + "{\\mathrel{\\char`\u225B}}");
defineMacro("\u225D", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}" + "{\\mathrel{\\char`\u225D}}");
defineMacro("\u225E", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}" + "{\\mathrel{\\char`\u225E}}");
defineMacro("\u225F", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`\u225F}}");

// Misc Unicode
defineMacro("\u27C2", "\\perp");
defineMacro("\u203C", "\\mathclose{!\\mkern-0.8mu!}");
defineMacro("\u220C", "\\notni");
defineMacro("\u231C", "\\ulcorner");
defineMacro("\u231D", "\\urcorner");
defineMacro("\u231E", "\\llcorner");
defineMacro("\u231F", "\\lrcorner");
defineMacro("\u00A9", "\\copyright");
defineMacro("\u00AE", "\\textregistered");

// The KaTeX fonts have corners at codepoints that don't match Unicode.
// For MathML purposes, use the Unicode code point.
defineMacro("\\ulcorner", "\\html@mathml{\\@ulcorner}{\\mathop{\\char\"231c}}");
defineMacro("\\urcorner", "\\html@mathml{\\@urcorner}{\\mathop{\\char\"231d}}");
defineMacro("\\llcorner", "\\html@mathml{\\@llcorner}{\\mathop{\\char\"231e}}");
defineMacro("\\lrcorner", "\\html@mathml{\\@lrcorner}{\\mathop{\\char\"231f}}");

//////////////////////////////////////////////////////////////////////
// LaTeX_2ε

// \vdots{\vbox{\baselineskip4\p@  \lineskiplimit\z@
// \kern6\p@\hbox{.}\hbox{.}\hbox{.}}}
// We'll call \varvdots, which gets a glyph from symbols.js.
// The zero-width rule gets us an equivalent to the vertical 6pt kern.
defineMacro("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}");
defineMacro("\u22ee", "\\vdots");

//////////////////////////////////////////////////////////////////////
// amsmath.sty
// http://mirrors.concertpass.com/tex-archive/macros/latex/required/amsmath/amsmath.pdf

// Italic Greek capital letters.  AMS defines these with \DeclareMathSymbol,
// but they are equivalent to \mathit{\Letter}.
defineMacro("\\varGamma", "\\mathit{\\Gamma}");
defineMacro("\\varDelta", "\\mathit{\\Delta}");
defineMacro("\\varTheta", "\\mathit{\\Theta}");
defineMacro("\\varLambda", "\\mathit{\\Lambda}");
defineMacro("\\varXi", "\\mathit{\\Xi}");
defineMacro("\\varPi", "\\mathit{\\Pi}");
defineMacro("\\varSigma", "\\mathit{\\Sigma}");
defineMacro("\\varUpsilon", "\\mathit{\\Upsilon}");
defineMacro("\\varPhi", "\\mathit{\\Phi}");
defineMacro("\\varPsi", "\\mathit{\\Psi}");
defineMacro("\\varOmega", "\\mathit{\\Omega}");

//\newcommand{\substack}[1]{\subarray{c}#1\endsubarray}
defineMacro("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");

// \renewcommand{\colon}{\nobreak\mskip2mu\mathpunct{}\nonscript
// \mkern-\thinmuskip{:}\mskip6muplus1mu\relax}
defineMacro("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}" + "\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");

// \newcommand{\boxed}[1]{\fbox{\m@th$\displaystyle#1$}}
defineMacro("\\boxed", "\\fbox{$\\displaystyle{#1}$}");

// \def\iff{\DOTSB\;\Longleftrightarrow\;}
// \def\implies{\DOTSB\;\Longrightarrow\;}
// \def\impliedby{\DOTSB\;\Longleftarrow\;}
defineMacro("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
defineMacro("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
defineMacro("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");

// \def\dddot#1{{\mathop{#1}\limits^{\vbox to-1.4\ex@{\kern-\tw@\ex@
//  \hbox{\normalfont ...}\vss}}}}
// We use \overset which avoids the vertical shift of \mathop.
defineMacro("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");
defineMacro("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");

// AMSMath's automatic \dots, based on \mdots@@ macro.
const dotsByToken = {
  ',': '\\dotsc',
  '\\not': '\\dotsb',
  // \keybin@ checks for the following:
  '+': '\\dotsb',
  '=': '\\dotsb',
  '<': '\\dotsb',
  '>': '\\dotsb',
  '-': '\\dotsb',
  '*': '\\dotsb',
  ':': '\\dotsb',
  // Symbols whose definition starts with \DOTSB:
  '\\DOTSB': '\\dotsb',
  '\\coprod': '\\dotsb',
  '\\bigvee': '\\dotsb',
  '\\bigwedge': '\\dotsb',
  '\\biguplus': '\\dotsb',
  '\\bigcap': '\\dotsb',
  '\\bigcup': '\\dotsb',
  '\\prod': '\\dotsb',
  '\\sum': '\\dotsb',
  '\\bigotimes': '\\dotsb',
  '\\bigoplus': '\\dotsb',
  '\\bigodot': '\\dotsb',
  '\\bigsqcup': '\\dotsb',
  '\\And': '\\dotsb',
  '\\longrightarrow': '\\dotsb',
  '\\Longrightarrow': '\\dotsb',
  '\\longleftarrow': '\\dotsb',
  '\\Longleftarrow': '\\dotsb',
  '\\longleftrightarrow': '\\dotsb',
  '\\Longleftrightarrow': '\\dotsb',
  '\\mapsto': '\\dotsb',
  '\\longmapsto': '\\dotsb',
  '\\hookrightarrow': '\\dotsb',
  '\\doteq': '\\dotsb',
  // Symbols whose definition starts with \mathbin:
  '\\mathbin': '\\dotsb',
  // Symbols whose definition starts with \mathrel:
  '\\mathrel': '\\dotsb',
  '\\relbar': '\\dotsb',
  '\\Relbar': '\\dotsb',
  '\\xrightarrow': '\\dotsb',
  '\\xleftarrow': '\\dotsb',
  // Symbols whose definition starts with \DOTSI:
  '\\DOTSI': '\\dotsi',
  '\\int': '\\dotsi',
  '\\oint': '\\dotsi',
  '\\iint': '\\dotsi',
  '\\iiint': '\\dotsi',
  '\\iiiint': '\\dotsi',
  '\\idotsint': '\\dotsi',
  // Symbols whose definition starts with \DOTSX:
  '\\DOTSX': '\\dotsx'
};
const dotsbGroups = new Set(['bin', 'rel']);
defineMacro("\\dots", function (context) {
  // TODO: If used in text mode, should expand to \textellipsis.
  // However, in KaTeX, \textellipsis and \ldots behave the same
  // (in text mode), and it's unlikely we'd see any of the math commands
  // that affect the behavior of \dots when in text mode.  So fine for now
  // (until we support \ifmmode ... \else ... \fi).
  let thedots = '\\dotso';
  const next = context.expandAfterFuture().text;
  if (next in dotsByToken) {
    thedots = dotsByToken[next];
  } else if (next.slice(0, 4) === '\\not') {
    thedots = '\\dotsb';
  } else if (next in src_symbols.math) {
    if (dotsbGroups.has(src_symbols.math[next].group)) {
      thedots = '\\dotsb';
    }
  }
  return thedots;
});
const spaceAfterDots = {
  // \rightdelim@ checks for the following:
  ')': true,
  ']': true,
  '\\rbrack': true,
  '\\}': true,
  '\\rbrace': true,
  '\\rangle': true,
  '\\rceil': true,
  '\\rfloor': true,
  '\\rgroup': true,
  '\\rmoustache': true,
  '\\right': true,
  '\\bigr': true,
  '\\biggr': true,
  '\\Bigr': true,
  '\\Biggr': true,
  // \extra@ also tests for the following:
  '$': true,
  // \extrap@ checks for the following:
  ';': true,
  '.': true,
  ',': true
};
defineMacro("\\dotso", function (context) {
  const next = context.future().text;
  if (next in spaceAfterDots) {
    return "\\ldots\\,";
  } else {
    return "\\ldots";
  }
});
defineMacro("\\dotsc", function (context) {
  const next = context.future().text;
  // \dotsc uses \extra@ but not \extrap@, instead specially checking for
  // ';' and '.', but doesn't check for ','.
  if (next in spaceAfterDots && next !== ',') {
    return "\\ldots\\,";
  } else {
    return "\\ldots";
  }
});
defineMacro("\\cdots", function (context) {
  const next = context.future().text;
  if (next in spaceAfterDots) {
    return "\\@cdots\\,";
  } else {
    return "\\@cdots";
  }
});
defineMacro("\\dotsb", "\\cdots");
defineMacro("\\dotsm", "\\cdots");
defineMacro("\\dotsi", "\\!\\cdots");
// amsmath doesn't actually define \dotsx, but \dots followed by a macro
// starting with \DOTSX implies \dotso, and then \extra@ detects this case
// and forces the added `\,`.
defineMacro("\\dotsx", "\\ldots\\,");

// \let\DOTSI\relax
// \let\DOTSB\relax
// \let\DOTSX\relax
defineMacro("\\DOTSI", "\\relax");
defineMacro("\\DOTSB", "\\relax");
defineMacro("\\DOTSX", "\\relax");

// Spacing, based on amsmath.sty's override of LaTeX defaults
// \DeclareRobustCommand{\tmspace}[3]{%
//   \ifmmode\mskip#1#2\else\kern#1#3\fi\relax}
defineMacro("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
// \renewcommand{\,}{\tmspace+\thinmuskip{.1667em}}
// TODO: math mode should use \thinmuskip
defineMacro("\\,", "\\tmspace+{3mu}{.1667em}");
// \let\thinspace\,
defineMacro("\\thinspace", "\\,");
// \def\>{\mskip\medmuskip}
// \renewcommand{\:}{\tmspace+\medmuskip{.2222em}}
// TODO: \> and math mode of \: should use \medmuskip = 4mu plus 2mu minus 4mu
defineMacro("\\>", "\\mskip{4mu}");
defineMacro("\\:", "\\tmspace+{4mu}{.2222em}");
// \let\medspace\:
defineMacro("\\medspace", "\\:");
// \renewcommand{\;}{\tmspace+\thickmuskip{.2777em}}
// TODO: math mode should use \thickmuskip = 5mu plus 5mu
defineMacro("\\;", "\\tmspace+{5mu}{.2777em}");
// \let\thickspace\;
defineMacro("\\thickspace", "\\;");
// \renewcommand{\!}{\tmspace-\thinmuskip{.1667em}}
// TODO: math mode should use \thinmuskip
defineMacro("\\!", "\\tmspace-{3mu}{.1667em}");
// \let\negthinspace\!
defineMacro("\\negthinspace", "\\!");
// \newcommand{\negmedspace}{\tmspace-\medmuskip{.2222em}}
// TODO: math mode should use \medmuskip
defineMacro("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
// \newcommand{\negthickspace}{\tmspace-\thickmuskip{.2777em}}
// TODO: math mode should use \thickmuskip
defineMacro("\\negthickspace", "\\tmspace-{5mu}{.277em}");
// \def\enspace{\kern.5em }
defineMacro("\\enspace", "\\kern.5em ");
// \def\enskip{\hskip.5em\relax}
defineMacro("\\enskip", "\\hskip.5em\\relax");
// \def\quad{\hskip1em\relax}
defineMacro("\\quad", "\\hskip1em\\relax");
// \def\qquad{\hskip2em\relax}
defineMacro("\\qquad", "\\hskip2em\\relax");

// \tag@in@display form of \tag
defineMacro("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
defineMacro("\\tag@paren", "\\tag@literal{({#1})}");
defineMacro("\\tag@literal", context => {
  if (context.macros.get("\\df@tag")) {
    throw new src_ParseError("Multiple \\tag");
  }
  return "\\gdef\\df@tag{\\text{#1}}";
});

// \renewcommand{\bmod}{\nonscript\mskip-\medmuskip\mkern5mu\mathbin
//   {\operator@font mod}\penalty900
//   \mkern5mu\nonscript\mskip-\medmuskip}
// \newcommand{\pod}[1]{\allowbreak
//   \if@display\mkern18mu\else\mkern8mu\fi(#1)}
// \renewcommand{\pmod}[1]{\pod{{\operator@font mod}\mkern6mu#1}}
// \newcommand{\mod}[1]{\allowbreak\if@display\mkern18mu
//   \else\mkern12mu\fi{\operator@font mod}\,\,#1}
// TODO: math mode should use \medmuskip = 4mu plus 2mu minus 4mu
defineMacro("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}" + "\\mathbin{\\rm mod}" + "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
defineMacro("\\pod", "\\allowbreak" + "\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
defineMacro("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
defineMacro("\\mod", "\\allowbreak" + "\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}" + "{\\rm mod}\\,\\,#1");

//////////////////////////////////////////////////////////////////////
// LaTeX source2e

// \expandafter\let\expandafter\@normalcr
//     \csname\expandafter\@gobble\string\\ \endcsname
// \DeclareRobustCommand\newline{\@normalcr\relax}
defineMacro("\\newline", "\\\\\\relax");

// \def\TeX{T\kern-.1667em\lower.5ex\hbox{E}\kern-.125emX\@}
// TODO: Doesn't normally work in math mode because \@ fails.  KaTeX doesn't
// support \@ yet, so that's omitted, and we add \text so that the result
// doesn't look funny in math mode.
defineMacro("\\TeX", "\\textrm{\\html@mathml{" + "T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX" + "}{TeX}}");

// \DeclareRobustCommand{\LaTeX}{L\kern-.36em%
//         {\sbox\z@ T%
//          \vbox to\ht\z@{\hbox{\check@mathfonts
//                               \fontsize\sf@size\z@
//                               \math@fontsfalse\selectfont
//                               A}%
//                         \vss}%
//         }%
//         \kern-.15em%
//         \TeX}
// This code aligns the top of the A with the T (from the perspective of TeX's
// boxes, though visually the A appears to extend above slightly).
// We compute the corresponding \raisebox when A is rendered in \normalsize
// \scriptstyle, which has a scale factor of 0.7 (see Options.js).
const latexRaiseA = makeEm(fontMetricsData['Main-Regular']["T".charCodeAt(0)][1] - 0.7 * fontMetricsData['Main-Regular']["A".charCodeAt(0)][1]);
defineMacro("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + latexRaiseA + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");

// New KaTeX logo based on tweaking LaTeX logo
defineMacro("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + latexRaiseA + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");

// \DeclareRobustCommand\hspace{\@ifstar\@hspacer\@hspace}
// \def\@hspace#1{\hskip  #1\relax}
// \def\@hspacer#1{\vrule \@width\z@\nobreak
//                 \hskip #1\hskip \z@skip}
defineMacro("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
defineMacro("\\@hspace", "\\hskip #1\\relax");
defineMacro("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");

//////////////////////////////////////////////////////////////////////
// mathtools.sty

//\providecommand\ordinarycolon{:}
defineMacro("\\ordinarycolon", ":");
//\def\vcentcolon{\mathrel{\mathop\ordinarycolon}}
//TODO(edemaine): Not yet centered. Fix via \raisebox or #726
defineMacro("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
// \providecommand*\dblcolon{\vcentcolon\mathrel{\mkern-.9mu}\vcentcolon}
defineMacro("\\dblcolon", "\\html@mathml{" + "\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}" + "{\\mathop{\\char\"2237}}");
// \providecommand*\coloneqq{\vcentcolon\mathrel{\mkern-1.2mu}=}
defineMacro("\\coloneqq", "\\html@mathml{" + "\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}" + "{\\mathop{\\char\"2254}}"); // ≔
// \providecommand*\Coloneqq{\dblcolon\mathrel{\mkern-1.2mu}=}
defineMacro("\\Coloneqq", "\\html@mathml{" + "\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}" + "{\\mathop{\\char\"2237\\char\"3d}}");
// \providecommand*\coloneq{\vcentcolon\mathrel{\mkern-1.2mu}\mathrel{-}}
defineMacro("\\coloneq", "\\html@mathml{" + "\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}" + "{\\mathop{\\char\"3a\\char\"2212}}");
// \providecommand*\Coloneq{\dblcolon\mathrel{\mkern-1.2mu}\mathrel{-}}
defineMacro("\\Coloneq", "\\html@mathml{" + "\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}" + "{\\mathop{\\char\"2237\\char\"2212}}");
// \providecommand*\eqqcolon{=\mathrel{\mkern-1.2mu}\vcentcolon}
defineMacro("\\eqqcolon", "\\html@mathml{" + "\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}" + "{\\mathop{\\char\"2255}}"); // ≕
// \providecommand*\Eqqcolon{=\mathrel{\mkern-1.2mu}\dblcolon}
defineMacro("\\Eqqcolon", "\\html@mathml{" + "\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}" + "{\\mathop{\\char\"3d\\char\"2237}}");
// \providecommand*\eqcolon{\mathrel{-}\mathrel{\mkern-1.2mu}\vcentcolon}
defineMacro("\\eqcolon", "\\html@mathml{" + "\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}" + "{\\mathop{\\char\"2239}}");
// \providecommand*\Eqcolon{\mathrel{-}\mathrel{\mkern-1.2mu}\dblcolon}
defineMacro("\\Eqcolon", "\\html@mathml{" + "\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}" + "{\\mathop{\\char\"2212\\char\"2237}}");
// \providecommand*\colonapprox{\vcentcolon\mathrel{\mkern-1.2mu}\approx}
defineMacro("\\colonapprox", "\\html@mathml{" + "\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}" + "{\\mathop{\\char\"3a\\char\"2248}}");
// \providecommand*\Colonapprox{\dblcolon\mathrel{\mkern-1.2mu}\approx}
defineMacro("\\Colonapprox", "\\html@mathml{" + "\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}" + "{\\mathop{\\char\"2237\\char\"2248}}");
// \providecommand*\colonsim{\vcentcolon\mathrel{\mkern-1.2mu}\sim}
defineMacro("\\colonsim", "\\html@mathml{" + "\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}" + "{\\mathop{\\char\"3a\\char\"223c}}");
// \providecommand*\Colonsim{\dblcolon\mathrel{\mkern-1.2mu}\sim}
defineMacro("\\Colonsim", "\\html@mathml{" + "\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}" + "{\\mathop{\\char\"2237\\char\"223c}}");

// Some Unicode characters are implemented with macros to mathtools functions.
defineMacro("\u2237", "\\dblcolon"); // ::
defineMacro("\u2239", "\\eqcolon"); // -:
defineMacro("\u2254", "\\coloneqq"); // :=
defineMacro("\u2255", "\\eqqcolon"); // =:
defineMacro("\u2A74", "\\Coloneqq"); // ::=

//////////////////////////////////////////////////////////////////////
// colonequals.sty

// Alternate names for mathtools's macros:
defineMacro("\\ratio", "\\vcentcolon");
defineMacro("\\coloncolon", "\\dblcolon");
defineMacro("\\colonequals", "\\coloneqq");
defineMacro("\\coloncolonequals", "\\Coloneqq");
defineMacro("\\equalscolon", "\\eqqcolon");
defineMacro("\\equalscoloncolon", "\\Eqqcolon");
defineMacro("\\colonminus", "\\coloneq");
defineMacro("\\coloncolonminus", "\\Coloneq");
defineMacro("\\minuscolon", "\\eqcolon");
defineMacro("\\minuscoloncolon", "\\Eqcolon");
// \colonapprox name is same in mathtools and colonequals.
defineMacro("\\coloncolonapprox", "\\Colonapprox");
// \colonsim name is same in mathtools and colonequals.
defineMacro("\\coloncolonsim", "\\Colonsim");

// Additional macros, implemented by analogy with mathtools definitions:
defineMacro("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
defineMacro("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
defineMacro("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
defineMacro("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");

// Present in newtxmath, pxfonts and txfonts
defineMacro("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`\u220C}}");
defineMacro("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
defineMacro("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");

//////////////////////////////////////////////////////////////////////
// From amsopn.sty
defineMacro("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
defineMacro("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
defineMacro("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
defineMacro("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
defineMacro("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
defineMacro("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");

//////////////////////////////////////////////////////////////////////
// MathML alternates for KaTeX glyphs in the Unicode private area
defineMacro("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{\u2269}");
defineMacro("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{\u2268}");
defineMacro("\\ngeqq", "\\html@mathml{\\@ngeqq}{\u2271}");
defineMacro("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{\u2271}");
defineMacro("\\nleqq", "\\html@mathml{\\@nleqq}{\u2270}");
defineMacro("\\nleqslant", "\\html@mathml{\\@nleqslant}{\u2270}");
defineMacro("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
defineMacro("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
defineMacro("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{\u2288}");
defineMacro("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{\u2289}");
defineMacro("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
defineMacro("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
defineMacro("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
defineMacro("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
defineMacro("\\imath", "\\html@mathml{\\@imath}{\u0131}");
defineMacro("\\jmath", "\\html@mathml{\\@jmath}{\u0237}");

//////////////////////////////////////////////////////////////////////
// stmaryrd and semantic

// The stmaryrd and semantic packages render the next four items by calling a
// glyph. Those glyphs do not exist in the KaTeX fonts. Hence the macros.

defineMacro("\\llbracket", "\\html@mathml{" + "\\mathopen{[\\mkern-3.2mu[}}" + "{\\mathopen{\\char`\u27e6}}");
defineMacro("\\rrbracket", "\\html@mathml{" + "\\mathclose{]\\mkern-3.2mu]}}" + "{\\mathclose{\\char`\u27e7}}");
defineMacro("\u27e6", "\\llbracket"); // blackboard bold [
defineMacro("\u27e7", "\\rrbracket"); // blackboard bold ]

defineMacro("\\lBrace", "\\html@mathml{" + "\\mathopen{\\{\\mkern-3.2mu[}}" + "{\\mathopen{\\char`\u2983}}");
defineMacro("\\rBrace", "\\html@mathml{" + "\\mathclose{]\\mkern-3.2mu\\}}}" + "{\\mathclose{\\char`\u2984}}");
defineMacro("\u2983", "\\lBrace"); // blackboard bold {
defineMacro("\u2984", "\\rBrace"); // blackboard bold }

// TODO: Create variable sized versions of the last two items. I believe that
// will require new font glyphs.

// The stmaryrd function `\minuso` provides a "Plimsoll" symbol that
// superimposes the characters \circ and \mathminus. Used in chemistry.
defineMacro("\\minuso", "\\mathbin{\\html@mathml{" + "{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}" + "{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}" + "{\\char`⦵}}");
defineMacro("⦵", "\\minuso");

//////////////////////////////////////////////////////////////////////
// texvc.sty

// The texvc package contains macros available in mediawiki pages.
// We omit the functions deprecated at
// https://en.wikipedia.org/wiki/Help:Displaying_a_formula#Deprecated_syntax

// We also omit texvc's \O, which conflicts with \text{\O}

defineMacro("\\darr", "\\downarrow");
defineMacro("\\dArr", "\\Downarrow");
defineMacro("\\Darr", "\\Downarrow");
defineMacro("\\lang", "\\langle");
defineMacro("\\rang", "\\rangle");
defineMacro("\\uarr", "\\uparrow");
defineMacro("\\uArr", "\\Uparrow");
defineMacro("\\Uarr", "\\Uparrow");
defineMacro("\\N", "\\mathbb{N}");
defineMacro("\\R", "\\mathbb{R}");
defineMacro("\\Z", "\\mathbb{Z}");
defineMacro("\\alef", "\\aleph");
defineMacro("\\alefsym", "\\aleph");
defineMacro("\\Alpha", "\\mathrm{A}");
defineMacro("\\Beta", "\\mathrm{B}");
defineMacro("\\bull", "\\bullet");
defineMacro("\\Chi", "\\mathrm{X}");
defineMacro("\\clubs", "\\clubsuit");
defineMacro("\\cnums", "\\mathbb{C}");
defineMacro("\\Complex", "\\mathbb{C}");
defineMacro("\\Dagger", "\\ddagger");
defineMacro("\\diamonds", "\\diamondsuit");
defineMacro("\\empty", "\\emptyset");
defineMacro("\\Epsilon", "\\mathrm{E}");
defineMacro("\\Eta", "\\mathrm{H}");
defineMacro("\\exist", "\\exists");
defineMacro("\\harr", "\\leftrightarrow");
defineMacro("\\hArr", "\\Leftrightarrow");
defineMacro("\\Harr", "\\Leftrightarrow");
defineMacro("\\hearts", "\\heartsuit");
defineMacro("\\image", "\\Im");
defineMacro("\\infin", "\\infty");
defineMacro("\\Iota", "\\mathrm{I}");
defineMacro("\\isin", "\\in");
defineMacro("\\Kappa", "\\mathrm{K}");
defineMacro("\\larr", "\\leftarrow");
defineMacro("\\lArr", "\\Leftarrow");
defineMacro("\\Larr", "\\Leftarrow");
defineMacro("\\lrarr", "\\leftrightarrow");
defineMacro("\\lrArr", "\\Leftrightarrow");
defineMacro("\\Lrarr", "\\Leftrightarrow");
defineMacro("\\Mu", "\\mathrm{M}");
defineMacro("\\natnums", "\\mathbb{N}");
defineMacro("\\Nu", "\\mathrm{N}");
defineMacro("\\Omicron", "\\mathrm{O}");
defineMacro("\\plusmn", "\\pm");
defineMacro("\\rarr", "\\rightarrow");
defineMacro("\\rArr", "\\Rightarrow");
defineMacro("\\Rarr", "\\Rightarrow");
defineMacro("\\real", "\\Re");
defineMacro("\\reals", "\\mathbb{R}");
defineMacro("\\Reals", "\\mathbb{R}");
defineMacro("\\Rho", "\\mathrm{P}");
defineMacro("\\sdot", "\\cdot");
defineMacro("\\sect", "\\S");
defineMacro("\\spades", "\\spadesuit");
defineMacro("\\sub", "\\subset");
defineMacro("\\sube", "\\subseteq");
defineMacro("\\supe", "\\supseteq");
defineMacro("\\Tau", "\\mathrm{T}");
defineMacro("\\thetasym", "\\vartheta");
// TODO: defineMacro("\\varcoppa", "\\\mbox{\\coppa}");
defineMacro("\\weierp", "\\wp");
defineMacro("\\Zeta", "\\mathrm{Z}");

//////////////////////////////////////////////////////////////////////
// statmath.sty
// https://ctan.math.illinois.edu/macros/latex/contrib/statmath/statmath.pdf

defineMacro("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
defineMacro("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
defineMacro("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");

//////////////////////////////////////////////////////////////////////
// braket.sty
// http://ctan.math.washington.edu/tex-archive/macros/latex/contrib/braket/braket.pdf

defineMacro("\\bra", "\\mathinner{\\langle{#1}|}");
defineMacro("\\ket", "\\mathinner{|{#1}\\rangle}");
defineMacro("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
defineMacro("\\Bra", "\\left\\langle#1\\right|");
defineMacro("\\Ket", "\\left|#1\\right\\rangle");
const braketHelper = one => context => {
  const left = context.consumeArg().tokens;
  const middle = context.consumeArg().tokens;
  const middleDouble = context.consumeArg().tokens;
  const right = context.consumeArg().tokens;
  const oldMiddle = context.macros.get("|");
  const oldMiddleDouble = context.macros.get("\\|");
  context.macros.beginGroup();
  const midMacro = double => context => {
    if (one) {
      // Only modify the first instance of | or \|
      context.macros.set("|", oldMiddle);
      if (middleDouble.length) {
        context.macros.set("\\|", oldMiddleDouble);
      }
    }
    let doubled = double;
    if (!double && middleDouble.length) {
      // Mimic \@ifnextchar
      const nextToken = context.future();
      if (nextToken.text === "|") {
        context.popToken();
        doubled = true;
      }
    }
    return {
      tokens: doubled ? middleDouble : middle,
      numArgs: 0
    };
  };
  context.macros.set("|", midMacro(false));
  if (middleDouble.length) {
    context.macros.set("\\|", midMacro(true));
  }
  const arg = context.consumeArg().tokens;
  const expanded = context.expandTokens([...right, ...arg, ...left // reversed
  ]);
  context.macros.endGroup();
  return {
    tokens: expanded.reverse(),
    numArgs: 0
  };
};
defineMacro("\\bra@ket", braketHelper(false));
defineMacro("\\bra@set", braketHelper(true));
defineMacro("\\Braket", "\\bra@ket{\\left\\langle}" + "{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
defineMacro("\\Set", "\\bra@set{\\left\\{\\:}" + "{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
defineMacro("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
// has no support for special || or \|

//////////////////////////////////////////////////////////////////////
// actuarialangle.dtx
defineMacro("\\angln", "{\\angl n}");

// Custom Khan Academy colors, should be moved to an optional package
defineMacro("\\blue", "\\textcolor{##6495ed}{#1}");
defineMacro("\\orange", "\\textcolor{##ffa500}{#1}");
defineMacro("\\pink", "\\textcolor{##ff00af}{#1}");
defineMacro("\\red", "\\textcolor{##df0030}{#1}");
defineMacro("\\green", "\\textcolor{##28ae7b}{#1}");
defineMacro("\\gray", "\\textcolor{gray}{#1}");
defineMacro("\\purple", "\\textcolor{##9d38bd}{#1}");
defineMacro("\\blueA", "\\textcolor{##ccfaff}{#1}");
defineMacro("\\blueB", "\\textcolor{##80f6ff}{#1}");
defineMacro("\\blueC", "\\textcolor{##63d9ea}{#1}");
defineMacro("\\blueD", "\\textcolor{##11accd}{#1}");
defineMacro("\\blueE", "\\textcolor{##0c7f99}{#1}");
defineMacro("\\tealA", "\\textcolor{##94fff5}{#1}");
defineMacro("\\tealB", "\\textcolor{##26edd5}{#1}");
defineMacro("\\tealC", "\\textcolor{##01d1c1}{#1}");
defineMacro("\\tealD", "\\textcolor{##01a995}{#1}");
defineMacro("\\tealE", "\\textcolor{##208170}{#1}");
defineMacro("\\greenA", "\\textcolor{##b6ffb0}{#1}");
defineMacro("\\greenB", "\\textcolor{##8af281}{#1}");
defineMacro("\\greenC", "\\textcolor{##74cf70}{#1}");
defineMacro("\\greenD", "\\textcolor{##1fab54}{#1}");
defineMacro("\\greenE", "\\textcolor{##0d923f}{#1}");
defineMacro("\\goldA", "\\textcolor{##ffd0a9}{#1}");
defineMacro("\\goldB", "\\textcolor{##ffbb71}{#1}");
defineMacro("\\goldC", "\\textcolor{##ff9c39}{#1}");
defineMacro("\\goldD", "\\textcolor{##e07d10}{#1}");
defineMacro("\\goldE", "\\textcolor{##a75a05}{#1}");
defineMacro("\\redA", "\\textcolor{##fca9a9}{#1}");
defineMacro("\\redB", "\\textcolor{##ff8482}{#1}");
defineMacro("\\redC", "\\textcolor{##f9685d}{#1}");
defineMacro("\\redD", "\\textcolor{##e84d39}{#1}");
defineMacro("\\redE", "\\textcolor{##bc2612}{#1}");
defineMacro("\\maroonA", "\\textcolor{##ffbde0}{#1}");
defineMacro("\\maroonB", "\\textcolor{##ff92c6}{#1}");
defineMacro("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
defineMacro("\\maroonD", "\\textcolor{##ca337c}{#1}");
defineMacro("\\maroonE", "\\textcolor{##9e034e}{#1}");
defineMacro("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
defineMacro("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
defineMacro("\\purpleC", "\\textcolor{##aa87ff}{#1}");
defineMacro("\\purpleD", "\\textcolor{##7854ab}{#1}");
defineMacro("\\purpleE", "\\textcolor{##543b78}{#1}");
defineMacro("\\mintA", "\\textcolor{##f5f9e8}{#1}");
defineMacro("\\mintB", "\\textcolor{##edf2df}{#1}");
defineMacro("\\mintC", "\\textcolor{##e0e5cc}{#1}");
defineMacro("\\grayA", "\\textcolor{##f6f7f7}{#1}");
defineMacro("\\grayB", "\\textcolor{##f0f1f2}{#1}");
defineMacro("\\grayC", "\\textcolor{##e3e5e6}{#1}");
defineMacro("\\grayD", "\\textcolor{##d6d8da}{#1}");
defineMacro("\\grayE", "\\textcolor{##babec2}{#1}");
defineMacro("\\grayF", "\\textcolor{##888d93}{#1}");
defineMacro("\\grayG", "\\textcolor{##626569}{#1}");
defineMacro("\\grayH", "\\textcolor{##3b3e40}{#1}");
defineMacro("\\grayI", "\\textcolor{##21242c}{#1}");
defineMacro("\\kaBlue", "\\textcolor{##314453}{#1}");
defineMacro("\\kaGreen", "\\textcolor{##71B307}{#1}");
;// ./src/MacroExpander.ts
/**
 * This file contains the “gullet” where macros are expanded
 * until only non-macro tokens remain.
 */









// List of commands that act like macros but aren't defined as a macro,
// function, or symbol.  Used in `isDefined`.
const implicitCommands = {
  "^": true,
  // Parser.js
  "_": true,
  // Parser.js
  "\\limits": true,
  // Parser.js
  "\\nolimits": true // Parser.js
};
class MacroExpander {
  constructor(input, settings, mode) {
    this.settings = settings;
    this.expansionCount = 0;
    this.feed(input);
    // Make new global namespace
    this.macros = new Namespace(src_macros, settings.macros);
    this.mode = mode;
    this.stack = []; // contains tokens in REVERSE order
  }

  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(input) {
    this.lexer = new Lexer(input, this.settings);
  }

  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(newMode) {
    this.mode = newMode;
  }

  /**
   * Start a new group nesting within all namespaces.
   */
  beginGroup() {
    this.macros.beginGroup();
  }

  /**
   * End current group nesting within all namespaces.
   */
  endGroup() {
    this.macros.endGroup();
  }

  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    this.macros.endGroups();
  }

  /**
   * Returns the topmost token on the stack, without expanding it.
   * Similar in behavior to TeX's `\futurelet`.
   */
  future() {
    if (this.stack.length === 0) {
      this.pushToken(this.lexer.lex());
    }
    return this.stack[this.stack.length - 1];
  }

  /**
   * Remove and return the next unexpanded token.
   */
  popToken() {
    this.future(); // ensure non-empty stack
    return this.stack.pop();
  }

  /**
   * Add a given token to the token stack.  In particular, this get be used
   * to put back a token returned from one of the other methods.
   */
  pushToken(token) {
    this.stack.push(token);
  }

  /**
   * Append an array of tokens to the token stack.
   */
  pushTokens(tokens) {
    this.stack.push(...tokens);
  }

  /**
   * Find an macro argument without expanding tokens and append the array of
   * tokens to the token stack. Uses Token as a container for the result.
   */
  scanArgument(isOptional) {
    let start;
    let end;
    let tokens;
    if (isOptional) {
      this.consumeSpaces(); // \@ifnextchar gobbles any space following it
      if (this.future().text !== "[") {
        return null;
      }
      start = this.popToken(); // don't include [ in tokens
      ({
        tokens,
        end
      } = this.consumeArg(["]"]));
    } else {
      ({
        tokens,
        start,
        end
      } = this.consumeArg());
    }

    // indicate the end of an argument
    this.pushToken(new Token("EOF", end.loc));
    this.pushTokens(tokens);
    return new Token("", SourceLocation.range(start, end));
  }

  /**
   * Consume all following space tokens, without expansion.
   */
  consumeSpaces() {
    for (;;) {
      const token = this.future();
      if (token.text === " ") {
        this.stack.pop();
      } else {
        break;
      }
    }
  }

  /**
   * Consume an argument from the token stream, and return the resulting array
   * of tokens and start/end token.
   */
  consumeArg(delims) {
    // The argument for a delimited parameter is the shortest (possibly
    // empty) sequence of tokens with properly nested {...} groups that is
    // followed ... by this particular list of non-parameter tokens.
    // The argument for an undelimited parameter is the next nonblank
    // token, unless that token is ‘{’, when the argument will be the
    // entire {...} group that follows.
    const tokens = [];
    const isDelimited = delims && delims.length > 0;
    if (!isDelimited) {
      // Ignore spaces between arguments.  As the TeXbook says:
      // "After you have said ‘\def\row#1#2{...}’, you are allowed to
      //  put spaces between the arguments (e.g., ‘\row x n’), because
      //  TeX doesn’t use single spaces as undelimited arguments."
      this.consumeSpaces();
    }
    const start = this.future();
    let tok;
    let depth = 0;
    let match = 0;
    do {
      tok = this.popToken();
      tokens.push(tok);
      if (tok.text === "{") {
        ++depth;
      } else if (tok.text === "}") {
        --depth;
        if (depth === -1) {
          throw new src_ParseError("Extra }", tok);
        }
      } else if (tok.text === "EOF") {
        throw new src_ParseError("Unexpected end of input in a macro argument" + ", expected '" + (delims && isDelimited ? delims[match] : "}") + "'", tok);
      }
      if (delims && isDelimited) {
        if ((depth === 0 || depth === 1 && delims[match] === "{") && tok.text === delims[match]) {
          ++match;
          if (match === delims.length) {
            // don't include delims in tokens
            tokens.splice(-match, match);
            break;
          }
        } else {
          match = 0;
        }
      }
    } while (depth !== 0 || isDelimited);
    // If the argument found ... has the form ‘{<nested tokens>}’,
    // ... the outermost braces enclosing the argument are removed
    if (start.text === "{" && tokens[tokens.length - 1].text === "}") {
      tokens.pop();
      tokens.shift();
    }
    tokens.reverse(); // to fit in with stack order
    return {
      tokens,
      start,
      end: tok
    };
  }

  /**
   * Consume the specified number of (delimited) arguments from the token
   * stream and return the resulting array of arguments.
   */
  consumeArgs(numArgs, delimiters) {
    if (delimiters) {
      if (delimiters.length !== numArgs + 1) {
        throw new src_ParseError("The length of delimiters doesn't match the number of args!");
      }
      const delims = delimiters[0];
      for (let i = 0; i < delims.length; i++) {
        const tok = this.popToken();
        if (delims[i] !== tok.text) {
          throw new src_ParseError("Use of the macro doesn't match its definition", tok);
        }
      }
    }
    const args = [];
    for (let i = 0; i < numArgs; i++) {
      args.push(this.consumeArg(delimiters && delimiters[i + 1]).tokens);
    }
    return args;
  }

  /**
   * Increment `expansionCount` by the specified amount.
   * Throw an error if it exceeds `maxExpand`.
   */
  countExpansion(amount) {
    this.expansionCount += amount;
    if (this.expansionCount > this.settings.maxExpand) {
      throw new src_ParseError("Too many expansions: infinite loop or " + "need to increase maxExpand setting");
    }
  }

  /**
   * Expand the next token only once if possible.
   *
   * If the token is expanded, the resulting tokens will be pushed onto
   * the stack in reverse order, and the number of such tokens will be
   * returned.  This number might be zero or positive.
   *
   * If not, the return value is `false`, and the next token remains at the
   * top of the stack.
   *
   * In either case, the next token will be on the top of the stack,
   * or the stack will be empty (in case of empty expansion
   * and no other tokens).
   *
   * Used to implement `expandAfterFuture` and `expandNextToken`.
   *
   * If expandableOnly, only expandable tokens are expanded and
   * an undefined control sequence results in an error.
   */
  expandOnce(expandableOnly) {
    const topToken = this.popToken();
    const name = topToken.text;
    const expansion = !topToken.noexpand ? this._getExpansion(name) : null;
    if (expansion == null || expandableOnly && expansion.unexpandable) {
      if (expandableOnly && expansion == null && name[0] === "\\" && !this.isDefined(name)) {
        throw new src_ParseError("Undefined control sequence: " + name);
      }
      this.pushToken(topToken);
      return false;
    }
    this.countExpansion(1);
    let tokens = expansion.tokens;
    const args = this.consumeArgs(expansion.numArgs, expansion.delimiters);
    if (expansion.numArgs) {
      // paste arguments in place of the placeholders
      tokens = tokens.slice(); // make a shallow copy
      for (let i = tokens.length - 1; i >= 0; --i) {
        let tok = tokens[i];
        if (tok.text === "#") {
          if (i === 0) {
            throw new src_ParseError("Incomplete placeholder at end of macro body", tok);
          }
          tok = tokens[--i]; // next token on stack
          if (tok.text === "#") {
            // ## → #
            tokens.splice(i + 1, 1); // drop first #
          } else if (/^[1-9]$/.test(tok.text)) {
            // replace the placeholder with the indicated argument
            tokens.splice(i, 2, ...args[+tok.text - 1]);
          } else {
            throw new src_ParseError("Not a valid argument number", tok);
          }
        }
      }
    }
    // Concatenate expansion onto top of stack.
    this.pushTokens(tokens);
    return tokens.length;
  }

  /**
   * Expand the next token only once (if possible), and return the resulting
   * top token on the stack (without removing anything from the stack).
   * Similar in behavior to TeX's `\expandafter\futurelet`.
   * Equivalent to expandOnce() followed by future().
   */
  expandAfterFuture() {
    this.expandOnce();
    return this.future();
  }

  /**
   * Recursively expand first token, then return first non-expandable token.
   */
  expandNextToken() {
    for (;;) {
      if (this.expandOnce() === false) {
        // fully expanded
        const token = this.stack.pop();
        // the token after \noexpand is interpreted as if its meaning
        // were ‘\relax’
        if (token.treatAsRelax) {
          token.text = "\\relax";
        }
        return token;
      }
    }
  }

  /**
   * Fully expand the given macro name and return the resulting list of
   * tokens, or return `undefined` if no such macro is defined.
   */
  expandMacro(name) {
    return this.macros.has(name) ? this.expandTokens([new Token(name)]) : undefined;
  }

  /**
   * Fully expand the given token stream and return the resulting list of
   * tokens.  Note that the input tokens are in reverse order, but the
   * output tokens are in forward order.
   */
  expandTokens(tokens) {
    const output = [];
    const oldStackLength = this.stack.length;
    this.pushTokens(tokens);
    while (this.stack.length > oldStackLength) {
      // Expand only expandable tokens
      if (this.expandOnce(true) === false) {
        // fully expanded
        const token = this.stack.pop();
        if (token.treatAsRelax) {
          // the expansion of \noexpand is the token itself
          token.noexpand = false;
          token.treatAsRelax = false;
        }
        output.push(token);
      }
    }
    // Count all of these tokens as additional expansions, to prevent
    // exponential blowup from linearly many \edef's.
    this.countExpansion(output.length);
    return output;
  }

  /**
   * Fully expand the given macro name and return the result as a string,
   * or return `undefined` if no such macro is defined.
   */
  expandMacroAsText(name) {
    const tokens = this.expandMacro(name);
    if (tokens) {
      return tokens.map(token => token.text).join("");
    } else {
      return tokens;
    }
  }

  /**
   * Returns the expanded macro as a reversed array of tokens and a macro
   * argument count.  Or returns `null` if no such macro.
   */
  _getExpansion(name) {
    const definition = this.macros.get(name);
    if (definition == null) {
      // mainly checking for undefined here
      return definition;
    }
    // If a single character has an associated catcode other than 13
    // (active character), then don't expand it.
    if (name.length === 1) {
      const catcode = this.lexer.catcodes[name];
      if (catcode != null && catcode !== 13) {
        return;
      }
    }
    const expansion = typeof definition === "function" ? definition(this) : definition;
    if (typeof expansion === "string") {
      let numArgs = 0;
      if (expansion.includes("#")) {
        const stripped = expansion.replace(/##/g, "");
        while (stripped.includes("#" + (numArgs + 1))) {
          ++numArgs;
        }
      }
      const bodyLexer = new Lexer(expansion, this.settings);
      const tokens = [];
      let tok = bodyLexer.lex();
      while (tok.text !== "EOF") {
        tokens.push(tok);
        tok = bodyLexer.lex();
      }
      tokens.reverse(); // to fit in with stack using push and pop
      const expanded = {
        tokens,
        numArgs
      };
      return expanded;
    }
    return expansion;
  }

  /**
   * Determine whether a command is currently "defined" (has some
   * functionality), meaning that it's a macro (in the current group),
   * a function, a symbol, or one of the special commands listed in
   * `implicitCommands`.
   */
  isDefined(name) {
    return this.macros.has(name) || src_functions.hasOwnProperty(name) || src_symbols.math.hasOwnProperty(name) || src_symbols.text.hasOwnProperty(name) || implicitCommands.hasOwnProperty(name);
  }

  /**
   * Determine whether a command is expandable.
   */
  isExpandable(name) {
    const macro = this.macros.get(name);
    return macro != null ? typeof macro === "string" || typeof macro === "function" || !macro.unexpandable : src_functions.hasOwnProperty(name) && !src_functions[name].primitive;
  }
}
;// ./src/unicodeSupOrSub.ts
// Helpers for Parser.js handling of Unicode (sub|super)script characters.

const unicodeSubRegEx = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/;
const uSubsAndSups = Object.freeze({
  '₊': '+',
  '₋': '-',
  '₌': '=',
  '₍': '(',
  '₎': ')',
  '₀': '0',
  '₁': '1',
  '₂': '2',
  '₃': '3',
  '₄': '4',
  '₅': '5',
  '₆': '6',
  '₇': '7',
  '₈': '8',
  '₉': '9',
  '\u2090': 'a',
  '\u2091': 'e',
  '\u2095': 'h',
  '\u1D62': 'i',
  '\u2C7C': 'j',
  '\u2096': 'k',
  '\u2097': 'l',
  '\u2098': 'm',
  '\u2099': 'n',
  '\u2092': 'o',
  '\u209A': 'p',
  '\u1D63': 'r',
  '\u209B': 's',
  '\u209C': 't',
  '\u1D64': 'u',
  '\u1D65': 'v',
  '\u2093': 'x',
  '\u1D66': 'β',
  '\u1D67': 'γ',
  '\u1D68': 'ρ',
  '\u1D69': '\u03d5',
  '\u1D6A': 'χ',
  '⁺': '+',
  '⁻': '-',
  '⁼': '=',
  '⁽': '(',
  '⁾': ')',
  '⁰': '0',
  '¹': '1',
  '²': '2',
  '³': '3',
  '⁴': '4',
  '⁵': '5',
  '⁶': '6',
  '⁷': '7',
  '⁸': '8',
  '⁹': '9',
  '\u1D2C': 'A',
  '\u1D2E': 'B',
  '\u1D30': 'D',
  '\u1D31': 'E',
  '\u1D33': 'G',
  '\u1D34': 'H',
  '\u1D35': 'I',
  '\u1D36': 'J',
  '\u1D37': 'K',
  '\u1D38': 'L',
  '\u1D39': 'M',
  '\u1D3A': 'N',
  '\u1D3C': 'O',
  '\u1D3E': 'P',
  '\u1D3F': 'R',
  '\u1D40': 'T',
  '\u1D41': 'U',
  '\u2C7D': 'V',
  '\u1D42': 'W',
  '\u1D43': 'a',
  '\u1D47': 'b',
  '\u1D9C': 'c',
  '\u1D48': 'd',
  '\u1D49': 'e',
  '\u1DA0': 'f',
  '\u1D4D': 'g',
  '\u02B0': 'h',
  '\u2071': 'i',
  '\u02B2': 'j',
  '\u1D4F': 'k',
  '\u02E1': 'l',
  '\u1D50': 'm',
  '\u207F': 'n',
  '\u1D52': 'o',
  '\u1D56': 'p',
  '\u02B3': 'r',
  '\u02E2': 's',
  '\u1D57': 't',
  '\u1D58': 'u',
  '\u1D5B': 'v',
  '\u02B7': 'w',
  '\u02E3': 'x',
  '\u02B8': 'y',
  '\u1DBB': 'z',
  '\u1D5D': 'β',
  '\u1D5E': 'γ',
  '\u1D5F': 'δ',
  '\u1D60': '\u03d5',
  '\u1D61': 'χ',
  '\u1DBF': 'θ'
});
;// ./src/Parser.ts
/* eslint no-constant-condition:0 */











// Pre-evaluate both modules as unicodeSymbols require String.normalize()
const unicodeAccents = {
  "́": {
    "text": "\\'",
    "math": "\\acute"
  },
  "̀": {
    "text": "\\`",
    "math": "\\grave"
  },
  "̈": {
    "text": "\\\"",
    "math": "\\ddot"
  },
  "̃": {
    "text": "\\~",
    "math": "\\tilde"
  },
  "̄": {
    "text": "\\=",
    "math": "\\bar"
  },
  "̆": {
    "text": "\\u",
    "math": "\\breve"
  },
  "̌": {
    "text": "\\v",
    "math": "\\check"
  },
  "̂": {
    "text": "\\^",
    "math": "\\hat"
  },
  "̇": {
    "text": "\\.",
    "math": "\\dot"
  },
  "̊": {
    "text": "\\r",
    "math": "\\mathring"
  },
  "̋": {
    "text": "\\H"
  },
  "̧": {
    "text": "\\c"
  }
};
const unicodeSymbols = {
  "á": "á",
  "à": "à",
  "ä": "ä",
  "ǟ": "ǟ",
  "ã": "ã",
  "ā": "ā",
  "ă": "ă",
  "ắ": "ắ",
  "ằ": "ằ",
  "ẵ": "ẵ",
  "ǎ": "ǎ",
  "â": "â",
  "ấ": "ấ",
  "ầ": "ầ",
  "ẫ": "ẫ",
  "ȧ": "ȧ",
  "ǡ": "ǡ",
  "å": "å",
  "ǻ": "ǻ",
  "ḃ": "ḃ",
  "ć": "ć",
  "ḉ": "ḉ",
  "č": "č",
  "ĉ": "ĉ",
  "ċ": "ċ",
  "ç": "ç",
  "ď": "ď",
  "ḋ": "ḋ",
  "ḑ": "ḑ",
  "é": "é",
  "è": "è",
  "ë": "ë",
  "ẽ": "ẽ",
  "ē": "ē",
  "ḗ": "ḗ",
  "ḕ": "ḕ",
  "ĕ": "ĕ",
  "ḝ": "ḝ",
  "ě": "ě",
  "ê": "ê",
  "ế": "ế",
  "ề": "ề",
  "ễ": "ễ",
  "ė": "ė",
  "ȩ": "ȩ",
  "ḟ": "ḟ",
  "ǵ": "ǵ",
  "ḡ": "ḡ",
  "ğ": "ğ",
  "ǧ": "ǧ",
  "ĝ": "ĝ",
  "ġ": "ġ",
  "ģ": "ģ",
  "ḧ": "ḧ",
  "ȟ": "ȟ",
  "ĥ": "ĥ",
  "ḣ": "ḣ",
  "ḩ": "ḩ",
  "í": "í",
  "ì": "ì",
  "ï": "ï",
  "ḯ": "ḯ",
  "ĩ": "ĩ",
  "ī": "ī",
  "ĭ": "ĭ",
  "ǐ": "ǐ",
  "î": "î",
  "ǰ": "ǰ",
  "ĵ": "ĵ",
  "ḱ": "ḱ",
  "ǩ": "ǩ",
  "ķ": "ķ",
  "ĺ": "ĺ",
  "ľ": "ľ",
  "ļ": "ļ",
  "ḿ": "ḿ",
  "ṁ": "ṁ",
  "ń": "ń",
  "ǹ": "ǹ",
  "ñ": "ñ",
  "ň": "ň",
  "ṅ": "ṅ",
  "ņ": "ņ",
  "ó": "ó",
  "ò": "ò",
  "ö": "ö",
  "ȫ": "ȫ",
  "õ": "õ",
  "ṍ": "ṍ",
  "ṏ": "ṏ",
  "ȭ": "ȭ",
  "ō": "ō",
  "ṓ": "ṓ",
  "ṑ": "ṑ",
  "ŏ": "ŏ",
  "ǒ": "ǒ",
  "ô": "ô",
  "ố": "ố",
  "ồ": "ồ",
  "ỗ": "ỗ",
  "ȯ": "ȯ",
  "ȱ": "ȱ",
  "ő": "ő",
  "ṕ": "ṕ",
  "ṗ": "ṗ",
  "ŕ": "ŕ",
  "ř": "ř",
  "ṙ": "ṙ",
  "ŗ": "ŗ",
  "ś": "ś",
  "ṥ": "ṥ",
  "š": "š",
  "ṧ": "ṧ",
  "ŝ": "ŝ",
  "ṡ": "ṡ",
  "ş": "ş",
  "ẗ": "ẗ",
  "ť": "ť",
  "ṫ": "ṫ",
  "ţ": "ţ",
  "ú": "ú",
  "ù": "ù",
  "ü": "ü",
  "ǘ": "ǘ",
  "ǜ": "ǜ",
  "ǖ": "ǖ",
  "ǚ": "ǚ",
  "ũ": "ũ",
  "ṹ": "ṹ",
  "ū": "ū",
  "ṻ": "ṻ",
  "ŭ": "ŭ",
  "ǔ": "ǔ",
  "û": "û",
  "ů": "ů",
  "ű": "ű",
  "ṽ": "ṽ",
  "ẃ": "ẃ",
  "ẁ": "ẁ",
  "ẅ": "ẅ",
  "ŵ": "ŵ",
  "ẇ": "ẇ",
  "ẘ": "ẘ",
  "ẍ": "ẍ",
  "ẋ": "ẋ",
  "ý": "ý",
  "ỳ": "ỳ",
  "ÿ": "ÿ",
  "ỹ": "ỹ",
  "ȳ": "ȳ",
  "ŷ": "ŷ",
  "ẏ": "ẏ",
  "ẙ": "ẙ",
  "ź": "ź",
  "ž": "ž",
  "ẑ": "ẑ",
  "ż": "ż",
  "Á": "Á",
  "À": "À",
  "Ä": "Ä",
  "Ǟ": "Ǟ",
  "Ã": "Ã",
  "Ā": "Ā",
  "Ă": "Ă",
  "Ắ": "Ắ",
  "Ằ": "Ằ",
  "Ẵ": "Ẵ",
  "Ǎ": "Ǎ",
  "Â": "Â",
  "Ấ": "Ấ",
  "Ầ": "Ầ",
  "Ẫ": "Ẫ",
  "Ȧ": "Ȧ",
  "Ǡ": "Ǡ",
  "Å": "Å",
  "Ǻ": "Ǻ",
  "Ḃ": "Ḃ",
  "Ć": "Ć",
  "Ḉ": "Ḉ",
  "Č": "Č",
  "Ĉ": "Ĉ",
  "Ċ": "Ċ",
  "Ç": "Ç",
  "Ď": "Ď",
  "Ḋ": "Ḋ",
  "Ḑ": "Ḑ",
  "É": "É",
  "È": "È",
  "Ë": "Ë",
  "Ẽ": "Ẽ",
  "Ē": "Ē",
  "Ḗ": "Ḗ",
  "Ḕ": "Ḕ",
  "Ĕ": "Ĕ",
  "Ḝ": "Ḝ",
  "Ě": "Ě",
  "Ê": "Ê",
  "Ế": "Ế",
  "Ề": "Ề",
  "Ễ": "Ễ",
  "Ė": "Ė",
  "Ȩ": "Ȩ",
  "Ḟ": "Ḟ",
  "Ǵ": "Ǵ",
  "Ḡ": "Ḡ",
  "Ğ": "Ğ",
  "Ǧ": "Ǧ",
  "Ĝ": "Ĝ",
  "Ġ": "Ġ",
  "Ģ": "Ģ",
  "Ḧ": "Ḧ",
  "Ȟ": "Ȟ",
  "Ĥ": "Ĥ",
  "Ḣ": "Ḣ",
  "Ḩ": "Ḩ",
  "Í": "Í",
  "Ì": "Ì",
  "Ï": "Ï",
  "Ḯ": "Ḯ",
  "Ĩ": "Ĩ",
  "Ī": "Ī",
  "Ĭ": "Ĭ",
  "Ǐ": "Ǐ",
  "Î": "Î",
  "İ": "İ",
  "Ĵ": "Ĵ",
  "Ḱ": "Ḱ",
  "Ǩ": "Ǩ",
  "Ķ": "Ķ",
  "Ĺ": "Ĺ",
  "Ľ": "Ľ",
  "Ļ": "Ļ",
  "Ḿ": "Ḿ",
  "Ṁ": "Ṁ",
  "Ń": "Ń",
  "Ǹ": "Ǹ",
  "Ñ": "Ñ",
  "Ň": "Ň",
  "Ṅ": "Ṅ",
  "Ņ": "Ņ",
  "Ó": "Ó",
  "Ò": "Ò",
  "Ö": "Ö",
  "Ȫ": "Ȫ",
  "Õ": "Õ",
  "Ṍ": "Ṍ",
  "Ṏ": "Ṏ",
  "Ȭ": "Ȭ",
  "Ō": "Ō",
  "Ṓ": "Ṓ",
  "Ṑ": "Ṑ",
  "Ŏ": "Ŏ",
  "Ǒ": "Ǒ",
  "Ô": "Ô",
  "Ố": "Ố",
  "Ồ": "Ồ",
  "Ỗ": "Ỗ",
  "Ȯ": "Ȯ",
  "Ȱ": "Ȱ",
  "Ő": "Ő",
  "Ṕ": "Ṕ",
  "Ṗ": "Ṗ",
  "Ŕ": "Ŕ",
  "Ř": "Ř",
  "Ṙ": "Ṙ",
  "Ŗ": "Ŗ",
  "Ś": "Ś",
  "Ṥ": "Ṥ",
  "Š": "Š",
  "Ṧ": "Ṧ",
  "Ŝ": "Ŝ",
  "Ṡ": "Ṡ",
  "Ş": "Ş",
  "Ť": "Ť",
  "Ṫ": "Ṫ",
  "Ţ": "Ţ",
  "Ú": "Ú",
  "Ù": "Ù",
  "Ü": "Ü",
  "Ǘ": "Ǘ",
  "Ǜ": "Ǜ",
  "Ǖ": "Ǖ",
  "Ǚ": "Ǚ",
  "Ũ": "Ũ",
  "Ṹ": "Ṹ",
  "Ū": "Ū",
  "Ṻ": "Ṻ",
  "Ŭ": "Ŭ",
  "Ǔ": "Ǔ",
  "Û": "Û",
  "Ů": "Ů",
  "Ű": "Ű",
  "Ṽ": "Ṽ",
  "Ẃ": "Ẃ",
  "Ẁ": "Ẁ",
  "Ẅ": "Ẅ",
  "Ŵ": "Ŵ",
  "Ẇ": "Ẇ",
  "Ẍ": "Ẍ",
  "Ẋ": "Ẋ",
  "Ý": "Ý",
  "Ỳ": "Ỳ",
  "Ÿ": "Ÿ",
  "Ỹ": "Ỹ",
  "Ȳ": "Ȳ",
  "Ŷ": "Ŷ",
  "Ẏ": "Ẏ",
  "Ź": "Ź",
  "Ž": "Ž",
  "Ẑ": "Ẑ",
  "Ż": "Ż",
  "ά": "ά",
  "ὰ": "ὰ",
  "ᾱ": "ᾱ",
  "ᾰ": "ᾰ",
  "έ": "έ",
  "ὲ": "ὲ",
  "ή": "ή",
  "ὴ": "ὴ",
  "ί": "ί",
  "ὶ": "ὶ",
  "ϊ": "ϊ",
  "ΐ": "ΐ",
  "ῒ": "ῒ",
  "ῑ": "ῑ",
  "ῐ": "ῐ",
  "ό": "ό",
  "ὸ": "ὸ",
  "ύ": "ύ",
  "ὺ": "ὺ",
  "ϋ": "ϋ",
  "ΰ": "ΰ",
  "ῢ": "ῢ",
  "ῡ": "ῡ",
  "ῠ": "ῠ",
  "ώ": "ώ",
  "ὼ": "ὼ",
  "Ύ": "Ύ",
  "Ὺ": "Ὺ",
  "Ϋ": "Ϋ",
  "Ῡ": "Ῡ",
  "Ῠ": "Ῠ",
  "Ώ": "Ώ",
  "Ὼ": "Ὼ"
};
/**
 * This file contains the parser used to parse out a TeX expression from the
 * input. Since TeX isn't context-free, standard parsers don't work particularly
 * well.
 *
 * The strategy of this parser is as such:
 *
 * The main functions (the `.parse...` ones) take a position in the current
 * parse string to parse tokens from. The lexer (found in Lexer.js, stored at
 * this.gullet.lexer) also supports pulling out tokens at arbitrary places. When
 * individual tokens are needed at a position, the lexer is called to pull out a
 * token, which is then used.
 *
 * The parser has a property called "mode" indicating the mode that
 * the parser is currently in. Currently it has to be one of "math" or
 * "text", which denotes whether the current environment is a math-y
 * one or a text-y one (e.g. inside \text). Currently, this serves to
 * limit the functions which can be used in text mode.
 *
 * The main functions then return an object which contains the useful data that
 * was parsed at its given point, and a new position at the end of the parsed
 * data. The main functions can call each other and continue the parsing by
 * using the returned position as a new starting point.
 *
 * There are also extra `.handle...` functions, which pull out some reused
 * functionality into self-contained functions.
 *
 * The functions return ParseNodes.
 */

class Parser {
  constructor(input, settings) {
    // Start in math mode
    this.mode = "math";
    // Create a new macro expander (gullet) and (indirectly via that) also a
    // new lexer (mouth) for this parser (stomach, in the language of TeX)
    this.gullet = new MacroExpander(input, settings, this.mode);
    // Store the settings for use in parsing
    this.settings = settings;
    // Count leftright depth (for \middle errors)
    this.leftrightDepth = 0;
    this.nextToken = null;
  }

  /**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */
  expect(text, consume) {
    if (consume === void 0) {
      consume = true;
    }
    if (this.fetch().text !== text) {
      throw new src_ParseError("Expected '" + text + "', got '" + this.fetch().text + "'", this.fetch());
    }
    if (consume) {
      this.consume();
    }
  }

  /**
   * Discards the current lookahead token, considering it consumed.
   */
  consume() {
    this.nextToken = null;
  }

  /**
   * Return the current lookahead token, or if there isn't one (at the
   * beginning, or if the previous lookahead token was consume()d),
   * fetch the next token as the new lookahead token and return it.
   */
  fetch() {
    if (this.nextToken == null) {
      this.nextToken = this.gullet.expandNextToken();
    }
    return this.nextToken;
  }

  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(newMode) {
    this.mode = newMode;
    this.gullet.switchMode(newMode);
  }

  /**
   * Main parsing function, which parses an entire input.
   */
  parse() {
    if (!this.settings.globalGroup) {
      // Create a group namespace for the math expression.
      // (LaTeX creates a new group for every $...$, $$...$$, \[...\].)
      this.gullet.beginGroup();
    }

    // Use old \color behavior (same as LaTeX's \textcolor) if requested.
    // We do this within the group for the math expression, so it doesn't
    // pollute settings.macros.
    if (this.settings.colorIsTextColor) {
      this.gullet.macros.set("\\color", "\\textcolor");
    }
    try {
      // Try to parse the input
      const parse = this.parseExpression(false);

      // If we succeeded, make sure there's an EOF at the end
      this.expect("EOF");

      // End the group namespace for the expression
      if (!this.settings.globalGroup) {
        this.gullet.endGroup();
      }
      return parse;

      // Close any leftover groups in case of a parse error.
    } finally {
      this.gullet.endGroups();
    }
  }

  /**
   * Fully parse a separate sequence of tokens as a separate job.
   * Tokens should be specified in reverse order, as in a MacroDefinition.
   */
  subparse(tokens) {
    // Save the next token from the current job.
    const oldToken = this.nextToken;
    this.consume();

    // Run the new job, terminating it with an excess '}'
    this.gullet.pushToken(new Token("}"));
    this.gullet.pushTokens(tokens);
    const parse = this.parseExpression(false);
    this.expect("}");

    // Restore the next token from the current job.
    this.nextToken = oldToken;
    return parse;
  }
  /**
   * Parses an "expression", which is a list of atoms.
   *
   * `breakOnInfix`: Should the parsing stop when we hit infix nodes? This
   *                 happens when functions have higher precedence than infix
   *                 nodes in implicit parses.
   *
   * `breakOnTokenText`: The text of the token that the expression should end
   *                     with, or `null` if something else should end the
   *                     expression.
   */
  parseExpression(breakOnInfix, breakOnTokenText) {
    const body = [];
    // Keep adding atoms to the body until we can't parse any more atoms (either
    // we reached the end, a }, or a \right)
    while (true) {
      // Ignore spaces in math mode
      if (this.mode === "math") {
        this.consumeSpaces();
      }
      const lex = this.fetch();
      if (Parser.endOfExpression.has(lex.text)) {
        break;
      }
      if (breakOnTokenText && lex.text === breakOnTokenText) {
        break;
      }
      if (breakOnInfix && src_functions[lex.text] && src_functions[lex.text].infix) {
        break;
      }
      const atom = this.parseAtom(breakOnTokenText);
      if (!atom) {
        break;
      } else if (atom.type === "internal") {
        // Internal nodes do not appear in parse tree
        continue;
      }
      body.push(atom);
    }
    if (this.mode === "text") {
      this.formLigatures(body);
    }
    return this.handleInfixNodes(body);
  }

  /**
   * Rewrites infix operators such as \over with corresponding commands such
   * as \frac.
   *
   * There can only be one infix operator per group.  If there's more than one
   * then the expression is ambiguous.  This can be resolved by adding {}.
   */
  handleInfixNodes(body) {
    let overIndex = -1;
    let funcName;
    for (let i = 0; i < body.length; i++) {
      const node = body[i];
      if (node.type === "infix") {
        if (overIndex !== -1) {
          throw new src_ParseError("only one infix operator per group", node.token);
        }
        overIndex = i;
        funcName = node.replaceWith;
      }
    }
    if (overIndex !== -1 && funcName) {
      let numerNode;
      let denomNode;
      const numerBody = body.slice(0, overIndex);
      const denomBody = body.slice(overIndex + 1);
      if (numerBody.length === 1 && numerBody[0].type === "ordgroup") {
        numerNode = numerBody[0];
      } else {
        numerNode = {
          type: "ordgroup",
          mode: this.mode,
          body: numerBody
        };
      }
      if (denomBody.length === 1 && denomBody[0].type === "ordgroup") {
        denomNode = denomBody[0];
      } else {
        denomNode = {
          type: "ordgroup",
          mode: this.mode,
          body: denomBody
        };
      }
      let node;
      if (funcName === "\\\\abovefrac") {
        node = this.callFunction(funcName, [numerNode, body[overIndex], denomNode], []);
      } else {
        node = this.callFunction(funcName, [numerNode, denomNode], []);
      }
      return [node];
    } else {
      return body;
    }
  }

  /**
   * Handle a subscript or superscript with nice errors.
   */
  handleSupSubscript(name // For error reporting.
  ) {
    const symbolToken = this.fetch();
    const symbol = symbolToken.text;
    this.consume();
    this.consumeSpaces(); // ignore spaces before sup/subscript argument

    // Skip over allowed internal nodes such as \relax
    let group;
    do {
      var _group;
      group = this.parseGroup(name);
    } while (((_group = group) == null ? void 0 : _group.type) === "internal");
    if (!group) {
      throw new src_ParseError("Expected group after '" + symbol + "'", symbolToken);
    }
    return group;
  }

  /**
   * Converts the textual input of an unsupported command into a text node
   * contained within a color node whose color is determined by errorColor
   */
  formatUnsupportedCmd(text) {
    const textordArray = [];
    for (let i = 0; i < text.length; i++) {
      textordArray.push({
        type: "textord",
        mode: "text",
        text: text[i]
      });
    }
    const textNode = {
      type: "text",
      mode: this.mode,
      body: textordArray
    };
    const colorNode = {
      type: "color",
      mode: this.mode,
      color: this.settings.errorColor,
      body: [textNode]
    };
    return colorNode;
  }

  /**
   * Parses a group with optional super/subscripts.
   */
  parseAtom(breakOnTokenText) {
    // The body of an atom is an implicit group, so that things like
    // \left(x\right)^2 work correctly.
    const base = this.parseGroup("atom", breakOnTokenText);

    // Internal nodes (e.g. \relax) cannot support super/subscripts.
    // Instead we will pick up super/subscripts with blank base next round.
    if ((base == null ? void 0 : base.type) === "internal") {
      return base;
    }

    // In text mode, we don't have superscripts or subscripts
    if (this.mode === "text") {
      return base;
    }

    // Note that base may be empty (i.e. null) at this point.

    let superscript;
    let subscript;
    while (true) {
      // Guaranteed in math mode, so eat any spaces first.
      this.consumeSpaces();

      // Lex the first token
      const lex = this.fetch();
      if (lex.text === "\\limits" || lex.text === "\\nolimits") {
        // We got a limit control
        if (base && base.type === "op") {
          const limits = lex.text === "\\limits";
          base.limits = limits;
          base.alwaysHandleSupSub = true;
        } else if (base && base.type === "operatorname") {
          if (base.alwaysHandleSupSub) {
            base.limits = lex.text === "\\limits";
          }
        } else {
          throw new src_ParseError("Limit controls must follow a math operator", lex);
        }
        this.consume();
      } else if (lex.text === "^") {
        // We got a superscript start
        if (superscript) {
          throw new src_ParseError("Double superscript", lex);
        }
        superscript = this.handleSupSubscript("superscript");
      } else if (lex.text === "_") {
        // We got a subscript start
        if (subscript) {
          throw new src_ParseError("Double subscript", lex);
        }
        subscript = this.handleSupSubscript("subscript");
      } else if (lex.text === "'") {
        // We got a prime
        if (superscript) {
          throw new src_ParseError("Double superscript", lex);
        }
        const prime = {
          type: "textord",
          mode: this.mode,
          text: "\\prime"
        };

        // Many primes can be grouped together, so we handle this here
        const primes = [prime];
        this.consume();
        // Keep lexing tokens until we get something that's not a prime
        while (this.fetch().text === "'") {
          // For each one, add another prime to the list
          primes.push(prime);
          this.consume();
        }
        // If there's a superscript following the primes, combine that
        // superscript in with the primes.
        if (this.fetch().text === "^") {
          primes.push(this.handleSupSubscript("superscript"));
        }
        // Put everything into an ordgroup as the superscript
        superscript = {
          type: "ordgroup",
          mode: this.mode,
          body: primes
        };
      } else if (uSubsAndSups[lex.text]) {
        // A Unicode subscript or superscript character.
        // We treat these similarly to the unicode-math package.
        // So we render a string of Unicode (sub|super)scripts the
        // same as a (sub|super)script of regular characters.
        const isSub = unicodeSubRegEx.test(lex.text);
        const subsupTokens = [];
        subsupTokens.push(new Token(uSubsAndSups[lex.text]));
        this.consume();
        // Continue fetching tokens to fill out the string.
        while (true) {
          const token = this.fetch().text;
          if (!uSubsAndSups[token]) {
            break;
          }
          if (unicodeSubRegEx.test(token) !== isSub) {
            break;
          }
          subsupTokens.unshift(new Token(uSubsAndSups[token]));
          this.consume();
        }
        // Now create a (sub|super)script.
        const body = this.subparse(subsupTokens);
        if (isSub) {
          subscript = {
            type: "ordgroup",
            mode: "math",
            body
          };
        } else {
          superscript = {
            type: "ordgroup",
            mode: "math",
            body
          };
        }
      } else {
        // If it wasn't ^, _, or ', stop parsing super/subscripts
        break;
      }
    }

    // Base must be set if superscript or subscript are set per logic above,
    // but need to check here for type check to pass.
    if (superscript || subscript) {
      // If we got either a superscript or subscript, create a supsub
      return {
        type: "supsub",
        mode: this.mode,
        base: base,
        sup: superscript,
        sub: subscript
      };
    } else {
      // Otherwise return the original body
      return base;
    }
  }

  /**
   * Parses an entire function, including its base and all of its arguments.
   */
  parseFunction(breakOnTokenText, name // For determining its context
  ) {
    const token = this.fetch();
    const func = token.text;
    const funcData = src_functions[func];
    if (!funcData) {
      return null;
    }
    this.consume(); // consume command token

    if (name && name !== "atom" && !funcData.allowedInArgument) {
      throw new src_ParseError("Got function '" + func + "' with no arguments" + (name ? " as " + name : ""), token);
    } else if (this.mode === "text" && !funcData.allowedInText) {
      throw new src_ParseError("Can't use function '" + func + "' in text mode", token);
    } else if (this.mode === "math" && funcData.allowedInMath === false) {
      throw new src_ParseError("Can't use function '" + func + "' in math mode", token);
    }
    const {
      args,
      optArgs
    } = this.parseArguments(func, funcData);
    return this.callFunction(func, args, optArgs, token, breakOnTokenText);
  }

  /**
   * Call a function handler with a suitable context and arguments.
   */
  callFunction(name, args, optArgs, token, breakOnTokenText) {
    const context = {
      funcName: name,
      parser: this,
      token,
      breakOnTokenText
    };
    const func = src_functions[name];
    if (func && func.handler) {
      return func.handler(context, args, optArgs);
    } else {
      throw new src_ParseError("No function handler for " + name);
    }
  }

  /**
   * Parses the arguments of a function or environment
   */
  parseArguments(func,
  // Should look like "\name" or "\begin{name}".
  funcData) {
    const totalArgs = funcData.numArgs + funcData.numOptionalArgs;
    if (totalArgs === 0) {
      return {
        args: [],
        optArgs: []
      };
    }
    const args = [];
    const optArgs = [];
    for (let i = 0; i < totalArgs; i++) {
      let argType = funcData.argTypes && funcData.argTypes[i];
      const isOptional = i < funcData.numOptionalArgs;
      if ("primitive" in funcData && funcData.primitive && argType == null ||
      // \sqrt expands into primitive if optional argument doesn't exist
      funcData.type === "sqrt" && i === 1 && optArgs[0] == null) {
        argType = "primitive";
      }
      const arg = this.parseGroupOfType("argument to '" + func + "'", argType, isOptional);
      if (isOptional) {
        optArgs.push(arg);
      } else if (arg != null) {
        args.push(arg);
      } else {
        // should be unreachable
        throw new src_ParseError("Null argument, please report this as a bug");
      }
    }
    return {
      args,
      optArgs
    };
  }

  /**
   * Parses a group when the mode is changing.
   */
  parseGroupOfType(name, type, optional) {
    switch (type) {
      case "color":
        return this.parseColorGroup(optional);
      case "size":
        return this.parseSizeGroup(optional);
      case "url":
        return this.parseUrlGroup(optional);
      case "math":
      case "text":
        return this.parseArgumentGroup(optional, type);
      case "hbox":
        {
          // hbox argument type wraps the argument in the equivalent of
          // \hbox, which is like \text but switching to \textstyle size.
          const group = this.parseArgumentGroup(optional, "text");
          return group != null ? {
            type: "styling",
            mode: group.mode,
            body: [group],
            style: "text" // simulate \textstyle
          } : null;
        }
      case "raw":
        {
          const token = this.parseStringGroup("raw", optional);
          return token != null ? {
            type: "raw",
            mode: "text",
            string: token.text
          } : null;
        }
      case "primitive":
        {
          if (optional) {
            throw new src_ParseError("A primitive argument cannot be optional");
          }
          const group = this.parseGroup(name);
          if (group == null) {
            throw new src_ParseError("Expected group as " + name, this.fetch());
          }
          return group;
        }
      case "original":
      case null:
      case undefined:
        return this.parseArgumentGroup(optional);
      default:
        throw new src_ParseError("Unknown group type as " + name, this.fetch());
    }
  }

  /**
   * Discard any space tokens, fetching the next non-space token.
   */
  consumeSpaces() {
    while (this.fetch().text === " ") {
      this.consume();
    }
  }

  /**
   * Parses a group, essentially returning the string formed by the
   * brace-enclosed tokens plus some position information.
   */
  parseStringGroup(modeName,
  // Used to describe the mode in error messages.
  optional) {
    const argToken = this.gullet.scanArgument(optional);
    if (argToken == null) {
      return null;
    }
    let str = "";
    let nextToken;
    while ((nextToken = this.fetch()).text !== "EOF") {
      str += nextToken.text;
      this.consume();
    }
    this.consume(); // consume the end of the argument
    argToken.text = str;
    return argToken;
  }

  /**
   * Parses a regex-delimited group: the largest sequence of tokens
   * whose concatenated strings match `regex`. Returns the string
   * formed by the tokens plus some position information.
   */
  parseRegexGroup(regex, modeName // Used to describe the mode in error messages.
  ) {
    const firstToken = this.fetch();
    let lastToken = firstToken;
    let str = "";
    let nextToken;
    while ((nextToken = this.fetch()).text !== "EOF" && regex.test(str + nextToken.text)) {
      lastToken = nextToken;
      str += lastToken.text;
      this.consume();
    }
    if (str === "") {
      throw new src_ParseError("Invalid " + modeName + ": '" + firstToken.text + "'", firstToken);
    }
    return firstToken.range(lastToken, str);
  }

  /**
   * Parses a color description.
   */
  parseColorGroup(optional) {
    const res = this.parseStringGroup("color", optional);
    if (res == null) {
      return null;
    }
    const match = /^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(res.text);
    if (!match) {
      throw new src_ParseError("Invalid color: '" + res.text + "'", res);
    }
    let color = match[0];
    if (/^[0-9a-f]{6}$/i.test(color)) {
      // We allow a 6-digit HTML color spec without a leading "#".
      // This follows the xcolor package's HTML color model.
      // Predefined color names are all missed by this RegEx pattern.
      color = "#" + color;
    }
    return {
      type: "color-token",
      mode: this.mode,
      color
    };
  }

  /**
   * Parses a size specification, consisting of magnitude and unit.
   */
  parseSizeGroup(optional) {
    let res;
    let isBlank = false;
    // don't expand before parseStringGroup
    this.gullet.consumeSpaces();
    if (!optional && this.gullet.future().text !== "{") {
      res = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size");
    } else {
      res = this.parseStringGroup("size", optional);
    }
    if (!res) {
      return null;
    }
    if (!optional && res.text.length === 0) {
      // Because we've tested for what is !optional, this block won't
      // affect \kern, \hspace, etc. It will capture the mandatory arguments
      // to \genfrac and \above.
      res.text = "0pt"; // Enable \above{}
      isBlank = true; // This is here specifically for \genfrac
    }
    const match = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(res.text);
    if (!match) {
      throw new src_ParseError("Invalid size: '" + res.text + "'", res);
    }
    const data = {
      number: +(match[1] + match[2]),
      // sign + magnitude, cast to number
      unit: match[3]
    };
    if (!validUnit(data)) {
      throw new src_ParseError("Invalid unit: '" + data.unit + "'", res);
    }
    return {
      type: "size",
      mode: this.mode,
      value: data,
      isBlank
    };
  }

  /**
   * Parses an URL, checking escaped letters and allowed protocols,
   * and setting the catcode of % as an active character (as in \hyperref).
   */
  parseUrlGroup(optional) {
    this.gullet.lexer.setCatcode("%", 13); // active character
    this.gullet.lexer.setCatcode("~", 12); // other character
    const res = this.parseStringGroup("url", optional);
    this.gullet.lexer.setCatcode("%", 14); // comment character
    this.gullet.lexer.setCatcode("~", 13); // active character
    if (res == null) {
      return null;
    }
    // hyperref package allows backslashes alone in href, but doesn't
    // generate valid links in such cases; we interpret this as
    // "undefined" behaviour, and keep them as-is. Some browser will
    // replace backslashes with forward slashes.
    const url = res.text.replace(/\\([#$%&~_^{}])/g, '$1');
    return {
      type: "url",
      mode: this.mode,
      url
    };
  }

  /**
   * Parses an argument with the mode specified.
   */
  parseArgumentGroup(optional, mode) {
    const argToken = this.gullet.scanArgument(optional);
    if (argToken == null) {
      return null;
    }
    const outerMode = this.mode;
    if (mode) {
      // Switch to specified mode
      this.switchMode(mode);
    }
    this.gullet.beginGroup();
    const expression = this.parseExpression(false, "EOF");
    // TODO: find an alternative way to denote the end
    this.expect("EOF"); // expect the end of the argument
    this.gullet.endGroup();
    const result = {
      type: "ordgroup",
      mode: this.mode,
      loc: argToken.loc,
      body: expression
    };
    if (mode) {
      // Switch mode back
      this.switchMode(outerMode);
    }
    return result;
  }

  /**
   * Parses an ordinary group, which is either a single nucleus (like "x")
   * or an expression in braces (like "{x+y}") or an implicit group, a group
   * that starts at the current position, and ends right before a higher explicit
   * group ends, or at EOF.
   */
  parseGroup(name,
  // For error reporting.
  breakOnTokenText) {
    const firstToken = this.fetch();
    const text = firstToken.text;
    let result;
    // Try to parse an open brace or \begingroup
    if (text === "{" || text === "\\begingroup") {
      this.consume();
      const groupEnd = text === "{" ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      // If we get a brace, parse an expression
      const expression = this.parseExpression(false, groupEnd);
      const lastToken = this.fetch();
      this.expect(groupEnd); // Check that we got a matching closing brace
      this.gullet.endGroup();
      result = {
        type: "ordgroup",
        mode: this.mode,
        loc: SourceLocation.range(firstToken, lastToken),
        body: expression,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: text === "\\begingroup" || undefined
      };
    } else {
      // If there exists a function with this name, parse the function.
      // Otherwise, just return a nucleus
      result = this.parseFunction(breakOnTokenText, name) || this.parseSymbol();
      if (result == null && text[0] === "\\" && !implicitCommands.hasOwnProperty(text)) {
        if (this.settings.throwOnError) {
          throw new src_ParseError("Undefined control sequence: " + text, firstToken);
        }
        result = this.formatUnsupportedCmd(text);
        this.consume();
      }
    }
    return result;
  }

  /**
   * Form ligature-like combinations of characters for text mode.
   * This includes inputs like "--", "---", "``" and "''".
   * The result will simply replace multiple textord nodes with a single
   * character in each value by a single textord node having multiple
   * characters in its value.  The representation is still ASCII source.
   * The group will be modified in place.
   */
  formLigatures(group) {
    let n = group.length - 1;
    for (let i = 0; i < n; ++i) {
      const a = group[i];
      if (a.type !== "textord") {
        continue;
      }
      const v = a.text;
      const next = group[i + 1];
      if (!next || next.type !== "textord") {
        continue;
      }
      if (v === "-" && next.text === "-") {
        const afterNext = group[i + 2];
        if (i + 1 < n && afterNext && afterNext.type === "textord" && afterNext.text === "-") {
          group.splice(i, 3, {
            type: "textord",
            mode: "text",
            loc: SourceLocation.range(a, afterNext),
            text: "---"
          });
          n -= 2;
        } else {
          group.splice(i, 2, {
            type: "textord",
            mode: "text",
            loc: SourceLocation.range(a, next),
            text: "--"
          });
          n -= 1;
        }
      }
      if ((v === "'" || v === "`") && next.text === v) {
        group.splice(i, 2, {
          type: "textord",
          mode: "text",
          loc: SourceLocation.range(a, next),
          text: v + v
        });
        n -= 1;
      }
    }
  }

  /**
   * Parse a single symbol out of the string. Here, we handle single character
   * symbols and special functions like \verb.
   */
  parseSymbol() {
    const nucleus = this.fetch();
    let text = nucleus.text;
    if (/^\\verb[^a-zA-Z]/.test(text)) {
      this.consume();
      let arg = text.slice(5);
      const star = arg.charAt(0) === "*";
      if (star) {
        arg = arg.slice(1);
      }
      // Lexer's tokenRegex is constructed to always have matching
      // first/last characters.
      if (arg.length < 2 || arg.charAt(0) !== arg.slice(-1)) {
        throw new src_ParseError("\\verb assertion failed --\n                    please report what input caused this bug");
      }
      arg = arg.slice(1, -1); // remove first and last char

      return {
        type: "verb",
        mode: "text",
        body: arg,
        star
      };
    }
    // At this point, we should have a symbol, possibly with accents.
    // First expand any accented base symbol according to unicodeSymbols.
    if (unicodeSymbols.hasOwnProperty(text[0]) && !src_symbols[this.mode][text[0]]) {
      // This behavior is not strict (XeTeX-compatible) in math mode.
      if (this.settings.strict && this.mode === "math") {
        this.settings.reportNonstrict("unicodeTextInMathMode", "Accented Unicode text character \"" + text[0] + "\" used in " + "math mode", nucleus);
      }
      text = unicodeSymbols[text[0]] + text.slice(1);
    }
    // Strip off any combining characters
    const match = combiningDiacriticalMarksEndRegex.exec(text);
    if (match) {
      text = text.substring(0, match.index);
      if (text === 'i') {
        text = '\u0131'; // dotless i, in math and text mode
      } else if (text === 'j') {
        text = '\u0237'; // dotless j, in math and text mode
      }
    }
    // Recognize base symbol
    let symbol;
    if (src_symbols[this.mode][text]) {
      if (this.settings.strict && this.mode === 'math' && extraLatin.includes(text)) {
        this.settings.reportNonstrict("unicodeTextInMathMode", "Latin-1/Unicode text character \"" + text[0] + "\" used in " + "math mode", nucleus);
      }
      const group = src_symbols[this.mode][text].group;
      const loc = SourceLocation.range(nucleus);
      let s;
      if (ATOMS.hasOwnProperty(group)) {
        // TODO(ts)
        const family = group;
        s = {
          type: "atom",
          mode: this.mode,
          family,
          loc,
          text
        };
      } else {
        // TODO(ts)
        s = {
          type: group,
          mode: this.mode,
          loc,
          text
        };
      }
      // TODO(ts)
      symbol = s;
    } else if (text.charCodeAt(0) >= 0x80) {
      // no symbol for e.g. ^
      if (this.settings.strict) {
        if (!supportedCodepoint(text.charCodeAt(0))) {
          this.settings.reportNonstrict("unknownSymbol", "Unrecognized Unicode character \"" + text[0] + "\"" + (" (" + text.charCodeAt(0) + ")"), nucleus);
        } else if (this.mode === "math") {
          this.settings.reportNonstrict("unicodeTextInMathMode", "Unicode text character \"" + text[0] + "\" used in math mode", nucleus);
        }
      }
      // All nonmathematical Unicode characters are rendered as if they
      // are in text mode (wrapped in \text) because that's what it
      // takes to render them in LaTeX.  Setting `mode: this.mode` is
      // another natural choice (the user requested math mode), but
      // this makes it more difficult for getCharacterMetrics() to
      // distinguish Unicode characters without metrics and those for
      // which we want to simulate the letter M.
      symbol = {
        type: "textord",
        mode: "text",
        loc: SourceLocation.range(nucleus),
        text
      };
    } else {
      return null; // EOF, ^, _, {, }, etc.
    }
    this.consume();
    // Transform combining characters into accents
    if (match) {
      for (let i = 0; i < match[0].length; i++) {
        const accent = match[0][i];
        if (!unicodeAccents[accent]) {
          throw new src_ParseError("Unknown accent ' " + accent + "'", nucleus);
        }
        const command = unicodeAccents[accent][this.mode] || unicodeAccents[accent].text;
        if (!command) {
          throw new src_ParseError("Accent " + accent + " unsupported in " + this.mode + " mode", nucleus);
        }
        symbol = {
          type: "accent",
          mode: this.mode,
          loc: SourceLocation.range(nucleus),
          label: command,
          isStretchy: false,
          isShifty: true,
          // TODO(ts)
          base: symbol
        };
      }
    }
    // TODO(ts)
    return symbol;
  }
}
Parser.endOfExpression = new Set(["}", "\\endgroup", "\\end", "\\right", "&"]);
;// ./src/parseTree.ts
/**
 * Provides a single function for parsing an expression using a Parser
 * TODO(emily): Remove this
 */




/**
 * Parses an expression using a Parser, then returns the parsed result.
 */
const parseTree = function (toParse, settings) {
  if (!(typeof toParse === 'string' || toParse instanceof String)) {
    throw new TypeError('KaTeX can only parse string typed expression');
  }
  const parser = new Parser(toParse, settings);

  // Blank out any \df@tag to avoid spurious "Duplicate \tag" errors
  delete parser.gullet.macros.current["\\df@tag"];
  let tree = parser.parse();

  // Prevent a color definition from persisting between calls to katex.render().
  delete parser.gullet.macros.current["\\current@color"];
  delete parser.gullet.macros.current["\\color"];

  // If the input used \tag, it will set the \df@tag macro to the tag.
  // In this case, we separately parse the tag and wrap the tree.
  if (parser.gullet.macros.get("\\df@tag")) {
    if (!settings.displayMode) {
      throw new src_ParseError("\\tag works only in display equations");
    }
    tree = [{
      type: "tag",
      mode: "text",
      body: tree,
      tag: parser.subparse([new Token("\\df@tag")])
    }];
  }
  return tree;
};
/* harmony default export */ var src_parseTree = (parseTree);
;// ./katex.ts
/* eslint no-console:0 */
/**
 * This is the main entry point for KaTeX. Here, we expose functions for
 * rendering expressions either to DOM nodes or to markup strings.
 *
 * We also expose the ParseError class to check if errors thrown from KaTeX are
 * errors in the expression, or errors in javascript handling.
 */











/**
 * Parse and build an expression, and place that expression in the DOM node
 * given.
 */
let render = function (expression, baseNode, options) {
  baseNode.textContent = "";
  const node = renderToDomTree(expression, options).toNode();
  baseNode.appendChild(node);
};

// KaTeX's styles don't work properly in quirks mode. Print out an error, and
// disable rendering.
if (typeof document !== "undefined") {
  if (document.compatMode !== "CSS1Compat") {
    typeof console !== "undefined" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your " + "website has a suitable doctype.");
    render = function () {
      throw new src_ParseError("KaTeX doesn't work in quirks mode.");
    };
  }
}

/**
 * Parse and build an expression, and return the markup for that.
 */
const renderToString = function (expression, options) {
  const markup = renderToDomTree(expression, options).toMarkup();
  return markup;
};

/**
 * Parse an expression and return the parse tree.
 */
const generateParseTree = function (expression, options) {
  const settings = new Settings(options);
  return src_parseTree(expression, settings);
};

/**
 * If the given error is a KaTeX ParseError and options.throwOnError is false,
 * renders the invalid LaTeX as a span with hover title giving the KaTeX
 * error message.  Otherwise, simply throws the error.
 */
const renderError = function (error, expression, options) {
  if (options.throwOnError || !(error instanceof src_ParseError)) {
    throw error;
  }
  const node = makeSpan(["katex-error"], [new SymbolNode(expression)]);
  node.setAttribute("title", error.toString());
  node.setAttribute("style", "color:" + options.errorColor);
  return node;
};

/**
 * Generates and returns the katex build tree. This is used for advanced
 * use cases (like rendering to custom output).
 */
const renderToDomTree = function (expression, options) {
  const settings = new Settings(options);
  try {
    const tree = src_parseTree(expression, settings);
    return buildTree(tree, expression, settings);
  } catch (error) {
    return renderError(error, expression, settings);
  }
};

/**
 * Generates and returns the katex build tree, with just HTML (no MathML).
 * This is used for advanced use cases (like rendering to custom output).
 */
const renderToHTMLTree = function (expression, options) {
  const settings = new Settings(options);
  try {
    const tree = src_parseTree(expression, settings);
    return buildHTMLTree(tree, expression, settings);
  } catch (error) {
    return renderError(error, expression, settings);
  }
};
const version = "0.16.45";
const __domTree = {
  Span: Span,
  Anchor: Anchor,
  SymbolNode: SymbolNode,
  SvgNode: SvgNode,
  PathNode: PathNode,
  LineNode: LineNode
};

// ESM exports


// CJS exports and ESM default export
/* harmony default export */ var katex = ({
  /**
   * Current KaTeX version
   */
  version,
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: src_ParseError,
  /**
   * The schema of Settings
   */
  SETTINGS_SCHEMA: SETTINGS_SCHEMA,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: generateParseTree,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: renderToDomTree,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: renderToHTMLTree,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: setFontMetrics,
  /**
   * adds a new symbol to builtin symbols table
   */
  __defineSymbol: defineSymbol,
  /**
   * adds a new function to builtin function list,
   * which directly produce parse tree elements
   * and have their own html/mathml builders
   */
  __defineFunction: defineFunction,
  /**
   * adds a new macro to builtin macro list
   */
  __defineMacro: defineMacro,
  /**
   * Expose the dom tree node types, which can be useful for type checking nodes.
   *
   * NOTE: These methods are not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __domTree
});
;// ./katex.webpack.js
/**
 * This is the webpack entry point for KaTeX. As ECMAScript, flow[1] and jest[2]
 * doesn't support CSS modules natively, a separate entry point is used and
 * it is not flowtyped.
 *
 * [1] https://gist.github.com/lambdahands/d19e0da96285b749f0ef
 * [2] https://facebook.github.io/jest/docs/en/webpack.html
 */


/* harmony default export */ var katex_webpack = (katex);
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});