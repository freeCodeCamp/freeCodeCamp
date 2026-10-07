"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildReplaceOneOperation = exports.buildUpdateManyOperation = exports.buildUpdateOneOperation = exports.buildDeleteManyOperation = exports.buildDeleteOneOperation = exports.buildInsertOneOperation = exports.ClientBulkWriteCommandBuilder = void 0;
exports.buildOperation = buildOperation;
const bson_1 = require("../../bson");
const commands_1 = require("../../cmap/commands");
const error_1 = require("../../error");
const sort_1 = require("../../sort");
const utils_1 = require("../../utils");
/**
 * The bytes overhead for the extra fields added post command generation.
 */
const MESSAGE_OVERHEAD_BYTES = 1000;
/** @internal */
class ClientBulkWriteCommandBuilder {
    /**
     * Create the command builder.
     * @param models - The client write models.
     */
    constructor(models, options, pkFactory) {
        this.models = models;
        this.options = options;
        this.pkFactory = pkFactory ?? utils_1.DEFAULT_PK_FACTORY;
        this.currentModelIndex = 0;
        this.previousModelIndex = 0;
        this.lastOperations = [];
        this.isBatchRetryable = true;
    }
    /**
     * Gets the errorsOnly value for the command, which is the inverse of the
     * user provided verboseResults option. Defaults to true.
     */
    get errorsOnly() {
        if ('verboseResults' in this.options) {
            return !this.options.verboseResults;
        }
        return true;
    }
    /**
     * Determines if there is another batch to process.
     * @returns True if not all batches have been built.
     */
    hasNextBatch() {
        return this.currentModelIndex < this.models.length;
    }
    /**
     * When we need to retry a command we need to set the current
     * model index back to its previous value.
     */
    resetBatch() {
        this.currentModelIndex = this.previousModelIndex;
        return true;
    }
    /**
     * Build a single batch of a client bulk write command.
     * @param maxMessageSizeBytes - The max message size in bytes.
     * @param maxWriteBatchSize - The max write batch size.
     * @returns The client bulk write command.
     */
    buildBatch(maxMessageSizeBytes, maxWriteBatchSize, maxBsonObjectSize) {
        // We start by assuming the batch has no multi-updates, so it is retryable
        // until we find them.
        this.isBatchRetryable = true;
        let commandLength = 0;
        let currentNamespaceIndex = 0;
        const command = this.baseCommand();
        const namespaces = new Map();
        // In the case of retries we need to mark where we started this batch.
        this.previousModelIndex = this.currentModelIndex;
        while (this.currentModelIndex < this.models.length) {
            const model = this.models[this.currentModelIndex];
            const ns = model.namespace;
            const nsIndex = namespaces.get(ns);
            // Multi updates are not retryable.
            if (model.name === 'deleteMany' || model.name === 'updateMany') {
                this.isBatchRetryable = false;
            }
            if (nsIndex != null) {
                // Build the operation and serialize it to get the bytes buffer.
                const operation = buildOperation(model, nsIndex, this.pkFactory, this.options);
                let operationBuffer;
                try {
                    operationBuffer = bson_1.BSON.serialize(operation);
                }
                catch (cause) {
                    throw new error_1.MongoInvalidArgumentError(`Could not serialize operation to BSON`, { cause });
                }
                validateBufferSize('ops', operationBuffer, maxBsonObjectSize);
                // Check if the operation buffer can fit in the command. If it can,
                // then add the operation to the document sequence and increment the
                // current length as long as the ops don't exceed the maxWriteBatchSize.
                if (commandLength + operationBuffer.length < maxMessageSizeBytes &&
                    command.ops.documents.length < maxWriteBatchSize) {
                    // Pushing to the ops document sequence returns the total byte length of the document sequence.
                    commandLength = MESSAGE_OVERHEAD_BYTES + command.ops.push(operation, operationBuffer);
                    // Increment the builder's current model index.
                    this.currentModelIndex++;
                }
                else {
                    // The operation cannot fit in the current command and will need to
                    // go in the next batch. Exit the loop.
                    break;
                }
            }
            else {
                // The namespace is not already in the nsInfo so we will set it in the map, and
                // construct our nsInfo and ops documents and buffers.
                namespaces.set(ns, currentNamespaceIndex);
                const nsInfo = { ns: ns };
                const operation = buildOperation(model, currentNamespaceIndex, this.pkFactory, this.options);
                let nsInfoBuffer;
                let operationBuffer;
                try {
                    nsInfoBuffer = bson_1.BSON.serialize(nsInfo);
                    operationBuffer = bson_1.BSON.serialize(operation);
                }
                catch (cause) {
                    throw new error_1.MongoInvalidArgumentError(`Could not serialize ns info to BSON`, { cause });
                }
                validateBufferSize('nsInfo', nsInfoBuffer, maxBsonObjectSize);
                validateBufferSize('ops', operationBuffer, maxBsonObjectSize);
                // Check if the operation and nsInfo buffers can fit in the command. If they
                // can, then add the operation and nsInfo to their respective document
                // sequences and increment the current length as long as the ops don't exceed
                // the maxWriteBatchSize.
                if (commandLength + nsInfoBuffer.length + operationBuffer.length < maxMessageSizeBytes &&
                    command.ops.documents.length < maxWriteBatchSize) {
                    // Pushing to the ops document sequence returns the total byte length of the document sequence.
                    commandLength =
                        MESSAGE_OVERHEAD_BYTES +
                            command.nsInfo.push(nsInfo, nsInfoBuffer) +
                            command.ops.push(operation, operationBuffer);
                    // We've added a new namespace, increment the namespace index.
                    currentNamespaceIndex++;
                    // Increment the builder's current model index.
                    this.currentModelIndex++;
                }
                else {
                    // The operation cannot fit in the current command and will need to
                    // go in the next batch. Exit the loop.
                    break;
                }
            }
        }
        // Set the last operations and return the command.
        this.lastOperations = command.ops.documents;
        return command;
    }
    baseCommand() {
        const command = {
            bulkWrite: 1,
            errorsOnly: this.errorsOnly,
            ordered: this.options.ordered ?? true,
            ops: new commands_1.DocumentSequence('ops'),
            nsInfo: new commands_1.DocumentSequence('nsInfo')
        };
        // Add bypassDocumentValidation if it was present in the options.
        if (this.options.bypassDocumentValidation != null) {
            command.bypassDocumentValidation = this.options.bypassDocumentValidation;
        }
        // Add let if it was present in the options.
        if (this.options.let) {
            command.let = this.options.let;
        }
        // we check for undefined specifically here to allow falsy values
        // eslint-disable-next-line no-restricted-syntax
        if (this.options.comment !== undefined) {
            command.comment = this.options.comment;
        }
        return command;
    }
}
exports.ClientBulkWriteCommandBuilder = ClientBulkWriteCommandBuilder;
function validateBufferSize(name, buffer, maxBsonObjectSize) {
    if (buffer.length > maxBsonObjectSize) {
        throw new error_1.MongoInvalidArgumentError(`Client bulk write operation ${name} of length ${buffer.length} exceeds the max bson object size of ${maxBsonObjectSize}`);
    }
}
/**
 * Build the insert one operation.
 * @param model - The insert one model.
 * @param index - The namespace index.
 * @returns the operation.
 */
