import { clearTimeout, setTimeout } from 'timers';

import type { ObjectId } from '../bson';
import {
  APM_EVENTS,
  CONNECTION_CHECK_OUT_FAILED,
  CONNECTION_CHECK_OUT_STARTED,
  CONNECTION_CHECKED_IN,
  CONNECTION_CHECKED_OUT,
  CONNECTION_CLOSED,
  CONNECTION_CREATED,
  CONNECTION_POOL_CLEARED,
  CONNECTION_POOL_CLOSED,
  CONNECTION_POOL_CREATED,
  CONNECTION_POOL_READY,
  CONNECTION_READY
} from '../constants';
import {
  type AnyError,
  MongoClientClosedError,
  type MongoError,
  MongoInvalidArgumentError,
  MongoMissingCredentialsError,
  MongoNetworkError,
  MongoOperationTimeoutError,
  MongoRuntimeError,
  MongoServerError
} from '../error';
import { type Abortable, CancellationToken, TypedEventEmitter } from '../mongo_types';
import type { Server } from '../sdam/server';
import { type TimeoutContext, TimeoutError } from '../timeout';
import {
  addAbortListener,
  type Callback,
  kDispose,
  List,
  makeCounter,
  noop,
  now,
  promiseWithResolvers
} from '../utils';
import { connect } from './connect';
import { Connection, type ConnectionEvents, type ConnectionOptions } from './connection';
import {
  ConnectionCheckedInEvent,
  ConnectionCheckedOutEvent,
  ConnectionCheckOutFailedEvent,
  ConnectionCheckOutStartedEvent,
  ConnectionClosedEvent,
  ConnectionCreatedEvent,
  ConnectionPoolClearedEvent,
  ConnectionPoolClosedEvent,
  ConnectionPoolCreatedEvent,
  ConnectionPoolReadyEvent,
  ConnectionReadyEvent
} from './connection_pool_events';
import {
  PoolClearedError,
  PoolClearedOnNetworkError,
  PoolClosedError,
  WaitQueueTimeoutError
} from './errors';
import { ConnectionPoolMetrics } from './metrics';

/** @public */
export interface ConnectionPoolOptions extends Omit<ConnectionOptions, 'id' | 'generation'> {
  /** The maximum number of connections that may be associated with a pool at a given time. This includes in use and available connections. */
  maxPoolSize: number;
  /** The minimum number of connections that MUST exist at any moment in a single connection pool. */
  minPoolSize: number;
  /** The maximum number of connections that may be in the process of being established concurrently by the connection pool. */
  maxConnecting: number;
  /** The maximum amount of time a connection should remain idle in the connection pool before being marked idle. */
  maxIdleTimeMS: number;
  /** The maximum amount of time operation execution should wait for a connection to become available. The default is 0 which means there is no limit. */
  waitQueueTimeoutMS: number;
  /** If we are in load balancer mode. */
  loadBalanced: boolean;
  /** @internal */
  minPoolSizeCheckFrequencyMS?: number;
}

/** @internal */
export interface WaitQueueMember {
  resolve: (conn: Connection) => void;
  reject: (err: AnyError) => void;
  cancelled: boolean;
  checkoutTime: number;
}

/** @internal */
export const PoolState = Object.freeze({
  paused: 'paused',
  ready: 'ready',
  closed: 'closed'
} as const);

type PoolState = (typeof PoolState)[keyof typeof PoolState];

/**
 * @public
 * @deprecated This interface is deprecated and will be removed in a future release as it is not used
 * in the driver
 */
export interface CloseOptions {
  force?: boolean;
}

/** @public */
export type ConnectionPoolEvents = {
  connectionPoolCreated(event: ConnectionPoolCreatedEvent): void;
  connectionPoolReady(event: ConnectionPoolReadyEvent): void;
  connectionPoolClosed(event: ConnectionPoolClosedEvent): void;
  connectionPoolCleared(event: ConnectionPoolClearedEvent): void;
  connectionCreated(event: ConnectionCreatedEvent): void;
  connectionReady(event: ConnectionReadyEvent): void;
  connectionClosed(event: ConnectionClosedEvent): void;
  connectionCheckOutStarted(event: ConnectionCheckOutStartedEvent): void;
  connectionCheckOutFailed(event: ConnectionCheckOutFailedEvent): void;
  connectionCheckedOut(event: ConnectionCheckedOutEvent): void;
  connectionCheckedIn(event: ConnectionCheckedInEvent): void;
} & Omit<ConnectionEvents, 'close' | 'message'>;

