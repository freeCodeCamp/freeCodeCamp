"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.satisfiesSemvers = exports.default = void 0;
var _toPairs2 = _interopRequireDefault(require("lodash/toPairs"));
var _semver = _interopRequireDefault(require("semver"));
const satisfiesSemvers = semverConstraints => {
  // Check each semver check for the flag.
  // If any are false, then the flag doesn't pass
  const result = (0, _toPairs2.default)(semverConstraints).every(([packageName, semverConstraint]) => {
    let packageVersion;
    try {
      packageVersion = require(`${packageName}/package.json`).version;
    } catch (e) {
      return false;
    }

    // We care if the semver check doesn't pass.
    return _semver.default.satisfies(packageVersion, semverConstraint, {
      includePrerelease: true
    });
  });
  return result;
};
exports.satisfiesSemvers = satisfiesSemvers;
const activeFlags = [{
  name: `FAST_DEV`,
  env: `GATSBY_EXPERIMENTAL_FAST_DEV`,
  command: `develop`,
  telemetryId: `FastDev`,
  experimental: false,
  description: `Enable all experiments aimed at improving develop server start time & develop DX.`,
  includedFlags: [`DEV_SSR`, `PRESERVE_FILE_DOWNLOAD_CACHE`],
  testFitness: () => true
}, {
  name: `DEV_SSR`,
  env: `GATSBY_EXPERIMENTAL_DEV_SSR`,
  command: `develop`,
  telemetryId: `DevSsr`,
  experimental: false,
  description: `Server Side Render (SSR) pages on full reloads during develop. Helps you detect SSR bugs and fix them without needing to do full builds.`,
  umbrellaIssue: `https://gatsby.dev/dev-ssr-feedback`,
  testFitness: () => true
}, {
  name: `PRESERVE_FILE_DOWNLOAD_CACHE`,
  env: `GATSBY_EXPERIMENTAL_PRESERVE_FILE_DOWNLOAD_CACHE`,
  command: `all`,
  telemetryId: `PreserveFileDownloadCache`,
  experimental: false,
  description: `Don't delete the downloaded files cache when changing gatsby-node.js & gatsby-config.js files.`,
  umbrellaIssue: `https://gatsby.dev/cache-clearing-feedback`,
  testFitness: () => true
}, {
  name: `PARALLEL_SOURCING`,
  env: `GATSBY_EXPERIMENTAL_PARALLEL_SOURCING`,
  command: `all`,
  telemetryId: `ParallelSourcing`,
  experimental: true,
  description: `Run all source plugins at the same time instead of serially. For sites with multiple source plugins, this can speedup sourcing and transforming considerably.`,
  umbrellaIssue: `https://gatsby.dev/parallel-sourcing-feedback`,
  testFitness: () => true
}, {
  name: `DETECT_NODE_MUTATIONS`,
  env: `GATSBY_DETECT_NODE_MUTATIONS`,
  command: `all`,
  telemetryId: `DetectNodeMutations`,
  description: `Diagnostic mode to log any attempts to mutate node directly. Helpful when debugging missing data problems. See https://gatsby.dev/debugging-missing-data for more details.`,
  experimental: false,
  testFitness: () => true
}, {
  name: `PARTIAL_HYDRATION`,
  env: `GATSBY_PARTIAL_HYDRATION`,
  command: `build`,
  telemetryId: `PartialHydration`,
  description: `Enable partial hydration to reduce Total Blocking Time and Time To Interactive `,
  umbrellaIssue: `https://gatsby.dev/partial-hydration-umbrella-issue`,
  experimental: true,
  testFitness: () => {
    const v18Constraint = {
      react: `>=18.0.0`
    };
    const v0Constraint = {
      react: `^0.0.0`
    };
    return "5" === `5` && (satisfiesSemvers(v18Constraint) || satisfiesSemvers(v0Constraint));
  },
  requires: Number("5") < 5 ? `Partial hydration is only available in Gatsby V5. Please upgrade Gatsby.` : `Partial hydration requires React 18+ to work.`
}];
var _default = activeFlags;
exports.default = _default;
//# sourceMappingURL=flags.js.map