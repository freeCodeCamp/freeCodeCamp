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
const utils_1 = require("@typescript-eslint/utils");
const tsutils = __importStar(require("tsutils"));
const ts = __importStar(require("typescript"));
const util = __importStar(require("../util"));
exports.default = util.createRule({
    name: 'no-unnecessary-qualifier',
    meta: {
        docs: {
            description: 'Disallow unnecessary namespace qualifiers',
            recommended: false,
            requiresTypeChecking: true,
        },
        fixable: 'code',
        messages: {
            unnecessaryQualifier: "Qualifier is unnecessary since '{{ name }}' is in scope.",
        },
        schema: [],
        type: 'suggestion',
    },
    defaultOptions: [],
    create(context) {
        const namespacesInScope = [];
        let currentFailedNamespaceExpression = null;
        const parserServices = util.getParserServices(context);
        const esTreeNodeToTSNodeMap = parserServices.esTreeNodeToTSNodeMap;
        const program = parserServices.program;
        const checker = program.getTypeChecker();
        const sourceCode = context.getSourceCode();
        function tryGetAliasedSymbol(symbol, checker) {
            return tsutils.isSymbolFlagSet(symbol, ts.SymbolFlags.Alias)
                ? checker.getAliasedSymbol(symbol)
                : null;
        }
        function symbolIsNamespaceInScope(symbol) {
            var _a;
            const symbolDeclarations = (_a = symbol.getDeclarations()) !== null && _a !== void 0 ? _a : [];
            if (symbolDeclarations.some(decl => namespacesInScope.some(ns => ns === decl))) {
                return true;
            }
            const alias = tryGetAliasedSymbol(symbol, checker);
            return alias != null && symbolIsNamespaceInScope(alias);
        }
        function getSymbolInScope(node, flags, name) {
            // TODO:PERF `getSymbolsInScope` gets a long list. Is there a better way?
            const scope = checker.getSymbolsInScope(node, flags);
            return scope.find(scopeSymbol => scopeSymbol.name === name);
        }
        function symbolsAreEqual(accessed, inScope) {
            return accessed === checker.getExportSymbolOfSymbol(inScope);
        }
        function qualifierIsUnnecessary(qualifier, name) {
            const tsQualifier = esTreeNodeToTSNodeMap.get(qualifier);
            const tsName = esTreeNodeToTSNodeMap.get(name);
            const namespaceSymbol = checker.getSymbolAtLocation(tsQualifier);
            if (namespaceSymbol === undefined ||
                !symbolIsNamespaceInScope(namespaceSymbol)) {
                return false;
            }
            const accessedSymbol = checker.getSymbolAtLocation(tsName);
            if (accessedSymbol === undefined) {
                return false;
            }
            // If the symbol in scope is different, the qualifier is necessary.
            const fromScope = getSymbolInScope(tsQualifier, accessedSymbol.flags, sourceCode.getText(name));
            return (fromScope === undefined || symbolsAreEqual(accessedSymbol, fromScope));
        }
        function visitNamespaceAccess(node, qualifier, name) {
            // Only look for nested qualifier errors if we didn't already fail on the outer qualifier.
            if (!currentFailedNamespaceExpression &&
                qualifierIsUnnecessary(qualifier, name)) {
                currentFailedNamespaceExpression = node;
                context.report({
                    node: qualifier,
                    messageId: 'unnecessaryQualifier',
                    data: {
                        name: sourceCode.getText(name),
                    },
                    fix(fixer) {
                        return fixer.removeRange([qualifier.range[0], name.range[0]]);
                    },
                });
            }
        }
        function enterDeclaration(node) {
            namespacesInScope.push(esTreeNodeToTSNodeMap.get(node));
        }
        function exitDeclaration() {
            namespacesInScope.pop();
        }
        function resetCurrentNamespaceExpression(node) {
            if (node === currentFailedNamespaceExpression) {
                currentFailedNamespaceExpression = null;
            }
        }
        function isPropertyAccessExpression(node) {
            return node.type === utils_1.AST_NODE_TYPES.MemberExpression && !node.computed;
        }
        function isEntityNameExpression(node) {
            return (node.type === utils_1.AST_NODE_TYPES.Identifier ||
                (isPropertyAccessExpression(node) &&
                    isEntityNameExpression(node.object)));
        }
        return {
            TSModuleDeclaration: enterDeclaration,
            TSEnumDeclaration: enterDeclaration,
            'ExportNamedDeclaration[declaration.type="TSModuleDeclaration"]': enterDeclaration,
            'ExportNamedDeclaration[declaration.type="TSEnumDeclaration"]': enterDeclaration,
            'TSModuleDeclaration:exit': exitDeclaration,
            'TSEnumDeclaration:exit': exitDeclaration,
            'ExportNamedDeclaration[declaration.type="TSModuleDeclaration"]:exit': exitDeclaration,
            'ExportNamedDeclaration[declaration.type="TSEnumDeclaration"]:exit': exitDeclaration,
            TSQualifiedName(node) {
                visitNamespaceAccess(node, node.left, node.right);
            },
            'MemberExpression[computed=false]': function (node) {
                const property = node.property;
                if (isEntityNameExpression(node.object)) {
                    visitNamespaceAccess(node, node.object, property);
                }
            },
            'TSQualifiedName:exit': resetCurrentNamespaceExpression,
            'MemberExpression:exit': resetCurrentNamespaceExpression,
        };
    },
});
//# sourceMappingURL=no-unnecessary-qualifier.js.map