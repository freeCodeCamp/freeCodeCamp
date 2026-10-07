import { IAudioContext, IMediaStreamTrackAudioSourceNode, IMediaStreamTrackAudioSourceOptions, IMinimalAudioContext } from '../interfaces';
import { TAudioNodeRenderer, TMediaStreamTrackAudioSourceNodeConstructorFactory } from '../types';

export const createMediaStreamTrackAudioSourceNodeConstructor: TMediaStreamTrackAudioSourceNodeConstructorFactory = (
    audioNodeConstructor,
    createNativeMediaStreamTrackAudioSourceNode,
    getNativeContext
) => {
    return class MediaStreamTrackAudioSourceNode<T extends IAudioContext | IMinimalAudioContext> extends audioNodeConstructor<T>
        implements IMediaStreamTrackAudioSourceNode<T> {
        constructor(context: T, options: IMediaStreamTrackAudioSourceOptions) {
            const nativeContext = getNativeContext(context);
            const nativeMediaStreamTrackAudioSourceNode = createNativeMediaStreamTrackAudioSourceNode(nativeContext, options);

            super(context, true, nativeMediaStreamTrackAudioSourceNode, <TAudioNodeRenderer<T>>null);
        }
    };
};
