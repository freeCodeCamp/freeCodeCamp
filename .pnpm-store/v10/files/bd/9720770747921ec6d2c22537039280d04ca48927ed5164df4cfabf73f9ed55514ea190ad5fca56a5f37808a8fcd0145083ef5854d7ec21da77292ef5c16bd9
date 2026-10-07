"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomatedCallbackWorkflow = void 0;
const error_1 = require("../../../error");
const timeout_1 = require("../../../timeout");
const mongodb_oidc_1 = require("../mongodb_oidc");
const callback_workflow_1 = require("./callback_workflow");
/**
 * Class implementing behaviour for the non human callback workflow.
 * @internal
 */
class AutomatedCallbackWorkflow extends callback_workflow_1.CallbackWorkflow {
    /**
     * Instantiate the human callback workflow.
     */
    constructor(cache, callback) {
        super(cache, callback);
    }
    /**
     * Execute the OIDC callback workflow.
     */
    async execute(connection, credentials) {
        // If there is a cached access token, try to authenticate with it. If
        // authentication fails with an Authentication error (18),
        // invalidate the access token, fetch a new access token, and try
        // to authenticate again.
        // If the server fails for any other reason, do not clear the cache.
        if (this.cache.hasAccessToken) {
            const token = this.cache.getAccessToken();
            if (!connection.accessToken) {
                connection.accessToken = token;
            }
            try {
                return await this.finishAuthentication(connection, credentials, token);
            }
            catch (error) {
                if (error instanceof error_1.MongoError &&
                    error.code === error_1.MONGODB_ERROR_CODES.AuthenticationFailed) {
                    this.cache.removeAccessToken();
                    return await this.execute(connection, credentials);
                }
                else {
                    throw error;
                }
            }
        }
        const response = await this.fetchAccessToken(credentials);
        this.cache.put(response);
        connection.accessToken = response.accessToken;
        await this.finishAuthentication(connection, credentials, response.accessToken);
    }
    /**
     * Fetches the access token using the callback.
     */
    async fetchAccessToken(credentials) {
        const controller = new AbortController();
        const params = {
            timeoutContext: controller.signal,
            version: mongodb_oidc_1.OIDC_VERSION
        };
        if (credentials.username) {
            params.username = credentials.username;
        }
        if (credentials.mechanismProperties.TOKEN_RESOURCE) {
            params.tokenAudience = credentials.mechanismProperties.TOKEN_RESOURCE;
        }
        const timeout = timeout_1.Timeout.expires(callback_workflow_1.AUTOMATED_TIMEOUT_MS);
        try {
            return await Promise.race([this.executeAndValidateCallback(params), timeout]);
        }
        catch (error) {
            if (timeout_1.TimeoutError.is(error)) {
                controller.abort();
                throw new error_1.MongoOIDCError(`OIDC callback timed out after ${callback_workflow_1.AUTOMATED_TIMEOUT_MS}ms.`);
            }
            throw error;
        }
        finally {
            timeout.clear();
        }
    }
}
exports.AutomatedCallbackWorkflow = AutomatedCallbackWorkflow;
//# sourceMappingURL=automated_callback_workflow.js.map