"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidIdentifier = exports.getLineBreakStyle = exports.getLineRanges = exports.forEachComment = exports.forEachTokenWithTrivia = exports.forEachToken = exports.isFunctionWithBody = exports.hasOwnThisReference = exports.isBlockScopeBoundary = exports.isFunctionScopeBoundary = exports.isTypeScopeBoundary = exports.isScopeBoundary = exports.ScopeBoundarySelector = exports.ScopeBoundary = exports.isInSingleStatementContext = exports.isBlockScopedDeclarationStatement = exports.isBlockScopedVariableDeclaration = exports.isBlockScopedVariableDeclarationList = exports.getVariableDeclarationKind = exports.VariableDeclarationKind = exports.forEachDeclaredVariable = exports.forEachDestructuringIdentifier = exports.getPropertyName = exports.getWrappedNodeAtPosition = exports.getAstNodeAtPosition = exports.commentText = exports.isPositionInComment = exports.getCommentAtPosition = exports.getTokenAtPosition = exports.getNextToken = exports.getPreviousToken = exports.getNextStatement = exports.getPreviousStatement = exports.isModifierFlagSet = exports.isObjectFlagSet = exports.isSymbolFlagSet = exports.isTypeFlagSet = exports.isNodeFlagSet = exports.hasAccessModifier = exports.isParameterProperty = exports.hasModifier = exports.getModifier = exports.isThisParameter = exports.isKeywordKind = exports.isJsDocKind = exports.isTypeNodeKind = exports.isAssignmentKind = exports.isNodeKind = exports.isTokenKind = exports.getChildOfKind = void 0;
exports.getBaseOfClassLikeExpression = exports.hasExhaustiveCaseClauses = exports.formatPseudoBigInt = exports.unwrapParentheses = exports.getSingleLateBoundPropertyNameOfPropertyName = exports.getLateBoundPropertyNamesOfPropertyName = exports.getLateBoundPropertyNames = exports.getPropertyNameOfWellKnownSymbol = exports.isWellKnownSymbolLiterally = exports.isBindableObjectDefinePropertyCall = exports.isReadonlyAssignmentDeclaration = exports.isInConstContext = exports.isConstAssertion = exports.getTsCheckDirective = exports.getCheckJsDirective = exports.isAmbientModule = exports.isCompilerOptionEnabled = exports.isStrictCompilerOptionEnabled = exports.getIIFE = exports.isAmbientModuleBlock = exports.isStatementInAmbientContext = exports.findImportLikeNodes = exports.findImports = exports.ImportKind = exports.parseJsDocOfNode = exports.getJsDoc = exports.canHaveJsDoc = exports.isReassignmentTarget = exports.getAccessKind = exports.AccessKind = exports.isExpressionValueUsed = exports.getDeclarationOfBindingElement = exports.hasSideEffects = exports.SideEffectOptions = exports.isSameLine = exports.isNumericPropertyName = exports.isValidJsxIdentifier = exports.isValidNumericLiteral = exports.isValidPropertyName = exports.isValidPropertyAccess = void 0;
const ts = require("typescript");
const node_1 = require("../typeguard/node");
const _3_2_1 = require("../typeguard/3.2");
const type_1 = require("./type");
function getChildOfKind(node, kind, sourceFile) {
    for (const child of node.getChildren(sourceFile))
        if (child.kind === kind)
            return child;
}
exports.getChildOfKind = getChildOfKind;
function isTokenKind(kind) {
    return kind >= ts.SyntaxKind.FirstToken && kind <= ts.SyntaxKind.LastToken;
}
exports.isTokenKind = isTokenKind;
function isNodeKind(kind) {
    return kind >= ts.SyntaxKind.FirstNode;
}
exports.isNodeKind = isNodeKind;
function isAssignmentKind(kind) {
    return kind >= ts.SyntaxKind.FirstAssignment && kind <= ts.SyntaxKind.LastAssignment;
}
exports.isAssignmentKind = isAssignmentKind;
function isTypeNodeKind(kind) {
    return kind >= ts.SyntaxKind.FirstTypeNode && kind <= ts.SyntaxKind.LastTypeNode;
}
exports.isTypeNodeKind = isTypeNodeKind;
function isJsDocKind(kind) {
    return kind >= ts.SyntaxKind.FirstJSDocNode && kind <= ts.SyntaxKind.LastJSDocNode;
}
exports.isJsDocKind = isJsDocKind;
function isKeywordKind(kind) {
    return kind >= ts.SyntaxKind.FirstKeyword && kind <= ts.SyntaxKind.LastKeyword;
}
exports.isKeywordKind = isKeywordKind;
function isThisParameter(parameter) {
    return parameter.name.kind === ts.SyntaxKind.Identifier && parameter.name.originalKeywordKind === ts.SyntaxKind.ThisKeyword;
}
exports.isThisParameter = isThisParameter;
function getModifier(node, kind) {
    if (node.modifiers !== undefined)
        for (const modifier of node.modifiers)
            if (modifier.kind === kind)
                return modifier;
}
exports.getModifier = getModifier;
function hasModifier(modifiers, ...kinds) {
    if (modifiers === undefined)
        return false;
    for (const modifier of modifiers)
        if (kinds.includes(modifier.kind))
            return true;
    return false;
}
exports.hasModifier = hasModifier;
function isParameterProperty(node) {
    return hasModifier(node.modifiers, ts.SyntaxKind.PublicKeyword, ts.SyntaxKind.ProtectedKeyword, ts.SyntaxKind.PrivateKeyword, ts.SyntaxKind.ReadonlyKeyword);
}
exports.isParameterProperty = isParameterProperty;
function hasAccessModifier(node) {
    return isModifierFlagSet(node, ts.ModifierFlags.AccessibilityModifier);
}
exports.hasAccessModifier = hasAccessModifier;
function isFlagSet(obj, flag) {
    return (obj.flags & flag) !== 0;
}
exports.isNodeFlagSet = isFlagSet;
exports.isTypeFlagSet = isFlagSet;
exports.isSymbolFlagSet = isFlagSet;
function isObjectFlagSet(objectType, flag) {
    return (objectType.objectFlags & flag) !== 0;
}
exports.isObjectFlagSet = isObjectFlagSet;
function isModifierFlagSet(node, flag) {
    return (ts.getCombinedModifierFlags(node) & flag) !== 0;
}
exports.isModifierFlagSet = isModifierFlagSet;
function getPreviousStatement(statement) {
    const parent = statement.parent;
    if (node_1.isBlockLike(parent)) {
        const index = parent.statements.indexOf(statement);
        if (index > 0)
            return parent.statements[index - 1];
    }
}
exports.getPreviousStatement = getPreviousStatement;
function getNextStatement(statement) {
    const parent = statement.parent;
    if (node_1.isBlockLike(parent)) {
        const index = parent.statements.indexOf(statement);
        if (index < parent.statements.length)
            return parent.statements[index + 1];
    }
}
exports.getNextStatement = getNextStatement;
/** Returns the token before the start of `node` or `undefined` if there is none. */
function getPreviousToken(node, sourceFile) {
    const { pos } = node;
    if (pos === 0)
        return;
    do
        node = node.parent;
    while (node.pos === pos);
    return getTokenAtPositionWorker(node, pos - 1, sourceFile !== null && sourceFile !== void 0 ? sourceFile : node.getSourceFile(), false);
}
exports.getPreviousToken = getPreviousToken;
/** Returns the next token that begins after the end of `node`. Returns `undefined` for SourceFile and EndOfFileToken */
function getNextToken(node, sourceFile) {
    if (node.kind === ts.SyntaxKind.SourceFile || node.kind === ts.SyntaxKind.EndOfFileToken)
        return;
    const end = node.end;
    node = node.parent;
    while (node.end === end) {
        if (node.parent === undefined)
            return node.endOfFileToken;
        node = node.parent;
    }
    return getTokenAtPositionWorker(node, end, sourceFile !== null && sourceFile !== void 0 ? sourceFile : node.getSourceFile(), false);
}
exports.getNextToken = getNextToken;
/** Returns the token at or following the specified position or undefined if none is found inside `parent`. */
function getTokenAtPosition(parent, pos, sourceFile, allowJsDoc) {
    if (pos < parent.pos || pos >= parent.end)
        return;
    if (isTokenKind(parent.kind))
        return parent;
    return getTokenAtPositionWorker(parent, pos, sourceFile !== null && sourceFile !== void 0 ? sourceFile : parent.getSourceFile(), allowJsDoc === true);
}
exports.getTokenAtPosition = getTokenAtPosition;
function getTokenAtPositionWorker(node, pos, sourceFile, allowJsDoc) {
    if (!allowJsDoc) {
        // if we are not interested in JSDoc, we can skip to the deepest AST node at the given position
        node = getAstNodeAtPosition(node, pos);
        if (isTokenKind(node.kind))
            return node;
    }
    outer: while (true) {
        for (const child of node.getChildren(sourceFile)) {
            if (child.end > pos && (allowJsDoc || child.kind !== ts.SyntaxKind.JSDocComment)) {
                if (isTokenKind(child.kind))
                    return child;
                // next token is nested in another node
                node = child;
                continue outer;
            }
        }
        return;
    }
}
/**
 * Return the comment at the specified position.
 * You can pass an optional `parent` to avoid some work finding the corresponding token starting at `sourceFile`.
 * If the `parent` parameter is passed, `pos` must be between `parent.pos` and `parent.end`.
*/
function getCommentAtPosition(sourceFile, pos, parent = sourceFile) {
    const token = getTokenAtPosition(parent, pos, sourceFile);
    if (token === undefined || token.kind === ts.SyntaxKind.JsxText || pos >= token.end - (ts.tokenToString(token.kind) || '').length)
        return;
    const startPos = token.pos === 0
        ? (ts.getShebang(sourceFile.text) || '').length
        : token.pos;
    return startPos !== 0 && ts.forEachTrailingCommentRange(sourceFile.text, startPos, commentAtPositionCallback, pos) ||
        ts.forEachLeadingCommentRange(sourceFile.text, startPos, commentAtPositionCallback, pos);
}
exports.getCommentAtPosition = getCommentAtPosition;
function commentAtPositionCallback(pos, end, kind, _nl, at) {
    return at >= pos && at < end ? { pos, end, kind } : undefined;
}
/**
 * Returns whether the specified position is inside a comment.
 * You can pass an optional `parent` to avoid some work finding the corresponding token starting at `sourceFile`.
 * If the `parent` parameter is passed, `pos` must be between `parent.pos` and `parent.end`.
 */
