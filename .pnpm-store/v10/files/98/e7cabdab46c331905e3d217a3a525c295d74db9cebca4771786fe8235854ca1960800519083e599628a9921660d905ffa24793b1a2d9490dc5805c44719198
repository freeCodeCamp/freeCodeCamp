import { TContext } from '../types';
import { IAudioNode } from './audio-node';

export interface IIIRFilterNode<T extends TContext> extends IAudioNode<T> {
    getFrequencyResponse(frequencyHz: Float32Array, magResponse: Float32Array, phaseResponse: Float32Array): void;
}
