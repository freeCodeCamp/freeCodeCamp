import { IAudioNode, IAudioNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TContext } from './context';
import { TNativeAudioNode } from './native-audio-node';

export type TAudioNodeConstructor = new <T extends TContext, EventMap extends Record<string, Event> = {}>(
    context: T,
    isActive: boolean,
    nativeAudioNode: TNativeAudioNode,
    audioNodeRenderer: T extends IMinimalOfflineAudioContext | IOfflineAudioContext ? IAudioNodeRenderer<T, IAudioNode<T, EventMap>> : null
) => IAudioNode<T, EventMap>;
