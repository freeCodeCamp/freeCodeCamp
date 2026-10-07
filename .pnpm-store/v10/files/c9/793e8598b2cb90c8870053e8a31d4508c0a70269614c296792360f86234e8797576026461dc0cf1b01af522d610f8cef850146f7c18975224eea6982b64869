"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositePropagator = void 0;
const api_1 = require("@opentelemetry/api");
/** Combines multiple propagators into a single propagator. */
class CompositePropagator {
    _propagators;
    _fields;
    /**
     * Construct a composite propagator from a list of propagators.
     *
     * @param [config] Configuration object for composite propagator
     */
    constructor(config = {}) {
        this._propagators = config.propagators ?? [];
        const fields = new Set();
        for (const propagator of this._propagators) {
            // older propagators may not have fields function, null check to be sure
            const propagatorFields = typeof propagator.fields === 'function' ? propagator.fields() : [];
            for (const field of propagatorFields) {
                fields.add(field);
            }
        }
        this._fields = Array.from(fields);
    }
    /**
     * Run each of the configured propagators with the given context and carrier.
     * Propagators are run in the order they are configured, so if multiple
     * propagators write the same carrier key, the propagator later in the list
     * will "win".
     *
     * @param context Context to inject
     * @param carrier Carrier into which context will be injected
     */
    inject(context, carrier, setter) {
        for (const propagator of this._propagators) {
            try {
                propagator.inject(context, carrier, setter);
            }
            catch (err) {
                api_1.diag.warn(`Failed to inject with ${propagator.constructor.name}. Err: ${err.message}`);
            }
        }
    }
    /**
     * Run each of the configured propagators with the given context and carrier.
     * Propagators are run in the order they are configured, so if multiple
     * propagators write the same context key, the propagator later in the list
     * will "win".
     *
     * @param context Context to add values to
     * @param carrier Carrier from which to extract context
     */
    extract(context, carrier, getter) {
        return this._propagators.reduce((ctx, propagator) => {
            try {
                return propagator.extract(ctx, carrier, getter);
            }
            catch (err) {
                api_1.diag.warn(`Failed to extract with ${propagator.constructor.name}. Err: ${err.message}`);
            }
            return ctx;
        }, context);
    }
    fields() {
        // return a new array so our fields cannot be modified
        return this._fields.slice();
    }
}
exports.CompositePropagator = CompositePropagator;
//# sourceMappingURL=composite.js.map