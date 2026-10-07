"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNoopMeter = exports.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = exports.NOOP_OBSERVABLE_GAUGE_METRIC = exports.NOOP_OBSERVABLE_COUNTER_METRIC = exports.NOOP_UP_DOWN_COUNTER_METRIC = exports.NOOP_HISTOGRAM_METRIC = exports.NOOP_GAUGE_METRIC = exports.NOOP_COUNTER_METRIC = exports.NOOP_METER = exports.NoopObservableUpDownCounterMetric = exports.NoopObservableGaugeMetric = exports.NoopObservableCounterMetric = exports.NoopObservableMetric = exports.NoopHistogramMetric = exports.NoopGaugeMetric = exports.NoopUpDownCounterMetric = exports.NoopCounterMetric = exports.NoopMetric = exports.NoopMeter = void 0;
/**
 * NoopMeter is a noop implementation of the {@link Meter} interface. It reuses
 * constant NoopMetrics for all of its methods.
 */
class NoopMeter {
    constructor() { }
    /**
     * @see {@link Meter.createGauge}
     */
    createGauge(_name, _options) {
        return exports.NOOP_GAUGE_METRIC;
    }
    /**
     * @see {@link Meter.createHistogram}
     */
    createHistogram(_name, _options) {
        return exports.NOOP_HISTOGRAM_METRIC;
    }
    /**
     * @see {@link Meter.createCounter}
     */
    createCounter(_name, _options) {
        return exports.NOOP_COUNTER_METRIC;
    }
    /**
     * @see {@link Meter.createUpDownCounter}
     */
    createUpDownCounter(_name, _options) {
        return exports.NOOP_UP_DOWN_COUNTER_METRIC;
    }
    /**
     * @see {@link Meter.createObservableGauge}
     */
    createObservableGauge(_name, _options) {
        return exports.NOOP_OBSERVABLE_GAUGE_METRIC;
    }
    /**
     * @see {@link Meter.createObservableCounter}
     */
    createObservableCounter(_name, _options) {
        return exports.NOOP_OBSERVABLE_COUNTER_METRIC;
    }
    /**
     * @see {@link Meter.createObservableUpDownCounter}
     */
    createObservableUpDownCounter(_name, _options) {
        return exports.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
    }
    /**
     * @see {@link Meter.addBatchObservableCallback}
     */
    addBatchObservableCallback(_callback, _observables) { }
    /**
     * @see {@link Meter.removeBatchObservableCallback}
     */
    removeBatchObservableCallback(_callback) { }
}
exports.NoopMeter = NoopMeter;
class NoopMetric {
}
exports.NoopMetric = NoopMetric;
class NoopCounterMetric extends NoopMetric {
    add(_value, _attributes) { }
}
exports.NoopCounterMetric = NoopCounterMetric;
class NoopUpDownCounterMetric extends NoopMetric {
    add(_value, _attributes) { }
}
exports.NoopUpDownCounterMetric = NoopUpDownCounterMetric;
class NoopGaugeMetric extends NoopMetric {
    record(_value, _attributes) { }
}
exports.NoopGaugeMetric = NoopGaugeMetric;
class NoopHistogramMetric extends NoopMetric {
    record(_value, _attributes) { }
}
exports.NoopHistogramMetric = NoopHistogramMetric;
class NoopObservableMetric {
    addCallback(_callback) { }
    removeCallback(_callback) { }
}
exports.NoopObservableMetric = NoopObservableMetric;
class NoopObservableCounterMetric extends NoopObservableMetric {
}
exports.NoopObservableCounterMetric = NoopObservableCounterMetric;
class NoopObservableGaugeMetric extends NoopObservableMetric {
}
exports.NoopObservableGaugeMetric = NoopObservableGaugeMetric;
class NoopObservableUpDownCounterMetric extends NoopObservableMetric {
}
exports.NoopObservableUpDownCounterMetric = NoopObservableUpDownCounterMetric;
exports.NOOP_METER = new NoopMeter();
// Synchronous instruments
exports.NOOP_COUNTER_METRIC = new NoopCounterMetric();
exports.NOOP_GAUGE_METRIC = new NoopGaugeMetric();
exports.NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric();
exports.NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric();
// Asynchronous instruments
exports.NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric();
exports.NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric();
exports.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric();
/**
 * Create a no-op Meter
 *
 * @since 1.3.0
 */
function createNoopMeter() {
    return exports.NOOP_METER;
}
exports.createNoopMeter = createNoopMeter;
//# sourceMappingURL=NoopMeter.js.map