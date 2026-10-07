import { IAudioNode } from '../interfaces';
import { TActiveInputConnection, TContext } from '../types';
import { pickElementFromSet } from './pick-element-from-set';

export const deleteActiveInputConnectionToAudioParam = <T extends TContext>(
    activeInputs: Set<TActiveInputConnection<T>>,
    source: IAudioNode<T>,
    output: number
) => {
    return pickElementFromSet(
        activeInputs,
        (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output
    );
};
