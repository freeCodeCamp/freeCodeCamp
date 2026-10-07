import { Observable } from '../Observable';
import { SchedulerLike } from '../types';
export declare type ConditionFunc<S> = (state: S) => boolean;
export declare type IterateFunc<S> = (state: S) => S;
export declare type ResultFunc<S, T> = (state: S) => T;
export interface GenerateBaseOptions<S> {
    /**
     * Initial state.
     */
    initialState: S;
    /**
     * Condition function that accepts state and returns boolean.
     * When it returns false, the generator stops.
     * If not specified, a generator never stops.
     */
    condition?: ConditionFunc<S>;
    /**
     * Iterate function that accepts state and returns new state.
     */
    iterate: IterateFunc<S>;
    /**
     * SchedulerLike to use for generation process.
     * By default, a generator starts immediately.
     */
    scheduler?: SchedulerLike;
}
export interface GenerateOptions<T, S> extends GenerateBaseOptions<S> {
    /**
     * Result selection function that accepts state and returns a value to emit.
     */
    resultSelector: ResultFunc<S, T>;
}
/**
 * Generates an observable sequence by running a state-driven loop
 * producing the sequence's elements, using the specified scheduler
 * to send out observer messages.
 *
 * ![](generate.png)
 *
 * @example <caption>Produces sequence of 0, 1, 2, ... 9, then completes.</caption>
 * const res = generate(0, x => x < 10, x => x + 1, x => x);
 *
 * @example <caption>Using asap scheduler, produces sequence of 2, 3, 5, then completes.</caption>
 * const res = generate(1, x => x < 5, x => x * 2, x => x + 1, asap);
 *
 * @see {@link from}
 * @see {@link Observable}
 *
 * @param {S} initialState Initial state.
 * @param {function (state: S): boolean} condition Condition to terminate generation (upon returning false).
 * @param {function (state: S): S} iterate Iteration step function.
 * @param {function (state: S): T} resultSelector Selector function for results produced in the sequence. (deprecated)
 * @param {SchedulerLike} [scheduler] A {@link SchedulerLike} on which to run the generator loop. If not provided, defaults to emit immediately.
 * @returns {Observable<T>} The generated sequence.
 */
