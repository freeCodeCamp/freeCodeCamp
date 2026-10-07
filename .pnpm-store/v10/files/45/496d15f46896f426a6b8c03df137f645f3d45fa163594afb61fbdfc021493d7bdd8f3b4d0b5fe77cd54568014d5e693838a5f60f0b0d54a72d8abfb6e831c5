import { TConnectedNativeAudioBufferSourceNodeFactory } from './connected-native-audio-buffer-source-node-factory';
import { TInvalidStateErrorFactory } from './invalid-state-error-factory';
import { TIsDCCurveFunction } from './is-dc-curve-function';
import { TMonitorConnectionsFunction } from './monitor-connections-function';
import { TNativeAudioContextConstructor } from './native-audio-context-constructor';
import { TNativeWaveShaperNodeFactory } from './native-wave-shaper-node-factory';
import { TNativeWaveShaperNodeFakerFactory } from './native-wave-shaper-node-faker-factory';
import { TOverwriteAccessorsFunction } from './overwrite-accessors-function';

export type TNativeWaveShaperNodeFactoryFactory = (
    createConnectedNativeAudioBufferSourceNode: TConnectedNativeAudioBufferSourceNodeFactory,
    createInvalidStateError: TInvalidStateErrorFactory,
    createNativeWaveShaperNodeFaker: TNativeWaveShaperNodeFakerFactory,
    isDCCurve: TIsDCCurveFunction,
    monitorConnections: TMonitorConnectionsFunction,
    nativeAudioContextConstructor: null | TNativeAudioContextConstructor,
    overwriteAccessors: TOverwriteAccessorsFunction
) => TNativeWaveShaperNodeFactory;
