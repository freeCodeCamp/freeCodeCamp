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

import { Syntax } from 'estraverse';
import Map from 'es6-map';

import Reference from './reference';
import Variable from './variable';
import Definition from './definition';
import assert from 'assert';

function isStrictScope(scope, block, isMethodDefinition, useDirective) {
    var body, i, iz, stmt, expr;

    // When upper scope is exists and strict, inner scope is also strict.
    if (scope.upper && scope.upper.isStrict) {
        return true;
    }

    // ArrowFunctionExpression's scope is always strict scope.
    if (block.type === Syntax.ArrowFunctionExpression) {
        return true;
    }

    if (isMethodDefinition) {
        return true;
    }

    if (scope.type === 'class' || scope.type === 'module') {
        return true;
    }

    if (scope.type === 'block' || scope.type === 'switch') {
        return false;
    }

    if (scope.type === 'function') {
        if (block.type === Syntax.Program) {
            body = block;
        } else {
            body = block.body;
        }
    } else if (scope.type === 'global') {
        body = block;
    } else {
        return false;
    }

    // Search 'use strict' directive.
    if (useDirective) {
        for (i = 0, iz = body.body.length; i < iz; ++i) {
            stmt = body.body[i];
            if (stmt.type !== Syntax.DirectiveStatement) {
                break;
            }
            if (stmt.raw === '"use strict"' || stmt.raw === '\'use strict\'') {
                return true;
            }
        }
    } else {
        for (i = 0, iz = body.body.length; i < iz; ++i) {
            stmt = body.body[i];
            if (stmt.type !== Syntax.ExpressionStatement) {
                break;
            }
            expr = stmt.expression;
            if (expr.type !== Syntax.Literal || typeof expr.value !== 'string') {
                break;
            }
            if (expr.raw != null) {
                if (expr.raw === '"use strict"' || expr.raw === '\'use strict\'') {
                    return true;
                }
            } else {
                if (expr.value === 'use strict') {
                    return true;
                }
            }
        }
    }
    return false;
}

function registerScope(scopeManager, scope) {
    var scopes;

    scopeManager.scopes.push(scope);

    scopes = scopeManager.__nodeToScope.get(scope.block);
    if (scopes) {
        scopes.push(scope);
    } else {
        scopeManager.__nodeToScope.set(scope.block, [ scope ]);
    }
}

function shouldBeStatically(def) {
    return (
        (def.type === Variable.ClassName) ||
        (def.type === Variable.Variable && def.parent.kind !== 'var')
    );
}

/**
 * @class Scope
 */
