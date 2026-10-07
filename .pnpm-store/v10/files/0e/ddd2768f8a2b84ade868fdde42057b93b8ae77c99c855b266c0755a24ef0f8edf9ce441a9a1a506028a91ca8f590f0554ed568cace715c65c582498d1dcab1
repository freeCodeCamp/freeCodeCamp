import { getContext } from "../Global.js";
import { TimeBaseUnit, TimeValue } from "./TimeBase.js";
import { TransportTimeClass } from "./TransportTime.js";
import { Seconds, Ticks } from "./Units.js";

/**
 * Ticks is a primitive type for encoding Time values.
 * Ticks can be constructed with or without the `new` keyword. Ticks can be passed
 * into the parameter of any method which takes time as an argument.
 * @example
 * const t = Tone.Ticks("4n"); // a quarter note as ticks
 * @category Unit
 */
export class TicksClass extends TransportTimeClass<Ticks> {
	readonly name: string = "Ticks";

	readonly defaultUnits: TimeBaseUnit = "i";

	/**
	 * Get the current time in the given units
	 */
	protected _now(): Ticks {
		return this.context.transport.ticks;
	}

	/**
	 * Return the value of the beats in the current units
	 */
	protected _beatsToUnits(beats: number): Ticks {
		return this._getPPQ() * beats;
	}

	/**
	 * Returns the value of a second in the current units
	 */
	protected _secondsToUnits(seconds: Seconds): Ticks {
		return Math.floor((seconds / (60 / this._getBpm())) * this._getPPQ());
	}

	/**
	 * Returns the value of a tick in the current time units
	 */
	protected _ticksToUnits(ticks: Ticks): Ticks {
		return ticks;
	}

	/**
	 * Return the time in ticks
	 */
	toTicks(): Ticks {
		return this.valueOf() as Ticks;
	}

	/**
	 * Return the time in seconds
	 */
	toSeconds(): Seconds {
		return (this.valueOf() / this._getPPQ()) * (60 / this._getBpm());
	}
}

/**
 * Convert a time representation to ticks
 * @category Unit
 */
export function Ticks(value?: TimeValue, units?: TimeBaseUnit): TicksClass {
	return new TicksClass(getContext(), value, units);
}
