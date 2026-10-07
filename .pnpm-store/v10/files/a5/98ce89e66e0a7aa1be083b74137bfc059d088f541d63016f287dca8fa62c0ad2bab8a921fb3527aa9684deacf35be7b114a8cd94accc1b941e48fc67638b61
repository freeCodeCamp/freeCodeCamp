import { IAnalyserNode, IAudioNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';

export type TAnalyserNodeRendererFactory = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>() => IAudioNodeRenderer<
    T,
    IAnalyserNode<T>
>;
