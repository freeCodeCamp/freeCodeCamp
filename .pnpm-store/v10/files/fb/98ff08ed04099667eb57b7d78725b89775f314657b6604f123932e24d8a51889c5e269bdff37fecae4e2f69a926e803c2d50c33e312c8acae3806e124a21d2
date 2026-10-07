"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopologyDescription = void 0;
const bson_1 = require("../bson");
const WIRE_CONSTANTS = require("../cmap/wire_protocol/constants");
const error_1 = require("../error");
const utils_1 = require("../utils");
const common_1 = require("./common");
const server_description_1 = require("./server_description");
// constants related to compatibility checks
const MIN_SUPPORTED_SERVER_VERSION = WIRE_CONSTANTS.MIN_SUPPORTED_SERVER_VERSION;
const MAX_SUPPORTED_SERVER_VERSION = WIRE_CONSTANTS.MAX_SUPPORTED_SERVER_VERSION;
const MIN_SUPPORTED_WIRE_VERSION = WIRE_CONSTANTS.MIN_SUPPORTED_WIRE_VERSION;
const MAX_SUPPORTED_WIRE_VERSION = WIRE_CONSTANTS.MAX_SUPPORTED_WIRE_VERSION;
const MONGOS_OR_UNKNOWN = new Set([common_1.ServerType.Mongos, common_1.ServerType.Unknown]);
const MONGOS_OR_STANDALONE = new Set([common_1.ServerType.Mongos, common_1.ServerType.Standalone]);
const NON_PRIMARY_RS_MEMBERS = new Set([
    common_1.ServerType.RSSecondary,
    common_1.ServerType.RSArbiter,
    common_1.ServerType.RSOther
]);
/**
 * Representation of a deployment of servers
 * @public
 */
