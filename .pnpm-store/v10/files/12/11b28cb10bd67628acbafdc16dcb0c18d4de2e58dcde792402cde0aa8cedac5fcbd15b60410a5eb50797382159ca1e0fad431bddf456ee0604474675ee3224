import { filterBuffer } from '../helpers/filter-buffer';
import { isOwnedByContext } from '../helpers/is-owned-by-context';
import { IIIRFilterNode, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import {
    TIIRFilterNodeRendererFactoryFactory,
    TNativeAudioBuffer,
    TNativeAudioBufferSourceNode,
    TNativeIIRFilterNode,
    TNativeOfflineAudioContext
} from '../types';

const filterFullBuffer = (
    renderedBuffer: TNativeAudioBuffer,
    nativeOfflineAudioContext: TNativeOfflineAudioContext,
    feedback: Iterable<number>,
    feedforward: Iterable<number>
) => {
    const convertedFeedback = feedback instanceof Float64Array ? feedback : new Float64Array(feedback);
    const convertedFeedforward = feedforward instanceof Float64Array ? feedforward : new Float64Array(feedforward);
    const feedbackLength = convertedFeedback.length;
    const feedforwardLength = convertedFeedforward.length;
    const minLength = Math.min(feedbackLength, feedforwardLength);

    if (convertedFeedback[0] !== 1) {
        for (let i = 0; i < feedbackLength; i += 1) {
            convertedFeedforward[i] /= convertedFeedback[0];
        }

        for (let i = 1; i < feedforwardLength; i += 1) {
            convertedFeedback[i] /= convertedFeedback[0];
        }
    }

    const bufferLength = 32;
    const xBuffer = new Float32Array(bufferLength);
    const yBuffer = new Float32Array(bufferLength);

    const filteredBuffer = nativeOfflineAudioContext.createBuffer(
        renderedBuffer.numberOfChannels,
        renderedBuffer.length,
        renderedBuffer.sampleRate
    );

    const numberOfChannels = renderedBuffer.numberOfChannels;

    for (let i = 0; i < numberOfChannels; i += 1) {
        const input = renderedBuffer.getChannelData(i);
        const output = filteredBuffer.getChannelData(i);

        xBuffer.fill(0);
        yBuffer.fill(0);

        filterBuffer(
            convertedFeedback,
            feedbackLength,
            convertedFeedforward,
            feedforwardLength,
            minLength,
            xBuffer,
            yBuffer,
            0,
            bufferLength,
            input,
            output
        );
    }

    return filteredBuffer;
};

export const createIIRFilterNodeRendererFactory: TIIRFilterNodeRendererFactoryFactory = (
    createNativeAudioBufferSourceNode,
    getNativeAudioNode,
    nativeOfflineAudioContextConstructor,
    renderInputsOfAudioNode,
    renderNativeOfflineAudioContext
) => {
    return <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>(feedback: Iterable<number>, feedforward: Iterable<number>) => {
        const renderedNativeAudioNodes = new WeakMap<TNativeOfflineAudioContext, TNativeAudioBufferSourceNode | TNativeIIRFilterNode>();

        let filteredBufferPromise: null | Promise<null | TNativeAudioBuffer> = null;

        const createAudioNode = async (proxy: IIIRFilterNode<T>, nativeOfflineAudioContext: TNativeOfflineAudioContext) => {
            let nativeAudioBufferSourceNode: null | TNativeAudioBufferSourceNode = null;
            let nativeIIRFilterNode = getNativeAudioNode<T, TNativeIIRFilterNode>(proxy);

            // If the initially used nativeIIRFilterNode was not constructed on the same OfflineAudioContext it needs to be created again.
            const nativeIIRFilterNodeIsOwnedByContext = isOwnedByContext(nativeIIRFilterNode, nativeOfflineAudioContext);

            // Bug #9: Safari does not support IIRFilterNodes.
            if (nativeOfflineAudioContext.createIIRFilter === undefined) {
                nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode(nativeOfflineAudioContext, {
                    buffer: null,
                    channelCount: 2,
                    channelCountMode: 'max',
                    channelInterpretation: 'speakers',
                    loop: false,
                    loopEnd: 0,
                    loopStart: 0,
                    playbackRate: 1
                });
            } else if (!nativeIIRFilterNodeIsOwnedByContext) {
                // @todo TypeScript defines the parameters of createIIRFilter() as arrays of numbers.
                nativeIIRFilterNode = nativeOfflineAudioContext.createIIRFilter(<number[]>feedforward, <number[]>feedback);
            }

            renderedNativeAudioNodes.set(
                nativeOfflineAudioContext,
                nativeAudioBufferSourceNode === null ? nativeIIRFilterNode : nativeAudioBufferSourceNode
            );

            if (nativeAudioBufferSourceNode !== null) {
                if (filteredBufferPromise === null) {
                    if (nativeOfflineAudioContextConstructor === null) {
                        throw new Error('Missing the native OfflineAudioContext constructor.');
                    }

                    const partialOfflineAudioContext = new nativeOfflineAudioContextConstructor(
                        // Bug #47: The AudioDestinationNode in Safari gets not initialized correctly.
                        proxy.context.destination.channelCount,
                        // Bug #17: Safari does not yet expose the length.
                        proxy.context.length,
                        nativeOfflineAudioContext.sampleRate
                    );

                    filteredBufferPromise = (async () => {
                        await renderInputsOfAudioNode(proxy, partialOfflineAudioContext, partialOfflineAudioContext.destination);

                        const renderedBuffer = await renderNativeOfflineAudioContext(partialOfflineAudioContext);

                        return filterFullBuffer(renderedBuffer, nativeOfflineAudioContext, feedback, feedforward);
                    })();
                }

                const filteredBuffer = await filteredBufferPromise;

                nativeAudioBufferSourceNode.buffer = filteredBuffer;
                nativeAudioBufferSourceNode.start(0);

                return nativeAudioBufferSourceNode;
            }

            await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeIIRFilterNode);

            return nativeIIRFilterNode;
        };

        return {
            render(
                proxy: IIIRFilterNode<T>,
                nativeOfflineAudioContext: TNativeOfflineAudioContext
            ): Promise<TNativeAudioBufferSourceNode | TNativeIIRFilterNode> {
                const renderedNativeAudioNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);

                if (renderedNativeAudioNode !== undefined) {
                    return Promise.resolve(renderedNativeAudioNode);
                }

                return createAudioNode(proxy, nativeOfflineAudioContext);
            }
        };
    };
};
