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
exports.default = (0, util_1.createRule)({
    name: 'no-generated-empty-object-type',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow type operations that resolve to the "empty object" type',
            recommended: 'strict',
            requiresTypeChecking: true,
        },
        messages: {
            noGeneratedEmptyObjectType: 'This type resolves to `{}`, the empty object type. This was likely not intentional.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        function isEmptyObjectType(type) {
            return (tsutils.isObjectType(type) &&
                !tsutils.isObjectFlagSet(type, ts.ObjectFlags.Class | ts.ObjectFlags.Interface) &&
                checker.getPropertiesOfType(type).length === 0 &&
                checker.getIndexInfosOfType(type).length === 0 &&
                type.getCallSignatures().length === 0 &&
                type.getConstructSignatures().length === 0 &&
                // Types still awaiting type arguments, such as `Record<T, unknown>`
                // inside a generic declaration, also have no members yet. Every
                // primitive is assignable to `{}`, so probing with more than one of
                // them rules those out: a mapped type whose keys are not resolved yet,
                // such as `{ [K in Keys<T>]: K }`, accepts `number` but not `string`.
                checker.isTypeAssignableTo(checker.getNumberType(), type) &&
                checker.isTypeAssignableTo(checker.getStringType(), type));
        }
        function containsEmptyObjectType(type) {
            return (isEmptyObjectType(type) ||
                (type.isUnion() && type.types.some(isEmptyObjectType)));
        }
        function checkNode(node) {
            if (containsEmptyObjectType(services.getTypeAtLocation(node))) {
                context.report({
                    node,
                    messageId: 'noGeneratedEmptyObjectType',
                });
            }
        }
        return {
            TSIntersectionType: checkNode,
            TSTypeReference(node) {
                if (node.typeArguments &&
                    node.parent.type !== utils_1.AST_NODE_TYPES.TSIntersectionType) {
                    checkNode(node);
                }
            },
        };
    },
});
//# sourceMappingURL=no-generated-empty-object-type.js.map