import type { Document } from './bson';
import {
  type ClientBulkWriteError,
  type ClientBulkWriteResult
} from './operations/client_bulk_write/common';
import type { ServerType } from './sdam/common';
import type { TopologyVersion } from './sdam/server_description';
import type { TopologyDescription } from './sdam/topology_description';

/** @public */
export type AnyError = MongoError | Error;

/**
 * @internal
 * The legacy error message from the server that indicates the node is not a writable primary
 * https://github.com/mongodb/specifications/blob/921232976f9913cf17415b5ef937ee772e45e6ae/source/server-discovery-and-monitoring/server-discovery-and-monitoring.md#not-writable-primary-and-node-is-recovering
 */
export const LEGACY_NOT_WRITABLE_PRIMARY_ERROR_MESSAGE = new RegExp('not master', 'i');

/**
 * @internal
 * The legacy error message from the server that indicates the node is not a primary or secondary
 * https://github.com/mongodb/specifications/blob/921232976f9913cf17415b5ef937ee772e45e6ae/source/server-discovery-and-monitoring/server-discovery-and-monitoring.md#not-writable-primary-and-node-is-recovering
 */
export const LEGACY_NOT_PRIMARY_OR_SECONDARY_ERROR_MESSAGE = new RegExp(
  'not master or secondary',
  'i'
);

/**
 * @internal
 * The error message from the server that indicates the node is recovering
 * https://github.com/mongodb/specifications/blob/921232976f9913cf17415b5ef937ee772e45e6ae/source/server-discovery-and-monitoring/server-discovery-and-monitoring.md#not-writable-primary-and-node-is-recovering
 */
export const NODE_IS_RECOVERING_ERROR_MESSAGE = new RegExp('node is recovering', 'i');

/** @internal MongoDB Error Codes */
export const MONGODB_ERROR_CODES = Object.freeze({
  HostUnreachable: 6,
  HostNotFound: 7,
  AuthenticationFailed: 18,
  NetworkTimeout: 89,
  ShutdownInProgress: 91,
  PrimarySteppedDown: 189,
  ExceededTimeLimit: 262,
  SocketException: 9001,
  NotWritablePrimary: 10107,
  InterruptedAtShutdown: 11600,
  InterruptedDueToReplStateChange: 11602,
  NotPrimaryNoSecondaryOk: 13435,
  NotPrimaryOrSecondary: 13436,
  StaleShardVersion: 63,
  StaleEpoch: 150,
  StaleConfig: 13388,
  RetryChangeStream: 234,
  FailedToSatisfyReadPreference: 133,
  CursorNotFound: 43,
  LegacyNotPrimary: 10058,
  // WriteConcernTimeout is WriteConcernFailed on pre-8.1 servers
  WriteConcernTimeout: 64,
  NamespaceNotFound: 26,
  IllegalOperation: 20,
  MaxTimeMSExpired: 50,
  UnknownReplWriteConcern: 79,
  UnsatisfiableWriteConcern: 100,
  Reauthenticate: 391,
  ReadConcernMajorityNotAvailableYet: 134
} as const);

// From spec https://github.com/mongodb/specifications/blob/921232976f9913cf17415b5ef937ee772e45e6ae/source/change-streams/change-streams.md#resumable-error
export const GET_MORE_RESUMABLE_CODES = new Set<number>([
  MONGODB_ERROR_CODES.HostUnreachable,
  MONGODB_ERROR_CODES.HostNotFound,
  MONGODB_ERROR_CODES.NetworkTimeout,
  MONGODB_ERROR_CODES.ShutdownInProgress,
  MONGODB_ERROR_CODES.PrimarySteppedDown,
  MONGODB_ERROR_CODES.ExceededTimeLimit,
  MONGODB_ERROR_CODES.SocketException,
  MONGODB_ERROR_CODES.NotWritablePrimary,
  MONGODB_ERROR_CODES.InterruptedAtShutdown,
  MONGODB_ERROR_CODES.InterruptedDueToReplStateChange,
  MONGODB_ERROR_CODES.NotPrimaryNoSecondaryOk,
  MONGODB_ERROR_CODES.NotPrimaryOrSecondary,
  MONGODB_ERROR_CODES.StaleShardVersion,
  MONGODB_ERROR_CODES.StaleEpoch,
  MONGODB_ERROR_CODES.StaleConfig,
  MONGODB_ERROR_CODES.RetryChangeStream,
  MONGODB_ERROR_CODES.FailedToSatisfyReadPreference,
  MONGODB_ERROR_CODES.CursorNotFound
]);

