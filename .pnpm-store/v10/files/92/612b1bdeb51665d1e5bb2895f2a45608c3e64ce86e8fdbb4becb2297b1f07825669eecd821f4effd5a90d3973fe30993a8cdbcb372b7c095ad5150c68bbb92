import { IAudioNodeRenderer, IDelayNode, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';

export type TDelayNodeRendererFactory = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>(
    maxDelayTime: number
) => IAudioNodeRenderer<T, IDelayNode<T>>;
