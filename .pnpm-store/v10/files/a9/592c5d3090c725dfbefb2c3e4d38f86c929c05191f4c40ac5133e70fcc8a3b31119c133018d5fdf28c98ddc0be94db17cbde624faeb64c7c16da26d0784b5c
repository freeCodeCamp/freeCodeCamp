import { type Stream } from './cmap/connect';
import { MongoMissingDependencyError } from './error';
import type { Callback } from './utils';

function makeErrorModule(error: any) {
  const props = error ? { kModuleError: error } : {};
  return new Proxy(props, {
    get: (_: any, key: any) => {
      if (key === 'kModuleError') {
        return error;
      }
      throw error;
    },
    set: () => {
      throw error;
    }
  });
}

export type Kerberos = typeof import('kerberos') | { kModuleError: MongoMissingDependencyError };

export function getKerberos(): Kerberos {
  let kerberos: Kerberos;
  try {
    // Ensure you always wrap an optional require in the try block NODE-3199
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    kerberos = require('kerberos');
  } catch (error) {
    kerberos = makeErrorModule(
      new MongoMissingDependencyError(
        'Optional module `kerberos` not found. Please install it to enable kerberos authentication',
        { cause: error, dependencyName: 'kerberos' }
      )
    );
  }
  return kerberos;
}

export interface KerberosClient {
  step(challenge: string): Promise<string>;
  step(challenge: string, callback: Callback<string>): void;
  wrap(challenge: string, options: { user: string }): Promise<string>;
  wrap(challenge: string, options: { user: string }, callback: Callback<string>): void;
  unwrap(challenge: string): Promise<string>;
  unwrap(challenge: string, callback: Callback<string>): void;
}

type ZStandardLib = {
  /**
   * Compress using zstd.
   * @param buf - Buffer to be compressed.
   */
  compress(buf: Buffer, level?: number): Promise<Buffer>;

  /**
   * Decompress using zstd.
   */
  decompress(buf: Buffer): Promise<Buffer>;
};

export type ZStandard = ZStandardLib | { kModuleError: MongoMissingDependencyError };

export function getZstdLibrary(): ZStandardLib | { kModuleError: MongoMissingDependencyError } {
  let ZStandard: ZStandardLib | { kModuleError: MongoMissingDependencyError };
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    ZStandard = require('@mongodb-js/zstd');
  } catch (error) {
    ZStandard = makeErrorModule(
      new MongoMissingDependencyError(
        'Optional module `@mongodb-js/zstd` not found. Please install it to enable zstd compression',
        { cause: error, dependencyName: 'zstd' }
      )
    );
  }

  return ZStandard;
}

/**
 * @public
 * Copy of the AwsCredentialIdentityProvider interface from [`smithy/types`](https://socket.dev/npm/package/\@smithy/types/files/1.1.1/dist-types/identity/awsCredentialIdentity.d.ts),
 * the return type of the aws-sdk's `fromNodeProviderChain().provider()`.
 */
export interface AWSCredentials {
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken?: string;
  expiration?: Date;
}

type CredentialProvider = {
  fromNodeProviderChain(
    this: void,
    options: { clientConfig: { region: string } }
  ): () => Promise<AWSCredentials>;
  fromNodeProviderChain(this: void): () => Promise<AWSCredentials>;
};

export function getAwsCredentialProvider():
  | CredentialProvider
  | { kModuleError: MongoMissingDependencyError } {
  try {
    // Ensure you always wrap an optional require in the try block NODE-3199
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const credentialProvider = require('@aws-sdk/credential-providers');
    return credentialProvider;
  } catch (error) {
    return makeErrorModule(
      new MongoMissingDependencyError(
        'Optional module `@aws-sdk/credential-providers` not found.' +
          ' Please install it to enable getting aws credentials via the official sdk.',
        { cause: error, dependencyName: '@aws-sdk/credential-providers' }
      )
    );
  }
}

/** @internal */
export type GcpMetadata =
  | typeof import('gcp-metadata')
  | { kModuleError: MongoMissingDependencyError };

export function getGcpMetadata(): GcpMetadata {
  try {
    // Ensure you always wrap an optional require in the try block NODE-3199
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const credentialProvider = require('gcp-metadata');
    return credentialProvider;
  } catch (error) {
    return makeErrorModule(
      new MongoMissingDependencyError(
        'Optional module `gcp-metadata` not found.' +
          ' Please install it to enable getting gcp credentials via the official sdk.',
        { cause: error, dependencyName: 'gcp-metadata' }
      )
    );
  }
}

