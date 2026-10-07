"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encrypter = void 0;
const auto_encrypter_1 = require("./client-side-encryption/auto_encrypter");
const constants_1 = require("./constants");
const deps_1 = require("./deps");
const error_1 = require("./error");
const mongo_client_1 = require("./mongo_client");
/** @internal */
class Encrypter {
    constructor(client, uri, options) {
        if (typeof options.autoEncryption !== 'object') {
            throw new error_1.MongoInvalidArgumentError('Option "autoEncryption" must be specified');
        }
        // initialize to null, if we call getInternalClient, we may set this it is important to not overwrite those function calls.
        this.internalClient = null;
        this.bypassAutoEncryption = !!options.autoEncryption.bypassAutoEncryption;
        this.needsConnecting = false;
        if (options.maxPoolSize === 0 && options.autoEncryption.keyVaultClient == null) {
            options.autoEncryption.keyVaultClient = client;
        }
        else if (options.autoEncryption.keyVaultClient == null) {
            options.autoEncryption.keyVaultClient = this.getInternalClient(client, uri, options);
        }
        if (this.bypassAutoEncryption) {
            options.autoEncryption.metadataClient = undefined;
        }
        else if (options.maxPoolSize === 0) {
            options.autoEncryption.metadataClient = client;
        }
        else {
            options.autoEncryption.metadataClient = this.getInternalClient(client, uri, options);
        }
        if (options.proxyHost) {
            options.autoEncryption.proxyOptions = {
                proxyHost: options.proxyHost,
                proxyPort: options.proxyPort,
                proxyUsername: options.proxyUsername,
                proxyPassword: options.proxyPassword
            };
        }
        this.autoEncrypter = new auto_encrypter_1.AutoEncrypter(client, options.autoEncryption);
    }
    getInternalClient(client, uri, options) {
        let internalClient = this.internalClient;
        if (internalClient == null) {
            const clonedOptions = {};
            for (const key of [
                ...Object.getOwnPropertyNames(options),
                ...Object.getOwnPropertySymbols(options)
            ]) {
                if (['autoEncryption', 'minPoolSize', 'servers', 'caseTranslate', 'dbName'].includes(key))
                    continue;
                Reflect.set(clonedOptions, key, Reflect.get(options, key));
            }
            clonedOptions.minPoolSize = 0;
            internalClient = new mongo_client_1.MongoClient(uri, clonedOptions);
            this.internalClient = internalClient;
            for (const eventName of constants_1.MONGO_CLIENT_EVENTS) {
                for (const listener of client.listeners(eventName)) {
                    internalClient.on(eventName, listener);
                }
            }
            client.on('newListener', (eventName, listener) => {
                internalClient?.on(eventName, listener);
            });
            this.needsConnecting = true;
        }
        return internalClient;
    }
    async connectInternalClient() {
        const internalClient = this.internalClient;
        if (this.needsConnecting && internalClient != null) {
            this.needsConnecting = false;
            await internalClient.connect();
        }
    }
    async close(client) {
        let error;
        try {
            await this.autoEncrypter.close();
        }
        catch (autoEncrypterError) {
            error = autoEncrypterError;
        }
        const internalClient = this.internalClient;
        if (internalClient != null && client !== internalClient) {
            return await internalClient.close();
        }
        if (error != null) {
            throw error;
        }
    }
    static checkForMongoCrypt() {
        const mongodbClientEncryption = (0, deps_1.getMongoDBClientEncryption)();
        if ('kModuleError' in mongodbClientEncryption) {
            throw new error_1.MongoMissingDependencyError('Auto-encryption requested, but the module is not installed. ' +
                'Please add `mongodb-client-encryption` as a dependency of your project', {
                cause: mongodbClientEncryption['kModuleError'],
                dependencyName: 'mongodb-client-encryption'
            });
        }
    }
}
exports.Encrypter = Encrypter;
//# sourceMappingURL=encrypter.js.map