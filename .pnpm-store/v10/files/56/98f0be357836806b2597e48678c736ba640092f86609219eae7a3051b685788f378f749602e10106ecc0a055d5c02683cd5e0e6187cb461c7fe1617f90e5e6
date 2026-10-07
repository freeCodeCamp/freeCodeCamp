"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunCommandCursor = void 0;
const error_1 = require("../error");
const execute_operation_1 = require("../operations/execute_operation");
const get_more_1 = require("../operations/get_more");
const run_command_1 = require("../operations/run_command");
const utils_1 = require("../utils");
const abstract_cursor_1 = require("./abstract_cursor");
/** @public */
class RunCommandCursor extends abstract_cursor_1.AbstractCursor {
    /**
     * Controls the `getMore.comment` field
     * @param comment - any BSON value
     */
    setComment(comment) {
        this.getMoreOptions.comment = comment;
        return this;
    }
    /**
     * Controls the `getMore.maxTimeMS` field. Only valid when cursor is tailable await
     * @param maxTimeMS - the number of milliseconds to wait for new data
     */
    setMaxTimeMS(maxTimeMS) {
        this.getMoreOptions.maxAwaitTimeMS = maxTimeMS;
        return this;
    }
    /**
     * Controls the `getMore.batchSize` field
     * @param batchSize - the number documents to return in the `nextBatch`
     */
    setBatchSize(batchSize) {
        this.getMoreOptions.batchSize = batchSize;
        return this;
    }
    /** Unsupported for RunCommandCursor */
    clone() {
        throw new error_1.MongoAPIError('Clone not supported, create a new cursor with db.runCursorCommand');
    }
    /** Unsupported for RunCommandCursor: readConcern must be configured directly on command document */
    withReadConcern(_) {
        throw new error_1.MongoAPIError('RunCommandCursor does not support readConcern it must be attached to the command being run');
    }
    /** Unsupported for RunCommandCursor: various cursor flags must be configured directly on command document */
    addCursorFlag(_, __) {
        throw new error_1.MongoAPIError('RunCommandCursor does not support cursor flags, they must be attached to the command being run');
    }
    /**
     * Unsupported for RunCommandCursor: maxTimeMS must be configured directly on command document
     */
    maxTimeMS(_) {
        throw new error_1.MongoAPIError('maxTimeMS must be configured on the command document directly, to configure getMore.maxTimeMS use cursor.setMaxTimeMS()');
    }
    /** Unsupported for RunCommandCursor: batchSize must be configured directly on command document */
    batchSize(_) {
        throw new error_1.MongoAPIError('batchSize must be configured on the command document directly, to configure getMore.batchSize use cursor.setBatchSize()');
    }
    /** @internal */
    constructor(db, command, options = {}) {
        super(db.client, (0, utils_1.ns)(db.namespace), options);
        this.getMoreOptions = {};
        this.db = db;
        this.command = Object.freeze({ ...command });
    }
    /** @internal */
    async _initialize(session) {
        const operation = new run_command_1.RunCursorCommandOperation(this.db.s.namespace, this.command, {
            ...this.cursorOptions,
            session: session,
            readPreference: this.cursorOptions.readPreference
        });
        const response = await (0, execute_operation_1.executeOperation)(this.client, operation, this.timeoutContext);
        return {
            server: operation.server,
            session,
            response
        };
    }
    /** @internal */
    async getMore(_batchSize) {
        if (!this.session) {
            throw new error_1.MongoRuntimeError('Unexpected null session. A cursor creating command should have set this');
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const getMoreOperation = new get_more_1.GetMoreOperation(this.namespace, this.id, this.server, {
            ...this.cursorOptions,
            session: this.session,
            ...this.getMoreOptions
        });
        return await (0, execute_operation_1.executeOperation)(this.client, getMoreOperation, this.timeoutContext);
    }
}
exports.RunCommandCursor = RunCommandCursor;
//# sourceMappingURL=run_command_cursor.js.map