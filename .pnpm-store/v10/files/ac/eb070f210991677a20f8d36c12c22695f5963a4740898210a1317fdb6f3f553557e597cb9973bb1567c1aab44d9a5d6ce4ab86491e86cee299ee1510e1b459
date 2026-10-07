"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursorTimeoutContext = exports.AbstractCursor = exports.CursorTimeoutMode = exports.CURSOR_FLAGS = void 0;
const stream_1 = require("stream");
const bson_1 = require("../bson");
const error_1 = require("../error");
const mongo_types_1 = require("../mongo_types");
const execute_operation_1 = require("../operations/execute_operation");
const get_more_1 = require("../operations/get_more");
const kill_cursors_1 = require("../operations/kill_cursors");
const read_concern_1 = require("../read_concern");
const read_preference_1 = require("../read_preference");
const resource_management_1 = require("../resource_management");
const sessions_1 = require("../sessions");
const timeout_1 = require("../timeout");
const utils_1 = require("../utils");
/** @public */
exports.CURSOR_FLAGS = [
    'tailable',
    'oplogReplay',
    'noCursorTimeout',
    'awaitData',
    'exhaust',
    'partial'
];
function removeActiveCursor() {
    this.client.s.activeCursors.delete(this);
}
/**
 * @public
 * @experimental
 * Specifies how `timeoutMS` is applied to the cursor. Can be either `'cursorLifeTime'` or `'iteration'`
 * When set to `'iteration'`, the deadline specified by `timeoutMS` applies to each call of
 * `cursor.next()`.
 * When set to `'cursorLifetime'`, the deadline applies to the life of the entire cursor.
 *
 * Depending on the type of cursor being used, this option has different default values.
 * For non-tailable cursors, this value defaults to `'cursorLifetime'`
 * For tailable cursors, this value defaults to `'iteration'` since tailable cursors, by
 * definition can have an arbitrarily long lifetime.
 *
 * @example
 * ```ts
 * const cursor = collection.find({}, {timeoutMS: 100, timeoutMode: 'iteration'});
 * for await (const doc of cursor) {
 *  // process doc
 *  // This will throw a timeout error if any of the iterator's `next()` calls takes more than 100ms, but
 *  // will continue to iterate successfully otherwise, regardless of the number of batches.
 * }
 * ```
 *
 * @example
 * ```ts
 * const cursor = collection.find({}, { timeoutMS: 1000, timeoutMode: 'cursorLifetime' });
 * const docs = await cursor.toArray(); // This entire line will throw a timeout error if all batches are not fetched and returned within 1000ms.
 * ```
 */
