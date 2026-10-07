"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scope_manager_1 = require("@typescript-eslint/scope-manager");
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
const isTypeImport_1 = require("../util/isTypeImport");
const allowedFunctionVariableDefTypes = new Set([
    utils_1.AST_NODE_TYPES.TSCallSignatureDeclaration,
    utils_1.AST_NODE_TYPES.TSFunctionType,
    utils_1.AST_NODE_TYPES.TSMethodSignature,
    utils_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression,
    utils_1.AST_NODE_TYPES.TSDeclareFunction,
    utils_1.AST_NODE_TYPES.TSConstructSignatureDeclaration,
    utils_1.AST_NODE_TYPES.TSConstructorType,
]);
const functionsHoistedNodes = new Set([utils_1.AST_NODE_TYPES.FunctionDeclaration]);
const typesHoistedNodes = new Set([
    utils_1.AST_NODE_TYPES.TSInterfaceDeclaration,
    utils_1.AST_NODE_TYPES.TSTypeAliasDeclaration,
]);
exports.default = (0, util_1.createRule)({
    name: 'no-shadow',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow variable declarations from shadowing variables declared in the outer scope',
            extendsBaseRule: true,
        },
        messages: {
            noEnumShadow: "Enum members are added to the enum scope, so references to '{{name}}' in enum member initializers resolve to this member instead of the declaration in the upper scope on line {{shadowedLine}} column {{shadowedColumn}}.",
            noShadow: "'{{name}}' is already declared in the upper scope on line {{shadowedLine}} column {{shadowedColumn}}.",
            noShadowGlobal: "'{{name}}' is already a global variable.",
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allow: {
                        type: 'array',
                        description: 'Identifier names for which shadowing is allowed.',
                        items: {
                            type: 'string',
                        },
                    },
                    builtinGlobals: {
                        type: 'boolean',
                        description: 'Whether to report shadowing of built-in global variables.',
                    },
                    hoist: {
                        type: 'string',
                        description: 'Whether to report shadowing before outer functions or variables are defined.',
                        enum: ['all', 'functions', 'functions-and-types', 'never', 'types'],
                    },
                    ignoreFunctionTypeParameterNameValueShadow: {
                        type: 'boolean',
                        description: 'Whether to ignore function parameters named the same as a variable.',
                    },
                    ignoreOnInitialization: {
                        type: 'boolean',
                        description: 'Whether to ignore the variable initializers when the shadowed variable is presumably still uninitialized.',
                    },
                    ignoreTypeValueShadow: {
                        type: 'boolean',
                        description: 'Whether to ignore types named the same as a variable.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allow: [],
            builtinGlobals: false,
            hoist: 'functions-and-types',
            ignoreFunctionTypeParameterNameValueShadow: true,
            ignoreOnInitialization: false,
            ignoreTypeValueShadow: true,
        },
    ],
    create(context, [options]) {
        /**
         * Check if a scope is a TypeScript module augmenting the global namespace.
         */
        function isGlobalAugmentation(scope) {
            return ((scope.type === scope_manager_1.ScopeType.tsModule && scope.block.kind === 'global') ||
                (!!scope.upper && isGlobalAugmentation(scope.upper)));
        }
        /**
         * Check if variable is a `this` parameter.
         */
        function isThisParam(variable) {
            return (variable.defs[0].type === scope_manager_1.DefinitionType.Parameter &&
                variable.name === 'this');
        }
        function isTypeValueShadow(variable, shadowed) {
            if (options.ignoreTypeValueShadow !== true) {
                return false;
            }
            if (!('isValueVariable' in variable)) {
                // this shouldn't happen...
                return false;
            }
            const firstDefinition = shadowed.defs.at(0);
            const isShadowedValue = !('isValueVariable' in shadowed) ||
                !firstDefinition ||
                (!(0, isTypeImport_1.isTypeImport)(firstDefinition) && shadowed.isValueVariable);
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
            if (typeParameter.type !== utils_1.AST_NODE_TYPES.TSTypeParameter) {
                return false;
            }
            const typeParameterDecl = typeParameter.parent;
            if (typeParameterDecl.type !== utils_1.AST_NODE_TYPES.TSTypeParameterDeclaration) {
                return false;
            }
            const functionExpr = typeParameterDecl.parent;
            if (functionExpr.type !== utils_1.AST_NODE_TYPES.FunctionExpression &&
                functionExpr.type !== utils_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression) {
                return false;
            }
            const methodDefinition = functionExpr.parent;
            if (methodDefinition.type !== utils_1.AST_NODE_TYPES.MethodDefinition) {
                return false;
            }
            return methodDefinition.static;
        }
        function isGenericOfClass(variable) {
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
            if (typeParameter.type !== utils_1.AST_NODE_TYPES.TSTypeParameter) {
                return false;
            }
            const typeParameterDecl = typeParameter.parent;
            if (typeParameterDecl.type !== utils_1.AST_NODE_TYPES.TSTypeParameterDeclaration) {
                return false;
            }
            const classDecl = typeParameterDecl.parent;
            return (classDecl.type === utils_1.AST_NODE_TYPES.ClassDeclaration ||
                classDecl.type === utils_1.AST_NODE_TYPES.ClassExpression);
        }
        function isGenericOfAStaticMethodShadow(variable, shadowed) {
            return isGenericOfStaticMethod(variable) && isGenericOfClass(shadowed);
        }
        function isImportDeclaration(definition) {
            return definition.type === utils_1.AST_NODE_TYPES.ImportDeclaration;
        }
        function isExternalModuleDeclarationWithName(scope, name) {
            return (scope.type === scope_manager_1.ScopeType.tsModule &&
                scope.block.id.type === utils_1.AST_NODE_TYPES.Literal &&
                scope.block.id.value === name);
        }
        function isExternalDeclarationMerging(scope, variable, shadowed) {
            const [firstDefinition] = shadowed.defs;
            const [secondDefinition] = variable.defs;
            return ((0, isTypeImport_1.isTypeImport)(firstDefinition) &&
                isImportDeclaration(firstDefinition.parent) &&
                isExternalModuleDeclarationWithName(scope, firstDefinition.parent.source.value) &&
                (secondDefinition.node.type === utils_1.AST_NODE_TYPES.TSInterfaceDeclaration ||
                    secondDefinition.node.type === utils_1.AST_NODE_TYPES.TSTypeAliasDeclaration));
        }
        /**
         * Check if variable name is allowed.
         * @param variable The variable to check.
         * @returns Whether or not the variable name is allowed.
         */
        function isAllowed(variable) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            return options.allow.includes(variable.name);
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
            if (upper?.type === scope_manager_1.ScopeType.functionExpressionName) {
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
            const outerDef = shadowedVariable.defs.at(0);
            if (!outerDef) {
                return false;
            }
            const { variableScope } = variable.scope;
            if (!((variableScope.block.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression ||
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
                    if ((node.parent.parent.type === utils_1.AST_NODE_TYPES.ForInStatement ||
                        node.parent.parent.type === utils_1.AST_NODE_TYPES.ForOfStatement) &&
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
                    utils_1.AST_NODE_TYPES.ArrowFunctionExpression,
                    utils_1.AST_NODE_TYPES.CatchClause,
                    utils_1.AST_NODE_TYPES.ClassDeclaration,
                    utils_1.AST_NODE_TYPES.ClassExpression,
                    utils_1.AST_NODE_TYPES.ExportNamedDeclaration,
                    utils_1.AST_NODE_TYPES.FunctionDeclaration,
                    utils_1.AST_NODE_TYPES.FunctionExpression,
                    utils_1.AST_NODE_TYPES.ImportDeclaration,
                ].includes(node.type)) {
                    break;
                }
                node = node.parent;
            }
            return false;
        }
        /**
         * Finds the uppermost expression node that can evaluate to the given one,
         * unwrapping through LogicalExpression and non-test ConditionalExpression branches.
         * @param node The node to unwrap.
         * @returns The topmost unwrapped node.
         */
        function unwrapExpression(node) {
            const { parent } = node;
            if (parent?.type === utils_1.AST_NODE_TYPES.LogicalExpression ||
                (parent?.type === utils_1.AST_NODE_TYPES.ConditionalExpression &&
                    parent.test !== node)) {
                return unwrapExpression(parent);
            }
            return node;
        }
        /**
         * Checks if a variable is the name of a function or class expression that is
         * directly assigned (or transparently through `||`/`?:`) as the initializer
         * of scopeVar.
         *
         * Allows `var a = function a() {}` but reports `var a = wrap(function a() {})`.
         * @param variable The variable to check.
         * @param scopeVar The scope variable to look for.
         * @returns Whether or not the variable is the direct initializer name of scopeVar.
         */
        function isOnInitializer(variable, scopeVar) {
            const outerDef = scopeVar.defs.at(0);
            const innerDef = variable.defs.at(0);
            if (!outerDef || !innerDef) {
                return false;
            }
            if (!((innerDef.type === scope_manager_1.DefinitionType.FunctionName &&
                innerDef.node.type === utils_1.AST_NODE_TYPES.FunctionExpression) ||
                (innerDef.type === scope_manager_1.DefinitionType.ClassName &&
                    innerDef.node.type === utils_1.AST_NODE_TYPES.ClassExpression))) {
                return false;
            }
            const outerIdentifier = outerDef.name;
            let initializerNode;
            if (outerIdentifier.parent.type === utils_1.AST_NODE_TYPES.VariableDeclarator) {
                initializerNode = outerIdentifier.parent.init;
            }
            else if (outerIdentifier.parent.type === utils_1.AST_NODE_TYPES.AssignmentPattern) {
                initializerNode = outerIdentifier.parent.right;
            }
            if (!initializerNode) {
                return false;
            }
            const nodeToCheck = innerDef.node;
            if (!(initializerNode.range[0] <= nodeToCheck.range[0] &&
                nodeToCheck.range[1] <= initializerNode.range[1])) {
                return false;
            }
            return initializerNode === unwrapExpression(nodeToCheck);
        }
        /**
         * Get a range of a variable's identifier node.
         * @param variable The variable to get.
         * @returns The range of the variable's identifier node.
         */
        function getNameRange(variable) {
            const def = variable.defs.at(0);
            return def?.name.range;
        }
        /**
         * Checks if a variable is in TDZ of scopeVar.
         * @param variable The variable to check.
         * @param scopeVar The variable of TDZ.
         * @returns Whether or not the variable is in TDZ of scopeVar.
         */
        function isInTdz(variable, scopeVar) {
            const outerDef = scopeVar.defs.at(0);
            const inner = getNameRange(variable);
            const outer = getNameRange(scopeVar);
            if (!inner || !outer || inner[1] >= outer[0]) {
                return false;
            }
            if (!outerDef) {
                return true;
            }
            if (options.hoist === 'functions') {
                return !functionsHoistedNodes.has(outerDef.node.type);
            }
            if (options.hoist === 'types') {
                return !typesHoistedNodes.has(outerDef.node.type);
            }
            if (options.hoist === 'functions-and-types') {
                return (!functionsHoistedNodes.has(outerDef.node.type) &&
                    !typesHoistedNodes.has(outerDef.node.type));
            }
            return true;
        }
        /**
         * Get declared line and column of a variable.
         * @param  variable The variable to get.
         * @returns The declared line and column of the variable.
         */
        function getDeclaredLocation(variable) {
            const identifier = variable.identifiers.at(0);
            if (identifier) {
                return {
                    column: identifier.loc.start.column + 1,
                    global: false,
                    line: identifier.loc.start.line,
                };
            }
            return {
                global: true,
            };
        }
        /**
         * Checks if the initialization of a variable has the declare modifier in a
         * definition file.
         */
        function isDeclareInDTSFile(variable) {
            const fileName = context.filename;
            if (!(0, util_1.isDefinitionFile)(fileName)) {
                return false;
            }
            return variable.defs.some(def => {
                return ((def.type === scope_manager_1.DefinitionType.Variable && def.parent.declare) ||
                    (def.type === scope_manager_1.DefinitionType.ClassName && def.node.declare) ||
                    (def.type === scope_manager_1.DefinitionType.TSEnumName && def.node.declare) ||
                    (def.type === scope_manager_1.DefinitionType.TSModuleName && def.node.declare));
            });
        }
        /**
         * Checks the current context for shadowed variables.
         * @param scope Fixme
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
                // ignore variables with the declare keyword in .d.ts files
                if (isDeclareInDTSFile(variable)) {
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
                    const isEnumDeclaration = shadowed.defs.some(def => def.type === scope_manager_1.DefinitionType.TSEnumName);
                    context.report({
                        node: variable.identifiers[0],
                        ...(location.global
                            ? {
                                messageId: 'noShadowGlobal',
                                data: {
                                    name: variable.name,
                                },
                            }
                            : {
                                messageId: isEnumDeclaration ? 'noEnumShadow' : 'noShadow',
                                data: {
                                    name: variable.name,
                                    shadowedColumn: location.column,
                                    shadowedLine: location.line,
                                },
                            }),
                    });
                }
            }
        }
        return {
            'Program:exit'(node) {
                const globalScope = context.sourceCode.getScope(node);
                const stack = [...globalScope.childScopes];
                while (stack.length) {
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    const scope = stack.pop();
                    stack.push(...scope.childScopes);
                    checkForShadows(scope);
                }
            },
        };
    },
});
//# sourceMappingURL=no-shadow.js.map