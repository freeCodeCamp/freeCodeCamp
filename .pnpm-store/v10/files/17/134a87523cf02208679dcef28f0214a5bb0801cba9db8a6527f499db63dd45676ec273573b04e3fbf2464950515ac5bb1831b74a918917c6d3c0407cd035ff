import { type Connection } from '..';
import type { Admin } from '../admin';
import { type Document } from '../bson';
import { MongoDBResponse } from '../cmap/wire_protocol/responses';
import { MongoUnexpectedServerResponseError } from '../error';
import type { ClientSession } from '../sessions';
import { CommandOperation, type CommandOperationOptions } from './command';

/** @public */
export interface ValidateCollectionOptions extends Omit<CommandOperationOptions, 'rawData'> {
  /** Validates a collection in the background, without interrupting read or write traffic (only in MongoDB 4.4+) */
  background?: boolean;
}

/** @internal */
export class ValidateCollectionOperation extends CommandOperation<Document> {
  override SERVER_COMMAND_RESPONSE_TYPE = MongoDBResponse;
  override options: ValidateCollectionOptions;
  collectionName: string;

  constructor(admin: Admin, collectionName: string, options: ValidateCollectionOptions) {
    super(admin.s.db, options);
    this.options = options;
    this.collectionName = collectionName;
  }

  override get commandName() {
    return 'validate' as const;
  }

  override buildCommandDocument(_connection: Connection, _session?: ClientSession): Document {
    // Decorate command with extra options
    return {
      validate: this.collectionName,
      ...Object.fromEntries(Object.entries(this.options).filter(entry => entry[0] !== 'session'))
    };
  }

  override handleOk(response: InstanceType<typeof this.SERVER_COMMAND_RESPONSE_TYPE>): Document {
    const result = super.handleOk(response);
    if (result.result != null && typeof result.result !== 'string')
      throw new MongoUnexpectedServerResponseError('Error with validation data');
    if (result.result != null && result.result.match(/exception|corrupt/) != null)
      throw new MongoUnexpectedServerResponseError(`Invalid collection ${this.collectionName}`);
    if (result.valid != null && !result.valid)
      throw new MongoUnexpectedServerResponseError(`Invalid collection ${this.collectionName}`);

    return response;
  }
}
