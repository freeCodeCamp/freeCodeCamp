import type {
  ExplicitEncryptionContextOptions,
  MongoCrypt,
  MongoCryptConstructor,
  MongoCryptOptions
} from 'mongodb-client-encryption';

import {
  type Binary,
  deserialize,
  type Document,
  type Int32,
  type Long,
  serialize,
  type UUID
} from '../bson';
import { type AnyBulkWriteOperation, type BulkWriteResult } from '../bulk/common';
import { type ProxyOptions } from '../cmap/connection';
import { type Collection } from '../collection';
import { type FindCursor } from '../cursor/find_cursor';
import { type Db } from '../db';
import { getMongoDBClientEncryption } from '../deps';
import { type MongoClient, type MongoClientOptions } from '../mongo_client';
import { type Filter, type WithId } from '../mongo_types';
import { type CreateCollectionOptions } from '../operations/create_collection';
import { type DeleteResult } from '../operations/delete';
import { type CSOTTimeoutContext, TimeoutContext } from '../timeout';
import { MongoDBCollectionNamespace, resolveTimeoutOptions } from '../utils';
import * as cryptoCallbacks from './crypto_callbacks';
import {
  MongoCryptCreateDataKeyError,
  MongoCryptCreateEncryptedCollectionError,
  MongoCryptInvalidArgumentError
} from './errors';
import {
  type ClientEncryptionDataKeyProvider,
  type CredentialProviders,
  isEmptyCredentials,
  type KMSProviders,
  refreshKMSCredentials
} from './providers/index';
import {
  type ClientEncryptionSocketOptions,
  type CSFLEKMSTlsOptions,
  StateMachine
} from './state_machine';

/**
 * @public
 * The schema for a DataKey in the key vault collection.
 */
export interface DataKey {
  _id: UUID;
  version?: number;
  keyAltNames?: string[];
  keyMaterial: Binary;
  creationDate: Date;
  updateDate: Date;
  status: number;
  masterKey: Document;
}

/**
 * @public
 * The public interface for explicit in-use encryption
 */
export class ClientEncryption {
  /** @internal */
  _client: MongoClient;
  /** @internal */
  _keyVaultNamespace: string;
  /** @internal */
  _keyVaultClient: MongoClient;
  /** @internal */
  _proxyOptions: ProxyOptions;
  /** @internal */
  _tlsOptions: CSFLEKMSTlsOptions;
  /** @internal */
  _kmsProviders: KMSProviders;
  /** @internal */
  _timeoutMS?: number;

  /** @internal */
  _mongoCrypt: MongoCrypt;

  /** @internal */
  _credentialProviders?: CredentialProviders;

  /** @internal */
  static getMongoCrypt(): MongoCryptConstructor {
    const encryption = getMongoDBClientEncryption();
    if ('kModuleError' in encryption) {
      throw encryption.kModuleError;
    }
    return encryption.MongoCrypt;
  }

  /**
   * Create a new encryption instance
   *
   * @example
   * ```ts
   * new ClientEncryption(mongoClient, {
   *   keyVaultNamespace: 'client.encryption',
   *   kmsProviders: {
   *     local: {
   *       key: masterKey // The master key used for encryption/decryption. A 96-byte long Buffer
   *     }
   *   }
   * });
   * ```
   *
   * @example
   * ```ts
   * new ClientEncryption(mongoClient, {
   *   keyVaultNamespace: 'client.encryption',
   *   kmsProviders: {
   *     aws: {
   *       accessKeyId: AWS_ACCESS_KEY,
   *       secretAccessKey: AWS_SECRET_KEY
   *     }
   *   }
   * });
   * ```
   */
  constructor(client: MongoClient, options: ClientEncryptionOptions) {
    this._client = client;
    this._proxyOptions = options.proxyOptions ?? {};
    this._tlsOptions = options.tlsOptions ?? {};
    this._kmsProviders = options.kmsProviders || {};
    const { timeoutMS } = resolveTimeoutOptions(client, options);
    this._timeoutMS = timeoutMS;
    this._credentialProviders = options.credentialProviders;

    if (options.credentialProviders?.aws && !isEmptyCredentials('aws', this._kmsProviders)) {
      throw new MongoCryptInvalidArgumentError(
        'Can only provide a custom AWS credential provider when the state machine is configured for automatic AWS credential fetching'
      );
    }

    if (options.keyVaultNamespace == null) {
      throw new MongoCryptInvalidArgumentError('Missing required option `keyVaultNamespace`');
    }

    const mongoCryptOptions: MongoCryptOptions = {
      ...options,
      cryptoCallbacks,
      kmsProviders: !Buffer.isBuffer(this._kmsProviders)
        ? (serialize(this._kmsProviders) as Buffer)
        : this._kmsProviders
    };

    this._keyVaultNamespace = options.keyVaultNamespace;
    this._keyVaultClient = options.keyVaultClient || client;
    const MongoCrypt = ClientEncryption.getMongoCrypt();
    this._mongoCrypt = new MongoCrypt(mongoCryptOptions);
  }

