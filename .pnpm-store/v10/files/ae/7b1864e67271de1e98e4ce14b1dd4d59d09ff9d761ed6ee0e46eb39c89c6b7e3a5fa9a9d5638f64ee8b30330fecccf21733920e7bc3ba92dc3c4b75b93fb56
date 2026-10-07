import { TAudioNodeConstructor } from './audio-node-constructor';
import { TAudioParamFactory } from './audio-param-factory';
import { TGainNodeConstructor } from './gain-node-constructor';
import { TGainNodeRendererFactory } from './gain-node-renderer-factory';
import { TGetNativeContextFunction } from './get-native-context-function';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function';
import { TNativeGainNodeFactory } from './native-gain-node-factory';

export type TGainNodeConstructorFactory = (
    audioNodeConstructor: TAudioNodeConstructor,
    createAudioParam: TAudioParamFactory,
    createGainNodeRenderer: TGainNodeRendererFactory,
    createNativeGainNode: TNativeGainNodeFactory,
    getNativeContext: TGetNativeContextFunction,
    isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction
) => TGainNodeConstructor;
