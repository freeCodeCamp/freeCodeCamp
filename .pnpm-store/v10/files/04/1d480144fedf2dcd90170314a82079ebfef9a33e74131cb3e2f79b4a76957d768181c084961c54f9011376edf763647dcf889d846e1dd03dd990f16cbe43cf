import { isOwnedByContext } from '../helpers/is-owned-by-context';
import { IConstantSourceNode, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TConstantSourceNodeRendererFactoryFactory, TNativeConstantSourceNode, TNativeOfflineAudioContext } from '../types';

export const createConstantSourceNodeRendererFactory: TConstantSourceNodeRendererFactoryFactory = (
    connectAudioParam,
    createNativeConstantSourceNode,
    getNativeAudioNode,
    renderAutomation,
    renderInputsOfAudioNode
) => {
    return <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>() => {
        const renderedNativeConstantSourceNodes = new WeakMap<TNativeOfflineAudioContext, TNativeConstantSourceNode>();

        let start: null | number = null;
        let stop: null | number = null;

        const createConstantSourceNode = async (proxy: IConstantSourceNode<T>, nativeOfflineAudioContext: TNativeOfflineAudioContext) => {
            let nativeConstantSourceNode = getNativeAudioNode<T, TNativeConstantSourceNode>(proxy);

            /*
             * If the initially used nativeConstantSourceNode was not constructed on the same OfflineAudioContext it needs to be created
             * again.
             */
            const nativeConstantSourceNodeIsOwnedByContext = isOwnedByContext(nativeConstantSourceNode, nativeOfflineAudioContext);

            if (!nativeConstantSourceNodeIsOwnedByContext) {
                const options = {
                    channelCount: nativeConstantSourceNode.channelCount,
                    channelCountMode: nativeConstantSourceNode.channelCountMode,
                    channelInterpretation: nativeConstantSourceNode.channelInterpretation,
                    offset: nativeConstantSourceNode.offset.value
                };

                nativeConstantSourceNode = createNativeConstantSourceNode(nativeOfflineAudioContext, options);

                if (start !== null) {
                    nativeConstantSourceNode.start(start);
                }

                if (stop !== null) {
                    nativeConstantSourceNode.stop(stop);
                }
            }

            renderedNativeConstantSourceNodes.set(nativeOfflineAudioContext, nativeConstantSourceNode);

            if (!nativeConstantSourceNodeIsOwnedByContext) {
                await renderAutomation(nativeOfflineAudioContext, proxy.offset, nativeConstantSourceNode.offset);
            } else {
                await connectAudioParam(nativeOfflineAudioContext, proxy.offset, nativeConstantSourceNode.offset);
            }

            await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeConstantSourceNode);

            return nativeConstantSourceNode;
        };

        return {
            set start(value: number) {
                start = value;
            },
            set stop(value: number) {
                stop = value;
            },
            render(
                proxy: IConstantSourceNode<T>,
                nativeOfflineAudioContext: TNativeOfflineAudioContext
            ): Promise<TNativeConstantSourceNode> {
                const renderedNativeConstantSourceNode = renderedNativeConstantSourceNodes.get(nativeOfflineAudioContext);

                if (renderedNativeConstantSourceNode !== undefined) {
                    return Promise.resolve(renderedNativeConstantSourceNode);
                }

                return createConstantSourceNode(proxy, nativeOfflineAudioContext);
            }
        };
    };
};
