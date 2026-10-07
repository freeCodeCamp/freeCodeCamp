/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Enable instrumentations
 * @param instrumentations
 * @param tracerProvider
 * @param meterProvider
 */
export function enableInstrumentations(instrumentations, tracerProvider, meterProvider, loggerProvider) {
    for (let i = 0, j = instrumentations.length; i < j; i++) {
        const instrumentation = instrumentations[i];
        if (tracerProvider) {
            instrumentation.setTracerProvider(tracerProvider);
        }
        if (meterProvider) {
            instrumentation.setMeterProvider(meterProvider);
        }
        if (loggerProvider && instrumentation.setLoggerProvider) {
            instrumentation.setLoggerProvider(loggerProvider);
        }
        // instrumentations have been already enabled during creation
        // so enable only if user prevented that by setting enabled to false
        // this is to prevent double enabling but when calling register all
        // instrumentations should be now enabled
        if (!instrumentation.getConfig().enabled) {
            instrumentation.enable();
        }
    }
}
/**
 * Disable instrumentations
 * @param instrumentations
 */
export function disableInstrumentations(instrumentations) {
    instrumentations.forEach(instrumentation => instrumentation.disable());
}
//# sourceMappingURL=autoLoaderUtils.js.map