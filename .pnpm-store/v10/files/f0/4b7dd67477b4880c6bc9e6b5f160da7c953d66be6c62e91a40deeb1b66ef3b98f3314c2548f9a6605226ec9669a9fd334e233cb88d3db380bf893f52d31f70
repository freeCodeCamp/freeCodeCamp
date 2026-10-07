import { TAnyAudioBuffer, TContext } from '../types';
import { IAudioParam } from './audio-param';
import { IAudioScheduledSourceNode } from './audio-scheduled-source-node';
export interface IAudioBufferSourceNode<T extends TContext> extends IAudioScheduledSourceNode<T> {
    buffer: null | TAnyAudioBuffer;
    loop: boolean;
    loopEnd: number;
    loopStart: number;
    readonly playbackRate: IAudioParam;
    start(when?: number, offset?: number, duration?: number): void;
}
//# sourceMappingURL=audio-buffer-source-node.d.ts.map