import { clearTimeout, setTimeout } from 'timers';

import { type Document, Long } from '../bson';
import { connect, makeConnection, makeSocket, performInitialHandshake } from '../cmap/connect';
import type { Connection, ConnectionOptions } from '../cmap/connection';
import { getFAASEnv } from '../cmap/handshake/client_metadata';
import { LEGACY_HELLO_COMMAND } from '../constants';
import { MongoError, MongoErrorLabel, MongoNetworkTimeoutError } from '../error';
import { MongoLoggableComponent } from '../mongo_logger';
import { CancellationToken, TypedEventEmitter } from '../mongo_types';
import {
  calculateDurationInMs,
  type Callback,
  type EventEmitterWithState,
  makeStateMachine,
  noop,
  now,
  ns
} from '../utils';
import { ServerType, STATE_CLOSED, STATE_CLOSING } from './common';
import {
  ServerHeartbeatFailedEvent,
  ServerHeartbeatStartedEvent,
  ServerHeartbeatSucceededEvent
} from './events';
import { Server } from './server';
import type { TopologyVersion } from './server_description';

const STATE_IDLE = 'idle';
const STATE_MONITORING = 'monitoring';
const stateTransition = makeStateMachine({
  [STATE_CLOSING]: [STATE_CLOSING, STATE_IDLE, STATE_CLOSED],
  [STATE_CLOSED]: [STATE_CLOSED, STATE_MONITORING],
  [STATE_IDLE]: [STATE_IDLE, STATE_MONITORING, STATE_CLOSING],
  [STATE_MONITORING]: [STATE_MONITORING, STATE_IDLE, STATE_CLOSING]
});

const INVALID_REQUEST_CHECK_STATES = new Set([STATE_CLOSING, STATE_CLOSED, STATE_MONITORING]);
function isInCloseState(monitor: Monitor) {
  return monitor.s.state === STATE_CLOSED || monitor.s.state === STATE_CLOSING;
}

/** @public */
export const ServerMonitoringMode = Object.freeze({
  auto: 'auto',
  poll: 'poll',
  stream: 'stream'
} as const);

/** @public */
export type ServerMonitoringMode = (typeof ServerMonitoringMode)[keyof typeof ServerMonitoringMode];

/** @internal */
export interface MonitorPrivate {
  state: string;
}

/** @public */
export interface MonitorOptions
  extends Omit<ConnectionOptions, 'id' | 'generation' | 'hostAddress'> {
  connectTimeoutMS: number;
  heartbeatFrequencyMS: number;
  minHeartbeatFrequencyMS: number;
  serverMonitoringMode: ServerMonitoringMode;
}

/** @public */
export type MonitorEvents = {
  serverHeartbeatStarted(event: ServerHeartbeatStartedEvent): void;
  serverHeartbeatSucceeded(event: ServerHeartbeatSucceededEvent): void;
  serverHeartbeatFailed(event: ServerHeartbeatFailedEvent): void;
  resetServer(error?: MongoError): void;
  resetConnectionPool(): void;
  close(): void;
} & EventEmitterWithState;

/** @internal */
export class Monitor extends TypedEventEmitter<MonitorEvents> {
  /** @internal */
  s: MonitorPrivate;
  address: string;
  options: Readonly<
    Pick<
      MonitorOptions,
      | 'connectTimeoutMS'
      | 'heartbeatFrequencyMS'
      | 'minHeartbeatFrequencyMS'
      | 'serverMonitoringMode'
    >
  >;
  connectOptions: ConnectionOptions;
  isRunningInFaasEnv: boolean;
  server: Server;
  connection: Connection | null;
  cancellationToken: CancellationToken;
  /** @internal */
  monitorId?: MonitorInterval;
  rttPinger?: RTTPinger;
  /** @internal */
  override component = MongoLoggableComponent.TOPOLOGY;
  /** @internal */
  private rttSampler: RTTSampler;

