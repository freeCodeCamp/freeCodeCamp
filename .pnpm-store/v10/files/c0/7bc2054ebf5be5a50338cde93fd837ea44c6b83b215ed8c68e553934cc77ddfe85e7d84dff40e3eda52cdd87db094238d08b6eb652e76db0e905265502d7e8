import { Gain } from "../../core/context/Gain.js";
import { ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
export interface SoloOptions extends ToneAudioNodeOptions {
    solo: boolean;
}
/**
 * Solo lets you isolate a specific audio stream. When an instance is set to `solo=true`,
 * it will mute all other instances of Solo.
 * @example
 * const soloA = new Tone.Solo().toDestination();
 * const oscA = new Tone.Oscillator("C4", "sawtooth").connect(soloA);
 * const soloB = new Tone.Solo().toDestination();
 * const oscB = new Tone.Oscillator("E4", "square").connect(soloB);
 * soloA.solo = true;
 * // no audio will pass through soloB
 * @category Component
 */
export declare class Solo extends ToneAudioNode<SoloOptions> {
    readonly name: string;
    readonly input: Gain;
    readonly output: Gain;
    /**
     * @param solo If the connection should be initially solo'ed.
     */
    constructor(solo?: boolean);
    constructor(options?: Partial<SoloOptions>);
    static getDefaults(): SoloOptions;
    /**
     * Hold all of the solo'ed tracks belonging to a specific context
     */
    private static _allSolos;
    /**
     * Hold the currently solo'ed instance(s)
     */
    private static _soloed;
    /**
     * Isolates this instance and mutes all other instances of Solo.
     * Only one instance can be soloed at a time. A soloed
     * instance will report `solo=false` when another instance is soloed.
     */
    get solo(): boolean;
    set solo(solo: boolean);
    /**
     * If the current instance is muted, i.e. another instance is soloed
     */
    get muted(): boolean;
    /**
     * Add this to the soloed array
     */
    private _addSolo;
    /**
     * Remove this from the soloed array
     */
    private _removeSolo;
    /**
     * Is this on the soloed array
     */
    private _isSoloed;
    /**
     * Returns true if no one is soloed
     */
    private _noSolos;
    /**
     * Solo the current instance and unsolo all other instances.
     */
    private _updateSolo;
    dispose(): this;
}