  /**
   * Creates a data key used for explicit encryption and inserts it into the key vault namespace
   *
   * @example
   * ```ts
   * // Using async/await to create a local key
   * const dataKeyId = await clientEncryption.createDataKey('local');
   * ```
   *
   * @example
   * ```ts
   * // Using async/await to create an aws key
   * const dataKeyId = await clientEncryption.createDataKey('aws', {
   *   masterKey: {
   *     region: 'us-east-1',
   *     key: 'xxxxxxxxxxxxxx' // CMK ARN here
   *   }
   * });
   * ```
   *
   * @example
   * ```ts
   * // Using async/await to create an aws key with a keyAltName
   * const dataKeyId = await clientEncryption.createDataKey('aws', {
   *   masterKey: {
   *     region: 'us-east-1',
   *     key: 'xxxxxxxxxxxxxx' // CMK ARN here
   *   },
   *   keyAltNames: [ 'mySpecialKey' ]
   * });
   * ```
   */
  async createDataKey(
    provider: ClientEncryptionDataKeyProvider,
    options: ClientEncryptionCreateDataKeyProviderOptions = {}
  ): Promise<UUID> {
    if (options.keyAltNames && !Array.isArray(options.keyAltNames)) {
      throw new MongoCryptInvalidArgumentError(
        `Option "keyAltNames" must be an array of strings, but was of type ${typeof options.keyAltNames}.`
      );
    }

    let keyAltNames = undefined;
    if (options.keyAltNames && options.keyAltNames.length > 0) {
      keyAltNames = options.keyAltNames.map((keyAltName, i) => {
        if (typeof keyAltName !== 'string') {
          throw new MongoCryptInvalidArgumentError(
            `Option "keyAltNames" must be an array of strings, but item at index ${i} was of type ${typeof keyAltName}`
          );
        }

        return serialize({ keyAltName });
      });
    }

    let keyMaterial = undefined;
    if (options.keyMaterial) {
      keyMaterial = serialize({ keyMaterial: options.keyMaterial });
    }

    const dataKeyBson = serialize({
      provider,
      ...options.masterKey
    });

    const context = this._mongoCrypt.makeDataKeyContext(dataKeyBson, {
      keyAltNames,
      keyMaterial
    });

    const stateMachine = new StateMachine({
      proxyOptions: this._proxyOptions,
      tlsOptions: this._tlsOptions,
      socketOptions: autoSelectSocketOptions(this._client.s.options)
    });

    const timeoutContext =
      options?.timeoutContext ??
      TimeoutContext.create(resolveTimeoutOptions(this._client, { timeoutMS: this._timeoutMS }));

    const dataKey = deserialize(
      await stateMachine.execute(this, context, { timeoutContext })
    ) as DataKey;

    const { db: dbName, collection: collectionName } = MongoDBCollectionNamespace.fromString(
      this._keyVaultNamespace
    );

    const { insertedId } = await this._keyVaultClient
      .db(dbName)
      .collection<DataKey>(collectionName)
      .insertOne(dataKey, {
        writeConcern: { w: 'majority' },
        timeoutMS: timeoutContext?.csotEnabled()
          ? timeoutContext?.getRemainingTimeMSOrThrow()
          : undefined
      });

    return insertedId;
  }

