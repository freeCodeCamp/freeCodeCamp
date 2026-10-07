import { inspect, promisify } from 'util';

import {
  type Binary,
  type BSONRegExp,
  type BSONSymbol,
  type Code,
  type DBRef,
  type Decimal128,
  type Document,
  type Double,
  EJSON,
  type EJSONOptions,
  type Int32,
  type Long,
  type MaxKey,
  type MinKey,
  type ObjectId,
  type Timestamp
} from './bson';
import type { CommandStartedEvent } from './cmap/command_monitoring_events';
import type {
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
} from './cmap/connection_pool_events';
import {
  COMMAND_FAILED,
  COMMAND_STARTED,
  COMMAND_SUCCEEDED,
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
  CONNECTION_READY,
  SERVER_CLOSED,
  SERVER_HEARTBEAT_FAILED,
  SERVER_HEARTBEAT_STARTED,
  SERVER_HEARTBEAT_SUCCEEDED,
  SERVER_OPENING,
  SERVER_SELECTION_FAILED,
  SERVER_SELECTION_STARTED,
  SERVER_SELECTION_SUCCEEDED,
  TOPOLOGY_CLOSED,
  TOPOLOGY_DESCRIPTION_CHANGED,
  TOPOLOGY_OPENING,
  WAITING_FOR_SUITABLE_SERVER
} from './constants';
import type {
  ServerClosedEvent,
  ServerOpeningEvent,
  TopologyClosedEvent,
  TopologyDescriptionChangedEvent,
  TopologyOpeningEvent
} from './sdam/events';
import type {
  ServerSelectionEvent,
  ServerSelectionFailedEvent,
  ServerSelectionStartedEvent,
  ServerSelectionSucceededEvent,
  WaitingForSuitableServerEvent
} from './sdam/server_selection_events';
import { HostAddress, isPromiseLike, isUint8Array, parseUnsignedInteger } from './utils';

/**
 * @public
 * Severity levels align with unix syslog.
 * Most typical driver functions will log to debug.
 */
export const SeverityLevel = Object.freeze({
  EMERGENCY: 'emergency',
  ALERT: 'alert',
  CRITICAL: 'critical',
  ERROR: 'error',
  WARNING: 'warn',
  NOTICE: 'notice',
  INFORMATIONAL: 'info',
  DEBUG: 'debug',
  TRACE: 'trace',
  OFF: 'off'
} as const);

/** @internal */
export const DEFAULT_MAX_DOCUMENT_LENGTH = 1000;
/** @public */
export type SeverityLevel = (typeof SeverityLevel)[keyof typeof SeverityLevel];

/** @internal */
class SeverityLevelMap extends Map<SeverityLevel | number, SeverityLevel | number> {
  constructor(entries: [SeverityLevel | number, SeverityLevel | number][]) {
    const newEntries: [number | SeverityLevel, SeverityLevel | number][] = [];
    for (const [level, value] of entries) {
      newEntries.push([value, level]);
    }

    newEntries.push(...entries);
    super(newEntries);
  }

  getNumericSeverityLevel(severity: SeverityLevel): number {
    return this.get(severity) as number;
  }

  getSeverityLevelName(level: number): SeverityLevel | undefined {
    return this.get(level) as SeverityLevel | undefined;
  }
}

/** @internal */
export const SEVERITY_LEVEL_MAP = new SeverityLevelMap([
  [SeverityLevel.OFF, -Infinity],
  [SeverityLevel.EMERGENCY, 0],
  [SeverityLevel.ALERT, 1],
  [SeverityLevel.CRITICAL, 2],
  [SeverityLevel.ERROR, 3],
  [SeverityLevel.WARNING, 4],
  [SeverityLevel.NOTICE, 5],
  [SeverityLevel.INFORMATIONAL, 6],
  [SeverityLevel.DEBUG, 7],
  [SeverityLevel.TRACE, 8]
]);

/** @public */
export const MongoLoggableComponent = Object.freeze({
  COMMAND: 'command',
  TOPOLOGY: 'topology',
  SERVER_SELECTION: 'serverSelection',
  CONNECTION: 'connection',
  CLIENT: 'client'
} as const);

/** @public */
export type MongoLoggableComponent =
  (typeof MongoLoggableComponent)[keyof typeof MongoLoggableComponent];

