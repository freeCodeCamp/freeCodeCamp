import { type Document } from '../bson';
import { type ClientBulkWriteCursorResponse } from '../cmap/wire_protocol/responses';
import type { MongoClient } from '../mongo_client';
import { ClientBulkWriteOperation } from '../operations/client_bulk_write/client_bulk_write';
import { type ClientBulkWriteCommandBuilder } from '../operations/client_bulk_write/command_builder';
import { type ClientBulkWriteOptions } from '../operations/client_bulk_write/common';
import { executeOperation } from '../operations/execute_operation';
import type { ClientSession } from '../sessions';
import { mergeOptions, MongoDBNamespace } from '../utils';
import {
  AbstractCursor,
  type AbstractCursorOptions,
  type InitialCursorResponse
} from './abstract_cursor';

/** @public */
export interface ClientBulkWriteCursorOptions
  extends Omit<AbstractCursorOptions, 'maxAwaitTimeMS' | 'tailable' | 'awaitData'>,
    ClientBulkWriteOptions {}

/**
 * This is the cursor that handles client bulk write operations. Note this is never
 * exposed directly to the user and is always immediately exhausted.
 * @internal
 */
export class ClientBulkWriteCursor extends AbstractCursor {
  commandBuilder: ClientBulkWriteCommandBuilder;
  /** @internal */
  private cursorResponse?: ClientBulkWriteCursorResponse;
  /** @internal */
  private clientBulkWriteOptions: ClientBulkWriteOptions;

  /** @internal */
  constructor(
    client: MongoClient,
    commandBuilder: ClientBulkWriteCommandBuilder,
    options: ClientBulkWriteCursorOptions = {}
  ) {
    super(client, new MongoDBNamespace('admin', '$cmd'), options);

    this.commandBuilder = commandBuilder;
    this.clientBulkWriteOptions = options;
  }

  /**
   * We need a way to get the top level cursor response fields for
   * generating the bulk write result, so we expose this here.
   */
  get response(): ClientBulkWriteCursorResponse | null {
    if (this.cursorResponse) return this.cursorResponse;
    return null;
  }

  get operations(): Document[] {
    return this.commandBuilder.lastOperations;
  }

  clone(): ClientBulkWriteCursor {
    const clonedOptions = mergeOptions({}, this.clientBulkWriteOptions);
    delete clonedOptions.session;
    return new ClientBulkWriteCursor(this.client, this.commandBuilder, {
      ...clonedOptions
    });
  }

  /** @internal */
  async _initialize(session: ClientSession): Promise<InitialCursorResponse> {
    const clientBulkWriteOperation = new ClientBulkWriteOperation(this.commandBuilder, {
      ...this.clientBulkWriteOptions,
      ...this.cursorOptions,
      session
    });

    const response = await executeOperation(
      this.client,
      clientBulkWriteOperation,
      this.timeoutContext
    );
    this.cursorResponse = response;

    return { server: clientBulkWriteOperation.server, session, response };
  }
}
