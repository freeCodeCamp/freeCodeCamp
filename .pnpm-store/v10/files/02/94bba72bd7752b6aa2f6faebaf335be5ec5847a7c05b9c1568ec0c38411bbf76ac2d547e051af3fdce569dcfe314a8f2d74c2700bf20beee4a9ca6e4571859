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
exports.isPossiblyTruthy = exports.isPossiblyFalsy = void 0;
const tsutils = __importStar(require("ts-api-utils"));
const ts = __importStar(require("typescript"));
const getValueOfLiteralType_1 = require("./getValueOfLiteralType");
// Truthiness utilities
const isTruthyLiteral = (type) => tsutils.isTrueLiteralType(type) ||
    (type.isLiteral() && !!(0, getValueOfLiteralType_1.getValueOfLiteralType)(type));
const isPossiblyFalsy = (type) => tsutils
    .unionConstituents(type)
    // Intersections like `string & {}` can also be possibly falsy,
    // requiring us to look into the intersection.
    .flatMap(type => tsutils.intersectionConstituents(type))
    // PossiblyFalsy flag includes literal values, so exclude ones that
    // are definitely truthy
    .filter(t => !isTruthyLiteral(t))
    .some(type => tsutils.isTypeFlagSet(type, ts.TypeFlags.PossiblyFalsy));
exports.isPossiblyFalsy = isPossiblyFalsy;
const isPossiblyTruthy = (type) => tsutils
    .unionConstituents(type)
    .map(type => tsutils.intersectionConstituents(type))
    .some(intersectionParts => 
// It is possible to define intersections that are always falsy,
// like `"" & { __brand: string }`.
intersectionParts.every(type => !tsutils.isFalsyType(type)));
exports.isPossiblyTruthy = isPossiblyTruthy;
//# sourceMappingURL=truthinessUtils.js.map