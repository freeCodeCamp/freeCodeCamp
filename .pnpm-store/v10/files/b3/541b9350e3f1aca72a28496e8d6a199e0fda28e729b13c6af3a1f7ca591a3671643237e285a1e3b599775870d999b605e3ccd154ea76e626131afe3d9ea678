'use strict';

/* eslint-disable jsdoc/valid-types -- doesn't allow `readonly`.
   TODO: remove eslint-disable when https://github.com/jsdoc-type-pratt-parser/jsdoc-type-pratt-parser/issues/164 is fixed
*/
/**
 * @typedef {{ readonly [type: string]: ReadonlyArray<string> }} VisitorKeys
 */
/* eslint-enable jsdoc/valid-types -- doesn't allow `readonly string[]`. TODO: check why */

/**
 * @type {VisitorKeys}
 */
const KEYS = {
    ArrayExpression: [
        "elements"
    ],
    ArrayPattern: [
        "elements"
    ],
    ArrowFunctionExpression: [
        "params",
        "body"
    ],
    AssignmentExpression: [
        "left",
        "right"
    ],
    AssignmentPattern: [
        "left",
        "right"
    ],
    AwaitExpression: [
        "argument"
    ],
    BinaryExpression: [
        "left",
        "right"
    ],
    BlockStatement: [
        "body"
    ],
    BreakStatement: [
        "label"
    ],
    CallExpression: [
        "callee",
        "arguments"
    ],
    CatchClause: [
        "param",
        "body"
    ],
    ChainExpression: [
        "expression"
    ],
    ClassBody: [
        "body"
    ],
    ClassDeclaration: [
        "id",
        "superClass",
        "body"
    ],
    ClassExpression: [
        "id",
        "superClass",
        "body"
    ],
    ConditionalExpression: [
        "test",
        "consequent",
        "alternate"
    ],
    ContinueStatement: [
        "label"
    ],
    DebuggerStatement: [],
    DoWhileStatement: [
        "body",
        "test"
    ],
    EmptyStatement: [],
    ExperimentalRestProperty: [
        "argument"
    ],
    ExperimentalSpreadProperty: [
        "argument"
    ],
    ExportAllDeclaration: [
        "exported",
        "source",
        "attributes"
    ],
    ExportDefaultDeclaration: [
        "declaration"
    ],
    ExportNamedDeclaration: [
        "declaration",
        "specifiers",
        "source",
        "attributes"
    ],
    ExportSpecifier: [
        "local",
        "exported"
    ],
    ExpressionStatement: [
        "expression"
    ],
    ForInStatement: [
        "left",
        "right",
        "body"
    ],
    ForOfStatement: [
        "left",
        "right",
        "body"
    ],
    ForStatement: [
        "init",
        "test",
        "update",
        "body"
    ],
    FunctionDeclaration: [
        "id",
        "params",
        "body"
    ],
    FunctionExpression: [
        "id",
        "params",
        "body"
    ],
    Identifier: [],
    IfStatement: [
        "test",
        "consequent",
        "alternate"
    ],
    ImportAttribute: [
        "key",
        "value"
    ],
    ImportDeclaration: [
        "specifiers",
        "source",
        "attributes"
    ],
    ImportDefaultSpecifier: [
        "local"
    ],
    ImportExpression: [
        "source",
        "options"
    ],
    ImportNamespaceSpecifier: [
        "local"
    ],
    ImportSpecifier: [
        "imported",
        "local"
    ],
    JSXAttribute: [
        "name",
        "value"
    ],
    JSXClosingElement: [
        "name"
    ],
    JSXClosingFragment: [],
    JSXElement: [
        "openingElement",
        "children",
        "closingElement"
    ],
    JSXEmptyExpression: [],
    JSXExpressionContainer: [
        "expression"
    ],
    JSXFragment: [
        "openingFragment",
        "children",
        "closingFragment"
    ],
    JSXIdentifier: [],
    JSXMemberExpression: [
        "object",
        "property"
    ],
    JSXNamespacedName: [
        "namespace",
        "name"
    ],
    JSXOpeningElement: [
        "name",
        "attributes"
    ],
    JSXOpeningFragment: [],
    JSXSpreadAttribute: [
        "argument"
    ],
    JSXSpreadChild: [
        "expression"
    ],
    JSXText: [],
    LabeledStatement: [
        "label",
        "body"
    ],
    Literal: [],
    LogicalExpression: [
        "left",
        "right"
    ],
    MemberExpression: [
        "object",
        "property"
    ],
    MetaProperty: [
        "meta",
        "property"
    ],
    MethodDefinition: [
        "key",
        "value"
    ],
    NewExpression: [
        "callee",
        "arguments"
    ],
    ObjectExpression: [
        "properties"
    ],
    ObjectPattern: [
        "properties"
    ],
    PrivateIdentifier: [],
    Program: [
        "body"
    ],
    Property: [
        "key",
        "value"
    ],
    PropertyDefinition: [
        "key",
        "value"
    ],
    RestElement: [
        "argument"
    ],
    ReturnStatement: [
        "argument"
    ],
    SequenceExpression: [
        "expressions"
    ],
    SpreadElement: [
        "argument"
    ],
    StaticBlock: [
        "body"
    ],
    Super: [],
    SwitchCase: [
        "test",
        "consequent"
    ],
    SwitchStatement: [
        "discriminant",
        "cases"
    ],
    TaggedTemplateExpression: [
        "tag",
        "quasi"
    ],
    TemplateElement: [],
    TemplateLiteral: [
        "quasis",
        "expressions"
    ],
    ThisExpression: [],
    ThrowStatement: [
        "argument"
    ],
    TryStatement: [
        "block",
        "handler",
        "finalizer"
    ],
    UnaryExpression: [
        "argument"
    ],
    UpdateExpression: [
        "argument"
    ],
    VariableDeclaration: [
        "declarations"
    ],
    VariableDeclarator: [
        "id",
        "init"
    ],
    WhileStatement: [
        "test",
        "body"
    ],
    WithStatement: [
        "object",
        "body"
    ],
    YieldExpression: [
        "argument"
    ]
};

