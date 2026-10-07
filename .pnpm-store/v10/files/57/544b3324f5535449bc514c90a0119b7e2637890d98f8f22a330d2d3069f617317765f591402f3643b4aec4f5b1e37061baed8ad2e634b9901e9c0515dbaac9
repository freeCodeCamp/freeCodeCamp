import { readOnly } from "../../core/util/Interface.js";
import { Param } from "../../core/context/Param.js";
import {
	InputNode,
	OutputNode,
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../../core/context/ToneAudioNode.js";
import { AudioRange, Decibels } from "../../core/type/Units.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { Panner } from "./Panner.js";
import { Volume } from "./Volume.js";

export interface PanVolOptions extends ToneAudioNodeOptions {
	pan: AudioRange;
	volume: Decibels;
	mute: boolean;
	channelCount: number;
}

/**
 * PanVol is a Tone.Panner and Tone.Volume in one.
 * @example
 * // pan the incoming signal left and drop the volume
 * const panVol = new Tone.PanVol(-0.25, -12).toDestination();
 * const osc = new Tone.Oscillator().connect(panVol).start();
 * @category Component
 */
export class PanVol extends ToneAudioNode<PanVolOptions> {
	readonly name: string = "PanVol";

	readonly input: InputNode;
	readonly output: OutputNode;

	/**
	 * The panning node
	 */
	private _panner: Panner;

	/**
	 * The L/R panning control. -1 = hard left, 1 = hard right.
	 * @min -1
	 * @max 1
	 */
	readonly pan: Param<"audioRange">;

	/**
	 * The volume node
	 */
	private _volume: Volume;

	/**
	 * The volume control in decibels.
	 */
	readonly volume: Param<"decibels">;

	/**
	 * @param pan the initial pan
	 * @param volume The output volume.
	 */
	constructor(pan?: AudioRange, volume?: Decibels);
	constructor(options?: Partial<PanVolOptions>);
	constructor() {
		const options = optionsFromArguments(PanVol.getDefaults(), arguments, [
			"pan",
			"volume",
		]);
		super(options);

		this._panner = this.input = new Panner({
			context: this.context,
			pan: options.pan,
			channelCount: options.channelCount,
		});
		this.pan = this._panner.pan;
		this._volume = this.output = new Volume({
			context: this.context,
			volume: options.volume,
		});
		this.volume = this._volume.volume;

		// connections
		this._panner.connect(this._volume);
		this.mute = options.mute;

		readOnly(this, ["pan", "volume"]);
	}

	static getDefaults(): PanVolOptions {
		return Object.assign(ToneAudioNode.getDefaults(), {
			mute: false,
			pan: 0,
			volume: 0,
			channelCount: 1,
		});
	}

	/**
	 * Mute/unmute the volume
	 */
	get mute(): boolean {
		return this._volume.mute;
	}
	set mute(mute) {
		this._volume.mute = mute;
	}

	dispose(): this {
		super.dispose();
		this._panner.dispose();
		this.pan.dispose();
		this._volume.dispose();
		this.volume.dispose();
		return this;
	}
}
