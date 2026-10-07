import { Admin } from './admin';
import { type BSONSerializeOptions, type Document, resolveBSONOptions } from './bson';
import { ChangeStream, type ChangeStreamDocument, type ChangeStreamOptions } from './change_stream';
import { Collection, type CollectionOptions } from './collection';
import * as CONSTANTS from './constants';
import { AggregationCursor } from './cursor/aggregation_cursor';
import { ListCollectionsCursor } from './cursor/list_collections_cursor';
import { RunCommandCursor, type RunCursorCommandOptions } from './cursor/run_command_cursor';
import { MongoInvalidArgumentError } from './error';
import type { MongoClient, PkFactory } from './mongo_client';
import type { Abortable, TODO_NODE_3286 } from './mongo_types';
import type { AggregateOptions } from './operations/aggregate';
import { type CreateCollectionOptions, createCollections } from './operations/create_collection';
import {
  type DropCollectionOptions,
  dropCollections,
  DropDatabaseOperation,
  type DropDatabaseOptions
} from './operations/drop';
import { executeOperation } from './operations/execute_operation';
import {
  CreateIndexesOperation,
  type CreateIndexesOptions,
  type IndexDescriptionCompact,
  type IndexDescriptionInfo,
  type IndexInformationOptions,
  type IndexSpecification
} from './operations/indexes';
import type { CollectionInfo, ListCollectionsOptions } from './operations/list_collections';
import { ProfilingLevelOperation, type ProfilingLevelOptions } from './operations/profiling_level';
import { RemoveUserOperation, type RemoveUserOptions } from './operations/remove_user';
import { RenameOperation, type RenameOptions } from './operations/rename';
import { RunCommandOperation, type RunCommandOptions } from './operations/run_command';
import {
  type ProfilingLevel,
  SetProfilingLevelOperation,
  type SetProfilingLevelOptions
} from './operations/set_profiling_level';
import { DbStatsOperation, type DbStatsOptions } from './operations/stats';
import { ReadConcern } from './read_concern';
import { ReadPreference, type ReadPreferenceLike } from './read_preference';
import { DEFAULT_PK_FACTORY, filterOptions, MongoDBNamespace, resolveOptions } from './utils';
import { WriteConcern, type WriteConcernOptions } from './write_concern';

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

/** @internal */
export interface DbPrivate {
  options?: DbOptions;
  readPreference?: ReadPreference;
  pkFactory: PkFactory;
  readConcern?: ReadConcern;
  bsonOptions: BSONSerializeOptions;
  writeConcern?: WriteConcern;
  namespace: MongoDBNamespace;
}

/** @public */
export interface DbOptions extends BSONSerializeOptions, WriteConcernOptions {
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
export class Db {
  /** @internal */
  s: DbPrivate;

  /**
   * Gets the MongoClient associated with the Db.
   * @public
   */
  readonly client: MongoClient;

  public static SYSTEM_NAMESPACE_COLLECTION = CONSTANTS.SYSTEM_NAMESPACE_COLLECTION;
  public static SYSTEM_INDEX_COLLECTION = CONSTANTS.SYSTEM_INDEX_COLLECTION;
  public static SYSTEM_PROFILE_COLLECTION = CONSTANTS.SYSTEM_PROFILE_COLLECTION;
  public static SYSTEM_USER_COLLECTION = CONSTANTS.SYSTEM_USER_COLLECTION;
  public static SYSTEM_COMMAND_COLLECTION = CONSTANTS.SYSTEM_COMMAND_COLLECTION;
  public static SYSTEM_JS_COLLECTION = CONSTANTS.SYSTEM_JS_COLLECTION;

  /**
   * Creates a new Db instance.
   *
   * Db name cannot contain a dot, the server may apply more restrictions when an operation is run.
   *
   * @param client - The MongoClient for the database.
   * @param databaseName - The name of the database this instance represents.
   * @param options - Optional settings for Db construction.
   */
  constructor(client: MongoClient, databaseName: string, options?: DbOptions) {
    options = options ?? {};

    // Filter the options
    options = filterOptions(options, DB_OPTIONS_ALLOW_LIST);

    // Ensure there are no dots in database name
    if (typeof databaseName === 'string' && databaseName.includes('.')) {
      throw new MongoInvalidArgumentError(`Database names cannot contain the character '.'`);
    }

    // Internal state of the db object
    this.s = {
      // Options
      options,
      // Unpack read preference
      readPreference: ReadPreference.fromOptions(options),
      // Merge bson options
      bsonOptions: resolveBSONOptions(options, client),
      // Set up the primary key factory or fallback to ObjectId
      pkFactory: options?.pkFactory ?? DEFAULT_PK_FACTORY,
      // ReadConcern
      readConcern: ReadConcern.fromOptions(options),
      writeConcern: WriteConcern.fromOptions(options),
      // Namespace
      namespace: new MongoDBNamespace(databaseName)
    };

    this.client = client;
  }

