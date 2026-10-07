import { TNativeMediaStreamTrackAudioSourceNodeFactoryFactory } from '../types';

export const createNativeMediaStreamTrackAudioSourceNodeFactory: TNativeMediaStreamTrackAudioSourceNodeFactoryFactory = (
    createInvalidStateError,
    isNativeOfflineAudioContext
) => {
    return (nativeAudioContext, { mediaStreamTrack }) => {
        // Bug #121: Only Firefox does yet support the MediaStreamTrackAudioSourceNode.
        if (typeof nativeAudioContext.createMediaStreamTrackSource === 'function') {
            return nativeAudioContext.createMediaStreamTrackSource(mediaStreamTrack);
        }

        const mediaStream = new MediaStream([mediaStreamTrack]);
        const nativeMediaStreamAudioSourceNode = nativeAudioContext.createMediaStreamSource(mediaStream);

        // Bug #120: Firefox does not throw an error if the mediaStream has no audio track.
        if (mediaStreamTrack.kind !== 'audio') {
            throw createInvalidStateError();
        }

        // Bug #172: Safari allows to create a MediaStreamAudioSourceNode with an OfflineAudioContext.
        if (isNativeOfflineAudioContext(nativeAudioContext)) {
            throw new TypeError();
        }

        return nativeMediaStreamAudioSourceNode;
    };
};