export default class Scope {
    constructor(scopeManager, type, upperScope, block, isMethodDefinition) {
        /**
         * One of 'TDZ', 'module', 'block', 'switch', 'function', 'catch', 'with', 'function', 'class', 'global'.
         * @member {String} Scope#type
         */
        this.type = type;
         /**
         * The scoped {@link Variable}s of this scope, as <code>{ Variable.name
         * : Variable }</code>.
         * @member {Map} Scope#set
         */
        this.set = new Map();
        /**
         * The tainted variables of this scope, as <code>{ Variable.name :
         * boolean }</code>.
         * @member {Map} Scope#taints */
        this.taints = new Map();
        /**
         * Generally, through the lexical scoping of JS you can always know
         * which variable an identifier in the source code refers to. There are
         * a few exceptions to this rule. With 'global' and 'with' scopes you
         * can only decide at runtime which variable a reference refers to.
         * Moreover, if 'eval()' is used in a scope, it might introduce new
         * bindings in this or its parent scopes.
         * All those scopes are considered 'dynamic'.
         * @member {boolean} Scope#dynamic
         */
        this.dynamic = this.type === 'global' || this.type === 'with';
        /**
         * A reference to the scope-defining syntax node.
         * @member {esprima.Node} Scope#block
         */
        this.block = block;
         /**
         * The {@link Reference|references} that are not resolved with this scope.
         * @member {Reference[]} Scope#through
         */
        this.through = [];
         /**
         * The scoped {@link Variable}s of this scope. In the case of a
         * 'function' scope this includes the automatic argument <em>arguments</em> as
         * its first element, as well as all further formal arguments.
         * @member {Variable[]} Scope#variables
         */
        this.variables = [];
         /**
         * Any variable {@link Reference|reference} found in this scope. This
         * includes occurrences of local variables as well as variables from
         * parent scopes (including the global scope). For local variables
         * this also includes defining occurrences (like in a 'var' statement).
         * In a 'function' scope this does not include the occurrences of the
         * formal parameter in the parameter list.
         * @member {Reference[]} Scope#references
         */
        this.references = [];

         /**
         * For 'global' and 'function' scopes, this is a self-reference. For
         * other scope types this is the <em>variableScope</em> value of the
         * parent scope.
         * @member {Scope} Scope#variableScope
         */
        this.variableScope =
            (this.type === 'global' || this.type === 'function' || this.type === 'module') ? this : upperScope.variableScope;
         /**
         * Whether this scope is created by a FunctionExpression.
         * @member {boolean} Scope#functionExpressionScope
         */
        this.functionExpressionScope = false;
         /**
         * Whether this is a scope that contains an 'eval()' invocation.
         * @member {boolean} Scope#directCallToEvalScope
         */
        this.directCallToEvalScope = false;
         /**
         * @member {boolean} Scope#thisFound
         */
        this.thisFound = false;

        this.__left = [];

         /**
         * Reference to the parent {@link Scope|scope}.
         * @member {Scope} Scope#upper
         */
        this.upper = upperScope;
         /**
         * Whether 'use strict' is in effect in this scope.
         * @member {boolean} Scope#isStrict
         */
        this.isStrict = isStrictScope(this, block, isMethodDefinition, scopeManager.__useDirective());

         /**
         * List of nested {@link Scope}s.
         * @member {Scope[]} Scope#childScopes
         */
        this.childScopes = [];
        if (this.upper) {
            this.upper.childScopes.push(this);
        }

        this.__declaredVariables = scopeManager.__declaredVariables;

        registerScope(scopeManager, this);
    }

    __shouldStaticallyClose(scopeManager) {
        return (!this.dynamic || scopeManager.__isOptimistic());
    }

    __shouldStaticallyCloseForGlobal(ref) {
        // On global scope, let/const/class declarations should be resolved statically.
        var name = ref.identifier.name;
        if (!this.set.has(name)) {
            return false;
        }

        var variable = this.set.get(name);
        var defs = variable.defs;
        return defs.length > 0 && defs.every(shouldBeStatically);
    }

    __staticCloseRef(ref) {
        if (!this.__resolve(ref)) {
            this.__delegateToUpperScope(ref);
        }
    }

    __dynamicCloseRef(ref) {
        // notify all names are through to global
        let current = this;
        do {
            current.through.push(ref);
            current = current.upper;
        } while (current);
    }

    __globalCloseRef(ref) {
        // let/const/class declarations should be resolved statically.
        // others should be resolved dynamically.
        if (this.__shouldStaticallyCloseForGlobal(ref)) {
            this.__staticCloseRef(ref);
        } else {
            this.__dynamicCloseRef(ref);
        }
    }

    __close(scopeManager) {
        var closeRef;
        if (this.__shouldStaticallyClose(scopeManager)) {
            closeRef = this.__staticCloseRef;
        } else if (this.type !== 'global') {
            closeRef = this.__dynamicCloseRef;
        } else {
            closeRef = this.__globalCloseRef;
        }

        // Try Resolving all references in this scope.
        for (let i = 0, iz = this.__left.length; i < iz; ++i) {
            let ref = this.__left[i];
            closeRef.call(this, ref);
        }
        this.__left = null;

        return this.upper;
    }

    __resolve(ref) {
        var variable, name;
        name = ref.identifier.name;
        if (this.set.has(name)) {
            variable = this.set.get(name);
            variable.references.push(ref);
            variable.stack = variable.stack && ref.from.variableScope === this.variableScope;
            if (ref.tainted) {
                variable.tainted = true;
                this.taints.set(variable.name, true);
            }
            ref.resolved = variable;
            return true;
        }
        return false;
    }

