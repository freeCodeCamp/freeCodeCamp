import { assignNativeAudioNodeOptions } from '../helpers/assign-native-audio-node-options';
import { TNativeIIRFilterNodeFactoryFactory } from '../types';

export const createNativeIIRFilterNodeFactory: TNativeIIRFilterNodeFactoryFactory = (createNativeIIRFilterNodeFaker) => {
    return (nativeContext, baseLatency, options) => {
        // Bug #9: Safari does not support IIRFilterNodes.
        if (nativeContext.createIIRFilter === undefined) {
            return createNativeIIRFilterNodeFaker(nativeContext, baseLatency, options);
        }

        // @todo TypeScript defines the parameters of createIIRFilter() as arrays of numbers.
        const nativeIIRFilterNode = nativeContext.createIIRFilter(<number[]>options.feedforward, <number[]>options.feedback);

        assignNativeAudioNodeOptions(nativeIIRFilterNode, options);

        return nativeIIRFilterNode;
    };
};