  constructor(server: Server, options: MonitorOptions) {
    super();
    this.on('error', noop);

    this.server = server;
    this.connection = null;
    this.cancellationToken = new CancellationToken();
    this.cancellationToken.setMaxListeners(Infinity);
    this.monitorId = undefined;
    this.s = {
      state: STATE_CLOSED
    };
    this.address = server.description.address;
    this.options = Object.freeze({
      connectTimeoutMS: options.connectTimeoutMS ?? 10000,
      heartbeatFrequencyMS: options.heartbeatFrequencyMS ?? 10000,
      minHeartbeatFrequencyMS: options.minHeartbeatFrequencyMS ?? 500,
      serverMonitoringMode: options.serverMonitoringMode
    });
    this.isRunningInFaasEnv = getFAASEnv() != null;
    this.mongoLogger = this.server.topology.client?.mongoLogger;
    this.rttSampler = new RTTSampler(10);

    const cancellationToken = this.cancellationToken;
    // TODO: refactor this to pull it directly from the pool, requires new ConnectionPool integration
    const connectOptions = {
      id: '<monitor>' as const,
      generation: server.pool.generation,
      cancellationToken,
      hostAddress: server.description.hostAddress,
      ...options,
      // force BSON serialization options
      raw: false,
      useBigInt64: false,
      promoteLongs: true,
      promoteValues: true,
      promoteBuffers: true
    };

    // ensure no authentication is used for monitoring
    delete connectOptions.credentials;
    if (connectOptions.autoEncrypter) {
      delete connectOptions.autoEncrypter;
    }

    this.connectOptions = Object.freeze(connectOptions);
  }

  connect(): void {
    if (this.s.state !== STATE_CLOSED) {
      return;
    }

    // start
    const heartbeatFrequencyMS = this.options.heartbeatFrequencyMS;
    const minHeartbeatFrequencyMS = this.options.minHeartbeatFrequencyMS;
    this.monitorId = new MonitorInterval(monitorServer(this), {
      heartbeatFrequencyMS: heartbeatFrequencyMS,
      minHeartbeatFrequencyMS: minHeartbeatFrequencyMS,
      immediate: true
    });
  }

  requestCheck(): void {
    if (INVALID_REQUEST_CHECK_STATES.has(this.s.state)) {
      return;
    }

    this.monitorId?.wake();
  }

  reset(): void {
    const topologyVersion = this.server.description.topologyVersion;
    if (isInCloseState(this) || topologyVersion == null) {
      return;
    }

    stateTransition(this, STATE_CLOSING);
    resetMonitorState(this);

    // restart monitor
    stateTransition(this, STATE_IDLE);

    // restart monitoring
    const heartbeatFrequencyMS = this.options.heartbeatFrequencyMS;
    const minHeartbeatFrequencyMS = this.options.minHeartbeatFrequencyMS;
    this.monitorId = new MonitorInterval(monitorServer(this), {
      heartbeatFrequencyMS: heartbeatFrequencyMS,
      minHeartbeatFrequencyMS: minHeartbeatFrequencyMS
    });
  }

  close(): void {
    if (isInCloseState(this)) {
      return;
    }

    stateTransition(this, STATE_CLOSING);
    resetMonitorState(this);

    // close monitor
    this.emit('close');
    stateTransition(this, STATE_CLOSED);
  }

  get roundTripTime(): number {
    return this.rttSampler.average();
  }

  get minRoundTripTime(): number {
    return this.rttSampler.min();
  }

  get latestRtt(): number | null {
    return this.rttSampler.last;
  }

  addRttSample(rtt: number) {
    this.rttSampler.addSample(rtt);
  }

  clearRttSamples() {
    this.rttSampler.clear();
  }
}

function resetMonitorState(monitor: Monitor) {
  monitor.monitorId?.stop();
  monitor.monitorId = undefined;

  monitor.rttPinger?.close();
  monitor.rttPinger = undefined;

  monitor.cancellationToken.emit('cancel');

  monitor.connection?.destroy();
  monitor.connection = null;

  monitor.clearRttSamples();
}

