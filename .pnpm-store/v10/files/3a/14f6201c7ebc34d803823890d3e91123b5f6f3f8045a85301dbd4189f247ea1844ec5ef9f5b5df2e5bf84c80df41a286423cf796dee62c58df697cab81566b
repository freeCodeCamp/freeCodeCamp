import { type BSONSerializeOptions, type Document, EJSON, resolveBSONOptions } from '../bson';
import type { Collection } from '../collection';
import {
  type AnyError,
  MongoBatchReExecutionError,
  MONGODB_ERROR_CODES,
  MongoInvalidArgumentError,
  MongoRuntimeError,
  MongoServerError,
  MongoWriteConcernError
} from '../error';
import type { Filter, OneOrMore, OptionalId, UpdateFilter, WithoutId } from '../mongo_types';
import type { CollationOptions, CommandOperationOptions } from '../operations/command';
import { DeleteOperation, type DeleteStatement, makeDeleteStatement } from '../operations/delete';
import { executeOperation } from '../operations/execute_operation';
import { InsertOperation } from '../operations/insert';
import { type Hint } from '../operations/operation';
import { makeUpdateStatement, UpdateOperation, type UpdateStatement } from '../operations/update';
import type { Topology } from '../sdam/topology';
import { type Sort } from '../sort';
import { TimeoutContext } from '../timeout';
import {
  applyRetryableWrites,
  getTopology,
  hasAtomicOperators,
  maybeAddIdToDocuments,
  type MongoDBNamespace,
  resolveOptions
} from '../utils';
import { WriteConcern } from '../write_concern';

/** @public */
export const BatchType = Object.freeze({
  INSERT: 1,
  UPDATE: 2,
  DELETE: 3
} as const);

/** @public */
export type BatchType = (typeof BatchType)[keyof typeof BatchType];

/** @public */
export interface InsertOneModel<TSchema extends Document = Document> {
  /** The document to insert. */
  document: OptionalId<TSchema>;
}

/** @public */
export interface DeleteOneModel<TSchema extends Document = Document> {
  /** The filter to limit the deleted documents. */
  filter: Filter<TSchema>;
  /** Specifies a collation. */
  collation?: CollationOptions;
  /** The index to use. If specified, then the query system will only consider plans using the hinted index. */
  hint?: Hint;
}

/** @public */
export interface DeleteManyModel<TSchema extends Document = Document> {
  /** The filter to limit the deleted documents. */
  filter: Filter<TSchema>;
  /** Specifies a collation. */
  collation?: CollationOptions;
  /** The index to use. If specified, then the query system will only consider plans using the hinted index. */
  hint?: Hint;
}

/** @public */
export interface ReplaceOneModel<TSchema extends Document = Document> {
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
export interface UpdateOneModel<TSchema extends Document = Document> {
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
export interface UpdateManyModel<TSchema extends Document = Document> {
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
export type AnyBulkWriteOperation<TSchema extends Document = Document> =
  | { insertOne: InsertOneModel<TSchema> }
  | { replaceOne: ReplaceOneModel<TSchema> }
  | { updateOne: UpdateOneModel<TSchema> }
  | { updateMany: UpdateManyModel<TSchema> }
  | { deleteOne: DeleteOneModel<TSchema> }
  | { deleteMany: DeleteManyModel<TSchema> };

/** @internal */
export interface BulkResult {
  ok: number;
  writeErrors: WriteError[];
  writeConcernErrors: WriteConcernError[];
  insertedIds: Document[];
  nInserted: number;
  nUpserted: number;
  nMatched: number;
  nModified: number;
  nRemoved: number;
  upserted: Document[];
}

/**
 * Keeps the state of a unordered batch so we can rewrite the results
 * correctly after command execution
 *
 * @public
 */
export class Batch<T = Document> {
  originalZeroIndex: number;
  currentIndex: number;
  originalIndexes: number[];
  batchType: BatchType;
  operations: T[];
  size: number;
  sizeBytes: number;

  constructor(batchType: BatchType, originalZeroIndex: number) {
    this.originalZeroIndex = originalZeroIndex;
    this.currentIndex = 0;
    this.originalIndexes = [];
    this.batchType = batchType;
    this.operations = [];
    this.size = 0;
    this.sizeBytes = 0;
  }
}

/**
 * @public
 * The result of a bulk write.
 */
export class BulkWriteResult {
  private readonly result: BulkResult;
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
  readonly upsertedIds: { [key: number]: any };
  /** Inserted document generated Id's, hash key is the index of the originating operation */
  readonly insertedIds: { [key: number]: any };

