import { IAudioParam, IStereoPannerNode, IStereoPannerOptions } from '../interfaces';
import { TAudioNodeRenderer, TContext, TStereoPannerNodeConstructorFactory } from '../types';

const DEFAULT_OPTIONS = {
    channelCount: 2,
    /*
     * Bug #105: The channelCountMode should be 'clamped-max' according to the spec but is set to 'explicit' to achieve consistent
     * behavior.
     */
    channelCountMode: 'explicit',
    channelInterpretation: 'speakers',
    pan: 0
} as const;

export const createStereoPannerNodeConstructor: TStereoPannerNodeConstructorFactory = (
    audioNodeConstructor,
    createAudioParam,
    createNativeStereoPannerNode,
    createStereoPannerNodeRenderer,
    getNativeContext,
    isNativeOfflineAudioContext
) => {
    return class StereoPannerNode<T extends TContext> extends audioNodeConstructor<T> implements IStereoPannerNode<T> {
        private _pan: IAudioParam;

        constructor(context: T, options?: Partial<IStereoPannerOptions>) {
            const nativeContext = getNativeContext(context);
            const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
            const nativeStereoPannerNode = createNativeStereoPannerNode(nativeContext, mergedOptions);
            const isOffline = isNativeOfflineAudioContext(nativeContext);
            const stereoPannerNodeRenderer = <TAudioNodeRenderer<T, this>>(isOffline ? createStereoPannerNodeRenderer() : null);

            super(context, false, nativeStereoPannerNode, stereoPannerNodeRenderer);

            this._pan = createAudioParam(this, isOffline, nativeStereoPannerNode.pan);
        }

        get pan(): IAudioParam {
            return this._pan;
        }
    };
};
