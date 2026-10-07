/**
 * @fileoverview Common utils for AST.
 * @author Gyandeep Singh
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const esutils = require("esutils");
const espree = require("espree");
const escapeRegExp = require("escape-string-regexp");
const {
    breakableTypePattern,
    createGlobalLinebreakMatcher,
    lineBreakPattern,
    shebangPattern
} = require("../../shared/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const anyFunctionPattern = /^(?:Function(?:Declaration|Expression)|ArrowFunctionExpression)$/u;
const anyLoopPattern = /^(?:DoWhile|For|ForIn|ForOf|While)Statement$/u;
const arrayOrTypedArrayPattern = /Array$/u;
const arrayMethodPattern = /^(?:every|filter|find|findIndex|forEach|map|some)$/u;
const bindOrCallOrApplyPattern = /^(?:bind|call|apply)$/u;
const thisTagPattern = /^[\s*]*@this/mu;


const COMMENTS_IGNORE_PATTERN = /^\s*(?:eslint|jshint\s+|jslint\s+|istanbul\s+|globals?\s+|exported\s+|jscs)/u;
const LINEBREAKS = new Set(["\r\n", "\r", "\n", "\u2028", "\u2029"]);

// A set of node types that can contain a list of statements
const STATEMENT_LIST_PARENTS = new Set(["Program", "BlockStatement", "SwitchCase"]);

const DECIMAL_INTEGER_PATTERN = /^(?:0|0[0-7]*[89]\d*|[1-9](?:_?\d)*)$/u;

// Tests the presence of at least one LegacyOctalEscapeSequence or NonOctalDecimalEscapeSequence in a raw string
const OCTAL_OR_NON_OCTAL_DECIMAL_ESCAPE_PATTERN = /^(?:[^\\]|\\.)*\\(?:[1-9]|0[0-9])/su;

const LOGICAL_ASSIGNMENT_OPERATORS = new Set(["&&=", "||=", "??="]);

/**
 * Checks reference if is non initializer and writable.
 * @param {Reference} reference A reference to check.
 * @param {int} index The index of the reference in the references.
 * @param {Reference[]} references The array that the reference belongs to.
 * @returns {boolean} Success/Failure
 * @private
 */
function isModifyingReference(reference, index, references) {
    const identifier = reference.identifier;

    /*
     * Destructuring assignments can have multiple default value, so
     * possibly there are multiple writeable references for the same
     * identifier.
     */
    const modifyingDifferentIdentifier = index === 0 ||
        references[index - 1].identifier !== identifier;

    return (identifier &&
        reference.init === false &&
        reference.isWrite() &&
        modifyingDifferentIdentifier
    );
}

/**
 * Checks whether the given string starts with uppercase or not.
 * @param {string} s The string to check.
 * @returns {boolean} `true` if the string starts with uppercase.
 */
function startsWithUpperCase(s) {
    return s[0] !== s[0].toLocaleLowerCase();
}

/**
 * Checks whether or not a node is a constructor.
 * @param {ASTNode} node A function node to check.
 * @returns {boolean} Whether or not a node is a constructor.
 */
function isES5Constructor(node) {
    return (node.id && startsWithUpperCase(node.id.name));
}

/**
 * Finds a function node from ancestors of a node.
 * @param {ASTNode} node A start node to find.
 * @returns {Node|null} A found function node.
 */
function getUpperFunction(node) {
    for (let currentNode = node; currentNode; currentNode = currentNode.parent) {
        if (anyFunctionPattern.test(currentNode.type)) {
            return currentNode;
        }
    }
    return null;
}

/**
 * Checks whether a given node is a function node or not.
 * The following types are function nodes:
 *
 * - ArrowFunctionExpression
 * - FunctionDeclaration
 * - FunctionExpression
 * @param {ASTNode|null} node A node to check.
 * @returns {boolean} `true` if the node is a function node.
 */
function isFunction(node) {
    return Boolean(node && anyFunctionPattern.test(node.type));
}

/**
 * Checks whether a given node is a loop node or not.
 * The following types are loop nodes:
 *
 * - DoWhileStatement
 * - ForInStatement
 * - ForOfStatement
 * - ForStatement
 * - WhileStatement
 * @param {ASTNode|null} node A node to check.
 * @returns {boolean} `true` if the node is a loop node.
 */
function isLoop(node) {
    return Boolean(node && anyLoopPattern.test(node.type));
}

/**
 * Checks whether the given node is in a loop or not.
 * @param {ASTNode} node The node to check.
 * @returns {boolean} `true` if the node is in a loop.
 */
function isInLoop(node) {
    for (let currentNode = node; currentNode && !isFunction(currentNode); currentNode = currentNode.parent) {
        if (isLoop(currentNode)) {
            return true;
        }
    }

    return false;
}

/**
 * Determines whether the given node is a `null` literal.
 * @param {ASTNode} node The node to check
 * @returns {boolean} `true` if the node is a `null` literal
 */
function isNullLiteral(node) {

    /*
     * Checking `node.value === null` does not guarantee that a literal is a null literal.
     * When parsing values that cannot be represented in the current environment (e.g. unicode
     * regexes in Node 4), `node.value` is set to `null` because it wouldn't be possible to
     * set `node.value` to a unicode regex. To make sure a literal is actually `null`, check
     * `node.regex` instead. Also see: https://github.com/eslint/eslint/issues/8020
     */
    return node.type === "Literal" && node.value === null && !node.regex && !node.bigint;
}

/**
 * Checks whether or not a node is `null` or `undefined`.
 * @param {ASTNode} node A node to check.
 * @returns {boolean} Whether or not the node is a `null` or `undefined`.
 * @public
 */
function isNullOrUndefined(node) {
    return (
        isNullLiteral(node) ||
        (node.type === "Identifier" && node.name === "undefined") ||
        (node.type === "UnaryExpression" && node.operator === "void")
    );
}

/**
 * Checks whether or not a node is callee.
 * @param {ASTNode} node A node to check.
 * @returns {boolean} Whether or not the node is callee.
 */
function isCallee(node) {
    return node.parent.type === "CallExpression" && node.parent.callee === node;
}

/**
 * Returns the result of the string conversion applied to the evaluated value of the given expression node,
 * if it can be determined statically.
 *
 * This function returns a `string` value for all `Literal` nodes and simple `TemplateLiteral` nodes only.
 * In all other cases, this function returns `null`.
 * @param {ASTNode} node Expression node.
 * @returns {string|null} String value if it can be determined. Otherwise, `null`.
 */
function getStaticStringValue(node) {
    switch (node.type) {
        case "Literal":
            if (node.value === null) {
                if (isNullLiteral(node)) {
                    return String(node.value); // "null"
                }
                if (node.regex) {
                    return `/${node.regex.pattern}/${node.regex.flags}`;
                }
                if (node.bigint) {
                    return node.bigint;
                }

                // Otherwise, this is an unknown literal. The function will return null.

            } else {
                return String(node.value);
            }
            break;
        case "TemplateLiteral":
            if (node.expressions.length === 0 && node.quasis.length === 1) {
                return node.quasis[0].value.cooked;
            }
            break;

            // no default
    }

    return null;
}

