/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { promises as fs } from 'fs';
import { diag } from '@opentelemetry/api';
export async function getMachineId() {
    const paths = ['/etc/machine-id', '/var/lib/dbus/machine-id'];
    for (const path of paths) {
        try {
            const result = await fs.readFile(path, { encoding: 'utf8' });
            return result.trim();
        }
        catch (e) {
            diag.debug(`error reading machine id: ${e}`);
        }
    }
    return undefined;
}
//# sourceMappingURL=getMachineId-linux.js.map