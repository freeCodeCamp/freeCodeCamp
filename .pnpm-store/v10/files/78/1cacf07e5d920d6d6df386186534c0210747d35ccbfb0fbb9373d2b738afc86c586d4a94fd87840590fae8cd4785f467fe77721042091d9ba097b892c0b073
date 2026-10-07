export const copyToChannel = (audioBuffer, parent, key, channelNumber, bufferOffset) => {
    if (typeof audioBuffer.copyToChannel === 'function') {
        // The byteLength will be 0 when the ArrayBuffer was transferred.
        if (parent[key].byteLength !== 0) {
            audioBuffer.copyToChannel(parent[key], channelNumber, bufferOffset);
        }
        // Bug #5: Safari does not support copyToChannel().
    }
    else {
        // The byteLength will be 0 when the ArrayBuffer was transferred.
        if (parent[key].byteLength !== 0) {
            audioBuffer.getChannelData(channelNumber).set(parent[key], bufferOffset);
        }
    }
};
//# sourceMappingURL=copy-to-channel.js.map