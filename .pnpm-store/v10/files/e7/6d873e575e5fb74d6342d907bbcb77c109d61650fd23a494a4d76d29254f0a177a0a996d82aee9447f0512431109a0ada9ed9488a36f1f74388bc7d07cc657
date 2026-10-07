import { isAudioNodeOutputConnection } from '../guards/audio-node-output-connection';
import { TDecrementCycleCounterFactory } from '../types';

export const createDecrementCycleCounter: TDecrementCycleCounterFactory = (
    connectNativeAudioNodeToNativeAudioNode,
    cycleCounters,
    getAudioNodeConnections,
    getNativeAudioNode,
    getNativeAudioParam,
    getNativeContext,
    isActiveAudioNode,
    isNativeOfflineAudioContext
) => {
    return (audioNode, count) => {
        const cycleCounter = cycleCounters.get(audioNode);

        if (cycleCounter === undefined) {
            throw new Error('Missing the expected cycle count.');
        }

        const nativeContext = getNativeContext(audioNode.context);
        const isOffline = isNativeOfflineAudioContext(nativeContext);

        if (cycleCounter === count) {
            cycleCounters.delete(audioNode);

            if (!isOffline && isActiveAudioNode(audioNode)) {
                const nativeSourceAudioNode = getNativeAudioNode(audioNode);
                const { outputs } = getAudioNodeConnections(audioNode);

                for (const output of outputs) {
                    if (isAudioNodeOutputConnection(output)) {
                        const nativeDestinationAudioNode = getNativeAudioNode(output[0]);

                        connectNativeAudioNodeToNativeAudioNode(nativeSourceAudioNode, nativeDestinationAudioNode, output[1], output[2]);
                    } else {
                        const nativeDestinationAudioParam = getNativeAudioParam(output[0]);

                        nativeSourceAudioNode.connect(nativeDestinationAudioParam, output[1]);
                    }
                }
            }
        } else {
            cycleCounters.set(audioNode, cycleCounter - count);
        }
    };
};
