import { isNativeAudioNode } from '../guards/native-audio-node';
import { TDisconnectMultipleOutputsFactory, TIndexSizeErrorFactory, TNativeAudioNode } from '../types';

const getOutputAudioNodeAtIndex = (
    createIndexSizeError: TIndexSizeErrorFactory,
    outputAudioNodes: TNativeAudioNode[],
    output: number
): TNativeAudioNode => {
    const outputAudioNode = outputAudioNodes[output];

    if (outputAudioNode === undefined) {
        throw createIndexSizeError();
    }

    return outputAudioNode;
};

export const createDisconnectMultipleOutputs: TDisconnectMultipleOutputsFactory = (createIndexSizeError) => {
    return (outputAudioNodes, destinationOrOutput = undefined, output = undefined, input = 0) => {
        if (destinationOrOutput === undefined) {
            return outputAudioNodes.forEach((outputAudioNode) => outputAudioNode.disconnect());
        }

        if (typeof destinationOrOutput === 'number') {
            return getOutputAudioNodeAtIndex(createIndexSizeError, outputAudioNodes, destinationOrOutput).disconnect();
        }

        if (isNativeAudioNode(destinationOrOutput)) {
            if (output === undefined) {
                return outputAudioNodes.forEach((outputAudioNode) => outputAudioNode.disconnect(destinationOrOutput));
            }

            if (input === undefined) {
                return getOutputAudioNodeAtIndex(createIndexSizeError, outputAudioNodes, output).disconnect(destinationOrOutput, 0);
            }

            return getOutputAudioNodeAtIndex(createIndexSizeError, outputAudioNodes, output).disconnect(destinationOrOutput, 0, input);
        }

        if (output === undefined) {
            return outputAudioNodes.forEach((outputAudioNode) => outputAudioNode.disconnect(destinationOrOutput));
        }

        return getOutputAudioNodeAtIndex(createIndexSizeError, outputAudioNodes, output).disconnect(destinationOrOutput, 0);
    };
};
