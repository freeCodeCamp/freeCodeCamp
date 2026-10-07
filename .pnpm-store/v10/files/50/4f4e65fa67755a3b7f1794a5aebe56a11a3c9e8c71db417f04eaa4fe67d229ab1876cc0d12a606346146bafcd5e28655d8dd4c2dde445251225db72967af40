"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOperation = void 0;
const responses_1 = require("../cmap/wire_protocol/responses");
const error_1 = require("../error");
const sort_1 = require("../sort");
const utils_1 = require("../utils");
const command_1 = require("./command");
const operation_1 = require("./operation");
/** @internal */
class FindOperation extends command_1.CommandOperation {
    constructor(ns, filter = {}, options = {}) {
        super(undefined, options);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.CursorResponse;
        this.options = { ...options };
        delete this.options.writeConcern;
        this.ns = ns;
        if (typeof filter !== 'object' || Array.isArray(filter)) {
            throw new error_1.MongoInvalidArgumentError('Query filter must be a plain object or ObjectId');
        }
        // special case passing in an ObjectId as a filter
        this.filter = filter != null && filter._bsontype === 'ObjectId' ? { _id: filter } : filter;
        this.SERVER_COMMAND_RESPONSE_TYPE = this.explain ? responses_1.ExplainedCursorResponse : responses_1.CursorResponse;
    }
    get commandName() {
        return 'find';
    }
    buildOptions(timeoutContext) {
        return {
            ...this.options,
            ...this.bsonOptions,
            documentsReturnedIn: 'firstBatch',
            session: this.session,
            timeoutContext
        };
    }
    handleOk(response) {
        return response;
    }
    buildCommandDocument() {
        return makeFindCommand(this.ns, this.filter, this.options);
    }
}
exports.FindOperation = FindOperation;
function makeFindCommand(ns, filter, options) {
    const findCommand = {
        find: ns.collection,
        filter
    };
    if (options.sort) {
        findCommand.sort = (0, sort_1.formatSort)(options.sort);
    }
    if (options.projection) {
        let projection = options.projection;
        if (projection && Array.isArray(projection)) {
            projection = projection.length
                ? projection.reduce((result, field) => {
                    result[field] = 1;
                    return result;
                }, {})
                : { _id: 1 };
        }
        findCommand.projection = projection;
    }
    if (options.hint) {
        findCommand.hint = (0, utils_1.normalizeHintField)(options.hint);
    }
    if (typeof options.skip === 'number') {
        findCommand.skip = options.skip;
    }
    if (typeof options.limit === 'number') {
        if (options.limit < 0) {
            findCommand.limit = -options.limit;
            findCommand.singleBatch = true;
        }
        else {
            findCommand.limit = options.limit;
        }
    }
    if (typeof options.batchSize === 'number') {
        if (options.batchSize < 0) {
            findCommand.limit = -options.batchSize;
        }
        else {
            if (options.batchSize === options.limit) {
                // Spec dictates that if these are equal the batchSize should be one more than the
                // limit to avoid leaving the cursor open.
                findCommand.batchSize = options.batchSize + 1;
            }
            else {
                findCommand.batchSize = options.batchSize;
            }
        }
    }
    if (typeof options.singleBatch === 'boolean') {
        findCommand.singleBatch = options.singleBatch;
    }
    // we check for undefined specifically here to allow falsy values
    // eslint-disable-next-line no-restricted-syntax
    if (options.comment !== undefined) {
        findCommand.comment = options.comment;
    }
    if (options.max) {
        findCommand.max = options.max;
    }
    if (options.min) {
        findCommand.min = options.min;
    }
    if (typeof options.returnKey === 'boolean') {
        findCommand.returnKey = options.returnKey;
    }
    if (typeof options.showRecordId === 'boolean') {
        findCommand.showRecordId = options.showRecordId;
    }
    if (typeof options.tailable === 'boolean') {
        findCommand.tailable = options.tailable;
    }
    if (typeof options.oplogReplay === 'boolean') {
        findCommand.oplogReplay = options.oplogReplay;
    }
    if (typeof options.timeout === 'boolean') {
        findCommand.noCursorTimeout = !options.timeout;
    }
    else if (typeof options.noCursorTimeout === 'boolean') {
        findCommand.noCursorTimeout = options.noCursorTimeout;
    }
    if (typeof options.awaitData === 'boolean') {
        findCommand.awaitData = options.awaitData;
    }
    if (typeof options.allowPartialResults === 'boolean') {
        findCommand.allowPartialResults = options.allowPartialResults;
    }
    if (typeof options.allowDiskUse === 'boolean') {
        findCommand.allowDiskUse = options.allowDiskUse;
    }
    if (options.let) {
        findCommand.let = options.let;
    }
    return findCommand;
}
(0, operation_1.defineAspects)(FindOperation, [
    operation_1.Aspect.READ_OPERATION,
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.EXPLAINABLE,
    operation_1.Aspect.CURSOR_CREATING,
    operation_1.Aspect.SUPPORTS_RAW_DATA
]);
//# sourceMappingURL=find.js.map