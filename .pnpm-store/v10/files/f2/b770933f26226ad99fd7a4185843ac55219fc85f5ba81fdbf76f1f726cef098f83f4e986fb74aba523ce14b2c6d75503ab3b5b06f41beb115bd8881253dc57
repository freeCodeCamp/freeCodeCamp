import { TNativeMediaStreamTrackAudioSourceNode } from './native-media-stream-track-audio-source-node';

export type TNativeAudioContext = AudioContext & {
    // Bug #121: Only Firefox does yet support the MediaStreamTrackAudioSourceNode.
    createMediaStreamTrackSource?(mediaStreamTrack: MediaStreamTrack): TNativeMediaStreamTrackAudioSourceNode;
};
