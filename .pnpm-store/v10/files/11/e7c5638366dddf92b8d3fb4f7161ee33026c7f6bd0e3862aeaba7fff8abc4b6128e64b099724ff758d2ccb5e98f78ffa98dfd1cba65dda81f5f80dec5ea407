"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerHeartbeatFailedEvent = exports.ServerHeartbeatSucceededEvent = exports.ServerHeartbeatStartedEvent = exports.TopologyClosedEvent = exports.TopologyOpeningEvent = exports.TopologyDescriptionChangedEvent = exports.ServerClosedEvent = exports.ServerOpeningEvent = exports.ServerDescriptionChangedEvent = void 0;
const constants_1 = require("../constants");
/**
 * Emitted when server description changes, but does NOT include changes to the RTT.
 * @public
 * @category Event
 */
class ServerDescriptionChangedEvent {
    /** @internal */
    constructor(topologyId, address, previousDescription, newDescription) {
        this.name = constants_1.SERVER_DESCRIPTION_CHANGED;
        this.topologyId = topologyId;
        this.address = address;
        this.previousDescription = previousDescription;
        this.newDescription = newDescription;
    }
}
exports.ServerDescriptionChangedEvent = ServerDescriptionChangedEvent;
/**
 * Emitted when server is initialized.
 * @public
 * @category Event
 */
class ServerOpeningEvent {
    /** @internal */
    constructor(topologyId, address) {
        /** @internal */
        this.name = constants_1.SERVER_OPENING;
        this.topologyId = topologyId;
        this.address = address;
    }
}
exports.ServerOpeningEvent = ServerOpeningEvent;
/**
 * Emitted when server is closed.
 * @public
 * @category Event
 */
class ServerClosedEvent {
    /** @internal */
    constructor(topologyId, address) {
        /** @internal */
        this.name = constants_1.SERVER_CLOSED;
        this.topologyId = topologyId;
        this.address = address;
    }
}
exports.ServerClosedEvent = ServerClosedEvent;
/**
 * Emitted when topology description changes.
 * @public
 * @category Event
 */
class TopologyDescriptionChangedEvent {
    /** @internal */
    constructor(topologyId, previousDescription, newDescription) {
        /** @internal */
        this.name = constants_1.TOPOLOGY_DESCRIPTION_CHANGED;
        this.topologyId = topologyId;
        this.previousDescription = previousDescription;
        this.newDescription = newDescription;
    }
}
exports.TopologyDescriptionChangedEvent = TopologyDescriptionChangedEvent;
/**
 * Emitted when topology is initialized.
 * @public
 * @category Event
 */
class TopologyOpeningEvent {
    /** @internal */
    constructor(topologyId) {
        /** @internal */
        this.name = constants_1.TOPOLOGY_OPENING;
        this.topologyId = topologyId;
    }
}
exports.TopologyOpeningEvent = TopologyOpeningEvent;
/**
 * Emitted when topology is closed.
 * @public
 * @category Event
 */
class TopologyClosedEvent {
    /** @internal */
    constructor(topologyId) {
        /** @internal */
        this.name = constants_1.TOPOLOGY_CLOSED;
        this.topologyId = topologyId;
    }
}
exports.TopologyClosedEvent = TopologyClosedEvent;
/**
 * Emitted when the server monitor’s hello command is started - immediately before
 * the hello command is serialized into raw BSON and written to the socket.
 *
 * @public
 * @category Event
 */
class ServerHeartbeatStartedEvent {
    /** @internal */
    constructor(connectionId, awaited) {
        /** @internal */
        this.name = constants_1.SERVER_HEARTBEAT_STARTED;
        this.connectionId = connectionId;
        this.awaited = awaited;
    }
}
exports.ServerHeartbeatStartedEvent = ServerHeartbeatStartedEvent;
/**
 * Emitted when the server monitor’s hello succeeds.
 * @public
 * @category Event
 */
class ServerHeartbeatSucceededEvent {
    /** @internal */
    constructor(connectionId, duration, reply, awaited) {
        /** @internal */
        this.name = constants_1.SERVER_HEARTBEAT_SUCCEEDED;
        this.connectionId = connectionId;
        this.duration = duration;
        this.reply = reply ?? {};
        this.awaited = awaited;
    }
}
exports.ServerHeartbeatSucceededEvent = ServerHeartbeatSucceededEvent;
/**
 * Emitted when the server monitor’s hello fails, either with an “ok: 0” or a socket exception.
 * @public
 * @category Event
 */
class ServerHeartbeatFailedEvent {
    /** @internal */
    constructor(connectionId, duration, failure, awaited) {
        /** @internal */
        this.name = constants_1.SERVER_HEARTBEAT_FAILED;
        this.connectionId = connectionId;
        this.duration = duration;
        this.failure = failure;
        this.awaited = awaited;
    }
}
exports.ServerHeartbeatFailedEvent = ServerHeartbeatFailedEvent;
//# sourceMappingURL=events.js.map