'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var eslintVisitorKeys = require('eslint-visitor-keys');

/** @typedef {import("eslint").Scope.Scope} Scope */
/** @typedef {import("estree").Node} Node */

/**
 * Get the innermost scope which contains a given location.
 * @param {Scope} initialScope The initial scope to search.
 * @param {Node} node The location to search.
 * @returns {Scope} The innermost scope.
 */
function getInnermostScope(initialScope, node) {
    const location = /** @type {[number, number]} */ (node.range)[0];

    let scope = initialScope;
    let found = false;
    do {
        found = false;
        for (const childScope of scope.childScopes) {
            const range = /** @type {[number, number]} */ (
                childScope.block.range
            );

            if (range[0] <= location && location < range[1]) {
                scope = childScope;
                found = true;
                break
            }
        }
    } while (found)

    return scope
}

/** @typedef {import("eslint").Scope.Scope} Scope */
/** @typedef {import("eslint").Scope.Variable} Variable */
/** @typedef {import("estree").Identifier} Identifier */

/**
 * Find the variable of a given name.
 * @param {Scope} initialScope The scope to start finding.
 * @param {string|Identifier} nameOrNode The variable name to find. If this is a Node object then it should be an Identifier node.
 * @returns {Variable|null} The found variable or null.
 */
function findVariable(initialScope, nameOrNode) {
    let name = "";
    /** @type {Scope|null} */
    let scope = initialScope;

    if (typeof nameOrNode === "string") {
        name = nameOrNode;
    } else {
        name = nameOrNode.name;
        scope = getInnermostScope(scope, nameOrNode);
    }

    while (scope != null) {
        const variable = scope.set.get(name);
        if (variable != null) {
            return variable
        }
        scope = scope.upper;
    }

    return null
}

/** @typedef {import("eslint").AST.Token} Token */
/** @typedef {import("estree").Comment} Comment */
/** @typedef {import("./types.mjs").ArrowToken} ArrowToken */
/** @typedef {import("./types.mjs").CommaToken} CommaToken */
/** @typedef {import("./types.mjs").SemicolonToken} SemicolonToken */
/** @typedef {import("./types.mjs").ColonToken} ColonToken */
/** @typedef {import("./types.mjs").OpeningParenToken} OpeningParenToken */
/** @typedef {import("./types.mjs").ClosingParenToken} ClosingParenToken */
/** @typedef {import("./types.mjs").OpeningBracketToken} OpeningBracketToken */
/** @typedef {import("./types.mjs").ClosingBracketToken} ClosingBracketToken */
/** @typedef {import("./types.mjs").OpeningBraceToken} OpeningBraceToken */
/** @typedef {import("./types.mjs").ClosingBraceToken} ClosingBraceToken */
/**
 * @template {string} Value
 * @typedef {import("./types.mjs").PunctuatorToken<Value>} PunctuatorToken
 */

/** @typedef {Comment | Token} CommentOrToken */

/**
 * Creates the negate function of the given function.
 * @param {function(CommentOrToken):boolean} f - The function to negate.
 * @returns {function(CommentOrToken):boolean} Negated function.
 */
function negate(f) {
    return (token) => !f(token)
}

/**
 * Checks if the given token is a PunctuatorToken with the given value
 * @template {string} Value
 * @param {CommentOrToken} token - The token to check.
 * @param {Value} value - The value to check.
 * @returns {token is PunctuatorToken<Value>} `true` if the token is a PunctuatorToken with the given value.
 */
function isPunctuatorTokenWithValue(token, value) {
    return token.type === "Punctuator" && token.value === value
}

/**
 * Checks if the given token is an arrow token or not.
 * @param {CommentOrToken} token - The token to check.
 * @returns {token is ArrowToken} `true` if the token is an arrow token.
 */
function isArrowToken(token) {
    return isPunctuatorTokenWithValue(token, "=>")
}

/**
 * Checks if the given token is a comma token or not.
 * @param {CommentOrToken} token - The token to check.
 * @returns {token is CommaToken} `true` if the token is a comma token.
 */
function isCommaToken(token) {
    return isPunctuatorTokenWithValue(token, ",")
}

/**
 * Checks if the given token is a semicolon token or not.
 * @param {CommentOrToken} token - The token to check.
 * @returns {token is SemicolonToken} `true` if the token is a semicolon token.
 */
function isSemicolonToken(token) {
    return isPunctuatorTokenWithValue(token, ";")
}

/**
 * Checks if the given token is a colon token or not.
 * @param {CommentOrToken} token - The token to check.
 * @returns {token is ColonToken} `true` if the token is a colon token.
 */
function isColonToken(token) {
    return isPunctuatorTokenWithValue(token, ":")
}

/**
 * Checks if the given token is an opening parenthesis token or not.
 * @param {CommentOrToken} token - The token to check.
 * @returns {token is OpeningParenToken} `true` if the token is an opening parenthesis token.
 */
function isOpeningParenToken(token) {
    return isPunctuatorTokenWithValue(token, "(")
}

/**
 * Checks if the given token is a closing parenthesis token or not.
 * @param {CommentOrToken} token - The token to check.
 * @returns {token is ClosingParenToken} `true` if the token is a closing parenthesis token.
 */
function isClosingParenToken(token) {
    return isPunctuatorTokenWithValue(token, ")")
}

/**
 * Checks if the given token is an opening square bracket token or not.
 * @param {CommentOrToken} token - The token to check.
 * @returns {token is OpeningBracketToken} `true` if the token is an opening square bracket token.
 */
function isOpeningBracketToken(token) {
    return isPunctuatorTokenWithValue(token, "[")
}

/**
 * Checks if the given token is a closing square bracket token or not.
 * @param {CommentOrToken} token - The token to check.
 * @returns {token is ClosingBracketToken} `true` if the token is a closing square bracket token.
 */
function isClosingBracketToken(token) {
    return isPunctuatorTokenWithValue(token, "]")
}

/**
 * Checks if the given token is an opening brace token or not.
 * @param {CommentOrToken} token - The token to check.
 * @returns {token is OpeningBraceToken} `true` if the token is an opening brace token.
 */
function isOpeningBraceToken(token) {
    return isPunctuatorTokenWithValue(token, "{")
}

/**
 * Checks if the given token is a closing brace token or not.
 * @param {CommentOrToken} token - The token to check.
 * @returns {token is ClosingBraceToken} `true` if the token is a closing brace token.
 */
function isClosingBraceToken(token) {
    return isPunctuatorTokenWithValue(token, "}")
}

/**
 * Checks if the given token is a comment token or not.
 * @param {CommentOrToken} token - The token to check.
 * @returns {token is Comment} `true` if the token is a comment token.
 */
function isCommentToken(token) {
    return ["Block", "Line", "Shebang"].includes(token.type)
}

const isNotArrowToken = negate(isArrowToken);
const isNotCommaToken = negate(isCommaToken);
const isNotSemicolonToken = negate(isSemicolonToken);
const isNotColonToken = negate(isColonToken);
const isNotOpeningParenToken = negate(isOpeningParenToken);
const isNotClosingParenToken = negate(isClosingParenToken);
const isNotOpeningBracketToken = negate(isOpeningBracketToken);
const isNotClosingBracketToken = negate(isClosingBracketToken);
const isNotOpeningBraceToken = negate(isOpeningBraceToken);
const isNotClosingBraceToken = negate(isClosingBraceToken);
const isNotCommentToken = negate(isCommentToken);

/** @typedef {import("eslint").Rule.Node} RuleNode */
/** @typedef {import("eslint").SourceCode} SourceCode */
/** @typedef {import("eslint").AST.Token} Token */
/** @typedef {import("estree").Function} FunctionNode */
/** @typedef {import("estree").FunctionDeclaration} FunctionDeclaration */
/** @typedef {import("estree").FunctionExpression} FunctionExpression */
/** @typedef {import("estree").SourceLocation} SourceLocation */
/** @typedef {import("estree").Position} Position */

/**
 * Get the `(` token of the given function node.
 * @param {FunctionExpression | FunctionDeclaration} node - The function node to get.
 * @param {SourceCode} sourceCode - The source code object to get tokens.
 * @returns {Token} `(` token.
 */
function getOpeningParenOfParams(node, sourceCode) {
    return node.id
        ? /** @type {Token} */ (
              sourceCode.getTokenAfter(node.id, isOpeningParenToken)
          )
        : /** @type {Token} */ (
              sourceCode.getFirstToken(node, isOpeningParenToken)
          )
}

/**
 * Get the location of the given function node for reporting.
 * @param {FunctionNode} node - The function node to get.
 * @param {SourceCode} sourceCode - The source code object to get tokens.
 * @returns {SourceLocation|null} The location of the function node for reporting.
 */
function getFunctionHeadLocation(node, sourceCode) {
    const parent = /** @type {RuleNode} */ (node).parent;

    /** @type {Position|null} */
    let start = null;
    /** @type {Position|null} */
    let end = null;

    if (node.type === "ArrowFunctionExpression") {
        const arrowToken = /** @type {Token} */ (
            sourceCode.getTokenBefore(node.body, isArrowToken)
        );

        start = arrowToken.loc.start;
        end = arrowToken.loc.end;
    } else if (
        parent &&
        (parent.type === "Property" ||
            parent.type === "MethodDefinition" ||
            parent.type === "PropertyDefinition")
    ) {
        start = /** @type {SourceLocation} */ (parent.loc).start;
        end = getOpeningParenOfParams(node, sourceCode).loc.start;
    } else {
        start = /** @type {SourceLocation} */ (node.loc).start;
        end = getOpeningParenOfParams(node, sourceCode).loc.start;
    }

    return {
        start: { ...start },
        end: { ...end },
    }
}

