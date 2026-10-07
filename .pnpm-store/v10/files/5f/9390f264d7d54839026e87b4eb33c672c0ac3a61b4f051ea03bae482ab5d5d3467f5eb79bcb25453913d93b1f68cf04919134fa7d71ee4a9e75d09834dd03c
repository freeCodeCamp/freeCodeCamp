import { IAudioNode } from '../interfaces';
import { TContext } from './context';

export type TAddConnectionToAudioNodeFunction = <T extends TContext>(
    source: IAudioNode<T>,
    destination: IAudioNode<T>,
    output: number,
    input: number,
    isOffline: boolean
) => boolean;