  /**
   * Searches the keyvault for any data keys matching the provided filter.  If there are matches, rewrapManyDataKey then attempts to re-wrap the data keys using the provided options.
   *
   * If no matches are found, then no bulk write is performed.
   *
   * @example
   * ```ts
   * // rewrapping all data data keys (using a filter that matches all documents)
   * const filter = {};
   *
   * const result = await clientEncryption.rewrapManyDataKey(filter);
   * if (result.bulkWriteResult != null) {
   *  // keys were re-wrapped, results will be available in the bulkWrite object.
   * }
   * ```
   *
   * @example
   * ```ts
   * // attempting to rewrap all data keys with no matches
   * const filter = { _id: new Binary() } // assume _id matches no documents in the database
   * const result = await clientEncryption.rewrapManyDataKey(filter);
   *
   * if (result.bulkWriteResult == null) {
   *  // no keys matched, `bulkWriteResult` does not exist on the result object
   * }
   * ```
   */
  async rewrapManyDataKey(
    filter: Filter<DataKey>,
    options: ClientEncryptionRewrapManyDataKeyProviderOptions
  ): Promise<{ bulkWriteResult?: BulkWriteResult }> {
    let keyEncryptionKeyBson = undefined;
    if (options) {
      const keyEncryptionKey = Object.assign({ provider: options.provider }, options.masterKey);
      keyEncryptionKeyBson = serialize(keyEncryptionKey);
    }
    const filterBson = serialize(filter);
    const context = this._mongoCrypt.makeRewrapManyDataKeyContext(filterBson, keyEncryptionKeyBson);
    const stateMachine = new StateMachine({
      proxyOptions: this._proxyOptions,
      tlsOptions: this._tlsOptions,
      socketOptions: autoSelectSocketOptions(this._client.s.options)
    });

    const timeoutContext = TimeoutContext.create(
      resolveTimeoutOptions(this._client, { timeoutMS: this._timeoutMS })
    );

    const { v: dataKeys } = deserialize(
      await stateMachine.execute(this, context, { timeoutContext })
    );
    if (dataKeys.length === 0) {
      return {};
    }

    const { db: dbName, collection: collectionName } = MongoDBCollectionNamespace.fromString(
      this._keyVaultNamespace
    );

    const replacements = dataKeys.map(
      (key: DataKey): AnyBulkWriteOperation<DataKey> => ({
        updateOne: {
          filter: { _id: key._id },
          update: {
            $set: {
              masterKey: key.masterKey,
              keyMaterial: key.keyMaterial
            },
            $currentDate: {
              updateDate: true
            }
          }
        }
      })
    );

    const result = await this._keyVaultClient
      .db(dbName)
      .collection<DataKey>(collectionName)
      .bulkWrite(replacements, {
        writeConcern: { w: 'majority' },
        timeoutMS: timeoutContext.csotEnabled() ? timeoutContext?.remainingTimeMS : undefined
      });

    return { bulkWriteResult: result };
  }

  /**
   * Deletes the key with the provided id from the keyvault, if it exists.
   *
   * @example
   * ```ts
   * // delete a key by _id
   * const id = new Binary(); // id is a bson binary subtype 4 object
   * const { deletedCount } = await clientEncryption.deleteKey(id);
   *
   * if (deletedCount != null && deletedCount > 0) {
   *   // successful deletion
   * }
   * ```
   *
   */
  async deleteKey(_id: Binary): Promise<DeleteResult> {
    const { db: dbName, collection: collectionName } = MongoDBCollectionNamespace.fromString(
      this._keyVaultNamespace
    );

    return await this._keyVaultClient
      .db(dbName)
      .collection<DataKey>(collectionName)
      .deleteOne({ _id }, { writeConcern: { w: 'majority' }, timeoutMS: this._timeoutMS });
  }

  /**
   * Finds all the keys currently stored in the keyvault.
   *
   * This method will not throw.
   *
   * @returns a FindCursor over all keys in the keyvault.
   * @example
   * ```ts
   * // fetching all keys
   * const keys = await clientEncryption.getKeys().toArray();
   * ```
   */
  getKeys(): FindCursor<DataKey> {
    const { db: dbName, collection: collectionName } = MongoDBCollectionNamespace.fromString(
      this._keyVaultNamespace
    );

    return this._keyVaultClient
      .db(dbName)
      .collection<DataKey>(collectionName)
      .find({}, { readConcern: { level: 'majority' }, timeoutMS: this._timeoutMS });
  }

  /**
   * Finds a key in the keyvault with the specified _id.
   *
   * Returns a promise that either resolves to a {@link DataKey} if a document matches the key or null if no documents
   * match the id.  The promise rejects with an error if an error is thrown.
   * @example
   * ```ts
   * // getting a key by id
   * const id = new Binary(); // id is a bson binary subtype 4 object
   * const key = await clientEncryption.getKey(id);
   * if (!key) {
   *  // key is null if there was no matching key
   * }
   * ```
   */
  async getKey(_id: Binary): Promise<DataKey | null> {
    const { db: dbName, collection: collectionName } = MongoDBCollectionNamespace.fromString(
      this._keyVaultNamespace
    );

    return await this._keyVaultClient
      .db(dbName)
      .collection<DataKey>(collectionName)
      .findOne({ _id }, { readConcern: { level: 'majority' }, timeoutMS: this._timeoutMS });
  }

