import { ToneAudioNode, ToneAudioNodeOptions } from "./ToneAudioNode.js";
import { Param } from "./Param.js";
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
export declare class ListenerClass extends ToneAudioNode<ListenerOptions> {
    readonly name: string;
    /**
     * The listener has no inputs or outputs.
     */
    output: undefined;
    input: undefined;
    readonly positionX: Param;
    readonly positionY: Param;
    readonly positionZ: Param;
    readonly forwardX: Param;
    readonly forwardY: Param;
    readonly forwardZ: Param;
    readonly upX: Param;
    readonly upY: Param;
    readonly upZ: Param;
    static getDefaults(): ListenerOptions;
    dispose(): this;
}
