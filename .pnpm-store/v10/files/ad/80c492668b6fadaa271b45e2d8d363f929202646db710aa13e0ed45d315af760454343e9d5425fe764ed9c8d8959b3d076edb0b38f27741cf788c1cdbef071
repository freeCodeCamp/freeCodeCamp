import * as crypto from 'crypto';
import type { SrvRecord } from 'dns';
import { type EventEmitter } from 'events';
import { promises as fs } from 'fs';
import * as http from 'http';
import { clearTimeout, setTimeout } from 'timers';
import * as url from 'url';
import { URL } from 'url';
import { promisify } from 'util';

import { deserialize, type Document, ObjectId, resolveBSONOptions } from './bson';
import type { Connection } from './cmap/connection';
import { MAX_SUPPORTED_WIRE_VERSION } from './cmap/wire_protocol/constants';
import type { Collection } from './collection';
import { kDecoratedKeys, LEGACY_HELLO_COMMAND } from './constants';
import type { AbstractCursor } from './cursor/abstract_cursor';
import type { FindCursor } from './cursor/find_cursor';
import type { Db } from './db';
import {
  type AnyError,
  MongoAPIError,
  MongoInvalidArgumentError,
  MongoNetworkTimeoutError,
  MongoNotConnectedError,
  MongoParseError,
  MongoRuntimeError
} from './error';
import type { MongoClient } from './mongo_client';
import { type Abortable } from './mongo_types';
import type { CommandOperationOptions, OperationParent } from './operations/command';
import type { Hint, OperationOptions } from './operations/operation';
import { ReadConcern } from './read_concern';
import { ReadPreference } from './read_preference';
import { ServerType } from './sdam/common';
import type { Server } from './sdam/server';
import type { Topology } from './sdam/topology';
import type { ClientSession } from './sessions';
import { type TimeoutContextOptions } from './timeout';
import { WriteConcern } from './write_concern';

/**
 * MongoDB Driver style callback
 * @public
 */
export type Callback<T = any> = (error?: AnyError, result?: T) => void;

export type AnyOptions = Document;

