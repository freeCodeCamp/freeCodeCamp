"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkOperationBase = exports.FindOperators = exports.MongoBulkWriteError = exports.WriteError = exports.WriteConcernError = exports.BulkWriteResult = exports.Batch = exports.BatchType = void 0;
exports.mergeBatchResults = mergeBatchResults;
const bson_1 = require("../bson");
const error_1 = require("../error");
const delete_1 = require("../operations/delete");
const execute_operation_1 = require("../operations/execute_operation");
const insert_1 = require("../operations/insert");
const update_1 = require("../operations/update");
const timeout_1 = require("../timeout");
const utils_1 = require("../utils");
const write_concern_1 = require("../write_concern");
/** @public */
exports.BatchType = Object.freeze({
    INSERT: 1,
    UPDATE: 2,
    DELETE: 3
});
/**
 * Keeps the state of a unordered batch so we can rewrite the results
 * correctly after command execution
 *
 * @public
 */
class Batch {
    constructor(batchType, originalZeroIndex) {
        this.originalZeroIndex = originalZeroIndex;
        this.currentIndex = 0;
        this.originalIndexes = [];
        this.batchType = batchType;
        this.operations = [];
        this.size = 0;
        this.sizeBytes = 0;
    }
}
exports.Batch = Batch;
/**
 * @public
 * The result of a bulk write.
 */
class BulkWriteResult {
    static generateIdMap(ids) {
        const idMap = {};
        for (const doc of ids) {
            idMap[doc.index] = doc._id;
        }
        return idMap;
    }
    /**
     * Create a new BulkWriteResult instance
     * @internal
     */
    constructor(bulkResult, isOrdered) {
        this.result = bulkResult;
        this.insertedCount = this.result.nInserted ?? 0;
        this.matchedCount = this.result.nMatched ?? 0;
        this.modifiedCount = this.result.nModified ?? 0;
        this.deletedCount = this.result.nRemoved ?? 0;
        this.upsertedCount = this.result.upserted.length ?? 0;
        this.upsertedIds = BulkWriteResult.generateIdMap(this.result.upserted);
        this.insertedIds = BulkWriteResult.generateIdMap(this.getSuccessfullyInsertedIds(bulkResult, isOrdered));
        Object.defineProperty(this, 'result', { value: this.result, enumerable: false });
    }
    /** Evaluates to true if the bulk operation correctly executes */
    get ok() {
        return this.result.ok;
    }
    /**
     * Returns document_ids that were actually inserted
     * @internal
     */
    getSuccessfullyInsertedIds(bulkResult, isOrdered) {
        if (bulkResult.writeErrors.length === 0)
            return bulkResult.insertedIds;
        if (isOrdered) {
            return bulkResult.insertedIds.slice(0, bulkResult.writeErrors[0].index);
        }
        return bulkResult.insertedIds.filter(({ index }) => !bulkResult.writeErrors.some(writeError => index === writeError.index));
    }
    /** Returns the upserted id at the given index */
    getUpsertedIdAt(index) {
        return this.result.upserted[index];
    }
    /** Returns raw internal result */
    getRawResponse() {
        return this.result;
    }
    /** Returns true if the bulk operation contains a write error */
    hasWriteErrors() {
        return this.result.writeErrors.length > 0;
    }
    /** Returns the number of write errors from the bulk operation */
    getWriteErrorCount() {
        return this.result.writeErrors.length;
    }
    /** Returns a specific write error object */
    getWriteErrorAt(index) {
        return index < this.result.writeErrors.length ? this.result.writeErrors[index] : undefined;
    }
    /** Retrieve all write errors */
    getWriteErrors() {
        return this.result.writeErrors;
    }
    /** Retrieve the write concern error if one exists */
    getWriteConcernError() {
        if (this.result.writeConcernErrors.length === 0) {
            return;
        }
        else if (this.result.writeConcernErrors.length === 1) {
            // Return the error
            return this.result.writeConcernErrors[0];
        }
        else {
            // Combine the errors
            let errmsg = '';
            for (let i = 0; i < this.result.writeConcernErrors.length; i++) {
                const err = this.result.writeConcernErrors[i];
                errmsg = errmsg + err.errmsg;
                // TODO: Something better
                if (i === 0)
                    errmsg = errmsg + ' and ';
            }
            return new WriteConcernError({ errmsg, code: error_1.MONGODB_ERROR_CODES.WriteConcernTimeout });
        }
    }
    toString() {
        return `BulkWriteResult(${bson_1.EJSON.stringify(this.result)})`;
    }
    isOk() {
        return this.result.ok === 1;
    }
}
exports.BulkWriteResult = BulkWriteResult;
/**
 * An error representing a failure by the server to apply the requested write concern to the bulk operation.
 * @public
 * @category Error
 */
