import { AbstractParam } from "../context/AbstractParam.js";
import { Positive, Time, UnitMap, UnitName } from "../type/Units.js";
import { Timeline } from "../util/Timeline.js";
import { ToneWithContext, ToneWithContextOptions } from "./ToneWithContext.js";
export interface ParamOptions<TypeName extends UnitName> extends ToneWithContextOptions {
    units: TypeName;
    value?: UnitMap[TypeName];
    param: AudioParam | Param<TypeName>;
    convert: boolean;
    minValue?: number;
    maxValue?: number;
    swappable?: boolean;
}
/**
 * the possible automation types
 */
type AutomationType = "linearRampToValueAtTime" | "exponentialRampToValueAtTime" | "setValueAtTime" | "setTargetAtTime" | "cancelScheduledValues";
interface TargetAutomationEvent {
    type: "setTargetAtTime";
    time: number;
    value: number;
    constant: number;
}
interface NormalAutomationEvent {
    type: Exclude<AutomationType, "setTargetAtTime">;
    time: number;
    value: number;
}
/**
 * The events on the automation
 */
export type AutomationEvent = NormalAutomationEvent | TargetAutomationEvent;
/**
 * Param wraps the native Web Audio's AudioParam to provide
 * additional unit conversion functionality. It also
 * serves as a base-class for classes which have a single,
 * automatable parameter.
 * @category Core
 */
export declare class Param<TypeName extends UnitName = "number"> extends ToneWithContext<ParamOptions<TypeName>> implements AbstractParam<TypeName> {
    readonly name: string;
    readonly input: GainNode | AudioParam;
    readonly units: UnitName;
    convert: boolean;
    overridden: boolean;
    /**
     * The timeline which tracks all of the automations.
     */
    protected _events: Timeline<AutomationEvent>;
    /**
     * The native parameter to control
     */
    protected _param: AudioParam;
    /**
     * The default value before anything is assigned
     */
    protected _initialValue: number;
    /**
     * The minimum output value
     */
    private _minOutput;
    /**
     * Private reference to the min and max values if passed into the constructor
     */
    private readonly _minValue?;
    private readonly _maxValue?;
    /**
     * If the underlying AudioParam can be swapped out
     * using the setParam method.
     */
    protected readonly _swappable: boolean;
    /**
     * @param param The AudioParam to wrap
     * @param units The unit name
     * @param convert Whether or not to convert the value to the target units
     */
    constructor(param: AudioParam, units?: TypeName, convert?: boolean);
    constructor(options: Partial<ParamOptions<TypeName>>);
    static getDefaults(): ParamOptions<any>;
    get value(): UnitMap[TypeName];
    set value(value: UnitMap[TypeName]);
    get minValue(): number;
    get maxValue(): number;
    /**
     * Type guard based on the unit name
     */
    private _is;
    /**
     * Make sure the value is always in the defined range
     */
    private _assertRange;
    /**
     * Convert the given value from the type specified by Param.units
     * into the destination value (such as Gain or Frequency).
     */
    protected _fromType(val: UnitMap[TypeName]): number;
    /**
     * Convert the parameters value into the units specified by Param.units.
     */
    protected _toType(val: number): UnitMap[TypeName];
    setValueAtTime(value: UnitMap[TypeName], time: Time): this;
    getValueAtTime(time: Time): UnitMap[TypeName];
    setRampPoint(time: Time): this;
    linearRampToValueAtTime(value: UnitMap[TypeName], endTime: Time): this;
    exponentialRampToValueAtTime(value: UnitMap[TypeName], endTime: Time): this;
    exponentialRampTo(value: UnitMap[TypeName], rampTime: Time, startTime?: Time): this;
    linearRampTo(value: UnitMap[TypeName], rampTime: Time, startTime?: Time): this;
    targetRampTo(value: UnitMap[TypeName], rampTime: Time, startTime?: Time): this;
    exponentialApproachValueAtTime(value: UnitMap[TypeName], time: Time, rampTime: Time): this;
    setTargetAtTime(value: UnitMap[TypeName], startTime: Time, timeConstant: Positive): this;
    setValueCurveAtTime(values: UnitMap[TypeName][], startTime: Time, duration: Time, scaling?: number): this;
    cancelScheduledValues(time: Time): this;
    cancelAndHoldAtTime(time: Time): this;
    rampTo(value: UnitMap[TypeName], rampTime?: Time, startTime?: Time): this;
    /**
     * Apply all of the previously scheduled events to the passed in Param or AudioParam.
     * The applied values will start at the context's current time and schedule
     * all of the events which are scheduled on this Param onto the passed in param.
     */
    apply(param: Param | AudioParam): this;
    /**
     * Replace the Param's internal AudioParam. Will apply scheduled curves
     * onto the parameter and replace the connections.
     */
    setParam(param: AudioParam): this;
    dispose(): this;
    get defaultValue(): UnitMap[TypeName];
    protected _exponentialApproach(t0: number, v0: number, v1: number, timeConstant: number, t: number): number;
    protected _linearInterpolate(t0: number, v0: number, t1: number, v1: number, t: number): number;
    protected _exponentialInterpolate(t0: number, v0: number, t1: number, v1: number, t: number): number;
}
export {};
