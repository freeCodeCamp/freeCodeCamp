"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMachineId = void 0;
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
const process = require("process");
let getMachineIdImpl;
async function getMachineId() {
    if (!getMachineIdImpl) {
        switch (process.platform) {
            case 'darwin':
                getMachineIdImpl = (await import('./getMachineId-darwin.js'))
                    .getMachineId;
                break;
            case 'linux':
                getMachineIdImpl = (await import('./getMachineId-linux.js'))
                    .getMachineId;
                break;
            case 'freebsd':
                getMachineIdImpl = (await import('./getMachineId-bsd.js')).getMachineId;
                break;
            case 'win32':
                getMachineIdImpl = (await import('./getMachineId-win.js')).getMachineId;
                break;
            default:
                getMachineIdImpl = (await import('./getMachineId-unsupported.js'))
                    .getMachineId;
                break;
        }
    }
    return getMachineIdImpl();
}
exports.getMachineId = getMachineId;
//# sourceMappingURL=getMachineId.js.map