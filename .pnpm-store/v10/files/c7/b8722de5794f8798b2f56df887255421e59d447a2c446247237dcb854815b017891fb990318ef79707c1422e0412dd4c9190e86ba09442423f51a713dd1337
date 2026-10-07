export const createRenderAutomation = (getAudioParamRenderer, renderInputsOfAudioParam) => {
    return (nativeOfflineAudioContext, audioParam, nativeAudioParam) => {
        const audioParamRenderer = getAudioParamRenderer(audioParam);
        audioParamRenderer.replay(nativeAudioParam);
        return renderInputsOfAudioParam(audioParam, nativeOfflineAudioContext, nativeAudioParam);
    };
};
//# sourceMappingURL=render-automation.js.map