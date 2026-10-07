import { IAudioNode } from '../interfaces';
import { TContext, TPassiveAudioParamInputConnection } from '../types';
import { getValueForKey } from './get-value-for-key';
import { pickElementFromSet } from './pick-element-from-set';

export const deletePassiveInputConnectionToAudioParam = <T extends TContext>(
    passiveInputs: WeakMap<IAudioNode<T>, Set<TPassiveAudioParamInputConnection>>,
    source: IAudioNode<T>,
    output: number
) => {
    const passiveInputConnections = getValueForKey(passiveInputs, source);
    const matchingConnection = pickElementFromSet(
        passiveInputConnections,
        (passiveInputConnection) => passiveInputConnection[0] === output
    );

    if (passiveInputConnections.size === 0) {
        passiveInputs.delete(source);
    }

    return matchingConnection;
};
