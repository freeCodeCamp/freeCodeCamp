// Resolves the default auth mechanism according to
// Resolves the default auth mechanism according to
import type { Document } from '../../bson';
import {
  MongoAPIError,
  MongoInvalidArgumentError,
  MongoMissingCredentialsError
} from '../../error';
import type { AWSCredentialProvider } from './aws_temporary_credentials';
import { GSSAPICanonicalizationValue } from './gssapi';
import type { OIDCCallbackFunction } from './mongodb_oidc';
import { AUTH_MECHS_AUTH_SRC_EXTERNAL, AuthMechanism } from './providers';

/**
 * @see https://github.com/mongodb/specifications/blob/master/source/auth/auth.md
 */
function getDefaultAuthMechanism(hello: Document | null): AuthMechanism {
  if (hello) {
    // If hello contains saslSupportedMechs, use scram-sha-256
    // if it is available, else scram-sha-1
    if (Array.isArray(hello.saslSupportedMechs)) {
      return hello.saslSupportedMechs.includes(AuthMechanism.MONGODB_SCRAM_SHA256)
        ? AuthMechanism.MONGODB_SCRAM_SHA256
        : AuthMechanism.MONGODB_SCRAM_SHA1;
    }
  }

  // Default auth mechanism for 4.0 and higher.
  return AuthMechanism.MONGODB_SCRAM_SHA256;
}

const ALLOWED_ENVIRONMENT_NAMES: AuthMechanismProperties['ENVIRONMENT'][] = [
  'test',
  'azure',
  'gcp',
  'k8s'
];
const ALLOWED_HOSTS_ERROR = 'Auth mechanism property ALLOWED_HOSTS must be an array of strings.';

/** @internal */
export const DEFAULT_ALLOWED_HOSTS = [
  '*.mongodb.net',
  '*.mongodb-qa.net',
  '*.mongodb-dev.net',
  '*.mongodbgov.net',
  'localhost',
  '127.0.0.1',
  '::1'
];

/** Error for when the token audience is missing in the environment. */
const TOKEN_RESOURCE_MISSING_ERROR =
  'TOKEN_RESOURCE must be set in the auth mechanism properties when ENVIRONMENT is azure or gcp.';

/** @public */
export interface AuthMechanismProperties extends Document {
  SERVICE_HOST?: string;
  SERVICE_NAME?: string;
  SERVICE_REALM?: string;
  CANONICALIZE_HOST_NAME?: GSSAPICanonicalizationValue;
  /** @deprecated Will be removed in the next major version. */
  AWS_SESSION_TOKEN?: string;
  /** A user provided OIDC machine callback function. */
  OIDC_CALLBACK?: OIDCCallbackFunction;
  /** A user provided OIDC human interacted callback function. */
  OIDC_HUMAN_CALLBACK?: OIDCCallbackFunction;
  /** The OIDC environment. Note that 'test' is for internal use only. */
  ENVIRONMENT?: 'test' | 'azure' | 'gcp' | 'k8s';
  /** Allowed hosts that OIDC auth can connect to. */
  ALLOWED_HOSTS?: string[];
  /** The resource token for OIDC auth in Azure and GCP. */
  TOKEN_RESOURCE?: string;
  /**
   * A custom AWS credential provider to use. An example using the AWS SDK default provider chain:
   *
   * ```ts
   * const client = new MongoClient(process.env.MONGODB_URI, {
   *   authMechanismProperties: {
   *     AWS_CREDENTIAL_PROVIDER: fromNodeProviderChain()
   *   }
   * });
   * ```
   *
   * Using a custom function that returns AWS credentials:
   *
   * ```ts
   * const client = new MongoClient(process.env.MONGODB_URI, {
   *   authMechanismProperties: {
   *     AWS_CREDENTIAL_PROVIDER: async () => {
   *       return {
   *         accessKeyId: process.env.ACCESS_KEY_ID,
   *         secretAccessKey: process.env.SECRET_ACCESS_KEY
   *       }
   *     }
   *   }
   * });
   * ```
   */
  AWS_CREDENTIAL_PROVIDER?: AWSCredentialProvider;
}

