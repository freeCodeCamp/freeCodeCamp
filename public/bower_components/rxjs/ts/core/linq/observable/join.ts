/// <reference path="../../observable.ts" />
module Rx {
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
}
