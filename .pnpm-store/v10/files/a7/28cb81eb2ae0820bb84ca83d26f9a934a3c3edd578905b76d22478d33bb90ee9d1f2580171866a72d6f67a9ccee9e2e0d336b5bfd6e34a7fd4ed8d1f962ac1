import { type Readable, Transform, type TransformCallback } from 'stream';
import { clearTimeout, setTimeout } from 'timers';

import {
  type BSONSerializeOptions,
  deserialize,
  type DeserializeOptions,
  type Document,
  type ObjectId
} from '../bson';
import { type AutoEncrypter } from '../client-side-encryption/auto_encrypter';
import {
  CLOSE,
  CLUSTER_TIME_RECEIVED,
  COMMAND_FAILED,
  COMMAND_STARTED,
  COMMAND_SUCCEEDED,
  kDecorateResult,
  PINNED,
  UNPINNED
} from '../constants';
import {
  MongoCompatibilityError,
  MONGODB_ERROR_CODES,
  MongoMissingDependencyError,
  MongoNetworkError,
  MongoNetworkTimeoutError,
  MongoOperationTimeoutError,
  MongoParseError,
  MongoRuntimeError,
  MongoServerError,
  MongoUnexpectedServerResponseError
} from '../error';
import type { ServerApi, SupportedNodeConnectionOptions } from '../mongo_client';
import { type MongoClientAuthProviders } from '../mongo_client_auth_providers';
import { MongoLoggableComponent, type MongoLogger, SeverityLevel } from '../mongo_logger';
import { type Abortable, type CancellationToken, TypedEventEmitter } from '../mongo_types';
import { ReadPreference, type ReadPreferenceLike } from '../read_preference';
import { ServerType } from '../sdam/common';
import { applySession, type ClientSession, updateSessionFromResponse } from '../sessions';
import { type TimeoutContext, TimeoutError } from '../timeout';
import {
  BufferPool,
  calculateDurationInMs,
  type Callback,
  decorateDecryptionResult,
  HostAddress,
  maxWireVersion,
  type MongoDBNamespace,
  noop,
  now,
  once,
  squashError,
  uuidV4
} from '../utils';
import type { WriteConcern } from '../write_concern';
import type { AuthContext } from './auth/auth_provider';
import type { MongoCredentials } from './auth/mongo_credentials';
import {
  CommandFailedEvent,
  CommandStartedEvent,
  CommandSucceededEvent
} from './command_monitoring_events';
import {
  OpCompressedRequest,
  OpMsgRequest,
  type OpMsgResponse,
  OpQueryRequest,
  type OpReply,
  type WriteProtocolMessageType
} from './commands';
import type { Stream } from './connect';
import type { ClientMetadata } from './handshake/client_metadata';
import { StreamDescription, type StreamDescriptionOptions } from './stream_description';
import { type CompressorName, decompressResponse } from './wire_protocol/compression';
import { onData } from './wire_protocol/on_data';
import {
  CursorResponse,
  MongoDBResponse,
  type MongoDBResponseConstructor
} from './wire_protocol/responses';
import { getReadPreference, isSharded } from './wire_protocol/shared';

/** @internal */
export interface CommandOptions extends BSONSerializeOptions {
  secondaryOk?: boolean;
  /** Specify read preference if command supports it */
  readPreference?: ReadPreferenceLike;
  monitoring?: boolean;
  socketTimeoutMS?: number;
  /** Session to use for the operation */
  session?: ClientSession;
  documentsReturnedIn?: string;
  /** @deprecated Will be removed in the next major version. */
  noResponse?: boolean;
  omitMaxTimeMS?: boolean;

  // TODO(NODE-2802): Currently the CommandOptions take a property willRetryWrite which is a hint
  // from executeOperation that the txnNum should be applied to this command.
  // Applying a session to a command should happen as part of command construction,
  // most likely in the CommandOperation#executeCommand method, where we have access to
  // the details we need to determine if a txnNum should also be applied.
  willRetryWrite?: boolean;

  writeConcern?: WriteConcern;

  directConnection?: boolean;

  /** @internal */
  timeoutContext?: TimeoutContext;
}

/** @public */
export interface ProxyOptions {
  proxyHost?: string;
  proxyPort?: number;
  proxyUsername?: string;
  proxyPassword?: string;
}

