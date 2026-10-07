import { t as __commonJSMin } from "./chunk.js";

//#region ../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/parse.js
var require_parse = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var openParentheses = "(".charCodeAt(0);
	var closeParentheses = ")".charCodeAt(0);
	var singleQuote = "'".charCodeAt(0);
	var doubleQuote = "\"".charCodeAt(0);
	var backslash = "\\".charCodeAt(0);
	var slash = "/".charCodeAt(0);
	var comma = ",".charCodeAt(0);
	var colon = ":".charCodeAt(0);
	var star = "*".charCodeAt(0);
	var uLower = "u".charCodeAt(0);
	var uUpper = "U".charCodeAt(0);
	var plus$1 = "+".charCodeAt(0);
	var isUnicodeRange = /^[a-f0-9?-]+$/i;
	module.exports = function(input) {
		var tokens = [];
		var value = input;
		var next, quote, prev, token, escape, escapePos, whitespacePos, parenthesesOpenPos;
		var pos = 0;
		var code = value.charCodeAt(pos);
		var max = value.length;
		var stack = [{ nodes: tokens }];
		var balanced = 0;
		var parent;
		var name = "";
		var before = "";
		var after = "";
		while (pos < max) if (code <= 32) {
			next = pos;
			do {
				next += 1;
				code = value.charCodeAt(next);
			} while (code <= 32);
			token = value.slice(pos, next);
			prev = tokens[tokens.length - 1];
			if (code === closeParentheses && balanced) after = token;
			else if (prev && prev.type === "div") {
				prev.after = token;
				prev.sourceEndIndex += token.length;
			} else if (code === comma || code === colon || code === slash && value.charCodeAt(next + 1) !== star && (!parent || parent && parent.type === "function" && parent.value !== "calc")) before = token;
			else tokens.push({
				type: "space",
				sourceIndex: pos,
				sourceEndIndex: next,
				value: token
			});
			pos = next;
		} else if (code === singleQuote || code === doubleQuote) {
			next = pos;
			quote = code === singleQuote ? "'" : "\"";
			token = {
				type: "string",
				sourceIndex: pos,
				quote
			};
			do {
				escape = false;
				next = value.indexOf(quote, next + 1);
				if (~next) {
					escapePos = next;
					while (value.charCodeAt(escapePos - 1) === backslash) {
						escapePos -= 1;
						escape = !escape;
					}
				} else {
					value += quote;
					next = value.length - 1;
					token.unclosed = true;
				}
			} while (escape);
			token.value = value.slice(pos + 1, next);
			token.sourceEndIndex = token.unclosed ? next : next + 1;
			tokens.push(token);
			pos = next + 1;
			code = value.charCodeAt(pos);
		} else if (code === slash && value.charCodeAt(pos + 1) === star) {
			next = value.indexOf("*/", pos);
			token = {
				type: "comment",
				sourceIndex: pos,
				sourceEndIndex: next + 2
			};
			if (next === -1) {
				token.unclosed = true;
				next = value.length;
				token.sourceEndIndex = next;
			}
			token.value = value.slice(pos + 2, next);
			tokens.push(token);
			pos = next + 2;
			code = value.charCodeAt(pos);
		} else if ((code === slash || code === star) && parent && parent.type === "function" && parent.value === "calc") {
			token = value[pos];
			tokens.push({
				type: "word",
				sourceIndex: pos - before.length,
				sourceEndIndex: pos + token.length,
				value: token
			});
			pos += 1;
			code = value.charCodeAt(pos);
		} else if (code === slash || code === comma || code === colon) {
			token = value[pos];
			tokens.push({
				type: "div",
				sourceIndex: pos - before.length,
				sourceEndIndex: pos + token.length,
				value: token,
				before,
				after: ""
			});
			before = "";
			pos += 1;
			code = value.charCodeAt(pos);
		} else if (openParentheses === code) {
			next = pos;
			do {
				next += 1;
				code = value.charCodeAt(next);
			} while (code <= 32);
			parenthesesOpenPos = pos;
			token = {
				type: "function",
				sourceIndex: pos - name.length,
				value: name,
				before: value.slice(parenthesesOpenPos + 1, next)
			};
			pos = next;
			if (name === "url" && code !== singleQuote && code !== doubleQuote) {
				next -= 1;
				do {
					escape = false;
					next = value.indexOf(")", next + 1);
					if (~next) {
						escapePos = next;
						while (value.charCodeAt(escapePos - 1) === backslash) {
							escapePos -= 1;
							escape = !escape;
						}
					} else {
						value += ")";
						next = value.length - 1;
						token.unclosed = true;
					}
				} while (escape);
				whitespacePos = next;
				do {
					whitespacePos -= 1;
					code = value.charCodeAt(whitespacePos);
				} while (code <= 32);
				if (parenthesesOpenPos < whitespacePos) {
					if (pos !== whitespacePos + 1) token.nodes = [{
						type: "word",
						sourceIndex: pos,
						sourceEndIndex: whitespacePos + 1,
						value: value.slice(pos, whitespacePos + 1)
					}];
					else token.nodes = [];
					if (token.unclosed && whitespacePos + 1 !== next) {
						token.after = "";
						token.nodes.push({
							type: "space",
							sourceIndex: whitespacePos + 1,
							sourceEndIndex: next,
							value: value.slice(whitespacePos + 1, next)
						});
					} else {
						token.after = value.slice(whitespacePos + 1, next);
						token.sourceEndIndex = next;
					}
				} else {
					token.after = "";
					token.nodes = [];
				}
				pos = next + 1;
				token.sourceEndIndex = token.unclosed ? next : pos;
				code = value.charCodeAt(pos);
				tokens.push(token);
			} else {
				balanced += 1;
				token.after = "";
				token.sourceEndIndex = pos + 1;
				tokens.push(token);
				stack.push(token);
				tokens = token.nodes = [];
				parent = token;
			}
			name = "";
		} else if (closeParentheses === code && balanced) {
			pos += 1;
			code = value.charCodeAt(pos);
			parent.after = after;
			parent.sourceEndIndex += after.length;
			after = "";
			balanced -= 1;
			stack[stack.length - 1].sourceEndIndex = pos;
			stack.pop();
			parent = stack[balanced];
			tokens = parent.nodes;
		} else {
			next = pos;
			do {
				if (code === backslash) next += 1;
				next += 1;
				code = value.charCodeAt(next);
			} while (next < max && !(code <= 32 || code === singleQuote || code === doubleQuote || code === comma || code === colon || code === slash || code === openParentheses || code === star && parent && parent.type === "function" && parent.value === "calc" || code === slash && parent.type === "function" && parent.value === "calc" || code === closeParentheses && balanced));
			token = value.slice(pos, next);
			if (openParentheses === code) name = token;
			else if ((uLower === token.charCodeAt(0) || uUpper === token.charCodeAt(0)) && plus$1 === token.charCodeAt(1) && isUnicodeRange.test(token.slice(2))) tokens.push({
				type: "unicode-range",
				sourceIndex: pos,
				sourceEndIndex: next,
				value: token
			});
			else tokens.push({
				type: "word",
				sourceIndex: pos,
				sourceEndIndex: next,
				value: token
			});
			pos = next;
		}
		for (pos = stack.length - 1; pos; pos -= 1) {
			stack[pos].unclosed = true;
			stack[pos].sourceEndIndex = value.length;
		}
		return stack[0].nodes;
	};
}));