/** @internal */
export interface MongoLoggerEnvOptions {
  /** Severity level for command component */
  MONGODB_LOG_COMMAND?: string;
  /** Severity level for topology component */
  MONGODB_LOG_TOPOLOGY?: string;
  /** Severity level for server selection component */
  MONGODB_LOG_SERVER_SELECTION?: string;
  /** Severity level for CMAP */
  MONGODB_LOG_CONNECTION?: string;
  /** Severity level for client */
  MONGODB_LOG_CLIENT?: string;
  /** Default severity level to be if any of the above are unset */
  MONGODB_LOG_ALL?: string;
  /** Max length of embedded EJSON docs. Setting to 0 disables truncation. Defaults to 1000. */
  MONGODB_LOG_MAX_DOCUMENT_LENGTH?: string;
  /** Destination for log messages. Must be 'stderr', 'stdout'. Defaults to 'stderr'. */
  MONGODB_LOG_PATH?: string;
}

/** @public */
export interface LogComponentSeveritiesClientOptions {
  /** Optional severity level for command component */
  command?: SeverityLevel;
  /** Optional severity level for topology component */
  topology?: SeverityLevel;
  /** Optional severity level for server selection component */
  serverSelection?: SeverityLevel;
  /** Optional severity level for connection component */
  connection?: SeverityLevel;
  /** Optional severity level for client component */
  client?: SeverityLevel;
  /** Optional default severity level to be used if any of the above are unset */
  default?: SeverityLevel;
}

/** @internal */
export interface MongoLoggerMongoClientOptions {
  /** Destination for log messages */
  mongodbLogPath?: 'stdout' | 'stderr' | MongoDBLogWritable;
  /** Severity levels for logger components */
  mongodbLogComponentSeverities?: LogComponentSeveritiesClientOptions;
  /** Max length of embedded EJSON docs. Setting to 0 disables truncation. Defaults to 1000. */
  mongodbLogMaxDocumentLength?: number;
}

/** @internal */
export interface MongoLoggerOptions {
  componentSeverities: {
    /** Severity level for command component */
    command: SeverityLevel;
    /** Severity level for topology component */
    topology: SeverityLevel;
    /** Severity level for server selection component */
    serverSelection: SeverityLevel;
    /** Severity level for connection component */
    connection: SeverityLevel;
    /** Severity level for client component */
    client: SeverityLevel;
    /** Default severity level to be used if any of the above are unset */
    default: SeverityLevel;
  };
  /** Max length of embedded EJSON docs. Setting to 0 disables truncation. Defaults to 1000. */
  maxDocumentLength: number;
  /** Destination for log messages. */
  logDestination: MongoDBLogWritable;
  /** For internal check to see if error should stop logging. */
  logDestinationIsStdErr: boolean;
}

/**
 * Parses a string as one of SeverityLevel
 * @internal
 *
 * @param s - the value to be parsed
 * @returns one of SeverityLevel if value can be parsed as such, otherwise null
 */
export function parseSeverityFromString(s?: string): SeverityLevel | null {
  const validSeverities: string[] = Object.values(SeverityLevel);
  const lowerSeverity = s?.toLowerCase();

  if (lowerSeverity != null && validSeverities.includes(lowerSeverity)) {
    return lowerSeverity as SeverityLevel;
  }

  return null;
}

/** @internal */
export function createStdioLogger(stream: {
  write: NodeJS.WriteStream['write'];
}): MongoDBLogWritable {
  return {
    write: promisify((log: Log, cb: (error?: Error) => void): unknown => {
      const logLine = inspect(log, { compact: true, breakLength: Infinity });
      stream.write(`${logLine}\n`, 'utf-8', cb);
      return;
    })
  };
}

/**
 * resolves the MONGODB_LOG_PATH and mongodbLogPath options from the environment and the
 * mongo client options respectively. The mongodbLogPath can be either 'stdout', 'stderr', a NodeJS
 * Writable or an object which has a `write` method with the signature:
 * ```ts
 * write(log: Log): void
 * ```
 *
 * @returns the MongoDBLogWritable object to write logs to
 */
function resolveLogPath(
  { MONGODB_LOG_PATH }: MongoLoggerEnvOptions,
  { mongodbLogPath }: MongoLoggerMongoClientOptions
): { mongodbLogPath: MongoDBLogWritable; mongodbLogPathIsStdErr: boolean } {
  if (typeof mongodbLogPath === 'string' && /^stderr$/i.test(mongodbLogPath)) {
    return { mongodbLogPath: createStdioLogger(process.stderr), mongodbLogPathIsStdErr: true };
  }
  if (typeof mongodbLogPath === 'string' && /^stdout$/i.test(mongodbLogPath)) {
    return { mongodbLogPath: createStdioLogger(process.stdout), mongodbLogPathIsStdErr: false };
  }

  if (typeof mongodbLogPath === 'object' && typeof mongodbLogPath?.write === 'function') {
    return { mongodbLogPath: mongodbLogPath, mongodbLogPathIsStdErr: false };
  }

  if (MONGODB_LOG_PATH && /^stderr$/i.test(MONGODB_LOG_PATH)) {
    return { mongodbLogPath: createStdioLogger(process.stderr), mongodbLogPathIsStdErr: true };
  }
  if (MONGODB_LOG_PATH && /^stdout$/i.test(MONGODB_LOG_PATH)) {
    return { mongodbLogPath: createStdioLogger(process.stdout), mongodbLogPathIsStdErr: false };
  }

  return { mongodbLogPath: createStdioLogger(process.stderr), mongodbLogPathIsStdErr: true };
}