/** @public */
export interface ConnectionOptions
  extends SupportedNodeConnectionOptions,
    StreamDescriptionOptions,
    ProxyOptions {
  // Internal creation info
  id: number | '<monitor>';
  generation: number;
  hostAddress: HostAddress;
  /** @internal */
  autoEncrypter?: AutoEncrypter;
  serverApi?: ServerApi;
  monitorCommands: boolean;
  /** @internal */
  connectionType?: any;
  credentials?: MongoCredentials;
  /** @internal */
  authProviders: MongoClientAuthProviders;
  connectTimeoutMS?: number;
  tls: boolean;
  noDelay?: boolean;
  socketTimeoutMS?: number;
  /** @deprecated Will be removed in the next major version */
  cancellationToken?: CancellationToken;
  metadata: ClientMetadata;
  /** @internal */
  extendedMetadata: Promise<Document>;
  /** @internal */
  mongoLogger?: MongoLogger | undefined;
}

/** @public */
export type ConnectionEvents = {
  commandStarted(event: CommandStartedEvent): void;
  commandSucceeded(event: CommandSucceededEvent): void;
  commandFailed(event: CommandFailedEvent): void;
  clusterTimeReceived(clusterTime: Document): void;
  close(): void;
  pinned(pinType: string): void;
  unpinned(pinType: string): void;
};

/** @internal */
export function hasSessionSupport(conn: Connection): boolean {
  const description = conn.description;
  return description.logicalSessionTimeoutMinutes != null;
}

function streamIdentifier(stream: Stream, options: ConnectionOptions): string {
  if (options.proxyHost) {
    // If proxy options are specified, the properties of `stream` itself
    // will not accurately reflect what endpoint this is connected to.
    return options.hostAddress.toString();
  }

  const { remoteAddress, remotePort } = stream;
  if (typeof remoteAddress === 'string' && typeof remotePort === 'number') {
    return HostAddress.fromHostPort(remoteAddress, remotePort).toString();
  }

  return uuidV4().toString('hex');
}

/** @internal */
export class Connection extends TypedEventEmitter<ConnectionEvents> {
  public id: number | '<monitor>';
  public address: string;
  public lastHelloMS = -1;
  public serverApi?: ServerApi;
  public helloOk = false;
  public authContext?: AuthContext;
  public delayedTimeoutId: NodeJS.Timeout | null = null;
  public generation: number;
  public accessToken?: string;
  public readonly description: Readonly<StreamDescription>;
  /**
   * Represents if the connection has been established:
   *  - TCP handshake
   *  - TLS negotiated
   *  - mongodb handshake (saslStart, saslContinue), includes authentication
   *
   * Once connection is established, command logging can log events (if enabled)
   */
  public established: boolean;
  /** Indicates that the connection (including underlying TCP socket) has been closed. */
  public closed = false;

  private lastUseTime: number;
  private clusterTime: Document | null = null;
  private error: Error | null = null;
  private dataEvents: AsyncGenerator<Buffer, void, void> | null = null;

  private readonly socketTimeoutMS: number;
  private readonly monitorCommands: boolean;
  private readonly socket: Stream;
  private readonly messageStream: Readable;

  /** @event */
  static readonly COMMAND_STARTED = COMMAND_STARTED;
  /** @event */
  static readonly COMMAND_SUCCEEDED = COMMAND_SUCCEEDED;
  /** @event */
  static readonly COMMAND_FAILED = COMMAND_FAILED;
  /** @event */
  static readonly CLUSTER_TIME_RECEIVED = CLUSTER_TIME_RECEIVED;
  /** @event */
  static readonly CLOSE = CLOSE;
  /** @event */
  static readonly PINNED = PINNED;
  /** @event */
  static readonly UNPINNED = UNPINNED;

  constructor(stream: Stream, options: ConnectionOptions) {
    super();
    this.on('error', noop);

    this.socket = stream;
    this.id = options.id;
    this.address = streamIdentifier(stream, options);
    this.socketTimeoutMS = options.socketTimeoutMS ?? 0;
    this.monitorCommands = options.monitorCommands;
    this.serverApi = options.serverApi;
    this.mongoLogger = options.mongoLogger;
    this.established = false;

    this.description = new StreamDescription(this.address, options);
    this.generation = options.generation;
    this.lastUseTime = now();

    this.messageStream = this.socket
      .on('error', this.onSocketError.bind(this))
      .pipe(new SizedMessageTransform({ connection: this }))
      .on('error', this.onTransformError.bind(this));
    this.socket.on('close', this.onClose.bind(this));
    this.socket.on('timeout', this.onTimeout.bind(this));

    this.messageStream.pause();
  }

