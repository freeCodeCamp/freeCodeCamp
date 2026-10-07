"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMachineId = void 0;
const fs_1 = require("fs");
const execAsync_1 = require("./execAsync");
const api_1 = require("@opentelemetry/api");
async function getMachineId() {
    try {
        const result = await fs_1.promises.readFile('/etc/hostid', { encoding: 'utf8' });
        return result.trim();
    }
    catch (e) {
        api_1.diag.debug(`error reading machine id: ${e}`);
    }
    try {
        const result = await (0, execAsync_1.execAsync)('kenv -q smbios.system.uuid');
        return result.stdout.trim();
    }
    catch (e) {
        api_1.diag.debug(`error reading machine id: ${e}`);
    }
    return undefined;
}
exports.getMachineId = getMachineId;
//# sourceMappingURL=getMachineId-bsd.js.map