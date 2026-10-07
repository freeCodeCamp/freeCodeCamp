import { type Document } from '../../bson';
import { type Connection } from '../../cmap/connection';
import { MongoDBResponse } from '../../cmap/wire_protocol/responses';
import type { Collection } from '../../collection';
import type { ServerCommandOptions } from '../../sdam/server';
import type { ClientSession } from '../../sessions';
import { type TimeoutContext } from '../../timeout';
import { AbstractOperation } from '../operation';

/**
 * @public
 */
export interface SearchIndexDescription extends Document {
  /** The name of the index. */
  name?: string;

  /** The index definition. */
  definition: Document;

  /** The type of the index.  Currently `search` or `vectorSearch` are supported. */
  type?: string;
}

/** @internal */
export class CreateSearchIndexesOperation extends AbstractOperation<Document> {
  override SERVER_COMMAND_RESPONSE_TYPE = MongoDBResponse;
  private readonly collection: Collection;
  private readonly descriptions: ReadonlyArray<SearchIndexDescription>;

  constructor(collection: Collection, descriptions: ReadonlyArray<SearchIndexDescription>) {
    super();
    this.collection = collection;
    this.descriptions = descriptions;
    this.ns = collection.fullNamespace;
  }

  override get commandName() {
    return 'createSearchIndexes' as const;
  }

  override buildCommand(_connection: Connection, _session?: ClientSession): Document {
    const namespace = this.collection.fullNamespace;
    return {
      createSearchIndexes: namespace.collection,
      indexes: this.descriptions
    };
  }

  override handleOk(response: InstanceType<typeof this.SERVER_COMMAND_RESPONSE_TYPE>): string[] {
    return super.handleOk(response).indexesCreated.map((val: { name: string }) => val.name);
  }

  override buildOptions(timeoutContext: TimeoutContext): ServerCommandOptions {
    return { session: this.session, timeoutContext };
  }
}
