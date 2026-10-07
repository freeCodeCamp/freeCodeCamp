"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callback = void 0;
const error_1 = require("../../../error");
const utils_1 = require("../../../utils");
/** GCP base URL. */
const GCP_BASE_URL = 'http://metadata/computeMetadata/v1/instance/service-accounts/default/identity';
/** GCP request headers. */
const GCP_HEADERS = Object.freeze({ 'Metadata-Flavor': 'Google' });
/** Error for when the token audience is missing in the environment. */
const TOKEN_RESOURCE_MISSING_ERROR = 'TOKEN_RESOURCE must be set in the auth mechanism properties when ENVIRONMENT is gcp.';
/**
 * The callback function to be used in the automated callback workflow.
 * @param params - The OIDC callback parameters.
 * @returns The OIDC response.
 */
const callback = async (params) => {
    const tokenAudience = params.tokenAudience;
    if (!tokenAudience) {
        throw new error_1.MongoGCPError(TOKEN_RESOURCE_MISSING_ERROR);
    }
    return await getGcpTokenData(tokenAudience);
};
exports.callback = callback;
/**
 * Hit the GCP endpoint to get the token data.
 */
async function getGcpTokenData(tokenAudience) {
    const url = new URL(GCP_BASE_URL);
    url.searchParams.append('audience', tokenAudience);
    const response = await (0, utils_1.get)(url, {
        headers: GCP_HEADERS
    });
    if (response.status !== 200) {
        throw new error_1.MongoGCPError(`Status code ${response.status} returned from the GCP endpoint. Response body: ${response.body}`);
    }
    return { accessToken: response.body };
}
//# sourceMappingURL=gcp_machine_workflow.js.map