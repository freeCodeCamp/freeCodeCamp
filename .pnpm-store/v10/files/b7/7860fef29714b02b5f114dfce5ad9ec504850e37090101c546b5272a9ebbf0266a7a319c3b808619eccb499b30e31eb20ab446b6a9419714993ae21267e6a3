"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUnsafeAssignment = void 0;
const utils_1 = require("@typescript-eslint/utils");
const tsutils_1 = require("tsutils");
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
    var _a, _b;
    if ((0, predicates_1.isTypeAnyType)(type)) {
        // Allow assignment of any ==> unknown.
        if ((0, predicates_1.isTypeUnknownType)(receiver)) {
            return false;
        }
        if (!(0, predicates_1.isTypeAnyType)(receiver)) {
            return { sender: type, receiver };
        }
    }
    if ((0, tsutils_1.isTypeReference)(type) && (0, tsutils_1.isTypeReference)(receiver)) {
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
        if ((senderNode === null || senderNode === void 0 ? void 0 : senderNode.type) === utils_1.AST_NODE_TYPES.NewExpression &&
            senderNode.callee.type === utils_1.AST_NODE_TYPES.Identifier &&
            senderNode.callee.name === 'Map' &&
            senderNode.arguments.length === 0 &&
            senderNode.typeParameters == null) {
            // special case to handle `new Map()`
            // unfortunately Map's default empty constructor is typed to return `Map<any, any>` :(
            // https://github.com/typescript-eslint/typescript-eslint/issues/2109#issuecomment-634144396
            return false;
        }
        const typeArguments = (_a = type.typeArguments) !== null && _a !== void 0 ? _a : [];
        const receiverTypeArguments = (_b = receiver.typeArguments) !== null && _b !== void 0 ? _b : [];
        for (let i = 0; i < typeArguments.length; i += 1) {
            const arg = typeArguments[i];
            const receiverArg = receiverTypeArguments[i];
            const unsafe = isUnsafeAssignment(arg, receiverArg, checker, senderNode);
            if (unsafe) {
                return { sender: type, receiver };
            }
        }
        return false;
    }
    return false;
}
exports.isUnsafeAssignment = isUnsafeAssignment;
//# sourceMappingURL=isUnsafeAssignment.js.map