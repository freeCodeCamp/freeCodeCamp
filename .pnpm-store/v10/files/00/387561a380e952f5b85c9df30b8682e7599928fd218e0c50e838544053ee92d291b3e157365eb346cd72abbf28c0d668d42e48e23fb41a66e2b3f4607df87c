import type { Document } from '../bson';
import { type AutoEncrypter } from '../client-side-encryption/auto_encrypter';
import { type CommandOptions, Connection } from '../cmap/connection';
import {
  ConnectionPool,
  type ConnectionPoolEvents,
  type ConnectionPoolOptions
} from '../cmap/connection_pool';
import { PoolClearedError } from '../cmap/errors';
import {
  APM_EVENTS,
  CLOSED,
  CMAP_EVENTS,
  CONNECT,
  DESCRIPTION_RECEIVED,
  ENDED,
  HEARTBEAT_EVENTS,
  SERVER_HEARTBEAT_FAILED,
  SERVER_HEARTBEAT_STARTED,
  SERVER_HEARTBEAT_SUCCEEDED
} from '../constants';
import {
  type AnyError,
  isNodeShuttingDownError,
  isSDAMUnrecoverableError,
  MONGODB_ERROR_CODES,
  MongoError,
  MongoErrorLabel,
  MongoNetworkError,
  MongoNetworkTimeoutError,
  MongoRuntimeError,
  MongoServerClosedError,
  type MongoServerError,
  needsRetryableWriteLabel
} from '../error';
import type { ServerApi } from '../mongo_client';
import { type Abortable, TypedEventEmitter } from '../mongo_types';
import { AggregateOperation } from '../operations/aggregate';
import type { GetMoreOptions } from '../operations/get_more';
import { type AbstractOperation } from '../operations/operation';
import type { ClientSession } from '../sessions';
import { type TimeoutContext } from '../timeout';
import { isTransactionCommand } from '../transactions';
import {
  abortable,
  type EventEmitterWithState,
  makeStateMachine,
  maxWireVersion,
  noop,
  squashError,
  supportsRetryableWrites
} from '../utils';
import { throwIfWriteConcernError } from '../write_concern';
import {
  type ClusterTime,
  STATE_CLOSED,
  STATE_CLOSING,
  STATE_CONNECTED,
  STATE_CONNECTING,
  TopologyType
} from './common';
import type {
  ServerHeartbeatFailedEvent,
  ServerHeartbeatStartedEvent,
  ServerHeartbeatSucceededEvent
} from './events';
import { Monitor, type MonitorOptions } from './monitor';
import { compareTopologyVersion, ServerDescription } from './server_description';
import { MIN_SECONDARY_WRITE_WIRE_VERSION } from './server_selection';
import type { Topology } from './topology';

const stateTransition = makeStateMachine({
  [STATE_CLOSED]: [STATE_CLOSED, STATE_CONNECTING],
  [STATE_CONNECTING]: [STATE_CONNECTING, STATE_CLOSING, STATE_CONNECTED, STATE_CLOSED],
  [STATE_CONNECTED]: [STATE_CONNECTED, STATE_CLOSING, STATE_CLOSED],
  [STATE_CLOSING]: [STATE_CLOSING, STATE_CLOSED]
});

/** @internal */
export type ServerOptions = Omit<ConnectionPoolOptions, 'id' | 'generation' | 'hostAddress'> &
  MonitorOptions;

/** @internal */
export interface ServerPrivate {
  /** The server description for this server */
  description: ServerDescription;
  /** A copy of the options used to construct this instance */
  options: ServerOptions;
  /** The current state of the Server */
  state: string;
  /** MongoDB server API version */
  serverApi?: ServerApi;
  /** A count of the operations currently running against the server. */
  operationCount: number;
}

/** @public */
export type ServerEvents = {
  serverHeartbeatStarted(event: ServerHeartbeatStartedEvent): void;
  serverHeartbeatSucceeded(event: ServerHeartbeatSucceededEvent): void;
  serverHeartbeatFailed(event: ServerHeartbeatFailedEvent): void;
  /** Top level MongoClient doesn't emit this so it is marked: @internal */
  connect(server: Server): void;
  descriptionReceived(description: ServerDescription): void;
  closed(): void;
  ended(): void;
} & ConnectionPoolEvents &
  EventEmitterWithState;

/** @internal */
export type ServerCommandOptions = Omit<CommandOptions, 'timeoutContext' | 'socketTimeoutMS'> & {
  timeoutContext: TimeoutContext;
  returnFieldSelector?: Document | null;
} & Abortable;

