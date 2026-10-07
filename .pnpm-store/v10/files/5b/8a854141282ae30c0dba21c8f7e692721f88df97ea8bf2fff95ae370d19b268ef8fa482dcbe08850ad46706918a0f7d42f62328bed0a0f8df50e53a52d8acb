import { IAudioNode, IDelayNode } from '../interfaces';
import { TContext } from '../types';

export const isDelayNode = <T extends TContext>(audioNode: IAudioNode<T>): audioNode is IDelayNode<T> => {
    return 'delayTime' in audioNode;
};
