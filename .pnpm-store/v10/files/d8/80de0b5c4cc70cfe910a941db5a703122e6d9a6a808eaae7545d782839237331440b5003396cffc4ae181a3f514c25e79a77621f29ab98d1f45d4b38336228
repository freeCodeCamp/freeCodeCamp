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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isThisInTypeQuery = exports.isThisIdentifier = exports.identifierIsThisKeyword = exports.firstDefined = exports.nodeHasTokens = exports.createError = exports.TSError = exports.convertTokens = exports.convertToken = exports.getTokenType = exports.isChildUnwrappableOptionalChain = exports.isChainExpression = exports.isOptional = exports.isComputedProperty = exports.unescapeStringLiteralText = exports.hasJSXAncestor = exports.findFirstMatchingAncestor = exports.findNextToken = exports.getTSNodeAccessibility = exports.getDeclarationKind = exports.isJSXToken = exports.isToken = exports.getRange = exports.canContainDirective = exports.getLocFor = exports.getLineAndCharacterFor = exports.getBinaryExpressionType = exports.isJSDocComment = exports.isComment = exports.isComma = exports.getLastModifier = exports.hasModifier = exports.isESTreeClassMember = exports.getTextForTokenKind = exports.isLogicalOperator = exports.isAssignmentOperator = void 0;
const ts = __importStar(require("typescript"));
const getModifiers_1 = require("./getModifiers");
const xhtml_entities_1 = require("./jsx/xhtml-entities");
const ts_estree_1 = require("./ts-estree");
const version_check_1 = require("./version-check");
const isAtLeast50 = version_check_1.typescriptVersionIsAtLeast['5.0'];
const SyntaxKind = ts.SyntaxKind;
const LOGICAL_OPERATORS = [
    SyntaxKind.BarBarToken,
    SyntaxKind.AmpersandAmpersandToken,
    SyntaxKind.QuestionQuestionToken,
];
/**
 * Returns true if the given ts.Token is the assignment operator
 * @param operator the operator token
 * @returns is assignment
 */
function isAssignmentOperator(operator) {
    return (operator.kind >= SyntaxKind.FirstAssignment &&
        operator.kind <= SyntaxKind.LastAssignment);
}
exports.isAssignmentOperator = isAssignmentOperator;
/**
 * Returns true if the given ts.Token is a logical operator
 * @param operator the operator token
 * @returns is a logical operator
 */
function isLogicalOperator(operator) {
    return LOGICAL_OPERATORS.includes(operator.kind);
}
exports.isLogicalOperator = isLogicalOperator;
/**
 * Returns the string form of the given TSToken SyntaxKind
 * @param kind the token's SyntaxKind
 * @returns the token applicable token as a string
 */
function getTextForTokenKind(kind) {
    return ts.tokenToString(kind);
}
exports.getTextForTokenKind = getTextForTokenKind;
/**
 * Returns true if the given ts.Node is a valid ESTree class member
 * @param node TypeScript AST node
 * @returns is valid ESTree class member
 */
function isESTreeClassMember(node) {
    return node.kind !== SyntaxKind.SemicolonClassElement;
}
exports.isESTreeClassMember = isESTreeClassMember;
/**
 * Checks if a ts.Node has a modifier
 * @param modifierKind TypeScript SyntaxKind modifier
 * @param node TypeScript AST node
 * @returns has the modifier specified
 */
function hasModifier(modifierKind, node) {
    const modifiers = (0, getModifiers_1.getModifiers)(node);
    return (modifiers === null || modifiers === void 0 ? void 0 : modifiers.some(modifier => modifier.kind === modifierKind)) === true;
}
exports.hasModifier = hasModifier;
/**
 * Get last last modifier in ast
 * @param node TypeScript AST node
 * @returns returns last modifier if present or null
 */
function getLastModifier(node) {
    var _a;
    const modifiers = (0, getModifiers_1.getModifiers)(node);
    if (modifiers == null) {
        return null;
    }
    return (_a = modifiers[modifiers.length - 1]) !== null && _a !== void 0 ? _a : null;
}
exports.getLastModifier = getLastModifier;
/**
 * Returns true if the given ts.Token is a comma
 * @param token the TypeScript token
 * @returns is comma
 */
