import { deletePassiveInputConnectionToAudioNode } from '../helpers/delete-passive-input-connection-to-audio-node';
import { setInternalStateToActive } from '../helpers/set-internal-state-to-active';
import { setInternalStateToPassiveWhenNecessary } from '../helpers/set-internal-state-to-passive-when-necessary';
import { IAudioNode } from '../interfaces';
import { TAddConnectionToAudioNodeFactory, TContext, TInternalStateEventListener } from '../types';

export const createAddConnectionToAudioNode: TAddConnectionToAudioNodeFactory = (
    addActiveInputConnectionToAudioNode,
    addPassiveInputConnectionToAudioNode,
    connectNativeAudioNodeToNativeAudioNode,
    deleteActiveInputConnectionToAudioNode,
    disconnectNativeAudioNodeFromNativeAudioNode,
    getAudioNodeConnections,
    getAudioNodeTailTime,
    getEventListenersOfAudioNode,
    getNativeAudioNode,
    insertElementInSet,
    isActiveAudioNode,
    isPartOfACycle,
    isPassiveAudioNode
) => {
    const tailTimeTimeoutIds = new WeakMap<IAudioNode<TContext>, number>();

    return (source, destination, output, input, isOffline) => {
        const { activeInputs, passiveInputs } = getAudioNodeConnections(destination);
        const { outputs } = getAudioNodeConnections(source);
        const eventListeners = getEventListenersOfAudioNode(source);

        const eventListener: TInternalStateEventListener = (isActive) => {
            const nativeDestinationAudioNode = getNativeAudioNode(destination);
            const nativeSourceAudioNode = getNativeAudioNode(source);

            if (isActive) {
                const partialConnection = deletePassiveInputConnectionToAudioNode(passiveInputs, source, output, input);

                addActiveInputConnectionToAudioNode(activeInputs, source, partialConnection, false);

                if (!isOffline && !isPartOfACycle(source)) {
                    connectNativeAudioNodeToNativeAudioNode(nativeSourceAudioNode, nativeDestinationAudioNode, output, input);
                }

                if (isPassiveAudioNode(destination)) {
                    setInternalStateToActive(destination);
                }
            } else {
                const partialConnection = deleteActiveInputConnectionToAudioNode(activeInputs, source, output, input);

                addPassiveInputConnectionToAudioNode(passiveInputs, input, partialConnection, false);

                if (!isOffline && !isPartOfACycle(source)) {
                    disconnectNativeAudioNodeFromNativeAudioNode(nativeSourceAudioNode, nativeDestinationAudioNode, output, input);
                }

                const tailTime = getAudioNodeTailTime(destination);

                if (tailTime === 0) {
                    if (isActiveAudioNode(destination)) {
                        setInternalStateToPassiveWhenNecessary(destination, activeInputs);
                    }
                } else {
                    const tailTimeTimeoutId = tailTimeTimeoutIds.get(destination);

                    if (tailTimeTimeoutId !== undefined) {
                        clearTimeout(tailTimeTimeoutId);
                    }

                    tailTimeTimeoutIds.set(
                        destination,
                        setTimeout(() => {
                            if (isActiveAudioNode(destination)) {
                                setInternalStateToPassiveWhenNecessary(destination, activeInputs);
                            }
                        }, tailTime * 1000)
                    );
                }
            }
        };

        if (
            insertElementInSet(
                outputs,
                [destination, output, input],
                (outputConnection) =>
                    outputConnection[0] === destination && outputConnection[1] === output && outputConnection[2] === input,
                true
            )
        ) {
            eventListeners.add(eventListener);

            if (isActiveAudioNode(source)) {
                addActiveInputConnectionToAudioNode(activeInputs, source, [output, input, eventListener], true);
            } else {
                addPassiveInputConnectionToAudioNode(passiveInputs, input, [source, output, eventListener], true);
            }

            return true;
        }

        return false;
    };
};