function isPositionInComment(sourceFile, pos, parent) {
    return getCommentAtPosition(sourceFile, pos, parent) !== undefined;
}
exports.isPositionInComment = isPositionInComment;
function commentText(sourceText, comment) {
    return sourceText.substring(comment.pos + 2, comment.kind === ts.SyntaxKind.SingleLineCommentTrivia ? comment.end : comment.end - 2);
}
exports.commentText = commentText;
/** Returns the deepest AST Node at `pos`. Returns undefined if `pos` is outside of the range of `node` */
function getAstNodeAtPosition(node, pos) {
    if (node.pos > pos || node.end <= pos)
        return;
    while (isNodeKind(node.kind)) {
        const nested = ts.forEachChild(node, (child) => child.pos <= pos && child.end > pos ? child : undefined);
        if (nested === undefined)
            break;
        node = nested;
    }
    return node;
}
exports.getAstNodeAtPosition = getAstNodeAtPosition;
/**
 * Returns the NodeWrap of deepest AST node that contains `pos` between its `pos` and `end`.
 * Only returns undefined if pos is outside of `wrap`
 */
function getWrappedNodeAtPosition(wrap, pos) {
    if (wrap.node.pos > pos || wrap.node.end <= pos)
        return;
    outer: while (true) {
        for (const child of wrap.children) {
            if (child.node.pos > pos)
                return wrap;
            if (child.node.end > pos) {
                wrap = child;
                continue outer;
            }
        }
        return wrap;
    }
}
exports.getWrappedNodeAtPosition = getWrappedNodeAtPosition;
function getPropertyName(propertyName) {
    if (propertyName.kind === ts.SyntaxKind.ComputedPropertyName) {
        const expression = unwrapParentheses(propertyName.expression);
        if (node_1.isPrefixUnaryExpression(expression)) {
            let negate = false;
            switch (expression.operator) {
                case ts.SyntaxKind.MinusToken:
                    negate = true;
                // falls through
                case ts.SyntaxKind.PlusToken:
                    return node_1.isNumericLiteral(expression.operand)
                        ? `${negate ? '-' : ''}${expression.operand.text}`
                        : _3_2_1.isBigIntLiteral(expression.operand)
                            ? `${negate ? '-' : ''}${expression.operand.text.slice(0, -1)}`
                            : undefined;
                default:
                    return;
            }
        }
        if (_3_2_1.isBigIntLiteral(expression))
            // handle BigInt, even though TypeScript doesn't allow BigInt as computed property name
            return expression.text.slice(0, -1);
        if (node_1.isNumericOrStringLikeLiteral(expression))
            return expression.text;
        return;
    }
    return propertyName.kind === ts.SyntaxKind.PrivateIdentifier ? undefined : propertyName.text;
}
exports.getPropertyName = getPropertyName;
function forEachDestructuringIdentifier(pattern, fn) {
    for (const element of pattern.elements) {
        if (element.kind !== ts.SyntaxKind.BindingElement)
            continue;
        let result;
        if (element.name.kind === ts.SyntaxKind.Identifier) {
            result = fn(element);
        }
        else {
            result = forEachDestructuringIdentifier(element.name, fn);
        }
        if (result)
            return result;
    }
}
exports.forEachDestructuringIdentifier = forEachDestructuringIdentifier;
function forEachDeclaredVariable(declarationList, cb) {
    for (const declaration of declarationList.declarations) {
        let result;
        if (declaration.name.kind === ts.SyntaxKind.Identifier) {
            result = cb(declaration);
        }
        else {
            result = forEachDestructuringIdentifier(declaration.name, cb);
        }
        if (result)
            return result;
    }
}
exports.forEachDeclaredVariable = forEachDeclaredVariable;
var VariableDeclarationKind;
(function (VariableDeclarationKind) {
    VariableDeclarationKind[VariableDeclarationKind["Var"] = 0] = "Var";
    VariableDeclarationKind[VariableDeclarationKind["Let"] = 1] = "Let";
    VariableDeclarationKind[VariableDeclarationKind["Const"] = 2] = "Const";
})(VariableDeclarationKind = exports.VariableDeclarationKind || (exports.VariableDeclarationKind = {}));
function getVariableDeclarationKind(declarationList) {
    if (declarationList.flags & ts.NodeFlags.Let)
        return 1 /* Let */;
    if (declarationList.flags & ts.NodeFlags.Const)
        return 2 /* Const */;
    return 0 /* Var */;
}
exports.getVariableDeclarationKind = getVariableDeclarationKind;
function isBlockScopedVariableDeclarationList(declarationList) {
    return (declarationList.flags & ts.NodeFlags.BlockScoped) !== 0;
}
exports.isBlockScopedVariableDeclarationList = isBlockScopedVariableDeclarationList;
function isBlockScopedVariableDeclaration(declaration) {
    const parent = declaration.parent;
    return parent.kind === ts.SyntaxKind.CatchClause ||
        isBlockScopedVariableDeclarationList(parent);
}
exports.isBlockScopedVariableDeclaration = isBlockScopedVariableDeclaration;
function isBlockScopedDeclarationStatement(statement) {
    switch (statement.kind) {
        case ts.SyntaxKind.VariableStatement:
            return isBlockScopedVariableDeclarationList(statement.declarationList);
        case ts.SyntaxKind.ClassDeclaration:
        case ts.SyntaxKind.EnumDeclaration:
        case ts.SyntaxKind.InterfaceDeclaration:
        case ts.SyntaxKind.TypeAliasDeclaration:
            return true;
        default:
            return false;
    }
}
exports.isBlockScopedDeclarationStatement = isBlockScopedDeclarationStatement;
function isInSingleStatementContext(statement) {
    switch (statement.parent.kind) {
        case ts.SyntaxKind.ForStatement:
        case ts.SyntaxKind.ForInStatement:
        case ts.SyntaxKind.ForOfStatement:
        case ts.SyntaxKind.WhileStatement:
        case ts.SyntaxKind.DoStatement:
        case ts.SyntaxKind.IfStatement:
        case ts.SyntaxKind.WithStatement:
        case ts.SyntaxKind.LabeledStatement:
            return true;
        default:
            return false;
    }
}
exports.isInSingleStatementContext = isInSingleStatementContext;
var ScopeBoundary;
(function (ScopeBoundary) {
    ScopeBoundary[ScopeBoundary["None"] = 0] = "None";
    ScopeBoundary[ScopeBoundary["Function"] = 1] = "Function";
    ScopeBoundary[ScopeBoundary["Block"] = 2] = "Block";
    ScopeBoundary[ScopeBoundary["Type"] = 4] = "Type";
    ScopeBoundary[ScopeBoundary["ConditionalType"] = 8] = "ConditionalType";
})(ScopeBoundary = exports.ScopeBoundary || (exports.ScopeBoundary = {}));
var ScopeBoundarySelector;
(function (ScopeBoundarySelector) {
    ScopeBoundarySelector[ScopeBoundarySelector["Function"] = 1] = "Function";
    ScopeBoundarySelector[ScopeBoundarySelector["Block"] = 3] = "Block";
    ScopeBoundarySelector[ScopeBoundarySelector["Type"] = 7] = "Type";
    ScopeBoundarySelector[ScopeBoundarySelector["InferType"] = 8] = "InferType";
})(ScopeBoundarySelector = exports.ScopeBoundarySelector || (exports.ScopeBoundarySelector = {}));
function isScopeBoundary(node) {
    return isFunctionScopeBoundary(node) || isBlockScopeBoundary(node) || isTypeScopeBoundary(node);
}
exports.isScopeBoundary = isScopeBoundary;
function isTypeScopeBoundary(node) {
    switch (node.kind) {
        case ts.SyntaxKind.InterfaceDeclaration:
        case ts.SyntaxKind.TypeAliasDeclaration:
        case ts.SyntaxKind.MappedType:
            return 4 /* Type */;
        case ts.SyntaxKind.ConditionalType:
            return 8 /* ConditionalType */;
        default:
            return 0 /* None */;
    }
}
exports.isTypeScopeBoundary = isTypeScopeBoundary;
function isFunctionScopeBoundary(node) {
    switch (node.kind) {
        case ts.SyntaxKind.FunctionExpression:
        case ts.SyntaxKind.ArrowFunction:
        case ts.SyntaxKind.Constructor:
        case ts.SyntaxKind.ModuleDeclaration:
        case ts.SyntaxKind.ClassDeclaration:
        case ts.SyntaxKind.ClassExpression:
        case ts.SyntaxKind.EnumDeclaration:
        case ts.SyntaxKind.MethodDeclaration:
        case ts.SyntaxKind.FunctionDeclaration:
        case ts.SyntaxKind.GetAccessor:
        case ts.SyntaxKind.SetAccessor:
        case ts.SyntaxKind.MethodSignature:
        case ts.SyntaxKind.CallSignature:
        case ts.SyntaxKind.ConstructSignature:
        case ts.SyntaxKind.ConstructorType:
        case ts.SyntaxKind.FunctionType:
            return 1 /* Function */;
        case ts.SyntaxKind.SourceFile:
            // if SourceFile is no module, it contributes to the global scope and is therefore no scope boundary
            return ts.isExternalModule(node) ? 1 /* Function */ : 0 /* None */;
        default:
            return 0 /* None */;
    }
}
exports.isFunctionScopeBoundary = isFunctionScopeBoundary;
function isBlockScopeBoundary(node) {
    switch (node.kind) {
        case ts.SyntaxKind.Block:
            const parent = node.parent;
            return parent.kind !== ts.SyntaxKind.CatchClause &&
                // blocks inside SourceFile are block scope boundaries
                (parent.kind === ts.SyntaxKind.SourceFile ||
                    // blocks that are direct children of a function scope boundary are no scope boundary
                    // for example the FunctionBlock is part of the function scope of the containing function
                    !isFunctionScopeBoundary(parent))
                ? 2 /* Block */
                : 0 /* None */;
        case ts.SyntaxKind.ForStatement:
        case ts.SyntaxKind.ForInStatement:
        case ts.SyntaxKind.ForOfStatement:
        case ts.SyntaxKind.CaseBlock:
        case ts.SyntaxKind.CatchClause:
        case ts.SyntaxKind.WithStatement:
            return 2 /* Block */;
        default:
            return 0 /* None */;
    }
}
exports.isBlockScopeBoundary = isBlockScopeBoundary;
/** Returns true for scope boundaries that have their own `this` reference instead of inheriting it from the containing scope */
function hasOwnThisReference(node) {
    switch (node.kind) {
        case ts.SyntaxKind.ClassDeclaration:
        case ts.SyntaxKind.ClassExpression:
        case ts.SyntaxKind.FunctionExpression:
            return true;
        case ts.SyntaxKind.FunctionDeclaration:
            return node.body !== undefined;
        case ts.SyntaxKind.MethodDeclaration:
        case ts.SyntaxKind.GetAccessor:
        case ts.SyntaxKind.SetAccessor:
            return node.parent.kind === ts.SyntaxKind.ObjectLiteralExpression;
        default:
            return false;
    }
}
exports.hasOwnThisReference = hasOwnThisReference;
function isFunctionWithBody(node) {
    switch (node.kind) {
        case ts.SyntaxKind.GetAccessor:
        case ts.SyntaxKind.SetAccessor:
        case ts.SyntaxKind.FunctionDeclaration:
        case ts.SyntaxKind.MethodDeclaration:
        case ts.SyntaxKind.Constructor:
            return node.body !== undefined;
        case ts.SyntaxKind.FunctionExpression:
        case ts.SyntaxKind.ArrowFunction:
            return true;
        default:
            return false;
    }
}
exports.isFunctionWithBody = isFunctionWithBody;
/**
 * Iterate over all tokens of `node`
 *
 * @param node The node whose tokens should be visited
 * @param cb Is called for every token contained in `node`
 */
