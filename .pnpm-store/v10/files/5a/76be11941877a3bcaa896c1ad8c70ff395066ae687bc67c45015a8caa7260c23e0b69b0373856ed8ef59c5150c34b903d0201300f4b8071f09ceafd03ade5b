/*
  Copyright (C) 2012-2014 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2013 Alex Seville <hi@alexanderseville.com>
  Copyright (C) 2014 Thiago de Arruda <tpadilha84@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/**
 * Escope (<a href="http://github.com/estools/escope">escope</a>) is an <a
 * href="http://www.ecma-international.org/publications/standards/Ecma-262.htm">ECMAScript</a>
 * scope analyzer extracted from the <a
 * href="http://github.com/estools/esmangle">esmangle project</a/>.
 * <p>
 * <em>escope</em> finds lexical scopes in a source program, i.e. areas of that
 * program where different occurrences of the same identifier refer to the same
 * variable. With each scope the contained variables are collected, and each
 * identifier reference in code is linked to its corresponding variable (if
 * possible).
 * <p>
 * <em>escope</em> works on a syntax tree of the parsed source code which has
 * to adhere to the <a
 * href="https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API">
 * Mozilla Parser API</a>. E.g. <a href="https://github.com/eslint/espree">espree</a> is a parser
 * that produces such syntax trees.
 * <p>
 * The main interface is the {@link analyze} function.
 * @module escope
 */

import { assert } from "./assert.js";

import ScopeManager from "./scope-manager.js";
import Referencer from "./referencer.js";
import Reference from "./reference.js";
import Variable from "./variable.js";

import eslintScopeVersion from "./version.js";

/**
 * Set the default options
 * @returns {Object} options
 */
function defaultOptions() {
    return {
        optimistic: false,
        nodejsScope: false,
        impliedStrict: false,
        sourceType: "script", // one of ['script', 'module', 'commonjs']
        ecmaVersion: 5,
        childVisitorKeys: null,
        fallback: "iteration"
    };
}

/**
 * Preform deep update on option object
 * @param {Object} target Options
 * @param {Object} override Updates
 * @returns {Object} Updated options
 */
function updateDeeply(target, override) {

    /**
     * Is hash object
     * @param {Object} value Test value
     * @returns {boolean} Result
     */
    function isHashObject(value) {
        return typeof value === "object" && value instanceof Object && !(value instanceof Array) && !(value instanceof RegExp);
    }

    for (const key in override) {
        if (Object.hasOwn(override, key)) {
            const val = override[key];

            if (isHashObject(val)) {
                if (isHashObject(target[key])) {
                    updateDeeply(target[key], val);
                } else {
                    target[key] = updateDeeply({}, val);
                }
            } else {
                target[key] = val;
            }
        }
    }
    return target;
}

/**
 * Main interface function. Takes an Espree syntax tree and returns the
 * analyzed scopes.
 * @function analyze
 * @param {espree.Tree} tree Abstract Syntax Tree
 * @param {Object} providedOptions Options that tailor the scope analysis
 * @param {boolean} [providedOptions.optimistic=false] the optimistic flag
 * @param {boolean} [providedOptions.ignoreEval=false] whether to check 'eval()' calls
 * @param {boolean} [providedOptions.nodejsScope=false] whether the whole
 * script is executed under node.js environment. When enabled, escope adds
 * a function scope immediately following the global scope.
 * @param {boolean} [providedOptions.impliedStrict=false] implied strict mode
 * (if ecmaVersion >= 5).
 * @param {string} [providedOptions.sourceType='script'] the source type of the script. one of 'script', 'module', and 'commonjs'
 * @param {number} [providedOptions.ecmaVersion=5] which ECMAScript version is considered
 * @param {boolean} [providedOptions.jsx=false] support JSX references
 * @param {Object} [providedOptions.childVisitorKeys=null] Additional known visitor keys. See [esrecurse](https://github.com/estools/esrecurse)'s the `childVisitorKeys` option.
 * @param {string} [providedOptions.fallback='iteration'] A kind of the fallback in order to encounter with unknown node. See [esrecurse](https://github.com/estools/esrecurse)'s the `fallback` option.
 * @returns {ScopeManager} ScopeManager
 */
function analyze(tree, providedOptions) {
    const options = updateDeeply(defaultOptions(), providedOptions);
    const scopeManager = new ScopeManager(options);
    const referencer = new Referencer(options, scopeManager);

    referencer.visit(tree);

    assert(scopeManager.__currentScope === null, "currentScope should be null.");

    return scopeManager;
}

export {

    /** @name module:escope.version */
    eslintScopeVersion as version,

    /** @name module:escope.Reference */
    Reference,

    /** @name module:escope.Variable */
    Variable,

    /** @name module:escope.ScopeManager */
    ScopeManager,

    /** @name module:escope.Referencer */
    Referencer,

    analyze
};

/** @name module:escope.Definition */
export { Definition } from "./definition.js";

/** @name module:escope.PatternVisitor */
export { default as PatternVisitor } from "./pattern-visitor.js";

/** @name module:escope.Scope */
export { Scope } from "./scope.js";

/* vim: set sw=4 ts=4 et tw=80 : */
