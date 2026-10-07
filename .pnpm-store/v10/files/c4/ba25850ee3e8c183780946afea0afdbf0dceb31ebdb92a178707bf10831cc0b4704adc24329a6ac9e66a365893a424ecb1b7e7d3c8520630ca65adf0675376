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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expectTypeOf = void 0;
__exportStar(require("./branding"), exports); // backcompat, consider removing in next major version
__exportStar(require("./messages"), exports); // backcompat, consider removing in next major version
__exportStar(require("./overloads"), exports);
__exportStar(require("./utils"), exports); // backcompat, consider removing in next major version
const fn = () => true;
/**
 * Similar to Jest's `expect`, but with type-awareness.
 * Gives you access to a number of type-matchers that let you make assertions about the
 * form of a reference or generic type parameter.
 *
 * @example
 * ```ts
 * import { foo, bar } from '../foo'
 * import { expectTypeOf } from 'expect-type'
 *
 * test('foo types', () => {
 *   // make sure `foo` has type { a: number }
 *   expectTypeOf(foo).toMatchTypeOf({ a: 1 })
 *   expectTypeOf(foo).toHaveProperty('a').toBeNumber()
 *
 *   // make sure `bar` is a function taking a string:
 *   expectTypeOf(bar).parameter(0).toBeString()
 *   expectTypeOf(bar).returns.not.toBeAny()
 * })
 * ```
 *
 * @description
 * See the [full docs](https://npmjs.com/package/expect-type#documentation) for lots more examples.
 */
const expectTypeOf = (_actual) => {
    const nonFunctionProperties = [
        'parameters',
        'returns',
        'resolves',
        'not',
        'items',
        'constructorParameters',
        'thisParameter',
        'instance',
        'guards',
        'asserts',
        'branded',
    ];
    const obj = {
        /* eslint-disable @typescript-eslint/no-unsafe-assignment */
        toBeAny: fn,
        toBeUnknown: fn,
        toBeNever: fn,
        toBeFunction: fn,
        toBeObject: fn,
        toBeArray: fn,
        toBeString: fn,
        toBeNumber: fn,
        toBeBoolean: fn,
        toBeVoid: fn,
        toBeSymbol: fn,
        toBeNull: fn,
        toBeUndefined: fn,
        toBeNullable: fn,
        toBeBigInt: fn,
        toMatchTypeOf: fn,
        toEqualTypeOf: fn,
        toBeConstructibleWith: fn,
        toMatchObjectType: fn,
        toExtend: fn,
        map: exports.expectTypeOf,
        toBeCallableWith: exports.expectTypeOf,
        extract: exports.expectTypeOf,
        exclude: exports.expectTypeOf,
        pick: exports.expectTypeOf,
        omit: exports.expectTypeOf,
        toHaveProperty: exports.expectTypeOf,
        parameter: exports.expectTypeOf,
    };
    const getterProperties = nonFunctionProperties;
    getterProperties.forEach((prop) => Object.defineProperty(obj, prop, { get: () => (0, exports.expectTypeOf)({}) }));
    return obj;
};
exports.expectTypeOf = expectTypeOf;
