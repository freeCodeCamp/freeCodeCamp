import { IChannelMergerOptions } from '../interfaces';
import { TAudioNodeRenderer, TChannelMergerNodeConstructorFactory, TContext } from '../types';

const DEFAULT_OPTIONS = {
    channelCount: 1,
    channelCountMode: 'explicit',
    channelInterpretation: 'speakers',
    numberOfInputs: 6
} as const;

export const createChannelMergerNodeConstructor: TChannelMergerNodeConstructorFactory = (
    audioNodeConstructor,
    createChannelMergerNodeRenderer,
    createNativeChannelMergerNode,
    getNativeContext,
    isNativeOfflineAudioContext
) => {
    return class ChannelMergerNode<T extends TContext> extends audioNodeConstructor<T> {
        constructor(context: T, options?: Partial<IChannelMergerOptions>) {
            const nativeContext = getNativeContext(context);
            const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
            const nativeChannelMergerNode = createNativeChannelMergerNode(nativeContext, mergedOptions);
            const channelMergerNodeRenderer = <TAudioNodeRenderer<T, this>>(
                (isNativeOfflineAudioContext(nativeContext) ? createChannelMergerNodeRenderer() : null)
            );

            super(context, false, nativeChannelMergerNode, channelMergerNodeRenderer);
        }
    };
};