/* globals globalThis, global, self, window */
/** @typedef {import("./types.mjs").StaticValue} StaticValue */
/** @typedef {import("eslint").Scope.Scope} Scope */
/** @typedef {import("eslint").Scope.Variable} Variable */
/** @typedef {import("estree").Node} Node */
/** @typedef {import("@typescript-eslint/types").TSESTree.Node} TSESTreeNode */
/** @typedef {import("@typescript-eslint/types").TSESTree.AST_NODE_TYPES} TSESTreeNodeTypes */
/** @typedef {import("@typescript-eslint/types").TSESTree.MemberExpression} MemberExpression */
/** @typedef {import("@typescript-eslint/types").TSESTree.Property} Property */
/** @typedef {import("@typescript-eslint/types").TSESTree.RegExpLiteral} RegExpLiteral */
/** @typedef {import("@typescript-eslint/types").TSESTree.BigIntLiteral} BigIntLiteral */
/** @typedef {import("@typescript-eslint/types").TSESTree.Literal} Literal */

const globalObject =
    typeof globalThis !== "undefined"
        ? globalThis
        : // @ts-ignore
        typeof self !== "undefined"
        ? // @ts-ignore
          self
        : // @ts-ignore
        typeof window !== "undefined"
        ? // @ts-ignore
          window
        : typeof global !== "undefined"
        ? global
        : {};

const builtinNames = Object.freeze(
    new Set([
        "Array",
        "ArrayBuffer",
        "BigInt",
        "BigInt64Array",
        "BigUint64Array",
        "Boolean",
        "DataView",
        "Date",
        "decodeURI",
        "decodeURIComponent",
        "encodeURI",
        "encodeURIComponent",
        "escape",
        "Float32Array",
        "Float64Array",
        "Function",
        "Infinity",
        "Int16Array",
        "Int32Array",
        "Int8Array",
        "isFinite",
        "isNaN",
        "isPrototypeOf",
        "JSON",
        "Map",
        "Math",
        "NaN",
        "Number",
        "Object",
        "parseFloat",
        "parseInt",
        "Promise",
        "Proxy",
        "Reflect",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "Uint16Array",
        "Uint32Array",
        "Uint8Array",
        "Uint8ClampedArray",
        "undefined",
        "unescape",
        "WeakMap",
        "WeakSet",
    ]),
);
const callAllowed = new Set(
    [
        Array.isArray,
        Array.of,
        Array.prototype.at,
        Array.prototype.concat,
        Array.prototype.entries,
        Array.prototype.every,
        Array.prototype.filter,
        Array.prototype.find,
        Array.prototype.findIndex,
        Array.prototype.flat,
        Array.prototype.includes,
        Array.prototype.indexOf,
        Array.prototype.join,
        Array.prototype.keys,
        Array.prototype.lastIndexOf,
        Array.prototype.slice,
        Array.prototype.some,
        Array.prototype.toString,
        Array.prototype.values,
        typeof BigInt === "function" ? BigInt : undefined,
        Boolean,
        Date,
        Date.parse,
        decodeURI,
        decodeURIComponent,
        encodeURI,
        encodeURIComponent,
        escape,
        isFinite,
        isNaN,
        // @ts-ignore
        isPrototypeOf,
        Map,
        Map.prototype.entries,
        Map.prototype.get,
        Map.prototype.has,
        Map.prototype.keys,
        Map.prototype.values,
        .../** @type {(keyof typeof Math)[]} */ (
            Object.getOwnPropertyNames(Math)
        )
            .filter((k) => k !== "random")
            .map((k) => Math[k])
            .filter((f) => typeof f === "function"),
        Number,
        Number.isFinite,
        Number.isNaN,
        Number.parseFloat,
        Number.parseInt,
        Number.prototype.toExponential,
        Number.prototype.toFixed,
        Number.prototype.toPrecision,
        Number.prototype.toString,
        Object,
        Object.entries,
        Object.is,
        Object.isExtensible,
        Object.isFrozen,
        Object.isSealed,
        Object.keys,
        Object.values,
        parseFloat,
        parseInt,
        RegExp,
        Set,
        Set.prototype.entries,
        Set.prototype.has,
        Set.prototype.keys,
        Set.prototype.values,
        String,
        String.fromCharCode,
        String.fromCodePoint,
        String.raw,
        String.prototype.at,
        String.prototype.charAt,
        String.prototype.charCodeAt,
        String.prototype.codePointAt,
        String.prototype.concat,
        String.prototype.endsWith,
        String.prototype.includes,
        String.prototype.indexOf,
        String.prototype.lastIndexOf,
        String.prototype.normalize,
        String.prototype.padEnd,
        String.prototype.padStart,
        String.prototype.slice,
        String.prototype.startsWith,
        String.prototype.substr,
        String.prototype.substring,
        String.prototype.toLowerCase,
        String.prototype.toString,
        String.prototype.toUpperCase,
        String.prototype.trim,
        String.prototype.trimEnd,
        String.prototype.trimLeft,
        String.prototype.trimRight,
        String.prototype.trimStart,
        Symbol.for,
        Symbol.keyFor,
        unescape,
    ].filter((f) => typeof f === "function"),
);
const callPassThrough = new Set([
    Object.freeze,
    Object.preventExtensions,
    Object.seal,
]);

/** @type {ReadonlyArray<readonly [Function, ReadonlySet<string>]>} */
const getterAllowed = [
    [Map, new Set(["size"])],
    [
        RegExp,
        new Set([
            "dotAll",
            "flags",
            "global",
            "hasIndices",
            "ignoreCase",
            "multiline",
            "source",
            "sticky",
            "unicode",
        ]),
    ],
    [Set, new Set(["size"])],
];

/**
 * Get the property descriptor.
 * @param {object} object The object to get.
 * @param {string|number|symbol} name The property name to get.
 */
function getPropertyDescriptor(object, name) {
    let x = object;
    while ((typeof x === "object" || typeof x === "function") && x !== null) {
        const d = Object.getOwnPropertyDescriptor(x, name);
        if (d) {
            return d
        }
        x = Object.getPrototypeOf(x);
    }
    return null
}

/**
 * Check if a property is getter or not.
 * @param {object} object The object to check.
 * @param {string|number|symbol} name The property name to check.
 */
function isGetter(object, name) {
    const d = getPropertyDescriptor(object, name);
    return d != null && d.get != null
}

/**
 * Get the element values of a given node list.
 * @param {(Node|TSESTreeNode|null)[]} nodeList The node list to get values.
 * @param {Scope|undefined|null} initialScope The initial scope to find variables.
 * @returns {any[]|null} The value list if all nodes are constant. Otherwise, null.
 */
function getElementValues(nodeList, initialScope) {
    const valueList = [];

    for (let i = 0; i < nodeList.length; ++i) {
        const elementNode = nodeList[i];

        if (elementNode == null) {
            valueList.length = i + 1;
        } else if (elementNode.type === "SpreadElement") {
            const argument = getStaticValueR(elementNode.argument, initialScope);
            if (argument == null) {
                return null
            }
            valueList.push(.../** @type {Iterable<any>} */ (argument.value));
        } else {
            const element = getStaticValueR(elementNode, initialScope);
            if (element == null) {
                return null
            }
            valueList.push(element.value);
        }
    }

    return valueList
}

/**
 * Checks if a variable is a built-in global.
 * @param {Variable|null} variable The variable to check.
 * @returns {variable is Variable & {defs:[]}}
 */
function isBuiltinGlobal(variable) {
    return (
        variable != null &&
        variable.defs.length === 0 &&
        builtinNames.has(variable.name) &&
        variable.name in globalObject
    )
}

/**
 * Checks if a variable can be considered as a constant.
 * @param {Variable} variable
 * @returns {variable is Variable & {defs: [import("eslint").Scope.Definition & { type: "Variable" }]}} True if the variable can be considered as a constant.
 */
function canBeConsideredConst(variable) {
    if (variable.defs.length !== 1) {
        return false
    }
    const def = variable.defs[0];
    return Boolean(
        def.parent &&
            def.type === "Variable" &&
            (def.parent.kind === "const" || isEffectivelyConst(variable)),
    )
}

/**
 * Returns whether the given variable is never written to after initialization.
 * @param {Variable} variable
 * @returns {boolean}
 */
function isEffectivelyConst(variable) {
    const refs = variable.references;

    const inits = refs.filter((r) => r.init).length;
    const reads = refs.filter((r) => r.isReadOnly()).length;
    if (inits === 1 && reads + inits === refs.length) {
        // there is only one init and all other references only read
        return true
    }
    return false
}

/**
 * Checks if a variable has mutation in its property.
 * @param {Variable} variable The variable to check.
 * @param {Scope|null} initialScope The scope to start finding variable. Optional. If the node is a computed property node and this scope was given, this checks the computed property name by the `getStringIfConstant` function with the scope, and returns the value of it.
 * @returns {boolean} True if the variable has mutation in its property.
 */
