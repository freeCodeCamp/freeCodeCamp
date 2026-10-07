"use strict";
/**
 * Character classes for XML.
 *
 * @deprecated since 1.3.0. Import from the ``xml`` and ``xmlns`` hierarchies
 * instead.
 *
 * @author Louis-Dominique Dubeau
 * @license MIT
 * @copyright Louis-Dominique Dubeau
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ed4 = require("./xml/1.0/ed4");
var ed5 = require("./xml/1.0/ed5");
var nsed3 = require("./xmlns/1.0/ed3");
// tslint:disable-next-line:no-console
console.warn("DEPRECATION WARNING: the xmlchar *module* is deprecated: please \
replace e.g. require('xmlchars') with require('xmlchars/xml/...')");
/**
 * Character class utilities for XML 1.0.
 */
// tslint:disable-next-line:no-namespace
var XML_1_0;
(function (XML_1_0) {
    /**
     * Fifth edition.
     */
    var ED5;
    (function (ED5) {
        /**
         * Regular expression fragments. These fragments are designed to be included
         * inside square brackets in a regular expression.
         */
        var fragments;
        (function (fragments) {
            fragments.CHAR = ed5.CHAR;
            fragments.S = ed5.S;
            fragments.NAME_START_CHAR = ed5.NAME_START_CHAR;
            fragments.NAME_CHAR = ed5.NAME_CHAR;
        })(fragments = ED5.fragments || (ED5.fragments = {}));
        /**
         * Regular expression. These correspond to the productions of the same name
         * in the specification.
         */
        var regexes;
        (function (regexes) {
            regexes.CHAR = ed5.CHAR_RE;
            regexes.S = ed5.S_RE;
            regexes.NAME_START_CHAR = ed5.NAME_START_CHAR_RE;
            regexes.NAME_CHAR = ed5.NAME_CHAR_RE;
            regexes.NAME = ed5.NAME_RE;
            regexes.NMTOKEN = ed5.NMTOKEN_RE;
        })(regexes = ED5.regexes || (ED5.regexes = {}));
        /**
         * Lists of characters.
         *
         * The names defined in this namespace are arrays of codepoints which
         * contain the set of codepoints that an XML production encompasses. Note
         * that many productions are too large to be reasonably represented as sets.
         */
        var lists;
        (function (lists) {
            lists.S = ed5.S_LIST;
        })(lists = ED5.lists || (ED5.lists = {}));
        /**
         * Determines whether a codepoint matches the ``CHAR`` production.
         *
         * @param c The code point.
         *
         * @returns ``true`` if the codepoint matches ``CHAR``.
         */
        ED5.isChar = ed5.isChar;
        /**
         * Determines whether a codepoint matches the ``S`` (space) production.
         *
         * @param c The code point.
         *
         * @returns ``true`` if the codepoint matches ``S``.
         */
        ED5.isS = ed5.isS;
        /**
         * Determines whether a codepoint matches the ``NAME_START_CHAR``
         * production.
         *
         * @param c The code point.
         *
         * @returns ``true`` if the codepoint matches ``NAME_START_CHAR``.
         */
        ED5.isNameStartChar = ed5.isNameStartChar;
        /**
         * Determines whether a codepoint matches the ``NAME_CHAR`` production.
         *
         * @param c The code point.
         *
         * @returns ``true`` if the codepoint matches ``NAME_CHAR``.
         */
        ED5.isNameChar = ed5.isNameChar;
    })(ED5 = XML_1_0.ED5 || (XML_1_0.ED5 = {}));
    /**
     * Fourth edition. These are deprecated in the 5th edition but some of the
     * standards related to XML 1.0 (e.g. XML Schema 1.0) refer to these. So they
     * are still generally useful.
     */
    var ED4;
    (function (ED4) {
        /**
         * Regular expression fragments. These fragments are designed to be included
         * inside square brackets in a regular expression.
         */
        var fragments;
        (function (fragments) {
            fragments.CHAR = ed4.CHAR;
            fragments.S = ed4.S;
            fragments.BASE_CHAR = ed4.BASE_CHAR;
            fragments.IDEOGRAPHIC = ed4.IDEOGRAPHIC;
            fragments.COMBINING_CHAR = ed4.COMBINING_CHAR;
            fragments.DIGIT = ed4.DIGIT;
            fragments.EXTENDER = ed4.EXTENDER;
            fragments.LETTER = ed4.LETTER;
            fragments.NAME_CHAR = ed4.NAME_CHAR;
        })(fragments = ED4.fragments || (ED4.fragments = {}));
        /**
         * Regular expression. These correspond to the productions of the same
         * name in the specification.
         */
        var regexes;
        (function (regexes) {
            regexes.CHAR = ed4.CHAR_RE;
            regexes.S = ed4.S_RE;
            regexes.BASE_CHAR = ed4.BASE_CHAR_RE;
            regexes.IDEOGRAPHIC = ed4.IDEOGRAPHIC_RE;
            regexes.COMBINING_CHAR = ed4.COMBINING_CHAR_RE;
            regexes.DIGIT = ed4.DIGIT_RE;
            regexes.EXTENDER = ed4.EXTENDER_RE;
            regexes.LETTER = ed4.LETTER_RE;
            regexes.NAME_CHAR = ed4.NAME_CHAR_RE;
            regexes.NAME = ed4.NAME_RE;
            regexes.NMTOKEN = ed4.NMTOKEN_RE;
        })(regexes = ED4.regexes || (ED4.regexes = {}));
    })(ED4 = XML_1_0.ED4 || (XML_1_0.ED4 = {}));
})(XML_1_0 = exports.XML_1_0 || (exports.XML_1_0 = {}));
/**
 * Character class utilities for XML NS 1.0.
 */
// tslint:disable-next-line:no-namespace
var XMLNS_1_0;
(function (XMLNS_1_0) {
    /**
     * Third edition.
     */
    var ED3;
    (function (ED3) {
        /**
         * Regular expression fragments. These fragments are designed to be included
         * inside square brackets in a regular expression.
         */
        var fragments;
        (function (fragments) {
            fragments.NC_NAME_START_CHAR = nsed3.NC_NAME_START_CHAR;
            fragments.NC_NAME_CHAR = nsed3.NC_NAME_CHAR;
        })(fragments = ED3.fragments || (ED3.fragments = {}));
        /**
         * Regular expression. These correspond to the productions of the same name
         * in the specification.
         */
        var regexes;
        (function (regexes) {
            regexes.NC_NAME_START_CHAR = nsed3.NC_NAME_START_CHAR_RE;
            regexes.NC_NAME_CHAR = nsed3.NC_NAME_CHAR_RE;
            regexes.NC_NAME = nsed3.NC_NAME_RE;
        })(regexes = ED3.regexes || (ED3.regexes = {}));
        /**
         * Determines whether a codepoint matches
         * [[regexes.NC_NAME_START_CHAR]].
         *
         * @param c The code point.
         *
         * @returns ``true`` if the codepoint matches.
         */
        ED3.isNCNameStartChar = nsed3.isNCNameStartChar;
        /**
         * Determines whether a codepoint matches [[regexes.NC_NAME_CHAR]].
         *
         * @param c The code point.
         *
         * @returns ``true`` if the codepoint matches.
         */
        ED3.isNCNameChar = nsed3.isNCNameChar;
    })(ED3 = XMLNS_1_0.ED3 || (XMLNS_1_0.ED3 = {}));
})(XMLNS_1_0 = exports.XMLNS_1_0 || (exports.XMLNS_1_0 = {}));
//# sourceMappingURL=xmlchars.js.map