import { IAudioDestinationNode } from '../interfaces';
import { TContext } from '../types';
import { deactivateActiveAudioNodeInputConnections } from './deactivate-active-audio-node-input-connections';

export const deactivateAudioGraph = <T extends TContext>(context: T): void => {
    deactivateActiveAudioNodeInputConnections(<IAudioDestinationNode<T>>context.destination, []);
};
