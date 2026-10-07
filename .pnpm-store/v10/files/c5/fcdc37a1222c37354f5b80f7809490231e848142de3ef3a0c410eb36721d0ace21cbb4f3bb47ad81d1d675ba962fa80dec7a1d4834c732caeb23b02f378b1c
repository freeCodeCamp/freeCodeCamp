'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var estraverse = require('estraverse');
var esrecurse = require('esrecurse');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var estraverse__default = /*#__PURE__*/_interopDefaultLegacy(estraverse);
var esrecurse__default = /*#__PURE__*/_interopDefaultLegacy(esrecurse);

/**
 * @fileoverview Assertion utilities.
 * @author Nicholas C. Zakas
 */

/**
 * Throws an error if the given condition is not truthy.
 * @param {boolean} condition The condition to check.
 * @param {string} message The message to include with the error.
 * @returns {void}
 * @throws {Error} When the condition is not truthy.
 */
function assert(condition, message = "Assertion failed.") {
    if (!condition) {
        throw new Error(message);
    }
}

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

const READ = 0x1;
const WRITE = 0x2;
const RW = READ | WRITE;

/**
 * A Reference represents a single occurrence of an identifier in code.
 * @constructor Reference
 */
class Reference {
    constructor(ident, scope, flag, writeExpr, maybeImplicitGlobal, partial, init) {

        /**
         * Identifier syntax node.
         * @member {espreeIdentifier} Reference#identifier
         */
        this.identifier = ident;

        /**
         * Reference to the enclosing Scope.
         * @member {Scope} Reference#from
         */
        this.from = scope;

        /**
         * Whether the reference comes from a dynamic scope (such as 'eval',
         * 'with', etc.), and may be trapped by dynamic scopes.
         * @member {boolean} Reference#tainted
         */
        this.tainted = false;

        /**
         * The variable this reference is resolved with.
         * @member {Variable} Reference#resolved
         */
        this.resolved = null;

        /**
         * The read-write mode of the reference. (Value is one of {@link
         * Reference.READ}, {@link Reference.RW}, {@link Reference.WRITE}).
         * @member {number} Reference#flag
         * @private
         */
        this.flag = flag;
        if (this.isWrite()) {

            /**
             * If reference is writeable, this is the tree being written to it.
             * @member {espreeNode} Reference#writeExpr
             */
            this.writeExpr = writeExpr;

            /**
             * Whether the Reference might refer to a partial value of writeExpr.
             * @member {boolean} Reference#partial
             */
            this.partial = partial;

            /**
             * Whether the Reference is to write of initialization.
             * @member {boolean} Reference#init
             */
            this.init = init;
        }
        this.__maybeImplicitGlobal = maybeImplicitGlobal;
    }

    /**
     * Whether the reference is static.
     * @function Reference#isStatic
     * @returns {boolean} static
     */
    isStatic() {
        return !this.tainted && this.resolved && this.resolved.scope.isStatic();
    }

    /**
     * Whether the reference is writeable.
     * @function Reference#isWrite
     * @returns {boolean} write
     */
    isWrite() {
        return !!(this.flag & Reference.WRITE);
    }

    /**
     * Whether the reference is readable.
     * @function Reference#isRead
     * @returns {boolean} read
     */
    isRead() {
        return !!(this.flag & Reference.READ);
    }

    /**
     * Whether the reference is read-only.
     * @function Reference#isReadOnly
     * @returns {boolean} read only
     */
    isReadOnly() {
        return this.flag === Reference.READ;
    }

    /**
     * Whether the reference is write-only.
     * @function Reference#isWriteOnly
     * @returns {boolean} write only
     */
    isWriteOnly() {
        return this.flag === Reference.WRITE;
    }

    /**
     * Whether the reference is read-write.
     * @function Reference#isReadWrite
     * @returns {boolean} read write
     */
    isReadWrite() {
        return this.flag === Reference.RW;
    }
}

/**
 * @constant Reference.READ
 * @private
 */
Reference.READ = READ;

/**
 * @constant Reference.WRITE
 * @private
 */
Reference.WRITE = WRITE;

/**
 * @constant Reference.RW
 * @private
 */
Reference.RW = RW;

/* vim: set sw=4 ts=4 et tw=80 : */

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

/**
 * A Variable represents a locally scoped identifier. These include arguments to
 * functions.
 * @constructor Variable
 */
class Variable {
    constructor(name, scope) {

        /**
         * The variable name, as given in the source code.
         * @member {string} Variable#name
         */
        this.name = name;

        /**
         * List of defining occurrences of this variable (like in 'var ...'
         * statements or as parameter), as AST nodes.
         * @member {espree.Identifier[]} Variable#identifiers
         */
        this.identifiers = [];

        /**
         * List of {@link Reference|references} of this variable (excluding parameter entries)
         * in its defining scope and all nested scopes. For defining
         * occurrences only see {@link Variable#defs}.
         * @member {Reference[]} Variable#references
         */
        this.references = [];

        /**
         * List of defining occurrences of this variable (like in 'var ...'
         * statements or as parameter), as custom objects.
         * @member {Definition[]} Variable#defs
         */
        this.defs = [];

        this.tainted = false;

        /**
         * Whether this is a stack variable.
         * @member {boolean} Variable#stack
         */
        this.stack = true;

        /**
         * Reference to the enclosing Scope.
         * @member {Scope} Variable#scope
         */
        this.scope = scope;
    }
}

