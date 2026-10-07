import { Frequency, NormalRange, Time } from "../core/type/Units.js";
import { RecursivePartial } from "../core/util/Interface.js";
import { Instrument, InstrumentOptions } from "./Instrument.js";
import { MembraneSynth, MembraneSynthOptions } from "./MembraneSynth.js";
import { FMSynth, FMSynthOptions } from "./FMSynth.js";
import { AMSynth, AMSynthOptions } from "./AMSynth.js";
import { MonoSynth, MonoSynthOptions } from "./MonoSynth.js";
import { MetalSynth, MetalSynthOptions } from "./MetalSynth.js";
import { Monophonic } from "./Monophonic.js";
import { Synth, SynthOptions } from "./Synth.js";
type VoiceConstructor<V> = {
    getDefaults: () => VoiceOptions<V>;
} & (new (...args: any[]) => V);
type OmitMonophonicOptions<T> = Omit<T, "context" | "onsilence">;
type VoiceOptions<T> = T extends MembraneSynth ? MembraneSynthOptions : T extends MetalSynth ? MetalSynthOptions : T extends FMSynth ? FMSynthOptions : T extends MonoSynth ? MonoSynthOptions : T extends AMSynth ? AMSynthOptions : T extends Synth ? SynthOptions : T extends Monophonic<infer U> ? U : never;
/**
 * The settable synth options. excludes monophonic options.
 */
type PartialVoiceOptions<T> = RecursivePartial<OmitMonophonicOptions<VoiceOptions<T>>>;
export interface PolySynthOptions<Voice> extends InstrumentOptions {
    maxPolyphony: number;
    voice: VoiceConstructor<Voice>;
    options: PartialVoiceOptions<Voice>;
}
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
export declare class PolySynth<Voice extends Monophonic<any> = Synth> extends Instrument<VoiceOptions<Voice>> {
    readonly name: string;
    /**
     * The voices which are not currently in use
     */
    private _availableVoices;
    /**
     * The currently active voices
     */
    private _activeVoices;
    /**
     * All of the allocated voices for this synth.
     */
    private _voices;
    /**
     * The options that are set on the synth.
     */
    private options;
    /**
     * The polyphony limit.
     */
    maxPolyphony: number;
    /**
     * The voice constructor
     */
    private readonly voice;
    /**
     * A voice used for holding the get/set values
     */
    private _dummyVoice;
    /**
     * The GC timeout. Held so that it could be cancelled when the node is disposed.
     */
    private _gcTimeout;
    /**
     * A moving average of the number of active voices
     */
    private _averageActiveVoices;
    /**
     * @param voice The constructor of the voices
     * @param options	The options object to set the synth voice
     */
    constructor(voice?: VoiceConstructor<Voice>, options?: PartialVoiceOptions<Voice>);
    constructor(options?: Partial<PolySynthOptions<Voice>>);
    static getDefaults(): PolySynthOptions<Synth>;
    /**
     * The number of active voices.
     */
    get activeVoices(): number;
    /**
     * Invoked when the source is done making sound, so that it can be
     * readded to the pool of available voices
     */
    private _makeVoiceAvailable;
    /**
     * Get an available voice from the pool of available voices.
     * If one is not available and the maxPolyphony limit is reached,
     * steal a voice, otherwise return null.
     */
    private _getNextAvailableVoice;
    /**
     * Occasionally check if there are any allocated voices which can be cleaned up.
     */
    private _collectGarbage;
    /**
     * Internal method which triggers the attack
     */
    private _triggerAttack;
    /**
     * Internal method which triggers the release
     */
    private _triggerRelease;
    /**
     * Schedule the attack/release events. If the time is in the future, then it should set a timeout
     * to wait for just-in-time scheduling
     */
    private _scheduleEvent;
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
    triggerAttack(notes: Frequency | Frequency[], time?: Time, velocity?: NormalRange): this;
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
    triggerRelease(notes: Frequency | Frequency[], time?: Time): this;
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
    triggerAttackRelease(notes: Frequency | Frequency[], duration: Time | Time[], time?: Time, velocity?: NormalRange): this;
    sync(): this;
    /**
     * The release which is scheduled to the timeline.
     */
    protected _syncedRelease: (time: number) => this;
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
    set(options: RecursivePartial<VoiceOptions<Voice>>): this;
    get(): VoiceOptions<Voice>;
    /**
     * Trigger the release portion of all the currently active voices immediately.
     * Useful for silencing the synth.
     */
    releaseAll(time?: Time): this;
    dispose(): this;
}
export {};
