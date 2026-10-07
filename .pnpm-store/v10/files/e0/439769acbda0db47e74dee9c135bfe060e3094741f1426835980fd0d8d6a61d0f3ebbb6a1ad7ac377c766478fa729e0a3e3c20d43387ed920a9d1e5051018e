import type { DeserializeOptions } from 'bson';
import type { ObjectIdLike } from 'bson';
import type { SerializeOptions } from 'bson';
import { Binary } from 'bson';
import { BSON } from 'bson';
import { BSONRegExp } from 'bson';
import { BSONSymbol } from 'bson';
import { BSONType } from 'bson';
import { Code } from 'bson';
import { DBRef } from 'bson';
import { Decimal128 } from 'bson';
import { deserialize } from 'bson';
import { Document } from 'bson';
import { Double } from 'bson';
import { Int32 } from 'bson';
import { Long } from 'bson';
import { MaxKey } from 'bson';
import { MinKey } from 'bson';
import { ObjectId } from 'bson';
import { serialize } from 'bson';
import { Timestamp } from 'bson';
import { UUID } from 'bson';
import type { SrvRecord } from 'dns';
import { EventEmitter } from 'events';
import type { Socket } from 'net';
import type { TcpNetConnectOpts } from 'net';
import { Readable } from 'stream';
import { Writable } from 'stream';
import type { ConnectionOptions as ConnectionOptions_2 } from 'tls';
import type { TLSSocket } from 'tls';
import type { TLSSocketOptions } from 'tls';

/** @public */
export declare type Abortable = {
    /**
     * @experimental
     * When provided, the corresponding `AbortController` can be used to abort an asynchronous action.
     *
     * The `signal.reason` value is used as the error thrown.
     *
     * @remarks
     * **NOTE:** If an abort signal aborts an operation while the driver is writing to the underlying
     * socket or reading the response from the server, the socket will be closed.
     * If signals are aborted at a high rate during socket read/writes this can lead to a high rate of connection reestablishment.
     *
     * We plan to mitigate this in a future release, please follow NODE-6062 (`timeoutMS` expiration suffers the same limitation).
     *
     * AbortSignals are likely a best fit for human interactive interruption (ex. ctrl-C) where the frequency
     * of cancellation is reasonably low. If a signal is programmatically aborted for 100s of operations you can empty
     * the driver's connection pool.
     *
     * @example
     * ```js
     * const controller = new AbortController();
     * const { signal } = controller;
     * process.on('SIGINT', () => controller.abort(new Error('^C pressed')));
     *
     * try {
     *   const res = await fetch('...', { signal });
     *   await collection.findOne(await res.json(), { signal });
     * catch (error) {
     *   if (error === signal.reason) {
     *     // signal abort error handling
     *   }
     * }
     * ```
     */
    signal?: AbortSignal | undefined;
};

/** @public */
export declare abstract class AbstractCursor<TSchema = any, CursorEvents extends AbstractCursorEvents = AbstractCursorEvents> extends TypedEventEmitter<CursorEvents> implements AsyncDisposable_2 {
    /* Excluded from this release type: cursorId */
    /* Excluded from this release type: cursorSession */
    /* Excluded from this release type: selectedServer */
    /* Excluded from this release type: cursorNamespace */
    /* Excluded from this release type: documents */
    /* Excluded from this release type: cursorClient */
    /* Excluded from this release type: transform */
    /* Excluded from this release type: initialized */
    /* Excluded from this release type: isClosed */
    /* Excluded from this release type: isKilled */
    /* Excluded from this release type: cursorOptions */
    /* Excluded from this release type: timeoutContext */
    /** @event */
    static readonly CLOSE: "close";
    /* Excluded from this release type: deserializationOptions */
    protected signal: AbortSignal | undefined;
    private abortListener;
    /* Excluded from this release type: __constructor */
    /**
     * The cursor has no id until it receives a response from the initial cursor creating command.
     *
     * It is non-zero for as long as the database has an open cursor.
     *
     * The initiating command may receive a zero id if the entire result is in the `firstBatch`.
     */
    get id(): Long | undefined;
    /* Excluded from this release type: isDead */
    /* Excluded from this release type: client */
    /* Excluded from this release type: server */
    get namespace(): MongoDBNamespace;
    get readPreference(): ReadPreference;
    get readConcern(): ReadConcern | undefined;
    /* Excluded from this release type: session */
    /* Excluded from this release type: session */
    /**
     * The cursor is closed and all remaining locally buffered documents have been iterated.
     */
    get closed(): boolean;
    /**
     * A `killCursors` command was attempted on this cursor.
     * This is performed if the cursor id is non zero.
     */
    get killed(): boolean;
    get loadBalanced(): boolean;
    /* Excluded from this release type: [Symbol.asyncDispose] */
    /* Excluded from this release type: asyncDispose */
    /** Adds cursor to client's tracking so it will be closed by MongoClient.close() */
    private trackCursor;
    /** Returns current buffered documents length */
    bufferedCount(): number;
    /** Returns current buffered documents */
    readBufferedDocuments(number?: number): NonNullable<TSchema>[];
    [Symbol.asyncIterator](): AsyncGenerator<TSchema, void, void>;
    stream(options?: CursorStreamOptions): Readable & AsyncIterable<TSchema>;
    hasNext(): Promise<boolean>;
    /** Get the next available document from the cursor, returns null if no more documents are available. */
    next(): Promise<TSchema | null>;
    /**
     * Try to get the next available document from the cursor or `null` if an empty batch is returned
     */
    tryNext(): Promise<TSchema | null>;
    /**
     * Iterates over all the documents for this cursor using the iterator, callback pattern.
     *
     * If the iterator returns `false`, iteration will stop.
     *
     * @param iterator - The iteration callback.
     * @deprecated - Will be removed in a future release. Use for await...of instead.
     */
    forEach(iterator: (doc: TSchema) => boolean | void): Promise<void>;
    /**
     * Frees any client-side resources used by the cursor.
     */
    close(options?: {
        timeoutMS?: number;
    }): Promise<void>;
    /**
     * Returns an array of documents. The caller is responsible for making sure that there
     * is enough memory to store the results. Note that the array only contains partial
     * results when this cursor had been previously accessed. In that case,
     * cursor.rewind() can be used to reset the cursor.
     */
    toArray(): Promise<TSchema[]>;
    /**
     * Add a cursor flag to the cursor
     *
     * @param flag - The flag to set, must be one of following ['tailable', 'oplogReplay', 'noCursorTimeout', 'awaitData', 'partial' -.
     * @param value - The flag boolean value.
     */
    addCursorFlag(flag: CursorFlag, value: boolean): this;
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
    map<T = any>(transform: (doc: TSchema) => T): AbstractCursor<T>;
    /**
     * Set the ReadPreference for the cursor.
     *
     * @param readPreference - The new read preference for the cursor.
     */
    withReadPreference(readPreference: ReadPreferenceLike): this;
    /**
     * Set the ReadPreference for the cursor.
     *
     * @param readPreference - The new read preference for the cursor.
     */
    withReadConcern(readConcern: ReadConcernLike): this;
    /**
     * Set a maxTimeMS on the cursor query, allowing for hard timeout limits on queries (Only supported on MongoDB 2.6 or higher)
     *
     * @param value - Number of milliseconds to wait before aborting the query.
     */
    maxTimeMS(value: number): this;
    /**
     * Set the batch size for the cursor.
     *
     * @param value - The number of documents to return per batch. See {@link https://www.mongodb.com/docs/manual/reference/command/find/|find command documentation}.
     */
    batchSize(value: number): this;
    /**
     * Rewind this cursor to its uninitialized state. Any options that are present on the cursor will
     * remain in effect. Iterating this cursor will cause new queries to be sent to the server, even
     * if the resultant data has already been retrieved by this cursor.
     */
    rewind(): void;
    /**
     * Returns a new uninitialized copy of this cursor, with options matching those that have been set on the current instance
     */
    abstract clone(): AbstractCursor<TSchema>;
    /* Excluded from this release type: _initialize */
    /* Excluded from this release type: getMore */
    /* Excluded from this release type: cursorInit */
    /* Excluded from this release type: fetchBatch */
    /* Excluded from this release type: cleanup */
    /* Excluded from this release type: hasEmittedClose */
    /* Excluded from this release type: emitClose */
    /* Excluded from this release type: transformDocument */
    /* Excluded from this release type: throwIfInitialized */
}

/** @public */
export declare type AbstractCursorEvents = {
    [AbstractCursor.CLOSE](): void;
};

/** @public */
export declare interface AbstractCursorOptions extends BSONSerializeOptions {
    session?: ClientSession;
    readPreference?: ReadPreferenceLike;
    readConcern?: ReadConcernLike;
    /**
     * Specifies the number of documents to return in each response from MongoDB
     */
    batchSize?: number;
    /**
     * When applicable `maxTimeMS` controls the amount of time the initial command
     * that constructs a cursor should take. (ex. find, aggregate, listCollections)
     */
    maxTimeMS?: number;
    /**
     * When applicable `maxAwaitTimeMS` controls the amount of time subsequent getMores
     * that a cursor uses to fetch more data should take. (ex. cursor.next())
     */
    maxAwaitTimeMS?: number;
    /**
     * Comment to apply to the operation.
     *
     * In server versions pre-4.4, 'comment' must be string.  A server
     * error will be thrown if any other type is provided.
     *
     * In server versions 4.4 and above, 'comment' can be any valid BSON type.
     */
    comment?: unknown;
    /**
     * By default, MongoDB will automatically close a cursor when the
     * client has exhausted all results in the cursor. However, for [capped collections](https://www.mongodb.com/docs/manual/core/capped-collections)
     * you may use a Tailable Cursor that remains open after the client exhausts
     * the results in the initial cursor.
     */
    tailable?: boolean;
    /**
     * If awaitData is set to true, when the cursor reaches the end of the capped collection,
     * MongoDB blocks the query thread for a period of time waiting for new data to arrive.
     * When new data is inserted into the capped collection, the blocked thread is signaled
     * to wake up and return the next batch to the client.
     */
    awaitData?: boolean;
    noCursorTimeout?: boolean;
    /** Specifies the time an operation will run until it throws a timeout error. See {@link AbstractCursorOptions.timeoutMode} for more details on how this option applies to cursors. */
    timeoutMS?: number;
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
    timeoutMode?: CursorTimeoutMode;
    /* Excluded from this release type: timeoutContext */
}

/* Excluded from this release type: AbstractOperation */

/** @public */
export declare type AcceptedFields<TSchema, FieldType, AssignableType> = {
    readonly [key in KeysOfAType<TSchema, FieldType>]?: AssignableType;
};

/** @public */
export declare type AddToSetOperators<Type> = {
    $each?: Array<Flatten<Type>>;
};

/**
 * The **Admin** class is an internal class that allows convenient access to
 * the admin functionality and commands for MongoDB.
 *
 * **ADMIN Cannot directly be instantiated**
 * @public
 *
 * @example
 * ```ts
 * import { MongoClient } from 'mongodb';
 *
 * const client = new MongoClient('mongodb://localhost:27017');
 * const admin = client.db().admin();
 * const dbInfo = await admin.listDatabases();
 * for (const db of dbInfo.databases) {
 *   console.log(db.name);
 * }
 * ```
 */
export declare class Admin {
    /* Excluded from this release type: s */
    /* Excluded from this release type: __constructor */
    /**
     * Execute a command
     *
     * The driver will ensure the following fields are attached to the command sent to the server:
     * - `lsid` - sourced from an implicit session or options.session
     * - `$readPreference` - defaults to primary or can be configured by options.readPreference
     * - `$db` - sourced from the name of this database
     *
     * If the client has a serverApi setting:
     * - `apiVersion`
     * - `apiStrict`
     * - `apiDeprecationErrors`
     *
     * When in a transaction:
     * - `readConcern` - sourced from readConcern set on the TransactionOptions
     * - `writeConcern` - sourced from writeConcern set on the TransactionOptions
     *
     * Attaching any of the above fields to the command will have no effect as the driver will overwrite the value.
     *
     * @param command - The command to execute
     * @param options - Optional settings for the command
     */
    command(command: Document, options?: RunCommandOptions): Promise<Document>;
    /**
     * Retrieve the server build information
     *
     * @param options - Optional settings for the command
     */
    buildInfo(options?: CommandOperationOptions): Promise<Document>;
    /**
     * Retrieve the server build information
     *
     * @param options - Optional settings for the command
     */
    serverInfo(options?: CommandOperationOptions): Promise<Document>;
    /**
     * Retrieve this db's server status.
     *
     * @param options - Optional settings for the command
     */
    serverStatus(options?: CommandOperationOptions): Promise<Document>;
    /**
     * Ping the MongoDB server and retrieve results
     *
     * @param options - Optional settings for the command
     */
    ping(options?: CommandOperationOptions): Promise<Document>;
    /**
     * Remove a user from a database
     *
     * @param username - The username to remove
     * @param options - Optional settings for the command
     */
    removeUser(username: string, options?: RemoveUserOptions): Promise<boolean>;
    /**
     * Validate an existing collection
     *
     * @param collectionName - The name of the collection to validate.
     * @param options - Optional settings for the command
     */
    validateCollection(collectionName: string, options?: ValidateCollectionOptions): Promise<Document>;
    /**
     * List the available databases
     *
     * @param options - Optional settings for the command
     */
    listDatabases(options?: ListDatabasesOptions): Promise<ListDatabasesResult>;
    /**
     * Get ReplicaSet status
     *
     * @param options - Optional settings for the command
     */
    replSetGetStatus(options?: CommandOperationOptions): Promise<Document>;
}

/* Excluded from this release type: AdminPrivate */

/* Excluded from this release type: AggregateOperation */

/** @public */
export declare interface AggregateOptions extends Omit<CommandOperationOptions, 'explain'> {
    /** allowDiskUse lets the server know if it can use disk to store temporary results for the aggregation (requires mongodb 2.6 \>). */
    allowDiskUse?: boolean;
    /** The number of documents to return per batch. See [aggregation documentation](https://www.mongodb.com/docs/manual/reference/command/aggregate). */
    batchSize?: number;
    /** Allow driver to bypass schema validation. */
    bypassDocumentValidation?: boolean;
    /** Return the query as cursor, on 2.6 \> it returns as a real cursor on pre 2.6 it returns as an emulated cursor. */
    cursor?: Document;
    /**
     * Specifies a cumulative time limit in milliseconds for processing operations on the cursor. MongoDB interrupts the operation at the earliest following interrupt point.
     */
    maxTimeMS?: number;
    /** The maximum amount of time for the server to wait on new documents to satisfy a tailable cursor query. */
    maxAwaitTimeMS?: number;
    /** Specify collation. */
    collation?: CollationOptions;
    /** Add an index selection hint to an aggregation command */
    hint?: Hint;
    /** Map of parameter names and values that can be accessed using $$var (requires MongoDB 5.0). */
    let?: Document;
    out?: string;
    /**
     * Specifies the verbosity mode for the explain output.
     * @deprecated This API is deprecated in favor of `collection.aggregate().explain()`
     * or `db.aggregate().explain()`.
     */
    explain?: ExplainOptions['explain'];
    /* Excluded from this release type: timeoutMode */
}

/**
 * The **AggregationCursor** class is an internal class that embodies an aggregation cursor on MongoDB
 * allowing for iteration over the results returned from the underlying query. It supports
 * one by one document iteration, conversion to an array or can be iterated as a Node 4.X
 * or higher stream
 * @public
 */
export declare class AggregationCursor<TSchema = any> extends ExplainableCursor<TSchema> {
    readonly pipeline: Document[];
    /* Excluded from this release type: aggregateOptions */
    /* Excluded from this release type: __constructor */
    clone(): AggregationCursor<TSchema>;
    map<T>(transform: (doc: TSchema) => T): AggregationCursor<T>;
    /* Excluded from this release type: _initialize */
    /** Execute the explain for the cursor */
    explain(): Promise<Document>;
    explain(verbosity: ExplainVerbosityLike | ExplainCommandOptions): Promise<Document>;
    explain(options: {
        timeoutMS?: number;
    }): Promise<Document>;
    explain(verbosity: ExplainVerbosityLike | ExplainCommandOptions, options: {
        timeoutMS?: number;
    }): Promise<Document>;
    /** Add a stage to the aggregation pipeline
     * @example
     * ```
     * const documents = await users.aggregate().addStage({ $match: { name: /Mike/ } }).toArray();
     * ```
     * @example
     * ```
     * const documents = await users.aggregate()
     *   .addStage<{ name: string }>({ $project: { name: true } })
     *   .toArray(); // type of documents is { name: string }[]
     * ```
     */
    addStage(stage: Document): this;
    addStage<T = Document>(stage: Document): AggregationCursor<T>;
    /** Add a group stage to the aggregation pipeline */
    group<T = TSchema>($group: Document): AggregationCursor<T>;
    /** Add a limit stage to the aggregation pipeline */
    limit($limit: number): this;
    /** Add a match stage to the aggregation pipeline */
    match($match: Document): this;
    /** Add an out stage to the aggregation pipeline */
    out($out: {
        db: string;
        coll: string;
    } | string): this;
    /**
     * Add a project stage to the aggregation pipeline
     *
     * @remarks
     * In order to strictly type this function you must provide an interface
     * that represents the effect of your projection on the result documents.
     *
     * By default chaining a projection to your cursor changes the returned type to the generic {@link Document} type.
     * You should specify a parameterized type to have assertions on your final results.
     *
     * @example
     * ```typescript
     * // Best way
     * const docs: AggregationCursor<{ a: number }> = cursor.project<{ a: number }>({ _id: 0, a: true });
     * // Flexible way
     * const docs: AggregationCursor<Document> = cursor.project({ _id: 0, a: true });
     * ```
     *
     * @remarks
     * In order to strictly type this function you must provide an interface
     * that represents the effect of your projection on the result documents.
     *
     * **Note for Typescript Users:** adding a transform changes the return type of the iteration of this cursor,
     * it **does not** return a new instance of a cursor. This means when calling project,
     * you should always assign the result to a new variable in order to get a correctly typed cursor variable.
     * Take note of the following example:
     *
     * @example
     * ```typescript
     * const cursor: AggregationCursor<{ a: number; b: string }> = coll.aggregate([]);
     * const projectCursor = cursor.project<{ a: number }>({ _id: 0, a: true });
     * const aPropOnlyArray: {a: number}[] = await projectCursor.toArray();
     *
     * // or always use chaining and save the final cursor
     *
     * const cursor = coll.aggregate().project<{ a: string }>({
     *   _id: 0,
     *   a: { $convert: { input: '$a', to: 'string' }
     * }});
     * ```
     */
    project<T extends Document = Document>($project: Document): AggregationCursor<T>;
    /** Add a lookup stage to the aggregation pipeline */
    lookup($lookup: Document): this;
    /** Add a redact stage to the aggregation pipeline */
    redact($redact: Document): this;
    /** Add a skip stage to the aggregation pipeline */
    skip($skip: number): this;
    /** Add a sort stage to the aggregation pipeline */
    sort($sort: Sort): this;
    /** Add a unwind stage to the aggregation pipeline */
    unwind($unwind: Document | string): this;
    /** Add a geoNear stage to the aggregation pipeline */
    geoNear($geoNear: Document): this;
}

/** @public */
export declare interface AggregationCursorOptions extends AbstractCursorOptions, AggregateOptions {
}

/**
 * It is possible to search using alternative types in mongodb e.g.
 * string types can be searched using a regex in mongo
 * array types can be searched using their element type
 * @public
 */
export declare type AlternativeType<T> = T extends ReadonlyArray<infer U> ? T | RegExpOrString<U> : RegExpOrString<T>;

/** @public */
export declare type AnyBulkWriteOperation<TSchema extends Document = Document> = {
    insertOne: InsertOneModel<TSchema>;
} | {
    replaceOne: ReplaceOneModel<TSchema>;
} | {
    updateOne: UpdateOneModel<TSchema>;
} | {
    updateMany: UpdateManyModel<TSchema>;
} | {
    deleteOne: DeleteOneModel<TSchema>;
} | {
    deleteMany: DeleteManyModel<TSchema>;
};

/**
 * Used to represent any of the client bulk write models that can be passed as an array
 * to MongoClient#bulkWrite.
 * @public
 */
export declare type AnyClientBulkWriteModel<TSchema extends Document> = ClientInsertOneModel<TSchema> | ClientReplaceOneModel<TSchema> | ClientUpdateOneModel<TSchema> | ClientUpdateManyModel<TSchema> | ClientDeleteOneModel<TSchema> | ClientDeleteManyModel<TSchema>;

/** @public */
export declare type AnyError = MongoError | Error;

/** @public */
export declare type ArrayElement<Type> = Type extends ReadonlyArray<infer Item> ? Item : never;

/** @public */
export declare type ArrayOperator<Type> = {
    $each?: Array<Flatten<Type>>;
    $slice?: number;
    $position?: number;
    $sort?: Sort;
};

/**
 * @public
 */
declare interface AsyncDisposable_2 {
    /* Excluded from this release type: [Symbol.asyncDispose] */
    /* Excluded from this release type: asyncDispose */
}
export { AsyncDisposable_2 as AsyncDisposable }

/** @public */
export declare interface Auth {
    /** The username for auth */
    username?: string;
    /** The password for auth */
    password?: string;
}

/* Excluded from this release type: AuthContext */

/** @public */
export declare const AuthMechanism: Readonly<{
    readonly MONGODB_AWS: "MONGODB-AWS";
    readonly MONGODB_CR: "MONGODB-CR";
    readonly MONGODB_DEFAULT: "DEFAULT";
    readonly MONGODB_GSSAPI: "GSSAPI";
    readonly MONGODB_PLAIN: "PLAIN";
    readonly MONGODB_SCRAM_SHA1: "SCRAM-SHA-1";
    readonly MONGODB_SCRAM_SHA256: "SCRAM-SHA-256";
    readonly MONGODB_X509: "MONGODB-X509";
    readonly MONGODB_OIDC: "MONGODB-OIDC";
}>;

/** @public */
export declare type AuthMechanism = (typeof AuthMechanism)[keyof typeof AuthMechanism];

/** @public */
export declare interface AuthMechanismProperties extends Document {
    SERVICE_HOST?: string;
    SERVICE_NAME?: string;
    SERVICE_REALM?: string;
    CANONICALIZE_HOST_NAME?: GSSAPICanonicalizationValue;
    /** @deprecated Will be removed in the next major version. */
    AWS_SESSION_TOKEN?: string;
    /** A user provided OIDC machine callback function. */
    OIDC_CALLBACK?: OIDCCallbackFunction;
    /** A user provided OIDC human interacted callback function. */
    OIDC_HUMAN_CALLBACK?: OIDCCallbackFunction;
    /** The OIDC environment. Note that 'test' is for internal use only. */
    ENVIRONMENT?: 'test' | 'azure' | 'gcp' | 'k8s';
    /** Allowed hosts that OIDC auth can connect to. */
    ALLOWED_HOSTS?: string[];
    /** The resource token for OIDC auth in Azure and GCP. */
    TOKEN_RESOURCE?: string;
    /**
     * A custom AWS credential provider to use. An example using the AWS SDK default provider chain:
     *
     * ```ts
     * const client = new MongoClient(process.env.MONGODB_URI, {
     *   authMechanismProperties: {
     *     AWS_CREDENTIAL_PROVIDER: fromNodeProviderChain()
     *   }
     * });
     * ```
     *
     * Using a custom function that returns AWS credentials:
     *
     * ```ts
     * const client = new MongoClient(process.env.MONGODB_URI, {
     *   authMechanismProperties: {
     *     AWS_CREDENTIAL_PROVIDER: async () => {
     *       return {
     *         accessKeyId: process.env.ACCESS_KEY_ID,
     *         secretAccessKey: process.env.SECRET_ACCESS_KEY
     *       }
     *     }
     *   }
     * });
     * ```
     */
    AWS_CREDENTIAL_PROVIDER?: AWSCredentialProvider;
}

/* Excluded from this release type: AuthProvider */

/* Excluded from this release type: AutoEncrypter */

/**
 * @public
 *
 * Extra options related to the mongocryptd process
 * \* _Available in MongoDB 6.0 or higher._
 */
export declare type AutoEncryptionExtraOptions = NonNullable<AutoEncryptionOptions['extraOptions']>;

/** @public */
export declare const AutoEncryptionLoggerLevel: Readonly<{
    readonly FatalError: 0;
    readonly Error: 1;
    readonly Warning: 2;
    readonly Info: 3;
    readonly Trace: 4;
}>;

/**
 * @public
 * The level of severity of the log message
 *
 * | Value | Level |
 * |-------|-------|
 * | 0 | Fatal Error |
 * | 1 | Error |
 * | 2 | Warning |
 * | 3 | Info |
 * | 4 | Trace |
 */
export declare type AutoEncryptionLoggerLevel = (typeof AutoEncryptionLoggerLevel)[keyof typeof AutoEncryptionLoggerLevel];

/** @public */
export declare interface AutoEncryptionOptions {
    /* Excluded from this release type: metadataClient */
    /** A `MongoClient` used to fetch keys from a key vault */
    keyVaultClient?: MongoClient;
    /** The namespace where keys are stored in the key vault */
    keyVaultNamespace?: string;
    /** Configuration options that are used by specific KMS providers during key generation, encryption, and decryption. */
    kmsProviders?: KMSProviders;
    /** Configuration options for custom credential providers. */
    credentialProviders?: CredentialProviders;
    /**
     * A map of namespaces to a local JSON schema for encryption
     *
     * **NOTE**: Supplying options.schemaMap provides more security than relying on JSON Schemas obtained from the server.
     * It protects against a malicious server advertising a false JSON Schema, which could trick the client into sending decrypted data that should be encrypted.
     * Schemas supplied in the schemaMap only apply to configuring automatic encryption for Client-Side Field Level Encryption.
     * Other validation rules in the JSON schema will not be enforced by the driver and will result in an error.
     */
    schemaMap?: Document;
    /** Supply a schema for the encrypted fields in the document  */
    encryptedFieldsMap?: Document;
    /** Allows the user to bypass auto encryption, maintaining implicit decryption */
    bypassAutoEncryption?: boolean;
    /** Allows users to bypass query analysis */
    bypassQueryAnalysis?: boolean;
    /**
     * Sets the expiration time for the DEK in the cache in milliseconds. Defaults to 60000.  0 means no timeout.
     */
    keyExpirationMS?: number;
    options?: {
        /** An optional hook to catch logging messages from the underlying encryption engine */
        logger?: (level: AutoEncryptionLoggerLevel, message: string) => void;
    };
    extraOptions?: {
        /**
         * A local process the driver communicates with to determine how to encrypt values in a command.
         * Defaults to "mongodb://%2Fvar%2Fmongocryptd.sock" if domain sockets are available or "mongodb://localhost:27020" otherwise
         */
        mongocryptdURI?: string;
        /** If true, autoEncryption will not attempt to spawn a mongocryptd before connecting  */
        mongocryptdBypassSpawn?: boolean;
        /** The path to the mongocryptd executable on the system */
        mongocryptdSpawnPath?: string;
        /** Command line arguments to use when auto-spawning a mongocryptd */
        mongocryptdSpawnArgs?: string[];
        /**
         * Full path to a MongoDB Crypt shared library to be used (instead of mongocryptd).
         *
         * This needs to be the path to the file itself, not a directory.
         * It can be an absolute or relative path. If the path is relative and
         * its first component is `$ORIGIN`, it will be replaced by the directory
         * containing the mongodb-client-encryption native addon file. Otherwise,
         * the path will be interpreted relative to the current working directory.
         *
         * Currently, loading different MongoDB Crypt shared library files from different
         * MongoClients in the same process is not supported.
         *
         * If this option is provided and no MongoDB Crypt shared library could be loaded
         * from the specified location, creating the MongoClient will fail.
         *
         * If this option is not provided and `cryptSharedLibRequired` is not specified,
         * the AutoEncrypter will attempt to spawn and/or use mongocryptd according
         * to the mongocryptd-specific `extraOptions` options.
         *
         * Specifying a path prevents mongocryptd from being used as a fallback.
         *
         * Requires the MongoDB Crypt shared library, available in MongoDB 6.0 or higher.
         */
        cryptSharedLibPath?: string;
        /**
         * If specified, never use mongocryptd and instead fail when the MongoDB Crypt
         * shared library could not be loaded.
         *
         * This is always true when `cryptSharedLibPath` is specified.
         *
         * Requires the MongoDB Crypt shared library, available in MongoDB 6.0 or higher.
         */
        cryptSharedLibRequired?: boolean;
        /* Excluded from this release type: cryptSharedLibSearchPaths */
    };
    proxyOptions?: ProxyOptions;
    /** The TLS options to use connecting to the KMS provider */
    tlsOptions?: CSFLEKMSTlsOptions;
}

/** @public **/
export declare type AWSCredentialProvider = () => Promise<AWSCredentials>;

/**
 * @public
 * Copy of the AwsCredentialIdentityProvider interface from [`smithy/types`](https://socket.dev/npm/package/\@smithy/types/files/1.1.1/dist-types/identity/awsCredentialIdentity.d.ts),
 * the return type of the aws-sdk's `fromNodeProviderChain().provider()`.
 */
export declare interface AWSCredentials {
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken?: string;
    expiration?: Date;
}

/**
 * @public
 * Configuration options for making an AWS encryption key
 */
export declare interface AWSEncryptionKeyOptions {
    /**
     * The AWS region of the KMS
     */
    region: string;
    /**
     * The Amazon Resource Name (ARN) to the AWS customer master key (CMK)
     */
    key: string;
    /**
     * An alternate host to send KMS requests to. May include port number.
     */
    endpoint?: string | undefined;
}

/** @public */
export declare interface AWSKMSProviderConfiguration {
    /**
     * The access key used for the AWS KMS provider
     */
    accessKeyId: string;
    /**
     * The secret access key used for the AWS KMS provider
     */
    secretAccessKey: string;
    /**
     * An optional AWS session token that will be used as the
     * X-Amz-Security-Token header for AWS requests.
     */
    sessionToken?: string;
}

/**
 * @public
 * Configuration options for making an Azure encryption key
 */
export declare interface AzureEncryptionKeyOptions {
    /**
     * Key name
     */
    keyName: string;
    /**
     * Key vault URL, typically `<name>.vault.azure.net`
     */
    keyVaultEndpoint: string;
    /**
     * Key version
     */
    keyVersion?: string | undefined;
}

/** @public */
export declare type AzureKMSProviderConfiguration = {
    /**
     * The tenant ID identifies the organization for the account
     */
    tenantId: string;
    /**
     * The client ID to authenticate a registered application
     */
    clientId: string;
    /**
     * The client secret to authenticate a registered application
     */
    clientSecret: string;
    /**
     * If present, a host with optional port. E.g. "example.com" or "example.com:443".
     * This is optional, and only needed if customer is using a non-commercial Azure instance
     * (e.g. a government or China account, which use different URLs).
     * Defaults to "login.microsoftonline.com"
     */
    identityPlatformEndpoint?: string | undefined;
} | {
    /**
     * If present, an access token to authenticate with Azure.
     */
    accessToken: string;
};

/**
 * Keeps the state of a unordered batch so we can rewrite the results
 * correctly after command execution
 *
 * @public
 */
export declare class Batch<T = Document> {
    originalZeroIndex: number;
    currentIndex: number;
    originalIndexes: number[];
    batchType: BatchType;
    operations: T[];
    size: number;
    sizeBytes: number;
    constructor(batchType: BatchType, originalZeroIndex: number);
}

/** @public */
export declare const BatchType: Readonly<{
    readonly INSERT: 1;
    readonly UPDATE: 2;
    readonly DELETE: 3;
}>;

/** @public */
export declare type BatchType = (typeof BatchType)[keyof typeof BatchType];

export { Binary }

/** @public */
export declare type BitwiseFilter = number /** numeric bit mask */ | Binary /** BinData bit mask */ | ReadonlyArray<number>;

export { BSON }

/* Excluded from this release type: BSONElement */
export { BSONRegExp }

/**
 * BSON Serialization options.
 * @public
 */
export declare interface BSONSerializeOptions extends Omit<SerializeOptions, 'index'>, Omit<DeserializeOptions, 'evalFunctions' | 'cacheFunctions' | 'cacheFunctionsCrc32' | 'allowObjectSmallerThanBufferSize' | 'index' | 'validation'> {
    /**
     * Enabling the raw option will return a [Node.js Buffer](https://nodejs.org/api/buffer.html)
     * which is allocated using [allocUnsafe API](https://nodejs.org/api/buffer.html#static-method-bufferallocunsafesize).
     * See this section from the [Node.js Docs here](https://nodejs.org/api/buffer.html#what-makes-bufferallocunsafe-and-bufferallocunsafeslow-unsafe)
     * for more detail about what "unsafe" refers to in this context.
     * If you need to maintain your own editable clone of the bytes returned for an extended life time of the process, it is recommended you allocate
     * your own buffer and clone the contents:
     *
     * @example
     * ```ts
     * const raw = await collection.findOne({}, { raw: true });
     * const myBuffer = Buffer.alloc(raw.byteLength);
     * myBuffer.set(raw, 0);
     * // Only save and use `myBuffer` beyond this point
     * ```
     *
     * @remarks
     * Please note there is a known limitation where this option cannot be used at the MongoClient level (see [NODE-3946](https://jira.mongodb.org/browse/NODE-3946)).
     * It does correctly work at `Db`, `Collection`, and per operation the same as other BSON options work.
     */
    raw?: boolean;
    /** Enable utf8 validation when deserializing BSON documents.  Defaults to true. */
    enableUtf8Validation?: boolean;
}

export { BSONSymbol }

export { BSONType }

/** @public */
export declare type BSONTypeAlias = keyof typeof BSONType;

/* Excluded from this release type: BufferPool */

/** @public */
export declare abstract class BulkOperationBase {
    isOrdered: boolean;
    /* Excluded from this release type: s */
    operationId?: number;
    private collection;
    /* Excluded from this release type: __constructor */
    /**
     * Add a single insert document to the bulk operation
     *
     * @example
     * ```ts
     * const bulkOp = collection.initializeOrderedBulkOp();
     *
     * // Adds three inserts to the bulkOp.
     * bulkOp
     *   .insert({ a: 1 })
     *   .insert({ b: 2 })
     *   .insert({ c: 3 });
     * await bulkOp.execute();
     * ```
     */
    insert(document: Document): BulkOperationBase;
    /**
     * Builds a find operation for an update/updateOne/delete/deleteOne/replaceOne.
     * Returns a builder object used to complete the definition of the operation.
     *
     * @example
     * ```ts
     * const bulkOp = collection.initializeOrderedBulkOp();
     *
     * // Add an updateOne to the bulkOp
     * bulkOp.find({ a: 1 }).updateOne({ $set: { b: 2 } });
     *
     * // Add an updateMany to the bulkOp
     * bulkOp.find({ c: 3 }).update({ $set: { d: 4 } });
     *
     * // Add an upsert
     * bulkOp.find({ e: 5 }).upsert().updateOne({ $set: { f: 6 } });
     *
     * // Add a deletion
     * bulkOp.find({ g: 7 }).deleteOne();
     *
     * // Add a multi deletion
     * bulkOp.find({ h: 8 }).delete();
     *
     * // Add a replaceOne
     * bulkOp.find({ i: 9 }).replaceOne({writeConcern: { j: 10 }});
     *
     * // Update using a pipeline (requires Mongodb 4.2 or higher)
     * bulk.find({ k: 11, y: { $exists: true }, z: { $exists: true } }).updateOne([
     *   { $set: { total: { $sum: [ '$y', '$z' ] } } }
     * ]);
     *
     * // All of the ops will now be executed
     * await bulkOp.execute();
     * ```
     */
    find(selector: Document): FindOperators;
    /** Specifies a raw operation to perform in the bulk write. */
    raw(op: AnyBulkWriteOperation): this;
    get length(): number;
    get bsonOptions(): BSONSerializeOptions;
    get writeConcern(): WriteConcern | undefined;
    get batches(): Batch[];
    execute(options?: BulkWriteOptions): Promise<BulkWriteResult>;
    /* Excluded from this release type: handleWriteError */
    abstract addToOperationsList(batchType: BatchType, document: Document | UpdateStatement | DeleteStatement): this;
    private shouldForceServerObjectId;
}

