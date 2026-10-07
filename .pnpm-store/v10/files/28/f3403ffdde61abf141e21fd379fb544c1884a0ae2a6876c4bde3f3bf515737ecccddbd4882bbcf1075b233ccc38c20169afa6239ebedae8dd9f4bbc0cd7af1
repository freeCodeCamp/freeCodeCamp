"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicTracerProvider = exports.ForceFlushState = void 0;
const core_1 = require("@opentelemetry/core");
const resources_1 = require("@opentelemetry/resources");
const Tracer_1 = require("./Tracer");
const config_1 = require("./config");
const MultiSpanProcessor_1 = require("./MultiSpanProcessor");
const utility_1 = require("./utility");
const inspect_1 = require("./inspect");
var ForceFlushState;
(function (ForceFlushState) {
    ForceFlushState[ForceFlushState["resolved"] = 0] = "resolved";
    ForceFlushState[ForceFlushState["timeout"] = 1] = "timeout";
    ForceFlushState[ForceFlushState["error"] = 2] = "error";
    ForceFlushState[ForceFlushState["unresolved"] = 3] = "unresolved";
})(ForceFlushState = exports.ForceFlushState || (exports.ForceFlushState = {}));
/**
 * This class represents a basic tracer provider which platform libraries can extend
 */
class BasicTracerProvider {
    _config;
    _tracers = new Map();
    _resource;
    _activeSpanProcessor;
    constructor(config = {}) {
        const mergedConfig = (0, core_1.merge)({}, (0, config_1.loadDefaultConfig)(), (0, utility_1.reconfigureLimits)(config));
        this._resource = mergedConfig.resource ?? (0, resources_1.defaultResource)();
        this._config = Object.assign({}, mergedConfig, {
            resource: this._resource,
        });
        const spanProcessors = [];
        if (config.spanProcessors?.length) {
            spanProcessors.push(...config.spanProcessors);
        }
        this._activeSpanProcessor = new MultiSpanProcessor_1.MultiSpanProcessor(spanProcessors);
    }
    getTracer(name, version, options) {
        const key = `${name}@${version || ''}:${options?.schemaUrl || ''}`;
        if (!this._tracers.has(key)) {
            this._tracers.set(key, new Tracer_1.Tracer({ name, version, schemaUrl: options?.schemaUrl }, this._config, this._resource, this._activeSpanProcessor));
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
    [inspect_1.inspectCustom](depth, options, inspect) {
        const processors = this._activeSpanProcessor['_spanProcessors'];
        const payload = {
            resource: { attributes: (0, inspect_1.settledResourceAttributes)(this._resource) },
            tracers: Array.from(this._tracers.keys()),
            spanProcessors: processors.map(p => p.constructor?.name ?? 'SpanProcessor'),
        };
        return (0, inspect_1.formatInspect)('BasicTracerProvider', payload, depth, options, inspect);
    }
}
exports.BasicTracerProvider = BasicTracerProvider;
//# sourceMappingURL=BasicTracerProvider.js.map