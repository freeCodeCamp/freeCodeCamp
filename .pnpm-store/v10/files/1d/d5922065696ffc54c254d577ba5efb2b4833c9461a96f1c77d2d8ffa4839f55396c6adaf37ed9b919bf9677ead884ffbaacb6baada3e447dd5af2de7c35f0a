import { IAudioNode } from '../interfaces';
import { TIsAnyAudioNodeFactory, TNativeAudioNode } from '../types';

export const createIsAnyAudioNode: TIsAnyAudioNodeFactory = (audioNodeStore, isNativeAudioNode) => {
    return (anything): anything is IAudioNode<any> | TNativeAudioNode => audioNodeStore.has(<any>anything) || isNativeAudioNode(anything);
};
