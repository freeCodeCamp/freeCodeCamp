//.CommonJS
var CSSOM = {
	CSSStyleSheet: require("./CSSStyleSheet").CSSStyleSheet,
	CSSStyleRule: require("./CSSStyleRule").CSSStyleRule,
	CSSImportRule: require("./CSSImportRule").CSSImportRule,
	CSSMediaRule: require("./CSSMediaRule").CSSMediaRule
};
///CommonJS


CSSOM.Parser = function Parser() {};

/**
 * @param {string} cssText
 * @param {Object} options
 */
CSSOM.Parser.prototype.parseStyleSheet = function(cssText, options) {
	options = options || {};
	var i = options.startIndex || 0;

	for (var character; character = token.charAt(i); i++) {
		switch (character) {

		case " ":
		case "\t":
		case "\r":
		case "\n":
		case "\f":
			if (SIGNIFICANT_WHITESPACE[state]) {
				buffer += character;
			}
			break;
	}
};

CSSOM.Parser.prototype.parse = function(token, options) {

	options = options || {};
	var i = options.startIndex || 0;

	this.styleSheetStart(i);

	/**
	  "before-selector" or
	  "selector" or
	  "atRule" or
	  "atBlock" or
	  "before-name" or
	  "name" or
	  "before-value" or
	  "value"
	*/
	var state = options.state || "before-selector";

	var index;
	var j = i;
	var buffer = "";

	var SIGNIFICANT_WHITESPACE = {
		"selector": true,
		"value": true,
		"atRule": true,
		"importRule-begin": true,
		"importRule": true,
		"atBlock": true
	};

	var styleSheet = new CSSOM.CSSStyleSheet;

	// @type CSSStyleSheet|CSSMediaRule
	var currentScope = styleSheet;

	var selector, name, value, priority="", styleRule, mediaRule, importRule;

	var declarationStarts;
	var declarationEnds;

	for (var character; character = token.charAt(i); i++) {

		switch (character) {

		case " ":
		case "\t":
		case "\r":
		case "\n":
		case "\f":
			if (SIGNIFICANT_WHITESPACE[state]) {
				buffer += character;
			}
			break;

		// String
		case '"':
			j = i + 1;
			index = token.indexOf('"', j) + 1;
			if (!index) {
				throw '" is missing';
			}
			buffer += token.slice(i, index);
			i = index - 1;
			if (state == 'before-value') {
				state = 'value';
			}
			break;

		case "'":
			j = i + 1;
			index = token.indexOf("'", j) + 1;
			if (!index) {
				throw "' is missing";
			}
			buffer += token.slice(i, index);
			i = index - 1;
			switch (state) {
				case 'before-value':
					state = 'value';
					break;
				case 'importRule-begin':
					state = 'importRule';
					break;
			}
			break;

		// Comment
		case "/":
			if (token.charAt(i + 1) == "*") {
				i += 2;
				index = token.indexOf("*/", i);
				if (index == -1) {
					throw SyntaxError("Missing */");
				} else {
					i = index + 1;
				}
			} else {
				buffer += character;
			}
			if (state == "importRule-begin") {
				buffer += " ";
				state = "importRule";
			}
			break;

		// At-rule
		case "@":
			if (token.indexOf("@media", i) == i) {
				state = "atBlock";
				mediaRule = new CSSOM.CSSMediaRule;
				mediaRule.__starts = i;
				i += "media".length;
				buffer = "";
				break;
			} else if (token.indexOf("@import", i) == i) {
				state = "importRule-begin";
				i += "import".length;
				buffer += "@import";
				break;
			} else if (state == "selector") {
				state = "atRule";
			}
			buffer += character;
			break;

		case "{":
			if (state == "selector" || state == "atRule") {
				this.selectorEnd(i, buffer);
				buffer = "";
				state = "before-name";
			} else if (state == "atBlock") {
				mediaRule.media.mediaText = buffer.trim();
				currentScope = mediaRule;
				buffer = "";
				state = "before-selector";
			}
			break;

		case ":":
			if (state == "name") {
				name = buffer;
				buffer = "";
				state = "before-value";
			} else {
				buffer += character;
			}
			break;

		case '(':
			if (state == 'value') {
				index = token.indexOf(')', i + 1);
				if (index == -1) {
					throw i + ': unclosed "("';
				}
				buffer += token.slice(i, index + 1);
				i = index;
			} else {
				buffer += character;
			}
			break;

		case "!":
			if (state == "value" && token.indexOf("!important", i) === i) {
				priority = "important";
				i += "important".length;
			} else {
				buffer += character;
			}
			break;

		case ";":
			switch (state) {
				case "value":
					this.declarationEnd(i, name, buffer, priority);
					priority = "";
					buffer = "";
					state = "before-name";
					break;
				case "atRule":
					buffer = "";
					state = "before-selector";
					break;
				case "importRule":
					importRule = new CSSOM.CSSImportRule;
					importRule.cssText = buffer + character;
					currentScope.cssRules.push(importRule);
					buffer = "";
					state = "before-selector";
					break;
				default:
					buffer += character;
					break;
			}
			break;

		case "}":
			switch (state) {
				case "value":
					this.declarationEnd(i, name, buffer, priority);
					// fall down
				case "before-name":
					this.styleRuleEnd(i);
					buffer = "";
					break;
				case "name":
					throw i + ": Oops";
					break;
				case "before-selector":
				case "selector":
					// End of media rule.
					// Nesting rules aren't supported yet
					if (!mediaRule) {
						throw "unexpected }";
					}
					mediaRule.__ends = i + 1;
					styleSheet.cssRules.push(mediaRule);
					currentScope = styleSheet;
					buffer = "";
					break;
			}
			state = "before-selector";
			break;

		default:
			switch (state) {
				case "before-selector":
					this.styleRuleStart(i);
					state = "selector";
					break;
				case "before-name":
					state = "name";
					break;
				case "before-value":
					state = "value";
					break;
				case "importRule-begin":
					state = "importRule";
					break;
			}
			buffer += character;
			break;
		}
	}

	return styleSheet;
};

CSSOM.Parser.prototype.compile = function() {
	var handlers = {
		styleSheetStart: this.styleSheetStart,
		styleRuleStart: this.styleRuleStart,
		selectorEnd: this.selectorEnd,
		declarationEnd: this.declarationEnd,
		styleRuleEnd: this.styleRuleEnd,
		styleSheetEnd: this.styleSheetEnd
	};
	var parser = this.parse.toString();
	for (var key in handlers) {
		if (!handlers.hasOwnProperty(key)) {
			continue;
		}
		parser = parser.replace(new RegExp('^.*' + key + '.*$', 'gm'), handlers[key].toString()
			.replace(/^function.+$/m, '')
			.replace(/^}/m, ''))
			.replace(/this\.?/g, '');
	}
	return parser;
};

