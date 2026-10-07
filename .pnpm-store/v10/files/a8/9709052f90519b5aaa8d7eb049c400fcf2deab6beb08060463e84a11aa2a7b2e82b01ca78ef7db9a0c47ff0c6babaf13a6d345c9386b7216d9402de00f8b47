import { Gain } from "../../core/context/Gain.js";
import { Param } from "../../core/context/Param.js";
import { ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { Decibels } from "../../core/type/Units.js";
interface VolumeOptions extends ToneAudioNodeOptions {
    volume: Decibels;
    mute: boolean;
}
/**
 * Volume is a simple volume node, useful for creating a volume fader.
 *
 * @example
 * const vol = new Tone.Volume(-12).toDestination();
 * const osc = new Tone.Oscillator().connect(vol).start();
 * @category Component
 */
export declare class Volume extends ToneAudioNode<VolumeOptions> {
    readonly name: string;
    /**
     * the output node
     */
    output: Gain<"decibels">;
    /**
     * Input and output are the same
     */
    input: Gain<"decibels">;
    /**
     * The unmuted volume
     */
    private _unmutedVolume;
    /**
     * The volume control in decibels.
     * @example
     * const vol = new Tone.Volume().toDestination();
     * const osc = new Tone.Oscillator().connect(vol).start();
     * vol.volume.value = -20;
     */
    volume: Param<"decibels">;
    /**
     * @param volume the initial volume in decibels
     */
    constructor(volume?: Decibels);
    constructor(options?: Partial<VolumeOptions>);
    static getDefaults(): VolumeOptions;
    /**
     * Mute the output.
     * @example
     * const vol = new Tone.Volume(-12).toDestination();
     * const osc = new Tone.Oscillator().connect(vol).start();
     * // mute the output
     * vol.mute = true;
     */
    get mute(): boolean;
    set mute(mute: boolean);
    /**
     * clean up
     */
    dispose(): this;
}
export {};