export declare function generate<T, S>(initialState: S, condition: ConditionFunc<S>, iterate: IterateFunc<S>, resultSelector: ResultFunc<S, T>, scheduler?: SchedulerLike): Observable<T>;
/**
 * Generates an Observable by running a state-driven loop
 * that emits an element on each iteration.
 *
 * <span class="informal">Use it instead of nexting values in a for loop.</span>
 *
 * <img src="./img/generate.png" width="100%">
 *
 * `generate` allows you to create stream of values generated with a loop very similar to
 * traditional for loop. First argument of `generate` is a beginning value. Second argument
 * is a function that accepts this value and tests if some condition still holds. If it does,
 * loop continues, if not, it stops. Third value is a function which takes previously defined
 * value and modifies it in some way on each iteration. Note how these three parameters
 * are direct equivalents of three expressions in regular for loop: first expression
 * initializes some state (for example numeric index), second tests if loop can make next
 * iteration (for example if index is lower than 10) and third states how defined value
 * will be modified on every step (index will be incremented by one).
 *
 * Return value of a `generate` operator is an Observable that on each loop iteration
 * emits a value. First, condition function is ran. If it returned true, Observable
 * emits currently stored value (initial value at the first iteration) and then updates
 * that value with iterate function. If at some point condition returned false, Observable
 * completes at that moment.
 *
 * Optionally you can pass fourth parameter to `generate` - a result selector function which allows you
 * to immediately map value that would normally be emitted by an Observable.
 *
 * If you find three anonymous functions in `generate` call hard to read, you can provide
 * single object to the operator instead. That object has properties: `initialState`,
 * `condition`, `iterate` and `resultSelector`, which should have respective values that you
 * would normally pass to `generate`. `resultSelector` is still optional, but that form
 * of calling `generate` allows you to omit `condition` as well. If you omit it, that means
 * condition always holds, so output Observable will never complete.
 *
 * Both forms of `generate` can optionally accept a scheduler. In case of multi-parameter call,
 * scheduler simply comes as a last argument (no matter if there is resultSelector
 * function or not). In case of single-parameter call, you can provide it as a
 * `scheduler` property on object passed to the operator. In both cases scheduler decides when
 * next iteration of the loop will happen and therefore when next value will be emitted
 * by the Observable. For example to ensure that each value is pushed to the observer
 * on separate task in event loop, you could use `async` scheduler. Note that
 * by default (when no scheduler is passed) values are simply emitted synchronously.
 *
 *
 * @example <caption>Use with condition and iterate functions.</caption>
 * const generated = generate(0, x => x < 3, x => x + 1);
 *
 * generated.subscribe(
 *   value => console.log(value),
 *   err => {},
 *   () => console.log('Yo!')
 * );
 *
 * // Logs:
 * // 0
 * // 1
 * // 2
 * // "Yo!"
 *
 *
 * @example <caption>Use with condition, iterate and resultSelector functions.</caption>
 * const generated = generate(0, x => x < 3, x => x + 1, x => x * 1000);
 *
 * generated.subscribe(
 *   value => console.log(value),
 *   err => {},
 *   () => console.log('Yo!')
 * );
 *
 * // Logs:
 * // 0
 * // 1000
 * // 2000
 * // "Yo!"
 *
 *
 * @example <caption>Use with options object.</caption>
 * const generated = generate({
 *   initialState: 0,
 *   condition(value) { return value < 3; },
 *   iterate(value) { return value + 1; },
 *   resultSelector(value) { return value * 1000; }
 * });
 *
 * generated.subscribe(
 *   value => console.log(value),
 *   err => {},
 *   () => console.log('Yo!')
 * );
 *
 * // Logs:
 * // 0
 * // 1000
 * // 2000
 * // "Yo!"
 *
 * @example <caption>Use options object without condition function.</caption>
 * const generated = generate({
 *   initialState: 0,
 *   iterate(value) { return value + 1; },
 *   resultSelector(value) { return value * 1000; }
 * });
 *
 * generated.subscribe(
 *   value => console.log(value),
 *   err => {},
 *   () => console.log('Yo!') // This will never run.
 * );
 *
 * // Logs:
 * // 0
 * // 1000
 * // 2000
 * // 3000
 * // ...and never stops.
 *
 *
 * @see {@link from}
 * @see {@link index/Observable.create}
 *
 * @param {S} initialState Initial state.
 * @param {function (state: S): boolean} condition Condition to terminate generation (upon returning false).
 * @param {function (state: S): S} iterate Iteration step function.
 * @param {function (state: S): T} [resultSelector] Selector function for results produced in the sequence.
 * @param {Scheduler} [scheduler] A {@link Scheduler} on which to run the generator loop. If not provided, defaults to emitting immediately.
 * @return {Observable<T>} The generated sequence.
 */
export declare function generate<S>(initialState: S, condition: ConditionFunc<S>, iterate: IterateFunc<S>, scheduler?: SchedulerLike): Observable<S>;
/**
 * Generates an observable sequence by running a state-driven loop
 * producing the sequence's elements, using the specified scheduler
 * to send out observer messages.
 * The overload accepts options object that might contain initial state, iterate,
 * condition and scheduler.
 *
 * ![](generate.png)
 *
 * @example <caption>Produces sequence of 0, 1, 2, ... 9, then completes.</caption>
 * const res = generate({
 *   initialState: 0,
 *   condition: x => x < 10,
 *   iterate: x => x + 1,
 * });
 *
 * @see {@link from}
 * @see {@link Observable}
 *
 * @param {GenerateBaseOptions<S>} options Object that must contain initialState, iterate and might contain condition and scheduler.
 * @returns {Observable<S>} The generated sequence.
 */
export declare function generate<S>(options: GenerateBaseOptions<S>): Observable<S>;
/**
 * Generates an observable sequence by running a state-driven loop
 * producing the sequence's elements, using the specified scheduler
 * to send out observer messages.
 * The overload accepts options object that might contain initial state, iterate,
 * condition, result selector and scheduler.
 *
 * ![](generate.png)
 *
 * @example <caption>Produces sequence of 0, 1, 2, ... 9, then completes.</caption>
 * const res = generate({
 *   initialState: 0,
 *   condition: x => x < 10,
 *   iterate: x => x + 1,
 *   resultSelector: x => x,
 * });
 *
 * @see {@link from}
 * @see {@link Observable}
 *
 * @param {GenerateOptions<T, S>} options Object that must contain initialState, iterate, resultSelector and might contain condition and scheduler.
 * @returns {Observable<T>} The generated sequence.
 */
export declare function generate<T, S>(options: GenerateOptions<T, S>): Observable<T>;
