import type { BSONSerializeOptions, Document } from '../bson';
import { type CursorResponse } from '../cmap/wire_protocol/responses';
import type { Db } from '../db';
import { MongoAPIError, MongoRuntimeError } from '../error';
import { executeOperation } from '../operations/execute_operation';
import { GetMoreOperation } from '../operations/get_more';
import { RunCursorCommandOperation } from '../operations/run_command';
import type { ReadConcernLike } from '../read_concern';
import type { ReadPreferenceLike } from '../read_preference';
import type { ClientSession } from '../sessions';
import { ns } from '../utils';
import {
  AbstractCursor,
  type CursorTimeoutMode,
  type InitialCursorResponse
} from './abstract_cursor';

/** @public */
export type RunCursorCommandOptions = {
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
export class RunCommandCursor extends AbstractCursor {
  public readonly command: Readonly<Record<string, any>>;
  public readonly getMoreOptions: {
    comment?: any;
    maxAwaitTimeMS?: number;
    batchSize?: number;
  } = {};

  /**
   * Controls the `getMore.comment` field
   * @param comment - any BSON value
   */
  public setComment(comment: any): this {
    this.getMoreOptions.comment = comment;
    return this;
  }

  /**
   * Controls the `getMore.maxTimeMS` field. Only valid when cursor is tailable await
   * @param maxTimeMS - the number of milliseconds to wait for new data
   */
  public setMaxTimeMS(maxTimeMS: number): this {
    this.getMoreOptions.maxAwaitTimeMS = maxTimeMS;
    return this;
  }

  /**
   * Controls the `getMore.batchSize` field
   * @param batchSize - the number documents to return in the `nextBatch`
   */
  public setBatchSize(batchSize: number): this {
    this.getMoreOptions.batchSize = batchSize;
    return this;
  }

  /** Unsupported for RunCommandCursor */
  public override clone(): never {
    throw new MongoAPIError('Clone not supported, create a new cursor with db.runCursorCommand');
  }

  /** Unsupported for RunCommandCursor: readConcern must be configured directly on command document */
  public override withReadConcern(_: ReadConcernLike): never {
    throw new MongoAPIError(
      'RunCommandCursor does not support readConcern it must be attached to the command being run'
    );
  }

  /** Unsupported for RunCommandCursor: various cursor flags must be configured directly on command document */
  public override addCursorFlag(_: string, __: boolean): never {
    throw new MongoAPIError(
      'RunCommandCursor does not support cursor flags, they must be attached to the command being run'
    );
  }

  /**
   * Unsupported for RunCommandCursor: maxTimeMS must be configured directly on command document
   */
  public override maxTimeMS(_: number): never {
    throw new MongoAPIError(
      'maxTimeMS must be configured on the command document directly, to configure getMore.maxTimeMS use cursor.setMaxTimeMS()'
    );
  }

  /** Unsupported for RunCommandCursor: batchSize must be configured directly on command document */
  public override batchSize(_: number): never {
    throw new MongoAPIError(
      'batchSize must be configured on the command document directly, to configure getMore.batchSize use cursor.setBatchSize()'
    );
  }

  /** @internal */
  private db: Db;

  /** @internal */
  constructor(db: Db, command: Document, options: RunCursorCommandOptions = {}) {
    super(db.client, ns(db.namespace), options);
    this.db = db;
    this.command = Object.freeze({ ...command });
  }

  /** @internal */
  protected async _initialize(session: ClientSession): Promise<InitialCursorResponse> {
    const operation = new RunCursorCommandOperation(this.db.s.namespace, this.command, {
      ...this.cursorOptions,
      session: session,
      readPreference: this.cursorOptions.readPreference
    });

    const response = await executeOperation(this.client, operation, this.timeoutContext);

    return {
      server: operation.server,
      session,
      response
    };
  }

  /** @internal */
  override async getMore(_batchSize: number): Promise<CursorResponse> {
    if (!this.session) {
      throw new MongoRuntimeError(
        'Unexpected null session. A cursor creating command should have set this'
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const getMoreOperation = new GetMoreOperation(this.namespace, this.id!, this.server!, {
      ...this.cursorOptions,
      session: this.session,
      ...this.getMoreOptions
    });

    return await executeOperation(this.client, getMoreOperation, this.timeoutContext);
  }
}
