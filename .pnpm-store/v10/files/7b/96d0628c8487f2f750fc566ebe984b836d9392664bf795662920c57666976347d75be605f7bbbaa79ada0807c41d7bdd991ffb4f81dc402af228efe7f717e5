/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
export const normalizeArch = (nodeArchString) => {
    // Maps from https://nodejs.org/api/os.html#osarch to arch values in spec:
    // https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/resource/semantic_conventions/host.md
    switch (nodeArchString) {
        case 'arm':
            return 'arm32';
        case 'ppc':
            return 'ppc32';
        case 'x64':
            return 'amd64';
        default:
            return nodeArchString;
    }
};
export const normalizeType = (nodePlatform) => {
    // Maps from https://nodejs.org/api/os.html#osplatform to arch values in spec:
    // https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/resource/semantic_conventions/os.md
    switch (nodePlatform) {
        case 'sunos':
            return 'solaris';
        case 'win32':
            return 'windows';
        default:
            return nodePlatform;
    }
};
//# sourceMappingURL=utils.js.map