/**
 * A pool of connections which dynamically resizes, and emit events related to pool activity
 * @internal
 */
export class ConnectionPool extends TypedEventEmitter<ConnectionPoolEvents> {
  public options: Readonly<ConnectionPoolOptions>;
  /**  An integer representing the SDAM generation of the pool */
  public generation: number;
  /** A map of generations to service ids */
  public serviceGenerations: Map<string, number>;

  private poolState: PoolState;
  private server: Server;
  private connections: List<Connection>;
  private pending: number;
  private checkedOut: Set<Connection>;
  private minPoolSizeTimer?: NodeJS.Timeout;
  private connectionCounter: Generator<number>;
  private cancellationToken: CancellationToken;
  private waitQueue: List<WaitQueueMember>;
  private metrics: ConnectionPoolMetrics;
  private processingWaitQueue: boolean;

  /**
   * Emitted when the connection pool is created.
   * @event
   */
  static readonly CONNECTION_POOL_CREATED = CONNECTION_POOL_CREATED;
  /**
   * Emitted once when the connection pool is closed
   * @event
   */
  static readonly CONNECTION_POOL_CLOSED = CONNECTION_POOL_CLOSED;
  /**
   * Emitted each time the connection pool is cleared and it's generation incremented
   * @event
   */
  static readonly CONNECTION_POOL_CLEARED = CONNECTION_POOL_CLEARED;
  /**
   * Emitted each time the connection pool is marked ready
   * @event
   */
  static readonly CONNECTION_POOL_READY = CONNECTION_POOL_READY;
  /**
   * Emitted when a connection is created.
   * @event
   */
  static readonly CONNECTION_CREATED = CONNECTION_CREATED;
  /**
   * Emitted when a connection becomes established, and is ready to use
   * @event
   */
  static readonly CONNECTION_READY = CONNECTION_READY;
  /**
   * Emitted when a connection is closed
   * @event
   */
  static readonly CONNECTION_CLOSED = CONNECTION_CLOSED;
  /**
   * Emitted when an attempt to check out a connection begins
   * @event
   */
  static readonly CONNECTION_CHECK_OUT_STARTED = CONNECTION_CHECK_OUT_STARTED;
  /**
   * Emitted when an attempt to check out a connection fails
   * @event
   */
  static readonly CONNECTION_CHECK_OUT_FAILED = CONNECTION_CHECK_OUT_FAILED;
  /**
   * Emitted each time a connection is successfully checked out of the connection pool
   * @event
   */
  static readonly CONNECTION_CHECKED_OUT = CONNECTION_CHECKED_OUT;
  /**
   * Emitted each time a connection is successfully checked into the connection pool
   * @event
   */
  static readonly CONNECTION_CHECKED_IN = CONNECTION_CHECKED_IN;

  constructor(server: Server, options: ConnectionPoolOptions) {
    super();
    this.on('error', noop);

    this.options = Object.freeze({
      connectionType: Connection,
      ...options,
      maxPoolSize: options.maxPoolSize ?? 100,
      minPoolSize: options.minPoolSize ?? 0,
      maxConnecting: options.maxConnecting ?? 2,
      maxIdleTimeMS: options.maxIdleTimeMS ?? 0,
      waitQueueTimeoutMS: options.waitQueueTimeoutMS ?? 0,
      minPoolSizeCheckFrequencyMS: options.minPoolSizeCheckFrequencyMS ?? 100,
      autoEncrypter: options.autoEncrypter
    });

    if (this.options.minPoolSize > this.options.maxPoolSize) {
      throw new MongoInvalidArgumentError(
        'Connection pool minimum size must not be greater than maximum pool size'
      );
    }

    this.poolState = PoolState.paused;
    this.server = server;
    this.connections = new List();
    this.pending = 0;
    this.checkedOut = new Set();
    this.minPoolSizeTimer = undefined;
    this.generation = 0;
    this.serviceGenerations = new Map();
    this.connectionCounter = makeCounter(1);
    this.cancellationToken = new CancellationToken();
    this.cancellationToken.setMaxListeners(Infinity);
    this.waitQueue = new List();
    this.metrics = new ConnectionPoolMetrics();
    this.processingWaitQueue = false;

    this.mongoLogger = this.server.topology.client?.mongoLogger;
    this.component = 'connection';

    process.nextTick(() => {
      this.emitAndLog(ConnectionPool.CONNECTION_POOL_CREATED, new ConnectionPoolCreatedEvent(this));
    });
  }

