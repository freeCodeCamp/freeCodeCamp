"use strict";
// Here we mock the global `process` variable in case we are not in Node's environment.
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProcess = void 0;
/**
 * Looks to return a `process` object, if one is available.
 *
 * The global `process` is returned if defined;
 * otherwise `require('process')` is attempted.
 *
 * If that fails, `undefined` is returned.
 *
 * @return {IProcess | undefined}
 */
var maybeReturnProcess = function () {
    if (typeof process !== 'undefined') {
        return process;
    }
    try {
        return require('process');
    }
    catch (_a) {
        return undefined;
    }
};
function createProcess() {
    var p = maybeReturnProcess() || {};
    if (!p.cwd)
        p.cwd = function () { return '/'; };
    if (!p.nextTick)
        p.nextTick = require('./setImmediate').default;
    if (!p.emitWarning)
        p.emitWarning = function (message, type) {
            // tslint:disable-next-line:no-console
            console.warn("".concat(type).concat(type ? ': ' : '').concat(message));
        };
    if (!p.env)
        p.env = {};
    return p;
}
exports.createProcess = createProcess;
exports.default = createProcess();
