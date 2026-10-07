import { StereoEffect, StereoEffectOptions } from "./StereoEffect.js";
import { Frequency, NormalRange } from "../core/type/Units.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { readOnly } from "../core/util/Interface.js";
import { Signal } from "../signal/Signal.js";
import { LowpassCombFilter } from "../component/filter/LowpassCombFilter.js";

export interface FreeverbOptions extends StereoEffectOptions {
	dampening: Frequency;
	roomSize: NormalRange;
}

/**
 * An array of comb filter delay values from Freeverb implementation
 */
const combFilterTunings = [
	1557 / 44100,
	1617 / 44100,
	1491 / 44100,
	1422 / 44100,
	1277 / 44100,
	1356 / 44100,
	1188 / 44100,
	1116 / 44100,
];

/**
 * An array of allpass filter frequency values from Freeverb implementation
 */
const allpassFilterFrequencies = [225, 556, 441, 341];

/**
 * Freeverb is a reverb based on [Freeverb](https://ccrma.stanford.edu/~jos/pasp/Freeverb.html).
 * Read more on reverb on [Sound On Sound](https://web.archive.org/web/20160404083902/http://www.soundonsound.com:80/sos/feb01/articles/synthsecrets.asp).
 * Freeverb is now implemented with an AudioWorkletNode which may result on performance degradation on some platforms. Consider using {@link Reverb}.
 * @example
 * const freeverb = new Tone.Freeverb().toDestination();
 * freeverb.dampening = 1000;
 * // routing synth through the reverb
 * const synth = new Tone.NoiseSynth().connect(freeverb);
 * synth.triggerAttackRelease(0.05);
 * @category Effect
 */
export class Freeverb extends StereoEffect<FreeverbOptions> {
	readonly name: string = "Freeverb";

	/**
	 * The roomSize value between 0 and 1. A larger roomSize will result in a longer decay.
	 */
	readonly roomSize: Signal<"normalRange">;

	/**
	 * the comb filters
	 */
	private _combFilters: LowpassCombFilter[] = [];

	/**
	 * the allpass filters on the left
	 */
	private _allpassFiltersL: BiquadFilterNode[] = [];

	/**
	 * the allpass filters on the right
	 */
	private _allpassFiltersR: BiquadFilterNode[] = [];

	/**
	 * @param roomSize Correlated to the decay time.
	 * @param dampening The cutoff frequency of a lowpass filter as part of the reverb.
	 */
	constructor(roomSize?: NormalRange, dampening?: Frequency);
	constructor(options?: Partial<FreeverbOptions>);
	constructor() {
		const options = optionsFromArguments(
			Freeverb.getDefaults(),
			arguments,
			["roomSize", "dampening"]
		);
		super(options);

		this.roomSize = new Signal({
			context: this.context,
			value: options.roomSize,
			units: "normalRange",
		});

		// make the allpass filters on the right
		this._allpassFiltersL = allpassFilterFrequencies.map((freq) => {
			const allpassL = this.context.createBiquadFilter();
			allpassL.type = "allpass";
			allpassL.frequency.value = freq;
			return allpassL;
		});

		// make the allpass filters on the left
		this._allpassFiltersR = allpassFilterFrequencies.map((freq) => {
			const allpassR = this.context.createBiquadFilter();
			allpassR.type = "allpass";
			allpassR.frequency.value = freq;
			return allpassR;
		});

		// make the comb filters
		this._combFilters = combFilterTunings.map((delayTime, index) => {
			const lfpf = new LowpassCombFilter({
				context: this.context,
				dampening: options.dampening,
				delayTime,
			});
			if (index < combFilterTunings.length / 2) {
				this.connectEffectLeft(lfpf, ...this._allpassFiltersL);
			} else {
				this.connectEffectRight(lfpf, ...this._allpassFiltersR);
			}
			this.roomSize.connect(lfpf.resonance);
			return lfpf;
		});

		readOnly(this, ["roomSize"]);
	}

	static getDefaults(): FreeverbOptions {
		return Object.assign(StereoEffect.getDefaults(), {
			roomSize: 0.7,
			dampening: 3000,
		});
	}

	/**
	 * The amount of dampening of the reverberant signal.
	 */

	get dampening(): Frequency {
		return this._combFilters[0].dampening;
	}
	set dampening(d) {
		this._combFilters.forEach((c) => (c.dampening = d));
	}

	dispose(): this {
		super.dispose();
		this._allpassFiltersL.forEach((al) => al.disconnect());
		this._allpassFiltersR.forEach((ar) => ar.disconnect());
		this._combFilters.forEach((cf) => cf.dispose());
		this.roomSize.dispose();
		return this;
	}
}