  /** The address of the endpoint the pool is connected to */
  get address(): string {
    return this.options.hostAddress.toString();
  }

  /**
   * Check if the pool has been closed
   *
   * TODO(NODE-3263): We can remove this property once shell no longer needs it
   */
  get closed(): boolean {
    return this.poolState === PoolState.closed;
  }

  /** An integer expressing how many total connections (available + pending + in use) the pool currently has */
  get totalConnectionCount(): number {
    return (
      this.availableConnectionCount + this.pendingConnectionCount + this.currentCheckedOutCount
    );
  }

  /** An integer expressing how many connections are currently available in the pool. */
  get availableConnectionCount(): number {
    return this.connections.length;
  }

  get pendingConnectionCount(): number {
    return this.pending;
  }

  get currentCheckedOutCount(): number {
    return this.checkedOut.size;
  }

  get waitQueueSize(): number {
    return this.waitQueue.length;
  }

  get loadBalanced(): boolean {
    return this.options.loadBalanced;
  }

  get serverError() {
    return this.server.description.error;
  }

  /**
   * This is exposed ONLY for use in mongosh, to enable
   * killing all connections if a user quits the shell with
   * operations in progress.
   *
   * This property may be removed as a part of NODE-3263.
   */
  get checkedOutConnections() {
    return this.checkedOut;
  }

  /**
   * Get the metrics information for the pool when a wait queue timeout occurs.
   */
  private waitQueueErrorMetrics(): string {
    return this.metrics.info(this.options.maxPoolSize);
  }

  /**
   * Set the pool state to "ready"
   */
  ready(): void {
    if (this.poolState !== PoolState.paused) {
      return;
    }
    this.poolState = PoolState.ready;
    this.emitAndLog(ConnectionPool.CONNECTION_POOL_READY, new ConnectionPoolReadyEvent(this));
    clearTimeout(this.minPoolSizeTimer);
    this.ensureMinPoolSize();
  }

  /**
   * Check a connection out of this pool. The connection will continue to be tracked, but no reference to it
   * will be held by the pool. This means that if a connection is checked out it MUST be checked back in or
   * explicitly destroyed by the new owner.
   */
  async checkOut(options: { timeoutContext: TimeoutContext } & Abortable): Promise<Connection> {
    const checkoutTime = now();
    this.emitAndLog(
      ConnectionPool.CONNECTION_CHECK_OUT_STARTED,
      new ConnectionCheckOutStartedEvent(this)
    );

    const { promise, resolve, reject } = promiseWithResolvers<Connection>();

    const timeout = options.timeoutContext.connectionCheckoutTimeout;

    const waitQueueMember: WaitQueueMember = {
      resolve,
      reject,
      cancelled: false,
      checkoutTime
    };

    const abortListener = addAbortListener(options.signal, function () {
      waitQueueMember.cancelled = true;
      reject(this.reason);
    });

    this.waitQueue.push(waitQueueMember);
    process.nextTick(() => this.processWaitQueue());

    try {
      timeout?.throwIfExpired();
      return await (timeout ? Promise.race([promise, timeout]) : promise);
    } catch (error) {
      if (TimeoutError.is(error)) {
        timeout?.clear();
        waitQueueMember.cancelled = true;

        this.emitAndLog(
          ConnectionPool.CONNECTION_CHECK_OUT_FAILED,
          new ConnectionCheckOutFailedEvent(this, 'timeout', waitQueueMember.checkoutTime)
        );
        const timeoutError = new WaitQueueTimeoutError(
          this.loadBalanced
            ? this.waitQueueErrorMetrics()
            : 'Timed out while checking out a connection from connection pool',
          this.address
        );
        if (options.timeoutContext.csotEnabled()) {
          throw new MongoOperationTimeoutError('Timed out during connection checkout', {
            cause: timeoutError
          });
        }
        throw timeoutError;
      }
      throw error;
    } finally {
      abortListener?.[kDispose]();
      timeout?.clear();
    }
  }

  /**
   * Check a connection into the pool.
   *
   * @param connection - The connection to check in
   */
  checkIn(connection: Connection): void {
    if (!this.checkedOut.has(connection)) {
      return;
    }
    const poolClosed = this.closed;
    const stale = this.connectionIsStale(connection);
    const willDestroy = !!(poolClosed || stale || connection.closed);

    if (!willDestroy) {
      connection.markAvailable();
      this.connections.unshift(connection);
    }

    this.checkedOut.delete(connection);
    this.emitAndLog(
      ConnectionPool.CONNECTION_CHECKED_IN,
      new ConnectionCheckedInEvent(this, connection)
    );

    if (willDestroy) {
      const reason = connection.closed ? 'error' : poolClosed ? 'poolClosed' : 'stale';
      this.destroyConnection(connection, reason);
    }

    process.nextTick(() => this.processWaitQueue());
  }

