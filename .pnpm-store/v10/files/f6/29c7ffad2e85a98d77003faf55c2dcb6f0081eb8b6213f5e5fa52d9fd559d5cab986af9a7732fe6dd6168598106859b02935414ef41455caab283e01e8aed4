import { assignNativeAudioNodeOption } from '../helpers/assign-native-audio-node-option';
import { assignNativeAudioNodeOptions } from '../helpers/assign-native-audio-node-options';
import { TNativeWaveShaperNodeFactoryFactory } from '../types';

export const createNativeWaveShaperNodeFactory: TNativeWaveShaperNodeFactoryFactory = (
    createConnectedNativeAudioBufferSourceNode,
    createInvalidStateError,
    createNativeWaveShaperNodeFaker,
    isDCCurve,
    monitorConnections,
    nativeAudioContextConstructor,
    overwriteAccessors
) => {
    return (nativeContext, options) => {
        const nativeWaveShaperNode = nativeContext.createWaveShaper();

        /*
         * Bug #119: Safari does not correctly map the values.
         * @todo Unfortunately there is no way to test for this behavior in a synchronous fashion which is why testing for the existence of
         * the webkitAudioContext is used as a workaround here. Testing for the automationRate property is necessary because this workaround
         * isn't necessary anymore since v14.0.2 of Safari.
         */
        if (
            nativeAudioContextConstructor !== null &&
            nativeAudioContextConstructor.name === 'webkitAudioContext' &&
            nativeContext.createGain().gain.automationRate === undefined
        ) {
            return createNativeWaveShaperNodeFaker(nativeContext, options);
        }

        assignNativeAudioNodeOptions(nativeWaveShaperNode, options);

        const curve = options.curve === null || options.curve instanceof Float32Array ? options.curve : new Float32Array(options.curve);

        // Bug #104: Chrome and Edge will throw an InvalidAccessError when the curve has less than two samples.
        if (curve !== null && curve.length < 2) {
            throw createInvalidStateError();
        }

        // Only values of type Float32Array can be assigned to the curve property.
        assignNativeAudioNodeOption(nativeWaveShaperNode, { curve }, 'curve');
        assignNativeAudioNodeOption(nativeWaveShaperNode, options, 'oversample');

        let disconnectNativeAudioBufferSourceNode: null | (() => void) = null;
        let isConnected = false;

        overwriteAccessors(
            nativeWaveShaperNode,
            'curve',
            (get) => () => get.call(nativeWaveShaperNode),
            (set) => (value) => {
                set.call(nativeWaveShaperNode, value);

                if (isConnected) {
                    if (isDCCurve(value) && disconnectNativeAudioBufferSourceNode === null) {
                        disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode(
                            nativeContext,
                            nativeWaveShaperNode
                        );
                    } else if (!isDCCurve(value) && disconnectNativeAudioBufferSourceNode !== null) {
                        disconnectNativeAudioBufferSourceNode();
                        disconnectNativeAudioBufferSourceNode = null;
                    }
                }

                return value;
            }
        );

        const whenConnected = () => {
            isConnected = true;

            if (isDCCurve(nativeWaveShaperNode.curve)) {
                disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode(nativeContext, nativeWaveShaperNode);
            }
        };
        const whenDisconnected = () => {
            isConnected = false;

            if (disconnectNativeAudioBufferSourceNode !== null) {
                disconnectNativeAudioBufferSourceNode();
                disconnectNativeAudioBufferSourceNode = null;
            }
        };

        return monitorConnections(nativeWaveShaperNode, whenConnected, whenDisconnected);
    };
};
