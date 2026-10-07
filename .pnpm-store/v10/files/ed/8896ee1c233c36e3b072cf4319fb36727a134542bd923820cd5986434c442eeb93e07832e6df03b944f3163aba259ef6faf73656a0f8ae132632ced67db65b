import { IAudioNode } from '../interfaces';
import { TActiveInputConnection } from './active-input-connection';
import { TContext } from './context';

export type TDeleteActiveInputConnectionToAudioNodeFunction = <T extends TContext>(
    activeInputs: Set<TActiveInputConnection<T>>[],
    source: IAudioNode<T>,
    output: number,
    input: number
) => TActiveInputConnection<T>;
