import type { ObjectId } from '../bson';
import type { Collection } from '../collection';
import type { FindCursor } from '../cursor/find_cursor';
import type { Db } from '../db';
import { MongoOperationTimeoutError, MongoRuntimeError } from '../error';
import { type Filter, TypedEventEmitter } from '../mongo_types';
import type { ReadPreference } from '../read_preference';
import type { Sort } from '../sort';
import { CSOTTimeoutContext } from '../timeout';
import { noop, resolveOptions } from '../utils';
import { WriteConcern, type WriteConcernOptions } from '../write_concern';
import type { FindOptions } from './../operations/find';
import {
  GridFSBucketReadStream,
  type GridFSBucketReadStreamOptions,
  type GridFSBucketReadStreamOptionsWithRevision,
  type GridFSFile
} from './download';
import {
  GridFSBucketWriteStream,
  type GridFSBucketWriteStreamOptions,
  type GridFSChunk
} from './upload';

const DEFAULT_GRIDFS_BUCKET_OPTIONS: {
  bucketName: string;
  chunkSizeBytes: number;
} = {
  bucketName: 'fs',
  chunkSizeBytes: 255 * 1024
};

/** @public */
export interface GridFSBucketOptions extends WriteConcernOptions {
  /** The 'files' and 'chunks' collections will be prefixed with the bucket name followed by a dot. */
  bucketName?: string;
  /** Number of bytes stored in each chunk. Defaults to 255KB */
  chunkSizeBytes?: number;
  /** Read preference to be passed to read operations */
  readPreference?: ReadPreference;
  /**
   * @experimental
   * Specifies the lifetime duration of a gridFS stream. If any async operations are in progress
   * when this timeout expires, the stream will throw a timeout error.
   */
  timeoutMS?: number;
}

/** @internal */
export interface GridFSBucketPrivate {
  db: Db;
  options: {
    bucketName: string;
    chunkSizeBytes: number;
    readPreference?: ReadPreference;
    writeConcern: WriteConcern | undefined;
    timeoutMS?: number;
  };
  _chunksCollection: Collection<GridFSChunk>;
  _filesCollection: Collection<GridFSFile>;
  checkedIndexes: boolean;
  calledOpenUploadStream: boolean;
}

/** @public */
export type GridFSBucketEvents = {
  index(): void;
};

/**
 * Constructor for a streaming GridFS interface
 * @public
 */
export class GridFSBucket extends TypedEventEmitter<GridFSBucketEvents> {
  /** @internal */
  s: GridFSBucketPrivate;

  /**
   * When the first call to openUploadStream is made, the upload stream will
   * check to see if it needs to create the proper indexes on the chunks and
   * files collections. This event is fired either when 1) it determines that
   * no index creation is necessary, 2) when it successfully creates the
   * necessary indexes.
   * @event
   */
  static readonly INDEX = 'index' as const;

  constructor(db: Db, options?: GridFSBucketOptions) {
    super();
    this.on('error', noop);
    this.setMaxListeners(0);
    const privateOptions = resolveOptions(db, {
      ...DEFAULT_GRIDFS_BUCKET_OPTIONS,
      ...options,
      writeConcern: WriteConcern.fromOptions(options)
    });
    this.s = {
      db,
      options: privateOptions,
      _chunksCollection: db.collection<GridFSChunk>(privateOptions.bucketName + '.chunks'),
      _filesCollection: db.collection<GridFSFile>(privateOptions.bucketName + '.files'),
      checkedIndexes: false,
      calledOpenUploadStream: false
    };
  }

  /**
   * Returns a writable stream (GridFSBucketWriteStream) for writing
   * buffers to GridFS. The stream's 'id' property contains the resulting
   * file's id.
   *
   * @param filename - The value of the 'filename' key in the files doc
   * @param options - Optional settings.
   */

  openUploadStream(
    filename: string,
    options?: GridFSBucketWriteStreamOptions
  ): GridFSBucketWriteStream {
    return new GridFSBucketWriteStream(this, filename, {
      timeoutMS: this.s.options.timeoutMS,
      ...options
    });
  }

  /**
   * Returns a writable stream (GridFSBucketWriteStream) for writing
   * buffers to GridFS for a custom file id. The stream's 'id' property contains the resulting
   * file's id.
   */
  openUploadStreamWithId(
    id: ObjectId,
    filename: string,
    options?: GridFSBucketWriteStreamOptions
  ): GridFSBucketWriteStream {
    return new GridFSBucketWriteStream(this, filename, {
      timeoutMS: this.s.options.timeoutMS,
      ...options,
      id
    });
  }

