import { IAudioParam } from '../interfaces';
import { TIsAnyAudioParamFactory, TNativeAudioParam } from '../types';

export const createIsAnyAudioParam: TIsAnyAudioParamFactory = (audioParamStore, isNativeAudioParam) => {
    return (anything): anything is IAudioParam | TNativeAudioParam => audioParamStore.has(<any>anything) || isNativeAudioParam(anything);
};