/* Excluded from this release type: BulkOperationPrivate */

/* Excluded from this release type: BulkResult */

/** @public */
export declare interface BulkWriteOperationError {
    index: number;
    code: number;
    errmsg: string;
    errInfo: Document;
    op: Document | UpdateStatement | DeleteStatement;
}

/** @public */
export declare interface BulkWriteOptions extends CommandOperationOptions {
    /**
     * Allow driver to bypass schema validation.
     * @defaultValue `false` - documents will be validated by default
     **/
    bypassDocumentValidation?: boolean;
    /**
     * If true, when an insert fails, don't execute the remaining writes.
     * If false, continue with remaining inserts when one fails.
     * @defaultValue `true` - inserts are ordered by default
     */
    ordered?: boolean;
    /**
     * Force server to assign _id values instead of driver.
     * @defaultValue `false` - the driver generates `_id` fields by default
     **/
    forceServerObjectId?: boolean;
    /** Map of parameter names and values that can be accessed using $$var (requires MongoDB 5.0). */
    let?: Document;
    /* Excluded from this release type: timeoutContext */
}

/**
 * @public
 * The result of a bulk write.
 */
export declare class BulkWriteResult {
    private readonly result;
    /** Number of documents inserted. */
    readonly insertedCount: number;
    /** Number of documents matched for update. */
    readonly matchedCount: number;
    /** Number of documents modified. */
    readonly modifiedCount: number;
    /** Number of documents deleted. */
    readonly deletedCount: number;
    /** Number of documents upserted. */
    readonly upsertedCount: number;
    /** Upserted document generated Id's, hash key is the index of the originating operation */
    readonly upsertedIds: {
        [key: number]: any;
    };
    /** Inserted document generated Id's, hash key is the index of the originating operation */
    readonly insertedIds: {
        [key: number]: any;
    };
    private static generateIdMap;
    /* Excluded from this release type: __constructor */
    /** Evaluates to true if the bulk operation correctly executes */
    get ok(): number;
    /* Excluded from this release type: getSuccessfullyInsertedIds */
    /** Returns the upserted id at the given index */
    getUpsertedIdAt(index: number): Document | undefined;
    /** Returns raw internal result */
    getRawResponse(): Document;
    /** Returns true if the bulk operation contains a write error */
    hasWriteErrors(): boolean;
    /** Returns the number of write errors from the bulk operation */
    getWriteErrorCount(): number;
    /** Returns a specific write error object */
    getWriteErrorAt(index: number): WriteError | undefined;
    /** Retrieve all write errors */
    getWriteErrors(): WriteError[];
    /** Retrieve the write concern error if one exists */
    getWriteConcernError(): WriteConcernError | undefined;
    toString(): string;
    isOk(): boolean;
}

/**
 * MongoDB Driver style callback
 * @public
 */
export declare type Callback<T = any> = (error?: AnyError, result?: T) => void;

/**
 * @public
 * @deprecated Will be removed in favor of `AbortSignal` in the next major release.
 */
export declare class CancellationToken extends TypedEventEmitter<{
    cancel(): void;
}> {
    constructor(...args: any[]);
}

/**
 * Creates a new Change Stream instance. Normally created using {@link Collection#watch|Collection.watch()}.
 * @public
 */
export declare class ChangeStream<TSchema extends Document = Document, TChange extends Document = ChangeStreamDocument<TSchema>> extends TypedEventEmitter<ChangeStreamEvents<TSchema, TChange>> implements AsyncDisposable_2 {
    /* Excluded from this release type: [Symbol.asyncDispose] */
    /* Excluded from this release type: asyncDispose */
    pipeline: Document[];
    /**
     * @remarks WriteConcern can still be present on the options because
     * we inherit options from the client/db/collection.  The
     * key must be present on the options in order to delete it.
     * This allows typescript to delete the key but will
     * not allow a writeConcern to be assigned as a property on options.
     */
    options: ChangeStreamOptions & {
        writeConcern?: never;
    };
    parent: MongoClient | Db | Collection;
    namespace: MongoDBNamespace;
    type: symbol;
    /* Excluded from this release type: cursor */
    streamOptions?: CursorStreamOptions;
    /* Excluded from this release type: cursorStream */
    /* Excluded from this release type: isClosed */
    /* Excluded from this release type: mode */
    /** @event */
    static readonly RESPONSE: "response";
    /** @event */
    static readonly MORE: "more";
    /** @event */
    static readonly INIT: "init";
    /** @event */
    static readonly CLOSE: "close";
    /**
     * Fired for each new matching change in the specified namespace. Attaching a `change`
     * event listener to a Change Stream will switch the stream into flowing mode. Data will
     * then be passed as soon as it is available.
     * @event
     */
    static readonly CHANGE: "change";
    /** @event */
    static readonly END: "end";
    /** @event */
    static readonly ERROR: "error";
    /**
     * Emitted each time the change stream stores a new resume token.
     * @event
     */
    static readonly RESUME_TOKEN_CHANGED: "resumeTokenChanged";
    private timeoutContext?;
    /**
     * Note that this property is here to uniquely identify a ChangeStream instance as the owner of
     * the {@link CursorTimeoutContext} instance (see {@link ChangeStream._createChangeStreamCursor}) to ensure
     * that {@link AbstractCursor.close} does not mutate the timeoutContext.
     */
    private contextOwner;
    /* Excluded from this release type: __constructor */
    /** The cached resume token that is used to resume after the most recently returned change. */
    get resumeToken(): ResumeToken;
    /** Check if there is any document still available in the Change Stream */
    hasNext(): Promise<boolean>;
    /** Get the next available document from the Change Stream. */
    next(): Promise<TChange>;
    /**
     * Try to get the next available document from the Change Stream's cursor or `null` if an empty batch is returned
     */
    tryNext(): Promise<TChange | null>;
    [Symbol.asyncIterator](): AsyncGenerator<TChange, void, void>;
    /** Is the cursor closed */
    get closed(): boolean;
    /**
     * Frees the internal resources used by the change stream.
     */
    close(): Promise<void>;
    /**
     * Return a modified Readable stream including a possible transform method.
     *
     * NOTE: When using a Stream to process change stream events, the stream will
     * NOT automatically resume in the case a resumable error is encountered.
     *
     * @throws MongoChangeStreamError if the underlying cursor or the change stream is closed
     */
    stream(options?: CursorStreamOptions): Readable & AsyncIterable<TChange>;
    /* Excluded from this release type: _setIsEmitter */
    /* Excluded from this release type: _setIsIterator */
    /* Excluded from this release type: _createChangeStreamCursor */
    /* Excluded from this release type: _closeEmitterModeWithError */
    /* Excluded from this release type: _streamEvents */
    /* Excluded from this release type: _endStream */
    /* Excluded from this release type: _processChange */
    /* Excluded from this release type: _processErrorStreamMode */
    /* Excluded from this release type: _processErrorIteratorMode */
    private _resume;
}

/**
 * Only present when the `showExpandedEvents` flag is enabled.
 * @public
 * @see https://www.mongodb.com/docs/manual/reference/change-events/modify/#mongodb-data-modify
 */
export declare interface ChangeStreamCollModDocument extends ChangeStreamDocumentCommon, ChangeStreamDocumentCollectionUUID, ChangeStreamDocumentWallTime {
    /** Describes the type of operation represented in this change notification */
    operationType: 'modify';
}

/**
 * @public
 * @see https://www.mongodb.com/docs/manual/reference/change-events/create/#mongodb-data-create
 */
export declare interface ChangeStreamCreateDocument extends ChangeStreamDocumentCommon, ChangeStreamDocumentCollectionUUID, ChangeStreamDocumentWallTime {
    /** Describes the type of operation represented in this change notification */
    operationType: 'create';
    /**
     * The type of the newly created object.
     *
     * @sinceServerVersion 8.1.0
     */
    nsType?: 'collection' | 'timeseries' | 'view';
}

/**
 * Only present when the `showExpandedEvents` flag is enabled.
 * @public
 * @see https://www.mongodb.com/docs/manual/reference/change-events/createIndexes/#mongodb-data-createIndexes
 */
export declare interface ChangeStreamCreateIndexDocument extends ChangeStreamDocumentCommon, ChangeStreamDocumentCollectionUUID, ChangeStreamDocumentOperationDescription, ChangeStreamDocumentWallTime {
    /** Describes the type of operation represented in this change notification */
    operationType: 'createIndexes';
}

/* Excluded from this release type: ChangeStreamCursor */

/* Excluded from this release type: ChangeStreamCursorOptions */

/**
 * @public
 * @see https://www.mongodb.com/docs/manual/reference/change-events/#delete-event
 */
export declare interface ChangeStreamDeleteDocument<TSchema extends Document = Document> extends ChangeStreamDocumentCommon, ChangeStreamDocumentKey<TSchema>, ChangeStreamDocumentCollectionUUID, ChangeStreamDocumentWallTime {
    /** Describes the type of operation represented in this change notification */
    operationType: 'delete';
    /** Namespace the delete event occurred on */
    ns: ChangeStreamNameSpace;
    /**
     * Contains the pre-image of the modified or deleted document if the
     * pre-image is available for the change event and either 'required' or
     * 'whenAvailable' was specified for the 'fullDocumentBeforeChange' option
     * when creating the change stream. If 'whenAvailable' was specified but the
     * pre-image is unavailable, this will be explicitly set to null.
     */
    fullDocumentBeforeChange?: TSchema;
}

/** @public */
export declare type ChangeStreamDocument<TSchema extends Document = Document> = ChangeStreamInsertDocument<TSchema> | ChangeStreamUpdateDocument<TSchema> | ChangeStreamReplaceDocument<TSchema> | ChangeStreamDeleteDocument<TSchema> | ChangeStreamDropDocument | ChangeStreamRenameDocument | ChangeStreamDropDatabaseDocument | ChangeStreamInvalidateDocument | ChangeStreamCreateIndexDocument | ChangeStreamCreateDocument | ChangeStreamCollModDocument | ChangeStreamDropIndexDocument | ChangeStreamShardCollectionDocument | ChangeStreamReshardCollectionDocument | ChangeStreamRefineCollectionShardKeyDocument;

/** @public */
export declare interface ChangeStreamDocumentCollectionUUID {
    /**
     * The UUID (Binary subtype 4) of the collection that the operation was performed on.
     *
     * Only present when the `showExpandedEvents` flag is enabled.
     *
     * **NOTE:** collectionUUID will be converted to a NodeJS Buffer if the promoteBuffers
     *    flag is enabled.
     *
     * @sinceServerVersion 6.1.0
     */
    collectionUUID: Binary;
}

/** @public */
export declare interface ChangeStreamDocumentCommon {
    /**
     * The id functions as an opaque token for use when resuming an interrupted
     * change stream.
     */
    _id: ResumeToken;
    /**
     * The timestamp from the oplog entry associated with the event.
     * For events that happened as part of a multi-document transaction, the associated change stream
     * notifications will have the same clusterTime value, namely the time when the transaction was committed.
     * On a sharded cluster, events that occur on different shards can have the same clusterTime but be
     * associated with different transactions or even not be associated with any transaction.
     * To identify events for a single transaction, you can use the combination of lsid and txnNumber in the change stream event document.
     */
    clusterTime?: Timestamp;
    /**
     * The transaction number.
     * Only present if the operation is part of a multi-document transaction.
     *
     * **NOTE:** txnNumber can be a Long if promoteLongs is set to false
     */
    txnNumber?: number;
    /**
     * The identifier for the session associated with the transaction.
     * Only present if the operation is part of a multi-document transaction.
     */
    lsid?: ServerSessionId;
    /**
     * When the change stream's backing aggregation pipeline contains the $changeStreamSplitLargeEvent
     * stage, events larger than 16MB will be split into multiple events and contain the
     * following information about which fragment the current event is.
     */
    splitEvent?: ChangeStreamSplitEvent;
}

/** @public */
export declare interface ChangeStreamDocumentKey<TSchema extends Document = Document> {
    /**
     * For unsharded collections this contains a single field `_id`.
     * For sharded collections, this will contain all the components of the shard key
     */
    documentKey: {
        _id: InferIdType<TSchema>;
        [shardKey: string]: any;
    };
}

/** @public */
export declare interface ChangeStreamDocumentOperationDescription {
    /**
     * An description of the operation.
     *
     * Only present when the `showExpandedEvents` flag is enabled.
     *
     * @sinceServerVersion 6.1.0
     */
    operationDescription?: Document;
}

/** @public */
export declare interface ChangeStreamDocumentWallTime {
    /**
     * The server date and time of the database operation.
     * wallTime differs from clusterTime in that clusterTime is a timestamp taken from the oplog entry associated with the database operation event.
     * @sinceServerVersion 6.0.0
     */
    wallTime?: Date;
}

/**
 * @public
 * @see https://www.mongodb.com/docs/manual/reference/change-events/#dropdatabase-event
 */
export declare interface ChangeStreamDropDatabaseDocument extends ChangeStreamDocumentCommon, ChangeStreamDocumentWallTime {
    /** Describes the type of operation represented in this change notification */
    operationType: 'dropDatabase';
    /** The database dropped */
    ns: {
        db: string;
    };
}

/**
 * @public
 * @see https://www.mongodb.com/docs/manual/reference/change-events/#drop-event
 */
export declare interface ChangeStreamDropDocument extends ChangeStreamDocumentCommon, ChangeStreamDocumentCollectionUUID, ChangeStreamDocumentWallTime {
    /** Describes the type of operation represented in this change notification */
    operationType: 'drop';
    /** Namespace the drop event occurred on */
    ns: ChangeStreamNameSpace;
}

/**
 * Only present when the `showExpandedEvents` flag is enabled.
 * @public
 * @see https://www.mongodb.com/docs/manual/reference/change-events/dropIndexes/#mongodb-data-dropIndexes
 */
export declare interface ChangeStreamDropIndexDocument extends ChangeStreamDocumentCommon, ChangeStreamDocumentCollectionUUID, ChangeStreamDocumentOperationDescription, ChangeStreamDocumentWallTime {
    /** Describes the type of operation represented in this change notification */
    operationType: 'dropIndexes';
}

/** @public */
export declare type ChangeStreamEvents<TSchema extends Document = Document, TChange extends Document = ChangeStreamDocument<TSchema>> = {
    resumeTokenChanged(token: ResumeToken): void;
    init(response: any): void;
    more(response?: any): void;
    response(): void;
    end(): void;
    error(error: Error): void;
    change(change: TChange): void;
    /**
     * @remarks Note that the `close` event is currently emitted whenever the internal `ChangeStreamCursor`
     * instance is closed, which can occur multiple times for a given `ChangeStream` instance.
     *
     * TODO(NODE-6434): address this issue in NODE-6434
     */
    close(): void;
};

/**
 * @public
 * @see https://www.mongodb.com/docs/manual/reference/change-events/#insert-event
 */
export declare interface ChangeStreamInsertDocument<TSchema extends Document = Document> extends ChangeStreamDocumentCommon, ChangeStreamDocumentKey<TSchema>, ChangeStreamDocumentCollectionUUID, ChangeStreamDocumentWallTime {
    /** Describes the type of operation represented in this change notification */
    operationType: 'insert';
    /** This key will contain the document being inserted */
    fullDocument: TSchema;
    /** Namespace the insert event occurred on */
    ns: ChangeStreamNameSpace;
}

/**
 * @public
 * @see https://www.mongodb.com/docs/manual/reference/change-events/#invalidate-event
 */
export declare interface ChangeStreamInvalidateDocument extends ChangeStreamDocumentCommon, ChangeStreamDocumentWallTime {
    /** Describes the type of operation represented in this change notification */
    operationType: 'invalidate';
}

/** @public */
export declare interface ChangeStreamNameSpace {
    db: string;
    coll: string;
}

/**
 * Options that can be passed to a ChangeStream. Note that startAfter, resumeAfter, and startAtOperationTime are all mutually exclusive, and the server will error if more than one is specified.
 * @public
 */
export declare interface ChangeStreamOptions extends Omit<AggregateOptions, 'writeConcern'> {
    /**
     * Allowed values: 'updateLookup', 'whenAvailable', 'required'.
     *
     * When set to 'updateLookup', the change notification for partial updates
     * will include both a delta describing the changes to the document as well
     * as a copy of the entire document that was changed from some time after
     * the change occurred.
     *
     * When set to 'whenAvailable', configures the change stream to return the
     * post-image of the modified document for replace and update change events
     * if the post-image for this event is available.
     *
     * When set to 'required', the same behavior as 'whenAvailable' except that
     * an error is raised if the post-image is not available.
     */
    fullDocument?: string;
    /**
     * Allowed values: 'whenAvailable', 'required', 'off'.
     *
     * The default is to not send a value, which is equivalent to 'off'.
     *
     * When set to 'whenAvailable', configures the change stream to return the
     * pre-image of the modified document for replace, update, and delete change
     * events if it is available.
     *
     * When set to 'required', the same behavior as 'whenAvailable' except that
     * an error is raised if the pre-image is not available.
     */
    fullDocumentBeforeChange?: string;
    /** The maximum amount of time for the server to wait on new documents to satisfy a change stream query. */
    maxAwaitTimeMS?: number;
    /**
     * Allows you to start a changeStream after a specified event.
     * @see https://www.mongodb.com/docs/manual/changeStreams/#resumeafter-for-change-streams
     */
    resumeAfter?: ResumeToken;
    /**
     * Similar to resumeAfter, but will allow you to start after an invalidated event.
     * @see https://www.mongodb.com/docs/manual/changeStreams/#startafter-for-change-streams
     */
    startAfter?: ResumeToken;
    /** Will start the changeStream after the specified operationTime. */
    startAtOperationTime?: OperationTime;
    /**
     * The number of documents to return per batch.
     * @see https://www.mongodb.com/docs/manual/reference/command/aggregate
     */
    batchSize?: number;
    /**
     * When enabled, configures the change stream to include extra change events.
     *
     * - createIndexes
     * - dropIndexes
     * - modify
     * - create
     * - shardCollection
     * - reshardCollection
     * - refineCollectionShardKey
     */
    showExpandedEvents?: boolean;
}

/**
 * @public
 * @see https://www.mongodb.com/docs/manual/reference/change-events/refineCollectionShardKey/#mongodb-data-refineCollectionShardKey
 */
export declare interface ChangeStreamRefineCollectionShardKeyDocument extends ChangeStreamDocumentCommon, ChangeStreamDocumentCollectionUUID, ChangeStreamDocumentOperationDescription {
    /** Describes the type of operation represented in this change notification */
    operationType: 'refineCollectionShardKey';
}

/**
 * @public
 * @see https://www.mongodb.com/docs/manual/reference/change-events/#rename-event
 */
export declare interface ChangeStreamRenameDocument extends ChangeStreamDocumentCommon, ChangeStreamDocumentCollectionUUID, ChangeStreamDocumentWallTime {
    /** Describes the type of operation represented in this change notification */
    operationType: 'rename';
    /** The new name for the `ns.coll` collection */
    to: {
        db: string;
        coll: string;
    };
    /** The "from" namespace that the rename occurred on */
    ns: ChangeStreamNameSpace;
}

/**
 * @public
 * @see https://www.mongodb.com/docs/manual/reference/change-events/#replace-event
 */
export declare interface ChangeStreamReplaceDocument<TSchema extends Document = Document> extends ChangeStreamDocumentCommon, ChangeStreamDocumentKey<TSchema>, ChangeStreamDocumentWallTime {
    /** Describes the type of operation represented in this change notification */
    operationType: 'replace';
    /** The fullDocument of a replace event represents the document after the insert of the replacement document */
    fullDocument: TSchema;
    /** Namespace the replace event occurred on */
    ns: ChangeStreamNameSpace;
    /**
     * Contains the pre-image of the modified or deleted document if the
     * pre-image is available for the change event and either 'required' or
     * 'whenAvailable' was specified for the 'fullDocumentBeforeChange' option
     * when creating the change stream. If 'whenAvailable' was specified but the
     * pre-image is unavailable, this will be explicitly set to null.
     */
    fullDocumentBeforeChange?: TSchema;
}

/**
 * @public
 * @see https://www.mongodb.com/docs/manual/reference/change-events/reshardCollection/#mongodb-data-reshardCollection
 */
export declare interface ChangeStreamReshardCollectionDocument extends ChangeStreamDocumentCommon, ChangeStreamDocumentCollectionUUID, ChangeStreamDocumentOperationDescription {
    /** Describes the type of operation represented in this change notification */
    operationType: 'reshardCollection';
}

/**
 * @public
 * @see https://www.mongodb.com/docs/manual/reference/change-events/shardCollection/#mongodb-data-shardCollection
 */
export declare interface ChangeStreamShardCollectionDocument extends ChangeStreamDocumentCommon, ChangeStreamDocumentCollectionUUID, ChangeStreamDocumentOperationDescription, ChangeStreamDocumentWallTime {
    /** Describes the type of operation represented in this change notification */
    operationType: 'shardCollection';
}

/** @public */
export declare interface ChangeStreamSplitEvent {
    /** Which fragment of the change this is. */
    fragment: number;
    /** The total number of fragments. */
    of: number;
}

/**
 * @public
 * @see https://www.mongodb.com/docs/manual/reference/change-events/#update-event
 */
export declare interface ChangeStreamUpdateDocument<TSchema extends Document = Document> extends ChangeStreamDocumentCommon, ChangeStreamDocumentKey<TSchema>, ChangeStreamDocumentCollectionUUID, ChangeStreamDocumentWallTime {
    /** Describes the type of operation represented in this change notification */
    operationType: 'update';
    /**
     * This is only set if `fullDocument` is set to `'updateLookup'`
     * Contains the point-in-time post-image of the modified document if the
     * post-image is available and either 'required' or 'whenAvailable' was
     * specified for the 'fullDocument' option when creating the change stream.
     */
    fullDocument?: TSchema;
    /** Contains a description of updated and removed fields in this operation */
    updateDescription: UpdateDescription<TSchema>;
    /** Namespace the update event occurred on */
    ns: ChangeStreamNameSpace;
    /**
     * Contains the pre-image of the modified or deleted document if the
     * pre-image is available for the change event and either 'required' or
     * 'whenAvailable' was specified for the 'fullDocumentBeforeChange' option
     * when creating the change stream. If 'whenAvailable' was specified but the
     * pre-image is unavailable, this will be explicitly set to null.
     */
    fullDocumentBeforeChange?: TSchema;
}

/** @public */
export declare interface ClientBulkWriteError {
    code: number;
    message: string;
}

/**
 * A mapping of namespace strings to collections schemas.
 * @public
 *
 * @example
 * ```ts
 * type MongoDBSchemas = {
 *   'db.books': Book;
 *   'db.authors': Author;
 * }
 *
 * const model: ClientBulkWriteModel<MongoDBSchemas> = {
 *   namespace: 'db.books'
 *   name: 'insertOne',
 *   document: { title: 'Practical MongoDB Aggregations', authorName: 3 } // error `authorName` cannot be number
 * };
 * ```
 *
 * The type of the `namespace` field narrows other parts of the BulkWriteModel to use the correct schema for type assertions.
 *
 */
export declare type ClientBulkWriteModel<SchemaMap extends Record<string, Document> = Record<string, Document>> = {
    [Namespace in keyof SchemaMap]: AnyClientBulkWriteModel<SchemaMap[Namespace]> & {
        namespace: Namespace;
    };
}[keyof SchemaMap];

/** @public */
export declare interface ClientBulkWriteOptions extends CommandOperationOptions {
    /**
     * If true, when an insert fails, don't execute the remaining writes.
     * If false, continue with remaining inserts when one fails.
     * @defaultValue `true` - inserts are ordered by default
     */
    ordered?: boolean;
    /**
     * Allow driver to bypass schema validation.
     * @defaultValue `false` - documents will be validated by default
     **/
    bypassDocumentValidation?: boolean;
    /** Map of parameter names and values that can be accessed using $$var (requires MongoDB 5.0). */
    let?: Document;
    /**
     * Whether detailed results for each successful operation should be included in the returned
     * BulkWriteResult.
     */
    verboseResults?: boolean;
}

/** @public */
export declare interface ClientBulkWriteResult {
    /**
     * Whether the bulk write was acknowledged.
     */
    readonly acknowledged: boolean;
    /**
     * The total number of documents inserted across all insert operations.
     */
    readonly insertedCount: number;
    /**
     * The total number of documents upserted across all update operations.
     */
    readonly upsertedCount: number;
    /**
     * The total number of documents matched across all update operations.
     */
    readonly matchedCount: number;
    /**
     * The total number of documents modified across all update operations.
     */
    readonly modifiedCount: number;
    /**
     * The total number of documents deleted across all delete operations.
     */
    readonly deletedCount: number;
    /**
     * The results of each individual insert operation that was successfully performed.
     */
    readonly insertResults?: ReadonlyMap<number, ClientInsertOneResult>;
    /**
     * The results of each individual update operation that was successfully performed.
     */
    readonly updateResults?: ReadonlyMap<number, ClientUpdateResult>;
    /**
     * The results of each individual delete operation that was successfully performed.
     */
    readonly deleteResults?: ReadonlyMap<number, ClientDeleteResult>;
}

/** @public */
export declare interface ClientDeleteManyModel<TSchema> extends ClientWriteModel {
    name: 'deleteMany';
    /**
     * The filter used to determine if a document should be deleted.
     * For a deleteMany operation, all matches are removed.
     */
    filter: Filter<TSchema>;
    /** Specifies a collation. */
    collation?: CollationOptions;
    /** The index to use. If specified, then the query system will only consider plans using the hinted index. */
    hint?: Hint;
}

/** @public */
export declare interface ClientDeleteOneModel<TSchema> extends ClientWriteModel {
    name: 'deleteOne';
    /**
     * The filter used to determine if a document should be deleted.
     * For a deleteOne operation, the first match is removed.
     */
    filter: Filter<TSchema>;
    /** Specifies a collation. */
    collation?: CollationOptions;
    /** The index to use. If specified, then the query system will only consider plans using the hinted index. */
    hint?: Hint;
}

/** @public */
export declare interface ClientDeleteResult {
    /**
     * The number of documents that were deleted.
     */
    deletedCount: number;
}

/**
 * @public
 * The public interface for explicit in-use encryption
 */
export declare class ClientEncryption {
    /* Excluded from this release type: _client */
    /* Excluded from this release type: _keyVaultNamespace */
    /* Excluded from this release type: _keyVaultClient */
    /* Excluded from this release type: _proxyOptions */
    /* Excluded from this release type: _tlsOptions */
    /* Excluded from this release type: _kmsProviders */
    /* Excluded from this release type: _timeoutMS */
    /* Excluded from this release type: _mongoCrypt */
    /* Excluded from this release type: _credentialProviders */
    /* Excluded from this release type: getMongoCrypt */
    /**
     * Create a new encryption instance
     *
     * @example
     * ```ts
     * new ClientEncryption(mongoClient, {
     *   keyVaultNamespace: 'client.encryption',
     *   kmsProviders: {
     *     local: {
     *       key: masterKey // The master key used for encryption/decryption. A 96-byte long Buffer
     *     }
     *   }
     * });
     * ```
     *
     * @example
     * ```ts
     * new ClientEncryption(mongoClient, {
     *   keyVaultNamespace: 'client.encryption',
     *   kmsProviders: {
     *     aws: {
     *       accessKeyId: AWS_ACCESS_KEY,
     *       secretAccessKey: AWS_SECRET_KEY
     *     }
     *   }
     * });
     * ```
     */
    constructor(client: MongoClient, options: ClientEncryptionOptions);
    /**
     * Creates a data key used for explicit encryption and inserts it into the key vault namespace
     *
     * @example
     * ```ts
     * // Using async/await to create a local key
     * const dataKeyId = await clientEncryption.createDataKey('local');
     * ```
     *
     * @example
     * ```ts
     * // Using async/await to create an aws key
     * const dataKeyId = await clientEncryption.createDataKey('aws', {
     *   masterKey: {
     *     region: 'us-east-1',
     *     key: 'xxxxxxxxxxxxxx' // CMK ARN here
     *   }
     * });
     * ```
     *
     * @example
     * ```ts
     * // Using async/await to create an aws key with a keyAltName
     * const dataKeyId = await clientEncryption.createDataKey('aws', {
     *   masterKey: {
     *     region: 'us-east-1',
     *     key: 'xxxxxxxxxxxxxx' // CMK ARN here
     *   },
     *   keyAltNames: [ 'mySpecialKey' ]
     * });
     * ```
     */
    createDataKey(provider: ClientEncryptionDataKeyProvider, options?: ClientEncryptionCreateDataKeyProviderOptions): Promise<UUID>;
    /**
     * Searches the keyvault for any data keys matching the provided filter.  If there are matches, rewrapManyDataKey then attempts to re-wrap the data keys using the provided options.
     *
     * If no matches are found, then no bulk write is performed.
     *
     * @example
     * ```ts
     * // rewrapping all data data keys (using a filter that matches all documents)
     * const filter = {};
     *
     * const result = await clientEncryption.rewrapManyDataKey(filter);
     * if (result.bulkWriteResult != null) {
     *  // keys were re-wrapped, results will be available in the bulkWrite object.
     * }
     * ```
     *
     * @example
     * ```ts
     * // attempting to rewrap all data keys with no matches
     * const filter = { _id: new Binary() } // assume _id matches no documents in the database
     * const result = await clientEncryption.rewrapManyDataKey(filter);
     *
     * if (result.bulkWriteResult == null) {
     *  // no keys matched, `bulkWriteResult` does not exist on the result object
     * }
     * ```
     */
    rewrapManyDataKey(filter: Filter<DataKey>, options: ClientEncryptionRewrapManyDataKeyProviderOptions): Promise<{
        bulkWriteResult?: BulkWriteResult;
    }>;
    /**
     * Deletes the key with the provided id from the keyvault, if it exists.
     *
     * @example
     * ```ts
     * // delete a key by _id
     * const id = new Binary(); // id is a bson binary subtype 4 object
     * const { deletedCount } = await clientEncryption.deleteKey(id);
     *
     * if (deletedCount != null && deletedCount > 0) {
     *   // successful deletion
     * }
     * ```
     *
     */
    deleteKey(_id: Binary): Promise<DeleteResult>;
    /**
     * Finds all the keys currently stored in the keyvault.
     *
     * This method will not throw.
     *
     * @returns a FindCursor over all keys in the keyvault.
     * @example
     * ```ts
     * // fetching all keys
     * const keys = await clientEncryption.getKeys().toArray();
     * ```
     */
    getKeys(): FindCursor<DataKey>;
    /**
     * Finds a key in the keyvault with the specified _id.
     *
     * Returns a promise that either resolves to a {@link DataKey} if a document matches the key or null if no documents
     * match the id.  The promise rejects with an error if an error is thrown.
     * @example
     * ```ts
     * // getting a key by id
     * const id = new Binary(); // id is a bson binary subtype 4 object
     * const key = await clientEncryption.getKey(id);
     * if (!key) {
     *  // key is null if there was no matching key
     * }
     * ```
     */
    getKey(_id: Binary): Promise<DataKey | null>;
    /**
     * Finds a key in the keyvault which has the specified keyAltName.
     *
     * @param keyAltName - a keyAltName to search for a key
     * @returns Returns a promise that either resolves to a {@link DataKey} if a document matches the key or null if no documents
     * match the keyAltName.  The promise rejects with an error if an error is thrown.
     * @example
     * ```ts
     * // get a key by alt name
     * const keyAltName = 'keyAltName';
     * const key = await clientEncryption.getKeyByAltName(keyAltName);
     * if (!key) {
     *  // key is null if there is no matching key
     * }
     * ```
     */
    getKeyByAltName(keyAltName: string): Promise<WithId<DataKey> | null>;
    /**
     * Adds a keyAltName to a key identified by the provided _id.
     *
     * This method resolves to/returns the *old* key value (prior to adding the new altKeyName).
     *
     * @param _id - The id of the document to update.
     * @param keyAltName - a keyAltName to search for a key
     * @returns Returns a promise that either resolves to a {@link DataKey} if a document matches the key or null if no documents
     * match the id.  The promise rejects with an error if an error is thrown.
     * @example
     * ```ts
     * // adding an keyAltName to a data key
     * const id = new Binary();  // id is a bson binary subtype 4 object
     * const keyAltName = 'keyAltName';
     * const oldKey = await clientEncryption.addKeyAltName(id, keyAltName);
     * if (!oldKey) {
     *  // null is returned if there is no matching document with an id matching the supplied id
     * }
     * ```
     */
    addKeyAltName(_id: Binary, keyAltName: string): Promise<WithId<DataKey> | null>;
    /**
     * Adds a keyAltName to a key identified by the provided _id.
     *
     * This method resolves to/returns the *old* key value (prior to removing the new altKeyName).
     *
     * If the removed keyAltName is the last keyAltName for that key, the `altKeyNames` property is unset from the document.
     *
     * @param _id - The id of the document to update.
     * @param keyAltName - a keyAltName to search for a key
     * @returns Returns a promise that either resolves to a {@link DataKey} if a document matches the key or null if no documents
     * match the id.  The promise rejects with an error if an error is thrown.
     * @example
     * ```ts
     * // removing a key alt name from a data key
     * const id = new Binary();  // id is a bson binary subtype 4 object
     * const keyAltName = 'keyAltName';
     * const oldKey = await clientEncryption.removeKeyAltName(id, keyAltName);
     *
     * if (!oldKey) {
     *  // null is returned if there is no matching document with an id matching the supplied id
     * }
     * ```
     */
    removeKeyAltName(_id: Binary, keyAltName: string): Promise<WithId<DataKey> | null>;
    /**
     * A convenience method for creating an encrypted collection.
     * This method will create data keys for any encryptedFields that do not have a `keyId` defined
     * and then create a new collection with the full set of encryptedFields.
     *
     * @param db - A Node.js driver Db object with which to create the collection
     * @param name - The name of the collection to be created
     * @param options - Options for createDataKey and for createCollection
     * @returns created collection and generated encryptedFields
     * @throws MongoCryptCreateDataKeyError - If part way through the process a createDataKey invocation fails, an error will be rejected that has the partial `encryptedFields` that were created.
     * @throws MongoCryptCreateEncryptedCollectionError - If creating the collection fails, an error will be rejected that has the entire `encryptedFields` that were created.
     */
    createEncryptedCollection<TSchema extends Document = Document>(db: Db, name: string, options: {
        provider: ClientEncryptionDataKeyProvider;
        createCollectionOptions: Omit<CreateCollectionOptions, 'encryptedFields'> & {
            encryptedFields: Document;
        };
        masterKey?: AWSEncryptionKeyOptions | AzureEncryptionKeyOptions | GCPEncryptionKeyOptions;
    }): Promise<{
        collection: Collection<TSchema>;
        encryptedFields: Document;
    }>;
    /**
     * Explicitly encrypt a provided value. Note that either `options.keyId` or `options.keyAltName` must
     * be specified. Specifying both `options.keyId` and `options.keyAltName` is considered an error.
     *
     * @param value - The value that you wish to serialize. Must be of a type that can be serialized into BSON
     * @param options -
     * @returns a Promise that either resolves with the encrypted value, or rejects with an error.
     *
     * @example
     * ```ts
     * // Encryption with async/await api
     * async function encryptMyData(value) {
     *   const keyId = await clientEncryption.createDataKey('local');
     *   return clientEncryption.encrypt(value, { keyId, algorithm: 'AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic' });
     * }
     * ```
     *
     * @example
     * ```ts
     * // Encryption using a keyAltName
     * async function encryptMyData(value) {
     *   await clientEncryption.createDataKey('local', { keyAltNames: 'mySpecialKey' });
     *   return clientEncryption.encrypt(value, { keyAltName: 'mySpecialKey', algorithm: 'AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic' });
     * }
     * ```
     */
    encrypt(value: unknown, options: ClientEncryptionEncryptOptions): Promise<Binary>;
    /**
     * Encrypts a Match Expression or Aggregate Expression to query a range index.
     *
     * Only supported when queryType is "range" and algorithm is "Range".
     *
     * @param expression - a BSON document of one of the following forms:
     *  1. A Match Expression of this form:
     *      `{$and: [{<field>: {$gt: <value1>}}, {<field>: {$lt: <value2> }}]}`
     *  2. An Aggregate Expression of this form:
     *      `{$and: [{$gt: [<fieldpath>, <value1>]}, {$lt: [<fieldpath>, <value2>]}]}`
     *
     *    `$gt` may also be `$gte`. `$lt` may also be `$lte`.
     *
     * @param options -
     * @returns Returns a Promise that either resolves with the encrypted value or rejects with an error.
     */
    encryptExpression(expression: Document, options: ClientEncryptionEncryptOptions): Promise<Binary>;
    /**
     * Explicitly decrypt a provided encrypted value
     *
     * @param value - An encrypted value
     * @returns a Promise that either resolves with the decrypted value, or rejects with an error
     *
     * @example
     * ```ts
     * // Decrypting value with async/await API
     * async function decryptMyValue(value) {
     *   return clientEncryption.decrypt(value);
     * }
     * ```
     */
    decrypt<T = any>(value: Binary): Promise<T>;
    /* Excluded from this release type: askForKMSCredentials */
    static get libmongocryptVersion(): string;
    /* Excluded from this release type: _encrypt */
}

