"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerSessionPool = exports.ServerSession = exports.ClientSession = void 0;
exports.maybeClearPinnedConnection = maybeClearPinnedConnection;
exports.applySession = applySession;
exports.updateSessionFromResponse = updateSessionFromResponse;
const bson_1 = require("./bson");
const metrics_1 = require("./cmap/metrics");
const constants_1 = require("./constants");
const error_1 = require("./error");
const mongo_types_1 = require("./mongo_types");
const execute_operation_1 = require("./operations/execute_operation");
const run_command_1 = require("./operations/run_command");
const read_concern_1 = require("./read_concern");
const read_preference_1 = require("./read_preference");
const resource_management_1 = require("./resource_management");
const common_1 = require("./sdam/common");
const timeout_1 = require("./timeout");
const transactions_1 = require("./transactions");
const utils_1 = require("./utils");
const write_concern_1 = require("./write_concern");
/**
 * A class representing a client session on the server
 *
 * NOTE: not meant to be instantiated directly.
 * @public
 */
class ClientSession extends mongo_types_1.TypedEventEmitter {
    /**
     * Create a client session.
     * @internal
     * @param client - The current client
     * @param sessionPool - The server session pool (Internal Class)
     * @param options - Optional settings
     * @param clientOptions - Optional settings provided when creating a MongoClient
     */
    constructor(client, sessionPool, options, clientOptions) {
        super();
        /** @internal */
        this.timeoutContext = null;
        this.on('error', utils_1.noop);
        if (client == null) {
            // TODO(NODE-3483)
            throw new error_1.MongoRuntimeError('ClientSession requires a MongoClient');
        }
        if (sessionPool == null || !(sessionPool instanceof ServerSessionPool)) {
            // TODO(NODE-3483)
            throw new error_1.MongoRuntimeError('ClientSession requires a ServerSessionPool');
        }
        options = options ?? {};
        this.snapshotEnabled = options.snapshot === true;
        if (options.causalConsistency === true && this.snapshotEnabled) {
            throw new error_1.MongoInvalidArgumentError('Properties "causalConsistency" and "snapshot" are mutually exclusive');
        }
        this.client = client;
        this.sessionPool = sessionPool;
        this.hasEnded = false;
        this.clientOptions = clientOptions;
        this.timeoutMS = options.defaultTimeoutMS ?? client.s.options?.timeoutMS;
        this.explicit = !!options.explicit;
        this._serverSession = this.explicit ? this.sessionPool.acquire() : null;
        this.txnNumberIncrement = 0;
        const defaultCausalConsistencyValue = this.explicit && options.snapshot !== true;
        this.supports = {
            // if we can enable causal consistency, do so by default
            causalConsistency: options.causalConsistency ?? defaultCausalConsistencyValue
        };
        this.clusterTime = options.initialClusterTime;
        this.operationTime = undefined;
        this.owner = options.owner;
        this.defaultTransactionOptions = { ...options.defaultTransactionOptions };
        this.transaction = new transactions_1.Transaction();
    }
    /** The server id associated with this session */
    get id() {
        return this.serverSession?.id;
    }
    get serverSession() {
        let serverSession = this._serverSession;
        if (serverSession == null) {
            if (this.explicit) {
                throw new error_1.MongoRuntimeError('Unexpected null serverSession for an explicit session');
            }
            if (this.hasEnded) {
                throw new error_1.MongoRuntimeError('Unexpected null serverSession for an ended implicit session');
            }
            serverSession = this.sessionPool.acquire();
            this._serverSession = serverSession;
        }
        return serverSession;
    }
    get loadBalanced() {
        return this.client.topology?.description.type === common_1.TopologyType.LoadBalanced;
    }
    /** @internal */
    pin(conn) {
        if (this.pinnedConnection) {
            throw TypeError('Cannot pin multiple connections to the same session');
        }
        this.pinnedConnection = conn;
        conn.emit(constants_1.PINNED, this.inTransaction() ? metrics_1.ConnectionPoolMetrics.TXN : metrics_1.ConnectionPoolMetrics.CURSOR);
    }
    /** @internal */
    unpin(options) {
        if (this.loadBalanced) {
            return maybeClearPinnedConnection(this, options);
        }
        this.transaction.unpinServer();
    }
    get isPinned() {
        return this.loadBalanced ? !!this.pinnedConnection : this.transaction.isPinned;
    }
    /**
     * Frees any client-side resources held by the current session.  If a session is in a transaction,
     * the transaction is aborted.
     *
     * Does not end the session on the server.
     *
     * @param options - Optional settings. Currently reserved for future use
     */
    async endSession(options) {
        try {
            if (this.inTransaction()) {
                await this.abortTransaction({ ...options, throwTimeout: true });
            }
        }
        catch (error) {
            // spec indicates that we should ignore all errors for `endSessions`
            if (error.name === 'MongoOperationTimeoutError')
                throw error;
            (0, utils_1.squashError)(error);
        }
        finally {
            if (!this.hasEnded) {
                const serverSession = this.serverSession;
                if (serverSession != null) {
                    // release the server session back to the pool
                    this.sessionPool.release(serverSession);
                    // Store a clone of the server session for reference (debugging)
                    this._serverSession = new ServerSession(serverSession);
                }
                // mark the session as ended, and emit a signal
                this.hasEnded = true;
                this.emit('ended', this);
            }
            maybeClearPinnedConnection(this, { force: true, ...options });
        }
    }
    /** @internal */
    async asyncDispose() {
        await this.endSession({ force: true });
    }
    /**
     * Advances the operationTime for a ClientSession.
     *
     * @param operationTime - the `BSON.Timestamp` of the operation type it is desired to advance to
     */
    advanceOperationTime(operationTime) {
        if (this.operationTime == null) {
            this.operationTime = operationTime;
            return;
        }
        if (operationTime.greaterThan(this.operationTime)) {
            this.operationTime = operationTime;
        }
    }
    /**
     * Advances the clusterTime for a ClientSession to the provided clusterTime of another ClientSession
     *
     * @param clusterTime - the $clusterTime returned by the server from another session in the form of a document containing the `BSON.Timestamp` clusterTime and signature
     */
    advanceClusterTime(clusterTime) {
        if (!clusterTime || typeof clusterTime !== 'object') {
            throw new error_1.MongoInvalidArgumentError('input cluster time must be an object');
        }
        if (!clusterTime.clusterTime || clusterTime.clusterTime._bsontype !== 'Timestamp') {
            throw new error_1.MongoInvalidArgumentError('input cluster time "clusterTime" property must be a valid BSON Timestamp');
        }
        if (!clusterTime.signature ||
            clusterTime.signature.hash?._bsontype !== 'Binary' ||
            (typeof clusterTime.signature.keyId !== 'bigint' &&
                typeof clusterTime.signature.keyId !== 'number' &&
                clusterTime.signature.keyId?._bsontype !== 'Long') // apparently we decode the key to number?
        ) {
            throw new error_1.MongoInvalidArgumentError('input cluster time must have a valid "signature" property with BSON Binary hash and BSON Long keyId');
        }
        (0, common_1._advanceClusterTime)(this, clusterTime);
    }
    /**
     * Used to determine if this session equals another
     *
     * @param session - The session to compare to
     */
    equals(session) {
        if (!(session instanceof ClientSession)) {
            return false;
        }
        if (this.id == null || session.id == null) {
            return false;
        }
        return utils_1.ByteUtils.equals(this.id.id.buffer, session.id.id.buffer);
    }
    /**
     * Increment the transaction number on the internal ServerSession
     *
     * @privateRemarks
     * This helper increments a value stored on the client session that will be
     * added to the serverSession's txnNumber upon applying it to a command.
     * This is because the serverSession is lazily acquired after a connection is obtained
     */
    incrementTransactionNumber() {
        this.txnNumberIncrement += 1;
    }
    /** @returns whether this session is currently in a transaction or not */
    inTransaction() {
        return this.transaction.isActive;
    }
    /**
     * Starts a new transaction with the given options.
     *
     * @remarks
     * **IMPORTANT**: Running operations in parallel is not supported during a transaction. The use of `Promise.all`,
     * `Promise.allSettled`, `Promise.race`, etc to parallelize operations inside a transaction is
     * undefined behaviour.
     *
     * @param options - Options for the transaction
     */
    startTransaction(options) {
        if (this.snapshotEnabled) {
            throw new error_1.MongoCompatibilityError('Transactions are not supported in snapshot sessions');
        }
        if (this.inTransaction()) {
            throw new error_1.MongoTransactionError('Transaction already in progress');
        }
        if (this.isPinned && this.transaction.isCommitted) {
            this.unpin();
        }
        this.commitAttempted = false;
        // increment txnNumber
        this.incrementTransactionNumber();
        // create transaction state
        this.transaction = new transactions_1.Transaction({
            readConcern: options?.readConcern ??
                this.defaultTransactionOptions.readConcern ??
                this.clientOptions?.readConcern,
            writeConcern: options?.writeConcern ??
                this.defaultTransactionOptions.writeConcern ??
                this.clientOptions?.writeConcern,
            readPreference: options?.readPreference ??
                this.defaultTransactionOptions.readPreference ??
                this.clientOptions?.readPreference,
            maxCommitTimeMS: options?.maxCommitTimeMS ?? this.defaultTransactionOptions.maxCommitTimeMS
        });
        this.transaction.transition(transactions_1.TxnState.STARTING_TRANSACTION);
    }
    /**
     * Commits the currently active transaction in this session.
     *
     * @param options - Optional options, can be used to override `defaultTimeoutMS`.
     */
    async commitTransaction(options) {
        if (this.transaction.state === transactions_1.TxnState.NO_TRANSACTION) {
            throw new error_1.MongoTransactionError('No transaction started');
        }
        if (this.transaction.state === transactions_1.TxnState.STARTING_TRANSACTION ||
            this.transaction.state === transactions_1.TxnState.TRANSACTION_COMMITTED_EMPTY) {
            // the transaction was never started, we can safely exit here
            this.transaction.transition(transactions_1.TxnState.TRANSACTION_COMMITTED_EMPTY);
            return;
        }
        if (this.transaction.state === transactions_1.TxnState.TRANSACTION_ABORTED) {
            throw new error_1.MongoTransactionError('Cannot call commitTransaction after calling abortTransaction');
        }
        const command = { commitTransaction: 1 };
        const timeoutMS = typeof options?.timeoutMS === 'number'
            ? options.timeoutMS
            : typeof this.timeoutMS === 'number'
                ? this.timeoutMS
                : null;
        const wc = this.transaction.options.writeConcern ?? this.clientOptions?.writeConcern;
        if (wc != null) {
            if (timeoutMS == null && this.timeoutContext == null) {
                write_concern_1.WriteConcern.apply(command, { wtimeoutMS: 10000, w: 'majority', ...wc });
            }
            else {
                const wcKeys = Object.keys(wc);
                if (wcKeys.length > 2 || (!wcKeys.includes('wtimeoutMS') && !wcKeys.includes('wTimeoutMS')))
                    // if the write concern was specified with wTimeoutMS, then we set both wtimeoutMS and wTimeoutMS, guaranteeing at least two keys, so if we have more than two keys, then we can automatically assume that we should add the write concern to the command. If it has 2 or fewer keys, we need to check that those keys aren't the wtimeoutMS or wTimeoutMS options before we add the write concern to the command
                    write_concern_1.WriteConcern.apply(command, { ...wc, wtimeoutMS: undefined });
            }
        }
        if (this.transaction.state === transactions_1.TxnState.TRANSACTION_COMMITTED || this.commitAttempted) {
            if (timeoutMS == null && this.timeoutContext == null) {
                write_concern_1.WriteConcern.apply(command, { wtimeoutMS: 10000, ...wc, w: 'majority' });
            }
            else {
                write_concern_1.WriteConcern.apply(command, { w: 'majority', ...wc, wtimeoutMS: undefined });
            }
        }
        if (typeof this.transaction.options.maxTimeMS === 'number') {
            command.maxTimeMS = this.transaction.options.maxTimeMS;
        }
        if (this.transaction.recoveryToken) {
            command.recoveryToken = this.transaction.recoveryToken;
        }
        const operation = new run_command_1.RunCommandOperation(new utils_1.MongoDBNamespace('admin'), command, {
            session: this,
            readPreference: read_preference_1.ReadPreference.primary,
            bypassPinningCheck: true
        });
        const timeoutContext = this.timeoutContext ??
            (typeof timeoutMS === 'number'
                ? timeout_1.TimeoutContext.create({
                    serverSelectionTimeoutMS: this.clientOptions.serverSelectionTimeoutMS,
                    socketTimeoutMS: this.clientOptions.socketTimeoutMS,
                    timeoutMS
                })
                : null);
        try {
            await (0, execute_operation_1.executeOperation)(this.client, operation, timeoutContext);
            this.commitAttempted = undefined;
            return;
        }
        catch (firstCommitError) {
            this.commitAttempted = true;
            if (firstCommitError instanceof error_1.MongoError && (0, error_1.isRetryableWriteError)(firstCommitError)) {
                // SPEC-1185: apply majority write concern when retrying commitTransaction
                write_concern_1.WriteConcern.apply(command, { wtimeoutMS: 10000, ...wc, w: 'majority' });
                // per txns spec, must unpin session in this case
                this.unpin({ force: true });
                try {
                    await (0, execute_operation_1.executeOperation)(this.client, new run_command_1.RunCommandOperation(new utils_1.MongoDBNamespace('admin'), command, {
                        session: this,
                        readPreference: read_preference_1.ReadPreference.primary,
                        bypassPinningCheck: true
                    }), timeoutContext);
                    return;
                }
                catch (retryCommitError) {
                    // If the retry failed, we process that error instead of the original
                    if (shouldAddUnknownTransactionCommitResultLabel(retryCommitError)) {
                        retryCommitError.addErrorLabel(error_1.MongoErrorLabel.UnknownTransactionCommitResult);
                    }
                    if (shouldUnpinAfterCommitError(retryCommitError)) {
                        this.unpin({ error: retryCommitError });
                    }
                    throw retryCommitError;
                }
            }
            if (shouldAddUnknownTransactionCommitResultLabel(firstCommitError)) {
                firstCommitError.addErrorLabel(error_1.MongoErrorLabel.UnknownTransactionCommitResult);
            }
            if (shouldUnpinAfterCommitError(firstCommitError)) {
                this.unpin({ error: firstCommitError });
            }
            throw firstCommitError;
        }
        finally {
            this.transaction.transition(transactions_1.TxnState.TRANSACTION_COMMITTED);
        }
    }
    async abortTransaction(options) {
        if (this.transaction.state === transactions_1.TxnState.NO_TRANSACTION) {
            throw new error_1.MongoTransactionError('No transaction started');
        }
        if (this.transaction.state === transactions_1.TxnState.STARTING_TRANSACTION) {
            // the transaction was never started, we can safely exit here
            this.transaction.transition(transactions_1.TxnState.TRANSACTION_ABORTED);
            return;
        }
        if (this.transaction.state === transactions_1.TxnState.TRANSACTION_ABORTED) {
            throw new error_1.MongoTransactionError('Cannot call abortTransaction twice');
        }
        if (this.transaction.state === transactions_1.TxnState.TRANSACTION_COMMITTED ||
            this.transaction.state === transactions_1.TxnState.TRANSACTION_COMMITTED_EMPTY) {
            throw new error_1.MongoTransactionError('Cannot call abortTransaction after calling commitTransaction');
        }
        const command = { abortTransaction: 1 };
        const timeoutMS = typeof options?.timeoutMS === 'number'
            ? options.timeoutMS
            : this.timeoutContext?.csotEnabled()
                ? this.timeoutContext.timeoutMS // refresh timeoutMS for abort operation
                : typeof this.timeoutMS === 'number'
                    ? this.timeoutMS
                    : null;
        const timeoutContext = timeoutMS != null
            ? timeout_1.TimeoutContext.create({
                timeoutMS,
                serverSelectionTimeoutMS: this.clientOptions.serverSelectionTimeoutMS,
                socketTimeoutMS: this.clientOptions.socketTimeoutMS
            })
            : null;
        const wc = this.transaction.options.writeConcern ?? this.clientOptions?.writeConcern;
        if (wc != null && timeoutMS == null) {
            write_concern_1.WriteConcern.apply(command, { wtimeoutMS: 10000, w: 'majority', ...wc });
        }
        if (this.transaction.recoveryToken) {
            command.recoveryToken = this.transaction.recoveryToken;
        }
        const operation = new run_command_1.RunCommandOperation(new utils_1.MongoDBNamespace('admin'), command, {
            session: this,
            readPreference: read_preference_1.ReadPreference.primary,
            bypassPinningCheck: true
        });
        try {
            await (0, execute_operation_1.executeOperation)(this.client, operation, timeoutContext);
            this.unpin();
            return;
        }
        catch (firstAbortError) {
            this.unpin();
            if (firstAbortError.name === 'MongoRuntimeError')
                throw firstAbortError;
            if (options?.throwTimeout && firstAbortError.name === 'MongoOperationTimeoutError') {
                throw firstAbortError;
            }
            if (firstAbortError instanceof error_1.MongoError && (0, error_1.isRetryableWriteError)(firstAbortError)) {
                try {
                    await (0, execute_operation_1.executeOperation)(this.client, operation, timeoutContext);
                    return;
                }
                catch (secondAbortError) {
                    if (secondAbortError.name === 'MongoRuntimeError')
                        throw secondAbortError;
                    if (options?.throwTimeout && secondAbortError.name === 'MongoOperationTimeoutError') {
                        throw secondAbortError;
                    }
                    // we do not retry the retry
                }
            }
            // The spec indicates that if the operation times out or fails with a non-retryable error, we should ignore all errors on `abortTransaction`
        }
        finally {
            this.transaction.transition(transactions_1.TxnState.TRANSACTION_ABORTED);
            if (this.loadBalanced) {
                maybeClearPinnedConnection(this, { force: false });
            }
        }
    }
    /**
     * This is here to ensure that ClientSession is never serialized to BSON.
     */
    toBSON() {
        throw new error_1.MongoRuntimeError('ClientSession cannot be serialized to BSON.');
    }
    /**
     * Starts a transaction and runs a provided function, ensuring the commitTransaction is always attempted when all operations run in the function have completed.
     *
     * **IMPORTANT:** This method requires the function passed in to return a Promise. That promise must be made by `await`-ing all operations in such a way that rejections are propagated to the returned promise.
     *
     * **IMPORTANT:** Running operations in parallel is not supported during a transaction. The use of `Promise.all`,
     * `Promise.allSettled`, `Promise.race`, etc to parallelize operations inside a transaction is
     * undefined behaviour.
     *
     * **IMPORTANT:** When running an operation inside a `withTransaction` callback, if it is not
     * provided the explicit session in its options, it will not be part of the transaction and it will not respect timeoutMS.
     *
     *
     * @remarks
     * - If all operations successfully complete and the `commitTransaction` operation is successful, then the provided function will return the result of the provided function.
     * - If the transaction is unable to complete or an error is thrown from within the provided function, then the provided function will throw an error.
     *   - If the transaction is manually aborted within the provided function it will not throw.
     * - If the driver needs to attempt to retry the operations, the provided function may be called multiple times.
     *
     * Checkout a descriptive example here:
     * @see https://www.mongodb.com/blog/post/quick-start-nodejs--mongodb--how-to-implement-transactions
     *
     * If a command inside withTransaction fails:
     * - It may cause the transaction on the server to be aborted.
     * - This situation is normally handled transparently by the driver.
     * - However, if the application catches such an error and does not rethrow it, the driver will not be able to determine whether the transaction was aborted or not.
     * - The driver will then retry the transaction indefinitely.
     *
     * To avoid this situation, the application must not silently handle errors within the provided function.
     * If the application needs to handle errors within, it must await all operations such that if an operation is rejected it becomes the rejection of the callback function passed into withTransaction.
     *
     * @param fn - callback to run within a transaction
     * @param options - optional settings for the transaction
     * @returns A raw command response or undefined
     */
    async withTransaction(fn, options) {
        const MAX_TIMEOUT = 120000;
        const timeoutMS = options?.timeoutMS ?? this.timeoutMS ?? null;
        this.timeoutContext =
            timeoutMS != null
                ? timeout_1.TimeoutContext.create({
                    timeoutMS,
                    serverSelectionTimeoutMS: this.clientOptions.serverSelectionTimeoutMS,
                    socketTimeoutMS: this.clientOptions.socketTimeoutMS
                })
                : null;
        const startTime = this.timeoutContext?.csotEnabled() ? this.timeoutContext.start : (0, utils_1.now)();
        let committed = false;
        let result;
        try {
            while (!committed) {
                this.startTransaction(options); // may throw on error
                try {
                    const promise = fn(this);
                    if (!(0, utils_1.isPromiseLike)(promise)) {
                        throw new error_1.MongoInvalidArgumentError('Function provided to `withTransaction` must return a Promise');
                    }
                    result = await promise;
                    if (this.transaction.state === transactions_1.TxnState.NO_TRANSACTION ||
                        this.transaction.state === transactions_1.TxnState.TRANSACTION_COMMITTED ||
                        this.transaction.state === transactions_1.TxnState.TRANSACTION_ABORTED) {
                        // Assume callback intentionally ended the transaction
                        return result;
                    }
                }
                catch (fnError) {
                    if (!(fnError instanceof error_1.MongoError) || fnError instanceof error_1.MongoInvalidArgumentError) {
                        await this.abortTransaction();
                        throw fnError;
                    }
                    if (this.transaction.state === transactions_1.TxnState.STARTING_TRANSACTION ||
                        this.transaction.state === transactions_1.TxnState.TRANSACTION_IN_PROGRESS) {
                        await this.abortTransaction();
                    }
                    if (fnError.hasErrorLabel(error_1.MongoErrorLabel.TransientTransactionError) &&
                        (this.timeoutContext != null || (0, utils_1.now)() - startTime < MAX_TIMEOUT)) {
                        continue;
                    }
                    throw fnError;
                }
                while (!committed) {
                    try {
                        /*
                         * We will rely on ClientSession.commitTransaction() to
                         * apply a majority write concern if commitTransaction is
                         * being retried (see: DRIVERS-601)
                         */
                        await this.commitTransaction();
                        committed = true;
                    }
                    catch (commitError) {
                        /*
                         * Note: a maxTimeMS error will have the MaxTimeMSExpired
                         * code (50) and can be reported as a top-level error or
                         * inside writeConcernError, ex.
                         * { ok:0, code: 50, codeName: 'MaxTimeMSExpired' }
                         * { ok:1, writeConcernError: { code: 50, codeName: 'MaxTimeMSExpired' } }
                         */
                        if (!isMaxTimeMSExpiredError(commitError) &&
                            commitError.hasErrorLabel(error_1.MongoErrorLabel.UnknownTransactionCommitResult) &&
                            (this.timeoutContext != null || (0, utils_1.now)() - startTime < MAX_TIMEOUT)) {
                            continue;
                        }
                        if (commitError.hasErrorLabel(error_1.MongoErrorLabel.TransientTransactionError) &&
                            (this.timeoutContext != null || (0, utils_1.now)() - startTime < MAX_TIMEOUT)) {
                            break;
                        }
                        throw commitError;
                    }
                }
            }
            return result;
        }
        finally {
            this.timeoutContext = null;
        }
    }
}
exports.ClientSession = ClientSession;
(0, resource_management_1.configureResourceManagement)(ClientSession.prototype);
const NON_DETERMINISTIC_WRITE_CONCERN_ERRORS = new Set([
    'CannotSatisfyWriteConcern',
    'UnknownReplWriteConcern',
    'UnsatisfiableWriteConcern'
]);
function shouldUnpinAfterCommitError(commitError) {
    if (commitError instanceof error_1.MongoError) {
        if ((0, error_1.isRetryableWriteError)(commitError) ||
            commitError instanceof error_1.MongoWriteConcernError ||
            isMaxTimeMSExpiredError(commitError)) {
            if (isUnknownTransactionCommitResult(commitError)) {
                // per txns spec, must unpin session in this case
                return true;
            }
        }
        else if (commitError.hasErrorLabel(error_1.MongoErrorLabel.TransientTransactionError)) {
            return true;
        }
    }
    return false;
}
function shouldAddUnknownTransactionCommitResultLabel(commitError) {
    let ok = (0, error_1.isRetryableWriteError)(commitError);
    ok ||= commitError instanceof error_1.MongoWriteConcernError;
    ok ||= isMaxTimeMSExpiredError(commitError);
    ok &&= isUnknownTransactionCommitResult(commitError);
    return ok;
}
function isUnknownTransactionCommitResult(err) {
    const isNonDeterministicWriteConcernError = err instanceof error_1.MongoServerError &&
        err.codeName &&
        NON_DETERMINISTIC_WRITE_CONCERN_ERRORS.has(err.codeName);
    return (isMaxTimeMSExpiredError(err) ||
        (!isNonDeterministicWriteConcernError &&
            err.code !== error_1.MONGODB_ERROR_CODES.UnsatisfiableWriteConcern &&
            err.code !== error_1.MONGODB_ERROR_CODES.UnknownReplWriteConcern));
}
function maybeClearPinnedConnection(session, options) {
    // unpin a connection if it has been pinned
    const conn = session.pinnedConnection;
    const error = options?.error;
    if (session.inTransaction() &&
        error &&
        error instanceof error_1.MongoError &&
        error.hasErrorLabel(error_1.MongoErrorLabel.TransientTransactionError)) {
        return;
    }
    const topology = session.client.topology;
    // NOTE: the spec talks about what to do on a network error only, but the tests seem to
    //       to validate that we don't unpin on _all_ errors?
    if (conn && topology != null) {
        const servers = Array.from(topology.s.servers.values());
        const loadBalancer = servers[0];
        if (options?.error == null || options?.force) {
            loadBalancer.pool.checkIn(conn);
            session.pinnedConnection = undefined;
            conn.emit(constants_1.UNPINNED, session.transaction.state !== transactions_1.TxnState.NO_TRANSACTION
                ? metrics_1.ConnectionPoolMetrics.TXN
                : metrics_1.ConnectionPoolMetrics.CURSOR);
            if (options?.forceClear) {
                loadBalancer.pool.clear({ serviceId: conn.serviceId });
            }
        }
    }
}
function isMaxTimeMSExpiredError(err) {
    if (err == null || !(err instanceof error_1.MongoServerError)) {
        return false;
    }
    return (err.code === error_1.MONGODB_ERROR_CODES.MaxTimeMSExpired ||
        err.writeConcernError?.code === error_1.MONGODB_ERROR_CODES.MaxTimeMSExpired);
}
/**
 * Reflects the existence of a session on the server. Can be reused by the session pool.
 * WARNING: not meant to be instantiated directly. For internal use only.
 * @public
 */
