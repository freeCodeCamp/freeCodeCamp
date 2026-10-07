"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipRegex = void 0;
const hoek_1 = require("@hapi/hoek");
const uri_1 = require("./uri");
/**
 * Generates a regular expression used to validate IP addresses.
 *
 * @param options - optional settings.
 *
 * @returns an object with the regular expression and meta data.
 */
function ipRegex(options = {}) {
    // CIDR
    const cidr = options.cidr || 'optional';
    (0, hoek_1.assert)(['required', 'optional', 'forbidden'].includes(cidr), 'options.cidr must be one of required, optional, forbidden');
    // Versions
    (0, hoek_1.assert)(options.version === undefined || typeof options.version === 'string' || Array.isArray(options.version), 'options.version must be a string or an array of string');
    let versions = options.version || ['ipv4', 'ipv6', 'ipvfuture'];
    if (!Array.isArray(versions)) {
        versions = [versions];
    }
    (0, hoek_1.assert)(versions.length >= 1, 'options.version must have at least 1 version specified');
    for (const version of versions) {
        (0, hoek_1.assert)(typeof version === 'string' && version === version.toLowerCase(), 'Invalid options.version value');
        (0, hoek_1.assert)(['ipv4', 'ipv6', 'ipvfuture'].includes(version), 'options.version contains unknown version ' + version + ' - must be one of ipv4, ipv6, ipvfuture');
    }
    versions = Array.from(new Set(versions));
    // Regex
    const parts = versions.map((version) => {
        // Forbidden
        if (cidr === 'forbidden') {
            return uri_1.ipVersions[version];
        }
        // Required
        const cidrpart = `\\/${version === 'ipv4' ? uri_1.ipVersions.v4Cidr : uri_1.ipVersions.v6Cidr}`;
        if (cidr === 'required') {
            return `${uri_1.ipVersions[version]}${cidrpart}`;
        }
        // Optional
        return `${uri_1.ipVersions[version]}(?:${cidrpart})?`;
    });
    const raw = `(?:${parts.join('|')})`;
    const regex = new RegExp(`^${raw}$`);
    return { cidr, versions, regex, raw };
}
exports.ipRegex = ipRegex;
//# sourceMappingURL=ip.js.map