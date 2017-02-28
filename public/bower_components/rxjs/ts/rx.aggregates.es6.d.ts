declare module Rx {

    export interface Observable<T> {
        /**
         * Applies an accumulator function over an observable sequence, returning the result of the aggregation as a single element in the result sequence. The specified seed value is used as the initial accumulator value.
         * For aggregation behavior with incremental intermediate results, see Observable.scan.
         * @param {Function} accumulator An accumulator function to be invoked on each element.
         * @param {Any} [seed] The initial accumulator value.
         * @returns {Observable} An observable sequence containing a single element with the final accumulator value.
         */
        reduce<TAcc>(accumulator: _Accumulator<T, TAcc>, seed?: TAcc): Observable<TAcc>;
        /**
         * Applies an accumulator function over an observable sequence, returning the result of the aggregation as a single element in the result sequence. The specified seed value is used as the initial accumulator value.
         * For aggregation behavior with incremental intermediate results, see Observable.scan.
         * @param {Function} accumulator An accumulator function to be invoked on each element.
         * @param {Any} [seed] The initial accumulator value.
         * @returns {Observable} An observable sequence containing a single element with the final accumulator value.
         */
        reduce(accumulator: _Accumulator<T, T>, seed?: T): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Determines whether any element of an observable sequence satisfies a condition if present, else if any items are in the sequence.
        * @param {Function} [predicate] A function to test each element for a condition.
        * @returns {Observable} An observable sequence containing a single element determining whether any elements in the source sequence pass the test in the specified predicate if given, else if any items are in the sequence.
        */
        some(predicate?: _Predicate<T>, thisArg?: any): Observable<boolean>;	// alias for any
    }

    export interface Observable<T> {
        /**
         * Determines whether an observable sequence is empty.
         * @returns {Observable} An observable sequence containing a single element determining whether the source sequence is empty.
         */
        isEmpty(): Observable<boolean>;
    }

    export interface Observable<T> {
        /**
        * Determines whether all elements of an observable sequence satisfy a condition.
        * @param {Function} [predicate] A function to test each element for a condition.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence containing a single element determining whether all elements in the source sequence pass the test in the specified predicate.
        */
        every(predicate?: _Predicate<T>, thisArg?: any): Observable<boolean>;	// alias for all
    }

    export interface Observable<T> {
        /**
        * Determines whether an observable sequence includes a specified element with an optional equality comparer.
        * @param searchElement The value to locate in the source sequence.
        * @param {Number} [fromIndex] An equality comparer to compare elements.
        * @returns {Observable} An observable sequence containing a single element determining whether the source sequence includes an element that has the specified value from the given index.
        */
        includes(value: T, comparer?: _Comparer<T, boolean>): Observable<boolean>;
    }

    export interface Observable<T> {
        /**
        * Returns an observable sequence containing a value that represents how many elements in the specified observable sequence satisfy a condition if provided, else the count of items.
        * @example
        * res = source.count();
        * res = source.count(function (x) { return x > 3; });
        * @param {Function} [predicate]A function to test each element for a condition.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence containing a single element with a number that represents how many elements in the input sequence satisfy the condition in the predicate function if provided, else the count of items in the sequence.
        */
        count(predicate?: _Predicate<T>, thisArg?: any): Observable<number>;
    }

    export interface Observable<T> {
        /**
        * Returns the first index at which a given element can be found in the observable sequence, or -1 if it is not present.
        * @param {Any} searchElement Element to locate in the array.
        * @param {Number} [fromIndex] The index to start the search.  If not specified, defaults to 0.
        * @returns {Observable} And observable sequence containing the first index at which a given element can be found in the observable sequence, or -1 if it is not present.
        */
        indexOf(element: T, fromIndex?: number): Observable<number>;
    }

    export interface Observable<T> {
        /**
        * Computes the sum of a sequence of values that are obtained by invoking an optional transform function on each element of the input sequence, else if not specified computes the sum on each item in the sequence.
        * @param {Function} [selector] A transform function to apply to each element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence containing a single element with the sum of the values in the source sequence.
        */
        sum(keySelector?: _Selector<T, number>, thisArg?: any): Observable<number>;
    }

    export interface Observable<T> {
        /**
        * Returns the elements in an observable sequence with the minimum key value according to the specified comparer.
        * @example
        * var res = source.minBy(function (x) { return x.value; });
        * var res = source.minBy(function (x) { return x.value; }, function (x, y) { return x - y; });
        * @param {Function} keySelector Key selector function.
        * @param {Function} [comparer] Comparer used to compare key values.
        * @returns {Observable} An observable sequence containing a list of zero or more elements that have a minimum key value.
        */
        minBy<TKey>(keySelector: (item: T) => TKey, comparer: _Comparer<TKey, number>): Observable<T>;
        /**
        * Returns the elements in an observable sequence with the minimum key value according to the specified comparer.
        * @example
        * var res = source.minBy(function (x) { return x.value; });
        * var res = source.minBy(function (x) { return x.value; }, function (x, y) { return x - y; });
        * @param {Function} keySelector Key selector function.
        * @param {Function} [comparer] Comparer used to compare key values.
        * @returns {Observable} An observable sequence containing a list of zero or more elements that have a minimum key value.
        */
        minBy(keySelector: (item: T) => number): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Returns the minimum element in an observable sequence according to the optional comparer else a default greater than less than check.
        * @example
        * var res = source.min();
        * var res = source.min(function (x, y) { return x.value - y.value; });
        * @param {Function} [comparer] Comparer used to compare elements.
        * @returns {Observable} An observable sequence containing a single element with the minimum element in the source sequence.
        */
        min(comparer?: _Comparer<T, number>): Observable<number>;
    }

    export interface Observable<T> {
        /**
        * Returns the elements in an observable sequence with the maximum  key value according to the specified comparer.
        * @example
        * var res = source.maxBy(function (x) { return x.value; });
        * var res = source.maxBy(function (x) { return x.value; }, function (x, y) { return x - y;; });
        * @param {Function} keySelector Key selector function.
        * @param {Function} [comparer]  Comparer used to compare key values.
        * @returns {Observable} An observable sequence containing a list of zero or more elements that have a maximum key value.
        */
        maxBy<TKey>(keySelector: (item: T) => TKey, comparer: _Comparer<TKey, number>): Observable<T>;
        /**
        * Returns the elements in an observable sequence with the maximum  key value according to the specified comparer.
        * @example
        * var res = source.maxBy(function (x) { return x.value; });
        * var res = source.maxBy(function (x) { return x.value; }, function (x, y) { return x - y;; });
        * @param {Function} keySelector Key selector function.
        * @param {Function} [comparer]  Comparer used to compare key values.
        * @returns {Observable} An observable sequence containing a list of zero or more elements that have a maximum key value.
        */
        maxBy(keySelector: (item: T) => number): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Returns the maximum value in an observable sequence according to the specified comparer.
        * @example
        * var res = source.max();
        * var res = source.max(function (x, y) { return x.value - y.value; });
        * @param {Function} [comparer] Comparer used to compare elements.
        * @returns {Observable} An observable sequence containing a single element with the maximum element in the source sequence.
        */
        max(comparer?: _Comparer<T, number>): Observable<number>;
    }

    export interface Observable<T> {
        /**
        * Computes the average of an observable sequence of values that are in the sequence or obtained by invoking a transform function on each element of the input sequence if present.
        * @param {Function} [selector] A transform function to apply to each element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence containing a single element with the average of the sequence of values.
        */
        average(keySelector?: _Selector<T, number>, thisArg?: any): Observable<number>;
    }

    export interface Observable<T> {
        /**
        *  Determines whether two sequences are equal by comparing the elements pairwise using a specified equality comparer.
        *
        * @example
        * var res = res = source.sequenceEqual([1,2,3]);
        * var res = res = source.sequenceEqual([{ value: 42 }], function (x, y) { return x.value === y.value; });
        * 3 - res = source.sequenceEqual(Rx.Observable.returnValue(42));
        * 4 - res = source.sequenceEqual(Rx.Observable.returnValue({ value: 42 }), function (x, y) { return x.value === y.value; });
        * @param {Observable} second Second observable sequence or array to compare.
        * @param {Function} [comparer] Comparer used to compare elements of both sequences.
        * @returns {Observable} An observable sequence that contains a single element which indicates whether both sequences are of equal length and their corresponding elements are equal according to the specified equality comparer.
        */
        sequenceEqual(second: ObservableOrPromise<T> | ArrayOrIterable<T>, comparer?: _Comparer<T, boolean>): Observable<boolean>;
        /**
        *  Determines whether two sequences are equal by comparing the elements pairwise using a specified equality comparer.
        *
        * @example
        * var res = res = source.sequenceEqual([1,2,3]);
        * var res = res = source.sequenceEqual([{ value: 42 }], function (x, y) { return x.value === y.value; });
        * 3 - res = source.sequenceEqual(Rx.Observable.returnValue(42));
        * 4 - res = source.sequenceEqual(Rx.Observable.returnValue({ value: 42 }), function (x, y) { return x.value === y.value; });
        * @param {Observable} second Second observable sequence or array to compare.
        * @param {Function} [comparer] Comparer used to compare elements of both sequences.
        * @returns {Observable} An observable sequence that contains a single element which indicates whether both sequences are of equal length and their corresponding elements are equal according to the specified equality comparer.
        */
        sequenceEqual<TOther>(second: ObservableOrPromise<T> | ArrayOrIterable<T>, comparer: _Comparer<T | TOther, boolean>): Observable<boolean>;
    }

    export interface Observable<T> {
        /**
        * Returns the element at a specified index in a sequence or default value if not found.
        * @param {Number} index The zero-based index of the element to retrieve.
        * @param {Any} [defaultValue] The default value to use if elementAt does not find a value.
        * @returns {Observable} An observable sequence that produces the element at the specified position in the source sequence.
        */
        elementAt(index: number): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Returns the only element of an observable sequence that satisfies the condition in the optional predicate, and reports an exception if there is not exactly one element in the observable sequence.
        * @param {Function} [predicate] A predicate function to evaluate for elements in the source sequence.
        * @param {Any} [thisArg] Object to use as `this` when executing the predicate.
        * @returns {Observable} Sequence containing the single element in the observable sequence that satisfies the condition in the predicate.
        */
        single(predicate?: _Predicate<T>, thisArg?: any): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Returns the first element of an observable sequence that satisfies the condition in the predicate if present else the first item in the sequence.
        * @returns {Observable} Sequence containing the first element in the observable sequence that satisfies the condition in the predicate if provided, else the first item in the sequence.
        */
        first(predicate?: _Predicate<T>, thisArg?: any): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Returns the last element of an observable sequence that satisfies the condition in the predicate if specified, else the last element.
        * @returns {Observable} Sequence containing the last element in the observable sequence that satisfies the condition in the predicate.
        */
        last(predicate?: _Predicate<T>, thisArg?: any): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Searches for an element that matches the conditions defined by the specified predicate, and returns the first occurrence within the entire Observable sequence.
        * @param {Function} predicate The predicate that defines the conditions of the element to search for.
        * @param {Any} [thisArg] Object to use as `this` when executing the predicate.
        * @returns {Observable} An Observable sequence with the first element that matches the conditions defined by the specified predicate, if found; otherwise, undefined.
        */
        find(predicate: _Predicate<T>, thisArg?: any): Observable<T>;
    }

    export interface Observable<T> {
        /**
          * Searches for an element that matches the conditions defined by the specified predicate, and returns
          * an Observable sequence with the zero-based index of the first occurrence within the entire Observable sequence.
          * @param {Function} predicate The predicate that defines the conditions of the element to search for.
          * @param {Any} [thisArg] Object to use as `this` when executing the predicate.
          * @returns {Observable} An Observable sequence with the zero-based index of the first occurrence of an element that matches the conditions defined by match, if found; otherwise, –1.
        */
        findIndex(predicate: _Predicate<T>, thisArg?: any): Observable<number>;
    }

    export interface Observable<T> {
        /**
         * Converts the observable sequence to a Set if it exists.
         * @returns {Observable} An observable sequence with a single value of a Set containing the values from the observable sequence.
         */
        toSet() : Observable< Set<T>>;
    }

    export interface Observable<T> {
        /**
        * Converts the observable sequence to a Map if it exists.
        * @param {Function} keySelector A function which produces the key for the Map.
        * @param {Function} [elementSelector] An optional function which produces the element for the Map. If not present, defaults to the value from the observable sequence.
        * @returns {Observable} An observable sequence with a single value of a Map containing the values from the observable sequence.
        */
        toMap<TKey>(keySelector: (value: T) => TKey): Observable<Map<TKey, T>>;
        /**
        * Converts the observable sequence to a Map if it exists.
        * @param {Function} keySelector A function which produces the key for the Map.
        * @param {Function} [elementSelector] An optional function which produces the element for the Map. If not present, defaults to the value from the observable sequence.
        * @returns {Observable} An observable sequence with a single value of a Map containing the values from the observable sequence.
        */
        toMap<TKey, TElement>(keySelector: (value: T) => TKey, elementSelector: (value: T) => TElement): Observable<Map<TKey, TElement>>;
    }

}
declare module "rx.aggregates" { export = Rx; }
