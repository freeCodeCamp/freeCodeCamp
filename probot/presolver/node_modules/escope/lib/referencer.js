'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _estraverse = require('estraverse');

var _esrecurse = require('esrecurse');

var _esrecurse2 = _interopRequireDefault(_esrecurse);

var _reference = require('./reference');

var _reference2 = _interopRequireDefault(_reference);

var _variable = require('./variable');

var _variable2 = _interopRequireDefault(_variable);

var _patternVisitor = require('./pattern-visitor');

var _patternVisitor2 = _interopRequireDefault(_patternVisitor);

var _definition = require('./definition');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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


function traverseIdentifierInPattern(options, rootPattern, referencer, callback) {
    // Call the callback at left hand identifier nodes, and Collect right hand nodes.
    var visitor = new _patternVisitor2.default(options, rootPattern, callback);
    visitor.visit(rootPattern);

    // Process the right hand nodes recursively.
    if (referencer != null) {
        visitor.rightHandNodes.forEach(referencer.visit, referencer);
    }
}

// Importing ImportDeclaration.
// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-moduledeclarationinstantiation
// https://github.com/estree/estree/blob/master/es6.md#importdeclaration
// FIXME: Now, we don't create module environment, because the context is
// implementation dependent.

var Importer = function (_esrecurse$Visitor) {
    _inherits(Importer, _esrecurse$Visitor);

    function Importer(declaration, referencer) {
        _classCallCheck(this, Importer);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Importer).call(this, null, referencer.options));

        _this.declaration = declaration;
        _this.referencer = referencer;
        return _this;
    }

    _createClass(Importer, [{
        key: 'visitImport',
        value: function visitImport(id, specifier) {
            var _this2 = this;

            this.referencer.visitPattern(id, function (pattern) {
                _this2.referencer.currentScope().__define(pattern, new _definition.Definition(_variable2.default.ImportBinding, pattern, specifier, _this2.declaration, null, null));
            });
        }
    }, {
        key: 'ImportNamespaceSpecifier',
        value: function ImportNamespaceSpecifier(node) {
            var local = node.local || node.id;
            if (local) {
                this.visitImport(local, node);
            }
        }
    }, {
        key: 'ImportDefaultSpecifier',
        value: function ImportDefaultSpecifier(node) {
            var local = node.local || node.id;
            this.visitImport(local, node);
        }
    }, {
        key: 'ImportSpecifier',
        value: function ImportSpecifier(node) {
            var local = node.local || node.id;
            if (node.name) {
                this.visitImport(node.name, node);
            } else {
                this.visitImport(local, node);
            }
        }
    }]);

    return Importer;
}(_esrecurse2.default.Visitor);

// Referencing variables and creating bindings.


var Referencer = function (_esrecurse$Visitor2) {
    _inherits(Referencer, _esrecurse$Visitor2);

    function Referencer(options, scopeManager) {
        _classCallCheck(this, Referencer);

        var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Referencer).call(this, null, options));

        _this3.options = options;
        _this3.scopeManager = scopeManager;
        _this3.parent = null;
        _this3.isInnerMethodDefinition = false;
        return _this3;
    }

    _createClass(Referencer, [{
        key: 'currentScope',
        value: function currentScope() {
            return this.scopeManager.__currentScope;
        }
    }, {
        key: 'close',
        value: function close(node) {
            while (this.currentScope() && node === this.currentScope().block) {
                this.scopeManager.__currentScope = this.currentScope().__close(this.scopeManager);
            }
        }
    }, {
        key: 'pushInnerMethodDefinition',
        value: function pushInnerMethodDefinition(isInnerMethodDefinition) {
            var previous = this.isInnerMethodDefinition;
            this.isInnerMethodDefinition = isInnerMethodDefinition;
            return previous;
        }
    }, {
        key: 'popInnerMethodDefinition',
        value: function popInnerMethodDefinition(isInnerMethodDefinition) {
            this.isInnerMethodDefinition = isInnerMethodDefinition;
        }
    }, {
        key: 'materializeTDZScope',
        value: function materializeTDZScope(node, iterationNode) {
            // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-runtime-semantics-forin-div-ofexpressionevaluation-abstract-operation
            // TDZ scope hides the declaration's names.
            this.scopeManager.__nestTDZScope(node, iterationNode);
            this.visitVariableDeclaration(this.currentScope(), _variable2.default.TDZ, iterationNode.left, 0, true);
        }
    }, {
        key: 'materializeIterationScope',
        value: function materializeIterationScope(node) {
            var _this4 = this;

            // Generate iteration scope for upper ForIn/ForOf Statements.
            var letOrConstDecl;
            this.scopeManager.__nestForScope(node);
            letOrConstDecl = node.left;
            this.visitVariableDeclaration(this.currentScope(), _variable2.default.Variable, letOrConstDecl, 0);
            this.visitPattern(letOrConstDecl.declarations[0].id, function (pattern) {
                _this4.currentScope().__referencing(pattern, _reference2.default.WRITE, node.right, null, true, true);
            });
        }
    }, {
        key: 'referencingDefaultValue',
        value: function referencingDefaultValue(pattern, assignments, maybeImplicitGlobal, init) {
            var scope = this.currentScope();
            assignments.forEach(function (assignment) {
                scope.__referencing(pattern, _reference2.default.WRITE, assignment.right, maybeImplicitGlobal, pattern !== assignment.left, init);
            });
        }
    }, {
        key: 'visitPattern',
        value: function visitPattern(node, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = { processRightHandNodes: false };
            }
            traverseIdentifierInPattern(this.options, node, options.processRightHandNodes ? this : null, callback);
        }
    }, {
        key: 'visitFunction',
        value: function visitFunction(node) {
            var _this5 = this;

            var i, iz;
            // FunctionDeclaration name is defined in upper scope
            // NOTE: Not referring variableScope. It is intended.
            // Since
            //  in ES5, FunctionDeclaration should be in FunctionBody.
            //  in ES6, FunctionDeclaration should be block scoped.
            if (node.type === _estraverse.Syntax.FunctionDeclaration) {
                // id is defined in upper scope
                this.currentScope().__define(node.id, new _definition.Definition(_variable2.default.FunctionName, node.id, node, null, null, null));
            }

            // FunctionExpression with name creates its special scope;
            // FunctionExpressionNameScope.
            if (node.type === _estraverse.Syntax.FunctionExpression && node.id) {
                this.scopeManager.__nestFunctionExpressionNameScope(node);
            }

            // Consider this function is in the MethodDefinition.
            this.scopeManager.__nestFunctionScope(node, this.isInnerMethodDefinition);

            // Process parameter declarations.
            for (i = 0, iz = node.params.length; i < iz; ++i) {
                this.visitPattern(node.params[i], { processRightHandNodes: true }, function (pattern, info) {
                    _this5.currentScope().__define(pattern, new _definition.ParameterDefinition(pattern, node, i, info.rest));

                    _this5.referencingDefaultValue(pattern, info.assignments, null, true);
                });
            }

            // if there's a rest argument, add that
            if (node.rest) {
                this.visitPattern({
                    type: 'RestElement',
                    argument: node.rest
                }, function (pattern) {
                    _this5.currentScope().__define(pattern, new _definition.ParameterDefinition(pattern, node, node.params.length, true));
                });
            }

            // Skip BlockStatement to prevent creating BlockStatement scope.
            if (node.body.type === _estraverse.Syntax.BlockStatement) {
                this.visitChildren(node.body);
            } else {
                this.visit(node.body);
            }

            this.close(node);
        }
    }, {
        key: 'visitClass',
        value: function visitClass(node) {
            if (node.type === _estraverse.Syntax.ClassDeclaration) {
                this.currentScope().__define(node.id, new _definition.Definition(_variable2.default.ClassName, node.id, node, null, null, null));
            }

            // FIXME: Maybe consider TDZ.
            this.visit(node.superClass);

            this.scopeManager.__nestClassScope(node);

            if (node.id) {
                this.currentScope().__define(node.id, new _definition.Definition(_variable2.default.ClassName, node.id, node));
            }
            this.visit(node.body);

            this.close(node);
        }
    }, {
        key: 'visitProperty',
        value: function visitProperty(node) {
            var previous, isMethodDefinition;
            if (node.computed) {
                this.visit(node.key);
            }

            isMethodDefinition = node.type === _estraverse.Syntax.MethodDefinition;
            if (isMethodDefinition) {
                previous = this.pushInnerMethodDefinition(true);
            }
            this.visit(node.value);
            if (isMethodDefinition) {
                this.popInnerMethodDefinition(previous);
            }
        }
    }, {
        key: 'visitForIn',
        value: function visitForIn(node) {
            var _this6 = this;

            if (node.left.type === _estraverse.Syntax.VariableDeclaration && node.left.kind !== 'var') {
                this.materializeTDZScope(node.right, node);
                this.visit(node.right);
                this.close(node.right);

                this.materializeIterationScope(node);
                this.visit(node.body);
                this.close(node);
            } else {
                if (node.left.type === _estraverse.Syntax.VariableDeclaration) {
                    this.visit(node.left);
                    this.visitPattern(node.left.declarations[0].id, function (pattern) {
                        _this6.currentScope().__referencing(pattern, _reference2.default.WRITE, node.right, null, true, true);
                    });
                } else {
                    this.visitPattern(node.left, { processRightHandNodes: true }, function (pattern, info) {
                        var maybeImplicitGlobal = null;
                        if (!_this6.currentScope().isStrict) {
                            maybeImplicitGlobal = {
                                pattern: pattern,
                                node: node
                            };
                        }
                        _this6.referencingDefaultValue(pattern, info.assignments, maybeImplicitGlobal, false);
                        _this6.currentScope().__referencing(pattern, _reference2.default.WRITE, node.right, maybeImplicitGlobal, true, false);
                    });
                }
                this.visit(node.right);
                this.visit(node.body);
            }
        }
    }, {
        key: 'visitVariableDeclaration',
        value: function visitVariableDeclaration(variableTargetScope, type, node, index, fromTDZ) {
            var _this7 = this;

            // If this was called to initialize a TDZ scope, this needs to make definitions, but doesn't make references.
            var decl, init;

            decl = node.declarations[index];
            init = decl.init;
            this.visitPattern(decl.id, { processRightHandNodes: !fromTDZ }, function (pattern, info) {
                variableTargetScope.__define(pattern, new _definition.Definition(type, pattern, decl, node, index, node.kind));

                if (!fromTDZ) {
                    _this7.referencingDefaultValue(pattern, info.assignments, null, true);
                }
                if (init) {
                    _this7.currentScope().__referencing(pattern, _reference2.default.WRITE, init, null, !info.topLevel, true);
                }
            });
        }
    }, {
        key: 'AssignmentExpression',
        value: function AssignmentExpression(node) {
            var _this8 = this;

            if (_patternVisitor2.default.isPattern(node.left)) {
                if (node.operator === '=') {
                    this.visitPattern(node.left, { processRightHandNodes: true }, function (pattern, info) {
                        var maybeImplicitGlobal = null;
                        if (!_this8.currentScope().isStrict) {
                            maybeImplicitGlobal = {
                                pattern: pattern,
                                node: node
                            };
                        }
                        _this8.referencingDefaultValue(pattern, info.assignments, maybeImplicitGlobal, false);
                        _this8.currentScope().__referencing(pattern, _reference2.default.WRITE, node.right, maybeImplicitGlobal, !info.topLevel, false);
                    });
                } else {
                    this.currentScope().__referencing(node.left, _reference2.default.RW, node.right);
                }
            } else {
                this.visit(node.left);
            }
            this.visit(node.right);
        }
    }, {
        key: 'CatchClause',
        value: function CatchClause(node) {
            var _this9 = this;

            this.scopeManager.__nestCatchScope(node);

            this.visitPattern(node.param, { processRightHandNodes: true }, function (pattern, info) {
                _this9.currentScope().__define(pattern, new _definition.Definition(_variable2.default.CatchClause, node.param, node, null, null, null));
                _this9.referencingDefaultValue(pattern, info.assignments, null, true);
            });
            this.visit(node.body);

            this.close(node);
        }
    }, {
        key: 'Program',
        value: function Program(node) {
            this.scopeManager.__nestGlobalScope(node);

            if (this.scopeManager.__isNodejsScope()) {
                // Force strictness of GlobalScope to false when using node.js scope.
                this.currentScope().isStrict = false;
                this.scopeManager.__nestFunctionScope(node, false);
            }

            if (this.scopeManager.__isES6() && this.scopeManager.isModule()) {
                this.scopeManager.__nestModuleScope(node);
            }

            if (this.scopeManager.isStrictModeSupported() && this.scopeManager.isImpliedStrict()) {
                this.currentScope().isStrict = true;
            }

            this.visitChildren(node);
            this.close(node);
        }
    }, {
        key: 'Identifier',
        value: function Identifier(node) {
            this.currentScope().__referencing(node);
        }
    }, {
        key: 'UpdateExpression',
        value: function UpdateExpression(node) {
            if (_patternVisitor2.default.isPattern(node.argument)) {
                this.currentScope().__referencing(node.argument, _reference2.default.RW, null);
            } else {
                this.visitChildren(node);
            }
        }
    }, {
        key: 'MemberExpression',
        value: function MemberExpression(node) {
            this.visit(node.object);
            if (node.computed) {
                this.visit(node.property);
            }
        }
    }, {
        key: 'Property',
        value: function Property(node) {
            this.visitProperty(node);
        }
    }, {
        key: 'MethodDefinition',
        value: function MethodDefinition(node) {
            this.visitProperty(node);
        }
    }, {
        key: 'BreakStatement',
        value: function BreakStatement() {}
    }, {
        key: 'ContinueStatement',
        value: function ContinueStatement() {}
    }, {
        key: 'LabeledStatement',
        value: function LabeledStatement(node) {
            this.visit(node.body);
        }
    }, {
        key: 'ForStatement',
        value: function ForStatement(node) {
            // Create ForStatement declaration.
            // NOTE: In ES6, ForStatement dynamically generates
            // per iteration environment. However, escope is
            // a static analyzer, we only generate one scope for ForStatement.
            if (node.init && node.init.type === _estraverse.Syntax.VariableDeclaration && node.init.kind !== 'var') {
                this.scopeManager.__nestForScope(node);
            }

            this.visitChildren(node);

            this.close(node);
        }
    }, {
        key: 'ClassExpression',
        value: function ClassExpression(node) {
            this.visitClass(node);
        }
    }, {
        key: 'ClassDeclaration',
        value: function ClassDeclaration(node) {
            this.visitClass(node);
        }
    }, {
        key: 'CallExpression',
        value: function CallExpression(node) {
            // Check this is direct call to eval
            if (!this.scopeManager.__ignoreEval() && node.callee.type === _estraverse.Syntax.Identifier && node.callee.name === 'eval') {
                // NOTE: This should be `variableScope`. Since direct eval call always creates Lexical environment and
                // let / const should be enclosed into it. Only VariableDeclaration affects on the caller's environment.
                this.currentScope().variableScope.__detectEval();
            }
            this.visitChildren(node);
        }
    }, {
        key: 'BlockStatement',
        value: function BlockStatement(node) {
            if (this.scopeManager.__isES6()) {
                this.scopeManager.__nestBlockScope(node);
            }

            this.visitChildren(node);

            this.close(node);
        }
    }, {
        key: 'ThisExpression',
        value: function ThisExpression() {
            this.currentScope().variableScope.__detectThis();
        }
    }, {
        key: 'WithStatement',
        value: function WithStatement(node) {
            this.visit(node.object);
            // Then nest scope for WithStatement.
            this.scopeManager.__nestWithScope(node);

            this.visit(node.body);

            this.close(node);
        }
    }, {
        key: 'VariableDeclaration',
        value: function VariableDeclaration(node) {
            var variableTargetScope, i, iz, decl;
            variableTargetScope = node.kind === 'var' ? this.currentScope().variableScope : this.currentScope();
            for (i = 0, iz = node.declarations.length; i < iz; ++i) {
                decl = node.declarations[i];
                this.visitVariableDeclaration(variableTargetScope, _variable2.default.Variable, node, i);
                if (decl.init) {
                    this.visit(decl.init);
                }
            }
        }

        // sec 13.11.8

    }, {
        key: 'SwitchStatement',
        value: function SwitchStatement(node) {
            var i, iz;

            this.visit(node.discriminant);

            if (this.scopeManager.__isES6()) {
                this.scopeManager.__nestSwitchScope(node);
            }

            for (i = 0, iz = node.cases.length; i < iz; ++i) {
                this.visit(node.cases[i]);
            }

            this.close(node);
        }
    }, {
        key: 'FunctionDeclaration',
        value: function FunctionDeclaration(node) {
            this.visitFunction(node);
        }
    }, {
        key: 'FunctionExpression',
        value: function FunctionExpression(node) {
            this.visitFunction(node);
        }
    }, {
        key: 'ForOfStatement',
        value: function ForOfStatement(node) {
            this.visitForIn(node);
        }
    }, {
        key: 'ForInStatement',
        value: function ForInStatement(node) {
            this.visitForIn(node);
        }
    }, {
        key: 'ArrowFunctionExpression',
        value: function ArrowFunctionExpression(node) {
            this.visitFunction(node);
        }
    }, {
        key: 'ImportDeclaration',
        value: function ImportDeclaration(node) {
            var importer;

            (0, _assert2.default)(this.scopeManager.__isES6() && this.scopeManager.isModule(), 'ImportDeclaration should appear when the mode is ES6 and in the module context.');

            importer = new Importer(node, this);
            importer.visit(node);
        }
    }, {
        key: 'visitExportDeclaration',
        value: function visitExportDeclaration(node) {
            if (node.source) {
                return;
            }
            if (node.declaration) {
                this.visit(node.declaration);
                return;
            }

            this.visitChildren(node);
        }
    }, {
        key: 'ExportDeclaration',
        value: function ExportDeclaration(node) {
            this.visitExportDeclaration(node);
        }
    }, {
        key: 'ExportNamedDeclaration',
        value: function ExportNamedDeclaration(node) {
            this.visitExportDeclaration(node);
        }
    }, {
        key: 'ExportSpecifier',
        value: function ExportSpecifier(node) {
            var local = node.id || node.local;
            this.visit(local);
        }
    }, {
        key: 'MetaProperty',
        value: function MetaProperty() {
            // do nothing.
        }
    }]);

    return Referencer;
}(_esrecurse2.default.Visitor);

