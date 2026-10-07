import { IAudioContext, IMediaStreamTrackAudioSourceNode, IMediaStreamTrackAudioSourceOptions, IMinimalAudioContext } from '../interfaces';

export type TMediaStreamTrackAudioSourceNodeConstructor = new <T extends IAudioContext | IMinimalAudioContext>(
    context: T,
    options: IMediaStreamTrackAudioSourceOptions
) => IMediaStreamTrackAudioSourceNode<T>;
