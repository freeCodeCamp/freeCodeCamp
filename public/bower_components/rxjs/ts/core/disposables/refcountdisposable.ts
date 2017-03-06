/// <reference path="./disposable.ts" />
module Rx {
    /**
     * Represents a disposable resource that only disposes its underlying disposable resource when all dependent disposable objects have been disposed.
     */
    export interface RefCountDisposable extends Disposable {

        /** Performs the task of cleaning up resources. */
        dispose(): void;

        /** Is this value disposed. */
        isDisposed: boolean;

        /**
         * Returns a dependent disposable that when disposed decreases the refcount on the underlying disposable.
         * @returns {Disposable} A dependent disposable contributing to the reference count that manages the underlying disposable's lifetime.
         */
        getDisposable(): IDisposable;
    }

    interface RefCountDisposableStatic {
        /**
         * Initializes a new instance of the RefCountDisposable with the specified disposable.
         * @constructor
         * @param {Disposable} disposable Underlying disposable.
         */
        new(disposable: IDisposable): RefCountDisposable;
    }

    export var RefCountDisposable : RefCountDisposableStatic;
}

(function() {
    var d = Rx.Disposable.create(() => {});
    var rcd = new Rx.RefCountDisposable(d);
    d = rcd.getDisposable();
    rcd.dispose();
    rcd.isDisposed;
})