CSSOM.Parser.prototype.styleSheetStart = function(i) {
	console.log('styleSheetStart', i);
	this.styleSheet = new CSSOM.CSSStyleSheet;
	this.scopeRules = this.styleSheet.cssRules;
};

CSSOM.Parser.prototype.styleRuleStart = function(i) {
	console.log('styleRuleStart', i);
	this.styleRule = new CSSOM.CSSStyleRule;
	this.styleRule._start = i;
};

CSSOM.Parser.prototype.selectorEnd = function(i, buffer) {
	this.styleRule.selectorText = buffer.trimRight();
	this.styleRule.style._start = i;
};

CSSOM.Parser.prototype.declarationEnd = function(name, value, priority, startIndex, endIndex) {
	console.log('declarationEnd', name, value, priority, startIndex, endIndex);
};

CSSOM.Parser.prototype.styleRuleEnd = function(i) {
	this.styleRule._end = i;
	this.scopeRules.push(this.styleRule);
};


CSSOM.Parser.prototype.styleSheetEnd = function(i) {
	return this.styleSheet;
};

/*
Parser.prototype.nameStart = function(i) {
	this.nameStartIndex = i;
};

Parser.prototype.nameEnd = function(i, buffer) {
	this.name = buffer.trimRight();
	this.nameEndIndex = this.nameStartIndex + this.name.length;
};


Parser.prototype.valueStart = function(i) {
	this.valueStartIndex = i;
};

Parser.prototype.valueEnd = function(i, buffer) {
	var value = buffer.trimRight();
	this.styleRule.style.add(this.name, value, this.nameStartIndex, this.nameEndIndex, this.valueStartIndex, this.valueStartIndex + value.length);
};
*/


//.CommonJS
exports.Parser = CSSOM.Parser;
///CommonJS