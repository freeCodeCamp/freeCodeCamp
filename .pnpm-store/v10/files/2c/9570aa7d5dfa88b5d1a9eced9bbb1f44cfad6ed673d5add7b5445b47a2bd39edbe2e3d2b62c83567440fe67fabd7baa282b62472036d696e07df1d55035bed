/**
 * The `node:inspector` module provides an API for interacting with the V8
 * inspector.
 * @see [source](https://github.com/nodejs/node/blob/v24.x/lib/inspector.js)
 */
declare module "inspector" {
    import EventEmitter = require("node:events");
    /**
     * The `inspector.Session` is used for dispatching messages to the V8 inspector
     * back-end and receiving message responses and notifications.
     */
    class Session extends EventEmitter {
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
    /**
     * Activate inspector on host and port. Equivalent to `node --inspect=[[host:]port]`, but can be done programmatically after node has
     * started.
     *
     * If wait is `true`, will block until a client has connected to the inspect port
     * and flow control has been passed to the debugger client.
     *
     * See the [security warning](https://nodejs.org/docs/latest-v24.x/api/cli.html#warning-binding-inspector-to-a-public-ipport-combination-is-insecure)
     * regarding the `host` parameter usage.
     * @param port Port to listen on for inspector connections. Defaults to what was specified on the CLI.
     * @param host Host to listen on for inspector connections. Defaults to what was specified on the CLI.
     * @param wait Block until a client has connected. Defaults to what was specified on the CLI.
     * @returns Disposable that calls `inspector.close()`.
     */
    function open(port?: number, host?: string, wait?: boolean): Disposable;
    /**
     * Deactivate the inspector. Blocks until there are no active connections.
     */
    function close(): void;
    /**
     * Return the URL of the active inspector, or `undefined` if there is none.
     *
     * ```console
     * $ node --inspect -p 'inspector.url()'
     * Debugger listening on ws://127.0.0.1:9229/166e272e-7a30-4d09-97ce-f1c012b43c34
     * For help, see: https://nodejs.org/en/docs/inspector
     * ws://127.0.0.1:9229/166e272e-7a30-4d09-97ce-f1c012b43c34
     *
     * $ node --inspect=localhost:3000 -p 'inspector.url()'
     * Debugger listening on ws://localhost:3000/51cf8d0e-3c36-4c59-8efd-54519839e56a
     * For help, see: https://nodejs.org/en/docs/inspector
     * ws://localhost:3000/51cf8d0e-3c36-4c59-8efd-54519839e56a
     *
     * $ node -p 'inspector.url()'
     * undefined
     * ```
     */
    function url(): string | undefined;
    /**
     * Blocks until a client (existing or connected later) has sent `Runtime.runIfWaitingForDebugger` command.
     *
     * An exception will be thrown if there is no active inspector.
     * @since v12.7.0
     */
    function waitForDebugger(): void;
    // These methods are exposed by the V8 inspector console API (inspector/v8-console.h).
    // The method signatures differ from those of the Node.js console, and are deliberately
    // typed permissively.
    interface InspectorConsole {
        debug(...data: any[]): void;
        error(...data: any[]): void;
        info(...data: any[]): void;
        log(...data: any[]): void;
        warn(...data: any[]): void;
        dir(...data: any[]): void;
        dirxml(...data: any[]): void;
        table(...data: any[]): void;
        trace(...data: any[]): void;
        group(...data: any[]): void;
        groupCollapsed(...data: any[]): void;
        groupEnd(...data: any[]): void;
        clear(...data: any[]): void;
        count(label?: any): void;
        countReset(label?: any): void;
        assert(value?: any, ...data: any[]): void;
        profile(label?: any): void;
        profileEnd(label?: any): void;
        time(label?: any): void;
        timeLog(label?: any): void;
        timeStamp(label?: any): void;
    }
    /**
     * An object to send messages to the remote inspector console.
     * @since v11.0.0
     */
    const console: InspectorConsole;
    // DevTools protocol event broadcast methods
    namespace Network {
        /**
         * This feature is only available with the `--experimental-network-inspection` flag enabled.
         *
         * Broadcasts the `Network.requestWillBeSent` event to connected frontends. This event indicates that
         * the application is about to send an HTTP request.
         * @since v22.6.0
         */
        function requestWillBeSent(params: RequestWillBeSentEventDataType): void;
        /**
         * This feature is only available with the `--experimental-network-inspection` flag enabled.
         *
         * Broadcasts the `Network.dataReceived` event to connected frontends, or buffers the data if
         * `Network.streamResourceContent` command was not invoked for the given request yet.
         *
         * Also enables `Network.getResponseBody` command to retrieve the response data.
         * @since v24.2.0
         */
        function dataReceived(params: DataReceivedEventDataType): void;
        /**
         * This feature is only available with the `--experimental-network-inspection` flag enabled.
         *
         * Enables `Network.getRequestPostData` command to retrieve the request data.
         * @since v24.3.0
         */
        function dataSent(params: unknown): void;
        /**
         * This feature is only available with the `--experimental-network-inspection` flag enabled.
         *
         * Broadcasts the `Network.responseReceived` event to connected frontends. This event indicates that
         * HTTP response is available.
         * @since v22.6.0
         */
        function responseReceived(params: ResponseReceivedEventDataType): void;
        /**
         * This feature is only available with the `--experimental-network-inspection` flag enabled.
         *
         * Broadcasts the `Network.loadingFinished` event to connected frontends. This event indicates that
         * HTTP request has finished loading.
         * @since v22.6.0
         */
        function loadingFinished(params: LoadingFinishedEventDataType): void;
        /**
         * This feature is only available with the `--experimental-network-inspection` flag enabled.
         *
         * Broadcasts the `Network.loadingFailed` event to connected frontends. This event indicates that
         * HTTP request has failed to load.
         * @since v22.7.0
         */
        function loadingFailed(params: LoadingFailedEventDataType): void;
        /**
         * This feature is only available with the `--experimental-network-inspection` flag enabled.
         *
         * Broadcasts the `Network.webSocketCreated` event to connected frontends. This event indicates that
         * a WebSocket connection has been initiated.
         * @since v24.7.0
         */
        function webSocketCreated(params: WebSocketCreatedEventDataType): void;
        /**
         * This feature is only available with the `--experimental-network-inspection` flag enabled.
         *
         * Broadcasts the `Network.webSocketHandshakeResponseReceived` event to connected frontends.
         * This event indicates that the WebSocket handshake response has been received.
         * @since v24.7.0
         */
        function webSocketHandshakeResponseReceived(params: WebSocketHandshakeResponseReceivedEventDataType): void;
        /**
         * This feature is only available with the `--experimental-network-inspection` flag enabled.
         *
         * Broadcasts the `Network.webSocketClosed` event to connected frontends.
         * This event indicates that a WebSocket connection has been closed.
         * @since v24.7.0
         */
        function webSocketClosed(params: WebSocketClosedEventDataType): void;
    }
    namespace NetworkResources {
        /**
         * This feature is only available with the `--experimental-inspector-network-resource` flag enabled.
         *
         * The inspector.NetworkResources.put method is used to provide a response for a loadNetworkResource
         * request issued via the Chrome DevTools Protocol (CDP).
         * This is typically triggered when a source map is specified by URL, and a DevTools frontend—such as
         * Chrome—requests the resource to retrieve the source map.
         *
         * This method allows developers to predefine the resource content to be served in response to such CDP requests.
         *
         * ```js
         * const inspector = require('node:inspector');
         * // By preemptively calling put to register the resource, a source map can be resolved when
         * // a loadNetworkResource request is made from the frontend.
         * async function setNetworkResources() {
         *   const mapUrl = 'http://localhost:3000/dist/app.js.map';
         *   const tsUrl = 'http://localhost:3000/src/app.ts';
         *   const distAppJsMap = await fetch(mapUrl).then((res) => res.text());
         *   const srcAppTs = await fetch(tsUrl).then((res) => res.text());
         *   inspector.NetworkResources.put(mapUrl, distAppJsMap);
         *   inspector.NetworkResources.put(tsUrl, srcAppTs);
         * };
         * setNetworkResources().then(() => {
         *   require('./dist/app');
         * });
         * ```
         *
         * For more details, see the official CDP documentation: [Network.loadNetworkResource](https://chromedevtools.github.io/devtools-protocol/tot/Network/#method-loadNetworkResource)
         * @since v24.5.0
         * @experimental
         */
        function put(url: string, data: string): void;
    }
}

/**
 * The `node:inspector` module provides an API for interacting with the V8
 * inspector.
 */
declare module "node:inspector" {
    export * from "inspector";
}

/**
 * The `node:inspector/promises` module provides an API for interacting with the V8
 * inspector.
 * @see [source](https://github.com/nodejs/node/blob/v24.x/lib/inspector/promises.js)
 * @since v19.0.0
 */
declare module "inspector/promises" {
    import EventEmitter = require("node:events");
    export { close, console, NetworkResources, open, url, waitForDebugger } from "inspector";
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

/**
 * The `node:inspector/promises` module provides an API for interacting with the V8
 * inspector.
 * @since v19.0.0
 */
declare module "node:inspector/promises" {
    export * from "inspector/promises";
}
