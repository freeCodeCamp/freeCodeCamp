/// <reference path="../../observable.ts" />
module Rx {
    export interface ObservableStatic {
        /**
        * Continues an observable sequence that is terminated by an exception with the next observable sequence.
        * @param {Array | Arguments} args Arguments or an array to use as the next sequence if an error occurs.
        * @returns {Observable} An observable sequence containing elements from consecutive source sequences until a source sequence terminates successfully.
        */
        catch<T>(sources: ObservableOrPromise<T>[]): Observable<T>;
        /**
        * Continues an observable sequence that is terminated by an exception with the next observable sequence.
        * @param {Array | Arguments} args Arguments or an array to use as the next sequence if an error occurs.
        * @returns {Observable} An observable sequence containing elements from consecutive source sequences until a source sequence terminates successfully.
        */
        catch<T>(...sources: ObservableOrPromise<T>[]): Observable<T>;
    }
}

(function() {
    var o : Rx.Observable<string>;
    var io : Rx.IObservable<string>;
    var p : Rx.Promise<string>;

    var t = [o, p, o, p, io];
    o = Rx.Observable.catch(o, p, o, p, io);
    o = Rx.Observable.catch(...t);
    o = Rx.Observable.catch(t);
});
