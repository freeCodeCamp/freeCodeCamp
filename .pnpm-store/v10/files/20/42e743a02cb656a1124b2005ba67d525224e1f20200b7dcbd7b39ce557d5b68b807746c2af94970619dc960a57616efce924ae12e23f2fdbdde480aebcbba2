export const createIsAnyAudioContext = (contextStore, isNativeAudioContext) => {
    return (anything) => {
        const nativeContext = contextStore.get(anything);
        return isNativeAudioContext(nativeContext) || isNativeAudioContext(anything);
    };
};
//# sourceMappingURL=is-any-audio-context.js.map