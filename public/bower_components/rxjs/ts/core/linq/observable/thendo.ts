/// <reference path="../../observable.ts"/>
/// <reference path="../../joins/plan.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Matches when the observable sequence has an available value and projects the value.
        *
        *  @param {Function} selector Selector that will be invoked for values in the source sequence.
        *  @returns {Plan} Plan that produces the projected values, to be fed (with other plans) to the when operator.
        */
        thenDo<TR>(selector: (item1: T) => TR): Plan<TR>;
    }
}
