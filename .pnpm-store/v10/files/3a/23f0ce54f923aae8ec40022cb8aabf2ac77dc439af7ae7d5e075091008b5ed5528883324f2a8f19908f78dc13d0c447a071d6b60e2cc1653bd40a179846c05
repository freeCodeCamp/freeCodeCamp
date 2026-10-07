import { Writable } from 'stream';

import { type Document, ObjectId } from '../bson';
import type { Collection } from '../collection';
import { CursorTimeoutMode } from '../cursor/abstract_cursor';
import {
  MongoAPIError,
  MONGODB_ERROR_CODES,
  MongoError,
  MongoOperationTimeoutError
} from '../error';
import { CSOTTimeoutContext } from '../timeout';
import { type Callback, resolveTimeoutOptions, squashError } from '../utils';
import type { WriteConcernOptions } from '../write_concern';
import { WriteConcern } from './../write_concern';
import type { GridFSFile } from './download';
import type { GridFSBucket } from './index';

/** @public */
export interface GridFSChunk {
  _id: ObjectId;
  files_id: ObjectId;
  n: number;
  data: Buffer | Uint8Array;
}

/** @public */
export interface GridFSBucketWriteStreamOptions extends WriteConcernOptions {
  /** Overwrite this bucket's chunkSizeBytes for this file */
  chunkSizeBytes?: number;
  /** Custom file id for the GridFS file. */
  id?: ObjectId;
  /** Object to store in the file document's `metadata` field */
  metadata?: Document;
  /**
   * String to store in the file document's `contentType` field.
   * @deprecated Will be removed in the next major version. Add a contentType field to the metadata document instead.
   */
  contentType?: string;
  /**
   * Array of strings to store in the file document's `aliases` field.
   * @deprecated Will be removed in the next major version. Add an aliases field to the metadata document instead.
   */
  aliases?: string[];
  /**
   * @experimental
   * Specifies the time an operation will run until it throws a timeout error
   */
  timeoutMS?: number;
}

/**
 * A writable stream that enables you to write buffers to GridFS.
 *
 * Do not instantiate this class directly. Use `openUploadStream()` instead.
 * @public
 */
export class GridFSBucketWriteStream extends Writable {
  bucket: GridFSBucket;
  /** A Collection instance where the file's chunks are stored */
  chunks: Collection<GridFSChunk>;
  /** A Collection instance where the file's GridFSFile document is stored */
  files: Collection<GridFSFile>;
  /** The name of the file */
  filename: string;
  /** Options controlling the metadata inserted along with the file */
  options: GridFSBucketWriteStreamOptions;
  /** Indicates the stream is finished uploading */
  done: boolean;
  /** The ObjectId used for the `_id` field on the GridFSFile document */
  id: ObjectId;
  /** The number of bytes that each chunk will be limited to */
  chunkSizeBytes: number;
  /** Space used to store a chunk currently being inserted */
  bufToStore: Buffer;
  /** Accumulates the number of bytes inserted as the stream uploads chunks */
  length: number;
  /** Accumulates the number of chunks inserted as the stream uploads file contents */
  n: number;
  /** Tracks the current offset into the buffered bytes being uploaded */
  pos: number;
  /** Contains a number of properties indicating the current state of the stream */
  state: {
    /** If set the stream has ended */
    streamEnd: boolean;
    /** Indicates the number of chunks that still need to be inserted to exhaust the current buffered data */
    outstandingRequests: number;
    /** If set an error occurred during insertion */
    errored: boolean;
    /** If set the stream was intentionally aborted */
    aborted: boolean;
  };
  /** The write concern setting to be used with every insert operation */
  writeConcern?: WriteConcern;
  /**
   * The document containing information about the inserted file.
   * This property is defined _after_ the finish event has been emitted.
   * It will remain `null` if an error occurs.
   *
   * @example
   * ```ts
   * fs.createReadStream('file.txt')
   *   .pipe(bucket.openUploadStream('file.txt'))
   *   .on('finish', function () {
   *     console.log(this.gridFSFile)
   *   })
   * ```
   */
  gridFSFile: GridFSFile | null = null;
  /** @internal */
  timeoutContext?: CSOTTimeoutContext;

