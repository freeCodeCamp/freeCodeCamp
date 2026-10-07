import { Volume } from "../component/channel/Volume.js";
import "../core/context/Destination.js";
import "../core/clock/Transport.js";
import { ToneAudioNode, } from "../core/context/ToneAudioNode.js";
import { defaultArg } from "../core/util/Defaults.js";
import { noOp, readOnly } from "../core/util/Interface.js";
import { StateTimeline, } from "../core/util/StateTimeline.js";
import { isDefined, isUndef } from "../core/util/TypeCheck.js";
import { assert, assertContextRunning } from "../core/util/Debug.js";
import { GT } from "../core/util/Math.js";
/**
 * Base class for sources.
 * start/stop of this.context.transport.
 *
 * ```
 * // Multiple state change events can be chained together,
 * // but must be set in the correct order and with ascending times
 * // OK
 * state.start().stop("+0.2");
 * // OK
 * state.start().stop("+0.2").start("+0.4").stop("+0.7")
 * // BAD
 * state.stop("+0.2").start();
 * // BAD
 * state.start("+0.3").stop("+0.2");
 * ```
 */
export class Source extends ToneAudioNode {
    constructor(options) {
        super(options);
        /**
         * Sources have no inputs
         */
        this.input = undefined;
        /**
         * Keep track of the scheduled state.
         */
        this._state = new StateTimeline("stopped");
        /**
         * The synced `start` callback function from the transport
         */
        this._synced = false;
        /**
         * Keep track of all of the scheduled event ids
         */
        this._scheduled = [];
        /**
         * Placeholder functions for syncing/unsyncing to transport
         */
        this._syncedStart = noOp;
        this._syncedStop = noOp;
        this._state.memory = 100;
        this._state.increasing = true;
        this._volume = this.output = new Volume({
            context: this.context,
            mute: options.mute,
            volume: options.volume,
        });
        this.volume = this._volume.volume;
        readOnly(this, "volume");
        this.onstop = options.onstop;
    }
    static getDefaults() {
        return Object.assign(ToneAudioNode.getDefaults(), {
            mute: false,
            onstop: noOp,
            volume: 0,
        });
    }
    /**
     * Returns the playback state of the source, either "started" or "stopped".
     * @example
     * const player = new Tone.Player("https://tonejs.github.io/audio/berklee/ahntone_c3.mp3", () => {
     * 	player.start();
     * 	console.log(player.state);
     * }).toDestination();
     */
    get state() {
        if (this._synced) {
            if (this.context.transport.state === "started") {
                return this._state.getValueAtTime(this.context.transport.seconds);
            }
            else {
                return "stopped";
            }
        }
        else {
            return this._state.getValueAtTime(this.now());
        }
    }
    /**
     * Mute the output.
     * @example
     * const osc = new Tone.Oscillator().toDestination().start();
     * // mute the output
     * osc.mute = true;
     */
    get mute() {
        return this._volume.mute;
    }
    set mute(mute) {
        this._volume.mute = mute;
    }
    /**
     * Ensure that the scheduled time is not before the current time.
     * Should only be used when scheduled unsynced.
     */
    _clampToCurrentTime(time) {
        if (this._synced) {
            return time;
        }
        else {
            return Math.max(time, this.context.currentTime);
        }
    }
    /**
     * Start the source at the specified time. If no time is given,
     * start the source now.
     * @param  time When the source should be started.
     * @example
     * const source = new Tone.Oscillator().toDestination();
     * source.start("+0.5"); // starts the source 0.5 seconds from now
     */
    start(time, offset, duration) {
        let computedTime = isUndef(time) && this._synced
            ? this.context.transport.seconds
            : this.toSeconds(time);
        computedTime = this._clampToCurrentTime(computedTime);
        // if it's started, stop it and restart it
        if (!this._synced &&
            this._state.getValueAtTime(computedTime) === "started") {
            // time should be strictly greater than the previous start time
            assert(GT(computedTime, this._state.get(computedTime).time), "Start time must be strictly greater than previous start time");
            this._state.cancel(computedTime);
            this._state.setStateAtTime("started", computedTime);
            this.log("restart", computedTime);
            this.restart(computedTime, offset, duration);
        }
        else {
            this.log("start", computedTime);
            this._state.setStateAtTime("started", computedTime);
            if (this._synced) {
                // add the offset time to the event
                const event = this._state.get(computedTime);
                if (event) {
                    event.offset = this.toSeconds(defaultArg(offset, 0));
                    event.duration = duration
                        ? this.toSeconds(duration)
                        : undefined;
                }
                const sched = this.context.transport.schedule((t) => {
                    this._start(t, offset, duration);
                }, computedTime);
                this._scheduled.push(sched);
                // if the transport is already started
                // and the time is greater than where the transport is
                if (this.context.transport.state === "started" &&
                    this.context.transport.getSecondsAtTime(this.immediate()) >
                        computedTime) {
                    this._syncedStart(this.now(), this.context.transport.seconds);
                }
            }
            else {
                assertContextRunning(this.context);
                this._start(computedTime, offset, duration);
            }
        }
        return this;
    }
    /**
     * Stop the source at the specified time. If no time is given,
     * stop the source now.
     * @param  time When the source should be stopped.
     * @example
     * const source = new Tone.Oscillator().toDestination();
     * source.start();
     * source.stop("+0.5"); // stops the source 0.5 seconds from now
     */
    stop(time) {
        let computedTime = isUndef(time) && this._synced
            ? this.context.transport.seconds
            : this.toSeconds(time);
        computedTime = this._clampToCurrentTime(computedTime);
        if (this._state.getValueAtTime(computedTime) === "started" ||
            isDefined(this._state.getNextState("started", computedTime))) {
            this.log("stop", computedTime);
            if (!this._synced) {
                this._stop(computedTime);
            }
            else {
                const sched = this.context.transport.schedule(this._stop.bind(this), computedTime);
                this._scheduled.push(sched);
            }
            this._state.cancel(computedTime);
            this._state.setStateAtTime("stopped", computedTime);
        }
        return this;
    }
    /**
     * Restart the source.
     */
    restart(time, offset, duration) {
        time = this.toSeconds(time);
        if (this._state.getValueAtTime(time) === "started") {
            this._state.cancel(time);
            this._restart(time, offset, duration);
        }
        return this;
    }
    /**
     * Sync the source to the Transport so that all subsequent
     * calls to `start` and `stop` are synced to the TransportTime
     * instead of the AudioContext time.
     *
     * @example
     * const osc = new Tone.Oscillator().toDestination();
     * // sync the source so that it plays between 0 and 0.3 on the Transport's timeline
     * osc.sync().start(0).stop(0.3);
     * // start the transport.
     * Tone.Transport.start();
     * // set it to loop once a second
     * Tone.Transport.loop = true;
     * Tone.Transport.loopEnd = 1;
     */
    sync() {
        if (!this._synced) {
            this._synced = true;
            this._syncedStart = (time, offset) => {
                if (GT(offset, 0)) {
                    // get the playback state at that time
                    const stateEvent = this._state.get(offset);
                    // listen for start events which may occur in the middle of the sync'ed time
                    if (stateEvent &&
                        stateEvent.state === "started" &&
                        stateEvent.time !== offset) {
                        // get the offset
                        const startOffset = offset - this.toSeconds(stateEvent.time);
                        let duration;
                        if (stateEvent.duration) {
                            duration =
                                this.toSeconds(stateEvent.duration) -
                                    startOffset;
                        }
                        this._start(time, this.toSeconds(stateEvent.offset) + startOffset, duration);
                    }
                }
            };
            this._syncedStop = (time) => {
                const seconds = this.context.transport.getSecondsAtTime(Math.max(time - this.sampleTime, 0));
                if (this._state.getValueAtTime(seconds) === "started") {
                    this._stop(time);
                }
            };
            this.context.transport.on("start", this._syncedStart);
            this.context.transport.on("loopStart", this._syncedStart);
            this.context.transport.on("stop", this._syncedStop);
            this.context.transport.on("pause", this._syncedStop);
            this.context.transport.on("loopEnd", this._syncedStop);
        }
        return this;
    }
    /**
     * Unsync the source to the Transport.
     * @see {@link sync}
     */
    unsync() {
        if (this._synced) {
            this.context.transport.off("stop", this._syncedStop);
            this.context.transport.off("pause", this._syncedStop);
            this.context.transport.off("loopEnd", this._syncedStop);
            this.context.transport.off("start", this._syncedStart);
            this.context.transport.off("loopStart", this._syncedStart);
        }
        this._synced = false;
        // clear all of the scheduled ids
        this._scheduled.forEach((id) => this.context.transport.clear(id));
        this._scheduled = [];
        this._state.cancel(0);
        // stop it also
        this._stop(0);
        return this;
    }
    /**
     * Clean up.
     */
    dispose() {
        super.dispose();
        this.onstop = noOp;
        this.unsync();
        this._volume.dispose();
        this._state.dispose();
        return this;
    }
}
//# sourceMappingURL=Source.js.map