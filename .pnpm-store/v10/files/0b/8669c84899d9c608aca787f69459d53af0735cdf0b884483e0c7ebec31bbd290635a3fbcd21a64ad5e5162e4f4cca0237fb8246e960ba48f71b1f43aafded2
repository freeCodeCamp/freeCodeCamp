import { interceptConnections } from './intercept-connections';
export const wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls = (nativeAudioScheduledSourceNode, nativeContext) => {
    const nativeGainNode = nativeContext.createGain();
    nativeAudioScheduledSourceNode.connect(nativeGainNode);
    const disconnectGainNode = ((disconnect) => {
        return () => {
            // @todo TypeScript cannot infer the overloaded signature with 1 argument yet.
            disconnect.call(nativeAudioScheduledSourceNode, nativeGainNode);
            nativeAudioScheduledSourceNode.removeEventListener('ended', disconnectGainNode);
        };
    })(nativeAudioScheduledSourceNode.disconnect);
    nativeAudioScheduledSourceNode.addEventListener('ended', disconnectGainNode);
    interceptConnections(nativeAudioScheduledSourceNode, nativeGainNode);
    nativeAudioScheduledSourceNode.stop = ((stop) => {
        let isStopped = false;
        return (when = 0) => {
            if (isStopped) {
                try {
                    stop.call(nativeAudioScheduledSourceNode, when);
                }
                catch {
                    nativeGainNode.gain.setValueAtTime(0, when);
                }
            }
            else {
                stop.call(nativeAudioScheduledSourceNode, when);
                isStopped = true;
            }
        };
    })(nativeAudioScheduledSourceNode.stop);
};
//# sourceMappingURL=wrap-audio-scheduled-source-node-stop-method-consecutive-calls.js.map