declare module Rx {

    export interface ObservableStatic {
        wrap<T>(fn: Function): Observable<T>;
        spawn<T>(fn: Function): Observable<T>;
    }

    export interface ObservableStatic {
        /**
        * Invokes the specified function asynchronously on the specified scheduler, surfacing the result through an observable sequence.
        *
        * @example
        * var res = Rx.Observable.start(function () { console.log('hello'); });
        * var res = Rx.Observable.start(function () { console.log('hello'); }, Rx.Scheduler.timeout);
        * var res = Rx.Observable.start(function () { this.log('hello'); }, Rx.Scheduler.timeout, console);
        *
        * @param {Function} func Function to run asynchronously.
        * @param {Scheduler} [scheduler]  Scheduler to run the function on. If not specified, defaults to Scheduler.timeout.
        * @param [context]  The context for the func parameter to be executed.  If not specified, defaults to undefined.
        * @returns {Observable} An observable sequence exposing the function's result value, or an exception.
        *
        * Remarks
        * * The function is called immediately, not during the subscription of the resulting sequence.
        * * Multiple subscriptions to the resulting sequence can observe the function's result.
        */
        start<T>(func: () => T, scheduler?: IScheduler, context?: any): Observable<T>;
    }

    export interface ObservableStatic {
        /**
        * Converts the function into an asynchronous function. Each invocation of the resulting asynchronous function causes an invocation of the original synchronous function on the specified scheduler.
        * @param {Function} function Function to convert to an asynchronous function.
        * @param {Scheduler} [scheduler] Scheduler to run the function on. If not specified, defaults to Scheduler.timeout.
        * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
        * @returns {Function} Asynchronous function.
        */
        toAsync<TResult>(func: () => TResult, context?: any, scheduler?: IScheduler): () => Observable<TResult>;
        /**
        * Converts the function into an asynchronous function. Each invocation of the resulting asynchronous function causes an invocation of the original synchronous function on the specified scheduler.
        * @param {Function} function Function to convert to an asynchronous function.
        * @param {Scheduler} [scheduler] Scheduler to run the function on. If not specified, defaults to Scheduler.timeout.
        * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
        * @returns {Function} Asynchronous function.
        */
        toAsync<T1, TResult>(func: (arg1: T1) => TResult, context?: any, scheduler?: IScheduler): (arg1: T1) => Observable<TResult>;
        /**
        * Converts the function into an asynchronous function. Each invocation of the resulting asynchronous function causes an invocation of the original synchronous function on the specified scheduler.
        * @param {Function} function Function to convert to an asynchronous function.
        * @param {Scheduler} [scheduler] Scheduler to run the function on. If not specified, defaults to Scheduler.timeout.
        * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
        * @returns {Function} Asynchronous function.
        */
        toAsync<T1, T2, TResult>(func: (arg1: T1, arg2: T2) => TResult, context?: any, scheduler?: IScheduler): (arg1: T1, arg2: T2) => Observable<TResult>;
        /**
        * Converts the function into an asynchronous function. Each invocation of the resulting asynchronous function causes an invocation of the original synchronous function on the specified scheduler.
        * @param {Function} function Function to convert to an asynchronous function.
        * @param {Scheduler} [scheduler] Scheduler to run the function on. If not specified, defaults to Scheduler.timeout.
        * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
        * @returns {Function} Asynchronous function.
        */
        toAsync<T1, T2, T3, TResult>(func: (arg1: T1, arg2: T2, arg3: T3) => TResult, context?: any, scheduler?: IScheduler): (arg1: T1, arg2: T2, arg3: T3) => Observable<TResult>;
        /**
        * Converts the function into an asynchronous function. Each invocation of the resulting asynchronous function causes an invocation of the original synchronous function on the specified scheduler.
        * @param {Function} function Function to convert to an asynchronous function.
        * @param {Scheduler} [scheduler] Scheduler to run the function on. If not specified, defaults to Scheduler.timeout.
        * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
        * @returns {Function} Asynchronous function.
        */
        toAsync<T1, T2, T3, T4, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => TResult, context?: any, scheduler?: IScheduler): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Observable<TResult>;
    }

    export interface ObservableStatic {
        /**
         * Converts a callback function to an observable sequence.
         *
         * @param {Function} function Function with a callback as the last parameter to convert to an Observable sequence.
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
         * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
         */
        fromCallback<TResult>(func: Function, context: any, selector: Function): (...args: any[]) => Observable<TResult>;
        /**
         * Converts a callback function to an observable sequence.
         *
         * @param {Function} function Function with a callback as the last parameter to convert to an Observable sequence.
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
         * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
         */
        fromCallback<TResult, T1>(func: (arg1: T1, callback: (result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1) => Observable<TResult>;
        /**
         * Converts a callback function to an observable sequence.
         *
         * @param {Function} function Function with a callback as the last parameter to convert to an Observable sequence.
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
         * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
         */
        fromCallback<TResult, T1, T2>(func: (arg1: T1, arg2: T2, callback: (result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2) => Observable<TResult>;
        /**
         * Converts a callback function to an observable sequence.
         *
         * @param {Function} function Function with a callback as the last parameter to convert to an Observable sequence.
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
         * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
         */
        fromCallback<TResult, T1, T2, T3>(func: (arg1: T1, arg2: T2, arg3: T3, callback: (result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3) => Observable<TResult>;
        /**
         * Converts a callback function to an observable sequence.
         *
         * @param {Function} function Function with a callback as the last parameter to convert to an Observable sequence.
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
         * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
         */
        fromCallback<TResult, T1, T2, T3, T4>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Observable<TResult>;
        /**
         * Converts a callback function to an observable sequence.
         *
         * @param {Function} function Function with a callback as the last parameter to convert to an Observable sequence.
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
         * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
         */
        fromCallback<TResult, T1, T2, T3, T4, T5>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Observable<TResult>;
        /**
         * Converts a callback function to an observable sequence.
         *
         * @param {Function} function Function with a callback as the last parameter to convert to an Observable sequence.
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
         * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
         */
        fromCallback<TResult, T1, T2, T3, T4, T5, T6>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callback: (result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Observable<TResult>;
        /**
         * Converts a callback function to an observable sequence.
         *
         * @param {Function} function Function with a callback as the last parameter to convert to an Observable sequence.
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
         * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
         */
        fromCallback<TResult, T1, T2, T3, T4, T5, T6, T7>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, callback: (result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => Observable<TResult>;
        /**
         * Converts a callback function to an observable sequence.
         *
         * @param {Function} function Function with a callback as the last parameter to convert to an Observable sequence.
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
         * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
         */
        fromCallback<TResult, T1, T2, T3, T4, T5, T6, T7, T8>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, callback: (result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => Observable<TResult>;
        /**
         * Converts a callback function to an observable sequence.
         *
         * @param {Function} function Function with a callback as the last parameter to convert to an Observable sequence.
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
         * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
         */
        fromCallback<TResult, T1, T2, T3, T4, T5, T6, T7, T8, T9>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, callback: (result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => Observable<TResult>;
    }

    export interface ObservableStatic {
        /**
         * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
         * @param {Function} func The function to call
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
         * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
         */
        fromNodeCallback<TResult>(func: Function, context?: any, selector?: Function): (...args: any[]) => Observable<TResult>;
        /**
         * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
         * @param {Function} func The function to call
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
         * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
         */
        fromNodeCallback<TResult, T1>(func: (arg1: T1, callback: (err: any, result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1) => Observable<TResult>;
        /**
         * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
         * @param {Function} func The function to call
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
         * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
         */
        fromNodeCallback<TResult, T1, T2>(func: (arg1: T1, arg2: T2, callback: (err: any, result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2) => Observable<TResult>;
        /**
         * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
         * @param {Function} func The function to call
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
         * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
         */
        fromNodeCallback<TResult, T1, T2, T3>(func: (arg1: T1, arg2: T2, arg3: T3, callback: (err: any, result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3) => Observable<TResult>;
        /**
         * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
         * @param {Function} func The function to call
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
         * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
         */
        fromNodeCallback<TResult, T1, T2, T3, T4>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: any, result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Observable<TResult>;
        /**
         * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
         * @param {Function} func The function to call
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
         * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
         */
        fromNodeCallback<TResult, T1, T2, T3, T4, T5>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: any, result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Observable<TResult>;
        /**
         * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
         * @param {Function} func The function to call
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
         * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
         */
        fromNodeCallback<TResult, T1, T2, T3, T4, T5, T6>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callback: (err: any, result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Observable<TResult>;
        /**
         * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
         * @param {Function} func The function to call
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
         * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
         */
        fromNodeCallback<TResult, T1, T2, T3, T4, T5, T6, T7>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, callback: (err: any, result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => Observable<TResult>;
        /**
         * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
         * @param {Function} func The function to call
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
         * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
         */
        fromNodeCallback<TResult, T1, T2, T3, T4, T5, T6, T7, T8>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, callback: (err: any, result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => Observable<TResult>;
        /**
         * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
         * @param {Function} func The function to call
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
         * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
         */
        fromNodeCallback<TResult, T1, T2, T3, T4, T5, T6, T7, T8, T9>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, callback: (err: any, result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => Observable<TResult>;
    }

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

    export interface ObservableStatic {
        /**
        * Creates an observable sequence from an event emitter via an addHandler/removeHandler pair.
        * @param {Function} addHandler The function to add a handler to the emitter.
        * @param {Function} [removeHandler] The optional function to remove a handler from an emitter.
        * @param {Function} [selector] A selector which takes the arguments from the event handler to produce a single item to yield on next.
        * @returns {Observable} An observable sequence which wraps an event from an event emitter
        */
        fromEventPattern<T>(addHandler: (handler: Function) => void, removeHandler: (handler: Function) => void, selector?: (arguments: any[]) => T): Observable<T>;
    }

    export interface ObservableStatic {
        /**
        * Invokes the asynchronous function, surfacing the result through an observable sequence.
        * @param {Function} functionAsync Asynchronous function which returns a Promise to run.
        * @returns {Observable} An observable sequence exposing the function's result value, or an exception.
        */
        startAsync<T>(functionAsync: () => IPromise<T>): Observable<T>;
    }

}
declare module "rx.async" { export = Rx; }
