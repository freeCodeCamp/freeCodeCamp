"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSError = void 0;
exports.isLogicalOperator = isLogicalOperator;
exports.isESTreeBinaryOperator = isESTreeBinaryOperator;
exports.getTextForTokenKind = getTextForTokenKind;
exports.isESTreeClassMember = isESTreeClassMember;
exports.hasModifier = hasModifier;
exports.getLastModifier = getLastModifier;
exports.isComma = isComma;
exports.isComment = isComment;
exports.getBinaryExpressionType = getBinaryExpressionType;
exports.getLineAndCharacterFor = getLineAndCharacterFor;
exports.getLocFor = getLocFor;
exports.canContainDirective = canContainDirective;
exports.getRange = getRange;
exports.isJSXToken = isJSXToken;
exports.getDeclarationKind = getDeclarationKind;
exports.getTSNodeAccessibility = getTSNodeAccessibility;
exports.findNextToken = findNextToken;
exports.findFirstMatchingAncestor = findFirstMatchingAncestor;
exports.hasJSXAncestor = hasJSXAncestor;
exports.unescapeStringLiteralText = unescapeStringLiteralText;
exports.isComputedProperty = isComputedProperty;
exports.isOptional = isOptional;
exports.isChainExpression = isChainExpression;
exports.isChildUnwrappableOptionalChain = isChildUnwrappableOptionalChain;
exports.getTokenType = getTokenType;
exports.convertToken = convertToken;
exports.convertTokens = convertTokens;
exports.createError = createError;
exports.nodeHasTokens = nodeHasTokens;
exports.firstDefined = firstDefined;
exports.identifierIsThisKeyword = identifierIsThisKeyword;
exports.isThisIdentifier = isThisIdentifier;
exports.isThisInTypeQuery = isThisInTypeQuery;
exports.isValidAssignmentTarget = isValidAssignmentTarget;
exports.getNamespaceModifiers = getNamespaceModifiers;
exports.declarationNameToString = declarationNameToString;
exports.isEntityNameExpression = isEntityNameExpression;
const ts = __importStar(require("typescript"));
const getModifiers_1 = require("./getModifiers");
const xhtml_entities_1 = require("./jsx/xhtml-entities");
const ts_estree_1 = require("./ts-estree");
const version_check_1 = require("./version-check");
const isAtLeast50 = version_check_1.typescriptVersionIsAtLeast['5.0'];
const SyntaxKind = ts.SyntaxKind;
const LOGICAL_OPERATORS = new Set([
    SyntaxKind.AmpersandAmpersandToken,
    SyntaxKind.BarBarToken,
    SyntaxKind.QuestionQuestionToken,
]);
const ASSIGNMENT_OPERATORS = new Set([
    ts.SyntaxKind.AmpersandAmpersandEqualsToken,
    ts.SyntaxKind.AmpersandEqualsToken,
    ts.SyntaxKind.AsteriskAsteriskEqualsToken,
    ts.SyntaxKind.AsteriskEqualsToken,
    ts.SyntaxKind.BarBarEqualsToken,
    ts.SyntaxKind.BarEqualsToken,
    ts.SyntaxKind.CaretEqualsToken,
    ts.SyntaxKind.EqualsToken,
    ts.SyntaxKind.GreaterThanGreaterThanEqualsToken,
    ts.SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken,
    ts.SyntaxKind.LessThanLessThanEqualsToken,
    ts.SyntaxKind.MinusEqualsToken,
    ts.SyntaxKind.PercentEqualsToken,
    ts.SyntaxKind.PlusEqualsToken,
    ts.SyntaxKind.QuestionQuestionEqualsToken,
    ts.SyntaxKind.SlashEqualsToken,
]);
const BINARY_OPERATORS = new Set([
    SyntaxKind.AmpersandAmpersandToken,
    SyntaxKind.AmpersandToken,
    SyntaxKind.AsteriskAsteriskToken,
    SyntaxKind.AsteriskToken,
    SyntaxKind.BarBarToken,
    SyntaxKind.BarToken,
    SyntaxKind.CaretToken,
    SyntaxKind.EqualsEqualsEqualsToken,
    SyntaxKind.EqualsEqualsToken,
    SyntaxKind.ExclamationEqualsEqualsToken,
    SyntaxKind.ExclamationEqualsToken,
    SyntaxKind.GreaterThanEqualsToken,
    SyntaxKind.GreaterThanGreaterThanGreaterThanToken,
    SyntaxKind.GreaterThanGreaterThanToken,
    SyntaxKind.GreaterThanToken,
    SyntaxKind.InKeyword,
    SyntaxKind.InstanceOfKeyword,
    SyntaxKind.LessThanEqualsToken,
    SyntaxKind.LessThanLessThanToken,
    SyntaxKind.LessThanToken,
    SyntaxKind.MinusToken,
    SyntaxKind.PercentToken,
    SyntaxKind.PlusToken,
    SyntaxKind.SlashToken,
]);
/**
 * Returns true if the given ts.Token is the assignment operator
 */