/**
 * Gets the property name of a given node.
 * The node can be a MemberExpression, a Property, or a MethodDefinition.
 *
 * If the name is dynamic, this returns `null`.
 *
 * For examples:
 *
 *     a.b           // => "b"
 *     a["b"]        // => "b"
 *     a['b']        // => "b"
 *     a[`b`]        // => "b"
 *     a[100]        // => "100"
 *     a[b]          // => null
 *     a["a" + "b"]  // => null
 *     a[tag`b`]     // => null
 *     a[`${b}`]     // => null
 *
 *     let a = {b: 1}            // => "b"
 *     let a = {["b"]: 1}        // => "b"
 *     let a = {['b']: 1}        // => "b"
 *     let a = {[`b`]: 1}        // => "b"
 *     let a = {[100]: 1}        // => "100"
 *     let a = {[b]: 1}          // => null
 *     let a = {["a" + "b"]: 1}  // => null
 *     let a = {[tag`b`]: 1}     // => null
 *     let a = {[`${b}`]: 1}     // => null
 * @param {ASTNode} node The node to get.
 * @returns {string|null} The property name if static. Otherwise, null.
 */
function getStaticPropertyName(node) {
    let prop;

    switch (node && node.type) {
        case "ChainExpression":
            return getStaticPropertyName(node.expression);

        case "Property":
        case "MethodDefinition":
            prop = node.key;
            break;

        case "MemberExpression":
            prop = node.property;
            break;

            // no default
    }

    if (prop) {
        if (prop.type === "Identifier" && !node.computed) {
            return prop.name;
        }

        return getStaticStringValue(prop);
    }

    return null;
}

/**
 * Retrieve `ChainExpression#expression` value if the given node a `ChainExpression` node. Otherwise, pass through it.
 * @param {ASTNode} node The node to address.
 * @returns {ASTNode} The `ChainExpression#expression` value if the node is a `ChainExpression` node. Otherwise, the node.
 */
function skipChainExpression(node) {
    return node && node.type === "ChainExpression" ? node.expression : node;
}

/**
 * Check if the `actual` is an expected value.
 * @param {string} actual The string value to check.
 * @param {string | RegExp} expected The expected string value or pattern.
 * @returns {boolean} `true` if the `actual` is an expected value.
 */
function checkText(actual, expected) {
    return typeof expected === "string"
        ? actual === expected
        : expected.test(actual);
}

/**
 * Check if a given node is an Identifier node with a given name.
 * @param {ASTNode} node The node to check.
 * @param {string | RegExp} name The expected name or the expected pattern of the object name.
 * @returns {boolean} `true` if the node is an Identifier node with the name.
 */
function isSpecificId(node, name) {
    return node.type === "Identifier" && checkText(node.name, name);
}

/**
 * Check if a given node is member access with a given object name and property name pair.
 * This is regardless of optional or not.
 * @param {ASTNode} node The node to check.
 * @param {string | RegExp | null} objectName The expected name or the expected pattern of the object name. If this is nullish, this method doesn't check object.
 * @param {string | RegExp | null} propertyName The expected name or the expected pattern of the property name. If this is nullish, this method doesn't check property.
 * @returns {boolean} `true` if the node is member access with the object name and property name pair.
 * The node is a `MemberExpression` or `ChainExpression`.
 */
function isSpecificMemberAccess(node, objectName, propertyName) {
    const checkNode = skipChainExpression(node);

    if (checkNode.type !== "MemberExpression") {
        return false;
    }

    if (objectName && !isSpecificId(checkNode.object, objectName)) {
        return false;
    }

    if (propertyName) {
        const actualPropertyName = getStaticPropertyName(checkNode);

        if (typeof actualPropertyName !== "string" || !checkText(actualPropertyName, propertyName)) {
            return false;
        }
    }

    return true;
}

/**
 * Check if two literal nodes are the same value.
 * @param {ASTNode} left The Literal node to compare.
 * @param {ASTNode} right The other Literal node to compare.
 * @returns {boolean} `true` if the two literal nodes are the same value.
 */
function equalLiteralValue(left, right) {

    // RegExp literal.
    if (left.regex || right.regex) {
        return Boolean(
            left.regex &&
            right.regex &&
            left.regex.pattern === right.regex.pattern &&
            left.regex.flags === right.regex.flags
        );
    }

    // BigInt literal.
    if (left.bigint || right.bigint) {
        return left.bigint === right.bigint;
    }

    return left.value === right.value;
}

/**
 * Check if two expressions reference the same value. For example:
 *     a = a
 *     a.b = a.b
 *     a[0] = a[0]
 *     a['b'] = a['b']
 * @param {ASTNode} left The left side of the comparison.
 * @param {ASTNode} right The right side of the comparison.
 * @param {boolean} [disableStaticComputedKey] Don't address `a.b` and `a["b"]` are the same if `true`. For backward compatibility.
 * @returns {boolean} `true` if both sides match and reference the same value.
 */
function isSameReference(left, right, disableStaticComputedKey = false) {
    if (left.type !== right.type) {

        // Handle `a.b` and `a?.b` are samely.
        if (left.type === "ChainExpression") {
            return isSameReference(left.expression, right, disableStaticComputedKey);
        }
        if (right.type === "ChainExpression") {
            return isSameReference(left, right.expression, disableStaticComputedKey);
        }

        return false;
    }

    switch (left.type) {
        case "Super":
        case "ThisExpression":
            return true;

        case "Identifier":
            return left.name === right.name;
        case "Literal":
            return equalLiteralValue(left, right);

        case "ChainExpression":
            return isSameReference(left.expression, right.expression, disableStaticComputedKey);

        case "MemberExpression": {
            if (!disableStaticComputedKey) {
                const nameA = getStaticPropertyName(left);

                // x.y = x["y"]
                if (nameA !== null) {
                    return (
                        isSameReference(left.object, right.object, disableStaticComputedKey) &&
                        nameA === getStaticPropertyName(right)
                    );
                }
            }

            /*
             * x[0] = x[0]
             * x[y] = x[y]
             * x.y = x.y
             */
            return (
                left.computed === right.computed &&
                isSameReference(left.object, right.object, disableStaticComputedKey) &&
                isSameReference(left.property, right.property, disableStaticComputedKey)
            );
        }

        default:
            return false;
    }
}

/**
 * Checks whether or not a node is `Reflect.apply`.
 * @param {ASTNode} node A node to check.
 * @returns {boolean} Whether or not the node is a `Reflect.apply`.
 */
function isReflectApply(node) {
    return isSpecificMemberAccess(node, "Reflect", "apply");
}

/**
 * Checks whether or not a node is `Array.from`.
 * @param {ASTNode} node A node to check.
 * @returns {boolean} Whether or not the node is a `Array.from`.
 */
