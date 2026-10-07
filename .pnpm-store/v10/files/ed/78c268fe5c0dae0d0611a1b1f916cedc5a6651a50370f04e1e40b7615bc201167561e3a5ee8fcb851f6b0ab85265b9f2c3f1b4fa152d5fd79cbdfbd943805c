import { MOST_NEGATIVE_SINGLE_FLOAT, MOST_POSITIVE_SINGLE_FLOAT } from '../constants';
const DEFAULT_OPTIONS = {
    channelCount: 2,
    channelCountMode: 'max',
    channelInterpretation: 'speakers',
    gain: 1
};
export const createGainNodeConstructor = (audioNodeConstructor, createAudioParam, createGainNodeRenderer, createNativeGainNode, getNativeContext, isNativeOfflineAudioContext) => {
    return class GainNode extends audioNodeConstructor {
        constructor(context, options) {
            const nativeContext = getNativeContext(context);
            const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
            const nativeGainNode = createNativeGainNode(nativeContext, mergedOptions);
            const isOffline = isNativeOfflineAudioContext(nativeContext);
            const gainNodeRenderer = (isOffline ? createGainNodeRenderer() : null);
            super(context, false, nativeGainNode, gainNodeRenderer);
            // Bug #74: Safari does not export the correct values for maxValue and minValue.
            this._gain = createAudioParam(this, isOffline, nativeGainNode.gain, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        }
        get gain() {
            return this._gain;
        }
    };
};
//# sourceMappingURL=gain-node-constructor.js.map