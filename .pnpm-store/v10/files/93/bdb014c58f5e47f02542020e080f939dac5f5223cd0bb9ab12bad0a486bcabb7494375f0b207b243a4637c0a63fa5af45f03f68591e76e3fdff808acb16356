import { MOST_NEGATIVE_SINGLE_FLOAT, MOST_POSITIVE_SINGLE_FLOAT } from '../constants';
const DEFAULT_OPTIONS = {
    Q: 1,
    channelCount: 2,
    channelCountMode: 'max',
    channelInterpretation: 'speakers',
    detune: 0,
    frequency: 350,
    gain: 0,
    type: 'lowpass'
};
export const createBiquadFilterNodeConstructor = (audioNodeConstructor, createAudioParam, createBiquadFilterNodeRenderer, createInvalidAccessError, createNativeBiquadFilterNode, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime) => {
    return class BiquadFilterNode extends audioNodeConstructor {
        constructor(context, options) {
            const nativeContext = getNativeContext(context);
            const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
            const nativeBiquadFilterNode = createNativeBiquadFilterNode(nativeContext, mergedOptions);
            const isOffline = isNativeOfflineAudioContext(nativeContext);
            const biquadFilterNodeRenderer = (isOffline ? createBiquadFilterNodeRenderer() : null);
            super(context, false, nativeBiquadFilterNode, biquadFilterNodeRenderer);
            // Bug #80: Safari does not export the correct values for maxValue and minValue.
            this._Q = createAudioParam(this, isOffline, nativeBiquadFilterNode.Q, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            // Bug #78: Firefox & Safari do not export the correct values for maxValue and minValue.
            this._detune = createAudioParam(this, isOffline, nativeBiquadFilterNode.detune, 1200 * Math.log2(MOST_POSITIVE_SINGLE_FLOAT), -1200 * Math.log2(MOST_POSITIVE_SINGLE_FLOAT));
            // Bug #77: Firefox & Safari do not export the correct value for minValue.
            this._frequency = createAudioParam(this, isOffline, nativeBiquadFilterNode.frequency, context.sampleRate / 2, 0);
            // Bug #79: Firefox & Safari do not export the correct values for maxValue and minValue.
            this._gain = createAudioParam(this, isOffline, nativeBiquadFilterNode.gain, 40 * Math.log10(MOST_POSITIVE_SINGLE_FLOAT), MOST_NEGATIVE_SINGLE_FLOAT);
            this._nativeBiquadFilterNode = nativeBiquadFilterNode;
            // @todo Determine a meaningful tail-time instead of just using one second.
            setAudioNodeTailTime(this, 1);
        }
        get detune() {
            return this._detune;
        }
        get frequency() {
            return this._frequency;
        }
        get gain() {
            return this._gain;
        }
        get Q() {
            return this._Q;
        }
        get type() {
            return this._nativeBiquadFilterNode.type;
        }
        set type(value) {
            this._nativeBiquadFilterNode.type = value;
        }
        getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
            // Bug #189: Safari does throw an InvalidStateError.
            try {
                this._nativeBiquadFilterNode.getFrequencyResponse(frequencyHz, magResponse, phaseResponse);
            }
            catch (err) {
                if (err.code === 11) {
                    throw createInvalidAccessError();
                }
                throw err;
            }
            // Bug #68: Safari does not throw an error if the parameters differ in their length.
            if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
                throw createInvalidAccessError();
            }
        }
    };
};
//# sourceMappingURL=biquad-filter-node-constructor.js.map