import {
    IAnalyserNode,
    IAudioBuffer,
    IAudioBufferSourceNode,
    IAudioNode,
    IAudioWorklet,
    IBaseAudioContext,
    IBiquadFilterNode,
    IConstantSourceNode,
    IConvolverNode,
    IDelayNode,
    IDynamicsCompressorNode,
    IGainNode,
    IIIRFilterNode,
    IOscillatorNode,
    IPannerNode,
    IPeriodicWave,
    IPeriodicWaveConstraints,
    IStereoPannerNode,
    IWaveShaperNode,
    IWorkletOptions
} from '../interfaces';
import { TBaseAudioContextConstructorFactory, TContext, TDecodeErrorCallback, TDecodeSuccessCallback, TNativeContext } from '../types';

export const createBaseAudioContextConstructor: TBaseAudioContextConstructorFactory = (
    addAudioWorkletModule,
    analyserNodeConstructor,
    audioBufferConstructor,
    audioBufferSourceNodeConstructor,
    biquadFilterNodeConstructor,
    channelMergerNodeConstructor,
    channelSplitterNodeConstructor,
    constantSourceNodeConstructor,
    convolverNodeConstructor,
    decodeAudioData,
    delayNodeConstructor,
    dynamicsCompressorNodeConstructor,
    gainNodeConstructor,
    iIRFilterNodeConstructor,
    minimalBaseAudioContextConstructor,
    oscillatorNodeConstructor,
    pannerNodeConstructor,
    periodicWaveConstructor,
    stereoPannerNodeConstructor,
    waveShaperNodeConstructor
) => {
    return class BaseAudioContext<T extends TContext> extends minimalBaseAudioContextConstructor<T> implements IBaseAudioContext<T> {
        private _audioWorklet: undefined | IAudioWorklet;

        constructor(private _nativeContext: TNativeContext, numberOfChannels: number) {
            super(_nativeContext, numberOfChannels);

            this._audioWorklet =
                addAudioWorkletModule === undefined
                    ? undefined
                    : {
                          addModule: (moduleURL: string, options?: IWorkletOptions) => {
                              return addAudioWorkletModule(<T>(<unknown>this), moduleURL, options);
                          }
                      };
        }

        get audioWorklet(): undefined | IAudioWorklet {
            return this._audioWorklet;
        }

        public createAnalyser(): IAnalyserNode<T> {
            return new analyserNodeConstructor(<T>(<unknown>this));
        }

        public createBiquadFilter(): IBiquadFilterNode<T> {
            return new biquadFilterNodeConstructor(<T>(<unknown>this));
        }

        public createBuffer(numberOfChannels: number, length: number, sampleRate: number): IAudioBuffer {
            return new audioBufferConstructor({ length, numberOfChannels, sampleRate });
        }

        public createBufferSource(): IAudioBufferSourceNode<T> {
            return new audioBufferSourceNodeConstructor(<T>(<unknown>this));
        }

        public createChannelMerger(numberOfInputs = 6): IAudioNode<T> {
            return new channelMergerNodeConstructor(<T>(<unknown>this), { numberOfInputs });
        }

        public createChannelSplitter(numberOfOutputs = 6): IAudioNode<T> {
            return new channelSplitterNodeConstructor(<T>(<unknown>this), { numberOfOutputs });
        }

        public createConstantSource(): IConstantSourceNode<T> {
            return new constantSourceNodeConstructor(<T>(<unknown>this));
        }

        public createConvolver(): IConvolverNode<T> {
            return new convolverNodeConstructor(<T>(<unknown>this));
        }

        public createDelay(maxDelayTime = 1): IDelayNode<T> {
            return new delayNodeConstructor(<T>(<unknown>this), { maxDelayTime });
        }

        public createDynamicsCompressor(): IDynamicsCompressorNode<T> {
            return new dynamicsCompressorNodeConstructor(<T>(<unknown>this));
        }

        public createGain(): IGainNode<T> {
            return new gainNodeConstructor(<T>(<unknown>this));
        }

        public createIIRFilter(feedforward: Iterable<number>, feedback: Iterable<number>): IIIRFilterNode<T> {
            return new iIRFilterNodeConstructor(<T>(<unknown>this), { feedback, feedforward });
        }

        public createOscillator(): IOscillatorNode<T> {
            return new oscillatorNodeConstructor(<T>(<unknown>this));
        }

        public createPanner(): IPannerNode<T> {
            return new pannerNodeConstructor(<T>(<unknown>this));
        }

        public createPeriodicWave(
            real: Iterable<number>,
            imag: Iterable<number>,
            constraints: Partial<IPeriodicWaveConstraints> = { disableNormalization: false }
        ): IPeriodicWave {
            return new periodicWaveConstructor(<T>(<unknown>this), { ...constraints, imag, real });
        }

        public createStereoPanner(): IStereoPannerNode<T> {
            return new stereoPannerNodeConstructor(<T>(<unknown>this));
        }

        public createWaveShaper(): IWaveShaperNode<T> {
            return new waveShaperNodeConstructor(<T>(<unknown>this));
        }

        public decodeAudioData(
            audioData: ArrayBuffer,
            successCallback?: TDecodeSuccessCallback,
            errorCallback?: TDecodeErrorCallback
        ): Promise<IAudioBuffer> {
            return decodeAudioData(this._nativeContext, audioData).then(
                (audioBuffer) => {
                    if (typeof successCallback === 'function') {
                        successCallback(audioBuffer);
                    }

                    return audioBuffer;
                },
                (err) => {
                    if (typeof errorCallback === 'function') {
                        errorCallback(err);
                    }

                    throw err;
                }
            );
        }
    };
};
