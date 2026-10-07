"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaitingForSuitableServerEvent = exports.ServerSelectionSucceededEvent = exports.ServerSelectionFailedEvent = exports.ServerSelectionStartedEvent = exports.ServerSelectionEvent = void 0;
const utils_1 = require(".././utils");
const constants_1 = require("../constants");
/**
 * The base export class for all logs published from server selection
 * @internal
 * @category Log Type
 */
class ServerSelectionEvent {
    /** @internal */
    constructor(selector, topologyDescription, operation) {
        this.selector = selector;
        this.operation = operation;
        this.topologyDescription = topologyDescription;
    }
}
exports.ServerSelectionEvent = ServerSelectionEvent;
/**
 * An event published when server selection starts
 * @internal
 * @category Event
 */
class ServerSelectionStartedEvent extends ServerSelectionEvent {
    /** @internal */
    constructor(selector, topologyDescription, operation) {
        super(selector, topologyDescription, operation);
        /** @internal */
        this.name = constants_1.SERVER_SELECTION_STARTED;
        this.message = 'Server selection started';
    }
}
exports.ServerSelectionStartedEvent = ServerSelectionStartedEvent;
/**
 * An event published when a server selection fails
 * @internal
 * @category Event
 */
class ServerSelectionFailedEvent extends ServerSelectionEvent {
    /** @internal */
    constructor(selector, topologyDescription, error, operation) {
        super(selector, topologyDescription, operation);
        /** @internal */
        this.name = constants_1.SERVER_SELECTION_FAILED;
        this.message = 'Server selection failed';
        this.failure = error;
    }
}
exports.ServerSelectionFailedEvent = ServerSelectionFailedEvent;
/**
 * An event published when server selection succeeds
 * @internal
 * @category Event
 */
class ServerSelectionSucceededEvent extends ServerSelectionEvent {
    /** @internal */
    constructor(selector, topologyDescription, address, operation) {
        super(selector, topologyDescription, operation);
        /** @internal */
        this.name = constants_1.SERVER_SELECTION_SUCCEEDED;
        this.message = 'Server selection succeeded';
        const { host, port } = utils_1.HostAddress.fromString(address).toHostPort();
        this.serverHost = host;
        this.serverPort = port;
    }
}
exports.ServerSelectionSucceededEvent = ServerSelectionSucceededEvent;
/**
 * An event published when server selection is waiting for a suitable server to become available
 * @internal
 * @category Event
 */
class WaitingForSuitableServerEvent extends ServerSelectionEvent {
    /** @internal */
    constructor(selector, topologyDescription, remainingTimeMS, operation) {
        super(selector, topologyDescription, operation);
        /** @internal */
        this.name = constants_1.WAITING_FOR_SUITABLE_SERVER;
        this.message = 'Waiting for suitable server to become available';
        this.remainingTimeMS = remainingTimeMS;
    }
}
exports.WaitingForSuitableServerEvent = WaitingForSuitableServerEvent;
//# sourceMappingURL=server_selection_events.js.map