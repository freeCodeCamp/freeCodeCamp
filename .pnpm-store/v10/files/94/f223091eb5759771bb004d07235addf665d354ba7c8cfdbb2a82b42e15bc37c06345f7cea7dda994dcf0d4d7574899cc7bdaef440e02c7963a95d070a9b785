"use strict";
/* eslint-disable @typescript-eslint/no-namespace */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacyESLint = void 0;
const eslint_1 = require("eslint");
const use_at_your_own_risk_1 = __importDefault(require("eslint/use-at-your-own-risk"));
function throwMissingLegacyESLintError() {
    throw new Error('LegacyESLint is not available with the current version of ESLint.');
}
/* eslint-disable-next-line @typescript-eslint/no-extraneous-class */
class MissingLegacyESLint {
    static configType = 'eslintrc';
    static version = eslint_1.ESLint.version;
    constructor() {
        throwMissingLegacyESLintError();
    }
    static getErrorResults() {
        throwMissingLegacyESLintError();
    }
    static outputFixes() {
        throwMissingLegacyESLintError();
    }
}
/**
 * The ESLint class is the primary class to use in Node.js applications.
 * This class depends on the Node.js fs module and the file system, so you cannot use it in browsers.
 *
 * If you want to lint code on browsers, use the Linter class instead.
 */
class LegacyESLint extends (use_at_your_own_risk_1.default.LegacyESLint ??
    MissingLegacyESLint) {
}
exports.LegacyESLint = LegacyESLint;
