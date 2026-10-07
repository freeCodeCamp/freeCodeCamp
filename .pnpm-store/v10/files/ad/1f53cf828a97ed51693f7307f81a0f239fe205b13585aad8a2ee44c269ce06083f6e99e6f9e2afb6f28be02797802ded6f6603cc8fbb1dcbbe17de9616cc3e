import _ = require("../index");
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers, @typescript-eslint/no-unsafe-function-type
type GlobalFunction = Function;
declare module "../index" {
    type FunctionBase = GlobalFunction;
    interface LoDashStatic {
        /**
         * Casts value as an array if it’s not one.
         *
         * @param value The value to inspect.
         * @return Returns the cast array.
         */
        castArray<T>(value?: Many<T>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.castArray
         */
        castArray(): Collection<T>;
    }
    interface String {
        /**
         * @see _.castArray
         */
        castArray(): Collection<string>;
    }
    interface Object<T> {
        /**
         * @see _.castArray
         */
        castArray(): Collection<T>;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.castArray
         */
        castArray(): Collection<T>;
    }
    interface Primitive<T> {
        /**
         * @see _.castArray
         */
        castArray(): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.castArray
         */
        castArray(): CollectionChain<T>;
    }
    interface StringChain {
        /**
         * @see _.castArray
         */
        castArray(): CollectionChain<string>;
    }
    interface StringNullableChain {
        /**
         * @see _.castArray
         */
        castArray(): CollectionChain<string | undefined>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.castArray
         */
        castArray(): CollectionChain<T>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.castArray
         */
        castArray(): CollectionChain<T>;
    }
    interface PrimitiveChain<T> {
        /**
         * @see _.castArray
         */
        castArray(): CollectionChain<T>;
    }

    interface LoDashStatic {
        /**
         * Creates a shallow clone of value.
         *
         * Note: This method is loosely based on the structured clone algorithm and supports cloning arrays,
         * array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings, symbols,
         * and typed arrays. The own enumerable properties of arguments objects are cloned as plain objects. An empty
         * object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps.
         *
         * @param value The value to clone.
         * @return Returns the cloned value.
         */
        clone<T>(value: T): T;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.clone
         */
        clone(): TValue;
        /**
         * @see _.cloneDeep
         */
        cloneDeep(): TValue;
        /**
         * @see _.cloneDeepWith
         */
        cloneDeepWith(customizer: CloneDeepWithCustomizer<TValue>): any;
        /**
         * @see _.cloneDeepWith
         */
        cloneDeepWith(): TValue;
        /**
         * @see _.cloneWith
         */
        cloneWith<TResult extends object | string | number | boolean | null>(customizer: CloneWithCustomizer<TValue, TResult>): TResult;
        /**
         * @see _.cloneWith
         */
        cloneWith<TResult>(customizer: CloneWithCustomizer<TValue, TResult | undefined>): TResult | TValue;
        /**
         * @see _.cloneWith
         */
        cloneWith(): TValue;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.clone
         */
        clone(): this;
        /**
         * @see _.cloneDeep
         */
        cloneDeep(): this;
        /**
         * @see _.cloneDeepWith
         */
        cloneDeepWith(customizer: CloneDeepWithCustomizer<TValue>): LoDashExplicitWrapper<any>;
        /**
         * @see _.cloneDeepWith
         */
        cloneDeepWith(): this;
        /**
         * @see _.cloneWith
         */
        cloneWith<TResult extends object | string | number | boolean | null>(customizer: CloneWithCustomizer<TValue, TResult>): ExpChain<TResult>;
        /**
         * @see _.cloneWith
         */
        cloneWith<TResult>(customizer: CloneWithCustomizer<TValue, TResult | undefined>): ExpChain<TResult | TValue>;
        /**
         * @see _.cloneWith
         */
        cloneWith(): this;
    }

