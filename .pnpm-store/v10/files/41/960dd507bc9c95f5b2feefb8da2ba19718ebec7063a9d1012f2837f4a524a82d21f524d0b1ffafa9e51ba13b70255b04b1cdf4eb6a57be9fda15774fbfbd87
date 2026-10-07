"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilingLevelOperation = void 0;
const bson_1 = require("../bson");
const responses_1 = require("../cmap/wire_protocol/responses");
const error_1 = require("../error");
const command_1 = require("./command");
class ProfilingLevelResponse extends responses_1.MongoDBResponse {
    get was() {
        return this.get('was', bson_1.BSONType.int, true);
    }
}
/** @internal */
class ProfilingLevelOperation extends command_1.CommandOperation {
    constructor(db, options) {
        super(db, options);
        this.SERVER_COMMAND_RESPONSE_TYPE = ProfilingLevelResponse;
        this.options = options;
    }
    get commandName() {
        return 'profile';
    }
    buildCommandDocument(_connection) {
        return { profile: -1 };
    }
    handleOk(response) {
        if (response.ok === 1) {
            const was = response.was;
            if (was === 0)
                return 'off';
            if (was === 1)
                return 'slow_only';
            if (was === 2)
                return 'all';
            throw new error_1.MongoUnexpectedServerResponseError(`Illegal profiling level value ${was}`);
        }
        else {
            throw new error_1.MongoUnexpectedServerResponseError('Error with profile command');
        }
    }
}
exports.ProfilingLevelOperation = ProfilingLevelOperation;
//# sourceMappingURL=profiling_level.js.map