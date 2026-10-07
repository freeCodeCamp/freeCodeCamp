import { Gain } from "../../core/context/Gain.js";
import { Param } from "../../core/context/Param.js";
import {
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../../core/context/ToneAudioNode.js";
import { Decibels } from "../../core/type/Units.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { readOnly } from "../../core/util/Interface.js";

interface VolumeOptions extends ToneAudioNodeOptions {
	volume: Decibels;
	mute: boolean;
}

/**
 * Volume is a simple volume node, useful for creating a volume fader.
 *
 * @example
 * const vol = new Tone.Volume(-12).toDestination();
 * const osc = new Tone.Oscillator().connect(vol).start();
 * @category Component
 */
export class Volume extends ToneAudioNode<VolumeOptions> {
	readonly name: string = "Volume";

	/**
	 * the output node
	 */
	output: Gain<"decibels">;

	/**
	 * Input and output are the same
	 */
	input: Gain<"decibels">;

	/**
	 * The unmuted volume
	 */
	private _unmutedVolume: Decibels;

	/**
	 * The volume control in decibels.
	 * @example
	 * const vol = new Tone.Volume().toDestination();
	 * const osc = new Tone.Oscillator().connect(vol).start();
	 * vol.volume.value = -20;
	 */
	volume: Param<"decibels">;

	/**
	 * @param volume the initial volume in decibels
	 */
	constructor(volume?: Decibels);
	constructor(options?: Partial<VolumeOptions>);
	constructor() {
		const options = optionsFromArguments(Volume.getDefaults(), arguments, [
			"volume",
		]);
		super(options);

		this.input = this.output = new Gain({
			context: this.context,
			gain: options.volume,
			units: "decibels",
		});
		this.volume = this.output.gain;
		readOnly(this, "volume");
		this._unmutedVolume = options.volume;

		// set the mute initially
		this.mute = options.mute;
	}

	static getDefaults(): VolumeOptions {
		return Object.assign(ToneAudioNode.getDefaults(), {
			mute: false,
			volume: 0,
		});
	}

	/**
	 * Mute the output.
	 * @example
	 * const vol = new Tone.Volume(-12).toDestination();
	 * const osc = new Tone.Oscillator().connect(vol).start();
	 * // mute the output
	 * vol.mute = true;
	 */
	get mute(): boolean {
		return this.volume.value === -Infinity;
	}
	set mute(mute: boolean) {
		if (!this.mute && mute) {
			this._unmutedVolume = this.volume.value;
			// maybe it should ramp here?
			this.volume.value = -Infinity;
		} else if (this.mute && !mute) {
			this.volume.value = this._unmutedVolume;
		}
	}

	/**
	 * clean up
	 */
	dispose(): this {
		super.dispose();
		this.input.dispose();
		this.volume.dispose();
		return this;
	}
}