function resolveSeverityConfiguration(
  clientOption: string | undefined,
  environmentOption: string | undefined,
  defaultSeverity: SeverityLevel
): SeverityLevel {
  return (
    parseSeverityFromString(clientOption) ??
    parseSeverityFromString(environmentOption) ??
    defaultSeverity
  );
}

/** @public */
export interface Log extends Record<string, any> {
  t: Date;
  c: MongoLoggableComponent;
  s: SeverityLevel;
  message?: string;
}

/**
 * @public
 *
 * A custom destination for structured logging messages.
 */
export interface MongoDBLogWritable {
  /**
   * This function will be called for every enabled log message.
   *
   * It can be sync or async:
   * - If it is synchronous it will block the driver from proceeding until this method returns.
   * - If it is asynchronous the driver will not await the returned promise. It will attach fulfillment handling (`.then`).
   *   If the promise rejects the logger will write an error message to stderr and stop functioning.
   *   If the promise resolves the driver proceeds to the next log message (or waits for new ones to occur).
   *
   * Tips:
   * - We recommend writing an async `write` function that _never_ rejects.
   *   Instead handle logging errors as necessary to your use case and make the write function a noop, until it can be recovered.
   * - The Log messages are structured but **subject to change** since the intended purpose is informational.
   *   Program against this defensively and err on the side of stringifying whatever is passed in to write in some form or another.
   *
   */
  write(log: Log): PromiseLike<unknown> | unknown;
}

function compareSeverity(s0: SeverityLevel, s1: SeverityLevel): 1 | 0 | -1 {
  const s0Num = SEVERITY_LEVEL_MAP.getNumericSeverityLevel(s0);
  const s1Num = SEVERITY_LEVEL_MAP.getNumericSeverityLevel(s1);

  return s0Num < s1Num ? -1 : s0Num > s1Num ? 1 : 0;
}

/**
 * @internal
 * Must be separate from Events API due to differences in spec requirements for logging a command success
 */
export type LoggableCommandSucceededEvent = {
  address: string;
  connectionId?: string | number;
  requestId: number;
  duration: number;
  commandName: string;
  reply: Document | undefined;
  serviceId?: ObjectId;
  name: typeof COMMAND_SUCCEEDED;
  serverConnectionId: bigint | null;
  databaseName: string;
};

/**
 * @internal
 * Must be separate from Events API due to differences in spec requirements for logging a command failure
 */
export type LoggableCommandFailedEvent = {
  address: string;
  connectionId?: string | number;
  requestId: number;
  duration: number;
  commandName: string;
  failure: Error;
  serviceId?: ObjectId;
  name: typeof COMMAND_FAILED;
  serverConnectionId: bigint | null;
  databaseName: string;
};

/**
 * @internal
 * Must be separate from Events API due to differences in spec requirements for logging server heartbeat beginning
 */
export type LoggableServerHeartbeatStartedEvent = {
  topologyId: number;
  awaited: boolean;
  connectionId: string;
  name: typeof SERVER_HEARTBEAT_STARTED;
};

/**
 * @internal
 * Must be separate from Events API due to differences in spec requirements for logging server heartbeat success
 */
export type LoggableServerHeartbeatSucceededEvent = {
  topologyId: number;
  awaited: boolean;
  connectionId: string;
  reply: Document;
  serverConnectionId: number | '<monitor>';
  duration: number;
  name: typeof SERVER_HEARTBEAT_SUCCEEDED;
};

/**
 * @internal
 * Must be separate from Events API due to differences in spec requirements for logging server heartbeat failure
 */
export type LoggableServerHeartbeatFailedEvent = {
  topologyId: number;
  awaited: boolean;
  connectionId: string;
  failure: Error;
  duration: number;
  name: typeof SERVER_HEARTBEAT_FAILED;
};

type SDAMLoggableEvent =
  | ServerClosedEvent
  | LoggableServerHeartbeatFailedEvent
  | LoggableServerHeartbeatStartedEvent
  | LoggableServerHeartbeatSucceededEvent
  | ServerOpeningEvent
  | TopologyClosedEvent
  | TopologyDescriptionChangedEvent
  | TopologyOpeningEvent;

