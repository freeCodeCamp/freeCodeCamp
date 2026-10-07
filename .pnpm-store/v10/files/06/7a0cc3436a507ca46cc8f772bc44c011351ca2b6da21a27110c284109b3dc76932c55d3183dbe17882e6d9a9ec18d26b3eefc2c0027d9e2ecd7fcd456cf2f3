/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { ATTR_SERVICE_INSTANCE_ID } from '../../../semconv';
import { randomUUID } from 'crypto';
/**
 * ServiceInstanceIdDetector detects the resources related to the service instance ID.
 */
class ServiceInstanceIdDetector {
    detect(_config) {
        return {
            attributes: {
                [ATTR_SERVICE_INSTANCE_ID]: randomUUID(),
            },
        };
    }
}
/**
 * @experimental
 */
export const serviceInstanceIdDetector = new ServiceInstanceIdDetector();
//# sourceMappingURL=ServiceInstanceIdDetector.js.map