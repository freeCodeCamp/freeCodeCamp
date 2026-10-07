import { Readable } from 'stream';

import type { Document, ObjectId } from '../bson';
import type { Collection } from '../collection';
import { CursorTimeoutMode } from '../cursor/abstract_cursor';
import type { FindCursor } from '../cursor/find_cursor';
import {
  MongoGridFSChunkError,
  MongoGridFSStreamError,
  MongoInvalidArgumentError,
  MongoRuntimeError
} from '../error';
import type { FindOptions } from '../operations/find';
import type { ReadPreference } from '../read_preference';
import type { Sort } from '../sort';
import { CSOTTimeoutContext } from '../timeout';
import type { Callback } from '../utils';
import type { GridFSChunk } from './upload';

/** @public */
export interface GridFSBucketReadStreamOptions {
  sort?: Sort;
  skip?: number;
  /**
   * 0-indexed non-negative byte offset from the beginning of the file
   */
  start?: number;
  /**
   * 0-indexed non-negative byte offset to the end of the file contents
   * to be returned by the stream. `end` is non-inclusive
   */
  end?: number;
  /**
   * @experimental
   * Specifies the time an operation will run until it throws a timeout error
   */
  timeoutMS?: number;
}

/** @public */
export interface GridFSBucketReadStreamOptionsWithRevision extends GridFSBucketReadStreamOptions {
  /** The revision number relative to the oldest file with the given filename. 0
   * gets you the oldest file, 1 gets you the 2nd oldest, -1 gets you the
   * newest. */
  revision?: number;
}

/** @public */
export interface GridFSFile {
  _id: ObjectId;
  length: number;
  chunkSize: number;
  filename: string;
  metadata?: Document;
  uploadDate: Date;
  /** @deprecated Will be removed in the next major version. */
  contentType?: string;
  /** @deprecated Will be removed in the next major version. */
  aliases?: string[];
}

/** @internal */
export interface GridFSBucketReadStreamPrivate {
  /**
   * The running total number of bytes read from the chunks collection.
   */
  bytesRead: number;
  /**
   * The number of bytes to remove from the last chunk read in the file.  This is non-zero
   * if `end` is not equal to the length of the document and `end` is not a multiple
   * of the chunkSize.
   */
  bytesToTrim: number;

  /**
   * The number of bytes to remove from the first chunk read in the file.  This is non-zero
   * if `start` is not equal to the 0  and `start` is not a multiple
   * of the chunkSize.
   */
  bytesToSkip: number;

  files: Collection<GridFSFile>;
  chunks: Collection<GridFSChunk>;
  cursor?: FindCursor<GridFSChunk>;

  /** The running total number of chunks read from the chunks collection. */
  expected: number;

  /**
   * The filter used to search in the _files_ collection (i.e., `{ _id: <> }`)
   * This is not the same filter used when reading chunks from the chunks collection.
   */
  filter: Document;

  /** Indicates whether or not download has started. */
  init: boolean;

  /** The expected number of chunks to read, calculated from start, end, chunkSize and file length. */
  expectedEnd: number;
  file?: GridFSFile;
  options: {
    sort?: Sort;
    skip?: number;
    start: number;
    end: number;
    timeoutMS?: number;
  };
  readPreference?: ReadPreference;
  timeoutContext?: CSOTTimeoutContext;
}

/**
 * A readable stream that enables you to read buffers from GridFS.
 *
 * Do not instantiate this class directly. Use `openDownloadStream()` instead.
 * @public
 */
export class GridFSBucketReadStream extends Readable {
  /** @internal */
  s: GridFSBucketReadStreamPrivate;

  /**
   * Fires when the stream loaded the file document corresponding to the provided id.
   * @event
   */
  static readonly FILE = 'file' as const;

  /**
   * @param chunks - Handle for chunks collection
   * @param files - Handle for files collection
   * @param readPreference - The read preference to use
   * @param filter - The filter to use to find the file document
   * @internal
   */
  constructor(
    chunks: Collection<GridFSChunk>,
    files: Collection<GridFSFile>,
    readPreference: ReadPreference | undefined,
    filter: Document,
    options?: GridFSBucketReadStreamOptions
  ) {
    super({ emitClose: true });
    this.s = {
      bytesToTrim: 0,
      bytesToSkip: 0,
      bytesRead: 0,
      chunks,
      expected: 0,
      files,
      filter,
      init: false,
      expectedEnd: 0,
      options: {
        start: 0,
        end: 0,
        ...options
      },
      readPreference,
      timeoutContext:
        options?.timeoutMS != null
          ? new CSOTTimeoutContext({ timeoutMS: options.timeoutMS, serverSelectionTimeoutMS: 0 })
          : undefined
    };
  }

  /**
   * Reads from the cursor and pushes to the stream.
   * Private Impl, do not call directly
   * @internal
   */
  override _read(): void {
    if (this.destroyed) return;
    waitForFile(this, () => doRead(this));
  }

