import { TGetUnrenderedAudioWorkletNodesFactory } from '../types';

export const createGetUnrenderedAudioWorkletNodes: TGetUnrenderedAudioWorkletNodesFactory = (unrenderedAudioWorkletNodeStore) => {
    return (nativeContext) => {
        const unrenderedAudioWorkletNodes = unrenderedAudioWorkletNodeStore.get(nativeContext);

        if (unrenderedAudioWorkletNodes === undefined) {
            throw new Error('The context has no set of AudioWorkletNodes.');
        }

        return unrenderedAudioWorkletNodes;
    };
};
