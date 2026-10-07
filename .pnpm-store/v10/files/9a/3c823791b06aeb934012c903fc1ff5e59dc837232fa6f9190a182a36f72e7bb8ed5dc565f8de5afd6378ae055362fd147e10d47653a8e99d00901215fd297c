import { Seconds, Ticks } from "../type/Units.js";
import { noOp } from "../util/Interface.js";
import type { TransportClass as Transport } from "./Transport.js";

export interface TransportEventOptions {
	callback: (time: number) => void;
	once: boolean;
	time: Ticks;
}

/**
 * TransportEvent is an internal class used by {@link TransportClass}
 * to schedule events. Do no invoke this class directly, it is
 * handled from within Tone.Transport.
 */
export class TransportEvent {
	/**
	 * Reference to the Transport that created it
	 */
	protected transport: Transport;

	/**
	 * The unique id of the event
	 */
	id: number = TransportEvent._eventId++;

	/**
	 * The time the event starts
	 */
	time: Ticks;

	/**
	 * The callback to invoke
	 */
	private callback?: (time: Seconds) => void;

	/**
	 * If the event should be removed after being invoked.
	 */
	private _once: boolean;

	/**
	 * The remaining value between the passed in time, and Math.floor(time).
	 * This value is later added back when scheduling to get sub-tick precision.
	 */
	protected _remainderTime = 0;

	/**
	 * @param transport The transport object which the event belongs to
	 */
	constructor(transport: Transport, opts: Partial<TransportEventOptions>) {
		const options: TransportEventOptions = Object.assign(
			TransportEvent.getDefaults(),
			opts
		);

		this.transport = transport;
		this.callback = options.callback;
		this._once = options.once;
		this.time = Math.floor(options.time);
		this._remainderTime = options.time - this.time;
	}

	static getDefaults(): TransportEventOptions {
		return {
			callback: noOp,
			once: false,
			time: 0,
		};
	}

	/**
	 * Current ID counter
	 */
	private static _eventId = 0;

	/**
	 * Get the time and remainder time.
	 */
	protected get floatTime(): number {
		return this.time + this._remainderTime;
	}

	/**
	 * Invoke the event callback.
	 * @param  time  The AudioContext time in seconds of the event
	 */
	invoke(time: Seconds): void {
		if (this.callback) {
			const tickDuration = this.transport.bpm.getDurationOfTicks(1, time);
			this.callback(time + this._remainderTime * tickDuration);
			if (this._once) {
				this.transport.clear(this.id);
			}
		}
	}

	/**
	 * Clean up
	 */
	dispose(): this {
		this.callback = undefined;
		return this;
	}
}
