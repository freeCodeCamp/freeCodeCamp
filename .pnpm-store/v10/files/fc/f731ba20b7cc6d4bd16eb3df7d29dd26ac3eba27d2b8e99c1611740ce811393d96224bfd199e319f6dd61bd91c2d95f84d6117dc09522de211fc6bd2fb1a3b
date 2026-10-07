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
exports.isTypeBrandedLiteralLike = isTypeBrandedLiteralLike;
const tsutils = __importStar(require("ts-api-utils"));
const ts = __importStar(require("typescript"));
function isLiteralOrTaggablePrimitiveLike(type) {
    return (type.isLiteral() ||
        tsutils.isTypeFlagSet(type, ts.TypeFlags.BigInt |
            ts.TypeFlags.Number |
            ts.TypeFlags.String |
            ts.TypeFlags.TemplateLiteral));
}
function isObjectLiteralLike(type) {
    return (!type.getCallSignatures().length &&
        !type.getConstructSignatures().length &&
        tsutils.isObjectType(type));
}
function isTypeBrandedLiteral(type) {
    if (!type.isIntersection()) {
        return false;
    }
    let hadObjectLike = false;
    let hadPrimitiveLike = false;
    for (const constituent of type.types) {
        if (isObjectLiteralLike(constituent)) {
            hadPrimitiveLike = true;
        }
        else if (isLiteralOrTaggablePrimitiveLike(constituent)) {
            hadObjectLike = true;
        }
        else {
            return false;
        }
    }
    return hadPrimitiveLike && hadObjectLike;
}
function isTypeBrandedLiteralLike(type) {
    return type.isUnion()
        ? type.types.every(isTypeBrandedLiteral)
        : isTypeBrandedLiteral(type);
}
//# sourceMappingURL=isTypeBrandedLiteralLike.js.map