/** @public */
export const MongoErrorLabel = Object.freeze({
  RetryableWriteError: 'RetryableWriteError',
  TransientTransactionError: 'TransientTransactionError',
  UnknownTransactionCommitResult: 'UnknownTransactionCommitResult',
  ResumableChangeStreamError: 'ResumableChangeStreamError',
  HandshakeError: 'HandshakeError',
  ResetPool: 'ResetPool',
  PoolRequstedRetry: 'PoolRequstedRetry',
  InterruptInUseConnections: 'InterruptInUseConnections',
  NoWritesPerformed: 'NoWritesPerformed'
} as const);

/** @public */
export type MongoErrorLabel = (typeof MongoErrorLabel)[keyof typeof MongoErrorLabel];

/** @public */
export interface ErrorDescription extends Document {
  message?: string;
  errmsg?: string;
  $err?: string;
  errorLabels?: string[];
  errInfo?: Document;
}

function isAggregateError(e: unknown): e is Error & { errors: Error[] } {
  return e != null && typeof e === 'object' && 'errors' in e && Array.isArray(e.errors);
}

/**
 * @public
 * @category Error
 *
 * @privateRemarks
 * mongodb-client-encryption has a dependency on this error, it uses the constructor with a string argument
 */
export class MongoError extends Error {
  /** @internal */
  private readonly errorLabelSet: Set<string> = new Set();
  public get errorLabels(): string[] {
    return Array.from(this.errorLabelSet);
  }

  /**
   * This is a number in MongoServerError and a string in MongoDriverError
   * @privateRemarks
   * Define the type override on the subclasses when we can use the override keyword
   */
  code?: number | string;
  topologyVersion?: TopologyVersion;
  connectionGeneration?: number;
  override cause?: Error;

  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string, options?: { cause?: Error }) {
    super(message, options);
  }

  /** @internal */
  static buildErrorMessage(e: unknown): string {
    if (typeof e === 'string') {
      return e;
    }
    if (isAggregateError(e) && e.message.length === 0) {
      return e.errors.length === 0
        ? 'AggregateError has an empty errors array. Please check the `cause` property for more information.'
        : e.errors.map(({ message }) => message).join(', ');
    }

    return e != null && typeof e === 'object' && 'message' in e && typeof e.message === 'string'
      ? e.message
      : 'empty error message';
  }

  override get name(): string {
    return 'MongoError';
  }

  /** Legacy name for server error responses */
  get errmsg(): string {
    return this.message;
  }

  /**
   * Checks the error to see if it has an error label
   *
   * @param label - The error label to check for
   * @returns returns true if the error has the provided error label
   */
  hasErrorLabel(label: string): boolean {
    return this.errorLabelSet.has(label);
  }

  addErrorLabel(label: string): void {
    this.errorLabelSet.add(label);
  }
}

/**
 * An error coming from the mongo server
 *
 * @public
 * @category Error
 */
export class MongoServerError extends MongoError {
  /** Raw error result document returned by server. */
  errorResponse: ErrorDescription;
  codeName?: string;
  writeConcernError?: Document;
  errInfo?: Document;
  ok?: number;
  [key: string]: any;

  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: ErrorDescription) {
    super(message.message || message.errmsg || message.$err || 'n/a');

    if (message.errorLabels) {
      for (const label of message.errorLabels) this.addErrorLabel(label);
    }

    this.errorResponse = message;

    for (const name in message) {
      if (
        name !== 'errorLabels' &&
        name !== 'errmsg' &&
        name !== 'message' &&
        name !== 'errorResponse'
      ) {
        this[name] = message[name];
      }
    }
  }

  override get name(): string {
    return 'MongoServerError';
  }
}

