"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
function parseCssSelector(str, pos, pseudos, attrEqualityMods, ruleNestingOperators, substitutesEnabled) {
    var l = str.length;
    var chr = '';
    function getStr(quote, escapeTable) {
        var result = '';
        pos++;
        chr = str.charAt(pos);
        while (pos < l) {
            if (chr === quote) {
                pos++;
                return result;
            }
            else if (chr === '\\') {
                pos++;
                chr = str.charAt(pos);
                var esc = void 0;
                if (chr === quote) {
                    result += quote;
                }
                else if ((esc = escapeTable[chr]) !== undefined) {
                    result += esc;
                }
                else if (utils_1.isHex(chr)) {
                    var hex = chr;
                    pos++;
                    chr = str.charAt(pos);
                    while (utils_1.isHex(chr)) {
                        hex += chr;
                        pos++;
                        chr = str.charAt(pos);
                    }
                    if (chr === ' ') {
                        pos++;
                        chr = str.charAt(pos);
                    }
                    result += String.fromCharCode(parseInt(hex, 16));
                    continue;
                }
                else {
                    result += chr;
                }
            }
            else {
                result += chr;
            }
            pos++;
            chr = str.charAt(pos);
        }
        return result;
    }
    function getIdent() {
        var result = '';
        chr = str.charAt(pos);
        while (pos < l) {
            if (utils_1.isIdent(chr)) {
                result += chr;
            }
            else if (chr === '\\') {
                pos++;
                if (pos >= l) {
                    throw Error('Expected symbol but end of file reached.');
                }
                chr = str.charAt(pos);
                if (utils_1.identSpecialChars[chr]) {
                    result += chr;
                }
                else if (utils_1.isHex(chr)) {
                    var hex = chr;
                    pos++;
                    chr = str.charAt(pos);
                    while (utils_1.isHex(chr)) {
                        hex += chr;
                        pos++;
                        chr = str.charAt(pos);
                    }
                    if (chr === ' ') {
                        pos++;
                        chr = str.charAt(pos);
                    }
                    result += String.fromCharCode(parseInt(hex, 16));
                    continue;
                }
                else {
                    result += chr;
                }
            }
            else {
                return result;
            }
            pos++;
            chr = str.charAt(pos);
        }
        return result;
    }
    function skipWhitespace() {
        chr = str.charAt(pos);
        var result = false;
        while (chr === ' ' || chr === "\t" || chr === "\n" || chr === "\r" || chr === "\f") {
            result = true;
            pos++;
            chr = str.charAt(pos);
        }
        return result;
    }
    function parse() {
        var res = parseSelector();
        if (pos < l) {
            throw Error('Rule expected but "' + str.charAt(pos) + '" found.');
        }
        return res;
    }
    function parseSelector() {
        var selector = parseSingleSelector();
        if (!selector) {
            return null;
        }
        var res = selector;
        chr = str.charAt(pos);
        while (chr === ',') {
            pos++;
            skipWhitespace();
            if (res.type !== 'selectors') {
                res = {
                    type: 'selectors',
                    selectors: [selector]
                };
            }
            selector = parseSingleSelector();
            if (!selector) {
                throw Error('Rule expected after ",".');
            }
            res.selectors.push(selector);
        }
        return res;
    }
    function parseSingleSelector() {
        skipWhitespace();
        var selector = {
            type: 'ruleSet'
        };
        var rule = parseRule();
        if (!rule) {
            return null;
        }
        var currentRule = selector;
        while (rule) {
            rule.type = 'rule';
            currentRule.rule = rule;
            currentRule = rule;
            skipWhitespace();
            chr = str.charAt(pos);
            if (pos >= l || chr === ',' || chr === ')') {
                break;
            }
            if (ruleNestingOperators[chr]) {
                var op = chr;
                pos++;
                skipWhitespace();
                rule = parseRule();
                if (!rule) {
                    throw Error('Rule expected after "' + op + '".');
                }
                rule.nestingOperator = op;
            }
            else {
                rule = parseRule();
                if (rule) {
                    rule.nestingOperator = null;
                }
            }
        }
        return selector;
    }
    // @ts-ignore no-overlap
    function parseRule() {
        var rule = null;
        while (pos < l) {
            chr = str.charAt(pos);
            if (chr === '*') {
                pos++;
                (rule = rule || {}).tagName = '*';
            }
            else if (utils_1.isIdentStart(chr) || chr === '\\') {
                (rule = rule || {}).tagName = getIdent();
            }
            else if (chr === '.') {
                pos++;
                rule = rule || {};
                (rule.classNames = rule.classNames || []).push(getIdent());
            }
            else if (chr === '#') {
                pos++;
                (rule = rule || {}).id = getIdent();
            }
            else if (chr === '[') {
                pos++;
                skipWhitespace();
                var attr = {
                    name: getIdent()
                };
                skipWhitespace();
                // @ts-ignore
                if (chr === ']') {
                    pos++;
                }
                else {
                    var operator = '';
                    if (attrEqualityMods[chr]) {
                        operator = chr;
                        pos++;
                        chr = str.charAt(pos);
                    }
                    if (pos >= l) {
                        throw Error('Expected "=" but end of file reached.');
                    }
                    if (chr !== '=') {
                        throw Error('Expected "=" but "' + chr + '" found.');
                    }
                    attr.operator = operator + '=';
                    pos++;
                    skipWhitespace();
                    var attrValue = '';
                    attr.valueType = 'string';
                    // @ts-ignore
                    if (chr === '"') {
                        attrValue = getStr('"', utils_1.doubleQuotesEscapeChars);
                        // @ts-ignore
                    }
                    else if (chr === '\'') {
                        attrValue = getStr('\'', utils_1.singleQuoteEscapeChars);
                        // @ts-ignore
                    }
                    else if (substitutesEnabled && chr === '$') {
                        pos++;
                        attrValue = getIdent();
                        attr.valueType = 'substitute';
                    }
                    else {
                        while (pos < l) {
                            if (chr === ']') {
                                break;
                            }
                            attrValue += chr;
                            pos++;
                            chr = str.charAt(pos);
                        }
                        attrValue = attrValue.trim();
                    }
                    skipWhitespace();
                    if (pos >= l) {
                        throw Error('Expected "]" but end of file reached.');
                    }
                    if (chr !== ']') {
                        throw Error('Expected "]" but "' + chr + '" found.');
                    }
                    pos++;
                    attr.value = attrValue;
                }
                rule = rule || {};
                (rule.attrs = rule.attrs || []).push(attr);
            }
            else if (chr === ':') {
                pos++;
                var pseudoName = getIdent();
                var pseudo = {
                    name: pseudoName
                };
                // @ts-ignore
                if (chr === '(') {
                    pos++;
                    var value = '';
                    skipWhitespace();
                    if (pseudos[pseudoName] === 'selector') {
                        pseudo.valueType = 'selector';
                        value = parseSelector();
                    }
                    else {
                        pseudo.valueType = pseudos[pseudoName] || 'string';
                        // @ts-ignore
                        if (chr === '"') {
                            value = getStr('"', utils_1.doubleQuotesEscapeChars);
                            // @ts-ignore
                        }
                        else if (chr === '\'') {
                            value = getStr('\'', utils_1.singleQuoteEscapeChars);
                            // @ts-ignore
                        }
                        else if (substitutesEnabled && chr === '$') {
                            pos++;
                            value = getIdent();
                            pseudo.valueType = 'substitute';
                        }
                        else {
                            while (pos < l) {
                                if (chr === ')') {
                                    break;
                                }
                                value += chr;
                                pos++;
                                chr = str.charAt(pos);
                            }
                            value = value.trim();
                        }
                        skipWhitespace();
                    }
                    if (pos >= l) {
                        throw Error('Expected ")" but end of file reached.');
                    }
                    if (chr !== ')') {
                        throw Error('Expected ")" but "' + chr + '" found.');
                    }
                    pos++;
                    pseudo.value = value;
                }
                rule = rule || {};
                (rule.pseudos = rule.pseudos || []).push(pseudo);
            }
            else {
                break;
            }
        }
        return rule;
    }
    return parse();
}
exports.parseCssSelector = parseCssSelector;
