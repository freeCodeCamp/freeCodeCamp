"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports._clearDefaultServiceNameCache = exports.defaultServiceName = void 0;
let serviceName;
/**
 * Returns the default service name for OpenTelemetry resources.
 * In Node.js environments, returns "unknown_service:<process.argv0>".
 * In browser/edge environments, returns "unknown_service".
 */
function defaultServiceName() {
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
exports.defaultServiceName = defaultServiceName;
/** @internal For testing purposes only */
function _clearDefaultServiceNameCache() {
    serviceName = undefined;
}
exports._clearDefaultServiceNameCache = _clearDefaultServiceNameCache;
//# sourceMappingURL=default-service-name.js.map