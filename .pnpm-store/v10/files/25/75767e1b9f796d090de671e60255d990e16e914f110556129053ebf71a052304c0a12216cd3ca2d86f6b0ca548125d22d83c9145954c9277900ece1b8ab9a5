import { AbstractParam } from "../core/context/AbstractParam.js";
import { Param } from "../core/context/Param.js";
import { InputNode, OutputNode, ToneAudioNode, ToneAudioNodeOptions } from "../core/context/ToneAudioNode.js";
import { Time, UnitMap, UnitName } from "../core/type/Units.js";
import { ToneConstantSource } from "./ToneConstantSource.js";
export interface SignalOptions<TypeName extends UnitName> extends ToneAudioNodeOptions {
    value: UnitMap[TypeName];
    units: TypeName;
    convert: boolean;
    minValue?: number;
    maxValue?: number;
}
/**
 * A signal is an audio-rate value. Tone.Signal is a core component of the library.
 * Unlike a number, Signals can be scheduled with sample-level accuracy. Tone.Signal
 * has all of the methods available to native Web Audio
 * [AudioParam](http://webaudio.github.io/web-audio-api/#the-audioparam-interface)
 * as well as additional conveniences. Read more about working with signals
 * [here](https://github.com/Tonejs/Tone.js/wiki/Signals).
 *
 * @example
 * const osc = new Tone.Oscillator().toDestination().start();
 * // a scheduleable signal which can be connected to control an AudioParam or another Signal
 * const signal = new Tone.Signal({
 * 	value: "C4",
 * 	units: "frequency"
 * }).connect(osc.frequency);
 * // the scheduled ramp controls the connected signal
 * signal.rampTo("C2", 4, "+0.5");
 * @category Signal
 */
export declare class Signal<TypeName extends UnitName = "number"> extends ToneAudioNode<SignalOptions<any>> implements AbstractParam<TypeName> {
    readonly name: string;
    /**
     * Indicates if the value should be overridden on connection.
     */
    readonly override: boolean;
    /**
     * The constant source node which generates the signal
     */
    protected _constantSource: ToneConstantSource<TypeName>;
    readonly output: OutputNode;
    protected _param: Param<TypeName>;
    readonly input: InputNode;
    /**
     * @param value Initial value of the signal
     * @param units The unit name, e.g. "frequency"
     */
    constructor(value?: UnitMap[TypeName], units?: TypeName);
    constructor(options?: Partial<SignalOptions<TypeName>>);
    static getDefaults(): SignalOptions<any>;
    connect(destination: InputNode, outputNum?: number, inputNum?: number): this;
    dispose(): this;
    setValueAtTime(value: UnitMap[TypeName], time: Time): this;
    getValueAtTime(time: Time): UnitMap[TypeName];
    setRampPoint(time: Time): this;
    linearRampToValueAtTime(value: UnitMap[TypeName], time: Time): this;
    exponentialRampToValueAtTime(value: UnitMap[TypeName], time: Time): this;
    exponentialRampTo(value: UnitMap[TypeName], rampTime: Time, startTime?: Time): this;
    linearRampTo(value: UnitMap[TypeName], rampTime: Time, startTime?: Time): this;
    targetRampTo(value: UnitMap[TypeName], rampTime: Time, startTime?: Time): this;
    exponentialApproachValueAtTime(value: UnitMap[TypeName], time: Time, rampTime: Time): this;
    setTargetAtTime(value: UnitMap[TypeName], startTime: Time, timeConstant: number): this;
    setValueCurveAtTime(values: UnitMap[TypeName][], startTime: Time, duration: Time, scaling?: number): this;
    cancelScheduledValues(time: Time): this;
    cancelAndHoldAtTime(time: Time): this;
    rampTo(value: UnitMap[TypeName], rampTime: Time, startTime?: Time): this;
    get value(): UnitMap[TypeName];
    set value(value: UnitMap[TypeName]);
    get convert(): boolean;
    set convert(convert: boolean);
    get units(): UnitName;
    get overridden(): boolean;
    set overridden(overridden: boolean);
    get maxValue(): number;
    get minValue(): number;
    /**
     * @see {@link Param.apply}.
     */
    apply(param: Param | AudioParam): this;
}
/**
 * When connecting from a signal, it's necessary to zero out the node destination
 * node if that node is also a signal. If the destination is not 0, then the values
 * will be summed. This method insures that the output of the destination signal will
 * be the same as the source signal, making the destination signal a pass through node.
 * @param signal The output signal to connect from
 * @param destination the destination to connect to
 * @param outputNum the optional output number
 * @param inputNum the input number
 */
export declare function connectSignal(signal: OutputNode, destination: InputNode, outputNum?: number, inputNum?: number): void;
