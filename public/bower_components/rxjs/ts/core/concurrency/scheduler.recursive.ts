/// <reference path="../disposables/disposable.ts" />
module Rx {
    export interface IScheduler {
        /**
         * Schedules an action to be executed recursively.
         * @param {Mixed} state State passed to the action to be executed.
         * @param {Function} action Action to execute recursively. The last parameter passed to the action is used to trigger recursive scheduling of the action, passing in recursive invocation state.
         * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
         */
        scheduleRecursive<TState>(state: TState, action: (state: TState, action: (state: TState) => void) => void): IDisposable;

        /**
         * Schedules an action to be executed recursively after a specified relative due time.
         * @param {Mixed} state State passed to the action to be executed.
         * @param {Function} action Action to execute recursively. The last parameter passed to the action is used to trigger recursive scheduling of the action, passing in the recursive due time and invocation state.
         * @param {Number}dueTime Relative time after which to execute the action for the first time.
         * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
         */
        scheduleRecursiveFuture<TState, TTime extends number | Date>(state: TState, dueTime: TTime, action: (state: TState, action: (state: TState, dueTime: TTime) => void) => void): IDisposable;
    }
}

(function() {
    var s: Rx.IScheduler;

    var d: Rx.IDisposable = s.scheduleRecursive('state', (s, a) => Rx.Disposable.empty);
    var d: Rx.IDisposable = s.scheduleRecursiveFuture('state', 100, (s, a) => Rx.Disposable.empty);
})