function hasMutationInProperty(variable, initialScope) {
    for (const ref of variable.references) {
        let node = /** @type {TSESTreeNode} */ (ref.identifier);
        while (node && node.parent && node.parent.type === "MemberExpression") {
            node = node.parent;
        }
        if (!node || !node.parent) {
            continue
        }
        if (
            (node.parent.type === "AssignmentExpression" &&
                node.parent.left === node) ||
            (node.parent.type === "UpdateExpression" &&
                node.parent.argument === node)
        ) {
            // This is a mutation.
            return true
        }
        if (
            node.parent.type === "CallExpression" &&
            node.parent.callee === node &&
            node.type === "MemberExpression"
        ) {
            const methodName = getStaticPropertyNameValue(node, initialScope);
            if (isNameOfMutationArrayMethod(methodName)) {
                // This is a mutation.
                return true
            }
        }
    }
    return false

    /**
     * Checks if a method name is one of the mutation array methods.
     * @param {StaticValue|null} methodName The method name to check.
     * @returns {boolean} True if the method name is a mutation array method.
     */
    function isNameOfMutationArrayMethod(methodName) {
        if (methodName == null || methodName.value == null) {
            return false
        }
        const name = methodName.value;
        return (
            name === "copyWithin" ||
            name === "fill" ||
            name === "pop" ||
            name === "push" ||
            name === "reverse" ||
            name === "shift" ||
            name === "sort" ||
            name === "splice" ||
            name === "unshift"
        )
    }
}

/**
 * @template {TSESTreeNodeTypes} T
 * @callback VisitorCallback
 * @param {TSESTreeNode & { type: T }} node
 * @param {Scope|undefined|null} initialScope
 * @returns {StaticValue | null}
 */
/**
 * @typedef { { [K in TSESTreeNodeTypes]?: VisitorCallback<K> } } Operations
 */
/**
 * @type {Operations}
 */
const operations = Object.freeze({
    ArrayExpression(node, initialScope) {
        const elements = getElementValues(node.elements, initialScope);
        return elements != null ? { value: elements } : null
    },

    AssignmentExpression(node, initialScope) {
        if (node.operator === "=") {
            return getStaticValueR(node.right, initialScope)
        }
        return null
    },

    //eslint-disable-next-line complexity
    BinaryExpression(node, initialScope) {
        if (node.operator === "in" || node.operator === "instanceof") {
            // Not supported.
            return null
        }

        const left = getStaticValueR(node.left, initialScope);
        const right = getStaticValueR(node.right, initialScope);
        if (left != null && right != null) {
            switch (node.operator) {
                case "==":
                    return { value: left.value == right.value } //eslint-disable-line eqeqeq
                case "!=":
                    return { value: left.value != right.value } //eslint-disable-line eqeqeq
                case "===":
                    return { value: left.value === right.value }
                case "!==":
                    return { value: left.value !== right.value }
                case "<":
                    return {
                        value:
                            /** @type {any} */ (left.value) <
                            /** @type {any} */ (right.value),
                    }
                case "<=":
                    return {
                        value:
                            /** @type {any} */ (left.value) <=
                            /** @type {any} */ (right.value),
                    }
                case ">":
                    return {
                        value:
                            /** @type {any} */ (left.value) >
                            /** @type {any} */ (right.value),
                    }
                case ">=":
                    return {
                        value:
                            /** @type {any} */ (left.value) >=
                            /** @type {any} */ (right.value),
                    }
                case "<<":
                    return {
                        value:
                            /** @type {any} */ (left.value) <<
                            /** @type {any} */ (right.value),
                    }
                case ">>":
                    return {
                        value:
                            /** @type {any} */ (left.value) >>
                            /** @type {any} */ (right.value),
                    }
                case ">>>":
                    return {
                        value:
                            /** @type {any} */ (left.value) >>>
                            /** @type {any} */ (right.value),
                    }
                case "+":
                    return {
                        value:
                            /** @type {any} */ (left.value) +
                            /** @type {any} */ (right.value),
                    }
                case "-":
                    return {
                        value:
                            /** @type {any} */ (left.value) -
                            /** @type {any} */ (right.value),
                    }
                case "*":
                    return {
                        value:
                            /** @type {any} */ (left.value) *
                            /** @type {any} */ (right.value),
                    }
                case "/":
                    return {
                        value:
                            /** @type {any} */ (left.value) /
                            /** @type {any} */ (right.value),
                    }
                case "%":
                    return {
                        value:
                            /** @type {any} */ (left.value) %
                            /** @type {any} */ (right.value),
                    }
                case "**":
                    return {
                        value:
                            /** @type {any} */ (left.value) **
                            /** @type {any} */ (right.value),
                    }
                case "|":
                    return {
                        value:
                            /** @type {any} */ (left.value) |
                            /** @type {any} */ (right.value),
                    }
                case "^":
                    return {
                        value:
                            /** @type {any} */ (left.value) ^
                            /** @type {any} */ (right.value),
                    }
                case "&":
                    return {
                        value:
                            /** @type {any} */ (left.value) &
                            /** @type {any} */ (right.value),
                    }

                // no default
            }
        }

        return null
    },

    CallExpression(node, initialScope) {
        const calleeNode = node.callee;
        const args = getElementValues(node.arguments, initialScope);

        if (args != null) {
            if (calleeNode.type === "MemberExpression") {
                if (calleeNode.property.type === "PrivateIdentifier") {
                    return null
                }
                const object = getStaticValueR(calleeNode.object, initialScope);
                if (object != null) {
                    if (
                        object.value == null &&
                        (object.optional || node.optional)
                    ) {
                        return { value: undefined, optional: true }
                    }
                    const property = getStaticPropertyNameValue(
                        calleeNode,
                        initialScope,
                    );

                    if (property != null) {
                        const receiver =
                            /** @type {Record<PropertyKey, (...args: any[]) => any>} */ (
                                object.value
                            );
                        const methodName = /** @type {PropertyKey} */ (
                            property.value
                        );
                        if (callAllowed.has(receiver[methodName])) {
                            return {
                                value: receiver[methodName](...args),
                            }
                        }
                        if (callPassThrough.has(receiver[methodName])) {
                            return { value: args[0] }
                        }
                    }
                }
            } else {
                const callee = getStaticValueR(calleeNode, initialScope);
                if (callee != null) {
                    if (callee.value == null && node.optional) {
                        return { value: undefined, optional: true }
                    }
                    const func = /** @type {(...args: any[]) => any} */ (
                        callee.value
                    );
                    if (callAllowed.has(func)) {
                        return { value: func(...args) }
                    }
                    if (callPassThrough.has(func)) {
                        return { value: args[0] }
                    }
                }
            }
        }

        return null
    },

    ConditionalExpression(node, initialScope) {
        const test = getStaticValueR(node.test, initialScope);
        if (test != null) {
            return test.value
                ? getStaticValueR(node.consequent, initialScope)
                : getStaticValueR(node.alternate, initialScope)
        }
        return null
    },

    ExpressionStatement(node, initialScope) {
        return getStaticValueR(node.expression, initialScope)
    },

    Identifier(node, initialScope) {
        if (initialScope != null) {
            const variable = findVariable(initialScope, node);

            if (variable != null) {
                // Built-in globals.
                if (isBuiltinGlobal(variable)) {
                    return { value: globalObject[variable.name] }
                }

                // Constants.
                if (canBeConsideredConst(variable)) {
                    const def = variable.defs[0];
                    if (
                        // TODO(mysticatea): don't support destructuring here.
                        def.node.id.type === "Identifier"
                    ) {
                        const init = getStaticValueR(
                            def.node.init,
                            initialScope,
                        );
                        if (
                            init &&
                            typeof init.value === "object" &&
                            init.value !== null
                        ) {
                            if (hasMutationInProperty(variable, initialScope)) {
                                // This variable has mutation in its property.
                                return null
                            }
                        }
                        return init
                    }
                }
            }
        }
        return null
    },

    Literal(node) {
        const literal =
            /** @type {Partial<Literal> & Partial<RegExpLiteral> & Partial<BigIntLiteral>} */ (
                node
            );
        //istanbul ignore if : this is implementation-specific behavior.
        if (
            (literal.regex != null || literal.bigint != null) &&
            literal.value == null
        ) {
            // It was a RegExp/BigInt literal, but Node.js didn't support it.
            return null
        }
        return { value: literal.value }
    },

    LogicalExpression(node, initialScope) {
        const left = getStaticValueR(node.left, initialScope);
        if (left != null) {
            if (
                (node.operator === "||" && Boolean(left.value) === true) ||
                (node.operator === "&&" && Boolean(left.value) === false) ||
                (node.operator === "??" && left.value != null)
            ) {
                return left
            }

            const right = getStaticValueR(node.right, initialScope);
            if (right != null) {
                return right
            }
        }

        return null
    },

    MemberExpression(node, initialScope) {
        if (node.property.type === "PrivateIdentifier") {
            return null
        }
        const object = getStaticValueR(node.object, initialScope);
        if (object != null) {
            if (object.value == null && (object.optional || node.optional)) {
                return { value: undefined, optional: true }
            }
            const property = getStaticPropertyNameValue(node, initialScope);

            if (property != null) {
                if (
                    !isGetter(
                        /** @type {object} */ (object.value),
                        /** @type {PropertyKey} */ (property.value),
                    )
                ) {
                    return {
                        value: /** @type {Record<PropertyKey, unknown>} */ (
                            object.value
                        )[/** @type {PropertyKey} */ (property.value)],
                    }
                }

                for (const [classFn, allowed] of getterAllowed) {
                    if (
                        object.value instanceof classFn &&
                        allowed.has(/** @type {string} */ (property.value))
                    ) {
                        return {
                            value: /** @type {Record<PropertyKey, unknown>} */ (
                                object.value
                            )[/** @type {PropertyKey} */ (property.value)],
                        }
                    }
                }
            }
        }
        return null
    },

    ChainExpression(node, initialScope) {
        const expression = getStaticValueR(node.expression, initialScope);
        if (expression != null) {
            return { value: expression.value }
        }
        return null
    },

    NewExpression(node, initialScope) {
        const callee = getStaticValueR(node.callee, initialScope);
        const args = getElementValues(node.arguments, initialScope);

        if (callee != null && args != null) {
            const Func = /** @type {new (...args: any[]) => any} */ (
                callee.value
            );
            if (callAllowed.has(Func)) {
                return { value: new Func(...args) }
            }
        }

        return null
    },

    ObjectExpression(node, initialScope) {
        /** @type {Record<PropertyKey, unknown>} */
        const object = {};

        for (const propertyNode of node.properties) {
            if (propertyNode.type === "Property") {
                if (propertyNode.kind !== "init") {
                    return null
                }
                const key = getStaticPropertyNameValue(
                    propertyNode,
                    initialScope,
                );
                const value = getStaticValueR(propertyNode.value, initialScope);
                if (key == null || value == null) {
                    return null
                }
                object[/** @type {PropertyKey} */ (key.value)] = value.value;
            } else if (
                propertyNode.type === "SpreadElement" ||
                // @ts-expect-error -- Backward compatibility
                propertyNode.type === "ExperimentalSpreadProperty"
            ) {
                const argument = getStaticValueR(
                    propertyNode.argument,
                    initialScope,
                );
                if (argument == null) {
                    return null
                }
                Object.assign(object, argument.value);
            } else {
                return null
            }
        }

        return { value: object }
    },

    SequenceExpression(node, initialScope) {
        const last = node.expressions[node.expressions.length - 1];
        return getStaticValueR(last, initialScope)
    },

    TaggedTemplateExpression(node, initialScope) {
        const tag = getStaticValueR(node.tag, initialScope);
        const expressions = getElementValues(
            node.quasi.expressions,
            initialScope,
        );

        if (tag != null && expressions != null) {
            const func = /** @type {(...args: any[]) => any} */ (tag.value);
            /** @type {any[] & { raw?: string[] }} */
            const strings = node.quasi.quasis.map((q) => q.value.cooked);
            strings.raw = node.quasi.quasis.map((q) => q.value.raw);

            if (func === String.raw) {
                return { value: func(strings, ...expressions) }
            }
        }

        return null
    },

    TemplateLiteral(node, initialScope) {
        const expressions = getElementValues(node.expressions, initialScope);
        if (expressions != null) {
            let value = node.quasis[0].value.cooked;
            for (let i = 0; i < expressions.length; ++i) {
                value += expressions[i];
                value += /** @type {string} */ (node.quasis[i + 1].value.cooked);
            }
            return { value }
        }
        return null
    },

    UnaryExpression(node, initialScope) {
        if (node.operator === "delete") {
            // Not supported.
            return null
        }
        if (node.operator === "void") {
            return { value: undefined }
        }

        const arg = getStaticValueR(node.argument, initialScope);
        if (arg != null) {
            switch (node.operator) {
                case "-":
                    return { value: -(/** @type {any} */ (arg.value)) }
                case "+":
                    return { value: +(/** @type {any} */ (arg.value)) } //eslint-disable-line no-implicit-coercion
                case "!":
                    return { value: !arg.value }
                case "~":
                    return { value: ~(/** @type {any} */ (arg.value)) }
                case "typeof":
                    return { value: typeof arg.value }

                // no default
            }
        }

        return null
    },
    TSAsExpression(node, initialScope) {
        return getStaticValueR(node.expression, initialScope)
    },
    TSSatisfiesExpression(node, initialScope) {
        return getStaticValueR(node.expression, initialScope)
    },
    TSTypeAssertion(node, initialScope) {
        return getStaticValueR(node.expression, initialScope)
    },
    TSNonNullExpression(node, initialScope) {
        return getStaticValueR(node.expression, initialScope)
    },
    TSInstantiationExpression(node, initialScope) {
        return getStaticValueR(node.expression, initialScope)
    },
});

