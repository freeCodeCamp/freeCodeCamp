"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaitQueueTimeoutError = exports.PoolClearedOnNetworkError = exports.PoolClearedError = exports.PoolClosedError = void 0;
const error_1 = require("../error");
/**
 * An error indicating a connection pool is closed
 * @category Error
 */
class PoolClosedError extends error_1.MongoDriverError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(pool) {
        super('Attempted to check out a connection from closed connection pool');
        this.address = pool.address;
    }
    get name() {
        return 'MongoPoolClosedError';
    }
}
exports.PoolClosedError = PoolClosedError;
/**
 * An error indicating a connection pool is currently paused
 * @category Error
 */
class PoolClearedError extends error_1.MongoNetworkError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(pool, message) {
        const errorMessage = message
            ? message
            : `Connection pool for ${pool.address} was cleared because another operation failed with: "${pool.serverError?.message}"`;
        super(errorMessage, pool.serverError ? { cause: pool.serverError } : undefined);
        this.address = pool.address;
        this.addErrorLabel(error_1.MongoErrorLabel.PoolRequstedRetry);
    }
    get name() {
        return 'MongoPoolClearedError';
    }
}
exports.PoolClearedError = PoolClearedError;
/**
 * An error indicating that a connection pool has been cleared after the monitor for that server timed out.
 * @category Error
 */
class PoolClearedOnNetworkError extends PoolClearedError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(pool) {
        super(pool, `Connection to ${pool.address} interrupted due to server monitor timeout`);
    }
    get name() {
        return 'PoolClearedOnNetworkError';
    }
}
exports.PoolClearedOnNetworkError = PoolClearedOnNetworkError;
/**
 * An error thrown when a request to check out a connection times out
 * @category Error
 */
class WaitQueueTimeoutError extends error_1.MongoDriverError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message, address) {
        super(message);
        this.address = address;
    }
    get name() {
        return 'MongoWaitQueueTimeoutError';
    }
}
exports.WaitQueueTimeoutError = WaitQueueTimeoutError;
//# sourceMappingURL=errors.js.map