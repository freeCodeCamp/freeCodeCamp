/// <reference path="../disposables/disposable.ts" />
module Rx {
    export interface IScheduler {
        /** Gets the current time according to the local machine's system clock. */
        now(): number;

        /**
          * Schedules an action to be executed.
          * @param state State passed to the action to be executed.
          * @param {Function} action Action to be executed.
          * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
          */
        schedule<TState>(state: TState, action: (scheduler: IScheduler, state: TState) => IDisposable): IDisposable;

        /**
         * Schedules an action to be executed after dueTime.
         * @param state State passed to the action to be executed.
         * @param {Function} action Action to be executed.
         * @param {Number} dueTime Relative time after which to execute the action.
         * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
         */
        scheduleFuture<TState>(state: TState, dueTime: number | Date, action: (scheduler: IScheduler, state: TState) => IDisposable): IDisposable;
    }

    export interface SchedulerStatic {
        /** Gets the current time according to the local machine's system clock. */
        now(): number;

        /**
         * Normalizes the specified TimeSpan value to a positive value.
         * @param {Number} timeSpan The time span value to normalize.
         * @returns {Number} The specified TimeSpan value if it is zero or positive; otherwise, 0
         */
        normalize(timeSpan: number): number;

        /** Determines whether the given object is a scheduler */
        isScheduler(s: any): boolean;
    }

    /** Provides a set of static properties to access commonly used schedulers. */
    export var Scheduler: SchedulerStatic;
}

(function() {
    var s: Rx.IScheduler;

    var d: Rx.IDisposable = s.schedule('state', (sh, s ) => Rx.Disposable.empty);
    var d: Rx.IDisposable = s.scheduleFuture('state', 100, (sh, s ) => Rx.Disposable.empty);
    var n : () => number = Rx.Scheduler.now;
    var a : number = Rx.Scheduler.normalize(1000);
})
