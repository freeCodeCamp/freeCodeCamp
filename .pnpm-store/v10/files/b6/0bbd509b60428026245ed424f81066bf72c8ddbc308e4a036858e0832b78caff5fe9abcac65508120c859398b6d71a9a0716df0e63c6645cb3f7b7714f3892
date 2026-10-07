import { IAudioNode, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TNativeAudioNode } from './native-audio-node';
import { TNativeOfflineAudioContext } from './native-offline-audio-context';

export type TRenderInputsOfAudioNodeFunction = <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>(
    audioNode: IAudioNode<T>,
    nativeOfflineAudioContext: TNativeOfflineAudioContext,
    nativeAudioNode: TNativeAudioNode
) => Promise<void>;