/**
 * An error generated by the driver
 *
 * @public
 * @category Error
 */
export class MongoDriverError extends MongoError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string, options?: { cause?: Error }) {
    super(message, options);
  }

  override get name(): string {
    return 'MongoDriverError';
  }
}

/**
 * An error generated when the driver API is used incorrectly
 *
 * @privateRemarks
 * Should **never** be directly instantiated
 *
 * @public
 * @category Error
 */

export class MongoAPIError extends MongoDriverError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string, options?: { cause?: Error }) {
    super(message, options);
  }

  override get name(): string {
    return 'MongoAPIError';
  }
}

/**
 * An error generated when the driver encounters unexpected input
 * or reaches an unexpected/invalid internal state.
 *
 * @privateRemarks
 * Should **never** be directly instantiated.
 *
 * @public
 * @category Error
 */
export class MongoRuntimeError extends MongoDriverError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string, options?: { cause?: Error }) {
    super(message, options);
  }

  override get name(): string {
    return 'MongoRuntimeError';
  }
}

/**
 * An error generated when a primary server is marked stale, never directly thrown
 *
 * @public
 * @category Error
 */
export class MongoStalePrimaryError extends MongoRuntimeError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string, options?: { cause?: Error }) {
    super(message, options);
  }

  override get name(): string {
    return 'MongoStalePrimaryError';
  }
}

/**
 * An error generated when a batch command is re-executed after one of the commands in the batch
 * has failed
 *
 * @public
 * @category Error
 */
export class MongoBatchReExecutionError extends MongoAPIError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message = 'This batch has already been executed, create new batch to execute') {
    super(message);
  }

  override get name(): string {
    return 'MongoBatchReExecutionError';
  }
}

/**
 * An error generated when the driver fails to decompress
 * data received from the server.
 *
 * @public
 * @category Error
 */
export class MongoDecompressionError extends MongoRuntimeError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string) {
    super(message);
  }

  override get name(): string {
    return 'MongoDecompressionError';
  }
}

/**
 * An error thrown when the user attempts to operate on a database or collection through a MongoClient
 * that has not yet successfully called the "connect" method
 *
 * @public
 * @category Error
 */
export class MongoNotConnectedError extends MongoAPIError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string) {
    super(message);
  }

  override get name(): string {
    return 'MongoNotConnectedError';
  }
}

/**
 * An error generated when the user makes a mistake in the usage of transactions.
 * (e.g. attempting to commit a transaction with a readPreference other than primary)
 *
 * @public
 * @category Error
 */
export class MongoTransactionError extends MongoAPIError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string) {
    super(message);
  }

  override get name(): string {
    return 'MongoTransactionError';
  }
}

/**
 * An error generated when the user attempts to operate
 * on a session that has expired or has been closed.
 *
 * @public
 * @category Error
 */
export class MongoExpiredSessionError extends MongoAPIError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message = 'Cannot use a session that has ended') {
    super(message);
  }

  override get name(): string {
    return 'MongoExpiredSessionError';
  }
}

/**
 * A error generated when the user attempts to authenticate
 * via Kerberos, but fails to connect to the Kerberos client.
 *
 * @public
 * @category Error
 */
export class MongoKerberosError extends MongoRuntimeError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string) {
    super(message);
  }

  override get name(): string {
    return 'MongoKerberosError';
  }
}

/**
 * A error generated when the user attempts to authenticate
 * via AWS, but fails
 *
 * @public
 * @category Error
 */
export class MongoAWSError extends MongoRuntimeError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string, options?: { cause?: Error }) {
    super(message, options);
  }

  override get name(): string {
    return 'MongoAWSError';
  }
}

