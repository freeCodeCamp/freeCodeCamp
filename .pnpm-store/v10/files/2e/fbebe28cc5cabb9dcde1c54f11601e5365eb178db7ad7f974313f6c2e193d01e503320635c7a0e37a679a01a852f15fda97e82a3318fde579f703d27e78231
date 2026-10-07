import { TAudioWorkletNodeRendererFactory } from './audio-worklet-node-renderer-factory';
import { TConnectAudioParamFunction } from './connect-audio-param-function';
import { TConnectMultipleOutputsFunction } from './connect-multiple-outputs-function';
import { TDeleteUnrenderedAudioWorkletNodeFunction } from './delete-unrendered-audio-worklet-node-function';
import { TDisconnectMultipleOutputsFunction } from './disconnect-multiple-outputs-function';
import { TExposeCurrentFrameAndCurrentTimeFunction } from './expose-current-frame-and-current-time-function';
import { TGetNativeAudioNodeFunction } from './get-native-audio-node-function';
import { TNativeAudioBufferSourceNodeFactory } from './native-audio-buffer-source-node-factory';
import { TNativeAudioWorkletNodeConstructor } from './native-audio-worklet-node-constructor';
import { TNativeChannelMergerNodeFactory } from './native-channel-merger-node-factory';
import { TNativeChannelSplitterNodeFactory } from './native-channel-splitter-node-factory';
import { TNativeConstantSourceNodeFactory } from './native-constant-source-node-factory';
import { TNativeGainNodeFactory } from './native-gain-node-factory';
import { TNativeOfflineAudioContextConstructor } from './native-offline-audio-context-constructor';
import { TRenderAutomationFunction } from './render-automation-function';
import { TRenderInputsOfAudioNodeFunction } from './render-inputs-of-audio-node-function';
import { TRenderNativeOfflineAudioContextFunction } from './render-native-offline-audio-context-function';

export type TAudioWorkletNodeRendererFactoryFactory = (
    connectAudioParam: TConnectAudioParamFunction,
    connectMultipleOutputs: TConnectMultipleOutputsFunction,
    createNativeAudioBufferSourceNode: TNativeAudioBufferSourceNodeFactory,
    createNativeChannelMergerNode: TNativeChannelMergerNodeFactory,
    createNativeChannelSplitterNode: TNativeChannelSplitterNodeFactory,
    createNativeConstantSourceNode: TNativeConstantSourceNodeFactory,
    createNativeGainNode: TNativeGainNodeFactory,
    deleteUnrenderedAudioWorkletNode: TDeleteUnrenderedAudioWorkletNodeFunction,
    disconnectMultipleOutputs: TDisconnectMultipleOutputsFunction,
    exposeCurrentFrameAndCurrentTime: TExposeCurrentFrameAndCurrentTimeFunction,
    getNativeAudioNode: TGetNativeAudioNodeFunction,
    nativeAudioWorkletNodeConstructor: null | TNativeAudioWorkletNodeConstructor,
    nativeOfflineAudioContextConstructor: null | TNativeOfflineAudioContextConstructor,
    renderAutomation: TRenderAutomationFunction,
    renderInputsOfAudioNode: TRenderInputsOfAudioNodeFunction,
    renderNativeOfflineAudioContext: TRenderNativeOfflineAudioContextFunction
) => TAudioWorkletNodeRendererFactory;
