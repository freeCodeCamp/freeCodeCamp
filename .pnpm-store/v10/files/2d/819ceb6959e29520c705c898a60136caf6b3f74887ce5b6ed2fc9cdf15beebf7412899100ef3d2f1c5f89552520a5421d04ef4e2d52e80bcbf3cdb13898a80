/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { merge } from '@opentelemetry/core';
import { defaultResource } from '@opentelemetry/resources';
import { Tracer } from './Tracer';
import { loadDefaultConfig } from './config';
import { MultiSpanProcessor } from './MultiSpanProcessor';
import { reconfigureLimits } from './utility';
import { formatInspect, inspectCustom, settledResourceAttributes, } from './inspect';
export var ForceFlushState;
(function (ForceFlushState) {
    ForceFlushState[ForceFlushState["resolved"] = 0] = "resolved";
    ForceFlushState[ForceFlushState["timeout"] = 1] = "timeout";
    ForceFlushState[ForceFlushState["error"] = 2] = "error";
    ForceFlushState[ForceFlushState["unresolved"] = 3] = "unresolved";
})(ForceFlushState || (ForceFlushState = {}));
/**
 * This class represents a basic tracer provider which platform libraries can extend
 */
export class BasicTracerProvider {
    _config;
    _tracers = new Map();
    _resource;
    _activeSpanProcessor;
    constructor(config = {}) {
        const mergedConfig = merge({}, loadDefaultConfig(), reconfigureLimits(config));
        this._resource = mergedConfig.resource ?? defaultResource();
        this._config = Object.assign({}, mergedConfig, {
            resource: this._resource,
        });
        const spanProcessors = [];
        if (config.spanProcessors?.length) {
            spanProcessors.push(...config.spanProcessors);
        }
        this._activeSpanProcessor = new MultiSpanProcessor(spanProcessors);
    }
    getTracer(name, version, options) {
        const key = `${name}@${version || ''}:${options?.schemaUrl || ''}`;
        if (!this._tracers.has(key)) {
            this._tracers.set(key, new Tracer({ name, version, schemaUrl: options?.schemaUrl }, this._config, this._resource, this._activeSpanProcessor));
        }
        return this._tracers.get(key);
    }
    forceFlush() {
        const timeout = this._config.forceFlushTimeoutMillis;
        const promises = this._activeSpanProcessor['_spanProcessors'].map((spanProcessor) => {
            return new Promise(resolve => {
                let state;
                const timeoutInterval = setTimeout(() => {
                    resolve(new Error(`Span processor did not completed within timeout period of ${timeout} ms`));
                    state = ForceFlushState.timeout;
                }, timeout);
                spanProcessor
                    .forceFlush()
                    .then(() => {
                    clearTimeout(timeoutInterval);
                    if (state !== ForceFlushState.timeout) {
                        state = ForceFlushState.resolved;
                        resolve(state);
                    }
                })
                    .catch(error => {
                    clearTimeout(timeoutInterval);
                    state = ForceFlushState.error;
                    resolve(error);
                });
            });
        });
        return new Promise((resolve, reject) => {
            Promise.all(promises)
                .then(results => {
                const errors = results.filter(result => result !== ForceFlushState.resolved);
                if (errors.length > 0) {
                    reject(errors);
                }
                else {
                    resolve();
                }
            })
                .catch(error => reject([error]));
        });
    }
    shutdown() {
        return this._activeSpanProcessor.shutdown();
    }
    [inspectCustom](depth, options, inspect) {
        const processors = this._activeSpanProcessor['_spanProcessors'];
        const payload = {
            resource: { attributes: settledResourceAttributes(this._resource) },
            tracers: Array.from(this._tracers.keys()),
            spanProcessors: processors.map(p => p.constructor?.name ?? 'SpanProcessor'),
        };
        return formatInspect('BasicTracerProvider', payload, depth, options, inspect);
    }
}
//# sourceMappingURL=BasicTracerProvider.js.map