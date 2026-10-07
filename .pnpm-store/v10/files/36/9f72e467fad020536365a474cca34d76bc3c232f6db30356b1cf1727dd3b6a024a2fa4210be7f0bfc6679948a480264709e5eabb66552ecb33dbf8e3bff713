import { detachArrayBuffer } from '../helpers/detach-array-buffer';
import { wrapAudioBufferGetChannelDataMethod } from '../helpers/wrap-audio-buffer-get-channel-data-method';
import { TDecodeAudioDataFactory } from '../types';

export const createDecodeAudioData: TDecodeAudioDataFactory = (
    audioBufferStore,
    cacheTestResult,
    createDataCloneError,
    createEncodingError,
    detachedArrayBuffers,
    getNativeContext,
    isNativeContext,
    testAudioBufferCopyChannelMethodsOutOfBoundsSupport,
    testPromiseSupport,
    wrapAudioBufferCopyChannelMethods,
    wrapAudioBufferCopyChannelMethodsOutOfBounds
) => {
    return (anyContext, audioData) => {
        const nativeContext = isNativeContext(anyContext) ? anyContext : getNativeContext(anyContext);

        // Bug #43: Only Chrome and Edge do throw a DataCloneError.
        if (detachedArrayBuffers.has(audioData)) {
            const err = createDataCloneError();

            return Promise.reject(err);
        }

        // The audioData parameter maybe of a type which can't be added to a WeakSet.
        try {
            detachedArrayBuffers.add(audioData);
        } catch {
            // Ignore errors.
        }

        // Bug #21: Safari does not support promises yet.
        if (cacheTestResult(testPromiseSupport, () => testPromiseSupport(nativeContext))) {
            return nativeContext.decodeAudioData(audioData).then((audioBuffer) => {
                // Bug #133: Safari does neuter the ArrayBuffer.
                detachArrayBuffer(audioData).catch(() => {
                    // Ignore errors.
                });

                // Bug #157: Firefox does not allow the bufferOffset to be out-of-bounds.
                if (
                    !cacheTestResult(testAudioBufferCopyChannelMethodsOutOfBoundsSupport, () =>
                        testAudioBufferCopyChannelMethodsOutOfBoundsSupport(audioBuffer)
                    )
                ) {
                    wrapAudioBufferCopyChannelMethodsOutOfBounds(audioBuffer);
                }

                audioBufferStore.add(audioBuffer);

                return audioBuffer;
            });
        }

        // Bug #21: Safari does not return a Promise yet.
        return new Promise((resolve, reject) => {
            const complete = async () => {
                // Bug #133: Safari does neuter the ArrayBuffer.
                try {
                    await detachArrayBuffer(audioData);
                } catch {
                    // Ignore errors.
                }
            };

            const fail = (err: DOMException | Error) => {
                reject(err);
                complete();
            };

            // Bug #26: Safari throws a synchronous error.
            try {
                // Bug #1: Safari requires a successCallback.
                nativeContext.decodeAudioData(
                    audioData,
                    (audioBuffer) => {
                        // Bug #5: Safari does not support copyFromChannel() and copyToChannel().
                        // Bug #100: Safari does throw a wrong error when calling getChannelData() with an out-of-bounds value.
                        if (typeof audioBuffer.copyFromChannel !== 'function') {
                            wrapAudioBufferCopyChannelMethods(audioBuffer);
                            wrapAudioBufferGetChannelDataMethod(audioBuffer);
                        }

                        audioBufferStore.add(audioBuffer);

                        complete().then(() => resolve(audioBuffer));
                    },
                    (err: DOMException | Error) => {
                        // Bug #4: Safari returns null instead of an error.
                        if (err === null) {
                            fail(createEncodingError());
                        } else {
                            fail(err);
                        }
                    }
                );
            } catch (err) {
                fail(err);
            }
        });
    };
};
