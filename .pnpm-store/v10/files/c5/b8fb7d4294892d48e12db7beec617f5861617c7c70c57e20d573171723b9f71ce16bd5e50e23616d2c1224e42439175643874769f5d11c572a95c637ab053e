"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstimatedDocumentCountOperation = void 0;
const responses_1 = require("../cmap/wire_protocol/responses");
const command_1 = require("./command");
const operation_1 = require("./operation");
/** @internal */
class EstimatedDocumentCountOperation extends command_1.CommandOperation {
    constructor(collection, options = {}) {
        super(collection, options);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
        this.options = options;
        this.collectionName = collection.collectionName;
    }
    get commandName() {
        return 'count';
    }
    buildCommandDocument(_connection, _session) {
        const cmd = { count: this.collectionName };
        if (typeof this.options.maxTimeMS === 'number') {
            cmd.maxTimeMS = this.options.maxTimeMS;
        }
        // we check for undefined specifically here to allow falsy values
        // eslint-disable-next-line no-restricted-syntax
        if (this.options.comment !== undefined) {
            cmd.comment = this.options.comment;
        }
        return cmd;
    }
    handleOk(response) {
        return response.getNumber('n') ?? 0;
    }
}
exports.EstimatedDocumentCountOperation = EstimatedDocumentCountOperation;
(0, operation_1.defineAspects)(EstimatedDocumentCountOperation, [
    operation_1.Aspect.READ_OPERATION,
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.CURSOR_CREATING,
    operation_1.Aspect.SUPPORTS_RAW_DATA
]);
//# sourceMappingURL=estimated_document_count.js.map