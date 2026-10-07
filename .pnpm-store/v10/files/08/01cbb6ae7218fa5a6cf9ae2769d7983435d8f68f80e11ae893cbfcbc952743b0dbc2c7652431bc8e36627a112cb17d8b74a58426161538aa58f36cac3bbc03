import { IAudioNode } from '../interfaces';
import { TActiveInputConnection, TContext, TPassiveAudioParamInputConnection } from '../types';
import { insertElementInSet } from './insert-element-in-set';

export const addActiveInputConnectionToAudioParam = <T extends TContext>(
    activeInputs: Set<TActiveInputConnection<T>>,
    source: IAudioNode<T>,
    [output, eventListener]: TPassiveAudioParamInputConnection,
    ignoreDuplicates: boolean
) => {
    insertElementInSet(
        activeInputs,
        [source, output, eventListener],
        (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output,
        ignoreDuplicates
    );
};
