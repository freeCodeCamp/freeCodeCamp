import type { Document } from '../bson';
import * as BSON from '../bson';
import type { Collection } from '../collection';
import { MongoInvalidArgumentError } from '../error';
import type { DeleteStatement } from '../operations/delete';
import type { UpdateStatement } from '../operations/update';
import { Batch, BatchType, BulkOperationBase, type BulkWriteOptions } from './common';

/** @public */
export class OrderedBulkOperation extends BulkOperationBase {
  /** @internal */
  constructor(collection: Collection, options: BulkWriteOptions) {
    super(collection, options, true);
  }

  addToOperationsList(
    batchType: BatchType,
    document: Document | UpdateStatement | DeleteStatement
  ): this {
    // Get the bsonSize
    const bsonSize = BSON.calculateObjectSize(document, {
      checkKeys: false,
      // Since we don't know what the user selected for BSON options here,
      // err on the safe side, and check the size with ignoreUndefined: false.
      ignoreUndefined: false
    } as any);

    // Throw error if the doc is bigger than the max BSON size
    if (bsonSize >= this.s.maxBsonObjectSize)
      // TODO(NODE-3483): Change this to MongoBSONError
      throw new MongoInvalidArgumentError(
        `Document is larger than the maximum size ${this.s.maxBsonObjectSize}`
      );

    // Create a new batch object if we don't have a current one
    if (this.s.currentBatch == null) {
      this.s.currentBatch = new Batch(batchType, this.s.currentIndex);
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
      this.s.currentBatch.batchType !== batchType
    ) {
      // Save the batch to the execution stack
      this.s.batches.push(this.s.currentBatch);

      // Create a new batch
      this.s.currentBatch = new Batch(batchType, this.s.currentIndex);

      // Reset the current size trackers
      this.s.currentBatchSize = 0;
      this.s.currentBatchSizeBytes = 0;
    }

    if (batchType === BatchType.INSERT) {
      this.s.bulkResult.insertedIds.push({
        index: this.s.currentIndex,
        _id: (document as Document)._id
      });
    }

    // We have an array of documents
    if (Array.isArray(document)) {
      throw new MongoInvalidArgumentError('Operation passed in cannot be an Array');
    }

    this.s.currentBatch.originalIndexes.push(this.s.currentIndex);
    this.s.currentBatch.operations.push(document);
    this.s.currentBatchSize += 1;
    this.s.currentBatchSizeBytes += maxKeySize + bsonSize;
    this.s.currentIndex += 1;
    return this;
  }
}
