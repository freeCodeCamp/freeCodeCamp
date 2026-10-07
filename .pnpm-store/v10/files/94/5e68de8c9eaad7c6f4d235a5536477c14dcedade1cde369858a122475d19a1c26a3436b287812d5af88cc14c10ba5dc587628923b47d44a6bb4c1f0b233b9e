import { type Connection } from '..';
import type { Document } from '../bson';
import { MongoDBResponse } from '../cmap/wire_protocol/responses';
import type { Db } from '../db';
import type { ClientSession } from '../sessions';
import { maxWireVersion, MongoDBNamespace } from '../utils';
import { CommandOperation, type CommandOperationOptions } from './command';
import { Aspect, defineAspects } from './operation';

/** @public */
export interface ListDatabasesResult {
  databases: ({ name: string; sizeOnDisk?: number; empty?: boolean } & Document)[];
  totalSize?: number;
  totalSizeMb?: number;
  ok: 1 | 0;
}

/** @public */
export interface ListDatabasesOptions extends Omit<CommandOperationOptions, 'rawData'> {
  /** A query predicate that determines which databases are listed */
  filter?: Document;
  /** A flag to indicate whether the command should return just the database names, or return both database names and size information */
  nameOnly?: boolean;
  /** A flag that determines which databases are returned based on the user privileges when access control is enabled */
  authorizedDatabases?: boolean;
}

/** @internal */
export class ListDatabasesOperation extends CommandOperation<ListDatabasesResult> {
  override SERVER_COMMAND_RESPONSE_TYPE = MongoDBResponse;
  override options: ListDatabasesOptions;

  constructor(db: Db, options?: ListDatabasesOptions) {
    super(db, options);
    this.options = options ?? {};
    this.ns = new MongoDBNamespace('admin', '$cmd');
  }

  override get commandName() {
    return 'listDatabases' as const;
  }

  override buildCommandDocument(connection: Connection, _session?: ClientSession): Document {
    const cmd: Document = { listDatabases: 1 };

    if (typeof this.options.nameOnly === 'boolean') {
      cmd.nameOnly = this.options.nameOnly;
    }

    if (this.options.filter) {
      cmd.filter = this.options.filter;
    }

    if (typeof this.options.authorizedDatabases === 'boolean') {
      cmd.authorizedDatabases = this.options.authorizedDatabases;
    }

    // we check for undefined specifically here to allow falsy values
    // eslint-disable-next-line no-restricted-syntax
    if (maxWireVersion(connection) >= 9 && this.options.comment !== undefined) {
      cmd.comment = this.options.comment;
    }

    return cmd;
  }
}

defineAspects(ListDatabasesOperation, [Aspect.READ_OPERATION, Aspect.RETRYABLE]);
