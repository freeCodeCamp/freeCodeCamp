import { type Connection } from '..';
import type { Binary, Document } from '../bson';
import { CursorResponse, ExplainedCursorResponse } from '../cmap/wire_protocol/responses';
import { type CursorTimeoutContext, type CursorTimeoutMode } from '../cursor/abstract_cursor';
import type { Db } from '../db';
import { type Abortable } from '../mongo_types';
import { maxWireVersion } from '../utils';
import { CommandOperation, type CommandOperationOptions } from './command';
import { Aspect, defineAspects } from './operation';

/** @public */
export interface ListCollectionsOptions
  extends Omit<CommandOperationOptions, 'writeConcern'>,
    Abortable {
  /** Since 4.0: If true, will only return the collection name in the response, and will omit additional info */
  nameOnly?: boolean;
  /** Since 4.0: If true and nameOnly is true, allows a user without the required privilege (i.e. listCollections action on the database) to run the command when access control is enforced. */
  authorizedCollections?: boolean;
  /** The batchSize for the returned command cursor or if pre 2.8 the systems batch collection */
  batchSize?: number;
  /** @internal */
  timeoutMode?: CursorTimeoutMode;

  /** @internal */
  timeoutContext?: CursorTimeoutContext;
}

/** @internal */
export class ListCollectionsOperation extends CommandOperation<CursorResponse> {
  override SERVER_COMMAND_RESPONSE_TYPE = CursorResponse;
  /**
   * @remarks WriteConcern can still be present on the options because
   * we inherit options from the client/db/collection.  The
   * key must be present on the options in order to delete it.
   * This allows typescript to delete the key but will
   * not allow a writeConcern to be assigned as a property on options.
   */
  override options: ListCollectionsOptions & { writeConcern?: never };
  db: Db;
  filter: Document;
  nameOnly: boolean;
  authorizedCollections: boolean;
  batchSize?: number;

  constructor(db: Db, filter: Document, options?: ListCollectionsOptions) {
    super(db, options);

    this.options = { ...options };
    delete this.options.writeConcern;
    this.db = db;
    this.filter = filter;
    this.nameOnly = !!this.options.nameOnly;
    this.authorizedCollections = !!this.options.authorizedCollections;

    if (typeof this.options.batchSize === 'number') {
      this.batchSize = this.options.batchSize;
    }

    this.SERVER_COMMAND_RESPONSE_TYPE = this.explain ? ExplainedCursorResponse : CursorResponse;
  }

  override get commandName() {
    return 'listCollections' as const;
  }

  override buildCommandDocument(connection: Connection): Document {
    const command: Document = {
      listCollections: 1,
      filter: this.filter,
      cursor: this.batchSize ? { batchSize: this.batchSize } : {},
      nameOnly: this.nameOnly,
      authorizedCollections: this.authorizedCollections
    };

    // we check for undefined specifically here to allow falsy values
    // eslint-disable-next-line no-restricted-syntax
    if (maxWireVersion(connection) >= 9 && this.options.comment !== undefined) {
      command.comment = this.options.comment;
    }

    return command;
  }

  override handleOk(
    response: InstanceType<typeof this.SERVER_COMMAND_RESPONSE_TYPE>
  ): CursorResponse {
    return response;
  }
}

/** @public */
export interface CollectionInfo extends Document {
  name: string;
  type?: string;
  options?: Document;
  info?: {
    readOnly?: false;
    uuid?: Binary;
  };
  idIndex?: Document;
}

defineAspects(ListCollectionsOperation, [
  Aspect.READ_OPERATION,
  Aspect.RETRYABLE,
  Aspect.CURSOR_CREATING,
  Aspect.SUPPORTS_RAW_DATA
]);
