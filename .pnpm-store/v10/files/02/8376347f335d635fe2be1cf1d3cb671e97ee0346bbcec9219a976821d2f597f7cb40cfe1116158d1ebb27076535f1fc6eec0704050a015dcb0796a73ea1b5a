"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerCapabilities = exports.Topology = void 0;
const connection_string_1 = require("../connection_string");
const constants_1 = require("../constants");
const error_1 = require("../error");
const mongo_logger_1 = require("../mongo_logger");
const mongo_types_1 = require("../mongo_types");
const read_preference_1 = require("../read_preference");
const timeout_1 = require("../timeout");
const utils_1 = require("../utils");
const common_1 = require("./common");
const events_1 = require("./events");
const server_1 = require("./server");
const server_description_1 = require("./server_description");
const server_selection_1 = require("./server_selection");
const server_selection_events_1 = require("./server_selection_events");
const srv_polling_1 = require("./srv_polling");
const topology_description_1 = require("./topology_description");
// Global state
let globalTopologyCounter = 0;
const stateTransition = (0, utils_1.makeStateMachine)({
    [common_1.STATE_CLOSED]: [common_1.STATE_CLOSED, common_1.STATE_CONNECTING],
    [common_1.STATE_CONNECTING]: [common_1.STATE_CONNECTING, common_1.STATE_CLOSING, common_1.STATE_CONNECTED, common_1.STATE_CLOSED],
    [common_1.STATE_CONNECTED]: [common_1.STATE_CONNECTED, common_1.STATE_CLOSING, common_1.STATE_CLOSED],
    [common_1.STATE_CLOSING]: [common_1.STATE_CLOSING, common_1.STATE_CLOSED]
});
/**
 * A container of server instances representing a connection to a MongoDB topology.
 * @internal
 */