function isAssignmentOperator(operator) {
    return ASSIGNMENT_OPERATORS.has(operator.kind);
}
/**
 * Returns true if the given ts.Token is a logical operator
 */
function isLogicalOperator(operator) {
    return LOGICAL_OPERATORS.has(operator.kind);
}
function isESTreeBinaryOperator(operator) {
    return BINARY_OPERATORS.has(operator.kind);
}
/**
 * Returns the string form of the given TSToken SyntaxKind
 */
function getTextForTokenKind(kind) {
    return ts.tokenToString(kind);
}
/**
 * Returns true if the given ts.Node is a valid ESTree class member
 */
function isESTreeClassMember(node) {
    return node.kind !== SyntaxKind.SemicolonClassElement;
}
/**
 * Checks if a ts.Node has a modifier
 */
function hasModifier(modifierKind, node) {
    const modifiers = (0, getModifiers_1.getModifiers)(node);
    return modifiers?.some(modifier => modifier.kind === modifierKind) === true;
}
/**
 * Get last last modifier in ast
 * @returns returns last modifier if present or null
 */
function getLastModifier(node) {
    const modifiers = (0, getModifiers_1.getModifiers)(node);
    if (modifiers == null) {
        return null;
    }
    return modifiers[modifiers.length - 1] ?? null;
}
/**
 * Returns true if the given ts.Token is a comma
 */
function isComma(token) {
    return token.kind === SyntaxKind.CommaToken;
}
/**
 * Returns true if the given ts.Node is a comment
 */
function isComment(node) {
    return (node.kind === SyntaxKind.SingleLineCommentTrivia ||
        node.kind === SyntaxKind.MultiLineCommentTrivia);
}
/**
 * Returns true if the given ts.Node is a JSDoc comment
 */
function isJSDocComment(node) {
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- SyntaxKind.JSDoc was only added in TS4.7 so we can't use it yet
    return node.kind === SyntaxKind.JSDocComment;
}
/**
 * Returns the binary expression type of the given ts.Token
 */
function getBinaryExpressionType(operator) {
    if (isAssignmentOperator(operator)) {
        return {
            type: ts_estree_1.AST_NODE_TYPES.AssignmentExpression,
            operator: getTextForTokenKind(operator.kind),
        };
    }
    if (isLogicalOperator(operator)) {
        return {
            type: ts_estree_1.AST_NODE_TYPES.LogicalExpression,
            operator: getTextForTokenKind(operator.kind),
        };
    }
    if (isESTreeBinaryOperator(operator)) {
        return {
            type: ts_estree_1.AST_NODE_TYPES.BinaryExpression,
            operator: getTextForTokenKind(operator.kind),
        };
    }
    throw new Error(`Unexpected binary operator ${ts.tokenToString(operator.kind)}`);
}
/**
 * Returns line and column data for the given positions
 */