    __delegateToUpperScope(ref) {
        if (this.upper) {
            this.upper.__left.push(ref);
        }
        this.through.push(ref);
    }

    __addDeclaredVariablesOfNode(variable, node) {
        if (node == null) {
            return;
        }

        var variables = this.__declaredVariables.get(node);
        if (variables == null) {
            variables = [];
            this.__declaredVariables.set(node, variables);
        }
        if (variables.indexOf(variable) === -1) {
            variables.push(variable);
        }
    }

    __defineGeneric(name, set, variables, node, def) {
        var variable;

        variable = set.get(name);
        if (!variable) {
            variable = new Variable(name, this);
            set.set(name, variable);
            variables.push(variable);
        }

        if (def) {
            variable.defs.push(def);
            if (def.type !== Variable.TDZ) {
                this.__addDeclaredVariablesOfNode(variable, def.node);
                this.__addDeclaredVariablesOfNode(variable, def.parent);
            }
        }
        if (node) {
            variable.identifiers.push(node);
        }
    }

    __define(node, def) {
        if (node && node.type === Syntax.Identifier) {
            this.__defineGeneric(
                    node.name,
                    this.set,
                    this.variables,
                    node,
                    def);
        }
    }

    __referencing(node, assign, writeExpr, maybeImplicitGlobal, partial, init) {
        // because Array element may be null
        if (!node || node.type !== Syntax.Identifier) {
            return;
        }

        // Specially handle like `this`.
        if (node.name === 'super') {
            return;
        }

        let ref = new Reference(node, this, assign || Reference.READ, writeExpr, maybeImplicitGlobal, !!partial, !!init);
        this.references.push(ref);
        this.__left.push(ref);
    }

    __detectEval() {
        var current;
        current = this;
        this.directCallToEvalScope = true;
        do {
            current.dynamic = true;
            current = current.upper;
        } while (current);
    }

    __detectThis() {
        this.thisFound = true;
    }

    __isClosed() {
        return this.__left === null;
    }

    /**
     * returns resolved {Reference}
     * @method Scope#resolve
     * @param {Esprima.Identifier} ident - identifier to be resolved.
     * @return {Reference}
     */
    resolve(ident) {
        var ref, i, iz;
        assert(this.__isClosed(), 'Scope should be closed.');
        assert(ident.type === Syntax.Identifier, 'Target should be identifier.');
        for (i = 0, iz = this.references.length; i < iz; ++i) {
            ref = this.references[i];
            if (ref.identifier === ident) {
                return ref;
            }
        }
        return null;
    }

    /**
     * returns this scope is static
     * @method Scope#isStatic
     * @return {boolean}
     */
    isStatic() {
        return !this.dynamic;
    }

    /**
     * returns this scope has materialized arguments
     * @method Scope#isArgumentsMaterialized
     * @return {boolean}
     */
    isArgumentsMaterialized() {
        return true;
    }

    /**
     * returns this scope has materialized `this` reference
     * @method Scope#isThisMaterialized
     * @return {boolean}
     */
    isThisMaterialized() {
        return true;
    }

    isUsedName(name) {
        if (this.set.has(name)) {
            return true;
        }
        for (var i = 0, iz = this.through.length; i < iz; ++i) {
            if (this.through[i].identifier.name === name) {
                return true;
            }
        }
        return false;
    }
}

export class GlobalScope extends Scope {
    constructor(scopeManager, block) {
        super(scopeManager, 'global', null, block, false);
        this.implicit = {
            set: new Map(),
            variables: [],
            /**
            * List of {@link Reference}s that are left to be resolved (i.e. which
            * need to be linked to the variable they refer to).
            * @member {Reference[]} Scope#implicit#left
            */
            left: []
        };
    }

