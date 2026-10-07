import { getContext } from "../Global.js";
import { Tone } from "../Tone.js";
import { FrequencyClass } from "../type/Frequency.js";
import { TimeClass } from "../type/Time.js";
import { TransportTimeClass } from "../type/TransportTime.js";
import { Frequency, Hertz, Seconds, Ticks, Time } from "../type/Units.js";
import { assertUsedScheduleTime } from "../util/Debug.js";
import {
	getDefaultsFromInstance,
	optionsFromArguments,
} from "../util/Defaults.js";
import { RecursivePartial } from "../util/Interface.js";
import {
	isArray,
	isBoolean,
	isDefined,
	isNumber,
	isString,
	isUndef,
} from "../util/TypeCheck.js";
import { BaseContext } from "./BaseContext.js";
import type { TransportClass } from "../clock/Transport.js";

/**
 * A unit which process audio
 */
export interface ToneWithContextOptions {
	context: BaseContext;
}

/**
 * The Base class for all nodes that have an AudioContext.
 */
export abstract class ToneWithContext<
	Options extends ToneWithContextOptions,
> extends Tone {
	/**
	 * The context belonging to the node.
	 */
	readonly context: BaseContext;

	/**
	 * The default context to use if no AudioContext is passed in to the constructor.
	 * Probably should not be set manually. Used internally.
	 * @hidden
	 */
	readonly defaultContext?: BaseContext;

	/**
	 * Pass in a constructor as the first argument
	 */
	constructor(context?: BaseContext);
	constructor(options?: Partial<ToneWithContextOptions>);
	constructor() {
		super();
		const options = optionsFromArguments(
			ToneWithContext.getDefaults(),
			arguments,
			["context"]
		);
		if (this.defaultContext) {
			this.context = this.defaultContext;
		} else {
			this.context = options.context;
		}
	}

	static getDefaults(): ToneWithContextOptions {
		return {
			context: getContext(),
		};
	}

	/**
	 * Return the current time of the Context clock plus the lookAhead.
	 * @example
	 * setInterval(() => {
	 * 	console.log(Tone.now());
	 * }, 100);
	 */
	now(): Seconds {
		return this.context.currentTime + this.context.lookAhead;
	}

	/**
	 * Return the current time of the Context clock without any lookAhead.
	 * @example
	 * setInterval(() => {
	 * 	console.log(Tone.immediate());
	 * }, 100);
	 */
	immediate(): Seconds {
		return this.context.currentTime;
	}

	/**
	 * The duration in seconds of one sample.
	 */
	get sampleTime(): Seconds {
		return 1 / this.context.sampleRate;
	}

	/**
	 * The number of seconds of 1 processing block (128 samples)
	 * @example
	 * console.log(Tone.Destination.blockTime);
	 */
	get blockTime(): Seconds {
		return 128 / this.context.sampleRate;
	}

	/**
	 * Convert the incoming time to seconds.
	 * This is calculated against the current {@link TransportClass} bpm
	 * @example
	 * const gain = new Tone.Gain();
	 * setInterval(() => console.log(gain.toSeconds("4n")), 100);
	 * // ramp the tempo to 60 bpm over 30 seconds
	 * Tone.getTransport().bpm.rampTo(60, 30);
	 */
	toSeconds(time?: Time): Seconds {
		assertUsedScheduleTime(time);
		return new TimeClass(this.context, time).toSeconds();
	}

	/**
	 * Convert the input to a frequency number
	 * @example
	 * const gain = new Tone.Gain();
	 * console.log(gain.toFrequency("4n"));
	 */
	toFrequency(freq: Frequency): Hertz {
		return new FrequencyClass(this.context, freq).toFrequency();
	}

	/**
	 * Convert the input time into ticks
	 * @example
	 * const gain = new Tone.Gain();
	 * console.log(gain.toTicks("4n"));
	 */
	toTicks(time?: Time | TimeClass): Ticks {
		return new TransportTimeClass(this.context, time).toTicks();
	}

	//-------------------------------------
	// 	GET/SET
	//-------------------------------------

	/**
	 * Get a subset of the properties which are in the partial props
	 */
	protected _getPartialProperties(props: Options): Partial<Options> {
		const options = this.get();
		// remove attributes from the prop that are not in the partial
		Object.keys(options).forEach((name) => {
			if (isUndef(props[name])) {
				delete options[name];
			}
		});
		return options;
	}

	/**
	 * Get the object's attributes.
	 * @example
	 * const osc = new Tone.Oscillator();
	 * console.log(osc.get());
	 */
	get(): Options {
		const defaults = getDefaultsFromInstance(this) as Options;
		Object.keys(defaults).forEach((attribute) => {
			if (Reflect.has(this, attribute)) {
				const member = this[attribute];
				if (
					isDefined(member) &&
					isDefined(member.value) &&
					isDefined(member.setValueAtTime)
				) {
					defaults[attribute] = member.value;
				} else if (member instanceof ToneWithContext) {
					defaults[attribute] = member._getPartialProperties(
						defaults[attribute]
					);
					// otherwise make sure it's a serializable type
				} else if (
					isArray(member) ||
					isNumber(member) ||
					isString(member) ||
					isBoolean(member)
				) {
					defaults[attribute] = member;
				} else {
					// remove all undefined and unserializable attributes
					delete defaults[attribute];
				}
			}
		});

		return defaults;
	}

	/**
	 * Set multiple properties at once with an object.
	 * @example
	 * const filter = new Tone.Filter().toDestination();
	 * // set values using an object
	 * filter.set({
	 * 	frequency: "C6",
	 * 	type: "highpass"
	 * });
	 * const player = new Tone.Player("https://tonejs.github.io/audio/berklee/Analogsynth_octaves_highmid.mp3").connect(filter);
	 * player.autostart = true;
	 */
	set(props: RecursivePartial<Options>): this {
		Object.keys(props).forEach((attribute) => {
			if (Reflect.has(this, attribute) && isDefined(this[attribute])) {
				if (
					this[attribute] &&
					isDefined(this[attribute].value) &&
					isDefined(this[attribute].setValueAtTime)
				) {
					// small optimization
					if (this[attribute].value !== props[attribute]) {
						this[attribute].value = props[attribute];
					}
				} else if (this[attribute] instanceof ToneWithContext) {
					this[attribute].set(props[attribute]);
				} else {
					this[attribute] = props[attribute];
				}
			}
		});
		return this;
	}
}
