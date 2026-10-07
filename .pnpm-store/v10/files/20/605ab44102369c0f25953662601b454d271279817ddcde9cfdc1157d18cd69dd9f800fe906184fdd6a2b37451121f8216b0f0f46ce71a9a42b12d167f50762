import { TAudioNodeConstructor } from './audio-node-constructor';
import { TAudioParamFactory } from './audio-param-factory';
import { TDelayNodeConstructor } from './delay-node-constructor';
import { TDelayNodeRendererFactory } from './delay-node-renderer-factory';
import { TGetNativeContextFunction } from './get-native-context-function';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function';
import { TNativeDelayNodeFactory } from './native-delay-node-factory';
import { TSetAudioNodeTailTimeFunction } from './set-audio-node-tail-time-function';

export type TDelayNodeConstructorFactory = (
    audioNodeConstructor: TAudioNodeConstructor,
    createAudioParam: TAudioParamFactory,
    createDelayNodeRenderer: TDelayNodeRendererFactory,
    createNativeDelayNode: TNativeDelayNodeFactory,
    getNativeContext: TGetNativeContextFunction,
    isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction,
    setAudioNodeTailTime: TSetAudioNodeTailTimeFunction
) => TDelayNodeConstructor;
