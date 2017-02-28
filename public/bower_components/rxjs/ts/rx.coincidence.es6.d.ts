declare module Rx {

    export interface Observable<T> {
        /**
        *  Correlates the elements of two sequences based on overlapping durations.
        *
        *  @param {Observable} right The right observable sequence to join elements for.
        *  @param {Function} leftDurationSelector A function to select the duration (expressed as an observable sequence) of each element of the left observable sequence, used to determine overlap.
        *  @param {Function} rightDurationSelector A function to select the duration (expressed as an observable sequence) of each element of the right observable sequence, used to determine overlap.
        *  @param {Function} resultSelector A function invoked to compute a result element for any two overlapping elements of the left and right observable sequences. The parameters passed to the function correspond with the elements from the left and right source sequences for which overlap occurs.
        *  @returns {Observable} An observable sequence that contains result elements computed from source elements that have an overlapping duration.
        */
        join<TRight, TDurationLeft, TDurationRight, TResult>(
            right: Observable<TRight>,
            leftDurationSelector: (leftItem: T) => Observable<TDurationLeft>,
            rightDurationSelector: (rightItem: TRight) => Observable<TDurationRight>,
            resultSelector: (leftItem: T, rightItem: TRight) => TResult): Observable<TResult>;
    }

    export interface Observable<T> {
        /**
        *  Groups the elements of an observable sequence according to a specified key selector function.
        *  A duration selector function is used to control the lifetime of groups. When a group expires, it receives an OnCompleted notification. When a new element with the same
        *  key value as a reclaimed group occurs, the group will be reborn with a new lifetime request.
        *
        * @example
        *  var res = observable.groupByUntil(function (x) { return x.id; }, null,  function () { return Rx.Observable.never(); });
        *  2 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; },  function () { return Rx.Observable.never(); });
        *  3 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; },  function () { return Rx.Observable.never(); }, function (x) { return x.toString(); });
        * @param {Function} keySelector A function to extract the key for each element.
        * @param {Function} durationSelector A function to signal the expiration of a group.
        * @returns {Observable}
        *  A sequence of observable groups, each of which corresponds to a unique key value, containing all elements that share that same key value.
        *  If a group's lifetime expires, a new group with the same key value can be created once an element with such a key value is encoutered.
        *
        */
        groupByUntil<TKey, TDuration>(keySelector: (value: T) => TKey, skipElementSelector: boolean, durationSelector: (group: GroupedObservable<TKey, T>) => Observable<TDuration>, keySerializer?: (key: TKey) => string): Observable<GroupedObservable<TKey, T>>;

        /**
        *  Groups the elements of an observable sequence according to a specified key selector function.
        *  A duration selector function is used to control the lifetime of groups. When a group expires, it receives an OnCompleted notification. When a new element with the same
        *  key value as a reclaimed group occurs, the group will be reborn with a new lifetime request.
        *
        * @example
        *  var res = observable.groupByUntil(function (x) { return x.id; }, null,  function () { return Rx.Observable.never(); });
        *  2 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; },  function () { return Rx.Observable.never(); });
        *  3 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; },  function () { return Rx.Observable.never(); }, function (x) { return x.toString(); });
        * @param {Function} keySelector A function to extract the key for each element.
        * @param {Function} durationSelector A function to signal the expiration of a group.
        * @returns {Observable}
        *  A sequence of observable groups, each of which corresponds to a unique key value, containing all elements that share that same key value.
        *  If a group's lifetime expires, a new group with the same key value can be created once an element with such a key value is encoutered.
        *
        */
        groupByUntil<TKey, TElement, TDuration>(keySelector: (value: T) => TKey, elementSelector: (value: T) => TElement, durationSelector: (group: GroupedObservable<TKey, TElement>) => Observable<TDuration>, keySerializer?: (key: TKey) => string): Observable<GroupedObservable<TKey, TElement>>;
    }

    export interface Observable<T> {
        /**
        *  Correlates the elements of two sequences based on overlapping durations, and groups the results.
        *
        *  @param {Observable} right The right observable sequence to join elements for.
        *  @param {Function} leftDurationSelector A function to select the duration (expressed as an observable sequence) of each element of the left observable sequence, used to determine overlap.
        *  @param {Function} rightDurationSelector A function to select the duration (expressed as an observable sequence) of each element of the right observable sequence, used to determine overlap.
        *  @param {Function} resultSelector A function invoked to compute a result element for any element of the left sequence with overlapping elements from the right observable sequence. The first parameter passed to the function is an element of the left sequence. The second parameter passed to the function is an observable sequence with elements from the right sequence that overlap with the left sequence's element.
        *  @returns {Observable} An observable sequence that contains result elements computed from source elements that have an overlapping duration.
        */
        groupJoin<TRight, TDurationLeft, TDurationRight, TResult>(
            right: Observable<TRight>,
            leftDurationSelector: (leftItem: T) => Observable<TDurationLeft>,
            rightDurationSelector: (rightItem: TRight) => Observable<TDurationRight>,
            resultSelector: (leftItem: T, rightItem: Observable<TRight>) => TResult): Observable<TResult>;
    }

    export interface Observable<T> {
        /**
        *  Projects each element of an observable sequence into zero or more buffers.
        *  @param {Mixed} bufferOpeningsOrClosingSelector Observable sequence whose elements denote the creation of new windows, or, a function invoked to define the boundaries of the produced windows (a new window is started when the previous one is closed, resulting in non-overlapping windows).
        *  @param {Function} [bufferClosingSelector] A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.
        *  @returns {Observable} An observable sequence of windows.
        */
        buffer<TBufferOpening>(bufferOpenings: Observable<TBufferOpening>): Observable<T[]>;
        /**
        *  Projects each element of an observable sequence into zero or more buffers.
        *  @param {Mixed} bufferOpeningsOrClosingSelector Observable sequence whose elements denote the creation of new windows, or, a function invoked to define the boundaries of the produced windows (a new window is started when the previous one is closed, resulting in non-overlapping windows).
        *  @param {Function} [bufferClosingSelector] A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.
        *  @returns {Observable} An observable sequence of windows.
        */
        buffer<TBufferClosing>(bufferClosingSelector: () => Observable<TBufferClosing>): Observable<T[]>;
        /**
        *  Projects each element of an observable sequence into zero or more buffers.
        *  @param {Mixed} bufferOpeningsOrClosingSelector Observable sequence whose elements denote the creation of new windows, or, a function invoked to define the boundaries of the produced windows (a new window is started when the previous one is closed, resulting in non-overlapping windows).
        *  @param {Function} [bufferClosingSelector] A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.
        *  @returns {Observable} An observable sequence of windows.
        */
        buffer<TBufferOpening, TBufferClosing>(bufferOpenings: Observable<TBufferOpening>, bufferClosingSelector: () => Observable<TBufferClosing>): Observable<T[]>;
    }

    export interface Observable<T> {
        /**
        *  Projects each element of an observable sequence into zero or more windows.
        *
        *  @param {Mixed} windowOpeningsOrClosingSelector Observable sequence whose elements denote the creation of new windows, or, a function invoked to define the boundaries of the produced windows (a new window is started when the previous one is closed, resulting in non-overlapping windows).
        *  @param {Function} [windowClosingSelector] A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.
        *  @returns {Observable} An observable sequence of windows.
        */
        window<TWindowOpening>(windowOpenings: Observable<TWindowOpening>): Observable<Observable<T>>;
        /**
        *  Projects each element of an observable sequence into zero or more windows.
        *
        *  @param {Mixed} windowOpeningsOrClosingSelector Observable sequence whose elements denote the creation of new windows, or, a function invoked to define the boundaries of the produced windows (a new window is started when the previous one is closed, resulting in non-overlapping windows).
        *  @param {Function} [windowClosingSelector] A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.
        *  @returns {Observable} An observable sequence of windows.
        */
        window<TWindowClosing>(windowClosingSelector: () => Observable<TWindowClosing>): Observable<Observable<T>>;
        /**
        *  Projects each element of an observable sequence into zero or more windows.
        *
        *  @param {Mixed} windowOpeningsOrClosingSelector Observable sequence whose elements denote the creation of new windows, or, a function invoked to define the boundaries of the produced windows (a new window is started when the previous one is closed, resulting in non-overlapping windows).
        *  @param {Function} [windowClosingSelector] A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.
        *  @returns {Observable} An observable sequence of windows.
        */
        window<TWindowOpening, TWindowClosing>(windowOpenings: Observable<TWindowOpening>, windowClosingSelector: () => Observable<TWindowClosing>): Observable<Observable<T>>;
    }

    export interface Observable<T> {
        /**
         * Returns a new observable that triggers on the second and subsequent triggerings of the input observable.
         * The Nth triggering of the input observable passes the arguments from the N-1th and Nth triggering as a pair.
         * The argument passed to the N-1th triggering is held in hidden internal state until the Nth triggering occurs.
         * @returns {Observable} An observable that triggers on successive pairs of observations from the input observable as an array.
         */
        pairwise(): Observable<[T, T]>;
    }

    export interface Observable<T> {
        /**
         * Returns two observables which partition the observations of the source by the given function.
         * The first will trigger observations for those values for which the predicate returns true.
         * The second will trigger observations for those values where the predicate returns false.
         * The predicate is executed once for each subscribed observer.
         * Both also propagate all error observations arising from the source and each completes
         * when the source completes.
         * @param {Function} predicate
         *    The function to determine which output Observable will trigger a particular observation.
         * @returns {Array}
         *    An array of observables. The first triggers when the predicate returns true,
         *    and the second triggers when the predicate returns false.
        */
        partition(predicate: _Predicate<T>, thisArg?: any): [Observable<T>, Observable<T>];
    }

    export interface Observable<T> {
        /**
         *  Groups the elements of an observable sequence according to a specified key selector function and comparer and selects the resulting elements by using a specified function.
         *
         * @example
         *  var res = observable.groupBy(function (x) { return x.id; });
         *  2 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; });
         *  3 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; }, function (x) { return x.toString(); });
         * @param {Function} keySelector A function to extract the key for each element.
         * @param {Function} [elementSelector]  A function to map each source element to an element in an observable group.
         * @returns {Observable} A sequence of observable groups, each of which corresponds to a unique key value, containing all elements that share that same key value.
         */
        groupBy<TKey, TElement>(keySelector: (value: T) => TKey, skipElementSelector?: boolean, keySerializer?: (key: TKey) => string): Observable<GroupedObservable<TKey, T>>;
        /**
         *  Groups the elements of an observable sequence according to a specified key selector function and comparer and selects the resulting elements by using a specified function.
         *
         * @example
         *  var res = observable.groupBy(function (x) { return x.id; });
         *  2 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; });
         *  3 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; }, function (x) { return x.toString(); });
         * @param {Function} keySelector A function to extract the key for each element.
         * @param {Function} [elementSelector]  A function to map each source element to an element in an observable group.
         * @returns {Observable} A sequence of observable groups, each of which corresponds to a unique key value, containing all elements that share that same key value.
         */
        groupBy<TKey, TElement>(keySelector: (value: T) => TKey, elementSelector: (value: T) => TElement, keySerializer?: (key: TKey) => string): Observable<GroupedObservable<TKey, TElement>>;
    }

    export interface GroupedObservable<TKey, TElement> extends Observable<TElement> {
        key: TKey;
        underlyingObservable: Observable<TElement>;
    }

}
declare module "rx.coincidence" { export = Rx; }