Variable.CatchClause = "CatchClause";
Variable.Parameter = "Parameter";
Variable.FunctionName = "FunctionName";
Variable.ClassName = "ClassName";
Variable.Variable = "Variable";
Variable.ImportBinding = "ImportBinding";
Variable.ImplicitGlobalVariable = "ImplicitGlobalVariable";

/* vim: set sw=4 ts=4 et tw=80 : */

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

/**
 * @constructor Definition
 */
class Definition {
    constructor(type, name, node, parent, index, kind) {

        /**
         * @member {string} Definition#type - type of the occurrence (e.g. "Parameter", "Variable", ...).
         */
        this.type = type;

        /**
         * @member {espree.Identifier} Definition#name - the identifier AST node of the occurrence.
         */
        this.name = name;

        /**
         * @member {espree.Node} Definition#node - the enclosing node of the identifier.
         */
        this.node = node;

        /**
         * @member {espree.Node?} Definition#parent - the enclosing statement node of the identifier.
         */
        this.parent = parent;

        /**
         * @member {number?} Definition#index - the index in the declaration statement.
         */
        this.index = index;

        /**
         * @member {string?} Definition#kind - the kind of the declaration statement.
         */
        this.kind = kind;
    }
}

/**
 * @constructor ParameterDefinition
 */
class ParameterDefinition extends Definition {
    constructor(name, node, index, rest) {
        super(Variable.Parameter, name, node, null, index, null);

        /**
         * Whether the parameter definition is a part of a rest parameter.
         * @member {boolean} ParameterDefinition#rest
         */
        this.rest = rest;
    }
}

/* vim: set sw=4 ts=4 et tw=80 : */

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

const { Syntax: Syntax$2 } = estraverse__default["default"];

/**
 * Test if scope is struct
 * @param {Scope} scope scope
 * @param {Block} block block
 * @param {boolean} isMethodDefinition is method definition
 * @returns {boolean} is strict scope
 */
function isStrictScope(scope, block, isMethodDefinition) {
    let body;

    // When upper scope is exists and strict, inner scope is also strict.
    if (scope.upper && scope.upper.isStrict) {
        return true;
    }

    if (isMethodDefinition) {
        return true;
    }

    if (scope.type === "class" || scope.type === "module") {
        return true;
    }

    if (scope.type === "block" || scope.type === "switch") {
        return false;
    }

    if (scope.type === "function") {
        if (block.type === Syntax$2.ArrowFunctionExpression && block.body.type !== Syntax$2.BlockStatement) {
            return false;
        }

        if (block.type === Syntax$2.Program) {
            body = block;
        } else {
            body = block.body;
        }

        if (!body) {
            return false;
        }
    } else if (scope.type === "global") {
        body = block;
    } else {
        return false;
    }

    // Search for a 'use strict' directive.
    for (let i = 0, iz = body.body.length; i < iz; ++i) {
        const stmt = body.body[i];

        /*
         * Check if the current statement is a directive.
         * If it isn't, then we're past the directive prologue
         * so stop the search because directives cannot
         * appear after this point.
         *
         * Some parsers set `directive:null` on non-directive
         * statements, so the `typeof` check is safer than
         * checking for property existence.
         */
        if (typeof stmt.directive !== "string") {
            break;
        }

        if (stmt.directive === "use strict") {
            return true;
        }
    }

    return false;
}

/**
 * Register scope
 * @param {ScopeManager} scopeManager scope manager
 * @param {Scope} scope scope
 * @returns {void}
 */
function registerScope(scopeManager, scope) {
    scopeManager.scopes.push(scope);

    const scopes = scopeManager.__nodeToScope.get(scope.block);

    if (scopes) {
        scopes.push(scope);
    } else {
        scopeManager.__nodeToScope.set(scope.block, [scope]);
    }
}

/**
 * Should be statically
 * @param {Object} def def
 * @returns {boolean} should be statically
 */
function shouldBeStatically(def) {
    return (
        (def.type === Variable.ClassName) ||
        (def.type === Variable.Variable && def.parent.kind !== "var")
    );
}

/**
 * @constructor Scope
 */
