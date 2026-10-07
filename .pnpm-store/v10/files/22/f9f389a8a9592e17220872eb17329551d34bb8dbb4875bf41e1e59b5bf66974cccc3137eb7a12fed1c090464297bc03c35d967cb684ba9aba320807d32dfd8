import { IMinimalOfflineAudioContext } from '../interfaces';
import { TGetAudioParamRendererFactory } from '../types';

export const createGetAudioParamRenderer: TGetAudioParamRendererFactory = (getAudioParamConnections) => {
    return (audioParam) => {
        const audioParamConnections = getAudioParamConnections<IMinimalOfflineAudioContext>(audioParam);

        if (audioParamConnections.renderer === null) {
            throw new Error('Missing the renderer of the given AudioParam in the audio graph.');
        }

        return audioParamConnections.renderer;
    };
};
