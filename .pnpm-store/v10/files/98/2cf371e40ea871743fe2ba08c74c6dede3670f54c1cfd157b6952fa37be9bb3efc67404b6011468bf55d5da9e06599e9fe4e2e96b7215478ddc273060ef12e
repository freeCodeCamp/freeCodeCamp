import { IAudioParam, IAudioParamRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TAddAudioParamConnectionsFactory, TContext } from '../types';

export const createAddAudioParamConnections: TAddAudioParamConnectionsFactory = (audioParamConnectionsStore) => {
    return <T extends TContext>(
        audioParam: IAudioParam,
        audioParamRenderer: T extends IMinimalOfflineAudioContext | IOfflineAudioContext ? IAudioParamRenderer : null
    ) => {
        audioParamConnectionsStore.set(audioParam, { activeInputs: new Set(), passiveInputs: new WeakMap(), renderer: audioParamRenderer });
    };
};
