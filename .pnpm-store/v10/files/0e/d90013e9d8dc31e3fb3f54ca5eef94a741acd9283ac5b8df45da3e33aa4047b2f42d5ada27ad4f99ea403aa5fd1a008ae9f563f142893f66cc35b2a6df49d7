import { isWindows, isMacintosh } from './platform.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
let safeProcess;
// Native sandbox environment
const vscodeGlobal = globalThis.vscode;
if (typeof vscodeGlobal !== 'undefined' && typeof vscodeGlobal.process !== 'undefined') {
    const sandboxProcess = vscodeGlobal.process;
    safeProcess = {
        get platform() { return sandboxProcess.platform; },
        get arch() { return sandboxProcess.arch; },
        get env() { return sandboxProcess.env; },
        cwd() { return sandboxProcess.cwd(); }
    };
}
// Native node.js environment
else if (typeof process !== 'undefined' && typeof process?.versions?.node === 'string') {
    safeProcess = {
        get platform() { return process.platform; },
        get arch() { return process.arch; },
        get env() { return process.env; },
        cwd() { return process.env['VSCODE_CWD'] || process.cwd(); }
    };
}
// Web environment
else {
    safeProcess = {
        // Supported
        get platform() { return isWindows ? 'win32' : isMacintosh ? 'darwin' : 'linux'; },
        get arch() { return undefined; /* arch is undefined in web */ },
        // Unsupported
        get env() { return {}; },
        cwd() { return '/'; }
    };
}
/**
 * Provides safe access to the `cwd` property in node.js, sandboxed or web
 * environments.
 *
 * Note: in web, this property is hardcoded to be `/`.
 *
 * @skipMangle
 */
const cwd = safeProcess.cwd;
/**
 * Provides safe access to the `env` property in node.js, sandboxed or web
 * environments.
 *
 * Note: in web, this property is hardcoded to be `{}`.
 */
const env = safeProcess.env;
/**
 * Provides safe access to the `platform` property in node.js, sandboxed or web
 * environments.
 */
const platform = safeProcess.platform;

export { cwd, env, platform };
