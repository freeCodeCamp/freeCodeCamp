import { MidiClass } from "../core/type/Midi.js";
import { deepMerge, omitFromObject, optionsFromArguments, } from "../core/util/Defaults.js";
import { isArray, isNumber } from "../core/util/TypeCheck.js";
import { Instrument } from "./Instrument.js";
import { Monophonic } from "./Monophonic.js";
import { Synth } from "./Synth.js";
import { assert, warn } from "../core/util/Debug.js";
/**
 * PolySynth handles voice creation and allocation for any
 * instruments passed in as the second parameter. PolySynth is
 * not a synthesizer by itself, it merely manages voices of
 * one of the other types of synths, allowing any of the
 * monophonic synthesizers to be polyphonic.
 *
 * @example
 * const synth = new Tone.PolySynth().toDestination();
 * // set the attributes across all the voices using 'set'
 * synth.set({ detune: -1200 });
 * // play a chord
 * synth.triggerAttackRelease(["C4", "E4", "A4"], 1);
 * @category Instrument
 */
export class PolySynth extends Instrument {
    constructor() {
        const options = optionsFromArguments(PolySynth.getDefaults(), arguments, ["voice", "options"]);
        super(options);
        this.name = "PolySynth";
        /**
         * The voices which are not currently in use
         */
        this._availableVoices = [];
        /**
         * The currently active voices
         */
        this._activeVoices = [];
        /**
         * All of the allocated voices for this synth.
         */
        this._voices = [];
        /**
         * The GC timeout. Held so that it could be cancelled when the node is disposed.
         */
        this._gcTimeout = -1;
        /**
         * A moving average of the number of active voices
         */
        this._averageActiveVoices = 0;
        /**
         * The release which is scheduled to the timeline.
         */
        this._syncedRelease = (time) => this.releaseAll(time);
        // check against the old API (pre 14.3.0)
        assert(!isNumber(options.voice), "DEPRECATED: The polyphony count is no longer the first argument.");
        const defaults = options.voice.getDefaults();
        this.options = Object.assign(defaults, options.options);
        this.voice = options.voice;
        this.maxPolyphony = options.maxPolyphony;
        // create the first voice
        this._dummyVoice = this._getNextAvailableVoice();
        // remove it from the voices list
        const index = this._voices.indexOf(this._dummyVoice);
        this._voices.splice(index, 1);
        // kick off the GC interval
        this._gcTimeout = this.context.setInterval(this._collectGarbage.bind(this), 1);
    }
    static getDefaults() {
        return Object.assign(Instrument.getDefaults(), {
            maxPolyphony: 32,
            options: {},
            voice: Synth,
        });
    }
    /**
     * The number of active voices.
     */
    get activeVoices() {
        return this._activeVoices.length;
    }
    /**
     * Invoked when the source is done making sound, so that it can be
     * readded to the pool of available voices
     */
    _makeVoiceAvailable(voice) {
        this._availableVoices.push(voice);
        // remove the midi note from 'active voices'
        const activeVoiceIndex = this._activeVoices.findIndex((e) => e.voice === voice);
        this._activeVoices.splice(activeVoiceIndex, 1);
    }
    /**
     * Get an available voice from the pool of available voices.
     * If one is not available and the maxPolyphony limit is reached,
     * steal a voice, otherwise return null.
     */
    _getNextAvailableVoice() {
        // if there are available voices, return the first one
        if (this._availableVoices.length) {
            return this._availableVoices.shift();
        }
        else if (this._voices.length < this.maxPolyphony) {
            // otherwise if there is still more maxPolyphony, make a new voice
            const voice = new this.voice(Object.assign(this.options, {
                context: this.context,
                onsilence: this._makeVoiceAvailable.bind(this),
            }));
            assert(voice instanceof Monophonic, "Voice must extend Monophonic class");
            voice.connect(this.output);
            this._voices.push(voice);
            return voice;
        }
        else {
            warn("Max polyphony exceeded. Note dropped.");
        }
    }
    /**
     * Occasionally check if there are any allocated voices which can be cleaned up.
     */
    _collectGarbage() {
        this._averageActiveVoices = Math.max(this._averageActiveVoices * 0.95, this.activeVoices);
        if (this._availableVoices.length &&
            this._voices.length > Math.ceil(this._averageActiveVoices + 1)) {
            // take off an available note
            const firstAvail = this._availableVoices.shift();
            const index = this._voices.indexOf(firstAvail);
            this._voices.splice(index, 1);
            if (!this.context.isOffline) {
                firstAvail.dispose();
            }
        }
    }
    /**
     * Internal method which triggers the attack
     */
    _triggerAttack(notes, time, velocity) {
        notes.forEach((note) => {
            const midiNote = new MidiClass(this.context, note).toMidi();
            const voice = this._getNextAvailableVoice();
            if (voice) {
                voice.triggerAttack(note, time, velocity);
                this._activeVoices.push({
                    midi: midiNote,
                    voice,
                    released: false,
                });
                this.log("triggerAttack", note, time);
            }
        });
    }
    /**
     * Internal method which triggers the release
     */
    _triggerRelease(notes, time) {
        notes.forEach((note) => {
            const midiNote = new MidiClass(this.context, note).toMidi();
            const event = this._activeVoices.find(({ midi, released }) => midi === midiNote && !released);
            if (event) {
                // trigger release on that note
                event.voice.triggerRelease(time);
                // mark it as released
                event.released = true;
                this.log("triggerRelease", note, time);
            }
        });
    }
    /**
     * Schedule the attack/release events. If the time is in the future, then it should set a timeout
     * to wait for just-in-time scheduling
     */
    _scheduleEvent(type, notes, time, velocity) {
        assert(!this.disposed, "Synth was already disposed");
        // if the notes are greater than this amount of time in the future, they should be scheduled with setTimeout
        if (time <= this.now()) {
            // do it immediately
            if (type === "attack") {
                this._triggerAttack(notes, time, velocity);
            }
            else {
                this._triggerRelease(notes, time);
            }
        }
        else {
            // schedule it to start in the future
            this.context.setTimeout(() => {
                if (!this.disposed) {
                    this._scheduleEvent(type, notes, time, velocity);
                }
            }, time - this.now());
        }
    }
    /**
     * Trigger the attack portion of the note
     * @param  notes The notes to play. Accepts a single Frequency or an array of frequencies.
     * @param  time  The start time of the note.
     * @param velocity The velocity of the note.
     * @example
     * const synth = new Tone.PolySynth(Tone.FMSynth).toDestination();
     * // trigger a chord immediately with a velocity of 0.2
     * synth.triggerAttack(["Ab3", "C4", "F5"], Tone.now(), 0.2);
     */
    triggerAttack(notes, time, velocity) {
        if (!Array.isArray(notes)) {
            notes = [notes];
        }
        const computedTime = this.toSeconds(time);
        this._scheduleEvent("attack", notes, computedTime, velocity);
        return this;
    }
    /**
     * Trigger the release of the note. Unlike monophonic instruments,
     * a note (or array of notes) needs to be passed in as the first argument.
     * @param  notes The notes to play. Accepts a single Frequency or an array of frequencies.
     * @param  time  When the release will be triggered.
     * @example
     * const poly = new Tone.PolySynth(Tone.AMSynth).toDestination();
     * poly.triggerAttack(["Ab3", "C4", "F5"]);
     * // trigger the release of the given notes.
     * poly.triggerRelease(["Ab3", "C4"], "+1");
     * poly.triggerRelease("F5", "+3");
     */
    triggerRelease(notes, time) {
        if (!Array.isArray(notes)) {
            notes = [notes];
        }
        const computedTime = this.toSeconds(time);
        this._scheduleEvent("release", notes, computedTime);
        return this;
    }
    /**
     * Trigger the attack and release after the specified duration
     * @param  notes The notes to play. Accepts a single  Frequency or an array of frequencies.
     * @param  duration the duration of the note
     * @param  time  if no time is given, defaults to now
     * @param  velocity the velocity of the attack (0-1)
     * @example
     * const poly = new Tone.PolySynth(Tone.AMSynth).toDestination();
     * // can pass in an array of durations as well
     * poly.triggerAttackRelease(["Eb3", "G4", "Bb4", "D5"], [4, 3, 2, 1]);
     */
    triggerAttackRelease(notes, duration, time, velocity) {
        const computedTime = this.toSeconds(time);
        this.triggerAttack(notes, computedTime, velocity);
        if (isArray(duration)) {
            assert(isArray(notes), "If the duration is an array, the notes must also be an array");
            notes = notes;
            for (let i = 0; i < notes.length; i++) {
                const d = duration[Math.min(i, duration.length - 1)];
                const durationSeconds = this.toSeconds(d);
                assert(durationSeconds > 0, "The duration must be greater than 0");
                this.triggerRelease(notes[i], computedTime + durationSeconds);
            }
        }
        else {
            const durationSeconds = this.toSeconds(duration);
            assert(durationSeconds > 0, "The duration must be greater than 0");
            this.triggerRelease(notes, computedTime + durationSeconds);
        }
        return this;
    }
    sync() {
        if (this._syncState()) {
            this._syncMethod("triggerAttack", 1);
            this._syncMethod("triggerRelease", 1);
            // make sure that the sound doesn't play after its been stopped
            this.context.transport.on("stop", this._syncedRelease);
            this.context.transport.on("pause", this._syncedRelease);
            this.context.transport.on("loopEnd", this._syncedRelease);
        }
        return this;
    }
    /**
     * Set a member/attribute of the voices
     * @example
     * const poly = new Tone.PolySynth().toDestination();
     * // set all of the voices using an options object for the synth type
     * poly.set({
     * 	envelope: {
     * 		attack: 0.25
     * 	}
     * });
     * poly.triggerAttackRelease("Bb3", 0.2);
     */
    set(options) {
        // remove options which are controlled by the PolySynth
        const sanitizedOptions = omitFromObject(options, [
            "onsilence",
            "context",
        ]);
        // store all of the options
        this.options = deepMerge(this.options, sanitizedOptions);
        this._voices.forEach((voice) => voice.set(sanitizedOptions));
        this._dummyVoice.set(sanitizedOptions);
        return this;
    }
    get() {
        return this._dummyVoice.get();
    }
    /**
     * Trigger the release portion of all the currently active voices immediately.
     * Useful for silencing the synth.
     */
    releaseAll(time) {
        const computedTime = this.toSeconds(time);
        this._activeVoices.forEach(({ voice }) => {
            voice.triggerRelease(computedTime);
        });
        return this;
    }
    dispose() {
        super.dispose();
        this._dummyVoice.dispose();
        this._voices.forEach((v) => v.dispose());
        this._activeVoices = [];
        this._availableVoices = [];
        this.context.clearInterval(this._gcTimeout);
        return this;
    }
}
//# sourceMappingURL=PolySynth.js.map