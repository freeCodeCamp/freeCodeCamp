import { isNativeAudioNodeFaker } from '../guards/native-audio-node-faker';
import { INativeAudioNodeFaker } from '../interfaces';
import { TConnectNativeAudioNodeToNativeAudioNodeFunction, TNativeAudioNode } from '../types';

export const connectNativeAudioNodeToNativeAudioNode: TConnectNativeAudioNodeToNativeAudioNodeFunction = (
    nativeSourceAudioNode: INativeAudioNodeFaker | TNativeAudioNode,
    nativeDestinationAudioNode: INativeAudioNodeFaker | TNativeAudioNode,
    output: number,
    input: number
): [TNativeAudioNode, number, number] => {
    if (isNativeAudioNodeFaker(nativeDestinationAudioNode)) {
        const fakeNativeDestinationAudioNode = nativeDestinationAudioNode.inputs[input];

        nativeSourceAudioNode.connect(fakeNativeDestinationAudioNode, output, 0);

        return [fakeNativeDestinationAudioNode, output, 0];
    }

    nativeSourceAudioNode.connect(nativeDestinationAudioNode, output, input);

    return [nativeDestinationAudioNode, output, input];
};
