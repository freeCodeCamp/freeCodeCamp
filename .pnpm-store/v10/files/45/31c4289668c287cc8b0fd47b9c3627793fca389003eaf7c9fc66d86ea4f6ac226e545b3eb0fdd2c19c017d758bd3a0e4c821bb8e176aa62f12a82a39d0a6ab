import { TConnectAudioParamFunction } from './connect-audio-param-function';
import { TGetNativeAudioNodeFunction } from './get-native-audio-node-function';
import { TNativeOscillatorNodeFactory } from './native-oscillator-node-factory';
import { TOscillatorNodeRendererFactory } from './oscillator-node-renderer-factory';
import { TRenderAutomationFunction } from './render-automation-function';
import { TRenderInputsOfAudioNodeFunction } from './render-inputs-of-audio-node-function';

export type TOscillatorNodeRendererFactoryFactory = (
    connectAudioParam: TConnectAudioParamFunction,
    createNativeOscillatorNode: TNativeOscillatorNodeFactory,
    getNativeAudioNode: TGetNativeAudioNodeFunction,
    renderAutomation: TRenderAutomationFunction,
    renderInputsOfAudioNode: TRenderInputsOfAudioNodeFunction
) => TOscillatorNodeRendererFactory;
