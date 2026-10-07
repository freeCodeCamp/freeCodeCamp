/**
 * @fileoverview Main entrypoint for libraries using yargs-parser in Node.js
 * CJS and ESM environments.
 *
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */
var _a, _b, _c;
import { format } from 'util';
import { normalize, resolve } from 'path';
import { camelCase, decamelize, looksLikeNumber } from './string-utils.js';
import { YargsParser } from './yargs-parser.js';
import { readFileSync } from 'fs';
// See https://github.com/yargs/yargs-parser#supported-nodejs-versions for our
// version support policy. The YARGS_MIN_NODE_VERSION is used for testing only.
const minNodeVersion = (process && process.env && process.env.YARGS_MIN_NODE_VERSION)
    ? Number(process.env.YARGS_MIN_NODE_VERSION)
    : 12;
const nodeVersion = (_b = (_a = process === null || process === void 0 ? void 0 : process.versions) === null || _a === void 0 ? void 0 : _a.node) !== null && _b !== void 0 ? _b : (_c = process === null || process === void 0 ? void 0 : process.version) === null || _c === void 0 ? void 0 : _c.slice(1);
if (nodeVersion) {
    const major = Number(nodeVersion.match(/^([^.]+)/)[1]);
    if (major < minNodeVersion) {
        throw Error(`yargs parser supports a minimum Node.js version of ${minNodeVersion}. Read our version support policy: https://github.com/yargs/yargs-parser#supported-nodejs-versions`);
    }
}
// Creates a yargs-parser instance using Node.js standard libraries:
const env = process ? process.env : {};
const parser = new YargsParser({
    cwd: process.cwd,
    env: () => {
        return env;
    },
    format,
    normalize,
    resolve,
    // TODO: figure  out a  way to combine ESM and CJS coverage, such  that
    // we can exercise all the lines below:
    require: (path) => {
        if (typeof require !== 'undefined') {
            return require(path);
        }
        else if (path.match(/\.json$/)) {
            // Addresses: https://github.com/yargs/yargs/issues/2040
            return JSON.parse(readFileSync(path, 'utf8'));
        }
        else {
            throw Error('only .json config files are supported in ESM');
        }
    }
});
const yargsParser = function Parser(args, opts) {
    const result = parser.parse(args.slice(), opts);
    return result.argv;
};
yargsParser.detailed = function (args, opts) {
    return parser.parse(args.slice(), opts);
};
yargsParser.camelCase = camelCase;
yargsParser.decamelize = decamelize;
yargsParser.looksLikeNumber = looksLikeNumber;
export default yargsParser;
