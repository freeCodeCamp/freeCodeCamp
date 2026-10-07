import type { Meter } from './Meter';
import type { BatchObservableCallback, Counter, Gauge, Histogram, MetricAttributes, MetricOptions, Observable, ObservableCallback, ObservableCounter, ObservableGauge, ObservableUpDownCounter, UpDownCounter } from './Metric';
/**
 * NoopMeter is a noop implementation of the {@link Meter} interface. It reuses
 * constant NoopMetrics for all of its methods.
 */
export declare class NoopMeter implements Meter {
    constructor();
    /**
     * @see {@link Meter.createGauge}
     */
    createGauge(_name: string, _options?: MetricOptions): Gauge;
    /**
     * @see {@link Meter.createHistogram}
     */
    createHistogram(_name: string, _options?: MetricOptions): Histogram;
    /**
     * @see {@link Meter.createCounter}
     */
    createCounter(_name: string, _options?: MetricOptions): Counter;
    /**
     * @see {@link Meter.createUpDownCounter}
     */
    createUpDownCounter(_name: string, _options?: MetricOptions): UpDownCounter;
    /**
     * @see {@link Meter.createObservableGauge}
     */
    createObservableGauge(_name: string, _options?: MetricOptions): ObservableGauge;
    /**
     * @see {@link Meter.createObservableCounter}
     */
    createObservableCounter(_name: string, _options?: MetricOptions): ObservableCounter;
    /**
     * @see {@link Meter.createObservableUpDownCounter}
     */
    createObservableUpDownCounter(_name: string, _options?: MetricOptions): ObservableUpDownCounter;
    /**
     * @see {@link Meter.addBatchObservableCallback}
     */
    addBatchObservableCallback(_callback: BatchObservableCallback, _observables: Observable[]): void;
    /**
     * @see {@link Meter.removeBatchObservableCallback}
     */
    removeBatchObservableCallback(_callback: BatchObservableCallback): void;
}
export declare class NoopMetric {
}
export declare class NoopCounterMetric extends NoopMetric implements Counter {
    add(_value: number, _attributes: MetricAttributes): void;
}
export declare class NoopUpDownCounterMetric extends NoopMetric implements UpDownCounter {
    add(_value: number, _attributes: MetricAttributes): void;
}
export declare class NoopGaugeMetric extends NoopMetric implements Gauge {
    record(_value: number, _attributes: MetricAttributes): void;
}
export declare class NoopHistogramMetric extends NoopMetric implements Histogram {
    record(_value: number, _attributes: MetricAttributes): void;
}
export declare class NoopObservableMetric {
    addCallback(_callback: ObservableCallback): void;
    removeCallback(_callback: ObservableCallback): void;
}
export declare class NoopObservableCounterMetric extends NoopObservableMetric implements ObservableCounter {
}
export declare class NoopObservableGaugeMetric extends NoopObservableMetric implements ObservableGauge {
}
export declare class NoopObservableUpDownCounterMetric extends NoopObservableMetric implements ObservableUpDownCounter {
}
export declare const NOOP_METER: NoopMeter;
export declare const NOOP_COUNTER_METRIC: NoopCounterMetric;
export declare const NOOP_GAUGE_METRIC: NoopGaugeMetric;
export declare const NOOP_HISTOGRAM_METRIC: NoopHistogramMetric;
export declare const NOOP_UP_DOWN_COUNTER_METRIC: NoopUpDownCounterMetric;
export declare const NOOP_OBSERVABLE_COUNTER_METRIC: NoopObservableCounterMetric;
export declare const NOOP_OBSERVABLE_GAUGE_METRIC: NoopObservableGaugeMetric;
export declare const NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC: NoopObservableUpDownCounterMetric;
/**
 * Create a no-op Meter
 *
 * @since 1.3.0
 */
export declare function createNoopMeter(): Meter;
//# sourceMappingURL=NoopMeter.d.ts.map