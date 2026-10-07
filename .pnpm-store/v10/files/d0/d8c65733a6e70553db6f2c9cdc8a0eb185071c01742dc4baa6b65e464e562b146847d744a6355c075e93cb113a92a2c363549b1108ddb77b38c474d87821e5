import { IAudioNode } from '../interfaces';
import { TContext, TInternalStateEventListener } from '../types';
import { getEventListenersOfAudioNode } from './get-event-listeners-of-audio-node';

export const deleteEventListenerOfAudioNode = <T extends TContext>(
    audioNode: IAudioNode<T>,
    eventListener: TInternalStateEventListener
) => {
    const eventListeners = getEventListenersOfAudioNode(audioNode);

    if (!eventListeners.delete(eventListener)) {
        throw new Error('Missing the expected event listener.');
    }
};
