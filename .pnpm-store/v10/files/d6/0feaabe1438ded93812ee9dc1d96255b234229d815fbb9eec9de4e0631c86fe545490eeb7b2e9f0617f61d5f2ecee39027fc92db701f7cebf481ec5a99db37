import { IAudioContext, IAudioNodeOptions, IMediaStreamAudioDestinationNode, IMinimalAudioContext } from '../interfaces';
import { TAudioNodeRenderer, TMediaStreamAudioDestinationNodeConstructorFactory, TNativeMediaStreamAudioDestinationNode } from '../types';

const DEFAULT_OPTIONS = {
    channelCount: 2,
    channelCountMode: 'explicit',
    channelInterpretation: 'speakers'
} as const;

export const createMediaStreamAudioDestinationNodeConstructor: TMediaStreamAudioDestinationNodeConstructorFactory = (
    audioNodeConstructor,
    createNativeMediaStreamAudioDestinationNode,
    getNativeContext,
    isNativeOfflineAudioContext
) => {
    return class MediaStreamAudioDestinationNode<T extends IAudioContext | IMinimalAudioContext> extends audioNodeConstructor<T>
        implements IMediaStreamAudioDestinationNode<T> {
        private _nativeMediaStreamAudioDestinationNode: TNativeMediaStreamAudioDestinationNode;

        constructor(context: T, options?: Partial<IAudioNodeOptions>) {
            const nativeContext = getNativeContext(context);

            // Bug #173: Safari allows to create a MediaStreamAudioDestinationNode with an OfflineAudioContext.
            if (isNativeOfflineAudioContext(nativeContext)) {
                throw new TypeError();
            }

            const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
            const nativeMediaStreamAudioDestinationNode = createNativeMediaStreamAudioDestinationNode(nativeContext, mergedOptions);

            super(context, false, nativeMediaStreamAudioDestinationNode, <TAudioNodeRenderer<T>>null);

            this._nativeMediaStreamAudioDestinationNode = nativeMediaStreamAudioDestinationNode;
        }

        get stream(): MediaStream {
            return this._nativeMediaStreamAudioDestinationNode.stream;
        }
    };
};
