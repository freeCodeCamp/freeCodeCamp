import { assignNativeAudioNodeOptions } from '../helpers/assign-native-audio-node-options';
export const createNativeMediaStreamAudioDestinationNode = (nativeAudioContext, options) => {
    const nativeMediaStreamAudioDestinationNode = nativeAudioContext.createMediaStreamDestination();
    assignNativeAudioNodeOptions(nativeMediaStreamAudioDestinationNode, options);
    // Bug #174: Safari does expose a wrong numberOfOutputs.
    if (nativeMediaStreamAudioDestinationNode.numberOfOutputs === 1) {
        Object.defineProperty(nativeMediaStreamAudioDestinationNode, 'numberOfOutputs', { get: () => 0 });
    }
    return nativeMediaStreamAudioDestinationNode;
};
//# sourceMappingURL=native-media-stream-audio-destination-node.js.map