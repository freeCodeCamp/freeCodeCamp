import type { Document } from '../bson';
import { type Connection } from '../cmap/connection';
import { MongoDBResponse } from '../cmap/wire_protocol/responses';
import type { Db } from '../db';
import { CommandOperation, type CommandOperationOptions } from './command';
import { Aspect, defineAspects } from './operation';

/** @public */
export interface DbStatsOptions extends Omit<CommandOperationOptions, 'rawData'> {
  /** Divide the returned sizes by scale value. */
  scale?: number;
}

/** @internal */
export class DbStatsOperation extends CommandOperation<Document> {
  override SERVER_COMMAND_RESPONSE_TYPE = MongoDBResponse;
  override options: DbStatsOptions;

  constructor(db: Db, options: DbStatsOptions) {
    super(db, options);
    this.options = options;
  }

  override get commandName() {
    return 'dbStats' as const;
  }

  override buildCommandDocument(_connection: Connection): Document {
    const command: Document = { dbStats: true };
    if (this.options.scale != null) {
      command.scale = this.options.scale;
    }
    return command;
  }
}

defineAspects(DbStatsOperation, [Aspect.READ_OPERATION]);