/**
 * A error generated when the user attempts to authenticate
 * via OIDC callbacks, but fails.
 *
 * @public
 * @category Error
 */
export class MongoOIDCError extends MongoRuntimeError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string) {
    super(message);
  }

  override get name(): string {
    return 'MongoOIDCError';
  }
}

/**
 * A error generated when the user attempts to authenticate
 * via Azure, but fails.
 *
 * @public
 * @category Error
 */
export class MongoAzureError extends MongoOIDCError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string) {
    super(message);
  }

  override get name(): string {
    return 'MongoAzureError';
  }
}

/**
 * A error generated when the user attempts to authenticate
 * via GCP, but fails.
 *
 * @public
 * @category Error
 */
export class MongoGCPError extends MongoOIDCError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string) {
    super(message);
  }

  override get name(): string {
    return 'MongoGCPError';
  }
}

/**
 * An error indicating that an error occurred when executing the bulk write.
 *
 * @public
 * @category Error
 */
export class MongoClientBulkWriteError extends MongoServerError {
  /**
   * Write concern errors that occurred while executing the bulk write. This list may have
   * multiple items if more than one server command was required to execute the bulk write.
   */
  writeConcernErrors: Document[];
  /**
   * Errors that occurred during the execution of individual write operations. This map will
   * contain at most one entry if the bulk write was ordered.
   */
  writeErrors: Map<number, ClientBulkWriteError>;
  /**
   * The results of any successful operations that were performed before the error was
   * encountered.
   */
  partialResult?: ClientBulkWriteResult;

  /**
   * Initialize the client bulk write error.
   * @param message - The error message.
   */
  constructor(message: ErrorDescription) {
    super(message);
    this.writeConcernErrors = [];
    this.writeErrors = new Map();
  }

  override get name(): string {
    return 'MongoClientBulkWriteError';
  }
}

/**
 * An error indicating that an error occurred when processing bulk write results.
 *
 * @public
 * @category Error
 */
export class MongoClientBulkWriteCursorError extends MongoRuntimeError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string) {
    super(message);
  }

  override get name(): string {
    return 'MongoClientBulkWriteCursorError';
  }
}

/**
 * An error indicating that an error occurred on the client when executing a client bulk write.
 *
 * @public
 * @category Error
 */
export class MongoClientBulkWriteExecutionError extends MongoRuntimeError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string) {
    super(message);
  }

  override get name(): string {
    return 'MongoClientBulkWriteExecutionError';
  }
}

/**
 * An error generated when a ChangeStream operation fails to execute.
 *
 * @public
 * @category Error
 */
export class MongoChangeStreamError extends MongoRuntimeError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string) {
    super(message);
  }

  override get name(): string {
    return 'MongoChangeStreamError';
  }
}

/**
 * An error thrown when the user calls a function or method not supported on a tailable cursor
 *
 * @public
 * @category Error
 */
export class MongoTailableCursorError extends MongoAPIError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message = 'Tailable cursor does not support this operation') {
    super(message);
  }

  override get name(): string {
    return 'MongoTailableCursorError';
  }
}

/** An error generated when a GridFSStream operation fails to execute.
 *
 * @public
 * @category Error
 */
export class MongoGridFSStreamError extends MongoRuntimeError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string) {
    super(message);
  }

  override get name(): string {
    return 'MongoGridFSStreamError';
  }
}

/**
 * An error generated when a malformed or invalid chunk is
 * encountered when reading from a GridFSStream.
 *
 * @public
 * @category Error
 */
export class MongoGridFSChunkError extends MongoRuntimeError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string) {
    super(message);
  }

  override get name(): string {
    return 'MongoGridFSChunkError';
  }
}