/** @public */
export interface MongoCredentialsOptions {
  username?: string;
  password: string;
  source: string;
  db?: string;
  mechanism?: AuthMechanism;
  mechanismProperties: AuthMechanismProperties;
}

/**
 * A representation of the credentials used by MongoDB
 * @public
 */
export class MongoCredentials {
  /** The username used for authentication */
  readonly username: string;
  /** The password used for authentication */
  readonly password: string;
  /** The database that the user should authenticate against */
  readonly source: string;
  /** The method used to authenticate */
  readonly mechanism: AuthMechanism;
  /** Special properties used by some types of auth mechanisms */
  readonly mechanismProperties: AuthMechanismProperties;

  constructor(options: MongoCredentialsOptions) {
    this.username = options.username ?? '';
    this.password = options.password;
    this.source = options.source;
    if (!this.source && options.db) {
      this.source = options.db;
    }
    this.mechanism = options.mechanism || AuthMechanism.MONGODB_DEFAULT;
    this.mechanismProperties = options.mechanismProperties || {};

    if (this.mechanism.match(/MONGODB-AWS/i)) {
      if (!this.username && process.env.AWS_ACCESS_KEY_ID) {
        this.username = process.env.AWS_ACCESS_KEY_ID;
      }

      if (!this.password && process.env.AWS_SECRET_ACCESS_KEY) {
        this.password = process.env.AWS_SECRET_ACCESS_KEY;
      }

      if (
        this.mechanismProperties.AWS_SESSION_TOKEN == null &&
        process.env.AWS_SESSION_TOKEN != null
      ) {
        this.mechanismProperties = {
          ...this.mechanismProperties,
          AWS_SESSION_TOKEN: process.env.AWS_SESSION_TOKEN
        };
      }
    }

    if (this.mechanism === AuthMechanism.MONGODB_OIDC && !this.mechanismProperties.ALLOWED_HOSTS) {
      this.mechanismProperties = {
        ...this.mechanismProperties,
        ALLOWED_HOSTS: DEFAULT_ALLOWED_HOSTS
      };
    }

    Object.freeze(this.mechanismProperties);
    Object.freeze(this);
  }

  /** Determines if two MongoCredentials objects are equivalent */
  equals(other: MongoCredentials): boolean {
    return (
      this.mechanism === other.mechanism &&
      this.username === other.username &&
      this.password === other.password &&
      this.source === other.source
    );
  }

  /**
   * If the authentication mechanism is set to "default", resolves the authMechanism
   * based on the server version and server supported sasl mechanisms.
   *
   * @param hello - A hello response from the server
   */
  resolveAuthMechanism(hello: Document | null): MongoCredentials {
    // If the mechanism is not "default", then it does not need to be resolved
    if (this.mechanism.match(/DEFAULT/i)) {
      return new MongoCredentials({
        username: this.username,
        password: this.password,
        source: this.source,
        mechanism: getDefaultAuthMechanism(hello),
        mechanismProperties: this.mechanismProperties
      });
    }

    return this;
  }

