"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoClientAuthProviders = void 0;
const gssapi_1 = require("./cmap/auth/gssapi");
const mongodb_aws_1 = require("./cmap/auth/mongodb_aws");
const mongodb_oidc_1 = require("./cmap/auth/mongodb_oidc");
const automated_callback_workflow_1 = require("./cmap/auth/mongodb_oidc/automated_callback_workflow");
const human_callback_workflow_1 = require("./cmap/auth/mongodb_oidc/human_callback_workflow");
const token_cache_1 = require("./cmap/auth/mongodb_oidc/token_cache");
const plain_1 = require("./cmap/auth/plain");
const providers_1 = require("./cmap/auth/providers");
const scram_1 = require("./cmap/auth/scram");
const x509_1 = require("./cmap/auth/x509");
const error_1 = require("./error");
/** @internal */
const AUTH_PROVIDERS = new Map([
    [
        providers_1.AuthMechanism.MONGODB_AWS,
        ({ AWS_CREDENTIAL_PROVIDER }) => new mongodb_aws_1.MongoDBAWS(AWS_CREDENTIAL_PROVIDER)
    ],
    [
        providers_1.AuthMechanism.MONGODB_CR,
        () => {
            throw new error_1.MongoInvalidArgumentError('MONGODB-CR is no longer a supported auth mechanism in MongoDB 4.0+');
        }
    ],
    [providers_1.AuthMechanism.MONGODB_GSSAPI, () => new gssapi_1.GSSAPI()],
    [providers_1.AuthMechanism.MONGODB_OIDC, properties => new mongodb_oidc_1.MongoDBOIDC(getWorkflow(properties))],
    [providers_1.AuthMechanism.MONGODB_PLAIN, () => new plain_1.Plain()],
    [providers_1.AuthMechanism.MONGODB_SCRAM_SHA1, () => new scram_1.ScramSHA1()],
    [providers_1.AuthMechanism.MONGODB_SCRAM_SHA256, () => new scram_1.ScramSHA256()],
    [providers_1.AuthMechanism.MONGODB_X509, () => new x509_1.X509()]
]);
/**
 * Create a set of providers per client
 * to avoid sharing the provider's cache between different clients.
 * @internal
 */
class MongoClientAuthProviders {
    constructor() {
        this.existingProviders = new Map();
    }
    /**
     * Get or create an authentication provider based on the provided mechanism.
     * We don't want to create all providers at once, as some providers may not be used.
     * @param name - The name of the provider to get or create.
     * @param credentials - The credentials.
     * @returns The provider.
     * @throws MongoInvalidArgumentError if the mechanism is not supported.
     * @internal
     */
    getOrCreateProvider(name, authMechanismProperties) {
        const authProvider = this.existingProviders.get(name);
        if (authProvider) {
            return authProvider;
        }
        const providerFunction = AUTH_PROVIDERS.get(name);
        if (!providerFunction) {
            throw new error_1.MongoInvalidArgumentError(`authMechanism ${name} not supported`);
        }
        const provider = providerFunction(authMechanismProperties);
        this.existingProviders.set(name, provider);
        return provider;
    }
}
exports.MongoClientAuthProviders = MongoClientAuthProviders;
/**
 * Gets either a device workflow or callback workflow.
 */
function getWorkflow(authMechanismProperties) {
    if (authMechanismProperties.OIDC_HUMAN_CALLBACK) {
        return new human_callback_workflow_1.HumanCallbackWorkflow(new token_cache_1.TokenCache(), authMechanismProperties.OIDC_HUMAN_CALLBACK);
    }
    else if (authMechanismProperties.OIDC_CALLBACK) {
        return new automated_callback_workflow_1.AutomatedCallbackWorkflow(new token_cache_1.TokenCache(), authMechanismProperties.OIDC_CALLBACK);
    }
    else {
        const environment = authMechanismProperties.ENVIRONMENT;
        const workflow = mongodb_oidc_1.OIDC_WORKFLOWS.get(environment)?.();
        if (!workflow) {
            throw new error_1.MongoInvalidArgumentError(`Could not load workflow for environment ${authMechanismProperties.ENVIRONMENT}`);
        }
        return workflow;
    }
}
//# sourceMappingURL=mongo_client_auth_providers.js.map