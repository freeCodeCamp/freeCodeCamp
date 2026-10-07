/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { diag } from '@opentelemetry/api';
import { ATTR_PROCESS_COMMAND, ATTR_PROCESS_COMMAND_ARGS, ATTR_PROCESS_EXECUTABLE_NAME, ATTR_PROCESS_EXECUTABLE_PATH, ATTR_PROCESS_OWNER, ATTR_PROCESS_PID, ATTR_PROCESS_RUNTIME_DESCRIPTION, ATTR_PROCESS_RUNTIME_NAME, ATTR_PROCESS_RUNTIME_VERSION, } from '../../../semconv';
import * as os from 'os';
/**
 * ProcessDetector will be used to detect the resources related current process running
 * and being instrumented from the NodeJS Process module.
 */
class ProcessDetector {
    detect(_config) {
        const attributes = {
            [ATTR_PROCESS_PID]: process.pid,
            [ATTR_PROCESS_EXECUTABLE_NAME]: process.title,
            [ATTR_PROCESS_EXECUTABLE_PATH]: process.execPath,
            [ATTR_PROCESS_COMMAND_ARGS]: [
                process.argv[0],
                ...process.execArgv,
                ...process.argv.slice(1),
            ],
            [ATTR_PROCESS_RUNTIME_VERSION]: process.versions.node,
            [ATTR_PROCESS_RUNTIME_NAME]: 'nodejs',
            [ATTR_PROCESS_RUNTIME_DESCRIPTION]: 'Node.js',
        };
        if (process.argv.length > 1) {
            attributes[ATTR_PROCESS_COMMAND] = process.argv[1];
        }
        try {
            const userInfo = os.userInfo();
            attributes[ATTR_PROCESS_OWNER] = userInfo.username;
        }
        catch (e) {
            diag.debug(`error obtaining process owner: ${e}`);
        }
        return { attributes };
    }
}
export const processDetector = new ProcessDetector();
//# sourceMappingURL=ProcessDetector.js.map