/// <reference path="./virtualtimescheduler.ts" />
module Rx {
    export interface HistoricalScheduler extends VirtualTimeScheduler<number, number> {
    }

    export var HistoricalScheduler: {
        /**
         * Creates a new historical scheduler with the specified initial clock value.
         * @constructor
         * @param {Number} initialClock Initial value for the clock.
         * @param {Function} comparer Comparer to determine causality of events based on absolute time.
         */
        new (initialClock: number, comparer: _Comparer<number, number>): HistoricalScheduler;
    };
}

(function() {
    var a: Rx.HistoricalScheduler = new Rx.HistoricalScheduler(1, (a, b) => 1);
})