/** @internal */
export type LoggableEvent =
  | ServerSelectionStartedEvent
  | ServerSelectionFailedEvent
  | ServerSelectionSucceededEvent
  | WaitingForSuitableServerEvent
  | CommandStartedEvent
  | LoggableCommandSucceededEvent
  | LoggableCommandFailedEvent
  | ConnectionPoolCreatedEvent
  | ConnectionPoolReadyEvent
  | ConnectionPoolClosedEvent
  | ConnectionPoolClearedEvent
  | ConnectionCreatedEvent
  | ConnectionReadyEvent
  | ConnectionClosedEvent
  | ConnectionCheckedInEvent
  | ConnectionCheckedOutEvent
  | ConnectionCheckOutStartedEvent
  | ConnectionCheckOutFailedEvent
  | ServerClosedEvent
  | LoggableServerHeartbeatFailedEvent
  | LoggableServerHeartbeatStartedEvent
  | LoggableServerHeartbeatSucceededEvent
  | ServerOpeningEvent
  | TopologyClosedEvent
  | TopologyDescriptionChangedEvent
  | TopologyOpeningEvent;

/** @internal */
export interface LogConvertible extends Record<string, any> {
  toLog(): Record<string, any>;
}

type BSONObject =
  | BSONRegExp
  | BSONSymbol
  | Code
  | DBRef
  | Decimal128
  | Double
  | Int32
  | Long
  | MaxKey
  | MinKey
  | ObjectId
  | Timestamp
  | Binary;
/** @internal */
export function stringifyWithMaxLen(
  value: any,
  maxDocumentLength: number,
  options: EJSONOptions = {}
): string {
  let strToTruncate = '';

  let currentLength = 0;
  const maxDocumentLengthEnsurer = function maxDocumentLengthEnsurer(key: string, value: any) {
    if (currentLength >= maxDocumentLength) {
      return undefined;
    }
    // Account for root document
    if (key === '') {
      // Account for starting brace
      currentLength += 1;
      return value;
    }

    // +4 accounts for 2 quotation marks, colon and comma after value
    // Note that this potentially undercounts since it does not account for escape sequences which
    // will have an additional backslash added to them once passed through JSON.stringify.
    currentLength += key.length + 4;

    if (value == null) return value;

    switch (typeof value) {
      case 'string':
        // +2 accounts for quotes
        // Note that this potentially undercounts similarly to the key length calculation
        currentLength += value.length + 2;
        break;
      case 'number':
      case 'bigint':
        currentLength += String(value).length;
        break;
      case 'boolean':
        currentLength += value ? 4 : 5;
        break;
      case 'object':
        if (isUint8Array(value)) {
          // '{"$binary":{"base64":"<base64 string>","subType":"XX"}}'
          // This is an estimate based on the fact that the base64 is approximately 1.33x the length of
          // the actual binary sequence https://en.wikipedia.org/wiki/Base64
          currentLength += (22 + value.byteLength + value.byteLength * 0.33 + 18) | 0;
        } else if ('_bsontype' in value) {
          const v = value as BSONObject;
          switch (v._bsontype) {
            case 'Int32':
              currentLength += String(v.value).length;
              break;
            case 'Double':
              // Account for representing integers as <value>.0
              currentLength +=
                (v.value | 0) === v.value ? String(v.value).length + 2 : String(v.value).length;
              break;
            case 'Long':
              currentLength += v.toString().length;
              break;
            case 'ObjectId':
              // '{"$oid":"XXXXXXXXXXXXXXXXXXXXXXXX"}'
              currentLength += 35;
              break;
            case 'MaxKey':
            case 'MinKey':
              // '{"$maxKey":1}' or '{"$minKey":1}'
              currentLength += 13;
              break;
            case 'Binary':
              // '{"$binary":{"base64":"<base64 string>","subType":"XX"}}'
              // This is an estimate based on the fact that the base64 is approximately 1.33x the length of
              // the actual binary sequence https://en.wikipedia.org/wiki/Base64
              currentLength += (22 + value.position + value.position * 0.33 + 18) | 0;
              break;
            case 'Timestamp':
              // '{"$timestamp":{"t":<t>,"i":<i>}}'
              currentLength += 19 + String(v.t).length + 5 + String(v.i).length + 2;
              break;
            case 'Code':
              // '{"$code":"<code>"}' or '{"$code":"<code>","$scope":<scope>}'
              if (v.scope == null) {
                currentLength += v.code.length + 10 + 2;
              } else {
                // Ignoring actual scope object, so this undercounts by a significant amount
                currentLength += v.code.length + 10 + 11;
              }
              break;
            case 'BSONRegExp':
              // '{"$regularExpression":{"pattern":"<pattern>","options":"<options>"}}'
              currentLength += 34 + v.pattern.length + 13 + v.options.length + 3;
              break;
          }
        }
    }
    return value;
  };

  if (typeof value === 'string') {
    strToTruncate = value;
  } else if (typeof value === 'function') {
    strToTruncate = value.name;
  } else {
    try {
      if (maxDocumentLength !== 0) {
        strToTruncate = EJSON.stringify(value, maxDocumentLengthEnsurer, 0, options);
      } else {
        strToTruncate = EJSON.stringify(value, options);
      }
    } catch (e) {
      strToTruncate = `Extended JSON serialization failed with: ${e.message}`;
    }
  }

  // handle truncation that occurs in the middle of multi-byte codepoints
  if (
    maxDocumentLength !== 0 &&
    strToTruncate.length > maxDocumentLength &&
    strToTruncate.charCodeAt(maxDocumentLength - 1) !==
      strToTruncate.codePointAt(maxDocumentLength - 1)
  ) {
    maxDocumentLength--;
    if (maxDocumentLength === 0) {
      return '';
    }
  }

  return maxDocumentLength !== 0 && strToTruncate.length > maxDocumentLength
    ? `${strToTruncate.slice(0, maxDocumentLength)}...`
    : strToTruncate;
}

