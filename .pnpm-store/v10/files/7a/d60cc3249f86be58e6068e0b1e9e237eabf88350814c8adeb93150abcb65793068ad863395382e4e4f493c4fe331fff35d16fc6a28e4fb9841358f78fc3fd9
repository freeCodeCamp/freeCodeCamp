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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.containsAllTypesByName = void 0;
const tsutils_1 = require("tsutils");
const ts = __importStar(require("typescript"));
const typeFlagUtils_1 = require("./typeFlagUtils");
/**
 * @param type Type being checked by name.
 * @param allowAny Whether to consider `any` and `unknown` to match.
 * @param allowedNames Symbol names checking on the type.
 * @param matchAnyInstead Whether to instead just check if any parts match, rather than all parts.
 * @returns Whether the type is, extends, or contains the allowed names (or all matches the allowed names, if mustMatchAll is true).
 */
function containsAllTypesByName(type, allowAny, allowedNames, matchAnyInstead = false) {
    if ((0, typeFlagUtils_1.isTypeFlagSet)(type, ts.TypeFlags.Any | ts.TypeFlags.Unknown)) {
        return !allowAny;
    }
    if ((0, tsutils_1.isTypeReference)(type)) {
        type = type.target;
    }
    const symbol = type.getSymbol();
    if (symbol && allowedNames.has(symbol.name)) {
        return true;
    }
    const predicate = (t) => containsAllTypesByName(t, allowAny, allowedNames, matchAnyInstead);
    if ((0, tsutils_1.isUnionOrIntersectionType)(type)) {
        return matchAnyInstead
            ? type.types.some(predicate)
            : type.types.every(predicate);
    }
    const bases = type.getBaseTypes();
    return (bases !== undefined &&
        (matchAnyInstead
            ? bases.some(predicate)
            : bases.length > 0 && bases.every(predicate)));
}
exports.containsAllTypesByName = containsAllTypesByName;
//# sourceMappingURL=containsAllTypesByName.js.map