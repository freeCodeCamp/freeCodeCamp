"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callExpressionAffectsControlFlow = exports.SignatureEffect = exports.getControlFlowEnd = exports.endsControlFlow = void 0;
const ts = require("typescript");
const node_1 = require("../typeguard/node");
const util_1 = require("./util");
function endsControlFlow(statement, checker) {
    return getControlFlowEnd(statement, checker).end;
}
exports.endsControlFlow = endsControlFlow;
const defaultControlFlowEnd = { statements: [], end: false };
function getControlFlowEnd(statement, checker) {
    return node_1.isBlockLike(statement) ? handleBlock(statement, checker) : getControlFlowEndWorker(statement, checker);
}
exports.getControlFlowEnd = getControlFlowEnd;
function getControlFlowEndWorker(statement, checker) {
    switch (statement.kind) {
        case ts.SyntaxKind.ReturnStatement:
        case ts.SyntaxKind.ThrowStatement:
        case ts.SyntaxKind.ContinueStatement:
        case ts.SyntaxKind.BreakStatement:
            return { statements: [statement], end: true };
        case ts.SyntaxKind.Block:
            return handleBlock(statement, checker);
        case ts.SyntaxKind.ForStatement:
        case ts.SyntaxKind.WhileStatement:
            return handleForAndWhileStatement(statement, checker);
        case ts.SyntaxKind.ForOfStatement:
        case ts.SyntaxKind.ForInStatement:
            return handleForInOrOfStatement(statement, checker);
        case ts.SyntaxKind.DoStatement:
            return matchBreakOrContinue(getControlFlowEndWorker(statement.statement, checker), node_1.isBreakOrContinueStatement);
        case ts.SyntaxKind.IfStatement:
            return handleIfStatement(statement, checker);
        case ts.SyntaxKind.SwitchStatement:
            return matchBreakOrContinue(handleSwitchStatement(statement, checker), node_1.isBreakStatement);
        case ts.SyntaxKind.TryStatement:
            return handleTryStatement(statement, checker);
        case ts.SyntaxKind.LabeledStatement:
            return matchLabel(getControlFlowEndWorker(statement.statement, checker), statement.label);
        case ts.SyntaxKind.WithStatement:
            return getControlFlowEndWorker(statement.statement, checker);
        case ts.SyntaxKind.ExpressionStatement:
            if (checker === undefined)
                return defaultControlFlowEnd;
            return handleExpressionStatement(statement, checker);
        default:
            return defaultControlFlowEnd;
    }
}
function handleBlock(statement, checker) {
    const result = { statements: [], end: false };
    for (const s of statement.statements) {
        const current = getControlFlowEndWorker(s, checker);
        result.statements.push(...current.statements);
        if (current.end) {
            result.end = true;
            break;
        }
    }
    return result;
}
function handleForInOrOfStatement(statement, checker) {
    const end = matchBreakOrContinue(getControlFlowEndWorker(statement.statement, checker), node_1.isBreakOrContinueStatement);
    end.end = false; // loop body is guaranteed to be executed
    return end;
}
function handleForAndWhileStatement(statement, checker) {
    const constantCondition = statement.kind === ts.SyntaxKind.WhileStatement
        ? getConstantCondition(statement.expression)
        : statement.condition === undefined || getConstantCondition(statement.condition);
    if (constantCondition === false)
        return defaultControlFlowEnd; // loop body is never executed
    const end = matchBreakOrContinue(getControlFlowEndWorker(statement.statement, checker), node_1.isBreakOrContinueStatement);
    if (constantCondition === undefined)
        end.end = false; // can't be sure that loop body is executed at all
    return end;
}
/** Simply detects `true` and `false` in conditions. That matches TypeScript's behavior. */
function getConstantCondition(node) {
    switch (node.kind) {
        case ts.SyntaxKind.TrueKeyword:
            return true;
        case ts.SyntaxKind.FalseKeyword:
            return false;
        default:
            return;
    }
}
function handleIfStatement(node, checker) {
    switch (getConstantCondition(node.expression)) {
        case true:
            // else branch is never executed
            return getControlFlowEndWorker(node.thenStatement, checker);
        case false:
            // then branch is never executed
            return node.elseStatement === undefined
                ? defaultControlFlowEnd
                : getControlFlowEndWorker(node.elseStatement, checker);
    }
    const then = getControlFlowEndWorker(node.thenStatement, checker);
    if (node.elseStatement === undefined)
        return {
            statements: then.statements,
            end: false,
        };
    const elze = getControlFlowEndWorker(node.elseStatement, checker);
    return {
        statements: [...then.statements, ...elze.statements],
        end: then.end && elze.end,
    };
}
function handleSwitchStatement(node, checker) {
    let hasDefault = false;
    const result = {
        statements: [],
        end: false,
    };
    for (const clause of node.caseBlock.clauses) {
        if (clause.kind === ts.SyntaxKind.DefaultClause)
            hasDefault = true;
        const current = handleBlock(clause, checker);
        result.end = current.end;
        result.statements.push(...current.statements);
    }
    result.end && (result.end = hasDefault || checker !== undefined && util_1.hasExhaustiveCaseClauses(node, checker));
    return result;
}
function handleTryStatement(node, checker) {
    let finallyResult;
    if (node.finallyBlock !== undefined) {
        finallyResult = handleBlock(node.finallyBlock, checker);
        // if 'finally' always ends control flow, we are not interested in any jump statements from 'try' or 'catch'
        if (finallyResult.end)
            return finallyResult;
    }
    const tryResult = handleBlock(node.tryBlock, checker);
    if (node.catchClause === undefined)
        return { statements: finallyResult.statements.concat(tryResult.statements), end: tryResult.end };
    const catchResult = handleBlock(node.catchClause.block, checker);
    return {
        statements: tryResult.statements
            // remove all throw statements and throwing function calls from the list of control flow statements inside tryBlock
            .filter((s) => s.kind !== ts.SyntaxKind.ThrowStatement && s.kind !== ts.SyntaxKind.ExpressionStatement)
            .concat(catchResult.statements, finallyResult === undefined ? [] : finallyResult.statements),
        end: tryResult.end && catchResult.end, // only ends control flow if try AND catch definitely end control flow
    };
}
/** Dotted name as TypeScript requires it for assertion signatures to affect control flow. */
function isDottedNameWithExplicitTypeAnnotation(node, checker) {
    while (true) {
        switch (node.kind) {
            case ts.SyntaxKind.Identifier: {
                const symbol = checker.getExportSymbolOfSymbol(checker.getSymbolAtLocation(node));
                return isExplicitlyTypedSymbol(util_1.isSymbolFlagSet(symbol, ts.SymbolFlags.Alias) ? checker.getAliasedSymbol(symbol) : symbol, checker);
            }
            case ts.SyntaxKind.ThisKeyword:
                return isExplicitlyTypedThis(node);
            case ts.SyntaxKind.SuperKeyword:
                return true;
            case ts.SyntaxKind.PropertyAccessExpression:
                if (!isExplicitlyTypedSymbol(checker.getSymbolAtLocation(node), checker))
                    return false;
            // falls through
            case ts.SyntaxKind.ParenthesizedExpression:
                node = node.expression;
                continue;
            default:
                return false;
        }
    }
}
function isExplicitlyTypedSymbol(symbol, checker) {
    if (symbol === undefined)
        return false;
    if (util_1.isSymbolFlagSet(symbol, ts.SymbolFlags.Function | ts.SymbolFlags.Method | ts.SymbolFlags.Class | ts.SymbolFlags.ValueModule))
        return true;
    if (!util_1.isSymbolFlagSet(symbol, ts.SymbolFlags.Variable | ts.SymbolFlags.Property))
        return false;
    if (symbol.valueDeclaration === undefined)
        return false;
    if (declarationHasExplicitTypeAnnotation(symbol.valueDeclaration))
        return true;
    return node_1.isVariableDeclaration(symbol.valueDeclaration) &&
        symbol.valueDeclaration.parent.parent.kind === ts.SyntaxKind.ForOfStatement &&
        isDottedNameWithExplicitTypeAnnotation(symbol.valueDeclaration.parent.parent.expression, checker);
}
function declarationHasExplicitTypeAnnotation(node) {
    if (ts.isJSDocPropertyLikeTag(node))
        return node.typeExpression !== undefined;
    return (node_1.isVariableDeclaration(node) ||
        node_1.isParameterDeclaration(node) ||
        node_1.isPropertyDeclaration(node) ||
        node_1.isPropertySignature(node)) && (util_1.isNodeFlagSet(node, ts.NodeFlags.JavaScriptFile)
        ? ts.getJSDocType(node)
        : node.type) !== undefined;
}
function isExplicitlyTypedThis(node) {
    var _a;
    do {
        node = node.parent;
        if (node_1.isDecorator(node)) {
            // `this` in decorators always resolves outside of the containing class
            if (node.parent.kind === ts.SyntaxKind.Parameter && node_1.isClassLikeDeclaration(node.parent.parent.parent)) {
                node = node.parent.parent.parent.parent;
            }
            else if (node_1.isClassLikeDeclaration(node.parent.parent)) {
                node = node.parent.parent.parent;
            }
            else if (node_1.isClassLikeDeclaration(node.parent)) {
                node = node.parent.parent;
            }
        }
    } while (util_1.isFunctionScopeBoundary(node) !== 1 /* Function */ || node.kind === ts.SyntaxKind.ArrowFunction);
    return util_1.isFunctionWithBody(node) &&
        (util_1.isNodeFlagSet(node, ts.NodeFlags.JavaScriptFile)
            ? ((_a = ts.getJSDocThisTag(node)) === null || _a === void 0 ? void 0 : _a.typeExpression) !== undefined
            : node.parameters.length !== 0 && util_1.isThisParameter(node.parameters[0]) && node.parameters[0].type !== undefined) ||
        node_1.isClassLikeDeclaration(node.parent);
}
var SignatureEffect;
(function (SignatureEffect) {
    SignatureEffect[SignatureEffect["Never"] = 1] = "Never";
    SignatureEffect[SignatureEffect["Asserts"] = 2] = "Asserts";
})(SignatureEffect = exports.SignatureEffect || (exports.SignatureEffect = {}));
/**
 * Dermines whether a top level CallExpression has a control flow effect according to TypeScript's rules.
 * This handles functions returning `never` and `asserts`.
 */
