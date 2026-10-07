/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
export const GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
export const _global = globalThis;
/**
 * Make a function which accepts a version integer and returns the instance of an API if the version
 * is compatible, or a fallback version (usually NOOP) if it is not.
 *
 * @param requiredVersion Backwards compatibility version which is required to return the instance
 * @param instance Instance which should be returned if the required version is compatible
 * @param fallback Fallback instance, usually NOOP, which will be returned if the required version is not compatible
 */
export function makeGetter(requiredVersion, instance, fallback) {
    return (version) => version === requiredVersion ? instance : fallback;
}
/**
 * A number which should be incremented each time a backwards incompatible
 * change is made to the API. This number is used when an API package
 * attempts to access the global API to ensure it is getting a compatible
 * version. If the global API is not compatible with the API package
 * attempting to get it, a NOOP API implementation will be returned.
 */
export const API_BACKWARDS_COMPATIBILITY_VERSION = 1;
//# sourceMappingURL=global-utils.js.map