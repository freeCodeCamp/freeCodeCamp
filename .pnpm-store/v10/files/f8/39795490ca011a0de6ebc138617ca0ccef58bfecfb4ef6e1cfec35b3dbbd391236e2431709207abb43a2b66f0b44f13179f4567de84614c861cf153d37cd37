import { promises as fs } from 'fs';
import type { TcpNetConnectOpts } from 'net';
import type { ConnectionOptions as TLSConnectionOptions, TLSSocketOptions } from 'tls';

import { type ServerCommandOptions, type TimeoutContext } from '.';
import { type BSONSerializeOptions, type Document, resolveBSONOptions } from './bson';
import { ChangeStream, type ChangeStreamDocument, type ChangeStreamOptions } from './change_stream';
import type { AutoEncrypter, AutoEncryptionOptions } from './client-side-encryption/auto_encrypter';
import {
  type AuthMechanismProperties,
  DEFAULT_ALLOWED_HOSTS,
  type MongoCredentials
} from './cmap/auth/mongo_credentials';
import { type TokenCache } from './cmap/auth/mongodb_oidc/token_cache';
import { AuthMechanism } from './cmap/auth/providers';
import type { LEGAL_TCP_SOCKET_OPTIONS, LEGAL_TLS_SOCKET_OPTIONS } from './cmap/connect';
import type { Connection } from './cmap/connection';
import {
  addContainerMetadata,
  type ClientMetadata,
  isDriverInfoEqual,
  makeClientMetadata
} from './cmap/handshake/client_metadata';
import type { CompressorName } from './cmap/wire_protocol/compression';
import { MongoDBResponse } from './cmap/wire_protocol/responses';
import { parseOptions, resolveSRVRecord } from './connection_string';
import { MONGO_CLIENT_EVENTS } from './constants';
import { type AbstractCursor } from './cursor/abstract_cursor';
import { Db, type DbOptions } from './db';
import type { Encrypter } from './encrypter';
import { MongoInvalidArgumentError } from './error';
import { MongoClientAuthProviders } from './mongo_client_auth_providers';
import {
  type LogComponentSeveritiesClientOptions,
  type MongoDBLogWritable,
  MongoLogger,
  type MongoLoggerOptions,
  SeverityLevel
} from './mongo_logger';
import { TypedEventEmitter } from './mongo_types';
import {
  type ClientBulkWriteModel,
  type ClientBulkWriteOptions,
  type ClientBulkWriteResult
} from './operations/client_bulk_write/common';
import { ClientBulkWriteExecutor } from './operations/client_bulk_write/executor';
import { executeOperation } from './operations/execute_operation';
import { AbstractOperation } from './operations/operation';
import type { ReadConcern, ReadConcernLevel, ReadConcernLike } from './read_concern';
import { ReadPreference, type ReadPreferenceMode } from './read_preference';
import { type AsyncDisposable, configureResourceManagement } from './resource_management';
import type { ServerMonitoringMode } from './sdam/monitor';
import type { TagSet } from './sdam/server_description';
import { readPreferenceServerSelector } from './sdam/server_selection';
import type { SrvPoller } from './sdam/srv_polling';
import { Topology, type TopologyEvents } from './sdam/topology';
import { ClientSession, type ClientSessionOptions, ServerSessionPool } from './sessions';
import {
  COSMOS_DB_CHECK,
  COSMOS_DB_MSG,
  DOCUMENT_DB_CHECK,
  DOCUMENT_DB_MSG,
  type HostAddress,
  hostMatchesWildcards,
  isHostMatch,
  MongoDBNamespace,
  noop,
  ns,
  resolveOptions,
  squashError
} from './utils';
import type { W, WriteConcern, WriteConcernSettings } from './write_concern';

/** @public */
export const ServerApiVersion = Object.freeze({
  v1: '1'
} as const);

/** @public */
export type ServerApiVersion = (typeof ServerApiVersion)[keyof typeof ServerApiVersion];

/** @public */
export interface ServerApi {
  version: ServerApiVersion;
  strict?: boolean;
  deprecationErrors?: boolean;
}

/** @public */
export interface DriverInfo {
  name?: string;
  version?: string;
  platform?: string;
}

/** @public */
export interface Auth {
  /** The username for auth */
  username?: string;
  /** The password for auth */
  password?: string;
}

/** @public */
export interface PkFactory {
  createPk(): any;
}

/** @public */
export type SupportedTLSConnectionOptions = Pick<
  TLSConnectionOptions & {
    allowPartialTrustChain?: boolean;
  },
  (typeof LEGAL_TLS_SOCKET_OPTIONS)[number]
>;

/** @public */
export type SupportedTLSSocketOptions = Pick<
  TLSSocketOptions,
  Extract<keyof TLSSocketOptions, (typeof LEGAL_TLS_SOCKET_OPTIONS)[number]>
>;

/** @public */
export type SupportedSocketOptions = Pick<
  TcpNetConnectOpts & {
    autoSelectFamily?: boolean;
    autoSelectFamilyAttemptTimeout?: number;
    /** Node.JS socket option to set the time the first keepalive probe is sent on an idle socket. Defaults to 120000ms */
    keepAliveInitialDelay?: number;
  },
  (typeof LEGAL_TCP_SOCKET_OPTIONS)[number]
>;

/** @public */
export type SupportedNodeConnectionOptions = SupportedTLSConnectionOptions &
  SupportedTLSSocketOptions &
  SupportedSocketOptions;

/**
 * Describes all possible URI query options for the mongo client
 * @public
 * @see https://www.mongodb.com/docs/manual/reference/connection-string
 */
