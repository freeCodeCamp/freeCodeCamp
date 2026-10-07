"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientBulkWriteCursorResponse = exports.ExplainedCursorResponse = exports.CursorResponse = exports.MongoDBResponse = void 0;
exports.isErrorResponse = isErrorResponse;
const bson_1 = require("../../bson");
const error_1 = require("../../error");
const utils_1 = require("../../utils");
const document_1 = require("./on_demand/document");
const BSONElementOffset = {
    type: 0,
    nameOffset: 1,
    nameLength: 2,
    offset: 3,
    length: 4
};
/**
 * Accepts a BSON payload and checks for na "ok: 0" element.
 * This utility is intended to prevent calling response class constructors
 * that expect the result to be a success and demand certain properties to exist.
 *
 * For example, a cursor response always expects a cursor embedded document.
 * In order to write the class such that the properties reflect that assertion (non-null)
 * we cannot invoke the subclass constructor if the BSON represents an error.
 *
 * @param bytes - BSON document returned from the server
 */
function isErrorResponse(bson, elements) {
    for (let eIdx = 0; eIdx < elements.length; eIdx++) {
        const element = elements[eIdx];
        if (element[BSONElementOffset.nameLength] === 2) {
            const nameOffset = element[BSONElementOffset.nameOffset];
            // 111 == "o", 107 == "k"
            if (bson[nameOffset] === 111 && bson[nameOffset + 1] === 107) {
                const valueOffset = element[BSONElementOffset.offset];
                const valueLength = element[BSONElementOffset.length];
                // If any byte in the length of the ok number (works for any type) is non zero,
                // then it is considered "ok: 1"
                for (let i = valueOffset; i < valueOffset + valueLength; i++) {
                    if (bson[i] !== 0x00)
                        return false;
                }
                return true;
            }
        }
    }
    return true;
}
/** @internal */
class MongoDBResponse extends document_1.OnDemandDocument {
    get(name, as, required) {
        try {
            return super.get(name, as, required);
        }
        catch (cause) {
            throw new error_1.MongoUnexpectedServerResponseError(cause.message, { cause });
        }
    }
    static is(value) {
        return value instanceof MongoDBResponse;
    }
    static make(bson) {
        const elements = (0, bson_1.parseToElementsToArray)(bson, 0);
        const isError = isErrorResponse(bson, elements);
        return isError
            ? new MongoDBResponse(bson, 0, false, elements)
            : new this(bson, 0, false, elements);
    }
    /**
     * Returns true iff:
     * - ok is 0 and the top-level code === 50
     * - ok is 1 and the writeErrors array contains a code === 50
     * - ok is 1 and the writeConcern object contains a code === 50
     */
    get isMaxTimeExpiredError() {
        // {ok: 0, code: 50 ... }
        const isTopLevel = this.ok === 0 && this.code === error_1.MONGODB_ERROR_CODES.MaxTimeMSExpired;
        if (isTopLevel)
            return true;
        if (this.ok === 0)
            return false;
        // {ok: 1, writeConcernError: {code: 50 ... }}
        const isWriteConcern = this.get('writeConcernError', bson_1.BSONType.object)?.getNumber('code') ===
            error_1.MONGODB_ERROR_CODES.MaxTimeMSExpired;
        if (isWriteConcern)
            return true;
        const writeErrors = this.get('writeErrors', bson_1.BSONType.array);
        if (writeErrors?.size()) {
            for (let i = 0; i < writeErrors.size(); i++) {
                const isWriteError = writeErrors.get(i, bson_1.BSONType.object)?.getNumber('code') ===
                    error_1.MONGODB_ERROR_CODES.MaxTimeMSExpired;
                // {ok: 1, writeErrors: [{code: 50 ... }]}
                if (isWriteError)
                    return true;
            }
        }
        return false;
    }
    /**
     * Drivers can safely assume that the `recoveryToken` field is always a BSON document but drivers MUST NOT modify the
     * contents of the document.
     */
    get recoveryToken() {
        return (this.get('recoveryToken', bson_1.BSONType.object)?.toObject({
            promoteValues: false,
            promoteLongs: false,
            promoteBuffers: false,
            validation: { utf8: true }
        }) ?? null);
    }
    /**
     * The server creates a cursor in response to a snapshot find/aggregate command and reports atClusterTime within the cursor field in the response.
     * For the distinct command the server adds a top-level atClusterTime field to the response.
     * The atClusterTime field represents the timestamp of the read and is guaranteed to be majority committed.
     */
    get atClusterTime() {
        return (this.get('cursor', bson_1.BSONType.object)?.get('atClusterTime', bson_1.BSONType.timestamp) ??
            this.get('atClusterTime', bson_1.BSONType.timestamp));
    }
    get operationTime() {
        return this.get('operationTime', bson_1.BSONType.timestamp);
    }
    /** Normalizes whatever BSON value is "ok" to a JS number 1 or 0. */
    get ok() {
        return this.getNumber('ok') ? 1 : 0;
    }
    get $err() {
        return this.get('$err', bson_1.BSONType.string);
    }
    get errmsg() {
        return this.get('errmsg', bson_1.BSONType.string);
    }
    get code() {
        return this.getNumber('code');
    }
    get $clusterTime() {
        if (!('clusterTime' in this)) {
            const clusterTimeDoc = this.get('$clusterTime', bson_1.BSONType.object);
            if (clusterTimeDoc == null) {
                this.clusterTime = null;
                return null;
            }
            const clusterTime = clusterTimeDoc.get('clusterTime', bson_1.BSONType.timestamp, true);
            const signature = clusterTimeDoc.get('signature', bson_1.BSONType.object)?.toObject();
            // @ts-expect-error: `signature` is incorrectly typed. It is public API.
            this.clusterTime = { clusterTime, signature };
        }
        return this.clusterTime ?? null;
    }
    toObject(options) {
        const exactBSONOptions = {
            ...(0, bson_1.pluckBSONSerializeOptions)(options ?? {}),
            validation: (0, bson_1.parseUtf8ValidationOption)(options)
        };
        return super.toObject(exactBSONOptions);
    }
}
exports.MongoDBResponse = MongoDBResponse;
// {ok:1}
MongoDBResponse.empty = new MongoDBResponse(new Uint8Array([13, 0, 0, 0, 16, 111, 107, 0, 1, 0, 0, 0, 0]));
/** @internal */
class CursorResponse extends MongoDBResponse {
    constructor() {
        super(...arguments);
        this._batch = null;
        this.iterated = 0;
        this._encryptedBatch = null;
    }
    /**
     * This supports a feature of the FindCursor.
     * It is an optimization to avoid an extra getMore when the limit has been reached
     */
    static get emptyGetMore() {
        return new CursorResponse((0, bson_1.serialize)({ ok: 1, cursor: { id: 0n, nextBatch: [] } }));
    }
    static is(value) {
        return value instanceof CursorResponse || value === CursorResponse.emptyGetMore;
    }
    get cursor() {
        return this.get('cursor', bson_1.BSONType.object, true);
    }
    get id() {
        try {
            return bson_1.Long.fromBigInt(this.cursor.get('id', bson_1.BSONType.long, true));
        }
        catch (cause) {
            throw new error_1.MongoUnexpectedServerResponseError(cause.message, { cause });
        }
    }
    get ns() {
        const namespace = this.cursor.get('ns', bson_1.BSONType.string);
        if (namespace != null)
            return (0, utils_1.ns)(namespace);
        return null;
    }
    get length() {
        return Math.max(this.batchSize - this.iterated, 0);
    }
    get encryptedBatch() {
        if (this.encryptedResponse == null)
            return null;
        if (this._encryptedBatch != null)
            return this._encryptedBatch;
        const cursor = this.encryptedResponse?.get('cursor', bson_1.BSONType.object);
        if (cursor?.has('firstBatch'))
            this._encryptedBatch = cursor.get('firstBatch', bson_1.BSONType.array, true);
        else if (cursor?.has('nextBatch'))
            this._encryptedBatch = cursor.get('nextBatch', bson_1.BSONType.array, true);
        else
            throw new error_1.MongoUnexpectedServerResponseError('Cursor document did not contain a batch');
        return this._encryptedBatch;
    }
    get batch() {
        if (this._batch != null)
            return this._batch;
        const cursor = this.cursor;
        if (cursor.has('firstBatch'))
            this._batch = cursor.get('firstBatch', bson_1.BSONType.array, true);
        else if (cursor.has('nextBatch'))
            this._batch = cursor.get('nextBatch', bson_1.BSONType.array, true);
        else
            throw new error_1.MongoUnexpectedServerResponseError('Cursor document did not contain a batch');
        return this._batch;
    }
    get batchSize() {
        return this.batch?.size();
    }
    get postBatchResumeToken() {
        return (this.cursor.get('postBatchResumeToken', bson_1.BSONType.object)?.toObject({
            promoteValues: false,
            promoteLongs: false,
            promoteBuffers: false,
            validation: { utf8: true }
        }) ?? null);
    }
    shift(options) {
        if (this.iterated >= this.batchSize) {
            return null;
        }
        const result = this.batch.get(this.iterated, bson_1.BSONType.object, true) ?? null;
        const encryptedResult = this.encryptedBatch?.get(this.iterated, bson_1.BSONType.object, true) ?? null;
        this.iterated += 1;
        if (options?.raw) {
            return result.toBytes();
        }
        else {
            const object = result.toObject(options);
            if (encryptedResult) {
                (0, utils_1.decorateDecryptionResult)(object, encryptedResult.toObject(options), true);
            }
            return object;
        }
    }
    clear() {
        this.iterated = this.batchSize;
    }
}
exports.CursorResponse = CursorResponse;
/**
 * Explain responses have nothing to do with cursor responses
 * This class serves to temporarily avoid refactoring how cursors handle
 * explain responses which is to detect that the response is not cursor-like and return the explain
 * result as the "first and only" document in the "batch" and end the "cursor"
 */