  private static generateIdMap(ids: Document[]): { [key: number]: any } {
    const idMap: { [index: number]: any } = {};
    for (const doc of ids) {
      idMap[doc.index] = doc._id;
    }
    return idMap;
  }

  /**
   * Create a new BulkWriteResult instance
   * @internal
   */
  constructor(bulkResult: BulkResult, isOrdered: boolean) {
    this.result = bulkResult;
    this.insertedCount = this.result.nInserted ?? 0;
    this.matchedCount = this.result.nMatched ?? 0;
    this.modifiedCount = this.result.nModified ?? 0;
    this.deletedCount = this.result.nRemoved ?? 0;
    this.upsertedCount = this.result.upserted.length ?? 0;
    this.upsertedIds = BulkWriteResult.generateIdMap(this.result.upserted);
    this.insertedIds = BulkWriteResult.generateIdMap(
      this.getSuccessfullyInsertedIds(bulkResult, isOrdered)
    );
    Object.defineProperty(this, 'result', { value: this.result, enumerable: false });
  }

  /** Evaluates to true if the bulk operation correctly executes */
  get ok(): number {
    return this.result.ok;
  }

  /**
   * Returns document_ids that were actually inserted
   * @internal
   */
  private getSuccessfullyInsertedIds(bulkResult: BulkResult, isOrdered: boolean): Document[] {
    if (bulkResult.writeErrors.length === 0) return bulkResult.insertedIds;

    if (isOrdered) {
      return bulkResult.insertedIds.slice(0, bulkResult.writeErrors[0].index);
    }

    return bulkResult.insertedIds.filter(
      ({ index }) => !bulkResult.writeErrors.some(writeError => index === writeError.index)
    );
  }

  /** Returns the upserted id at the given index */
  getUpsertedIdAt(index: number): Document | undefined {
    return this.result.upserted[index];
  }

  /** Returns raw internal result */
  getRawResponse(): Document {
    return this.result;
  }

  /** Returns true if the bulk operation contains a write error */
  hasWriteErrors(): boolean {
    return this.result.writeErrors.length > 0;
  }

  /** Returns the number of write errors from the bulk operation */
  getWriteErrorCount(): number {
    return this.result.writeErrors.length;
  }

  /** Returns a specific write error object */
  getWriteErrorAt(index: number): WriteError | undefined {
    return index < this.result.writeErrors.length ? this.result.writeErrors[index] : undefined;
  }

  /** Retrieve all write errors */
  getWriteErrors(): WriteError[] {
    return this.result.writeErrors;
  }

  /** Retrieve the write concern error if one exists */
  getWriteConcernError(): WriteConcernError | undefined {
    if (this.result.writeConcernErrors.length === 0) {
      return;
    } else if (this.result.writeConcernErrors.length === 1) {
      // Return the error
      return this.result.writeConcernErrors[0];
    } else {
      // Combine the errors
      let errmsg = '';
      for (let i = 0; i < this.result.writeConcernErrors.length; i++) {
        const err = this.result.writeConcernErrors[i];
        errmsg = errmsg + err.errmsg;

        // TODO: Something better
        if (i === 0) errmsg = errmsg + ' and ';
      }

      return new WriteConcernError({ errmsg, code: MONGODB_ERROR_CODES.WriteConcernTimeout });
    }
  }

  toString(): string {
    return `BulkWriteResult(${EJSON.stringify(this.result)})`;
  }

  isOk(): boolean {
    return this.result.ok === 1;
  }
}

/** @public */
export interface WriteConcernErrorData {
  code: number;
  errmsg: string;
  errInfo?: Document;
}

/**
 * An error representing a failure by the server to apply the requested write concern to the bulk operation.
 * @public
 * @category Error
 */
export class WriteConcernError {
  /** @internal */
  private serverError: WriteConcernErrorData;

  constructor(error: WriteConcernErrorData) {
    this.serverError = error;
  }

  /** Write concern error code. */
  get code(): number | undefined {
    return this.serverError.code;
  }

  /** Write concern error message. */
  get errmsg(): string | undefined {
    return this.serverError.errmsg;
  }

