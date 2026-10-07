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
const scope_manager_1 = require("@typescript-eslint/scope-manager");
const utils_1 = require("@typescript-eslint/utils");
const util = __importStar(require("../util"));
const allowedFunctionVariableDefTypes = new Set([
    utils_1.AST_NODE_TYPES.TSCallSignatureDeclaration,
    utils_1.AST_NODE_TYPES.TSFunctionType,
    utils_1.AST_NODE_TYPES.TSMethodSignature,
]);
exports.default = util.createRule({
    name: 'no-shadow',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow variable declarations from shadowing variables declared in the outer scope',
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
                    hoist: {
                        enum: ['all', 'functions', 'never'],
                    },
                    allow: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                    ignoreOnInitialization: {
                        type: 'boolean',
                    },
                    ignoreTypeValueShadow: {
                        type: 'boolean',
                    },
                    ignoreFunctionTypeParameterNameValueShadow: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
        messages: {
            noShadow: "'{{name}}' is already declared in the upper scope on line {{shadowedLine}} column {{shadowedColumn}}.",
            noShadowGlobal: "'{{name}}' is already a global variable.",
        },
    },
    defaultOptions: [
        {
            allow: [],
            builtinGlobals: false,
            hoist: 'functions',
            ignoreOnInitialization: false,
            ignoreTypeValueShadow: true,
            ignoreFunctionTypeParameterNameValueShadow: true,
        },
    ],
    create(context, [options]) {
        /**
         * Check if a scope is a TypeScript module augmenting the global namespace.
         */
        function isGlobalAugmentation(scope) {
            return ((scope.type === scope_manager_1.ScopeType.tsModule && !!scope.block.global) ||
                (!!scope.upper && isGlobalAugmentation(scope.upper)));
        }
        /**
         * Check if variable is a `this` parameter.
         */
        function isThisParam(variable) {
            return (variable.defs[0].type === scope_manager_1.DefinitionType.Parameter &&
                variable.name === 'this');
        }
        function isTypeImport(definition) {
            return ((definition === null || definition === void 0 ? void 0 : definition.type) === scope_manager_1.DefinitionType.ImportBinding &&
                (definition.parent.importKind === 'type' ||
                    (definition.node.type === utils_1.AST_NODE_TYPES.ImportSpecifier &&
                        definition.node.importKind === 'type')));
        }
        function isTypeValueShadow(variable, shadowed) {
            if (options.ignoreTypeValueShadow !== true) {
                return false;
            }
            if (!('isValueVariable' in variable)) {
                // this shouldn't happen...
                return false;
            }
            const [firstDefinition] = shadowed.defs;
            const isShadowedValue = !('isValueVariable' in shadowed) ||
                !firstDefinition ||
                (!isTypeImport(firstDefinition) && shadowed.isValueVariable);
            return variable.isValueVariable !== isShadowedValue;
        }
        function isFunctionTypeParameterNameValueShadow(variable, shadowed) {
            if (options.ignoreFunctionTypeParameterNameValueShadow !== true) {
                return false;
            }
            if (!('isValueVariable' in variable)) {
                // this shouldn't happen...
                return false;
            }
            const isShadowedValue = 'isValueVariable' in shadowed ? shadowed.isValueVariable : true;
            if (!isShadowedValue) {
                return false;
            }
            return variable.defs.every(def => allowedFunctionVariableDefTypes.has(def.node.type));
        }
        function isGenericOfStaticMethod(variable) {
            if (!('isTypeVariable' in variable)) {
                // this shouldn't happen...
                return false;
            }
            if (!variable.isTypeVariable) {
                return false;
            }
            if (variable.identifiers.length === 0) {
                return false;
            }
            const typeParameter = variable.identifiers[0].parent;
            if ((typeParameter === null || typeParameter === void 0 ? void 0 : typeParameter.type) !== utils_1.AST_NODE_TYPES.TSTypeParameter) {
                return false;
            }
            const typeParameterDecl = typeParameter.parent;
            if ((typeParameterDecl === null || typeParameterDecl === void 0 ? void 0 : typeParameterDecl.type) !== utils_1.AST_NODE_TYPES.TSTypeParameterDeclaration) {
                return false;
            }
            const functionExpr = typeParameterDecl.parent;
            if (!functionExpr ||
                (functionExpr.type !== utils_1.AST_NODE_TYPES.FunctionExpression &&
                    functionExpr.type !== utils_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression)) {
                return false;
            }
            const methodDefinition = functionExpr.parent;
            if ((methodDefinition === null || methodDefinition === void 0 ? void 0 : methodDefinition.type) !== utils_1.AST_NODE_TYPES.MethodDefinition) {
                return false;
            }
            return methodDefinition.static;
        }
        function isGenericOfClassDecl(variable) {
            if (!('isTypeVariable' in variable)) {
                // this shouldn't happen...
                return false;
            }
            if (!variable.isTypeVariable) {
                return false;
            }
            if (variable.identifiers.length === 0) {
                return false;
            }
            const typeParameter = variable.identifiers[0].parent;
            if ((typeParameter === null || typeParameter === void 0 ? void 0 : typeParameter.type) !== utils_1.AST_NODE_TYPES.TSTypeParameter) {
                return false;
            }
            const typeParameterDecl = typeParameter.parent;
            if ((typeParameterDecl === null || typeParameterDecl === void 0 ? void 0 : typeParameterDecl.type) !== utils_1.AST_NODE_TYPES.TSTypeParameterDeclaration) {
                return false;
            }
            const classDecl = typeParameterDecl.parent;
            return (classDecl === null || classDecl === void 0 ? void 0 : classDecl.type) === utils_1.AST_NODE_TYPES.ClassDeclaration;
        }
        function isGenericOfAStaticMethodShadow(variable, shadowed) {
            return (isGenericOfStaticMethod(variable) && isGenericOfClassDecl(shadowed));
        }
        function isImportDeclaration(definition) {
            return definition.type === utils_1.AST_NODE_TYPES.ImportDeclaration;
        }
        function isExternalModuleDeclarationWithName(scope, name) {
            return (scope.type === scope_manager_1.ScopeType.tsModule &&
                scope.block.type === utils_1.AST_NODE_TYPES.TSModuleDeclaration &&
                scope.block.id.type === utils_1.AST_NODE_TYPES.Literal &&
                scope.block.id.value === name);
        }
        function isExternalDeclarationMerging(scope, variable, shadowed) {
            var _a;
            const [firstDefinition] = shadowed.defs;
            const [secondDefinition] = variable.defs;
            return (isTypeImport(firstDefinition) &&
                isImportDeclaration(firstDefinition.parent) &&
                isExternalModuleDeclarationWithName(scope, firstDefinition.parent.source.value) &&
                secondDefinition.node.type === utils_1.AST_NODE_TYPES.TSInterfaceDeclaration &&
                ((_a = secondDefinition.node.parent) === null || _a === void 0 ? void 0 : _a.type) ===
                    utils_1.AST_NODE_TYPES.ExportNamedDeclaration);
        }
        /**
         * Check if variable name is allowed.
         * @param variable The variable to check.
         * @returns Whether or not the variable name is allowed.
         */
        function isAllowed(variable) {
            return options.allow.indexOf(variable.name) !== -1;
        }
        /**
         * Checks if a variable of the class name in the class scope of ClassDeclaration.
         *
         * ClassDeclaration creates two variables of its name into its outer scope and its class scope.
         * So we should ignore the variable in the class scope.
         * @param variable The variable to check.
         * @returns Whether or not the variable of the class name in the class scope of ClassDeclaration.
         */
        function isDuplicatedClassNameVariable(variable) {
            const block = variable.scope.block;
            return (block.type === utils_1.AST_NODE_TYPES.ClassDeclaration &&
                block.id === variable.identifiers[0]);
        }
        /**
         * Checks if a variable of the class name in the class scope of TSEnumDeclaration.
         *
         * TSEnumDeclaration creates two variables of its name into its outer scope and its class scope.
         * So we should ignore the variable in the class scope.
         * @param variable The variable to check.
         * @returns Whether or not the variable of the class name in the class scope of TSEnumDeclaration.
         */
        function isDuplicatedEnumNameVariable(variable) {
            const block = variable.scope.block;
            return (block.type === utils_1.AST_NODE_TYPES.TSEnumDeclaration &&
                block.id === variable.identifiers[0]);
        }
        /**
         * Checks whether or not a given location is inside of the range of a given node.
         * @param node An node to check.
         * @param location A location to check.
         * @returns `true` if the location is inside of the range of the node.
         */
        function isInRange(node, location) {
            return node && node.range[0] <= location && location <= node.range[1];
        }
        /**
         * Searches from the current node through its ancestry to find a matching node.
         * @param node a node to get.
         * @param match a callback that checks whether or not the node verifies its condition or not.
         * @returns the matching node.
         */
        function findSelfOrAncestor(node, match) {
            let currentNode = node;
            while (currentNode && !match(currentNode)) {
                currentNode = currentNode.parent;
            }
            return currentNode;
        }
        /**
         * Finds function's outer scope.
         * @param scope Function's own scope.
         * @returns Function's outer scope.
         */
        function getOuterScope(scope) {
            const upper = scope.upper;
            if ((upper === null || upper === void 0 ? void 0 : upper.type) === 'function-expression-name') {
                return upper.upper;
            }
            return upper;
        }
        /**
         * Checks if a variable and a shadowedVariable have the same init pattern ancestor.
         * @param variable a variable to check.
         * @param shadowedVariable a shadowedVariable to check.
         * @returns Whether or not the variable and the shadowedVariable have the same init pattern ancestor.
         */
        function isInitPatternNode(variable, shadowedVariable) {
            var _a, _b, _c, _d;
            const outerDef = shadowedVariable.defs[0];
            if (!outerDef) {
                return false;
            }
            const { variableScope } = variable.scope;
            if (!((variableScope.block.type ===
                utils_1.AST_NODE_TYPES.ArrowFunctionExpression ||
                variableScope.block.type === utils_1.AST_NODE_TYPES.FunctionExpression) &&
                getOuterScope(variableScope) === shadowedVariable.scope)) {
                return false;
            }
            const fun = variableScope.block;
            const { parent } = fun;
            const callExpression = findSelfOrAncestor(parent, node => node.type === utils_1.AST_NODE_TYPES.CallExpression);
            if (!callExpression) {
                return false;
            }
            let node = outerDef.name;
            const location = callExpression.range[1];
            while (node) {
                if (node.type === utils_1.AST_NODE_TYPES.VariableDeclarator) {
                    if (isInRange(node.init, location)) {
                        return true;
                    }
                    if ((((_b = (_a = node.parent) === null || _a === void 0 ? void 0 : _a.parent) === null || _b === void 0 ? void 0 : _b.type) === utils_1.AST_NODE_TYPES.ForInStatement ||
                        ((_d = (_c = node.parent) === null || _c === void 0 ? void 0 : _c.parent) === null || _d === void 0 ? void 0 : _d.type) === utils_1.AST_NODE_TYPES.ForOfStatement) &&
                        isInRange(node.parent.parent.right, location)) {
                        return true;
                    }
                    break;
                }
                else if (node.type === utils_1.AST_NODE_TYPES.AssignmentPattern) {
                    if (isInRange(node.right, location)) {
                        return true;
                    }
                }
                else if ([
                    utils_1.AST_NODE_TYPES.FunctionDeclaration,
                    utils_1.AST_NODE_TYPES.ClassDeclaration,
                    utils_1.AST_NODE_TYPES.FunctionExpression,
                    utils_1.AST_NODE_TYPES.ClassExpression,
                    utils_1.AST_NODE_TYPES.ArrowFunctionExpression,
                    utils_1.AST_NODE_TYPES.CatchClause,
                    utils_1.AST_NODE_TYPES.ImportDeclaration,
                    utils_1.AST_NODE_TYPES.ExportNamedDeclaration,
                ].includes(node.type)) {
                    break;
                }
                node = node.parent;
            }
            return false;
        }
        /**
         * Checks if a variable is inside the initializer of scopeVar.
         *
         * To avoid reporting at declarations such as `var a = function a() {};`.
         * But it should report `var a = function(a) {};` or `var a = function() { function a() {} };`.
         * @param variable The variable to check.
         * @param scopeVar The scope variable to look for.
         * @returns Whether or not the variable is inside initializer of scopeVar.
         */
        function isOnInitializer(variable, scopeVar) {
            var _a;
            const outerScope = scopeVar.scope;
            const outerDef = scopeVar.defs[0];
            const outer = (_a = outerDef === null || outerDef === void 0 ? void 0 : outerDef.parent) === null || _a === void 0 ? void 0 : _a.range;
            const innerScope = variable.scope;
            const innerDef = variable.defs[0];
            const inner = innerDef === null || innerDef === void 0 ? void 0 : innerDef.name.range;
            return !!(outer &&
                inner &&
                outer[0] < inner[0] &&
                inner[1] < outer[1] &&
                ((innerDef.type === scope_manager_1.DefinitionType.FunctionName &&
                    innerDef.node.type === utils_1.AST_NODE_TYPES.FunctionExpression) ||
                    innerDef.node.type === utils_1.AST_NODE_TYPES.ClassExpression) &&
                outerScope === innerScope.upper);
        }
        /**
         * Get a range of a variable's identifier node.
         * @param variable The variable to get.
         * @returns The range of the variable's identifier node.
         */
        function getNameRange(variable) {
            const def = variable.defs[0];
            return def === null || def === void 0 ? void 0 : def.name.range;
        }
        /**
         * Checks if a variable is in TDZ of scopeVar.
         * @param variable The variable to check.
         * @param scopeVar The variable of TDZ.
         * @returns Whether or not the variable is in TDZ of scopeVar.
         */
        function isInTdz(variable, scopeVar) {
            const outerDef = scopeVar.defs[0];
            const inner = getNameRange(variable);
            const outer = getNameRange(scopeVar);
            return !!(inner &&
                outer &&
                inner[1] < outer[0] &&
                // Excepts FunctionDeclaration if is {"hoist":"function"}.
                (options.hoist !== 'functions' ||
                    !outerDef ||
                    outerDef.node.type !== utils_1.AST_NODE_TYPES.FunctionDeclaration));
        }
        /**
         * Get declared line and column of a variable.
         * @param  variable The variable to get.
         * @returns The declared line and column of the variable.
         */
        function getDeclaredLocation(variable) {
            const identifier = variable.identifiers[0];
            if (identifier) {
                return {
                    global: false,
                    line: identifier.loc.start.line,
                    column: identifier.loc.start.column + 1,
                };
            }
            else {
                return {
                    global: true,
                };
            }
        }
        /**
         * Checks the current context for shadowed variables.
         * @param {Scope} scope Fixme
         */
        function checkForShadows(scope) {
            // ignore global augmentation
            if (isGlobalAugmentation(scope)) {
                return;
            }
            const variables = scope.variables;
            for (const variable of variables) {
                // ignore "arguments"
                if (variable.identifiers.length === 0) {
                    continue;
                }
                // this params are pseudo-params that cannot be shadowed
                if (isThisParam(variable)) {
                    continue;
                }
                // ignore variables of a class name in the class scope of ClassDeclaration
                if (isDuplicatedClassNameVariable(variable)) {
                    continue;
                }
                // ignore variables of a class name in the class scope of ClassDeclaration
                if (isDuplicatedEnumNameVariable(variable)) {
                    continue;
                }
                // ignore configured allowed names
                if (isAllowed(variable)) {
                    continue;
                }
                // Gets shadowed variable.
                const shadowed = scope.upper
                    ? utils_1.ASTUtils.findVariable(scope.upper, variable.name)
                    : null;
                if (!shadowed) {
                    continue;
                }
                // ignore type value variable shadowing if configured
                if (isTypeValueShadow(variable, shadowed)) {
                    continue;
                }
                // ignore function type parameter name shadowing if configured
                if (isFunctionTypeParameterNameValueShadow(variable, shadowed)) {
                    continue;
                }
                // ignore static class method generic shadowing class generic
                // this is impossible for the scope analyser to understand
                // so we have to handle this manually in this rule
                if (isGenericOfAStaticMethodShadow(variable, shadowed)) {
                    continue;
                }
                if (isExternalDeclarationMerging(scope, variable, shadowed)) {
                    continue;
                }
                const isESLintGlobal = 'writeable' in shadowed;
                if ((shadowed.identifiers.length > 0 ||
                    (options.builtinGlobals && isESLintGlobal)) &&
                    !isOnInitializer(variable, shadowed) &&
                    !(options.ignoreOnInitialization &&
                        isInitPatternNode(variable, shadowed)) &&
                    !(options.hoist !== 'all' && isInTdz(variable, shadowed))) {
                    const location = getDeclaredLocation(shadowed);
                    context.report(Object.assign({ node: variable.identifiers[0] }, (location.global
                        ? {
                            messageId: 'noShadowGlobal',
                            data: {
                                name: variable.name,
                            },
                        }
                        : {
                            messageId: 'noShadow',
                            data: {
                                name: variable.name,
                                shadowedLine: location.line,
                                shadowedColumn: location.column,
                            },
                        })));
                }
            }
        }
        return {
            'Program:exit'() {
                const globalScope = context.getScope();
                const stack = globalScope.childScopes.slice();
                while (stack.length) {
                    const scope = stack.pop();
                    stack.push(...scope.childScopes);
                    checkForShadows(scope);
                }
            },
        };
    },
});
//# sourceMappingURL=no-shadow.js.map