    __close(scopeManager) {
        let implicit = [];
        for (let i = 0, iz = this.__left.length; i < iz; ++i) {
            let ref = this.__left[i];
            if (ref.__maybeImplicitGlobal && !this.set.has(ref.identifier.name)) {
                implicit.push(ref.__maybeImplicitGlobal);
            }
        }

        // create an implicit global variable from assignment expression
        for (let i = 0, iz = implicit.length; i < iz; ++i) {
            let info = implicit[i];
            this.__defineImplicit(info.pattern,
                    new Definition(
                        Variable.ImplicitGlobalVariable,
                        info.pattern,
                        info.node,
                        null,
                        null,
                        null
                    ));

        }

        this.implicit.left = this.__left;

        return super.__close(scopeManager);
    }

    __defineImplicit(node, def) {
        if (node && node.type === Syntax.Identifier) {
            this.__defineGeneric(
                    node.name,
                    this.implicit.set,
                    this.implicit.variables,
                    node,
                    def);
        }
    }
}

export class ModuleScope extends Scope {
    constructor(scopeManager, upperScope, block) {
        super(scopeManager, 'module', upperScope, block, false);
    }
}

export class FunctionExpressionNameScope extends Scope {
    constructor(scopeManager, upperScope, block) {
        super(scopeManager, 'function-expression-name', upperScope, block, false);
        this.__define(block.id,
                new Definition(
                    Variable.FunctionName,
                    block.id,
                    block,
                    null,
                    null,
                    null
                ));
        this.functionExpressionScope = true;
    }
}

export class CatchScope extends Scope {
    constructor(scopeManager, upperScope, block) {
        super(scopeManager, 'catch', upperScope, block, false);
    }
}

export class WithScope extends Scope {
    constructor(scopeManager, upperScope, block) {
        super(scopeManager, 'with', upperScope, block, false);
    }

    __close(scopeManager) {
        if (this.__shouldStaticallyClose(scopeManager)) {
            return super.__close(scopeManager);
        }

        for (let i = 0, iz = this.__left.length; i < iz; ++i) {
            let ref = this.__left[i];
            ref.tainted = true;
            this.__delegateToUpperScope(ref);
        }
        this.__left = null;

        return this.upper;
    }
}

export class TDZScope extends Scope {
    constructor(scopeManager, upperScope, block) {
        super(scopeManager, 'TDZ', upperScope, block, false);
    }
}

export class BlockScope extends Scope {
    constructor(scopeManager, upperScope, block) {
        super(scopeManager, 'block', upperScope, block, false);
    }
}

export class SwitchScope extends Scope {
    constructor(scopeManager, upperScope, block) {
        super(scopeManager, 'switch', upperScope, block, false);
    }
}

export class FunctionScope extends Scope {
    constructor(scopeManager, upperScope, block, isMethodDefinition) {
        super(scopeManager, 'function', upperScope, block, isMethodDefinition);

        // section 9.2.13, FunctionDeclarationInstantiation.
        // NOTE Arrow functions never have an arguments objects.
        if (this.block.type !== Syntax.ArrowFunctionExpression) {
            this.__defineArguments();
        }
    }

    isArgumentsMaterialized() {
        // TODO(Constellation)
        // We can more aggressive on this condition like this.
        //
        // function t() {
        //     // arguments of t is always hidden.
        //     function arguments() {
        //     }
        // }
        if (this.block.type === Syntax.ArrowFunctionExpression) {
            return false;
        }

        if (!this.isStatic()) {
            return true;
        }

        let variable = this.set.get('arguments');
        assert(variable, 'Always have arguments variable.');
        return variable.tainted || variable.references.length  !== 0;
    }

    isThisMaterialized() {
        if (!this.isStatic()) {
            return true;
        }
        return this.thisFound;
    }

    __defineArguments() {
        this.__defineGeneric(
                'arguments',
                this.set,
                this.variables,
                null,
                null);
        this.taints.set('arguments', true);
    }
}

export class ForScope extends Scope {
    constructor(scopeManager, upperScope, block) {
        super(scopeManager, 'for', upperScope, block, false);
    }
}

export class ClassScope extends Scope {
    constructor(scopeManager, upperScope, block) {
        super(scopeManager, 'class', upperScope, block, false);
    }
}

/* vim: set sw=4 ts=4 et tw=80 : */
