import { TAudioBufferSourceNodeRendererFactory } from './audio-buffer-source-node-renderer-factory';
import { TConnectAudioParamFunction } from './connect-audio-param-function';
import { TGetNativeAudioNodeFunction } from './get-native-audio-node-function';
import { TNativeAudioBufferSourceNodeFactory } from './native-audio-buffer-source-node-factory';
import { TRenderAutomationFunction } from './render-automation-function';
import { TRenderInputsOfAudioNodeFunction } from './render-inputs-of-audio-node-function';

export type TAudioBufferSourceNodeRendererFactoryFactory = (
    connectAudioParam: TConnectAudioParamFunction,
    createNativeAudioBufferSourceNode: TNativeAudioBufferSourceNodeFactory,
    getNativeAudioNode: TGetNativeAudioNodeFunction,
    renderAutomation: TRenderAutomationFunction,
    renderInputsOfAudioNode: TRenderInputsOfAudioNodeFunction
) => TAudioBufferSourceNodeRendererFactory;
