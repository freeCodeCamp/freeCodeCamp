/// <reference path="../../observable.ts" />
/// <reference path="../../observer-lite.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Invokes an action for each element in the observable sequence and invokes an action upon graceful or exceptional termination of the observable sequence.
        *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
        * @param {Function | Observer} observerOrOnNext Action to invoke for each element in the observable sequence or an observer.
        * @param {Function} [onError]  Action to invoke upon exceptional termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
        * @param {Function} [onCompleted]  Action to invoke upon graceful termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
        * @returns {Observable} The source sequence with the side-effecting behavior applied.
        */
        do(observer: Observer<T>): Observable<T>;
        /**
        *  Invokes an action for each element in the observable sequence and invokes an action upon graceful or exceptional termination of the observable sequence.
        *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
        * @param {Function | Observer} observerOrOnNext Action to invoke for each element in the observable sequence or an observer.
        * @param {Function} [onError]  Action to invoke upon exceptional termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
        * @param {Function} [onCompleted]  Action to invoke upon graceful termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
        * @returns {Observable} The source sequence with the side-effecting behavior applied.
        */
        tap(observer: Observer<T>): Observable<T>;

        /**
        *  Invokes an action for each element in the observable sequence and invokes an action upon graceful or exceptional termination of the observable sequence.
        *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
        * @param {Function | Observer} observerOrOnNext Action to invoke for each element in the observable sequence or an observer.
        * @param {Function} [onError]  Action to invoke upon exceptional termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
        * @param {Function} [onCompleted]  Action to invoke upon graceful termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
        * @returns {Observable} The source sequence with the side-effecting behavior applied.
        */
        do(onNext?: (value: T) => void, onError?: (exception: any) => void, onCompleted?: () => void): Observable<T>;
        /**
        *  Invokes an action for each element in the observable sequence and invokes an action upon graceful or exceptional termination of the observable sequence.
        *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
        * @param {Function | Observer} observerOrOnNext Action to invoke for each element in the observable sequence or an observer.
        * @param {Function} [onError]  Action to invoke upon exceptional termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
        * @param {Function} [onCompleted]  Action to invoke upon graceful termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
        * @returns {Observable} The source sequence with the side-effecting behavior applied.
        */
        tap(onNext?: (value: T) => void, onError?: (exception: any) => void, onCompleted?: () => void): Observable<T>;

        /**
        *  Invokes an action for each element in the observable sequence.
        *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
        * @param {Function} onNext Action to invoke for each element in the observable sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} The source sequence with the side-effecting behavior applied.
        */
        doOnNext(onNext: (value: T) => void, thisArg?: any): Observable<T>;
        /**
        *  Invokes an action upon exceptional termination of the observable sequence.
        *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
        * @param {Function} onError Action to invoke upon exceptional termination of the observable sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} The source sequence with the side-effecting behavior applied.
        */
        doOnError(onError: (exception: any) => void, thisArg?: any): Observable<T>;
        /**
        *  Invokes an action upon graceful termination of the observable sequence.
        *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
        * @param {Function} onCompleted Action to invoke upon graceful termination of the observable sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} The source sequence with the side-effecting behavior applied.
        */
        doOnCompleted(onCompleted: () => void, thisArg?: any): Observable<T>;

        /**
        *  Invokes an action for each element in the observable sequence.
        *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
        * @param {Function} onNext Action to invoke for each element in the observable sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} The source sequence with the side-effecting behavior applied.
        */
        tapOnNext(onNext: (value: T) => void, thisArg?: any): Observable<T>;
        /**
        *  Invokes an action upon exceptional termination of the observable sequence.
        *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
        * @param {Function} onError Action to invoke upon exceptional termination of the observable sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} The source sequence with the side-effecting behavior applied.
        */
        tapOnError(onError: (exception: any) => void, thisArg?: any): Observable<T>;
        /**
        *  Invokes an action upon graceful termination of the observable sequence.
        *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
        * @param {Function} onCompleted Action to invoke upon graceful termination of the observable sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} The source sequence with the side-effecting behavior applied.
        */
        tapOnCompleted(onCompleted: () => void, thisArg?: any): Observable<T>;
    }
}


(function() {
    var o: Rx.Observable<string>;
    var or: Rx.Observer<string>;

    o.do(or);
    o.tap(or);

    o.do((v) => {}, e => {}, () => {});
    o.tap((v) => {}, e => {}, () => {});

    o.doOnNext((v) => { });
    o.tapOnNext((v) => { });
    o.doOnError((e) => { });
    o.tapOnError((e) => { });
    o.doOnCompleted(() => { });
    o.tapOnCompleted(() => { });
    o.doOnNext((v) => { }, {});
    o.tapOnNext((v) => { }, {});
    o.doOnError((e) => { }, {});
    o.tapOnError((e) => { }, {});
    o.doOnCompleted(() => { }, {});
    o.tapOnCompleted(() => { }, {});
});
