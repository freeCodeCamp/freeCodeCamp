import { connect } from "../../core/context/ToneAudioNode.js";
import { Param } from "../../core/context/Param.js";
import { ToneAudioBuffer } from "../../core/context/ToneAudioBuffer.js";
import { defaultArg, optionsFromArguments } from "../../core/util/Defaults.js";
import { noOp } from "../../core/util/Interface.js";
import { isDefined } from "../../core/util/TypeCheck.js";
import { assert } from "../../core/util/Debug.js";
import { OneShotSource, } from "../OneShotSource.js";
import { EQ, GTE, LT } from "../../core/util/Math.js";
/**
 * Wrapper around the native BufferSourceNode.
 * @category Source
 */
export class ToneBufferSource extends OneShotSource {
    constructor() {
        const options = optionsFromArguments(ToneBufferSource.getDefaults(), arguments, ["url", "onload"]);
        super(options);
        this.name = "ToneBufferSource";
        /**
         * The oscillator
         */
        this._source = this.context.createBufferSource();
        this._internalChannels = [this._source];
        /**
         * indicators if the source has started/stopped
         */
        this._sourceStarted = false;
        this._sourceStopped = false;
        connect(this._source, this._gainNode);
        this._source.onended = () => this._stopSource();
        /**
         * The playbackRate of the buffer
         */
        this.playbackRate = new Param({
            context: this.context,
            param: this._source.playbackRate,
            units: "positive",
            value: options.playbackRate,
        });
        // set some values initially
        this.loop = options.loop;
        this.loopStart = options.loopStart;
        this.loopEnd = options.loopEnd;
        this._buffer = new ToneAudioBuffer(options.url, options.onload, options.onerror);
        this._internalChannels.push(this._source);
    }
    static getDefaults() {
        return Object.assign(OneShotSource.getDefaults(), {
            url: new ToneAudioBuffer(),
            loop: false,
            loopEnd: 0,
            loopStart: 0,
            onload: noOp,
            onerror: noOp,
            playbackRate: 1,
        });
    }
    /**
     * The fadeIn time of the amplitude envelope.
     */
    get fadeIn() {
        return this._fadeIn;
    }
    set fadeIn(t) {
        this._fadeIn = t;
    }
    /**
     * The fadeOut time of the amplitude envelope.
     */
    get fadeOut() {
        return this._fadeOut;
    }
    set fadeOut(t) {
        this._fadeOut = t;
    }
    /**
     * The curve applied to the fades, either "linear" or "exponential"
     */
    get curve() {
        return this._curve;
    }
    set curve(t) {
        this._curve = t;
    }
    /**
     * Start the buffer
     * @param  time When the player should start.
     * @param  offset The offset from the beginning of the sample to start at.
     * @param  duration How long the sample should play. If no duration is given, it will default to the full length of the sample (minus any offset)
     * @param  gain  The gain to play the buffer back at.
     */
    start(time, offset, duration, gain = 1) {
        assert(this.buffer.loaded, "buffer is either not set or not loaded");
        const computedTime = this.toSeconds(time);
        // apply the gain envelope
        this._startGain(computedTime, gain);
        // if it's a loop the default offset is the loopstart point
        if (this.loop) {
            offset = defaultArg(offset, this.loopStart);
        }
        else {
            // otherwise the default offset is 0
            offset = defaultArg(offset, 0);
        }
        // make sure the offset is not less than 0
        let computedOffset = Math.max(this.toSeconds(offset), 0);
        // start the buffer source
        if (this.loop) {
            // modify the offset if it's greater than the loop time
            const loopEnd = this.toSeconds(this.loopEnd) || this.buffer.duration;
            const loopStart = this.toSeconds(this.loopStart);
            const loopDuration = loopEnd - loopStart;
            // move the offset back
            if (GTE(computedOffset, loopEnd)) {
                computedOffset =
                    ((computedOffset - loopStart) % loopDuration) + loopStart;
            }
            // when the offset is very close to the duration, set it to 0
            if (EQ(computedOffset, this.buffer.duration)) {
                computedOffset = 0;
            }
        }
        // this.buffer.loaded would have return false if the AudioBuffer was undefined
        this._source.buffer = this.buffer.get();
        this._source.loopEnd =
            this.toSeconds(this.loopEnd) || this.buffer.duration;
        if (LT(computedOffset, this.buffer.duration)) {
            this._sourceStarted = true;
            this._source.start(computedTime, computedOffset);
        }
        // if a duration is given, schedule a stop
        if (isDefined(duration)) {
            let computedDur = this.toSeconds(duration);
            // make sure it's never negative
            computedDur = Math.max(computedDur, 0);
            this.stop(computedTime + computedDur);
        }
        return this;
    }
    _stopSource(time) {
        if (!this._sourceStopped && this._sourceStarted) {
            this._sourceStopped = true;
            this._source.stop(this.toSeconds(time));
            this._onended();
        }
    }
    /**
     * If loop is true, the loop will start at this position.
     */
    get loopStart() {
        return this._source.loopStart;
    }
    set loopStart(loopStart) {
        this._source.loopStart = this.toSeconds(loopStart);
    }
    /**
     * If loop is true, the loop will end at this position.
     */
    get loopEnd() {
        return this._source.loopEnd;
    }
    set loopEnd(loopEnd) {
        this._source.loopEnd = this.toSeconds(loopEnd);
    }
    /**
     * The audio buffer belonging to the player.
     */
    get buffer() {
        return this._buffer;
    }
    set buffer(buffer) {
        this._buffer.set(buffer);
    }
    /**
     * If the buffer should loop once it's over.
     */
    get loop() {
        return this._source.loop;
    }
    set loop(loop) {
        this._source.loop = loop;
        if (this._sourceStarted) {
            this.cancelStop();
        }
    }
    /**
     * Clean up.
     */
    dispose() {
        super.dispose();
        this._source.onended = null;
        this._source.disconnect();
        this._buffer.dispose();
        this.playbackRate.dispose();
        return this;
    }
}
//# sourceMappingURL=ToneBufferSource.js.map