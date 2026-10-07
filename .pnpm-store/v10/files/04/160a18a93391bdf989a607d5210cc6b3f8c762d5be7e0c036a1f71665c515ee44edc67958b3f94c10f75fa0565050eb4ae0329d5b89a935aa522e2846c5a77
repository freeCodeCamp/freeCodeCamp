import { isString } from '../../../../base/common/types.js';
import { createError, fixCase, empty, substituteMatchesRe, stateExists, substituteMatches } from './monarchCommon.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/*
 * This module only exports 'compile' which compiles a JSON language definition
 * into a typed and checked ILexer definition.
 */
/*
 * Type helpers
 *
 * Note: this is just for sanity checks on the JSON description which is
 * helpful for the programmer. No checks are done anymore once the lexer is
 * already 'compiled and checked'.
 *
 */
function isArrayOf(elemType, obj) {
    if (!obj) {
        return false;
    }
    if (!(Array.isArray(obj))) {
        return false;
    }
    for (const el of obj) {
        if (!(elemType(el))) {
            return false;
        }
    }
    return true;
}
function bool(prop, defValue) {
    if (typeof prop === 'boolean') {
        return prop;
    }
    return defValue;
}
function string(prop, defValue) {
    if (typeof (prop) === 'string') {
        return prop;
    }
    return defValue;
}
function arrayToHash(array) {
    const result = {};
    for (const e of array) {
        result[e] = true;
    }
    return result;
}
function createKeywordMatcher(arr, caseInsensitive = false) {
    if (caseInsensitive) {
        arr = arr.map(function (x) { return x.toLowerCase(); });
    }
    const hash = arrayToHash(arr);
    if (caseInsensitive) {
        return function (word) {
            return hash[word.toLowerCase()] !== undefined && hash.hasOwnProperty(word.toLowerCase());
        };
    }
    else {
        return function (word) {
            return hash[word] !== undefined && hash.hasOwnProperty(word);
        };
    }
}
function compileRegExp(lexer, str, handleSn) {
    // @@ must be interpreted as a literal @, so we replace all occurences of @@ with a placeholder character
    str = str.replace(/@@/g, `\x01`);
    let n = 0;
    let hadExpansion;
    do {
        hadExpansion = false;
        str = str.replace(/@(\w+)/g, function (s, attr) {
            hadExpansion = true;
            let sub = '';
            if (typeof (lexer[attr]) === 'string') {
                sub = lexer[attr];
            }
            else if (lexer[attr] && lexer[attr] instanceof RegExp) {
                sub = lexer[attr].source;
            }
            else {
                if (lexer[attr] === undefined) {
                    throw createError(lexer, 'language definition does not contain attribute \'' + attr + '\', used at: ' + str);
                }
                else {
                    throw createError(lexer, 'attribute reference \'' + attr + '\' must be a string, used at: ' + str);
                }
            }
            return (empty(sub) ? '' : '(?:' + sub + ')');
        });
        n++;
    } while (hadExpansion && n < 5);
    // handle escaped @@
    str = str.replace(/\x01/g, '@');
    const flags = (lexer.ignoreCase ? 'i' : '') + (lexer.unicode ? 'u' : '');
    // handle $Sn
    if (handleSn) {
        const match = str.match(/\$[sS](\d\d?)/g);
        if (match) {
            let lastState = null;
            let lastRegEx = null;
            return (state) => {
                if (lastRegEx && lastState === state) {
                    return lastRegEx;
                }
                lastState = state;
                lastRegEx = new RegExp(substituteMatchesRe(lexer, str, state), flags);
                return lastRegEx;
            };
        }
    }
    return new RegExp(str, flags);
}
/**
 * Compiles guard functions for case matches.
 * This compiles 'cases' attributes into efficient match functions.
 *
 */
