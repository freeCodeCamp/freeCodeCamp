import { __awaiter } from "tslib";
import { createOfflineAudioContext } from "../context/AudioContext.js";
import { Context } from "../context/Context.js";
import { isOfflineAudioContext } from "../util/AdvancedTypeCheck.js";
import { ToneAudioBuffer } from "./ToneAudioBuffer.js";
/**
 * Wrapper around the OfflineAudioContext
 * @category Core
 * @example
 * // generate a single channel, 0.5 second buffer
 * const context = new Tone.OfflineContext(1, 0.5, 44100);
 * const osc = new Tone.Oscillator({ context });
 * context.render().then(buffer => {
 * 	console.log(buffer.numberOfChannels, buffer.duration);
 * });
 */
export class OfflineContext extends Context {
    constructor() {
        super({
            clockSource: "offline",
            context: isOfflineAudioContext(arguments[0])
                ? arguments[0]
                : createOfflineAudioContext(arguments[0], arguments[1] * arguments[2], arguments[2]),
            lookAhead: 0,
            updateInterval: isOfflineAudioContext(arguments[0])
                ? 128 / arguments[0].sampleRate
                : 128 / arguments[2],
        });
        this.name = "OfflineContext";
        /**
         * An artificial clock source
         */
        this._currentTime = 0;
        this.isOffline = true;
        this._duration = isOfflineAudioContext(arguments[0])
            ? arguments[0].length / arguments[0].sampleRate
            : arguments[1];
    }
    /**
     * Override the now method to point to the internal clock time
     */
    now() {
        return this._currentTime;
    }
    /**
     * Same as this.now()
     */
    get currentTime() {
        return this._currentTime;
    }
    /**
     * Render just the clock portion of the audio context.
     */
    _renderClock(asynchronous) {
        return __awaiter(this, void 0, void 0, function* () {
            let index = 0;
            while (this._duration - this._currentTime >= 0) {
                // invoke all the callbacks on that time
                this.emit("tick");
                // increment the clock in block-sized chunks
                this._currentTime += 128 / this.sampleRate;
                // yield once a second of audio
                index++;
                const yieldEvery = Math.floor(this.sampleRate / 128);
                if (asynchronous && index % yieldEvery === 0) {
                    yield new Promise((done) => setTimeout(done, 1));
                }
            }
        });
    }
    /**
     * Render the output of the OfflineContext
     * @param asynchronous If the clock should be rendered asynchronously, which will not block the main thread, but be slightly slower.
     */
    render() {
        return __awaiter(this, arguments, void 0, function* (asynchronous = true) {
            yield this.workletsAreReady();
            yield this._renderClock(asynchronous);
            const buffer = yield this._context.startRendering();
            return new ToneAudioBuffer(buffer);
        });
    }
    /**
     * Close the context
     */
    close() {
        return Promise.resolve();
    }
}
//# sourceMappingURL=OfflineContext.js.map