// Types.
const NODE_TYPES = Object.keys(KEYS);

// Freeze the keys.
for (const type of NODE_TYPES) {
    Object.freeze(KEYS[type]);
}
Object.freeze(KEYS);

/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */

/**
 * @typedef {import('./visitor-keys.js').VisitorKeys} VisitorKeys
 */

// List to ignore keys.
const KEY_BLACKLIST = new Set([
    "parent",
    "leadingComments",
    "trailingComments"
]);

/**
 * Check whether a given key should be used or not.
 * @param {string} key The key to check.
 * @returns {boolean} `true` if the key should be used.
 */
function filterKey(key) {
    return !KEY_BLACKLIST.has(key) && key[0] !== "_";
}


/* eslint-disable jsdoc/valid-types -- doesn't allow `readonly`.
   TODO: remove eslint-disable when https://github.com/jsdoc-type-pratt-parser/jsdoc-type-pratt-parser/issues/164 is fixed
*/
/**
 * Get visitor keys of a given node.
 * @param {Object} node The AST node to get keys.
 * @returns {readonly string[]} Visitor keys of the node.
 */
function getKeys(node) {
    return Object.keys(node).filter(filterKey);
}
/* eslint-enable jsdoc/valid-types -- doesn't allow `readonly` */

/**
 * Make the union set with `KEYS` and given keys.
 * @param {VisitorKeys} additionalKeys The additional keys.
 * @returns {VisitorKeys} The union set.
 */
function unionWith(additionalKeys) {
    const retv = /** @type {{ [type: string]: ReadonlyArray<string> }} */
        (Object.assign({}, KEYS));

    for (const type of Object.keys(additionalKeys)) {
        if (Object.hasOwn(retv, type)) {
            const keys = new Set(additionalKeys[type]);

            for (const key of retv[type]) {
                keys.add(key);
            }

            retv[type] = Object.freeze(Array.from(keys));
        } else {
            retv[type] = Object.freeze(Array.from(additionalKeys[type]));
        }
    }

    return Object.freeze(retv);
}

exports.KEYS = KEYS;
exports.getKeys = getKeys;
exports.unionWith = unionWith;
