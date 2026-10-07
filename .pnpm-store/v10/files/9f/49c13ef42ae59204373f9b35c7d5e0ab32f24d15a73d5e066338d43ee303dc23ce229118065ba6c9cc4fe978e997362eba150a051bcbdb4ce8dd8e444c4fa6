import { TAddUnrenderedAudioWorkletNodeFactory } from '../types';

export const createAddUnrenderedAudioWorkletNode: TAddUnrenderedAudioWorkletNodeFactory = (getUnrenderedAudioWorkletNodes) => {
    return (nativeContext, audioWorkletNode) => {
        getUnrenderedAudioWorkletNodes(nativeContext).add(audioWorkletNode);
    };
};