/**
 * @public
 * Options to provide when creating a new data key.
 */
export declare interface ClientEncryptionCreateDataKeyProviderOptions {
    /**
     * Identifies a new KMS-specific key used to encrypt the new data key
     */
    masterKey?: AWSEncryptionKeyOptions | AzureEncryptionKeyOptions | GCPEncryptionKeyOptions | KMIPEncryptionKeyOptions | undefined;
    /**
     * An optional list of string alternate names used to reference a key.
     * If a key is created with alternate names, then encryption may refer to the key by the unique alternate name instead of by _id.
     */
    keyAltNames?: string[] | undefined;
    /** @experimental */
    keyMaterial?: Buffer | Binary;
    /* Excluded from this release type: timeoutContext */
}

/**
 * @public
 *
 * A data key provider.  Allowed values:
 *
 * - aws, gcp, local, kmip or azure
 * - (`mongodb-client-encryption>=6.0.1` only) a named key, in the form of:
 *    `aws:<name>`, `gcp:<name>`, `local:<name>`, `kmip:<name>`, `azure:<name>`
 *  where `name` is an alphanumeric string, underscores allowed.
 */
export declare type ClientEncryptionDataKeyProvider = keyof KMSProviders;

/**
 * @public
 * Options to provide when encrypting data.
 */
export declare interface ClientEncryptionEncryptOptions {
    /**
     * The algorithm to use for encryption.
     */
    algorithm: 'AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic' | 'AEAD_AES_256_CBC_HMAC_SHA_512-Random' | 'Indexed' | 'Unindexed' | 'Range' | 'TextPreview';
    /**
     * The id of the Binary dataKey to use for encryption
     */
    keyId?: Binary;
    /**
     * A unique string name corresponding to an already existing dataKey.
     */
    keyAltName?: string;
    /** The contention factor. */
    contentionFactor?: bigint | number;
    /**
     * The query type.
     */
    queryType?: 'equality' | 'range' | 'prefixPreview' | 'suffixPreview' | 'substringPreview';
    /** The index options for a Queryable Encryption field supporting "range" queries.*/
    rangeOptions?: RangeOptions;
    /**
     * Options for a Queryable Encryption field supporting text queries.  Only valid when `algorithm` is `TextPreview`.
     *
     * @experimental Public Technical Preview: `textPreview` is an experimental feature and may break at any time.
     */
    textOptions?: TextQueryOptions;
}

/**
 * @public
 * Additional settings to provide when creating a new `ClientEncryption` instance.
 */
export declare interface ClientEncryptionOptions {
    /**
     * The namespace of the key vault, used to store encryption keys
     */
    keyVaultNamespace: string;
    /**
     * A MongoClient used to fetch keys from a key vault. Defaults to client.
     */
    keyVaultClient?: MongoClient | undefined;
    /**
     * Options for specific KMS providers to use
     */
    kmsProviders?: KMSProviders;
    /**
     * Options for user provided custom credential providers.
     */
    credentialProviders?: CredentialProviders;
    /**
     * Options for specifying a Socks5 proxy to use for connecting to the KMS.
     */
    proxyOptions?: ProxyOptions;
    /**
     * TLS options for kms providers to use.
     */
    tlsOptions?: CSFLEKMSTlsOptions;
    /**
     * Sets the expiration time for the DEK in the cache in milliseconds. Defaults to 60000. 0 means no timeout.
     */
    keyExpirationMS?: number;
    /**
     * @experimental
     *
     * The timeout setting to be used for all the operations on ClientEncryption.
     *
     * When provided, `timeoutMS` is used as the timeout for each operation executed on
     * the ClientEncryption object.  For example:
     *
     * ```typescript
     * const clientEncryption = new ClientEncryption(client, {
     *  timeoutMS: 1_000
     *  kmsProviders: { local: { key: '<KEY>' } }
     * });
     *
     * // `1_000` is used as the timeout for createDataKey call
     * await clientEncryption.createDataKey('local');
     * ```
     *
     * If `timeoutMS` is configured on the provided client, the client's `timeoutMS` value
     * will be used unless `timeoutMS` is also provided as a client encryption option.
     *
     * ```typescript
     * const client = new MongoClient('<uri>', { timeoutMS: 2_000 });
     *
     * // timeoutMS is set to 1_000 on clientEncryption
     * const clientEncryption = new ClientEncryption(client, {
     *  timeoutMS: 1_000
     *  kmsProviders: { local: { key: '<KEY>' } }
     * });
     * ```
     */
    timeoutMS?: number;
}

/**
 * @public
 * @experimental
 */
export declare interface ClientEncryptionRewrapManyDataKeyProviderOptions {
    provider: ClientEncryptionDataKeyProvider;
    masterKey?: AWSEncryptionKeyOptions | AzureEncryptionKeyOptions | GCPEncryptionKeyOptions | KMIPEncryptionKeyOptions | undefined;
}

/**
 * @public
 * @experimental
 */
export declare interface ClientEncryptionRewrapManyDataKeyResult {
    /** The result of rewrapping data keys. If unset, no keys matched the filter. */
    bulkWriteResult?: BulkWriteResult;
}

/**
 * @public
 *
 * Socket options to use for KMS requests.
 */
export declare type ClientEncryptionSocketOptions = Pick<MongoClientOptions, 'autoSelectFamily' | 'autoSelectFamilyAttemptTimeout'>;

/**
 * @public
 *
 * TLS options to use when connecting. The spec specifically calls out which insecure
 * tls options are not allowed:
 *
 *  - tlsAllowInvalidCertificates
 *  - tlsAllowInvalidHostnames
 *  - tlsInsecure
 *
 * These options are not included in the type, and are ignored if provided.
 */
export declare type ClientEncryptionTlsOptions = Pick<MongoClientOptions, 'tlsCAFile' | 'tlsCertificateKeyFile' | 'tlsCertificateKeyFilePassword' | 'secureContext'>;

/** @public */
export declare interface ClientInsertOneModel<TSchema> extends ClientWriteModel {
    name: 'insertOne';
    /** The document to insert. */
    document: OptionalId<TSchema>;
}

/** @public */
export declare interface ClientInsertOneResult {
    /**
     * The _id of the inserted document.
     */
    insertedId: any;
}

/**
 * @public
 * @deprecated This interface will be made internal in the next major release.
 * @see https://github.com/mongodb/specifications/blob/master/source/mongodb-handshake/handshake.md#hello-command
 */
export declare interface ClientMetadata {
    driver: {
        name: string;
        version: string;
    };
    os: {
        type: string;
        name?: NodeJS.Platform;
        architecture?: string;
        version?: string;
    };
    platform: string;
    application?: {
        name: string;
    };
    /** FaaS environment information */
    env?: {
        name: 'aws.lambda' | 'gcp.func' | 'azure.func' | 'vercel';
        timeout_sec?: Int32;
        memory_mb?: Int32;
        region?: string;
        url?: string;
    };
}

/**
 * @public
 * @deprecated This interface will be made internal in the next major release.
 */
export declare interface ClientMetadataOptions {
    driverInfo?: {
        name?: string;
        version?: string;
        platform?: string;
    };
    appName?: string;
}

/** @public */
export declare interface ClientReplaceOneModel<TSchema> extends ClientWriteModel {
    name: 'replaceOne';
    /**
     * The filter used to determine if a document should be replaced.
     * For a replaceOne operation, the first match is replaced.
     */
    filter: Filter<TSchema>;
    /** The document with which to replace the matched document. */
    replacement: WithoutId<TSchema>;
    /** Specifies a collation. */
    collation?: CollationOptions;
    /** The index to use. If specified, then the query system will only consider plans using the hinted index. */
    hint?: Hint;
    /** When true, creates a new document if no document matches the query. */
    upsert?: boolean;
    /** Specifies the sort order for the documents matched by the filter. */
    sort?: Sort;
}

/**
 * A class representing a client session on the server
 *
 * NOTE: not meant to be instantiated directly.
 * @public
 */
export declare class ClientSession extends TypedEventEmitter<ClientSessionEvents> implements AsyncDisposable_2 {
    /* Excluded from this release type: client */
    /* Excluded from this release type: sessionPool */
    hasEnded: boolean;
    clientOptions: MongoOptions;
    supports: {
        causalConsistency: boolean;
    };
    clusterTime?: ClusterTime;
    operationTime?: Timestamp;
    explicit: boolean;
    /* Excluded from this release type: owner */
    defaultTransactionOptions: TransactionOptions;
    /** @deprecated - Will be made internal in the next major release */
    transaction: Transaction;
    /* Excluded from this release type: commitAttempted */
    readonly snapshotEnabled: boolean;
    /* Excluded from this release type: _serverSession */
    /* Excluded from this release type: snapshotTime */
    /* Excluded from this release type: pinnedConnection */
    /* Excluded from this release type: txnNumberIncrement */
    /**
     * @experimental
     * Specifies the time an operation in a given `ClientSession` will run until it throws a timeout error
     */
    timeoutMS?: number;
    /* Excluded from this release type: timeoutContext */
    /* Excluded from this release type: __constructor */
    /** The server id associated with this session */
    get id(): ServerSessionId | undefined;
    get serverSession(): ServerSession;
    get loadBalanced(): boolean;
    /* Excluded from this release type: pin */
    /* Excluded from this release type: unpin */
    get isPinned(): boolean;
    /**
     * Frees any client-side resources held by the current session.  If a session is in a transaction,
     * the transaction is aborted.
     *
     * Does not end the session on the server.
     *
     * @param options - Optional settings. Currently reserved for future use
     */
    endSession(options?: EndSessionOptions): Promise<void>;
    /* Excluded from this release type: [Symbol.asyncDispose] */
    /* Excluded from this release type: asyncDispose */
    /**
     * Advances the operationTime for a ClientSession.
     *
     * @param operationTime - the `BSON.Timestamp` of the operation type it is desired to advance to
     */
    advanceOperationTime(operationTime: Timestamp): void;
    /**
     * Advances the clusterTime for a ClientSession to the provided clusterTime of another ClientSession
     *
     * @param clusterTime - the $clusterTime returned by the server from another session in the form of a document containing the `BSON.Timestamp` clusterTime and signature
     */
    advanceClusterTime(clusterTime: ClusterTime): void;
    /**
     * Used to determine if this session equals another
     *
     * @param session - The session to compare to
     */
    equals(session: ClientSession): boolean;
    /**
     * Increment the transaction number on the internal ServerSession
     *
     * @privateRemarks
     * This helper increments a value stored on the client session that will be
     * added to the serverSession's txnNumber upon applying it to a command.
     * This is because the serverSession is lazily acquired after a connection is obtained
     */
    incrementTransactionNumber(): void;
    /** @returns whether this session is currently in a transaction or not */
    inTransaction(): boolean;
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
    startTransaction(options?: TransactionOptions): void;
    /**
     * Commits the currently active transaction in this session.
     *
     * @param options - Optional options, can be used to override `defaultTimeoutMS`.
     */
    commitTransaction(options?: {
        timeoutMS?: number;
    }): Promise<void>;
    /**
     * Aborts the currently active transaction in this session.
     *
     * @param options - Optional options, can be used to override `defaultTimeoutMS`.
     */
    abortTransaction(options?: {
        timeoutMS?: number;
    }): Promise<void>;
    /* Excluded from this release type: abortTransaction */
    /**
     * This is here to ensure that ClientSession is never serialized to BSON.
     */
    toBSON(): never;
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
    withTransaction<T = any>(fn: WithTransactionCallback<T>, options?: TransactionOptions & {
        /**
         * Configures a timeoutMS expiry for the entire withTransactionCallback.
         *
         * @remarks
         * - The remaining timeout will not be applied to callback operations that do not use the ClientSession.
         * - Overriding timeoutMS for operations executed using the explicit session inside the provided callback will result in a client-side error.
         */
        timeoutMS?: number;
    }): Promise<T>;
}

/** @public */
export declare type ClientSessionEvents = {
    ended(session: ClientSession): void;
};

/** @public */
export declare interface ClientSessionOptions {
    /** Whether causal consistency should be enabled on this session */
    causalConsistency?: boolean;
    /** Whether all read operations should be read from the same snapshot for this session (NOTE: not compatible with `causalConsistency=true`) */
    snapshot?: boolean;
    /** The default TransactionOptions to use for transactions started on this session. */
    defaultTransactionOptions?: TransactionOptions;
    /**
     * @public
     * @experimental
     * An overriding timeoutMS value to use for a client-side timeout.
     * If not provided the session uses the timeoutMS specified on the MongoClient.
     */
    defaultTimeoutMS?: number;
    /* Excluded from this release type: owner */
    /* Excluded from this release type: explicit */
    /* Excluded from this release type: initialClusterTime */
}

/** @public */
export declare interface ClientUpdateManyModel<TSchema> extends ClientWriteModel {
    name: 'updateMany';
    /**
     * The filter used to determine if a document should be updated.
     * For an updateMany operation, all matches are updated.
     */
    filter: Filter<TSchema>;
    /**
     * The modifications to apply. The value can be either:
     * UpdateFilter<Document> - A document that contains update operator expressions,
     * Document[] - an aggregation pipeline.
     */
    update: UpdateFilter<TSchema> | Document[];
    /** A set of filters specifying to which array elements an update should apply. */
    arrayFilters?: Document[];
    /** Specifies a collation. */
    collation?: CollationOptions;
    /** The index to use. If specified, then the query system will only consider plans using the hinted index. */
    hint?: Hint;
    /** When true, creates a new document if no document matches the query. */
    upsert?: boolean;
}

/** @public */
export declare interface ClientUpdateOneModel<TSchema> extends ClientWriteModel {
    name: 'updateOne';
    /**
     * The filter used to determine if a document should be updated.
     * For an updateOne operation, the first match is updated.
     */
    filter: Filter<TSchema>;
    /**
     * The modifications to apply. The value can be either:
     * UpdateFilter<Document> - A document that contains update operator expressions,
     * Document[] - an aggregation pipeline.
     */
    update: UpdateFilter<TSchema> | Document[];
    /** A set of filters specifying to which array elements an update should apply. */
    arrayFilters?: Document[];
    /** Specifies a collation. */
    collation?: CollationOptions;
    /** The index to use. If specified, then the query system will only consider plans using the hinted index. */
    hint?: Hint;
    /** When true, creates a new document if no document matches the query. */
    upsert?: boolean;
    /** Specifies the sort order for the documents matched by the filter. */
    sort?: Sort;
}

/** @public */
export declare interface ClientUpdateResult {
    /**
     * The number of documents that matched the filter.
     */
    matchedCount: number;
    /**
     * The number of documents that were modified.
     */
    modifiedCount: number;
    /**
     * The _id field of the upserted document if an upsert occurred.
     *
     * It MUST be possible to discern between a BSON Null upserted ID value and this field being
     * unset. If necessary, drivers MAY add a didUpsert boolean field to differentiate between
     * these two cases.
     */
    upsertedId?: any;
    /**
     * Determines if the upsert did include an _id, which includes the case of the _id being null.
     */
    didUpsert: boolean;
}

/** @public */
export declare interface ClientWriteModel {
    /**
     * The namespace for the write.
     *
     * A namespace is a combination of the database name and the name of the collection: `<database-name>.<collection>`.
     * All documents belong to a namespace.
     *
     * @see https://www.mongodb.com/docs/manual/reference/limits/#std-label-faq-dev-namespace
     */
    namespace: string;
}

/**
 * @public
 * @deprecated This interface is deprecated and will be removed in a future release as it is not used
 * in the driver
 */
export declare interface CloseOptions {
    force?: boolean;
}

/** @public
 * Configuration options for clustered collections
 * @see https://www.mongodb.com/docs/manual/core/clustered-collections/
 */
export declare interface ClusteredCollectionOptions extends Document {
    name?: string;
    key: Document;
    unique: boolean;
}

/**
 * @public
 * Gossiped in component for the cluster time tracking the state of user databases
 * across the cluster. It may optionally include a signature identifying the process that
 * generated such a value.
 */
export declare interface ClusterTime {
    clusterTime: Timestamp;
    /** Used to validate the identity of a request or response's ClusterTime. */
    signature?: {
        hash: Binary;
        keyId: Long;
    };
}

export { Code }

/** @public */
export declare interface CollationOptions {
    locale: string;
    caseLevel?: boolean;
    caseFirst?: string;
    strength?: number;
    numericOrdering?: boolean;
    alternate?: string;
    maxVariable?: string;
    backwards?: boolean;
    normalization?: boolean;
}

/**
 * The **Collection** class is an internal class that embodies a MongoDB collection
 * allowing for insert/find/update/delete and other command operation on that MongoDB collection.
 *
 * **COLLECTION Cannot directly be instantiated**
 * @public
 *
 * @example
 * ```ts
 * import { MongoClient } from 'mongodb';
 *
 * interface Pet {
 *   name: string;
 *   kind: 'dog' | 'cat' | 'fish';
 * }
 *
 * const client = new MongoClient('mongodb://localhost:27017');
 * const pets = client.db().collection<Pet>('pets');
 *
 * const petCursor = pets.find();
 *
 * for await (const pet of petCursor) {
 *   console.log(`${pet.name} is a ${pet.kind}!`);
 * }
 * ```
 */
export declare class Collection<TSchema extends Document = Document> {
    /* Excluded from this release type: s */
    /* Excluded from this release type: client */
    /**
     * Get the database object for the collection.
     */
    readonly db: Db;
    /* Excluded from this release type: __constructor */
    /**
     * The name of the database this collection belongs to
     */
    get dbName(): string;
    /**
     * The name of this collection
     */
    get collectionName(): string;
    /**
     * The namespace of this collection, in the format `${this.dbName}.${this.collectionName}`
     */
    get namespace(): string;
    /* Excluded from this release type: fullNamespace */
    /**
     * The current readConcern of the collection. If not explicitly defined for
     * this collection, will be inherited from the parent DB
     */
    get readConcern(): ReadConcern | undefined;
    /**
     * The current readPreference of the collection. If not explicitly defined for
     * this collection, will be inherited from the parent DB
     */
    get readPreference(): ReadPreference | undefined;
    get bsonOptions(): BSONSerializeOptions;
    /**
     * The current writeConcern of the collection. If not explicitly defined for
     * this collection, will be inherited from the parent DB
     */
    get writeConcern(): WriteConcern | undefined;
    /** The current index hint for the collection */
    get hint(): Hint | undefined;
    set hint(v: Hint | undefined);
    get timeoutMS(): number | undefined;
    /**
     * Inserts a single document into MongoDB. If documents passed in do not contain the **_id** field,
     * one will be added to each of the documents missing it by the driver, mutating the document. This behavior
     * can be overridden by setting the **forceServerObjectId** flag.
     *
     * @param doc - The document to insert
     * @param options - Optional settings for the command
     */
    insertOne(doc: OptionalUnlessRequiredId<TSchema>, options?: InsertOneOptions): Promise<InsertOneResult<TSchema>>;
    /**
     * Inserts an array of documents into MongoDB. If documents passed in do not contain the **_id** field,
     * one will be added to each of the documents missing it by the driver, mutating the document. This behavior
     * can be overridden by setting the **forceServerObjectId** flag.
     *
     * @param docs - The documents to insert
     * @param options - Optional settings for the command
     */
    insertMany(docs: ReadonlyArray<OptionalUnlessRequiredId<TSchema>>, options?: BulkWriteOptions): Promise<InsertManyResult<TSchema>>;
    /**
     * Perform a bulkWrite operation without a fluent API
     *
     * Legal operation types are
     * - `insertOne`
     * - `replaceOne`
     * - `updateOne`
     * - `updateMany`
     * - `deleteOne`
     * - `deleteMany`
     *
     * If documents passed in do not contain the **_id** field,
     * one will be added to each of the documents missing it by the driver, mutating the document. This behavior
     * can be overridden by setting the **forceServerObjectId** flag.
     *
     * @param operations - Bulk operations to perform
     * @param options - Optional settings for the command
     * @throws MongoDriverError if operations is not an array
     */
    bulkWrite(operations: ReadonlyArray<AnyBulkWriteOperation<TSchema>>, options?: BulkWriteOptions): Promise<BulkWriteResult>;
    /**
     * Update a single document in a collection
     *
     * The value of `update` can be either:
     * - UpdateFilter<TSchema> - A document that contains update operator expressions,
     * - Document[] - an aggregation pipeline.
     *
     * @param filter - The filter used to select the document to update
     * @param update - The modifications to apply
     * @param options - Optional settings for the command
     */
    updateOne(filter: Filter<TSchema>, update: UpdateFilter<TSchema> | Document[], options?: UpdateOptions & {
        sort?: Sort;
    }): Promise<UpdateResult<TSchema>>;
    /**
     * Replace a document in a collection with another document
     *
     * @param filter - The filter used to select the document to replace
     * @param replacement - The Document that replaces the matching document
     * @param options - Optional settings for the command
     */
    replaceOne(filter: Filter<TSchema>, replacement: WithoutId<TSchema>, options?: ReplaceOptions): Promise<UpdateResult<TSchema>>;
    /**
     * Update multiple documents in a collection
     *
     * The value of `update` can be either:
     * - UpdateFilter<TSchema> - A document that contains update operator expressions,
     * - Document[] - an aggregation pipeline.
     *
     * @param filter - The filter used to select the document to update
     * @param update - The modifications to apply
     * @param options - Optional settings for the command
     */
    updateMany(filter: Filter<TSchema>, update: UpdateFilter<TSchema> | Document[], options?: UpdateOptions): Promise<UpdateResult<TSchema>>;
    /**
     * Delete a document from a collection
     *
     * @param filter - The filter used to select the document to remove
     * @param options - Optional settings for the command
     */
    deleteOne(filter?: Filter<TSchema>, options?: DeleteOptions): Promise<DeleteResult>;
    /**
     * Delete multiple documents from a collection
     *
     * @param filter - The filter used to select the documents to remove
     * @param options - Optional settings for the command
     */
    deleteMany(filter?: Filter<TSchema>, options?: DeleteOptions): Promise<DeleteResult>;
    /**
     * Rename the collection.
     *
     * @remarks
     * This operation does not inherit options from the Db or MongoClient.
     *
     * @param newName - New name of of the collection.
     * @param options - Optional settings for the command
     */
    rename(newName: string, options?: RenameOptions): Promise<Collection>;
    /**
     * Drop the collection from the database, removing it permanently. New accesses will create a new collection.
     *
     * @param options - Optional settings for the command
     */
    drop(options?: DropCollectionOptions): Promise<boolean>;
    /**
     * Fetches the first document that matches the filter
     *
     * @param filter - Query for find Operation
     * @param options - Optional settings for the command
     */
    findOne(): Promise<WithId<TSchema> | null>;
    findOne(filter: Filter<TSchema>): Promise<WithId<TSchema> | null>;
    findOne(filter: Filter<TSchema>, options: Omit<FindOneOptions, 'timeoutMode'> & Abortable): Promise<WithId<TSchema> | null>;
    findOne<T = TSchema>(): Promise<T | null>;
    findOne<T = TSchema>(filter: Filter<TSchema>): Promise<T | null>;
    findOne<T = TSchema>(filter: Filter<TSchema>, options?: Omit<FindOneOptions, 'timeoutMode'> & Abortable): Promise<T | null>;
    /**
     * Creates a cursor for a filter that can be used to iterate over results from MongoDB
     *
     * @param filter - The filter predicate. If unspecified, then all documents in the collection will match the predicate
     */
    find(): FindCursor<WithId<TSchema>>;
    find(filter: Filter<TSchema>, options?: FindOptions & Abortable): FindCursor<WithId<TSchema>>;
    find<T extends Document>(filter: Filter<TSchema>, options?: FindOptions & Abortable): FindCursor<T>;
    /**
     * Returns the options of the collection.
     *
     * @param options - Optional settings for the command
     */
    options(options?: OperationOptions): Promise<Document>;
    /**
     * Returns if the collection is a capped collection
     *
     * @param options - Optional settings for the command
     */
    isCapped(options?: OperationOptions): Promise<boolean>;
    /**
     * Creates an index on the db and collection collection.
     *
     * @param indexSpec - The field name or index specification to create an index for
     * @param options - Optional settings for the command
     *
     * @example
     * ```ts
     * const collection = client.db('foo').collection('bar');
     *
     * await collection.createIndex({ a: 1, b: -1 });
     *
     * // Alternate syntax for { c: 1, d: -1 } that ensures order of indexes
     * await collection.createIndex([ [c, 1], [d, -1] ]);
     *
     * // Equivalent to { e: 1 }
     * await collection.createIndex('e');
     *
     * // Equivalent to { f: 1, g: 1 }
     * await collection.createIndex(['f', 'g'])
     *
     * // Equivalent to { h: 1, i: -1 }
     * await collection.createIndex([ { h: 1 }, { i: -1 } ]);
     *
     * // Equivalent to { j: 1, k: -1, l: 2d }
     * await collection.createIndex(['j', ['k', -1], { l: '2d' }])
     * ```
     */
    createIndex(indexSpec: IndexSpecification, options?: CreateIndexesOptions): Promise<string>;
    /**
     * Creates multiple indexes in the collection, this method is only supported for
     * MongoDB 2.6 or higher. Earlier version of MongoDB will throw a command not supported
     * error.
     *
     * **Note**: Unlike {@link Collection#createIndex| createIndex}, this function takes in raw index specifications.
     * Index specifications are defined {@link https://www.mongodb.com/docs/manual/reference/command/createIndexes/| here}.
     *
     * @param indexSpecs - An array of index specifications to be created
     * @param options - Optional settings for the command
     *
     * @example
     * ```ts
     * const collection = client.db('foo').collection('bar');
     * await collection.createIndexes([
     *   // Simple index on field fizz
     *   {
     *     key: { fizz: 1 },
     *   }
     *   // wildcard index
     *   {
     *     key: { '$**': 1 }
     *   },
     *   // named index on darmok and jalad
     *   {
     *     key: { darmok: 1, jalad: -1 }
     *     name: 'tanagra'
     *   }
     * ]);
     * ```
     */
    createIndexes(indexSpecs: IndexDescription[], options?: CreateIndexesOptions): Promise<string[]>;
    /**
     * Drops an index from this collection.
     *
     * @param indexName - Name of the index to drop.
     * @param options - Optional settings for the command
     */
    dropIndex(indexName: string, options?: DropIndexesOptions): Promise<Document>;
    /**
     * Drops all indexes from this collection.
     *
     * @param options - Optional settings for the command
     */
    dropIndexes(options?: DropIndexesOptions): Promise<boolean>;
    /**
     * Get the list of all indexes information for the collection.
     *
     * @param options - Optional settings for the command
     */
    listIndexes(options?: ListIndexesOptions): ListIndexesCursor;
    /**
     * Checks if one or more indexes exist on the collection, fails on first non-existing index
     *
     * @param indexes - One or more index names to check.
     * @param options - Optional settings for the command
     */
    indexExists(indexes: string | string[], options?: ListIndexesOptions): Promise<boolean>;
    /**
     * Retrieves this collections index info.
     *
     * @param options - Optional settings for the command
     */
    indexInformation(options: IndexInformationOptions & {
        full: true;
    }): Promise<IndexDescriptionInfo[]>;
    indexInformation(options: IndexInformationOptions & {
        full?: false;
    }): Promise<IndexDescriptionCompact>;
    indexInformation(options: IndexInformationOptions): Promise<IndexDescriptionCompact | IndexDescriptionInfo[]>;
    indexInformation(): Promise<IndexDescriptionCompact>;
    /**
     * Gets an estimate of the count of documents in a collection using collection metadata.
     * This will always run a count command on all server versions.
     *
     * due to an oversight in versions 5.0.0-5.0.8 of MongoDB, the count command,
     * which estimatedDocumentCount uses in its implementation, was not included in v1 of
     * the Stable API, and so users of the Stable API with estimatedDocumentCount are
     * recommended to upgrade their server version to 5.0.9+ or set apiStrict: false to avoid
     * encountering errors.
     *
     * @see {@link https://www.mongodb.com/docs/manual/reference/command/count/#behavior|Count: Behavior}
     * @param options - Optional settings for the command
     */
    estimatedDocumentCount(options?: EstimatedDocumentCountOptions): Promise<number>;
    /**
     * Gets the number of documents matching the filter.
     * For a fast count of the total documents in a collection see {@link Collection#estimatedDocumentCount| estimatedDocumentCount}.
     *
     * Due to countDocuments using the $match aggregation pipeline stage, certain query operators cannot be used in countDocuments. This includes the $where and $near query operators, among others. Details can be found in the documentation for the $match aggregation pipeline stage.
     *
     * **Note**: When migrating from {@link Collection#count| count} to {@link Collection#countDocuments| countDocuments}
     * the following query operators must be replaced:
     *
     * | Operator | Replacement |
     * | -------- | ----------- |
     * | `$where`   | [`$expr`][1] |
     * | `$near`    | [`$geoWithin`][2] with [`$center`][3] |
     * | `$nearSphere` | [`$geoWithin`][2] with [`$centerSphere`][4] |
     *
     * [1]: https://www.mongodb.com/docs/manual/reference/operator/query/expr/
     * [2]: https://www.mongodb.com/docs/manual/reference/operator/query/geoWithin/
     * [3]: https://www.mongodb.com/docs/manual/reference/operator/query/center/#op._S_center
     * [4]: https://www.mongodb.com/docs/manual/reference/operator/query/centerSphere/#op._S_centerSphere
     *
     * @param filter - The filter for the count
     * @param options - Optional settings for the command
     *
     * @see https://www.mongodb.com/docs/manual/reference/operator/query/expr/
     * @see https://www.mongodb.com/docs/manual/reference/operator/query/geoWithin/
     * @see https://www.mongodb.com/docs/manual/reference/operator/query/center/#op._S_center
     * @see https://www.mongodb.com/docs/manual/reference/operator/query/centerSphere/#op._S_centerSphere
     */
    countDocuments(filter?: Filter<TSchema>, options?: CountDocumentsOptions & Abortable): Promise<number>;
    /**
     * The distinct command returns a list of distinct values for the given key across a collection.
     *
     * @param key - Field of the document to find distinct values for
     * @param filter - The filter for filtering the set of documents to which we apply the distinct filter.
     * @param options - Optional settings for the command
     */
    distinct<Key extends keyof WithId<TSchema>>(key: Key): Promise<Array<Flatten<WithId<TSchema>[Key]>>>;
    distinct<Key extends keyof WithId<TSchema>>(key: Key, filter: Filter<TSchema>): Promise<Array<Flatten<WithId<TSchema>[Key]>>>;
    distinct<Key extends keyof WithId<TSchema>>(key: Key, filter: Filter<TSchema>, options: DistinctOptions): Promise<Array<Flatten<WithId<TSchema>[Key]>>>;
    distinct<Key extends keyof WithId<TSchema>>(key: Key, filter: Filter<TSchema>, options: DistinctOptions & {
        explain: ExplainVerbosityLike | ExplainCommandOptions;
    }): Promise<Document>;
    distinct(key: string): Promise<any[]>;
    distinct(key: string, filter: Filter<TSchema>): Promise<any[]>;
    distinct(key: string, filter: Filter<TSchema>, options: DistinctOptions): Promise<any[]>;
    /**
     * Retrieve all the indexes on the collection.
     *
     * @param options - Optional settings for the command
     */
    indexes(options: IndexInformationOptions & {
        full?: true;
    }): Promise<IndexDescriptionInfo[]>;
    indexes(options: IndexInformationOptions & {
        full: false;
    }): Promise<IndexDescriptionCompact>;
    indexes(options: IndexInformationOptions): Promise<IndexDescriptionCompact | IndexDescriptionInfo[]>;
    indexes(options?: ListIndexesOptions): Promise<IndexDescriptionInfo[]>;
    /**
     * Find a document and delete it in one atomic operation. Requires a write lock for the duration of the operation.
     *
     * @param filter - The filter used to select the document to remove
     * @param options - Optional settings for the command
     */
    findOneAndDelete(filter: Filter<TSchema>, options: FindOneAndDeleteOptions & {
        includeResultMetadata: true;
    }): Promise<ModifyResult<TSchema>>;
    findOneAndDelete(filter: Filter<TSchema>, options: FindOneAndDeleteOptions & {
        includeResultMetadata: false;
    }): Promise<WithId<TSchema> | null>;
    findOneAndDelete(filter: Filter<TSchema>, options: FindOneAndDeleteOptions): Promise<WithId<TSchema> | null>;
    findOneAndDelete(filter: Filter<TSchema>): Promise<WithId<TSchema> | null>;
    /**
     * Find a document and replace it in one atomic operation. Requires a write lock for the duration of the operation.
     *
     * @param filter - The filter used to select the document to replace
     * @param replacement - The Document that replaces the matching document
     * @param options - Optional settings for the command
     */
    findOneAndReplace(filter: Filter<TSchema>, replacement: WithoutId<TSchema>, options: FindOneAndReplaceOptions & {
        includeResultMetadata: true;
    }): Promise<ModifyResult<TSchema>>;
    findOneAndReplace(filter: Filter<TSchema>, replacement: WithoutId<TSchema>, options: FindOneAndReplaceOptions & {
        includeResultMetadata: false;
    }): Promise<WithId<TSchema> | null>;
    findOneAndReplace(filter: Filter<TSchema>, replacement: WithoutId<TSchema>, options: FindOneAndReplaceOptions): Promise<WithId<TSchema> | null>;
    findOneAndReplace(filter: Filter<TSchema>, replacement: WithoutId<TSchema>): Promise<WithId<TSchema> | null>;
    /**
     * Find a document and update it in one atomic operation. Requires a write lock for the duration of the operation.
     *
     * The value of `update` can be either:
     * - UpdateFilter<TSchema> - A document that contains update operator expressions,
     * - Document[] - an aggregation pipeline consisting of the following stages:
     *   - $addFields and its alias $set
     *   - $project and its alias $unset
     *   - $replaceRoot and its alias $replaceWith.
     * See the [findAndModify command documentation](https://www.mongodb.com/docs/manual/reference/command/findAndModify) for details.
     *
     * @param filter - The filter used to select the document to update
     * @param update - The modifications to apply
     * @param options - Optional settings for the command
     */
    findOneAndUpdate(filter: Filter<TSchema>, update: UpdateFilter<TSchema> | Document[], options: FindOneAndUpdateOptions & {
        includeResultMetadata: true;
    }): Promise<ModifyResult<TSchema>>;
    findOneAndUpdate(filter: Filter<TSchema>, update: UpdateFilter<TSchema> | Document[], options: FindOneAndUpdateOptions & {
        includeResultMetadata: false;
    }): Promise<WithId<TSchema> | null>;
    findOneAndUpdate(filter: Filter<TSchema>, update: UpdateFilter<TSchema> | Document[], options: FindOneAndUpdateOptions): Promise<WithId<TSchema> | null>;
    findOneAndUpdate(filter: Filter<TSchema>, update: UpdateFilter<TSchema> | Document[]): Promise<WithId<TSchema> | null>;
    /**
     * Execute an aggregation framework pipeline against the collection, needs MongoDB \>= 2.2
     *
     * @param pipeline - An array of aggregation pipelines to execute
     * @param options - Optional settings for the command
     */
    aggregate<T extends Document = Document>(pipeline?: Document[], options?: AggregateOptions & Abortable): AggregationCursor<T>;
    /**
     * Create a new Change Stream, watching for new changes (insertions, updates, replacements, deletions, and invalidations) in this collection.
     *
     * @remarks
     * watch() accepts two generic arguments for distinct use cases:
     * - The first is to override the schema that may be defined for this specific collection
     * - The second is to override the shape of the change stream document entirely, if it is not provided the type will default to ChangeStreamDocument of the first argument
     * @example
     * By just providing the first argument I can type the change to be `ChangeStreamDocument<{ _id: number }>`
     * ```ts
     * collection.watch<{ _id: number }>()
     *   .on('change', change => console.log(change._id.toFixed(4)));
     * ```
     *
     * @example
     * Passing a second argument provides a way to reflect the type changes caused by an advanced pipeline.
     * Here, we are using a pipeline to have MongoDB filter for insert changes only and add a comment.
     * No need start from scratch on the ChangeStreamInsertDocument type!
     * By using an intersection we can save time and ensure defaults remain the same type!
     * ```ts
     * collection
     *   .watch<Schema, ChangeStreamInsertDocument<Schema> & { comment: string }>([
     *     { $addFields: { comment: 'big changes' } },
     *     { $match: { operationType: 'insert' } }
     *   ])
     *   .on('change', change => {
     *     change.comment.startsWith('big');
     *     change.operationType === 'insert';
     *     // No need to narrow in code because the generics did that for us!
     *     expectType<Schema>(change.fullDocument);
     *   });
     * ```
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
     *
     * @param pipeline - An array of {@link https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/|aggregation pipeline stages} through which to pass change stream documents. This allows for filtering (using $match) and manipulating the change stream documents.
     * @param options - Optional settings for the command
     * @typeParam TLocal - Type of the data being detected by the change stream
     * @typeParam TChange - Type of the whole change stream document emitted
     */
    watch<TLocal extends Document = TSchema, TChange extends Document = ChangeStreamDocument<TLocal>>(pipeline?: Document[], options?: ChangeStreamOptions): ChangeStream<TLocal, TChange>;
    /**
     * Initiate an Out of order batch write operation. All operations will be buffered into insert/update/remove commands executed out of order.
     *
     * @throws MongoNotConnectedError
     * @remarks
     * **NOTE:** MongoClient must be connected prior to calling this method due to a known limitation in this legacy implementation.
     * However, `collection.bulkWrite()` provides an equivalent API that does not require prior connecting.
     */
    initializeUnorderedBulkOp(options?: BulkWriteOptions): UnorderedBulkOperation;
    /**
     * Initiate an In order bulk write operation. Operations will be serially executed in the order they are added, creating a new operation for each switch in types.
     *
     * @throws MongoNotConnectedError
     * @remarks
     * **NOTE:** MongoClient must be connected prior to calling this method due to a known limitation in this legacy implementation.
     * However, `collection.bulkWrite()` provides an equivalent API that does not require prior connecting.
     */
    initializeOrderedBulkOp(options?: BulkWriteOptions): OrderedBulkOperation;
    /**
     * An estimated count of matching documents in the db to a filter.
     *
     * **NOTE:** This method has been deprecated, since it does not provide an accurate count of the documents
     * in a collection. To obtain an accurate count of documents in the collection, use {@link Collection#countDocuments| countDocuments}.
     * To obtain an estimated count of all documents in the collection, use {@link Collection#estimatedDocumentCount| estimatedDocumentCount}.
     *
     * @deprecated use {@link Collection#countDocuments| countDocuments} or {@link Collection#estimatedDocumentCount| estimatedDocumentCount} instead
     *
     * @param filter - The filter for the count.
     * @param options - Optional settings for the command
     */
    count(filter?: Filter<TSchema>, options?: CountOptions): Promise<number>;
    /**
     * Returns all search indexes for the current collection.
     *
     * @param options - The options for the list indexes operation.
     *
     * @remarks Only available when used against a 7.0+ Atlas cluster.
     */
    listSearchIndexes(options?: ListSearchIndexesOptions): ListSearchIndexesCursor;
    /**
     * Returns all search indexes for the current collection.
     *
     * @param name - The name of the index to search for.  Only indexes with matching index names will be returned.
     * @param options - The options for the list indexes operation.
     *
     * @remarks Only available when used against a 7.0+ Atlas cluster.
     */
    listSearchIndexes(name: string, options?: ListSearchIndexesOptions): ListSearchIndexesCursor;
    /**
     * Creates a single search index for the collection.
     *
     * @param description - The index description for the new search index.
     * @returns A promise that resolves to the name of the new search index.
     *
     * @remarks Only available when used against a 7.0+ Atlas cluster.
     */
    createSearchIndex(description: SearchIndexDescription): Promise<string>;
    /**
     * Creates multiple search indexes for the current collection.
     *
     * @param descriptions - An array of `SearchIndexDescription`s for the new search indexes.
     * @returns A promise that resolves to an array of the newly created search index names.
     *
     * @remarks Only available when used against a 7.0+ Atlas cluster.
     * @returns
     */
    createSearchIndexes(descriptions: SearchIndexDescription[]): Promise<string[]>;
    /**
     * Deletes a search index by index name.
     *
     * @param name - The name of the search index to be deleted.
     *
     * @remarks Only available when used against a 7.0+ Atlas cluster.
     */
    dropSearchIndex(name: string): Promise<void>;
    /**
     * Updates a search index by replacing the existing index definition with the provided definition.
     *
     * @param name - The name of the search index to update.
     * @param definition - The new search index definition.
     *
     * @remarks Only available when used against a 7.0+ Atlas cluster.
     */
    updateSearchIndex(name: string, definition: Document): Promise<void>;
}

