import {
  type BSONElement,
  type BSONSerializeOptions,
  BSONType,
  type DeserializeOptions,
  type Document,
  Long,
  parseToElementsToArray,
  parseUtf8ValidationOption,
  pluckBSONSerializeOptions,
  serialize,
  type Timestamp
} from '../../bson';
import { MONGODB_ERROR_CODES, MongoUnexpectedServerResponseError } from '../../error';
import { type ClusterTime } from '../../sdam/common';
import { decorateDecryptionResult, ns } from '../../utils';
import {
  type JSTypeOf,
  OnDemandDocument,
  type OnDemandDocumentDeserializeOptions
} from './on_demand/document';

const BSONElementOffset = {
  type: 0,
  nameOffset: 1,
  nameLength: 2,
  offset: 3,
  length: 4
} as const;

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
export function isErrorResponse(bson: Uint8Array, elements: BSONElement[]): boolean {
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
          if (bson[i] !== 0x00) return false;
        }

        return true;
      }
    }
  }

  return true;
}

/** @internal */
export type MongoDBResponseConstructor = {
  new (bson: Uint8Array, offset?: number, isArray?: boolean): MongoDBResponse;
  make(bson: Uint8Array): MongoDBResponse;
};

/** @internal */
export class MongoDBResponse extends OnDemandDocument {
  // Wrap error thrown from BSON
  public override get<const T extends keyof JSTypeOf>(
    name: string | number,
    as: T,
    required?: false
  ): JSTypeOf[T] | null;
  public override get<const T extends keyof JSTypeOf>(
    name: string | number,
    as: T,
    required: true
  ): JSTypeOf[T];
  public override get<const T extends keyof JSTypeOf>(
    name: string | number,
    as: T,
    required?: boolean
  ): JSTypeOf[T] | null {
    try {
      return super.get(name, as, required);
    } catch (cause) {
      throw new MongoUnexpectedServerResponseError(cause.message, { cause });
    }
  }

  static is(value: unknown): value is MongoDBResponse {
    return value instanceof MongoDBResponse;
  }

  static make(bson: Uint8Array) {
    const elements = parseToElementsToArray(bson, 0);
    const isError = isErrorResponse(bson, elements);
    return isError
      ? new MongoDBResponse(bson, 0, false, elements)
      : new this(bson, 0, false, elements);
  }

  // {ok:1}
  static empty = new MongoDBResponse(new Uint8Array([13, 0, 0, 0, 16, 111, 107, 0, 1, 0, 0, 0, 0]));

  /**
   * Returns true iff:
   * - ok is 0 and the top-level code === 50
   * - ok is 1 and the writeErrors array contains a code === 50
   * - ok is 1 and the writeConcern object contains a code === 50
   */
  get isMaxTimeExpiredError() {
    // {ok: 0, code: 50 ... }
    const isTopLevel = this.ok === 0 && this.code === MONGODB_ERROR_CODES.MaxTimeMSExpired;
    if (isTopLevel) return true;

    if (this.ok === 0) return false;

    // {ok: 1, writeConcernError: {code: 50 ... }}
    const isWriteConcern =
      this.get('writeConcernError', BSONType.object)?.getNumber('code') ===
      MONGODB_ERROR_CODES.MaxTimeMSExpired;
    if (isWriteConcern) return true;

    const writeErrors = this.get('writeErrors', BSONType.array);
    if (writeErrors?.size()) {
      for (let i = 0; i < writeErrors.size(); i++) {
        const isWriteError =
          writeErrors.get(i, BSONType.object)?.getNumber('code') ===
          MONGODB_ERROR_CODES.MaxTimeMSExpired;

        // {ok: 1, writeErrors: [{code: 50 ... }]}
        if (isWriteError) return true;
      }
    }

    return false;
  }

  /**
   * Drivers can safely assume that the `recoveryToken` field is always a BSON document but drivers MUST NOT modify the
   * contents of the document.
   */
  get recoveryToken(): Document | null {
    return (
      this.get('recoveryToken', BSONType.object)?.toObject({
        promoteValues: false,
        promoteLongs: false,
        promoteBuffers: false,
        validation: { utf8: true }
      }) ?? null
    );
  }

  /**
   * The server creates a cursor in response to a snapshot find/aggregate command and reports atClusterTime within the cursor field in the response.
   * For the distinct command the server adds a top-level atClusterTime field to the response.
   * The atClusterTime field represents the timestamp of the read and is guaranteed to be majority committed.
   */
  public get atClusterTime(): Timestamp | null {
    return (
      this.get('cursor', BSONType.object)?.get('atClusterTime', BSONType.timestamp) ??
      this.get('atClusterTime', BSONType.timestamp)
    );
  }

  public get operationTime(): Timestamp | null {
    return this.get('operationTime', BSONType.timestamp);
  }

  /** Normalizes whatever BSON value is "ok" to a JS number 1 or 0. */
  public get ok(): 0 | 1 {
    return this.getNumber('ok') ? 1 : 0;
  }

  public get $err(): string | null {
    return this.get('$err', BSONType.string);
  }

  public get errmsg(): string | null {
    return this.get('errmsg', BSONType.string);
  }

  public get code(): number | null {
    return this.getNumber('code');
  }

  private clusterTime?: ClusterTime | null;
  public get $clusterTime(): ClusterTime | null {
    if (!('clusterTime' in this)) {
      const clusterTimeDoc = this.get('$clusterTime', BSONType.object);
      if (clusterTimeDoc == null) {
        this.clusterTime = null;
        return null;
      }
      const clusterTime = clusterTimeDoc.get('clusterTime', BSONType.timestamp, true);
      const signature = clusterTimeDoc.get('signature', BSONType.object)?.toObject();
      // @ts-expect-error: `signature` is incorrectly typed. It is public API.
      this.clusterTime = { clusterTime, signature };
    }
    return this.clusterTime ?? null;
  }

