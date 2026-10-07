import { TracerProvider } from '@opentelemetry/api';
import { InstrumentationBase } from '@opentelemetry/instrumentation';
import { RedisInstrumentationConfig } from './types';
export declare class RedisInstrumentation extends InstrumentationBase<RedisInstrumentationConfig> {
    private instrumentationV2_V3;
    private instrumentationV4_V5;
    private initialized;
    constructor(config?: RedisInstrumentationConfig);
    setConfig(config?: RedisInstrumentationConfig): void;
    init(): void;
    getModuleDefinitions(): import("@opentelemetry/instrumentation").InstrumentationModuleDefinition[];
    setTracerProvider(tracerProvider: TracerProvider): void;
    enable(): void;
    disable(): void;
}
//# sourceMappingURL=redis-instrumentation.d.ts.map
