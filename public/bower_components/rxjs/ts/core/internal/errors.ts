module Rx {
    export module internals {
        export interface EmptyError extends Error { message: string; }
        export interface EmptyErrorStatic { new (): EmptyError; }

        export interface ObjectDisposedError extends Error { message: string; }
        export interface ObjectDisposedErrorStatic { new (): ObjectDisposedError; }

        export interface ArgumentOutOfRangeError extends Error { message: string; }
        export interface ArgumentOutOfRangeErrorStatic { new (): ArgumentOutOfRangeError; }

        export interface NotSupportedError extends Error { message: string; }
        export interface NotSupportedErrorStatic { new (): NotSupportedError; }

        export interface NotImplementedError extends Error { message: string; }
        export interface NotImplementedErrorStatic { new (): NotImplementedError; }
    }

    export module helpers {
        export var notImplemented: () => internals.NotImplementedError;
        export var notSupported: () => internals.NotSupportedError;
    }
}
