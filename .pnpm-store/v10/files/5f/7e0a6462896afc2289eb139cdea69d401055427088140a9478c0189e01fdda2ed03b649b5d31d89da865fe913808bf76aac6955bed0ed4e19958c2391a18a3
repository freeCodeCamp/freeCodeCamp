import { type AuthProvider } from './cmap/auth/auth_provider';
import { GSSAPI } from './cmap/auth/gssapi';
import { type AuthMechanismProperties } from './cmap/auth/mongo_credentials';
import { MongoDBAWS } from './cmap/auth/mongodb_aws';
import { MongoDBOIDC, OIDC_WORKFLOWS, type Workflow } from './cmap/auth/mongodb_oidc';
import { AutomatedCallbackWorkflow } from './cmap/auth/mongodb_oidc/automated_callback_workflow';
import { HumanCallbackWorkflow } from './cmap/auth/mongodb_oidc/human_callback_workflow';
import { TokenCache } from './cmap/auth/mongodb_oidc/token_cache';
import { Plain } from './cmap/auth/plain';
import { AuthMechanism } from './cmap/auth/providers';
import { ScramSHA1, ScramSHA256 } from './cmap/auth/scram';
import { X509 } from './cmap/auth/x509';
import { MongoInvalidArgumentError } from './error';

/** @internal */
const AUTH_PROVIDERS = new Map<
  AuthMechanism | string,
  (authMechanismProperties: AuthMechanismProperties) => AuthProvider
>([
  [
    AuthMechanism.MONGODB_AWS,
    ({ AWS_CREDENTIAL_PROVIDER }) => new MongoDBAWS(AWS_CREDENTIAL_PROVIDER)
  ],
  [
    AuthMechanism.MONGODB_CR,
    () => {
      throw new MongoInvalidArgumentError(
        'MONGODB-CR is no longer a supported auth mechanism in MongoDB 4.0+'
      );
    }
  ],
  [AuthMechanism.MONGODB_GSSAPI, () => new GSSAPI()],
  [AuthMechanism.MONGODB_OIDC, properties => new MongoDBOIDC(getWorkflow(properties))],
  [AuthMechanism.MONGODB_PLAIN, () => new Plain()],
  [AuthMechanism.MONGODB_SCRAM_SHA1, () => new ScramSHA1()],
  [AuthMechanism.MONGODB_SCRAM_SHA256, () => new ScramSHA256()],
  [AuthMechanism.MONGODB_X509, () => new X509()]
]);

/**
 * Create a set of providers per client
 * to avoid sharing the provider's cache between different clients.
 * @internal
 */
export class MongoClientAuthProviders {
  private existingProviders: Map<AuthMechanism | string, AuthProvider> = new Map();

  /**
   * Get or create an authentication provider based on the provided mechanism.
   * We don't want to create all providers at once, as some providers may not be used.
   * @param name - The name of the provider to get or create.
   * @param credentials - The credentials.
   * @returns The provider.
   * @throws MongoInvalidArgumentError if the mechanism is not supported.
   * @internal
   */
  getOrCreateProvider(
    name: AuthMechanism | string,
    authMechanismProperties: AuthMechanismProperties
  ): AuthProvider {
    const authProvider = this.existingProviders.get(name);
    if (authProvider) {
      return authProvider;
    }

    const providerFunction = AUTH_PROVIDERS.get(name);
    if (!providerFunction) {
      throw new MongoInvalidArgumentError(`authMechanism ${name} not supported`);
    }

    const provider = providerFunction(authMechanismProperties);
    this.existingProviders.set(name, provider);
    return provider;
  }
}

/**
 * Gets either a device workflow or callback workflow.
 */
function getWorkflow(authMechanismProperties: AuthMechanismProperties): Workflow {
  if (authMechanismProperties.OIDC_HUMAN_CALLBACK) {
    return new HumanCallbackWorkflow(new TokenCache(), authMechanismProperties.OIDC_HUMAN_CALLBACK);
  } else if (authMechanismProperties.OIDC_CALLBACK) {
    return new AutomatedCallbackWorkflow(new TokenCache(), authMechanismProperties.OIDC_CALLBACK);
  } else {
    const environment = authMechanismProperties.ENVIRONMENT;
    const workflow = OIDC_WORKFLOWS.get(environment)?.();
    if (!workflow) {
      throw new MongoInvalidArgumentError(
        `Could not load workflow for environment ${authMechanismProperties.ENVIRONMENT}`
      );
    }
    return workflow;
  }
}
