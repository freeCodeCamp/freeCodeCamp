import { TConnectNativeAudioNodeToNativeAudioNodeFunction } from './connect-native-audio-node-to-native-audio-node-function';
import { TCycleCounters } from './cycle-counters';
import { TDecrementCycleCounterFunction } from './decrement-cycle-counter-function';
import { TGetAudioNodeConnectionsFunction } from './get-audio-node-connections-function';
import { TGetNativeAudioNodeFunction } from './get-native-audio-node-function';
import { TGetNativeAudioParamFunction } from './get-native-audio-param-function';
import { TGetNativeContextFunction } from './get-native-context-function';
import { TIsActiveAudioNodeFunction } from './is-active-audio-node-function';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function';

export type TDecrementCycleCounterFactory = (
    connectNativeAudioNodeToNativeAudioNode: TConnectNativeAudioNodeToNativeAudioNodeFunction,
    cycleCounters: TCycleCounters,
    getAudioNodeConnections: TGetAudioNodeConnectionsFunction,
    getNativeAudioNode: TGetNativeAudioNodeFunction,
    getNativeAudioParam: TGetNativeAudioParamFunction,
    getNativeContext: TGetNativeContextFunction,
    isActiveAudioNode: TIsActiveAudioNodeFunction,
    isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction
) => TDecrementCycleCounterFunction;
