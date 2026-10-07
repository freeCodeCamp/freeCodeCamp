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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const tsutils = __importStar(require("ts-api-utils"));
const ts = __importStar(require("typescript"));
const util_1 = require("../util");
const DEFAULT_COMMENT_PATTERN = /^no default$/iu;
exports.default = (0, util_1.createRule)({
    name: 'switch-exhaustiveness-check',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Require switch-case statements to be exhaustive',
            requiresTypeChecking: true,
        },
        hasSuggestions: true,
        messages: {
            addMissingCases: 'Add branches for missing cases.',
            dangerousDefaultCase: 'The switch statement is exhaustive, so the default case is unnecessary.',
            switchIsNotExhaustive: 'Switch is not exhaustive. Cases not matched: {{missingBranches}}',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowDefaultCaseForExhaustiveSwitch: {
                        type: 'boolean',
                        description: `If 'true', allow 'default' cases on switch statements with exhaustive cases.`,
                    },
                    considerDefaultExhaustiveForUnions: {
                        type: 'boolean',
                        description: `If 'true', the 'default' clause is used to determine whether the switch statement is exhaustive for union type`,
                    },
                    defaultCaseCommentPattern: {
                        type: 'string',
                        description: `Regular expression for a comment that can indicate an intentionally omitted default case.`,
                    },
                    requireDefaultForNonUnion: {
                        type: 'boolean',
                        description: `If 'true', require a 'default' clause for switches on non-union types.`,
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allowDefaultCaseForExhaustiveSwitch: true,
            considerDefaultExhaustiveForUnions: false,
            requireDefaultForNonUnion: false,
        },
    ],
    create(context, [{ allowDefaultCaseForExhaustiveSwitch, considerDefaultExhaustiveForUnions, defaultCaseCommentPattern, requireDefaultForNonUnion, },]) {
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        const compilerOptions = services.program.getCompilerOptions();
        const commentRegExp = defaultCaseCommentPattern != null
            ? new RegExp(defaultCaseCommentPattern, 'u')
            : DEFAULT_COMMENT_PATTERN;
        function getCommentDefaultCase(node) {
            const lastCase = node.cases.at(-1);
            const commentsAfterLastCase = lastCase
                ? context.sourceCode.getCommentsAfter(lastCase)
                : [];
            const defaultCaseComment = commentsAfterLastCase.at(-1);
            if (commentRegExp.test(defaultCaseComment?.value.trim() || '')) {
                return defaultCaseComment;
            }
            return;
        }
        function typeToString(type) {
            return checker.typeToString(type, undefined, ts.TypeFormatFlags.AllowUniqueESSymbolType |
                ts.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope |
                ts.TypeFormatFlags.UseFullyQualifiedType);
        }
        function getSwitchMetadata(node) {
            const defaultCase = node.cases.find(switchCase => switchCase.test == null);
            const discriminantType = (0, util_1.getConstrainedTypeAtLocation)(services, node.discriminant);
            const symbolName = discriminantType.getSymbol()?.escapedName;
            const containsNonLiteralType = doesTypeContainNonLiteralType(discriminantType);
            const caseTypes = new Set();
            for (const switchCase of node.cases) {
                // If the `test` property of the switch case is `null`, then we are on a
                // `default` case.
                if (switchCase.test == null) {
                    continue;
                }
                const caseType = (0, util_1.getConstrainedTypeAtLocation)(services, switchCase.test);
                caseTypes.add(caseType);
            }
            const missingLiteralBranchTypes = [];
            for (const unionPart of tsutils.unionConstituents(discriminantType)) {
                for (const intersectionPart of tsutils.intersectionConstituents(unionPart)) {
                    if (caseTypes.has(intersectionPart) ||
                        !isTypeLiteralLikeType(intersectionPart)) {
                        continue;
                    }
                    // "missing", "optional" and "undefined" types are different runtime objects,
                    // but all of them have TypeFlags.Undefined type flag
                    if ([...caseTypes].some(tsutils.isIntrinsicUndefinedType) &&
                        tsutils.isIntrinsicUndefinedType(intersectionPart)) {
                        continue;
                    }
                    missingLiteralBranchTypes.push(intersectionPart);
                }
            }
            return {
                containsNonLiteralType,
                defaultCase: defaultCase ?? getCommentDefaultCase(node),
                missingLiteralBranchTypes,
                symbolName,
            };
        }
        function checkSwitchExhaustive(node, switchMetadata) {
            const { defaultCase, missingLiteralBranchTypes, symbolName } = switchMetadata;
            // If considerDefaultExhaustiveForUnions is enabled, the presence of a default case
            // always makes the switch exhaustive.
            if (considerDefaultExhaustiveForUnions && defaultCase != null) {
                return;
            }
            if (missingLiteralBranchTypes.length > 0) {
                context.report({
                    node: node.discriminant,
                    messageId: 'switchIsNotExhaustive',
                    data: {
                        missingBranches: missingLiteralBranchTypes
                            .map(missingType => tsutils.isTypeFlagSet(missingType, ts.TypeFlags.ESSymbolLike)
                            ? `typeof ${missingType.getSymbol()?.escapedName}`
                            : typeToString(missingType))
                            .join(' | '),
                    },
                    suggest: [
                        {
                            messageId: 'addMissingCases',
                            fix(fixer) {
                                return fixSwitch(fixer, node, missingLiteralBranchTypes, defaultCase, symbolName?.toString());
                            },
                        },
                    ],
                });
            }
        }
        function fixSwitch(fixer, node, missingBranchTypes, // null means default branch
        defaultCase, symbolName) {
            const lastCase = node.cases.length > 0 ? node.cases[node.cases.length - 1] : null;
            const caseIndent = lastCase
                ? ' '.repeat(lastCase.loc.start.column)
                : // If there are no cases, use indentation of the switch statement and
                    // leave it to the user to format it correctly.
                    ' '.repeat(node.loc.start.column);
            const missingCases = [];
            for (const missingBranchType of missingBranchTypes) {
                if (missingBranchType == null) {
                    missingCases.push(`default: { throw new Error('default case') }`);
                    continue;
                }
                const missingBranchName = missingBranchType.getSymbol()?.escapedName;
                let caseTest = tsutils.isTypeFlagSet(missingBranchType, ts.TypeFlags.ESSymbolLike)
                    ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        missingBranchName
                    : typeToString(missingBranchType);
                if (symbolName &&
                    (missingBranchName || missingBranchName === '') &&
                    (0, util_1.requiresQuoting)(missingBranchName.toString(), compilerOptions.target)) {
                    const escapedBranchName = missingBranchName
                        .replaceAll("'", "\\'")
                        .replaceAll('\n', '\\n')
                        .replaceAll('\r', '\\r');
                    caseTest = `${symbolName}['${escapedBranchName}']`;
                }
                missingCases.push(`case ${caseTest}: { throw new Error('Not implemented yet: ${caseTest
                    .replaceAll('\\', '\\\\')
                    .replaceAll("'", "\\'")} case') }`);
            }
            const fixString = missingCases
                .map(code => `${caseIndent}${code}`)
                .join('\n');
            if (lastCase) {
                if (defaultCase) {
                    const beforeFixString = missingCases
                        .map(code => `${code}\n${caseIndent}`)
                        .join('');
                    return fixer.insertTextBefore(defaultCase, beforeFixString);
                }
                return fixer.insertTextAfter(lastCase, `\n${fixString}`);
            }
            // There were no existing cases.
            const openingBrace = (0, util_1.nullThrows)(context.sourceCode.getTokenAfter(node.discriminant, util_1.isOpeningBraceToken), util_1.NullThrowsReasons.MissingToken('{', 'discriminant'));
            const closingBrace = (0, util_1.nullThrows)(context.sourceCode.getTokenAfter(node.discriminant, util_1.isClosingBraceToken), util_1.NullThrowsReasons.MissingToken('}', 'discriminant'));
            return fixer.replaceTextRange([openingBrace.range[0], closingBrace.range[1]], ['{', fixString, `${caseIndent}}`].join('\n'));
        }
        function checkSwitchUnnecessaryDefaultCase(switchMetadata) {
            if (allowDefaultCaseForExhaustiveSwitch) {
                return;
            }
            const { containsNonLiteralType, defaultCase, missingLiteralBranchTypes } = switchMetadata;
            if (missingLiteralBranchTypes.length === 0 &&
                defaultCase != null &&
                !containsNonLiteralType) {
                context.report({
                    node: defaultCase,
                    messageId: 'dangerousDefaultCase',
                });
            }
        }
        function checkSwitchNoUnionDefaultCase(node, switchMetadata) {
            if (!requireDefaultForNonUnion) {
                return;
            }
            const { containsNonLiteralType, defaultCase } = switchMetadata;
            if (containsNonLiteralType && defaultCase == null) {
                context.report({
                    node: node.discriminant,
                    messageId: 'switchIsNotExhaustive',
                    data: { missingBranches: 'default' },
                    suggest: [
                        {
                            messageId: 'addMissingCases',
                            fix(fixer) {
                                return fixSwitch(fixer, node, [null], defaultCase);
                            },
                        },
                    ],
                });
            }
        }
        return {
            SwitchStatement(node) {
                const switchMetadata = getSwitchMetadata(node);
                checkSwitchExhaustive(node, switchMetadata);
                checkSwitchUnnecessaryDefaultCase(switchMetadata);
                checkSwitchNoUnionDefaultCase(node, switchMetadata);
            },
        };
    },
});
function isTypeLiteralLikeType(type) {
    return tsutils.isTypeFlagSet(type, ts.TypeFlags.Literal |
        ts.TypeFlags.Undefined |
        ts.TypeFlags.Null |
        ts.TypeFlags.UniqueESSymbol);
}
/**
 * For example:
 *
 * - `"foo" | "bar"` is a type with all literal types.
 * - `"foo" | number` is a type that contains non-literal types.
 * - `"foo" & { bar: 1 }` is a type that contains non-literal types.
 *
 * Default cases are never superfluous in switches with non-literal types.
 */
function doesTypeContainNonLiteralType(type) {
    return tsutils
        .unionConstituents(type)
        .some(type => tsutils
        .intersectionConstituents(type)
        .every(subType => !isTypeLiteralLikeType(subType)));
}
//# sourceMappingURL=switch-exhaustiveness-check.js.map