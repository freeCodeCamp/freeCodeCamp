"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistinctOperation = void 0;
const responses_1 = require("../cmap/wire_protocol/responses");
const command_1 = require("./command");
const operation_1 = require("./operation");
/**
 * Return a list of distinct values for the given key across a collection.
 * @internal
 */
class DistinctOperation extends command_1.CommandOperation {
    /**
     * Construct a Distinct operation.
     *
     * @param collection - Collection instance.
     * @param key - Field of the document to find distinct values for.
     * @param query - The query for filtering the set of documents to which we apply the distinct filter.
     * @param options - Optional settings. See Collection.prototype.distinct for a list of options.
     */
    constructor(collection, key, query, options) {
        super(collection, options);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
        this.options = options ?? {};
        this.collection = collection;
        this.key = key;
        this.query = query;
    }
    get commandName() {
        return 'distinct';
    }
    buildCommandDocument(_connection) {
        const command = {
            distinct: this.collection.collectionName,
            key: this.key,
            query: this.query
        };
        // we check for undefined specifically here to allow falsy values
        // eslint-disable-next-line no-restricted-syntax
        if (this.options.comment !== undefined) {
            command.comment = this.options.comment;
        }
        if (this.options.hint != null) {
            command.hint = this.options.hint;
        }
        return command;
    }
    handleOk(response) {
        if (this.explain) {
            return response.toObject(this.bsonOptions);
        }
        return response.toObject(this.bsonOptions).values;
    }
}
exports.DistinctOperation = DistinctOperation;
(0, operation_1.defineAspects)(DistinctOperation, [
    operation_1.Aspect.READ_OPERATION,
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.EXPLAINABLE,
    operation_1.Aspect.SUPPORTS_RAW_DATA
]);
//# sourceMappingURL=distinct.js.map