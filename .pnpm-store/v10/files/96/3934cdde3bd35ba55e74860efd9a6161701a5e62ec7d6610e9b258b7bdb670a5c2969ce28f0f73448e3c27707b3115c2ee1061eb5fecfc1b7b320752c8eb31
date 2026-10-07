import type { Document } from '../../bson';
import { type Connection } from '../../cmap/connection';
import { MongoDBResponse } from '../../cmap/wire_protocol/responses';
import type { Collection } from '../../collection';
import type { ServerCommandOptions } from '../../sdam/server';
import type { ClientSession } from '../../sessions';
import { type TimeoutContext } from '../../timeout';
import { AbstractOperation } from '../operation';

/** @internal */
export class UpdateSearchIndexOperation extends AbstractOperation<void> {
  override SERVER_COMMAND_RESPONSE_TYPE = MongoDBResponse;
  private readonly collection: Collection;
  private readonly name: string;
  private readonly definition: Document;

  constructor(collection: Collection, name: string, definition: Document) {
    super();
    this.collection = collection;
    this.name = name;
    this.definition = definition;
    this.ns = collection.fullNamespace;
  }

  override get commandName() {
    return 'updateSearchIndex' as const;
  }

  override buildCommand(_connection: Connection, _session?: ClientSession): Document {
    const namespace = this.collection.fullNamespace;
    return {
      updateSearchIndex: namespace.collection,
      name: this.name,
      definition: this.definition
    };
  }

  override handleOk(_response: MongoDBResponse): void {
    // no response.
  }

  override buildOptions(timeoutContext: TimeoutContext): ServerCommandOptions {
    return { session: this.session, timeoutContext };
  }
}
