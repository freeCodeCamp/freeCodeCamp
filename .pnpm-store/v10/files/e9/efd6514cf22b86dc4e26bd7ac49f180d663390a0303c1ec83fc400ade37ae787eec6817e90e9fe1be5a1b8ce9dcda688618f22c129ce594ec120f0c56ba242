"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMachineId = void 0;
const process = require("process");
const execAsync_1 = require("./execAsync");
const api_1 = require("@opentelemetry/api");
async function getMachineId() {
    const args = 'QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid';
    let command = '%windir%\\System32\\REG.exe';
    if (process.arch === 'ia32' && 'PROCESSOR_ARCHITEW6432' in process.env) {
        command = '%windir%\\sysnative\\cmd.exe /c ' + command;
    }
    try {
        const result = await (0, execAsync_1.execAsync)(`${command} ${args}`);
        const parts = result.stdout.split('REG_SZ');
        if (parts.length === 2) {
            return parts[1].trim();
        }
    }
    catch (e) {
        api_1.diag.debug(`error reading machine id: ${e}`);
    }
    return undefined;
}
exports.getMachineId = getMachineId;
//# sourceMappingURL=getMachineId-win.js.map