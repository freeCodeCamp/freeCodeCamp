import Range = require("../classes/range");
import semver = require("../index");

/**
 * Return a "simplified" range that matches the same items in `versions` list as the range specified.
 * Note that it does *not* guarantee that it would match the same versions in all cases,
 * only for the set of versions provided.
 * This is useful when generating ranges by joining together multiple versions with `||` programmatically,
 * to provide the user with something a bit more ergonomic.
 * If the provided range is shorter in string-length than the generated range, then that is returned.
 */
declare function simplify(ranges: string[], range: string | Range, options?: semver.Options): string | Range;

export = simplify;
