import { isOwnedByContext } from '../helpers/is-owned-by-context';
import { IMinimalOfflineAudioContext, IOfflineAudioContext, IOscillatorNode, IPeriodicWave } from '../interfaces';
import { TNativeOfflineAudioContext, TNativeOscillatorNode, TOscillatorNodeRendererFactoryFactory } from '../types';

export const createOscillatorNodeRendererFactory: TOscillatorNodeRendererFactoryFactory = (
    connectAudioParam,
    createNativeOscillatorNode,
    getNativeAudioNode,
    renderAutomation,
    renderInputsOfAudioNode
) => {
    return <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>() => {
        const renderedNativeOscillatorNodes = new WeakMap<TNativeOfflineAudioContext, TNativeOscillatorNode>();

        let periodicWave: null | IPeriodicWave = null;
        let start: null | number = null;
        let stop: null | number = null;

        const createOscillatorNode = async (proxy: IOscillatorNode<T>, nativeOfflineAudioContext: TNativeOfflineAudioContext) => {
            let nativeOscillatorNode = getNativeAudioNode<T, TNativeOscillatorNode>(proxy);

            // If the initially used nativeOscillatorNode was not constructed on the same OfflineAudioContext it needs to be created again.
            const nativeOscillatorNodeIsOwnedByContext = isOwnedByContext(nativeOscillatorNode, nativeOfflineAudioContext);

            if (!nativeOscillatorNodeIsOwnedByContext) {
                const options = {
                    channelCount: nativeOscillatorNode.channelCount,
                    channelCountMode: nativeOscillatorNode.channelCountMode,
                    channelInterpretation: nativeOscillatorNode.channelInterpretation,
                    detune: nativeOscillatorNode.detune.value,
                    frequency: nativeOscillatorNode.frequency.value,
                    periodicWave: periodicWave === null ? undefined : periodicWave,
                    type: nativeOscillatorNode.type
                };

                nativeOscillatorNode = createNativeOscillatorNode(nativeOfflineAudioContext, options);

                if (start !== null) {
                    nativeOscillatorNode.start(start);
                }

                if (stop !== null) {
                    nativeOscillatorNode.stop(stop);
                }
            }

            renderedNativeOscillatorNodes.set(nativeOfflineAudioContext, nativeOscillatorNode);

            if (!nativeOscillatorNodeIsOwnedByContext) {
                await renderAutomation(nativeOfflineAudioContext, proxy.detune, nativeOscillatorNode.detune);
                await renderAutomation(nativeOfflineAudioContext, proxy.frequency, nativeOscillatorNode.frequency);
            } else {
                await connectAudioParam(nativeOfflineAudioContext, proxy.detune, nativeOscillatorNode.detune);
                await connectAudioParam(nativeOfflineAudioContext, proxy.frequency, nativeOscillatorNode.frequency);
            }

            await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeOscillatorNode);

            return nativeOscillatorNode;
        };

        return {
            set periodicWave(value: null | IPeriodicWave) {
                periodicWave = value;
            },
            set start(value: number) {
                start = value;
            },
            set stop(value: number) {
                stop = value;
            },
            render(proxy: IOscillatorNode<T>, nativeOfflineAudioContext: TNativeOfflineAudioContext): Promise<TNativeOscillatorNode> {
                const renderedNativeOscillatorNode = renderedNativeOscillatorNodes.get(nativeOfflineAudioContext);

                if (renderedNativeOscillatorNode !== undefined) {
                    return Promise.resolve(renderedNativeOscillatorNode);
                }

                return createOscillatorNode(proxy, nativeOfflineAudioContext);
            }
        };
    };
};
