import { TContext, TOscillatorType } from '../types';
import { IAudioParam } from './audio-param';
import { IAudioScheduledSourceNode } from './audio-scheduled-source-node';

export interface IOscillatorNode<T extends TContext> extends IAudioScheduledSourceNode<T> {
    readonly detune: IAudioParam;

    readonly frequency: IAudioParam;

    type: TOscillatorType;

    setPeriodicWave(periodicWave: PeriodicWave): void;
}
