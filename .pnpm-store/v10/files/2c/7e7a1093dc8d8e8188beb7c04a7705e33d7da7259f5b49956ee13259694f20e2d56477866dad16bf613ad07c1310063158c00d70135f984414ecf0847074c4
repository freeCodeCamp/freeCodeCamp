import { type Document } from '../../bson';
import { CursorTimeoutContext, CursorTimeoutMode } from '../../cursor/abstract_cursor';
import { ClientBulkWriteCursor } from '../../cursor/client_bulk_write_cursor';
import {
  MongoClientBulkWriteError,
  MongoClientBulkWriteExecutionError,
  MongoInvalidArgumentError,
  MongoServerError
} from '../../error';
import { type MongoClient } from '../../mongo_client';
import { TimeoutContext } from '../../timeout';
import { resolveTimeoutOptions } from '../../utils';
import { WriteConcern } from '../../write_concern';
import { executeOperation } from '../execute_operation';
import { ClientBulkWriteOperation } from './client_bulk_write';
import { ClientBulkWriteCommandBuilder } from './command_builder';
import {
  type AnyClientBulkWriteModel,
  type ClientBulkWriteOptions,
  type ClientBulkWriteResult
} from './common';
import { ClientBulkWriteResultsMerger } from './results_merger';

/**
 * Responsible for executing a client bulk write.
 * @internal
 */
export class ClientBulkWriteExecutor {
  private readonly client: MongoClient;
  private readonly options: ClientBulkWriteOptions;
  private readonly operations: ReadonlyArray<AnyClientBulkWriteModel<Document>>;

  /**
   * Instantiate the executor.
   * @param client - The mongo client.
   * @param operations - The user supplied bulk write models.
   * @param options - The bulk write options.
   */
  constructor(
    client: MongoClient,
    operations: ReadonlyArray<AnyClientBulkWriteModel<Document>>,
    options?: ClientBulkWriteOptions
  ) {
    if (operations.length === 0) {
      throw new MongoClientBulkWriteExecutionError('No client bulk write models were provided.');
    }

    this.client = client;
    this.operations = operations;
    this.options = {
      ordered: true,
      bypassDocumentValidation: false,
      verboseResults: false,
      ...options
    };

    // If no write concern was provided, we inherit one from the client.
    if (!this.options.writeConcern) {
      this.options.writeConcern = WriteConcern.fromOptions(this.client.s.options);
    }

    if (this.options.writeConcern?.w === 0) {
      if (this.options.verboseResults) {
        throw new MongoInvalidArgumentError(
          'Cannot request unacknowledged write concern and verbose results'
        );
      }

      if (this.options.ordered) {
        throw new MongoInvalidArgumentError(
          'Cannot request unacknowledged write concern and ordered writes'
        );
      }
    }
  }

  /**
   * Execute the client bulk write. Will split commands into batches and exhaust the cursors
   * for each, then merge the results into one.
   * @returns The result.
   */
  async execute(): Promise<ClientBulkWriteResult> {
    // The command builder will take the user provided models and potential split the batch
    // into multiple commands due to size.
    const pkFactory = this.client.s.options.pkFactory;
    const commandBuilder = new ClientBulkWriteCommandBuilder(
      this.operations,
      this.options,
      pkFactory
    );
    // Unacknowledged writes need to execute all batches and return { ok: 1}
    const resolvedOptions = resolveTimeoutOptions(this.client, this.options);
    const context = TimeoutContext.create(resolvedOptions);

    if (this.options.writeConcern?.w === 0) {
      while (commandBuilder.hasNextBatch()) {
        const operation = new ClientBulkWriteOperation(commandBuilder, this.options);
        await executeOperation(this.client, operation, context);
      }
      return ClientBulkWriteResultsMerger.unacknowledged();
    } else {
      const resultsMerger = new ClientBulkWriteResultsMerger(this.options);
      // For each command will will create and exhaust a cursor for the results.
      while (commandBuilder.hasNextBatch()) {
        const cursorContext = new CursorTimeoutContext(context, Symbol());
        const options = {
          ...this.options,
          timeoutContext: cursorContext,
          ...(resolvedOptions.timeoutMS != null && { timeoutMode: CursorTimeoutMode.LIFETIME })
        };
        const cursor = new ClientBulkWriteCursor(this.client, commandBuilder, options);
        try {
          await resultsMerger.merge(cursor);
        } catch (error) {
          // Write concern errors are recorded in the writeConcernErrors field on MongoClientBulkWriteError.
          // When a write concern error is encountered, it should not terminate execution of the bulk write
          // for either ordered or unordered bulk writes. However, drivers MUST throw an exception at the end
          // of execution if any write concern errors were observed.
          if (error instanceof MongoServerError && !(error instanceof MongoClientBulkWriteError)) {
            // Server side errors need to be wrapped inside a MongoClientBulkWriteError, where the root
            // cause is the error property and a partial result is to be included.
            const bulkWriteError = new MongoClientBulkWriteError({
              message: 'Mongo client bulk write encountered an error during execution'
            });
            bulkWriteError.cause = error;
            bulkWriteError.partialResult = resultsMerger.bulkWriteResult;
            throw bulkWriteError;
          } else {
            // Client side errors are just thrown.
            throw error;
          }
        }
      }

      // If we have write concern errors or unordered write errors at the end we throw.
      if (resultsMerger.writeConcernErrors.length > 0 || resultsMerger.writeErrors.size > 0) {
        const error = new MongoClientBulkWriteError({
          message: 'Mongo client bulk write encountered errors during execution.'
        });
        error.writeConcernErrors = resultsMerger.writeConcernErrors;
        error.writeErrors = resultsMerger.writeErrors;
        error.partialResult = resultsMerger.bulkWriteResult;
        throw error;
      }

      return resultsMerger.bulkWriteResult;
    }
  }
}
