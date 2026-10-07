import { TConnectAudioParamFunction } from './connect-audio-param-function';
import { TGetNativeAudioNodeFunction } from './get-native-audio-node-function';
import { TNativeStereoPannerNodeFactory } from './native-stereo-panner-node-factory';
import { TRenderAutomationFunction } from './render-automation-function';
import { TRenderInputsOfAudioNodeFunction } from './render-inputs-of-audio-node-function';
import { TStereoPannerNodeRendererFactory } from './stereo-panner-node-renderer-factory';

export type TStereoPannerNodeRendererFactoryFactory = (
    connectAudioParam: TConnectAudioParamFunction,
    createNativeStereoPannerNode: TNativeStereoPannerNodeFactory,
    getNativeAudioNode: TGetNativeAudioNodeFunction,
    renderAutomation: TRenderAutomationFunction,
    renderInputsOfAudioNode: TRenderInputsOfAudioNodeFunction
) => TStereoPannerNodeRendererFactory;
