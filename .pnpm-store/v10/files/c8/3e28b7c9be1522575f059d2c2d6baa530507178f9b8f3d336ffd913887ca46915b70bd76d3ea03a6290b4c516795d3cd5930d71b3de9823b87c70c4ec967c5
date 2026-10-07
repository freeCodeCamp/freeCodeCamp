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
const getForStatementHeadLoc_1 = require("../util/getForStatementHeadLoc");
exports.default = (0, util_1.createRule)({
    name: 'no-for-in-array',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow iterating over an array with a for-in loop',
            recommended: 'recommended',
            requiresTypeChecking: true,
        },
        messages: {
            forInViolation: 'For-in loops over arrays skips holes, returns indices as strings, and may visit the prototype chain or other enumerable properties. Use a more robust iteration method such as for-of or array.forEach instead.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        return {
            ForInStatement(node) {
                const services = (0, util_1.getParserServices)(context);
                const checker = services.program.getTypeChecker();
                const type = (0, util_1.getConstrainedTypeAtLocation)(services, node.right);
                if (isArrayLike(checker, type)) {
                    context.report({
                        loc: (0, getForStatementHeadLoc_1.getForStatementHeadLoc)(context.sourceCode, node),
                        messageId: 'forInViolation',
                    });
                }
            },
        };
    },
});
function isArrayLike(checker, type) {
    return isTypeRecurser(type, t => t.getNumberIndexType() != null && hasArrayishLength(checker, t));
}
function hasArrayishLength(checker, type) {
    const lengthProperty = type.getProperty('length');
    if (lengthProperty == null) {
        return false;
    }
    return tsutils.isTypeFlagSet(checker.getTypeOfSymbol(lengthProperty), ts.TypeFlags.NumberLike);
}
function isTypeRecurser(type, predicate) {
    if (type.isUnionOrIntersection()) {
        return type.types.some(t => isTypeRecurser(t, predicate));
    }
    return predicate(type);
}
//# sourceMappingURL=no-for-in-array.js.map