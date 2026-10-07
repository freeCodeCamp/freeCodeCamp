import { InstrumentationBase, InstrumentationNodeModuleDefinition, SemconvStability } from '@opentelemetry/instrumentation';
import { IORedisInstrumentationConfig } from './types';
export declare class IORedisInstrumentation extends InstrumentationBase<IORedisInstrumentationConfig> {
    _netSemconvStability: SemconvStability;
    _dbSemconvStability: SemconvStability;
    constructor(config?: IORedisInstrumentationConfig);
    _setSemconvStabilityFromEnv(): void;
    setConfig(config?: IORedisInstrumentationConfig): void;
    init(): InstrumentationNodeModuleDefinition[];
    private _patchSendCommand;
    private _patchConnection;
    private _traceSendCommand;
    private _traceConnection;
}
//# sourceMappingURL=ioredis-instrumentation.d.ts.map
