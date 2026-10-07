"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionPoolClearedEvent = exports.ConnectionCheckedInEvent = exports.ConnectionCheckedOutEvent = exports.ConnectionCheckOutFailedEvent = exports.ConnectionCheckOutStartedEvent = exports.ConnectionClosedEvent = exports.ConnectionReadyEvent = exports.ConnectionCreatedEvent = exports.ConnectionPoolClosedEvent = exports.ConnectionPoolReadyEvent = exports.ConnectionPoolCreatedEvent = exports.ConnectionPoolMonitoringEvent = void 0;
const constants_1 = require("../constants");
const utils_1 = require("../utils");
/**
 * The base export class for all monitoring events published from the connection pool
 * @public
 * @category Event
 */
class ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool) {
        this.time = new Date();
        this.address = pool.address;
    }
}
exports.ConnectionPoolMonitoringEvent = ConnectionPoolMonitoringEvent;
/**
 * An event published when a connection pool is created
 * @public
 * @category Event
 */
class ConnectionPoolCreatedEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool) {
        super(pool);
        /** @internal */
        this.name = constants_1.CONNECTION_POOL_CREATED;
        const { maxConnecting, maxPoolSize, minPoolSize, maxIdleTimeMS, waitQueueTimeoutMS } = pool.options;
        this.options = { maxConnecting, maxPoolSize, minPoolSize, maxIdleTimeMS, waitQueueTimeoutMS };
    }
}
exports.ConnectionPoolCreatedEvent = ConnectionPoolCreatedEvent;
/**
 * An event published when a connection pool is ready
 * @public
 * @category Event
 */
class ConnectionPoolReadyEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool) {
        super(pool);
        /** @internal */
        this.name = constants_1.CONNECTION_POOL_READY;
    }
}
exports.ConnectionPoolReadyEvent = ConnectionPoolReadyEvent;
/**
 * An event published when a connection pool is closed
 * @public
 * @category Event
 */
class ConnectionPoolClosedEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool) {
        super(pool);
        /** @internal */
        this.name = constants_1.CONNECTION_POOL_CLOSED;
    }
}
exports.ConnectionPoolClosedEvent = ConnectionPoolClosedEvent;
/**
 * An event published when a connection pool creates a new connection
 * @public
 * @category Event
 */
class ConnectionCreatedEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool, connection) {
        super(pool);
        /** @internal */
        this.name = constants_1.CONNECTION_CREATED;
        this.connectionId = connection.id;
    }
}
exports.ConnectionCreatedEvent = ConnectionCreatedEvent;
/**
 * An event published when a connection is ready for use
 * @public
 * @category Event
 */
class ConnectionReadyEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool, connection, connectionCreatedEventTime) {
        super(pool);
        /** @internal */
        this.name = constants_1.CONNECTION_READY;
        this.durationMS = (0, utils_1.now)() - connectionCreatedEventTime;
        this.connectionId = connection.id;
    }
}
exports.ConnectionReadyEvent = ConnectionReadyEvent;
/**
 * An event published when a connection is closed
 * @public
 * @category Event
 */
class ConnectionClosedEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool, connection, reason, error) {
        super(pool);
        /** @internal */
        this.name = constants_1.CONNECTION_CLOSED;
        this.connectionId = connection.id;
        this.reason = reason;
        this.serviceId = connection.serviceId;
        this.error = error ?? null;
    }
}
exports.ConnectionClosedEvent = ConnectionClosedEvent;
/**
 * An event published when a request to check a connection out begins
 * @public
 * @category Event
 */
class ConnectionCheckOutStartedEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool) {
        super(pool);
        /** @internal */
        this.name = constants_1.CONNECTION_CHECK_OUT_STARTED;
    }
}
exports.ConnectionCheckOutStartedEvent = ConnectionCheckOutStartedEvent;
/**
 * An event published when a request to check a connection out fails
 * @public
 * @category Event
 */
class ConnectionCheckOutFailedEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool, reason, checkoutTime, error) {
        super(pool);
        /** @internal */
        this.name = constants_1.CONNECTION_CHECK_OUT_FAILED;
        this.durationMS = (0, utils_1.now)() - checkoutTime;
        this.reason = reason;
        this.error = error;
    }
}
exports.ConnectionCheckOutFailedEvent = ConnectionCheckOutFailedEvent;
/**
 * An event published when a connection is checked out of the connection pool
 * @public
 * @category Event
 */
class ConnectionCheckedOutEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool, connection, checkoutTime) {
        super(pool);
        /** @internal */
        this.name = constants_1.CONNECTION_CHECKED_OUT;
        this.durationMS = (0, utils_1.now)() - checkoutTime;
        this.connectionId = connection.id;
    }
}
exports.ConnectionCheckedOutEvent = ConnectionCheckedOutEvent;
/**
 * An event published when a connection is checked into the connection pool
 * @public
 * @category Event
 */
class ConnectionCheckedInEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool, connection) {
        super(pool);
        /** @internal */
        this.name = constants_1.CONNECTION_CHECKED_IN;
        this.connectionId = connection.id;
    }
}
exports.ConnectionCheckedInEvent = ConnectionCheckedInEvent;
/**
 * An event published when a connection pool is cleared
 * @public
 * @category Event
 */
class ConnectionPoolClearedEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool, options = {}) {
        super(pool);
        /** @internal */
        this.name = constants_1.CONNECTION_POOL_CLEARED;
        this.serviceId = options.serviceId;
        this.interruptInUseConnections = options.interruptInUseConnections;
    }
}
exports.ConnectionPoolClearedEvent = ConnectionPoolClearedEvent;
//# sourceMappingURL=connection_pool_events.js.map