  /** Write concern error info. */
  get errInfo(): Document | undefined {
    return this.serverError.errInfo;
  }

  toJSON(): WriteConcernErrorData {
    return this.serverError;
  }

  toString(): string {
    return `WriteConcernError(${this.errmsg})`;
  }
}

/** @public */
export interface BulkWriteOperationError {
  index: number;
  code: number;
  errmsg: string;
  errInfo: Document;
  op: Document | UpdateStatement | DeleteStatement;
}

/**
 * An error that occurred during a BulkWrite on the server.
 * @public
 * @category Error
 */
export class WriteError {
  err: BulkWriteOperationError;

  constructor(err: BulkWriteOperationError) {
    this.err = err;
  }

  /** WriteError code. */
  get code(): number {
    return this.err.code;
  }

  /** WriteError original bulk operation index. */
  get index(): number {
    return this.err.index;
  }

  /** WriteError message. */
  get errmsg(): string | undefined {
    return this.err.errmsg;
  }

  /** WriteError details. */
  get errInfo(): Document | undefined {
    return this.err.errInfo;
  }

  /** Returns the underlying operation that caused the error */
  getOperation(): Document {
    return this.err.op;
  }

  toJSON(): { code: number; index: number; errmsg?: string; op: Document } {
    return { code: this.err.code, index: this.err.index, errmsg: this.err.errmsg, op: this.err.op };
  }

