"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplaceOneOperation = exports.UpdateManyOperation = exports.UpdateOneOperation = exports.UpdateOperation = void 0;
exports.makeUpdateStatement = makeUpdateStatement;
const responses_1 = require("../cmap/wire_protocol/responses");
const error_1 = require("../error");
const sort_1 = require("../sort");
const utils_1 = require("../utils");
const command_1 = require("./command");
const operation_1 = require("./operation");
/**
 * @internal
 * UpdateOperation is used in bulk write, while UpdateOneOperation and UpdateManyOperation are only used in the collections API
 */
class UpdateOperation extends command_1.CommandOperation {
    constructor(ns, statements, options) {
        super(undefined, options);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
        this.options = options;
        this.ns = ns;
        this.statements = statements;
    }
    get commandName() {
        return 'update';
    }
    get canRetryWrite() {
        if (super.canRetryWrite === false) {
            return false;
        }
        return this.statements.every(op => op.multi == null || op.multi === false);
    }
    buildCommandDocument(_connection, _session) {
        const options = this.options;
        const command = {
            update: this.ns.collection,
            updates: this.statements,
            ordered: options.ordered ?? true
        };
        if (typeof options.bypassDocumentValidation === 'boolean') {
            command.bypassDocumentValidation = options.bypassDocumentValidation;
        }
        if (options.let) {
            command.let = options.let;
        }
        // we check for undefined specifically here to allow falsy values
        // eslint-disable-next-line no-restricted-syntax
        if (options.comment !== undefined) {
            command.comment = options.comment;
        }
        return command;
    }
}
exports.UpdateOperation = UpdateOperation;
/** @internal */
class UpdateOneOperation extends UpdateOperation {
    constructor(ns, filter, update, options) {
        super(ns, [makeUpdateStatement(filter, update, { ...options, multi: false })], options);
        if (!(0, utils_1.hasAtomicOperators)(update, options)) {
            throw new error_1.MongoInvalidArgumentError('Update document requires atomic operators');
        }
    }
    handleOk(response) {
        const res = super.handleOk(response);
        // @ts-expect-error Explain typing is broken
        if (this.explain != null)
            return res;
        if (res.code)
            throw new error_1.MongoServerError(res);
        if (res.writeErrors)
            throw new error_1.MongoServerError(res.writeErrors[0]);
        return {
            acknowledged: this.writeConcern?.w !== 0,
            modifiedCount: res.nModified ?? res.n,
            upsertedId: Array.isArray(res.upserted) && res.upserted.length > 0 ? res.upserted[0]._id : null,
            upsertedCount: Array.isArray(res.upserted) && res.upserted.length ? res.upserted.length : 0,
            matchedCount: Array.isArray(res.upserted) && res.upserted.length > 0 ? 0 : res.n
        };
    }
}
exports.UpdateOneOperation = UpdateOneOperation;
/** @internal */
class UpdateManyOperation extends UpdateOperation {
    constructor(ns, filter, update, options) {
        super(ns, [makeUpdateStatement(filter, update, { ...options, multi: true })], options);
        if (!(0, utils_1.hasAtomicOperators)(update, options)) {
            throw new error_1.MongoInvalidArgumentError('Update document requires atomic operators');
        }
    }
    handleOk(response) {
        const res = super.handleOk(response);
        // @ts-expect-error Explain typing is broken
        if (this.explain != null)
            return res;
        if (res.code)
            throw new error_1.MongoServerError(res);
        if (res.writeErrors)
            throw new error_1.MongoServerError(res.writeErrors[0]);
        return {
            acknowledged: this.writeConcern?.w !== 0,
            modifiedCount: res.nModified ?? res.n,
            upsertedId: Array.isArray(res.upserted) && res.upserted.length > 0 ? res.upserted[0]._id : null,
            upsertedCount: Array.isArray(res.upserted) && res.upserted.length ? res.upserted.length : 0,
            matchedCount: Array.isArray(res.upserted) && res.upserted.length > 0 ? 0 : res.n
        };
    }
}
exports.UpdateManyOperation = UpdateManyOperation;
/** @internal */
class ReplaceOneOperation extends UpdateOperation {
    constructor(ns, filter, replacement, options) {
        super(ns, [makeUpdateStatement(filter, replacement, { ...options, multi: false })], options);
        if ((0, utils_1.hasAtomicOperators)(replacement)) {
            throw new error_1.MongoInvalidArgumentError('Replacement document must not contain atomic operators');
        }
    }
    handleOk(response) {
        const res = super.handleOk(response);
        // @ts-expect-error Explain typing is broken
        if (this.explain != null)
            return res;
        if (res.code)
            throw new error_1.MongoServerError(res);
        if (res.writeErrors)
            throw new error_1.MongoServerError(res.writeErrors[0]);
        return {
            acknowledged: this.writeConcern?.w !== 0,
            modifiedCount: res.nModified ?? res.n,
            upsertedId: Array.isArray(res.upserted) && res.upserted.length > 0 ? res.upserted[0]._id : null,
            upsertedCount: Array.isArray(res.upserted) && res.upserted.length ? res.upserted.length : 0,
            matchedCount: Array.isArray(res.upserted) && res.upserted.length > 0 ? 0 : res.n
        };
    }
}
exports.ReplaceOneOperation = ReplaceOneOperation;
function makeUpdateStatement(filter, update, options) {
    if (filter == null || typeof filter !== 'object') {
        throw new error_1.MongoInvalidArgumentError('Selector must be a valid JavaScript object');
    }
    if (update == null || typeof update !== 'object') {
        throw new error_1.MongoInvalidArgumentError('Document must be a valid JavaScript object');
    }
    const op = { q: filter, u: update };
    if (typeof options.upsert === 'boolean') {
        op.upsert = options.upsert;
    }
    if (options.multi) {
        op.multi = options.multi;
    }
    if (options.hint) {
        op.hint = options.hint;
    }
    if (options.arrayFilters) {
        op.arrayFilters = options.arrayFilters;
    }
    if (options.collation) {
        op.collation = options.collation;
    }
    if (!options.multi && options.sort != null) {
        op.sort = (0, sort_1.formatSort)(options.sort);
    }
    return op;
}
(0, operation_1.defineAspects)(UpdateOperation, [
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.SKIP_COLLATION,
    operation_1.Aspect.SUPPORTS_RAW_DATA
]);
(0, operation_1.defineAspects)(UpdateOneOperation, [
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.EXPLAINABLE,
    operation_1.Aspect.SKIP_COLLATION,
    operation_1.Aspect.SUPPORTS_RAW_DATA
]);
(0, operation_1.defineAspects)(UpdateManyOperation, [
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.EXPLAINABLE,
    operation_1.Aspect.SKIP_COLLATION,
    operation_1.Aspect.SUPPORTS_RAW_DATA
]);
(0, operation_1.defineAspects)(ReplaceOneOperation, [
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.SKIP_COLLATION,
    operation_1.Aspect.SUPPORTS_RAW_DATA
]);
//# sourceMappingURL=update.js.map