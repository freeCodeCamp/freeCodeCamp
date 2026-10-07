"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropSearchIndexOperation = void 0;
const responses_1 = require("../../cmap/wire_protocol/responses");
const error_1 = require("../../error");
const operation_1 = require("../operation");
/** @internal */
class DropSearchIndexOperation extends operation_1.AbstractOperation {
    constructor(collection, name) {
        super();
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
        this.collection = collection;
        this.name = name;
        this.ns = collection.fullNamespace;
    }
    get commandName() {
        return 'dropSearchIndex';
    }
    buildCommand(_connection, _session) {
        const namespace = this.collection.fullNamespace;
        const command = {
            dropSearchIndex: namespace.collection
        };
        if (typeof this.name === 'string') {
            command.name = this.name;
        }
        return command;
    }
    handleOk(_response) {
        // do nothing
    }
    buildOptions(timeoutContext) {
        return { session: this.session, timeoutContext };
    }
    handleError(error) {
        const isNamespaceNotFoundError = error instanceof error_1.MongoServerError && error.code === error_1.MONGODB_ERROR_CODES.NamespaceNotFound;
        if (!isNamespaceNotFoundError) {
            throw error;
        }
    }
}
exports.DropSearchIndexOperation = DropSearchIndexOperation;
//# sourceMappingURL=drop.js.map