class TopologyDescription {
    /**
     * Create a TopologyDescription
     */
    constructor(topologyType, serverDescriptions = null, setName = null, maxSetVersion = null, maxElectionId = null, commonWireVersion = null, options = null) {
        options = options ?? {};
        this.type = topologyType ?? common_1.TopologyType.Unknown;
        this.servers = serverDescriptions ?? new Map();
        this.stale = false;
        this.compatible = true;
        this.heartbeatFrequencyMS = options.heartbeatFrequencyMS ?? 0;
        this.localThresholdMS = options.localThresholdMS ?? 15;
        this.setName = setName ?? null;
        this.maxElectionId = maxElectionId ?? null;
        this.maxSetVersion = maxSetVersion ?? null;
        this.commonWireVersion = commonWireVersion ?? 0;
        // determine server compatibility
        for (const serverDescription of this.servers.values()) {
            // Load balancer mode is always compatible.
            if (serverDescription.type === common_1.ServerType.Unknown ||
                serverDescription.type === common_1.ServerType.LoadBalancer) {
                continue;
            }
            if (serverDescription.minWireVersion > MAX_SUPPORTED_WIRE_VERSION) {
                this.compatible = false;
                this.compatibilityError = `Server at ${serverDescription.address} requires wire version ${serverDescription.minWireVersion}, but this version of the driver only supports up to ${MAX_SUPPORTED_WIRE_VERSION} (MongoDB ${MAX_SUPPORTED_SERVER_VERSION})`;
            }
            if (serverDescription.maxWireVersion < MIN_SUPPORTED_WIRE_VERSION) {
                this.compatible = false;
                this.compatibilityError = `Server at ${serverDescription.address} reports wire version ${serverDescription.maxWireVersion}, but this version of the driver requires at least ${MIN_SUPPORTED_WIRE_VERSION} (MongoDB ${MIN_SUPPORTED_SERVER_VERSION}).`;
                break;
            }
        }
        // Whenever a client updates the TopologyDescription from a hello response, it MUST set
        // TopologyDescription.logicalSessionTimeoutMinutes to the smallest logicalSessionTimeoutMinutes
        // value among ServerDescriptions of all data-bearing server types. If any have a null
        // logicalSessionTimeoutMinutes, then TopologyDescription.logicalSessionTimeoutMinutes MUST be
        // set to null.
        this.logicalSessionTimeoutMinutes = null;
        for (const [, server] of this.servers) {
            if (server.isReadable) {
                if (server.logicalSessionTimeoutMinutes == null) {
                    // If any of the servers have a null logicalSessionsTimeout, then the whole topology does
                    this.logicalSessionTimeoutMinutes = null;
                    break;
                }
                if (this.logicalSessionTimeoutMinutes == null) {
                    // First server with a non null logicalSessionsTimeout
                    this.logicalSessionTimeoutMinutes = server.logicalSessionTimeoutMinutes;
                    continue;
                }
                // Always select the smaller of the:
                // current server logicalSessionsTimeout and the topologies logicalSessionsTimeout
                this.logicalSessionTimeoutMinutes = Math.min(this.logicalSessionTimeoutMinutes, server.logicalSessionTimeoutMinutes);
            }
        }
    }
    /**
     * Returns a new TopologyDescription based on the SrvPollingEvent
     * @internal
     */
    updateFromSrvPollingEvent(ev, srvMaxHosts = 0) {
        /** The SRV addresses defines the set of addresses we should be using */
        const incomingHostnames = ev.hostnames();
        const currentHostnames = new Set(this.servers.keys());
        const hostnamesToAdd = new Set(incomingHostnames);
        const hostnamesToRemove = new Set();
        for (const hostname of currentHostnames) {
            // filter hostnamesToAdd (made from incomingHostnames) down to what is *not* present in currentHostnames
            hostnamesToAdd.delete(hostname);
            if (!incomingHostnames.has(hostname)) {
                // If the SRV Records no longer include this hostname
                // we have to stop using it
                hostnamesToRemove.add(hostname);
            }
        }
        if (hostnamesToAdd.size === 0 && hostnamesToRemove.size === 0) {
            // No new hosts to add and none to remove
            return this;
        }
        const serverDescriptions = new Map(this.servers);
        for (const removedHost of hostnamesToRemove) {
            serverDescriptions.delete(removedHost);
        }
        if (hostnamesToAdd.size > 0) {
            if (srvMaxHosts === 0) {
                // Add all!
                for (const hostToAdd of hostnamesToAdd) {
                    serverDescriptions.set(hostToAdd, new server_description_1.ServerDescription(hostToAdd));
                }
            }
            else if (serverDescriptions.size < srvMaxHosts) {
                // Add only the amount needed to get us back to srvMaxHosts
                const selectedHosts = (0, utils_1.shuffle)(hostnamesToAdd, srvMaxHosts - serverDescriptions.size);
                for (const selectedHostToAdd of selectedHosts) {
                    serverDescriptions.set(selectedHostToAdd, new server_description_1.ServerDescription(selectedHostToAdd));
                }
            }
        }
        return new TopologyDescription(this.type, serverDescriptions, this.setName, this.maxSetVersion, this.maxElectionId, this.commonWireVersion, { heartbeatFrequencyMS: this.heartbeatFrequencyMS, localThresholdMS: this.localThresholdMS });
    }
    /**
     * Returns a copy of this description updated with a given ServerDescription
     * @internal
     */
    update(serverDescription) {
        const address = serverDescription.address;
        // potentially mutated values
        let { type: topologyType, setName, maxSetVersion, maxElectionId, commonWireVersion } = this;
        const serverType = serverDescription.type;
        const serverDescriptions = new Map(this.servers);
        // update common wire version
        if (serverDescription.maxWireVersion !== 0) {
            if (commonWireVersion == null) {
                commonWireVersion = serverDescription.maxWireVersion;
            }
            else {
                commonWireVersion = Math.min(commonWireVersion, serverDescription.maxWireVersion);
            }
        }
        if (typeof serverDescription.setName === 'string' &&
            typeof setName === 'string' &&
            serverDescription.setName !== setName) {
            if (topologyType === common_1.TopologyType.Single) {
                // "Single" Topology with setName mismatch is direct connection usage, mark unknown do not remove
                serverDescription = new server_description_1.ServerDescription(address);
            }
            else {
                serverDescriptions.delete(address);
            }
        }
        // update the actual server description
        serverDescriptions.set(address, serverDescription);
        if (topologyType === common_1.TopologyType.Single) {
            // once we are defined as single, that never changes
            return new TopologyDescription(common_1.TopologyType.Single, serverDescriptions, setName, maxSetVersion, maxElectionId, commonWireVersion, { heartbeatFrequencyMS: this.heartbeatFrequencyMS, localThresholdMS: this.localThresholdMS });
        }
        if (topologyType === common_1.TopologyType.Unknown) {
            if (serverType === common_1.ServerType.Standalone && this.servers.size !== 1) {
                serverDescriptions.delete(address);
            }
            else {
                topologyType = topologyTypeForServerType(serverType);
            }
        }
        if (topologyType === common_1.TopologyType.Sharded) {
            if (!MONGOS_OR_UNKNOWN.has(serverType)) {
                serverDescriptions.delete(address);
            }
        }
        if (topologyType === common_1.TopologyType.ReplicaSetNoPrimary) {
            if (MONGOS_OR_STANDALONE.has(serverType)) {
                serverDescriptions.delete(address);
            }
            if (serverType === common_1.ServerType.RSPrimary) {
                const result = updateRsFromPrimary(serverDescriptions, serverDescription, setName, maxSetVersion, maxElectionId);
                topologyType = result[0];
                setName = result[1];
                maxSetVersion = result[2];
                maxElectionId = result[3];
            }
            else if (NON_PRIMARY_RS_MEMBERS.has(serverType)) {
                const result = updateRsNoPrimaryFromMember(serverDescriptions, serverDescription, setName);
                topologyType = result[0];
                setName = result[1];
            }
        }
        if (topologyType === common_1.TopologyType.ReplicaSetWithPrimary) {
            if (MONGOS_OR_STANDALONE.has(serverType)) {
                serverDescriptions.delete(address);
                topologyType = checkHasPrimary(serverDescriptions);
            }
            else if (serverType === common_1.ServerType.RSPrimary) {
                const result = updateRsFromPrimary(serverDescriptions, serverDescription, setName, maxSetVersion, maxElectionId);
                topologyType = result[0];
                setName = result[1];
                maxSetVersion = result[2];
                maxElectionId = result[3];
            }
            else if (NON_PRIMARY_RS_MEMBERS.has(serverType)) {
                topologyType = updateRsWithPrimaryFromMember(serverDescriptions, serverDescription, setName);
            }
            else {
                topologyType = checkHasPrimary(serverDescriptions);
            }
        }
        return new TopologyDescription(topologyType, serverDescriptions, setName, maxSetVersion, maxElectionId, commonWireVersion, { heartbeatFrequencyMS: this.heartbeatFrequencyMS, localThresholdMS: this.localThresholdMS });
    }
    get error() {
        const descriptionsWithError = Array.from(this.servers.values()).filter((sd) => sd.error);
        if (descriptionsWithError.length > 0) {
            return descriptionsWithError[0].error;
        }
        return null;
    }
    /**
     * Determines if the topology description has any known servers
     */
    get hasKnownServers() {
        return Array.from(this.servers.values()).some((sd) => sd.type !== common_1.ServerType.Unknown);
    }
    /**
     * Determines if this topology description has a data-bearing server available.
     */
    get hasDataBearingServers() {
        return Array.from(this.servers.values()).some((sd) => sd.isDataBearing);
    }
    /**
     * Determines if the topology has a definition for the provided address
     * @internal
     */
    hasServer(address) {
        return this.servers.has(address);
    }
    /**
     * Returns a JSON-serializable representation of the TopologyDescription.  This is primarily
     * intended for use with JSON.stringify().
     *
     * This method will not throw.
     */
    toJSON() {
        return bson_1.EJSON.serialize(this);
    }
}
exports.TopologyDescription = TopologyDescription;
function topologyTypeForServerType(serverType) {
    switch (serverType) {
        case common_1.ServerType.Standalone:
            return common_1.TopologyType.Single;
        case common_1.ServerType.Mongos:
            return common_1.TopologyType.Sharded;
        case common_1.ServerType.RSPrimary:
            return common_1.TopologyType.ReplicaSetWithPrimary;
        case common_1.ServerType.RSOther:
        case common_1.ServerType.RSSecondary:
            return common_1.TopologyType.ReplicaSetNoPrimary;
        default:
            return common_1.TopologyType.Unknown;
    }
}
function updateRsFromPrimary(serverDescriptions, serverDescription, setName = null, maxSetVersion = null, maxElectionId = null) {
    const setVersionElectionIdMismatch = (serverDescription, maxSetVersion, maxElectionId) => {
        return (`primary marked stale due to electionId/setVersion mismatch:` +
            ` server setVersion: ${serverDescription.setVersion},` +
            ` server electionId: ${serverDescription.electionId},` +
            ` topology setVersion: ${maxSetVersion},` +
            ` topology electionId: ${maxElectionId}`);
    };
    setName = setName || serverDescription.setName;
    if (setName !== serverDescription.setName) {
        serverDescriptions.delete(serverDescription.address);
        return [checkHasPrimary(serverDescriptions), setName, maxSetVersion, maxElectionId];
    }
    if (serverDescription.maxWireVersion >= 17) {
        const electionIdComparison = (0, utils_1.compareObjectId)(maxElectionId, serverDescription.electionId);
        const maxElectionIdIsEqual = electionIdComparison === 0;
        const maxElectionIdIsLess = electionIdComparison === -1;
        const maxSetVersionIsLessOrEqual = (maxSetVersion ?? -1) <= (serverDescription.setVersion ?? -1);
        if (maxElectionIdIsLess || (maxElectionIdIsEqual && maxSetVersionIsLessOrEqual)) {
            // The reported electionId was greater
            // or the electionId was equal and reported setVersion was greater
            // Always update both values, they are a tuple
            maxElectionId = serverDescription.electionId;
            maxSetVersion = serverDescription.setVersion;
        }
        else {
            // Stale primary
            // replace serverDescription with a default ServerDescription of type "Unknown"
            serverDescriptions.set(serverDescription.address, new server_description_1.ServerDescription(serverDescription.address, undefined, {
                error: new error_1.MongoStalePrimaryError(setVersionElectionIdMismatch(serverDescription, maxSetVersion, maxElectionId))
            }));
            return [checkHasPrimary(serverDescriptions), setName, maxSetVersion, maxElectionId];
        }
    }
    else {
        const electionId = serverDescription.electionId ? serverDescription.electionId : null;
        if (serverDescription.setVersion && electionId) {
            if (maxSetVersion && maxElectionId) {
                if (maxSetVersion > serverDescription.setVersion ||
                    (0, utils_1.compareObjectId)(maxElectionId, electionId) > 0) {
                    // this primary is stale, we must remove it
                    serverDescriptions.set(serverDescription.address, new server_description_1.ServerDescription(serverDescription.address, undefined, {
                        error: new error_1.MongoStalePrimaryError(setVersionElectionIdMismatch(serverDescription, maxSetVersion, maxElectionId))
                    }));
                    return [checkHasPrimary(serverDescriptions), setName, maxSetVersion, maxElectionId];
                }
            }
            maxElectionId = serverDescription.electionId;
        }
        if (serverDescription.setVersion != null &&
            (maxSetVersion == null || serverDescription.setVersion > maxSetVersion)) {
            maxSetVersion = serverDescription.setVersion;
        }
    }
    // We've heard from the primary. Is it the same primary as before?
    for (const [address, server] of serverDescriptions) {
        if (server.type === common_1.ServerType.RSPrimary && server.address !== serverDescription.address) {
            // Reset old primary's type to Unknown.
            serverDescriptions.set(address, new server_description_1.ServerDescription(server.address, undefined, {
                error: new error_1.MongoStalePrimaryError('primary marked stale due to discovery of newer primary')
            }));
            // There can only be one primary
            break;
        }
    }
    // Discover new hosts from this primary's response.
    serverDescription.allHosts.forEach((address) => {
        if (!serverDescriptions.has(address)) {
            serverDescriptions.set(address, new server_description_1.ServerDescription(address));
        }
    });
    // Remove hosts not in the response.
    const currentAddresses = Array.from(serverDescriptions.keys());
    const responseAddresses = serverDescription.allHosts;
    currentAddresses
        .filter((addr) => responseAddresses.indexOf(addr) === -1)
        .forEach((address) => {
        serverDescriptions.delete(address);
    });
    return [checkHasPrimary(serverDescriptions), setName, maxSetVersion, maxElectionId];
}
function updateRsWithPrimaryFromMember(serverDescriptions, serverDescription, setName = null) {
    if (setName == null) {
        // TODO(NODE-3483): should be an appropriate runtime error
        throw new error_1.MongoRuntimeError('Argument "setName" is required if connected to a replica set');
    }
    if (setName !== serverDescription.setName ||
        (serverDescription.me && serverDescription.address !== serverDescription.me)) {
        serverDescriptions.delete(serverDescription.address);
    }
    return checkHasPrimary(serverDescriptions);
}
function updateRsNoPrimaryFromMember(serverDescriptions, serverDescription, setName = null) {
    const topologyType = common_1.TopologyType.ReplicaSetNoPrimary;
    setName = setName ?? serverDescription.setName;
    if (setName !== serverDescription.setName) {
        serverDescriptions.delete(serverDescription.address);
        return [topologyType, setName];
    }
    serverDescription.allHosts.forEach((address) => {
        if (!serverDescriptions.has(address)) {
            serverDescriptions.set(address, new server_description_1.ServerDescription(address));
        }
    });
    if (serverDescription.me && serverDescription.address !== serverDescription.me) {
        serverDescriptions.delete(serverDescription.address);
    }
    return [topologyType, setName];
}
function checkHasPrimary(serverDescriptions) {
    for (const serverDescription of serverDescriptions.values()) {
        if (serverDescription.type === common_1.ServerType.RSPrimary) {
            return common_1.TopologyType.ReplicaSetWithPrimary;
        }
    }
    return common_1.TopologyType.ReplicaSetNoPrimary;
}
//# sourceMappingURL=topology_description.js.map