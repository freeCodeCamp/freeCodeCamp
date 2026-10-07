"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoClient = exports.ServerApiVersion = void 0;
const fs_1 = require("fs");
const bson_1 = require("./bson");
const change_stream_1 = require("./change_stream");
const mongo_credentials_1 = require("./cmap/auth/mongo_credentials");
const providers_1 = require("./cmap/auth/providers");
const client_metadata_1 = require("./cmap/handshake/client_metadata");
const responses_1 = require("./cmap/wire_protocol/responses");
const connection_string_1 = require("./connection_string");
const constants_1 = require("./constants");
const db_1 = require("./db");
const error_1 = require("./error");
const mongo_client_auth_providers_1 = require("./mongo_client_auth_providers");
const mongo_logger_1 = require("./mongo_logger");
const mongo_types_1 = require("./mongo_types");
const executor_1 = require("./operations/client_bulk_write/executor");
const execute_operation_1 = require("./operations/execute_operation");
const operation_1 = require("./operations/operation");
const read_preference_1 = require("./read_preference");
const resource_management_1 = require("./resource_management");
const server_selection_1 = require("./sdam/server_selection");
const topology_1 = require("./sdam/topology");
const sessions_1 = require("./sessions");
const utils_1 = require("./utils");
/** @public */
exports.ServerApiVersion = Object.freeze({
    v1: '1'
});
/**
 * @public
 *
 * The **MongoClient** class is a class that allows for making Connections to MongoDB.
 *
 * **NOTE:** The programmatically provided options take precedence over the URI options.
 *
 * @remarks
 *
 * A MongoClient is the entry point to connecting to a MongoDB server.
 *
 * It handles a multitude of features on your application's behalf:
 * - **Server Host Connection Configuration**: A MongoClient is responsible for reading TLS cert, ca, and crl files if provided.
 * - **SRV Record Polling**: A "`mongodb+srv`" style connection string is used to have the MongoClient resolve DNS SRV records of all server hostnames which the driver periodically monitors for changes and adjusts its current view of hosts correspondingly.
 * - **Server Monitoring**: The MongoClient automatically keeps monitoring the health of server nodes in your cluster to reach out to the correct and lowest latency one available.
 * - **Connection Pooling**: To avoid paying the cost of rebuilding a connection to the server on every operation the MongoClient keeps idle connections preserved for reuse.
 * - **Session Pooling**: The MongoClient creates logical sessions that enable retryable writes, causal consistency, and transactions. It handles pooling these sessions for reuse in subsequent operations.
 * - **Cursor Operations**: A MongoClient's cursors use the health monitoring system to send the request for more documents to the same server the query began on.
 * - **Mongocryptd process**: When using auto encryption, a MongoClient will launch a `mongocryptd` instance for handling encryption if the mongocrypt shared library isn't in use.
 *
 * There are many more features of a MongoClient that are not listed above.
 *
 * In order to enable these features, a number of asynchronous Node.js resources are established by the driver: Timers, FS Requests, Sockets, etc.
 * For details on cleanup, please refer to the MongoClient `close()` documentation.
 *
 * @example
 * ```ts
 * import { MongoClient } from 'mongodb';
 * // Enable command monitoring for debugging
 * const client = new MongoClient('mongodb://localhost:27017?appName=mflix', { monitorCommands: true });
 * ```
 */
