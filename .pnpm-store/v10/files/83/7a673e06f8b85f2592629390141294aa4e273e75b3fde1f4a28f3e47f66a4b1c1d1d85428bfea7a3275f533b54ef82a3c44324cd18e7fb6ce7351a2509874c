import { TDeleteUnrenderedAudioWorkletNodeFactory } from '../types';

export const createDeleteUnrenderedAudioWorkletNode: TDeleteUnrenderedAudioWorkletNodeFactory = (getUnrenderedAudioWorkletNodes) => {
    return (nativeContext, audioWorkletNode) => {
        getUnrenderedAudioWorkletNodes(nativeContext).delete(audioWorkletNode);
    };
};