function isComma(token) {
    return token.kind === SyntaxKind.CommaToken;
}
exports.isComma = isComma;
/**
 * Returns true if the given ts.Node is a comment
 * @param node the TypeScript node
 * @returns is comment
 */
function isComment(node) {
    return (node.kind === SyntaxKind.SingleLineCommentTrivia ||
        node.kind === SyntaxKind.MultiLineCommentTrivia);
}
exports.isComment = isComment;
/**
 * Returns true if the given ts.Node is a JSDoc comment
 * @param node the TypeScript node
 * @returns is JSDoc comment
 */
function isJSDocComment(node) {
    return node.kind === SyntaxKind.JSDocComment;
}
exports.isJSDocComment = isJSDocComment;
/**
 * Returns the binary expression type of the given ts.Token
 * @param operator the operator token
 * @returns the binary expression type
 */
function getBinaryExpressionType(operator) {
    if (isAssignmentOperator(operator)) {
        return ts_estree_1.AST_NODE_TYPES.AssignmentExpression;
    }
    else if (isLogicalOperator(operator)) {
        return ts_estree_1.AST_NODE_TYPES.LogicalExpression;
    }
    return ts_estree_1.AST_NODE_TYPES.BinaryExpression;
}
exports.getBinaryExpressionType = getBinaryExpressionType;
/**
 * Returns line and column data for the given positions,
 * @param pos position to check
 * @param ast the AST object
 * @returns line and column
 */
function getLineAndCharacterFor(pos, ast) {
    const loc = ast.getLineAndCharacterOfPosition(pos);
    return {
        line: loc.line + 1,
        column: loc.character,
    };
}
exports.getLineAndCharacterFor = getLineAndCharacterFor;
/**
 * Returns line and column data for the given start and end positions,
 * for the given AST
 * @param start start data
 * @param end   end data
 * @param ast   the AST object
 * @returns the loc data
 */
function getLocFor(start, end, ast) {
    return {
        start: getLineAndCharacterFor(start, ast),
        end: getLineAndCharacterFor(end, ast),
    };
}
exports.getLocFor = getLocFor;
/**
 * Check whatever node can contain directive
 * @param node
 * @returns returns true if node can contain directive
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
exports.canContainDirective = canContainDirective;
/**
 * Returns range for the given ts.Node
 * @param node the ts.Node or ts.Token
 * @param ast the AST object
 * @returns the range data
 */
function getRange(node, ast) {
    return [node.getStart(ast), node.getEnd()];
}
exports.getRange = getRange;
/**
 * Returns true if a given ts.Node is a token
 * @param node the ts.Node
 * @returns is a token
 */
function isToken(node) {
    return (node.kind >= SyntaxKind.FirstToken && node.kind <= SyntaxKind.LastToken);
}
exports.isToken = isToken;
/**
 * Returns true if a given ts.Node is a JSX token
 * @param node ts.Node to be checked
 * @returns is a JSX token
 */
function isJSXToken(node) {
    return (node.kind >= SyntaxKind.JsxElement && node.kind <= SyntaxKind.JsxAttribute);
}
exports.isJSXToken = isJSXToken;
/**
 * Returns the declaration kind of the given ts.Node
 * @param node TypeScript AST node
 * @returns declaration kind
 */
function getDeclarationKind(node) {
    if (node.flags & ts.NodeFlags.Let) {
        return 'let';
    }
    if (node.flags & ts.NodeFlags.Const) {
        return 'const';
    }
    return 'var';
}
exports.getDeclarationKind = getDeclarationKind;
/**
 * Gets a ts.Node's accessibility level
 * @param node The ts.Node
 * @returns accessibility "public", "protected", "private", or null
 */
