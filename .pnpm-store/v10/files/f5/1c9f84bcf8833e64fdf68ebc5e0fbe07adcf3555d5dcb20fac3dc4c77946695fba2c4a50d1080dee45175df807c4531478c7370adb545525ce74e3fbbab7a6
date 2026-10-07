import { interceptConnections } from '../helpers/intercept-connections';
import {
    TNativeAudioBufferSourceNode,
    TNativeAudioNode,
    TNativeConstantSourceNode,
    TNativeConstantSourceNodeFakerFactoryFactory
} from '../types';

export const createNativeConstantSourceNodeFakerFactory: TNativeConstantSourceNodeFakerFactoryFactory = (
    addSilentConnection,
    createNativeAudioBufferSourceNode,
    createNativeGainNode,
    monitorConnections
) => {
    return (nativeContext, { offset, ...audioNodeOptions }) => {
        const audioBuffer = nativeContext.createBuffer(1, 2, 44100);
        const audioBufferSourceNode = createNativeAudioBufferSourceNode(nativeContext, {
            buffer: null,
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            loop: false,
            loopEnd: 0,
            loopStart: 0,
            playbackRate: 1
        });
        const gainNode = createNativeGainNode(nativeContext, { ...audioNodeOptions, gain: offset });

        // Bug #5: Safari does not support copyFromChannel() and copyToChannel().
        const channelData = audioBuffer.getChannelData(0);

        // Bug #95: Safari does not play or loop one sample buffers.
        channelData[0] = 1;
        channelData[1] = 1;

        audioBufferSourceNode.buffer = audioBuffer;
        audioBufferSourceNode.loop = true;

        const nativeConstantSourceNodeFaker = {
            get bufferSize(): undefined {
                return undefined;
            },
            get channelCount(): number {
                return gainNode.channelCount;
            },
            set channelCount(value) {
                gainNode.channelCount = value;
            },
            get channelCountMode(): TNativeConstantSourceNode['channelCountMode'] {
                return gainNode.channelCountMode;
            },
            set channelCountMode(value) {
                gainNode.channelCountMode = value;
            },
            get channelInterpretation(): TNativeConstantSourceNode['channelInterpretation'] {
                return gainNode.channelInterpretation;
            },
            set channelInterpretation(value) {
                gainNode.channelInterpretation = value;
            },
            get context(): TNativeConstantSourceNode['context'] {
                return gainNode.context;
            },
            get inputs(): TNativeAudioNode[] {
                return [];
            },
            get numberOfInputs(): number {
                return audioBufferSourceNode.numberOfInputs;
            },
            get numberOfOutputs(): number {
                return gainNode.numberOfOutputs;
            },
            get offset(): TNativeConstantSourceNode['offset'] {
                return gainNode.gain;
            },
            get onended(): TNativeConstantSourceNode['onended'] {
                return audioBufferSourceNode.onended;
            },
            set onended(value) {
                audioBufferSourceNode.onended = <TNativeAudioBufferSourceNode['onended']>value;
            },
            addEventListener(...args: any[]): void {
                return audioBufferSourceNode.addEventListener(args[0], args[1], args[2]);
            },
            dispatchEvent(...args: any[]): boolean {
                return audioBufferSourceNode.dispatchEvent(args[0]);
            },
            removeEventListener(...args: any[]): void {
                return audioBufferSourceNode.removeEventListener(args[0], args[1], args[2]);
            },
            start(when = 0): void {
                audioBufferSourceNode.start.call(audioBufferSourceNode, when);
            },
            stop(when = 0): void {
                audioBufferSourceNode.stop.call(audioBufferSourceNode, when);
            }
        };

        const whenConnected = () => audioBufferSourceNode.connect(gainNode);
        const whenDisconnected = () => audioBufferSourceNode.disconnect(gainNode);

        // Bug #175: Safari will not fire an ended event if the AudioBufferSourceNode is unconnected.
        addSilentConnection(nativeContext, audioBufferSourceNode);

        return monitorConnections(interceptConnections(nativeConstantSourceNodeFaker, gainNode), whenConnected, whenDisconnected);
    };
};
