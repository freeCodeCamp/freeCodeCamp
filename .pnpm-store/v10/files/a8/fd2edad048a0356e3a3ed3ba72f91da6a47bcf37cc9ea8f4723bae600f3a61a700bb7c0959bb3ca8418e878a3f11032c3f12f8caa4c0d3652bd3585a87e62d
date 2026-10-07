"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReadPreference = getReadPreference;
exports.isSharded = isSharded;
const error_1 = require("../../error");
const read_preference_1 = require("../../read_preference");
const common_1 = require("../../sdam/common");
const topology_description_1 = require("../../sdam/topology_description");
function getReadPreference(options) {
    // Default to command version of the readPreference.
    let readPreference = options?.readPreference ?? read_preference_1.ReadPreference.primary;
    if (typeof readPreference === 'string') {
        readPreference = read_preference_1.ReadPreference.fromString(readPreference);
    }
    if (!(readPreference instanceof read_preference_1.ReadPreference)) {
        throw new error_1.MongoInvalidArgumentError('Option "readPreference" must be a ReadPreference instance');
    }
    return readPreference;
}
function isSharded(topologyOrServer) {
    if (topologyOrServer == null) {
        return false;
    }
    if (topologyOrServer.description && topologyOrServer.description.type === common_1.ServerType.Mongos) {
        return true;
    }
    // NOTE: This is incredibly inefficient, and should be removed once command construction
    // happens based on `Server` not `Topology`.
    if (topologyOrServer.description && topologyOrServer.description instanceof topology_description_1.TopologyDescription) {
        const servers = Array.from(topologyOrServer.description.servers.values());
        return servers.some((server) => server.type === common_1.ServerType.Mongos);
    }
    return false;
}
//# sourceMappingURL=shared.js.map