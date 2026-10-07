"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferSingleRun = void 0;
const path_1 = require("path");
/**
 * ESLint (and therefore typescript-eslint) is used in both "single run"/one-time contexts,
 * such as an ESLint CLI invocation, and long-running sessions (such as continuous feedback
 * on a file in an IDE).
 *
 * When typescript-eslint handles TypeScript Program management behind the scenes, this distinction
 * is important because there is significant overhead to managing the so called Watch Programs
 * needed for the long-running use-case. We therefore use the following logic to figure out which
 * of these contexts applies to the current execution.
 *
 * @returns Whether this is part of a single run, rather than a long-running process.
 */
function inferSingleRun(options) {
    if (
    // single-run implies type-aware linting - no projects means we can't be in single-run mode
    (options === null || options === void 0 ? void 0 : options.project) == null ||
        // programs passed via options means the user should be managing the programs, so we shouldn't
        // be creating our own single-run programs accidentally
        (options === null || options === void 0 ? void 0 : options.programs) != null) {
        return false;
    }
    // Allow users to explicitly inform us of their intent to perform a single run (or not) with TSESTREE_SINGLE_RUN
    if (process.env.TSESTREE_SINGLE_RUN === 'false') {
        return false;
    }
    if (process.env.TSESTREE_SINGLE_RUN === 'true') {
        return true;
    }
    // Currently behind a flag while we gather real-world feedback
    if (options === null || options === void 0 ? void 0 : options.allowAutomaticSingleRunInference) {
        if (
        // Default to single runs for CI processes. CI=true is set by most CI providers by default.
        process.env.CI === 'true' ||
            // This will be true for invocations such as `npx eslint ...` and `./node_modules/.bin/eslint ...`
            process.argv[1].endsWith((0, path_1.normalize)('node_modules/.bin/eslint'))) {
            return true;
        }
    }
    /**
     * We default to assuming that this run could be part of a long-running session (e.g. in an IDE)
     * and watch programs will therefore be required.
     *
     * Unless we can reliably infer otherwise, we default to assuming that this run could be part
     * of a long-running session (e.g. in an IDE) and watch programs will therefore be required
     */
    return false;
}
exports.inferSingleRun = inferSingleRun;
//# sourceMappingURL=inferSingleRun.js.map