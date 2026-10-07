"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectResources = void 0;
const api_1 = require("@opentelemetry/api");
const ResourceImpl_1 = require("./ResourceImpl");
/**
 * Runs all resource detectors and returns the results merged into a single Resource.
 *
 * @param config Configuration for resource detection
 */
const detectResources = (config = {}) => {
    const resources = (config.detectors || []).map(d => {
        try {
            const resource = (0, ResourceImpl_1.resourceFromDetectedResource)(d.detect(config));
            api_1.diag.debug(`${d.constructor.name} found resource.`, resource);
            return resource;
        }
        catch (e) {
            api_1.diag.debug(`${d.constructor.name} failed: ${e.message}`);
            return (0, ResourceImpl_1.emptyResource)();
        }
    });
    return resources.reduce((acc, resource) => acc.merge(resource), (0, ResourceImpl_1.emptyResource)());
};
exports.detectResources = detectResources;
//# sourceMappingURL=detect-resources.js.map