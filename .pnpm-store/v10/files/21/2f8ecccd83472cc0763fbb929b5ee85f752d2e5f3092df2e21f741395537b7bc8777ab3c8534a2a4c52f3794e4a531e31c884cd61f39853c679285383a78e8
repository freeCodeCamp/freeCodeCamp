import { IAudioNode, IBiquadFilterNode } from '../interfaces';
import { TContext } from '../types';

export const isBiquadFilterNode = <T extends TContext>(audioNode: IAudioNode<T>): audioNode is IBiquadFilterNode<T> => {
    return 'frequency' in audioNode && 'gain' in audioNode;
};
