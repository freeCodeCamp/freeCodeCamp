import { isNativeAudioNodeFaker } from '../guards/native-audio-node-faker';
import { isOwnedByContext } from '../helpers/is-owned-by-context';
import { IMinimalOfflineAudioContext, INativePannerNodeFaker, IOfflineAudioContext, IPannerNode } from '../interfaces';
import {
    TNativeAudioBuffer,
    TNativeGainNode,
    TNativeOfflineAudioContext,
    TNativePannerNode,
    TPannerNodeRendererFactoryFactory
} from '../types';

export const createPannerNodeRendererFactory: TPannerNodeRendererFactoryFactory = (
    connectAudioParam,
    createNativeChannelMergerNode,
    createNativeConstantSourceNode,
    createNativeGainNode,
    createNativePannerNode,
    getNativeAudioNode,
    nativeOfflineAudioContextConstructor,
    renderAutomation,
    renderInputsOfAudioNode,
    renderNativeOfflineAudioContext
) => {
    return <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>() => {
        const renderedNativeAudioNodes = new WeakMap<TNativeOfflineAudioContext, TNativeGainNode | TNativePannerNode>();

        let renderedBufferPromise: null | Promise<TNativeAudioBuffer> = null;

        const createAudioNode = async (proxy: IPannerNode<T>, nativeOfflineAudioContext: TNativeOfflineAudioContext) => {
            let nativeGainNode: null | TNativeGainNode = null;
            let nativePannerNode = getNativeAudioNode<T, TNativePannerNode>(proxy);

            const commonAudioNodeOptions = {
                channelCount: nativePannerNode.channelCount,
                channelCountMode: nativePannerNode.channelCountMode,
                channelInterpretation: nativePannerNode.channelInterpretation
            };
            const commonNativePannerNodeOptions = {
                ...commonAudioNodeOptions,
                coneInnerAngle: nativePannerNode.coneInnerAngle,
                coneOuterAngle: nativePannerNode.coneOuterAngle,
                coneOuterGain: nativePannerNode.coneOuterGain,
                distanceModel: nativePannerNode.distanceModel,
                maxDistance: nativePannerNode.maxDistance,
                panningModel: nativePannerNode.panningModel,
                refDistance: nativePannerNode.refDistance,
                rolloffFactor: nativePannerNode.rolloffFactor
            };

            // If the initially used nativePannerNode was not constructed on the same OfflineAudioContext it needs to be created again.
            const nativePannerNodeIsOwnedByContext = isOwnedByContext(nativePannerNode, nativeOfflineAudioContext);

            // Bug #124: Safari does not support modifying the orientation and the position with AudioParams.
            if ('bufferSize' in nativePannerNode) {
                nativeGainNode = createNativeGainNode(nativeOfflineAudioContext, { ...commonAudioNodeOptions, gain: 1 });
            } else if (!nativePannerNodeIsOwnedByContext) {
                const options = {
                    ...commonNativePannerNodeOptions,
                    orientationX: nativePannerNode.orientationX.value,
                    orientationY: nativePannerNode.orientationY.value,
                    orientationZ: nativePannerNode.orientationZ.value,
                    positionX: nativePannerNode.positionX.value,
                    positionY: nativePannerNode.positionY.value,
                    positionZ: nativePannerNode.positionZ.value
                };

                nativePannerNode = createNativePannerNode(nativeOfflineAudioContext, options);
            }

            renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeGainNode === null ? nativePannerNode : nativeGainNode);

            if (nativeGainNode !== null) {
                if (renderedBufferPromise === null) {
                    if (nativeOfflineAudioContextConstructor === null) {
                        throw new Error('Missing the native OfflineAudioContext constructor.');
                    }

                    const partialOfflineAudioContext = new nativeOfflineAudioContextConstructor(
                        6,
                        // Bug #17: Safari does not yet expose the length.
                        proxy.context.length,
                        nativeOfflineAudioContext.sampleRate
                    );
                    const nativeChannelMergerNode = createNativeChannelMergerNode(partialOfflineAudioContext, {
                        channelCount: 1,
                        channelCountMode: 'explicit',
                        channelInterpretation: 'speakers',
                        numberOfInputs: 6
                    });
                    nativeChannelMergerNode.connect(partialOfflineAudioContext.destination);

                    renderedBufferPromise = (async () => {
                        const nativeConstantSourceNodes = await Promise.all(
                            [
                                proxy.orientationX,
                                proxy.orientationY,
                                proxy.orientationZ,
                                proxy.positionX,
                                proxy.positionY,
                                proxy.positionZ
                            ].map(async (audioParam, index) => {
                                const nativeConstantSourceNode = createNativeConstantSourceNode(partialOfflineAudioContext, {
                                    channelCount: 1,
                                    channelCountMode: 'explicit',
                                    channelInterpretation: 'discrete',
                                    offset: index === 0 ? 1 : 0
                                });

                                await renderAutomation(partialOfflineAudioContext, audioParam, nativeConstantSourceNode.offset);

                                return nativeConstantSourceNode;
                            })
                        );

                        for (let i = 0; i < 6; i += 1) {
                            nativeConstantSourceNodes[i].connect(nativeChannelMergerNode, 0, i);
                            nativeConstantSourceNodes[i].start(0);
                        }

                        return renderNativeOfflineAudioContext(partialOfflineAudioContext);
                    })();
                }

                const renderedBuffer = await renderedBufferPromise;
                const inputGainNode = createNativeGainNode(nativeOfflineAudioContext, { ...commonAudioNodeOptions, gain: 1 });

                await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, inputGainNode);

                const channelDatas: Float32Array[] = [];

                for (let i = 0; i < renderedBuffer.numberOfChannels; i += 1) {
                    channelDatas.push(renderedBuffer.getChannelData(i));
                }

                let lastOrientation = [channelDatas[0][0], channelDatas[1][0], channelDatas[2][0]];
                let lastPosition = [channelDatas[3][0], channelDatas[4][0], channelDatas[5][0]];
                let gateGainNode = createNativeGainNode(nativeOfflineAudioContext, { ...commonAudioNodeOptions, gain: 1 });
                let partialPannerNode = createNativePannerNode(nativeOfflineAudioContext, {
                    ...commonNativePannerNodeOptions,
                    orientationX: lastOrientation[0],
                    orientationY: lastOrientation[1],
                    orientationZ: lastOrientation[2],
                    positionX: lastPosition[0],
                    positionY: lastPosition[1],
                    positionZ: lastPosition[2]
                });

                inputGainNode.connect(gateGainNode).connect((<INativePannerNodeFaker>partialPannerNode).inputs[0]);
                partialPannerNode.connect(nativeGainNode);

                for (let i = 128; i < renderedBuffer.length; i += 128) {
                    const orientation: [number, number, number] = [channelDatas[0][i], channelDatas[1][i], channelDatas[2][i]];
                    const positon: [number, number, number] = [channelDatas[3][i], channelDatas[4][i], channelDatas[5][i]];

                    if (
                        orientation.some((value, index) => value !== lastOrientation[index]) ||
                        positon.some((value, index) => value !== lastPosition[index])
                    ) {
                        lastOrientation = orientation;
                        lastPosition = positon;

                        const currentTime = i / nativeOfflineAudioContext.sampleRate;

                        gateGainNode.gain.setValueAtTime(0, currentTime);

                        gateGainNode = createNativeGainNode(nativeOfflineAudioContext, { ...commonAudioNodeOptions, gain: 0 });
                        partialPannerNode = createNativePannerNode(nativeOfflineAudioContext, {
                            ...commonNativePannerNodeOptions,
                            orientationX: lastOrientation[0],
                            orientationY: lastOrientation[1],
                            orientationZ: lastOrientation[2],
                            positionX: lastPosition[0],
                            positionY: lastPosition[1],
                            positionZ: lastPosition[2]
                        });

                        gateGainNode.gain.setValueAtTime(1, currentTime);

                        inputGainNode.connect(gateGainNode).connect((<INativePannerNodeFaker>partialPannerNode).inputs[0]);
                        partialPannerNode.connect(nativeGainNode);
                    }
                }

                return nativeGainNode;
            }

            if (!nativePannerNodeIsOwnedByContext) {
                await renderAutomation(nativeOfflineAudioContext, proxy.orientationX, nativePannerNode.orientationX);
                await renderAutomation(nativeOfflineAudioContext, proxy.orientationY, nativePannerNode.orientationY);
                await renderAutomation(nativeOfflineAudioContext, proxy.orientationZ, nativePannerNode.orientationZ);
                await renderAutomation(nativeOfflineAudioContext, proxy.positionX, nativePannerNode.positionX);
                await renderAutomation(nativeOfflineAudioContext, proxy.positionY, nativePannerNode.positionY);
                await renderAutomation(nativeOfflineAudioContext, proxy.positionZ, nativePannerNode.positionZ);
            } else {
                await connectAudioParam(nativeOfflineAudioContext, proxy.orientationX, nativePannerNode.orientationX);
                await connectAudioParam(nativeOfflineAudioContext, proxy.orientationY, nativePannerNode.orientationY);
                await connectAudioParam(nativeOfflineAudioContext, proxy.orientationZ, nativePannerNode.orientationZ);
                await connectAudioParam(nativeOfflineAudioContext, proxy.positionX, nativePannerNode.positionX);
                await connectAudioParam(nativeOfflineAudioContext, proxy.positionY, nativePannerNode.positionY);
                await connectAudioParam(nativeOfflineAudioContext, proxy.positionZ, nativePannerNode.positionZ);
            }

            if (isNativeAudioNodeFaker(nativePannerNode)) {
                await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativePannerNode.inputs[0]);
            } else {
                await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativePannerNode);
            }

            return nativePannerNode;
        };

        return {
            render(
                proxy: IPannerNode<T>,
                nativeOfflineAudioContext: TNativeOfflineAudioContext
            ): Promise<TNativeGainNode | TNativePannerNode> {
                const renderedNativeGainNodeOrNativePannerNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);

                if (renderedNativeGainNodeOrNativePannerNode !== undefined) {
                    return Promise.resolve(renderedNativeGainNodeOrNativePannerNode);
                }

                return createAudioNode(proxy, nativeOfflineAudioContext);
            }
        };
    };
};