function selectScrutinee(id, matches, state, num) {
    if (num < 0) {
        return id;
    }
    if (num < matches.length) {
        return matches[num];
    }
    if (num >= 100) {
        num = num - 100;
        const parts = state.split('.');
        parts.unshift(state);
        if (num < parts.length) {
            return parts[num];
        }
    }
    return null;
}
function createGuard(lexer, ruleName, tkey, val) {
    // get the scrutinee and pattern
    let scrut = -1; // -1: $!, 0-99: $n, 100+n: $Sn
    let oppat = tkey;
    let matches = tkey.match(/^\$(([sS]?)(\d\d?)|#)(.*)$/);
    if (matches) {
        if (matches[3]) { // if digits
            scrut = parseInt(matches[3]);
            if (matches[2]) {
                scrut = scrut + 100; // if [sS] present
            }
        }
        oppat = matches[4];
    }
    // get operator
    let op = '~';
    let pat = oppat;
    if (!oppat || oppat.length === 0) {
        op = '!=';
        pat = '';
    }
    else if (/^\w*$/.test(pat)) { // just a word
        op = '==';
    }
    else {
        matches = oppat.match(/^(@|!@|~|!~|==|!=)(.*)$/);
        if (matches) {
            op = matches[1];
            pat = matches[2];
        }
    }
    // set the tester function
    let tester;
    // special case a regexp that matches just words
    if ((op === '~' || op === '!~') && /^(\w|\|)*$/.test(pat)) {
        const inWords = createKeywordMatcher(pat.split('|'), lexer.ignoreCase);
        tester = function (s) { return (op === '~' ? inWords(s) : !inWords(s)); };
    }
    else if (op === '@' || op === '!@') {
        const words = lexer[pat];
        if (!words) {
            throw createError(lexer, 'the @ match target \'' + pat + '\' is not defined, in rule: ' + ruleName);
        }
        if (!(isArrayOf(function (elem) { return (typeof (elem) === 'string'); }, words))) {
            throw createError(lexer, 'the @ match target \'' + pat + '\' must be an array of strings, in rule: ' + ruleName);
        }
        const inWords = createKeywordMatcher(words, lexer.ignoreCase);
        tester = function (s) { return (op === '@' ? inWords(s) : !inWords(s)); };
    }
    else if (op === '~' || op === '!~') {
        if (pat.indexOf('$') < 0) {
            // precompile regular expression
            const re = compileRegExp(lexer, '^' + pat + '$', false);
            tester = function (s) { return (op === '~' ? re.test(s) : !re.test(s)); };
        }
        else {
            tester = function (s, id, matches, state) {
                const re = compileRegExp(lexer, '^' + substituteMatches(lexer, pat, id, matches, state) + '$', false);
                return re.test(s);
            };
        }
    }
    else { // if (op==='==' || op==='!=') {
        if (pat.indexOf('$') < 0) {
            const patx = fixCase(lexer, pat);
            tester = function (s) { return (op === '==' ? s === patx : s !== patx); };
        }
        else {
            const patx = fixCase(lexer, pat);
            tester = function (s, id, matches, state, eos) {
                const patexp = substituteMatches(lexer, patx, id, matches, state);
                return (op === '==' ? s === patexp : s !== patexp);
            };
        }
    }
    // return the branch object
    if (scrut === -1) {
        return {
            name: tkey, value: val, test: function (id, matches, state, eos) {
                return tester(id, id, matches, state, eos);
            }
        };
    }
    else {
        return {
            name: tkey, value: val, test: function (id, matches, state, eos) {
                const scrutinee = selectScrutinee(id, matches, state, scrut);
                return tester(!scrutinee ? '' : scrutinee, id, matches, state, eos);
            }
        };
    }
}
/**
 * Compiles an action: i.e. optimize regular expressions and case matches
 * and do many sanity checks.
 *
 * This is called only during compilation but if the lexer definition
 * contains user functions as actions (which is usually not allowed), then this
 * may be called during lexing. It is important therefore to compile common cases efficiently
 */
function compileAction(lexer, ruleName, action) {
    if (!action) {
        return { token: '' };
    }
    else if (typeof (action) === 'string') {
        return action; // { token: action };
    }
    else if (action.token || action.token === '') {
        if (typeof (action.token) !== 'string') {
            throw createError(lexer, 'a \'token\' attribute must be of type string, in rule: ' + ruleName);
        }
        else {
            // only copy specific typed fields (only happens once during compile Lexer)
            const newAction = { token: action.token };
            if (action.token.indexOf('$') >= 0) {
                newAction.tokenSubst = true;
            }
            if (typeof (action.bracket) === 'string') {
                if (action.bracket === '@open') {
                    newAction.bracket = 1 /* monarchCommon.MonarchBracket.Open */;
                }
                else if (action.bracket === '@close') {
                    newAction.bracket = -1 /* monarchCommon.MonarchBracket.Close */;
                }
                else {
                    throw createError(lexer, 'a \'bracket\' attribute must be either \'@open\' or \'@close\', in rule: ' + ruleName);
                }
            }
            if (action.next) {
                if (typeof (action.next) !== 'string') {
                    throw createError(lexer, 'the next state must be a string value in rule: ' + ruleName);
                }
                else {
                    let next = action.next;
                    if (!/^(@pop|@push|@popall)$/.test(next)) {
                        if (next[0] === '@') {
                            next = next.substr(1); // peel off starting @ sign
                        }
                        if (next.indexOf('$') < 0) { // no dollar substitution, we can check if the state exists
                            if (!stateExists(lexer, substituteMatches(lexer, next, '', [], ''))) {
                                throw createError(lexer, 'the next state \'' + action.next + '\' is not defined in rule: ' + ruleName);
                            }
                        }
                    }
                    newAction.next = next;
                }
            }
            if (typeof (action.goBack) === 'number') {
                newAction.goBack = action.goBack;
            }
            if (typeof (action.switchTo) === 'string') {
                newAction.switchTo = action.switchTo;
            }
            if (typeof (action.log) === 'string') {
                newAction.log = action.log;
            }
            if (typeof (action.nextEmbedded) === 'string') {
                newAction.nextEmbedded = action.nextEmbedded;
                lexer.usesEmbedded = true;
            }
            return newAction;
        }
    }
    else if (Array.isArray(action)) {
        const results = [];
        for (let i = 0, len = action.length; i < len; i++) {
            results[i] = compileAction(lexer, ruleName, action[i]);
        }
        return { group: results };
    }
    else if (action.cases) {
        // build an array of test cases
        const cases = [];
        let hasEmbeddedEndInCases = false;
        // for each case, push a test function and result value
        for (const tkey in action.cases) {
            if (action.cases.hasOwnProperty(tkey)) {
                const val = compileAction(lexer, ruleName, action.cases[tkey]);
                // what kind of case
                if (tkey === '@default' || tkey === '@' || tkey === '') {
                    cases.push({ test: undefined, value: val, name: tkey });
                }
                else if (tkey === '@eos') {
                    cases.push({ test: function (id, matches, state, eos) { return eos; }, value: val, name: tkey });
                }
                else {
                    cases.push(createGuard(lexer, ruleName, tkey, val)); // call separate function to avoid local variable capture
                }
                if (!hasEmbeddedEndInCases) {
                    hasEmbeddedEndInCases = !isString(val) && (val.hasEmbeddedEndInCases || ['@pop', '@popall'].includes(val.nextEmbedded || ''));
                }
            }
        }
        // create a matching function
        const def = lexer.defaultToken;
        return {
            hasEmbeddedEndInCases,
            test: function (id, matches, state, eos) {
                for (const _case of cases) {
                    const didmatch = (!_case.test || _case.test(id, matches, state, eos));
                    if (didmatch) {
                        return _case.value;
                    }
                }
                return def;
            }
        };
    }
    else {
        throw createError(lexer, 'an action must be a string, an object with a \'token\' or \'cases\' attribute, or an array of actions; in rule: ' + ruleName);
    }
}
/**
 * Helper class for creating matching rules
 */
class Rule {
    constructor(name) {
        this.regex = new RegExp('');
        this.action = { token: '' };
        this.matchOnlyAtLineStart = false;
        this.name = '';
        this.name = name;
    }
    setRegex(lexer, re) {
        let sregex;
        if (typeof (re) === 'string') {
            sregex = re;
        }
        else if (re instanceof RegExp) {
            sregex = re.source;
        }
        else {
            throw createError(lexer, 'rules must start with a match string or regular expression: ' + this.name);
        }
        this.matchOnlyAtLineStart = (sregex.length > 0 && sregex[0] === '^');
        this.name = this.name + ': ' + sregex;
        this.regex = compileRegExp(lexer, '^(?:' + (this.matchOnlyAtLineStart ? sregex.substr(1) : sregex) + ')', true);
    }
    setAction(lexer, act) {
        this.action = compileAction(lexer, this.name, act);
    }
    resolveRegex(state) {
        if (this.regex instanceof RegExp) {
            return this.regex;
        }
        else {
            return this.regex(state);
        }
    }
}
/**
 * Compiles a json description function into json where all regular expressions,
 * case matches etc, are compiled and all include rules are expanded.
 * We also compile the bracket definitions, supply defaults, and do many sanity checks.
 * If the 'jsonStrict' parameter is 'false', we allow at certain locations
 * regular expression objects and functions that get called during lexing.
 * (Currently we have no samples that need this so perhaps we should always have
 * jsonStrict to true).
 */
function compile(languageId, json) {
    if (!json || typeof (json) !== 'object') {
        throw new Error('Monarch: expecting a language definition object');
    }
    // Create our lexer
    const lexer = {
        languageId: languageId,
        includeLF: bool(json.includeLF, false),
        noThrow: false, // raise exceptions during compilation
        maxStack: 100,
        start: (typeof json.start === 'string' ? json.start : null),
        ignoreCase: bool(json.ignoreCase, false),
        unicode: bool(json.unicode, false),
        tokenPostfix: string(json.tokenPostfix, '.' + languageId),
        defaultToken: string(json.defaultToken, 'source'),
        usesEmbedded: false, // becomes true if we find a nextEmbedded action
        stateNames: {},
        tokenizer: {},
        brackets: []
    };
    // For calling compileAction later on
    // eslint-disable-next-line local/code-no-any-casts
    const lexerMin = json;
    lexerMin.languageId = languageId;
    lexerMin.includeLF = lexer.includeLF;
    lexerMin.ignoreCase = lexer.ignoreCase;
    lexerMin.unicode = lexer.unicode;
    lexerMin.noThrow = lexer.noThrow;
    lexerMin.usesEmbedded = lexer.usesEmbedded;
    lexerMin.stateNames = json.tokenizer;
    lexerMin.defaultToken = lexer.defaultToken;
    // Compile an array of rules into newrules where RegExp objects are created.
    function addRules(state, newrules, rules) {
        for (const rule of rules) {
            let include = rule.include;
            if (include) {
                if (typeof (include) !== 'string') {
                    throw createError(lexer, 'an \'include\' attribute must be a string at: ' + state);
                }
                if (include[0] === '@') {
                    include = include.substr(1); // peel off starting @
                }
                if (!json.tokenizer[include]) {
                    throw createError(lexer, 'include target \'' + include + '\' is not defined at: ' + state);
                }
                addRules(state + '.' + include, newrules, json.tokenizer[include]);
            }
            else {
                const newrule = new Rule(state);
                // Set up new rule attributes
                if (Array.isArray(rule) && rule.length >= 1 && rule.length <= 3) {
                    newrule.setRegex(lexerMin, rule[0]);
                    if (rule.length >= 3) {
                        if (typeof (rule[1]) === 'string') {
                            newrule.setAction(lexerMin, { token: rule[1], next: rule[2] });
                        }
                        else if (typeof (rule[1]) === 'object') {
                            const rule1 = rule[1];
                            rule1.next = rule[2];
                            newrule.setAction(lexerMin, rule1);
                        }
                        else {
                            throw createError(lexer, 'a next state as the last element of a rule can only be given if the action is either an object or a string, at: ' + state);
                        }
                    }
                    else {
                        newrule.setAction(lexerMin, rule[1]);
                    }
                }
                else {
                    if (!rule.regex) {
                        throw createError(lexer, 'a rule must either be an array, or an object with a \'regex\' or \'include\' field at: ' + state);
                    }
                    if (rule.name) {
                        if (typeof rule.name === 'string') {
                            newrule.name = rule.name;
                        }
                    }
                    if (rule.matchOnlyAtStart) {
                        newrule.matchOnlyAtLineStart = bool(rule.matchOnlyAtLineStart, false);
                    }
                    newrule.setRegex(lexerMin, rule.regex);
                    newrule.setAction(lexerMin, rule.action);
                }
                newrules.push(newrule);
            }
        }
    }
    // compile the tokenizer rules
    if (!json.tokenizer || typeof (json.tokenizer) !== 'object') {
        throw createError(lexer, 'a language definition must define the \'tokenizer\' attribute as an object');
    }
    // eslint-disable-next-line local/code-no-any-casts
    lexer.tokenizer = [];
    for (const key in json.tokenizer) {
        if (json.tokenizer.hasOwnProperty(key)) {
            if (!lexer.start) {
                lexer.start = key;
            }
            const rules = json.tokenizer[key];
            lexer.tokenizer[key] = new Array();
            addRules('tokenizer.' + key, lexer.tokenizer[key], rules);
        }
    }
    lexer.usesEmbedded = lexerMin.usesEmbedded; // can be set during compileAction
    // Set simple brackets
    if (json.brackets) {
        // eslint-disable-next-line local/code-no-any-casts
        if (!(Array.isArray(json.brackets))) {
            throw createError(lexer, 'the \'brackets\' attribute must be defined as an array');
        }
    }
    else {
        json.brackets = [
            { open: '{', close: '}', token: 'delimiter.curly' },
            { open: '[', close: ']', token: 'delimiter.square' },
            { open: '(', close: ')', token: 'delimiter.parenthesis' },
            { open: '<', close: '>', token: 'delimiter.angle' }
        ];
    }
    const brackets = [];
    for (const el of json.brackets) {
        let desc = el;
        if (desc && Array.isArray(desc) && desc.length === 3) {
            desc = { token: desc[2], open: desc[0], close: desc[1] };
        }
        if (desc.open === desc.close) {
            throw createError(lexer, 'open and close brackets in a \'brackets\' attribute must be different: ' + desc.open +
                '\n hint: use the \'bracket\' attribute if matching on equal brackets is required.');
        }
        if (typeof desc.open === 'string' && typeof desc.token === 'string' && typeof desc.close === 'string') {
            brackets.push({
                token: desc.token + lexer.tokenPostfix,
                open: fixCase(lexer, desc.open),
                close: fixCase(lexer, desc.close)
            });
        }
        else {
            throw createError(lexer, 'every element in the \'brackets\' array must be a \'{open,close,token}\' object or array');
        }
    }
    lexer.brackets = brackets;
    // Disable throw so the syntax highlighter goes, no matter what
    lexer.noThrow = true;
    return lexer;
}

export { compile };