  public get hello() {
    return this.description.hello;
  }

  // the `connect` method stores the result of the handshake hello on the connection
  public set hello(response: Document | null) {
    this.description.receiveResponse(response);
    Object.freeze(this.description);
  }

  public get serviceId(): ObjectId | undefined {
    return this.hello?.serviceId;
  }

  public get loadBalanced(): boolean {
    return this.description.loadBalanced;
  }

  public get idleTime(): number {
    return calculateDurationInMs(this.lastUseTime);
  }

  private get hasSessionSupport(): boolean {
    return this.description.logicalSessionTimeoutMinutes != null;
  }

  private get supportsOpMsg(): boolean {
    return (
      this.description != null &&
      // TODO(NODE-6672,NODE-6287): This guard is primarily for maxWireVersion = 0
      maxWireVersion(this) >= 6 &&
      !this.description.__nodejs_mock_server__
    );
  }

  private get shouldEmitAndLogCommand(): boolean {
    return (
      (this.monitorCommands ||
        (this.established &&
          !this.authContext?.reauthenticating &&
          this.mongoLogger?.willLog(MongoLoggableComponent.COMMAND, SeverityLevel.DEBUG))) ??
      false
    );
  }

  public markAvailable(): void {
    this.lastUseTime = now();
  }

  private onSocketError(cause: Error) {
    this.onError(new MongoNetworkError(cause.message, { cause }));
  }

  private onTransformError(error: Error) {
    this.onError(error);
  }

  public onError(error: Error) {
    this.cleanup(error);
  }

  private onClose() {
    const message = `connection ${this.id} to ${this.address} closed`;
    this.cleanup(new MongoNetworkError(message));
  }

  private onTimeout() {
    this.delayedTimeoutId = setTimeout(() => {
      const message = `connection ${this.id} to ${this.address} timed out`;
      const beforeHandshake = this.hello == null;
      this.cleanup(new MongoNetworkTimeoutError(message, { beforeHandshake }));
    }, 1).unref(); // No need for this timer to hold the event loop open
  }

  public destroy(): void {
    if (this.closed) {
      return;
    }

    // load balanced mode requires that these listeners remain on the connection
    // after cleanup on timeouts, errors or close so we remove them before calling
    // cleanup.
    this.removeAllListeners(Connection.PINNED);
    this.removeAllListeners(Connection.UNPINNED);
    const message = `connection ${this.id} to ${this.address} closed`;
    this.cleanup(new MongoNetworkError(message));
  }

  /**
   * A method that cleans up the connection.  When `force` is true, this method
   * forcibly destroys the socket.
   *
   * If an error is provided, any in-flight operations will be closed with the error.
   *
   * This method does nothing if the connection is already closed.
   */
  private cleanup(error: Error): void {
    if (this.closed) {
      return;
    }

    this.socket.destroy();
    this.error = error;

    this.dataEvents?.throw(error).then(undefined, squashError);
    this.closed = true;
    this.emit(Connection.CLOSE);
  }

