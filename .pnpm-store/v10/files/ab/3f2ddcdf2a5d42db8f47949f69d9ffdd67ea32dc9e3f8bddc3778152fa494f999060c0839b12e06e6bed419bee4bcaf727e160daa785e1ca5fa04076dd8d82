"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoCredentials = exports.DEFAULT_ALLOWED_HOSTS = void 0;
const error_1 = require("../../error");
const gssapi_1 = require("./gssapi");
const providers_1 = require("./providers");
/**
 * @see https://github.com/mongodb/specifications/blob/master/source/auth/auth.md
 */
function getDefaultAuthMechanism(hello) {
    if (hello) {
        // If hello contains saslSupportedMechs, use scram-sha-256
        // if it is available, else scram-sha-1
        if (Array.isArray(hello.saslSupportedMechs)) {
            return hello.saslSupportedMechs.includes(providers_1.AuthMechanism.MONGODB_SCRAM_SHA256)
                ? providers_1.AuthMechanism.MONGODB_SCRAM_SHA256
                : providers_1.AuthMechanism.MONGODB_SCRAM_SHA1;
        }
    }
    // Default auth mechanism for 4.0 and higher.
    return providers_1.AuthMechanism.MONGODB_SCRAM_SHA256;
}
const ALLOWED_ENVIRONMENT_NAMES = [
    'test',
    'azure',
    'gcp',
    'k8s'
];
const ALLOWED_HOSTS_ERROR = 'Auth mechanism property ALLOWED_HOSTS must be an array of strings.';
/** @internal */
exports.DEFAULT_ALLOWED_HOSTS = [
    '*.mongodb.net',
    '*.mongodb-qa.net',
    '*.mongodb-dev.net',
    '*.mongodbgov.net',
    'localhost',
    '127.0.0.1',
    '::1'
];
/** Error for when the token audience is missing in the environment. */
const TOKEN_RESOURCE_MISSING_ERROR = 'TOKEN_RESOURCE must be set in the auth mechanism properties when ENVIRONMENT is azure or gcp.';
/**
 * A representation of the credentials used by MongoDB
 * @public
 */
