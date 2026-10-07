"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.ensureWindowsDriveLetterIsUppercase = ensureWindowsDriveLetterIsUppercase;
var _os = require("os");
var _reporter = _interopRequireDefault(require("../reporter"));
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
function ensureWindowsDriveLetterIsUppercase() {
  const cwd = process.cwd();
  const normalizedCwd = driveLetterToUpperCase(cwd);
  if (cwd !== normalizedCwd) {
    try {
      // When cwd is "c:\dir" then command "cd C:\dir" won't do anything
      // You have to change the dir twice to actually change the casing of the path
      process.chdir((0, _os.tmpdir)());
      process.chdir(normalizedCwd);
    } catch {
      // rollback
      process.chdir(cwd);
    }
    if (normalizedCwd !== process.cwd()) {
      _reporter.default.warn(_reporter.default.stripIndent(`
          Your working directory has a lower case drive letter:
            "${cwd}".
          ---^
          For solid development experience, we recommend switching it to upper case:
            cd "C:\\"
            cd "${normalizedCwd}"
          (Windows requires two directory switches to change the case of the drive letter)
        `));
    }
  }
}
function driveLetterToUpperCase(path) {
  const segments = path.split(`:\\`);
  return segments.length > 1 ? segments.shift().toUpperCase() + `:\\` + segments.join(`:\\`) : path;
}