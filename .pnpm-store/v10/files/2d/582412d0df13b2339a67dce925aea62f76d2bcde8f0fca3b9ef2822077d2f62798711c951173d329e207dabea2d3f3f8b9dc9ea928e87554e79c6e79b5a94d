"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridFSBucket = void 0;
const error_1 = require("../error");
const mongo_types_1 = require("../mongo_types");
const timeout_1 = require("../timeout");
const utils_1 = require("../utils");
const write_concern_1 = require("../write_concern");
const download_1 = require("./download");
const upload_1 = require("./upload");
const DEFAULT_GRIDFS_BUCKET_OPTIONS = {
    bucketName: 'fs',
    chunkSizeBytes: 255 * 1024
};
/**
 * Constructor for a streaming GridFS interface
 * @public
 */
class GridFSBucket extends mongo_types_1.TypedEventEmitter {
    constructor(db, options) {
        super();
        this.on('error', utils_1.noop);
        this.setMaxListeners(0);
        const privateOptions = (0, utils_1.resolveOptions)(db, {
            ...DEFAULT_GRIDFS_BUCKET_OPTIONS,
            ...options,
            writeConcern: write_concern_1.WriteConcern.fromOptions(options)
        });
        this.s = {
            db,
            options: privateOptions,
            _chunksCollection: db.collection(privateOptions.bucketName + '.chunks'),
            _filesCollection: db.collection(privateOptions.bucketName + '.files'),
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
    openUploadStream(filename, options) {
        return new upload_1.GridFSBucketWriteStream(this, filename, {
            timeoutMS: this.s.options.timeoutMS,
            ...options
        });
    }
    /**
     * Returns a writable stream (GridFSBucketWriteStream) for writing
     * buffers to GridFS for a custom file id. The stream's 'id' property contains the resulting
     * file's id.
     */
    openUploadStreamWithId(id, filename, options) {
        return new upload_1.GridFSBucketWriteStream(this, filename, {
            timeoutMS: this.s.options.timeoutMS,
            ...options,
            id
        });
    }
    /** Returns a readable stream (GridFSBucketReadStream) for streaming file data from GridFS. */
    openDownloadStream(id, options) {
        return new download_1.GridFSBucketReadStream(this.s._chunksCollection, this.s._filesCollection, this.s.options.readPreference, { _id: id }, { timeoutMS: this.s.options.timeoutMS, ...options });
    }
    /**
     * Deletes a file with the given id
     *
     * @param id - The id of the file doc
     */
    async delete(id, options) {
        const { timeoutMS } = (0, utils_1.resolveOptions)(this.s.db, options);
        let timeoutContext = undefined;
        if (timeoutMS) {
            timeoutContext = new timeout_1.CSOTTimeoutContext({
                timeoutMS,
                serverSelectionTimeoutMS: this.s.db.client.s.options.serverSelectionTimeoutMS
            });
        }
        const { deletedCount } = await this.s._filesCollection.deleteOne({ _id: id }, { timeoutMS: timeoutContext?.remainingTimeMS });
        const remainingTimeMS = timeoutContext?.remainingTimeMS;
        if (remainingTimeMS != null && remainingTimeMS <= 0)
            throw new error_1.MongoOperationTimeoutError(`Timed out after ${timeoutMS}ms`);
        // Delete orphaned chunks before returning FileNotFound
        await this.s._chunksCollection.deleteMany({ files_id: id }, { timeoutMS: remainingTimeMS });
        if (deletedCount === 0) {
            // TODO(NODE-3483): Replace with more appropriate error
            // Consider creating new error MongoGridFSFileNotFoundError
            throw new error_1.MongoRuntimeError(`File not found for id ${id}`);
        }
    }
    /** Convenience wrapper around find on the files collection */
    find(filter = {}, options = {}) {
        return this.s._filesCollection.find(filter, options);
    }
    /**
     * Returns a readable stream (GridFSBucketReadStream) for streaming the
     * file with the given name from GridFS. If there are multiple files with
     * the same name, this will stream the most recent file with the given name
     * (as determined by the `uploadDate` field). You can set the `revision`
     * option to change this behavior.
     */
    openDownloadStreamByName(filename, options) {
        let sort = { uploadDate: -1 };
        let skip = undefined;
        if (options && options.revision != null) {
            if (options.revision >= 0) {
                sort = { uploadDate: 1 };
                skip = options.revision;
            }
            else {
                skip = -options.revision - 1;
            }
        }
        return new download_1.GridFSBucketReadStream(this.s._chunksCollection, this.s._filesCollection, this.s.options.readPreference, { filename }, { timeoutMS: this.s.options.timeoutMS, ...options, sort, skip });
    }
    /**
     * Renames the file with the given _id to the given string
     *
     * @param id - the id of the file to rename
     * @param filename - new name for the file
     */
    async rename(id, filename, options) {
        const filter = { _id: id };
        const update = { $set: { filename } };
        const { matchedCount } = await this.s._filesCollection.updateOne(filter, update, options);
        if (matchedCount === 0) {
            throw new error_1.MongoRuntimeError(`File with id ${id} not found`);
        }
    }
    /** Removes this bucket's files collection, followed by its chunks collection. */
    async drop(options) {
        const { timeoutMS } = (0, utils_1.resolveOptions)(this.s.db, options);
        let timeoutContext = undefined;
        if (timeoutMS) {
            timeoutContext = new timeout_1.CSOTTimeoutContext({
                timeoutMS,
                serverSelectionTimeoutMS: this.s.db.client.s.options.serverSelectionTimeoutMS
            });
        }
        if (timeoutContext) {
            await this.s._filesCollection.drop({ timeoutMS: timeoutContext.remainingTimeMS });
            const remainingTimeMS = timeoutContext.getRemainingTimeMSOrThrow(`Timed out after ${timeoutMS}ms`);
            await this.s._chunksCollection.drop({ timeoutMS: remainingTimeMS });
        }
        else {
            await this.s._filesCollection.drop();
            await this.s._chunksCollection.drop();
        }
    }
}
exports.GridFSBucket = GridFSBucket;
/**
 * When the first call to openUploadStream is made, the upload stream will
 * check to see if it needs to create the proper indexes on the chunks and
 * files collections. This event is fired either when 1) it determines that
 * no index creation is necessary, 2) when it successfully creates the
 * necessary indexes.
 * @event
 */
GridFSBucket.INDEX = 'index';
//# sourceMappingURL=index.js.map