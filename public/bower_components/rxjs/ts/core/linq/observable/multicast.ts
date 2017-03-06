/// <reference path="../../subjects/subject.ts" />
/// <reference path="../connectableobservable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Multicasts the source sequence notifications through an instantiated subject into all uses of the sequence within a selector function. Each
        * subscription to the resulting sequence causes a separate multicast invocation, exposing the sequence resulting from the selector function's
        * invocation. For specializations with fixed subject types, see Publish, PublishLast, and Replay.
        *
        * @example
        * 1 - res = source.multicast(observable);
        * 2 - res = source.multicast(function () { return new Subject(); }, function (x) { return x; });
        *
        * @param {Function|Subject} subjectOrSubjectSelector
        * Factory function to create an intermediate subject through which the source sequence's elements will be multicast to the selector function.
        * Or:
        * Subject to push source elements into.
        *
        * @param {Function} [selector] Optional selector function which can use the multicasted source sequence subject to the policies enforced by the created subject. Specified only if <paramref name="subjectOrSubjectSelector" is a factory function.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
        */
        multicast(subject: ISubject<T> | (() => ISubject<T>)): ConnectableObservable<T>;
        /**
        * Multicasts the source sequence notifications through an instantiated subject into all uses of the sequence within a selector function. Each
        * subscription to the resulting sequence causes a separate multicast invocation, exposing the sequence resulting from the selector function's
        * invocation. For specializations with fixed subject types, see Publish, PublishLast, and Replay.
        *
        * @example
        * 1 - res = source.multicast(observable);
        * 2 - res = source.multicast(function () { return new Subject(); }, function (x) { return x; });
        *
        * @param {Function|Subject} subjectOrSubjectSelector
        * Factory function to create an intermediate subject through which the source sequence's elements will be multicast to the selector function.
        * Or:
        * Subject to push source elements into.
        *
        * @param {Function} [selector] Optional selector function which can use the multicasted source sequence subject to the policies enforced by the created subject. Specified only if <paramref name="subjectOrSubjectSelector" is a factory function.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
        */
        multicast<TResult>(subjectSelector: ISubject<T> | (() => ISubject<T>), selector: (source: ConnectableObservable<T>) => Observable<T>): Observable<T>;
    }
}

(function() {
    var o: Rx.Observable<number>;
    var oc: Rx.ConnectableObservable<number>;
    var is: Rx.ISubject<number>;
    var s: Rx.Subject<number>;
    var a: Rx.Observable<string>;

    oc = o.multicast(is);
    oc = o.multicast(s);
    oc = o.multicast(() => s);

    o = o.multicast(is, a => a.asObservable());
    o = o.multicast(s, a => a.asObservable());
    o = o.multicast(() => s, a => a.asObservable());
});
