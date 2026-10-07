import { wrapIIRFilterNodeGetFrequencyResponseMethod } from '../helpers/wrap-iir-filter-node-get-frequency-response-method';
const DEFAULT_OPTIONS = {
    channelCount: 2,
    channelCountMode: 'max',
    channelInterpretation: 'speakers'
};
export const createIIRFilterNodeConstructor = (audioNodeConstructor, createNativeIIRFilterNode, createIIRFilterNodeRenderer, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime) => {
    return class IIRFilterNode extends audioNodeConstructor {
        constructor(context, options) {
            const nativeContext = getNativeContext(context);
            const isOffline = isNativeOfflineAudioContext(nativeContext);
            const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
            const nativeIIRFilterNode = createNativeIIRFilterNode(nativeContext, isOffline ? null : context.baseLatency, mergedOptions);
            const iirFilterNodeRenderer = ((isOffline ? createIIRFilterNodeRenderer(mergedOptions.feedback, mergedOptions.feedforward) : null));
            super(context, false, nativeIIRFilterNode, iirFilterNodeRenderer);
            // Bug #23 & #24: FirefoxDeveloper does not throw an InvalidAccessError.
            // @todo Write a test which allows other browsers to remain unpatched.
            wrapIIRFilterNodeGetFrequencyResponseMethod(nativeIIRFilterNode);
            this._nativeIIRFilterNode = nativeIIRFilterNode;
            // @todo Determine a meaningful tail-time instead of just using one second.
            setAudioNodeTailTime(this, 1);
        }
        getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
            return this._nativeIIRFilterNode.getFrequencyResponse(frequencyHz, magResponse, phaseResponse);
        }
    };
};
//# sourceMappingURL=iir-filter-node-constructor.js.map