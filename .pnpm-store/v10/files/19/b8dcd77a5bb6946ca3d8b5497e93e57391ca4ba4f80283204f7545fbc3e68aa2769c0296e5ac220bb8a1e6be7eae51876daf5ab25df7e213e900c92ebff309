import { getContext } from "../Global.js";
import { Seconds, Ticks } from "../type/Units.js";
import { TimeClass } from "./Time.js";
import { TimeBaseUnit, TimeValue } from "./TimeBase.js";

/**
 * TransportTime is a time along the Transport's
 * timeline. It is similar to Tone.Time, but instead of evaluating
 * against the AudioContext's clock, it is evaluated against
 * the Transport's position. See [TransportTime wiki](https://github.com/Tonejs/Tone.js/wiki/TransportTime).
 * @category Unit
 */
export class TransportTimeClass<
	Type extends Seconds | Ticks = Seconds,
> extends TimeClass<Type> {
	readonly name: string = "TransportTime";

	/**
	 * Return the current time in whichever context is relevant
	 */
	protected _now(): Type {
		return this.context.transport.seconds as Type;
	}
}

/**
 * TransportTime is a time along the Transport's
 * timeline. It is similar to Tone.Time, but instead of evaluating
 * against the AudioContext's clock, it is evaluated against
 * the Transport's position. See [TransportTime wiki](https://github.com/Tonejs/Tone.js/wiki/TransportTime).
 * @category Unit
 */
export function TransportTime(
	value?: TimeValue,
	units?: TimeBaseUnit
): TransportTimeClass {
	return new TransportTimeClass(getContext(), value, units);
}