function getLineAndCharacterFor(pos, ast) {
    const loc = ast.getLineAndCharacterOfPosition(pos);
    return {
        column: loc.character,
        line: loc.line + 1,
    };
}
/**
 * Returns line and column data for the given start and end positions,
 * for the given AST
 */
function getLocFor(range, ast) {
    const [start, end] = range.map(pos => getLineAndCharacterFor(pos, ast));
    return { end, start };
}
/**
 * Check whatever node can contain directive
 */
function canContainDirective(node) {
    if (node.kind === ts.SyntaxKind.Block) {
        switch (node.parent.kind) {
            case ts.SyntaxKind.Constructor:
            case ts.SyntaxKind.GetAccessor:
            case ts.SyntaxKind.SetAccessor:
            case ts.SyntaxKind.ArrowFunction:
            case ts.SyntaxKind.FunctionExpression:
            case ts.SyntaxKind.FunctionDeclaration:
            case ts.SyntaxKind.MethodDeclaration:
                return true;
            default:
                return false;
        }
    }
    return true;
}
/**
 * Returns range for the given ts.Node
 */
function getRange(node, ast) {
    return [node.getStart(ast), node.getEnd()];
}
/**
 * Returns true if a given ts.Node is a token
 */
function isToken(node) {
    return (node.kind >= SyntaxKind.FirstToken && node.kind <= SyntaxKind.LastToken);
}
/**
 * Returns true if a given ts.Node is a JSX token
 */
function isJSXToken(node) {
    return (node.kind >= SyntaxKind.JsxElement && node.kind <= SyntaxKind.JsxAttribute);
}
/**
 * Returns the declaration kind of the given ts.Node
 */
