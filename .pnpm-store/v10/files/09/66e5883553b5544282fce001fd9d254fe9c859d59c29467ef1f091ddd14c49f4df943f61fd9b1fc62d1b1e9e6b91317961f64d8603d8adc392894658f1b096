import type { Document } from '../bson';
import { type Connection } from '../cmap/connection';
import { MongoDBResponse } from '../cmap/wire_protocol/responses';
import { MongoInvalidArgumentError, MongoServerError } from '../error';
import type { InferIdType } from '../mongo_types';
import type { ClientSession } from '../sessions';
import { formatSort, type Sort, type SortForCmd } from '../sort';
import {
  hasAtomicOperators,
  type MongoDBCollectionNamespace,
  type MongoDBNamespace
} from '../utils';
import { type CollationOptions, CommandOperation, type CommandOperationOptions } from './command';
import { Aspect, defineAspects, type Hint } from './operation';

/** @public */
export interface UpdateOptions extends CommandOperationOptions {
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
export interface UpdateResult<TSchema extends Document = Document> {
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
export interface UpdateStatement {
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

/**
 * @internal
 * UpdateOperation is used in bulk write, while UpdateOneOperation and UpdateManyOperation are only used in the collections API
 */
export class UpdateOperation extends CommandOperation<Document> {
  override SERVER_COMMAND_RESPONSE_TYPE = MongoDBResponse;
  override options: UpdateOptions & { ordered?: boolean };
  statements: UpdateStatement[];

  constructor(
    ns: MongoDBNamespace,
    statements: UpdateStatement[],
    options: UpdateOptions & { ordered?: boolean }
  ) {
    super(undefined, options);
    this.options = options;
    this.ns = ns;

    this.statements = statements;
  }

  override get commandName() {
    return 'update' as const;
  }

  override get canRetryWrite(): boolean {
    if (super.canRetryWrite === false) {
      return false;
    }

    return this.statements.every(op => op.multi == null || op.multi === false);
  }

  override buildCommandDocument(_connection: Connection, _session?: ClientSession): Document {
    const options = this.options;
    const command: Document = {
      update: this.ns.collection,
      updates: this.statements,
      ordered: options.ordered ?? true
    };

    if (typeof options.bypassDocumentValidation === 'boolean') {
      command.bypassDocumentValidation = options.bypassDocumentValidation;
    }

    if (options.let) {
      command.let = options.let;
    }

    // we check for undefined specifically here to allow falsy values
    // eslint-disable-next-line no-restricted-syntax
    if (options.comment !== undefined) {
      command.comment = options.comment;
    }

    return command;
  }
}

/** @internal */
export class UpdateOneOperation extends UpdateOperation {
  constructor(
    ns: MongoDBCollectionNamespace,
    filter: Document,
    update: Document,
    options: UpdateOptions
  ) {
    super(ns, [makeUpdateStatement(filter, update, { ...options, multi: false })], options);

    if (!hasAtomicOperators(update, options)) {
      throw new MongoInvalidArgumentError('Update document requires atomic operators');
    }
  }

  override handleOk(
    response: InstanceType<typeof this.SERVER_COMMAND_RESPONSE_TYPE>
  ): UpdateResult {
    const res = super.handleOk(response);

    // @ts-expect-error Explain typing is broken
    if (this.explain != null) return res;

    if (res.code) throw new MongoServerError(res);
    if (res.writeErrors) throw new MongoServerError(res.writeErrors[0]);

    return {
      acknowledged: this.writeConcern?.w !== 0,
      modifiedCount: res.nModified ?? res.n,
      upsertedId:
        Array.isArray(res.upserted) && res.upserted.length > 0 ? res.upserted[0]._id : null,
      upsertedCount: Array.isArray(res.upserted) && res.upserted.length ? res.upserted.length : 0,
      matchedCount: Array.isArray(res.upserted) && res.upserted.length > 0 ? 0 : res.n
    };
  }
}

/** @internal */
export class UpdateManyOperation extends UpdateOperation {
  constructor(
    ns: MongoDBCollectionNamespace,
    filter: Document,
    update: Document,
    options: UpdateOptions
  ) {
    super(ns, [makeUpdateStatement(filter, update, { ...options, multi: true })], options);

    if (!hasAtomicOperators(update, options)) {
      throw new MongoInvalidArgumentError('Update document requires atomic operators');
    }
  }

