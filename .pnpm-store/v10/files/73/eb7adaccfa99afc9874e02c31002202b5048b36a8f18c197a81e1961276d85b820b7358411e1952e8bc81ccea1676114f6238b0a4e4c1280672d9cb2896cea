"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeOperation = executeOperation;
exports.autoConnect = autoConnect;
const error_1 = require("../error");
const read_preference_1 = require("../read_preference");
const server_selection_1 = require("../sdam/server_selection");
const timeout_1 = require("../timeout");
const utils_1 = require("../utils");
const aggregate_1 = require("./aggregate");
const operation_1 = require("./operation");
const MMAPv1_RETRY_WRITES_ERROR_CODE = error_1.MONGODB_ERROR_CODES.IllegalOperation;
const MMAPv1_RETRY_WRITES_ERROR_MESSAGE = 'This MongoDB deployment does not support retryable writes. Please add retryWrites=false to your connection string.';
/**
 * Executes the given operation with provided arguments.
 * @internal
 *
 * @remarks
 * Allows for a single point of entry to provide features such as implicit sessions, which
 * are required by the Driver Sessions specification in the event that a ClientSession is
 * not provided.
 *
 * The expectation is that this function:
 * - Connects the MongoClient if it has not already been connected, see {@link autoConnect}
 * - Creates a session if none is provided and cleans up the session it creates
 * - Tries an operation and retries under certain conditions, see {@link tryOperation}
 *
 * @typeParam T - The operation's type
 * @typeParam TResult - The type of the operation's result, calculated from T
 *
 * @param client - The MongoClient to execute this operation with
 * @param operation - The operation to execute
 */
async function executeOperation(client, operation, timeoutContext) {
    if (!(operation instanceof operation_1.AbstractOperation)) {
        // TODO(NODE-3483): Extend MongoRuntimeError
        throw new error_1.MongoRuntimeError('This method requires a valid operation instance');
    }
    const topology = client.topology == null
        ? await (0, utils_1.abortable)(autoConnect(client), operation.options)
        : client.topology;
    // The driver sessions spec mandates that we implicitly create sessions for operations
    // that are not explicitly provided with a session.
    let session = operation.session;
    let owner;
    if (session == null) {
        owner = Symbol();
        session = client.startSession({ owner, explicit: false });
    }
    else if (session.hasEnded) {
        throw new error_1.MongoExpiredSessionError('Use of expired sessions is not permitted');
    }
    else if (session.snapshotEnabled && !topology.capabilities.supportsSnapshotReads) {
        throw new error_1.MongoCompatibilityError('Snapshot reads require MongoDB 5.0 or later');
    }
    else if (session.client !== client) {
        throw new error_1.MongoInvalidArgumentError('ClientSession must be from the same MongoClient');
    }
    operation.session ??= session;
    const readPreference = operation.readPreference ?? read_preference_1.ReadPreference.primary;
    const inTransaction = !!session?.inTransaction();
    const hasReadAspect = operation.hasAspect(operation_1.Aspect.READ_OPERATION);
    if (inTransaction &&
        !readPreference.equals(read_preference_1.ReadPreference.primary) &&
        (hasReadAspect || operation.commandName === 'runCommand')) {
        throw new error_1.MongoTransactionError(`Read preference in a transaction must be primary, not: ${readPreference.mode}`);
    }
    if (session?.isPinned && session.transaction.isCommitted && !operation.bypassPinningCheck) {
        session.unpin();
    }
    timeoutContext ??= timeout_1.TimeoutContext.create({
        session,
        serverSelectionTimeoutMS: client.s.options.serverSelectionTimeoutMS,
        waitQueueTimeoutMS: client.s.options.waitQueueTimeoutMS,
        timeoutMS: operation.options.timeoutMS
    });
    try {
        return await tryOperation(operation, {
            topology,
            timeoutContext,
            session,
            readPreference
        });
    }
    finally {
        if (session?.owner != null && session.owner === owner) {
            await session.endSession();
        }
    }
}
/**
 * Connects a client if it has not yet been connected
 * @internal
 */
async function autoConnect(client) {
    if (client.topology == null) {
        if (client.s.hasBeenClosed) {
            throw new error_1.MongoNotConnectedError('Client must be connected before running operations');
        }
        client.s.options.__skipPingOnConnect = true;
        try {
            await client.connect();
            if (client.topology == null) {
                throw new error_1.MongoRuntimeError('client.connect did not create a topology but also did not throw');
            }
            return client.topology;
        }
        finally {
            delete client.s.options.__skipPingOnConnect;
        }
    }
    return client.topology;
}
/**
 * Executes an operation and retries as appropriate
 * @internal
 *
 * @remarks
 * Implements behaviour described in [Retryable Reads](https://github.com/mongodb/specifications/blob/master/source/retryable-reads/retryable-reads.md) and [Retryable
 * Writes](https://github.com/mongodb/specifications/blob/master/source/retryable-writes/retryable-writes.md) specification
 *
 * This function:
 * - performs initial server selection
 * - attempts to execute an operation
 * - retries the operation if it meets the criteria for a retryable read or a retryable write
 *
 * @typeParam T - The operation's type
 * @typeParam TResult - The type of the operation's result, calculated from T
 *
 * @param operation - The operation to execute
 * */
