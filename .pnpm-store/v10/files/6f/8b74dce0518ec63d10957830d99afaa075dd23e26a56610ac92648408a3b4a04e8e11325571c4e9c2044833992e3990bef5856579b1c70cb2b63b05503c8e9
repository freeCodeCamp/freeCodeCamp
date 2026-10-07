import { Param } from "../../core/context/Param.js";
import {
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../../core/context/ToneAudioNode.js";
import { Degrees, GainFactor } from "../../core/type/Units.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import "../../core/context/Listener.js";

export interface Panner3DOptions extends ToneAudioNodeOptions {
	coneInnerAngle: Degrees;
	coneOuterAngle: Degrees;
	coneOuterGain: GainFactor;
	distanceModel: DistanceModelType;
	maxDistance: number;
	orientationX: number;
	orientationY: number;
	orientationZ: number;
	panningModel: PanningModelType;
	positionX: number;
	positionY: number;
	positionZ: number;
	refDistance: number;
	rolloffFactor: number;
}

/**
 * A spatialized panner node which supports equalpower or HRTF panning.
 * @category Component
 */
export class Panner3D extends ToneAudioNode<Panner3DOptions> {
	readonly name: string = "Panner3D";

	/**
	 * The panning object
	 */
	private _panner: PannerNode;
	readonly input: PannerNode;
	readonly output: PannerNode;

	readonly positionX: Param<"number">;
	readonly positionY: Param<"number">;
	readonly positionZ: Param<"number">;

	readonly orientationX: Param<"number">;
	readonly orientationY: Param<"number">;
	readonly orientationZ: Param<"number">;

	/**
	 * @param positionX The initial x position.
	 * @param positionY The initial y position.
	 * @param positionZ The initial z position.
	 */
	constructor(positionX: number, positionY: number, positionZ: number);
	constructor(options?: Partial<Panner3DOptions>);
	constructor() {
		const options = optionsFromArguments(
			Panner3D.getDefaults(),
			arguments,
			["positionX", "positionY", "positionZ"]
		);
		super(options);

		this._panner = this.input = this.output = this.context.createPanner();
		// set some values
		this.panningModel = options.panningModel;
		this.maxDistance = options.maxDistance;
		this.distanceModel = options.distanceModel;
		this.coneOuterGain = options.coneOuterGain;
		this.coneOuterAngle = options.coneOuterAngle;
		this.coneInnerAngle = options.coneInnerAngle;
		this.refDistance = options.refDistance;
		this.rolloffFactor = options.rolloffFactor;

		this.positionX = new Param({
			context: this.context,
			param: this._panner.positionX,
			value: options.positionX,
		});
		this.positionY = new Param({
			context: this.context,
			param: this._panner.positionY,
			value: options.positionY,
		});
		this.positionZ = new Param({
			context: this.context,
			param: this._panner.positionZ,
			value: options.positionZ,
		});
		this.orientationX = new Param({
			context: this.context,
			param: this._panner.orientationX,
			value: options.orientationX,
		});
		this.orientationY = new Param({
			context: this.context,
			param: this._panner.orientationY,
			value: options.orientationY,
		});
		this.orientationZ = new Param({
			context: this.context,
			param: this._panner.orientationZ,
			value: options.orientationZ,
		});
	}

	static getDefaults(): Panner3DOptions {
		return Object.assign(ToneAudioNode.getDefaults(), {
			coneInnerAngle: 360,
			coneOuterAngle: 360,
			coneOuterGain: 0,
			distanceModel: "inverse" as DistanceModelType,
			maxDistance: 10000,
			orientationX: 0,
			orientationY: 0,
			orientationZ: 0,
			panningModel: "equalpower" as PanningModelType,
			positionX: 0,
			positionY: 0,
			positionZ: 0,
			refDistance: 1,
			rolloffFactor: 1,
		});
	}

	/**
	 * Sets the position of the source in 3d space.
	 */
	setPosition(x: number, y: number, z: number): this {
		this.positionX.value = x;
		this.positionY.value = y;
		this.positionZ.value = z;
		return this;
	}

	/**
	 * Sets the orientation of the source in 3d space.
	 */
	setOrientation(x: number, y: number, z: number): this {
		this.orientationX.value = x;
		this.orientationY.value = y;
		this.orientationZ.value = z;
		return this;
	}

	/**
	 * The panning model. Either "equalpower" or "HRTF".
	 */
	get panningModel(): PanningModelType {
		return this._panner.panningModel;
	}
	set panningModel(val) {
		this._panner.panningModel = val;
	}

	/**
	 * A reference distance for reducing volume as source move further from the listener
	 */
	get refDistance(): number {
		return this._panner.refDistance;
	}
	set refDistance(val) {
		this._panner.refDistance = val;
	}

	/**
	 * Describes how quickly the volume is reduced as source moves away from listener.
	 */
	get rolloffFactor(): number {
		return this._panner.rolloffFactor;
	}
	set rolloffFactor(val) {
		this._panner.rolloffFactor = val;
	}

	/**
	 * The distance model used by,  "linear", "inverse", or "exponential".
	 */
	get distanceModel(): DistanceModelType {
		return this._panner.distanceModel;
	}
	set distanceModel(val) {
		this._panner.distanceModel = val;
	}

	/**
	 * The angle, in degrees, inside of which there will be no volume reduction
	 */
	get coneInnerAngle(): Degrees {
		return this._panner.coneInnerAngle;
	}
	set coneInnerAngle(val) {
		this._panner.coneInnerAngle = val;
	}

	/**
	 * The angle, in degrees, outside of which the volume will be reduced
	 * to a constant value of coneOuterGain
	 */
	get coneOuterAngle(): Degrees {
		return this._panner.coneOuterAngle;
	}
	set coneOuterAngle(val) {
		this._panner.coneOuterAngle = val;
	}

	/**
	 * The gain outside of the coneOuterAngle
	 */
	get coneOuterGain(): GainFactor {
		return this._panner.coneOuterGain;
	}
	set coneOuterGain(val) {
		this._panner.coneOuterGain = val;
	}

	/**
	 * The maximum distance between source and listener,
	 * after which the volume will not be reduced any further.
	 */
	get maxDistance(): number {
		return this._panner.maxDistance;
	}
	set maxDistance(val) {
		this._panner.maxDistance = val;
	}

	dispose(): this {
		super.dispose();
		this._panner.disconnect();
		this.orientationX.dispose();
		this.orientationY.dispose();
		this.orientationZ.dispose();
		this.positionX.dispose();
		this.positionY.dispose();
		this.positionZ.dispose();
		return this;
	}
}