/**
 * An error generated when a **parsable** unexpected response comes from the server.
 * This is generally an error where the driver in a state expecting a certain behavior to occur in
 * the next message from MongoDB but it receives something else.
 * This error **does not** represent an issue with wire message formatting.
 *
 * #### Example
 * When an operation fails, it is the driver's job to retry it. It must perform serverSelection
 * again to make sure that it attempts the operation against a server in a good state. If server
 * selection returns a server that does not support retryable operations, this error is used.
 * This scenario is unlikely as retryable support would also have been determined on the first attempt
 * but it is possible the state change could report a selectable server that does not support retries.
 *
 * @public
 * @category Error
 */
export class MongoUnexpectedServerResponseError extends MongoRuntimeError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string, options?: { cause?: Error }) {
    super(message, options);
  }

  override get name(): string {
    return 'MongoUnexpectedServerResponseError';
  }
}

/**
 * @public
 * @category Error
 *
 * The `MongoOperationTimeoutError` class represents an error that occurs when an operation could not be completed within the specified `timeoutMS`.
 * It is generated by the driver in support of the "client side operation timeout" feature so inherits from `MongoDriverError`.
 * When `timeoutMS` is enabled `MongoServerError`s relating to `MaxTimeExpired` errors will be converted to `MongoOperationTimeoutError`
 *
 * @example
 * ```ts
 * try {
 *   await blogs.insertOne(blogPost, { timeoutMS: 60_000 })
 * } catch (error) {
 *   if (error instanceof MongoOperationTimeoutError) {
 *     console.log(`Oh no! writer's block!`, error);
 *   }
 * }
 * ```
 */
export class MongoOperationTimeoutError extends MongoDriverError {
  override get name(): string {
    return 'MongoOperationTimeoutError';
  }
}

/**
 * An error thrown when the user attempts to add options to a cursor that has already been
 * initialized
 *
 * @public
 * @category Error
 */
export class MongoCursorInUseError extends MongoAPIError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message = 'Cursor is already initialized') {
    super(message);
  }

  override get name(): string {
    return 'MongoCursorInUseError';
  }
}

/**
 * An error generated when an attempt is made to operate
 * on a closed/closing server.
 *
 * @public
 * @category Error
 */
export class MongoServerClosedError extends MongoAPIError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message = 'Server is closed') {
    super(message);
  }

  override get name(): string {
    return 'MongoServerClosedError';
  }
}

/**
 * An error thrown when an attempt is made to read from a cursor that has been exhausted
 *
 * @public
 * @category Error
 */
export class MongoCursorExhaustedError extends MongoAPIError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message?: string) {
    super(message || 'Cursor is exhausted');
  }

  override get name(): string {
    return 'MongoCursorExhaustedError';
  }
}

/**
 * An error generated when an attempt is made to operate on a
 * dropped, or otherwise unavailable, database.
 *
 * @public
 * @category Error
 */
export class MongoTopologyClosedError extends MongoAPIError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message = 'Topology is closed') {
    super(message);
  }

  override get name(): string {
    return 'MongoTopologyClosedError';
  }
}

/**
 * An error generated when the MongoClient is closed and async
 * operations are interrupted.
 *
 * @public
 * @category Error
 */
export class MongoClientClosedError extends MongoAPIError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor() {
    super('Operation interrupted because client was closed');
  }

  override get name(): string {
    return 'MongoClientClosedError';
  }
}

/** @public */
export interface MongoNetworkErrorOptions {
  /** Indicates the timeout happened before a connection handshake completed */
  beforeHandshake?: boolean;
  cause?: Error;
}

/**
 * An error indicating an issue with the network, including TCP errors and timeouts.
 * @public
 * @category Error
 */
export class MongoNetworkError extends MongoError {
  /** @internal */
  public readonly beforeHandshake: boolean;

  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string, options?: MongoNetworkErrorOptions) {
    super(message, { cause: options?.cause });
    this.beforeHandshake = !!options?.beforeHandshake;
  }

  override get name(): string {
    return 'MongoNetworkError';
  }
}

/**
 * An error indicating a network timeout occurred
 * @public
 * @category Error
 *
 * @privateRemarks
 * mongodb-client-encryption has a dependency on this error with an instanceof check
 */