function getTSNodeAccessibility(node) {
    const modifiers = (0, getModifiers_1.getModifiers)(node);
    if (modifiers == null) {
        return null;
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
    return null;
}
exports.getTSNodeAccessibility = getTSNodeAccessibility;
/**
 * Finds the next token based on the previous one and its parent
 * Had to copy this from TS instead of using TS's version because theirs doesn't pass the ast to getChildren
 * @param previousToken The previous TSToken
 * @param parent The parent TSNode
 * @param ast The TS AST
 * @returns the next TSToken
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
exports.findNextToken = findNextToken;
/**
 * Find the first matching ancestor based on the given predicate function.
 * @param node The current ts.Node
 * @param predicate The predicate function to apply to each checked ancestor
 * @returns a matching parent ts.Node
 */
function findFirstMatchingAncestor(node, predicate) {
    while (node) {
        if (predicate(node)) {
            return node;
        }
        node = node.parent;
    }
    return undefined;
}
exports.findFirstMatchingAncestor = findFirstMatchingAncestor;
/**
 * Returns true if a given ts.Node has a JSX token within its hierarchy
 * @param node ts.Node to be checked
 * @returns has JSX ancestor
 */
function hasJSXAncestor(node) {
    return !!findFirstMatchingAncestor(node, isJSXToken);
}
exports.hasJSXAncestor = hasJSXAncestor;
/**
 * Unescape the text content of string literals, e.g. &amp; -> &
 * @param text The escaped string literal text.
 * @returns The unescaped string literal text.
 */
function unescapeStringLiteralText(text) {
    return text.replace(/&(?:#\d+|#x[\da-fA-F]+|[0-9a-zA-Z]+);/g, entity => {
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
exports.unescapeStringLiteralText = unescapeStringLiteralText;
/**
 * Returns true if a given ts.Node is a computed property
 * @param node ts.Node to be checked
 * @returns is Computed Property
 */
function isComputedProperty(node) {
    return node.kind === SyntaxKind.ComputedPropertyName;
}
exports.isComputedProperty = isComputedProperty;
/**
 * Returns true if a given ts.Node is optional (has QuestionToken)
 * @param node ts.Node to be checked
 * @returns is Optional
 */
function isOptional(node) {
    return node.questionToken
        ? node.questionToken.kind === SyntaxKind.QuestionToken
        : false;
}
exports.isOptional = isOptional;
/**
 * Returns true if the node is an optional chain node
 */
function isChainExpression(node) {
    return node.type === ts_estree_1.AST_NODE_TYPES.ChainExpression;
}
exports.isChainExpression = isChainExpression;
/**
 * Returns true of the child of property access expression is an optional chain
 */
function isChildUnwrappableOptionalChain(node, child) {
    return (isChainExpression(child) &&
        // (x?.y).z is semantically different, and as such .z is no longer optional
        node.expression.kind !== ts.SyntaxKind.ParenthesizedExpression);
}
exports.isChildUnwrappableOptionalChain = isChildUnwrappableOptionalChain;
/**
 * Returns the type of a given ts.Token
 * @param token the ts.Token
 * @returns the token type
 */
function getTokenType(token) {
    let keywordKind;
    if (isAtLeast50 && token.kind === SyntaxKind.Identifier) {
        keywordKind = ts.identifierToKeywordKind(token);
    }
    else if ('originalKeywordKind' in token) {
        // eslint-disable-next-line deprecation/deprecation -- intentional fallback for older TS versions
        keywordKind = token.originalKeywordKind;
    }
    if (keywordKind) {
        if (keywordKind === SyntaxKind.NullKeyword) {
            return ts_estree_1.AST_TOKEN_TYPES.Null;
        }
        else if (keywordKind >= SyntaxKind.FirstFutureReservedWord &&
            keywordKind <= SyntaxKind.LastKeyword) {
            return ts_estree_1.AST_TOKEN_TYPES.Identifier;
        }
        return ts_estree_1.AST_TOKEN_TYPES.Keyword;
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
            return ts_estree_1.AST_TOKEN_TYPES.Numeric;
        case SyntaxKind.JsxText:
            return ts_estree_1.AST_TOKEN_TYPES.JSXText;
        case SyntaxKind.StringLiteral:
            // A TypeScript-StringLiteral token with a TypeScript-JsxAttribute or TypeScript-JsxElement parent,
            // must actually be an ESTree-JSXText token
            if (token.parent &&
                (token.parent.kind === SyntaxKind.JsxAttribute ||
                    token.parent.kind === SyntaxKind.JsxElement)) {
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
    if (token.parent && token.kind === SyntaxKind.Identifier) {
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
exports.getTokenType = getTokenType;
/**
 * Extends and formats a given ts.Token, for a given AST
 * @param token the ts.Token
 * @param ast   the AST object
 * @returns the converted Token
 */
function convertToken(token, ast) {
    const start = token.kind === SyntaxKind.JsxText
        ? token.getFullStart()
        : token.getStart(ast);
    const end = token.getEnd();
    const value = ast.text.slice(start, end);
    const tokenType = getTokenType(token);
    if (tokenType === ts_estree_1.AST_TOKEN_TYPES.RegularExpression) {
        return {
            type: tokenType,
            value,
            range: [start, end],
            loc: getLocFor(start, end, ast),
            regex: {
                pattern: value.slice(1, value.lastIndexOf('/')),
                flags: value.slice(value.lastIndexOf('/') + 1),
            },
        };
    }
    else {
        // @ts-expect-error TS is complaining about `value` not being the correct
        // type but it is
        return {
            type: tokenType,
            value,
            range: [start, end],
            loc: getLocFor(start, end, ast),
        };
    }
}
exports.convertToken = convertToken;
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
            const converted = convertToken(node, ast);
            if (converted) {
                result.push(converted);
            }
        }
        else {
            node.getChildren(ast).forEach(walk);
        }
    }
    walk(ast);
    return result;
}
exports.convertTokens = convertTokens;
class TSError extends Error {
    constructor(message, fileName, index, lineNumber, column) {
        super(message);
        this.fileName = fileName;
        this.index = index;
        this.lineNumber = lineNumber;
        this.column = column;
        Object.defineProperty(this, 'name', {
            value: new.target.name,
            enumerable: false,
            configurable: true,
        });
    }
}
exports.TSError = TSError;
/**
 * @param ast     the AST object
 * @param start   the index at which the error starts
 * @param message the error message
 * @returns converted error object
 */
function createError(ast, start, message) {
    const loc = ast.getLineAndCharacterOfPosition(start);
    return new TSError(message, ast.fileName, start, loc.line + 1, loc.character);
}
exports.createError = createError;
/**
 * @param n the TSNode
 * @param ast the TS AST
 */
function nodeHasTokens(n, ast) {
    // If we have a token or node that has a non-zero width, it must have tokens.
    // Note: getWidth() does not take trivia into account.
    return n.kind === SyntaxKind.EndOfFileToken
        ? !!n.jsDoc
        : n.getWidth(ast) !== 0;
}
exports.nodeHasTokens = nodeHasTokens;
/**
 * Like `forEach`, but suitable for use with numbers and strings (which may be falsy).
 * @template T
 * @template U
 * @param array
 * @param callback
 */
function firstDefined(array, callback) {
    if (array === undefined) {
        return undefined;
    }
    for (let i = 0; i < array.length; i++) {
        const result = callback(array[i], i);
        if (result !== undefined) {
            return result;
        }
    }
    return undefined;
}
exports.firstDefined = firstDefined;
function identifierIsThisKeyword(id) {
    return (
    // eslint-disable-next-line deprecation/deprecation -- intentional for older TS versions
    (isAtLeast50 ? ts.identifierToKeywordKind(id) : id.originalKeywordKind) ===
        SyntaxKind.ThisKeyword);
}
exports.identifierIsThisKeyword = identifierIsThisKeyword;
function isThisIdentifier(node) {
    return (!!node &&
        node.kind === SyntaxKind.Identifier &&
        identifierIsThisKeyword(node));
}
exports.isThisIdentifier = isThisIdentifier;
function isThisInTypeQuery(node) {
    if (!isThisIdentifier(node)) {
        return false;
    }
    while (ts.isQualifiedName(node.parent) && node.parent.left === node) {
        node = node.parent;
    }
    return node.parent.kind === SyntaxKind.TypeQuery;
}
exports.isThisInTypeQuery = isThisInTypeQuery;
//# sourceMappingURL=node-utils.js.map