  public override toObject(options?: BSONSerializeOptions): Record<string, any> {
    const exactBSONOptions = {
      ...pluckBSONSerializeOptions(options ?? {}),
      validation: parseUtf8ValidationOption(options)
    };
    return super.toObject(exactBSONOptions);
  }
}

/** @internal */
export class CursorResponse extends MongoDBResponse {
  /**
   * Devtools need to know which keys were encrypted before the driver automatically decrypted them.
   * If decorating is enabled (`Symbol.for('@@mdb.decorateDecryptionResult')`), this field will be set,
   * storing the original encrypted response from the server, so that we can build an object that has
   * the list of BSON keys that were encrypted stored at a well known symbol: `Symbol.for('@@mdb.decryptedKeys')`.
   */
  encryptedResponse?: MongoDBResponse;
  /**
   * This supports a feature of the FindCursor.
   * It is an optimization to avoid an extra getMore when the limit has been reached
   */
  static get emptyGetMore(): CursorResponse {
    return new CursorResponse(serialize({ ok: 1, cursor: { id: 0n, nextBatch: [] } }));
  }

  static override is(value: unknown): value is CursorResponse {
    return value instanceof CursorResponse || value === CursorResponse.emptyGetMore;
  }

  private _batch: OnDemandDocument | null = null;
  private iterated = 0;

  get cursor() {
    return this.get('cursor', BSONType.object, true);
  }

  public get id(): Long {
    try {
      return Long.fromBigInt(this.cursor.get('id', BSONType.long, true));
    } catch (cause) {
      throw new MongoUnexpectedServerResponseError(cause.message, { cause });
    }
  }

  public get ns() {
    const namespace = this.cursor.get('ns', BSONType.string);
    if (namespace != null) return ns(namespace);
    return null;
  }

  public get length() {
    return Math.max(this.batchSize - this.iterated, 0);
  }

  private _encryptedBatch: OnDemandDocument | null = null;
  get encryptedBatch() {
    if (this.encryptedResponse == null) return null;
    if (this._encryptedBatch != null) return this._encryptedBatch;

    const cursor = this.encryptedResponse?.get('cursor', BSONType.object);
    if (cursor?.has('firstBatch'))
      this._encryptedBatch = cursor.get('firstBatch', BSONType.array, true);
    else if (cursor?.has('nextBatch'))
      this._encryptedBatch = cursor.get('nextBatch', BSONType.array, true);
    else throw new MongoUnexpectedServerResponseError('Cursor document did not contain a batch');

    return this._encryptedBatch;
  }

  private get batch() {
    if (this._batch != null) return this._batch;
    const cursor = this.cursor;
    if (cursor.has('firstBatch')) this._batch = cursor.get('firstBatch', BSONType.array, true);
    else if (cursor.has('nextBatch')) this._batch = cursor.get('nextBatch', BSONType.array, true);
    else throw new MongoUnexpectedServerResponseError('Cursor document did not contain a batch');
    return this._batch;
  }

  public get batchSize() {
    return this.batch?.size();
  }

  public get postBatchResumeToken() {
    return (
      this.cursor.get('postBatchResumeToken', BSONType.object)?.toObject({
        promoteValues: false,
        promoteLongs: false,
        promoteBuffers: false,
        validation: { utf8: true }
      }) ?? null
    );
  }

  public shift(options: OnDemandDocumentDeserializeOptions): any {
    if (this.iterated >= this.batchSize) {
      return null;
    }

    const result = this.batch.get(this.iterated, BSONType.object, true) ?? null;
    const encryptedResult = this.encryptedBatch?.get(this.iterated, BSONType.object, true) ?? null;

    this.iterated += 1;

    if (options?.raw) {
      return result.toBytes();
    } else {
      const object = result.toObject(options);
      if (encryptedResult) {
        decorateDecryptionResult(object, encryptedResult.toObject(options), true);
      }
      return object;
    }
  }

  public clear() {
    this.iterated = this.batchSize;
  }
}

/**
 * Explain responses have nothing to do with cursor responses
 * This class serves to temporarily avoid refactoring how cursors handle
 * explain responses which is to detect that the response is not cursor-like and return the explain
 * result as the "first and only" document in the "batch" and end the "cursor"
 */
export class ExplainedCursorResponse extends CursorResponse {
  isExplain = true;

  override get id(): Long {
    return Long.fromBigInt(0n);
  }

  override get batchSize() {
    return 0;
  }

  override get ns() {
    return null;
  }

  _length = 1;
  override get length(): number {
    return this._length;
  }

  override shift(options?: DeserializeOptions) {
    if (this._length === 0) return null;
    this._length -= 1;
    return this.toObject(options);
  }
}

/**
 * Client bulk writes have some extra metadata at the top level that needs to be
 * included in the result returned to the user.
 */
export class ClientBulkWriteCursorResponse extends CursorResponse {
  get insertedCount() {
    return this.get('nInserted', BSONType.int, true);
  }

  get upsertedCount() {
    return this.get('nUpserted', BSONType.int, true);
  }

  get matchedCount() {
    return this.get('nMatched', BSONType.int, true);
  }

  get modifiedCount() {
    return this.get('nModified', BSONType.int, true);
  }

  get deletedCount() {
    return this.get('nDeleted', BSONType.int, true);
  }

  get writeConcernError() {
    return this.get('writeConcernError', BSONType.object, false);
  }
}
