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
exports.default = util.createRule({
    name: 'no-unused-vars',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow unused variables',
            recommended: 'warn',
            extendsBaseRule: true,
        },
        schema: [
            {
                oneOf: [
                    {
                        enum: ['all', 'local'],
                    },
                    {
                        type: 'object',
                        properties: {
                            vars: {
                                enum: ['all', 'local'],
                            },
                            varsIgnorePattern: {
                                type: 'string',
                            },
                            args: {
                                enum: ['all', 'after-used', 'none'],
                            },
                            ignoreRestSiblings: {
                                type: 'boolean',
                            },
                            argsIgnorePattern: {
                                type: 'string',
                            },
                            caughtErrors: {
                                enum: ['all', 'none'],
                            },
                            caughtErrorsIgnorePattern: {
                                type: 'string',
                            },
                            destructuredArrayIgnorePattern: {
                                type: 'string',
                            },
                        },
                        additionalProperties: false,
                    },
                ],
            },
        ],
        messages: {
            unusedVar: "'{{varName}}' is {{action}} but never used{{additional}}.",
        },
    },
    defaultOptions: [{}],
    create(context, [firstOption]) {
        const filename = context.getFilename();
        const sourceCode = context.getSourceCode();
        const MODULE_DECL_CACHE = new Map();
        const options = (() => {
            var _a, _b, _c, _d;
            const options = {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: false,
                caughtErrors: 'none',
            };
            if (firstOption) {
                if (typeof firstOption === 'string') {
                    options.vars = firstOption;
                }
                else {
                    options.vars = (_a = firstOption.vars) !== null && _a !== void 0 ? _a : options.vars;
                    options.args = (_b = firstOption.args) !== null && _b !== void 0 ? _b : options.args;
                    options.ignoreRestSiblings =
                        (_c = firstOption.ignoreRestSiblings) !== null && _c !== void 0 ? _c : options.ignoreRestSiblings;
                    options.caughtErrors =
                        (_d = firstOption.caughtErrors) !== null && _d !== void 0 ? _d : options.caughtErrors;
                    if (firstOption.varsIgnorePattern) {
                        options.varsIgnorePattern = new RegExp(firstOption.varsIgnorePattern, 'u');
                    }
                    if (firstOption.argsIgnorePattern) {
                        options.argsIgnorePattern = new RegExp(firstOption.argsIgnorePattern, 'u');
                    }
                    if (firstOption.caughtErrorsIgnorePattern) {
                        options.caughtErrorsIgnorePattern = new RegExp(firstOption.caughtErrorsIgnorePattern, 'u');
                    }
                    if (firstOption.destructuredArrayIgnorePattern) {
                        options.destructuredArrayIgnorePattern = new RegExp(firstOption.destructuredArrayIgnorePattern, 'u');
                    }
                }
            }
            return options;
        })();
        function collectUnusedVariables() {
            var _a, _b, _c, _d, _e;
            /**
             * Checks whether a node is a sibling of the rest property or not.
             * @param {ASTNode} node a node to check
             * @returns {boolean} True if the node is a sibling of the rest property, otherwise false.
             */
            function hasRestSibling(node) {
                var _a;
                return (node.type === utils_1.AST_NODE_TYPES.Property &&
                    ((_a = node.parent) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.ObjectPattern &&
                    node.parent.properties[node.parent.properties.length - 1].type ===
                        utils_1.AST_NODE_TYPES.RestElement);
            }
            /**
             * Determines if a variable has a sibling rest property
             * @param variable eslint-scope variable object.
             * @returns True if the variable is exported, false if not.
             */
            function hasRestSpreadSibling(variable) {
                if (options.ignoreRestSiblings) {
                    const hasRestSiblingDefinition = variable.defs.some(def => hasRestSibling(def.name.parent));
                    const hasRestSiblingReference = variable.references.some(ref => hasRestSibling(ref.identifier.parent));
                    return hasRestSiblingDefinition || hasRestSiblingReference;
                }
                return false;
            }
            /**
             * Checks whether the given variable is after the last used parameter.
             * @param variable The variable to check.
             * @returns `true` if the variable is defined after the last used parameter.
             */
            function isAfterLastUsedArg(variable) {
                const def = variable.defs[0];
                const params = context.getDeclaredVariables(def.node);
                const posteriorParams = params.slice(params.indexOf(variable) + 1);
                // If any used parameters occur after this parameter, do not report.
                return !posteriorParams.some(v => v.references.length > 0 || v.eslintUsed);
            }
            const unusedVariablesOriginal = util.collectUnusedVariables(context);
            const unusedVariablesReturn = [];
            for (const variable of unusedVariablesOriginal) {
                // explicit global variables don't have definitions.
                if (variable.defs.length === 0) {
                    unusedVariablesReturn.push(variable);
                    continue;
                }
                const def = variable.defs[0];
                if (variable.scope.type === utils_1.TSESLint.Scope.ScopeType.global &&
                    options.vars === 'local') {
                    // skip variables in the global scope if configured to
                    continue;
                }
                const refUsedInArrayPatterns = variable.references.some(ref => { var _a; return ((_a = ref.identifier.parent) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.ArrayPattern; });
                // skip elements of array destructuring patterns
                if ((((_a = def.name.parent) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.ArrayPattern ||
                    refUsedInArrayPatterns) &&
                    'name' in def.name &&
                    ((_b = options.destructuredArrayIgnorePattern) === null || _b === void 0 ? void 0 : _b.test(def.name.name))) {
                    continue;
                }
                // skip catch variables
                if (def.type === utils_1.TSESLint.Scope.DefinitionType.CatchClause) {
                    if (options.caughtErrors === 'none') {
                        continue;
                    }
                    // skip ignored parameters
                    if ('name' in def.name &&
                        ((_c = options.caughtErrorsIgnorePattern) === null || _c === void 0 ? void 0 : _c.test(def.name.name))) {
                        continue;
                    }
                }
                if (def.type === utils_1.TSESLint.Scope.DefinitionType.Parameter) {
                    // if "args" option is "none", skip any parameter
                    if (options.args === 'none') {
                        continue;
                    }
                    // skip ignored parameters
                    if ('name' in def.name &&
                        ((_d = options.argsIgnorePattern) === null || _d === void 0 ? void 0 : _d.test(def.name.name))) {
                        continue;
                    }
                    // if "args" option is "after-used", skip used variables
                    if (options.args === 'after-used' &&
                        util.isFunction(def.name.parent) &&
                        !isAfterLastUsedArg(variable)) {
                        continue;
                    }
                }
                else {
                    // skip ignored variables
                    if ('name' in def.name &&
                        ((_e = options.varsIgnorePattern) === null || _e === void 0 ? void 0 : _e.test(def.name.name))) {
                        continue;
                    }
                }
                if (hasRestSpreadSibling(variable)) {
                    continue;
                }
                // in case another rule has run and used the collectUnusedVariables,
                // we want to ensure our selectors that marked variables as used are respected
                if (variable.eslintUsed) {
                    continue;
                }
                unusedVariablesReturn.push(variable);
            }
            return unusedVariablesReturn;
        }
        return {
            // declaration file handling
            [ambientDeclarationSelector(utils_1.AST_NODE_TYPES.Program, true)](node) {
                if (!util.isDefinitionFile(filename)) {
                    return;
                }
                markDeclarationChildAsUsed(node);
            },
            // module declaration in module declaration should not report unused vars error
            // this is workaround as this change should be done in better way
            'TSModuleDeclaration > TSModuleDeclaration'(node) {
                if (node.id.type === utils_1.AST_NODE_TYPES.Identifier) {
                    let scope = context.getScope();
                    if (scope.upper) {
                        scope = scope.upper;
                    }
                    const superVar = scope.set.get(node.id.name);
                    if (superVar) {
                        superVar.eslintUsed = true;
                    }
                }
            },
            // children of a namespace that is a child of a declared namespace are auto-exported
            [ambientDeclarationSelector('TSModuleDeclaration[declare = true] > TSModuleBlock TSModuleDeclaration > TSModuleBlock', false)](node) {
                markDeclarationChildAsUsed(node);
            },
            // declared namespace handling
            [ambientDeclarationSelector('TSModuleDeclaration[declare = true] > TSModuleBlock', false)](node) {
                var _a;
                const moduleDecl = util.nullThrows((_a = node.parent) === null || _a === void 0 ? void 0 : _a.parent, util.NullThrowsReasons.MissingParent);
                // declared ambient modules with an `export =` statement will only export that one thing
                // all other statements are not automatically exported in this case
                if (moduleDecl.id.type === utils_1.AST_NODE_TYPES.Literal &&
                    checkModuleDeclForExportEquals(moduleDecl)) {
                    return;
                }
                markDeclarationChildAsUsed(node);
            },
            // collect
            'Program:exit'(programNode) {
                /**
                 * Generates the message data about the variable being defined and unused,
                 * including the ignore pattern if configured.
                 * @param unusedVar eslint-scope variable object.
                 * @returns The message data to be used with this unused variable.
                 */
                function getDefinedMessageData(unusedVar) {
                    var _a;
                    const defType = (_a = unusedVar === null || unusedVar === void 0 ? void 0 : unusedVar.defs[0]) === null || _a === void 0 ? void 0 : _a.type;
                    let type;
                    let pattern;
                    if (defType === utils_1.TSESLint.Scope.DefinitionType.CatchClause &&
                        options.caughtErrorsIgnorePattern) {
                        type = 'args';
                        pattern = options.caughtErrorsIgnorePattern.toString();
                    }
                    else if (defType === utils_1.TSESLint.Scope.DefinitionType.Parameter &&
                        options.argsIgnorePattern) {
                        type = 'args';
                        pattern = options.argsIgnorePattern.toString();
                    }
                    else if (defType !== utils_1.TSESLint.Scope.DefinitionType.Parameter &&
                        options.varsIgnorePattern) {
                        type = 'vars';
                        pattern = options.varsIgnorePattern.toString();
                    }
                    const additional = type
                        ? `. Allowed unused ${type} must match ${pattern}`
                        : '';
                    return {
                        varName: unusedVar.name,
                        action: 'defined',
                        additional,
                    };
                }
                /**
                 * Generate the warning message about the variable being
                 * assigned and unused, including the ignore pattern if configured.
                 * @param unusedVar eslint-scope variable object.
                 * @returns The message data to be used with this unused variable.
                 */
                function getAssignedMessageData(unusedVar) {
                    var _a;
                    const def = unusedVar.defs[0];
                    let additional = '';
                    if (options.destructuredArrayIgnorePattern &&
                        ((_a = def === null || def === void 0 ? void 0 : def.name.parent) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.ArrayPattern) {
                        additional = `. Allowed unused elements of array destructuring patterns must match ${options.destructuredArrayIgnorePattern.toString()}`;
                    }
                    else if (options.varsIgnorePattern) {
                        additional = `. Allowed unused vars must match ${options.varsIgnorePattern.toString()}`;
                    }
                    return {
                        varName: unusedVar.name,
                        action: 'assigned a value',
                        additional,
                    };
                }
                const unusedVars = collectUnusedVariables();
                for (const unusedVar of unusedVars) {
                    // Report the first declaration.
                    if (unusedVar.defs.length > 0) {
                        const writeReferences = unusedVar.references.filter(ref => ref.isWrite() &&
                            ref.from.variableScope === unusedVar.scope.variableScope);
                        context.report({
                            node: writeReferences.length
                                ? writeReferences[writeReferences.length - 1].identifier
                                : unusedVar.identifiers[0],
                            messageId: 'unusedVar',
                            data: unusedVar.references.some(ref => ref.isWrite())
                                ? getAssignedMessageData(unusedVar)
                                : getDefinedMessageData(unusedVar),
                        });
                        // If there are no regular declaration, report the first `/*globals*/` comment directive.
                    }
                    else if ('eslintExplicitGlobalComments' in unusedVar &&
                        unusedVar.eslintExplicitGlobalComments) {
                        const directiveComment = unusedVar.eslintExplicitGlobalComments[0];
                        context.report({
                            node: programNode,
                            loc: util.getNameLocationInGlobalDirectiveComment(sourceCode, directiveComment, unusedVar.name),
                            messageId: 'unusedVar',
                            data: getDefinedMessageData(unusedVar),
                        });
                    }
                }
            },
        };
        function checkModuleDeclForExportEquals(node) {
            const cached = MODULE_DECL_CACHE.get(node);
            if (cached != null) {
                return cached;
            }
            if (node.body && node.body.type === utils_1.AST_NODE_TYPES.TSModuleBlock) {
                for (const statement of node.body.body) {
                    if (statement.type === utils_1.AST_NODE_TYPES.TSExportAssignment) {
                        MODULE_DECL_CACHE.set(node, true);
                        return true;
                    }
                }
            }
            MODULE_DECL_CACHE.set(node, false);
            return false;
        }
        function ambientDeclarationSelector(parent, childDeclare) {
            return [
                // Types are ambiently exported
                `${parent} > :matches(${[
                    utils_1.AST_NODE_TYPES.TSInterfaceDeclaration,
                    utils_1.AST_NODE_TYPES.TSTypeAliasDeclaration,
                ].join(', ')})`,
                // Value things are ambiently exported if they are "declare"d
                `${parent} > :matches(${[
                    utils_1.AST_NODE_TYPES.ClassDeclaration,
                    utils_1.AST_NODE_TYPES.TSDeclareFunction,
                    utils_1.AST_NODE_TYPES.TSEnumDeclaration,
                    utils_1.AST_NODE_TYPES.TSModuleDeclaration,
                    utils_1.AST_NODE_TYPES.VariableDeclaration,
                ].join(', ')})${childDeclare ? '[declare = true]' : ''}`,
            ].join(', ');
        }
        function markDeclarationChildAsUsed(node) {
            var _a;
            const identifiers = [];
            switch (node.type) {
                case utils_1.AST_NODE_TYPES.TSInterfaceDeclaration:
                case utils_1.AST_NODE_TYPES.TSTypeAliasDeclaration:
                case utils_1.AST_NODE_TYPES.ClassDeclaration:
                case utils_1.AST_NODE_TYPES.FunctionDeclaration:
                case utils_1.AST_NODE_TYPES.TSDeclareFunction:
                case utils_1.AST_NODE_TYPES.TSEnumDeclaration:
                case utils_1.AST_NODE_TYPES.TSModuleDeclaration:
                    if (((_a = node.id) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.Identifier) {
                        identifiers.push(node.id);
                    }
                    break;
                case utils_1.AST_NODE_TYPES.VariableDeclaration:
                    for (const declaration of node.declarations) {
                        visitPattern(declaration, pattern => {
                            identifiers.push(pattern);
                        });
                    }
                    break;
            }
            let scope = context.getScope();
            const shouldUseUpperScope = [
                utils_1.AST_NODE_TYPES.TSModuleDeclaration,
                utils_1.AST_NODE_TYPES.TSDeclareFunction,
            ].includes(node.type);
            if (scope.variableScope !== scope) {
                scope = scope.variableScope;
            }
            else if (shouldUseUpperScope && scope.upper) {
                scope = scope.upper;
            }
            for (const id of identifiers) {
                const superVar = scope.set.get(id.name);
                if (superVar) {
                    superVar.eslintUsed = true;
                }
            }
        }
        function visitPattern(node, cb) {
            const visitor = new scope_manager_1.PatternVisitor({}, node, cb);
            visitor.visit(node);
        }
    },
});
/*

###### TODO ######

Edge cases that aren't currently handled due to laziness and them being super edgy edge cases


--- function params referenced in typeof type refs in the function declaration ---
--- NOTE - TS gets these cases wrong

function _foo(
  arg: number // arg should be unused
): typeof arg {
  return 1 as any;
}

function _bar(
  arg: number, // arg should be unused
  _arg2: typeof arg,
) {}


--- function names referenced in typeof type refs in the function declaration ---
--- NOTE - TS gets these cases right

function foo( // foo should be unused
): typeof foo {
    return 1 as any;
}

function bar( // bar should be unused
  _arg: typeof bar
) {}


--- if an interface is merged into a namespace  ---
--- NOTE - TS gets these cases wrong

namespace Test {
    interface Foo { // Foo should be unused here
        a: string;
    }
    export namespace Foo {
       export type T = 'b';
    }
}
type T = Test.Foo; // Error: Namespace 'Test' has no exported member 'Foo'.


namespace Test {
    export interface Foo {
        a: string;
    }
    namespace Foo { // Foo should be unused here
       export type T = 'b';
    }
}
type T = Test.Foo.T; // Error: Namespace 'Test' has no exported member 'Foo'.

*/
/*

###### TODO ######

We currently extend base `no-unused-vars` implementation because it's easier and lighter-weight.

Because of this, there are a few false-negatives which won't get caught.
We could fix these if we fork the base rule; but that's a lot of code (~650 lines) to add in.
I didn't want to do that just yet without some real-world issues, considering these are pretty rare edge-cases.

These cases are mishandled because the base rule assumes that each variable has one def, but type-value shadowing
creates a variable with two defs

--- type-only or value-only references to type/value shadowed variables ---
--- NOTE - TS gets these cases wrong

type T = 1;
const T = 2; // this T should be unused

type U = T; // this U should be unused
const U = 3;

const _V = U;


--- partially exported type/value shadowed variables ---
--- NOTE - TS gets these cases wrong

export interface Foo {}
const Foo = 1; // this Foo should be unused

interface Bar {} // this Bar should be unused
export const Bar = 1;

*/
//# sourceMappingURL=no-unused-vars.js.map