/** @public */
export declare interface CollectionInfo extends Document {
    name: string;
    type?: string;
    options?: Document;
    info?: {
        readOnly?: false;
        uuid?: Binary;
    };
    idIndex?: Document;
}

/** @public */
export declare interface CollectionOptions extends BSONSerializeOptions, WriteConcernOptions {
    /** Specify a read concern for the collection. (only MongoDB 3.2 or higher supported) */
    readConcern?: ReadConcernLike;
    /** The preferred read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST). */
    readPreference?: ReadPreferenceLike;
    /**
     * @experimental
     * Specifies the time an operation will run until it throws a timeout error
     */
    timeoutMS?: number;
}

/* Excluded from this release type: CollectionPrivate */

/* Excluded from this release type: COMMAND_FAILED */

/* Excluded from this release type: COMMAND_STARTED */

/* Excluded from this release type: COMMAND_SUCCEEDED */

/**
 * An event indicating the failure of a given command
 * @public
 * @category Event
 */
export declare class CommandFailedEvent {
    address: string;
    /** Driver generated connection id */
    connectionId?: string | number;
    /**
     * Server generated connection id
     * Distinct from the connection id and is returned by the hello or legacy hello response as "connectionId" from the server on 4.2+.
     */
    serverConnectionId: bigint | null;
    requestId: number;
    duration: number;
    commandName: string;
    failure: Error;
    serviceId?: ObjectId;
    databaseName: string;
    /* Excluded from this release type: name */
    /* Excluded from this release type: __constructor */
    get hasServiceId(): boolean;
}

/* Excluded from this release type: CommandOperation */

/** @public */
export declare interface CommandOperationOptions extends OperationOptions, WriteConcernOptions, ExplainOptions {
    /** Specify a read concern and level for the collection. (only MongoDB 3.2 or higher supported) */
    readConcern?: ReadConcernLike;
    /** Collation */
    collation?: CollationOptions;
    /**
     * maxTimeMS is a server-side time limit in milliseconds for processing an operation.
     */
    maxTimeMS?: number;
    /**
     * Comment to apply to the operation.
     *
     * In server versions pre-4.4, 'comment' must be string.  A server
     * error will be thrown if any other type is provided.
     *
     * In server versions 4.4 and above, 'comment' can be any valid BSON type.
     */
    comment?: unknown;
    /**
     * @deprecated
     * This option is deprecated and will be removed in a future release as it is not used
     * in the driver. Use MongoClientOptions or connection string parameters instead.
     * */
    retryWrites?: boolean;
    dbName?: string;
    authdb?: string;
    /**
     * @deprecated
     * This option is deprecated and will be removed in an upcoming major version.
     */
    noResponse?: boolean;
    /* Excluded from this release type: rawData */
}

/* Excluded from this release type: CommandOptions */

/**
 * An event indicating the start of a given command
 * @public
 * @category Event
 */
export declare class CommandStartedEvent {
    commandObj?: Document;
    requestId: number;
    databaseName: string;
    commandName: string;
    command: Document;
    address: string;
    /** Driver generated connection id */
    connectionId?: string | number;
    /**
     * Server generated connection id
     * Distinct from the connection id and is returned by the hello or legacy hello response as "connectionId"
     * from the server on 4.2+.
     */
    serverConnectionId: bigint | null;
    serviceId?: ObjectId;
    /* Excluded from this release type: name */
    /* Excluded from this release type: __constructor */
    get hasServiceId(): boolean;
}

/**
 * An event indicating the success of a given command
 * @public
 * @category Event
 */
export declare class CommandSucceededEvent {
    address: string;
    /** Driver generated connection id */
    connectionId?: string | number;
    /**
     * Server generated connection id
     * Distinct from the connection id and is returned by the hello or legacy hello response as "connectionId" from the server on 4.2+.
     */
    serverConnectionId: bigint | null;
    requestId: number;
    duration: number;
    commandName: string;
    reply: unknown;
    serviceId?: ObjectId;
    databaseName: string;
    /* Excluded from this release type: name */
    /* Excluded from this release type: __constructor */
    get hasServiceId(): boolean;
}

/** @public */
export declare type CommonEvents = 'newListener' | 'removeListener';

/** @public */
export declare const Compressor: Readonly<{
    readonly none: 0;
    readonly snappy: 1;
    readonly zlib: 2;
    readonly zstd: 3;
}>;

/** @public */
export declare type Compressor = (typeof Compressor)[CompressorName];

/** @public */
export declare type CompressorName = keyof typeof Compressor;

/** @public */
export declare type Condition<T> = AlternativeType<T> | FilterOperators<AlternativeType<T>>;

/* Excluded from this release type: configureExplicitResourceManagement */

/* Excluded from this release type: Connection */

/* Excluded from this release type: CONNECTION_CHECK_OUT_FAILED */

/* Excluded from this release type: CONNECTION_CHECK_OUT_STARTED */

/* Excluded from this release type: CONNECTION_CHECKED_IN */

/* Excluded from this release type: CONNECTION_CHECKED_OUT */

/* Excluded from this release type: CONNECTION_CLOSED */

/* Excluded from this release type: CONNECTION_CREATED */

/* Excluded from this release type: CONNECTION_POOL_CLEARED */

/* Excluded from this release type: CONNECTION_POOL_CLOSED */

/* Excluded from this release type: CONNECTION_POOL_CREATED */

/* Excluded from this release type: CONNECTION_POOL_READY */

/* Excluded from this release type: CONNECTION_READY */

/**
 * An event published when a connection is checked into the connection pool
 * @public
 * @category Event
 */
export declare class ConnectionCheckedInEvent extends ConnectionPoolMonitoringEvent {
    /** The id of the connection */
    connectionId: number | '<monitor>';
    /* Excluded from this release type: name */
    /* Excluded from this release type: __constructor */
}

/**
 * An event published when a connection is checked out of the connection pool
 * @public
 * @category Event
 */
export declare class ConnectionCheckedOutEvent extends ConnectionPoolMonitoringEvent {
    /** The id of the connection */
    connectionId: number | '<monitor>';
    /* Excluded from this release type: name */
    /**
     * The time it took to check out the connection.
     * More specifically, the time elapsed between
     * emitting a `ConnectionCheckOutStartedEvent`
     * and emitting this event as part of the same checking out.
     *
     */
    durationMS: number;
    /* Excluded from this release type: __constructor */
}

/**
 * An event published when a request to check a connection out fails
 * @public
 * @category Event
 */
export declare class ConnectionCheckOutFailedEvent extends ConnectionPoolMonitoringEvent {
    /** The reason the attempt to check out failed */
    reason: string;
    /* Excluded from this release type: error */
    /* Excluded from this release type: name */
    /**
     * The time it took to check out the connection.
     * More specifically, the time elapsed between
     * emitting a `ConnectionCheckOutStartedEvent`
     * and emitting this event as part of the same check out.
     */
    durationMS: number;
    /* Excluded from this release type: __constructor */
}

/**
 * An event published when a request to check a connection out begins
 * @public
 * @category Event
 */
export declare class ConnectionCheckOutStartedEvent extends ConnectionPoolMonitoringEvent {
    /* Excluded from this release type: name */
    /* Excluded from this release type: __constructor */
}

/**
 * An event published when a connection is closed
 * @public
 * @category Event
 */
export declare class ConnectionClosedEvent extends ConnectionPoolMonitoringEvent {
    /** The id of the connection */
    connectionId: number | '<monitor>';
    /** The reason the connection was closed */
    reason: string;
    serviceId?: ObjectId;
    /* Excluded from this release type: name */
    /* Excluded from this release type: error */
    /* Excluded from this release type: __constructor */
}

/**
 * An event published when a connection pool creates a new connection
 * @public
 * @category Event
 */
export declare class ConnectionCreatedEvent extends ConnectionPoolMonitoringEvent {
    /** A monotonically increasing, per-pool id for the newly created connection */
    connectionId: number | '<monitor>';
    /* Excluded from this release type: name */
    /* Excluded from this release type: __constructor */
}

/** @public */
export declare type ConnectionEvents = {
    commandStarted(event: CommandStartedEvent): void;
    commandSucceeded(event: CommandSucceededEvent): void;
    commandFailed(event: CommandFailedEvent): void;
    clusterTimeReceived(clusterTime: Document): void;
    close(): void;
    pinned(pinType: string): void;
    unpinned(pinType: string): void;
};

/** @public */
export declare interface ConnectionOptions extends SupportedNodeConnectionOptions, StreamDescriptionOptions, ProxyOptions {
    id: number | '<monitor>';
    generation: number;
    hostAddress: HostAddress;
    /* Excluded from this release type: autoEncrypter */
    serverApi?: ServerApi;
    monitorCommands: boolean;
    /* Excluded from this release type: connectionType */
    credentials?: MongoCredentials;
    /* Excluded from this release type: authProviders */
    connectTimeoutMS?: number;
    tls: boolean;
    noDelay?: boolean;
    socketTimeoutMS?: number;
    /** @deprecated Will be removed in the next major version */
    cancellationToken?: CancellationToken;
    metadata: ClientMetadata;
    /* Excluded from this release type: extendedMetadata */
    /* Excluded from this release type: mongoLogger */
}

/* Excluded from this release type: ConnectionPool */

/**
 * An event published when a connection pool is cleared
 * @public
 * @category Event
 */
export declare class ConnectionPoolClearedEvent extends ConnectionPoolMonitoringEvent {
    /* Excluded from this release type: serviceId */
    interruptInUseConnections?: boolean;
    /* Excluded from this release type: name */
    /* Excluded from this release type: __constructor */
}

/**
 * An event published when a connection pool is closed
 * @public
 * @category Event
 */
export declare class ConnectionPoolClosedEvent extends ConnectionPoolMonitoringEvent {
    /* Excluded from this release type: name */
    /* Excluded from this release type: __constructor */
}

/**
 * An event published when a connection pool is created
 * @public
 * @category Event
 */
export declare class ConnectionPoolCreatedEvent extends ConnectionPoolMonitoringEvent {
    /** The options used to create this connection pool */
    options: Pick<ConnectionPoolOptions, 'maxPoolSize' | 'minPoolSize' | 'maxConnecting' | 'maxIdleTimeMS' | 'waitQueueTimeoutMS'>;
    /* Excluded from this release type: name */
    /* Excluded from this release type: __constructor */
}

/** @public */
export declare type ConnectionPoolEvents = {
    connectionPoolCreated(event: ConnectionPoolCreatedEvent): void;
    connectionPoolReady(event: ConnectionPoolReadyEvent): void;
    connectionPoolClosed(event: ConnectionPoolClosedEvent): void;
    connectionPoolCleared(event: ConnectionPoolClearedEvent): void;
    connectionCreated(event: ConnectionCreatedEvent): void;
    connectionReady(event: ConnectionReadyEvent): void;
    connectionClosed(event: ConnectionClosedEvent): void;
    connectionCheckOutStarted(event: ConnectionCheckOutStartedEvent): void;
    connectionCheckOutFailed(event: ConnectionCheckOutFailedEvent): void;
    connectionCheckedOut(event: ConnectionCheckedOutEvent): void;
    connectionCheckedIn(event: ConnectionCheckedInEvent): void;
} & Omit<ConnectionEvents, 'close' | 'message'>;

/* Excluded from this release type: ConnectionPoolMetrics */

/**
 * The base export class for all monitoring events published from the connection pool
 * @public
 * @category Event
 */
export declare abstract class ConnectionPoolMonitoringEvent {
    /** A timestamp when the event was created  */
    time: Date;
    /** The address (host/port pair) of the pool */
    address: string;
    /* Excluded from this release type: name */
    /* Excluded from this release type: __constructor */
}

/** @public */
export declare interface ConnectionPoolOptions extends Omit<ConnectionOptions, 'id' | 'generation'> {
    /** The maximum number of connections that may be associated with a pool at a given time. This includes in use and available connections. */
    maxPoolSize: number;
    /** The minimum number of connections that MUST exist at any moment in a single connection pool. */
    minPoolSize: number;
    /** The maximum number of connections that may be in the process of being established concurrently by the connection pool. */
    maxConnecting: number;
    /** The maximum amount of time a connection should remain idle in the connection pool before being marked idle. */
    maxIdleTimeMS: number;
    /** The maximum amount of time operation execution should wait for a connection to become available. The default is 0 which means there is no limit. */
    waitQueueTimeoutMS: number;
    /** If we are in load balancer mode. */
    loadBalanced: boolean;
    /* Excluded from this release type: minPoolSizeCheckFrequencyMS */
}

/**
 * An event published when a connection pool is ready
 * @public
 * @category Event
 */
export declare class ConnectionPoolReadyEvent extends ConnectionPoolMonitoringEvent {
    /* Excluded from this release type: name */
    /* Excluded from this release type: __constructor */
}

/**
 * An event published when a connection is ready for use
 * @public
 * @category Event
 */
export declare class ConnectionReadyEvent extends ConnectionPoolMonitoringEvent {
    /** The id of the connection */
    connectionId: number | '<monitor>';
    /**
     * The time it took to establish the connection.
     * In accordance with the definition of establishment of a connection
     * specified by `ConnectionPoolOptions.maxConnecting`,
     * it is the time elapsed between emitting a `ConnectionCreatedEvent`
     * and emitting this event as part of the same checking out.
     *
     * Naturally, when establishing a connection is part of checking out,
     * this duration is not greater than
     * `ConnectionCheckedOutEvent.duration`.
     */
    durationMS: number;
    /* Excluded from this release type: name */
    /* Excluded from this release type: __constructor */
}

/** @public */
export declare interface ConnectOptions {
    readPreference?: ReadPreference;
}

/** @public */
export declare interface CountDocumentsOptions extends AggregateOptions {
    /** The number of documents to skip. */
    skip?: number;
    /** The maximum amount of documents to consider. */
    limit?: number;
}

/** @public */
export declare interface CountOptions extends CommandOperationOptions {
    /** The number of documents to skip. */
    skip?: number;
    /** The maximum amounts to count before aborting. */
    limit?: number;
    /**
     * Number of milliseconds to wait before aborting the query.
     */
    maxTimeMS?: number;
    /** An index name hint for the query. */
    hint?: string | Document;
}

/** @public */
export declare interface CreateCollectionOptions extends Omit<CommandOperationOptions, 'rawData'> {
    /** Create a capped collection */
    capped?: boolean;
    /** @deprecated Create an index on the _id field of the document. This option is deprecated in MongoDB 3.2+ and will be removed once no longer supported by the server. */
    autoIndexId?: boolean;
    /** The size of the capped collection in bytes */
    size?: number;
    /** The maximum number of documents in the capped collection */
    max?: number;
    /** Available for the MMAPv1 storage engine only to set the usePowerOf2Sizes and the noPadding flag */
    flags?: number;
    /** Allows users to specify configuration to the storage engine on a per-collection basis when creating a collection */
    storageEngine?: Document;
    /** Allows users to specify validation rules or expressions for the collection. For more information, see Document Validation */
    validator?: Document;
    /** Determines how strictly MongoDB applies the validation rules to existing documents during an update */
    validationLevel?: string;
    /** Determines whether to error on invalid documents or just warn about the violations but allow invalid documents to be inserted */
    validationAction?: string;
    /** Allows users to specify a default configuration for indexes when creating a collection */
    indexOptionDefaults?: Document;
    /** The name of the source collection or view from which to create the view. The name is not the full namespace of the collection or view (i.e., does not include the database name and implies the same database as the view to create) */
    viewOn?: string;
    /** An array that consists of the aggregation pipeline stage. Creates the view by applying the specified pipeline to the viewOn collection or view */
    pipeline?: Document[];
    /** A primary key factory function for generation of custom _id keys. */
    pkFactory?: PkFactory;
    /** A document specifying configuration options for timeseries collections. */
    timeseries?: TimeSeriesCollectionOptions;
    /** A document specifying configuration options for clustered collections. For MongoDB 5.3 and above. */
    clusteredIndex?: ClusteredCollectionOptions;
    /** The number of seconds after which a document in a timeseries or clustered collection expires. */
    expireAfterSeconds?: number;
    /** @experimental */
    encryptedFields?: Document;
    /**
     * If set, enables pre-update and post-update document events to be included for any
     * change streams that listen on this collection.
     */
    changeStreamPreAndPostImages?: {
        enabled: boolean;
    };
}

/** @public */
export declare interface CreateIndexesOptions extends Omit<CommandOperationOptions, 'writeConcern'> {
    /** Creates the index in the background, yielding whenever possible. */
    background?: boolean;
    /** Creates an unique index. */
    unique?: boolean;
    /** Override the autogenerated index name (useful if the resulting name is larger than 128 bytes) */
    name?: string;
    /** Creates a partial index based on the given filter object (MongoDB 3.2 or higher) */
    partialFilterExpression?: Document;
    /** Creates a sparse index. */
    sparse?: boolean;
    /** Allows you to expire data on indexes applied to a data (MongoDB 2.2 or higher) */
    expireAfterSeconds?: number;
    /** Allows users to configure the storage engine on a per-index basis when creating an index. (MongoDB 3.0 or higher) */
    storageEngine?: Document;
    /** (MongoDB 4.4. or higher) Specifies how many data-bearing members of a replica set, including the primary, must complete the index builds successfully before the primary marks the indexes as ready. This option accepts the same values for the "w" field in a write concern plus "votingMembers", which indicates all voting data-bearing nodes. */
    commitQuorum?: number | string;
    /** Specifies the index version number, either 0 or 1. */
    version?: number;
    weights?: Document;
    default_language?: string;
    language_override?: string;
    textIndexVersion?: number;
    '2dsphereIndexVersion'?: number;
    bits?: number;
    /** For geospatial indexes set the lower bound for the co-ordinates. */
    min?: number;
    /** For geospatial indexes set the high bound for the co-ordinates. */
    max?: number;
    bucketSize?: number;
    wildcardProjection?: Document;
    /** Specifies that the index should exist on the target collection but should not be used by the query planner when executing operations. (MongoDB 4.4 or higher) */
    hidden?: boolean;
}

/**
 * @public
 * Configuration options for custom credential providers for KMS requests.
 */
export declare interface CredentialProviders {
    aws?: AWSCredentialProvider;
}

/** @public */
export declare type CSFLEKMSTlsOptions = {
    aws?: ClientEncryptionTlsOptions;
    gcp?: ClientEncryptionTlsOptions;
    kmip?: ClientEncryptionTlsOptions;
    local?: ClientEncryptionTlsOptions;
    azure?: ClientEncryptionTlsOptions;
    [key: string]: ClientEncryptionTlsOptions | undefined;
};

/* Excluded from this release type: CSOTTimeoutContext */

/* Excluded from this release type: CSOTTimeoutContextOptions */

/** @public */
export declare const CURSOR_FLAGS: readonly ["tailable", "oplogReplay", "noCursorTimeout", "awaitData", "exhaust", "partial"];

/** @public */
export declare type CursorFlag = (typeof CURSOR_FLAGS)[number];

/* Excluded from this release type: CursorResponse */

/**
 * @public
 * @deprecated Will be removed in the next major version
 */
export declare interface CursorStreamOptions {
    /** @deprecated Will be removed in the next major version */
    transform?(this: void, doc: Document): Document;
}

/* Excluded from this release type: CursorTimeoutContext */

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
export declare const CursorTimeoutMode: Readonly<{
    readonly ITERATION: "iteration";
    readonly LIFETIME: "cursorLifetime";
}>;

/**
 * @public
 * @experimental
 */
export declare type CursorTimeoutMode = (typeof CursorTimeoutMode)[keyof typeof CursorTimeoutMode];

/**
 * @public
 * The schema for a DataKey in the key vault collection.
 */
export declare interface DataKey {
    _id: UUID;
    version?: number;
    keyAltNames?: string[];
    keyMaterial: Binary;
    creationDate: Date;
    updateDate: Date;
    status: number;
    masterKey: Document;
}

/**
 * The **Db** class is a class that represents a MongoDB Database.
 * @public
 *
 * @example
 * ```ts
 * import { MongoClient } from 'mongodb';
 *
 * interface Pet {
 *   name: string;
 *   kind: 'dog' | 'cat' | 'fish';
 * }
 *
 * const client = new MongoClient('mongodb://localhost:27017');
 * const db = client.db();
 *
 * // Create a collection that validates our union
 * await db.createCollection<Pet>('pets', {
 *   validator: { $expr: { $in: ['$kind', ['dog', 'cat', 'fish']] } }
 * })
 * ```
 */
export declare class Db {
    /* Excluded from this release type: s */
    /**
     * Gets the MongoClient associated with the Db.
     * @public
     */
    readonly client: MongoClient;
    static SYSTEM_NAMESPACE_COLLECTION: string;
    static SYSTEM_INDEX_COLLECTION: string;
    static SYSTEM_PROFILE_COLLECTION: string;
    static SYSTEM_USER_COLLECTION: string;
    static SYSTEM_COMMAND_COLLECTION: string;
    static SYSTEM_JS_COLLECTION: string;
    /**
     * Creates a new Db instance.
     *
     * Db name cannot contain a dot, the server may apply more restrictions when an operation is run.
     *
     * @param client - The MongoClient for the database.
     * @param databaseName - The name of the database this instance represents.
     * @param options - Optional settings for Db construction.
     */
    constructor(client: MongoClient, databaseName: string, options?: DbOptions);
    get databaseName(): string;
    get options(): DbOptions | undefined;
    /**
     * Check if a secondary can be used (because the read preference is *not* set to primary)
     */
    get secondaryOk(): boolean;
    get readConcern(): ReadConcern | undefined;
    /**
     * The current readPreference of the Db. If not explicitly defined for
     * this Db, will be inherited from the parent MongoClient
     */
    get readPreference(): ReadPreference;
    get bsonOptions(): BSONSerializeOptions;
    get writeConcern(): WriteConcern | undefined;
    get namespace(): string;
    get timeoutMS(): number | undefined;
    /**
     * Create a new collection on a server with the specified options. Use this to create capped collections.
     * More information about command options available at https://www.mongodb.com/docs/manual/reference/command/create/
     *
     * Collection namespace validation is performed server-side.
     *
     * @param name - The name of the collection to create
     * @param options - Optional settings for the command
     */
    createCollection<TSchema extends Document = Document>(name: string, options?: CreateCollectionOptions): Promise<Collection<TSchema>>;
    /**
     * Execute a command
     *
     * @remarks
     * This command does not inherit options from the MongoClient.
     *
     * The driver will ensure the following fields are attached to the command sent to the server:
     * - `lsid` - sourced from an implicit session or options.session
     * - `$readPreference` - defaults to primary or can be configured by options.readPreference
     * - `$db` - sourced from the name of this database
     *
     * If the client has a serverApi setting:
     * - `apiVersion`
     * - `apiStrict`
     * - `apiDeprecationErrors`
     *
     * When in a transaction:
     * - `readConcern` - sourced from readConcern set on the TransactionOptions
     * - `writeConcern` - sourced from writeConcern set on the TransactionOptions
     *
     * Attaching any of the above fields to the command will have no effect as the driver will overwrite the value.
     *
     * @param command - The command to run
     * @param options - Optional settings for the command
     */
    command(command: Document, options?: RunCommandOptions & Abortable): Promise<Document>;
    /**
     * Execute an aggregation framework pipeline against the database.
     *
     * @param pipeline - An array of aggregation stages to be executed
     * @param options - Optional settings for the command
     */
    aggregate<T extends Document = Document>(pipeline?: Document[], options?: AggregateOptions): AggregationCursor<T>;
    /** Return the Admin db instance */
    admin(): Admin;
    /**
     * Returns a reference to a MongoDB Collection. If it does not exist it will be created implicitly.
     *
     * Collection namespace validation is performed server-side.
     *
     * @param name - the collection name we wish to access.
     * @returns return the new Collection instance
     */
    collection<TSchema extends Document = Document>(name: string, options?: CollectionOptions): Collection<TSchema>;
    /**
     * Get all the db statistics.
     *
     * @param options - Optional settings for the command
     */
    stats(options?: DbStatsOptions): Promise<Document>;
    /**
     * List all collections of this database with optional filter
     *
     * @param filter - Query to filter collections by
     * @param options - Optional settings for the command
     */
    listCollections(filter: Document, options: Exclude<ListCollectionsOptions, 'nameOnly'> & {
        nameOnly: true;
    } & Abortable): ListCollectionsCursor<Pick<CollectionInfo, 'name' | 'type'>>;
    listCollections(filter: Document, options: Exclude<ListCollectionsOptions, 'nameOnly'> & {
        nameOnly: false;
    } & Abortable): ListCollectionsCursor<CollectionInfo>;
    listCollections<T extends Pick<CollectionInfo, 'name' | 'type'> | CollectionInfo = Pick<CollectionInfo, 'name' | 'type'> | CollectionInfo>(filter?: Document, options?: ListCollectionsOptions & Abortable): ListCollectionsCursor<T>;
    /**
     * Rename a collection.
     *
     * @remarks
     * This operation does not inherit options from the MongoClient.
     *
     * @param fromCollection - Name of current collection to rename
     * @param toCollection - New name of of the collection
     * @param options - Optional settings for the command
     */
    renameCollection<TSchema extends Document = Document>(fromCollection: string, toCollection: string, options?: RenameOptions): Promise<Collection<TSchema>>;
    /**
     * Drop a collection from the database, removing it permanently. New accesses will create a new collection.
     *
     * @param name - Name of collection to drop
     * @param options - Optional settings for the command
     */
    dropCollection(name: string, options?: DropCollectionOptions): Promise<boolean>;
    /**
     * Drop a database, removing it permanently from the server.
     *
     * @param options - Optional settings for the command
     */
    dropDatabase(options?: DropDatabaseOptions): Promise<boolean>;
    /**
     * Fetch all collections for the current db.
     *
     * @param options - Optional settings for the command
     */
    collections(options?: ListCollectionsOptions): Promise<Collection[]>;
    /**
     * Creates an index on the db and collection.
     *
     * @param name - Name of the collection to create the index on.
     * @param indexSpec - Specify the field to index, or an index specification
     * @param options - Optional settings for the command
     */
    createIndex(name: string, indexSpec: IndexSpecification, options?: CreateIndexesOptions): Promise<string>;
    /**
     * Remove a user from a database
     *
     * @param username - The username to remove
     * @param options - Optional settings for the command
     */
    removeUser(username: string, options?: RemoveUserOptions): Promise<boolean>;
    /**
     * Set the current profiling level of MongoDB
     *
     * @param level - The new profiling level (off, slow_only, all).
     * @param options - Optional settings for the command
     */
    setProfilingLevel(level: ProfilingLevel, options?: SetProfilingLevelOptions): Promise<ProfilingLevel>;
    /**
     * Retrieve the current profiling Level for MongoDB
     *
     * @param options - Optional settings for the command
     */
    profilingLevel(options?: ProfilingLevelOptions): Promise<string>;
    /**
     * Retrieves this collections index info.
     *
     * @param name - The name of the collection.
     * @param options - Optional settings for the command
     */
    indexInformation(name: string, options: IndexInformationOptions & {
        full: true;
    }): Promise<IndexDescriptionInfo[]>;
    indexInformation(name: string, options: IndexInformationOptions & {
        full?: false;
    }): Promise<IndexDescriptionCompact>;
    indexInformation(name: string, options: IndexInformationOptions): Promise<IndexDescriptionCompact | IndexDescriptionInfo[]>;
    indexInformation(name: string): Promise<IndexDescriptionCompact>;
    /**
     * Create a new Change Stream, watching for new changes (insertions, updates,
     * replacements, deletions, and invalidations) in this database. Will ignore all
     * changes to system collections.
     *
     * @remarks
     * watch() accepts two generic arguments for distinct use cases:
     * - The first is to provide the schema that may be defined for all the collections within this database
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
    watch<TSchema extends Document = Document, TChange extends Document = ChangeStreamDocument<TSchema>>(pipeline?: Document[], options?: ChangeStreamOptions): ChangeStream<TSchema, TChange>;
    /**
     * A low level cursor API providing basic driver functionality:
     * - ClientSession management
     * - ReadPreference for server selection
     * - Running getMores automatically when a local batch is exhausted
     *
     * @param command - The command that will start a cursor on the server.
     * @param options - Configurations for running the command, bson options will apply to getMores
     */
    runCursorCommand(command: Document, options?: RunCursorCommandOptions): RunCommandCursor;
}

/* Excluded from this release type: DB_AGGREGATE_COLLECTION */

/** @public */
export declare interface DbOptions extends BSONSerializeOptions, WriteConcernOptions {
    /** If the database authentication is dependent on another databaseName. */
    authSource?: string;
    /** Force server to assign _id values instead of driver. */
    forceServerObjectId?: boolean;
    /** The preferred read preference (ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST). */
    readPreference?: ReadPreferenceLike;
    /** A primary key factory object for generation of custom _id keys. */
    pkFactory?: PkFactory;
    /** Specify a read concern for the collection. (only MongoDB 3.2 or higher supported) */
    readConcern?: ReadConcern;
    /** Should retry failed writes */
    retryWrites?: boolean;
    /**
     * @experimental
     * Specifies the time an operation will run until it throws a timeout error
     */
    timeoutMS?: number;
}

/* Excluded from this release type: DbPrivate */
export { DBRef }

/** @public */
export declare interface DbStatsOptions extends Omit<CommandOperationOptions, 'rawData'> {
    /** Divide the returned sizes by scale value. */
    scale?: number;
}

export { Decimal128 }

/** @public */
export declare interface DeleteManyModel<TSchema extends Document = Document> {
    /** The filter to limit the deleted documents. */
    filter: Filter<TSchema>;
    /** Specifies a collation. */
    collation?: CollationOptions;
    /** The index to use. If specified, then the query system will only consider plans using the hinted index. */
    hint?: Hint;
}

/** @public */
export declare interface DeleteOneModel<TSchema extends Document = Document> {
    /** The filter to limit the deleted documents. */
    filter: Filter<TSchema>;
    /** Specifies a collation. */
    collation?: CollationOptions;
    /** The index to use. If specified, then the query system will only consider plans using the hinted index. */
    hint?: Hint;
}

