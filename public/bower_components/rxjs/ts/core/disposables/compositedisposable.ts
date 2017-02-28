/// <reference path="./disposable.ts" />
module Rx {
    /**
     * Represents a group of disposable resources that are disposed together.
     * @constructor
     */
    export interface CompositeDisposable extends Disposable {
        /**
         * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
         * @param {Mixed} item Disposable to add.
         */
        add(item: IDisposable): void;

        /**
         * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
         * @param {Mixed} item Disposable to remove.
         * @returns {Boolean} true if found; false otherwise.
         */
        remove(item: IDisposable): void;
    }

    interface CompositeDisposableStatic {
        /**
         * Represents a group of disposable resources that are disposed together.
         * @constructor
         */
        new (...disposables: Rx.IDisposable[]): CompositeDisposable;
        /**
         * Represents a group of disposable resources that are disposed together.
         * @constructor
         */
        new(disposables: Rx.IDisposable[]): CompositeDisposable;
    }

    export var CompositeDisposable: CompositeDisposableStatic;
}

(function() {
    var cd = new Rx.CompositeDisposable();
    var cd = new Rx.CompositeDisposable(Rx.Disposable.create(() => { }));
    var cd = new Rx.CompositeDisposable([Rx.Disposable.create(() => { })]);

    cd.add(Rx.Disposable.create(() => { }));
    cd.remove(Rx.Disposable.create(() => { }));

    cd.dispose();
    cd.isDisposed;
})
