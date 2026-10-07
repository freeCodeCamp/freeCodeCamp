import semver = require("../index");
import Comparator = require("./comparator");
import SemVer = require("./semver");

declare class Range {
    constructor(range: string | Range, optionsOrLoose?: boolean | semver.RangeOptions);

    range: string;
    raw: string;
    loose: boolean;
    options: semver.Options;
    includePrerelease: boolean;
    format(): string;
    inspect(): string;

    set: ReadonlyArray<readonly Comparator[]>;
    parseRange(range: string): readonly Comparator[];
    test(version: string | SemVer): boolean;
    intersects(range: Range, optionsOrLoose?: boolean | semver.Options): boolean;
}
export = Range;
