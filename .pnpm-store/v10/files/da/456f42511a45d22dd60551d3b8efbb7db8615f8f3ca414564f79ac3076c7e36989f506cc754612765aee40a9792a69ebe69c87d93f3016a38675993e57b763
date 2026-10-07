import { AUDIO_NODE_CONNECTIONS_STORE } from '../globals';
import { IAudioNode } from '../interfaces';
import { TAudioNodeConnections, TContext, TGetAudioNodeConnectionsFunction } from '../types';
import { getValueForKey } from './get-value-for-key';

export const getAudioNodeConnections: TGetAudioNodeConnectionsFunction = <T extends TContext>(
    audioNode: IAudioNode<T>
): TAudioNodeConnections<T> => {
    return <TAudioNodeConnections<T>>getValueForKey(AUDIO_NODE_CONNECTIONS_STORE, audioNode);
};
