import { IAudioNode } from '../interfaces';
import { TActiveInputConnection, TContext, TPassiveAudioParamInputConnection } from '../types';
import { insertElementInSet } from './insert-element-in-set';

export const addPassiveInputConnectionToAudioParam = <T extends TContext>(
    passiveInputs: WeakMap<IAudioNode<T>, Set<TPassiveAudioParamInputConnection>>,
    [source, output, eventListener]: TActiveInputConnection<T>,
    ignoreDuplicates: boolean
) => {
    const passiveInputConnections = passiveInputs.get(source);

    if (passiveInputConnections === undefined) {
        passiveInputs.set(source, new Set([[output, eventListener]]));
    } else {
        insertElementInSet(
            passiveInputConnections,
            [output, eventListener],
            (passiveInputConnection) => passiveInputConnection[0] === output,
            ignoreDuplicates
        );
    }
};
