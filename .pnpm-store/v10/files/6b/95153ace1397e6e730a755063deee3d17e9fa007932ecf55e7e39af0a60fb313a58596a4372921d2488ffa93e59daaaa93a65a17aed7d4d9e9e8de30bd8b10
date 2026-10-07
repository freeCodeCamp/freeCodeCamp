"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParentNamespace = void 0;
const namespace_1 = require("./namespace");
const socket_io_adapter_1 = require("socket.io-adapter");
const debug_1 = __importDefault(require("debug"));
const debug = (0, debug_1.default)("socket.io:parent-namespace");
/**
 * A parent namespace is a special {@link Namespace} that holds a list of child namespaces which were created either
 * with a regular expression or with a function.
 *
 * @example
 * const parentNamespace = io.of(/\/dynamic-\d+/);
 *
 * parentNamespace.on("connection", (socket) => {
 *   const childNamespace = socket.nsp;
 * }
 *
 * // will reach all the clients that are in one of the child namespaces, like "/dynamic-101"
 * parentNamespace.emit("hello", "world");
 *
 */
class ParentNamespace extends namespace_1.Namespace {
    constructor(server) {
        super(server, "/_" + ParentNamespace.count++);
        this.children = new Set();
    }
    /**
     * @private
     */
    _initAdapter() {
        this.adapter = new ParentBroadcastAdapter(this);
    }
    emit(ev, ...args) {
        this.children.forEach((nsp) => {
            nsp.emit(ev, ...args);
        });
        return true;
    }
    createChild(name) {
        debug("creating child namespace %s", name);
        const namespace = new namespace_1.Namespace(this.server, name);
        this["_fns"].forEach((fn) => namespace.use(fn));
        this.listeners("connect").forEach((listener) => namespace.on("connect", listener));
        this.listeners("connection").forEach((listener) => namespace.on("connection", listener));
        this.children.add(namespace);
        if (this.server._opts.cleanupEmptyChildNamespaces) {
            const remove = namespace._remove;
            namespace._remove = (socket) => {
                remove.call(namespace, socket);
                if (namespace.sockets.size === 0) {
                    debug("closing child namespace %s", name);
                    namespace.adapter.close();
                    this.server._nsps.delete(namespace.name);
                    this.children.delete(namespace);
                }
            };
        }
        this.server._nsps.set(name, namespace);
        // @ts-ignore
        this.server.sockets.emitReserved("new_namespace", namespace);
        return namespace;
    }
    fetchSockets() {
        // note: we could make the fetchSockets() method work for dynamic namespaces created with a regex (by sending the
        // regex to the other Socket.IO servers, and returning the sockets of each matching namespace for example), but
        // the behavior for namespaces created with a function is less clear
        // note²: we cannot loop over each children namespace, because with multiple Socket.IO servers, a given namespace
        // may exist on one node but not exist on another (since it is created upon client connection)
        throw new Error("fetchSockets() is not supported on parent namespaces");
    }
}
exports.ParentNamespace = ParentNamespace;
ParentNamespace.count = 0;
/**
 * A dummy adapter that only supports broadcasting to child (concrete) namespaces.
 * @private file
 */
class ParentBroadcastAdapter extends socket_io_adapter_1.Adapter {
    broadcast(packet, opts) {
        this.nsp.children.forEach((nsp) => {
            nsp.adapter.broadcast(packet, opts);
        });
    }
}