class WriteConcernError {
    constructor(error) {
        this.serverError = error;
    }
    /** Write concern error code. */
    get code() {
        return this.serverError.code;
    }
    /** Write concern error message. */
    get errmsg() {
        return this.serverError.errmsg;
    }
    /** Write concern error info. */
    get errInfo() {
        return this.serverError.errInfo;
    }
    toJSON() {
        return this.serverError;
    }
    toString() {
        return `WriteConcernError(${this.errmsg})`;
    }
}
exports.WriteConcernError = WriteConcernError;
/**
 * An error that occurred during a BulkWrite on the server.
 * @public
 * @category Error
 */
class WriteError {
    constructor(err) {
        this.err = err;
    }
    /** WriteError code. */
    get code() {
        return this.err.code;
    }
    /** WriteError original bulk operation index. */
    get index() {
        return this.err.index;
    }
    /** WriteError message. */
    get errmsg() {
        return this.err.errmsg;
    }
    /** WriteError details. */
    get errInfo() {
        return this.err.errInfo;
    }
    /** Returns the underlying operation that caused the error */
    getOperation() {
        return this.err.op;
    }
    toJSON() {
        return { code: this.err.code, index: this.err.index, errmsg: this.err.errmsg, op: this.err.op };
    }
    toString() {
        return `WriteError(${JSON.stringify(this.toJSON())})`;
    }
}
exports.WriteError = WriteError;
/** Merges results into shared data structure */
function mergeBatchResults(batch, bulkResult, err, result) {
    // If we have an error set the result to be the err object
    if (err) {
        result = err;
    }
    else if (result && result.result) {
        result = result.result;
    }
    if (result == null) {
        return;
    }
    // Do we have a top level error stop processing and return
    if (result.ok === 0 && bulkResult.ok === 1) {
        bulkResult.ok = 0;
        const writeError = {
            index: 0,
            code: result.code || 0,
            errmsg: result.message,
            errInfo: result.errInfo,
            op: batch.operations[0]
        };
        bulkResult.writeErrors.push(new WriteError(writeError));
        return;
    }
    else if (result.ok === 0 && bulkResult.ok === 0) {
        return;
    }
    // If we have an insert Batch type
    if (isInsertBatch(batch) && result.n) {
        bulkResult.nInserted = bulkResult.nInserted + result.n;
    }
    // If we have an insert Batch type
    if (isDeleteBatch(batch) && result.n) {
        bulkResult.nRemoved = bulkResult.nRemoved + result.n;
    }
    let nUpserted = 0;
    // We have an array of upserted values, we need to rewrite the indexes
    if (Array.isArray(result.upserted)) {
        nUpserted = result.upserted.length;
        for (let i = 0; i < result.upserted.length; i++) {
            bulkResult.upserted.push({
                index: result.upserted[i].index + batch.originalZeroIndex,
                _id: result.upserted[i]._id
            });
        }
    }
    else if (result.upserted) {
        nUpserted = 1;
        bulkResult.upserted.push({
            index: batch.originalZeroIndex,
            _id: result.upserted
        });
    }
    // If we have an update Batch type
    if (isUpdateBatch(batch) && result.n) {
        const nModified = result.nModified;
        bulkResult.nUpserted = bulkResult.nUpserted + nUpserted;
        bulkResult.nMatched = bulkResult.nMatched + (result.n - nUpserted);
        if (typeof nModified === 'number') {
            bulkResult.nModified = bulkResult.nModified + nModified;
        }
        else {
            bulkResult.nModified = 0;
        }
    }
    if (Array.isArray(result.writeErrors)) {
        for (let i = 0; i < result.writeErrors.length; i++) {
            const writeError = {
                index: batch.originalIndexes[result.writeErrors[i].index],
                code: result.writeErrors[i].code,
                errmsg: result.writeErrors[i].errmsg,
                errInfo: result.writeErrors[i].errInfo,
                op: batch.operations[result.writeErrors[i].index]
            };
            bulkResult.writeErrors.push(new WriteError(writeError));
        }
    }
    if (result.writeConcernError) {
        bulkResult.writeConcernErrors.push(new WriteConcernError(result.writeConcernError));
    }
}
async function executeCommands(bulkOperation, options) {
    if (bulkOperation.s.batches.length === 0) {
        return new BulkWriteResult(bulkOperation.s.bulkResult, bulkOperation.isOrdered);
    }
    for (const batch of bulkOperation.s.batches) {
        const finalOptions = (0, utils_1.resolveOptions)(bulkOperation, {
            ...options,
            ordered: bulkOperation.isOrdered
        });
        if (finalOptions.bypassDocumentValidation !== true) {
            delete finalOptions.bypassDocumentValidation;
        }
        // Is the bypassDocumentValidation options specific
        if (bulkOperation.s.bypassDocumentValidation === true) {
            finalOptions.bypassDocumentValidation = true;
        }
        // Is the checkKeys option disabled
        if (bulkOperation.s.checkKeys === false) {
            finalOptions.checkKeys = false;
        }
        if (finalOptions.retryWrites) {
            if (isUpdateBatch(batch)) {
                finalOptions.retryWrites =
                    finalOptions.retryWrites && !batch.operations.some(op => op.multi);
            }
            if (isDeleteBatch(batch)) {
                finalOptions.retryWrites =
                    finalOptions.retryWrites && !batch.operations.some(op => op.limit === 0);
            }
        }
        const operation = isInsertBatch(batch)
            ? new insert_1.InsertOperation(bulkOperation.s.namespace, batch.operations, finalOptions)
            : isUpdateBatch(batch)
                ? new update_1.UpdateOperation(bulkOperation.s.namespace, batch.operations, finalOptions)
                : isDeleteBatch(batch)
                    ? new delete_1.DeleteOperation(bulkOperation.s.namespace, batch.operations, finalOptions)
                    : null;
        if (operation == null)
            throw new error_1.MongoRuntimeError(`Unknown batchType: ${batch.batchType}`);
        let thrownError = null;
        let result;
        try {
            result = await (0, execute_operation_1.executeOperation)(bulkOperation.s.collection.client, operation, finalOptions.timeoutContext);
        }
        catch (error) {
            thrownError = error;
        }
        if (thrownError != null) {
            if (thrownError instanceof error_1.MongoWriteConcernError) {
                mergeBatchResults(batch, bulkOperation.s.bulkResult, thrownError, result);
                const writeResult = new BulkWriteResult(bulkOperation.s.bulkResult, bulkOperation.isOrdered);
                throw new MongoBulkWriteError({
                    message: thrownError.result.writeConcernError.errmsg,
                    code: thrownError.result.writeConcernError.code
                }, writeResult);
            }
            else {
                // Error is a driver related error not a bulk op error, return early
                throw new MongoBulkWriteError(thrownError, new BulkWriteResult(bulkOperation.s.bulkResult, bulkOperation.isOrdered));
            }
        }
        mergeBatchResults(batch, bulkOperation.s.bulkResult, thrownError, result);
        const writeResult = new BulkWriteResult(bulkOperation.s.bulkResult, bulkOperation.isOrdered);
        bulkOperation.handleWriteError(writeResult);
    }
    bulkOperation.s.batches.length = 0;
    const writeResult = new BulkWriteResult(bulkOperation.s.bulkResult, bulkOperation.isOrdered);
    bulkOperation.handleWriteError(writeResult);
    return writeResult;
}
/**
 * An error indicating an unsuccessful Bulk Write
 * @public
 * @category Error
 */
