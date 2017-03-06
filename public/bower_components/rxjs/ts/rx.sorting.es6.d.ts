declare module Rx {

    export interface Observable<T> {
        /**
        * jortSort checks if your inputs are sorted.  Note that this is only for a sequence with an end.
        * See http://jort.technology/ for full details.
        * @returns {Observable} An observable which has a single value of true if sorted, else false.
        */
        jortSort(): Observable<boolean>;
    }

    export interface Observable<T> {
        /**
        * jortSort checks if your inputs are sorted until another Observable sequence fires.
        * See http://jort.technology/ for full details.
        * @returns {Observable} An observable which has a single value of true if sorted, else false.
        */
        jortSortUntil<TOther>(other: TOther): Observable<boolean>;
    }

}
declare module "rx.sorting" { export = Rx; }
