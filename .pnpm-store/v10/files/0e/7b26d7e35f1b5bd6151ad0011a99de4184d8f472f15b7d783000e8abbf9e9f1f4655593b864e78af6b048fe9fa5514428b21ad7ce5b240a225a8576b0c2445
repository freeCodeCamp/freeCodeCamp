/*
  Copyright (C) 2015 Yusuke Suzuki <utatane.tea@gmail.com>

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
"use strict";

/* eslint-disable no-underscore-dangle */

const Scope = require("./scope");
const assert = require("assert");

const GlobalScope = Scope.GlobalScope;
const CatchScope = Scope.CatchScope;
const WithScope = Scope.WithScope;
const ModuleScope = Scope.ModuleScope;
const ClassScope = Scope.ClassScope;
const SwitchScope = Scope.SwitchScope;
const FunctionScope = Scope.FunctionScope;
const ForScope = Scope.ForScope;
const FunctionExpressionNameScope = Scope.FunctionExpressionNameScope;
const BlockScope = Scope.BlockScope;

/**
 * @class ScopeManager
 */
class ScopeManager {
    constructor(options) {
        this.scopes = [];
        this.globalScope = null;
        this.__nodeToScope = new WeakMap();
        this.__currentScope = null;
        this.__options = options;
        this.__declaredVariables = new WeakMap();
    }

    __useDirective() {
        return this.__options.directive;
    }

    __isOptimistic() {
        return this.__options.optimistic;
    }

    __ignoreEval() {
        return this.__options.ignoreEval;
    }

    __isNodejsScope() {
        return this.__options.nodejsScope;
    }

    isModule() {
        return this.__options.sourceType === "module";
    }

    isImpliedStrict() {
        return this.__options.impliedStrict;
    }

    isStrictModeSupported() {
        return this.__options.ecmaVersion >= 5;
    }

    // Returns appropriate scope for this node.
    __get(node) {
        return this.__nodeToScope.get(node);
    }

    /**
     * Get variables that are declared by the node.
     *
     * "are declared by the node" means the node is same as `Variable.defs[].node` or `Variable.defs[].parent`.
     * If the node declares nothing, this method returns an empty array.
     * CAUTION: This API is experimental. See https://github.com/estools/escope/pull/69 for more details.
     *
     * @param {Espree.Node} node - a node to get.
     * @returns {Variable[]} variables that declared by the node.
     */
    getDeclaredVariables(node) {
        return this.__declaredVariables.get(node) || [];
    }

    /**
     * acquire scope from node.
     * @method ScopeManager#acquire
     * @param {Espree.Node} node - node for the acquired scope.
     * @param {boolean=} inner - look up the most inner scope, default value is false.
     * @returns {Scope?} Scope from node
     */
    acquire(node, inner) {

        /**
         * predicate
         * @param {Scope} testScope - scope to test
         * @returns {boolean} predicate
         */
        function predicate(testScope) {
            if (testScope.type === "function" && testScope.functionExpressionScope) {
                return false;
            }
            return true;
        }

        const scopes = this.__get(node);

        if (!scopes || scopes.length === 0) {
            return null;
        }

        // Heuristic selection from all scopes.
        // If you would like to get all scopes, please use ScopeManager#acquireAll.
        if (scopes.length === 1) {
            return scopes[0];
        }

        if (inner) {
            for (let i = scopes.length - 1; i >= 0; --i) {
                const scope = scopes[i];

                if (predicate(scope)) {
                    return scope;
                }
            }
        } else {
            for (let i = 0, iz = scopes.length; i < iz; ++i) {
                const scope = scopes[i];

                if (predicate(scope)) {
                    return scope;
                }
            }
        }

        return null;
    }

    /**
     * acquire all scopes from node.
     * @method ScopeManager#acquireAll
     * @param {Espree.Node} node - node for the acquired scope.
     * @returns {Scopes?} Scope array
     */
    acquireAll(node) {
        return this.__get(node);
    }

    /**
     * release the node.
     * @method ScopeManager#release
     * @param {Espree.Node} node - releasing node.
     * @param {boolean=} inner - look up the most inner scope, default value is false.
     * @returns {Scope?} upper scope for the node.
     */
    release(node, inner) {
        const scopes = this.__get(node);

        if (scopes && scopes.length) {
            const scope = scopes[0].upper;

            if (!scope) {
                return null;
            }
            return this.acquire(scope.block, inner);
        }
        return null;
    }

    attach() { } // eslint-disable-line class-methods-use-this

    detach() { } // eslint-disable-line class-methods-use-this

    __nestScope(scope) {
        if (scope instanceof GlobalScope) {
            assert(this.__currentScope === null);
            this.globalScope = scope;
        }
        this.__currentScope = scope;
        return scope;
    }

    __nestGlobalScope(node) {
        return this.__nestScope(new GlobalScope(this, node));
    }

    __nestBlockScope(node) {
        return this.__nestScope(new BlockScope(this, this.__currentScope, node));
    }

    __nestFunctionScope(node, isMethodDefinition) {
        return this.__nestScope(new FunctionScope(this, this.__currentScope, node, isMethodDefinition));
    }

    __nestForScope(node) {
        return this.__nestScope(new ForScope(this, this.__currentScope, node));
    }

    __nestCatchScope(node) {
        return this.__nestScope(new CatchScope(this, this.__currentScope, node));
    }

    __nestWithScope(node) {
        return this.__nestScope(new WithScope(this, this.__currentScope, node));
    }

    __nestClassScope(node) {
        return this.__nestScope(new ClassScope(this, this.__currentScope, node));
    }

    __nestSwitchScope(node) {
        return this.__nestScope(new SwitchScope(this, this.__currentScope, node));
    }

    __nestModuleScope(node) {
        return this.__nestScope(new ModuleScope(this, this.__currentScope, node));
    }

    __nestFunctionExpressionNameScope(node) {
        return this.__nestScope(new FunctionExpressionNameScope(this, this.__currentScope, node));
    }

    __isES6() {
        return this.__options.ecmaVersion >= 6;
    }
}

module.exports = ScopeManager;

/* vim: set sw=4 ts=4 et tw=80 : */
