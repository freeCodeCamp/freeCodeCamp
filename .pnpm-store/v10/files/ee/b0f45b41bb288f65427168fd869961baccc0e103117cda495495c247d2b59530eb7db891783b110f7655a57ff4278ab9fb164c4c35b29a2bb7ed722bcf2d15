import { IAudioParam, IAudioParamRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TContext } from './context';

export type TAddAudioParamConnectionsFunction = <T extends TContext>(
    audioParam: IAudioParam,
    audioParamRenderer: T extends IMinimalOfflineAudioContext | IOfflineAudioContext ? IAudioParamRenderer : null
) => void;