  private prepareCommand(db: string, command: Document, options: CommandOptions) {
    let cmd = { ...command };

    const readPreference = getReadPreference(options);
    const session = options?.session;

    let clusterTime = this.clusterTime;

    if (this.serverApi) {
      const { version, strict, deprecationErrors } = this.serverApi;
      cmd.apiVersion = version;
      if (strict != null) cmd.apiStrict = strict;
      if (deprecationErrors != null) cmd.apiDeprecationErrors = deprecationErrors;
    }

    if (this.hasSessionSupport && session) {
      if (
        session.clusterTime &&
        clusterTime &&
        session.clusterTime.clusterTime.greaterThan(clusterTime.clusterTime)
      ) {
        clusterTime = session.clusterTime;
      }

      const sessionError = applySession(session, cmd, options);
      if (sessionError) throw sessionError;
    } else if (session?.explicit) {
      throw new MongoCompatibilityError('Current topology does not support sessions');
    }

    // if we have a known cluster time, gossip it
    if (clusterTime) {
      cmd.$clusterTime = clusterTime;
    }

    // For standalone, drivers MUST NOT set $readPreference.
    if (this.description.type !== ServerType.Standalone) {
      if (
        !isSharded(this) &&
        !this.description.loadBalanced &&
        this.supportsOpMsg &&
        options.directConnection === true &&
        readPreference?.mode === 'primary'
      ) {
        // For mongos and load balancers with 'primary' mode, drivers MUST NOT set $readPreference.
        // For all other types with a direct connection, if the read preference is 'primary'
        // (driver sets 'primary' as default if no read preference is configured),
        // the $readPreference MUST be set to 'primaryPreferred'
        // to ensure that any server type can handle the request.
        cmd.$readPreference = ReadPreference.primaryPreferred.toJSON();
      } else if (isSharded(this) && !this.supportsOpMsg && readPreference?.mode !== 'primary') {
        // When sending a read operation via OP_QUERY and the $readPreference modifier,
        // the query MUST be provided using the $query modifier.
        cmd = {
          $query: cmd,
          $readPreference: readPreference.toJSON()
        };
      } else if (readPreference?.mode !== 'primary') {
        // For mode 'primary', drivers MUST NOT set $readPreference.
        // For all other read preference modes (i.e. 'secondary', 'primaryPreferred', ...),
        // drivers MUST set $readPreference
        cmd.$readPreference = readPreference.toJSON();
      }
    }

    const commandOptions = {
      numberToSkip: 0,
      numberToReturn: -1,
      checkKeys: false,
      // This value is not overridable
      secondaryOk: readPreference.secondaryOk(),
      ...options
    };

    options.timeoutContext?.addMaxTimeMSToCommand(cmd, options);

    const message = this.supportsOpMsg
      ? new OpMsgRequest(db, cmd, commandOptions)
      : new OpQueryRequest(db, cmd, commandOptions);

    return message;
  }

  private async *sendWire(
    message: WriteProtocolMessageType,
    options: CommandOptions & Abortable,
    responseType?: MongoDBResponseConstructor
  ): AsyncGenerator<MongoDBResponse> {
    this.throwIfAborted();

    const timeout =
      options.socketTimeoutMS ??
      options?.timeoutContext?.getSocketTimeoutMS() ??
      this.socketTimeoutMS;
    this.socket.setTimeout(timeout);

    try {
      await this.writeCommand(message, {
        agreedCompressor: this.description.compressor ?? 'none',
        zlibCompressionLevel: this.description.zlibCompressionLevel,
        timeoutContext: options.timeoutContext,
        signal: options.signal
      });

      if (options.noResponse || message.moreToCome) {
        yield MongoDBResponse.empty;
        return;
      }

      this.throwIfAborted();

      if (
        options.timeoutContext?.csotEnabled() &&
        options.timeoutContext.minRoundTripTime != null &&
        options.timeoutContext.remainingTimeMS < options.timeoutContext.minRoundTripTime
      ) {
        throw new MongoOperationTimeoutError(
          'Server roundtrip time is greater than the time remaining'
        );
      }

      for await (const response of this.readMany(options)) {
        this.socket.setTimeout(0);
        const bson = response.parse();

        const document = (responseType ?? MongoDBResponse).make(bson);

        yield document;
        this.throwIfAborted();

        this.socket.setTimeout(timeout);
      }
    } finally {
      this.socket.setTimeout(0);
    }
  }

