/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { execAsync } from './execAsync';
import { diag } from '@opentelemetry/api';
export async function getMachineId() {
    try {
        const result = await execAsync('ioreg -rd1 -c "IOPlatformExpertDevice"');
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
        diag.debug(`error reading machine id: ${e}`);
    }
    return undefined;
}
//# sourceMappingURL=getMachineId-darwin.js.map