/** @public */
export declare interface DeleteOptions extends CommandOperationOptions, WriteConcernOptions {
    /** If true, when an insert fails, don't execute the remaining writes. If false, continue with remaining inserts when one fails. */
    ordered?: boolean;
    /** Specifies the collation to use for the operation */
    collation?: CollationOptions;
    /** Specify that the update query should only consider plans using the hinted index */
    hint?: string | Document;
    /** Map of parameter names and values that can be accessed using $$var (requires MongoDB 5.0). */
    let?: Document;
}

/** @public */
export declare interface DeleteResult {
    /** Indicates whether this write result was acknowledged. If not, then all other members of this result will be undefined. */
    acknowledged: boolean;
    /** The number of documents that were deleted */
    deletedCount: number;
}

/** @public */
export declare interface DeleteStatement {
    /** The query that matches documents to delete. */
    q: Document;
    /** The number of matching documents to delete. */
    limit: number;
    /** Specifies the collation to use for the operation. */
    collation?: CollationOptions;
    /** A document or string that specifies the index to use to support the query predicate. */
    hint?: Hint;
}

export { deserialize }

/** @public */
export declare type DistinctOptions = CommandOperationOptions & {
    /**
     * @sinceServerVersion 7.1
     *
     * The index to use. Specify either the index name as a string or the index key pattern.
     * If specified, then the query system will only consider plans using the hinted index.
     *
     * If provided as a string, `hint` must be index name for an index on the collection.
     * If provided as an object, `hint` must be an index description for an index defined on the collection.
     *
     * See https://www.mongodb.com/docs/manual/reference/command/distinct/#command-fields.
     */
    hint?: Document | string;
};

export { Document }

export { Double }

/** @public */
export declare interface DriverInfo {
    name?: string;
    version?: string;
    platform?: string;
}

/** @public */
export declare interface DropCollectionOptions extends Omit<CommandOperationOptions, 'rawData'> {
    /** @experimental */
    encryptedFields?: Document;
}

/** @public */
export declare type DropDatabaseOptions = CommandOperationOptions;

/** @public */
export declare type DropIndexesOptions = CommandOperationOptions;

/* Excluded from this release type: Encrypter */

/* Excluded from this release type: EncrypterOptions */

/** @public */
export declare interface EndSessionOptions {
    /* Excluded from this release type: error */
    force?: boolean;
    forceClear?: boolean;
    /** Specifies the time an operation will run until it throws a timeout error */
    timeoutMS?: number;
}

/** TypeScript Omit (Exclude to be specific) does not work for objects with an "any" indexed type, and breaks discriminated unions @public */
export declare type EnhancedOmit<TRecordOrUnion, KeyUnion> = string extends keyof TRecordOrUnion ? TRecordOrUnion : TRecordOrUnion extends any ? Pick<TRecordOrUnion, Exclude<keyof TRecordOrUnion, KeyUnion>> : never;

/** @public */
export declare interface ErrorDescription extends Document {
    message?: string;
    errmsg?: string;
    $err?: string;
    errorLabels?: string[];
    errInfo?: Document;
}

/** @public */
export declare interface EstimatedDocumentCountOptions extends CommandOperationOptions {
    /**
     * The maximum amount of time to allow the operation to run.
     *
     * This option is sent only if the caller explicitly provides a value. The default is to not send a value.
     */
    maxTimeMS?: number;
}

/** @public */
export declare type EventEmitterWithState = {
    /* Excluded from this release type: stateChanged */
};

/**
 * Event description type
 * @public
 */
export declare type EventsDescription = Record<string, GenericListener>;

/* Excluded from this release type: Explain */

/**
 * @public
 *
 * A base class for any cursors that have `explain()` methods.
 */
export declare abstract class ExplainableCursor<TSchema> extends AbstractCursor<TSchema> {
    /** Execute the explain for the cursor */
    abstract explain(): Promise<Document>;
    abstract explain(verbosity: ExplainVerbosityLike | ExplainCommandOptions): Promise<Document>;
    abstract explain(options: {
        timeoutMS?: number;
    }): Promise<Document>;
    abstract explain(verbosity: ExplainVerbosityLike | ExplainCommandOptions, options: {
        timeoutMS?: number;
    }): Promise<Document>;
    abstract explain(verbosity?: ExplainVerbosityLike | ExplainCommandOptions | {
        timeoutMS?: number;
    }, options?: {
        timeoutMS?: number;
    }): Promise<Document>;
    protected resolveExplainTimeoutOptions(verbosity?: ExplainVerbosityLike | ExplainCommandOptions | {
        timeoutMS?: number;
    }, options?: {
        timeoutMS?: number;
    }): {
        timeout?: {
            timeoutMS?: number;
        };
        explain?: ExplainVerbosityLike | ExplainCommandOptions;
    };
}

/** @public */
export declare interface ExplainCommandOptions {
    /** The explain verbosity for the command. */
    verbosity: ExplainVerbosity;
    /** The maxTimeMS setting for the command. */
    maxTimeMS?: number;
}

/**
 * @public
 *
 * When set, this configures an explain command.  Valid values are boolean (for legacy compatibility,
 * see {@link ExplainVerbosityLike}), a string containing the explain verbosity, or an object containing the verbosity and
 * an optional maxTimeMS.
 *
 * Examples of valid usage:
 *
 * ```typescript
 * collection.find({ name: 'john doe' }, { explain: true });
 * collection.find({ name: 'john doe' }, { explain: false });
 * collection.find({ name: 'john doe' }, { explain: 'queryPlanner' });
 * collection.find({ name: 'john doe' }, { explain: { verbosity: 'queryPlanner' } });
 * ```
 *
 * maxTimeMS can be configured to limit the amount of time the server
 * spends executing an explain by providing an object:
 *
 * ```typescript
 * // limits the `explain` command to no more than 2 seconds
 * collection.find({ name: 'john doe' }, {
 *   explain:  {
 *    verbosity: 'queryPlanner',
 *    maxTimeMS: 2000
 *  }
 * });
 * ```
 */
export declare interface ExplainOptions {
    /** Specifies the verbosity mode for the explain output. */
    explain?: ExplainVerbosityLike | ExplainCommandOptions;
}

/** @public */
export declare const ExplainVerbosity: Readonly<{
    readonly queryPlanner: "queryPlanner";
    readonly queryPlannerExtended: "queryPlannerExtended";
    readonly executionStats: "executionStats";
    readonly allPlansExecution: "allPlansExecution";
}>;

/** @public */
export declare type ExplainVerbosity = string;

/**
 * For backwards compatibility, true is interpreted as "allPlansExecution"
 * and false as "queryPlanner".
 * @public
 */
export declare type ExplainVerbosityLike = ExplainVerbosity | boolean;

/** A MongoDB filter can be some portion of the schema or a set of operators @public */
export declare type Filter<TSchema> = {
    [P in keyof WithId<TSchema>]?: Condition<WithId<TSchema>[P]>;
} & RootFilterOperators<WithId<TSchema>>;

/** @public */
export declare type FilterOperations<T> = T extends Record<string, any> ? {
    [key in keyof T]?: FilterOperators<T[key]>;
} : FilterOperators<T>;

/** @public */
export declare interface FilterOperators<TValue> extends NonObjectIdLikeDocument {
    $eq?: TValue;
    $gt?: TValue;
    $gte?: TValue;
    $in?: ReadonlyArray<TValue>;
    $lt?: TValue;
    $lte?: TValue;
    $ne?: TValue;
    $nin?: ReadonlyArray<TValue>;
    $not?: TValue extends string ? FilterOperators<TValue> | RegExp : FilterOperators<TValue>;
    /**
     * When `true`, `$exists` matches the documents that contain the field,
     * including documents where the field value is null.
     */
    $exists?: boolean;
    $type?: BSONType | BSONTypeAlias;
    $expr?: Record<string, any>;
    $jsonSchema?: Record<string, any>;
    $mod?: TValue extends number ? [number, number] : never;
    $regex?: TValue extends string ? RegExp | BSONRegExp | string : never;
    $options?: TValue extends string ? string : never;
    $geoIntersects?: {
        $geometry: Document;
    };
    $geoWithin?: Document;
    $near?: Document;
    $nearSphere?: Document;
    $maxDistance?: number;
    $all?: ReadonlyArray<any>;
    $elemMatch?: Document;
    $size?: TValue extends ReadonlyArray<any> ? number : never;
    $bitsAllClear?: BitwiseFilter;
    $bitsAllSet?: BitwiseFilter;
    $bitsAnyClear?: BitwiseFilter;
    $bitsAnySet?: BitwiseFilter;
    $rand?: Record<string, never>;
}

/** @public */
export declare class FindCursor<TSchema = any> extends ExplainableCursor<TSchema> {
    /* Excluded from this release type: cursorFilter */
    /* Excluded from this release type: numReturned */
    /* Excluded from this release type: findOptions */
    /* Excluded from this release type: __constructor */
    clone(): FindCursor<TSchema>;
    map<T>(transform: (doc: TSchema) => T): FindCursor<T>;
    /* Excluded from this release type: _initialize */
    /* Excluded from this release type: getMore */
    /**
     * Get the count of documents for this cursor
     * @deprecated Use `collection.estimatedDocumentCount` or `collection.countDocuments` instead
     */
    count(options?: CountOptions): Promise<number>;
    /** Execute the explain for the cursor */
    explain(): Promise<Document>;
    explain(verbosity: ExplainVerbosityLike | ExplainCommandOptions): Promise<Document>;
    explain(options: {
        timeoutMS?: number;
    }): Promise<Document>;
    explain(verbosity: ExplainVerbosityLike | ExplainCommandOptions, options: {
        timeoutMS?: number;
    }): Promise<Document>;
    /** Set the cursor query */
    filter(filter: Document): this;
    /**
     * Set the cursor hint
     *
     * @param hint - If specified, then the query system will only consider plans using the hinted index.
     */
    hint(hint: Hint): this;
    /**
     * Set the cursor min
     *
     * @param min - Specify a $min value to specify the inclusive lower bound for a specific index in order to constrain the results of find(). The $min specifies the lower bound for all keys of a specific index in order.
     */
    min(min: Document): this;
    /**
     * Set the cursor max
     *
     * @param max - Specify a $max value to specify the exclusive upper bound for a specific index in order to constrain the results of find(). The $max specifies the upper bound for all keys of a specific index in order.
     */
    max(max: Document): this;
    /**
     * Set the cursor returnKey.
     * If set to true, modifies the cursor to only return the index field or fields for the results of the query, rather than documents.
     * If set to true and the query does not use an index to perform the read operation, the returned documents will not contain any fields.
     *
     * @param value - the returnKey value.
     */
    returnKey(value: boolean): this;
    /**
     * Modifies the output of a query by adding a field $recordId to matching documents. $recordId is the internal key which uniquely identifies a document in a collection.
     *
     * @param value - The $showDiskLoc option has now been deprecated and replaced with the showRecordId field. $showDiskLoc will still be accepted for OP_QUERY stye find.
     */
    showRecordId(value: boolean): this;
    /**
     * Add a query modifier to the cursor query
     *
     * @param name - The query modifier (must start with $, such as $orderby etc)
     * @param value - The modifier value.
     */
    addQueryModifier(name: string, value: string | boolean | number | Document): this;
    /**
     * Add a comment to the cursor query allowing for tracking the comment in the log.
     *
     * @param value - The comment attached to this query.
     */
    comment(value: string): this;
    /**
     * Set a maxAwaitTimeMS on a tailing cursor query to allow to customize the timeout value for the option awaitData (Only supported on MongoDB 3.2 or higher, ignored otherwise)
     *
     * @param value - Number of milliseconds to wait before aborting the tailed query.
     */
    maxAwaitTimeMS(value: number): this;
    /**
     * Set a maxTimeMS on the cursor query, allowing for hard timeout limits on queries (Only supported on MongoDB 2.6 or higher)
     *
     * @param value - Number of milliseconds to wait before aborting the query.
     */
    maxTimeMS(value: number): this;
    /**
     * Add a project stage to the aggregation pipeline
     *
     * @remarks
     * In order to strictly type this function you must provide an interface
     * that represents the effect of your projection on the result documents.
     *
     * By default chaining a projection to your cursor changes the returned type to the generic
     * {@link Document} type.
     * You should specify a parameterized type to have assertions on your final results.
     *
     * @example
     * ```typescript
     * // Best way
     * const docs: FindCursor<{ a: number }> = cursor.project<{ a: number }>({ _id: 0, a: true });
     * // Flexible way
     * const docs: FindCursor<Document> = cursor.project({ _id: 0, a: true });
     * ```
     *
     * @remarks
     *
     * **Note for Typescript Users:** adding a transform changes the return type of the iteration of this cursor,
     * it **does not** return a new instance of a cursor. This means when calling project,
     * you should always assign the result to a new variable in order to get a correctly typed cursor variable.
     * Take note of the following example:
     *
     * @example
     * ```typescript
     * const cursor: FindCursor<{ a: number; b: string }> = coll.find();
     * const projectCursor = cursor.project<{ a: number }>({ _id: 0, a: true });
     * const aPropOnlyArray: {a: number}[] = await projectCursor.toArray();
     *
     * // or always use chaining and save the final cursor
     *
     * const cursor = coll.find().project<{ a: string }>({
     *   _id: 0,
     *   a: { $convert: { input: '$a', to: 'string' }
     * }});
     * ```
     */
    project<T extends Document = Document>(value: Document): FindCursor<T>;
    /**
     * Sets the sort order of the cursor query.
     *
     * @param sort - The key or keys set for the sort.
     * @param direction - The direction of the sorting (1 or -1).
     */
    sort(sort: Sort | string, direction?: SortDirection): this;
    /**
     * Allows disk use for blocking sort operations exceeding 100MB memory. (MongoDB 3.2 or higher)
     *
     * @remarks
     * {@link https://www.mongodb.com/docs/manual/reference/command/find/#find-cmd-allowdiskuse | find command allowDiskUse documentation}
     */
    allowDiskUse(allow?: boolean): this;
    /**
     * Set the collation options for the cursor.
     *
     * @param value - The cursor collation options (MongoDB 3.4 or higher) settings for update operation (see 3.4 documentation for available fields).
     */
    collation(value: CollationOptions): this;
    /**
     * Set the limit for the cursor.
     *
     * @param value - The limit for the cursor query.
     */
    limit(value: number): this;
    /**
     * Set the skip for the cursor.
     *
     * @param value - The skip for the cursor query.
     */
    skip(value: number): this;
}

/** @public */
export declare interface FindOneAndDeleteOptions extends CommandOperationOptions {
    /** An optional hint for query optimization. See the {@link https://www.mongodb.com/docs/manual/reference/command/update/#update-command-hint|update command} reference for more information.*/
    hint?: Document;
    /** Limits the fields to return for all matching documents. */
    projection?: Document;
    /** Determines which document the operation modifies if the query selects multiple documents. */
    sort?: Sort;
    /** Map of parameter names and values that can be accessed using $$var (requires MongoDB 5.0). */
    let?: Document;
    /**
     * Return the ModifyResult instead of the modified document. Defaults to false
     */
    includeResultMetadata?: boolean;
}

/** @public */
export declare interface FindOneAndReplaceOptions extends CommandOperationOptions {
    /** Allow driver to bypass schema validation. */
    bypassDocumentValidation?: boolean;
    /** An optional hint for query optimization. See the {@link https://www.mongodb.com/docs/manual/reference/command/update/#update-command-hint|update command} reference for more information.*/
    hint?: Document;
    /** Limits the fields to return for all matching documents. */
    projection?: Document;
    /** When set to 'after', returns the updated document rather than the original. The default is 'before'.  */
    returnDocument?: ReturnDocument;
    /** Determines which document the operation modifies if the query selects multiple documents. */
    sort?: Sort;
    /** Upsert the document if it does not exist. */
    upsert?: boolean;
    /** Map of parameter names and values that can be accessed using $$var (requires MongoDB 5.0). */
    let?: Document;
    /**
     * Return the ModifyResult instead of the modified document. Defaults to false
     */
    includeResultMetadata?: boolean;
}

/** @public */
export declare interface FindOneAndUpdateOptions extends CommandOperationOptions {
    /** Optional list of array filters referenced in filtered positional operators */
    arrayFilters?: Document[];
    /** Allow driver to bypass schema validation. */
    bypassDocumentValidation?: boolean;
    /** An optional hint for query optimization. See the {@link https://www.mongodb.com/docs/manual/reference/command/update/#update-command-hint|update command} reference for more information.*/
    hint?: Document;
    /** Limits the fields to return for all matching documents. */
    projection?: Document;
    /** When set to 'after', returns the updated document rather than the original. The default is 'before'.  */
    returnDocument?: ReturnDocument;
    /** Determines which document the operation modifies if the query selects multiple documents. */
    sort?: Sort;
    /** Upsert the document if it does not exist. */
    upsert?: boolean;
    /** Map of parameter names and values that can be accessed using $$var (requires MongoDB 5.0). */
    let?: Document;
    /**
     * Return the ModifyResult instead of the modified document. Defaults to false
     */
    includeResultMetadata?: boolean;
}

/** @public */
export declare interface FindOneOptions extends FindOptions {
    /** @deprecated Will be removed in the next major version. User provided value will be ignored. */
    batchSize?: number;
    /** @deprecated Will be removed in the next major version. User provided value will be ignored. */
    limit?: number;
    /** @deprecated Will be removed in the next major version. User provided value will be ignored. */
    noCursorTimeout?: boolean;
}

/**
 * A builder object that is returned from {@link BulkOperationBase#find}.
 * Is used to build a write operation that involves a query filter.
 *
 * @public
 */
export declare class FindOperators {
    bulkOperation: BulkOperationBase;
    /* Excluded from this release type: __constructor */
    /** Add a multiple update operation to the bulk operation */
    update(updateDocument: Document | Document[]): BulkOperationBase;
    /** Add a single update operation to the bulk operation */
    updateOne(updateDocument: Document | Document[]): BulkOperationBase;
    /** Add a replace one operation to the bulk operation */
    replaceOne(replacement: Document): BulkOperationBase;
    /** Add a delete one operation to the bulk operation */
    deleteOne(): BulkOperationBase;
    /** Add a delete many operation to the bulk operation */
    delete(): BulkOperationBase;
    /** Upsert modifier for update bulk operation, noting that this operation is an upsert. */
    upsert(): this;
    /** Specifies the collation for the query condition. */
    collation(collation: CollationOptions): this;
    /** Specifies arrayFilters for UpdateOne or UpdateMany bulk operations. */
    arrayFilters(arrayFilters: Document[]): this;
    /** Specifies hint for the bulk operation. */
    hint(hint: Hint): this;
}

/**
 * @public
 * @typeParam TSchema - Unused schema definition, deprecated usage, only specify `FindOptions` with no generic
 */
export declare interface FindOptions<TSchema extends Document = Document> extends Omit<CommandOperationOptions, 'writeConcern' | 'explain'>, AbstractCursorOptions {
    /** Sets the limit of documents returned in the query. */
    limit?: number;
    /** Set to sort the documents coming back from the query. Array of indexes, `[['a', 1]]` etc. */
    sort?: Sort;
    /** The fields to return in the query. Object of fields to either include or exclude (one of, not both), `{'a':1, 'b': 1}` **or** `{'a': 0, 'b': 0}` */
    projection?: Document;
    /** Set to skip N documents ahead in your query (useful for pagination). */
    skip?: number;
    /** Tell the query to use specific indexes in the query. Object of indexes to use, `{'_id':1}` */
    hint?: Hint;
    /** Specify if the cursor can timeout. */
    timeout?: boolean;
    /** Specify if the cursor is tailable. */
    tailable?: boolean;
    /** Specify if the cursor is a tailable-await cursor. Requires `tailable` to be true */
    awaitData?: boolean;
    /** Set the batchSize for the getMoreCommand when iterating over the query results. */
    batchSize?: number;
    /** If true, returns only the index keys in the resulting documents. */
    returnKey?: boolean;
    /** The inclusive lower bound for a specific index */
    min?: Document;
    /** The exclusive upper bound for a specific index */
    max?: Document;
    /** Number of milliseconds to wait before aborting the query. */
    maxTimeMS?: number;
    /** The maximum amount of time for the server to wait on new documents to satisfy a tailable cursor query. Requires `tailable` and `awaitData` to be true */
    maxAwaitTimeMS?: number;
    /** The server normally times out idle cursors after an inactivity period (10 minutes) to prevent excess memory use. Set this option to prevent that. */
    noCursorTimeout?: boolean;
    /** Specify collation (MongoDB 3.4 or higher) settings for update operation (see 3.4 documentation for available fields). */
    collation?: CollationOptions;
    /** Allows disk use for blocking sort operations exceeding 100MB memory. (MongoDB 3.2 or higher) */
    allowDiskUse?: boolean;
    /** Determines whether to close the cursor after the first batch. Defaults to false. */
    singleBatch?: boolean;
    /** For queries against a sharded collection, allows the command (or subsequent getMore commands) to return partial results, rather than an error, if one or more queried shards are unavailable. */
    allowPartialResults?: boolean;
    /** Determines whether to return the record identifier for each document. If true, adds a field $recordId to the returned documents. */
    showRecordId?: boolean;
    /** Map of parameter names and values that can be accessed using $$var (requires MongoDB 5.0). */
    let?: Document;
    /**
     * Option to enable an optimized code path for queries looking for a particular range of `ts` values in the oplog. Requires `tailable` to be true.
     * @deprecated Starting from MongoDB 4.4 this flag is not needed and will be ignored.
     */
    oplogReplay?: boolean;
    /**
     * Specifies the verbosity mode for the explain output.
     * @deprecated This API is deprecated in favor of `collection.find().explain()`.
     */
    explain?: ExplainOptions['explain'];
    /* Excluded from this release type: timeoutMode */
}

/** @public */
export declare type Flatten<Type> = Type extends ReadonlyArray<infer Item> ? Item : Type;

/**
 * @public
 * Configuration options for making an AWS encryption key
 */
export declare interface GCPEncryptionKeyOptions {
    /**
     * GCP project ID
     */
    projectId: string;
    /**
     * Location name (e.g. "global")
     */
    location: string;
    /**
     * Key ring name
     */
    keyRing: string;
    /**
     * Key name
     */
    keyName: string;
    /**
     * Key version
     */
    keyVersion?: string | undefined;
    /**
     * KMS URL, defaults to `https://www.googleapis.com/auth/cloudkms`
     */
    endpoint?: string | undefined;
}

/** @public */
export declare type GCPKMSProviderConfiguration = {
    /**
     * The service account email to authenticate
     */
    email: string;
    /**
     * A PKCS#8 encrypted key. This can either be a base64 string or a binary representation
     */
    privateKey: string | Buffer;
    /**
     * If present, a host with optional port. E.g. "example.com" or "example.com:443".
     * Defaults to "oauth2.googleapis.com"
     */
    endpoint?: string | undefined;
} | {
    /**
     * If present, an access token to authenticate with GCP.
     */
    accessToken: string;
};

/** @public */
export declare type GenericListener = (...args: any[]) => void;

/**
 * Constructor for a streaming GridFS interface
 * @public
 */
export declare class GridFSBucket extends TypedEventEmitter<GridFSBucketEvents> {
    /* Excluded from this release type: s */
    /**
     * When the first call to openUploadStream is made, the upload stream will
     * check to see if it needs to create the proper indexes on the chunks and
     * files collections. This event is fired either when 1) it determines that
     * no index creation is necessary, 2) when it successfully creates the
     * necessary indexes.
     * @event
     */
    static readonly INDEX: "index";
    constructor(db: Db, options?: GridFSBucketOptions);
    /**
     * Returns a writable stream (GridFSBucketWriteStream) for writing
     * buffers to GridFS. The stream's 'id' property contains the resulting
     * file's id.
     *
     * @param filename - The value of the 'filename' key in the files doc
     * @param options - Optional settings.
     */
    openUploadStream(filename: string, options?: GridFSBucketWriteStreamOptions): GridFSBucketWriteStream;
    /**
     * Returns a writable stream (GridFSBucketWriteStream) for writing
     * buffers to GridFS for a custom file id. The stream's 'id' property contains the resulting
     * file's id.
     */
    openUploadStreamWithId(id: ObjectId, filename: string, options?: GridFSBucketWriteStreamOptions): GridFSBucketWriteStream;
    /** Returns a readable stream (GridFSBucketReadStream) for streaming file data from GridFS. */
    openDownloadStream(id: ObjectId, options?: GridFSBucketReadStreamOptions): GridFSBucketReadStream;
    /**
     * Deletes a file with the given id
     *
     * @param id - The id of the file doc
     */
    delete(id: ObjectId, options?: {
        timeoutMS: number;
    }): Promise<void>;
    /** Convenience wrapper around find on the files collection */
    find(filter?: Filter<GridFSFile>, options?: FindOptions): FindCursor<GridFSFile>;
    /**
     * Returns a readable stream (GridFSBucketReadStream) for streaming the
     * file with the given name from GridFS. If there are multiple files with
     * the same name, this will stream the most recent file with the given name
     * (as determined by the `uploadDate` field). You can set the `revision`
     * option to change this behavior.
     */
    openDownloadStreamByName(filename: string, options?: GridFSBucketReadStreamOptionsWithRevision): GridFSBucketReadStream;
    /**
     * Renames the file with the given _id to the given string
     *
     * @param id - the id of the file to rename
     * @param filename - new name for the file
     */
    rename(id: ObjectId, filename: string, options?: {
        timeoutMS: number;
    }): Promise<void>;
    /** Removes this bucket's files collection, followed by its chunks collection. */
    drop(options?: {
        timeoutMS: number;
    }): Promise<void>;
}

/** @public */
export declare type GridFSBucketEvents = {
    index(): void;
};

/** @public */
export declare interface GridFSBucketOptions extends WriteConcernOptions {
    /** The 'files' and 'chunks' collections will be prefixed with the bucket name followed by a dot. */
    bucketName?: string;
    /** Number of bytes stored in each chunk. Defaults to 255KB */
    chunkSizeBytes?: number;
    /** Read preference to be passed to read operations */
    readPreference?: ReadPreference;
    /**
     * @experimental
     * Specifies the lifetime duration of a gridFS stream. If any async operations are in progress
     * when this timeout expires, the stream will throw a timeout error.
     */
    timeoutMS?: number;
}

/* Excluded from this release type: GridFSBucketPrivate */

/**
 * A readable stream that enables you to read buffers from GridFS.
 *
 * Do not instantiate this class directly. Use `openDownloadStream()` instead.
 * @public
 */
export declare class GridFSBucketReadStream extends Readable {
    /* Excluded from this release type: s */
    /**
     * Fires when the stream loaded the file document corresponding to the provided id.
     * @event
     */
    static readonly FILE: "file";
    /* Excluded from this release type: __constructor */
    /* Excluded from this release type: _read */
    /**
     * Sets the 0-based offset in bytes to start streaming from. Throws
     * an error if this stream has entered flowing mode
     * (e.g. if you've already called `on('data')`)
     *
     * @param start - 0-based offset in bytes to start streaming from
     */
    start(start?: number): this;
    /**
     * Sets the 0-based offset in bytes to start streaming from. Throws
     * an error if this stream has entered flowing mode
     * (e.g. if you've already called `on('data')`)
     *
     * @param end - Offset in bytes to stop reading at
     */
    end(end?: number): this;
    /**
     * Marks this stream as aborted (will never push another `data` event)
     * and kills the underlying cursor. Will emit the 'end' event, and then
     * the 'close' event once the cursor is successfully killed.
     */
    abort(): Promise<void>;
}

/** @public */
export declare interface GridFSBucketReadStreamOptions {
    sort?: Sort;
    skip?: number;
    /**
     * 0-indexed non-negative byte offset from the beginning of the file
     */
    start?: number;
    /**
     * 0-indexed non-negative byte offset to the end of the file contents
     * to be returned by the stream. `end` is non-inclusive
     */
    end?: number;
    /**
     * @experimental
     * Specifies the time an operation will run until it throws a timeout error
     */
    timeoutMS?: number;
}

/** @public */
export declare interface GridFSBucketReadStreamOptionsWithRevision extends GridFSBucketReadStreamOptions {
    /** The revision number relative to the oldest file with the given filename. 0
     * gets you the oldest file, 1 gets you the 2nd oldest, -1 gets you the
     * newest. */
    revision?: number;
}

/* Excluded from this release type: GridFSBucketReadStreamPrivate */

/**
 * A writable stream that enables you to write buffers to GridFS.
 *
 * Do not instantiate this class directly. Use `openUploadStream()` instead.
 * @public
 */
export declare class GridFSBucketWriteStream extends Writable {
    bucket: GridFSBucket;
    /** A Collection instance where the file's chunks are stored */
    chunks: Collection<GridFSChunk>;
    /** A Collection instance where the file's GridFSFile document is stored */
    files: Collection<GridFSFile>;
    /** The name of the file */
    filename: string;
    /** Options controlling the metadata inserted along with the file */
    options: GridFSBucketWriteStreamOptions;
    /** Indicates the stream is finished uploading */
    done: boolean;
    /** The ObjectId used for the `_id` field on the GridFSFile document */
    id: ObjectId;
    /** The number of bytes that each chunk will be limited to */
    chunkSizeBytes: number;
    /** Space used to store a chunk currently being inserted */
    bufToStore: Buffer;
    /** Accumulates the number of bytes inserted as the stream uploads chunks */
    length: number;
    /** Accumulates the number of chunks inserted as the stream uploads file contents */
    n: number;
    /** Tracks the current offset into the buffered bytes being uploaded */
    pos: number;
    /** Contains a number of properties indicating the current state of the stream */
    state: {
        /** If set the stream has ended */
        streamEnd: boolean;
        /** Indicates the number of chunks that still need to be inserted to exhaust the current buffered data */
        outstandingRequests: number;
        /** If set an error occurred during insertion */
        errored: boolean;
        /** If set the stream was intentionally aborted */
        aborted: boolean;
    };
    /** The write concern setting to be used with every insert operation */
    writeConcern?: WriteConcern;
    /**
     * The document containing information about the inserted file.
     * This property is defined _after_ the finish event has been emitted.
     * It will remain `null` if an error occurs.
     *
     * @example
     * ```ts
     * fs.createReadStream('file.txt')
     *   .pipe(bucket.openUploadStream('file.txt'))
     *   .on('finish', function () {
     *     console.log(this.gridFSFile)
     *   })
     * ```
     */
    gridFSFile: GridFSFile | null;
    /* Excluded from this release type: timeoutContext */
    /* Excluded from this release type: __constructor */
    /* Excluded from this release type: _construct */
    /* Excluded from this release type: _write */
    /* Excluded from this release type: _final */
    /**
     * Places this write stream into an aborted state (all future writes fail)
     * and deletes all chunks that have already been written.
     */
    abort(): Promise<void>;
}

/** @public */
export declare interface GridFSBucketWriteStreamOptions extends WriteConcernOptions {
    /** Overwrite this bucket's chunkSizeBytes for this file */
    chunkSizeBytes?: number;
    /** Custom file id for the GridFS file. */
    id?: ObjectId;
    /** Object to store in the file document's `metadata` field */
    metadata?: Document;
    /**
     * String to store in the file document's `contentType` field.
     * @deprecated Will be removed in the next major version. Add a contentType field to the metadata document instead.
     */
    contentType?: string;
    /**
     * Array of strings to store in the file document's `aliases` field.
     * @deprecated Will be removed in the next major version. Add an aliases field to the metadata document instead.
     */
    aliases?: string[];
    /**
     * @experimental
     * Specifies the time an operation will run until it throws a timeout error
     */
    timeoutMS?: number;
}

/** @public */
export declare interface GridFSChunk {
    _id: ObjectId;
    files_id: ObjectId;
    n: number;
    data: Buffer | Uint8Array;
}

/** @public */
export declare interface GridFSFile {
    _id: ObjectId;
    length: number;
    chunkSize: number;
    filename: string;
    metadata?: Document;
    uploadDate: Date;
    /** @deprecated Will be removed in the next major version. */
    contentType?: string;
    /** @deprecated Will be removed in the next major version. */
    aliases?: string[];
}

/** @public */
export declare const GSSAPICanonicalizationValue: Readonly<{
    readonly on: true;
    readonly off: false;
    readonly none: "none";
    readonly forward: "forward";
    readonly forwardAndReverse: "forwardAndReverse";
}>;

/** @public */
export declare type GSSAPICanonicalizationValue = (typeof GSSAPICanonicalizationValue)[keyof typeof GSSAPICanonicalizationValue];

/* Excluded from this release type: HandshakeDocument */

/** @public */
export declare interface HedgeOptions {
    /** Explicitly enable or disable hedged reads. */
    enabled?: boolean;
}

/** @public */
export declare type Hint = string | Document;

/** @public */
export declare class HostAddress {
    host: string | undefined;
    port: number | undefined;
    socketPath: string | undefined;
    isIPv6: boolean;
    constructor(hostString: string);
    inspect(): string;
    toString(): string;
    static fromString(this: void, s: string): HostAddress;
    static fromHostPort(host: string, port: number): HostAddress;
    static fromSrvRecord({ name, port }: SrvRecord): HostAddress;
    toHostPort(): {
        host: string;
        port: number;
    };
}

/**
 * The information returned by the server on the IDP server.
 * @public
 */
export declare interface IdPInfo {
    /**
     * A URL which describes the Authentication Server. This identifier should
     * be the iss of provided access tokens, and be viable for RFC8414 metadata
     * discovery and RFC9207 identification.
     */
    issuer: string;
    /** A unique client ID for this OIDC client. */
    clientId: string;
    /** A list of additional scopes to request from IdP. */
    requestScopes?: string[];
}

/**
 * The response from the IdP server with the access token and
 * optional expiration time and refresh token.
 * @public
 */
export declare interface IdPServerResponse {
    /** The OIDC access token. */
    accessToken: string;
    /** The time when the access token expires. For future use. */
    expiresInSeconds?: number;
    /** The refresh token, if applicable, to be used by the callback to request a new token from the issuer. */
    refreshToken?: string;
}

/** @public */
export declare interface IndexDescription extends Pick<CreateIndexesOptions, 'background' | 'unique' | 'partialFilterExpression' | 'sparse' | 'hidden' | 'expireAfterSeconds' | 'storageEngine' | 'version' | 'weights' | 'default_language' | 'language_override' | 'textIndexVersion' | '2dsphereIndexVersion' | 'bits' | 'min' | 'max' | 'bucketSize' | 'wildcardProjection'> {
    collation?: CollationOptions;
    name?: string;
    key: {
        [key: string]: IndexDirection;
    } | Map<string, IndexDirection>;
}

/** @public */
export declare type IndexDescriptionCompact = Record<string, [name: string, direction: IndexDirection][]>;

/**
 * @public
 * The index information returned by the listIndexes command. https://www.mongodb.com/docs/manual/reference/command/listIndexes/#mongodb-dbcommand-dbcmd.listIndexes
 */
export declare type IndexDescriptionInfo = Omit<IndexDescription, 'key' | 'version'> & {
    key: {
        [key: string]: IndexDirection;
    };
    v?: IndexDescription['version'];
} & Document;

/** @public */
export declare type IndexDirection = -1 | 1 | '2d' | '2dsphere' | 'text' | 'geoHaystack' | 'hashed' | number;

/** @public */
export declare interface IndexInformationOptions extends ListIndexesOptions {
    /**
     * When `true`, an array of index descriptions is returned.
     * When `false`, the driver returns an object that with keys corresponding to index names with values
     * corresponding to the entries of the indexes' key.
     *
     * For example, the given the following indexes:
     * ```
     * [ { name: 'a_1', key: { a: 1 } }, { name: 'b_1_c_1' , key: { b: 1, c: 1 } }]
     * ```
     *
     * When `full` is `true`, the above array is returned.  When `full` is `false`, the following is returned:
     * ```
     * {
     *   'a_1': [['a', 1]],
     *   'b_1_c_1': [['b', 1], ['c', 1]],
     * }
     * ```
     */
    full?: boolean;
}

