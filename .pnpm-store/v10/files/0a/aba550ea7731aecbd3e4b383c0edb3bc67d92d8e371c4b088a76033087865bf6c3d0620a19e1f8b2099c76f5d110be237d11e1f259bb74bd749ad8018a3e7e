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
const util = __importStar(require("../util"));
exports.default = util.createRule({
    name: 'no-redeclare',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow variable redeclaration',
            recommended: false,
            extendsBaseRule: true,
        },
        schema: [
            {
                type: 'object',
                properties: {
                    builtinGlobals: {
                        type: 'boolean',
                    },
                    ignoreDeclarationMerge: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
        messages: {
            redeclared: "'{{id}}' is already defined.",
            redeclaredAsBuiltin: "'{{id}}' is already defined as a built-in global variable.",
            redeclaredBySyntax: "'{{id}}' is already defined by a variable declaration.",
        },
    },
    defaultOptions: [
        {
            builtinGlobals: true,
            ignoreDeclarationMerge: true,
        },
    ],
    create(context, [options]) {
        const sourceCode = context.getSourceCode();
        const CLASS_DECLARATION_MERGE_NODES = new Set([
            utils_1.AST_NODE_TYPES.TSInterfaceDeclaration,
            utils_1.AST_NODE_TYPES.TSModuleDeclaration,
            utils_1.AST_NODE_TYPES.ClassDeclaration,
        ]);
        const FUNCTION_DECLARATION_MERGE_NODES = new Set([
            utils_1.AST_NODE_TYPES.TSModuleDeclaration,
            utils_1.AST_NODE_TYPES.FunctionDeclaration,
        ]);
        const ENUM_DECLARATION_MERGE_NODES = new Set([
            utils_1.AST_NODE_TYPES.TSEnumDeclaration,
            utils_1.AST_NODE_TYPES.TSModuleDeclaration,
        ]);
        function* iterateDeclarations(variable) {
            if ((options === null || options === void 0 ? void 0 : options.builtinGlobals) &&
                'eslintImplicitGlobalSetting' in variable &&
                (variable.eslintImplicitGlobalSetting === 'readonly' ||
                    variable.eslintImplicitGlobalSetting === 'writable')) {
                yield { type: 'builtin' };
            }
            if ('eslintExplicitGlobalComments' in variable &&
                variable.eslintExplicitGlobalComments) {
                for (const comment of variable.eslintExplicitGlobalComments) {
                    yield {
                        type: 'comment',
                        node: comment,
                        loc: util.getNameLocationInGlobalDirectiveComment(sourceCode, comment, variable.name),
                    };
                }
            }
            const identifiers = variable.identifiers
                .map(id => ({
                identifier: id,
                parent: id.parent,
            }))
                // ignore function declarations because TS will treat them as an overload
                .filter(({ parent }) => parent.type !== utils_1.AST_NODE_TYPES.TSDeclareFunction);
            if (options.ignoreDeclarationMerge && identifiers.length > 1) {
                if (
                // interfaces merging
                identifiers.every(({ parent }) => parent.type === utils_1.AST_NODE_TYPES.TSInterfaceDeclaration)) {
                    return;
                }
                if (
                // namespace/module merging
                identifiers.every(({ parent }) => parent.type === utils_1.AST_NODE_TYPES.TSModuleDeclaration)) {
                    return;
                }
                if (
                // class + interface/namespace merging
                identifiers.every(({ parent }) => CLASS_DECLARATION_MERGE_NODES.has(parent.type))) {
                    const classDecls = identifiers.filter(({ parent }) => parent.type === utils_1.AST_NODE_TYPES.ClassDeclaration);
                    if (classDecls.length === 1) {
                        // safe declaration merging
                        return;
                    }
                    // there's more than one class declaration, which needs to be reported
                    for (const { identifier } of classDecls) {
                        yield { type: 'syntax', node: identifier, loc: identifier.loc };
                    }
                    return;
                }
                if (
                // class + interface/namespace merging
                identifiers.every(({ parent }) => FUNCTION_DECLARATION_MERGE_NODES.has(parent.type))) {
                    const functionDecls = identifiers.filter(({ parent }) => parent.type === utils_1.AST_NODE_TYPES.FunctionDeclaration);
                    if (functionDecls.length === 1) {
                        // safe declaration merging
                        return;
                    }
                    // there's more than one function declaration, which needs to be reported
                    for (const { identifier } of functionDecls) {
                        yield { type: 'syntax', node: identifier, loc: identifier.loc };
                    }
                    return;
                }
                if (
                // enum + namespace merging
                identifiers.every(({ parent }) => ENUM_DECLARATION_MERGE_NODES.has(parent.type))) {
                    const enumDecls = identifiers.filter(({ parent }) => parent.type === utils_1.AST_NODE_TYPES.TSEnumDeclaration);
                    if (enumDecls.length === 1) {
                        // safe declaration merging
                        return;
                    }
                    // there's more than one enum declaration, which needs to be reported
                    for (const { identifier } of enumDecls) {
                        yield { type: 'syntax', node: identifier, loc: identifier.loc };
                    }
                    return;
                }
            }
            for (const { identifier } of identifiers) {
                yield { type: 'syntax', node: identifier, loc: identifier.loc };
            }
        }
        function findVariablesInScope(scope) {
            for (const variable of scope.variables) {
                const [declaration, ...extraDeclarations] = iterateDeclarations(variable);
                if (extraDeclarations.length === 0) {
                    continue;
                }
                /*
                 * If the type of a declaration is different from the type of
                 * the first declaration, it shows the location of the first
                 * declaration.
                 */
                const detailMessageId = declaration.type === 'builtin'
                    ? 'redeclaredAsBuiltin'
                    : 'redeclaredBySyntax';
                const data = { id: variable.name };
                // Report extra declarations.
                for (const { type, node, loc } of extraDeclarations) {
                    const messageId = type === declaration.type ? 'redeclared' : detailMessageId;
                    if (node) {
                        context.report({ node, loc, messageId, data });
                    }
                    else if (loc) {
                        context.report({ loc, messageId, data });
                    }
                }
            }
        }
        /**
         * Find variables in the current scope.
         */
        function checkForBlock(node) {
            const scope = context.getScope();
            /*
             * In ES5, some node type such as `BlockStatement` doesn't have that scope.
             * `scope.block` is a different node in such a case.
             */
            if (scope.block === node) {
                findVariablesInScope(scope);
            }
        }
        return {
            Program() {
                const scope = context.getScope();
                findVariablesInScope(scope);
                // Node.js or ES modules has a special scope.
                if (scope.type === 'global' &&
                    scope.childScopes[0] &&
                    // The special scope's block is the Program node.
                    scope.block === scope.childScopes[0].block) {
                    findVariablesInScope(scope.childScopes[0]);
                }
            },
            FunctionDeclaration: checkForBlock,
            FunctionExpression: checkForBlock,
            ArrowFunctionExpression: checkForBlock,
            BlockStatement: checkForBlock,
            ForStatement: checkForBlock,
            ForInStatement: checkForBlock,
            ForOfStatement: checkForBlock,
            SwitchStatement: checkForBlock,
        };
    },
});
//# sourceMappingURL=no-redeclare.js.map