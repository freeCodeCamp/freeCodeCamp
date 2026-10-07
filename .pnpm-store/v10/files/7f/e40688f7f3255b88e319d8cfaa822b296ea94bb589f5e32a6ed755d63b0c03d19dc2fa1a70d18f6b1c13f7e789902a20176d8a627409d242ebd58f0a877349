/**
 * This function ensures that the current working directory on Windows
 * always has an uppercase drive letter (i.e., C: vs. c:).
 *
 * Why?
 * 1. Different utils like "true-case-path", "normalize-path", "slash" treat Windows
 * drive letter differently. "true-case-path" will uppercase, others usually don't care.
 * As a result path normalization produces different results depending on current cwd (c: vs. C:)
 * which manifests in weird bugs that are very hard to debug.
 *
 * We can't control community plugins or site code, so everything should be working
 * even with a different set of libraries.
 *
 * Related: https://github.com/Profiscience/true-case-path/issues/3
 *
 * 2. Builds save some paths in a cache. If you run the first build from "c:" shell
 * and then the next one from "C:" shell, you may get a bunch of webpack warnings
 * because it expects module paths to be case-sensitive.
 */
export declare function ensureWindowsDriveLetterIsUppercase(): void;
