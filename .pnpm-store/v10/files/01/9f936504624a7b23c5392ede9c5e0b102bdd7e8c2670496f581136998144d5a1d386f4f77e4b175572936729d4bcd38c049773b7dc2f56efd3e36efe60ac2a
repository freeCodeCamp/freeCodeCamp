import * as ts from 'typescript';
/**
 * Retrieve only the Enum literals from a type. for example:
 * - 123 --> []
 * - {} --> []
 * - Fruit.Apple --> [Fruit.Apple]
 * - Fruit.Apple | Vegetable.Lettuce --> [Fruit.Apple, Vegetable.Lettuce]
 * - Fruit.Apple | Vegetable.Lettuce | 123 --> [Fruit.Apple, Vegetable.Lettuce]
 * - T extends Fruit --> [Fruit]
 */
export declare function getEnumLiterals(type: ts.Type): ts.LiteralType[];
/**
 * A type can have 0 or more enum types. For example:
 * - 123 --> []
 * - {} --> []
 * - Fruit.Apple --> [Fruit]
 * - Fruit.Apple | Vegetable.Lettuce --> [Fruit, Vegetable]
 * - Fruit.Apple | Vegetable.Lettuce | 123 --> [Fruit, Vegetable]
 * - T extends Fruit --> [Fruit]
 */
export declare function getEnumTypes(typeChecker: ts.TypeChecker, type: ts.Type): ts.Type[];
/**
 * @returns Whether two types compare unsafely because an enum value is being
 * compared against a non-enum value of the same primitive kind.
 */
export declare function isMismatchedEnumComparisonTypes(typeChecker: ts.TypeChecker, leftType: ts.Type, rightType: ts.Type): boolean;
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
export declare function getEnumKeyForLiteral(enumLiterals: ts.LiteralType[], literal: unknown): string | null;