function forEachToken(node, cb, sourceFile = node.getSourceFile()) {
    const queue = [];
    while (true) {
        if (isTokenKind(node.kind)) {
            cb(node);
        }
        else if (node.kind !== ts.SyntaxKind.JSDocComment) {
            const children = node.getChildren(sourceFile);
            if (children.length === 1) {
                node = children[0];
                continue;
            }
            for (let i = children.length - 1; i >= 0; --i)
                queue.push(children[i]); // add children in reverse order, when we pop the next element from the queue, it's the first child
        }
        if (queue.length === 0)
            break;
        node = queue.pop();
    }
}
exports.forEachToken = forEachToken;
/**
 * Iterate over all tokens and trivia of `node`
 *
 * @description JsDoc comments are treated like regular comments
 *
 * @param node The node whose tokens should be visited
 * @param cb Is called for every token contained in `node` and trivia before the token
 */
function forEachTokenWithTrivia(node, cb, sourceFile = node.getSourceFile()) {
    const fullText = sourceFile.text;
    const scanner = ts.createScanner(sourceFile.languageVersion, false, sourceFile.languageVariant, fullText);
    return forEachToken(node, (token) => {
        const tokenStart = token.kind === ts.SyntaxKind.JsxText || token.pos === token.end ? token.pos : token.getStart(sourceFile);
        if (tokenStart !== token.pos) {
            // we only have to handle trivia before each token. whitespace at the end of the file is followed by EndOfFileToken
            scanner.setTextPos(token.pos);
            let kind = scanner.scan();
            let pos = scanner.getTokenPos();
            while (pos < tokenStart) {
                const textPos = scanner.getTextPos();
                cb(fullText, kind, { pos, end: textPos }, token.parent);
                if (textPos === tokenStart)
                    break;
                kind = scanner.scan();
                pos = scanner.getTokenPos();
            }
        }
        return cb(fullText, token.kind, { end: token.end, pos: tokenStart }, token.parent);
    }, sourceFile);
}
exports.forEachTokenWithTrivia = forEachTokenWithTrivia;
/** Iterate over all comments owned by `node` or its children */
function forEachComment(node, cb, sourceFile = node.getSourceFile()) {
    /* Visit all tokens and skip trivia.
       Comment ranges between tokens are parsed without the need of a scanner.
       forEachTokenWithWhitespace does intentionally not pay attention to the correct comment ownership of nodes as it always
       scans all trivia before each token, which could include trailing comments of the previous token.
       Comment onwership is done right in this function*/
    const fullText = sourceFile.text;
    const notJsx = sourceFile.languageVariant !== ts.LanguageVariant.JSX;
    return forEachToken(node, (token) => {
        if (token.pos === token.end)
            return;
        if (token.kind !== ts.SyntaxKind.JsxText)
            ts.forEachLeadingCommentRange(fullText, 
            // skip shebang at position 0
            token.pos === 0 ? (ts.getShebang(fullText) || '').length : token.pos, commentCallback);
        if (notJsx || canHaveTrailingTrivia(token))
            return ts.forEachTrailingCommentRange(fullText, token.end, commentCallback);
    }, sourceFile);
    function commentCallback(pos, end, kind) {
        cb(fullText, { pos, end, kind });
    }
}
exports.forEachComment = forEachComment;
/** Exclude trailing positions that would lead to scanning for trivia inside JsxText */
function canHaveTrailingTrivia(token) {
    switch (token.kind) {
        case ts.SyntaxKind.CloseBraceToken:
            // after a JsxExpression inside a JsxElement's body can only be other JsxChild, but no trivia
            return token.parent.kind !== ts.SyntaxKind.JsxExpression || !isJsxElementOrFragment(token.parent.parent);
        case ts.SyntaxKind.GreaterThanToken:
            switch (token.parent.kind) {
                case ts.SyntaxKind.JsxOpeningElement:
                    // if end is not equal, this is part of the type arguments list. in all other cases it would be inside the element body
                    return token.end !== token.parent.end;
                case ts.SyntaxKind.JsxOpeningFragment:
                    return false; // would be inside the fragment
                case ts.SyntaxKind.JsxSelfClosingElement:
                    return token.end !== token.parent.end || // if end is not equal, this is part of the type arguments list
                        !isJsxElementOrFragment(token.parent.parent); // there's only trailing trivia if it's the end of the top element
                case ts.SyntaxKind.JsxClosingElement:
                case ts.SyntaxKind.JsxClosingFragment:
                    // there's only trailing trivia if it's the end of the top element
                    return !isJsxElementOrFragment(token.parent.parent.parent);
            }
    }
    return true;
}
function isJsxElementOrFragment(node) {
    return node.kind === ts.SyntaxKind.JsxElement || node.kind === ts.SyntaxKind.JsxFragment;
}
function getLineRanges(sourceFile) {
    const lineStarts = sourceFile.getLineStarts();
    const result = [];
    const length = lineStarts.length;
    const sourceText = sourceFile.text;
    let pos = 0;
    for (let i = 1; i < length; ++i) {
        const end = lineStarts[i];
        let lineEnd = end;
        for (; lineEnd > pos; --lineEnd)
            if (!ts.isLineBreak(sourceText.charCodeAt(lineEnd - 1)))
                break;
        result.push({
            pos,
            end,
            contentLength: lineEnd - pos,
        });
        pos = end;
    }
    result.push({
        pos,
        end: sourceFile.end,
        contentLength: sourceFile.end - pos,
    });
    return result;
}
exports.getLineRanges = getLineRanges;
/** Get the line break style used in sourceFile. This function only looks at the first line break. If there is none, \n is assumed. */
function getLineBreakStyle(sourceFile) {
    const lineStarts = sourceFile.getLineStarts();
    return lineStarts.length === 1 || lineStarts[1] < 2 || sourceFile.text[lineStarts[1] - 2] !== '\r'
        ? '\n'
        : '\r\n';
}
exports.getLineBreakStyle = getLineBreakStyle;
let cachedScanner;
function scanToken(text, languageVersion) {
    if (cachedScanner === undefined) {
        // cache scanner
        cachedScanner = ts.createScanner(languageVersion, false, undefined, text);
    }
    else {
        cachedScanner.setScriptTarget(languageVersion);
        cachedScanner.setText(text);
    }
    cachedScanner.scan();
    return cachedScanner;
}
/**
 * Determines whether the given text parses as a standalone identifier.
 * This is not a guarantee that it works in every context. The property name in PropertyAccessExpressions for example allows reserved words.
 * Depending on the context it could be parsed as contextual keyword or TypeScript keyword.
 */
