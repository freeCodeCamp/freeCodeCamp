import { testAudioBufferCopyChannelMethodsOutOfBoundsSupport } from '../helpers/test-audio-buffer-copy-channel-methods-out-of-bounds-support';
import { wrapAudioBufferGetChannelDataMethod } from '../helpers/wrap-audio-buffer-get-channel-data-method';
import { IAudioBuffer, IAudioBufferOptions } from '../interfaces';
import { TAudioBufferConstructorFactory, TNativeOfflineAudioContext } from '../types';

const DEFAULT_OPTIONS = {
    numberOfChannels: 1
} as const;

export const createAudioBufferConstructor: TAudioBufferConstructorFactory = (
    audioBufferStore,
    cacheTestResult,
    createNotSupportedError,
    nativeAudioBufferConstructor,
    nativeOfflineAudioContextConstructor,
    testNativeAudioBufferConstructorSupport,
    wrapAudioBufferCopyChannelMethods,
    wrapAudioBufferCopyChannelMethodsOutOfBounds
) => {
    let nativeOfflineAudioContext: null | TNativeOfflineAudioContext = null;

    return class AudioBuffer implements IAudioBuffer {
        // This field needs to be defined to convince TypeScript that the IAudioBuffer will be implemented.
        public copyFromChannel!: (destination: Float32Array, channelNumber: number, bufferOffset?: number) => void;

        // This field needs to be defined to convince TypeScript that the IAudioBuffer will be implemented.
        public copyToChannel!: (source: Float32Array, channelNumber: number, bufferOffset?: number) => void;

        // This field needs to be defined to convince TypeScript that the IAudioBuffer will be implemented.
        public duration!: number;

        // This field needs to be defined to convince TypeScript that the IAudioBuffer will be implemented.
        public getChannelData!: (channel: number) => Float32Array;

        // This field needs to be defined to convince TypeScript that the IAudioBuffer will be implemented.
        public length!: number;

        // This field needs to be defined to convince TypeScript that the IAudioBuffer will be implemented.
        public numberOfChannels!: number;

        // This field needs to be defined to convince TypeScript that the IAudioBuffer will be implemented.
        public sampleRate!: number;

        constructor(options: IAudioBufferOptions) {
            if (nativeOfflineAudioContextConstructor === null) {
                throw new Error('Missing the native OfflineAudioContext constructor.');
            }

            const { length, numberOfChannels, sampleRate } = { ...DEFAULT_OPTIONS, ...options };

            if (nativeOfflineAudioContext === null) {
                nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor(1, 1, 44100);
            }

            /*
             * Bug #99: Firefox does not throw a NotSupportedError when the numberOfChannels is zero. But it only does it when using the
             * factory function. But since Firefox also supports the constructor everything should be fine.
             */
            const audioBuffer =
                nativeAudioBufferConstructor !== null &&
                cacheTestResult(testNativeAudioBufferConstructorSupport, testNativeAudioBufferConstructorSupport)
                    ? new nativeAudioBufferConstructor({ length, numberOfChannels, sampleRate })
                    : nativeOfflineAudioContext.createBuffer(numberOfChannels, length, sampleRate);

            // Bug #99: Safari does not throw an error when the numberOfChannels is zero.
            if (audioBuffer.numberOfChannels === 0) {
                throw createNotSupportedError();
            }

            // Bug #5: Safari does not support copyFromChannel() and copyToChannel().
            // Bug #100: Safari does throw a wrong error when calling getChannelData() with an out-of-bounds value.
            if (typeof audioBuffer.copyFromChannel !== 'function') {
                wrapAudioBufferCopyChannelMethods(audioBuffer);
                wrapAudioBufferGetChannelDataMethod(audioBuffer);
                // Bug #157: Firefox does not allow the bufferOffset to be out-of-bounds.
            } else if (
                !cacheTestResult(testAudioBufferCopyChannelMethodsOutOfBoundsSupport, () =>
                    testAudioBufferCopyChannelMethodsOutOfBoundsSupport(audioBuffer)
                )
            ) {
                wrapAudioBufferCopyChannelMethodsOutOfBounds(audioBuffer);
            }

            audioBufferStore.add(audioBuffer);

            /*
             * This does violate all good pratices but it is necessary to allow this AudioBuffer to be used with native
             * (Offline)AudioContexts.
             */
            return audioBuffer;
        }

        public static [Symbol.hasInstance](instance: unknown): boolean {
            return (
                (instance !== null && typeof instance === 'object' && Object.getPrototypeOf(instance) === AudioBuffer.prototype) ||
                audioBufferStore.has(<any>instance)
            );
        }
    };
};