  /** Returns a readable stream (GridFSBucketReadStream) for streaming file data from GridFS. */
  openDownloadStream(
    id: ObjectId,
    options?: GridFSBucketReadStreamOptions
  ): GridFSBucketReadStream {
    return new GridFSBucketReadStream(
      this.s._chunksCollection,
      this.s._filesCollection,
      this.s.options.readPreference,
      { _id: id },
      { timeoutMS: this.s.options.timeoutMS, ...options }
    );
  }

  /**
   * Deletes a file with the given id
   *
   * @param id - The id of the file doc
   */
  async delete(id: ObjectId, options?: { timeoutMS: number }): Promise<void> {
    const { timeoutMS } = resolveOptions(this.s.db, options);
    let timeoutContext: CSOTTimeoutContext | undefined = undefined;

    if (timeoutMS) {
      timeoutContext = new CSOTTimeoutContext({
        timeoutMS,
        serverSelectionTimeoutMS: this.s.db.client.s.options.serverSelectionTimeoutMS
      });
    }

    const { deletedCount } = await this.s._filesCollection.deleteOne(
      { _id: id },
      { timeoutMS: timeoutContext?.remainingTimeMS }
    );

    const remainingTimeMS = timeoutContext?.remainingTimeMS;
    if (remainingTimeMS != null && remainingTimeMS <= 0)
      throw new MongoOperationTimeoutError(`Timed out after ${timeoutMS}ms`);
    // Delete orphaned chunks before returning FileNotFound
    await this.s._chunksCollection.deleteMany({ files_id: id }, { timeoutMS: remainingTimeMS });

    if (deletedCount === 0) {
      // TODO(NODE-3483): Replace with more appropriate error
      // Consider creating new error MongoGridFSFileNotFoundError
      throw new MongoRuntimeError(`File not found for id ${id}`);
    }
  }

  /** Convenience wrapper around find on the files collection */
  find(filter: Filter<GridFSFile> = {}, options: FindOptions = {}): FindCursor<GridFSFile> {
    return this.s._filesCollection.find(filter, options);
  }

  /**
   * Returns a readable stream (GridFSBucketReadStream) for streaming the
   * file with the given name from GridFS. If there are multiple files with
   * the same name, this will stream the most recent file with the given name
   * (as determined by the `uploadDate` field). You can set the `revision`
   * option to change this behavior.
   */
  openDownloadStreamByName(
    filename: string,
    options?: GridFSBucketReadStreamOptionsWithRevision
  ): GridFSBucketReadStream {
    let sort: Sort = { uploadDate: -1 };
    let skip = undefined;
    if (options && options.revision != null) {
      if (options.revision >= 0) {
        sort = { uploadDate: 1 };
        skip = options.revision;
      } else {
        skip = -options.revision - 1;
      }
    }
    return new GridFSBucketReadStream(
      this.s._chunksCollection,
      this.s._filesCollection,
      this.s.options.readPreference,
      { filename },
      { timeoutMS: this.s.options.timeoutMS, ...options, sort, skip }
    );
  }

  /**
   * Renames the file with the given _id to the given string
   *
   * @param id - the id of the file to rename
   * @param filename - new name for the file
   */
  async rename(id: ObjectId, filename: string, options?: { timeoutMS: number }): Promise<void> {
    const filter = { _id: id };
    const update = { $set: { filename } };
    const { matchedCount } = await this.s._filesCollection.updateOne(filter, update, options);
    if (matchedCount === 0) {
      throw new MongoRuntimeError(`File with id ${id} not found`);
    }
  }

  /** Removes this bucket's files collection, followed by its chunks collection. */
  async drop(options?: { timeoutMS: number }): Promise<void> {
    const { timeoutMS } = resolveOptions(this.s.db, options);
    let timeoutContext: CSOTTimeoutContext | undefined = undefined;

    if (timeoutMS) {
      timeoutContext = new CSOTTimeoutContext({
        timeoutMS,
        serverSelectionTimeoutMS: this.s.db.client.s.options.serverSelectionTimeoutMS
      });
    }

    if (timeoutContext) {
      await this.s._filesCollection.drop({ timeoutMS: timeoutContext.remainingTimeMS });
      const remainingTimeMS = timeoutContext.getRemainingTimeMSOrThrow(
        `Timed out after ${timeoutMS}ms`
      );
      await this.s._chunksCollection.drop({ timeoutMS: remainingTimeMS });
    } else {
      await this.s._filesCollection.drop();
      await this.s._chunksCollection.drop();
    }
  }
}
