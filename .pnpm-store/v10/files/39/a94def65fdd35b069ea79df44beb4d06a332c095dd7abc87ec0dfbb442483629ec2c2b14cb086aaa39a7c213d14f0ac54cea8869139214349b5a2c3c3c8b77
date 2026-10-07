"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyOperation = exports.DeleteOneOperation = exports.DeleteOperation = void 0;
exports.makeDeleteStatement = makeDeleteStatement;
const responses_1 = require("../cmap/wire_protocol/responses");
const error_1 = require("../error");
const utils_1 = require("../utils");
const command_1 = require("./command");
const operation_1 = require("./operation");
/** @internal */
class DeleteOperation extends command_1.CommandOperation {
    constructor(ns, statements, options) {
        super(undefined, options);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
        this.options = options;
        this.ns = ns;
        this.statements = statements;
    }
    get commandName() {
        return 'delete';
    }
    get canRetryWrite() {
        if (super.canRetryWrite === false) {
            return false;
        }
        return this.statements.every(op => (op.limit != null ? op.limit > 0 : true));
    }
    buildCommandDocument(connection, _session) {
        const options = this.options;
        const ordered = typeof options.ordered === 'boolean' ? options.ordered : true;
        const command = {
            delete: this.ns.collection,
            deletes: this.statements,
            ordered
        };
        if (options.let) {
            command.let = options.let;
        }
        // we check for undefined specifically here to allow falsy values
        // eslint-disable-next-line no-restricted-syntax
        if (options.comment !== undefined) {
            command.comment = options.comment;
        }
        const unacknowledgedWrite = this.writeConcern && this.writeConcern.w === 0;
        if (unacknowledgedWrite && (0, utils_1.maxWireVersion)(connection) < 9) {
            if (this.statements.find((o) => o.hint)) {
                throw new error_1.MongoCompatibilityError(`hint for the delete command is only supported on MongoDB 4.4+`);
            }
        }
        return command;
    }
}
exports.DeleteOperation = DeleteOperation;
class DeleteOneOperation extends DeleteOperation {
    constructor(ns, filter, options) {
        super(ns, [makeDeleteStatement(filter, { ...options, limit: 1 })], options);
    }
    handleOk(response) {
        const res = super.handleOk(response);
        // @ts-expect-error Explain commands have broken TS
        if (this.explain)
            return res;
        if (res.code)
            throw new error_1.MongoServerError(res);
        if (res.writeErrors)
            throw new error_1.MongoServerError(res.writeErrors[0]);
        return {
            acknowledged: this.writeConcern?.w !== 0,
            deletedCount: res.n
        };
    }
}
exports.DeleteOneOperation = DeleteOneOperation;
class DeleteManyOperation extends DeleteOperation {
    constructor(ns, filter, options) {
        super(ns, [makeDeleteStatement(filter, options)], options);
    }
    handleOk(response) {
        const res = super.handleOk(response);
        // @ts-expect-error Explain commands have broken TS
        if (this.explain)
            return res;
        if (res.code)
            throw new error_1.MongoServerError(res);
        if (res.writeErrors)
            throw new error_1.MongoServerError(res.writeErrors[0]);
        return {
            acknowledged: this.writeConcern?.w !== 0,
            deletedCount: res.n
        };
    }
}
exports.DeleteManyOperation = DeleteManyOperation;
function makeDeleteStatement(filter, options) {
    const op = {
        q: filter,
        limit: typeof options.limit === 'number' ? options.limit : 0
    };
    if (options.collation) {
        op.collation = options.collation;
    }
    if (options.hint) {
        op.hint = options.hint;
    }
    return op;
}
(0, operation_1.defineAspects)(DeleteOperation, [
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.SUPPORTS_RAW_DATA
]);
(0, operation_1.defineAspects)(DeleteOneOperation, [
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.EXPLAINABLE,
    operation_1.Aspect.SKIP_COLLATION,
    operation_1.Aspect.SUPPORTS_RAW_DATA
]);
(0, operation_1.defineAspects)(DeleteManyOperation, [
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.EXPLAINABLE,
    operation_1.Aspect.SKIP_COLLATION,
    operation_1.Aspect.SUPPORTS_RAW_DATA
]);
//# sourceMappingURL=delete.js.map