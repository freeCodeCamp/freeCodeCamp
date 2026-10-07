import { assignNativeAudioNodeOption } from '../helpers/assign-native-audio-node-option';
import { assignNativeAudioNodeOptions } from '../helpers/assign-native-audio-node-options';
import { testAnalyserNodeGetFloatTimeDomainDataMethodSupport } from '../helpers/test-analyser-node-get-float-time-domain-data-method-support';
import { wrapAnalyserNodeGetFloatTimeDomainDataMethod } from '../helpers/wrap-analyser-node-get-float-time-domain-data-method';
import { TNativeAnalyserNodeFactoryFactory } from '../types';

export const createNativeAnalyserNodeFactory: TNativeAnalyserNodeFactoryFactory = (cacheTestResult, createIndexSizeError) => {
    return (nativeContext, options) => {
        const nativeAnalyserNode = nativeContext.createAnalyser();

        // Bug #37: Firefox does not create an AnalyserNode with the default properties.
        assignNativeAudioNodeOptions(nativeAnalyserNode, options);

        // Bug #118: Safari does not throw an error if maxDecibels is not more than minDecibels.
        if (!(options.maxDecibels > options.minDecibels)) {
            throw createIndexSizeError();
        }

        assignNativeAudioNodeOption(nativeAnalyserNode, options, 'fftSize');
        assignNativeAudioNodeOption(nativeAnalyserNode, options, 'maxDecibels');
        assignNativeAudioNodeOption(nativeAnalyserNode, options, 'minDecibels');
        assignNativeAudioNodeOption(nativeAnalyserNode, options, 'smoothingTimeConstant');

        // Bug #36: Safari does not support getFloatTimeDomainData() yet.
        if (
            !cacheTestResult(testAnalyserNodeGetFloatTimeDomainDataMethodSupport, () =>
                testAnalyserNodeGetFloatTimeDomainDataMethodSupport(nativeAnalyserNode)
            )
        ) {
            wrapAnalyserNodeGetFloatTimeDomainDataMethod(nativeAnalyserNode);
        }

        return nativeAnalyserNode;
    };
};
