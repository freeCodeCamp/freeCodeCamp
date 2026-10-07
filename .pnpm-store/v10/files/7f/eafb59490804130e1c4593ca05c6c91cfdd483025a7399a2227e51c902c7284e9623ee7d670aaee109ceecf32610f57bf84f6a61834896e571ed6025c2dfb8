import { type Connection } from '..';
import type { Document } from '../bson';
import { MongoDBResponse } from '../cmap/wire_protocol/responses';
import { Collection } from '../collection';
import type { ClientSession } from '../sessions';
import { MongoDBNamespace } from '../utils';
import { CommandOperation, type CommandOperationOptions } from './command';
import { Aspect, defineAspects } from './operation';

/** @public */
export interface RenameOptions extends Omit<CommandOperationOptions, 'rawData'> {
  /** Drop the target name collection if it previously exists. */
  dropTarget?: boolean;
  /** Unclear */
  new_collection?: boolean;
}

/** @internal */
export class RenameOperation extends CommandOperation<Document> {
  override SERVER_COMMAND_RESPONSE_TYPE = MongoDBResponse;
  collection: Collection;
  newName: string;
  override options: RenameOptions;

  constructor(collection: Collection, newName: string, options: RenameOptions) {
    super(collection, options);
    this.collection = collection;
    this.newName = newName;
    this.options = options;
    this.ns = new MongoDBNamespace('admin', '$cmd');
  }

  override get commandName(): string {
    return 'renameCollection' as const;
  }

  override buildCommandDocument(_connection: Connection, _session?: ClientSession): Document {
    const renameCollection = this.collection.namespace;
    const to = this.collection.s.namespace.withCollection(this.newName).toString();
    const dropTarget =
      typeof this.options.dropTarget === 'boolean' ? this.options.dropTarget : false;

    return {
      renameCollection,
      to,
      dropTarget
    };
  }

  override handleOk(_response: InstanceType<typeof this.SERVER_COMMAND_RESPONSE_TYPE>): Document {
    return new Collection(this.collection.db, this.newName, this.collection.s.options);
  }
}

defineAspects(RenameOperation, [Aspect.WRITE_OPERATION]);
