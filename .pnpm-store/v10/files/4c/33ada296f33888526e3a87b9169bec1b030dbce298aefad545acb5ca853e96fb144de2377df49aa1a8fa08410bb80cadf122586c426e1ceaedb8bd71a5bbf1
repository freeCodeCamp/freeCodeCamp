"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanCallbackWorkflow = void 0;
const bson_1 = require("../../../bson");
const error_1 = require("../../../error");
const timeout_1 = require("../../../timeout");
const mongodb_oidc_1 = require("../mongodb_oidc");
const callback_workflow_1 = require("./callback_workflow");
/**
 * Class implementing behaviour for the non human callback workflow.
 * @internal
 */
class HumanCallbackWorkflow extends callback_workflow_1.CallbackWorkflow {
    /**
     * Instantiate the human callback workflow.
     */
    constructor(cache, callback) {
        super(cache, callback);
    }
    /**
     * Execute the OIDC human callback workflow.
     */
    async execute(connection, credentials) {
        // Check if the Client Cache has an access token.
        // If it does, cache the access token in the Connection Cache and perform a One-Step SASL conversation
        // using the access token. If the server returns an Authentication error (18),
        // invalidate the access token token from the Client Cache, clear the Connection Cache,
        // and restart the authentication flow. Raise any other errors to the user. On success, exit the algorithm.
        if (this.cache.hasAccessToken) {
            const token = this.cache.getAccessToken();
            connection.accessToken = token;
            try {
                return await this.finishAuthentication(connection, credentials, token);
            }
            catch (error) {
                if (error instanceof error_1.MongoError &&
                    error.code === error_1.MONGODB_ERROR_CODES.AuthenticationFailed) {
                    this.cache.removeAccessToken();
                    delete connection.accessToken;
                    return await this.execute(connection, credentials);
                }
                else {
                    throw error;
                }
            }
        }
        // Check if the Client Cache has a refresh token.
        // If it does, call the OIDC Human Callback with the cached refresh token and IdpInfo to get a
        // new access token. Cache the new access token in the Client Cache and Connection Cache.
        // Perform a One-Step SASL conversation using the new access token. If the the server returns
        // an Authentication error (18), clear the refresh token, invalidate the access token from the
        // Client Cache, clear the Connection Cache, and restart the authentication flow. Raise any other
        // errors to the user. On success, exit the algorithm.
        if (this.cache.hasRefreshToken) {
            const refreshToken = this.cache.getRefreshToken();
            const result = await this.fetchAccessToken(this.cache.getIdpInfo(), credentials, refreshToken);
            this.cache.put(result);
            connection.accessToken = result.accessToken;
            try {
                return await this.finishAuthentication(connection, credentials, result.accessToken);
            }
            catch (error) {
                if (error instanceof error_1.MongoError &&
                    error.code === error_1.MONGODB_ERROR_CODES.AuthenticationFailed) {
                    this.cache.removeRefreshToken();
                    delete connection.accessToken;
                    return await this.execute(connection, credentials);
                }
                else {
                    throw error;
                }
            }
        }
        // Start a new Two-Step SASL conversation.
        // Run a PrincipalStepRequest to get the IdpInfo.
        // Call the OIDC Human Callback with the new IdpInfo to get a new access token and optional refresh
        // token. Drivers MUST NOT pass a cached refresh token to the callback when performing
        // a new Two-Step conversation. Cache the new IdpInfo and refresh token in the Client Cache and the
        // new access token in the Client Cache and Connection Cache.
        // Attempt to authenticate using a JwtStepRequest with the new access token. Raise any errors to the user.
        const startResponse = await this.startAuthentication(connection, credentials);
        const conversationId = startResponse.conversationId;
        const idpInfo = bson_1.BSON.deserialize(startResponse.payload.buffer);
        const callbackResponse = await this.fetchAccessToken(idpInfo, credentials);
        this.cache.put(callbackResponse, idpInfo);
        connection.accessToken = callbackResponse.accessToken;
        return await this.finishAuthentication(connection, credentials, callbackResponse.accessToken, conversationId);
    }
    /**
     * Fetches an access token using the callback.
     */
    async fetchAccessToken(idpInfo, credentials, refreshToken) {
        const controller = new AbortController();
        const params = {
            timeoutContext: controller.signal,
            version: mongodb_oidc_1.OIDC_VERSION,
            idpInfo: idpInfo
        };
        if (credentials.username) {
            params.username = credentials.username;
        }
        if (refreshToken) {
            params.refreshToken = refreshToken;
        }
        const timeout = timeout_1.Timeout.expires(callback_workflow_1.HUMAN_TIMEOUT_MS);
        try {
            return await Promise.race([this.executeAndValidateCallback(params), timeout]);
        }
        catch (error) {
            if (timeout_1.TimeoutError.is(error)) {
                controller.abort();
                throw new error_1.MongoOIDCError(`OIDC callback timed out after ${callback_workflow_1.HUMAN_TIMEOUT_MS}ms.`);
            }
            throw error;
        }
        finally {
            timeout.clear();
        }
    }
}
exports.HumanCallbackWorkflow = HumanCallbackWorkflow;
//# sourceMappingURL=human_callback_workflow.js.map