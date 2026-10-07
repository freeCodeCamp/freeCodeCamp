import { AUDIO_NODE_STORE } from '../globals';
import { IAudioNode, INativeAudioNodeFaker } from '../interfaces';
import { TContext, TGetNativeAudioNodeFunction, TNativeAudioNode } from '../types';
import { getValueForKey } from './get-value-for-key';

export const getNativeAudioNode: TGetNativeAudioNodeFunction = <T extends TContext, U extends TNativeAudioNode | INativeAudioNodeFaker>(
    audioNode: IAudioNode<T>
): U => {
    return <U>getValueForKey(AUDIO_NODE_STORE, audioNode);
};