/**
 * Get the value of a given node if it's a static value.
 * @param {Node|TSESTreeNode|null|undefined} node The node to get.
 * @param {Scope|undefined|null} initialScope The scope to start finding variable.
 * @returns {StaticValue|null} The static value of the node, or `null`.
 */
function getStaticValueR(node, initialScope) {
    if (node != null && Object.hasOwnProperty.call(operations, node.type)) {
        return /** @type {VisitorCallback<any>} */ (operations[node.type])(
            /** @type {TSESTreeNode} */ (node),
            initialScope,
        )
    }
    return null
}

/**
 * Get the static value of property name from a MemberExpression node or a Property node.
 * @param {MemberExpression|Property} node The node to get.
 * @param {Scope|null} [initialScope] The scope to start finding variable. Optional. If the node is a computed property node and this scope was given, this checks the computed property name by the `getStringIfConstant` function with the scope, and returns the value of it.
 * @returns {StaticValue|null} The static value of the property name of the node, or `null`.
 */
function getStaticPropertyNameValue(node, initialScope) {
    const nameNode = node.type === "Property" ? node.key : node.property;

    if (node.computed) {
        return getStaticValueR(nameNode, initialScope)
    }

    if (nameNode.type === "Identifier") {
        return { value: nameNode.name }
    }

    if (nameNode.type === "Literal") {
        if (/** @type {Partial<BigIntLiteral>} */ (nameNode).bigint) {
            return { value: /** @type {BigIntLiteral} */ (nameNode).bigint }
        }
        return { value: String(nameNode.value) }
    }

    return null
}

/**
 * Get the value of a given node if it's a static value.
 * @param {Node} node The node to get.
 * @param {Scope|null} [initialScope] The scope to start finding variable. Optional. If this scope was given, this tries to resolve identifier references which are in the given node as much as possible.
 * @returns {StaticValue | null} The static value of the node, or `null`.
 */
function getStaticValue(node, initialScope = null) {
    try {
        return getStaticValueR(node, initialScope)
    } catch (_error) {
        return null
    }
}

/** @typedef {import("eslint").Scope.Scope} Scope */
/** @typedef {import("estree").Node} Node */
/** @typedef {import("estree").RegExpLiteral} RegExpLiteral */
/** @typedef {import("estree").BigIntLiteral} BigIntLiteral */
/** @typedef {import("estree").SimpleLiteral} SimpleLiteral */

/**
 * Get the value of a given node if it's a literal or a template literal.
 * @param {Node} node The node to get.
 * @param {Scope|null} [initialScope] The scope to start finding variable. Optional. If the node is an Identifier node and this scope was given, this checks the variable of the identifier, and returns the value of it if the variable is a constant.
 * @returns {string|null} The value of the node, or `null`.
 */
function getStringIfConstant(node, initialScope = null) {
    // Handle the literals that the platform doesn't support natively.
    if (node && node.type === "Literal" && node.value === null) {
        const literal =
            /** @type {Partial<SimpleLiteral> & Partial<RegExpLiteral> & Partial<BigIntLiteral>} */ (
                node
            );
        if (literal.regex) {
            return `/${literal.regex.pattern}/${literal.regex.flags}`
        }
        if (literal.bigint) {
            return literal.bigint
        }
    }

    const evaluated = getStaticValue(node, initialScope);

    if (evaluated) {
        // `String(Symbol.prototype)` throws error
        try {
            return String(evaluated.value)
        } catch {
            // No op
        }
    }

    return null
}

/** @typedef {import("eslint").Scope.Scope} Scope */
/** @typedef {import("estree").MemberExpression} MemberExpression */
/** @typedef {import("estree").MethodDefinition} MethodDefinition */
/** @typedef {import("estree").Property} Property */
/** @typedef {import("estree").PropertyDefinition} PropertyDefinition */
/** @typedef {import("estree").Identifier} Identifier */

/**
 * Get the property name from a MemberExpression node or a Property node.
 * @param {MemberExpression | MethodDefinition | Property | PropertyDefinition} node The node to get.
 * @param {Scope} [initialScope] The scope to start finding variable. Optional. If the node is a computed property node and this scope was given, this checks the computed property name by the `getStringIfConstant` function with the scope, and returns the value of it.
 * @returns {string|null|undefined} The property name of the node.
 */
function getPropertyName(node, initialScope) {
    switch (node.type) {
        case "MemberExpression":
            if (node.computed) {
                return getStringIfConstant(node.property, initialScope)
            }
            if (node.property.type === "PrivateIdentifier") {
                return null
            }
            return /** @type {Partial<Identifier>} */ (node.property).name

        case "Property":
        case "MethodDefinition":
        case "PropertyDefinition":
            if (node.computed) {
                return getStringIfConstant(node.key, initialScope)
            }
            if (node.key.type === "Literal") {
                return String(node.key.value)
            }
            if (node.key.type === "PrivateIdentifier") {
                return null
            }
            return /** @type {Partial<Identifier>} */ (node.key).name
    }

    return null
}

/** @typedef {import("eslint").Rule.Node} RuleNode */
/** @typedef {import("eslint").SourceCode} SourceCode */
/** @typedef {import("estree").Function} FunctionNode */
/** @typedef {import("estree").FunctionDeclaration} FunctionDeclaration */
/** @typedef {import("estree").FunctionExpression} FunctionExpression */
/** @typedef {import("estree").Identifier} Identifier */

/**
 * Get the name and kind of the given function node.
 * @param {FunctionNode} node - The function node to get.
 * @param {SourceCode} [sourceCode] The source code object to get the code of computed property keys.
 * @returns {string} The name and kind of the function node.
 */
