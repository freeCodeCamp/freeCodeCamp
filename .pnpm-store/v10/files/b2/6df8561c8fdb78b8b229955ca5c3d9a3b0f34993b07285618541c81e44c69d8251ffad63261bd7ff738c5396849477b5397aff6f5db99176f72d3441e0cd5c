import { ACTIVE_AUDIO_NODE_STORE } from '../globals';
import { TIsPassiveAudioNodeFunction } from '../types';

export const isPassiveAudioNode: TIsPassiveAudioNodeFunction = (audioNode) => {
    return !ACTIVE_AUDIO_NODE_STORE.has(audioNode);
};
