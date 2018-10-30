'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ScopeManager = exports.Scope = exports.Variable = exports.Reference = exports.version = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /*
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
 * Mozilla Parser API</a>. E.g. <a href="http://esprima.org">esprima</a> is a parser
 * that produces such syntax trees.
 * <p>
 * The main interface is the {@link analyze} function.
 * @module escope
 */

/*jslint bitwise:true */

exports.analyze = analyze;

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _scopeManager = require('./scope-manager');

var _scopeManager2 = _interopRequireDefault(_scopeManager);

var _referencer = require('./referencer');

var _referencer2 = _interopRequireDefault(_referencer);

var _reference = require('./reference');

var _reference2 = _interopRequireDefault(_reference);

var _variable = require('./variable');

var _variable2 = _interopRequireDefault(_variable);

var _scope = require('./scope');

var _scope2 = _interopRequireDefault(_scope);

var _package = require('../package.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function defaultOptions() {
    return {
        optimistic: false,
        directive: false,
        nodejsScope: false,
        impliedStrict: false,
        sourceType: 'script', // one of ['script', 'module']
        ecmaVersion: 5,
        childVisitorKeys: null,
        fallback: 'iteration'
    };
}

function updateDeeply(target, override) {
    var key, val;

    function isHashObject(target) {
        return (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target instanceof Object && !(target instanceof Array) && !(target instanceof RegExp);
    }

    for (key in override) {
        if (override.hasOwnProperty(key)) {
            val = override[key];
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
 * Main interface function. Takes an Esprima syntax tree and returns the
 * analyzed scopes.
 * @function analyze
 * @param {esprima.Tree} tree
 * @param {Object} providedOptions - Options that tailor the scope analysis
 * @param {boolean} [providedOptions.optimistic=false] - the optimistic flag
 * @param {boolean} [providedOptions.directive=false]- the directive flag
 * @param {boolean} [providedOptions.ignoreEval=false]- whether to check 'eval()' calls
 * @param {boolean} [providedOptions.nodejsScope=false]- whether the whole
 * script is executed under node.js environment. When enabled, escope adds
 * a function scope immediately following the global scope.
 * @param {boolean} [providedOptions.impliedStrict=false]- implied strict mode
 * (if ecmaVersion >= 5).
 * @param {string} [providedOptions.sourceType='script']- the source type of the script. one of 'script' and 'module'
 * @param {number} [providedOptions.ecmaVersion=5]- which ECMAScript version is considered
 * @param {Object} [providedOptions.childVisitorKeys=null] - Additional known visitor keys. See [esrecurse](https://github.com/estools/esrecurse)'s the `childVisitorKeys` option.
 * @param {string} [providedOptions.fallback='iteration'] - A kind of the fallback in order to encounter with unknown node. See [esrecurse](https://github.com/estools/esrecurse)'s the `fallback` option.
 * @return {ScopeManager}
 */
function analyze(tree, providedOptions) {
    var scopeManager, referencer, options;

    options = updateDeeply(defaultOptions(), providedOptions);

    scopeManager = new _scopeManager2.default(options);

    referencer = new _referencer2.default(options, scopeManager);
    referencer.visit(tree);

    (0, _assert2.default)(scopeManager.__currentScope === null, 'currentScope should be null.');

    return scopeManager;
}

exports.
/** @name module:escope.version */
version = _package.version;
exports.
/** @name module:escope.Reference */
Reference = _reference2.default;
exports.
/** @name module:escope.Variable */
Variable = _variable2.default;
exports.
/** @name module:escope.Scope */
Scope = _scope2.default;
exports.
/** @name module:escope.ScopeManager */
ScopeManager = _scopeManager2.default;

/* vim: set sw=4 ts=4 et tw=80 : */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQW9IZ0I7O0FBbEVoQjs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLFNBQVMsY0FBVCxHQUEwQjtBQUN0QixXQUFPO0FBQ0gsb0JBQVksS0FBWjtBQUNBLG1CQUFXLEtBQVg7QUFDQSxxQkFBYSxLQUFiO0FBQ0EsdUJBQWUsS0FBZjtBQUNBLG9CQUFZLFFBQVo7QUFDQSxxQkFBYSxDQUFiO0FBQ0EsMEJBQWtCLElBQWxCO0FBQ0Esa0JBQVUsV0FBVjtLQVJKLENBRHNCO0NBQTFCOztBQWFBLFNBQVMsWUFBVCxDQUFzQixNQUF0QixFQUE4QixRQUE5QixFQUF3QztBQUNwQyxRQUFJLEdBQUosRUFBUyxHQUFULENBRG9DOztBQUdwQyxhQUFTLFlBQVQsQ0FBc0IsTUFBdEIsRUFBOEI7QUFDMUIsZUFBTyxRQUFPLHVEQUFQLEtBQWtCLFFBQWxCLElBQThCLGtCQUFrQixNQUFsQixJQUE0QixFQUFFLGtCQUFrQixLQUFsQixDQUFGLElBQThCLEVBQUUsa0JBQWtCLE1BQWxCLENBQUYsQ0FEckU7S0FBOUI7O0FBSUEsU0FBSyxHQUFMLElBQVksUUFBWixFQUFzQjtBQUNsQixZQUFJLFNBQVMsY0FBVCxDQUF3QixHQUF4QixDQUFKLEVBQWtDO0FBQzlCLGtCQUFNLFNBQVMsR0FBVCxDQUFOLENBRDhCO0FBRTlCLGdCQUFJLGFBQWEsR0FBYixDQUFKLEVBQXVCO0FBQ25CLG9CQUFJLGFBQWEsT0FBTyxHQUFQLENBQWIsQ0FBSixFQUErQjtBQUMzQixpQ0FBYSxPQUFPLEdBQVAsQ0FBYixFQUEwQixHQUExQixFQUQyQjtpQkFBL0IsTUFFTztBQUNILDJCQUFPLEdBQVAsSUFBYyxhQUFhLEVBQWIsRUFBaUIsR0FBakIsQ0FBZCxDQURHO2lCQUZQO2FBREosTUFNTztBQUNILHVCQUFPLEdBQVAsSUFBYyxHQUFkLENBREc7YUFOUDtTQUZKO0tBREo7QUFjQSxXQUFPLE1BQVAsQ0FyQm9DO0NBQXhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNENPLFNBQVMsT0FBVCxDQUFpQixJQUFqQixFQUF1QixlQUF2QixFQUF3QztBQUMzQyxRQUFJLFlBQUosRUFBa0IsVUFBbEIsRUFBOEIsT0FBOUIsQ0FEMkM7O0FBRzNDLGNBQVUsYUFBYSxnQkFBYixFQUErQixlQUEvQixDQUFWLENBSDJDOztBQUszQyxtQkFBZSwyQkFBaUIsT0FBakIsQ0FBZixDQUwyQzs7QUFPM0MsaUJBQWEseUJBQWUsT0FBZixFQUF3QixZQUF4QixDQUFiLENBUDJDO0FBUTNDLGVBQVcsS0FBWCxDQUFpQixJQUFqQixFQVIyQzs7QUFVM0MsMEJBQU8sYUFBYSxjQUFiLEtBQWdDLElBQWhDLEVBQXNDLDhCQUE3QyxFQVYyQzs7QUFZM0MsV0FBTyxZQUFQLENBWjJDO0NBQXhDOzs7O0FBaUJIOzs7QUFFQTs7O0FBRUE7OztBQUVBOzs7QUFFQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIENvcHlyaWdodCAoQykgMjAxMi0yMDE0IFl1c3VrZSBTdXp1a2kgPHV0YXRhbmUudGVhQGdtYWlsLmNvbT5cbiAgQ29weXJpZ2h0IChDKSAyMDEzIEFsZXggU2V2aWxsZSA8aGlAYWxleGFuZGVyc2V2aWxsZS5jb20+XG4gIENvcHlyaWdodCAoQykgMjAxNCBUaGlhZ28gZGUgQXJydWRhIDx0cGFkaWxoYTg0QGdtYWlsLmNvbT5cblxuICBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG5cbiAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4gICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodFxuICAgICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZVxuICAgICAgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cblxuICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuICBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4gIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4gIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCA8Q09QWVJJR0hUIEhPTERFUj4gQkUgTElBQkxFIEZPUiBBTllcbiAgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVNcbiAgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTO1xuICBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkRcbiAgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbiAgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GXG4gIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG4vKipcbiAqIEVzY29wZSAoPGEgaHJlZj1cImh0dHA6Ly9naXRodWIuY29tL2VzdG9vbHMvZXNjb3BlXCI+ZXNjb3BlPC9hPikgaXMgYW4gPGFcbiAqIGhyZWY9XCJodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvcHVibGljYXRpb25zL3N0YW5kYXJkcy9FY21hLTI2Mi5odG1cIj5FQ01BU2NyaXB0PC9hPlxuICogc2NvcGUgYW5hbHl6ZXIgZXh0cmFjdGVkIGZyb20gdGhlIDxhXG4gKiBocmVmPVwiaHR0cDovL2dpdGh1Yi5jb20vZXN0b29scy9lc21hbmdsZVwiPmVzbWFuZ2xlIHByb2plY3Q8L2EvPi5cbiAqIDxwPlxuICogPGVtPmVzY29wZTwvZW0+IGZpbmRzIGxleGljYWwgc2NvcGVzIGluIGEgc291cmNlIHByb2dyYW0sIGkuZS4gYXJlYXMgb2YgdGhhdFxuICogcHJvZ3JhbSB3aGVyZSBkaWZmZXJlbnQgb2NjdXJyZW5jZXMgb2YgdGhlIHNhbWUgaWRlbnRpZmllciByZWZlciB0byB0aGUgc2FtZVxuICogdmFyaWFibGUuIFdpdGggZWFjaCBzY29wZSB0aGUgY29udGFpbmVkIHZhcmlhYmxlcyBhcmUgY29sbGVjdGVkLCBhbmQgZWFjaFxuICogaWRlbnRpZmllciByZWZlcmVuY2UgaW4gY29kZSBpcyBsaW5rZWQgdG8gaXRzIGNvcnJlc3BvbmRpbmcgdmFyaWFibGUgKGlmXG4gKiBwb3NzaWJsZSkuXG4gKiA8cD5cbiAqIDxlbT5lc2NvcGU8L2VtPiB3b3JrcyBvbiBhIHN5bnRheCB0cmVlIG9mIHRoZSBwYXJzZWQgc291cmNlIGNvZGUgd2hpY2ggaGFzXG4gKiB0byBhZGhlcmUgdG8gdGhlIDxhXG4gKiBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9TcGlkZXJNb25rZXkvUGFyc2VyX0FQSVwiPlxuICogTW96aWxsYSBQYXJzZXIgQVBJPC9hPi4gRS5nLiA8YSBocmVmPVwiaHR0cDovL2VzcHJpbWEub3JnXCI+ZXNwcmltYTwvYT4gaXMgYSBwYXJzZXJcbiAqIHRoYXQgcHJvZHVjZXMgc3VjaCBzeW50YXggdHJlZXMuXG4gKiA8cD5cbiAqIFRoZSBtYWluIGludGVyZmFjZSBpcyB0aGUge0BsaW5rIGFuYWx5emV9IGZ1bmN0aW9uLlxuICogQG1vZHVsZSBlc2NvcGVcbiAqL1xuXG4vKmpzbGludCBiaXR3aXNlOnRydWUgKi9cblxuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuXG5pbXBvcnQgU2NvcGVNYW5hZ2VyIGZyb20gJy4vc2NvcGUtbWFuYWdlcic7XG5pbXBvcnQgUmVmZXJlbmNlciBmcm9tICcuL3JlZmVyZW5jZXInO1xuaW1wb3J0IFJlZmVyZW5jZSBmcm9tICcuL3JlZmVyZW5jZSc7XG5pbXBvcnQgVmFyaWFibGUgZnJvbSAnLi92YXJpYWJsZSc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZSc7XG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcblxuZnVuY3Rpb24gZGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3B0aW1pc3RpYzogZmFsc2UsXG4gICAgICAgIGRpcmVjdGl2ZTogZmFsc2UsXG4gICAgICAgIG5vZGVqc1Njb3BlOiBmYWxzZSxcbiAgICAgICAgaW1wbGllZFN0cmljdDogZmFsc2UsXG4gICAgICAgIHNvdXJjZVR5cGU6ICdzY3JpcHQnLCAgLy8gb25lIG9mIFsnc2NyaXB0JywgJ21vZHVsZSddXG4gICAgICAgIGVjbWFWZXJzaW9uOiA1LFxuICAgICAgICBjaGlsZFZpc2l0b3JLZXlzOiBudWxsLFxuICAgICAgICBmYWxsYmFjazogJ2l0ZXJhdGlvbidcbiAgICB9O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVEZWVwbHkodGFyZ2V0LCBvdmVycmlkZSkge1xuICAgIHZhciBrZXksIHZhbDtcblxuICAgIGZ1bmN0aW9uIGlzSGFzaE9iamVjdCh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnICYmIHRhcmdldCBpbnN0YW5jZW9mIE9iamVjdCAmJiAhKHRhcmdldCBpbnN0YW5jZW9mIEFycmF5KSAmJiAhKHRhcmdldCBpbnN0YW5jZW9mIFJlZ0V4cCk7XG4gICAgfVxuXG4gICAgZm9yIChrZXkgaW4gb3ZlcnJpZGUpIHtcbiAgICAgICAgaWYgKG92ZXJyaWRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHZhbCA9IG92ZXJyaWRlW2tleV07XG4gICAgICAgICAgICBpZiAoaXNIYXNoT2JqZWN0KHZhbCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNIYXNoT2JqZWN0KHRhcmdldFtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEZWVwbHkodGFyZ2V0W2tleV0sIHZhbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB1cGRhdGVEZWVwbHkoe30sIHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIE1haW4gaW50ZXJmYWNlIGZ1bmN0aW9uLiBUYWtlcyBhbiBFc3ByaW1hIHN5bnRheCB0cmVlIGFuZCByZXR1cm5zIHRoZVxuICogYW5hbHl6ZWQgc2NvcGVzLlxuICogQGZ1bmN0aW9uIGFuYWx5emVcbiAqIEBwYXJhbSB7ZXNwcmltYS5UcmVlfSB0cmVlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdmlkZWRPcHRpb25zIC0gT3B0aW9ucyB0aGF0IHRhaWxvciB0aGUgc2NvcGUgYW5hbHlzaXNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Byb3ZpZGVkT3B0aW9ucy5vcHRpbWlzdGljPWZhbHNlXSAtIHRoZSBvcHRpbWlzdGljIGZsYWdcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Byb3ZpZGVkT3B0aW9ucy5kaXJlY3RpdmU9ZmFsc2VdLSB0aGUgZGlyZWN0aXZlIGZsYWdcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Byb3ZpZGVkT3B0aW9ucy5pZ25vcmVFdmFsPWZhbHNlXS0gd2hldGhlciB0byBjaGVjayAnZXZhbCgpJyBjYWxsc1xuICogQHBhcmFtIHtib29sZWFufSBbcHJvdmlkZWRPcHRpb25zLm5vZGVqc1Njb3BlPWZhbHNlXS0gd2hldGhlciB0aGUgd2hvbGVcbiAqIHNjcmlwdCBpcyBleGVjdXRlZCB1bmRlciBub2RlLmpzIGVudmlyb25tZW50LiBXaGVuIGVuYWJsZWQsIGVzY29wZSBhZGRzXG4gKiBhIGZ1bmN0aW9uIHNjb3BlIGltbWVkaWF0ZWx5IGZvbGxvd2luZyB0aGUgZ2xvYmFsIHNjb3BlLlxuICogQHBhcmFtIHtib29sZWFufSBbcHJvdmlkZWRPcHRpb25zLmltcGxpZWRTdHJpY3Q9ZmFsc2VdLSBpbXBsaWVkIHN0cmljdCBtb2RlXG4gKiAoaWYgZWNtYVZlcnNpb24gPj0gNSkuXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3ZpZGVkT3B0aW9ucy5zb3VyY2VUeXBlPSdzY3JpcHQnXS0gdGhlIHNvdXJjZSB0eXBlIG9mIHRoZSBzY3JpcHQuIG9uZSBvZiAnc2NyaXB0JyBhbmQgJ21vZHVsZSdcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcHJvdmlkZWRPcHRpb25zLmVjbWFWZXJzaW9uPTVdLSB3aGljaCBFQ01BU2NyaXB0IHZlcnNpb24gaXMgY29uc2lkZXJlZFxuICogQHBhcmFtIHtPYmplY3R9IFtwcm92aWRlZE9wdGlvbnMuY2hpbGRWaXNpdG9yS2V5cz1udWxsXSAtIEFkZGl0aW9uYWwga25vd24gdmlzaXRvciBrZXlzLiBTZWUgW2VzcmVjdXJzZV0oaHR0cHM6Ly9naXRodWIuY29tL2VzdG9vbHMvZXNyZWN1cnNlKSdzIHRoZSBgY2hpbGRWaXNpdG9yS2V5c2Agb3B0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm92aWRlZE9wdGlvbnMuZmFsbGJhY2s9J2l0ZXJhdGlvbiddIC0gQSBraW5kIG9mIHRoZSBmYWxsYmFjayBpbiBvcmRlciB0byBlbmNvdW50ZXIgd2l0aCB1bmtub3duIG5vZGUuIFNlZSBbZXNyZWN1cnNlXShodHRwczovL2dpdGh1Yi5jb20vZXN0b29scy9lc3JlY3Vyc2UpJ3MgdGhlIGBmYWxsYmFja2Agb3B0aW9uLlxuICogQHJldHVybiB7U2NvcGVNYW5hZ2VyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYW5hbHl6ZSh0cmVlLCBwcm92aWRlZE9wdGlvbnMpIHtcbiAgICB2YXIgc2NvcGVNYW5hZ2VyLCByZWZlcmVuY2VyLCBvcHRpb25zO1xuXG4gICAgb3B0aW9ucyA9IHVwZGF0ZURlZXBseShkZWZhdWx0T3B0aW9ucygpLCBwcm92aWRlZE9wdGlvbnMpO1xuXG4gICAgc2NvcGVNYW5hZ2VyID0gbmV3IFNjb3BlTWFuYWdlcihvcHRpb25zKTtcblxuICAgIHJlZmVyZW5jZXIgPSBuZXcgUmVmZXJlbmNlcihvcHRpb25zLCBzY29wZU1hbmFnZXIpO1xuICAgIHJlZmVyZW5jZXIudmlzaXQodHJlZSk7XG5cbiAgICBhc3NlcnQoc2NvcGVNYW5hZ2VyLl9fY3VycmVudFNjb3BlID09PSBudWxsLCAnY3VycmVudFNjb3BlIHNob3VsZCBiZSBudWxsLicpO1xuXG4gICAgcmV0dXJuIHNjb3BlTWFuYWdlcjtcbn1cblxuZXhwb3J0IHtcbiAgICAvKiogQG5hbWUgbW9kdWxlOmVzY29wZS52ZXJzaW9uICovXG4gICAgdmVyc2lvbixcbiAgICAvKiogQG5hbWUgbW9kdWxlOmVzY29wZS5SZWZlcmVuY2UgKi9cbiAgICBSZWZlcmVuY2UsXG4gICAgLyoqIEBuYW1lIG1vZHVsZTplc2NvcGUuVmFyaWFibGUgKi9cbiAgICBWYXJpYWJsZSxcbiAgICAvKiogQG5hbWUgbW9kdWxlOmVzY29wZS5TY29wZSAqL1xuICAgIFNjb3BlLFxuICAgIC8qKiBAbmFtZSBtb2R1bGU6ZXNjb3BlLlNjb3BlTWFuYWdlciAqL1xuICAgIFNjb3BlTWFuYWdlclxufTtcblxuXG4vKiB2aW06IHNldCBzdz00IHRzPTQgZXQgdHc9ODAgOiAqL1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