// eslint-disable-next-line complexity
function getFunctionNameWithKind(node, sourceCode) {
    const parent = /** @type {RuleNode} */ (node).parent;

    if (!parent) {
        return ""
    }

    const tokens = [];
    const isObjectMethod = parent.type === "Property" && parent.value === node;
    const isClassMethod =
        parent.type === "MethodDefinition" && parent.value === node;
    const isClassFieldMethod =
        parent.type === "PropertyDefinition" && parent.value === node;

    // Modifiers.
    if (isClassMethod || isClassFieldMethod) {
        if (parent.static) {
            tokens.push("static");
        }
        if (parent.key.type === "PrivateIdentifier") {
            tokens.push("private");
        }
    }
    if (node.async) {
        tokens.push("async");
    }
    if (node.generator) {
        tokens.push("generator");
    }

    // Kinds.
    if (isObjectMethod || isClassMethod) {
        if (parent.kind === "constructor") {
            return "constructor"
        }
        if (parent.kind === "get") {
            tokens.push("getter");
        } else if (parent.kind === "set") {
            tokens.push("setter");
        } else {
            tokens.push("method");
        }
    } else if (isClassFieldMethod) {
        tokens.push("method");
    } else {
        if (node.type === "ArrowFunctionExpression") {
            tokens.push("arrow");
        }
        tokens.push("function");
    }

    // Names.
    if (isObjectMethod || isClassMethod || isClassFieldMethod) {
        if (parent.key.type === "PrivateIdentifier") {
            tokens.push(`#${parent.key.name}`);
        } else {
            const name = getPropertyName(parent);
            if (name) {
                tokens.push(`'${name}'`);
            } else if (sourceCode) {
                const keyText = sourceCode.getText(parent.key);
                if (!keyText.includes("\n")) {
                    tokens.push(`[${keyText}]`);
                }
            }
        }
    } else if (hasId(node)) {
        tokens.push(`'${node.id.name}'`);
    } else if (
        parent.type === "VariableDeclarator" &&
        parent.id &&
        parent.id.type === "Identifier"
    ) {
        tokens.push(`'${parent.id.name}'`);
    } else if (
        (parent.type === "AssignmentExpression" ||
            parent.type === "AssignmentPattern") &&
        parent.left &&
        parent.left.type === "Identifier"
    ) {
        tokens.push(`'${parent.left.name}'`);
    } else if (
        parent.type === "ExportDefaultDeclaration" &&
        parent.declaration === node
    ) {
        tokens.push("'default'");
    }

    return tokens.join(" ")
}

/**
 * @param {FunctionNode} node
 * @returns {node is FunctionDeclaration | FunctionExpression & { id: Identifier }}
 */
function hasId(node) {
    return Boolean(
        /** @type {Partial<FunctionDeclaration | FunctionExpression>} */ (node)
            .id,
    )
}

/** @typedef {import("estree").Node} Node */
/** @typedef {import("eslint").SourceCode} SourceCode */
/** @typedef {import("./types.mjs").HasSideEffectOptions} HasSideEffectOptions */
/** @typedef {import("estree").BinaryExpression} BinaryExpression */
/** @typedef {import("estree").MemberExpression} MemberExpression */
/** @typedef {import("estree").MethodDefinition} MethodDefinition */
/** @typedef {import("estree").Property} Property */
/** @typedef {import("estree").PropertyDefinition} PropertyDefinition */
/** @typedef {import("estree").UnaryExpression} UnaryExpression */

const typeConversionBinaryOps = Object.freeze(
    new Set([
        "==",
        "!=",
        "<",
        "<=",
        ">",
        ">=",
        "<<",
        ">>",
        ">>>",
        "+",
        "-",
        "*",
        "/",
        "%",
        "|",
        "^",
        "&",
        "in",
    ]),
);
const typeConversionUnaryOps = Object.freeze(new Set(["-", "+", "!", "~"]));

/**
 * Check whether the given value is an ASTNode or not.
 * @param {any} x The value to check.
 * @returns {x is Node} `true` if the value is an ASTNode.
 */
function isNode(x) {
    return x !== null && typeof x === "object" && typeof x.type === "string"
}

const visitor = Object.freeze(
    Object.assign(Object.create(null), {
        /**
         * @param {Node} node
         * @param {HasSideEffectOptions} options
         * @param {Record<string, string[]>} visitorKeys
         */
        $visit(node, options, visitorKeys) {
            const { type } = node;

            if (typeof (/** @type {any} */ (this)[type]) === "function") {
                return /** @type {any} */ (this)[type](
                    node,
                    options,
                    visitorKeys,
                )
            }

            return this.$visitChildren(node, options, visitorKeys)
        },

        /**
         * @param {Node} node
         * @param {HasSideEffectOptions} options
         * @param {Record<string, string[]>} visitorKeys
         */
        $visitChildren(node, options, visitorKeys) {
            const { type } = node;

            for (const key of /** @type {(keyof Node)[]} */ (
                visitorKeys[type] || eslintVisitorKeys.getKeys(node)
            )) {
                const value = node[key];

                if (Array.isArray(value)) {
                    for (const element of value) {
                        if (
                            isNode(element) &&
                            this.$visit(element, options, visitorKeys)
                        ) {
                            return true
                        }
                    }
                } else if (
                    isNode(value) &&
                    this.$visit(value, options, visitorKeys)
                ) {
                    return true
                }
            }

            return false
        },

        ArrowFunctionExpression() {
            return false
        },
        AssignmentExpression() {
            return true
        },
        AwaitExpression() {
            return true
        },
        /**
         * @param {BinaryExpression} node
         * @param {HasSideEffectOptions} options
         * @param {Record<string, string[]>} visitorKeys
         */
        BinaryExpression(node, options, visitorKeys) {
            if (
                options.considerImplicitTypeConversion &&
                typeConversionBinaryOps.has(node.operator) &&
                (node.left.type !== "Literal" || node.right.type !== "Literal")
            ) {
                return true
            }
            return this.$visitChildren(node, options, visitorKeys)
        },
        CallExpression() {
            return true
        },
        FunctionExpression() {
            return false
        },
        ImportExpression() {
            return true
        },
        /**
         * @param {MemberExpression} node
         * @param {HasSideEffectOptions} options
         * @param {Record<string, string[]>} visitorKeys
         */
        MemberExpression(node, options, visitorKeys) {
            if (options.considerGetters) {
                return true
            }
            if (
                options.considerImplicitTypeConversion &&
                node.computed &&
                node.property.type !== "Literal"
            ) {
                return true
            }
            return this.$visitChildren(node, options, visitorKeys)
        },
        /**
         * @param {MethodDefinition} node
         * @param {HasSideEffectOptions} options
         * @param {Record<string, string[]>} visitorKeys
         */
        MethodDefinition(node, options, visitorKeys) {
            if (
                options.considerImplicitTypeConversion &&
                node.computed &&
                node.key.type !== "Literal"
            ) {
                return true
            }
            return this.$visitChildren(node, options, visitorKeys)
        },
        NewExpression() {
            return true
        },
        /**
         * @param {Property} node
         * @param {HasSideEffectOptions} options
         * @param {Record<string, string[]>} visitorKeys
         */
        Property(node, options, visitorKeys) {
            if (
                options.considerImplicitTypeConversion &&
                node.computed &&
                node.key.type !== "Literal"
            ) {
                return true
            }
            return this.$visitChildren(node, options, visitorKeys)
        },
        /**
         * @param {PropertyDefinition} node
         * @param {HasSideEffectOptions} options
         * @param {Record<string, string[]>} visitorKeys
         */
        PropertyDefinition(node, options, visitorKeys) {
            if (
                options.considerImplicitTypeConversion &&
                node.computed &&
                node.key.type !== "Literal"
            ) {
                return true
            }
            return this.$visitChildren(node, options, visitorKeys)
        },
        /**
         * @param {UnaryExpression} node
         * @param {HasSideEffectOptions} options
         * @param {Record<string, string[]>} visitorKeys
         */
        UnaryExpression(node, options, visitorKeys) {
            if (node.operator === "delete") {
                return true
            }
            if (
                options.considerImplicitTypeConversion &&
                typeConversionUnaryOps.has(node.operator) &&
                node.argument.type !== "Literal"
            ) {
                return true
            }
            return this.$visitChildren(node, options, visitorKeys)
        },
        UpdateExpression() {
            return true
        },
        YieldExpression() {
            return true
        },
    }),
);

/**
 * Check whether a given node has any side effect or not.
 * @param {Node} node The node to get.
 * @param {SourceCode} sourceCode The source code object.
 * @param {HasSideEffectOptions} [options] The option object.
 * @returns {boolean} `true` if the node has a certain side effect.
 */
function hasSideEffect(node, sourceCode, options = {}) {
    const { considerGetters = false, considerImplicitTypeConversion = false } =
        options;
    return visitor.$visit(
        node,
        { considerGetters, considerImplicitTypeConversion },
        sourceCode.visitorKeys || eslintVisitorKeys.KEYS,
    )
}

/** @typedef {import("estree").Node} Node */
/** @typedef {import("@typescript-eslint/types").TSESTree.NewExpression} TSNewExpression */
/** @typedef {import("@typescript-eslint/types").TSESTree.CallExpression} TSCallExpression */
/** @typedef {import("eslint").SourceCode} SourceCode */
/** @typedef {import("eslint").AST.Token} Token */
/** @typedef {import("eslint").Rule.Node} RuleNode */

/**
 * Get the left parenthesis of the parent node syntax if it exists.
 * E.g., `if (a) {}` then the `(`.
 * @param {Node} node The AST node to check.
 * @param {SourceCode} sourceCode The source code object to get tokens.
 * @returns {Token|null} The left parenthesis of the parent node syntax
 */
