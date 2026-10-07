/**
 * @fileoverview Main Espree file that converts Acorn into Esprima output.
 *
 * This file contains code from the following MIT-licensed projects:
 * 1. Acorn
 * 2. Babylon
 * 3. Babel-ESLint
 *
 * This file also contains code from Esprima, which is BSD licensed.
 *
 * Acorn is Copyright 2012-2015 Acorn Contributors (https://github.com/marijnh/acorn/blob/master/AUTHORS)
 * Babylon is Copyright 2014-2015 various contributors (https://github.com/babel/babel/blob/master/packages/babylon/AUTHORS)
 * Babel-ESLint is Copyright 2014-2015 Sebastian McKenzie <sebmck@gmail.com>
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright
 *   notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 *   notice, this list of conditions and the following disclaimer in the
 *   documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Esprima is Copyright (c) jQuery Foundation, Inc. and Contributors, All Rights Reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *   * Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *   * Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
/* eslint no-undefined:0, no-use-before-define: 0 */

"use strict";

const acorn = require("acorn");
const jsx = require("acorn-jsx");
const astNodeTypes = require("./lib/ast-node-types");
const espree = require("./lib/espree");
const { getLatestEcmaVersion, getSupportedEcmaVersions } = require("./lib/options");

// To initialize lazily.
const parsers = {
    _regular: null,
    _jsx: null,

    get regular() {
        if (this._regular === null) {
            this._regular = acorn.Parser.extend(espree());
        }
        return this._regular;
    },

    get jsx() {
        if (this._jsx === null) {
            this._jsx = acorn.Parser.extend(jsx(), espree());
        }
        return this._jsx;
    },

    get(options) {
        const useJsx = Boolean(
            options &&
            options.ecmaFeatures &&
            options.ecmaFeatures.jsx
        );

        return useJsx ? this.jsx : this.regular;
    }
};

//------------------------------------------------------------------------------
// Tokenizer
//------------------------------------------------------------------------------

/**
 * Tokenizes the given code.
 * @param {string} code The code to tokenize.
 * @param {Object} options Options defining how to tokenize.
 * @returns {Token[]} An array of tokens.
 * @throws {SyntaxError} If the input code is invalid.
 * @private
 */
function tokenize(code, options) {
    const Parser = parsers.get(options);

    // Ensure to collect tokens.
    if (!options || options.tokens !== true) {
        options = Object.assign({}, options, { tokens: true }); // eslint-disable-line no-param-reassign
    }

    return new Parser(options, code).tokenize();
}

//------------------------------------------------------------------------------
// Parser
//------------------------------------------------------------------------------

/**
 * Parses the given code.
 * @param {string} code The code to tokenize.
 * @param {Object} options Options defining how to tokenize.
 * @returns {ASTNode} The "Program" AST node.
 * @throws {SyntaxError} If the input code is invalid.
 */
function parse(code, options) {
    const Parser = parsers.get(options);

    return new Parser(options, code).parse();
}

//------------------------------------------------------------------------------
// Public
//------------------------------------------------------------------------------

exports.version = require("./package.json").version;

exports.tokenize = tokenize;

exports.parse = parse;

// Deep copy.
/* istanbul ignore next */
exports.Syntax = (function() {
    let name,
        types = {};

    if (typeof Object.create === "function") {
        types = Object.create(null);
    }

    for (name in astNodeTypes) {
        if (Object.hasOwnProperty.call(astNodeTypes, name)) {
            types[name] = astNodeTypes[name];
        }
    }

    if (typeof Object.freeze === "function") {
        Object.freeze(types);
    }

    return types;
}());

/* istanbul ignore next */
exports.VisitorKeys = (function() {
    return require("eslint-visitor-keys").KEYS;
}());

exports.latestEcmaVersion = getLatestEcmaVersion();

exports.supportedEcmaVersions = getSupportedEcmaVersions();
