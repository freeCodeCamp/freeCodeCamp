"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUPPORTED_TYPESCRIPT_VERSIONS = void 0;
exports.warnAboutTSVersion = warnAboutTSVersion;
const semver_1 = __importDefault(require("semver"));
const ts = __importStar(require("typescript"));
const version_1 = require("../version");
/**
 * This needs to be kept in sync with package.json in the typescript-eslint monorepo
 */
exports.SUPPORTED_TYPESCRIPT_VERSIONS = '>=4.8.4 <6.1.0';
/*
 * The semver package will ignore prerelease ranges, and we don't want to explicitly document every one
 * List them all separately here, so we can automatically create the full string
 */
const SUPPORTED_PRERELEASE_RANGES = [];
const ACTIVE_TYPESCRIPT_VERSION = ts.version;
const isRunningSupportedTypeScriptVersion = semver_1.default.satisfies(ACTIVE_TYPESCRIPT_VERSION, [exports.SUPPORTED_TYPESCRIPT_VERSIONS, ...SUPPORTED_PRERELEASE_RANGES].join(' || '));
let warnedAboutTSVersion = false;
function warnAboutTSVersion(parseSettings, passedLoggerFn) {
    if (isRunningSupportedTypeScriptVersion || warnedAboutTSVersion) {
        return;
    }
    if (passedLoggerFn ||
        // See https://github.com/typescript-eslint/typescript-eslint/issues/7896
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        (typeof process === 'undefined' ? false : process.stdout?.isTTY)) {
        const border = '=============';
        const versionWarning = [
            border,
            '\n',
            'WARNING: You are currently running a version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree.',
            '\n',
            `* @typescript-eslint/typescript-estree version: ${version_1.version}`,
            `* Supported TypeScript versions: ${exports.SUPPORTED_TYPESCRIPT_VERSIONS}`,
            `* Your TypeScript version: ${ACTIVE_TYPESCRIPT_VERSION}`,
            '\n',
            'Please only submit bug reports when using the officially supported version.',
            '\n',
            border,
        ].join('\n');
        parseSettings.log(versionWarning);
    }
    warnedAboutTSVersion = true;
}
