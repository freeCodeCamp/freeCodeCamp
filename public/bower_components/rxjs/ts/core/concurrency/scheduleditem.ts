/// <reference path="./scheduler.ts" />
/// <reference path="../disposables/booleandisposable.ts" />
module Rx {
    export module internals {
        export interface ScheduledItem<TTime> {
            scheduler: IScheduler;
            state: TTime;
            action: (scheduler: IScheduler, state: any) => IDisposable;
            dueTime: TTime;
            comparer: (x: TTime, y: TTime) => number;
            disposable: SingleAssignmentDisposable;

            invoke(): void;
            compareTo(other: ScheduledItem<TTime>): number;
            isCancelled(): boolean;
            invokeCore(): IDisposable;
        }

        interface ScheduledItemStatic {
            new <TTime>(scheduler: IScheduler, state: any, action: (scheduler: IScheduler, state: any) => IDisposable, dueTime: TTime, comparer?: _Comparer<TTime, number>):ScheduledItem<TTime>;
        }

        export var ScheduledItem: ScheduledItemStatic
    }
}

(function() {
    var item = new Rx.internals.ScheduledItem(Rx.Scheduler.default, {}, (sc, s) => Rx.Disposable.create(() => {}), 100);
    var item = new Rx.internals.ScheduledItem(Rx.Scheduler.default, {}, (sc, s) => Rx.Disposable.create(() => {}), 100, (x, y) => 500);

    item.scheduler
    item.state;
    item.action;
    item.dueTime;
    item.comparer;
    item.disposable;

    item.invoke();
    var n: number = item.compareTo(item);
    var b: boolean = item.isCancelled();
    var d : Rx.IDisposable= item.invokeCore();
})