export interface MongoClientOptions extends BSONSerializeOptions, SupportedNodeConnectionOptions {
  /** Specifies the name of the replica set, if the mongod is a member of a replica set. */
  replicaSet?: string;
  /**
   * @experimental
   * Specifies the time an operation will run until it throws a timeout error
   */
  timeoutMS?: number;
  /** Enables or disables TLS/SSL for the connection. */
  tls?: boolean;
  /** A boolean to enable or disables TLS/SSL for the connection. (The ssl option is equivalent to the tls option.) */
  ssl?: boolean;
  /** Specifies the location of a local .pem file that contains either the client's TLS/SSL certificate and key. */
  tlsCertificateKeyFile?: string;
  /** Specifies the password to de-crypt the tlsCertificateKeyFile. */
  tlsCertificateKeyFilePassword?: string;
  /** Specifies the location of a local .pem file that contains the root certificate chain from the Certificate Authority. This file is used to validate the certificate presented by the mongod/mongos instance. */
  tlsCAFile?: string;
  /** Specifies the location of a local CRL .pem file that contains the client revokation list. */
  tlsCRLFile?: string;
  /** Bypasses validation of the certificates presented by the mongod/mongos instance */
  tlsAllowInvalidCertificates?: boolean;
  /** Disables hostname validation of the certificate presented by the mongod/mongos instance. */
  tlsAllowInvalidHostnames?: boolean;
  /** Disables various certificate validations. */
  tlsInsecure?: boolean;
  /** The time in milliseconds to attempt a connection before timing out. */
  connectTimeoutMS?: number;
  /** The time in milliseconds to attempt a send or receive on a socket before the attempt times out. */
  socketTimeoutMS?: number;
  /** An array or comma-delimited string of compressors to enable network compression for communication between this client and a mongod/mongos instance. */
  compressors?: CompressorName[] | string;
  /** An integer that specifies the compression level if using zlib for network compression. */
  zlibCompressionLevel?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | undefined;
  /** The maximum number of hosts to connect to when using an srv connection string, a setting of `0` means unlimited hosts */
  srvMaxHosts?: number;
  /**
   * Modifies the srv URI to look like:
   *
   * `_{srvServiceName}._tcp.{hostname}.{domainname}`
   *
   * Querying this DNS URI is expected to respond with SRV records
   */
  srvServiceName?: string;
  /** The maximum number of connections in the connection pool. */
  maxPoolSize?: number;
  /** The minimum number of connections in the connection pool. */
  minPoolSize?: number;
  /** The maximum number of connections that may be in the process of being established concurrently by the connection pool. */
  maxConnecting?: number;
  /**
   * The maximum amount of time a connection should remain idle in the connection pool before being marked idle, in milliseconds.
   * If specified, this must be a number greater than or equal to 0, where 0 means there is no limit. Defaults to 0. After this
   * time passes, the idle collection can be automatically cleaned up in the background.
   */
  maxIdleTimeMS?: number;
  /** The maximum time in milliseconds that a thread can wait for a connection to become available. */
  waitQueueTimeoutMS?: number;
  /** Specify a read concern for the collection (only MongoDB 3.2 or higher supported) */
  readConcern?: ReadConcernLike;
  /** The level of isolation */
  readConcernLevel?: ReadConcernLevel;
  /** Specifies the read preferences for this connection */
  readPreference?: ReadPreferenceMode | ReadPreference;
  /** Specifies, in seconds, how stale a secondary can be before the client stops using it for read operations. */
  maxStalenessSeconds?: number;
  /** Specifies the tags document as a comma-separated list of colon-separated key-value pairs.  */
  readPreferenceTags?: TagSet[];
  /** The auth settings for when connection to server. */
  auth?: Auth;
  /** Specify the database name associated with the user’s credentials. */
  authSource?: string;
  /** Specify the authentication mechanism that MongoDB will use to authenticate the connection. */
  authMechanism?: AuthMechanism;
  /** Specify properties for the specified authMechanism as a comma-separated list of colon-separated key-value pairs. */
  authMechanismProperties?: AuthMechanismProperties;
  /** The size (in milliseconds) of the latency window for selecting among multiple suitable MongoDB instances. */
  localThresholdMS?: number;
  /** Specifies how long (in milliseconds) to block for server selection before throwing an exception.  */
  serverSelectionTimeoutMS?: number;
  /** heartbeatFrequencyMS controls when the driver checks the state of the MongoDB deployment. Specify the interval (in milliseconds) between checks, counted from the end of the previous check until the beginning of the next one. */
  heartbeatFrequencyMS?: number;
  /** Sets the minimum heartbeat frequency. In the event that the driver has to frequently re-check a server's availability, it will wait at least this long since the previous check to avoid wasted effort. */
  minHeartbeatFrequencyMS?: number;
  /** The name of the application that created this MongoClient instance. MongoDB 3.4 and newer will print this value in the server log upon establishing each connection. It is also recorded in the slow query log and profile collections */
  appName?: string;
  /** Enables retryable reads. */
  retryReads?: boolean;
  /** Enable retryable writes. */
  retryWrites?: boolean;
  /** Allow a driver to force a Single topology type with a connection string containing one host */
  directConnection?: boolean;
  /** Instruct the driver it is connecting to a load balancer fronting a mongos like service */
  loadBalanced?: boolean;
  /**
   * The write concern w value
   * @deprecated Please use the `writeConcern` option instead
   */
  w?: W;
  /**
   * The write concern timeout
   * @deprecated Please use the `writeConcern` option instead
   */
  wtimeoutMS?: number;
  /**
   * The journal write concern
   * @deprecated Please use the `writeConcern` option instead
   */
  journal?: boolean;
  /**
   * A MongoDB WriteConcern, which describes the level of acknowledgement
   * requested from MongoDB for write operations.
   *
   * @see https://www.mongodb.com/docs/manual/reference/write-concern/
   */
  writeConcern?: WriteConcern | WriteConcernSettings;
  /** TCP Connection no delay */
  noDelay?: boolean;
  /** Force server to assign `_id` values instead of driver */
  forceServerObjectId?: boolean;
  /** A primary key factory function for generation of custom `_id` keys */
  pkFactory?: PkFactory;
  /** Enable command monitoring for this client */
  monitorCommands?: boolean;
  /** Server API version */
  serverApi?: ServerApi | ServerApiVersion;
  /**
   * Optionally enable in-use auto encryption
   *
   * @remarks
   *  Automatic encryption is an enterprise only feature that only applies to operations on a collection. Automatic encryption is not supported for operations on a database or view, and operations that are not bypassed will result in error
   *  (see [libmongocrypt: Auto Encryption Allow-List](https://github.com/mongodb/specifications/blob/master/source/client-side-encryption/client-side-encryption.md#libmongocrypt-auto-encryption-allow-list)). To bypass automatic encryption for all operations, set bypassAutoEncryption=true in AutoEncryptionOpts.
   *
   *  Automatic encryption requires the authenticated user to have the [listCollections privilege action](https://www.mongodb.com/docs/manual/reference/command/listCollections/#dbcmd.listCollections).
   *
   *  If a MongoClient with a limited connection pool size (i.e a non-zero maxPoolSize) is configured with AutoEncryptionOptions, a separate internal MongoClient is created if any of the following are true:
   *  - AutoEncryptionOptions.keyVaultClient is not passed.
   *  - AutoEncryptionOptions.bypassAutomaticEncryption is false.
   *
   * If an internal MongoClient is created, it is configured with the same options as the parent MongoClient except minPoolSize is set to 0 and AutoEncryptionOptions is omitted.
   */
  autoEncryption?: AutoEncryptionOptions;
  /**
   * Allows a wrapping driver to amend the client metadata generated by the driver to include information about the wrapping driver
  /* @deprecated - Will be made internal in a future major release.
   */
  driverInfo?: DriverInfo;
  /** Configures a Socks5 proxy host used for creating TCP connections. */
  proxyHost?: string;
  /** Configures a Socks5 proxy port used for creating TCP connections. */
  proxyPort?: number;
  /** Configures a Socks5 proxy username when the proxy in proxyHost requires username/password authentication. */
  proxyUsername?: string;
  /** Configures a Socks5 proxy password when the proxy in proxyHost requires username/password authentication. */
  proxyPassword?: string;
  /** Instructs the driver monitors to use a specific monitoring mode */
  serverMonitoringMode?: ServerMonitoringMode;
  /**
   * @public
   * Specifies the destination of the driver's logging. The default is stderr.
   */
  mongodbLogPath?: 'stderr' | 'stdout' | MongoDBLogWritable;
  /**
   * @public
   * Enable logging level per component or use `default` to control any unset components.
   */
  mongodbLogComponentSeverities?: LogComponentSeveritiesClientOptions;
  /**
   * @public
   * All BSON documents are stringified to EJSON. This controls the maximum length of those strings.
   * It is defaulted to 1000.
   */
  mongodbLogMaxDocumentLength?: number;

