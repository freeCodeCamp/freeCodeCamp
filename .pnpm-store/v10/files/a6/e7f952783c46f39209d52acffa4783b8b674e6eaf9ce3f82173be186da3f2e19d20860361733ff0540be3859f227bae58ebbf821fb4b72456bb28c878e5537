export function copyFromChannel(audioBuffer, 
// @todo There is currently no way to define something like { [ key: number | string ]: Float32Array }
parent, key, channelNumber, bufferOffset) {
    if (typeof audioBuffer.copyFromChannel === 'function') {
        // The byteLength will be 0 when the ArrayBuffer was transferred.
        if (parent[key].byteLength === 0) {
            parent[key] = new Float32Array(128);
        }
        audioBuffer.copyFromChannel(parent[key], channelNumber, bufferOffset);
        // Bug #5: Safari does not support copyFromChannel().
    }
    else {
        const channelData = audioBuffer.getChannelData(channelNumber);
        // The byteLength will be 0 when the ArrayBuffer was transferred.
        if (parent[key].byteLength === 0) {
            parent[key] = channelData.slice(bufferOffset, bufferOffset + 128);
        }
        else {
            const slicedInput = new Float32Array(channelData.buffer, bufferOffset * Float32Array.BYTES_PER_ELEMENT, 128);
            parent[key].set(slicedInput);
        }
    }
}
//# sourceMappingURL=copy-from-channel.js.map