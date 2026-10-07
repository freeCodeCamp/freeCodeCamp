import { Signal, SignalOptions } from "../../signal/Signal.js";
import { InputNode } from "../context/ToneAudioNode.js";
import { Seconds, Ticks, Time, UnitMap, UnitName } from "../type/Units.js";
import { TickParam } from "./TickParam.js";
interface TickSignalOptions<TypeName extends UnitName> extends SignalOptions<TypeName> {
    value: UnitMap[TypeName];
    multiplier: number;
}
/**
 * TickSignal extends Tone.Signal, but adds the capability
 * to calculate the number of elapsed ticks. exponential and target curves
 * are approximated with multiple linear ramps.
 *
 * Thank you Bruno Dias, H. Sofia Pinto, and David M. Matos,
 * for your [WAC paper](https://smartech.gatech.edu/bitstream/handle/1853/54588/WAC2016-49.pdf)
 * describing integrating timing functions for tempo calculations.
 */
export declare class TickSignal<TypeName extends "hertz" | "bpm"> extends Signal<TypeName> {
    readonly name: string;
    /**
     * The param which controls the output signal value
     */
    protected _param: TickParam<TypeName>;
    readonly input: InputNode;
    /**
     * @param value The initial value of the signal
     */
    constructor(value?: UnitMap[TypeName]);
    constructor(options: Partial<TickSignalOptions<TypeName>>);
    static getDefaults(): TickSignalOptions<any>;
    ticksToTime(ticks: Ticks, when: Time): Seconds;
    timeToTicks(duration: Time, when: Time): Ticks;
    getTimeOfTick(tick: Ticks): Seconds;
    getDurationOfTicks(ticks: Ticks, time: Time): Seconds;
    getTicksAtTime(time: Time): Ticks;
    /**
     * A multiplier on the bpm value. Useful for setting a PPQ relative to the base frequency value.
     */
    get multiplier(): number;
    set multiplier(m: number);
    dispose(): this;
}
export {};
