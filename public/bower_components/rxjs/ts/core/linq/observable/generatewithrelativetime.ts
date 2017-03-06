/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface ObservableStatic {
        /**
         *  Generates an observable sequence by iterating a state from an initial state until the condition fails.
         *
         * @example
         *  res = source.generateWithRelativeTime(0,
         *      function (x) { return return true; },
         *      function (x) { return x + 1; },
         *      function (x) { return x; },
         *      function (x) { return 500; }
         *  );
         *
         * @param {Mixed} initialState Initial state.
         * @param {Function} condition Condition to terminate generation (upon returning false).
         * @param {Function} iterate Iteration step function.
         * @param {Function} resultSelector Selector function for results produced in the sequence.
         * @param {Function} timeSelector Time selector function to control the speed of values being produced each iteration, returning integer values denoting milliseconds.
         * @param {Scheduler} [scheduler]  Scheduler on which to run the generator loop. If not specified, the timeout scheduler is used.
         * @returns {Observable} The generated sequence.
         */
        generateWithRelativeTime<TState, TResult>(
            initialState: TState,
            condition: (state: TState) => boolean,
            iterate: (state: TState) => TState,
            resultSelector: (state: TState) => TResult,
            timeSelector: (state: TState) => number,
            scheduler?: IScheduler): Observable<TResult>;
    }
}
