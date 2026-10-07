import { TContext } from '../types';
import { IAudioNode } from './audio-node';
import { IAudioParam } from './audio-param';

export interface IDynamicsCompressorNode<T extends TContext> extends IAudioNode<T> {
    readonly attack: IAudioParam;

    readonly knee: IAudioParam;

    readonly ratio: IAudioParam;

    readonly reduction: number;

    readonly release: IAudioParam;

    readonly threshold: IAudioParam;
}
