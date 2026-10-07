import semver = require("../index");
import SemVer = require("../classes/semver");

/**
 * Compares two versions excluding build identifiers (the bit after `+` in the semantic version string).
 *
 * Sorts in ascending order when passed to `Array.sort()`.
 *
 * @return
 * - `0` if `v1` == `v2`
 * - `1` if `v1` is greater
 * - `-1` if `v2` is greater.
 */
declare function compare(
    v1: string | SemVer,
    v2: string | SemVer,
    optionsOrLoose?: boolean | semver.Options,
): 1 | 0 | -1;

export = compare;
