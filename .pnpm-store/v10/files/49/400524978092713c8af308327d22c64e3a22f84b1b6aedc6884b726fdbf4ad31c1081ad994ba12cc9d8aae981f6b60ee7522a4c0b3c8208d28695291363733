declare module "node:inspector/promises" {
    import { EventEmitter } from "node:events";
    export { close, console, NetworkResources, open, url, waitForDebugger } from "node:inspector";
    /**
     * The `inspector.Session` is used for dispatching messages to the V8 inspector
     * back-end and receiving message responses and notifications.
     * @since v19.0.0
     */
    export class Session extends EventEmitter {
        /**
         * Create a new instance of the inspector.Session class.
         * The inspector session needs to be connected through `session.connect()` before the messages can be dispatched to the inspector backend.
         */
        constructor();
        /**
         * Connects a session to the inspector back-end.
         */
        connect(): void;
        /**
         * Connects a session to the inspector back-end.
         * An exception will be thrown if this API was not called on a Worker thread.
         * @since v12.11.0
         */
        connectToMainThread(): void;
        /**
         * Immediately close the session. All pending message callbacks will be called with an error.
         * `session.connect()` will need to be called to be able to send messages again.
         * Reconnected session will lose all inspector state, such as enabled agents or configured breakpoints.
         */
        disconnect(): void;
    }
}
declare module "inspector/promises" {
    export * from "node:inspector/promises";
}