/** @internal */
export type Loggable = LoggableEvent | LogConvertible;

function isLogConvertible(obj: Loggable): obj is LogConvertible {
  const objAsLogConvertible = obj as LogConvertible;
  // eslint-disable-next-line no-restricted-syntax
  return objAsLogConvertible.toLog !== undefined && typeof objAsLogConvertible.toLog === 'function';
}

function attachServerSelectionFields(
  log: Record<string, any>,
  serverSelectionEvent: ServerSelectionEvent,
  maxDocumentLength: number = DEFAULT_MAX_DOCUMENT_LENGTH
) {
  const { selector, operation, topologyDescription, message } = serverSelectionEvent;
  log.selector = stringifyWithMaxLen(selector, maxDocumentLength);
  log.operation = operation;
  log.topologyDescription = stringifyWithMaxLen(topologyDescription, maxDocumentLength);
  log.message = message;

  return log;
}

function attachCommandFields(
  log: Record<string, any>,
  commandEvent: CommandStartedEvent | LoggableCommandSucceededEvent | LoggableCommandFailedEvent
) {
  log.commandName = commandEvent.commandName;
  log.requestId = commandEvent.requestId;
  log.driverConnectionId = commandEvent.connectionId;
  const { host, port } = HostAddress.fromString(commandEvent.address).toHostPort();
  log.serverHost = host;
  log.serverPort = port;
  if (commandEvent?.serviceId) {
    log.serviceId = commandEvent.serviceId.toHexString();
  }
  log.databaseName = commandEvent.databaseName;
  log.serverConnectionId = commandEvent.serverConnectionId;

  return log;
}

function attachConnectionFields(log: Record<string, any>, event: any) {
  const { host, port } = HostAddress.fromString(event.address).toHostPort();
  log.serverHost = host;
  log.serverPort = port;

  return log;
}

function attachSDAMFields(log: Record<string, any>, sdamEvent: SDAMLoggableEvent) {
  log.topologyId = sdamEvent.topologyId;
  return log;
}

function attachServerHeartbeatFields(
  log: Record<string, any>,
  serverHeartbeatEvent:
    | LoggableServerHeartbeatFailedEvent
    | LoggableServerHeartbeatStartedEvent
    | LoggableServerHeartbeatSucceededEvent
) {
  const { awaited, connectionId } = serverHeartbeatEvent;
  log.awaited = awaited;
  log.driverConnectionId = serverHeartbeatEvent.connectionId;
  const { host, port } = HostAddress.fromString(connectionId).toHostPort();
  log.serverHost = host;
  log.serverPort = port;
  return log;
}

