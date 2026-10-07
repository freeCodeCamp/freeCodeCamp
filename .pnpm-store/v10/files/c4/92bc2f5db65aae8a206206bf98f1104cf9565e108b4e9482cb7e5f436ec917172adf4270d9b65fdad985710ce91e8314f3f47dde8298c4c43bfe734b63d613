"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMachineId = void 0;
const execAsync_1 = require("./execAsync");
const api_1 = require("@opentelemetry/api");
async function getMachineId() {
    try {
        const result = await (0, execAsync_1.execAsync)('ioreg -rd1 -c "IOPlatformExpertDevice"');
        const idLine = result.stdout
            .split('\n')
            .find(line => line.includes('IOPlatformUUID'));
        if (!idLine) {
            return undefined;
        }
        const parts = idLine.split('" = "');
        if (parts.length === 2) {
            return parts[1].slice(0, -1);
        }
    }
    catch (e) {
        api_1.diag.debug(`error reading machine id: ${e}`);
    }
    return undefined;
}
exports.getMachineId = getMachineId;
//# sourceMappingURL=getMachineId-darwin.js.map