class ServerSession {
    /** @internal */
    constructor(cloned) {
        if (cloned != null) {
            const idBytes = Buffer.allocUnsafe(16);
            idBytes.set(cloned.id.id.buffer);
            this.id = { id: new bson_1.Binary(idBytes, cloned.id.id.sub_type) };
            this.lastUse = cloned.lastUse;
            this.txnNumber = cloned.txnNumber;
            this.isDirty = cloned.isDirty;
            return;
        }
        this.id = { id: new bson_1.Binary((0, utils_1.uuidV4)(), bson_1.Binary.SUBTYPE_UUID) };
        this.lastUse = (0, utils_1.now)();
        this.txnNumber = 0;
        this.isDirty = false;
    }
    /**
     * Determines if the server session has timed out.
     *
     * @param sessionTimeoutMinutes - The server's "logicalSessionTimeoutMinutes"
     */
    hasTimedOut(sessionTimeoutMinutes) {
        // Take the difference of the lastUse timestamp and now, which will result in a value in
        // milliseconds, and then convert milliseconds to minutes to compare to `sessionTimeoutMinutes`
        const idleTimeMinutes = Math.round((((0, utils_1.calculateDurationInMs)(this.lastUse) % 86400000) % 3600000) / 60000);
        return idleTimeMinutes > sessionTimeoutMinutes - 1;
    }
}
exports.ServerSession = ServerSession;
/**
 * Maintains a pool of Server Sessions.
 * For internal use only
 * @internal
 */