/** @internal */
export function defaultLogTransform(
  logObject: LoggableEvent | Record<string, any>,
  maxDocumentLength: number = DEFAULT_MAX_DOCUMENT_LENGTH
): Omit<Log, 's' | 't' | 'c'> {
  let log: Omit<Log, 's' | 't' | 'c'> = Object.create(null);

  switch (logObject.name) {
    case SERVER_SELECTION_STARTED:
      log = attachServerSelectionFields(log, logObject, maxDocumentLength);
      return log;
    case SERVER_SELECTION_FAILED:
      log = attachServerSelectionFields(log, logObject, maxDocumentLength);
      log.failure = logObject.failure?.message;
      return log;
    case SERVER_SELECTION_SUCCEEDED:
      log = attachServerSelectionFields(log, logObject, maxDocumentLength);
      log.serverHost = logObject.serverHost;
      log.serverPort = logObject.serverPort;
      return log;
    case WAITING_FOR_SUITABLE_SERVER:
      log = attachServerSelectionFields(log, logObject, maxDocumentLength);
      log.remainingTimeMS = logObject.remainingTimeMS;
      return log;
    case COMMAND_STARTED:
      log = attachCommandFields(log, logObject);
      log.message = 'Command started';
      log.command = stringifyWithMaxLen(logObject.command, maxDocumentLength, { relaxed: true });
      log.databaseName = logObject.databaseName;
      return log;
    case COMMAND_SUCCEEDED:
      log = attachCommandFields(log, logObject);
      log.message = 'Command succeeded';
      log.durationMS = logObject.duration;
      log.reply = stringifyWithMaxLen(logObject.reply, maxDocumentLength, { relaxed: true });
      return log;
    case COMMAND_FAILED:
      log = attachCommandFields(log, logObject);
      log.message = 'Command failed';
      log.durationMS = logObject.duration;
      log.failure = logObject.failure?.message ?? '(redacted)';
      return log;
    case CONNECTION_POOL_CREATED:
      log = attachConnectionFields(log, logObject);
      log.message = 'Connection pool created';
      if (logObject.options) {
        const { maxIdleTimeMS, minPoolSize, maxPoolSize, maxConnecting, waitQueueTimeoutMS } =
          logObject.options;
        log = {
          ...log,
          maxIdleTimeMS,
          minPoolSize,
          maxPoolSize,
          maxConnecting,
          waitQueueTimeoutMS
        };
      }
      return log;
    case CONNECTION_POOL_READY:
      log = attachConnectionFields(log, logObject);
      log.message = 'Connection pool ready';
      return log;
    case CONNECTION_POOL_CLEARED:
      log = attachConnectionFields(log, logObject);
      log.message = 'Connection pool cleared';
      if (logObject.serviceId?._bsontype === 'ObjectId') {
        log.serviceId = logObject.serviceId?.toHexString();
      }
      return log;
    case CONNECTION_POOL_CLOSED:
      log = attachConnectionFields(log, logObject);
      log.message = 'Connection pool closed';
      return log;
    case CONNECTION_CREATED:
      log = attachConnectionFields(log, logObject);
      log.message = 'Connection created';
      log.driverConnectionId = logObject.connectionId;
      return log;
    case CONNECTION_READY:
      log = attachConnectionFields(log, logObject);
      log.message = 'Connection ready';
      log.driverConnectionId = logObject.connectionId;
      log.durationMS = logObject.durationMS;
      return log;
    case CONNECTION_CLOSED:
      log = attachConnectionFields(log, logObject);
      log.message = 'Connection closed';
      log.driverConnectionId = logObject.connectionId;
      switch (logObject.reason) {
        case 'stale':
          log.reason = 'Connection became stale because the pool was cleared';
          break;
        case 'idle':
          log.reason =
            'Connection has been available but unused for longer than the configured max idle time';
          break;
        case 'error':
          log.reason = 'An error occurred while using the connection';
          if (logObject.error) {
            log.error = logObject.error;
          }
          break;
        case 'poolClosed':
          log.reason = 'Connection pool was closed';
          break;
        default:
          log.reason = `Unknown close reason: ${logObject.reason}`;
      }
      return log;
    case CONNECTION_CHECK_OUT_STARTED:
      log = attachConnectionFields(log, logObject);
      log.message = 'Connection checkout started';
      return log;
    case CONNECTION_CHECK_OUT_FAILED:
      log = attachConnectionFields(log, logObject);
      log.message = 'Connection checkout failed';
      switch (logObject.reason) {
        case 'poolClosed':
          log.reason = 'Connection pool was closed';
          break;
        case 'timeout':
          log.reason = 'Wait queue timeout elapsed without a connection becoming available';
          break;
        case 'connectionError':
          log.reason = 'An error occurred while trying to establish a new connection';
          if (logObject.error) {
            log.error = logObject.error;
          }
          break;
        default:
          log.reason = `Unknown close reason: ${logObject.reason}`;
      }
      log.durationMS = logObject.durationMS;
      return log;
    case CONNECTION_CHECKED_OUT:
      log = attachConnectionFields(log, logObject);
      log.message = 'Connection checked out';
      log.driverConnectionId = logObject.connectionId;
      log.durationMS = logObject.durationMS;
      return log;
    case CONNECTION_CHECKED_IN:
      log = attachConnectionFields(log, logObject);
      log.message = 'Connection checked in';
      log.driverConnectionId = logObject.connectionId;
      return log;
    case SERVER_OPENING:
      log = attachSDAMFields(log, logObject);
      log = attachConnectionFields(log, logObject);
      log.message = 'Starting server monitoring';
      return log;
    case SERVER_CLOSED:
      log = attachSDAMFields(log, logObject);
      log = attachConnectionFields(log, logObject);
      log.message = 'Stopped server monitoring';
      return log;
    case SERVER_HEARTBEAT_STARTED:
      log = attachSDAMFields(log, logObject);
      log = attachServerHeartbeatFields(log, logObject);
      log.message = 'Server heartbeat started';
      return log;
    case SERVER_HEARTBEAT_SUCCEEDED:
      log = attachSDAMFields(log, logObject);
      log = attachServerHeartbeatFields(log, logObject);
      log.message = 'Server heartbeat succeeded';
      log.durationMS = logObject.duration;
      log.serverConnectionId = logObject.serverConnectionId;
      log.reply = stringifyWithMaxLen(logObject.reply, maxDocumentLength, { relaxed: true });
      return log;
    case SERVER_HEARTBEAT_FAILED:
      log = attachSDAMFields(log, logObject);
      log = attachServerHeartbeatFields(log, logObject);
      log.message = 'Server heartbeat failed';
      log.durationMS = logObject.duration;
      log.failure = logObject.failure?.message;
      return log;
    case TOPOLOGY_OPENING:
      log = attachSDAMFields(log, logObject);
      log.message = 'Starting topology monitoring';
      return log;
    case TOPOLOGY_CLOSED:
      log = attachSDAMFields(log, logObject);
      log.message = 'Stopped topology monitoring';
      return log;
    case TOPOLOGY_DESCRIPTION_CHANGED:
      log = attachSDAMFields(log, logObject);
      log.message = 'Topology description changed';
      log.previousDescription = log.reply = stringifyWithMaxLen(
        logObject.previousDescription,
        maxDocumentLength
      );
      log.newDescription = log.reply = stringifyWithMaxLen(
        logObject.newDescription,
        maxDocumentLength
      );
      return log;
    default:
      for (const [key, value] of Object.entries(logObject)) {
        if (value != null) log[key] = value;
      }
  }
  return log;
}

