import { IAudioBufferSourceNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TContext } from './context';

export type TAudioBufferSourceNodeRenderer<T extends TContext> = T extends IMinimalOfflineAudioContext | IOfflineAudioContext
    ? IAudioBufferSourceNodeRenderer<T>
    : null;