  /**
   * @param bucket - Handle for this stream's corresponding bucket
   * @param filename - The value of the 'filename' key in the files doc
   * @param options - Optional settings.
   * @internal
   */
  constructor(bucket: GridFSBucket, filename: string, options?: GridFSBucketWriteStreamOptions) {
    super();

    options = options ?? {};
    this.bucket = bucket;
    this.chunks = bucket.s._chunksCollection;
    this.filename = filename;
    this.files = bucket.s._filesCollection;
    this.options = options;
    this.writeConcern = WriteConcern.fromOptions(options) || bucket.s.options.writeConcern;
    // Signals the write is all done
    this.done = false;

    this.id = options.id ? options.id : new ObjectId();
    // properly inherit the default chunksize from parent
    this.chunkSizeBytes = options.chunkSizeBytes || this.bucket.s.options.chunkSizeBytes;
    this.bufToStore = Buffer.alloc(this.chunkSizeBytes);
    this.length = 0;
    this.n = 0;
    this.pos = 0;
    this.state = {
      streamEnd: false,
      outstandingRequests: 0,
      errored: false,
      aborted: false
    };

    if (options.timeoutMS != null)
      this.timeoutContext = new CSOTTimeoutContext({
        timeoutMS: options.timeoutMS,
        serverSelectionTimeoutMS: resolveTimeoutOptions(this.bucket.s.db.client, {})
          .serverSelectionTimeoutMS
      });
  }

  /**
   * @internal
   *
   * The stream is considered constructed when the indexes are done being created
   */
  override _construct(callback: (error?: Error | null) => void): void {
    if (!this.bucket.s.calledOpenUploadStream) {
      this.bucket.s.calledOpenUploadStream = true;

      checkIndexes(this).then(
        () => {
          this.bucket.s.checkedIndexes = true;
          this.bucket.emit('index');
          callback();
        },
        error => {
          if (error instanceof MongoOperationTimeoutError) {
            return handleError(this, error, callback);
          }
          squashError(error);
          callback();
        }
      );
    } else {
      return process.nextTick(callback);
    }
  }

  /**
   * @internal
   * Write a buffer to the stream.
   *
   * @param chunk - Buffer to write
   * @param encoding - Optional encoding for the buffer
   * @param callback - Function to call when the chunk was added to the buffer, or if the entire chunk was persisted to MongoDB if this chunk caused a flush.
   */
  override _write(
    chunk: Buffer | string,
    encoding: BufferEncoding,
    callback: Callback<void>
  ): void {
    doWrite(this, chunk, encoding, callback);
  }

  /** @internal */
  override _final(callback: (error?: Error | null) => void): void {
    if (this.state.streamEnd) {
      return process.nextTick(callback);
    }
    this.state.streamEnd = true;
    writeRemnant(this, callback);
  }

  /**
   * Places this write stream into an aborted state (all future writes fail)
   * and deletes all chunks that have already been written.
   */
  async abort(): Promise<void> {
    if (this.state.streamEnd) {
      // TODO(NODE-3485): Replace with MongoGridFSStreamClosed
      throw new MongoAPIError('Cannot abort a stream that has already completed');
    }

    if (this.state.aborted) {
      // TODO(NODE-3485): Replace with MongoGridFSStreamClosed
      throw new MongoAPIError('Cannot call abort() on a stream twice');
    }

    this.state.aborted = true;
    const remainingTimeMS = this.timeoutContext?.getRemainingTimeMSOrThrow(
      `Upload timed out after ${this.timeoutContext?.timeoutMS}ms`
    );

    await this.chunks.deleteMany({ files_id: this.id }, { timeoutMS: remainingTimeMS });
  }
}

function handleError(stream: GridFSBucketWriteStream, error: Error, callback: Callback): void {
  if (stream.state.errored) {
    process.nextTick(callback);
    return;
  }
  stream.state.errored = true;
  process.nextTick(callback, error);
}

function createChunkDoc(filesId: ObjectId, n: number, data: Buffer): GridFSChunk {
  return {
    _id: new ObjectId(),
    files_id: filesId,
    n,
    data
  };
}