const buildInsertOneOperation = (model, index, pkFactory) => {
    const document = {
        insert: index,
        document: model.document
    };
    document.document._id = model.document._id ?? pkFactory.createPk();
    return document;
};
exports.buildInsertOneOperation = buildInsertOneOperation;
/**
 * Build the delete one operation.
 * @param model - The insert many model.
 * @param index - The namespace index.
 * @returns the operation.
 */
const buildDeleteOneOperation = (model, index) => {
    return createDeleteOperation(model, index, false);
};
exports.buildDeleteOneOperation = buildDeleteOneOperation;
/**
 * Build the delete many operation.
 * @param model - The delete many model.
 * @param index - The namespace index.
 * @returns the operation.
 */
const buildDeleteManyOperation = (model, index) => {
    return createDeleteOperation(model, index, true);
};
exports.buildDeleteManyOperation = buildDeleteManyOperation;
/**
 * Creates a delete operation based on the parameters.
 */
function createDeleteOperation(model, index, multi) {
    const document = {
        delete: index,
        multi: multi,
        filter: model.filter
    };
    if (model.hint) {
        document.hint = model.hint;
    }
    if (model.collation) {
        document.collation = model.collation;
    }
    return document;
}
/**
 * Build the update one operation.
 * @param model - The update one model.
 * @param index - The namespace index.
 * @returns the operation.
 */
