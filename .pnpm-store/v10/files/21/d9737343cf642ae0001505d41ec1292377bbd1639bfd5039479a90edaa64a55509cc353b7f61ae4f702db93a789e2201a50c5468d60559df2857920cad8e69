import { Positive } from "../core/type/Units.js";
import { RecursivePartial } from "../core/util/Interface.js";
import { Multiply } from "../signal/Multiply.js";
import { ModulationSynth, ModulationSynthOptions } from "./ModulationSynth.js";
export interface FMSynthOptions extends ModulationSynthOptions {
    modulationIndex: Positive;
}
/**
 * FMSynth is composed of two Tone.Synths where one Tone.Synth modulates
 * the frequency of a second Tone.Synth. A lot of spectral content
 * can be explored using the modulationIndex parameter. Read more about
 * frequency modulation synthesis on Sound On Sound: [Part 1](https://web.archive.org/web/20160403123704/http://www.soundonsound.com/sos/apr00/articles/synthsecrets.htm), [Part 2](https://web.archive.org/web/20160403115835/http://www.soundonsound.com/sos/may00/articles/synth.htm).
 *
 * @example
 * const fmSynth = new Tone.FMSynth().toDestination();
 * fmSynth.triggerAttackRelease("C5", "4n");
 *
 * @category Instrument
 */
export declare class FMSynth extends ModulationSynth<FMSynthOptions> {
    readonly name: string;
    /**
     * The modulation index which essentially the depth or amount of the modulation. It is the
     * ratio of the frequency of the modulating signal (mf) to the amplitude of the
     * modulating signal (ma) -- as in ma/mf.
     */
    readonly modulationIndex: Multiply;
    constructor(options?: RecursivePartial<FMSynthOptions>);
    static getDefaults(): FMSynthOptions;
    dispose(): this;
}
