import { type Abortable } from '..';
import type { BSONSerializeOptions, Document } from '../bson';
import { type Connection } from '../cmap/connection';
import { CursorResponse, MongoDBResponse } from '../cmap/wire_protocol/responses';
import { AbstractOperation } from '../operations/operation';
import type { ReadPreferenceLike } from '../read_preference';
import type { ServerCommandOptions } from '../sdam/server';
import type { ClientSession } from '../sessions';
import { type TimeoutContext } from '../timeout';
import { type MongoDBNamespace } from '../utils';

/** @public */
export type RunCommandOptions = {
  /** Specify ClientSession for this command */
  session?: ClientSession;
  /** The read preference */
  readPreference?: ReadPreferenceLike;
  /**
   * @experimental
   * Specifies the time an operation will run until it throws a timeout error
   */
  timeoutMS?: number;
  /** @internal */
  omitMaxTimeMS?: boolean;

  /**
   * @internal Hints to `executeOperation` that this operation should not unpin on an ended transaction
   * This is only used by the driver for transaction commands
   */
  bypassPinningCheck?: boolean;
} & BSONSerializeOptions &
  Abortable;

/** @internal */
export class RunCommandOperation<T = Document> extends AbstractOperation<T> {
  override SERVER_COMMAND_RESPONSE_TYPE = MongoDBResponse;
  command: Document;
  override options: RunCommandOptions;

  constructor(namespace: MongoDBNamespace, command: Document, options: RunCommandOptions) {
    super(options);
    this.command = command;
    this.options = options;
    this.ns = namespace.withCollection('$cmd');
  }

  override get commandName() {
    return 'runCommand' as const;
  }

  override buildCommand(_connection: Connection, _session?: ClientSession): Document {
    return this.command;
  }

  override buildOptions(timeoutContext: TimeoutContext): ServerCommandOptions {
    return {
      ...this.options,
      session: this.session,
      timeoutContext,
      signal: this.options.signal,
      readPreference: this.options.readPreference
    };
  }
}

/**
 * @internal
 *
 * A specialized subclass of RunCommandOperation for cursor-creating commands.
 */
export class RunCursorCommandOperation extends RunCommandOperation {
  override SERVER_COMMAND_RESPONSE_TYPE = CursorResponse;

  override handleOk(
    response: InstanceType<typeof this.SERVER_COMMAND_RESPONSE_TYPE>
  ): CursorResponse {
    return response;
  }
}
