/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface ObservableStatic {
        /**
         * Creates an observable sequence by adding an event listener to the matching DOMElement or each item in the NodeList.
         * @param {Object} element The DOMElement or NodeList to attach a listener.
         * @param {String} eventName The event name to attach the observable sequence.
         * @param {Function} [selector] A selector which takes the arguments from the event handler to produce a single item to yield on next.
         * @returns {Observable} An observable sequence of events from the specified element and the specified event.
         */
        fromEvent<T>(element: EventTarget, eventName: string, selector?: (arguments: any[]) => T): Observable<T>;
        /**
         * Creates an observable sequence by adding an event listener to the matching DOMElement or each item in the NodeList.
         * @param {Object} element The DOMElement or NodeList to attach a listener.
         * @param {String} eventName The event name to attach the observable sequence.
         * @param {Function} [selector] A selector which takes the arguments from the event handler to produce a single item to yield on next.
         * @returns {Observable} An observable sequence of events from the specified element and the specified event.
         */
        fromEvent<T>(element: { on: (name: string, cb: (e: any) => any) => void; off: (name: string, cb: (e: any) => any) => void }, eventName: string, selector?: (arguments: any[]) => T): Observable<T>;
    }
}