// eslint-disable-next-line complexity
function getParentSyntaxParen(node, sourceCode) {
    const parent = /** @type {RuleNode} */ (node).parent;

    if (!parent) {
        return null
    }

    switch (parent.type) {
        case "CallExpression":
        case "NewExpression":
            if (parent.arguments.length === 1 && parent.arguments[0] === node) {
                return sourceCode.getTokenAfter(
                    // @ts-expect-error https://github.com/typescript-eslint/typescript-eslint/pull/5384
                    parent.typeArguments ||
                        /** @type {RuleNode} */ (
                            /** @type {unknown} */ (
                                /** @type {TSNewExpression | TSCallExpression} */ (
                                    parent
                                ).typeParameters
                            )
                        ) ||
                        parent.callee,
                    isOpeningParenToken,
                )
            }
            return null

        case "DoWhileStatement":
            if (parent.test === node) {
                return sourceCode.getTokenAfter(
                    parent.body,
                    isOpeningParenToken,
                )
            }
            return null

        case "IfStatement":
        case "WhileStatement":
            if (parent.test === node) {
                return sourceCode.getFirstToken(parent, 1)
            }
            return null

        case "ImportExpression":
            if (parent.source === node) {
                return sourceCode.getFirstToken(parent, 1)
            }
            return null

        case "SwitchStatement":
            if (parent.discriminant === node) {
                return sourceCode.getFirstToken(parent, 1)
            }
            return null

        case "WithStatement":
            if (parent.object === node) {
                return sourceCode.getFirstToken(parent, 1)
            }
            return null

        default:
            return null
    }
}

/**
 * Check whether a given node is parenthesized or not.
 * @param {number} times The number of parantheses.
 * @param {Node} node The AST node to check.
 * @param {SourceCode} sourceCode The source code object to get tokens.
 * @returns {boolean} `true` if the node is parenthesized the given times.
 */
/**
 * Check whether a given node is parenthesized or not.
 * @param {Node} node The AST node to check.
 * @param {SourceCode} sourceCode The source code object to get tokens.
 * @returns {boolean} `true` if the node is parenthesized.
 */
/**
 * Check whether a given node is parenthesized or not.
 * @param {Node|number} timesOrNode The first parameter.
 * @param {Node|SourceCode} nodeOrSourceCode The second parameter.
 * @param {SourceCode} [optionalSourceCode] The third parameter.
 * @returns {boolean} `true` if the node is parenthesized.
 */
function isParenthesized(
    timesOrNode,
    nodeOrSourceCode,
    optionalSourceCode,
) {
    /** @type {number} */
    let times,
        /** @type {RuleNode} */
        node,
        /** @type {SourceCode} */
        sourceCode,
        maybeLeftParen,
        maybeRightParen;
    if (typeof timesOrNode === "number") {
        times = timesOrNode | 0;
        node = /** @type {RuleNode} */ (nodeOrSourceCode);
        sourceCode = /** @type {SourceCode} */ (optionalSourceCode);
        if (!(times >= 1)) {
            throw new TypeError("'times' should be a positive integer.")
        }
    } else {
        times = 1;
        node = /** @type {RuleNode} */ (timesOrNode);
        sourceCode = /** @type {SourceCode} */ (nodeOrSourceCode);
    }

    if (
        node == null ||
        // `Program` can't be parenthesized
        node.parent == null ||
        // `CatchClause.param` can't be parenthesized, example `try {} catch (error) {}`
        (node.parent.type === "CatchClause" && node.parent.param === node)
    ) {
        return false
    }

    maybeLeftParen = maybeRightParen = node;
    do {
        maybeLeftParen = sourceCode.getTokenBefore(maybeLeftParen);
        maybeRightParen = sourceCode.getTokenAfter(maybeRightParen);
    } while (
        maybeLeftParen != null &&
        maybeRightParen != null &&
        isOpeningParenToken(maybeLeftParen) &&
        isClosingParenToken(maybeRightParen) &&
        // Avoid false positive such as `if (a) {}`
        maybeLeftParen !== getParentSyntaxParen(node, sourceCode) &&
        --times > 0
    )

    return times === 0
}

/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */

const placeholder = /\$(?:[$&`']|[1-9][0-9]?)/gu;

/** @type {WeakMap<PatternMatcher, {pattern:RegExp,escaped:boolean}>} */
const internal = new WeakMap();

/**
 * Check whether a given character is escaped or not.
 * @param {string} str The string to check.
 * @param {number} index The location of the character to check.
 * @returns {boolean} `true` if the character is escaped.
 */
function isEscaped(str, index) {
    let escaped = false;
    for (let i = index - 1; i >= 0 && str.charCodeAt(i) === 0x5c; --i) {
        escaped = !escaped;
    }
    return escaped
}

/**
 * Replace a given string by a given matcher.
 * @param {PatternMatcher} matcher The pattern matcher.
 * @param {string} str The string to be replaced.
 * @param {string} replacement The new substring to replace each matched part.
 * @returns {string} The replaced string.
 */
function replaceS(matcher, str, replacement) {
    const chunks = [];
    let index = 0;

    /**
     * @param {string} key The placeholder.
     * @param {RegExpExecArray} match The matched information.
     * @returns {string} The replaced string.
     */
    function replacer(key, match) {
        switch (key) {
            case "$$":
                return "$"
            case "$&":
                return match[0]
            case "$`":
                return str.slice(0, match.index)
            case "$'":
                return str.slice(match.index + match[0].length)
            default: {
                const i = key.slice(1);
                if (i in match) {
                    return match[/** @type {any} */ (i)]
                }
                return key
            }
        }
    }

    for (const match of matcher.execAll(str)) {
        chunks.push(str.slice(index, match.index));
        chunks.push(
            replacement.replace(placeholder, (key) => replacer(key, match)),
        );
        index = match.index + match[0].length;
    }
    chunks.push(str.slice(index));

    return chunks.join("")
}

/**
 * Replace a given string by a given matcher.
 * @param {PatternMatcher} matcher The pattern matcher.
 * @param {string} str The string to be replaced.
 * @param {(substring: string, ...args: any[]) => string} replace The function to replace each matched part.
 * @returns {string} The replaced string.
 */
function replaceF(matcher, str, replace) {
    const chunks = [];
    let index = 0;

    for (const match of matcher.execAll(str)) {
        chunks.push(str.slice(index, match.index));
        chunks.push(
            String(
                replace(
                    .../** @type {[string, ...string[]]} */ (
                        /** @type {string[]} */ (match)
                    ),
                    match.index,
                    match.input,
                ),
            ),
        );
        index = match.index + match[0].length;
    }
    chunks.push(str.slice(index));

    return chunks.join("")
}

/**
 * The class to find patterns as considering escape sequences.
 */
class PatternMatcher {
    /**
     * Initialize this matcher.
     * @param {RegExp} pattern The pattern to match.
     * @param {{escaped?:boolean}} [options] The options.
     */
    constructor(pattern, options = {}) {
        const { escaped = false } = options;
        if (!(pattern instanceof RegExp)) {
            throw new TypeError("'pattern' should be a RegExp instance.")
        }
        if (!pattern.flags.includes("g")) {
            throw new Error("'pattern' should contains 'g' flag.")
        }

        internal.set(this, {
            pattern: new RegExp(pattern.source, pattern.flags),
            escaped: Boolean(escaped),
        });
    }

    /**
     * Find the pattern in a given string.
     * @param {string} str The string to find.
     * @returns {IterableIterator<RegExpExecArray>} The iterator which iterate the matched information.
     */
    *execAll(str) {
        const { pattern, escaped } =
            /** @type {{pattern:RegExp,escaped:boolean}} */ (internal.get(this));
        let match = null;
        let lastIndex = 0;

        pattern.lastIndex = 0;
        while ((match = pattern.exec(str)) != null) {
            if (escaped || !isEscaped(str, match.index)) {
                lastIndex = pattern.lastIndex;
                yield match;
                pattern.lastIndex = lastIndex;
            }
        }
    }

    /**
     * Check whether the pattern is found in a given string.
     * @param {string} str The string to check.
     * @returns {boolean} `true` if the pattern was found in the string.
     */
    test(str) {
        const it = this.execAll(str);
        const ret = it.next();
        return !ret.done
    }

    /**
     * Replace a given string.
     * @param {string} str The string to be replaced.
     * @param {(string|((...strs:string[])=>string))} replacer The string or function to replace. This is the same as the 2nd argument of `String.prototype.replace`.
     * @returns {string} The replaced string.
     */
    [Symbol.replace](str, replacer) {
        return typeof replacer === "function"
            ? replaceF(this, String(str), replacer)
            : replaceS(this, String(str), String(replacer))
    }
}

