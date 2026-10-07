"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderedBulkOperation = void 0;
const BSON = require("../bson");
const error_1 = require("../error");
const common_1 = require("./common");
/** @public */
class OrderedBulkOperation extends common_1.BulkOperationBase {
    /** @internal */
    constructor(collection, options) {
        super(collection, options, true);
    }
    addToOperationsList(batchType, document) {
        // Get the bsonSize
        const bsonSize = BSON.calculateObjectSize(document, {
            checkKeys: false,
            // Since we don't know what the user selected for BSON options here,
            // err on the safe side, and check the size with ignoreUndefined: false.
            ignoreUndefined: false
        });
        // Throw error if the doc is bigger than the max BSON size
        if (bsonSize >= this.s.maxBsonObjectSize)
            // TODO(NODE-3483): Change this to MongoBSONError
            throw new error_1.MongoInvalidArgumentError(`Document is larger than the maximum size ${this.s.maxBsonObjectSize}`);
        // Create a new batch object if we don't have a current one
        if (this.s.currentBatch == null) {
            this.s.currentBatch = new common_1.Batch(batchType, this.s.currentIndex);
        }
        const maxKeySize = this.s.maxKeySize;
        // Check if we need to create a new batch
        if (
        // New batch if we exceed the max batch op size
        this.s.currentBatchSize + 1 >= this.s.maxWriteBatchSize ||
            // New batch if we exceed the maxBatchSizeBytes. Only matters if batch already has a doc,
            // since we can't sent an empty batch
            (this.s.currentBatchSize > 0 &&
                this.s.currentBatchSizeBytes + maxKeySize + bsonSize >= this.s.maxBatchSizeBytes) ||
            // New batch if the new op does not have the same op type as the current batch
            this.s.currentBatch.batchType !== batchType) {
            // Save the batch to the execution stack
            this.s.batches.push(this.s.currentBatch);
            // Create a new batch
            this.s.currentBatch = new common_1.Batch(batchType, this.s.currentIndex);
            // Reset the current size trackers
            this.s.currentBatchSize = 0;
            this.s.currentBatchSizeBytes = 0;
        }
        if (batchType === common_1.BatchType.INSERT) {
            this.s.bulkResult.insertedIds.push({
                index: this.s.currentIndex,
                _id: document._id
            });
        }
        // We have an array of documents
        if (Array.isArray(document)) {
            throw new error_1.MongoInvalidArgumentError('Operation passed in cannot be an Array');
        }
        this.s.currentBatch.originalIndexes.push(this.s.currentIndex);
        this.s.currentBatch.operations.push(document);
        this.s.currentBatchSize += 1;
        this.s.currentBatchSizeBytes += maxKeySize + bsonSize;
        this.s.currentIndex += 1;
        return this;
    }
}
exports.OrderedBulkOperation = OrderedBulkOperation;
//# sourceMappingURL=ordered.js.map