  private async *sendCommand(
    ns: MongoDBNamespace,
    command: Document,
    options: CommandOptions & Abortable,
    responseType?: MongoDBResponseConstructor
  ) {
    options?.signal?.throwIfAborted();

    const message = this.prepareCommand(ns.db, command, options);
    let started = 0;
    if (this.shouldEmitAndLogCommand) {
      started = now();
      this.emitAndLogCommand(
        this.monitorCommands,
        Connection.COMMAND_STARTED,
        message.databaseName,
        this.established,
        new CommandStartedEvent(this, message, this.description.serverConnectionId)
      );
    }

    // If `documentsReturnedIn` not set or raw is not enabled, use input bson options
    // Otherwise, support raw flag. Raw only works for cursors that hardcode firstBatch/nextBatch fields
    const bsonOptions: DeserializeOptions =
      options.documentsReturnedIn == null || !options.raw
        ? options
        : {
            ...options,
            raw: false,
            fieldsAsRaw: { [options.documentsReturnedIn]: true }
          };

    /** MongoDBResponse instance or subclass */
    let document: MongoDBResponse | undefined = undefined;
    /** Cached result of a toObject call */
    let object: Document | undefined = undefined;
    try {
      this.throwIfAborted();
      for await (document of this.sendWire(message, options, responseType)) {
        object = undefined;
        if (options.session != null) {
          updateSessionFromResponse(options.session, document);
        }

        if (document.$clusterTime) {
          this.clusterTime = document.$clusterTime;
          this.emit(Connection.CLUSTER_TIME_RECEIVED, document.$clusterTime);
        }

        if (document.ok === 0) {
          if (options.timeoutContext?.csotEnabled() && document.isMaxTimeExpiredError) {
            throw new MongoOperationTimeoutError('Server reported a timeout error', {
              cause: new MongoServerError((object ??= document.toObject(bsonOptions)))
            });
          }
          throw new MongoServerError((object ??= document.toObject(bsonOptions)));
        }

        if (this.shouldEmitAndLogCommand) {
          this.emitAndLogCommand(
            this.monitorCommands,
            Connection.COMMAND_SUCCEEDED,
            message.databaseName,
            this.established,
            new CommandSucceededEvent(
              this,
              message,
              options.noResponse
                ? undefined
                : message.moreToCome
                  ? { ok: 1 }
                  : (object ??= document.toObject(bsonOptions)),
              started,
              this.description.serverConnectionId
            )
          );
        }

        if (responseType == null) {
          yield (object ??= document.toObject(bsonOptions));
        } else {
          yield document;
        }

        this.throwIfAborted();
      }
    } catch (error) {
      if (this.shouldEmitAndLogCommand) {
        this.emitAndLogCommand(
          this.monitorCommands,
          Connection.COMMAND_FAILED,
          message.databaseName,
          this.established,
          new CommandFailedEvent(this, message, error, started, this.description.serverConnectionId)
        );
      }
      throw error;
    }
  }

  public async command<T extends MongoDBResponseConstructor>(
    ns: MongoDBNamespace,
    command: Document,
    options: CommandOptions | undefined,
    responseType: T
  ): Promise<InstanceType<T>>;

  public async command<T extends MongoDBResponseConstructor>(
    ns: MongoDBNamespace,
    command: Document,
    options: CommandOptions | undefined,
    responseType: T | undefined
  ): Promise<typeof responseType extends undefined ? Document : InstanceType<T>>;

  public async command(
    ns: MongoDBNamespace,
    command: Document,
    options?: CommandOptions
  ): Promise<Document>;

  public async command(
    ns: MongoDBNamespace,
    command: Document,
    options: CommandOptions & Abortable = {},
    responseType?: MongoDBResponseConstructor
  ): Promise<Document> {
    this.throwIfAborted();
    options.signal?.throwIfAborted();

    for await (const document of this.sendCommand(ns, command, options, responseType)) {
      if (options.timeoutContext?.csotEnabled()) {
        if (MongoDBResponse.is(document)) {
          if (document.isMaxTimeExpiredError) {
            throw new MongoOperationTimeoutError('Server reported a timeout error', {
              cause: new MongoServerError(document.toObject())
            });
          }
        } else {
          if (
            (Array.isArray(document?.writeErrors) &&
              document.writeErrors.some(
                error => error?.code === MONGODB_ERROR_CODES.MaxTimeMSExpired
              )) ||
            document?.writeConcernError?.code === MONGODB_ERROR_CODES.MaxTimeMSExpired
          ) {
            throw new MongoOperationTimeoutError('Server reported a timeout error', {
              cause: new MongoServerError(document)
            });
          }
        }
      }

      return document;
    }
    throw new MongoUnexpectedServerResponseError('Unable to get response from server');
  }

