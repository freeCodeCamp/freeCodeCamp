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
        functions,
        classes,
        enums,
        variables,
        typedefs,
        ignoreTypeReferences,
        allowNamedExports,
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
    var _a;
    const { identifier } = reference;
    return (((_a = identifier.parent) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.ExportSpecifier &&
        identifier.parent.local === identifier);
}
/**
 * Recursively checks whether or not a given reference has a type query declaration among it's parents
 */
function referenceContainsTypeQuery(node) {
    switch (node.type) {
        case utils_1.AST_NODE_TYPES.TSTypeQuery:
            return true;
        case utils_1.AST_NODE_TYPES.TSQualifiedName:
        case utils_1.AST_NODE_TYPES.Identifier:
            if (!node.parent) {
                return false;
            }
            return referenceContainsTypeQuery(node.parent);
        default:
            // if we find a different node, there's no chance that we're in a TSTypeQuery
            return false;
    }
}
/**
 * Checks whether or not a given reference is a type reference.
 */
function isTypeReference(reference) {
    return (reference.isTypeReference ||
        referenceContainsTypeQuery(reference.identifier));
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
    if (variable.defs[0].type !== scope_manager_1.DefinitionType.ClassName) {
        return false;
    }
    if (!variable.defs[0].node.decorators ||
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
    var _a;
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
            if (((_a = node.parent) === null || _a === void 0 ? void 0 : _a.parent) &&
                (node.parent.parent.type === utils_1.AST_NODE_TYPES.ForInStatement ||
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
exports.default = util.createRule({
    name: 'no-use-before-define',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow the use of variables before they are defined',
            recommended: false,
            extendsBaseRule: true,
        },
        messages: {
            noUseBeforeDefine: "'{{name}}' was used before it was defined.",
        },
        schema: [
            {
                oneOf: [
                    {
                        enum: ['nofunc'],
                    },
                    {
                        type: 'object',
                        properties: {
                            functions: { type: 'boolean' },
                            classes: { type: 'boolean' },
                            enums: { type: 'boolean' },
                            variables: { type: 'boolean' },
                            typedefs: { type: 'boolean' },
                            ignoreTypeReferences: { type: 'boolean' },
                            allowNamedExports: { type: 'boolean' },
                        },
                        additionalProperties: false,
                    },
                ],
            },
        ],
    },
    defaultOptions: [
        {
            functions: true,
            classes: true,
            enums: true,
            variables: true,
            typedefs: true,
            ignoreTypeReferences: true,
            allowNamedExports: false,
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
                !isInInitializer(variable, reference));
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
            Program() {
                findVariablesInScope(context.getScope());
            },
        };
    },
});
//# sourceMappingURL=no-use-before-define.js.map