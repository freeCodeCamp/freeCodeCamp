/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
         * Executes a transducer to transform the observable sequence
         * @param {Transducer} transducer A transducer to execute
         * @returns {Observable} An Observable sequence containing the results from the transducer.
         */
        transduce(transducer: any): any;
        //TODO: Setup transducer
    }
}
