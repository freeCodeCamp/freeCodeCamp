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
exports.findTruthinessAssertedArgument = findTruthinessAssertedArgument;
exports.findTypeGuardAssertedArgument = findTypeGuardAssertedArgument;
const utils_1 = require("@typescript-eslint/utils");
const ts = __importStar(require("typescript"));
/**
 * Inspect a call expression to see if it's a call to an assertion function.
 * If it is, return the node of the argument that is asserted.
 */
function findTruthinessAssertedArgument(services, node) {
    // If the call looks like `assert(expr1, expr2, ...c, d, e, f)`, then we can
    // only care if `expr1` or `expr2` is asserted, since anything that happens
    // within or after a spread argument is out of scope to reason about.
    const checkableArguments = [];
    for (const argument of node.arguments) {
        if (argument.type === utils_1.AST_NODE_TYPES.SpreadElement) {
            break;
        }
        checkableArguments.push(argument);
    }
    // nothing to do
    if (checkableArguments.length === 0) {
        return undefined;
    }
    const checker = services.program.getTypeChecker();
    const signature = services.getResolvedSignature(node);
    if (signature == null) {
        return undefined;
    }
    const firstTypePredicateResult = checker.getTypePredicateOfSignature(signature);
    if (firstTypePredicateResult == null) {
        return undefined;
    }
    const { kind, parameterIndex, type } = firstTypePredicateResult;
    if (!(kind === ts.TypePredicateKind.AssertsIdentifier && type == null)) {
        return undefined;
    }
    return checkableArguments.at(parameterIndex);
}
/**
 * Inspect a call expression to see if it's a call to an assertion function.
 * If it is, return the node of the argument that is asserted and other useful info.
 */
function findTypeGuardAssertedArgument(services, node) {
    // If the call looks like `assert(expr1, expr2, ...c, d, e, f)`, then we can
    // only care if `expr1` or `expr2` is asserted, since anything that happens
    // within or after a spread argument is out of scope to reason about.
    const checkableArguments = [];
    for (const argument of node.arguments) {
        if (argument.type === utils_1.AST_NODE_TYPES.SpreadElement) {
            break;
        }
        checkableArguments.push(argument);
    }
    // nothing to do
    if (checkableArguments.length === 0) {
        return undefined;
    }
    const checker = services.program.getTypeChecker();
    const callSignature = services.getResolvedSignature(node);
    if (callSignature == null) {
        return undefined;
    }
    const typePredicateInfo = checker.getTypePredicateOfSignature(callSignature);
    if (typePredicateInfo == null) {
        return undefined;
    }
    const { kind, parameterIndex, type } = typePredicateInfo;
    if (!((kind === ts.TypePredicateKind.AssertsIdentifier ||
        kind === ts.TypePredicateKind.Identifier) &&
        type != null)) {
        return undefined;
    }
    if (parameterIndex >= checkableArguments.length) {
        return undefined;
    }
    return {
        argument: checkableArguments[parameterIndex],
        asserts: kind === ts.TypePredicateKind.AssertsIdentifier,
        type,
    };
}
//# sourceMappingURL=assertionFunctionUtils.js.map