export class MongoNetworkTimeoutError extends MongoNetworkError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string, options?: MongoNetworkErrorOptions) {
    super(message, options);
  }

  override get name(): string {
    return 'MongoNetworkTimeoutError';
  }
}

/**
 * An error used when attempting to parse a value (like a connection string)
 * @public
 * @category Error
 */
export class MongoParseError extends MongoDriverError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string) {
    super(message);
  }

  override get name(): string {
    return 'MongoParseError';
  }
}

/**
 * An error generated when the user supplies malformed or unexpected arguments
 * or when a required argument or field is not provided.
 *
 *
 * @public
 * @category Error
 */
export class MongoInvalidArgumentError extends MongoAPIError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string, options?: { cause?: Error }) {
    super(message, options);
  }

  override get name(): string {
    return 'MongoInvalidArgumentError';
  }
}

/**
 * An error generated when a feature that is not enabled or allowed for the current server
 * configuration is used
 *
 *
 * @public
 * @category Error
 */
export class MongoCompatibilityError extends MongoAPIError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string) {
    super(message);
  }

  override get name(): string {
    return 'MongoCompatibilityError';
  }
}

/**
 * An error generated when the user fails to provide authentication credentials before attempting
 * to connect to a mongo server instance.
 *
 *
 * @public
 * @category Error
 */
export class MongoMissingCredentialsError extends MongoAPIError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string) {
    super(message);
  }

  override get name(): string {
    return 'MongoMissingCredentialsError';
  }
}

/**
 * An error generated when a required module or dependency is not present in the local environment
 *
 * @public
 * @category Error
 */
export class MongoMissingDependencyError extends MongoAPIError {
  dependencyName: string;

  /** @remarks This property is assigned in the `Error` constructor. */
  declare cause: Error;

  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string, options: { cause: Error; dependencyName: string }) {
    super(message, options);
    this.dependencyName = options.dependencyName;
  }

  override get name(): string {
    return 'MongoMissingDependencyError';
  }
}
/**
 * An error signifying a general system issue
 * @public
 * @category Error
 */
export class MongoSystemError extends MongoError {
  /** An optional reason context, such as an error saved during flow of monitoring and selecting servers */
  reason?: TopologyDescription;

  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string, reason: TopologyDescription) {
    if (reason && reason.error) {
      super(MongoError.buildErrorMessage(reason.error.message || reason.error), {
        cause: reason.error
      });
    } else {
      super(message);
    }

    if (reason) {
      this.reason = reason;
    }

    this.code = reason.error?.code;
  }

  override get name(): string {
    return 'MongoSystemError';
  }
}

/**
 * An error signifying a client-side server selection error
 * @public
 * @category Error
 */
export class MongoServerSelectionError extends MongoSystemError {
  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(message: string, reason: TopologyDescription) {
    super(message, reason);
  }

  override get name(): string {
    return 'MongoServerSelectionError';
  }
}

/**
 * The type of the result property of MongoWriteConcernError
 * @public
 */
export interface WriteConcernErrorResult {
  writeConcernError: {
    code: number;
    errmsg: string;
    codeName?: string;
    errInfo?: Document;
  };
  ok: number;
  code?: number;
  errorLabels?: string[];
  [x: string | number]: unknown;
}

/**
 * An error thrown when the server reports a writeConcernError
 * @public
 * @category Error
 */
export class MongoWriteConcernError extends MongoServerError {
  /** The result document */
  result: Document;

  /**
   * **Do not use this constructor!**
   *
   * Meant for internal use only.
   *
   * @remarks
   * This class is only meant to be constructed within the driver. This constructor is
   * not subject to semantic versioning compatibility guarantees and may change at any time.
   *
   * @public
   **/
  constructor(result: WriteConcernErrorResult) {
    super({ ...result.writeConcernError, ...result });
    this.errInfo = result.writeConcernError.errInfo;
    this.result = result;
  }

