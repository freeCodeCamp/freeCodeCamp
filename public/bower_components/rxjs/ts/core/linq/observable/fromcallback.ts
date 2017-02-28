/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
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
}
