import { isNativeAudioNodeFaker } from '../guards/native-audio-node-faker';
import { TDisconnectNativeAudioNodeFromNativeAudioNodeFunction } from '../types';

export const disconnectNativeAudioNodeFromNativeAudioNode: TDisconnectNativeAudioNodeFromNativeAudioNodeFunction = (
    nativeSourceAudioNode,
    nativeDestinationAudioNode,
    output,
    input
) => {
    if (isNativeAudioNodeFaker(nativeDestinationAudioNode)) {
        nativeSourceAudioNode.disconnect(nativeDestinationAudioNode.inputs[input], output, 0);
    } else {
        nativeSourceAudioNode.disconnect(nativeDestinationAudioNode, output, input);
    }
};