function getDeclarationKind(node) {
    if (node.flags & ts.NodeFlags.Let) {
        return 'let';
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
    if ((node.flags & ts.NodeFlags.AwaitUsing) === ts.NodeFlags.AwaitUsing) {
        return 'await using';
    }
    if (node.flags & ts.NodeFlags.Const) {
        return 'const';
    }
    if (node.flags & ts.NodeFlags.Using) {
        return 'using';
    }
    return 'var';
}
/**
 * Gets a ts.Node's accessibility level
 */
function getTSNodeAccessibility(node) {
    const modifiers = (0, getModifiers_1.getModifiers)(node);
    if (modifiers == null) {
        return undefined;
    }
    for (const modifier of modifiers) {
        switch (modifier.kind) {
            case SyntaxKind.PublicKeyword:
                return 'public';
            case SyntaxKind.ProtectedKeyword:
                return 'protected';
            case SyntaxKind.PrivateKeyword:
                return 'private';
            default:
                break;
        }
    }
    return undefined;
}
/**
 * Finds the next token based on the previous one and its parent
 * Had to copy this from TS instead of using TS's version because theirs doesn't pass the ast to getChildren
 */
function findNextToken(previousToken, parent, ast) {
    return find(parent);
    function find(n) {
        if (ts.isToken(n) && n.pos === previousToken.end) {
            // this is token that starts at the end of previous token - return it
            return n;
        }
        return firstDefined(n.getChildren(ast), (child) => {
            const shouldDiveInChildNode = 
            // previous token is enclosed somewhere in the child
            (child.pos <= previousToken.pos && child.end > previousToken.end) ||
                // previous token ends exactly at the beginning of child
                child.pos === previousToken.end;
            return shouldDiveInChildNode && nodeHasTokens(child, ast)
                ? find(child)
                : undefined;
        });
    }
}
/**
 * Find the first matching ancestor based on the given predicate function.
 * @param node The current ts.Node
 * @param predicate The predicate function to apply to each checked ancestor
 * @returns a matching parent ts.Node
 */
function findFirstMatchingAncestor(node, predicate) {
    let current = node;
    while (current) {
        if (predicate(current)) {
            return current;
        }
        current = current.parent;
    }
    return undefined;
}
/**
 * Returns true if a given ts.Node has a JSX token within its hierarchy
 */
function hasJSXAncestor(node) {
    return !!findFirstMatchingAncestor(node, isJSXToken);
}
/**
 * Unescape the text content of string literals, e.g. &amp; -> &
 * @param text The escaped string literal text.
 * @returns The unescaped string literal text.
 */
function unescapeStringLiteralText(text) {
    return text.replaceAll(/&(?:#\d+|#x[\da-fA-F]+|[0-9a-zA-Z]+);/g, entity => {
        const item = entity.slice(1, -1);
        if (item[0] === '#') {
            const codePoint = item[1] === 'x'
                ? parseInt(item.slice(2), 16)
                : parseInt(item.slice(1), 10);
            return codePoint > 0x10ffff // RangeError: Invalid code point
                ? entity
                : String.fromCodePoint(codePoint);
        }
        return xhtml_entities_1.xhtmlEntities[item] || entity;
    });
}
/**
 * Returns true if a given ts.Node is a computed property
 */
function isComputedProperty(node) {
    return node.kind === SyntaxKind.ComputedPropertyName;
}
/**
 * Returns true if a given ts.Node is optional (has QuestionToken)
 * @param node ts.Node to be checked
 */
function isOptional(node) {
    return !!node.questionToken;
}
/**
 * Returns true if the node is an optional chain node
 */
function isChainExpression(node) {
    return node.type === ts_estree_1.AST_NODE_TYPES.ChainExpression;
}
/**
 * Returns true of the child of property access expression is an optional chain
 */
function isChildUnwrappableOptionalChain(node, child) {
    return (isChainExpression(child) &&
        // (x?.y).z is semantically different, and as such .z is no longer optional
        node.expression.kind !== ts.SyntaxKind.ParenthesizedExpression);
}
/**
 * Returns the type of a given ts.Token
 */
function getTokenType(token) {
    if (token.kind === SyntaxKind.NullKeyword) {
        return ts_estree_1.AST_TOKEN_TYPES.Null;
    }
    if (token.kind >= SyntaxKind.FirstKeyword &&
        token.kind <= SyntaxKind.LastFutureReservedWord) {
        if (token.kind === SyntaxKind.FalseKeyword ||
            token.kind === SyntaxKind.TrueKeyword) {
            return ts_estree_1.AST_TOKEN_TYPES.Boolean;
        }
        return ts_estree_1.AST_TOKEN_TYPES.Keyword;
    }
    if (token.kind >= SyntaxKind.FirstPunctuation &&
        token.kind <= SyntaxKind.LastPunctuation) {
        return ts_estree_1.AST_TOKEN_TYPES.Punctuator;
    }
    if (token.kind >= SyntaxKind.NoSubstitutionTemplateLiteral &&
        token.kind <= SyntaxKind.TemplateTail) {
        return ts_estree_1.AST_TOKEN_TYPES.Template;
    }
    switch (token.kind) {
        case SyntaxKind.NumericLiteral:
        case SyntaxKind.BigIntLiteral:
            return ts_estree_1.AST_TOKEN_TYPES.Numeric;
        case SyntaxKind.PrivateIdentifier:
            return ts_estree_1.AST_TOKEN_TYPES.PrivateIdentifier;
        case SyntaxKind.JsxText:
            return ts_estree_1.AST_TOKEN_TYPES.JSXText;
        case SyntaxKind.StringLiteral:
            // A TypeScript-StringLiteral token with a TypeScript-JsxAttribute or TypeScript-JsxElement parent,
            // must actually be an ESTree-JSXText token
            if (token.parent.kind === SyntaxKind.JsxAttribute ||
                token.parent.kind === SyntaxKind.JsxElement) {
                return ts_estree_1.AST_TOKEN_TYPES.JSXText;
            }
            return ts_estree_1.AST_TOKEN_TYPES.String;
        case SyntaxKind.RegularExpressionLiteral:
            return ts_estree_1.AST_TOKEN_TYPES.RegularExpression;
        case SyntaxKind.Identifier:
        case SyntaxKind.ConstructorKeyword:
        case SyntaxKind.GetKeyword:
        case SyntaxKind.SetKeyword:
        // intentional fallthrough
        default:
    }
    // Some JSX tokens have to be determined based on their parent
    if (token.kind === SyntaxKind.Identifier) {
        if (isJSXToken(token.parent)) {
            return ts_estree_1.AST_TOKEN_TYPES.JSXIdentifier;
        }
        if (token.parent.kind === SyntaxKind.PropertyAccessExpression &&
            hasJSXAncestor(token)) {
            return ts_estree_1.AST_TOKEN_TYPES.JSXIdentifier;
        }
    }
    return ts_estree_1.AST_TOKEN_TYPES.Identifier;
}
/**
 * Extends and formats a given ts.Token, for a given AST
 */
function convertToken(token, ast) {
    const start = token.kind === SyntaxKind.JsxText
        ? token.getFullStart()
        : token.getStart(ast);
    const end = token.getEnd();
    const value = ast.text.slice(start, end);
    const tokenType = getTokenType(token);
    const range = [start, end];
    const loc = getLocFor(range, ast);
    if (tokenType === ts_estree_1.AST_TOKEN_TYPES.RegularExpression) {
        return {
            type: tokenType,
            loc,
            range,
            regex: {
                flags: value.slice(value.lastIndexOf('/') + 1),
                pattern: value.slice(1, value.lastIndexOf('/')),
            },
            value,
        };
    }
    if (tokenType === ts_estree_1.AST_TOKEN_TYPES.PrivateIdentifier) {
        return {
            type: tokenType,
            loc,
            range,
            value: value.slice(1),
        };
    }
    // @ts-expect-error TS is complaining about `value` not being the correct
    // type but it is
    return {
        type: tokenType,
        loc,
        range,
        value,
    };
}
/**
 * Converts all tokens for the given AST
 * @param ast the AST object
 * @returns the converted Tokens
 */
function convertTokens(ast) {
    const result = [];
    /**
     * @param node the ts.Node
     */
    function walk(node) {
        // TypeScript generates tokens for types in JSDoc blocks. Comment tokens
        // and their children should not be walked or added to the resulting tokens list.
        if (isComment(node) || isJSDocComment(node)) {
            return;
        }
        if (isToken(node) && node.kind !== SyntaxKind.EndOfFileToken) {
            result.push(convertToken(node, ast));
        }
        else {
            node.getChildren(ast).forEach(walk);
        }
    }
    walk(ast);
    return result;
}
class TSError extends Error {
    fileName;
    location;
    name = 'TSError';
    constructor(message, fileName, location) {
        super(message);
        this.fileName = fileName;
        this.location = location;
    }
    // For old version of ESLint https://github.com/typescript-eslint/typescript-eslint/pull/6556#discussion_r1123237311
    get index() {
        return this.location.start.offset;
    }
    // https://github.com/eslint/eslint/blob/b09a512107249a4eb19ef5a37b0bd672266eafdb/lib/linter/linter.js#L853
    get lineNumber() {
        return this.location.start.line;
    }
    // https://github.com/eslint/eslint/blob/b09a512107249a4eb19ef5a37b0bd672266eafdb/lib/linter/linter.js#L854
    get column() {
        return this.location.start.column;
    }
}
exports.TSError = TSError;
function createError(node, message, sourceFile) {
    let startIndex;
    let endIndex;
    if (Array.isArray(node)) {
        [startIndex, endIndex] = node;
    }
    else if (typeof node === 'number') {
        startIndex = endIndex = node;
    }
    else {
        sourceFile ??= node.getSourceFile();
        startIndex = node.getStart(sourceFile);
        endIndex = node.getEnd();
    }
    if (!sourceFile) {
        throw new Error('`sourceFile` is required.');
    }
    const [start, end] = [startIndex, endIndex].map(offset => {
        const { character: column, line } = sourceFile.getLineAndCharacterOfPosition(offset);
        return { column, line: line + 1, offset };
    });
    return new TSError(message, sourceFile.fileName, { end, start });
}
function nodeHasTokens(n, ast) {
    // If we have a token or node that has a non-zero width, it must have tokens.
    // Note: getWidth() does not take trivia into account.
    return n.kind === SyntaxKind.EndOfFileToken
        ? !!n.jsDoc
        : n.getWidth(ast) !== 0;
}
/**
 * Like `forEach`, but suitable for use with numbers and strings (which may be falsy).
 */
function firstDefined(array, callback) {
    // eslint-disable-next-line @typescript-eslint/internal/eqeq-nullish
    if (array === undefined) {
        return undefined;
    }
    for (let i = 0; i < array.length; i++) {
        const result = callback(array[i], i);
        // eslint-disable-next-line @typescript-eslint/internal/eqeq-nullish
        if (result !== undefined) {
            return result;
        }
    }
    return undefined;
}
function identifierIsThisKeyword(id) {
    return ((isAtLeast50
        ? ts.identifierToKeywordKind(id)
        : // @ts-expect-error -- intentional fallback for older TS versions <=4.9
            id.originalKeywordKind) === SyntaxKind.ThisKeyword);
}
function isThisIdentifier(node) {
    return (!!node &&
        node.kind === SyntaxKind.Identifier &&
        identifierIsThisKeyword(node));
}
function isThisInTypeQuery(node) {
    if (!isThisIdentifier(node)) {
        return false;
    }
    while (ts.isQualifiedName(node.parent) && node.parent.left === node) {
        node = node.parent;
    }
    return node.parent.kind === SyntaxKind.TypeQuery;
}
function isValidAssignmentTarget(node) {
    switch (node.kind) {
        case SyntaxKind.Identifier:
            return true;
        case SyntaxKind.PropertyAccessExpression:
        case SyntaxKind.ElementAccessExpression:
            if (node.flags & ts.NodeFlags.OptionalChain) {
                return false;
            }
            return true;
        case SyntaxKind.ParenthesizedExpression:
        case SyntaxKind.TypeAssertionExpression:
        case SyntaxKind.AsExpression:
        case SyntaxKind.SatisfiesExpression:
        case SyntaxKind.ExpressionWithTypeArguments:
        case SyntaxKind.NonNullExpression:
            return isValidAssignmentTarget(node.expression);
        default:
            return false;
    }
}
function getNamespaceModifiers(node) {
    // For following nested namespaces, use modifiers given to the topmost namespace
    //   export declare namespace foo.bar.baz {}
    let modifiers = (0, getModifiers_1.getModifiers)(node);
    let moduleDeclaration = node;
    while ((!modifiers || modifiers.length === 0) &&
        ts.isModuleDeclaration(moduleDeclaration.parent)) {
        const parentModifiers = (0, getModifiers_1.getModifiers)(moduleDeclaration.parent);
        if (parentModifiers?.length) {
            modifiers = parentModifiers;
        }
        moduleDeclaration = moduleDeclaration.parent;
    }
    return modifiers;
}
// `ts.declarationNameToString`
function declarationNameToString(node) {
    const text = node.getSourceFile().text.slice(node.pos, node.end).trimStart();
    return text || '(Missing)';
}
function isPropertyAccessEntityNameExpression(node) {
    return (ts.isPropertyAccessExpression(node) &&
        ts.isIdentifier(node.name) &&
        isEntityNameExpression(node.expression));
}
function isEntityNameExpression(node) {
    return (node.kind === SyntaxKind.Identifier ||
        isPropertyAccessEntityNameExpression(node));
}
