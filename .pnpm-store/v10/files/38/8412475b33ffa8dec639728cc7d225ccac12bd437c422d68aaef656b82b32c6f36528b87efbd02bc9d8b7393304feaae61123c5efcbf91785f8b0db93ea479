import { TracerProvider } from '@opentelemetry/api';
import { InstrumentationBase, InstrumentationConfig, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
export interface PrismaInstrumentationConfig {
    ignoreSpanTypes?: (string | RegExp)[];
}
type Config = PrismaInstrumentationConfig & InstrumentationConfig;
export declare class PrismaInstrumentation extends InstrumentationBase {
    private tracerProvider;
    constructor(config?: Config);
    setTracerProvider(tracerProvider: TracerProvider): void;
    init(): InstrumentationNodeModuleDefinition[];
    enable(): void;
    disable(): void;
    isEnabled(): boolean;
}
export {};
//# sourceMappingURL=instrumentation.d.ts.map
