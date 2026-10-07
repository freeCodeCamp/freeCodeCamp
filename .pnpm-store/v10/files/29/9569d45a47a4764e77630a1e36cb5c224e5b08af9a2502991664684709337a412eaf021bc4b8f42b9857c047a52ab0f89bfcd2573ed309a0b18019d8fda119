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
exports.ComparisonType = exports.NullishComparisonType = exports.OperandValidity = exports.Yoda = void 0;
exports.gatherLogicalOperands = gatherLogicalOperands;
const utils_1 = require("@typescript-eslint/utils");
const ts_api_utils_1 = require("ts-api-utils");
const ts = __importStar(require("typescript"));
const util_1 = require("../../util");
var Yoda;
(function (Yoda) {
    Yoda[Yoda["Yes"] = 0] = "Yes";
    Yoda[Yoda["No"] = 1] = "No";
    Yoda[Yoda["Unknown"] = 2] = "Unknown";
})(Yoda || (exports.Yoda = Yoda = {}));
var ComparisonValueType;
(function (ComparisonValueType) {
    ComparisonValueType["Null"] = "Null";
    ComparisonValueType["Undefined"] = "Undefined";
    ComparisonValueType["UndefinedStringLiteral"] = "UndefinedStringLiteral";
})(ComparisonValueType || (ComparisonValueType = {}));
var OperandValidity;
(function (OperandValidity) {
    OperandValidity["Valid"] = "Valid";
    OperandValidity["Last"] = "Last";
    OperandValidity["Invalid"] = "Invalid";
})(OperandValidity || (exports.OperandValidity = OperandValidity = {}));
var NullishComparisonType;
(function (NullishComparisonType) {
    /** `x != null`, `x != undefined` */
    NullishComparisonType["NotEqualNullOrUndefined"] = "NotEqualNullOrUndefined";
    /** `x == null`, `x == undefined` */
    NullishComparisonType["EqualNullOrUndefined"] = "EqualNullOrUndefined";
    /** `x !== null` */
    NullishComparisonType["NotStrictEqualNull"] = "NotStrictEqualNull";
    /** `x === null` */
    NullishComparisonType["StrictEqualNull"] = "StrictEqualNull";
    /** `x !== undefined`, `typeof x !== 'undefined'` */
    NullishComparisonType["NotStrictEqualUndefined"] = "NotStrictEqualUndefined";
    /** `x === undefined`, `typeof x === 'undefined'` */
    NullishComparisonType["StrictEqualUndefined"] = "StrictEqualUndefined";
    /** `!x` */
    NullishComparisonType["NotBoolean"] = "NotBoolean";
    /** `x` */
    NullishComparisonType["Boolean"] = "Boolean";
})(NullishComparisonType || (exports.NullishComparisonType = NullishComparisonType = {}));
var ComparisonType;
(function (ComparisonType) {
    ComparisonType["NotEqual"] = "NotEqual";
    ComparisonType["Equal"] = "Equal";
    ComparisonType["NotStrictEqual"] = "NotStrictEqual";
    ComparisonType["StrictEqual"] = "StrictEqual";
})(ComparisonType || (exports.ComparisonType = ComparisonType = {}));
const NULLISH_FLAGS = ts.TypeFlags.Null | ts.TypeFlags.Undefined;
function isValidFalseBooleanCheckType(node, disallowFalseyLiteral, parserServices, options) {
    const type = parserServices.getTypeAtLocation(node);
    const types = (0, ts_api_utils_1.unionConstituents)(type);
    const primitiveAndObjectParts = types.flatMap(type => (0, ts_api_utils_1.intersectionConstituents)(type));
    if (disallowFalseyLiteral &&
        /*
        ```
        declare const x: false | {a: string};
        x && x.a;
        !x || x.a;
        ```
    
        We don't want to consider these two cases because the boolean expression
        narrows out the non-nullish falsy cases - so converting the chain to `x?.a`
        would introduce a build error
        */ (primitiveAndObjectParts.some(t => (0, ts_api_utils_1.isBooleanLiteralType)(t) && t.intrinsicName === 'false') ||
            primitiveAndObjectParts.some(t => (0, ts_api_utils_1.isStringLiteralType)(t) && t.value === '') ||
            primitiveAndObjectParts.some(t => (0, ts_api_utils_1.isNumberLiteralType)(t) && t.value === 0) ||
            primitiveAndObjectParts.some(t => (0, ts_api_utils_1.isBigIntLiteralType)(t) && t.value.base10Value === '0'))) {
        return false;
    }
    let allowedFlags = NULLISH_FLAGS | ts.TypeFlags.Object;
    if (options.checkAny === true) {
        allowedFlags |= ts.TypeFlags.Any;
    }
    if (options.checkUnknown === true) {
        allowedFlags |= ts.TypeFlags.Unknown;
    }
    if (options.checkString === true) {
        allowedFlags |= ts.TypeFlags.StringLike;
    }
    if (options.checkNumber === true) {
        allowedFlags |= ts.TypeFlags.NumberLike;
    }
    if (options.checkBoolean === true) {
        allowedFlags |= ts.TypeFlags.BooleanLike;
    }
    if (options.checkBigInt === true) {
        allowedFlags |= ts.TypeFlags.BigIntLike;
    }
    return primitiveAndObjectParts.every(t => (0, util_1.isTypeFlagSet)(t, allowedFlags));
}
function gatherLogicalOperands(node, parserServices, sourceCode, options) {
    const result = [];
    const { newlySeenLogicals, operands } = flattenLogicalOperands(node);
    for (const operand of operands) {
        const areMoreOperands = operand !== operands.at(-1);
        switch (operand.type) {
            case utils_1.AST_NODE_TYPES.BinaryExpression: {
                // check for "yoda" style logical: null != x
                const { comparedExpression, comparedValue, isYoda } = (() => {
                    // non-yoda checks are by far the most common, so check for them first
                    const comparedValueRight = getComparisonValueType(operand.right);
                    if (comparedValueRight) {
                        return {
                            comparedExpression: operand.left,
                            comparedValue: comparedValueRight,
                            isYoda: false,
                        };
                    }
                    return {
                        comparedExpression: operand.right,
                        comparedValue: getComparisonValueType(operand.left),
                        isYoda: true,
                    };
                })();
                if (comparedValue === ComparisonValueType.UndefinedStringLiteral) {
                    if (comparedExpression.type === utils_1.AST_NODE_TYPES.UnaryExpression &&
                        comparedExpression.operator === 'typeof') {
                        const argument = comparedExpression.argument;
                        if (argument.type === utils_1.AST_NODE_TYPES.Identifier &&
                            // typeof window === 'undefined'
                            (0, util_1.isReferenceToGlobalFunction)(argument.name, argument, sourceCode)) {
                            result.push({ type: OperandValidity.Invalid });
                            continue;
                        }
                        // typeof x.y === 'undefined'
                        result.push({
                            comparedName: comparedExpression.argument,
                            comparisonType: operand.operator.startsWith('!')
                                ? NullishComparisonType.NotStrictEqualUndefined
                                : NullishComparisonType.StrictEqualUndefined,
                            isYoda,
                            node: operand,
                            type: OperandValidity.Valid,
                        });
                        continue;
                    }
                    // y === 'undefined'
                    result.push({ type: OperandValidity.Invalid });
                    continue;
                }
                if (operand.operator.startsWith('!') !== (node.operator === '||')) {
                    switch (operand.operator) {
                        case '!=':
                        case '==':
                            if (comparedValue === ComparisonValueType.Null ||
                                comparedValue === ComparisonValueType.Undefined) {
                                // x == null, x == undefined
                                result.push({
                                    comparedName: comparedExpression,
                                    comparisonType: operand.operator.startsWith('!')
                                        ? NullishComparisonType.NotEqualNullOrUndefined
                                        : NullishComparisonType.EqualNullOrUndefined,
                                    isYoda,
                                    node: operand,
                                    type: OperandValidity.Valid,
                                });
                                continue;
                            }
                            break;
                        case '!==':
                        case '===': {
                            const comparedName = comparedExpression;
                            switch (comparedValue) {
                                case ComparisonValueType.Null:
                                    result.push({
                                        comparedName,
                                        comparisonType: operand.operator.startsWith('!')
                                            ? NullishComparisonType.NotStrictEqualNull
                                            : NullishComparisonType.StrictEqualNull,
                                        isYoda,
                                        node: operand,
                                        type: OperandValidity.Valid,
                                    });
                                    continue;
                                case ComparisonValueType.Undefined:
                                    result.push({
                                        comparedName,
                                        comparisonType: operand.operator.startsWith('!')
                                            ? NullishComparisonType.NotStrictEqualUndefined
                                            : NullishComparisonType.StrictEqualUndefined,
                                        isYoda,
                                        node: operand,
                                        type: OperandValidity.Valid,
                                    });
                                    continue;
                            }
                        }
                    }
                }
                // x == something :(
                // x === something :(
                // x != something :(
                // x !== something :(
                const binaryComparisonChain = getBinaryComparisonChain(operand);
                if (binaryComparisonChain) {
                    const { comparedName, comparedValue, yoda } = binaryComparisonChain;
                    switch (operand.operator) {
                        case '==':
                        case '===': {
                            const comparisonType = operand.operator === '=='
                                ? ComparisonType.Equal
                                : ComparisonType.StrictEqual;
                            result.push({
                                comparedName,
                                comparisonType,
                                comparisonValue: comparedValue,
                                node: operand,
                                type: OperandValidity.Last,
                                yoda,
                            });
                            continue;
                        }
                        case '!=':
                        case '!==': {
                            const comparisonType = operand.operator === '!='
                                ? ComparisonType.NotEqual
                                : ComparisonType.NotStrictEqual;
                            result.push({
                                comparedName,
                                comparisonType,
                                comparisonValue: comparedValue,
                                node: operand,
                                type: OperandValidity.Last,
                                yoda,
                            });
                            continue;
                        }
                    }
                }
                result.push({ type: OperandValidity.Invalid });
                continue;
            }
            case utils_1.AST_NODE_TYPES.UnaryExpression:
                if (operand.operator === '!' &&
                    (!areMoreOperands ||
                        isValidFalseBooleanCheckType(operand.argument, node.operator === '||', parserServices, options))) {
                    result.push({
                        comparedName: operand.argument,
                        comparisonType: NullishComparisonType.NotBoolean,
                        isYoda: false,
                        node: operand,
                        type: OperandValidity.Valid,
                    });
                    continue;
                }
                result.push({ type: OperandValidity.Invalid });
                continue;
            case utils_1.AST_NODE_TYPES.LogicalExpression:
                // explicitly ignore the mixed logical expression cases
                result.push({ type: OperandValidity.Invalid });
                continue;
            default:
                if (!areMoreOperands ||
                    isValidFalseBooleanCheckType(operand, node.operator === '&&', parserServices, options)) {
                    result.push({
                        comparedName: operand,
                        comparisonType: NullishComparisonType.Boolean,
                        isYoda: false,
                        node: operand,
                        type: OperandValidity.Valid,
                    });
                }
                else {
                    result.push({ type: OperandValidity.Invalid });
                }
                continue;
        }
    }
    return {
        newlySeenLogicals,
        operands: result,
    };
    /*
    The AST is always constructed such the first element is always the deepest element.
    I.e. for this code: `foo && foo.bar && foo.bar.baz && foo.bar.baz.buzz`
    The AST will look like this:
    {
      left: {
        left: {
          left: foo
          right: foo.bar
        }
        right: foo.bar.baz
      }
      right: foo.bar.baz.buzz
    }
  
    So given any logical expression, we can perform a depth-first traversal to get
    the operands in order.
  
    Note that this function purposely does not inspect mixed logical expressions
    like `foo || foo.bar && foo.bar.baz` - separate selector
    */
    function flattenLogicalOperands(node) {
        const operands = [];
        const newlySeenLogicals = new Set([node]);
        const stack = [node.right, node.left];
        let current;
        while ((current = stack.pop())) {
            if (current.type === utils_1.AST_NODE_TYPES.LogicalExpression &&
                current.operator === node.operator) {
                newlySeenLogicals.add(current);
                stack.push(current.right);
                stack.push(current.left);
            }
            else {
                operands.push(current);
            }
        }
        return {
            newlySeenLogicals,
            operands,
        };
    }
    function getComparisonValueType(node) {
        switch (node.type) {
            case utils_1.AST_NODE_TYPES.Literal:
                // eslint-disable-next-line eqeqeq, @typescript-eslint/internal/eqeq-nullish -- intentional exact comparison against null
                if (node.value === null && node.raw === 'null') {
                    return ComparisonValueType.Null;
                }
                if (node.value === 'undefined') {
                    return ComparisonValueType.UndefinedStringLiteral;
                }
                return null;
            case utils_1.AST_NODE_TYPES.Identifier:
                if (node.name === 'undefined') {
                    return ComparisonValueType.Undefined;
                }
                return null;
        }
        return null;
    }
    function isMemberBasedExpression(node) {
        if (node.type === utils_1.AST_NODE_TYPES.MemberExpression) {
            return true;
        }
        if (node.type === utils_1.AST_NODE_TYPES.CallExpression &&
            node.callee.type === utils_1.AST_NODE_TYPES.MemberExpression) {
            return true;
        }
        return false;
    }
    function getBinaryComparisonChain(node) {
        const { left, right } = node;
        const isLeftMemberExpression = isMemberBasedExpression(left);
        const isRightMemberExpression = isMemberBasedExpression(right);
        if (isLeftMemberExpression && !isRightMemberExpression) {
            const [comparedName, comparedValue] = [left, right];
            return {
                comparedName,
                comparedValue,
                yoda: Yoda.No,
            };
        }
        if (!isLeftMemberExpression && isRightMemberExpression) {
            const [comparedName, comparedValue] = [right, left];
            return {
                comparedName,
                comparedValue,
                yoda: Yoda.Yes,
            };
        }
        if (isLeftMemberExpression && isRightMemberExpression) {
            return {
                comparedName: left,
                comparedValue: right,
                yoda: Yoda.Unknown,
            };
        }
        return null;
    }
}
//# sourceMappingURL=gatherLogicalOperands.js.map