  public exhaustCommand(
    ns: MongoDBNamespace,
    command: Document,
    options: CommandOptions,
    replyListener: Callback
  ) {
    const exhaustLoop = async () => {
      this.throwIfAborted();
      for await (const reply of this.sendCommand(ns, command, options)) {
        replyListener(undefined, reply);
        this.throwIfAborted();
      }
      throw new MongoUnexpectedServerResponseError('Server ended moreToCome unexpectedly');
    };

    exhaustLoop().then(undefined, replyListener);
  }

  private throwIfAborted() {
    if (this.error) throw this.error;
  }

  /**
   * @internal
   *
   * Writes an OP_MSG or OP_QUERY request to the socket, optionally compressing the command. This method
   * waits until the socket's buffer has emptied (the Nodejs socket `drain` event has fired).
   */
  private async writeCommand(
    command: WriteProtocolMessageType,
    options: {
      agreedCompressor?: CompressorName;
      zlibCompressionLevel?: number;
      timeoutContext?: TimeoutContext;
    } & Abortable
  ): Promise<void> {
    const finalCommand =
      options.agreedCompressor === 'none' || !OpCompressedRequest.canCompress(command)
        ? command
        : new OpCompressedRequest(command, {
            agreedCompressor: options.agreedCompressor ?? 'none',
            zlibCompressionLevel: options.zlibCompressionLevel ?? 0
          });

    const buffer = Buffer.concat(await finalCommand.toBin());

    if (options.timeoutContext?.csotEnabled()) {
      if (
        options.timeoutContext.minRoundTripTime != null &&
        options.timeoutContext.remainingTimeMS < options.timeoutContext.minRoundTripTime
      ) {
        throw new MongoOperationTimeoutError(
          'Server roundtrip time is greater than the time remaining'
        );
      }
    }

    if (this.socket.write(buffer)) return;

    const drainEvent = once<void>(this.socket, 'drain', options);
    const timeout = options?.timeoutContext?.timeoutForSocketWrite;
    const drained = timeout ? Promise.race([drainEvent, timeout]) : drainEvent;
    try {
      return await drained;
    } catch (writeError) {
      if (TimeoutError.is(writeError)) {
        const timeoutError = new MongoOperationTimeoutError('Timed out at socket write');
        this.onError(timeoutError);
        throw timeoutError;
      } else if (writeError === options.signal?.reason) {
        this.onError(writeError);
      }
      throw writeError;
    } finally {
      timeout?.clear();
    }
  }

  /**
   * @internal
   *
   * Returns an async generator that yields full wire protocol messages from the underlying socket.  This function
   * yields messages until `moreToCome` is false or not present in a response, or the caller cancels the request
   * by calling `return` on the generator.
   *
   * Note that `for-await` loops call `return` automatically when the loop is exited.
   */
  private async *readMany(
    options: {
      timeoutContext?: TimeoutContext;
    } & Abortable
  ): AsyncGenerator<OpMsgResponse | OpReply> {
    try {
      this.dataEvents = onData(this.messageStream, options);
      this.messageStream.resume();

      for await (const message of this.dataEvents) {
        const response = await decompressResponse(message);
        yield response;

        if (!response.moreToCome) {
          return;
        }
      }
    } catch (readError) {
      if (TimeoutError.is(readError)) {
        const timeoutError = new MongoOperationTimeoutError(
          `Timed out during socket read (${readError.duration}ms)`
        );
        this.dataEvents = null;
        this.onError(timeoutError);
        throw timeoutError;
      } else if (readError === options.signal?.reason) {
        this.onError(readError);
      }
      throw readError;
    } finally {
      this.dataEvents = null;
      this.messageStream.pause();
    }
  }
}

/** @internal */
export class SizedMessageTransform extends Transform {
  bufferPool: BufferPool;
  connection: Connection;

  constructor({ connection }: { connection: Connection }) {
    super({ writableObjectMode: false, readableObjectMode: true });
    this.bufferPool = new BufferPool();
    this.connection = connection;
  }