async function tryOperation(operation, { topology, timeoutContext, session, readPreference }) {
    let selector;
    if (operation.hasAspect(operation_1.Aspect.MUST_SELECT_SAME_SERVER)) {
        // GetMore and KillCursor operations must always select the same server, but run through
        // server selection to potentially force monitor checks if the server is
        // in an unknown state.
        selector = (0, server_selection_1.sameServerSelector)(operation.server?.description);
    }
    else if (operation instanceof aggregate_1.AggregateOperation && operation.hasWriteStage) {
        // If operation should try to write to secondary use the custom server selector
        // otherwise provide the read preference.
        selector = (0, server_selection_1.secondaryWritableServerSelector)(topology.commonWireVersion, readPreference);
    }
    else {
        selector = readPreference;
    }
    let server = await topology.selectServer(selector, {
        session,
        operationName: operation.commandName,
        timeoutContext,
        signal: operation.options.signal
    });
    const hasReadAspect = operation.hasAspect(operation_1.Aspect.READ_OPERATION);
    const hasWriteAspect = operation.hasAspect(operation_1.Aspect.WRITE_OPERATION);
    const inTransaction = session?.inTransaction() ?? false;
    const willRetryRead = topology.s.options.retryReads && !inTransaction && operation.canRetryRead;
    const willRetryWrite = topology.s.options.retryWrites &&
        !inTransaction &&
        (0, utils_1.supportsRetryableWrites)(server) &&
        operation.canRetryWrite;
    const willRetry = operation.hasAspect(operation_1.Aspect.RETRYABLE) &&
        session != null &&
        ((hasReadAspect && willRetryRead) || (hasWriteAspect && willRetryWrite));
    if (hasWriteAspect && willRetryWrite && session != null) {
        operation.options.willRetryWrite = true;
        session.incrementTransactionNumber();
    }
    const maxTries = willRetry ? (timeoutContext.csotEnabled() ? Infinity : 2) : 1;
    let previousOperationError;
    let previousServer;
    for (let tries = 0; tries < maxTries; tries++) {
        if (previousOperationError) {
            if (hasWriteAspect && previousOperationError.code === MMAPv1_RETRY_WRITES_ERROR_CODE) {
                throw new error_1.MongoServerError({
                    message: MMAPv1_RETRY_WRITES_ERROR_MESSAGE,
                    errmsg: MMAPv1_RETRY_WRITES_ERROR_MESSAGE,
                    originalError: previousOperationError
                });
            }
            if (operation.hasAspect(operation_1.Aspect.COMMAND_BATCHING) && !operation.canRetryWrite) {
                throw previousOperationError;
            }
            if (hasWriteAspect && !(0, error_1.isRetryableWriteError)(previousOperationError))
                throw previousOperationError;
            if (hasReadAspect && !(0, error_1.isRetryableReadError)(previousOperationError)) {
                throw previousOperationError;
            }
            if (previousOperationError instanceof error_1.MongoNetworkError &&
                operation.hasAspect(operation_1.Aspect.CURSOR_CREATING) &&
                session != null &&
                session.isPinned &&
                !session.inTransaction()) {
                session.unpin({ force: true, forceClear: true });
            }
            server = await topology.selectServer(selector, {
                session,
                operationName: operation.commandName,
                previousServer,
                signal: operation.options.signal
            });
            if (hasWriteAspect && !(0, utils_1.supportsRetryableWrites)(server)) {
                throw new error_1.MongoUnexpectedServerResponseError('Selected server does not support retryable writes');
            }
        }
        operation.server = server;
        try {
            // If tries > 0 and we are command batching we need to reset the batch.
            if (tries > 0 && operation.hasAspect(operation_1.Aspect.COMMAND_BATCHING)) {
                operation.resetBatch();
            }
            try {
                const result = await server.command(operation, timeoutContext);
                return operation.handleOk(result);
            }
            catch (error) {
                return operation.handleError(error);
            }
        }
        catch (operationError) {
            if (!(operationError instanceof error_1.MongoError))
                throw operationError;
            if (previousOperationError != null &&
                operationError.hasErrorLabel(error_1.MongoErrorLabel.NoWritesPerformed)) {
                throw previousOperationError;
            }
            previousServer = server.description;
            previousOperationError = operationError;
            // Reset timeouts
            timeoutContext.clear();
        }
    }
    throw (previousOperationError ??
        new error_1.MongoRuntimeError('Tried to propagate retryability error, but no error was found.'));
}
//# sourceMappingURL=execute_operation.js.map