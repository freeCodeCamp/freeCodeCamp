import { isOwnedByContext } from '../helpers/is-owned-by-context';
import { IDelayNode, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TDelayNodeRendererFactoryFactory, TNativeDelayNode, TNativeOfflineAudioContext } from '../types';

export const createDelayNodeRendererFactory: TDelayNodeRendererFactoryFactory = (
    connectAudioParam,
    createNativeDelayNode,
    getNativeAudioNode,
    renderAutomation,
    renderInputsOfAudioNode
) => {
    return <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>(maxDelayTime: number) => {
        const renderedNativeDelayNodes = new WeakMap<TNativeOfflineAudioContext, TNativeDelayNode>();

        const createDelayNode = async (proxy: IDelayNode<T>, nativeOfflineAudioContext: TNativeOfflineAudioContext) => {
            let nativeDelayNode = getNativeAudioNode<T, TNativeDelayNode>(proxy);

            // If the initially used nativeDelayNode was not constructed on the same OfflineAudioContext it needs to be created again.
            const nativeDelayNodeIsOwnedByContext = isOwnedByContext(nativeDelayNode, nativeOfflineAudioContext);

            if (!nativeDelayNodeIsOwnedByContext) {
                const options = {
                    channelCount: nativeDelayNode.channelCount,
                    channelCountMode: nativeDelayNode.channelCountMode,
                    channelInterpretation: nativeDelayNode.channelInterpretation,
                    delayTime: nativeDelayNode.delayTime.value,
                    maxDelayTime
                };

                nativeDelayNode = createNativeDelayNode(nativeOfflineAudioContext, options);
            }

            renderedNativeDelayNodes.set(nativeOfflineAudioContext, nativeDelayNode);

            if (!nativeDelayNodeIsOwnedByContext) {
                await renderAutomation(nativeOfflineAudioContext, proxy.delayTime, nativeDelayNode.delayTime);
            } else {
                await connectAudioParam(nativeOfflineAudioContext, proxy.delayTime, nativeDelayNode.delayTime);
            }

            await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeDelayNode);

            return nativeDelayNode;
        };

        return {
            render(proxy: IDelayNode<T>, nativeOfflineAudioContext: TNativeOfflineAudioContext): Promise<TNativeDelayNode> {
                const renderedNativeDelayNode = renderedNativeDelayNodes.get(nativeOfflineAudioContext);

                if (renderedNativeDelayNode !== undefined) {
                    return Promise.resolve(renderedNativeDelayNode);
                }

                return createDelayNode(proxy, nativeOfflineAudioContext);
            }
        };
    };
};
