import { IAudioContext, IAudioNodeOptions, IMediaStreamAudioDestinationNode, IMinimalAudioContext } from '../interfaces';

export type TMediaStreamAudioDestinationNodeConstructor = new <T extends IAudioContext | IMinimalAudioContext>(
    context: T,
    options?: Partial<IAudioNodeOptions>
) => IMediaStreamAudioDestinationNode<T>;