  /**
   * Finds a key in the keyvault which has the specified keyAltName.
   *
   * @param keyAltName - a keyAltName to search for a key
   * @returns Returns a promise that either resolves to a {@link DataKey} if a document matches the key or null if no documents
   * match the keyAltName.  The promise rejects with an error if an error is thrown.
   * @example
   * ```ts
   * // get a key by alt name
   * const keyAltName = 'keyAltName';
   * const key = await clientEncryption.getKeyByAltName(keyAltName);
   * if (!key) {
   *  // key is null if there is no matching key
   * }
   * ```
   */
  async getKeyByAltName(keyAltName: string): Promise<WithId<DataKey> | null> {
    const { db: dbName, collection: collectionName } = MongoDBCollectionNamespace.fromString(
      this._keyVaultNamespace
    );

    return await this._keyVaultClient
      .db(dbName)
      .collection<DataKey>(collectionName)
      .findOne(
        { keyAltNames: keyAltName },
        { readConcern: { level: 'majority' }, timeoutMS: this._timeoutMS }
      );
  }

  /**
   * Adds a keyAltName to a key identified by the provided _id.
   *
   * This method resolves to/returns the *old* key value (prior to adding the new altKeyName).
   *
   * @param _id - The id of the document to update.
   * @param keyAltName - a keyAltName to search for a key
   * @returns Returns a promise that either resolves to a {@link DataKey} if a document matches the key or null if no documents
   * match the id.  The promise rejects with an error if an error is thrown.
   * @example
   * ```ts
   * // adding an keyAltName to a data key
   * const id = new Binary();  // id is a bson binary subtype 4 object
   * const keyAltName = 'keyAltName';
   * const oldKey = await clientEncryption.addKeyAltName(id, keyAltName);
   * if (!oldKey) {
   *  // null is returned if there is no matching document with an id matching the supplied id
   * }
   * ```
   */
  async addKeyAltName(_id: Binary, keyAltName: string): Promise<WithId<DataKey> | null> {
    const { db: dbName, collection: collectionName } = MongoDBCollectionNamespace.fromString(
      this._keyVaultNamespace
    );

    const value = await this._keyVaultClient
      .db(dbName)
      .collection<DataKey>(collectionName)
      .findOneAndUpdate(
        { _id },
        { $addToSet: { keyAltNames: keyAltName } },
        { writeConcern: { w: 'majority' }, returnDocument: 'before', timeoutMS: this._timeoutMS }
      );

    return value;
  }

  /**
   * Adds a keyAltName to a key identified by the provided _id.
   *
   * This method resolves to/returns the *old* key value (prior to removing the new altKeyName).
   *
   * If the removed keyAltName is the last keyAltName for that key, the `altKeyNames` property is unset from the document.
   *
   * @param _id - The id of the document to update.
   * @param keyAltName - a keyAltName to search for a key
   * @returns Returns a promise that either resolves to a {@link DataKey} if a document matches the key or null if no documents
   * match the id.  The promise rejects with an error if an error is thrown.
   * @example
   * ```ts
   * // removing a key alt name from a data key
   * const id = new Binary();  // id is a bson binary subtype 4 object
   * const keyAltName = 'keyAltName';
   * const oldKey = await clientEncryption.removeKeyAltName(id, keyAltName);
   *
   * if (!oldKey) {
   *  // null is returned if there is no matching document with an id matching the supplied id
   * }
   * ```
   */
  async removeKeyAltName(_id: Binary, keyAltName: string): Promise<WithId<DataKey> | null> {
    const { db: dbName, collection: collectionName } = MongoDBCollectionNamespace.fromString(
      this._keyVaultNamespace
    );

    const pipeline = [
      {
        $set: {
          keyAltNames: {
            $cond: [
              {
                $eq: ['$keyAltNames', [keyAltName]]
              },
              '$$REMOVE',
              {
                $filter: {
                  input: '$keyAltNames',
                  cond: {
                    $ne: ['$$this', keyAltName]
                  }
                }
              }
            ]
          }
        }
      }
    ];

    const value = await this._keyVaultClient
      .db(dbName)
      .collection<DataKey>(collectionName)
      .findOneAndUpdate({ _id }, pipeline, {
        writeConcern: { w: 'majority' },
        returnDocument: 'before',
        timeoutMS: this._timeoutMS
      });

    return value;
  }

