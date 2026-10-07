import { TActiveInputConnection, TContext, TGetActiveAudioWorkletNodeInputsFactory, TNativeAudioWorkletNode } from '../types';

export const createGetActiveAudioWorkletNodeInputs: TGetActiveAudioWorkletNodeInputsFactory = (
    activeAudioWorkletNodeInputsStore,
    getValueForKey
) => {
    return <T extends TContext>(nativeAudioWorkletNode: TNativeAudioWorkletNode) =>
        <Set<TActiveInputConnection<T>>[]>getValueForKey(activeAudioWorkletNodeInputsStore, nativeAudioWorkletNode);
};
