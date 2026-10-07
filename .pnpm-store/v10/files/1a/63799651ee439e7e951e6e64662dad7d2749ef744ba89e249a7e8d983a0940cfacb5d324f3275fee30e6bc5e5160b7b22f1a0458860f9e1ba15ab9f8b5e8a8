"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMachineId = void 0;
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
const fs_1 = require("fs");
const api_1 = require("@opentelemetry/api");
async function getMachineId() {
    const paths = ['/etc/machine-id', '/var/lib/dbus/machine-id'];
    for (const path of paths) {
        try {
            const result = await fs_1.promises.readFile(path, { encoding: 'utf8' });
            return result.trim();
        }
        catch (e) {
            api_1.diag.debug(`error reading machine id: ${e}`);
        }
    }
    return undefined;
}
exports.getMachineId = getMachineId;
//# sourceMappingURL=getMachineId-linux.js.map