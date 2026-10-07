import { TConnectAudioParamFactory } from '../types';

export const createConnectAudioParam: TConnectAudioParamFactory = (renderInputsOfAudioParam) => {
    return (nativeOfflineAudioContext, audioParam, nativeAudioParam) => {
        return renderInputsOfAudioParam(audioParam, nativeOfflineAudioContext, nativeAudioParam);
    };
};