async function checkChunksIndex(stream: GridFSBucketWriteStream): Promise<void> {
  const index = { files_id: 1, n: 1 };

  let remainingTimeMS;
  remainingTimeMS = stream.timeoutContext?.getRemainingTimeMSOrThrow(
    `Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`
  );

  let indexes;
  try {
    indexes = await stream.chunks
      .listIndexes({
        timeoutMode: remainingTimeMS != null ? CursorTimeoutMode.LIFETIME : undefined,
        timeoutMS: remainingTimeMS
      })
      .toArray();
  } catch (error) {
    if (error instanceof MongoError && error.code === MONGODB_ERROR_CODES.NamespaceNotFound) {
      indexes = [];
    } else {
      throw error;
    }
  }

  const hasChunksIndex = !!indexes.find(index => {
    const keys = Object.keys(index.key);
    if (keys.length === 2 && index.key.files_id === 1 && index.key.n === 1) {
      return true;
    }
    return false;
  });

  if (!hasChunksIndex) {
    remainingTimeMS = stream.timeoutContext?.getRemainingTimeMSOrThrow(
      `Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`
    );
    await stream.chunks.createIndex(index, {
      ...stream.writeConcern,
      background: true,
      unique: true,
      timeoutMS: remainingTimeMS
    });
  }
}

function checkDone(stream: GridFSBucketWriteStream, callback: Callback): void {
  if (stream.done) {
    return process.nextTick(callback);
  }

  if (stream.state.streamEnd && stream.state.outstandingRequests === 0 && !stream.state.errored) {
    // Set done so we do not trigger duplicate createFilesDoc
    stream.done = true;
    // Create a new files doc
    const gridFSFile = createFilesDoc(
      stream.id,
      stream.length,
      stream.chunkSizeBytes,
      stream.filename,
      stream.options.contentType,
      stream.options.aliases,
      stream.options.metadata
    );

    if (isAborted(stream, callback)) {
      return;
    }

    const remainingTimeMS = stream.timeoutContext?.remainingTimeMS;
    if (remainingTimeMS != null && remainingTimeMS <= 0) {
      return handleError(
        stream,
        new MongoOperationTimeoutError(
          `Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`
        ),
        callback
      );
    }

    stream.files
      .insertOne(gridFSFile, { writeConcern: stream.writeConcern, timeoutMS: remainingTimeMS })
      .then(
        () => {
          stream.gridFSFile = gridFSFile;
          callback();
        },
        error => {
          return handleError(stream, error, callback);
        }
      );
    return;
  }

  process.nextTick(callback);
}

async function checkIndexes(stream: GridFSBucketWriteStream): Promise<void> {
  let remainingTimeMS = stream.timeoutContext?.getRemainingTimeMSOrThrow(
    `Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`
  );
  const doc = await stream.files.findOne(
    {},
    {
      projection: { _id: 1 },
      timeoutMS: remainingTimeMS
    }
  );
  if (doc != null) {
    // If at least one document exists assume the collection has the required index
    return;
  }

  const index = { filename: 1, uploadDate: 1 };

  let indexes;
  remainingTimeMS = stream.timeoutContext?.getRemainingTimeMSOrThrow(
    `Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`
  );
  const listIndexesOptions = {
    timeoutMode: remainingTimeMS != null ? CursorTimeoutMode.LIFETIME : undefined,
    timeoutMS: remainingTimeMS
  };
  try {
    indexes = await stream.files.listIndexes(listIndexesOptions).toArray();
  } catch (error) {
    if (error instanceof MongoError && error.code === MONGODB_ERROR_CODES.NamespaceNotFound) {
      indexes = [];
    } else {
      throw error;
    }
  }

  const hasFileIndex = !!indexes.find(index => {
    const keys = Object.keys(index.key);
    if (keys.length === 2 && index.key.filename === 1 && index.key.uploadDate === 1) {
      return true;
    }
    return false;
  });

  if (!hasFileIndex) {
    remainingTimeMS = stream.timeoutContext?.getRemainingTimeMSOrThrow(
      `Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`
    );

    await stream.files.createIndex(index, { background: false, timeoutMS: remainingTimeMS });
  }

  await checkChunksIndex(stream);
}

