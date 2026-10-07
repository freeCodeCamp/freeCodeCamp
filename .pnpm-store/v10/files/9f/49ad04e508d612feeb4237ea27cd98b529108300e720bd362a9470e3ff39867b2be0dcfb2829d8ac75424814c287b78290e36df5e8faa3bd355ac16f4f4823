/*
 * Bug #122: Edge up to version v18 did not allow to construct a DOMException'. It also had a couple more bugs but since this is easy to
 * test it's used here as a placeholder.
 *
 * Bug #27: Edge up to version v18 did reject an invalid arrayBuffer passed to decodeAudioData() with a DOMException.
 *
 * Bug #50: Edge up to version v18 did not allow to create AudioNodes on a closed context.
 *
 * Bug #57: Edge up to version v18 did not throw an error when assigning the type of an OscillatorNode to 'custom'.
 *
 * Bug #63: Edge up to version v18 did not expose the mediaElement property of a MediaElementAudioSourceNode.
 *
 * Bug #64: Edge up to version v18 did not support the MediaStreamAudioDestinationNode.
 *
 * Bug #71: Edge up to version v18 did not allow to set the buffer of an AudioBufferSourceNode to null.
 *
 * Bug #93: Edge up to version v18 did set the sampleRate of an AudioContext to zero when it was closed.
 *
 * Bug #101: Edge up to version v18 refused to execute decodeAudioData() on a closed context.
 *
 * Bug #106: Edge up to version v18 did not expose the maxValue and minValue properties of the pan AudioParam of a StereoPannerNode.
 *
 * Bug #110: Edge up to version v18 did not expose the maxValue and minValue properties of the attack, knee, ratio, release and threshold AudioParams of a DynamicsCompressorNode.
 *
 * Bug #123: Edge up to version v18 did not support HRTF as the panningModel for a PannerNode.
 *
 * Bug #145: Edge up to version v18 did throw an IndexSizeError when an OfflineAudioContext was created with a sampleRate of zero.
 *
 * Bug #161: Edge up to version v18 did not expose the maxValue and minValue properties of the delayTime AudioParam of a DelayNode.
 */
export const testDomExceptionConstructorSupport = () => {
    try {
        new DOMException(); // tslint:disable-line:no-unused-expression
    }
    catch {
        return false;
    }
    return true;
};
//# sourceMappingURL=test-dom-exception-constructor-support.js.map