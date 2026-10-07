"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbStatsOperation = void 0;
const responses_1 = require("../cmap/wire_protocol/responses");
const command_1 = require("./command");
const operation_1 = require("./operation");
/** @internal */
class DbStatsOperation extends command_1.CommandOperation {
    constructor(db, options) {
        super(db, options);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
        this.options = options;
    }
    get commandName() {
        return 'dbStats';
    }
    buildCommandDocument(_connection) {
        const command = { dbStats: true };
        if (this.options.scale != null) {
            command.scale = this.options.scale;
        }
        return command;
    }
}
exports.DbStatsOperation = DbStatsOperation;
(0, operation_1.defineAspects)(DbStatsOperation, [operation_1.Aspect.READ_OPERATION]);
//# sourceMappingURL=stats.js.map