  /**
   * A convenience method for creating an encrypted collection.
   * This method will create data keys for any encryptedFields that do not have a `keyId` defined
   * and then create a new collection with the full set of encryptedFields.
   *
   * @param db - A Node.js driver Db object with which to create the collection
   * @param name - The name of the collection to be created
   * @param options - Options for createDataKey and for createCollection
   * @returns created collection and generated encryptedFields
   * @throws MongoCryptCreateDataKeyError - If part way through the process a createDataKey invocation fails, an error will be rejected that has the partial `encryptedFields` that were created.
   * @throws MongoCryptCreateEncryptedCollectionError - If creating the collection fails, an error will be rejected that has the entire `encryptedFields` that were created.
   */
  async createEncryptedCollection<TSchema extends Document = Document>(
    db: Db,
    name: string,
    options: {
      provider: ClientEncryptionDataKeyProvider;
      createCollectionOptions: Omit<CreateCollectionOptions, 'encryptedFields'> & {
        encryptedFields: Document;
      };
      masterKey?: AWSEncryptionKeyOptions | AzureEncryptionKeyOptions | GCPEncryptionKeyOptions;
    }
  ): Promise<{ collection: Collection<TSchema>; encryptedFields: Document }> {
    const {
      provider,
      masterKey,
      createCollectionOptions: {
        encryptedFields: { ...encryptedFields },
        ...createCollectionOptions
      }
    } = options;

    const timeoutContext =
      this._timeoutMS != null
        ? TimeoutContext.create(resolveTimeoutOptions(this._client, { timeoutMS: this._timeoutMS }))
        : undefined;

    if (Array.isArray(encryptedFields.fields)) {
      const createDataKeyPromises = encryptedFields.fields.map(async field =>
        field == null || typeof field !== 'object' || field.keyId != null
          ? field
          : {
              ...field,
              keyId: await this.createDataKey(provider, {
                masterKey,
                // clone the timeoutContext
                // in order to avoid sharing the same timeout for server selection and connection checkout across different concurrent operations
                timeoutContext: timeoutContext?.csotEnabled() ? timeoutContext?.clone() : undefined
              })
            }
      );
      const createDataKeyResolutions = await Promise.allSettled(createDataKeyPromises);

      encryptedFields.fields = createDataKeyResolutions.map((resolution, index) =>
        resolution.status === 'fulfilled' ? resolution.value : encryptedFields.fields[index]
      );

      const rejection = createDataKeyResolutions.find(
        (result): result is PromiseRejectedResult => result.status === 'rejected'
      );
      if (rejection != null) {
        throw new MongoCryptCreateDataKeyError(encryptedFields, { cause: rejection.reason });
      }
    }

    try {
      const collection = await db.createCollection<TSchema>(name, {
        ...createCollectionOptions,
        encryptedFields,
        timeoutMS: timeoutContext?.csotEnabled()
          ? timeoutContext?.getRemainingTimeMSOrThrow()
          : undefined
      });
      return { collection, encryptedFields };
    } catch (cause) {
      throw new MongoCryptCreateEncryptedCollectionError(encryptedFields, { cause });
    }
  }

  /**
   * Explicitly encrypt a provided value. Note that either `options.keyId` or `options.keyAltName` must
   * be specified. Specifying both `options.keyId` and `options.keyAltName` is considered an error.
   *
   * @param value - The value that you wish to serialize. Must be of a type that can be serialized into BSON
   * @param options -
   * @returns a Promise that either resolves with the encrypted value, or rejects with an error.
   *
   * @example
   * ```ts
   * // Encryption with async/await api
   * async function encryptMyData(value) {
   *   const keyId = await clientEncryption.createDataKey('local');
   *   return clientEncryption.encrypt(value, { keyId, algorithm: 'AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic' });
   * }
   * ```
   *
   * @example
   * ```ts
   * // Encryption using a keyAltName
   * async function encryptMyData(value) {
   *   await clientEncryption.createDataKey('local', { keyAltNames: 'mySpecialKey' });
   *   return clientEncryption.encrypt(value, { keyAltName: 'mySpecialKey', algorithm: 'AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic' });
   * }
   * ```
   */
  async encrypt(value: unknown, options: ClientEncryptionEncryptOptions): Promise<Binary> {
    return await this._encrypt(value, false, options);
  }

  /**
   * Encrypts a Match Expression or Aggregate Expression to query a range index.
   *
   * Only supported when queryType is "range" and algorithm is "Range".
   *
   * @param expression - a BSON document of one of the following forms:
   *  1. A Match Expression of this form:
   *      `{$and: [{<field>: {$gt: <value1>}}, {<field>: {$lt: <value2> }}]}`
   *  2. An Aggregate Expression of this form:
   *      `{$and: [{$gt: [<fieldpath>, <value1>]}, {$lt: [<fieldpath>, <value2>]}]}`
   *
   *    `$gt` may also be `$gte`. `$lt` may also be `$lte`.
   *
   * @param options -
   * @returns Returns a Promise that either resolves with the encrypted value or rejects with an error.
   */
  async encryptExpression(
    expression: Document,
    options: ClientEncryptionEncryptOptions
  ): Promise<Binary> {
    return await this._encrypt(expression, true, options);
  }

