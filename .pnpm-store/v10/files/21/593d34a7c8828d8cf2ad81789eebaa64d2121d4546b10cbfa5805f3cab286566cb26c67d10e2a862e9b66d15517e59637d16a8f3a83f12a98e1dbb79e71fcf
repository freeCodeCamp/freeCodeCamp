import { TGetAudioNodeTailTimeFactory } from '../types';

export const createGetAudioNodeTailTime: TGetAudioNodeTailTimeFactory = (audioNodeTailTimeStore) => {
    return (audioNode) => audioNodeTailTimeStore.get(audioNode) ?? 0;
};