/** @internal */
export class Server extends TypedEventEmitter<ServerEvents> {
  /** @internal */
  s: ServerPrivate;
  /** @internal */
  topology: Topology;
  /** @internal */
  pool: ConnectionPool;
  serverApi?: ServerApi;
  hello?: Document;
  monitor: Monitor | null;

  /** @event */
  static readonly SERVER_HEARTBEAT_STARTED = SERVER_HEARTBEAT_STARTED;
  /** @event */
  static readonly SERVER_HEARTBEAT_SUCCEEDED = SERVER_HEARTBEAT_SUCCEEDED;
  /** @event */
  static readonly SERVER_HEARTBEAT_FAILED = SERVER_HEARTBEAT_FAILED;
  /** @event */
  static readonly CONNECT = CONNECT;
  /** @event */
  static readonly DESCRIPTION_RECEIVED = DESCRIPTION_RECEIVED;
  /** @event */
  static readonly CLOSED = CLOSED;
  /** @event */
  static readonly ENDED = ENDED;

  /**
   * Create a server
   */
  constructor(topology: Topology, description: ServerDescription, options: ServerOptions) {
    super();
    this.on('error', noop);

    this.serverApi = options.serverApi;

    const poolOptions = { hostAddress: description.hostAddress, ...options };

    this.topology = topology;
    this.pool = new ConnectionPool(this, poolOptions);

    this.s = {
      description,
      options,
      state: STATE_CLOSED,
      operationCount: 0
    };

    for (const event of [...CMAP_EVENTS, ...APM_EVENTS]) {
      this.pool.on(event, (e: any) => this.emit(event, e));
    }

    this.pool.on(Connection.CLUSTER_TIME_RECEIVED, (clusterTime: ClusterTime) => {
      this.clusterTime = clusterTime;
    });

    if (this.loadBalanced) {
      this.monitor = null;
      // monitoring is disabled in load balancing mode
      return;
    }

    // create the monitor
    this.monitor = new Monitor(this, this.s.options);

    for (const event of HEARTBEAT_EVENTS) {
      this.monitor.on(event, (e: any) => this.emit(event, e));
    }

    this.monitor.on('resetServer', (error: MongoServerError) => markServerUnknown(this, error));
    this.monitor.on(Server.SERVER_HEARTBEAT_SUCCEEDED, (event: ServerHeartbeatSucceededEvent) => {
      this.emit(
        Server.DESCRIPTION_RECEIVED,
        new ServerDescription(this.description.hostAddress, event.reply, {
          roundTripTime: this.monitor?.roundTripTime,
          minRoundTripTime: this.monitor?.minRoundTripTime
        })
      );

      if (this.s.state === STATE_CONNECTING) {
        stateTransition(this, STATE_CONNECTED);
        this.emit(Server.CONNECT, this);
      }
    });
  }

  get clusterTime(): ClusterTime | undefined {
    return this.topology.clusterTime;
  }

  set clusterTime(clusterTime: ClusterTime | undefined) {
    this.topology.clusterTime = clusterTime;
  }

  get description(): ServerDescription {
    return this.s.description;
  }

  get name(): string {
    return this.s.description.address;
  }

  get autoEncrypter(): AutoEncrypter | undefined {
    if (this.s.options && this.s.options.autoEncrypter) {
      return this.s.options.autoEncrypter;
    }
    return;
  }

  get loadBalanced(): boolean {
    return this.topology.description.type === TopologyType.LoadBalanced;
  }

  /**
   * Initiate server connect
   */
  connect(): void {
    if (this.s.state !== STATE_CLOSED) {
      return;
    }

    stateTransition(this, STATE_CONNECTING);

    // If in load balancer mode we automatically set the server to
    // a load balancer. It never transitions out of this state and
    // has no monitor.
    if (!this.loadBalanced) {
      this.monitor?.connect();
    } else {
      stateTransition(this, STATE_CONNECTED);
      this.emit(Server.CONNECT, this);
    }
  }

  closeCheckedOutConnections() {
    return this.pool.closeCheckedOutConnections();
  }

  /** Destroy the server connection */
  close(): void {
    if (this.s.state === STATE_CLOSED) {
      return;
    }

    stateTransition(this, STATE_CLOSING);

    if (!this.loadBalanced) {
      this.monitor?.close();
    }

    this.pool.close();
    stateTransition(this, STATE_CLOSED);
    this.emit('closed');
  }

  /**
   * Immediately schedule monitoring of this server. If there already an attempt being made
   * this will be a no-op.
   */
  requestCheck(): void {
    if (!this.loadBalanced) {
      this.monitor?.requestCheck();
    }
  }

