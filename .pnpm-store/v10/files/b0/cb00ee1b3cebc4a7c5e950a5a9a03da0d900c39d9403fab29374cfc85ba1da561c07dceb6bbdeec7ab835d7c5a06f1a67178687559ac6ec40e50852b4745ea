export const createMediaElementAudioSourceNodeConstructor = (audioNodeConstructor, createNativeMediaElementAudioSourceNode, getNativeContext, isNativeOfflineAudioContext) => {
    return class MediaElementAudioSourceNode extends audioNodeConstructor {
        constructor(context, options) {
            const nativeContext = getNativeContext(context);
            const nativeMediaElementAudioSourceNode = createNativeMediaElementAudioSourceNode(nativeContext, options);
            // Bug #171: Safari allows to create a MediaElementAudioSourceNode with an OfflineAudioContext.
            if (isNativeOfflineAudioContext(nativeContext)) {
                throw TypeError();
            }
            super(context, true, nativeMediaElementAudioSourceNode, null);
            this._nativeMediaElementAudioSourceNode = nativeMediaElementAudioSourceNode;
        }
        get mediaElement() {
            return this._nativeMediaElementAudioSourceNode.mediaElement;
        }
    };
};
//# sourceMappingURL=media-element-audio-source-node-constructor.js.map