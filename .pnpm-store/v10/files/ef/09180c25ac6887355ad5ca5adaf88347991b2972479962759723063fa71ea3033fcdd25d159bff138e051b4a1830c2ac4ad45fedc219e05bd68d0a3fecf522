const DEFAULT_OPTIONS = {
    channelCount: 2,
    /*
     * Bug #105: The channelCountMode should be 'clamped-max' according to the spec but is set to 'explicit' to achieve consistent
     * behavior.
     */
    channelCountMode: 'explicit',
    channelInterpretation: 'speakers',
    pan: 0
};
export const createStereoPannerNodeConstructor = (audioNodeConstructor, createAudioParam, createNativeStereoPannerNode, createStereoPannerNodeRenderer, getNativeContext, isNativeOfflineAudioContext) => {
    return class StereoPannerNode extends audioNodeConstructor {
        constructor(context, options) {
            const nativeContext = getNativeContext(context);
            const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
            const nativeStereoPannerNode = createNativeStereoPannerNode(nativeContext, mergedOptions);
            const isOffline = isNativeOfflineAudioContext(nativeContext);
            const stereoPannerNodeRenderer = (isOffline ? createStereoPannerNodeRenderer() : null);
            super(context, false, nativeStereoPannerNode, stereoPannerNodeRenderer);
            this._pan = createAudioParam(this, isOffline, nativeStereoPannerNode.pan);
        }
        get pan() {
            return this._pan;
        }
    };
};
//# sourceMappingURL=stereo-panner-node-constructor.js.map