  validate(): void {
    if (
      (this.mechanism === AuthMechanism.MONGODB_GSSAPI ||
        this.mechanism === AuthMechanism.MONGODB_PLAIN ||
        this.mechanism === AuthMechanism.MONGODB_SCRAM_SHA1 ||
        this.mechanism === AuthMechanism.MONGODB_SCRAM_SHA256) &&
      !this.username
    ) {
      throw new MongoMissingCredentialsError(`Username required for mechanism '${this.mechanism}'`);
    }

    if (this.mechanism === AuthMechanism.MONGODB_OIDC) {
      if (
        this.username &&
        this.mechanismProperties.ENVIRONMENT &&
        this.mechanismProperties.ENVIRONMENT !== 'azure'
      ) {
        throw new MongoInvalidArgumentError(
          `username and ENVIRONMENT '${this.mechanismProperties.ENVIRONMENT}' may not be used together for mechanism '${this.mechanism}'.`
        );
      }

      if (this.username && this.password) {
        throw new MongoInvalidArgumentError(
          `No password is allowed in ENVIRONMENT '${this.mechanismProperties.ENVIRONMENT}' for '${this.mechanism}'.`
        );
      }

      if (
        (this.mechanismProperties.ENVIRONMENT === 'azure' ||
          this.mechanismProperties.ENVIRONMENT === 'gcp') &&
        !this.mechanismProperties.TOKEN_RESOURCE
      ) {
        throw new MongoInvalidArgumentError(TOKEN_RESOURCE_MISSING_ERROR);
      }

      if (
        this.mechanismProperties.ENVIRONMENT &&
        !ALLOWED_ENVIRONMENT_NAMES.includes(this.mechanismProperties.ENVIRONMENT)
      ) {
        throw new MongoInvalidArgumentError(
          `Currently only a ENVIRONMENT in ${ALLOWED_ENVIRONMENT_NAMES.join(
            ','
          )} is supported for mechanism '${this.mechanism}'.`
        );
      }

      if (
        !this.mechanismProperties.ENVIRONMENT &&
        !this.mechanismProperties.OIDC_CALLBACK &&
        !this.mechanismProperties.OIDC_HUMAN_CALLBACK
      ) {
        throw new MongoInvalidArgumentError(
          `Either a ENVIRONMENT, OIDC_CALLBACK, or OIDC_HUMAN_CALLBACK must be specified for mechanism '${this.mechanism}'.`
        );
      }

      if (this.mechanismProperties.ALLOWED_HOSTS) {
        const hosts = this.mechanismProperties.ALLOWED_HOSTS;
        if (!Array.isArray(hosts)) {
          throw new MongoInvalidArgumentError(ALLOWED_HOSTS_ERROR);
        }
        for (const host of hosts) {
          if (typeof host !== 'string') {
            throw new MongoInvalidArgumentError(ALLOWED_HOSTS_ERROR);
          }
        }
      }
    }

    if (AUTH_MECHS_AUTH_SRC_EXTERNAL.has(this.mechanism)) {
      if (this.source != null && this.source !== '$external') {
        // TODO(NODE-3485): Replace this with a MongoAuthValidationError
        throw new MongoAPIError(
          `Invalid source '${this.source}' for mechanism '${this.mechanism}' specified.`
        );
      }
    }

    if (this.mechanism === AuthMechanism.MONGODB_PLAIN && this.source == null) {
      // TODO(NODE-3485): Replace this with a MongoAuthValidationError
      throw new MongoAPIError('PLAIN Authentication Mechanism needs an auth source');
    }

    if (this.mechanism === AuthMechanism.MONGODB_X509 && this.password != null) {
      if (this.password === '') {
        Reflect.set(this, 'password', undefined);
        return;
      }
      // TODO(NODE-3485): Replace this with a MongoAuthValidationError
      throw new MongoAPIError(`Password not allowed for mechanism MONGODB-X509`);
    }

    const canonicalization = this.mechanismProperties.CANONICALIZE_HOST_NAME ?? false;
    if (!Object.values(GSSAPICanonicalizationValue).includes(canonicalization)) {
      throw new MongoAPIError(`Invalid CANONICALIZE_HOST_NAME value: ${canonicalization}`);
    }
  }

  static merge(
    creds: MongoCredentials | undefined,
    options: Partial<MongoCredentialsOptions>
  ): MongoCredentials {
    return new MongoCredentials({
      username: options.username ?? creds?.username ?? '',
      password: options.password ?? creds?.password ?? '',
      mechanism: options.mechanism ?? creds?.mechanism ?? AuthMechanism.MONGODB_DEFAULT,
      mechanismProperties: options.mechanismProperties ?? creds?.mechanismProperties ?? {},
      source: options.source ?? options.db ?? creds?.source ?? 'admin'
    });
  }
}