class Topology extends mongo_types_1.TypedEventEmitter {
    /**
     * @param seedlist - a list of HostAddress instances to connect to
     */
    constructor(client, seeds, options) {
        super();
        this.on('error', utils_1.noop);
        this.client = client;
        // Options should only be undefined in tests, MongoClient will always have defined options
        options = options ?? {
            hosts: [utils_1.HostAddress.fromString('localhost:27017')],
            ...Object.fromEntries(connection_string_1.DEFAULT_OPTIONS.entries())
        };
        if (typeof seeds === 'string') {
            seeds = [utils_1.HostAddress.fromString(seeds)];
        }
        else if (!Array.isArray(seeds)) {
            seeds = [seeds];
        }
        const seedlist = [];
        for (const seed of seeds) {
            if (typeof seed === 'string') {
                seedlist.push(utils_1.HostAddress.fromString(seed));
            }
            else if (seed instanceof utils_1.HostAddress) {
                seedlist.push(seed);
            }
            else {
                // FIXME(NODE-3483): May need to be a MongoParseError
                throw new error_1.MongoRuntimeError(`Topology cannot be constructed from ${JSON.stringify(seed)}`);
            }
        }
        const topologyType = topologyTypeFromOptions(options);
        const topologyId = globalTopologyCounter++;
        const selectedHosts = options.srvMaxHosts == null ||
            options.srvMaxHosts === 0 ||
            options.srvMaxHosts >= seedlist.length
            ? seedlist
            : (0, utils_1.shuffle)(seedlist, options.srvMaxHosts);
        const serverDescriptions = new Map();
        for (const hostAddress of selectedHosts) {
            serverDescriptions.set(hostAddress.toString(), new server_description_1.ServerDescription(hostAddress));
        }
        this.waitQueue = new utils_1.List();
        this.s = {
            // the id of this topology
            id: topologyId,
            // passed in options
            options,
            // initial seedlist of servers to connect to
            seedlist,
            // initial state
            state: common_1.STATE_CLOSED,
            // the topology description
            description: new topology_description_1.TopologyDescription(topologyType, serverDescriptions, options.replicaSet, undefined, undefined, undefined, options),
            serverSelectionTimeoutMS: options.serverSelectionTimeoutMS,
            heartbeatFrequencyMS: options.heartbeatFrequencyMS,
            minHeartbeatFrequencyMS: options.minHeartbeatFrequencyMS,
            // a map of server instances to normalized addresses
            servers: new Map(),
            credentials: options?.credentials,
            clusterTime: undefined,
            detectShardedTopology: ev => this.detectShardedTopology(ev),
            detectSrvRecords: ev => this.detectSrvRecords(ev)
        };
        this.mongoLogger = client.mongoLogger;
        this.component = 'topology';
        if (options.srvHost && !options.loadBalanced) {
            this.s.srvPoller =
                options.srvPoller ??
                    new srv_polling_1.SrvPoller({
                        heartbeatFrequencyMS: this.s.heartbeatFrequencyMS,
                        srvHost: options.srvHost,
                        srvMaxHosts: options.srvMaxHosts,
                        srvServiceName: options.srvServiceName
                    });
            this.on(Topology.TOPOLOGY_DESCRIPTION_CHANGED, this.s.detectShardedTopology);
        }
        this.connectionLock = undefined;
    }
    detectShardedTopology(event) {
        const previousType = event.previousDescription.type;
        const newType = event.newDescription.type;
        const transitionToSharded = previousType !== common_1.TopologyType.Sharded && newType === common_1.TopologyType.Sharded;
        const srvListeners = this.s.srvPoller?.listeners(srv_polling_1.SrvPoller.SRV_RECORD_DISCOVERY);
        const listeningToSrvPolling = !!srvListeners?.includes(this.s.detectSrvRecords);
        if (transitionToSharded && !listeningToSrvPolling) {
            this.s.srvPoller?.on(srv_polling_1.SrvPoller.SRV_RECORD_DISCOVERY, this.s.detectSrvRecords);
            this.s.srvPoller?.start();
        }
    }
    detectSrvRecords(ev) {
        const previousTopologyDescription = this.s.description;
        this.s.description = this.s.description.updateFromSrvPollingEvent(ev, this.s.options.srvMaxHosts);
        if (this.s.description === previousTopologyDescription) {
            // Nothing changed, so return
            return;
        }
        updateServers(this);
        this.emitAndLog(Topology.TOPOLOGY_DESCRIPTION_CHANGED, new events_1.TopologyDescriptionChangedEvent(this.s.id, previousTopologyDescription, this.s.description));
    }
    /**
     * @returns A `TopologyDescription` for this topology
     */
    get description() {
        return this.s.description;
    }
    get loadBalanced() {
        return this.s.options.loadBalanced;
    }
    get serverApi() {
        return this.s.options.serverApi;
    }
    get capabilities() {
        return new ServerCapabilities(this.lastHello());
    }
    /** Initiate server connect */
    async connect(options) {
        this.connectionLock ??= this._connect(options);
        try {
            await this.connectionLock;
            return this;
        }
        finally {
            this.connectionLock = undefined;
        }
    }
    async _connect(options) {
        options = options ?? {};
        if (this.s.state === common_1.STATE_CONNECTED) {
            return this;
        }
        stateTransition(this, common_1.STATE_CONNECTING);
        // emit SDAM monitoring events
        this.emitAndLog(Topology.TOPOLOGY_OPENING, new events_1.TopologyOpeningEvent(this.s.id));
        // emit an event for the topology change
        this.emitAndLog(Topology.TOPOLOGY_DESCRIPTION_CHANGED, new events_1.TopologyDescriptionChangedEvent(this.s.id, new topology_description_1.TopologyDescription(common_1.TopologyType.Unknown), // initial is always Unknown
        this.s.description));
        // connect all known servers, then attempt server selection to connect
        const serverDescriptions = Array.from(this.s.description.servers.values());
        this.s.servers = new Map(serverDescriptions.map(serverDescription => [
            serverDescription.address,
            createAndConnectServer(this, serverDescription)
        ]));
        // In load balancer mode we need to fake a server description getting
        // emitted from the monitor, since the monitor doesn't exist.
        if (this.s.options.loadBalanced) {
            for (const description of serverDescriptions) {
                const newDescription = new server_description_1.ServerDescription(description.hostAddress, undefined, {
                    loadBalanced: this.s.options.loadBalanced
                });
                this.serverUpdateHandler(newDescription);
            }
        }
        const serverSelectionTimeoutMS = this.client.s.options.serverSelectionTimeoutMS;
        const readPreference = options.readPreference ?? read_preference_1.ReadPreference.primary;
        const timeoutContext = timeout_1.TimeoutContext.create({
            // TODO(NODE-6448): auto-connect ignores timeoutMS; potential future feature
            timeoutMS: undefined,
            serverSelectionTimeoutMS,
            waitQueueTimeoutMS: this.client.s.options.waitQueueTimeoutMS
        });
        const selectServerOptions = {
            operationName: 'handshake',
            ...options,
            timeoutContext
        };
        try {
            const server = await this.selectServer((0, server_selection_1.readPreferenceServerSelector)(readPreference), selectServerOptions);
            const skipPingOnConnect = this.s.options.__skipPingOnConnect === true;
            if (!skipPingOnConnect && this.s.credentials) {
                const connection = await server.pool.checkOut({ timeoutContext: timeoutContext });
                server.pool.checkIn(connection);
                stateTransition(this, common_1.STATE_CONNECTED);
                this.emit(Topology.OPEN, this);
                this.emit(Topology.CONNECT, this);
                return this;
            }
            stateTransition(this, common_1.STATE_CONNECTED);
            this.emit(Topology.OPEN, this);
            this.emit(Topology.CONNECT, this);
            return this;
        }
        catch (error) {
            this.close();
            throw error;
        }
    }
    closeCheckedOutConnections() {
        for (const server of this.s.servers.values()) {
            return server.closeCheckedOutConnections();
        }
    }
    /** Close this topology */
    close() {
        if (this.s.state === common_1.STATE_CLOSED || this.s.state === common_1.STATE_CLOSING) {
            return;
        }
        for (const server of this.s.servers.values()) {
            closeServer(server, this);
        }
        this.s.servers.clear();
        stateTransition(this, common_1.STATE_CLOSING);
        drainWaitQueue(this.waitQueue, new error_1.MongoTopologyClosedError());
        if (this.s.srvPoller) {
            this.s.srvPoller.stop();
            this.s.srvPoller.removeListener(srv_polling_1.SrvPoller.SRV_RECORD_DISCOVERY, this.s.detectSrvRecords);
        }
        this.removeListener(Topology.TOPOLOGY_DESCRIPTION_CHANGED, this.s.detectShardedTopology);
        stateTransition(this, common_1.STATE_CLOSED);
        // emit an event for close
        this.emitAndLog(Topology.TOPOLOGY_CLOSED, new events_1.TopologyClosedEvent(this.s.id));
    }
    /**
     * Selects a server according to the selection predicate provided
     *
     * @param selector - An optional selector to select servers by, defaults to a random selection within a latency window
     * @param options - Optional settings related to server selection
     * @param callback - The callback used to indicate success or failure
     * @returns An instance of a `Server` meeting the criteria of the predicate provided
     */
    async selectServer(selector, options) {
        let serverSelector;
        if (typeof selector !== 'function') {
            if (typeof selector === 'string') {
                serverSelector = (0, server_selection_1.readPreferenceServerSelector)(read_preference_1.ReadPreference.fromString(selector));
            }
            else {
                let readPreference;
                if (selector instanceof read_preference_1.ReadPreference) {
                    readPreference = selector;
                }
                else {
                    read_preference_1.ReadPreference.translate(options);
                    readPreference = options.readPreference || read_preference_1.ReadPreference.primary;
                }
                serverSelector = (0, server_selection_1.readPreferenceServerSelector)(readPreference);
            }
        }
        else {
            serverSelector = selector;
        }
        options = { serverSelectionTimeoutMS: this.s.serverSelectionTimeoutMS, ...options };
        if (this.client.mongoLogger?.willLog(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, mongo_logger_1.SeverityLevel.DEBUG)) {
            this.client.mongoLogger?.debug(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, new server_selection_events_1.ServerSelectionStartedEvent(selector, this.description, options.operationName));
        }
        let timeout;
        if (options.timeoutContext)
            timeout = options.timeoutContext.serverSelectionTimeout;
        else {
            timeout = timeout_1.Timeout.expires(options.serverSelectionTimeoutMS ?? 0);
        }
        const isSharded = this.description.type === common_1.TopologyType.Sharded;
        const session = options.session;
        const transaction = session && session.transaction;
        if (isSharded && transaction && transaction.server) {
            if (this.client.mongoLogger?.willLog(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, mongo_logger_1.SeverityLevel.DEBUG)) {
                this.client.mongoLogger?.debug(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, new server_selection_events_1.ServerSelectionSucceededEvent(selector, this.description, transaction.server.pool.address, options.operationName));
            }
            if (options.timeoutContext?.clearServerSelectionTimeout)
                timeout?.clear();
            return transaction.server;
        }
        const { promise: serverPromise, resolve, reject } = (0, utils_1.promiseWithResolvers)();
        const waitQueueMember = {
            serverSelector,
            topologyDescription: this.description,
            mongoLogger: this.client.mongoLogger,
            transaction,
            resolve,
            reject,
            cancelled: false,
            startTime: (0, utils_1.now)(),
            operationName: options.operationName,
            waitingLogged: false,
            previousServer: options.previousServer
        };
        const abortListener = (0, utils_1.addAbortListener)(options.signal, function () {
            waitQueueMember.cancelled = true;
            reject(this.reason);
        });
        this.waitQueue.push(waitQueueMember);
        processWaitQueue(this);
        try {
            timeout?.throwIfExpired();
            const server = await (timeout ? Promise.race([serverPromise, timeout]) : serverPromise);
            if (options.timeoutContext?.csotEnabled() && server.description.minRoundTripTime !== 0) {
                options.timeoutContext.minRoundTripTime = server.description.minRoundTripTime;
            }
            return server;
        }
        catch (error) {
            if (timeout_1.TimeoutError.is(error)) {
                // Timeout
                waitQueueMember.cancelled = true;
                const timeoutError = new error_1.MongoServerSelectionError(`Server selection timed out after ${timeout?.duration} ms`, this.description);
                if (this.client.mongoLogger?.willLog(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, mongo_logger_1.SeverityLevel.DEBUG)) {
                    this.client.mongoLogger?.debug(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, new server_selection_events_1.ServerSelectionFailedEvent(selector, this.description, timeoutError, options.operationName));
                }
                if (options.timeoutContext?.csotEnabled()) {
                    throw new error_1.MongoOperationTimeoutError('Timed out during server selection', {
                        cause: timeoutError
                    });
                }
                throw timeoutError;
            }
            // Other server selection error
            throw error;
        }
        finally {
            abortListener?.[utils_1.kDispose]();
            if (options.timeoutContext?.clearServerSelectionTimeout)
                timeout?.clear();
        }
    }
    /**
     * Update the internal TopologyDescription with a ServerDescription
     *
     * @param serverDescription - The server to update in the internal list of server descriptions
     */
    serverUpdateHandler(serverDescription) {
        if (!this.s.description.hasServer(serverDescription.address)) {
            return;
        }
        // ignore this server update if its from an outdated topologyVersion
        if (isStaleServerDescription(this.s.description, serverDescription)) {
            return;
        }
        // these will be used for monitoring events later
        const previousTopologyDescription = this.s.description;
        const previousServerDescription = this.s.description.servers.get(serverDescription.address);
        if (!previousServerDescription) {
            return;
        }
        // Driver Sessions Spec: "Whenever a driver receives a cluster time from
        // a server it MUST compare it to the current highest seen cluster time
        // for the deployment. If the new cluster time is higher than the
        // highest seen cluster time it MUST become the new highest seen cluster
        // time. Two cluster times are compared using only the BsonTimestamp
        // value of the clusterTime embedded field."
        const clusterTime = serverDescription.$clusterTime;
        if (clusterTime) {
            (0, common_1._advanceClusterTime)(this, clusterTime);
        }
        // If we already know all the information contained in this updated description, then
        // we don't need to emit SDAM events, but still need to update the description, in order
        // to keep client-tracked attributes like last update time and round trip time up to date
        const equalDescriptions = previousServerDescription && previousServerDescription.equals(serverDescription);
        // first update the TopologyDescription
        this.s.description = this.s.description.update(serverDescription);
        if (this.s.description.compatibilityError) {
            this.emit(Topology.ERROR, new error_1.MongoCompatibilityError(this.s.description.compatibilityError));
            return;
        }
        // emit monitoring events for this change
        if (!equalDescriptions) {
            const newDescription = this.s.description.servers.get(serverDescription.address);
            if (newDescription) {
                this.emit(Topology.SERVER_DESCRIPTION_CHANGED, new events_1.ServerDescriptionChangedEvent(this.s.id, serverDescription.address, previousServerDescription, newDescription));
            }
        }
        // update server list from updated descriptions
        updateServers(this, serverDescription);
        // attempt to resolve any outstanding server selection attempts
        if (this.waitQueue.length > 0) {
            processWaitQueue(this);
        }
        if (!equalDescriptions) {
            this.emitAndLog(Topology.TOPOLOGY_DESCRIPTION_CHANGED, new events_1.TopologyDescriptionChangedEvent(this.s.id, previousTopologyDescription, this.s.description));
        }
    }
    auth(credentials, callback) {
        if (typeof credentials === 'function')
            ((callback = credentials), (credentials = undefined));
        if (typeof callback === 'function')
            callback(undefined, true);
    }
    get clientMetadata() {
        return this.s.options.metadata;
    }
    isConnected() {
        return this.s.state === common_1.STATE_CONNECTED;
    }
    isDestroyed() {
        return this.s.state === common_1.STATE_CLOSED;
    }
    // NOTE: There are many places in code where we explicitly check the last hello
    //       to do feature support detection. This should be done any other way, but for
    //       now we will just return the first hello seen, which should suffice.
    lastHello() {
        const serverDescriptions = Array.from(this.description.servers.values());
        if (serverDescriptions.length === 0)
            return {};
        const sd = serverDescriptions.filter((sd) => sd.type !== common_1.ServerType.Unknown)[0];
        const result = sd || { maxWireVersion: this.description.commonWireVersion };
        return result;
    }
    get commonWireVersion() {
        return this.description.commonWireVersion;
    }
    get logicalSessionTimeoutMinutes() {
        return this.description.logicalSessionTimeoutMinutes;
    }
    get clusterTime() {
        return this.s.clusterTime;
    }
    set clusterTime(clusterTime) {
        this.s.clusterTime = clusterTime;
    }
}
exports.Topology = Topology;
/** @event */
Topology.SERVER_OPENING = constants_1.SERVER_OPENING;
/** @event */
Topology.SERVER_CLOSED = constants_1.SERVER_CLOSED;
/** @event */
Topology.SERVER_DESCRIPTION_CHANGED = constants_1.SERVER_DESCRIPTION_CHANGED;
/** @event */
Topology.TOPOLOGY_OPENING = constants_1.TOPOLOGY_OPENING;
/** @event */
Topology.TOPOLOGY_CLOSED = constants_1.TOPOLOGY_CLOSED;
/** @event */
Topology.TOPOLOGY_DESCRIPTION_CHANGED = constants_1.TOPOLOGY_DESCRIPTION_CHANGED;
/** @event */
Topology.ERROR = constants_1.ERROR;
/** @event */
Topology.OPEN = constants_1.OPEN;
/** @event */
Topology.CONNECT = constants_1.CONNECT;
/** @event */
Topology.CLOSE = constants_1.CLOSE;
/** @event */
Topology.TIMEOUT = constants_1.TIMEOUT;
/** Destroys a server, and removes all event listeners from the instance */
function closeServer(server, topology) {
    for (const event of constants_1.LOCAL_SERVER_EVENTS) {
        server.removeAllListeners(event);
    }
    server.close();
    topology.emitAndLog(Topology.SERVER_CLOSED, new events_1.ServerClosedEvent(topology.s.id, server.description.address));
    for (const event of constants_1.SERVER_RELAY_EVENTS) {
        server.removeAllListeners(event);
    }
}
/** Predicts the TopologyType from options */
function topologyTypeFromOptions(options) {
    if (options?.directConnection) {
        return common_1.TopologyType.Single;
    }
    if (options?.replicaSet) {
        return common_1.TopologyType.ReplicaSetNoPrimary;
    }
    if (options?.loadBalanced) {
        return common_1.TopologyType.LoadBalanced;
    }
    return common_1.TopologyType.Unknown;
}
/**
 * Creates new server instances and attempts to connect them
 *
 * @param topology - The topology that this server belongs to
 * @param serverDescription - The description for the server to initialize and connect to
 */
