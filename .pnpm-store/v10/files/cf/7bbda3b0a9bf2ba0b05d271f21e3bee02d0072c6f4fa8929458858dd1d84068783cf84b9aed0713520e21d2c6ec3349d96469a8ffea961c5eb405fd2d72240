export const assignNativeAudioNodeAudioParamValue = <T extends { [key: string]: any }, U extends { [key: string]: any }>(
    nativeAudioNode: T,
    options: U,
    audioParam: keyof T & keyof U
) => {
    const value = options[audioParam];

    if (value !== undefined && value !== nativeAudioNode[audioParam].value) {
        nativeAudioNode[audioParam].value = value;
    }
};
