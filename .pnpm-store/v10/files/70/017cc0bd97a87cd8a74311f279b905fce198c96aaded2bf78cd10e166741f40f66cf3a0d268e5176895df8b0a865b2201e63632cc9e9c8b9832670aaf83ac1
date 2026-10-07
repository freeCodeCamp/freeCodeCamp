interface DebounceOptions {
    /**
    Call the `fn` on the [leading edge of the timeout](https://css-tricks.com/debouncing-throttling-explained-examples/#article-header-id-1).
    Meaning immediately, instead of waiting for `wait` milliseconds.
    @default false
    */
    readonly leading?: boolean;
    /**
    Call the `fn` on trailing edge with last used arguments. Result of call is from previous call.
    @default false
    */
    readonly trailing?: boolean;
}
/**
Debounce functions
@param fn - Promise-returning/async function to debounce.
@param wait - Milliseconds to wait before calling `fn`. Default value is 25ms
@returns A function that delays calling `fn` until after `wait` milliseconds have elapsed since the last time it was called.
@example
```
import { debounce } from 'perfect-debounce';
const expensiveCall = async input => input;
const debouncedFn = debounce(expensiveCall, 200);
for (const number of [1, 2, 3]) {
  console.log(await debouncedFn(number));
}
//=> 3
//=> 3
//=> 3
```
*/
declare function debounce<ArgumentsT extends unknown[], ReturnT>(fn: (...args: ArgumentsT) => PromiseLike<ReturnT> | ReturnT, wait?: number, options?: DebounceOptions): (...args: ArgumentsT) => Promise<ReturnT>;

export { DebounceOptions, debounce };
