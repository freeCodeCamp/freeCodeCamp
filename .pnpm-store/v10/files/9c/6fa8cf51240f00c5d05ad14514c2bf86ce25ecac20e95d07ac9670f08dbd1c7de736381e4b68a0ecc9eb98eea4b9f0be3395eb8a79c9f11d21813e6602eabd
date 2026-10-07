import { ACTIVE_AUDIO_NODE_STORE } from '../globals';
import { getEventListenersOfAudioNode } from './get-event-listeners-of-audio-node';
export const setInternalStateToPassive = (audioNode) => {
    if (!ACTIVE_AUDIO_NODE_STORE.has(audioNode)) {
        throw new Error('The AudioNode is not stored.');
    }
    ACTIVE_AUDIO_NODE_STORE.delete(audioNode);
    getEventListenersOfAudioNode(audioNode).forEach((eventListener) => eventListener(false));
};
//# sourceMappingURL=set-internal-state-to-passive.js.map