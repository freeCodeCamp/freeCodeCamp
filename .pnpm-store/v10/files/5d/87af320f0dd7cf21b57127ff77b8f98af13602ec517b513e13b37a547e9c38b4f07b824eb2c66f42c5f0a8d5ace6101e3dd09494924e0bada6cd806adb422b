import { MidSideEffect, MidSideEffectOptions } from "../effect/MidSideEffect.js";
import { Signal } from "../signal/Signal.js";
import { NormalRange } from "../core/type/Units.js";
export interface StereoWidenerOptions extends MidSideEffectOptions {
    width: NormalRange;
}
/**
 * Applies a width factor to the mid/side seperation.
 * 0 is all mid and 1 is all side.
 * Algorithm found in [kvraudio forums](http://www.kvraudio.com/forum/viewtopic.php?t=212587).
 * ```
 * Mid *= 2*(1-width)<br>
 * Side *= 2*width
 * ```
 * @category Effect
 */
export declare class StereoWidener extends MidSideEffect<StereoWidenerOptions> {
    readonly name: string;
    /**
     * The width control. 0 = 100% mid. 1 = 100% side. 0.5 = no change.
     */
    readonly width: Signal<"normalRange">;
    /**
     * Two times the (1-width) for the mid channel
     */
    private _twoTimesWidthMid;
    /**
     * Two times the width for the side channel
     */
    private _twoTimesWidthSide;
    /**
     * Mid multiplier
     */
    private _midMult;
    /**
     * 1 - width
     */
    private _oneMinusWidth;
    /**
     * Side multiplier
     */
    private _sideMult;
    /**
     * @param width The stereo width. A width of 0 is mono and 1 is stereo. 0.5 is no change.
     */
    constructor(width?: NormalRange);
    constructor(options?: Partial<StereoWidenerOptions>);
    static getDefaults(): StereoWidenerOptions;
    dispose(): this;
}
