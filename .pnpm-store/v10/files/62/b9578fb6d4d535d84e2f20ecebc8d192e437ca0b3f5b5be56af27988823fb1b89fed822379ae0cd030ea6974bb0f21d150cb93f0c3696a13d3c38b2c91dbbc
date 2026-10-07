import { IAudioNode } from '../interfaces';
import { TActiveInputConnection } from './active-input-connection';
import { TContext } from './context';
import { TPassiveAudioNodeInputConnection } from './passive-audio-node-input-connection';

export type TAddActiveInputConnectionToAudioNodeFunction = <T extends TContext>(
    activeInputs: Set<TActiveInputConnection<T>>[],
    source: IAudioNode<T>,
    [output, input, eventListener]: TPassiveAudioNodeInputConnection,
    ignoreDuplicates: boolean
) => void;
