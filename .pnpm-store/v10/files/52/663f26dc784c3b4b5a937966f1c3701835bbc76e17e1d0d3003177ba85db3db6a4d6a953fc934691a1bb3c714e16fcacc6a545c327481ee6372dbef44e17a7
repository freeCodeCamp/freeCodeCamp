/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const vm = require("vm");
const CommentCompilationWarning = require("../CommentCompilationWarning");
const ModuleDependencyWarning = require("../ModuleDependencyWarning");
const { CSS_MODULE_TYPE_AUTO } = require("../ModuleTypeConstants");
const Parser = require("../Parser");
const UnsupportedFeatureWarning = require("../UnsupportedFeatureWarning");
const WebpackError = require("../WebpackError");
const ConstDependency = require("../dependencies/ConstDependency");
const CssIcssExportDependency = require("../dependencies/CssIcssExportDependency");
const CssIcssImportDependency = require("../dependencies/CssIcssImportDependency");
const CssIcssSymbolDependency = require("../dependencies/CssIcssSymbolDependency");
const CssImportDependency = require("../dependencies/CssImportDependency");
const CssUrlDependency = require("../dependencies/CssUrlDependency");
const StaticExportsDependency = require("../dependencies/StaticExportsDependency");
const binarySearchBounds = require("../util/binarySearchBounds");
const { parseResource } = require("../util/identifier");
const {
	createMagicCommentContext,
	webpackCommentRegExp
} = require("../util/magicComment");
const walkCssTokens = require("./walkCssTokens");

/** @typedef {import("../Module").BuildInfo} BuildInfo */
/** @typedef {import("../Module").BuildMeta} BuildMeta */
/** @typedef {import("../Parser").ParserState} ParserState */
/** @typedef {import("../Parser").PreparsedAst} PreparsedAst */
/** @typedef {import("./walkCssTokens").CssTokenCallbacks} CssTokenCallbacks */
/** @typedef {import("../../declarations/WebpackOptions").CssModuleParserOptions} CssModuleParserOptions */
/** @typedef {import("../CssModule")} CssModule */

/** @typedef {[number, number]} Range */
/** @typedef {{ line: number, column: number }} Position */
/** @typedef {{ value: string, range: Range, loc: { start: Position, end: Position } }} Comment */

const CC_COLON = ":".charCodeAt(0);
const CC_SEMICOLON = ";".charCodeAt(0);
const CC_COMMA = ",".charCodeAt(0);
const CC_LEFT_PARENTHESIS = "(".charCodeAt(0);
const CC_RIGHT_PARENTHESIS = ")".charCodeAt(0);
const CC_LOWER_F = "f".charCodeAt(0);
const CC_UPPER_F = "F".charCodeAt(0);
const CC_RIGHT_CURLY = "}".charCodeAt(0);
const CC_HYPHEN_MINUS = "-".charCodeAt(0);
const CC_TILDE = "~".charCodeAt(0);
const CC_EQUAL = "=".charCodeAt(0);
const CC_FULL_STOP = ".".charCodeAt(0);
const CC_EXCLAMATION = "!".charCodeAt(0);

// https://www.w3.org/TR/css-syntax-3/#newline
// We don't have `preprocessing` stage, so we need specify all of them
const STRING_MULTILINE = /\\[\n\r\f]/g;
// https://www.w3.org/TR/css-syntax-3/#whitespace
const TRIM_WHITE_SPACES = /(^[ \t\n\r\f]*|[ \t\n\r\f]*$)/g;
const UNESCAPE = /\\([0-9a-f]{1,6}[ \t\n\r\f]?|[\s\S])/gi;
const IMAGE_SET_FUNCTION = /^(?:-\w+-)?image-set$/i;
const OPTIONALLY_VENDOR_PREFIXED_KEYFRAMES_AT_RULE = /^@(?:-\w+-)?keyframes$/;
const COMPOSES_PROPERTY = /^(?:composes|compose-with)$/i;
const IS_MODULES = /\.modules?\.[^.]+$/i;
const CSS_COMMENT = /\/\*((?!\*\/)[\s\S]*?)\*\//g;

/**
 * Returns matches.
 * @param {RegExp} regexp a regexp
 * @param {string} str a string
 * @returns {RegExpExecArray[]} matches
 */
const matchAll = (regexp, str) => {
	/** @type {RegExpExecArray[]} */
	const result = [];

	/** @type {null | RegExpExecArray} */
	let match;

	// Use a while loop with exec() to find all matches
	while ((match = regexp.exec(str)) !== null) {
		result.push(match);
	}
	// Return an array to be easily iterable (note: a true spec-compliant polyfill
	// returns an iterator object, but an array spread often suffices for basic use)
	return result;
};

/**
 * Returns normalized url.
 * @param {string} str url string
 * @param {boolean} isString is url wrapped in quotes
 * @returns {string} normalized url
 */
const normalizeUrl = (str, isString) => {
	// Remove extra spaces and newlines:
	// `url("im\
	// g.png")`
	if (isString) {
		str = str.replace(STRING_MULTILINE, "");
	}

	str = str
		// Remove unnecessary spaces from `url("   img.png	 ")`
		.replace(TRIM_WHITE_SPACES, "")
		// Unescape
		.replace(UNESCAPE, (match) => {
			if (match.length > 2) {
				return String.fromCharCode(Number.parseInt(match.slice(1).trim(), 16));
			}
			return match[1];
		});

	if (/^data:/i.test(str)) {
		return str;
	}

	if (str.includes("%")) {
		// Convert `url('%2E/img.png')` -> `url('./img.png')`
		try {
			str = decodeURIComponent(str);
		} catch (_err) {
			// Ignore
		}
	}

	return str;
};

