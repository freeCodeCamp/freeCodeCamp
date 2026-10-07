import { isNativeAudioNode } from '../guards/native-audio-node';
export const createConnectMultipleOutputs = (createIndexSizeError) => {
    return (outputAudioNodes, destination, output = 0, input = 0) => {
        const outputAudioNode = outputAudioNodes[output];
        if (outputAudioNode === undefined) {
            throw createIndexSizeError();
        }
        if (isNativeAudioNode(destination)) {
            return outputAudioNode.connect(destination, 0, input);
        }
        return outputAudioNode.connect(destination, 0);
    };
};
//# sourceMappingURL=connect-multiple-outputs.js.map