/** @public */
export declare type IndexSpecification = OneOrMore<string | [string, IndexDirection] | {
    [key: string]: IndexDirection;
} | Map<string, IndexDirection>>;

/** Given an object shaped type, return the type of the _id field or default to ObjectId @public */
export declare type InferIdType<TSchema> = TSchema extends {
    _id: infer IdType;
} ? Record<any, never> extends IdType ? never : IdType : TSchema extends {
    _id?: infer IdType;
} ? unknown extends IdType ? ObjectId : IdType : ObjectId;

/* Excluded from this release type: InitialCursorResponse */

/** @public */
export declare interface InsertManyResult<TSchema = Document> {
    /** Indicates whether this write result was acknowledged. If not, then all other members of this result will be undefined */
    acknowledged: boolean;
    /** The number of inserted documents for this operations */
    insertedCount: number;
    /** Map of the index of the inserted document to the id of the inserted document */
    insertedIds: {
        [key: number]: InferIdType<TSchema>;
    };
}

/** @public */
export declare interface InsertOneModel<TSchema extends Document = Document> {
    /** The document to insert. */
    document: OptionalId<TSchema>;
}

/** @public */
export declare interface InsertOneOptions extends CommandOperationOptions {
    /** Allow driver to bypass schema validation. */
    bypassDocumentValidation?: boolean;
    /** Force server to assign _id values instead of driver. */
    forceServerObjectId?: boolean;
}

/** @public */
export declare interface InsertOneResult<TSchema = Document> {
    /** Indicates whether this write result was acknowledged. If not, then all other members of this result will be undefined */
    acknowledged: boolean;
    /** The identifier that was inserted. If the server generated the identifier, this value will be null as the driver does not have access to that data */
    insertedId: InferIdType<TSchema>;
}

export { Int32 }

/** @public */
export declare type IntegerType = number | Int32 | Long | bigint;

/* Excluded from this release type: InternalAbstractCursorOptions */

/** @public */
export declare type IsAny<Type, ResultIfAny, ResultIfNotAny> = true extends false & Type ? ResultIfAny : ResultIfNotAny;

/**
 * Helper types for dot-notation filter attributes
 */
/** @public */
export declare type Join<T extends unknown[], D extends string> = T extends [] ? '' : T extends [string | number] ? `${T[0]}` : T extends [string | number, ...infer R] ? `${T[0]}${D}${Join<R, D>}` : string;

/* Excluded from this release type: JSTypeOf */

/* Excluded from this release type: kDecorateResult */

/** @public */
export declare type KeysOfAType<TSchema, Type> = {
    [key in keyof TSchema]: NonNullable<TSchema[key]> extends Type ? key : never;
}[keyof TSchema];

/** @public */
export declare type KeysOfOtherType<TSchema, Type> = {
    [key in keyof TSchema]: NonNullable<TSchema[key]> extends Type ? never : key;
}[keyof TSchema];

/**
 * @public
 * Configuration options for making a KMIP encryption key
 */
export declare interface KMIPEncryptionKeyOptions {
    /**
     * keyId is the KMIP Unique Identifier to a 96 byte KMIP Secret Data managed object.
     *
     * If keyId is omitted, a random 96 byte KMIP Secret Data managed object will be created.
     */
    keyId?: string;
    /**
     * Host with optional port.
     */
    endpoint?: string;
    /**
     * If true, this key should be decrypted by the KMIP server.
     *
     * Requires `mongodb-client-encryption>=6.0.1`.
     */
    delegated?: boolean;
}

/** @public */
export declare interface KMIPKMSProviderConfiguration {
    /**
     * The output endpoint string.
     * The endpoint consists of a hostname and port separated by a colon.
     * E.g. "example.com:123". A port is always present.
     */
    endpoint?: string;
}

/**
 * @public
 * Configuration options that are used by specific KMS providers during key generation, encryption, and decryption.
 *
 * Named KMS providers _are not supported_ for automatic KMS credential fetching.
 */
export declare interface KMSProviders {
    /**
     * Configuration options for using 'aws' as your KMS provider
     */
    aws?: AWSKMSProviderConfiguration | Record<string, never>;
    [key: `aws:${string}`]: AWSKMSProviderConfiguration;
    /**
     * Configuration options for using 'local' as your KMS provider
     */
    local?: LocalKMSProviderConfiguration;
    [key: `local:${string}`]: LocalKMSProviderConfiguration;
    /**
     * Configuration options for using 'kmip' as your KMS provider
     */
    kmip?: KMIPKMSProviderConfiguration;
    [key: `kmip:${string}`]: KMIPKMSProviderConfiguration;
    /**
     * Configuration options for using 'azure' as your KMS provider
     */
    azure?: AzureKMSProviderConfiguration | Record<string, never>;
    [key: `azure:${string}`]: AzureKMSProviderConfiguration;
    /**
     * Configuration options for using 'gcp' as your KMS provider
     */
    gcp?: GCPKMSProviderConfiguration | Record<string, never>;
    [key: `gcp:${string}`]: GCPKMSProviderConfiguration;
}

/* Excluded from this release type: LegacyTimeoutContext */

/* Excluded from this release type: LegacyTimeoutContextOptions */

/** @public */
export declare const LEGAL_TCP_SOCKET_OPTIONS: readonly ["autoSelectFamily", "autoSelectFamilyAttemptTimeout", "keepAliveInitialDelay", "family", "hints", "localAddress", "localPort", "lookup"];

/** @public */
export declare const LEGAL_TLS_SOCKET_OPTIONS: readonly ["allowPartialTrustChain", "ALPNProtocols", "ca", "cert", "checkServerIdentity", "ciphers", "crl", "ecdhCurve", "key", "minDHSize", "passphrase", "pfx", "rejectUnauthorized", "secureContext", "secureProtocol", "servername", "session"];

/* Excluded from this release type: List */

/** @public */
export declare class ListCollectionsCursor<T extends Pick<CollectionInfo, 'name' | 'type'> | CollectionInfo = Pick<CollectionInfo, 'name' | 'type'> | CollectionInfo> extends AbstractCursor<T> {
    parent: Db;
    filter: Document;
    options?: ListCollectionsOptions & Abortable;
    constructor(db: Db, filter: Document, options?: ListCollectionsOptions & Abortable);
    clone(): ListCollectionsCursor<T>;
    /* Excluded from this release type: _initialize */
}

/** @public */
export declare interface ListCollectionsOptions extends Omit<CommandOperationOptions, 'writeConcern'>, Abortable {
    /** Since 4.0: If true, will only return the collection name in the response, and will omit additional info */
    nameOnly?: boolean;
    /** Since 4.0: If true and nameOnly is true, allows a user without the required privilege (i.e. listCollections action on the database) to run the command when access control is enforced. */
    authorizedCollections?: boolean;
    /** The batchSize for the returned command cursor or if pre 2.8 the systems batch collection */
    batchSize?: number;
    /* Excluded from this release type: timeoutMode */
    /* Excluded from this release type: timeoutContext */
}

/** @public */
export declare interface ListDatabasesOptions extends Omit<CommandOperationOptions, 'rawData'> {
    /** A query predicate that determines which databases are listed */
    filter?: Document;
    /** A flag to indicate whether the command should return just the database names, or return both database names and size information */
    nameOnly?: boolean;
    /** A flag that determines which databases are returned based on the user privileges when access control is enabled */
    authorizedDatabases?: boolean;
}

/** @public */
export declare interface ListDatabasesResult {
    databases: ({
        name: string;
        sizeOnDisk?: number;
        empty?: boolean;
    } & Document)[];
    totalSize?: number;
    totalSizeMb?: number;
    ok: 1 | 0;
}

/** @public */
export declare class ListIndexesCursor extends AbstractCursor {
    parent: Collection;
    options?: ListIndexesOptions;
    constructor(collection: Collection, options?: ListIndexesOptions);
    clone(): ListIndexesCursor;
    /* Excluded from this release type: _initialize */
}

/** @public */
export declare type ListIndexesOptions = AbstractCursorOptions & {
    /* Excluded from this release type: omitMaxTimeMS */
    /* Excluded from this release type: rawData */
};

/** @public */
export declare class ListSearchIndexesCursor extends AggregationCursor<{
    name: string;
}> {
    /* Excluded from this release type: __constructor */
}

/** @public */
export declare type ListSearchIndexesOptions = Omit<AggregateOptions, 'readConcern' | 'writeConcern'>;

/** @public */
export declare interface LocalKMSProviderConfiguration {
    /**
     * The master key used to encrypt/decrypt data keys.
     * A 96-byte long Buffer or base64 encoded string.
     */
    key: Binary | Uint8Array | string;
}

/** @public */
export declare interface Log extends Record<string, any> {
    t: Date;
    c: MongoLoggableComponent;
    s: SeverityLevel;
    message?: string;
}

/** @public */
export declare interface LogComponentSeveritiesClientOptions {
    /** Optional severity level for command component */
    command?: SeverityLevel;
    /** Optional severity level for topology component */
    topology?: SeverityLevel;
    /** Optional severity level for server selection component */
    serverSelection?: SeverityLevel;
    /** Optional severity level for connection component */
    connection?: SeverityLevel;
    /** Optional severity level for client component */
    client?: SeverityLevel;
    /** Optional default severity level to be used if any of the above are unset */
    default?: SeverityLevel;
}

/* Excluded from this release type: LogConvertible */

/* Excluded from this release type: Loggable */

/* Excluded from this release type: LoggableCommandFailedEvent */

/* Excluded from this release type: LoggableCommandSucceededEvent */

/* Excluded from this release type: LoggableEvent */

/* Excluded from this release type: LoggableServerHeartbeatFailedEvent */

/* Excluded from this release type: LoggableServerHeartbeatStartedEvent */

/* Excluded from this release type: LoggableServerHeartbeatSucceededEvent */
export { Long }

/** @public */
export declare type MatchKeysAndValues<TSchema> = Readonly<Partial<TSchema>> & Record<string, any>;

export { MaxKey }

/* Excluded from this release type: MessageHeader */
export { MinKey }

/** @public */
export declare interface ModifyResult<TSchema = Document> {
    value: WithId<TSchema> | null;
    lastErrorObject?: Document;
    ok: 0 | 1;
}

/** @public */
export declare const MONGO_CLIENT_EVENTS: readonly ["connectionPoolCreated", "connectionPoolReady", "connectionPoolCleared", "connectionPoolClosed", "connectionCreated", "connectionReady", "connectionClosed", "connectionCheckOutStarted", "connectionCheckOutFailed", "connectionCheckedOut", "connectionCheckedIn", "commandStarted", "commandSucceeded", "commandFailed", "serverOpening", "serverClosed", "serverDescriptionChanged", "topologyOpening", "topologyClosed", "topologyDescriptionChanged", "error", "timeout", "close", "serverHeartbeatStarted", "serverHeartbeatSucceeded", "serverHeartbeatFailed"];

/**
 * An error generated when the driver API is used incorrectly
 *
 * @privateRemarks
 * Should **never** be directly instantiated
 *
 * @public
 * @category Error
 */
export declare class MongoAPIError extends MongoDriverError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string, options?: {
        cause?: Error;
    });
    get name(): string;
}

/**
 * A error generated when the user attempts to authenticate
 * via AWS, but fails
 *
 * @public
 * @category Error
 */
export declare class MongoAWSError extends MongoRuntimeError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string, options?: {
        cause?: Error;
    });
    get name(): string;
}

/**
 * A error generated when the user attempts to authenticate
 * via Azure, but fails.
 *
 * @public
 * @category Error
 */
export declare class MongoAzureError extends MongoOIDCError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string);
    get name(): string;
}

/**
 * An error generated when a batch command is re-executed after one of the commands in the batch
 * has failed
 *
 * @public
 * @category Error
 */
export declare class MongoBatchReExecutionError extends MongoAPIError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message?: string);
    get name(): string;
}

/**
 * An error indicating an unsuccessful Bulk Write
 * @public
 * @category Error
 */
export declare class MongoBulkWriteError extends MongoServerError {
    result: BulkWriteResult;
    writeErrors: OneOrMore<WriteError>;
    err?: WriteConcernError;
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(error: {
        message: string;
        code: number;
        writeErrors?: WriteError[];
    } | WriteConcernError | AnyError, result: BulkWriteResult);
    get name(): string;
    /** Number of documents inserted. */
    get insertedCount(): number;
    /** Number of documents matched for update. */
    get matchedCount(): number;
    /** Number of documents modified. */
    get modifiedCount(): number;
    /** Number of documents deleted. */
    get deletedCount(): number;
    /** Number of documents upserted. */
    get upsertedCount(): number;
    /** Inserted document generated Id's, hash key is the index of the originating operation */
    get insertedIds(): {
        [key: number]: any;
    };
    /** Upserted document generated Id's, hash key is the index of the originating operation */
    get upsertedIds(): {
        [key: number]: any;
    };
}

/**
 * An error generated when a ChangeStream operation fails to execute.
 *
 * @public
 * @category Error
 */
export declare class MongoChangeStreamError extends MongoRuntimeError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string);
    get name(): string;
}

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
export declare class MongoClient extends TypedEventEmitter<MongoClientEvents> implements AsyncDisposable_2 {
    /* Excluded from this release type: s */
    /* Excluded from this release type: topology */
    /* Excluded from this release type: mongoLogger */
    /* Excluded from this release type: connectionLock */
    /* Excluded from this release type: closeLock */
    /**
     * The consolidate, parsed, transformed and merged options.
     */
    readonly options: Readonly<Omit<MongoOptions, 'monitorCommands' | 'ca' | 'crl' | 'key' | 'cert' | 'driverInfo' | 'additionalDriverInfo' | 'metadata' | 'extendedMetadata'>> & Pick<MongoOptions, 'monitorCommands' | 'ca' | 'crl' | 'key' | 'cert' | 'driverInfo' | 'additionalDriverInfo' | 'metadata' | 'extendedMetadata'>;
    private driverInfoList;
    constructor(url: string, options?: MongoClientOptions);
    /* Excluded from this release type: [Symbol.asyncDispose] */
    /* Excluded from this release type: asyncDispose */
    /**
     * Append metadata to the client metadata after instantiation.
     * @param driverInfo - Information about the application or library.
     */
    appendMetadata(driverInfo: DriverInfo): void;
    /* Excluded from this release type: checkForNonGenuineHosts */
    get serverApi(): Readonly<ServerApi | undefined>;
    /* Excluded from this release type: monitorCommands */
    /* Excluded from this release type: monitorCommands */
    /* Excluded from this release type: autoEncrypter */
    get readConcern(): ReadConcern | undefined;
    get writeConcern(): WriteConcern | undefined;
    get readPreference(): ReadPreference;
    get bsonOptions(): BSONSerializeOptions;
    get timeoutMS(): number | undefined;
    /**
     * Executes a client bulk write operation, available on server 8.0+.
     * @param models - The client bulk write models.
     * @param options - The client bulk write options.
     * @returns A ClientBulkWriteResult for acknowledged writes and ok: 1 for unacknowledged writes.
     */
    bulkWrite<SchemaMap extends Record<string, Document> = Record<string, Document>>(models: ReadonlyArray<ClientBulkWriteModel<SchemaMap>>, options?: ClientBulkWriteOptions): Promise<ClientBulkWriteResult>;
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
    connect(): Promise<this>;
    /* Excluded from this release type: _connect */
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
    close(_force?: boolean): Promise<void>;
    private _close;
    /**
     * Create a new Db instance sharing the current socket connections.
     *
     * @param dbName - The name of the database we want to use. If not provided, use database name from connection string.
     * @param options - Optional settings for Db construction
     */
    db(dbName?: string, options?: DbOptions): Db;
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
    static connect(url: string, options?: MongoClientOptions): Promise<MongoClient>;
    /**
     * Creates a new ClientSession. When using the returned session in an operation
     * a corresponding ServerSession will be created.
     *
     * @remarks
     * A ClientSession instance may only be passed to operations being performed on the same
     * MongoClient it was started from.
     */
    startSession(options?: ClientSessionOptions): ClientSession;
    /**
     * A convenience method for creating and handling the clean up of a ClientSession.
     * The session will always be ended when the executor finishes.
     *
     * @param executor - An executor function that all operations using the provided session must be invoked in
     * @param options - optional settings for the session
     */
    withSession<T = any>(executor: WithSessionCallback<T>): Promise<T>;
    withSession<T = any>(options: ClientSessionOptions, executor: WithSessionCallback<T>): Promise<T>;
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
    watch<TSchema extends Document = Document, TChange extends Document = ChangeStreamDocument<TSchema>>(pipeline?: Document[], options?: ChangeStreamOptions): ChangeStream<TSchema, TChange>;
}

/* Excluded from this release type: MongoClientAuthProviders */

/**
 * An error indicating that an error occurred when processing bulk write results.
 *
 * @public
 * @category Error
 */
export declare class MongoClientBulkWriteCursorError extends MongoRuntimeError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string);
    get name(): string;
}

/**
 * An error indicating that an error occurred when executing the bulk write.
 *
 * @public
 * @category Error
 */
export declare class MongoClientBulkWriteError extends MongoServerError {
    /**
     * Write concern errors that occurred while executing the bulk write. This list may have
     * multiple items if more than one server command was required to execute the bulk write.
     */
    writeConcernErrors: Document[];
    /**
     * Errors that occurred during the execution of individual write operations. This map will
     * contain at most one entry if the bulk write was ordered.
     */
    writeErrors: Map<number, ClientBulkWriteError>;
    /**
     * The results of any successful operations that were performed before the error was
     * encountered.
     */
    partialResult?: ClientBulkWriteResult;
    /**
     * Initialize the client bulk write error.
     * @param message - The error message.
     */
    constructor(message: ErrorDescription);
    get name(): string;
}

/**
 * An error indicating that an error occurred on the client when executing a client bulk write.
 *
 * @public
 * @category Error
 */
export declare class MongoClientBulkWriteExecutionError extends MongoRuntimeError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string);
    get name(): string;
}

/**
 * An error generated when the MongoClient is closed and async
 * operations are interrupted.
 *
 * @public
 * @category Error
 */
export declare class MongoClientClosedError extends MongoAPIError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor();
    get name(): string;
}

/** @public */
export declare type MongoClientEvents = Pick<TopologyEvents, (typeof MONGO_CLIENT_EVENTS)[number]> & {
    open(mongoClient: MongoClient): void;
};

/**
 * Describes all possible URI query options for the mongo client
 * @public
 * @see https://www.mongodb.com/docs/manual/reference/connection-string
 */
export declare interface MongoClientOptions extends BSONSerializeOptions, SupportedNodeConnectionOptions {
    /** Specifies the name of the replica set, if the mongod is a member of a replica set. */
    replicaSet?: string;
    /**
     * @experimental
     * Specifies the time an operation will run until it throws a timeout error
     */
    timeoutMS?: number;
    /** Enables or disables TLS/SSL for the connection. */
    tls?: boolean;
    /** A boolean to enable or disables TLS/SSL for the connection. (The ssl option is equivalent to the tls option.) */
    ssl?: boolean;
    /** Specifies the location of a local .pem file that contains either the client's TLS/SSL certificate and key. */
    tlsCertificateKeyFile?: string;
    /** Specifies the password to de-crypt the tlsCertificateKeyFile. */
    tlsCertificateKeyFilePassword?: string;
    /** Specifies the location of a local .pem file that contains the root certificate chain from the Certificate Authority. This file is used to validate the certificate presented by the mongod/mongos instance. */
    tlsCAFile?: string;
    /** Specifies the location of a local CRL .pem file that contains the client revokation list. */
    tlsCRLFile?: string;
    /** Bypasses validation of the certificates presented by the mongod/mongos instance */
    tlsAllowInvalidCertificates?: boolean;
    /** Disables hostname validation of the certificate presented by the mongod/mongos instance. */
    tlsAllowInvalidHostnames?: boolean;
    /** Disables various certificate validations. */
    tlsInsecure?: boolean;
    /** The time in milliseconds to attempt a connection before timing out. */
    connectTimeoutMS?: number;
    /** The time in milliseconds to attempt a send or receive on a socket before the attempt times out. */
    socketTimeoutMS?: number;
    /** An array or comma-delimited string of compressors to enable network compression for communication between this client and a mongod/mongos instance. */
    compressors?: CompressorName[] | string;
    /** An integer that specifies the compression level if using zlib for network compression. */
    zlibCompressionLevel?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | undefined;
    /** The maximum number of hosts to connect to when using an srv connection string, a setting of `0` means unlimited hosts */
    srvMaxHosts?: number;
    /**
     * Modifies the srv URI to look like:
     *
     * `_{srvServiceName}._tcp.{hostname}.{domainname}`
     *
     * Querying this DNS URI is expected to respond with SRV records
     */
    srvServiceName?: string;
    /** The maximum number of connections in the connection pool. */
    maxPoolSize?: number;
    /** The minimum number of connections in the connection pool. */
    minPoolSize?: number;
    /** The maximum number of connections that may be in the process of being established concurrently by the connection pool. */
    maxConnecting?: number;
    /**
     * The maximum amount of time a connection should remain idle in the connection pool before being marked idle, in milliseconds.
     * If specified, this must be a number greater than or equal to 0, where 0 means there is no limit. Defaults to 0. After this
     * time passes, the idle collection can be automatically cleaned up in the background.
     */
    maxIdleTimeMS?: number;
    /** The maximum time in milliseconds that a thread can wait for a connection to become available. */
    waitQueueTimeoutMS?: number;
    /** Specify a read concern for the collection (only MongoDB 3.2 or higher supported) */
    readConcern?: ReadConcernLike;
    /** The level of isolation */
    readConcernLevel?: ReadConcernLevel;
    /** Specifies the read preferences for this connection */
    readPreference?: ReadPreferenceMode | ReadPreference;
    /** Specifies, in seconds, how stale a secondary can be before the client stops using it for read operations. */
    maxStalenessSeconds?: number;
    /** Specifies the tags document as a comma-separated list of colon-separated key-value pairs.  */
    readPreferenceTags?: TagSet[];
    /** The auth settings for when connection to server. */
    auth?: Auth;
    /** Specify the database name associated with the user’s credentials. */
    authSource?: string;
    /** Specify the authentication mechanism that MongoDB will use to authenticate the connection. */
    authMechanism?: AuthMechanism;
    /** Specify properties for the specified authMechanism as a comma-separated list of colon-separated key-value pairs. */
    authMechanismProperties?: AuthMechanismProperties;
    /** The size (in milliseconds) of the latency window for selecting among multiple suitable MongoDB instances. */
    localThresholdMS?: number;
    /** Specifies how long (in milliseconds) to block for server selection before throwing an exception.  */
    serverSelectionTimeoutMS?: number;
    /** heartbeatFrequencyMS controls when the driver checks the state of the MongoDB deployment. Specify the interval (in milliseconds) between checks, counted from the end of the previous check until the beginning of the next one. */
    heartbeatFrequencyMS?: number;
    /** Sets the minimum heartbeat frequency. In the event that the driver has to frequently re-check a server's availability, it will wait at least this long since the previous check to avoid wasted effort. */
    minHeartbeatFrequencyMS?: number;
    /** The name of the application that created this MongoClient instance. MongoDB 3.4 and newer will print this value in the server log upon establishing each connection. It is also recorded in the slow query log and profile collections */
    appName?: string;
    /** Enables retryable reads. */
    retryReads?: boolean;
    /** Enable retryable writes. */
    retryWrites?: boolean;
    /** Allow a driver to force a Single topology type with a connection string containing one host */
    directConnection?: boolean;
    /** Instruct the driver it is connecting to a load balancer fronting a mongos like service */
    loadBalanced?: boolean;
    /**
     * The write concern w value
     * @deprecated Please use the `writeConcern` option instead
     */
    w?: W;
    /**
     * The write concern timeout
     * @deprecated Please use the `writeConcern` option instead
     */
    wtimeoutMS?: number;
    /**
     * The journal write concern
     * @deprecated Please use the `writeConcern` option instead
     */
    journal?: boolean;
    /**
     * A MongoDB WriteConcern, which describes the level of acknowledgement
     * requested from MongoDB for write operations.
     *
     * @see https://www.mongodb.com/docs/manual/reference/write-concern/
     */
    writeConcern?: WriteConcern | WriteConcernSettings;
    /** TCP Connection no delay */
    noDelay?: boolean;
    /** Force server to assign `_id` values instead of driver */
    forceServerObjectId?: boolean;
    /** A primary key factory function for generation of custom `_id` keys */
    pkFactory?: PkFactory;
    /** Enable command monitoring for this client */
    monitorCommands?: boolean;
    /** Server API version */
    serverApi?: ServerApi | ServerApiVersion;
    /**
     * Optionally enable in-use auto encryption
     *
     * @remarks
     *  Automatic encryption is an enterprise only feature that only applies to operations on a collection. Automatic encryption is not supported for operations on a database or view, and operations that are not bypassed will result in error
     *  (see [libmongocrypt: Auto Encryption Allow-List](https://github.com/mongodb/specifications/blob/master/source/client-side-encryption/client-side-encryption.md#libmongocrypt-auto-encryption-allow-list)). To bypass automatic encryption for all operations, set bypassAutoEncryption=true in AutoEncryptionOpts.
     *
     *  Automatic encryption requires the authenticated user to have the [listCollections privilege action](https://www.mongodb.com/docs/manual/reference/command/listCollections/#dbcmd.listCollections).
     *
     *  If a MongoClient with a limited connection pool size (i.e a non-zero maxPoolSize) is configured with AutoEncryptionOptions, a separate internal MongoClient is created if any of the following are true:
     *  - AutoEncryptionOptions.keyVaultClient is not passed.
     *  - AutoEncryptionOptions.bypassAutomaticEncryption is false.
     *
     * If an internal MongoClient is created, it is configured with the same options as the parent MongoClient except minPoolSize is set to 0 and AutoEncryptionOptions is omitted.
     */
    autoEncryption?: AutoEncryptionOptions;
    /**
     * Allows a wrapping driver to amend the client metadata generated by the driver to include information about the wrapping driver
     /* @deprecated - Will be made internal in a future major release.
     */
    driverInfo?: DriverInfo;
    /** Configures a Socks5 proxy host used for creating TCP connections. */
    proxyHost?: string;
    /** Configures a Socks5 proxy port used for creating TCP connections. */
    proxyPort?: number;
    /** Configures a Socks5 proxy username when the proxy in proxyHost requires username/password authentication. */
    proxyUsername?: string;
    /** Configures a Socks5 proxy password when the proxy in proxyHost requires username/password authentication. */
    proxyPassword?: string;
    /** Instructs the driver monitors to use a specific monitoring mode */
    serverMonitoringMode?: ServerMonitoringMode;
    /**
     * @public
     * Specifies the destination of the driver's logging. The default is stderr.
     */
    mongodbLogPath?: 'stderr' | 'stdout' | MongoDBLogWritable;
    /**
     * @public
     * Enable logging level per component or use `default` to control any unset components.
     */
    mongodbLogComponentSeverities?: LogComponentSeveritiesClientOptions;
    /**
     * @public
     * All BSON documents are stringified to EJSON. This controls the maximum length of those strings.
     * It is defaulted to 1000.
     */
    mongodbLogMaxDocumentLength?: number;
    /* Excluded from this release type: srvPoller */
    /* Excluded from this release type: connectionType */
    /* Excluded from this release type: __skipPingOnConnect */
}

/* Excluded from this release type: MongoClientPrivate */

/**
 * An error generated when a feature that is not enabled or allowed for the current server
 * configuration is used
 *
 *
 * @public
 * @category Error
 */
export declare class MongoCompatibilityError extends MongoAPIError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string);
    get name(): string;
}

/**
 * A representation of the credentials used by MongoDB
 * @public
 */
export declare class MongoCredentials {
    /** The username used for authentication */
    readonly username: string;
    /** The password used for authentication */
    readonly password: string;
    /** The database that the user should authenticate against */
    readonly source: string;
    /** The method used to authenticate */
    readonly mechanism: AuthMechanism;
    /** Special properties used by some types of auth mechanisms */
    readonly mechanismProperties: AuthMechanismProperties;
    constructor(options: MongoCredentialsOptions);
    /** Determines if two MongoCredentials objects are equivalent */
    equals(other: MongoCredentials): boolean;
    /**
     * If the authentication mechanism is set to "default", resolves the authMechanism
     * based on the server version and server supported sasl mechanisms.
     *
     * @param hello - A hello response from the server
     */
    resolveAuthMechanism(hello: Document | null): MongoCredentials;
    validate(): void;
    static merge(creds: MongoCredentials | undefined, options: Partial<MongoCredentialsOptions>): MongoCredentials;
}

/** @public */
export declare interface MongoCredentialsOptions {
    username?: string;
    password: string;
    source: string;
    db?: string;
    mechanism?: AuthMechanism;
    mechanismProperties: AuthMechanismProperties;
}

/**
 * @public
 * An error indicating that mongodb-client-encryption failed to auto-refresh Azure KMS credentials.
 */
export declare class MongoCryptAzureKMSRequestError extends MongoCryptError {
    /** The body of the http response that failed, if present. */
    body?: Document;
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string, body?: Document);
    get name(): string;
}

/**
 * @public
 * An error indicating that `ClientEncryption.createEncryptedCollection()` failed to create data keys
 */
export declare class MongoCryptCreateDataKeyError extends MongoCryptError {
    encryptedFields: Document;
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(encryptedFields: Document, { cause }: {
        cause: Error;
    });
    get name(): string;
}

/**
 * @public
 * An error indicating that `ClientEncryption.createEncryptedCollection()` failed to create a collection
 */
export declare class MongoCryptCreateEncryptedCollectionError extends MongoCryptError {
    encryptedFields: Document;
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(encryptedFields: Document, { cause }: {
        cause: Error;
    });
    get name(): string;
}

/* Excluded from this release type: MongocryptdManager */

/**
 * @public
 * An error indicating that something went wrong specifically with MongoDB Client Encryption
 */
export declare class MongoCryptError extends MongoError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string, options?: {
        cause?: Error;
    });
    get name(): string;
}

/**
 * @public
 *
 * An error indicating an invalid argument was provided to an encryption API.
 */
export declare class MongoCryptInvalidArgumentError extends MongoCryptError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string);
    get name(): string;
}

/** @public */
export declare class MongoCryptKMSRequestNetworkTimeoutError extends MongoCryptError {
    get name(): string;
}

/**
 * An error thrown when an attempt is made to read from a cursor that has been exhausted
 *
 * @public
 * @category Error
 */
export declare class MongoCursorExhaustedError extends MongoAPIError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message?: string);
    get name(): string;
}

/**
 * An error thrown when the user attempts to add options to a cursor that has already been
 * initialized
 *
 * @public
 * @category Error
 */
export declare class MongoCursorInUseError extends MongoAPIError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message?: string);
    get name(): string;
}

/**
 * @public
 *
 * A class representing a collection's namespace.  This class enforces (through Typescript) that
 * the `collection` portion of the namespace is defined and should only be
 * used in scenarios where this can be guaranteed.
 */
export declare class MongoDBCollectionNamespace extends MongoDBNamespace {
    collection: string;
    constructor(db: string, collection: string);
    static fromString(namespace?: string): MongoDBCollectionNamespace;
}

/**
 * @public
 *
 * A custom destination for structured logging messages.
 */
export declare interface MongoDBLogWritable {
    /**
     * This function will be called for every enabled log message.
     *
     * It can be sync or async:
     * - If it is synchronous it will block the driver from proceeding until this method returns.
     * - If it is asynchronous the driver will not await the returned promise. It will attach fulfillment handling (`.then`).
     *   If the promise rejects the logger will write an error message to stderr and stop functioning.
     *   If the promise resolves the driver proceeds to the next log message (or waits for new ones to occur).
     *
     * Tips:
     * - We recommend writing an async `write` function that _never_ rejects.
     *   Instead handle logging errors as necessary to your use case and make the write function a noop, until it can be recovered.
     * - The Log messages are structured but **subject to change** since the intended purpose is informational.
     *   Program against this defensively and err on the side of stringifying whatever is passed in to write in some form or another.
     *
     */
    write(log: Log): PromiseLike<unknown> | unknown;
}

/** @public */
export declare class MongoDBNamespace {
    db: string;
    collection?: string;
    /**
     * Create a namespace object
     *
     * @param db - database name
     * @param collection - collection name
     */
    constructor(db: string, collection?: string);
    toString(): string;
    withCollection(collection: string): MongoDBCollectionNamespace;
    static fromString(namespace?: string): MongoDBNamespace;
}

/* Excluded from this release type: MongoDBResponse */

/* Excluded from this release type: MongoDBResponseConstructor */

/**
 * An error generated when the driver fails to decompress
 * data received from the server.
 *
 * @public
 * @category Error
 */
export declare class MongoDecompressionError extends MongoRuntimeError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string);
    get name(): string;
}

/**
 * An error generated by the driver
 *
 * @public
 * @category Error
 */
export declare class MongoDriverError extends MongoError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string, options?: {
        cause?: Error;
    });
    get name(): string;
}

/**
 * @public
 * @category Error
 *
 * @privateRemarks
 * mongodb-client-encryption has a dependency on this error, it uses the constructor with a string argument
 */
export declare class MongoError extends Error {
    /* Excluded from this release type: errorLabelSet */
    get errorLabels(): string[];
    /**
     * This is a number in MongoServerError and a string in MongoDriverError
     * @privateRemarks
     * Define the type override on the subclasses when we can use the override keyword
     */
    code?: number | string;
    topologyVersion?: TopologyVersion;
    connectionGeneration?: number;
    cause?: Error;
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string, options?: {
        cause?: Error;
    });
    /* Excluded from this release type: buildErrorMessage */
    get name(): string;
    /** Legacy name for server error responses */
    get errmsg(): string;
    /**
     * Checks the error to see if it has an error label
     *
     * @param label - The error label to check for
     * @returns returns true if the error has the provided error label
     */
    hasErrorLabel(label: string): boolean;
    addErrorLabel(label: string): void;
}

/** @public */
export declare const MongoErrorLabel: Readonly<{
    readonly RetryableWriteError: "RetryableWriteError";
    readonly TransientTransactionError: "TransientTransactionError";
    readonly UnknownTransactionCommitResult: "UnknownTransactionCommitResult";
    readonly ResumableChangeStreamError: "ResumableChangeStreamError";
    readonly HandshakeError: "HandshakeError";
    readonly ResetPool: "ResetPool";
    readonly PoolRequstedRetry: "PoolRequstedRetry";
    readonly InterruptInUseConnections: "InterruptInUseConnections";
    readonly NoWritesPerformed: "NoWritesPerformed";
}>;

/** @public */
export declare type MongoErrorLabel = (typeof MongoErrorLabel)[keyof typeof MongoErrorLabel];

/**
 * An error generated when the user attempts to operate
 * on a session that has expired or has been closed.
 *
 * @public
 * @category Error
 */
export declare class MongoExpiredSessionError extends MongoAPIError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message?: string);
    get name(): string;
}

/**
 * A error generated when the user attempts to authenticate
 * via GCP, but fails.
 *
 * @public
 * @category Error
 */
export declare class MongoGCPError extends MongoOIDCError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string);
    get name(): string;
}

/**
 * An error generated when a malformed or invalid chunk is
 * encountered when reading from a GridFSStream.
 *
 * @public
 * @category Error
 */
export declare class MongoGridFSChunkError extends MongoRuntimeError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string);
    get name(): string;
}

/** An error generated when a GridFSStream operation fails to execute.
 *
 * @public
 * @category Error
 */
export declare class MongoGridFSStreamError extends MongoRuntimeError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string);
    get name(): string;
}

/**
 * An error generated when the user supplies malformed or unexpected arguments
 * or when a required argument or field is not provided.
 *
 *
 * @public
 * @category Error
 */
export declare class MongoInvalidArgumentError extends MongoAPIError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string, options?: {
        cause?: Error;
    });
    get name(): string;
}

/**
 * A error generated when the user attempts to authenticate
 * via Kerberos, but fails to connect to the Kerberos client.
 *
 * @public
 * @category Error
 */
export declare class MongoKerberosError extends MongoRuntimeError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string);
    get name(): string;
}

