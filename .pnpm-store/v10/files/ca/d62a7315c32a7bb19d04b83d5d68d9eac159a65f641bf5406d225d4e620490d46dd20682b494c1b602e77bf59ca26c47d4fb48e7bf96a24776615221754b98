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
exports.analyzeChain = analyzeChain;
const utils_1 = require("@typescript-eslint/utils");
const ts_api_utils_1 = require("ts-api-utils");
const ts = __importStar(require("typescript"));
const util_1 = require("../../util");
const checkNullishAndReport_1 = require("./checkNullishAndReport");
const compareNodes_1 = require("./compareNodes");
const gatherLogicalOperands_1 = require("./gatherLogicalOperands");
function includesType(parserServices, node, typeFlagIn) {
    const typeFlag = typeFlagIn | ts.TypeFlags.Any | ts.TypeFlags.Unknown;
    const types = (0, ts_api_utils_1.unionConstituents)(parserServices.getTypeAtLocation(node));
    for (const type of types) {
        if ((0, util_1.isTypeFlagSet)(type, typeFlag)) {
            return true;
        }
    }
    return false;
}
function isValidAndLastChainOperand(ComparisonValueType, comparisonType, parserServices) {
    const type = parserServices.getTypeAtLocation(ComparisonValueType);
    const ANY_UNKNOWN_FLAGS = ts.TypeFlags.Any | ts.TypeFlags.Unknown;
    const types = (0, ts_api_utils_1.unionConstituents)(type);
    switch (comparisonType) {
        case gatherLogicalOperands_1.ComparisonType.Equal: {
            const isNullish = types.some(t => (0, util_1.isTypeFlagSet)(t, ANY_UNKNOWN_FLAGS | ts.TypeFlags.Null | ts.TypeFlags.Undefined));
            return !isNullish;
        }
        case gatherLogicalOperands_1.ComparisonType.StrictEqual: {
            const isUndefined = types.some(t => (0, util_1.isTypeFlagSet)(t, ANY_UNKNOWN_FLAGS | ts.TypeFlags.Undefined));
            return !isUndefined;
        }
        case gatherLogicalOperands_1.ComparisonType.NotStrictEqual: {
            return types.every(t => (0, util_1.isTypeFlagSet)(t, ts.TypeFlags.Undefined));
        }
        case gatherLogicalOperands_1.ComparisonType.NotEqual: {
            return types.every(t => (0, util_1.isTypeFlagSet)(t, ts.TypeFlags.Undefined | ts.TypeFlags.Null));
        }
    }
}
function isValidOrLastChainOperand(ComparisonValueType, comparisonType, parserServices) {
    const type = parserServices.getTypeAtLocation(ComparisonValueType);
    const ANY_UNKNOWN_FLAGS = ts.TypeFlags.Any | ts.TypeFlags.Unknown;
    const types = (0, ts_api_utils_1.unionConstituents)(type);
    switch (comparisonType) {
        case gatherLogicalOperands_1.ComparisonType.NotEqual: {
            const isNullish = types.some(t => (0, util_1.isTypeFlagSet)(t, ANY_UNKNOWN_FLAGS | ts.TypeFlags.Null | ts.TypeFlags.Undefined));
            return !isNullish;
        }
        case gatherLogicalOperands_1.ComparisonType.NotStrictEqual: {
            const isUndefined = types.some(t => (0, util_1.isTypeFlagSet)(t, ANY_UNKNOWN_FLAGS | ts.TypeFlags.Undefined));
            return !isUndefined;
        }
        case gatherLogicalOperands_1.ComparisonType.Equal:
            return types.every(t => (0, util_1.isTypeFlagSet)(t, ts.TypeFlags.Undefined | ts.TypeFlags.Null));
        case gatherLogicalOperands_1.ComparisonType.StrictEqual:
            return types.every(t => (0, util_1.isTypeFlagSet)(t, ts.TypeFlags.Undefined));
    }
}
const analyzeAndChainOperand = (parserServices, operand, index, chain) => {
    switch (operand.comparisonType) {
        case gatherLogicalOperands_1.NullishComparisonType.Boolean:
        case gatherLogicalOperands_1.NullishComparisonType.NotEqualNullOrUndefined:
            return [operand];
        case gatherLogicalOperands_1.NullishComparisonType.NotStrictEqualNull: {
            // handle `x !== null && x !== undefined`
            const nextOperand = chain.at(index + 1);
            if (nextOperand?.comparisonType ===
                gatherLogicalOperands_1.NullishComparisonType.NotStrictEqualUndefined &&
                (0, compareNodes_1.compareNodes)(operand.comparedName, nextOperand.comparedName) ===
                    compareNodes_1.NodeComparisonResult.Equal) {
                return [operand, nextOperand];
            }
            if (nextOperand &&
                !includesType(parserServices, operand.comparedName, ts.TypeFlags.Undefined)) {
                // we know the next operand is not an `undefined` check and that this
                // operand includes `undefined` - which means that making this an
                // optional chain would change the runtime behavior of the expression
                return [operand];
            }
            return null;
        }
        case gatherLogicalOperands_1.NullishComparisonType.NotStrictEqualUndefined: {
            // handle `x !== undefined && x !== null`
            const nextOperand = chain.at(index + 1);
            if (nextOperand?.comparisonType ===
                gatherLogicalOperands_1.NullishComparisonType.NotStrictEqualNull &&
                (0, compareNodes_1.compareNodes)(operand.comparedName, nextOperand.comparedName) ===
                    compareNodes_1.NodeComparisonResult.Equal) {
                return [operand, nextOperand];
            }
            if (includesType(parserServices, operand.comparedName, ts.TypeFlags.Null)) {
                // we know the next operand is not a `null` check and that this
                // operand includes `null` - which means that making this an
                // optional chain would change the runtime behavior of the expression
                return null;
            }
            return [operand];
        }
        default:
            return null;
    }
};
const analyzeOrChainOperand = (parserServices, operand, index, chain) => {
    switch (operand.comparisonType) {
        case gatherLogicalOperands_1.NullishComparisonType.NotBoolean:
        case gatherLogicalOperands_1.NullishComparisonType.EqualNullOrUndefined:
            return [operand];
        case gatherLogicalOperands_1.NullishComparisonType.StrictEqualNull: {
            // handle `x === null || x === undefined`
            const nextOperand = chain.at(index + 1);
            if (nextOperand?.comparisonType ===
                gatherLogicalOperands_1.NullishComparisonType.StrictEqualUndefined &&
                (0, compareNodes_1.compareNodes)(operand.comparedName, nextOperand.comparedName) ===
                    compareNodes_1.NodeComparisonResult.Equal) {
                return [operand, nextOperand];
            }
            if (includesType(parserServices, operand.comparedName, ts.TypeFlags.Undefined)) {
                // we know the next operand is not an `undefined` check and that this
                // operand includes `undefined` - which means that making this an
                // optional chain would change the runtime behavior of the expression
                return null;
            }
            return [operand];
        }
        case gatherLogicalOperands_1.NullishComparisonType.StrictEqualUndefined: {
            // handle `x === undefined || x === null`
            const nextOperand = chain.at(index + 1);
            if (nextOperand?.comparisonType === gatherLogicalOperands_1.NullishComparisonType.StrictEqualNull &&
                (0, compareNodes_1.compareNodes)(operand.comparedName, nextOperand.comparedName) ===
                    compareNodes_1.NodeComparisonResult.Equal) {
                return [operand, nextOperand];
            }
            if (includesType(parserServices, operand.comparedName, ts.TypeFlags.Null)) {
                // we know the next operand is not a `null` check and that this
                // operand includes `null` - which means that making this an
                // optional chain would change the runtime behavior of the expression
                return null;
            }
            return [operand];
        }
        default:
            return null;
    }
};
const resolveOperandSubset = (previousOperand, lastChainOperand) => {
    const isNameSubset = (0, compareNodes_1.compareNodes)(previousOperand.comparedName, lastChainOperand.comparedName) === compareNodes_1.NodeComparisonResult.Subset;
    if (lastChainOperand.yoda !== gatherLogicalOperands_1.Yoda.Unknown) {
        return {
            comparedName: lastChainOperand.comparedName,
            comparisonValue: lastChainOperand.comparisonValue,
            isSubset: isNameSubset,
            isYoda: lastChainOperand.yoda === gatherLogicalOperands_1.Yoda.Yes,
        };
    }
    const isValueSubset = (0, compareNodes_1.compareNodes)(previousOperand.comparedName, lastChainOperand.comparisonValue) === compareNodes_1.NodeComparisonResult.Subset;
    if (isNameSubset && !isValueSubset) {
        return {
            comparedName: lastChainOperand.comparedName,
            comparisonValue: lastChainOperand.comparisonValue,
            isSubset: true,
            isYoda: false,
        };
    }
    if (!isNameSubset && isValueSubset) {
        return {
            comparedName: lastChainOperand.comparisonValue,
            comparisonValue: lastChainOperand.comparedName,
            isSubset: true,
            isYoda: true,
        };
    }
    return {
        comparedName: lastChainOperand.comparisonValue,
        comparisonValue: lastChainOperand.comparisonValue,
        isSubset: false,
        isYoda: true,
    };
};
/**
 * Returns the range that needs to be reported from the chain.
 * @param chain The chain of logical expressions.
 * @param boundary The boundary range that the range to report cannot fall outside.
 * @param sourceCode The source code to get tokens.
 * @returns The range to report.
 */
