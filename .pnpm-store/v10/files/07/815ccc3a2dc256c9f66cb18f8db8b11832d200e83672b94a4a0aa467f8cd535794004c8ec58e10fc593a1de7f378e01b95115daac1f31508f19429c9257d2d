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
exports.isUnsafeAssignment = isUnsafeAssignment;
const utils_1 = require("@typescript-eslint/utils");
const tsutils = __importStar(require("ts-api-utils"));
const predicates_1 = require("./predicates");
/**
 * Does a simple check to see if there is an any being assigned to a non-any type.
 *
 * This also checks generic positions to ensure there's no unsafe sub-assignments.
 * Note: in the case of generic positions, it makes the assumption that the two types are the same.
 *
 * @example See tests for examples
 *
 * @returns false if it's safe, or an object with the two types if it's unsafe
 */
function isUnsafeAssignment(type, receiver, checker, senderNode) {
    return isUnsafeAssignmentWorker(type, receiver, checker, senderNode, new Map());
}
function isUnsafeAssignmentWorker(type, receiver, checker, senderNode, visited) {
    if ((0, predicates_1.isTypeAnyType)(type)) {
        // Allow assignment of any ==> unknown.
        if ((0, predicates_1.isTypeUnknownType)(receiver)) {
            return false;
        }
        if (!(0, predicates_1.isTypeAnyType)(receiver)) {
            return { receiver, sender: type };
        }
    }
    const typeAlreadyVisited = visited.get(type);
    if (typeAlreadyVisited) {
        if (typeAlreadyVisited.has(receiver)) {
            return false;
        }
        typeAlreadyVisited.add(receiver);
    }
    else {
        visited.set(type, new Set([receiver]));
    }
    if (tsutils.isTypeReference(type) && tsutils.isTypeReference(receiver)) {
        // TODO - figure out how to handle cases like this,
        // where the types are assignable, but not the same type
        /*
        function foo(): ReadonlySet<number> { return new Set<any>(); }
    
        // and
    
        type Test<T> = { prop: T }
        type Test2 = { prop: string }
        declare const a: Test<any>;
        const b: Test2 = a;
        */
        if (type.target !== receiver.target) {
            // if the type references are different, assume safe, as we won't know how to compare the two types
            // the generic positions might not be equivalent for both types
            return false;
        }
        if (senderNode?.type === utils_1.AST_NODE_TYPES.NewExpression &&
            senderNode.callee.type === utils_1.AST_NODE_TYPES.Identifier &&
            senderNode.callee.name === 'Map' &&
            senderNode.arguments.length === 0 &&
            senderNode.typeArguments == null) {
            // special case to handle `new Map()`
            // unfortunately Map's default empty constructor is typed to return `Map<any, any>` :(
            // https://github.com/typescript-eslint/typescript-eslint/issues/2109#issuecomment-634144396
            return false;
        }
        const typeArguments = type.typeArguments ?? [];
        const receiverTypeArguments = receiver.typeArguments ?? [];
        for (let i = 0; i < typeArguments.length; i += 1) {
            const arg = typeArguments[i];
            const receiverArg = receiverTypeArguments[i];
            const unsafe = isUnsafeAssignmentWorker(arg, receiverArg, checker, senderNode, visited);
            if (unsafe) {
                return { receiver, sender: type };
            }
        }
        return false;
    }
    return false;
}
//# sourceMappingURL=isUnsafeAssignment.js.map