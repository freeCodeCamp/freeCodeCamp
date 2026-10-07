"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterAdapterWithHeartbeat = exports.ClusterAdapter = exports.MessageType = void 0;
const in_memory_adapter_1 = require("./in-memory-adapter");
const debug_1 = require("debug");
const crypto_1 = require("crypto");
const debug = (0, debug_1.debug)("socket.io-adapter");
const EMITTER_UID = "emitter";
const DEFAULT_TIMEOUT = 5000;
function randomId() {
    return (0, crypto_1.randomBytes)(8).toString("hex");
}
var MessageType;
(function (MessageType) {
    MessageType[MessageType["INITIAL_HEARTBEAT"] = 1] = "INITIAL_HEARTBEAT";
    MessageType[MessageType["HEARTBEAT"] = 2] = "HEARTBEAT";
    MessageType[MessageType["BROADCAST"] = 3] = "BROADCAST";
    MessageType[MessageType["SOCKETS_JOIN"] = 4] = "SOCKETS_JOIN";
    MessageType[MessageType["SOCKETS_LEAVE"] = 5] = "SOCKETS_LEAVE";
    MessageType[MessageType["DISCONNECT_SOCKETS"] = 6] = "DISCONNECT_SOCKETS";
    MessageType[MessageType["FETCH_SOCKETS"] = 7] = "FETCH_SOCKETS";
    MessageType[MessageType["FETCH_SOCKETS_RESPONSE"] = 8] = "FETCH_SOCKETS_RESPONSE";
    MessageType[MessageType["SERVER_SIDE_EMIT"] = 9] = "SERVER_SIDE_EMIT";
    MessageType[MessageType["SERVER_SIDE_EMIT_RESPONSE"] = 10] = "SERVER_SIDE_EMIT_RESPONSE";
    MessageType[MessageType["BROADCAST_CLIENT_COUNT"] = 11] = "BROADCAST_CLIENT_COUNT";
    MessageType[MessageType["BROADCAST_ACK"] = 12] = "BROADCAST_ACK";
    MessageType[MessageType["ADAPTER_CLOSE"] = 13] = "ADAPTER_CLOSE";
})(MessageType || (exports.MessageType = MessageType = {}));
function encodeOptions(opts) {
    return {
        rooms: [...opts.rooms],
        except: [...opts.except],
        flags: opts.flags,
    };
}
function decodeOptions(opts) {
    return {
        rooms: new Set(opts.rooms),
        except: new Set(opts.except),
        flags: opts.flags,
    };
}
/**
 * A cluster-ready adapter. Any extending class must:
 *
 * - implement {@link ClusterAdapter#doPublish} and {@link ClusterAdapter#doPublishResponse}
 * - call {@link ClusterAdapter#onMessage} and {@link ClusterAdapter#onResponse}
 */
