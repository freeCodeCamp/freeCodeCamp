"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kDispose = exports.randomBytes = exports.COSMOS_DB_MSG = exports.DOCUMENT_DB_MSG = exports.COSMOS_DB_CHECK = exports.DOCUMENT_DB_CHECK = exports.MONGODB_WARNING_CODE = exports.DEFAULT_PK_FACTORY = exports.HostAddress = exports.BufferPool = exports.List = exports.MongoDBCollectionNamespace = exports.MongoDBNamespace = exports.ByteUtils = void 0;
exports.isUint8Array = isUint8Array;
exports.hostMatchesWildcards = hostMatchesWildcards;
exports.normalizeHintField = normalizeHintField;
exports.isObject = isObject;
exports.mergeOptions = mergeOptions;
exports.filterOptions = filterOptions;
exports.applyRetryableWrites = applyRetryableWrites;
exports.isPromiseLike = isPromiseLike;
exports.decorateWithCollation = decorateWithCollation;
exports.decorateWithReadConcern = decorateWithReadConcern;
exports.getTopology = getTopology;
exports.ns = ns;
exports.makeCounter = makeCounter;
exports.uuidV4 = uuidV4;
exports.maxWireVersion = maxWireVersion;
exports.arrayStrictEqual = arrayStrictEqual;
exports.errorStrictEqual = errorStrictEqual;
exports.makeStateMachine = makeStateMachine;
exports.now = now;
exports.calculateDurationInMs = calculateDurationInMs;
exports.hasAtomicOperators = hasAtomicOperators;
exports.resolveTimeoutOptions = resolveTimeoutOptions;
exports.resolveOptions = resolveOptions;
exports.isSuperset = isSuperset;
exports.isHello = isHello;
exports.setDifference = setDifference;
exports.isRecord = isRecord;
exports.emitWarning = emitWarning;
exports.emitWarningOnce = emitWarningOnce;
exports.enumToString = enumToString;
exports.supportsRetryableWrites = supportsRetryableWrites;
exports.shuffle = shuffle;
exports.commandSupportsReadConcern = commandSupportsReadConcern;
exports.compareObjectId = compareObjectId;
exports.parseInteger = parseInteger;
exports.parseUnsignedInteger = parseUnsignedInteger;
exports.checkParentDomainMatch = checkParentDomainMatch;
exports.get = get;
exports.request = request;
exports.isHostMatch = isHostMatch;
exports.promiseWithResolvers = promiseWithResolvers;
exports.squashError = squashError;
exports.once = once;
exports.maybeAddIdToDocuments = maybeAddIdToDocuments;
exports.fileIsAccessible = fileIsAccessible;
exports.csotMin = csotMin;
exports.noop = noop;
exports.decorateDecryptionResult = decorateDecryptionResult;
exports.addAbortListener = addAbortListener;
exports.abortable = abortable;
const crypto = require("crypto");
const fs_1 = require("fs");
const http = require("http");
const timers_1 = require("timers");
const url = require("url");
const url_1 = require("url");
const util_1 = require("util");
const bson_1 = require("./bson");
const constants_1 = require("./cmap/wire_protocol/constants");
const constants_2 = require("./constants");
const error_1 = require("./error");
const read_concern_1 = require("./read_concern");
const read_preference_1 = require("./read_preference");
const common_1 = require("./sdam/common");
const write_concern_1 = require("./write_concern");
exports.ByteUtils = {
    toLocalBufferType(buffer) {
        return Buffer.isBuffer(buffer)
            ? buffer
            : Buffer.from(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    },
    equals(seqA, seqB) {
        return exports.ByteUtils.toLocalBufferType(seqA).equals(seqB);
    },
    compare(seqA, seqB) {
        return exports.ByteUtils.toLocalBufferType(seqA).compare(seqB);
    },
    toBase64(uint8array) {
        return exports.ByteUtils.toLocalBufferType(uint8array).toString('base64');
    }
};
/**
 * Returns true if value is a Uint8Array or a Buffer
 * @param value - any value that may be a Uint8Array
 */
function isUint8Array(value) {
    return (value != null &&
        typeof value === 'object' &&
        Symbol.toStringTag in value &&
        value[Symbol.toStringTag] === 'Uint8Array');
}
/**
 * Determines if a connection's address matches a user provided list
 * of domain wildcards.
 */
function hostMatchesWildcards(host, wildcards) {
    for (const wildcard of wildcards) {
        if (host === wildcard ||
            (wildcard.startsWith('*.') && host?.endsWith(wildcard.substring(2, wildcard.length))) ||
            (wildcard.startsWith('*/') && host?.endsWith(wildcard.substring(2, wildcard.length)))) {
            return true;
        }
    }
    return false;
}
/**
 * Ensure Hint field is in a shape we expect:
 * - object of index names mapping to 1 or -1
 * - just an index name
 * @internal
 */
function normalizeHintField(hint) {
    let finalHint = undefined;
    if (typeof hint === 'string') {
        finalHint = hint;
    }
    else if (Array.isArray(hint)) {
        finalHint = {};
        hint.forEach(param => {
            finalHint[param] = 1;
        });
    }
    else if (hint != null && typeof hint === 'object') {
        finalHint = {};
        for (const name in hint) {
            finalHint[name] = hint[name];
        }
    }
    return finalHint;
}
const TO_STRING = (object) => Object.prototype.toString.call(object);
/**
 * Checks if arg is an Object:
 * - **NOTE**: the check is based on the `[Symbol.toStringTag]() === 'Object'`
 * @internal
 */
function isObject(arg) {
    return '[object Object]' === TO_STRING(arg);
}
/** @internal */
function mergeOptions(target, source) {
    return { ...target, ...source };
}
/** @internal */
function filterOptions(options, names) {
    const filterOptions = {};
    for (const name in options) {
        if (names.includes(name)) {
            filterOptions[name] = options[name];
        }
    }
    // Filtered options
    return filterOptions;
}
/**
 * Applies retryWrites: true to a command if retryWrites is set on the command's database.
 * @internal
 *
 * @param target - The target command to which we will apply retryWrites.
 * @param db - The database from which we can inherit a retryWrites value.
 */
function applyRetryableWrites(target, db) {
    if (db && db.s.options?.retryWrites) {
        target.retryWrites = true;
    }
    return target;
}
/**
 * Applies a write concern to a command based on well defined inheritance rules, optionally
 * detecting support for the write concern in the first place.
 * @internal
 *
 * @param target - the target command we will be applying the write concern to
 * @param sources - sources where we can inherit default write concerns from
 * @param options - optional settings passed into a command for write concern overrides
 */
/**
 * Checks if a given value is a Promise
 *
 * @typeParam T - The resolution type of the possible promise
 * @param value - An object that could be a promise
 * @returns true if the provided value is a Promise
 */
function isPromiseLike(value) {
    return (value != null &&
        typeof value === 'object' &&
        'then' in value &&
        typeof value.then === 'function');
}
/**
 * Applies collation to a given command.
 * @internal
 *
 * @param command - the command on which to apply collation
 * @param target - target of command
 * @param options - options containing collation settings
 */
function decorateWithCollation(command, options) {
    if (options.collation && typeof options.collation === 'object') {
        command.collation = options.collation;
    }
}
/**
 * Applies a read concern to a given command.
 * @internal
 *
 * @param command - the command on which to apply the read concern
 * @param coll - the parent collection of the operation calling this method
 */
function decorateWithReadConcern(command, coll, options) {
    if (options && options.session && options.session.inTransaction()) {
        return;
    }
    const readConcern = Object.assign({}, command.readConcern || {});
    if (coll.s.readConcern) {
        Object.assign(readConcern, coll.s.readConcern);
    }
    if (Object.keys(readConcern).length > 0) {
        Object.assign(command, { readConcern: readConcern });
    }
}
/**
 * A helper function to get the topology from a given provider. Throws
 * if the topology cannot be found.
 * @throws MongoNotConnectedError
 * @internal
 */
function getTopology(provider) {
    // MongoClient or ClientSession or AbstractCursor
    if ('topology' in provider && provider.topology) {
        return provider.topology;
    }
    else if ('client' in provider && provider.client.topology) {
        return provider.client.topology;
    }
    throw new error_1.MongoNotConnectedError('MongoClient must be connected to perform this operation');
}
/** @internal */
function ns(ns) {
    return MongoDBNamespace.fromString(ns);
}
/** @public */
class MongoDBNamespace {
    /**
     * Create a namespace object
     *
     * @param db - database name
     * @param collection - collection name
     */
    constructor(db, collection) {
        this.db = db;
        this.collection = collection === '' ? undefined : collection;
    }
    toString() {
        return this.collection ? `${this.db}.${this.collection}` : this.db;
    }
    withCollection(collection) {
        return new MongoDBCollectionNamespace(this.db, collection);
    }
    static fromString(namespace) {
        if (typeof namespace !== 'string' || namespace === '') {
            // TODO(NODE-3483): Replace with MongoNamespaceError
            throw new error_1.MongoRuntimeError(`Cannot parse namespace from "${namespace}"`);
        }
        const [db, ...collectionParts] = namespace.split('.');
        const collection = collectionParts.join('.');
        return new MongoDBNamespace(db, collection === '' ? undefined : collection);
    }
}
exports.MongoDBNamespace = MongoDBNamespace;
/**
 * @public
 *
 * A class representing a collection's namespace.  This class enforces (through Typescript) that
 * the `collection` portion of the namespace is defined and should only be
 * used in scenarios where this can be guaranteed.
 */
class MongoDBCollectionNamespace extends MongoDBNamespace {
    constructor(db, collection) {
        super(db, collection);
        this.collection = collection;
    }
    static fromString(namespace) {
        return super.fromString(namespace);
    }
}
exports.MongoDBCollectionNamespace = MongoDBCollectionNamespace;
/** @internal */
function* makeCounter(seed = 0) {
    let count = seed;
    while (true) {
        const newCount = count;
        count += 1;
        yield newCount;
    }
}
/**
 * Synchronously Generate a UUIDv4
 * @internal
 */
function uuidV4() {
    const result = crypto.randomBytes(16);
    result[6] = (result[6] & 0x0f) | 0x40;
    result[8] = (result[8] & 0x3f) | 0x80;
    return result;
}
/**
 * A helper function for determining `maxWireVersion` between legacy and new topology instances
 * @internal
 */
function maxWireVersion(handshakeAware) {
    if (handshakeAware) {
        if (handshakeAware.hello) {
            return handshakeAware.hello.maxWireVersion;
        }
        if (handshakeAware.serverApi?.version) {
            // We return the max supported wire version for serverAPI.
            return constants_1.MAX_SUPPORTED_WIRE_VERSION;
        }
        // This is the fallback case for load balanced mode. If we are building commands the
        // object being checked will be a connection, and we will have a hello response on
        // it. For other cases, such as retryable writes, the object will be a server or
        // topology, and there will be no hello response on those objects, so we return
        // the max wire version so we support retryability. Once we have a min supported
        // wire version of 9, then the needsRetryableWriteLabel() check can remove the
        // usage of passing the wire version into it.
        if (handshakeAware.loadBalanced) {
            return constants_1.MAX_SUPPORTED_WIRE_VERSION;
        }
        if ('lastHello' in handshakeAware && typeof handshakeAware.lastHello === 'function') {
            const lastHello = handshakeAware.lastHello();
            if (lastHello) {
                return lastHello.maxWireVersion;
            }
        }
        if (handshakeAware.description &&
            'maxWireVersion' in handshakeAware.description &&
            handshakeAware.description.maxWireVersion != null) {
            return handshakeAware.description.maxWireVersion;
        }
    }
    return 0;
}
/** @internal */
function arrayStrictEqual(arr, arr2) {
    if (!Array.isArray(arr) || !Array.isArray(arr2)) {
        return false;
    }
    return arr.length === arr2.length && arr.every((elt, idx) => elt === arr2[idx]);
}
/** @internal */
function errorStrictEqual(lhs, rhs) {
    if (lhs === rhs) {
        return true;
    }
    if (!lhs || !rhs) {
        return lhs === rhs;
    }
    if ((lhs == null && rhs != null) || (lhs != null && rhs == null)) {
        return false;
    }
    if (lhs.constructor.name !== rhs.constructor.name) {
        return false;
    }
    if (lhs.message !== rhs.message) {
        return false;
    }
    return true;
}
/** @internal */
function makeStateMachine(stateTable) {
    return function stateTransition(target, newState) {
        const legalStates = stateTable[target.s.state];
        if (legalStates && legalStates.indexOf(newState) < 0) {
            throw new error_1.MongoRuntimeError(`illegal state transition from [${target.s.state}] => [${newState}], allowed: [${legalStates}]`);
        }
        target.emit('stateChanged', target.s.state, newState);
        target.s.state = newState;
    };
}
/** @internal */
function now() {
    const hrtime = process.hrtime();
    return Math.floor(hrtime[0] * 1000 + hrtime[1] / 1000000);
}
/** @internal */
function calculateDurationInMs(started) {
    if (typeof started !== 'number') {
        return -1;
    }
    const elapsed = now() - started;
    return elapsed < 0 ? 0 : elapsed;
}
/** @internal */
function hasAtomicOperators(doc, options) {
    if (Array.isArray(doc)) {
        for (const document of doc) {
            if (hasAtomicOperators(document)) {
                return true;
            }
        }
        return false;
    }
    const keys = Object.keys(doc);
    // In this case we need to throw if all the atomic operators are undefined.
    if (options?.ignoreUndefined) {
        let allUndefined = true;
        for (const key of keys) {
            // eslint-disable-next-line no-restricted-syntax
            if (doc[key] !== undefined) {
                allUndefined = false;
                break;
            }
        }
        if (allUndefined) {
            throw new error_1.MongoInvalidArgumentError('Update operations require that all atomic operators have defined values, but none were provided.');
        }
    }
    return keys.length > 0 && keys[0][0] === '$';
}
function resolveTimeoutOptions(client, options) {
    const { socketTimeoutMS, serverSelectionTimeoutMS, waitQueueTimeoutMS, timeoutMS } = client.s.options;
    return { socketTimeoutMS, serverSelectionTimeoutMS, waitQueueTimeoutMS, timeoutMS, ...options };
}
/**
 * Merge inherited properties from parent into options, prioritizing values from options,
 * then values from parent.
 *
 * @param parent - An optional owning class of the operation being run. ex. Db/Collection/MongoClient.
 * @param options - The options passed to the operation method.
 *
 * @internal
 */
function resolveOptions(parent, options) {
    const result = Object.assign({}, options, (0, bson_1.resolveBSONOptions)(options, parent));
    const timeoutMS = options?.timeoutMS ?? parent?.timeoutMS;
    // Users cannot pass a readConcern/writeConcern to operations in a transaction
    const session = options?.session;
    if (!session?.inTransaction()) {
        const readConcern = read_concern_1.ReadConcern.fromOptions(options) ?? parent?.readConcern;
        if (readConcern) {
            result.readConcern = readConcern;
        }
        let writeConcern = write_concern_1.WriteConcern.fromOptions(options) ?? parent?.writeConcern;
        if (writeConcern) {
            if (timeoutMS != null) {
                writeConcern = write_concern_1.WriteConcern.fromOptions({
                    writeConcern: {
                        ...writeConcern,
                        wtimeout: undefined,
                        wtimeoutMS: undefined
                    }
                });
            }
            result.writeConcern = writeConcern;
        }
    }
    result.timeoutMS = timeoutMS;
    const readPreference = read_preference_1.ReadPreference.fromOptions(options) ?? parent?.readPreference;
    if (readPreference) {
        result.readPreference = readPreference;
    }
    const isConvenientTransaction = session?.explicit && session?.timeoutContext != null;
    if (isConvenientTransaction && options?.timeoutMS != null) {
        throw new error_1.MongoInvalidArgumentError('An operation cannot be given a timeoutMS setting when inside a withTransaction call that has a timeoutMS setting');
    }
    return result;
}
function isSuperset(set, subset) {
    set = Array.isArray(set) ? new Set(set) : set;
    subset = Array.isArray(subset) ? new Set(subset) : subset;
    for (const elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}
/**
 * Checks if the document is a Hello request
 * @internal
 */
function isHello(doc) {
    return doc[constants_2.LEGACY_HELLO_COMMAND] || doc.hello ? true : false;
}
/** Returns the items that are uniquely in setA */
function setDifference(setA, setB) {
    const difference = new Set(setA);
    for (const elem of setB) {
        difference.delete(elem);
    }
    return difference;
}
const HAS_OWN = (object, prop) => Object.prototype.hasOwnProperty.call(object, prop);
function isRecord(value, requiredKeys = undefined) {
    if (!isObject(value)) {
        return false;
    }
    const ctor = value.constructor;
    if (ctor && ctor.prototype) {
        if (!isObject(ctor.prototype)) {
            return false;
        }
        // Check to see if some method exists from the Object exists
        if (!HAS_OWN(ctor.prototype, 'isPrototypeOf')) {
            return false;
        }
    }
    if (requiredKeys) {
        const keys = Object.keys(value);
        return isSuperset(keys, requiredKeys);
    }
    return true;
}
/**
 * A sequential list of items in a circularly linked list
 * @remarks
 * The head node is special, it is always defined and has a value of null.
 * It is never "included" in the list, in that, it is not returned by pop/shift or yielded by the iterator.
 * The circular linkage and always defined head node are to reduce checks for null next/prev references to zero.
 * New nodes are declared as object literals with keys always in the same order: next, prev, value.
 * @internal
 */
class List {
    get length() {
        return this.count;
    }
    get [Symbol.toStringTag]() {
        return 'List';
    }
    constructor() {
        this.count = 0;
        // this is carefully crafted:
        // declaring a complete and consistently key ordered
        // object is beneficial to the runtime optimizations
        this.head = {
            next: null,
            prev: null,
            value: null
        };
        this.head.next = this.head;
        this.head.prev = this.head;
    }
    toArray() {
        return Array.from(this);
    }
    toString() {
        return `head <=> ${this.toArray().join(' <=> ')} <=> head`;
    }
    *[Symbol.iterator]() {
        for (const node of this.nodes()) {
            yield node.value;
        }
    }
    *nodes() {
        let ptr = this.head.next;
        while (ptr !== this.head) {
            // Save next before yielding so that we make removing within iteration safe
            const { next } = ptr;
            yield ptr;
            ptr = next;
        }
    }
    /** Insert at end of list */
    push(value) {
        this.count += 1;
        const newNode = {
            next: this.head,
            prev: this.head.prev,
            value
        };
        this.head.prev.next = newNode;
        this.head.prev = newNode;
    }
    /** Inserts every item inside an iterable instead of the iterable itself */
    pushMany(iterable) {
        for (const value of iterable) {
            this.push(value);
        }
    }
    /** Insert at front of list */
    unshift(value) {
        this.count += 1;
        const newNode = {
            next: this.head.next,
            prev: this.head,
            value
        };
        this.head.next.prev = newNode;
        this.head.next = newNode;
    }
    remove(node) {
        if (node === this.head || this.length === 0) {
            return null;
        }
        this.count -= 1;
        const prevNode = node.prev;
        const nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        return node.value;
    }
    /** Removes the first node at the front of the list */
    shift() {
        return this.remove(this.head.next);
    }
    /** Removes the last node at the end of the list */
    pop() {
        return this.remove(this.head.prev);
    }
    /** Iterates through the list and removes nodes where filter returns true */
    prune(filter) {
        for (const node of this.nodes()) {
            if (filter(node.value)) {
                this.remove(node);
            }
        }
    }
    clear() {
        this.count = 0;
        this.head.next = this.head;
        this.head.prev = this.head;
    }
    /** Returns the first item in the list, does not remove */
    first() {
        // If the list is empty, value will be the head's null
        return this.head.next.value;
    }
    /** Returns the last item in the list, does not remove */
    last() {
        // If the list is empty, value will be the head's null
        return this.head.prev.value;
    }
}
exports.List = List;
/**
 * A pool of Buffers which allow you to read them as if they were one
 * @internal
 */
class BufferPool {
    constructor() {
        this.buffers = new List();
        this.totalByteLength = 0;
    }
    get length() {
        return this.totalByteLength;
    }
    /** Adds a buffer to the internal buffer pool list */
    append(buffer) {
        this.buffers.push(buffer);
        this.totalByteLength += buffer.length;
    }
    /**
     * If BufferPool contains 4 bytes or more construct an int32 from the leading bytes,
     * otherwise return null. Size can be negative, caller should error check.
     */
    getInt32() {
        if (this.totalByteLength < 4) {
            return null;
        }
        const firstBuffer = this.buffers.first();
        if (firstBuffer != null && firstBuffer.byteLength >= 4) {
            return firstBuffer.readInt32LE(0);
        }
        // Unlikely case: an int32 is split across buffers.
        // Use read and put the returned buffer back on top
        const top4Bytes = this.read(4);
        const value = top4Bytes.readInt32LE(0);
        // Put it back.
        this.totalByteLength += 4;
        this.buffers.unshift(top4Bytes);
        return value;
    }
    /** Reads the requested number of bytes, optionally consuming them */
    read(size) {
        if (typeof size !== 'number' || size < 0) {
            throw new error_1.MongoInvalidArgumentError('Argument "size" must be a non-negative number');
        }
        // oversized request returns empty buffer
        if (size > this.totalByteLength) {
            return Buffer.alloc(0);
        }
        // We know we have enough, we just don't know how it is spread across chunks
        // TODO(NODE-4732): alloc API should change based on raw option
        const result = Buffer.allocUnsafe(size);
        for (let bytesRead = 0; bytesRead < size;) {
            const buffer = this.buffers.shift();
            if (buffer == null) {
                break;
            }
            const bytesRemaining = size - bytesRead;
            const bytesReadable = Math.min(bytesRemaining, buffer.byteLength);
            const bytes = buffer.subarray(0, bytesReadable);
            result.set(bytes, bytesRead);
            bytesRead += bytesReadable;
            this.totalByteLength -= bytesReadable;
            if (bytesReadable < buffer.byteLength) {
                this.buffers.unshift(buffer.subarray(bytesReadable));
            }
        }
        return result;
    }
}
exports.BufferPool = BufferPool;
/** @public */
class HostAddress {
    constructor(hostString) {
        this.host = undefined;
        this.port = undefined;
        this.socketPath = undefined;
        this.isIPv6 = false;
        const escapedHost = hostString.split(' ').join('%20'); // escape spaces, for socket path hosts
        if (escapedHost.endsWith('.sock')) {
            // heuristically determine if we're working with a domain socket
            this.socketPath = decodeURIComponent(escapedHost);
            return;
        }
        const urlString = `iLoveJS://${escapedHost}`;
        let url;
        try {
            url = new url_1.URL(urlString);
        }
        catch (urlError) {
            const runtimeError = new error_1.MongoRuntimeError(`Unable to parse ${escapedHost} with URL`);
            runtimeError.cause = urlError;
            throw runtimeError;
        }
        const hostname = url.hostname;
        const port = url.port;
        let normalized = decodeURIComponent(hostname).toLowerCase();
        if (normalized.startsWith('[') && normalized.endsWith(']')) {
            this.isIPv6 = true;
            normalized = normalized.substring(1, hostname.length - 1);
        }
        this.host = normalized.toLowerCase();
        if (typeof port === 'number') {
            this.port = port;
        }
        else if (typeof port === 'string' && port !== '') {
            this.port = Number.parseInt(port, 10);
        }
        else {
            this.port = 27017;
        }
        if (this.port === 0) {
            throw new error_1.MongoParseError('Invalid port (zero) with hostname');
        }
        Object.freeze(this);
    }
    [Symbol.for('nodejs.util.inspect.custom')]() {
        return this.inspect();
    }
    inspect() {
        return `new HostAddress('${this.toString()}')`;
    }
    toString() {
        if (typeof this.host === 'string') {
            if (this.isIPv6) {
                return `[${this.host}]:${this.port}`;
            }
            return `${this.host}:${this.port}`;
        }
        return `${this.socketPath}`;
    }
    static fromString(s) {
        return new HostAddress(s);
    }
    static fromHostPort(host, port) {
        if (host.includes(':')) {
            host = `[${host}]`; // IPv6 address
        }
        return HostAddress.fromString(`${host}:${port}`);
    }
    static fromSrvRecord({ name, port }) {
        return HostAddress.fromHostPort(name, port);
    }
    toHostPort() {
        if (this.socketPath) {
            return { host: this.socketPath, port: 0 };
        }
        const host = this.host ?? '';
        const port = this.port ?? 0;
        return { host, port };
    }
}
exports.HostAddress = HostAddress;
exports.DEFAULT_PK_FACTORY = {
    // We prefer not to rely on ObjectId having a createPk method
    createPk() {
        return new bson_1.ObjectId();
    }
};
/**
 * When the driver used emitWarning the code will be equal to this.
 * @public
 *
 * @example
 * ```ts
 * process.on('warning', (warning) => {
 *  if (warning.code === MONGODB_WARNING_CODE) console.error('Ah an important warning! :)')
 * })
 * ```
 */
exports.MONGODB_WARNING_CODE = 'MONGODB DRIVER';
/** @internal */
function emitWarning(message) {
    return process.emitWarning(message, { code: exports.MONGODB_WARNING_CODE });
}
const emittedWarnings = new Set();
/**
 * Will emit a warning once for the duration of the application.
 * Uses the message to identify if it has already been emitted
 * so using string interpolation can cause multiple emits
 * @internal
 */
function emitWarningOnce(message) {
    if (!emittedWarnings.has(message)) {
        emittedWarnings.add(message);
        return emitWarning(message);
    }
}
/**
 * Takes a JS object and joins the values into a string separated by ', '
 */
function enumToString(en) {
    return Object.values(en).join(', ');
}
/**
 * Determine if a server supports retryable writes.
 *
 * @internal
 */
function supportsRetryableWrites(server) {
    if (!server) {
        return false;
    }
    if (server.loadBalanced) {
        // Loadbalanced topologies will always support retry writes
        return true;
    }
    if (server.description.logicalSessionTimeoutMinutes != null) {
        // that supports sessions
        if (server.description.type !== common_1.ServerType.Standalone) {
            // and that is not a standalone
            return true;
        }
    }
    return false;
}
/**
 * Fisher–Yates Shuffle
 *
 * Reference: https://bost.ocks.org/mike/shuffle/
 * @param sequence - items to be shuffled
 * @param limit - Defaults to `0`. If nonzero shuffle will slice the randomized array e.g, `.slice(0, limit)` otherwise will return the entire randomized array.
 */
function shuffle(sequence, limit = 0) {
    const items = Array.from(sequence); // shallow copy in order to never shuffle the input
    if (limit > items.length) {
        throw new error_1.MongoRuntimeError('Limit must be less than the number of items');
    }
    let remainingItemsToShuffle = items.length;
    const lowerBound = limit % items.length === 0 ? 1 : items.length - limit;
    while (remainingItemsToShuffle > lowerBound) {
        // Pick a remaining element
        const randomIndex = Math.floor(Math.random() * remainingItemsToShuffle);
        remainingItemsToShuffle -= 1;
        // And swap it with the current element
        const swapHold = items[remainingItemsToShuffle];
        items[remainingItemsToShuffle] = items[randomIndex];
        items[randomIndex] = swapHold;
    }
    return limit % items.length === 0 ? items : items.slice(lowerBound);
}
/**
 * TODO(NODE-4936): read concern eligibility for commands should be codified in command construction
 * @internal
 * @see https://github.com/mongodb/specifications/blob/master/source/read-write-concern/read-write-concern.md#read-concern
 */
function commandSupportsReadConcern(command) {
    if (command.aggregate || command.count || command.distinct || command.find || command.geoNear) {
        return true;
    }
    return false;
}
/**
 * Compare objectIds. `null` is always less
 * - `+1 = oid1 is greater than oid2`
 * - `-1 = oid1 is less than oid2`
 * - `+0 = oid1 is equal oid2`
 */
function compareObjectId(oid1, oid2) {
    if (oid1 == null && oid2 == null) {
        return 0;
    }
    if (oid1 == null) {
        return -1;
    }
    if (oid2 == null) {
        return 1;
    }
    return exports.ByteUtils.compare(oid1.id, oid2.id);
}
function parseInteger(value) {
    if (typeof value === 'number')
        return Math.trunc(value);
    const parsedValue = Number.parseInt(String(value), 10);
    return Number.isNaN(parsedValue) ? null : parsedValue;
}
function parseUnsignedInteger(value) {
    const parsedInt = parseInteger(value);
    return parsedInt != null && parsedInt >= 0 ? parsedInt : null;
}
/**
 * This function throws a MongoAPIError in the event that either of the following is true:
 * * If the provided address domain does not match the provided parent domain
 * * If the parent domain contains less than three `.` separated parts and the provided address does not contain at least one more domain level than its parent
 *
 * If a DNS server were to become compromised SRV records would still need to
 * advertise addresses that are under the same domain as the srvHost.
 *
 * @param address - The address to check against a domain
 * @param srvHost - The domain to check the provided address against
 * @returns void
 */
function checkParentDomainMatch(address, srvHost) {
    // Remove trailing dot if exists on either the resolved address or the srv hostname
    const normalizedAddress = address.endsWith('.') ? address.slice(0, address.length - 1) : address;
    const normalizedSrvHost = srvHost.endsWith('.') ? srvHost.slice(0, srvHost.length - 1) : srvHost;
    const allCharacterBeforeFirstDot = /^.*?\./;
    const srvIsLessThanThreeParts = normalizedSrvHost.split('.').length < 3;
    // Remove all characters before first dot
    // Add leading dot back to string so
    //   an srvHostDomain = '.trusted.site'
    //   will not satisfy an addressDomain that endsWith '.fake-trusted.site'
    const addressDomain = `.${normalizedAddress.replace(allCharacterBeforeFirstDot, '')}`;
    let srvHostDomain = srvIsLessThanThreeParts
        ? normalizedSrvHost
        : `.${normalizedSrvHost.replace(allCharacterBeforeFirstDot, '')}`;
    if (!srvHostDomain.startsWith('.')) {
        srvHostDomain = '.' + srvHostDomain;
    }
    if (srvIsLessThanThreeParts &&
        normalizedAddress.split('.').length <= normalizedSrvHost.split('.').length) {
        throw new error_1.MongoAPIError('Server record does not have at least one more domain level than parent URI');
    }
    if (!addressDomain.endsWith(srvHostDomain)) {
        throw new error_1.MongoAPIError('Server record does not share hostname with parent URI');
    }
}
/**
 * Perform a get request that returns status and body.
 * @internal
 */
function get(url, options = {}) {
    return new Promise((resolve, reject) => {
        /* eslint-disable prefer-const */
        let timeoutId;
        const request = http
            .get(url, options, response => {
            response.setEncoding('utf8');
            let body = '';
            response.on('data', chunk => (body += chunk));
            response.on('end', () => {
                (0, timers_1.clearTimeout)(timeoutId);
                resolve({ status: response.statusCode, body });
            });
        })
            .on('error', error => {
            (0, timers_1.clearTimeout)(timeoutId);
            reject(error);
        })
            .end();
        timeoutId = (0, timers_1.setTimeout)(() => {
            request.destroy(new error_1.MongoNetworkTimeoutError(`request timed out after 10 seconds`));
        }, 10000);
    });
}
async function request(uri, options = {}) {
    return await new Promise((resolve, reject) => {
        const requestOptions = {
            method: 'GET',
            timeout: 10000,
            json: true,
            ...url.parse(uri),
            ...options
        };
        const req = http.request(requestOptions, res => {
            res.setEncoding('utf8');
            let data = '';
            res.on('data', d => {
                data += d;
            });
            res.once('end', () => {
                if (options.json === false) {
                    resolve(data);
                    return;
                }
                try {
                    const parsed = JSON.parse(data);
                    resolve(parsed);
                }
                catch {
                    // TODO(NODE-3483)
                    reject(new error_1.MongoRuntimeError(`Invalid JSON response: "${data}"`));
                }
            });
        });
        req.once('timeout', () => req.destroy(new error_1.MongoNetworkTimeoutError(`Network request to ${uri} timed out after ${options.timeout} ms`)));
        req.once('error', error => reject(error));
        req.end();
    });
}
/** @internal */
exports.DOCUMENT_DB_CHECK = /(\.docdb\.amazonaws\.com$)|(\.docdb-elastic\.amazonaws\.com$)/;
/** @internal */
exports.COSMOS_DB_CHECK = /\.cosmos\.azure\.com$/;
/** @internal */
exports.DOCUMENT_DB_MSG = 'You appear to be connected to a DocumentDB cluster. For more information regarding feature compatibility and support please visit https://www.mongodb.com/supportability/documentdb';
/** @internal */
exports.COSMOS_DB_MSG = 'You appear to be connected to a CosmosDB cluster. For more information regarding feature compatibility and support please visit https://www.mongodb.com/supportability/cosmosdb';
/** @internal */
function isHostMatch(match, host) {
    return host && match.test(host.toLowerCase()) ? true : false;
}
function promiseWithResolvers() {
    let resolve;
    let reject;
    const promise = new Promise(function withResolversExecutor(promiseResolve, promiseReject) {
        resolve = promiseResolve;
        reject = promiseReject;
    });
    return { promise, resolve, reject };
}
/**
 * A noop function intended for use in preventing unhandled rejections.
 *
 * @example
 * ```js
 * const promise = myAsyncTask();
 * // eslint-disable-next-line github/no-then
 * promise.then(undefined, squashError);
 * ```
 */
function squashError(_error) {
    return;
}
exports.randomBytes = (0, util_1.promisify)(crypto.randomBytes);
/**
 * Replicates the events.once helper.
 *
 * Removes unused signal logic and It **only** supports 0 or 1 argument events.
 *
 * @param ee - An event emitter that may emit `ev`
 * @param name - An event name to wait for
 */
async function once(ee, name, options) {
    options?.signal?.throwIfAborted();
    const { promise, resolve, reject } = promiseWithResolvers();
    const onEvent = (data) => resolve(data);
    const onError = (error) => reject(error);
    const abortListener = addAbortListener(options?.signal, function () {
        reject(this.reason);
    });
    ee.once(name, onEvent).once('error', onError);
    try {
        return await promise;
    }
    finally {
        ee.off(name, onEvent);
        ee.off('error', onError);
        abortListener?.[exports.kDispose]();
    }
}
function maybeAddIdToDocuments(collection, document, options) {
    const forceServerObjectId = options.forceServerObjectId ?? collection.db.options?.forceServerObjectId ?? false;
    // no need to modify the docs if server sets the ObjectId
    if (forceServerObjectId) {
        return document;
    }
    if (document._id == null) {
        document._id = collection.s.pkFactory.createPk();
    }
    return document;
}
async function fileIsAccessible(fileName, mode) {
    try {
        await fs_1.promises.access(fileName, mode);
        return true;
    }
    catch {
        return false;
    }
}
function csotMin(duration1, duration2) {
    if (duration1 === 0)
        return duration2;
    if (duration2 === 0)
        return duration1;
    return Math.min(duration1, duration2);
}
function noop() {
    return;
}
/**
 * Recurse through the (identically-shaped) `decrypted` and `original`
 * objects and attach a `decryptedKeys` property on each sub-object that
 * contained encrypted fields. Because we only call this on BSON responses,
 * we do not need to worry about circular references.
 *
 * @internal
 */
function decorateDecryptionResult(decrypted, original, isTopLevelDecorateCall = true) {
    if (isTopLevelDecorateCall) {
        // The original value could have been either a JS object or a BSON buffer
        if (Buffer.isBuffer(original)) {
            original = (0, bson_1.deserialize)(original);
        }
        if (Buffer.isBuffer(decrypted)) {
            throw new error_1.MongoRuntimeError('Expected result of decryption to be deserialized BSON object');
        }
    }
    if (!decrypted || typeof decrypted !== 'object')
        return;
    for (const k of Object.keys(decrypted)) {
        const originalValue = original[k];
        // An object was decrypted by libmongocrypt if and only if it was
        // a BSON Binary object with subtype 6.
        if (originalValue && originalValue._bsontype === 'Binary' && originalValue.sub_type === 6) {
            if (!decrypted[constants_2.kDecoratedKeys]) {
                Object.defineProperty(decrypted, constants_2.kDecoratedKeys, {
                    value: [],
                    configurable: true,
                    enumerable: false,
                    writable: false
                });
            }
            // this is defined in the preceding if-statement
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            decrypted[constants_2.kDecoratedKeys].push(k);
            // Do not recurse into this decrypted value. It could be a sub-document/array,
            // in which case there is no original value associated with its subfields.
            continue;
        }
        decorateDecryptionResult(decrypted[k], originalValue, false);
    }
}
/** @internal */
exports.kDispose = Symbol.dispose ?? Symbol('dispose');
/**
 * A utility that helps with writing listener code idiomatically
 *
 * @example
 * ```js
 * using listener = addAbortListener(signal, function () {
 *   console.log('aborted', this.reason);
 * });
 * ```
 *
 * @param signal - if exists adds an abort listener
 * @param listener - the listener to be added to signal
 * @returns A disposable that will remove the abort listener
 */
function addAbortListener(signal, listener) {
    if (signal == null)
        return;
    signal.addEventListener('abort', listener, { once: true });
    return { [exports.kDispose]: () => signal.removeEventListener('abort', listener) };
}
/**
 * Takes a promise and races it with a promise wrapping the abort event of the optionally provided signal.
 * The given promise is _always_ ordered before the signal's abort promise.
 * When given an already rejected promise and an already aborted signal, the promise's rejection takes precedence.
 *
 * Any asynchronous processing in `promise` will continue even after the abort signal has fired,
 * but control will be returned to the caller
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
 *
 * @param promise - A promise to discard if the signal aborts
 * @param options - An options object carrying an optional signal
 */
async function abortable(promise, { signal }) {
    if (signal == null) {
        return await promise;
    }
    const { promise: aborted, reject } = promiseWithResolvers();
    const abortListener = signal.aborted
        ? reject(signal.reason)
        : addAbortListener(signal, function () {
            reject(this.reason);
        });
    try {
        return await Promise.race([promise, aborted]);
    }
    finally {
        abortListener?.[exports.kDispose]();
    }
}
//# sourceMappingURL=utils.js.map