/** @typedef {import("eslint").Scope.Scope} Scope */
/** @typedef {import("eslint").Scope.Variable} Variable */
/** @typedef {import("eslint").Rule.Node} RuleNode */
/** @typedef {import("estree").Node} Node */
/** @typedef {import("estree").Expression} Expression */
/** @typedef {import("estree").Pattern} Pattern */
/** @typedef {import("estree").Identifier} Identifier */
/** @typedef {import("estree").SimpleCallExpression} CallExpression */
/** @typedef {import("estree").Program} Program */
/** @typedef {import("estree").ImportDeclaration} ImportDeclaration */
/** @typedef {import("estree").ExportAllDeclaration} ExportAllDeclaration */
/** @typedef {import("estree").ExportDefaultDeclaration} ExportDefaultDeclaration */
/** @typedef {import("estree").ExportNamedDeclaration} ExportNamedDeclaration */
/** @typedef {import("estree").ImportSpecifier} ImportSpecifier */
/** @typedef {import("estree").ImportDefaultSpecifier} ImportDefaultSpecifier */
/** @typedef {import("estree").ImportNamespaceSpecifier} ImportNamespaceSpecifier */
/** @typedef {import("estree").ExportSpecifier} ExportSpecifier */
/** @typedef {import("estree").Property} Property */
/** @typedef {import("estree").AssignmentProperty} AssignmentProperty */
/** @typedef {import("estree").Literal} Literal */
/** @typedef {import("@typescript-eslint/types").TSESTree.Node} TSESTreeNode */
/** @typedef {import("./types.mjs").ReferenceTrackerOptions} ReferenceTrackerOptions */
/**
 * @template T
 * @typedef {import("./types.mjs").TraceMap<T>} TraceMap
 */
/**
 * @template T
 * @typedef {import("./types.mjs").TraceMapObject<T>} TraceMapObject
 */
/**
 * @template T
 * @typedef {import("./types.mjs").TrackedReferences<T>} TrackedReferences
 */

const IMPORT_TYPE = /^(?:Import|Export(?:All|Default|Named))Declaration$/u;

/**
 * Check whether a given node is an import node or not.
 * @param {Node} node
 * @returns {node is ImportDeclaration|ExportAllDeclaration|ExportNamedDeclaration&{source: Literal}} `true` if the node is an import node.
 */
function isHasSource(node) {
    return (
        IMPORT_TYPE.test(node.type) &&
        /** @type {ImportDeclaration|ExportAllDeclaration|ExportNamedDeclaration} */ (
            node
        ).source != null
    )
}
const has =
    /** @type {<T>(traceMap: TraceMap<unknown>, v: T) => v is (string extends T ? string : T)} */ (
        Function.call.bind(Object.hasOwnProperty)
    );

const READ = Symbol("read");
const CALL = Symbol("call");
const CONSTRUCT = Symbol("construct");
const ESM = Symbol("esm");

const requireCall = { require: { [CALL]: true } };

/**
 * Check whether a given variable is modified or not.
 * @param {Variable|undefined} variable The variable to check.
 * @returns {boolean} `true` if the variable is modified.
 */
function isModifiedGlobal(variable) {
    return (
        variable == null ||
        variable.defs.length !== 0 ||
        variable.references.some((r) => r.isWrite())
    )
}

/**
 * Check if the value of a given node is passed through to the parent syntax as-is.
 * For example, `a` and `b` in (`a || b` and `c ? a : b`) are passed through.
 * @param {Node} node A node to check.
 * @returns {node is RuleNode & {parent: Expression}} `true` if the node is passed through.
 */
function isPassThrough(node) {
    const parent = /** @type {TSESTreeNode} */ (node).parent;

    if (parent) {
        switch (parent.type) {
            case "ConditionalExpression":
                return parent.consequent === node || parent.alternate === node
            case "LogicalExpression":
                return true
            case "SequenceExpression":
                return (
                    parent.expressions[parent.expressions.length - 1] === node
                )
            case "ChainExpression":
                return true
            case "TSAsExpression":
            case "TSSatisfiesExpression":
            case "TSTypeAssertion":
            case "TSNonNullExpression":
            case "TSInstantiationExpression":
                return true

            default:
                return false
        }
    }
    return false
}

/**
 * The reference tracker.
 */
class ReferenceTracker {
    /**
     * Initialize this tracker.
     * @param {Scope} globalScope The global scope.
     * @param {object} [options] The options.
     * @param {"legacy"|"strict"} [options.mode="strict"] The mode to determine the ImportDeclaration's behavior for CJS modules.
     * @param {string[]} [options.globalObjectNames=["global","globalThis","self","window"]] The variable names for Global Object.
     */
    constructor(globalScope, options = {}) {
        const {
            mode = "strict",
            globalObjectNames = ["global", "globalThis", "self", "window"],
        } = options;
        /** @private @type {Variable[]} */
        this.variableStack = [];
        /** @private */
        this.globalScope = globalScope;
        /** @private */
        this.mode = mode;
        /** @private */
        this.globalObjectNames = globalObjectNames.slice(0);
    }

    /**
     * Iterate the references of global variables.
     * @template T
     * @param {TraceMap<T>} traceMap The trace map.
     * @returns {IterableIterator<TrackedReferences<T>>} The iterator to iterate references.
     */
    *iterateGlobalReferences(traceMap) {
        for (const key of Object.keys(traceMap)) {
            const nextTraceMap = traceMap[key];
            const path = [key];
            const variable = this.globalScope.set.get(key);

            if (isModifiedGlobal(variable)) {
                continue
            }

            yield* this._iterateVariableReferences(
                /** @type {Variable} */ (variable),
                path,
                nextTraceMap,
                true,
            );
        }

        for (const key of this.globalObjectNames) {
            /** @type {string[]} */
            const path = [];
            const variable = this.globalScope.set.get(key);

            if (isModifiedGlobal(variable)) {
                continue
            }

            yield* this._iterateVariableReferences(
                /** @type {Variable} */ (variable),
                path,
                traceMap,
                false,
            );
        }
    }

    /**
     * Iterate the references of CommonJS modules.
     * @template T
     * @param {TraceMap<T>} traceMap The trace map.
     * @returns {IterableIterator<TrackedReferences<T>>} The iterator to iterate references.
     */
    *iterateCjsReferences(traceMap) {
        for (const { node } of this.iterateGlobalReferences(requireCall)) {
            const key = getStringIfConstant(
                /** @type {CallExpression} */ (node).arguments[0],
            );
            if (key == null || !has(traceMap, key)) {
                continue
            }

            const nextTraceMap = traceMap[key];
            const path = [key];

            if (nextTraceMap[READ]) {
                yield {
                    node,
                    path,
                    type: READ,
                    info: nextTraceMap[READ],
                };
            }
            yield* this._iteratePropertyReferences(
                /** @type {CallExpression} */ (node),
                path,
                nextTraceMap,
            );
        }
    }

    /**
     * Iterate the references of ES modules.
     * @template T
     * @param {TraceMap<T>} traceMap The trace map.
     * @returns {IterableIterator<TrackedReferences<T>>} The iterator to iterate references.
     */
    *iterateEsmReferences(traceMap) {
        const programNode = /** @type {Program} */ (this.globalScope.block);

        for (const node of programNode.body) {
            if (!isHasSource(node)) {
                continue
            }
            const moduleId = /** @type {string} */ (node.source.value);

            if (!has(traceMap, moduleId)) {
                continue
            }
            const nextTraceMap = traceMap[moduleId];
            const path = [moduleId];

            if (nextTraceMap[READ]) {
                yield {
                    // eslint-disable-next-line object-shorthand -- apply type
                    node: /** @type {RuleNode} */ (node),
                    path,
                    type: READ,
                    info: nextTraceMap[READ],
                };
            }

            if (node.type === "ExportAllDeclaration") {
                for (const key of Object.keys(nextTraceMap)) {
                    const exportTraceMap = nextTraceMap[key];
                    if (exportTraceMap[READ]) {
                        yield {
                            // eslint-disable-next-line object-shorthand -- apply type
                            node: /** @type {RuleNode} */ (node),
                            path: path.concat(key),
                            type: READ,
                            info: exportTraceMap[READ],
                        };
                    }
                }
            } else {
                for (const specifier of node.specifiers) {
                    const esm = has(nextTraceMap, ESM);
                    const it = this._iterateImportReferences(
                        specifier,
                        path,
                        esm
                            ? nextTraceMap
                            : this.mode === "legacy"
                            ? { default: nextTraceMap, ...nextTraceMap }
                            : { default: nextTraceMap },
                    );

                    if (esm) {
                        yield* it;
                    } else {
                        for (const report of it) {
                            report.path = report.path.filter(exceptDefault);
                            if (
                                report.path.length >= 2 ||
                                report.type !== READ
                            ) {
                                yield report;
                            }
                        }
                    }
                }
            }
        }
    }

    /**
     * Iterate the property references for a given expression AST node.
     * @template T
     * @param {Expression} node The expression AST node to iterate property references.
     * @param {TraceMap<T>} traceMap The trace map.
     * @returns {IterableIterator<TrackedReferences<T>>} The iterator to iterate property references.
     */
    *iteratePropertyReferences(node, traceMap) {
        yield* this._iteratePropertyReferences(node, [], traceMap);
    }

    /**
     * Iterate the references for a given variable.
     * @private
     * @template T
     * @param {Variable} variable The variable to iterate that references.
     * @param {string[]} path The current path.
     * @param {TraceMapObject<T>} traceMap The trace map.
     * @param {boolean} shouldReport = The flag to report those references.
     * @returns {IterableIterator<TrackedReferences<T>>} The iterator to iterate references.
     */
    *_iterateVariableReferences(variable, path, traceMap, shouldReport) {
        if (this.variableStack.includes(variable)) {
            return
        }
        this.variableStack.push(variable);
        try {
            for (const reference of variable.references) {
                if (!reference.isRead()) {
                    continue
                }
                const node = /** @type {RuleNode & Identifier} */ (
                    reference.identifier
                );

                if (shouldReport && traceMap[READ]) {
                    yield { node, path, type: READ, info: traceMap[READ] };
                }
                yield* this._iteratePropertyReferences(node, path, traceMap);
            }
        } finally {
            this.variableStack.pop();
        }
    }

