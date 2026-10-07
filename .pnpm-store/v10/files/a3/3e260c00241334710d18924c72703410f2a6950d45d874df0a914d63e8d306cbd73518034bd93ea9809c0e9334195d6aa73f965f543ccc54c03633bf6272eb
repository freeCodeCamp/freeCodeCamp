"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientBulkWriteCursor = void 0;
const client_bulk_write_1 = require("../operations/client_bulk_write/client_bulk_write");
const execute_operation_1 = require("../operations/execute_operation");
const utils_1 = require("../utils");
const abstract_cursor_1 = require("./abstract_cursor");
/**
 * This is the cursor that handles client bulk write operations. Note this is never
 * exposed directly to the user and is always immediately exhausted.
 * @internal
 */
class ClientBulkWriteCursor extends abstract_cursor_1.AbstractCursor {
    /** @internal */
    constructor(client, commandBuilder, options = {}) {
        super(client, new utils_1.MongoDBNamespace('admin', '$cmd'), options);
        this.commandBuilder = commandBuilder;
        this.clientBulkWriteOptions = options;
    }
    /**
     * We need a way to get the top level cursor response fields for
     * generating the bulk write result, so we expose this here.
     */
    get response() {
        if (this.cursorResponse)
            return this.cursorResponse;
        return null;
    }
    get operations() {
        return this.commandBuilder.lastOperations;
    }
    clone() {
        const clonedOptions = (0, utils_1.mergeOptions)({}, this.clientBulkWriteOptions);
        delete clonedOptions.session;
        return new ClientBulkWriteCursor(this.client, this.commandBuilder, {
            ...clonedOptions
        });
    }
    /** @internal */
    async _initialize(session) {
        const clientBulkWriteOperation = new client_bulk_write_1.ClientBulkWriteOperation(this.commandBuilder, {
            ...this.clientBulkWriteOptions,
            ...this.cursorOptions,
            session
        });
        const response = await (0, execute_operation_1.executeOperation)(this.client, clientBulkWriteOperation, this.timeoutContext);
        this.cursorResponse = response;
        return { server: clientBulkWriteOperation.server, session, response };
    }
}
exports.ClientBulkWriteCursor = ClientBulkWriteCursor;
//# sourceMappingURL=client_bulk_write_cursor.js.map