function isValidIdentifier(text, languageVersion = ts.ScriptTarget.Latest) {
    const scan = scanToken(text, languageVersion);
    return scan.isIdentifier() && scan.getTextPos() === text.length && scan.getTokenPos() === 0;
}
exports.isValidIdentifier = isValidIdentifier;
function charSize(ch) {
    return ch >= 0x10000 ? 2 : 1;
}
/**
 * Determines whether the given text can be used to access a property with a PropertyAccessExpression while preserving the property's name.
 */
function isValidPropertyAccess(text, languageVersion = ts.ScriptTarget.Latest) {
    if (text.length === 0)
        return false;
    let ch = text.codePointAt(0);
    if (!ts.isIdentifierStart(ch, languageVersion))
        return false;
    for (let i = charSize(ch); i < text.length; i += charSize(ch)) {
        ch = text.codePointAt(i);
        if (!ts.isIdentifierPart(ch, languageVersion))
            return false;
    }
    return true;
}
exports.isValidPropertyAccess = isValidPropertyAccess;
/**
 * Determines whether the given text can be used as unquoted name of a property declaration while preserving the property's name.
 */
function isValidPropertyName(text, languageVersion = ts.ScriptTarget.Latest) {
    if (isValidPropertyAccess(text, languageVersion))
        return true;
    const scan = scanToken(text, languageVersion);
    return scan.getTextPos() === text.length &&
        scan.getToken() === ts.SyntaxKind.NumericLiteral && scan.getTokenValue() === text; // ensure stringified number equals literal
}
exports.isValidPropertyName = isValidPropertyName;
/**
 * Determines whether the given text can be parsed as a numeric literal.
 */
function isValidNumericLiteral(text, languageVersion = ts.ScriptTarget.Latest) {
    const scan = scanToken(text, languageVersion);
    return scan.getToken() === ts.SyntaxKind.NumericLiteral && scan.getTextPos() === text.length && scan.getTokenPos() === 0;
}
exports.isValidNumericLiteral = isValidNumericLiteral;
/**
 * Determines whether the given text can be used as JSX tag or attribute name while preserving the exact name.
 */