  /**
   * Sets the 0-based offset in bytes to start streaming from. Throws
   * an error if this stream has entered flowing mode
   * (e.g. if you've already called `on('data')`)
   *
   * @param start - 0-based offset in bytes to start streaming from
   */
  start(start = 0): this {
    throwIfInitialized(this);
    this.s.options.start = start;
    return this;
  }

  /**
   * Sets the 0-based offset in bytes to start streaming from. Throws
   * an error if this stream has entered flowing mode
   * (e.g. if you've already called `on('data')`)
   *
   * @param end - Offset in bytes to stop reading at
   */
  end(end = 0): this {
    throwIfInitialized(this);
    this.s.options.end = end;
    return this;
  }

  /**
   * Marks this stream as aborted (will never push another `data` event)
   * and kills the underlying cursor. Will emit the 'end' event, and then
   * the 'close' event once the cursor is successfully killed.
   */
  async abort(): Promise<void> {
    this.push(null);
    this.destroy();
    const remainingTimeMS = this.s.timeoutContext?.getRemainingTimeMSOrThrow();
    await this.s.cursor?.close({ timeoutMS: remainingTimeMS });
  }
}

function throwIfInitialized(stream: GridFSBucketReadStream): void {
  if (stream.s.init) {
    throw new MongoGridFSStreamError('Options cannot be changed after the stream is initialized');
  }
}

function doRead(stream: GridFSBucketReadStream): void {
  if (stream.destroyed) return;
  if (!stream.s.cursor) return;
  if (!stream.s.file) return;

  const handleReadResult = (doc: Document | null) => {
    if (stream.destroyed) return;

    if (!doc) {
      stream.push(null);

      stream.s.cursor?.close().then(undefined, error => stream.destroy(error));
      return;
    }

    if (!stream.s.file) return;

    const bytesRemaining = stream.s.file.length - stream.s.bytesRead;
    const expectedN = stream.s.expected++;
    const expectedLength = Math.min(stream.s.file.chunkSize, bytesRemaining);
    if (doc.n > expectedN) {
      return stream.destroy(
        new MongoGridFSChunkError(
          `ChunkIsMissing: Got unexpected n: ${doc.n}, expected: ${expectedN}`
        )
      );
    }

    if (doc.n < expectedN) {
      return stream.destroy(
        new MongoGridFSChunkError(`ExtraChunk: Got unexpected n: ${doc.n}, expected: ${expectedN}`)
      );
    }

    let buf = Buffer.isBuffer(doc.data) ? doc.data : doc.data.buffer;

    if (buf.byteLength !== expectedLength) {
      if (bytesRemaining <= 0) {
        return stream.destroy(
          new MongoGridFSChunkError(
            `ExtraChunk: Got unexpected n: ${doc.n}, expected file length ${stream.s.file.length} bytes but already read ${stream.s.bytesRead} bytes`
          )
        );
      }

      return stream.destroy(
        new MongoGridFSChunkError(
          `ChunkIsWrongSize: Got unexpected length: ${buf.byteLength}, expected: ${expectedLength}`
        )
      );
    }

    stream.s.bytesRead += buf.byteLength;

    if (buf.byteLength === 0) {
      return stream.push(null);
    }

    let sliceStart = null;
    let sliceEnd = null;

    if (stream.s.bytesToSkip != null) {
      sliceStart = stream.s.bytesToSkip;
      stream.s.bytesToSkip = 0;
    }

    const atEndOfStream = expectedN === stream.s.expectedEnd - 1;
    const bytesLeftToRead = stream.s.options.end - stream.s.bytesToSkip;
    if (atEndOfStream && stream.s.bytesToTrim != null) {
      sliceEnd = stream.s.file.chunkSize - stream.s.bytesToTrim;
    } else if (stream.s.options.end && bytesLeftToRead < doc.data.byteLength) {
      sliceEnd = bytesLeftToRead;
    }

    if (sliceStart != null || sliceEnd != null) {
      buf = buf.slice(sliceStart || 0, sliceEnd || buf.byteLength);
    }

    stream.push(buf);
    return;
  };

  stream.s.cursor.next().then(handleReadResult, error => {
    if (stream.destroyed) return;
    stream.destroy(error);
  });
}

