export const testAudioWorkletNodeOptionsClonability = (audioWorkletNodeOptions) => {
    const { port1, port2 } = new MessageChannel();
    try {
        // This will throw an error if the audioWorkletNodeOptions are not clonable.
        port1.postMessage(audioWorkletNodeOptions);
    }
    finally {
        port1.close();
        port2.close();
    }
};
//# sourceMappingURL=test-audio-worklet-node-options-clonability.js.map