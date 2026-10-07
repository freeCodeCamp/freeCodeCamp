"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeStreamCursor = void 0;
const change_stream_1 = require("../change_stream");
const constants_1 = require("../constants");
const aggregate_1 = require("../operations/aggregate");
const execute_operation_1 = require("../operations/execute_operation");
const utils_1 = require("../utils");
const abstract_cursor_1 = require("./abstract_cursor");
/** @internal */
class ChangeStreamCursor extends abstract_cursor_1.AbstractCursor {
    constructor(client, namespace, pipeline = [], options = {}) {
        super(client, namespace, { ...options, tailable: true, awaitData: true });
        this.pipeline = pipeline;
        this.changeStreamCursorOptions = options;
        this._resumeToken = null;
        this.startAtOperationTime = options.startAtOperationTime ?? null;
        if (options.startAfter) {
            this.resumeToken = options.startAfter;
        }
        else if (options.resumeAfter) {
            this.resumeToken = options.resumeAfter;
        }
    }
    set resumeToken(token) {
        this._resumeToken = token;
        this.emit(change_stream_1.ChangeStream.RESUME_TOKEN_CHANGED, token);
    }
    get resumeToken() {
        return this._resumeToken;
    }
    get resumeOptions() {
        const options = {
            ...this.changeStreamCursorOptions
        };
        for (const key of ['resumeAfter', 'startAfter', 'startAtOperationTime']) {
            delete options[key];
        }
        if (this.resumeToken != null) {
            if (this.changeStreamCursorOptions.startAfter && !this.hasReceived) {
                options.startAfter = this.resumeToken;
            }
            else {
                options.resumeAfter = this.resumeToken;
            }
        }
        else if (this.startAtOperationTime != null) {
            options.startAtOperationTime = this.startAtOperationTime;
        }
        return options;
    }
    cacheResumeToken(resumeToken) {
        if (this.bufferedCount() === 0 && this.postBatchResumeToken) {
            this.resumeToken = this.postBatchResumeToken;
        }
        else {
            this.resumeToken = resumeToken;
        }
        this.hasReceived = true;
    }
    _processBatch(response) {
        const { postBatchResumeToken } = response;
        if (postBatchResumeToken) {
            this.postBatchResumeToken = postBatchResumeToken;
            if (response.batchSize === 0) {
                this.resumeToken = postBatchResumeToken;
            }
        }
    }
    clone() {
        return new ChangeStreamCursor(this.client, this.namespace, this.pipeline, {
            ...this.cursorOptions
        });
    }
    async _initialize(session) {
        const aggregateOperation = new aggregate_1.AggregateOperation(this.namespace, this.pipeline, {
            ...this.cursorOptions,
            ...this.changeStreamCursorOptions,
            session
        });
        const response = await (0, execute_operation_1.executeOperation)(session.client, aggregateOperation, this.timeoutContext);
        const server = aggregateOperation.server;
        this.maxWireVersion = (0, utils_1.maxWireVersion)(server);
        if (this.startAtOperationTime == null &&
            this.changeStreamCursorOptions.resumeAfter == null &&
            this.changeStreamCursorOptions.startAfter == null) {
            this.startAtOperationTime = response.operationTime;
        }
        this._processBatch(response);
        this.emit(constants_1.INIT, response);
        this.emit(constants_1.RESPONSE);
        return { server, session, response };
    }
    async getMore(batchSize) {
        const response = await super.getMore(batchSize);
        this.maxWireVersion = (0, utils_1.maxWireVersion)(this.server);
        this._processBatch(response);
        this.emit(change_stream_1.ChangeStream.MORE, response);
        this.emit(change_stream_1.ChangeStream.RESPONSE);
        return response;
    }
}
exports.ChangeStreamCursor = ChangeStreamCursor;
//# sourceMappingURL=change_stream_cursor.js.map