/// <reference path="./subject.ts" />
/// <reference path="../concurrency/scheduler.ts" />
module Rx {
    export interface ReplaySubject<T> extends Subject<T> { }

    interface ReplaySubjectStatic {
        /**
         *  Initializes a new instance of the ReplaySubject class with the specified buffer size, window size and scheduler.
         *  @param {Number} [bufferSize] Maximum element count of the replay buffer.
         *  @param {Number} [windowSize] Maximum time length of the replay buffer.
         *  @param {Scheduler} [scheduler] Scheduler the observers are invoked on.
         */
        new <T>(bufferSize?: number, window?: number, scheduler?: IScheduler): ReplaySubject<T>;
    }

    /**
    * Represents an object that is both an observable sequence as well as an observer.
    * Each notification is broadcasted to all subscribed and future observers, subject to buffer trimming policies.
    */
    export var ReplaySubject: ReplaySubjectStatic;
}

(function() {
    var s : Rx.ReplaySubject<boolean> = new Rx.ReplaySubject<boolean>();
    var s : Rx.ReplaySubject<boolean> = new Rx.ReplaySubject<boolean>(10);
    var s : Rx.ReplaySubject<boolean> = new Rx.ReplaySubject<boolean>(10, 10);
    var s : Rx.ReplaySubject<boolean> = new Rx.ReplaySubject<boolean>(10, 10, Rx.Scheduler.async);
});
