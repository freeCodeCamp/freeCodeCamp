export const assignNativeAudioNodeOption = <T extends keyof any, U extends any>(
    nativeAudioNode: Record<T, U>,
    options: Record<T, U>,
    option: T
) => {
    const value = options[option];

    if (value !== undefined && value !== nativeAudioNode[option]) {
        nativeAudioNode[option] = value;
    }
};
