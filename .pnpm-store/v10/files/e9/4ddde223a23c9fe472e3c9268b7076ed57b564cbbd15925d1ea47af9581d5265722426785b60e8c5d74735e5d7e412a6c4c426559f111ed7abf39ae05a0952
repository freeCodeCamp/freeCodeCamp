import { escapeRegExpCharacters } from '../../../../base/common/strings.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function isFuzzyActionArr(what) {
    return (Array.isArray(what));
}
function isFuzzyAction(what) {
    return !isFuzzyActionArr(what);
}
function isString(what) {
    return (typeof what === 'string');
}
function isIAction(what) {
    return !isString(what);
}
// Small helper functions
/**
 * Is a string null, undefined, or empty?
 */
function empty(s) {
    return (s ? false : true);
}
/**
 * Puts a string to lower case if 'ignoreCase' is set.
 */
function fixCase(lexer, str) {
    return (lexer.ignoreCase && str ? str.toLowerCase() : str);
}
/**
 * Ensures there are no bad characters in a CSS token class.
 */
function sanitize(s) {
    return s.replace(/[&<>'"_]/g, '-'); // used on all output token CSS classes
}
// Logging
/**
 * Logs a message.
 */
function log(lexer, msg) {
    console.log(`${lexer.languageId}: ${msg}`);
}
// Throwing errors
function createError(lexer, msg) {
    return new Error(`${lexer.languageId}: ${msg}`);
}
// Helper functions for rule finding and substitution
/**
 * substituteMatches is used on lexer strings and can substitutes predefined patterns:
 * 		$$  => $
 * 		$#  => id
 * 		$n  => matched entry n
 * 		@attr => contents of lexer[attr]
 *
 * See documentation for more info
 */
function substituteMatches(lexer, str, id, matches, state) {
    const re = /\$((\$)|(#)|(\d\d?)|[sS](\d\d?)|@(\w+))/g;
    let stateMatches = null;
    return str.replace(re, function (full, sub, dollar, hash, n, s, attr, ofs, total) {
        if (!empty(dollar)) {
            return '$'; // $$
        }
        if (!empty(hash)) {
            return fixCase(lexer, id); // default $#
        }
        if (!empty(n) && n < matches.length) {
            return fixCase(lexer, matches[n]); // $n
        }
        if (!empty(attr) && lexer && typeof (lexer[attr]) === 'string') {
            return lexer[attr]; //@attribute
        }
        if (stateMatches === null) { // split state on demand
            stateMatches = state.split('.');
            stateMatches.unshift(state);
        }
        if (!empty(s) && s < stateMatches.length) {
            return fixCase(lexer, stateMatches[s]); //$Sn
        }
        return '';
    });
}
/**
 * substituteMatchesRe is used on lexer regex rules and can substitutes predefined patterns:
 * 		$Sn => n'th part of state
 *
 */
function substituteMatchesRe(lexer, str, state) {
    const re = /\$[sS](\d\d?)/g;
    let stateMatches = null;
    return str.replace(re, function (full, s) {
        if (stateMatches === null) { // split state on demand
            stateMatches = state.split('.');
            stateMatches.unshift(state);
        }
        if (!empty(s) && s < stateMatches.length) {
            return escapeRegExpCharacters(fixCase(lexer, stateMatches[s])); //$Sn
        }
        return '';
    });
}
/**
 * Find the tokenizer rules for a specific state (i.e. next action)
 */
function findRules(lexer, inState) {
    let state = inState;
    while (state && state.length > 0) {
        const rules = lexer.tokenizer[state];
        if (rules) {
            return rules;
        }
        const idx = state.lastIndexOf('.');
        if (idx < 0) {
            state = null; // no further parent
        }
        else {
            state = state.substr(0, idx);
        }
    }
    return null;
}
/**
 * Is a certain state defined? In contrast to 'findRules' this works on a ILexerMin.
 * This is used during compilation where we may know the defined states
 * but not yet whether the corresponding rules are correct.
 */
function stateExists(lexer, inState) {
    let state = inState;
    while (state && state.length > 0) {
        const exist = lexer.stateNames[state];
        if (exist) {
            return true;
        }
        const idx = state.lastIndexOf('.');
        if (idx < 0) {
            state = null; // no further parent
        }
        else {
            state = state.substr(0, idx);
        }
    }
    return false;
}

export { createError, empty, findRules, fixCase, isFuzzyAction, isFuzzyActionArr, isIAction, isString, log, sanitize, stateExists, substituteMatches, substituteMatchesRe };
