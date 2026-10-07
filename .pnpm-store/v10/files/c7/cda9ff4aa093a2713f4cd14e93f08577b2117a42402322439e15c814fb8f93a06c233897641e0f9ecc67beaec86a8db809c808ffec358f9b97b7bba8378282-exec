#!/usr/bin/env node
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _os = _interopRequireDefault(require("os"));
var _semver = _interopRequireDefault(require("semver"));
var _util = _interopRequireDefault(require("util"));
var _createCli = require("./create-cli");
var _reporter = _interopRequireDefault(require("./reporter"));
var _ensureWindowsDriveLetterIsUppercase = require("./util/ensure-windows-drive-letter-is-uppercase");
const useJsonLogger = process.argv.slice(2).some(arg => arg.includes(`json`));
if (useJsonLogger) {
  process.env.GATSBY_LOGGER = `json`;
}

// Ensure stable runs on Windows when started from different shells (i.e. c:\dir vs C:\dir)
if (_os.default.platform() === `win32`) {
  (0, _ensureWindowsDriveLetterIsUppercase.ensureWindowsDriveLetterIsUppercase)();
}

// @ts-ignore - TODO: Remove _CFLAGS_ again
const MIN_NODE_VERSION = "5" === `5` ? `18.0.0` : `14.15.0`;
// const NEXT_MIN_NODE_VERSION = `10.13.0`

const {
  version
} = process;
if (!_semver.default.satisfies(version, `>=${MIN_NODE_VERSION}`, {
  includePrerelease: true
})) {
  _reporter.default.panic(_reporter.default.stripIndent(`
      Gatsby requires Node.js ${MIN_NODE_VERSION} or higher (you have ${version}).
      Upgrade Node to the latest stable release: https://gatsby.dev/upgrading-node-js
    `));
}
if (_semver.default.prerelease(version)) {
  _reporter.default.warn(_reporter.default.stripIndent(`
    You are currently using a prerelease version of Node (${version}), which is not supported.
    You can use this for testing, but we do not recommend it in production.
    Before reporting any bugs, please test with a supported version of Node (>=${MIN_NODE_VERSION}).`));
}

// if (!semver.satisfies(version, `>=${NEXT_MIN_NODE_VERSION}`)) {
//   report.warn(
//     report.stripIndent(`
//       Node.js ${version} has reached End of Life status on 31 December, 2019.
//       Gatsby will only actively support ${NEXT_MIN_NODE_VERSION} or higher and drop support for Node 8 soon.
//       Please upgrade Node.js to a currently active LTS release: https://gatsby.dev/upgrading-node-js
//     `)
//   )
// }

process.on(`unhandledRejection`, reason => {
  // This will exit the process in newer Node anyway so lets be consistent
  // across versions and crash

  // reason can be anything, it can be a message, an object, ANYTHING!
  // we convert it to an error object so we don't crash on structured error validation
  if (!(reason instanceof Error)) {
    reason = new Error(_util.default.format(reason));
  }
  _reporter.default.panic(`UNHANDLED REJECTION`, reason);
});
process.on(`uncaughtException`, error => {
  _reporter.default.panic(`UNHANDLED EXCEPTION`, error);
});
(0, _createCli.createCli)(process.argv);