  toString(): string {
    return `WriteError(${JSON.stringify(this.toJSON())})`;
  }
}

/** Merges results into shared data structure */
export function mergeBatchResults(
  batch: Batch,
  bulkResult: BulkResult,
  err?: AnyError,
  result?: Document
): void {
  // If we have an error set the result to be the err object
  if (err) {
    result = err;
  } else if (result && result.result) {
    result = result.result;
  }

  if (result == null) {
    return;
  }

  // Do we have a top level error stop processing and return
  if (result.ok === 0 && bulkResult.ok === 1) {
    bulkResult.ok = 0;

    const writeError = {
      index: 0,
      code: result.code || 0,
      errmsg: result.message,
      errInfo: result.errInfo,
      op: batch.operations[0]
    };

    bulkResult.writeErrors.push(new WriteError(writeError));
    return;
  } else if (result.ok === 0 && bulkResult.ok === 0) {
    return;
  }

  // If we have an insert Batch type
  if (isInsertBatch(batch) && result.n) {
    bulkResult.nInserted = bulkResult.nInserted + result.n;
  }

  // If we have an insert Batch type
  if (isDeleteBatch(batch) && result.n) {
    bulkResult.nRemoved = bulkResult.nRemoved + result.n;
  }

  let nUpserted = 0;

  // We have an array of upserted values, we need to rewrite the indexes
  if (Array.isArray(result.upserted)) {
    nUpserted = result.upserted.length;

    for (let i = 0; i < result.upserted.length; i++) {
      bulkResult.upserted.push({
        index: result.upserted[i].index + batch.originalZeroIndex,
        _id: result.upserted[i]._id
      });
    }
  } else if (result.upserted) {
    nUpserted = 1;

    bulkResult.upserted.push({
      index: batch.originalZeroIndex,
      _id: result.upserted
    });
  }

  // If we have an update Batch type
  if (isUpdateBatch(batch) && result.n) {
    const nModified = result.nModified;
    bulkResult.nUpserted = bulkResult.nUpserted + nUpserted;
    bulkResult.nMatched = bulkResult.nMatched + (result.n - nUpserted);

    if (typeof nModified === 'number') {
      bulkResult.nModified = bulkResult.nModified + nModified;
    } else {
      bulkResult.nModified = 0;
    }
  }

  if (Array.isArray(result.writeErrors)) {
    for (let i = 0; i < result.writeErrors.length; i++) {
      const writeError = {
        index: batch.originalIndexes[result.writeErrors[i].index],
        code: result.writeErrors[i].code,
        errmsg: result.writeErrors[i].errmsg,
        errInfo: result.writeErrors[i].errInfo,
        op: batch.operations[result.writeErrors[i].index]
      };

      bulkResult.writeErrors.push(new WriteError(writeError));
    }
  }

  if (result.writeConcernError) {
    bulkResult.writeConcernErrors.push(new WriteConcernError(result.writeConcernError));
  }
}

async function executeCommands(
  bulkOperation: BulkOperationBase,
  options: BulkWriteOptions & { timeoutContext?: TimeoutContext | null }
): Promise<BulkWriteResult> {
  if (bulkOperation.s.batches.length === 0) {
    return new BulkWriteResult(bulkOperation.s.bulkResult, bulkOperation.isOrdered);
  }

  for (const batch of bulkOperation.s.batches) {
    const finalOptions = resolveOptions(bulkOperation, {
      ...options,
      ordered: bulkOperation.isOrdered
    });

    if (finalOptions.bypassDocumentValidation !== true) {
      delete finalOptions.bypassDocumentValidation;
    }

    // Is the bypassDocumentValidation options specific
    if (bulkOperation.s.bypassDocumentValidation === true) {
      finalOptions.bypassDocumentValidation = true;
    }

    // Is the checkKeys option disabled
    if (bulkOperation.s.checkKeys === false) {
      finalOptions.checkKeys = false;
    }

    if (finalOptions.retryWrites) {
      if (isUpdateBatch(batch)) {
        finalOptions.retryWrites =
          finalOptions.retryWrites && !batch.operations.some(op => op.multi);
      }

      if (isDeleteBatch(batch)) {
        finalOptions.retryWrites =
          finalOptions.retryWrites && !batch.operations.some(op => op.limit === 0);
      }
    }

    const operation = isInsertBatch(batch)
      ? new InsertOperation(bulkOperation.s.namespace, batch.operations, finalOptions)
      : isUpdateBatch(batch)
        ? new UpdateOperation(bulkOperation.s.namespace, batch.operations, finalOptions)
        : isDeleteBatch(batch)
          ? new DeleteOperation(bulkOperation.s.namespace, batch.operations, finalOptions)
          : null;

    if (operation == null) throw new MongoRuntimeError(`Unknown batchType: ${batch.batchType}`);

    let thrownError = null;
    let result;
    try {
      result = await executeOperation(
        bulkOperation.s.collection.client,
        operation,
        finalOptions.timeoutContext
      );
    } catch (error) {
      thrownError = error;
    }

    if (thrownError != null) {
      if (thrownError instanceof MongoWriteConcernError) {
        mergeBatchResults(batch, bulkOperation.s.bulkResult, thrownError, result);
        const writeResult = new BulkWriteResult(
          bulkOperation.s.bulkResult,
          bulkOperation.isOrdered
        );

        throw new MongoBulkWriteError(
          {
            message: thrownError.result.writeConcernError.errmsg,
            code: thrownError.result.writeConcernError.code
          },
          writeResult
        );
      } else {
        // Error is a driver related error not a bulk op error, return early
        throw new MongoBulkWriteError(
          thrownError,
          new BulkWriteResult(bulkOperation.s.bulkResult, bulkOperation.isOrdered)
        );
      }
    }

    mergeBatchResults(batch, bulkOperation.s.bulkResult, thrownError, result);
    const writeResult = new BulkWriteResult(bulkOperation.s.bulkResult, bulkOperation.isOrdered);
    bulkOperation.handleWriteError(writeResult);
  }

  bulkOperation.s.batches.length = 0;

  const writeResult = new BulkWriteResult(bulkOperation.s.bulkResult, bulkOperation.isOrdered);
  bulkOperation.handleWriteError(writeResult);
  return writeResult;
}

/**
 * An error indicating an unsuccessful Bulk Write
 * @public
 * @category Error
 */
export class MongoBulkWriteError extends MongoServerError {
  result: BulkWriteResult;
  writeErrors: OneOrMore<WriteError> = [];
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
  constructor(
    error:
      | { message: string; code: number; writeErrors?: WriteError[] }
      | WriteConcernError
      | AnyError,
    result: BulkWriteResult
  ) {
    super(error);

    if (error instanceof WriteConcernError) this.err = error;
    else if (!(error instanceof Error)) {
      this.message = error.message;
      this.code = error.code;
      this.writeErrors = error.writeErrors ?? [];
    }

    this.result = result;
    Object.assign(this, error);
  }

  override get name(): string {
    return 'MongoBulkWriteError';
  }

