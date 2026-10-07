import { createInvalidStateError } from '../factories/invalid-state-error';
export const wrapChannelSplitterNode = (channelSplitterNode) => {
    const channelCount = channelSplitterNode.numberOfOutputs;
    // Bug #97: Safari does not throw an error when attempting to change the channelCount to something other than its initial value.
    Object.defineProperty(channelSplitterNode, 'channelCount', {
        get: () => channelCount,
        set: (value) => {
            if (value !== channelCount) {
                throw createInvalidStateError();
            }
        }
    });
    // Bug #30: Safari does not throw an error when attempting to change the channelCountMode to something other than explicit.
    Object.defineProperty(channelSplitterNode, 'channelCountMode', {
        get: () => 'explicit',
        set: (value) => {
            if (value !== 'explicit') {
                throw createInvalidStateError();
            }
        }
    });
    // Bug #32: Safari does not throw an error when attempting to change the channelInterpretation to something other than discrete.
    Object.defineProperty(channelSplitterNode, 'channelInterpretation', {
        get: () => 'discrete',
        set: (value) => {
            if (value !== 'discrete') {
                throw createInvalidStateError();
            }
        }
    });
};
//# sourceMappingURL=wrap-channel-splitter-node.js.map