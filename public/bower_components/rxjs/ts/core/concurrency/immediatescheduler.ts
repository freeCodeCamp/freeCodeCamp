/// <reference path="./scheduler.ts" />
module Rx {
    export interface SchedulerStatic {
        immediate: IScheduler;
    }
}

(function() {
    var s : Rx.IScheduler;
    s = Rx.Scheduler.immediate;
})
