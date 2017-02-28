declare module Rx {

    /**
    * Used to pause and resume streams.
    */
    export interface Pauser {
        /**
         * Pauses the underlying sequence.
         */
        pause(): void;

        /**
        * Resumes the underlying sequence.
        */
        resume(): void;
    }

    export interface Observable<T> {
        /**
         * Pauses the underlying observable sequence based upon the observable sequence which yields true/false.
         * @example
         * var pauser = new Rx.Subject();
         * var source = Rx.Observable.interval(100).pausable(pauser);
         * @param {Observable} pauser The observable sequence used to pause the underlying sequence.
         * @returns {Observable} The observable sequence which is paused based upon the pauser.
         */
        pausable(pauser?: Observable<boolean>): PausableObservable<T>;
    }

    export interface PausableObservable<T> extends Observable<T> {
        pause(): void;
        resume(): void;
    }

    export interface Observable<T> {
        /**
         * Pauses the underlying observable sequence based upon the observable sequence which yields true/false,
         * and yields the values that were buffered while paused.
         * @example
         * var pauser = new Rx.Subject();
         * var source = Rx.Observable.interval(100).pausableBuffered(pauser);
         * @param {Observable} pauser The observable sequence used to pause the underlying sequence.
         * @returns {Observable} The observable sequence which is paused based upon the pauser.
         */
        pausableBuffered(pauser?: Observable<boolean>): PausableObservable<T>;
    }

    export interface Observable<T> {
        /**
        * Attaches a controller to the observable sequence with the ability to queue.
        * @example
        * var source = Rx.Observable.interval(100).controlled();
        * source.request(3); // Reads 3 values
        * @param {bool} enableQueue truthy value to determine if values should be queued pending the next request
        * @param {Scheduler} scheduler determines how the requests will be scheduled
        * @returns {Observable} The observable sequence which only propagates values on request.
        */
        controlled(enableQueue?: boolean, scheduler?: IScheduler): ControlledObservable<T>;
    }

    export interface ControlledObservable<T> extends Observable<T> {
        request(numberOfItems?: number): IDisposable;
    }

    export interface ControlledObservable<T> {
        /**
         * Attaches a stop and wait observable to the current observable.
         * @returns {Observable} A stop and wait observable.
         */
        stopAndWait(): Observable<T>;
    }

    export interface ControlledObservable<T> {
        /**
         * Creates a sliding windowed observable based upon the window size.
         * @param {Number} windowSize The number of items in the window
         * @returns {Observable} A windowed observable based upon the window size.
         */
        windowed(windowSize: number): Observable<T>;
    }

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
declare module "rx.backpressure" { export = Rx; }