/** @public */
export declare const MongoLoggableComponent: Readonly<{
    readonly COMMAND: "command";
    readonly TOPOLOGY: "topology";
    readonly SERVER_SELECTION: "serverSelection";
    readonly CONNECTION: "connection";
    readonly CLIENT: "client";
}>;

/** @public */
export declare type MongoLoggableComponent = (typeof MongoLoggableComponent)[keyof typeof MongoLoggableComponent];

/* Excluded from this release type: MongoLogger */

/* Excluded from this release type: MongoLoggerEnvOptions */

/* Excluded from this release type: MongoLoggerMongoClientOptions */

/* Excluded from this release type: MongoLoggerOptions */

/**
 * An error generated when the user fails to provide authentication credentials before attempting
 * to connect to a mongo server instance.
 *
 *
 * @public
 * @category Error
 */
export declare class MongoMissingCredentialsError extends MongoAPIError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string);
    get name(): string;
}

/**
 * An error generated when a required module or dependency is not present in the local environment
 *
 * @public
 * @category Error
 */
export declare class MongoMissingDependencyError extends MongoAPIError {
    dependencyName: string;
    /** @remarks This property is assigned in the `Error` constructor. */
    cause: Error;
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string, options: {
        cause: Error;
        dependencyName: string;
    });
    get name(): string;
}

/**
 * An error indicating an issue with the network, including TCP errors and timeouts.
 * @public
 * @category Error
 */
export declare class MongoNetworkError extends MongoError {
    /* Excluded from this release type: beforeHandshake */
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string, options?: MongoNetworkErrorOptions);
    get name(): string;
}

/** @public */
export declare interface MongoNetworkErrorOptions {
    /** Indicates the timeout happened before a connection handshake completed */
    beforeHandshake?: boolean;
    cause?: Error;
}

/**
 * An error indicating a network timeout occurred
 * @public
 * @category Error
 *
 * @privateRemarks
 * mongodb-client-encryption has a dependency on this error with an instanceof check
 */
export declare class MongoNetworkTimeoutError extends MongoNetworkError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string, options?: MongoNetworkErrorOptions);
    get name(): string;
}

/**
 * An error thrown when the user attempts to operate on a database or collection through a MongoClient
 * that has not yet successfully called the "connect" method
 *
 * @public
 * @category Error
 */
export declare class MongoNotConnectedError extends MongoAPIError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string);
    get name(): string;
}

/**
 * A error generated when the user attempts to authenticate
 * via OIDC callbacks, but fails.
 *
 * @public
 * @category Error
 */
export declare class MongoOIDCError extends MongoRuntimeError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string);
    get name(): string;
}

/**
 * @public
 * @category Error
 *
 * The `MongoOperationTimeoutError` class represents an error that occurs when an operation could not be completed within the specified `timeoutMS`.
 * It is generated by the driver in support of the "client side operation timeout" feature so inherits from `MongoDriverError`.
 * When `timeoutMS` is enabled `MongoServerError`s relating to `MaxTimeExpired` errors will be converted to `MongoOperationTimeoutError`
 *
 * @example
 * ```ts
 * try {
 *   await blogs.insertOne(blogPost, { timeoutMS: 60_000 })
 * } catch (error) {
 *   if (error instanceof MongoOperationTimeoutError) {
 *     console.log(`Oh no! writer's block!`, error);
 *   }
 * }
 * ```
 */
export declare class MongoOperationTimeoutError extends MongoDriverError {
    get name(): string;
}

/**
 * Parsed Mongo Client Options.
 *
 * User supplied options are documented by `MongoClientOptions`.
 *
 * **NOTE:** The client's options parsing is subject to change to support new features.
 * This type is provided to aid with inspection of options after parsing, it should not be relied upon programmatically.
 *
 * Options are sourced from:
 * - connection string
 * - options object passed to the MongoClient constructor
 * - file system (ex. tls settings)
 * - environment variables
 * - DNS SRV records and TXT records
 *
 * Not all options may be present after client construction as some are obtained from asynchronous operations.
 *
 * @public
 */
export declare interface MongoOptions extends Required<Pick<MongoClientOptions, 'autoEncryption' | 'connectTimeoutMS' | 'directConnection' | 'driverInfo' | 'forceServerObjectId' | 'minHeartbeatFrequencyMS' | 'heartbeatFrequencyMS' | 'localThresholdMS' | 'maxConnecting' | 'maxIdleTimeMS' | 'maxPoolSize' | 'minPoolSize' | 'monitorCommands' | 'noDelay' | 'pkFactory' | 'raw' | 'replicaSet' | 'retryReads' | 'retryWrites' | 'serverSelectionTimeoutMS' | 'socketTimeoutMS' | 'srvMaxHosts' | 'srvServiceName' | 'tlsAllowInvalidCertificates' | 'tlsAllowInvalidHostnames' | 'tlsInsecure' | 'waitQueueTimeoutMS' | 'zlibCompressionLevel'>>, SupportedNodeConnectionOptions {
    appName?: string;
    hosts: HostAddress[];
    srvHost?: string;
    credentials?: MongoCredentials;
    readPreference: ReadPreference;
    readConcern: ReadConcern;
    loadBalanced: boolean;
    directConnection: boolean;
    serverApi: ServerApi;
    compressors: CompressorName[];
    writeConcern: WriteConcern;
    dbName: string;
    /** @deprecated - Will be made internal in a future major release. */
    metadata: ClientMetadata;
    /** @deprecated - Will be made internal in a future major release. */
    extendedMetadata: Promise<Document>;
    /** @deprecated - Will be made internal in a future major release. */
    additionalDriverInfo: DriverInfo[];
    /* Excluded from this release type: autoEncrypter */
    /* Excluded from this release type: tokenCache */
    proxyHost?: string;
    proxyPort?: number;
    proxyUsername?: string;
    proxyPassword?: string;
    serverMonitoringMode: ServerMonitoringMode;
    /* Excluded from this release type: connectionType */
    /* Excluded from this release type: authProviders */
    /* Excluded from this release type: encrypter */
    /* Excluded from this release type: userSpecifiedAuthSource */
    /* Excluded from this release type: userSpecifiedReplicaSet */
    /**
     * # NOTE ABOUT TLS Options
     *
     * If `tls` is provided as an option, it is equivalent to setting the `ssl` option.
     *
     * NodeJS native TLS options are passed through to the socket and retain their original types.
     *
     * ### Additional options:
     *
     * | nodejs native option  | driver spec equivalent option name            | driver option type |
     * |:----------------------|:----------------------------------------------|:-------------------|
     * | `ca`                  | `tlsCAFile`                                   | `string`           |
     * | `crl`                 | `tlsCRLFile`                                  | `string`           |
     * | `cert`                | `tlsCertificateKeyFile`                       | `string`           |
     * | `key`                 | `tlsCertificateKeyFile`                       | `string`           |
     * | `passphrase`          | `tlsCertificateKeyFilePassword`               | `string`           |
     * | `rejectUnauthorized`  | `tlsAllowInvalidCertificates`                 | `boolean`          |
     * | `checkServerIdentity` | `tlsAllowInvalidHostnames`                    | `boolean`          |
     * | see note below        | `tlsInsecure`                                 | `boolean`          |
     *
     * If `tlsInsecure` is set to `true`, then it will set the node native options `checkServerIdentity`
     * to a no-op and `rejectUnauthorized` to `false`.
     *
     * If `tlsInsecure` is set to `false`, then it will set the node native options `checkServerIdentity`
     * to a no-op and `rejectUnauthorized` to the inverse value of `tlsAllowInvalidCertificates`. If
     * `tlsAllowInvalidCertificates` is not set, then `rejectUnauthorized` will be set to `true`.
     *
     * ### Note on `tlsCAFile`, `tlsCertificateKeyFile` and `tlsCRLFile`
     *
     * The files specified by the paths passed in to the `tlsCAFile`, `tlsCertificateKeyFile` and `tlsCRLFile`
     * fields are read lazily on the first call to `MongoClient.connect`. Once these files have been read and
     * the `ca`, `cert`, `crl` and `key` fields are populated, they will not be read again on subsequent calls to
     * `MongoClient.connect`. As a result, until the first call to `MongoClient.connect`, the `ca`,
     * `cert`, `crl` and `key` fields will be undefined.
     */
    tls: boolean;
    tlsCAFile?: string;
    tlsCRLFile?: string;
    tlsCertificateKeyFile?: string;
    /* Excluded from this release type: mongoLoggerOptions */
    /* Excluded from this release type: mongodbLogPath */
    timeoutMS?: number;
    /* Excluded from this release type: __skipPingOnConnect */
}

/**
 * An error used when attempting to parse a value (like a connection string)
 * @public
 * @category Error
 */
export declare class MongoParseError extends MongoDriverError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string);
    get name(): string;
}

/**
 * An error generated when the driver encounters unexpected input
 * or reaches an unexpected/invalid internal state.
 *
 * @privateRemarks
 * Should **never** be directly instantiated.
 *
 * @public
 * @category Error
 */
export declare class MongoRuntimeError extends MongoDriverError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string, options?: {
        cause?: Error;
    });
    get name(): string;
}

/**
 * An error generated when an attempt is made to operate
 * on a closed/closing server.
 *
 * @public
 * @category Error
 */
export declare class MongoServerClosedError extends MongoAPIError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message?: string);
    get name(): string;
}

/**
 * An error coming from the mongo server
 *
 * @public
 * @category Error
 */
export declare class MongoServerError extends MongoError {
    /** Raw error result document returned by server. */
    errorResponse: ErrorDescription;
    codeName?: string;
    writeConcernError?: Document;
    errInfo?: Document;
    ok?: number;
    [key: string]: any;
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: ErrorDescription);
    get name(): string;
}

/**
 * An error signifying a client-side server selection error
 * @public
 * @category Error
 */
export declare class MongoServerSelectionError extends MongoSystemError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string, reason: TopologyDescription);
    get name(): string;
}

/**
 * An error generated when a primary server is marked stale, never directly thrown
 *
 * @public
 * @category Error
 */
export declare class MongoStalePrimaryError extends MongoRuntimeError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string, options?: {
        cause?: Error;
    });
    get name(): string;
}

/**
 * An error signifying a general system issue
 * @public
 * @category Error
 */
export declare class MongoSystemError extends MongoError {
    /** An optional reason context, such as an error saved during flow of monitoring and selecting servers */
    reason?: TopologyDescription;
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string, reason: TopologyDescription);
    get name(): string;
}

/**
 * An error thrown when the user calls a function or method not supported on a tailable cursor
 *
 * @public
 * @category Error
 */
export declare class MongoTailableCursorError extends MongoAPIError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message?: string);
    get name(): string;
}

/**
 * An error generated when an attempt is made to operate on a
 * dropped, or otherwise unavailable, database.
 *
 * @public
 * @category Error
 */
export declare class MongoTopologyClosedError extends MongoAPIError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message?: string);
    get name(): string;
}

/**
 * An error generated when the user makes a mistake in the usage of transactions.
 * (e.g. attempting to commit a transaction with a readPreference other than primary)
 *
 * @public
 * @category Error
 */
export declare class MongoTransactionError extends MongoAPIError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string);
    get name(): string;
}

/**
 * An error generated when a **parsable** unexpected response comes from the server.
 * This is generally an error where the driver in a state expecting a certain behavior to occur in
 * the next message from MongoDB but it receives something else.
 * This error **does not** represent an issue with wire message formatting.
 *
 * #### Example
 * When an operation fails, it is the driver's job to retry it. It must perform serverSelection
 * again to make sure that it attempts the operation against a server in a good state. If server
 * selection returns a server that does not support retryable operations, this error is used.
 * This scenario is unlikely as retryable support would also have been determined on the first attempt
 * but it is possible the state change could report a selectable server that does not support retries.
 *
 * @public
 * @category Error
 */
export declare class MongoUnexpectedServerResponseError extends MongoRuntimeError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message: string, options?: {
        cause?: Error;
    });
    get name(): string;
}

/**
 * An error thrown when the server reports a writeConcernError
 * @public
 * @category Error
 */
export declare class MongoWriteConcernError extends MongoServerError {
    /** The result document */
    result: Document;
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(result: WriteConcernErrorResult);
    get name(): string;
}

/* Excluded from this release type: Monitor */

/** @public */
export declare type MonitorEvents = {
    serverHeartbeatStarted(event: ServerHeartbeatStartedEvent): void;
    serverHeartbeatSucceeded(event: ServerHeartbeatSucceededEvent): void;
    serverHeartbeatFailed(event: ServerHeartbeatFailedEvent): void;
    resetServer(error?: MongoError): void;
    resetConnectionPool(): void;
    close(): void;
} & EventEmitterWithState;

/* Excluded from this release type: MonitorInterval */

/* Excluded from this release type: MonitorIntervalOptions */

/** @public */
export declare interface MonitorOptions extends Omit<ConnectionOptions, 'id' | 'generation' | 'hostAddress'> {
    connectTimeoutMS: number;
    heartbeatFrequencyMS: number;
    minHeartbeatFrequencyMS: number;
    serverMonitoringMode: ServerMonitoringMode;
}

/* Excluded from this release type: MonitorPrivate */

/**
 * @public
 * returns tuple of strings (keys to be joined on '.') that represent every path into a schema
 * https://www.mongodb.com/docs/manual/tutorial/query-embedded-documents/
 *
 * @remarks
 * Through testing we determined that a depth of 8 is safe for the typescript compiler
 * and provides reasonable compilation times. This number is otherwise not special and
 * should be changed if issues are found with this level of checking. Beyond this
 * depth any helpers that make use of NestedPaths should devolve to not asserting any
 * type safety on the input.
 */
export declare type NestedPaths<Type, Depth extends number[]> = Depth['length'] extends 8 ? [] : Type extends string | number | bigint | boolean | Date | RegExp | Buffer | Uint8Array | ((...args: any[]) => any) | {
    _bsontype: string;
} ? [] : Type extends ReadonlyArray<infer ArrayType> ? [] | [number, ...NestedPaths<ArrayType, [...Depth, 1]>] : Type extends Map<string, any> ? [string] : Type extends object ? {
    [Key in Extract<keyof Type, string>]: Type[Key] extends Type ? [Key] : Type extends Type[Key] ? [Key] : Type[Key] extends ReadonlyArray<infer ArrayType> ? Type extends ArrayType ? [Key] : ArrayType extends Type ? [Key] : [
    Key,
    ...NestedPaths<Type[Key], [...Depth, 1]>
    ] : // child is not structured the same as the parent
    [
    Key,
    ...NestedPaths<Type[Key], [...Depth, 1]>
    ] | [Key];
}[Extract<keyof Type, string>] : [];

/**
 * @public
 * returns keys (strings) for every path into a schema with a value of type
 * https://www.mongodb.com/docs/manual/tutorial/query-embedded-documents/
 */
export declare type NestedPathsOfType<TSchema, Type> = KeysOfAType<{
    [Property in Join<NestedPaths<TSchema, []>, '.'>]: PropertyType<TSchema, Property>;
}, Type>;

/**
 * @public
 * A type that extends Document but forbids anything that "looks like" an object id.
 */
export declare type NonObjectIdLikeDocument = {
    [key in keyof ObjectIdLike]?: never;
} & Document;

/** It avoids using fields with not acceptable types @public */
export declare type NotAcceptedFields<TSchema, FieldType> = {
    readonly [key in KeysOfOtherType<TSchema, FieldType>]?: never;
};

/** @public */
export declare type NumericType = IntegerType | Decimal128 | Double;

export { ObjectId }

/**
 * The signature of the human or machine callback functions.
 * @public
 */
export declare type OIDCCallbackFunction = (params: OIDCCallbackParams) => Promise<OIDCResponse>;

/**
 * The parameters that the driver provides to the user supplied
 * human or machine callback.
 *
 * The version number is used to communicate callback API changes that are not breaking but that
 * users may want to know about and review their implementation. Users may wish to check the version
 * number and throw an error if their expected version number and the one provided do not match.
 * @public
 */
export declare interface OIDCCallbackParams {
    /** Optional username. */
    username?: string;
    /** The context in which to timeout the OIDC callback. */
    timeoutContext: AbortSignal;
    /** The current OIDC API version. */
    version: 1;
    /** The IdP information returned from the server. */
    idpInfo?: IdPInfo;
    /** The refresh token, if applicable, to be used by the callback to request a new token from the issuer. */
    refreshToken?: string;
    /** The token audience for GCP and Azure. */
    tokenAudience?: string;
}

/**
 * The response required to be returned from the machine or
 * human callback workflows' callback.
 * @public
 */
export declare interface OIDCResponse {
    /** The OIDC access token. */
    accessToken: string;
    /** The time when the access token expires. For future use. */
    expiresInSeconds?: number;
    /** The refresh token, if applicable, to be used by the callback to request a new token from the issuer. */
    refreshToken?: string;
}

/* Excluded from this release type: OnDemandDocument */

/* Excluded from this release type: OnDemandDocumentDeserializeOptions */

/** @public */
export declare type OneOrMore<T> = T | ReadonlyArray<T>;

/** @public */
export declare type OnlyFieldsOfType<TSchema, FieldType = any, AssignableType = FieldType> = IsAny<TSchema[keyof TSchema], AssignableType extends FieldType ? Record<string, FieldType> : Record<string, AssignableType>, AcceptedFields<TSchema, FieldType, AssignableType> & NotAcceptedFields<TSchema, FieldType> & Record<string, AssignableType>>;

/* Excluded from this release type: OpCompressedRequest */

/* Excluded from this release type: OpCompressesRequestOptions */

/** @public */
export declare interface OperationOptions extends BSONSerializeOptions {
    /** Specify ClientSession for this command */
    session?: ClientSession;
    willRetryWrite?: boolean;
    /** The preferred read preference (ReadPreference.primary, ReadPreference.primary_preferred, ReadPreference.secondary, ReadPreference.secondary_preferred, ReadPreference.nearest). */
    readPreference?: ReadPreferenceLike;
    /* Excluded from this release type: bypassPinningCheck */
    /* Excluded from this release type: omitMaxTimeMS */
    /**
     * @experimental
     * Specifies the time an operation will run until it throws a timeout error
     */
    timeoutMS?: number;
}

/* Excluded from this release type: OperationParent */

/**
 * Represents a specific point in time on a server. Can be retrieved by using `db.command()`
 * @public
 * @see https://www.mongodb.com/docs/manual/reference/method/db.runCommand/#response
 */
export declare type OperationTime = Timestamp;

/* Excluded from this release type: OpMsgOptions */

/* Excluded from this release type: OpMsgRequest */

/* Excluded from this release type: OpMsgResponse */

/* Excluded from this release type: OpQueryOptions */

/* Excluded from this release type: OpQueryRequest */

/* Excluded from this release type: OpReply */

/**
 * Add an optional _id field to an object shaped type
 * @public
 */
export declare type OptionalId<TSchema> = EnhancedOmit<TSchema, '_id'> & {
    _id?: InferIdType<TSchema>;
};

/**
 * Adds an optional _id field to an object shaped type, unless the _id field is required on that type.
 * In the case _id is required, this method continues to require_id.
 *
 * @public
 *
 * @privateRemarks
 * `ObjectId extends TSchema['_id']` is a confusing ordering at first glance. Rather than ask
 * `TSchema['_id'] extends ObjectId` which translated to "Is the _id property ObjectId?"
 * we instead ask "Does ObjectId look like (have the same shape) as the _id?"
 */
export declare type OptionalUnlessRequiredId<TSchema> = TSchema extends {
    _id: any;
} ? TSchema : OptionalId<TSchema>;

/** @public */
export declare class OrderedBulkOperation extends BulkOperationBase {
    /* Excluded from this release type: __constructor */
    addToOperationsList(batchType: BatchType, document: Document | UpdateStatement | DeleteStatement): this;
}

/** @public */
export declare interface PkFactory {
    createPk(): any;
}

/* Excluded from this release type: PoolState */

/** @public */
export declare const ProfilingLevel: Readonly<{
    readonly off: "off";
    readonly slowOnly: "slow_only";
    readonly all: "all";
}>;

/** @public */
export declare type ProfilingLevel = (typeof ProfilingLevel)[keyof typeof ProfilingLevel];

/** @public */
export declare type ProfilingLevelOptions = Omit<CommandOperationOptions, 'rawData'>;

/** @public */
export declare type PropertyType<Type, Property extends string> = string extends Property ? unknown : Property extends keyof Type ? Type[Property] : Property extends `${number}` ? Type extends ReadonlyArray<infer ArrayType> ? ArrayType : unknown : Property extends `${infer Key}.${infer Rest}` ? Key extends `${number}` ? Type extends ReadonlyArray<infer ArrayType> ? PropertyType<ArrayType, Rest> : unknown : Key extends keyof Type ? Type[Key] extends Map<string, infer MapType> ? MapType : PropertyType<Type[Key], Rest> : unknown : unknown;

/** @public */
export declare interface ProxyOptions {
    proxyHost?: string;
    proxyPort?: number;
    proxyUsername?: string;
    proxyPassword?: string;
}

/** @public */
export declare type PullAllOperator<TSchema> = ({
    readonly [key in KeysOfAType<TSchema, ReadonlyArray<any>>]?: TSchema[key];
} & NotAcceptedFields<TSchema, ReadonlyArray<any>>) & {
    readonly [key: string]: ReadonlyArray<any>;
};

/** @public */
export declare type PullOperator<TSchema> = ({
    readonly [key in KeysOfAType<TSchema, ReadonlyArray<any>>]?: Partial<Flatten<TSchema[key]>> | FilterOperations<Flatten<TSchema[key]>>;
} & NotAcceptedFields<TSchema, ReadonlyArray<any>>) & {
    readonly [key: string]: FilterOperators<any> | any;
};

/** @public */
export declare type PushOperator<TSchema> = ({
    readonly [key in KeysOfAType<TSchema, ReadonlyArray<any>>]?: Flatten<TSchema[key]> | ArrayOperator<Array<Flatten<TSchema[key]>>>;
} & NotAcceptedFields<TSchema, ReadonlyArray<any>>) & {
    readonly [key: string]: ArrayOperator<any> | any;
};

/**
 * @public
 * RangeOptions specifies index options for a Queryable Encryption field supporting "range" queries.
 * min, max, sparsity, trimFactor and range must match the values set in the encryptedFields of the destination collection.
 * For double and decimal128, min/max/precision must all be set, or all be unset.
 */
export declare interface RangeOptions {
    /** min is the minimum value for the encrypted index. Required if precision is set. */
    min?: any;
    /** max is the minimum value for the encrypted index. Required if precision is set. */
    max?: any;
    /** sparsity may be used to tune performance. must be non-negative. When omitted, a default value is used. */
    sparsity?: Long | bigint;
    /** trimFactor may be used to tune performance. must be non-negative. When omitted, a default value is used. */
    trimFactor?: Int32 | number;
    precision?: number;
}

/**
 * The MongoDB ReadConcern, which allows for control of the consistency and isolation properties
 * of the data read from replica sets and replica set shards.
 * @public
 *
 * @see https://www.mongodb.com/docs/manual/reference/read-concern/index.html
 */
export declare class ReadConcern {
    level: ReadConcernLevel | string;
    /** Constructs a ReadConcern from the read concern level.*/
    constructor(level: ReadConcernLevel);
    /**
     * Construct a ReadConcern given an options object.
     *
     * @param options - The options object from which to extract the write concern.
     */
    static fromOptions(options?: {
        readConcern?: ReadConcernLike;
        level?: ReadConcernLevel;
    }): ReadConcern | undefined;
    static get MAJORITY(): 'majority';
    static get AVAILABLE(): 'available';
    static get LINEARIZABLE(): 'linearizable';
    static get SNAPSHOT(): 'snapshot';
    toJSON(): Document;
}

/** @public */
export declare const ReadConcernLevel: Readonly<{
    readonly local: "local";
    readonly majority: "majority";
    readonly linearizable: "linearizable";
    readonly available: "available";
    readonly snapshot: "snapshot";
}>;

/** @public */
export declare type ReadConcernLevel = (typeof ReadConcernLevel)[keyof typeof ReadConcernLevel];

/** @public */
export declare type ReadConcernLike = ReadConcern | {
    level: ReadConcernLevel;
} | ReadConcernLevel;

/**
 * The **ReadPreference** class is a class that represents a MongoDB ReadPreference and is
 * used to construct connections.
 * @public
 *
 * @see https://www.mongodb.com/docs/manual/core/read-preference/
 */
export declare class ReadPreference {
    mode: ReadPreferenceMode;
    tags?: TagSet[];
    hedge?: HedgeOptions;
    maxStalenessSeconds?: number;
    /**
     * @deprecated This will be removed as dead code in the next major version.
     */
    minWireVersion?: number;
    static PRIMARY: "primary";
    static PRIMARY_PREFERRED: "primaryPreferred";
    static SECONDARY: "secondary";
    static SECONDARY_PREFERRED: "secondaryPreferred";
    static NEAREST: "nearest";
    static primary: ReadPreference;
    static primaryPreferred: ReadPreference;
    static secondary: ReadPreference;
    static secondaryPreferred: ReadPreference;
    static nearest: ReadPreference;
    /**
     * @param mode - A string describing the read preference mode (primary|primaryPreferred|secondary|secondaryPreferred|nearest)
     * @param tags - A tag set used to target reads to members with the specified tag(s). tagSet is not available if using read preference mode primary.
     * @param options - Additional read preference options
     */
    constructor(mode: ReadPreferenceMode, tags?: TagSet[], options?: ReadPreferenceOptions);
    get preference(): ReadPreferenceMode;
    static fromString(mode: string): ReadPreference;
    /**
     * Construct a ReadPreference given an options object.
     *
     * @param options - The options object from which to extract the read preference.
     */
    static fromOptions(options?: ReadPreferenceFromOptions): ReadPreference | undefined;
    /**
     * Replaces options.readPreference with a ReadPreference instance
     */
    static translate(options: ReadPreferenceLikeOptions): ReadPreferenceLikeOptions;
    /**
     * Validate if a mode is legal
     *
     * @param mode - The string representing the read preference mode.
     */
    static isValid(mode: string): boolean;
    /**
     * Validate if a mode is legal
     *
     * @param mode - The string representing the read preference mode.
     */
    isValid(mode?: string): boolean;
    /**
     * Indicates that this readPreference needs the "SecondaryOk" bit when sent over the wire
     * @see https://www.mongodb.com/docs/manual/reference/mongodb-wire-protocol/#op-query
     */
    secondaryOk(): boolean;
    /**
     * Check if the two ReadPreferences are equivalent
     *
     * @param readPreference - The read preference with which to check equality
     */
    equals(readPreference: ReadPreference): boolean;
    /** Return JSON representation */
    toJSON(): Document;
}

/** @public */
export declare interface ReadPreferenceFromOptions extends ReadPreferenceLikeOptions {
    session?: ClientSession;
    readPreferenceTags?: TagSet[];
    hedge?: HedgeOptions;
}

/** @public */
export declare type ReadPreferenceLike = ReadPreference | ReadPreferenceMode;

/** @public */
export declare interface ReadPreferenceLikeOptions extends ReadPreferenceOptions {
    readPreference?: ReadPreferenceLike | {
        mode?: ReadPreferenceMode;
        preference?: ReadPreferenceMode;
        tags?: TagSet[];
        maxStalenessSeconds?: number;
    };
}

/** @public */
export declare const ReadPreferenceMode: Readonly<{
    readonly primary: "primary";
    readonly primaryPreferred: "primaryPreferred";
    readonly secondary: "secondary";
    readonly secondaryPreferred: "secondaryPreferred";
    readonly nearest: "nearest";
}>;

/** @public */
export declare type ReadPreferenceMode = (typeof ReadPreferenceMode)[keyof typeof ReadPreferenceMode];

/** @public */
export declare interface ReadPreferenceOptions {
    /** Max secondary read staleness in seconds, Minimum value is 90 seconds.*/
    maxStalenessSeconds?: number;
    /** Server mode in which the same query is dispatched in parallel to multiple replica set members. */
    hedge?: HedgeOptions;
}

/** @public */
export declare type RegExpOrString<T> = T extends string ? BSONRegExp | RegExp | T : T;

/** @public */
export declare type RemoveUserOptions = Omit<CommandOperationOptions, 'rawData'>;

/** @public */
export declare interface RenameOptions extends Omit<CommandOperationOptions, 'rawData'> {
    /** Drop the target name collection if it previously exists. */
    dropTarget?: boolean;
    /** Unclear */
    new_collection?: boolean;
}

/** @public */
export declare interface ReplaceOneModel<TSchema extends Document = Document> {
    /** The filter that specifies which document to replace. In the case of multiple matches, the first document matched is replaced. */
    filter: Filter<TSchema>;
    /** The document with which to replace the matched document. */
    replacement: WithoutId<TSchema>;
    /** Specifies a collation. */
    collation?: CollationOptions;
    /** The index to use. If specified, then the query system will only consider plans using the hinted index. */
    hint?: Hint;
    /** When true, creates a new document if no document matches the query. */
    upsert?: boolean;
    /** Specifies the sort order for the documents matched by the filter. */
    sort?: Sort;
}

/** @public */
export declare interface ReplaceOptions extends CommandOperationOptions {
    /** If true, allows the write to opt-out of document level validation */
    bypassDocumentValidation?: boolean;
    /** Specifies a collation */
    collation?: CollationOptions;
    /** Specify that the update query should only consider plans using the hinted index */
    hint?: string | Document;
    /** When true, creates a new document if no document matches the query */
    upsert?: boolean;
    /** Map of parameter names and values that can be accessed using $$var (requires MongoDB 5.0). */
    let?: Document;
    /** Specifies the sort order for the documents matched by the filter. */
    sort?: Sort;
}

/**
 * @public
 * @deprecated Please use the ChangeStreamCursorOptions type instead.
 */
export declare interface ResumeOptions {
    startAtOperationTime?: Timestamp;
    batchSize?: number;
    maxAwaitTimeMS?: number;
    collation?: CollationOptions;
    readPreference?: ReadPreference;
    resumeAfter?: ResumeToken;
    startAfter?: ResumeToken;
    fullDocument?: string;
}

/**
 * Represents the logical starting point for a new ChangeStream or resuming a ChangeStream on the server.
 * @see https://www.mongodb.com/docs/manual/changeStreams/#std-label-change-stream-resume
 * @public
 */
export declare type ResumeToken = unknown;

/** @public */
export declare const ReturnDocument: Readonly<{
    readonly BEFORE: "before";
    readonly AFTER: "after";
}>;

/** @public */
export declare type ReturnDocument = (typeof ReturnDocument)[keyof typeof ReturnDocument];

/** @public */
export declare interface RootFilterOperators<TSchema> extends Document {
    $and?: Filter<TSchema>[];
    $nor?: Filter<TSchema>[];
    $or?: Filter<TSchema>[];
    $text?: {
        $search: string;
        $language?: string;
        $caseSensitive?: boolean;
        $diacriticSensitive?: boolean;
    };
    $where?: string | ((this: TSchema) => boolean);
    $comment?: string | Document;
}

/* Excluded from this release type: RTTPinger */

/* Excluded from this release type: RTTPingerOptions */

/* Excluded from this release type: RTTSampler */

/** @public */
export declare class RunCommandCursor extends AbstractCursor {
    readonly command: Readonly<Record<string, any>>;
    readonly getMoreOptions: {
        comment?: any;
        maxAwaitTimeMS?: number;
        batchSize?: number;
    };
    /**
     * Controls the `getMore.comment` field
     * @param comment - any BSON value
     */
    setComment(comment: any): this;
    /**
     * Controls the `getMore.maxTimeMS` field. Only valid when cursor is tailable await
     * @param maxTimeMS - the number of milliseconds to wait for new data
     */
    setMaxTimeMS(maxTimeMS: number): this;
    /**
     * Controls the `getMore.batchSize` field
     * @param batchSize - the number documents to return in the `nextBatch`
     */
    setBatchSize(batchSize: number): this;
    /** Unsupported for RunCommandCursor */
    clone(): never;
    /** Unsupported for RunCommandCursor: readConcern must be configured directly on command document */
    withReadConcern(_: ReadConcernLike): never;
    /** Unsupported for RunCommandCursor: various cursor flags must be configured directly on command document */
    addCursorFlag(_: string, __: boolean): never;
    /**
     * Unsupported for RunCommandCursor: maxTimeMS must be configured directly on command document
     */
    maxTimeMS(_: number): never;
    /** Unsupported for RunCommandCursor: batchSize must be configured directly on command document */
    batchSize(_: number): never;
    /* Excluded from this release type: db */
    /* Excluded from this release type: __constructor */
    /* Excluded from this release type: _initialize */
    /* Excluded from this release type: getMore */
}

/** @public */
export declare type RunCommandOptions = {
    /** Specify ClientSession for this command */
    session?: ClientSession;
    /** The read preference */
    readPreference?: ReadPreferenceLike;
    /**
     * @experimental
     * Specifies the time an operation will run until it throws a timeout error
     */
    timeoutMS?: number;
    /* Excluded from this release type: omitMaxTimeMS */
    /* Excluded from this release type: bypassPinningCheck */
} & BSONSerializeOptions & Abortable;

/** @public */
export declare type RunCursorCommandOptions = {
    readPreference?: ReadPreferenceLike;
    session?: ClientSession;
    /**
     * @experimental
     * Specifies the time an operation will run until it throws a timeout error. Note that if
     * `maxTimeMS` is provided in the command in addition to setting `timeoutMS` in the options, then
     * the original value of `maxTimeMS` will be overwritten.
     */
    timeoutMS?: number;
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
    timeoutMode?: CursorTimeoutMode;
    tailable?: boolean;
    awaitData?: boolean;
} & BSONSerializeOptions;

/** @public */
export declare type SchemaMember<T, V> = {
    [P in keyof T]?: V;
} | {
    [key: string]: V;
};

/**
 * @public
 */
export declare interface SearchIndexDescription extends Document {
    /** The name of the index. */
    name?: string;
    /** The index definition. */
    definition: Document;
    /** The type of the index.  Currently `search` or `vectorSearch` are supported. */
    type?: string;
}

/** @public */
export declare interface SelectServerOptions {
    readPreference?: ReadPreferenceLike;
    /** How long to block for server selection before throwing an error */
    serverSelectionTimeoutMS?: number;
    session?: ClientSession;
    operationName: string;
    previousServer?: ServerDescription;
    /* Excluded from this release type: timeoutContext */
}

export { serialize }

/* Excluded from this release type: Server */

/* Excluded from this release type: SERVER_CLOSED */

/* Excluded from this release type: SERVER_DESCRIPTION_CHANGED */

/* Excluded from this release type: SERVER_HEARTBEAT_FAILED */

/* Excluded from this release type: SERVER_HEARTBEAT_STARTED */

/* Excluded from this release type: SERVER_HEARTBEAT_SUCCEEDED */

/* Excluded from this release type: SERVER_OPENING */

/* Excluded from this release type: SERVER_SELECTION_FAILED */

/* Excluded from this release type: SERVER_SELECTION_STARTED */

/* Excluded from this release type: SERVER_SELECTION_SUCCEEDED */

/** @public */
export declare interface ServerApi {
    version: ServerApiVersion;
    strict?: boolean;
    deprecationErrors?: boolean;
}

/** @public */
export declare const ServerApiVersion: Readonly<{
    readonly v1: "1";
}>;

/** @public */
export declare type ServerApiVersion = (typeof ServerApiVersion)[keyof typeof ServerApiVersion];

/**
 * @public
 * @deprecated This class will be removed as dead code in the next major version.
 */
export declare class ServerCapabilities {
    maxWireVersion: number;
    minWireVersion: number;
    constructor(hello: Document);
    get hasAggregationCursor(): boolean;
    get hasWriteCommands(): boolean;
    get hasTextSearch(): boolean;
    get hasAuthCommands(): boolean;
    get hasListCollectionsCommand(): boolean;
    get hasListIndexesCommand(): boolean;
    get supportsSnapshotReads(): boolean;
    get commandsTakeWriteConcern(): boolean;
    get commandsTakeCollation(): boolean;
}

/**
 * Emitted when server is closed.
 * @public
 * @category Event
 */