class Scope {
    constructor(scopeManager, type, upperScope, block, isMethodDefinition) {

        /**
         * One of "global", "module", "function", "function-expression-name", "block", "switch", "catch", "with", "for",
         * "class", "class-field-initializer", "class-static-block".
         * @member {string} Scope#type
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
         *  @member {Map} Scope#taints
         */
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
        this.dynamic = this.type === "global" || this.type === "with";

        /**
         * A reference to the scope-defining syntax node.
         * @member {espree.Node} Scope#block
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
            this.type === "global" ||
            this.type === "module" ||
            this.type === "function" ||
            this.type === "class-field-initializer" ||
            this.type === "class-static-block"
                ? this
                : upperScope.variableScope;

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
        this.isStrict = scopeManager.isStrictModeSupported()
            ? isStrictScope(this, block, isMethodDefinition)
            : false;

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
        const name = ref.identifier.name;

        if (!this.set.has(name)) {
            return false;
        }

        const variable = this.set.get(name);
        const defs = variable.defs;

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
        let closeRef;

        if (this.__shouldStaticallyClose(scopeManager)) {
            closeRef = this.__staticCloseRef;
        } else if (this.type !== "global") {
            closeRef = this.__dynamicCloseRef;
        } else {
            closeRef = this.__globalCloseRef;
        }

        // Try Resolving all references in this scope.
        for (let i = 0, iz = this.__left.length; i < iz; ++i) {
            const ref = this.__left[i];

            closeRef.call(this, ref);
        }
        this.__left = null;

        return this.upper;
    }

    // To override by function scopes.
    // References in default parameters isn't resolved to variables which are in their function body.
    __isValidResolution(ref, variable) { // eslint-disable-line class-methods-use-this, no-unused-vars  -- Desired as instance method with signature
        return true;
    }

    __resolve(ref) {
        const name = ref.identifier.name;

        if (!this.set.has(name)) {
            return false;
        }
        const variable = this.set.get(name);

        if (!this.__isValidResolution(ref, variable)) {
            return false;
        }
        variable.references.push(ref);
        variable.stack = variable.stack && ref.from.variableScope === this.variableScope;
        if (ref.tainted) {
            variable.tainted = true;
            this.taints.set(variable.name, true);
        }
        ref.resolved = variable;

        return true;
    }

    __delegateToUpperScope(ref) {
        if (this.upper) {
            this.upper.__left.push(ref);
        }
        this.through.push(ref);
    }

    __addDeclaredVariablesOfNode(variable, node) {
        if (node === null || node === void 0) {
            return;
        }

        let variables = this.__declaredVariables.get(node);

        if (variables === null || variables === void 0) {
            variables = [];
            this.__declaredVariables.set(node, variables);
        }
        if (!variables.includes(variable)) {
            variables.push(variable);
        }
    }

    __defineGeneric(name, set, variables, node, def) {
        let variable;

        variable = set.get(name);
        if (!variable) {
            variable = new Variable(name, this);
            set.set(name, variable);
            variables.push(variable);
        }

        if (def) {
            variable.defs.push(def);
            this.__addDeclaredVariablesOfNode(variable, def.node);
            this.__addDeclaredVariablesOfNode(variable, def.parent);
        }
        if (node) {
            variable.identifiers.push(node);
        }
    }

    __define(node, def) {
        if (node && node.type === Syntax$2.Identifier) {
            this.__defineGeneric(
                node.name,
                this.set,
                this.variables,
                node,
                def
            );
        }
    }

    __referencing(node, assign, writeExpr, maybeImplicitGlobal, partial, init) {

        // because Array element may be null
        if (!node || (node.type !== Syntax$2.Identifier && node.type !== "JSXIdentifier")) {
            return;
        }

        // Specially handle like `this`.
        if (node.name === "super") {
            return;
        }

        const ref = new Reference(node, this, assign || Reference.READ, writeExpr, maybeImplicitGlobal, !!partial, !!init);

        this.references.push(ref);
        this.__left.push(ref);
    }

    __detectEval() {
        let current = this;

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
     * @function Scope#resolve
     * @param {Espree.Identifier} ident identifier to be resolved.
     * @returns {Reference} reference
     */
    resolve(ident) {
        let ref, i, iz;

        assert(this.__isClosed(), "Scope should be closed.");
        assert(ident.type === Syntax$2.Identifier, "Target should be identifier.");
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
     * @function Scope#isStatic
     * @returns {boolean} static
     */
    isStatic() {
        return !this.dynamic;
    }

    /**
     * returns this scope has materialized arguments
     * @function Scope#isArgumentsMaterialized
     * @returns {boolean} arguemnts materialized
     */
    isArgumentsMaterialized() { // eslint-disable-line class-methods-use-this -- Desired as instance method
        return true;
    }

    /**
     * returns this scope has materialized `this` reference
     * @function Scope#isThisMaterialized
     * @returns {boolean} this materialized
     */
    isThisMaterialized() { // eslint-disable-line class-methods-use-this -- Desired as instance method
        return true;
    }

    isUsedName(name) {
        if (this.set.has(name)) {
            return true;
        }
        for (let i = 0, iz = this.through.length; i < iz; ++i) {
            if (this.through[i].identifier.name === name) {
                return true;
            }
        }
        return false;
    }
}

/**
 * Global scope.
 */
class GlobalScope extends Scope {
    constructor(scopeManager, block) {
        super(scopeManager, "global", null, block, false);
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
        const implicit = [];

        for (let i = 0, iz = this.__left.length; i < iz; ++i) {
            const ref = this.__left[i];

            if (ref.__maybeImplicitGlobal && !this.set.has(ref.identifier.name)) {
                implicit.push(ref.__maybeImplicitGlobal);
            }
        }

        // create an implicit global variable from assignment expression
        for (let i = 0, iz = implicit.length; i < iz; ++i) {
            const info = implicit[i];

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
        if (node && node.type === Syntax$2.Identifier) {
            this.__defineGeneric(
                node.name,
                this.implicit.set,
                this.implicit.variables,
                node,
                def
            );
        }
    }
}

/**
 * Module scope.
 */
class ModuleScope extends Scope {
    constructor(scopeManager, upperScope, block) {
        super(scopeManager, "module", upperScope, block, false);
    }
}

/**
 * Function expression name scope.
 */
class FunctionExpressionNameScope extends Scope {
    constructor(scopeManager, upperScope, block) {
        super(scopeManager, "function-expression-name", upperScope, block, false);
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

/**
 * Catch scope.
 */
class CatchScope extends Scope {
    constructor(scopeManager, upperScope, block) {
        super(scopeManager, "catch", upperScope, block, false);
    }
}

/**
 * With statement scope.
 */
class WithScope extends Scope {
    constructor(scopeManager, upperScope, block) {
        super(scopeManager, "with", upperScope, block, false);
    }

    __close(scopeManager) {
        if (this.__shouldStaticallyClose(scopeManager)) {
            return super.__close(scopeManager);
        }

        for (let i = 0, iz = this.__left.length; i < iz; ++i) {
            const ref = this.__left[i];

            ref.tainted = true;
            this.__delegateToUpperScope(ref);
        }
        this.__left = null;

        return this.upper;
    }
}

/**
 * Block scope.
 */
class BlockScope extends Scope {
    constructor(scopeManager, upperScope, block) {
        super(scopeManager, "block", upperScope, block, false);
    }
}

/**
 * Switch scope.
 */
class SwitchScope extends Scope {
    constructor(scopeManager, upperScope, block) {
        super(scopeManager, "switch", upperScope, block, false);
    }
}

/**
 * Function scope.
 */
class FunctionScope extends Scope {
    constructor(scopeManager, upperScope, block, isMethodDefinition) {
        super(scopeManager, "function", upperScope, block, isMethodDefinition);

        // section 9.2.13, FunctionDeclarationInstantiation.
        // NOTE Arrow functions never have an arguments objects.
        if (this.block.type !== Syntax$2.ArrowFunctionExpression) {
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
        if (this.block.type === Syntax$2.ArrowFunctionExpression) {
            return false;
        }

        if (!this.isStatic()) {
            return true;
        }

        const variable = this.set.get("arguments");

        assert(variable, "Always have arguments variable.");
        return variable.tainted || variable.references.length !== 0;
    }

    isThisMaterialized() {
        if (!this.isStatic()) {
            return true;
        }
        return this.thisFound;
    }

    __defineArguments() {
        this.__defineGeneric(
            "arguments",
            this.set,
            this.variables,
            null,
            null
        );
        this.taints.set("arguments", true);
    }

    // References in default parameters isn't resolved to variables which are in their function body.
    //     const x = 1
    //     function f(a = x) { // This `x` is resolved to the `x` in the outer scope.
    //         const x = 2
    //         console.log(a)
    //     }
    __isValidResolution(ref, variable) {

        // If `options.nodejsScope` is true, `this.block` becomes a Program node.
        if (this.block.type === "Program") {
            return true;
        }

        const bodyStart = this.block.body.range[0];

        // It's invalid resolution in the following case:
        return !(
            variable.scope === this &&
            ref.identifier.range[0] < bodyStart && // the reference is in the parameter part.
            variable.defs.every(d => d.name.range[0] >= bodyStart) // the variable is in the body.
        );
    }
}

/**
 * Scope of for, for-in, and for-of statements.
 */
class ForScope extends Scope {
    constructor(scopeManager, upperScope, block) {
        super(scopeManager, "for", upperScope, block, false);
    }
}

/**
 * Class scope.
 */
class ClassScope extends Scope {
    constructor(scopeManager, upperScope, block) {
        super(scopeManager, "class", upperScope, block, false);
    }
}

/**
 * Class field initializer scope.
 */
class ClassFieldInitializerScope extends Scope {
    constructor(scopeManager, upperScope, block) {
        super(scopeManager, "class-field-initializer", upperScope, block, true);
    }
}

/**
 * Class static block scope.
 */
class ClassStaticBlockScope extends Scope {
    constructor(scopeManager, upperScope, block) {
        super(scopeManager, "class-static-block", upperScope, block, true);
    }
}

/* vim: set sw=4 ts=4 et tw=80 : */

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

/**
 * @constructor ScopeManager
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

    __isOptimistic() {
        return this.__options.optimistic;
    }

    __ignoreEval() {
        return this.__options.ignoreEval;
    }

    __isJSXEnabled() {
        return this.__options.jsx === true;
    }

    isGlobalReturn() {
        return this.__options.nodejsScope || this.__options.sourceType === "commonjs";
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
     * @param {Espree.Node} node a node to get.
     * @returns {Variable[]} variables that declared by the node.
     */
    getDeclaredVariables(node) {
        return this.__declaredVariables.get(node) || [];
    }

    /**
     * acquire scope from node.
     * @function ScopeManager#acquire
     * @param {Espree.Node} node node for the acquired scope.
     * @param {?boolean} [inner=false] look up the most inner scope, default value is false.
     * @returns {Scope?} Scope from node
     */
    acquire(node, inner) {

        /**
         * predicate
         * @param {Scope} testScope scope to test
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
     * @function ScopeManager#acquireAll
     * @param {Espree.Node} node node for the acquired scope.
     * @returns {Scopes?} Scope array
     */
    acquireAll(node) {
        return this.__get(node);
    }

    /**
     * release the node.
     * @function ScopeManager#release
     * @param {Espree.Node} node releasing node.
     * @param {?boolean} [inner=false] look up the most inner scope, default value is false.
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

    attach() { } // eslint-disable-line class-methods-use-this -- Desired as instance method

    detach() { } // eslint-disable-line class-methods-use-this -- Desired as instance method

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

    __nestClassFieldInitializerScope(node) {
        return this.__nestScope(new ClassFieldInitializerScope(this, this.__currentScope, node));
    }

    __nestClassStaticBlockScope(node) {
        return this.__nestScope(new ClassStaticBlockScope(this, this.__currentScope, node));
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

/* vim: set sw=4 ts=4 et tw=80 : */

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

const { Syntax: Syntax$1 } = estraverse__default["default"];

/**
 * Get last array element
 * @param {Array} xs array
 * @returns {any} Last elment
 */
function getLast(xs) {
    return xs.at(-1) || null;
}

/**
 * Visitor for destructuring patterns.
 */
class PatternVisitor extends esrecurse__default["default"].Visitor {
    static isPattern(node) {
        const nodeType = node.type;

        return (
            nodeType === Syntax$1.Identifier ||
            nodeType === Syntax$1.ObjectPattern ||
            nodeType === Syntax$1.ArrayPattern ||
            nodeType === Syntax$1.SpreadElement ||
            nodeType === Syntax$1.RestElement ||
            nodeType === Syntax$1.AssignmentPattern
        );
    }

    constructor(options, rootPattern, callback) {
        super(null, options);
        this.rootPattern = rootPattern;
        this.callback = callback;
        this.assignments = [];
        this.rightHandNodes = [];
        this.restElements = [];
    }

    Identifier(pattern) {
        const lastRestElement = getLast(this.restElements);

        this.callback(pattern, {
            topLevel: pattern === this.rootPattern,
            rest: lastRestElement !== null && lastRestElement !== void 0 && lastRestElement.argument === pattern,
            assignments: this.assignments
        });
    }

    Property(property) {

        // Computed property's key is a right hand node.
        if (property.computed) {
            this.rightHandNodes.push(property.key);
        }

        // If it's shorthand, its key is same as its value.
        // If it's shorthand and has its default value, its key is same as its value.left (the value is AssignmentPattern).
        // If it's not shorthand, the name of new variable is its value's.
        this.visit(property.value);
    }

    ArrayPattern(pattern) {
        for (let i = 0, iz = pattern.elements.length; i < iz; ++i) {
            const element = pattern.elements[i];

            this.visit(element);
        }
    }

    AssignmentPattern(pattern) {
        this.assignments.push(pattern);
        this.visit(pattern.left);
        this.rightHandNodes.push(pattern.right);
        this.assignments.pop();
    }

    RestElement(pattern) {
        this.restElements.push(pattern);
        this.visit(pattern.argument);
        this.restElements.pop();
    }

    MemberExpression(node) {

        // Computed property's key is a right hand node.
        if (node.computed) {
            this.rightHandNodes.push(node.property);
        }

        // the object is only read, write to its property.
        this.rightHandNodes.push(node.object);
    }

    //
    // ForInStatement.left and AssignmentExpression.left are LeftHandSideExpression.
    // By spec, LeftHandSideExpression is Pattern or MemberExpression.
    //   (see also: https://github.com/estree/estree/pull/20#issuecomment-74584758)
    // But espree 2.0 parses to ArrayExpression, ObjectExpression, etc...
    //

    SpreadElement(node) {
        this.visit(node.argument);
    }

    ArrayExpression(node) {
        node.elements.forEach(this.visit, this);
    }

    AssignmentExpression(node) {
        this.assignments.push(node);
        this.visit(node.left);
        this.rightHandNodes.push(node.right);
        this.assignments.pop();
    }

    CallExpression(node) {

        // arguments are right hand nodes.
        node.arguments.forEach(a => {
            this.rightHandNodes.push(a);
        });
        this.visit(node.callee);
    }
}

/* vim: set sw=4 ts=4 et tw=80 : */

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

const { Syntax } = estraverse__default["default"];

/**
 * Traverse identifier in pattern
 * @param {Object} options options
 * @param {pattern} rootPattern root pattern
 * @param {Refencer} referencer referencer
 * @param {callback} callback callback
 * @returns {void}
 */
function traverseIdentifierInPattern(options, rootPattern, referencer, callback) {

    // Call the callback at left hand identifier nodes, and Collect right hand nodes.
    const visitor = new PatternVisitor(options, rootPattern, callback);

    visitor.visit(rootPattern);

    // Process the right hand nodes recursively.
    if (referencer !== null && referencer !== void 0) {
        visitor.rightHandNodes.forEach(referencer.visit, referencer);
    }
}

// Importing ImportDeclaration.
// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-moduledeclarationinstantiation
// https://github.com/estree/estree/blob/master/es6.md#importdeclaration
// FIXME: Now, we don't create module environment, because the context is
// implementation dependent.

/**
 * Visitor for import specifiers.
 */
class Importer extends esrecurse__default["default"].Visitor {
    constructor(declaration, referencer) {
        super(null, referencer.options);
        this.declaration = declaration;
        this.referencer = referencer;
    }

    visitImport(id, specifier) {
        this.referencer.visitPattern(id, pattern => {
            this.referencer.currentScope().__define(pattern,
                new Definition(
                    Variable.ImportBinding,
                    pattern,
                    specifier,
                    this.declaration,
                    null,
                    null
                ));
        });
    }

    ImportNamespaceSpecifier(node) {
        const local = (node.local || node.id);

        if (local) {
            this.visitImport(local, node);
        }
    }

    ImportDefaultSpecifier(node) {
        const local = (node.local || node.id);

        this.visitImport(local, node);
    }

    ImportSpecifier(node) {
        const local = (node.local || node.id);

        if (node.name) {
            this.visitImport(node.name, node);
        } else {
            this.visitImport(local, node);
        }
    }
}

/**
 * Referencing variables and creating bindings.
 */
class Referencer extends esrecurse__default["default"].Visitor {
    constructor(options, scopeManager) {
        super(null, options);
        this.options = options;
        this.scopeManager = scopeManager;
        this.parent = null;
        this.isInnerMethodDefinition = false;
    }

    currentScope() {
        return this.scopeManager.__currentScope;
    }

    close(node) {
        while (this.currentScope() && node === this.currentScope().block) {
            this.scopeManager.__currentScope = this.currentScope().__close(this.scopeManager);
        }
    }

    pushInnerMethodDefinition(isInnerMethodDefinition) {
        const previous = this.isInnerMethodDefinition;

        this.isInnerMethodDefinition = isInnerMethodDefinition;
        return previous;
    }

    popInnerMethodDefinition(isInnerMethodDefinition) {
        this.isInnerMethodDefinition = isInnerMethodDefinition;
    }

    referencingDefaultValue(pattern, assignments, maybeImplicitGlobal, init) {
        const scope = this.currentScope();

        assignments.forEach(assignment => {
            scope.__referencing(
                pattern,
                Reference.WRITE,
                assignment.right,
                maybeImplicitGlobal,
                pattern !== assignment.left,
                init
            );
        });
    }

    visitPattern(node, options, callback) {
        let visitPatternOptions = options;
        let visitPatternCallback = callback;

        if (typeof options === "function") {
            visitPatternCallback = options;
            visitPatternOptions = { processRightHandNodes: false };
        }

        traverseIdentifierInPattern(
            this.options,
            node,
            visitPatternOptions.processRightHandNodes ? this : null,
            visitPatternCallback
        );
    }

    visitFunction(node) {
        let i, iz;

        // FunctionDeclaration name is defined in upper scope
        // NOTE: Not referring variableScope. It is intended.
        // Since
        //  in ES5, FunctionDeclaration should be in FunctionBody.
        //  in ES6, FunctionDeclaration should be block scoped.

        if (node.type === Syntax.FunctionDeclaration) {

            // id is defined in upper scope
            this.currentScope().__define(node.id,
                new Definition(
                    Variable.FunctionName,
                    node.id,
                    node,
                    null,
                    null,
                    null
                ));
        }

        // FunctionExpression with name creates its special scope;
        // FunctionExpressionNameScope.
        if (node.type === Syntax.FunctionExpression && node.id) {
            this.scopeManager.__nestFunctionExpressionNameScope(node);
        }

        // Consider this function is in the MethodDefinition.
        this.scopeManager.__nestFunctionScope(node, this.isInnerMethodDefinition);

        const that = this;

        /**
         * Visit pattern callback
         * @param {pattern} pattern pattern
         * @param {Object} info info
         * @returns {void}
         */
        function visitPatternCallback(pattern, info) {
            that.currentScope().__define(pattern,
                new ParameterDefinition(
                    pattern,
                    node,
                    i,
                    info.rest
                ));

            that.referencingDefaultValue(pattern, info.assignments, null, true);
        }

        // Process parameter declarations.
        for (i = 0, iz = node.params.length; i < iz; ++i) {
            this.visitPattern(node.params[i], { processRightHandNodes: true }, visitPatternCallback);
        }

        // if there's a rest argument, add that
        if (node.rest) {
            this.visitPattern({
                type: "RestElement",
                argument: node.rest
            }, pattern => {
                this.currentScope().__define(pattern,
                    new ParameterDefinition(
                        pattern,
                        node,
                        node.params.length,
                        true
                    ));
            });
        }

        // In TypeScript there are a number of function-like constructs which have no body,
        // so check it exists before traversing
        if (node.body) {

            // Skip BlockStatement to prevent creating BlockStatement scope.
            if (node.body.type === Syntax.BlockStatement) {
                this.visitChildren(node.body);
            } else {
                this.visit(node.body);
            }
        }

        this.close(node);
    }

    visitClass(node) {
        if (node.type === Syntax.ClassDeclaration) {
            this.currentScope().__define(node.id,
                new Definition(
                    Variable.ClassName,
                    node.id,
                    node,
                    null,
                    null,
                    null
                ));
        }

        this.scopeManager.__nestClassScope(node);

        if (node.id) {
            this.currentScope().__define(node.id,
                new Definition(
                    Variable.ClassName,
                    node.id,
                    node
                ));
        }

        this.visit(node.superClass);
        this.visit(node.body);

        this.close(node);
    }

    visitProperty(node) {
        let previous;

        if (node.computed) {
            this.visit(node.key);
        }

        const isMethodDefinition = node.type === Syntax.MethodDefinition;

        if (isMethodDefinition) {
            previous = this.pushInnerMethodDefinition(true);
        }
        this.visit(node.value);
        if (isMethodDefinition) {
            this.popInnerMethodDefinition(previous);
        }
    }

    visitForIn(node) {
        if (node.left.type === Syntax.VariableDeclaration && node.left.kind !== "var") {
            this.scopeManager.__nestForScope(node);
        }

        if (node.left.type === Syntax.VariableDeclaration) {
            this.visit(node.left);
            this.visitPattern(node.left.declarations[0].id, pattern => {
                this.currentScope().__referencing(pattern, Reference.WRITE, node.right, null, true, true);
            });
        } else {
            this.visitPattern(node.left, { processRightHandNodes: true }, (pattern, info) => {
                let maybeImplicitGlobal = null;

                if (!this.currentScope().isStrict) {
                    maybeImplicitGlobal = {
                        pattern,
                        node
                    };
                }
                this.referencingDefaultValue(pattern, info.assignments, maybeImplicitGlobal, false);
                this.currentScope().__referencing(pattern, Reference.WRITE, node.right, maybeImplicitGlobal, true, false);
            });
        }
        this.visit(node.right);
        this.visit(node.body);

        this.close(node);
    }

    visitVariableDeclaration(variableTargetScope, type, node, index) {

        const decl = node.declarations[index];
        const init = decl.init;

        this.visitPattern(decl.id, { processRightHandNodes: true }, (pattern, info) => {
            variableTargetScope.__define(
                pattern,
                new Definition(
                    type,
                    pattern,
                    decl,
                    node,
                    index,
                    node.kind
                )
            );

            this.referencingDefaultValue(pattern, info.assignments, null, true);
            if (init) {
                this.currentScope().__referencing(pattern, Reference.WRITE, init, null, !info.topLevel, true);
            }
        });
    }

    AssignmentExpression(node) {
        if (PatternVisitor.isPattern(node.left)) {
            if (node.operator === "=") {
                this.visitPattern(node.left, { processRightHandNodes: true }, (pattern, info) => {
                    let maybeImplicitGlobal = null;

                    if (!this.currentScope().isStrict) {
                        maybeImplicitGlobal = {
                            pattern,
                            node
                        };
                    }
                    this.referencingDefaultValue(pattern, info.assignments, maybeImplicitGlobal, false);
                    this.currentScope().__referencing(pattern, Reference.WRITE, node.right, maybeImplicitGlobal, !info.topLevel, false);
                });
            } else {
                this.currentScope().__referencing(node.left, Reference.RW, node.right);
            }
        } else {
            this.visit(node.left);
        }
        this.visit(node.right);
    }

    CatchClause(node) {
        this.scopeManager.__nestCatchScope(node);

        this.visitPattern(node.param, { processRightHandNodes: true }, (pattern, info) => {
            this.currentScope().__define(pattern,
                new Definition(
                    Variable.CatchClause,
                    pattern,
                    node,
                    null,
                    null,
                    null
                ));
            this.referencingDefaultValue(pattern, info.assignments, null, true);
        });
        this.visit(node.body);

        this.close(node);
    }

    Program(node) {
        this.scopeManager.__nestGlobalScope(node);

        if (this.scopeManager.isGlobalReturn()) {

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

    Identifier(node) {
        this.currentScope().__referencing(node);
    }

    // eslint-disable-next-line class-methods-use-this -- Desired as instance method
    PrivateIdentifier() {

        // Do nothing.
    }

    UpdateExpression(node) {
        if (PatternVisitor.isPattern(node.argument)) {
            this.currentScope().__referencing(node.argument, Reference.RW, null);
        } else {
            this.visitChildren(node);
        }
    }

    MemberExpression(node) {
        this.visit(node.object);
        if (node.computed) {
            this.visit(node.property);
        }
    }

    Property(node) {
        this.visitProperty(node);
    }

    PropertyDefinition(node) {
        const { computed, key, value } = node;

        if (computed) {
            this.visit(key);
        }
        if (value) {
            this.scopeManager.__nestClassFieldInitializerScope(value);
            this.visit(value);
            this.close(value);
        }
    }

    StaticBlock(node) {
        this.scopeManager.__nestClassStaticBlockScope(node);

        this.visitChildren(node);

        this.close(node);
    }

    MethodDefinition(node) {
        this.visitProperty(node);
    }

    BreakStatement() {} // eslint-disable-line class-methods-use-this -- Desired as instance method

    ContinueStatement() {} // eslint-disable-line class-methods-use-this -- Desired as instance method

    LabeledStatement(node) {
        this.visit(node.body);
    }

    ForStatement(node) {

        // Create ForStatement declaration.
        // NOTE: In ES6, ForStatement dynamically generates
        // per iteration environment. However, escope is
        // a static analyzer, we only generate one scope for ForStatement.
        if (node.init && node.init.type === Syntax.VariableDeclaration && node.init.kind !== "var") {
            this.scopeManager.__nestForScope(node);
        }

        this.visitChildren(node);

        this.close(node);
    }

    ClassExpression(node) {
        this.visitClass(node);
    }

    ClassDeclaration(node) {
        this.visitClass(node);
    }

    CallExpression(node) {

        // Check this is direct call to eval
        if (!this.scopeManager.__ignoreEval() && node.callee.type === Syntax.Identifier && node.callee.name === "eval") {

            // NOTE: This should be `variableScope`. Since direct eval call always creates Lexical environment and
            // let / const should be enclosed into it. Only VariableDeclaration affects on the caller's environment.
            this.currentScope().variableScope.__detectEval();
        }
        this.visitChildren(node);
    }

    BlockStatement(node) {
        if (this.scopeManager.__isES6()) {
            this.scopeManager.__nestBlockScope(node);
        }

        this.visitChildren(node);

        this.close(node);
    }

    ThisExpression() {
        this.currentScope().variableScope.__detectThis();
    }

    WithStatement(node) {
        this.visit(node.object);

        // Then nest scope for WithStatement.
        this.scopeManager.__nestWithScope(node);

        this.visit(node.body);

        this.close(node);
    }

    VariableDeclaration(node) {
        const variableTargetScope = (node.kind === "var") ? this.currentScope().variableScope : this.currentScope();

        for (let i = 0, iz = node.declarations.length; i < iz; ++i) {
            const decl = node.declarations[i];

            this.visitVariableDeclaration(variableTargetScope, Variable.Variable, node, i);
            if (decl.init) {
                this.visit(decl.init);
            }
        }
    }

    // sec 13.11.8
    SwitchStatement(node) {
        this.visit(node.discriminant);

        if (this.scopeManager.__isES6()) {
            this.scopeManager.__nestSwitchScope(node);
        }

        for (let i = 0, iz = node.cases.length; i < iz; ++i) {
            this.visit(node.cases[i]);
        }

        this.close(node);
    }

    FunctionDeclaration(node) {
        this.visitFunction(node);
    }

    FunctionExpression(node) {
        this.visitFunction(node);
    }

    ForOfStatement(node) {
        this.visitForIn(node);
    }

    ForInStatement(node) {
        this.visitForIn(node);
    }

    ArrowFunctionExpression(node) {
        this.visitFunction(node);
    }

    ImportDeclaration(node) {
        assert(this.scopeManager.__isES6() && this.scopeManager.isModule(), "ImportDeclaration should appear when the mode is ES6 and in the module context.");

        const importer = new Importer(node, this);

        importer.visit(node);
    }

    visitExportDeclaration(node) {
        if (node.source) {
            return;
        }
        if (node.declaration) {
            this.visit(node.declaration);
            return;
        }

        this.visitChildren(node);
    }

    // TODO: ExportDeclaration doesn't exist. for bc?
    ExportDeclaration(node) {
        this.visitExportDeclaration(node);
    }

    ExportAllDeclaration(node) {
        this.visitExportDeclaration(node);
    }

    ExportDefaultDeclaration(node) {
        this.visitExportDeclaration(node);
    }

    ExportNamedDeclaration(node) {
        this.visitExportDeclaration(node);
    }

    ExportSpecifier(node) {

        // TODO: `node.id` doesn't exist. for bc?
        const local = (node.id || node.local);

        this.visit(local);
    }

    MetaProperty() { // eslint-disable-line class-methods-use-this -- Desired as instance method

        // do nothing.
    }

    JSXIdentifier(node) {

        // Special case: "this" should not count as a reference
        if (this.scopeManager.__isJSXEnabled() && node.name !== "this") {
            this.currentScope().__referencing(node);
        }
    }

    JSXMemberExpression(node) {
        this.visit(node.object);
    }

    JSXElement(node) {
        if (this.scopeManager.__isJSXEnabled()) {
            this.visit(node.openingElement);
            node.children.forEach(this.visit, this);
        } else {
            this.visitChildren(node);
        }
    }

    JSXOpeningElement(node) {
        if (this.scopeManager.__isJSXEnabled()) {

            const nameNode = node.name;
            const isComponentName = nameNode.type === "JSXIdentifier" && nameNode.name[0].toUpperCase() === nameNode.name[0];
            const isComponent = isComponentName || nameNode.type === "JSXMemberExpression";

            // we only want to visit JSXIdentifier nodes if they are capitalized
            if (isComponent) {
                this.visit(nameNode);
            }
        }

        node.attributes.forEach(this.visit, this);
    }

    JSXAttribute(node) {
        if (node.value) {
            this.visit(node.value);
        }
    }

    JSXExpressionContainer(node) {
        this.visit(node.expression);
    }

    JSXNamespacedName(node) {
        this.visit(node.namespace);
        this.visit(node.name);
    }
}

/* vim: set sw=4 ts=4 et tw=80 : */

const version = "8.4.0";

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

/* vim: set sw=4 ts=4 et tw=80 : */

exports.Definition = Definition;
exports.PatternVisitor = PatternVisitor;
exports.Reference = Reference;
exports.Referencer = Referencer;
exports.Scope = Scope;
exports.ScopeManager = ScopeManager;
exports.Variable = Variable;
exports.analyze = analyze;
exports.version = version;
//# sourceMappingURL=eslint-scope.cjs.map