  /**
   * Explicitly decrypt a provided encrypted value
   *
   * @param value - An encrypted value
   * @returns a Promise that either resolves with the decrypted value, or rejects with an error
   *
   * @example
   * ```ts
   * // Decrypting value with async/await API
   * async function decryptMyValue(value) {
   *   return clientEncryption.decrypt(value);
   * }
   * ```
   */
  async decrypt<T = any>(value: Binary): Promise<T> {
    const valueBuffer = serialize({ v: value });
    const context = this._mongoCrypt.makeExplicitDecryptionContext(valueBuffer);

    const stateMachine = new StateMachine({
      proxyOptions: this._proxyOptions,
      tlsOptions: this._tlsOptions,
      socketOptions: autoSelectSocketOptions(this._client.s.options)
    });

    const timeoutContext =
      this._timeoutMS != null
        ? TimeoutContext.create(resolveTimeoutOptions(this._client, { timeoutMS: this._timeoutMS }))
        : undefined;

    const { v } = deserialize(await stateMachine.execute(this, context, { timeoutContext }));

    return v;
  }

  /**
   * @internal
   * Ask the user for KMS credentials.
   *
   * This returns anything that looks like the kmsProviders original input
   * option. It can be empty, and any provider specified here will override
   * the original ones.
   */
  async askForKMSCredentials(): Promise<KMSProviders> {
    return await refreshKMSCredentials(this._kmsProviders, this._credentialProviders);
  }

  static get libmongocryptVersion() {
    return ClientEncryption.getMongoCrypt().libmongocryptVersion;
  }

  /**
   * @internal
   * A helper that perform explicit encryption of values and expressions.
   * Explicitly encrypt a provided value. Note that either `options.keyId` or `options.keyAltName` must
   * be specified. Specifying both `options.keyId` and `options.keyAltName` is considered an error.
   *
   * @param value - The value that you wish to encrypt. Must be of a type that can be serialized into BSON
   * @param expressionMode - a boolean that indicates whether or not to encrypt the value as an expression
   * @param options - options to pass to encrypt
   * @returns the raw result of the call to stateMachine.execute().  When expressionMode is set to true, the return
   *          value will be a bson document.  When false, the value will be a BSON Binary.
   *
   */
  private async _encrypt(
    value: unknown,
    expressionMode: boolean,
    options: ClientEncryptionEncryptOptions
  ): Promise<Binary> {
    const { algorithm, keyId, keyAltName, contentionFactor, queryType, rangeOptions, textOptions } =
      options;
    const contextOptions: ExplicitEncryptionContextOptions = {
      expressionMode,
      algorithm
    };
    if (keyId) {
      contextOptions.keyId = keyId.buffer;
    }
    if (keyAltName) {
      if (keyId) {
        throw new MongoCryptInvalidArgumentError(
          `"options" cannot contain both "keyId" and "keyAltName"`
        );
      }
      if (typeof keyAltName !== 'string') {
        throw new MongoCryptInvalidArgumentError(
          `"options.keyAltName" must be of type string, but was of type ${typeof keyAltName}`
        );
      }

      contextOptions.keyAltName = serialize({ keyAltName });
    }
    if (typeof contentionFactor === 'number' || typeof contentionFactor === 'bigint') {
      contextOptions.contentionFactor = contentionFactor;
    }
    if (typeof queryType === 'string') {
      contextOptions.queryType = queryType;
    }

    if (typeof rangeOptions === 'object') {
      contextOptions.rangeOptions = serialize(rangeOptions);
    }

    if (typeof textOptions === 'object') {
      contextOptions.textOptions = serialize(textOptions);
    }

    const valueBuffer = serialize({ v: value });
    const stateMachine = new StateMachine({
      proxyOptions: this._proxyOptions,
      tlsOptions: this._tlsOptions,
      socketOptions: autoSelectSocketOptions(this._client.s.options)
    });
    const context = this._mongoCrypt.makeExplicitEncryptionContext(valueBuffer, contextOptions);

    const timeoutContext =
      this._timeoutMS != null
        ? TimeoutContext.create(resolveTimeoutOptions(this._client, { timeoutMS: this._timeoutMS }))
        : undefined;
    const { v } = deserialize(await stateMachine.execute(this, context, { timeoutContext }));
    return v;
  }
}

/**
 * @public
 * Options to provide when encrypting data.
 */
