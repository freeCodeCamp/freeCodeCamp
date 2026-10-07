import { type Connection, type MongoError } from '../..';
import type { Document } from '../../bson';
import { MongoDBResponse } from '../../cmap/wire_protocol/responses';
import type { Collection } from '../../collection';
import { MONGODB_ERROR_CODES, MongoServerError } from '../../error';
import type { ServerCommandOptions } from '../../sdam/server';
import type { ClientSession } from '../../sessions';
import { type TimeoutContext } from '../../timeout';
import { AbstractOperation } from '../operation';

/** @internal */
export class DropSearchIndexOperation extends AbstractOperation<void> {
  override SERVER_COMMAND_RESPONSE_TYPE = MongoDBResponse;

  private readonly collection: Collection;
  private readonly name: string;

  constructor(collection: Collection, name: string) {
    super();
    this.collection = collection;
    this.name = name;
    this.ns = collection.fullNamespace;
  }

  override get commandName() {
    return 'dropSearchIndex' as const;
  }

  override buildCommand(_connection: Connection, _session?: ClientSession): Document {
    const namespace = this.collection.fullNamespace;

    const command: Document = {
      dropSearchIndex: namespace.collection
    };

    if (typeof this.name === 'string') {
      command.name = this.name;
    }

    return command;
  }

  override handleOk(_response: MongoDBResponse): void {
    // do nothing
  }

  override buildOptions(timeoutContext: TimeoutContext): ServerCommandOptions {
    return { session: this.session, timeoutContext };
  }

  override handleError(error: MongoError): void {
    const isNamespaceNotFoundError =
      error instanceof MongoServerError && error.code === MONGODB_ERROR_CODES.NamespaceNotFound;
    if (!isNamespaceNotFoundError) {
      throw error;
    }
  }
}