  override get name(): string {
    return 'MongoWriteConcernError';
  }
}

// https://github.com/mongodb/specifications/blob/master/source/retryable-reads/retryable-reads.md#retryable-error
const RETRYABLE_READ_ERROR_CODES = new Set<number>([
  MONGODB_ERROR_CODES.HostUnreachable,
  MONGODB_ERROR_CODES.HostNotFound,
  MONGODB_ERROR_CODES.NetworkTimeout,
  MONGODB_ERROR_CODES.ShutdownInProgress,
  MONGODB_ERROR_CODES.PrimarySteppedDown,
  MONGODB_ERROR_CODES.SocketException,
  MONGODB_ERROR_CODES.NotWritablePrimary,
  MONGODB_ERROR_CODES.InterruptedAtShutdown,
  MONGODB_ERROR_CODES.InterruptedDueToReplStateChange,
  MONGODB_ERROR_CODES.NotPrimaryNoSecondaryOk,
  MONGODB_ERROR_CODES.NotPrimaryOrSecondary,
  MONGODB_ERROR_CODES.ExceededTimeLimit,
  MONGODB_ERROR_CODES.ReadConcernMajorityNotAvailableYet
]);

// see: https://github.com/mongodb/specifications/blob/master/source/retryable-writes/retryable-writes.md#terms
const RETRYABLE_WRITE_ERROR_CODES = RETRYABLE_READ_ERROR_CODES;

export function needsRetryableWriteLabel(
  error: Error,
  maxWireVersion: number,
  serverType: ServerType
): boolean {
  // pre-4.4 server, then the driver adds an error label for every valid case
  // execute operation will only inspect the label, code/message logic is handled here
  if (error instanceof MongoNetworkError) {
    return true;
  }

  if (error instanceof MongoError) {
    if (
      (maxWireVersion >= 9 || isRetryableWriteError(error)) &&
      !error.hasErrorLabel(MongoErrorLabel.HandshakeError)
    ) {
      // If we already have the error label no need to add it again. 4.4+ servers add the label.
      // In the case where we have a handshake error, need to fall down to the logic checking
      // the codes.
      return false;
    }
  }

  if (error instanceof MongoWriteConcernError) {
    if (serverType === 'Mongos' && maxWireVersion < 9) {
      // use original top-level code from server response
      return RETRYABLE_WRITE_ERROR_CODES.has(error.result.code ?? 0);
    }
    const code = error.result.writeConcernError.code ?? Number(error.code);
    return RETRYABLE_WRITE_ERROR_CODES.has(Number.isNaN(code) ? 0 : code);
  }

  if (error instanceof MongoError) {
    return RETRYABLE_WRITE_ERROR_CODES.has(Number(error.code));
  }

  const isNotWritablePrimaryError = LEGACY_NOT_WRITABLE_PRIMARY_ERROR_MESSAGE.test(error.message);
  if (isNotWritablePrimaryError) {
    return true;
  }

  const isNodeIsRecoveringError = NODE_IS_RECOVERING_ERROR_MESSAGE.test(error.message);
  if (isNodeIsRecoveringError) {
    return true;
  }

  return false;
}

export function isRetryableWriteError(error: MongoError): boolean {
  return (
    error.hasErrorLabel(MongoErrorLabel.RetryableWriteError) ||
    error.hasErrorLabel(MongoErrorLabel.PoolRequstedRetry)
  );
}

/** Determines whether an error is something the driver should attempt to retry */
export function isRetryableReadError(error: MongoError): boolean {
  const hasRetryableErrorCode =
    typeof error.code === 'number' ? RETRYABLE_READ_ERROR_CODES.has(error.code) : false;
  if (hasRetryableErrorCode) {
    return true;
  }

  if (error instanceof MongoNetworkError) {
    return true;
  }

  const isNotWritablePrimaryError = LEGACY_NOT_WRITABLE_PRIMARY_ERROR_MESSAGE.test(error.message);
  if (isNotWritablePrimaryError) {
    return true;
  }

  const isNodeIsRecoveringError = NODE_IS_RECOVERING_ERROR_MESSAGE.test(error.message);
  if (isNodeIsRecoveringError) {
    return true;
  }

  return false;
}