  /** @internal */
  srvPoller?: SrvPoller;
  /** @internal */
  connectionType?: typeof Connection;
  /** @internal */
  __skipPingOnConnect?: boolean;
}

/** @public */
export type WithSessionCallback<T = unknown> = (session: ClientSession) => Promise<T>;

/** @internal */
export interface MongoClientPrivate {
  url: string;
  bsonOptions: BSONSerializeOptions;
  namespace: MongoDBNamespace;
  hasBeenClosed: boolean;
  authProviders: MongoClientAuthProviders;
  /**
   * We keep a reference to the sessions that are acquired from the pool.
   * - used to track and close all sessions in client.close() (which is non-standard behavior)
   * - used to notify the leak checker in our tests if test author forgot to clean up explicit sessions
   */
  readonly activeSessions: Set<ClientSession>;
  /**
   * We keep a reference to the cursors that are created from this client.
   * - used to track and close all cursors in client.close().
   *   Cursors in this set are ones that still need to have their close method invoked (no other conditions are considered)
   */
  readonly activeCursors: Set<AbstractCursor>;
  readonly sessionPool: ServerSessionPool;
  readonly options: MongoOptions;
  readonly readConcern?: ReadConcern;
  readonly writeConcern?: WriteConcern;
  readonly readPreference: ReadPreference;
  readonly isMongoClient: true;
}

/** @public */
export type MongoClientEvents = Pick<TopologyEvents, (typeof MONGO_CLIENT_EVENTS)[number]> & {
  // In previous versions the open event emitted a topology, in an effort to no longer
  // expose internals but continue to expose this useful event API, it now emits a mongoClient
  open(mongoClient: MongoClient): void;
};

/**
 * @public
 *
 * The **MongoClient** class is a class that allows for making Connections to MongoDB.
 *
 * **NOTE:** The programmatically provided options take precedence over the URI options.
 *
 * @remarks
 *
 * A MongoClient is the entry point to connecting to a MongoDB server.
 *
 * It handles a multitude of features on your application's behalf:
 * - **Server Host Connection Configuration**: A MongoClient is responsible for reading TLS cert, ca, and crl files if provided.
 * - **SRV Record Polling**: A "`mongodb+srv`" style connection string is used to have the MongoClient resolve DNS SRV records of all server hostnames which the driver periodically monitors for changes and adjusts its current view of hosts correspondingly.
 * - **Server Monitoring**: The MongoClient automatically keeps monitoring the health of server nodes in your cluster to reach out to the correct and lowest latency one available.
 * - **Connection Pooling**: To avoid paying the cost of rebuilding a connection to the server on every operation the MongoClient keeps idle connections preserved for reuse.
 * - **Session Pooling**: The MongoClient creates logical sessions that enable retryable writes, causal consistency, and transactions. It handles pooling these sessions for reuse in subsequent operations.
 * - **Cursor Operations**: A MongoClient's cursors use the health monitoring system to send the request for more documents to the same server the query began on.
 * - **Mongocryptd process**: When using auto encryption, a MongoClient will launch a `mongocryptd` instance for handling encryption if the mongocrypt shared library isn't in use.
 *
 * There are many more features of a MongoClient that are not listed above.
 *
 * In order to enable these features, a number of asynchronous Node.js resources are established by the driver: Timers, FS Requests, Sockets, etc.
 * For details on cleanup, please refer to the MongoClient `close()` documentation.
 *
 * @example
 * ```ts
 * import { MongoClient } from 'mongodb';
 * // Enable command monitoring for debugging
 * const client = new MongoClient('mongodb://localhost:27017?appName=mflix', { monitorCommands: true });
 * ```
 */
