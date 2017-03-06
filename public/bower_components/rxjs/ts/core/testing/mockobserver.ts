/// <reference path="../observer-lite.ts" />
/// <reference path="./recorded.ts" />
/// <reference path="../concurrency/scheduler.ts" />

module Rx {
    export interface MockObserver<T> extends Observer<T> {
        messages: Recorded[];
    }

    interface MockObserverStatic extends ObserverStatic {
        new <T>(scheduler: IScheduler): MockObserver<T>;
    }

    export var MockObserver: MockObserverStatic;
}

(function() {
    var o : Rx.MockObserver<string>;
    var r: Rx.Recorded[] =  o.messages;
    var oo : Rx.IObserver<string> = o;
});
