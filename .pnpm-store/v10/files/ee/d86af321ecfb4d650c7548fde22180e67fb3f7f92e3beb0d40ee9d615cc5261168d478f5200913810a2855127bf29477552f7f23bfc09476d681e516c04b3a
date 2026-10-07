/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { trace, metrics } from '@opentelemetry/api';
import { logs } from '@opentelemetry/api-logs';
import { disableInstrumentations, enableInstrumentations, } from './autoLoaderUtils';
/**
 * It will register instrumentations and plugins
 * @param options
 * @return returns function to unload instrumentation and plugins that were
 *   registered
 */
export function registerInstrumentations(options) {
    const tracerProvider = options.tracerProvider || trace.getTracerProvider();
    const meterProvider = options.meterProvider || metrics.getMeterProvider();
    const loggerProvider = options.loggerProvider || logs.getLoggerProvider();
    const instrumentations = options.instrumentations?.flat() ?? [];
    enableInstrumentations(instrumentations, tracerProvider, meterProvider, loggerProvider);
    return () => {
        disableInstrumentations(instrumentations);
    };
}
//# sourceMappingURL=autoLoader.js.map