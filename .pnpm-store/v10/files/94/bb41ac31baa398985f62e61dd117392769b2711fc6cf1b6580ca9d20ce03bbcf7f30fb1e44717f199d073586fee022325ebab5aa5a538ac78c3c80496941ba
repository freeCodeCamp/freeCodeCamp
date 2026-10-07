import { type Document } from '../../bson';
import type { Filter, OptionalId, UpdateFilter, WithoutId } from '../../mongo_types';
import type { CollationOptions, CommandOperationOptions } from '../../operations/command';
import type { Hint } from '../../operations/operation';
import { type Sort } from '../../sort';

/** @public */
export interface ClientBulkWriteOptions extends CommandOperationOptions {
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
export interface ClientWriteModel {
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

/** @public */
export interface ClientInsertOneModel<TSchema> extends ClientWriteModel {
  name: 'insertOne';
  /** The document to insert. */
  document: OptionalId<TSchema>;
}

/** @public */
export interface ClientDeleteOneModel<TSchema> extends ClientWriteModel {
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
export interface ClientDeleteManyModel<TSchema> extends ClientWriteModel {
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
export interface ClientReplaceOneModel<TSchema> extends ClientWriteModel {
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

/** @public */
export interface ClientUpdateOneModel<TSchema> extends ClientWriteModel {
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
export interface ClientUpdateManyModel<TSchema> extends ClientWriteModel {
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

/**
 * Used to represent any of the client bulk write models that can be passed as an array
 * to MongoClient#bulkWrite.
 * @public
 */
export type AnyClientBulkWriteModel<TSchema extends Document> =
  | ClientInsertOneModel<TSchema>
  | ClientReplaceOneModel<TSchema>
  | ClientUpdateOneModel<TSchema>
  | ClientUpdateManyModel<TSchema>
  | ClientDeleteOneModel<TSchema>
  | ClientDeleteManyModel<TSchema>;

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
export type ClientBulkWriteModel<
  SchemaMap extends Record<string, Document> = Record<string, Document>
> = {
  [Namespace in keyof SchemaMap]: AnyClientBulkWriteModel<SchemaMap[Namespace]> & {
    namespace: Namespace;
  };
}[keyof SchemaMap];

/** @public */
export interface ClientBulkWriteResult {
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
export interface ClientBulkWriteError {
  code: number;
  message: string;
}

/** @public */
export interface ClientInsertOneResult {
  /**
   * The _id of the inserted document.
   */
  insertedId: any;
}

/** @public */
export interface ClientUpdateResult {
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
export interface ClientDeleteResult {
  /**
   * The number of documents that were deleted.
   */
  deletedCount: number;
}
