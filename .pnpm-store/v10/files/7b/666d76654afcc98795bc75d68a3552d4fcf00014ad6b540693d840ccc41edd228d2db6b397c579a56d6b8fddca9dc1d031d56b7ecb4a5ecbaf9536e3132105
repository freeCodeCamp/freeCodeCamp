"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveUserOperation = void 0;
const responses_1 = require("../cmap/wire_protocol/responses");
const command_1 = require("./command");
const operation_1 = require("./operation");
/** @internal */
class RemoveUserOperation extends command_1.CommandOperation {
    constructor(db, username, options) {
        super(db, options);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
        this.options = options;
        this.username = username;
    }
    get commandName() {
        return 'dropUser';
    }
    buildCommandDocument(_connection) {
        return { dropUser: this.username };
    }
    handleOk(_response) {
        return true;
    }
}
exports.RemoveUserOperation = RemoveUserOperation;
(0, operation_1.defineAspects)(RemoveUserOperation, [operation_1.Aspect.WRITE_OPERATION]);
//# sourceMappingURL=remove_user.js.map