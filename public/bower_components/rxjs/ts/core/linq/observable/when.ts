/// <reference path="../../observable.ts"/>
/// <reference path="../../joins/plan.ts" />
module Rx {
    export interface ObservableStatic {
        /**
        *  Joins together the results from several patterns.
        *
        *  @param plans A series of plans (specified as an Array of as a series of arguments) created by use of the Then operator on patterns.
        *  @returns {Observable} Observable sequence with the results form matching several patterns.
        */
        when<TR>(plan: Plan<TR>): Observable<TR>;
    }
}
