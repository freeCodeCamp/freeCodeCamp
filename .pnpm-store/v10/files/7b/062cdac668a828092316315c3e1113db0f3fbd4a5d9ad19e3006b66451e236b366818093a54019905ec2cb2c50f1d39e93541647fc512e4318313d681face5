import { INativeAudioNodeFaker } from '../interfaces';
import { TNativeAudioNode } from '../types';

export const isNativeAudioNodeFaker = (
    nativeAudioNodeOrNativeAudioNodeFaker: TNativeAudioNode | INativeAudioNodeFaker
): nativeAudioNodeOrNativeAudioNodeFaker is INativeAudioNodeFaker => {
    return 'inputs' in nativeAudioNodeOrNativeAudioNodeFaker;
};
