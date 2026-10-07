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
exports.isArrayMethodCallWithPredicate = isArrayMethodCallWithPredicate;
const type_utils_1 = require("@typescript-eslint/type-utils");
const utils_1 = require("@typescript-eslint/utils");
const tsutils = __importStar(require("ts-api-utils"));
const misc_1 = require("./misc");
const ARRAY_PREDICATE_FUNCTIONS = new Set([
    'every',
    'filter',
    'find',
    'findIndex',
    'findLast',
    'findLastIndex',
    'some',
]);
function isArrayMethodCallWithPredicate(context, services, node) {
    if (node.callee.type !== utils_1.AST_NODE_TYPES.MemberExpression) {
        return false;
    }
    const staticAccessValue = (0, misc_1.getStaticMemberAccessValue)(node.callee, context);
    if (!ARRAY_PREDICATE_FUNCTIONS.has(staticAccessValue)) {
        return false;
    }
    const checker = services.program.getTypeChecker();
    const type = (0, type_utils_1.getConstrainedTypeAtLocation)(services, node.callee.object);
    return tsutils
        .unionConstituents(type)
        .flatMap(part => tsutils.intersectionConstituents(part))
        .some(t => checker.isArrayType(t) || checker.isTupleType(t));
}
//# sourceMappingURL=isArrayMethodCallWithPredicate.js.map