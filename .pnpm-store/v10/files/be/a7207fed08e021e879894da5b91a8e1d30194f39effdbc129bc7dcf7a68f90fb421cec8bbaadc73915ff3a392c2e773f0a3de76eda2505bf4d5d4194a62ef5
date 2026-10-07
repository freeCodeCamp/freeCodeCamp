/**
 * Edge up to version 14, Firefox up to version 52, Safari up to version 9 and maybe other browsers
 * did not refuse to decode invalid parameters with a TypeError.
 */
export const createTestAudioContextDecodeAudioDataMethodTypeErrorSupport = (nativeOfflineAudioContextConstructor) => {
    return () => {
        if (nativeOfflineAudioContextConstructor === null) {
            return Promise.resolve(false);
        }
        const offlineAudioContext = new nativeOfflineAudioContextConstructor(1, 1, 44100);
        // Bug #21: Safari does not support promises yet.
        return new Promise((resolve) => {
            let isPending = true;
            const resolvePromise = (err) => {
                if (isPending) {
                    isPending = false;
                    offlineAudioContext.startRendering();
                    resolve(err instanceof TypeError);
                }
            };
            let promise;
            // Bug #26: Safari throws a synchronous error.
            try {
                promise = offlineAudioContext
                    // Bug #1: Safari requires a successCallback.
                    .decodeAudioData(null, () => {
                    // Ignore the success callback.
                }, resolvePromise);
            }
            catch (err) {
                resolvePromise(err);
            }
            // Bug #21: Safari does not support promises yet.
            if (promise !== undefined) {
                // Bug #6: Chrome, Edge and Firefox do not call the errorCallback.
                promise.catch(resolvePromise);
            }
        });
    };
};
//# sourceMappingURL=test-audio-context-decode-audio-data-method-type-error-support.js.map