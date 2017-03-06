/// <reference path="../disposables/disposable.ts" />
module Rx {
    export interface IScheduler {
        /**
         * Schedules a periodic piece of work by dynamically discovering the scheduler's capabilities. The periodic task will be scheduled using window.setInterval for the base implementation.
         * @param {Mixed} state Initial state passed to the action upon the first iteration.
         * @param {Number} period Period for running the work periodically.
         * @param {Function} action Action to be executed, potentially updating the state.
         * @returns {Disposable} The disposable object used to cancel the scheduled recurring action (best effort).
         */
        schedulePeriodic<TState>(state: TState, period: number, action: (state: TState) => TState): IDisposable;
    }
}

(function() {
    var s : Rx.IScheduler;

    var d : Rx.IDisposable = s.schedulePeriodic('state', 100, (s) => s);
})
