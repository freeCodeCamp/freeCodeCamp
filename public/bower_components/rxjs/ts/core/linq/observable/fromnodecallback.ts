/// <reference path="../../observable.ts" />
module Rx {
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
}
