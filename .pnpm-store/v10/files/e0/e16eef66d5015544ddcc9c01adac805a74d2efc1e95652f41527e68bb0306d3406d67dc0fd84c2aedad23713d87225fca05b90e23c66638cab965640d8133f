import { RecursivePartial } from "../core/util/Interface.js";
import { ModulationSynth, ModulationSynthOptions } from "./ModulationSynth.js";
export type AMSynthOptions = ModulationSynthOptions;
/**
 * AMSynth uses the output of one Tone.Synth to modulate the
 * amplitude of another Tone.Synth. The harmonicity (the ratio between
 * the two signals) affects the timbre of the output signal greatly.
 * Read more about Amplitude Modulation Synthesis on
 * [SoundOnSound](https://web.archive.org/web/20160404103653/http://www.soundonsound.com:80/sos/mar00/articles/synthsecrets.htm).
 *
 * @example
 * const synth = new Tone.AMSynth().toDestination();
 * synth.triggerAttackRelease("C4", "4n");
 *
 * @category Instrument
 */
export declare class AMSynth extends ModulationSynth<AMSynthOptions> {
    readonly name: string;
    /**
     * Scale the oscillator from -1,1 to 0-1
     */
    private _modulationScale;
    constructor(options?: RecursivePartial<AMSynthOptions>);
    dispose(): this;
}