function callExpressionAffectsControlFlow(node, checker) {
    var _a, _b, _c;
    if (!node_1.isExpressionStatement(node.parent) ||
        ts.isOptionalChain(node) ||
        !isDottedNameWithExplicitTypeAnnotation(node.expression, checker))
        return;
    const signature = checker.getResolvedSignature(node);
    if ((signature === null || signature === void 0 ? void 0 : signature.declaration) === undefined)
        return;
    const typeNode = ts.isJSDocSignature(signature.declaration)
        ? (_b = (_a = signature.declaration.type) === null || _a === void 0 ? void 0 : _a.typeExpression) === null || _b === void 0 ? void 0 : _b.type
        : (_c = signature.declaration.type) !== null && _c !== void 0 ? _c : (util_1.isNodeFlagSet(signature.declaration, ts.NodeFlags.JavaScriptFile)
            ? ts.getJSDocReturnType(signature.declaration)
            : undefined);
    if (typeNode === undefined)
        return;
    if (node_1.isTypePredicateNode(typeNode) && typeNode.assertsModifier !== undefined)
        return 2 /* Asserts */;
    return util_1.isTypeFlagSet(checker.getTypeFromTypeNode(typeNode), ts.TypeFlags.Never) ? 1 /* Never */ : undefined;
}
exports.callExpressionAffectsControlFlow = callExpressionAffectsControlFlow;
function handleExpressionStatement(node, checker) {
    if (!node_1.isCallExpression(node.expression))
        return defaultControlFlowEnd;
    switch (callExpressionAffectsControlFlow(node.expression, checker)) {
        case 2 /* Asserts */:
            return { statements: [node], end: false };
        case 1 /* Never */:
            return { statements: [node], end: true };
        case undefined:
            return defaultControlFlowEnd;
    }
}
function matchBreakOrContinue(current, pred) {
    const result = {
        statements: [],
        end: current.end,
    };
    for (const statement of current.statements) {
        if (pred(statement) && statement.label === undefined) {
            result.end = false;
            continue;
        }
        result.statements.push(statement);
    }
    return result;
}
function matchLabel(current, label) {
    const result = {
        statements: [],
        end: current.end,
    };
    const labelText = label.text;
    for (const statement of current.statements) {
        switch (statement.kind) {
            case ts.SyntaxKind.BreakStatement:
            case ts.SyntaxKind.ContinueStatement:
                if (statement.label !== undefined && statement.label.text === labelText) {
                    result.end = false;
                    continue;
                }
        }
        result.statements.push(statement);
    }
    return result;
}
//# sourceMappingURL=control-flow.js.map