class MongoCredentials {
    constructor(options) {
        this.username = options.username ?? '';
        this.password = options.password;
        this.source = options.source;
        if (!this.source && options.db) {
            this.source = options.db;
        }
        this.mechanism = options.mechanism || providers_1.AuthMechanism.MONGODB_DEFAULT;
        this.mechanismProperties = options.mechanismProperties || {};
        if (this.mechanism.match(/MONGODB-AWS/i)) {
            if (!this.username && process.env.AWS_ACCESS_KEY_ID) {
                this.username = process.env.AWS_ACCESS_KEY_ID;
            }
            if (!this.password && process.env.AWS_SECRET_ACCESS_KEY) {
                this.password = process.env.AWS_SECRET_ACCESS_KEY;
            }
            if (this.mechanismProperties.AWS_SESSION_TOKEN == null &&
                process.env.AWS_SESSION_TOKEN != null) {
                this.mechanismProperties = {
                    ...this.mechanismProperties,
                    AWS_SESSION_TOKEN: process.env.AWS_SESSION_TOKEN
                };
            }
        }
        if (this.mechanism === providers_1.AuthMechanism.MONGODB_OIDC && !this.mechanismProperties.ALLOWED_HOSTS) {
            this.mechanismProperties = {
                ...this.mechanismProperties,
                ALLOWED_HOSTS: exports.DEFAULT_ALLOWED_HOSTS
            };
        }
        Object.freeze(this.mechanismProperties);
        Object.freeze(this);
    }
    /** Determines if two MongoCredentials objects are equivalent */
    equals(other) {
        return (this.mechanism === other.mechanism &&
            this.username === other.username &&
            this.password === other.password &&
            this.source === other.source);
    }
    /**
     * If the authentication mechanism is set to "default", resolves the authMechanism
     * based on the server version and server supported sasl mechanisms.
     *
     * @param hello - A hello response from the server
     */
    resolveAuthMechanism(hello) {
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
    validate() {
        if ((this.mechanism === providers_1.AuthMechanism.MONGODB_GSSAPI ||
            this.mechanism === providers_1.AuthMechanism.MONGODB_PLAIN ||
            this.mechanism === providers_1.AuthMechanism.MONGODB_SCRAM_SHA1 ||
            this.mechanism === providers_1.AuthMechanism.MONGODB_SCRAM_SHA256) &&
            !this.username) {
            throw new error_1.MongoMissingCredentialsError(`Username required for mechanism '${this.mechanism}'`);
        }
        if (this.mechanism === providers_1.AuthMechanism.MONGODB_OIDC) {
            if (this.username &&
                this.mechanismProperties.ENVIRONMENT &&
                this.mechanismProperties.ENVIRONMENT !== 'azure') {
                throw new error_1.MongoInvalidArgumentError(`username and ENVIRONMENT '${this.mechanismProperties.ENVIRONMENT}' may not be used together for mechanism '${this.mechanism}'.`);
            }
            if (this.username && this.password) {
                throw new error_1.MongoInvalidArgumentError(`No password is allowed in ENVIRONMENT '${this.mechanismProperties.ENVIRONMENT}' for '${this.mechanism}'.`);
            }
            if ((this.mechanismProperties.ENVIRONMENT === 'azure' ||
                this.mechanismProperties.ENVIRONMENT === 'gcp') &&
                !this.mechanismProperties.TOKEN_RESOURCE) {
                throw new error_1.MongoInvalidArgumentError(TOKEN_RESOURCE_MISSING_ERROR);
            }
            if (this.mechanismProperties.ENVIRONMENT &&
                !ALLOWED_ENVIRONMENT_NAMES.includes(this.mechanismProperties.ENVIRONMENT)) {
                throw new error_1.MongoInvalidArgumentError(`Currently only a ENVIRONMENT in ${ALLOWED_ENVIRONMENT_NAMES.join(',')} is supported for mechanism '${this.mechanism}'.`);
            }
            if (!this.mechanismProperties.ENVIRONMENT &&
                !this.mechanismProperties.OIDC_CALLBACK &&
                !this.mechanismProperties.OIDC_HUMAN_CALLBACK) {
                throw new error_1.MongoInvalidArgumentError(`Either a ENVIRONMENT, OIDC_CALLBACK, or OIDC_HUMAN_CALLBACK must be specified for mechanism '${this.mechanism}'.`);
            }
            if (this.mechanismProperties.ALLOWED_HOSTS) {
                const hosts = this.mechanismProperties.ALLOWED_HOSTS;
                if (!Array.isArray(hosts)) {
                    throw new error_1.MongoInvalidArgumentError(ALLOWED_HOSTS_ERROR);
                }
                for (const host of hosts) {
                    if (typeof host !== 'string') {
                        throw new error_1.MongoInvalidArgumentError(ALLOWED_HOSTS_ERROR);
                    }
                }
            }
        }
        if (providers_1.AUTH_MECHS_AUTH_SRC_EXTERNAL.has(this.mechanism)) {
            if (this.source != null && this.source !== '$external') {
                // TODO(NODE-3485): Replace this with a MongoAuthValidationError
                throw new error_1.MongoAPIError(`Invalid source '${this.source}' for mechanism '${this.mechanism}' specified.`);
            }
        }
        if (this.mechanism === providers_1.AuthMechanism.MONGODB_PLAIN && this.source == null) {
            // TODO(NODE-3485): Replace this with a MongoAuthValidationError
            throw new error_1.MongoAPIError('PLAIN Authentication Mechanism needs an auth source');
        }
        if (this.mechanism === providers_1.AuthMechanism.MONGODB_X509 && this.password != null) {
            if (this.password === '') {
                Reflect.set(this, 'password', undefined);
                return;
            }
            // TODO(NODE-3485): Replace this with a MongoAuthValidationError
            throw new error_1.MongoAPIError(`Password not allowed for mechanism MONGODB-X509`);
        }
        const canonicalization = this.mechanismProperties.CANONICALIZE_HOST_NAME ?? false;
        if (!Object.values(gssapi_1.GSSAPICanonicalizationValue).includes(canonicalization)) {
            throw new error_1.MongoAPIError(`Invalid CANONICALIZE_HOST_NAME value: ${canonicalization}`);
        }
    }
    static merge(creds, options) {
        return new MongoCredentials({
            username: options.username ?? creds?.username ?? '',
            password: options.password ?? creds?.password ?? '',
            mechanism: options.mechanism ?? creds?.mechanism ?? providers_1.AuthMechanism.MONGODB_DEFAULT,
            mechanismProperties: options.mechanismProperties ?? creds?.mechanismProperties ?? {},
            source: options.source ?? options.db ?? creds?.source ?? 'admin'
        });
    }
}
exports.MongoCredentials = MongoCredentials;
//# sourceMappingURL=mongo_credentials.js.map