export const ByteUtils = {
  toLocalBufferType(this: void, buffer: Buffer | Uint8Array): Buffer {
    return Buffer.isBuffer(buffer)
      ? buffer
      : Buffer.from(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  },

  equals(this: void, seqA: Uint8Array, seqB: Uint8Array) {
    return ByteUtils.toLocalBufferType(seqA).equals(seqB);
  },

  compare(this: void, seqA: Uint8Array, seqB: Uint8Array) {
    return ByteUtils.toLocalBufferType(seqA).compare(seqB);
  },

  toBase64(this: void, uint8array: Uint8Array) {
    return ByteUtils.toLocalBufferType(uint8array).toString('base64');
  }
};

/**
 * Returns true if value is a Uint8Array or a Buffer
 * @param value - any value that may be a Uint8Array
 */
export function isUint8Array(value: unknown): value is Uint8Array {
  return (
    value != null &&
    typeof value === 'object' &&
    Symbol.toStringTag in value &&
    value[Symbol.toStringTag] === 'Uint8Array'
  );
}

/**
 * Determines if a connection's address matches a user provided list
 * of domain wildcards.
 */
export function hostMatchesWildcards(host: string, wildcards: string[]): boolean {
  for (const wildcard of wildcards) {
    if (
      host === wildcard ||
      (wildcard.startsWith('*.') && host?.endsWith(wildcard.substring(2, wildcard.length))) ||
      (wildcard.startsWith('*/') && host?.endsWith(wildcard.substring(2, wildcard.length)))
    ) {
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
export function normalizeHintField(hint?: Hint): Hint | undefined {
  let finalHint = undefined;

  if (typeof hint === 'string') {
    finalHint = hint;
  } else if (Array.isArray(hint)) {
    finalHint = {};

    hint.forEach(param => {
      finalHint[param] = 1;
    });
  } else if (hint != null && typeof hint === 'object') {
    finalHint = {} as Document;
    for (const name in hint) {
      finalHint[name] = hint[name];
    }
  }

  return finalHint;
}

const TO_STRING = (object: unknown) => Object.prototype.toString.call(object);
/**
 * Checks if arg is an Object:
 * - **NOTE**: the check is based on the `[Symbol.toStringTag]() === 'Object'`
 * @internal
 */

export function isObject(arg: unknown): arg is object {
  return '[object Object]' === TO_STRING(arg);
}

/** @internal */
export function mergeOptions<T, S>(target: T, source: S): T & S {
  return { ...target, ...source };
}

/** @internal */
export function filterOptions(options: AnyOptions, names: ReadonlyArray<string>): AnyOptions {
  const filterOptions: AnyOptions = {};

  for (const name in options) {
    if (names.includes(name)) {
      filterOptions[name] = options[name];
    }
  }

  // Filtered options
  return filterOptions;
}

interface HasRetryableWrites {
  retryWrites?: boolean;
}
/**
 * Applies retryWrites: true to a command if retryWrites is set on the command's database.
 * @internal
 *
 * @param target - The target command to which we will apply retryWrites.
 * @param db - The database from which we can inherit a retryWrites value.
 */
export function applyRetryableWrites<T extends HasRetryableWrites>(target: T, db?: Db): T {
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
export function isPromiseLike<T = unknown>(value?: unknown): value is PromiseLike<T> {
  return (
    value != null &&
    typeof value === 'object' &&
    'then' in value &&
    typeof value.then === 'function'
  );
}

/**
 * Applies collation to a given command.
 * @internal
 *
 * @param command - the command on which to apply collation
 * @param target - target of command
 * @param options - options containing collation settings
 */
export function decorateWithCollation(command: Document, options: AnyOptions): void {
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
export function decorateWithReadConcern(
  command: Document,
  coll: { s: { readConcern?: ReadConcern } },
  options?: OperationOptions
): void {
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
 * @internal
 */
export type TopologyProvider =
  | MongoClient
  | ClientSession
  | FindCursor
  | AbstractCursor
  | Collection<any>
  | Db;

/**
 * A helper function to get the topology from a given provider. Throws
 * if the topology cannot be found.
 * @throws MongoNotConnectedError
 * @internal
 */
export function getTopology(provider: TopologyProvider): Topology {
  // MongoClient or ClientSession or AbstractCursor
  if ('topology' in provider && provider.topology) {
    return provider.topology;
  } else if ('client' in provider && provider.client.topology) {
    return provider.client.topology;
  }

  throw new MongoNotConnectedError('MongoClient must be connected to perform this operation');
}

/** @internal */
export function ns(ns: string): MongoDBNamespace {
  return MongoDBNamespace.fromString(ns);
}

/** @public */
export class MongoDBNamespace {
  db: string;
  collection?: string;
  /**
   * Create a namespace object
   *
   * @param db - database name
   * @param collection - collection name
   */
  constructor(db: string, collection?: string) {
    this.db = db;
    this.collection = collection === '' ? undefined : collection;
  }

  toString(): string {
    return this.collection ? `${this.db}.${this.collection}` : this.db;
  }

  withCollection(collection: string): MongoDBCollectionNamespace {
    return new MongoDBCollectionNamespace(this.db, collection);
  }

  static fromString(namespace?: string): MongoDBNamespace {
    if (typeof namespace !== 'string' || namespace === '') {
      // TODO(NODE-3483): Replace with MongoNamespaceError
      throw new MongoRuntimeError(`Cannot parse namespace from "${namespace}"`);
    }

    const [db, ...collectionParts] = namespace.split('.');
    const collection = collectionParts.join('.');
    return new MongoDBNamespace(db, collection === '' ? undefined : collection);
  }
}

/**
 * @public
 *
 * A class representing a collection's namespace.  This class enforces (through Typescript) that
 * the `collection` portion of the namespace is defined and should only be
 * used in scenarios where this can be guaranteed.
 */
export class MongoDBCollectionNamespace extends MongoDBNamespace {
  override collection: string;

  constructor(db: string, collection: string) {
    super(db, collection);
    this.collection = collection;
  }

  static override fromString(namespace?: string): MongoDBCollectionNamespace {
    return super.fromString(namespace) as MongoDBCollectionNamespace;
  }
}

/** @internal */
export function* makeCounter(seed = 0): Generator<number> {
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
export function uuidV4(): Buffer {
  const result = crypto.randomBytes(16);
  result[6] = (result[6] & 0x0f) | 0x40;
  result[8] = (result[8] & 0x3f) | 0x80;
  return result;
}

/**
 * A helper function for determining `maxWireVersion` between legacy and new topology instances
 * @internal
 */
export function maxWireVersion(handshakeAware?: Connection | Topology | Server): number {
  if (handshakeAware) {
    if (handshakeAware.hello) {
      return handshakeAware.hello.maxWireVersion;
    }

    if (handshakeAware.serverApi?.version) {
      // We return the max supported wire version for serverAPI.
      return MAX_SUPPORTED_WIRE_VERSION;
    }
    // This is the fallback case for load balanced mode. If we are building commands the
    // object being checked will be a connection, and we will have a hello response on
    // it. For other cases, such as retryable writes, the object will be a server or
    // topology, and there will be no hello response on those objects, so we return
    // the max wire version so we support retryability. Once we have a min supported
    // wire version of 9, then the needsRetryableWriteLabel() check can remove the
    // usage of passing the wire version into it.
    if (handshakeAware.loadBalanced) {
      return MAX_SUPPORTED_WIRE_VERSION;
    }

    if ('lastHello' in handshakeAware && typeof handshakeAware.lastHello === 'function') {
      const lastHello = handshakeAware.lastHello();
      if (lastHello) {
        return lastHello.maxWireVersion;
      }
    }

    if (
      handshakeAware.description &&
      'maxWireVersion' in handshakeAware.description &&
      handshakeAware.description.maxWireVersion != null
    ) {
      return handshakeAware.description.maxWireVersion;
    }
  }

  return 0;
}

/** @internal */
export function arrayStrictEqual(arr: unknown[], arr2: unknown[]): boolean {
  if (!Array.isArray(arr) || !Array.isArray(arr2)) {
    return false;
  }

  return arr.length === arr2.length && arr.every((elt, idx) => elt === arr2[idx]);
}

/** @internal */
export function errorStrictEqual(lhs?: AnyError | null, rhs?: AnyError | null): boolean {
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

interface StateTable {
  [key: string]: string[];
}
interface ObjectWithState {
  s: { state: string };
  emit(event: 'stateChanged', state: string, newState: string): void;
}
interface StateTransitionFunction {
  (target: ObjectWithState, newState: string): void;
}

/** @public */
export type EventEmitterWithState = {
  /** @internal */
  stateChanged(previous: string, current: string): void;
};

/** @internal */
export function makeStateMachine(stateTable: StateTable): StateTransitionFunction {
  return function stateTransition(target, newState) {
    const legalStates = stateTable[target.s.state];
    if (legalStates && legalStates.indexOf(newState) < 0) {
      throw new MongoRuntimeError(
        `illegal state transition from [${target.s.state}] => [${newState}], allowed: [${legalStates}]`
      );
    }

    target.emit('stateChanged', target.s.state, newState);
    target.s.state = newState;
  };
}

/** @internal */
export function now(): number {
  const hrtime = process.hrtime();
  return Math.floor(hrtime[0] * 1000 + hrtime[1] / 1000000);
}

/** @internal */
export function calculateDurationInMs(started: number | undefined): number {
  if (typeof started !== 'number') {
    return -1;
  }

  const elapsed = now() - started;
  return elapsed < 0 ? 0 : elapsed;
}

/** @internal */
export function hasAtomicOperators(
  doc: Document | Document[],
  options?: CommandOperationOptions
): boolean {
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
      throw new MongoInvalidArgumentError(
        'Update operations require that all atomic operators have defined values, but none were provided.'
      );
    }
  }

  return keys.length > 0 && keys[0][0] === '$';
}

export function resolveTimeoutOptions<T extends Partial<TimeoutContextOptions>>(
  client: MongoClient,
  options: T
): T &
  Pick<
    MongoClient['s']['options'],
    'timeoutMS' | 'serverSelectionTimeoutMS' | 'waitQueueTimeoutMS' | 'socketTimeoutMS'
  > {
  const { socketTimeoutMS, serverSelectionTimeoutMS, waitQueueTimeoutMS, timeoutMS } =
    client.s.options;
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
export function resolveOptions<T extends CommandOperationOptions>(
  parent: OperationParent | undefined,
  options?: T
): T {
  const result: T = Object.assign({}, options, resolveBSONOptions(options, parent));

  const timeoutMS = options?.timeoutMS ?? parent?.timeoutMS;
  // Users cannot pass a readConcern/writeConcern to operations in a transaction
  const session = options?.session;

  if (!session?.inTransaction()) {
    const readConcern = ReadConcern.fromOptions(options) ?? parent?.readConcern;
    if (readConcern) {
      result.readConcern = readConcern;
    }

    let writeConcern = WriteConcern.fromOptions(options) ?? parent?.writeConcern;
    if (writeConcern) {
      if (timeoutMS != null) {
        writeConcern = WriteConcern.fromOptions({
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

  const readPreference = ReadPreference.fromOptions(options) ?? parent?.readPreference;
  if (readPreference) {
    result.readPreference = readPreference;
  }

  const isConvenientTransaction = session?.explicit && session?.timeoutContext != null;
  if (isConvenientTransaction && options?.timeoutMS != null) {
    throw new MongoInvalidArgumentError(
      'An operation cannot be given a timeoutMS setting when inside a withTransaction call that has a timeoutMS setting'
    );
  }

  return result;
}

export function isSuperset(set: Set<any> | any[], subset: Set<any> | any[]): boolean {
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
export function isHello(doc: Document): boolean {
  return doc[LEGACY_HELLO_COMMAND] || doc.hello ? true : false;
}

/** Returns the items that are uniquely in setA */
export function setDifference<T>(setA: Iterable<T>, setB: Iterable<T>): Set<T> {
  const difference = new Set<T>(setA);
  for (const elem of setB) {
    difference.delete(elem);
  }
  return difference;
}

const HAS_OWN = (object: unknown, prop: string) =>
  Object.prototype.hasOwnProperty.call(object, prop);

export function isRecord<T extends readonly string[]>(
  value: unknown,
  requiredKeys: T
): value is Record<T[number], any>;
export function isRecord(value: unknown): value is Record<string, any>;
export function isRecord(
  value: unknown,
  requiredKeys: string[] | undefined = undefined
): value is Record<string, any> {
  if (!isObject(value)) {
    return false;
  }

  const ctor = (value as any).constructor;
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
    const keys = Object.keys(value as Record<string, any>);
    return isSuperset(keys, requiredKeys);
  }

  return true;
}

type ListNode<T> = {
  value: T;
  next: ListNode<T> | HeadNode<T>;
  prev: ListNode<T> | HeadNode<T>;
};

type HeadNode<T> = {
  value: null;
  next: ListNode<T>;
  prev: ListNode<T>;
};

/**
 * When a list is empty the head is a reference with pointers to itself
 * So this type represents that self referential state
 */
type EmptyNode = {
  value: null;
  next: EmptyNode;
  prev: EmptyNode;
};

/**
 * A sequential list of items in a circularly linked list
 * @remarks
 * The head node is special, it is always defined and has a value of null.
 * It is never "included" in the list, in that, it is not returned by pop/shift or yielded by the iterator.
 * The circular linkage and always defined head node are to reduce checks for null next/prev references to zero.
 * New nodes are declared as object literals with keys always in the same order: next, prev, value.
 * @internal
 */
export class List<T = unknown> {
  private readonly head: HeadNode<T> | EmptyNode;
  private count: number;

  get length() {
    return this.count;
  }

  get [Symbol.toStringTag]() {
    return 'List' as const;
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
    } as unknown as EmptyNode;
    this.head.next = this.head;
    this.head.prev = this.head;
  }

  toArray() {
    return Array.from(this);
  }

  toString() {
    return `head <=> ${this.toArray().join(' <=> ')} <=> head`;
  }

  *[Symbol.iterator](): Generator<T, void, void> {
    for (const node of this.nodes()) {
      yield node.value;
    }
  }

  private *nodes(): Generator<ListNode<T>, void, void> {
    let ptr: HeadNode<T> | ListNode<T> | EmptyNode = this.head.next;
    while (ptr !== this.head) {
      // Save next before yielding so that we make removing within iteration safe
      const { next } = ptr as ListNode<T>;
      yield ptr as ListNode<T>;
      ptr = next;
    }
  }

  /** Insert at end of list */
  push(value: T) {
    this.count += 1;
    const newNode: ListNode<T> = {
      next: this.head as HeadNode<T>,
      prev: this.head.prev as ListNode<T>,
      value
    };
    this.head.prev.next = newNode;
    this.head.prev = newNode;
  }

  /** Inserts every item inside an iterable instead of the iterable itself */
  pushMany(iterable: Iterable<T>) {
    for (const value of iterable) {
      this.push(value);
    }
  }

  /** Insert at front of list */
  unshift(value: T) {
    this.count += 1;
    const newNode: ListNode<T> = {
      next: this.head.next as ListNode<T>,
      prev: this.head as HeadNode<T>,
      value
    };
    this.head.next.prev = newNode;
    this.head.next = newNode;
  }

  private remove(node: ListNode<T> | EmptyNode): T | null {
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
  shift(): T | null {
    return this.remove(this.head.next);
  }

  /** Removes the last node at the end of the list */
  pop(): T | null {
    return this.remove(this.head.prev);
  }

  /** Iterates through the list and removes nodes where filter returns true */
  prune(filter: (value: T) => boolean) {
    for (const node of this.nodes()) {
      if (filter(node.value)) {
        this.remove(node);
      }
    }
  }

  clear() {
    this.count = 0;
    this.head.next = this.head as EmptyNode;
    this.head.prev = this.head as EmptyNode;
  }

  /** Returns the first item in the list, does not remove */
  first(): T | null {
    // If the list is empty, value will be the head's null
    return this.head.next.value;
  }

  /** Returns the last item in the list, does not remove */
  last(): T | null {
    // If the list is empty, value will be the head's null
    return this.head.prev.value;
  }
}

/**
 * A pool of Buffers which allow you to read them as if they were one
 * @internal
 */
export class BufferPool {
  private buffers: List<Buffer>;
  private totalByteLength: number;

  constructor() {
    this.buffers = new List();
    this.totalByteLength = 0;
  }

  get length(): number {
    return this.totalByteLength;
  }

  /** Adds a buffer to the internal buffer pool list */
  append(buffer: Buffer): void {
    this.buffers.push(buffer);
    this.totalByteLength += buffer.length;
  }

  /**
   * If BufferPool contains 4 bytes or more construct an int32 from the leading bytes,
   * otherwise return null. Size can be negative, caller should error check.
   */
  getInt32(): number | null {
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
  read(size: number): Buffer {
    if (typeof size !== 'number' || size < 0) {
      throw new MongoInvalidArgumentError('Argument "size" must be a non-negative number');
    }

    // oversized request returns empty buffer
    if (size > this.totalByteLength) {
      return Buffer.alloc(0);
    }

    // We know we have enough, we just don't know how it is spread across chunks
    // TODO(NODE-4732): alloc API should change based on raw option
    const result = Buffer.allocUnsafe(size);

    for (let bytesRead = 0; bytesRead < size; ) {
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

/** @public */
export class HostAddress {
  host: string | undefined = undefined;
  port: number | undefined = undefined;
  socketPath: string | undefined = undefined;
  isIPv6 = false;

  constructor(hostString: string) {
    const escapedHost = hostString.split(' ').join('%20'); // escape spaces, for socket path hosts

    if (escapedHost.endsWith('.sock')) {
      // heuristically determine if we're working with a domain socket
      this.socketPath = decodeURIComponent(escapedHost);
      return;
    }

    const urlString = `iLoveJS://${escapedHost}`;
    let url;
    try {
      url = new URL(urlString);
    } catch (urlError) {
      const runtimeError = new MongoRuntimeError(`Unable to parse ${escapedHost} with URL`);
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
    } else if (typeof port === 'string' && port !== '') {
      this.port = Number.parseInt(port, 10);
    } else {
      this.port = 27017;
    }

    if (this.port === 0) {
      throw new MongoParseError('Invalid port (zero) with hostname');
    }
    Object.freeze(this);
  }

  [Symbol.for('nodejs.util.inspect.custom')](): string {
    return this.inspect();
  }

  inspect(): string {
    return `new HostAddress('${this.toString()}')`;
  }

  toString(): string {
    if (typeof this.host === 'string') {
      if (this.isIPv6) {
        return `[${this.host}]:${this.port}`;
      }
      return `${this.host}:${this.port}`;
    }
    return `${this.socketPath}`;
  }

  static fromString(this: void, s: string): HostAddress {
    return new HostAddress(s);
  }

  static fromHostPort(host: string, port: number): HostAddress {
    if (host.includes(':')) {
      host = `[${host}]`; // IPv6 address
    }
    return HostAddress.fromString(`${host}:${port}`);
  }

  static fromSrvRecord({ name, port }: SrvRecord): HostAddress {
    return HostAddress.fromHostPort(name, port);
  }

  toHostPort(): { host: string; port: number } {
    if (this.socketPath) {
      return { host: this.socketPath, port: 0 };
    }

    const host = this.host ?? '';
    const port = this.port ?? 0;
    return { host, port };
  }
}

export const DEFAULT_PK_FACTORY = {
  // We prefer not to rely on ObjectId having a createPk method
  createPk(): ObjectId {
    return new ObjectId();
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
export const MONGODB_WARNING_CODE = 'MONGODB DRIVER';

/** @internal */
export function emitWarning(message: string): void {
  return process.emitWarning(message, { code: MONGODB_WARNING_CODE } as any);
}

const emittedWarnings = new Set();
/**
 * Will emit a warning once for the duration of the application.
 * Uses the message to identify if it has already been emitted
 * so using string interpolation can cause multiple emits
 * @internal
 */
export function emitWarningOnce(message: string): void {
  if (!emittedWarnings.has(message)) {
    emittedWarnings.add(message);
    return emitWarning(message);
  }
}

/**
 * Takes a JS object and joins the values into a string separated by ', '
 */
export function enumToString(en: Record<string, unknown>): string {
  return Object.values(en).join(', ');
}

/**
 * Determine if a server supports retryable writes.
 *
 * @internal
 */
export function supportsRetryableWrites(server?: Server): boolean {
  if (!server) {
    return false;
  }

  if (server.loadBalanced) {
    // Loadbalanced topologies will always support retry writes
    return true;
  }

  if (server.description.logicalSessionTimeoutMinutes != null) {
    // that supports sessions
    if (server.description.type !== ServerType.Standalone) {
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
export function shuffle<T>(sequence: Iterable<T>, limit = 0): Array<T> {
  const items = Array.from(sequence); // shallow copy in order to never shuffle the input

  if (limit > items.length) {
    throw new MongoRuntimeError('Limit must be less than the number of items');
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
export function commandSupportsReadConcern(command: Document): boolean {
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
export function compareObjectId(oid1?: ObjectId | null, oid2?: ObjectId | null): 0 | 1 | -1 {
  if (oid1 == null && oid2 == null) {
    return 0;
  }

  if (oid1 == null) {
    return -1;
  }

  if (oid2 == null) {
    return 1;
  }

  return ByteUtils.compare(oid1.id, oid2.id);
}

export function parseInteger(value: unknown): number | null {
  if (typeof value === 'number') return Math.trunc(value);
  const parsedValue = Number.parseInt(String(value), 10);

  return Number.isNaN(parsedValue) ? null : parsedValue;
}

export function parseUnsignedInteger(value: unknown): number | null {
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
export function checkParentDomainMatch(address: string, srvHost: string): void {
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
  if (
    srvIsLessThanThreeParts &&
    normalizedAddress.split('.').length <= normalizedSrvHost.split('.').length
  ) {
    throw new MongoAPIError(
      'Server record does not have at least one more domain level than parent URI'
    );
  }
  if (!addressDomain.endsWith(srvHostDomain)) {
    throw new MongoAPIError('Server record does not share hostname with parent URI');
  }
}

interface RequestOptions {
  json?: boolean;
  method?: string;
  timeout?: number;
  headers?: http.OutgoingHttpHeaders;
}

/**
 * Perform a get request that returns status and body.
 * @internal
 */
export function get(
  url: URL | string,
  options: http.RequestOptions = {}
): Promise<{ body: string; status: number | undefined }> {
  return new Promise((resolve, reject) => {
    /* eslint-disable prefer-const */
    let timeoutId: NodeJS.Timeout;
    const request = http
      .get(url, options, response => {
        response.setEncoding('utf8');
        let body = '';
        response.on('data', chunk => (body += chunk));
        response.on('end', () => {
          clearTimeout(timeoutId);
          resolve({ status: response.statusCode, body });
        });
      })
      .on('error', error => {
        clearTimeout(timeoutId);
        reject(error);
      })
      .end();
    timeoutId = setTimeout(() => {
      request.destroy(new MongoNetworkTimeoutError(`request timed out after 10 seconds`));
    }, 10000);
  });
}

export async function request(uri: string): Promise<Record<string, any>>;
export async function request(
  uri: string,
  options?: { json?: true } & RequestOptions
): Promise<Record<string, any>>;
export async function request(
  uri: string,
  options?: { json: false } & RequestOptions
): Promise<string>;
export async function request(
  uri: string,
  options: RequestOptions = {}
): Promise<string | Record<string, any>> {
  return await new Promise<string | Record<string, any>>((resolve, reject) => {
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
        } catch {
          // TODO(NODE-3483)
          reject(new MongoRuntimeError(`Invalid JSON response: "${data}"`));
        }
      });
    });

    req.once('timeout', () =>
      req.destroy(
        new MongoNetworkTimeoutError(
          `Network request to ${uri} timed out after ${options.timeout} ms`
        )
      )
    );
    req.once('error', error => reject(error));
    req.end();
  });
}

/** @internal */
export const DOCUMENT_DB_CHECK = /(\.docdb\.amazonaws\.com$)|(\.docdb-elastic\.amazonaws\.com$)/;
/** @internal */
export const COSMOS_DB_CHECK = /\.cosmos\.azure\.com$/;

/** @internal */
export const DOCUMENT_DB_MSG =
  'You appear to be connected to a DocumentDB cluster. For more information regarding feature compatibility and support please visit https://www.mongodb.com/supportability/documentdb';
/** @internal */
export const COSMOS_DB_MSG =
  'You appear to be connected to a CosmosDB cluster. For more information regarding feature compatibility and support please visit https://www.mongodb.com/supportability/cosmosdb';

/** @internal */
export function isHostMatch(match: RegExp, host?: string): boolean {
  return host && match.test(host.toLowerCase()) ? true : false;
}

export function promiseWithResolvers<T>(): {
  promise: Promise<T>;
  resolve: (value: T) => void;
  reject: (error: Error) => void;
} {
  let resolve!: (value: T) => void;
  let reject!: (error: Error) => void;
  const promise = new Promise<T>(function withResolversExecutor(promiseResolve, promiseReject) {
    resolve = promiseResolve;
    reject = promiseReject;
  });
  return { promise, resolve, reject } as const;
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
export function squashError(_error: unknown) {
  return;
}

export const randomBytes = promisify(crypto.randomBytes);

/**
 * Replicates the events.once helper.
 *
 * Removes unused signal logic and It **only** supports 0 or 1 argument events.
 *
 * @param ee - An event emitter that may emit `ev`
 * @param name - An event name to wait for
 */
export async function once<T>(ee: EventEmitter, name: string, options?: Abortable): Promise<T> {
  options?.signal?.throwIfAborted();

  const { promise, resolve, reject } = promiseWithResolvers<T>();
  const onEvent = (data: T) => resolve(data);
  const onError = (error: Error) => reject(error);
  const abortListener = addAbortListener(options?.signal, function () {
    reject(this.reason);
  });

  ee.once(name, onEvent).once('error', onError);

  try {
    return await promise;
  } finally {
    ee.off(name, onEvent);
    ee.off('error', onError);
    abortListener?.[kDispose]();
  }
}

export function maybeAddIdToDocuments(
  collection: Collection,
  document: Document,
  options: { forceServerObjectId?: boolean }
): Document {
  const forceServerObjectId =
    options.forceServerObjectId ?? collection.db.options?.forceServerObjectId ?? false;

  // no need to modify the docs if server sets the ObjectId
  if (forceServerObjectId) {
    return document;
  }

  if (document._id == null) {
    document._id = collection.s.pkFactory.createPk();
  }

  return document;
}

export async function fileIsAccessible(fileName: string, mode?: number) {
  try {
    await fs.access(fileName, mode);
    return true;
  } catch {
    return false;
  }
}

export function csotMin(duration1: number, duration2: number): number {
  if (duration1 === 0) return duration2;
  if (duration2 === 0) return duration1;
  return Math.min(duration1, duration2);
}

export function noop() {
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
export function decorateDecryptionResult(
  decrypted: Document & { [kDecoratedKeys]?: Array<string> },
  original: Document,
  isTopLevelDecorateCall = true
): void {
  if (isTopLevelDecorateCall) {
    // The original value could have been either a JS object or a BSON buffer
    if (Buffer.isBuffer(original)) {
      original = deserialize(original);
    }
    if (Buffer.isBuffer(decrypted)) {
      throw new MongoRuntimeError('Expected result of decryption to be deserialized BSON object');
    }
  }

  if (!decrypted || typeof decrypted !== 'object') return;
  for (const k of Object.keys(decrypted)) {
    const originalValue = original[k];

    // An object was decrypted by libmongocrypt if and only if it was
    // a BSON Binary object with subtype 6.
    if (originalValue && originalValue._bsontype === 'Binary' && originalValue.sub_type === 6) {
      if (!decrypted[kDecoratedKeys]) {
        Object.defineProperty(decrypted, kDecoratedKeys, {
          value: [],
          configurable: true,
          enumerable: false,
          writable: false
        });
      }
      // this is defined in the preceding if-statement
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      decrypted[kDecoratedKeys]!.push(k);
      // Do not recurse into this decrypted value. It could be a sub-document/array,
      // in which case there is no original value associated with its subfields.
      continue;
    }

    decorateDecryptionResult(decrypted[k], originalValue, false);
  }
}

/** @internal */
export const kDispose: unique symbol = (Symbol.dispose as any) ?? Symbol('dispose');

/** @internal */
export interface Disposable {
  [kDispose](): void;
}

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
export function addAbortListener(
  signal: AbortSignal | undefined | null,
  listener: (this: AbortSignal, event: Event) => void
): Disposable | undefined {
  if (signal == null) return;
  signal.addEventListener('abort', listener, { once: true });
  return { [kDispose]: () => signal.removeEventListener('abort', listener) };
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
export async function abortable<T>(
  promise: Promise<T>,
  { signal }: { signal?: AbortSignal }
): Promise<T> {
  if (signal == null) {
    return await promise;
  }

  const { promise: aborted, reject } = promiseWithResolvers<never>();

  const abortListener = signal.aborted
    ? reject(signal.reason)
    : addAbortListener(signal, function () {
        reject(this.reason);
      });

  try {
    return await Promise.race([promise, aborted]);
  } finally {
    abortListener?.[kDispose]();
  }
}