  /** Number of documents inserted. */
  get insertedCount(): number {
    return this.result.insertedCount;
  }
  /** Number of documents matched for update. */
  get matchedCount(): number {
    return this.result.matchedCount;
  }
  /** Number of documents modified. */
  get modifiedCount(): number {
    return this.result.modifiedCount;
  }
  /** Number of documents deleted. */
  get deletedCount(): number {
    return this.result.deletedCount;
  }
  /** Number of documents upserted. */
  get upsertedCount(): number {
    return this.result.upsertedCount;
  }
  /** Inserted document generated Id's, hash key is the index of the originating operation */
  get insertedIds(): { [key: number]: any } {
    return this.result.insertedIds;
  }
  /** Upserted document generated Id's, hash key is the index of the originating operation */
  get upsertedIds(): { [key: number]: any } {
    return this.result.upsertedIds;
  }
}

/**
 * A builder object that is returned from {@link BulkOperationBase#find}.
 * Is used to build a write operation that involves a query filter.
 *
 * @public
 */
export class FindOperators {
  bulkOperation: BulkOperationBase;

  /**
   * Creates a new FindOperators object.
   * @internal
   */
  constructor(bulkOperation: BulkOperationBase) {
    this.bulkOperation = bulkOperation;
  }

  /** Add a multiple update operation to the bulk operation */
  update(updateDocument: Document | Document[]): BulkOperationBase {
    const currentOp = buildCurrentOp(this.bulkOperation);
    return this.bulkOperation.addToOperationsList(
      BatchType.UPDATE,
      makeUpdateStatement(currentOp.selector, updateDocument, {
        ...currentOp,
        multi: true
      })
    );
  }

  /** Add a single update operation to the bulk operation */
  updateOne(updateDocument: Document | Document[]): BulkOperationBase {
    if (!hasAtomicOperators(updateDocument, this.bulkOperation.bsonOptions)) {
      throw new MongoInvalidArgumentError('Update document requires atomic operators');
    }

    const currentOp = buildCurrentOp(this.bulkOperation);
    return this.bulkOperation.addToOperationsList(
      BatchType.UPDATE,
      makeUpdateStatement(currentOp.selector, updateDocument, { ...currentOp, multi: false })
    );
  }

  /** Add a replace one operation to the bulk operation */
  replaceOne(replacement: Document): BulkOperationBase {
    if (hasAtomicOperators(replacement)) {
      throw new MongoInvalidArgumentError('Replacement document must not use atomic operators');
    }

    const currentOp = buildCurrentOp(this.bulkOperation);
    return this.bulkOperation.addToOperationsList(
      BatchType.UPDATE,
      makeUpdateStatement(currentOp.selector, replacement, { ...currentOp, multi: false })
    );
  }

  /** Add a delete one operation to the bulk operation */
  deleteOne(): BulkOperationBase {
    const currentOp = buildCurrentOp(this.bulkOperation);
    return this.bulkOperation.addToOperationsList(
      BatchType.DELETE,
      makeDeleteStatement(currentOp.selector, { ...currentOp, limit: 1 })
    );
  }

  /** Add a delete many operation to the bulk operation */
  delete(): BulkOperationBase {
    const currentOp = buildCurrentOp(this.bulkOperation);
    return this.bulkOperation.addToOperationsList(
      BatchType.DELETE,
      makeDeleteStatement(currentOp.selector, { ...currentOp, limit: 0 })
    );
  }

  /** Upsert modifier for update bulk operation, noting that this operation is an upsert. */
  upsert(): this {
    if (!this.bulkOperation.s.currentOp) {
      this.bulkOperation.s.currentOp = {};
    }

    this.bulkOperation.s.currentOp.upsert = true;
    return this;
  }

  /** Specifies the collation for the query condition. */
  collation(collation: CollationOptions): this {
    if (!this.bulkOperation.s.currentOp) {
      this.bulkOperation.s.currentOp = {};
    }

    this.bulkOperation.s.currentOp.collation = collation;
    return this;
  }

  /** Specifies arrayFilters for UpdateOne or UpdateMany bulk operations. */
  arrayFilters(arrayFilters: Document[]): this {
    if (!this.bulkOperation.s.currentOp) {
      this.bulkOperation.s.currentOp = {};
    }

    this.bulkOperation.s.currentOp.arrayFilters = arrayFilters;
    return this;
  }

