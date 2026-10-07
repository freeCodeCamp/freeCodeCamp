import { IAudioWorkletNodeOptions, IAudioWorkletProcessorConstructor } from '../interfaces';
import { TNativeAudioWorkletNode } from './native-audio-worklet-node';
import { TNativeAudioWorkletNodeConstructor } from './native-audio-worklet-node-constructor';
import { TNativeContext } from './native-context';

export type TNativeAudioWorkletNodeFactory = (
    nativeContext: TNativeContext,
    baseLatency: null | number,
    nativeAudioWorkletNodeConstructor: null | TNativeAudioWorkletNodeConstructor,
    name: string,
    processorConstructor: undefined | IAudioWorkletProcessorConstructor,
    options: IAudioWorkletNodeOptions
) => TNativeAudioWorkletNode;