class ExplainedCursorResponse extends CursorResponse {
    constructor() {
        super(...arguments);
        this.isExplain = true;
        this._length = 1;
    }
    get id() {
        return bson_1.Long.fromBigInt(0n);
    }
    get batchSize() {
        return 0;
    }
    get ns() {
        return null;
    }
    get length() {
        return this._length;
    }
    shift(options) {
        if (this._length === 0)
            return null;
        this._length -= 1;
        return this.toObject(options);
    }
}
exports.ExplainedCursorResponse = ExplainedCursorResponse;
/**
 * Client bulk writes have some extra metadata at the top level that needs to be
 * included in the result returned to the user.
 */
class ClientBulkWriteCursorResponse extends CursorResponse {
    get insertedCount() {
        return this.get('nInserted', bson_1.BSONType.int, true);
    }
    get upsertedCount() {
        return this.get('nUpserted', bson_1.BSONType.int, true);
    }
    get matchedCount() {
        return this.get('nMatched', bson_1.BSONType.int, true);
    }
    get modifiedCount() {
        return this.get('nModified', bson_1.BSONType.int, true);
    }
    get deletedCount() {
        return this.get('nDeleted', bson_1.BSONType.int, true);
    }
    get writeConcernError() {
        return this.get('writeConcernError', bson_1.BSONType.object, false);
    }
}
exports.ClientBulkWriteCursorResponse = ClientBulkWriteCursorResponse;
//# sourceMappingURL=responses.js.map