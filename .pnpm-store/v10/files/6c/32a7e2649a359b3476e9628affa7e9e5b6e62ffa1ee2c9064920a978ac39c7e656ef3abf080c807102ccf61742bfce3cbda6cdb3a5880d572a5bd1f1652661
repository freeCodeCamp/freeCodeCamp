"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoConnection = exports.SizedMessageTransform = exports.Connection = void 0;
exports.hasSessionSupport = hasSessionSupport;
const stream_1 = require("stream");
const timers_1 = require("timers");
const bson_1 = require("../bson");
const constants_1 = require("../constants");
const error_1 = require("../error");
const mongo_logger_1 = require("../mongo_logger");
const mongo_types_1 = require("../mongo_types");
const read_preference_1 = require("../read_preference");
const common_1 = require("../sdam/common");
const sessions_1 = require("../sessions");
const timeout_1 = require("../timeout");
const utils_1 = require("../utils");
const command_monitoring_events_1 = require("./command_monitoring_events");
const commands_1 = require("./commands");
const stream_description_1 = require("./stream_description");
const compression_1 = require("./wire_protocol/compression");
const on_data_1 = require("./wire_protocol/on_data");
const responses_1 = require("./wire_protocol/responses");
const shared_1 = require("./wire_protocol/shared");
/** @internal */
function hasSessionSupport(conn) {
    const description = conn.description;
    return description.logicalSessionTimeoutMinutes != null;
}
function streamIdentifier(stream, options) {
    if (options.proxyHost) {
        // If proxy options are specified, the properties of `stream` itself
        // will not accurately reflect what endpoint this is connected to.
        return options.hostAddress.toString();
    }
    const { remoteAddress, remotePort } = stream;
    if (typeof remoteAddress === 'string' && typeof remotePort === 'number') {
        return utils_1.HostAddress.fromHostPort(remoteAddress, remotePort).toString();
    }
    return (0, utils_1.uuidV4)().toString('hex');
}
/** @internal */
class Connection extends mongo_types_1.TypedEventEmitter {
    constructor(stream, options) {
        super();
        this.lastHelloMS = -1;
        this.helloOk = false;
        this.delayedTimeoutId = null;
        /** Indicates that the connection (including underlying TCP socket) has been closed. */
        this.closed = false;
        this.clusterTime = null;
        this.error = null;
        this.dataEvents = null;
        this.on('error', utils_1.noop);
        this.socket = stream;
        this.id = options.id;
        this.address = streamIdentifier(stream, options);
        this.socketTimeoutMS = options.socketTimeoutMS ?? 0;
        this.monitorCommands = options.monitorCommands;
        this.serverApi = options.serverApi;
        this.mongoLogger = options.mongoLogger;
        this.established = false;
        this.description = new stream_description_1.StreamDescription(this.address, options);
        this.generation = options.generation;
        this.lastUseTime = (0, utils_1.now)();
        this.messageStream = this.socket
            .on('error', this.onSocketError.bind(this))
            .pipe(new SizedMessageTransform({ connection: this }))
            .on('error', this.onTransformError.bind(this));
        this.socket.on('close', this.onClose.bind(this));
        this.socket.on('timeout', this.onTimeout.bind(this));
        this.messageStream.pause();
    }
    get hello() {
        return this.description.hello;
    }
    // the `connect` method stores the result of the handshake hello on the connection
    set hello(response) {
        this.description.receiveResponse(response);
        Object.freeze(this.description);
    }
    get serviceId() {
        return this.hello?.serviceId;
    }
    get loadBalanced() {
        return this.description.loadBalanced;
    }
    get idleTime() {
        return (0, utils_1.calculateDurationInMs)(this.lastUseTime);
    }
    get hasSessionSupport() {
        return this.description.logicalSessionTimeoutMinutes != null;
    }
    get supportsOpMsg() {
        return (this.description != null &&
            // TODO(NODE-6672,NODE-6287): This guard is primarily for maxWireVersion = 0
            (0, utils_1.maxWireVersion)(this) >= 6 &&
            !this.description.__nodejs_mock_server__);
    }
    get shouldEmitAndLogCommand() {
        return ((this.monitorCommands ||
            (this.established &&
                !this.authContext?.reauthenticating &&
                this.mongoLogger?.willLog(mongo_logger_1.MongoLoggableComponent.COMMAND, mongo_logger_1.SeverityLevel.DEBUG))) ??
            false);
    }
    markAvailable() {
        this.lastUseTime = (0, utils_1.now)();
    }
    onSocketError(cause) {
        this.onError(new error_1.MongoNetworkError(cause.message, { cause }));
    }
    onTransformError(error) {
        this.onError(error);
    }
    onError(error) {
        this.cleanup(error);
    }
    onClose() {
        const message = `connection ${this.id} to ${this.address} closed`;
        this.cleanup(new error_1.MongoNetworkError(message));
    }
    onTimeout() {
        this.delayedTimeoutId = (0, timers_1.setTimeout)(() => {
            const message = `connection ${this.id} to ${this.address} timed out`;
            const beforeHandshake = this.hello == null;
            this.cleanup(new error_1.MongoNetworkTimeoutError(message, { beforeHandshake }));
        }, 1).unref(); // No need for this timer to hold the event loop open
    }
    destroy() {
        if (this.closed) {
            return;
        }
        // load balanced mode requires that these listeners remain on the connection
        // after cleanup on timeouts, errors or close so we remove them before calling
        // cleanup.
        this.removeAllListeners(Connection.PINNED);
        this.removeAllListeners(Connection.UNPINNED);
        const message = `connection ${this.id} to ${this.address} closed`;
        this.cleanup(new error_1.MongoNetworkError(message));
    }
    /**
     * A method that cleans up the connection.  When `force` is true, this method
     * forcibly destroys the socket.
     *
     * If an error is provided, any in-flight operations will be closed with the error.
     *
     * This method does nothing if the connection is already closed.
     */
    cleanup(error) {
        if (this.closed) {
            return;
        }
        this.socket.destroy();
        this.error = error;
        this.dataEvents?.throw(error).then(undefined, utils_1.squashError);
        this.closed = true;
        this.emit(Connection.CLOSE);
    }
    prepareCommand(db, command, options) {
        let cmd = { ...command };
        const readPreference = (0, shared_1.getReadPreference)(options);
        const session = options?.session;
        let clusterTime = this.clusterTime;
        if (this.serverApi) {
            const { version, strict, deprecationErrors } = this.serverApi;
            cmd.apiVersion = version;
            if (strict != null)
                cmd.apiStrict = strict;
            if (deprecationErrors != null)
                cmd.apiDeprecationErrors = deprecationErrors;
        }
        if (this.hasSessionSupport && session) {
            if (session.clusterTime &&
                clusterTime &&
                session.clusterTime.clusterTime.greaterThan(clusterTime.clusterTime)) {
                clusterTime = session.clusterTime;
            }
            const sessionError = (0, sessions_1.applySession)(session, cmd, options);
            if (sessionError)
                throw sessionError;
        }
        else if (session?.explicit) {
            throw new error_1.MongoCompatibilityError('Current topology does not support sessions');
        }
        // if we have a known cluster time, gossip it
        if (clusterTime) {
            cmd.$clusterTime = clusterTime;
        }
        // For standalone, drivers MUST NOT set $readPreference.
        if (this.description.type !== common_1.ServerType.Standalone) {
            if (!(0, shared_1.isSharded)(this) &&
                !this.description.loadBalanced &&
                this.supportsOpMsg &&
                options.directConnection === true &&
                readPreference?.mode === 'primary') {
                // For mongos and load balancers with 'primary' mode, drivers MUST NOT set $readPreference.
                // For all other types with a direct connection, if the read preference is 'primary'
                // (driver sets 'primary' as default if no read preference is configured),
                // the $readPreference MUST be set to 'primaryPreferred'
                // to ensure that any server type can handle the request.
                cmd.$readPreference = read_preference_1.ReadPreference.primaryPreferred.toJSON();
            }
            else if ((0, shared_1.isSharded)(this) && !this.supportsOpMsg && readPreference?.mode !== 'primary') {
                // When sending a read operation via OP_QUERY and the $readPreference modifier,
                // the query MUST be provided using the $query modifier.
                cmd = {
                    $query: cmd,
                    $readPreference: readPreference.toJSON()
                };
            }
            else if (readPreference?.mode !== 'primary') {
                // For mode 'primary', drivers MUST NOT set $readPreference.
                // For all other read preference modes (i.e. 'secondary', 'primaryPreferred', ...),
                // drivers MUST set $readPreference
                cmd.$readPreference = readPreference.toJSON();
            }
        }
        const commandOptions = {
            numberToSkip: 0,
            numberToReturn: -1,
            checkKeys: false,
            // This value is not overridable
            secondaryOk: readPreference.secondaryOk(),
            ...options
        };
        options.timeoutContext?.addMaxTimeMSToCommand(cmd, options);
        const message = this.supportsOpMsg
            ? new commands_1.OpMsgRequest(db, cmd, commandOptions)
            : new commands_1.OpQueryRequest(db, cmd, commandOptions);
        return message;
    }
    async *sendWire(message, options, responseType) {
        this.throwIfAborted();
        const timeout = options.socketTimeoutMS ??
            options?.timeoutContext?.getSocketTimeoutMS() ??
            this.socketTimeoutMS;
        this.socket.setTimeout(timeout);
        try {
            await this.writeCommand(message, {
                agreedCompressor: this.description.compressor ?? 'none',
                zlibCompressionLevel: this.description.zlibCompressionLevel,
                timeoutContext: options.timeoutContext,
                signal: options.signal
            });
            if (options.noResponse || message.moreToCome) {
                yield responses_1.MongoDBResponse.empty;
                return;
            }
            this.throwIfAborted();
            if (options.timeoutContext?.csotEnabled() &&
                options.timeoutContext.minRoundTripTime != null &&
                options.timeoutContext.remainingTimeMS < options.timeoutContext.minRoundTripTime) {
                throw new error_1.MongoOperationTimeoutError('Server roundtrip time is greater than the time remaining');
            }
            for await (const response of this.readMany(options)) {
                this.socket.setTimeout(0);
                const bson = response.parse();
                const document = (responseType ?? responses_1.MongoDBResponse).make(bson);
                yield document;
                this.throwIfAborted();
                this.socket.setTimeout(timeout);
            }
        }
        finally {
            this.socket.setTimeout(0);
        }
    }
    async *sendCommand(ns, command, options, responseType) {
        options?.signal?.throwIfAborted();
        const message = this.prepareCommand(ns.db, command, options);
        let started = 0;
        if (this.shouldEmitAndLogCommand) {
            started = (0, utils_1.now)();
            this.emitAndLogCommand(this.monitorCommands, Connection.COMMAND_STARTED, message.databaseName, this.established, new command_monitoring_events_1.CommandStartedEvent(this, message, this.description.serverConnectionId));
        }
        // If `documentsReturnedIn` not set or raw is not enabled, use input bson options
        // Otherwise, support raw flag. Raw only works for cursors that hardcode firstBatch/nextBatch fields
        const bsonOptions = options.documentsReturnedIn == null || !options.raw
            ? options
            : {
                ...options,
                raw: false,
                fieldsAsRaw: { [options.documentsReturnedIn]: true }
            };
        /** MongoDBResponse instance or subclass */
        let document = undefined;
        /** Cached result of a toObject call */
        let object = undefined;
        try {
            this.throwIfAborted();
            for await (document of this.sendWire(message, options, responseType)) {
                object = undefined;
                if (options.session != null) {
                    (0, sessions_1.updateSessionFromResponse)(options.session, document);
                }
                if (document.$clusterTime) {
                    this.clusterTime = document.$clusterTime;
                    this.emit(Connection.CLUSTER_TIME_RECEIVED, document.$clusterTime);
                }
                if (document.ok === 0) {
                    if (options.timeoutContext?.csotEnabled() && document.isMaxTimeExpiredError) {
                        throw new error_1.MongoOperationTimeoutError('Server reported a timeout error', {
                            cause: new error_1.MongoServerError((object ??= document.toObject(bsonOptions)))
                        });
                    }
                    throw new error_1.MongoServerError((object ??= document.toObject(bsonOptions)));
                }
                if (this.shouldEmitAndLogCommand) {
                    this.emitAndLogCommand(this.monitorCommands, Connection.COMMAND_SUCCEEDED, message.databaseName, this.established, new command_monitoring_events_1.CommandSucceededEvent(this, message, options.noResponse
                        ? undefined
                        : message.moreToCome
                            ? { ok: 1 }
                            : (object ??= document.toObject(bsonOptions)), started, this.description.serverConnectionId));
                }
                if (responseType == null) {
                    yield (object ??= document.toObject(bsonOptions));
                }
                else {
                    yield document;
                }
                this.throwIfAborted();
            }
        }
        catch (error) {
            if (this.shouldEmitAndLogCommand) {
                this.emitAndLogCommand(this.monitorCommands, Connection.COMMAND_FAILED, message.databaseName, this.established, new command_monitoring_events_1.CommandFailedEvent(this, message, error, started, this.description.serverConnectionId));
            }
            throw error;
        }
    }
    async command(ns, command, options = {}, responseType) {
        this.throwIfAborted();
        options.signal?.throwIfAborted();
        for await (const document of this.sendCommand(ns, command, options, responseType)) {
            if (options.timeoutContext?.csotEnabled()) {
                if (responses_1.MongoDBResponse.is(document)) {
                    if (document.isMaxTimeExpiredError) {
                        throw new error_1.MongoOperationTimeoutError('Server reported a timeout error', {
                            cause: new error_1.MongoServerError(document.toObject())
                        });
                    }
                }
                else {
                    if ((Array.isArray(document?.writeErrors) &&
                        document.writeErrors.some(error => error?.code === error_1.MONGODB_ERROR_CODES.MaxTimeMSExpired)) ||
                        document?.writeConcernError?.code === error_1.MONGODB_ERROR_CODES.MaxTimeMSExpired) {
                        throw new error_1.MongoOperationTimeoutError('Server reported a timeout error', {
                            cause: new error_1.MongoServerError(document)
                        });
                    }
                }
            }
            return document;
        }
        throw new error_1.MongoUnexpectedServerResponseError('Unable to get response from server');
    }
    exhaustCommand(ns, command, options, replyListener) {
        const exhaustLoop = async () => {
            this.throwIfAborted();
            for await (const reply of this.sendCommand(ns, command, options)) {
                replyListener(undefined, reply);
                this.throwIfAborted();
            }
            throw new error_1.MongoUnexpectedServerResponseError('Server ended moreToCome unexpectedly');
        };
        exhaustLoop().then(undefined, replyListener);
    }
    throwIfAborted() {
        if (this.error)
            throw this.error;
    }
    /**
     * @internal
     *
     * Writes an OP_MSG or OP_QUERY request to the socket, optionally compressing the command. This method
     * waits until the socket's buffer has emptied (the Nodejs socket `drain` event has fired).
     */
    async writeCommand(command, options) {
        const finalCommand = options.agreedCompressor === 'none' || !commands_1.OpCompressedRequest.canCompress(command)
            ? command
            : new commands_1.OpCompressedRequest(command, {
                agreedCompressor: options.agreedCompressor ?? 'none',
                zlibCompressionLevel: options.zlibCompressionLevel ?? 0
            });
        const buffer = Buffer.concat(await finalCommand.toBin());
        if (options.timeoutContext?.csotEnabled()) {
            if (options.timeoutContext.minRoundTripTime != null &&
                options.timeoutContext.remainingTimeMS < options.timeoutContext.minRoundTripTime) {
                throw new error_1.MongoOperationTimeoutError('Server roundtrip time is greater than the time remaining');
            }
        }
        if (this.socket.write(buffer))
            return;
        const drainEvent = (0, utils_1.once)(this.socket, 'drain', options);
        const timeout = options?.timeoutContext?.timeoutForSocketWrite;
        const drained = timeout ? Promise.race([drainEvent, timeout]) : drainEvent;
        try {
            return await drained;
        }
        catch (writeError) {
            if (timeout_1.TimeoutError.is(writeError)) {
                const timeoutError = new error_1.MongoOperationTimeoutError('Timed out at socket write');
                this.onError(timeoutError);
                throw timeoutError;
            }
            else if (writeError === options.signal?.reason) {
                this.onError(writeError);
            }
            throw writeError;
        }
        finally {
            timeout?.clear();
        }
    }
    /**
     * @internal
     *
     * Returns an async generator that yields full wire protocol messages from the underlying socket.  This function
     * yields messages until `moreToCome` is false or not present in a response, or the caller cancels the request
     * by calling `return` on the generator.
     *
     * Note that `for-await` loops call `return` automatically when the loop is exited.
     */
    async *readMany(options) {
        try {
            this.dataEvents = (0, on_data_1.onData)(this.messageStream, options);
            this.messageStream.resume();
            for await (const message of this.dataEvents) {
                const response = await (0, compression_1.decompressResponse)(message);
                yield response;
                if (!response.moreToCome) {
                    return;
                }
            }
        }
        catch (readError) {
            if (timeout_1.TimeoutError.is(readError)) {
                const timeoutError = new error_1.MongoOperationTimeoutError(`Timed out during socket read (${readError.duration}ms)`);
                this.dataEvents = null;
                this.onError(timeoutError);
                throw timeoutError;
            }
            else if (readError === options.signal?.reason) {
                this.onError(readError);
            }
            throw readError;
        }
        finally {
            this.dataEvents = null;
            this.messageStream.pause();
        }
    }
}
exports.Connection = Connection;
/** @event */
Connection.COMMAND_STARTED = constants_1.COMMAND_STARTED;
/** @event */
Connection.COMMAND_SUCCEEDED = constants_1.COMMAND_SUCCEEDED;
/** @event */
Connection.COMMAND_FAILED = constants_1.COMMAND_FAILED;
/** @event */
Connection.CLUSTER_TIME_RECEIVED = constants_1.CLUSTER_TIME_RECEIVED;
/** @event */
Connection.CLOSE = constants_1.CLOSE;
/** @event */
Connection.PINNED = constants_1.PINNED;
/** @event */
Connection.UNPINNED = constants_1.UNPINNED;
/** @internal */
class SizedMessageTransform extends stream_1.Transform {
    constructor({ connection }) {
        super({ writableObjectMode: false, readableObjectMode: true });
        this.bufferPool = new utils_1.BufferPool();
        this.connection = connection;
    }
    _transform(chunk, encoding, callback) {
        if (this.connection.delayedTimeoutId != null) {
            (0, timers_1.clearTimeout)(this.connection.delayedTimeoutId);
            this.connection.delayedTimeoutId = null;
        }
        this.bufferPool.append(chunk);
        while (this.bufferPool.length) {
            // While there are any bytes in the buffer
            // Try to fetch a size from the top 4 bytes
            const sizeOfMessage = this.bufferPool.getInt32();
            if (sizeOfMessage == null) {
                // Not even an int32 worth of data. Stop the loop, we need more chunks.
                break;
            }
            if (sizeOfMessage < 0) {
                // The size in the message has a negative value, this is probably corruption, throw:
                return callback(new error_1.MongoParseError(`Message size cannot be negative: ${sizeOfMessage}`));
            }
            if (sizeOfMessage > this.bufferPool.length) {
                // We do not have enough bytes to make a sizeOfMessage chunk
                break;
            }
            // Add a message to the stream
            const message = this.bufferPool.read(sizeOfMessage);
            if (!this.push(message)) {
                // We only subscribe to data events so we should never get backpressure
                // if we do, we do not have the handling for it.
                return callback(new error_1.MongoRuntimeError(`SizedMessageTransform does not support backpressure`));
            }
        }
        callback();
    }
}
exports.SizedMessageTransform = SizedMessageTransform;
/** @internal */
class CryptoConnection extends Connection {
    constructor(stream, options) {
        super(stream, options);
        this.autoEncrypter = options.autoEncrypter;
    }
    async command(ns, cmd, options, responseType) {
        const { autoEncrypter } = this;
        if (!autoEncrypter) {
            // TODO(NODE-6065): throw a MongoRuntimeError in Node V7
            // @ts-expect-error No cause provided because there is no underlying error.
            throw new error_1.MongoMissingDependencyError('No AutoEncrypter available for encryption', {
                dependencyName: 'n/a'
            });
        }
        const serverWireVersion = (0, utils_1.maxWireVersion)(this);
        if (serverWireVersion === 0) {
            // This means the initial handshake hasn't happened yet
            return await super.command(ns, cmd, options, responseType);
        }
        // Save sort or indexKeys based on the command being run
        // the encrypt API serializes our JS objects to BSON to pass to the native code layer
        // and then deserializes the encrypted result, the protocol level components
        // of the command (ex. sort) are then converted to JS objects potentially losing
        // import key order information. These fields are never encrypted so we can save the values
        // from before the encryption and replace them after encryption has been performed
        const sort = cmd.find || cmd.findAndModify ? cmd.sort : null;
        const indexKeys = cmd.createIndexes
            ? cmd.indexes.map((index) => index.key)
            : null;
        const encrypted = await autoEncrypter.encrypt(ns.toString(), cmd, options);
        // Replace the saved values
        if (sort != null && (cmd.find || cmd.findAndModify)) {
            encrypted.sort = sort;
        }
        if (indexKeys != null && cmd.createIndexes) {
            for (const [offset, index] of indexKeys.entries()) {
                // @ts-expect-error `encrypted` is a generic "command", but we've narrowed for only `createIndexes` commands here
                encrypted.indexes[offset].key = index;
            }
        }
        const encryptedResponse = await super.command(ns, encrypted, options, 
        // Eventually we want to require `responseType` which means we would satisfy `T` as the return type.
        // In the meantime, we want encryptedResponse to always be _at least_ a MongoDBResponse if not a more specific subclass
        // So that we can ensure we have access to the on-demand APIs for decorate response
        responseType ?? responses_1.MongoDBResponse);
        const result = await autoEncrypter.decrypt(encryptedResponse.toBytes(), options);
        const decryptedResponse = responseType?.make(result) ?? (0, bson_1.deserialize)(result, options);
        if (autoEncrypter[constants_1.kDecorateResult]) {
            if (responseType == null) {
                (0, utils_1.decorateDecryptionResult)(decryptedResponse, encryptedResponse.toObject(), true);
            }
            else if (decryptedResponse instanceof responses_1.CursorResponse) {
                decryptedResponse.encryptedResponse = encryptedResponse;
            }
        }
        return decryptedResponse;
    }
}
exports.CryptoConnection = CryptoConnection;
//# sourceMappingURL=connection.js.map