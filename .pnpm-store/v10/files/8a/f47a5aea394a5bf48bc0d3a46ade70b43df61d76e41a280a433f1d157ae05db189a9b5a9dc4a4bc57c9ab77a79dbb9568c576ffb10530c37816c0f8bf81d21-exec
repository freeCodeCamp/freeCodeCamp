import { assert } from '@hapi/hoek';

import { ipVersions } from './uri';

interface Options {
    /**
     * The required CIDR mode.
     *
     * @default 'optional'
     */
    readonly cidr?: Cidr;

    /**
     * The allowed versions.
     *
     * @default ['ipv4', 'ipv6', 'ipvfuture']
     */
    readonly version?: Version | Version[];
}

type Cidr = 'optional' | 'required' | 'forbidden';
type Version = 'ipv4' | 'ipv6' | 'ipvfuture';

interface Expression {
    /** The CIDR mode. */
    cidr: Cidr;

    /** The raw regular expression string. */
    raw: string;

    /** The regular expression. */
    regex: RegExp;

    /** The array of versions allowed. */
    versions: Version[];
}

/**
 * Generates a regular expression used to validate IP addresses.
 *
 * @param options - optional settings.
 *
 * @returns an object with the regular expression and meta data.
 */
export function ipRegex(options: Options = {}): Expression {
    // CIDR

    const cidr = options.cidr || 'optional';
    assert(
        ['required', 'optional', 'forbidden'].includes(cidr),
        'options.cidr must be one of required, optional, forbidden'
    );

    // Versions

    assert(
        options.version === undefined || typeof options.version === 'string' || Array.isArray(options.version),
        'options.version must be a string or an array of string'
    );

    let versions = options.version || ['ipv4', 'ipv6', 'ipvfuture'];
    if (!Array.isArray(versions)) {
        versions = [versions];
    }

    assert(versions.length >= 1, 'options.version must have at least 1 version specified');

    for (const version of versions) {
        assert(typeof version === 'string' && version === version.toLowerCase(), 'Invalid options.version value');

        assert(
            ['ipv4', 'ipv6', 'ipvfuture'].includes(version),
            'options.version contains unknown version ' + version + ' - must be one of ipv4, ipv6, ipvfuture'
        );
    }

    versions = Array.from(new Set(versions));

    // Regex

    const parts = versions.map((version) => {
        // Forbidden

        if (cidr === 'forbidden') {
            return ipVersions[version];
        }

        // Required

        const cidrpart = `\\/${version === 'ipv4' ? ipVersions.v4Cidr : ipVersions.v6Cidr}`;

        if (cidr === 'required') {
            return `${ipVersions[version]}${cidrpart}`;
        }

        // Optional

        return `${ipVersions[version]}(?:${cidrpart})?`;
    });

    const raw = `(?:${parts.join('|')})`;
    const regex = new RegExp(`^${raw}$`);
    return { cidr, versions, regex, raw };
}