export class MongoClient extends TypedEventEmitter<MongoClientEvents> implements AsyncDisposable {
  /** @internal */
  s: MongoClientPrivate;
  /** @internal */
  topology?: Topology;
  /** @internal */
  override readonly mongoLogger: MongoLogger | undefined;
  /** @internal */
  private connectionLock?: Promise<this>;
  /** @internal */
  private closeLock?: Promise<void>;

  /**
   * The consolidate, parsed, transformed and merged options.
   */
  public readonly options: Readonly<
    Omit<
      MongoOptions,
      | 'monitorCommands'
      | 'ca'
      | 'crl'
      | 'key'
      | 'cert'
      | 'driverInfo'
      | 'additionalDriverInfo'
      | 'metadata'
      | 'extendedMetadata'
    >
  > &
    Pick<
      MongoOptions,
      | 'monitorCommands'
      | 'ca'
      | 'crl'
      | 'key'
      | 'cert'
      | 'driverInfo'
      | 'additionalDriverInfo'
      | 'metadata'
      | 'extendedMetadata'
    >;

  private driverInfoList: DriverInfo[] = [];

  constructor(url: string, options?: MongoClientOptions) {
    super();
    this.on('error', noop);

    this.options = parseOptions(url, this, options);

    this.appendMetadata(this.options.driverInfo);

    const shouldSetLogger = Object.values(this.options.mongoLoggerOptions.componentSeverities).some(
      value => value !== SeverityLevel.OFF
    );
    this.mongoLogger = shouldSetLogger
      ? new MongoLogger(this.options.mongoLoggerOptions)
      : undefined;

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const client = this;

    // The internal state
    this.s = {
      url,
      bsonOptions: resolveBSONOptions(this.options),
      namespace: ns('admin'),
      hasBeenClosed: false,
      sessionPool: new ServerSessionPool(this),
      activeSessions: new Set(),
      activeCursors: new Set(),
      authProviders: new MongoClientAuthProviders(),

      get options() {
        return client.options;
      },
      get readConcern() {
        return client.options.readConcern;
      },
      get writeConcern() {
        return client.options.writeConcern;
      },
      get readPreference() {
        return client.options.readPreference;
      },
      get isMongoClient(): true {
        return true;
      }
    };
    this.checkForNonGenuineHosts();
  }

  /**
   * @beta
   * @experimental
   * An alias for {@link MongoClient.close|MongoClient.close()}.
   */
  declare [Symbol.asyncDispose]: () => Promise<void>;
  /** @internal */
  async asyncDispose() {
    await this.close();
  }

  /**
   * Append metadata to the client metadata after instantiation.
   * @param driverInfo - Information about the application or library.
   */
  appendMetadata(driverInfo: DriverInfo) {
    const isDuplicateDriverInfo = this.driverInfoList.some(info =>
      isDriverInfoEqual(info, driverInfo)
    );
    if (isDuplicateDriverInfo) return;

    this.driverInfoList.push(driverInfo);
    this.options.metadata = makeClientMetadata(this.driverInfoList, this.options);
    this.options.extendedMetadata = addContainerMetadata(this.options.metadata)
      .then(undefined, squashError)
      .then(result => result ?? {}); // ensure Promise<Document>
  }

  /** @internal */
  private checkForNonGenuineHosts() {
    const documentDBHostnames = this.options.hosts.filter((hostAddress: HostAddress) =>
      isHostMatch(DOCUMENT_DB_CHECK, hostAddress.host)
    );
    const srvHostIsDocumentDB = isHostMatch(DOCUMENT_DB_CHECK, this.options.srvHost);

    const cosmosDBHostnames = this.options.hosts.filter((hostAddress: HostAddress) =>
      isHostMatch(COSMOS_DB_CHECK, hostAddress.host)
    );
    const srvHostIsCosmosDB = isHostMatch(COSMOS_DB_CHECK, this.options.srvHost);

    if (documentDBHostnames.length !== 0 || srvHostIsDocumentDB) {
      this.mongoLogger?.info('client', DOCUMENT_DB_MSG);
    } else if (cosmosDBHostnames.length !== 0 || srvHostIsCosmosDB) {
      this.mongoLogger?.info('client', COSMOS_DB_MSG);
    }
  }

  get serverApi(): Readonly<ServerApi | undefined> {
    return this.options.serverApi && Object.freeze({ ...this.options.serverApi });
  }
  /**
   * Intended for APM use only
   * @internal
   */
  get monitorCommands(): boolean {
    return this.options.monitorCommands;
  }
  set monitorCommands(value: boolean) {
    this.options.monitorCommands = value;
  }

  /** @internal */
  get autoEncrypter(): AutoEncrypter | undefined {
    return this.options.autoEncrypter;
  }

  get readConcern(): ReadConcern | undefined {
    return this.s.readConcern;
  }

  get writeConcern(): WriteConcern | undefined {
    return this.s.writeConcern;
  }

  get readPreference(): ReadPreference {
    return this.s.readPreference;
  }

  get bsonOptions(): BSONSerializeOptions {
    return this.s.bsonOptions;
  }

  get timeoutMS(): number | undefined {
    return this.s.options.timeoutMS;
  }

