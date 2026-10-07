import Range = require("../classes/range");
import SemVer = require("../classes/semver");
import semver = require("../index");

/**
 * Return the highest version in the list that satisfies the range, or null if none of them do.
 */
declare function maxSatisfying<T extends string | SemVer>(
    versions: readonly T[],
    range: string | Range,
    optionsOrLoose?: boolean | semver.RangeOptions,
): T | null;

export = maxSatisfying;
