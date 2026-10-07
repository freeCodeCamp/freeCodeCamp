"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoEncrypter = exports.AutoEncryptionLoggerLevel = void 0;
const net = require("net");
const bson_1 = require("../bson");
const constants_1 = require("../constants");
const deps_1 = require("../deps");
const error_1 = require("../error");
const mongo_client_1 = require("../mongo_client");
const utils_1 = require("../utils");
const client_encryption_1 = require("./client_encryption");
const cryptoCallbacks = require("./crypto_callbacks");
const errors_1 = require("./errors");
const mongocryptd_manager_1 = require("./mongocryptd_manager");
const providers_1 = require("./providers");
const state_machine_1 = require("./state_machine");
/** @public */
exports.AutoEncryptionLoggerLevel = Object.freeze({
    FatalError: 0,
    Error: 1,
    Warning: 2,
    Info: 3,
    Trace: 4
});
/**
 * @internal An internal class to be used by the driver for auto encryption
 * **NOTE**: Not meant to be instantiated directly, this is for internal use only.
 */
class AutoEncrypter {
    /** @internal */
    static getMongoCrypt() {
        const encryption = (0, deps_1.getMongoDBClientEncryption)();
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
    constructor(client, options) {
        /**
         * Used by devtools to enable decorating decryption results.
         *
         * When set and enabled, `decrypt` will automatically recursively
         * traverse a decrypted document and if a field has been decrypted,
         * it will mark it as decrypted.  Compass uses this to determine which
         * fields were decrypted.
         */
        this[_a] = false;
        this._client = client;
        this._bypassEncryption = options.bypassAutoEncryption === true;
        this._keyVaultNamespace = options.keyVaultNamespace || 'admin.datakeys';
        this._keyVaultClient = options.keyVaultClient || client;
        this._metaDataClient = options.metadataClient || client;
        this._proxyOptions = options.proxyOptions || {};
        this._tlsOptions = options.tlsOptions || {};
        this._kmsProviders = options.kmsProviders || {};
        this._credentialProviders = options.credentialProviders;
        if (options.credentialProviders?.aws && !(0, providers_1.isEmptyCredentials)('aws', this._kmsProviders)) {
            throw new errors_1.MongoCryptInvalidArgumentError('Can only provide a custom AWS credential provider when the state machine is configured for automatic AWS credential fetching');
        }
        const mongoCryptOptions = {
            enableMultipleCollinfo: true,
            cryptoCallbacks
        };
        if (options.schemaMap) {
            mongoCryptOptions.schemaMap = Buffer.isBuffer(options.schemaMap)
                ? options.schemaMap
                : (0, bson_1.serialize)(options.schemaMap);
        }
        if (options.encryptedFieldsMap) {
            mongoCryptOptions.encryptedFieldsMap = Buffer.isBuffer(options.encryptedFieldsMap)
                ? options.encryptedFieldsMap
                : (0, bson_1.serialize)(options.encryptedFieldsMap);
        }
        mongoCryptOptions.kmsProviders = !Buffer.isBuffer(this._kmsProviders)
            ? (0, bson_1.serialize)(this._kmsProviders)
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
        }
        else if (!this._bypassMongocryptdAndCryptShared) {
            mongoCryptOptions.cryptSharedLibSearchPaths = ['$SYSTEM'];
        }
        const MongoCrypt = AutoEncrypter.getMongoCrypt();
        this._mongocrypt = new MongoCrypt(mongoCryptOptions);
        this._contextCounter = 0;
        if (options.extraOptions &&
            options.extraOptions.cryptSharedLibRequired &&
            !this.cryptSharedLibVersionInfo) {
            throw new errors_1.MongoCryptInvalidArgumentError('`cryptSharedLibRequired` set but no crypt_shared library loaded');
        }
        // Only instantiate mongocryptd manager/client once we know for sure
        // that we are not using the CSFLE shared library.
        if (!this._bypassMongocryptdAndCryptShared && !this.cryptSharedLibVersionInfo) {
            this._mongocryptdManager = new mongocryptd_manager_1.MongocryptdManager(options.extraOptions);
            const clientOptions = {
                serverSelectionTimeoutMS: 10000
            };
            if ((options.extraOptions == null || typeof options.extraOptions.mongocryptdURI !== 'string') &&
                !net.getDefaultAutoSelectFamily) {
                // Only set family if autoSelectFamily options are not supported.
                clientOptions.family = 4;
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore: TS complains as this always returns true on versions where it is present.
            if (net.getDefaultAutoSelectFamily) {
                // AutoEncrypter is made inside of MongoClient constructor while options are being parsed,
                // we do not have access to the options that are in progress.
                // TODO(NODE-6449): AutoEncrypter does not use client options for autoSelectFamily
                Object.assign(clientOptions, (0, client_encryption_1.autoSelectSocketOptions)(this._client.s?.options ?? {}));
            }
            this._mongocryptdClient = new mongo_client_1.MongoClient(this._mongocryptdManager.uri, clientOptions);
        }
    }
    /**
     * Initializes the auto encrypter by spawning a mongocryptd and connecting to it.
     *
     * This function is a no-op when bypassSpawn is set or the crypt shared library is used.
     */
    async init() {
        if (this._bypassMongocryptdAndCryptShared || this.cryptSharedLibVersionInfo) {
            return;
        }
        if (!this._mongocryptdManager) {
            throw new error_1.MongoRuntimeError('Reached impossible state: mongocryptdManager is undefined when neither bypassSpawn nor the shared lib are specified.');
        }
        if (!this._mongocryptdClient) {
            throw new error_1.MongoRuntimeError('Reached impossible state: mongocryptdClient is undefined when neither bypassSpawn nor the shared lib are specified.');
        }
        if (!this._mongocryptdManager.bypassSpawn) {
            await this._mongocryptdManager.spawn();
        }
        try {
            const client = await this._mongocryptdClient.connect();
            return client;
        }
        catch (error) {
            throw new error_1.MongoRuntimeError('Unable to connect to `mongocryptd`, please make sure it is running or in your PATH for auto-spawn', { cause: error });
        }
    }
    /**
     * Cleans up the `_mongocryptdClient`, if present.
     */
    async close() {
        await this._mongocryptdClient?.close();
    }
    /**
     * Encrypt a command for a given namespace.
     */
    async encrypt(ns, cmd, options = {}) {
        options.signal?.throwIfAborted();
        if (this._bypassEncryption) {
            // If `bypassAutoEncryption` has been specified, don't encrypt
            return cmd;
        }
        const commandBuffer = Buffer.isBuffer(cmd) ? cmd : (0, bson_1.serialize)(cmd, options);
        const context = this._mongocrypt.makeEncryptionContext(utils_1.MongoDBCollectionNamespace.fromString(ns).db, commandBuffer);
        context.id = this._contextCounter++;
        context.ns = ns;
        context.document = cmd;
        const stateMachine = new state_machine_1.StateMachine({
            promoteValues: false,
            promoteLongs: false,
            proxyOptions: this._proxyOptions,
            tlsOptions: this._tlsOptions,
            socketOptions: (0, client_encryption_1.autoSelectSocketOptions)(this._client.s.options)
        });
        return (0, bson_1.deserialize)(await stateMachine.execute(this, context, options), {
            promoteValues: false,
            promoteLongs: false
        });
    }
    /**
     * Decrypt a command response
     */
    async decrypt(response, options = {}) {
        options.signal?.throwIfAborted();
        const context = this._mongocrypt.makeDecryptionContext(response);
        context.id = this._contextCounter++;
        const stateMachine = new state_machine_1.StateMachine({
            ...options,
            proxyOptions: this._proxyOptions,
            tlsOptions: this._tlsOptions,
            socketOptions: (0, client_encryption_1.autoSelectSocketOptions)(this._client.s.options)
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
    async askForKMSCredentials() {
        return await (0, providers_1.refreshKMSCredentials)(this._kmsProviders, this._credentialProviders);
    }
    /**
     * Return the current libmongocrypt's CSFLE shared library version
     * as `{ version: bigint, versionStr: string }`, or `null` if no CSFLE
     * shared library was loaded.
     */
    get cryptSharedLibVersionInfo() {
        return this._mongocrypt.cryptSharedLibVersionInfo;
    }
    static get libmongocryptVersion() {
        return AutoEncrypter.getMongoCrypt().libmongocryptVersion;
    }
}
exports.AutoEncrypter = AutoEncrypter;
_a = constants_1.kDecorateResult;
//# sourceMappingURL=auto_encrypter.js.map