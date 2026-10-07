import { TAudioNodeConstructor } from './audio-node-constructor';
import { TGetNativeContextFunction } from './get-native-context-function';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function';
import { TMediaStreamAudioDestinationNodeConstructor } from './media-stream-audio-destination-node-constructor';
import { TNativeMediaStreamAudioDestinationNodeFactory } from './native-media-stream-audio-destination-node-factory';

export type TMediaStreamAudioDestinationNodeConstructorFactory = (
    audioNodeConstructor: TAudioNodeConstructor,
    createNativeMediaStreamAudioDestinationNode: TNativeMediaStreamAudioDestinationNodeFactory,
    getNativeContext: TGetNativeContextFunction,
    isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction
) => TMediaStreamAudioDestinationNodeConstructor;