class MongoClient extends mongo_types_1.TypedEventEmitter {
    constructor(url, options) {
        super();
        this.driverInfoList = [];
        this.on('error', utils_1.noop);
        this.options = (0, connection_string_1.parseOptions)(url, this, options);
        this.appendMetadata(this.options.driverInfo);
        const shouldSetLogger = Object.values(this.options.mongoLoggerOptions.componentSeverities).some(value => value !== mongo_logger_1.SeverityLevel.OFF);
        this.mongoLogger = shouldSetLogger
            ? new mongo_logger_1.MongoLogger(this.options.mongoLoggerOptions)
            : undefined;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const client = this;
        // The internal state
        this.s = {
            url,
            bsonOptions: (0, bson_1.resolveBSONOptions)(this.options),
            namespace: (0, utils_1.ns)('admin'),
            hasBeenClosed: false,
            sessionPool: new sessions_1.ServerSessionPool(this),
            activeSessions: new Set(),
            activeCursors: new Set(),
            authProviders: new mongo_client_auth_providers_1.MongoClientAuthProviders(),
            get options() {
                return client.options;
            },
            get readConcern() {
                return client.options.readConcern;
            },
            get writeConcern() {
                return client.options.writeConcern;
            },
            get readPreference() {
                return client.options.readPreference;
            },
            get isMongoClient() {
                return true;
            }
        };
        this.checkForNonGenuineHosts();
    }
    /** @internal */
    async asyncDispose() {
        await this.close();
    }
    /**
     * Append metadata to the client metadata after instantiation.
     * @param driverInfo - Information about the application or library.
     */
    appendMetadata(driverInfo) {
        const isDuplicateDriverInfo = this.driverInfoList.some(info => (0, client_metadata_1.isDriverInfoEqual)(info, driverInfo));
        if (isDuplicateDriverInfo)
            return;
        this.driverInfoList.push(driverInfo);
        this.options.metadata = (0, client_metadata_1.makeClientMetadata)(this.driverInfoList, this.options);
        this.options.extendedMetadata = (0, client_metadata_1.addContainerMetadata)(this.options.metadata)
            .then(undefined, utils_1.squashError)
            .then(result => result ?? {}); // ensure Promise<Document>
    }
    /** @internal */
    checkForNonGenuineHosts() {
        const documentDBHostnames = this.options.hosts.filter((hostAddress) => (0, utils_1.isHostMatch)(utils_1.DOCUMENT_DB_CHECK, hostAddress.host));
        const srvHostIsDocumentDB = (0, utils_1.isHostMatch)(utils_1.DOCUMENT_DB_CHECK, this.options.srvHost);
        const cosmosDBHostnames = this.options.hosts.filter((hostAddress) => (0, utils_1.isHostMatch)(utils_1.COSMOS_DB_CHECK, hostAddress.host));
        const srvHostIsCosmosDB = (0, utils_1.isHostMatch)(utils_1.COSMOS_DB_CHECK, this.options.srvHost);
        if (documentDBHostnames.length !== 0 || srvHostIsDocumentDB) {
            this.mongoLogger?.info('client', utils_1.DOCUMENT_DB_MSG);
        }
        else if (cosmosDBHostnames.length !== 0 || srvHostIsCosmosDB) {
            this.mongoLogger?.info('client', utils_1.COSMOS_DB_MSG);
        }
    }
    get serverApi() {
        return this.options.serverApi && Object.freeze({ ...this.options.serverApi });
    }
    /**
     * Intended for APM use only
     * @internal
     */
    get monitorCommands() {
        return this.options.monitorCommands;
    }
    set monitorCommands(value) {
        this.options.monitorCommands = value;
    }
    /** @internal */
    get autoEncrypter() {
        return this.options.autoEncrypter;
    }
    get readConcern() {
        return this.s.readConcern;
    }
    get writeConcern() {
        return this.s.writeConcern;
    }
    get readPreference() {
        return this.s.readPreference;
    }
    get bsonOptions() {
        return this.s.bsonOptions;
    }
    get timeoutMS() {
        return this.s.options.timeoutMS;
    }
    /**
     * Executes a client bulk write operation, available on server 8.0+.
     * @param models - The client bulk write models.
     * @param options - The client bulk write options.
     * @returns A ClientBulkWriteResult for acknowledged writes and ok: 1 for unacknowledged writes.
     */
    async bulkWrite(models, options) {
        if (this.autoEncrypter) {
            throw new error_1.MongoInvalidArgumentError('MongoClient bulkWrite does not currently support automatic encryption.');
        }
        // We do not need schema type information past this point ("as any" is fine)
        return await new executor_1.ClientBulkWriteExecutor(this, models, (0, utils_1.resolveOptions)(this, options)).execute();
    }
    /**
     * Connect to MongoDB using a url
     *
     * @remarks
     * Calling `connect` is optional since the first operation you perform will call `connect` if it's needed.
     * `timeoutMS` will bound the time any operation can take before throwing a timeout error.
     * However, when the operation being run is automatically connecting your `MongoClient` the `timeoutMS` will not apply to the time taken to connect the MongoClient.
     * This means the time to setup the `MongoClient` does not count against `timeoutMS`.
     * If you are using `timeoutMS` we recommend connecting your client explicitly in advance of any operation to avoid this inconsistent execution time.
     *
     * @remarks
     * The driver will look up corresponding SRV and TXT records if the connection string starts with `mongodb+srv://`.
     * If those look ups throw a DNS Timeout error, the driver will retry the look up once.
     *
     * @see docs.mongodb.org/manual/reference/connection-string/
     */
    async connect() {
        if (this.connectionLock) {
            return await this.connectionLock;
        }
        try {
            this.connectionLock = this._connect();
            await this.connectionLock;
        }
        finally {
            // release
            this.connectionLock = undefined;
        }
        return this;
    }
    /**
     * Create a topology to open the connection, must be locked to avoid topology leaks in concurrency scenario.
     * Locking is enforced by the connect method.
     *
     * @internal
     */
    async _connect() {
        if (this.topology && this.topology.isConnected()) {
            return this;
        }
        const options = this.options;
        if (options.tls) {
            if (typeof options.tlsCAFile === 'string') {
                options.ca ??= await fs_1.promises.readFile(options.tlsCAFile);
            }
            if (typeof options.tlsCRLFile === 'string') {
                options.crl ??= await fs_1.promises.readFile(options.tlsCRLFile);
            }
            if (typeof options.tlsCertificateKeyFile === 'string') {
                if (!options.key || !options.cert) {
                    const contents = await fs_1.promises.readFile(options.tlsCertificateKeyFile);
                    options.key ??= contents;
                    options.cert ??= contents;
                }
            }
        }
        if (typeof options.srvHost === 'string') {
            const hosts = await (0, connection_string_1.resolveSRVRecord)(options);
            for (const [index, host] of hosts.entries()) {
                options.hosts[index] = host;
            }
        }
        // It is important to perform validation of hosts AFTER SRV resolution, to check the real hostname,
        // but BEFORE we even attempt connecting with a potentially not allowed hostname
        if (options.credentials?.mechanism === providers_1.AuthMechanism.MONGODB_OIDC) {
            const allowedHosts = options.credentials?.mechanismProperties?.ALLOWED_HOSTS || mongo_credentials_1.DEFAULT_ALLOWED_HOSTS;
            const isServiceAuth = !!options.credentials?.mechanismProperties?.ENVIRONMENT;
            if (!isServiceAuth) {
                for (const host of options.hosts) {
                    if (!(0, utils_1.hostMatchesWildcards)(host.toHostPort().host, allowedHosts)) {
                        throw new error_1.MongoInvalidArgumentError(`Host '${host}' is not valid for OIDC authentication with ALLOWED_HOSTS of '${allowedHosts.join(',')}'`);
                    }
                }
            }
        }
        this.topology = new topology_1.Topology(this, options.hosts, options);
        // Events can be emitted before initialization is complete so we have to
        // save the reference to the topology on the client ASAP if the event handlers need to access it
        this.topology.once(topology_1.Topology.OPEN, () => this.emit('open', this));
        for (const event of constants_1.MONGO_CLIENT_EVENTS) {
            this.topology.on(event, (...args) => this.emit(event, ...args));
        }
        const topologyConnect = async () => {
            try {
                await this.topology?.connect(options);
            }
            catch (error) {
                this.topology?.close();
                throw error;
            }
        };
        if (this.autoEncrypter) {
            await this.autoEncrypter?.init();
            await topologyConnect();
            await options.encrypter.connectInternalClient();
        }
        else {
            await topologyConnect();
        }
        return this;
    }
    /**
     * Cleans up resources managed by the MongoClient.
     *
     * The close method clears and closes all resources whose lifetimes are managed by the MongoClient.
     * Please refer to the `MongoClient` class documentation for a high level overview of the client's key features and responsibilities.
     *
     * **However,** the close method does not handle the cleanup of resources explicitly created by the user.
     * Any user-created driver resource with its own `close()` method should be explicitly closed by the user before calling MongoClient.close().
     * This method is written as a "best effort" attempt to leave behind the least amount of resources server-side when possible.
     *
     * The following list defines ideal preconditions and consequent pitfalls if they are not met.
     * The MongoClient, ClientSession, Cursors and ChangeStreams all support [explicit resource management](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-2.html).
     * By using explicit resource management to manage the lifetime of driver resources instead of manually managing their lifetimes, the pitfalls outlined below can be avoided.
     *
     * The close method performs the following in the order listed:
     * - Client-side:
     *   - **Close in-use connections**: Any connections that are currently waiting on a response from the server will be closed.
     *     This is performed _first_ to avoid reaching the next step (server-side clean up) and having no available connections to check out.
     *     - _Ideal_: All operations have been awaited or cancelled, and the outcomes, regardless of success or failure, have been processed before closing the client servicing the operation.
     *     - _Pitfall_: When `client.close()` is called and all connections are in use, after closing them, the client must create new connections for cleanup operations, which comes at the cost of new TLS/TCP handshakes and authentication steps.
     * - Server-side:
     *   - **Close active cursors**: All cursors that haven't been completed will have a `killCursor` operation sent to the server they were initialized on, freeing the server-side resource.
     *     - _Ideal_: Cursors are explicitly closed or completed before `client.close()` is called.
     *     - _Pitfall_: `killCursors` may have to build a new connection if the in-use closure ended all pooled connections.
     *   - **End active sessions**: In-use sessions created with `client.startSession()` or `client.withSession()` or implicitly by the driver will have their `.endSession()` method called.
     *     Contrary to the name of the method, `endSession()` returns the session to the client's pool of sessions rather than end them on the server.
     *     - _Ideal_: Transaction outcomes are awaited and their corresponding explicit sessions are ended before `client.close()` is called.
     *     - _Pitfall_: **This step aborts in-progress transactions**. It is advisable to observe the outcome of a transaction before closing your client.
     *   - **End all pooled sessions**: The `endSessions` command with all session IDs the client has pooled is sent to the server to inform the cluster it can clean them up.
     *     - _Ideal_: No user intervention is expected.
     *     - _Pitfall_: None.
     *
     * The remaining shutdown is of the MongoClient resources that are intended to be entirely internal but is documented here as their existence relates to the JS event loop.
     *
     * - Client-side (again):
     *   - **Stop all server monitoring**: Connections kept live for detecting cluster changes and roundtrip time measurements are shutdown.
     *   - **Close all pooled connections**: Each server node in the cluster has a corresponding connection pool and all connections in the pool are closed. Any operations waiting to check out a connection will have an error thrown instead of a connection returned.
     *   - **Clear out server selection queue**: Any operations that are in the process of waiting for a server to be selected will have an error thrown instead of a server returned.
     *   - **Close encryption-related resources**: An internal MongoClient created for communicating with `mongocryptd` or other encryption purposes is closed. (Using this same method of course!)
     *
     * After the close method completes there should be no MongoClient related resources [ref-ed in Node.js' event loop](https://docs.libuv.org/en/v1.x/handle.html#reference-counting).
     * This should allow Node.js to exit gracefully if MongoClient resources were the only active handles in the event loop.
     *
     * @param _force - currently an unused flag that has no effect. Defaults to `false`.
     */
    async close(_force = false) {
        if (this.closeLock) {
            return await this.closeLock;
        }
        try {
            this.closeLock = this._close();
            await this.closeLock;
        }
        finally {
            // release
            this.closeLock = undefined;
        }
    }
    /* @internal */
    async _close() {
        // There's no way to set hasBeenClosed back to false
        Object.defineProperty(this.s, 'hasBeenClosed', {
            value: true,
            enumerable: true,
            configurable: false,
            writable: false
        });
        this.topology?.closeCheckedOutConnections();
        const activeCursorCloses = Array.from(this.s.activeCursors, cursor => cursor.close());
        this.s.activeCursors.clear();
        await Promise.all(activeCursorCloses);
        const activeSessionEnds = Array.from(this.s.activeSessions, session => session.endSession());
        this.s.activeSessions.clear();
        await Promise.all(activeSessionEnds);
        if (this.topology == null) {
            return;
        }
        // If we would attempt to select a server and get nothing back we short circuit
        // to avoid the server selection timeout.
        const selector = (0, server_selection_1.readPreferenceServerSelector)(read_preference_1.ReadPreference.primaryPreferred);
        const topologyDescription = this.topology.description;
        const serverDescriptions = Array.from(topologyDescription.servers.values());
        const servers = selector(topologyDescription, serverDescriptions);
        if (servers.length !== 0) {
            const endSessions = Array.from(this.s.sessionPool.sessions, ({ id }) => id);
            if (endSessions.length !== 0) {
                try {
                    class EndSessionsOperation extends operation_1.AbstractOperation {
                        constructor() {
                            super(...arguments);
                            this.ns = utils_1.MongoDBNamespace.fromString('admin.$cmd');
                            this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
                        }
                        buildCommand(_connection, _session) {
                            return {
                                endSessions
                            };
                        }
                        buildOptions(timeoutContext) {
                            return {
                                timeoutContext,
                                readPreference: read_preference_1.ReadPreference.primaryPreferred,
                                noResponse: true
                            };
                        }
                        get commandName() {
                            return 'endSessions';
                        }
                    }
                    await (0, execute_operation_1.executeOperation)(this, new EndSessionsOperation());
                }
                catch (error) {
                    (0, utils_1.squashError)(error);
                }
            }
        }
        // clear out references to old topology
        const topology = this.topology;
        this.topology = undefined;
        topology.close();
        const { encrypter } = this.options;
        if (encrypter) {
            await encrypter.close(this);
        }
    }
    /**
     * Create a new Db instance sharing the current socket connections.
     *
     * @param dbName - The name of the database we want to use. If not provided, use database name from connection string.
     * @param options - Optional settings for Db construction
     */
    db(dbName, options) {
        options = options ?? {};
        // Default to db from connection string if not provided
        if (!dbName) {
            dbName = this.s.options.dbName;
        }
        // Copy the options and add out internal override of the not shared flag
        const finalOptions = Object.assign({}, this.options, options);
        // Return the db object
        const db = new db_1.Db(this, dbName, finalOptions);
        // Return the database
        return db;
    }
    /**
     * Connect to MongoDB using a url
     *
     * @remarks
     * Calling `connect` is optional since the first operation you perform will call `connect` if it's needed.
     * `timeoutMS` will bound the time any operation can take before throwing a timeout error.
     * However, when the operation being run is automatically connecting your `MongoClient` the `timeoutMS` will not apply to the time taken to connect the MongoClient.
     * This means the time to setup the `MongoClient` does not count against `timeoutMS`.
     * If you are using `timeoutMS` we recommend connecting your client explicitly in advance of any operation to avoid this inconsistent execution time.
     *
     * @remarks
     * The programmatically provided options take precedence over the URI options.
     *
     * @remarks
     * The driver will look up corresponding SRV and TXT records if the connection string starts with `mongodb+srv://`.
     * If those look ups throw a DNS Timeout error, the driver will retry the look up once.
     *
     * @see https://www.mongodb.com/docs/manual/reference/connection-string/
     */
    static async connect(url, options) {
        const client = new this(url, options);
        return await client.connect();
    }
    /**
     * Creates a new ClientSession. When using the returned session in an operation
     * a corresponding ServerSession will be created.
     *
     * @remarks
     * A ClientSession instance may only be passed to operations being performed on the same
     * MongoClient it was started from.
     */
    startSession(options) {
        const session = new sessions_1.ClientSession(this, this.s.sessionPool, { explicit: true, ...options }, this.options);
        this.s.activeSessions.add(session);
        session.once('ended', () => {
            this.s.activeSessions.delete(session);
        });
        return session;
    }
    async withSession(optionsOrExecutor, executor) {
        const options = {
            // Always define an owner
            owner: Symbol(),
            // If it's an object inherit the options
            ...(typeof optionsOrExecutor === 'object' ? optionsOrExecutor : {})
        };
        const withSessionCallback = typeof optionsOrExecutor === 'function' ? optionsOrExecutor : executor;
        if (withSessionCallback == null) {
            throw new error_1.MongoInvalidArgumentError('Missing required callback parameter');
        }
        const session = this.startSession(options);
        try {
            return await withSessionCallback(session);
        }
        finally {
            try {
                await session.endSession();
            }
            catch (error) {
                (0, utils_1.squashError)(error);
            }
        }
    }
    /**
     * Create a new Change Stream, watching for new changes (insertions, updates,
     * replacements, deletions, and invalidations) in this cluster. Will ignore all
     * changes to system collections, as well as the local, admin, and config databases.
     *
     * @remarks
     * watch() accepts two generic arguments for distinct use cases:
     * - The first is to provide the schema that may be defined for all the data within the current cluster
     * - The second is to override the shape of the change stream document entirely, if it is not provided the type will default to ChangeStreamDocument of the first argument
     *
     * @remarks
     * When `timeoutMS` is configured for a change stream, it will have different behaviour depending
     * on whether the change stream is in iterator mode or emitter mode. In both cases, a change
     * stream will time out if it does not receive a change event within `timeoutMS` of the last change
     * event.
     *
     * Note that if a change stream is consistently timing out when watching a collection, database or
     * client that is being changed, then this may be due to the server timing out before it can finish
     * processing the existing oplog. To address this, restart the change stream with a higher
     * `timeoutMS`.
     *
     * If the change stream times out the initial aggregate operation to establish the change stream on
     * the server, then the client will close the change stream. If the getMore calls to the server
     * time out, then the change stream will be left open, but will throw a MongoOperationTimeoutError
     * when in iterator mode and emit an error event that returns a MongoOperationTimeoutError in
     * emitter mode.
     *
     * To determine whether or not the change stream is still open following a timeout, check the
     * {@link ChangeStream.closed} getter.
     *
     * @example
     * In iterator mode, if a next() call throws a timeout error, it will attempt to resume the change stream.
     * The next call can just be retried after this succeeds.
     * ```ts
     * const changeStream = collection.watch([], { timeoutMS: 100 });
     * try {
     *     await changeStream.next();
     * } catch (e) {
     *     if (e instanceof MongoOperationTimeoutError && !changeStream.closed) {
     *       await changeStream.next();
     *     }
     *     throw e;
     * }
     * ```
     *
     * @example
     * In emitter mode, if the change stream goes `timeoutMS` without emitting a change event, it will
     * emit an error event that returns a MongoOperationTimeoutError, but will not close the change
     * stream unless the resume attempt fails. There is no need to re-establish change listeners as
     * this will automatically continue emitting change events once the resume attempt completes.
     *
     * ```ts
     * const changeStream = collection.watch([], { timeoutMS: 100 });
     * changeStream.on('change', console.log);
     * changeStream.on('error', e => {
     *     if (e instanceof MongoOperationTimeoutError && !changeStream.closed) {
     *         // do nothing
     *     } else {
     *         changeStream.close();
     *     }
     * });
     * ```
     * @param pipeline - An array of {@link https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/|aggregation pipeline stages} through which to pass change stream documents. This allows for filtering (using $match) and manipulating the change stream documents.
     * @param options - Optional settings for the command
     * @typeParam TSchema - Type of the data being detected by the change stream
     * @typeParam TChange - Type of the whole change stream document emitted
     */
    watch(pipeline = [], options = {}) {
        // Allow optionally not specifying a pipeline
        if (!Array.isArray(pipeline)) {
            options = pipeline;
            pipeline = [];
        }
        return new change_stream_1.ChangeStream(this, pipeline, (0, utils_1.resolveOptions)(this, options));
    }
}
exports.MongoClient = MongoClient;
(0, resource_management_1.configureResourceManagement)(MongoClient.prototype);
//# sourceMappingURL=mongo_client.js.map