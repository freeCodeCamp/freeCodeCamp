import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Adds two numbers.
         *
         * @param augend The first number to add.
         * @param addend The second number to add.
         * @return Returns the sum.
         */
        add(augend: number, addend: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.add
         */
        add(addend: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.add
         */
        add(addend: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * Calculates n rounded up to precision.
         *
         * @param n The number to round up.
         * @param precision The precision to round up to.
         * @return Returns the rounded up number.
         */
        ceil(n: number, precision?: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.ceil
         */
        ceil(precision?: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.ceil
         */
        ceil(precision?: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
        * Divide two numbers.
        *
        * @param dividend The first number in a division.
        * @param divisor The second number in a division.
        * @returns Returns the quotient.
         */
        divide(dividend: number, divisor: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.divide
         */
        divide(divisor: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.divide
         */
        divide(divisor: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * Calculates n rounded down to precision.
         *
         * @param n The number to round down.
         * @param precision The precision to round down to.
         * @return Returns the rounded down number.
         */
        floor(n: number, precision?: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.floor
         */
        floor(precision?: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.floor
         */
        floor(precision?: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
          * Computes the maximum value of `array`. If `array` is empty or falsey
          * `undefined` is returned.
          *
          * @category Math
          * @param array The array to iterate over.
          * @returns Returns the maximum value.
         */
        max<T>(collection: readonly [T, ...T[]]): T;
        max<T>(collection: List<T> | null | undefined): T | undefined;
    }
    interface Collection<T> {
        /**
         * @see _.max
         */
        max(): T | undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.max
         */
        max(): ExpChain<T | undefined>;
    }

    interface LoDashStatic {
        /**
         * This method is like `_.max` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the criterion by which
         * the value is ranked. The iteratee is invoked with one argument: (value).
         *
         * @category Math
         * @param array The array to iterate over.
         * @param iteratee The iteratee invoked per element.
         * @returns Returns the maximum value.
         * @example
         *
         * var objects = [{ 'n': 1 }, { 'n': 2 }];
         *
         * _.maxBy(objects, function(o) { return o.n; });
         * // => { 'n': 2 }
         *
         * // using the `_.property` iteratee shorthand
         * _.maxBy(objects, 'n');
         * // => { 'n': 2 }
         */
        maxBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface Collection<T> {
        /**
         * @see _.maxBy
         */
        maxBy(iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.maxBy
         */
        maxBy(iteratee?: ValueIteratee<T>): ExpChain<T | undefined>;
    }

    interface LoDashStatic {
        /**
         * Computes the mean of the values in `array`.
         *
         * @category Math
         * @param array The array to iterate over.
         * @returns Returns the mean.
         * @example
         *
         * _.mean([4, 2, 8, 6]);
         * // => 5
         */
        mean(collection: List<any> | null | undefined): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.mean
         */
        mean(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.mean
         */
        mean(): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * Computes the mean of the provided properties of the objects in the `array`
         *
         * @category Math
         * @param array The array to iterate over.
         * @param iteratee The iteratee invoked per element.
         * @returns Returns the mean.
         * @example
         *
         * _.mean([{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], 'n');
         * // => 5
         */
        meanBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): number;
    }
    interface Collection<T> {
        /**
         * @see _.meanBy
         */
        meanBy(iteratee?: ValueIteratee<T>): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.meanBy
         */
        meanBy(iteratee?: ValueIteratee<T>): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * Computes the minimum value of `array`. If `array` is empty or falsey
         * `undefined` is returned.
         *
         * @category Math
         * @param array The array to iterate over.
         * @returns Returns the minimum value.
         */
        min<T>(collection: readonly [T, ...T[]]): T;
        min<T>(collection: List<T> | null | undefined): T | undefined;
    }
    interface Collection<T> {
        /**
         * @see _.min
         */
        min(): T | undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.min
         */
        min(): ExpChain<T | undefined>;
    }

    interface LoDashStatic {
        /**
         * This method is like `_.min` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the criterion by which
         * the value is ranked. The iteratee is invoked with one argument: (value).
         *
         * @category Math
         * @param array The array to iterate over.
         * @param iteratee The iteratee invoked per element.
         * @returns Returns the minimum value.
         * @example
         *
         * var objects = [{ 'n': 1 }, { 'n': 2 }];
         *
         * _.minBy(objects, function(o) { return o.a; });
         * // => { 'n': 1 }
         *
         * // using the `_.property` iteratee shorthand
         * _.minBy(objects, 'n');
         * // => { 'n': 1 }
         */
        minBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface Collection<T> {
        /**
         * @see _.minBy
         */
        minBy(iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.minBy
         */
        minBy(iteratee?: ValueIteratee<T>): ExpChain<T | undefined>;
    }

    interface LoDashStatic {
        /**
         * Multiply two numbers.
         * @param multiplier The first number in a multiplication.
         * @param multiplicand The second number in a multiplication.
         * @returns Returns the product.
         */
        multiply(multiplier: number, multiplicand: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.multiply
         */
        multiply(multiplicand: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.multiply
         */
        multiply(multiplicand: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * Calculates n rounded to precision.
         *
         * @param n The number to round.
         * @param precision The precision to round to.
         * @return Returns the rounded number.
         */
        round(n: number, precision?: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.round
         */
        round(precision?: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.round
         */
        round(precision?: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * Subtract two numbers.
         *
         * @category Math
         * @param minuend The first number in a subtraction.
         * @param subtrahend The second number in a subtraction.
         * @returns Returns the difference.
         * @example
         *
         * _.subtract(6, 4);
         * // => 2
         */
        subtract(minuend: number, subtrahend: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.subtract
         */
        subtract(subtrahend: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.subtract
         */
        subtract(subtrahend: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * Computes the sum of the values in `array`.
         *
         * @category Math
         * @param array The array to iterate over.
         * @returns Returns the sum.
         * @example
         *
         * _.sum([4, 2, 8, 6]);
         * // => 20
         */
        sum(collection: List<any> | null | undefined): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sum
         */
        sum(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sum
         */
        sum(): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * This method is like `_.sum` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the value to be summed.
         * The iteratee is invoked with one argument: (value).
         *
         * @category Math
         * @param array The array to iterate over.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the sum.
         * @example
         *
         * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
         *
         * _.sumBy(objects, function(o) { return o.n; });
         * // => 20
         *
         * // using the `_.property` iteratee shorthand
         * _.sumBy(objects, 'n');
         * // => 20
         */
        sumBy<T>(collection: List<T> | null | undefined, iteratee?: ((value: T) => number) | string): number;
    }
    interface Collection<T> {
        /**
         * @see _.sumBy
         */
        sumBy(iteratee?: ((value: T) => number) | string): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sumBy
         */
        sumBy(iteratee?: ((value: T) => number) | string): PrimitiveChain<number>;
    }
}
