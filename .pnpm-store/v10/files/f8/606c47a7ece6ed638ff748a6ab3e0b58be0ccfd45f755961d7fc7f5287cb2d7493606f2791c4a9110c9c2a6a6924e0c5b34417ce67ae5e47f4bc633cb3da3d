"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteSocket = exports.BroadcastOperator = void 0;
const socket_types_1 = require("./socket-types");
const socket_io_parser_1 = require("socket.io-parser");
class BroadcastOperator {
    constructor(adapter, rooms = new Set(), exceptRooms = new Set(), flags = {}) {
        this.adapter = adapter;
        this.rooms = rooms;
        this.exceptRooms = exceptRooms;
        this.flags = flags;
    }
    /**
     * Targets a room when emitting.
     *
     * @example
     * // the “foo” event will be broadcast to all connected clients in the “room-101” room
     * io.to("room-101").emit("foo", "bar");
     *
     * // with an array of rooms (a client will be notified at most once)
     * io.to(["room-101", "room-102"]).emit("foo", "bar");
     *
     * // with multiple chained calls
     * io.to("room-101").to("room-102").emit("foo", "bar");
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    to(room) {
        const rooms = new Set(this.rooms);
        if (Array.isArray(room)) {
            room.forEach((r) => rooms.add(r));
        }
        else {
            rooms.add(room);
        }
        return new BroadcastOperator(this.adapter, rooms, this.exceptRooms, this.flags);
    }
    /**
     * Targets a room when emitting. Similar to `to()`, but might feel clearer in some cases:
     *
     * @example
     * // disconnect all clients in the "room-101" room
     * io.in("room-101").disconnectSockets();
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    in(room) {
        return this.to(room);
    }
    /**
     * Excludes a room when emitting.
     *
     * @example
     * // the "foo" event will be broadcast to all connected clients, except the ones that are in the "room-101" room
     * io.except("room-101").emit("foo", "bar");
     *
     * // with an array of rooms
     * io.except(["room-101", "room-102"]).emit("foo", "bar");
     *
     * // with multiple chained calls
     * io.except("room-101").except("room-102").emit("foo", "bar");
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    except(room) {
        const exceptRooms = new Set(this.exceptRooms);
        if (Array.isArray(room)) {
            room.forEach((r) => exceptRooms.add(r));
        }
        else {
            exceptRooms.add(room);
        }
        return new BroadcastOperator(this.adapter, this.rooms, exceptRooms, this.flags);
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * io.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return a new BroadcastOperator instance
     */
    compress(compress) {
        const flags = Object.assign({}, this.flags, { compress });
        return new BroadcastOperator(this.adapter, this.rooms, this.exceptRooms, flags);
    }
    /**
     * Sets a modifier for a subsequent event emission that the event data may be lost if the client is not ready to
     * receive messages (because of network slowness or other issues, or because they’re connected through long polling
     * and is in the middle of a request-response cycle).
     *
     * @example
     * io.volatile.emit("hello"); // the clients may or may not receive it
     *
     * @return a new BroadcastOperator instance
     */
    get volatile() {
        const flags = Object.assign({}, this.flags, { volatile: true });
        return new BroadcastOperator(this.adapter, this.rooms, this.exceptRooms, flags);
    }
    /**
     * Sets a modifier for a subsequent event emission that the event data will only be broadcast to the current node.
     *
     * @example
     * // the “foo” event will be broadcast to all connected clients on this node
     * io.local.emit("foo", "bar");
     *
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    get local() {
        const flags = Object.assign({}, this.flags, { local: true });
        return new BroadcastOperator(this.adapter, this.rooms, this.exceptRooms, flags);
    }
    /**
     * Adds a timeout in milliseconds for the next operation
     *
     * @example
     * io.timeout(1000).emit("some-event", (err, responses) => {
     *   if (err) {
     *     // some clients did not acknowledge the event in the given delay
     *   } else {
     *     console.log(responses); // one response per client
     *   }
     * });
     *
     * @param timeout
     */
    timeout(timeout) {
        const flags = Object.assign({}, this.flags, { timeout });
        return new BroadcastOperator(this.adapter, this.rooms, this.exceptRooms, flags);
    }
    /**
     * Emits to all clients.
     *
     * @example
     * // the “foo” event will be broadcast to all connected clients
     * io.emit("foo", "bar");
     *
     * // the “foo” event will be broadcast to all connected clients in the “room-101” room
     * io.to("room-101").emit("foo", "bar");
     *
     * // with an acknowledgement expected from all connected clients
     * io.timeout(1000).emit("some-event", (err, responses) => {
     *   if (err) {
     *     // some clients did not acknowledge the event in the given delay
     *   } else {
     *     console.log(responses); // one response per client
     *   }
     * });
     *
     * @return Always true
     */
    emit(ev, ...args) {
        if (socket_types_1.RESERVED_EVENTS.has(ev)) {
            throw new Error(`"${String(ev)}" is a reserved event name`);
        }
        // set up packet object
        const data = [ev, ...args];
        const packet = {
            type: socket_io_parser_1.PacketType.EVENT,
            data: data,
        };
        const withAck = typeof data[data.length - 1] === "function";
        if (!withAck) {
            this.adapter.broadcast(packet, {
                rooms: this.rooms,
                except: this.exceptRooms,
                flags: this.flags,
            });
            return true;
        }
        const ack = data.pop();
        let timedOut = false;
        let responses = [];
        const timer = setTimeout(() => {
            timedOut = true;
            ack.apply(this, [
                new Error("operation has timed out"),
                this.flags.expectSingleResponse ? null : responses,
            ]);
        }, this.flags.timeout);
        let expectedServerCount = -1;
        let actualServerCount = 0;
        let expectedClientCount = 0;
        const checkCompleteness = () => {
            if (!timedOut &&
                expectedServerCount === actualServerCount &&
                responses.length === expectedClientCount) {
                clearTimeout(timer);
                ack.apply(this, [
                    null,
                    this.flags.expectSingleResponse ? responses[0] : responses,
                ]);
            }
        };
        this.adapter.broadcastWithAck(packet, {
            rooms: this.rooms,
            except: this.exceptRooms,
            flags: this.flags,
        }, (clientCount) => {
            // each Socket.IO server in the cluster sends the number of clients that were notified
            expectedClientCount += clientCount;
            actualServerCount++;
            checkCompleteness();
        }, (clientResponse) => {
            // each client sends an acknowledgement
            responses.push(clientResponse);
            checkCompleteness();
        });
        this.adapter.serverCount().then((serverCount) => {
            expectedServerCount = serverCount;
            checkCompleteness();
        });
        return true;
    }
    /**
     * Emits an event and waits for an acknowledgement from all clients.
     *
     * @example
     * try {
     *   const responses = await io.timeout(1000).emitWithAck("some-event");
     *   console.log(responses); // one response per client
     * } catch (e) {
     *   // some clients did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when all clients have acknowledged the event
     */
    emitWithAck(ev, ...args) {
        return new Promise((resolve, reject) => {
            args.push((err, responses) => {
                if (err) {
                    err.responses = responses;
                    return reject(err);
                }
                else {
                    return resolve(responses);
                }
            });
            this.emit(ev, ...args);
        });
    }
    /**
     * Gets a list of clients.
     *
     * @deprecated this method will be removed in the next major release, please use {@link Server#serverSideEmit} or
     * {@link fetchSockets} instead.
     */
    allSockets() {
        if (!this.adapter) {
            throw new Error("No adapter for this namespace, are you trying to get the list of clients of a dynamic namespace?");
        }
        return this.adapter.sockets(this.rooms);
    }
    /**
     * Returns the matching socket instances. This method works across a cluster of several Socket.IO servers.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * // return all Socket instances
     * const sockets = await io.fetchSockets();
     *
     * // return all Socket instances in the "room1" room
     * const sockets = await io.in("room1").fetchSockets();
     *
     * for (const socket of sockets) {
     *   console.log(socket.id);
     *   console.log(socket.handshake);
     *   console.log(socket.rooms);
     *   console.log(socket.data);
     *
     *   socket.emit("hello");
     *   socket.join("room1");
     *   socket.leave("room2");
     *   socket.disconnect();
     * }
     */
    fetchSockets() {
        return this.adapter
            .fetchSockets({
            rooms: this.rooms,
            except: this.exceptRooms,
            flags: this.flags,
        })
            .then((sockets) => {
            return sockets.map((socket) => {
                if (socket.server) {
                    return socket; // local instance
                }
                else {
                    return new RemoteSocket(this.adapter, socket);
                }
            });
        });
    }
    /**
     * Makes the matching socket instances join the specified rooms.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     *
     * // make all socket instances join the "room1" room
     * io.socketsJoin("room1");
     *
     * // make all socket instances in the "room1" room join the "room2" and "room3" rooms
     * io.in("room1").socketsJoin(["room2", "room3"]);
     *
     * @param room - a room, or an array of rooms
     */
    socketsJoin(room) {
        this.adapter.addSockets({
            rooms: this.rooms,
            except: this.exceptRooms,
            flags: this.flags,
        }, Array.isArray(room) ? room : [room]);
    }
    /**
     * Makes the matching socket instances leave the specified rooms.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * // make all socket instances leave the "room1" room
     * io.socketsLeave("room1");
     *
     * // make all socket instances in the "room1" room leave the "room2" and "room3" rooms
     * io.in("room1").socketsLeave(["room2", "room3"]);
     *
     * @param room - a room, or an array of rooms
     */
    socketsLeave(room) {
        this.adapter.delSockets({
            rooms: this.rooms,
            except: this.exceptRooms,
            flags: this.flags,
        }, Array.isArray(room) ? room : [room]);
    }
    /**
     * Makes the matching socket instances disconnect.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * // make all socket instances disconnect (the connections might be kept alive for other namespaces)
     * io.disconnectSockets();
     *
     * // make all socket instances in the "room1" room disconnect and close the underlying connections
     * io.in("room1").disconnectSockets(true);
     *
     * @param close - whether to close the underlying connection
     */
    disconnectSockets(close = false) {
        this.adapter.disconnectSockets({
            rooms: this.rooms,
            except: this.exceptRooms,
            flags: this.flags,
        }, close);
    }
}
exports.BroadcastOperator = BroadcastOperator;
/**
 * Expose of subset of the attributes and methods of the Socket class
 */
