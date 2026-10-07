import { IAudioNode, IAudioNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TActiveInputConnection } from './active-input-connection';
import { TContext } from './context';
import { TOutputConnection } from './output-connection';
import { TPassiveAudioNodeInputConnection } from './passive-audio-node-input-connection';

export type TAudioNodeConnections<T extends TContext> = Readonly<{
    activeInputs: Set<TActiveInputConnection<T>>[];

    outputs: Set<TOutputConnection<T>>;

    passiveInputs: WeakMap<IAudioNode<T>, Set<TPassiveAudioNodeInputConnection>>;

    renderer: T extends IMinimalOfflineAudioContext | IOfflineAudioContext ? IAudioNodeRenderer<T, IAudioNode<T>> : null;
}>;