/** @internal */
export class MongoLogger {
  componentSeverities: Record<MongoLoggableComponent, SeverityLevel>;
  maxDocumentLength: number;
  logDestination: MongoDBLogWritable;
  logDestinationIsStdErr: boolean;
  pendingLog: PromiseLike<unknown> | unknown = null;
  private severities: Record<MongoLoggableComponent, Record<SeverityLevel, boolean>>;

  /**
   * This method should be used when logging errors that do not have a public driver API for
   * reporting errors.
   */
  error = this.log.bind(this, 'error');
  /**
   * This method should be used to log situations where undesirable application behaviour might
   * occur. For example, failing to end sessions on `MongoClient.close`.
   */
  warn = this.log.bind(this, 'warn');
  /**
   * This method should be used to report high-level information about normal driver behaviour.
   * For example, the creation of a `MongoClient`.
   */
  info = this.log.bind(this, 'info');
  /**
   * This method should be used to report information that would be helpful when debugging an
   * application. For example, a command starting, succeeding or failing.
   */
  debug = this.log.bind(this, 'debug');
  /**
   * This method should be used to report fine-grained details related to logic flow. For example,
   * entering and exiting a function body.
   */
  trace = this.log.bind(this, 'trace');

  constructor(options: MongoLoggerOptions) {
    this.componentSeverities = options.componentSeverities;
    this.maxDocumentLength = options.maxDocumentLength;
    this.logDestination = options.logDestination;
    this.logDestinationIsStdErr = options.logDestinationIsStdErr;
    this.severities = this.createLoggingSeverities();
  }

  createLoggingSeverities(): Record<MongoLoggableComponent, Record<SeverityLevel, boolean>> {
    const severities = Object();
    for (const component of Object.values(MongoLoggableComponent)) {
      severities[component] = {};
      for (const severityLevel of Object.values(SeverityLevel)) {
        severities[component][severityLevel] =
          compareSeverity(severityLevel, this.componentSeverities[component]) <= 0;
      }
    }
    return severities;
  }

  turnOffSeverities() {
    for (const component of Object.values(MongoLoggableComponent)) {
      this.componentSeverities[component] = SeverityLevel.OFF;
      for (const severityLevel of Object.values(SeverityLevel)) {
        this.severities[component][severityLevel] = false;
      }
    }
  }

