declare module Rx {

    export interface Observable<T> {
        /**
        *  Returns an observable sequence that is the result of invoking the selector on the source sequence, without sharing subscriptions.
        *  This operator allows for a fluent style of writing queries that use the same sequence multiple times.
        *
        * @param {Function} selector Selector function which can use the source sequence as many times as needed, without sharing subscriptions to the source sequence.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
        */
        let<TResult>(selector: (source: Observable<T>) => Observable<TResult>): Observable<TResult>;
    }

    export interface ObservableStatic {
        /**
        *  Determines whether an observable collection contains values.
        *
        * @example
        *  1 - res = Rx.Observable.if(condition, obs1);
        *  2 - res = Rx.Observable.if(condition, obs1, obs2);
        *  3 - res = Rx.Observable.if(condition, obs1, scheduler);
        * @param {Function} condition The condition which determines if the thenSource or elseSource will be run.
        * @param {Observable} thenSource The observable sequence or Promise that will be run if the condition function returns true.
        * @param {Observable} [elseSource] The observable sequence or Promise that will be run if the condition function returns false. If this is not provided, it defaults to Rx.Observabe.Empty with the specified scheduler.
        * @returns {Observable} An observable sequence which is either the thenSource or elseSource.
        */
        if<T>(condition: () => boolean, thenSource: ObservableOrPromise<T>, elseSourceOrScheduler?: ObservableOrPromise<T> | IScheduler): Observable<T>;
    }

    export interface ObservableStatic {
        /**
        *  Concatenates the observable sequences obtained by running the specified result selector for each element in source.
        * There is an alias for this method called 'forIn' for browsers <IE9
        * @param {Array} sources An array of values to turn into an observable sequence.
        * @param {Function} resultSelector A function to apply to each item in the sources array to turn it into an observable sequence.
        * @returns {Observable} An observable sequence from the concatenated observable sequences.
        */
        for<T, TResult>(sources: T[], resultSelector: _Selector<T, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  Concatenates the observable sequences obtained by running the specified result selector for each element in source.
        * There is an alias for this method called 'forIn' for browsers <IE9
        * @param {Array} sources An array of values to turn into an observable sequence.
        * @param {Function} resultSelector A function to apply to each item in the sources array to turn it into an observable sequence.
        * @returns {Observable} An observable sequence from the concatenated observable sequences.
        */
        forIn<T, TResult>(sources: T[], resultSelector: _Selector<T, TResult>, thisArg?: any): Observable<TResult>;
    }

    export interface ObservableStatic {
        /**
        *  Repeats source as long as condition holds emulating a while loop.
        * There is an alias for this method called 'whileDo' for browsers <IE9
        *
        * @param {Function} condition The condition which determines if the source will be repeated.
        * @param {Observable} source The observable sequence that will be run if the condition function returns true.
        * @returns {Observable} An observable sequence which is repeated as long as the condition holds.
        */
        while<T>(condition: () => boolean, source: ObservableOrPromise<T>): Observable<T>;
        /**
        *  Repeats source as long as condition holds emulating a while loop.
        * There is an alias for this method called 'whileDo' for browsers <IE9
        *
        * @param {Function} condition The condition which determines if the source will be repeated.
        * @param {Observable} source The observable sequence that will be run if the condition function returns true.
        * @returns {Observable} An observable sequence which is repeated as long as the condition holds.
        */
        whileDo<T>(condition: () => boolean, source: ObservableOrPromise<T>): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Repeats source as long as condition holds emulating a do while loop.
        *
        * @param {Function} condition The condition which determines if the source will be repeated.
        * @param {Observable} source The observable sequence that will be run if the condition function returns true.
        * @returns {Observable} An observable sequence which is repeated as long as the condition holds.
        */
        doWhile(condition: () => boolean): Observable<T>;
    }

    export interface ObservableStatic {
        /**
        *  Uses selector to determine which source in sources to use.
        * @param {Function} selector The function which extracts the value for to test in a case statement.
        * @param {Array} sources A object which has keys which correspond to the case statement labels.
        * @param {Observable} [elseSource] The observable sequence or Promise that will be run if the sources are not matched. If this is not provided, it defaults to Rx.Observabe.empty with the specified scheduler.
        *
        * @returns {Observable} An observable sequence which is determined by a case statement.
        */
        case<T>(selector: () => string, sources: { [key: string]: ObservableOrPromise<T>; }, schedulerOrElseSource?: IScheduler | ObservableOrPromise<T>): Observable<T>;
        /**
        *  Uses selector to determine which source in sources to use.
        * @param {Function} selector The function which extracts the value for to test in a case statement.
        * @param {Array} sources A object which has keys which correspond to the case statement labels.
        * @param {Observable} [elseSource] The observable sequence or Promise that will be run if the sources are not matched. If this is not provided, it defaults to Rx.Observabe.empty with the specified scheduler.
        *
        * @returns {Observable} An observable sequence which is determined by a case statement.
        */
        case<T>(selector: () => number, sources: { [key: number]: ObservableOrPromise<T>; }, schedulerOrElseSource?: IScheduler | ObservableOrPromise<T>): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Expands an observable sequence by recursively invoking selector.
        *
        * @param {Function} selector Selector function to invoke for each produced element, resulting in another sequence to which the selector will be invoked recursively again.
        * @param {Scheduler} [scheduler] Scheduler on which to perform the expansion. If not provided, this defaults to the current thread scheduler.
        * @returns {Observable} An observable sequence containing all the elements produced by the recursive expansion.
        */
        expand(selector: (item: T) => Observable<T>, scheduler?: IScheduler): Observable<T>;
    }

