import {
  type MongoCrypt,
  type MongoCryptConstructor,
  type MongoCryptOptions
} from 'mongodb-client-encryption';
import * as net from 'net';

import { deserialize, type Document, serialize } from '../bson';
import { type CommandOptions, type ProxyOptions } from '../cmap/connection';
import { kDecorateResult } from '../constants';
import { getMongoDBClientEncryption } from '../deps';
import { MongoRuntimeError } from '../error';
import { MongoClient, type MongoClientOptions } from '../mongo_client';
import { type Abortable } from '../mongo_types';
import { MongoDBCollectionNamespace } from '../utils';
import { autoSelectSocketOptions } from './client_encryption';
import * as cryptoCallbacks from './crypto_callbacks';
import { MongoCryptInvalidArgumentError } from './errors';
import { MongocryptdManager } from './mongocryptd_manager';
import {
  type CredentialProviders,
  isEmptyCredentials,
  type KMSProviders,
  refreshKMSCredentials
} from './providers';
import { type CSFLEKMSTlsOptions, StateMachine } from './state_machine';

/** @public */
export interface AutoEncryptionOptions {
  /** @internal client for metadata lookups */
  metadataClient?: MongoClient;
  /** A `MongoClient` used to fetch keys from a key vault */
  keyVaultClient?: MongoClient;
  /** The namespace where keys are stored in the key vault */
  keyVaultNamespace?: string;
  /** Configuration options that are used by specific KMS providers during key generation, encryption, and decryption. */
  kmsProviders?: KMSProviders;
  /** Configuration options for custom credential providers. */
  credentialProviders?: CredentialProviders;
  /**
   * A map of namespaces to a local JSON schema for encryption
   *
   * **NOTE**: Supplying options.schemaMap provides more security than relying on JSON Schemas obtained from the server.
   * It protects against a malicious server advertising a false JSON Schema, which could trick the client into sending decrypted data that should be encrypted.
   * Schemas supplied in the schemaMap only apply to configuring automatic encryption for Client-Side Field Level Encryption.
   * Other validation rules in the JSON schema will not be enforced by the driver and will result in an error.
   */
  schemaMap?: Document;
  /** Supply a schema for the encrypted fields in the document  */
  encryptedFieldsMap?: Document;
  /** Allows the user to bypass auto encryption, maintaining implicit decryption */
  bypassAutoEncryption?: boolean;
  /** Allows users to bypass query analysis */
  bypassQueryAnalysis?: boolean;
  /**
   * Sets the expiration time for the DEK in the cache in milliseconds. Defaults to 60000.  0 means no timeout.
   */
  keyExpirationMS?: number;
  options?: {
    /** An optional hook to catch logging messages from the underlying encryption engine */
    logger?: (level: AutoEncryptionLoggerLevel, message: string) => void;
  };
  extraOptions?: {
    /**
     * A local process the driver communicates with to determine how to encrypt values in a command.
     * Defaults to "mongodb://%2Fvar%2Fmongocryptd.sock" if domain sockets are available or "mongodb://localhost:27020" otherwise
     */
    mongocryptdURI?: string;
    /** If true, autoEncryption will not attempt to spawn a mongocryptd before connecting  */
    mongocryptdBypassSpawn?: boolean;
    /** The path to the mongocryptd executable on the system */
    mongocryptdSpawnPath?: string;
    /** Command line arguments to use when auto-spawning a mongocryptd */
    mongocryptdSpawnArgs?: string[];
    /**
     * Full path to a MongoDB Crypt shared library to be used (instead of mongocryptd).
     *
     * This needs to be the path to the file itself, not a directory.
     * It can be an absolute or relative path. If the path is relative and
     * its first component is `$ORIGIN`, it will be replaced by the directory
     * containing the mongodb-client-encryption native addon file. Otherwise,
     * the path will be interpreted relative to the current working directory.
     *
     * Currently, loading different MongoDB Crypt shared library files from different
     * MongoClients in the same process is not supported.
     *
     * If this option is provided and no MongoDB Crypt shared library could be loaded
     * from the specified location, creating the MongoClient will fail.
     *
     * If this option is not provided and `cryptSharedLibRequired` is not specified,
     * the AutoEncrypter will attempt to spawn and/or use mongocryptd according
     * to the mongocryptd-specific `extraOptions` options.
     *
     * Specifying a path prevents mongocryptd from being used as a fallback.
     *
     * Requires the MongoDB Crypt shared library, available in MongoDB 6.0 or higher.
     */
    cryptSharedLibPath?: string;
    /**
     * If specified, never use mongocryptd and instead fail when the MongoDB Crypt
     * shared library could not be loaded.
     *
     * This is always true when `cryptSharedLibPath` is specified.
     *
     * Requires the MongoDB Crypt shared library, available in MongoDB 6.0 or higher.
     */
    cryptSharedLibRequired?: boolean;
    /**
     * Search paths for a MongoDB Crypt shared library to be used (instead of mongocryptd)
     * Only for driver testing!
     * @internal
     */
    cryptSharedLibSearchPaths?: string[];
  };
  proxyOptions?: ProxyOptions;
  /** The TLS options to use connecting to the KMS provider */
  tlsOptions?: CSFLEKMSTlsOptions;
}

