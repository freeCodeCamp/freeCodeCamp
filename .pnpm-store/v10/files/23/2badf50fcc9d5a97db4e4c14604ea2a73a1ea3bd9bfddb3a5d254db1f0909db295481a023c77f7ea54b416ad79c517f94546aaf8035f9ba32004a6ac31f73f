import { ToneAudioBuffer } from "../core/context/ToneAudioBuffer.js";
import { Frequency, MidiNote, NormalRange, Note, Time } from "../core/type/Units.js";
import { Instrument, InstrumentOptions } from "../instrument/Instrument.js";
import { ToneBufferSourceCurve } from "../source/buffer/ToneBufferSource.js";
interface SamplesMap {
    [note: string]: ToneAudioBuffer | AudioBuffer | string;
    [midi: number]: ToneAudioBuffer | AudioBuffer | string;
}
export interface SamplerOptions extends InstrumentOptions {
    attack: Time;
    release: Time;
    onload: () => void;
    onerror: (error: Error) => void;
    baseUrl: string;
    curve: ToneBufferSourceCurve;
    urls: SamplesMap;
}
/**
 * Pass in an object which maps the note's pitch or midi value to the url,
 * then you can trigger the attack and release of that note like other instruments.
 * By automatically repitching the samples, it is possible to play pitches which
 * were not explicitly included which can save loading time.
 *
 * For sample or buffer playback where repitching is not necessary,
 * use {@link Player}.
 * @example
 * const sampler = new Tone.Sampler({
 * 	urls: {
 * 		A1: "A1.mp3",
 * 		A2: "A2.mp3",
 * 	},
 * 	baseUrl: "https://tonejs.github.io/audio/casio/",
 * 	onload: () => {
 * 		sampler.triggerAttackRelease(["C1", "E1", "G1", "B1"], 0.5);
 * 	}
 * }).toDestination();
 * @category Instrument
 */
export declare class Sampler extends Instrument<SamplerOptions> {
    readonly name: string;
    /**
     * The stored and loaded buffers
     */
    private _buffers;
    /**
     * The object of all currently playing BufferSources
     */
    private _activeSources;
    /**
     * The envelope applied to the beginning of the sample.
     * @min 0
     * @max 1
     */
    attack: Time;
    /**
     * The envelope applied to the end of the envelope.
     * @min 0
     * @max 1
     */
    release: Time;
    /**
     * The shape of the attack/release curve.
     * Either "linear" or "exponential"
     */
    curve: ToneBufferSourceCurve;
    /**
     * @param samples An object of samples mapping either Midi Note Numbers or
     * 			Scientific Pitch Notation to the url of that sample.
     * @param onload The callback to invoke when all of the samples are loaded.
     * @param baseUrl The root URL of all of the samples, which is prepended to all the URLs.
     */
    constructor(samples?: SamplesMap, onload?: () => void, baseUrl?: string);
    /**
     * @param samples An object of samples mapping either Midi Note Numbers or
     * 			Scientific Pitch Notation to the url of that sample.
     * @param options The remaining options associated with the sampler
     */
    constructor(samples?: SamplesMap, options?: Partial<Omit<SamplerOptions, "urls">>);
    constructor(options?: Partial<SamplerOptions>);
    static getDefaults(): SamplerOptions;
    /**
     * Returns the difference in steps between the given midi note at the closets sample.
     */
    private _findClosest;
    /**
     * @param  notes	The note to play, or an array of notes.
     * @param  time     When to play the note
     * @param  velocity The velocity to play the sample back.
     */
    triggerAttack(notes: Frequency | Frequency[], time?: Time, velocity?: NormalRange): this;
    /**
     * @param  notes	The note to release, or an array of notes.
     * @param  time     	When to release the note.
     */
    triggerRelease(notes: Frequency | Frequency[], time?: Time): this;
    /**
     * Release all currently active notes.
     * @param  time     	When to release the notes.
     */
    releaseAll(time?: Time): this;
    sync(): this;
    /**
     * Invoke the attack phase, then after the duration, invoke the release.
     * @param  notes	The note to play and release, or an array of notes.
     * @param  duration The time the note should be held
     * @param  time     When to start the attack
     * @param  velocity The velocity of the attack
     */
    triggerAttackRelease(notes: Frequency[] | Frequency, duration: Time | Time[], time?: Time, velocity?: NormalRange): this;
    /**
     * Add a note to the sampler.
     * @param  note      The buffer's pitch.
     * @param  url  Either the url of the buffer, or a buffer which will be added with the given name.
     * @param  callback  The callback to invoke when the url is loaded.
     */
    add(note: Note | MidiNote, url: string | ToneAudioBuffer | AudioBuffer, callback?: () => void): this;
    /**
     * If the buffers are loaded or not
     */
    get loaded(): boolean;
    /**
     * Clean up
     */
    dispose(): this;
}
export {};
