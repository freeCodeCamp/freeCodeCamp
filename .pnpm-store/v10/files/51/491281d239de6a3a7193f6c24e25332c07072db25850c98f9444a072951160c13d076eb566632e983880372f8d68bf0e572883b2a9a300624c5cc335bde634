import { IAudioParam, IDynamicsCompressorNode, IDynamicsCompressorOptions } from '../interfaces';
import {
    TAudioNodeRenderer,
    TChannelCountMode,
    TContext,
    TDynamicsCompressorNodeConstructorFactory,
    TNativeAudioParam,
    TNativeDynamicsCompressorNode
} from '../types';

const DEFAULT_OPTIONS = {
    attack: 0.003,
    channelCount: 2,
    channelCountMode: 'clamped-max',
    channelInterpretation: 'speakers',
    knee: 30,
    ratio: 12,
    release: 0.25,
    threshold: -24
} as const;

export const createDynamicsCompressorNodeConstructor: TDynamicsCompressorNodeConstructorFactory = (
    audioNodeConstructor,
    createAudioParam,
    createDynamicsCompressorNodeRenderer,
    createNativeDynamicsCompressorNode,
    createNotSupportedError,
    getNativeContext,
    isNativeOfflineAudioContext,
    setAudioNodeTailTime
) => {
    return class DynamicsCompressorNode<T extends TContext> extends audioNodeConstructor<T> implements IDynamicsCompressorNode<T> {
        private _attack: IAudioParam;

        private _knee: IAudioParam;

        private _nativeDynamicsCompressorNode: TNativeDynamicsCompressorNode;

        private _ratio: IAudioParam;

        private _release: IAudioParam;

        private _threshold: IAudioParam;

        constructor(context: T, options?: Partial<IDynamicsCompressorOptions>) {
            const nativeContext = getNativeContext(context);
            const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
            const nativeDynamicsCompressorNode = createNativeDynamicsCompressorNode(nativeContext, mergedOptions);
            const isOffline = isNativeOfflineAudioContext(nativeContext);
            const dynamicsCompressorNodeRenderer = <TAudioNodeRenderer<T, this>>(isOffline ? createDynamicsCompressorNodeRenderer() : null);

            super(context, false, nativeDynamicsCompressorNode, dynamicsCompressorNodeRenderer);

            this._attack = createAudioParam(this, isOffline, nativeDynamicsCompressorNode.attack);
            this._knee = createAudioParam(this, isOffline, nativeDynamicsCompressorNode.knee);
            this._nativeDynamicsCompressorNode = nativeDynamicsCompressorNode;
            this._ratio = createAudioParam(this, isOffline, nativeDynamicsCompressorNode.ratio);
            this._release = createAudioParam(this, isOffline, nativeDynamicsCompressorNode.release);
            this._threshold = createAudioParam(this, isOffline, nativeDynamicsCompressorNode.threshold);

            setAudioNodeTailTime(this, 0.006);
        }

        get attack(): IAudioParam {
            return this._attack;
        }

        // Bug #108: Safari allows a channelCount of three and above which is why the getter and setter needs to be overwritten here.
        get channelCount(): number {
            return this._nativeDynamicsCompressorNode.channelCount;
        }

        set channelCount(value) {
            const previousChannelCount = this._nativeDynamicsCompressorNode.channelCount;

            this._nativeDynamicsCompressorNode.channelCount = value;

            if (value > 2) {
                this._nativeDynamicsCompressorNode.channelCount = previousChannelCount;

                throw createNotSupportedError();
            }
        }

        /*
         * Bug #109: Only Chrome and Firefox disallow a channelCountMode of 'max' yet which is why the getter and setter needs to be
         * overwritten here.
         */
        get channelCountMode(): TChannelCountMode {
            return this._nativeDynamicsCompressorNode.channelCountMode;
        }

        set channelCountMode(value) {
            const previousChannelCount = this._nativeDynamicsCompressorNode.channelCountMode;

            this._nativeDynamicsCompressorNode.channelCountMode = value;

            if (value === 'max') {
                this._nativeDynamicsCompressorNode.channelCountMode = previousChannelCount;

                throw createNotSupportedError();
            }
        }

        get knee(): IAudioParam {
            return this._knee;
        }

        get ratio(): IAudioParam {
            return this._ratio;
        }

        get reduction(): number {
            // Bug #111: Safari returns an AudioParam instead of a number.
            if (typeof (<TNativeAudioParam>(<any>this._nativeDynamicsCompressorNode.reduction)).value === 'number') {
                return (<TNativeAudioParam>(<any>this._nativeDynamicsCompressorNode.reduction)).value;
            }

            return this._nativeDynamicsCompressorNode.reduction;
        }

        get release(): IAudioParam {
            return this._release;
        }

        get threshold(): IAudioParam {
            return this._threshold;
        }
    };
};
