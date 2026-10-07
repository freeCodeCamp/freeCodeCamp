export const createBaseAudioContextConstructor = (addAudioWorkletModule, analyserNodeConstructor, audioBufferConstructor, audioBufferSourceNodeConstructor, biquadFilterNodeConstructor, channelMergerNodeConstructor, channelSplitterNodeConstructor, constantSourceNodeConstructor, convolverNodeConstructor, decodeAudioData, delayNodeConstructor, dynamicsCompressorNodeConstructor, gainNodeConstructor, iIRFilterNodeConstructor, minimalBaseAudioContextConstructor, oscillatorNodeConstructor, pannerNodeConstructor, periodicWaveConstructor, stereoPannerNodeConstructor, waveShaperNodeConstructor) => {
    return class BaseAudioContext extends minimalBaseAudioContextConstructor {
        constructor(_nativeContext, numberOfChannels) {
            super(_nativeContext, numberOfChannels);
            this._nativeContext = _nativeContext;
            this._audioWorklet =
                addAudioWorkletModule === undefined
                    ? undefined
                    : {
                        addModule: (moduleURL, options) => {
                            return addAudioWorkletModule(this, moduleURL, options);
                        }
                    };
        }
        get audioWorklet() {
            return this._audioWorklet;
        }
        createAnalyser() {
            return new analyserNodeConstructor(this);
        }
        createBiquadFilter() {
            return new biquadFilterNodeConstructor(this);
        }
        createBuffer(numberOfChannels, length, sampleRate) {
            return new audioBufferConstructor({ length, numberOfChannels, sampleRate });
        }
        createBufferSource() {
            return new audioBufferSourceNodeConstructor(this);
        }
        createChannelMerger(numberOfInputs = 6) {
            return new channelMergerNodeConstructor(this, { numberOfInputs });
        }
        createChannelSplitter(numberOfOutputs = 6) {
            return new channelSplitterNodeConstructor(this, { numberOfOutputs });
        }
        createConstantSource() {
            return new constantSourceNodeConstructor(this);
        }
        createConvolver() {
            return new convolverNodeConstructor(this);
        }
        createDelay(maxDelayTime = 1) {
            return new delayNodeConstructor(this, { maxDelayTime });
        }
        createDynamicsCompressor() {
            return new dynamicsCompressorNodeConstructor(this);
        }
        createGain() {
            return new gainNodeConstructor(this);
        }
        createIIRFilter(feedforward, feedback) {
            return new iIRFilterNodeConstructor(this, { feedback, feedforward });
        }
        createOscillator() {
            return new oscillatorNodeConstructor(this);
        }
        createPanner() {
            return new pannerNodeConstructor(this);
        }
        createPeriodicWave(real, imag, constraints = { disableNormalization: false }) {
            return new periodicWaveConstructor(this, { ...constraints, imag, real });
        }
        createStereoPanner() {
            return new stereoPannerNodeConstructor(this);
        }
        createWaveShaper() {
            return new waveShaperNodeConstructor(this);
        }
        decodeAudioData(audioData, successCallback, errorCallback) {
            return decodeAudioData(this._nativeContext, audioData).then((audioBuffer) => {
                if (typeof successCallback === 'function') {
                    successCallback(audioBuffer);
                }
                return audioBuffer;
            }, (err) => {
                if (typeof errorCallback === 'function') {
                    errorCallback(err);
                }
                throw err;
            });
        }
    };
};
//# sourceMappingURL=base-audio-context-constructor.js.map