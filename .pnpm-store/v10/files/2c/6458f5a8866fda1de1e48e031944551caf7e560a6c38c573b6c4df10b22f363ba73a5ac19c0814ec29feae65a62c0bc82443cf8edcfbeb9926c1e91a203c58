"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionAwareAdapter = exports.Adapter = void 0;
const events_1 = require("events");
const yeast_1 = require("./contrib/yeast");
const WebSocket = require("ws");
// @ts-expect-error
const canPreComputeFrame = typeof ((_a = WebSocket === null || WebSocket === void 0 ? void 0 : WebSocket.Sender) === null || _a === void 0 ? void 0 : _a.frame) === "function";
class Adapter extends events_1.EventEmitter {
    /**
     * In-memory adapter constructor.
     *
     * @param nsp
     */
    constructor(nsp) {
        super();
        this.nsp = nsp;
        this.rooms = new Map();
        this.sids = new Map();
        this.encoder = nsp.server.encoder; // nsp is a Namespace object
    }
    /**
     * To be overridden
     */
    init() { }
    /**
     * To be overridden
     */
    close() { }
    /**
     * Returns the number of Socket.IO servers in the cluster
     *
     * @public
     */
    serverCount() {
        return Promise.resolve(1);
    }
    /**
     * Adds a socket to a list of room.
     *
     * @param {SocketId}  id      the socket id
     * @param {Set<Room>} rooms   a set of rooms
     * @public
     */
    addAll(id, rooms) {
        if (!this.sids.has(id)) {
            this.sids.set(id, new Set());
        }
        for (const room of rooms) {
            this.sids.get(id).add(room);
            if (!this.rooms.has(room)) {
                this.rooms.set(room, new Set());
                this.emit("create-room", room);
            }
            if (!this.rooms.get(room).has(id)) {
                this.rooms.get(room).add(id);
                this.emit("join-room", room, id);
            }
        }
    }
    /**
     * Removes a socket from a room.
     *
     * @param {SocketId} id     the socket id
     * @param {Room}     room   the room name
     */
    del(id, room) {
        if (this.sids.has(id)) {
            this.sids.get(id).delete(room);
        }
        this._del(room, id);
    }
    _del(room, id) {
        const _room = this.rooms.get(room);
        if (_room != null) {
            const deleted = _room.delete(id);
            if (deleted) {
                this.emit("leave-room", room, id);
            }
            if (_room.size === 0 && this.rooms.delete(room)) {
                this.emit("delete-room", room);
            }
        }
    }
    /**
     * Removes a socket from all rooms it's joined.
     *
     * @param {SocketId} id   the socket id
     */
    delAll(id) {
        if (!this.sids.has(id)) {
            return;
        }
        for (const room of this.sids.get(id)) {
            this._del(room, id);
        }
        this.sids.delete(id);
    }
    /**
     * Broadcasts a packet.
     *
     * Options:
     *  - `flags` {Object} flags for this packet
     *  - `except` {Array} sids that should be excluded
     *  - `rooms` {Array} list of rooms to broadcast to
     *
     * @param {Object} packet   the packet object
     * @param {Object} opts     the options
     * @public
     */
    broadcast(packet, opts) {
        const flags = opts.flags || {};
        const packetOpts = {
            preEncoded: true,
            volatile: flags.volatile,
            compress: flags.compress,
        };
        packet.nsp = this.nsp.name;
        const encodedPackets = this._encode(packet, packetOpts);
        this.apply(opts, (socket) => {
            if (typeof socket.notifyOutgoingListeners === "function") {
                socket.notifyOutgoingListeners(packet);
            }
            socket.client.writeToEngine(encodedPackets, packetOpts);
        });
    }
    /**
     * Broadcasts a packet and expects multiple acknowledgements.
     *
     * Options:
     *  - `flags` {Object} flags for this packet
     *  - `except` {Array} sids that should be excluded
     *  - `rooms` {Array} list of rooms to broadcast to
     *
     * @param {Object} packet   the packet object
     * @param {Object} opts     the options
     * @param clientCountCallback - the number of clients that received the packet
     * @param ack                 - the callback that will be called for each client response
     *
     * @public
     */
    broadcastWithAck(packet, opts, clientCountCallback, ack) {
        const flags = opts.flags || {};
        const packetOpts = {
            preEncoded: true,
            volatile: flags.volatile,
            compress: flags.compress,
        };
        packet.nsp = this.nsp.name;
        // we can use the same id for each packet, since the _ids counter is common (no duplicate)
        packet.id = this.nsp._ids++;
        const encodedPackets = this._encode(packet, packetOpts);
        let clientCount = 0;
        this.apply(opts, (socket) => {
            // track the total number of acknowledgements that are expected
            clientCount++;
            // call the ack callback for each client response
            socket.acks.set(packet.id, ack);
            if (typeof socket.notifyOutgoingListeners === "function") {
                socket.notifyOutgoingListeners(packet);
            }
            socket.client.writeToEngine(encodedPackets, packetOpts);
        });
        clientCountCallback(clientCount);
    }
    _encode(packet, packetOpts) {
        const encodedPackets = this.encoder.encode(packet);
        if (canPreComputeFrame &&
            encodedPackets.length === 1 &&
            typeof encodedPackets[0] === "string") {
            // "4" being the "message" packet type in the Engine.IO protocol
            const data = Buffer.from("4" + encodedPackets[0]);
            // see https://github.com/websockets/ws/issues/617#issuecomment-283002469
            // @ts-expect-error
            packetOpts.wsPreEncodedFrame = WebSocket.Sender.frame(data, {
                readOnly: false,
                mask: false,
                rsv1: false,
                opcode: 1,
                fin: true,
            });
        }
        return encodedPackets;
    }
    /**
     * Gets a list of sockets by sid.
     *
     * @param {Set<Room>} rooms   the explicit set of rooms to check.
     */
    sockets(rooms) {
        const sids = new Set();
        this.apply({ rooms }, (socket) => {
            sids.add(socket.id);
        });
        return Promise.resolve(sids);
    }
    /**
     * Gets the list of rooms a given socket has joined.
     *
     * @param {SocketId} id   the socket id
     */
    socketRooms(id) {
        return this.sids.get(id);
    }
    /**
     * Returns the matching socket instances
     *
     * @param opts - the filters to apply
     */
    fetchSockets(opts) {
        const sockets = [];
        this.apply(opts, (socket) => {
            sockets.push(socket);
        });
        return Promise.resolve(sockets);
    }
    /**
     * Makes the matching socket instances join the specified rooms
     *
     * @param opts - the filters to apply
     * @param rooms - the rooms to join
     */
    addSockets(opts, rooms) {
        this.apply(opts, (socket) => {
            socket.join(rooms);
        });
    }
    /**
     * Makes the matching socket instances leave the specified rooms
     *
     * @param opts - the filters to apply
     * @param rooms - the rooms to leave
     */
    delSockets(opts, rooms) {
        this.apply(opts, (socket) => {
            rooms.forEach((room) => socket.leave(room));
        });
    }
    /**
     * Makes the matching socket instances disconnect
     *
     * @param opts - the filters to apply
     * @param close - whether to close the underlying connection
     */
    disconnectSockets(opts, close) {
        this.apply(opts, (socket) => {
            socket.disconnect(close);
        });
    }
    apply(opts, callback) {
        const rooms = opts.rooms;
        const except = this.computeExceptSids(opts.except);
        if (rooms.size) {
            const ids = new Set();
            for (const room of rooms) {
                if (!this.rooms.has(room))
                    continue;
                for (const id of this.rooms.get(room)) {
                    if (ids.has(id) || except.has(id))
                        continue;
                    const socket = this.nsp.sockets.get(id);
                    if (socket) {
                        callback(socket);
                        ids.add(id);
                    }
                }
            }
        }
        else {
            for (const [id] of this.sids) {
                if (except.has(id))
                    continue;
                const socket = this.nsp.sockets.get(id);
                if (socket)
                    callback(socket);
            }
        }
    }
    computeExceptSids(exceptRooms) {
        const exceptSids = new Set();
        if (exceptRooms && exceptRooms.size > 0) {
            for (const room of exceptRooms) {
                if (this.rooms.has(room)) {
                    this.rooms.get(room).forEach((sid) => exceptSids.add(sid));
                }
            }
        }
        return exceptSids;
    }
    /**
     * Send a packet to the other Socket.IO servers in the cluster
     * @param packet - an array of arguments, which may include an acknowledgement callback at the end
     */
    serverSideEmit(packet) {
        console.warn("this adapter does not support the serverSideEmit() functionality");
    }
    /**
     * Save the client session in order to restore it upon reconnection.
     */
    persistSession(session) { }
    /**
     * Restore the session and find the packets that were missed by the client.
     * @param pid
     * @param offset
     */
    restoreSession(pid, offset) {
        return null;
    }
}
exports.Adapter = Adapter;
class SessionAwareAdapter extends Adapter {
    constructor(nsp) {
        super(nsp);
        this.nsp = nsp;
        this.sessions = new Map();
        this.packets = [];
        this.maxDisconnectionDuration =
            nsp.server.opts.connectionStateRecovery.maxDisconnectionDuration;
        const timer = setInterval(() => {
            const threshold = Date.now() - this.maxDisconnectionDuration;
            this.sessions.forEach((session, sessionId) => {
                const hasExpired = session.disconnectedAt < threshold;
                if (hasExpired) {
                    this.sessions.delete(sessionId);
                }
            });
            for (let i = this.packets.length - 1; i >= 0; i--) {
                const hasExpired = this.packets[i].emittedAt < threshold;
                if (hasExpired) {
                    this.packets.splice(0, i + 1);
                    break;
                }
            }
        }, 60 * 1000);
        // prevents the timer from keeping the process alive
        timer.unref();
    }
    persistSession(session) {
        session.disconnectedAt = Date.now();
        this.sessions.set(session.pid, session);
    }
    restoreSession(pid, offset) {
        const session = this.sessions.get(pid);
        if (!session) {
            // the session may have expired
            return null;
        }
        const hasExpired = session.disconnectedAt + this.maxDisconnectionDuration < Date.now();
        if (hasExpired) {
            // the session has expired
            this.sessions.delete(pid);
            return null;
        }
        const index = this.packets.findIndex((packet) => packet.id === offset);
        if (index === -1) {
            // the offset may be too old
            return null;
        }
        const missedPackets = [];
        for (let i = index + 1; i < this.packets.length; i++) {
            const packet = this.packets[i];
            if (shouldIncludePacket(session.rooms, packet.opts)) {
                missedPackets.push(packet.data);
            }
        }
        return Promise.resolve(Object.assign(Object.assign({}, session), { missedPackets }));
    }
    broadcast(packet, opts) {
        var _a;
        const isEventPacket = packet.type === 2;
        // packets with acknowledgement are not stored because the acknowledgement function cannot be serialized and
        // restored on another server upon reconnection
        const withoutAcknowledgement = packet.id === undefined;
        const notVolatile = ((_a = opts.flags) === null || _a === void 0 ? void 0 : _a.volatile) === undefined;
        if (isEventPacket && withoutAcknowledgement && notVolatile) {
            const id = (0, yeast_1.yeast)();
            // the offset is stored at the end of the data array, so the client knows the ID of the last packet it has
            // processed (and the format is backward-compatible)
            packet.data.push(id);
            this.packets.push({
                id,
                opts,
                data: packet.data,
                emittedAt: Date.now(),
            });
        }
        super.broadcast(packet, opts);
    }
}
exports.SessionAwareAdapter = SessionAwareAdapter;
function shouldIncludePacket(sessionRooms, opts) {
    const included = opts.rooms.size === 0 || sessionRooms.some((room) => opts.rooms.has(room));
    const notExcluded = sessionRooms.every((room) => !opts.except.has(room));
    return included && notExcluded;
}