  /** Specifies hint for the bulk operation. */
  hint(hint: Hint): this {
    if (!this.bulkOperation.s.currentOp) {
      this.bulkOperation.s.currentOp = {};
    }

    this.bulkOperation.s.currentOp.hint = hint;
    return this;
  }
}

/** @internal */
export interface BulkOperationPrivate {
  bulkResult: BulkResult;
  currentBatch?: Batch;
  currentIndex: number;
  // ordered specific
  currentBatchSize: number;
  currentBatchSizeBytes: number;
  // unordered specific
  currentInsertBatch?: Batch;
  currentUpdateBatch?: Batch;
  currentRemoveBatch?: Batch;
  batches: Batch[];
  // Write concern
  writeConcern?: WriteConcern;
  // Max batch size options
  maxBsonObjectSize: number;
  maxBatchSizeBytes: number;
  maxWriteBatchSize: number;
  maxKeySize: number;
  // Namespace
  namespace: MongoDBNamespace;
  // Topology
  topology: Topology;
  // Options
  options: BulkWriteOptions;
  // BSON options
  bsonOptions: BSONSerializeOptions;
  // Document used to build a bulk operation
  currentOp?: Document;
  // Executed
  executed: boolean;
  // Collection
  collection: Collection;
  // Fundamental error
  err?: AnyError;
  // check keys
  checkKeys: boolean;
  bypassDocumentValidation?: boolean;
}

/** @public */
export interface BulkWriteOptions extends CommandOperationOptions {
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

  /** @internal */
  timeoutContext?: TimeoutContext;
}

/** @public */
export abstract class BulkOperationBase {
  isOrdered: boolean;
  /** @internal */
  s: BulkOperationPrivate;
  operationId?: number;
  private collection: Collection;

  /**
   * Create a new OrderedBulkOperation or UnorderedBulkOperation instance
   * @internal
   */
  constructor(collection: Collection, options: BulkWriteOptions, isOrdered: boolean) {
    this.collection = collection;
    // determine whether bulkOperation is ordered or unordered
    this.isOrdered = isOrdered;

    const topology = getTopology(collection);
    options = options == null ? {} : options;
    // TODO Bring from driver information in hello
    // Get the namespace for the write operations
    const namespace = collection.s.namespace;
    // Used to mark operation as executed
    const executed = false;

    // Current item
    const currentOp = undefined;

    // Set max byte size
    const hello = topology.lastHello();

    // If we have autoEncryption on, batch-splitting must be done on 2mb chunks, but single documents
    // over 2mb are still allowed
    const usingAutoEncryption = !!(topology.s.options && topology.s.options.autoEncrypter);
    const maxBsonObjectSize =
      hello && hello.maxBsonObjectSize ? hello.maxBsonObjectSize : 1024 * 1024 * 16;
    const maxBatchSizeBytes = usingAutoEncryption ? 1024 * 1024 * 2 : maxBsonObjectSize;
    const maxWriteBatchSize = hello && hello.maxWriteBatchSize ? hello.maxWriteBatchSize : 1000;

    // Calculates the largest possible size of an Array key, represented as a BSON string
    // element. This calculation:
    //     1 byte for BSON type
    //     # of bytes = length of (string representation of (maxWriteBatchSize - 1))
    //   + 1 bytes for null terminator
    const maxKeySize = (maxWriteBatchSize - 1).toString(10).length + 2;

    // Final options for retryable writes
    let finalOptions = Object.assign({}, options);
    finalOptions = applyRetryableWrites(finalOptions, collection.db);

    // Final results
    const bulkResult: BulkResult = {
      ok: 1,
      writeErrors: [],
      writeConcernErrors: [],
      insertedIds: [],
      nInserted: 0,
      nUpserted: 0,
      nMatched: 0,
      nModified: 0,
      nRemoved: 0,
      upserted: []
    };

    // Internal state
    this.s = {
      // Final result
      bulkResult,
      // Current batch state
      currentBatch: undefined,
      currentIndex: 0,
      // ordered specific
      currentBatchSize: 0,
      currentBatchSizeBytes: 0,
      // unordered specific
      currentInsertBatch: undefined,
      currentUpdateBatch: undefined,
      currentRemoveBatch: undefined,
      batches: [],
      // Write concern
      writeConcern: WriteConcern.fromOptions(options),
      // Max batch size options
      maxBsonObjectSize,
      maxBatchSizeBytes,
      maxWriteBatchSize,
      maxKeySize,
      // Namespace
      namespace,
      // Topology
      topology,
      // Options
      options: finalOptions,
      // BSON options
      bsonOptions: resolveBSONOptions(options),
      // Current operation
      currentOp,
      // Executed
      executed,
      // Collection
      collection,
      // Fundamental error
      err: undefined,
      // check keys
      checkKeys: typeof options.checkKeys === 'boolean' ? options.checkKeys : false
    };

    // bypass Validation
    if (options.bypassDocumentValidation === true) {
      this.s.bypassDocumentValidation = true;
    }
  }

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
  insert(document: Document): BulkOperationBase {
    maybeAddIdToDocuments(this.collection, document, {
      forceServerObjectId: this.shouldForceServerObjectId()
    });

    return this.addToOperationsList(BatchType.INSERT, document);
  }

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
  find(selector: Document): FindOperators {
    if (!selector) {
      throw new MongoInvalidArgumentError('Bulk find operation must specify a selector');
    }

    // Save a current selector
    this.s.currentOp = {
      selector: selector
    };

    return new FindOperators(this);
  }

