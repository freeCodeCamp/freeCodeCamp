import { IAudioNodeRenderer, IIIRFilterNode, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';

export type TIIRFilterNodeRendererFactory = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>(
    feedback: Iterable<number>,
    feedforward: Iterable<number>
) => IAudioNodeRenderer<T, IIIRFilterNode<T>>;
