import { InstrumentationBase, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
import { KafkaJsInstrumentationConfig } from './types';
export declare class KafkaJsInstrumentation extends InstrumentationBase<KafkaJsInstrumentationConfig> {
    private _clientDuration;
    private _sentMessages;
    private _consumedMessages;
    private _processDuration;
    constructor(config?: KafkaJsInstrumentationConfig);
    _updateMetricInstruments(): void;
    protected init(): InstrumentationNodeModuleDefinition;
    private _getConsumerPatch;
    private _setKafkaEventListeners;
    private _recordClientDurationMetric;
    private _getProducerPatch;
    private _getConsumerRunPatch;
    private _getConsumerEachMessagePatch;
    private _getConsumerEachBatchPatch;
    private _getProducerTransactionPatch;
    private _getSendBatchPatch;
    private _getSendPatch;
    private _endSpansOnPromise;
    private _startConsumerSpan;
    private _startProducerSpan;
}
//# sourceMappingURL=instrumentation.d.ts.map