"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSearchIndexesOperation = void 0;
const responses_1 = require("../../cmap/wire_protocol/responses");
const operation_1 = require("../operation");
/** @internal */
class CreateSearchIndexesOperation extends operation_1.AbstractOperation {
    constructor(collection, descriptions) {
        super();
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
        this.collection = collection;
        this.descriptions = descriptions;
        this.ns = collection.fullNamespace;
    }
    get commandName() {
        return 'createSearchIndexes';
    }
    buildCommand(_connection, _session) {
        const namespace = this.collection.fullNamespace;
        return {
            createSearchIndexes: namespace.collection,
            indexes: this.descriptions
        };
    }
    handleOk(response) {
        return super.handleOk(response).indexesCreated.map((val) => val.name);
    }
    buildOptions(timeoutContext) {
        return { session: this.session, timeoutContext };
    }
}
exports.CreateSearchIndexesOperation = CreateSearchIndexesOperation;
//# sourceMappingURL=create.js.map