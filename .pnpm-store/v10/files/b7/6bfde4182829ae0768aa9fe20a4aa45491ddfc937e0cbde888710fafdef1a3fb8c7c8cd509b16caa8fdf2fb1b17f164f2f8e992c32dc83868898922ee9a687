import { Time, UnitMap, UnitName } from "../type/Units.js";
/**
 * Abstract base class for {@link Param} and {@link Signal}
 */
export declare abstract class AbstractParam<TypeName extends UnitName> {
    /**
     * Schedules a parameter value change at the given time.
     * @param value The value to set the signal.
     * @param time The time when the change should occur.
     * @example
     * return Tone.Offline(() => {
     * 	const osc = new Tone.Oscillator(20).toDestination().start();
     * 	// set the frequency to 40 at exactly 0.25 seconds
     * 	osc.frequency.setValueAtTime(40, 0.25);
     * }, 0.5, 1);
     */
    abstract setValueAtTime(value: UnitMap[TypeName], time: Time): this;
    /**
     * Get the signals value at the given time. Subsequent scheduling
     * may invalidate the returned value.
     * @param time When to get the value
     * @example
     * const signal = new Tone.Signal().toDestination();
     * // ramp up to '8' over 3 seconds
     * signal.rampTo(8, 3);
     * // ramp back down to '0' over 3 seconds
     * signal.rampTo(0, 3, "+3");
     * setInterval(() => {
     * 	// check the value every 100 ms
     * 	console.log(signal.getValueAtTime(Tone.now()));
     * }, 100);
     */
    abstract getValueAtTime(time: Time): UnitMap[TypeName];
    /**
     * Creates a schedule point with the current value at the current time.
     * Automation methods like {@link linearRampToValueAtTime} and {@link exponentialRampToValueAtTime}
     * require a starting automation value usually set by {@link setValueAtTime}. This method
     * is useful since it will do a `setValueAtTime` with whatever the currently computed
     * value at the given time is.
     * @param time When to add a ramp point.
     * @example
     * const osc = new Tone.Oscillator().toDestination().start();
     * // set the frequency to "G4" in exactly 1 second from now.
     * osc.frequency.setRampPoint("+1");
     * osc.frequency.linearRampToValueAtTime("C1", "+2");
     */
    abstract setRampPoint(time: Time): this;
    /**
     * Schedules a linear continuous change in parameter value from the
     * previous scheduled parameter value to the given value.
     * @example
     * return Tone.Offline(() => {
     * 	const signal = new Tone.Signal(0).toDestination();
     * 	// the ramp starts from the previously scheduled value
     * 	signal.setValueAtTime(0, 0.1);
     * 	signal.linearRampToValueAtTime(1, 0.4);
     * }, 0.5, 1);
     */
    abstract linearRampToValueAtTime(value: UnitMap[TypeName], time: Time): this;
    /**
     * Schedules an exponential continuous change in parameter value from
     * the previous scheduled parameter value to the given value.
     * @example
     * return Tone.Offline(() => {
     * 	const signal = new Tone.Signal(1).toDestination();
     * 	// the ramp starts from the previously scheduled value, which must be positive
     * 	signal.setValueAtTime(1, 0.1);
     * 	signal.exponentialRampToValueAtTime(0, 0.4);
     * }, 0.5, 1);
     */
    abstract exponentialRampToValueAtTime(value: UnitMap[TypeName], time: Time): this;
    /**
     * Schedules an exponential continuous change in parameter value from
     * the current time and current value to the given value over the
     * duration of the rampTime.
     * @param value   The value to ramp to.
     * @param rampTime the time that it takes the
     *                             value to ramp from it's current value
     * @param startTime When the ramp should start.
     * @example
     * const delay = new Tone.FeedbackDelay(0.5, 0.98).toDestination();
     * // a short burst of noise through the feedback delay
     * const noise = new Tone.Noise().connect(delay).start().stop("+0.1");
     * // making the delay time shorter over time will also make the pitch rise
     * delay.delayTime.exponentialRampTo(0.01, 20);
     * @example
     * return Tone.Offline(() => {
     * 	const signal = new Tone.Signal(.1).toDestination();
     * 	signal.exponentialRampTo(5, 0.3, 0.1);
     * }, 0.5, 1);
     */
    abstract exponentialRampTo(value: UnitMap[TypeName], rampTime: Time, startTime?: Time): this;
    /**
     * Schedules an linear continuous change in parameter value from
     * the current time and current value to the given value over the
     * duration of the rampTime.
     *
     * @param  value   The value to ramp to.
     * @param  rampTime the time that it takes the
     *                              value to ramp from it's current value
     * @param startTime 	When the ramp should start.
     * @returns {Param} this
     * @example
     * const delay = new Tone.FeedbackDelay(0.5, 0.98).toDestination();
     * // a short burst of noise through the feedback delay
     * const noise = new Tone.Noise().connect(delay).start().stop("+0.1");
     * // making the delay time shorter over time will also make the pitch rise
     * delay.delayTime.linearRampTo(0.01, 20);
     * @example
     * return Tone.Offline(() => {
     * 	const signal = new Tone.Signal(1).toDestination();
     * 	signal.linearRampTo(0, 0.3, 0.1);
     * }, 0.5, 1);
     */
    abstract linearRampTo(value: UnitMap[TypeName], rampTime: Time, startTime?: Time): this;
    /**
     * Start exponentially approaching the target value at the given time. Since it
     * is an exponential approach it will continue approaching after the ramp duration. The
     * rampTime is the time that it takes to reach over 99% of the way towards the value.
     * @param  value   The value to ramp to.
     * @param  rampTime the time that it takes the
     *                              value to ramp from it's current value
     * @param startTime 	When the ramp should start.
     * @example
     * @example
     * return Tone.Offline(() => {
     * 	const signal = new Tone.Signal(1).toDestination();
     * 	signal.targetRampTo(0, 0.3, 0.1);
     * }, 0.5, 1);
     */
    abstract targetRampTo(value: UnitMap[TypeName], rampTime: Time, startTime?: Time): this;
    /**
     * Start exponentially approaching the target value at the given time. Since it
     * is an exponential approach it will continue approaching after the ramp duration. The
     * rampTime is the time that it takes to reach over 99% of the way towards the value. This methods
     * is similar to setTargetAtTime except the third argument is a time instead of a 'timeConstant'
     * @param  value   The value to ramp to.
     * @param time 	When the ramp should start.
     * @param  rampTime the time that it takes the value to ramp from it's current value
     * @example
     * const osc = new Tone.Oscillator().toDestination().start();
     * // exponential approach over 4 seconds starting in 1 second
     * osc.frequency.exponentialApproachValueAtTime("C4", "+1", 4);
     */
    abstract exponentialApproachValueAtTime(value: UnitMap[TypeName], time: Time, rampTime: Time): this;
    /**
     * Start exponentially approaching the target value at the given time with
     * a rate having the given time constant.
     * @param value
     * @param startTime
     * @param timeConstant
     */
    abstract setTargetAtTime(value: UnitMap[TypeName], startTime: Time, timeConstant: number): this;
    /**
     * Sets an array of arbitrary parameter values starting at the given time
     * for the given duration.
     *
     * @param values
     * @param startTime
     * @param duration
     * @param scaling If the values in the curve should be scaled by some value
     * @example
     * return Tone.Offline(() => {
     * 	const signal = new Tone.Signal(1).toDestination();
     * 	signal.setValueCurveAtTime([1, 0.2, 0.8, 0.1, 0], 0.2, 0.3);
     * }, 0.5, 1);
     */
    abstract setValueCurveAtTime(values: UnitMap[TypeName][], startTime: Time, duration: Time, scaling?: number): this;
    /**
     * Cancels all scheduled parameter changes with times greater than or
     * equal to startTime.
     * @example
     * return Tone.Offline(() => {
     * 	const signal = new Tone.Signal(0).toDestination();
     * 	signal.setValueAtTime(0.1, 0.1);
     * 	signal.setValueAtTime(0.2, 0.2);
     * 	signal.setValueAtTime(0.3, 0.3);
     * 	signal.setValueAtTime(0.4, 0.4);
     * 	// cancels the last two scheduled changes
     * 	signal.cancelScheduledValues(0.3);
     * }, 0.5, 1);
     */
    abstract cancelScheduledValues(time: Time): this;
    /**
     * This is similar to {@link cancelScheduledValues} except
     * it holds the automated value at time until the next automated event.
     * @example
     * return Tone.Offline(() => {
     * 	const signal = new Tone.Signal(0).toDestination();
     * 	signal.linearRampTo(1, 0.5, 0);
     * 	signal.cancelAndHoldAtTime(0.3);
     * }, 0.5, 1);
     */
    abstract cancelAndHoldAtTime(time: Time): this;
    /**
     * Ramps to the given value over the duration of the rampTime.
     * Automatically selects the best ramp type (exponential or linear)
     * depending on the `units` of the signal
     *
     * @param  value
     * @param  rampTime The time that it takes the value to ramp from it's current value
     * @param startTime When the ramp should start.
     * @example
     * const osc = new Tone.Oscillator().toDestination().start();
     * // schedule it to ramp either linearly or exponentially depending on the units
     * osc.frequency.rampTo("A2", 10);
     * @example
     * const osc = new Tone.Oscillator().toDestination().start();
     * // schedule it to ramp starting at a specific time
     * osc.frequency.rampTo("A2", 10, "+2");
     */
    abstract rampTo(value: UnitMap[TypeName], rampTime: Time, startTime?: Time): this;
    /**
     * The current value of the parameter. Setting this value
     * is equivalent to setValueAtTime(value, context.currentTime)
     */
    abstract value: UnitMap[TypeName];
    /**
     * If the value should be converted or not
     */
    abstract convert: boolean;
    /**
     * The unit type
     */
    abstract readonly units: UnitName;
    /**
     * True if the signal value is being overridden by
     * a connected signal. Internal use only.
     */
    abstract overridden: boolean;
    /**
     * The minimum value of the output given the units
     */
    abstract readonly minValue: number;
    /**
     * The maximum value of the output given the units
     */
    abstract readonly maxValue: number;
}
