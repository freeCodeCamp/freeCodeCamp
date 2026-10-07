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
exports.getTypeFlags = getTypeFlags;
exports.isTypeFlagSet = isTypeFlagSet;
const tsutils = __importStar(require("ts-api-utils"));
const ts = __importStar(require("typescript"));
const ANY_OR_UNKNOWN = ts.TypeFlags.Any | ts.TypeFlags.Unknown;
/**
 * Gets all of the type flags in a type, iterating through unions automatically.
 */
function getTypeFlags(type) {
    // @ts-expect-error Since typescript 5.0, this is invalid, but uses 0 as the default value of TypeFlags.
    let flags = 0;
    for (const t of tsutils.unionConstituents(type)) {
        flags |= t.flags;
    }
    return flags;
}
/**
 * @param flagsToCheck The composition of one or more `ts.TypeFlags`.
 * @param isReceiver Whether the type is a receiving type (e.g. the type of a
 * called function's parameter).
 * @remarks
 * Note that if the type is a union, this function will decompose it into the
 * parts and get the flags of every union constituent. If this is not desired,
 * use the `isTypeFlag` function from tsutils.
 */
function isTypeFlagSet(type, flagsToCheck, 
/** @deprecated This params is not used and will be removed in the future.*/
isReceiver) {
    const flags = getTypeFlags(type);
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- not used
    if (isReceiver && flags & ANY_OR_UNKNOWN) {
        return true;
    }
    return (flags & flagsToCheck) !== 0;
}
//# sourceMappingURL=typeFlagUtils.js.map