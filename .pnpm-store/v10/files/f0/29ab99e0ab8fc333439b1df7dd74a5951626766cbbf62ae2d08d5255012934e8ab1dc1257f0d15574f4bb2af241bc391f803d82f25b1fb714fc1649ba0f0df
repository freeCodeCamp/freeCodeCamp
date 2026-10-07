"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOperation = exports.DB_AGGREGATE_COLLECTION = void 0;
const responses_1 = require("../cmap/wire_protocol/responses");
const error_1 = require("../error");
const write_concern_1 = require("../write_concern");
const command_1 = require("./command");
const operation_1 = require("./operation");
/** @internal */
exports.DB_AGGREGATE_COLLECTION = 1;
/** @internal */
class AggregateOperation extends command_1.CommandOperation {
    constructor(ns, pipeline, options) {
        super(undefined, { ...options, dbName: ns.db });
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.CursorResponse;
        this.options = { ...options };
        // Covers when ns.collection is null, undefined or the empty string, use DB_AGGREGATE_COLLECTION
        this.target = ns.collection || exports.DB_AGGREGATE_COLLECTION;
        this.pipeline = pipeline;
        // determine if we have a write stage, override read preference if so
        this.hasWriteStage = false;
        if (typeof options?.out === 'string') {
            this.pipeline = this.pipeline.concat({ $out: options.out });
            this.hasWriteStage = true;
        }
        else if (pipeline.length > 0) {
            const finalStage = pipeline[pipeline.length - 1];
            if (finalStage.$out || finalStage.$merge) {
                this.hasWriteStage = true;
            }
        }
        if (!this.hasWriteStage) {
            delete this.options.writeConcern;
        }
        if (this.explain && this.writeConcern) {
            throw new error_1.MongoInvalidArgumentError('Option "explain" cannot be used on an aggregate call with writeConcern');
        }
        if (options?.cursor != null && typeof options.cursor !== 'object') {
            throw new error_1.MongoInvalidArgumentError('Cursor options must be an object');
        }
        this.SERVER_COMMAND_RESPONSE_TYPE = this.explain ? responses_1.ExplainedCursorResponse : responses_1.CursorResponse;
    }
    get commandName() {
        return 'aggregate';
    }
    get canRetryRead() {
        return !this.hasWriteStage;
    }
    addToPipeline(stage) {
        this.pipeline.push(stage);
    }
    buildCommandDocument() {
        const options = this.options;
        const command = { aggregate: this.target, pipeline: this.pipeline };
        if (this.hasWriteStage && this.writeConcern) {
            write_concern_1.WriteConcern.apply(command, this.writeConcern);
        }
        if (options.bypassDocumentValidation === true) {
            command.bypassDocumentValidation = options.bypassDocumentValidation;
        }
        if (typeof options.allowDiskUse === 'boolean') {
            command.allowDiskUse = options.allowDiskUse;
        }
        if (options.hint) {
            command.hint = options.hint;
        }
        if (options.let) {
            command.let = options.let;
        }
        // we check for undefined specifically here to allow falsy values
        // eslint-disable-next-line no-restricted-syntax
        if (options.comment !== undefined) {
            command.comment = options.comment;
        }
        command.cursor = options.cursor || {};
        if (options.batchSize && !this.hasWriteStage) {
            command.cursor.batchSize = options.batchSize;
        }
        return command;
    }
    handleOk(response) {
        return response;
    }
}
exports.AggregateOperation = AggregateOperation;
(0, operation_1.defineAspects)(AggregateOperation, [
    operation_1.Aspect.READ_OPERATION,
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.EXPLAINABLE,
    operation_1.Aspect.CURSOR_CREATING,
    operation_1.Aspect.SUPPORTS_RAW_DATA
]);
//# sourceMappingURL=aggregate.js.map