class MongoBulkWriteError extends error_1.MongoServerError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(error, result) {
        super(error);
        this.writeErrors = [];
        if (error instanceof WriteConcernError)
            this.err = error;
        else if (!(error instanceof Error)) {
            this.message = error.message;
            this.code = error.code;
            this.writeErrors = error.writeErrors ?? [];
        }
        this.result = result;
        Object.assign(this, error);
    }
    get name() {
        return 'MongoBulkWriteError';
    }
    /** Number of documents inserted. */
    get insertedCount() {
        return this.result.insertedCount;
    }
    /** Number of documents matched for update. */
    get matchedCount() {
        return this.result.matchedCount;
    }
    /** Number of documents modified. */
    get modifiedCount() {
        return this.result.modifiedCount;
    }
    /** Number of documents deleted. */
    get deletedCount() {
        return this.result.deletedCount;
    }
    /** Number of documents upserted. */
    get upsertedCount() {
        return this.result.upsertedCount;
    }
    /** Inserted document generated Id's, hash key is the index of the originating operation */
    get insertedIds() {
        return this.result.insertedIds;
    }
    /** Upserted document generated Id's, hash key is the index of the originating operation */
    get upsertedIds() {
        return this.result.upsertedIds;
    }
}
exports.MongoBulkWriteError = MongoBulkWriteError;
/**
 * A builder object that is returned from {@link BulkOperationBase#find}.
 * Is used to build a write operation that involves a query filter.
 *
 * @public
 */
