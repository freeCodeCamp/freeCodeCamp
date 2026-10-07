import { IAudioContext } from './audio-context';
import { IAudioNode } from './audio-node';
import { IMinimalAudioContext } from './minimal-audio-context';

export interface IMediaStreamAudioSourceNode<T extends IAudioContext | IMinimalAudioContext> extends IAudioNode<T> {
    readonly mediaStream: MediaStream;
}
