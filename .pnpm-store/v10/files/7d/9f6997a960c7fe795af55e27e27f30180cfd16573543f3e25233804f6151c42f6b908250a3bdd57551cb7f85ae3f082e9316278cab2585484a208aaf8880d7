"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientBulkWriteExecutor = void 0;
const abstract_cursor_1 = require("../../cursor/abstract_cursor");
const client_bulk_write_cursor_1 = require("../../cursor/client_bulk_write_cursor");
const error_1 = require("../../error");
const timeout_1 = require("../../timeout");
const utils_1 = require("../../utils");
const write_concern_1 = require("../../write_concern");
const execute_operation_1 = require("../execute_operation");
const client_bulk_write_1 = require("./client_bulk_write");
const command_builder_1 = require("./command_builder");
const results_merger_1 = require("./results_merger");
/**
 * Responsible for executing a client bulk write.
 * @internal
 */
class ClientBulkWriteExecutor {
    /**
     * Instantiate the executor.
     * @param client - The mongo client.
     * @param operations - The user supplied bulk write models.
     * @param options - The bulk write options.
     */
    constructor(client, operations, options) {
        if (operations.length === 0) {
            throw new error_1.MongoClientBulkWriteExecutionError('No client bulk write models were provided.');
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
            this.options.writeConcern = write_concern_1.WriteConcern.fromOptions(this.client.s.options);
        }
        if (this.options.writeConcern?.w === 0) {
            if (this.options.verboseResults) {
                throw new error_1.MongoInvalidArgumentError('Cannot request unacknowledged write concern and verbose results');
            }
            if (this.options.ordered) {
                throw new error_1.MongoInvalidArgumentError('Cannot request unacknowledged write concern and ordered writes');
            }
        }
    }
    /**
     * Execute the client bulk write. Will split commands into batches and exhaust the cursors
     * for each, then merge the results into one.
     * @returns The result.
     */
    async execute() {
        // The command builder will take the user provided models and potential split the batch
        // into multiple commands due to size.
        const pkFactory = this.client.s.options.pkFactory;
        const commandBuilder = new command_builder_1.ClientBulkWriteCommandBuilder(this.operations, this.options, pkFactory);
        // Unacknowledged writes need to execute all batches and return { ok: 1}
        const resolvedOptions = (0, utils_1.resolveTimeoutOptions)(this.client, this.options);
        const context = timeout_1.TimeoutContext.create(resolvedOptions);
        if (this.options.writeConcern?.w === 0) {
            while (commandBuilder.hasNextBatch()) {
                const operation = new client_bulk_write_1.ClientBulkWriteOperation(commandBuilder, this.options);
                await (0, execute_operation_1.executeOperation)(this.client, operation, context);
            }
            return results_merger_1.ClientBulkWriteResultsMerger.unacknowledged();
        }
        else {
            const resultsMerger = new results_merger_1.ClientBulkWriteResultsMerger(this.options);
            // For each command will will create and exhaust a cursor for the results.
            while (commandBuilder.hasNextBatch()) {
                const cursorContext = new abstract_cursor_1.CursorTimeoutContext(context, Symbol());
                const options = {
                    ...this.options,
                    timeoutContext: cursorContext,
                    ...(resolvedOptions.timeoutMS != null && { timeoutMode: abstract_cursor_1.CursorTimeoutMode.LIFETIME })
                };
                const cursor = new client_bulk_write_cursor_1.ClientBulkWriteCursor(this.client, commandBuilder, options);
                try {
                    await resultsMerger.merge(cursor);
                }
                catch (error) {
                    // Write concern errors are recorded in the writeConcernErrors field on MongoClientBulkWriteError.
                    // When a write concern error is encountered, it should not terminate execution of the bulk write
                    // for either ordered or unordered bulk writes. However, drivers MUST throw an exception at the end
                    // of execution if any write concern errors were observed.
                    if (error instanceof error_1.MongoServerError && !(error instanceof error_1.MongoClientBulkWriteError)) {
                        // Server side errors need to be wrapped inside a MongoClientBulkWriteError, where the root
                        // cause is the error property and a partial result is to be included.
                        const bulkWriteError = new error_1.MongoClientBulkWriteError({
                            message: 'Mongo client bulk write encountered an error during execution'
                        });
                        bulkWriteError.cause = error;
                        bulkWriteError.partialResult = resultsMerger.bulkWriteResult;
                        throw bulkWriteError;
                    }
                    else {
                        // Client side errors are just thrown.
                        throw error;
                    }
                }
            }
            // If we have write concern errors or unordered write errors at the end we throw.
            if (resultsMerger.writeConcernErrors.length > 0 || resultsMerger.writeErrors.size > 0) {
                const error = new error_1.MongoClientBulkWriteError({
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
exports.ClientBulkWriteExecutor = ClientBulkWriteExecutor;
//# sourceMappingURL=executor.js.map