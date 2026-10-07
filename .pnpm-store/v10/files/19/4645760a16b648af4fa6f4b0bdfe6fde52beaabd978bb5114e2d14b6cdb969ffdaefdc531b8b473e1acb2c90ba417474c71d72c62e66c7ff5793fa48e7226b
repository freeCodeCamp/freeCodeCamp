"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scope_manager_1 = require("@typescript-eslint/scope-manager");
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
const referenceContainsTypePredicate_1 = require("../util/referenceContainsTypePredicate");
const referenceContainsTypeQuery_1 = require("../util/referenceContainsTypeQuery");
// this is a superset of DefinitionType which defines sub-types for better granularity
var VariableType;
(function (VariableType) {
    // New sub-types
    VariableType[VariableType["ArrayDestructure"] = 0] = "ArrayDestructure";
    // DefinitionType
    VariableType[VariableType["CatchClause"] = 1] = "CatchClause";
    VariableType[VariableType["ClassName"] = 2] = "ClassName";
    VariableType[VariableType["FunctionName"] = 3] = "FunctionName";
    VariableType[VariableType["ImportBinding"] = 4] = "ImportBinding";
    VariableType[VariableType["ImplicitGlobalVariable"] = 5] = "ImplicitGlobalVariable";
    VariableType[VariableType["Parameter"] = 6] = "Parameter";
    VariableType[VariableType["TSEnumMember"] = 7] = "TSEnumMember";
    VariableType[VariableType["TSEnumName"] = 8] = "TSEnumName";
    VariableType[VariableType["TSModuleName"] = 9] = "TSModuleName";
    VariableType[VariableType["Type"] = 10] = "Type";
    VariableType[VariableType["Variable"] = 11] = "Variable";
})(VariableType || (VariableType = {}));
const isCommaToken = {
    predicate: (token) => token.type === utils_1.AST_TOKEN_TYPES.Punctuator && token.value === ',',
    tokenChar: ',',
};
const isLeftCurlyToken = {
    predicate: (token) => token.type === utils_1.AST_TOKEN_TYPES.Punctuator && token.value === '{',
    tokenChar: '{',
};
const isRightCurlyToken = {
    predicate: (token) => token.type === utils_1.AST_TOKEN_TYPES.Punctuator && token.value === '}',
    tokenChar: '}',
};
function assertToken({ predicate, tokenChar }, token) {
    if (token == null) {
        throw new Error(`Expected a valid "${tokenChar}" token, but found no token`);
    }
    if (!predicate(token)) {
        throw new Error(`Expected a valid "${tokenChar}" token, but got "${token.value}" instead`);
    }
    return token;
}
exports.default = (0, util_1.createRule)({
    name: 'no-unused-vars',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow unused variables',
            extendsBaseRule: true,
            recommended: 'recommended',
        },
        fixable: 'code',
        hasSuggestions: true,
        messages: {
            removeUnusedImportDeclaration: 'Remove unused import declaration.',
            removeUnusedVar: 'Remove unused variable "{{varName}}".',
            unusedVar: "'{{varName}}' is {{action}} but never used{{additional}}.",
            usedIgnoredVar: "'{{varName}}' is marked as ignored but is used{{additional}}.",
            usedOnlyAsType: "'{{varName}}' is {{action}} but only used as a type{{additional}}.",
        },
        schema: [
            {
                oneOf: [
                    {
                        type: 'string',
                        description: 'Broad setting for unused variables to target.',
                        enum: ['all', 'local'],
                    },
                    {
                        type: 'object',
                        additionalProperties: false,
                        properties: {
                            args: {
                                type: 'string',
                                description: 'Whether to check all, some, or no arguments.',
                                enum: ['all', 'after-used', 'none'],
                            },
                            argsIgnorePattern: {
                                type: 'string',
                                description: 'Regular expressions of argument names to not check for usage.',
                            },
                            caughtErrors: {
                                type: 'string',
                                description: 'Whether to check catch block arguments.',
                                enum: ['all', 'none'],
                            },
                            caughtErrorsIgnorePattern: {
                                type: 'string',
                                description: 'Regular expressions of catch block argument names to not check for usage.',
                            },
                            destructuredArrayIgnorePattern: {
                                type: 'string',
                                description: 'Regular expressions of destructured array variable names to not check for usage.',
                            },
                            enableAutofixRemoval: {
                                type: 'object',
                                additionalProperties: false,
                                description: 'Configurable automatic fixes for different types of unused variables.',
                                properties: {
                                    imports: {
                                        type: 'boolean',
                                        description: 'Whether to enable automatic removal of unused imports.',
                                    },
                                },
                            },
                            ignoreClassWithStaticInitBlock: {
                                type: 'boolean',
                                description: 'Whether to ignore classes with at least one static initialization block.',
                            },
                            ignoreRestSiblings: {
                                type: 'boolean',
                                description: 'Whether to ignore sibling properties in `...` destructuring.',
                            },
                            ignoreUsingDeclarations: {
                                type: 'boolean',
                                description: 'Whether to ignore using or await using declarations.',
                            },
                            reportUsedIgnorePattern: {
                                type: 'boolean',
                                description: 'Whether to report variables that match any of the valid ignore pattern options if they have been used.',
                            },
                            vars: {
                                type: 'string',
                                description: 'Whether to check all variables or only locally-declared variables.',
                                enum: ['all', 'local'],
                            },
                            varsIgnorePattern: {
                                type: 'string',
                                description: 'Regular expressions of variable names to not check for usage.',
                            },
                        },
                    },
                ],
            },
        ],
    },
    defaultOptions: [{}],
    create(context, [firstOption]) {
        const MODULE_DECL_CACHE = new Map();
        const reportedUnusedVariables = new Set();
        function areAllSpecifiersUnused(decl) {
            return context.sourceCode.getDeclaredVariables(decl).every(variable => {
                return reportedUnusedVariables.has(variable);
            });
        }
        const report = (unusedVar, opts) => {
            reportedUnusedVariables.add(unusedVar);
            const writeReferences = unusedVar.references.filter(ref => ref.isWrite() &&
                ref.from.variableScope === unusedVar.scope.variableScope);
            const id = writeReferences.length
                ? writeReferences[writeReferences.length - 1].identifier
                : unusedVar.identifiers[0];
            const { start } = id.loc;
            const idLength = id.name.length;
            const loc = {
                start,
                end: {
                    column: start.column + idLength,
                    line: start.line,
                },
            };
            const fixer = (() => {
                const { messageId, fix, useAutofix } = (() => {
                    if (unusedVar.defs.length !== 1) {
                        // If there's multiple definitions then we'd have to clean them all
                        // up! That's complicated and messy so for now let's just ignore it.
                        return {};
                    }
                    const { type, def } = defToVariableType(unusedVar.defs[0]);
                    switch (type) {
                        case VariableType.ArrayDestructure:
                            // TODO(bradzacher) -- this would be really easy to implement and
                            // is side-effect free!
                            return {};
                        case VariableType.CatchClause:
                            // TODO(bradzacher) -- this would be really easy to implement and
                            // is side-effect free!
                            return {};
                        case VariableType.ClassName:
                            // This would be easy to implement -- but classes can have
                            // side-effects in static initializers / static blocks. So it's
                            // dangerous to ever auto-fix remove them.
                            //
                            // Perhaps as an always-suggestion fixer...?
                            return {};
                        case VariableType.FunctionName:
                            // TODO(bradzacher) -- this would be really easy to implement and
                            // is side-effect free!
                            return {};
                        case VariableType.ImportBinding:
                            return {
                                ...getImportFixer(def),
                                useAutofix: options.enableAutofixRemoval.imports,
                            };
                        case VariableType.ImplicitGlobalVariable:
                            // We don't report these via this code path, so no fixer is possible
                            return {};
                        case VariableType.Parameter:
                            // This is easy to implement -- but we cannot implement it cos it
                            // changes the signature of the function which in turn might
                            // introduce type errors in consumers.
                            //
                            // Also parameters can have default values which might have
                            // side-effects.
                            //
                            // Perhaps as an always-suggestion fixer...?
                            return {};
                        case VariableType.TSEnumMember:
                            // We don't report unused enum members so no fixer is ever possible
                            return {};
                        case VariableType.TSEnumName:
                            // TODO(bradzacher) -- this would be really easy to implement and
                            // is side-effect free!
                            return {};
                        case VariableType.TSModuleName:
                            // This is easy to implement -- but TS namespaces are eagerly
                            // initialized -- meaning that they might have side-effects in
                            // the body. So it's dangerous to ever auto-fix remove them.
                            //
                            // Perhaps as an always-suggestion fixer...?
                            return {};
                        case VariableType.Type:
                            // TODO(bradzacher) -- this would be really easy to implement and
                            // is side-effect free!
                            return {};
                        case VariableType.Variable:
                            // TODO(bradzacher) -- this would be really easy to implement
                            return {};
                    }
                })();
                if (!fix) {
                    return {};
                }
                if (useAutofix) {
                    return { fix };
                }
                const data = {
                    varName: unusedVar.name,
                };
                return {
                    suggest: [
                        {
                            messageId: messageId ?? 'removeUnusedVar',
                            data,
                            fix,
                        },
                    ],
                };
            })();
            context.report({
                ...opts,
                ...fixer,
                loc,
                node: id,
            });
        };
        const options = (() => {
            const options = {
                args: 'after-used',
                caughtErrors: 'all',
                enableAutofixRemoval: {
                    imports: false,
                },
                ignoreClassWithStaticInitBlock: false,
                ignoreRestSiblings: false,
                ignoreUsingDeclarations: false,
                reportUsedIgnorePattern: false,
                vars: 'all',
            };
            if (typeof firstOption === 'string') {
                options.vars = firstOption;
            }
            else {
                options.vars = firstOption.vars ?? options.vars;
                options.args = firstOption.args ?? options.args;
                options.ignoreRestSiblings =
                    firstOption.ignoreRestSiblings ?? options.ignoreRestSiblings;
                options.ignoreUsingDeclarations =
                    firstOption.ignoreUsingDeclarations ??
                        options.ignoreUsingDeclarations;
                options.caughtErrors = firstOption.caughtErrors ?? options.caughtErrors;
                options.ignoreClassWithStaticInitBlock =
                    firstOption.ignoreClassWithStaticInitBlock ??
                        options.ignoreClassWithStaticInitBlock;
                options.reportUsedIgnorePattern =
                    firstOption.reportUsedIgnorePattern ??
                        options.reportUsedIgnorePattern;
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
                if (firstOption.enableAutofixRemoval) {
                    // eslint-disable-next-line unicorn/no-lonely-if -- will add more cases later
                    if (firstOption.enableAutofixRemoval.imports != null) {
                        options.enableAutofixRemoval.imports =
                            firstOption.enableAutofixRemoval.imports;
                    }
                }
            }
            return options;
        })();
        function removeNodeWithTrailingNewline(fixer, node) {
            const sourceCode = context.sourceCode;
            const { line: startLine } = node.loc.start;
            const { line: endLine } = node.loc.end;
            // Expand range: start of first line to start of next line (or EOF)
            const lineRangeStart = sourceCode.getIndexFromLoc({
                column: 0,
                line: startLine,
            });
            const lineRangeEnd = endLine < sourceCode.lines.length
                ? sourceCode.getIndexFromLoc({ column: 0, line: endLine + 1 })
                : sourceCode.text.length;
            // If node is the only non-whitespace on its line(s), remove full line(s)
            if (sourceCode.getText(node) ===
                sourceCode.text.slice(lineRangeStart, lineRangeEnd).trim()) {
                return fixer.removeRange([lineRangeStart, lineRangeEnd]);
            }
            return fixer.remove(node);
        }
        function getImportFixer(def) {
            switch (def.node.type) {
                case utils_1.AST_NODE_TYPES.TSImportEqualsDeclaration:
                    // import equals declarations can only have one binding -- so we can
                    // just remove entire import declaration
                    return {
                        messageId: 'removeUnusedImportDeclaration',
                        fix: fixer => removeNodeWithTrailingNewline(fixer, def.node),
                    };
                case utils_1.AST_NODE_TYPES.ImportDefaultSpecifier: {
                    const importDecl = def.node.parent;
                    if (importDecl.specifiers.length === 1 ||
                        areAllSpecifiersUnused(importDecl)) {
                        // all specifiers are unused -- so we can just remove entire import
                        // declaration
                        return {
                            messageId: 'removeUnusedImportDeclaration',
                            fix: fixer => removeNodeWithTrailingNewline(fixer, importDecl),
                        };
                    }
                    // in this branch we know the following things:
                    // 1) there is at least one specifier that is used
                    // 2) the default specifier is unused
                    //
                    // by process of elimination we can deduce that there is at least one
                    // named specifier that is used
                    //
                    // i.e. the code must be import Unused, { Used, ... } from 'module';
                    //
                    // there's one or more unused named specifiers, so we must remove the
                    // default specifier in isolation including the trailing comma.
                    //
                    //     import Unused, { Used, ... } from 'module';
                    //            ^^^^^^^ remove this
                    //
                    // NOTE: we could also remove the spaces between the comma and the
                    // opening curly brace -- but this does risk removing comments. To be
                    // safe we'll be conservative for now
                    //
                    // TODO(bradzacher) -- consider removing the extra space whilst also
                    //                     preserving comments.
                    return {
                        messageId: 'removeUnusedVar',
                        fix: fixer => {
                            const comma = (0, util_1.nullThrows)(context.sourceCode.getTokenAfter(def.node), util_1.NullThrowsReasons.MissingToken(',', 'import specifier'));
                            assertToken(isCommaToken, comma);
                            return fixer.removeRange([
                                Math.min(def.node.range[0], comma.range[0]),
                                Math.max(def.node.range[1], comma.range[1]),
                            ]);
                        },
                    };
                }
                case utils_1.AST_NODE_TYPES.ImportSpecifier: {
                    // guaranteed to NOT be in an export statement as we're inspecting an
                    // import
                    const importDecl = def.node.parent;
                    if (importDecl.specifiers.length === 1 ||
                        areAllSpecifiersUnused(importDecl)) {
                        // all specifiers are unused -- so we can just remove entire import
                        // declaration
                        return {
                            messageId: 'removeUnusedImportDeclaration',
                            fix: fixer => removeNodeWithTrailingNewline(fixer, importDecl),
                        };
                    }
                    return {
                        messageId: 'removeUnusedVar',
                        fix: fixer => {
                            const usedNamedSpecifiers = context.sourceCode
                                .getDeclaredVariables(importDecl)
                                .map(variable => {
                                if (reportedUnusedVariables.has(variable)) {
                                    return null;
                                }
                                const specifier = variable.defs[0].node;
                                if (specifier.type !== utils_1.AST_NODE_TYPES.ImportSpecifier) {
                                    return null;
                                }
                                return specifier;
                            })
                                .filter(v => v != null);
                            if (usedNamedSpecifiers.length === 0) {
                                // in this branch we know the following things:
                                // 1) there is at least one specifier that is used
                                // 2) all named specifiers are unused
                                //
                                // by process of elimination we can deduce that there is a
                                // default specifier and it is the only used specifier
                                //
                                // i.e. the code must be import Used, { Unused, ... } from
                                //     'module';
                                //
                                // So we can just remove the entire curly content and the comma
                                // before, eg import Used, { Unused, ... } from 'module';
                                // ^^^^^^^^^^^^^^^^^ remove this
                                const leftCurly = assertToken(isLeftCurlyToken, context.sourceCode.getFirstToken(importDecl, isLeftCurlyToken.predicate));
                                const leftToken = assertToken(isCommaToken, context.sourceCode.getTokenBefore(leftCurly));
                                const rightToken = assertToken(isRightCurlyToken, context.sourceCode.getFirstToken(importDecl, isRightCurlyToken.predicate));
                                return fixer.removeRange([
                                    leftToken.range[0],
                                    rightToken.range[1],
                                ]);
                            }
                            // in this branch we know there is at least one used named
                            // specifier which means we have to remove each unused specifier
                            // in isolation.
                            //
                            // there's 3 possible cases to care about: import { Unused,
                            //    Used... } from 'module'; import { ...Used, Unused } from
                            //    'module'; import { ...Used, Unused, } from 'module';
                            //
                            // Note that because of the above usedNamedSpecifiers check we
                            // know that we don't have one of these cases: import { Unused }
                            // from 'module'; import { Unused, Unused... } from 'module';
                            // import { ...Unused, Unused, } from 'module';
                            //
                            // The result is that we know that there _must_ be a comma that
                            // needs cleaning up
                            //
                            // try to remove the leading comma first as it leads to a nicer
                            // fix output in most cases
                            //
                            // leading preferred: import { Used, Unused, Used } from 'module';
                            //   ^^^^^^^^ remove import { Used, Used } from 'module';
                            //
                            // trailing preferred: import { Used, Unused, Used } from
                            //   'module'; ^^^^^^^ remove import { Used,  Used } from
                            //   'module'; ^^ ugly double space
                            //
                            // But we need to still fallback to the trailing comma for cases
                            // where the unused specifier is the first in the import eg:
                            // import { Unused, Used } from 'module';
                            const maybeComma = context.sourceCode.getTokenBefore(def.node);
                            const comma = maybeComma && isCommaToken.predicate(maybeComma)
                                ? maybeComma
                                : assertToken(isCommaToken, context.sourceCode.getTokenAfter(def.node));
                            return fixer.removeRange([
                                Math.min(def.node.range[0], comma.range[0]),
                                Math.max(def.node.range[1], comma.range[1]),
                            ]);
                        },
                    };
                }
                case utils_1.AST_NODE_TYPES.ImportNamespaceSpecifier: {
                    // namespace specifiers cannot be used with any other specifier -- so
                    // we can just remove entire import declaration
                    const importDecl = def.node.parent;
                    return {
                        messageId: 'removeUnusedImportDeclaration',
                        fix: fixer => removeNodeWithTrailingNewline(fixer, importDecl),
                    };
                }
            }
        }
        /**
         * Determines what variable type a def is.
         * @param def the declaration to check
         * @returns a simple name for the types of variables that this rule supports
         */
        function defToVariableType(def) {
            /*
             * This `destructuredArrayIgnorePattern` error report works differently from the catch
             * clause and parameter error reports. _Both_ the `varsIgnorePattern` and the
             * `destructuredArrayIgnorePattern` will be checked for array destructuring. However,
             * for the purposes of the report, the currently defined behavior is to only inform the
             * user of the `destructuredArrayIgnorePattern` if it's present (regardless of the fact
             * that the `varsIgnorePattern` would also apply). If it's not present, the user will be
             * informed of the `varsIgnorePattern`, assuming that's present.
             */
            if (options.destructuredArrayIgnorePattern &&
                def.name.parent.type === utils_1.AST_NODE_TYPES.ArrayPattern) {
                return { type: VariableType.ArrayDestructure, def };
            }
            switch (def.type) {
                case scope_manager_1.DefinitionType.CatchClause:
                    return { type: VariableType.CatchClause, def };
                case scope_manager_1.DefinitionType.ClassName:
                    return { type: VariableType.ClassName, def };
                case scope_manager_1.DefinitionType.FunctionName:
                    return { type: VariableType.FunctionName, def };
                case scope_manager_1.DefinitionType.ImplicitGlobalVariable:
                    return { type: VariableType.ImplicitGlobalVariable, def };
                case scope_manager_1.DefinitionType.ImportBinding:
                    return { type: VariableType.ImportBinding, def };
                case scope_manager_1.DefinitionType.Parameter:
                    return { type: VariableType.Parameter, def };
                case scope_manager_1.DefinitionType.TSEnumName:
                    return { type: VariableType.TSEnumName, def };
                case scope_manager_1.DefinitionType.TSEnumMember:
                    return { type: VariableType.TSEnumMember, def };
                case scope_manager_1.DefinitionType.TSModuleName:
                    return { type: VariableType.TSModuleName, def };
                case scope_manager_1.DefinitionType.Type:
                    return { type: VariableType.Type, def };
                case scope_manager_1.DefinitionType.Variable:
                    return { type: VariableType.Variable, def };
            }
        }
        /**
         * Gets a given variable's description and configured ignore pattern
         * based on the provided variableType
         * @param variableType a simple name for the types of variables that this rule supports
         * @returns the given variable's description and
         * ignore pattern
         */
        function getVariableDescription(variableType) {
            switch (variableType) {
                case VariableType.ArrayDestructure:
                    return {
                        pattern: options.destructuredArrayIgnorePattern?.toString(),
                        variableDescription: 'elements of array destructuring',
                    };
                case VariableType.CatchClause:
                    return {
                        pattern: options.caughtErrorsIgnorePattern?.toString(),
                        variableDescription: 'caught errors',
                    };
                case VariableType.Parameter:
                    return {
                        pattern: options.argsIgnorePattern?.toString(),
                        variableDescription: 'args',
                    };
                default:
                    return {
                        pattern: options.varsIgnorePattern?.toString(),
                        variableDescription: 'vars',
                    };
            }
        }
        /**
         * Generates the message data about the variable being defined and unused,
         * including the ignore pattern if configured.
         * @param unusedVar eslint-scope variable object.
         * @returns The message data to be used with this unused variable.
         */
        function getDefinedMessageData(unusedVar) {
            const def = unusedVar.defs.at(0);
            let additionalMessageData = '';
            if (def) {
                const { pattern, variableDescription } = getVariableDescription(defToVariableType(def).type);
                if (pattern && variableDescription) {
                    additionalMessageData = `. Allowed unused ${variableDescription} must match ${pattern}`;
                }
            }
            return {
                action: 'defined',
                additional: additionalMessageData,
                varName: unusedVar.name,
            };
        }
        /**
         * Generate the warning message about the variable being
         * assigned and unused, including the ignore pattern if configured.
         * @param unusedVar eslint-scope variable object.
         * @returns The message data to be used with this unused variable.
         */
        function getAssignedMessageData(unusedVar) {
            const def = unusedVar.defs.at(0);
            let additionalMessageData = '';
            if (def) {
                const { pattern, variableDescription } = getVariableDescription(defToVariableType(def).type);
                if (pattern && variableDescription) {
                    additionalMessageData = `. Allowed unused ${variableDescription} must match ${pattern}`;
                }
            }
            return {
                action: 'assigned a value',
                additional: additionalMessageData,
                varName: unusedVar.name,
            };
        }
        /**
         * Generate the warning message about a variable being used even though
         * it is marked as being ignored.
         * @param variable eslint-scope variable object
         * @param variableType a simple name for the types of variables that this rule supports
         * @returns The message data to be used with this used ignored variable.
         */
        function getUsedIgnoredMessageData(variable, variableType) {
            const { pattern, variableDescription } = getVariableDescription(variableType);
            let additionalMessageData = '';
            if (pattern && variableDescription) {
                additionalMessageData = `. Used ${variableDescription} must not match ${pattern}`;
            }
            return {
                additional: additionalMessageData,
                varName: variable.name,
            };
        }
        function collectUnusedVariables() {
            /**
             * Checks whether a node is a sibling of the rest property or not.
             * @param node a node to check
             * @returns True if the node is a sibling of the rest property, otherwise false.
             */
            function hasRestSibling(node) {
                return (node.type === utils_1.AST_NODE_TYPES.Property &&
                    node.parent.type === utils_1.AST_NODE_TYPES.ObjectPattern &&
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
                const params = context.sourceCode.getDeclaredVariables(def.node);
                const posteriorParams = params.slice(params.indexOf(variable) + 1);
                // If any used parameters occur after this parameter, do not report.
                return !posteriorParams.some(v => v.references.length > 0 || v.eslintUsed);
            }
            const analysisResults = (0, util_1.collectVariables)(context);
            const variables = [
                ...Array.from(analysisResults.unusedVariables, variable => ({
                    used: false,
                    variable,
                })),
                ...Array.from(analysisResults.usedVariables, variable => ({
                    used: true,
                    variable,
                })),
            ];
            const unusedVariablesReturn = [];
            for (const { used, variable } of variables) {
                // explicit global variables don't have definitions.
                if (variable.defs.length === 0) {
                    if (!used) {
                        unusedVariablesReturn.push(variable);
                    }
                    continue;
                }
                const def = variable.defs[0];
                if (variable.scope.type === utils_1.TSESLint.Scope.ScopeType.global &&
                    options.vars === 'local') {
                    // skip variables in the global scope if configured to
                    continue;
                }
                const refUsedInArrayPatterns = variable.references.some(ref => ref.identifier.parent.type === utils_1.AST_NODE_TYPES.ArrayPattern);
                // skip elements of array destructuring patterns
                if ((def.name.parent.type === utils_1.AST_NODE_TYPES.ArrayPattern ||
                    refUsedInArrayPatterns) &&
                    def.name.type === utils_1.AST_NODE_TYPES.Identifier &&
                    options.destructuredArrayIgnorePattern?.test(def.name.name)) {
                    if (options.reportUsedIgnorePattern && used) {
                        report(variable, {
                            messageId: 'usedIgnoredVar',
                            data: getUsedIgnoredMessageData(variable, VariableType.ArrayDestructure),
                        });
                    }
                    continue;
                }
                if (def.type === utils_1.TSESLint.Scope.DefinitionType.ClassName) {
                    const hasStaticBlock = def.node.body.body.some(node => node.type === utils_1.AST_NODE_TYPES.StaticBlock);
                    if (options.ignoreClassWithStaticInitBlock && hasStaticBlock) {
                        continue;
                    }
                }
                // skip catch variables
                if (def.type === utils_1.TSESLint.Scope.DefinitionType.CatchClause) {
                    if (options.caughtErrors === 'none') {
                        continue;
                    }
                    // skip ignored parameters
                    if (options.caughtErrorsIgnorePattern?.test(def.name.name)) {
                        if (options.reportUsedIgnorePattern && used) {
                            report(variable, {
                                messageId: 'usedIgnoredVar',
                                data: getUsedIgnoredMessageData(variable, VariableType.CatchClause),
                            });
                        }
                        continue;
                    }
                }
                else if (def.type === utils_1.TSESLint.Scope.DefinitionType.Parameter) {
                    // if "args" option is "none", skip any parameter
                    if (options.args === 'none') {
                        continue;
                    }
                    // skip ignored parameters
                    if (def.name.type === utils_1.AST_NODE_TYPES.Identifier &&
                        options.argsIgnorePattern?.test(def.name.name)) {
                        if (options.reportUsedIgnorePattern && used) {
                            report(variable, {
                                messageId: 'usedIgnoredVar',
                                data: getUsedIgnoredMessageData(variable, VariableType.Parameter),
                            });
                        }
                        continue;
                    }
                    // if "args" option is "after-used", skip used variables
                    if (options.args === 'after-used' &&
                        (0, util_1.isFunction)(def.name.parent) &&
                        !isAfterLastUsedArg(variable)) {
                        continue;
                    }
                }
                // skip ignored variables
                else if (def.name.type === utils_1.AST_NODE_TYPES.Identifier &&
                    options.varsIgnorePattern?.test(def.name.name)) {
                    if (options.reportUsedIgnorePattern &&
                        used &&
                        /* enum members are always marked as 'used' by `collectVariables`, but in reality they may be used or
                           unused. either way, don't complain about their naming. */
                        def.type !== utils_1.TSESLint.Scope.DefinitionType.TSEnumMember) {
                        report(variable, {
                            messageId: 'usedIgnoredVar',
                            data: getUsedIgnoredMessageData(variable, VariableType.Variable),
                        });
                    }
                    continue;
                }
                if (def.type === utils_1.TSESLint.Scope.DefinitionType.Variable &&
                    options.ignoreUsingDeclarations &&
                    (def.parent.kind === 'await using' || def.parent.kind === 'using')) {
                    continue;
                }
                if (hasRestSpreadSibling(variable)) {
                    continue;
                }
                // in case another rule has run and used the collectUnusedVariables,
                // we want to ensure our selectors that marked variables as used are respected
                if (variable.eslintUsed) {
                    continue;
                }
                if (!used) {
                    unusedVariablesReturn.push(variable);
                }
            }
            return unusedVariablesReturn;
        }
        return {
            // top-level declaration file handling
            [ambientDeclarationSelector(utils_1.AST_NODE_TYPES.Program)](node) {
                if (!(0, util_1.isDefinitionFile)(context.filename)) {
                    return;
                }
                const moduleDecl = (0, util_1.nullThrows)(node.parent, util_1.NullThrowsReasons.MissingParent);
                if (checkForOverridingExportStatements(moduleDecl)) {
                    return;
                }
                markDeclarationChildAsUsed(node);
            },
            // children of a namespace that is a child of a declared namespace are auto-exported
            [ambientDeclarationSelector('TSModuleDeclaration[declare = true] > TSModuleBlock TSModuleDeclaration > TSModuleBlock')](node) {
                const moduleDecl = (0, util_1.nullThrows)(node.parent.parent, util_1.NullThrowsReasons.MissingParent);
                if (checkForOverridingExportStatements(moduleDecl)) {
                    return;
                }
                markDeclarationChildAsUsed(node);
            },
            // declared namespace handling
            [ambientDeclarationSelector('TSModuleDeclaration[declare = true] > TSModuleBlock')](node) {
                const moduleDecl = (0, util_1.nullThrows)(node.parent.parent, util_1.NullThrowsReasons.MissingParent);
                if (checkForOverridingExportStatements(moduleDecl)) {
                    return;
                }
                markDeclarationChildAsUsed(node);
            },
            // namespace handling in definition files
            [ambientDeclarationSelector('TSModuleDeclaration > TSModuleBlock')](node) {
                if (!(0, util_1.isDefinitionFile)(context.filename)) {
                    return;
                }
                const moduleDecl = (0, util_1.nullThrows)(node.parent.parent, util_1.NullThrowsReasons.MissingParent);
                if (checkForOverridingExportStatements(moduleDecl)) {
                    return;
                }
                markDeclarationChildAsUsed(node);
            },
            // collect
            'Program:exit'(programNode) {
                const unusedVars = collectUnusedVariables();
                for (const unusedVar of unusedVars) {
                    // Report the first declaration.
                    if (unusedVar.defs.length > 0) {
                        const usedOnlyAsType = unusedVar.references.some(ref => (0, referenceContainsTypeQuery_1.referenceContainsTypeQuery)(ref.identifier) ||
                            (0, referenceContainsTypePredicate_1.referenceContainsTypePredicate)(ref.identifier));
                        const messageId = usedOnlyAsType ? 'usedOnlyAsType' : 'unusedVar';
                        const isImportUsedOnlyAsType = usedOnlyAsType &&
                            unusedVar.defs.some(def => def.type === scope_manager_1.DefinitionType.ImportBinding);
                        if (isImportUsedOnlyAsType) {
                            continue;
                        }
                        report(unusedVar, {
                            messageId,
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
                            loc: (0, util_1.getNameLocationInGlobalDirectiveComment)(context.sourceCode, directiveComment, unusedVar.name),
                            node: programNode,
                            messageId: 'unusedVar',
                            data: getDefinedMessageData(unusedVar),
                        });
                    }
                }
            },
        };
        function checkForOverridingExportStatements(node) {
            const cached = MODULE_DECL_CACHE.get(node);
            if (cached != null) {
                return cached;
            }
            const body = getStatementsOfNode(node);
            if (hasOverridingExportStatement(body)) {
                MODULE_DECL_CACHE.set(node, true);
                return true;
            }
            MODULE_DECL_CACHE.set(node, false);
            return false;
        }
        function ambientDeclarationSelector(parent) {
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
                ].join(', ')})`,
            ].join(', ');
        }
        function markDeclarationChildAsUsed(node) {
            const identifiers = [];
            switch (node.type) {
                case utils_1.AST_NODE_TYPES.TSInterfaceDeclaration:
                case utils_1.AST_NODE_TYPES.TSTypeAliasDeclaration:
                case utils_1.AST_NODE_TYPES.ClassDeclaration:
                case utils_1.AST_NODE_TYPES.FunctionDeclaration:
                case utils_1.AST_NODE_TYPES.TSDeclareFunction:
                case utils_1.AST_NODE_TYPES.TSEnumDeclaration:
                case utils_1.AST_NODE_TYPES.TSModuleDeclaration:
                    if (node.id?.type === utils_1.AST_NODE_TYPES.Identifier) {
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
            let scope = context.sourceCode.getScope(node);
            const shouldUseUpperScope = [
                utils_1.AST_NODE_TYPES.TSDeclareFunction,
                utils_1.AST_NODE_TYPES.TSModuleDeclaration,
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
function hasOverridingExportStatement(body) {
    for (const statement of body) {
        if ((statement.type === utils_1.AST_NODE_TYPES.ExportNamedDeclaration &&
            statement.declaration == null) ||
            statement.type === utils_1.AST_NODE_TYPES.ExportAllDeclaration ||
            statement.type === utils_1.AST_NODE_TYPES.TSExportAssignment) {
            return true;
        }
        if (statement.type === utils_1.AST_NODE_TYPES.ExportDefaultDeclaration &&
            statement.declaration.type === utils_1.AST_NODE_TYPES.Identifier) {
            return true;
        }
    }
    return false;
}
function getStatementsOfNode(block) {
    if (block.type === utils_1.AST_NODE_TYPES.Program) {
        return block.body;
    }
    return block.body.body;
}
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

---

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