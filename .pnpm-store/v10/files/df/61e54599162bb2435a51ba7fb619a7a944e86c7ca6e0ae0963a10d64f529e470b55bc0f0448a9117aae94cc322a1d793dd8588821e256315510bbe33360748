import { IAudioContext, IMediaElementAudioSourceNode, IMediaElementAudioSourceOptions, IMinimalAudioContext } from '../interfaces';

export type TMediaElementAudioSourceNodeConstructor = new <T extends IAudioContext | IMinimalAudioContext>(
    context: T,
    options: IMediaElementAudioSourceOptions
) => IMediaElementAudioSourceNode<T>;
