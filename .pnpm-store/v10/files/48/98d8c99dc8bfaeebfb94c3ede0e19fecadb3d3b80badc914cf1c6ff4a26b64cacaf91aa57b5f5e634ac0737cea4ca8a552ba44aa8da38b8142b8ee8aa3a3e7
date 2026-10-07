/**
 * @fileoverview Common utils for AST.
 *
 * This file contains only shared items for core and rules.
 * If you make a utility for rules, please see `../rules/utils/ast-utils.js`.
 *
 * @author Toru Nagashima <https://github.com/mysticatea>
 */
"use strict";

const breakableTypePattern = /^(?:(?:Do)?While|For(?:In|Of)?|Switch)Statement$/u;
const lineBreakPattern = /\r\n|[\r\n\u2028\u2029]/u;
const shebangPattern = /^#!([^\r\n]+)/u;

/**
 * Creates a version of the `lineBreakPattern` regex with the global flag.
 * Global regexes are mutable, so this needs to be a function instead of a constant.
 * @returns {RegExp} A global regular expression that matches line terminators
 */
function createGlobalLinebreakMatcher() {
    return new RegExp(lineBreakPattern.source, "gu");
}

module.exports = {
    breakableTypePattern,
    lineBreakPattern,
    createGlobalLinebreakMatcher,
    shebangPattern
};
