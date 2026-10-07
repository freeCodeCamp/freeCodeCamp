import { IAudioNode } from '../interfaces';
import { TContext, TPassiveAudioNodeInputConnection } from '../types';
import { getValueForKey } from './get-value-for-key';
import { pickElementFromSet } from './pick-element-from-set';

export const deletePassiveInputConnectionToAudioNode = <T extends TContext>(
    passiveInputs: WeakMap<IAudioNode<T>, Set<TPassiveAudioNodeInputConnection>>,
    source: IAudioNode<T>,
    output: number,
    input: number
) => {
    const passiveInputConnections = getValueForKey(passiveInputs, source);
    const matchingConnection = pickElementFromSet(
        passiveInputConnections,
        (passiveInputConnection) => passiveInputConnection[0] === output && passiveInputConnection[1] === input
    );

    if (passiveInputConnections.size === 0) {
        passiveInputs.delete(source);
    }

    return matchingConnection;
};
