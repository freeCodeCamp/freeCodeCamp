"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scope_manager_1 = require("@typescript-eslint/scope-manager");
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'no-redeclare',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow variable redeclaration',
            extendsBaseRule: true,
        },
        messages: {
            redeclared: "'{{id}}' is already defined.",
            redeclaredAsBuiltin: "'{{id}}' is already defined as a built-in global variable.",
            redeclaredBySyntax: "'{{id}}' is already defined by a variable declaration.",
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    builtinGlobals: {
                        type: 'boolean',
                        description: 'Whether to report shadowing of built-in global variables.',
                    },
                    ignoreDeclarationMerge: {
                        type: 'boolean',
                        description: 'Whether to ignore declaration merges between certain TypeScript declaration types.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            builtinGlobals: true,
            ignoreDeclarationMerge: true,
        },
    ],
    create(context, [options]) {
        const CLASS_DECLARATION_MERGE_NODES = new Set([
            utils_1.AST_NODE_TYPES.ClassDeclaration,
            utils_1.AST_NODE_TYPES.TSInterfaceDeclaration,
            utils_1.AST_NODE_TYPES.TSModuleDeclaration,
        ]);
        const FUNCTION_DECLARATION_MERGE_NODES = new Set([
            utils_1.AST_NODE_TYPES.FunctionDeclaration,
            utils_1.AST_NODE_TYPES.TSModuleDeclaration,
        ]);
        const ENUM_DECLARATION_MERGE_NODES = new Set([
            utils_1.AST_NODE_TYPES.TSEnumDeclaration,
            utils_1.AST_NODE_TYPES.TSModuleDeclaration,
        ]);
        function* iterateDeclarations(variable) {
            if (options.builtinGlobals &&
                'eslintImplicitGlobalSetting' in variable &&
                (variable.eslintImplicitGlobalSetting === 'readonly' ||
                    variable.eslintImplicitGlobalSetting === 'writable')) {
                yield { type: 'builtin' };
            }
            if ('eslintExplicitGlobalComments' in variable &&
                variable.eslintExplicitGlobalComments) {
                for (const comment of variable.eslintExplicitGlobalComments) {
                    yield {
                        loc: (0, util_1.getNameLocationInGlobalDirectiveComment)(context.sourceCode, comment, variable.name),
                        node: comment,
                        type: 'comment',
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
                        yield { loc: identifier.loc, node: identifier, type: 'syntax' };
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
                        yield { loc: identifier.loc, node: identifier, type: 'syntax' };
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
                        yield { loc: identifier.loc, node: identifier, type: 'syntax' };
                    }
                    return;
                }
            }
            for (const { identifier } of identifiers) {
                yield { loc: identifier.loc, node: identifier, type: 'syntax' };
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
                for (const { loc, node, type } of extraDeclarations) {
                    const messageId = type === declaration.type ? 'redeclared' : detailMessageId;
                    if (node) {
                        context.report({ loc, node, messageId, data });
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
            const scope = context.sourceCode.getScope(node);
            /*
             * In ES5, some node type such as `BlockStatement` doesn't have that scope.
             * `scope.block` is a different node in such a case.
             */
            if (scope.block === node) {
                findVariablesInScope(scope);
            }
        }
        return {
            ArrowFunctionExpression: checkForBlock,
            BlockStatement: checkForBlock,
            ForInStatement: checkForBlock,
            ForOfStatement: checkForBlock,
            ForStatement: checkForBlock,
            FunctionDeclaration: checkForBlock,
            FunctionExpression: checkForBlock,
            Program(node) {
                const scope = context.sourceCode.getScope(node);
                findVariablesInScope(scope);
                // Node.js or ES modules has a special scope.
                if (scope.type === scope_manager_1.ScopeType.global &&
                    // The special scope's block is the Program node.
                    scope.block === scope.childScopes[0]?.block) {
                    findVariablesInScope(scope.childScopes[0]);
                }
            },
            SwitchStatement: checkForBlock,
        };
    },
});
//# sourceMappingURL=no-redeclare.js.map