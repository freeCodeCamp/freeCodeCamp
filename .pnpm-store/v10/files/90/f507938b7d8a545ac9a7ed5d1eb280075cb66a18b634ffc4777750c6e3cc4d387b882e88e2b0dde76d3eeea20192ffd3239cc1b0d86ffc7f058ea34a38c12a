import { connect } from "../core/context/ToneAudioNode.js";
import { Param } from "../core/context/Param.js";
import { Seconds, Time, UnitMap, UnitName } from "../core/type/Units.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import {
	OneShotSource,
	OneShotSourceOptions,
} from "../source/OneShotSource.js";

export interface ToneConstantSourceOptions<TypeName extends UnitName>
	extends OneShotSourceOptions {
	convert: boolean;
	offset: UnitMap[TypeName];
	units: TypeName;
	minValue?: number;
	maxValue?: number;
}

/**
 * Wrapper around the native fire-and-forget ConstantSource.
 * Adds the ability to reschedule the stop method.
 * @category Signal
 */
export class ToneConstantSource<
	TypeName extends UnitName = "number",
> extends OneShotSource<ToneConstantSourceOptions<TypeName>> {
	readonly name: string = "ToneConstantSource";

	/**
	 * The signal generator
	 */
	private _source = this.context.createConstantSource();

	/**
	 * The offset of the signal generator
	 */
	readonly offset: Param<TypeName>;

	/**
	 * @param  offset   The offset value
	 */
	constructor(offset: UnitMap[TypeName]);
	constructor(options?: Partial<ToneConstantSourceOptions<TypeName>>);
	constructor() {
		const options = optionsFromArguments(
			ToneConstantSource.getDefaults(),
			arguments,
			["offset"]
		);
		super(options);

		connect(this._source, this._gainNode);

		this.offset = new Param({
			context: this.context,
			convert: options.convert,
			param: this._source.offset,
			units: options.units,
			value: options.offset,
			minValue: options.minValue,
			maxValue: options.maxValue,
		});
	}

	static getDefaults(): ToneConstantSourceOptions<any> {
		return Object.assign(OneShotSource.getDefaults(), {
			convert: true,
			offset: 1,
			units: "number" as UnitName,
		});
	}

	/**
	 * Start the source node at the given time
	 * @param  time When to start the source
	 */
	start(time?: Time): this {
		const computedTime = this.toSeconds(time);
		this.log("start", computedTime);
		this._startGain(computedTime);
		this._source.start(computedTime);
		return this;
	}

	protected _stopSource(time?: Seconds): void {
		this._source.stop(time);
	}

	dispose(): this {
		super.dispose();
		if (this.state === "started") {
			this.stop();
		}
		this._source.disconnect();
		this.offset.dispose();
		return this;
	}
}
