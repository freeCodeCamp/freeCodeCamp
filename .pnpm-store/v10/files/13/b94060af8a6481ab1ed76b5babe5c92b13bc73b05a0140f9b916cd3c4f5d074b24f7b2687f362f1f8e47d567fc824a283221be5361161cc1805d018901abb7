"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDBOIDC = exports.OIDC_WORKFLOWS = exports.OIDC_VERSION = void 0;
const error_1 = require("../../error");
const auth_provider_1 = require("./auth_provider");
const automated_callback_workflow_1 = require("./mongodb_oidc/automated_callback_workflow");
const azure_machine_workflow_1 = require("./mongodb_oidc/azure_machine_workflow");
const gcp_machine_workflow_1 = require("./mongodb_oidc/gcp_machine_workflow");
const k8s_machine_workflow_1 = require("./mongodb_oidc/k8s_machine_workflow");
const token_cache_1 = require("./mongodb_oidc/token_cache");
const token_machine_workflow_1 = require("./mongodb_oidc/token_machine_workflow");
/** Error when credentials are missing. */
const MISSING_CREDENTIALS_ERROR = 'AuthContext must provide credentials.';
/** The current version of OIDC implementation. */
exports.OIDC_VERSION = 1;
/** @internal */
exports.OIDC_WORKFLOWS = new Map();
exports.OIDC_WORKFLOWS.set('test', () => new automated_callback_workflow_1.AutomatedCallbackWorkflow(new token_cache_1.TokenCache(), token_machine_workflow_1.callback));
exports.OIDC_WORKFLOWS.set('azure', () => new automated_callback_workflow_1.AutomatedCallbackWorkflow(new token_cache_1.TokenCache(), azure_machine_workflow_1.callback));
exports.OIDC_WORKFLOWS.set('gcp', () => new automated_callback_workflow_1.AutomatedCallbackWorkflow(new token_cache_1.TokenCache(), gcp_machine_workflow_1.callback));
exports.OIDC_WORKFLOWS.set('k8s', () => new automated_callback_workflow_1.AutomatedCallbackWorkflow(new token_cache_1.TokenCache(), k8s_machine_workflow_1.callback));
/**
 * OIDC auth provider.
 */
class MongoDBOIDC extends auth_provider_1.AuthProvider {
    /**
     * Instantiate the auth provider.
     */
    constructor(workflow) {
        super();
        if (!workflow) {
            throw new error_1.MongoInvalidArgumentError('No workflow provided to the OIDC auth provider.');
        }
        this.workflow = workflow;
    }
    /**
     * Authenticate using OIDC
     */
    async auth(authContext) {
        const { connection, reauthenticating, response } = authContext;
        if (response?.speculativeAuthenticate?.done && !reauthenticating) {
            return;
        }
        const credentials = getCredentials(authContext);
        if (reauthenticating) {
            await this.workflow.reauthenticate(connection, credentials);
        }
        else {
            await this.workflow.execute(connection, credentials, response);
        }
    }
    /**
     * Add the speculative auth for the initial handshake.
     */
    async prepare(handshakeDoc, authContext) {
        const { connection } = authContext;
        const credentials = getCredentials(authContext);
        const result = await this.workflow.speculativeAuth(connection, credentials);
        return { ...handshakeDoc, ...result };
    }
}
exports.MongoDBOIDC = MongoDBOIDC;
/**
 * Get credentials from the auth context, throwing if they do not exist.
 */
function getCredentials(authContext) {
    const { credentials } = authContext;
    if (!credentials) {
        throw new error_1.MongoMissingCredentialsError(MISSING_CREDENTIALS_ERROR);
    }
    return credentials;
}
//# sourceMappingURL=mongodb_oidc.js.map