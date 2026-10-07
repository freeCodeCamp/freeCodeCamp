/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { normalize } from './platform/index';
export class InstrumentationNodeModuleFile {
    name;
    supportedVersions;
    patch;
    unpatch;
    constructor(name, supportedVersions, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    patch, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    unpatch) {
        this.name = normalize(name);
        this.supportedVersions = supportedVersions;
        this.patch = patch;
        this.unpatch = unpatch;
    }
}
//# sourceMappingURL=instrumentationNodeModuleFile.js.map