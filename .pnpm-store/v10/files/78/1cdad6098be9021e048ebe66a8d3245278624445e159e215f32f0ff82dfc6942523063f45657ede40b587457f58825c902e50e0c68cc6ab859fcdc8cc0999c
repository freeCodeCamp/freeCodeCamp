const DEFAULT_OPTIONS = {
    channelCount: 2,
    channelCountMode: 'explicit',
    channelInterpretation: 'speakers'
};
export const createMediaStreamAudioDestinationNodeConstructor = (audioNodeConstructor, createNativeMediaStreamAudioDestinationNode, getNativeContext, isNativeOfflineAudioContext) => {
    return class MediaStreamAudioDestinationNode extends audioNodeConstructor {
        constructor(context, options) {
            const nativeContext = getNativeContext(context);
            // Bug #173: Safari allows to create a MediaStreamAudioDestinationNode with an OfflineAudioContext.
            if (isNativeOfflineAudioContext(nativeContext)) {
                throw new TypeError();
            }
            const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
            const nativeMediaStreamAudioDestinationNode = createNativeMediaStreamAudioDestinationNode(nativeContext, mergedOptions);
            super(context, false, nativeMediaStreamAudioDestinationNode, null);
            this._nativeMediaStreamAudioDestinationNode = nativeMediaStreamAudioDestinationNode;
        }
        get stream() {
            return this._nativeMediaStreamAudioDestinationNode.stream;
        }
    };
};
//# sourceMappingURL=media-stream-audio-destination-node-constructor.js.map