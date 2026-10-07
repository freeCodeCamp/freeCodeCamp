import semver = require("../index");
import inc = require("../functions/inc");

declare class SemVer {
    constructor(version: string | SemVer, optionsOrLoose?: boolean | semver.RangeOptions);

    raw: string;
    loose: boolean;
    options: semver.Options;
    format(): string;
    inspect(): string;

    major: number;
    minor: number;
    patch: number;
    version: string;
    build: readonly string[];
    prerelease: ReadonlyArray<string | number>;

    /**
     * Compares two versions excluding build identifiers (the bit after `+` in the semantic version string).
     *
     * @return
     * - `0` if `this` == `other`
     * - `1` if `this` is greater
     * - `-1` if `other` is greater.
     */
    compare(other: string | SemVer): 1 | 0 | -1;

    /**
     * Compares the release portion of two versions.
     *
     * @return
     * - `0` if `this` == `other`
     * - `1` if `this` is greater
     * - `-1` if `other` is greater.
     */
    compareMain(other: string | SemVer): 1 | 0 | -1;

    /**
     * Compares the prerelease portion of two versions.
     *
     * @return
     * - `0` if `this` == `other`
     * - `1` if `this` is greater
     * - `-1` if `other` is greater.
     */
    comparePre(other: string | SemVer): 1 | 0 | -1;

    /**
     * Compares the build identifier of two versions.
     *
     * @return
     * - `0` if `this` == `other`
     * - `1` if `this` is greater
     * - `-1` if `other` is greater.
     */
    compareBuild(other: string | SemVer): 1 | 0 | -1;

    inc(
        release: semver.ReleaseType,
        identifier?: string,
        identifierBase?: inc.IdentifierBase,
    ): SemVer;

    toString(): string;
}

export = SemVer;
