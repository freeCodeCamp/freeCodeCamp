import { wrapAudioBufferGetChannelDataMethod } from '../helpers/wrap-audio-buffer-get-channel-data-method';
export const createStartRendering = (audioBufferStore, cacheTestResult, getAudioNodeRenderer, getUnrenderedAudioWorkletNodes, renderNativeOfflineAudioContext, testAudioBufferCopyChannelMethodsOutOfBoundsSupport, wrapAudioBufferCopyChannelMethods, wrapAudioBufferCopyChannelMethodsOutOfBounds) => {
    return (destination, nativeOfflineAudioContext) => getAudioNodeRenderer(destination)
        .render(destination, nativeOfflineAudioContext)
        /*
         * Bug #86 & #87: Invoking the renderer of an AudioWorkletNode might be necessary if it has no direct or indirect connection to the
         * destination.
         */
        .then(() => Promise.all(Array.from(getUnrenderedAudioWorkletNodes(nativeOfflineAudioContext)).map((audioWorkletNode) => getAudioNodeRenderer(audioWorkletNode).render(audioWorkletNode, nativeOfflineAudioContext))))
        .then(() => renderNativeOfflineAudioContext(nativeOfflineAudioContext))
        .then((audioBuffer) => {
        // Bug #5: Safari does not support copyFromChannel() and copyToChannel().
        // Bug #100: Safari does throw a wrong error when calling getChannelData() with an out-of-bounds value.
        if (typeof audioBuffer.copyFromChannel !== 'function') {
            wrapAudioBufferCopyChannelMethods(audioBuffer);
            wrapAudioBufferGetChannelDataMethod(audioBuffer);
            // Bug #157: Firefox does not allow the bufferOffset to be out-of-bounds.
        }
        else if (!cacheTestResult(testAudioBufferCopyChannelMethodsOutOfBoundsSupport, () => testAudioBufferCopyChannelMethodsOutOfBoundsSupport(audioBuffer))) {
            wrapAudioBufferCopyChannelMethodsOutOfBounds(audioBuffer);
        }
        audioBufferStore.add(audioBuffer);
        return audioBuffer;
    });
};
//# sourceMappingURL=start-rendering.js.map