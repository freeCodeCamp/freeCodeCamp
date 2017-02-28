module Rx {
    export interface IDisposable {
        dispose(): void;
    }

    export interface Disposable extends IDisposable {
        /** Is this value disposed. */
        isDisposed?: boolean;
    }

    interface DisposableStatic {
        /**
         * Provides a set of static methods for creating Disposables.
         * @param {Function} dispose Action to run during the first call to dispose. The action is guaranteed to be run at most once.
         */
        new (action: () => void): Disposable;

        /**
         * Creates a disposable object that invokes the specified action when disposed.
         * @param {Function} dispose Action to run during the first call to dispose. The action is guaranteed to be run at most once.
         * @return {Disposable} The disposable object that runs the given action upon disposal.
         */
        create(action: () => void): Disposable;

        /**
         * Gets the disposable that does nothing when disposed.
         */
        empty: IDisposable;

        /**
         * Validates whether the given object is a disposable
         * @param {Object} Object to test whether it has a dispose method
         * @returns {Boolean} true if a disposable object, else false.
         */
        isDisposable(d: any): boolean;
    }

    /**
     * Provides a set of static methods for creating Disposables.
     * @param {Function} dispose Action to run during the first call to dispose. The action is guaranteed to be run at most once.
     */
    export var Disposable: DisposableStatic;
}

(function() {
    var id: Rx.IDisposable;
    var d : Rx.Disposable;

    id.dispose();
    d.dispose();

    d.isDisposed;

    Rx.Disposable.create(() => {})
    Rx.Disposable.empty;
    Rx.Disposable.isDisposable(d);
})
