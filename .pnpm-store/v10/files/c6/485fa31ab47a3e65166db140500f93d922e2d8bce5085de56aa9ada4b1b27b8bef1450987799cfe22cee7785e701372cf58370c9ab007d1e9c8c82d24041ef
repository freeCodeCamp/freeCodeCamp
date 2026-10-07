const DEFAULT_OPTIONS = {
    buffer: null,
    channelCount: 2,
    channelCountMode: 'clamped-max',
    channelInterpretation: 'speakers',
    disableNormalization: false
};
export const createConvolverNodeConstructor = (audioNodeConstructor, createConvolverNodeRenderer, createNativeConvolverNode, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime) => {
    return class ConvolverNode extends audioNodeConstructor {
        constructor(context, options) {
            const nativeContext = getNativeContext(context);
            const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
            const nativeConvolverNode = createNativeConvolverNode(nativeContext, mergedOptions);
            const isOffline = isNativeOfflineAudioContext(nativeContext);
            const convolverNodeRenderer = (isOffline ? createConvolverNodeRenderer() : null);
            super(context, false, nativeConvolverNode, convolverNodeRenderer);
            this._isBufferNullified = false;
            this._nativeConvolverNode = nativeConvolverNode;
            if (mergedOptions.buffer !== null) {
                setAudioNodeTailTime(this, mergedOptions.buffer.duration);
            }
        }
        get buffer() {
            if (this._isBufferNullified) {
                return null;
            }
            return this._nativeConvolverNode.buffer;
        }
        set buffer(value) {
            this._nativeConvolverNode.buffer = value;
            // Bug #115: Safari does not allow to set the buffer to null.
            if (value === null && this._nativeConvolverNode.buffer !== null) {
                const nativeContext = this._nativeConvolverNode.context;
                this._nativeConvolverNode.buffer = nativeContext.createBuffer(1, 1, nativeContext.sampleRate);
                this._isBufferNullified = true;
                setAudioNodeTailTime(this, 0);
            }
            else {
                this._isBufferNullified = false;
                setAudioNodeTailTime(this, this._nativeConvolverNode.buffer === null ? 0 : this._nativeConvolverNode.buffer.duration);
            }
        }
        get normalize() {
            return this._nativeConvolverNode.normalize;
        }
        set normalize(value) {
            this._nativeConvolverNode.normalize = value;
        }
    };
};
//# sourceMappingURL=convolver-node-constructor.js.map