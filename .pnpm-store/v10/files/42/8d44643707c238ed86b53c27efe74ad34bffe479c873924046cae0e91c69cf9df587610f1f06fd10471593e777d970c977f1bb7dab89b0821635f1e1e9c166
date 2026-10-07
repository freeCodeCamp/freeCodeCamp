import { ToneAudioNode, ToneAudioNodeOptions } from "./ToneAudioNode.js";
import { Param } from "./Param.js";
import { onContextClose, onContextInit } from "./ContextInitialization.js";

export interface ListenerOptions extends ToneAudioNodeOptions {
	positionX: number;
	positionY: number;
	positionZ: number;
	forwardX: number;
	forwardY: number;
	forwardZ: number;
	upX: number;
	upY: number;
	upZ: number;
}

/**
 * Tone.Listener is a thin wrapper around the AudioListener. Listener combined
 * with {@link Panner3D} makes up the Web Audio API's 3D panning system. Panner3D allows you
 * to place sounds in 3D and Listener allows you to navigate the 3D sound environment from
 * a first-person perspective. There is only one listener per audio context.
 */
export class ListenerClass extends ToneAudioNode<ListenerOptions> {
	readonly name: string = "Listener";

	/**
	 * The listener has no inputs or outputs.
	 */
	output: undefined;
	input: undefined;

	readonly positionX: Param = new Param({
		context: this.context,
		param: this.context.rawContext.listener.positionX,
	});

	readonly positionY: Param = new Param({
		context: this.context,
		param: this.context.rawContext.listener.positionY,
	});

	readonly positionZ: Param = new Param({
		context: this.context,
		param: this.context.rawContext.listener.positionZ,
	});

	readonly forwardX: Param = new Param({
		context: this.context,
		param: this.context.rawContext.listener.forwardX,
	});

	readonly forwardY: Param = new Param({
		context: this.context,
		param: this.context.rawContext.listener.forwardY,
	});

	readonly forwardZ: Param = new Param({
		context: this.context,
		param: this.context.rawContext.listener.forwardZ,
	});

	readonly upX: Param = new Param({
		context: this.context,
		param: this.context.rawContext.listener.upX,
	});

	readonly upY: Param = new Param({
		context: this.context,
		param: this.context.rawContext.listener.upY,
	});

	readonly upZ: Param = new Param({
		context: this.context,
		param: this.context.rawContext.listener.upZ,
	});

	static getDefaults(): ListenerOptions {
		return Object.assign(ToneAudioNode.getDefaults(), {
			positionX: 0,
			positionY: 0,
			positionZ: 0,
			forwardX: 0,
			forwardY: 0,
			forwardZ: -1,
			upX: 0,
			upY: 1,
			upZ: 0,
		});
	}

	dispose(): this {
		super.dispose();
		this.positionX.dispose();
		this.positionY.dispose();
		this.positionZ.dispose();
		this.forwardX.dispose();
		this.forwardY.dispose();
		this.forwardZ.dispose();
		this.upX.dispose();
		this.upY.dispose();
		this.upZ.dispose();
		return this;
	}
}

//-------------------------------------
// 	INITIALIZATION
//-------------------------------------

onContextInit((context) => {
	context.listener = new ListenerClass({ context });
});

onContextClose((context) => {
	context.listener.dispose();
});