const regexSingleEscape = /[ -,./:-@[\]^`{-~]/;
const regexExcessiveSpaces =
	/(^|\\+)?(\\[A-F0-9]{1,6})\u0020(?![a-fA-F0-9\u0020])/g;

/**
 * Returns escaped identifier.
 * @param {string} str string
 * @returns {string} escaped identifier
 */
const escapeIdentifier = (str) => {
	let output = "";
	let counter = 0;

	while (counter < str.length) {
		const character = str.charAt(counter++);

		/** @type {string} */
		let value;

		if (/[\t\n\f\r\v]/.test(character)) {
			const codePoint = character.charCodeAt(0);

			value = `\\${codePoint.toString(16).toUpperCase()} `;
		} else if (character === "\\" || regexSingleEscape.test(character)) {
			value = `\\${character}`;
		} else {
			value = character;
		}

		output += value;
	}

	const firstChar = str.charAt(0);

	if (/^-[-\d]/.test(output)) {
		output = `\\-${output.slice(1)}`;
	} else if (/\d/.test(firstChar)) {
		output = `\\3${firstChar} ${output.slice(1)}`;
	}

	// Remove spaces after `\HEX` escapes that are not followed by a hex digit,
	// since they’re redundant. Note that this is only possible if the escape
	// sequence isn’t preceded by an odd number of backslashes.
	output = output.replace(regexExcessiveSpaces, ($0, $1, $2) => {
		if ($1 && $1.length % 2) {
			// It’s not safe to remove the space, so don’t.
			return $0;
		}

		// Strip the space.
		return ($1 || "") + $2;
	});

	return output;
};

const CONTAINS_ESCAPE = /\\/;

/**
 * Returns hex.
 * @param {string} str string
 * @returns {[string, number] | undefined} hex
 */
const gobbleHex = (str) => {
	const lower = str.toLowerCase();
	let hex = "";
	let spaceTerminated = false;

	for (let i = 0; i < 6 && lower[i] !== undefined; i++) {
		const code = lower.charCodeAt(i);
		// check to see if we are dealing with a valid hex char [a-f|0-9]
		const valid = (code >= 97 && code <= 102) || (code >= 48 && code <= 57);
		// https://drafts.csswg.org/css-syntax/#consume-escaped-code-point
		spaceTerminated = code === 32;
		if (!valid) break;
		hex += lower[i];
	}

	if (hex.length === 0) return undefined;

	const codePoint = Number.parseInt(hex, 16);
	const isSurrogate = codePoint >= 0xd800 && codePoint <= 0xdfff;

	// Add special case for
	// "If this number is zero, or is for a surrogate, or is greater than the maximum allowed code point"
	// https://drafts.csswg.org/css-syntax/#maximum-allowed-code-point
	if (isSurrogate || codePoint === 0x0000 || codePoint > 0x10ffff) {
		return ["\uFFFD", hex.length + (spaceTerminated ? 1 : 0)];
	}

	return [
		String.fromCodePoint(codePoint),
		hex.length + (spaceTerminated ? 1 : 0)
	];
};

/**
 * Unescape identifier.
 * @param {string} str string
 * @returns {string} unescaped string
 */
const unescapeIdentifier = (str) => {
	const needToProcess = CONTAINS_ESCAPE.test(str);
	if (!needToProcess) return str;
	let ret = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i] === "\\") {
			const gobbled = gobbleHex(str.slice(i + 1, i + 7));
			if (gobbled !== undefined) {
				ret += gobbled[0];
				i += gobbled[1];
				continue;
			}
			// Retain a pair of \\ if double escaped `\\\\`
			// https://github.com/postcss/postcss-selector-parser/commit/268c9a7656fb53f543dc620aa5b73a30ec3ff20e
			if (str[i + 1] === "\\") {
				ret += "\\";
				i += 1;
				continue;
			}
			// if \\ is at the end of the string retain it
			// https://github.com/postcss/postcss-selector-parser/commit/01a6b346e3612ce1ab20219acc26abdc259ccefb
			if (str.length === i + 1) {
				ret += str[i];
			}
			continue;
		}
		ret += str[i];
	}

	return ret;
};

/**
 * A custom property is any property whose name starts with two dashes (U+002D HYPHEN-MINUS), like --foo.
 * The <custom-property-name> production corresponds to this:
 * it’s defined as any <dashed-ident> (a valid identifier that starts with two dashes),
 * except -- itself, which is reserved for future use by CSS.
 * @param {string} identifier identifier
 * @returns {boolean} true when identifier is dashed, otherwise false
 */
const isDashedIdentifier = (identifier) =>
	identifier.startsWith("--") && identifier.length >= 3;

/** @type {Record<string, number>} */
const PREDEFINED_COUNTER_STYLES = {
	decimal: 1,
	"decimal-leading-zero": 1,
	"arabic-indic": 1,
	armenian: 1,
	"upper-armenian": 1,
	"lower-armenian": 1,
	bengali: 1,
	cambodian: 1,
	khmer: 1,
	"cjk-decimal": 1,
	devanagari: 1,
	georgian: 1,
	gujarati: 1,
	/* cspell:disable-next-line */
	gurmukhi: 1,
	hebrew: 1,
	kannada: 1,
	lao: 1,
	malayalam: 1,
	mongolian: 1,
	myanmar: 1,
	oriya: 1,
	persian: 1,
	"lower-roman": 1,
	"upper-roman": 1,
	tamil: 1,
	telugu: 1,
	thai: 1,
	tibetan: 1,

	"lower-alpha": 1,
	"lower-latin": 1,
	"upper-alpha": 1,
	"upper-latin": 1,
	"lower-greek": 1,
	hiragana: 1,
	/* cspell:disable-next-line */
	"hiragana-iroha": 1,
	katakana: 1,
	/* cspell:disable-next-line */
	"katakana-iroha": 1,

	disc: 1,
	circle: 1,
	square: 1,
	"disclosure-open": 1,
	"disclosure-closed": 1,

	"cjk-earthly-branch": 1,
	"cjk-heavenly-stem": 1,

	"japanese-informal": 1,
	"japanese-formal": 1,

	"korean-hangul-formal": 1,
	/* cspell:disable-next-line */
	"korean-hanja-informal": 1,
	/* cspell:disable-next-line */
	"korean-hanja-formal": 1,

	"simp-chinese-informal": 1,
	"simp-chinese-formal": 1,
	"trad-chinese-informal": 1,
	"trad-chinese-formal": 1,
	"cjk-ideographic": 1,

	"ethiopic-numeric": 1
};

/** @type {Record<string, number>} */
const GLOBAL_VALUES = {
	// Global values
	initial: Infinity,
	inherit: Infinity,
	unset: Infinity,
	revert: Infinity,
	"revert-layer": Infinity
};

/** @type {Record<string, number>} */
const GRID_AREA_OR_COLUMN_OR_ROW = {
	auto: Infinity,
	span: Infinity,
	...GLOBAL_VALUES
};

/** @type {Record<string, number>} */
const GRID_AUTO_COLUMNS_OR_ROW = {
	"min-content": Infinity,
	"max-content": Infinity,
	auto: Infinity,
	...GLOBAL_VALUES
};

/** @type {Record<string, number>} */
const GRID_AUTO_FLOW = {
	row: 1,
	column: 1,
	dense: 1,
	...GLOBAL_VALUES
};

/** @type {Record<string, number>} */
const GRID_TEMPLATE_AREAS = {
	// Special
	none: 1,
	...GLOBAL_VALUES
};

/** @type {Record<string, number>} */
const GRID_TEMPLATE_COLUMNS_OR_ROWS = {
	none: 1,
	subgrid: 1,
	masonry: 1,
	"max-content": Infinity,
	"min-content": Infinity,
	auto: Infinity,
	...GLOBAL_VALUES
};

/** @type {Record<string, number>} */
const GRID_TEMPLATE = {
	...GRID_TEMPLATE_AREAS,
	...GRID_TEMPLATE_COLUMNS_OR_ROWS
};

/** @type {Record<string, number>} */
const GRID = {
	"auto-flow": 1,
	dense: 1,
	...GRID_AUTO_COLUMNS_OR_ROW,
	...GRID_AUTO_FLOW,
	...GRID_TEMPLATE_AREAS,
	...GRID_TEMPLATE_COLUMNS_OR_ROWS
};

/**
 * Gets known properties.
 * @param {{ animation?: boolean, container?: boolean, customIdents?: boolean, grid?: boolean }=} options options
 * @returns {Map<string, Record<string, number>>} list of known properties
 */
const getKnownProperties = (options = {}) => {
	/** @type {Map<string, Record<string, number>>} */
	const knownProperties = new Map();

	if (options.animation) {
		knownProperties.set("animation", {
			// animation-direction
			normal: 1,
			reverse: 1,
			alternate: 1,
			"alternate-reverse": 1,
			// animation-fill-mode
			forwards: 1,
			backwards: 1,
			both: 1,
			// animation-iteration-count
			infinite: 1,
			// animation-play-state
			paused: 1,
			running: 1,
			// animation-timing-function
			ease: 1,
			"ease-in": 1,
			"ease-out": 1,
			"ease-in-out": 1,
			linear: 1,
			"step-end": 1,
			"step-start": 1,
			// Special
			none: Infinity, // No matter how many times you write none, it will never be an animation name
			...GLOBAL_VALUES
		});
		knownProperties.set("animation-name", {
			// Special
			none: Infinity, // No matter how many times you write none, it will never be an animation name
			...GLOBAL_VALUES
		});
	}

	if (options.container) {
		knownProperties.set("container", {
			// container-type
			normal: 1,
			size: 1,
			"inline-size": 1,
			"scroll-state": 1,
			// Special
			none: Infinity,
			...GLOBAL_VALUES
		});
		knownProperties.set("container-name", {
			// Special
			none: Infinity,
			...GLOBAL_VALUES
		});
	}

	if (options.customIdents) {
		knownProperties.set("list-style", {
			// list-style-position
			inside: 1,
			outside: 1,
			// list-style-type
			...PREDEFINED_COUNTER_STYLES,
			// Special
			none: Infinity,
			...GLOBAL_VALUES
		});
		knownProperties.set("list-style-type", {
			// list-style-type
			...PREDEFINED_COUNTER_STYLES,
			// Special
			none: Infinity,
			...GLOBAL_VALUES
		});
		knownProperties.set("system", {
			cyclic: 1,
			numeric: 1,
			alphabetic: 1,
			symbolic: 1,
			additive: 1,
			fixed: 1,
			extends: 1,
			...PREDEFINED_COUNTER_STYLES
		});
		knownProperties.set("fallback", {
			...PREDEFINED_COUNTER_STYLES
		});
		knownProperties.set("speak-as", {
			auto: 1,
			bullets: 1,
			numbers: 1,
			words: 1,
			"spell-out": 1,
			...PREDEFINED_COUNTER_STYLES
		});
	}

	if (options.grid) {
		knownProperties.set("grid", GRID);
		knownProperties.set("grid-area", GRID_AREA_OR_COLUMN_OR_ROW);
		knownProperties.set("grid-column", GRID_AREA_OR_COLUMN_OR_ROW);
		knownProperties.set("grid-column-end", GRID_AREA_OR_COLUMN_OR_ROW);
		knownProperties.set("grid-column-start", GRID_AREA_OR_COLUMN_OR_ROW);
		knownProperties.set("grid-row", GRID_AREA_OR_COLUMN_OR_ROW);
		knownProperties.set("grid-row-end", GRID_AREA_OR_COLUMN_OR_ROW);
		knownProperties.set("grid-row-start", GRID_AREA_OR_COLUMN_OR_ROW);
		knownProperties.set("grid-template", GRID_TEMPLATE);
		knownProperties.set("grid-template-areas", GRID_TEMPLATE_AREAS);
		knownProperties.set("grid-template-columns", GRID_TEMPLATE_COLUMNS_OR_ROWS);
		knownProperties.set("grid-template-rows", GRID_TEMPLATE_COLUMNS_OR_ROWS);
	}

	return knownProperties;
};

class LocConverter {
	/**
	 * Creates an instance of LocConverter.
	 * @param {string} input input
	 */
	constructor(input) {
		this._input = input;
		this.line = 1;
		this.column = 0;
		this.pos = 0;
	}

	/**
	 * Returns location converter.
	 * @param {number} pos position
	 * @returns {LocConverter} location converter
	 */
	get(pos) {
		if (this.pos !== pos) {
			if (this.pos < pos) {
				const str = this._input.slice(this.pos, pos);
				let i = str.lastIndexOf("\n");
				if (i === -1) {
					this.column += str.length;
				} else {
					this.column = str.length - i - 1;
					this.line++;
					while (i > 0 && (i = str.lastIndexOf("\n", i - 1)) !== -1) {
						this.line++;
					}
				}
			} else {
				let i = this._input.lastIndexOf("\n", this.pos);
				while (i >= pos) {
					this.line--;
					i = i > 0 ? this._input.lastIndexOf("\n", i - 1) : -1;
				}
				this.column = pos - i;
			}
			this.pos = pos;
		}
		return this;
	}
}

const EMPTY_COMMENT_OPTIONS = {
	options: null,
	errors: null
};

const CSS_MODE_TOP_LEVEL = 0;
const CSS_MODE_IN_BLOCK = 1;

const LOCAL_MODE = 0;
const GLOBAL_MODE = 1;

const eatUntilSemi = walkCssTokens.eatUntil(";");
const eatUntilLeftCurly = walkCssTokens.eatUntil("{");

/**
 * Defines the css parser own options type used by this module.
 * @typedef {object} CssParserOwnOptions
 * @property {("pure" | "global" | "local" | "auto")=} defaultMode default mode
 */

/** @typedef {CssModuleParserOptions & CssParserOwnOptions} CssParserOptions */

class CssParser extends Parser {
	/**
	 * Creates an instance of CssParser.
	 * @param {CssParserOptions=} options options
	 */
	constructor(options = {}) {
		super();
		this.defaultMode =
			typeof options.defaultMode !== "undefined" ? options.defaultMode : "pure";
		this.options = {
			url: true,
			import: true,
			namedExports: true,
			animation: true,
			container: true,
			customIdents: true,
			dashedIdents: true,
			function: true,
			grid: true,
			...options
		};
		/** @type {Comment[] | undefined} */
		this.comments = undefined;
		this.magicCommentContext = createMagicCommentContext();
	}

	/**
	 * Processes the provided state.
	 * @param {ParserState} state parser state
	 * @param {string} message warning message
	 * @param {LocConverter} locConverter location converter
	 * @param {number} start start offset
	 * @param {number} end end offset
	 */
	_emitWarning(state, message, locConverter, start, end) {
		const { line: sl, column: sc } = locConverter.get(start);
		const { line: el, column: ec } = locConverter.get(end);

		state.current.addWarning(
			new ModuleDependencyWarning(state.module, new WebpackError(message), {
				start: { line: sl, column: sc },
				end: { line: el, column: ec }
			})
		);
	}

	/**
	 * Parses the provided source and updates the parser state.
	 * @param {string | Buffer | PreparsedAst} source the source to parse
	 * @param {ParserState} state the parser state
	 * @returns {ParserState} the parser state
	 */
	parse(source, state) {
		if (Buffer.isBuffer(source)) {
			source = source.toString("utf8");
		} else if (typeof source === "object") {
			throw new Error("webpackAst is unexpected for the CssParser");
		}
		if (source[0] === "\uFEFF") {
			source = source.slice(1);
		}

		let mode = this.defaultMode;

		const module = state.module;

		if (
			mode === "auto" &&
			module.type === CSS_MODULE_TYPE_AUTO &&
			IS_MODULES.test(
				parseResource(/** @type {string} */ (module.getResource())).path
			)
		) {
			mode = "local";
		}

		const isModules = mode === "global" || mode === "local";
		const knownProperties = getKnownProperties({
			animation: this.options.animation,
			container: this.options.container,
			customIdents: this.options.customIdents,
			grid: this.options.grid
		});

		/** @type {BuildMeta} */
		(module.buildMeta).isCSSModule = isModules;

		const locConverter = new LocConverter(source);

		/** @type {number} */
		let scope = CSS_MODE_TOP_LEVEL;
		/** @type {boolean} */
		let allowImportAtRule = true;
		/** @type {[string, number, number, boolean?][]} */
		const balanced = [];
		let lastTokenEndForComments = 0;

		/** @type {boolean} */
		let isNextRulePrelude = isModules;
		/** @type {number} */
		let blockNestingLevel = 0;
		/** @type {0 | 1 | undefined} */
		let modeData;
		/** @type {number} */
		let counter = 0;

		/** @type {string[]} */
		let lastLocalIdentifiers = [];

		/** @typedef {{ value?: string, importName?: string, localName?: string }} IcssDefinition */
		/** @type {Map<string, IcssDefinition>} */
		const icssDefinitions = new Map();

		/**
		 * Checks whether this css parser is next nested syntax.
		 * @param {string} input input
		 * @param {number} pos position
		 * @returns {boolean} true, when next is nested syntax
		 */
		const isNextNestedSyntax = (input, pos) => {
			pos = walkCssTokens.eatWhitespaceAndComments(input, pos)[0];

			if (
				input.charCodeAt(pos) === CC_RIGHT_CURLY ||
				(input.charCodeAt(pos) === CC_HYPHEN_MINUS &&
					input.charCodeAt(pos + 1) === CC_HYPHEN_MINUS)
			) {
				return false;
			}

			const identifier = walkCssTokens.eatIdentSequence(input, pos);

			if (!identifier) {
				return true;
			}

			const leftCurly = eatUntilLeftCurly(input, pos);
			const content = input.slice(identifier[0], leftCurly);

			if (content.includes(";") || content.includes("}")) {
				return false;
			}

			return true;
		};
		/**
		 * Checks whether this css parser is local mode.
		 * @returns {boolean} true, when in local scope
		 */
		const isLocalMode = () =>
			modeData === LOCAL_MODE || (mode === "local" && modeData === undefined);

		/**
		 * Returns end.
		 * @param {string} input input
		 * @param {number} start start
		 * @param {number} end end
		 * @returns {number} end
		 */
		const comment = (input, start, end) => {
			if (!this.comments) this.comments = [];
			const { line: sl, column: sc } = locConverter.get(start);
			const { line: el, column: ec } = locConverter.get(end);

			/** @type {Comment} */
			const comment = {
				value: input.slice(start + 2, end - 2),
				range: [start, end],
				loc: {
					start: { line: sl, column: sc },
					end: { line: el, column: ec }
				}
			};
			this.comments.push(comment);
			return end;
		};

		// Vanilla CSS stuff

		/**
		 * Processes the provided input.
		 * @param {string} input input
		 * @param {number} start name start position
		 * @param {number} end name end position
		 * @returns {number} position after handling
		 */
		const processAtImport = (input, start, end) => {
			const tokens = walkCssTokens.eatImportTokens(input, end, {
				comment
			});
			if (!tokens[3]) return end;
			const semi = tokens[3][1];
			if (!tokens[0]) {
				this._emitWarning(
					state,
					`Expected URL in '${input.slice(start, semi)}'`,
					locConverter,
					start,
					semi
				);
				return end;
			}

			const urlToken = tokens[0];
			const url = normalizeUrl(input.slice(urlToken[2], urlToken[3]), true);
			const newline = walkCssTokens.eatWhiteLine(input, semi);
			const { options, errors: commentErrors } = this.parseCommentOptions([
				end,
				urlToken[1]
			]);
			if (commentErrors) {
				for (const e of commentErrors) {
					const { comment } = e;
					state.module.addWarning(
						new CommentCompilationWarning(
							`Compilation error while processing magic comment(-s): /*${comment.value}*/: ${e.message}`,
							comment.loc
						)
					);
				}
			}
			if (options && options.webpackIgnore !== undefined) {
				if (typeof options.webpackIgnore !== "boolean") {
					const { line: sl, column: sc } = locConverter.get(start);
					const { line: el, column: ec } = locConverter.get(newline);

					state.module.addWarning(
						new UnsupportedFeatureWarning(
							`\`webpackIgnore\` expected a boolean, but received: ${options.webpackIgnore}.`,
							{
								start: { line: sl, column: sc },
								end: { line: el, column: ec }
							}
						)
					);
				} else if (options.webpackIgnore) {
					return newline;
				}
			}
			if (url.length === 0) {
				const { line: sl, column: sc } = locConverter.get(start);
				const { line: el, column: ec } = locConverter.get(newline);
				const dep = new ConstDependency("", [start, newline]);
				module.addPresentationalDependency(dep);
				dep.setLoc(sl, sc, el, ec);

				return newline;
			}

			/** @type {undefined | string} */
			let layer;

			if (tokens[1]) {
				layer = input.slice(tokens[1][0] + 6, tokens[1][1] - 1).trim();
			}

			/** @type {undefined | string} */
			let supports;

			if (tokens[2]) {
				supports = input.slice(tokens[2][0] + 9, tokens[2][1] - 1).trim();
			}

			const last = tokens[2] || tokens[1] || tokens[0];
			const mediaStart = walkCssTokens.eatWhitespaceAndComments(
				input,
				last[1]
			)[0];

			/** @type {undefined | string} */
			let media;

			if (mediaStart !== semi - 1) {
				media = input.slice(mediaStart, semi - 1).trim();
			}

			const { line: sl, column: sc } = locConverter.get(start);
			const { line: el, column: ec } = locConverter.get(newline);
			const dep = new CssImportDependency(
				url,
				[start, newline],
				mode === "local" || mode === "global" ? mode : undefined,
				layer,
				supports && supports.length > 0 ? supports : undefined,
				media && media.length > 0 ? media : undefined
			);
			dep.setLoc(sl, sc, el, ec);
			module.addDependency(dep);

			return newline;
		};

		/**
		 * Process url function.
		 * @param {string} input input
		 * @param {number} end end position
		 * @param {string} name the name of function
		 * @returns {number} position after handling
		 */
		const processURLFunction = (input, end, name) => {
			const string = walkCssTokens.eatString(input, end);
			if (!string) return end;
			const { options, errors: commentErrors } = this.parseCommentOptions([
				lastTokenEndForComments,
				end
			]);
			if (commentErrors) {
				for (const e of commentErrors) {
					const { comment } = e;
					state.module.addWarning(
						new CommentCompilationWarning(
							`Compilation error while processing magic comment(-s): /*${comment.value}*/: ${e.message}`,
							comment.loc
						)
					);
				}
			}
			if (options && options.webpackIgnore !== undefined) {
				if (typeof options.webpackIgnore !== "boolean") {
					const { line: sl, column: sc } = locConverter.get(string[0]);
					const { line: el, column: ec } = locConverter.get(string[1]);

					state.module.addWarning(
						new UnsupportedFeatureWarning(
							`\`webpackIgnore\` expected a boolean, but received: ${options.webpackIgnore}.`,
							{
								start: { line: sl, column: sc },
								end: { line: el, column: ec }
							}
						)
					);
				} else if (options.webpackIgnore) {
					return end;
				}
			}
			const value = normalizeUrl(
				input.slice(string[0] + 1, string[1] - 1),
				true
			);
			// Ignore `url()`, `url('')` and `url("")`, they are valid by spec
			if (value.length === 0) return end;
			const isUrl = name === "url" || name === "src";
			const dep = new CssUrlDependency(
				value,
				[string[0], string[1]],
				isUrl ? "string" : "url"
			);
			const { line: sl, column: sc } = locConverter.get(string[0]);
			const { line: el, column: ec } = locConverter.get(string[1]);
			dep.setLoc(sl, sc, el, ec);
			module.addDependency(dep);
			module.addCodeGenerationDependency(dep);
			return string[1];
		};

		/**
		 * Process old url function.
		 * @param {string} input input
		 * @param {number} start start position
		 * @param {number} end end position
		 * @param {number} contentStart start position
		 * @param {number} contentEnd end position
		 * @returns {number} position after handling
		 */
		const processOldURLFunction = (
			input,
			start,
			end,
			contentStart,
			contentEnd
		) => {
			const { options, errors: commentErrors } = this.parseCommentOptions([
				lastTokenEndForComments,
				end
			]);
			if (commentErrors) {
				for (const e of commentErrors) {
					const { comment } = e;
					state.module.addWarning(
						new CommentCompilationWarning(
							`Compilation error while processing magic comment(-s): /*${comment.value}*/: ${e.message}`,
							comment.loc
						)
					);
				}
			}
			if (options && options.webpackIgnore !== undefined) {
				if (typeof options.webpackIgnore !== "boolean") {
					const { line: sl, column: sc } = locConverter.get(
						lastTokenEndForComments
					);
					const { line: el, column: ec } = locConverter.get(end);

					state.module.addWarning(
						new UnsupportedFeatureWarning(
							`\`webpackIgnore\` expected a boolean, but received: ${options.webpackIgnore}.`,
							{
								start: { line: sl, column: sc },
								end: { line: el, column: ec }
							}
						)
					);
				} else if (options.webpackIgnore) {
					return end;
				}
			}
			const value = normalizeUrl(input.slice(contentStart, contentEnd), false);
			// Ignore `url()`, `url('')` and `url("")`, they are valid by spec
			if (value.length === 0) return end;
			const dep = new CssUrlDependency(value, [start, end], "url");
			const { line: sl, column: sc } = locConverter.get(start);
			const { line: el, column: ec } = locConverter.get(end);
			dep.setLoc(sl, sc, el, ec);
			module.addDependency(dep);
			module.addCodeGenerationDependency(dep);
			return end;
		};

		/**
		 * Process image set function.
		 * @param {string} input input
		 * @param {number} start start position
		 * @param {number} end end position
		 * @returns {number} position after handling
		 */
		const processImageSetFunction = (input, start, end) => {
			lastTokenEndForComments = end;
			const values = walkCssTokens.eatImageSetStrings(input, end, {
				comment
			});
			if (values.length === 0) return end;
			for (const [index, string] of values.entries()) {
				const value = normalizeUrl(
					input.slice(string[0] + 1, string[1] - 1),
					true
				);
				if (value.length === 0) return end;
				const { options, errors: commentErrors } = this.parseCommentOptions([
					index === 0 ? start : values[index - 1][1],
					string[1]
				]);
				if (commentErrors) {
					for (const e of commentErrors) {
						const { comment } = e;
						state.module.addWarning(
							new CommentCompilationWarning(
								`Compilation error while processing magic comment(-s): /*${comment.value}*/: ${e.message}`,
								comment.loc
							)
						);
					}
				}
				if (options && options.webpackIgnore !== undefined) {
					if (typeof options.webpackIgnore !== "boolean") {
						const { line: sl, column: sc } = locConverter.get(string[0]);
						const { line: el, column: ec } = locConverter.get(string[1]);

						state.module.addWarning(
							new UnsupportedFeatureWarning(
								`\`webpackIgnore\` expected a boolean, but received: ${options.webpackIgnore}.`,
								{
									start: { line: sl, column: sc },
									end: { line: el, column: ec }
								}
							)
						);
					} else if (options.webpackIgnore) {
						continue;
					}
				}
				const dep = new CssUrlDependency(value, [string[0], string[1]], "url");
				const { line: sl, column: sc } = locConverter.get(string[0]);
				const { line: el, column: ec } = locConverter.get(string[1]);
				dep.setLoc(sl, sc, el, ec);
				module.addDependency(dep);
				module.addCodeGenerationDependency(dep);
			}
			// Can contain `url()` inside, so let's return end to allow parse them
			return end;
		};

		// CSS modules stuff

		/**
		 * Returns resolved reexport (localName and importName).
		 * @param {string} value value to resolve
		 * @param {string=} localName override local name
		 * @param {boolean=} isCustomProperty true when it is custom property, otherwise false
		 * @returns {string | [string, string]} resolved reexport (`localName` and `importName`)
		 */
		const getReexport = (value, localName, isCustomProperty) => {
			const reexport = icssDefinitions.get(
				isCustomProperty ? `--${value}` : value
			);

			if (reexport) {
				if (reexport.importName) {
					return [
						reexport.localName || (isCustomProperty ? `--${value}` : value),
						reexport.importName
					];
				}

				if (isCustomProperty) {
					return /** @type {string} */ (reexport.value).slice(2);
				}

				return /** @type {string} */ (reexport.value);
			}

			if (localName) {
				return [localName, value];
			}

			return value;
		};

		/**
		 * Process import or export.
		 * @param {0 | 1} type import or export
		 * @param {string} input input
		 * @param {number} pos start position
		 * @returns {number} position after parse
		 */
		const processImportOrExport = (type, input, pos) => {
			pos = walkCssTokens.eatWhitespaceAndComments(input, pos)[0];
			/** @type {string | undefined} */
			let request;
			if (type === 0) {
				let cc = input.charCodeAt(pos);
				if (cc !== CC_LEFT_PARENTHESIS) {
					this._emitWarning(
						state,
						`Unexpected '${input[pos]}' at ${pos} during parsing of ':import' (expected '(')`,
						locConverter,
						pos,
						pos
					);
					return pos;
				}
				pos++;
				const stringStart = pos;
				const str = walkCssTokens.eatString(input, pos);
				if (!str) {
					this._emitWarning(
						state,
						`Unexpected '${input[pos]}' at ${pos} during parsing of '${type === 0 ? ":import" : ":export"}' (expected string)`,
						locConverter,
						stringStart,
						pos
					);
					return pos;
				}
				request = input.slice(str[0] + 1, str[1] - 1);
				pos = str[1];
				pos = walkCssTokens.eatWhitespaceAndComments(input, pos)[0];
				cc = input.charCodeAt(pos);
				if (cc !== CC_RIGHT_PARENTHESIS) {
					this._emitWarning(
						state,
						`Unexpected '${input[pos]}' at ${pos} during parsing of ':import' (expected ')')`,
						locConverter,
						pos,
						pos
					);
					return pos;
				}
				pos++;
				pos = walkCssTokens.eatWhitespaceAndComments(input, pos)[0];
			}

			/**
			 * Creates a dep from the provided name.
			 * @param {string} name name
			 * @param {string} value value
			 * @param {number} start start of position
			 * @param {number} end end of position
			 */
			const createDep = (name, value, start, end) => {
				if (type === 0) {
					const dep = new CssIcssImportDependency(
						/** @type {string} */
						(request),
						[0, 0],
						/** @type {"local" | "global"} */
						(mode),
						value,
						name
					);
					const { line: sl, column: sc } = locConverter.get(start);
					const { line: el, column: ec } = locConverter.get(end);
					dep.setLoc(sl, sc, el, ec);
					module.addDependency(dep);

					icssDefinitions.set(name, { importName: value });
				} else if (type === 1) {
					const dep = new CssIcssExportDependency(name, getReexport(value));
					const { line: sl, column: sc } = locConverter.get(start);
					const { line: el, column: ec } = locConverter.get(end);
					dep.setLoc(sl, sc, el, ec);
					module.addDependency(dep);
				}
			};

			let needTerminate = false;
			let balanced = 0;
			/** @type {undefined | 0 | 1 | 2} */
			let scope;

			/** @typedef {[number, number]} Name */

			/** @type {Name | undefined} */
			let name;
			/** @type {number | undefined} */
			let value;

			/** @type {CssTokenCallbacks} */
			const callbacks = {
				leftCurlyBracket: (_input, _start, end) => {
					balanced++;

					if (scope === undefined) {
						scope = 0;
					}

					return end;
				},
				rightCurlyBracket: (_input, _start, end) => {
					balanced--;

					if (scope === 2) {
						const [nameStart, nameEnd] = /** @type {Name} */ (name);
						createDep(
							input.slice(nameStart, nameEnd),
							input.slice(value, end - 1).trim(),
							nameEnd,
							end - 1
						);
						scope = 0;
					}

					if (balanced === 0 && scope === 0) {
						needTerminate = true;
					}

					return end;
				},
				identifier: (_input, start, end) => {
					if (scope === 0) {
						name = [start, end];
						scope = 1;
					}

					return end;
				},
				colon: (_input, _start, end) => {
					if (scope === 1) {
						scope = 2;
						value = walkCssTokens.eatWhitespace(input, end);
						return value;
					}

					return end;
				},
				semicolon: (input, _start, end) => {
					if (scope === 2) {
						const [nameStart, nameEnd] = /** @type {Name} */ (name);
						createDep(
							input.slice(nameStart, nameEnd),
							input.slice(value, end - 1),
							nameEnd,
							end - 1
						);
						scope = 0;
					}

					return end;
				},
				needTerminate: () => needTerminate
			};

			pos = walkCssTokens(input, pos, callbacks);
			pos = walkCssTokens.eatWhiteLine(input, pos);

			return pos;
		};

		/** @typedef {{ from: string, items: ({ localName: string, importName: string })[] }} ValueAtRuleImport */
		/** @typedef {{ localName: string, value: string }} ValueAtRuleValue */
		/**
		 * Parses value at rule params.
		 * @param {string} str value at-rule params
		 * @returns {ValueAtRuleImport | ValueAtRuleValue} parsed result
		 */
		const parseValueAtRuleParams = (str) => {
			if (/from(\/\*|\s)(?:[\s\S]+)$/i.test(str)) {
				str = str.replace(CSS_COMMENT, " ").trim().replace(/;$/, "");
				const fromIdx = str.lastIndexOf("from");
				const path = str
					.slice(fromIdx + 5)
					.trim()
					.replace(/['"]/g, "");
				let content = str.slice(0, fromIdx).trim();

				if (content.startsWith("(") && content.endsWith(")")) {
					content = content.slice(1, -1);
				}

				return {
					from: path,
					items: content.split(",").map((item) => {
						item = item.trim();

						if (item.includes(":")) {
							const [local, remote] = item.split(":");

							return { localName: local.trim(), importName: remote.trim() };
						}

						const asParts = item.split(/\s+as\s+/);

						if (asParts.length === 2) {
							return {
								localName: asParts[1].trim(),
								importName: asParts[0].trim()
							};
						}

						return { localName: item, importName: item };
					})
				};
			}

			/** @type {string} */
			let localName;
			/** @type {string} */
			let value;

			const idx = str.indexOf(":");

			if (idx !== -1) {
				localName = str.slice(0, idx).replace(CSS_COMMENT, "").trim();
				value = str.slice(idx + 1);
			} else {
				const mask = str.replace(CSS_COMMENT, (m) => " ".repeat(m.length));
				const idx = mask.search(/\S\s/) + 1;

				localName = str.slice(0, idx).replace(CSS_COMMENT, "").trim();
				value = str.slice(idx + (str[idx] === " " ? 1 : 0));
			}

			if (value.length > 0 && !/^\s+$/.test(value.replace(CSS_COMMENT, ""))) {
				value = value.trim();
			}

			return { localName, value };
		};

		/**
		 * Processes the provided input.
		 * @param {string} input input
		 * @param {number} start name start position
		 * @param {number} end name end position
		 * @returns {number} position after handling
		 */
		const processAtValue = (input, start, end) => {
			const semi = eatUntilSemi(input, end);
			const atRuleEnd = semi + 1;
			const params = input.slice(end, semi);
			const parsed = parseValueAtRuleParams(params);

			if (
				typeof (/** @type {ValueAtRuleImport} */ (parsed).from) !== "undefined"
			) {
				if (/** @type {ValueAtRuleImport} */ (parsed).from.length === 0) {
					this._emitWarning(
						state,
						`Broken '@value' at-rule: ${input.slice(start, atRuleEnd)}'`,
						locConverter,
						start,
						atRuleEnd
					);

					const dep = new ConstDependency("", [start, atRuleEnd]);
					module.addPresentationalDependency(dep);
					return atRuleEnd;
				}

				let { from, items } = /** @type {ValueAtRuleImport} */ (parsed);

				for (const { importName, localName } of items) {
					{
						const reexport = icssDefinitions.get(from);

						if (reexport && reexport.value) {
							from = reexport.value.slice(1, -1);
						}

						const dep = new CssIcssImportDependency(
							from,
							[0, 0],
							/** @type {"local" | "global"} */
							(mode),
							importName,
							localName
						);
						const { line: sl, column: sc } = locConverter.get(start);
						const { line: el, column: ec } = locConverter.get(end);
						dep.setLoc(sl, sc, el, ec);
						module.addDependency(dep);

						icssDefinitions.set(localName, { importName });
					}

					{
						const dep = new CssIcssExportDependency(
							localName,
							getReexport(localName),
							undefined,
							false,
							CssIcssExportDependency.EXPORT_MODE.REPLACE
						);
						const { line: sl, column: sc } = locConverter.get(start);
						const { line: el, column: ec } = locConverter.get(end);
						dep.setLoc(sl, sc, el, ec);
						module.addDependency(dep);
					}
				}
			} else {
				if (/** @type {ValueAtRuleValue} */ (parsed).localName.length === 0) {
					this._emitWarning(
						state,
						`Broken '@value' at-rule: ${input.slice(start, atRuleEnd)}'`,
						locConverter,
						start,
						atRuleEnd
					);

					const dep = new ConstDependency("", [start, atRuleEnd]);
					module.addPresentationalDependency(dep);
					return atRuleEnd;
				}

				const { localName, value } = /** @type {ValueAtRuleValue} */ (parsed);
				const { line: sl, column: sc } = locConverter.get(start);
				const { line: el, column: ec } = locConverter.get(end);

				if (icssDefinitions.has(value)) {
					const def =
						/** @type {IcssDefinition} */
						(icssDefinitions.get(value));

					def.localName = value;

					icssDefinitions.set(localName, def);

					const dep = new CssIcssExportDependency(
						localName,
						getReexport(value)
					);
					dep.setLoc(sl, sc, el, ec);
					module.addDependency(dep);
				} else {
					icssDefinitions.set(localName, { value });

					const dep = new CssIcssExportDependency(localName, value);
					dep.setLoc(sl, sc, el, ec);
					module.addDependency(dep);
				}
			}

			const dep = new ConstDependency("", [start, atRuleEnd]);
			module.addPresentationalDependency(dep);
			return atRuleEnd;
		};

		/**
		 * Process icss symbol.
		 * @param {string} name ICSS symbol name
		 * @param {number} start start position
		 * @param {number} end end position
		 * @returns {number} position after handling
		 */
		const processICSSSymbol = (name, start, end) => {
			const def =
				/** @type {IcssDefinition} */
				(icssDefinitions.get(name));
			const { line: sl, column: sc } = locConverter.get(start);
			const { line: el, column: ec } = locConverter.get(end);
			const dep = new CssIcssSymbolDependency(
				def.localName || name,
				[start, end],
				def.value,
				def.importName
			);
			dep.setLoc(sl, sc, el, ec);
			module.addDependency(dep);
			return end;
		};

		/**
		 * Process local or global function.
		 * @param {string} input input
		 * @param {1 | 2} type type of function
		 * @param {number} start start position
		 * @param {number} end end position
		 * @returns {number} position after handling
		 */
		const processLocalOrGlobalFunction = (input, type, start, end) => {
			// Replace `local(`/` or `global(` (handle legacy `:local(` or `:global(` too)
			{
				const isColon = input.charCodeAt(start - 1) === CC_COLON;
				const dep = new ConstDependency("", [isColon ? start - 1 : start, end]);
				module.addPresentationalDependency(dep);
			}

			end = walkCssTokens.consumeUntil(
				input,
				start,
				{
					identifier(input, start, end) {
						if (type === 1) {
							let identifier = unescapeIdentifier(input.slice(start, end));
							const { line: sl, column: sc } = locConverter.get(start);
							const { line: el, column: ec } = locConverter.get(end);
							const isDashedIdent = isDashedIdentifier(identifier);

							if (isDashedIdent) {
								identifier = identifier.slice(2);
							}

							const dep = new CssIcssExportDependency(
								identifier,
								getReexport(identifier),
								[start, end],
								true,
								CssIcssExportDependency.EXPORT_MODE.ONCE,
								isDashedIdent
									? CssIcssExportDependency.EXPORT_TYPE.CUSTOM_VARIABLE
									: CssIcssExportDependency.EXPORT_TYPE.NORMAL
							);

							dep.setLoc(sl, sc, el, ec);
							module.addDependency(dep);
						}

						return end;
					}
				},
				{},
				{ onlyTopLevel: true, functionValue: true }
			);

			{
				// Replace the last `)`
				const dep = new ConstDependency("", [end, end + 1]);
				module.addPresentationalDependency(dep);
			}

			return end;
		};

		/**
		 * Process local at rule.
		 * @param {string} input input
		 * @param {number} end name end position
		 * @param {{ string?: boolean, identifier?: boolean | RegExp }} options types which allowed to handle
		 * @returns {number} position after handling
		 */
		const processLocalAtRule = (input, end, options) => {
			let found = false;

			return walkCssTokens.consumeUntil(
				input,
				end,
				{
					string(_input, start, end) {
						if (!found && options.string) {
							const value = unescapeIdentifier(input.slice(start + 1, end - 1));
							const { line: sl, column: sc } = locConverter.get(start);
							const { line: el, column: ec } = locConverter.get(end);
							const dep = new CssIcssExportDependency(
								value,
								value,
								[start, end],
								true,
								CssIcssExportDependency.EXPORT_MODE.ONCE
							);
							dep.setLoc(sl, sc, el, ec);
							module.addDependency(dep);
							found = true;
						}
						return end;
					},
					identifier(input, start, end) {
						if (!found) {
							const value = input.slice(start, end);

							if (options.identifier) {
								const identifier = unescapeIdentifier(value);

								if (
									options.identifier instanceof RegExp &&
									options.identifier.test(identifier)
								) {
									return end;
								}

								const { line: sl, column: sc } = locConverter.get(start);
								const { line: el, column: ec } = locConverter.get(end);

								const dep = new CssIcssExportDependency(
									identifier,
									getReexport(identifier),
									[start, end],
									true,
									CssIcssExportDependency.EXPORT_MODE.ONCE,
									CssIcssExportDependency.EXPORT_TYPE.NORMAL
								);
								dep.setLoc(sl, sc, el, ec);
								module.addDependency(dep);
								found = true;
							}
						}
						return end;
					}
				},
				{
					function: (input, start, end) => {
						// No need to handle `:` (COLON), because it's always a function
						const name = input
							.slice(start, end - 1)
							.replace(/\\/g, "")
							.toLowerCase();

						const type =
							name === "local" ? 1 : name === "global" ? 2 : undefined;

						if (!found && type) {
							found = true;
							return processLocalOrGlobalFunction(input, type, start, end);
						}

						if (
							this.options.dashedIdents &&
							isLocalMode() &&
							(name === "var" || name === "style")
						) {
							return processDashedIdent(input, end, end);
						}

						return end;
					}
				},
				{ onlyTopLevel: true, atRulePrelude: true }
			);
		};
		/**
		 * Process dashed ident.
		 * @param {string} input input
		 * @param {number} start start position
		 * @param {number} end end position
		 * @returns {number} position after handling
		 */
		const processDashedIdent = (input, start, end) => {
			const customIdent = walkCssTokens.eatIdentSequence(input, start);
			if (!customIdent) return end;
			const identifier = unescapeIdentifier(
				input.slice(customIdent[0] + 2, customIdent[1])
			);
			const afterCustomIdent = walkCssTokens.eatWhitespaceAndComments(
				input,
				customIdent[1]
			)[0];
			if (
				input.charCodeAt(afterCustomIdent) === CC_LOWER_F ||
				input.charCodeAt(afterCustomIdent) === CC_UPPER_F
			) {
				const fromWord = walkCssTokens.eatIdentSequence(
					input,
					afterCustomIdent
				);
				if (
					!fromWord ||
					input.slice(fromWord[0], fromWord[1]).toLowerCase() !== "from"
				) {
					return end;
				}
				const from = walkCssTokens.eatIdentSequenceOrString(
					input,
					walkCssTokens.eatWhitespaceAndComments(input, fromWord[1])[0]
				);
				if (!from) {
					return end;
				}
				const path = input.slice(from[0], from[1]);
				if (from[2] === true && path === "global") {
					const dep = new ConstDependency("", [customIdent[1], from[1]]);
					module.addPresentationalDependency(dep);
					return end;
				} else if (from[2] === false) {
					const { line: sl, column: sc } = locConverter.get(customIdent[0]);
					const { line: el, column: ec } = locConverter.get(from[1] - 1);
					const localName = `__ICSS_IMPORT_${counter++}__`;

					{
						const dep = new CssIcssImportDependency(
							path.slice(1, -1),
							[customIdent[0], from[1] - 1],
							/** @type {"local" | "global"} */
							(mode),
							identifier,
							localName
						);

						dep.setLoc(sl, sc, el, ec);
						module.addDependency(dep);
					}

					{
						const dep = new CssIcssExportDependency(
							identifier,
							getReexport(identifier, localName, true),
							[customIdent[0], from[1] - 1],
							true,
							CssIcssExportDependency.EXPORT_MODE.ONCE,
							CssIcssExportDependency.EXPORT_TYPE.CUSTOM_VARIABLE
						);

						dep.setLoc(sl, sc, el, ec);
						module.addDependency(dep);
					}

					{
						const dep = new ConstDependency("", [fromWord[0], from[1]]);
						module.addPresentationalDependency(dep);
						return end;
					}
				}
			} else {
				const { line: sl, column: sc } = locConverter.get(customIdent[0]);
				const { line: el, column: ec } = locConverter.get(customIdent[1]);
				const dep = new CssIcssExportDependency(
					identifier,
					getReexport(identifier, undefined, true),
					[customIdent[0], customIdent[1]],
					true,
					CssIcssExportDependency.EXPORT_MODE.ONCE,
					CssIcssExportDependency.EXPORT_TYPE.CUSTOM_VARIABLE
				);
				dep.setLoc(sl, sc, el, ec);
				module.addDependency(dep);
				return end;
			}

			return end;
		};
		/**
		 * Process local declaration.
		 * @param {string} input input
		 * @param {number} pos name start position
		 * @param {number} end name end position
		 * @returns {number} position after handling
		 */
		const processLocalDeclaration = (input, pos, end) => {
			pos = walkCssTokens.eatWhitespaceAndComments(input, pos)[0];
			const identifier = walkCssTokens.eatIdentSequence(input, pos);

			if (!identifier) {
				return end;
			}

			const propertyNameStart = identifier[0];

			pos = walkCssTokens.eatWhitespaceAndComments(input, identifier[1])[0];

			if (input.charCodeAt(pos) !== CC_COLON) {
				return end;
			}

			pos += 1;

			// Remove prefix and lowercase
			const propertyName = input
				.slice(identifier[0], identifier[1])
				.replace(/^(-\w+-)/, "")
				.toLowerCase();

			if (isLocalMode() && knownProperties.has(propertyName)) {
				/** @type {[number, number, boolean?][]} */
				const values = [];
				/** @type {Record<string, number>} */
				let parsedKeywords = Object.create(null);

				const isGridProperty = Boolean(propertyName.startsWith("grid"));
				const isGridTemplate = isGridProperty
					? Boolean(
							propertyName === "grid" ||
							propertyName === "grid-template" ||
							propertyName === "grid-template-columns" ||
							propertyName === "grid-template-rows"
						)
					: false;

				let afterExclamation = false;

				const end = walkCssTokens.consumeUntil(
					input,
					pos,
					{
						delim(input, start, end) {
							afterExclamation = input.charCodeAt(start) === CC_EXCLAMATION;
							return end;
						},
						leftSquareBracket(input, start, end) {
							let i = end;

							while (true) {
								i = walkCssTokens.eatWhitespaceAndComments(input, i)[0];
								const name = walkCssTokens.eatIdentSequence(input, i);

								if (!name) {
									break;
								}

								values.push(name);
								i = name[1];
							}

							return end;
						},
						string(_input, start, end) {
							if (
								propertyName === "animation" ||
								propertyName === "animation-name"
							) {
								values.push([start, end, true]);
							}

							if (
								propertyName === "grid" ||
								propertyName === "grid-template" ||
								propertyName === "grid-template-areas"
							) {
								const areas = unescapeIdentifier(
									input.slice(start + 1, end - 1)
								);
								const matches = matchAll(/\b\w+\b/g, areas);

								for (const match of matches) {
									const areaStart = start + 1 + match.index;
									values.push([areaStart, areaStart + match[0].length, false]);
								}
							}

							return end;
						},
						identifier(input, start, end) {
							if (isGridTemplate) {
								return end;
							}

							if (afterExclamation) {
								afterExclamation = false;
								return end;
							}

							const identifier = input.slice(start, end);
							const keyword = identifier.toLowerCase();

							parsedKeywords[keyword] =
								typeof parsedKeywords[keyword] !== "undefined"
									? parsedKeywords[keyword] + 1
									: 0;
							const keywords =
								/** @type {Record<string, number>} */
								(knownProperties.get(propertyName));

							if (
								keywords[keyword] &&
								parsedKeywords[keyword] < keywords[keyword]
							) {
								return end;
							}

							values.push([start, end]);
							return end;
						},
						comma(_input, _start, end) {
							parsedKeywords = {};

							return end;
						}
					},
					{
						function: (input, start, end) => {
							const name = input
								.slice(start, end - 1)
								.replace(/\\/g, "")
								.toLowerCase();

							const type =
								name === "local" ? 1 : name === "global" ? 2 : undefined;

							if (type) {
								return processLocalOrGlobalFunction(input, type, start, end);
							}

							if (
								this.options.dashedIdents &&
								isLocalMode() &&
								name === "var"
							) {
								return processDashedIdent(input, end, end);
							}

							if (this.options.url) {
								if (name === "src" || name === "url") {
									return processURLFunction(input, end, name);
								} else if (IMAGE_SET_FUNCTION.test(name)) {
									return processImageSetFunction(input, start, end);
								}
							}

							return end;
						}
					},
					{
						onlyTopLevel: !isGridTemplate,
						declarationValue: true
					}
				);

				if (values.length > 0) {
					for (const value of values) {
						const { line: sl, column: sc } = locConverter.get(value[0]);
						const { line: el, column: ec } = locConverter.get(value[1]);
						const [start, end, isString] = value;
						const name = unescapeIdentifier(
							isString
								? input.slice(start + 1, end - 1)
								: input.slice(start, end)
						);
						const dep = new CssIcssExportDependency(
							name,
							getReexport(name),
							[start, end],
							true,
							CssIcssExportDependency.EXPORT_MODE.ONCE,
							isGridProperty
								? CssIcssExportDependency.EXPORT_TYPE.GRID_CUSTOM_IDENTIFIER
								: CssIcssExportDependency.EXPORT_TYPE.NORMAL
						);
						dep.setLoc(sl, sc, el, ec);
						module.addDependency(dep);
					}
				}

				return end;
			} else if (COMPOSES_PROPERTY.test(propertyName)) {
				if (lastLocalIdentifiers.length > 1) {
					const end = eatUntilSemi(input, pos);
					this._emitWarning(
						state,
						`Composition is only allowed when selector is single local class name not in "${lastLocalIdentifiers.join('", "')}"`,
						locConverter,
						pos,
						end
					);

					return end;
				}

				if (lastLocalIdentifiers.length !== 1) return pos;

				const lastLocalIdentifier = lastLocalIdentifiers[0];
				let end = pos;

				/** @type {Set<[number, number]>} */
				const classNames = new Set();

				while (true) {
					pos = walkCssTokens.eatWhitespaceAndComments(input, pos)[0];

					let className = walkCssTokens.eatIdentSequence(input, pos);

					const ifFunction =
						className && input.charCodeAt(className[1]) === CC_LEFT_PARENTHESIS;
					let isGlobalFunction = false;

					if (className && ifFunction) {
						const name = input
							.slice(className[0], className[1])
							.replace(/\\/g, "")
							.toLowerCase();

						isGlobalFunction = name === "global";
						pos = walkCssTokens.eatWhitespaceAndComments(
							input,
							className[1] + 1
						)[0];
						className = walkCssTokens.eatIdentSequence(input, pos);
						if (className) {
							pos = walkCssTokens.eatWhitespaceAndComments(
								input,
								className[1]
							)[0];
							pos += 1;
						}
					} else if (className) {
						pos = walkCssTokens.eatWhitespaceAndComments(
							input,
							className[1]
						)[0];
						pos = className[1];
					}

					// True when we have multiple values
					const isComma = input.charCodeAt(pos) === CC_COMMA;
					const isSemicolon = input.charCodeAt(pos) === CC_SEMICOLON;
					const isRightCurly = input.charCodeAt(pos) === CC_RIGHT_CURLY;

					if (isComma || isSemicolon || isRightCurly) {
						if (className) {
							classNames.add(className);
						}

						for (const className of classNames) {
							const [start, end] = className;
							const identifier = unescapeIdentifier(input.slice(start, end));
							const dep = new CssIcssExportDependency(
								lastLocalIdentifier,
								getReexport(identifier),
								[start, end],
								!isGlobalFunction,
								isGlobalFunction
									? CssIcssExportDependency.EXPORT_MODE.APPEND
									: CssIcssExportDependency.EXPORT_MODE.SELF_REFERENCE,
								CssIcssExportDependency.EXPORT_TYPE.COMPOSES
							);
							const { line: sl, column: sc } = locConverter.get(start);
							const { line: el, column: ec } = locConverter.get(end);
							dep.setLoc(sl, sc, el, ec);
							module.addDependency(dep);
						}

						classNames.clear();

						if (isSemicolon || isRightCurly) {
							end = isSemicolon
								? walkCssTokens.eatWhitespace(input, pos + 1)
								: pos;
							break;
						}

						pos += 1;
					} else if (
						classNames.size > 0 &&
						className &&
						input.slice(className[0], className[1]).toLowerCase() === "from"
					) {
						let from = walkCssTokens.eatString(input, pos);

						if (from) {
							const request = input.slice(from[0] + 1, from[1] - 1);

							for (const className of classNames) {
								const [start, end] = className;
								const identifier = unescapeIdentifier(input.slice(start, end));
								const { line: sl, column: sc } = locConverter.get(start);
								const { line: el, column: ec } = locConverter.get(end);
								const localName = `__ICSS_IMPORT_${counter++}__`;

								{
									const dep = new CssIcssImportDependency(
										request,
										[start, end],
										/** @type {"local" | "global"} */
										(mode),
										identifier,
										localName
									);
									dep.setLoc(sl, sc, el, ec);
									module.addDependency(dep);
								}

								{
									const dep = new CssIcssExportDependency(
										lastLocalIdentifier,
										getReexport(identifier, localName),
										[start, end],
										true,
										CssIcssExportDependency.EXPORT_MODE.APPEND,
										CssIcssExportDependency.EXPORT_TYPE.COMPOSES
									);
									dep.setLoc(sl, sc, el, ec);
									module.addDependency(dep);
								}
							}

							classNames.clear();
							pos = from[1];
						} else {
							from = walkCssTokens.eatIdentSequence(input, pos);

							if (from && input.slice(from[0], from[1]) === "global") {
								for (const className of classNames) {
									const [start, end] = className;
									const identifier = unescapeIdentifier(
										input.slice(start, end)
									);
									const dep = new CssIcssExportDependency(
										/** @type {string} */
										(lastLocalIdentifier),
										getReexport(identifier),
										[start, end],
										false,
										CssIcssExportDependency.EXPORT_MODE.APPEND,
										CssIcssExportDependency.EXPORT_TYPE.COMPOSES
									);
									const { line: sl, column: sc } = locConverter.get(start);
									const { line: el, column: ec } = locConverter.get(end);
									dep.setLoc(sl, sc, el, ec);
									module.addDependency(dep);
								}

								classNames.clear();
								pos = from[1];
							} else {
								const end = eatUntilSemi(input, pos);
								this._emitWarning(
									state,
									"Incorrect composition, expected global keyword or string value",
									locConverter,
									pos,
									end
								);
								return end;
							}
						}
					} else if (className) {
						classNames.add(className);
					} else {
						const end = eatUntilSemi(input, pos);
						this._emitWarning(
							state,
							"Incorrect composition, expected class named",
							locConverter,
							pos,
							end
						);
						return end;
					}
				}

				// Remove `composes` from source code
				const dep = new ConstDependency("", [propertyNameStart, end]);
				module.addPresentationalDependency(dep);
			}

			return pos;
		};

		/**
		 * Process id selector.
		 * @param {string} input input
		 * @param {number} start start position
		 * @param {number} end end position
		 * @returns {number} position after handling
		 */
		const processIdSelector = (input, start, end) => {
			const valueStart = start + 1;
			const name = unescapeIdentifier(input.slice(valueStart, end));
			const dep = new CssIcssExportDependency(
				name,
				getReexport(name),
				[valueStart, end],
				true,
				CssIcssExportDependency.EXPORT_MODE.ONCE
			);
			const { line: sl, column: sc } = locConverter.get(start);
			const { line: el, column: ec } = locConverter.get(end);
			dep.setLoc(sl, sc, el, ec);
			module.addDependency(dep);
			return end;
		};

		/**
		 * Process class selector.
		 * @param {string} input input
		 * @param {number} start start position
		 * @param {number} end end position
		 * @returns {number} position after handling
		 */
		const processClassSelector = (input, start, end) => {
			const ident = walkCssTokens.skipCommentsAndEatIdentSequence(input, end);
			if (!ident) return end;
			const name = unescapeIdentifier(input.slice(ident[0], ident[1]));
			lastLocalIdentifiers.push(name);
			const dep = new CssIcssExportDependency(
				name,
				getReexport(name),
				[ident[0], ident[1]],
				true,
				CssIcssExportDependency.EXPORT_MODE.ONCE
			);
			const { line: sl, column: sc } = locConverter.get(ident[0]);
			const { line: el, column: ec } = locConverter.get(ident[1]);
			dep.setLoc(sl, sc, el, ec);
			module.addDependency(dep);
			return ident[1];
		};

		/**
		 * Process attribute selector.
		 * @param {string} input input
		 * @param {number} start start position
		 * @param {number} end end position
		 * @returns {number} position after handling
		 */
		const processAttributeSelector = (input, start, end) => {
			end = walkCssTokens.eatWhitespaceAndComments(input, end)[0];
			const identifier = walkCssTokens.eatIdentSequence(input, end);
			if (!identifier) return end;
			const name = unescapeIdentifier(
				input.slice(identifier[0], identifier[1])
			);
			if (name.toLowerCase() !== "class") {
				return end;
			}
			end = walkCssTokens.eatWhitespaceAndComments(input, identifier[1])[0];

			const isTilde = input.charCodeAt(end) === CC_TILDE;

			if (
				input.charCodeAt(end) !== CC_EQUAL &&
				input.charCodeAt(end) !== CC_TILDE
			) {
				return end;
			}

			end += 1;

			if (isTilde) {
				if (input.charCodeAt(end) !== CC_EQUAL) {
					return end;
				}

				end += 1;
			}

			end = walkCssTokens.eatWhitespaceAndComments(input, end)[0];
			const value = walkCssTokens.eatIdentSequenceOrString(input, end);

			if (!value) {
				return end;
			}

			const classNameStart = value[2] ? value[0] : value[0] + 1;
			const classNameEnd = value[2] ? value[1] : value[1] - 1;
			const className = unescapeIdentifier(
				input.slice(classNameStart, classNameEnd)
			);
			const dep = new CssIcssExportDependency(
				className,
				getReexport(className),
				[classNameStart, classNameEnd],
				true,
				CssIcssExportDependency.EXPORT_MODE.NONE
			);
			const { line: sl, column: sc } = locConverter.get(classNameStart);
			const { line: el, column: ec } = locConverter.get(classNameEnd);
			dep.setLoc(sl, sc, el, ec);
			module.addDependency(dep);
			return value[2] ? classNameEnd : classNameEnd + 1;
		};

		walkCssTokens(source, 0, {
			comment,
			leftCurlyBracket: (input, start, end) => {
				switch (scope) {
					case CSS_MODE_TOP_LEVEL: {
						allowImportAtRule = false;
						scope = CSS_MODE_IN_BLOCK;

						if (isModules) {
							blockNestingLevel = 1;
							isNextRulePrelude = isNextNestedSyntax(input, end);
						}

						break;
					}
					case CSS_MODE_IN_BLOCK: {
						if (isModules) {
							blockNestingLevel++;
							isNextRulePrelude = isNextNestedSyntax(input, end);
						}
						break;
					}
				}
				return end;
			},
			rightCurlyBracket: (input, start, end) => {
				switch (scope) {
					case CSS_MODE_IN_BLOCK: {
						if (--blockNestingLevel === 0) {
							scope = CSS_MODE_TOP_LEVEL;

							if (isModules) {
								isNextRulePrelude = true;
								modeData = undefined;
								lastLocalIdentifiers = [];
							}
						} else if (isModules) {
							isNextRulePrelude = isNextNestedSyntax(input, end);
						}
						break;
					}
				}
				return end;
			},
			url: (input, start, end, contentStart, contentEnd) => {
				if (!this.options.url) {
					return end;
				}

				return processOldURLFunction(
					input,
					start,
					end,
					contentStart,
					contentEnd
				);
			},
			atKeyword: (input, start, end) => {
				const name = input.slice(start, end).toLowerCase();

				switch (name) {
					case "@namespace": {
						this._emitWarning(
							state,
							"'@namespace' is not supported in bundled CSS",
							locConverter,
							start,
							end
						);

						return eatUntilSemi(input, start);
					}
					case "@charset": {
						const atRuleEnd = eatUntilSemi(input, start);

						if (/** @type {CssModule} */ (module).exportType === "style") {
							return atRuleEnd;
						}

						const dep = new ConstDependency("", [start, atRuleEnd + 1]);
						module.addPresentationalDependency(dep);

						const value = walkCssTokens.eatString(input, end);

						if (!value) {
							return atRuleEnd;
						}

						/** @type {BuildInfo} */
						(module.buildInfo).charset = input
							.slice(value[0] + 1, value[1] - 1)
							.toUpperCase();

						return atRuleEnd;
					}
					case "@import": {
						if (!this.options.import) {
							return eatUntilSemi(input, end);
						}

						if (!allowImportAtRule) {
							this._emitWarning(
								state,
								"Any '@import' rules must precede all other rules",
								locConverter,
								start,
								end
							);
							return eatUntilSemi(input, end);
						}

						return processAtImport(input, start, end);
					}
					default: {
						if (isModules) {
							if (name === "@value") {
								return processAtValue(input, start, end);
							} else if (
								this.options.animation &&
								OPTIONALLY_VENDOR_PREFIXED_KEYFRAMES_AT_RULE.test(name) &&
								isLocalMode()
							) {
								return processLocalAtRule(input, end, {
									string: true,
									identifier: true
								});
							} else if (
								this.options.customIdents &&
								name === "@counter-style" &&
								isLocalMode()
							) {
								return processLocalAtRule(input, end, {
									identifier: true
								});
							} else if (
								this.options.container &&
								name === "@container" &&
								isLocalMode()
							) {
								return processLocalAtRule(input, end, {
									identifier: /^(none|and|or|not)$/
								});
							} else if (name === "@scope") {
								isNextRulePrelude = true;
								return end;
							}

							isNextRulePrelude = false;
						}
					}
				}

				return end;
			},
			semicolon: (input, start, end) => {
				if (isModules && scope === CSS_MODE_IN_BLOCK) {
					isNextRulePrelude = isNextNestedSyntax(input, end);
				}
				return end;
			},
			identifier: (input, start, end) => {
				if (isModules) {
					const identifier = input.slice(start, end);

					if (
						this.options.dashedIdents &&
						isLocalMode() &&
						isDashedIdentifier(identifier)
					) {
						return processDashedIdent(input, start, end);
					}

					if (icssDefinitions.has(identifier)) {
						return processICSSSymbol(identifier, start, end);
					}

					switch (scope) {
						case CSS_MODE_IN_BLOCK: {
							if (isModules && !isNextRulePrelude) {
								// Handle only top level values and not inside functions
								return processLocalDeclaration(input, start, end);
							}
							break;
						}
					}
				}

				return end;
			},
			delim: (input, start, end) => {
				if (
					input.charCodeAt(start) === CC_FULL_STOP &&
					isNextRulePrelude &&
					isLocalMode()
				) {
					return processClassSelector(input, start, end);
				}

				return end;
			},
			hash: (input, start, end, isID) => {
				if (isNextRulePrelude && isLocalMode() && isID) {
					return processIdSelector(input, start, end);
				}

				return end;
			},
			colon: (input, start, end) => {
				if (isModules) {
					const ident = walkCssTokens.skipCommentsAndEatIdentSequence(
						input,
						end
					);
					if (!ident) return end;
					const name = input.slice(ident[0], ident[1]).toLowerCase();

					switch (scope) {
						case CSS_MODE_TOP_LEVEL: {
							if (name === "import") {
								const pos = processImportOrExport(0, input, ident[1]);
								const dep = new ConstDependency("", [start, pos]);
								module.addPresentationalDependency(dep);
								return pos;
							} else if (name === "export") {
								const pos = processImportOrExport(1, input, ident[1]);
								const dep = new ConstDependency("", [start, pos]);
								module.addPresentationalDependency(dep);
								return pos;
							}
						}
						// falls through
						default: {
							if (isNextRulePrelude) {
								const isFn = input.charCodeAt(ident[1]) === CC_LEFT_PARENTHESIS;

								if (isFn && name === "local") {
									// Eat extra whitespace
									const end = walkCssTokens.eatWhitespaceAndComments(
										input,
										ident[1] + 1
									)[0];
									modeData = LOCAL_MODE;
									const dep = new ConstDependency("", [start, end]);
									module.addPresentationalDependency(dep);
									balanced.push([":local", start, end, true]);
									return end;
								} else if (name === "local") {
									modeData = LOCAL_MODE;
									const found = walkCssTokens.eatWhitespaceAndComments(
										input,
										ident[1]
									);

									if (!found[1]) {
										this._emitWarning(
											state,
											`Missing whitespace after ':local' in '${input.slice(
												start,
												eatUntilLeftCurly(input, end) + 1
											)}'`,
											locConverter,
											start,
											end
										);
									}

									end = walkCssTokens.eatWhitespace(input, ident[1]);
									const dep = new ConstDependency("", [start, end]);
									module.addPresentationalDependency(dep);
									return end;
								} else if (isFn && name === "global") {
									// Eat extra whitespace
									const end = walkCssTokens.eatWhitespaceAndComments(
										input,
										ident[1] + 1
									)[0];
									modeData = GLOBAL_MODE;
									const dep = new ConstDependency("", [start, end]);
									module.addPresentationalDependency(dep);
									balanced.push([":global", start, end, true]);
									return end;
								} else if (name === "global") {
									modeData = GLOBAL_MODE;
									// Eat extra whitespace
									const found = walkCssTokens.eatWhitespaceAndComments(
										input,
										ident[1]
									);

									if (!found[1]) {
										this._emitWarning(
											state,
											`Missing whitespace after ':global' in '${input.slice(
												start,
												eatUntilLeftCurly(input, end) + 1
											)}'`,
											locConverter,
											start,
											end
										);
									}

									end = walkCssTokens.eatWhitespace(input, ident[1]);
									const dep = new ConstDependency("", [start, end]);
									module.addPresentationalDependency(dep);
									return end;
								}
							}
						}
					}
				}

				lastTokenEndForComments = end;

				return end;
			},
			function: (input, start, end) => {
				const name = input
					.slice(start, end - 1)
					.replace(/\\/g, "")
					.toLowerCase();

				balanced.push([name, start, end]);

				switch (name) {
					case "src":
					case "url": {
						if (!this.options.url) {
							return end;
						}

						return processURLFunction(input, end, name);
					}
					default: {
						if (this.options.url && IMAGE_SET_FUNCTION.test(name)) {
							return processImageSetFunction(input, start, end);
						}

						if (isModules) {
							if (
								this.options.function &&
								isLocalMode() &&
								isDashedIdentifier(name)
							) {
								return processDashedIdent(input, start, end);
							}

							const type =
								name === "local" ? 1 : name === "global" ? 2 : undefined;

							if (type && !isNextRulePrelude) {
								return processLocalOrGlobalFunction(input, type, start, end);
							}
						}
					}
				}

				return end;
			},
			leftSquareBracket: (input, start, end) => {
				if (isNextRulePrelude && isLocalMode()) {
					return processAttributeSelector(input, start, end);
				}
				return end;
			},
			leftParenthesis: (input, start, end) => {
				balanced.push(["(", start, end]);

				return end;
			},
			rightParenthesis: (input, start, end) => {
				const popped = balanced.pop();

				if (isModules && popped) {
					const isLocal = popped[0] === ":local";
					const isGlobal = popped[0] === ":global";
					if (isLocal || isGlobal) {
						modeData = balanced[balanced.length - 1]
							? balanced[balanced.length - 1][0] === ":local"
								? LOCAL_MODE
								: balanced[balanced.length - 1][0] === ":global"
									? GLOBAL_MODE
									: undefined
							: undefined;
						if (popped[3] && isLocal) {
							while (walkCssTokens.isWhiteSpace(input.charCodeAt(start - 1))) {
								start -= 1;
							}
						}
						const dep = new ConstDependency("", [start, end]);
						module.addPresentationalDependency(dep);
					} else if (isNextRulePrelude) {
						modeData = undefined;
					}
				}

				return end;
			},
			comma: (input, start, end) => {
				if (isModules && balanced.length === 0) {
					// Reset stack for `:global .class :local .class-other` selector after
					modeData = undefined;
				}

				lastTokenEndForComments = start;

				return end;
			}
		});

		/** @type {BuildInfo} */
		(module.buildInfo).strict = true;

		const buildMeta = /** @type {BuildMeta} */ (state.module.buildMeta);

		buildMeta.exportsType = this.options.namedExports ? "namespace" : "default";
		buildMeta.defaultObject = this.options.namedExports
			? false
			: "redirect-warn";

		if (
			/** @type {CssModule} */ (module).exportType === "text" ||
			/** @type {CssModule} */ (module).exportType === "css-style-sheet"
		) {
			module.addDependency(new StaticExportsDependency(["default"], true));
		} else {
			module.addDependency(new StaticExportsDependency([], true));
		}

		return state;
	}

	/**
	 * Returns comments in the range.
	 * @param {Range} range range
	 * @returns {Comment[]} comments in the range
	 */
	getComments(range) {
		if (!this.comments) return [];
		const [rangeStart, rangeEnd] = range;
		/**
		 * Returns compared.
		 * @param {Comment} comment comment
		 * @param {number} needle needle
		 * @returns {number} compared
		 */
		const compare = (comment, needle) =>
			/** @type {Range} */ (comment.range)[0] - needle;
		const comments = /** @type {Comment[]} */ (this.comments);
		let idx = binarySearchBounds.ge(comments, rangeStart, compare);
		/** @type {Comment[]} */
		const commentsInRange = [];
		while (
			comments[idx] &&
			/** @type {Range} */ (comments[idx].range)[1] <= rangeEnd
		) {
			commentsInRange.push(comments[idx]);
			idx++;
		}

		return commentsInRange;
	}

	/**
	 * Parses comment options.
	 * @param {Range} range range of the comment
	 * @returns {{ options: Record<string, EXPECTED_ANY> | null, errors: (Error & { comment: Comment })[] | null }} result
	 */
	parseCommentOptions(range) {
		const comments = this.getComments(range);
		if (comments.length === 0) {
			return EMPTY_COMMENT_OPTIONS;
		}
		/** @type {Record<string, EXPECTED_ANY>} */
		const options = {};
		/** @type {(Error & { comment: Comment })[]} */
		const errors = [];
		for (const comment of comments) {
			const { value } = comment;
			if (value && webpackCommentRegExp.test(value)) {
				// try compile only if webpack options comment is present
				try {
					for (let [key, val] of Object.entries(
						vm.runInContext(
							`(function(){return {${value}};})()`,
							this.magicCommentContext
						)
					)) {
						if (typeof val === "object" && val !== null) {
							val =
								val.constructor.name === "RegExp"
									? new RegExp(val)
									: JSON.parse(JSON.stringify(val));
						}
						options[key] = val;
					}
				} catch (err) {
					const newErr = new Error(String(/** @type {Error} */ (err).message));
					newErr.stack = String(/** @type {Error} */ (err).stack);
					Object.assign(newErr, { comment });
					errors.push(/** @type {(Error & { comment: Comment })} */ (newErr));
				}
			}
		}
		return { options, errors };
	}
}

module.exports = CssParser;
module.exports.escapeIdentifier = escapeIdentifier;
module.exports.unescapeIdentifier = unescapeIdentifier;