//#endregion
//#region ../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/walk.js
var require_walk = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function walk$1(nodes, cb, bubble) {
		var i, max, node, result;
		for (i = 0, max = nodes.length; i < max; i += 1) {
			node = nodes[i];
			if (!bubble) result = cb(node, i, nodes);
			if (result !== false && node.type === "function" && Array.isArray(node.nodes)) walk$1(node.nodes, cb, bubble);
			if (bubble) cb(node, i, nodes);
		}
	};
}));

//#endregion
//#region ../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/stringify.js
var require_stringify = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function stringifyNode(node, custom) {
		var type = node.type;
		var value = node.value;
		var buf;
		var customResult;
		if (custom && (customResult = custom(node)) !== void 0) return customResult;
		else if (type === "word" || type === "space") return value;
		else if (type === "string") {
			buf = node.quote || "";
			return buf + value + (node.unclosed ? "" : buf);
		} else if (type === "comment") return "/*" + value + (node.unclosed ? "" : "*/");
		else if (type === "div") return (node.before || "") + value + (node.after || "");
		else if (Array.isArray(node.nodes)) {
			buf = stringify$1(node.nodes, custom);
			if (type !== "function") return buf;
			return value + "(" + (node.before || "") + buf + (node.after || "") + (node.unclosed ? "" : ")");
		}
		return value;
	}
	function stringify$1(nodes, custom) {
		var result, i;
		if (Array.isArray(nodes)) {
			result = "";
			for (i = nodes.length - 1; ~i; i -= 1) result = stringifyNode(nodes[i], custom) + result;
			return result;
		}
		return stringifyNode(nodes, custom);
	}
	module.exports = stringify$1;
}));

