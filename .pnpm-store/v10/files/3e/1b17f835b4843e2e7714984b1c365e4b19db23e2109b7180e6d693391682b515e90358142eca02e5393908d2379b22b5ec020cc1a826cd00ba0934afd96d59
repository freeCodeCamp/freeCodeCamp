"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertOneOperation = exports.InsertOperation = void 0;
const responses_1 = require("../cmap/wire_protocol/responses");
const error_1 = require("../error");
const utils_1 = require("../utils");
const command_1 = require("./command");
const operation_1 = require("./operation");
/** @internal */
class InsertOperation extends command_1.CommandOperation {
    constructor(ns, documents, options) {
        super(undefined, options);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
        this.options = { ...options, checkKeys: options.checkKeys ?? false };
        this.ns = ns;
        this.documents = documents;
    }
    get commandName() {
        return 'insert';
    }
    buildCommandDocument(_connection, _session) {
        const options = this.options ?? {};
        const ordered = typeof options.ordered === 'boolean' ? options.ordered : true;
        const command = {
            insert: this.ns.collection,
            documents: this.documents,
            ordered
        };
        if (typeof options.bypassDocumentValidation === 'boolean') {
            command.bypassDocumentValidation = options.bypassDocumentValidation;
        }
        // we check for undefined specifically here to allow falsy values
        // eslint-disable-next-line no-restricted-syntax
        if (options.comment !== undefined) {
            command.comment = options.comment;
        }
        return command;
    }
}
exports.InsertOperation = InsertOperation;
class InsertOneOperation extends InsertOperation {
    constructor(collection, doc, options) {
        super(collection.s.namespace, [(0, utils_1.maybeAddIdToDocuments)(collection, doc, options)], options);
    }
    handleOk(response) {
        const res = super.handleOk(response);
        if (res.code)
            throw new error_1.MongoServerError(res);
        if (res.writeErrors) {
            // This should be a WriteError but we can't change it now because of error hierarchy
            throw new error_1.MongoServerError(res.writeErrors[0]);
        }
        return {
            acknowledged: this.writeConcern?.w !== 0,
            insertedId: this.documents[0]._id
        };
    }
}
exports.InsertOneOperation = InsertOneOperation;
(0, operation_1.defineAspects)(InsertOperation, [
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.SUPPORTS_RAW_DATA
]);
(0, operation_1.defineAspects)(InsertOneOperation, [
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.SUPPORTS_RAW_DATA
]);
//# sourceMappingURL=insert.js.map