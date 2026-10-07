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
const utils_1 = require("@typescript-eslint/utils");
const tsutils = __importStar(require("ts-api-utils"));
const ts = __importStar(require("typescript"));
const util_1 = require("../util");
const rangeToLoc_1 = require("../util/rangeToLoc");
const evenNumOfBackslashesRegExp = /(?<!(?:[^\\]|^)(?:\\\\)*\\)/;
// '\\$' <- false
// '\\\\$' <- true
// '\\\\\\$' <- false
function endsWithUnescapedDollarSign(str) {
    return new RegExp(`${evenNumOfBackslashesRegExp.source}\\$$`).test(str);
}
exports.default = (0, util_1.createRule)({
    name: 'no-unnecessary-template-expression',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow unnecessary template expressions',
            recommended: 'strict',
            requiresTypeChecking: true,
        },
        fixable: 'code',
        messages: {
            noUnnecessaryTemplateExpression: 'Template literal expression is unnecessary and can be simplified.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        function isEnumMemberType(type) {
            return tsutils.typeConstituents(type).some(t => {
                const symbol = t.getSymbol();
                return !!(symbol?.valueDeclaration && ts.isEnumMember(symbol.valueDeclaration));
            });
        }
        const isLiteral = (0, util_1.isNodeOfType)(utils_1.TSESTree.AST_NODE_TYPES.Literal);
        function isTemplateLiteral(node) {
            return node.type === utils_1.AST_NODE_TYPES.TemplateLiteral;
        }
        function isInfinityIdentifier(node) {
            return (node.type === utils_1.AST_NODE_TYPES.Identifier && node.name === 'Infinity');
        }
        function isNaNIdentifier(node) {
            return node.type === utils_1.AST_NODE_TYPES.Identifier && node.name === 'NaN';
        }
        function isFixableIdentifier(node) {
            return ((0, util_1.isUndefinedIdentifier)(node) ||
                isInfinityIdentifier(node) ||
                isNaNIdentifier(node));
        }
        function hasCommentsBetweenQuasi(startQuasi, endQuasi) {
            const startToken = (0, util_1.nullThrows)(context.sourceCode.getTokenByRangeStart(startQuasi.range[0]), util_1.NullThrowsReasons.MissingToken('`${', 'opening template literal'));
            const endToken = (0, util_1.nullThrows)(context.sourceCode.getTokenByRangeStart(endQuasi.range[0]), util_1.NullThrowsReasons.MissingToken('}', 'closing template literal'));
            return context.sourceCode.commentsExistBetween(startToken, endToken);
        }
        function isTrivialInterpolation(node) {
            return (node.quasis.length === 2 &&
                node.quasis[0].value.raw === '' &&
                node.quasis[1].value.raw === '');
        }
        function getInterpolations(node) {
            if (node.type === utils_1.AST_NODE_TYPES.TemplateLiteral) {
                return node.expressions;
            }
            return node.types;
        }
        function getInterpolationInfos(node) {
            return getInterpolations(node).map((interpolation, index) => ({
                interpolation,
                nextQuasi: node.quasis[index + 1],
                prevQuasi: node.quasis[index],
            }));
        }
        function getLiteral(node) {
            const maybeLiteral = node.type === utils_1.AST_NODE_TYPES.TSLiteralType ? node.literal : node;
            return isLiteral(maybeLiteral) ? maybeLiteral : null;
        }
        function getTemplateLiteral(node) {
            const maybeTemplateLiteral = node.type === utils_1.AST_NODE_TYPES.TSLiteralType ? node.literal : node;
            return isTemplateLiteral(maybeTemplateLiteral)
                ? maybeTemplateLiteral
                : null;
        }
        function reportSingleInterpolation(node) {
            const interpolations = getInterpolations(node);
            context.report({
                loc: (0, rangeToLoc_1.rangeToLoc)(context.sourceCode, [
                    interpolations[0].range[0] - 2,
                    interpolations[0].range[1] + 1,
                ]),
                messageId: 'noUnnecessaryTemplateExpression',
                fix(fixer) {
                    const wrappingCode = (0, util_1.getMovedNodeCode)({
                        destinationNode: node,
                        nodeToMove: interpolations[0],
                        sourceCode: context.sourceCode,
                    });
                    return fixer.replaceText(node, wrappingCode);
                },
            });
        }
        function isUnnecessaryValueInterpolation({ interpolation, nextQuasi, prevQuasi, }) {
            if (hasCommentsBetweenQuasi(prevQuasi, nextQuasi)) {
                return false;
            }
            if (isFixableIdentifier(interpolation)) {
                return true;
            }
            if (isLiteral(interpolation)) {
                // allow trailing whitespace literal
                if (startsWithNewLine(nextQuasi.value.raw)) {
                    return !(typeof interpolation.value === 'string' &&
                        isWhitespace(interpolation.value));
                }
                return true;
            }
            if (isTemplateLiteral(interpolation)) {
                // allow trailing whitespace literal
                if (startsWithNewLine(nextQuasi.value.raw)) {
                    return !(interpolation.quasis.length === 1 &&
                        isWhitespace(interpolation.quasis[0].value.raw));
                }
                return true;
            }
            return false;
        }
        function isUnnecessaryTypeInterpolation({ interpolation, nextQuasi, prevQuasi, }) {
            if (hasCommentsBetweenQuasi(prevQuasi, nextQuasi)) {
                return false;
            }
            const literal = getLiteral(interpolation);
            if (literal) {
                // allow trailing whitespace literal
                if (startsWithNewLine(nextQuasi.value.raw)) {
                    return !(typeof literal.value === 'string' && isWhitespace(literal.value));
                }
                return true;
            }
            if (interpolation.type === utils_1.AST_NODE_TYPES.TSNullKeyword ||
                interpolation.type === utils_1.AST_NODE_TYPES.TSUndefinedKeyword) {
                return true;
            }
            const templateLiteral = getTemplateLiteral(interpolation);
            if (templateLiteral) {
                // allow trailing whitespace literal
                if (startsWithNewLine(nextQuasi.value.raw)) {
                    return !(templateLiteral.quasis.length === 1 &&
                        isWhitespace(templateLiteral.quasis[0].value.raw));
                }
                return true;
            }
            return false;
        }
        function getReportDescriptors(infos) {
            let nextCharacterIsOpeningCurlyBrace = false;
            const reportDescriptors = [];
            const reversedInfos = [...infos].reverse();
            for (const { interpolation, nextQuasi, prevQuasi } of reversedInfos) {
                const fixers = [];
                if (nextQuasi.value.raw !== '') {
                    nextCharacterIsOpeningCurlyBrace =
                        nextQuasi.value.raw.startsWith('{');
                }
                const literal = getLiteral(interpolation);
                const templateLiteral = getTemplateLiteral(interpolation);
                if (literal) {
                    let escapedValue = (typeof literal.value === 'string'
                        ? // The value is already a string, so we're removing quotes:
                            // "'va`lue'" -> "va`lue"
                            literal.raw.slice(1, -1)
                        : // The value may be one of number | bigint | boolean | RegExp | null.
                            // In regular expressions, we escape every backslash
                            String(literal.value).replaceAll('\\', '\\\\'))
                        // The string or RegExp may contain ` or ${.
                        // We want both of these to be escaped in the final template expression.
                        //
                        // A pair of backslashes means "escaped backslash", so backslashes
                        // from this pair won't escape ` or ${. Therefore, to escape these
                        // sequences in the resulting template expression, we need to escape
                        // all sequences that are preceded by an even number of backslashes.
                        //
                        // This RegExp does the following transformations:
                        // \` -> \`
                        // \\` -> \\\`
                        // \${ -> \${
                        // \\${ -> \\\${
                        .replaceAll(new RegExp(`${evenNumOfBackslashesRegExp.source}(\`|\\\${)`, 'g'), '\\$1');
                    // `...${'...$'}{...`
                    //           ^^^^
                    if (nextCharacterIsOpeningCurlyBrace &&
                        endsWithUnescapedDollarSign(escapedValue)) {
                        escapedValue = escapedValue.replaceAll(/\$$/g, '\\$');
                    }
                    if (escapedValue.length !== 0) {
                        nextCharacterIsOpeningCurlyBrace = escapedValue.startsWith('{');
                    }
                    fixers.push(fixer => [fixer.replaceText(literal, escapedValue)]);
                }
                else if (templateLiteral) {
                    // Since we iterate from the last expression to the first,
                    // a subsequent expression can tell the current expression
                    // that it starts with {.
                    //
                    // `... ${`... $`}${'{...'} ...`
                    //             ^     ^ subsequent expression starts with {
                    //             current expression ends with a dollar sign,
                    //             so '$' + '{' === '${' (bad news for us).
                    //             Let's escape the dollar sign at the end.
                    if (nextCharacterIsOpeningCurlyBrace &&
                        endsWithUnescapedDollarSign(templateLiteral.quasis[templateLiteral.quasis.length - 1].value
                            .raw)) {
                        fixers.push(fixer => [
                            fixer.replaceTextRange([templateLiteral.range[1] - 2, templateLiteral.range[1] - 2], '\\'),
                        ]);
                    }
                    if (templateLiteral.quasis.length === 1 &&
                        templateLiteral.quasis[0].value.raw.length !== 0) {
                        nextCharacterIsOpeningCurlyBrace =
                            templateLiteral.quasis[0].value.raw.startsWith('{');
                    }
                    // Remove the beginning and trailing backtick characters.
                    fixers.push(fixer => [
                        fixer.removeRange([
                            templateLiteral.range[0],
                            templateLiteral.range[0] + 1,
                        ]),
                        fixer.removeRange([
                            templateLiteral.range[1] - 1,
                            templateLiteral.range[1],
                        ]),
                    ]);
                }
                else {
                    nextCharacterIsOpeningCurlyBrace = false;
                }
                // `... $${'{...'} ...`
                //      ^^^^^
                if (nextCharacterIsOpeningCurlyBrace &&
                    endsWithUnescapedDollarSign(prevQuasi.value.raw)) {
                    fixers.push(fixer => [
                        fixer.replaceTextRange([prevQuasi.range[1] - 3, prevQuasi.range[1] - 2], '\\$'),
                    ]);
                }
                const warnLocStart = prevQuasi.range[1] - 2;
                const warnLocEnd = nextQuasi.range[0] + 1;
                reportDescriptors.push({
                    loc: (0, rangeToLoc_1.rangeToLoc)(context.sourceCode, [warnLocStart, warnLocEnd]),
                    messageId: 'noUnnecessaryTemplateExpression',
                    fix(fixer) {
                        return [
                            // Remove the quasis' parts that are related to the current expression.
                            fixer.removeRange([warnLocStart, interpolation.range[0]]),
                            fixer.removeRange([interpolation.range[1], warnLocEnd]),
                            ...fixers.flatMap(cb => cb(fixer)),
                        ];
                    },
                });
            }
            return reportDescriptors;
        }
        return {
            TemplateLiteral(node) {
                if (node.parent.type === utils_1.AST_NODE_TYPES.TaggedTemplateExpression) {
                    return;
                }
                if (isTrivialInterpolation(node) &&
                    !hasCommentsBetweenQuasi(node.quasis[0], node.quasis[1])) {
                    const { constraintType } = (0, util_1.getConstraintInfo)(checker, services.getTypeAtLocation(node.expressions[0]));
                    if (constraintType && (0, util_1.isStringLike)(constraintType)) {
                        reportSingleInterpolation(node);
                        return;
                    }
                }
                const infos = getInterpolationInfos(node).filter(isUnnecessaryValueInterpolation);
                for (const reportDescriptor of getReportDescriptors(infos)) {
                    context.report(reportDescriptor);
                }
            },
            TSTemplateLiteralType(node) {
                if (isTrivialInterpolation(node) &&
                    !hasCommentsBetweenQuasi(node.quasis[0], node.quasis[1])) {
                    const { constraintType, isTypeParameter } = (0, util_1.getConstraintInfo)(checker, services.getTypeAtLocation(node.types[0]));
                    if (constraintType &&
                        !isTypeParameter &&
                        (0, util_1.isStringLike)(constraintType) &&
                        !isEnumMemberType(constraintType)) {
                        reportSingleInterpolation(node);
                        return;
                    }
                }
                const infos = getInterpolationInfos(node).filter(isUnnecessaryTypeInterpolation);
                for (const reportDescriptor of getReportDescriptors(infos)) {
                    context.report(reportDescriptor);
                }
            },
        };
    },
});
function isWhitespace(x) {
    // allow empty string too since we went to allow
    // `      ${''}
    // `;
    //
    // in addition to
    // `${'        '}
    // `;
    //
    return /^\s*$/.test(x);
}
function startsWithNewLine(x) {
    return utils_1.ASTUtils.LINEBREAK_MATCHER.exec(x)?.index === 0;
}
//# sourceMappingURL=no-unnecessary-template-expression.js.map