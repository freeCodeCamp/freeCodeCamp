import { TAddUnrenderedAudioWorkletNodeFunction } from './add-unrendered-audio-worklet-node-function';
import { TAudioNodeConstructor } from './audio-node-constructor';
import { TAudioParamFactory } from './audio-param-factory';
import { TAudioWorkletNodeConstructor } from './audio-worklet-node-constructor';
import { TAudioWorkletNodeRendererFactory } from './audio-worklet-node-renderer-factory';
import { TGetAudioNodeConnectionsFunction } from './get-audio-node-connections-function';
import { TGetBackupOfflineAudioContextFunction } from './get-backup-offline-audio-context-function';
import { TGetNativeContextFunction } from './get-native-context-function';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function';
import { TNativeAudioWorkletNodeConstructor } from './native-audio-worklet-node-constructor';
import { TNativeAudioWorkletNodeFactory } from './native-audio-worklet-node-factory';
import { TSanitizeAudioWorkletNodeOptionsFunction } from './sanitize-audio-worklet-node-options-function';
import { TSetActiveAudioWorkletNodeInputsFunction } from './set-active-audio-worklet-node-inputs-function';
import { TTestAudioWorkletNodeOptionsClonabilityFunction } from './test-audio-worklet-node-options-clonability-function';
import { TWrapEventListenerFunction } from './wrap-event-listener-function';

export type TAudioWorkletNodeConstructorFactory = (
    addUnrenderedAudioWorkletNode: TAddUnrenderedAudioWorkletNodeFunction,
    audioNodeConstructor: TAudioNodeConstructor,
    createAudioParam: TAudioParamFactory,
    createAudioWorkletNodeRenderer: TAudioWorkletNodeRendererFactory,
    createNativeAudioWorkletNode: TNativeAudioWorkletNodeFactory,
    getAudioNodeConnections: TGetAudioNodeConnectionsFunction,
    getBackupOfflineAudioContext: TGetBackupOfflineAudioContextFunction,
    getNativeContext: TGetNativeContextFunction,
    isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction,
    nativeAudioWorkletNodeConstructor: null | TNativeAudioWorkletNodeConstructor,
    sanitizeAudioWorkletNodeOptions: TSanitizeAudioWorkletNodeOptionsFunction,
    setActiveAudioWorkletNodeInputs: TSetActiveAudioWorkletNodeInputsFunction,
    testAudioWorkletNodeOptionsClonability: TTestAudioWorkletNodeOptionsClonabilityFunction,
    wrapEventListener: TWrapEventListenerFunction
) => TAudioWorkletNodeConstructor;
