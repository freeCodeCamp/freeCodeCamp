import { IAudioNode, IAudioNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TContext } from './context';

export type TAudioNodeRenderer<T extends TContext, U extends IAudioNode<T> = IAudioNode<T>> = T extends
    | IMinimalOfflineAudioContext
    | IOfflineAudioContext
    ? IAudioNodeRenderer<T, U>
    : null;