class ServerSessionPool {
    constructor(client) {
        if (client == null) {
            throw new error_1.MongoRuntimeError('ServerSessionPool requires a MongoClient');
        }
        this.client = client;
        this.sessions = new utils_1.List();
    }
    /**
     * Acquire a Server Session from the pool.
     * Iterates through each session in the pool, removing any stale sessions
     * along the way. The first non-stale session found is removed from the
     * pool and returned. If no non-stale session is found, a new ServerSession is created.
     */
    acquire() {
        const sessionTimeoutMinutes = this.client.topology?.logicalSessionTimeoutMinutes ?? 10;
        let session = null;
        // Try to obtain from session pool
        while (this.sessions.length > 0) {
            const potentialSession = this.sessions.shift();
            if (potentialSession != null &&
                (!!this.client.topology?.loadBalanced ||
                    !potentialSession.hasTimedOut(sessionTimeoutMinutes))) {
                session = potentialSession;
                break;
            }
        }
        // If nothing valid came from the pool make a new one
        if (session == null) {
            session = new ServerSession();
        }
        return session;
    }
    /**
     * Release a session to the session pool
     * Adds the session back to the session pool if the session has not timed out yet.
     * This method also removes any stale sessions from the pool.
     *
     * @param session - The session to release to the pool
     */
    release(session) {
        const sessionTimeoutMinutes = this.client.topology?.logicalSessionTimeoutMinutes ?? 10;
        if (this.client.topology?.loadBalanced && !sessionTimeoutMinutes) {
            this.sessions.unshift(session);
        }
        if (!sessionTimeoutMinutes) {
            return;
        }
        this.sessions.prune(session => session.hasTimedOut(sessionTimeoutMinutes));
        if (!session.hasTimedOut(sessionTimeoutMinutes)) {
            if (session.isDirty) {
                return;
            }
            // otherwise, readd this session to the session pool
            this.sessions.unshift(session);
        }
    }
}
exports.ServerSessionPool = ServerSessionPool;
/**
 * Optionally decorate a command with sessions specific keys
 *
 * @param session - the session tracking transaction state
 * @param command - the command to decorate
 * @param options - Optional settings passed to calling operation
 *
 * @internal
 */
