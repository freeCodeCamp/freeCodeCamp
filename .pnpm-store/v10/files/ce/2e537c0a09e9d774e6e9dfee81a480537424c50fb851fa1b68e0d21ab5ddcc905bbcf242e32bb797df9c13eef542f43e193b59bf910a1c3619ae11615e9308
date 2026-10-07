import { MongoWriteConcernError } from '../..';
import { type Document } from '../../bson';
import { type ClientBulkWriteCursor } from '../../cursor/client_bulk_write_cursor';
import { MongoClientBulkWriteError } from '../../error';
import {
  type ClientBulkWriteError,
  type ClientBulkWriteOptions,
  type ClientBulkWriteResult,
  type ClientDeleteResult,
  type ClientInsertOneResult,
  type ClientUpdateResult
} from './common';

/**
 * Unacknowledged bulk writes are always the same.
 */
const UNACKNOWLEDGED = {
  acknowledged: false,
  insertedCount: 0,
  upsertedCount: 0,
  matchedCount: 0,
  modifiedCount: 0,
  deletedCount: 0,
  insertResults: undefined,
  updateResults: undefined,
  deleteResults: undefined
};

interface ClientBulkWriteResultAccumulation {
  /**
   * Whether the bulk write was acknowledged.
   */
  acknowledged: boolean;
  /**
   * The total number of documents inserted across all insert operations.
   */
  insertedCount: number;
  /**
   * The total number of documents upserted across all update operations.
   */
  upsertedCount: number;
  /**
   * The total number of documents matched across all update operations.
   */
  matchedCount: number;
  /**
   * The total number of documents modified across all update operations.
   */
  modifiedCount: number;
  /**
   * The total number of documents deleted across all delete operations.
   */
  deletedCount: number;
  /**
   * The results of each individual insert operation that was successfully performed.
   */
  insertResults?: Map<number, ClientInsertOneResult>;
  /**
   * The results of each individual update operation that was successfully performed.
   */
  updateResults?: Map<number, ClientUpdateResult>;
  /**
   * The results of each individual delete operation that was successfully performed.
   */
  deleteResults?: Map<number, ClientDeleteResult>;
}

/**
 * Merges client bulk write cursor responses together into a single result.
 * @internal
 */
export class ClientBulkWriteResultsMerger {
  private result: ClientBulkWriteResultAccumulation;
  private options: ClientBulkWriteOptions;
  private currentBatchOffset: number;
  writeConcernErrors: Document[];
  writeErrors: Map<number, ClientBulkWriteError>;

  /**
   * @returns The standard unacknowledged bulk write result.
   */
  static unacknowledged(): ClientBulkWriteResult {
    return UNACKNOWLEDGED;
  }

  /**
   * Instantiate the merger.
   * @param options - The options.
   */
  constructor(options: ClientBulkWriteOptions) {
    this.options = options;
    this.currentBatchOffset = 0;
    this.writeConcernErrors = [];
    this.writeErrors = new Map();
    this.result = {
      acknowledged: true,
      insertedCount: 0,
      upsertedCount: 0,
      matchedCount: 0,
      modifiedCount: 0,
      deletedCount: 0,
      insertResults: undefined,
      updateResults: undefined,
      deleteResults: undefined
    };

    if (options.verboseResults) {
      this.result.insertResults = new Map<number, ClientInsertOneResult>();
      this.result.updateResults = new Map<number, ClientUpdateResult>();
      this.result.deleteResults = new Map<number, ClientDeleteResult>();
    }
  }

  /**
   * Get the bulk write result object.
   */
  get bulkWriteResult(): ClientBulkWriteResult {
    return {
      acknowledged: this.result.acknowledged,
      insertedCount: this.result.insertedCount,
      upsertedCount: this.result.upsertedCount,
      matchedCount: this.result.matchedCount,
      modifiedCount: this.result.modifiedCount,
      deletedCount: this.result.deletedCount,
      insertResults: this.result.insertResults,
      updateResults: this.result.updateResults,
      deleteResults: this.result.deleteResults
    };
  }

