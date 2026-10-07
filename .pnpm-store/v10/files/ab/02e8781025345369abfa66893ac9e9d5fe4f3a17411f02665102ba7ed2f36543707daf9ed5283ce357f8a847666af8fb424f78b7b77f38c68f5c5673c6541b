const DEFAULT_OPTIONS = {
    channelCount: 2,
    channelCountMode: 'max',
    channelInterpretation: 'speakers',
    delayTime: 0,
    maxDelayTime: 1
};
export const createDelayNodeConstructor = (audioNodeConstructor, createAudioParam, createDelayNodeRenderer, createNativeDelayNode, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime) => {
    return class DelayNode extends audioNodeConstructor {
        constructor(context, options) {
            const nativeContext = getNativeContext(context);
            const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
            const nativeDelayNode = createNativeDelayNode(nativeContext, mergedOptions);
            const isOffline = isNativeOfflineAudioContext(nativeContext);
            const delayNodeRenderer = (isOffline ? createDelayNodeRenderer(mergedOptions.maxDelayTime) : null);
            super(context, false, nativeDelayNode, delayNodeRenderer);
            this._delayTime = createAudioParam(this, isOffline, nativeDelayNode.delayTime);
            setAudioNodeTailTime(this, mergedOptions.maxDelayTime);
        }
        get delayTime() {
            return this._delayTime;
        }
    };
};
//# sourceMappingURL=delay-node-constructor.js.map