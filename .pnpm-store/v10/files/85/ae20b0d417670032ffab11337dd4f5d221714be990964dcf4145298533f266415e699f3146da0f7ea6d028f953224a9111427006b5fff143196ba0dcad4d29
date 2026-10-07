import { Effect, EffectOptions } from "./Effect.js";
export interface DistortionOptions extends EffectOptions {
    distortion: number;
    oversample: OverSampleType;
}
/**
 * A simple distortion effect using Tone.WaveShaper.
 * Algorithm from [this stackoverflow answer](http://stackoverflow.com/a/22313408).
 * Read more about distortion on [Wikipedia](https://en.wikipedia.org/wiki/Distortion_(music).
 * @example
 * const dist = new Tone.Distortion(0.8).toDestination();
 * const fm = new Tone.FMSynth().connect(dist);
 * fm.triggerAttackRelease("A1", "8n");
 * @category Effect
 */
export declare class Distortion extends Effect<DistortionOptions> {
    readonly name: string;
    /**
     * The waveshaper which does the distortion
     */
    private _shaper;
    /**
     * Stores the distortion value
     */
    private _distortion;
    /**
     * @param distortion The amount of distortion (nominal range of 0-1)
     */
    constructor(distortion?: number);
    constructor(options?: Partial<DistortionOptions>);
    static getDefaults(): DistortionOptions;
    /**
     * The amount of distortion. Nominal range is between 0 and 1.
     */
    get distortion(): number;
    set distortion(amount: number);
    /**
     * The oversampling of the effect. Can either be "none", "2x" or "4x".
     */
    get oversample(): OverSampleType;
    set oversample(oversampling: OverSampleType);
    dispose(): this;
}
