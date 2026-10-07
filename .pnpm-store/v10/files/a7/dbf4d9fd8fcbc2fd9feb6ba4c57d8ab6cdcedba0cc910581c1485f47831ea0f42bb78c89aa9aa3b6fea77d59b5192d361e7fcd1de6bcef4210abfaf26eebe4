import { isAudioNodeOutputConnection } from '../guards/audio-node-output-connection';
import { TIncrementCycleCounterFactoryFactory } from '../types';

export const createIncrementCycleCounterFactory: TIncrementCycleCounterFactoryFactory = (
    cycleCounters,
    disconnectNativeAudioNodeFromNativeAudioNode,
    getAudioNodeConnections,
    getNativeAudioNode,
    getNativeAudioParam,
    isActiveAudioNode
) => {
    return (isOffline) => {
        return (audioNode, count) => {
            const cycleCounter = cycleCounters.get(audioNode);

            if (cycleCounter === undefined) {
                if (!isOffline && isActiveAudioNode(audioNode)) {
                    const nativeSourceAudioNode = getNativeAudioNode(audioNode);
                    const { outputs } = getAudioNodeConnections(audioNode);

                    for (const output of outputs) {
                        if (isAudioNodeOutputConnection(output)) {
                            const nativeDestinationAudioNode = getNativeAudioNode(output[0]);

                            disconnectNativeAudioNodeFromNativeAudioNode(
                                nativeSourceAudioNode,
                                nativeDestinationAudioNode,
                                output[1],
                                output[2]
                            );
                        } else {
                            const nativeDestinationAudioParam = getNativeAudioParam(output[0]);

                            nativeSourceAudioNode.disconnect(nativeDestinationAudioParam, output[1]);
                        }
                    }
                }

                cycleCounters.set(audioNode, count);
            } else {
                cycleCounters.set(audioNode, cycleCounter + count);
            }
        };
    };
};
