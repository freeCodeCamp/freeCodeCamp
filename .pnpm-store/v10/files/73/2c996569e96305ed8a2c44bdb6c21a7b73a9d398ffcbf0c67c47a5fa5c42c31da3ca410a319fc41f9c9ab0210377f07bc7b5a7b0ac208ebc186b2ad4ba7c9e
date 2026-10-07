"use strict";
// This rule was feature-frozen before we enabled no-property-in-node.
/* eslint-disable eslint-plugin/no-property-in-node */
Object.defineProperty(exports, "__esModule", { value: true });
const scope_manager_1 = require("@typescript-eslint/scope-manager");
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
const naming_convention_utils_1 = require("./naming-convention-utils");
// This essentially mirrors ESLint's `camelcase` rule
// note that that rule ignores leading and trailing underscores and only checks those in the middle of a variable name
const defaultCamelCaseAllTheThingsConfig = [
    {
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        selector: 'default',
        trailingUnderscore: 'allow',
    },
    {
        format: ['camelCase', 'PascalCase'],
        selector: 'import',
    },
    {
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        selector: 'variable',
        trailingUnderscore: 'allow',
    },
    {
        format: ['PascalCase'],
        selector: 'typeLike',
    },
];
exports.default = (0, util_1.createRule)({
    name: 'naming-convention',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce naming conventions for everything across a codebase',
            // technically only requires type checking if the user uses "type" modifiers
            frozen: true,
            requiresTypeChecking: true,
        },
        messages: {
            doesNotMatchFormat: '{{type}} name `{{name}}` must match one of the following formats: {{formats}}',
            doesNotMatchFormatTrimmed: '{{type}} name `{{name}}` trimmed as `{{processedName}}` must match one of the following formats: {{formats}}',
            missingAffix: '{{type}} name `{{name}}` must have one of the following {{position}}es: {{affixes}}',
            missingUnderscore: '{{type}} name `{{name}}` must have {{count}} {{position}} underscore(s).',
            satisfyCustom: '{{type}} name `{{name}}` must {{regexMatch}} the RegExp: {{regex}}',
            unexpectedUnderscore: '{{type}} name `{{name}}` must not have a {{position}} underscore.',
        },
        schema: naming_convention_utils_1.SCHEMA,
    },
    defaultOptions: defaultCamelCaseAllTheThingsConfig,
    create(contextWithoutDefaults) {
        const context = contextWithoutDefaults.options.length > 0
            ? contextWithoutDefaults
            : // only apply the defaults when the user provides no config
                Object.setPrototypeOf({
                    options: defaultCamelCaseAllTheThingsConfig,
                }, contextWithoutDefaults);
        const validators = (0, naming_convention_utils_1.parseOptions)(context);
        const compilerOptions = (0, util_1.getParserServices)(context, true).program?.getCompilerOptions() ?? {};
        function handleMember(validator, node, modifiers) {
            const key = node.key;
            if (requiresQuoting(key, compilerOptions.target)) {
                modifiers.add(naming_convention_utils_1.Modifiers.requiresQuotes);
            }
            validator(key, modifiers);
        }
        function getMemberModifiers(node) {
            const modifiers = new Set();
            if ('key' in node && node.key.type === utils_1.AST_NODE_TYPES.PrivateIdentifier) {
                modifiers.add(naming_convention_utils_1.Modifiers['#private']);
            }
            else if (node.accessibility) {
                modifiers.add(naming_convention_utils_1.Modifiers[node.accessibility]);
            }
            else {
                modifiers.add(naming_convention_utils_1.Modifiers.public);
            }
            if (node.static) {
                modifiers.add(naming_convention_utils_1.Modifiers.static);
            }
            if ('readonly' in node && node.readonly) {
                modifiers.add(naming_convention_utils_1.Modifiers.readonly);
            }
            if ('override' in node && node.override) {
                modifiers.add(naming_convention_utils_1.Modifiers.override);
            }
            if (node.type === utils_1.AST_NODE_TYPES.TSAbstractPropertyDefinition ||
                node.type === utils_1.AST_NODE_TYPES.TSAbstractMethodDefinition ||
                node.type === utils_1.AST_NODE_TYPES.TSAbstractAccessorProperty) {
                modifiers.add(naming_convention_utils_1.Modifiers.abstract);
            }
            return modifiers;
        }
        const { unusedVariables } = (0, util_1.collectVariables)(context);
        function isUnused(name, initialScope) {
            let variable = null;
            let scope = initialScope;
            while (scope) {
                variable = scope.set.get(name) ?? null;
                if (variable) {
                    break;
                }
                scope = scope.upper;
            }
            if (!variable) {
                return false;
            }
            return unusedVariables.has(variable);
        }
        function isDestructured(id) {
            return (
            // `const { x }`
            // does not match `const { x: y }`
            (id.parent.type === utils_1.AST_NODE_TYPES.Property && id.parent.shorthand) ||
                // `const { x = 2 }`
                // does not match const `{ x: y = 2 }`
                (id.parent.type === utils_1.AST_NODE_TYPES.AssignmentPattern &&
                    id.parent.parent.type === utils_1.AST_NODE_TYPES.Property &&
                    id.parent.parent.shorthand));
        }
        function isAsyncMemberOrProperty(propertyOrMemberNode) {
            return Boolean('value' in propertyOrMemberNode &&
                propertyOrMemberNode.value &&
                'async' in propertyOrMemberNode.value &&
                propertyOrMemberNode.value.async);
        }
        function isAsyncVariableIdentifier(id) {
            return Boolean(('async' in id.parent && id.parent.async) ||
                ('init' in id.parent &&
                    id.parent.init &&
                    'async' in id.parent.init &&
                    id.parent.init.async));
        }
        const selectors = {
            // #region import
            'FunctionDeclaration, TSDeclareFunction, FunctionExpression': {
                handler: (node, validator) => {
                    if (node.id == null) {
                        return;
                    }
                    const modifiers = new Set();
                    // functions create their own nested scope
                    const scope = context.sourceCode.getScope(node).upper;
                    if (isGlobal(scope)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.global);
                    }
                    if (isExported(node, node.id.name, scope)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.exported);
                    }
                    if (isUnused(node.id.name, scope)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.unused);
                    }
                    if (node.async) {
                        modifiers.add(naming_convention_utils_1.Modifiers.async);
                    }
                    validator(node.id, modifiers);
                },
                validator: validators.function,
            },
            // #endregion
            // #region variable
            'ImportDefaultSpecifier, ImportNamespaceSpecifier, ImportSpecifier': {
                handler: (node, validator) => {
                    const modifiers = new Set();
                    switch (node.type) {
                        case utils_1.AST_NODE_TYPES.ImportDefaultSpecifier:
                            modifiers.add(naming_convention_utils_1.Modifiers.default);
                            break;
                        case utils_1.AST_NODE_TYPES.ImportNamespaceSpecifier:
                            modifiers.add(naming_convention_utils_1.Modifiers.namespace);
                            break;
                        case utils_1.AST_NODE_TYPES.ImportSpecifier:
                            // Handle `import { default as Foo }`
                            if (node.imported.type === utils_1.AST_NODE_TYPES.Identifier &&
                                node.imported.name !== 'default') {
                                return;
                            }
                            modifiers.add(naming_convention_utils_1.Modifiers.default);
                            break;
                    }
                    validator(node.local, modifiers);
                },
                validator: validators.import,
            },
            // #endregion
            // #region function
            VariableDeclarator: {
                handler: (node, validator) => {
                    const identifiers = getIdentifiersFromPattern(node.id);
                    const baseModifiers = new Set();
                    const parent = node.parent;
                    if (parent.kind === 'const') {
                        baseModifiers.add(naming_convention_utils_1.Modifiers.const);
                    }
                    if (isGlobal(context.sourceCode.getScope(node))) {
                        baseModifiers.add(naming_convention_utils_1.Modifiers.global);
                    }
                    identifiers.forEach(id => {
                        const modifiers = new Set(baseModifiers);
                        if (isDestructured(id)) {
                            modifiers.add(naming_convention_utils_1.Modifiers.destructured);
                        }
                        const scope = context.sourceCode.getScope(id);
                        if (isExported(parent, id.name, scope)) {
                            modifiers.add(naming_convention_utils_1.Modifiers.exported);
                        }
                        if (isUnused(id.name, scope)) {
                            modifiers.add(naming_convention_utils_1.Modifiers.unused);
                        }
                        if (isAsyncVariableIdentifier(id)) {
                            modifiers.add(naming_convention_utils_1.Modifiers.async);
                        }
                        validator(id, modifiers);
                    });
                },
                validator: validators.variable,
            },
            // #endregion function
            // #region parameter
            ':matches(PropertyDefinition, TSAbstractPropertyDefinition)[computed = false][value.type != "ArrowFunctionExpression"][value.type != "FunctionExpression"][value.type != "TSEmptyBodyFunctionExpression"]': {
                handler: (node, validator) => {
                    const modifiers = getMemberModifiers(node);
                    handleMember(validator, node, modifiers);
                },
                validator: validators.classProperty,
            },
            // #endregion parameter
            // #region parameterProperty
            ':not(ObjectPattern) > Property[computed = false][kind = "init"][value.type != "ArrowFunctionExpression"][value.type != "FunctionExpression"][value.type != "TSEmptyBodyFunctionExpression"]': {
                handler: (node, validator) => {
                    const modifiers = new Set([naming_convention_utils_1.Modifiers.public]);
                    handleMember(validator, node, modifiers);
                },
                validator: validators.objectLiteralProperty,
            },
            // #endregion parameterProperty
            // #region property
            [[
                ':matches(PropertyDefinition, TSAbstractPropertyDefinition)[computed = false][value.type = "ArrowFunctionExpression"]',
                ':matches(PropertyDefinition, TSAbstractPropertyDefinition)[computed = false][value.type = "FunctionExpression"]',
                ':matches(PropertyDefinition, TSAbstractPropertyDefinition)[computed = false][value.type = "TSEmptyBodyFunctionExpression"]',
                ':matches(MethodDefinition, TSAbstractMethodDefinition)[computed = false][kind = "method"]',
            ].join(', ')]: {
                handler: (node, validator) => {
                    const modifiers = getMemberModifiers(node);
                    if (isAsyncMemberOrProperty(node)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.async);
                    }
                    handleMember(validator, node, modifiers);
                },
                validator: validators.classMethod,
            },
            [[
                'MethodDefinition[computed = false]:matches([kind = "get"], [kind = "set"])',
                'TSAbstractMethodDefinition[computed = false]:matches([kind="get"], [kind="set"])',
            ].join(', ')]: {
                handler: (node, validator) => {
                    const modifiers = getMemberModifiers(node);
                    handleMember(validator, node, modifiers);
                },
                validator: validators.classicAccessor,
            },
            [[
                'Property[computed = false][kind = "init"][value.type = "ArrowFunctionExpression"]',
                'Property[computed = false][kind = "init"][value.type = "FunctionExpression"]',
                'Property[computed = false][kind = "init"][value.type = "TSEmptyBodyFunctionExpression"]',
            ].join(', ')]: {
                handler: (node, validator) => {
                    const modifiers = new Set([naming_convention_utils_1.Modifiers.public]);
                    if (isAsyncMemberOrProperty(node)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.async);
                    }
                    handleMember(validator, node, modifiers);
                },
                validator: validators.objectLiteralMethod,
            },
            // #endregion property
            // #region method
            [[
                'TSMethodSignature[computed = false]',
                'TSPropertySignature[computed = false][typeAnnotation.typeAnnotation.type = "TSFunctionType"]',
            ].join(', ')]: {
                handler: (node, validator) => {
                    const modifiers = new Set([naming_convention_utils_1.Modifiers.public]);
                    handleMember(validator, node, modifiers);
                },
                validator: validators.typeMethod,
            },
            [[
                utils_1.AST_NODE_TYPES.AccessorProperty,
                utils_1.AST_NODE_TYPES.TSAbstractAccessorProperty,
            ].join(', ')]: {
                handler: (node, validator) => {
                    const modifiers = getMemberModifiers(node);
                    handleMember(validator, node, modifiers);
                },
                validator: validators.autoAccessor,
            },
            'FunctionDeclaration, TSDeclareFunction, TSEmptyBodyFunctionExpression, FunctionExpression, ArrowFunctionExpression': {
                handler: (node, validator) => {
                    node.params.forEach(param => {
                        if (param.type === utils_1.AST_NODE_TYPES.TSParameterProperty) {
                            return;
                        }
                        const identifiers = getIdentifiersFromPattern(param);
                        identifiers.forEach(i => {
                            const modifiers = new Set();
                            if (isDestructured(i)) {
                                modifiers.add(naming_convention_utils_1.Modifiers.destructured);
                            }
                            if (isUnused(i.name, context.sourceCode.getScope(i))) {
                                modifiers.add(naming_convention_utils_1.Modifiers.unused);
                            }
                            validator(i, modifiers);
                        });
                    });
                },
                validator: validators.parameter,
            },
            // #endregion method
            // #region accessor
            'Property[computed = false]:matches([kind = "get"], [kind = "set"])': {
                handler: (node, validator) => {
                    const modifiers = new Set([naming_convention_utils_1.Modifiers.public]);
                    handleMember(validator, node, modifiers);
                },
                validator: validators.classicAccessor,
            },
            TSParameterProperty: {
                handler: (node, validator) => {
                    const modifiers = getMemberModifiers(node);
                    const identifiers = getIdentifiersFromPattern(node.parameter);
                    identifiers.forEach(i => {
                        validator(i, modifiers);
                    });
                },
                validator: validators.parameterProperty,
            },
            // #endregion accessor
            // #region autoAccessor
            'TSPropertySignature[computed = false][typeAnnotation.typeAnnotation.type != "TSFunctionType"]': {
                handler: (node, validator) => {
                    const modifiers = new Set([naming_convention_utils_1.Modifiers.public]);
                    if (node.readonly) {
                        modifiers.add(naming_convention_utils_1.Modifiers.readonly);
                    }
                    handleMember(validator, node, modifiers);
                },
                validator: validators.typeProperty,
            },
            // #endregion autoAccessor
            // #region enumMember
            // computed is optional, so can't do [computed = false]
            'ClassDeclaration, ClassExpression': {
                handler: (node, validator) => {
                    const id = node.id;
                    if (id == null) {
                        return;
                    }
                    const modifiers = new Set();
                    // classes create their own nested scope
                    const scope = context.sourceCode.getScope(node).upper;
                    if (node.abstract) {
                        modifiers.add(naming_convention_utils_1.Modifiers.abstract);
                    }
                    if (isExported(node, id.name, scope)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.exported);
                    }
                    if (isUnused(id.name, scope)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.unused);
                    }
                    validator(id, modifiers);
                },
                validator: validators.class,
            },
            // #endregion enumMember
            // #region class
            TSEnumDeclaration: {
                handler: (node, validator) => {
                    const modifiers = new Set();
                    // enums create their own nested scope
                    const scope = context.sourceCode.getScope(node).upper;
                    if (isExported(node, node.id.name, scope)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.exported);
                    }
                    if (isUnused(node.id.name, scope)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.unused);
                    }
                    validator(node.id, modifiers);
                },
                validator: validators.enum,
            },
            // #endregion class
            // #region interface
            TSEnumMember: {
                handler: (node, validator) => {
                    const id = node.id;
                    const modifiers = new Set();
                    if (requiresQuoting(id, compilerOptions.target)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.requiresQuotes);
                    }
                    validator(id, modifiers);
                },
                validator: validators.enumMember,
            },
            // #endregion interface
            // #region typeAlias
            TSInterfaceDeclaration: {
                handler: (node, validator) => {
                    const modifiers = new Set();
                    const scope = context.sourceCode.getScope(node);
                    if (isExported(node, node.id.name, scope)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.exported);
                    }
                    if (isUnused(node.id.name, scope)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.unused);
                    }
                    validator(node.id, modifiers);
                },
                validator: validators.interface,
            },
            // #endregion typeAlias
            // #region enum
            TSTypeAliasDeclaration: {
                handler: (node, validator) => {
                    const modifiers = new Set();
                    const scope = context.sourceCode.getScope(node);
                    if (isExported(node, node.id.name, scope)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.exported);
                    }
                    if (isUnused(node.id.name, scope)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.unused);
                    }
                    validator(node.id, modifiers);
                },
                validator: validators.typeAlias,
            },
            // #endregion enum
            // #region typeParameter
            'TSTypeParameterDeclaration > TSTypeParameter': {
                handler: (node, validator) => {
                    const modifiers = new Set();
                    const scope = context.sourceCode.getScope(node);
                    if (isUnused(node.name.name, scope)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.unused);
                    }
                    validator(node.name, modifiers);
                },
                validator: validators.typeParameter,
            },
            // #endregion typeParameter
        };
        return Object.fromEntries(Object.entries(selectors).map(([selector, { handler, validator }]) => {
            return [
                selector,
                (node) => {
                    handler(node, validator);
                },
            ];
        }));
    },
});
function getIdentifiersFromPattern(pattern) {
    const identifiers = [];
    const visitor = new scope_manager_1.PatternVisitor({}, pattern, id => identifiers.push(id));
    visitor.visit(pattern);
    return identifiers;
}
function isExported(node, name, scope) {
    if (node?.parent?.type === utils_1.AST_NODE_TYPES.ExportDefaultDeclaration ||
        node?.parent?.type === utils_1.AST_NODE_TYPES.ExportNamedDeclaration) {
        return true;
    }
    if (scope == null) {
        return false;
    }
    const variable = scope.set.get(name);
    if (variable) {
        for (const ref of variable.references) {
            const refParent = ref.identifier.parent;
            if (refParent.type === utils_1.AST_NODE_TYPES.ExportDefaultDeclaration ||
                refParent.type === utils_1.AST_NODE_TYPES.ExportSpecifier) {
                return true;
            }
        }
    }
    return false;
}
function isGlobal(scope) {
    if (scope == null) {
        return false;
    }
    return (scope.type === utils_1.TSESLint.Scope.ScopeType.global ||
        scope.type === utils_1.TSESLint.Scope.ScopeType.module);
}
function requiresQuoting(node, target) {
    const name = node.type === utils_1.AST_NODE_TYPES.Identifier ||
        node.type === utils_1.AST_NODE_TYPES.PrivateIdentifier
        ? node.name
        : `${node.value}`;
    return (0, util_1.requiresQuoting)(name, target);
}
//# sourceMappingURL=naming-convention.js.map