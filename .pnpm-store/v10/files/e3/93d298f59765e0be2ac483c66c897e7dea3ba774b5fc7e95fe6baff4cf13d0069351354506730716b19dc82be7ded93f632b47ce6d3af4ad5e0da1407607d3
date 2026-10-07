"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyCredentials = isEmptyCredentials;
exports.refreshKMSCredentials = refreshKMSCredentials;
const aws_1 = require("./aws");
const azure_1 = require("./azure");
const gcp_1 = require("./gcp");
/**
 * Auto credential fetching should only occur when the provider is defined on the kmsProviders map
 * and the settings are an empty object.
 *
 * This is distinct from a nullish provider key.
 *
 * @internal - exposed for testing purposes only
 */
function isEmptyCredentials(providerName, kmsProviders) {
    const provider = kmsProviders[providerName];
    if (provider == null) {
        return false;
    }
    return typeof provider === 'object' && Object.keys(provider).length === 0;
}
/**
 * Load cloud provider credentials for the user provided KMS providers.
 * Credentials will only attempt to get loaded if they do not exist
 * and no existing credentials will get overwritten.
 *
 * @internal
 */
async function refreshKMSCredentials(kmsProviders, credentialProviders) {
    let finalKMSProviders = kmsProviders;
    if (isEmptyCredentials('aws', kmsProviders)) {
        finalKMSProviders = await (0, aws_1.loadAWSCredentials)(finalKMSProviders, credentialProviders?.aws);
    }
    if (isEmptyCredentials('gcp', kmsProviders)) {
        finalKMSProviders = await (0, gcp_1.loadGCPCredentials)(finalKMSProviders);
    }
    if (isEmptyCredentials('azure', kmsProviders)) {
        finalKMSProviders = await (0, azure_1.loadAzureCredentials)(finalKMSProviders);
    }
    return finalKMSProviders;
}
//# sourceMappingURL=index.js.map