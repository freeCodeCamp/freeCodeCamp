/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { diag } from '@opentelemetry/api';
import { emptyResource, resourceFromDetectedResource } from './ResourceImpl';
/**
 * Runs all resource detectors and returns the results merged into a single Resource.
 *
 * @param config Configuration for resource detection
 */
export const detectResources = (config = {}) => {
    const resources = (config.detectors || []).map(d => {
        try {
            const resource = resourceFromDetectedResource(d.detect(config));
            diag.debug(`${d.constructor.name} found resource.`, resource);
            return resource;
        }
        catch (e) {
            diag.debug(`${d.constructor.name} failed: ${e.message}`);
            return emptyResource();
        }
    });
    return resources.reduce((acc, resource) => acc.merge(resource), emptyResource());
};
//# sourceMappingURL=detect-resources.js.map