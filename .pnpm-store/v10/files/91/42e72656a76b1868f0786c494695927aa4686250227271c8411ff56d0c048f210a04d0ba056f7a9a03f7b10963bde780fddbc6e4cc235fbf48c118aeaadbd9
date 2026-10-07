"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceInstanceIdDetector = void 0;
const semconv_1 = require("../../../semconv");
const crypto_1 = require("crypto");
/**
 * ServiceInstanceIdDetector detects the resources related to the service instance ID.
 */
class ServiceInstanceIdDetector {
    detect(_config) {
        return {
            attributes: {
                [semconv_1.ATTR_SERVICE_INSTANCE_ID]: (0, crypto_1.randomUUID)(),
            },
        };
    }
}
/**
 * @experimental
 */
exports.serviceInstanceIdDetector = new ServiceInstanceIdDetector();
//# sourceMappingURL=ServiceInstanceIdDetector.js.map