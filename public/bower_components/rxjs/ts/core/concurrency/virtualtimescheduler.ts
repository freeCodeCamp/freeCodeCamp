/// <reference path="../disposables/disposable.ts" />
/// <reference path="./scheduler.ts" />
/// <reference path="./scheduleditem.ts" />
module Rx {
    export interface VirtualTimeScheduler<TAbsolute, TRelative> extends IScheduler {
        /**
         * Adds a relative time value to an absolute time value.
         * @param {Number} absolute Absolute virtual time value.
         * @param {Number} relative Relative virtual time value to add.
         * @return {Number} Resulting absolute virtual time sum value.
         */
        add(from: TAbsolute, by: TRelative): TAbsolute;

        /**
         * Converts an absolute time to a number
         * @param {Any} The absolute time.
         * @returns {Number} The absolute time in ms
         */
        toAbsoluteTime(duetime: TAbsolute): number;

        /**
         * Converts the TimeSpan value to a relative virtual time value.
         * @param {Number} timeSpan TimeSpan value to convert.
         * @return {Number} Corresponding relative virtual time value.
         */
        toRelativeTime(duetime: number): TRelative;

        /**
         * Starts the virtual time scheduler.
         */
        start(): IDisposable;

        /**
         * Stops the virtual time scheduler.
         */
        stop(): void;

        /**
         * Advances the scheduler's clock to the specified time, running all work till that point.
         * @param {Number} time Absolute time to advance the scheduler's clock to.
         */
        advanceTo(time: TAbsolute): void;

        /**
         * Advances the scheduler's clock by the specified relative time, running all work scheduled for that timespan.
         * @param {Number} time Relative time to advance the scheduler's clock by.
         */
        advanceBy(time: TRelative): void;

        /**
         * Advances the scheduler's clock by the specified relative time.
         * @param {Number} time Relative time to advance the scheduler's clock by.
         */
        sleep(time: TRelative): void;

        isEnabled: boolean;

        /**
         * Gets the next scheduled item to be executed.
         * @returns {ScheduledItem} The next scheduled item.
         */
        getNext(): internals.ScheduledItem<TAbsolute>;
    }
}

(function() {
    interface TA { }
    interface TR { }
    var vts: Rx.VirtualTimeScheduler<TA, TR>;

    var b: boolean = vts.isEnabled;
    var a: TA = vts.add(100, 500);
    var n: number = vts.toAbsoluteTime(1000);
    var r: TR = vts.toRelativeTime(1000);
    var d: Rx.IDisposable = vts.start();
    vts.stop();
    vts.advanceTo(<TA>null);
    vts.advanceBy(<TR>null);
    vts.sleep(<TR>null);
    var i: Rx.internals.ScheduledItem<TA> = vts.getNext();
    b = vts.isEnabled;
})
