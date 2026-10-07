import { IMinimalOfflineAudioContext, IOfflineAudioContext, IOscillatorNodeRenderer } from '../interfaces';
import { TContext } from './context';

export type TOscillatorNodeRenderer<T extends TContext> = T extends IMinimalOfflineAudioContext | IOfflineAudioContext
    ? IOscillatorNodeRenderer<T>
    : null;
