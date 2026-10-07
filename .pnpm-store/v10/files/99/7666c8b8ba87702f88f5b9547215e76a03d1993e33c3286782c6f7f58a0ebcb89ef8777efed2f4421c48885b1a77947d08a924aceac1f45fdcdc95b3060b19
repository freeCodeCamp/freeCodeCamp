export const wrapAudioScheduledSourceNodeStopMethodNegativeParameters = (nativeAudioScheduledSourceNode) => {
    nativeAudioScheduledSourceNode.stop = ((stop) => {
        return (when = 0) => {
            if (when < 0) {
                throw new RangeError("The parameter can't be negative.");
            }
            stop.call(nativeAudioScheduledSourceNode, when);
        };
    })(nativeAudioScheduledSourceNode.stop);
};
//# sourceMappingURL=wrap-audio-scheduled-source-node-stop-method-negative-parameters.js.map