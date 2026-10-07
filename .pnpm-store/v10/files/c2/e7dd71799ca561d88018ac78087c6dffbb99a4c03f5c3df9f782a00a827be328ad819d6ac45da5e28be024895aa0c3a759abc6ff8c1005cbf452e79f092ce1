import { IAudioNode, IGainNode } from '../interfaces';
import { TContext } from '../types';

export const isGainNode = <T extends TContext>(audioNode: IAudioNode<T>): audioNode is IGainNode<T> => {
    return !('frequency' in audioNode) && 'gain' in audioNode;
};
