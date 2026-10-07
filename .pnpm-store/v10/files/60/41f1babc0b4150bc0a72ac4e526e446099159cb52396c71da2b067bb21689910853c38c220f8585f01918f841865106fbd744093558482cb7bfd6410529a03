export const createGetAudioParamRenderer = (getAudioParamConnections) => {
    return (audioParam) => {
        const audioParamConnections = getAudioParamConnections(audioParam);
        if (audioParamConnections.renderer === null) {
            throw new Error('Missing the renderer of the given AudioParam in the audio graph.');
        }
        return audioParamConnections.renderer;
    };
};
//# sourceMappingURL=get-audio-param-renderer.js.map