function useStreamingProtocol(monitor: Monitor, topologyVersion: TopologyVersion | null): boolean {
  // If we have no topology version we always poll no matter
  // what the user provided, since the server does not support
  // the streaming protocol.
  if (topologyVersion == null) return false;

  const serverMonitoringMode = monitor.options.serverMonitoringMode;
  if (serverMonitoringMode === ServerMonitoringMode.poll) return false;
  if (serverMonitoringMode === ServerMonitoringMode.stream) return true;

  // If we are in auto mode, we need to figure out if we're in a FaaS
  // environment or not and choose the appropriate mode.
  if (monitor.isRunningInFaasEnv) return false;
  return true;
}

function checkServer(monitor: Monitor, callback: Callback<Document | null>) {
  let start: number;
  let awaited: boolean;
  const topologyVersion = monitor.server.description.topologyVersion;
  const isAwaitable = useStreamingProtocol(monitor, topologyVersion);
  monitor.emitAndLogHeartbeat(
    Server.SERVER_HEARTBEAT_STARTED,
    monitor.server.topology.s.id,
    undefined,
    new ServerHeartbeatStartedEvent(monitor.address, isAwaitable)
  );

  function onHeartbeatFailed(err: Error) {
    monitor.connection?.destroy();
    monitor.connection = null;
    monitor.emitAndLogHeartbeat(
      Server.SERVER_HEARTBEAT_FAILED,
      monitor.server.topology.s.id,
      undefined,
      new ServerHeartbeatFailedEvent(monitor.address, calculateDurationInMs(start), err, awaited)
    );

    const error = !(err instanceof MongoError)
      ? new MongoError(MongoError.buildErrorMessage(err), { cause: err })
      : err;
    error.addErrorLabel(MongoErrorLabel.ResetPool);
    if (error instanceof MongoNetworkTimeoutError) {
      error.addErrorLabel(MongoErrorLabel.InterruptInUseConnections);
    }

    monitor.emit('resetServer', error);
    callback(err);
  }

  function onHeartbeatSucceeded(hello: Document) {
    if (!('isWritablePrimary' in hello)) {
      // Provide hello-style response document.
      hello.isWritablePrimary = hello[LEGACY_HELLO_COMMAND];
    }

    // NOTE: here we use the latestRtt as this measurement corresponds with the value
    // obtained for this successful heartbeat, if there is no latestRtt, then we calculate the
    // duration
    const duration =
      isAwaitable && monitor.rttPinger
        ? (monitor.rttPinger.latestRtt ?? calculateDurationInMs(start))
        : calculateDurationInMs(start);

    monitor.addRttSample(duration);

    monitor.emitAndLogHeartbeat(
      Server.SERVER_HEARTBEAT_SUCCEEDED,
      monitor.server.topology.s.id,
      hello.connectionId,
      new ServerHeartbeatSucceededEvent(monitor.address, duration, hello, isAwaitable)
    );

    if (isAwaitable) {
      // If we are using the streaming protocol then we immediately issue another 'started'
      // event, otherwise the "check" is complete and return to the main monitor loop
      monitor.emitAndLogHeartbeat(
        Server.SERVER_HEARTBEAT_STARTED,
        monitor.server.topology.s.id,
        undefined,
        new ServerHeartbeatStartedEvent(monitor.address, true)
      );
      // We have not actually sent an outgoing handshake, but when we get the next response we
      // want the duration to reflect the time since we last heard from the server
      start = now();
    } else {
      monitor.rttPinger?.close();
      monitor.rttPinger = undefined;

      callback(undefined, hello);
    }
  }

  const { connection } = monitor;
  if (connection && !connection.closed) {
    const { serverApi, helloOk } = connection;
    const connectTimeoutMS = monitor.options.connectTimeoutMS;
    const maxAwaitTimeMS = monitor.options.heartbeatFrequencyMS;

    const cmd = {
      [serverApi?.version || helloOk ? 'hello' : LEGACY_HELLO_COMMAND]: 1,
      ...(isAwaitable && topologyVersion
        ? { maxAwaitTimeMS, topologyVersion: makeTopologyVersion(topologyVersion) }
        : {})
    };

    const options = isAwaitable
      ? {
          socketTimeoutMS: connectTimeoutMS ? connectTimeoutMS + maxAwaitTimeMS : 0,
          exhaustAllowed: true
        }
      : { socketTimeoutMS: connectTimeoutMS };

    if (isAwaitable && monitor.rttPinger == null) {
      monitor.rttPinger = new RTTPinger(monitor);
    }

    // Record new start time before sending handshake
    start = now();

    if (isAwaitable) {
      awaited = true;
      return connection.exhaustCommand(ns('admin.$cmd'), cmd, options, (error, hello) => {
        if (error) return onHeartbeatFailed(error);
        return onHeartbeatSucceeded(hello);
      });
    }

    awaited = false;
    connection
      .command(ns('admin.$cmd'), cmd, options)
      .then(onHeartbeatSucceeded, onHeartbeatFailed);

    return;
  }

  // connecting does an implicit `hello`
  (async () => {
    const socket = await makeSocket(monitor.connectOptions);
    const connection = makeConnection(monitor.connectOptions, socket);
    // The start time is after socket creation but before the handshake
    start = now();
    try {
      await performInitialHandshake(connection, monitor.connectOptions);
      return connection;
    } catch (error) {
      connection.destroy();
      throw error;
    }
  })().then(
    connection => {
      if (isInCloseState(monitor)) {
        connection.destroy();
        return;
      }
      const duration = calculateDurationInMs(start);
      monitor.addRttSample(duration);

      monitor.connection = connection;
      monitor.emitAndLogHeartbeat(
        Server.SERVER_HEARTBEAT_SUCCEEDED,
        monitor.server.topology.s.id,
        connection.hello?.connectionId,
        new ServerHeartbeatSucceededEvent(
          monitor.address,
          duration,
          connection.hello,
          useStreamingProtocol(monitor, connection.hello?.topologyVersion)
        )
      );

      callback(undefined, connection.hello);
    },
    error => {
      monitor.connection = null;
      awaited = false;
      onHeartbeatFailed(error);
    }
  );
}

