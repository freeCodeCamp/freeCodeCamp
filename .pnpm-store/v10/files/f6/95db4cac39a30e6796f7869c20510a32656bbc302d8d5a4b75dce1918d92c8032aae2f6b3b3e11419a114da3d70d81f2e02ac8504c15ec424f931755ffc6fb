import { Tone } from "../Tone.js";
import { isUndef } from "./TypeCheck.js";

export interface EmitterEventObject {
	[event: string]: Array<(...args: any[]) => void>;
}

/**
 * Emitter gives classes which extend it
 * the ability to listen for and emit events.
 * Inspiration and reference from Jerome Etienne's [MicroEvent](https://github.com/jeromeetienne/microevent.js).
 * MIT (c) 2011 Jerome Etienne.
 * @category Core
 */
export class Emitter<EventType extends string = string> extends Tone {
	readonly name: string = "Emitter";

	/**
	 * Private container for the events
	 */
	private _events?: EmitterEventObject;

	/**
	 * Bind a callback to a specific event.
	 * @param  event     The name of the event to listen for.
	 * @param  callback  The callback to invoke when the event is emitted
	 */
	on(event: EventType, callback: (...args: any[]) => void): this {
		// split the event
		const events = event.split(/\W+/);
		events.forEach((eventName) => {
			if (isUndef(this._events)) {
				this._events = {};
			}
			if (!this._events.hasOwnProperty(eventName)) {
				this._events[eventName] = [];
			}
			this._events[eventName].push(callback);
		});
		return this;
	}

	/**
	 * Bind a callback which is only invoked once
	 * @param  event     The name of the event to listen for.
	 * @param  callback  The callback to invoke when the event is emitted
	 */
	once(event: EventType, callback: (...args: any[]) => void): this {
		const boundCallback = (...args: any[]) => {
			// invoke the callback
			callback(...args);
			// remove the event
			this.off(event, boundCallback);
		};
		this.on(event, boundCallback);
		return this;
	}

	/**
	 * Remove the event listener.
	 * @param  event     The event to stop listening to.
	 * @param  callback  The callback which was bound to the event with Emitter.on.
	 *                   If no callback is given, all callbacks events are removed.
	 */
	off(event: EventType, callback?: (...args: any[]) => void): this {
		const events = event.split(/\W+/);
		events.forEach((eventName) => {
			if (isUndef(this._events)) {
				this._events = {};
			}
			if (this._events.hasOwnProperty(eventName)) {
				if (isUndef(callback)) {
					this._events[eventName] = [];
				} else {
					const eventList = this._events[eventName];
					for (let i = eventList.length - 1; i >= 0; i--) {
						if (eventList[i] === callback) {
							eventList.splice(i, 1);
						}
					}
				}
			}
		});
		return this;
	}

	/**
	 * Invoke all of the callbacks bound to the event
	 * with any arguments passed in.
	 * @param  event  The name of the event.
	 * @param args The arguments to pass to the functions listening.
	 */
	emit(event: EventType, ...args: any[]): this {
		if (this._events) {
			if (this._events.hasOwnProperty(event)) {
				const eventList = this._events[event].slice(0);
				for (let i = 0, len = eventList.length; i < len; i++) {
					eventList[i].apply(this, args);
				}
			}
		}
		return this;
	}

	/**
	 * Add Emitter functions (on/off/emit) to the object
	 */
	static mixin(constr: any): void {
		// instance._events = {};
		["on", "once", "off", "emit"].forEach((name) => {
			const property = Object.getOwnPropertyDescriptor(
				Emitter.prototype,
				name
			) as PropertyDescriptor;
			Object.defineProperty(constr.prototype, name, property);
		});
	}

	/**
	 * Clean up
	 */
	dispose(): this {
		super.dispose();
		this._events = undefined;
		return this;
	}
}