  /**
   * Executes a client bulk write operation, available on server 8.0+.
   * @param models - The client bulk write models.
   * @param options - The client bulk write options.
   * @returns A ClientBulkWriteResult for acknowledged writes and ok: 1 for unacknowledged writes.
   */
  async bulkWrite<SchemaMap extends Record<string, Document> = Record<string, Document>>(
    models: ReadonlyArray<ClientBulkWriteModel<SchemaMap>>,
    options?: ClientBulkWriteOptions
  ): Promise<ClientBulkWriteResult> {
    if (this.autoEncrypter) {
      throw new MongoInvalidArgumentError(
        'MongoClient bulkWrite does not currently support automatic encryption.'
      );
    }
    // We do not need schema type information past this point ("as any" is fine)
    return await new ClientBulkWriteExecutor(
      this,
      models as any,
      resolveOptions(this, options)
    ).execute();
  }

  /**
   * Connect to MongoDB using a url
   *
   * @remarks
   * Calling `connect` is optional since the first operation you perform will call `connect` if it's needed.
   * `timeoutMS` will bound the time any operation can take before throwing a timeout error.
   * However, when the operation being run is automatically connecting your `MongoClient` the `timeoutMS` will not apply to the time taken to connect the MongoClient.
   * This means the time to setup the `MongoClient` does not count against `timeoutMS`.
   * If you are using `timeoutMS` we recommend connecting your client explicitly in advance of any operation to avoid this inconsistent execution time.
   *
   * @remarks
   * The driver will look up corresponding SRV and TXT records if the connection string starts with `mongodb+srv://`.
   * If those look ups throw a DNS Timeout error, the driver will retry the look up once.
   *
   * @see docs.mongodb.org/manual/reference/connection-string/
   */
  async connect(): Promise<this> {
    if (this.connectionLock) {
      return await this.connectionLock;
    }

    try {
      this.connectionLock = this._connect();
      await this.connectionLock;
    } finally {
      // release
      this.connectionLock = undefined;
    }

    return this;
  }

  /**
   * Create a topology to open the connection, must be locked to avoid topology leaks in concurrency scenario.
   * Locking is enforced by the connect method.
   *
   * @internal
   */
  private async _connect(): Promise<this> {
    if (this.topology && this.topology.isConnected()) {
      return this;
    }

    const options = this.options;

    if (options.tls) {
      if (typeof options.tlsCAFile === 'string') {
        options.ca ??= await fs.readFile(options.tlsCAFile);
      }
      if (typeof options.tlsCRLFile === 'string') {
        options.crl ??= await fs.readFile(options.tlsCRLFile);
      }
      if (typeof options.tlsCertificateKeyFile === 'string') {
        if (!options.key || !options.cert) {
          const contents = await fs.readFile(options.tlsCertificateKeyFile);
          options.key ??= contents;
          options.cert ??= contents;
        }
      }
    }
    if (typeof options.srvHost === 'string') {
      const hosts = await resolveSRVRecord(options);

      for (const [index, host] of hosts.entries()) {
        options.hosts[index] = host;
      }
    }

    // It is important to perform validation of hosts AFTER SRV resolution, to check the real hostname,
    // but BEFORE we even attempt connecting with a potentially not allowed hostname
    if (options.credentials?.mechanism === AuthMechanism.MONGODB_OIDC) {
      const allowedHosts =
        options.credentials?.mechanismProperties?.ALLOWED_HOSTS || DEFAULT_ALLOWED_HOSTS;
      const isServiceAuth = !!options.credentials?.mechanismProperties?.ENVIRONMENT;
      if (!isServiceAuth) {
        for (const host of options.hosts) {
          if (!hostMatchesWildcards(host.toHostPort().host, allowedHosts)) {
            throw new MongoInvalidArgumentError(
              `Host '${host}' is not valid for OIDC authentication with ALLOWED_HOSTS of '${allowedHosts.join(
                ','
              )}'`
            );
          }
        }
      }
    }

    this.topology = new Topology(this, options.hosts, options);
    // Events can be emitted before initialization is complete so we have to
    // save the reference to the topology on the client ASAP if the event handlers need to access it

    this.topology.once(Topology.OPEN, () => this.emit('open', this));

    for (const event of MONGO_CLIENT_EVENTS) {
      this.topology.on(event, (...args: any[]) => this.emit(event, ...(args as any)));
    }

    const topologyConnect = async () => {
      try {
        await this.topology?.connect(options);
      } catch (error) {
        this.topology?.close();
        throw error;
      }
    };

    if (this.autoEncrypter) {
      await this.autoEncrypter?.init();
      await topologyConnect();
      await options.encrypter.connectInternalClient();
    } else {
      await topologyConnect();
    }

    return this;
  }

