export const createRenderInputsOfAudioParam = (getAudioNodeRenderer, getAudioParamConnections, isPartOfACycle) => {
    return async (audioParam, nativeOfflineAudioContext, nativeAudioParam) => {
        const audioParamConnections = getAudioParamConnections(audioParam);
        await Promise.all(Array.from(audioParamConnections.activeInputs).map(async ([source, output]) => {
            const audioNodeRenderer = getAudioNodeRenderer(source);
            const renderedNativeAudioNode = await audioNodeRenderer.render(source, nativeOfflineAudioContext);
            if (!isPartOfACycle(source)) {
                renderedNativeAudioNode.connect(nativeAudioParam, output);
            }
        }));
    };
};
//# sourceMappingURL=render-inputs-of-audio-param.js.map