/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { diag } from '@opentelemetry/api';
/**
 * Placeholder normalize function to replace the node variant in browser runtimes,
 * this should never be called and will perform a no-op and warn if it is called regardless.
 *
 * This is a workaround to fix https://github.com/open-telemetry/opentelemetry-js/issues/4373 until the instrumentation
 * package can be made node-only.
 *
 * @param path input path
 * @return unmodified path
 * @internal
 */
export function normalize(path) {
    diag.warn('Path normalization is not implemented for this platform. To silence this warning, ensure no node-specific instrumentations are loaded, and node-specific types (e.g. InstrumentationNodeModuleFile), are not used in a browser context)');
    return path;
}
//# sourceMappingURL=noop-normalize.js.map