/** @internal */
export type SnappyLib = {
  /**
   * In order to support both we must check the return value of the function
   * @param buf - Buffer to be compressed
   */
  compress(buf: Buffer): Promise<Buffer>;

  /**
   * In order to support both we must check the return value of the function
   * @param buf - Buffer to be compressed
   */
  uncompress(buf: Buffer, opt: { asBuffer: true }): Promise<Buffer>;
};

export function getSnappy(): SnappyLib | { kModuleError: MongoMissingDependencyError } {
  try {
    // Ensure you always wrap an optional require in the try block NODE-3199
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const value = require('snappy');
    return value;
  } catch (error) {
    const kModuleError = new MongoMissingDependencyError(
      'Optional module `snappy` not found. Please install it to enable snappy compression',
      { cause: error, dependencyName: 'snappy' }
    );
    return { kModuleError };
  }
}

export type SocksLib = {
  SocksClient: {
    createConnection(options: {
      command: 'connect';
      destination: { host: string; port: number };
      proxy: {
        /** host and port are ignored because we pass existing_socket */
        host: 'iLoveJavaScript';
        port: 0;
        type: 5;
        userId?: string;
        password?: string;
      };
      timeout?: number;
      /** We always create our own socket, and pass it to this API for proxy negotiation */
      existing_socket: Stream;
    }): Promise<{ socket: Stream }>;
  };
};

export function getSocks(): SocksLib | { kModuleError: MongoMissingDependencyError } {
  try {
    // Ensure you always wrap an optional require in the try block NODE-3199
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const value = require('socks');
    return value;
  } catch (error) {
    const kModuleError = new MongoMissingDependencyError(
      'Optional module `socks` not found. Please install it to connections over a SOCKS5 proxy',
      { cause: error, dependencyName: 'socks' }
    );
    return { kModuleError };
  }
}

interface AWS4 {
  /**
   * Created these inline types to better assert future usage of this API
   * @param options - options for request
   * @param credentials - AWS credential details, sessionToken should be omitted entirely if its false-y
   */
  sign(
    this: void,
    options: {
      path: '/';
      body: string;
      host: string;
      method: 'POST';
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded';
        'Content-Length': number;
        'X-MongoDB-Server-Nonce': string;
        'X-MongoDB-GS2-CB-Flag': 'n';
      };
      service: string;
      region: string;
    },
    credentials:
      | {
          accessKeyId: string;
          secretAccessKey: string;
          sessionToken: string;
        }
      | {
          accessKeyId: string;
          secretAccessKey: string;
        }
      | undefined
  ): {
    headers: {
      Authorization: string;
      'X-Amz-Date': string;
    };
  };
}

export const aws4: AWS4 | { kModuleError: MongoMissingDependencyError } = loadAws4();

function loadAws4() {
  let aws4: AWS4 | { kModuleError: MongoMissingDependencyError };
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    aws4 = require('aws4');
  } catch (error) {
    aws4 = makeErrorModule(
      new MongoMissingDependencyError(
        'Optional module `aws4` not found. Please install it to enable AWS authentication',
        { cause: error, dependencyName: 'aws4' }
      )
    );
  }

  return aws4;
}

/** A utility function to get the instance of mongodb-client-encryption, if it exists. */
export function getMongoDBClientEncryption():
  | typeof import('mongodb-client-encryption')
  | { kModuleError: MongoMissingDependencyError } {
  let mongodbClientEncryption = null;

  try {
    // NOTE(NODE-3199): Ensure you always wrap an optional require literally in the try block
    // Cannot be moved to helper utility function, bundlers search and replace the actual require call
    // in a way that makes this line throw at bundle time, not runtime, catching here will make bundling succeed
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    mongodbClientEncryption = require('mongodb-client-encryption');
  } catch (error) {
    const kModuleError = new MongoMissingDependencyError(
      'Optional module `mongodb-client-encryption` not found. Please install it to use auto encryption or ClientEncryption.',
      { cause: error, dependencyName: 'mongodb-client-encryption' }
    );
    return { kModuleError };
  }

  return mongodbClientEncryption;
}
