import {
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../../core/context/ToneAudioNode.js";
import { Gain } from "../../core/context/Gain.js";
import { assert } from "../../core/util/Debug.js";
import { theWindow } from "../../core/context/AudioContext.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
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
export class Recorder extends ToneAudioNode<RecorderOptions> {
	readonly name = "Recorder";

	/**
	 * Recorder uses the Media Recorder API
	 */
	private _recorder: MediaRecorder;

	/**
	 * MediaRecorder requires
	 */
	private _stream: MediaStreamAudioDestinationNode;

	readonly input: Gain;
	readonly output: undefined;

	constructor(options?: Partial<RecorderOptions>);
	constructor() {
		const options = optionsFromArguments(Recorder.getDefaults(), arguments);
		super(options);

		this.input = new Gain({
			context: this.context,
		});

		assert(Recorder.supported, "Media Recorder API is not available");

		this._stream = this.context.createMediaStreamDestination();
		this.input.connect(this._stream);
		this._recorder = new MediaRecorder(this._stream.stream, {
			mimeType: options.mimeType,
		});
	}

	static getDefaults(): RecorderOptions {
		return ToneAudioNode.getDefaults();
	}

	/**
	 * The mime type is the format that the audio is encoded in. For Chrome
	 * that is typically webm encoded as "vorbis".
	 */
	get mimeType(): string {
		return this._recorder.mimeType;
	}

	/**
	 * Test if your platform supports the Media Recorder API. If it's not available,
	 * try installing this (polyfill)[https://www.npmjs.com/package/audio-recorder-polyfill].
	 */
	static get supported(): boolean {
		return theWindow !== null && Reflect.has(theWindow, "MediaRecorder");
	}

	/**
	 * Get the playback state of the Recorder, either "started", "stopped" or "paused"
	 */
	get state(): PlaybackState {
		if (this._recorder.state === "inactive") {
			return "stopped";
		} else if (this._recorder.state === "paused") {
			return "paused";
		} else {
			return "started";
		}
	}

	/**
	 * Start/Resume the Recorder. Returns a promise which resolves
	 * when the recorder has started.
	 */
	async start() {
		assert(this.state !== "started", "Recorder is already started");
		const startPromise = new Promise<void>((done) => {
			const handleStart = () => {
				this._recorder.removeEventListener("start", handleStart, false);

				done();
			};

			this._recorder.addEventListener("start", handleStart, false);
		});
		if(this.state === "stopped") {
			this._recorder.start();
		} else {
			this._recorder.resume();
		}
		return await startPromise;
	}

	/**
	 * Stop the recorder. Returns a promise with the recorded content until this point
	 * encoded as {@link mimeType}
	 */
	async stop(): Promise<Blob> {
		assert(this.state !== "stopped", "Recorder is not started");
		const dataPromise: Promise<Blob> = new Promise((done) => {
			const handleData = (e: BlobEvent) => {
				this._recorder.removeEventListener(
					"dataavailable",
					handleData,
					false
				);

				done(e.data);
			};

			this._recorder.addEventListener("dataavailable", handleData, false);
		});
		this._recorder.stop();
		return await dataPromise;
	}

	/**
	 * Pause the recorder
	 */
	pause(): this {
		assert(this.state === "started", "Recorder must be started");
		this._recorder.pause();
		return this;
	}

	dispose(): this {
		super.dispose();
		this.input.dispose();
		this._stream.disconnect();
		return this;
	}
}