function monitorServer(monitor: Monitor) {
  return (callback: Callback) => {
    if (monitor.s.state === STATE_MONITORING) {
      process.nextTick(callback);
      return;
    }
    stateTransition(monitor, STATE_MONITORING);
    function done() {
      if (!isInCloseState(monitor)) {
        stateTransition(monitor, STATE_IDLE);
      }

      callback();
    }

    checkServer(monitor, (err, hello) => {
      if (err) {
        // otherwise an error occurred on initial discovery, also bail
        if (monitor.server.description.type === ServerType.Unknown) {
          return done();
        }
      }

      // if the check indicates streaming is supported, immediately reschedule monitoring
      if (useStreamingProtocol(monitor, hello?.topologyVersion)) {
        setTimeout(() => {
          if (!isInCloseState(monitor)) {
            monitor.monitorId?.wake();
          }
        }, 0);
      }

      done();
    });
  };
}

function makeTopologyVersion(tv: TopologyVersion) {
  return {
    processId: tv.processId,
    // tests mock counter as just number, but in a real situation counter should always be a Long
    // TODO(NODE-2674): Preserve int64 sent from MongoDB
    counter: Long.isLong(tv.counter) ? tv.counter : Long.fromNumber(tv.counter)
  };
}

/** @internal */
export interface RTTPingerOptions extends ConnectionOptions {
  heartbeatFrequencyMS: number;
}

/** @internal */
export class RTTPinger {
  connection?: Connection;
  /** @internal */
  cancellationToken: CancellationToken;
  /** @internal */
  monitorId: NodeJS.Timeout;
  /** @internal */
  monitor: Monitor;
  closed: boolean;
  /** @internal */
  latestRtt?: number;