class ClusterAdapter extends in_memory_adapter_1.Adapter {
    constructor(nsp) {
        super(nsp);
        this.requests = new Map();
        this.ackRequests = new Map();
        this.uid = randomId();
    }
    /**
     * Called when receiving a message from another member of the cluster.
     *
     * @param message
     * @param offset
     * @protected
     */
    onMessage(message, offset) {
        if (message.uid === this.uid) {
            return debug("[%s] ignore message from self", this.uid);
        }
        if (message.nsp !== this.nsp.name) {
            return debug("[%s] ignore message from another namespace (%s)", this.uid, message.nsp);
        }
        debug("[%s] new event of type %d from %s", this.uid, message.type, message.uid);
        switch (message.type) {
            case MessageType.BROADCAST: {
                const withAck = message.data.requestId !== undefined;
                if (withAck) {
                    super.broadcastWithAck(message.data.packet, decodeOptions(message.data.opts), (clientCount) => {
                        debug("[%s] waiting for %d client acknowledgements", this.uid, clientCount);
                        this.publishResponse(message.uid, {
                            type: MessageType.BROADCAST_CLIENT_COUNT,
                            data: {
                                requestId: message.data.requestId,
                                clientCount,
                            },
                        });
                    }, (arg) => {
                        debug("[%s] received acknowledgement with value %j", this.uid, arg);
                        this.publishResponse(message.uid, {
                            type: MessageType.BROADCAST_ACK,
                            data: {
                                requestId: message.data.requestId,
                                packet: arg,
                            },
                        });
                    });
                }
                else {
                    const packet = message.data.packet;
                    const opts = decodeOptions(message.data.opts);
                    this.addOffsetIfNecessary(packet, opts, offset);
                    super.broadcast(packet, opts);
                }
                break;
            }
            case MessageType.SOCKETS_JOIN:
                super.addSockets(decodeOptions(message.data.opts), message.data.rooms);
                break;
            case MessageType.SOCKETS_LEAVE:
                super.delSockets(decodeOptions(message.data.opts), message.data.rooms);
                break;
            case MessageType.DISCONNECT_SOCKETS:
                super.disconnectSockets(decodeOptions(message.data.opts), message.data.close);
                break;
            case MessageType.FETCH_SOCKETS: {
                debug("[%s] calling fetchSockets with opts %j", this.uid, message.data.opts);
                super
                    .fetchSockets(decodeOptions(message.data.opts))
                    .then((localSockets) => {
                    this.publishResponse(message.uid, {
                        type: MessageType.FETCH_SOCKETS_RESPONSE,
                        data: {
                            requestId: message.data.requestId,
                            sockets: localSockets.map((socket) => {
                                // remove sessionStore from handshake, as it may contain circular references
                                const _a = socket.handshake, { sessionStore } = _a, handshake = __rest(_a, ["sessionStore"]);
                                return {
                                    id: socket.id,
                                    handshake,
                                    rooms: [...socket.rooms],
                                    data: socket.data,
                                };
                            }),
                        },
                    });
                });
                break;
            }
            case MessageType.SERVER_SIDE_EMIT: {
                const packet = message.data.packet;
                const withAck = message.data.requestId !== undefined;
                if (!withAck) {
                    this.nsp._onServerSideEmit(packet);
                    return;
                }
                let called = false;
                const callback = (arg) => {
                    // only one argument is expected
                    if (called) {
                        return;
                    }
                    called = true;
                    debug("[%s] calling acknowledgement with %j", this.uid, arg);
                    this.publishResponse(message.uid, {
                        type: MessageType.SERVER_SIDE_EMIT_RESPONSE,
                        data: {
                            requestId: message.data.requestId,
                            packet: arg,
                        },
                    });
                };
                this.nsp._onServerSideEmit([...packet, callback]);
                break;
            }
            // @ts-ignore
            case MessageType.BROADCAST_CLIENT_COUNT:
            // @ts-ignore
            case MessageType.BROADCAST_ACK:
            // @ts-ignore
            case MessageType.FETCH_SOCKETS_RESPONSE:
            // @ts-ignore
            case MessageType.SERVER_SIDE_EMIT_RESPONSE:
                // extending classes may not make a distinction between a ClusterMessage and a ClusterResponse payload and may
                // always call the onMessage() method
                this.onResponse(message);
                break;
            default:
                debug("[%s] unknown message type: %s", this.uid, message.type);
        }
    }
    /**
     * Called when receiving a response from another member of the cluster.
     *
     * @param response
     * @protected
     */
    onResponse(response) {
        var _a, _b;
        const requestId = response.data.requestId;
        debug("[%s] received response %s to request %s", this.uid, response.type, requestId);
        switch (response.type) {
            case MessageType.BROADCAST_CLIENT_COUNT: {
                (_a = this.ackRequests
                    .get(requestId)) === null || _a === void 0 ? void 0 : _a.clientCountCallback(response.data.clientCount);
                break;
            }
            case MessageType.BROADCAST_ACK: {
                (_b = this.ackRequests.get(requestId)) === null || _b === void 0 ? void 0 : _b.ack(response.data.packet);
                break;
            }
            case MessageType.FETCH_SOCKETS_RESPONSE: {
                const request = this.requests.get(requestId);
                if (!request) {
                    return;
                }
                request.current++;
                response.data.sockets.forEach((socket) => request.responses.push(socket));
                if (request.current === request.expected) {
                    clearTimeout(request.timeout);
                    request.resolve(request.responses);
                    this.requests.delete(requestId);
                }
                break;
            }
            case MessageType.SERVER_SIDE_EMIT_RESPONSE: {
                const request = this.requests.get(requestId);
                if (!request) {
                    return;
                }
                request.current++;
                request.responses.push(response.data.packet);
                if (request.current === request.expected) {
                    clearTimeout(request.timeout);
                    request.resolve(null, request.responses);
                    this.requests.delete(requestId);
                }
                break;
            }
            default:
                // @ts-ignore
                debug("[%s] unknown response type: %s", this.uid, response.type);
        }
    }
    async broadcast(packet, opts) {
        var _a;
        const onlyLocal = (_a = opts.flags) === null || _a === void 0 ? void 0 : _a.local;
        if (!onlyLocal) {
            try {
                const offset = await this.publishAndReturnOffset({
                    type: MessageType.BROADCAST,
                    data: {
                        packet,
                        opts: encodeOptions(opts),
                    },
                });
                this.addOffsetIfNecessary(packet, opts, offset);
            }
            catch (e) {
                return debug("[%s] error while broadcasting message: %s", this.uid, e.message);
            }
        }
        super.broadcast(packet, opts);
    }
    /**
     * Adds an offset at the end of the data array in order to allow the client to receive any missed packets when it
     * reconnects after a temporary disconnection.
     *
     * @param packet
     * @param opts
     * @param offset
     * @private
     */
    addOffsetIfNecessary(packet, opts, offset) {
        var _a;
        if (!this.nsp.server.opts.connectionStateRecovery) {
            return;
        }
        const isEventPacket = packet.type === 2;
        // packets with acknowledgement are not stored because the acknowledgement function cannot be serialized and
        // restored on another server upon reconnection
        const withoutAcknowledgement = packet.id === undefined;
        const notVolatile = ((_a = opts.flags) === null || _a === void 0 ? void 0 : _a.volatile) === undefined;
        if (isEventPacket && withoutAcknowledgement && notVolatile) {
            packet.data.push(offset);
        }
    }
    broadcastWithAck(packet, opts, clientCountCallback, ack) {
        var _a;
        const onlyLocal = (_a = opts === null || opts === void 0 ? void 0 : opts.flags) === null || _a === void 0 ? void 0 : _a.local;
        if (!onlyLocal) {
            const requestId = randomId();
            this.ackRequests.set(requestId, {
                clientCountCallback,
                ack,
            });
            this.publish({
                type: MessageType.BROADCAST,
                data: {
                    packet,
                    requestId,
                    opts: encodeOptions(opts),
                },
            });
            // we have no way to know at this level whether the server has received an acknowledgement from each client, so we
            // will simply clean up the ackRequests map after the given delay
            setTimeout(() => {
                this.ackRequests.delete(requestId);
            }, opts.flags.timeout);
        }
        super.broadcastWithAck(packet, opts, clientCountCallback, ack);
    }
    async addSockets(opts, rooms) {
        var _a;
        const onlyLocal = (_a = opts.flags) === null || _a === void 0 ? void 0 : _a.local;
        if (!onlyLocal) {
            try {
                await this.publishAndReturnOffset({
                    type: MessageType.SOCKETS_JOIN,
                    data: {
                        opts: encodeOptions(opts),
                        rooms,
                    },
                });
            }
            catch (e) {
                debug("[%s] error while publishing message: %s", this.uid, e.message);
            }
        }
        super.addSockets(opts, rooms);
    }
    async delSockets(opts, rooms) {
        var _a;
        const onlyLocal = (_a = opts.flags) === null || _a === void 0 ? void 0 : _a.local;
        if (!onlyLocal) {
            try {
                await this.publishAndReturnOffset({
                    type: MessageType.SOCKETS_LEAVE,
                    data: {
                        opts: encodeOptions(opts),
                        rooms,
                    },
                });
            }
            catch (e) {
                debug("[%s] error while publishing message: %s", this.uid, e.message);
            }
        }
        super.delSockets(opts, rooms);
    }
    async disconnectSockets(opts, close) {
        var _a;
        const onlyLocal = (_a = opts.flags) === null || _a === void 0 ? void 0 : _a.local;
        if (!onlyLocal) {
            try {
                await this.publishAndReturnOffset({
                    type: MessageType.DISCONNECT_SOCKETS,
                    data: {
                        opts: encodeOptions(opts),
                        close,
                    },
                });
            }
            catch (e) {
                debug("[%s] error while publishing message: %s", this.uid, e.message);
            }
        }
        super.disconnectSockets(opts, close);
    }
    async fetchSockets(opts) {
        var _a;
        const [localSockets, serverCount] = await Promise.all([
            super.fetchSockets(opts),
            this.serverCount(),
        ]);
        const expectedResponseCount = serverCount - 1;
        if (((_a = opts.flags) === null || _a === void 0 ? void 0 : _a.local) || expectedResponseCount <= 0) {
            return localSockets;
        }
        const requestId = randomId();
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                const storedRequest = this.requests.get(requestId);
                if (storedRequest) {
                    reject(new Error(`timeout reached: only ${storedRequest.current} responses received out of ${storedRequest.expected}`));
                    this.requests.delete(requestId);
                }
            }, opts.flags.timeout || DEFAULT_TIMEOUT);
            const storedRequest = {
                type: MessageType.FETCH_SOCKETS,
                resolve,
                timeout,
                current: 0,
                expected: expectedResponseCount,
                responses: localSockets,
            };
            this.requests.set(requestId, storedRequest);
            this.publish({
                type: MessageType.FETCH_SOCKETS,
                data: {
                    opts: encodeOptions(opts),
                    requestId,
                },
            });
        });
    }
    async serverSideEmit(packet) {
        const withAck = typeof packet[packet.length - 1] === "function";
        if (!withAck) {
            return this.publish({
                type: MessageType.SERVER_SIDE_EMIT,
                data: {
                    packet,
                },
            });
        }
        const ack = packet.pop();
        const expectedResponseCount = (await this.serverCount()) - 1;
        debug('[%s] waiting for %d responses to "serverSideEmit" request', this.uid, expectedResponseCount);
        if (expectedResponseCount <= 0) {
            return ack(null, []);
        }
        const requestId = randomId();
        const timeout = setTimeout(() => {
            const storedRequest = this.requests.get(requestId);
            if (storedRequest) {
                ack(new Error(`timeout reached: only ${storedRequest.current} responses received out of ${storedRequest.expected}`), storedRequest.responses);
                this.requests.delete(requestId);
            }
        }, DEFAULT_TIMEOUT);
        const storedRequest = {
            type: MessageType.SERVER_SIDE_EMIT,
            resolve: ack,
            timeout,
            current: 0,
            expected: expectedResponseCount,
            responses: [],
        };
        this.requests.set(requestId, storedRequest);
        this.publish({
            type: MessageType.SERVER_SIDE_EMIT,
            data: {
                requestId, // the presence of this attribute defines whether an acknowledgement is needed
                packet,
            },
        });
    }
    publish(message) {
        debug("[%s] sending message %s", this.uid, message.type);
        this.publishAndReturnOffset(message).catch((err) => {
            debug("[%s] error while publishing message: %s", this.uid, err);
        });
    }
    publishAndReturnOffset(message) {
        message.uid = this.uid;
        message.nsp = this.nsp.name;
        return this.doPublish(message);
    }
    publishResponse(requesterUid, response) {
        response.uid = this.uid;
        response.nsp = this.nsp.name;
        debug("[%s] sending response %s to %s", this.uid, response.type, requesterUid);
        this.doPublishResponse(requesterUid, response).catch((err) => {
            debug("[%s] error while publishing response: %s", this.uid, err);
        });
    }
}
exports.ClusterAdapter = ClusterAdapter;
class ClusterAdapterWithHeartbeat extends ClusterAdapter {
    constructor(nsp, opts) {
        super(nsp);
        this.nodesMap = new Map(); // uid => timestamp of last message
        this.customRequests = new Map();
        this._opts = Object.assign({
            heartbeatInterval: 5000,
            heartbeatTimeout: 10000,
        }, opts);
        this.cleanupTimer = setInterval(() => {
            const now = Date.now();
            this.nodesMap.forEach((lastSeen, uid) => {
                const nodeSeemsDown = now - lastSeen > this._opts.heartbeatTimeout;
                if (nodeSeemsDown) {
                    debug("[%s] node %s seems down", this.uid, uid);
                    this.removeNode(uid);
                }
            });
        }, 1000);
    }
    init() {
        this.publish({
            type: MessageType.INITIAL_HEARTBEAT,
        });
    }
    scheduleHeartbeat() {
        if (this.heartbeatTimer) {
            this.heartbeatTimer.refresh();
        }
        else {
            this.heartbeatTimer = setTimeout(() => {
                this.publish({
                    type: MessageType.HEARTBEAT,
                });
            }, this._opts.heartbeatInterval);
        }
    }
    close() {
        this.publish({
            type: MessageType.ADAPTER_CLOSE,
        });
        clearTimeout(this.heartbeatTimer);
        if (this.cleanupTimer) {
            clearInterval(this.cleanupTimer);
        }
    }
    onMessage(message, offset) {
        if (message.uid === this.uid) {
            return debug("[%s] ignore message from self", this.uid);
        }
        if (message.uid && message.uid !== EMITTER_UID) {
            // we track the UID of each sender to know how many servers there are in the cluster
            this.nodesMap.set(message.uid, Date.now());
        }
        switch (message.type) {
            case MessageType.INITIAL_HEARTBEAT:
                this.publish({
                    type: MessageType.HEARTBEAT,
                });
                break;
            case MessageType.HEARTBEAT:
                // nothing to do
                break;
            case MessageType.ADAPTER_CLOSE:
                this.removeNode(message.uid);
                break;
            default:
                super.onMessage(message, offset);
        }
    }
    serverCount() {
        return Promise.resolve(1 + this.nodesMap.size);
    }
    publish(message) {
        this.scheduleHeartbeat();
        return super.publish(message);
    }
    async serverSideEmit(packet) {
        const withAck = typeof packet[packet.length - 1] === "function";
        if (!withAck) {
            return this.publish({
                type: MessageType.SERVER_SIDE_EMIT,
                data: {
                    packet,
                },
            });
        }
        const ack = packet.pop();
        const expectedResponseCount = this.nodesMap.size;
        debug('[%s] waiting for %d responses to "serverSideEmit" request', this.uid, expectedResponseCount);
        if (expectedResponseCount <= 0) {
            return ack(null, []);
        }
        const requestId = randomId();
        const timeout = setTimeout(() => {
            const storedRequest = this.customRequests.get(requestId);
            if (storedRequest) {
                ack(new Error(`timeout reached: missing ${storedRequest.missingUids.size} responses`), storedRequest.responses);
                this.customRequests.delete(requestId);
            }
        }, DEFAULT_TIMEOUT);
        const storedRequest = {
            type: MessageType.SERVER_SIDE_EMIT,
            resolve: ack,
            timeout,
            missingUids: new Set([...this.nodesMap.keys()]),
            responses: [],
        };
        this.customRequests.set(requestId, storedRequest);
        this.publish({
            type: MessageType.SERVER_SIDE_EMIT,
            data: {
                requestId, // the presence of this attribute defines whether an acknowledgement is needed
                packet,
            },
        });
    }
    async fetchSockets(opts) {
        var _a;
        const [localSockets, serverCount] = await Promise.all([
            super.fetchSockets({
                rooms: opts.rooms,
                except: opts.except,
                flags: {
                    local: true,
                },
            }),
            this.serverCount(),
        ]);
        const expectedResponseCount = serverCount - 1;
        if (((_a = opts.flags) === null || _a === void 0 ? void 0 : _a.local) || expectedResponseCount <= 0) {
            return localSockets;
        }
        const requestId = randomId();
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                const storedRequest = this.customRequests.get(requestId);
                if (storedRequest) {
                    reject(new Error(`timeout reached: missing ${storedRequest.missingUids.size} responses`));
                    this.customRequests.delete(requestId);
                }
            }, opts.flags.timeout || DEFAULT_TIMEOUT);
            const storedRequest = {
                type: MessageType.FETCH_SOCKETS,
                resolve,
                timeout,
                missingUids: new Set([...this.nodesMap.keys()]),
                responses: localSockets,
            };
            this.customRequests.set(requestId, storedRequest);
            this.publish({
                type: MessageType.FETCH_SOCKETS,
                data: {
                    opts: encodeOptions(opts),
                    requestId,
                },
            });
        });
    }
    onResponse(response) {
        const requestId = response.data.requestId;
        debug("[%s] received response %s to request %s", this.uid, response.type, requestId);
        switch (response.type) {
            case MessageType.FETCH_SOCKETS_RESPONSE: {
                const request = this.customRequests.get(requestId);
                if (!request) {
                    return;
                }
                response.data.sockets.forEach((socket) => request.responses.push(socket));
                request.missingUids.delete(response.uid);
                if (request.missingUids.size === 0) {
                    clearTimeout(request.timeout);
                    request.resolve(request.responses);
                    this.customRequests.delete(requestId);
                }
                break;
            }
            case MessageType.SERVER_SIDE_EMIT_RESPONSE: {
                const request = this.customRequests.get(requestId);
                if (!request) {
                    return;
                }
                request.responses.push(response.data.packet);
                request.missingUids.delete(response.uid);
                if (request.missingUids.size === 0) {
                    clearTimeout(request.timeout);
                    request.resolve(null, request.responses);
                    this.customRequests.delete(requestId);
                }
                break;
            }
            default:
                super.onResponse(response);
        }
    }
    removeNode(uid) {
        this.customRequests.forEach((request, requestId) => {
            request.missingUids.delete(uid);
            if (request.missingUids.size === 0) {
                clearTimeout(request.timeout);
                if (request.type === MessageType.FETCH_SOCKETS) {
                    request.resolve(request.responses);
                }
                else if (request.type === MessageType.SERVER_SIDE_EMIT) {
                    request.resolve(null, request.responses);
                }
                this.customRequests.delete(requestId);
            }
        });
        this.nodesMap.delete(uid);
    }
}
exports.ClusterAdapterWithHeartbeat = ClusterAdapterWithHeartbeat;
