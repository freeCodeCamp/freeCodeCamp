import type { DiagLogger, Meter, MeterProvider, Tracer, TracerProvider, Span } from '@opentelemetry/api';
import type { Logger, LoggerProvider } from '@opentelemetry/api-logs';
import type { InstrumentationModuleDefinition, Instrumentation, InstrumentationConfig, SpanCustomizationHook } from './types';
/**
 * Base abstract internal class for instrumenting node and web plugins
 */
export declare abstract class InstrumentationAbstract<ConfigType extends InstrumentationConfig = InstrumentationConfig> implements Instrumentation<ConfigType> {
    protected _config: ConfigType;
    private _tracer;
    private _meter;
    private _logger;
    protected _diag: DiagLogger;
    readonly instrumentationName: string;
    readonly instrumentationVersion: string;
    constructor(instrumentationName: string, instrumentationVersion: string, config: ConfigType);
    protected _wrap: <Nodule extends object, FieldName extends keyof Nodule>(nodule: Nodule, name: FieldName, wrapper: (original: Nodule[FieldName], name: FieldName) => Nodule[FieldName]) => import("./types").ShimWrapped | undefined;
    protected _unwrap: <Nodule extends object>(nodule: Nodule, name: keyof Nodule) => void;
    protected _massWrap: <Nodule extends object, FieldName extends keyof Nodule>(nodules: Nodule[], names: FieldName[], wrapper: (original: Nodule[FieldName]) => Nodule[FieldName]) => void;
    protected _massUnwrap: <Nodule extends object>(nodules: Nodule[], names: (keyof Nodule)[]) => void;
    protected get meter(): Meter;
    /**
     * Sets MeterProvider to this plugin
     * @param meterProvider
     */
    setMeterProvider(meterProvider: MeterProvider): void;
    protected get logger(): Logger;
    /**
     * Sets LoggerProvider to this plugin
     * @param loggerProvider
     */
    setLoggerProvider(loggerProvider: LoggerProvider): void;
    /**
     * @experimental
     *
     * Get module definitions defined by {@link init}.
     * This can be used for experimental compile-time instrumentation.
     *
     * @returns an array of {@link InstrumentationModuleDefinition}
     */
    getModuleDefinitions(): InstrumentationModuleDefinition[];
    /**
     * Sets the new metric instruments with the current Meter.
     */
    protected _updateMetricInstruments(): void;
    getConfig(): ConfigType;
    /**
     * Sets InstrumentationConfig to this plugin
     * @param config
     */
    setConfig(config: ConfigType): void;
    /**
     * Sets TraceProvider to this plugin
     * @param tracerProvider
     */
    setTracerProvider(tracerProvider: TracerProvider): void;
    protected get tracer(): Tracer;
    abstract enable(): void;
    abstract disable(): void;
    /**
     * Init method in which plugin should define _modules and patches for
     * methods.
     */
    protected abstract init(): InstrumentationModuleDefinition | InstrumentationModuleDefinition[] | void;
    /**
     * Execute span customization hook, if configured, and log any errors.
     * Any semantics of the trigger and info are defined by the specific instrumentation.
     * @param hookHandler The optional hook handler which the user has configured via instrumentation config
     * @param triggerName The name of the trigger for executing the hook for logging purposes
     * @param span The span to which the hook should be applied
     * @param info The info object to be passed to the hook, with useful data the hook may use
     */
    protected _runSpanCustomizationHook<SpanCustomizationInfoType>(hookHandler: SpanCustomizationHook<SpanCustomizationInfoType> | undefined, triggerName: string, span: Span, info: SpanCustomizationInfoType): void;
}
//# sourceMappingURL=instrumentation.d.ts.map