import { IAudioWorkletNodeOptions, IAudioWorkletProcessorConstructor, INativeAudioWorkletNodeFaker } from '../interfaces';
import { TNativeContext } from './native-context';

export type TNativeAudioWorkletNodeFakerFactory = (
    nativeContext: TNativeContext,
    baseLatency: null | number,
    processorConstructor: IAudioWorkletProcessorConstructor,
    options: IAudioWorkletNodeOptions
) => INativeAudioWorkletNodeFaker;