  /**
   * Clear the pool
   *
   * Pool reset is handled by incrementing the pool's generation count. Any existing connection of a
   * previous generation will eventually be pruned during subsequent checkouts.
   */
  clear(options: { serviceId?: ObjectId; interruptInUseConnections?: boolean } = {}): void {
    if (this.closed) {
      return;
    }

    // handle load balanced case
    if (this.loadBalanced) {
      const { serviceId } = options;
      if (!serviceId) {
        throw new MongoRuntimeError(
          'ConnectionPool.clear() called in load balanced mode with no serviceId.'
        );
      }
      const sid = serviceId.toHexString();
      const generation = this.serviceGenerations.get(sid);
      // Only need to worry if the generation exists, since it should
      // always be there but typescript needs the check.
      if (generation == null) {
        throw new MongoRuntimeError('Service generations are required in load balancer mode.');
      } else {
        // Increment the generation for the service id.
        this.serviceGenerations.set(sid, generation + 1);
      }
      this.emitAndLog(
        ConnectionPool.CONNECTION_POOL_CLEARED,
        new ConnectionPoolClearedEvent(this, { serviceId })
      );
      return;
    }
    // handle non load-balanced case
    const interruptInUseConnections = options.interruptInUseConnections ?? false;
    const oldGeneration = this.generation;
    this.generation += 1;
    const alreadyPaused = this.poolState === PoolState.paused;
    this.poolState = PoolState.paused;

    this.clearMinPoolSizeTimer();
    if (!alreadyPaused) {
      this.emitAndLog(
        ConnectionPool.CONNECTION_POOL_CLEARED,
        new ConnectionPoolClearedEvent(this, {
          interruptInUseConnections
        })
      );
    }

    if (interruptInUseConnections) {
      process.nextTick(() => this.interruptInUseConnections(oldGeneration));
    }

    this.processWaitQueue();
  }

  /**
   * Closes all stale in-use connections in the pool with a resumable PoolClearedOnNetworkError.
   *
   * Only connections where `connection.generation <= minGeneration` are killed.
   */
  private interruptInUseConnections(minGeneration: number) {
    for (const connection of this.checkedOut) {
      if (connection.generation <= minGeneration) {
        connection.onError(new PoolClearedOnNetworkError(this));
      }
    }
  }

  /** For MongoClient.close() procedures */
  public closeCheckedOutConnections() {
    for (const conn of this.checkedOut) {
      conn.onError(new MongoClientClosedError());
    }
  }

  /** Close the pool */
  close(): void {
    if (this.closed) {
      return;
    }

    // immediately cancel any in-flight connections
    this.cancellationToken.emit('cancel');

    // end the connection counter
    if (typeof this.connectionCounter.return === 'function') {
      this.connectionCounter.return(undefined);
    }

    this.poolState = PoolState.closed;
    this.clearMinPoolSizeTimer();
    this.processWaitQueue();

    for (const conn of this.connections) {
      this.emitAndLog(
        ConnectionPool.CONNECTION_CLOSED,
        new ConnectionClosedEvent(this, conn, 'poolClosed')
      );
      conn.destroy();
    }
    this.connections.clear();
    this.emitAndLog(ConnectionPool.CONNECTION_POOL_CLOSED, new ConnectionPoolClosedEvent(this));
  }

  /**
   * @internal
   * Reauthenticate a connection
   */
  async reauthenticate(connection: Connection): Promise<void> {
    const authContext = connection.authContext;
    if (!authContext) {
      throw new MongoRuntimeError('No auth context found on connection.');
    }
    const credentials = authContext.credentials;
    if (!credentials) {
      throw new MongoMissingCredentialsError(
        'Connection is missing credentials when asked to reauthenticate'
      );
    }

    const resolvedCredentials = credentials.resolveAuthMechanism(connection.hello);
    const provider = this.server.topology.client.s.authProviders.getOrCreateProvider(
      resolvedCredentials.mechanism,
      resolvedCredentials.mechanismProperties
    );

    if (!provider) {
      throw new MongoMissingCredentialsError(
        `Reauthenticate failed due to no auth provider for ${credentials.mechanism}`
      );
    }

    await provider.reauth(authContext);

    return;
  }

