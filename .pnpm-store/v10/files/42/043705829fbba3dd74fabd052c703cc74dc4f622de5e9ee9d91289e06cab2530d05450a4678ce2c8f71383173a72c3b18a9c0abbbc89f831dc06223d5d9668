import { isAudioWorkletNode } from '../guards/audio-worklet-node';
import { setInternalStateToPassive } from './set-internal-state-to-passive';
// Set the internalState of the audioNode to 'passive' if it is not an AudioWorkletNode and if it has no 'active' input connections.
export const setInternalStateToPassiveWhenNecessary = (audioNode, activeInputs) => {
    if (!isAudioWorkletNode(audioNode) && activeInputs.every((connections) => connections.size === 0)) {
        setInternalStateToPassive(audioNode);
    }
};
//# sourceMappingURL=set-internal-state-to-passive-when-necessary.js.map