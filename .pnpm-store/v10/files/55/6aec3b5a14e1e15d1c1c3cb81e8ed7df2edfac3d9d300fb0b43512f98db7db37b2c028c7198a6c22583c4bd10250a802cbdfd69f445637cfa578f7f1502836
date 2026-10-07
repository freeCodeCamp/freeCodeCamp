"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientBulkWriteOperation = void 0;
const responses_1 = require("../../cmap/wire_protocol/responses");
const utils_1 = require("../../utils");
const command_1 = require("../command");
const operation_1 = require("../operation");
/**
 * Executes a single client bulk write operation within a potential batch.
 * @internal
 */
class ClientBulkWriteOperation extends command_1.CommandOperation {
    get commandName() {
        return 'bulkWrite';
    }
    constructor(commandBuilder, options) {
        super(undefined, options);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.ClientBulkWriteCursorResponse;
        this.commandBuilder = commandBuilder;
        this.options = options;
        this.ns = new utils_1.MongoDBNamespace('admin', '$cmd');
    }
    resetBatch() {
        return this.commandBuilder.resetBatch();
    }
    get canRetryWrite() {
        return this.commandBuilder.isBatchRetryable;
    }
    handleOk(response) {
        return response;
    }
    buildCommandDocument(connection, _session) {
        const command = this.commandBuilder.buildBatch(connection.description.maxMessageSizeBytes, connection.description.maxWriteBatchSize, connection.description.maxBsonObjectSize);
        // Check _after_ the batch is built if we cannot retry it and override the option.
        if (!this.canRetryWrite) {
            this.options.willRetryWrite = false;
        }
        return command;
    }
}
exports.ClientBulkWriteOperation = ClientBulkWriteOperation;
// Skipping the collation as it goes on the individual ops.
(0, operation_1.defineAspects)(ClientBulkWriteOperation, [
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.SKIP_COLLATION,
    operation_1.Aspect.CURSOR_CREATING,
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.COMMAND_BATCHING,
    operation_1.Aspect.SUPPORTS_RAW_DATA
]);
//# sourceMappingURL=client_bulk_write.js.map