function getReportRange(chain, boundary, sourceCode) {
    const leftNode = chain[0].node;
    const rightNode = chain[chain.length - 1].node;
    let leftMost = (0, util_1.nullThrows)(sourceCode.getFirstToken(leftNode), util_1.NullThrowsReasons.MissingToken('any token', leftNode.type));
    let rightMost = (0, util_1.nullThrows)(sourceCode.getLastToken(rightNode), util_1.NullThrowsReasons.MissingToken('any token', rightNode.type));
    while (leftMost.range[0] > boundary[0]) {
        const token = sourceCode.getTokenBefore(leftMost);
        if (!token || !(0, util_1.isOpeningParenToken)(token) || token.range[0] < boundary[0]) {
            break;
        }
        leftMost = token;
    }
    while (rightMost.range[1] < boundary[1]) {
        const token = sourceCode.getTokenAfter(rightMost);
        if (!token || !(0, util_1.isClosingParenToken)(token) || token.range[1] > boundary[1]) {
            break;
        }
        rightMost = token;
    }
    return [leftMost.range[0], rightMost.range[1]];
}
function getReportDescriptor(sourceCode, parserServices, node, operator, options, subChain, lastChain) {
    const chain = lastChain ? [...subChain, lastChain] : subChain;
    const lastOperand = chain[chain.length - 1];
    let useSuggestionFixer;
    if (options.allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing ===
        true) {
        // user has opted-in to the unsafe behavior
        useSuggestionFixer = false;
    }
    // optional chain specifically will union `undefined` into the final type
    // so we need to make sure that there is at least one operand that includes
    // `undefined`, or else we're going to change the final type - which is
    // unsafe and might cause downstream type errors.
    else if (lastChain) {
        useSuggestionFixer = true;
    }
    else if (lastOperand.comparisonType === gatherLogicalOperands_1.NullishComparisonType.EqualNullOrUndefined ||
        lastOperand.comparisonType ===
            gatherLogicalOperands_1.NullishComparisonType.NotEqualNullOrUndefined ||
        lastOperand.comparisonType === gatherLogicalOperands_1.NullishComparisonType.StrictEqualUndefined ||
        lastOperand.comparisonType ===
            gatherLogicalOperands_1.NullishComparisonType.NotStrictEqualUndefined ||
        (operator === '||' &&
            lastOperand.comparisonType === gatherLogicalOperands_1.NullishComparisonType.NotBoolean)) {
        // we know the last operand is an equality check - so the change in types
        // DOES NOT matter and will not change the runtime result or cause a type
        // check error
        useSuggestionFixer = false;
    }
    else {
        useSuggestionFixer = true;
        for (const operand of chain) {
            if (includesType(parserServices, operand.node, ts.TypeFlags.Undefined)) {
                useSuggestionFixer = false;
                break;
            }
        }
        // TODO - we could further reduce the false-positive rate of this check by
        //        checking for cases where the change in types don't matter like
        //        the test location of an if/while/etc statement.
        //        but it's quite complex to do this without false-negatives, so
        //        for now we'll just be over-eager with our matching.
        //
        //        it's MUCH better to false-positive here and only provide a
        //        suggestion fixer, rather than false-negative and autofix to
        //        broken code.
    }
    // In its most naive form we could just slap `?.` for every single part of the
    // chain. However this would be undesirable because it'd create unnecessary
    // conditions in the user's code where there were none before - and it would
    // cause errors with rules like our `no-unnecessary-condition`.
    //
    // Instead we want to include the minimum number of `?.` required to correctly
    // unify the code into a single chain. Naively you might think that we can
    // just take the final operand add `?.` after the locations from the previous
    // operands - however this won't be correct either because earlier operands
    // can include a necessary `?.` that's not needed or included in a later
    // operand.
    //
    // So instead what we need to do is to start at the first operand and
    // iteratively diff it against the next operand, and add the difference to the
    // first operand.
    //
    // eg
    // `foo && foo.bar && foo.bar.baz?.bam && foo.bar.baz.bam()`
    // 1) `foo`
    // 2) diff(`foo`, `foo.bar`) = `.bar`
    // 3) result = `foo?.bar`
    // 4) diff(`foo.bar`, `foo.bar.baz?.bam`) = `.baz?.bam`
    // 5) result = `foo?.bar?.baz?.bam`
    // 6) diff(`foo.bar.baz?.bam`, `foo.bar.baz.bam()`) = `()`
    // 7) result = `foo?.bar?.baz?.bam?.()`
    const parts = [];
    for (const current of chain) {
        const nextOperand = flattenChainExpression(sourceCode, current.comparedName);
        const diff = nextOperand.slice(parts.length);
        if (diff.length > 0) {
            if (parts.length > 0) {
                // we need to make the first operand of the diff optional so it matches the
                // logic before merging
                // foo.bar && foo.bar.baz
                // diff = .baz
                // result = foo.bar?.baz
                diff[0].optional = true;
            }
            parts.push(...diff);
        }
    }
    let newCode = parts
        .map(part => {
        let str = '';
        if (part.optional) {
            str += '?.';
        }
        else {
            if (part.nonNull) {
                str += '!';
            }
            if (part.requiresDot) {
                str += '.';
            }
        }
        if (part.precedence !== util_1.OperatorPrecedence.Invalid &&
            part.precedence < util_1.OperatorPrecedence.Member) {
            str += `(${part.text})`;
        }
        else {
            str += part.text;
        }
        return str;
    })
        .join('');
    if (lastOperand.node.type === utils_1.AST_NODE_TYPES.BinaryExpression) {
        // retain the ending comparison for cases like
        // x && x.a != null
        // x && typeof x.a !== 'undefined'
        const operator = lastOperand.node.operator;
        const { left, right } = (() => {
            if (lastOperand.isYoda) {
                const unaryOperator = lastOperand.node.right.type === utils_1.AST_NODE_TYPES.UnaryExpression
                    ? `${lastOperand.node.right.operator} `
                    : '';
                return {
                    left: sourceCode.getText(lastOperand.node.left),
                    right: unaryOperator + newCode,
                };
            }
            const unaryOperator = lastOperand.node.left.type === utils_1.AST_NODE_TYPES.UnaryExpression
                ? `${lastOperand.node.left.operator} `
                : '';
            return {
                left: unaryOperator + newCode,
                right: sourceCode.getText(lastOperand.node.right),
            };
        })();
        newCode = `${left} ${operator} ${right}`;
    }
    else if (lastOperand.comparisonType === gatherLogicalOperands_1.NullishComparisonType.NotBoolean) {
        newCode = `!${newCode}`;
    }
    const reportRange = getReportRange(chain, node.range, sourceCode);
    const fix = fixer => {
        let unclosedParens = 0;
        const tokensInRange = sourceCode.getTokens(node, {
            filter: token => token.range[0] >= reportRange[0] && token.range[1] <= reportRange[1],
        });
        for (const token of tokensInRange) {
            if ((0, util_1.isOpeningParenToken)(token)) {
                unclosedParens++;
            }
            else if ((0, util_1.isClosingParenToken)(token)) {
                unclosedParens--;
            }
        }
        if (unclosedParens > 0 && reportRange[1] < node.range[1]) {
            const openParensOutsideRange = [];
            const unmatchedCloseParens = [];
            const tokensOutRange = sourceCode.getTokens(node, {
                filter: token => token.range[1] > reportRange[1],
            });
            for (const token of tokensOutRange) {
                if ((0, util_1.isOpeningParenToken)(token)) {
                    openParensOutsideRange.push(token.range[0]);
                }
                if ((0, util_1.isClosingParenToken)(token)) {
                    if (openParensOutsideRange.length > 0) {
                        openParensOutsideRange.pop();
                    }
                    else {
                        unmatchedCloseParens.push(token.range[0]);
                    }
                }
            }
            let leftCode = sourceCode.getText(node);
            unmatchedCloseParens.reverse();
            for (const unmatchedParenIndex of unmatchedCloseParens) {
                leftCode =
                    leftCode.slice(0, unmatchedParenIndex) +
                        leftCode.slice(unmatchedParenIndex + 1);
            }
            leftCode = leftCode.slice(reportRange[1]);
            return fixer.replaceTextRange(node.range, newCode + leftCode);
        }
        return fixer.replaceTextRange(reportRange, newCode);
    };
    return {
        loc: {
            end: sourceCode.getLocFromIndex(reportRange[1]),
            start: sourceCode.getLocFromIndex(reportRange[0]),
        },
        messageId: 'preferOptionalChain',
        ...(0, util_1.getFixOrSuggest)({
            fixOrSuggest: useSuggestionFixer ? 'suggest' : 'fix',
            suggestion: {
                fix,
                messageId: 'optionalChainSuggest',
            },
        }),
    };
    function flattenChainExpression(sourceCode, node) {
        switch (node.type) {
            case utils_1.AST_NODE_TYPES.ChainExpression:
                return flattenChainExpression(sourceCode, node.expression);
            case utils_1.AST_NODE_TYPES.CallExpression: {
                const argumentsText = (() => {
                    const closingParenToken = (0, util_1.nullThrows)(sourceCode.getLastToken(node), util_1.NullThrowsReasons.MissingToken('closing parenthesis', node.type));
                    const openingParenToken = (0, util_1.nullThrows)(sourceCode.getFirstTokenBetween(node.typeArguments ?? node.callee, closingParenToken, util_1.isOpeningParenToken), util_1.NullThrowsReasons.MissingToken('opening parenthesis', node.type));
                    return sourceCode.text.substring(openingParenToken.range[0], closingParenToken.range[1]);
                })();
                const typeArgumentsText = (() => {
                    if (node.typeArguments == null) {
                        return '';
                    }
                    return sourceCode.getText(node.typeArguments);
                })();
                return [
                    ...flattenChainExpression(sourceCode, node.callee),
                    {
                        nonNull: false,
                        optional: node.optional,
                        // no precedence for this
                        precedence: util_1.OperatorPrecedence.Invalid,
                        requiresDot: false,
                        text: typeArgumentsText + argumentsText,
                    },
                ];
            }
            case utils_1.AST_NODE_TYPES.MemberExpression: {
                const propertyText = sourceCode.getText(node.property);
                return [
                    ...flattenChainExpression(sourceCode, node.object),
                    {
                        nonNull: node.object.type === utils_1.AST_NODE_TYPES.TSNonNullExpression,
                        optional: node.optional,
                        precedence: node.computed
                            ? // computed is already wrapped in [] so no need to wrap in () as well
                                util_1.OperatorPrecedence.Invalid
                            : (0, util_1.getOperatorPrecedenceForNode)(node.property),
                        requiresDot: !node.computed,
                        text: node.computed ? `[${propertyText}]` : propertyText,
                    },
                ];
            }
            case utils_1.AST_NODE_TYPES.TSNonNullExpression:
                return flattenChainExpression(sourceCode, node.expression);
            default:
                return [
                    {
                        nonNull: false,
                        optional: false,
                        precedence: (0, util_1.getOperatorPrecedenceForNode)(node),
                        requiresDot: false,
                        text: sourceCode.getText(node),
                    },
                ];
        }
    }
}
function analyzeChain(context, parserServices, options, node, operator, chain, lastChainOperand) {
    // need at least 2 operands in a chain for it to be a chain
    if (chain.length + (lastChainOperand ? 1 : 0) <= 1 ||
        /* istanbul ignore next -- previous checks make this unreachable, but keep it for exhaustiveness check */
        operator === '??') {
        return;
    }
    const analyzeOperand = (() => {
        switch (operator) {
            case '&&':
                return analyzeAndChainOperand;
            case '||':
                return analyzeOrChainOperand;
        }
    })();
    // Things like x !== null && x !== undefined have two nodes, but they are
    // one logical unit here, so we'll allow them to be grouped.
    let subChain = [];
    let lastChain = undefined;
    const maybeReportThenReset = (newChainSeed) => {
        if (subChain.length + (lastChain ? 1 : 0) > 1) {
            const subChainFlat = subChain.flat();
            const maybeNullishNodes = lastChain
                ? subChainFlat.map(({ node }) => node)
                : subChainFlat.slice(0, -1).map(({ node }) => node);
            (0, checkNullishAndReport_1.checkNullishAndReport)(context, parserServices, options, maybeNullishNodes, getReportDescriptor(context.sourceCode, parserServices, node, operator, options, subChainFlat, lastChain));
        }
        // we've reached the end of a chain of logical expressions
        // i.e. the current operand doesn't belong to the previous chain.
        //
        // we don't want to throw away the current operand otherwise we will skip it
        // and that can cause us to miss chains. So instead we seed the new chain
        // with the current operand
        //
        // eg this means we can catch cases like:
        //     unrelated != null && foo != null && foo.bar != null;
        //     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ first "chain"
        //                          ^^^^^^^^^^^ newChainSeed
        //                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ second chain
        subChain = newChainSeed ? [newChainSeed] : [];
        lastChain = undefined;
    };
    for (let i = 0; i < chain.length; i += 1) {
        const lastOperand = subChain.flat().at(-1);
        const operand = chain[i];
        const validatedOperands = analyzeOperand(parserServices, operand, i, chain);
        if (!validatedOperands) {
            // TODO - #7170
            // check if the name is a superset/equal - if it is, then it likely
            // intended to be part of the chain and something we should include in the
            // report, eg
            //     foo == null || foo.bar;
            //     ^^^^^^^^^^^ valid OR chain
            //                    ^^^^^^^ invalid OR chain logical, but still part of
            //                            the chain for combination purposes
            if (lastOperand) {
                const comparisonResult = (0, compareNodes_1.compareNodes)(lastOperand.comparedName, operand.comparedName);
                switch (operand.comparisonType) {
                    case gatherLogicalOperands_1.NullishComparisonType.StrictEqualUndefined:
                    case gatherLogicalOperands_1.NullishComparisonType.NotStrictEqualUndefined: {
                        if (comparisonResult === compareNodes_1.NodeComparisonResult.Subset) {
                            lastChain = operand;
                        }
                        break;
                    }
                }
            }
            maybeReportThenReset();
            continue;
        }
        // in case multiple operands were consumed - make sure to correctly increment the index
        i += validatedOperands.length - 1;
        const currentOperand = validatedOperands[0];
        if (lastOperand) {
            const comparisonResult = (0, compareNodes_1.compareNodes)(lastOperand.comparedName, 
            // purposely inspect and push the last operand because the prior operands don't matter
            // this also means we won't false-positive in cases like
            // foo !== null && foo !== undefined
            validatedOperands[validatedOperands.length - 1].comparedName);
            if (comparisonResult === compareNodes_1.NodeComparisonResult.Subset) {
                // the operands are comparable, so we can continue searching
                subChain.push(currentOperand);
            }
            else if (comparisonResult === compareNodes_1.NodeComparisonResult.Invalid) {
                maybeReportThenReset(validatedOperands);
            }
            else {
                // purposely don't push this case because the node is a no-op and if
                // we consider it then we might report on things like
                // foo && foo
            }
        }
        else {
            subChain.push(currentOperand);
        }
    }
    const lastOperand = subChain.flat().at(-1);
    if (lastOperand && lastChainOperand) {
        const isValidLastChainOperand = operator === '&&'
            ? isValidAndLastChainOperand
            : isValidOrLastChainOperand;
        const { comparedName, comparisonValue, isSubset, isYoda } = resolveOperandSubset(lastOperand, lastChainOperand);
        if (isSubset &&
            isValidLastChainOperand(comparisonValue, lastChainOperand.comparisonType, parserServices)) {
            lastChain = {
                ...lastChainOperand,
                comparedName,
                comparisonValue,
                isYoda,
            };
        }
    }
    // check the leftovers
    maybeReportThenReset();
}
//# sourceMappingURL=analyzeChain.js.map