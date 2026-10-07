import { TConnectAudioParamFunction } from './connect-audio-param-function';
import { TGainNodeRendererFactory } from './gain-node-renderer-factory';
import { TGetNativeAudioNodeFunction } from './get-native-audio-node-function';
import { TNativeGainNodeFactory } from './native-gain-node-factory';
import { TRenderAutomationFunction } from './render-automation-function';
import { TRenderInputsOfAudioNodeFunction } from './render-inputs-of-audio-node-function';

export type TGainNodeRendererFactoryFactory = (
    connectAudioParam: TConnectAudioParamFunction,
    createNativeGainNode: TNativeGainNodeFactory,
    getNativeAudioNode: TGetNativeAudioNodeFunction,
    renderAutomation: TRenderAutomationFunction,
    renderInputsOfAudioNode: TRenderInputsOfAudioNodeFunction
) => TGainNodeRendererFactory;