export interface ClientEncryptionEncryptOptions {
  /**
   * The algorithm to use for encryption.
   */
  algorithm:
    | 'AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic'
    | 'AEAD_AES_256_CBC_HMAC_SHA_512-Random'
    | 'Indexed'
    | 'Unindexed'
    | 'Range'
    | 'TextPreview';

  /**
   * The id of the Binary dataKey to use for encryption
   */
  keyId?: Binary;

  /**
   * A unique string name corresponding to an already existing dataKey.
   */
  keyAltName?: string;

  /** The contention factor. */
  contentionFactor?: bigint | number;

  /**
   * The query type.
   */
  queryType?: 'equality' | 'range' | 'prefixPreview' | 'suffixPreview' | 'substringPreview';

  /** The index options for a Queryable Encryption field supporting "range" queries.*/
  rangeOptions?: RangeOptions;

  /**
   * Options for a Queryable Encryption field supporting text queries.  Only valid when `algorithm` is `TextPreview`.
   *
   * @experimental Public Technical Preview: `textPreview` is an experimental feature and may break at any time.
   */
  textOptions?: TextQueryOptions;
}

/**
 * Options for a Queryable Encryption field supporting text queries.
 *
 * @public
 * @experimental Public Technical Preview: `textPreview` is an experimental feature and may break at any time.
 */
export interface TextQueryOptions {
  /** Indicates that text indexes for this field are case sensitive */
  caseSensitive: boolean;
  /** Indicates that text indexes for this field are diacritic sensitive. */
  diacriticSensitive: boolean;

  prefix?: {
    /** The maximum allowed query length. */
    strMaxQueryLength: Int32 | number;
    /** The minimum allowed query length. */
    strMinQueryLength: Int32 | number;
  };

  suffix?: {
    /** The maximum allowed query length. */
    strMaxQueryLength: Int32 | number;
    /** The minimum allowed query length. */
    strMinQueryLength: Int32 | number;
  };

  substring?: {
    /** The maximum allowed length to insert. */
    strMaxLength: Int32 | number;
    /** The maximum allowed query length. */
    strMaxQueryLength: Int32 | number;
    /** The minimum allowed query length. */
    strMinQueryLength: Int32 | number;
  };
}

/**
 * @public
 * @experimental
 */
export interface ClientEncryptionRewrapManyDataKeyProviderOptions {
  provider: ClientEncryptionDataKeyProvider;
  masterKey?:
    | AWSEncryptionKeyOptions
    | AzureEncryptionKeyOptions
    | GCPEncryptionKeyOptions
    | KMIPEncryptionKeyOptions
    | undefined;
}

/**
 * @public
 * Additional settings to provide when creating a new `ClientEncryption` instance.
 */
export interface ClientEncryptionOptions {
  /**
   * The namespace of the key vault, used to store encryption keys
   */
  keyVaultNamespace: string;

  /**
   * A MongoClient used to fetch keys from a key vault. Defaults to client.
   */
  keyVaultClient?: MongoClient | undefined;

  /**
   * Options for specific KMS providers to use
   */
  kmsProviders?: KMSProviders;

  /**
   * Options for user provided custom credential providers.
   */
  credentialProviders?: CredentialProviders;

  /**
   * Options for specifying a Socks5 proxy to use for connecting to the KMS.
   */
  proxyOptions?: ProxyOptions;

  /**
   * TLS options for kms providers to use.
   */
  tlsOptions?: CSFLEKMSTlsOptions;

  /**
   * Sets the expiration time for the DEK in the cache in milliseconds. Defaults to 60000. 0 means no timeout.
   */
  keyExpirationMS?: number;

  /**
   * @experimental
   *
   * The timeout setting to be used for all the operations on ClientEncryption.
   *
   * When provided, `timeoutMS` is used as the timeout for each operation executed on
   * the ClientEncryption object.  For example:
   *
   * ```typescript
   * const clientEncryption = new ClientEncryption(client, {
   *  timeoutMS: 1_000
   *  kmsProviders: { local: { key: '<KEY>' } }
   * });
   *
   * // `1_000` is used as the timeout for createDataKey call
   * await clientEncryption.createDataKey('local');
   * ```
   *
   * If `timeoutMS` is configured on the provided client, the client's `timeoutMS` value
   * will be used unless `timeoutMS` is also provided as a client encryption option.
   *
   * ```typescript
   * const client = new MongoClient('<uri>', { timeoutMS: 2_000 });
   *
   * // timeoutMS is set to 1_000 on clientEncryption
   * const clientEncryption = new ClientEncryption(client, {
   *  timeoutMS: 1_000
   *  kmsProviders: { local: { key: '<KEY>' } }
   * });
   * ```
   */
  timeoutMS?: number;
}

