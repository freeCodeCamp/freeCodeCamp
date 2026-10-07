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
exports.AnyType = void 0;
exports.discriminateAnyType = discriminateAnyType;
const tsutils = __importStar(require("ts-api-utils"));
const predicates_1 = require("./predicates");
var AnyType;
(function (AnyType) {
    AnyType[AnyType["Any"] = 0] = "Any";
    AnyType[AnyType["PromiseAny"] = 1] = "PromiseAny";
    AnyType[AnyType["AnyArray"] = 2] = "AnyArray";
    AnyType[AnyType["Safe"] = 3] = "Safe";
})(AnyType || (exports.AnyType = AnyType = {}));
/**
 * @returns `AnyType.Any` if the type is `any`, `AnyType.AnyArray` if the type is `any[]` or `readonly any[]`, `AnyType.PromiseAny` if the type is `Promise<any>`,
 *          otherwise it returns `AnyType.Safe`.
 */
function discriminateAnyType(type, checker, program, tsNode) {
    return discriminateAnyTypeWorker(type, checker, program, tsNode, new Set());
}
function discriminateAnyTypeWorker(type, checker, program, tsNode, visited) {
    if (visited.has(type)) {
        return AnyType.Safe;
    }
    visited.add(type);
    if ((0, predicates_1.isTypeAnyType)(type)) {
        return AnyType.Any;
    }
    if ((0, predicates_1.isTypeAnyArrayType)(type, checker)) {
        return AnyType.AnyArray;
    }
    for (const part of tsutils.typeConstituents(type)) {
        if (tsutils.isThenableType(checker, tsNode, part)) {
            const awaitedType = checker.getAwaitedType(part);
            if (awaitedType) {
                const awaitedAnyType = discriminateAnyTypeWorker(awaitedType, checker, program, tsNode, visited);
                if (awaitedAnyType === AnyType.Any) {
                    return AnyType.PromiseAny;
                }
            }
        }
    }
    return AnyType.Safe;
}
//# sourceMappingURL=discriminateAnyType.js.map