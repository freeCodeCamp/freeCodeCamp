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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.warnAboutTSVersion = void 0;
const semver_1 = __importDefault(require("semver"));
const ts = __importStar(require("typescript"));
/**
 * This needs to be kept in sync with /docs/maintenance/Versioning.mdx
 * in the typescript-eslint monorepo
 */
const SUPPORTED_TYPESCRIPT_VERSIONS = '>=3.3.1 <5.2.0';
/*
 * The semver package will ignore prerelease ranges, and we don't want to explicitly document every one
 * List them all separately here, so we can automatically create the full string
 */
const SUPPORTED_PRERELEASE_RANGES = [];
const ACTIVE_TYPESCRIPT_VERSION = ts.version;
const isRunningSupportedTypeScriptVersion = semver_1.default.satisfies(ACTIVE_TYPESCRIPT_VERSION, [SUPPORTED_TYPESCRIPT_VERSIONS]
    .concat(SUPPORTED_PRERELEASE_RANGES)
    .join(' || '));
let warnedAboutTSVersion = false;
function warnAboutTSVersion(parseSettings) {
    var _a;
    if (!isRunningSupportedTypeScriptVersion && !warnedAboutTSVersion) {
        const isTTY = typeof process === 'undefined' ? false : (_a = process.stdout) === null || _a === void 0 ? void 0 : _a.isTTY;
        if (isTTY) {
            const border = '=============';
            const versionWarning = [
                border,
                'WARNING: You are currently running a version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree.',
                'You may find that it works just fine, or you may not.',
                `SUPPORTED TYPESCRIPT VERSIONS: ${SUPPORTED_TYPESCRIPT_VERSIONS}`,
                `YOUR TYPESCRIPT VERSION: ${ACTIVE_TYPESCRIPT_VERSION}`,
                'Please only submit bug reports when using the officially supported version.',
                border,
            ];
            parseSettings.log(versionWarning.join('\n\n'));
        }
        warnedAboutTSVersion = true;
    }
}
exports.warnAboutTSVersion = warnAboutTSVersion;
//# sourceMappingURL=warnAboutTSVersion.js.map