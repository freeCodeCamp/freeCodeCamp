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
const naming_convention_utils_1 = require("./naming-convention-utils");
// This essentially mirrors ESLint's `camelcase` rule
// note that that rule ignores leading and trailing underscores and only checks those in the middle of a variable name
const defaultCamelCaseAllTheThingsConfig = [
    {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
    },
    {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
    },
    {
        selector: 'typeLike',
        format: ['PascalCase'],
    },
];
exports.default = util.createRule({
    name: 'naming-convention',
    meta: {
        docs: {
            description: 'Enforce naming conventions for everything across a codebase',
            recommended: false,
            // technically only requires type checking if the user uses "type" modifiers
            requiresTypeChecking: true,
        },
        type: 'suggestion',
        messages: {
            unexpectedUnderscore: '{{type}} name `{{name}}` must not have a {{position}} underscore.',
            missingUnderscore: '{{type}} name `{{name}}` must have {{count}} {{position}} underscore(s).',
            missingAffix: '{{type}} name `{{name}}` must have one of the following {{position}}es: {{affixes}}',
            satisfyCustom: '{{type}} name `{{name}}` must {{regexMatch}} the RegExp: {{regex}}',
            doesNotMatchFormat: '{{type}} name `{{name}}` must match one of the following formats: {{formats}}',
            doesNotMatchFormatTrimmed: '{{type}} name `{{name}}` trimmed as `{{processedName}}` must match one of the following formats: {{formats}}',
        },
        schema: naming_convention_utils_1.SCHEMA,
    },
    defaultOptions: defaultCamelCaseAllTheThingsConfig,
    create(contextWithoutDefaults) {
        const context = contextWithoutDefaults.options &&
            contextWithoutDefaults.options.length > 0
            ? contextWithoutDefaults
            : // only apply the defaults when the user provides no config
                Object.setPrototypeOf({
                    options: defaultCamelCaseAllTheThingsConfig,
                }, contextWithoutDefaults);
        const validators = (0, naming_convention_utils_1.parseOptions)(context);
        // getParserServices(context, false) -- dirty hack to work around the docs checker test...
        const compilerOptions = util
            .getParserServices(context, true)
            .program.getCompilerOptions();
        function handleMember(validator, node, modifiers) {
            if (!validator) {
                return;
            }
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
                node.type === utils_1.AST_NODE_TYPES.TSAbstractMethodDefinition) {
                modifiers.add(naming_convention_utils_1.Modifiers.abstract);
            }
            return modifiers;
        }
        const unusedVariables = util.collectUnusedVariables(context);
        function isUnused(name, initialScope = context.getScope()) {
            var _a;
            let variable = null;
            let scope = initialScope;
            while (scope) {
                variable = (_a = scope.set.get(name)) !== null && _a !== void 0 ? _a : null;
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
            var _a, _b, _c;
            return (
            // `const { x }`
            // does not match `const { x: y }`
            (((_a = id.parent) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.Property && id.parent.shorthand) ||
                // `const { x = 2 }`
                // does not match const `{ x: y = 2 }`
                (((_b = id.parent) === null || _b === void 0 ? void 0 : _b.type) === utils_1.AST_NODE_TYPES.AssignmentPattern &&
                    ((_c = id.parent.parent) === null || _c === void 0 ? void 0 : _c.type) === utils_1.AST_NODE_TYPES.Property &&
                    id.parent.parent.shorthand));
        }
        function isAsyncMemberOrProperty(propertyOrMemberNode) {
            return Boolean('value' in propertyOrMemberNode &&
                propertyOrMemberNode.value &&
                'async' in propertyOrMemberNode.value &&
                propertyOrMemberNode.value.async);
        }
        function isAsyncVariableIdentifier(id) {
            return Boolean(id.parent &&
                (('async' in id.parent && id.parent.async) ||
                    ('init' in id.parent &&
                        id.parent.init &&
                        'async' in id.parent.init &&
                        id.parent.init.async)));
        }
        const selectors = {
            // #region variable
            VariableDeclarator: {
                validator: validators.variable,
                handler: (node, validator) => {
                    const identifiers = getIdentifiersFromPattern(node.id);
                    const baseModifiers = new Set();
                    const parent = node.parent;
                    if ((parent === null || parent === void 0 ? void 0 : parent.type) === utils_1.AST_NODE_TYPES.VariableDeclaration) {
                        if (parent.kind === 'const') {
                            baseModifiers.add(naming_convention_utils_1.Modifiers.const);
                        }
                        if (isGlobal(context.getScope())) {
                            baseModifiers.add(naming_convention_utils_1.Modifiers.global);
                        }
                    }
                    identifiers.forEach(id => {
                        const modifiers = new Set(baseModifiers);
                        if (isDestructured(id)) {
                            modifiers.add(naming_convention_utils_1.Modifiers.destructured);
                        }
                        if (isExported(parent, id.name, context.getScope())) {
                            modifiers.add(naming_convention_utils_1.Modifiers.exported);
                        }
                        if (isUnused(id.name)) {
                            modifiers.add(naming_convention_utils_1.Modifiers.unused);
                        }
                        if (isAsyncVariableIdentifier(id)) {
                            modifiers.add(naming_convention_utils_1.Modifiers.async);
                        }
                        validator(id, modifiers);
                    });
                },
            },
            // #endregion
            // #region function
            'FunctionDeclaration, TSDeclareFunction, FunctionExpression': {
                validator: validators.function,
                handler: (node, validator) => {
                    if (node.id == null) {
                        return;
                    }
                    const modifiers = new Set();
                    // functions create their own nested scope
                    const scope = context.getScope().upper;
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
            },
            // #endregion function
            // #region parameter
            'FunctionDeclaration, TSDeclareFunction, TSEmptyBodyFunctionExpression, FunctionExpression, ArrowFunctionExpression': {
                validator: validators.parameter,
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
                            if (isUnused(i.name)) {
                                modifiers.add(naming_convention_utils_1.Modifiers.unused);
                            }
                            validator(i, modifiers);
                        });
                    });
                },
            },
            // #endregion parameter
            // #region parameterProperty
            TSParameterProperty: {
                validator: validators.parameterProperty,
                handler: (node, validator) => {
                    const modifiers = getMemberModifiers(node);
                    const identifiers = getIdentifiersFromPattern(node.parameter);
                    identifiers.forEach(i => {
                        validator(i, modifiers);
                    });
                },
            },
            // #endregion parameterProperty
            // #region property
            ':not(ObjectPattern) > Property[computed = false][kind = "init"][value.type != "ArrowFunctionExpression"][value.type != "FunctionExpression"][value.type != "TSEmptyBodyFunctionExpression"]': {
                validator: validators.objectLiteralProperty,
                handler: (node, validator) => {
                    const modifiers = new Set([naming_convention_utils_1.Modifiers.public]);
                    handleMember(validator, node, modifiers);
                },
            },
            ':matches(PropertyDefinition, TSAbstractPropertyDefinition)[computed = false][value.type != "ArrowFunctionExpression"][value.type != "FunctionExpression"][value.type != "TSEmptyBodyFunctionExpression"]': {
                validator: validators.classProperty,
                handler: (node, validator) => {
                    const modifiers = getMemberModifiers(node);
                    handleMember(validator, node, modifiers);
                },
            },
            'TSPropertySignature[computed = false][typeAnnotation.typeAnnotation.type != "TSFunctionType"]': {
                validator: validators.typeProperty,
                handler: (node, validator) => {
                    const modifiers = new Set([naming_convention_utils_1.Modifiers.public]);
                    if (node.readonly) {
                        modifiers.add(naming_convention_utils_1.Modifiers.readonly);
                    }
                    handleMember(validator, node, modifiers);
                },
            },
            // #endregion property
            // #region method
            [[
                'Property[computed = false][kind = "init"][value.type = "ArrowFunctionExpression"]',
                'Property[computed = false][kind = "init"][value.type = "FunctionExpression"]',
                'Property[computed = false][kind = "init"][value.type = "TSEmptyBodyFunctionExpression"]',
            ].join(', ')]: {
                validator: validators.objectLiteralMethod,
                handler: (node, validator) => {
                    const modifiers = new Set([naming_convention_utils_1.Modifiers.public]);
                    if (isAsyncMemberOrProperty(node)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.async);
                    }
                    handleMember(validator, node, modifiers);
                },
            },
            [[
                ':matches(PropertyDefinition, TSAbstractPropertyDefinition)[computed = false][value.type = "ArrowFunctionExpression"]',
                ':matches(PropertyDefinition, TSAbstractPropertyDefinition)[computed = false][value.type = "FunctionExpression"]',
                ':matches(PropertyDefinition, TSAbstractPropertyDefinition)[computed = false][value.type = "TSEmptyBodyFunctionExpression"]',
                ':matches(MethodDefinition, TSAbstractMethodDefinition)[computed = false][kind = "method"]',
            ].join(', ')]: {
                validator: validators.classMethod,
                handler: (node, validator) => {
                    const modifiers = getMemberModifiers(node);
                    if (isAsyncMemberOrProperty(node)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.async);
                    }
                    handleMember(validator, node, modifiers);
                },
            },
            [[
                'TSMethodSignature[computed = false]',
                'TSPropertySignature[computed = false][typeAnnotation.typeAnnotation.type = "TSFunctionType"]',
            ].join(', ')]: {
                validator: validators.typeMethod,
                handler: (node, validator) => {
                    const modifiers = new Set([naming_convention_utils_1.Modifiers.public]);
                    handleMember(validator, node, modifiers);
                },
            },
            // #endregion method
            // #region accessor
            'Property[computed = false]:matches([kind = "get"], [kind = "set"])': {
                validator: validators.accessor,
                handler: (node, validator) => {
                    const modifiers = new Set([naming_convention_utils_1.Modifiers.public]);
                    handleMember(validator, node, modifiers);
                },
            },
            'MethodDefinition[computed = false]:matches([kind = "get"], [kind = "set"])': {
                validator: validators.accessor,
                handler: (node, validator) => {
                    const modifiers = getMemberModifiers(node);
                    handleMember(validator, node, modifiers);
                },
            },
            // #endregion accessor
            // #region enumMember
            // computed is optional, so can't do [computed = false]
            'TSEnumMember[computed != true]': {
                validator: validators.enumMember,
                handler: (node, validator) => {
                    const id = node.id;
                    const modifiers = new Set();
                    if (requiresQuoting(id, compilerOptions.target)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.requiresQuotes);
                    }
                    validator(id, modifiers);
                },
            },
            // #endregion enumMember
            // #region class
            'ClassDeclaration, ClassExpression': {
                validator: validators.class,
                handler: (node, validator) => {
                    const id = node.id;
                    if (id == null) {
                        return;
                    }
                    const modifiers = new Set();
                    // classes create their own nested scope
                    const scope = context.getScope().upper;
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
            },
            // #endregion class
            // #region interface
            TSInterfaceDeclaration: {
                validator: validators.interface,
                handler: (node, validator) => {
                    const modifiers = new Set();
                    const scope = context.getScope();
                    if (isExported(node, node.id.name, scope)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.exported);
                    }
                    if (isUnused(node.id.name, scope)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.unused);
                    }
                    validator(node.id, modifiers);
                },
            },
            // #endregion interface
            // #region typeAlias
            TSTypeAliasDeclaration: {
                validator: validators.typeAlias,
                handler: (node, validator) => {
                    const modifiers = new Set();
                    const scope = context.getScope();
                    if (isExported(node, node.id.name, scope)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.exported);
                    }
                    if (isUnused(node.id.name, scope)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.unused);
                    }
                    validator(node.id, modifiers);
                },
            },
            // #endregion typeAlias
            // #region enum
            TSEnumDeclaration: {
                validator: validators.enum,
                handler: (node, validator) => {
                    const modifiers = new Set();
                    // enums create their own nested scope
                    const scope = context.getScope().upper;
                    if (isExported(node, node.id.name, scope)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.exported);
                    }
                    if (isUnused(node.id.name, scope)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.unused);
                    }
                    validator(node.id, modifiers);
                },
            },
            // #endregion enum
            // #region typeParameter
            'TSTypeParameterDeclaration > TSTypeParameter': {
                validator: validators.typeParameter,
                handler: (node, validator) => {
                    const modifiers = new Set();
                    const scope = context.getScope();
                    if (isUnused(node.name.name, scope)) {
                        modifiers.add(naming_convention_utils_1.Modifiers.unused);
                    }
                    validator(node.name, modifiers);
                },
            },
            // #endregion typeParameter
        };
        return Object.fromEntries(Object.entries(selectors)
            .map(([selector, { validator, handler }]) => {
            return [
                selector,
                (node) => {
                    handler(node, validator);
                },
            ];
        })
            .filter((s) => s != null));
    },
});
function getIdentifiersFromPattern(pattern) {
    const identifiers = [];
    const visitor = new scope_manager_1.PatternVisitor({}, pattern, id => identifiers.push(id));
    visitor.visit(pattern);
    return identifiers;
}
function isExported(node, name, scope) {
    var _a, _b;
    if (((_a = node === null || node === void 0 ? void 0 : node.parent) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.ExportDefaultDeclaration ||
        ((_b = node === null || node === void 0 ? void 0 : node.parent) === null || _b === void 0 ? void 0 : _b.type) === utils_1.AST_NODE_TYPES.ExportNamedDeclaration) {
        return true;
    }
    if (scope == null) {
        return false;
    }
    const variable = scope.set.get(name);
    if (variable) {
        for (const ref of variable.references) {
            const refParent = ref.identifier.parent;
            if ((refParent === null || refParent === void 0 ? void 0 : refParent.type) === utils_1.AST_NODE_TYPES.ExportDefaultDeclaration ||
                (refParent === null || refParent === void 0 ? void 0 : refParent.type) === utils_1.AST_NODE_TYPES.ExportSpecifier) {
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
    return util.requiresQuoting(name, target);
}
//# sourceMappingURL=naming-convention.js.map