"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancellationToken = exports.TypedEventEmitter = void 0;
const events_1 = require("events");
const mongo_logger_1 = require("./mongo_logger");
const utils_1 = require("./utils");
/**
 * Typescript type safe event emitter
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
class TypedEventEmitter extends events_1.EventEmitter {
    /** @internal */
    emitAndLog(event, ...args) {
        this.emit(event, ...args);
        if (this.component)
            this.mongoLogger?.debug(this.component, args[0]);
    }
    /** @internal */
    emitAndLogHeartbeat(event, topologyId, serverConnectionId, ...args) {
        this.emit(event, ...args);
        if (this.component) {
            const loggableHeartbeatEvent = {
                topologyId: topologyId,
                serverConnectionId: serverConnectionId ?? null,
                ...args[0]
            };
            this.mongoLogger?.debug(this.component, loggableHeartbeatEvent);
        }
    }
    /** @internal */
    emitAndLogCommand(monitorCommands, event, databaseName, connectionEstablished, ...args) {
        if (monitorCommands) {
            this.emit(event, ...args);
        }
        if (connectionEstablished) {
            const loggableCommandEvent = {
                databaseName: databaseName,
                ...args[0]
            };
            this.mongoLogger?.debug(mongo_logger_1.MongoLoggableComponent.COMMAND, loggableCommandEvent);
        }
    }
}
exports.TypedEventEmitter = TypedEventEmitter;
/**
 * @public
 * @deprecated Will be removed in favor of `AbortSignal` in the next major release.
 */
class CancellationToken extends TypedEventEmitter {
    constructor(...args) {
        super(...args);
        this.on('error', utils_1.noop);
    }
}
exports.CancellationToken = CancellationToken;
//# sourceMappingURL=mongo_types.js.map