  public async command<TResult>(
    operation: AbstractOperation<TResult>,
    timeoutContext: TimeoutContext
  ): Promise<InstanceType<typeof operation.SERVER_COMMAND_RESPONSE_TYPE>> {
    if (this.s.state === STATE_CLOSING || this.s.state === STATE_CLOSED) {
      throw new MongoServerClosedError();
    }
    const session = operation.session;

    let conn = session?.pinnedConnection;

    this.incrementOperationCount();
    if (conn == null) {
      try {
        conn = await this.pool.checkOut({ timeoutContext, signal: operation.options.signal });
      } catch (checkoutError) {
        this.decrementOperationCount();
        if (!(checkoutError instanceof PoolClearedError)) this.handleError(checkoutError);
        throw checkoutError;
      }
    }

    let reauthPromise: Promise<void> | null = null;
    const cleanup = () => {
      this.decrementOperationCount();
      if (session?.pinnedConnection !== conn) {
        if (reauthPromise != null) {
          // The reauth promise only exists if it hasn't thrown.
          const checkBackIn = () => {
            this.pool.checkIn(conn);
          };
          void reauthPromise.then(checkBackIn, checkBackIn);
        } else {
          this.pool.checkIn(conn);
        }
      }
    };

    let cmd;
    try {
      cmd = operation.buildCommand(conn, session);
    } catch (e) {
      cleanup();
      throw e;
    }

    const options = operation.buildOptions(timeoutContext);
    const ns = operation.ns;

    if (this.loadBalanced && isPinnableCommand(cmd, session) && !session?.pinnedConnection) {
      session?.pin(conn);
    }

    options.directConnection = this.topology.s.options.directConnection;

    const omitReadPreference =
      operation instanceof AggregateOperation &&
      operation.hasWriteStage &&
      maxWireVersion(conn) < MIN_SECONDARY_WRITE_WIRE_VERSION;
    if (omitReadPreference) {
      delete options.readPreference;
    }

    if (this.description.iscryptd) {
      options.omitMaxTimeMS = true;
    }

    try {
      try {
        const res = await conn.command(ns, cmd, options, operation.SERVER_COMMAND_RESPONSE_TYPE);
        throwIfWriteConcernError(res);
        return res;
      } catch (commandError) {
        throw this.decorateCommandError(conn, cmd, options, commandError);
      }
    } catch (operationError) {
      if (
        operationError instanceof MongoError &&
        operationError.code === MONGODB_ERROR_CODES.Reauthenticate
      ) {
        reauthPromise = this.pool.reauthenticate(conn);
        reauthPromise.then(undefined, error => {
          reauthPromise = null;
          squashError(error);
        });

        await abortable(reauthPromise, options);
        reauthPromise = null; // only reachable if reauth succeeds

        try {
          const res = await conn.command(ns, cmd, options, operation.SERVER_COMMAND_RESPONSE_TYPE);
          throwIfWriteConcernError(res);
          return res;
        } catch (commandError) {
          throw this.decorateCommandError(conn, cmd, options, commandError);
        }
      } else {
        throw operationError;
      }
    } finally {
      cleanup();
    }
  }

  /**
   * Handle SDAM error
   * @internal
   */
  handleError(error: AnyError, connection?: Connection) {
    if (!(error instanceof MongoError)) {
      return;
    }

    const isStaleError =
      error.connectionGeneration && error.connectionGeneration < this.pool.generation;
    if (isStaleError) {
      return;
    }

    const isNetworkNonTimeoutError =
      error instanceof MongoNetworkError && !(error instanceof MongoNetworkTimeoutError);
    const isNetworkTimeoutBeforeHandshakeError =
      error instanceof MongoNetworkError && error.beforeHandshake;
    const isAuthHandshakeError = error.hasErrorLabel(MongoErrorLabel.HandshakeError);
    if (isNetworkNonTimeoutError || isNetworkTimeoutBeforeHandshakeError || isAuthHandshakeError) {
      // In load balanced mode we never mark the server as unknown and always
      // clear for the specific service id.
      if (!this.loadBalanced) {
        error.addErrorLabel(MongoErrorLabel.ResetPool);
        markServerUnknown(this, error);
      } else if (connection) {
        this.pool.clear({ serviceId: connection.serviceId });
      }
    } else {
      if (isSDAMUnrecoverableError(error)) {
        if (shouldHandleStateChangeError(this, error)) {
          const shouldClearPool = isNodeShuttingDownError(error);
          if (this.loadBalanced && connection && shouldClearPool) {
            this.pool.clear({ serviceId: connection.serviceId });
          }

          if (!this.loadBalanced) {
            if (shouldClearPool) {
              error.addErrorLabel(MongoErrorLabel.ResetPool);
            }
            markServerUnknown(this, error);
            process.nextTick(() => this.requestCheck());
          }
        }
      }
    }
  }