function isArrayFromMethod(node) {
    return isSpecificMemberAccess(node, arrayOrTypedArrayPattern, "from");
}

/**
 * Checks whether or not a node is a method which has `thisArg`.
 * @param {ASTNode} node A node to check.
 * @returns {boolean} Whether or not the node is a method which has `thisArg`.
 */
function isMethodWhichHasThisArg(node) {
    return isSpecificMemberAccess(node, null, arrayMethodPattern);
}

/**
 * Creates the negate function of the given function.
 * @param {Function} f The function to negate.
 * @returns {Function} Negated function.
 */
function negate(f) {
    return token => !f(token);
}

/**
 * Checks whether or not a node has a `@this` tag in its comments.
 * @param {ASTNode} node A node to check.
 * @param {SourceCode} sourceCode A SourceCode instance to get comments.
 * @returns {boolean} Whether or not the node has a `@this` tag in its comments.
 */
function hasJSDocThisTag(node, sourceCode) {
    const jsdocComment = sourceCode.getJSDocComment(node);

    if (jsdocComment && thisTagPattern.test(jsdocComment.value)) {
        return true;
    }

    // Checks `@this` in its leading comments for callbacks,
    // because callbacks don't have its JSDoc comment.
    // e.g.
    //     sinon.test(/* @this sinon.Sandbox */function() { this.spy(); });
    return sourceCode.getCommentsBefore(node).some(comment => thisTagPattern.test(comment.value));
}

/**
 * Determines if a node is surrounded by parentheses.
 * @param {SourceCode} sourceCode The ESLint source code object
 * @param {ASTNode} node The node to be checked.
 * @returns {boolean} True if the node is parenthesised.
 * @private
 */
function isParenthesised(sourceCode, node) {
    const previousToken = sourceCode.getTokenBefore(node),
        nextToken = sourceCode.getTokenAfter(node);

    return Boolean(previousToken && nextToken) &&
        previousToken.value === "(" && previousToken.range[1] <= node.range[0] &&
        nextToken.value === ")" && nextToken.range[0] >= node.range[1];
}

/**
 * Checks if the given token is an arrow token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is an arrow token.
 */
function isArrowToken(token) {
    return token.value === "=>" && token.type === "Punctuator";
}

/**
 * Checks if the given token is a comma token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is a comma token.
 */
function isCommaToken(token) {
    return token.value === "," && token.type === "Punctuator";
}

/**
 * Checks if the given token is a dot token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is a dot token.
 */
function isDotToken(token) {
    return token.value === "." && token.type === "Punctuator";
}

/**
 * Checks if the given token is a `?.` token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is a `?.` token.
 */
function isQuestionDotToken(token) {
    return token.value === "?." && token.type === "Punctuator";
}

/**
 * Checks if the given token is a semicolon token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is a semicolon token.
 */
function isSemicolonToken(token) {
    return token.value === ";" && token.type === "Punctuator";
}

/**
 * Checks if the given token is a colon token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is a colon token.
 */
function isColonToken(token) {
    return token.value === ":" && token.type === "Punctuator";
}

/**
 * Checks if the given token is an opening parenthesis token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is an opening parenthesis token.
 */
function isOpeningParenToken(token) {
    return token.value === "(" && token.type === "Punctuator";
}

/**
 * Checks if the given token is a closing parenthesis token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is a closing parenthesis token.
 */
function isClosingParenToken(token) {
    return token.value === ")" && token.type === "Punctuator";
}

/**
 * Checks if the given token is an opening square bracket token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is an opening square bracket token.
 */
function isOpeningBracketToken(token) {
    return token.value === "[" && token.type === "Punctuator";
}

/**
 * Checks if the given token is a closing square bracket token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is a closing square bracket token.
 */
function isClosingBracketToken(token) {
    return token.value === "]" && token.type === "Punctuator";
}

/**
 * Checks if the given token is an opening brace token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is an opening brace token.
 */
function isOpeningBraceToken(token) {
    return token.value === "{" && token.type === "Punctuator";
}

/**
 * Checks if the given token is a closing brace token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is a closing brace token.
 */
function isClosingBraceToken(token) {
    return token.value === "}" && token.type === "Punctuator";
}

/**
 * Checks if the given token is a comment token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is a comment token.
 */
function isCommentToken(token) {
    return token.type === "Line" || token.type === "Block" || token.type === "Shebang";
}

/**
 * Checks if the given token is a keyword token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is a keyword token.
 */
function isKeywordToken(token) {
    return token.type === "Keyword";
}

/**
 * Gets the `(` token of the given function node.
 * @param {ASTNode} node The function node to get.
 * @param {SourceCode} sourceCode The source code object to get tokens.
 * @returns {Token} `(` token.
 */
function getOpeningParenOfParams(node, sourceCode) {
    return node.id
        ? sourceCode.getTokenAfter(node.id, isOpeningParenToken)
        : sourceCode.getFirstToken(node, isOpeningParenToken);
}

/**
 * Checks whether or not the tokens of two given nodes are same.
 * @param {ASTNode} left A node 1 to compare.
 * @param {ASTNode} right A node 2 to compare.
 * @param {SourceCode} sourceCode The ESLint source code object.
 * @returns {boolean} the source code for the given node.
 */
function equalTokens(left, right, sourceCode) {
    const tokensL = sourceCode.getTokens(left);
    const tokensR = sourceCode.getTokens(right);

    if (tokensL.length !== tokensR.length) {
        return false;
    }
    for (let i = 0; i < tokensL.length; ++i) {
        if (tokensL[i].type !== tokensR[i].type ||
            tokensL[i].value !== tokensR[i].value
        ) {
            return false;
        }
    }

    return true;
}

/**
 * Check if the given node is a true logical expression or not.
 *
 * The three binary expressions logical-or (`||`), logical-and (`&&`), and
 * coalesce (`??`) are known as `ShortCircuitExpression`.
 * But ESTree represents those by `LogicalExpression` node.
 *
 * This function rejects coalesce expressions of `LogicalExpression` node.
 * @param {ASTNode} node The node to check.
 * @returns {boolean} `true` if the node is `&&` or `||`.
 * @see https://tc39.es/ecma262/#prod-ShortCircuitExpression
 */
function isLogicalExpression(node) {
    return (
        node.type === "LogicalExpression" &&
            (node.operator === "&&" || node.operator === "||")
    );
}

/**
 * Check if the given node is a nullish coalescing expression or not.
 *
 * The three binary expressions logical-or (`||`), logical-and (`&&`), and
 * coalesce (`??`) are known as `ShortCircuitExpression`.
 * But ESTree represents those by `LogicalExpression` node.
 *
 * This function finds only coalesce expressions of `LogicalExpression` node.
 * @param {ASTNode} node The node to check.
 * @returns {boolean} `true` if the node is `??`.
 */
function isCoalesceExpression(node) {
    return node.type === "LogicalExpression" && node.operator === "??";
}