  override _transform(chunk: Buffer, encoding: unknown, callback: TransformCallback): void {
    if (this.connection.delayedTimeoutId != null) {
      clearTimeout(this.connection.delayedTimeoutId);
      this.connection.delayedTimeoutId = null;
    }

    this.bufferPool.append(chunk);

    while (this.bufferPool.length) {
      // While there are any bytes in the buffer

      // Try to fetch a size from the top 4 bytes
      const sizeOfMessage = this.bufferPool.getInt32();

      if (sizeOfMessage == null) {
        // Not even an int32 worth of data. Stop the loop, we need more chunks.
        break;
      }

      if (sizeOfMessage < 0) {
        // The size in the message has a negative value, this is probably corruption, throw:
        return callback(new MongoParseError(`Message size cannot be negative: ${sizeOfMessage}`));
      }

      if (sizeOfMessage > this.bufferPool.length) {
        // We do not have enough bytes to make a sizeOfMessage chunk
        break;
      }

      // Add a message to the stream
      const message = this.bufferPool.read(sizeOfMessage);

      if (!this.push(message)) {
        // We only subscribe to data events so we should never get backpressure
        // if we do, we do not have the handling for it.
        return callback(
          new MongoRuntimeError(`SizedMessageTransform does not support backpressure`)
        );
      }
    }

    callback();
  }
}

/** @internal */
export class CryptoConnection extends Connection {
  /** @internal */
  autoEncrypter?: AutoEncrypter;

  constructor(stream: Stream, options: ConnectionOptions) {
    super(stream, options);
    this.autoEncrypter = options.autoEncrypter;
  }

  public override async command<T extends MongoDBResponseConstructor>(
    ns: MongoDBNamespace,
    command: Document,
    options: CommandOptions | undefined,
    responseType: T
  ): Promise<InstanceType<T>>;

  public override async command(
    ns: MongoDBNamespace,
    command: Document,
    options?: CommandOptions
  ): Promise<Document>;

  override async command<T extends MongoDBResponseConstructor>(
    ns: MongoDBNamespace,
    cmd: Document,
    options?: CommandOptions,
    responseType?: T
  ): Promise<Document> {
    const { autoEncrypter } = this;
    if (!autoEncrypter) {
      // TODO(NODE-6065): throw a MongoRuntimeError in Node V7
      // @ts-expect-error No cause provided because there is no underlying error.
      throw new MongoMissingDependencyError('No AutoEncrypter available for encryption', {
        dependencyName: 'n/a'
      });
    }

    const serverWireVersion = maxWireVersion(this);
    if (serverWireVersion === 0) {
      // This means the initial handshake hasn't happened yet
      return await super.command<T>(ns, cmd, options, responseType);
    }

    // Save sort or indexKeys based on the command being run
    // the encrypt API serializes our JS objects to BSON to pass to the native code layer
    // and then deserializes the encrypted result, the protocol level components
    // of the command (ex. sort) are then converted to JS objects potentially losing
    // import key order information. These fields are never encrypted so we can save the values
    // from before the encryption and replace them after encryption has been performed
    const sort: Map<string, number> | null = cmd.find || cmd.findAndModify ? cmd.sort : null;
    const indexKeys: Map<string, number>[] | null = cmd.createIndexes
      ? cmd.indexes.map((index: { key: Map<string, number> }) => index.key)
      : null;

    const encrypted = await autoEncrypter.encrypt(ns.toString(), cmd, options);

    // Replace the saved values
    if (sort != null && (cmd.find || cmd.findAndModify)) {
      encrypted.sort = sort;
    }

    if (indexKeys != null && cmd.createIndexes) {
      for (const [offset, index] of indexKeys.entries()) {
        // @ts-expect-error `encrypted` is a generic "command", but we've narrowed for only `createIndexes` commands here
        encrypted.indexes[offset].key = index;
      }
    }

    const encryptedResponse = await super.command(
      ns,
      encrypted,
      options,
      // Eventually we want to require `responseType` which means we would satisfy `T` as the return type.
      // In the meantime, we want encryptedResponse to always be _at least_ a MongoDBResponse if not a more specific subclass
      // So that we can ensure we have access to the on-demand APIs for decorate response
      responseType ?? MongoDBResponse
    );

    const result = await autoEncrypter.decrypt(encryptedResponse.toBytes(), options);

    const decryptedResponse = responseType?.make(result) ?? deserialize(result, options);

    if (autoEncrypter[kDecorateResult]) {
      if (responseType == null) {
        decorateDecryptionResult(decryptedResponse, encryptedResponse.toObject(), true);
      } else if (decryptedResponse instanceof CursorResponse) {
        decryptedResponse.encryptedResponse = encryptedResponse;
      }
    }

    return decryptedResponse;
  }
}