class RemoteSocket {
    constructor(adapter, details) {
        this.id = details.id;
        this.handshake = details.handshake;
        this.rooms = new Set(details.rooms);
        this.data = details.data;
        this.operator = new BroadcastOperator(adapter, new Set([this.id]), new Set(), {
            expectSingleResponse: true, // so that remoteSocket.emit() with acknowledgement behaves like socket.emit()
        });
    }
    /**
     * Adds a timeout in milliseconds for the next operation.
     *
     * @example
     * const sockets = await io.fetchSockets();
     *
     * for (const socket of sockets) {
     *   if (someCondition) {
     *     socket.timeout(1000).emit("some-event", (err) => {
     *       if (err) {
     *         // the client did not acknowledge the event in the given delay
     *       }
     *     });
     *   }
     * }
     *
     * // note: if possible, using a room instead of looping over all sockets is preferable
     * io.timeout(1000).to(someConditionRoom).emit("some-event", (err, responses) => {
     *   // ...
     * });
     *
     * @param timeout
     */
    timeout(timeout) {
        return this.operator.timeout(timeout);
    }
    emit(ev, ...args) {
        return this.operator.emit(ev, ...args);
    }
    /**
     * Joins a room.
     *
     * @param {String|Array} room - room or array of rooms
     */
    join(room) {
        return this.operator.socketsJoin(room);
    }
    /**
     * Leaves a room.
     *
     * @param {String} room
     */
    leave(room) {
        return this.operator.socketsLeave(room);
    }
    /**
     * Disconnects this client.
     *
     * @param {Boolean} close - if `true`, closes the underlying connection
     * @return {Socket} self
     */
    disconnect(close = false) {
        this.operator.disconnectSockets(close);
        return this;
    }
}
exports.RemoteSocket = RemoteSocket;
