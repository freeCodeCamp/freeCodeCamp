import { AutoEncrypter, type AutoEncryptionOptions } from './client-side-encryption/auto_encrypter';
import { MONGO_CLIENT_EVENTS } from './constants';
import { getMongoDBClientEncryption } from './deps';
import { MongoInvalidArgumentError, MongoMissingDependencyError } from './error';
import { MongoClient, type MongoClientOptions } from './mongo_client';

/** @internal */
export interface EncrypterOptions {
  autoEncryption: AutoEncryptionOptions;
  maxPoolSize?: number;
}

/** @internal */
export class Encrypter {
  private internalClient: MongoClient | null;
  bypassAutoEncryption: boolean;
  needsConnecting: boolean;
  autoEncrypter: AutoEncrypter;

  constructor(client: MongoClient, uri: string, options: MongoClientOptions) {
    if (typeof options.autoEncryption !== 'object') {
      throw new MongoInvalidArgumentError('Option "autoEncryption" must be specified');
    }
    // initialize to null, if we call getInternalClient, we may set this it is important to not overwrite those function calls.
    this.internalClient = null;

    this.bypassAutoEncryption = !!options.autoEncryption.bypassAutoEncryption;
    this.needsConnecting = false;

    if (options.maxPoolSize === 0 && options.autoEncryption.keyVaultClient == null) {
      options.autoEncryption.keyVaultClient = client;
    } else if (options.autoEncryption.keyVaultClient == null) {
      options.autoEncryption.keyVaultClient = this.getInternalClient(client, uri, options);
    }

    if (this.bypassAutoEncryption) {
      options.autoEncryption.metadataClient = undefined;
    } else if (options.maxPoolSize === 0) {
      options.autoEncryption.metadataClient = client;
    } else {
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

    this.autoEncrypter = new AutoEncrypter(client, options.autoEncryption);
  }

  getInternalClient(client: MongoClient, uri: string, options: MongoClientOptions): MongoClient {
    let internalClient = this.internalClient;
    if (internalClient == null) {
      const clonedOptions: MongoClientOptions = {};

      for (const key of [
        ...Object.getOwnPropertyNames(options),
        ...Object.getOwnPropertySymbols(options)
      ] as string[]) {
        if (['autoEncryption', 'minPoolSize', 'servers', 'caseTranslate', 'dbName'].includes(key))
          continue;
        Reflect.set(clonedOptions, key, Reflect.get(options, key));
      }

      clonedOptions.minPoolSize = 0;

      internalClient = new MongoClient(uri, clonedOptions);
      this.internalClient = internalClient;

      for (const eventName of MONGO_CLIENT_EVENTS) {
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

  async connectInternalClient(): Promise<void> {
    const internalClient = this.internalClient;
    if (this.needsConnecting && internalClient != null) {
      this.needsConnecting = false;
      await internalClient.connect();
    }
  }

  async close(client: MongoClient): Promise<void> {
    let error;
    try {
      await this.autoEncrypter.close();
    } catch (autoEncrypterError) {
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

  static checkForMongoCrypt(): void {
    const mongodbClientEncryption = getMongoDBClientEncryption();
    if ('kModuleError' in mongodbClientEncryption) {
      throw new MongoMissingDependencyError(
        'Auto-encryption requested, but the module is not installed. ' +
          'Please add `mongodb-client-encryption` as a dependency of your project',
        {
          cause: mongodbClientEncryption['kModuleError'],
          dependencyName: 'mongodb-client-encryption'
        }
      );
    }
  }
}
