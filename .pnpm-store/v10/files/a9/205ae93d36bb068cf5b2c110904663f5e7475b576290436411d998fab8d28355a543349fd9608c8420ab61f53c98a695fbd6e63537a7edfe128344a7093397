import type { Document } from '../bson';
import { type Connection } from '../cmap/connection';
import { MongoDBResponse } from '../cmap/wire_protocol/responses';
import { MongoCompatibilityError, MongoServerError } from '../error';
import type { ClientSession } from '../sessions';
import { maxWireVersion, type MongoDBCollectionNamespace, type MongoDBNamespace } from '../utils';
import { type WriteConcernOptions } from '../write_concern';
import { type CollationOptions, CommandOperation, type CommandOperationOptions } from './command';
import { Aspect, defineAspects, type Hint } from './operation';

/** @public */
export interface DeleteOptions extends CommandOperationOptions, WriteConcernOptions {
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
export interface DeleteResult {
  /** Indicates whether this write result was acknowledged. If not, then all other members of this result will be undefined. */
  acknowledged: boolean;
  /** The number of documents that were deleted */
  deletedCount: number;
}

/** @public */
export interface DeleteStatement {
  /** The query that matches documents to delete. */
  q: Document;
  /** The number of matching documents to delete. */
  limit: number;
  /** Specifies the collation to use for the operation. */
  collation?: CollationOptions;
  /** A document or string that specifies the index to use to support the query predicate. */
  hint?: Hint;
}

/** @internal */
export class DeleteOperation extends CommandOperation<Document> {
  override SERVER_COMMAND_RESPONSE_TYPE = MongoDBResponse;
  override options: DeleteOptions;
  statements: DeleteStatement[];

  constructor(ns: MongoDBNamespace, statements: DeleteStatement[], options: DeleteOptions) {
    super(undefined, options);
    this.options = options;
    this.ns = ns;
    this.statements = statements;
  }

  override get commandName() {
    return 'delete' as const;
  }

  override get canRetryWrite(): boolean {
    if (super.canRetryWrite === false) {
      return false;
    }

    return this.statements.every(op => (op.limit != null ? op.limit > 0 : true));
  }

  override buildCommandDocument(connection: Connection, _session?: ClientSession): Document {
    const options = this.options;

    const ordered = typeof options.ordered === 'boolean' ? options.ordered : true;
    const command: Document = {
      delete: this.ns.collection,
      deletes: this.statements,
      ordered
    };

    if (options.let) {
      command.let = options.let;
    }

    // we check for undefined specifically here to allow falsy values
    // eslint-disable-next-line no-restricted-syntax
    if (options.comment !== undefined) {
      command.comment = options.comment;
    }

    const unacknowledgedWrite = this.writeConcern && this.writeConcern.w === 0;
    if (unacknowledgedWrite && maxWireVersion(connection) < 9) {
      if (this.statements.find((o: Document) => o.hint)) {
        throw new MongoCompatibilityError(
          `hint for the delete command is only supported on MongoDB 4.4+`
        );
      }
    }

    return command;
  }
}

export class DeleteOneOperation extends DeleteOperation {
  constructor(ns: MongoDBCollectionNamespace, filter: Document, options: DeleteOptions) {
    super(ns, [makeDeleteStatement(filter, { ...options, limit: 1 })], options);
  }

  override handleOk(
    response: InstanceType<typeof this.SERVER_COMMAND_RESPONSE_TYPE>
  ): DeleteResult {
    const res = super.handleOk(response);

    // @ts-expect-error Explain commands have broken TS
    if (this.explain) return res;

    if (res.code) throw new MongoServerError(res);
    if (res.writeErrors) throw new MongoServerError(res.writeErrors[0]);

    return {
      acknowledged: this.writeConcern?.w !== 0,
      deletedCount: res.n
    };
  }
}
export class DeleteManyOperation extends DeleteOperation {
  constructor(ns: MongoDBCollectionNamespace, filter: Document, options: DeleteOptions) {
    super(ns, [makeDeleteStatement(filter, options)], options);
  }

  override handleOk(
    response: InstanceType<typeof this.SERVER_COMMAND_RESPONSE_TYPE>
  ): DeleteResult {
    const res = super.handleOk(response);

    // @ts-expect-error Explain commands have broken TS
    if (this.explain) return res;

    if (res.code) throw new MongoServerError(res);
    if (res.writeErrors) throw new MongoServerError(res.writeErrors[0]);

    return {
      acknowledged: this.writeConcern?.w !== 0,
      deletedCount: res.n
    };
  }
}

export function makeDeleteStatement(
  filter: Document,
  options: DeleteOptions & { limit?: number }
): DeleteStatement {
  const op: DeleteStatement = {
    q: filter,
    limit: typeof options.limit === 'number' ? options.limit : 0
  };

  if (options.collation) {
    op.collation = options.collation;
  }

  if (options.hint) {
    op.hint = options.hint;
  }

  return op;
}

defineAspects(DeleteOperation, [
  Aspect.RETRYABLE,
  Aspect.WRITE_OPERATION,
  Aspect.SUPPORTS_RAW_DATA
]);
defineAspects(DeleteOneOperation, [
  Aspect.RETRYABLE,
  Aspect.WRITE_OPERATION,
  Aspect.EXPLAINABLE,
  Aspect.SKIP_COLLATION,
  Aspect.SUPPORTS_RAW_DATA
]);
defineAspects(DeleteManyOperation, [
  Aspect.WRITE_OPERATION,
  Aspect.EXPLAINABLE,
  Aspect.SKIP_COLLATION,
  Aspect.SUPPORTS_RAW_DATA
]);
