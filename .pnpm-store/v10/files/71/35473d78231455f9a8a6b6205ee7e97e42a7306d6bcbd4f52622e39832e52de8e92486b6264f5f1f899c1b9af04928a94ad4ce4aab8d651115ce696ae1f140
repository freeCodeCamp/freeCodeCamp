"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipToBuffer = exports.int32ToIpv4 = exports.ipv4ToInt32 = exports.validateSocksClientChainOptions = exports.validateSocksClientOptions = void 0;
const util_1 = require("./util");
const constants_1 = require("./constants");
const stream = require("stream");
const ip_address_1 = require("ip-address");
const net = require("net");
/**
 * Validates the provided SocksClientOptions
 * @param options { SocksClientOptions }
 * @param acceptedCommands { string[] } A list of accepted SocksProxy commands.
 */
function validateSocksClientOptions(options, acceptedCommands = ['connect', 'bind', 'associate']) {
    // Check SOCKs command option.
    if (!constants_1.SocksCommand[options.command]) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksCommand, options);
    }
    // Check SocksCommand for acceptable command.
    if (acceptedCommands.indexOf(options.command) === -1) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksCommandForOperation, options);
    }
    // Check destination
    if (!isValidSocksRemoteHost(options.destination)) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsDestination, options);
    }
    // Check SOCKS proxy to use
    if (!isValidSocksProxy(options.proxy)) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsProxy, options);
    }
    // Validate custom auth (if set)
    validateCustomProxyAuth(options.proxy, options);
    // Check timeout
    if (options.timeout && !isValidTimeoutValue(options.timeout)) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsTimeout, options);
    }
    // Check existing_socket (if provided)
    if (options.existing_socket &&
        !(options.existing_socket instanceof stream.Duplex)) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsExistingSocket, options);
    }
}
exports.validateSocksClientOptions = validateSocksClientOptions;
/**
 * Validates the SocksClientChainOptions
 * @param options { SocksClientChainOptions }
 */
function validateSocksClientChainOptions(options) {
    // Only connect is supported when chaining.
    if (options.command !== 'connect') {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksCommandChain, options);
    }
    // Check destination
    if (!isValidSocksRemoteHost(options.destination)) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsDestination, options);
    }
    // Validate proxies (length)
    if (!(options.proxies &&
        Array.isArray(options.proxies) &&
        options.proxies.length >= 2)) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsProxiesLength, options);
    }
    // Validate proxies
    options.proxies.forEach((proxy) => {
        if (!isValidSocksProxy(proxy)) {
            throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsProxy, options);
        }
        // Validate custom auth (if set)
        validateCustomProxyAuth(proxy, options);
    });
    // Check timeout
    if (options.timeout && !isValidTimeoutValue(options.timeout)) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsTimeout, options);
    }
}
exports.validateSocksClientChainOptions = validateSocksClientChainOptions;
function validateCustomProxyAuth(proxy, options) {
    if (proxy.custom_auth_method !== undefined) {
        // Invalid auth method range
        if (proxy.custom_auth_method < constants_1.SOCKS5_CUSTOM_AUTH_START ||
            proxy.custom_auth_method > constants_1.SOCKS5_CUSTOM_AUTH_END) {
            throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsCustomAuthRange, options);
        }
        // Missing custom_auth_request_handler
        if (proxy.custom_auth_request_handler === undefined ||
            typeof proxy.custom_auth_request_handler !== 'function') {
            throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsCustomAuthOptions, options);
        }
        // Missing custom_auth_response_size
        if (proxy.custom_auth_response_size === undefined) {
            throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsCustomAuthOptions, options);
        }
        // Missing/invalid custom_auth_response_handler
        if (proxy.custom_auth_response_handler === undefined ||
            typeof proxy.custom_auth_response_handler !== 'function') {
            throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsCustomAuthOptions, options);
        }
    }
}
/**
 * Validates a SocksRemoteHost
 * @param remoteHost { SocksRemoteHost }
 */
function isValidSocksRemoteHost(remoteHost) {
    return (remoteHost &&
        typeof remoteHost.host === 'string' &&
        Buffer.byteLength(remoteHost.host) < 256 &&
        typeof remoteHost.port === 'number' &&
        remoteHost.port >= 0 &&
        remoteHost.port <= 65535);
}
/**
 * Validates a SocksProxy
 * @param proxy { SocksProxy }
 */
function isValidSocksProxy(proxy) {
    return (proxy &&
        (typeof proxy.host === 'string' || typeof proxy.ipaddress === 'string') &&
        typeof proxy.port === 'number' &&
        proxy.port >= 0 &&
        proxy.port <= 65535 &&
        (proxy.type === 4 || proxy.type === 5));
}
/**
 * Validates a timeout value.
 * @param value { Number }
 */
function isValidTimeoutValue(value) {
    return typeof value === 'number' && value > 0;
}
function ipv4ToInt32(ip) {
    const address = new ip_address_1.Address4(ip);
    // Convert the IPv4 address parts to an integer
    return address.toArray().reduce((acc, part) => (acc << 8) + part, 0) >>> 0;
}
exports.ipv4ToInt32 = ipv4ToInt32;
function int32ToIpv4(int32) {
    // Extract each byte (octet) from the 32-bit integer
    const octet1 = (int32 >>> 24) & 0xff;
    const octet2 = (int32 >>> 16) & 0xff;
    const octet3 = (int32 >>> 8) & 0xff;
    const octet4 = int32 & 0xff;
    // Combine the octets into a string in IPv4 format
    return [octet1, octet2, octet3, octet4].join('.');
}
exports.int32ToIpv4 = int32ToIpv4;
function ipToBuffer(ip) {
    if (net.isIPv4(ip)) {
        // Handle IPv4 addresses
        const address = new ip_address_1.Address4(ip);
        return Buffer.from(address.toArray());
    }
    else if (net.isIPv6(ip)) {
        // Handle IPv6 addresses
        const address = new ip_address_1.Address6(ip);
        return Buffer.from(address
            .canonicalForm()
            .split(':')
            .map((segment) => segment.padStart(4, '0'))
            .join(''), 'hex');
    }
    else {
        throw new Error('Invalid IP address format');
    }
}
exports.ipToBuffer = ipToBuffer;
//# sourceMappingURL=helpers.js.map