  private logWriteFailureHandler(error: Error) {
    if (this.logDestinationIsStdErr) {
      this.turnOffSeverities();
      this.clearPendingLog();
      return;
    }
    this.logDestination = createStdioLogger(process.stderr);
    this.logDestinationIsStdErr = true;
    this.clearPendingLog();
    this.error(MongoLoggableComponent.CLIENT, {
      toLog: function () {
        return {
          message: 'User input for mongodbLogPath is now invalid. Logging is halted.',
          error: error.message
        };
      }
    });
    this.turnOffSeverities();
    this.clearPendingLog();
  }

  private clearPendingLog() {
    this.pendingLog = null;
  }

  willLog(component: MongoLoggableComponent, severity: SeverityLevel): boolean {
    if (severity === SeverityLevel.OFF) return false;
    return this.severities[component][severity];
  }

  private log(
    severity: SeverityLevel,
    component: MongoLoggableComponent,
    message: Loggable | string
  ): void {
    if (!this.willLog(component, severity)) return;

    let logMessage: Log = { t: new Date(), c: component, s: severity };
    if (typeof message === 'string') {
      logMessage.message = message;
    } else if (typeof message === 'object') {
      if (isLogConvertible(message)) {
        logMessage = { ...logMessage, ...message.toLog() };
      } else {
        logMessage = { ...logMessage, ...defaultLogTransform(message, this.maxDocumentLength) };
      }
    }

    if (isPromiseLike(this.pendingLog)) {
      this.pendingLog = this.pendingLog

        .then(() => this.logDestination.write(logMessage))

        .then(this.clearPendingLog.bind(this), this.logWriteFailureHandler.bind(this));
      return;
    }

    try {
      const logResult = this.logDestination.write(logMessage);
      if (isPromiseLike(logResult)) {
        this.pendingLog = logResult.then(
          this.clearPendingLog.bind(this),
          this.logWriteFailureHandler.bind(this)
        );
      }
    } catch (error) {
      this.logWriteFailureHandler(error);
    }
  }

  /**
   * Merges options set through environment variables and the MongoClient, preferring environment
   * variables when both are set, and substituting defaults for values not set. Options set in
   * constructor take precedence over both environment variables and MongoClient options.
   *
   * @remarks
   * When parsing component severity levels, invalid values are treated as unset and replaced with
   * the default severity.
   *
   * @param envOptions - options set for the logger from the environment
   * @param clientOptions - options set for the logger in the MongoClient options
   * @returns a MongoLoggerOptions object to be used when instantiating a new MongoLogger
   */
  static resolveOptions(
    envOptions: MongoLoggerEnvOptions,
    clientOptions: MongoLoggerMongoClientOptions
  ): MongoLoggerOptions {
    // client options take precedence over env options
    const resolvedLogPath = resolveLogPath(envOptions, clientOptions);
    const combinedOptions = {
      ...envOptions,
      ...clientOptions,
      mongodbLogPath: resolvedLogPath.mongodbLogPath,
      mongodbLogPathIsStdErr: resolvedLogPath.mongodbLogPathIsStdErr
    };
    const defaultSeverity = resolveSeverityConfiguration(
      combinedOptions.mongodbLogComponentSeverities?.default,
      combinedOptions.MONGODB_LOG_ALL,
      SeverityLevel.OFF
    );

    return {
      componentSeverities: {
        command: resolveSeverityConfiguration(
          combinedOptions.mongodbLogComponentSeverities?.command,
          combinedOptions.MONGODB_LOG_COMMAND,
          defaultSeverity
        ),
        topology: resolveSeverityConfiguration(
          combinedOptions.mongodbLogComponentSeverities?.topology,
          combinedOptions.MONGODB_LOG_TOPOLOGY,
          defaultSeverity
        ),
        serverSelection: resolveSeverityConfiguration(
          combinedOptions.mongodbLogComponentSeverities?.serverSelection,
          combinedOptions.MONGODB_LOG_SERVER_SELECTION,
          defaultSeverity
        ),
        connection: resolveSeverityConfiguration(
          combinedOptions.mongodbLogComponentSeverities?.connection,
          combinedOptions.MONGODB_LOG_CONNECTION,
          defaultSeverity
        ),
        client: resolveSeverityConfiguration(
          combinedOptions.mongodbLogComponentSeverities?.client,
          combinedOptions.MONGODB_LOG_CLIENT,
          defaultSeverity
        ),
        default: defaultSeverity
      },
      maxDocumentLength:
        combinedOptions.mongodbLogMaxDocumentLength ??
        parseUnsignedInteger(combinedOptions.MONGODB_LOG_MAX_DOCUMENT_LENGTH) ??
        1000,
      logDestination: combinedOptions.mongodbLogPath,
      logDestinationIsStdErr: combinedOptions.mongodbLogPathIsStdErr
    };
  }
}
