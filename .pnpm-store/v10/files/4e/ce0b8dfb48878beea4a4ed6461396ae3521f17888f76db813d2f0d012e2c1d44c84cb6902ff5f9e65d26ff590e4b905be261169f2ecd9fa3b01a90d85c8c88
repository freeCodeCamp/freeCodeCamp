"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionPoolMetrics = void 0;
/** @internal */
class ConnectionPoolMetrics {
    constructor() {
        this.txnConnections = 0;
        this.cursorConnections = 0;
        this.otherConnections = 0;
    }
    /**
     * Mark a connection as pinned for a specific operation.
     */
    markPinned(pinType) {
        if (pinType === ConnectionPoolMetrics.TXN) {
            this.txnConnections += 1;
        }
        else if (pinType === ConnectionPoolMetrics.CURSOR) {
            this.cursorConnections += 1;
        }
        else {
            this.otherConnections += 1;
        }
    }
    /**
     * Unmark a connection as pinned for an operation.
     */
    markUnpinned(pinType) {
        if (pinType === ConnectionPoolMetrics.TXN) {
            this.txnConnections -= 1;
        }
        else if (pinType === ConnectionPoolMetrics.CURSOR) {
            this.cursorConnections -= 1;
        }
        else {
            this.otherConnections -= 1;
        }
    }
    /**
     * Return information about the cmap metrics as a string.
     */
    info(maxPoolSize) {
        return ('Timed out while checking out a connection from connection pool: ' +
            `maxPoolSize: ${maxPoolSize}, ` +
            `connections in use by cursors: ${this.cursorConnections}, ` +
            `connections in use by transactions: ${this.txnConnections}, ` +
            `connections in use by other operations: ${this.otherConnections}`);
    }
    /**
     * Reset the metrics to the initial values.
     */
    reset() {
        this.txnConnections = 0;
        this.cursorConnections = 0;
        this.otherConnections = 0;
    }
}
exports.ConnectionPoolMetrics = ConnectionPoolMetrics;
ConnectionPoolMetrics.TXN = 'txn';
ConnectionPoolMetrics.CURSOR = 'cursor';
ConnectionPoolMetrics.OTHER = 'other';
//# sourceMappingURL=metrics.js.map