exports.CursorTimeoutMode = Object.freeze({
    ITERATION: 'iteration',
    LIFETIME: 'cursorLifetime'
});
/** @public */
class AbstractCursor extends mongo_types_1.TypedEventEmitter {
    /** @internal */
    constructor(client, namespace, options = {}) {
        super();
        /** @internal */
        this.documents = null;
        /** @internal */
        this.hasEmittedClose = false;
        this.on('error', utils_1.noop);
        if (!client.s.isMongoClient) {
            throw new error_1.MongoRuntimeError('Cursor must be constructed with MongoClient');
        }
        this.cursorClient = client;
        this.cursorNamespace = namespace;
        this.cursorId = null;
        this.initialized = false;
        this.isClosed = false;
        this.isKilled = false;
        this.cursorOptions = {
            readPreference: options.readPreference && options.readPreference instanceof read_preference_1.ReadPreference
                ? options.readPreference
                : read_preference_1.ReadPreference.primary,
            ...(0, bson_1.pluckBSONSerializeOptions)(options),
            timeoutMS: options?.timeoutContext?.csotEnabled()
                ? options.timeoutContext.timeoutMS
                : options.timeoutMS,
            tailable: options.tailable,
            awaitData: options.awaitData
        };
        if (this.cursorOptions.timeoutMS != null) {
            if (options.timeoutMode == null) {
                if (options.tailable) {
                    if (options.awaitData) {
                        if (options.maxAwaitTimeMS != null &&
                            options.maxAwaitTimeMS >= this.cursorOptions.timeoutMS)
                            throw new error_1.MongoInvalidArgumentError('Cannot specify maxAwaitTimeMS >= timeoutMS for a tailable awaitData cursor');
                    }
                    this.cursorOptions.timeoutMode = exports.CursorTimeoutMode.ITERATION;
                }
                else {
                    this.cursorOptions.timeoutMode = exports.CursorTimeoutMode.LIFETIME;
                }
            }
            else {
                if (options.tailable && options.timeoutMode === exports.CursorTimeoutMode.LIFETIME) {
                    throw new error_1.MongoInvalidArgumentError("Cannot set tailable cursor's timeoutMode to LIFETIME");
                }
                this.cursorOptions.timeoutMode = options.timeoutMode;
            }
        }
        else {
            if (options.timeoutMode != null)
                throw new error_1.MongoInvalidArgumentError('Cannot set timeoutMode without setting timeoutMS');
        }
        // Set for initial command
        this.cursorOptions.omitMaxTimeMS =
            this.cursorOptions.timeoutMS != null &&
                ((this.cursorOptions.timeoutMode === exports.CursorTimeoutMode.ITERATION &&
                    !this.cursorOptions.tailable) ||
                    (this.cursorOptions.tailable && !this.cursorOptions.awaitData));
        const readConcern = read_concern_1.ReadConcern.fromOptions(options);
        if (readConcern) {
            this.cursorOptions.readConcern = readConcern;
        }
        if (typeof options.batchSize === 'number') {
            this.cursorOptions.batchSize = options.batchSize;
        }
        // we check for undefined specifically here to allow falsy values
        // eslint-disable-next-line no-restricted-syntax
        if (options.comment !== undefined) {
            this.cursorOptions.comment = options.comment;
        }
        if (typeof options.maxTimeMS === 'number') {
            this.cursorOptions.maxTimeMS = options.maxTimeMS;
        }
        if (typeof options.maxAwaitTimeMS === 'number') {
            this.cursorOptions.maxAwaitTimeMS = options.maxAwaitTimeMS;
        }
        this.cursorSession = options.session ?? null;
        this.deserializationOptions = {
            ...this.cursorOptions,
            validation: {
                utf8: options?.enableUtf8Validation === false ? false : true
            }
        };
        this.timeoutContext = options.timeoutContext;
        this.signal = options.signal;
        this.abortListener = (0, utils_1.addAbortListener)(this.signal, () => void this.close().then(undefined, utils_1.squashError));
        this.trackCursor();
    }
    /**
     * The cursor has no id until it receives a response from the initial cursor creating command.
     *
     * It is non-zero for as long as the database has an open cursor.
     *
     * The initiating command may receive a zero id if the entire result is in the `firstBatch`.
     */
    get id() {
        return this.cursorId ?? undefined;
    }
    /** @internal */
    get isDead() {
        return (this.cursorId?.isZero() ?? false) || this.isClosed || this.isKilled;
    }
    /** @internal */
    get client() {
        return this.cursorClient;
    }
    /** @internal */
    get server() {
        return this.selectedServer;
    }
    get namespace() {
        return this.cursorNamespace;
    }
    get readPreference() {
        return this.cursorOptions.readPreference;
    }
    get readConcern() {
        return this.cursorOptions.readConcern;
    }
    /** @internal */
    get session() {
        return this.cursorSession;
    }
    set session(clientSession) {
        this.cursorSession = clientSession;
    }
    /**
     * The cursor is closed and all remaining locally buffered documents have been iterated.
     */
    get closed() {
        return this.isClosed && (this.documents?.length ?? 0) === 0;
    }
    /**
     * A `killCursors` command was attempted on this cursor.
     * This is performed if the cursor id is non zero.
     */
    get killed() {
        return this.isKilled;
    }
    get loadBalanced() {
        return !!this.cursorClient.topology?.loadBalanced;
    }
    /** @internal */
    async asyncDispose() {
        await this.close();
    }
    /** Adds cursor to client's tracking so it will be closed by MongoClient.close() */
    trackCursor() {
        this.cursorClient.s.activeCursors.add(this);
        if (!this.listeners('close').includes(removeActiveCursor)) {
            this.once('close', removeActiveCursor);
        }
    }
    /** Returns current buffered documents length */
    bufferedCount() {
        return this.documents?.length ?? 0;
    }
    /** Returns current buffered documents */
    readBufferedDocuments(number) {
        const bufferedDocs = [];
        const documentsToRead = Math.min(number ?? this.documents?.length ?? 0, this.documents?.length ?? 0);
        for (let count = 0; count < documentsToRead; count++) {
            const document = this.documents?.shift(this.deserializationOptions);
            if (document != null) {
                bufferedDocs.push(document);
            }
        }
        return bufferedDocs;
    }
    async *[Symbol.asyncIterator]() {
        this.signal?.throwIfAborted();
        if (this.closed) {
            return;
        }
        try {
            while (true) {
                if (this.isKilled) {
                    return;
                }
                if (this.closed) {
                    return;
                }
                if (this.cursorId != null && this.isDead && (this.documents?.length ?? 0) === 0) {
                    return;
                }
                const document = await this.next();
                // eslint-disable-next-line no-restricted-syntax
                if (document === null) {
                    return;
                }
                yield document;
                this.signal?.throwIfAborted();
            }
        }
        finally {
            // Only close the cursor if it has not already been closed. This finally clause handles
            // the case when a user would break out of a for await of loop early.
            if (!this.isClosed) {
                try {
                    await this.close();
                }
                catch (error) {
                    (0, utils_1.squashError)(error);
                }
            }
        }
    }
    stream(options) {
        const readable = new ReadableCursorStream(this);
        const abortListener = (0, utils_1.addAbortListener)(this.signal, function () {
            readable.destroy(this.reason);
        });
        readable.once('end', () => {
            abortListener?.[utils_1.kDispose]();
        });
        if (options?.transform) {
            const transform = options.transform;
            const transformedStream = readable.pipe(new stream_1.Transform({
                objectMode: true,
                highWaterMark: 1,
                transform(chunk, _, callback) {
                    try {
                        const transformed = transform(chunk);
                        callback(undefined, transformed);
                    }
                    catch (err) {
                        callback(err);
                    }
                }
            }));
            // Bubble errors to transformed stream, because otherwise no way
            // to handle this error.
            readable.on('error', err => transformedStream.emit('error', err));
            return transformedStream;
        }
        return readable;
    }
    async hasNext() {
        this.signal?.throwIfAborted();
        if (this.cursorId === bson_1.Long.ZERO) {
            return false;
        }
        if (this.cursorOptions.timeoutMode === exports.CursorTimeoutMode.ITERATION && this.cursorId != null) {
            this.timeoutContext?.refresh();
        }
        try {
            do {
                if ((this.documents?.length ?? 0) !== 0) {
                    return true;
                }
                await this.fetchBatch();
            } while (!this.isDead || (this.documents?.length ?? 0) !== 0);
        }
        finally {
            if (this.cursorOptions.timeoutMode === exports.CursorTimeoutMode.ITERATION) {
                this.timeoutContext?.clear();
            }
        }
        return false;
    }
    /** Get the next available document from the cursor, returns null if no more documents are available. */
    async next() {
        this.signal?.throwIfAborted();
        if (this.cursorId === bson_1.Long.ZERO) {
            throw new error_1.MongoCursorExhaustedError();
        }
        if (this.cursorOptions.timeoutMode === exports.CursorTimeoutMode.ITERATION && this.cursorId != null) {
            this.timeoutContext?.refresh();
        }
        try {
            do {
                const doc = this.documents?.shift(this.deserializationOptions);
                if (doc != null) {
                    if (this.transform != null)
                        return await this.transformDocument(doc);
                    return doc;
                }
                await this.fetchBatch();
            } while (!this.isDead || (this.documents?.length ?? 0) !== 0);
        }
        finally {
            if (this.cursorOptions.timeoutMode === exports.CursorTimeoutMode.ITERATION) {
                this.timeoutContext?.clear();
            }
        }
        return null;
    }
    /**
     * Try to get the next available document from the cursor or `null` if an empty batch is returned
     */
    async tryNext() {
        this.signal?.throwIfAborted();
        if (this.cursorId === bson_1.Long.ZERO) {
            throw new error_1.MongoCursorExhaustedError();
        }
        if (this.cursorOptions.timeoutMode === exports.CursorTimeoutMode.ITERATION && this.cursorId != null) {
            this.timeoutContext?.refresh();
        }
        try {
            let doc = this.documents?.shift(this.deserializationOptions);
            if (doc != null) {
                if (this.transform != null)
                    return await this.transformDocument(doc);
                return doc;
            }
            await this.fetchBatch();
            doc = this.documents?.shift(this.deserializationOptions);
            if (doc != null) {
                if (this.transform != null)
                    return await this.transformDocument(doc);
                return doc;
            }
        }
        finally {
            if (this.cursorOptions.timeoutMode === exports.CursorTimeoutMode.ITERATION) {
                this.timeoutContext?.clear();
            }
        }
        return null;
    }
    /**
     * Iterates over all the documents for this cursor using the iterator, callback pattern.
     *
     * If the iterator returns `false`, iteration will stop.
     *
     * @param iterator - The iteration callback.
     * @deprecated - Will be removed in a future release. Use for await...of instead.
     */
    async forEach(iterator) {
        this.signal?.throwIfAborted();
        if (typeof iterator !== 'function') {
            throw new error_1.MongoInvalidArgumentError('Argument "iterator" must be a function');
        }
        for await (const document of this) {
            const result = iterator(document);
            if (result === false) {
                break;
            }
        }
    }
    /**
     * Frees any client-side resources used by the cursor.
     */
    async close(options) {
        await this.cleanup(options?.timeoutMS);
    }
    /**
     * Returns an array of documents. The caller is responsible for making sure that there
     * is enough memory to store the results. Note that the array only contains partial
     * results when this cursor had been previously accessed. In that case,
     * cursor.rewind() can be used to reset the cursor.
     */
    async toArray() {
        this.signal?.throwIfAborted();
        const array = [];
        // at the end of the loop (since readBufferedDocuments is called) the buffer will be empty
        // then, the 'await of' syntax will run a getMore call
        for await (const document of this) {
            array.push(document);
            const docs = this.readBufferedDocuments();
            if (this.transform != null) {
                for (const doc of docs) {
                    array.push(await this.transformDocument(doc));
                }
            }
            else {
                array.push(...docs);
            }
        }
        return array;
    }
    /**
     * Add a cursor flag to the cursor
     *
     * @param flag - The flag to set, must be one of following ['tailable', 'oplogReplay', 'noCursorTimeout', 'awaitData', 'partial' -.
     * @param value - The flag boolean value.
     */
    addCursorFlag(flag, value) {
        this.throwIfInitialized();
        if (!exports.CURSOR_FLAGS.includes(flag)) {
            throw new error_1.MongoInvalidArgumentError(`Flag ${flag} is not one of ${exports.CURSOR_FLAGS}`);
        }
        if (typeof value !== 'boolean') {
            throw new error_1.MongoInvalidArgumentError(`Flag ${flag} must be a boolean value`);
        }
        this.cursorOptions[flag] = value;
        return this;
    }
    /**
     * Map all documents using the provided function
     * If there is a transform set on the cursor, that will be called first and the result passed to
     * this function's transform.
     *
     * @remarks
     *
     * **Note** Cursors use `null` internally to indicate that there are no more documents in the cursor. Providing a mapping
     * function that maps values to `null` will result in the cursor closing itself before it has finished iterating
     * all documents.  This will **not** result in a memory leak, just surprising behavior.  For example:
     *
     * ```typescript
     * const cursor = collection.find({});
     * cursor.map(() => null);
     *
     * const documents = await cursor.toArray();
     * // documents is always [], regardless of how many documents are in the collection.
     * ```
     *
     * Other falsey values are allowed:
     *
     * ```typescript
     * const cursor = collection.find({});
     * cursor.map(() => '');
     *
     * const documents = await cursor.toArray();
     * // documents is now an array of empty strings
     * ```
     *
     * **Note for Typescript Users:** adding a transform changes the return type of the iteration of this cursor,
     * it **does not** return a new instance of a cursor. This means when calling map,
     * you should always assign the result to a new variable in order to get a correctly typed cursor variable.
     * Take note of the following example:
     *
     * @example
     * ```typescript
     * const cursor: FindCursor<Document> = coll.find();
     * const mappedCursor: FindCursor<number> = cursor.map(doc => Object.keys(doc).length);
     * const keyCounts: number[] = await mappedCursor.toArray(); // cursor.toArray() still returns Document[]
     * ```
     * @param transform - The mapping transformation method.
     */
    map(transform) {
        this.throwIfInitialized();
        const oldTransform = this.transform;
        if (oldTransform) {
            this.transform = doc => {
                return transform(oldTransform(doc));
            };
        }
        else {
            this.transform = transform;
        }
        return this;
    }
    /**
     * Set the ReadPreference for the cursor.
     *
     * @param readPreference - The new read preference for the cursor.
     */
    withReadPreference(readPreference) {
        this.throwIfInitialized();
        if (readPreference instanceof read_preference_1.ReadPreference) {
            this.cursorOptions.readPreference = readPreference;
        }
        else if (typeof readPreference === 'string') {
            this.cursorOptions.readPreference = read_preference_1.ReadPreference.fromString(readPreference);
        }
        else {
            throw new error_1.MongoInvalidArgumentError(`Invalid read preference: ${readPreference}`);
        }
        return this;
    }
    /**
     * Set the ReadPreference for the cursor.
     *
     * @param readPreference - The new read preference for the cursor.
     */
    withReadConcern(readConcern) {
        this.throwIfInitialized();
        const resolvedReadConcern = read_concern_1.ReadConcern.fromOptions({ readConcern });
        if (resolvedReadConcern) {
            this.cursorOptions.readConcern = resolvedReadConcern;
        }
        return this;
    }
    /**
     * Set a maxTimeMS on the cursor query, allowing for hard timeout limits on queries (Only supported on MongoDB 2.6 or higher)
     *
     * @param value - Number of milliseconds to wait before aborting the query.
     */
    maxTimeMS(value) {
        this.throwIfInitialized();
        if (typeof value !== 'number') {
            throw new error_1.MongoInvalidArgumentError('Argument for maxTimeMS must be a number');
        }
        this.cursorOptions.maxTimeMS = value;
        return this;
    }
    /**
     * Set the batch size for the cursor.
     *
     * @param value - The number of documents to return per batch. See {@link https://www.mongodb.com/docs/manual/reference/command/find/|find command documentation}.
     */
    batchSize(value) {
        this.throwIfInitialized();
        if (this.cursorOptions.tailable) {
            throw new error_1.MongoTailableCursorError('Tailable cursor does not support batchSize');
        }
        if (typeof value !== 'number') {
            throw new error_1.MongoInvalidArgumentError('Operation "batchSize" requires an integer');
        }
        this.cursorOptions.batchSize = value;
        return this;
    }
    /**
     * Rewind this cursor to its uninitialized state. Any options that are present on the cursor will
     * remain in effect. Iterating this cursor will cause new queries to be sent to the server, even
     * if the resultant data has already been retrieved by this cursor.
     */
    rewind() {
        if (this.timeoutContext && this.timeoutContext.owner !== this) {
            throw new error_1.MongoAPIError(`Cannot rewind cursor that does not own its timeout context.`);
        }
        if (!this.initialized) {
            return;
        }
        this.cursorId = null;
        this.documents?.clear();
        this.timeoutContext?.clear();
        this.timeoutContext = undefined;
        this.isClosed = false;
        this.isKilled = false;
        this.initialized = false;
        this.hasEmittedClose = false;
        this.trackCursor();
        // We only want to end this session if we created it, and it hasn't ended yet
        if (this.cursorSession?.explicit === false) {
            if (!this.cursorSession.hasEnded) {
                this.cursorSession.endSession().then(undefined, utils_1.squashError);
            }
            this.cursorSession = null;
        }
    }
    /** @internal */
    async getMore(batchSize) {
        if (this.cursorId == null) {
            throw new error_1.MongoRuntimeError('Unexpected null cursor id. A cursor creating command should have set this');
        }
        if (this.selectedServer == null) {
            throw new error_1.MongoRuntimeError('Unexpected null selectedServer. A cursor creating command should have set this');
        }
        if (this.cursorSession == null) {
            throw new error_1.MongoRuntimeError('Unexpected null session. A cursor creating command should have set this');
        }
        const getMoreOptions = {
            ...this.cursorOptions,
            session: this.cursorSession,
            batchSize
        };
        const getMoreOperation = new get_more_1.GetMoreOperation(this.cursorNamespace, this.cursorId, this.selectedServer, getMoreOptions);
        return await (0, execute_operation_1.executeOperation)(this.cursorClient, getMoreOperation, this.timeoutContext);
    }
    /**
     * @internal
     *
     * This function is exposed for the unified test runner's createChangeStream
     * operation.  We cannot refactor to use the abstract _initialize method without
     * a significant refactor.
     */
    async cursorInit() {
        if (this.cursorOptions.timeoutMS != null) {
            this.timeoutContext ??= new CursorTimeoutContext(timeout_1.TimeoutContext.create({
                serverSelectionTimeoutMS: this.client.s.options.serverSelectionTimeoutMS,
                timeoutMS: this.cursorOptions.timeoutMS
            }), this);
        }
        try {
            this.cursorSession ??= this.cursorClient.startSession({ owner: this, explicit: false });
            const state = await this._initialize(this.cursorSession);
            // Set omitMaxTimeMS to the value needed for subsequent getMore calls
            this.cursorOptions.omitMaxTimeMS = this.cursorOptions.timeoutMS != null;
            const response = state.response;
            this.selectedServer = state.server;
            this.cursorId = response.id;
            this.cursorNamespace = response.ns ?? this.namespace;
            this.documents = response;
            this.initialized = true; // the cursor is now initialized, even if it is dead
        }
        catch (error) {
            // the cursor is now initialized, even if an error occurred
            this.initialized = true;
            await this.cleanup(undefined, error);
            throw error;
        }
        if (this.isDead) {
            await this.cleanup();
        }
        return;
    }
    /** @internal Attempt to obtain more documents */
    async fetchBatch() {
        if (this.isClosed) {
            return;
        }
        if (this.isDead) {
            // if the cursor is dead, we clean it up
            // cleanupCursor should never throw, but if it does it indicates a bug in the driver
            // and we should surface the error
            await this.cleanup();
            return;
        }
        if (this.cursorId == null) {
            await this.cursorInit();
            // If the cursor died or returned documents, return
            if ((this.documents?.length ?? 0) !== 0 || this.isDead)
                return;
            // Otherwise, run a getMore
        }
        // otherwise need to call getMore
        const batchSize = this.cursorOptions.batchSize || 1000;
        try {
            const response = await this.getMore(batchSize);
            this.cursorId = response.id;
            this.documents = response;
        }
        catch (error) {
            try {
                await this.cleanup(undefined, error);
            }
            catch (cleanupError) {
                // `cleanupCursor` should never throw, squash and throw the original error
                (0, utils_1.squashError)(cleanupError);
            }
            throw error;
        }
        if (this.isDead) {
            // If we successfully received a response from a cursor BUT the cursor indicates that it is exhausted,
            // we intentionally clean up the cursor to release its session back into the pool before the cursor
            // is iterated.  This prevents a cursor that is exhausted on the server from holding
            // onto a session indefinitely until the AbstractCursor is iterated.
            //
            // cleanupCursorAsync should never throw, but if it does it indicates a bug in the driver
            // and we should surface the error
            await this.cleanup();
        }
    }
    /** @internal */
    async cleanup(timeoutMS, error) {
        this.abortListener?.[utils_1.kDispose]();
        this.isClosed = true;
        const timeoutContextForKillCursors = () => {
            if (timeoutMS != null) {
                this.timeoutContext?.clear();
                return new CursorTimeoutContext(timeout_1.TimeoutContext.create({
                    serverSelectionTimeoutMS: this.client.s.options.serverSelectionTimeoutMS,
                    timeoutMS
                }), this);
            }
            else {
                return this.timeoutContext?.refreshed();
            }
        };
        const withEmitClose = async (fn) => {
            try {
                await fn();
            }
            finally {
                this.emitClose();
            }
        };
        const close = async () => {
            // if no session has been defined on the cursor, the cursor was never initialized
            // or the cursor was re-wound and never re-iterated.  In either case, we
            //   1. do not need to end the session (there is no session after all)
            //   2. do not need to kill the cursor server-side
            const session = this.cursorSession;
            if (!session)
                return;
            try {
                if (!this.isKilled &&
                    this.cursorId &&
                    !this.cursorId.isZero() &&
                    this.cursorNamespace &&
                    this.selectedServer &&
                    !session.hasEnded) {
                    this.isKilled = true;
                    const cursorId = this.cursorId;
                    this.cursorId = bson_1.Long.ZERO;
                    await (0, execute_operation_1.executeOperation)(this.cursorClient, new kill_cursors_1.KillCursorsOperation(cursorId, this.cursorNamespace, this.selectedServer, {
                        session
                    }), timeoutContextForKillCursors());
                }
            }
            catch (error) {
                (0, utils_1.squashError)(error);
            }
            finally {
                if (session.owner === this) {
                    await session.endSession({ error });
                }
                if (!session.inTransaction()) {
                    (0, sessions_1.maybeClearPinnedConnection)(session, { error });
                }
            }
        };
        await withEmitClose(close);
    }
    /** @internal */
    emitClose() {
        try {
            if (!this.hasEmittedClose && ((this.documents?.length ?? 0) === 0 || this.isClosed)) {
                // @ts-expect-error: CursorEvents is generic so Parameters<CursorEvents["close"]> may not be assignable to `[]`. Not sure how to require extenders do not add parameters.
                this.emit('close');
            }
        }
        finally {
            this.hasEmittedClose = true;
        }
    }
    /** @internal */
    async transformDocument(document) {
        if (this.transform == null)
            return document;
        try {
            const transformedDocument = this.transform(document);
            // eslint-disable-next-line no-restricted-syntax
            if (transformedDocument === null) {
                const TRANSFORM_TO_NULL_ERROR = 'Cursor returned a `null` document, but the cursor is not exhausted.  Mapping documents to `null` is not supported in the cursor transform.';
                throw new error_1.MongoAPIError(TRANSFORM_TO_NULL_ERROR);
            }
            return transformedDocument;
        }
        catch (transformError) {
            try {
                await this.close();
            }
            catch (closeError) {
                (0, utils_1.squashError)(closeError);
            }
            throw transformError;
        }
    }
    /** @internal */
    throwIfInitialized() {
        if (this.initialized)
            throw new error_1.MongoCursorInUseError();
    }
}
exports.AbstractCursor = AbstractCursor;
/** @event */
AbstractCursor.CLOSE = 'close';
class ReadableCursorStream extends stream_1.Readable {
    constructor(cursor) {
        super({
            objectMode: true,
            autoDestroy: false,
            highWaterMark: 1
        });
        this._readInProgress = false;
        this._cursor = cursor;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _read(size) {
        if (!this._readInProgress) {
            this._readInProgress = true;
            this._readNext();
        }
    }
    _destroy(error, callback) {
        this._cursor.close().then(() => callback(error), closeError => callback(closeError));
    }
    _readNext() {
        if (this._cursor.id === bson_1.Long.ZERO) {
            this.push(null);
            return;
        }
        this._cursor
            .next()
            .then(
        // result from next()
        result => {
            if (result == null) {
                this.push(null);
            }
            else if (this.destroyed) {
                this._cursor.close().then(undefined, utils_1.squashError);
            }
            else {
                if (this.push(result)) {
                    return this._readNext();
                }
                this._readInProgress = false;
            }
        }, 
        // error from next()
        err => {
            // NOTE: This is questionable, but we have a test backing the behavior. It seems the
            //       desired behavior is that a stream ends cleanly when a user explicitly closes
            //       a client during iteration. Alternatively, we could do the "right" thing and
            //       propagate the error message by removing this special case.
            if (err.message.match(/server is closed/)) {
                this._cursor.close().then(undefined, utils_1.squashError);
                return this.push(null);
            }
            // NOTE: This is also perhaps questionable. The rationale here is that these errors tend
            //       to be "operation was interrupted", where a cursor has been closed but there is an
            //       active getMore in-flight. This used to check if the cursor was killed but once
            //       that changed to happen in cleanup legitimate errors would not destroy the
            //       stream. There are change streams test specifically test these cases.
            if (err.message.match(/operation was interrupted/)) {
                return this.push(null);
            }
            // NOTE: The two above checks on the message of the error will cause a null to be pushed
            //       to the stream, thus closing the stream before the destroy call happens. This means
            //       that either of those error messages on a change stream will not get a proper
            //       'error' event to be emitted (the error passed to destroy). Change stream resumability
            //       relies on that error event to be emitted to create its new cursor and thus was not
            //       working on 4.4 servers because the error emitted on failover was "interrupted at
            //       shutdown" while on 5.0+ it is "The server is in quiesce mode and will shut down".
            //       See NODE-4475.
            return this.destroy(err);
        })
            // if either of the above handlers throw
            .catch(error => {
            this._readInProgress = false;
            this.destroy(error);
        });
    }
}
(0, resource_management_1.configureResourceManagement)(AbstractCursor.prototype);
/**
 * @internal
 * The cursor timeout context is a wrapper around a timeout context
 * that keeps track of the "owner" of the cursor.  For timeout contexts
 * instantiated inside a cursor, the owner will be the cursor.
 *
 * All timeout behavior is exactly the same as the wrapped timeout context's.
 */
class CursorTimeoutContext extends timeout_1.TimeoutContext {
    constructor(timeoutContext, owner) {
        super();
        this.timeoutContext = timeoutContext;
        this.owner = owner;
    }
    get serverSelectionTimeout() {
        return this.timeoutContext.serverSelectionTimeout;
    }
    get connectionCheckoutTimeout() {
        return this.timeoutContext.connectionCheckoutTimeout;
    }
    get clearServerSelectionTimeout() {
        return this.timeoutContext.clearServerSelectionTimeout;
    }
    get timeoutForSocketWrite() {
        return this.timeoutContext.timeoutForSocketWrite;
    }
    get timeoutForSocketRead() {
        return this.timeoutContext.timeoutForSocketRead;
    }
    csotEnabled() {
        return this.timeoutContext.csotEnabled();
    }
    refresh() {
        if (typeof this.owner !== 'symbol')
            return this.timeoutContext.refresh();
    }
    clear() {
        if (typeof this.owner !== 'symbol')
            return this.timeoutContext.clear();
    }
    get maxTimeMS() {
        return this.timeoutContext.maxTimeMS;
    }
    get timeoutMS() {
        return this.timeoutContext.csotEnabled() ? this.timeoutContext.timeoutMS : null;
    }
    refreshed() {
        return new CursorTimeoutContext(this.timeoutContext.refreshed(), this.owner);
    }
    addMaxTimeMSToCommand(command, options) {
        this.timeoutContext.addMaxTimeMSToCommand(command, options);
    }
    getSocketTimeoutMS() {
        return this.timeoutContext.getSocketTimeoutMS();
    }
}
exports.CursorTimeoutContext = CursorTimeoutContext;
//# sourceMappingURL=abstract_cursor.js.map