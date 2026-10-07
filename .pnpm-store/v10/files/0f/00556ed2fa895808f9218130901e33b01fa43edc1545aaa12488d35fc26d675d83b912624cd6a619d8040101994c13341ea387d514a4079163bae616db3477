import { InstrumentationBase, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
import { KnexInstrumentationConfig } from './types';
export declare class KnexInstrumentation extends InstrumentationBase<KnexInstrumentationConfig> {
    private _semconvStability;
    constructor(config?: KnexInstrumentationConfig);
    setConfig(config?: KnexInstrumentationConfig): void;
    init(): InstrumentationNodeModuleDefinition;
    private getRunnerNodeModuleFileInstrumentation;
    private getClientNodeModuleFileInstrumentation;
    private createQueryWrapper;
    private storeContext;
    ensureWrapped(obj: any, methodName: string, wrapper: (original: any) => any): void;
}
//# sourceMappingURL=instrumentation.d.ts.map