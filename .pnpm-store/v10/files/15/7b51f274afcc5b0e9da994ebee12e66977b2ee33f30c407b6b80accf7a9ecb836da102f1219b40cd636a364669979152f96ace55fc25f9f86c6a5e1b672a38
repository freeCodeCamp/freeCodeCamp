import { IAudioNode, IConstantSourceNode } from '../interfaces';
import { TContext } from '../types';

export const isConstantSourceNode = <T extends TContext>(audioNode: IAudioNode<T>): audioNode is IConstantSourceNode<T> => {
    return 'offset' in audioNode;
};
