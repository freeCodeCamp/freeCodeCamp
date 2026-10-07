"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateCollectionOperation = void 0;
const responses_1 = require("../cmap/wire_protocol/responses");
const error_1 = require("../error");
const command_1 = require("./command");
/** @internal */
class ValidateCollectionOperation extends command_1.CommandOperation {
    constructor(admin, collectionName, options) {
        super(admin.s.db, options);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
        this.options = options;
        this.collectionName = collectionName;
    }
    get commandName() {
        return 'validate';
    }
    buildCommandDocument(_connection, _session) {
        // Decorate command with extra options
        return {
            validate: this.collectionName,
            ...Object.fromEntries(Object.entries(this.options).filter(entry => entry[0] !== 'session'))
        };
    }
    handleOk(response) {
        const result = super.handleOk(response);
        if (result.result != null && typeof result.result !== 'string')
            throw new error_1.MongoUnexpectedServerResponseError('Error with validation data');
        if (result.result != null && result.result.match(/exception|corrupt/) != null)
            throw new error_1.MongoUnexpectedServerResponseError(`Invalid collection ${this.collectionName}`);
        if (result.valid != null && !result.valid)
            throw new error_1.MongoUnexpectedServerResponseError(`Invalid collection ${this.collectionName}`);
        return response;
    }
}
exports.ValidateCollectionOperation = ValidateCollectionOperation;
//# sourceMappingURL=validate_collection.js.map