  /** Specifies a raw operation to perform in the bulk write. */
  raw(op: AnyBulkWriteOperation): this {
    if (op == null || typeof op !== 'object') {
      throw new MongoInvalidArgumentError('Operation must be an object with an operation key');
    }
    if ('insertOne' in op) {
      const forceServerObjectId = this.shouldForceServerObjectId();
      const document =
        op.insertOne && op.insertOne.document == null
          ? // TODO(NODE-6003): remove support for omitting the `documents` subdocument in bulk inserts
            (op.insertOne as Document)
          : op.insertOne.document;

      maybeAddIdToDocuments(this.collection, document, { forceServerObjectId });

      return this.addToOperationsList(BatchType.INSERT, document);
    }

    if ('replaceOne' in op || 'updateOne' in op || 'updateMany' in op) {
      if ('replaceOne' in op) {
        if ('q' in op.replaceOne) {
          throw new MongoInvalidArgumentError('Raw operations are not allowed');
        }
        const updateStatement = makeUpdateStatement(
          op.replaceOne.filter,
          op.replaceOne.replacement,
          { ...op.replaceOne, multi: false }
        );
        if (hasAtomicOperators(updateStatement.u)) {
          throw new MongoInvalidArgumentError('Replacement document must not use atomic operators');
        }
        return this.addToOperationsList(BatchType.UPDATE, updateStatement);
      }

      if ('updateOne' in op) {
        if ('q' in op.updateOne) {
          throw new MongoInvalidArgumentError('Raw operations are not allowed');
        }
        const updateStatement = makeUpdateStatement(op.updateOne.filter, op.updateOne.update, {
          ...op.updateOne,
          multi: false
        });
        if (!hasAtomicOperators(updateStatement.u, this.bsonOptions)) {
          throw new MongoInvalidArgumentError('Update document requires atomic operators');
        }
        return this.addToOperationsList(BatchType.UPDATE, updateStatement);
      }

      if ('updateMany' in op) {
        if ('q' in op.updateMany) {
          throw new MongoInvalidArgumentError('Raw operations are not allowed');
        }
        const updateStatement = makeUpdateStatement(op.updateMany.filter, op.updateMany.update, {
          ...op.updateMany,
          multi: true
        });
        if (!hasAtomicOperators(updateStatement.u, this.bsonOptions)) {
          throw new MongoInvalidArgumentError('Update document requires atomic operators');
        }
        return this.addToOperationsList(BatchType.UPDATE, updateStatement);
      }
    }

    if ('deleteOne' in op) {
      if ('q' in op.deleteOne) {
        throw new MongoInvalidArgumentError('Raw operations are not allowed');
      }
      return this.addToOperationsList(
        BatchType.DELETE,
        makeDeleteStatement(op.deleteOne.filter, { ...op.deleteOne, limit: 1 })
      );
    }

    if ('deleteMany' in op) {
      if ('q' in op.deleteMany) {
        throw new MongoInvalidArgumentError('Raw operations are not allowed');
      }
      return this.addToOperationsList(
        BatchType.DELETE,
        makeDeleteStatement(op.deleteMany.filter, { ...op.deleteMany, limit: 0 })
      );
    }

    // otherwise an unknown operation was provided
    throw new MongoInvalidArgumentError(
      'bulkWrite only supports insertOne, updateOne, updateMany, deleteOne, deleteMany'
    );
  }

