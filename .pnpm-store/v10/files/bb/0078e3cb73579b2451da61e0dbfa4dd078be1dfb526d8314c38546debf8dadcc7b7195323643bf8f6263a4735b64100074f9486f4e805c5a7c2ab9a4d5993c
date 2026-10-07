const DEFAULT_OPTIONS = {
    channelCount: 2,
    channelCountMode: 'max',
    channelInterpretation: 'speakers',
    fftSize: 2048,
    maxDecibels: -30,
    minDecibels: -100,
    smoothingTimeConstant: 0.8
};
export const createAnalyserNodeConstructor = (audionNodeConstructor, createAnalyserNodeRenderer, createIndexSizeError, createNativeAnalyserNode, getNativeContext, isNativeOfflineAudioContext) => {
    return class AnalyserNode extends audionNodeConstructor {
        constructor(context, options) {
            const nativeContext = getNativeContext(context);
            const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
            const nativeAnalyserNode = createNativeAnalyserNode(nativeContext, mergedOptions);
            const analyserNodeRenderer = ((isNativeOfflineAudioContext(nativeContext) ? createAnalyserNodeRenderer() : null));
            super(context, false, nativeAnalyserNode, analyserNodeRenderer);
            this._nativeAnalyserNode = nativeAnalyserNode;
        }
        get fftSize() {
            return this._nativeAnalyserNode.fftSize;
        }
        set fftSize(value) {
            this._nativeAnalyserNode.fftSize = value;
        }
        get frequencyBinCount() {
            return this._nativeAnalyserNode.frequencyBinCount;
        }
        get maxDecibels() {
            return this._nativeAnalyserNode.maxDecibels;
        }
        set maxDecibels(value) {
            // Bug #118: Safari does not throw an error if maxDecibels is not more than minDecibels.
            const maxDecibels = this._nativeAnalyserNode.maxDecibels;
            this._nativeAnalyserNode.maxDecibels = value;
            if (!(value > this._nativeAnalyserNode.minDecibels)) {
                this._nativeAnalyserNode.maxDecibels = maxDecibels;
                throw createIndexSizeError();
            }
        }
        get minDecibels() {
            return this._nativeAnalyserNode.minDecibels;
        }
        set minDecibels(value) {
            // Bug #118: Safari does not throw an error if maxDecibels is not more than minDecibels.
            const minDecibels = this._nativeAnalyserNode.minDecibels;
            this._nativeAnalyserNode.minDecibels = value;
            if (!(this._nativeAnalyserNode.maxDecibels > value)) {
                this._nativeAnalyserNode.minDecibels = minDecibels;
                throw createIndexSizeError();
            }
        }
        get smoothingTimeConstant() {
            return this._nativeAnalyserNode.smoothingTimeConstant;
        }
        set smoothingTimeConstant(value) {
            this._nativeAnalyserNode.smoothingTimeConstant = value;
        }
        getByteFrequencyData(array) {
            this._nativeAnalyserNode.getByteFrequencyData(array);
        }
        getByteTimeDomainData(array) {
            this._nativeAnalyserNode.getByteTimeDomainData(array);
        }
        getFloatFrequencyData(array) {
            this._nativeAnalyserNode.getFloatFrequencyData(array);
        }
        getFloatTimeDomainData(array) {
            this._nativeAnalyserNode.getFloatTimeDomainData(array);
        }
    };
};
//# sourceMappingURL=analyser-node-constructor.js.map