    /**
     * Iterate the references for a given AST node.
     * @private
     * @template T
     * @param {Expression} rootNode The AST node to iterate references.
     * @param {string[]} path The current path.
     * @param {TraceMapObject<T>} traceMap The trace map.
     * @returns {IterableIterator<TrackedReferences<T>>} The iterator to iterate references.
     */
    //eslint-disable-next-line complexity
    *_iteratePropertyReferences(rootNode, path, traceMap) {
        let node = rootNode;
        while (isPassThrough(node)) {
            node = node.parent;
        }

        const parent = /** @type {RuleNode} */ (node).parent;
        if (!parent) {
            return
        }
        if (parent.type === "MemberExpression") {
            if (parent.object === node) {
                const key = getPropertyName(parent);
                if (key == null || !has(traceMap, key)) {
                    return
                }

                path = path.concat(key); //eslint-disable-line no-param-reassign
                const nextTraceMap = traceMap[key];
                if (nextTraceMap[READ]) {
                    yield {
                        node: parent,
                        path,
                        type: READ,
                        info: nextTraceMap[READ],
                    };
                }
                yield* this._iteratePropertyReferences(
                    parent,
                    path,
                    nextTraceMap,
                );
            }
            return
        }
        if (parent.type === "CallExpression") {
            if (parent.callee === node && traceMap[CALL]) {
                yield { node: parent, path, type: CALL, info: traceMap[CALL] };
            }
            return
        }
        if (parent.type === "NewExpression") {
            if (parent.callee === node && traceMap[CONSTRUCT]) {
                yield {
                    node: parent,
                    path,
                    type: CONSTRUCT,
                    info: traceMap[CONSTRUCT],
                };
            }
            return
        }
        if (parent.type === "AssignmentExpression") {
            if (parent.right === node) {
                yield* this._iterateLhsReferences(parent.left, path, traceMap);
                yield* this._iteratePropertyReferences(parent, path, traceMap);
            }
            return
        }
        if (parent.type === "AssignmentPattern") {
            if (parent.right === node) {
                yield* this._iterateLhsReferences(parent.left, path, traceMap);
            }
            return
        }
        if (parent.type === "VariableDeclarator") {
            if (parent.init === node) {
                yield* this._iterateLhsReferences(parent.id, path, traceMap);
            }
        }
    }

    /**
     * Iterate the references for a given Pattern node.
     * @private
     * @template T
     * @param {Pattern} patternNode The Pattern node to iterate references.
     * @param {string[]} path The current path.
     * @param {TraceMapObject<T>} traceMap The trace map.
     * @returns {IterableIterator<TrackedReferences<T>>} The iterator to iterate references.
     */
    *_iterateLhsReferences(patternNode, path, traceMap) {
        if (patternNode.type === "Identifier") {
            const variable = findVariable(this.globalScope, patternNode);
            if (variable != null) {
                yield* this._iterateVariableReferences(
                    variable,
                    path,
                    traceMap,
                    false,
                );
            }
            return
        }
        if (patternNode.type === "ObjectPattern") {
            for (const property of patternNode.properties) {
                const key = getPropertyName(
                    /** @type {AssignmentProperty} */ (property),
                );

                if (key == null || !has(traceMap, key)) {
                    continue
                }

                const nextPath = path.concat(key);
                const nextTraceMap = traceMap[key];
                if (nextTraceMap[READ]) {
                    yield {
                        node: /** @type {RuleNode} */ (property),
                        path: nextPath,
                        type: READ,
                        info: nextTraceMap[READ],
                    };
                }
                yield* this._iterateLhsReferences(
                    /** @type {AssignmentProperty} */ (property).value,
                    nextPath,
                    nextTraceMap,
                );
            }
            return
        }
        if (patternNode.type === "AssignmentPattern") {
            yield* this._iterateLhsReferences(patternNode.left, path, traceMap);
        }
    }

    /**
     * Iterate the references for a given ModuleSpecifier node.
     * @private
     * @template T
     * @param {ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier | ExportSpecifier} specifierNode The ModuleSpecifier node to iterate references.
     * @param {string[]} path The current path.
     * @param {TraceMapObject<T>} traceMap The trace map.
     * @returns {IterableIterator<TrackedReferences<T>>} The iterator to iterate references.
     */
    *_iterateImportReferences(specifierNode, path, traceMap) {
        const type = specifierNode.type;

        if (type === "ImportSpecifier" || type === "ImportDefaultSpecifier") {
            const key =
                type === "ImportDefaultSpecifier"
                    ? "default"
                    : specifierNode.imported.type === "Identifier"
                    ? specifierNode.imported.name
                    : specifierNode.imported.value;
            if (!has(traceMap, key)) {
                return
            }

            path = path.concat(key); //eslint-disable-line no-param-reassign
            const nextTraceMap = traceMap[key];
            if (nextTraceMap[READ]) {
                yield {
                    node: /** @type {RuleNode} */ (specifierNode),
                    path,
                    type: READ,
                    info: nextTraceMap[READ],
                };
            }
            yield* this._iterateVariableReferences(
                /** @type {Variable} */ (
                    findVariable(this.globalScope, specifierNode.local)
                ),
                path,
                nextTraceMap,
                false,
            );

            return
        }

        if (type === "ImportNamespaceSpecifier") {
            yield* this._iterateVariableReferences(
                /** @type {Variable} */ (
                    findVariable(this.globalScope, specifierNode.local)
                ),
                path,
                traceMap,
                false,
            );
            return
        }

        if (type === "ExportSpecifier") {
            const key =
                specifierNode.local.type === "Identifier"
                    ? specifierNode.local.name
                    : specifierNode.local.value;
            if (!has(traceMap, key)) {
                return
            }

            path = path.concat(key); //eslint-disable-line no-param-reassign
            const nextTraceMap = traceMap[key];
            if (nextTraceMap[READ]) {
                yield {
                    node: /** @type {RuleNode} */ (specifierNode),
                    path,
                    type: READ,
                    info: nextTraceMap[READ],
                };
            }
        }
    }
}

ReferenceTracker.READ = READ;
ReferenceTracker.CALL = CALL;
ReferenceTracker.CONSTRUCT = CONSTRUCT;
ReferenceTracker.ESM = ESM;

/**
 * This is a predicate function for Array#filter.
 * @param {string} name A name part.
 * @param {number} index The index of the name.
 * @returns {boolean} `false` if it's default.
 */
function exceptDefault(name, index) {
    return !(index === 1 && name === "default")
}

/** @typedef {import("./types.mjs").StaticValue} StaticValue */

var index = {
    CALL,
    CONSTRUCT,
    ESM,
    findVariable,
    getFunctionHeadLocation,
    getFunctionNameWithKind,
    getInnermostScope,
    getPropertyName,
    getStaticValue,
    getStringIfConstant,
    hasSideEffect,
    isArrowToken,
    isClosingBraceToken,
    isClosingBracketToken,
    isClosingParenToken,
    isColonToken,
    isCommaToken,
    isCommentToken,
    isNotArrowToken,
    isNotClosingBraceToken,
    isNotClosingBracketToken,
    isNotClosingParenToken,
    isNotColonToken,
    isNotCommaToken,
    isNotCommentToken,
    isNotOpeningBraceToken,
    isNotOpeningBracketToken,
    isNotOpeningParenToken,
    isNotSemicolonToken,
    isOpeningBraceToken,
    isOpeningBracketToken,
    isOpeningParenToken,
    isParenthesized,
    isSemicolonToken,
    PatternMatcher,
    READ,
    ReferenceTracker,
};

exports.CALL = CALL;
exports.CONSTRUCT = CONSTRUCT;
exports.ESM = ESM;
exports.PatternMatcher = PatternMatcher;
exports.READ = READ;
exports.ReferenceTracker = ReferenceTracker;
exports["default"] = index;
exports.findVariable = findVariable;
exports.getFunctionHeadLocation = getFunctionHeadLocation;
exports.getFunctionNameWithKind = getFunctionNameWithKind;
exports.getInnermostScope = getInnermostScope;
exports.getPropertyName = getPropertyName;
exports.getStaticValue = getStaticValue;
exports.getStringIfConstant = getStringIfConstant;
exports.hasSideEffect = hasSideEffect;
exports.isArrowToken = isArrowToken;
exports.isClosingBraceToken = isClosingBraceToken;
exports.isClosingBracketToken = isClosingBracketToken;
exports.isClosingParenToken = isClosingParenToken;
exports.isColonToken = isColonToken;
exports.isCommaToken = isCommaToken;
exports.isCommentToken = isCommentToken;
exports.isNotArrowToken = isNotArrowToken;
exports.isNotClosingBraceToken = isNotClosingBraceToken;
exports.isNotClosingBracketToken = isNotClosingBracketToken;
exports.isNotClosingParenToken = isNotClosingParenToken;
exports.isNotColonToken = isNotColonToken;
exports.isNotCommaToken = isNotCommaToken;
exports.isNotCommentToken = isNotCommentToken;
exports.isNotOpeningBraceToken = isNotOpeningBraceToken;
exports.isNotOpeningBracketToken = isNotOpeningBracketToken;
exports.isNotOpeningParenToken = isNotOpeningParenToken;
exports.isNotSemicolonToken = isNotSemicolonToken;
exports.isOpeningBraceToken = isOpeningBraceToken;
exports.isOpeningBracketToken = isOpeningBracketToken;
exports.isOpeningParenToken = isOpeningParenToken;
exports.isParenthesized = isParenthesized;
exports.isSemicolonToken = isSemicolonToken;
//# sourceMappingURL=index.js.map
