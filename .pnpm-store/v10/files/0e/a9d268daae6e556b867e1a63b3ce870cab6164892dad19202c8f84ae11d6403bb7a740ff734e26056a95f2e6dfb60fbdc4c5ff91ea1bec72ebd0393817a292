import SemVer = require("../classes/semver");
import semver = require("../index");

/**
 * Return the parsed version as a `SemVer` object.
 *
 * In case `version` is invalid, the function will
 * - throw if `throwErrors` is `true`.
 * - return `null` otherwise.
 */
declare function parse(version?: string | SemVer | null): SemVer | null;
declare function parse(
    version: string | SemVer | null | undefined,
    optionsOrLoose: boolean | semver.Options,
    throwErrors: true,
): SemVer;
declare function parse(
    version: string | SemVer | null | undefined,
    optionsOrLoose: boolean | semver.Options,
    throwErrors?: boolean,
): SemVer | null;

export = parse;
