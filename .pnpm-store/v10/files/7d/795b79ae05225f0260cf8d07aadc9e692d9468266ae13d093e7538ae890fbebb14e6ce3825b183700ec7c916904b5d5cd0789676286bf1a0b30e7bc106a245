import { isNativeAudioNodeFaker } from '../guards/native-audio-node-faker';
export const disconnectNativeAudioNodeFromNativeAudioNode = (nativeSourceAudioNode, nativeDestinationAudioNode, output, input) => {
    if (isNativeAudioNodeFaker(nativeDestinationAudioNode)) {
        nativeSourceAudioNode.disconnect(nativeDestinationAudioNode.inputs[input], output, 0);
    }
    else {
        nativeSourceAudioNode.disconnect(nativeDestinationAudioNode, output, input);
    }
};
//# sourceMappingURL=disconnect-native-audio-node-from-native-audio-node.js.map