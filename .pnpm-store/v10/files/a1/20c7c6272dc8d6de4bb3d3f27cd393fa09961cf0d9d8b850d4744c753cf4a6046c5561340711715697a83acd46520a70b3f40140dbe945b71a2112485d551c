"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GSSAPI = exports.GSSAPICanonicalizationValue = void 0;
exports.performGSSAPICanonicalizeHostName = performGSSAPICanonicalizeHostName;
exports.resolveCname = resolveCname;
const dns = require("dns");
const deps_1 = require("../../deps");
const error_1 = require("../../error");
const utils_1 = require("../../utils");
const auth_provider_1 = require("./auth_provider");
/** @public */
exports.GSSAPICanonicalizationValue = Object.freeze({
    on: true,
    off: false,
    none: 'none',
    forward: 'forward',
    forwardAndReverse: 'forwardAndReverse'
});
async function externalCommand(connection, command) {
    const response = await connection.command((0, utils_1.ns)('$external.$cmd'), command);
    return response;
}
let krb;
class GSSAPI extends auth_provider_1.AuthProvider {
    async auth(authContext) {
        const { connection, credentials } = authContext;
        if (credentials == null) {
            throw new error_1.MongoMissingCredentialsError('Credentials required for GSSAPI authentication');
        }
        const { username } = credentials;
        const client = await makeKerberosClient(authContext);
        const payload = await client.step('');
        const saslStartResponse = await externalCommand(connection, saslStart(payload));
        const negotiatedPayload = await negotiate(client, 10, saslStartResponse.payload);
        const saslContinueResponse = await externalCommand(connection, saslContinue(negotiatedPayload, saslStartResponse.conversationId));
        const finalizePayload = await finalize(client, username, saslContinueResponse.payload);
        await externalCommand(connection, {
            saslContinue: 1,
            conversationId: saslContinueResponse.conversationId,
            payload: finalizePayload
        });
    }
}
exports.GSSAPI = GSSAPI;
async function makeKerberosClient(authContext) {
    const { hostAddress } = authContext.options;
    const { credentials } = authContext;
    if (!hostAddress || typeof hostAddress.host !== 'string' || !credentials) {
        throw new error_1.MongoInvalidArgumentError('Connection must have host and port and credentials defined.');
    }
    loadKrb();
    if ('kModuleError' in krb) {
        throw krb['kModuleError'];
    }
    const { initializeClient } = krb;
    const { username, password } = credentials;
    const mechanismProperties = credentials.mechanismProperties;
    const serviceName = mechanismProperties.SERVICE_NAME ?? 'mongodb';
    const host = await performGSSAPICanonicalizeHostName(hostAddress.host, mechanismProperties);
    const initOptions = {};
    if (password != null) {
        // TODO(NODE-5139): These do not match the typescript options in initializeClient
        Object.assign(initOptions, { user: username, password: password });
    }
    const spnHost = mechanismProperties.SERVICE_HOST ?? host;
    let spn = `${serviceName}${process.platform === 'win32' ? '/' : '@'}${spnHost}`;
    if ('SERVICE_REALM' in mechanismProperties) {
        spn = `${spn}@${mechanismProperties.SERVICE_REALM}`;
    }
    return await initializeClient(spn, initOptions);
}
function saslStart(payload) {
    return {
        saslStart: 1,
        mechanism: 'GSSAPI',
        payload,
        autoAuthorize: 1
    };
}
function saslContinue(payload, conversationId) {
    return {
        saslContinue: 1,
        conversationId,
        payload
    };
}
async function negotiate(client, retries, payload) {
    try {
        const response = await client.step(payload);
        return response || '';
    }
    catch (error) {
        if (retries === 0) {
            // Retries exhausted, raise error
            throw error;
        }
        // Adjust number of retries and call step again
        return await negotiate(client, retries - 1, payload);
    }
}
async function finalize(client, user, payload) {
    // GSS Client Unwrap
    const response = await client.unwrap(payload);
    return await client.wrap(response || '', { user });
}
async function performGSSAPICanonicalizeHostName(host, mechanismProperties) {
    const mode = mechanismProperties.CANONICALIZE_HOST_NAME;
    if (!mode || mode === exports.GSSAPICanonicalizationValue.none) {
        return host;
    }
    // If forward and reverse or true
    if (mode === exports.GSSAPICanonicalizationValue.on ||
        mode === exports.GSSAPICanonicalizationValue.forwardAndReverse) {
        // Perform the lookup of the ip address.
        const { address } = await dns.promises.lookup(host);
        try {
            // Perform a reverse ptr lookup on the ip address.
            const results = await dns.promises.resolvePtr(address);
            // If the ptr did not error but had no results, return the host.
            return results.length > 0 ? results[0] : host;
        }
        catch {
            // This can error as ptr records may not exist for all ips. In this case
            // fallback to a cname lookup as dns.lookup() does not return the
            // cname.
            return await resolveCname(host);
        }
    }
    else {
        // The case for forward is just to resolve the cname as dns.lookup()
        // will not return it.
        return await resolveCname(host);
    }
}
async function resolveCname(host) {
    // Attempt to resolve the host name
    try {
        const results = await dns.promises.resolveCname(host);
        // Get the first resolved host id
        return results.length > 0 ? results[0] : host;
    }
    catch {
        return host;
    }
}
/**
 * Load the Kerberos library.
 */
function loadKrb() {
    if (!krb) {
        krb = (0, deps_1.getKerberos)();
    }
}
//# sourceMappingURL=gssapi.js.map