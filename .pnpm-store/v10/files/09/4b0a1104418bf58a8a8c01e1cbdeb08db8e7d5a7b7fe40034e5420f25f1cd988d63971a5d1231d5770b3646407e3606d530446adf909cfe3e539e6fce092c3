import { IAudioNode, IAudioWorkletNode } from '../interfaces';
import { TContext } from '../types';

export const isAudioWorkletNode = <T extends TContext>(audioNode: IAudioNode<T>): audioNode is IAudioWorkletNode<T> => {
    return 'port' in audioNode;
};