function init(stream: GridFSBucketReadStream): void {
  const findOneOptions: FindOptions = {};
  if (stream.s.readPreference) {
    findOneOptions.readPreference = stream.s.readPreference;
  }
  if (stream.s.options && stream.s.options.sort) {
    findOneOptions.sort = stream.s.options.sort;
  }
  if (stream.s.options && stream.s.options.skip) {
    findOneOptions.skip = stream.s.options.skip;
  }

  const handleReadResult = (doc: Document | null) => {
    if (stream.destroyed) return;

    if (!doc) {
      const identifier = stream.s.filter._id
        ? stream.s.filter._id.toString()
        : stream.s.filter.filename;
      const errmsg = `FileNotFound: file ${identifier} was not found`;
      // TODO(NODE-3483)
      const err = new MongoRuntimeError(errmsg);
      err.code = 'ENOENT'; // TODO: NODE-3338 set property as part of constructor
      return stream.destroy(err);
    }

    // If document is empty, kill the stream immediately and don't
    // execute any reads
    if (doc.length <= 0) {
      stream.push(null);
      return;
    }

    if (stream.destroyed) {
      // If user destroys the stream before we have a cursor, wait
      // until the query is done to say we're 'closed' because we can't
      // cancel a query.
      stream.destroy();
      return;
    }

    try {
      stream.s.bytesToSkip = handleStartOption(stream, doc, stream.s.options);
    } catch (error) {
      return stream.destroy(error);
    }

    const filter: Document = { files_id: doc._id };

    // Currently (MongoDB 3.4.4) skip function does not support the index,
    // it needs to retrieve all the documents first and then skip them. (CS-25811)
    // As work around we use $gte on the "n" field.
    if (stream.s.options && stream.s.options.start != null) {
      const skip = Math.floor(stream.s.options.start / doc.chunkSize);
      if (skip > 0) {
        filter['n'] = { $gte: skip };
      }
    }

    let remainingTimeMS: number | undefined;
    try {
      remainingTimeMS = stream.s.timeoutContext?.getRemainingTimeMSOrThrow(
        `Download timed out after ${stream.s.timeoutContext?.timeoutMS}ms`
      );
    } catch (error) {
      return stream.destroy(error);
    }

    stream.s.cursor = stream.s.chunks
      .find(filter, {
        timeoutMode: stream.s.options.timeoutMS != null ? CursorTimeoutMode.LIFETIME : undefined,
        timeoutMS: remainingTimeMS
      })
      .sort({ n: 1 });

    if (stream.s.readPreference) {
      stream.s.cursor.withReadPreference(stream.s.readPreference);
    }

    stream.s.expectedEnd = Math.ceil(doc.length / doc.chunkSize);
    stream.s.file = doc as GridFSFile;

    try {
      stream.s.bytesToTrim = handleEndOption(stream, doc, stream.s.cursor, stream.s.options);
    } catch (error) {
      return stream.destroy(error);
    }

    stream.emit(GridFSBucketReadStream.FILE, doc);
    return;
  };

  let remainingTimeMS: number | undefined;
  try {
    remainingTimeMS = stream.s.timeoutContext?.getRemainingTimeMSOrThrow(
      `Download timed out after ${stream.s.timeoutContext?.timeoutMS}ms`
    );
  } catch (error) {
    if (!stream.destroyed) stream.destroy(error);
    return;
  }

  findOneOptions.timeoutMS = remainingTimeMS;

  stream.s.files.findOne(stream.s.filter, findOneOptions).then(handleReadResult, error => {
    if (stream.destroyed) return;
    stream.destroy(error);
  });
}

function waitForFile(stream: GridFSBucketReadStream, callback: Callback): void {
  if (stream.s.file) {
    return callback();
  }

  if (!stream.s.init) {
    init(stream);
    stream.s.init = true;
  }

  stream.once('file', () => {
    callback();
  });
}

function handleStartOption(
  stream: GridFSBucketReadStream,
  doc: Document,
  options: GridFSBucketReadStreamOptions
): number {
  if (options && options.start != null) {
    if (options.start > doc.length) {
      throw new MongoInvalidArgumentError(
        `Stream start (${options.start}) must not be more than the length of the file (${doc.length})`
      );
    }
    if (options.start < 0) {
      throw new MongoInvalidArgumentError(`Stream start (${options.start}) must not be negative`);
    }
    if (options.end != null && options.end < options.start) {
      throw new MongoInvalidArgumentError(
        `Stream start (${options.start}) must not be greater than stream end (${options.end})`
      );
    }

    stream.s.bytesRead = Math.floor(options.start / doc.chunkSize) * doc.chunkSize;
    stream.s.expected = Math.floor(options.start / doc.chunkSize);

    return options.start - stream.s.bytesRead;
  }
  throw new MongoInvalidArgumentError('Start option must be defined');
}

function handleEndOption(
  stream: GridFSBucketReadStream,
  doc: Document,
  cursor: FindCursor<GridFSChunk>,
  options: GridFSBucketReadStreamOptions
) {
  if (options && options.end != null) {
    if (options.end > doc.length) {
      throw new MongoInvalidArgumentError(
        `Stream end (${options.end}) must not be more than the length of the file (${doc.length})`
      );
    }
    if (options.start == null || options.start < 0) {
      throw new MongoInvalidArgumentError(`Stream end (${options.end}) must not be negative`);
    }

    const start = options.start != null ? Math.floor(options.start / doc.chunkSize) : 0;

    cursor.limit(Math.ceil(options.end / doc.chunkSize) - start);

    stream.s.expectedEnd = Math.ceil(options.end / doc.chunkSize);

    return Math.ceil(options.end / doc.chunkSize) * doc.chunkSize - options.end;
  }
  throw new MongoInvalidArgumentError('End option must be defined');
}