/**
 * @public
 *
 * Extra options related to the mongocryptd process
 * \* _Available in MongoDB 6.0 or higher._
 */
export type AutoEncryptionExtraOptions = NonNullable<AutoEncryptionOptions['extraOptions']>;

/** @public */
export const AutoEncryptionLoggerLevel = Object.freeze({
  FatalError: 0,
  Error: 1,
  Warning: 2,
  Info: 3,
  Trace: 4
} as const);

/**
 * @public
 * The level of severity of the log message
 *
 * | Value | Level |
 * |-------|-------|
 * | 0 | Fatal Error |
 * | 1 | Error |
 * | 2 | Warning |
 * | 3 | Info |
 * | 4 | Trace |
 */
export type AutoEncryptionLoggerLevel =
  (typeof AutoEncryptionLoggerLevel)[keyof typeof AutoEncryptionLoggerLevel];

/**
 * @internal An internal class to be used by the driver for auto encryption
 * **NOTE**: Not meant to be instantiated directly, this is for internal use only.
 */
export class AutoEncrypter {
  _client: MongoClient;
  _bypassEncryption: boolean;
  _keyVaultNamespace: string;
  _keyVaultClient: MongoClient;
  _metaDataClient: MongoClient;
  _proxyOptions: ProxyOptions;
  _tlsOptions: CSFLEKMSTlsOptions;
  _kmsProviders: KMSProviders;
  _bypassMongocryptdAndCryptShared: boolean;
  _contextCounter: number;
  _credentialProviders?: CredentialProviders;

  _mongocryptdManager?: MongocryptdManager;
  _mongocryptdClient?: MongoClient;

  /** @internal */
  _mongocrypt: MongoCrypt;

  /**
   * Used by devtools to enable decorating decryption results.
   *
   * When set and enabled, `decrypt` will automatically recursively
   * traverse a decrypted document and if a field has been decrypted,
   * it will mark it as decrypted.  Compass uses this to determine which
   * fields were decrypted.
   */
  [kDecorateResult] = false;

  /** @internal */
  static getMongoCrypt(): MongoCryptConstructor {
    const encryption = getMongoDBClientEncryption();
    if ('kModuleError' in encryption) {
      throw encryption.kModuleError;
    }
    return encryption.MongoCrypt;
  }

