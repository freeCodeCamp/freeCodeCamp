"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridFSBucketWriteStream = void 0;
const stream_1 = require("stream");
const bson_1 = require("../bson");
const abstract_cursor_1 = require("../cursor/abstract_cursor");
const error_1 = require("../error");
const timeout_1 = require("../timeout");
const utils_1 = require("../utils");
const write_concern_1 = require("./../write_concern");
/**
 * A writable stream that enables you to write buffers to GridFS.
 *
 * Do not instantiate this class directly. Use `openUploadStream()` instead.
 * @public
 */
class GridFSBucketWriteStream extends stream_1.Writable {
    /**
     * @param bucket - Handle for this stream's corresponding bucket
     * @param filename - The value of the 'filename' key in the files doc
     * @param options - Optional settings.
     * @internal
     */
    constructor(bucket, filename, options) {
        super();
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
        this.gridFSFile = null;
        options = options ?? {};
        this.bucket = bucket;
        this.chunks = bucket.s._chunksCollection;
        this.filename = filename;
        this.files = bucket.s._filesCollection;
        this.options = options;
        this.writeConcern = write_concern_1.WriteConcern.fromOptions(options) || bucket.s.options.writeConcern;
        // Signals the write is all done
        this.done = false;
        this.id = options.id ? options.id : new bson_1.ObjectId();
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
            this.timeoutContext = new timeout_1.CSOTTimeoutContext({
                timeoutMS: options.timeoutMS,
                serverSelectionTimeoutMS: (0, utils_1.resolveTimeoutOptions)(this.bucket.s.db.client, {})
                    .serverSelectionTimeoutMS
            });
    }
    /**
     * @internal
     *
     * The stream is considered constructed when the indexes are done being created
     */
    _construct(callback) {
        if (!this.bucket.s.calledOpenUploadStream) {
            this.bucket.s.calledOpenUploadStream = true;
            checkIndexes(this).then(() => {
                this.bucket.s.checkedIndexes = true;
                this.bucket.emit('index');
                callback();
            }, error => {
                if (error instanceof error_1.MongoOperationTimeoutError) {
                    return handleError(this, error, callback);
                }
                (0, utils_1.squashError)(error);
                callback();
            });
        }
        else {
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
    _write(chunk, encoding, callback) {
        doWrite(this, chunk, encoding, callback);
    }
    /** @internal */
    _final(callback) {
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
    async abort() {
        if (this.state.streamEnd) {
            // TODO(NODE-3485): Replace with MongoGridFSStreamClosed
            throw new error_1.MongoAPIError('Cannot abort a stream that has already completed');
        }
        if (this.state.aborted) {
            // TODO(NODE-3485): Replace with MongoGridFSStreamClosed
            throw new error_1.MongoAPIError('Cannot call abort() on a stream twice');
        }
        this.state.aborted = true;
        const remainingTimeMS = this.timeoutContext?.getRemainingTimeMSOrThrow(`Upload timed out after ${this.timeoutContext?.timeoutMS}ms`);
        await this.chunks.deleteMany({ files_id: this.id }, { timeoutMS: remainingTimeMS });
    }
}
exports.GridFSBucketWriteStream = GridFSBucketWriteStream;
function handleError(stream, error, callback) {
    if (stream.state.errored) {
        process.nextTick(callback);
        return;
    }
    stream.state.errored = true;
    process.nextTick(callback, error);
}
function createChunkDoc(filesId, n, data) {
    return {
        _id: new bson_1.ObjectId(),
        files_id: filesId,
        n,
        data
    };
}
async function checkChunksIndex(stream) {
    const index = { files_id: 1, n: 1 };
    let remainingTimeMS;
    remainingTimeMS = stream.timeoutContext?.getRemainingTimeMSOrThrow(`Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`);
    let indexes;
    try {
        indexes = await stream.chunks
            .listIndexes({
            timeoutMode: remainingTimeMS != null ? abstract_cursor_1.CursorTimeoutMode.LIFETIME : undefined,
            timeoutMS: remainingTimeMS
        })
            .toArray();
    }
    catch (error) {
        if (error instanceof error_1.MongoError && error.code === error_1.MONGODB_ERROR_CODES.NamespaceNotFound) {
            indexes = [];
        }
        else {
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
        remainingTimeMS = stream.timeoutContext?.getRemainingTimeMSOrThrow(`Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`);
        await stream.chunks.createIndex(index, {
            ...stream.writeConcern,
            background: true,
            unique: true,
            timeoutMS: remainingTimeMS
        });
    }
}
function checkDone(stream, callback) {
    if (stream.done) {
        return process.nextTick(callback);
    }
    if (stream.state.streamEnd && stream.state.outstandingRequests === 0 && !stream.state.errored) {
        // Set done so we do not trigger duplicate createFilesDoc
        stream.done = true;
        // Create a new files doc
        const gridFSFile = createFilesDoc(stream.id, stream.length, stream.chunkSizeBytes, stream.filename, stream.options.contentType, stream.options.aliases, stream.options.metadata);
        if (isAborted(stream, callback)) {
            return;
        }
        const remainingTimeMS = stream.timeoutContext?.remainingTimeMS;
        if (remainingTimeMS != null && remainingTimeMS <= 0) {
            return handleError(stream, new error_1.MongoOperationTimeoutError(`Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`), callback);
        }
        stream.files
            .insertOne(gridFSFile, { writeConcern: stream.writeConcern, timeoutMS: remainingTimeMS })
            .then(() => {
            stream.gridFSFile = gridFSFile;
            callback();
        }, error => {
            return handleError(stream, error, callback);
        });
        return;
    }
    process.nextTick(callback);
}
async function checkIndexes(stream) {
    let remainingTimeMS = stream.timeoutContext?.getRemainingTimeMSOrThrow(`Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`);
    const doc = await stream.files.findOne({}, {
        projection: { _id: 1 },
        timeoutMS: remainingTimeMS
    });
    if (doc != null) {
        // If at least one document exists assume the collection has the required index
        return;
    }
    const index = { filename: 1, uploadDate: 1 };
    let indexes;
    remainingTimeMS = stream.timeoutContext?.getRemainingTimeMSOrThrow(`Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`);
    const listIndexesOptions = {
        timeoutMode: remainingTimeMS != null ? abstract_cursor_1.CursorTimeoutMode.LIFETIME : undefined,
        timeoutMS: remainingTimeMS
    };
    try {
        indexes = await stream.files.listIndexes(listIndexesOptions).toArray();
    }
    catch (error) {
        if (error instanceof error_1.MongoError && error.code === error_1.MONGODB_ERROR_CODES.NamespaceNotFound) {
            indexes = [];
        }
        else {
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
        remainingTimeMS = stream.timeoutContext?.getRemainingTimeMSOrThrow(`Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`);
        await stream.files.createIndex(index, { background: false, timeoutMS: remainingTimeMS });
    }
    await checkChunksIndex(stream);
}
function createFilesDoc(_id, length, chunkSize, filename, contentType, aliases, metadata) {
    const ret = {
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
function doWrite(stream, chunk, encoding, callback) {
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
    let spaceRemaining = stream.chunkSizeBytes - stream.pos;
    let numToCopy = Math.min(spaceRemaining, inputBuf.length);
    let outstandingRequests = 0;
    while (inputBufRemaining > 0) {
        const inputBufPos = inputBuf.length - inputBufRemaining;
        inputBuf.copy(stream.bufToStore, stream.pos, inputBufPos, inputBufPos + numToCopy);
        stream.pos += numToCopy;
        spaceRemaining -= numToCopy;
        let doc;
        if (spaceRemaining === 0) {
            doc = createChunkDoc(stream.id, stream.n, Buffer.from(stream.bufToStore));
            const remainingTimeMS = stream.timeoutContext?.remainingTimeMS;
            if (remainingTimeMS != null && remainingTimeMS <= 0) {
                return handleError(stream, new error_1.MongoOperationTimeoutError(`Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`), callback);
            }
            ++stream.state.outstandingRequests;
            ++outstandingRequests;
            if (isAborted(stream, callback)) {
                return;
            }
            stream.chunks
                .insertOne(doc, { writeConcern: stream.writeConcern, timeoutMS: remainingTimeMS })
                .then(() => {
                --stream.state.outstandingRequests;
                --outstandingRequests;
                if (!outstandingRequests) {
                    checkDone(stream, callback);
                }
            }, error => {
                return handleError(stream, error, callback);
            });
            spaceRemaining = stream.chunkSizeBytes;
            stream.pos = 0;
            ++stream.n;
        }
        inputBufRemaining -= numToCopy;
        numToCopy = Math.min(spaceRemaining, inputBufRemaining);
    }
}
function writeRemnant(stream, callback) {
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
        return handleError(stream, new error_1.MongoOperationTimeoutError(`Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`), callback);
    }
    ++stream.state.outstandingRequests;
    stream.chunks
        .insertOne(doc, { writeConcern: stream.writeConcern, timeoutMS: remainingTimeMS })
        .then(() => {
        --stream.state.outstandingRequests;
        checkDone(stream, callback);
    }, error => {
        return handleError(stream, error, callback);
    });
}
function isAborted(stream, callback) {
    if (stream.state.aborted) {
        process.nextTick(callback, new error_1.MongoAPIError('Stream has been aborted'));
        return true;
    }
    return false;
}
//# sourceMappingURL=upload.js.map