const buildUpdateOneOperation = (model, index, options) => {
    return createUpdateOperation(model, index, false, options);
};
exports.buildUpdateOneOperation = buildUpdateOneOperation;
/**
 * Build the update many operation.
 * @param model - The update many model.
 * @param index - The namespace index.
 * @returns the operation.
 */
const buildUpdateManyOperation = (model, index, options) => {
    return createUpdateOperation(model, index, true, options);
};
exports.buildUpdateManyOperation = buildUpdateManyOperation;
/**
 * Validate the update document.
 * @param update - The update document.
 */
function validateUpdate(update, options) {
    if (!(0, utils_1.hasAtomicOperators)(update, options)) {
        throw new error_1.MongoAPIError('Client bulk write update models must only contain atomic modifiers (start with $) and must not be empty.');
    }
}
/**
 * Creates a delete operation based on the parameters.
 */
function createUpdateOperation(model, index, multi, options) {
    // Update documents provided in UpdateOne and UpdateMany write models are
    // required only to contain atomic modifiers (i.e. keys that start with "$").
    // Drivers MUST throw an error if an update document is empty or if the
    // document's first key does not start with "$".
    validateUpdate(model.update, options);
    const document = {
        update: index,
        multi: multi,
        filter: model.filter,
        updateMods: model.update
    };
    if (model.hint) {
        document.hint = model.hint;
    }
    if (model.upsert) {
        document.upsert = model.upsert;
    }
    if (model.arrayFilters) {
        document.arrayFilters = model.arrayFilters;
    }
    if (model.collation) {
        document.collation = model.collation;
    }
    if (!multi && 'sort' in model && model.sort != null) {
        document.sort = (0, sort_1.formatSort)(model.sort);
    }
    return document;
}
/**
 * Build the replace one operation.
 * @param model - The replace one model.
 * @param index - The namespace index.
 * @returns the operation.
 */
const buildReplaceOneOperation = (model, index) => {
    if ((0, utils_1.hasAtomicOperators)(model.replacement)) {
        throw new error_1.MongoAPIError('Client bulk write replace models must not contain atomic modifiers (start with $) and must not be empty.');
    }
    const document = {
        update: index,
        multi: false,
        filter: model.filter,
        updateMods: model.replacement
    };
    if (model.hint) {
        document.hint = model.hint;
    }
    if (model.upsert) {
        document.upsert = model.upsert;
    }
    if (model.collation) {
        document.collation = model.collation;
    }
    if (model.sort != null) {
        document.sort = (0, sort_1.formatSort)(model.sort);
    }
    return document;
};
exports.buildReplaceOneOperation = buildReplaceOneOperation;
/** @internal */
function buildOperation(model, index, pkFactory, options) {
    switch (model.name) {
        case 'insertOne':
            return (0, exports.buildInsertOneOperation)(model, index, pkFactory);
        case 'deleteOne':
            return (0, exports.buildDeleteOneOperation)(model, index);
        case 'deleteMany':
            return (0, exports.buildDeleteManyOperation)(model, index);
        case 'updateOne':
            return (0, exports.buildUpdateOneOperation)(model, index, options);
        case 'updateMany':
            return (0, exports.buildUpdateManyOperation)(model, index, options);
        case 'replaceOne':
            return (0, exports.buildReplaceOneOperation)(model, index);
    }
}
//# sourceMappingURL=command_builder.js.map