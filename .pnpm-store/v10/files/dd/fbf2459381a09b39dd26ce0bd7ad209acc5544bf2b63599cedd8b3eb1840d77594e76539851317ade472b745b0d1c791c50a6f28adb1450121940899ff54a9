"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEncryption = void 0;
exports.autoSelectSocketOptions = autoSelectSocketOptions;
const bson_1 = require("../bson");
const deps_1 = require("../deps");
const timeout_1 = require("../timeout");
const utils_1 = require("../utils");
const cryptoCallbacks = require("./crypto_callbacks");
const errors_1 = require("./errors");
const index_1 = require("./providers/index");
const state_machine_1 = require("./state_machine");
/**
 * @public
 * The public interface for explicit in-use encryption
 */
class ClientEncryption {
    /** @internal */
    static getMongoCrypt() {
        const encryption = (0, deps_1.getMongoDBClientEncryption)();
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
    constructor(client, options) {
        this._client = client;
        this._proxyOptions = options.proxyOptions ?? {};
        this._tlsOptions = options.tlsOptions ?? {};
        this._kmsProviders = options.kmsProviders || {};
        const { timeoutMS } = (0, utils_1.resolveTimeoutOptions)(client, options);
        this._timeoutMS = timeoutMS;
        this._credentialProviders = options.credentialProviders;
        if (options.credentialProviders?.aws && !(0, index_1.isEmptyCredentials)('aws', this._kmsProviders)) {
            throw new errors_1.MongoCryptInvalidArgumentError('Can only provide a custom AWS credential provider when the state machine is configured for automatic AWS credential fetching');
        }
        if (options.keyVaultNamespace == null) {
            throw new errors_1.MongoCryptInvalidArgumentError('Missing required option `keyVaultNamespace`');
        }
        const mongoCryptOptions = {
            ...options,
            cryptoCallbacks,
            kmsProviders: !Buffer.isBuffer(this._kmsProviders)
                ? (0, bson_1.serialize)(this._kmsProviders)
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
    async createDataKey(provider, options = {}) {
        if (options.keyAltNames && !Array.isArray(options.keyAltNames)) {
            throw new errors_1.MongoCryptInvalidArgumentError(`Option "keyAltNames" must be an array of strings, but was of type ${typeof options.keyAltNames}.`);
        }
        let keyAltNames = undefined;
        if (options.keyAltNames && options.keyAltNames.length > 0) {
            keyAltNames = options.keyAltNames.map((keyAltName, i) => {
                if (typeof keyAltName !== 'string') {
                    throw new errors_1.MongoCryptInvalidArgumentError(`Option "keyAltNames" must be an array of strings, but item at index ${i} was of type ${typeof keyAltName}`);
                }
                return (0, bson_1.serialize)({ keyAltName });
            });
        }
        let keyMaterial = undefined;
        if (options.keyMaterial) {
            keyMaterial = (0, bson_1.serialize)({ keyMaterial: options.keyMaterial });
        }
        const dataKeyBson = (0, bson_1.serialize)({
            provider,
            ...options.masterKey
        });
        const context = this._mongoCrypt.makeDataKeyContext(dataKeyBson, {
            keyAltNames,
            keyMaterial
        });
        const stateMachine = new state_machine_1.StateMachine({
            proxyOptions: this._proxyOptions,
            tlsOptions: this._tlsOptions,
            socketOptions: autoSelectSocketOptions(this._client.s.options)
        });
        const timeoutContext = options?.timeoutContext ??
            timeout_1.TimeoutContext.create((0, utils_1.resolveTimeoutOptions)(this._client, { timeoutMS: this._timeoutMS }));
        const dataKey = (0, bson_1.deserialize)(await stateMachine.execute(this, context, { timeoutContext }));
        const { db: dbName, collection: collectionName } = utils_1.MongoDBCollectionNamespace.fromString(this._keyVaultNamespace);
        const { insertedId } = await this._keyVaultClient
            .db(dbName)
            .collection(collectionName)
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
    async rewrapManyDataKey(filter, options) {
        let keyEncryptionKeyBson = undefined;
        if (options) {
            const keyEncryptionKey = Object.assign({ provider: options.provider }, options.masterKey);
            keyEncryptionKeyBson = (0, bson_1.serialize)(keyEncryptionKey);
        }
        const filterBson = (0, bson_1.serialize)(filter);
        const context = this._mongoCrypt.makeRewrapManyDataKeyContext(filterBson, keyEncryptionKeyBson);
        const stateMachine = new state_machine_1.StateMachine({
            proxyOptions: this._proxyOptions,
            tlsOptions: this._tlsOptions,
            socketOptions: autoSelectSocketOptions(this._client.s.options)
        });
        const timeoutContext = timeout_1.TimeoutContext.create((0, utils_1.resolveTimeoutOptions)(this._client, { timeoutMS: this._timeoutMS }));
        const { v: dataKeys } = (0, bson_1.deserialize)(await stateMachine.execute(this, context, { timeoutContext }));
        if (dataKeys.length === 0) {
            return {};
        }
        const { db: dbName, collection: collectionName } = utils_1.MongoDBCollectionNamespace.fromString(this._keyVaultNamespace);
        const replacements = dataKeys.map((key) => ({
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
        }));
        const result = await this._keyVaultClient
            .db(dbName)
            .collection(collectionName)
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
    async deleteKey(_id) {
        const { db: dbName, collection: collectionName } = utils_1.MongoDBCollectionNamespace.fromString(this._keyVaultNamespace);
        return await this._keyVaultClient
            .db(dbName)
            .collection(collectionName)
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
    getKeys() {
        const { db: dbName, collection: collectionName } = utils_1.MongoDBCollectionNamespace.fromString(this._keyVaultNamespace);
        return this._keyVaultClient
            .db(dbName)
            .collection(collectionName)
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
    async getKey(_id) {
        const { db: dbName, collection: collectionName } = utils_1.MongoDBCollectionNamespace.fromString(this._keyVaultNamespace);
        return await this._keyVaultClient
            .db(dbName)
            .collection(collectionName)
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
    async getKeyByAltName(keyAltName) {
        const { db: dbName, collection: collectionName } = utils_1.MongoDBCollectionNamespace.fromString(this._keyVaultNamespace);
        return await this._keyVaultClient
            .db(dbName)
            .collection(collectionName)
            .findOne({ keyAltNames: keyAltName }, { readConcern: { level: 'majority' }, timeoutMS: this._timeoutMS });
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
    async addKeyAltName(_id, keyAltName) {
        const { db: dbName, collection: collectionName } = utils_1.MongoDBCollectionNamespace.fromString(this._keyVaultNamespace);
        const value = await this._keyVaultClient
            .db(dbName)
            .collection(collectionName)
            .findOneAndUpdate({ _id }, { $addToSet: { keyAltNames: keyAltName } }, { writeConcern: { w: 'majority' }, returnDocument: 'before', timeoutMS: this._timeoutMS });
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
    async removeKeyAltName(_id, keyAltName) {
        const { db: dbName, collection: collectionName } = utils_1.MongoDBCollectionNamespace.fromString(this._keyVaultNamespace);
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
            .collection(collectionName)
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
    async createEncryptedCollection(db, name, options) {
        const { provider, masterKey, createCollectionOptions: { encryptedFields: { ...encryptedFields }, ...createCollectionOptions } } = options;
        const timeoutContext = this._timeoutMS != null
            ? timeout_1.TimeoutContext.create((0, utils_1.resolveTimeoutOptions)(this._client, { timeoutMS: this._timeoutMS }))
            : undefined;
        if (Array.isArray(encryptedFields.fields)) {
            const createDataKeyPromises = encryptedFields.fields.map(async (field) => field == null || typeof field !== 'object' || field.keyId != null
                ? field
                : {
                    ...field,
                    keyId: await this.createDataKey(provider, {
                        masterKey,
                        // clone the timeoutContext
                        // in order to avoid sharing the same timeout for server selection and connection checkout across different concurrent operations
                        timeoutContext: timeoutContext?.csotEnabled() ? timeoutContext?.clone() : undefined
                    })
                });
            const createDataKeyResolutions = await Promise.allSettled(createDataKeyPromises);
            encryptedFields.fields = createDataKeyResolutions.map((resolution, index) => resolution.status === 'fulfilled' ? resolution.value : encryptedFields.fields[index]);
            const rejection = createDataKeyResolutions.find((result) => result.status === 'rejected');
            if (rejection != null) {
                throw new errors_1.MongoCryptCreateDataKeyError(encryptedFields, { cause: rejection.reason });
            }
        }
        try {
            const collection = await db.createCollection(name, {
                ...createCollectionOptions,
                encryptedFields,
                timeoutMS: timeoutContext?.csotEnabled()
                    ? timeoutContext?.getRemainingTimeMSOrThrow()
                    : undefined
            });
            return { collection, encryptedFields };
        }
        catch (cause) {
            throw new errors_1.MongoCryptCreateEncryptedCollectionError(encryptedFields, { cause });
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
    async encrypt(value, options) {
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
    async encryptExpression(expression, options) {
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
    async decrypt(value) {
        const valueBuffer = (0, bson_1.serialize)({ v: value });
        const context = this._mongoCrypt.makeExplicitDecryptionContext(valueBuffer);
        const stateMachine = new state_machine_1.StateMachine({
            proxyOptions: this._proxyOptions,
            tlsOptions: this._tlsOptions,
            socketOptions: autoSelectSocketOptions(this._client.s.options)
        });
        const timeoutContext = this._timeoutMS != null
            ? timeout_1.TimeoutContext.create((0, utils_1.resolveTimeoutOptions)(this._client, { timeoutMS: this._timeoutMS }))
            : undefined;
        const { v } = (0, bson_1.deserialize)(await stateMachine.execute(this, context, { timeoutContext }));
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
    async askForKMSCredentials() {
        return await (0, index_1.refreshKMSCredentials)(this._kmsProviders, this._credentialProviders);
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
    async _encrypt(value, expressionMode, options) {
        const { algorithm, keyId, keyAltName, contentionFactor, queryType, rangeOptions, textOptions } = options;
        const contextOptions = {
            expressionMode,
            algorithm
        };
        if (keyId) {
            contextOptions.keyId = keyId.buffer;
        }
        if (keyAltName) {
            if (keyId) {
                throw new errors_1.MongoCryptInvalidArgumentError(`"options" cannot contain both "keyId" and "keyAltName"`);
            }
            if (typeof keyAltName !== 'string') {
                throw new errors_1.MongoCryptInvalidArgumentError(`"options.keyAltName" must be of type string, but was of type ${typeof keyAltName}`);
            }
            contextOptions.keyAltName = (0, bson_1.serialize)({ keyAltName });
        }
        if (typeof contentionFactor === 'number' || typeof contentionFactor === 'bigint') {
            contextOptions.contentionFactor = contentionFactor;
        }
        if (typeof queryType === 'string') {
            contextOptions.queryType = queryType;
        }
        if (typeof rangeOptions === 'object') {
            contextOptions.rangeOptions = (0, bson_1.serialize)(rangeOptions);
        }
        if (typeof textOptions === 'object') {
            contextOptions.textOptions = (0, bson_1.serialize)(textOptions);
        }
        const valueBuffer = (0, bson_1.serialize)({ v: value });
        const stateMachine = new state_machine_1.StateMachine({
            proxyOptions: this._proxyOptions,
            tlsOptions: this._tlsOptions,
            socketOptions: autoSelectSocketOptions(this._client.s.options)
        });
        const context = this._mongoCrypt.makeExplicitEncryptionContext(valueBuffer, contextOptions);
        const timeoutContext = this._timeoutMS != null
            ? timeout_1.TimeoutContext.create((0, utils_1.resolveTimeoutOptions)(this._client, { timeoutMS: this._timeoutMS }))
            : undefined;
        const { v } = (0, bson_1.deserialize)(await stateMachine.execute(this, context, { timeoutContext }));
        return v;
    }
}
exports.ClientEncryption = ClientEncryption;
/**
 * Get the socket options from the client.
 * @param baseOptions - The mongo client options.
 * @returns ClientEncryptionSocketOptions
 */
function autoSelectSocketOptions(baseOptions) {
    const options = { autoSelectFamily: true };
    if ('autoSelectFamily' in baseOptions) {
        options.autoSelectFamily = baseOptions.autoSelectFamily;
    }
    if ('autoSelectFamilyAttemptTimeout' in baseOptions) {
        options.autoSelectFamilyAttemptTimeout = baseOptions.autoSelectFamilyAttemptTimeout;
    }
    return options;
}
//# sourceMappingURL=client_encryption.js.map