/* vim: set sw=4 ts=4 et tw=80 : */


exports.default = Referencer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmVyZW5jZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUF1QkE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTLDJCQUFULENBQXFDLE9BQXJDLEVBQThDLFdBQTlDLEVBQTJELFVBQTNELEVBQXVFLFFBQXZFLEVBQWlGOztBQUU3RSxRQUFJLFVBQVUsNkJBQW1CLE9BQW5CLEVBQTRCLFdBQTVCLEVBQXlDLFFBQXpDLENBQVYsQ0FGeUU7QUFHN0UsWUFBUSxLQUFSLENBQWMsV0FBZDs7O0FBSDZFLFFBTXpFLGNBQWMsSUFBZCxFQUFvQjtBQUNwQixnQkFBUSxjQUFSLENBQXVCLE9BQXZCLENBQStCLFdBQVcsS0FBWCxFQUFrQixVQUFqRCxFQURvQjtLQUF4QjtDQU5KOzs7Ozs7OztJQWlCTTs7O0FBQ0YsYUFERSxRQUNGLENBQVksV0FBWixFQUF5QixVQUF6QixFQUFxQzs4QkFEbkMsVUFDbUM7OzJFQURuQyxxQkFFUSxNQUFNLFdBQVcsT0FBWCxHQURxQjs7QUFFakMsY0FBSyxXQUFMLEdBQW1CLFdBQW5CLENBRmlDO0FBR2pDLGNBQUssVUFBTCxHQUFrQixVQUFsQixDQUhpQzs7S0FBckM7O2lCQURFOztvQ0FPVSxJQUFJLFdBQVc7OztBQUN2QixpQkFBSyxVQUFMLENBQWdCLFlBQWhCLENBQTZCLEVBQTdCLEVBQWlDLFVBQUMsT0FBRCxFQUFhO0FBQzFDLHVCQUFLLFVBQUwsQ0FBZ0IsWUFBaEIsR0FBK0IsUUFBL0IsQ0FBd0MsT0FBeEMsRUFDSSwyQkFDSSxtQkFBUyxhQUFULEVBQ0EsT0FGSixFQUdJLFNBSEosRUFJSSxPQUFLLFdBQUwsRUFDQSxJQUxKLEVBTUksSUFOSixDQURKLEVBRDBDO2FBQWIsQ0FBakMsQ0FEdUI7Ozs7aURBY0YsTUFBTTtBQUMzQixnQkFBSSxRQUFTLEtBQUssS0FBTCxJQUFjLEtBQUssRUFBTCxDQURBO0FBRTNCLGdCQUFJLEtBQUosRUFBVztBQUNQLHFCQUFLLFdBQUwsQ0FBaUIsS0FBakIsRUFBd0IsSUFBeEIsRUFETzthQUFYOzs7OytDQUttQixNQUFNO0FBQ3pCLGdCQUFJLFFBQVMsS0FBSyxLQUFMLElBQWMsS0FBSyxFQUFMLENBREY7QUFFekIsaUJBQUssV0FBTCxDQUFpQixLQUFqQixFQUF3QixJQUF4QixFQUZ5Qjs7Ozt3Q0FLYixNQUFNO0FBQ2xCLGdCQUFJLFFBQVMsS0FBSyxLQUFMLElBQWMsS0FBSyxFQUFMLENBRFQ7QUFFbEIsZ0JBQUksS0FBSyxJQUFMLEVBQVc7QUFDWCxxQkFBSyxXQUFMLENBQWlCLEtBQUssSUFBTCxFQUFXLElBQTVCLEVBRFc7YUFBZixNQUVPO0FBQ0gscUJBQUssV0FBTCxDQUFpQixLQUFqQixFQUF3QixJQUF4QixFQURHO2FBRlA7Ozs7V0FuQ0Y7RUFBaUIsb0JBQVUsT0FBVjs7Ozs7SUE0Q0Y7OztBQUNqQixhQURpQixVQUNqQixDQUFZLE9BQVosRUFBcUIsWUFBckIsRUFBbUM7OEJBRGxCLFlBQ2tCOzs0RUFEbEIsdUJBRVAsTUFBTSxVQURtQjs7QUFFL0IsZUFBSyxPQUFMLEdBQWUsT0FBZixDQUYrQjtBQUcvQixlQUFLLFlBQUwsR0FBb0IsWUFBcEIsQ0FIK0I7QUFJL0IsZUFBSyxNQUFMLEdBQWMsSUFBZCxDQUorQjtBQUsvQixlQUFLLHVCQUFMLEdBQStCLEtBQS9CLENBTCtCOztLQUFuQzs7aUJBRGlCOzt1Q0FTRjtBQUNYLG1CQUFPLEtBQUssWUFBTCxDQUFrQixjQUFsQixDQURJOzs7OzhCQUlULE1BQU07QUFDUixtQkFBTyxLQUFLLFlBQUwsTUFBdUIsU0FBUyxLQUFLLFlBQUwsR0FBb0IsS0FBcEIsRUFBMkI7QUFDOUQscUJBQUssWUFBTCxDQUFrQixjQUFsQixHQUFtQyxLQUFLLFlBQUwsR0FBb0IsT0FBcEIsQ0FBNEIsS0FBSyxZQUFMLENBQS9ELENBRDhEO2FBQWxFOzs7O2tEQUtzQix5QkFBeUI7QUFDL0MsZ0JBQUksV0FBVyxLQUFLLHVCQUFMLENBRGdDO0FBRS9DLGlCQUFLLHVCQUFMLEdBQStCLHVCQUEvQixDQUYrQztBQUcvQyxtQkFBTyxRQUFQLENBSCtDOzs7O2lEQU0xQix5QkFBeUI7QUFDOUMsaUJBQUssdUJBQUwsR0FBK0IsdUJBQS9CLENBRDhDOzs7OzRDQUk5QixNQUFNLGVBQWU7OztBQUdyQyxpQkFBSyxZQUFMLENBQWtCLGNBQWxCLENBQWlDLElBQWpDLEVBQXVDLGFBQXZDLEVBSHFDO0FBSXJDLGlCQUFLLHdCQUFMLENBQThCLEtBQUssWUFBTCxFQUE5QixFQUFtRCxtQkFBUyxHQUFULEVBQWMsY0FBYyxJQUFkLEVBQW9CLENBQXJGLEVBQXdGLElBQXhGLEVBSnFDOzs7O2tEQU9mLE1BQU07Ozs7QUFFNUIsZ0JBQUksY0FBSixDQUY0QjtBQUc1QixpQkFBSyxZQUFMLENBQWtCLGNBQWxCLENBQWlDLElBQWpDLEVBSDRCO0FBSTVCLDZCQUFpQixLQUFLLElBQUwsQ0FKVztBQUs1QixpQkFBSyx3QkFBTCxDQUE4QixLQUFLLFlBQUwsRUFBOUIsRUFBbUQsbUJBQVMsUUFBVCxFQUFtQixjQUF0RSxFQUFzRixDQUF0RixFQUw0QjtBQU01QixpQkFBSyxZQUFMLENBQWtCLGVBQWUsWUFBZixDQUE0QixDQUE1QixFQUErQixFQUEvQixFQUFtQyxVQUFDLE9BQUQsRUFBYTtBQUM5RCx1QkFBSyxZQUFMLEdBQW9CLGFBQXBCLENBQWtDLE9BQWxDLEVBQTJDLG9CQUFVLEtBQVYsRUFBaUIsS0FBSyxLQUFMLEVBQVksSUFBeEUsRUFBOEUsSUFBOUUsRUFBb0YsSUFBcEYsRUFEOEQ7YUFBYixDQUFyRCxDQU40Qjs7OztnREFXUixTQUFTLGFBQWEscUJBQXFCLE1BQU07QUFDckUsZ0JBQU0sUUFBUSxLQUFLLFlBQUwsRUFBUixDQUQrRDtBQUVyRSx3QkFBWSxPQUFaLENBQW9CLHNCQUFjO0FBQzlCLHNCQUFNLGFBQU4sQ0FDSSxPQURKLEVBRUksb0JBQVUsS0FBVixFQUNBLFdBQVcsS0FBWCxFQUNBLG1CQUpKLEVBS0ksWUFBWSxXQUFXLElBQVgsRUFDWixJQU5KLEVBRDhCO2FBQWQsQ0FBcEIsQ0FGcUU7Ozs7cUNBYTVELE1BQU0sU0FBUyxVQUFVO0FBQ2xDLGdCQUFJLE9BQU8sT0FBUCxLQUFtQixVQUFuQixFQUErQjtBQUMvQiwyQkFBVyxPQUFYLENBRCtCO0FBRS9CLDBCQUFVLEVBQUMsdUJBQXVCLEtBQXZCLEVBQVgsQ0FGK0I7YUFBbkM7QUFJQSx3Q0FDSSxLQUFLLE9BQUwsRUFDQSxJQUZKLEVBR0ksUUFBUSxxQkFBUixHQUFnQyxJQUFoQyxHQUF1QyxJQUF2QyxFQUNBLFFBSkosRUFMa0M7Ozs7c0NBWXhCLE1BQU07OztBQUNoQixnQkFBSSxDQUFKLEVBQU8sRUFBUDs7Ozs7O0FBRGdCLGdCQU9aLEtBQUssSUFBTCxLQUFjLG1CQUFPLG1CQUFQLEVBQTRCOztBQUUxQyxxQkFBSyxZQUFMLEdBQW9CLFFBQXBCLENBQTZCLEtBQUssRUFBTCxFQUNyQiwyQkFDSSxtQkFBUyxZQUFULEVBQ0EsS0FBSyxFQUFMLEVBQ0EsSUFISixFQUlJLElBSkosRUFLSSxJQUxKLEVBTUksSUFOSixDQURSLEVBRjBDO2FBQTlDOzs7O0FBUGdCLGdCQXNCWixLQUFLLElBQUwsS0FBYyxtQkFBTyxrQkFBUCxJQUE2QixLQUFLLEVBQUwsRUFBUztBQUNwRCxxQkFBSyxZQUFMLENBQWtCLGlDQUFsQixDQUFvRCxJQUFwRCxFQURvRDthQUF4RDs7O0FBdEJnQixnQkEyQmhCLENBQUssWUFBTCxDQUFrQixtQkFBbEIsQ0FBc0MsSUFBdEMsRUFBNEMsS0FBSyx1QkFBTCxDQUE1Qzs7O0FBM0JnQixpQkE4QlgsSUFBSSxDQUFKLEVBQU8sS0FBSyxLQUFLLE1BQUwsQ0FBWSxNQUFaLEVBQW9CLElBQUksRUFBSixFQUFRLEVBQUUsQ0FBRixFQUFLO0FBQzlDLHFCQUFLLFlBQUwsQ0FBa0IsS0FBSyxNQUFMLENBQVksQ0FBWixDQUFsQixFQUFrQyxFQUFDLHVCQUF1QixJQUF2QixFQUFuQyxFQUFpRSxVQUFDLE9BQUQsRUFBVSxJQUFWLEVBQW1CO0FBQ2hGLDJCQUFLLFlBQUwsR0FBb0IsUUFBcEIsQ0FBNkIsT0FBN0IsRUFDSSxvQ0FDSSxPQURKLEVBRUksSUFGSixFQUdJLENBSEosRUFJSSxLQUFLLElBQUwsQ0FMUixFQURnRjs7QUFTaEYsMkJBQUssdUJBQUwsQ0FBNkIsT0FBN0IsRUFBc0MsS0FBSyxXQUFMLEVBQWtCLElBQXhELEVBQThELElBQTlELEVBVGdGO2lCQUFuQixDQUFqRSxDQUQ4QzthQUFsRDs7O0FBOUJnQixnQkE2Q1osS0FBSyxJQUFMLEVBQVc7QUFDWCxxQkFBSyxZQUFMLENBQWtCO0FBQ2QsMEJBQU0sYUFBTjtBQUNBLDhCQUFVLEtBQUssSUFBTDtpQkFGZCxFQUdHLFVBQUMsT0FBRCxFQUFhO0FBQ1osMkJBQUssWUFBTCxHQUFvQixRQUFwQixDQUE2QixPQUE3QixFQUNJLG9DQUNJLE9BREosRUFFSSxJQUZKLEVBR0ksS0FBSyxNQUFMLENBQVksTUFBWixFQUNBLElBSkosQ0FESixFQURZO2lCQUFiLENBSEgsQ0FEVzthQUFmOzs7QUE3Q2dCLGdCQTZEWixLQUFLLElBQUwsQ0FBVSxJQUFWLEtBQW1CLG1CQUFPLGNBQVAsRUFBdUI7QUFDMUMscUJBQUssYUFBTCxDQUFtQixLQUFLLElBQUwsQ0FBbkIsQ0FEMEM7YUFBOUMsTUFFTztBQUNILHFCQUFLLEtBQUwsQ0FBVyxLQUFLLElBQUwsQ0FBWCxDQURHO2FBRlA7O0FBTUEsaUJBQUssS0FBTCxDQUFXLElBQVgsRUFuRWdCOzs7O21DQXNFVCxNQUFNO0FBQ2IsZ0JBQUksS0FBSyxJQUFMLEtBQWMsbUJBQU8sZ0JBQVAsRUFBeUI7QUFDdkMscUJBQUssWUFBTCxHQUFvQixRQUFwQixDQUE2QixLQUFLLEVBQUwsRUFDckIsMkJBQ0ksbUJBQVMsU0FBVCxFQUNBLEtBQUssRUFBTCxFQUNBLElBSEosRUFJSSxJQUpKLEVBS0ksSUFMSixFQU1JLElBTkosQ0FEUixFQUR1QzthQUEzQzs7O0FBRGEsZ0JBY2IsQ0FBSyxLQUFMLENBQVcsS0FBSyxVQUFMLENBQVgsQ0FkYTs7QUFnQmIsaUJBQUssWUFBTCxDQUFrQixnQkFBbEIsQ0FBbUMsSUFBbkMsRUFoQmE7O0FBa0JiLGdCQUFJLEtBQUssRUFBTCxFQUFTO0FBQ1QscUJBQUssWUFBTCxHQUFvQixRQUFwQixDQUE2QixLQUFLLEVBQUwsRUFDckIsMkJBQ0ksbUJBQVMsU0FBVCxFQUNBLEtBQUssRUFBTCxFQUNBLElBSEosQ0FEUixFQURTO2FBQWI7QUFRQSxpQkFBSyxLQUFMLENBQVcsS0FBSyxJQUFMLENBQVgsQ0ExQmE7O0FBNEJiLGlCQUFLLEtBQUwsQ0FBVyxJQUFYLEVBNUJhOzs7O3NDQStCSCxNQUFNO0FBQ2hCLGdCQUFJLFFBQUosRUFBYyxrQkFBZCxDQURnQjtBQUVoQixnQkFBSSxLQUFLLFFBQUwsRUFBZTtBQUNmLHFCQUFLLEtBQUwsQ0FBVyxLQUFLLEdBQUwsQ0FBWCxDQURlO2FBQW5COztBQUlBLGlDQUFxQixLQUFLLElBQUwsS0FBYyxtQkFBTyxnQkFBUCxDQU5uQjtBQU9oQixnQkFBSSxrQkFBSixFQUF3QjtBQUNwQiwyQkFBVyxLQUFLLHlCQUFMLENBQStCLElBQS9CLENBQVgsQ0FEb0I7YUFBeEI7QUFHQSxpQkFBSyxLQUFMLENBQVcsS0FBSyxLQUFMLENBQVgsQ0FWZ0I7QUFXaEIsZ0JBQUksa0JBQUosRUFBd0I7QUFDcEIscUJBQUssd0JBQUwsQ0FBOEIsUUFBOUIsRUFEb0I7YUFBeEI7Ozs7bUNBS08sTUFBTTs7O0FBQ2IsZ0JBQUksS0FBSyxJQUFMLENBQVUsSUFBVixLQUFtQixtQkFBTyxtQkFBUCxJQUE4QixLQUFLLElBQUwsQ0FBVSxJQUFWLEtBQW1CLEtBQW5CLEVBQTBCO0FBQzNFLHFCQUFLLG1CQUFMLENBQXlCLEtBQUssS0FBTCxFQUFZLElBQXJDLEVBRDJFO0FBRTNFLHFCQUFLLEtBQUwsQ0FBVyxLQUFLLEtBQUwsQ0FBWCxDQUYyRTtBQUczRSxxQkFBSyxLQUFMLENBQVcsS0FBSyxLQUFMLENBQVgsQ0FIMkU7O0FBSzNFLHFCQUFLLHlCQUFMLENBQStCLElBQS9CLEVBTDJFO0FBTTNFLHFCQUFLLEtBQUwsQ0FBVyxLQUFLLElBQUwsQ0FBWCxDQU4yRTtBQU8zRSxxQkFBSyxLQUFMLENBQVcsSUFBWCxFQVAyRTthQUEvRSxNQVFPO0FBQ0gsb0JBQUksS0FBSyxJQUFMLENBQVUsSUFBVixLQUFtQixtQkFBTyxtQkFBUCxFQUE0QjtBQUMvQyx5QkFBSyxLQUFMLENBQVcsS0FBSyxJQUFMLENBQVgsQ0FEK0M7QUFFL0MseUJBQUssWUFBTCxDQUFrQixLQUFLLElBQUwsQ0FBVSxZQUFWLENBQXVCLENBQXZCLEVBQTBCLEVBQTFCLEVBQThCLFVBQUMsT0FBRCxFQUFhO0FBQ3pELCtCQUFLLFlBQUwsR0FBb0IsYUFBcEIsQ0FBa0MsT0FBbEMsRUFBMkMsb0JBQVUsS0FBVixFQUFpQixLQUFLLEtBQUwsRUFBWSxJQUF4RSxFQUE4RSxJQUE5RSxFQUFvRixJQUFwRixFQUR5RDtxQkFBYixDQUFoRCxDQUYrQztpQkFBbkQsTUFLTztBQUNILHlCQUFLLFlBQUwsQ0FBa0IsS0FBSyxJQUFMLEVBQVcsRUFBQyx1QkFBdUIsSUFBdkIsRUFBOUIsRUFBNEQsVUFBQyxPQUFELEVBQVUsSUFBVixFQUFtQjtBQUMzRSw0QkFBSSxzQkFBc0IsSUFBdEIsQ0FEdUU7QUFFM0UsNEJBQUksQ0FBQyxPQUFLLFlBQUwsR0FBb0IsUUFBcEIsRUFBOEI7QUFDL0Isa0RBQXNCO0FBQ2xCLHlDQUFTLE9BQVQ7QUFDQSxzQ0FBTSxJQUFOOzZCQUZKLENBRCtCO3lCQUFuQztBQU1BLCtCQUFLLHVCQUFMLENBQTZCLE9BQTdCLEVBQXNDLEtBQUssV0FBTCxFQUFrQixtQkFBeEQsRUFBNkUsS0FBN0UsRUFSMkU7QUFTM0UsK0JBQUssWUFBTCxHQUFvQixhQUFwQixDQUFrQyxPQUFsQyxFQUEyQyxvQkFBVSxLQUFWLEVBQWlCLEtBQUssS0FBTCxFQUFZLG1CQUF4RSxFQUE2RixJQUE3RixFQUFtRyxLQUFuRyxFQVQyRTtxQkFBbkIsQ0FBNUQsQ0FERztpQkFMUDtBQWtCQSxxQkFBSyxLQUFMLENBQVcsS0FBSyxLQUFMLENBQVgsQ0FuQkc7QUFvQkgscUJBQUssS0FBTCxDQUFXLEtBQUssSUFBTCxDQUFYLENBcEJHO2FBUlA7Ozs7aURBZ0NxQixxQkFBcUIsTUFBTSxNQUFNLE9BQU8sU0FBUzs7OztBQUV0RSxnQkFBSSxJQUFKLEVBQVUsSUFBVixDQUZzRTs7QUFJdEUsbUJBQU8sS0FBSyxZQUFMLENBQWtCLEtBQWxCLENBQVAsQ0FKc0U7QUFLdEUsbUJBQU8sS0FBSyxJQUFMLENBTCtEO0FBTXRFLGlCQUFLLFlBQUwsQ0FBa0IsS0FBSyxFQUFMLEVBQVMsRUFBQyx1QkFBdUIsQ0FBQyxPQUFELEVBQW5ELEVBQThELFVBQUMsT0FBRCxFQUFVLElBQVYsRUFBbUI7QUFDN0Usb0NBQW9CLFFBQXBCLENBQTZCLE9BQTdCLEVBQ0ksMkJBQ0ksSUFESixFQUVJLE9BRkosRUFHSSxJQUhKLEVBSUksSUFKSixFQUtJLEtBTEosRUFNSSxLQUFLLElBQUwsQ0FQUixFQUQ2RTs7QUFXN0Usb0JBQUksQ0FBQyxPQUFELEVBQVU7QUFDViwyQkFBSyx1QkFBTCxDQUE2QixPQUE3QixFQUFzQyxLQUFLLFdBQUwsRUFBa0IsSUFBeEQsRUFBOEQsSUFBOUQsRUFEVTtpQkFBZDtBQUdBLG9CQUFJLElBQUosRUFBVTtBQUNOLDJCQUFLLFlBQUwsR0FBb0IsYUFBcEIsQ0FBa0MsT0FBbEMsRUFBMkMsb0JBQVUsS0FBVixFQUFpQixJQUE1RCxFQUFrRSxJQUFsRSxFQUF3RSxDQUFDLEtBQUssUUFBTCxFQUFlLElBQXhGLEVBRE07aUJBQVY7YUFkMEQsQ0FBOUQsQ0FOc0U7Ozs7NkNBMEJyRCxNQUFNOzs7QUFDdkIsZ0JBQUkseUJBQWUsU0FBZixDQUF5QixLQUFLLElBQUwsQ0FBN0IsRUFBeUM7QUFDckMsb0JBQUksS0FBSyxRQUFMLEtBQWtCLEdBQWxCLEVBQXVCO0FBQ3ZCLHlCQUFLLFlBQUwsQ0FBa0IsS0FBSyxJQUFMLEVBQVcsRUFBQyx1QkFBdUIsSUFBdkIsRUFBOUIsRUFBNEQsVUFBQyxPQUFELEVBQVUsSUFBVixFQUFtQjtBQUMzRSw0QkFBSSxzQkFBc0IsSUFBdEIsQ0FEdUU7QUFFM0UsNEJBQUksQ0FBQyxPQUFLLFlBQUwsR0FBb0IsUUFBcEIsRUFBOEI7QUFDL0Isa0RBQXNCO0FBQ2xCLHlDQUFTLE9BQVQ7QUFDQSxzQ0FBTSxJQUFOOzZCQUZKLENBRCtCO3lCQUFuQztBQU1BLCtCQUFLLHVCQUFMLENBQTZCLE9BQTdCLEVBQXNDLEtBQUssV0FBTCxFQUFrQixtQkFBeEQsRUFBNkUsS0FBN0UsRUFSMkU7QUFTM0UsK0JBQUssWUFBTCxHQUFvQixhQUFwQixDQUFrQyxPQUFsQyxFQUEyQyxvQkFBVSxLQUFWLEVBQWlCLEtBQUssS0FBTCxFQUFZLG1CQUF4RSxFQUE2RixDQUFDLEtBQUssUUFBTCxFQUFlLEtBQTdHLEVBVDJFO3FCQUFuQixDQUE1RCxDQUR1QjtpQkFBM0IsTUFZTztBQUNILHlCQUFLLFlBQUwsR0FBb0IsYUFBcEIsQ0FBa0MsS0FBSyxJQUFMLEVBQVcsb0JBQVUsRUFBVixFQUFjLEtBQUssS0FBTCxDQUEzRCxDQURHO2lCQVpQO2FBREosTUFnQk87QUFDSCxxQkFBSyxLQUFMLENBQVcsS0FBSyxJQUFMLENBQVgsQ0FERzthQWhCUDtBQW1CQSxpQkFBSyxLQUFMLENBQVcsS0FBSyxLQUFMLENBQVgsQ0FwQnVCOzs7O29DQXVCZixNQUFNOzs7QUFDZCxpQkFBSyxZQUFMLENBQWtCLGdCQUFsQixDQUFtQyxJQUFuQyxFQURjOztBQUdkLGlCQUFLLFlBQUwsQ0FBa0IsS0FBSyxLQUFMLEVBQVksRUFBQyx1QkFBdUIsSUFBdkIsRUFBL0IsRUFBNkQsVUFBQyxPQUFELEVBQVUsSUFBVixFQUFtQjtBQUM1RSx1QkFBSyxZQUFMLEdBQW9CLFFBQXBCLENBQTZCLE9BQTdCLEVBQ0ksMkJBQ0ksbUJBQVMsV0FBVCxFQUNBLEtBQUssS0FBTCxFQUNBLElBSEosRUFJSSxJQUpKLEVBS0ksSUFMSixFQU1JLElBTkosQ0FESixFQUQ0RTtBQVU1RSx1QkFBSyx1QkFBTCxDQUE2QixPQUE3QixFQUFzQyxLQUFLLFdBQUwsRUFBa0IsSUFBeEQsRUFBOEQsSUFBOUQsRUFWNEU7YUFBbkIsQ0FBN0QsQ0FIYztBQWVkLGlCQUFLLEtBQUwsQ0FBVyxLQUFLLElBQUwsQ0FBWCxDQWZjOztBQWlCZCxpQkFBSyxLQUFMLENBQVcsSUFBWCxFQWpCYzs7OztnQ0FvQlYsTUFBTTtBQUNWLGlCQUFLLFlBQUwsQ0FBa0IsaUJBQWxCLENBQW9DLElBQXBDLEVBRFU7O0FBR1YsZ0JBQUksS0FBSyxZQUFMLENBQWtCLGVBQWxCLEVBQUosRUFBeUM7O0FBRXJDLHFCQUFLLFlBQUwsR0FBb0IsUUFBcEIsR0FBK0IsS0FBL0IsQ0FGcUM7QUFHckMscUJBQUssWUFBTCxDQUFrQixtQkFBbEIsQ0FBc0MsSUFBdEMsRUFBNEMsS0FBNUMsRUFIcUM7YUFBekM7O0FBTUEsZ0JBQUksS0FBSyxZQUFMLENBQWtCLE9BQWxCLE1BQStCLEtBQUssWUFBTCxDQUFrQixRQUFsQixFQUEvQixFQUE2RDtBQUM3RCxxQkFBSyxZQUFMLENBQWtCLGlCQUFsQixDQUFvQyxJQUFwQyxFQUQ2RDthQUFqRTs7QUFJQSxnQkFBSSxLQUFLLFlBQUwsQ0FBa0IscUJBQWxCLE1BQTZDLEtBQUssWUFBTCxDQUFrQixlQUFsQixFQUE3QyxFQUFrRjtBQUNsRixxQkFBSyxZQUFMLEdBQW9CLFFBQXBCLEdBQStCLElBQS9CLENBRGtGO2FBQXRGOztBQUlBLGlCQUFLLGFBQUwsQ0FBbUIsSUFBbkIsRUFqQlU7QUFrQlYsaUJBQUssS0FBTCxDQUFXLElBQVgsRUFsQlU7Ozs7bUNBcUJILE1BQU07QUFDYixpQkFBSyxZQUFMLEdBQW9CLGFBQXBCLENBQWtDLElBQWxDLEVBRGE7Ozs7eUNBSUEsTUFBTTtBQUNuQixnQkFBSSx5QkFBZSxTQUFmLENBQXlCLEtBQUssUUFBTCxDQUE3QixFQUE2QztBQUN6QyxxQkFBSyxZQUFMLEdBQW9CLGFBQXBCLENBQWtDLEtBQUssUUFBTCxFQUFlLG9CQUFVLEVBQVYsRUFBYyxJQUEvRCxFQUR5QzthQUE3QyxNQUVPO0FBQ0gscUJBQUssYUFBTCxDQUFtQixJQUFuQixFQURHO2FBRlA7Ozs7eUNBT2EsTUFBTTtBQUNuQixpQkFBSyxLQUFMLENBQVcsS0FBSyxNQUFMLENBQVgsQ0FEbUI7QUFFbkIsZ0JBQUksS0FBSyxRQUFMLEVBQWU7QUFDZixxQkFBSyxLQUFMLENBQVcsS0FBSyxRQUFMLENBQVgsQ0FEZTthQUFuQjs7OztpQ0FLSyxNQUFNO0FBQ1gsaUJBQUssYUFBTCxDQUFtQixJQUFuQixFQURXOzs7O3lDQUlFLE1BQU07QUFDbkIsaUJBQUssYUFBTCxDQUFtQixJQUFuQixFQURtQjs7Ozt5Q0FJTjs7OzRDQUVHOzs7eUNBRUgsTUFBTTtBQUNuQixpQkFBSyxLQUFMLENBQVcsS0FBSyxJQUFMLENBQVgsQ0FEbUI7Ozs7cUNBSVYsTUFBTTs7Ozs7QUFLZixnQkFBSSxLQUFLLElBQUwsSUFBYSxLQUFLLElBQUwsQ0FBVSxJQUFWLEtBQW1CLG1CQUFPLG1CQUFQLElBQThCLEtBQUssSUFBTCxDQUFVLElBQVYsS0FBbUIsS0FBbkIsRUFBMEI7QUFDeEYscUJBQUssWUFBTCxDQUFrQixjQUFsQixDQUFpQyxJQUFqQyxFQUR3RjthQUE1Rjs7QUFJQSxpQkFBSyxhQUFMLENBQW1CLElBQW5CLEVBVGU7O0FBV2YsaUJBQUssS0FBTCxDQUFXLElBQVgsRUFYZTs7Ozt3Q0FjSCxNQUFNO0FBQ2xCLGlCQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsRUFEa0I7Ozs7eUNBSUwsTUFBTTtBQUNuQixpQkFBSyxVQUFMLENBQWdCLElBQWhCLEVBRG1COzs7O3VDQUlSLE1BQU07O0FBRWpCLGdCQUFJLENBQUMsS0FBSyxZQUFMLENBQWtCLFlBQWxCLEVBQUQsSUFBcUMsS0FBSyxNQUFMLENBQVksSUFBWixLQUFxQixtQkFBTyxVQUFQLElBQXFCLEtBQUssTUFBTCxDQUFZLElBQVosS0FBcUIsTUFBckIsRUFBNkI7OztBQUc1RyxxQkFBSyxZQUFMLEdBQW9CLGFBQXBCLENBQWtDLFlBQWxDLEdBSDRHO2FBQWhIO0FBS0EsaUJBQUssYUFBTCxDQUFtQixJQUFuQixFQVBpQjs7Ozt1Q0FVTixNQUFNO0FBQ2pCLGdCQUFJLEtBQUssWUFBTCxDQUFrQixPQUFsQixFQUFKLEVBQWlDO0FBQzdCLHFCQUFLLFlBQUwsQ0FBa0IsZ0JBQWxCLENBQW1DLElBQW5DLEVBRDZCO2FBQWpDOztBQUlBLGlCQUFLLGFBQUwsQ0FBbUIsSUFBbkIsRUFMaUI7O0FBT2pCLGlCQUFLLEtBQUwsQ0FBVyxJQUFYLEVBUGlCOzs7O3lDQVVKO0FBQ2IsaUJBQUssWUFBTCxHQUFvQixhQUFwQixDQUFrQyxZQUFsQyxHQURhOzs7O3NDQUlILE1BQU07QUFDaEIsaUJBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxDQUFYOztBQURnQixnQkFHaEIsQ0FBSyxZQUFMLENBQWtCLGVBQWxCLENBQWtDLElBQWxDLEVBSGdCOztBQUtoQixpQkFBSyxLQUFMLENBQVcsS0FBSyxJQUFMLENBQVgsQ0FMZ0I7O0FBT2hCLGlCQUFLLEtBQUwsQ0FBVyxJQUFYLEVBUGdCOzs7OzRDQVVBLE1BQU07QUFDdEIsZ0JBQUksbUJBQUosRUFBeUIsQ0FBekIsRUFBNEIsRUFBNUIsRUFBZ0MsSUFBaEMsQ0FEc0I7QUFFdEIsa0NBQXNCLElBQUMsQ0FBSyxJQUFMLEtBQWMsS0FBZCxHQUF1QixLQUFLLFlBQUwsR0FBb0IsYUFBcEIsR0FBb0MsS0FBSyxZQUFMLEVBQTVELENBRkE7QUFHdEIsaUJBQUssSUFBSSxDQUFKLEVBQU8sS0FBSyxLQUFLLFlBQUwsQ0FBa0IsTUFBbEIsRUFBMEIsSUFBSSxFQUFKLEVBQVEsRUFBRSxDQUFGLEVBQUs7QUFDcEQsdUJBQU8sS0FBSyxZQUFMLENBQWtCLENBQWxCLENBQVAsQ0FEb0Q7QUFFcEQscUJBQUssd0JBQUwsQ0FBOEIsbUJBQTlCLEVBQW1ELG1CQUFTLFFBQVQsRUFBbUIsSUFBdEUsRUFBNEUsQ0FBNUUsRUFGb0Q7QUFHcEQsb0JBQUksS0FBSyxJQUFMLEVBQVc7QUFDWCx5QkFBSyxLQUFMLENBQVcsS0FBSyxJQUFMLENBQVgsQ0FEVztpQkFBZjthQUhKOzs7Ozs7O3dDQVVZLE1BQU07QUFDbEIsZ0JBQUksQ0FBSixFQUFPLEVBQVAsQ0FEa0I7O0FBR2xCLGlCQUFLLEtBQUwsQ0FBVyxLQUFLLFlBQUwsQ0FBWCxDQUhrQjs7QUFLbEIsZ0JBQUksS0FBSyxZQUFMLENBQWtCLE9BQWxCLEVBQUosRUFBaUM7QUFDN0IscUJBQUssWUFBTCxDQUFrQixpQkFBbEIsQ0FBb0MsSUFBcEMsRUFENkI7YUFBakM7O0FBSUEsaUJBQUssSUFBSSxDQUFKLEVBQU8sS0FBSyxLQUFLLEtBQUwsQ0FBVyxNQUFYLEVBQW1CLElBQUksRUFBSixFQUFRLEVBQUUsQ0FBRixFQUFLO0FBQzdDLHFCQUFLLEtBQUwsQ0FBVyxLQUFLLEtBQUwsQ0FBVyxDQUFYLENBQVgsRUFENkM7YUFBakQ7O0FBSUEsaUJBQUssS0FBTCxDQUFXLElBQVgsRUFia0I7Ozs7NENBZ0JGLE1BQU07QUFDdEIsaUJBQUssYUFBTCxDQUFtQixJQUFuQixFQURzQjs7OzsyQ0FJUCxNQUFNO0FBQ3JCLGlCQUFLLGFBQUwsQ0FBbUIsSUFBbkIsRUFEcUI7Ozs7dUNBSVYsTUFBTTtBQUNqQixpQkFBSyxVQUFMLENBQWdCLElBQWhCLEVBRGlCOzs7O3VDQUlOLE1BQU07QUFDakIsaUJBQUssVUFBTCxDQUFnQixJQUFoQixFQURpQjs7OztnREFJRyxNQUFNO0FBQzFCLGlCQUFLLGFBQUwsQ0FBbUIsSUFBbkIsRUFEMEI7Ozs7MENBSVosTUFBTTtBQUNwQixnQkFBSSxRQUFKLENBRG9COztBQUdwQixrQ0FBTyxLQUFLLFlBQUwsQ0FBa0IsT0FBbEIsTUFBK0IsS0FBSyxZQUFMLENBQWtCLFFBQWxCLEVBQS9CLEVBQTZELGlGQUFwRSxFQUhvQjs7QUFLcEIsdUJBQVcsSUFBSSxRQUFKLENBQWEsSUFBYixFQUFtQixJQUFuQixDQUFYLENBTG9CO0FBTXBCLHFCQUFTLEtBQVQsQ0FBZSxJQUFmLEVBTm9COzs7OytDQVNELE1BQU07QUFDekIsZ0JBQUksS0FBSyxNQUFMLEVBQWE7QUFDYix1QkFEYTthQUFqQjtBQUdBLGdCQUFJLEtBQUssV0FBTCxFQUFrQjtBQUNsQixxQkFBSyxLQUFMLENBQVcsS0FBSyxXQUFMLENBQVgsQ0FEa0I7QUFFbEIsdUJBRmtCO2FBQXRCOztBQUtBLGlCQUFLLGFBQUwsQ0FBbUIsSUFBbkIsRUFUeUI7Ozs7MENBWVgsTUFBTTtBQUNwQixpQkFBSyxzQkFBTCxDQUE0QixJQUE1QixFQURvQjs7OzsrQ0FJRCxNQUFNO0FBQ3pCLGlCQUFLLHNCQUFMLENBQTRCLElBQTVCLEVBRHlCOzs7O3dDQUliLE1BQU07QUFDbEIsZ0JBQUksUUFBUyxLQUFLLEVBQUwsSUFBVyxLQUFLLEtBQUwsQ0FETjtBQUVsQixpQkFBSyxLQUFMLENBQVcsS0FBWCxFQUZrQjs7Ozt1Q0FLUDs7Ozs7V0F0ZUU7RUFBbUIsb0JBQVUsT0FBVjs7Ozs7a0JBQW5CIiwiZmlsZSI6InJlZmVyZW5jZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBDb3B5cmlnaHQgKEMpIDIwMTUgWXVzdWtlIFN1enVraSA8dXRhdGFuZS50ZWFAZ21haWwuY29tPlxuXG4gIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcblxuICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbiAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0XG4gICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlXG4gICAgICBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuXG4gIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4gIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiAgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiAgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIDxDT1BZUklHSFQgSE9MREVSPiBCRSBMSUFCTEUgRk9SIEFOWVxuICBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFU1xuICAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7XG4gIExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORFxuICBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuICAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0ZcbiAgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5pbXBvcnQgeyBTeW50YXggfSBmcm9tICdlc3RyYXZlcnNlJztcbmltcG9ydCBlc3JlY3Vyc2UgZnJvbSAnZXNyZWN1cnNlJztcbmltcG9ydCBSZWZlcmVuY2UgZnJvbSAnLi9yZWZlcmVuY2UnO1xuaW1wb3J0IFZhcmlhYmxlIGZyb20gJy4vdmFyaWFibGUnO1xuaW1wb3J0IFBhdHRlcm5WaXNpdG9yIGZyb20gJy4vcGF0dGVybi12aXNpdG9yJztcbmltcG9ydCB7IFBhcmFtZXRlckRlZmluaXRpb24sIERlZmluaXRpb24gfSBmcm9tICcuL2RlZmluaXRpb24nO1xuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuXG5mdW5jdGlvbiB0cmF2ZXJzZUlkZW50aWZpZXJJblBhdHRlcm4ob3B0aW9ucywgcm9vdFBhdHRlcm4sIHJlZmVyZW5jZXIsIGNhbGxiYWNrKSB7XG4gICAgLy8gQ2FsbCB0aGUgY2FsbGJhY2sgYXQgbGVmdCBoYW5kIGlkZW50aWZpZXIgbm9kZXMsIGFuZCBDb2xsZWN0IHJpZ2h0IGhhbmQgbm9kZXMuXG4gICAgdmFyIHZpc2l0b3IgPSBuZXcgUGF0dGVyblZpc2l0b3Iob3B0aW9ucywgcm9vdFBhdHRlcm4sIGNhbGxiYWNrKTtcbiAgICB2aXNpdG9yLnZpc2l0KHJvb3RQYXR0ZXJuKTtcblxuICAgIC8vIFByb2Nlc3MgdGhlIHJpZ2h0IGhhbmQgbm9kZXMgcmVjdXJzaXZlbHkuXG4gICAgaWYgKHJlZmVyZW5jZXIgIT0gbnVsbCkge1xuICAgICAgICB2aXNpdG9yLnJpZ2h0SGFuZE5vZGVzLmZvckVhY2gocmVmZXJlbmNlci52aXNpdCwgcmVmZXJlbmNlcik7XG4gICAgfVxufVxuXG4vLyBJbXBvcnRpbmcgSW1wb3J0RGVjbGFyYXRpb24uXG4vLyBodHRwOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1tb2R1bGVkZWNsYXJhdGlvbmluc3RhbnRpYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9lc3RyZWUvZXN0cmVlL2Jsb2IvbWFzdGVyL2VzNi5tZCNpbXBvcnRkZWNsYXJhdGlvblxuLy8gRklYTUU6IE5vdywgd2UgZG9uJ3QgY3JlYXRlIG1vZHVsZSBlbnZpcm9ubWVudCwgYmVjYXVzZSB0aGUgY29udGV4dCBpc1xuLy8gaW1wbGVtZW50YXRpb24gZGVwZW5kZW50LlxuXG5jbGFzcyBJbXBvcnRlciBleHRlbmRzIGVzcmVjdXJzZS5WaXNpdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihkZWNsYXJhdGlvbiwgcmVmZXJlbmNlcikge1xuICAgICAgICBzdXBlcihudWxsLCByZWZlcmVuY2VyLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLmRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb247XG4gICAgICAgIHRoaXMucmVmZXJlbmNlciA9IHJlZmVyZW5jZXI7XG4gICAgfVxuXG4gICAgdmlzaXRJbXBvcnQoaWQsIHNwZWNpZmllcikge1xuICAgICAgICB0aGlzLnJlZmVyZW5jZXIudmlzaXRQYXR0ZXJuKGlkLCAocGF0dGVybikgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWZlcmVuY2VyLmN1cnJlbnRTY29wZSgpLl9fZGVmaW5lKHBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbmV3IERlZmluaXRpb24oXG4gICAgICAgICAgICAgICAgICAgIFZhcmlhYmxlLkltcG9ydEJpbmRpbmcsXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4sXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpZmllcixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWNsYXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgSW1wb3J0TmFtZXNwYWNlU3BlY2lmaWVyKG5vZGUpIHtcbiAgICAgICAgbGV0IGxvY2FsID0gKG5vZGUubG9jYWwgfHwgbm9kZS5pZCk7XG4gICAgICAgIGlmIChsb2NhbCkge1xuICAgICAgICAgICAgdGhpcy52aXNpdEltcG9ydChsb2NhbCwgbm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBJbXBvcnREZWZhdWx0U3BlY2lmaWVyKG5vZGUpIHtcbiAgICAgICAgbGV0IGxvY2FsID0gKG5vZGUubG9jYWwgfHwgbm9kZS5pZCk7XG4gICAgICAgIHRoaXMudmlzaXRJbXBvcnQobG9jYWwsIG5vZGUpO1xuICAgIH1cblxuICAgIEltcG9ydFNwZWNpZmllcihub2RlKSB7XG4gICAgICAgIGxldCBsb2NhbCA9IChub2RlLmxvY2FsIHx8IG5vZGUuaWQpO1xuICAgICAgICBpZiAobm9kZS5uYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2l0SW1wb3J0KG5vZGUubmFtZSwgbm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpc2l0SW1wb3J0KGxvY2FsLCBub2RlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gUmVmZXJlbmNpbmcgdmFyaWFibGVzIGFuZCBjcmVhdGluZyBiaW5kaW5ncy5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZmVyZW5jZXIgZXh0ZW5kcyBlc3JlY3Vyc2UuVmlzaXRvciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgc2NvcGVNYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKG51bGwsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLnNjb3BlTWFuYWdlciA9IHNjb3BlTWFuYWdlcjtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmlzSW5uZXJNZXRob2REZWZpbml0aW9uID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY3VycmVudFNjb3BlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZU1hbmFnZXIuX19jdXJyZW50U2NvcGU7XG4gICAgfVxuXG4gICAgY2xvc2Uobm9kZSkge1xuICAgICAgICB3aGlsZSAodGhpcy5jdXJyZW50U2NvcGUoKSAmJiBub2RlID09PSB0aGlzLmN1cnJlbnRTY29wZSgpLmJsb2NrKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlTWFuYWdlci5fX2N1cnJlbnRTY29wZSA9IHRoaXMuY3VycmVudFNjb3BlKCkuX19jbG9zZSh0aGlzLnNjb3BlTWFuYWdlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdXNoSW5uZXJNZXRob2REZWZpbml0aW9uKGlzSW5uZXJNZXRob2REZWZpbml0aW9uKSB7XG4gICAgICAgIHZhciBwcmV2aW91cyA9IHRoaXMuaXNJbm5lck1ldGhvZERlZmluaXRpb247XG4gICAgICAgIHRoaXMuaXNJbm5lck1ldGhvZERlZmluaXRpb24gPSBpc0lubmVyTWV0aG9kRGVmaW5pdGlvbjtcbiAgICAgICAgcmV0dXJuIHByZXZpb3VzO1xuICAgIH1cblxuICAgIHBvcElubmVyTWV0aG9kRGVmaW5pdGlvbihpc0lubmVyTWV0aG9kRGVmaW5pdGlvbikge1xuICAgICAgICB0aGlzLmlzSW5uZXJNZXRob2REZWZpbml0aW9uID0gaXNJbm5lck1ldGhvZERlZmluaXRpb247XG4gICAgfVxuXG4gICAgbWF0ZXJpYWxpemVURFpTY29wZShub2RlLCBpdGVyYXRpb25Ob2RlKSB7XG4gICAgICAgIC8vIGh0dHA6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXJ1bnRpbWUtc2VtYW50aWNzLWZvcmluLWRpdi1vZmV4cHJlc3Npb25ldmFsdWF0aW9uLWFic3RyYWN0LW9wZXJhdGlvblxuICAgICAgICAvLyBURFogc2NvcGUgaGlkZXMgdGhlIGRlY2xhcmF0aW9uJ3MgbmFtZXMuXG4gICAgICAgIHRoaXMuc2NvcGVNYW5hZ2VyLl9fbmVzdFREWlNjb3BlKG5vZGUsIGl0ZXJhdGlvbk5vZGUpO1xuICAgICAgICB0aGlzLnZpc2l0VmFyaWFibGVEZWNsYXJhdGlvbih0aGlzLmN1cnJlbnRTY29wZSgpLCBWYXJpYWJsZS5URFosIGl0ZXJhdGlvbk5vZGUubGVmdCwgMCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgbWF0ZXJpYWxpemVJdGVyYXRpb25TY29wZShub2RlKSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIGl0ZXJhdGlvbiBzY29wZSBmb3IgdXBwZXIgRm9ySW4vRm9yT2YgU3RhdGVtZW50cy5cbiAgICAgICAgdmFyIGxldE9yQ29uc3REZWNsO1xuICAgICAgICB0aGlzLnNjb3BlTWFuYWdlci5fX25lc3RGb3JTY29wZShub2RlKTtcbiAgICAgICAgbGV0T3JDb25zdERlY2wgPSBub2RlLmxlZnQ7XG4gICAgICAgIHRoaXMudmlzaXRWYXJpYWJsZURlY2xhcmF0aW9uKHRoaXMuY3VycmVudFNjb3BlKCksIFZhcmlhYmxlLlZhcmlhYmxlLCBsZXRPckNvbnN0RGVjbCwgMCk7XG4gICAgICAgIHRoaXMudmlzaXRQYXR0ZXJuKGxldE9yQ29uc3REZWNsLmRlY2xhcmF0aW9uc1swXS5pZCwgKHBhdHRlcm4pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjb3BlKCkuX19yZWZlcmVuY2luZyhwYXR0ZXJuLCBSZWZlcmVuY2UuV1JJVEUsIG5vZGUucmlnaHQsIG51bGwsIHRydWUsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWZlcmVuY2luZ0RlZmF1bHRWYWx1ZShwYXR0ZXJuLCBhc3NpZ25tZW50cywgbWF5YmVJbXBsaWNpdEdsb2JhbCwgaW5pdCkge1xuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXMuY3VycmVudFNjb3BlKCk7XG4gICAgICAgIGFzc2lnbm1lbnRzLmZvckVhY2goYXNzaWdubWVudCA9PiB7XG4gICAgICAgICAgICBzY29wZS5fX3JlZmVyZW5jaW5nKFxuICAgICAgICAgICAgICAgIHBhdHRlcm4sXG4gICAgICAgICAgICAgICAgUmVmZXJlbmNlLldSSVRFLFxuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQucmlnaHQsXG4gICAgICAgICAgICAgICAgbWF5YmVJbXBsaWNpdEdsb2JhbCxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuICE9PSBhc3NpZ25tZW50LmxlZnQsXG4gICAgICAgICAgICAgICAgaW5pdCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZpc2l0UGF0dGVybihub2RlLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7cHJvY2Vzc1JpZ2h0SGFuZE5vZGVzOiBmYWxzZX1cbiAgICAgICAgfVxuICAgICAgICB0cmF2ZXJzZUlkZW50aWZpZXJJblBhdHRlcm4oXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgb3B0aW9ucy5wcm9jZXNzUmlnaHRIYW5kTm9kZXMgPyB0aGlzIDogbnVsbCxcbiAgICAgICAgICAgIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICB2aXNpdEZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgdmFyIGksIGl6O1xuICAgICAgICAvLyBGdW5jdGlvbkRlY2xhcmF0aW9uIG5hbWUgaXMgZGVmaW5lZCBpbiB1cHBlciBzY29wZVxuICAgICAgICAvLyBOT1RFOiBOb3QgcmVmZXJyaW5nIHZhcmlhYmxlU2NvcGUuIEl0IGlzIGludGVuZGVkLlxuICAgICAgICAvLyBTaW5jZVxuICAgICAgICAvLyAgaW4gRVM1LCBGdW5jdGlvbkRlY2xhcmF0aW9uIHNob3VsZCBiZSBpbiBGdW5jdGlvbkJvZHkuXG4gICAgICAgIC8vICBpbiBFUzYsIEZ1bmN0aW9uRGVjbGFyYXRpb24gc2hvdWxkIGJlIGJsb2NrIHNjb3BlZC5cbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gU3ludGF4LkZ1bmN0aW9uRGVjbGFyYXRpb24pIHtcbiAgICAgICAgICAgIC8vIGlkIGlzIGRlZmluZWQgaW4gdXBwZXIgc2NvcGVcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjb3BlKCkuX19kZWZpbmUobm9kZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgbmV3IERlZmluaXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICBWYXJpYWJsZS5GdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZ1bmN0aW9uRXhwcmVzc2lvbiB3aXRoIG5hbWUgY3JlYXRlcyBpdHMgc3BlY2lhbCBzY29wZTtcbiAgICAgICAgLy8gRnVuY3Rpb25FeHByZXNzaW9uTmFtZVNjb3BlLlxuICAgICAgICBpZiAobm9kZS50eXBlID09PSBTeW50YXguRnVuY3Rpb25FeHByZXNzaW9uICYmIG5vZGUuaWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGVNYW5hZ2VyLl9fbmVzdEZ1bmN0aW9uRXhwcmVzc2lvbk5hbWVTY29wZShub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbnNpZGVyIHRoaXMgZnVuY3Rpb24gaXMgaW4gdGhlIE1ldGhvZERlZmluaXRpb24uXG4gICAgICAgIHRoaXMuc2NvcGVNYW5hZ2VyLl9fbmVzdEZ1bmN0aW9uU2NvcGUobm9kZSwgdGhpcy5pc0lubmVyTWV0aG9kRGVmaW5pdGlvbik7XG5cbiAgICAgICAgLy8gUHJvY2VzcyBwYXJhbWV0ZXIgZGVjbGFyYXRpb25zLlxuICAgICAgICBmb3IgKGkgPSAwLCBpeiA9IG5vZGUucGFyYW1zLmxlbmd0aDsgaSA8IGl6OyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMudmlzaXRQYXR0ZXJuKG5vZGUucGFyYW1zW2ldLCB7cHJvY2Vzc1JpZ2h0SGFuZE5vZGVzOiB0cnVlfSwgKHBhdHRlcm4sIGluZm8pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTY29wZSgpLl9fZGVmaW5lKHBhdHRlcm4sXG4gICAgICAgICAgICAgICAgICAgIG5ldyBQYXJhbWV0ZXJEZWZpbml0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5yZXN0XG4gICAgICAgICAgICAgICAgICAgICkpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZlcmVuY2luZ0RlZmF1bHRWYWx1ZShwYXR0ZXJuLCBpbmZvLmFzc2lnbm1lbnRzLCBudWxsLCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgdGhlcmUncyBhIHJlc3QgYXJndW1lbnQsIGFkZCB0aGF0XG4gICAgICAgIGlmIChub2RlLnJlc3QpIHtcbiAgICAgICAgICAgIHRoaXMudmlzaXRQYXR0ZXJuKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnUmVzdEVsZW1lbnQnLFxuICAgICAgICAgICAgICAgIGFyZ3VtZW50OiBub2RlLnJlc3RcbiAgICAgICAgICAgIH0sIChwYXR0ZXJuKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NvcGUoKS5fX2RlZmluZShwYXR0ZXJuLFxuICAgICAgICAgICAgICAgICAgICBuZXcgUGFyYW1ldGVyRGVmaW5pdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm4sXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJhbXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2tpcCBCbG9ja1N0YXRlbWVudCB0byBwcmV2ZW50IGNyZWF0aW5nIEJsb2NrU3RhdGVtZW50IHNjb3BlLlxuICAgICAgICBpZiAobm9kZS5ib2R5LnR5cGUgPT09IFN5bnRheC5CbG9ja1N0YXRlbWVudCkge1xuICAgICAgICAgICAgdGhpcy52aXNpdENoaWxkcmVuKG5vZGUuYm9keSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpc2l0KG5vZGUuYm9keSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsb3NlKG5vZGUpO1xuICAgIH1cblxuICAgIHZpc2l0Q2xhc3Mobm9kZSkge1xuICAgICAgICBpZiAobm9kZS50eXBlID09PSBTeW50YXguQ2xhc3NEZWNsYXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NvcGUoKS5fX2RlZmluZShub2RlLmlkLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRGVmaW5pdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIFZhcmlhYmxlLkNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgICAgICkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRklYTUU6IE1heWJlIGNvbnNpZGVyIFREWi5cbiAgICAgICAgdGhpcy52aXNpdChub2RlLnN1cGVyQ2xhc3MpO1xuXG4gICAgICAgIHRoaXMuc2NvcGVNYW5hZ2VyLl9fbmVzdENsYXNzU2NvcGUobm9kZSk7XG5cbiAgICAgICAgaWYgKG5vZGUuaWQpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjb3BlKCkuX19kZWZpbmUobm9kZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgbmV3IERlZmluaXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICBWYXJpYWJsZS5DbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVxuICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpc2l0KG5vZGUuYm9keSk7XG5cbiAgICAgICAgdGhpcy5jbG9zZShub2RlKTtcbiAgICB9XG5cbiAgICB2aXNpdFByb3BlcnR5KG5vZGUpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzLCBpc01ldGhvZERlZmluaXRpb247XG4gICAgICAgIGlmIChub2RlLmNvbXB1dGVkKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2l0KG5vZGUua2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzTWV0aG9kRGVmaW5pdGlvbiA9IG5vZGUudHlwZSA9PT0gU3ludGF4Lk1ldGhvZERlZmluaXRpb247XG4gICAgICAgIGlmIChpc01ldGhvZERlZmluaXRpb24pIHtcbiAgICAgICAgICAgIHByZXZpb3VzID0gdGhpcy5wdXNoSW5uZXJNZXRob2REZWZpbml0aW9uKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlzaXQobm9kZS52YWx1ZSk7XG4gICAgICAgIGlmIChpc01ldGhvZERlZmluaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucG9wSW5uZXJNZXRob2REZWZpbml0aW9uKHByZXZpb3VzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZpc2l0Rm9ySW4obm9kZSkge1xuICAgICAgICBpZiAobm9kZS5sZWZ0LnR5cGUgPT09IFN5bnRheC5WYXJpYWJsZURlY2xhcmF0aW9uICYmIG5vZGUubGVmdC5raW5kICE9PSAndmFyJykge1xuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbGl6ZVREWlNjb3BlKG5vZGUucmlnaHQsIG5vZGUpO1xuICAgICAgICAgICAgdGhpcy52aXNpdChub2RlLnJpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2Uobm9kZS5yaWdodCk7XG5cbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxpemVJdGVyYXRpb25TY29wZShub2RlKTtcbiAgICAgICAgICAgIHRoaXMudmlzaXQobm9kZS5ib2R5KTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2Uobm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0LnR5cGUgPT09IFN5bnRheC5WYXJpYWJsZURlY2xhcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpdChub2RlLmxlZnQpO1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaXRQYXR0ZXJuKG5vZGUubGVmdC5kZWNsYXJhdGlvbnNbMF0uaWQsIChwYXR0ZXJuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNjb3BlKCkuX19yZWZlcmVuY2luZyhwYXR0ZXJuLCBSZWZlcmVuY2UuV1JJVEUsIG5vZGUucmlnaHQsIG51bGwsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2l0UGF0dGVybihub2RlLmxlZnQsIHtwcm9jZXNzUmlnaHRIYW5kTm9kZXM6IHRydWV9LCAocGF0dGVybiwgaW5mbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF5YmVJbXBsaWNpdEdsb2JhbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50U2NvcGUoKS5pc1N0cmljdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF5YmVJbXBsaWNpdEdsb2JhbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZlcmVuY2luZ0RlZmF1bHRWYWx1ZShwYXR0ZXJuLCBpbmZvLmFzc2lnbm1lbnRzLCBtYXliZUltcGxpY2l0R2xvYmFsLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNjb3BlKCkuX19yZWZlcmVuY2luZyhwYXR0ZXJuLCBSZWZlcmVuY2UuV1JJVEUsIG5vZGUucmlnaHQsIG1heWJlSW1wbGljaXRHbG9iYWwsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmlzaXQobm9kZS5yaWdodCk7XG4gICAgICAgICAgICB0aGlzLnZpc2l0KG5vZGUuYm9keSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2aXNpdFZhcmlhYmxlRGVjbGFyYXRpb24odmFyaWFibGVUYXJnZXRTY29wZSwgdHlwZSwgbm9kZSwgaW5kZXgsIGZyb21URFopIHtcbiAgICAgICAgLy8gSWYgdGhpcyB3YXMgY2FsbGVkIHRvIGluaXRpYWxpemUgYSBURFogc2NvcGUsIHRoaXMgbmVlZHMgdG8gbWFrZSBkZWZpbml0aW9ucywgYnV0IGRvZXNuJ3QgbWFrZSByZWZlcmVuY2VzLlxuICAgICAgICB2YXIgZGVjbCwgaW5pdDtcblxuICAgICAgICBkZWNsID0gbm9kZS5kZWNsYXJhdGlvbnNbaW5kZXhdO1xuICAgICAgICBpbml0ID0gZGVjbC5pbml0O1xuICAgICAgICB0aGlzLnZpc2l0UGF0dGVybihkZWNsLmlkLCB7cHJvY2Vzc1JpZ2h0SGFuZE5vZGVzOiAhZnJvbVREWn0sIChwYXR0ZXJuLCBpbmZvKSA9PiB7XG4gICAgICAgICAgICB2YXJpYWJsZVRhcmdldFNjb3BlLl9fZGVmaW5lKHBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbmV3IERlZmluaXRpb24oXG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4sXG4gICAgICAgICAgICAgICAgICAgIGRlY2wsXG4gICAgICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBub2RlLmtpbmRcbiAgICAgICAgICAgICAgICApKTtcblxuICAgICAgICAgICAgaWYgKCFmcm9tVERaKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZlcmVuY2luZ0RlZmF1bHRWYWx1ZShwYXR0ZXJuLCBpbmZvLmFzc2lnbm1lbnRzLCBudWxsLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbml0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NvcGUoKS5fX3JlZmVyZW5jaW5nKHBhdHRlcm4sIFJlZmVyZW5jZS5XUklURSwgaW5pdCwgbnVsbCwgIWluZm8udG9wTGV2ZWwsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBBc3NpZ25tZW50RXhwcmVzc2lvbihub2RlKSB7XG4gICAgICAgIGlmIChQYXR0ZXJuVmlzaXRvci5pc1BhdHRlcm4obm9kZS5sZWZ0KSkge1xuICAgICAgICAgICAgaWYgKG5vZGUub3BlcmF0b3IgPT09ICc9Jykge1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaXRQYXR0ZXJuKG5vZGUubGVmdCwge3Byb2Nlc3NSaWdodEhhbmROb2RlczogdHJ1ZX0sIChwYXR0ZXJuLCBpbmZvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXliZUltcGxpY2l0R2xvYmFsID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRTY29wZSgpLmlzU3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXliZUltcGxpY2l0R2xvYmFsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogbm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZmVyZW5jaW5nRGVmYXVsdFZhbHVlKHBhdHRlcm4sIGluZm8uYXNzaWdubWVudHMsIG1heWJlSW1wbGljaXRHbG9iYWwsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NvcGUoKS5fX3JlZmVyZW5jaW5nKHBhdHRlcm4sIFJlZmVyZW5jZS5XUklURSwgbm9kZS5yaWdodCwgbWF5YmVJbXBsaWNpdEdsb2JhbCwgIWluZm8udG9wTGV2ZWwsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NvcGUoKS5fX3JlZmVyZW5jaW5nKG5vZGUubGVmdCwgUmVmZXJlbmNlLlJXLCBub2RlLnJpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlzaXQobm9kZS5sZWZ0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpc2l0KG5vZGUucmlnaHQpO1xuICAgIH1cblxuICAgIENhdGNoQ2xhdXNlKG5vZGUpIHtcbiAgICAgICAgdGhpcy5zY29wZU1hbmFnZXIuX19uZXN0Q2F0Y2hTY29wZShub2RlKTtcblxuICAgICAgICB0aGlzLnZpc2l0UGF0dGVybihub2RlLnBhcmFtLCB7cHJvY2Vzc1JpZ2h0SGFuZE5vZGVzOiB0cnVlfSwgKHBhdHRlcm4sIGluZm8pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjb3BlKCkuX19kZWZpbmUocGF0dGVybixcbiAgICAgICAgICAgICAgICBuZXcgRGVmaW5pdGlvbihcbiAgICAgICAgICAgICAgICAgICAgVmFyaWFibGUuQ2F0Y2hDbGF1c2UsXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucGFyYW0sXG4gICAgICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIHRoaXMucmVmZXJlbmNpbmdEZWZhdWx0VmFsdWUocGF0dGVybiwgaW5mby5hc3NpZ25tZW50cywgbnVsbCwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZpc2l0KG5vZGUuYm9keSk7XG5cbiAgICAgICAgdGhpcy5jbG9zZShub2RlKTtcbiAgICB9XG5cbiAgICBQcm9ncmFtKG5vZGUpIHtcbiAgICAgICAgdGhpcy5zY29wZU1hbmFnZXIuX19uZXN0R2xvYmFsU2NvcGUobm9kZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2NvcGVNYW5hZ2VyLl9faXNOb2RlanNTY29wZSgpKSB7XG4gICAgICAgICAgICAvLyBGb3JjZSBzdHJpY3RuZXNzIG9mIEdsb2JhbFNjb3BlIHRvIGZhbHNlIHdoZW4gdXNpbmcgbm9kZS5qcyBzY29wZS5cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjb3BlKCkuaXNTdHJpY3QgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2NvcGVNYW5hZ2VyLl9fbmVzdEZ1bmN0aW9uU2NvcGUobm9kZSwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2NvcGVNYW5hZ2VyLl9faXNFUzYoKSAmJiB0aGlzLnNjb3BlTWFuYWdlci5pc01vZHVsZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlTWFuYWdlci5fX25lc3RNb2R1bGVTY29wZShub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNjb3BlTWFuYWdlci5pc1N0cmljdE1vZGVTdXBwb3J0ZWQoKSAmJiB0aGlzLnNjb3BlTWFuYWdlci5pc0ltcGxpZWRTdHJpY3QoKSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NvcGUoKS5pc1N0cmljdCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZpc2l0Q2hpbGRyZW4obm9kZSk7XG4gICAgICAgIHRoaXMuY2xvc2Uobm9kZSk7XG4gICAgfVxuXG4gICAgSWRlbnRpZmllcihub2RlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNjb3BlKCkuX19yZWZlcmVuY2luZyhub2RlKTtcbiAgICB9XG5cbiAgICBVcGRhdGVFeHByZXNzaW9uKG5vZGUpIHtcbiAgICAgICAgaWYgKFBhdHRlcm5WaXNpdG9yLmlzUGF0dGVybihub2RlLmFyZ3VtZW50KSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NvcGUoKS5fX3JlZmVyZW5jaW5nKG5vZGUuYXJndW1lbnQsIFJlZmVyZW5jZS5SVywgbnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpc2l0Q2hpbGRyZW4obm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBNZW1iZXJFeHByZXNzaW9uKG5vZGUpIHtcbiAgICAgICAgdGhpcy52aXNpdChub2RlLm9iamVjdCk7XG4gICAgICAgIGlmIChub2RlLmNvbXB1dGVkKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2l0KG5vZGUucHJvcGVydHkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgUHJvcGVydHkobm9kZSkge1xuICAgICAgICB0aGlzLnZpc2l0UHJvcGVydHkobm9kZSk7XG4gICAgfVxuXG4gICAgTWV0aG9kRGVmaW5pdGlvbihub2RlKSB7XG4gICAgICAgIHRoaXMudmlzaXRQcm9wZXJ0eShub2RlKTtcbiAgICB9XG5cbiAgICBCcmVha1N0YXRlbWVudCgpIHt9XG5cbiAgICBDb250aW51ZVN0YXRlbWVudCgpIHt9XG5cbiAgICBMYWJlbGVkU3RhdGVtZW50KG5vZGUpIHtcbiAgICAgICAgdGhpcy52aXNpdChub2RlLmJvZHkpO1xuICAgIH1cblxuICAgIEZvclN0YXRlbWVudChub2RlKSB7XG4gICAgICAgIC8vIENyZWF0ZSBGb3JTdGF0ZW1lbnQgZGVjbGFyYXRpb24uXG4gICAgICAgIC8vIE5PVEU6IEluIEVTNiwgRm9yU3RhdGVtZW50IGR5bmFtaWNhbGx5IGdlbmVyYXRlc1xuICAgICAgICAvLyBwZXIgaXRlcmF0aW9uIGVudmlyb25tZW50LiBIb3dldmVyLCBlc2NvcGUgaXNcbiAgICAgICAgLy8gYSBzdGF0aWMgYW5hbHl6ZXIsIHdlIG9ubHkgZ2VuZXJhdGUgb25lIHNjb3BlIGZvciBGb3JTdGF0ZW1lbnQuXG4gICAgICAgIGlmIChub2RlLmluaXQgJiYgbm9kZS5pbml0LnR5cGUgPT09IFN5bnRheC5WYXJpYWJsZURlY2xhcmF0aW9uICYmIG5vZGUuaW5pdC5raW5kICE9PSAndmFyJykge1xuICAgICAgICAgICAgdGhpcy5zY29wZU1hbmFnZXIuX19uZXN0Rm9yU2NvcGUobm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZpc2l0Q2hpbGRyZW4obm9kZSk7XG5cbiAgICAgICAgdGhpcy5jbG9zZShub2RlKTtcbiAgICB9XG5cbiAgICBDbGFzc0V4cHJlc3Npb24obm9kZSkge1xuICAgICAgICB0aGlzLnZpc2l0Q2xhc3Mobm9kZSk7XG4gICAgfVxuXG4gICAgQ2xhc3NEZWNsYXJhdGlvbihub2RlKSB7XG4gICAgICAgIHRoaXMudmlzaXRDbGFzcyhub2RlKTtcbiAgICB9XG5cbiAgICBDYWxsRXhwcmVzc2lvbihub2RlKSB7XG4gICAgICAgIC8vIENoZWNrIHRoaXMgaXMgZGlyZWN0IGNhbGwgdG8gZXZhbFxuICAgICAgICBpZiAoIXRoaXMuc2NvcGVNYW5hZ2VyLl9faWdub3JlRXZhbCgpICYmIG5vZGUuY2FsbGVlLnR5cGUgPT09IFN5bnRheC5JZGVudGlmaWVyICYmIG5vZGUuY2FsbGVlLm5hbWUgPT09ICdldmFsJykge1xuICAgICAgICAgICAgLy8gTk9URTogVGhpcyBzaG91bGQgYmUgYHZhcmlhYmxlU2NvcGVgLiBTaW5jZSBkaXJlY3QgZXZhbCBjYWxsIGFsd2F5cyBjcmVhdGVzIExleGljYWwgZW52aXJvbm1lbnQgYW5kXG4gICAgICAgICAgICAvLyBsZXQgLyBjb25zdCBzaG91bGQgYmUgZW5jbG9zZWQgaW50byBpdC4gT25seSBWYXJpYWJsZURlY2xhcmF0aW9uIGFmZmVjdHMgb24gdGhlIGNhbGxlcidzIGVudmlyb25tZW50LlxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NvcGUoKS52YXJpYWJsZVNjb3BlLl9fZGV0ZWN0RXZhbCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlzaXRDaGlsZHJlbihub2RlKTtcbiAgICB9XG5cbiAgICBCbG9ja1N0YXRlbWVudChub2RlKSB7XG4gICAgICAgIGlmICh0aGlzLnNjb3BlTWFuYWdlci5fX2lzRVM2KCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGVNYW5hZ2VyLl9fbmVzdEJsb2NrU2NvcGUobm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZpc2l0Q2hpbGRyZW4obm9kZSk7XG5cbiAgICAgICAgdGhpcy5jbG9zZShub2RlKTtcbiAgICB9XG5cbiAgICBUaGlzRXhwcmVzc2lvbigpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NvcGUoKS52YXJpYWJsZVNjb3BlLl9fZGV0ZWN0VGhpcygpO1xuICAgIH1cblxuICAgIFdpdGhTdGF0ZW1lbnQobm9kZSkge1xuICAgICAgICB0aGlzLnZpc2l0KG5vZGUub2JqZWN0KTtcbiAgICAgICAgLy8gVGhlbiBuZXN0IHNjb3BlIGZvciBXaXRoU3RhdGVtZW50LlxuICAgICAgICB0aGlzLnNjb3BlTWFuYWdlci5fX25lc3RXaXRoU2NvcGUobm9kZSk7XG5cbiAgICAgICAgdGhpcy52aXNpdChub2RlLmJvZHkpO1xuXG4gICAgICAgIHRoaXMuY2xvc2Uobm9kZSk7XG4gICAgfVxuXG4gICAgVmFyaWFibGVEZWNsYXJhdGlvbihub2RlKSB7XG4gICAgICAgIHZhciB2YXJpYWJsZVRhcmdldFNjb3BlLCBpLCBpeiwgZGVjbDtcbiAgICAgICAgdmFyaWFibGVUYXJnZXRTY29wZSA9IChub2RlLmtpbmQgPT09ICd2YXInKSA/IHRoaXMuY3VycmVudFNjb3BlKCkudmFyaWFibGVTY29wZSA6IHRoaXMuY3VycmVudFNjb3BlKCk7XG4gICAgICAgIGZvciAoaSA9IDAsIGl6ID0gbm9kZS5kZWNsYXJhdGlvbnMubGVuZ3RoOyBpIDwgaXo7ICsraSkge1xuICAgICAgICAgICAgZGVjbCA9IG5vZGUuZGVjbGFyYXRpb25zW2ldO1xuICAgICAgICAgICAgdGhpcy52aXNpdFZhcmlhYmxlRGVjbGFyYXRpb24odmFyaWFibGVUYXJnZXRTY29wZSwgVmFyaWFibGUuVmFyaWFibGUsIG5vZGUsIGkpO1xuICAgICAgICAgICAgaWYgKGRlY2wuaW5pdCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaXQoZGVjbC5pbml0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNlYyAxMy4xMS44XG4gICAgU3dpdGNoU3RhdGVtZW50KG5vZGUpIHtcbiAgICAgICAgdmFyIGksIGl6O1xuXG4gICAgICAgIHRoaXMudmlzaXQobm9kZS5kaXNjcmltaW5hbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLnNjb3BlTWFuYWdlci5fX2lzRVM2KCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGVNYW5hZ2VyLl9fbmVzdFN3aXRjaFNjb3BlKG5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMCwgaXogPSBub2RlLmNhc2VzLmxlbmd0aDsgaSA8IGl6OyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMudmlzaXQobm9kZS5jYXNlc1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsb3NlKG5vZGUpO1xuICAgIH1cblxuICAgIEZ1bmN0aW9uRGVjbGFyYXRpb24obm9kZSkge1xuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb24obm9kZSk7XG4gICAgfVxuXG4gICAgRnVuY3Rpb25FeHByZXNzaW9uKG5vZGUpIHtcbiAgICAgICAgdGhpcy52aXNpdEZ1bmN0aW9uKG5vZGUpO1xuICAgIH1cblxuICAgIEZvck9mU3RhdGVtZW50KG5vZGUpIHtcbiAgICAgICAgdGhpcy52aXNpdEZvckluKG5vZGUpO1xuICAgIH1cblxuICAgIEZvckluU3RhdGVtZW50KG5vZGUpIHtcbiAgICAgICAgdGhpcy52aXNpdEZvckluKG5vZGUpO1xuICAgIH1cblxuICAgIEFycm93RnVuY3Rpb25FeHByZXNzaW9uKG5vZGUpIHtcbiAgICAgICAgdGhpcy52aXNpdEZ1bmN0aW9uKG5vZGUpO1xuICAgIH1cblxuICAgIEltcG9ydERlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICAgICAgdmFyIGltcG9ydGVyO1xuXG4gICAgICAgIGFzc2VydCh0aGlzLnNjb3BlTWFuYWdlci5fX2lzRVM2KCkgJiYgdGhpcy5zY29wZU1hbmFnZXIuaXNNb2R1bGUoKSwgJ0ltcG9ydERlY2xhcmF0aW9uIHNob3VsZCBhcHBlYXIgd2hlbiB0aGUgbW9kZSBpcyBFUzYgYW5kIGluIHRoZSBtb2R1bGUgY29udGV4dC4nKTtcblxuICAgICAgICBpbXBvcnRlciA9IG5ldyBJbXBvcnRlcihub2RlLCB0aGlzKTtcbiAgICAgICAgaW1wb3J0ZXIudmlzaXQobm9kZSk7XG4gICAgfVxuXG4gICAgdmlzaXRFeHBvcnREZWNsYXJhdGlvbihub2RlKSB7XG4gICAgICAgIGlmIChub2RlLnNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLmRlY2xhcmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2l0KG5vZGUuZGVjbGFyYXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52aXNpdENoaWxkcmVuKG5vZGUpO1xuICAgIH1cblxuICAgIEV4cG9ydERlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydERlY2xhcmF0aW9uKG5vZGUpO1xuICAgIH1cblxuICAgIEV4cG9ydE5hbWVkRGVjbGFyYXRpb24obm9kZSkge1xuICAgICAgICB0aGlzLnZpc2l0RXhwb3J0RGVjbGFyYXRpb24obm9kZSk7XG4gICAgfVxuXG4gICAgRXhwb3J0U3BlY2lmaWVyKG5vZGUpIHtcbiAgICAgICAgbGV0IGxvY2FsID0gKG5vZGUuaWQgfHwgbm9kZS5sb2NhbCk7XG4gICAgICAgIHRoaXMudmlzaXQobG9jYWwpO1xuICAgIH1cblxuICAgIE1ldGFQcm9wZXJ0eSgpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZy5cbiAgICB9XG59XG5cbi8qIHZpbTogc2V0IHN3PTQgdHM9NCBldCB0dz04MCA6ICovXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
