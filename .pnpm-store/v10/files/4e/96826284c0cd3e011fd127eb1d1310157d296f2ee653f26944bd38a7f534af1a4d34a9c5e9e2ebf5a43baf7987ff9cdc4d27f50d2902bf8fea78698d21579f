import semver = require("../index");
import SemVer = require("./semver");

declare class Comparator {
    constructor(comp: string | Comparator, optionsOrLoose?: boolean | semver.Options);

    semver: SemVer;
    operator: "" | "=" | "<" | ">" | "<=" | ">=";
    value: string;
    loose: boolean;
    options: semver.Options;
    parse(comp: string): void;
    test(version: string | SemVer): boolean;
    intersects(comp: Comparator, optionsOrLoose?: boolean | semver.Options): boolean;
}

export = Comparator;
