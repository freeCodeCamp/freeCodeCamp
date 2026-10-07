import { IBaseAudioContext } from './base-audio-context';
import { ICommonAudioContext } from './common-audio-context';
import { IMediaElementAudioSourceNode } from './media-element-audio-source-node';
import { IMediaStreamAudioDestinationNode } from './media-stream-audio-destination-node';
import { IMediaStreamAudioSourceNode } from './media-stream-audio-source-node';
import { IMediaStreamTrackAudioSourceNode } from './media-stream-track-audio-source-node';
export interface IAudioContext extends IBaseAudioContext<IAudioContext>, ICommonAudioContext {
    createMediaElementSource(mediaElement: HTMLMediaElement): IMediaElementAudioSourceNode<this>;
    createMediaStreamDestination(): IMediaStreamAudioDestinationNode<this>;
    createMediaStreamSource(mediaStream: MediaStream): IMediaStreamAudioSourceNode<this>;
    createMediaStreamTrackSource(mediaStreamTrack: MediaStreamTrack): IMediaStreamTrackAudioSourceNode<this>;
}
//# sourceMappingURL=audio-context.d.ts.map