  /** Clear the min pool size timer */
  private clearMinPoolSizeTimer(): void {
    const minPoolSizeTimer = this.minPoolSizeTimer;
    if (minPoolSizeTimer) {
      clearTimeout(minPoolSizeTimer);
    }
  }

  private destroyConnection(
    connection: Connection,
    reason: 'error' | 'idle' | 'stale' | 'poolClosed'
  ) {
    this.emitAndLog(
      ConnectionPool.CONNECTION_CLOSED,
      new ConnectionClosedEvent(this, connection, reason)
    );
    // destroy the connection
    connection.destroy();
  }

  private connectionIsStale(connection: Connection) {
    const serviceId = connection.serviceId;
    if (this.loadBalanced && serviceId) {
      const sid = serviceId.toHexString();
      const generation = this.serviceGenerations.get(sid);
      return connection.generation !== generation;
    }

    return connection.generation !== this.generation;
  }

  private connectionIsIdle(connection: Connection) {
    return !!(this.options.maxIdleTimeMS && connection.idleTime > this.options.maxIdleTimeMS);
  }

  /**
   * Destroys a connection if the connection is perished.
   *
   * @returns `true` if the connection was destroyed, `false` otherwise.
   */
  private destroyConnectionIfPerished(connection: Connection): boolean {
    const isStale = this.connectionIsStale(connection);
    const isIdle = this.connectionIsIdle(connection);
    if (!isStale && !isIdle && !connection.closed) {
      return false;
    }
    const reason = connection.closed ? 'error' : isStale ? 'stale' : 'idle';
    this.destroyConnection(connection, reason);
    return true;
  }

  private createConnection(callback: Callback<Connection>) {
    // Note that metadata and extendedMetadata may have changed on the client but have
    // been frozen here, so we pull the extendedMetadata promise always from the client
    // no mattter what options were set at the construction of the pool.
    const connectOptions: ConnectionOptions = {
      ...this.options,
      id: this.connectionCounter.next().value,
      generation: this.generation,
      cancellationToken: this.cancellationToken,
      mongoLogger: this.mongoLogger,
      authProviders: this.server.topology.client.s.authProviders,
      extendedMetadata: this.server.topology.client.options.extendedMetadata
    };

    this.pending++;
    // This is our version of a "virtual" no-I/O connection as the spec requires
    const connectionCreatedTime = now();
    this.emitAndLog(
      ConnectionPool.CONNECTION_CREATED,
      new ConnectionCreatedEvent(this, { id: connectOptions.id })
    );

    connect(connectOptions).then(
      connection => {
        // The pool might have closed since we started trying to create a connection
        if (this.poolState !== PoolState.ready) {
          this.pending--;
          connection.destroy();
          callback(this.closed ? new PoolClosedError(this) : new PoolClearedError(this));
          return;
        }

        // forward all events from the connection to the pool
        for (const event of [...APM_EVENTS, Connection.CLUSTER_TIME_RECEIVED]) {
          connection.on(event, (e: any) => this.emit(event, e));
        }

        if (this.loadBalanced) {
          connection.on(Connection.PINNED, pinType => this.metrics.markPinned(pinType));
          connection.on(Connection.UNPINNED, pinType => this.metrics.markUnpinned(pinType));

          const serviceId = connection.serviceId;
          if (serviceId) {
            let generation;
            const sid = serviceId.toHexString();
            if ((generation = this.serviceGenerations.get(sid))) {
              connection.generation = generation;
            } else {
              this.serviceGenerations.set(sid, 0);
              connection.generation = 0;
            }
          }
        }

        connection.markAvailable();
        this.emitAndLog(
          ConnectionPool.CONNECTION_READY,
          new ConnectionReadyEvent(this, connection, connectionCreatedTime)
        );

        this.pending--;
        callback(undefined, connection);
      },
      error => {
        this.pending--;
        this.server.handleError(error);
        this.emitAndLog(
          ConnectionPool.CONNECTION_CLOSED,
          new ConnectionClosedEvent(
            this,
            { id: connectOptions.id, serviceId: undefined },
            'error',
            // TODO(NODE-5192): Remove this cast
            error as MongoError
          )
        );
        if (error instanceof MongoNetworkError || error instanceof MongoServerError) {
          error.connectionGeneration = connectOptions.generation;
        }
        callback(error ?? new MongoRuntimeError('Connection creation failed without error'));
      }
    );
  }

