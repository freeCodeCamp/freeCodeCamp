/// <reference path="./scheduler.ts" />
module Rx {
    export interface ICurrentThreadScheduler extends IScheduler {
        scheduleRequired(): boolean;
    }

    export interface SchedulerStatic {
        currentThread: ICurrentThreadScheduler;
    }
}

(function() {
    var a: Rx.ICurrentThreadScheduler;
    a.scheduleRequired();

    a = Rx.Scheduler.currentThread;
})
