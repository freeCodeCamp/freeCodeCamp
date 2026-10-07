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
exports.Awaitable = void 0;
exports.needsToBeAwaited = needsToBeAwaited;
const type_utils_1 = require("@typescript-eslint/type-utils");
const tsutils = __importStar(require("ts-api-utils"));
const getConstraintInfo_1 = require("./getConstraintInfo");
var Awaitable;
(function (Awaitable) {
    Awaitable[Awaitable["Always"] = 0] = "Always";
    Awaitable[Awaitable["Never"] = 1] = "Never";
    Awaitable[Awaitable["May"] = 2] = "May";
})(Awaitable || (exports.Awaitable = Awaitable = {}));
function needsToBeAwaited(checker, node, type) {
    const { constraintType, isTypeParameter } = (0, getConstraintInfo_1.getConstraintInfo)(checker, type);
    // unconstrained generic types should be treated as unknown
    if (isTypeParameter && constraintType == null) {
        return Awaitable.May;
    }
    // `any` and `unknown` types may need to be awaited
    if ((0, type_utils_1.isTypeAnyType)(constraintType) || (0, type_utils_1.isTypeUnknownType)(constraintType)) {
        return Awaitable.May;
    }
    // 'thenable' values should always be be awaited
    if (tsutils.isThenableType(checker, node, constraintType)) {
        return Awaitable.Always;
    }
    // anything else should not be awaited
    return Awaitable.Never;
}
//# sourceMappingURL=needsToBeAwaited.js.map