  /**
   * Cleans up resources managed by the MongoClient.
   *
   * The close method clears and closes all resources whose lifetimes are managed by the MongoClient.
   * Please refer to the `MongoClient` class documentation for a high level overview of the client's key features and responsibilities.
   *
   * **However,** the close method does not handle the cleanup of resources explicitly created by the user.
   * Any user-created driver resource with its own `close()` method should be explicitly closed by the user before calling MongoClient.close().
   * This method is written as a "best effort" attempt to leave behind the least amount of resources server-side when possible.
   *
   * The following list defines ideal preconditions and consequent pitfalls if they are not met.
   * The MongoClient, ClientSession, Cursors and ChangeStreams all support [explicit resource management](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-2.html).
   * By using explicit resource management to manage the lifetime of driver resources instead of manually managing their lifetimes, the pitfalls outlined below can be avoided.
   *
   * The close method performs the following in the order listed:
   * - Client-side:
   *   - **Close in-use connections**: Any connections that are currently waiting on a response from the server will be closed.
   *     This is performed _first_ to avoid reaching the next step (server-side clean up) and having no available connections to check out.
   *     - _Ideal_: All operations have been awaited or cancelled, and the outcomes, regardless of success or failure, have been processed before closing the client servicing the operation.
   *     - _Pitfall_: When `client.close()` is called and all connections are in use, after closing them, the client must create new connections for cleanup operations, which comes at the cost of new TLS/TCP handshakes and authentication steps.
   * - Server-side:
   *   - **Close active cursors**: All cursors that haven't been completed will have a `killCursor` operation sent to the server they were initialized on, freeing the server-side resource.
   *     - _Ideal_: Cursors are explicitly closed or completed before `client.close()` is called.
   *     - _Pitfall_: `killCursors` may have to build a new connection if the in-use closure ended all pooled connections.
   *   - **End active sessions**: In-use sessions created with `client.startSession()` or `client.withSession()` or implicitly by the driver will have their `.endSession()` method called.
   *     Contrary to the name of the method, `endSession()` returns the session to the client's pool of sessions rather than end them on the server.
   *     - _Ideal_: Transaction outcomes are awaited and their corresponding explicit sessions are ended before `client.close()` is called.
   *     - _Pitfall_: **This step aborts in-progress transactions**. It is advisable to observe the outcome of a transaction before closing your client.
   *   - **End all pooled sessions**: The `endSessions` command with all session IDs the client has pooled is sent to the server to inform the cluster it can clean them up.
   *     - _Ideal_: No user intervention is expected.
   *     - _Pitfall_: None.
   *
   * The remaining shutdown is of the MongoClient resources that are intended to be entirely internal but is documented here as their existence relates to the JS event loop.
   *
   * - Client-side (again):
   *   - **Stop all server monitoring**: Connections kept live for detecting cluster changes and roundtrip time measurements are shutdown.
   *   - **Close all pooled connections**: Each server node in the cluster has a corresponding connection pool and all connections in the pool are closed. Any operations waiting to check out a connection will have an error thrown instead of a connection returned.
   *   - **Clear out server selection queue**: Any operations that are in the process of waiting for a server to be selected will have an error thrown instead of a server returned.
   *   - **Close encryption-related resources**: An internal MongoClient created for communicating with `mongocryptd` or other encryption purposes is closed. (Using this same method of course!)
   *
   * After the close method completes there should be no MongoClient related resources [ref-ed in Node.js' event loop](https://docs.libuv.org/en/v1.x/handle.html#reference-counting).
   * This should allow Node.js to exit gracefully if MongoClient resources were the only active handles in the event loop.
   *
   * @param _force - currently an unused flag that has no effect. Defaults to `false`.
   */
  async close(_force = false): Promise<void> {
    if (this.closeLock) {
      return await this.closeLock;
    }

    try {
      this.closeLock = this._close();
      await this.closeLock;
    } finally {
      // release
      this.closeLock = undefined;
    }
  }

  /* @internal */
  private async _close(): Promise<void> {
    // There's no way to set hasBeenClosed back to false
    Object.defineProperty(this.s, 'hasBeenClosed', {
      value: true,
      enumerable: true,
      configurable: false,
      writable: false
    });

    this.topology?.closeCheckedOutConnections();

    const activeCursorCloses = Array.from(this.s.activeCursors, cursor => cursor.close());
    this.s.activeCursors.clear();

    await Promise.all(activeCursorCloses);

    const activeSessionEnds = Array.from(this.s.activeSessions, session => session.endSession());
    this.s.activeSessions.clear();

    await Promise.all(activeSessionEnds);

    if (this.topology == null) {
      return;
    }

    // If we would attempt to select a server and get nothing back we short circuit
    // to avoid the server selection timeout.
    const selector = readPreferenceServerSelector(ReadPreference.primaryPreferred);
    const topologyDescription = this.topology.description;
    const serverDescriptions = Array.from(topologyDescription.servers.values());
    const servers = selector(topologyDescription, serverDescriptions);
    if (servers.length !== 0) {
      const endSessions = Array.from(this.s.sessionPool.sessions, ({ id }) => id);
      if (endSessions.length !== 0) {
        try {
          class EndSessionsOperation extends AbstractOperation<void> {
            override ns = MongoDBNamespace.fromString('admin.$cmd');
            override SERVER_COMMAND_RESPONSE_TYPE = MongoDBResponse;
            override buildCommand(_connection: Connection, _session?: ClientSession): Document {
              return {
                endSessions
              };
            }
            override buildOptions(timeoutContext: TimeoutContext): ServerCommandOptions {
              return {
                timeoutContext,
                readPreference: ReadPreference.primaryPreferred,
                noResponse: true
              };
            }
            override get commandName(): string {
              return 'endSessions';
            }
          }
          await executeOperation(this, new EndSessionsOperation());
        } catch (error) {
          squashError(error);
        }
      }
    }

    // clear out references to old topology
    const topology = this.topology;
    this.topology = undefined;

    topology.close();

    const { encrypter } = this.options;
    if (encrypter) {
      await encrypter.close(this);
    }
  }

  /**
   * Create a new Db instance sharing the current socket connections.
   *
   * @param dbName - The name of the database we want to use. If not provided, use database name from connection string.
   * @param options - Optional settings for Db construction
   */
  db(dbName?: string, options?: DbOptions): Db {
    options = options ?? {};

    // Default to db from connection string if not provided
    if (!dbName) {
      dbName = this.s.options.dbName;
    }

    // Copy the options and add out internal override of the not shared flag
    const finalOptions = Object.assign({}, this.options, options);

    // Return the db object
    const db = new Db(this, dbName, finalOptions);

    // Return the database
    return db;
  }

