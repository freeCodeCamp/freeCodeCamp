"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.hostDetector = void 0;
const semconv_1 = require("../../../semconv");
const os_1 = require("os");
const getMachineId_1 = require("./machine-id/getMachineId");
const utils_1 = require("./utils");
/**
 * HostDetector detects the resources related to the host current process is
 * running on. Currently only non-cloud-based attributes are included.
 */
class HostDetector {
    detect(_config) {
        const attributes = {
            [semconv_1.ATTR_HOST_NAME]: (0, os_1.hostname)(),
            [semconv_1.ATTR_HOST_ARCH]: (0, utils_1.normalizeArch)((0, os_1.arch)()),
            [semconv_1.ATTR_HOST_ID]: (0, getMachineId_1.getMachineId)(),
        };
        return { attributes };
    }
}
exports.hostDetector = new HostDetector();
//# sourceMappingURL=HostDetector.js.map