  get length(): number {
    return this.s.currentIndex;
  }

  get bsonOptions(): BSONSerializeOptions {
    return this.s.bsonOptions;
  }

  get writeConcern(): WriteConcern | undefined {
    return this.s.writeConcern;
  }

  get batches(): Batch[] {
    const batches = [...this.s.batches];
    if (this.isOrdered) {
      if (this.s.currentBatch) batches.push(this.s.currentBatch);
    } else {
      if (this.s.currentInsertBatch) batches.push(this.s.currentInsertBatch);
      if (this.s.currentUpdateBatch) batches.push(this.s.currentUpdateBatch);
      if (this.s.currentRemoveBatch) batches.push(this.s.currentRemoveBatch);
    }
    return batches;
  }

  async execute(options: BulkWriteOptions = {}): Promise<BulkWriteResult> {
    if (this.s.executed) {
      throw new MongoBatchReExecutionError();
    }

    const writeConcern = WriteConcern.fromOptions(options);
    if (writeConcern) {
      this.s.writeConcern = writeConcern;
    }

    // If we have current batch
    if (this.isOrdered) {
      if (this.s.currentBatch) this.s.batches.push(this.s.currentBatch);
    } else {
      if (this.s.currentInsertBatch) this.s.batches.push(this.s.currentInsertBatch);
      if (this.s.currentUpdateBatch) this.s.batches.push(this.s.currentUpdateBatch);
      if (this.s.currentRemoveBatch) this.s.batches.push(this.s.currentRemoveBatch);
    }
    // If we have no operations in the bulk raise an error
    if (this.s.batches.length === 0) {
      throw new MongoInvalidArgumentError('Invalid BulkOperation, Batch cannot be empty');
    }

    this.s.executed = true;
    const finalOptions = resolveOptions(this.collection, { ...this.s.options, ...options });

    // if there is no timeoutContext provided, create a timeoutContext and use it for
    // all batches in the bulk operation
    finalOptions.timeoutContext ??= TimeoutContext.create({
      session: finalOptions.session,
      timeoutMS: finalOptions.timeoutMS,
      serverSelectionTimeoutMS: this.collection.client.s.options.serverSelectionTimeoutMS,
      waitQueueTimeoutMS: this.collection.client.s.options.waitQueueTimeoutMS
    });

    if (finalOptions.session == null) {
      // if there is not an explicit session provided to `execute()`, create
      // an implicit session and use that for all batches in the bulk operation
      return await this.collection.client.withSession({ explicit: false }, async session => {
        return await executeCommands(this, { ...finalOptions, session });
      });
    }

    return await executeCommands(this, { ...finalOptions });
  }

  /**
   * Handles the write error before executing commands
   * @internal
   */
  handleWriteError(writeResult: BulkWriteResult): void {
    if (this.s.bulkResult.writeErrors.length > 0) {
      const msg = this.s.bulkResult.writeErrors[0].errmsg
        ? this.s.bulkResult.writeErrors[0].errmsg
        : 'write operation failed';

      throw new MongoBulkWriteError(
        {
          message: msg,
          code: this.s.bulkResult.writeErrors[0].code,
          writeErrors: this.s.bulkResult.writeErrors
        },
        writeResult
      );
    }

    const writeConcernError = writeResult.getWriteConcernError();
    if (writeConcernError) {
      throw new MongoBulkWriteError(writeConcernError, writeResult);
    }
  }

  abstract addToOperationsList(
    batchType: BatchType,
    document: Document | UpdateStatement | DeleteStatement
  ): this;

  private shouldForceServerObjectId(): boolean {
    return (
      this.s.options.forceServerObjectId === true ||
      this.s.collection.db.options?.forceServerObjectId === true
    );
  }
}

function isInsertBatch(batch: Batch): boolean {
  return batch.batchType === BatchType.INSERT;
}

function isUpdateBatch(batch: Batch): batch is Batch<UpdateStatement> {
  return batch.batchType === BatchType.UPDATE;
}

function isDeleteBatch(batch: Batch): batch is Batch<DeleteStatement> {
  return batch.batchType === BatchType.DELETE;
}

function buildCurrentOp(bulkOp: BulkOperationBase): Document {
  let { currentOp } = bulkOp.s;
  bulkOp.s.currentOp = undefined;
  if (!currentOp) currentOp = {};
  return currentOp;
}