const SDAM_RECOVERING_CODES = new Set<number>([
  MONGODB_ERROR_CODES.ShutdownInProgress,
  MONGODB_ERROR_CODES.PrimarySteppedDown,
  MONGODB_ERROR_CODES.InterruptedAtShutdown,
  MONGODB_ERROR_CODES.InterruptedDueToReplStateChange,
  MONGODB_ERROR_CODES.NotPrimaryOrSecondary
]);

const SDAM_NOT_PRIMARY_CODES = new Set<number>([
  MONGODB_ERROR_CODES.NotWritablePrimary,
  MONGODB_ERROR_CODES.NotPrimaryNoSecondaryOk,
  MONGODB_ERROR_CODES.LegacyNotPrimary
]);

const SDAM_NODE_SHUTTING_DOWN_ERROR_CODES = new Set<number>([
  MONGODB_ERROR_CODES.InterruptedAtShutdown,
  MONGODB_ERROR_CODES.ShutdownInProgress
]);

function isRecoveringError(err: MongoError) {
  if (typeof err.code === 'number') {
    // If any error code exists, we ignore the error.message
    return SDAM_RECOVERING_CODES.has(err.code);
  }

  return (
    LEGACY_NOT_PRIMARY_OR_SECONDARY_ERROR_MESSAGE.test(err.message) ||
    NODE_IS_RECOVERING_ERROR_MESSAGE.test(err.message)
  );
}

function isNotWritablePrimaryError(err: MongoError) {
  if (typeof err.code === 'number') {
    // If any error code exists, we ignore the error.message
    return SDAM_NOT_PRIMARY_CODES.has(err.code);
  }

  if (isRecoveringError(err)) {
    return false;
  }

  return LEGACY_NOT_WRITABLE_PRIMARY_ERROR_MESSAGE.test(err.message);
}

export function isNodeShuttingDownError(err: MongoError): boolean {
  return !!(typeof err.code === 'number' && SDAM_NODE_SHUTTING_DOWN_ERROR_CODES.has(err.code));
}

/**
 * Determines whether SDAM can recover from a given error. If it cannot
 * then the pool will be cleared, and server state will completely reset
 * locally.
 *
 * @see https://github.com/mongodb/specifications/blob/master/source/server-discovery-and-monitoring/server-discovery-and-monitoring.md#not-writable-primary-and-node-is-recovering
 */
export function isSDAMUnrecoverableError(error: MongoError): boolean {
  // NOTE: null check is here for a strictly pre-CMAP world, a timeout or
  //       close event are considered unrecoverable
  if (error instanceof MongoParseError || error == null) {
    return true;
  }

  return isRecoveringError(error) || isNotWritablePrimaryError(error);
}

export function isNetworkTimeoutError(err: MongoError): err is MongoNetworkError {
  return !!(err instanceof MongoNetworkError && err.message.match(/timed out/));
}

export function isResumableError(error?: Error, wireVersion?: number): boolean {
  if (error == null || !(error instanceof MongoError)) {
    return false;
  }

  if (error instanceof MongoNetworkError) {
    return true;
  }

  if (error instanceof MongoServerSelectionError) {
    return true;
  }

  if (wireVersion != null && wireVersion >= 9) {
    // DRIVERS-1308: For 4.4 drivers running against 4.4 servers, drivers will add a special case to treat the CursorNotFound error code as resumable
    if (error.code === MONGODB_ERROR_CODES.CursorNotFound) {
      return true;
    }
    return error.hasErrorLabel(MongoErrorLabel.ResumableChangeStreamError);
  }

  if (typeof error.code === 'number') {
    return GET_MORE_RESUMABLE_CODES.has(error.code);
  }

  return false;
}
