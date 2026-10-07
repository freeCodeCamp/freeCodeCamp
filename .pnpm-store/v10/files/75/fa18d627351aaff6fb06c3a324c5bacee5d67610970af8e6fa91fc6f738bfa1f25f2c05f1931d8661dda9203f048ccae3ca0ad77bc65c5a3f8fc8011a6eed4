import { Panner } from "../component/channel/Panner.js";
import { LFOEffect, LFOEffectOptions } from "./LFOEffect.js";
import { Frequency } from "../core/type/Units.js";
export interface AutoPannerOptions extends LFOEffectOptions {
    channelCount: number;
}
/**
 * AutoPanner is a {@link Panner} with an {@link LFO} connected to the pan amount.
 * [Related Reading](https://www.ableton.com/en/blog/autopan-chopper-effect-and-more-liveschool/).
 *
 * @example
 * // create an autopanner and start it
 * const autoPanner = new Tone.AutoPanner("4n").toDestination().start();
 * // route an oscillator through the panner and start it
 * const oscillator = new Tone.Oscillator().connect(autoPanner).start();
 * @category Effect
 */
export declare class AutoPanner extends LFOEffect<AutoPannerOptions> {
    readonly name: string;
    /**
     * The filter node
     */
    readonly _panner: Panner;
    /**
     * @param frequency Rate of left-right oscillation.
     */
    constructor(frequency?: Frequency);
    constructor(options?: Partial<AutoPannerOptions>);
    static getDefaults(): AutoPannerOptions;
    dispose(): this;
}