    export interface ObservableStatic {
        /**
        *  Runs all observable sequences in parallel and collect their last elements.
        *
        * @example
        *  1 - res = Rx.Observable.forkJoin([obs1, obs2]);
        *  1 - res = Rx.Observable.forkJoin(obs1, obs2, ...);
        * @returns {Observable} An observable sequence with an array collecting the last elements of all the input sequences.
        */
        forkJoin<T>(sources: ObservableOrPromise<T>[]): Observable<T[]>;

        /**
        *  Runs all observable sequences in parallel and collect their last elements.
        *
        * @example
        *  1 - res = Rx.Observable.forkJoin([obs1, obs2]);
        *  1 - res = Rx.Observable.forkJoin(obs1, obs2, ...);
        * @returns {Observable} An observable sequence with an array collecting the last elements of all the input sequences.
        */
        forkJoin<T>(...args: ObservableOrPromise<T>[]): Observable<T[]>;
    }

    export interface Observable<T> {
        /**
        *  Runs two observable sequences in parallel and combines their last elemenets.
        *
        * @param {Observable} second Second observable sequence.
        * @param {Function} resultSelector Result selector function to invoke with the last elements of both sequences.
        * @returns {Observable} An observable sequence with the result of calling the selector function with the last elements of both input sequences.
        */
        forkJoin<TSecond, TResult>(second: ObservableOrPromise<TSecond>, resultSelector: (left: T, right: TSecond) => TResult): Observable<TResult>;
    }

    export interface Observable<T> {
        /**
        * Comonadic bind operator.
        * @param {Function} selector A transform function to apply to each element.
        * @param {Object} scheduler Scheduler used to execute the operation. If not specified, defaults to the ImmediateScheduler.
        * @returns {Observable} An observable sequence which results from the comonadic bind operation.
        */
        manySelect<TResult>(selector: _Selector<Observable<T>, TResult>, scheduler?: IScheduler): Observable<TResult>;
        /**
        * Comonadic bind operator.
        * @param {Function} selector A transform function to apply to each element.
        * @param {Object} scheduler Scheduler used to execute the operation. If not specified, defaults to the ImmediateScheduler.
        * @returns {Observable} An observable sequence which results from the comonadic bind operation.
        */
        extend<TResult>(selector: _Selector<Observable<T>, TResult>, scheduler?: IScheduler): Observable<TResult>;
    }

    export interface Observable<T> {
        /**
        * Performs a exclusive waiting for the first to finish before subscribing to another observable.
        * Observables that come in between subscriptions will be dropped on the floor.
        * @returns {Observable} A exclusive observable with only the results that happen when subscribed.
        */
        switchFirst(): T;
    }

    export interface Observable<T> {
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        selectSwitchFirst<TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TResult>>): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        selectSwitchFirst<TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TResult>>): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        selectSwitchFirst<TOther, TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        selectSwitchFirst<TOther, TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;

        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        flatMapFirst<TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TResult>>): Observable<TResult>;

        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        flatMapFirst<TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TResult>>): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        flatMapFirst<TOther, TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        flatMapFirst<TOther, TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
    }

    export interface Observable<T> {
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        selectManyWithMaxConcurrent<TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ObservableOrPromise<TResult>>): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        selectManyWithMaxConcurrent<TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ArrayOrIterable<TResult>>): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        selectManyWithMaxConcurrent<TOther, TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ObservableOrPromise<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        selectManyWithMaxConcurrent<TOther, TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ArrayOrIterable<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;

        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        flatMapWithMaxConcurrent<TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ObservableOrPromise<TResult>>): Observable<TResult>;

        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        flatMapWithMaxConcurrent<TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ArrayOrIterable<TResult>>): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        flatMapWithMaxConcurrent<TOther, TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ObservableOrPromise<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        flatMapWithMaxConcurrent<TOther, TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ArrayOrIterable<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
    }

}
declare module "rx.experimental" { export = Rx; }
