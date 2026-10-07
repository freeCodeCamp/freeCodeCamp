declare module "node:wasi" {
    interface WASIOptions {
        /**
         * An array of strings that the WebAssembly application will
         * see as command line arguments. The first argument is the virtual path to the
         * WASI command itself.
         * @default []
         */
        args?: readonly string[] | undefined;
        /**
         * An object similar to `process.env` that the WebAssembly
         * application will see as its environment.
         * @default {}
         */
        env?: object | undefined;
        /**
         * This object represents the WebAssembly application's
         * sandbox directory structure. The string keys of `preopens` are treated as
         * directories within the sandbox. The corresponding values in `preopens` are
         * the real paths to those directories on the host machine.
         */
        preopens?: NodeJS.Dict<string> | undefined;
        /**
         * By default, when WASI applications call `__wasi_proc_exit()`
         * `wasi.start()` will return with the exit code specified rather than terminatng the process.
         * Setting this option to `false` will cause the Node.js process to exit with
         * the specified exit code instead.
         * @default true
         */
        returnOnExit?: boolean | undefined;
        /**
         * The file descriptor used as standard input in the WebAssembly application.
         * @default 0
         */
        stdin?: number | undefined;
        /**
         * The file descriptor used as standard output in the WebAssembly application.
         * @default 1
         */
        stdout?: number | undefined;
        /**
         * The file descriptor used as standard error in the WebAssembly application.
         * @default 2
         */
        stderr?: number | undefined;
        /**
         * The version of WASI requested.
         * Currently the only supported versions are `'unstable'` and `'preview1'`. This option is mandatory.
         * @since v19.8.0
         */
        version: "unstable" | "preview1";
    }
    interface FinalizeBindingsOptions {
        /**
         * @default instance.exports.memory
         */
        memory?: object | undefined;
    }
    /**
     * The `WASI` class provides the WASI system call API and additional convenience
     * methods for working with WASI-based applications. Each `WASI` instance
     * represents a distinct environment.
     * @since v13.3.0, v12.16.0
     */
    class WASI {
        constructor(options?: WASIOptions);
        /**
         * Return an import object that can be passed to `WebAssembly.instantiate()` if no other WASM imports are needed beyond those provided by WASI.
         *
         * If version `unstable` was passed into the constructor it will return:
         *
         * ```js
         * { wasi_unstable: wasi.wasiImport }
         * ```
         *
         * If version `preview1` was passed into the constructor or no version was specified it will return:
         *
         * ```js
         * { wasi_snapshot_preview1: wasi.wasiImport }
         * ```
         * @since v19.8.0
         */
        getImportObject(): object;
        /**
         * Attempt to begin execution of `instance` as a WASI command by invoking its `_start()` export. If `instance` does not contain a `_start()` export, or if `instance` contains an `_initialize()`
         * export, then an exception is thrown.
         *
         * `start()` requires that `instance` exports a [`WebAssembly.Memory`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory) named `memory`. If
         * `instance` does not have a `memory` export an exception is thrown.
         *
         * If `start()` is called more than once, an exception is thrown.
         * @since v13.3.0, v12.16.0
         */
        start(instance: object): number; // TODO: avoid DOM dependency until WASM moved to own lib.
        /**
         * Attempt to initialize `instance` as a WASI reactor by invoking its `_initialize()` export, if it is present. If `instance` contains a `_start()` export, then an exception is thrown.
         *
         * `initialize()` requires that `instance` exports a [`WebAssembly.Memory`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory) named `memory`.
         * If `instance` does not have a `memory` export an exception is thrown.
         *
         * If `initialize()` is called more than once, an exception is thrown.
         * @since v14.6.0, v12.19.0
         */
        initialize(instance: object): void; // TODO: avoid DOM dependency until WASM moved to own lib.
        /**
         * Set up WASI host bindings to `instance` without calling `initialize()`
         * or `start()`. This method is useful when the WASI module is instantiated in
         * child threads for sharing the memory across threads.
         *
         * `finalizeBindings()` requires that either `instance` exports a
         * [`WebAssembly.Memory`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory) named `memory` or user specify a
         * [`WebAssembly.Memory`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory) object in `options.memory`. If the `memory` is invalid
         * an exception is thrown.
         *
         * `start()` and `initialize()` will call `finalizeBindings()` internally.
         * If `finalizeBindings()` is called more than once, an exception is thrown.
         * @since v24.4.0
         */
        finalizeBindings(instance: object, options?: FinalizeBindingsOptions): void;
        /**
         * `wasiImport` is an object that implements the WASI system call API. This object
         * should be passed as the `wasi_snapshot_preview1` import during the instantiation
         * of a [`WebAssembly.Instance`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance).
         * @since v13.3.0, v12.16.0
         */
        readonly wasiImport: NodeJS.Dict<any>; // TODO: Narrow to DOM types
    }
}
declare module "wasi" {
    export * from "node:wasi";
}