function applySession(session, command, options) {
    if (session.hasEnded) {
        return new error_1.MongoExpiredSessionError();
    }
    // May acquire serverSession here
    const serverSession = session.serverSession;
    if (serverSession == null) {
        return new error_1.MongoRuntimeError('Unable to acquire server session');
    }
    if (options.writeConcern?.w === 0) {
        if (session && session.explicit) {
            // Error if user provided an explicit session to an unacknowledged write (SPEC-1019)
            return new error_1.MongoAPIError('Cannot have explicit session with unacknowledged writes');
        }
        return;
    }
    // mark the last use of this session, and apply the `lsid`
    serverSession.lastUse = (0, utils_1.now)();
    command.lsid = serverSession.id;
    const inTxnOrTxnCommand = session.inTransaction() || (0, transactions_1.isTransactionCommand)(command);
    const isRetryableWrite = !!options.willRetryWrite;
    if (isRetryableWrite || inTxnOrTxnCommand) {
        serverSession.txnNumber += session.txnNumberIncrement;
        session.txnNumberIncrement = 0;
        // TODO(NODE-2674): Preserve int64 sent from MongoDB
        command.txnNumber = bson_1.Long.fromNumber(serverSession.txnNumber);
    }
    if (!inTxnOrTxnCommand) {
        if (session.transaction.state !== transactions_1.TxnState.NO_TRANSACTION) {
            session.transaction.transition(transactions_1.TxnState.NO_TRANSACTION);
        }
        if (session.supports.causalConsistency &&
            session.operationTime &&
            (0, utils_1.commandSupportsReadConcern)(command)) {
            command.readConcern = command.readConcern || {};
            Object.assign(command.readConcern, { afterClusterTime: session.operationTime });
        }
        else if (session.snapshotEnabled) {
            command.readConcern = command.readConcern || { level: read_concern_1.ReadConcernLevel.snapshot };
            if (session.snapshotTime != null) {
                Object.assign(command.readConcern, { atClusterTime: session.snapshotTime });
            }
        }
        return;
    }
    // now attempt to apply transaction-specific sessions data
    // `autocommit` must always be false to differentiate from retryable writes
    command.autocommit = false;
    if (session.transaction.state === transactions_1.TxnState.STARTING_TRANSACTION) {
        session.transaction.transition(transactions_1.TxnState.TRANSACTION_IN_PROGRESS);
        command.startTransaction = true;
        const readConcern = session.transaction.options.readConcern || session?.clientOptions?.readConcern;
        if (readConcern) {
            command.readConcern = readConcern;
        }
        if (session.supports.causalConsistency && session.operationTime) {
            command.readConcern = command.readConcern || {};
            Object.assign(command.readConcern, { afterClusterTime: session.operationTime });
        }
    }
    return;
}
function updateSessionFromResponse(session, document) {
    if (document.$clusterTime) {
        (0, common_1._advanceClusterTime)(session, document.$clusterTime);
    }
    if (document.operationTime && session && session.supports.causalConsistency) {
        session.advanceOperationTime(document.operationTime);
    }
    if (document.recoveryToken && session && session.inTransaction()) {
        session.transaction._recoveryToken = document.recoveryToken;
    }
    if (session?.snapshotEnabled && session.snapshotTime == null) {
        // find and aggregate commands return atClusterTime on the cursor
        // distinct includes it in the response body
        const atClusterTime = document.atClusterTime;
        if (atClusterTime) {
            session.snapshotTime = atClusterTime;
        }
    }
}
//# sourceMappingURL=sessions.js.map