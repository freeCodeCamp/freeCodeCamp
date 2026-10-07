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
exports.getEnumLiterals = getEnumLiterals;
exports.getEnumTypes = getEnumTypes;
exports.isMismatchedEnumComparisonTypes = isMismatchedEnumComparisonTypes;
exports.getEnumKeyForLiteral = getEnumKeyForLiteral;
const tsutils = __importStar(require("ts-api-utils"));
const ts = __importStar(require("typescript"));
const util_1 = require("../../util");
/*
 * If passed an enum member, returns the type of the parent. Otherwise,
 * returns itself.
 *
 * For example:
 * - `Fruit` --> `Fruit`
 * - `Fruit.Apple` --> `Fruit`
 */
function getBaseEnumType(typeChecker, type) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const symbol = type.getSymbol();
    if (!tsutils.isSymbolFlagSet(symbol, ts.SymbolFlags.EnumMember)) {
        return type;
    }
    return typeChecker.getTypeAtLocation(symbol.valueDeclaration.parent);
}
/**
 * Retrieve only the Enum literals from a type. for example:
 * - 123 --> []
 * - {} --> []
 * - Fruit.Apple --> [Fruit.Apple]
 * - Fruit.Apple | Vegetable.Lettuce --> [Fruit.Apple, Vegetable.Lettuce]
 * - Fruit.Apple | Vegetable.Lettuce | 123 --> [Fruit.Apple, Vegetable.Lettuce]
 * - T extends Fruit --> [Fruit]
 */
function getEnumLiterals(type) {
    return tsutils
        .unionConstituents(type)
        .filter((subType) => (0, util_1.isTypeFlagSet)(subType, ts.TypeFlags.EnumLiteral));
}
/**
 * A type can have 0 or more enum types. For example:
 * - 123 --> []
 * - {} --> []
 * - Fruit.Apple --> [Fruit]
 * - Fruit.Apple | Vegetable.Lettuce --> [Fruit, Vegetable]
 * - Fruit.Apple | Vegetable.Lettuce | 123 --> [Fruit, Vegetable]
 * - T extends Fruit --> [Fruit]
 */
function getEnumTypes(typeChecker, type) {
    return getEnumLiterals(type).map(type => getBaseEnumType(typeChecker, type));
}
/**
 * @returns Whether two types compare unsafely because an enum value is being
 * compared against a non-enum value of the same primitive kind.
 */
function isMismatchedEnumComparisonTypes(typeChecker, leftType, rightType) {
    // Allow comparisons that don't have anything to do with enums:
    //
    // ```ts
    // 1 === 2;
    // ```
    const leftEnumTypes = getEnumTypes(typeChecker, leftType);
    const rightEnumTypes = new Set(getEnumTypes(typeChecker, rightType));
    if (leftEnumTypes.length === 0 && rightEnumTypes.size === 0) {
        return false;
    }
    // Allow comparisons that share an enum type:
    //
    // ```ts
    // Fruit.Apple === Fruit.Banana;
    // ```
    for (const leftEnumType of leftEnumTypes) {
        if (rightEnumTypes.has(leftEnumType)) {
            return false;
        }
    }
    // We need to split the type into the union type parts in order to find
    // valid enum comparisons like:
    //
    // ```ts
    // declare const something: Fruit | Vegetable;
    // something === Fruit.Apple;
    // ```
    const leftTypeParts = tsutils.unionConstituents(leftType);
    const rightTypeParts = tsutils.unionConstituents(rightType);
    // If a type exists in both sides, we consider this comparison safe:
    //
    // ```ts
    // declare const fruit: Fruit.Apple | 0;
    // fruit === 0;
    // ```
    for (const leftTypePart of leftTypeParts) {
        if (rightTypeParts.includes(leftTypePart)) {
            return false;
        }
    }
    return (typeViolates(leftTypeParts, rightType) ||
        typeViolates(rightTypeParts, leftType));
}
/**
 * @returns Whether the right type is an unsafe comparison against any left type.
 */
function typeViolates(leftTypeParts, rightType) {
    const leftEnumValueTypes = new Set(leftTypeParts.map(getEnumValueType));
    return ((leftEnumValueTypes.has(ts.TypeFlags.Number) && (0, util_1.isNumberLike)(rightType)) ||
        (leftEnumValueTypes.has(ts.TypeFlags.String) && (0, util_1.isStringLike)(rightType)));
}
/**
 * @returns What type a type's enum value is (number or string), if either.
 */
function getEnumValueType(type) {
    return tsutils.isTypeFlagSet(type, ts.TypeFlags.EnumLike)
        ? tsutils.isTypeFlagSet(type, ts.TypeFlags.NumberLiteral)
            ? ts.TypeFlags.Number
            : ts.TypeFlags.String
        : undefined;
}
/**
 * Returns the enum key that matches the given literal node, or null if none
 * match. For example:
 * ```ts
 * enum Fruit {
 *   Apple = 'apple',
 *   Banana = 'banana',
 * }
 *
 * getEnumKeyForLiteral([Fruit.Apple, Fruit.Banana], 'apple') --> 'Fruit.Apple'
 * getEnumKeyForLiteral([Fruit.Apple, Fruit.Banana], 'banana') --> 'Fruit.Banana'
 * getEnumKeyForLiteral([Fruit.Apple, Fruit.Banana], 'cherry') --> null
 * ```
 */
function getEnumKeyForLiteral(enumLiterals, literal) {
    for (const enumLiteral of enumLiterals) {
        if (enumLiteral.value === literal) {
            const { symbol } = enumLiteral;
            const memberDeclaration = symbol.valueDeclaration;
            const enumDeclaration = memberDeclaration.parent;
            const memberNameIdentifier = memberDeclaration.name;
            const enumName = enumDeclaration.name.text;
            switch (memberNameIdentifier.kind) {
                case ts.SyntaxKind.Identifier:
                    return `${enumName}.${memberNameIdentifier.text}`;
                case ts.SyntaxKind.StringLiteral: {
                    const memberName = memberNameIdentifier.text.replaceAll("'", "\\'");
                    return `${enumName}['${memberName}']`;
                }
                case ts.SyntaxKind.ComputedPropertyName:
                    return `${enumName}[${memberNameIdentifier.expression.getText()}]`;
                default:
                    break;
            }
        }
    }
    return null;
}
//# sourceMappingURL=shared.js.map