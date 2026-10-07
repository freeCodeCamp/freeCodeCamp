import { isAudioWorkletNode } from '../guards/audio-worklet-node';
import { IAudioNode } from '../interfaces';
import { TActiveInputConnection, TContext } from '../types';
import { setInternalStateToPassive } from './set-internal-state-to-passive';

// Set the internalState of the audioNode to 'passive' if it is not an AudioWorkletNode and if it has no 'active' input connections.
export const setInternalStateToPassiveWhenNecessary = <T extends TContext>(
    audioNode: IAudioNode<T>,
    activeInputs: Set<TActiveInputConnection<T>>[]
) => {
    if (!isAudioWorkletNode(audioNode) && activeInputs.every((connections) => connections.size === 0)) {
        setInternalStateToPassive(audioNode);
    }
};
