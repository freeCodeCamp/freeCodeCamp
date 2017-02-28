/// <reference path="./groupbyuntil.ts" />
module Rx {
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
}
