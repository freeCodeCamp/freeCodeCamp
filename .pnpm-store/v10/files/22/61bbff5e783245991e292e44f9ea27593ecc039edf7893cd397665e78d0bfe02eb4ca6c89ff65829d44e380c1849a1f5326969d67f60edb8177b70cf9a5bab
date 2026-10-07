"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDatabasesOperation = void 0;
const responses_1 = require("../cmap/wire_protocol/responses");
const utils_1 = require("../utils");
const command_1 = require("./command");
const operation_1 = require("./operation");
/** @internal */
class ListDatabasesOperation extends command_1.CommandOperation {
    constructor(db, options) {
        super(db, options);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
        this.options = options ?? {};
        this.ns = new utils_1.MongoDBNamespace('admin', '$cmd');
    }
    get commandName() {
        return 'listDatabases';
    }
    buildCommandDocument(connection, _session) {
        const cmd = { listDatabases: 1 };
        if (typeof this.options.nameOnly === 'boolean') {
            cmd.nameOnly = this.options.nameOnly;
        }
        if (this.options.filter) {
            cmd.filter = this.options.filter;
        }
        if (typeof this.options.authorizedDatabases === 'boolean') {
            cmd.authorizedDatabases = this.options.authorizedDatabases;
        }
        // we check for undefined specifically here to allow falsy values
        // eslint-disable-next-line no-restricted-syntax
        if ((0, utils_1.maxWireVersion)(connection) >= 9 && this.options.comment !== undefined) {
            cmd.comment = this.options.comment;
        }
        return cmd;
    }
}
exports.ListDatabasesOperation = ListDatabasesOperation;
(0, operation_1.defineAspects)(ListDatabasesOperation, [operation_1.Aspect.READ_OPERATION, operation_1.Aspect.RETRYABLE]);
//# sourceMappingURL=list_databases.js.map