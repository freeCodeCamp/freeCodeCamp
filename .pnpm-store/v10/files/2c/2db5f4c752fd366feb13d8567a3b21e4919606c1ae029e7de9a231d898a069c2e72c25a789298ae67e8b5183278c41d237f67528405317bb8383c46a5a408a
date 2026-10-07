import { ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { Gain } from "../../core/context/Gain.js";
import { PlaybackState } from "../../core/util/StateTimeline.js";
export interface RecorderOptions extends ToneAudioNodeOptions {
    mimeType?: string;
}
/**
 * A wrapper around the MediaRecorder API. Unlike the rest of Tone.js, this module does not offer
 * any sample-accurate scheduling because it is not a feature of the MediaRecorder API.
 * This is only natively supported in Chrome and Firefox.
 * For a cross-browser shim, install [audio-recorder-polyfill](https://www.npmjs.com/package/audio-recorder-polyfill).
 * @example
 * const recorder = new Tone.Recorder();
 * const synth = new Tone.Synth().connect(recorder);
 * // start recording
 * recorder.start();
 * // generate a few notes
 * synth.triggerAttackRelease("C3", 0.5);
 * synth.triggerAttackRelease("C4", 0.5, "+1");
 * synth.triggerAttackRelease("C5", 0.5, "+2");
 * // wait for the notes to end and stop the recording
 * setTimeout(async () => {
 * 	// the recorded audio is returned as a blob
 * 	const recording = await recorder.stop();
 * 	// download the recording by creating an anchor element and blob url
 * 	const url = URL.createObjectURL(recording);
 * 	const anchor = document.createElement("a");
 * 	anchor.download = "recording.webm";
 * 	anchor.href = url;
 * 	anchor.click();
 * }, 4000);
 * @category Component
 */
export declare class Recorder extends ToneAudioNode<RecorderOptions> {
    readonly name = "Recorder";
    /**
     * Recorder uses the Media Recorder API
     */
    private _recorder;
    /**
     * MediaRecorder requires
     */
    private _stream;
    readonly input: Gain;
    readonly output: undefined;
    constructor(options?: Partial<RecorderOptions>);
    static getDefaults(): RecorderOptions;
    /**
     * The mime type is the format that the audio is encoded in. For Chrome
     * that is typically webm encoded as "vorbis".
     */
    get mimeType(): string;
    /**
     * Test if your platform supports the Media Recorder API. If it's not available,
     * try installing this (polyfill)[https://www.npmjs.com/package/audio-recorder-polyfill].
     */
    static get supported(): boolean;
    /**
     * Get the playback state of the Recorder, either "started", "stopped" or "paused"
     */
    get state(): PlaybackState;
    /**
     * Start/Resume the Recorder. Returns a promise which resolves
     * when the recorder has started.
     */
    start(): Promise<void>;
    /**
     * Stop the recorder. Returns a promise with the recorded content until this point
     * encoded as {@link mimeType}
     */
    stop(): Promise<Blob>;
    /**
     * Pause the recorder
     */
    pause(): this;
    dispose(): this;
}
