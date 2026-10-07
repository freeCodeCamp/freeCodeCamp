import { Param } from "../../core/context/Param.js";
import { ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { Degrees, GainFactor } from "../../core/type/Units.js";
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
export declare class Panner3D extends ToneAudioNode<Panner3DOptions> {
    readonly name: string;
    /**
     * The panning object
     */
    private _panner;
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
    static getDefaults(): Panner3DOptions;
    /**
     * Sets the position of the source in 3d space.
     */
    setPosition(x: number, y: number, z: number): this;
    /**
     * Sets the orientation of the source in 3d space.
     */
    setOrientation(x: number, y: number, z: number): this;
    /**
     * The panning model. Either "equalpower" or "HRTF".
     */
    get panningModel(): PanningModelType;
    set panningModel(val: PanningModelType);
    /**
     * A reference distance for reducing volume as source move further from the listener
     */
    get refDistance(): number;
    set refDistance(val: number);
    /**
     * Describes how quickly the volume is reduced as source moves away from listener.
     */
    get rolloffFactor(): number;
    set rolloffFactor(val: number);
    /**
     * The distance model used by,  "linear", "inverse", or "exponential".
     */
    get distanceModel(): DistanceModelType;
    set distanceModel(val: DistanceModelType);
    /**
     * The angle, in degrees, inside of which there will be no volume reduction
     */
    get coneInnerAngle(): Degrees;
    set coneInnerAngle(val: Degrees);
    /**
     * The angle, in degrees, outside of which the volume will be reduced
     * to a constant value of coneOuterGain
     */
    get coneOuterAngle(): Degrees;
    set coneOuterAngle(val: Degrees);
    /**
     * The gain outside of the coneOuterAngle
     */
    get coneOuterGain(): GainFactor;
    set coneOuterGain(val: GainFactor);
    /**
     * The maximum distance between source and listener,
     * after which the volume will not be reduced any further.
     */
    get maxDistance(): number;
    set maxDistance(val: number);
    dispose(): this;
}
