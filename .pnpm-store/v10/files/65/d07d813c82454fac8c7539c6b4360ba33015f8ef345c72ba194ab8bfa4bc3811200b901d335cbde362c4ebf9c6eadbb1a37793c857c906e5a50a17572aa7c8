"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.processDetector = void 0;
const api_1 = require("@opentelemetry/api");
const semconv_1 = require("../../../semconv");
const os = require("os");
/**
 * ProcessDetector will be used to detect the resources related current process running
 * and being instrumented from the NodeJS Process module.
 */
class ProcessDetector {
    detect(_config) {
        const attributes = {
            [semconv_1.ATTR_PROCESS_PID]: process.pid,
            [semconv_1.ATTR_PROCESS_EXECUTABLE_NAME]: process.title,
            [semconv_1.ATTR_PROCESS_EXECUTABLE_PATH]: process.execPath,
            [semconv_1.ATTR_PROCESS_COMMAND_ARGS]: [
                process.argv[0],
                ...process.execArgv,
                ...process.argv.slice(1),
            ],
            [semconv_1.ATTR_PROCESS_RUNTIME_VERSION]: process.versions.node,
            [semconv_1.ATTR_PROCESS_RUNTIME_NAME]: 'nodejs',
            [semconv_1.ATTR_PROCESS_RUNTIME_DESCRIPTION]: 'Node.js',
        };
        if (process.argv.length > 1) {
            attributes[semconv_1.ATTR_PROCESS_COMMAND] = process.argv[1];
        }
        try {
            const userInfo = os.userInfo();
            attributes[semconv_1.ATTR_PROCESS_OWNER] = userInfo.username;
        }
        catch (e) {
            api_1.diag.debug(`error obtaining process owner: ${e}`);
        }
        return { attributes };
    }
}
exports.processDetector = new ProcessDetector();
//# sourceMappingURL=ProcessDetector.js.map