function createAndConnectServer(topology, serverDescription) {
    topology.emitAndLog(Topology.SERVER_OPENING, new events_1.ServerOpeningEvent(topology.s.id, serverDescription.address));
    const server = new server_1.Server(topology, serverDescription, topology.s.options);
    for (const event of constants_1.SERVER_RELAY_EVENTS) {
        server.on(event, (e) => topology.emit(event, e));
    }
    server.on(server_1.Server.DESCRIPTION_RECEIVED, description => topology.serverUpdateHandler(description));
    server.connect();
    return server;
}
/**
 * @param topology - Topology to update.
 * @param incomingServerDescription - New server description.
 */
function updateServers(topology, incomingServerDescription) {
    // update the internal server's description
    if (incomingServerDescription && topology.s.servers.has(incomingServerDescription.address)) {
        const server = topology.s.servers.get(incomingServerDescription.address);
        if (server) {
            server.s.description = incomingServerDescription;
            if (incomingServerDescription.error instanceof error_1.MongoError &&
                incomingServerDescription.error.hasErrorLabel(error_1.MongoErrorLabel.ResetPool)) {
                const interruptInUseConnections = incomingServerDescription.error.hasErrorLabel(error_1.MongoErrorLabel.InterruptInUseConnections);
                server.pool.clear({ interruptInUseConnections });
            }
            else if (incomingServerDescription.error == null) {
                const newTopologyType = topology.s.description.type;
                const shouldMarkPoolReady = incomingServerDescription.isDataBearing ||
                    (incomingServerDescription.type !== common_1.ServerType.Unknown &&
                        newTopologyType === common_1.TopologyType.Single);
                if (shouldMarkPoolReady) {
                    server.pool.ready();
                }
            }
        }
    }
    // add new servers for all descriptions we currently don't know about locally
    for (const serverDescription of topology.description.servers.values()) {
        if (!topology.s.servers.has(serverDescription.address)) {
            const server = createAndConnectServer(topology, serverDescription);
            topology.s.servers.set(serverDescription.address, server);
        }
    }
    // for all servers no longer known, remove their descriptions and destroy their instances
    for (const entry of topology.s.servers) {
        const serverAddress = entry[0];
        if (topology.description.hasServer(serverAddress)) {
            continue;
        }
        if (!topology.s.servers.has(serverAddress)) {
            continue;
        }
        const server = topology.s.servers.get(serverAddress);
        topology.s.servers.delete(serverAddress);
        // prepare server for garbage collection
        if (server) {
            closeServer(server, topology);
        }
    }
}
function drainWaitQueue(queue, drainError) {
    while (queue.length) {
        const waitQueueMember = queue.shift();
        if (!waitQueueMember) {
            continue;
        }
        if (!waitQueueMember.cancelled) {
            if (waitQueueMember.mongoLogger?.willLog(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, mongo_logger_1.SeverityLevel.DEBUG)) {
                waitQueueMember.mongoLogger?.debug(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, new server_selection_events_1.ServerSelectionFailedEvent(waitQueueMember.serverSelector, waitQueueMember.topologyDescription, drainError, waitQueueMember.operationName));
            }
            waitQueueMember.reject(drainError);
        }
    }
}
function processWaitQueue(topology) {
    if (topology.s.state === common_1.STATE_CLOSED) {
        drainWaitQueue(topology.waitQueue, new error_1.MongoTopologyClosedError());
        return;
    }
    const isSharded = topology.description.type === common_1.TopologyType.Sharded;
    const serverDescriptions = Array.from(topology.description.servers.values());
    const membersToProcess = topology.waitQueue.length;
    for (let i = 0; i < membersToProcess; ++i) {
        const waitQueueMember = topology.waitQueue.shift();
        if (!waitQueueMember) {
            continue;
        }
        if (waitQueueMember.cancelled) {
            continue;
        }
        let selectedDescriptions;
        try {
            const serverSelector = waitQueueMember.serverSelector;
            const previousServer = waitQueueMember.previousServer;
            selectedDescriptions = serverSelector
                ? serverSelector(topology.description, serverDescriptions, previousServer ? [previousServer] : [])
                : serverDescriptions;
        }
        catch (selectorError) {
            if (topology.client.mongoLogger?.willLog(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, mongo_logger_1.SeverityLevel.DEBUG)) {
                topology.client.mongoLogger?.debug(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, new server_selection_events_1.ServerSelectionFailedEvent(waitQueueMember.serverSelector, topology.description, selectorError, waitQueueMember.operationName));
            }
            waitQueueMember.reject(selectorError);
            continue;
        }
        let selectedServer;
        if (selectedDescriptions.length === 0) {
            if (!waitQueueMember.waitingLogged) {
                if (topology.client.mongoLogger?.willLog(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, mongo_logger_1.SeverityLevel.INFORMATIONAL)) {
                    topology.client.mongoLogger?.info(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, new server_selection_events_1.WaitingForSuitableServerEvent(waitQueueMember.serverSelector, topology.description, topology.s.serverSelectionTimeoutMS !== 0
                        ? topology.s.serverSelectionTimeoutMS - ((0, utils_1.now)() - waitQueueMember.startTime)
                        : -1, waitQueueMember.operationName));
                }
                waitQueueMember.waitingLogged = true;
            }
            topology.waitQueue.push(waitQueueMember);
            continue;
        }
        else if (selectedDescriptions.length === 1) {
            selectedServer = topology.s.servers.get(selectedDescriptions[0].address);
        }
        else {
            const descriptions = (0, utils_1.shuffle)(selectedDescriptions, 2);
            const server1 = topology.s.servers.get(descriptions[0].address);
            const server2 = topology.s.servers.get(descriptions[1].address);
            selectedServer =
                server1 && server2 && server1.s.operationCount < server2.s.operationCount
                    ? server1
                    : server2;
        }
        if (!selectedServer) {
            const serverSelectionError = new error_1.MongoServerSelectionError('server selection returned a server description but the server was not found in the topology', topology.description);
            if (topology.client.mongoLogger?.willLog(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, mongo_logger_1.SeverityLevel.DEBUG)) {
                topology.client.mongoLogger?.debug(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, new server_selection_events_1.ServerSelectionFailedEvent(waitQueueMember.serverSelector, topology.description, serverSelectionError, waitQueueMember.operationName));
            }
            waitQueueMember.reject(serverSelectionError);
            return;
        }
        const transaction = waitQueueMember.transaction;
        if (isSharded && transaction && transaction.isActive && selectedServer) {
            transaction.pinServer(selectedServer);
        }
        if (topology.client.mongoLogger?.willLog(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, mongo_logger_1.SeverityLevel.DEBUG)) {
            topology.client.mongoLogger?.debug(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, new server_selection_events_1.ServerSelectionSucceededEvent(waitQueueMember.serverSelector, waitQueueMember.topologyDescription, selectedServer.pool.address, waitQueueMember.operationName));
        }
        waitQueueMember.resolve(selectedServer);
    }
    if (topology.waitQueue.length > 0) {
        // ensure all server monitors attempt monitoring soon
        for (const [, server] of topology.s.servers) {
            process.nextTick(function scheduleServerCheck() {
                return server.requestCheck();
            });
        }
    }
}
function isStaleServerDescription(topologyDescription, incomingServerDescription) {
    const currentServerDescription = topologyDescription.servers.get(incomingServerDescription.address);
    const currentTopologyVersion = currentServerDescription?.topologyVersion;
    return ((0, server_description_1.compareTopologyVersion)(currentTopologyVersion, incomingServerDescription.topologyVersion) > 0);
}
/**
 * @public
 * @deprecated This class will be removed as dead code in the next major version.
 */
class ServerCapabilities {
    constructor(hello) {
        this.minWireVersion = hello.minWireVersion || 0;
        this.maxWireVersion = hello.maxWireVersion || 0;
    }
    get hasAggregationCursor() {
        return true;
    }
    get hasWriteCommands() {
        return true;
    }
    get hasTextSearch() {
        return true;
    }
    get hasAuthCommands() {
        return true;
    }
    get hasListCollectionsCommand() {
        return true;
    }
    get hasListIndexesCommand() {
        return true;
    }
    get supportsSnapshotReads() {
        return this.maxWireVersion >= 13;
    }
    get commandsTakeWriteConcern() {
        return true;
    }
    get commandsTakeCollation() {
        return true;
    }
}
exports.ServerCapabilities = ServerCapabilities;
//# sourceMappingURL=topology.js.map