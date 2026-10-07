import { type Connection } from '..';
import type { Document } from '../bson';
import { MongoDBResponse } from '../cmap/wire_protocol/responses';
import type { Collection } from '../collection';
import type { ClientSession } from '../sessions';
import type { MongoDBNamespace } from '../utils';
import { CommandOperation, type CommandOperationOptions } from './command';
import { Aspect, defineAspects } from './operation';

/** @public */
export interface CountOptions extends CommandOperationOptions {
  /** The number of documents to skip. */
  skip?: number;
  /** The maximum amounts to count before aborting. */
  limit?: number;
  /**
   * Number of milliseconds to wait before aborting the query.
   */
  maxTimeMS?: number;
  /** An index name hint for the query. */
  hint?: string | Document;
}

/** @internal */
export class CountOperation extends CommandOperation<number> {
  override SERVER_COMMAND_RESPONSE_TYPE = MongoDBResponse;
  override options: CountOptions;
  collectionName?: string;
  query: Document;

  constructor(namespace: MongoDBNamespace, filter: Document, options: CountOptions) {
    super({ s: { namespace: namespace } } as unknown as Collection, options);

    this.options = options;
    this.collectionName = namespace.collection;
    this.query = filter;
  }

  override get commandName() {
    return 'count' as const;
  }

  override buildCommandDocument(_connection: Connection, _session?: ClientSession): Document {
    const options = this.options;
    const cmd: Document = {
      count: this.collectionName,
      query: this.query
    };

    if (typeof options.limit === 'number') {
      cmd.limit = options.limit;
    }

    if (typeof options.skip === 'number') {
      cmd.skip = options.skip;
    }

    if (options.hint != null) {
      cmd.hint = options.hint;
    }

    if (typeof options.maxTimeMS === 'number') {
      cmd.maxTimeMS = options.maxTimeMS;
    }

    return cmd;
  }

  override handleOk(response: InstanceType<typeof this.SERVER_COMMAND_RESPONSE_TYPE>): number {
    return response.getNumber('n') ?? 0;
  }
}

defineAspects(CountOperation, [Aspect.READ_OPERATION, Aspect.RETRYABLE, Aspect.SUPPORTS_RAW_DATA]);
