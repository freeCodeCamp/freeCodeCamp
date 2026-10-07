"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerDescription = void 0;
exports.parseServerType = parseServerType;
exports.compareTopologyVersion = compareTopologyVersion;
const bson_1 = require("../bson");
const error_1 = require("../error");
const utils_1 = require("../utils");
const common_1 = require("./common");
const WRITABLE_SERVER_TYPES = new Set([
    common_1.ServerType.RSPrimary,
    common_1.ServerType.Standalone,
    common_1.ServerType.Mongos,
    common_1.ServerType.LoadBalancer
]);
const DATA_BEARING_SERVER_TYPES = new Set([
    common_1.ServerType.RSPrimary,
    common_1.ServerType.RSSecondary,
    common_1.ServerType.Mongos,
    common_1.ServerType.Standalone,
    common_1.ServerType.LoadBalancer
]);
/**
 * The client's view of a single server, based on the most recent hello outcome.
 *
 * Internal type, not meant to be directly instantiated
 * @public
 */
class ServerDescription {
    /**
     * Create a ServerDescription
     * @internal
     *
     * @param address - The address of the server
     * @param hello - An optional hello response for this server
     */
    constructor(address, hello, options = {}) {
        if (address == null || address === '') {
            throw new error_1.MongoRuntimeError('ServerDescription must be provided with a non-empty address');
        }
        this.address =
            typeof address === 'string'
                ? utils_1.HostAddress.fromString(address).toString() // Use HostAddress to normalize
                : address.toString();
        this.type = parseServerType(hello, options);
        this.hosts = hello?.hosts?.map((host) => host.toLowerCase()) ?? [];
        this.passives = hello?.passives?.map((host) => host.toLowerCase()) ?? [];
        this.arbiters = hello?.arbiters?.map((host) => host.toLowerCase()) ?? [];
        this.tags = hello?.tags ?? {};
        this.minWireVersion = hello?.minWireVersion ?? 0;
        this.maxWireVersion = hello?.maxWireVersion ?? 0;
        this.roundTripTime = options?.roundTripTime ?? -1;
        this.minRoundTripTime = options?.minRoundTripTime ?? 0;
        this.lastUpdateTime = (0, utils_1.now)();
        this.lastWriteDate = hello?.lastWrite?.lastWriteDate ?? 0;
        // NOTE: This actually builds the stack string instead of holding onto the getter and all its
        // associated references. This is done to prevent a memory leak.
        this.error = options.error ?? null;
        this.error?.stack;
        // TODO(NODE-2674): Preserve int64 sent from MongoDB
        this.topologyVersion = this.error?.topologyVersion ?? hello?.topologyVersion ?? null;
        this.setName = hello?.setName ?? null;
        this.setVersion = hello?.setVersion ?? null;
        this.electionId = hello?.electionId ?? null;
        this.logicalSessionTimeoutMinutes = hello?.logicalSessionTimeoutMinutes ?? null;
        this.maxMessageSizeBytes = hello?.maxMessageSizeBytes ?? null;
        this.maxWriteBatchSize = hello?.maxWriteBatchSize ?? null;
        this.maxBsonObjectSize = hello?.maxBsonObjectSize ?? null;
        this.primary = hello?.primary ?? null;
        this.me = hello?.me?.toLowerCase() ?? null;
        this.$clusterTime = hello?.$clusterTime ?? null;
        this.iscryptd = Boolean(hello?.iscryptd);
    }
    get hostAddress() {
        return utils_1.HostAddress.fromString(this.address);
    }
    get allHosts() {
        return this.hosts.concat(this.arbiters).concat(this.passives);
    }
    /** Is this server available for reads*/
    get isReadable() {
        return this.type === common_1.ServerType.RSSecondary || this.isWritable;
    }
    /** Is this server data bearing */
    get isDataBearing() {
        return DATA_BEARING_SERVER_TYPES.has(this.type);
    }
    /** Is this server available for writes */
    get isWritable() {
        return WRITABLE_SERVER_TYPES.has(this.type);
    }
    get host() {
        const chopLength = `:${this.port}`.length;
        return this.address.slice(0, -chopLength);
    }
    get port() {
        const port = this.address.split(':').pop();
        return port ? Number.parseInt(port, 10) : 27017;
    }
    /**
     * Determines if another `ServerDescription` is equal to this one per the rules defined in the SDAM specification.
     * @see https://github.com/mongodb/specifications/blob/master/source/server-discovery-and-monitoring/server-discovery-and-monitoring.md
     */
    equals(other) {
        // Despite using the comparator that would determine a nullish topologyVersion as greater than
        // for equality we should only always perform direct equality comparison
        const topologyVersionsEqual = this.topologyVersion === other?.topologyVersion ||
            compareTopologyVersion(this.topologyVersion, other?.topologyVersion) === 0;
        const electionIdsEqual = this.electionId != null && other?.electionId != null
            ? (0, utils_1.compareObjectId)(this.electionId, other.electionId) === 0
            : this.electionId === other?.electionId;
        return (other != null &&
            other.iscryptd === this.iscryptd &&
            (0, utils_1.errorStrictEqual)(this.error, other.error) &&
            this.type === other.type &&
            this.minWireVersion === other.minWireVersion &&
            (0, utils_1.arrayStrictEqual)(this.hosts, other.hosts) &&
            tagsStrictEqual(this.tags, other.tags) &&
            this.setName === other.setName &&
            this.setVersion === other.setVersion &&
            electionIdsEqual &&
            this.primary === other.primary &&
            this.logicalSessionTimeoutMinutes === other.logicalSessionTimeoutMinutes &&
            topologyVersionsEqual);
    }
}
exports.ServerDescription = ServerDescription;
// Parses a `hello` message and determines the server type
function parseServerType(hello, options) {
    if (options?.loadBalanced) {
        return common_1.ServerType.LoadBalancer;
    }
    if (!hello || !hello.ok) {
        return common_1.ServerType.Unknown;
    }
    if (hello.isreplicaset) {
        return common_1.ServerType.RSGhost;
    }
    if (hello.msg && hello.msg === 'isdbgrid') {
        return common_1.ServerType.Mongos;
    }
    if (hello.setName) {
        if (hello.hidden) {
            return common_1.ServerType.RSOther;
        }
        else if (hello.isWritablePrimary) {
            return common_1.ServerType.RSPrimary;
        }
        else if (hello.secondary) {
            return common_1.ServerType.RSSecondary;
        }
        else if (hello.arbiterOnly) {
            return common_1.ServerType.RSArbiter;
        }
        else {
            return common_1.ServerType.RSOther;
        }
    }
    return common_1.ServerType.Standalone;
}
function tagsStrictEqual(tags, tags2) {
    const tagsKeys = Object.keys(tags);
    const tags2Keys = Object.keys(tags2);
    return (tagsKeys.length === tags2Keys.length &&
        tagsKeys.every((key) => tags2[key] === tags[key]));
}
/**
 * Compares two topology versions.
 *
 * 1. If the response topologyVersion is unset or the ServerDescription's
 *    topologyVersion is null, the client MUST assume the response is more recent.
 * 1. If the response's topologyVersion.processId is not equal to the
 *    ServerDescription's, the client MUST assume the response is more recent.
 * 1. If the response's topologyVersion.processId is equal to the
 *    ServerDescription's, the client MUST use the counter field to determine
 *    which topologyVersion is more recent.
 *
 * ```ts
 * currentTv <   newTv === -1
 * currentTv === newTv === 0
 * currentTv >   newTv === 1
 * ```
 */
function compareTopologyVersion(currentTv, newTv) {
    if (currentTv == null || newTv == null) {
        return -1;
    }
    if (!currentTv.processId.equals(newTv.processId)) {
        return -1;
    }
    // TODO(NODE-2674): Preserve int64 sent from MongoDB
    const currentCounter = typeof currentTv.counter === 'bigint'
        ? bson_1.Long.fromBigInt(currentTv.counter)
        : bson_1.Long.isLong(currentTv.counter)
            ? currentTv.counter
            : bson_1.Long.fromNumber(currentTv.counter);
    const newCounter = typeof newTv.counter === 'bigint'
        ? bson_1.Long.fromBigInt(newTv.counter)
        : bson_1.Long.isLong(newTv.counter)
            ? newTv.counter
            : bson_1.Long.fromNumber(newTv.counter);
    return currentCounter.compare(newCounter);
}
//# sourceMappingURL=server_description.js.map