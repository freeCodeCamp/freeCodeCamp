import { TNativeAudioNode, TNativeAudioParam } from '../types';

export const isNativeAudioNode = (
    nativeAudioNodeOrAudioParam: TNativeAudioNode | TNativeAudioParam
): nativeAudioNodeOrAudioParam is TNativeAudioNode => {
    return 'context' in nativeAudioNodeOrAudioParam;
};
