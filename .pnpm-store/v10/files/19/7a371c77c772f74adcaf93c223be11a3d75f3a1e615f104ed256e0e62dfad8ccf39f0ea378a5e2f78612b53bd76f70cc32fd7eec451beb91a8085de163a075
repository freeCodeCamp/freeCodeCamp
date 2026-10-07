import { BSONType, type Document } from '../bson';
import { type Connection } from '../cmap/connection';
import { MongoDBResponse } from '../cmap/wire_protocol/responses';
import type { Db } from '../db';
import { MongoUnexpectedServerResponseError } from '../error';
import { CommandOperation, type CommandOperationOptions } from './command';

/** @public */
export type ProfilingLevelOptions = Omit<CommandOperationOptions, 'rawData'>;

class ProfilingLevelResponse extends MongoDBResponse {
  get was() {
    return this.get('was', BSONType.int, true);
  }
}

/** @internal */
export class ProfilingLevelOperation extends CommandOperation<string> {
  override SERVER_COMMAND_RESPONSE_TYPE = ProfilingLevelResponse;
  override options: ProfilingLevelOptions;

  constructor(db: Db, options: ProfilingLevelOptions) {
    super(db, options);
    this.options = options;
  }

  override get commandName() {
    return 'profile' as const;
  }

  override buildCommandDocument(_connection: Connection): Document {
    return { profile: -1 };
  }

  override handleOk(response: InstanceType<typeof this.SERVER_COMMAND_RESPONSE_TYPE>): string {
    if (response.ok === 1) {
      const was = response.was;
      if (was === 0) return 'off';
      if (was === 1) return 'slow_only';
      if (was === 2) return 'all';
      throw new MongoUnexpectedServerResponseError(`Illegal profiling level value ${was}`);
    } else {
      throw new MongoUnexpectedServerResponseError('Error with profile command');
    }
  }
}
