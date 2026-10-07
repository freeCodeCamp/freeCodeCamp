import type { Document } from '../bson';
import { CursorResponse, ExplainedCursorResponse } from '../cmap/wire_protocol/responses';
import { type CursorTimeoutMode } from '../cursor/abstract_cursor';
import { MongoInvalidArgumentError } from '../error';
import { type ExplainOptions } from '../explain';
import { type MongoDBNamespace } from '../utils';
import { WriteConcern } from '../write_concern';
import { type CollationOptions, CommandOperation, type CommandOperationOptions } from './command';
import { Aspect, defineAspects, type Hint } from './operation';

/** @internal */
export const DB_AGGREGATE_COLLECTION = 1 as const;

/** @public */
export interface AggregateOptions extends Omit<CommandOperationOptions, 'explain'> {
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
  /** @internal */
  timeoutMode?: CursorTimeoutMode;
}

/** @internal */
export class AggregateOperation extends CommandOperation<CursorResponse> {
  override SERVER_COMMAND_RESPONSE_TYPE = CursorResponse;
  override options: AggregateOptions;
  target: string | typeof DB_AGGREGATE_COLLECTION;
  pipeline: Document[];
  hasWriteStage: boolean;

  constructor(ns: MongoDBNamespace, pipeline: Document[], options?: AggregateOptions) {
    super(undefined, { ...options, dbName: ns.db });

    this.options = { ...options };

    // Covers when ns.collection is null, undefined or the empty string, use DB_AGGREGATE_COLLECTION
    this.target = ns.collection || DB_AGGREGATE_COLLECTION;

    this.pipeline = pipeline;

    // determine if we have a write stage, override read preference if so
    this.hasWriteStage = false;
    if (typeof options?.out === 'string') {
      this.pipeline = this.pipeline.concat({ $out: options.out });
      this.hasWriteStage = true;
    } else if (pipeline.length > 0) {
      const finalStage = pipeline[pipeline.length - 1];
      if (finalStage.$out || finalStage.$merge) {
        this.hasWriteStage = true;
      }
    }

    if (!this.hasWriteStage) {
      delete this.options.writeConcern;
    }

    if (this.explain && this.writeConcern) {
      throw new MongoInvalidArgumentError(
        'Option "explain" cannot be used on an aggregate call with writeConcern'
      );
    }

    if (options?.cursor != null && typeof options.cursor !== 'object') {
      throw new MongoInvalidArgumentError('Cursor options must be an object');
    }

    this.SERVER_COMMAND_RESPONSE_TYPE = this.explain ? ExplainedCursorResponse : CursorResponse;
  }

  override get commandName() {
    return 'aggregate' as const;
  }

  override get canRetryRead(): boolean {
    return !this.hasWriteStage;
  }

  addToPipeline(stage: Document): void {
    this.pipeline.push(stage);
  }

  override buildCommandDocument(): Document {
    const options = this.options;
    const command: Document = { aggregate: this.target, pipeline: this.pipeline };

    if (this.hasWriteStage && this.writeConcern) {
      WriteConcern.apply(command, this.writeConcern);
    }

    if (options.bypassDocumentValidation === true) {
      command.bypassDocumentValidation = options.bypassDocumentValidation;
    }

    if (typeof options.allowDiskUse === 'boolean') {
      command.allowDiskUse = options.allowDiskUse;
    }

    if (options.hint) {
      command.hint = options.hint;
    }

    if (options.let) {
      command.let = options.let;
    }

    // we check for undefined specifically here to allow falsy values
    // eslint-disable-next-line no-restricted-syntax
    if (options.comment !== undefined) {
      command.comment = options.comment;
    }

    command.cursor = options.cursor || {};
    if (options.batchSize && !this.hasWriteStage) {
      command.cursor.batchSize = options.batchSize;
    }

    return command;
  }

  override handleOk(
    response: InstanceType<typeof this.SERVER_COMMAND_RESPONSE_TYPE>
  ): CursorResponse {
    return response;
  }
}

defineAspects(AggregateOperation, [
  Aspect.READ_OPERATION,
  Aspect.RETRYABLE,
  Aspect.EXPLAINABLE,
  Aspect.CURSOR_CREATING,
  Aspect.SUPPORTS_RAW_DATA
]);
