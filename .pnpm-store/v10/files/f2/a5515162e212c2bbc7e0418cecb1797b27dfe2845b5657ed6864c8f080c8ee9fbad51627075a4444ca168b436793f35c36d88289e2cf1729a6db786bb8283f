import { TAnyAudioBuffer } from '../types';
import { IAudioNodeOptions } from './audio-node-options';

export interface IAudioBufferSourceOptions extends IAudioNodeOptions {
    buffer: null | TAnyAudioBuffer;

    /*
     * Bug #149: Safari does not yet support the detune AudioParam.
     *
     * detune: number;
     */

    loop: boolean;

    loopEnd: number;

    loopStart: number;

    playbackRate: number;
}
