/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { promises as fs } from 'fs';
import { execAsync } from './execAsync';
import { diag } from '@opentelemetry/api';
export async function getMachineId() {
    try {
        const result = await fs.readFile('/etc/hostid', { encoding: 'utf8' });
        return result.trim();
    }
    catch (e) {
        diag.debug(`error reading machine id: ${e}`);
    }
    try {
        const result = await execAsync('kenv -q smbios.system.uuid');
        return result.stdout.trim();
    }
    catch (e) {
        diag.debug(`error reading machine id: ${e}`);
    }
    return undefined;
}
//# sourceMappingURL=getMachineId-bsd.js.map