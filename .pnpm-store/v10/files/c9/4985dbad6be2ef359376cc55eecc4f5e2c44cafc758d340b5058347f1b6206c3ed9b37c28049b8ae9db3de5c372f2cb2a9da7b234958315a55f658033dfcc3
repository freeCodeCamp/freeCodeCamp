import { AUDIO_PARAM_STORE } from '../globals';
import { IAudioParam } from '../interfaces';
import { TNativeAudioParam } from '../types';
import { getValueForKey } from './get-value-for-key';

export const getNativeAudioParam = (audioParam: IAudioParam): TNativeAudioParam => {
    return getValueForKey(AUDIO_PARAM_STORE, audioParam);
};
