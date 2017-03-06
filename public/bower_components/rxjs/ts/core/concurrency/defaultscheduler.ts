/// <reference path="./scheduler.ts" />
module Rx {
    export interface SchedulerStatic {
        default: IScheduler;
        async: IScheduler;
    }
}

(function() {
    var s : Rx.IScheduler;
    s = Rx.Scheduler.async;
    s = Rx.Scheduler.default;
})
