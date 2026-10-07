"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scope_manager_1 = require("@typescript-eslint/scope-manager");
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
const referenceContainsTypeQuery_1 = require("../util/referenceContainsTypeQuery");
const SENTINEL_TYPE = /^(?:(?:Function|Class)(?:Declaration|Expression)|ArrowFunctionExpression|CatchClause|ImportDeclaration|ExportNamedDeclaration)$/;
/**
 * Parses a given value as options.
 */
function parseOptions(options) {
    let functions = true;
    let classes = true;
    let enums = true;
    let variables = true;
    let typedefs = true;
    let ignoreTypeReferences = true;
    let allowNamedExports = false;
    if (typeof options === 'string') {
        functions = options !== 'nofunc';
    }
    else if (typeof options === 'object' && options != null) {
        functions = options.functions !== false;
        classes = options.classes !== false;
        enums = options.enums !== false;
        variables = options.variables !== false;
        typedefs = options.typedefs !== false;
        ignoreTypeReferences = options.ignoreTypeReferences !== false;
        allowNamedExports = options.allowNamedExports !== false;
    }
    return {
        allowNamedExports,
        classes,
        enums,
        functions,
        ignoreTypeReferences,
        typedefs,
        variables,
    };
}
/**
 * Checks whether or not a given variable is a function declaration.
 */
function isFunction(variable) {
    return variable.defs[0].type === scope_manager_1.DefinitionType.FunctionName;
}
/**
 * Checks whether or not a given variable is a type declaration.
 */
function isTypedef(variable) {
    return variable.defs[0].type === scope_manager_1.DefinitionType.Type;
}
/**
 * Checks whether or not a given variable is a enum declaration.
 */
function isOuterEnum(variable, reference) {
    return (variable.defs[0].type === scope_manager_1.DefinitionType.TSEnumName &&
        variable.scope.variableScope !== reference.from.variableScope);
}
/**
 * Checks whether or not a given variable is a class declaration in an upper function scope.
 */
function isOuterClass(variable, reference) {
    return (variable.defs[0].type === scope_manager_1.DefinitionType.ClassName &&
        variable.scope.variableScope !== reference.from.variableScope);
}
/**
 * Checks whether or not a given variable is a variable declaration in an upper function scope.
 */
function isOuterVariable(variable, reference) {
    return (variable.defs[0].type === scope_manager_1.DefinitionType.Variable &&
        variable.scope.variableScope !== reference.from.variableScope);
}
/**
 * Checks whether or not a given reference is a export reference.
 */
function isNamedExports(reference) {
    const { identifier } = reference;
    return (identifier.parent.type === utils_1.AST_NODE_TYPES.ExportSpecifier &&
        identifier.parent.local === identifier);
}
/**
 * Checks whether or not a given reference is a type reference.
 */
function isTypeReference(reference) {
    return (reference.isTypeReference ||
        (0, referenceContainsTypeQuery_1.referenceContainsTypeQuery)(reference.identifier));
}
/**
 * Checks whether or not a given location is inside of the range of a given node.
 */
function isInRange(node, location) {
    return !!node && node.range[0] <= location && location <= node.range[1];
}
/**
 * Decorators are transpiled such that the decorator is placed after the class declaration
 * So it is considered safe
 */
function isClassRefInClassDecorator(variable, reference) {
    if (variable.defs[0].type !== scope_manager_1.DefinitionType.ClassName ||
        variable.defs[0].node.decorators.length === 0) {
        return false;
    }
    for (const deco of variable.defs[0].node.decorators) {
        if (reference.identifier.range[0] >= deco.range[0] &&
            reference.identifier.range[1] <= deco.range[1]) {
            return true;
        }
    }
    return false;
}
/**
 * Checks whether or not a given reference is inside of the initializers of a given variable.
 *
 * @returns `true` in the following cases:
 * - var a = a
 * - var [a = a] = list
 * - var {a = a} = obj
 * - for (var a in a) {}
 * - for (var a of a) {}
 */
