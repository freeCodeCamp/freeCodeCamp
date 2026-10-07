export const getFirstSample = (audioBuffer, buffer, channelNumber) => {
    // Bug #5: Safari does not support copyFromChannel() and copyToChannel().
    if (audioBuffer.copyFromChannel === undefined) {
        return audioBuffer.getChannelData(channelNumber)[0];
    }
    audioBuffer.copyFromChannel(buffer, channelNumber);
    return buffer[0];
};
//# sourceMappingURL=get-first-sample.js.map