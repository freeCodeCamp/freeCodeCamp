/// <reference path="../../observable.ts"/>
module Rx {
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
}


(function() {
    var o: () => Rx.Observable<string>;
    var o2: (a: any) => Rx.Observable<string>;
    var o3: (a: any, b: any) => Rx.Observable<string>;
    var o4: (a: any, b: any, c: any) => Rx.Observable<string>;
    o = Rx.Observable.toAsync(() => 'abc');
    o2 = Rx.Observable.toAsync((a) => 'abc');
    o3 = Rx.Observable.toAsync((a, b) => 'abc');
    o4 = Rx.Observable.toAsync((a, b, c) => 'abc');
    o = Rx.Observable.toAsync(() => 'abc', {}, Rx.Scheduler.async);

});
