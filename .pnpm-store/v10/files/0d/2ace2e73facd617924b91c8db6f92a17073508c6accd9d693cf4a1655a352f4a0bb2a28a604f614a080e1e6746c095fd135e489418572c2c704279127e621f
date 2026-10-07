"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerInstrumentations = void 0;
const api_1 = require("@opentelemetry/api");
const api_logs_1 = require("@opentelemetry/api-logs");
const autoLoaderUtils_1 = require("./autoLoaderUtils");
/**
 * It will register instrumentations and plugins
 * @param options
 * @return returns function to unload instrumentation and plugins that were
 *   registered
 */
function registerInstrumentations(options) {
    const tracerProvider = options.tracerProvider || api_1.trace.getTracerProvider();
    const meterProvider = options.meterProvider || api_1.metrics.getMeterProvider();
    const loggerProvider = options.loggerProvider || api_logs_1.logs.getLoggerProvider();
    const instrumentations = options.instrumentations?.flat() ?? [];
    (0, autoLoaderUtils_1.enableInstrumentations)(instrumentations, tracerProvider, meterProvider, loggerProvider);
    return () => {
        (0, autoLoaderUtils_1.disableInstrumentations)(instrumentations);
    };
}
exports.registerInstrumentations = registerInstrumentations;
//# sourceMappingURL=autoLoader.js.map