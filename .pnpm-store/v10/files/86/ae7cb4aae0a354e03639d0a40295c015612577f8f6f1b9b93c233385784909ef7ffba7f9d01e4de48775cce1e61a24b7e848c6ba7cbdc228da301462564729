import { Volume } from "../../component/channel/Volume.js";
import { Decibels } from "../type/Units.js";
import { Gain } from "./Gain.js";
import { Param } from "./Param.js";
import { ToneAudioNode, ToneAudioNodeOptions } from "./ToneAudioNode.js";
interface DestinationOptions extends ToneAudioNodeOptions {
    volume: Decibels;
    mute: boolean;
}
/**
 * A single master output which is connected to the
 * AudioDestinationNode (aka your speakers).
 * It provides useful conveniences such as the ability
 * to set the volume and mute the entire application.
 * It also gives you the ability to apply master effects to your application.
 *
 * @example
 * const oscillator = new Tone.Oscillator().start();
 * // the audio will go from the oscillator to the speakers
 * oscillator.connect(Tone.getDestination());
 * // a convenience for connecting to the master output is also provided:
 * oscillator.toDestination();
 * @category Core
 */
export declare class DestinationClass extends ToneAudioNode<DestinationOptions> {
    readonly name: string;
    input: Volume;
    output: Gain;
    /**
     * The volume of the master output in decibels. -Infinity is silent, and 0 is no change.
     * @example
     * const osc = new Tone.Oscillator().toDestination();
     * osc.start();
     * // ramp the volume down to silent over 10 seconds
     * Tone.getDestination().volume.rampTo(-Infinity, 10);
     */
    volume: Param<"decibels">;
    constructor(options: Partial<DestinationOptions>);
    static getDefaults(): DestinationOptions;
    /**
     * Mute the output.
     * @example
     * const oscillator = new Tone.Oscillator().start().toDestination();
     * setTimeout(() => {
     * 	// mute the output
     * 	Tone.Destination.mute = true;
     * }, 1000);
     */
    get mute(): boolean;
    set mute(mute: boolean);
    /**
     * Add a master effects chain. NOTE: this will disconnect any nodes which were previously
     * chained in the master effects chain.
     * @param args All arguments will be connected in a row and the Master will be routed through it.
     * @example
     * // route all audio through a filter and compressor
     * const lowpass = new Tone.Filter(800, "lowpass");
     * const compressor = new Tone.Compressor(-18);
     * Tone.Destination.chain(lowpass, compressor);
     */
    chain(...args: Array<AudioNode | ToneAudioNode>): this;
    /**
     * The maximum number of channels the system can output
     * @example
     * console.log(Tone.Destination.maxChannelCount);
     */
    get maxChannelCount(): number;
    /**
     * Clean up
     */
    dispose(): this;
}
export {};
