/// <reference path="../disposables/disposable.ts" />
module Rx {
    export interface IScheduler {
        /**
         * Returns a scheduler that wraps the original scheduler, adding exception handling for scheduled actions.
         * @param {Function} handler Handler that's run if an exception is caught. The exception will be rethrown if the handler returns false.
         * @returns {Scheduler} Wrapper around the original scheduler, enforcing exception handling.
         */
        catch(handler: Function): IScheduler;
    }
}

(function() {
    var s : Rx.IScheduler = Rx.Scheduler.default.catch(() => {});
})
