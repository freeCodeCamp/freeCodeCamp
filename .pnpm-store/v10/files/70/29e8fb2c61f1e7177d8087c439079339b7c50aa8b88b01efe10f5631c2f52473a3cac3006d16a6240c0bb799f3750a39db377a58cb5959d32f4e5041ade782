import { IAudioParam, IDelayNode, IDelayOptions } from '../interfaces';
import { TAudioNodeRenderer, TContext, TDelayNodeConstructorFactory } from '../types';

const DEFAULT_OPTIONS = {
    channelCount: 2,
    channelCountMode: 'max',
    channelInterpretation: 'speakers',
    delayTime: 0,
    maxDelayTime: 1
} as const;

export const createDelayNodeConstructor: TDelayNodeConstructorFactory = (
    audioNodeConstructor,
    createAudioParam,
    createDelayNodeRenderer,
    createNativeDelayNode,
    getNativeContext,
    isNativeOfflineAudioContext,
    setAudioNodeTailTime
) => {
    return class DelayNode<T extends TContext> extends audioNodeConstructor<T> implements IDelayNode<T> {
        private _delayTime: IAudioParam;

        constructor(context: T, options?: Partial<IDelayOptions>) {
            const nativeContext = getNativeContext(context);
            const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
            const nativeDelayNode = createNativeDelayNode(nativeContext, mergedOptions);
            const isOffline = isNativeOfflineAudioContext(nativeContext);
            const delayNodeRenderer = <TAudioNodeRenderer<T, this>>(isOffline ? createDelayNodeRenderer(mergedOptions.maxDelayTime) : null);

            super(context, false, nativeDelayNode, delayNodeRenderer);

            this._delayTime = createAudioParam(this, isOffline, nativeDelayNode.delayTime);

            setAudioNodeTailTime(this, mergedOptions.maxDelayTime);
        }

        get delayTime(): IAudioParam {
            return this._delayTime;
        }
    };
};
