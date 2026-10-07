# Installation
> `npm install --save @types/deep-eql`

# Summary
This package contains type definitions for deep-eql (https://github.com/chaijs/deep-eql).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/deep-eql.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/deep-eql/index.d.ts)
````ts
declare namespace deepEqual {
    /**
     * Memoization class used to speed up comparison.
     */
    class MemoizeMap extends WeakMap<object, MemoizeMap | boolean> {}

    interface DeepEqualOptions<T1 = unknown, T2 = unknown> {
        /**
         * Override default algorithm, determining custom equality.
         */
        comparator?: (leftHandOperand: T1, rightHandOperand: T2) => boolean | null;

        /**
         * Provide a custom memoization object which will cache the results of
         * complex objects for a speed boost.
         *
         * By passing `false` you can disable memoization, but this will cause circular
         * references to blow the stack.
         */
        memoize?: MemoizeMap | false;
    }
}

/**
 * Assert deeply nested sameValue equality between two objects of any type.
 *
 * @param leftHandOperand
 * @param rightHandOperand
 * @param [options] Additional options
 * @return equal match
 */
declare function deepEqual<T1, T2>(
    leftHandOperand: T1,
    rightHandOperand: T2,
    options?: deepEqual.DeepEqualOptions<T1, T2>,
): boolean;

export = deepEqual;

````

### Additional Details
 * Last updated: Mon, 06 Nov 2023 22:41:05 GMT
 * Dependencies: none

# Credits
These definitions were written by [Rodrigo Pietnechuk](https://github.com/ghnoob).
