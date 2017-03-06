/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Continues an observable sequence that is terminated by an exception with the next observable sequence.
        * @param {Mixed} handlerOrSecond Exception handler function that returns an observable sequence given the error that occurred in the first sequence, or a second observable sequence used to produce results when an error occurred in the first sequence.
        * @returns {Observable} An observable sequence containing the first sequence's elements, followed by the elements of the handler sequence in case an exception occurred.
        */
        catch(handler: (exception: any) => ObservableOrPromise<T>): Observable<T>;
        /**
        * Continues an observable sequence that is terminated by an exception with the next observable sequence.
        * @param {Mixed} handlerOrSecond Exception handler function that returns an observable sequence given the error that occurred in the first sequence, or a second observable sequence used to produce results when an error occurred in the first sequence.
        * @returns {Observable} An observable sequence containing the first sequence's elements, followed by the elements of the handler sequence in case an exception occurred.
        */
        catch(second: ObservableOrPromise<T>): Observable<T>;
    }
}

(function() {

    var o: Rx.Observable<string>;
    var io: Rx.IObservable<string>;
    var p: Rx.Promise<string>;

    o = o.catch((e) => o);
    o = o.catch((e) => io);
    o = o.catch((e) => p);

    o = o.catch(o);
    o = o.catch(io);
    o = o.catch(p);
});
