'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
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

var _es6WeakMap = require('es6-weak-map');

var _es6WeakMap2 = _interopRequireDefault(_es6WeakMap);

var _scope = require('./scope');

var _scope2 = _interopRequireDefault(_scope);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class ScopeManager
 */

var ScopeManager = function () {
    function ScopeManager(options) {
        _classCallCheck(this, ScopeManager);

        this.scopes = [];
        this.globalScope = null;
        this.__nodeToScope = new _es6WeakMap2.default();
        this.__currentScope = null;
        this.__options = options;
        this.__declaredVariables = new _es6WeakMap2.default();
    }

    _createClass(ScopeManager, [{
        key: '__useDirective',
        value: function __useDirective() {
            return this.__options.directive;
        }
    }, {
        key: '__isOptimistic',
        value: function __isOptimistic() {
            return this.__options.optimistic;
        }
    }, {
        key: '__ignoreEval',
        value: function __ignoreEval() {
            return this.__options.ignoreEval;
        }
    }, {
        key: '__isNodejsScope',
        value: function __isNodejsScope() {
            return this.__options.nodejsScope;
        }
    }, {
        key: 'isModule',
        value: function isModule() {
            return this.__options.sourceType === 'module';
        }
    }, {
        key: 'isImpliedStrict',
        value: function isImpliedStrict() {
            return this.__options.impliedStrict;
        }
    }, {
        key: 'isStrictModeSupported',
        value: function isStrictModeSupported() {
            return this.__options.ecmaVersion >= 5;
        }

        // Returns appropriate scope for this node.

    }, {
        key: '__get',
        value: function __get(node) {
            return this.__nodeToScope.get(node);
        }

        /**
         * Get variables that are declared by the node.
         *
         * "are declared by the node" means the node is same as `Variable.defs[].node` or `Variable.defs[].parent`.
         * If the node declares nothing, this method returns an empty array.
         * CAUTION: This API is experimental. See https://github.com/estools/escope/pull/69 for more details.
         *
         * @param {Esprima.Node} node - a node to get.
         * @returns {Variable[]} variables that declared by the node.
         */

    }, {
        key: 'getDeclaredVariables',
        value: function getDeclaredVariables(node) {
            return this.__declaredVariables.get(node) || [];
        }

        /**
         * acquire scope from node.
         * @method ScopeManager#acquire
         * @param {Esprima.Node} node - node for the acquired scope.
         * @param {boolean=} inner - look up the most inner scope, default value is false.
         * @return {Scope?}
         */

    }, {
        key: 'acquire',
        value: function acquire(node, inner) {
            var scopes, scope, i, iz;

            function predicate(scope) {
                if (scope.type === 'function' && scope.functionExpressionScope) {
                    return false;
                }
                if (scope.type === 'TDZ') {
                    return false;
                }
                return true;
            }

            scopes = this.__get(node);
            if (!scopes || scopes.length === 0) {
                return null;
            }

            // Heuristic selection from all scopes.
            // If you would like to get all scopes, please use ScopeManager#acquireAll.
            if (scopes.length === 1) {
                return scopes[0];
            }

            if (inner) {
                for (i = scopes.length - 1; i >= 0; --i) {
                    scope = scopes[i];
                    if (predicate(scope)) {
                        return scope;
                    }
                }
            } else {
                for (i = 0, iz = scopes.length; i < iz; ++i) {
                    scope = scopes[i];
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
         * @param {Esprima.Node} node - node for the acquired scope.
         * @return {Scope[]?}
         */

    }, {
        key: 'acquireAll',
        value: function acquireAll(node) {
            return this.__get(node);
        }

        /**
         * release the node.
         * @method ScopeManager#release
         * @param {Esprima.Node} node - releasing node.
         * @param {boolean=} inner - look up the most inner scope, default value is false.
         * @return {Scope?} upper scope for the node.
         */

    }, {
        key: 'release',
        value: function release(node, inner) {
            var scopes, scope;
            scopes = this.__get(node);
            if (scopes && scopes.length) {
                scope = scopes[0].upper;
                if (!scope) {
                    return null;
                }
                return this.acquire(scope.block, inner);
            }
            return null;
        }
    }, {
        key: 'attach',
        value: function attach() {}
    }, {
        key: 'detach',
        value: function detach() {}
    }, {
        key: '__nestScope',
        value: function __nestScope(scope) {
            if (scope instanceof _scope.GlobalScope) {
                (0, _assert2.default)(this.__currentScope === null);
                this.globalScope = scope;
            }
            this.__currentScope = scope;
            return scope;
        }
    }, {
        key: '__nestGlobalScope',
        value: function __nestGlobalScope(node) {
            return this.__nestScope(new _scope.GlobalScope(this, node));
        }
    }, {
        key: '__nestBlockScope',
        value: function __nestBlockScope(node, isMethodDefinition) {
            return this.__nestScope(new _scope.BlockScope(this, this.__currentScope, node));
        }
    }, {
        key: '__nestFunctionScope',
        value: function __nestFunctionScope(node, isMethodDefinition) {
            return this.__nestScope(new _scope.FunctionScope(this, this.__currentScope, node, isMethodDefinition));
        }
    }, {
        key: '__nestForScope',
        value: function __nestForScope(node) {
            return this.__nestScope(new _scope.ForScope(this, this.__currentScope, node));
        }
    }, {
        key: '__nestCatchScope',
        value: function __nestCatchScope(node) {
            return this.__nestScope(new _scope.CatchScope(this, this.__currentScope, node));
        }
    }, {
        key: '__nestWithScope',
        value: function __nestWithScope(node) {
            return this.__nestScope(new _scope.WithScope(this, this.__currentScope, node));
        }
    }, {
        key: '__nestClassScope',
        value: function __nestClassScope(node) {
            return this.__nestScope(new _scope.ClassScope(this, this.__currentScope, node));
        }
    }, {
        key: '__nestSwitchScope',
        value: function __nestSwitchScope(node) {
            return this.__nestScope(new _scope.SwitchScope(this, this.__currentScope, node));
        }
    }, {
        key: '__nestModuleScope',
        value: function __nestModuleScope(node) {
            return this.__nestScope(new _scope.ModuleScope(this, this.__currentScope, node));
        }
    }, {
        key: '__nestTDZScope',
        value: function __nestTDZScope(node) {
            return this.__nestScope(new _scope.TDZScope(this, this.__currentScope, node));
        }
    }, {
        key: '__nestFunctionExpressionNameScope',
        value: function __nestFunctionExpressionNameScope(node) {
            return this.__nestScope(new _scope.FunctionExpressionNameScope(this, this.__currentScope, node));
        }
    }, {
        key: '__isES6',
        value: function __isES6() {
            return this.__options.ecmaVersion >= 6;
        }
    }]);

    return ScopeManager;
}();

/* vim: set sw=4 ts=4 et tw=80 : */


exports.default = ScopeManager;
//# sourceMappingURL=data:application/json;base64,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b3VyY2VzQ29udGVudCI6WyIvKlxuICBDb3B5cmlnaHQgKEMpIDIwMTUgWXVzdWtlIFN1enVraSA8dXRhdGFuZS50ZWFAZ21haWwuY29tPlxuXG4gIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcblxuICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbiAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0XG4gICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlXG4gICAgICBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuXG4gIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4gIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiAgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiAgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIDxDT1BZUklHSFQgSE9MREVSPiBCRSBMSUFCTEUgRk9SIEFOWVxuICBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFU1xuICAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7XG4gIExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORFxuICBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuICAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0ZcbiAgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmltcG9ydCBXZWFrTWFwIGZyb20gJ2VzNi13ZWFrLW1hcCc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZSc7XG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5cbmltcG9ydCB7XG4gICAgR2xvYmFsU2NvcGUsXG4gICAgQ2F0Y2hTY29wZSxcbiAgICBXaXRoU2NvcGUsXG4gICAgTW9kdWxlU2NvcGUsXG4gICAgQ2xhc3NTY29wZSxcbiAgICBTd2l0Y2hTY29wZSxcbiAgICBGdW5jdGlvblNjb3BlLFxuICAgIEZvclNjb3BlLFxuICAgIFREWlNjb3BlLFxuICAgIEZ1bmN0aW9uRXhwcmVzc2lvbk5hbWVTY29wZSxcbiAgICBCbG9ja1Njb3BlXG59IGZyb20gJy4vc2NvcGUnO1xuXG4vKipcbiAqIEBjbGFzcyBTY29wZU1hbmFnZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcGVNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuc2NvcGVzID0gW107XG4gICAgICAgIHRoaXMuZ2xvYmFsU2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLl9fbm9kZVRvU2NvcGUgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICB0aGlzLl9fY3VycmVudFNjb3BlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fX29wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLl9fZGVjbGFyZWRWYXJpYWJsZXMgPSBuZXcgV2Vha01hcCgpO1xuICAgIH1cblxuICAgIF9fdXNlRGlyZWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX29wdGlvbnMuZGlyZWN0aXZlO1xuICAgIH1cblxuICAgIF9faXNPcHRpbWlzdGljKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX29wdGlvbnMub3B0aW1pc3RpYztcbiAgICB9XG5cbiAgICBfX2lnbm9yZUV2YWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fb3B0aW9ucy5pZ25vcmVFdmFsO1xuICAgIH1cblxuICAgIF9faXNOb2RlanNTY29wZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19vcHRpb25zLm5vZGVqc1Njb3BlO1xuICAgIH1cblxuICAgIGlzTW9kdWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX29wdGlvbnMuc291cmNlVHlwZSA9PT0gJ21vZHVsZSc7XG4gICAgfVxuXG4gICAgaXNJbXBsaWVkU3RyaWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX29wdGlvbnMuaW1wbGllZFN0cmljdDtcbiAgICB9XG5cbiAgICBpc1N0cmljdE1vZGVTdXBwb3J0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fb3B0aW9ucy5lY21hVmVyc2lvbiA+PSA1O1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgYXBwcm9wcmlhdGUgc2NvcGUgZm9yIHRoaXMgbm9kZS5cbiAgICBfX2dldChub2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fbm9kZVRvU2NvcGUuZ2V0KG5vZGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB2YXJpYWJsZXMgdGhhdCBhcmUgZGVjbGFyZWQgYnkgdGhlIG5vZGUuXG4gICAgICpcbiAgICAgKiBcImFyZSBkZWNsYXJlZCBieSB0aGUgbm9kZVwiIG1lYW5zIHRoZSBub2RlIGlzIHNhbWUgYXMgYFZhcmlhYmxlLmRlZnNbXS5ub2RlYCBvciBgVmFyaWFibGUuZGVmc1tdLnBhcmVudGAuXG4gICAgICogSWYgdGhlIG5vZGUgZGVjbGFyZXMgbm90aGluZywgdGhpcyBtZXRob2QgcmV0dXJucyBhbiBlbXB0eSBhcnJheS5cbiAgICAgKiBDQVVUSU9OOiBUaGlzIEFQSSBpcyBleHBlcmltZW50YWwuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZXN0b29scy9lc2NvcGUvcHVsbC82OSBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtFc3ByaW1hLk5vZGV9IG5vZGUgLSBhIG5vZGUgdG8gZ2V0LlxuICAgICAqIEByZXR1cm5zIHtWYXJpYWJsZVtdfSB2YXJpYWJsZXMgdGhhdCBkZWNsYXJlZCBieSB0aGUgbm9kZS5cbiAgICAgKi9cbiAgICBnZXREZWNsYXJlZFZhcmlhYmxlcyhub2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fZGVjbGFyZWRWYXJpYWJsZXMuZ2V0KG5vZGUpIHx8IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGFjcXVpcmUgc2NvcGUgZnJvbSBub2RlLlxuICAgICAqIEBtZXRob2QgU2NvcGVNYW5hZ2VyI2FjcXVpcmVcbiAgICAgKiBAcGFyYW0ge0VzcHJpbWEuTm9kZX0gbm9kZSAtIG5vZGUgZm9yIHRoZSBhY3F1aXJlZCBzY29wZS5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBpbm5lciAtIGxvb2sgdXAgdGhlIG1vc3QgaW5uZXIgc2NvcGUsIGRlZmF1bHQgdmFsdWUgaXMgZmFsc2UuXG4gICAgICogQHJldHVybiB7U2NvcGU/fVxuICAgICAqL1xuICAgIGFjcXVpcmUobm9kZSwgaW5uZXIpIHtcbiAgICAgICAgdmFyIHNjb3Blcywgc2NvcGUsIGksIGl6O1xuXG4gICAgICAgIGZ1bmN0aW9uIHByZWRpY2F0ZShzY29wZSkge1xuICAgICAgICAgICAgaWYgKHNjb3BlLnR5cGUgPT09ICdmdW5jdGlvbicgJiYgc2NvcGUuZnVuY3Rpb25FeHByZXNzaW9uU2NvcGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2NvcGUudHlwZSA9PT0gJ1REWicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNjb3BlcyA9IHRoaXMuX19nZXQobm9kZSk7XG4gICAgICAgIGlmICghc2NvcGVzIHx8IHNjb3Blcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGV1cmlzdGljIHNlbGVjdGlvbiBmcm9tIGFsbCBzY29wZXMuXG4gICAgICAgIC8vIElmIHlvdSB3b3VsZCBsaWtlIHRvIGdldCBhbGwgc2NvcGVzLCBwbGVhc2UgdXNlIFNjb3BlTWFuYWdlciNhY3F1aXJlQWxsLlxuICAgICAgICBpZiAoc2NvcGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3Blc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbm5lcikge1xuICAgICAgICAgICAgZm9yIChpID0gc2NvcGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUgPSBzY29wZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKHByZWRpY2F0ZShzY29wZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGl6ID0gc2NvcGVzLmxlbmd0aDsgaSA8IGl6OyArK2kpIHtcbiAgICAgICAgICAgICAgICBzY29wZSA9IHNjb3Blc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZGljYXRlKHNjb3BlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYWNxdWlyZSBhbGwgc2NvcGVzIGZyb20gbm9kZS5cbiAgICAgKiBAbWV0aG9kIFNjb3BlTWFuYWdlciNhY3F1aXJlQWxsXG4gICAgICogQHBhcmFtIHtFc3ByaW1hLk5vZGV9IG5vZGUgLSBub2RlIGZvciB0aGUgYWNxdWlyZWQgc2NvcGUuXG4gICAgICogQHJldHVybiB7U2NvcGVbXT99XG4gICAgICovXG4gICAgYWNxdWlyZUFsbChub2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fZ2V0KG5vZGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJlbGVhc2UgdGhlIG5vZGUuXG4gICAgICogQG1ldGhvZCBTY29wZU1hbmFnZXIjcmVsZWFzZVxuICAgICAqIEBwYXJhbSB7RXNwcmltYS5Ob2RlfSBub2RlIC0gcmVsZWFzaW5nIG5vZGUuXG4gICAgICogQHBhcmFtIHtib29sZWFuPX0gaW5uZXIgLSBsb29rIHVwIHRoZSBtb3N0IGlubmVyIHNjb3BlLCBkZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxuICAgICAqIEByZXR1cm4ge1Njb3BlP30gdXBwZXIgc2NvcGUgZm9yIHRoZSBub2RlLlxuICAgICAqL1xuICAgIHJlbGVhc2Uobm9kZSwgaW5uZXIpIHtcbiAgICAgICAgdmFyIHNjb3Blcywgc2NvcGU7XG4gICAgICAgIHNjb3BlcyA9IHRoaXMuX19nZXQobm9kZSk7XG4gICAgICAgIGlmIChzY29wZXMgJiYgc2NvcGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgc2NvcGUgPSBzY29wZXNbMF0udXBwZXI7XG4gICAgICAgICAgICBpZiAoIXNjb3BlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY3F1aXJlKHNjb3BlLmJsb2NrLCBpbm5lcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgYXR0YWNoKCkgeyB9XG5cbiAgICBkZXRhY2goKSB7IH1cblxuICAgIF9fbmVzdFNjb3BlKHNjb3BlKSB7XG4gICAgICAgIGlmIChzY29wZSBpbnN0YW5jZW9mIEdsb2JhbFNjb3BlKSB7XG4gICAgICAgICAgICBhc3NlcnQodGhpcy5fX2N1cnJlbnRTY29wZSA9PT0gbnVsbCk7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbFNjb3BlID0gc2NvcGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX2N1cnJlbnRTY29wZSA9IHNjb3BlO1xuICAgICAgICByZXR1cm4gc2NvcGU7XG4gICAgfVxuXG4gICAgX19uZXN0R2xvYmFsU2NvcGUobm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX25lc3RTY29wZShuZXcgR2xvYmFsU2NvcGUodGhpcywgbm9kZSkpO1xuICAgIH1cblxuICAgIF9fbmVzdEJsb2NrU2NvcGUobm9kZSwgaXNNZXRob2REZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fbmVzdFNjb3BlKG5ldyBCbG9ja1Njb3BlKHRoaXMsIHRoaXMuX19jdXJyZW50U2NvcGUsIG5vZGUpKTtcbiAgICB9XG5cbiAgICBfX25lc3RGdW5jdGlvblNjb3BlKG5vZGUsIGlzTWV0aG9kRGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5fX25lc3RTY29wZShuZXcgRnVuY3Rpb25TY29wZSh0aGlzLCB0aGlzLl9fY3VycmVudFNjb3BlLCBub2RlLCBpc01ldGhvZERlZmluaXRpb24pKTtcbiAgICB9XG5cbiAgICBfX25lc3RGb3JTY29wZShub2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fbmVzdFNjb3BlKG5ldyBGb3JTY29wZSh0aGlzLCB0aGlzLl9fY3VycmVudFNjb3BlLCBub2RlKSk7XG4gICAgfVxuXG4gICAgX19uZXN0Q2F0Y2hTY29wZShub2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fbmVzdFNjb3BlKG5ldyBDYXRjaFNjb3BlKHRoaXMsIHRoaXMuX19jdXJyZW50U2NvcGUsIG5vZGUpKTtcbiAgICB9XG5cbiAgICBfX25lc3RXaXRoU2NvcGUobm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX25lc3RTY29wZShuZXcgV2l0aFNjb3BlKHRoaXMsIHRoaXMuX19jdXJyZW50U2NvcGUsIG5vZGUpKTtcbiAgICB9XG5cbiAgICBfX25lc3RDbGFzc1Njb3BlKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19uZXN0U2NvcGUobmV3IENsYXNzU2NvcGUodGhpcywgdGhpcy5fX2N1cnJlbnRTY29wZSwgbm9kZSkpO1xuICAgIH1cblxuICAgIF9fbmVzdFN3aXRjaFNjb3BlKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19uZXN0U2NvcGUobmV3IFN3aXRjaFNjb3BlKHRoaXMsIHRoaXMuX19jdXJyZW50U2NvcGUsIG5vZGUpKTtcbiAgICB9XG5cbiAgICBfX25lc3RNb2R1bGVTY29wZShub2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fbmVzdFNjb3BlKG5ldyBNb2R1bGVTY29wZSh0aGlzLCB0aGlzLl9fY3VycmVudFNjb3BlLCBub2RlKSk7XG4gICAgfVxuXG4gICAgX19uZXN0VERaU2NvcGUobm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX25lc3RTY29wZShuZXcgVERaU2NvcGUodGhpcywgdGhpcy5fX2N1cnJlbnRTY29wZSwgbm9kZSkpO1xuICAgIH1cblxuICAgIF9fbmVzdEZ1bmN0aW9uRXhwcmVzc2lvbk5hbWVTY29wZShub2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fbmVzdFNjb3BlKG5ldyBGdW5jdGlvbkV4cHJlc3Npb25OYW1lU2NvcGUodGhpcywgdGhpcy5fX2N1cnJlbnRTY29wZSwgbm9kZSkpO1xuICAgIH1cblxuICAgIF9faXNFUzYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fb3B0aW9ucy5lY21hVmVyc2lvbiA+PSA2O1xuICAgIH1cbn1cblxuLyogdmltOiBzZXQgc3c9NCB0cz00IGV0IHR3PTgwIDogKi9cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
