import { type Connection } from '..';
import type { Document } from '../bson';
import { MongoDBResponse } from '../cmap/wire_protocol/responses';
import type { Collection } from '../collection';
import type { ClientSession } from '../sessions';
import { CommandOperation, type CommandOperationOptions } from './command';
import { Aspect, defineAspects } from './operation';

/** @public */
export interface EstimatedDocumentCountOptions extends CommandOperationOptions {
  /**
   * The maximum amount of time to allow the operation to run.
   *
   * This option is sent only if the caller explicitly provides a value. The default is to not send a value.
   */
  maxTimeMS?: number;
}

/** @internal */
export class EstimatedDocumentCountOperation extends CommandOperation<number> {
  override SERVER_COMMAND_RESPONSE_TYPE = MongoDBResponse;
  override options: EstimatedDocumentCountOptions;
  collectionName: string;

  constructor(collection: Collection, options: EstimatedDocumentCountOptions = {}) {
    super(collection, options);
    this.options = options;
    this.collectionName = collection.collectionName;
  }

  override get commandName() {
    return 'count' as const;
  }

  override buildCommandDocument(_connection: Connection, _session?: ClientSession): Document {
    const cmd: Document = { count: this.collectionName };

    if (typeof this.options.maxTimeMS === 'number') {
      cmd.maxTimeMS = this.options.maxTimeMS;
    }

    // we check for undefined specifically here to allow falsy values
    // eslint-disable-next-line no-restricted-syntax
    if (this.options.comment !== undefined) {
      cmd.comment = this.options.comment;
    }

    return cmd;
  }

  override handleOk(response: InstanceType<typeof this.SERVER_COMMAND_RESPONSE_TYPE>): number {
    return response.getNumber('n') ?? 0;
  }
}

defineAspects(EstimatedDocumentCountOperation, [
  Aspect.READ_OPERATION,
  Aspect.RETRYABLE,
  Aspect.CURSOR_CREATING,
  Aspect.SUPPORTS_RAW_DATA
]);
