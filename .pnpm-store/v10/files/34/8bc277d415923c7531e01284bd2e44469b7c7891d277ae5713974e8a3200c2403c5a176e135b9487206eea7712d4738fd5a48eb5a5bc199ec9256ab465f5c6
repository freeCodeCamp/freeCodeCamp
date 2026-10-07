import { IAudioNode, IOscillatorNode } from '../interfaces';
import { TContext } from '../types';

export const isOscillatorNode = <T extends TContext>(audioNode: IAudioNode<T>): audioNode is IOscillatorNode<T> => {
    return 'detune' in audioNode && 'frequency' in audioNode && !('gain' in audioNode);
};
