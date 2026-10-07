"use strict";
/* eslint-disable @typescript-eslint/no-namespace */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESLint = void 0;
const eslint_1 = require("eslint");
// We want to export this class always so it's easy for end users to consume.
// However on ESLint v6, this class will not exist, so we provide a fallback to make it clear
// The only users of this should be users scripting ESLint locally, so _they_ should have the correct version installed.
const _ESLint = (eslint_1.ESLint !== null && eslint_1.ESLint !== void 0 ? eslint_1.ESLint : function () {
    throw new Error('Attempted to construct an ESLint instance on less than ESLint v7.0.0');
});
/**
 * The ESLint class is the primary class to use in Node.js applications.
 * This class depends on the Node.js fs module and the file system, so you cannot use it in browsers.
 *
 * If you want to lint code on browsers, use the Linter class instead.
 *
 * @since 7.0.0
 */
class ESLint extends _ESLint {
}
exports.ESLint = ESLint;
//# sourceMappingURL=ESLint.js.map