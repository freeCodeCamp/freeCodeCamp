import { Param } from "../context/Param.js";
import { UnitMap, UnitName } from "../type/Units.js";
import { ToneAudioNode, ToneAudioNodeOptions } from "./ToneAudioNode.js";
interface GainOptions<TypeName extends UnitName> extends ToneAudioNodeOptions {
    gain: UnitMap[TypeName];
    units: TypeName;
    convert: boolean;
    minValue?: number;
    maxValue?: number;
}
/**
 * A thin wrapper around the Native Web Audio GainNode.
 * The GainNode is a basic building block of the Web Audio
 * API and is useful for routing audio and adjusting gains.
 * @category Core
 * @example
 * return Tone.Offline(() => {
 * 	const gainNode = new Tone.Gain(0).toDestination();
 * 	const osc = new Tone.Oscillator(30).connect(gainNode).start();
 * 	gainNode.gain.rampTo(1, 0.1);
 * 	gainNode.gain.rampTo(0, 0.4, 0.2);
 * }, 0.7, 1);
 */
export declare class Gain<TypeName extends "gain" | "decibels" | "normalRange" = "gain"> extends ToneAudioNode<GainOptions<TypeName>> {
    readonly name: string;
    /**
     * The gain parameter of the gain node.
     * @example
     * const gainNode = new Tone.Gain(0).toDestination();
     * const osc = new Tone.Oscillator().connect(gainNode).start();
     * gainNode.gain.rampTo(1, 0.1);
     * gainNode.gain.rampTo(0, 2, "+0.5");
     */
    readonly gain: Param<TypeName>;
    /**
     * The wrapped GainNode.
     */
    private _gainNode;
    readonly input: GainNode;
    readonly output: GainNode;
    /**
     * @param  gain The initial gain of the GainNode
     * @param units The units of the gain parameter.
     */
    constructor(gain?: UnitMap[TypeName], units?: TypeName);
    constructor(options?: Partial<GainOptions<TypeName>>);
    static getDefaults(): GainOptions<any>;
    /**
     * Clean up.
     */
    dispose(): this;
}
export {};
