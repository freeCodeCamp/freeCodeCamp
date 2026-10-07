import _ = require("../index");
declare module "../index" {
    // clamp
    interface LoDashStatic {
        /**
         * Clamps `number` within the inclusive `lower` and `upper` bounds.
         *
         * @category Number
         * @param number The number to clamp.
         * @param [lower] The lower bound.
         * @param upper The upper bound.
         * @returns Returns the clamped number.
         * @example
         *
         * _.clamp(-10, -5, 5);
         * // => -5
         *
         * _.clamp(10, -5, 5);
         * // => 5
         * Clamps `number` within the inclusive `lower` and `upper` bounds.
         *
         * @category Number
         * @param number The number to clamp.
         * @param [lower] The lower bound.
         * @param upper The upper bound.
         * @returns Returns the clamped number.
         * @example
         *
         * _.clamp(-10, -5, 5);
         * // => -5
         *
         * _.clamp(10, -5, 5);
         */
        clamp(number: number, lower: number, upper: number): number;
        /**
         * @see _.clamp
         */
        clamp(number: number, upper: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.clamp
         */
        clamp(lower: number, upper: number): number;
        /**
         * @see _.clamp
         */
        clamp(upper: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.clamp
         */
        clamp(lower: number, upper: number): PrimitiveChain<number>;
        /**
         * @see _.clamp
         */
        clamp(upper: number): PrimitiveChain<number>;
    }
    // inRange
    interface LoDashStatic {
        /**
         * Checks if n is between start and up to but not including, end. If end is not specified it’s set to start
         * with start then set to 0.
         *
         * @param n The number to check.
         * @param start The start of the range.
         * @param end The end of the range.
         * @return Returns true if n is in the range, else false.
         */
        inRange(n: number, start: number, end?: number): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.inRange
         */
        inRange(start: number, end?: number): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.inRange
         */
        inRange(start: number, end?: number): PrimitiveChain<boolean>;
    }
    // random
    interface LoDashStatic {
        /**
         * Produces a random number between min and max (inclusive). If only one argument is provided a number between
         * 0 and the given number is returned. If floating is true, or either min or max are floats, a floating-point
         * number is returned instead of an integer.
         *
         * @param min The minimum possible value.
         * @param max The maximum possible value.
         * @param floating Specify returning a floating-point number.
         * @return Returns the random number.
         */
        random(floating?: boolean): number;
        /**
         * @see _.random
         */
        random(max: number, floating?: boolean): number;
        /**
         * @see _.random
         */
        random(min: number, max: number, floating?: boolean): number;
        /**
         * @see _.random
         */
        random(min: number, index: string | number, guard: object): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.random
         */
        random(floating?: boolean): number;
        /**
         * @see _.random
         */
        random(max: number, floating?: boolean): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.random
         */
        random(floating?: boolean): PrimitiveChain<number>;
        /**
         * @see _.random
         */
        random(max: number, floating?: boolean): PrimitiveChain<number>;
    }
}