/**
 * Check if given two nodes are the pair of a logical expression and a coalesce expression.
 * @param {ASTNode} left A node to check.
 * @param {ASTNode} right Another node to check.
 * @returns {boolean} `true` if the two nodes are the pair of a logical expression and a coalesce expression.
 */
function isMixedLogicalAndCoalesceExpressions(left, right) {
    return (
        (isLogicalExpression(left) && isCoalesceExpression(right)) ||
            (isCoalesceExpression(left) && isLogicalExpression(right))
    );
}

/**
 * Checks if the given operator is a logical assignment operator.
 * @param {string} operator The operator to check.
 * @returns {boolean} `true` if the operator is a logical assignment operator.
 */
function isLogicalAssignmentOperator(operator) {
    return LOGICAL_ASSIGNMENT_OPERATORS.has(operator);
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = {
    COMMENTS_IGNORE_PATTERN,
    LINEBREAKS,
    LINEBREAK_MATCHER: lineBreakPattern,
    SHEBANG_MATCHER: shebangPattern,
    STATEMENT_LIST_PARENTS,

    /**
     * Determines whether two adjacent tokens are on the same line.
     * @param {Object} left The left token object.
     * @param {Object} right The right token object.
     * @returns {boolean} Whether or not the tokens are on the same line.
     * @public
     */
    isTokenOnSameLine(left, right) {
        return left.loc.end.line === right.loc.start.line;
    },

    isNullOrUndefined,
    isCallee,
    isES5Constructor,
    getUpperFunction,
    isFunction,
    isLoop,
    isInLoop,
    isArrayFromMethod,
    isParenthesised,
    createGlobalLinebreakMatcher,
    equalTokens,

    isArrowToken,
    isClosingBraceToken,
    isClosingBracketToken,
    isClosingParenToken,
    isColonToken,
    isCommaToken,
    isCommentToken,
    isDotToken,
    isQuestionDotToken,
    isKeywordToken,
    isNotClosingBraceToken: negate(isClosingBraceToken),
    isNotClosingBracketToken: negate(isClosingBracketToken),
    isNotClosingParenToken: negate(isClosingParenToken),
    isNotColonToken: negate(isColonToken),
    isNotCommaToken: negate(isCommaToken),
    isNotDotToken: negate(isDotToken),
    isNotQuestionDotToken: negate(isQuestionDotToken),
    isNotOpeningBraceToken: negate(isOpeningBraceToken),
    isNotOpeningBracketToken: negate(isOpeningBracketToken),
    isNotOpeningParenToken: negate(isOpeningParenToken),
    isNotSemicolonToken: negate(isSemicolonToken),
    isOpeningBraceToken,
    isOpeningBracketToken,
    isOpeningParenToken,
    isSemicolonToken,

    /**
     * Checks whether or not a given node is a string literal.
     * @param {ASTNode} node A node to check.
     * @returns {boolean} `true` if the node is a string literal.
     */
    isStringLiteral(node) {
        return (
            (node.type === "Literal" && typeof node.value === "string") ||
            node.type === "TemplateLiteral"
        );
    },

    /**
     * Checks whether a given node is a breakable statement or not.
     * The node is breakable if the node is one of the following type:
     *
     * - DoWhileStatement
     * - ForInStatement
     * - ForOfStatement
     * - ForStatement
     * - SwitchStatement
     * - WhileStatement
     * @param {ASTNode} node A node to check.
     * @returns {boolean} `true` if the node is breakable.
     */
    isBreakableStatement(node) {
        return breakableTypePattern.test(node.type);
    },

    /**
     * Gets references which are non initializer and writable.
     * @param {Reference[]} references An array of references.
     * @returns {Reference[]} An array of only references which are non initializer and writable.
     * @public
     */
    getModifyingReferences(references) {
        return references.filter(isModifyingReference);
    },

    /**
     * Validate that a string passed in is surrounded by the specified character
     * @param  {string} val The text to check.
     * @param  {string} character The character to see if it's surrounded by.
     * @returns {boolean} True if the text is surrounded by the character, false if not.
     * @private
     */
    isSurroundedBy(val, character) {
        return val[0] === character && val[val.length - 1] === character;
    },

    /**
     * Returns whether the provided node is an ESLint directive comment or not
     * @param {Line|Block} node The comment token to be checked
     * @returns {boolean} `true` if the node is an ESLint directive comment
     */
    isDirectiveComment(node) {
        const comment = node.value.trim();

        return (
            node.type === "Line" && comment.indexOf("eslint-") === 0 ||
            node.type === "Block" && (
                comment.indexOf("global ") === 0 ||
                comment.indexOf("eslint ") === 0 ||
                comment.indexOf("eslint-") === 0
            )
        );
    },

    /**
     * Gets the trailing statement of a given node.
     *
     *     if (code)
     *         consequent;
     *
     * When taking this `IfStatement`, returns `consequent;` statement.
     * @param {ASTNode} A node to get.
     * @returns {ASTNode|null} The trailing statement's node.
     */
    getTrailingStatement: esutils.ast.trailingStatement,

    /**
     * Finds the variable by a given name in a given scope and its upper scopes.
     * @param {eslint-scope.Scope} initScope A scope to start find.
     * @param {string} name A variable name to find.
     * @returns {eslint-scope.Variable|null} A found variable or `null`.
     */
    getVariableByName(initScope, name) {
        let scope = initScope;

        while (scope) {
            const variable = scope.set.get(name);

            if (variable) {
                return variable;
            }

            scope = scope.upper;
        }

        return null;
    },

    /**
     * Checks whether or not a given function node is the default `this` binding.
     *
     * First, this checks the node:
     *
     * - The function name does not start with uppercase. It's a convention to capitalize the names
     *   of constructor functions. This check is not performed if `capIsConstructor` is set to `false`.
     * - The function does not have a JSDoc comment that has a @this tag.
     *
     * Next, this checks the location of the node.
     * If the location is below, this judges `this` is valid.
     *
     * - The location is not on an object literal.
     * - The location is not assigned to a variable which starts with an uppercase letter. Applies to anonymous
     *   functions only, as the name of the variable is considered to be the name of the function in this case.
     *   This check is not performed if `capIsConstructor` is set to `false`.
     * - The location is not on an ES2015 class.
     * - Its `bind`/`call`/`apply` method is not called directly.
     * - The function is not a callback of array methods (such as `.forEach()`) if `thisArg` is given.
     * @param {ASTNode} node A function node to check.
     * @param {SourceCode} sourceCode A SourceCode instance to get comments.
     * @param {boolean} [capIsConstructor = true] `false` disables the assumption that functions which name starts
     * with an uppercase or are assigned to a variable which name starts with an uppercase are constructors.
     * @returns {boolean} The function node is the default `this` binding.
     */
    isDefaultThisBinding(node, sourceCode, { capIsConstructor = true } = {}) {
        if (
            (capIsConstructor && isES5Constructor(node)) ||
            hasJSDocThisTag(node, sourceCode)
        ) {
            return false;
        }
        const isAnonymous = node.id === null;
        let currentNode = node;

        while (currentNode) {
            const parent = currentNode.parent;

            switch (parent.type) {

                /*
                 * Looks up the destination.
                 * e.g., obj.foo = nativeFoo || function foo() { ... };
                 */
                case "LogicalExpression":
                case "ConditionalExpression":
                case "ChainExpression":
                    currentNode = parent;
                    break;

                /*
                 * If the upper function is IIFE, checks the destination of the return value.
                 * e.g.
                 *   obj.foo = (function() {
                 *     // setup...
                 *     return function foo() { ... };
                 *   })();
                 *   obj.foo = (() =>
                 *     function foo() { ... }
                 *   )();
                 */
                case "ReturnStatement": {
                    const func = getUpperFunction(parent);

                    if (func === null || !isCallee(func)) {
                        return true;
                    }
                    currentNode = func.parent;
                    break;
                }
                case "ArrowFunctionExpression":
                    if (currentNode !== parent.body || !isCallee(parent)) {
                        return true;
                    }
                    currentNode = parent.parent;
                    break;

                /*
                 * e.g.
                 *   var obj = { foo() { ... } };
                 *   var obj = { foo: function() { ... } };
                 *   class A { constructor() { ... } }
                 *   class A { foo() { ... } }
                 *   class A { get foo() { ... } }
                 *   class A { set foo() { ... } }
                 *   class A { static foo() { ... } }
                 */
                case "Property":
                case "MethodDefinition":
                    return parent.value !== currentNode;

                /*
                 * e.g.
                 *   obj.foo = function foo() { ... };
                 *   Foo = function() { ... };
                 *   [obj.foo = function foo() { ... }] = a;
                 *   [Foo = function() { ... }] = a;
                 */
                case "AssignmentExpression":
                case "AssignmentPattern":
                    if (parent.left.type === "MemberExpression") {
                        return false;
                    }
                    if (
                        capIsConstructor &&
                        isAnonymous &&
                        parent.left.type === "Identifier" &&
                        startsWithUpperCase(parent.left.name)
                    ) {
                        return false;
                    }
                    return true;

                /*
                 * e.g.
                 *   var Foo = function() { ... };
                 */
                case "VariableDeclarator":
                    return !(
                        capIsConstructor &&
                        isAnonymous &&
                        parent.init === currentNode &&
                        parent.id.type === "Identifier" &&
                        startsWithUpperCase(parent.id.name)
                    );

                /*
                 * e.g.
                 *   var foo = function foo() { ... }.bind(obj);
                 *   (function foo() { ... }).call(obj);
                 *   (function foo() { ... }).apply(obj, []);
                 */
                case "MemberExpression":
                    if (
                        parent.object === currentNode &&
                        isSpecificMemberAccess(parent, null, bindOrCallOrApplyPattern)
                    ) {
                        const maybeCalleeNode = parent.parent.type === "ChainExpression"
                            ? parent.parent
                            : parent;

                        return !(
                            isCallee(maybeCalleeNode) &&
                            maybeCalleeNode.parent.arguments.length >= 1 &&
                            !isNullOrUndefined(maybeCalleeNode.parent.arguments[0])
                        );
                    }
                    return true;

                /*
                 * e.g.
                 *   Reflect.apply(function() {}, obj, []);
                 *   Array.from([], function() {}, obj);
                 *   list.forEach(function() {}, obj);
                 */
                case "CallExpression":
                    if (isReflectApply(parent.callee)) {
                        return (
                            parent.arguments.length !== 3 ||
                            parent.arguments[0] !== currentNode ||
                            isNullOrUndefined(parent.arguments[1])
                        );
                    }
                    if (isArrayFromMethod(parent.callee)) {
                        return (
                            parent.arguments.length !== 3 ||
                            parent.arguments[1] !== currentNode ||
                            isNullOrUndefined(parent.arguments[2])
                        );
                    }
                    if (isMethodWhichHasThisArg(parent.callee)) {
                        return (
                            parent.arguments.length !== 2 ||
                            parent.arguments[0] !== currentNode ||
                            isNullOrUndefined(parent.arguments[1])
                        );
                    }
                    return true;

                // Otherwise `this` is default.
                default:
                    return true;
            }
        }

        /* istanbul ignore next */
        return true;
    },

    /**
     * Get the precedence level based on the node type
     * @param {ASTNode} node node to evaluate
     * @returns {int} precedence level
     * @private
     */
    getPrecedence(node) {
        switch (node.type) {
            case "SequenceExpression":
                return 0;

            case "AssignmentExpression":
            case "ArrowFunctionExpression":
            case "YieldExpression":
                return 1;

            case "ConditionalExpression":
                return 3;

            case "LogicalExpression":
                switch (node.operator) {
                    case "||":
                    case "??":
                        return 4;
                    case "&&":
                        return 5;

                    // no default
                }

                /* falls through */

            case "BinaryExpression":

                switch (node.operator) {
                    case "|":
                        return 6;
                    case "^":
                        return 7;
                    case "&":
                        return 8;
                    case "==":
                    case "!=":
                    case "===":
                    case "!==":
                        return 9;
                    case "<":
                    case "<=":
                    case ">":
                    case ">=":
                    case "in":
                    case "instanceof":
                        return 10;
                    case "<<":
                    case ">>":
                    case ">>>":
                        return 11;
                    case "+":
                    case "-":
                        return 12;
                    case "*":
                    case "/":
                    case "%":
                        return 13;
                    case "**":
                        return 15;

                    // no default
                }

                /* falls through */

            case "UnaryExpression":
            case "AwaitExpression":
                return 16;

            case "UpdateExpression":
                return 17;

            case "CallExpression":
            case "ChainExpression":
            case "ImportExpression":
                return 18;

            case "NewExpression":
                return 19;

            default:
                return 20;
        }
    },

    /**
     * Checks whether the given node is an empty block node or not.
     * @param {ASTNode|null} node The node to check.
     * @returns {boolean} `true` if the node is an empty block.
     */
    isEmptyBlock(node) {
        return Boolean(node && node.type === "BlockStatement" && node.body.length === 0);
    },

    /**
     * Checks whether the given node is an empty function node or not.
     * @param {ASTNode|null} node The node to check.
     * @returns {boolean} `true` if the node is an empty function.
     */
    isEmptyFunction(node) {
        return isFunction(node) && module.exports.isEmptyBlock(node.body);
    },

    /**
     * Get directives from directive prologue of a Program or Function node.
     * @param {ASTNode} node The node to check.
     * @returns {ASTNode[]} The directives found in the directive prologue.
     */
    getDirectivePrologue(node) {
        const directives = [];

        // Directive prologues only occur at the top of files or functions.
        if (
            node.type === "Program" ||
            node.type === "FunctionDeclaration" ||
            node.type === "FunctionExpression" ||

            /*
             * Do not check arrow functions with implicit return.
             * `() => "use strict";` returns the string `"use strict"`.
             */
            (node.type === "ArrowFunctionExpression" && node.body.type === "BlockStatement")
        ) {
            const statements = node.type === "Program" ? node.body : node.body.body;

            for (const statement of statements) {
                if (
                    statement.type === "ExpressionStatement" &&
                    statement.expression.type === "Literal"
                ) {
                    directives.push(statement);
                } else {
                    break;
                }
            }
        }

        return directives;
    },


    /**
     * Determines whether this node is a decimal integer literal. If a node is a decimal integer literal, a dot added
     * after the node will be parsed as a decimal point, rather than a property-access dot.
     * @param {ASTNode} node The node to check.
     * @returns {boolean} `true` if this node is a decimal integer.
     * @example
     *
     * 0         // true
     * 5         // true
     * 50        // true
     * 5_000     // true
     * 1_234_56  // true
     * 08        // true
     * 0192      // true
     * 5.        // false
     * .5        // false
     * 5.0       // false
     * 5.00_00   // false
     * 05        // false
     * 0x5       // false
     * 0b101     // false
     * 0b11_01   // false
     * 0o5       // false
     * 5e0       // false
     * 5e1_000   // false
     * 5n        // false
     * 1_000n    // false
     * '5'       // false
     */
    isDecimalInteger(node) {
        return node.type === "Literal" && typeof node.value === "number" &&
            DECIMAL_INTEGER_PATTERN.test(node.raw);
    },

    /**
     * Determines whether this token is a decimal integer numeric token.
     * This is similar to isDecimalInteger(), but for tokens.
     * @param {Token} token The token to check.
     * @returns {boolean} `true` if this token is a decimal integer.
     */
    isDecimalIntegerNumericToken(token) {
        return token.type === "Numeric" && DECIMAL_INTEGER_PATTERN.test(token.value);
    },

    /**
     * Gets the name and kind of the given function node.
     *
     * - `function foo() {}`  .................... `function 'foo'`
     * - `(function foo() {})`  .................. `function 'foo'`
     * - `(function() {})`  ...................... `function`
     * - `function* foo() {}`  ................... `generator function 'foo'`
     * - `(function* foo() {})`  ................. `generator function 'foo'`
     * - `(function*() {})`  ..................... `generator function`
     * - `() => {}`  ............................. `arrow function`
     * - `async () => {}`  ....................... `async arrow function`
     * - `({ foo: function foo() {} })`  ......... `method 'foo'`
     * - `({ foo: function() {} })`  ............. `method 'foo'`
     * - `({ ['foo']: function() {} })`  ......... `method 'foo'`
     * - `({ [foo]: function() {} })`  ........... `method`
     * - `({ foo() {} })`  ....................... `method 'foo'`
     * - `({ foo: function* foo() {} })`  ........ `generator method 'foo'`
     * - `({ foo: function*() {} })`  ............ `generator method 'foo'`
     * - `({ ['foo']: function*() {} })`  ........ `generator method 'foo'`
     * - `({ [foo]: function*() {} })`  .......... `generator method`
     * - `({ *foo() {} })`  ...................... `generator method 'foo'`
     * - `({ foo: async function foo() {} })`  ... `async method 'foo'`
     * - `({ foo: async function() {} })`  ....... `async method 'foo'`
     * - `({ ['foo']: async function() {} })`  ... `async method 'foo'`
     * - `({ [foo]: async function() {} })`  ..... `async method`
     * - `({ async foo() {} })`  ................. `async method 'foo'`
     * - `({ get foo() {} })`  ................... `getter 'foo'`
     * - `({ set foo(a) {} })`  .................. `setter 'foo'`
     * - `class A { constructor() {} }`  ......... `constructor`
     * - `class A { foo() {} }`  ................. `method 'foo'`
     * - `class A { *foo() {} }`  ................ `generator method 'foo'`
     * - `class A { async foo() {} }`  ........... `async method 'foo'`
     * - `class A { ['foo']() {} }`  ............. `method 'foo'`
     * - `class A { *['foo']() {} }`  ............ `generator method 'foo'`
     * - `class A { async ['foo']() {} }`  ....... `async method 'foo'`
     * - `class A { [foo]() {} }`  ............... `method`
     * - `class A { *[foo]() {} }`  .............. `generator method`
     * - `class A { async [foo]() {} }`  ......... `async method`
     * - `class A { get foo() {} }`  ............. `getter 'foo'`
     * - `class A { set foo(a) {} }`  ............ `setter 'foo'`
     * - `class A { static foo() {} }`  .......... `static method 'foo'`
     * - `class A { static *foo() {} }`  ......... `static generator method 'foo'`
     * - `class A { static async foo() {} }`  .... `static async method 'foo'`
     * - `class A { static get foo() {} }`  ...... `static getter 'foo'`
     * - `class A { static set foo(a) {} }`  ..... `static setter 'foo'`
     * @param {ASTNode} node The function node to get.
     * @returns {string} The name and kind of the function node.
     */
    getFunctionNameWithKind(node) {
        const parent = node.parent;
        const tokens = [];

        if (parent.type === "MethodDefinition" && parent.static) {
            tokens.push("static");
        }
        if (node.async) {
            tokens.push("async");
        }
        if (node.generator) {
            tokens.push("generator");
        }

        if (node.type === "ArrowFunctionExpression") {
            tokens.push("arrow", "function");
        } else if (parent.type === "Property" || parent.type === "MethodDefinition") {
            if (parent.kind === "constructor") {
                return "constructor";
            }
            if (parent.kind === "get") {
                tokens.push("getter");
            } else if (parent.kind === "set") {
                tokens.push("setter");
            } else {
                tokens.push("method");
            }
        } else {
            tokens.push("function");
        }

        if (node.id) {
            tokens.push(`'${node.id.name}'`);
        } else {
            const name = getStaticPropertyName(parent);

            if (name !== null) {
                tokens.push(`'${name}'`);
            }
        }

        return tokens.join(" ");
    },

    /**
     * Gets the location of the given function node for reporting.
     *
     * - `function foo() {}`
     *    ^^^^^^^^^^^^
     * - `(function foo() {})`
     *     ^^^^^^^^^^^^
     * - `(function() {})`
     *     ^^^^^^^^
     * - `function* foo() {}`
     *    ^^^^^^^^^^^^^
     * - `(function* foo() {})`
     *     ^^^^^^^^^^^^^
     * - `(function*() {})`
     *     ^^^^^^^^^
     * - `() => {}`
     *       ^^
     * - `async () => {}`
     *             ^^
     * - `({ foo: function foo() {} })`
     *       ^^^^^^^^^^^^^^^^^
     * - `({ foo: function() {} })`
     *       ^^^^^^^^^^^^^
     * - `({ ['foo']: function() {} })`
     *       ^^^^^^^^^^^^^^^^^
     * - `({ [foo]: function() {} })`
     *       ^^^^^^^^^^^^^^^
     * - `({ foo() {} })`
     *       ^^^
     * - `({ foo: function* foo() {} })`
     *       ^^^^^^^^^^^^^^^^^^
     * - `({ foo: function*() {} })`
     *       ^^^^^^^^^^^^^^
     * - `({ ['foo']: function*() {} })`
     *       ^^^^^^^^^^^^^^^^^^
     * - `({ [foo]: function*() {} })`
     *       ^^^^^^^^^^^^^^^^
     * - `({ *foo() {} })`
     *       ^^^^
     * - `({ foo: async function foo() {} })`
     *       ^^^^^^^^^^^^^^^^^^^^^^^
     * - `({ foo: async function() {} })`
     *       ^^^^^^^^^^^^^^^^^^^
     * - `({ ['foo']: async function() {} })`
     *       ^^^^^^^^^^^^^^^^^^^^^^^
     * - `({ [foo]: async function() {} })`
     *       ^^^^^^^^^^^^^^^^^^^^^
     * - `({ async foo() {} })`
     *       ^^^^^^^^^
     * - `({ get foo() {} })`
     *       ^^^^^^^
     * - `({ set foo(a) {} })`
     *       ^^^^^^^
     * - `class A { constructor() {} }`
     *              ^^^^^^^^^^^
     * - `class A { foo() {} }`
     *              ^^^
     * - `class A { *foo() {} }`
     *              ^^^^
     * - `class A { async foo() {} }`
     *              ^^^^^^^^^
     * - `class A { ['foo']() {} }`
     *              ^^^^^^^
     * - `class A { *['foo']() {} }`
     *              ^^^^^^^^
     * - `class A { async ['foo']() {} }`
     *              ^^^^^^^^^^^^^
     * - `class A { [foo]() {} }`
     *              ^^^^^
     * - `class A { *[foo]() {} }`
     *              ^^^^^^
     * - `class A { async [foo]() {} }`
     *              ^^^^^^^^^^^
     * - `class A { get foo() {} }`
     *              ^^^^^^^
     * - `class A { set foo(a) {} }`
     *              ^^^^^^^
     * - `class A { static foo() {} }`
     *              ^^^^^^^^^^
     * - `class A { static *foo() {} }`
     *              ^^^^^^^^^^^
     * - `class A { static async foo() {} }`
     *              ^^^^^^^^^^^^^^^^
     * - `class A { static get foo() {} }`
     *              ^^^^^^^^^^^^^^
     * - `class A { static set foo(a) {} }`
     *              ^^^^^^^^^^^^^^
     * @param {ASTNode} node The function node to get.
     * @param {SourceCode} sourceCode The source code object to get tokens.
     * @returns {string} The location of the function node for reporting.
     */
    getFunctionHeadLoc(node, sourceCode) {
        const parent = node.parent;
        let start = null;
        let end = null;

        if (node.type === "ArrowFunctionExpression") {
            const arrowToken = sourceCode.getTokenBefore(node.body, isArrowToken);

            start = arrowToken.loc.start;
            end = arrowToken.loc.end;
        } else if (parent.type === "Property" || parent.type === "MethodDefinition") {
            start = parent.loc.start;
            end = getOpeningParenOfParams(node, sourceCode).loc.start;
        } else {
            start = node.loc.start;
            end = getOpeningParenOfParams(node, sourceCode).loc.start;
        }

        return {
            start: Object.assign({}, start),
            end: Object.assign({}, end)
        };
    },

    /**
     * Gets next location when the result is not out of bound, otherwise returns null.
     *
     * Assumptions:
     *
     * - The given location represents a valid location in the given source code.
     * - Columns are 0-based.
     * - Lines are 1-based.
     * - Column immediately after the last character in a line (not incl. linebreaks) is considered to be a valid location.
     * - If the source code ends with a linebreak, `sourceCode.lines` array will have an extra element (empty string) at the end.
     *   The start (column 0) of that extra line is considered to be a valid location.
     *
     * Examples of successive locations (line, column):
     *
     * code: foo
     * locations: (1, 0) -> (1, 1) -> (1, 2) -> (1, 3) -> null
     *
     * code: foo<LF>
     * locations: (1, 0) -> (1, 1) -> (1, 2) -> (1, 3) -> (2, 0) -> null
     *
     * code: foo<CR><LF>
     * locations: (1, 0) -> (1, 1) -> (1, 2) -> (1, 3) -> (2, 0) -> null
     *
     * code: a<LF>b
     * locations: (1, 0) -> (1, 1) -> (2, 0) -> (2, 1) -> null
     *
     * code: a<LF>b<LF>
     * locations: (1, 0) -> (1, 1) -> (2, 0) -> (2, 1) -> (3, 0) -> null
     *
     * code: a<CR><LF>b<CR><LF>
     * locations: (1, 0) -> (1, 1) -> (2, 0) -> (2, 1) -> (3, 0) -> null
     *
     * code: a<LF><LF>
     * locations: (1, 0) -> (1, 1) -> (2, 0) -> (3, 0) -> null
     *
     * code: <LF>
     * locations: (1, 0) -> (2, 0) -> null
     *
     * code:
     * locations: (1, 0) -> null
     * @param {SourceCode} sourceCode The sourceCode
     * @param {{line: number, column: number}} location The location
     * @returns {{line: number, column: number} | null} Next location
     */
    getNextLocation(sourceCode, { line, column }) {
        if (column < sourceCode.lines[line - 1].length) {
            return {
                line,
                column: column + 1
            };
        }

        if (line < sourceCode.lines.length) {
            return {
                line: line + 1,
                column: 0
            };
        }

        return null;
    },

    /**
     * Gets the parenthesized text of a node. This is similar to sourceCode.getText(node), but it also includes any parentheses
     * surrounding the node.
     * @param {SourceCode} sourceCode The source code object
     * @param {ASTNode} node An expression node
     * @returns {string} The text representing the node, with all surrounding parentheses included
     */
    getParenthesisedText(sourceCode, node) {
        let leftToken = sourceCode.getFirstToken(node);
        let rightToken = sourceCode.getLastToken(node);

        while (
            sourceCode.getTokenBefore(leftToken) &&
            sourceCode.getTokenBefore(leftToken).type === "Punctuator" &&
            sourceCode.getTokenBefore(leftToken).value === "(" &&
            sourceCode.getTokenAfter(rightToken) &&
            sourceCode.getTokenAfter(rightToken).type === "Punctuator" &&
            sourceCode.getTokenAfter(rightToken).value === ")"
        ) {
            leftToken = sourceCode.getTokenBefore(leftToken);
            rightToken = sourceCode.getTokenAfter(rightToken);
        }

        return sourceCode.getText().slice(leftToken.range[0], rightToken.range[1]);
    },

    /*
     * Determine if a node has a possibility to be an Error object
     * @param  {ASTNode} node  ASTNode to check
     * @returns {boolean} True if there is a chance it contains an Error obj
     */
    couldBeError(node) {
        switch (node.type) {
            case "Identifier":
            case "CallExpression":
            case "NewExpression":
            case "MemberExpression":
            case "TaggedTemplateExpression":
            case "YieldExpression":
            case "AwaitExpression":
            case "ChainExpression":
                return true; // possibly an error object.

            case "AssignmentExpression":
                if (["=", "&&="].includes(node.operator)) {
                    return module.exports.couldBeError(node.right);
                }

                if (["||=", "??="].includes(node.operator)) {
                    return module.exports.couldBeError(node.left) || module.exports.couldBeError(node.right);
                }

                /**
                 * All other assignment operators are mathematical assignment operators (arithmetic or bitwise).
                 * An assignment expression with a mathematical operator can either evaluate to a primitive value,
                 * or throw, depending on the operands. Thus, it cannot evaluate to an `Error` object.
                 */
                return false;

            case "SequenceExpression": {
                const exprs = node.expressions;

                return exprs.length !== 0 && module.exports.couldBeError(exprs[exprs.length - 1]);
            }

            case "LogicalExpression":

                /*
                 * If the && operator short-circuits, the left side was falsy and therefore not an error, and if it
                 * doesn't short-circuit, it takes the value from the right side, so the right side must always be
                 * a plausible error. A future improvement could verify that the left side could be truthy by
                 * excluding falsy literals.
                 */
                if (node.operator === "&&") {
                    return module.exports.couldBeError(node.right);
                }

                return module.exports.couldBeError(node.left) || module.exports.couldBeError(node.right);

            case "ConditionalExpression":
                return module.exports.couldBeError(node.consequent) || module.exports.couldBeError(node.alternate);

            default:
                return false;
        }
    },

    /**
     * Check if a given node is a numeric literal or not.
     * @param {ASTNode} node The node to check.
     * @returns {boolean} `true` if the node is a number or bigint literal.
     */
    isNumericLiteral(node) {
        return (
            node.type === "Literal" &&
            (typeof node.value === "number" || Boolean(node.bigint))
        );
    },

    /**
     * Determines whether two tokens can safely be placed next to each other without merging into a single token
     * @param {Token|string} leftValue The left token. If this is a string, it will be tokenized and the last token will be used.
     * @param {Token|string} rightValue The right token. If this is a string, it will be tokenized and the first token will be used.
     * @returns {boolean} If the tokens cannot be safely placed next to each other, returns `false`. If the tokens can be placed
     * next to each other, behavior is undefined (although it should return `true` in most cases).
     */
    canTokensBeAdjacent(leftValue, rightValue) {
        const espreeOptions = {
            ecmaVersion: espree.latestEcmaVersion,
            comment: true,
            range: true
        };

        let leftToken;

        if (typeof leftValue === "string") {
            let tokens;

            try {
                tokens = espree.tokenize(leftValue, espreeOptions);
            } catch {
                return false;
            }

            const comments = tokens.comments;

            leftToken = tokens[tokens.length - 1];
            if (comments.length) {
                const lastComment = comments[comments.length - 1];

                if (lastComment.range[0] > leftToken.range[0]) {
                    leftToken = lastComment;
                }
            }
        } else {
            leftToken = leftValue;
        }

        if (leftToken.type === "Shebang") {
            return false;
        }

        let rightToken;

        if (typeof rightValue === "string") {
            let tokens;

            try {
                tokens = espree.tokenize(rightValue, espreeOptions);
            } catch {
                return false;
            }

            const comments = tokens.comments;

            rightToken = tokens[0];
            if (comments.length) {
                const firstComment = comments[0];

                if (firstComment.range[0] < rightToken.range[0]) {
                    rightToken = firstComment;
                }
            }
        } else {
            rightToken = rightValue;
        }

        if (leftToken.type === "Punctuator" || rightToken.type === "Punctuator") {
            if (leftToken.type === "Punctuator" && rightToken.type === "Punctuator") {
                const PLUS_TOKENS = new Set(["+", "++"]);
                const MINUS_TOKENS = new Set(["-", "--"]);

                return !(
                    PLUS_TOKENS.has(leftToken.value) && PLUS_TOKENS.has(rightToken.value) ||
                    MINUS_TOKENS.has(leftToken.value) && MINUS_TOKENS.has(rightToken.value)
                );
            }
            if (leftToken.type === "Punctuator" && leftToken.value === "/") {
                return !["Block", "Line", "RegularExpression"].includes(rightToken.type);
            }
            return true;
        }

        if (
            leftToken.type === "String" || rightToken.type === "String" ||
            leftToken.type === "Template" || rightToken.type === "Template"
        ) {
            return true;
        }

        if (leftToken.type !== "Numeric" && rightToken.type === "Numeric" && rightToken.value.startsWith(".")) {
            return true;
        }

        if (leftToken.type === "Block" || rightToken.type === "Block" || rightToken.type === "Line") {
            return true;
        }

        return false;
    },

    /**
     * Get the `loc` object of a given name in a `/*globals` directive comment.
     * @param {SourceCode} sourceCode The source code to convert index to loc.
     * @param {Comment} comment The `/*globals` directive comment which include the name.
     * @param {string} name The name to find.
     * @returns {SourceLocation} The `loc` object.
     */
    getNameLocationInGlobalDirectiveComment(sourceCode, comment, name) {
        const namePattern = new RegExp(`[\\s,]${escapeRegExp(name)}(?:$|[\\s,:])`, "gu");

        // To ignore the first text "global".
        namePattern.lastIndex = comment.value.indexOf("global") + 6;

        // Search a given variable name.
        const match = namePattern.exec(comment.value);

        // Convert the index to loc.
        const start = sourceCode.getLocFromIndex(
            comment.range[0] +
            "/*".length +
            (match ? match.index + 1 : 0)
        );
        const end = {
            line: start.line,
            column: start.column + (match ? name.length : 1)
        };

        return { start, end };
    },

    /**
     * Determines whether the given raw string contains an octal escape sequence
     * or a non-octal decimal escape sequence ("\8", "\9").
     *
     * "\1", "\2" ... "\7", "\8", "\9"
     * "\00", "\01" ... "\07", "\08", "\09"
     *
     * "\0", when not followed by a digit, is not an octal escape sequence.
     * @param {string} rawString A string in its raw representation.
     * @returns {boolean} `true` if the string contains at least one octal escape sequence
     * or at least one non-octal decimal escape sequence.
     */
    hasOctalOrNonOctalDecimalEscapeSequence(rawString) {
        return OCTAL_OR_NON_OCTAL_DECIMAL_ESCAPE_PATTERN.test(rawString);
    },

    isLogicalExpression,
    isCoalesceExpression,
    isMixedLogicalAndCoalesceExpressions,
    isNullLiteral,
    getStaticStringValue,
    getStaticPropertyName,
    skipChainExpression,
    isSpecificId,
    isSpecificMemberAccess,
    equalLiteralValue,
    isSameReference,
    isLogicalAssignmentOperator
};
