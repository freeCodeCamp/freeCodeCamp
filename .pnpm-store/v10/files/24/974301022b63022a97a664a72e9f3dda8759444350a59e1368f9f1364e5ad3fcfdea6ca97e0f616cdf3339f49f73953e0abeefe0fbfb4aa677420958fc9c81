import { TBiquadFilterNodeRendererFactory } from './biquad-filter-node-renderer-factory';
import { TConnectAudioParamFunction } from './connect-audio-param-function';
import { TGetNativeAudioNodeFunction } from './get-native-audio-node-function';
import { TNativeBiquadFilterNodeFactory } from './native-biquad-filter-node-factory';
import { TRenderAutomationFunction } from './render-automation-function';
import { TRenderInputsOfAudioNodeFunction } from './render-inputs-of-audio-node-function';

export type TBiquadFilterNodeRendererFactoryFactory = (
    connectAudioParam: TConnectAudioParamFunction,
    createNativeBiquadFilterNode: TNativeBiquadFilterNodeFactory,
    getNativeAudioNode: TGetNativeAudioNodeFunction,
    renderAutomation: TRenderAutomationFunction,
    renderInputsOfAudioNode: TRenderInputsOfAudioNodeFunction
) => TBiquadFilterNodeRendererFactory;
