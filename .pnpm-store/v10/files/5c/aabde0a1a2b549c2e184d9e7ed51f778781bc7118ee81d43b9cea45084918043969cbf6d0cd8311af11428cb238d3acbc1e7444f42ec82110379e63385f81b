import { TWrapChannelMergerNodeFactory } from '../types';

export const createWrapChannelMergerNode: TWrapChannelMergerNodeFactory = (createInvalidStateError, monitorConnections) => {
    return (nativeContext, channelMergerNode) => {
        // Bug #15: Safari does not return the default properties.
        channelMergerNode.channelCount = 1;
        channelMergerNode.channelCountMode = 'explicit';

        // Bug #16: Safari does not throw an error when setting a different channelCount or channelCountMode.
        Object.defineProperty(channelMergerNode, 'channelCount', {
            get: () => 1,
            set: () => {
                throw createInvalidStateError();
            }
        });

        Object.defineProperty(channelMergerNode, 'channelCountMode', {
            get: () => 'explicit',
            set: () => {
                throw createInvalidStateError();
            }
        });

        // Bug #20: Safari requires a connection of any kind to treat the input signal correctly.
        const audioBufferSourceNode = nativeContext.createBufferSource();

        const whenConnected = () => {
            const length = channelMergerNode.numberOfInputs;

            for (let i = 0; i < length; i += 1) {
                audioBufferSourceNode.connect(channelMergerNode, 0, i);
            }
        };
        const whenDisconnected = () => audioBufferSourceNode.disconnect(channelMergerNode);

        monitorConnections(channelMergerNode, whenConnected, whenDisconnected);
    };
};
