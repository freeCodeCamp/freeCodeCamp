import { type Connection } from '../../cmap/connection';
import { ClientBulkWriteCursorResponse } from '../../cmap/wire_protocol/responses';
import type { ClientSession } from '../../sessions';
import { MongoDBNamespace } from '../../utils';
import { CommandOperation } from '../command';
import { Aspect, defineAspects } from '../operation';
import { type ClientBulkWriteCommand, type ClientBulkWriteCommandBuilder } from './command_builder';
import { type ClientBulkWriteOptions } from './common';

/**
 * Executes a single client bulk write operation within a potential batch.
 * @internal
 */
export class ClientBulkWriteOperation extends CommandOperation<ClientBulkWriteCursorResponse> {
  override SERVER_COMMAND_RESPONSE_TYPE = ClientBulkWriteCursorResponse;

  commandBuilder: ClientBulkWriteCommandBuilder;
  override options: ClientBulkWriteOptions;

  override get commandName() {
    return 'bulkWrite' as const;
  }

  constructor(commandBuilder: ClientBulkWriteCommandBuilder, options: ClientBulkWriteOptions) {
    super(undefined, options);
    this.commandBuilder = commandBuilder;
    this.options = options;
    this.ns = new MongoDBNamespace('admin', '$cmd');
  }

  override resetBatch(): boolean {
    return this.commandBuilder.resetBatch();
  }

  override get canRetryWrite(): boolean {
    return this.commandBuilder.isBatchRetryable;
  }

  override handleOk(
    response: InstanceType<typeof this.SERVER_COMMAND_RESPONSE_TYPE>
  ): ClientBulkWriteCursorResponse {
    return response;
  }

  override buildCommandDocument(
    connection: Connection,
    _session?: ClientSession
  ): ClientBulkWriteCommand {
    const command = this.commandBuilder.buildBatch(
      connection.description.maxMessageSizeBytes,
      connection.description.maxWriteBatchSize,
      connection.description.maxBsonObjectSize
    );

    // Check _after_ the batch is built if we cannot retry it and override the option.
    if (!this.canRetryWrite) {
      this.options.willRetryWrite = false;
    }

    return command;
  }
}

// Skipping the collation as it goes on the individual ops.
defineAspects(ClientBulkWriteOperation, [
  Aspect.WRITE_OPERATION,
  Aspect.SKIP_COLLATION,
  Aspect.CURSOR_CREATING,
  Aspect.RETRYABLE,
  Aspect.COMMAND_BATCHING,
  Aspect.SUPPORTS_RAW_DATA
]);
