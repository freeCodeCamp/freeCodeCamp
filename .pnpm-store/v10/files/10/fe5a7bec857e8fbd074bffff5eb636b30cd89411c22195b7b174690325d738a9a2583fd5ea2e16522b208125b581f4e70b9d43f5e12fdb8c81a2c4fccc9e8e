import { IAudioContext } from './audio-context';
import { IAudioNode } from './audio-node';
import { IMinimalAudioContext } from './minimal-audio-context';

export interface IMediaStreamAudioDestinationNode<T extends IAudioContext | IMinimalAudioContext> extends IAudioNode<T> {
    readonly stream: MediaStream;
}
