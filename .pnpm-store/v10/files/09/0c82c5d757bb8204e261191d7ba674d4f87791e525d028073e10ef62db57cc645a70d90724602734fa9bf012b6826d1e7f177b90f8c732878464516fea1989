"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.osDetector = void 0;
const semconv_1 = require("../../../semconv");
const os_1 = require("os");
const utils_1 = require("./utils");
/**
 * OSDetector detects the resources related to the operating system (OS) on
 * which the process represented by this resource is running.
 */
class OSDetector {
    detect(_config) {
        const attributes = {
            [semconv_1.ATTR_OS_TYPE]: (0, utils_1.normalizeType)((0, os_1.platform)()),
            [semconv_1.ATTR_OS_VERSION]: (0, os_1.release)(),
        };
        return { attributes };
    }
}
exports.osDetector = new OSDetector();
//# sourceMappingURL=OSDetector.js.map