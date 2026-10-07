"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCollectionsOperation = void 0;
const responses_1 = require("../cmap/wire_protocol/responses");
const utils_1 = require("../utils");
const command_1 = require("./command");
const operation_1 = require("./operation");
/** @internal */
class ListCollectionsOperation extends command_1.CommandOperation {
    constructor(db, filter, options) {
        super(db, options);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.CursorResponse;
        this.options = { ...options };
        delete this.options.writeConcern;
        this.db = db;
        this.filter = filter;
        this.nameOnly = !!this.options.nameOnly;
        this.authorizedCollections = !!this.options.authorizedCollections;
        if (typeof this.options.batchSize === 'number') {
            this.batchSize = this.options.batchSize;
        }
        this.SERVER_COMMAND_RESPONSE_TYPE = this.explain ? responses_1.ExplainedCursorResponse : responses_1.CursorResponse;
    }
    get commandName() {
        return 'listCollections';
    }
    buildCommandDocument(connection) {
        const command = {
            listCollections: 1,
            filter: this.filter,
            cursor: this.batchSize ? { batchSize: this.batchSize } : {},
            nameOnly: this.nameOnly,
            authorizedCollections: this.authorizedCollections
        };
        // we check for undefined specifically here to allow falsy values
        // eslint-disable-next-line no-restricted-syntax
        if ((0, utils_1.maxWireVersion)(connection) >= 9 && this.options.comment !== undefined) {
            command.comment = this.options.comment;
        }
        return command;
    }
    handleOk(response) {
        return response;
    }
}
exports.ListCollectionsOperation = ListCollectionsOperation;
(0, operation_1.defineAspects)(ListCollectionsOperation, [
    operation_1.Aspect.READ_OPERATION,
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.CURSOR_CREATING,
    operation_1.Aspect.SUPPORTS_RAW_DATA
]);
//# sourceMappingURL=list_collections.js.map