export declare class ServerClosedEvent {
    /** A unique identifier for the topology */
    topologyId: number;
    /** The address (host/port pair) of the server */
    address: string;
    /* Excluded from this release type: name */
    /* Excluded from this release type: __constructor */
}

/* Excluded from this release type: ServerCommandOptions */

/**
 * The client's view of a single server, based on the most recent hello outcome.
 *
 * Internal type, not meant to be directly instantiated
 * @public
 */
export declare class ServerDescription {
    address: string;
    type: ServerType;
    hosts: string[];
    passives: string[];
    arbiters: string[];
    tags: TagSet;
    error: MongoError | null;
    topologyVersion: TopologyVersion | null;
    minWireVersion: number;
    maxWireVersion: number;
    roundTripTime: number;
    /** The minimum measurement of the last 10 measurements of roundTripTime that have been collected */
    minRoundTripTime: number;
    lastUpdateTime: number;
    lastWriteDate: number;
    me: string | null;
    primary: string | null;
    setName: string | null;
    setVersion: number | null;
    electionId: ObjectId | null;
    logicalSessionTimeoutMinutes: number | null;
    /** The max message size in bytes for the server. */
    maxMessageSizeBytes: number | null;
    /** The max number of writes in a bulk write command. */
    maxWriteBatchSize: number | null;
    /** The max bson object size. */
    maxBsonObjectSize: number | null;
    /** Indicates server is a mongocryptd instance. */
    iscryptd: boolean;
    $clusterTime?: ClusterTime;
    /* Excluded from this release type: __constructor */
    get hostAddress(): HostAddress;
    get allHosts(): string[];
    /** Is this server available for reads*/
    get isReadable(): boolean;
    /** Is this server data bearing */
    get isDataBearing(): boolean;
    /** Is this server available for writes */
    get isWritable(): boolean;
    get host(): string;
    get port(): number;
    /**
     * Determines if another `ServerDescription` is equal to this one per the rules defined in the SDAM specification.
     * @see https://github.com/mongodb/specifications/blob/master/source/server-discovery-and-monitoring/server-discovery-and-monitoring.md
     */
    equals(other?: ServerDescription | null): boolean;
}

/**
 * Emitted when server description changes, but does NOT include changes to the RTT.
 * @public
 * @category Event
 */
export declare class ServerDescriptionChangedEvent {
    /** A unique identifier for the topology */
    topologyId: number;
    /** The address (host/port pair) of the server */
    address: string;
    /** The previous server description */
    previousDescription: ServerDescription;
    /** The new server description */
    newDescription: ServerDescription;
    name: "serverDescriptionChanged";
    /* Excluded from this release type: __constructor */
}

/* Excluded from this release type: ServerDescriptionOptions */

/** @public */
export declare type ServerEvents = {
    serverHeartbeatStarted(event: ServerHeartbeatStartedEvent): void;
    serverHeartbeatSucceeded(event: ServerHeartbeatSucceededEvent): void;
    serverHeartbeatFailed(event: ServerHeartbeatFailedEvent): void;
    /* Excluded from this release type: connect */
    descriptionReceived(description: ServerDescription): void;
    closed(): void;
    ended(): void;
} & ConnectionPoolEvents & EventEmitterWithState;

/**
 * Emitted when the server monitor’s hello fails, either with an “ok: 0” or a socket exception.
 * @public
 * @category Event
 */
export declare class ServerHeartbeatFailedEvent {
    /** The connection id for the command */
    connectionId: string;
    /** The execution time of the event in ms */
    duration: number;
    /** The command failure */
    failure: Error;
    /** Is true when using the streaming protocol */
    awaited: boolean;
    /* Excluded from this release type: name */
    /* Excluded from this release type: __constructor */
}

/**
 * Emitted when the server monitor’s hello command is started - immediately before
 * the hello command is serialized into raw BSON and written to the socket.
 *
 * @public
 * @category Event
 */
export declare class ServerHeartbeatStartedEvent {
    /** The connection id for the command */
    connectionId: string;
    /** Is true when using the streaming protocol */
    awaited: boolean;
    /* Excluded from this release type: name */
    /* Excluded from this release type: __constructor */
}

/**
 * Emitted when the server monitor’s hello succeeds.
 * @public
 * @category Event
 */
export declare class ServerHeartbeatSucceededEvent {
    /** The connection id for the command */
    connectionId: string;
    /** The execution time of the event in ms */
    duration: number;
    /** The command reply */
    reply: Document;
    /** Is true when using the streaming protocol */
    awaited: boolean;
    /* Excluded from this release type: name */
    /* Excluded from this release type: __constructor */
}

/** @public */
export declare const ServerMonitoringMode: Readonly<{
    readonly auto: "auto";
    readonly poll: "poll";
    readonly stream: "stream";
}>;

/** @public */
export declare type ServerMonitoringMode = (typeof ServerMonitoringMode)[keyof typeof ServerMonitoringMode];

/**
 * Emitted when server is initialized.
 * @public
 * @category Event
 */
export declare class ServerOpeningEvent {
    /** A unique identifier for the topology */
    topologyId: number;
    /** The address (host/port pair) of the server */
    address: string;
    /* Excluded from this release type: name */
    /* Excluded from this release type: __constructor */
}

/* Excluded from this release type: ServerOptions */

/* Excluded from this release type: ServerPrivate */

/* Excluded from this release type: ServerSelectionCallback */

/* Excluded from this release type: ServerSelectionEvent */

/* Excluded from this release type: ServerSelectionFailedEvent */

/* Excluded from this release type: ServerSelectionRequest */

/* Excluded from this release type: ServerSelectionStartedEvent */

/* Excluded from this release type: ServerSelectionSucceededEvent */

/* Excluded from this release type: ServerSelector */

/**
 * Reflects the existence of a session on the server. Can be reused by the session pool.
 * WARNING: not meant to be instantiated directly. For internal use only.
 * @public
 */
export declare class ServerSession {
    id: ServerSessionId;
    lastUse: number;
    txnNumber: number;
    isDirty: boolean;
    /* Excluded from this release type: __constructor */
    /**
     * Determines if the server session has timed out.
     *
     * @param sessionTimeoutMinutes - The server's "logicalSessionTimeoutMinutes"
     */
    hasTimedOut(sessionTimeoutMinutes: number): boolean;
}

/** @public */
export declare type ServerSessionId = {
    id: Binary;
};

/* Excluded from this release type: ServerSessionPool */

/**
 * An enumeration of server types we know about
 * @public
 */
export declare const ServerType: Readonly<{
    readonly Standalone: "Standalone";
    readonly Mongos: "Mongos";
    readonly PossiblePrimary: "PossiblePrimary";
    readonly RSPrimary: "RSPrimary";
    readonly RSSecondary: "RSSecondary";
    readonly RSArbiter: "RSArbiter";
    readonly RSOther: "RSOther";
    readonly RSGhost: "RSGhost";
    readonly Unknown: "Unknown";
    readonly LoadBalancer: "LoadBalancer";
}>;

/** @public */
export declare type ServerType = (typeof ServerType)[keyof typeof ServerType];

/** @public */
export declare type SetFields<TSchema> = ({
    readonly [key in KeysOfAType<TSchema, ReadonlyArray<any> | undefined>]?: OptionalId<Flatten<TSchema[key]>> | AddToSetOperators<Array<OptionalId<Flatten<TSchema[key]>>>>;
} & IsAny<TSchema[keyof TSchema], object, NotAcceptedFields<TSchema, ReadonlyArray<any> | undefined>>) & {
    readonly [key: string]: AddToSetOperators<any> | any;
};

/** @public */
export declare type SetProfilingLevelOptions = Omit<CommandOperationOptions, 'rawData'>;

/**
 * @public
 * Severity levels align with unix syslog.
 * Most typical driver functions will log to debug.
 */
export declare const SeverityLevel: Readonly<{
    readonly EMERGENCY: "emergency";
    readonly ALERT: "alert";
    readonly CRITICAL: "critical";
    readonly ERROR: "error";
    readonly WARNING: "warn";
    readonly NOTICE: "notice";
    readonly INFORMATIONAL: "info";
    readonly DEBUG: "debug";
    readonly TRACE: "trace";
    readonly OFF: "off";
}>;

/** @public */
export declare type SeverityLevel = (typeof SeverityLevel)[keyof typeof SeverityLevel];

/** @public */
export declare type Sort = string | Exclude<SortDirection, {
    readonly $meta: string;
}> | ReadonlyArray<string> | {
    readonly [key: string]: SortDirection;
} | ReadonlyMap<string, SortDirection> | ReadonlyArray<readonly [string, SortDirection]> | readonly [string, SortDirection];

/** @public */
export declare type SortDirection = 1 | -1 | 'asc' | 'desc' | 'ascending' | 'descending' | {
    readonly $meta: string;
};

/** Below stricter types were created for sort that correspond with type that the cmd takes  */
/** @public */
export declare type SortDirectionForCmd = 1 | -1 | {
    $meta: string;
};

/** @public */
export declare type SortForCmd = Map<string, SortDirectionForCmd>;

/* Excluded from this release type: SrvPoller */

/* Excluded from this release type: SrvPollerEvents */

/* Excluded from this release type: SrvPollerOptions */

/* Excluded from this release type: SrvPollingEvent */

/* Excluded from this release type: StateMachineExecutable */

/** @public */
export declare type Stream = Socket | TLSSocket;

/** @public */
export declare class StreamDescription {
    address: string;
    type: ServerType;
    minWireVersion?: number;
    maxWireVersion?: number;
    maxBsonObjectSize: number;
    maxMessageSizeBytes: number;
    maxWriteBatchSize: number;
    compressors: CompressorName[];
    compressor?: CompressorName;
    logicalSessionTimeoutMinutes?: number;
    loadBalanced: boolean;
    __nodejs_mock_server__?: boolean;
    zlibCompressionLevel?: number;
    serverConnectionId: bigint | null;
    hello: Document | null;
    constructor(address: string, options?: StreamDescriptionOptions);
    receiveResponse(response: Document | null): void;
    parseServerConnectionID(serverConnectionId: number | Double | bigint | Long): bigint;
}

/** @public */
export declare interface StreamDescriptionOptions {
    compressors?: CompressorName[];
    logicalSessionTimeoutMinutes?: number;
    loadBalanced: boolean;
}

/**
 * @public
 * @experimental
 */
export declare type StrictFilter<TSchema> = Partial<TSchema> | ({
    [Property in Join<NestedPaths<WithId<TSchema>, []>, '.'>]?: Condition<PropertyType<WithId<TSchema>, Property>>;
} & RootFilterOperators<WithId<TSchema>>);

/**
 * @public
 * @experimental
 */
export declare type StrictMatchKeysAndValues<TSchema> = Readonly<{
    [Property in Join<NestedPaths<TSchema, []>, '.'>]?: PropertyType<TSchema, Property>;
} & {
    [Property in `${NestedPathsOfType<TSchema, any[]>}.$${`[${string}]` | ''}`]?: ArrayElement<PropertyType<TSchema, Property extends `${infer Key}.$${string}` ? Key : never>>;
} & {
    [Property in `${NestedPathsOfType<TSchema, Record<string, any>[]>}.$${`[${string}]` | ''}.${string}`]?: any;
} & Document>;

/**
 * @public
 * @experimental
 */
export declare type StrictUpdateFilter<TSchema> = {
    $currentDate?: OnlyFieldsOfType<TSchema, Date | Timestamp, true | {
        $type: 'date' | 'timestamp';
    }>;
    $inc?: OnlyFieldsOfType<TSchema, NumericType | undefined>;
    $min?: StrictMatchKeysAndValues<TSchema>;
    $max?: StrictMatchKeysAndValues<TSchema>;
    $mul?: OnlyFieldsOfType<TSchema, NumericType | undefined>;
    $rename?: Record<string, string>;
    $set?: StrictMatchKeysAndValues<TSchema>;
    $setOnInsert?: StrictMatchKeysAndValues<TSchema>;
    $unset?: OnlyFieldsOfType<TSchema, any, '' | true | 1>;
    $addToSet?: SetFields<TSchema>;
    $pop?: OnlyFieldsOfType<TSchema, ReadonlyArray<any>, 1 | -1>;
    $pull?: PullOperator<TSchema>;
    $push?: PushOperator<TSchema>;
    $pullAll?: PullAllOperator<TSchema>;
    $bit?: OnlyFieldsOfType<TSchema, NumericType | undefined, {
        and: IntegerType;
    } | {
        or: IntegerType;
    } | {
        xor: IntegerType;
    }>;
} & Document;

/** @public */
export declare type SupportedNodeConnectionOptions = SupportedTLSConnectionOptions & SupportedTLSSocketOptions & SupportedSocketOptions;

/** @public */
export declare type SupportedSocketOptions = Pick<TcpNetConnectOpts & {
    autoSelectFamily?: boolean;
    autoSelectFamilyAttemptTimeout?: number;
    /** Node.JS socket option to set the time the first keepalive probe is sent on an idle socket. Defaults to 120000ms */
    keepAliveInitialDelay?: number;
}, (typeof LEGAL_TCP_SOCKET_OPTIONS)[number]>;

/** @public */
export declare type SupportedTLSConnectionOptions = Pick<ConnectionOptions_2 & {
    allowPartialTrustChain?: boolean;
}, (typeof LEGAL_TLS_SOCKET_OPTIONS)[number]>;

/** @public */
export declare type SupportedTLSSocketOptions = Pick<TLSSocketOptions, Extract<keyof TLSSocketOptions, (typeof LEGAL_TLS_SOCKET_OPTIONS)[number]>>;

/** @public */
export declare type TagSet = {
    [key: string]: string;
};

/**
 * Options for a Queryable Encryption field supporting text queries.
 *
 * @public
 * @experimental Public Technical Preview: `textPreview` is an experimental feature and may break at any time.
 */
export declare interface TextQueryOptions {
    /** Indicates that text indexes for this field are case sensitive */
    caseSensitive: boolean;
    /** Indicates that text indexes for this field are diacritic sensitive. */
    diacriticSensitive: boolean;
    prefix?: {
        /** The maximum allowed query length. */
        strMaxQueryLength: Int32 | number;
        /** The minimum allowed query length. */
        strMinQueryLength: Int32 | number;
    };
    suffix?: {
        /** The maximum allowed query length. */
        strMaxQueryLength: Int32 | number;
        /** The minimum allowed query length. */
        strMinQueryLength: Int32 | number;
    };
    substring?: {
        /** The maximum allowed length to insert. */
        strMaxLength: Int32 | number;
        /** The maximum allowed query length. */
        strMaxQueryLength: Int32 | number;
        /** The minimum allowed query length. */
        strMinQueryLength: Int32 | number;
    };
}

/* Excluded from this release type: Timeout */

/* Excluded from this release type: TimeoutContext */

/* Excluded from this release type: TimeoutContextOptions */

/** @public
 * Configuration options for timeseries collections
 * @see https://www.mongodb.com/docs/manual/core/timeseries-collections/
 */
export declare interface TimeSeriesCollectionOptions extends Document {
    timeField: string;
    metaField?: string;
    granularity?: 'seconds' | 'minutes' | 'hours' | string;
    bucketMaxSpanSeconds?: number;
    bucketRoundingSeconds?: number;
}

export { Timestamp }

/* Excluded from this release type: TokenCache */

/* Excluded from this release type: Topology */

/* Excluded from this release type: TOPOLOGY_CLOSED */

/* Excluded from this release type: TOPOLOGY_DESCRIPTION_CHANGED */

/* Excluded from this release type: TOPOLOGY_OPENING */

/**
 * Emitted when topology is closed.
 * @public
 * @category Event
 */
export declare class TopologyClosedEvent {
    /** A unique identifier for the topology */
    topologyId: number;
    /* Excluded from this release type: name */
    /* Excluded from this release type: __constructor */
}

/**
 * Representation of a deployment of servers
 * @public
 */
export declare class TopologyDescription {
    type: TopologyType;
    setName: string | null;
    maxSetVersion: number | null;
    maxElectionId: ObjectId | null;
    servers: Map<string, ServerDescription>;
    stale: boolean;
    compatible: boolean;
    compatibilityError?: string;
    logicalSessionTimeoutMinutes: number | null;
    heartbeatFrequencyMS: number;
    localThresholdMS: number;
    commonWireVersion: number;
    /**
     * Create a TopologyDescription
     */
    constructor(topologyType: TopologyType, serverDescriptions?: Map<string, ServerDescription> | null, setName?: string | null, maxSetVersion?: number | null, maxElectionId?: ObjectId | null, commonWireVersion?: number | null, options?: TopologyDescriptionOptions | null);
    /* Excluded from this release type: updateFromSrvPollingEvent */
    /* Excluded from this release type: update */
    get error(): MongoError | null;
    /**
     * Determines if the topology description has any known servers
     */
    get hasKnownServers(): boolean;
    /**
     * Determines if this topology description has a data-bearing server available.
     */
    get hasDataBearingServers(): boolean;
    /* Excluded from this release type: hasServer */
    /**
     * Returns a JSON-serializable representation of the TopologyDescription.  This is primarily
     * intended for use with JSON.stringify().
     *
     * This method will not throw.
     */
    toJSON(): Document;
}

/**
 * Emitted when topology description changes.
 * @public
 * @category Event
 */
export declare class TopologyDescriptionChangedEvent {
    /** A unique identifier for the topology */
    topologyId: number;
    /** The old topology description */
    previousDescription: TopologyDescription;
    /** The new topology description */
    newDescription: TopologyDescription;
    /* Excluded from this release type: name */
    /* Excluded from this release type: __constructor */
}

/** @public */
export declare interface TopologyDescriptionOptions {
    heartbeatFrequencyMS?: number;
    localThresholdMS?: number;
}

/** @public */
export declare type TopologyEvents = {
    /* Excluded from this release type: connect */
    serverOpening(event: ServerOpeningEvent): void;
    serverClosed(event: ServerClosedEvent): void;
    serverDescriptionChanged(event: ServerDescriptionChangedEvent): void;
    topologyClosed(event: TopologyClosedEvent): void;
    topologyOpening(event: TopologyOpeningEvent): void;
    topologyDescriptionChanged(event: TopologyDescriptionChangedEvent): void;
    error(error: Error): void;
    /* Excluded from this release type: open */
    close(): void;
    timeout(): void;
} & Omit<ServerEvents, 'connect'> & ConnectionPoolEvents & ConnectionEvents & EventEmitterWithState;

/**
 * Emitted when topology is initialized.
 * @public
 * @category Event
 */
export declare class TopologyOpeningEvent {
    /** A unique identifier for the topology */
    topologyId: number;
    /* Excluded from this release type: name */
    /* Excluded from this release type: __constructor */
}

/* Excluded from this release type: TopologyOptions */

/* Excluded from this release type: TopologyPrivate */

/**
 * An enumeration of topology types we know about
 * @public
 */
export declare const TopologyType: Readonly<{
    readonly Single: "Single";
    readonly ReplicaSetNoPrimary: "ReplicaSetNoPrimary";
    readonly ReplicaSetWithPrimary: "ReplicaSetWithPrimary";
    readonly Sharded: "Sharded";
    readonly Unknown: "Unknown";
    readonly LoadBalanced: "LoadBalanced";
}>;

/** @public */
export declare type TopologyType = (typeof TopologyType)[keyof typeof TopologyType];

/** @public */
export declare interface TopologyVersion {
    processId: ObjectId;
    counter: Long;
}

/**
 * @public
 * @deprecated - Will be made internal in a future major release.
 * A class maintaining state related to a server transaction. Internal Only
 */
export declare class Transaction {
    /* Excluded from this release type: state */
    /** @deprecated - Will be made internal in a future major release. */
    options: TransactionOptions;
    /* Excluded from this release type: _pinnedServer */
    /* Excluded from this release type: _recoveryToken */
    /* Excluded from this release type: __constructor */
    /* Excluded from this release type: server */
    /** @deprecated - Will be made internal in a future major release. */
    get recoveryToken(): Document | undefined;
    /** @deprecated - Will be made internal in a future major release. */
    get isPinned(): boolean;
    /**
     * @deprecated - Will be made internal in a future major release.
     * @returns Whether the transaction has started
     */
    get isStarting(): boolean;
    /**
     * @deprecated - Will be made internal in a future major release.
     * @returns Whether this session is presently in a transaction
     */
    get isActive(): boolean;
    /** @deprecated - Will be made internal in a future major release. */
    get isCommitted(): boolean;
    /* Excluded from this release type: transition */
    /* Excluded from this release type: pinServer */
    /* Excluded from this release type: unpinServer */
}

/**
 * Configuration options for a transaction.
 * @public
 */
export declare interface TransactionOptions extends Omit<CommandOperationOptions, 'timeoutMS'> {
    /** A default read concern for commands in this transaction */
    readConcern?: ReadConcernLike;
    /** A default writeConcern for commands in this transaction */
    writeConcern?: WriteConcern;
    /** A default read preference for commands in this transaction */
    readPreference?: ReadPreferenceLike;
    /** Specifies the maximum amount of time to allow a commit action on a transaction to run in milliseconds */
    maxCommitTimeMS?: number;
}

/* Excluded from this release type: TxnState */

/**
 * Typescript type safe event emitter
 * @public
 */
export declare interface TypedEventEmitter<Events extends EventsDescription> extends EventEmitter {
    addListener<EventKey extends keyof Events>(event: EventKey, listener: Events[EventKey]): this;
    addListener(event: CommonEvents, listener: (eventName: string | symbol, listener: GenericListener) => void): this;
    addListener(event: string | symbol, listener: GenericListener): this;
    on<EventKey extends keyof Events>(event: EventKey, listener: Events[EventKey]): this;
    on(event: CommonEvents, listener: (eventName: string | symbol, listener: GenericListener) => void): this;
    on(event: string | symbol, listener: GenericListener): this;
    once<EventKey extends keyof Events>(event: EventKey, listener: Events[EventKey]): this;
    once(event: CommonEvents, listener: (eventName: string | symbol, listener: GenericListener) => void): this;
    once(event: string | symbol, listener: GenericListener): this;
    removeListener<EventKey extends keyof Events>(event: EventKey, listener: Events[EventKey]): this;
    removeListener(event: CommonEvents, listener: (eventName: string | symbol, listener: GenericListener) => void): this;
    removeListener(event: string | symbol, listener: GenericListener): this;
    off<EventKey extends keyof Events>(event: EventKey, listener: Events[EventKey]): this;
    off(event: CommonEvents, listener: (eventName: string | symbol, listener: GenericListener) => void): this;
    off(event: string | symbol, listener: GenericListener): this;
    removeAllListeners<EventKey extends keyof Events>(event?: EventKey | CommonEvents | symbol | string): this;
    listeners<EventKey extends keyof Events>(event: EventKey | CommonEvents | symbol | string): Events[EventKey][];
    rawListeners<EventKey extends keyof Events>(event: EventKey | CommonEvents | symbol | string): Events[EventKey][];
    emit<EventKey extends keyof Events>(event: EventKey | symbol, ...args: Parameters<Events[EventKey]>): boolean;
    listenerCount<EventKey extends keyof Events>(type: EventKey | CommonEvents | symbol | string): number;
    prependListener<EventKey extends keyof Events>(event: EventKey, listener: Events[EventKey]): this;
    prependListener(event: CommonEvents, listener: (eventName: string | symbol, listener: GenericListener) => void): this;
    prependListener(event: string | symbol, listener: GenericListener): this;
    prependOnceListener<EventKey extends keyof Events>(event: EventKey, listener: Events[EventKey]): this;
    prependOnceListener(event: CommonEvents, listener: (eventName: string | symbol, listener: GenericListener) => void): this;
    prependOnceListener(event: string | symbol, listener: GenericListener): this;
    eventNames(): string[];
    getMaxListeners(): number;
    setMaxListeners(n: number): this;
}

/**
 * Typescript type safe event emitter
 * @public
 */
export declare class TypedEventEmitter<Events extends EventsDescription> extends EventEmitter {
    /* Excluded from this release type: mongoLogger */
    /* Excluded from this release type: component */
    /* Excluded from this release type: emitAndLog */
    /* Excluded from this release type: emitAndLogHeartbeat */
    /* Excluded from this release type: emitAndLogCommand */
}

/** @public */
export declare class UnorderedBulkOperation extends BulkOperationBase {
    /* Excluded from this release type: __constructor */
    handleWriteError(writeResult: BulkWriteResult): void;
    addToOperationsList(batchType: BatchType, document: Document | UpdateStatement | DeleteStatement): this;
}

/** @public */
export declare interface UpdateDescription<TSchema extends Document = Document> {
    /**
     * A document containing key:value pairs of names of the fields that were
     * changed, and the new value for those fields.
     */
    updatedFields?: Partial<TSchema>;
    /**
     * An array of field names that were removed from the document.
     */
    removedFields?: string[];
    /**
     * An array of documents which record array truncations performed with pipeline-based updates using one or more of the following stages:
     * - $addFields
     * - $set
     * - $replaceRoot
     * - $replaceWith
     */
    truncatedArrays?: Array<{
        /** The name of the truncated field. */
        field: string;
        /** The number of elements in the truncated array. */
        newSize: number;
    }>;
    /**
     * A document containing additional information about any ambiguous update paths from the update event.  The document
     * maps the full ambiguous update path to an array containing the actual resolved components of the path.  For example,
     * given a document shaped like `{ a: { '0': 0 } }`, and an update of `{ $inc: 'a.0' }`, disambiguated paths would look like
     * the following:
     *
     * ```
     *   {
     *     'a.0': ['a', '0']
     *   }
     * ```
     *
     * This field is only present when there are ambiguous paths that are updated as a part of the update event.
     *
     * On \<8.2.0 servers, this field is only present when `showExpandedEvents` is set to true.
     * is enabled for the change stream.
     *
     * On 8.2.0+ servers, this field is present for update events regardless of whether `showExpandedEvents` is enabled.
     * @sinceServerVersion 6.1.0
     */
    disambiguatedPaths?: Document;
}

/** @public */
export declare type UpdateFilter<TSchema> = {
    $currentDate?: OnlyFieldsOfType<TSchema, Date | Timestamp, true | {
        $type: 'date' | 'timestamp';
    }>;
    $inc?: OnlyFieldsOfType<TSchema, NumericType | undefined>;
    $min?: MatchKeysAndValues<TSchema>;
    $max?: MatchKeysAndValues<TSchema>;
    $mul?: OnlyFieldsOfType<TSchema, NumericType | undefined>;
    $rename?: Record<string, string>;
    $set?: MatchKeysAndValues<TSchema>;
    $setOnInsert?: MatchKeysAndValues<TSchema>;
    $unset?: OnlyFieldsOfType<TSchema, any, '' | true | 1>;
    $addToSet?: SetFields<TSchema>;
    $pop?: OnlyFieldsOfType<TSchema, ReadonlyArray<any>, 1 | -1>;
    $pull?: PullOperator<TSchema>;
    $push?: PushOperator<TSchema>;
    $pullAll?: PullAllOperator<TSchema>;
    $bit?: OnlyFieldsOfType<TSchema, NumericType | undefined, {
        and: IntegerType;
    } | {
        or: IntegerType;
    } | {
        xor: IntegerType;
    }>;
} & Document;

/** @public */
export declare interface UpdateManyModel<TSchema extends Document = Document> {
    /** The filter to limit the updated documents. */
    filter: Filter<TSchema>;
    /**
     * The modifications to apply. The value can be either:
     * UpdateFilter<TSchema> - A document that contains update operator expressions,
     * Document[] - an aggregation pipeline.
     */
    update: UpdateFilter<TSchema> | Document[];
    /** A set of filters specifying to which array elements an update should apply. */
    arrayFilters?: Document[];
    /** Specifies a collation. */
    collation?: CollationOptions;
    /** The index to use. If specified, then the query system will only consider plans using the hinted index. */
    hint?: Hint;
    /** When true, creates a new document if no document matches the query. */
    upsert?: boolean;
}

/** @public */
export declare interface UpdateOneModel<TSchema extends Document = Document> {
    /** The filter that specifies which document to update. In the case of multiple matches, the first document matched is updated. */
    filter: Filter<TSchema>;
    /**
     * The modifications to apply. The value can be either:
     * UpdateFilter<TSchema> - A document that contains update operator expressions,
     * Document[] - an aggregation pipeline.
     */
    update: UpdateFilter<TSchema> | Document[];
    /** A set of filters specifying to which array elements an update should apply. */
    arrayFilters?: Document[];
    /** Specifies a collation. */
    collation?: CollationOptions;
    /** The index to use. If specified, then the query system will only consider plans using the hinted index. */
    hint?: Hint;
    /** When true, creates a new document if no document matches the query. */
    upsert?: boolean;
    /** Specifies the sort order for the documents matched by the filter. */
    sort?: Sort;
}

/** @public */
export declare interface UpdateOptions extends CommandOperationOptions {
    /** A set of filters specifying to which array elements an update should apply */
    arrayFilters?: Document[];
    /** If true, allows the write to opt-out of document level validation */
    bypassDocumentValidation?: boolean;
    /** Specifies a collation */
    collation?: CollationOptions;
    /** Specify that the update query should only consider plans using the hinted index */
    hint?: Hint;
    /** When true, creates a new document if no document matches the query */
    upsert?: boolean;
    /** Map of parameter names and values that can be accessed using $$var (requires MongoDB 5.0). */
    let?: Document;
}

/**
 * @public
 * `TSchema` is the schema of the collection
 */
export declare interface UpdateResult<TSchema extends Document = Document> {
    /** Indicates whether this write result was acknowledged. If not, then all other members of this result will be undefined */
    acknowledged: boolean;
    /** The number of documents that matched the filter */
    matchedCount: number;
    /** The number of documents that were modified */
    modifiedCount: number;
    /** The number of documents that were upserted */
    upsertedCount: number;
    /** The identifier of the inserted document if an upsert took place */
    upsertedId: InferIdType<TSchema> | null;
}

/** @public */
export declare interface UpdateStatement {
    /** The query that matches documents to update. */
    q: Document;
    /** The modifications to apply. */
    u: Document | Document[];
    /**  If true, perform an insert if no documents match the query. */
    upsert?: boolean;
    /** If true, updates all documents that meet the query criteria. */
    multi?: boolean;
    /** Specifies the collation to use for the operation. */
    collation?: CollationOptions;
    /** An array of filter documents that determines which array elements to modify for an update operation on an array field. */
    arrayFilters?: Document[];
    /** A document or string that specifies the index to use to support the query predicate. */
    hint?: Hint;
    /** Specifies the sort order for the documents matched by the filter. */
    sort?: SortForCmd;
}

export { UUID }

/** @public */
export declare interface ValidateCollectionOptions extends Omit<CommandOperationOptions, 'rawData'> {
    /** Validates a collection in the background, without interrupting read or write traffic (only in MongoDB 4.4+) */
    background?: boolean;
}

/** @public */
export declare type W = number | 'majority';

/* Excluded from this release type: WAITING_FOR_SUITABLE_SERVER */

/* Excluded from this release type: WaitingForSuitableServerEvent */

/* Excluded from this release type: WaitQueueMember */

/* Excluded from this release type: WithConnectionCallback */

/** Add an _id field to an object shaped type @public */
export declare type WithId<TSchema> = EnhancedOmit<TSchema, '_id'> & {
    _id: InferIdType<TSchema>;
};

/** Remove the _id field from an object shaped type @public */
export declare type WithoutId<TSchema> = Omit<TSchema, '_id'>;

/** @public */
export declare type WithSessionCallback<T = unknown> = (session: ClientSession) => Promise<T>;

/** @public */
export declare type WithTransactionCallback<T = any> = (session: ClientSession) => Promise<T>;

/* Excluded from this release type: Workflow */

/**
 * A MongoDB WriteConcern, which describes the level of acknowledgement
 * requested from MongoDB for write operations.
 * @public
 *
 * @see https://www.mongodb.com/docs/manual/reference/write-concern/
 */
export declare class WriteConcern {
    /**
     * Request acknowledgment that the write operation has propagated to a specified number of mongod instances or to mongod instances with specified tags.
     * If w is 0 and is set on a write operation, the server will not send a response.
     */
    readonly w?: W;
    /** Request acknowledgment that the write operation has been written to the on-disk journal */
    readonly journal?: boolean;
    /**
     * Specify a time limit to prevent write operations from blocking indefinitely.
     */
    readonly wtimeoutMS?: number;
    /**
     * Specify a time limit to prevent write operations from blocking indefinitely.
     * @deprecated Will be removed in the next major version. Please use wtimeoutMS.
     */
    wtimeout?: number;
    /**
     * Request acknowledgment that the write operation has been written to the on-disk journal.
     * @deprecated Will be removed in the next major version. Please use journal.
     */
    j?: boolean;
    /**
     * Equivalent to the j option.
     * @deprecated Will be removed in the next major version. Please use journal.
     */
    fsync?: boolean | 1;
    /**
     * Constructs a WriteConcern from the write concern properties.
     * @param w - request acknowledgment that the write operation has propagated to a specified number of mongod instances or to mongod instances with specified tags.
     * @param wtimeoutMS - specify a time limit to prevent write operations from blocking indefinitely
     * @param journal - request acknowledgment that the write operation has been written to the on-disk journal
     * @param fsync - equivalent to the j option. Is deprecated and will be removed in the next major version.
     */
    constructor(w?: W, wtimeoutMS?: number, journal?: boolean, fsync?: boolean | 1);
    /**
     * Apply a write concern to a command document. Will modify and return the command.
     */
    static apply(command: Document, writeConcern: WriteConcern): Document;
    /** Construct a WriteConcern given an options object. */
    static fromOptions(options?: WriteConcernOptions | WriteConcern | W, inherit?: WriteConcernOptions | WriteConcern): WriteConcern | undefined;
}

/**
 * An error representing a failure by the server to apply the requested write concern to the bulk operation.
 * @public
 * @category Error
 */
export declare class WriteConcernError {
    /* Excluded from this release type: serverError */
    constructor(error: WriteConcernErrorData);
    /** Write concern error code. */
    get code(): number | undefined;
    /** Write concern error message. */
    get errmsg(): string | undefined;
    /** Write concern error info. */
    get errInfo(): Document | undefined;
    toJSON(): WriteConcernErrorData;
    toString(): string;
}

/** @public */
export declare interface WriteConcernErrorData {
    code: number;
    errmsg: string;
    errInfo?: Document;
}

/**
 * The type of the result property of MongoWriteConcernError
 * @public
 */
export declare interface WriteConcernErrorResult {
    writeConcernError: {
        code: number;
        errmsg: string;
        codeName?: string;
        errInfo?: Document;
    };
    ok: number;
    code?: number;
    errorLabels?: string[];
    [x: string | number]: unknown;
}

/** @public */
export declare interface WriteConcernOptions {
    /** Write Concern as an object */
    writeConcern?: WriteConcern | WriteConcernSettings;
}

/** @public */
export declare interface WriteConcernSettings {
    /** The write concern */
    w?: W;
    /**
     * The write concern timeout.
     */
    wtimeoutMS?: number;
    /** The journal write concern */
    journal?: boolean;
    /**
     * The journal write concern.
     * @deprecated Will be removed in the next major version. Please use the journal option.
     */
    j?: boolean;
    /**
     * The write concern timeout.
     */
    wtimeout?: number;
    /**
     * The file sync write concern.
     * @deprecated Will be removed in the next major version. Please use the journal option.
     */
    fsync?: boolean | 1;
}

/**
 * An error that occurred during a BulkWrite on the server.
 * @public
 * @category Error
 */
export declare class WriteError {
    err: BulkWriteOperationError;
    constructor(err: BulkWriteOperationError);
    /** WriteError code. */
    get code(): number;
    /** WriteError original bulk operation index. */
    get index(): number;
    /** WriteError message. */
    get errmsg(): string | undefined;
    /** WriteError details. */
    get errInfo(): Document | undefined;
    /** Returns the underlying operation that caused the error */
    getOperation(): Document;
    toJSON(): {
        code: number;
        index: number;
        errmsg?: string;
        op: Document;
    };
    toString(): string;
}

/* Excluded from this release type: WriteProtocolMessageType */

export { }
