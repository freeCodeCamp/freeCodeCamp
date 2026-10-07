import { __awaiter } from "tslib";
import { ToneAudioNode, } from "../../core/context/ToneAudioNode.js";
import { Gain } from "../../core/context/Gain.js";
import { assert } from "../../core/util/Debug.js";
import { theWindow } from "../../core/context/AudioContext.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
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
export class Recorder extends ToneAudioNode {
    constructor() {
        const options = optionsFromArguments(Recorder.getDefaults(), arguments);
        super(options);
        this.name = "Recorder";
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
    static getDefaults() {
        return ToneAudioNode.getDefaults();
    }
    /**
     * The mime type is the format that the audio is encoded in. For Chrome
     * that is typically webm encoded as "vorbis".
     */
    get mimeType() {
        return this._recorder.mimeType;
    }
    /**
     * Test if your platform supports the Media Recorder API. If it's not available,
     * try installing this (polyfill)[https://www.npmjs.com/package/audio-recorder-polyfill].
     */
    static get supported() {
        return theWindow !== null && Reflect.has(theWindow, "MediaRecorder");
    }
    /**
     * Get the playback state of the Recorder, either "started", "stopped" or "paused"
     */
    get state() {
        if (this._recorder.state === "inactive") {
            return "stopped";
        }
        else if (this._recorder.state === "paused") {
            return "paused";
        }
        else {
            return "started";
        }
    }
    /**
     * Start/Resume the Recorder. Returns a promise which resolves
     * when the recorder has started.
     */
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            assert(this.state !== "started", "Recorder is already started");
            const startPromise = new Promise((done) => {
                const handleStart = () => {
                    this._recorder.removeEventListener("start", handleStart, false);
                    done();
                };
                this._recorder.addEventListener("start", handleStart, false);
            });
            if (this.state === "stopped") {
                this._recorder.start();
            }
            else {
                this._recorder.resume();
            }
            return yield startPromise;
        });
    }
    /**
     * Stop the recorder. Returns a promise with the recorded content until this point
     * encoded as {@link mimeType}
     */
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            assert(this.state !== "stopped", "Recorder is not started");
            const dataPromise = new Promise((done) => {
                const handleData = (e) => {
                    this._recorder.removeEventListener("dataavailable", handleData, false);
                    done(e.data);
                };
                this._recorder.addEventListener("dataavailable", handleData, false);
            });
            this._recorder.stop();
            return yield dataPromise;
        });
    }
    /**
     * Pause the recorder
     */
    pause() {
        assert(this.state === "started", "Recorder must be started");
        this._recorder.pause();
        return this;
    }
    dispose() {
        super.dispose();
        this.input.dispose();
        this._stream.disconnect();
        return this;
    }
}
//# sourceMappingURL=Recorder.js.map