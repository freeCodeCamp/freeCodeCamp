import { IAudioNode, IStereoPannerNode } from '../interfaces';
import { TContext } from '../types';

export const isStereoPannerNode = <T extends TContext>(audioNode: IAudioNode<T>): audioNode is IStereoPannerNode<T> => {
    return 'pan' in audioNode;
};
