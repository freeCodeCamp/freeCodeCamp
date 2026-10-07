import { MOST_NEGATIVE_SINGLE_FLOAT, MOST_POSITIVE_SINGLE_FLOAT } from '../constants';
import { isActiveAudioNode } from '../helpers/is-active-audio-node';
import { setInternalStateToActive } from '../helpers/set-internal-state-to-active';
import { setInternalStateToPassive } from '../helpers/set-internal-state-to-passive';
const DEFAULT_OPTIONS = {
    buffer: null,
    channelCount: 2,
    channelCountMode: 'max',
    channelInterpretation: 'speakers',
    // Bug #149: Safari does not yet support the detune AudioParam.
    loop: false,
    loopEnd: 0,
    loopStart: 0,
    playbackRate: 1
};
export const createAudioBufferSourceNodeConstructor = (audioNodeConstructor, createAudioBufferSourceNodeRenderer, createAudioParam, createInvalidStateError, createNativeAudioBufferSourceNode, getNativeContext, isNativeOfflineAudioContext, wrapEventListener) => {
    return class AudioBufferSourceNode extends audioNodeConstructor {
        constructor(context, options) {
            const nativeContext = getNativeContext(context);
            const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
            const nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode(nativeContext, mergedOptions);
            const isOffline = isNativeOfflineAudioContext(nativeContext);
            const audioBufferSourceNodeRenderer = ((isOffline ? createAudioBufferSourceNodeRenderer() : null));
            super(context, false, nativeAudioBufferSourceNode, audioBufferSourceNodeRenderer);
            this._audioBufferSourceNodeRenderer = audioBufferSourceNodeRenderer;
            this._isBufferNullified = false;
            this._isBufferSet = mergedOptions.buffer !== null;
            this._nativeAudioBufferSourceNode = nativeAudioBufferSourceNode;
            this._onended = null;
            // Bug #73: Safari does not export the correct values for maxValue and minValue.
            this._playbackRate = createAudioParam(this, isOffline, nativeAudioBufferSourceNode.playbackRate, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        }
        get buffer() {
            if (this._isBufferNullified) {
                return null;
            }
            return this._nativeAudioBufferSourceNode.buffer;
        }
        set buffer(value) {
            this._nativeAudioBufferSourceNode.buffer = value;
            // Bug #72: Only Chrome & Edge do not allow to reassign the buffer yet.
            if (value !== null) {
                if (this._isBufferSet) {
                    throw createInvalidStateError();
                }
                this._isBufferSet = true;
            }
        }
        get loop() {
            return this._nativeAudioBufferSourceNode.loop;
        }
        set loop(value) {
            this._nativeAudioBufferSourceNode.loop = value;
        }
        get loopEnd() {
            return this._nativeAudioBufferSourceNode.loopEnd;
        }
        set loopEnd(value) {
            this._nativeAudioBufferSourceNode.loopEnd = value;
        }
        get loopStart() {
            return this._nativeAudioBufferSourceNode.loopStart;
        }
        set loopStart(value) {
            this._nativeAudioBufferSourceNode.loopStart = value;
        }
        get onended() {
            return this._onended;
        }
        set onended(value) {
            const wrappedListener = typeof value === 'function' ? wrapEventListener(this, value) : null;
            this._nativeAudioBufferSourceNode.onended = wrappedListener;
            const nativeOnEnded = this._nativeAudioBufferSourceNode.onended;
            this._onended = nativeOnEnded !== null && nativeOnEnded === wrappedListener ? value : nativeOnEnded;
        }
        get playbackRate() {
            return this._playbackRate;
        }
        start(when = 0, offset = 0, duration) {
            this._nativeAudioBufferSourceNode.start(when, offset, duration);
            if (this._audioBufferSourceNodeRenderer !== null) {
                this._audioBufferSourceNodeRenderer.start = duration === undefined ? [when, offset] : [when, offset, duration];
            }
            if (this.context.state !== 'closed') {
                setInternalStateToActive(this);
                const resetInternalStateToPassive = () => {
                    this._nativeAudioBufferSourceNode.removeEventListener('ended', resetInternalStateToPassive);
                    if (isActiveAudioNode(this)) {
                        setInternalStateToPassive(this);
                    }
                };
                this._nativeAudioBufferSourceNode.addEventListener('ended', resetInternalStateToPassive);
            }
        }
        stop(when = 0) {
            this._nativeAudioBufferSourceNode.stop(when);
            if (this._audioBufferSourceNodeRenderer !== null) {
                this._audioBufferSourceNodeRenderer.stop = when;
            }
        }
    };
};
//# sourceMappingURL=audio-buffer-source-node-constructor.js.map