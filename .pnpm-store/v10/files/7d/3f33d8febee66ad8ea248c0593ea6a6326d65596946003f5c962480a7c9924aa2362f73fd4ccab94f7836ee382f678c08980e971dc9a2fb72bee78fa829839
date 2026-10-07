"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSearchIndexOperation = void 0;
const responses_1 = require("../../cmap/wire_protocol/responses");
const operation_1 = require("../operation");
/** @internal */
class UpdateSearchIndexOperation extends operation_1.AbstractOperation {
    constructor(collection, name, definition) {
        super();
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
        this.collection = collection;
        this.name = name;
        this.definition = definition;
        this.ns = collection.fullNamespace;
    }
    get commandName() {
        return 'updateSearchIndex';
    }
    buildCommand(_connection, _session) {
        const namespace = this.collection.fullNamespace;
        return {
            updateSearchIndex: namespace.collection,
            name: this.name,
            definition: this.definition
        };
    }
    handleOk(_response) {
        // no response.
    }
    buildOptions(timeoutContext) {
        return { session: this.session, timeoutContext };
    }
}
exports.UpdateSearchIndexOperation = UpdateSearchIndexOperation;
//# sourceMappingURL=update.js.map