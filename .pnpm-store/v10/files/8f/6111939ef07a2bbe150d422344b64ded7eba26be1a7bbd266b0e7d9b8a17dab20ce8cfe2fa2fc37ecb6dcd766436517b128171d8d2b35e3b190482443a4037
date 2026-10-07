import { InstrumentationBase, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
import { AmqplibInstrumentationConfig } from './types';
export declare class AmqplibInstrumentation extends InstrumentationBase<AmqplibInstrumentationConfig> {
    private _netSemconvStability;
    constructor(config?: AmqplibInstrumentationConfig);
    private _setSemconvStabilityFromEnv;
    setConfig(config?: AmqplibInstrumentationConfig): void;
    protected init(): InstrumentationNodeModuleDefinition;
    private patchConnect;
    private unpatchConnect;
    private patchChannelModel;
    private unpatchChannelModel;
    private getConnectPatch;
    private getChannelEmitPatch;
    private getAckAllPatch;
    private getAckPatch;
    private getConsumePatch;
    private getConfirmedPublishPatch;
    private getPublishPatch;
    private createPublishSpan;
    private endConsumerSpan;
    private endAllSpansOnChannel;
    private callConsumeEndHook;
    private checkConsumeTimeoutOnChannel;
}
//# sourceMappingURL=amqplib.d.ts.map