function isInInitializer(variable, reference) {
    if (variable.scope !== reference.from) {
        return false;
    }
    let node = variable.identifiers[0].parent;
    const location = reference.identifier.range[1];
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
        else if (SENTINEL_TYPE.test(node.type)) {
            break;
        }
        node = node.parent;
    }
    return false;
}
exports.default = (0, util_1.createRule)({
    name: 'no-use-before-define',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow the use of variables before they are defined',
            extendsBaseRule: true,
        },
        messages: {
            noUseBeforeDefine: "'{{name}}' was used before it was defined.",
        },
        schema: [
            {
                oneOf: [
                    {
                        type: 'string',
                        description: 'Broadly set functions and allowNamedExports to false.',
                        enum: ['nofunc'],
                    },
                    {
                        type: 'object',
                        additionalProperties: false,
                        properties: {
                            allowNamedExports: {
                                type: 'boolean',
                                description: 'Whether to ignore named exports.',
                            },
                            classes: {
                                type: 'boolean',
                                description: 'Whether to ignore references to class declarations.',
                            },
                            enums: {
                                type: 'boolean',
                                description: 'Whether to check references to enums.',
                            },
                            functions: {
                                type: 'boolean',
                                description: 'Whether to ignore references to function declarations.',
                            },
                            ignoreTypeReferences: {
                                type: 'boolean',
                                description: 'Whether to ignore type references, such as in type annotations and assertions.',
                            },
                            typedefs: {
                                type: 'boolean',
                                description: 'Whether to check references to types.',
                            },
                            variables: {
                                type: 'boolean',
                                description: 'Whether to ignore references to variables.',
                            },
                        },
                    },
                ],
            },
        ],
    },
    defaultOptions: [
        {
            allowNamedExports: false,
            classes: true,
            enums: true,
            functions: true,
            ignoreTypeReferences: true,
            typedefs: true,
            variables: true,
        },
    ],
    create(context, optionsWithDefault) {
        const options = parseOptions(optionsWithDefault[0]);
        /**
         * Determines whether a given use-before-define case should be reported according to the options.
         * @param variable The variable that gets used before being defined
         * @param reference The reference to the variable
         */
        function isForbidden(variable, reference) {
            if (options.ignoreTypeReferences && isTypeReference(reference)) {
                return false;
            }
            if (isFunction(variable)) {
                return options.functions;
            }
            if (isOuterClass(variable, reference)) {
                return options.classes;
            }
            if (isOuterVariable(variable, reference)) {
                return options.variables;
            }
            if (isOuterEnum(variable, reference)) {
                return options.enums;
            }
            if (isTypedef(variable)) {
                return options.typedefs;
            }
            return true;
        }
        function isDefinedBeforeUse(variable, reference) {
            return (variable.identifiers[0].range[1] <= reference.identifier.range[1] &&
                !(reference.isValueReference && isInInitializer(variable, reference)));
        }
        /**
         * Finds and validates all variables in a given scope.
         */
        function findVariablesInScope(scope) {
            scope.references.forEach(reference => {
                const variable = reference.resolved;
                function report() {
                    context.report({
                        node: reference.identifier,
                        messageId: 'noUseBeforeDefine',
                        data: {
                            name: reference.identifier.name,
                        },
                    });
                }
                // Skips when the reference is:
                // - initializations.
                // - referring to an undefined variable.
                // - referring to a global environment variable (there're no identifiers).
                // - located preceded by the variable (except in initializers).
                // - allowed by options.
                if (reference.init) {
                    return;
                }
                if (!options.allowNamedExports && isNamedExports(reference)) {
                    if (!variable || !isDefinedBeforeUse(variable, reference)) {
                        report();
                    }
                    return;
                }
                if (!variable) {
                    return;
                }
                if (variable.identifiers.length === 0 ||
                    isDefinedBeforeUse(variable, reference) ||
                    !isForbidden(variable, reference) ||
                    isClassRefInClassDecorator(variable, reference) ||
                    reference.from.type === utils_1.TSESLint.Scope.ScopeType.functionType) {
                    return;
                }
                // Reports.
                report();
            });
            scope.childScopes.forEach(findVariablesInScope);
        }
        return {
            Program(node) {
                findVariablesInScope(context.sourceCode.getScope(node));
            },
        };
    },
});
//# sourceMappingURL=no-use-before-define.js.map