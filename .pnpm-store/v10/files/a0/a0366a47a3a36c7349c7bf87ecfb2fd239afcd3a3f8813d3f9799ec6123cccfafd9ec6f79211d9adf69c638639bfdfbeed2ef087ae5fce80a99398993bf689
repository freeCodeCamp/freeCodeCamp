"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsAPI = void 0;
const NoopMeterProvider_1 = require("../metrics/NoopMeterProvider");
const global_utils_1 = require("../internal/global-utils");
const diag_1 = require("./diag");
const API_NAME = 'metrics';
/**
 * Singleton object which represents the entry point to the OpenTelemetry Metrics API
 */
class MetricsAPI {
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
        return (0, global_utils_1.registerGlobal)(API_NAME, provider, diag_1.DiagAPI.instance());
    }
    /**
     * Returns the global meter provider.
     */
    getMeterProvider() {
        return (0, global_utils_1.getGlobal)(API_NAME) || NoopMeterProvider_1.NOOP_METER_PROVIDER;
    }
    /**
     * Returns a meter from the global meter provider.
     */
    getMeter(name, version, options) {
        return this.getMeterProvider().getMeter(name, version, options);
    }
    /** Remove the global meter provider */
    disable() {
        (0, global_utils_1.unregisterGlobal)(API_NAME, diag_1.DiagAPI.instance());
    }
}
exports.MetricsAPI = MetricsAPI;
//# sourceMappingURL=metrics.js.map