  /**
   * Merge the results in the cursor to the existing result.
   * @param currentBatchOffset - The offset index to the original models.
   * @param response - The cursor response.
   * @param documents - The documents in the cursor.
   * @returns The current result.
   */
  async merge(cursor: ClientBulkWriteCursor): Promise<ClientBulkWriteResult> {
    let writeConcernErrorResult;
    try {
      for await (const document of cursor) {
        // Only add to maps if ok: 1
        if (document.ok === 1) {
          if (this.options.verboseResults) {
            this.processDocument(cursor, document);
          }
        } else {
          // If an individual write error is encountered during an ordered bulk write, drivers MUST
          // record the error in writeErrors and immediately throw the exception. Otherwise, drivers
          // MUST continue to iterate the results cursor and execute any further bulkWrite batches.
          if (this.options.ordered) {
            const error = new MongoClientBulkWriteError({
              message: 'Mongo client ordered bulk write encountered a write error.'
            });
            error.writeErrors.set(document.idx + this.currentBatchOffset, {
              code: document.code,
              message: document.errmsg
            });
            error.partialResult = this.result;
            throw error;
          } else {
            this.writeErrors.set(document.idx + this.currentBatchOffset, {
              code: document.code,
              message: document.errmsg
            });
          }
        }
      }
    } catch (error) {
      if (error instanceof MongoWriteConcernError) {
        const result = error.result;
        writeConcernErrorResult = {
          insertedCount: result.nInserted,
          upsertedCount: result.nUpserted,
          matchedCount: result.nMatched,
          modifiedCount: result.nModified,
          deletedCount: result.nDeleted,
          writeConcernError: result.writeConcernError
        };
        if (this.options.verboseResults && result.cursor.firstBatch) {
          for (const document of result.cursor.firstBatch) {
            if (document.ok === 1) {
              this.processDocument(cursor, document);
            }
          }
        }
      } else {
        throw error;
      }
    } finally {
      // Update the counts from the cursor response.
      if (cursor.response) {
        const response = cursor.response;
        this.incrementCounts(response);
      }

      // Increment the batch offset.
      this.currentBatchOffset += cursor.operations.length;
    }

    // If we have write concern errors ensure they are added.
    if (writeConcernErrorResult) {
      const writeConcernError = writeConcernErrorResult.writeConcernError as Document;
      this.incrementCounts(writeConcernErrorResult);
      this.writeConcernErrors.push({
        code: writeConcernError.code,
        message: writeConcernError.errmsg
      });
    }

    return this.result;
  }

  /**
   * Process an individual document in the results.
   * @param cursor - The cursor.
   * @param document - The document to process.
   */
  private processDocument(cursor: ClientBulkWriteCursor, document: Document) {
    // Get the corresponding operation from the command.
    const operation = cursor.operations[document.idx];
    // Handle insert results.
    if ('insert' in operation) {
      this.result.insertResults?.set(document.idx + this.currentBatchOffset, {
        insertedId: operation.document._id
      });
    }
    // Handle update results.
    if ('update' in operation) {
      const result: ClientUpdateResult = {
        matchedCount: document.n,
        modifiedCount: document.nModified ?? 0,
        // Check if the bulk did actually upsert.
        didUpsert: document.upserted != null
      };
      if (document.upserted) {
        result.upsertedId = document.upserted._id;
      }
      this.result.updateResults?.set(document.idx + this.currentBatchOffset, result);
    }
    // Handle delete results.
    if ('delete' in operation) {
      this.result.deleteResults?.set(document.idx + this.currentBatchOffset, {
        deletedCount: document.n
      });
    }
  }

  /**
   * Increment the result counts.
   * @param document - The document with the results.
   */
  private incrementCounts(document: Document) {
    this.result.insertedCount += document.insertedCount;
    this.result.upsertedCount += document.upsertedCount;
    this.result.matchedCount += document.matchedCount;
    this.result.modifiedCount += document.modifiedCount;
    this.result.deletedCount += document.deletedCount;
  }
}
