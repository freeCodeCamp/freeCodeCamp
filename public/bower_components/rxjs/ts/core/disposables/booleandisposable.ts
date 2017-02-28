/// <reference path="./disposable.ts" />
module Rx {
    export interface SingleAssignmentDisposable {
        /** Performs the task of cleaning up resources. */
        dispose(): void;

        /** Is this value disposed. */
        isDisposed: boolean;

        getDisposable(): IDisposable;

        setDisposable(value: IDisposable): void;
    }

    interface SingleAssignmentDisposableStatic {
        new() : SingleAssignmentDisposable;
    }

    export var SingleAssignmentDisposable : SingleAssignmentDisposableStatic;

    export interface SerialDisposable {
        /** Performs the task of cleaning up resources. */
        dispose(): void;

        /** Is this value disposed. */
        isDisposed: boolean;

        getDisposable(): IDisposable;

        setDisposable(value: IDisposable): void;
    }

    interface SerialDisposableStatic {
        new() : SerialDisposable;
    }

    export var SerialDisposable : SerialDisposableStatic;
}

(function() {
    var sad: Rx.SingleAssignmentDisposable = new Rx.SingleAssignmentDisposable();
    sad.dispose();
    sad.isDisposed;
    var d = sad.getDisposable();
    sad.setDisposable(d);
    
    var sad: Rx.SerialDisposable = new Rx.SerialDisposable();
    sad.dispose();
    sad.isDisposed;
    var d = sad.getDisposable();
    sad.setDisposable(d);
});