  /**
   * Create an AutoEncrypter
   *
   * **Note**: Do not instantiate this class directly. Rather, supply the relevant options to a MongoClient
   *
   * **Note**: Supplying `options.schemaMap` provides more security than relying on JSON Schemas obtained from the server.
   * It protects against a malicious server advertising a false JSON Schema, which could trick the client into sending unencrypted data that should be encrypted.
   * Schemas supplied in the schemaMap only apply to configuring automatic encryption for Client-Side Field Level Encryption.
   * Other validation rules in the JSON schema will not be enforced by the driver and will result in an error.
   *
   * @example <caption>Create an AutoEncrypter that makes use of mongocryptd</caption>
   * ```ts
   * // Enabling autoEncryption via a MongoClient using mongocryptd
   * const { MongoClient } = require('mongodb');
   * const client = new MongoClient(URL, {
   *   autoEncryption: {
   *     kmsProviders: {
   *       aws: {
   *         accessKeyId: AWS_ACCESS_KEY,
   *         secretAccessKey: AWS_SECRET_KEY
   *       }
   *     }
   *   }
   * });
   * ```
   *
   * await client.connect();
   * // From here on, the client will be encrypting / decrypting automatically
   * @example <caption>Create an AutoEncrypter that makes use of libmongocrypt's CSFLE shared library</caption>
   * ```ts
   * // Enabling autoEncryption via a MongoClient using CSFLE shared library
   * const { MongoClient } = require('mongodb');
   * const client = new MongoClient(URL, {
   *   autoEncryption: {
   *     kmsProviders: {
   *       aws: {}
   *     },
   *     extraOptions: {
   *       cryptSharedLibPath: '/path/to/local/crypt/shared/lib',
   *       cryptSharedLibRequired: true
   *     }
   *   }
   * });
   * ```
   *
   * await client.connect();
   * // From here on, the client will be encrypting / decrypting automatically
   */
  constructor(client: MongoClient, options: AutoEncryptionOptions) {
    this._client = client;
    this._bypassEncryption = options.bypassAutoEncryption === true;

    this._keyVaultNamespace = options.keyVaultNamespace || 'admin.datakeys';
    this._keyVaultClient = options.keyVaultClient || client;
    this._metaDataClient = options.metadataClient || client;
    this._proxyOptions = options.proxyOptions || {};
    this._tlsOptions = options.tlsOptions || {};
    this._kmsProviders = options.kmsProviders || {};
    this._credentialProviders = options.credentialProviders;

    if (options.credentialProviders?.aws && !isEmptyCredentials('aws', this._kmsProviders)) {
      throw new MongoCryptInvalidArgumentError(
        'Can only provide a custom AWS credential provider when the state machine is configured for automatic AWS credential fetching'
      );
    }

    const mongoCryptOptions: MongoCryptOptions = {
      enableMultipleCollinfo: true,
      cryptoCallbacks
    };
    if (options.schemaMap) {
      mongoCryptOptions.schemaMap = Buffer.isBuffer(options.schemaMap)
        ? options.schemaMap
        : (serialize(options.schemaMap) as Buffer);
    }

    if (options.encryptedFieldsMap) {
      mongoCryptOptions.encryptedFieldsMap = Buffer.isBuffer(options.encryptedFieldsMap)
        ? options.encryptedFieldsMap
        : (serialize(options.encryptedFieldsMap) as Buffer);
    }

    mongoCryptOptions.kmsProviders = !Buffer.isBuffer(this._kmsProviders)
      ? (serialize(this._kmsProviders) as Buffer)
      : this._kmsProviders;

    if (options.options?.logger) {
      mongoCryptOptions.logger = options.options.logger;
    }

    if (options.extraOptions && options.extraOptions.cryptSharedLibPath) {
      mongoCryptOptions.cryptSharedLibPath = options.extraOptions.cryptSharedLibPath;
    }

    if (options.bypassQueryAnalysis) {
      mongoCryptOptions.bypassQueryAnalysis = options.bypassQueryAnalysis;
    }

    if (options.keyExpirationMS != null) {
      mongoCryptOptions.keyExpirationMS = options.keyExpirationMS;
    }

    this._bypassMongocryptdAndCryptShared = this._bypassEncryption || !!options.bypassQueryAnalysis;

    if (options.extraOptions && options.extraOptions.cryptSharedLibSearchPaths) {
      // Only for driver testing
      mongoCryptOptions.cryptSharedLibSearchPaths = options.extraOptions.cryptSharedLibSearchPaths;
    } else if (!this._bypassMongocryptdAndCryptShared) {
      mongoCryptOptions.cryptSharedLibSearchPaths = ['$SYSTEM'];
    }

    const MongoCrypt = AutoEncrypter.getMongoCrypt();
    this._mongocrypt = new MongoCrypt(mongoCryptOptions);
    this._contextCounter = 0;

    if (
      options.extraOptions &&
      options.extraOptions.cryptSharedLibRequired &&
      !this.cryptSharedLibVersionInfo
    ) {
      throw new MongoCryptInvalidArgumentError(
        '`cryptSharedLibRequired` set but no crypt_shared library loaded'
      );
    }

    // Only instantiate mongocryptd manager/client once we know for sure
    // that we are not using the CSFLE shared library.
    if (!this._bypassMongocryptdAndCryptShared && !this.cryptSharedLibVersionInfo) {
      this._mongocryptdManager = new MongocryptdManager(options.extraOptions);
      const clientOptions: MongoClientOptions = {
        serverSelectionTimeoutMS: 10000
      };

      if (
        (options.extraOptions == null || typeof options.extraOptions.mongocryptdURI !== 'string') &&
        !net.getDefaultAutoSelectFamily
      ) {
        // Only set family if autoSelectFamily options are not supported.
        clientOptions.family = 4;
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: TS complains as this always returns true on versions where it is present.
      if (net.getDefaultAutoSelectFamily) {
        // AutoEncrypter is made inside of MongoClient constructor while options are being parsed,
        // we do not have access to the options that are in progress.
        // TODO(NODE-6449): AutoEncrypter does not use client options for autoSelectFamily
        Object.assign(clientOptions, autoSelectSocketOptions(this._client.s?.options ?? {}));
      }

      this._mongocryptdClient = new MongoClient(this._mongocryptdManager.uri, clientOptions);
    }
  }

  /**
   * Initializes the auto encrypter by spawning a mongocryptd and connecting to it.
   *
   * This function is a no-op when bypassSpawn is set or the crypt shared library is used.
   */
  async init(): Promise<MongoClient | void> {
    if (this._bypassMongocryptdAndCryptShared || this.cryptSharedLibVersionInfo) {
      return;
    }
    if (!this._mongocryptdManager) {
      throw new MongoRuntimeError(
        'Reached impossible state: mongocryptdManager is undefined when neither bypassSpawn nor the shared lib are specified.'
      );
    }
    if (!this._mongocryptdClient) {
      throw new MongoRuntimeError(
        'Reached impossible state: mongocryptdClient is undefined when neither bypassSpawn nor the shared lib are specified.'
      );
    }

    if (!this._mongocryptdManager.bypassSpawn) {
      await this._mongocryptdManager.spawn();
    }

    try {
      const client = await this._mongocryptdClient.connect();
      return client;
    } catch (error) {
      throw new MongoRuntimeError(
        'Unable to connect to `mongocryptd`, please make sure it is running or in your PATH for auto-spawn',
        { cause: error }
      );
    }
  }

  /**
   * Cleans up the `_mongocryptdClient`, if present.
   */
  async close(): Promise<void> {
    await this._mongocryptdClient?.close();
  }

  /**
   * Encrypt a command for a given namespace.
   */
  async encrypt(
    ns: string,
    cmd: Document,
    options: CommandOptions & Abortable = {}
  ): Promise<Document | Uint8Array> {
    options.signal?.throwIfAborted();

    if (this._bypassEncryption) {
      // If `bypassAutoEncryption` has been specified, don't encrypt
      return cmd;
    }

    const commandBuffer = Buffer.isBuffer(cmd) ? cmd : serialize(cmd, options);
    const context = this._mongocrypt.makeEncryptionContext(
      MongoDBCollectionNamespace.fromString(ns).db,
      commandBuffer
    );

    context.id = this._contextCounter++;
    context.ns = ns;
    context.document = cmd;

    const stateMachine = new StateMachine({
      promoteValues: false,
      promoteLongs: false,
      proxyOptions: this._proxyOptions,
      tlsOptions: this._tlsOptions,
      socketOptions: autoSelectSocketOptions(this._client.s.options)
    });

    return deserialize(await stateMachine.execute(this, context, options), {
      promoteValues: false,
      promoteLongs: false
    });
  }

  /**
   * Decrypt a command response
   */
  async decrypt(
    response: Uint8Array,
    options: CommandOptions & Abortable = {}
  ): Promise<Uint8Array> {
    options.signal?.throwIfAborted();

    const context = this._mongocrypt.makeDecryptionContext(response);

    context.id = this._contextCounter++;

    const stateMachine = new StateMachine({
      ...options,
      proxyOptions: this._proxyOptions,
      tlsOptions: this._tlsOptions,
      socketOptions: autoSelectSocketOptions(this._client.s.options)
    });

    return await stateMachine.execute(this, context, options);
  }

  /**
   * Ask the user for KMS credentials.
   *
   * This returns anything that looks like the kmsProviders original input
   * option. It can be empty, and any provider specified here will override
   * the original ones.
   */
  async askForKMSCredentials(): Promise<KMSProviders> {
    return await refreshKMSCredentials(this._kmsProviders, this._credentialProviders);
  }

  /**
   * Return the current libmongocrypt's CSFLE shared library version
   * as `{ version: bigint, versionStr: string }`, or `null` if no CSFLE
   * shared library was loaded.
   */
  get cryptSharedLibVersionInfo(): { version: bigint; versionStr: string } | null {
    return this._mongocrypt.cryptSharedLibVersionInfo;
  }

  static get libmongocryptVersion(): string {
    return AutoEncrypter.getMongoCrypt().libmongocryptVersion;
  }
}
