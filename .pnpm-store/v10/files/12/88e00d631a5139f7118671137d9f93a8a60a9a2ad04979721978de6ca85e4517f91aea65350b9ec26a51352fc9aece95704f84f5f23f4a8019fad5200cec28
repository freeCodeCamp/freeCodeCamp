/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { ATTR_OS_TYPE, ATTR_OS_VERSION } from '../../../semconv';
import { platform, release } from 'os';
import { normalizeType } from './utils';
/**
 * OSDetector detects the resources related to the operating system (OS) on
 * which the process represented by this resource is running.
 */
class OSDetector {
    detect(_config) {
        const attributes = {
            [ATTR_OS_TYPE]: normalizeType(platform()),
            [ATTR_OS_VERSION]: release(),
        };
        return { attributes };
    }
}
export const osDetector = new OSDetector();
//# sourceMappingURL=OSDetector.js.map