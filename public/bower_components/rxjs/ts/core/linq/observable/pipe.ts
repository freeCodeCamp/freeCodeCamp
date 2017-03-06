/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Pipes the existing Observable sequence into a Node.js Stream.
        * @param {Stream} dest The destination Node.js stream.
        * @returns {Stream} The destination stream.
        */
        pipe<TDest>(dest: TDest): TDest;
        // TODO: Add link to node.d.ts some where
    }
}
