import semver = require("../index");
import SemVer = require("../classes/semver");

/**
 * Pass in a comparison string, and it'll call the corresponding semver comparison function.
 * "===" and "!==" do simple string comparison, but are included for completeness.
 * Throws if an invalid comparison string is provided.
 */
declare function cmp(
    v1: string | SemVer,
    operator: semver.Operator,
    v2: string | SemVer,
    optionsOrLoose?: boolean | semver.Options,
): boolean;

export = cmp;
