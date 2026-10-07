/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { ATTR_HOST_ARCH, ATTR_HOST_ID, ATTR_HOST_NAME } from '../../../semconv';
import { arch, hostname } from 'os';
import { getMachineId } from './machine-id/getMachineId';
import { normalizeArch } from './utils';
/**
 * HostDetector detects the resources related to the host current process is
 * running on. Currently only non-cloud-based attributes are included.
 */
class HostDetector {
    detect(_config) {
        const attributes = {
            [ATTR_HOST_NAME]: hostname(),
            [ATTR_HOST_ARCH]: normalizeArch(arch()),
            [ATTR_HOST_ID]: getMachineId(),
        };
        return { attributes };
    }
}
export const hostDetector = new HostDetector();
//# sourceMappingURL=HostDetector.js.map