function isValidJsxIdentifier(text, languageVersion = ts.ScriptTarget.Latest) {
    if (text.length === 0)
        return false;
    let seenNamespaceSeparator = false;
    let ch = text.codePointAt(0);
    if (!ts.isIdentifierStart(ch, languageVersion))
        return false;
    for (let i = charSize(ch); i < text.length; i += charSize(ch)) {
        ch = text.codePointAt(i);
        if (!ts.isIdentifierPart(ch, languageVersion) && ch !== 45 /* minus */) {
            if (!seenNamespaceSeparator && ch === 58 /* colon */ && i + charSize(ch) !== text.length) {
                seenNamespaceSeparator = true;
            }
            else {
                return false;
            }
        }
    }
    return true;
}
exports.isValidJsxIdentifier = isValidJsxIdentifier;
function isNumericPropertyName(name) {
    return String(+name) === name;
}
exports.isNumericPropertyName = isNumericPropertyName;
function isSameLine(sourceFile, pos1, pos2) {
    return ts.getLineAndCharacterOfPosition(sourceFile, pos1).line === ts.getLineAndCharacterOfPosition(sourceFile, pos2).line;
}
exports.isSameLine = isSameLine;
var SideEffectOptions;
(function (SideEffectOptions) {
    SideEffectOptions[SideEffectOptions["None"] = 0] = "None";
    SideEffectOptions[SideEffectOptions["TaggedTemplate"] = 1] = "TaggedTemplate";
    SideEffectOptions[SideEffectOptions["Constructor"] = 2] = "Constructor";
    SideEffectOptions[SideEffectOptions["JsxElement"] = 4] = "JsxElement";
})(SideEffectOptions = exports.SideEffectOptions || (exports.SideEffectOptions = {}));
function hasSideEffects(node, options) {
    var _a, _b;
    const queue = [];
    while (true) {
        switch (node.kind) {
            case ts.SyntaxKind.CallExpression:
            case ts.SyntaxKind.PostfixUnaryExpression:
            case ts.SyntaxKind.AwaitExpression:
            case ts.SyntaxKind.YieldExpression:
            case ts.SyntaxKind.DeleteExpression:
                return true;
            case ts.SyntaxKind.TypeAssertionExpression:
            case ts.SyntaxKind.AsExpression:
            case ts.SyntaxKind.ParenthesizedExpression:
            case ts.SyntaxKind.NonNullExpression:
            case ts.SyntaxKind.VoidExpression:
            case ts.SyntaxKind.TypeOfExpression:
            case ts.SyntaxKind.PropertyAccessExpression:
            case ts.SyntaxKind.SpreadElement:
            case ts.SyntaxKind.PartiallyEmittedExpression:
                node = node.expression;
                continue;
            case ts.SyntaxKind.BinaryExpression:
                if (isAssignmentKind(node.operatorToken.kind))
                    return true;
                queue.push(node.right);
                node = node.left;
                continue;
            case ts.SyntaxKind.PrefixUnaryExpression:
                switch (node.operator) {
                    case ts.SyntaxKind.PlusPlusToken:
                    case ts.SyntaxKind.MinusMinusToken:
                        return true;
                    default:
                        node = node.operand;
                        continue;
                }
            case ts.SyntaxKind.ElementAccessExpression:
                if (node.argumentExpression !== undefined) // for compatibility with typescript@<2.9.0
                    queue.push(node.argumentExpression);
                node = node.expression;
                continue;
            case ts.SyntaxKind.ConditionalExpression:
                queue.push(node.whenTrue, node.whenFalse);
                node = node.condition;
                continue;
            case ts.SyntaxKind.NewExpression:
                if (options & 2 /* Constructor */)
                    return true;
                if (node.arguments !== undefined)
                    queue.push(...node.arguments);
                node = node.expression;
                continue;
            case ts.SyntaxKind.TaggedTemplateExpression:
                if (options & 1 /* TaggedTemplate */)
                    return true;
                queue.push(node.tag);
                node = node.template;
                if (node.kind === ts.SyntaxKind.NoSubstitutionTemplateLiteral)
                    break;
            // falls through
            case ts.SyntaxKind.TemplateExpression:
                for (const child of node.templateSpans)
                    queue.push(child.expression);
                break;
            case ts.SyntaxKind.ClassExpression: {
                if (node.decorators !== undefined)
                    return true;
                for (const child of node.members) {
                    if (child.decorators !== undefined)
                        return true;
                    if (!hasModifier(child.modifiers, ts.SyntaxKind.DeclareKeyword)) {
                        if (((_a = child.name) === null || _a === void 0 ? void 0 : _a.kind) === ts.SyntaxKind.ComputedPropertyName)
                            queue.push(child.name.expression);
                        if (node_1.isMethodDeclaration(child)) {
                            for (const p of child.parameters)
                                if (p.decorators !== undefined)
                                    return true;
                        }
                        else if (node_1.isPropertyDeclaration(child) &&
                            child.initializer !== undefined &&
                            hasModifier(child.modifiers, ts.SyntaxKind.StaticKeyword)) {
                            queue.push(child.initializer);
                        }
                    }
                }
                const base = getBaseOfClassLikeExpression(node);
                if (base === undefined)
                    break;
                node = base.expression;
                continue;
            }
            case ts.SyntaxKind.ArrayLiteralExpression:
                queue.push(...node.elements);
                break;
            case ts.SyntaxKind.ObjectLiteralExpression:
                for (const child of node.properties) {
                    if (((_b = child.name) === null || _b === void 0 ? void 0 : _b.kind) === ts.SyntaxKind.ComputedPropertyName)
                        queue.push(child.name.expression);
                    switch (child.kind) {
                        case ts.SyntaxKind.PropertyAssignment:
                            queue.push(child.initializer);
                            break;
                        case ts.SyntaxKind.SpreadAssignment:
                            queue.push(child.expression);
                    }
                }
                break;
            case ts.SyntaxKind.JsxExpression:
                if (node.expression === undefined)
                    break;
                node = node.expression;
                continue;
            case ts.SyntaxKind.JsxElement:
            case ts.SyntaxKind.JsxFragment:
                for (const child of node.children)
                    if (child.kind !== ts.SyntaxKind.JsxText)
                        queue.push(child);
                if (node.kind === ts.SyntaxKind.JsxFragment)
                    break;
                node = node.openingElement;
            // falls through
            case ts.SyntaxKind.JsxSelfClosingElement:
            case ts.SyntaxKind.JsxOpeningElement:
                if (options & 4 /* JsxElement */)
                    return true;
                for (const child of node.attributes.properties) {
                    if (child.kind === ts.SyntaxKind.JsxSpreadAttribute) {
                        queue.push(child.expression);
                    }
                    else if (child.initializer !== undefined) {
                        queue.push(child.initializer);
                    }
                }
                break;
            case ts.SyntaxKind.CommaListExpression:
                queue.push(...node.elements);
        }
        if (queue.length === 0)
            return false;
        node = queue.pop();
    }
}
exports.hasSideEffects = hasSideEffects;
/** Returns the VariableDeclaration or ParameterDeclaration that contains the BindingElement */
function getDeclarationOfBindingElement(node) {
    let parent = node.parent.parent;
    while (parent.kind === ts.SyntaxKind.BindingElement)
        parent = parent.parent.parent;
    return parent;
}
exports.getDeclarationOfBindingElement = getDeclarationOfBindingElement;
function isExpressionValueUsed(node) {
    while (true) {
        const parent = node.parent;
        switch (parent.kind) {
            case ts.SyntaxKind.CallExpression:
            case ts.SyntaxKind.NewExpression:
            case ts.SyntaxKind.ElementAccessExpression:
            case ts.SyntaxKind.WhileStatement:
            case ts.SyntaxKind.DoStatement:
            case ts.SyntaxKind.WithStatement:
            case ts.SyntaxKind.ThrowStatement:
            case ts.SyntaxKind.ReturnStatement:
            case ts.SyntaxKind.JsxExpression:
            case ts.SyntaxKind.JsxSpreadAttribute:
            case ts.SyntaxKind.JsxElement:
            case ts.SyntaxKind.JsxFragment:
            case ts.SyntaxKind.JsxSelfClosingElement:
            case ts.SyntaxKind.ComputedPropertyName:
            case ts.SyntaxKind.ArrowFunction:
            case ts.SyntaxKind.ExportSpecifier:
            case ts.SyntaxKind.ExportAssignment:
            case ts.SyntaxKind.ImportDeclaration:
            case ts.SyntaxKind.ExternalModuleReference:
            case ts.SyntaxKind.Decorator:
            case ts.SyntaxKind.TaggedTemplateExpression:
            case ts.SyntaxKind.TemplateSpan:
            case ts.SyntaxKind.ExpressionWithTypeArguments:
            case ts.SyntaxKind.TypeOfExpression:
            case ts.SyntaxKind.AwaitExpression:
            case ts.SyntaxKind.YieldExpression:
            case ts.SyntaxKind.LiteralType:
            case ts.SyntaxKind.JsxAttributes:
            case ts.SyntaxKind.JsxOpeningElement:
            case ts.SyntaxKind.JsxClosingElement:
            case ts.SyntaxKind.IfStatement:
            case ts.SyntaxKind.CaseClause:
            case ts.SyntaxKind.SwitchStatement:
                return true;
            case ts.SyntaxKind.PropertyAccessExpression:
                return parent.expression === node;
            case ts.SyntaxKind.QualifiedName:
                return parent.left === node;
            case ts.SyntaxKind.ShorthandPropertyAssignment:
                return parent.objectAssignmentInitializer === node ||
                    !isInDestructuringAssignment(parent);
            case ts.SyntaxKind.PropertyAssignment:
                return parent.initializer === node && !isInDestructuringAssignment(parent);
            case ts.SyntaxKind.SpreadAssignment:
            case ts.SyntaxKind.SpreadElement:
            case ts.SyntaxKind.ArrayLiteralExpression:
                return !isInDestructuringAssignment(parent);
            case ts.SyntaxKind.ParenthesizedExpression:
            case ts.SyntaxKind.AsExpression:
            case ts.SyntaxKind.TypeAssertionExpression:
            case ts.SyntaxKind.PostfixUnaryExpression:
            case ts.SyntaxKind.PrefixUnaryExpression:
            case ts.SyntaxKind.NonNullExpression:
                node = parent;
                continue;
            case ts.SyntaxKind.ForStatement:
                return parent.condition === node;
            case ts.SyntaxKind.ForInStatement:
            case ts.SyntaxKind.ForOfStatement:
                return parent.expression === node;
            case ts.SyntaxKind.ConditionalExpression:
                if (parent.condition === node)
                    return true;
                node = parent;
                break;
            case ts.SyntaxKind.PropertyDeclaration:
            case ts.SyntaxKind.BindingElement:
            case ts.SyntaxKind.VariableDeclaration:
            case ts.SyntaxKind.Parameter:
            case ts.SyntaxKind.EnumMember:
                return parent.initializer === node;
            case ts.SyntaxKind.ImportEqualsDeclaration:
                return parent.moduleReference === node;
            case ts.SyntaxKind.CommaListExpression:
                if (parent.elements[parent.elements.length - 1] !== node)
                    return false;
                node = parent;
                break;
            case ts.SyntaxKind.BinaryExpression:
                if (parent.right === node) {
                    if (parent.operatorToken.kind === ts.SyntaxKind.CommaToken) {
                        node = parent;
                        break;
                    }
                    return true;
                }
                switch (parent.operatorToken.kind) {
                    case ts.SyntaxKind.CommaToken:
                    case ts.SyntaxKind.EqualsToken:
                        return false;
                    case ts.SyntaxKind.EqualsEqualsEqualsToken:
                    case ts.SyntaxKind.EqualsEqualsToken:
                    case ts.SyntaxKind.ExclamationEqualsEqualsToken:
                    case ts.SyntaxKind.ExclamationEqualsToken:
                    case ts.SyntaxKind.InstanceOfKeyword:
                    case ts.SyntaxKind.PlusToken:
                    case ts.SyntaxKind.MinusToken:
                    case ts.SyntaxKind.AsteriskToken:
                    case ts.SyntaxKind.SlashToken:
                    case ts.SyntaxKind.PercentToken:
                    case ts.SyntaxKind.AsteriskAsteriskToken:
                    case ts.SyntaxKind.GreaterThanToken:
                    case ts.SyntaxKind.GreaterThanGreaterThanToken:
                    case ts.SyntaxKind.GreaterThanGreaterThanGreaterThanToken:
                    case ts.SyntaxKind.GreaterThanEqualsToken:
                    case ts.SyntaxKind.LessThanToken:
                    case ts.SyntaxKind.LessThanLessThanToken:
                    case ts.SyntaxKind.LessThanEqualsToken:
                    case ts.SyntaxKind.AmpersandToken:
                    case ts.SyntaxKind.BarToken:
                    case ts.SyntaxKind.CaretToken:
                    case ts.SyntaxKind.BarBarToken:
                    case ts.SyntaxKind.AmpersandAmpersandToken:
                    case ts.SyntaxKind.QuestionQuestionToken:
                    case ts.SyntaxKind.InKeyword:
                    case ts.SyntaxKind.QuestionQuestionEqualsToken:
                    case ts.SyntaxKind.AmpersandAmpersandEqualsToken:
                    case ts.SyntaxKind.BarBarEqualsToken:
                        return true;
                    default:
                        node = parent;
                }
                break;
            default:
                return false;
        }
    }
}
exports.isExpressionValueUsed = isExpressionValueUsed;
function isInDestructuringAssignment(node) {
    switch (node.kind) {
        case ts.SyntaxKind.ShorthandPropertyAssignment:
            if (node.objectAssignmentInitializer !== undefined)
                return true;
        // falls through
        case ts.SyntaxKind.PropertyAssignment:
        case ts.SyntaxKind.SpreadAssignment:
            node = node.parent;
            break;
        case ts.SyntaxKind.SpreadElement:
            if (node.parent.kind !== ts.SyntaxKind.ArrayLiteralExpression)
                return false;
            node = node.parent;
    }
    while (true) {
        switch (node.parent.kind) {
            case ts.SyntaxKind.BinaryExpression:
                return node.parent.left === node &&
                    node.parent.operatorToken.kind === ts.SyntaxKind.EqualsToken;
            case ts.SyntaxKind.ForOfStatement:
                return node.parent.initializer === node;
            case ts.SyntaxKind.ArrayLiteralExpression:
            case ts.SyntaxKind.ObjectLiteralExpression:
                node = node.parent;
                break;
            case ts.SyntaxKind.SpreadAssignment:
            case ts.SyntaxKind.PropertyAssignment:
                node = node.parent.parent;
                break;
            case ts.SyntaxKind.SpreadElement:
                if (node.parent.parent.kind !== ts.SyntaxKind.ArrayLiteralExpression)
                    return false;
                node = node.parent.parent;
                break;
            default:
                return false;
        }
    }
}
var AccessKind;
(function (AccessKind) {
    AccessKind[AccessKind["None"] = 0] = "None";
    AccessKind[AccessKind["Read"] = 1] = "Read";
    AccessKind[AccessKind["Write"] = 2] = "Write";
    AccessKind[AccessKind["Delete"] = 4] = "Delete";
    AccessKind[AccessKind["ReadWrite"] = 3] = "ReadWrite";
    AccessKind[AccessKind["Modification"] = 6] = "Modification";
})(AccessKind = exports.AccessKind || (exports.AccessKind = {}));
function getAccessKind(node) {
    const parent = node.parent;
    switch (parent.kind) {
        case ts.SyntaxKind.DeleteExpression:
            return 4 /* Delete */;
        case ts.SyntaxKind.PostfixUnaryExpression:
            return 3 /* ReadWrite */;
        case ts.SyntaxKind.PrefixUnaryExpression:
            return parent.operator === ts.SyntaxKind.PlusPlusToken ||
                parent.operator === ts.SyntaxKind.MinusMinusToken
                ? 3 /* ReadWrite */
                : 1 /* Read */;
        case ts.SyntaxKind.BinaryExpression:
            return parent.right === node
                ? 1 /* Read */
                : !isAssignmentKind(parent.operatorToken.kind)
                    ? 1 /* Read */
                    : parent.operatorToken.kind === ts.SyntaxKind.EqualsToken
                        ? 2 /* Write */
                        : 3 /* ReadWrite */;
        case ts.SyntaxKind.ShorthandPropertyAssignment:
            return parent.objectAssignmentInitializer === node
                ? 1 /* Read */
                : isInDestructuringAssignment(parent)
                    ? 2 /* Write */
                    : 1 /* Read */;
        case ts.SyntaxKind.PropertyAssignment:
            return parent.name === node
                ? 0 /* None */
                : isInDestructuringAssignment(parent)
                    ? 2 /* Write */
                    : 1 /* Read */;
        case ts.SyntaxKind.ArrayLiteralExpression:
        case ts.SyntaxKind.SpreadElement:
        case ts.SyntaxKind.SpreadAssignment:
            return isInDestructuringAssignment(parent)
                ? 2 /* Write */
                : 1 /* Read */;
        case ts.SyntaxKind.ParenthesizedExpression:
        case ts.SyntaxKind.NonNullExpression:
        case ts.SyntaxKind.TypeAssertionExpression:
        case ts.SyntaxKind.AsExpression:
            // (<number>foo! as {})++
            return getAccessKind(parent);
        case ts.SyntaxKind.ForOfStatement:
        case ts.SyntaxKind.ForInStatement:
            return parent.initializer === node
                ? 2 /* Write */
                : 1 /* Read */;
        case ts.SyntaxKind.ExpressionWithTypeArguments:
            return parent.parent.token === ts.SyntaxKind.ExtendsKeyword &&
                parent.parent.parent.kind !== ts.SyntaxKind.InterfaceDeclaration
                ? 1 /* Read */
                : 0 /* None */;
        case ts.SyntaxKind.ComputedPropertyName:
        case ts.SyntaxKind.ExpressionStatement:
        case ts.SyntaxKind.TypeOfExpression:
        case ts.SyntaxKind.ElementAccessExpression:
        case ts.SyntaxKind.ForStatement:
        case ts.SyntaxKind.IfStatement:
        case ts.SyntaxKind.DoStatement:
        case ts.SyntaxKind.WhileStatement:
        case ts.SyntaxKind.SwitchStatement:
        case ts.SyntaxKind.WithStatement:
        case ts.SyntaxKind.ThrowStatement:
        case ts.SyntaxKind.CallExpression:
        case ts.SyntaxKind.NewExpression:
        case ts.SyntaxKind.TaggedTemplateExpression:
        case ts.SyntaxKind.JsxExpression:
        case ts.SyntaxKind.Decorator:
        case ts.SyntaxKind.TemplateSpan:
        case ts.SyntaxKind.JsxOpeningElement:
        case ts.SyntaxKind.JsxSelfClosingElement:
        case ts.SyntaxKind.JsxSpreadAttribute:
        case ts.SyntaxKind.VoidExpression:
        case ts.SyntaxKind.ReturnStatement:
        case ts.SyntaxKind.AwaitExpression:
        case ts.SyntaxKind.YieldExpression:
        case ts.SyntaxKind.ConditionalExpression:
        case ts.SyntaxKind.CaseClause:
        case ts.SyntaxKind.JsxElement:
            return 1 /* Read */;
        case ts.SyntaxKind.ArrowFunction:
            return parent.body === node
                ? 1 /* Read */
                : 2 /* Write */;
        case ts.SyntaxKind.PropertyDeclaration:
        case ts.SyntaxKind.VariableDeclaration:
        case ts.SyntaxKind.Parameter:
        case ts.SyntaxKind.EnumMember:
        case ts.SyntaxKind.BindingElement:
        case ts.SyntaxKind.JsxAttribute:
            return parent.initializer === node
                ? 1 /* Read */
                : 0 /* None */;
        case ts.SyntaxKind.PropertyAccessExpression:
            return parent.expression === node
                ? 1 /* Read */
                : 0 /* None */;
        case ts.SyntaxKind.ExportAssignment:
            return parent.isExportEquals
                ? 1 /* Read */
                : 0 /* None */;
    }
    return 0 /* None */;
}
exports.getAccessKind = getAccessKind;
function isReassignmentTarget(node) {
    return (getAccessKind(node) & 2 /* Write */) !== 0;
}
exports.isReassignmentTarget = isReassignmentTarget;
function canHaveJsDoc(node) {
    const kind = node.kind;
    switch (kind) {
        case ts.SyntaxKind.Parameter:
        case ts.SyntaxKind.CallSignature:
        case ts.SyntaxKind.ConstructSignature:
        case ts.SyntaxKind.MethodSignature:
        case ts.SyntaxKind.PropertySignature:
        case ts.SyntaxKind.ArrowFunction:
        case ts.SyntaxKind.ParenthesizedExpression:
        case ts.SyntaxKind.SpreadAssignment:
        case ts.SyntaxKind.ShorthandPropertyAssignment:
        case ts.SyntaxKind.PropertyAssignment:
        case ts.SyntaxKind.FunctionExpression:
        case ts.SyntaxKind.LabeledStatement:
        case ts.SyntaxKind.ExpressionStatement:
        case ts.SyntaxKind.VariableStatement:
        case ts.SyntaxKind.FunctionDeclaration:
        case ts.SyntaxKind.Constructor:
        case ts.SyntaxKind.MethodDeclaration:
        case ts.SyntaxKind.PropertyDeclaration:
        case ts.SyntaxKind.GetAccessor:
        case ts.SyntaxKind.SetAccessor:
        case ts.SyntaxKind.ClassDeclaration:
        case ts.SyntaxKind.ClassExpression:
        case ts.SyntaxKind.InterfaceDeclaration:
        case ts.SyntaxKind.TypeAliasDeclaration:
        case ts.SyntaxKind.EnumMember:
        case ts.SyntaxKind.EnumDeclaration:
        case ts.SyntaxKind.ModuleDeclaration:
        case ts.SyntaxKind.ImportEqualsDeclaration:
        case ts.SyntaxKind.ImportDeclaration:
        case ts.SyntaxKind.NamespaceExportDeclaration:
        case ts.SyntaxKind.ExportAssignment:
        case ts.SyntaxKind.IndexSignature:
        case ts.SyntaxKind.FunctionType:
        case ts.SyntaxKind.ConstructorType:
        case ts.SyntaxKind.JSDocFunctionType:
        case ts.SyntaxKind.ExportDeclaration:
        case ts.SyntaxKind.NamedTupleMember:
        case ts.SyntaxKind.EndOfFileToken:
            return true;
        default:
            return false;
    }
}
exports.canHaveJsDoc = canHaveJsDoc;
/** Gets the JSDoc of a node. For performance reasons this function should only be called when `canHaveJsDoc` returns true. */
function getJsDoc(node, sourceFile) {
    const result = [];
    for (const child of node.getChildren(sourceFile)) {
        if (!node_1.isJsDoc(child))
            break;
        result.push(child);
    }
    return result;
}
exports.getJsDoc = getJsDoc;
/**
 * Parses the JsDoc of any node. This function is made for nodes that don't get their JsDoc parsed by the TypeScript parser.
 *
 * @param considerTrailingComments When set to `true` this function uses the trailing comments if the node starts on the same line
 *                                 as the previous node ends.
 */
