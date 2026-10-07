import { Volume } from "../component/channel/Volume.js";
import { ToneAudioNode, } from "../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { readOnly } from "../core/util/Interface.js";
/**
 * Base-class for all instruments
 */
export class Instrument extends ToneAudioNode {
    constructor() {
        const options = optionsFromArguments(Instrument.getDefaults(), arguments);
        super(options);
        /**
         * Keep track of all events scheduled to the transport
         * when the instrument is 'synced'
         */
        this._scheduledEvents = [];
        /**
         * If the instrument is currently synced
         */
        this._synced = false;
        this._original_triggerAttack = this.triggerAttack;
        this._original_triggerRelease = this.triggerRelease;
        /**
         * The release which is scheduled to the timeline.
         */
        this._syncedRelease = (time) => this._original_triggerRelease(time);
        this._volume = this.output = new Volume({
            context: this.context,
            volume: options.volume,
        });
        this.volume = this._volume.volume;
        readOnly(this, "volume");
    }
    static getDefaults() {
        return Object.assign(ToneAudioNode.getDefaults(), {
            volume: 0,
        });
    }
    /**
     * Sync the instrument to the Transport. All subsequent calls of
     * {@link triggerAttack} and {@link triggerRelease} will be scheduled along the transport.
     * @example
     * const fmSynth = new Tone.FMSynth().toDestination();
     * fmSynth.volume.value = -6;
     * fmSynth.sync();
     * // schedule 3 notes when the transport first starts
     * fmSynth.triggerAttackRelease("C4", "8n", 0);
     * fmSynth.triggerAttackRelease("E4", "8n", "8n");
     * fmSynth.triggerAttackRelease("G4", "8n", "4n");
     * // start the transport to hear the notes
     * Tone.Transport.start();
     */
    sync() {
        if (this._syncState()) {
            this._syncMethod("triggerAttack", 1);
            this._syncMethod("triggerRelease", 0);
            this.context.transport.on("stop", this._syncedRelease);
            this.context.transport.on("pause", this._syncedRelease);
            this.context.transport.on("loopEnd", this._syncedRelease);
        }
        return this;
    }
    /**
     * set _sync
     */
    _syncState() {
        let changed = false;
        if (!this._synced) {
            this._synced = true;
            changed = true;
        }
        return changed;
    }
    /**
     * Wrap the given method so that it can be synchronized
     * @param method Which method to wrap and sync
     * @param  timePosition What position the time argument appears in
     */
    _syncMethod(method, timePosition) {
        const originalMethod = (this["_original_" + method] = this[method]);
        this[method] = (...args) => {
            const time = args[timePosition];
            const id = this.context.transport.schedule((t) => {
                args[timePosition] = t;
                originalMethod.apply(this, args);
            }, time);
            this._scheduledEvents.push(id);
        };
    }
    /**
     * Unsync the instrument from the Transport
     */
    unsync() {
        this._scheduledEvents.forEach((id) => this.context.transport.clear(id));
        this._scheduledEvents = [];
        if (this._synced) {
            this._synced = false;
            this.triggerAttack = this._original_triggerAttack;
            this.triggerRelease = this._original_triggerRelease;
            this.context.transport.off("stop", this._syncedRelease);
            this.context.transport.off("pause", this._syncedRelease);
            this.context.transport.off("loopEnd", this._syncedRelease);
        }
        return this;
    }
    /**
     * Trigger the attack and then the release after the duration.
     * @param  note     The note to trigger.
     * @param  duration How long the note should be held for before
     *                         triggering the release. This value must be greater than 0.
     * @param time  When the note should be triggered.
     * @param  velocity The velocity the note should be triggered at.
     * @example
     * const synth = new Tone.Synth().toDestination();
     * // trigger "C4" for the duration of an 8th note
     * synth.triggerAttackRelease("C4", "8n");
     */
    triggerAttackRelease(note, duration, time, velocity) {
        const computedTime = this.toSeconds(time);
        const computedDuration = this.toSeconds(duration);
        this.triggerAttack(note, computedTime, velocity);
        this.triggerRelease(computedTime + computedDuration);
        return this;
    }
    /**
     * clean up
     * @returns {Instrument} this
     */
    dispose() {
        super.dispose();
        this._volume.dispose();
        this.unsync();
        this._scheduledEvents = [];
        return this;
    }
}
//# sourceMappingURL=Instrument.js.map