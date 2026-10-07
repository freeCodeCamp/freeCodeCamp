/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
let serviceName;
/**
 * Returns the default service name for OpenTelemetry resources.
 * In Node.js environments, returns "unknown_service:<process.argv0>".
 * In browser/edge environments, returns "unknown_service".
 */
export function defaultServiceName() {
    if (serviceName === undefined) {
        try {
            const argv0 = globalThis.process.argv0;
            serviceName = argv0 ? `unknown_service:${argv0}` : 'unknown_service';
        }
        catch {
            serviceName = 'unknown_service';
        }
    }
    return serviceName;
}
/** @internal For testing purposes only */
export function _clearDefaultServiceNameCache() {
    serviceName = undefined;
}
//# sourceMappingURL=default-service-name.js.map