import { IAudioNode, IAudioParamRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TActiveInputConnection } from './active-input-connection';
import { TContext } from './context';
import { TPassiveAudioParamInputConnection } from './passive-audio-param-input-connection';

export type TAudioParamConnections<T extends TContext> = Readonly<{
    activeInputs: Set<TActiveInputConnection<T>>;

    passiveInputs: WeakMap<IAudioNode<T>, Set<TPassiveAudioParamInputConnection>>;

    renderer: T extends IMinimalOfflineAudioContext | IOfflineAudioContext ? IAudioParamRenderer : null;
}>;