  /**
   * Connect to MongoDB using a url
   *
   * @remarks
   * Calling `connect` is optional since the first operation you perform will call `connect` if it's needed.
   * `timeoutMS` will bound the time any operation can take before throwing a timeout error.
   * However, when the operation being run is automatically connecting your `MongoClient` the `timeoutMS` will not apply to the time taken to connect the MongoClient.
   * This means the time to setup the `MongoClient` does not count against `timeoutMS`.
   * If you are using `timeoutMS` we recommend connecting your client explicitly in advance of any operation to avoid this inconsistent execution time.
   *
   * @remarks
   * The programmatically provided options take precedence over the URI options.
   *
   * @remarks
   * The driver will look up corresponding SRV and TXT records if the connection string starts with `mongodb+srv://`.
   * If those look ups throw a DNS Timeout error, the driver will retry the look up once.
   *
   * @see https://www.mongodb.com/docs/manual/reference/connection-string/
   */
  static async connect(url: string, options?: MongoClientOptions): Promise<MongoClient> {
    const client = new this(url, options);
    return await client.connect();
  }

  /**
   * Creates a new ClientSession. When using the returned session in an operation
   * a corresponding ServerSession will be created.
   *
   * @remarks
   * A ClientSession instance may only be passed to operations being performed on the same
   * MongoClient it was started from.
   */
  startSession(options?: ClientSessionOptions): ClientSession {
    const session = new ClientSession(
      this,
      this.s.sessionPool,
      { explicit: true, ...options },
      this.options
    );
    this.s.activeSessions.add(session);
    session.once('ended', () => {
      this.s.activeSessions.delete(session);
    });
    return session;
  }

  /**
   * A convenience method for creating and handling the clean up of a ClientSession.
   * The session will always be ended when the executor finishes.
   *
   * @param executor - An executor function that all operations using the provided session must be invoked in
   * @param options - optional settings for the session
   */
  async withSession<T = any>(executor: WithSessionCallback<T>): Promise<T>;
  async withSession<T = any>(
    options: ClientSessionOptions,
    executor: WithSessionCallback<T>
  ): Promise<T>;
  async withSession<T = any>(
    optionsOrExecutor: ClientSessionOptions | WithSessionCallback<T>,
    executor?: WithSessionCallback<T>
  ): Promise<T> {
    const options = {
      // Always define an owner
      owner: Symbol(),
      // If it's an object inherit the options
      ...(typeof optionsOrExecutor === 'object' ? optionsOrExecutor : {})
    };

    const withSessionCallback =
      typeof optionsOrExecutor === 'function' ? optionsOrExecutor : executor;

    if (withSessionCallback == null) {
      throw new MongoInvalidArgumentError('Missing required callback parameter');
    }

    const session = this.startSession(options);

    try {
      return await withSessionCallback(session);
    } finally {
      try {
        await session.endSession();
      } catch (error) {
        squashError(error);
      }
    }
  }

  /**
   * Create a new Change Stream, watching for new changes (insertions, updates,
   * replacements, deletions, and invalidations) in this cluster. Will ignore all
   * changes to system collections, as well as the local, admin, and config databases.
   *
   * @remarks
   * watch() accepts two generic arguments for distinct use cases:
   * - The first is to provide the schema that may be defined for all the data within the current cluster
   * - The second is to override the shape of the change stream document entirely, if it is not provided the type will default to ChangeStreamDocument of the first argument
   *
   * @remarks
   * When `timeoutMS` is configured for a change stream, it will have different behaviour depending
   * on whether the change stream is in iterator mode or emitter mode. In both cases, a change
   * stream will time out if it does not receive a change event within `timeoutMS` of the last change
   * event.
   *
   * Note that if a change stream is consistently timing out when watching a collection, database or
   * client that is being changed, then this may be due to the server timing out before it can finish
   * processing the existing oplog. To address this, restart the change stream with a higher
   * `timeoutMS`.
   *
   * If the change stream times out the initial aggregate operation to establish the change stream on
   * the server, then the client will close the change stream. If the getMore calls to the server
   * time out, then the change stream will be left open, but will throw a MongoOperationTimeoutError
   * when in iterator mode and emit an error event that returns a MongoOperationTimeoutError in
   * emitter mode.
   *
   * To determine whether or not the change stream is still open following a timeout, check the
   * {@link ChangeStream.closed} getter.
   *
   * @example
   * In iterator mode, if a next() call throws a timeout error, it will attempt to resume the change stream.
   * The next call can just be retried after this succeeds.
   * ```ts
   * const changeStream = collection.watch([], { timeoutMS: 100 });
   * try {
   *     await changeStream.next();
   * } catch (e) {
   *     if (e instanceof MongoOperationTimeoutError && !changeStream.closed) {
   *       await changeStream.next();
   *     }
   *     throw e;
   * }
   * ```
   *
   * @example
   * In emitter mode, if the change stream goes `timeoutMS` without emitting a change event, it will
   * emit an error event that returns a MongoOperationTimeoutError, but will not close the change
   * stream unless the resume attempt fails. There is no need to re-establish change listeners as
   * this will automatically continue emitting change events once the resume attempt completes.
   *
   * ```ts
   * const changeStream = collection.watch([], { timeoutMS: 100 });
   * changeStream.on('change', console.log);
   * changeStream.on('error', e => {
   *     if (e instanceof MongoOperationTimeoutError && !changeStream.closed) {
   *         // do nothing
   *     } else {
   *         changeStream.close();
   *     }
   * });
   * ```
   * @param pipeline - An array of {@link https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/|aggregation pipeline stages} through which to pass change stream documents. This allows for filtering (using $match) and manipulating the change stream documents.
   * @param options - Optional settings for the command
   * @typeParam TSchema - Type of the data being detected by the change stream
   * @typeParam TChange - Type of the whole change stream document emitted
   */
  watch<
    TSchema extends Document = Document,
    TChange extends Document = ChangeStreamDocument<TSchema>
  >(pipeline: Document[] = [], options: ChangeStreamOptions = {}): ChangeStream<TSchema, TChange> {
    // Allow optionally not specifying a pipeline
    if (!Array.isArray(pipeline)) {
      options = pipeline;
      pipeline = [];
    }

    return new ChangeStream<TSchema, TChange>(this, pipeline, resolveOptions(this, options));
  }
}

