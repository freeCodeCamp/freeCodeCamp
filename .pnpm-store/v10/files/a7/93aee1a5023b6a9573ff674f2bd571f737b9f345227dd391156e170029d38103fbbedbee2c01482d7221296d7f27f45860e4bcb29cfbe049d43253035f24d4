import { type Document } from '../bson';
import { type Connection } from '../cmap/connection';
import { MongoDBResponse } from '../cmap/wire_protocol/responses';
import type { Db } from '../db';
import { CommandOperation, type CommandOperationOptions } from './command';
import { Aspect, defineAspects } from './operation';

/** @public */
export type RemoveUserOptions = Omit<CommandOperationOptions, 'rawData'>;

/** @internal */
export class RemoveUserOperation extends CommandOperation<boolean> {
  override SERVER_COMMAND_RESPONSE_TYPE = MongoDBResponse;
  override options: RemoveUserOptions;
  username: string;

  constructor(db: Db, username: string, options: RemoveUserOptions) {
    super(db, options);
    this.options = options;
    this.username = username;
  }

  override get commandName() {
    return 'dropUser' as const;
  }

  override buildCommandDocument(_connection: Connection): Document {
    return { dropUser: this.username };
  }

  override handleOk(_response: InstanceType<typeof this.SERVER_COMMAND_RESPONSE_TYPE>): boolean {
    return true;
  }
}

defineAspects(RemoveUserOperation, [Aspect.WRITE_OPERATION]);
