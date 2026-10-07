export const createMediaStreamTrackAudioSourceNodeConstructor = (audioNodeConstructor, createNativeMediaStreamTrackAudioSourceNode, getNativeContext) => {
    return class MediaStreamTrackAudioSourceNode extends audioNodeConstructor {
        constructor(context, options) {
            const nativeContext = getNativeContext(context);
            const nativeMediaStreamTrackAudioSourceNode = createNativeMediaStreamTrackAudioSourceNode(nativeContext, options);
            super(context, true, nativeMediaStreamTrackAudioSourceNode, null);
        }
    };
};
//# sourceMappingURL=media-stream-track-audio-source-node-constructor.js.map