  override handleOk(
    response: InstanceType<typeof this.SERVER_COMMAND_RESPONSE_TYPE>
  ): UpdateResult {
    const res = super.handleOk(response);

    // @ts-expect-error Explain typing is broken
    if (this.explain != null) return res;
    if (res.code) throw new MongoServerError(res);
    if (res.writeErrors) throw new MongoServerError(res.writeErrors[0]);

    return {
      acknowledged: this.writeConcern?.w !== 0,
      modifiedCount: res.nModified ?? res.n,
      upsertedId:
        Array.isArray(res.upserted) && res.upserted.length > 0 ? res.upserted[0]._id : null,
      upsertedCount: Array.isArray(res.upserted) && res.upserted.length ? res.upserted.length : 0,
      matchedCount: Array.isArray(res.upserted) && res.upserted.length > 0 ? 0 : res.n
    };
  }
}

/** @public */
export interface ReplaceOptions extends CommandOperationOptions {
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

/** @internal */
export class ReplaceOneOperation extends UpdateOperation {
  constructor(
    ns: MongoDBCollectionNamespace,
    filter: Document,
    replacement: Document,
    options: ReplaceOptions
  ) {
    super(ns, [makeUpdateStatement(filter, replacement, { ...options, multi: false })], options);

    if (hasAtomicOperators(replacement)) {
      throw new MongoInvalidArgumentError('Replacement document must not contain atomic operators');
    }
  }

  override handleOk(
    response: InstanceType<typeof this.SERVER_COMMAND_RESPONSE_TYPE>
  ): UpdateResult {
    const res = super.handleOk(response);

    // @ts-expect-error Explain typing is broken
    if (this.explain != null) return res;
    if (res.code) throw new MongoServerError(res);
    if (res.writeErrors) throw new MongoServerError(res.writeErrors[0]);

    return {
      acknowledged: this.writeConcern?.w !== 0,
      modifiedCount: res.nModified ?? res.n,
      upsertedId:
        Array.isArray(res.upserted) && res.upserted.length > 0 ? res.upserted[0]._id : null,
      upsertedCount: Array.isArray(res.upserted) && res.upserted.length ? res.upserted.length : 0,
      matchedCount: Array.isArray(res.upserted) && res.upserted.length > 0 ? 0 : res.n
    };
  }
}

export function makeUpdateStatement(
  filter: Document,
  update: Document | Document[],
  options: UpdateOptions & { multi?: boolean } & { sort?: Sort }
): UpdateStatement {
  if (filter == null || typeof filter !== 'object') {
    throw new MongoInvalidArgumentError('Selector must be a valid JavaScript object');
  }

  if (update == null || typeof update !== 'object') {
    throw new MongoInvalidArgumentError('Document must be a valid JavaScript object');
  }

  const op: UpdateStatement = { q: filter, u: update };
  if (typeof options.upsert === 'boolean') {
    op.upsert = options.upsert;
  }

  if (options.multi) {
    op.multi = options.multi;
  }

  if (options.hint) {
    op.hint = options.hint;
  }

  if (options.arrayFilters) {
    op.arrayFilters = options.arrayFilters;
  }

  if (options.collation) {
    op.collation = options.collation;
  }

  if (!options.multi && options.sort != null) {
    op.sort = formatSort(options.sort);
  }

  return op;
}

defineAspects(UpdateOperation, [
  Aspect.RETRYABLE,
  Aspect.WRITE_OPERATION,
  Aspect.SKIP_COLLATION,
  Aspect.SUPPORTS_RAW_DATA
]);
defineAspects(UpdateOneOperation, [
  Aspect.RETRYABLE,
  Aspect.WRITE_OPERATION,
  Aspect.EXPLAINABLE,
  Aspect.SKIP_COLLATION,
  Aspect.SUPPORTS_RAW_DATA
]);
defineAspects(UpdateManyOperation, [
  Aspect.WRITE_OPERATION,
  Aspect.EXPLAINABLE,
  Aspect.SKIP_COLLATION,
  Aspect.SUPPORTS_RAW_DATA
]);
defineAspects(ReplaceOneOperation, [
  Aspect.RETRYABLE,
  Aspect.WRITE_OPERATION,
  Aspect.SKIP_COLLATION,
  Aspect.SUPPORTS_RAW_DATA
]);
