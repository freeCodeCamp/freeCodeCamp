import { IAudioBufferSourceNode, IAudioNode } from '../interfaces';
import { TContext } from '../types';

export const isAudioBufferSourceNode = <T extends TContext>(audioNode: IAudioNode<T>): audioNode is IAudioBufferSourceNode<T> => {
    return 'playbackRate' in audioNode;
};
