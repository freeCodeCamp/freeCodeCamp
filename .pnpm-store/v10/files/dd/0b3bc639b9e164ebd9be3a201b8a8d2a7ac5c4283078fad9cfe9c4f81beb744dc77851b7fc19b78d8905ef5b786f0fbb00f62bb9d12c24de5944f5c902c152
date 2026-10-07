"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunCursorCommandOperation = exports.RunCommandOperation = void 0;
const responses_1 = require("../cmap/wire_protocol/responses");
const operation_1 = require("../operations/operation");
/** @internal */
class RunCommandOperation extends operation_1.AbstractOperation {
    constructor(namespace, command, options) {
        super(options);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
        this.command = command;
        this.options = options;
        this.ns = namespace.withCollection('$cmd');
    }
    get commandName() {
        return 'runCommand';
    }
    buildCommand(_connection, _session) {
        return this.command;
    }
    buildOptions(timeoutContext) {
        return {
            ...this.options,
            session: this.session,
            timeoutContext,
            signal: this.options.signal,
            readPreference: this.options.readPreference
        };
    }
}
exports.RunCommandOperation = RunCommandOperation;
/**
 * @internal
 *
 * A specialized subclass of RunCommandOperation for cursor-creating commands.
 */
class RunCursorCommandOperation extends RunCommandOperation {
    constructor() {
        super(...arguments);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.CursorResponse;
    }
    handleOk(response) {
        return response;
    }
}
exports.RunCursorCommandOperation = RunCursorCommandOperation;
//# sourceMappingURL=run_command.js.map