  /**
   * Ensure that error is properly decorated and internal state is updated before throwing
   * @internal
   */
  private decorateCommandError(
    connection: Connection,
    cmd: Document,
    options: CommandOptions | GetMoreOptions | undefined,
    error: unknown
  ): Error {
    if (typeof error !== 'object' || error == null || !('name' in error)) {
      throw new MongoRuntimeError('An unexpected error type: ' + typeof error);
    }

    if (error.name === 'AbortError' && 'cause' in error && error.cause instanceof MongoError) {
      error = error.cause;
    }

    if (!(error instanceof MongoError)) {
      // Node.js or some other error we have not special handling for
      return error as Error;
    }

    if (connectionIsStale(this.pool, connection)) {
      return error;
    }

    const session = options?.session;
    if (error instanceof MongoNetworkError) {
      if (session && !session.hasEnded && session.serverSession) {
        session.serverSession.isDirty = true;
      }

      // inActiveTransaction check handles commit and abort.
      if (
        inActiveTransaction(session, cmd) &&
        !error.hasErrorLabel(MongoErrorLabel.TransientTransactionError)
      ) {
        error.addErrorLabel(MongoErrorLabel.TransientTransactionError);
      }

      if (
        (isRetryableWritesEnabled(this.topology) || isTransactionCommand(cmd)) &&
        supportsRetryableWrites(this) &&
        !inActiveTransaction(session, cmd)
      ) {
        error.addErrorLabel(MongoErrorLabel.RetryableWriteError);
      }
    } else {
      if (
        (isRetryableWritesEnabled(this.topology) || isTransactionCommand(cmd)) &&
        needsRetryableWriteLabel(error, maxWireVersion(this), this.description.type) &&
        !inActiveTransaction(session, cmd)
      ) {
        error.addErrorLabel(MongoErrorLabel.RetryableWriteError);
      }
    }

    if (
      session &&
      session.isPinned &&
      error.hasErrorLabel(MongoErrorLabel.TransientTransactionError)
    ) {
      session.unpin({ force: true });
    }

    this.handleError(error, connection);

    return error;
  }

  /**
   * Decrement the operation count, returning the new count.
   */
  private decrementOperationCount(): number {
    return (this.s.operationCount -= 1);
  }

  /**
   * Increment the operation count, returning the new count.
   */
  private incrementOperationCount(): number {
    return (this.s.operationCount += 1);
  }
}

function markServerUnknown(server: Server, error?: MongoError) {
  // Load balancer servers can never be marked unknown.
  if (server.loadBalanced) {
    return;
  }

  if (error instanceof MongoNetworkError && !(error instanceof MongoNetworkTimeoutError)) {
    server.monitor?.reset();
  }

  server.emit(
    Server.DESCRIPTION_RECEIVED,
    new ServerDescription(server.description.hostAddress, undefined, { error })
  );
}

function isPinnableCommand(cmd: Document, session?: ClientSession): boolean {
  if (session) {
    return (
      session.inTransaction() ||
      (session.transaction.isCommitted && 'commitTransaction' in cmd) ||
      'aggregate' in cmd ||
      'find' in cmd ||
      'getMore' in cmd ||
      'listCollections' in cmd ||
      'listIndexes' in cmd ||
      'bulkWrite' in cmd
    );
  }

  return false;
}

function connectionIsStale(pool: ConnectionPool, connection: Connection) {
  if (connection.serviceId) {
    return (
      connection.generation !== pool.serviceGenerations.get(connection.serviceId.toHexString())
    );
  }

  return connection.generation !== pool.generation;
}

function shouldHandleStateChangeError(server: Server, err: MongoError) {
  const etv = err.topologyVersion;
  const stv = server.description.topologyVersion;
  return compareTopologyVersion(stv, etv) < 0;
}

function inActiveTransaction(session: ClientSession | undefined, cmd: Document) {
  return session && session.inTransaction() && !isTransactionCommand(cmd);
}

/** this checks the retryWrites option passed down from the client options, it
 * does not check if the server supports retryable writes */
function isRetryableWritesEnabled(topology: Topology) {
  return topology.s.options.retryWrites !== false;
}