    interface LoDashStatic {
        /**
         * This method is like _.clone except that it recursively clones value.
         *
         * @param value The value to recursively clone.
         * @return Returns the deep cloned value.
         */
        cloneDeep<T>(value: T): T;
    }
    type CloneDeepWithCustomizer<TObject> = (value: any, key: number | string | undefined, object: TObject | undefined, stack: any) => any;
    interface LoDashStatic {
        /**
         * This method is like _.cloneWith except that it recursively clones value.
         *
         * @param value The value to recursively clone.
         * @param customizer The function to customize cloning.
         * @return Returns the deep cloned value.
         */
        cloneDeepWith<T>(value: T, customizer: CloneDeepWithCustomizer<T>): any;
        /**
         * @see _.cloneDeepWith
         */
        cloneDeepWith<T>(value: T): T;
    }
    type CloneWithCustomizer<TValue, TResult> = (value: TValue, key: number | string | undefined, object: any, stack: any) => TResult;
    interface LoDashStatic {
        /**
         * This method is like _.clone except that it accepts customizer which is invoked to produce the cloned value.
         * If customizer returns undefined cloning is handled by the method instead.
         *
         * @param value The value to clone.
         * @param customizer The function to customize cloning.
         * @return Returns the cloned value.
         */
        cloneWith<T, TResult extends object | string | number | boolean | null>(value: T, customizer: CloneWithCustomizer<T, TResult>): TResult;
        /**
         * @see _.cloneWith
         */
        cloneWith<T, TResult>(value: T, customizer: CloneWithCustomizer<T, TResult | undefined>): TResult | T;
        /**
         * @see _.cloneWith
         */
        cloneWith<T>(value: T): T;
    }
    interface LoDashStatic {
        /**
         * Checks if object conforms to source by invoking the predicate properties of source with the
         * corresponding property values of object.
         *
         * Note: This method is equivalent to _.conforms when source is partially applied.
         */
        conformsTo<T>(object: T, source: ConformsPredicateObject<T>): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.conformsTo
         */
        conformsTo(source: ConformsPredicateObject<TValue>): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.conformsTo
         */
        conformsTo(source: ConformsPredicateObject<TValue>): PrimitiveChain<boolean>;
    }
    type CondPairNullary<R> = [() => boolean, () => R];
    type CondPairUnary<T, R> = [(val: T) => boolean, (val: T) => R];
    interface LoDashStatic {
        /**
         * Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * comparison between two values to determine if they are equivalent.
         *
         * @category Lang
         * @param value The value to compare.
         * @param other The other value to compare.
         * @returns Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * var object = { 'user': 'fred' };
         * var other = { 'user': 'fred' };
         *
         * _.eq(object, object);
         * // => true
         *
         * _.eq(object, other);
         * // => false
         *
         * _.eq('a', 'a');
         * // => true
         *
         * _.eq('a', Object('a'));
         * // => false
         *
         * _.eq(NaN, NaN);
         * // => true
         */
        eq(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.eq
         */
        eq(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.eq
         */
        eq(other: any): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is greater than other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is greater than other, else false.
         */
        gt(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.gt
         */
        gt(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.gt
         */
        gt(other: any): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is greater than or equal to other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is greater than or equal to other, else false.
         */
        gte(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.gte
         */
        gte(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.gte
         */
        gte(other: any): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is classified as an arguments object.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isArguments(value?: any): value is IArguments;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isArguments
         */
        isArguments(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isArguments
         */
        isArguments(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is classified as an Array object.
         * @param value The value to check.
         *
         * @return Returns true if value is correctly classified, else false.
         */
        isArray(value?: any): value is any[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isArray
         */
        isArray(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isArray
         */
        isArray(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is classified as an ArrayBuffer object.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isArrayBuffer(value?: any): value is ArrayBuffer;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isArrayBuffer
         */
        isArrayBuffer(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isArrayBuffer
         */
        isArrayBuffer(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if `value` is array-like. A value is considered array-like if it's
         * not a function and has a `value.length` that's an integer greater than or
         * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
         *
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is array-like, else `false`.
         * @example
         *
         * _.isArrayLike([1, 2, 3]);
         * // => true
         *
         * _.isArrayLike(document.body.children);
         * // => true
         *
         * _.isArrayLike('abc');
         * // => true
         *
         * _.isArrayLike(_.noop);
         * // => false
         */
        isArrayLike<T extends { __lodashAnyHack: any }>(t: T): boolean;
        /**
         * @see _.isArrayLike
         */
        isArrayLike(value: ((...args: any[]) => any) | null | undefined): value is never;
        /**
         * @see _.isArrayLike
         */
        isArrayLike(value: any): value is { length: number };
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isArrayLike
         */
        isArrayLike(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isArrayLike
         */
        isArrayLike(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * This method is like `_.isArrayLike` except that it also checks if `value`
         * is an object.
         *
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is an array-like object, else `false`.
         * @example
         *
         * _.isArrayLikeObject([1, 2, 3]);
         * // => true
         *
         * _.isArrayLikeObject(document.body.children);
         * // => true
         *
         * _.isArrayLikeObject('abc');
         * // => false
         *
         * _.isArrayLikeObject(_.noop);
         * // => false
         */
        isArrayLikeObject<T extends { __lodashAnyHack: any }>(value: T): boolean;
        /**
         * @see _.isArrayLikeObject
         */
        isArrayLikeObject(value: ((...args: any[]) => any) | FunctionBase | string | boolean | number | null | undefined): value is never;
        /**
         * @see _.isArrayLikeObject
         */
        isArrayLikeObject(value: any): value is object & { length: number };
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isArrayLikeObject
         */
        isArrayLikeObject(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isArrayLikeObject
         */
        isArrayLikeObject(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is classified as a boolean primitive or object.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isBoolean(value?: any): value is boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isBoolean
         */
        isBoolean(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isBoolean
         */
        isBoolean(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is a buffer.
         *
         * @param value The value to check.
         * @return Returns true if value is a buffer, else false.
         */
        isBuffer(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isBuffer
         */
        isBuffer(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isBuffer
         */
        isBuffer(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is classified as a Date object.
         * @param value The value to check.
         *
         * @return Returns true if value is correctly classified, else false.
         */
        isDate(value?: any): value is Date;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isDate
         */
        isDate(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isDate
         */
        isDate(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is a DOM element.
         *
         * @param value The value to check.
         * @return Returns true if value is a DOM element, else false.
         */
        isElement(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isElement
         */
        isElement(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isElement
         */
        isElement(): PrimitiveChain<boolean>;
    }

    type EmptyObject<T> = { [K in keyof T]?: never };
    type EmptyObjectOf<T> = EmptyObject<T> extends T ? EmptyObject<T> : never;
    interface LoDashStatic {
        /**
         * Checks if value is empty. A value is considered empty unless it’s an arguments object, array, string, or
         * jQuery-like collection with a length greater than 0 or an object with own enumerable properties.
         *
         * @param value The value to inspect.
         * @return Returns true if value is empty, else false.
         */
        isEmpty<T extends { __trapAny: any }>(value?: T): boolean;
        isEmpty(value: string): value is '';
        isEmpty(value: Map<any, any> | Set<any> | List<any> | null | undefined): boolean;
        isEmpty(value: object): boolean;
        isEmpty<T extends object>(value: T | null | undefined): value is EmptyObjectOf<T> | null | undefined;
        isEmpty(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isEmpty
         */
        isEmpty(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isEmpty
         */
        isEmpty(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Performs a deep comparison between two values to determine if they are
         * equivalent.
         *
         * **Note:** This method supports comparing arrays, array buffers, booleans,
         * date objects, error objects, maps, numbers, `Object` objects, regexes,
         * sets, strings, symbols, and typed arrays. `Object` objects are compared
         * by their own, not inherited, enumerable properties. Functions and DOM
         * nodes are **not** supported.
         *
         * @category Lang
         * @param value The value to compare.
         * @param other The other value to compare.
         * @returns Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * var object = { 'user': 'fred' };
         * var other = { 'user': 'fred' };
         *
         * _.isEqual(object, other);
         * // => true
         *
         * object === other;
         * // => false
         */
        isEqual(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isEqual
         */
        isEqual(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isEqual
         */
        isEqual(other: any): PrimitiveChain<boolean>;
    }

    type IsEqualCustomizer = (value: any, other: any, indexOrKey: PropertyName | undefined, parent: any, otherParent: any, stack: any) => boolean | undefined;
    interface LoDashStatic {
        /**
         * This method is like `_.isEqual` except that it accepts `customizer` which is
         * invoked to compare values. If `customizer` returns `undefined` comparisons are
         * handled by the method instead. The `customizer` is invoked with up to seven arguments:
         * (objValue, othValue [, index|key, object, other, stack]).
         *
         * @category Lang
         * @param value The value to compare.
         * @param other The other value to compare.
         * @param [customizer] The function to customize comparisons.
         * @returns Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, othValue) {
         *   if (isGreeting(objValue) && isGreeting(othValue)) {
         *     return true;
         *   }
         * }
         *
         * var array = ['hello', 'goodbye'];
         * var other = ['hi', 'goodbye'];
         *
         * _.isEqualWith(array, other, customizer);
         * // => true
         */
        isEqualWith(value: any, other: any, customizer?: IsEqualCustomizer): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isEqualWith
         */
        isEqualWith(other: any, customizer?: IsEqualCustomizer): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isEqualWith
         */
        isEqualWith(other: any, customizer?: IsEqualCustomizer): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is an Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, or URIError
         * object.
         *
         * @param value The value to check.
         * @return Returns true if value is an error object, else false.
         */
        isError(value: any): value is Error;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isError
         */
        isError(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isError
         */
        isError(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is a finite primitive number.
         *
         * Note: This method is based on Number.isFinite.
         *
         * @param value The value to check.
         * @return Returns true if value is a finite number, else false.
         */
        isFinite(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isFinite
         */
        isFinite(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isFinite
         */
        isFinite(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is a callable function.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isFunction(value: any): value is (...args: any[]) => any;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isFunction
         */
        isFunction(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isFunction
         */
        isFunction(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if `value` is an integer.
         *
         * **Note:** This method is based on [`Number.isInteger`](https://mdn.io/Number/isInteger).
         *
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is an integer, else `false`.
         * @example
         *
         * _.isInteger(3);
         * // => true
         *
         * _.isInteger(Number.MIN_VALUE);
         * // => false
         *
         * _.isInteger(Infinity);
         * // => false
         *
         * _.isInteger('3');
         * // => false
         */
        isInteger(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isInteger
         */
        isInteger(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isInteger
         */
        isInteger(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if `value` is a valid array-like length.
         *
         * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
         *
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is a valid length, else `false`.
         * @example
         *
         * _.isLength(3);
         * // => true
         *
         * _.isLength(Number.MIN_VALUE);
         * // => false
         *
         * _.isLength(Infinity);
         * // => false
         *
         * _.isLength('3');
         * // => false
         */
        isLength(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isLength
         */
        isLength(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isLength
         */
        isLength(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is classified as a Map object.
         *
         * @param value The value to check.
         * @returns Returns true if value is correctly classified, else false.
         */
        isMap(value?: any): value is Map<any, any>;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isMap
         */
        isMap(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isMap
         */
        isMap(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Performs a deep comparison between `object` and `source` to determine if
         * `object` contains equivalent property values.
         *
         * **Note:** This method supports comparing the same values as `_.isEqual`.
         *
         * @category Lang
         * @param object The object to inspect.
         * @param source The object of property values to match.
         * @returns Returns `true` if `object` is a match, else `false`.
         * @example
         *
         * var object = { 'user': 'fred', 'age': 40 };
         *
         * _.isMatch(object, { 'age': 40 });
         * // => true
         *
         * _.isMatch(object, { 'age': 36 });
         * // => false
         */
        isMatch(object: object, source: object): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isMatch
         */
        isMatch(source: object): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isMatch
         */
        isMatch(source: object): PrimitiveChain<boolean>;
    }

    type isMatchWithCustomizer = (value: any, other: any, indexOrKey: PropertyName, object: object, source: object) => boolean | undefined;
    interface LoDashStatic {
        /**
         * This method is like `_.isMatch` except that it accepts `customizer` which
         * is invoked to compare values. If `customizer` returns `undefined` comparisons
         * are handled by the method instead. The `customizer` is invoked with three
         * arguments: (objValue, srcValue, index|key, object, source).
         *
         * @category Lang
         * @param object The object to inspect.
         * @param source The object of property values to match.
         * @param [customizer] The function to customize comparisons.
         * @returns Returns `true` if `object` is a match, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, srcValue) {
         *   if (isGreeting(objValue) && isGreeting(srcValue)) {
         *     return true;
         *   }
         * }
         *
         * var object = { 'greeting': 'hello' };
         * var source = { 'greeting': 'hi' };
         *
         * _.isMatchWith(object, source, customizer);
         * // => true
         */
        isMatchWith(object: object, source: object, customizer: isMatchWithCustomizer): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isMatchWith
         */
        isMatchWith(source: object, customizer: isMatchWithCustomizer): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isMatchWith
         */
        isMatchWith(source: object, customizer: isMatchWithCustomizer): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is NaN.
         *
         * Note: This method is not the same as isNaN which returns true for undefined and other non-numeric values.
         *
         * @param value The value to check.
         * @return Returns true if value is NaN, else false.
         */
        isNaN(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isNaN
         */
        isNaN(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isNaN
         */
        isNaN(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is a native function.
         * @param value The value to check.
         *
         * @return Returns true if value is a native function, else false.
         */
        isNative(value: any): value is (...args: any[]) => any;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isNative
         */
        isNative(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isNative
         */
        isNative(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if `value` is `null` or `undefined`.
         *
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is nullish, else `false`.
         * @example
         *
         * _.isNil(null);
         * // => true
         *
         * _.isNil(void 0);
         * // => true
         *
         * _.isNil(NaN);
         * // => false
         */
        isNil(value: any): value is null | undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isNil
         */
        isNil(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isNil
         */
        isNil(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is null.
         *
         * @param value The value to check.
         * @return Returns true if value is null, else false.
         */
        isNull(value: any): value is null;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isNull
         */
        isNull(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isNull
         */
        isNull(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is classified as a Number primitive or object.
         *
         * Note: To exclude Infinity, -Infinity, and NaN, which are classified as numbers, use the _.isFinite method.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isNumber(value?: any): value is number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isNumber
         */
        isNumber(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isNumber
         */
        isNumber(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is the language type of Object. (e.g. arrays, functions, objects, regexes, new Number(0),
         * and new String(''))
         *
         * @param value The value to check.
         * @return Returns true if value is an object, else false.
         */
        isObject(value?: any): value is object;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isObject
         */
        isObject(): this is LoDashImplicitWrapper<object>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isObject
         */
        isObject(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if `value` is object-like. A value is object-like if it's not `null`
         * and has a `typeof` result of "object".
         *
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is object-like, else `false`.
         * @example
         *
         * _.isObjectLike({});
         * // => true
         *
         * _.isObjectLike([1, 2, 3]);
         * // => true
         *
         * _.isObjectLike(_.noop);
         * // => false
         *
         * _.isObjectLike(null);
         * // => false
         */
        isObjectLike(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isObjectLike
         */
        isObjectLike(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isObjectLike
         */
        isObjectLike(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is a plain object, that is, an object created by the Object constructor or one with a
         * [[Prototype]] of null.
         *
         * Note: This method assumes objects created by the Object constructor have no inherited enumerable properties.
         *
         * @param value The value to check.
         * @return Returns true if value is a plain object, else false.
         */
        isPlainObject(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isPlainObject
         */
        isPlainObject(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isPlainObject
         */
        isPlainObject(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is classified as a RegExp object.
         * @param value The value to check.
         *
         * @return Returns true if value is correctly classified, else false.
         */
        isRegExp(value?: any): value is RegExp;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isRegExp
         */
        isRegExp(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isRegExp
         */
        isRegExp(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
         * double precision number which isn't the result of a rounded unsafe integer.
         *
         * **Note:** This method is based on [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
         *
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is a safe integer, else `false`.
         * @example
         *
         * _.isSafeInteger(3);
         * // => true
         *
         * _.isSafeInteger(Number.MIN_VALUE);
         * // => false
         *
         * _.isSafeInteger(Infinity);
         * // => false
         *
         * _.isSafeInteger('3');
         * // => false
         */
        isSafeInteger(value: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isSafeInteger
         */
        isSafeInteger(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isSafeInteger
         */
        isSafeInteger(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is classified as a Set object.
         *
         * @param value The value to check.
         * @returns Returns true if value is correctly classified, else false.
         */
        isSet(value?: any): value is Set<any>;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isSet
         */
        isSet(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isSet
         */
        isSet(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is classified as a String primitive or object.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isString(value?: any): value is string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isString
         */
        isString(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isString
         */
        isString(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if `value` is classified as a `Symbol` primitive or object.
         *
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is correctly classified, else `false`.
         * @example
         *
         * _.isSymbol(Symbol.iterator);
         * // => true
         *
         * _.isSymbol('abc');
         * // => false
         */
        isSymbol(value: any): value is symbol;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isSymbol
         */
        isSymbol(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isSymbol
         */
        isSymbol(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is classified as a typed array.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isTypedArray(value: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isTypedArray
         */
        isTypedArray(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isTypedArray
         */
        isTypedArray(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is undefined.
         *
         * @param value The value to check.
         * @return Returns true if value is undefined, else false.
         */
        isUndefined(value: any): value is undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isUndefined
         */
        isUndefined(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isUndefined
         */
        isUndefined(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is classified as a WeakMap object.
         *
         * @param value The value to check.
         * @returns Returns true if value is correctly classified, else false.
         */
        isWeakMap(value?: any): value is WeakMap<object, any>;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isWeakMap
         */
        isWeakMap(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isWeakMap
         */
        isWeakMap(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is classified as a WeakSet object.
         *
         * @param value The value to check.
         * @returns Returns true if value is correctly classified, else false.
         */
        isWeakSet(value?: any): value is WeakSet<object>;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isWeakSet
         */
        isWeakSet(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isWeakSet
         */
        isWeakSet(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is less than other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is less than other, else false.
         */
        lt(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.lt
         */
        lt(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.lt
         */
        lt(other: any): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Checks if value is less than or equal to other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is less than or equal to other, else false.
         */
        lte(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.lte
         */
        lte(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.lte
         */
        lte(other: any): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * Converts value to an array.
         *
         * @param value The value to convert.
         * @return Returns the converted array.
         */
        toArray<T>(value:  Dictionary<T> | NumericDictionary<T> | null | undefined): T[];
        /**
         * @see _.toArray
         */
        toArray<T>(value: T): Array<T[keyof T]>;
        /**
         * @see _.toArray
         */
        toArray(): any[];
    }
    interface String {
        /**
         * @see _.toArray
         */
        toArray(): Collection<string>;
    }
    interface Collection<T> {
        /**
         * @see _.toArray
         */
        toArray(): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.toArray
         */
        toArray(): Collection<T[keyof T]>;
    }
    interface StringChain {
        /**
         * @see _.toArray
         */
        toArray(): CollectionChain<string>;
    }
    interface StringNullableChain {
        /**
         * @see _.toArray
         */
        toArray(): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.toArray
         */
        toArray(): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.toArray
         */
        toArray(): CollectionChain<T[keyof T]>;
    }

    interface LoDashStatic {
        /**
         * Converts `value` to a finite number.
         *
         * @since 4.12.0
         * @category Lang
         * @param value The value to convert.
         * @returns Returns the converted number.
         * @example
         *
         * _.toFinite(3.2);
         * // => 3.2
         *
         * _.toFinite(Number.MIN_VALUE);
         * // => 5e-324
         *
         * _.toFinite(Infinity);
         * // => 1.7976931348623157e+308
         *
         * _.toFinite('3.2');
         * // => 3.2
         */
        toFinite(value: any): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toFinite
         */
        toFinite(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toFinite
         */
        toFinite(): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * Converts `value` to an integer.
         *
         * **Note:** This function is loosely based on [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
         *
         * @category Lang
         * @param value The value to convert.
         * @returns Returns the converted integer.
         * @example
         *
         * _.toInteger(3);
         * // => 3
         *
         * _.toInteger(Number.MIN_VALUE);
         * // => 0
         *
         * _.toInteger(Infinity);
         * // => 1.7976931348623157e+308
         *
         * _.toInteger('3');
         * // => 3
         */
        toInteger(value: any): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toInteger
         */
        toInteger(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toInteger
         */
        toInteger(): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * Converts `value` to an integer suitable for use as the length of an
         * array-like object.
         *
         * **Note:** This method is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
         *
         * @category Lang
         * @param value The value to convert.
         * @return Returns the converted integer.
         * @example
         *
         * _.toLength(3);
         * // => 3
         *
         * _.toLength(Number.MIN_VALUE);
         * // => 0
         *
         * _.toLength(Infinity);
         * // => 4294967295
         *
         * _.toLength('3');
         * // => 3
         */
        toLength(value: any): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toLength
         */
        toLength(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toLength
         */
        toLength(): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * Converts `value` to a number.
         *
         * @category Lang
         * @param value The value to process.
         * @returns Returns the number.
         * @example
         *
         * _.toNumber(3);
         * // => 3
         *
         * _.toNumber(Number.MIN_VALUE);
         * // => 5e-324
         *
         * _.toNumber(Infinity);
         * // => Infinity
         *
         * _.toNumber('3');
         * // => 3
         */
        toNumber(value: any): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toNumber
         */
        toNumber(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toNumber
         */
        toNumber(): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * Converts value to a plain object flattening inherited enumerable properties of value to own properties
         * of the plain object.
         *
         * @param value The value to convert.
         * @return Returns the converted plain object.
         */
        toPlainObject(value?: any): any;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toPlainObject
         */
        toPlainObject(): Object<any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toPlainObject
         */
        toPlainObject(): ObjectChain<any>;
    }

    interface LoDashStatic {
        /**
         * Converts `value` to a safe integer. A safe integer can be compared and
         * represented correctly.
         *
         * @category Lang
         * @param value The value to convert.
         * @returns Returns the converted integer.
         * @example
         *
         * _.toSafeInteger(3);
         * // => 3
         *
         * _.toSafeInteger(Number.MIN_VALUE);
         * // => 0
         *
         * _.toSafeInteger(Infinity);
         * // => 9007199254740991
         *
         * _.toSafeInteger('3');
         * // => 3
         */
        toSafeInteger(value: any): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toSafeInteger
         */
        toSafeInteger(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toSafeInteger
         */
        toSafeInteger(): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * Converts `value` to a string if it's not one. An empty string is returned
         * for `null` and `undefined` values. The sign of `-0` is preserved.
         *
         * @category Lang
         * @param value The value to process.
         * @returns Returns the string.
         * @example
         *
         * _.toString(null);
         * // => ''
         *
         * _.toString(-0);
         * // => '-0'
         *
         * _.toString([1, 2, 3]);
         * // => '1,2,3'
         */
        toString(value: any): string;
    }
}