/**
 * @public
 * Configuration options for making an AWS encryption key
 */
export interface AWSEncryptionKeyOptions {
  /**
   * The AWS region of the KMS
   */
  region: string;

  /**
   * The Amazon Resource Name (ARN) to the AWS customer master key (CMK)
   */
  key: string;

  /**
   * An alternate host to send KMS requests to. May include port number.
   */
  endpoint?: string | undefined;
}

/**
 * @public
 * Configuration options for making an AWS encryption key
 */
export interface GCPEncryptionKeyOptions {
  /**
   * GCP project ID
   */
  projectId: string;

  /**
   * Location name (e.g. "global")
   */
  location: string;

  /**
   * Key ring name
   */
  keyRing: string;

  /**
   * Key name
   */
  keyName: string;

  /**
   * Key version
   */
  keyVersion?: string | undefined;

  /**
   * KMS URL, defaults to `https://www.googleapis.com/auth/cloudkms`
   */
  endpoint?: string | undefined;
}

/**
 * @public
 * Configuration options for making an Azure encryption key
 */
export interface AzureEncryptionKeyOptions {
  /**
   * Key name
   */
  keyName: string;

  /**
   * Key vault URL, typically `<name>.vault.azure.net`
   */
  keyVaultEndpoint: string;

  /**
   * Key version
   */
  keyVersion?: string | undefined;
}

/**
 * @public
 * Configuration options for making a KMIP encryption key
 */
export interface KMIPEncryptionKeyOptions {
  /**
   * keyId is the KMIP Unique Identifier to a 96 byte KMIP Secret Data managed object.
   *
   * If keyId is omitted, a random 96 byte KMIP Secret Data managed object will be created.
   */
  keyId?: string;

  /**
   * Host with optional port.
   */
  endpoint?: string;

  /**
   * If true, this key should be decrypted by the KMIP server.
   *
   * Requires `mongodb-client-encryption>=6.0.1`.
   */
  delegated?: boolean;
}

/**
 * @public
 * Options to provide when creating a new data key.
 */
export interface ClientEncryptionCreateDataKeyProviderOptions {
  /**
   * Identifies a new KMS-specific key used to encrypt the new data key
   */
  masterKey?:
    | AWSEncryptionKeyOptions
    | AzureEncryptionKeyOptions
    | GCPEncryptionKeyOptions
    | KMIPEncryptionKeyOptions
    | undefined;

  /**
   * An optional list of string alternate names used to reference a key.
   * If a key is created with alternate names, then encryption may refer to the key by the unique alternate name instead of by _id.
   */
  keyAltNames?: string[] | undefined;

  /** @experimental */
  keyMaterial?: Buffer | Binary;

  /** @internal */
  timeoutContext?: CSOTTimeoutContext;
}

/**
 * @public
 * @experimental
 */
export interface ClientEncryptionRewrapManyDataKeyResult {
  /** The result of rewrapping data keys. If unset, no keys matched the filter. */
  bulkWriteResult?: BulkWriteResult;
}

/**
 * @public
 * RangeOptions specifies index options for a Queryable Encryption field supporting "range" queries.
 * min, max, sparsity, trimFactor and range must match the values set in the encryptedFields of the destination collection.
 * For double and decimal128, min/max/precision must all be set, or all be unset.
 */
export interface RangeOptions {
  /** min is the minimum value for the encrypted index. Required if precision is set. */
  min?: any;
  /** max is the minimum value for the encrypted index. Required if precision is set. */
  max?: any;
  /** sparsity may be used to tune performance. must be non-negative. When omitted, a default value is used. */
  sparsity?: Long | bigint;
  /** trimFactor may be used to tune performance. must be non-negative. When omitted, a default value is used. */
  trimFactor?: Int32 | number;
  /* precision determines the number of significant digits after the decimal point. May only be set for double or decimal128. */
  precision?: number;
}

/**
 * Get the socket options from the client.
 * @param baseOptions - The mongo client options.
 * @returns ClientEncryptionSocketOptions
 */
export function autoSelectSocketOptions(
  baseOptions: MongoClientOptions
): ClientEncryptionSocketOptions {
  const options: ClientEncryptionSocketOptions = { autoSelectFamily: true };
  if ('autoSelectFamily' in baseOptions) {
    options.autoSelectFamily = baseOptions.autoSelectFamily;
  }
  if ('autoSelectFamilyAttemptTimeout' in baseOptions) {
    options.autoSelectFamilyAttemptTimeout = baseOptions.autoSelectFamilyAttemptTimeout;
  }
  return options;
}
