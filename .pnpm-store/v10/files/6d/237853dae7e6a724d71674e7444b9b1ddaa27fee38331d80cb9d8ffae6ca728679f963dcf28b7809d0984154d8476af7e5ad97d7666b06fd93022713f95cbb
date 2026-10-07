import { IAudioNode, IAudioNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TActiveInputConnection, TAddAudioNodeConnectionsFactory, TContext, TNativeAudioNode } from '../types';

export const createAddAudioNodeConnections: TAddAudioNodeConnectionsFactory = (audioNodeConnectionsStore) => {
    return <T extends TContext>(
        audioNode: IAudioNode<T>,
        audioNodeRenderer: T extends IMinimalOfflineAudioContext | IOfflineAudioContext ? IAudioNodeRenderer<T, IAudioNode<T>> : null,
        nativeAudioNode: TNativeAudioNode
    ) => {
        const activeInputs = [];

        for (let i = 0; i < nativeAudioNode.numberOfInputs; i += 1) {
            activeInputs.push(new Set<TActiveInputConnection<T>>());
        }

        audioNodeConnectionsStore.set(audioNode, {
            activeInputs,
            outputs: new Set(),
            passiveInputs: new WeakMap(),
            renderer: audioNodeRenderer
        });
    };
};
