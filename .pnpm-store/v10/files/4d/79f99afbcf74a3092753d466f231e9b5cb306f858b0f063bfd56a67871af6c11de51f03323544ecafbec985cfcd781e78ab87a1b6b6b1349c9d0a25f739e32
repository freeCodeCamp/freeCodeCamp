"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Db = void 0;
const admin_1 = require("./admin");
const bson_1 = require("./bson");
const change_stream_1 = require("./change_stream");
const collection_1 = require("./collection");
const CONSTANTS = require("./constants");
const aggregation_cursor_1 = require("./cursor/aggregation_cursor");
const list_collections_cursor_1 = require("./cursor/list_collections_cursor");
const run_command_cursor_1 = require("./cursor/run_command_cursor");
const error_1 = require("./error");
const create_collection_1 = require("./operations/create_collection");
const drop_1 = require("./operations/drop");
const execute_operation_1 = require("./operations/execute_operation");
const indexes_1 = require("./operations/indexes");
const profiling_level_1 = require("./operations/profiling_level");
const remove_user_1 = require("./operations/remove_user");
const rename_1 = require("./operations/rename");
const run_command_1 = require("./operations/run_command");
const set_profiling_level_1 = require("./operations/set_profiling_level");
const stats_1 = require("./operations/stats");
const read_concern_1 = require("./read_concern");
const read_preference_1 = require("./read_preference");
const utils_1 = require("./utils");
const write_concern_1 = require("./write_concern");
// Allowed parameters
const DB_OPTIONS_ALLOW_LIST = [
    'writeConcern',
    'readPreference',
    'readPreferenceTags',
    'native_parser',
    'forceServerObjectId',
    'pkFactory',
    'serializeFunctions',
    'raw',
    'authSource',
    'ignoreUndefined',
    'readConcern',
    'retryMiliSeconds',
    'numberOfRetries',
    'useBigInt64',
    'promoteBuffers',
    'promoteLongs',
    'bsonRegExp',
    'enableUtf8Validation',
    'promoteValues',
    'compression',
    'retryWrites',
    'timeoutMS'
];
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
class Db {
    /**
     * Creates a new Db instance.
     *
     * Db name cannot contain a dot, the server may apply more restrictions when an operation is run.
     *
     * @param client - The MongoClient for the database.
     * @param databaseName - The name of the database this instance represents.
     * @param options - Optional settings for Db construction.
     */
    constructor(client, databaseName, options) {
        options = options ?? {};
        // Filter the options
        options = (0, utils_1.filterOptions)(options, DB_OPTIONS_ALLOW_LIST);
        // Ensure there are no dots in database name
        if (typeof databaseName === 'string' && databaseName.includes('.')) {
            throw new error_1.MongoInvalidArgumentError(`Database names cannot contain the character '.'`);
        }
        // Internal state of the db object
        this.s = {
            // Options
            options,
            // Unpack read preference
            readPreference: read_preference_1.ReadPreference.fromOptions(options),
            // Merge bson options
            bsonOptions: (0, bson_1.resolveBSONOptions)(options, client),
            // Set up the primary key factory or fallback to ObjectId
            pkFactory: options?.pkFactory ?? utils_1.DEFAULT_PK_FACTORY,
            // ReadConcern
            readConcern: read_concern_1.ReadConcern.fromOptions(options),
            writeConcern: write_concern_1.WriteConcern.fromOptions(options),
            // Namespace
            namespace: new utils_1.MongoDBNamespace(databaseName)
        };
        this.client = client;
    }
    get databaseName() {
        return this.s.namespace.db;
    }
    // Options
    get options() {
        return this.s.options;
    }
    /**
     * Check if a secondary can be used (because the read preference is *not* set to primary)
     */
    get secondaryOk() {
        return this.s.readPreference?.preference !== 'primary' || false;
    }
    get readConcern() {
        return this.s.readConcern;
    }
    /**
     * The current readPreference of the Db. If not explicitly defined for
     * this Db, will be inherited from the parent MongoClient
     */
    get readPreference() {
        if (this.s.readPreference == null) {
            return this.client.readPreference;
        }
        return this.s.readPreference;
    }
    get bsonOptions() {
        return this.s.bsonOptions;
    }
    // get the write Concern
    get writeConcern() {
        return this.s.writeConcern;
    }
    get namespace() {
        return this.s.namespace.toString();
    }
    get timeoutMS() {
        return this.s.options?.timeoutMS;
    }
    /**
     * Create a new collection on a server with the specified options. Use this to create capped collections.
     * More information about command options available at https://www.mongodb.com/docs/manual/reference/command/create/
     *
     * Collection namespace validation is performed server-side.
     *
     * @param name - The name of the collection to create
     * @param options - Optional settings for the command
     */
    async createCollection(name, options) {
        options = (0, utils_1.resolveOptions)(this, options);
        return await (0, create_collection_1.createCollections)(this, name, options);
    }
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
    async command(command, options) {
        // Intentionally, we do not inherit options from parent for this operation.
        return await (0, execute_operation_1.executeOperation)(this.client, new run_command_1.RunCommandOperation(this.s.namespace, command, (0, utils_1.resolveOptions)(undefined, {
            ...(0, bson_1.resolveBSONOptions)(options),
            timeoutMS: options?.timeoutMS ?? this.timeoutMS,
            session: options?.session,
            readPreference: options?.readPreference,
            signal: options?.signal
        })));
    }
    /**
     * Execute an aggregation framework pipeline against the database.
     *
     * @param pipeline - An array of aggregation stages to be executed
     * @param options - Optional settings for the command
     */
    aggregate(pipeline = [], options) {
        return new aggregation_cursor_1.AggregationCursor(this.client, this.s.namespace, pipeline, (0, utils_1.resolveOptions)(this, options));
    }
    /** Return the Admin db instance */
    admin() {
        return new admin_1.Admin(this);
    }
    /**
     * Returns a reference to a MongoDB Collection. If it does not exist it will be created implicitly.
     *
     * Collection namespace validation is performed server-side.
     *
     * @param name - the collection name we wish to access.
     * @returns return the new Collection instance
     */
    collection(name, options = {}) {
        if (typeof options === 'function') {
            throw new error_1.MongoInvalidArgumentError('The callback form of this helper has been removed.');
        }
        return new collection_1.Collection(this, name, (0, utils_1.resolveOptions)(this, options));
    }
    /**
     * Get all the db statistics.
     *
     * @param options - Optional settings for the command
     */
    async stats(options) {
        return await (0, execute_operation_1.executeOperation)(this.client, new stats_1.DbStatsOperation(this, (0, utils_1.resolveOptions)(this, options)));
    }
    listCollections(filter = {}, options = {}) {
        return new list_collections_cursor_1.ListCollectionsCursor(this, filter, (0, utils_1.resolveOptions)(this, options));
    }
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
    async renameCollection(fromCollection, toCollection, options) {
        // Intentionally, we do not inherit options from parent for this operation.
        return await (0, execute_operation_1.executeOperation)(this.client, new rename_1.RenameOperation(this.collection(fromCollection), toCollection, (0, utils_1.resolveOptions)(undefined, {
            ...options,
            new_collection: true,
            readPreference: read_preference_1.ReadPreference.primary
        })));
    }
    /**
     * Drop a collection from the database, removing it permanently. New accesses will create a new collection.
     *
     * @param name - Name of collection to drop
     * @param options - Optional settings for the command
     */
    async dropCollection(name, options) {
        options = (0, utils_1.resolveOptions)(this, options);
        return await (0, drop_1.dropCollections)(this, name, options);
    }
    /**
     * Drop a database, removing it permanently from the server.
     *
     * @param options - Optional settings for the command
     */
    async dropDatabase(options) {
        return await (0, execute_operation_1.executeOperation)(this.client, new drop_1.DropDatabaseOperation(this, (0, utils_1.resolveOptions)(this, options)));
    }
    /**
     * Fetch all collections for the current db.
     *
     * @param options - Optional settings for the command
     */
    async collections(options) {
        options = (0, utils_1.resolveOptions)(this, options);
        const collections = await this.listCollections({}, { ...options, nameOnly: true }).toArray();
        return collections
            .filter(
        // Filter collections removing any illegal ones
        ({ name }) => !name.includes('$'))
            .map(({ name }) => new collection_1.Collection(this, name, this.s.options));
    }
    /**
     * Creates an index on the db and collection.
     *
     * @param name - Name of the collection to create the index on.
     * @param indexSpec - Specify the field to index, or an index specification
     * @param options - Optional settings for the command
     */
    async createIndex(name, indexSpec, options) {
        const indexes = await (0, execute_operation_1.executeOperation)(this.client, indexes_1.CreateIndexesOperation.fromIndexSpecification(this, name, indexSpec, options));
        return indexes[0];
    }
    /**
     * Remove a user from a database
     *
     * @param username - The username to remove
     * @param options - Optional settings for the command
     */
    async removeUser(username, options) {
        return await (0, execute_operation_1.executeOperation)(this.client, new remove_user_1.RemoveUserOperation(this, username, (0, utils_1.resolveOptions)(this, options)));
    }
    /**
     * Set the current profiling level of MongoDB
     *
     * @param level - The new profiling level (off, slow_only, all).
     * @param options - Optional settings for the command
     */
    async setProfilingLevel(level, options) {
        return await (0, execute_operation_1.executeOperation)(this.client, new set_profiling_level_1.SetProfilingLevelOperation(this, level, (0, utils_1.resolveOptions)(this, options)));
    }
    /**
     * Retrieve the current profiling Level for MongoDB
     *
     * @param options - Optional settings for the command
     */
    async profilingLevel(options) {
        return await (0, execute_operation_1.executeOperation)(this.client, new profiling_level_1.ProfilingLevelOperation(this, (0, utils_1.resolveOptions)(this, options)));
    }
    async indexInformation(name, options) {
        return await this.collection(name).indexInformation((0, utils_1.resolveOptions)(this, options));
    }
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
    watch(pipeline = [], options = {}) {
        // Allow optionally not specifying a pipeline
        if (!Array.isArray(pipeline)) {
            options = pipeline;
            pipeline = [];
        }
        return new change_stream_1.ChangeStream(this, pipeline, (0, utils_1.resolveOptions)(this, options));
    }
    /**
     * A low level cursor API providing basic driver functionality:
     * - ClientSession management
     * - ReadPreference for server selection
     * - Running getMores automatically when a local batch is exhausted
     *
     * @param command - The command that will start a cursor on the server.
     * @param options - Configurations for running the command, bson options will apply to getMores
     */
    runCursorCommand(command, options) {
        return new run_command_cursor_1.RunCommandCursor(this, command, options);
    }
}
exports.Db = Db;
Db.SYSTEM_NAMESPACE_COLLECTION = CONSTANTS.SYSTEM_NAMESPACE_COLLECTION;
Db.SYSTEM_INDEX_COLLECTION = CONSTANTS.SYSTEM_INDEX_COLLECTION;
Db.SYSTEM_PROFILE_COLLECTION = CONSTANTS.SYSTEM_PROFILE_COLLECTION;
Db.SYSTEM_USER_COLLECTION = CONSTANTS.SYSTEM_USER_COLLECTION;
Db.SYSTEM_COMMAND_COLLECTION = CONSTANTS.SYSTEM_COMMAND_COLLECTION;
Db.SYSTEM_JS_COLLECTION = CONSTANTS.SYSTEM_JS_COLLECTION;
//# sourceMappingURL=db.js.map