/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { NOOP_METER_PROVIDER } from '../metrics/NoopMeterProvider';
import { getGlobal, registerGlobal, unregisterGlobal, } from '../internal/global-utils';
import { DiagAPI } from './diag';
const API_NAME = 'metrics';
/**
 * Singleton object which represents the entry point to the OpenTelemetry Metrics API
 */
export class MetricsAPI {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    constructor() { }
    /** Get the singleton instance of the Metrics API */
    static getInstance() {
        if (!this._instance) {
            this._instance = new MetricsAPI();
        }
        return this._instance;
    }
    /**
     * Set the current global meter provider.
     * Returns true if the meter provider was successfully registered, else false.
     */
    setGlobalMeterProvider(provider) {
        return registerGlobal(API_NAME, provider, DiagAPI.instance());
    }
    /**
     * Returns the global meter provider.
     */
    getMeterProvider() {
        return getGlobal(API_NAME) || NOOP_METER_PROVIDER;
    }
    /**
     * Returns a meter from the global meter provider.
     */
    getMeter(name, version, options) {
        return this.getMeterProvider().getMeter(name, version, options);
    }
    /** Remove the global meter provider */
    disable() {
        unregisterGlobal(API_NAME, DiagAPI.instance());
    }
}
//# sourceMappingURL=metrics.js.map