  private ensureMinPoolSize() {
    const minPoolSize = this.options.minPoolSize;
    if (this.poolState !== PoolState.ready) {
      return;
    }

    this.connections.prune(connection => this.destroyConnectionIfPerished(connection));

    if (
      this.totalConnectionCount < minPoolSize &&
      this.pendingConnectionCount < this.options.maxConnecting
    ) {
      // NOTE: ensureMinPoolSize should not try to get all the pending
      // connection permits because that potentially delays the availability of
      // the connection to a checkout request
      this.createConnection((err, connection) => {
        if (!err && connection) {
          this.connections.push(connection);
          process.nextTick(() => this.processWaitQueue());
        }
        if (this.poolState === PoolState.ready) {
          clearTimeout(this.minPoolSizeTimer);
          this.minPoolSizeTimer = setTimeout(
            () => this.ensureMinPoolSize(),
            this.options.minPoolSizeCheckFrequencyMS
          );
        }
      });
    } else {
      clearTimeout(this.minPoolSizeTimer);
      this.minPoolSizeTimer = setTimeout(
        () => this.ensureMinPoolSize(),
        this.options.minPoolSizeCheckFrequencyMS
      );
    }
  }

  private processWaitQueue() {
    if (this.processingWaitQueue) {
      return;
    }
    this.processingWaitQueue = true;

    while (this.waitQueueSize) {
      const waitQueueMember = this.waitQueue.first();
      if (!waitQueueMember) {
        this.waitQueue.shift();
        continue;
      }

      if (waitQueueMember.cancelled) {
        this.waitQueue.shift();
        continue;
      }

      if (this.poolState !== PoolState.ready) {
        const reason = this.closed ? 'poolClosed' : 'connectionError';
        const error = this.closed ? new PoolClosedError(this) : new PoolClearedError(this);
        this.emitAndLog(
          ConnectionPool.CONNECTION_CHECK_OUT_FAILED,
          new ConnectionCheckOutFailedEvent(this, reason, waitQueueMember.checkoutTime, error)
        );
        this.waitQueue.shift();
        waitQueueMember.reject(error);
        continue;
      }

      if (!this.availableConnectionCount) {
        break;
      }

      const connection = this.connections.shift();
      if (!connection) {
        break;
      }

      if (!this.destroyConnectionIfPerished(connection)) {
        this.checkedOut.add(connection);
        this.emitAndLog(
          ConnectionPool.CONNECTION_CHECKED_OUT,
          new ConnectionCheckedOutEvent(this, connection, waitQueueMember.checkoutTime)
        );

        this.waitQueue.shift();
        waitQueueMember.resolve(connection);
      }
    }

    const { maxPoolSize, maxConnecting } = this.options;
    while (
      this.waitQueueSize > 0 &&
      this.pendingConnectionCount < maxConnecting &&
      (maxPoolSize === 0 || this.totalConnectionCount < maxPoolSize)
    ) {
      const waitQueueMember = this.waitQueue.shift();
      if (!waitQueueMember || waitQueueMember.cancelled) {
        continue;
      }
      this.createConnection((err, connection) => {
        if (waitQueueMember.cancelled) {
          if (!err && connection) {
            this.connections.push(connection);
          }
        } else {
          if (err) {
            this.emitAndLog(
              ConnectionPool.CONNECTION_CHECK_OUT_FAILED,
              // TODO(NODE-5192): Remove this cast
              new ConnectionCheckOutFailedEvent(
                this,
                'connectionError',
                waitQueueMember.checkoutTime,
                err as MongoError
              )
            );
            waitQueueMember.reject(err);
          } else if (connection) {
            this.checkedOut.add(connection);
            this.emitAndLog(
              ConnectionPool.CONNECTION_CHECKED_OUT,
              new ConnectionCheckedOutEvent(this, connection, waitQueueMember.checkoutTime)
            );
            waitQueueMember.resolve(connection);
          }
        }
        process.nextTick(() => this.processWaitQueue());
      });
    }
    this.processingWaitQueue = false;
  }
}

/**
 * A callback provided to `withConnection`
 * @internal
 *
 * @param error - An error instance representing the error during the execution.
 * @param connection - The managed connection which was checked out of the pool.
 * @param callback - A function to call back after connection management is complete
 */
export type WithConnectionCallback = (
  error: MongoError | undefined,
  connection: Connection | undefined,
  callback: Callback<Connection>
) => void;
