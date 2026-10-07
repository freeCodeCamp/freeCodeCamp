"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetProfilingLevelOperation = exports.ProfilingLevel = void 0;
const responses_1 = require("../cmap/wire_protocol/responses");
const error_1 = require("../error");
const utils_1 = require("../utils");
const command_1 = require("./command");
const levelValues = new Set(['off', 'slow_only', 'all']);
/** @public */
exports.ProfilingLevel = Object.freeze({
    off: 'off',
    slowOnly: 'slow_only',
    all: 'all'
});
/** @internal */
class SetProfilingLevelOperation extends command_1.CommandOperation {
    constructor(db, level, options) {
        super(db, options);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
        this.options = options;
        switch (level) {
            case exports.ProfilingLevel.off:
                this.profile = 0;
                break;
            case exports.ProfilingLevel.slowOnly:
                this.profile = 1;
                break;
            case exports.ProfilingLevel.all:
                this.profile = 2;
                break;
            default:
                this.profile = 0;
                break;
        }
        this.level = level;
    }
    get commandName() {
        return 'profile';
    }
    buildCommandDocument(_connection) {
        const level = this.level;
        if (!levelValues.has(level)) {
            // TODO(NODE-3483): Determine error to put here
            throw new error_1.MongoInvalidArgumentError(`Profiling level must be one of "${(0, utils_1.enumToString)(exports.ProfilingLevel)}"`);
        }
        return { profile: this.profile };
    }
    handleOk(_response) {
        return this.level;
    }
}
exports.SetProfilingLevelOperation = SetProfilingLevelOperation;
//# sourceMappingURL=set_profiling_level.js.map