  constructor(monitor: Monitor) {
    this.connection = undefined;
    this.cancellationToken = monitor.cancellationToken;
    this.closed = false;
    this.monitor = monitor;
    this.latestRtt = monitor.latestRtt ?? undefined;

    const heartbeatFrequencyMS = monitor.options.heartbeatFrequencyMS;
    this.monitorId = setTimeout(() => this.measureRoundTripTime(), heartbeatFrequencyMS);
  }

  get roundTripTime(): number {
    return this.monitor.roundTripTime;
  }

  get minRoundTripTime(): number {
    return this.monitor.minRoundTripTime;
  }

  close(): void {
    this.closed = true;
    clearTimeout(this.monitorId);

    this.connection?.destroy();
    this.connection = undefined;
  }

  private measureAndReschedule(start: number, conn?: Connection) {
    if (this.closed) {
      conn?.destroy();
      return;
    }

    if (this.connection == null) {
      this.connection = conn;
    }

    this.latestRtt = calculateDurationInMs(start);
    this.monitorId = setTimeout(
      () => this.measureRoundTripTime(),
      this.monitor.options.heartbeatFrequencyMS
    );
  }

  private measureRoundTripTime() {
    const start = now();

    if (this.closed) {
      return;
    }

    const connection = this.connection;
    if (connection == null) {
      connect(this.monitor.connectOptions).then(
        connection => {
          this.measureAndReschedule(start, connection);
        },
        () => {
          this.connection = undefined;
        }
      );
      return;
    }

    const commandName =
      connection.serverApi?.version || connection.helloOk ? 'hello' : LEGACY_HELLO_COMMAND;

    connection.command(ns('admin.$cmd'), { [commandName]: 1 }, undefined).then(
      () => this.measureAndReschedule(start),
      () => {
        this.connection?.destroy();
        this.connection = undefined;
        return;
      }
    );
  }
}

/**
 * @internal
 */
export interface MonitorIntervalOptions {
  /** The interval to execute a method on */
  heartbeatFrequencyMS: number;
  /** A minimum interval that must elapse before the method is called */
  minHeartbeatFrequencyMS: number;
  /** Whether the method should be called immediately when the interval is started  */
  immediate: boolean;
}

/**
 * @internal
 */
export class MonitorInterval {
  fn: (callback: Callback) => void;
  timerId: NodeJS.Timeout | undefined;
  lastExecutionEnded: number;
  isExpeditedCallToFnScheduled = false;
  stopped = false;
  isExecutionInProgress = false;
  hasExecutedOnce = false;

  heartbeatFrequencyMS: number;
  minHeartbeatFrequencyMS: number;

  constructor(fn: (callback: Callback) => void, options: Partial<MonitorIntervalOptions> = {}) {
    this.fn = fn;
    this.lastExecutionEnded = -Infinity;

    this.heartbeatFrequencyMS = options.heartbeatFrequencyMS ?? 1000;
    this.minHeartbeatFrequencyMS = options.minHeartbeatFrequencyMS ?? 500;

    if (options.immediate) {
      this._executeAndReschedule();
    } else {
      this._reschedule(undefined);
    }
  }

  wake() {
    const currentTime = now();
    const timeSinceLastCall = currentTime - this.lastExecutionEnded;

    // TODO(NODE-4674): Add error handling and logging to the monitor
    if (timeSinceLastCall < 0) {
      return this._executeAndReschedule();
    }

    if (this.isExecutionInProgress) {
      return;
    }

    // debounce multiple calls to wake within the `minInterval`
    if (this.isExpeditedCallToFnScheduled) {
      return;
    }

    // reschedule a call as soon as possible, ensuring the call never happens
    // faster than the `minInterval`
    if (timeSinceLastCall < this.minHeartbeatFrequencyMS) {
      this.isExpeditedCallToFnScheduled = true;
      this._reschedule(this.minHeartbeatFrequencyMS - timeSinceLastCall);
      return;
    }

    this._executeAndReschedule();
  }

