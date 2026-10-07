"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerType = exports.TopologyType = exports.STATE_CONNECTED = exports.STATE_CONNECTING = exports.STATE_CLOSED = exports.STATE_CLOSING = void 0;
exports._advanceClusterTime = _advanceClusterTime;
// shared state names
exports.STATE_CLOSING = 'closing';
exports.STATE_CLOSED = 'closed';
exports.STATE_CONNECTING = 'connecting';
exports.STATE_CONNECTED = 'connected';
/**
 * An enumeration of topology types we know about
 * @public
 */
exports.TopologyType = Object.freeze({
    Single: 'Single',
    ReplicaSetNoPrimary: 'ReplicaSetNoPrimary',
    ReplicaSetWithPrimary: 'ReplicaSetWithPrimary',
    Sharded: 'Sharded',
    Unknown: 'Unknown',
    LoadBalanced: 'LoadBalanced'
});
/**
 * An enumeration of server types we know about
 * @public
 */
exports.ServerType = Object.freeze({
    Standalone: 'Standalone',
    Mongos: 'Mongos',
    PossiblePrimary: 'PossiblePrimary',
    RSPrimary: 'RSPrimary',
    RSSecondary: 'RSSecondary',
    RSArbiter: 'RSArbiter',
    RSOther: 'RSOther',
    RSGhost: 'RSGhost',
    Unknown: 'Unknown',
    LoadBalancer: 'LoadBalancer'
});
/** Shared function to determine clusterTime for a given topology or session */
function _advanceClusterTime(entity, $clusterTime) {
    if (entity.clusterTime == null) {
        entity.clusterTime = $clusterTime;
    }
    else {
        if ($clusterTime.clusterTime.greaterThan(entity.clusterTime.clusterTime)) {
            entity.clusterTime = $clusterTime;
        }
    }
}
//# sourceMappingURL=common.js.map