function parseJsDocOfNode(node, considerTrailingComments, sourceFile = node.getSourceFile()) {
    if (canHaveJsDoc(node) && node.kind !== ts.SyntaxKind.EndOfFileToken) {
        const result = getJsDoc(node, sourceFile);
        if (result.length !== 0 || !considerTrailingComments)
            return result;
    }
    return parseJsDocWorker(node, node.getStart(sourceFile), sourceFile, considerTrailingComments);
}
exports.parseJsDocOfNode = parseJsDocOfNode;
function parseJsDocWorker(node, nodeStart, sourceFile, considerTrailingComments) {
    const start = ts[considerTrailingComments && isSameLine(sourceFile, node.pos, nodeStart)
        ? 'forEachTrailingCommentRange'
        : 'forEachLeadingCommentRange'](sourceFile.text, node.pos, 
    // return object to make `0` a truthy value
    (pos, _end, kind) => kind === ts.SyntaxKind.MultiLineCommentTrivia && sourceFile.text[pos + 2] === '*' ? { pos } : undefined);
    if (start === undefined)
        return [];
    const startPos = start.pos;
    const text = sourceFile.text.slice(startPos, nodeStart);
    const newSourceFile = ts.createSourceFile('jsdoc.ts', `${text}var a;`, sourceFile.languageVersion);
    const result = getJsDoc(newSourceFile.statements[0], newSourceFile);
    for (const doc of result)
        updateNode(doc, node);
    return result;
    function updateNode(n, parent) {
        n.pos += startPos;
        n.end += startPos;
        n.parent = parent;
        return ts.forEachChild(n, (child) => updateNode(child, n), (children) => {
            children.pos += startPos;
            children.end += startPos;
            for (const child of children)
                updateNode(child, n);
        });
    }
}
var ImportKind;
(function (ImportKind) {
    ImportKind[ImportKind["ImportDeclaration"] = 1] = "ImportDeclaration";
    ImportKind[ImportKind["ImportEquals"] = 2] = "ImportEquals";
    ImportKind[ImportKind["ExportFrom"] = 4] = "ExportFrom";
    ImportKind[ImportKind["DynamicImport"] = 8] = "DynamicImport";
    ImportKind[ImportKind["Require"] = 16] = "Require";
    ImportKind[ImportKind["ImportType"] = 32] = "ImportType";
    ImportKind[ImportKind["All"] = 63] = "All";
    ImportKind[ImportKind["AllImports"] = 59] = "AllImports";
    ImportKind[ImportKind["AllStaticImports"] = 3] = "AllStaticImports";
    ImportKind[ImportKind["AllImportExpressions"] = 24] = "AllImportExpressions";
    ImportKind[ImportKind["AllRequireLike"] = 18] = "AllRequireLike";
    // @internal
    ImportKind[ImportKind["AllNestedImports"] = 56] = "AllNestedImports";
    // @internal
    ImportKind[ImportKind["AllTopLevelImports"] = 7] = "AllTopLevelImports";
})(ImportKind = exports.ImportKind || (exports.ImportKind = {}));
function findImports(sourceFile, kinds, ignoreFileName = true) {
    const result = [];
    for (const node of findImportLikeNodes(sourceFile, kinds, ignoreFileName)) {
        switch (node.kind) {
            case ts.SyntaxKind.ImportDeclaration:
                addIfTextualLiteral(node.moduleSpecifier);
                break;
            case ts.SyntaxKind.ImportEqualsDeclaration:
                addIfTextualLiteral(node.moduleReference.expression);
                break;
            case ts.SyntaxKind.ExportDeclaration:
                addIfTextualLiteral(node.moduleSpecifier);
                break;
            case ts.SyntaxKind.CallExpression:
                addIfTextualLiteral(node.arguments[0]);
                break;
            case ts.SyntaxKind.ImportType:
                if (node_1.isLiteralTypeNode(node.argument))
                    addIfTextualLiteral(node.argument.literal);
                break;
            default:
                throw new Error('unexpected node');
        }
    }
    return result;
    function addIfTextualLiteral(node) {
        if (node_1.isTextualLiteral(node))
            result.push(node);
    }
}
exports.findImports = findImports;
function findImportLikeNodes(sourceFile, kinds, ignoreFileName = true) {
    return new ImportFinder(sourceFile, kinds, ignoreFileName).find();
}
exports.findImportLikeNodes = findImportLikeNodes;
class ImportFinder {
    constructor(_sourceFile, _options, _ignoreFileName) {
        this._sourceFile = _sourceFile;
        this._options = _options;
        this._ignoreFileName = _ignoreFileName;
        this._result = [];
    }
    find() {
        if (this._sourceFile.isDeclarationFile)
            this._options &= ~24 /* AllImportExpressions */;
        if (this._options & 7 /* AllTopLevelImports */)
            this._findImports(this._sourceFile.statements);
        if (this._options & 56 /* AllNestedImports */)
            this._findNestedImports();
        return this._result;
    }
    _findImports(statements) {
        for (const statement of statements) {
            if (node_1.isImportDeclaration(statement)) {
                if (this._options & 1 /* ImportDeclaration */)
                    this._result.push(statement);
            }
            else if (node_1.isImportEqualsDeclaration(statement)) {
                if (this._options & 2 /* ImportEquals */ &&
                    statement.moduleReference.kind === ts.SyntaxKind.ExternalModuleReference)
                    this._result.push(statement);
            }
            else if (node_1.isExportDeclaration(statement)) {
                if (statement.moduleSpecifier !== undefined && this._options & 4 /* ExportFrom */)
                    this._result.push(statement);
            }
            else if (node_1.isModuleDeclaration(statement)) {
                this._findImportsInModule(statement);
            }
        }
    }
    _findImportsInModule(declaration) {
        if (declaration.body === undefined)
            return;
        if (declaration.body.kind === ts.SyntaxKind.ModuleDeclaration)
            return this._findImportsInModule(declaration.body);
        this._findImports(declaration.body.statements);
    }
    _findNestedImports() {
        const isJavaScriptFile = this._ignoreFileName || (this._sourceFile.flags & ts.NodeFlags.JavaScriptFile) !== 0;
        let re;
        let includeJsDoc;
        if ((this._options & 56 /* AllNestedImports */) === 16 /* Require */) {
            if (!isJavaScriptFile)
                return; // don't look for 'require' in TS files
            re = /\brequire\s*[</(]/g;
            includeJsDoc = false;
        }
        else if (this._options & 16 /* Require */ && isJavaScriptFile) {
            re = /\b(?:import|require)\s*[</(]/g;
            includeJsDoc = (this._options & 32 /* ImportType */) !== 0;
        }
        else {
            re = /\bimport\s*[</(]/g;
            includeJsDoc = isJavaScriptFile && (this._options & 32 /* ImportType */) !== 0;
        }
        for (let match = re.exec(this._sourceFile.text); match !== null; match = re.exec(this._sourceFile.text)) {
            const token = getTokenAtPositionWorker(this._sourceFile, match.index, this._sourceFile, 
            // only look for ImportTypeNode within JSDoc in JS files
            match[0][0] === 'i' && includeJsDoc);
            if (token.kind === ts.SyntaxKind.ImportKeyword) {
                if (token.end - 'import'.length !== match.index)
                    continue;
                switch (token.parent.kind) {
                    case ts.SyntaxKind.ImportType:
                        this._result.push(token.parent);
                        break;
                    case ts.SyntaxKind.CallExpression:
                        if (token.parent.arguments.length > 1)
                            this._result.push(token.parent);
                }
            }
            else if (token.kind === ts.SyntaxKind.Identifier &&
                token.end - 'require'.length === match.index &&
                token.parent.kind === ts.SyntaxKind.CallExpression &&
                token.parent.expression === token &&
                token.parent.arguments.length === 1) {
                this._result.push(token.parent);
            }
        }
    }
}
/**
 * Ambient context means the statement itself has the `declare` keyword
 * or is inside a `declare namespace`,  `delcare module` or `declare global`.
 */
function isStatementInAmbientContext(node) {
    while (node.flags & ts.NodeFlags.NestedNamespace)
        node = node.parent;
    return hasModifier(node.modifiers, ts.SyntaxKind.DeclareKeyword) || isAmbientModuleBlock(node.parent);
}
exports.isStatementInAmbientContext = isStatementInAmbientContext;
/** Includes `declare namespace`, `declare module` and `declare global` and namespace nested in one of the aforementioned. */
function isAmbientModuleBlock(node) {
    while (node.kind === ts.SyntaxKind.ModuleBlock) {
        do
            node = node.parent;
        while (node.flags & ts.NodeFlags.NestedNamespace);
        if (hasModifier(node.modifiers, ts.SyntaxKind.DeclareKeyword))
            return true;
        node = node.parent;
    }
    return false;
}
exports.isAmbientModuleBlock = isAmbientModuleBlock;
function getIIFE(func) {
    let node = func.parent;
    while (node.kind === ts.SyntaxKind.ParenthesizedExpression)
        node = node.parent;
    return node_1.isCallExpression(node) && func.end <= node.expression.end ? node : undefined;
}
exports.getIIFE = getIIFE;
function isStrictCompilerOptionEnabled(options, option) {
    return (options.strict ? options[option] !== false : options[option] === true) &&
        (option !== 'strictPropertyInitialization' || isStrictCompilerOptionEnabled(options, 'strictNullChecks'));
}
exports.isStrictCompilerOptionEnabled = isStrictCompilerOptionEnabled;
// https://github.com/ajafff/tslint-consistent-codestyle/issues/85
/**
 * Checks if a given compiler option is enabled.
 * It handles dependencies of options, e.g. `declaration` is implicitly enabled by `composite` or `strictNullChecks` is enabled by `strict`.
 * However, it does not check dependencies that are already checked and reported as errors, e.g. `checkJs` without `allowJs`.
 * This function only handles boolean flags.
 */
function isCompilerOptionEnabled(options, option) {
    switch (option) {
        case 'stripInternal':
        case 'declarationMap':
        case 'emitDeclarationOnly':
            return options[option] === true && isCompilerOptionEnabled(options, 'declaration');
        case 'declaration':
            return options.declaration || isCompilerOptionEnabled(options, 'composite');
        case 'incremental':
            return options.incremental === undefined ? isCompilerOptionEnabled(options, 'composite') : options.incremental;
        case 'skipDefaultLibCheck':
            return options.skipDefaultLibCheck || isCompilerOptionEnabled(options, 'skipLibCheck');
        case 'suppressImplicitAnyIndexErrors':
            return options.suppressImplicitAnyIndexErrors === true && isCompilerOptionEnabled(options, 'noImplicitAny');
        case 'allowSyntheticDefaultImports':
            return options.allowSyntheticDefaultImports !== undefined
                ? options.allowSyntheticDefaultImports
                : isCompilerOptionEnabled(options, 'esModuleInterop') || options.module === ts.ModuleKind.System;
        case 'noUncheckedIndexedAccess':
            return options.noUncheckedIndexedAccess === true && isCompilerOptionEnabled(options, 'strictNullChecks');
        case 'allowJs':
            return options.allowJs === undefined ? isCompilerOptionEnabled(options, 'checkJs') : options.allowJs;
        case 'noImplicitAny':
        case 'noImplicitThis':
        case 'strictNullChecks':
        case 'strictFunctionTypes':
        case 'strictPropertyInitialization':
        case 'alwaysStrict':
        case 'strictBindCallApply':
            return isStrictCompilerOptionEnabled(options, option);
    }
    return options[option] === true;
}
exports.isCompilerOptionEnabled = isCompilerOptionEnabled;
/**
 * Has nothing to do with `isAmbientModuleBlock`.
 *
 * @returns `true` if it's a global augmentation or has a string name.
 */
function isAmbientModule(node) {
    return node.name.kind === ts.SyntaxKind.StringLiteral || (node.flags & ts.NodeFlags.GlobalAugmentation) !== 0;
}
exports.isAmbientModule = isAmbientModule;
/**
 * @deprecated use `getTsCheckDirective` instead since `// @ts-nocheck` is no longer restricted to JS files.
 * @returns the last `// @ts-check` or `// @ts-nocheck` directive in the given file.
 */
function getCheckJsDirective(source) {
    return getTsCheckDirective(source);
}
exports.getCheckJsDirective = getCheckJsDirective;
/** @returns the last `// @ts-check` or `// @ts-nocheck` directive in the given file. */
function getTsCheckDirective(source) {
    let directive;
    // needs to work around a shebang issue until https://github.com/Microsoft/TypeScript/issues/28477 is resolved
    ts.forEachLeadingCommentRange(source, (ts.getShebang(source) || '').length, (pos, end, kind) => {
        if (kind === ts.SyntaxKind.SingleLineCommentTrivia) {
            const text = source.slice(pos, end);
            const match = /^\/{2,3}\s*@ts-(no)?check(?:\s|$)/i.exec(text);
            if (match !== null)
                directive = { pos, end, enabled: match[1] === undefined };
        }
    });
    return directive;
}
exports.getTsCheckDirective = getTsCheckDirective;
function isConstAssertion(node) {
    return node_1.isTypeReferenceNode(node.type) &&
        node.type.typeName.kind === ts.SyntaxKind.Identifier &&
        node.type.typeName.escapedText === 'const';
}
exports.isConstAssertion = isConstAssertion;
/** Detects whether an expression is affected by an enclosing 'as const' assertion and therefore treated literally. */
function isInConstContext(node) {
    let current = node;
    while (true) {
        const parent = current.parent;
        outer: switch (parent.kind) {
            case ts.SyntaxKind.TypeAssertionExpression:
            case ts.SyntaxKind.AsExpression:
                return isConstAssertion(parent);
            case ts.SyntaxKind.PrefixUnaryExpression:
                if (current.kind !== ts.SyntaxKind.NumericLiteral)
                    return false;
                switch (parent.operator) {
                    case ts.SyntaxKind.PlusToken:
                    case ts.SyntaxKind.MinusToken:
                        current = parent;
                        break outer;
                    default:
                        return false;
                }
            case ts.SyntaxKind.PropertyAssignment:
                if (parent.initializer !== current)
                    return false;
                current = parent.parent;
                break;
            case ts.SyntaxKind.ShorthandPropertyAssignment:
                current = parent.parent;
                break;
            case ts.SyntaxKind.ParenthesizedExpression:
            case ts.SyntaxKind.ArrayLiteralExpression:
            case ts.SyntaxKind.ObjectLiteralExpression:
            case ts.SyntaxKind.TemplateExpression:
                current = parent;
                break;
            default:
                return false;
        }
    }
}
exports.isInConstContext = isInConstContext;
/** Returns true for `Object.defineProperty(o, 'prop', {value, writable: false})` and  `Object.defineProperty(o, 'prop', {get: () => 1})`*/
function isReadonlyAssignmentDeclaration(node, checker) {
    if (!isBindableObjectDefinePropertyCall(node))
        return false;
    const descriptorType = checker.getTypeAtLocation(node.arguments[2]);
    if (descriptorType.getProperty('value') === undefined)
        return descriptorType.getProperty('set') === undefined;
    const writableProp = descriptorType.getProperty('writable');
    if (writableProp === undefined)
        return false;
    const writableType = writableProp.valueDeclaration !== undefined && node_1.isPropertyAssignment(writableProp.valueDeclaration)
        ? checker.getTypeAtLocation(writableProp.valueDeclaration.initializer)
        : checker.getTypeOfSymbolAtLocation(writableProp, node.arguments[2]);
    return type_1.isBooleanLiteralType(writableType, false);
}
exports.isReadonlyAssignmentDeclaration = isReadonlyAssignmentDeclaration;
/** Determines whether a call to `Object.defineProperty` is statically analyzable. */
function isBindableObjectDefinePropertyCall(node) {
    return node.arguments.length === 3 &&
        node_1.isEntityNameExpression(node.arguments[0]) &&
        node_1.isNumericOrStringLikeLiteral(node.arguments[1]) &&
        node_1.isPropertyAccessExpression(node.expression) &&
        node.expression.name.escapedText === 'defineProperty' &&
        node_1.isIdentifier(node.expression.expression) &&
        node.expression.expression.escapedText === 'Object';
}
exports.isBindableObjectDefinePropertyCall = isBindableObjectDefinePropertyCall;
function isWellKnownSymbolLiterally(node) {
    return ts.isPropertyAccessExpression(node) &&
        ts.isIdentifier(node.expression) &&
        node.expression.escapedText === 'Symbol';
}
exports.isWellKnownSymbolLiterally = isWellKnownSymbolLiterally;
/** @deprecated typescript 4.3 removed the concept of literal well known symbols. Use `getPropertyNameFromType` instead. */
function getPropertyNameOfWellKnownSymbol(node) {
    return {
        displayName: `[Symbol.${node.name.text}]`,
        symbolName: ('__@' + node.name.text),
    };
}
exports.getPropertyNameOfWellKnownSymbol = getPropertyNameOfWellKnownSymbol;
const isTsBefore43 = (([major, minor]) => major < '4' || major === '4' && minor < '3')(ts.versionMajorMinor.split('.'));
function getLateBoundPropertyNames(node, checker) {
    const result = {
        known: true,
        names: [],
    };
    node = unwrapParentheses(node);
    if (isTsBefore43 && isWellKnownSymbolLiterally(node)) {
        result.names.push(getPropertyNameOfWellKnownSymbol(node)); // wotan-disable-line no-unstable-api-use
    }
    else {
        const type = checker.getTypeAtLocation(node);
        for (const key of type_1.unionTypeParts(checker.getBaseConstraintOfType(type) || type)) {
            const propertyName = type_1.getPropertyNameFromType(key);
            if (propertyName) {
                result.names.push(propertyName);
            }
            else {
                result.known = false;
            }
        }
    }
    return result;
}
exports.getLateBoundPropertyNames = getLateBoundPropertyNames;
function getLateBoundPropertyNamesOfPropertyName(node, checker) {
    const staticName = getPropertyName(node);
    return staticName !== undefined
        ? { known: true, names: [{ displayName: staticName, symbolName: ts.escapeLeadingUnderscores(staticName) }] }
        : node.kind === ts.SyntaxKind.PrivateIdentifier
            ? { known: true, names: [{ displayName: node.text, symbolName: checker.getSymbolAtLocation(node).escapedName }] }
            : getLateBoundPropertyNames(node.expression, checker);
}
exports.getLateBoundPropertyNamesOfPropertyName = getLateBoundPropertyNamesOfPropertyName;
/** Most declarations demand there to be only one statically known name, e.g. class members with computed name. */
function getSingleLateBoundPropertyNameOfPropertyName(node, checker) {
    const staticName = getPropertyName(node);
    if (staticName !== undefined)
        return { displayName: staticName, symbolName: ts.escapeLeadingUnderscores(staticName) };
    if (node.kind === ts.SyntaxKind.PrivateIdentifier)
        return { displayName: node.text, symbolName: checker.getSymbolAtLocation(node).escapedName };
    const { expression } = node;
    return isTsBefore43 && isWellKnownSymbolLiterally(expression)
        ? getPropertyNameOfWellKnownSymbol(expression) // wotan-disable-line no-unstable-api-use
        : type_1.getPropertyNameFromType(checker.getTypeAtLocation(expression));
}
exports.getSingleLateBoundPropertyNameOfPropertyName = getSingleLateBoundPropertyNameOfPropertyName;
function unwrapParentheses(node) {
    while (node.kind === ts.SyntaxKind.ParenthesizedExpression)
        node = node.expression;
    return node;
}
exports.unwrapParentheses = unwrapParentheses;
function formatPseudoBigInt(v) {
    return `${v.negative ? '-' : ''}${v.base10Value}n`;
}
exports.formatPseudoBigInt = formatPseudoBigInt;
/**
 * Determines whether the given `SwitchStatement`'s `case` clauses cover every possible value of the switched expression.
 * The logic is the same as TypeScript's control flow analysis.
 * This does **not** check whether all `case` clauses do a certain action like assign a variable or return a value.
 * This function ignores the `default` clause if present.
 */
function hasExhaustiveCaseClauses(node, checker) {
    const caseClauses = node.caseBlock.clauses.filter(node_1.isCaseClause);
    if (caseClauses.length === 0)
        return false;
    const typeParts = type_1.unionTypeParts(checker.getTypeAtLocation(node.expression));
    if (typeParts.length > caseClauses.length)
        return false;
    const types = new Set(typeParts.map(getPrimitiveLiteralFromType));
    if (types.has(undefined))
        return false;
    const seen = new Set();
    for (const clause of caseClauses) {
        const expressionType = checker.getTypeAtLocation(clause.expression);
        if (exports.isTypeFlagSet(expressionType, ts.TypeFlags.Never))
            continue; // additional case clause with 'never' is always allowed
        const type = getPrimitiveLiteralFromType(expressionType);
        if (types.has(type)) {
            seen.add(type);
        }
        else if (type !== 'null' && type !== 'undefined') { // additional case clauses with 'null' and 'undefined' are always allowed
            return false;
        }
    }
    return types.size === seen.size;
}
exports.hasExhaustiveCaseClauses = hasExhaustiveCaseClauses;
function getPrimitiveLiteralFromType(t) {
    if (exports.isTypeFlagSet(t, ts.TypeFlags.Null))
        return 'null';
    if (exports.isTypeFlagSet(t, ts.TypeFlags.Undefined))
        return 'undefined';
    if (exports.isTypeFlagSet(t, ts.TypeFlags.NumberLiteral))
        return `${exports.isTypeFlagSet(t, ts.TypeFlags.EnumLiteral) ? 'enum:' : ''}${t.value}`;
    if (exports.isTypeFlagSet(t, ts.TypeFlags.StringLiteral))
        return `${exports.isTypeFlagSet(t, ts.TypeFlags.EnumLiteral) ? 'enum:' : ''}string:${t.value}`;
    if (exports.isTypeFlagSet(t, ts.TypeFlags.BigIntLiteral))
        return formatPseudoBigInt(t.value);
    if (_3_2_1.isUniqueESSymbolType(t))
        return t.escapedName;
    if (type_1.isBooleanLiteralType(t, true))
        return 'true';
    if (type_1.isBooleanLiteralType(t, false))
        return 'false';
}
function getBaseOfClassLikeExpression(node) {
    var _a;
    if (((_a = node.heritageClauses) === null || _a === void 0 ? void 0 : _a[0].token) === ts.SyntaxKind.ExtendsKeyword)
        return node.heritageClauses[0].types[0];
}
exports.getBaseOfClassLikeExpression = getBaseOfClassLikeExpression;
//# sourceMappingURL=util.js.map