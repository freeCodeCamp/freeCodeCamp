"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOneAndUpdateOperation = exports.FindOneAndReplaceOperation = exports.FindOneAndDeleteOperation = exports.FindAndModifyOperation = exports.ReturnDocument = void 0;
const responses_1 = require("../cmap/wire_protocol/responses");
const error_1 = require("../error");
const read_preference_1 = require("../read_preference");
const sort_1 = require("../sort");
const utils_1 = require("../utils");
const command_1 = require("./command");
const operation_1 = require("./operation");
/** @public */
exports.ReturnDocument = Object.freeze({
    BEFORE: 'before',
    AFTER: 'after'
});
function configureFindAndModifyCmdBaseUpdateOpts(cmdBase, options) {
    cmdBase.new = options.returnDocument === exports.ReturnDocument.AFTER;
    cmdBase.upsert = options.upsert === true;
    if (options.bypassDocumentValidation === true) {
        cmdBase.bypassDocumentValidation = options.bypassDocumentValidation;
    }
    return cmdBase;
}
/** @internal */
class FindAndModifyOperation extends command_1.CommandOperation {
    constructor(collection, query, options) {
        super(collection, options);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
        this.options = options;
        // force primary read preference
        this.readPreference = read_preference_1.ReadPreference.primary;
        this.collection = collection;
        this.query = query;
    }
    get commandName() {
        return 'findAndModify';
    }
    buildCommandDocument(connection, _session) {
        const options = this.options;
        const command = {
            findAndModify: this.collection.collectionName,
            query: this.query,
            remove: false,
            new: false,
            upsert: false
        };
        options.includeResultMetadata ??= false;
        const sort = (0, sort_1.formatSort)(options.sort);
        if (sort) {
            command.sort = sort;
        }
        if (options.projection) {
            command.fields = options.projection;
        }
        if (options.maxTimeMS) {
            command.maxTimeMS = options.maxTimeMS;
        }
        // Decorate the findAndModify command with the write Concern
        if (options.writeConcern) {
            command.writeConcern = options.writeConcern;
        }
        if (options.let) {
            command.let = options.let;
        }
        // we check for undefined specifically here to allow falsy values
        // eslint-disable-next-line no-restricted-syntax
        if (options.comment !== undefined) {
            command.comment = options.comment;
        }
        (0, utils_1.decorateWithCollation)(command, options);
        if (options.hint) {
            const unacknowledgedWrite = this.writeConcern?.w === 0;
            if (unacknowledgedWrite && (0, utils_1.maxWireVersion)(connection) < 9) {
                throw new error_1.MongoCompatibilityError('hint for the findAndModify command is only supported on MongoDB 4.4+');
            }
            command.hint = options.hint;
        }
        return command;
    }
    handleOk(response) {
        const result = super.handleOk(response);
        return this.options.includeResultMetadata ? result : (result.value ?? null);
    }
}
exports.FindAndModifyOperation = FindAndModifyOperation;
/** @internal */
class FindOneAndDeleteOperation extends FindAndModifyOperation {
    constructor(collection, filter, options) {
        // Basic validation
        if (filter == null || typeof filter !== 'object') {
            throw new error_1.MongoInvalidArgumentError('Argument "filter" must be an object');
        }
        super(collection, filter, options);
    }
    buildCommandDocument(connection, session) {
        const document = super.buildCommandDocument(connection, session);
        document.remove = true;
        return document;
    }
}
exports.FindOneAndDeleteOperation = FindOneAndDeleteOperation;
/** @internal */
class FindOneAndReplaceOperation extends FindAndModifyOperation {
    constructor(collection, filter, replacement, options) {
        if (filter == null || typeof filter !== 'object') {
            throw new error_1.MongoInvalidArgumentError('Argument "filter" must be an object');
        }
        if (replacement == null || typeof replacement !== 'object') {
            throw new error_1.MongoInvalidArgumentError('Argument "replacement" must be an object');
        }
        if ((0, utils_1.hasAtomicOperators)(replacement)) {
            throw new error_1.MongoInvalidArgumentError('Replacement document must not contain atomic operators');
        }
        super(collection, filter, options);
        this.replacement = replacement;
    }
    buildCommandDocument(connection, session) {
        const document = super.buildCommandDocument(connection, session);
        document.update = this.replacement;
        configureFindAndModifyCmdBaseUpdateOpts(document, this.options);
        return document;
    }
}
exports.FindOneAndReplaceOperation = FindOneAndReplaceOperation;
/** @internal */
class FindOneAndUpdateOperation extends FindAndModifyOperation {
    constructor(collection, filter, update, options) {
        if (filter == null || typeof filter !== 'object') {
            throw new error_1.MongoInvalidArgumentError('Argument "filter" must be an object');
        }
        if (update == null || typeof update !== 'object') {
            throw new error_1.MongoInvalidArgumentError('Argument "update" must be an object');
        }
        if (!(0, utils_1.hasAtomicOperators)(update, options)) {
            throw new error_1.MongoInvalidArgumentError('Update document requires atomic operators');
        }
        super(collection, filter, options);
        this.update = update;
        this.options = options;
    }
    buildCommandDocument(connection, session) {
        const document = super.buildCommandDocument(connection, session);
        document.update = this.update;
        configureFindAndModifyCmdBaseUpdateOpts(document, this.options);
        if (this.options.arrayFilters) {
            document.arrayFilters = this.options.arrayFilters;
        }
        return document;
    }
}
exports.FindOneAndUpdateOperation = FindOneAndUpdateOperation;
(0, operation_1.defineAspects)(FindAndModifyOperation, [
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.EXPLAINABLE,
    operation_1.Aspect.SUPPORTS_RAW_DATA
]);
//# sourceMappingURL=find_and_modify.js.map