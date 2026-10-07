import { Param } from "../../core/context/Param.js";
import { InputNode, OutputNode, ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { AudioRange, Decibels } from "../../core/type/Units.js";
export interface PanVolOptions extends ToneAudioNodeOptions {
    pan: AudioRange;
    volume: Decibels;
    mute: boolean;
    channelCount: number;
}
/**
 * PanVol is a Tone.Panner and Tone.Volume in one.
 * @example
 * // pan the incoming signal left and drop the volume
 * const panVol = new Tone.PanVol(-0.25, -12).toDestination();
 * const osc = new Tone.Oscillator().connect(panVol).start();
 * @category Component
 */
export declare class PanVol extends ToneAudioNode<PanVolOptions> {
    readonly name: string;
    readonly input: InputNode;
    readonly output: OutputNode;
    /**
     * The panning node
     */
    private _panner;
    /**
     * The L/R panning control. -1 = hard left, 1 = hard right.
     * @min -1
     * @max 1
     */
    readonly pan: Param<"audioRange">;
    /**
     * The volume node
     */
    private _volume;
    /**
     * The volume control in decibels.
     */
    readonly volume: Param<"decibels">;
    /**
     * @param pan the initial pan
     * @param volume The output volume.
     */
    constructor(pan?: AudioRange, volume?: Decibels);
    constructor(options?: Partial<PanVolOptions>);
    static getDefaults(): PanVolOptions;
    /**
     * Mute/unmute the volume
     */
    get mute(): boolean;
    set mute(mute: boolean);
    dispose(): this;
}