configureResourceManagement(MongoClient.prototype);

/**
 * Parsed Mongo Client Options.
 *
 * User supplied options are documented by `MongoClientOptions`.
 *
 * **NOTE:** The client's options parsing is subject to change to support new features.
 * This type is provided to aid with inspection of options after parsing, it should not be relied upon programmatically.
 *
 * Options are sourced from:
 * - connection string
 * - options object passed to the MongoClient constructor
 * - file system (ex. tls settings)
 * - environment variables
 * - DNS SRV records and TXT records
 *
 * Not all options may be present after client construction as some are obtained from asynchronous operations.
 *
 * @public
 */
export interface MongoOptions
  extends Required<
      Pick<
        MongoClientOptions,
        | 'autoEncryption'
        | 'connectTimeoutMS'
        | 'directConnection'
        | 'driverInfo'
        | 'forceServerObjectId'
        | 'minHeartbeatFrequencyMS'
        | 'heartbeatFrequencyMS'
        | 'localThresholdMS'
        | 'maxConnecting'
        | 'maxIdleTimeMS'
        | 'maxPoolSize'
        | 'minPoolSize'
        | 'monitorCommands'
        | 'noDelay'
        | 'pkFactory'
        | 'raw'
        | 'replicaSet'
        | 'retryReads'
        | 'retryWrites'
        | 'serverSelectionTimeoutMS'
        | 'socketTimeoutMS'
        | 'srvMaxHosts'
        | 'srvServiceName'
        | 'tlsAllowInvalidCertificates'
        | 'tlsAllowInvalidHostnames'
        | 'tlsInsecure'
        | 'waitQueueTimeoutMS'
        | 'zlibCompressionLevel'
      >
    >,
    SupportedNodeConnectionOptions {
  appName?: string;
  hosts: HostAddress[];
  srvHost?: string;
  credentials?: MongoCredentials;
  readPreference: ReadPreference;
  readConcern: ReadConcern;
  loadBalanced: boolean;
  directConnection: boolean;
  serverApi: ServerApi;
  compressors: CompressorName[];
  writeConcern: WriteConcern;
  dbName: string;
  /** @deprecated - Will be made internal in a future major release. */
  metadata: ClientMetadata;
  /** @deprecated - Will be made internal in a future major release. */
  extendedMetadata: Promise<Document>;
  /** @deprecated - Will be made internal in a future major release. */
  additionalDriverInfo: DriverInfo[];
  /** @internal */
  autoEncrypter?: AutoEncrypter;
  /** @internal */
  tokenCache?: TokenCache;
  proxyHost?: string;
  proxyPort?: number;
  proxyUsername?: string;
  proxyPassword?: string;
  serverMonitoringMode: ServerMonitoringMode;
  /** @internal */
  connectionType?: typeof Connection;
  /** @internal */
  authProviders: MongoClientAuthProviders;
  /** @internal */
  encrypter: Encrypter;
  /** @internal */
  userSpecifiedAuthSource: boolean;
  /** @internal */
  userSpecifiedReplicaSet: boolean;

  /**
   * # NOTE ABOUT TLS Options
   *
   * If `tls` is provided as an option, it is equivalent to setting the `ssl` option.
   *
   * NodeJS native TLS options are passed through to the socket and retain their original types.
   *
   * ### Additional options:
   *
   * | nodejs native option  | driver spec equivalent option name            | driver option type |
   * |:----------------------|:----------------------------------------------|:-------------------|
   * | `ca`                  | `tlsCAFile`                                   | `string`           |
   * | `crl`                 | `tlsCRLFile`                                  | `string`           |
   * | `cert`                | `tlsCertificateKeyFile`                       | `string`           |
   * | `key`                 | `tlsCertificateKeyFile`                       | `string`           |
   * | `passphrase`          | `tlsCertificateKeyFilePassword`               | `string`           |
   * | `rejectUnauthorized`  | `tlsAllowInvalidCertificates`                 | `boolean`          |
   * | `checkServerIdentity` | `tlsAllowInvalidHostnames`                    | `boolean`          |
   * | see note below        | `tlsInsecure`                                 | `boolean`          |
   *
   * If `tlsInsecure` is set to `true`, then it will set the node native options `checkServerIdentity`
   * to a no-op and `rejectUnauthorized` to `false`.
   *
   * If `tlsInsecure` is set to `false`, then it will set the node native options `checkServerIdentity`
   * to a no-op and `rejectUnauthorized` to the inverse value of `tlsAllowInvalidCertificates`. If
   * `tlsAllowInvalidCertificates` is not set, then `rejectUnauthorized` will be set to `true`.
   *
   * ### Note on `tlsCAFile`, `tlsCertificateKeyFile` and `tlsCRLFile`
   *
   * The files specified by the paths passed in to the `tlsCAFile`, `tlsCertificateKeyFile` and `tlsCRLFile`
   * fields are read lazily on the first call to `MongoClient.connect`. Once these files have been read and
   * the `ca`, `cert`, `crl` and `key` fields are populated, they will not be read again on subsequent calls to
   * `MongoClient.connect`. As a result, until the first call to `MongoClient.connect`, the `ca`,
   * `cert`, `crl` and `key` fields will be undefined.
   */
  tls: boolean;
  tlsCAFile?: string;
  tlsCRLFile?: string;
  tlsCertificateKeyFile?: string;

  /**
   * @internal
   * TODO: NODE-5671 - remove internal flag
   */
  mongoLoggerOptions: MongoLoggerOptions;
  /**
   * @internal
   * TODO: NODE-5671 - remove internal flag
   */
  mongodbLogPath?: 'stderr' | 'stdout' | MongoDBLogWritable;
  timeoutMS?: number;
  /** @internal */
  __skipPingOnConnect?: boolean;
}