class FindOperators {
    /**
     * Creates a new FindOperators object.
     * @internal
     */
    constructor(bulkOperation) {
        this.bulkOperation = bulkOperation;
    }
    /** Add a multiple update operation to the bulk operation */
    update(updateDocument) {
        const currentOp = buildCurrentOp(this.bulkOperation);
        return this.bulkOperation.addToOperationsList(exports.BatchType.UPDATE, (0, update_1.makeUpdateStatement)(currentOp.selector, updateDocument, {
            ...currentOp,
            multi: true
        }));
    }
    /** Add a single update operation to the bulk operation */
    updateOne(updateDocument) {
        if (!(0, utils_1.hasAtomicOperators)(updateDocument, this.bulkOperation.bsonOptions)) {
            throw new error_1.MongoInvalidArgumentError('Update document requires atomic operators');
        }
        const currentOp = buildCurrentOp(this.bulkOperation);
        return this.bulkOperation.addToOperationsList(exports.BatchType.UPDATE, (0, update_1.makeUpdateStatement)(currentOp.selector, updateDocument, { ...currentOp, multi: false }));
    }
    /** Add a replace one operation to the bulk operation */
    replaceOne(replacement) {
        if ((0, utils_1.hasAtomicOperators)(replacement)) {
            throw new error_1.MongoInvalidArgumentError('Replacement document must not use atomic operators');
        }
        const currentOp = buildCurrentOp(this.bulkOperation);
        return this.bulkOperation.addToOperationsList(exports.BatchType.UPDATE, (0, update_1.makeUpdateStatement)(currentOp.selector, replacement, { ...currentOp, multi: false }));
    }
    /** Add a delete one operation to the bulk operation */
    deleteOne() {
        const currentOp = buildCurrentOp(this.bulkOperation);
        return this.bulkOperation.addToOperationsList(exports.BatchType.DELETE, (0, delete_1.makeDeleteStatement)(currentOp.selector, { ...currentOp, limit: 1 }));
    }
    /** Add a delete many operation to the bulk operation */
    delete() {
        const currentOp = buildCurrentOp(this.bulkOperation);
        return this.bulkOperation.addToOperationsList(exports.BatchType.DELETE, (0, delete_1.makeDeleteStatement)(currentOp.selector, { ...currentOp, limit: 0 }));
    }
    /** Upsert modifier for update bulk operation, noting that this operation is an upsert. */
    upsert() {
        if (!this.bulkOperation.s.currentOp) {
            this.bulkOperation.s.currentOp = {};
        }
        this.bulkOperation.s.currentOp.upsert = true;
        return this;
    }
    /** Specifies the collation for the query condition. */
    collation(collation) {
        if (!this.bulkOperation.s.currentOp) {
            this.bulkOperation.s.currentOp = {};
        }
        this.bulkOperation.s.currentOp.collation = collation;
        return this;
    }
    /** Specifies arrayFilters for UpdateOne or UpdateMany bulk operations. */
    arrayFilters(arrayFilters) {
        if (!this.bulkOperation.s.currentOp) {
            this.bulkOperation.s.currentOp = {};
        }
        this.bulkOperation.s.currentOp.arrayFilters = arrayFilters;
        return this;
    }
    /** Specifies hint for the bulk operation. */
    hint(hint) {
        if (!this.bulkOperation.s.currentOp) {
            this.bulkOperation.s.currentOp = {};
        }
        this.bulkOperation.s.currentOp.hint = hint;
        return this;
    }
}
exports.FindOperators = FindOperators;
/** @public */
class BulkOperationBase {
    /**
     * Create a new OrderedBulkOperation or UnorderedBulkOperation instance
     * @internal
     */
    constructor(collection, options, isOrdered) {
        this.collection = collection;
        // determine whether bulkOperation is ordered or unordered
        this.isOrdered = isOrdered;
        const topology = (0, utils_1.getTopology)(collection);
        options = options == null ? {} : options;
        // TODO Bring from driver information in hello
        // Get the namespace for the write operations
        const namespace = collection.s.namespace;
        // Used to mark operation as executed
        const executed = false;
        // Current item
        const currentOp = undefined;
        // Set max byte size
        const hello = topology.lastHello();
        // If we have autoEncryption on, batch-splitting must be done on 2mb chunks, but single documents
        // over 2mb are still allowed
        const usingAutoEncryption = !!(topology.s.options && topology.s.options.autoEncrypter);
        const maxBsonObjectSize = hello && hello.maxBsonObjectSize ? hello.maxBsonObjectSize : 1024 * 1024 * 16;
        const maxBatchSizeBytes = usingAutoEncryption ? 1024 * 1024 * 2 : maxBsonObjectSize;
        const maxWriteBatchSize = hello && hello.maxWriteBatchSize ? hello.maxWriteBatchSize : 1000;
        // Calculates the largest possible size of an Array key, represented as a BSON string
        // element. This calculation:
        //     1 byte for BSON type
        //     # of bytes = length of (string representation of (maxWriteBatchSize - 1))
        //   + 1 bytes for null terminator
        const maxKeySize = (maxWriteBatchSize - 1).toString(10).length + 2;
        // Final options for retryable writes
        let finalOptions = Object.assign({}, options);
        finalOptions = (0, utils_1.applyRetryableWrites)(finalOptions, collection.db);
        // Final results
        const bulkResult = {
            ok: 1,
            writeErrors: [],
            writeConcernErrors: [],
            insertedIds: [],
            nInserted: 0,
            nUpserted: 0,
            nMatched: 0,
            nModified: 0,
            nRemoved: 0,
            upserted: []
        };
        // Internal state
        this.s = {
            // Final result
            bulkResult,
            // Current batch state
            currentBatch: undefined,
            currentIndex: 0,
            // ordered specific
            currentBatchSize: 0,
            currentBatchSizeBytes: 0,
            // unordered specific
            currentInsertBatch: undefined,
            currentUpdateBatch: undefined,
            currentRemoveBatch: undefined,
            batches: [],
            // Write concern
            writeConcern: write_concern_1.WriteConcern.fromOptions(options),
            // Max batch size options
            maxBsonObjectSize,
            maxBatchSizeBytes,
            maxWriteBatchSize,
            maxKeySize,
            // Namespace
            namespace,
            // Topology
            topology,
            // Options
            options: finalOptions,
            // BSON options
            bsonOptions: (0, bson_1.resolveBSONOptions)(options),
            // Current operation
            currentOp,
            // Executed
            executed,
            // Collection
            collection,
            // Fundamental error
            err: undefined,
            // check keys
            checkKeys: typeof options.checkKeys === 'boolean' ? options.checkKeys : false
        };
        // bypass Validation
        if (options.bypassDocumentValidation === true) {
            this.s.bypassDocumentValidation = true;
        }
    }
    /**
     * Add a single insert document to the bulk operation
     *
     * @example
     * ```ts
     * const bulkOp = collection.initializeOrderedBulkOp();
     *
     * // Adds three inserts to the bulkOp.
     * bulkOp
     *   .insert({ a: 1 })
     *   .insert({ b: 2 })
     *   .insert({ c: 3 });
     * await bulkOp.execute();
     * ```
     */
    insert(document) {
        (0, utils_1.maybeAddIdToDocuments)(this.collection, document, {
            forceServerObjectId: this.shouldForceServerObjectId()
        });
        return this.addToOperationsList(exports.BatchType.INSERT, document);
    }
    /**
     * Builds a find operation for an update/updateOne/delete/deleteOne/replaceOne.
     * Returns a builder object used to complete the definition of the operation.
     *
     * @example
     * ```ts
     * const bulkOp = collection.initializeOrderedBulkOp();
     *
     * // Add an updateOne to the bulkOp
     * bulkOp.find({ a: 1 }).updateOne({ $set: { b: 2 } });
     *
     * // Add an updateMany to the bulkOp
     * bulkOp.find({ c: 3 }).update({ $set: { d: 4 } });
     *
     * // Add an upsert
     * bulkOp.find({ e: 5 }).upsert().updateOne({ $set: { f: 6 } });
     *
     * // Add a deletion
     * bulkOp.find({ g: 7 }).deleteOne();
     *
     * // Add a multi deletion
     * bulkOp.find({ h: 8 }).delete();
     *
     * // Add a replaceOne
     * bulkOp.find({ i: 9 }).replaceOne({writeConcern: { j: 10 }});
     *
     * // Update using a pipeline (requires Mongodb 4.2 or higher)
     * bulk.find({ k: 11, y: { $exists: true }, z: { $exists: true } }).updateOne([
     *   { $set: { total: { $sum: [ '$y', '$z' ] } } }
     * ]);
     *
     * // All of the ops will now be executed
     * await bulkOp.execute();
     * ```
     */
    find(selector) {
        if (!selector) {
            throw new error_1.MongoInvalidArgumentError('Bulk find operation must specify a selector');
        }
        // Save a current selector
        this.s.currentOp = {
            selector: selector
        };
        return new FindOperators(this);
    }
    /** Specifies a raw operation to perform in the bulk write. */
    raw(op) {
        if (op == null || typeof op !== 'object') {
            throw new error_1.MongoInvalidArgumentError('Operation must be an object with an operation key');
        }
        if ('insertOne' in op) {
            const forceServerObjectId = this.shouldForceServerObjectId();
            const document = op.insertOne && op.insertOne.document == null
                ? // TODO(NODE-6003): remove support for omitting the `documents` subdocument in bulk inserts
                    op.insertOne
                : op.insertOne.document;
            (0, utils_1.maybeAddIdToDocuments)(this.collection, document, { forceServerObjectId });
            return this.addToOperationsList(exports.BatchType.INSERT, document);
        }
        if ('replaceOne' in op || 'updateOne' in op || 'updateMany' in op) {
            if ('replaceOne' in op) {
                if ('q' in op.replaceOne) {
                    throw new error_1.MongoInvalidArgumentError('Raw operations are not allowed');
                }
                const updateStatement = (0, update_1.makeUpdateStatement)(op.replaceOne.filter, op.replaceOne.replacement, { ...op.replaceOne, multi: false });
                if ((0, utils_1.hasAtomicOperators)(updateStatement.u)) {
                    throw new error_1.MongoInvalidArgumentError('Replacement document must not use atomic operators');
                }
                return this.addToOperationsList(exports.BatchType.UPDATE, updateStatement);
            }
            if ('updateOne' in op) {
                if ('q' in op.updateOne) {
                    throw new error_1.MongoInvalidArgumentError('Raw operations are not allowed');
                }
                const updateStatement = (0, update_1.makeUpdateStatement)(op.updateOne.filter, op.updateOne.update, {
                    ...op.updateOne,
                    multi: false
                });
                if (!(0, utils_1.hasAtomicOperators)(updateStatement.u, this.bsonOptions)) {
                    throw new error_1.MongoInvalidArgumentError('Update document requires atomic operators');
                }
                return this.addToOperationsList(exports.BatchType.UPDATE, updateStatement);
            }
            if ('updateMany' in op) {
                if ('q' in op.updateMany) {
                    throw new error_1.MongoInvalidArgumentError('Raw operations are not allowed');
                }
                const updateStatement = (0, update_1.makeUpdateStatement)(op.updateMany.filter, op.updateMany.update, {
                    ...op.updateMany,
                    multi: true
                });
                if (!(0, utils_1.hasAtomicOperators)(updateStatement.u, this.bsonOptions)) {
                    throw new error_1.MongoInvalidArgumentError('Update document requires atomic operators');
                }
                return this.addToOperationsList(exports.BatchType.UPDATE, updateStatement);
            }
        }
        if ('deleteOne' in op) {
            if ('q' in op.deleteOne) {
                throw new error_1.MongoInvalidArgumentError('Raw operations are not allowed');
            }
            return this.addToOperationsList(exports.BatchType.DELETE, (0, delete_1.makeDeleteStatement)(op.deleteOne.filter, { ...op.deleteOne, limit: 1 }));
        }
        if ('deleteMany' in op) {
            if ('q' in op.deleteMany) {
                throw new error_1.MongoInvalidArgumentError('Raw operations are not allowed');
            }
            return this.addToOperationsList(exports.BatchType.DELETE, (0, delete_1.makeDeleteStatement)(op.deleteMany.filter, { ...op.deleteMany, limit: 0 }));
        }
        // otherwise an unknown operation was provided
        throw new error_1.MongoInvalidArgumentError('bulkWrite only supports insertOne, updateOne, updateMany, deleteOne, deleteMany');
    }
    get length() {
        return this.s.currentIndex;
    }
    get bsonOptions() {
        return this.s.bsonOptions;
    }
    get writeConcern() {
        return this.s.writeConcern;
    }
    get batches() {
        const batches = [...this.s.batches];
        if (this.isOrdered) {
            if (this.s.currentBatch)
                batches.push(this.s.currentBatch);
        }
        else {
            if (this.s.currentInsertBatch)
                batches.push(this.s.currentInsertBatch);
            if (this.s.currentUpdateBatch)
                batches.push(this.s.currentUpdateBatch);
            if (this.s.currentRemoveBatch)
                batches.push(this.s.currentRemoveBatch);
        }
        return batches;
    }
    async execute(options = {}) {
        if (this.s.executed) {
            throw new error_1.MongoBatchReExecutionError();
        }
        const writeConcern = write_concern_1.WriteConcern.fromOptions(options);
        if (writeConcern) {
            this.s.writeConcern = writeConcern;
        }
        // If we have current batch
        if (this.isOrdered) {
            if (this.s.currentBatch)
                this.s.batches.push(this.s.currentBatch);
        }
        else {
            if (this.s.currentInsertBatch)
                this.s.batches.push(this.s.currentInsertBatch);
            if (this.s.currentUpdateBatch)
                this.s.batches.push(this.s.currentUpdateBatch);
            if (this.s.currentRemoveBatch)
                this.s.batches.push(this.s.currentRemoveBatch);
        }
        // If we have no operations in the bulk raise an error
        if (this.s.batches.length === 0) {
            throw new error_1.MongoInvalidArgumentError('Invalid BulkOperation, Batch cannot be empty');
        }
        this.s.executed = true;
        const finalOptions = (0, utils_1.resolveOptions)(this.collection, { ...this.s.options, ...options });
        // if there is no timeoutContext provided, create a timeoutContext and use it for
        // all batches in the bulk operation
        finalOptions.timeoutContext ??= timeout_1.TimeoutContext.create({
            session: finalOptions.session,
            timeoutMS: finalOptions.timeoutMS,
            serverSelectionTimeoutMS: this.collection.client.s.options.serverSelectionTimeoutMS,
            waitQueueTimeoutMS: this.collection.client.s.options.waitQueueTimeoutMS
        });
        if (finalOptions.session == null) {
            // if there is not an explicit session provided to `execute()`, create
            // an implicit session and use that for all batches in the bulk operation
            return await this.collection.client.withSession({ explicit: false }, async (session) => {
                return await executeCommands(this, { ...finalOptions, session });
            });
        }
        return await executeCommands(this, { ...finalOptions });
    }
    /**
     * Handles the write error before executing commands
     * @internal
     */
    handleWriteError(writeResult) {
        if (this.s.bulkResult.writeErrors.length > 0) {
            const msg = this.s.bulkResult.writeErrors[0].errmsg
                ? this.s.bulkResult.writeErrors[0].errmsg
                : 'write operation failed';
            throw new MongoBulkWriteError({
                message: msg,
                code: this.s.bulkResult.writeErrors[0].code,
                writeErrors: this.s.bulkResult.writeErrors
            }, writeResult);
        }
        const writeConcernError = writeResult.getWriteConcernError();
        if (writeConcernError) {
            throw new MongoBulkWriteError(writeConcernError, writeResult);
        }
    }
    shouldForceServerObjectId() {
        return (this.s.options.forceServerObjectId === true ||
            this.s.collection.db.options?.forceServerObjectId === true);
    }
}
exports.BulkOperationBase = BulkOperationBase;
function isInsertBatch(batch) {
    return batch.batchType === exports.BatchType.INSERT;
}
function isUpdateBatch(batch) {
    return batch.batchType === exports.BatchType.UPDATE;
}
function isDeleteBatch(batch) {
    return batch.batchType === exports.BatchType.DELETE;
}
function buildCurrentOp(bulkOp) {
    let { currentOp } = bulkOp.s;
    bulkOp.s.currentOp = undefined;
    if (!currentOp)
        currentOp = {};
    return currentOp;
}
//# sourceMappingURL=common.js.map