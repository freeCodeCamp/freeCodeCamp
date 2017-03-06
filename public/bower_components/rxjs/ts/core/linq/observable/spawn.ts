/// <reference path="../../observable.ts"/>
module Rx {
    export interface ObservableStatic {
        wrap<T>(fn: Function): Observable<T>;
        spawn<T>(fn: Function): Observable<T>;
    }
}