function createFilesDoc(
  _id: ObjectId,
  length: number,
  chunkSize: number,
  filename: string,
  contentType?: string,
  aliases?: string[],
  metadata?: Document
): GridFSFile {
  const ret: GridFSFile = {
    _id,
    length,
    chunkSize,
    uploadDate: new Date(),
    filename
  };

  if (contentType) {
    ret.contentType = contentType;
  }

  if (aliases) {
    ret.aliases = aliases;
  }

  if (metadata) {
    ret.metadata = metadata;
  }

  return ret;
}

function doWrite(
  stream: GridFSBucketWriteStream,
  chunk: Buffer | string,
  encoding: BufferEncoding,
  callback: Callback<void>
): void {
  if (isAborted(stream, callback)) {
    return;
  }

  const inputBuf = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk, encoding);

  stream.length += inputBuf.length;

  // Input is small enough to fit in our buffer
  if (stream.pos + inputBuf.length < stream.chunkSizeBytes) {
    inputBuf.copy(stream.bufToStore, stream.pos);
    stream.pos += inputBuf.length;
    process.nextTick(callback);
    return;
  }

  // Otherwise, buffer is too big for current chunk, so we need to flush
  // to MongoDB.
  let inputBufRemaining = inputBuf.length;
  let spaceRemaining: number = stream.chunkSizeBytes - stream.pos;
  let numToCopy = Math.min(spaceRemaining, inputBuf.length);
  let outstandingRequests = 0;
  while (inputBufRemaining > 0) {
    const inputBufPos = inputBuf.length - inputBufRemaining;
    inputBuf.copy(stream.bufToStore, stream.pos, inputBufPos, inputBufPos + numToCopy);
    stream.pos += numToCopy;
    spaceRemaining -= numToCopy;
    let doc: GridFSChunk;
    if (spaceRemaining === 0) {
      doc = createChunkDoc(stream.id, stream.n, Buffer.from(stream.bufToStore));

      const remainingTimeMS = stream.timeoutContext?.remainingTimeMS;
      if (remainingTimeMS != null && remainingTimeMS <= 0) {
        return handleError(
          stream,
          new MongoOperationTimeoutError(
            `Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`
          ),
          callback
        );
      }

      ++stream.state.outstandingRequests;
      ++outstandingRequests;

      if (isAborted(stream, callback)) {
        return;
      }

      stream.chunks
        .insertOne(doc, { writeConcern: stream.writeConcern, timeoutMS: remainingTimeMS })
        .then(
          () => {
            --stream.state.outstandingRequests;
            --outstandingRequests;

            if (!outstandingRequests) {
              checkDone(stream, callback);
            }
          },
          error => {
            return handleError(stream, error, callback);
          }
        );

      spaceRemaining = stream.chunkSizeBytes;
      stream.pos = 0;
      ++stream.n;
    }
    inputBufRemaining -= numToCopy;
    numToCopy = Math.min(spaceRemaining, inputBufRemaining);
  }
}

function writeRemnant(stream: GridFSBucketWriteStream, callback: Callback): void {
  // Buffer is empty, so don't bother to insert
  if (stream.pos === 0) {
    return checkDone(stream, callback);
  }

  // Create a new buffer to make sure the buffer isn't bigger than it needs
  // to be.
  const remnant = Buffer.alloc(stream.pos);
  stream.bufToStore.copy(remnant, 0, 0, stream.pos);
  const doc = createChunkDoc(stream.id, stream.n, remnant);

  // If the stream was aborted, do not write remnant
  if (isAborted(stream, callback)) {
    return;
  }

  const remainingTimeMS = stream.timeoutContext?.remainingTimeMS;
  if (remainingTimeMS != null && remainingTimeMS <= 0) {
    return handleError(
      stream,
      new MongoOperationTimeoutError(
        `Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`
      ),
      callback
    );
  }
  ++stream.state.outstandingRequests;
  stream.chunks
    .insertOne(doc, { writeConcern: stream.writeConcern, timeoutMS: remainingTimeMS })
    .then(
      () => {
        --stream.state.outstandingRequests;
        checkDone(stream, callback);
      },
      error => {
        return handleError(stream, error, callback);
      }
    );
}

function isAborted(stream: GridFSBucketWriteStream, callback: Callback<void>): boolean {
  if (stream.state.aborted) {
    process.nextTick(callback, new MongoAPIError('Stream has been aborted'));
    return true;
  }
  return false;
}