//#endregion
//#region ../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/unit.js
var require_unit = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var minus = "-".charCodeAt(0);
	var plus = "+".charCodeAt(0);
	var dot = ".".charCodeAt(0);
	var exp = "e".charCodeAt(0);
	var EXP = "E".charCodeAt(0);
	function likeNumber(value) {
		var code = value.charCodeAt(0);
		var nextCode;
		if (code === plus || code === minus) {
			nextCode = value.charCodeAt(1);
			if (nextCode >= 48 && nextCode <= 57) return true;
			var nextNextCode = value.charCodeAt(2);
			if (nextCode === dot && nextNextCode >= 48 && nextNextCode <= 57) return true;
			return false;
		}
		if (code === dot) {
			nextCode = value.charCodeAt(1);
			if (nextCode >= 48 && nextCode <= 57) return true;
			return false;
		}
		if (code >= 48 && code <= 57) return true;
		return false;
	}
	module.exports = function(value) {
		var pos = 0;
		var length = value.length;
		var code;
		var nextCode;
		var nextNextCode;
		if (length === 0 || !likeNumber(value)) return false;
		code = value.charCodeAt(pos);
		if (code === plus || code === minus) pos++;
		while (pos < length) {
			code = value.charCodeAt(pos);
			if (code < 48 || code > 57) break;
			pos += 1;
		}
		code = value.charCodeAt(pos);
		nextCode = value.charCodeAt(pos + 1);
		if (code === dot && nextCode >= 48 && nextCode <= 57) {
			pos += 2;
			while (pos < length) {
				code = value.charCodeAt(pos);
				if (code < 48 || code > 57) break;
				pos += 1;
			}
		}
		code = value.charCodeAt(pos);
		nextCode = value.charCodeAt(pos + 1);
		nextNextCode = value.charCodeAt(pos + 2);
		if ((code === exp || code === EXP) && (nextCode >= 48 && nextCode <= 57 || (nextCode === plus || nextCode === minus) && nextNextCode >= 48 && nextNextCode <= 57)) {
			pos += nextCode === plus || nextCode === minus ? 3 : 2;
			while (pos < length) {
				code = value.charCodeAt(pos);
				if (code < 48 || code > 57) break;
				pos += 1;
			}
		}
		return {
			number: value.slice(0, pos),
			unit: value.slice(pos)
		};
	};
}));

//#endregion
//#region ../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/index.js
var require_lib = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var parse = require_parse();
	var walk = require_walk();
	var stringify = require_stringify();
	function ValueParser(value) {
		if (this instanceof ValueParser) {
			this.nodes = parse(value);
			return this;
		}
		return new ValueParser(value);
	}
	ValueParser.prototype.toString = function() {
		return Array.isArray(this.nodes) ? stringify(this.nodes) : "";
	};
	ValueParser.prototype.walk = function(cb, bubble) {
		walk(this.nodes, cb, bubble);
		return this;
	};
	ValueParser.unit = require_unit();
	ValueParser.walk = walk;
	ValueParser.stringify = stringify;
	module.exports = ValueParser;
}));

//#endregion
export { require_lib as t };