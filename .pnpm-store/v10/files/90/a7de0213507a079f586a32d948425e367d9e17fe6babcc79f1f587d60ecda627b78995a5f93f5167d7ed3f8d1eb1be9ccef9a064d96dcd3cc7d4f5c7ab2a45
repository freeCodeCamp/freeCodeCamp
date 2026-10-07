import { IAudioDestinationNode, IAudioNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TRenderInputsOfAudioNodeFunction } from './render-inputs-of-audio-node-function';

export type TAudioDestinationNodeRendererFactory = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>(
    renderInputsOfAudioNode: TRenderInputsOfAudioNodeFunction
) => IAudioNodeRenderer<T, IAudioDestinationNode<T>>;
