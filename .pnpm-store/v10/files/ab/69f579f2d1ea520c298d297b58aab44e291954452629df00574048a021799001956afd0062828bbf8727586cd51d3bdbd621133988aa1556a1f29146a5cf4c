import SemVer = require("../classes/semver");
import semver = require("../index");

declare namespace inc {
    /** Base number to be used for the prerelease identifier */
    type IdentifierBase = "0" | "1" | false;
}

/**
 * Return the version incremented by the release type (major, premajor, minor, preminor, patch, prepatch, or prerelease), or null if it's not valid.
 */
declare function inc(
    version: string | SemVer,
    release: semver.ReleaseType,
    optionsOrLoose?: boolean | semver.Options,
    identifier?: string,
    identifierBase?: inc.IdentifierBase,
): string | null;
declare function inc(
    version: string | SemVer,
    release: semver.ReleaseType,
    identifier: string,
    identifierBase?: inc.IdentifierBase,
): string | null;

export = inc;