  get databaseName(): string {
    return this.s.namespace.db;
  }

  // Options
  get options(): DbOptions | undefined {
    return this.s.options;
  }

  /**
   * Check if a secondary can be used (because the read preference is *not* set to primary)
   */
  get secondaryOk(): boolean {
    return this.s.readPreference?.preference !== 'primary' || false;
  }

  get readConcern(): ReadConcern | undefined {
    return this.s.readConcern;
  }

  /**
   * The current readPreference of the Db. If not explicitly defined for
   * this Db, will be inherited from the parent MongoClient
   */
  get readPreference(): ReadPreference {
    if (this.s.readPreference == null) {
      return this.client.readPreference;
    }

    return this.s.readPreference;
  }

  get bsonOptions(): BSONSerializeOptions {
    return this.s.bsonOptions;
  }

  // get the write Concern
  get writeConcern(): WriteConcern | undefined {
    return this.s.writeConcern;
  }

  get namespace(): string {
    return this.s.namespace.toString();
  }

  public get timeoutMS(): number | undefined {
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
  async createCollection<TSchema extends Document = Document>(
    name: string,
    options?: CreateCollectionOptions
  ): Promise<Collection<TSchema>> {
    options = resolveOptions(this, options);
    return await createCollections<TSchema>(this, name, options);
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
  async command(command: Document, options?: RunCommandOptions & Abortable): Promise<Document> {
    // Intentionally, we do not inherit options from parent for this operation.
    return await executeOperation(
      this.client,
      new RunCommandOperation(
        this.s.namespace,
        command,
        resolveOptions(undefined, {
          ...resolveBSONOptions(options),
          timeoutMS: options?.timeoutMS ?? this.timeoutMS,
          session: options?.session,
          readPreference: options?.readPreference,
          signal: options?.signal
        })
      )
    );
  }

  /**
   * Execute an aggregation framework pipeline against the database.
   *
   * @param pipeline - An array of aggregation stages to be executed
   * @param options - Optional settings for the command
   */
  aggregate<T extends Document = Document>(
    pipeline: Document[] = [],
    options?: AggregateOptions
  ): AggregationCursor<T> {
    return new AggregationCursor(
      this.client,
      this.s.namespace,
      pipeline,
      resolveOptions(this, options)
    );
  }

  /** Return the Admin db instance */
  admin(): Admin {
    return new Admin(this);
  }

  /**
   * Returns a reference to a MongoDB Collection. If it does not exist it will be created implicitly.
   *
   * Collection namespace validation is performed server-side.
   *
   * @param name - the collection name we wish to access.
   * @returns return the new Collection instance
   */
  collection<TSchema extends Document = Document>(
    name: string,
    options: CollectionOptions = {}
  ): Collection<TSchema> {
    if (typeof options === 'function') {
      throw new MongoInvalidArgumentError('The callback form of this helper has been removed.');
    }
    return new Collection<TSchema>(this, name, resolveOptions(this, options));
  }

  /**
   * Get all the db statistics.
   *
   * @param options - Optional settings for the command
   */
  async stats(options?: DbStatsOptions): Promise<Document> {
    return await executeOperation(
      this.client,
      new DbStatsOperation(this, resolveOptions(this, options))
    );
  }

  /**
   * List all collections of this database with optional filter
   *
   * @param filter - Query to filter collections by
   * @param options - Optional settings for the command
   */
  listCollections(
    filter: Document,
    options: Exclude<ListCollectionsOptions, 'nameOnly'> & { nameOnly: true } & Abortable
  ): ListCollectionsCursor<Pick<CollectionInfo, 'name' | 'type'>>;
  listCollections(
    filter: Document,
    options: Exclude<ListCollectionsOptions, 'nameOnly'> & { nameOnly: false } & Abortable
  ): ListCollectionsCursor<CollectionInfo>;
  listCollections<
    T extends Pick<CollectionInfo, 'name' | 'type'> | CollectionInfo =
      | Pick<CollectionInfo, 'name' | 'type'>
      | CollectionInfo
  >(filter?: Document, options?: ListCollectionsOptions & Abortable): ListCollectionsCursor<T>;
  listCollections<
    T extends Pick<CollectionInfo, 'name' | 'type'> | CollectionInfo =
      | Pick<CollectionInfo, 'name' | 'type'>
      | CollectionInfo
  >(
    filter: Document = {},
    options: ListCollectionsOptions & Abortable = {}
  ): ListCollectionsCursor<T> {
    return new ListCollectionsCursor<T>(this, filter, resolveOptions(this, options));
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
  async renameCollection<TSchema extends Document = Document>(
    fromCollection: string,
    toCollection: string,
    options?: RenameOptions
  ): Promise<Collection<TSchema>> {
    // Intentionally, we do not inherit options from parent for this operation.
    return await executeOperation(
      this.client,
      new RenameOperation(
        this.collection<TSchema>(fromCollection) as TODO_NODE_3286,
        toCollection,
        resolveOptions(undefined, {
          ...options,
          new_collection: true,
          readPreference: ReadPreference.primary
        })
      ) as TODO_NODE_3286
    );
  }

  /**
   * Drop a collection from the database, removing it permanently. New accesses will create a new collection.
   *
   * @param name - Name of collection to drop
   * @param options - Optional settings for the command
   */
  async dropCollection(name: string, options?: DropCollectionOptions): Promise<boolean> {
    options = resolveOptions(this, options);
    return await dropCollections(this, name, options);
  }

  /**
   * Drop a database, removing it permanently from the server.
   *
   * @param options - Optional settings for the command
   */
  async dropDatabase(options?: DropDatabaseOptions): Promise<boolean> {
    return await executeOperation(
      this.client,
      new DropDatabaseOperation(this, resolveOptions(this, options))
    );
  }

  /**
   * Fetch all collections for the current db.
   *
   * @param options - Optional settings for the command
   */
  async collections(options?: ListCollectionsOptions): Promise<Collection[]> {
    options = resolveOptions(this, options);
    const collections = await this.listCollections({}, { ...options, nameOnly: true }).toArray();

    return collections
      .filter(
        // Filter collections removing any illegal ones
        ({ name }) => !name.includes('$')
      )
      .map(({ name }) => new Collection(this, name, this.s.options));
  }

  /**
   * Creates an index on the db and collection.
   *
   * @param name - Name of the collection to create the index on.
   * @param indexSpec - Specify the field to index, or an index specification
   * @param options - Optional settings for the command
   */
  async createIndex(
    name: string,
    indexSpec: IndexSpecification,
    options?: CreateIndexesOptions
  ): Promise<string> {
    const indexes = await executeOperation(
      this.client,
      CreateIndexesOperation.fromIndexSpecification(this, name, indexSpec, options)
    );
    return indexes[0];
  }

  /**
   * Remove a user from a database
   *
   * @param username - The username to remove
   * @param options - Optional settings for the command
   */
  async removeUser(username: string, options?: RemoveUserOptions): Promise<boolean> {
    return await executeOperation(
      this.client,
      new RemoveUserOperation(this, username, resolveOptions(this, options))
    );
  }

  /**
   * Set the current profiling level of MongoDB
   *
   * @param level - The new profiling level (off, slow_only, all).
   * @param options - Optional settings for the command
   */
  async setProfilingLevel(
    level: ProfilingLevel,
    options?: SetProfilingLevelOptions
  ): Promise<ProfilingLevel> {
    return await executeOperation(
      this.client,
      new SetProfilingLevelOperation(this, level, resolveOptions(this, options))
    );
  }

  /**
   * Retrieve the current profiling Level for MongoDB
   *
   * @param options - Optional settings for the command
   */
  async profilingLevel(options?: ProfilingLevelOptions): Promise<string> {
    return await executeOperation(
      this.client,
      new ProfilingLevelOperation(this, resolveOptions(this, options))
    );
  }

  /**
   * Retrieves this collections index info.
   *
   * @param name - The name of the collection.
   * @param options - Optional settings for the command
   */
  indexInformation(
    name: string,
    options: IndexInformationOptions & { full: true }
  ): Promise<IndexDescriptionInfo[]>;
  indexInformation(
    name: string,
    options: IndexInformationOptions & { full?: false }
  ): Promise<IndexDescriptionCompact>;
  indexInformation(
    name: string,
    options: IndexInformationOptions
  ): Promise<IndexDescriptionCompact | IndexDescriptionInfo[]>;
  indexInformation(name: string): Promise<IndexDescriptionCompact>;
  async indexInformation(
    name: string,
    options?: IndexInformationOptions
  ): Promise<IndexDescriptionCompact | IndexDescriptionInfo[]> {
    return await this.collection(name).indexInformation(resolveOptions(this, options));
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
  watch<
    TSchema extends Document = Document,
    TChange extends Document = ChangeStreamDocument<TSchema>
  >(pipeline: Document[] = [], options: ChangeStreamOptions = {}): ChangeStream<TSchema, TChange> {
    // Allow optionally not specifying a pipeline
    if (!Array.isArray(pipeline)) {
      options = pipeline;
      pipeline = [];
    }

    return new ChangeStream<TSchema, TChange>(this, pipeline, resolveOptions(this, options));
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
  runCursorCommand(command: Document, options?: RunCursorCommandOptions): RunCommandCursor {
    return new RunCommandCursor(this, command, options);
  }
}