  stop() {
    this.stopped = true;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = undefined;
    }

    this.lastExecutionEnded = -Infinity;
    this.isExpeditedCallToFnScheduled = false;
  }

  toString() {
    return JSON.stringify(this);
  }

  toJSON() {
    const currentTime = now();
    const timeSinceLastCall = currentTime - this.lastExecutionEnded;
    return {
      timerId: this.timerId != null ? 'set' : 'cleared',
      lastCallTime: this.lastExecutionEnded,
      isExpeditedCheckScheduled: this.isExpeditedCallToFnScheduled,
      stopped: this.stopped,
      heartbeatFrequencyMS: this.heartbeatFrequencyMS,
      minHeartbeatFrequencyMS: this.minHeartbeatFrequencyMS,
      currentTime,
      timeSinceLastCall
    };
  }

  private _reschedule(ms?: number) {
    if (this.stopped) return;
    if (this.timerId) {
      clearTimeout(this.timerId);
    }

    this.timerId = setTimeout(this._executeAndReschedule, ms || this.heartbeatFrequencyMS);
  }

  private _executeAndReschedule = () => {
    if (this.stopped) return;
    if (this.timerId) {
      clearTimeout(this.timerId);
    }

    this.isExpeditedCallToFnScheduled = false;
    this.isExecutionInProgress = true;

    this.fn(() => {
      this.lastExecutionEnded = now();
      this.isExecutionInProgress = false;
      this._reschedule(this.heartbeatFrequencyMS);
    });
  };
}

/** @internal
 * This class implements the RTT sampling logic specified for [CSOT](https://github.com/mongodb/specifications/blob/bbb335e60cd7ea1e0f7cd9a9443cb95fc9d3b64d/source/client-side-operations-timeout/client-side-operations-timeout.md#drivers-use-minimum-rtt-to-short-circuit-operations)
 *
 * This is implemented as a [circular buffer](https://en.wikipedia.org/wiki/Circular_buffer) keeping
 * the most recent `windowSize` samples
 * */
export class RTTSampler {
  /** Index of the next slot to be overwritten */
  private writeIndex: number;
  private length: number;
  private rttSamples: Float64Array;

  constructor(windowSize = 10) {
    this.rttSamples = new Float64Array(windowSize);
    this.length = 0;
    this.writeIndex = 0;
  }

  /**
   * Adds an rtt sample to the end of the circular buffer
   * When `windowSize` samples have been collected, `addSample` overwrites the least recently added
   * sample
   */
  addSample(sample: number) {
    this.rttSamples[this.writeIndex++] = sample;
    if (this.length < this.rttSamples.length) {
      this.length++;
    }

    this.writeIndex %= this.rttSamples.length;
  }

  /**
   * When \< 2 samples have been collected, returns 0
   * Otherwise computes the minimum value samples contained in the buffer
   */
  min(): number {
    if (this.length < 2) return 0;
    let min = this.rttSamples[0];
    for (let i = 1; i < this.length; i++) {
      if (this.rttSamples[i] < min) min = this.rttSamples[i];
    }

    return min;
  }

  /**
   * Returns mean of samples contained in the buffer
   */
  average(): number {
    if (this.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
      sum += this.rttSamples[i];
    }

    return sum / this.length;
  }

  /**
   * Returns most recently inserted element in the buffer
   * Returns null if the buffer is empty
   * */
  get last(): number | null {
    if (this.length === 0) return null;
    return this.rttSamples[this.writeIndex === 0 ? this.length - 1 : this.writeIndex - 1];
  }

  /**
   * Clear the buffer
   * NOTE: this does not overwrite the data held in the internal array, just the pointers into
   * this array
   */
  clear() {
    this.length = 0;
    this.writeIndex = 0;
  }
}
