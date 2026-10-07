"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultResource = exports.emptyResource = exports.resourceFromDetectedResource = exports.resourceFromAttributes = void 0;
const api_1 = require("@opentelemetry/api");
const core_1 = require("@opentelemetry/core");
const semantic_conventions_1 = require("@opentelemetry/semantic-conventions");
const default_service_name_1 = require("./default-service-name");
const utils_1 = require("./utils");
class ResourceImpl {
    _rawAttributes;
    _asyncAttributesPending = false;
    _schemaUrl;
    _memoizedAttributes;
    static FromAttributeList(attributes, options) {
        const res = new ResourceImpl({}, options);
        res._rawAttributes = guardedRawAttributes(attributes);
        res._asyncAttributesPending =
            attributes.filter(([_, val]) => (0, utils_1.isPromiseLike)(val)).length > 0;
        return res;
    }
    constructor(
    /**
     * A dictionary of attributes with string keys and values that provide
     * information about the entity as numbers, strings or booleans
     * TODO: Consider to add check/validation on attributes.
     */
    resource, options) {
        const attributes = resource.attributes ?? {};
        this._rawAttributes = Object.entries(attributes).map(([k, v]) => {
            if ((0, utils_1.isPromiseLike)(v)) {
                // side-effect
                this._asyncAttributesPending = true;
            }
            return [k, v];
        });
        this._rawAttributes = guardedRawAttributes(this._rawAttributes);
        this._schemaUrl = validateSchemaUrl(options?.schemaUrl);
    }
    get asyncAttributesPending() {
        return this._asyncAttributesPending;
    }
    async waitForAsyncAttributes() {
        if (!this.asyncAttributesPending) {
            return;
        }
        for (let i = 0; i < this._rawAttributes.length; i++) {
            const [k, v] = this._rawAttributes[i];
            this._rawAttributes[i] = [k, (0, utils_1.isPromiseLike)(v) ? await v : v];
        }
        this._asyncAttributesPending = false;
    }
    get attributes() {
        if (this.asyncAttributesPending) {
            api_1.diag.error('Accessing resource attributes before async attributes settled');
        }
        if (this._memoizedAttributes) {
            return this._memoizedAttributes;
        }
        const attrs = {};
        for (const [k, v] of this._rawAttributes) {
            if ((0, utils_1.isPromiseLike)(v)) {
                api_1.diag.debug(`Unsettled resource attribute ${k} skipped`);
                continue;
            }
            if (v != null) {
                attrs[k] ??= v;
            }
        }
        // only memoize output if all attributes are settled
        if (!this._asyncAttributesPending) {
            this._memoizedAttributes = attrs;
        }
        return attrs;
    }
    getRawAttributes() {
        return this._rawAttributes;
    }
    get schemaUrl() {
        return this._schemaUrl;
    }
    merge(resource) {
        if (resource == null)
            return this;
        // Order is important
        // Spec states incoming attributes override existing attributes
        const mergedSchemaUrl = mergeSchemaUrl(this, resource);
        const mergedOptions = mergedSchemaUrl
            ? { schemaUrl: mergedSchemaUrl }
            : undefined;
        return ResourceImpl.FromAttributeList([...resource.getRawAttributes(), ...this.getRawAttributes()], mergedOptions);
    }
}
function resourceFromAttributes(attributes, options) {
    return ResourceImpl.FromAttributeList(Object.entries(attributes), options);
}
exports.resourceFromAttributes = resourceFromAttributes;
function resourceFromDetectedResource(detectedResource, options) {
    return new ResourceImpl(detectedResource, options);
}
exports.resourceFromDetectedResource = resourceFromDetectedResource;
function emptyResource() {
    return resourceFromAttributes({});
}
exports.emptyResource = emptyResource;
function defaultResource() {
    return resourceFromAttributes({
        [semantic_conventions_1.ATTR_SERVICE_NAME]: (0, default_service_name_1.defaultServiceName)(),
        [semantic_conventions_1.ATTR_TELEMETRY_SDK_LANGUAGE]: core_1.SDK_INFO[semantic_conventions_1.ATTR_TELEMETRY_SDK_LANGUAGE],
        [semantic_conventions_1.ATTR_TELEMETRY_SDK_NAME]: core_1.SDK_INFO[semantic_conventions_1.ATTR_TELEMETRY_SDK_NAME],
        [semantic_conventions_1.ATTR_TELEMETRY_SDK_VERSION]: core_1.SDK_INFO[semantic_conventions_1.ATTR_TELEMETRY_SDK_VERSION],
    });
}
exports.defaultResource = defaultResource;
function guardedRawAttributes(attributes) {
    return attributes.map(([k, v]) => {
        if ((0, utils_1.isPromiseLike)(v)) {
            return [
                k,
                v.catch(err => {
                    api_1.diag.debug('promise rejection for resource attribute: %s - %s', k, err);
                    return undefined;
                }),
            ];
        }
        return [k, v];
    });
}
function validateSchemaUrl(schemaUrl) {
    if (typeof schemaUrl === 'string' || schemaUrl === undefined) {
        return schemaUrl;
    }
    api_1.diag.warn('Schema URL must be string or undefined, got %s. Schema URL will be ignored.', schemaUrl);
    return undefined;
}
function mergeSchemaUrl(old, updating) {
    const oldSchemaUrl = old?.schemaUrl;
    const updatingSchemaUrl = updating?.schemaUrl;
    const isOldEmpty = oldSchemaUrl === undefined || oldSchemaUrl === '';
    const isUpdatingEmpty = updatingSchemaUrl === undefined || updatingSchemaUrl === '';
    if (isOldEmpty) {
        return updatingSchemaUrl;
    }
    if (isUpdatingEmpty) {
        return oldSchemaUrl;
    }
    if (oldSchemaUrl === updatingSchemaUrl) {
        return oldSchemaUrl;
    }
    api_1.diag.warn('Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.', oldSchemaUrl, updatingSchemaUrl);
    return undefined;
}
//# sourceMappingURL=ResourceImpl.js.map